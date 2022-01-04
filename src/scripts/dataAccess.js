const applicationState = {

}

const API = "http://localhost:8088"

export const fetchParties = () => {
    return fetch(`${API}/parties`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.parties = serviceRequests
            }
        )
}

export const getParties = () => {
    return applicationState.parties.map(party => ({ ...party }))
}


export const sendRequest = (userServiceRequest) => {
    //userServiceRequest = dataToSendToApi from serviceform.js
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }
    const mainContainer = document.querySelector("#container")

    return fetch(`${API}/parties`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })


}

const mainContainer = document.querySelector("#container")

export const deleteParty = (id) => {
    return fetch(`${API}/parties/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

//clowns not being fetch or getclown not getting data
export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
        .then(response => response.json())
        .then(
            (clownService) => {
                applicationState.clowns = clownService
            }
        )
}

export const getClowns = () => {
    return applicationState.clowns.map(clown => ({ ...clown }))
}