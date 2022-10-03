import React, {Component} from 'react'
import {Link} from 'react-router-dom';

export default class Home extends Component {

render() {
    return (
   <>
      <ul className='homenav'>
        <img src='data:image/png;base64,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' width={125} height={60}></img>
        <p className='font'>Abacus Acadamy</p>
        <Link className="front_link" to="/Login"><button className="button" >Login</button></Link>
        <Link className="front_link" to="/signup"><button className="button">Signup</button></Link>
      </ul>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7aUWhO3-GwoRZgosYx8_EDuHgydRw5zTt6A&usqp=CAU" width={800}></img>
  </>
    )
    
 }
}