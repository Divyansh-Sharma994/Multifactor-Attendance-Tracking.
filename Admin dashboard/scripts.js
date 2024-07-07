// Get the current time and date
function updateTimeAndDate() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    const formattedTime = `${hours % 12}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
    const formattedDate = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  
    document.querySelector('.time').textContent = formattedTime;
    document.querySelector('.date').innerHTML = `Today:<br>${formattedDate}`;
  }
  
  // Call updateTimeAndDate every second
  setInterval(updateTimeAndDate, 1000);
  updateTimeAndDate();
  
  // Generate calendar dates
  function generateCalendarDates() {
    const calendarDates = document.querySelector('.calendar-dates');
    const daysInMonth = new Date(2023, 8, 0).getDate(); // August 2023
    const startDay = new Date(2023, 7, 1).getDay(); // Start day of August 2023
  
    // Clear existing dates
    calendarDates.innerHTML = '';
  
    // Fill in the blank days before the start of the month
    for (let i = 0; i < startDay; i++) {
      const blankDay = document.createElement('div');
      calendarDates.appendChild(blankDay);
    }
  
    // Fill in the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateElement = document.createElement('div');
      dateElement.textContent = day;
      calendarDates.appendChild(dateElement);
    }
  }
  
  generateCalendarDates();

  window.onload = function() {
    var leftImage = document.getElementById('leftImage');
    var dashboard = document.querySelector('.dashboard');

    function adjustDashboardHeight() {
        if (leftImage.complete) {
            dashboard.style.height = leftImage.clientHeight + 'px';
        } else {
            leftImage.onload = function() {
                dashboard.style.height = leftImage.clientHeight + 'px';
            };
        }
    }

    adjustDashboardHeight();
    window.addEventListener('resize', adjustDashboardHeight);
};

  