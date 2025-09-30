import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/components/VoiceRecordPlayer.module.scss";
import { showToast } from "../utils/Toast";

const VoiceRecordPlayer = ({
  className = "",
  onStartRecording = () => {},
  onStopRecording = () => {},
  onDelete = () => {},
  disabled = false,
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [hasRecording, setHasRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [recordingTime, setRecordingTime] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const [audioURL, setAudioURL] = useState(null);

  const audioRef = useRef(null);
  const recordingIntervalRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  useEffect(() => {
    if (isRecording) {
      recordingIntervalRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    } else {
      if (recordingIntervalRef.current) {
        clearInterval(recordingIntervalRef.current);
      }
    }

    return () => {
      if (recordingIntervalRef.current) {
        clearInterval(recordingIntervalRef.current);
      }
    };
  }, [isRecording]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleRecord = async () => {
    if (disabled) return;

    if (isRecording) {
      if (
        mediaRecorderRef.current &&
        mediaRecorderRef.current.state !== "inactive"
      ) {
        mediaRecorderRef.current.stop();
        mediaRecorderRef.current.stream
          .getTracks()
          .forEach((track) => track.stop());
      }
      setIsRecording(false);
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });

        audioChunksRef.current = [];
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;

        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            audioChunksRef.current.push(event.data);
          }
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunksRef.current, {
            type: "audio/webm",
          });
          const url = URL.createObjectURL(audioBlob);
          setAudioURL(url);
          setHasRecording(true);
          onStopRecording(audioBlob);
        };

        mediaRecorder.start();
        setIsRecording(true);
        setHasRecording(false);
        setRecordingTime(0);
        setCurrentTime(0);
        setIsPlaying(false);
        onStartRecording();
      } catch (error) {
        console.error("Erreur d'accès au microphone:", error);
        showToast(
          "Impossible d'accéder au microphone. Veuillez vérifier les permissions.",
          "error",
        );
      }
    }
  };

  const handlePlayPause = () => {
    if (!hasRecording || disabled) return;

    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  const handleDelete = () => {
    if (disabled) return;

    setIsClosing(true);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    if (audioURL) {
      URL.revokeObjectURL(audioURL);
    }

    setTimeout(() => {
      setHasRecording(false);
      setIsPlaying(false);
      setCurrentTime(0);
      setRecordingTime(0);
      setAudioURL(null);
      setIsClosing(false);
      onDelete();
    }, 800);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  return (
    <div
      className={`${styles.container} ${hasRecording ? styles.expanded : ""} ${isClosing ? styles.closing : ""} ${disabled ? styles.disabled : ""} ${className}`}
    >
      <button
        className={`${styles.recordButton} ${isRecording ? styles.recording : ""}`}
        onClick={handleRecord}
        type="button"
        aria-label={
          isRecording ? "Arrêter l'enregistrement" : "Démarrer l'enregistrement"
        }
        disabled={disabled || hasRecording}
      >
        <div className={styles.iconWrapper}>
          {isRecording ? (
            <div className={styles.stopIcon}></div>
          ) : (
            <div className={styles.recordIcon}></div>
          )}
        </div>
        {isRecording && <div className={styles.pulseRing}></div>}
      </button>
      <div className={styles.timeDisplay}>
        {isRecording ? formatTime(recordingTime) : formatTime(currentTime)}
      </div>
      {hasRecording && (
        <>
          <button
            className={`${styles.playButton} ${isPlaying ? styles.playing : ""} ${isClosing ? styles.fadeOutSlide : styles.fadeInSlide} ${styles.delayShort}`}
            onClick={handlePlayPause}
            type="button"
            aria-label={isPlaying ? "Pause" : "Lecture"}
            disabled={disabled}
          >
            {isPlaying ? (
              <div className={styles.pauseIcon}>
                <span></span>
                <span></span>
              </div>
            ) : (
              <svg className={styles.playIcon} viewBox="0 0 24 24" fill="none">
                <path d="M8 5v14l11-7z" fill="#9857d3" />
              </svg>
            )}
          </button>
          <button
            className={`${styles.deleteButton} ${isClosing ? styles.fadeOutSlide : styles.fadeInSlide} ${styles.delayLong}`}
            onClick={handleDelete}
            type="button"
            aria-label="Supprimer l'enregistrement"
            disabled={disabled}
          >
            <div className={styles.deleteIcon}>
              <span></span>
              <span></span>
            </div>
          </button>
        </>
      )}
      <audio
        ref={audioRef}
        src={audioURL}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default VoiceRecordPlayer;
