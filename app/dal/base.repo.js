const mongoose = require('mongoose')
require('dotenv/config');
let connection = () => {
  mongoose.connect(process.env.MONGO_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  const db = mongoose.connection
  db.once('open', _ => {
    console.log('Database connected:', process.env.MONGO_URL)
  })

  db.on('error', err => {
    console.error('connection error:', err)
  })
}

module.exports.connection = connection
