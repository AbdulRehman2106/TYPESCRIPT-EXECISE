"use strict";
let guest_list = ['abdul', 'abbas', 'ali'];
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear Mr . ' + guest_list[i] + ',\n\nit is our pleasure to invite you in our party. \n\nThank You !');
}
let absent_guest = 'abdul';
let new_guest = 'rehman';
guest_list[0] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear Mr . ' + guest_list[i] + ',\n\nit is our pleasure to invite you in our party. \n\nThank You !');
}
console.log(` Mr . ${absent_guest} is not coming in our party`);
