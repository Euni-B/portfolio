const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const toggleBtn = document.getElementById('toggle-format');
const themeBtn = document.getElementById('toggle-theme');

let is24Hour = true;
let showColon = true; // for blinking effect

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  let amPm = '';
  if (!is24Hour) {
    amPm = hours >= 12 ? ' PM' : ' AM';
    hours = hours % 12 || 12;
  }

  const colon = showColon ? ':' : ' ';
  const formattedTime =
    `${hours.toString().padStart(2,'0')}${colon}` +
    `${minutes.toString().padStart(2,'0')}${colon}` +
    `${seconds.toString().padStart(2,'0')}` + amPm;

  timeEl.textContent = formattedTime;

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateEl.textContent = now.toLocaleDateString(undefined, options);
}

// Toggle 12/24 hour format
toggleBtn.addEventListener('click', () => {
  is24Hour = !is24Hour;
  toggleBtn.textContent = is24Hour ? 'Switch to 12-hour' : 'Switch to 24-hour';
  updateClock();
});

// Toggle dark/light mode
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  themeBtn.textContent = document.body.classList.contains('light-mode') 
    ? 'Switch to Dark Mode' 
    : 'Switch to Light Mode';
});

// Blink colons every 500ms
setInterval(() => {
  showColon = !showColon;
  updateClock();
}, 500);

// Initial call
updateClock();
