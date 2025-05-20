
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('[role="tab"]');
    const tabContainer = document.querySelector('[role="tablist"]');
    const tabWidth = tabs[0].offsetWidth;
    let currentIndex = 0;

    // show the current tab and its content
    function showCurrentTab() {
        // show current tab content, hide others
        document.querySelectorAll('[role="tabpanel"]').forEach(panel => panel.hidden = true);
        document.querySelectorAll('img').forEach(img => img.hidden = true);

        const currentTab = tabs[currentIndex];
        const panelId = currentTab.getAttribute("aria-controls");
        const imageId = currentTab.getAttribute("data-image");

        document.getElementById(panelId).hidden = false;
        document.getElementById(imageId).hidden = false;

        // update active class and aria-selected attribute
        tabs.forEach((tab, index) => {
            tab.classList.toggle('active', index === currentIndex);
            tab.setAttribute("aria-selected", index === currentIndex ? "true" : "false");
        });

        // tabContainer.style.transform = `translateX(-${currentIndex * tabWidth}px)`;
    }

    // move to the next tab
    function nextTab() {
        currentIndex = (currentIndex + 1) % tabs.length;
        showCurrentTab();
    }

   
    //  event listeners for tab
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            currentIndex = index;
            showCurrentTab();
        });
    });

    setInterval(nextTab, 3000);
});