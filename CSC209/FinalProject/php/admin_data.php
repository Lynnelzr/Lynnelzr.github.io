<?php
header('Content-Type: application/json');

date_default_timezone_set("America/New_York");
$today = date("Y-m-d");

//file paths
$dataDir = '../data';
$usersFile = "$dataDir/user.txt";

//initialize
$response = [
    'users' => [],
    'todayEntries' => [],
    'totalEntries' => 0,
    'averageEntries' => 0
];

//load users
if (file_exists($usersFile)) {
    $lines = file($usersFile, FILE_IGNORE_NEW_LINES);
    foreach ($lines as $line) {
        $parts = explode('|', $line);
        if (count($parts) > 0) {
            $response['users'][] = trim($parts[0]);
        }
    }
}

//loop through each user file
$userEntryCounts = [];
if (is_dir($dataDir)) {
    foreach (glob("$dataDir/*.json") as $file) {
        $filename = basename($file);
        if ($filename === 'user.txt') continue;

        $entriesByDate = json_decode(file_get_contents($file), true);
        if (!is_array($entriesByDate)) continue;
        
        foreach ($entriesByDate as $date => $entryList) {
            foreach ($entryList as $entry) {
                if (!empty($entry['text'])) {
                    $username = basename($file, '.json');
                    $response['totalEntries']++;
                    $userEntryCounts[$username] = ($userEntryCounts[$username] ?? 0) + 1;
        
                    if ($date === $today) {
                        $response['todayEntries'][] = [
                            'username' => $username,
                            'date' => $date,
                            'text' => $entry['text']
                        ];
                    }
                }
            }
        }
        
    }
}

if (count($userEntryCounts) > 0) {
    $response['averageEntries'] = $response['totalEntries'] / count($userEntryCounts);
}

echo json_encode($response);
?>
