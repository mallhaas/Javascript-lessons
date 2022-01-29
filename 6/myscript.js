let myArr =['ice', 'fin', 'po'];

function getCountryName (name) {
    return name + 'land';
}
const countries = myArr.map(getCountryName);
console.log(countries);