import { ServiceForm } from "./ServiceForm.js"
import { Requests } from "./requests.js"


export const SinkRepair = () => {
    return `
    <h1>Maude and Merle's Sink Repair</h1>
    <section class="serviceForm">
        <h2>Service Form</h2>
        ${ServiceForm()}
    </section>

    <section class="serviceRequests">
        <h2>Service Requests</h2>
        ${Requests()}
    </section>
    `
}

