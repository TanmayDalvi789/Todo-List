// import { useState, useEffect } from 'react'
// import Navbar from './components/Navbar'
// import { v4 as uuidv4 } from 'uuid';
// import { FaEdit } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
//  // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'


// function App() {
  
//   const [todo,setTodo] = useState("")
//   const [todos,setTodos] =useState([])
//   const [ShowFinished,setShowFinished] = useState()

//   useEffect(() => {
//     let todoString = localStorage.getItem("todos")
//     if(todoString){      
//       let todos = JSON.parse(todoString);
  
//     setTodos(todos)
//  }
//   }, []);
  

//   const saveTols   =()=>{
//     localStorage.setItem("todos",JSON.stringify(todos))
//   }
  
//   const toggleFinished=()=>{
//     setShowFinished(!ShowFinished)


//   }


//   const handleEdit = (e, id) => {
//     let t = todos.filter(i => i.id === id);
//     setTodo(t[0].todo);
    
//     let newTodos = todos.filter(item => {
//       return item.id !== id;
//     });
//     setTodos(newTodos);
//     saveTols()
//   }


//   const handleDelete =(e,id)=>{
   
//     let newTodos  = todos.filter(item=>{
//       return item.id!==id
//     });
//     setTodos(newTodos)
//     saveTols()
 


//   }
//   const handleAdd=()=>{
//      setTodos([...todos,{id:uuidv4(), todo,isCompleted:false}])
//      setTodo("")   //Resets the todo state to an empty string, which clears the input field.
    

//   }
//   const handleChange=(e)=>{
//     // setTodos([...todos,{todo,isCompleted:false}])
//     setTodo(e.target.value)



//   }

//   const handleCheckBox =(e)=>{
//     let id=e.target.name;
 
//     let index= todos.findIndex(item=>{
//       return item.id ===id;
//     })
   
//     let newTodos= [...todos]
//     newTodos[index].isCompleted = !newTodos[index].isCompleted;
//     setTodos(newTodos)
//   }
  

//   return (
//     <>
//       <Navbar/>
//       <div className="md:container md:mx-auto my-5 p-5 rounded-xl bg-violet-300 min-h-[70vh] md:w-1/2">
//       <h1 className='font-bold text-xl text-center'>itask Manage your Todo at One place</h1>
//         <div className="addtodo my-5 flex flex-col gap-4">
//           <h2 className='text-lg font-bold'>Add a todo</h2>
//           <div className='flex'>
//           <input onChange={handleChange} value={todo} type="text" className='w-full rounded-lg px-5 p-2' />
//           <button onClick={handleAdd} disabled={todo.length<=3} className='bg-violet-800 disabled:bg-violet-700 hover:bg-violet-950 p-2 text-sm font-bold py-1 text-white rounded-xl mx-6'>Save</button>
//           </div>
//         </div>
//         <input className='my-4' onChange={toggleFinished} type="checkbox" checked={ShowFinished}/>ShowFinished
       
//           <h2 className='text-xl font-bold'>todos</h2>
//           <div className="todos">
//             {todos.length===0 && <div className='m-5'>No Todos to display</div>
            
//             }
//             {todos.map(item=>{

           
//           return (ShowFinished || !item.isCompleted) && <div key={item.id} className="todo flex md:w-[1/2] justify-between">
//             <div className='flex gap-5'>
//             <input name={item.id} onChange={handleCheckBox} type="checkbox" checked={item.isCompleted}   />
//               <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
//               </div>
//               <div className="buttons flex h-full">
//                 <button onClick={(e)=>handleEdit(e,item.id)} className='bg-violet-800 hover:bg-violet-950 p-2 text-sm font-bold py-1 text-white rounded-xl mx-1'>FaEdit </button>
//                 <button onClick={(e)=>handleDelete(e,item.id)} className='bg-violet-800 hover:bg-violet-950 p-2 text-sm font-bold py-1 text-white rounded-xl mx-1'>MdDelete</button>
//               </div>
//             </div>
//              })}
            
//           </div>


//       </div>
      
//     </>
//   )
// }

// export default App


import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(false);

  useEffect(() => {
    const todoString = localStorage.getItem("todos");
    if (todoString) {
      const storedTodos = JSON.parse(todoString);
      setTodos(storedTodos);
    }
  }, []);

  const saveTols = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const toggleFinished = () => {
    setShowFinished(!showFinished);
  };

  const handleEdit = (id) => {
    const t = todos.find(i => i.id === id);
    setTodo(t.todo);
    const newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
    saveTols();
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
    saveTols();
  };

  const handleAdd = () => {
    if (todo.trim().length > 3) {
      setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
      setTodo("");
      saveTols();
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckBox = (e) => {
    const id = e.target.name;
    const index = todos.findIndex(item => item.id === id);
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveTols();
  };

  return (
    <>
      <Navbar />
      <div className="md:container md:mx-auto my-8 p-6 rounded-xl bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 min-h-[70vh] md:w-1/2 shadow-xl">
        <h1 className="font-extrabold text-2xl text-center text-purple-900 mb-6">
          Manage your Todos in One Place
        </h1>

        {/* Add Todo Section */}
        <div className="addtodo flex flex-col gap-4 mb-6">
          <h2 className="text-xl font-semibold text-purple-900">Add a Todo</h2>
          <div className="flex items-center gap-3">
            <input 
              onChange={handleChange} 
              value={todo} 
              type="text" 
              placeholder="Enter your task" 
              className="w-full rounded-lg px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600" 
            />
            <button 
              onClick={handleAdd} 
              disabled={todo.length <= 3} 
              className="bg-purple-800 disabled:bg-purple-700 hover:bg-purple-900 px-4 py-2 text-sm font-bold text-white rounded-xl shadow-md transition-all"
            >
              Save
            </button>
          </div>
        </div>

        {/* Show Finished Checkbox */}
        <div className="flex items-center mb-4">
          <input 
            className="mr-2" 
            onChange={toggleFinished} 
            type="checkbox" 
            checked={showFinished} 
          />
          <span className="text-purple-900 font-medium">Show Finished</span>
        </div>

        {/* Todos List */}
        <h2 className="text-xl font-bold text-purple-900">Todos</h2>
        <div className="todos">
          {todos.length === 0 && (
            <div className="my-4 text-purple-900 text-lg">No Todos to display</div>
          )}
          {todos.map(item => (
            (showFinished || !item.isCompleted) && (
              <div key={item.id} className="todo flex items-center justify-between bg-white p-4 my-2 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <input 
                    name={item.id} 
                    onChange={handleCheckBox} 
                    type="checkbox" 
                    checked={item.isCompleted} 
                  />
                  <span className={item.isCompleted ? "line-through text-gray-500" : "text-black"}>
                    {item.todo}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleEdit(item.id)} 
                    className="bg-purple-700 hover:bg-purple-900 text-white px-3 py-1 rounded-full flex items-center transition-all"
                  >
                    <FaEdit />
                  </button>
                  <button 
                    onClick={() => handleDelete(item.id)} 
                    className="bg-red-600 hover:bg-red-800 text-white px-3 py-1 rounded-full flex items-center transition-all"
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

