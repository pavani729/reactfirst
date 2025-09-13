import "./Learn.css"
import { useState } from "react"

const pavi = [{
    name: "first",
    age: 10,
    color: 'red'
},
{
    name: "second",
    age: 10,
    color: 'rose'
},
{
    name: "third",
    age: 10,
    color: 'blue'
},




]


function Component({ name, age, color }) {
    const open = 12;
    return (

        <>
            {open > 0 ? (
                <div className={`${open > 0 ? 'pavani' : ''}`}>

                    <h1 style={{ color: 'red', fontSize: '20px' }}>hello my name is pavanissssssssssss</h1>
                    <button>{name}{age}{color}</button>
                    {pavi.map((pizza, index) => (<Comp name={pizza.name} age={pizza.age} color={pizza.color} key={index} />))}

                </div>
            ) : (<p>open is not larger than zero</p>)

            }

        </>

    )
}

function Comp(props) {
    const sty = { color: 'green' }
    const [ins, setIns] = useState("")
    const [final, setFinal] = useState("")
    const [items, setItems] = useState([]);
    function show() {
        setItems([...items, ins]);
        setIns("")

    }
    return (
        <>
            <div>
                <h1 style={sty}>hello pavani i am </h1>
                <p className="pavi">hello i am pavani kaadu</p>
                <h1>{props.name}</h1>
                <p>{props.age}</p>
                <p>{props.color}</p>
            </div>

            <input value={ins} onChange={(e) => setIns(e.target.value)} placeholder="type something...." />
            <button onClick={show}>click</button>
            <ul>Result : {items.map((item, index) => (<li key={index}>{item}</li>))}</ul>


        </>
    )
}
export { Component, Comp };
