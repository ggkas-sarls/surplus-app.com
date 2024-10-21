// script/main.js

// Dynamic Year in Footer
document.addEventListener('DOMContentLoaded', function() {
    const yearSpans = document.querySelectorAll('#year');
    const currentYear = new Date().getFullYear();
    yearSpans.forEach(span => {
        span.textContent = currentYear;
    });
});

// Example: Simple form validation (optional)
document.getElementById('signup-form')?.addEventListener('submit', function(event) {
    const nameField = document.querySelector('input[name="name"]');
    const emailField = document.querySelector('input[name="email"]');
    if (nameField.value.trim() === '' || emailField.value.trim() === '') {
        alert('Please fill in both your name and email.');
        event.preventDefault();
    }
});
