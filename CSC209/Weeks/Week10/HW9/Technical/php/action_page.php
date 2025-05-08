<?php
$filename = '../data/user.txt';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user = trim($_POST['username'] ?? '');
    $pass = trim($_POST['password'] ?? '');
    if ($user === '' || $pass === '') {
        echo 'Username and password are required.';
        exit;
    }
    if (!file_exists($filename)) {
        echo 'No registered users. Please register first.';
        exit;
    }
    $lines = file($filename, FILE_IGNORE_NEW_LINES);
    foreach ($lines as $line) {
        list($storedUser, $storedPass) = explode('|', $line);
        if ($storedUser === $user && $storedPass === $pass) {
            echo "Login Success! Welcome, " . htmlspecialchars($user);
            exit;
        }
    }
    echo 'Login Failed: Invalid username or password.';
} else {
    echo 'Invalid request method.';
}
