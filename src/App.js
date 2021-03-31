import React , {useState,useEffect} from "react";
import Users from './Users';
import './App.css'
//state is an object and is a collection of variables
//spread operators ...
//state -- can be updated , can only be used in a single component
//props -- cannot be updated , can be used in the whole project , used to transfer data between components --> parent to child components

const About = () =>{
   // console.log(props.location.data)
      useEffect( ()=>{
       // saveDatafromprops(props.location.data)
        getUsers();
    } , [])

    const getUsers=()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json()) 
        .then(data => {

            saveUserData(data);
            setUsers(data);
            console.log(data);

        })
        .catch(err=> console.log(err));
    }
    const [ allUserData , saveUserData ] = useState([]);
    const [usersData,setUsers]=useState([]);
    return(
        <>
           {/* <Bar object={object}/> */}
           <Users usersData={usersData}/>
           <h1>This is api Data</h1>
         
            <table>
                <th>Name</th>
                   <th>Email</th>
                    <th>Username</th>
                   
                <tbody>
                    {
                        allUserData.map( (value,index)=>{

                            return(
                                <tr>
                                <td>
                                {value.name}
                                </td> 
                                <td>
                                {value.email}
                                </td> 
                                <td>
                                {value.username}
                                </td> 
                                 </tr>
                            )

                        } )
                    }

                </tbody>
            </table>
            
        </>
    )
}

export default About;
