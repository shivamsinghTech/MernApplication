import React,{useState} from 'react'
import { useHistory } from "react-router-dom";
// import css
import "../Style/Signup.css"
import {NavLink} from 'react-router-dom'
//! import icons
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import WorkSharpIcon from '@material-ui/icons/WorkSharp';
import LockIcon from '@material-ui/icons/Lock';
import TextField  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// ! import images
import Registration from '../Images/Registration.svg'

const Signup=()=>{

    const history = useHistory();
    
    
  

const[data,setData]=useState({
    name:"",
    email:"",
    phone:"",
    work:"",
    password:"",
    cpassword:""
});

const eventt=(event)=>{
   const name=event.target.name;
   const value=event.target.value;

    setData({...data,[name]:value})

console.log(data)
}

const PostData= async (e)=>{
    e.preventDefault();
   console.log(data)
   const{name,email,phone,work,password,cpassword}=data;

   const res=await fetch("/register",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
    name , email, phone, work , password, cpassword})})


    const dataRes=await res.json();
        if(dataRes.status===422 || !dataRes){
            window.alert("please filled the all fields")
        }
        else if(dataRes.status===423 || !dataRes){
            window.alert("confirm Password should matched  password")
        }
        else if(dataRes.status===424 || !dataRes){
            window.alert("User Email already exist")
        }
        

        else(window.alert("registered successfuly"))
        history.push("/login")
}
   
    return(<>
    <div className="imgofreg"  style={{  backgroundImage:`url(${Registration})`,width:"100%"}}>
   <div className="second">
   
        <section className="signup">
         
            <div className="container">
              
                <div className="signup-content   row">
                    <div className="signup-form col-10 offset-3 offset-md-0 col-sm-7">
                        
                        <h3 className="form-title mt-3">Sign up</h3>
                            <form method="POST" className="registration-from mt-5" id="registration-from">


                                <div className="form-group row flex-end mt-2">
                                <div className="col-1 align-self-end">                                  
                                 <PersonIcon/>       
                                        </div>
                                      <div className="col-9">
                                         <TextField onChange={eventt} value={data.name} type="text" name="name" label="Name" id="name" autoComplete="off" 
                                            placeholder="Your Name"  />
                                        </div>
                                        </div>

                                   
                                    
                                  <div  className="form-group row flex-end mt-2">                           
                                  <div className="col-1 align-self-end">
                                               <EmailIcon/>
                                               </div>
                                      <div className="col-9 ">
                                         <TextField onChange={eventt} value={data.email} type="text" name="email" id="email" label="Email" autoComplete="off" 
                                            placeholder="Your Email"/>
                                            </div>
                                        </div>


                                        {/* <TextField onChange={eventt} val={data." id="email" label="email" /> */}


                                        <div  className="form-group row flex-end mt-2">
                                    
                                        <div className="col-1 align-self-end">                                  
                                        < PhoneIcon/>     
                                        </div>
                                      <div className="col-9">
                                         <TextField onChange={eventt} value={data.phone} type="text" name="phone" id="phone" label="Phone" autoComplete="off" 
                                            placeholder="Your phone"/>
                                        </div>
                                        </div>



                                        <div  className="form-group row flex-end mt-2">
                                    
                                    
                                    <div className="col-1 align-self-end">                                  
                                    <WorkSharpIcon/>    
                                        </div>
                                      <div className="col-9">
                                         <TextField onChange={eventt} value={data.work} type="text" name="work" id="work" 
                                         label="Profession"
                                          autoComplete="off" 
                                            placeholder="Your Profession"/>
                                        </div>
                                        </div>


                                        <div  className="form-group row flex-end mt-2">
                                        <div className="col-1 align-self-end">                                  
                                        <LockIcon/>  
                                        </div>
                                      <div className="col-9">
                                         <TextField onChange={eventt} value={data.password} type="password" name="password" id="password"  autoComplete="off" 
                                            placeholder="Your password" label="Password"/>
                                        </div>
                                        </div>


                                        <div  className="form-group row flex-end mt-2">
                                        <div className="col-1 align-self-end">                                  
                                        <LockIcon/>  
                                        </div>
                                      <div className="col-9">
                                         <TextField onChange={eventt} value={data.cpassword} type="password" name="cpassword" id="cpassword" autoComplete="off" 
                                            placeholder="Password" label="Confirm Password"/>
                                        </div>
                                        </div>
                                       < Button onClick={PostData} variant="contained" color="primary"  name="signup" id="signin" className=" mt-2 mb-5">   Submit</Button>                                       
                                      
                                        </form> 
                                       
                                        </div>
                                        
                        
                         <div className="signup-image col-5">
                                        <img src={Registration}  alt="img"/>
                                            <NavLink to="/login" >I am Already Register</NavLink>
                                           

                                            </div>
                    </div>
                    </div>
            </section>

</div>

</div>

    </>)
}
export default Signup;

// undraw.co//illustrations    visit for ui images