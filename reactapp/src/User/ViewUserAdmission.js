
import UserNavbar from './UserNavbar';
import React from 'react';
import {Table} from 'react-bootstrap';

function ViewUserAdmission() {
    const [data,setState]=React.useState({
        list:null
    });
    React.useEffect( ()=>{
        getData();
            },[]
        
            );

const getData=()=>{
    console.log(localStorage.getItem('User'));
    fetch("https://8080-badfcdacefbccacffcbcfcaeccfaecbcfbbaf.examlyiopb.examly.io/admission/getAll/"+localStorage.getItem('user')).then((response)=>{
    response.json().then((result)=>{
       console.log(result)
       setState({
        list:result
    })
    })
})
}

    

    const deleteCourses =(id)=>
    {
      fetch("https://8080-badfcdacefbccacffcbcfcaeccfaecbcfbbaf.examlyiopb.examly.io/admission/"+id,{
        method: "DELETE",
      }).then(()=>{
        alert("Subject deleted successfully");
        getData();
      })
    }

    return (
    <>
    <UserNavbar/><br/><br/>
    {data.list?
    <Table className="CoursesTable">
        <thead>
            <tr>
            <th>Courses ID</th>
            <th>Courses Name</th>
            <th>Courses Duration</th>
            <th>Institute Name</th>
            <th>Action</th>
        </tr>
        </thead>
{
    data.list.map((item,i)=>
    <tbody>
    <tr>
        <td>{item.id}</td>
        <td>{item.coursesname}</td>
        <td>{item.coursesDuration}</td>
        <td>{item.institutename}</td>
        <td>
            <button>Edit</button>
            <button onClick={()=>{if(window.confirm('Are you sure you want to delete this?')) deleteCourses(item.id)}}>Delete</button>
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
export default ViewUserAdmission;