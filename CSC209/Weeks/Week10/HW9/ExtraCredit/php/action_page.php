<?php
// php/action_page.php

session_start();

$usersFile = __DIR__ . '/users.json';

$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

if (!file_exists($usersFile)) {
    echo "User database not found.";
    exit;
}

$users = json_decode(file_get_contents($usersFile), true);

if (isset($users[$username]) && $users[$username] === $password) {
    $_SESSION['username'] = $username;
    echo "Success";
} else {
    echo "Invalid username or password";
}
?>
