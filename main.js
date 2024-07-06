$(document).ready(function(){  
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDanovaimagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li><li>');
        $(`<img src="${enderecoDanovaimagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-images-link">
                <a href="${enderecoDanovaimagem}" target="_blank" title="ver imagem em tamanho real">
                    ver imagem em tamanho teal
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-imagem-nova').val('');
    })
})