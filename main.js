const loginButton = document.getElementById('loginButton')
const signUpButton = document.getElementById('signUpButton')

loginButton.addEventListener('click', () => {
    loginButton.style.outline = 'solid 3px var(--primary)'
    loginButton.style.backgroundColor = '#fff'
    signUpButton.style.outline = 'none'
    signUpButton.style.backgroundColor = 'var(---secondary)'
})

signUpButton.addEventListener('click', () => {
    signUpButton.style.outline = 'solid 3px var(--primary)'
    signUpButton.style.backgroundColor = '#fff'
    loginButton.style.outline = 'none'
    loginButton.style.backgroundColor = 'var(---secondary)'
})


const buttonMenu = document.querySelector('.btn-menu');
const navLinks = document.querySelector('.nav-links')

buttonMenu.addEventListener('click', () => {
    buttonMenu.classList.toggle('active');
    if (buttonMenu.classList.contains('active')) {
        navLinks.style.display = 'block';

        setTimeout(() => {
            navLinks.style.transform = 'scale(1)'
        }, 300);
    } else {
        navLinks.style.transform = 'scale(0)'
        setTimeout(() => {
            navLinks.style.display = 'none';
        }, 300);
    }
});