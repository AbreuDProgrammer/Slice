$(document).ready(() => {
    $('#sentButton').click(() => {
        enviarmensagem();
    });
    $( "#writeInput" ).keydown(function(event) {
        console.log(event.key);
        if(event.key === 'Enter'){
            enviarmensagem();
        }
    });
});

async function enviarmensagem()
{
    const mensagem = $('#writeInput').val();
    console.log(mensagem);
}
