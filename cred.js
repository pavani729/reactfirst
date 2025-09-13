import { useState } from "react"
// how to access input value when ever button is clicked 
// function Cred() {
//     const [ins, setIns] = useState("");
//     const [btn, setbtn] = useState("");
//     function Show() {
//         setbtn(ins);
//         setIns("");

//     }
//     return (
//         <div>
//             <input placeholder="Type Something..." value={ins} onChange={(e) => setIns(e.target.value)} />
//             <button style={{ marginLeft: '5px' }} onClick={Show}>Add</button>
//             <p>{btn}</p>
//         </div>
//     )
// }


// how to display the input values as in list formate by using array😁

function Cred() {
    const [ins, setIns] = useState("");
    const [item, setItem] = useState([]);

    function Show() {
        setItem([...item, ins])
        setIns("");

    }

    const first = { padding: '5px', borderRadius: '5px' }
    const second = { marginLeft: '5px', padding: '5px 10px', borderRadius: '5px', backgroundColor: 'blue', color: 'white' }
    const three = { margin: '5px', padding: '5px 10px', borderRadius: '5px', backgroundColor: 'green', color: 'white' }
    return (
        <div>
            <input style={first} placeholder="Type Something..." value={ins} onChange={(e) => setIns(e.target.value)} />
            <button style={second} onClick={Show}>Add</button>
            <ul style={{ listStyle: 'none' }}>{item.map((item, id) => <li key={item.id}>{item} {id}<button style={three} >delete</button></li>)} </ul>

        </div>
    )
}

export { Cred }