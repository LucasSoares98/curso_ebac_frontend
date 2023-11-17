$(document).ready(function(){

    $('header button').click(function(){
        $('form').slideDown()
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp()
    })
    
    
    $('form').on('submit', function(e){
        e.preventDefault()

        let novaTarefa = $('#inserir-tarefa').val()
        let novoItem = $(`<li>${novaTarefa}</li>`)       
        
        $(novoItem).appendTo('ul')
        
        $('#inserir-tarefa').val('')

        console.log(novaTarefa);
        
        $('li').click(function(){
            $(this).addClass('finalizada')
        })
    })
    
})
