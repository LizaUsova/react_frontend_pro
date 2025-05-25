import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./components/Card.jsx";

function App() {

  return (
      <div className="container">
        <Card title="Only Title" />
        <Card text="Only text here" />
        <Card title="Title and text" text="This is both props." />
      </div>
  )
}

export default App
