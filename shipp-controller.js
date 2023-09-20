const shipModel=require('../model/shipp-module')

let login = async (req, res) => {
    let shipData = req.body;
    try{
        let shipdata = await shipModel.loginUser(shipData);
        res.send(shipdata)
    }catch(err){
        res.send(err);
    }
}


let getShipDetail=async(req,res)=>{
    try{
        let shipData=await shipModel.getAllDetails()
        res.send(shipData)
    }catch(err){
        res.send(err)
    }
}

let getSomeShip=async(req,res)=>{
    let sid=req.params.sid
    try{
        let someData=await shipModel.getSomeDetails(sid)
        res.send(someData)
    }catch(err){
        res.send(err)
    }

}

let addShip=async(req,res)=>{
    let Data=req.body
    try{
        let addData=await shipModel.addShipDetails(Data)
        res.send("Data Inserted Successfully")
    }catch(err){
        res.send(err)
    }
    
}

let updateShip=async(req,res)=>{
    let shipid=req.params.sid;
    let updateData=req.body;
    try{
        let shipdata= await shipModel.updatShipDetails(shipid,updateData)
        res.send( "Data Updated successfully")
    }catch(err)
    {
        res.send(err)
    }
}

let deleteShip=async(req,res)=>{
    let sid=req.params.sid;
    try{
        let userdata= await shipModel.deleteShipDetails(sid)
        res.send("Data Deleted Successfully")
    }catch(err)
    {
        res.send(err)
    }
}

module.exports={getShipDetail,getSomeShip,addShip,updateShip,deleteShip,login}