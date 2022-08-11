import { useState } from 'react'
import { loginUser } from '../../features/dataSlice'
import { useDispatch } from 'react-redux'
import SignUpV2 from './../SignUp/SignUpV2'

import Footer from '../../containers/Footer'

const SignIn = () => {
  const [enterEmail, setEnterEmail] = useState('')
  const [enterPassword, setEnterPassword] = useState('')
  const [createNewAccount, setCreateNewAccount] = useState(false)
  const [error, setError] = useState('')

  const dispatch = useDispatch()

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      if (enterPassword === '' || enterEmail === '') {
        setError('Enter Credentials')
        return
      }
      const data = { enterEmail, enterPassword }
      dispatch(loginUser(data))
    } catch (error) {
      setError('Invalid Credentials')
    }
  }

  const handleEmailInput = (e) => {
    if (e.target.value !== '') {
      setError('')
    }
    setEnterEmail(e.target.value)
  }

  const handlePasswordInput = (e) => {
    if (e.target.value !== '') {
      setError('')
    }
    setEnterPassword(e.target.value)
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-customBg-100 signInBreakpoint900:pt-20 signInBreakpoint900:pb-28 h-4/5">
        <div className="flex flex-col signInBreakpoint1076:py-8 signInBreakpoint1076:w-980 signInBreakpoint1076:space-x-48 signInBreakpoint1076:mx-auto signInBreakpoint900:flex-row mx-10 pt-5 signInBreakpoint900:pt-0 pb-40 signInBreakpoint900:pb-0 signInBreakpoint900:my-0 signInBreakpoint900:my-5">
          <div className="flex flex-col w-96 mx-auto items-center justify-center signInBreakpoint900:ml-0 signInBreakpoint1076:mx-auto ">
            <p className="font-bold text-center text-blue-600 pb-1 text-5xl text-center pb-5 signInBreakpoint900:pt-8 ">
              humans book
            </p>
            <p className="text-2xl text-center signInBreakpoint1076:text-3xl pb-10">
              Humans Book connects you with other people and makes exchanging
              informations easier.
            </p>
          </div>
          <div>
            <div className="flex flex-col p-3.5 signInBreakpoint900:mr-0 signInBreakpoint1076:mx-auto rounded bg-white h-304 w-400 mx-auto my-0">
              <form
                onSubmit={handleLogin}
                className=" flex flex-col border-b border-solid h-315 pb-4 space-y-3"
              >
                <input
                  className="border border-solid rounded p-2.5"
                  onChange={handleEmailInput}
                  value={enterEmail}
                  placeholder="E-mail adress"
                  type="email"
                />

                <input
                  className="border border-solid rounded p-2.5"
                  onChange={handlePasswordInput}
                  value={enterPassword}
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
                <p className="text-sm text-center text-blue-600 hover:underline">
                  Forgot Password?
                </p>
              </form>
              <div
                onClick={() => setCreateNewAccount(true)}
                className="font-bold bg-green-500 text-white p-2 text-center rounded mx-8 mt-5 mb-2 cursor-pointer"
              >
                Create New Account
              </div>

              <SignUpV2
                createNewAccount={createNewAccount}
                setCreateNewAccount={setCreateNewAccount}
              />
            </div>
            <p className="text-sm text-center pt-10">
              <span className="font-bold ">Make page</span> for a celebrity,
              brand or business.
            </p>
          </div>
        </div>
      </div>
      <Footer className="h-1/5" />
    </div>
  )
}

export default SignIn
