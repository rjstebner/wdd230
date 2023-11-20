const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const lastModified = new Date(document.lastModified);
const formattedLastModified = 'Last Modified:' + lastModified.toLocaleDateString('en-UK');
document.getElementById('lastmodified').textContent = formattedLastModified;

const timestampField = document.getElementById('timestamp');
if (timestampField) {
  timestampField.value = lastModified.toISOString();
}

function createCalendar(year = new Date().getFullYear(), month = new Date().getMonth()) {
    const calendarElement = document.getElementById('calendar');
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const currentDay = new Date().getDate(); 
    const firstDay = new Date(year, month, 1).getDay();

    // Japanese month names
    const monthNames = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
    const currentMonthName = monthNames[month];

    // Japanese day names
    const dayNames = ["日", "月", "火", "水", "木", "金", "土"];

   
    let calendarHTML = `<h2>${year}年 ${currentMonthName}</h2>`;
    calendarHTML += '<table>';
    calendarHTML += '<tr><th>日</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th></tr>';
    
    let dayCount = 1;
    let dayInWeek = 0;
    
    calendarHTML += '<tr>';
    // Create empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
        calendarHTML += '<td></td>';
        dayInWeek++;
    }

    for (let i = firstDay; i < 7; i++) {
      if (dayCount <= daysInMonth) {
          if (dayCount === currentDay) {
              calendarHTML += `<td class="current-day">${dayCount}</td>`; // Highlight the current day
          } else {
              calendarHTML += `<td>${dayCount}</td>`;
          }
          dayCount++;
          dayInWeek++;
      }
  }
    calendarHTML += '</tr>';

    while (dayCount <= daysInMonth) {
        calendarHTML += '<tr>';
        for (let j = 0; j < 7; j++) {
            if (dayCount <= daysInMonth) {
                if (dayCount === currentDay) {
                    calendarHTML += `<td class="current-day">${dayCount}</td>`;
                } else {
                    calendarHTML += `<td>${dayCount}</td>`;
                }
                dayCount++;
            }
        }
        calendarHTML += '</tr>';
    }

    calendarHTML += '</table>';
    calendarElement.innerHTML = calendarHTML;
}

createCalendar();
