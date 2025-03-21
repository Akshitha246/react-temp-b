import "./App7.css"
import { useState } from "react"

export default function App7(){
    const [products, setproducts] = useState([]);
    const[product, setproduct]=useState({});
    const handleSubmit=()=>{
        setproducts([...products, product]);
    }
    return(
        <div className="App-Row">
            <div>
            <h3>Billing Form</h3>
            <p><input type="text" placeholder="Product Name" onChange={(e) => setproduct({ ...product,name: e.target.value})}></input></p>
            <p><input type="number" placeholder="Price" onChange={(e)=> setproduct({ ...product,price: e.target.value})}></input></p>
            <p><input type="number" placeholder="Quantity" onChange={(e)=> setproduct({ ...product,Quantity: e.target.value})}></input></p>
            <p style={{textAlign:"center"}}><button onClick={handleSubmit}>Submit</button></p>
            <p></p>
            </div>
            <div>
                <h4>Items</h4>
                <table border={1}>
                
      {products && products.map((value, index) => <tr>
        <td>{value.name}</td> 
        <td>{value.price}</td> 
        <td>{value.Quantity}</td> 
        <td>{value.price*value.Quantity}</td> 

      </tr>)}
             </table>
            </div>
        </div>
    )
};