import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, NavLink } from 'react-router-dom'
import { login } from '../feature/AuthContext'
import { useDispatch,useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
  const {isAuthenticated,userID} = useSelector(store=>store.auth)
  console.log(userID)

  console.log(isAuthenticated)
  const notify = () => toast("Wow so easy!",{
    type:"success"
  });
  const dispatch = useDispatch();
  const [userInput,setUserInput] = useState({
    email:"",
    password:""
  })
  const [warning,setWarning] = useState(false)
  const onChangeHandler = (e) =>{
    setWarning(false)
    const {name,value} = e.target;
    console.log({[name]:value})
    setUserInput({...userInput,[name]:value})
    console.log(userInput)
  }
const onSubmitHandler = async(e) =>{
  e.preventDefault();
    notify()
  console.log(userInput)
  const {email,password} = userInput
  if(!email || !password){
     return setWarning(true)
  }
  const fetchingData = async() =>{
    try {
      const resp = await axios.post("http://localhost:5000/api/v1/auth/login",userInput)
      dispatch(login(resp.data))
      const {token ,userID} = resp.data
      localStorage.setItem("token",token)
      localStorage.setItem("userID",userID)
    } catch (error) {
      console.log(error)
    }
   }
  fetchingData()
}
useEffect(()=>{
  if(isAuthenticated){
    return navigate("/")
  }
},[isAuthenticated])
  return (
      <section id="loginHeader" className="container-fluid d-flex flex-column card w-75  rounded-2 my-5 p-md-4" style={{maxWidth: "min-content"}}>
        <header className="d-flex justify-content-center flex-column ">
            <div className="head d-flex justify-content-center p-2">
                <h3 className="py-2 " style={{color: "#1877F2"}}>Login</h3>
            </div>
            <div className="justify-content-center d-flex m-2">
                <img src="https://cdn.pixabay.com/photo/2017/03/21/02/00/user-2160923_640.png" alt="login" height="150" width="150" className="img-fluid rounded-2  "/>
            </div>
        </header>
        <form onSubmit={onSubmitHandler} id="onSubmitting" action="" className="d-flex flex-column justify-content-center align-items-center card-body ">
            <div className="email mb-3 loginButton">
                <p className="m-0 ">E-mail</p>
                <input name='email' className="input" type="text" onChange={onChangeHandler}/>
            </div>
            <div className="password mb-3 loginButton">
                <p className="m-0 ">Password</p>
                <input name='password' className="input"  type="text" onChange={onChangeHandler}/>
            </div>
            <div className="loginButton mt-1 ">
                <button  type="submit" className="btn btn-warning px-3  fs-6 px-5 " >Login</button>
            </div>
        </form>
      {warning && <div className="d-flex justify-content-center align-content-center ">
        <p className='fw-normal text-capitalize text-warning '>Please provide credentials?<NavLink to="/register" >register</NavLink></p>
       </div>}
<ToastContainer />
    </section>
  )
}

export default Login
