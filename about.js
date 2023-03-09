window.addEventListener('scroll', () => {
    let content = document.querySelector('.hidden');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if (contentPosition < screenPosition) {
        content.classList.add('show');
    } else{
        content.classList.remove('active');
    }
})