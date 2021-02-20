<!DOCTYPE html>
<html>
<head>
    <?php
    include "./managers/depends.php";
    ?>
	<title>Clément Trempé • Portfolio</title>
</head>
<body>

    <?php
    include "./managers/checkMaintenance.php";
    include "./managers/loader.php";
    ?>

    <div class="page-mep" id="content">

        <?php
        include "./managers/header.php";
        ?>

        <h2 class="title"><b>Portfolio</b></h2>


        <div class="line-break"></div>
        <div class="line-break"></div>
        
        <div class="container">
            
            <h3 class="center">Présentation</h3>
            <div class="line-break"></div>
            <div class="row">
                <div class="col">
                    <p><br>Je m’appelle Clément et suis étudiant en informatique avec pour objectif de m’investir dans le développement, le réseau et l’administration système. Âgé de 18 ans, je porte un grand intérêt pour l’actualité, les relations humaines et l’informatique que je cultive en étant développeur. Originaire de Grenoble, je suis aujourd’hui Angevin dans le cadre la poursuite de mes études. Concernant ma personnalité, mon entourage a plaisir à dire que je suis quelqu’un de sérieux, calme, appliqué dans son travail et qui aime s’investir dans ce qui me passionne. Côté loisirs, je pratique le ski et la randonnée pédestre.</p>
                </div>
                <div class="col center">
                    <img src="./img/ClémentTrempé.jpg" width="300" height="300">
                </div>
            </div>


        </div>
        <div class="line-break"></div>


    </div>

    <?php
    include "./managers/footer.php";
    ?>

</body>
</html>