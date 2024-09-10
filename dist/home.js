const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const closeIcon = document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav-link')


hamburger.addEventListener('click', () => {
    navMenu.classList.remove('hidden');
});

closeIcon.addEventListener('click', () => {
    navMenu.classList.add('hidden');
})

navLink.forEach(link => 
    link.addEventListener('click', () => {
        navMenu.classList.add('hidden');
    })
)

const tabs = document.querySelectorAll('.Tab');
const all = document.querySelectorAll('.item_wrap');
const foods = document.querySelectorAll('.food');
const snacks = document.querySelectorAll('.snack');
const beverages = document.querySelectorAll('.beverage');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')

        const tabval = tab.getAttribute('data-tabs')

        all.forEach(item => {
            item.style.display = 'none'
        })

        if (tabval == 'food') {
            foods.forEach(item => {
                item.style.display = 'block'
            })
        }
        else if (tabval == 'snack') {
            snacks.forEach(item => {
                item.style.display = 'block'
            })
        }
        else if (tabval == 'beverage'){
            beverages.forEach(item => {
                item.style.display = 'block'
            })
        }
        else {
            all.forEach(item => {
                item.style.display = 'block'
            })
        }
        
    })
})
// Scroll Up BUTTON
const scrollUp = () => {
    const scrollUpBtn = document.getElementById('scroll-up');

    // Check the vertical scroll position
    if (window.scrollY >= 250) {
        scrollUpBtn.classList.remove('-bottom-1/2');
        scrollUpBtn.classList.add('bottom-4');
    } else {
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
    }
};
// Add the scroll event listener to the window object
window.addEventListener('scroll', scrollUp);

// Scroll up Header
const scrollHeader = () => {
    const scrollHeader = document.getElementById('header');

    // Check the vertical scroll position
    if (window.scrollY >= 50) {
        scrollHeader.classList.add('border-b', 'border-secondaryColor');
    } else {
        
        scrollHeader.classList.remove('border-b', 'border-secondaryColor');
    }
};

// Add the scroll event listener to the window object
window.addEventListener('scroll', scrollHeader);

// Dark Light Theme
const html = document.querySelector('html')
const themeBtn = document.getElementById('theme-toggle')

if (localStorage.getItem('mode') == 'dark'){
    darkMode();
}else {
    lightMode();
}

themeBtn.addEventListener('click', (e) =>{
    if (localStorage.getItem('mode') == 'light'){
        darkMode();
    }else {
        lightMode();
    }
})

function darkMode () {
    html.classList.add('dark')
    themeBtn.classList.replace('ri-moon-line', 'ri-sun-line')
    localStorage.setItem('mode', 'dark');
}

function lightMode () {
    html.classList.remove('dark')
    themeBtn.classList.replace('ri-sun-line', 'ri-moon-line')
    localStorage.setItem('mode', 'light');
}

// scroll section active links
const activeLink = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link')

    let current = 'home';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        
        if (window.scrollY >= sectionTop - 60){
            current = section.getAttribute('id')
        }
    })

    navLinks.forEach((item) => {
        item.classList.remove('text-secondaryColor');
        if (item.href.includes(current)) {
            item.classList.add('text-secondaryColor')
        }
    });

};

window.addEventListener('scroll', activeLink)

// scroll reveal
const sr = ScrollReveal({
    origin: 'top',        // Animations will start from the top of the element.
    distance: '60px',     // The distance the element will move during the reveal animation.
    duration: 2500,       // Duration of the animation in milliseconds (2500 ms = 2.5 seconds).
    delay: 400            // Delay before the animation starts in milliseconds (400 ms).
})
sr.reveal('.home-image');
sr.reveal('.home-content', {origin : 'bottom'});
sr.reveal('.category-card', {interval : 300})