<!DOCTYPE html>
<html>
<head>
    <title>Where Am I? (Organized Version)</title>
    <link rel="stylesheet" href="styles.css"> 
    <style>
        .slideshow-img { display: block; margin-bottom: 10px; }
        .hidden { display: none; }
    </style>
    <?php
        include 'php/slideshowLib.php';
        $currentPath = realpath(dirname(__FILE__));
        $levelNr = extractFolderNumber($currentPath);
    ?>
</head>
<body>
    <h1>This is work for Level <?php echo $levelNr !== null ? $levelNr : 'Unknown'; ?></h1>

    <label for="imageSelector">Choose an image to display:</label>
    <select id="imageSelector">
        <?php generateImageSelectorOptions(); ?>
    </select>

    <div id="imageContainer">
        <?php generateImageHTML(); ?>
    </div>

    <script src="js/filter.js"></script>
</body>
</html>
