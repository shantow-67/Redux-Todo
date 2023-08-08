import { useRef } from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from "../redux/state/todoSlice";


const CreateTodo = () => {

    const dispatch = useDispatch()
    const taskInput =useRef()

    return (
        <div className="container-fluid">
           <div className="row">  
            <div className="col-md-10">
                <input ref={taskInput}  type="text" placeholder="Task name" className="form-control"/>
            </div>
            <div className="col-md-2">
                <button className="btn btn-primary" onClick={()=>dispatch(AddTodo(taskInput.current.value))}>Add todo</button>
            </div>
           </div> 
        </div>
    );
};

export default CreateTodo;