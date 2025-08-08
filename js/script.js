
const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);

    navLinks.forEach(link => link.classList.remove('active'));

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100);

    sections.forEach(section => section.classList.remove('active'));

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();
            link.classList.add('active');
            setTimeout(() => sections[idx].classList.add('active'), 1100);
        }
    });
});

logoLink.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        activePage();
        navLinks[0].classList.add('active');
        setTimeout(() => sections[0].classList.add('active'), 1100);
    }
});

const resumeBtns = document.querySelectorAll('.resume-btn');
resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');
        resumeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        resumeDetails.forEach(detail => detail.classList.remove('active'));
        resumeDetails[idx].classList.add('active');
    });
});

/* -------- Multiple carousels (per portfolio-container) -------- */
function initCarousel(container) {
    const arrowRight = container.querySelector('.navigation .arrow-right');
    const arrowLeft = container.querySelector('.navigation .arrow-left');
    const imgSlide = container.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = container.querySelectorAll('.portfolio-detail');
    let index = 0;

    const activePortfolio = () => {
        const total = portfolioDetails.length;
        if (imgSlide) {
            imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
        }
        portfolioDetails.forEach(d => d.classList.remove('active'));
        portfolioDetails[index].classList.add('active');
        if (arrowLeft) arrowLeft.classList.toggle('disabled', index <= 0);
        if (arrowRight) arrowRight.classList.toggle('disabled', index >= total - 1);
    };

    if (arrowRight) {
        arrowRight.addEventListener('click', () => {
            if (index < portfolioDetails.length - 1) {
                index++;
                activePortfolio();
            }
        });
    }
    if (arrowLeft) {
        arrowLeft.addEventListener('click', () => {
            if (index > 0) {
                index--;
                activePortfolio();
            }
        });
    }
    // initialize
    activePortfolio();
}

document.querySelectorAll('.portfolio-container').forEach(initCarousel);
