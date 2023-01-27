import { getRequests } from "./dataAccess.js"


const convertRequestsToList = () => {
    const requests = getRequests()
    let html = ""
    for (const request of requests) {
        html += `<li>${request.description}</li>`
    }
    return html
}

export const Requests = () => {
    const requests = getRequests()
    let html = `
        <ul>
            ${
                requests.map(convertRequestsToList).join("")
            }
        </ul>
    `
    return html
}

