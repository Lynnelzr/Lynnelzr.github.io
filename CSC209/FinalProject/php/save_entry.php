<?php
session_start();
date_default_timezone_set("America/New_York");
$today = date("Y-m-d");

$username = $_SESSION['username'] ?? $_POST['username'] ?? '';
if (!$username) {
  echo "Not logged in";
  exit;
}
$date = $_POST['date'] ?? '';
$entryText = $_POST['entry'] ?? '';
$isPublic = $_POST['isPublic'] === 'true';
$hashtagsRaw = $_POST['hashtags'] ?? '';
$hashtags = $isPublic ? array_map('trim', explode(',', $hashtagsRaw)) : [];

if (!$date || !$entryText) {
  echo "Missing date or entry.";
  exit;
}

$dir = '../data';
if (!is_dir($dir)) {
  mkdir($dir, 0777, true);
}

$file = "$dir/$username.json";
$data = file_exists($file) ? json_decode(file_get_contents($file), true) : [];

//initialize list for this date if it doesn't exist
if (!isset($data[$date]) || !is_array($data[$date])) {
  $data[$date] = [];
}

// append new entry
$data[$date][] = [
  'text' => $entryText,
  'isPublic' => $isPublic,
  'hashtags' => $hashtags
];

if (file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT)) !== false) {
  echo "Success";
} else {
  echo "Failed to save entry.";
}
?>
