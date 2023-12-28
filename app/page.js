"use client"

import React from 'react'

const page = () => {
  return (
    <>
      <h1>Deployment</h1>
    </>
  )
}

export default page
















// interact using a API and call the details
// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import Link from 'next/link';

// const page = () => {
//   const [user,setUser]=useState([])
//   const getUsers = async() =>{
//     const res=await axios.get("https://jsonplaceholder.typicode.com/users")
//     const data=res.data
//     setUser(data)
//     console.log(data);
//   }

//   useEffect(()=>{
//     getUsers()
//   },[])

//   return (
//     <>
//       <button className=' bg-green-500 rounded text-white px-5 py-2 '
//       onClick={getUsers}
//       >Button</button>
//       <div className='p-8 bg-slate-100 mt-5'>
//         {user.map((e)=>{
//           return<li>{e.username}<a href={`/${e.id}`}>-----Contact</a></li>
//         })}
//       </div>
//     </>
//   )
// }

// export default page
































// example for reach contact page
// import React from "react";

// const page = () => {
//   return (
//   <>
//     <h1 className='text-2xl font-bold'>this is main page</h1>
//     <a href="/Contact">Contact</a>
//   </>

//   )
  
// }

// export default page;




// example for two way binding for React
// import React, { useState } from "react";

// const page = () => {
//   const [username, setUsername] = useState("");

//   return (
//     <>
//       <form>
//         <h1 className="h-10 bg-cyan-100">enter user name</h1>
//         <input
//           type="text"
//           className="bg-pink-500 border-5"
//           value={username}
//           onChange={(e) => {
//             setUsername(e.target.value);
//             console.log(username);
//           }}
//         />
//       </form>
//     </>
//   );
// };

// export default page;
