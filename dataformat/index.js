// const d = new Date("2025-03-25T12:00:00");
// console.log(d)

// const e = new Date("01/22/2025");
// console.log(e)

// let msec = Date.parse("march 21,2012")
// const a = new Date(msec)

// console.log(a)

// const d = new Date("2025-03-25T12:00:00");
// console.log(d)

// const e = new Date("01/22/2025");
// console.log(e)

// let msec = Date.parse("march 21,2012")
// const a = new Date(msec)

// console.log(a)




// const d = new Date("2025-03-25T12:00:00");
// console.log(d)


// const e = new Date();
// console.log(e)



// // d.getFullYear()

// const arr = ['jan','feb','march','april']
// console.log(arr[d.getMonth()])

// console.log(e.getHours());
// console.log(d.getHours());

// console.log(e.getMinutes());
// console.log(d.getMinutes());

// console.log(e.getMilliseconds());
// console.log(d.getMilliseconds());


// console.log(e.getDay());
// console.log(d.getDay());

// console.log(e.getTime());
// console.log(d.getTime());


// console.log(Date.now());



const d = new Date()
d.setFullYear(2020)

console.log(d);

// const e = new Date()
// e.setMonth(2)

// console.log(e);

// const e = new Date()
// e.setDate(e.getDate()+50)

// console.log(e);
// console.log(e.getMonth());

// const e = new Date()
// e.setTime(e.getTime()+50000000)

// console.log(e);

let text =""
const today = new Date();
const someday = new Date();

someday.setFullYear(2100,0,1)

if(someday > today){
    text = "today is beefoerre ";
    console.log(text)
    console.log(someday)

}
else{
    text = "today is after ";
    console.log(text)
    console.log(someday)
}




