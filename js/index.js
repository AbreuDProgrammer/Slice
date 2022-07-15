let navBarOpened = false;
let messageDetailsOpened = false;
let user;

$(document).ready(() => {
    var user = sessionStorage.getItem('ME');
    user = JSON.parse(user);
    var username = user.username;
    var div = $('<div></div>').attr('id', 'welcomeMessage');
    var message = $('<span></span>').attr('class','userName').html(username);
    $(div).append(message);
    $('#mySidebar').prepend(div);
});

function listConts()
{
    navBarOpened = true;
    $('#contats').css('width', '20em');
    $('.sent').css('margin-left', '21em');
    $('#writeInput').css('width', '70%');
}

function closeConts()
{
    navBarOpened = false;
    $('#contats').css('width', '0em');
    $('.sent').css('margin-left', '1em');
    $('#writeInput').css('width', '85%');
}

function showDetails()
{
    messageDetailsOpened = true;
    $('#details').css('width', '20em');
    $('.received').css('margin-right', '21em');
    $('.keyboard').css('width', '80%');
}

function hideDetails()
{
    messageDetailsOpened = false;
    $('#details').css('width', '0em');
    $('.received').css('margin-right', '1em');
    $('.keyboard').css('width', '100%');
}

window.addEventListener('mousemove', function(e) {
    var mouse = {
        x: e.pageX,
        y: e.pageY
    };

    if((mouse.x/16) <= 20 && navBarOpened === false){
        listConts();
    }else if((mouse.x/16) > 20 && navBarOpened === true){
        closeConts();
    }

    if((mouse.x/16) > 100 && messageDetailsOpened === false){
        showDetails();
    }else if((mouse.x/16) <= 100 && messageDetailsOpened === true){
        hideDetails();
    }

});
