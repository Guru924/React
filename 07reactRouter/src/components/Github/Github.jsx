import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/guru924')
    //     .then(response => response.json())
    //     .then(data => setData(data))
    // }, [])
    const data = useLoaderData()
    return (
        <div className="text-center m-4 bg-gray-500 text-white">Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={300}/>
        </div>
    )
}

export default Github

export const githubInfoLoader = async()=>{
    let response = await fetch('https://api.github.com/users/guru924')
    return response.json()
}