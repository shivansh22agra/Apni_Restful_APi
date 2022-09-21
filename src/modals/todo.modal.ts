import mongoose from "mongoose";

interface ToDoI {
    title: string;
    description: string;
}

interface TodoDocument extends mongoose.Document {
    title: string;
    descriptiom: string;
}

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
});

interface todoModelInterface extends mongoose.Model<TodoDocument> {
    set(x: ToDoI): TodoDocument;


}
TodoSchema.statics.set = (x: ToDoI) => {
    return new todo(x);
}
const todo = mongoose.model<TodoDocument, todoModelInterface>("Todos", TodoSchema);
//const wala ko set kiya hai
//todo.set({ title: "test title", description: "test description" });
export { todo };