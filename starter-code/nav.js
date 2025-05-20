
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('#primary-nav a'); 
    const mobileNavButton = document.querySelector('.mobile-nav');
    const primaryNav = document.getElementById('primary-nav');

    function setActiveNavLink() {
        navLinks.forEach(link => {
            if (link.href === window.location.href) {
                link.parentElement.classList.add('active'); 
            }
        });
    }

    function toggleNav() {
        const isVisible = primaryNav.getAttribute('visible-nav') === 'true';
        primaryNav.setAttribute('visible-nav', !isVisible);
        mobileNavButton.setAttribute('aria-expanded', !isVisible);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(link => link.parentElement.classList.remove('active'));

            link.parentElement.classList.add('active');
        });
    });

    mobileNavButton.addEventListener('click', toggleNav);

    setActiveNavLink();
});