import { fetchReservations } from "./dataAccess.js"
import { Clowns } from "./Clowns.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    
    fetchReservations()
    .then(
        () => {
            mainContainer.innerHTML = Clowns()
        }
    )
    .catch(console.log('err, or delete'))
}

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

render()
