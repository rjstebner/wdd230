const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;


const lastModified = new Date(document.lastModified);


const formattedLastModified = 'Last Modified:' + lastModified.toLocaleDateString('en-UK');

document.getElementById('lastmodified').textContent = formattedLastModified;

const timestampField = document.getElementById('timestamp');
if (timestampField) {
  timestampField.value = lastModified.toISOString(); // You can format this as needed
}