let current_users : string[] = ['ABDul' , 'REHMan' , 'ABBAs' , 'ALi' , 'ZUBAir'];

let new_users: string [] = ['Faizan' , 'Imran' , 'Rizwan' , 'ALi' , 'ABBAs'];

new_users.forEach(newUsername =>{

    let lowerCase : string = newUsername.toLowerCase();
    
if (current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)){

console.log(`The user name ${newUsername} It's not available, please write a different user name`);
}

else{
    console.log(`The username ${newUsername} is avilable.`);
}

})