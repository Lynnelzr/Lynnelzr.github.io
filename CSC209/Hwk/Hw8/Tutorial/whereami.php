<!DOCTYPE html>
<html>
<head>
    <title>Where Am I?</title>
    <?php
        $currentPath = realpath(dirname(__FILE__));
        $folderName = basename($currentPath);
        $weekNrString = substr($folderName, -1);
        if (ctype_digit($weekNrString)) {
            $weekNr = (int)$weekNrString;
        } else {
            $weekNr = "undefined"; 
        }
    ?>
</head>
<body>
    <h1>This page figures out its whereabouts</h1>
    <p>My week number is <?php echo $weekNr; ?></p>
</body>
</html>
