<!DOCTYPE html>
<html>
<head>
    <?php
    include "./assets/depends.php";
    ?>
    <link rel="stylesheet" type="text/css" href="./css/projects-style.css">
	<title>Réalisations | Clément Trempé • Portfolio</title>
</head>
<body>

    <?php
    include "./assets/checkMaintenance.php";
    include "./assets/loader.php";
    ?>

    <div class="page-mep" id="content">

        <?php
        include "./assets/header.php";
        ?>

        <h2 class="title"><b>Quelques projets</b></h2>


        <div class="line-break"></div>
        <div class="line-break"></div>
        
        <div class="container">

            <!-- Hellaria -->
            <div class="row">
                <div class="col">
                    <h3 class="center">Hellaria</h3>
                    <p>Hellaria est un projet informatique vidéo-ludique basé basé sur un serveur Minecraft comptant à son actif plus de 100 utilisateurs uniques.</p>
                    <ul>
                        <li>Développement d'un serveur proxy et d'APIs</li>
                        <li>Développement de jeux vidéos</li>
                        <li>Développement d'un système de serveurs à la demande</li>
                        <li>Administration des bases de données</li>
                    </ul>
                    <p><b>Langages :</b> </p>
                    <ul>
                        <li class="tag-language">Java</li>
                        <li class="tag-language">JavaScript</li>
                        <li class="tag-language">HTML/CSS</li>
                        <li class="tag-language">SQL</li>
                    </ul>
                    <p><b>Frameworks & librairies :</b> </p>
                    <ul>
                        <li class="tag-framework">RabbitMQ</li>
                        <li class="tag-framework">NodeJS</li>
                        <li class="tag-framework">Git</li>
                        <li class="tag-framework">MariaDB</li>
                        <li class="tag-framework">Maven</li>
                        <li class="tag-framework">Redis</li>
                    </ul>
                </div>
                <div class="col center">
                    <div class="line-break"></div>
                    <div class="line-break"></div>
                    <img src="./img/Logo_Hellaria.png" width="230" height="200">
                </div>
            </div>


        </div>
        <div class="line-break"></div>
        <div class="line-break"></div>


    </div>

    <?php
    include "./assets/footer.php";
    ?>

</body>
</html>