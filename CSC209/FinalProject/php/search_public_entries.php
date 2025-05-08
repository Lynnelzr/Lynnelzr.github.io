<?php
$hashtag = isset($_GET['hashtag']) ? trim($_GET['hashtag']) : '';
$results = [];

if (!$hashtag) {
  echo json_encode([]);
  exit;
}

$dir = '../data';
if (!is_dir($dir)) {
  echo json_encode([]);
  exit;
}

foreach (glob("$dir/*.json") as $file) {
  $username = basename($file, '.json');
  $data = json_decode(file_get_contents($file), true);

  foreach ($data as $date => $entries) {
    foreach ($entries as $entry) {
      if (
        isset($entry['isPublic']) && $entry['isPublic'] &&
        isset($entry['hashtags']) && in_array($hashtag, $entry['hashtags'])
      ) {
        $results[] = [
          'username' => $username,
          'date' => $date,
          'text' => $entry['text']
        ];
      }
    }
  }
}

header('Content-Type: application/json; charset=UTF-8');
echo json_encode($results);

?>
