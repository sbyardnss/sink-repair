import { getRequests } from "./dataAccess.js"


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
    const requests = getRequests()
    let html = ""
    html += `<li>${obj.description}</li>`

    // OLD CODE THAT TRIPLED LIST BECAUSE YOU ARE EFFECTIVELY ITERRATING TWICE
    // for (const request of requests) {
        // html += `<li>${obj.description}</li>`
    // }
    return html
}

export const Requests = () => {
    const requests = getRequests()
    const requestList = ""
    let html = `
        <ul>
            ${
                requests.map(convertRequestsToList).join("")
            }
        </ul>
    `
    return html
}

