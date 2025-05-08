<?php
session_start();

$username = $_SESSION['username'] ?? $_POST['username'] ?? '';
if (!$username) {
  echo json_encode([]);
  exit;
}

$file = "../data/$username.json";

if (file_exists($file)) {
  echo file_get_contents($file);
} else {
  echo json_encode([]);
}
?>
