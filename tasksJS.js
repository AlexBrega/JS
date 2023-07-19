                             // task 1
let myArr = [1.9,5.7,10.9,20.9]

function m(array) {
  const sum = array.reduce((acc,el)=> acc + el,0)
  return Math.round(sum/array.length)
}

// console.log(m(myArr))

                              //task 2

let yourArr= [1,4,5,8,0]

function mover(array) {
    const first = array.shift()
    array.push(first)
    return array
}

// console.log(mover(yourArr))

let testArr = [1,4,5,8,0]

function moverImmut(array){
    const copy = array.slice(1)
    copy.push(array[0])
    return copy
}

// console.log(moverImmut(testArr))

                                 //task3

const list = [{name: "alex", age: 27},
 {name: "john",age: 20}, {name:"lora", age: 20} ]

 function changer(array){
    return array.map(el =>
        "Name: " + el.name + ",age: "+ el.age + " years")
 }

//  console.log(changer(list))


//                              Objects

//                               task1

let salaries = {
    John: 300,
    Ann: 350,
    Pete: 400
}

function allSalaries(obj) {
    let valuesObj = Object.values(obj)

    return valuesObj.reduce((acc,el)=> acc + el,0)
}

// console.log(allSalaries(salaries))


                            //task 2

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}

function  multiplyNumeric(obj) {
    for (let key in obj) {
        if(typeof obj[key] === 'number'){
            obj[key] = obj[key]*2
        }
    }
}

// console.log("before", menu);

// multiplyNumeric(menu)

// console.log("after", menu);

          

                            //task3

 class Ladder {

    constructor(initial = 0){
        this.step = initial
    }

    showStep() {
        console.log(this.step)
    }

    up() {
        this.step += 1
    }

    down() {
        this.step -= 1
    }
    
 }

 let ledder = new Ladder

//  ledder.showStep()
//  ledder.down()
//  ledder.showStep()
//  ledder.up()
//  ledder.up()
//  ledder.up()
//  ledder.showStep()


                       //OOP

class Worker {

    constructor(name,surname,rate,days){
        this.name = name
        this.surname = surname
        this.rate = rate
        this.days = days
    }

    getSalary() {
        return this.days * this.rate
    }

    getFullName() {
        return this.name + " " + this.surname
    }

}

 let me = new Worker("Alexandru", "Brega", 200, 20)

//  console.log(me.getSalary())
//  console.log(me.getFullName())




 class Boss extends Worker {
    constructor(name,surname,rate,days,workers){
        super(name,surname,rate,days)
        this.workers = workers
    }

    getSalary() {
        return this.days * this.rate * this.workers
    }

 }

 let meInFuture = new Boss("Alex", "Brega", 150,10,10)

//  console.log(meInFuture.getSalary())
//  console.log(meInFuture.getFullName())
 
//                   Reg Exp

                     //task 1
const testExp = "http://site.ru/index.php"
const testExp2 = "http://site.com"
const testExp3 = "http://site.ru"
const testExp4 = "http://site.html"

function checkExp(exp) {
    const reg = /^https?:\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?(.php|.html)$/
    return reg.test(exp)
}

// console.log(checkExp(testExp))
// console.log(checkExp(testExp2))
// console.log(checkExp(testExp3))
// console.log(checkExp(testExp4))


                    //task2
const number1 = '39991112233'
const number2 = '3 (999) 1112233'
const number3 = '+4 (999) 111-22-33'
const number4 = '+4 (999) 111 22 33'

function checkPhoneNum(number) { 

    const cleanedNum = number.replace(/\D/g, "")

    if(cleanedNum.length !== 11) {
        return false
    }

    if(!/^(4|3)\d{10}$/.test(cleanedNum)){
        return false
    }

    return true
}

// console.log(checkPhoneNum(number1))
// console.log(checkPhoneNum(number2))
// console.log(checkPhoneNum(number3))
// console.log(checkPhoneNum(number4))


// function checkPhoneNum2(number) { 

//     const regex = /^(?:\+4|3)(?:\s?|\(\d{3}\)\s?)(?:\d{3}[-\s]?\d{2}[-\s]?\d{2})$/
//     return regex.test(number)
// }

// console.log(checkPhoneNum2(number1))
// console.log(checkPhoneNum2(number2))
// console.log(checkPhoneNum2(number3))
// console.log(checkPhoneNum2(number4))

                  //task3

const message = "My credit cards is 1111222233334444 and 1111222233331678. Please keep it safe."

function security(text) {

   const cardNumbers = text.match(/\d{16}/g)

   for(let i = 0; i < cardNumbers.length; i++){
    const cardNumber = cardNumbers[i]
    const secNumber = cardNumber.substring(0,12).replace(/\d/g,"*") + cardNumber.substring(12)
    text = text.replace(cardNumber,secNumber)
   }
  
   return text
}

console.log(security(message))
 