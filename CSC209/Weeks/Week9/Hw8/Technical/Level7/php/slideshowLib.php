<?php
function extractFolderNumber($path) {
    $folderName = basename($path);
    $weekNrString = substr($folderName, -1);
    return ctype_digit($weekNrString) ? intval($weekNrString) : null;
}

function getAvailableAlbums($baseDir = 'Images') {
    return array_filter(glob("$baseDir/*"), 'is_dir');
}

function getImageList($folder) {
    $safeFolder = basename($folder); // sanitize input
    return glob("Images/$safeFolder/*.{jpg,jpeg,png,gif}", GLOB_BRACE);
}

function generateCaptionFromFilename($filename) {
    $name = pathinfo($filename, PATHINFO_FILENAME);
    $name = str_replace(['-', '_'], ' ', $name);
    return ucwords(strtolower($name));
}
?>
