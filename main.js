document.addEventListener("DOMContentLoaded", function () {
    const bar = document.getElementById('bar');
    const nav = document.getElementById('navbar');
    const close = document.querySelector('.close'); // Ensure correct selector

    if (bar) { 
        bar.addEventListener('click', () => {
            if (nav) {
                nav.classList.toggle('active');
            }
        });
    }

    if (close) { 
        close.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    }
});
