
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
const csv = require('csv-parser');
const fs = require('fs');

let obj ={};
let finalObject ={};
let jo = 1;
let c= 0;
const func = async function(){
    setTimeout(()=>{console.log("CCCCCC: ",c),9000});
    console.log("Counter: \t",c);

    console.log("func triggered!");
    console.log("joe",jo * 100);

    fs.createReadStream('zero.csv')
    .pipe(csv())
    .on('data', (row) => {
        const myPro = new Promise((resolve,reject)=>{
            console.log("promise activated...");
            resolve(row)
        });
        // myPro.then(val=>{console.log("row.licence: ",val.license_plate_number)});
        myPro.then(val=>{
            if(!obj[val.license_plate_number]){
                obj[val.license_plate_number] =[{Enter: val.device_location ==="ENTER" ? parseInt(val.timestamp): 0 ,
                Exit: val.device_location ==="EXIT" ? parseInt(val.timestamp): 0}]
            }else{
                obj[val.license_plate_number].push({Enter: val.device_location ==="ENTER" ? parseInt(val.timestamp): 0 ,
                Exit: val.device_location ==="EXIT" ? parseInt(val.timestamp): 0})
            }
            return obj
        }).then(val=>{
            
            c += 1;
            // console.log("object: ",val);
            // const newVal = val;
            // console.log("newVal: ",newVal)
            // for(let x in newVal){
            //     // console.log("X: ",x);
            //     // sum(obj[x]);
            //     // finalObject[x] =sum(x);
            // }
            // return finalObject
        }).then(val=>{
            console.log("last console, finalObject: \t",val)
        });
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
    });
};
func();


function sum(object){
    let summationOfExits = 0;
    let summationOfEnters = 0;
    object.map(({Enter,Exit})=>{
        summationOfExits += Enter;
        summationOfExits += Exit;
    });
    console.log(`summation of all Enters: ${summationOfEnters} \n summation of all Exits: ${summationOfExits}`);
    return(summationOfExits - summationOfEnters)
};

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('foo');
//     }, 300);
//   });
  
//   myPromise
//     .then(val=>{console.log("val: ",val)})



    /*

            if(!obj[row.license_plate_number]){
            obj[row.license_plate_number]="Salam"
        }
        console.log("first obj:\n",obj);
        // console.log(row);

    */


        /*
                    if(!obj[val.license_plate_number]){
                obj[val.license_plate_number]={Enter:val.device_location==="ENTER" ? parseInt(val.timestamp): 600, Exit:20}
            }else{
                obj[val.license_plate_number].Enter += val.device_location ==="Enter" ? parseInt( val.timestamp ) : 0
            }

            */