"use strict";
let current_users = ['ABDul', 'REHMan', 'ABBAs', 'ALi', 'ZUBAir'];
let new_users = ['Faizan', 'Imran', 'Rizwan', 'ALi', 'ABBAs'];
new_users.forEach(newUsername => {
    let lowerCase = newUsername.toLowerCase();
    if (current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)) {
        console.log(`The user name ${newUsername} It's not available, please write a different user name`);
    }
    else {
        console.log(`The username ${newUsername} is avilable.`);
    }
});
