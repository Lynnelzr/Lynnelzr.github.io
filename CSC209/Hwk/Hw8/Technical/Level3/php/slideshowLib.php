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

function getImageList(){
    return glob("Images/*.jpg");
}

function generateImageHTML(){
    $images = getImageList();
    foreach ($images as $index => $img) {
        $imgEscaped = htmlspecialchars($img);
        echo '<img 
                src="' . $imgEscaped . '" 
                width="300" 
                height="200" 
                alt="Slideshow image" 
                class="slideshow-img" 
                data-img-id="' . $index . '" 
              />';
    }
}

function generateImageSelectorOptions(){
    $images = getImageList();
    echo '<option value="all">Show All</option>';
    foreach ($images as $index => $imgPath) {
        echo '<option value="' . $index . '">Image ' . ($index + 1) . '</option>';
    }
}
?>
