
let external_instance;

class Singelton {
    #count = 1  // private variable
    static #instance; // With internal variable

    
    constructor(){
        // With external variable
        // if (!external_instance){
        //     external_instance = this
        // }
        // return external_instance

        
        // With Internal variable
        if (!Singelton.#instance){
            Singelton.#instance = this
        }
        return Singelton.#instance
    }


    increment(){
        this.#count += 1
    }

    display_count(){
        return this.#count
    }
}


let singelton1 = new Singelton()
singelton1.increment()
singelton1.increment()
singelton1.increment()
singelton1.increment()
console.log(singelton1.display_count())

let singelton2 = new Singelton()
console.log(singelton2.display_count())