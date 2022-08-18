const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://kayyum07:9960960245@cluster1.ege0m.mongodb.net/shreyNews', { useUnifiedTopology: true, useNewUrlParser: true })

const connection = mongoose.connection

connection.on('connect', () => {
    console.log('monoDB connection is successfull')
})

connection.on('error', () => {
    console.log('Not able to connect')
})

module.exports = mongoose