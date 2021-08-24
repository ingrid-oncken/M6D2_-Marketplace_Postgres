import pg from "pg"

//pools will use enviroment variables
//for connection information

console.log(process.env.NODE_ENV)
const db = new Poll()

export default db
