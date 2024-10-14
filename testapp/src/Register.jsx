import Register from 'react-easy-register'
const Registerpage=()=>{
    return(
        <Register inputs={['username','email','password']}
           authFields={['email','password']} uri={'http://localhost:5000/signup'} 
           redirectto={'/login'}  loginroute={'/login'}
        />
    )
}

export default Registerpage;