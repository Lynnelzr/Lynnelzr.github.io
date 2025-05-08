<?php
session_start();

$username = $_SESSION['username'] ?? $_POST['username'] ?? '';
if (!$username) {
  echo json_encode([]);
  exit;
}

$username = $_POST['username'] ?? '';
$date = $_POST['date'] ?? '';
$index = isset($_POST['index']) ? intval($_POST['index']) : -1;
$newText = $_POST['entry'] ?? '';
$isPublic = $_POST['isPublic'] === 'true';
$hashtagsRaw = $_POST['hashtags'] ?? '';
$hashtags = $isPublic ? array_map('trim', explode(',', $hashtagsRaw)) : [];

if (!$date || $index < 0 || $newText === '') {
  echo "Missing required data.";
  exit;
}

$file = "../data/$username.json";
if (!file_exists($file)) {
  echo "No data found.";
  exit;
}

$data = json_decode(file_get_contents($file), true);

if (!isset($data[$date][$index])) {
  echo "Entry not found.";
  exit;
}

$data[$date][$index] = [
  'text' => $newText,
  'isPublic' => $isPublic,
  'hashtags' => $hashtags
];

if (file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT)) !== false) {
  echo "Success";
} else {
  echo "Failed to save edit.";
}
?>
