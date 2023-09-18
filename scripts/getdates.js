const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;


// Get the last modified date of the current page
const lastModified = new Date(document.lastModified);


const formattedLastModified = 'Last Modified:' + lastModified.toLocaleDateString('en-UK');

// Display the formatted last modified date in the HTML element
document.getElementById('lastmodified').textContent = formattedLastModified;
