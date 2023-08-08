import Swal from "sweetalert2";
import store from "../redux/store/store";
import { EditTodo } from "../redux/state/todoSlice";


export function TodoEditAlert(i,item){
  Swal.fire({
      title: 'Update Todo',
      input: "text",
      inputValue: item,
      inputValidator: (value) => {
          if (value) {
              store.dispatch(EditTodo({index:i,task:value}))
          }
      }

})
}