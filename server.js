const express=require('express');
const app=express()
app.use(express.json());
let items=[]
app.get('/items',(req,res)=>{
    res.json(items)
})
app.post('/items',(req,res)=>{
    const newItem={
        id:Date.now(),
        name: req.body.name
    }
    items.push(newItem);
    res.send({message:"ITem added"})
})
app.put('/items/:id',(req,res)=>{
    const item=items.find(i=>i.id==req.params.id)
    if(item==null) res.status(404).send({message:"Item not present"})
    item.name=req.body.name
    res.send({message:"ITem modified"})
})
app.delete('/items/:id',(req,res)=>{
    //keep items that pass the condition
    items=items.filter(i=>i.id!=req.params.id)
    res.send({message:"ITem deleted"})
})
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})