import { sendRequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userParentName = document.querySelector("input[name='parentName']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const userAttendance = document.querySelector("input[name='attendance']").value
        const userAddress = document.querySelector("input[name='address']").value
        const userDate = document.querySelector("input[name='serviceDate']").value
        const userHours = document.querySelector("input[name='reservationHours']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            childrenAttending: userAttendance,
            address: userAddress,
            date: userDate,
            reservationHours: userHours
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})

export const ServiceForm = () => {
    let html = `
       
            <div class="field">
                <label class="label" for="parentName">Parent's Name</label> <br>
                <input type="text" name="parentName" class="input" />
            </div>
            <div class="field">
                <label class="label" for="childName">Child's Name</label> <br>
                <input type="text" name="childName" class="input" />
            </div>
            <div class="field">
                <label class="label" for="attendance"># of Children Attending</label> <br>
                <input type="number" name="attendance" class="input" />
            </div>
            <div class="field">
                <label class="label" for="address">Party Address</label> <br>
                <input type="text" name="address" class="input" />
            </div>
            <div class="field">
                <label class="label" for="serviceDate">Date of Event</label> <br>
                <input type="date" name="serviceDate" class="input" />
            </div>
            <div class="field">
                <label class="label" for="reservationHours">Hours of Event</label> <br>
                <input type="number" name="reservationHours" class="input" />
            </div>

            <div class="button__size">
                <button class="button" id="submitRequest">Submit Request</button>
            </div>
        `

    return html
}
