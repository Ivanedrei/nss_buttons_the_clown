import { ServiceForm } from "./ServiceForm.js"
import { Parties } from "./Requests.js"

export const buttonsClown = () => {
    return `
        <h1>Buttons the Clown</h1>
        <section class="serviceForm">
        ${ServiceForm()}
        </section>
        
        <section class="serviceRequests">
        <h2>Service Requests</h2>
        ${Parties()}
        </section>
        `
}


