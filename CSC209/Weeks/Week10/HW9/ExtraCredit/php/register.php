<?php
// php/register.php

$usersFile = __DIR__ . '/users.json';

$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

if (!$username || !$password) {
    echo "Username and password required.";
    exit;
}

$users = [];
if (file_exists($usersFile)) {
    $users = json_decode(file_get_contents($usersFile), true);
}

if (isset($users[$username])) {
    echo "Username already exists.";
    exit;
}

$users[$username] = $password;
file_put_contents($usersFile, json_encode($users, JSON_PRETTY_PRINT));
echo "Success";
?>
