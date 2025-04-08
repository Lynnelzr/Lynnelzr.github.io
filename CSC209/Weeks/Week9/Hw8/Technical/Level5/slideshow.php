<!DOCTYPE html>
<html>
<head>
    <title>PHP-Only Slideshow</title>
    <link rel="stylesheet" href="css/slideshow.css">
    <?php include 'php/slideshowLib.php'; ?>
</head>
<body>
    <h1>
        This is work for Level 
        <?php
            $currentPath = realpath(dirname(__FILE__));
            echo ($level = extractFolderNumber($currentPath)) !== null ? $level : 'Unknown';
        ?>
    </h1>

    <?php
        $images = getImageList();
        $totalSlides = count($images);
        $currentSlide = isset($_GET['slide']) ? intval($_GET['slide']) : 1;

        if ($totalSlides === 0) {
            echo "<p>No images found.</p>";
        } else {
            if ($currentSlide < 1) $currentSlide = $totalSlides;
            if ($currentSlide > $totalSlides) $currentSlide = 1;

            $img = $images[$currentSlide - 1];
            echo "<div class='slideshow-container'>";
            echo "<div class='mySlide'>";
            echo "<img src='$img' alt='Slide $currentSlide'>";
            echo "</div>";

            echo "<a class='prev' href='?slide=" . ($currentSlide - 1) . "'>&#10094;</a>";
            echo "<a class='next' href='?slide=" . ($currentSlide + 1) . "'>&#10095;</a>";
            echo "</div>";

            echo "<div class='dot-container'>";
            foreach ($images as $index => $imgPath) {
                $slideNum = $index + 1;
                if ($slideNum === $currentSlide) {
                    $activeClass = ' active';
                } else {
                    $activeClass = '';
                }                
                echo "<a href='?slide=$slideNum'><span class='dot$activeClass'></span></a>";
            }
            echo "</div>";
        }
    ?>
</body>
</html>
