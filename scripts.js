var menuTexts = {
    light: 'Light mode',
    dark: 'Dark mode',
    sexy: 'Sexy mode'
};

var heroImages = {
    light: './images/hero-img/hero-img-light.png',
    dark: './images/hero-img/hero-img-dark.png',
    sexy: './images/hero-img/hero-img-pink.png'
};

var missionImages = {
    light: './images/mission-image/it-hero-light.png',
    dark: './images/mission-image/it-hero-dark.png',
    sexy: './images/mission-image/it-hero-pink.png'
};

/* Wichtige Elemente holen und in Variablen speichern */
var button = document.getElementById('theme-menu-button');
var menu = document.getElementById('theme-menu');
var heroImage = document.querySelector('.hero-image');
var missionImage = document.querySelector('.mission-image');
var buttonText = document.getElementById('theme-select-value');
var allThemeButtons = document.querySelectorAll('[data-theme-option]');

/* Ändert Theme Visuals */
function applyTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);

    /* Ändert Theme spezifische Images und Dropdown Menü Text */
    if (themeName === 'dark') {
        heroImage.src = heroImages.dark;
        missionImage.src = missionImages.dark;
        buttonText.textContent = menuTexts.dark;
    } else if (themeName === 'sexy') {
        heroImage.src = heroImages.sexy;
        missionImage.src = missionImages.sexy;
        buttonText.textContent = menuTexts.sexy;
    } else {
        heroImage.src = heroImages.light;
        missionImage.src = missionImages.light;
        buttonText.textContent = menuTexts.light;
    }

    for (var i = 0; i < allThemeButtons.length; i++) {
        if (allThemeButtons[i].dataset.themeOption === themeName) {
            allThemeButtons[i].classList.add('is-active');
        } else {
            allThemeButtons[i].classList.remove('is-active');
        }
    }

    /* Theme Dropdown verstecken*/
    menu.hidden = true;
}

/* Default Theme bei Page Load anwenden */
applyTheme('light');

/* Theme Dropdown bei Klick öffnen und schließen */
button.addEventListener('click', function () {
    if (menu.hidden) {
        menu.hidden = false;
    } else {
        menu.hidden = true;
    }
});

/* Klick auf Dropdown Menü Items ändert Theme */
for (var i = 0; i < allThemeButtons.length; i++) {
    allThemeButtons[i].addEventListener('click', function () {
        applyTheme(this.dataset.themeOption);
    });
}
