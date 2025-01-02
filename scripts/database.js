// export const database={
// heroes:[
//     {id: 1, name: "Dynoguy", power: "Fire blasts"},
//     {id: 2, name: "Hyperspeed", power: "Super speed"}
// ]
// }

//alt way for hero list and add villain list
const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        {id: 1, name: "evilProfessor", power: "Chemical explosion"},
        {id: 2, name: "incelInferno", power: "Combust on dismissal"}
    ]
}

console.log(database);

console.log('Before mapping heroes:', database.heroes);
console.log('Before mapping villains:', database.villains);

//export function that 
// makes a copy of villains list: .map(a=>{...a})
export const getVillains=()=>{
    //debugger; 
    return database.villains.map(villain=>({...villain})) 
}

export const getHeroes=()=>{
    //debugger; 
    return database.heroes.map(hero=>({...hero})) 
}





