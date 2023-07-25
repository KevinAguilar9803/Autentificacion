import { UserService } from './path/to/user.service';
const userService = new UserService();
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('#login-email').value;
    const password = document.querySelector('#login-password').value;

    userService.login({ email, password })
    .then((userCredential) => {
        loginForm.reset();
        $('#signinModal').modal('hide');
    // El inicio de sesión fue exitoso, puedes realizar las acciones necesarias aquí
    console.log('Inicio de sesión exitoso:', userCredential);
    })
  .catch((error) => {
    // Se produjo un error durante el inicio de sesión
    console.error('Error durante el inicio de sesión:', error);
    });
    
});

// Manejador del evento de cierre de sesión
const logoutButton = document.querySelector('#logout-button');
logoutButton.addEventListener('click', (e) => {
    auth.signOut()
        .then(() => {
            console.log('logout successful');
        })
        .catch(error => {
            console.log('logout error:', error);
        });
});

