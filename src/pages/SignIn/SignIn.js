import { loginUser } from '../../services/AuthService'
import { useState } from 'react'
import { logUser } from '../../features/dataSlice'
import { useDispatch } from 'react-redux'
import SignUpV2 from './../SignUp/SignUpV2'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [createNewAccount, setCreateNewAccount] = useState(false)
  const [error, setError] = useState('')

  const dispatch = useDispatch()

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      if (password === '' || email === '') {
        setError('Enter Credentials')
        return
      }
      const user = await loginUser(email, password)
      dispatch(logUser(user.user.email))
    } catch (error) {
      setError('Invalid Credentials')
    }
  }

  const handleEmailInput = (e) => {
    if (e.target.value !== '') {
      setError('')
    }
    setEmail(e.target.value)
  }

  const handlePasswordInput = (e) => {
    if (e.target.value !== '') {
      setError('')
    }
    setPassword(e.target.value)
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="font-bold text-blue-600 pb-1">Humans Book</p>

        <div className="w-1/3 flex flex-col p-3.5 rounded bg-white">
          <form
            onSubmit={handleLogin}
            className=" flex flex-col border-b border-solid pb-4 space-y-3"
          >
            <input
              className="border border-solid rounded p-2.5"
              onChange={handleEmailInput}
              value={email}
              placeholder="E-mail adress"
              type="email"
            />

            <input
              className="border border-solid rounded p-2.5"
              onChange={handlePasswordInput}
              value={password}
              placeholder="Password"
              type="password"
            />
            <button
              type="submit"
              className=" bg-blue-600 font-bold text-white px-4 py-2 rounded"
              onClick={handleLogin}
            >
              Log in
            </button>
            {error && <p className="text-red-500 text-center">{error}</p>}
          </form>
          <div
            onClick={() => setCreateNewAccount(true)}
            className="font-bold bg-green-500 text-white p-2 text-center rounded mx-8 mt-5 mb-2 cursor-pointer"
          >
            Create New Account
          </div>
        </div>
      </div>
      <SignUpV2
        createNewAccount={createNewAccount}
        setCreateNewAccount={setCreateNewAccount}
      />
    </>
  )
}

export default SignIn
