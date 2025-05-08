<?php
session_start();
$_SESSION['username'] = $username;

$filename = "../data/user.txt";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user = trim($_POST['username'] ?? '');
    $pass = trim($_POST['password'] ?? '');
    if ($user === '' || $pass === '') {
        echo 'Username and password are required.';
        exit;
    }
    //check if username already exists
    if (file_exists($filename)) {
        $lines = file($filename, FILE_IGNORE_NEW_LINES);
        foreach ($lines as $line) {
            list($storedUser, ) = explode('|', $line);
            if ($storedUser === $user) {
                echo 'Registration Failed: Username already exists.';
                exit;
            }
        }
    }
    file_put_contents($filename, "$user|$pass\n", FILE_APPEND);

    echo 'Registration Success! You can now log in.';
} else {
    echo 'Invalid request method.';
}
