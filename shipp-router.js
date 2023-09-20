const express=require('express')
const router=express.Router()
const shipcontroller=require('../controller/shipp-controller')
const validation=require('../helper/validation')
const authenti=require('../helper/authenti')

router.get('/getship',authenti.verifyToken,shipcontroller.getShipDetail)

router.get('/getshipbyid/:sid',shipcontroller.getSomeShip)

router.post('/addship',authenti.verifyToken,validation.createShipSchema,shipcontroller.addShip)

router.put('/updateship/:sid',authenti.verifyToken,validation.createShipSchema,shipcontroller.updateShip)

router.delete('/deleteship/:sid',authenti.verifyToken,shipcontroller.deleteShip)

router.post('/login',shipcontroller.login)

module.exports=router;
