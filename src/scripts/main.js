import { SinkRepair } from "./SinkRepair.js"
import { getRequests, fetchRequests } from "./dataAccess.js"

const requests = getRequests()




const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests().then(
        () => {
            
            mainContainer.innerHTML = SinkRepair()
        }
    )
}

render()

