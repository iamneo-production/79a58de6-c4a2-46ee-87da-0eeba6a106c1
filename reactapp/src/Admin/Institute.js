import TextField from '@mui/material/TextField';
import AdminNavbar from './AdminNavbar';
import axios from 'axios';
import React from 'react';
import {Table} from 'react-bootstrap';

function Institute() {
    const initialData = {institutename: "", adderss: "" };
    const [values, setValues] = React.useState(initialData);
    const [data,setState]=React.useState({
        list:null
    });
    const [display,setDisplay]=React.useState({
        visible:null
    });
    const handleFormInputs = (name, value) => {

        setValues({

            ...values,

            [name]: value

        });
    }
    React.useEffect( ()=>{
getData();
    },[]

    );

const getData=()=>{
    fetch("https://8080-badfcdacefbccacffcbcfcaeccfaecbcfbbaf.examlyiopb.examly.io/institute/getAll").then((response)=>{
    response.json().then((result)=>{
        setState({
            list:result
        })
    })
})
}

    const saveInstitute =()=>{
        console.log(values);
       
        axios.post('https://8080-badfcdacefbccacffcbcfcaeccfaecbcfbbaf.examlyiopb.examly.io/institute/saveinstitute',values).then((res)=>{
            console.log(res.data);
            alert("Institute added successfully!!");
            
        })
    }

    const deleteInstitute =(id)=>
    {
      fetch("https://8080-badfcdacefbccacffcbcfcaeccfaecbcfbbaf.examlyiopb.examly.io/institute/"+id,{
        method: "DELETE",
      }).then(()=>{
        alert("Subject deleted successfully");
        getData();
      })
    }

    const addInstitute=()=>{
        setDisplay({
            visible: "show"
        })
    }
    return (
    <>
    <AdminNavbar/><br/><br/>
    {data.list?
    <Table className="instituteTable">
        <thead>
            <tr>
            <th>Institute ID</th>
            <th>Institute Name</th>
            <th>Address</th>
            <th>Actions</th>
        </tr>
        </thead>
{
    data.list.map((item,i)=>
    <tbody>
    <tr>
        <td>{item.id}</td>
        <td>{item.institutename}</td>
        <td>{item.address}</td>
        <td>
            <button className="btn" onClick={()=>{if(window.confirm('Are you sure you want to delete this?')) deleteInstitute(item.id)}}>Delete</button>
        </td>
    </tr>
    </tbody>
    )
}
    </Table>
    :
    <p>Loading...</p>
}
<br/>
    <div>
        <button className="button" onClick={addInstitute}>Add Institute</button>
    </div>
<div className='addBox' id={display.visible}>
<div style={{marginTop : 20,padding : 20,backgroundColor : "white",width : "30%",display : "flex",flexDirection :"column",margin : "auto",alignItems : "center",borderRadius : 10,boxShadow: '2px 4px rgba(00,00,00,0.5)',}}>
    <form className="addInstituteForm">
    <TextField id="outlined-basic" label="Institute Name" variant="outlined" onChange={(e) => { handleFormInputs('institutename', e.target.value) }} /><br></br>
    <br/><br/>
    <TextField id="outlined-basic" label="adress" variant="outlined" onChange={(e) => { handleFormInputs('address', e.target.value) }} /><br></br>
    <br/><br/>
    <button className='button' onClick={saveInstitute}>Add Institute</button>
    </form>
    </div>
    </div>
    </>
    );
}
export default Institute;