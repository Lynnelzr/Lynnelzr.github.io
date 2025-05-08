<?php
session_start();

if (!isset($_SESSION['username'])) {
  echo "Not logged in";
  exit;
}

$username = $_SESSION['username'];
$date = $_POST['date'] ?? '';
$index = isset($_POST['index']) ? intval($_POST['index']) : -1;

if (!$date || $index < 0) {
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

array_splice($data[$date], $index, 1);

if (empty($data[$date])) {
  unset($data[$date]); //remove the date if no entries remain
}

if (file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT)) !== false) {
  echo "Success";
} else {
  echo "Failed to delete entry.";
}
?>
