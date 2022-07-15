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
    $('#contats').prepend(div);

    $('body').mousemove(function( event ) {
        // Width == X

        if((event.pageX/16) <= 2 && (event.pageY/16) <= ($('body').outerHeight()/16)-10 && navBarOpened === false){
            listConts();
        }else if((event.pageX/16) > 20 && navBarOpened === true){
            closeConts();
        }

        if((event.pageX/16) >= ($('body').outerWidth()/16)-2 && (event.pageY/16) <= ($('body').outerHeight()/16)-10 && messageDetailsOpened === false){
            showDetails();
        }else if((event.pageX/16) <= ($('body').outerWidth()/16)-20 && messageDetailsOpened === true){
            hideDetails();
        }
    });
});

function listConts()
{
    navBarOpened = true;
    $('#contats').css('width', sideBarLength+'em');
    $('.sent').css('margin-left', (sideBarLength+1)+'em');
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
    $('#details').css('width', sideBarLength+'em');
    $('.received').css('margin-right', (sideBarLength+1)+'em');
    $('.keyboard').css('width', '82.5%');
}

function hideDetails()
{
    messageDetailsOpened = false;
    $('#details').css('width', '0em');
    $('.received').css('margin-right', '1em');
    $('.keyboard').css('width', '100%');
}
