document.addEventListener("DOMContentLoaded", function() {
    // Check if the current day is Monday, Tuesday, Wednesday, or Thursday
    var today = new Date().getDay();
    
    if (today >= 1 && today <= 5) {
        // Display the banner if it's Monday, Tuesday, Wednesday, or Thursday
        var banner = document.getElementById("banner");
        banner.style.display = "block";
        
        // Add event listener to close the banner
        var closeBannerBtn = document.getElementById("closeBanner");
        closeBannerBtn.addEventListener("click", function() {
            banner.style.display = "none";
        });
    }
});
