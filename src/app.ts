const form = document.querySelector(".new-item-form") as HTMLFormElement

const type = document.querySelector("#type") as HTMLSelectElement

const toForm = document.querySelector("#tofrom") as HTMLInputElement

const details = document.querySelector("#details") as HTMLInputElement

const amount = document.querySelector("#amount") as HTMLInputElement

// add event to the form 

form.addEventListener("submit", (e:Event) => {
    e.preventDefault()
    console.log( 
        type.value,
        toForm.value,
        details.value,
        amount.valueAsNumber
        // 이렇게하면 javascript returns amount as string need to change "value" as "valueAsNumber"
    )

})