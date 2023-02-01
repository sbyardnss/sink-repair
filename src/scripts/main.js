import { SinkRepair } from "./SinkRepair.js"
import { getRequests, fetchRequests, fetchPlumbers } from "./dataAccess.js"

const requests = getRequests()




const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests()
        .then(() => fetchPlumbers()) 
        .then(
            () => { 
            mainContainer.innerHTML = SinkRepair()
        }
    )
}

render()


mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)
