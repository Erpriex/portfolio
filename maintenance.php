<?php
header('HTTP/1.1 503 Service Unavailable');
header('Retry-After: 3600');
?>
<!DOCTYPE html>
<html>
<head>
    <?php
    include "./assets/depends.php";
    ?>
    <title>Maintenance | Clément Trempé • Développeur d'application</title>
</head>
<body>
    <?php
    include "./assets/loader.php";
    ?>

    <div class="page-mep" id="content">
        <?php
        include "./assets/header.php";
        ?>

        <h2 class="title"><b>Maintenance</b></h2>

        <div class="line-break"></div>
        
        <div class="container">
            <div class="center">
                <img src="./img/maintenance.jpg">
            </div>
            <div class="line-break"></div>
            <div class="line-break"></div>
            <h5>Oups, le site web est en maintenance<br/>Revenez plus tard !</h5>
        </div>
        <div class="line-break"></div>

    </div>

    <?php
    include "./assets/footer.php";
    ?>

</body>
</html>