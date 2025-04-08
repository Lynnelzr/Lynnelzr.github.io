<?php
function generateCaptionFromFilename($filename) {
    $name = pathinfo($filename, PATHINFO_FILENAME); 
    $name = str_replace(['-', '_'], ' ', $name);     
    $name = ucwords(strtolower($name));              
    return $name;
}

function extractFolderNumber($path) {
    $folderName = basename($path);
    $weekNrString = substr($folderName, -1);
    return ctype_digit($weekNrString) ? intval($weekNrString) : null;
}

function getImageList() {
    return glob("Images/*.jpg");
}

function showSlide($slideIndex) {
    $images = getImageList();
    $totalSlides = count($images);

    if ($totalSlides === 0) {
        echo "<p>No images found.</p>";
        return;
    }

    // Wrap around if out of bounds
    $slideIndex = ($slideIndex < 1) ? $totalSlides : $slideIndex;
    $slideIndex = ($slideIndex > $totalSlides) ? 1 : $slideIndex;

    $currentImage = $images[$slideIndex - 1];
    echo "<div class='slide'>";
    echo "<img src='$currentImage' style='width:65%; max-height:400px;' alt='Slide $slideIndex' />";
    echo "<p>Image $slideIndex of $totalSlides</p>";

    // Navigation
    $prev = $slideIndex - 1;
    $next = $slideIndex + 1;
    echo "<div class='nav-buttons'>";
    echo "<a href='?slide=$prev' class='button'>&laquo; Prev</a> ";
    echo "<a href='?slide=$next' class='button'>Next &raquo;</a>";
    echo "</div>";
    echo "</div>";
}
?>
