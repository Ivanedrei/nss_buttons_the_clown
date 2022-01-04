import { getParties, getClowns } from "./dataAccess.js"

const clowns = getClowns()

const convertRequestToListElement = (party) => {
    return `<li>
            ${party.parentName} plans a party for ${party.childName} at ${party.address}. They will be expecting ${party.childrenAttending} children attending on ${party.date}. Party will be reserved for ${party.reservationHours} hours.
            <button class="request__delete"
                id="request--${party.id}">
            Delete
        </button>
            <button class="request__deny"
                id="request--${party.id}">
            Deny
        </button>
        <select class="clowns" id="clowns">
    <option value="">Choose</option>
    ${clowns.map(
        clown => {
            return `<option value="${request.id}--${clown.id}">${clown.name}</option>`
        }
    ).join("")
        }
</select>`
}

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            //not sure what to do here! same on sinkRepair
        }
    }
)

export const Parties = () => {
    const parties = getParties()

    let html = `
    < ul >
    ${parties.map(convertRequestToListElement)
        }
        </ul >
    `

    return html
}