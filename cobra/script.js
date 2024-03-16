window.addEventListener('scroll', function () {
    var scrollTopButton = document.querySelector('footer button');

    scrollTopButton.classList.toggle('show', window.scrollY > 300);
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
