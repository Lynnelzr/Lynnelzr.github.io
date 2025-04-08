<!DOCTYPE html>
<html>
<head>
    <title>Where Am I? (Step 2)</title>
    <?php
        include 'php/myLib.php';
        //$currentPath = realpath(dirname(__FILE__));
        $currentPath = realpath("../");
        $weekNr = extractFolderNumber($currentPath);
    ?>
</head>
<body>
    <h1>This page figures out its whereabouts</h1>
    <p>My week number is <?php echo $weekNr; ?></p>
</body>
</html>
