import React, {useEffect, useState} from "react";

function App(){
    const [isLoaded, setIsLoaded] = useState(false);
    const [dogPic, setDogPic] = useState("");

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((ret)=>ret.json())
        .then((data)=>{
            setDogPic(data.message)
            setIsLoaded(true)
        })
    }, [])

    if(!isLoaded){
        return <p>Loading...</p>
    }
    else{
        return <img src={dogPic} alt="A Random Dog"/>
    }
}

export default App