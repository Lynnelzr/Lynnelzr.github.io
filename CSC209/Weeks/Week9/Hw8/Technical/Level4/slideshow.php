<!DOCTYPE html>
<html>
<head>
    <title>PHP Slideshow with JS</title>
    <link rel="stylesheet" href="css/slideshow.css">
    <?php include 'php/slideshowLib.php'; ?>
</head>
<body>
    <h1>This is work for Level <?php 
        $currentPath = realpath(dirname(__FILE__));
        echo ($level = extractFolderNumber($currentPath)) !== null ? $level : 'Unknown'; 
    ?></h1>

    <div class="slideshow-container">
        <?php generateSlideshowImages(); ?>
        <a class="prev" onclick="plusSlides(-1)">❮</a>
        <a class="next" onclick="plusSlides(1)">❯</a>
    </div>

    <br>
    <div style="text-align:center">
        <?php generateDots(); ?>
    </div>

    <script src="js/slideshow.js"></script>
</body>
</html>
