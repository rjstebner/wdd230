function createCalendar(year, month) {
    const calendarElement = document.getElementById('calendar');
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Japanese month names
    const monthNames = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
    const currentMonthName = monthNames[month];

    // Japanese day names
    const dayNames = ["日", "月", "火", "水", "木", "金", "土"];

    // Create the header with the month and year
    let calendarHTML = `<h2>${year}年 ${currentMonthName}</h2>`;
    calendarHTML += '<table>';
    calendarHTML += '<tr><th>日</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th></tr>';

    let dayCount = 1;
    for (let i = 0; i < 6; i++) {
        calendarHTML += '<tr>';
        for (let j = 0; j < 7; j++) {
            if (dayCount <= daysInMonth) {
                calendarHTML += `<td>${dayCount}</td>`;
                dayCount++;
            } else {
                calendarHTML += '<td></td>';
            }
        }
        calendarHTML += '</tr>';
    }

    calendarHTML += '</table>';
    calendarElement.innerHTML = calendarHTML;
}

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
createCalendar(currentYear, currentMonth);
