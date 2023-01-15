import { useState }  from 'react';
import { provider,auth} from '../../firebase/FireBase-config';


import {signInWithPopup} from 'firebase/auth';
import {useNavigate,Link} from 'react-router-dom';
import './style.css';



function Login({setIsAuth}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    let navigate = useNavigate()

    const signInWithGoogle = ()=>{
        signInWithPopup(auth, provider).then ((result) =>{
            localStorage.setItem("isAuth", true)
            setIsAuth(true)
            navigate('/');

        })

    };
  return (
    <div className='loginPage'>

        <div className='login'>
          <div className='login__container'>
            <button className='login-with-google-btn' onClick={signInWithGoogle}>
              Login with Google
            </button>  
          </div>
        </div>
    </div>
  )
}

export default Login;