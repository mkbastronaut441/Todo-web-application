const express=require('express');

const{createEvent, getAllEvents, updateEvent, deleteEvent}=require("../controllers/eventcontroller");

const router=express.Router();


router.route("/events").get(getAllEvents);


router.route("/event/new").post(createEvent);


router.route("/event/:id").put(updateEvent).delete(deleteEvent);




module.exports=router