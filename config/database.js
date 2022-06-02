//importar o pacote mongoose
const mongoose = require('mongoose')

const conn = async()=>{
    //mongoAtlas
    const atlas = await mongoose.connect('mongodb+srv://userNovo:eugostodasenhaumarizal9@fiaptecnico.hatvo.mongodb.net/todo_list') 
} 

module.exports = conn
