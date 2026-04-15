$(document).ready(function () {
  $('#registrationForm').on('submit', function (e) {
    e.preventDefault(); // Empêche l'envoi du formulaire

    let password = $('#password').val();
    let confirmPassword = $('#confirmPassword').val();
    let isValid = true;
    $('#message').html(''); // Réinitialise les messages

    // Vérifie la longueur du mot de passe
    if (password.length < 6) {
      $('#message').append('<p style="color:red;">Le mot de passe doit contenir au moins 6 caractères.</p>');
      isValid = false;
    }

    // Vérifie que les mots de passe sont identiques
    if (password !== confirmPassword) {
      $('#message').append('<p style="color:red;">Les mots de passe ne correspondent pas.</p>');
      isValid = false;
    }

    if (isValid) {
      $('#message').html('<p style="color:green;">Inscription réussie !</p>');
      $('#registrationForm')[0].reset(); // Vide les champs
    }
  });
});
