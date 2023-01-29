//importing telephone file
const { Observer, Telephone } = require('./telephone')

//initiatiating the subject class
const contact1 = new Telephone()
//initiating the observer class
const somto = new Observer()
//intialiating the observer class
const kesta = new Observer()
// adding an observer to the observer array in the telephone class
contact1.AddObserver(somto)
//adding an observer to the observer array in the telephone class
contact1.AddObserver(kesta)
//adding an phonenumber to the setlist  
contact1.AddPhoneNumber("+234 23456789")
//adding an phonenumber to the setlist
contact1.AddPhoneNumber("+234 8165821655")
//adding an dialphonenumber to the setlist
contact1.DialPhoneNumber("+234 8165821655")

// running the subject class
console.log(contact1)