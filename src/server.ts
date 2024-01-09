import express, { Request, Response } from 'express'
const port = process.env.PORT || 9999;
const app=express();

app.get('/', (req: Request, res: Response)=>{
    res.send("Api is runing")
})

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});