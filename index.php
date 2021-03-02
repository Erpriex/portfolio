<!DOCTYPE html>
<html>
<head>
    <?php
    include "./assets/depends.php";
    ?>
	<title>Clément Trempé • Portfolio</title>
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

        <h2 class="title"><b>Portfolio</b></h2>


        <div class="line-break"></div>
        <div class="line-break"></div>
        
        <div class="container">
            
            <h3 class="center">Présentation</h3>
            <div class="line-break"></div>
            <div class="row">
                <div class="col">
                    <p><br>Je m’appelle Clément et suis étudiant en informatique avec pour objectif de m’investir dans le développement, le réseau et l’administration système. Âgé de 18 ans, je porte un grand intérêt pour l’actualité, les relations humaines et l’informatique que je cultive en étant développeur. Originaire de Grenoble, je suis aujourd’hui Angevin dans le cadre de la poursuite de mes études. Concernant ma personnalité, mon entourage a plaisir à dire que je suis quelqu’un de sérieux, calme, appliqué dans son travail et qui aime s’investir dans ce qui me passionne.</p>
                </div>
                <div class="col center">
                    <img src="./img/ClémentTrempé.jpg" width="300" height="300">
                </div>
            </div>

            <div class="line-break"></div>
            <div class="line-break"></div>

            <h3 class="center">Compétences</h3>
            <div class="line-break"></div>
            <div class="row">
                <div class="col">
                    <h5>Front-End</h5>
                    <img src="./img/skills/html5.png" title="HTML 5" width="50" height="50">
                    <img src="./img/skills/css3.png" title="CSS 3" width="40" height="50">
                    <img src="./img/skills/js.png" title="JavaScript" width="50" height="50">
                    <img src="./img/skills/bootstrap.png" title="Bootstrap" width="50" height="50">
                </div>
                <div class="col">
                    <h5>Back-End</h5>
                    <img src="./img/skills/java.png" title="Java" width="30" height="50">
                    <img src="./img/skills/nodejs.png" title="NodeJS" width="50" height="30">
                    <img src="./img/skills/php.png" title="PHP" width="50" height="30">
                    <img src="./img/skills/c%23.png" title="C#" width="50" height="50">
                </div>
                <div class="col">
                    <h5>Base de données</h5>
                    <img src="./img/skills/mysql.png" title="MySQL" width="50" height="30">
                    <img src="./img/skills/redis.png" title="Redis" width="50" height="50">
                </div>
                <div class="col">
                    <h5>Softwares</h5>
                    <img src="./img/skills/git.png" title="Git" width="50" height="20">
                    <img src="./img/skills/github.png" title="GitHub" width="50" height="50">
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