$(document).ready(() => {
    $('#signin').click(() => signin());
});

function signin()
{
    var username = $('#username').val();
    var password = $('#password').val();
    console.log(username);
    console.log(password);
    sessionStorage.setItem('ME', JSON.stringify({username: username}));
    window.location.href = "home.html";
}
