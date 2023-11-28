
import './App.css';
import { Addtodo } from './component/Addtodo';
import { AppName } from './component/AppName';
import { DeleteTodo } from './component/DeleteTodo';
function App() {
  return (
    <center className='todo-container'>
        <AppName/>
        <Addtodo/>
        <DeleteTodo className="item-container" props="Buy Milk"/>
        <DeleteTodo  className="item-container" props="Go To College"/>
  
    </center>
  );
}

export default App;
