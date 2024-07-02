import Button from "./button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Hello React!</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
