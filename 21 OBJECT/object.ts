// let person_Name : string = 'abdul';

// const personName_Array :(string)[] = ['person', 'car' ,'cold drink' ] ;

interface person {
    age : number ,
    name : string , 
    nationality : string ,
    student : boolean

}

let person :person = {
    age : 17 ,
    name : 'abdul rehman' ,
    nationality : 'pakistan' , 
    student : true ,
}

console.log(person);

interface bike {
    maker : string ,
    color : string ,
    automatic : boolean,
}

let bike = {
    maker : 'kawasaki',
    color : 'yellow',
    automatic : true ,

}

console.log(bike);
