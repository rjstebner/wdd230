const jsonFilePath = 'data/rental.json';

fetch(jsonFilePath)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const jsonData = data;

    // Added log statement for debugging
    console.log('Number of rental types:', jsonData.rental_types.length);

    populateTable(jsonData);
  })
  .catch(error => {
    console.error('Error fetching or parsing JSON data:', error);
  });

function populateTable(jsonData) {
  var tableBody = document.getElementById("rentalTable").getElementsByTagName('tbody')[0];

  jsonData.rental_types.forEach(function (rentalType) {
    // Added log statement for debugging
    console.log('Processing rental type:', rentalType);

    var row = tableBody.insertRow(tableBody.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    cell1.innerHTML = rentalType.type;
    cell2.innerHTML = rentalType.max_persons;

    if (rentalType.reservation) {
      cell3.innerHTML = rentalType.reservation["half_day"] || '';
      cell4.innerHTML = rentalType.reservation["full_day"] || '';
    } else {
      cell3.innerHTML = '';
      cell4.innerHTML = '';
    }
    if (rentalType.walk) {
      cell5.innerHTML = rentalType.walk["half_day"] || '';
      cell6.innerHTML = rentalType.walk["full_day"] || '';
    } else {
      cell5.innerHTML = '';
      cell6.innerHTML = '';
    }
  });
}
