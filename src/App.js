import './index.css';
import HelloWorld from "./components/HelloWorld";
import CounterExample from "./components/CounterExample";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
        <Header/>
        <HelloWorld name="Props User" test="I'm a test"/>
        <CounterExample/>
        <Footer/>
    </div>
  );
}

export default App;
