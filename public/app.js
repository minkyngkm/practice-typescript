import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
// // make variables that has the structure of interface HasFormatter 
// // 일단은 variable 의 type 만 정해주는 것.
// let docOne : HasFormatter
// let docTwo : HasFormatter
// // 그리고 instance 생성 
// docOne = new Invoice ("Patric", "Web dev work", 300)
// docTwo = new Payment ("Matt", "Plumbing", 400)
// // 그리고 array docs 을 만듬. 이 array 에는 HasFormatter structure 만 들어갈 수 있음! 
// let docs : HasFormatter[] = []
// docs.push(docOne)
// docs.push(docTwo)
// console.log( docs )
// const invOne = new Invoice( "Jane", "Cleaning", 200)
// const invTwo = new Invoice( "Kim", "babysitting", 100)
// // console.log( invOne,invTwo)
// // make an array that has instances 
// let invoices : Invoice[] = []
// // type 지정하고, declare 까지 한 거.
// invoices.push(invOne)
// invoices.push(invTwo)
// // console.log( invoices)
// invoices.forEach( inv => 
//     console.log( inv.client, inv.details, inv.amount, inv.format())
//     )
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toForm = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// add event to the form 
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log( 
    //     type.value,
    //     toForm.value,
    //     details.value,
    //     amount.valueAsNumber
    //     // 이렇게하면 javascript returns amount as string need to change "value" as "valueAsNumber"
    // )
    // check the value of select and make argument depending on it
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toForm.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toForm.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
