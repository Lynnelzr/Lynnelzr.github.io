//show form when login button is clicked
document.getElementById('showLoginBtn').addEventListener('click', function () {
  document.getElementById('formContainer').classList.add('visible');
  this.style.display = 'none'; // hide the login button
});

const form = document.getElementById('loginForm');
const toggleLink = document.getElementById('toggleLink');
const formTitle = document.getElementById('formTitle');
const submitBtn = document.getElementById('submitBtn');
const message = document.getElementById('loginMessage');

let isLogin = true;

toggleLink.addEventListener('click', function (e) {
  e.preventDefault();
  isLogin = !isLogin;

  formTitle.textContent = isLogin ? 'Login' : 'Register';
  submitBtn.textContent = isLogin ? 'Login' : 'Register';
  toggleLink.textContent = isLogin
    ? "Don't have an account? Register here"
    : 'Already have an account? Login here';
  message.textContent = '';
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const endpoint = isLogin ? 'php/action_page.php' : 'php/register.php';

  fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
  })
    .then(response => response.text())
    .then(data => {
      if (data.includes('Success')) {
        sessionStorage.setItem('username', username); // store username
        window.location.href = 'homepage.html'; // redirect to homepage
      } else {
        message.textContent = data;
        message.style.color = 'red';
      }
    })    
    .catch(error => {
      message.textContent = 'Server error.';
      message.style.color = 'red';
    });
});
