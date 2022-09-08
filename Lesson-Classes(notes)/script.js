// class car {
//     constructor(name,color,topspeed){
//         this.name = name
//         this.color = color
//         this.topSpeed = topspeed
//         this.currentSpeed = 0;

//     }

//     drive(speed = 10){
//         //console.log('just drove 2 miles!')
//         this.currentSpeed +=speed;
//         console.log(`driving speed at ${this.currentSpeed} mph`)
//     }
   
//     zeroToSxty(){
//         setTimeout(() => {
//             console.log('pHEW! that is so fast')
//             this.currentSpeed = 60;
//             console.log(this.currentSpeed)
        
//         })
//     }

//     brake(){
//         console.log('breaking !')
//         this.currentSpeed -=10
//     }

//     stop(){
//         console.log('coming to screeching halt!')
//         this.currentSpeed =0

//     }

//     getCurrentSpeed(){
//         return this.currentSpeed
//     }
// }

// const ferrari = new car('ferrari','red',250)
// //console.log(ferrari)

// //ferrari.zeroToSxty()
// //ferrari.drive()
// const nums = [1,2,3,4,5] 
// nums.forEach(element => ferrari.drive());
// //console.log(ferrari.currentSpeed)
// ferrari.brake()
// console.log(ferrari.currentSpeed)

// /////////////////// my method
// Array.prototype.mypush = function (item){
//     this[this.length] = item
//     return this
// }

// const fruits = ['banana','kiwi','pear']
// console.log(fruits)
// fruits.mypush('apple')
// console.log(fruits)

// const actor = { name : 'maryam' , age : 27 }
// object.keys(actor)
// Object.values(actor)

// add bank class
class bank {

    constructor(balance){
        this.balance = balance
    }


    withdraw(amount){
        if(this.balance - amount <= 0){
            console.log(' you cannot withdraw more than what you have!')
            console.log({balance : this.balance})
            return
        }
        this.balance -= amount
        console.log('withdrew',`$${amount}`)
        console.log({balance : this.balance})
        


    }
    deposit(amount){
        this.balance += amount
        console.log('deposited',`$${amount}`)
        console.log({balance : this.balance})

    }
}


const maryamcheckingAccount = new bank(100)
console.log(maryamcheckingAccount.balance)
//maryamcheckingAccount.deposit(100)
console.log(maryamcheckingAccount.balance)

const depositButton = document.getElementById('deposit')
const withdrawButton = document.getElementById('withdraw')
const amountInput = document.getElementById('amount')
const balanceDiv = document.getElementById('balance')

depositButton.onclick = () =>  {
    maryamcheckingAccount.deposit(Number(amountInput.value))
    balanceDiv.innerText = `Balance : ${maryamcheckingAccount.balance}`
}

withdrawButton.onclick = () => {
    maryamcheckingAccount.withdraw(Number(amountInput.value))
    balanceDiv.innerText = `Balance : ${maryamcheckingAccount.balance}`
}
