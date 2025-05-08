function toggleDropdown() {
    const dropdown = document.getElementById('dropdownMenu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function logout() {
    fetch('php/logout.php')
      .then(() => window.location.href = 'login.html');
}

function toggleHashtagField() {
    const isChecked = document.getElementById('isPublicCheckbox').checked;
    document.getElementById('hashtagField').style.display = isChecked ? 'block' : 'none';
}

function submitEntry() {
  const text = document.getElementById('entryText').value.trim();
  const isPublic = document.getElementById('isPublicCheckbox').checked;
  const hashtags = document.getElementById('hashtags').value.trim();
  const username = sessionStorage.getItem('username') || "User";

  if (!text) {
    alert("Entry cannot be empty.");
    return;
  }

  const localDate = new Date();
  const yyyy = localDate.getFullYear();
  const mm = String(localDate.getMonth() + 1).padStart(2, '0');
  const dd = String(localDate.getDate()).padStart(2, '0');
  const today = `${yyyy}-${mm}-${dd}`;

  const formData = new URLSearchParams();
  formData.append('username', username); //send it manually
  formData.append('date', today);
  formData.append('entry', text);
  formData.append('isPublic', isPublic.toString());
  formData.append('hashtags', hashtags);

  fetch('php/save_entry.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formData.toString()
  })
  .then(res => res.text())
  .then(msg => {
    alert(msg);
    document.getElementById('entryText').value = '';
    document.getElementById('isPublicCheckbox').checked = false;
    document.getElementById('hashtags').value = '';
    document.getElementById('writeForm').style.display = 'none';
  })
  .catch(err => {
    alert("Failed to submit entry.");
    console.error(err);
  });
}