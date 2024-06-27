import React,{ useState,useEffect } from "react";
import axios from "axios";

const Eventtable=()=>{
    let [events,setEventdata]=useState([]) //let data=[]
    useEffect(()=>{
        axios.get('http://localhost:5000/getevent').then((response)=>{
            setEventdata(response.data.eventdata);
        });
    },[]);


return(
    <div>
    <br/>
        <h1>Event List</h1>
    <table align="center" border={1}>
    <tr>
        <th>Sno</th>
        <th>Event Name</th>
        <th>Year</th>
        <th>Month</th>
        <th>No of days</th>
        <th colSpan={2}>Action</th>
    </tr>
    {students.map((ele,index,arr)=>{
        return(
            <tr key={index}>
                <td>{index+1}</td>
                <td>{ele.name}</td>
                <td>{ele.rollno}</td>
                <td>{ele.college}</td>
                <td>{ele.branch}</td>
                <td> <button id="ele_id">Edit</button></td>
                <td><button>Delete</button></td>
            </tr>
        )
    })}
    </table>
    </div>
)
}
export default Table