import './App.css'
import Alert from "./components/Alert.jsx";

function App() {

  return (
      <>
       <Alert text="what is love?" type="primary" />
       <Alert text="what is love?" type="secondary" />
       <Alert text="what is love?" type="success" />
       <Alert text="what is love?" type="warning" />
       <Alert text="what is love?" type="danger" />
       <Alert text="what is love?" type="info" />
       <Alert text="what is love?" type="light" />
       <Alert text="what is love?" type="dark" />
      </>
  )
}

export default App
