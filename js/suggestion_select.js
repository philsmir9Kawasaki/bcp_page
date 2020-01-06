$(document).ready(function () {
 
    var list1 = document.getElementById('City');
     
    list1.options[0] = new Option('--Select--', '');
    list1.options[1] = new Option('Manaus', 'Manaus');
    list1.options[2] = new Option('São Paulo', 'São Paulo');
});

function getTheme(){

    var list1 = document.getElementById('City');
    var list2 = document.getElementById('Theme');
    var list1SelectedValue = list1.options[list1.selectedIndex].value;

    if(list1SelectedValue=='Manaus'){

        list2.options.length=0;
        list2.options[0] = new Option('--Select--', '');
        list2.options[1] = new Option('PCP', 'PCP');
        list2.options[2] = new Option('Engenharia', 'Engenharia');
        list2.options[3] = new Option('Produção', 'Produção');
        list2.options[4] = new Option('Qualidade', 'Qualidade');
        list2.options[5] = new Option('Logistica', 'Logistica');
        list2.options[6] = new Option('Controladoria', 'Controladoria');
        list2.options[7] = new Option('Outros', 'Outros');
        
    }
    else if (list1SelectedValue=='São Paulo'){

        list2.options.length=0;
        list2.options[0] = new Option('--Select--', '');
        list2.options[1] = new Option('Geral', 'Geral');
        list2.options[2] = new Option('Importação', 'Importação');
        list2.options[3] = new Option('Recebimento', 'Recebimento');
        list2.options[4] = new Option('Embalamento', 'Embalamento');
        list2.options[5] = new Option('Remessa', 'Remessa');
        list2.options[6] = new Option('Vendas', 'Vendas');
        list2.options[7] = new Option('Faturamento de Peças', 'Faturamento de Peças');
        list2.options[8] = new Option('Faturamento de Motos', 'Faturamento de Motos');
        list2.options[9] = new Option('Outros', 'Outros');

    }
}