    function adicionarContato() {
        



        var nome = document.getElementById('nome').value
        var telefone = document.getElementById('telefone').value
    
        
        if (nome == '') {
        alert('Nome completo')
        return false
        }
    
        
        if (telefone == '' || isNaN(telefone)) {
        alert('Por favor, insira um número de contato válido')
        return false
        }
    
        
        var table = document
        .getElementById('contacts-table')
        .getElementsByTagName('tbody')[0]
        var newRow = table.insertRow()
        var nomeCell = newRow.insertCell(0)
        var telefoneCell = newRow.insertCell(1)
        nomeCell.innerHTML = nome
        telefoneCell.innerHTML = telefone
    
        
        clearForm()
    
        return false
    }
    
    function clearForm() {
        document.getElementById('contact-form').reset()
    }