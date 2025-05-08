<html>
<body>

Welcome <?php echo $_POST["username"]; ?><br>
Your password is: <?php echo $_POST["password"]; ?>

<?php
    $file = fopen("../output/user.txt","w");
    fwrite($file,$_POST["username"]);
    fwrite($file,$_POST["password"]);
    fclose($file);
?>

</body>
</html>