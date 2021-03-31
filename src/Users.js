import React, { useEffect, useState } from "react";
const Users =(props)=>{

    useEffect( ()=>{
     
        setUserDataArray(props.usersData);
    
    },[props.usersData])

    const [userDataArray,setUserDataArray]=useState([])
                                                                        //  console.log(props.usersData);
    return(
        <div>
            <h1>Data transfer from parent to child component</h1>
            {
                userDataArray.map((object,index)=>{
                 return(
                  <div>
                     <p>{object.name} , {object.email}</p>
                     </div>
               
                 )
                })
            }
        </div>
    )
}
export default Users;