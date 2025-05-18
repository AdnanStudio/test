document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation using Intersection Observer
    const revealElements = document.querySelectorAll('.reveal');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of item visible (adjust as needed)
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing after first animation
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    revealElements.forEach(el => {
        observer.observe(el);
    });

    // Optional: Handle form submission (visual only for this example)
    const billingForm = document.getElementById('billingForm');
    if (billingForm) {
        billingForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual form submission
            // You could add logic here to gather form data
            // For example:
            // const name = document.getElementById('name').value;
            // console.log('Order submitted for:', name);
            alert('অর্ডার কনফার্ম করা হয়েছে! (এটি একটি ডেমো)'); // Demo alert
            // billingForm.reset(); // Optionally reset the form
        });
    }
});