import React, { useEffect, useState } from "react";
import { useLoaderData  } from "react-router";

function Github(){
    const data = useLoaderData(); 
    
    // const [data, setData] = useState([]);
    // useEffect( ()=> {
    //     fetch('https://api.github.com/users/mohandwivedi01')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

    return (
        <div className="text-center w-full max-w-3xl mx-auto my-20 bg-cyan-900 shadow-md rounded-md border text-white py-6 px-10">
            <h1 className="text-orange-500 font-semibold text-4xl mb-6">I'm {data.name}</h1>
            <div className="flex flex-wrap md:flex-nowrap items-center">
                {/* Left Side: Profile Image */}
                <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
                    <img
                        className="rounded-full shadow-slate-100 border  object-cover"
                        src={data.avatar_url}
                        alt="Github profile pic"
                    />
                </div>
                {/* Right Side: Other Information */}
                <div className="w-full md:w-2/3 font-serif text-xl text-left md:pl-6 ml-5">
                <ul>
                    <li className="mb-2"><strong>Email:</strong> {data.email ? data.email : "mohan.dwivedi.outlook.com"}</li>
                    <li className="mb-2"><strong>Location:</strong> {data.location}</li>
                    <li className="mb-2"><strong>Company:</strong> {data.company ? data.company : "Freelancer" }</li>
                    <li className="mb-2"><strong>Followers:</strong> {data.followers}</li>
                    <li><strong>Bio:</strong> "{data.bio}"</li>
                </ul>
                </div>
            </div>
    </div>

    )
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch ('https://api.github.com/users/mohandwivedi01')
    return response.json();
}