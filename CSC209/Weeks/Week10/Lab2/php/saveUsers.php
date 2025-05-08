<html>
<body>

Welcome <?php echo $_POST["username"]; ?><br>
Your password is: <?php echo $_POST["password"]; ?>

<?php
    $file = fopen("../output/users.txt","a");
    $username = "username: " . $_POST["username"] . ' ';
    $password = "password: " . $_POST["password"] . PHP_EOL;
    fwrite($file,$username);
    fwrite($file,$password);
    fclose($file);
?>


</body>
</html>