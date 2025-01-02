//import { database } from "./database.js"; //dont use this because use getHeroes fn instead
import { getHeroes } from "./database.js"
const heroes=getHeroes()

//make a function to display heroes list
//turn js objects in database to html for browser display
export const HeroList=()=>{
    let heroHTML="<ul>"

    // for(const hero of database.heroes){
        for(const hero of heroes){
        heroHTML += `<li>${hero.name}</li>`
    }

    heroHTML+="</ul>"

    return heroHTML

}

//what you get:
// <ul>
//     <li>Dynoguy</li>
//     <li>Hyperspeed</li>
// </ul> 