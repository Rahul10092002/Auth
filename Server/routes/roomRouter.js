const auth = require("../middleware/auth");
const{ Router}=require('express')
const createRoom = require('../Controllers/roomController')

// import { Router } from "express";
// import { createRoom } from "../Controllers/roomController";
// import auth from "../middleware/auth";


const roomRouter = Router();
roomRouter.post('/',auth,createRoom)

module.exports = roomRouter;