let guest_list :string[] = ['abdul' , 'abbas' , 'ali'];

// for(let i=0; i<guest_list.length; i++){

//     console.log('Dear Mr . ' + guest_list[i] + ',\n\nit is our pleasure to invite you in our party. \n\nThank You !')

// }

let absent_guest :string = 'abdul' ; 

let new_guest :string = 'rehman' ; 

guest_list[0] = new_guest ; 

// for(let i=0; i<guest_list.length; i++){

// console.log('Dear Mr . ' + guest_list[i] + ',\n\nit is our pleasure to invite you in our party. \n\nThank You !')

// }

console.log( ` Mr . ${absent_guest} is not coming in our party` )

console.log('Good News! We Find big table so we are inviting 3 more guests. ')

guest_list.unshift('azam') ; 

guest_list.splice(2 , 0 , 'abdul lah') ;

guest_list.push('safur rehman') ;

for(let i=0; i<guest_list.length; i++){


    console.log('Dear Mr . ' + guest_list[i] + ',\n\nit is our pleasure to invite you in our party. \n\nThank You !')
    
    }

    console.log('Sorry we can nt arange big table, only Two people will br invited.')

while(guest_list.length > 2){

    let remove_guest =  guest_list.pop();

console.log(`Sorry Mr . ${remove_guest}, you are not invited for Dinners.`);
}

for(let i=0; i<guest_list.length; i++){

 console.log('Dear Mr . ' + guest_list[i] + ',\n\n You Are Still Invited \n\nThank You !')}

 guest_list.splice(0, 2);

 console.log(guest_list);
