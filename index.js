const express = require('express')

const app = express()

app.get('/', (req, res)=>{
  return res.json({
    success: true,
    message: 'OK'
  })
})

app.listen(8888, ()=>{
  console.log('App listening on port 8888')
})