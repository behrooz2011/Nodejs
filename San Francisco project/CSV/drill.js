const fs = require('fs');
const csv = require('csv-parser');
const  obj={};
const finalResult =[];

fs.createReadStream('zero5.csv')
  .pipe(csv())
  .on('data', function (val) {
      console.log("row:\t",val.img);
    //   list.push(val);
        if(!obj[val.license_plate_number]){
            obj[val.license_plate_number] =[{Enter: val.device_location ==="ENTER" ? parseInt(val.timestamp): 0 ,
            Exit: val.device_location ==="EXIT" ? parseInt(val.timestamp): 0}]
        }else{
            obj[val.license_plate_number].push({Enter: val.device_location ==="ENTER" ? parseInt(val.timestamp): 0 ,
            Exit: val.device_location ==="EXIT" ? parseInt(val.timestamp): 0})
        }
  })
  .on('end', function () {
      console.log("rowwww...")
      // TODO: SAVE users data to another file
    });
// console.log("list:",list)
const func= async function(){
  
    const myPro = new Promise((resolve,reject)=>{
        console.log("promise activated...");
        // setTimeout(()=>resolve(obj),2000)
        resolve(obj)
    });
    const j= myPro.then(obj=>{
        // console.log("THIS is VAL:\t",val);
        // return val;
        for(let x in obj){
                    console.log(x);
                    sum(obj[x]);
                    finalResult.push({license_plate:x,duration:sum(obj[x])})
                }
        console.log("final result:\n",finalResult);
        return finalResult;
    });
    // const  obj={};
    // const finalResult =[];
    return j


    // setTimeout(function(){
    //     console.log("OBJ: ",obj);
    //     for(let x in obj){
    //         console.log(x);
    //         sum(obj[x]);
    //         finalResult.push({license_plate:x,duration:sum(obj[x])})
    //     }
    //     console.log("final result:\n",finalResult);
    //     return finalResult;
    // },3000)


    // const myPro = new Promise((resolve,reject)=>{
    //     console.log("promise activated...");
    //     setTimeout(()=>resolve(obj),2000)
    //     // resolve(obj)
    // });
    // const j= myPro.then(val=>{
    //     console.log("THIS is VAL:\t",val);
    //     return val;
    // });
    // return j
};
// func();
function sum(object){
    let summationOfExits = 0;
    let summationOfEnters = 0;
    object.map(({Enter,Exit})=>{
        summationOfEnters += Enter;
        summationOfExits += Exit;
    });
    console.log(`summation of all Enters: ${summationOfEnters} \n summation of all Exits: ${summationOfExits}`);
    return(summationOfExits - summationOfEnters)
};

module.exports ={
    func,
    obj,
};