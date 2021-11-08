
import './App.css';
import Button from "./components/ui/Button";
import ButtonSecondary from "./components/ui/ButtonSecondary";
import Services from "./components/services/Services";

function App() {
  return (
    <div className="App">
        <Button >Click me here</Button>
        <button className='my-button'>New button</button>
        <ButtonSecondary />
        <Services />

    </div>
  );
}

export default App;
