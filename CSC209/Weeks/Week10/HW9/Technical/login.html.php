<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Login/Register</title>
  <link rel="stylesheet" href="css/login.css">
</head>
<body>

<div class="center-screen">
  <button id="showLoginBtn">Login</button>
</div>

<div class="login-container hidden" id="formContainer">
  <div class="avatar">
    <img src="image/user-3296.png" alt="User Avatar">
  </div>

  <form id="loginForm">
    <h2 id="formTitle">Login</h2>

    <label for="username">Username</label>
    <input type="text" id="username" name="username" required>

    <label for="password">Password</label>
    <input type="password" id="password" name="password" required>

    <button type="submit" id="submitBtn">Login</button>
    <p id="loginMessage"></p>
  </form>

  <p class="toggle-link">
    <a href="#" id="toggleLink">Don't have an account? Register here</a>
  </p>
</div>

<script src="js/login.js"></script>
</body>
</html>
