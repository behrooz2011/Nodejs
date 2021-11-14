
const Pulser = require('./pulser');

// Instantiate a Pulser object
const pulser = new Pulser();
// Handler function
pulser.on('pulse', () => {
    console.log(`${new Date().toISOString()} pulse received ,that's coool!`);
});
// Start it pulsing
pulser.start(); 