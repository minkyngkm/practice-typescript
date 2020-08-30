// class ( to craete objects with the same format )

class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor ( c: string, d: string, a: number) {
        this.client = c,
        this.details = d,
        this.amount = a
    }
    format(){
        return `${this.client} owes £${this.amount} for ${this.details}`
    }
}

const invOne = new Invoice( "Jane", "Cleaning", 200)
const invTwo = new Invoice( "Kim", "babysitting", 100)

// console.log( invOne,invTwo)

// make an array that has instances 

let invoices : Invoice[] = []
// type 지정하고, declare 까지 한 거.

invoices.push(invOne)
invoices.push(invTwo)

// console.log( invoices)

invoices.forEach( inv => 
    console.log( inv.client, inv.details, inv.amount, inv.format())
    )


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