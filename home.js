var balance=0
var exp=0

function addInc() {
    const type = document.getElementById('inctype').value
    const income = parseFloat(document.getElementById('incamt').value)
    console.log(income);
    console.log(type);

    balance += income
    alert('Income added Successfully')
    document.getElementById('balamt').innerHTML = `Your balance is ${balance}`

}


function addExp() {
    const expense = parseFloat(document.getElementById('Expamt').value)
    alert('Expense added successfully')
    exp += expense
    balance -= exp
    document.getElementById('spentamt').innerHTML = `Your expense is ${exp}`
    document.getElementById('balamt').innerHTML = `Your balnce is ${balance}`
}

function clr() {
   spentamt.innerHTML=""
        balamt.innerHTML=""
    inctype.value=""
    incamt.value=""
    Exptype.value=""
    Expamt.value=""

}
function logout() {
    window.location='./index.html'
    inctype.value=""
    incamt.value=""
    Exptype.value=""
    Expamt.value=""
}





