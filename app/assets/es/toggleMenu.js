;
(function() {
    const burger = document.querySelector('.nav__burger');
    const hMenuWrapper = document.querySelector('.nav__wrapper');
    const hMenuBg = document.querySelector('.nav__bg');
    const closeBtn = document.querySelector('.nav__close-btn')

    burger.addEventListener('click', function() {
        hMenuWrapper.style.display = 'block';

        setTimeout(() => {
            hMenuBg.style.right = '0';
            hMenuWrapper.classList.add('active');
        }, 100)
    });

    closeBtn.addEventListener('click', () => {
        hMenuBg.style.right = '-240px';
        hMenuWrapper.classList.remove('active');

        setTimeout(() => {
            hMenuWrapper.style.display = 'none';
        }, 400)
    });
})();