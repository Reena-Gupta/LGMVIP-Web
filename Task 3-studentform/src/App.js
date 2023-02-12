import React, {useState} from 'react';
import './App.css';
import Info from './Info';

function App() {
  const [infodata , setinfodata] = useState({
    name:"",
    email:"",
    website:"",
    image:"",
    gender:"",
    skills:"",
 });

 const [data , setdata] = useState([]);
 const clear =(e)=>{
 
  setinfodata({
    name:"",
    email:"",
    website:"",
    image:"",
    gender:"",
    skills:"",
 });

 }
const handleSubmit =(e)=>{
  e.preventDefault();
};
const handle = (e) =>{
  const {name,value} = e.target;
  setinfodata((olddata) =>{
    return {
      ...olddata,
      [name]: value,
    }
  });
 
};
const add=()=>{
setdata((old)=>{
  return [...old, infodata];
})
}
  return (
    <>
    <div className='nav'>
      <h1 className='nav-text'>Student Enrollment Form</h1>
    </div>
    <div className='container'>
          <div className='container2'>
          <form onSubmit={handleSubmit}>  
            <div className='container-label'>
              <h4> USERNAME</h4>  
              <input type="text" name='name' value={infodata.name} onChange={handle}/>  
              </div>
              <div className='container-label'>
              <h4> EMAIL</h4>  
              <input type="email" name='email' value={infodata.email} onChange={handle}/>  
              </div>
              <div className='container-label'>
              <h4> WEBSITE</h4>  
              <input type="text" name='website' value={infodata.web} onChange={handle}/>  
              </div>
              <div className='container-label'>
              <h4> IMAGE LINK</h4>  
              <input type="text" name='image' value={infodata.image} onChange={handle}/>  
              </div>
              <div className='container-gender'>
              <h4 className='gender-label'> GENDER</h4>  
              <div className='genderr'>
                <div>
              <input type="radio" className="gender" name="gender" value="Male" onChange={handle}/>Male  
              </div>
              <div>
              <input type="radio" className="gender" name="gender" value="Female" onChange={handle}/>Female </div>
              </div>
              </div>


              <div className='container-label'>
              <h4> SKILLS</h4>
              <div className='checkbox-box'>
              <input type="checkbox" className="checkbox" name='checkbox' value="HTML" onChange={handle}/>HTML
              </div>
              <div className='checkbox-box'>
              <input type="checkbox" className="checkbox" name='checkbox' value="CSS" onChange={handle}/>CSS
              </div>
              <div className='checkbox-box'>
              <input type="checkbox" className="checkbox"name='checkbox' value="JAVA" onChange={handle}/>JAVA
              </div>
              </div>


              <div className='button'>
              <input type="submit" value="Enroll Student" className='button1' onClick={add}/>    
              <input type="submit" value="Clear" className='button2' onClick={clear}/>
              </div>
            </form>  
          </div>
          <div className='second-phase'>
              <div>
                   <h2>Enrolled Students</h2>
              </div>
              <div>
             <table>  
                <tr>
                    <th>Description</th>
                    <th>Image</th>
                </tr>  
           {data.map((arr, index)=>{
            return <Info key={index} id={index} {...arr} />
           })}
                
       </table>
           </div>
          </div>
    </div>
    </>
  );
}

export default App;