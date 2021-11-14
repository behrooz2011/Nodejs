const EventEmitter = require('events');

class Pulser extends EventEmitter {
    start() {
        console.log("class start initiated ...")
        setInterval(() => {
            console.log(`${new Date()} >>>> pulse`);
            this.emit('pulse');
            // console.log("PULSER class  this...",this);
            console.log(`${new Date().toISOString()} <<<< pulse`);
        }, 3000);
    }
}
module.exports = Pulser;

