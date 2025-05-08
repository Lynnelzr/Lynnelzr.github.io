fetch('php/admin_data.php')
    .then(res => res.json())
    .then(data => {
    // User Stats
    document.getElementById('userCount').textContent = data.users.length;
    const userList = document.getElementById('userList');
    data.users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user;
        userList.appendChild(li);
    });

    // Entry Stats
    document.getElementById('entryCount').textContent = data.todayEntries.length;
    const entryList = document.getElementById('entryList');
    data.todayEntries.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `@${entry.username} - ${entry.date}`;
        entryList.appendChild(li);
    });

    // Activity Stats
    document.getElementById('totalEntries').textContent = data.totalEntries;
    document.getElementById('averageEntries').textContent = data.averageEntries.toFixed(2);
    });