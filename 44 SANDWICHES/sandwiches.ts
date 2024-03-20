function makerSandwiches(item :string[] ){

    console.log('making your sandwiches with:');
 
    item.forEach(element => console.log(" - " + element));

    console.log(`ENJOY YOUR SANDWICHES`);
    
}

makerSandwiches(['Ham' , 'Cheese' , 'Lettuce'])

makerSandwiches(['Turkey' , 'Bacon'])

makerSandwiches(['Penaut Butter' , 'Jelly'])