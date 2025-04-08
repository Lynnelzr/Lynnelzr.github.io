<?php
function extractFolderNumber($path) {
    $folderName = basename($path);
    $weekNrString = substr($folderName, -1);
    if (ctype_digit($weekNrString)) {
        return intval($weekNrString);
    } else {
        return null; 
    }
}

function loadImage(){
    $images = glob("Images/*");
    foreach ($images as $img) {
        echo '<img src="' . htmlspecialchars($img) . '" width="300" height="200" alt="Slideshow image"/>';
    }
}

?>
