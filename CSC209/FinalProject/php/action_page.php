<?php
session_start();
$_SESSION['username'] = $username;

$filename = '../data/user.txt';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"] ?? '';
    $password = $_POST["password"] ?? '';

    $filePath = "../data/user.txt"; 
    if (file_exists($filePath)) {
        $users = file($filePath, FILE_IGNORE_NEW_LINES);
        foreach ($users as $user) {
            list($storedUser, $storedPass) = explode("|", $user);
            if ($storedUser === $username && $storedPass === $password) {
                $_SESSION['username'] = $username;  //store username in session
                echo "Success";
                exit;
            }
        }
    }
    echo "Invalid username or password.";
}
?>
