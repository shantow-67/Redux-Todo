import CreateTodo from "../components/CreateTodo";
import TodoList from "../components/TodoList";


const TodoPage = () => {
    return (
        <div className="container my-5 ">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header h1 bg-warning bg-gradient text-center">Redux Todo</div>
                        <div className="card-body">
                            <CreateTodo />
                            <TodoList/>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoPage;