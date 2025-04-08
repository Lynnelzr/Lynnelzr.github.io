<!DOCTYPE html>
<html>
<head>
    <title>Where Am I? (with JS)</title>
    <?php
        include 'php/slideshowLib.php';
        $currentPath = realpath(dirname(__FILE__));
        $levelNr = extractFolderNumber($currentPath);
        $imagePaths = glob("Images/*.jpg"); 
        $imagePathsJSON = json_encode($imagePaths);
    ?>
</head>
<body>
    <h1>This is work for Level <?php echo $levelNr !== null ? $levelNr : 'Unknown'; ?></h1>
    <div id="imageContainer"></div>
    <script>
        const imagePaths = <?php echo $imagePathsJSON; ?>;
        imagePaths.forEach(path => {
            const img = document.createElement("img");
            img.src = path;
            img.width = 300;
            img.height = 200;
            img.alt = "Slideshow image";
            document.getElementById("imageContainer").appendChild(img);
        });
    </script>
</body>
</html>
