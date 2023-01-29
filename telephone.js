// creating a Telephone class
class Telephone {
    constructor() {
        this.TelephoneNumber = undefined
        this.phoneContact = new Set()
        this.ObserverArray = []
    }
    //
    AddPhoneNumber(phoneNumber){
        this.TelephoneNumber = phoneNumber
        this.phoneContact.add(this.TelephoneNumber)
        if(this.phoneContact.has(phoneNumber) && this.phoneContact.has(phoneNumber) !== null ){
            console.log(`${phoneNumber} has been added!...`);
        }
        console.log(this.phoneContact);
    }
    //
    RemovePhoneNumber(phoneNumber){
         this.phoneContact.delete(phoneNumber)
         if(!this.phoneContact.has(phoneNumber)){
               console.log(`${phoneNumber} has been deleted!...`);
               
         }
    }
    //
    DialPhoneNumber(phoneNumber) {
        if(this.phoneContact.has(phoneNumber)){
            if(this.ObserverArray.length >= 1){
                this.ObserverArray.forEach( observer => {
                    observer.message = `Now dialing ${phoneNumber}...`
                    if(observer.message) return
                })
            }
         }else {
            console.log(`${phoneNumber} doesn't exist in your contact list`);
        }
 }
    //
    AddObserver(observer) {
        this.ObserverArray.push(observer)
        console.log('New observer has been added!....');
    }
}
//
class Observer {
constructor(){
this.message = ''
}
}
//
module.exports = { Observer, Telephone }