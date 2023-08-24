import express from 'express'
import  {categories}  from './utils/data/categories.js'
const app = express()
app.use(express.json())

app.get('/',(req,res,next)=> {
    console.log('hello')
    res.json({categories})
} )
 app.listen(4000,()=>{

console.log('listening on port 4000')

 })