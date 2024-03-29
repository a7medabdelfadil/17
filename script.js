const   buttons = document.querySelectorAll('.btn'),
        options = document.querySelectorAll('.option');

buttons.forEach((button, btnIndex) => {
    button.addEventListener('click', () => {
        options.forEach((option, optionIndex) => {
            option.style.left = btnIndex === optionIndex ? '0' : '200%';
        });
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});
