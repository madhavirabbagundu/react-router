import React from 'react';
import { useParams }  from 'react-router-dom';
function ProductData(){
    const { itemId } = useParams();
    // const [IsLoading,setIsLoading] = React.useState(false);
//    const [isError,setIsError] = React.useState(false);
    const [data,setData] = React.useState({});

    React.useEffect(()=>{
        // setIsLoading(true);
        fetch(`http://localhost:3000/data/${itemId}`)
        .then((res)=>res.json())
        .then((json)=>{
        
        setData(json)
        // setIsError(false);  
    })
        // .finally(() => setIsLoading(false))
        // .catch((err)=> setIsError(err))
    },[itemId])
    // if (IsLoading){
    //     return <h1>Loading...</h1>
    // }
    // if (isError){
    //     return <h1>Something went Wrong....</h1>
    // }



    return <div>{JSON.stringify(data)}</div>
    

   
}
export { ProductData }