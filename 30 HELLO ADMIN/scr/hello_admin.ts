import { Console } from "console"

const userName : string[] = ['Admin' , 'Maneger' , 'Assistant 1' , 'Assistant 2' , 'Assistant 3']

for (let i = 0; i< userName.length; i++) {

    if(userName[i] === 'Admin'){

        console.log('Hello Admin, Would You Like To See A Status Report ? ');
}
else(
    console.log(`Hello ${userName[i]},Thank You For Logging In Again `)
)
    }