import Login from 'react-easy-login'

const Loginpage=()=>{
    return(
        <Login inputs={['username','email','password']} 
        authFields={['email','password']} uri={'http://localhost:5000/login'} 
           redirectto={'/home'} registerroute={'/'}
        />
    )
}

export default Loginpage;