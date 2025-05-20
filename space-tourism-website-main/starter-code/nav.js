// document.addEventListener('DOMContentLoaded', ()=> {
//     const navLinks = document.querySelectorAll('#primary a');
//     const mobileNav = document.querySelector('.active');
//     const primaryNav = document.getElementById('primary-nav');

    
//     function setActiveNav (){
//         navLinks.forEach(link => {
//             if(link.href === window.location.href){
//             link.parentElement.classList.add('active');
//         }
//         })
//     }

//     function toggleNav (){
//         const isVisible = primaryNav.getAttribute('visible-nav') === 'true';
//         primaryNav.setAttribute('visible-nav', !isVisible);
//         mobileNav.setAttribute('aria-expanded', !isVisible);
//     }

//     console.log(toggleNav())

//     navLinks.forEach(link => {
//         link.addEventListener('click', (e) => {
//             navLinks.forEach(link.parentElement.classList.remove('active'));

//             link.parentElement.classList.add('active');
//         });    
//     })

//     mobileNav.addEventListener('click', toggleNav);

//     setActiveNav();
// })

// nav.js
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('#primary-nav a'); // Select all the links in your nav
    const mobileNavButton = document.querySelector('.mobile-nav');
    const primaryNav = document.getElementById('primary-nav');

    // Function to set the active state on page load
    function setActiveNavLink() {
        navLinks.forEach(link => {
            if (link.href === window.location.href) {
                link.parentElement.classList.add('active'); // Add the active class to the <li>
            }
        });
    }

    // Function to toggle the navigation menu
    function toggleNav() {
        const isVisible = primaryNav.getAttribute('visible-nav') === 'true';
        primaryNav.setAttribute('visible-nav', !isVisible);
        mobileNavButton.setAttribute('aria-expanded', !isVisible);
    }

    // Add click event listeners to each tab
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // 1. Remove 'active' class from all links
            navLinks.forEach(link => link.parentElement.classList.remove('active'));

            // 2. Add 'active' class to the clicked link
            link.parentElement.classList.add('active');
        });
    });

    // Add click event listener to the mobile nav button
    mobileNavButton.addEventListener('click', toggleNav);

    // Set the active state on page load
    setActiveNavLink();
});