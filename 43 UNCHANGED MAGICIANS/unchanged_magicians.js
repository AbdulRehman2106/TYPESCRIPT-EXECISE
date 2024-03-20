"use strict";
let magician = ['abdul', 'rehman', 'abbas', 'ali'];
function copyArray(arr) {
    return [...arr];
}
function make_great(magicianArry) {
    for (let i = 0; i < magicianArry.length; i++) {
        magicianArry[i] = 'the Great ' + magicianArry[i];
    }
}
function show_magicians(magician) {
    magician.forEach(element => {
        console.log(element);
    });
}
const copyMagicianAreay = copyArray(magician);
make_great(copyMagicianAreay);
console.log('\n\nTHIS IS MY ORGINAL ARRAY :');
show_magicians(magician);
console.log('\n\nTHIS IS MY MODIFIED COPY OF THE ARRAY :');
show_magicians(copyMagicianAreay);
