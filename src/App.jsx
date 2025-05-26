import 'bootstrap/dist/css/bootstrap.min.css';
import Progress from "./components/Progress.jsx";

function App() {

  return (

      <div className="App">
        <Progress percentage={100}/>
        <Progress percentage={40}/>
      </div>

  )
}

export default App
