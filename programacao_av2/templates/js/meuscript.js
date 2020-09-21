$(function() { 
    
    function exibir_profissoes() {
        $.ajax({
            url: 'http://localhost:5000/listar_profissoes',
            method: 'GET',
            dataType: 'json', 
            success: listar, 
            error: function() {
                alert("erro ao ler dados, verifique o backend");
            }
        });
         
        function listar (profissoes) {
            $('#corpoTabelaProfissoes').empty();
            mostrar_conteudo("tabelaProfissoes");    
            for (var i in profissoes) { 
                lin = '<tr>' + 
                '<td>' + profissoes[i].nome + '</td>' + 
                '<td>' + profissoes[i].funcao + '</td>' + 
                '<td>' + profissoes[i].salario + '</td>' + 
                '<td>' + profissoes[i].detalhe + '</td>' + 
                '<td>' + profissoes[i].caracteristica + '</td>' + 
                '</tr>';
                $('#corpoTabelaProfissoes').append(lin);
            }
        }
    }

    function mostrar_conteudo(identificador) {
        $("#tabelaProfissoes").addClass('invisible');
        $("#conteudoInicial").addClass('invisible');
        $("#"+identificador).removeClass('invisible');      
    }

    $(document).on("click", "#linkListarProfissoes", function() {
        exibir_profissoes();
    });

    $(document).on("click", "#linkInicio", function() {
        mostrar_conteudo("conteudoInicial");
    });

    mostrar_conteudo("conteudoInicial");
});