// Arrow Buttons Functionality
document.addEventListener('DOMContentLoaded', function() {
    const leftArrowBtn = document.getElementById('leftArrowBtn');
    const rightUpArrowBtn = document.getElementById('rightUpArrowBtn');
    
    // Left Arrow Button functionality
    if (leftArrowBtn) {
        // Add click event listener
        leftArrowBtn.addEventListener('click', function() {
            // You can customize this action - for now it will scroll to the top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                leftArrowBtn.style.opacity = '1';
                leftArrowBtn.style.visibility = 'visible';
            } else {
                leftArrowBtn.style.opacity = '0';
                leftArrowBtn.style.visibility = 'hidden';
            }
        });
        
        // Initially hide the button
        leftArrowBtn.style.opacity = '0';
        leftArrowBtn.style.visibility = 'hidden';
        leftArrowBtn.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';
    }
    
    // Right Up Arrow Button functionality
    if (rightUpArrowBtn) {
        // Add click event listener
        rightUpArrowBtn.addEventListener('click', function() {
            // Scroll to the top of the page
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                rightUpArrowBtn.style.opacity = '1';
                rightUpArrowBtn.style.visibility = 'visible';
            } else {
                rightUpArrowBtn.style.opacity = '0';
                rightUpArrowBtn.style.visibility = 'hidden';
            }
        });
        
        // Initially hide the button
        rightUpArrowBtn.style.opacity = '0';
        rightUpArrowBtn.style.visibility = 'hidden';
        rightUpArrowBtn.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';
    }
});
