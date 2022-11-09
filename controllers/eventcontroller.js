const Event=require("../models/TodoModel");

//Create an event
exports.createEvent=async(req,res,next)=>{
    const event=await Event.create(req.body);
    res.status(201).json({
        success:true,
        message: "event created successfully",
        event
    })
}

//Get all events
exports.getAllEvents= async(req,res)=>{
    const events= await Event.find(req.query);
    res.status(201).json({
        success:true,
        message: "all the events fetched successfully",
        events
    })
}

//Update events
exports.updateEvent= async(req,res,next)=>{
    let event= await Event.findById(req.params.id);
    event= await Event.findByIdAndUpdate(req.params.id,req.body);
    await event.save()
     res.status(201).json({
        success:true,
        message:"event updated successfully ",
        event
    })
}

//Delete event
exports.deleteEvent=async(req,res,next)=>{
    const event=await Event.findById(req.params.id);
    await event.remove()
    res.status(201).json({
        success:true,
        message:"event deleted successfully"
      })  
}