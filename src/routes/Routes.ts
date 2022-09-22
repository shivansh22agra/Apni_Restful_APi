import express, { Request, Response } from "express";
import { todo } from "../modals/todo.modal";
//import { todo } from "../modals/todo.modal";
//mongodb ma ip address from anywhere karna


const router = express.Router();

router.get("/", (req: Request, res: Response) => {

    res.json({
        message: "Api is working",
    });
});
router.get("/about", (req: Request, res: Response) => {
    res.json({
        data: "about api path working",
    });
});
router.get("/profile", (req: Request, res: Response) => {
    res.json({
        data: "profile api path working",
    });
});
//POST REQUEST
router.post("/post", async (req: Request, res: Response) => {
    console.log(req.body);
    // let title=req.body.title;
    // let description=req.body.description;

    const { title, description } = req.body;
    const item = new todo({ title, description });
    //const item = todo.set({ title, description });
    await item.save();
    return res.status(200).json({

        data: item,
    });
});
router.get('/get', async (req: Request, res: Response) => {
    const item = await todo.find({});
    return res.status(200).json({
        data: item,
        //    console.log(data);
    });

});
router.get('/:id', async (req: Request, res: Response) => {
    //id ka liya req.params and title ka liya req.body
    const item = await todo.findById(req.params.id);
    return res.status(200).json({
        data: item,
    })
})
//update bhi kar leta hai
router.put('/update', async(req: Request, res: Response) => {
    const filter = {
        title: req.body.title
    }
    const update = {
        description: req.body.description

    }
    const item =await todo.updateOne(filter, update, {
        new: true
    });
    return res.status(200).json({
        data: item,
    });


});
//
router.delete('/delete', async(req: Request, res: Response) => {
    const del={
        title:req.body.title
    }
    const item =await todo.deleteOne(del);
    return res.status(200).json({
        data: item,
    });
});

export { router };
