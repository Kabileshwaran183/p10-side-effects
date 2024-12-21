import React from "react"
import WindowTracker from "./WindowTracker"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(0)
    const [show, setShow] = React.useState(true)
    
    function toggle() {
        setShow(prevShow => !prevShow)
    }
    
    console.log("Rendered!")
    
    React.useEffect(() => {
        console.log("Effect ran")
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, []) // [] compared to []
    
    return (
        <div>
            <main className="container">
                        <button onClick={toggle}>
                            Toggle WindowTracker
                        </button>
                        {show && <WindowTracker />}
            </main>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}