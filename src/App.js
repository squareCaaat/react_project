import Button from "./button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  // const [counter, setValue] = useState(0);
  // const [keyword, setKeyword] = useState("");
  // const onClick = () => setValue((prev)=>prev+1);
  // const onChange = (event) => setKeyword(event.target.value);
  
  // useEffect(() => {console.log("only once");}, []);
  // useEffect(()=>{
  //   if(keyword !== "" && keyword.length > 5){
  //     console.log(keyword, "Searched");
  //   }
  // }, [keyword]);
  // useEffect(() => {console.log("counter changed");}, [counter]);
  // return (
  //   <div>
  //     <input value={keyword} onChange={onChange} type="text" placeholder="Search" />
  //     {/* <h1 className={styles.title}>Hello React!</h1> */}
  //     <p>{counter}</p>
  //     {/* <Button text={"Continue"} /> */}
  //     <button onClick={onClick}>Click me</button>
  //   </div>
  // );
  // const [showing, setShowing] = useState(false);
  // const onClick = ()=> setShowing(prev=>!prev);
  // return (
  //   <div>
  //     {showing? <Hello /> : null}
  //     <button onClick={onClick}>{showing? "Hide":"Show"}</button>
  //   </div>
  // );
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value); 
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    setToDos(currentArray => [toDo, ...currentArray]);
    setToDo("");
  }
  return (
    <div>
      <h1>My ToDo List ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input value={toDo} onChange={onChange} type="text" placeholder="Write your ToDo" />
        <button>Add ToDo</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, idx)=> <li key={idx}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
