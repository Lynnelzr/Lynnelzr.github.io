<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Admin: View Users</title>
  <link rel = "stylesheet" href = "css/admin.css">
  <script>
    function loadUsers() {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", "php/getUsers.php", true);
      xhr.onload = function() {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          document.getElementById("userCount").innerText = "Total users: " + response.count;
          document.getElementById("userList").innerHTML = response.users.map(user => `<li>${user}</li>`).join("");
        }
      };
      xhr.send();
    }
  </script>
</head>
<body>
  <div class="container">
    <h1>Website User Report</h1>
    <button onclick="loadUsers()">Refresh User List</button>
    <p id="userCount">Total users: ...</p>
    <ul id="userList"></ul>
  </div>
</body>
</html>
