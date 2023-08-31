let lastScroll = window.scrollY;

function handleScroll() {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll) {
        nav.classList.add('hide-nav');
    } else {
        nav.classList.remove('hide-nav');
    }

    lastScroll = currentScroll;
}

const nav = document.querySelector('nav');
window.addEventListener('scroll', handleScroll);