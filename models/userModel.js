const users = require('../user.json')
const { writeDataToFile } = require('../utils')

async function findUser(username){
    return new Promise((resolve,reject)=>{
        const user = users.find(u => u.username === username)
        resolve(user)
    })
}
async function createUser(user){
    return new Promise((resolve,reject)=>{
        users.push(user)
        writeDataToFile('./user.json',users)
        resolve(user)
    })
}

async function getUserById(id) {
    return new Promise((resolve, reject) => {
      const user = User.find(user => user.id === id)
      resolve(user)
    })
  }

module.exports = {findUser,createUser,getUserById}