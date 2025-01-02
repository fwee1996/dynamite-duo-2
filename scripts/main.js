import { HeroList } from "./heroes.js"
import { VillainsList } from "./villains.js"

// Capture the return values of the HTML list generators
const heroListHTML= HeroList()
const villainsListHTML=VillainsList()

// Build up a single large string template containing both chunks of HTML
const theWholeEnchilada=
`
<h1>Heroes</h1>
${heroListHTML}

<h1>Villains</h1>
${villainsListHTML}
`

debugger

//reference the <main> element:
const theExistingMainElement = document.querySelector("#container")
//debugger //---this makes: after browser refresh and and hovering over
//theExistingMainElement variable show innerHTML: "\n        <h1>The Dynamite Duo</h1>\n    "

theExistingMainElement.innerHTML= theWholeEnchilada