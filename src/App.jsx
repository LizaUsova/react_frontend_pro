import Definitions from "./assets/components/Definitions.jsx";


function App() {
    const definitions = [
        { dt: 'one', dd: 'two', id: 1 },
        { dt: 'another term', dd: 'another description', id: 2 },
    ];

  return (
    <Definitions definitions={definitions}></Definitions>
  )
}

export default App
