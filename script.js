document.addEventListener('DOMContentLoaded', () => {
    const html = document.documentElement;
    const darkModeToggle = document.getElementById('darkModeToggle');
    const navLinks = Array.from(document.querySelectorAll('.nav-link, .side-nav a'));
    const sections = Array.from(document.querySelectorAll('.page-section'));

    function createStars() {
        const starsContainer = document.querySelector('.stars-container');
        if (!starsContainer) return;

        starsContainer.innerHTML = '';
        const numberOfStars = 90;

        for (let i = 0; i < numberOfStars; i += 1) {
            const star = document.createElement('span');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 4}s`;
            star.style.animationDuration = `${3 + Math.random() * 3}s`;
            starsContainer.appendChild(star);
        }
    }

    function updateActiveNav() {
        let currentSectionId = '';

        sections.forEach((section) => {
            if (window.scrollY >= section.offsetTop - 220) {
                currentSectionId = section.id;
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    }

    function setupSmoothScroll() {
        navLinks.forEach((link) => {
            link.addEventListener('click', (event) => {
                const href = link.getAttribute('href') || '';
                if (!href.startsWith('#')) return;

                event.preventDefault();
                const target = document.querySelector(href);
                if (!target) return;

                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });
    }

    function setupTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        html.setAttribute('data-theme', savedTheme);

        if (!darkModeToggle) return;
        darkModeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', nextTheme);
            localStorage.setItem('theme', nextTheme);
        });
    }

    function setupExperienceTabs() {
        const tabs = Array.from(document.querySelectorAll('.experience-tab'));
        const panels = Array.from(document.querySelectorAll('.exp-panel'));
        if (!tabs.length || !panels.length) return;

        tabs.forEach((tab) => {
            tab.addEventListener('click', () => {
                tabs.forEach((t) => t.classList.remove('active'));
                panels.forEach((panel) => {
                    panel.style.display = 'none';
                });

                tab.classList.add('active');
                const targetId = tab.dataset.exp;
                const targetPanel = document.getElementById(targetId || '');
                if (targetPanel) targetPanel.style.display = 'block';
            });
        });

        const firstPanelId = tabs[0].dataset.exp;
        const firstPanel = document.getElementById(firstPanelId || '');
        tabs.forEach((tab) => tab.classList.remove('active'));
        tabs[0].classList.add('active');
        panels.forEach((panel) => {
            if (firstPanel && panel.id === firstPanel.id) {
                panel.style.display = 'block';
            }
        });
    }

    createStars();
    setupTheme();
    setupSmoothScroll();
    setupExperienceTabs();
    updateActiveNav();
    window.addEventListener('scroll', updateActiveNav, { passive: true });
});