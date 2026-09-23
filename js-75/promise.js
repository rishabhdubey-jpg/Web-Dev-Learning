console.log('This is a promise...');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you")
    }
    else {
        setTimeout(() => {
            console.log("Yes i'm donee..");
            resolve("rishabhh")
        }, 3000)
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 2")
    }
    else {
        setTimeout(() => {
            console.log("Yes i'm donee..2");
            resolve("rishabhh 2")
        }, 1000)
    }
})

let p3 = Promise.race([prom1, prom2]);
p3.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
})