let isActive = false;
function toggle() {
    if(isActive) {
        document.querySelector('.hamburger').className = 'hamburger';
        document.querySelector('.shadow').className = 'shadow';
        document.querySelector('.mobile-nav').className = 'mobile-nav';
        isActive = false;
    } else {
        document.querySelector('.hamburger').className = 'hamburger active';
        document.querySelector('.shadow').className = 'shadow active';
        document.querySelector('.mobile-nav').className = 'mobile-nav active';
        isActive = true;
    }
}


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
});

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
})


