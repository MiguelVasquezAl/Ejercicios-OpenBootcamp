
function myBirthday() {
    var cumpleaños = new Date('may 11 1993 ');
    var dia = cumpleaños.getDate();
    var mes = "0"+(cumpleaños.getMonth()+1);
    var año = cumpleaños.getFullYear();
    return `${dia}/${mes}/${año}`
}
//console.log(myBirthday())

//......................DESARROLLO EL EJERCICIO 02.............................
var list = [
    "Luis Miguel Vasquez Alvarez",
    29,
    true,
    myBirthday(),
    libro={
        titulo: "El Sobreviviente",
        autor: "Stephen King",
        link: "https://youtu.be/lL_dic8GzlY"
    }
]

console.log(list);

console.log(list[0]);
console.log(list[1]);
console.log(list[2]);
console.log(list[3]);
console.log(list[4].link);
console.log(list[4].titulo);
