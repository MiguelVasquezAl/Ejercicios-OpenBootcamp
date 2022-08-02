//La fecha de hoy
const date = new Date()
console.log(date.toLocaleDateString());

//La fecha de tu nacimiento
const datebirth = new Date(1993, 04, 11)
console.log(datebirth.toLocaleDateString());

//Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
function hoyesmastarde(date,datebirth) {
    if (date > datebirth) return `Hoy ${date.toLocaleDateString()} es mas tarde que que la fecha de mi nacimiento ${datebirth.toLocaleDateString()}`;
    return `Hoy ${date.toLocaleDateString()} NO es mas tarde que que la fecha de mi nacimiento ${datebirth.toLocaleDateString()}`
}
console.log(hoyesmastarde(date,datebirth));

//Una variable que contenga el día de tu nacimiento
const daybirth = datebirth.getDate()
console.log(daybirth);

//Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const monthbirth = datebirth.getMonth()
console.log(monthbirth+1);

//Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const yearbirth = datebirth.getFullYear()
console.log(yearbirth);
