const   firebase  = require("firebase-admin");

const serviceAccount = require('./todo-list-10eeb-firebase-adminsdk-ybcuz-ab77672241.json')

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount)
})


const db = firebase.firestore()

class Task {
    
    static create(task_data){
        let taskCol = db.collection("tasks")
        let taskDoc = taskCol.doc("test2")
        taskDoc.set(task_data)
    }
}

module.exports = {Task}