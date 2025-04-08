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
?>
