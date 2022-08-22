import express from 'express';
import dotenv from 'dotenv';

const app=express();
dotenv.config();
const PORT= process.env.PORT||3049;

app.get ('/', (req:express.Request,res:express.Response)=>{
    res.send(user);
})
app.listen(PORT,()=>{
    console.log(`Listening on port http://localhost:${PORT}`);
});
interface IUSER{
    firstName:string;
    lastName:string;
    accessGroups:string[];
}

const user:IUSER={
    firstName:"Max",
    lastName:"Müller",
    accessGroups:['loggedInUsers', 'members']
};
console.log(user);