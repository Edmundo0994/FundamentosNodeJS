const os = require('os')

// console.log(os.arch())
// console.log(os.platform())

// console.log(os.cpus()) 

// console.log(os.constants)

const SIZE = 1024
const kb = (bytes) => bytes / SIZE
const mb = (bytes) => Math.round(kb(bytes) / SIZE)
const gb = (bytes) => Math.round(mb(bytes) / SIZE)

console.log(os.freemem())
console.log(kb(os.freemem()))
console.log(mb(os.freemem()))
console.log(gb(os.freemem()))

console.log(gb(os.totalmem()))

console.log(os.homedir())
console.log(os.tmpdir())

console.log(os.hostname())
console.log(os.networkInterfaces())
