// 1. Mobile Navigation Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// 2. Contact Form Validation & User Feedback
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Page refresh hone se rokta hai

    const name = document.getElementById('nameInput').value.trim();
    const email = document.getElementById('emailInput').value.trim();
    const message = document.getElementById('messageInput').value.trim();

    // Email check karne ka tareeqa
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === '' || email === '' || message === '') {
      formFeedback.style.color = '#e63946';
      formFeedback.textContent = 'Please fill out all required fields!';
      return;
    }

    if (!emailRegex.test(email)) {
      formFeedback.style.color = '#e63946';
      formFeedback.textContent = 'Please enter a valid email address!';
      return;
    }

    // Success Message
    formFeedback.style.color = '#2a9d8f';
    formFeedback.textContent = 'Message sent successfully! Thank you.';
    
    contactForm.reset();
  });
}

// 3. Extra Interactive Feature: Dark / Light Mode Toggle
const themeBtn = document.getElementById('themeBtn');

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
      themeBtn.textContent = '☀️ Light Mode';
    } else {
      themeBtn.textContent = '🌙 Dark Mode';
    }
  });
}
