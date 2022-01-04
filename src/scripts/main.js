import { fetchParties, deleteParty } from "./dataAccess.js"
import { buttonsClown } from "./buttonsClown.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchParties().then(
        () => {
            mainContainer.innerHTML = buttonsClown()
        }
    )

}

render()

mainContainer.addEventListener(
    "stateChanged",
    (customEvent) => {
        console.log("State of data has changed. Regenerating HTML...")
        render()
    }
)

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [, requestId] = click.target.id.split("--")
        deleteParty(parseInt(requestId))
    }
})