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

    <div class="slideshow-container">
        <?php
            $images = getImageList($selectedAlbum);
            foreach ($images as $index => $imgPath):
                $caption = generateCaptionFromFilename($imgPath);
        ?>
            <div class="mySlide">
                <img src="<?php echo $imgPath; ?>" alt="<?php echo $caption; ?>">
                <div class="caption"><?php echo $caption; ?></div>
            </div>
        <?php endforeach; ?>

        <a class="prev" onclick="plusSlides(-1)">❮</a>
        <a class="next" onclick="plusSlides(1)">❯</a>
    </div>

    <div class="dot-container">
        <?php foreach ($images as $index => $_): ?>
            <span class="dot" onclick="currentSlide(<?php echo $index + 1; ?>)"></span>
        <?php endforeach; ?>
    </div>

    <div class="autoplay-control">
        <button id="toggleAutoplay">▶️ Auto Play</button>
    </div>

    <script>//js to make the slide auto play
        let slideIndex = 1;
        let autoplay = false;
        let interval;

        const slides = document.getElementsByClassName("mySlide");
        const dots = document.getElementsByClassName("dot");

        document.getElementById("toggleAutoplay").addEventListener("click", function () {
            autoplay = !autoplay;
            this.textContent = autoplay ? "⏸️ Pause" : "▶️ Auto Play";
            if (autoplay) {
                interval = setInterval(() => plusSlides(1), 1500);
            } else {
                clearInterval(interval);
            }
        });
    </script>

    <script src="js/showSlides.js"></script>
</body>
</html>
