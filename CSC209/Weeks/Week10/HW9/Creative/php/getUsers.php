<?php
$filePath = '../data/user.txt';

$users = file_exists($filePath) ? file($filePath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) : [];
$response = [
    'count' => count($users),
    'users' => $users
];

header('Content-Type: application/json');
echo json_encode($response);
?>
