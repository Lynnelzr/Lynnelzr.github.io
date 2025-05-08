<!DOCTYPE html>
<html>
<head>
    <title>Admin: View Users</title>
</head>
<body>
    <h1>Website User Report</h1>

    <?php
    $filePath = 'output/users.txt';
    
    $users = file($filePath);
    $userCount = count($users);

    echo "<p>Total users: $userCount</p>";
    
    ?>
</body>
</html>
