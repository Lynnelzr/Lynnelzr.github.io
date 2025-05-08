<?php
$usersFile = __DIR__ . '/users.json';
if (!file_exists($usersFile)) {
    echo json_encode([
        'count' => 0,
        'users' => []
    ]);
    exit;
}
$users = json_decode(file_get_contents($usersFile), true);
$usernames = array_keys($users);
$count = count($usernames);
echo json_encode([
    'count' => $count,
    'users' => $usernames
]);
?>
