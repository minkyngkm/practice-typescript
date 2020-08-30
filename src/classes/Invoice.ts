export class Invoice {
    constructor (
        readonly client: string,
        private details: string,
        public amount: number
    ){}
    format(){
        return `${this.client} owes £${this.amount} for ${this.details}`
    }
}


// class ( to create objects with the same format )

// class Invoice {
//     client: string;
//     details: string;
//     amount: number;

//     constructor ( c: string, d: string, a: number) {
//         this.client = c,
//         this.details = d,
//         this.amount = a
//     }
//     format(){
//         return `${this.client} owes £${this.amount} for ${this.details}`
//     }
// }

// if adding modifier before properties, you can make a class this way. 
// modifier 있을때만 가능! 