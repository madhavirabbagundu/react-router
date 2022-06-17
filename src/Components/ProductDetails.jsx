import React from 'react'
import { Link } from 'react-router-dom';
function ProductDetails(){
    const [Product,setProduct] = React.useState([])


    React.useEffect(()=>{
        fetch(`http://localhost:3000/data`)
        .then((res)=>res.json())
        .then((json)=>setProduct(json))
        .catch((err)=>console.log(err))
    },[])
    console.log(Product)
    return (
        <>
        <h1>Product Details</h1>
        <div className = "Table">
          <div>
                <h4>Name</h4>
                <h4>Price</h4>
                <h4> More Details</h4>
            </div>
        
          
             {Product.map((item)=>(
        
            <div key = {item.id}>
                
                 <p>{item.name}</p>
                <p>{item.price}</p>
                {/* <p>{item.id}</p> */}
                <Link to = {`/details/${item.id}`}>MoreDeta...</Link>
            </div>
            ))} 
        </div>
        {/* <h2>This is Details Page</h2> */}
        </>
    )
}
export { ProductDetails }