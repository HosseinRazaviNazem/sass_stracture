import { AddTodoAPI, CheckTodoAPI, DeleteTodoAPI, FilterTodoAPI, GetAllTodosAPI } from 'apis';
import { Button, Input, Loading, Todo } from 'components';
import { Fragment, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "assets/styles/index.scss";
import 'react-toastify/dist/ReactToastify.css';
import HomePage from "./pages/HomePage";
import {AppRouting} from "./routes/index.routes";


function App() {

  const [todoValue, setTodoValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState('');

  const successGetData = () => toast.success("اطلاعات با موفقیت بارگزاری شد");
  const errorToast = () => toast.error("خطایی رخ داده است.");
  const actionTodo = () => toast.success("عملیات با موفقیت انجام شد");

  const getAllData = () => {
    setLoading(true);
    GetAllTodosAPI().then(response => {
      setTodos(response);
      successGetData();
    }).catch(error => {
      errorToast();
    }).finally(() => {
      setLoading(false);
    });
  }



  useEffect(() => {
    getAllData();
  }, [])

  return (
    <div className="App">


      {
        // loading ? <                            Loading type="ripple"/> :
        // <Fragment>
        //   <div className="App__body">
        //     <div className='App__body__search-box'>
        //       <Input holder="todo ..." type="text" value={todoValue} onChnage={
        //         (e) => {setTodoValue(e.target.value);
        //       }} />
        //       <Button text='+' type='warning' Click={() => {
        //         addTodo(todoValue);
        //       }}/>
        //     </div>
        //     <div className='App__body__filter'>
        //       <select value={filterStatus} onChange={(event) => {
        //         filterData(event.target.value);
        //         setFilterStatus(event.target.value);
        //       }}>
        //         <option value="">All</option>
        //         <option value="true">Completed</option>
        //         <option value="false">Uncompleted</option>
        //       </select>
        //     </div>
        //   </div>
        //
        //   <footer className="App__footer">
        //     {
        //       todos.length > 0 ?
        //         todos.map(todo => (
        //           <Todo data={todo} checkTodo={(data) => todoCheker(data)} deleteTodo={(id) => todoDeleter(id)}/>
        //         ))
        //       : "No todos found"
        //     }
        //   </footer>
        // </Fragment>
          <AppRouting/>

      //

      }
    </div>
  );
}

export default App;
