function loadCalendar() {
  calendarTable.innerHTML = '';
  document.getElementById('calendarTitle').textContent =
    `${new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} ${currentYear}`;
  document.getElementById('monthSelect').value = currentMonth;
  document.getElementById('yearSelect').value = currentYear;

  let row;
  const date = new Date(currentYear, currentMonth, 1);
  const startDay = date.getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  let count = 1;

  for (let i = 0; i < 6; i++) {
    row = document.createElement('tr');
    for (let j = 0; j < 7; j++) {
      const cell = document.createElement('td');
      if ((i === 0 && j < startDay) || count > daysInMonth) {
        cell.textContent = '';
      } else {
        const day = count;
        const yyyy = currentYear;
        const mm = String(currentMonth + 1).padStart(2, '0');
        const dd = String(day).padStart(2, '0');
        const dateStr = `${yyyy}-${mm}-${dd}`;
        cell.textContent = day;
        cell.onclick = () => showPopup(dateStr);
        count++;
      }
      row.appendChild(cell);
    }
    calendarTable.appendChild(row);
  }
}

function changeCalendar() {
  currentMonth = parseInt(document.getElementById('monthSelect').value);
  currentYear = parseInt(document.getElementById('yearSelect').value);
  loadCalendar();
  renderChart(entries);
}

function renderChart(entries) {
  const days = [];
  const counts = [];
  const mm = String(currentMonth + 1).padStart(2, '0');
  const yyyy = currentYear;
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  for (let i = 1; i <= daysInMonth; i++) {
    const dd = String(i).padStart(2, '0');
    const dateStr = `${yyyy}-${mm}-${dd}`;
    days.push(i);
    counts.push(entries[dateStr] ? entries[dateStr].length : 0);
  }

  const ctx = document.getElementById('entryChart').getContext('2d');
  if (window.entryChartInstance) {
    window.entryChartInstance.destroy();
  }
  window.entryChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: days,
      datasets: [{
        label: `Diary Entries for ${new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} ${currentYear}`,
        data: counts,
        backgroundColor: counts.map(count => {
          const alpha = Math.min(0.2 + (count / Math.max(...counts || [1])) * 0.8, 1);
          return `rgba(75, 192, 192, ${alpha})`;
        })
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function showPopup(dateStr) {
  const entryList = entries[dateStr] || [];
  document.getElementById('popupDate').textContent = dateStr;
  const popupContent = document.getElementById('popupContent');
  popupContent.innerHTML = '';

  if (entryList.length > 0) {
    entryList.forEach((entry, index) => {
      const box = document.createElement('div');
      box.className = 'entry-box';
      let content = `<strong>Entry:</strong> <div class='edit-area'><textarea id='editText${index}'>${entry.text}</textarea></div>`;
      content += `<br><strong>Privacy:</strong> ${entry.isPublic ? 'Public' : 'Private'}`;
      if (entry.isPublic) {
        content += `<br><strong>Hashtags:</strong> <div class='edit-hashtags'><input type='text' id='editTags${index}' value='${entry.hashtags.join(', ')}'></div>`;
      }

      const actions = document.createElement('div');
      actions.className = 'entry-actions';
      const editBtn = document.createElement('button');
      editBtn.textContent = 'Save Edit';
      editBtn.onclick = () => {
        const newText = document.getElementById(`editText${index}`).value;
        const newTags = document.getElementById(`editTags${index}`)?.value || '';
        const formData = new FormData();
        formData.append('date', dateStr);
        formData.append('index', index);
        formData.append('entry', newText);
        formData.append('isPublic', entry.isPublic);
        formData.append('hashtags', newTags);
        formData.append('username', sessionUsername || 'User');//make sure to find newly registered user's username

        fetch('php/edit_entry.php', {
          method: 'POST',
          body: formData
        }).then(res => res.text()).then(res => {
          alert(res);
          location.reload();
        });
      };

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.onclick = () => {
        if (confirm('Are you sure you want to delete this entry?')) {
          const formData = new FormData();
          formData.append('date', dateStr);
          formData.append('index', index);

          fetch('php/delete_entry.php', {
            method: 'POST',
            body: formData
          }).then(res => res.text()).then(res => {
            alert(res);
            location.reload();
          });
        }
      };

      actions.appendChild(editBtn);
      actions.appendChild(deleteBtn);
      box.innerHTML = content;
      box.appendChild(actions);
      popupContent.appendChild(box);
    });
  } else {
    popupContent.textContent = 'No entries for this day.';
  }

  document.getElementById('popup').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

function toggleDropdown() {
  const menu = document.getElementById("dropdownMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}