
document.getElementById('showPassword').addEventListener('change', function () {
    const passwordField = document.getElementById('password');
    passwordField.type = this.checked ? 'text' : 'password';
});


document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

   
    if (email === '' || password === '') {
        alert('Veuillez remplir tous les champs.');
        return;
    }

   
    if (!email.includes('@') || !email.includes('.')) {
        alert('Veuillez entrer une adresse email valide.');
        return;
    }

    
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
        alert('Le mot de passe doit contenir au moins 8 caractères, avec une lettre majuscule, une lettre minuscule et un chiffre.');
        return;
    }

    alert('Connexion réussie !');
});
