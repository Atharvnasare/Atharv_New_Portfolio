// Smooth scrolling for navbar links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Show button when user scrolls down
const scrollBtn = document.createElement('button');
scrollBtn.innerText = '↑';
scrollBtn.className = 'scroll-top';
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});

// Scroll to top
scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});