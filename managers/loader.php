<?php
echo '
<div class="loader-mep">
    <section class="loader-section">
        <span class="loader-quart"></span>
        Chargement...
    </section>
</div>

<script type="text/javascript" src="http://code.jquery.com/jquery.min.js"></script>
<script type="text/javascript">
        $(document).ready(function(){
            $(".loader-mep").fadeOut(1000, function() {
                $("#content").fadeIn(500)
                $("footer").fadeIn(500)
        })
    })
</script>
';
?>