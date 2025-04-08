<!DOCTYPE html>
<html>
<head>
    <title>Where Am I? (PHP Only)</title>
    <?php
        include 'php/slideshowLib.php';
        $currentPath = realpath(dirname(__FILE__));
        $levelNr = extractFolderNumber($currentPath);
    ?>
</head>
<body>
    <h1>This is work for Level <?php echo $levelNr !== null ? $levelNr : 'Unknown'; ?></h1>
    <div id="imageContainer">
        <?php loadImage(); ?>
    </div>
</body>
</html>
