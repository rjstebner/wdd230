var selectElement = document.getElementById("rental-type");
const jsonFilePath = "data/rental.json";

fetch(jsonFilePath)
    .then(response => response.json())
    .then(data => {
        for (var i = 0; i < data.rental_types.length; i++) {
            var option = document.createElement("option");
            option.value = "vehicle" + (i + 1); // You can customize the value as needed
            option.text = data.rental_types[i].type;
            selectElement.add(option);
        }
    })
    .catch(error => console.error('Error fetching JSON:', error));
