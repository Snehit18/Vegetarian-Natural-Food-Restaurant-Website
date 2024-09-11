
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function validateReservationForm(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    if (!name || !email || !phone || !date || !time || !guests) {
        alert('Please fill in all required fields.');
        event.preventDefault(); 
        return false;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
        return false;
    }

    if (!validatePhone(phone)) {
        alert('Please enter a valid phone number.');
        event.preventDefault();
        return false;
    }

    return true;
}


function validateContactForm(event) {
    const name = document.querySelector('.contact input[type="text"]').value;
    const email = document.querySelector('.contact input[type="email"]').value;
    const message = document.querySelector('.contact textarea').value;

    if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        event.preventDefault();
        return false;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
        return false;
    }

    return true;
}


function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}


function validatePhone(phone) {
    const phonePattern = /^[0-9]{10}$/; 
    return phonePattern.test(phone);
}


document.addEventListener('DOMContentLoaded', () => {
    const reservationForm = document.querySelector('.reservation form');
    const contactForm = document.querySelector('.contact form');

    if (reservationForm) {
        reservationForm.addEventListener('submit', validateReservationForm);
    }

    if (contactForm) {
        contactForm.addEventListener('submit', validateContactForm);
    }
});
