<?php
function extractFolderNumber($path) {
    $folderName = basename($path);
    $weekNrString = substr($folderName, -1);
    return ctype_digit($weekNrString) ? intval($weekNrString) : null;
}

function getImageList() {
    return glob("Images/*.jpg");
}

function generateSlideshowImages() {
    $images = getImageList(); 
    foreach ($images as $index => $img) {
        if ($index === 0){
            $display = "block";
        }else{
            $display = "none";
        }
        echo "<div class='mySlides fade' style='display: $display;'>
                <img src='$img' style='width:100%; max-height:400px;' alt='Image ".($index + 1)."' />
              </div>";
    }
}


function generateDots() {
    $images = getImageList();
    foreach ($images as $index => $img) {
        $active = $index === 0 ? " active" : "";
        echo "<span class='dot$active' onclick='currentSlide(".($index + 1).")'></span>";
    }
}
?>
