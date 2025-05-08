<!DOCTYPE HTML>
<html> 
<head>
<?php
    include 'php/myLib.php';
    $currentPath = realpath(dirname(__FILE__));
    $labNr = extractFolderNumber($currentPath);
?>
<head>
<body>
    <p>We are at Lab<?php echo $labNr; ?></p>
    <form action="php/saveUsers.php" method="post">
        User Name: <input type="text" name="username"><br>
        Password: <input type="text" name="password"><br>
        <input type="submit">
    </form>

</body>
</html>