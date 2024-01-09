//Route duoc import de lay path va router
//chay constructor giong nhu 1 get
import { Route } from "core/interfaces";
import express from 'express';
import mongoose from "mongoose";
class App{
    public app: express.Application;
    public port: string | number;

    constructor(routes: Route[]){
        this.app=express();
        this.port=process.env.PORT || 9999;
        this.initializeRoutes(routes);
        this.connectToDatabase();
    }

  

    public listen(){
       this.app.listen(this.port, ()=>{
            console.log(`Server is listening on port ${this.port}`);
        });
    }


    private initializeRoutes(routes: Route[]){
        routes.forEach((route)=>{
            this.app.use('/', route.router)
        });
    }

    private connectToDatabase(){
        try {
            mongoose.connect('mongodb+srv://nguyenduchau12g:projectdautien@main.sbksmxq.mongodb.net/?retryWrites=true&w=majority');
            console.log("Database connected")
        } catch (error) {
            console.log("Connect to Db error")
        }
    }
}
export default App;