import {loginUser} from "../../services/AuthService";
import {useState} from 'react'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')


    const handleLogin = async () => {
        const user = await loginUser(email, password)
        console.log(user)
    }


    return <div className='flex justify-center items-center'>
        <div className='w-1/3 h-72 flex flex-col justify-center items-center  mt-10 bg-blue-100'>
            <h2>Sign IN</h2>
            <div className='mt-4 flex flex-col'>
                <label>Email</label>
                <input onChange={e => setEmail(e.target.value)} value={email}/>
                <label className='mt-2'>Password</label>
                <input onChange={e => setPassword(e.target.value)} value={password}/>
            </div>
            <button className='mt-2 bg-amber-600 px-4 py-2 w-1/3' onClick={handleLogin}>Log in</button>
        </div>
    </div>
}

export default SignIn;