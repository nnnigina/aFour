let name = 'Alex'
let money = 10000
let account = 7777

let nameIs = prompt('Как вас зовут?').trim

nameIs = nameIs[0].toUpperCase() + nameIs.slice(1).toLowerCase() 

if (nameIs === name) {
    let password = +prompt('Номер счета?').trim()
    if (account === password) {
        let cashOut = +prompt('Сколько обналичить?').trim()
        if (0 <= cashOut && money >= cashOut) {
            alert('Все отлично!');
            alert("Вы сняли: " + cashOut + "," + "На счету осталось: " + (money - cashOut))
            let comment = confirm("Вам понравилось?")
       } else{
        alert("Недостаточно средств или не правильные символы!");
       }
    } else{
        alert("Пользователь не найден, досвидули!")
    }
} else {
    alert("Пользователь не найден, досвидули!")
}