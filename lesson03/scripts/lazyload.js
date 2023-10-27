document.addEventListener("DOMContentLoaded", function () {
    const currentYear = new Date().getFullYear();

    const lastModified = new Date(document.lastModified);
    
    const formattedLastModified = 'Last Modified: ' + lastModified.toLocaleDateString('en-UK');
    
    document.getElementById('lastmodified').textContent = formattedLastModified;
});


