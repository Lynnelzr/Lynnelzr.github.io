<!DOCTYPE html>
<html>
<head>
    <title>Slideshow by Folder</title>
    <link rel="stylesheet" href="css/slideshow.css">
    <?php include 'php/slideshowLib.php'; ?>
</head>
<body>

    <div class="menu">
        <?php
            $albums = getAvailableAlbums(); 
            $selectedAlbum = isset($_GET['album']) ? basename($_GET['album']) : basename($albums[0]);
            foreach ($albums as $albumPath) {
                $albumName = basename($albumPath);
                $active = ($albumName === $selectedAlbum) ? 'active' : '';
                echo "<a class='$active' href='?album=$albumName'>$albumName</a>";
            }
        ?>
    </div>

    <h1>Slideshow: <?php echo htmlspecialchars($selectedAlbum); ?></h1>

    <?php
        $images = getImageList($selectedAlbum);
        $totalSlides = count($images);
        $currentSlide = isset($_GET['slide']) ? intval($_GET['slide']) : 1;

        if ($totalSlides === 0) {
            echo "<p>No images found in this folder.</p>";
        } else {
            if ($currentSlide < 1) $currentSlide = $totalSlides;
            if ($currentSlide > $totalSlides) $currentSlide = 1;

            $img = $images[$currentSlide - 1];
            $caption = generateCaptionFromFilename($img);

            //display the current slide
            echo "<div class='slideshow-container'>";
            echo "<div class='mySlide'>";
            echo "<img src='$img' alt='$caption'>";
            echo "<div class='caption'>$caption</div>";
            echo "</div>";

            echo "<a class='prev' href='?album=$selectedAlbum&slide=" . ($currentSlide - 1) . "'>&#10094;</a>";
            echo "<a class='next' href='?album=$selectedAlbum&slide=" . ($currentSlide + 1) . "'>&#10095;</a>";
            echo "</div>";

            //dots for slide navigation
            echo "<div class='dot-container'>";
            foreach ($images as $index => $imgPath) {
                $slideNum = $index + 1;
                if ($slideNum === $currentSlide) {
                    $dotActive = ' active';
                } else {
                    $dotActive = '';
                }                
                echo "<a href='?album=$selectedAlbum&slide=$slideNum'><span class='dot$dotActive'></span></a>";
            }
            echo "</div>";
        }
    ?>
</body>
</html>
