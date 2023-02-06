import { getRequests, deleteRequest, getPlumbers, sendRequest, sendCompletion, changeRequest} from "./dataAccess.js"


// const convertRequestsToList = () => {
//     const requests = getRequests()
//     let html = ""
//     for (const request of requests) {
//         html += `<li>${request.description}</li>`
//     }
//     return html
// }

// export const Requests = () => {
//     const requests = getRequests()
//     let html = `
//         <ul>
//             ${
//                 requests.map(convertRequestsToList).join("")
//             }
//         </ul>
//     `
//     return html
// }

const convertRequestsToList = (obj) => {
    const plumbers = getPlumbers()
    let html = ""
    if (obj.completed === false) {
        html += `<li class="openRequests">${obj.description}
                <select class="plumbers" id="plumbers">
                    <option value="0">${`Choose`}</option>
                    ${
                        plumbers.map(
                            plumber => {
                                return `<option value="${obj.id}--${plumber.id}">${plumber.name}</option>`
                            }
                        ).join("")
                    }
                </select>
                <button class="request__delete"
                        id="request--${obj.id}">
                    Delete
                </button>
            </li>`
        }
    if (obj.completed === true) {
        html += `<li class="closedRequests">${obj.description}
            <button class="request__delete" id="request--${obj.id}">Delete</button>
        </li>`
    }

    // OLD CODE THAT TRIPLED LIST BECAUSE YOU ARE EFFECTIVELY ITERRATING TWICE
    // for (const request of requests) {
        // html += `<li>${obj.description}</li>`
    // }
    return html
}

export const Requests = () => {
    const requests = getRequests()
    // const requestList = ""
    // const openRequests = []
    // const completedRequests = []
    // for (const request of requests) {
    //     request.completed = false ? openRequests.push(request) : 
    //     request.completed = true ? completedRequests.push(request) :
    //     null;
    // }
    let html = `
        <ul id="requestList">
            ${
                requests.map(convertRequestsToList).join("")
            }
            
        </ul>
    `
    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})


mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "plumbers") {
            const [requestId, plumberId] = event.target.value.split("--")
            
            /*
                This object should have 3 properties
                   1. requestId
                   2. plumberId
                   3. date_created
            */
            const completion = { 
                "plumberId": plumberId,
                "requestId": requestId,
                "date": Date.now()
            }
            sendCompletion(completion)
            const requests = getRequests()
            const foundRequest = requests.find((request) => {
                return request.id === parseInt(requestId)
            })
            
            foundRequest.completed = true
            changeRequest(requestId, foundRequest)
                
            
            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */

        }
    }
)