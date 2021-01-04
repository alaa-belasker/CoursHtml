var tableName = []
function ajouterNom(){
    var value =document.getElementById('name').value
    tableName.push(value)
    alert(value + " a été ajouter")
    document.getElementById('name').value = ''

}

function tirerAuSort(){
    var index = Math.floor(Math.random() * tableName.length)
    alert("le grand gagnat est " + tableName[index])
}