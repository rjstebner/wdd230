const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;


const lastModified = new Date(document.lastModified);


const formattedLastModified = 'Last Modified:' + lastModified.toLocaleDateString('en-UK');

document.getElementById('lastmodified').textContent = formattedLastModified;
