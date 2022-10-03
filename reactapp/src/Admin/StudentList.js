
import AdminNavbar from './AdminNavbar';
import React from 'react';
import {Table} from 'react-bootstrap';

function StudentList() {
    const [data,setState]=React.useState({
        list:null
    });
    React.useEffect( ()=>{
        getData();
            },[]
        
            );

            const getData=()=>{
                fetch("https://8080-badfcdacefbccacffcbcfcaeccfaecbcfbbaf.examlyiopb.examly.io/api/getAll/").then((response)=>{
                response.json().then((result)=>{
                    console.log(result)
                    setState({
                        list:result
                    })
                })
            })
            }

    

    const deleteUser =(id)=>
    {
      fetch("https://8080-badfcdacefbccacffcbcfcaeccfaecbcfbbaf.examlyiopb.examly.io/api/"+id,{
        method: "DELETE",
      }).then(()=>{
        alert("User deleted successfully");
        getData();
      })
    }

    return (
    <>
    <AdminNavbar/><br/><br/>
    {data.list?
    <Table className="CoursesTable">
        <thead>
            <tr>
            <th>ID</th>
            <th>email</th>
            <th>password</th>
            <th>username</th>
            <th>usertype</th>
            <th>Action</th>
        </tr>
        </thead>
{
    data.list.map((item,i)=>
    <tbody>
    <tr>
        <td>{item.id}</td>
        <td>{item.email}</td>
        <td>{item.password}</td>
        <td>{item.username}</td>
        <td>{item.usertype}</td>
        <td>
            <button className="btn" onClick={()=>{if(window.confirm('Are you sure you want to delete this?')) deleteUser(item.id)}}>Delete</button>
        </td>
    </tr>
    </tbody>
    )
}
    </Table>
    :
    <p>Loading...</p>
}

    
    </>
    );
}
export default StudentList;