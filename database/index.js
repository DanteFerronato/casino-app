const mongoose = require('mongoose');
const { constants } = require('original-fs');
mongoose.connect('mongodb://localhost:27017/jueves')
.then((result) => {
    console.log("Conectando a MONGO: ", result);
})
.catch((error) => {
    console.log("Error al conectar: ", error);
}) 

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    isFinished: Boolean
})

const Task = mongoose.model('Task', taskSchema);

let tarea1 = new Task({
    title: "Tarea 1",
    description: "Tarea de prueba",
    date: new Date(),
    isFinished: false
});

tarea1.save().then(result => {
    console.log("SAVED: ", result);
}).catch(error => {
    console.log("ERROR: ", error)
})

module.export = function TasksFind(){

}