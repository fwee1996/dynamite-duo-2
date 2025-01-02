import { getVillains } from "./database.js";

const villains=getVillains()

//UPPERCASE MODULE EXPORT FUNCTION
export const VillainsList=()=>{ 
    let villainHTML = "<ul>"

    for (const villain of villains) {
        villainHTML+=`<li>${villain.name}</li>`
    }

    villainHTML += "</ul>"

    return villainHTML
}