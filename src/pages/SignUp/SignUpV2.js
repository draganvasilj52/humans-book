import React from 'react'
import { useState } from 'react'
import { signupUser } from '../../services/AuthService'
import { useDispatch } from 'react-redux'
import { logUser } from '../../features/dataSlice'
import { authentication } from '../../firebase/config'
import { updateProfile } from 'firebase/auth'
import { setDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { doc } from 'firebase/firestore'

const SignUpV2 = ({ createNewAccount, setCreateNewAccount }) => {
  const [enterName, setEnterName] = useState('')
  const [enterEmail, setEnterEmail] = useState('')
  const [enterPassword, setEnterPassword] = useState('')
  const [error, setError] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (enterPassword === '' || enterEmail === '') {
        setError('Enter Credentials')
        return
      }
      const newUser = await signupUser(enterEmail, enterPassword)
      await updateProfile(authentication.currentUser, {
        displayName: enterName,
        photoURL:
          'https://images.unsplash.com/photo-1542309667-2a115d1f54c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80',
      })

      const userCredentials = { ...newUser.user }

      const dispatchedData = {
        email: userCredentials.email,
        photoURL: userCredentials.photoURL,
        id: userCredentials.uid,
        displayName: userCredentials.displayName,
        posts: [],
      }

      dispatch(logUser(dispatchedData))
      await setDoc(doc(db, 'users', `${userCredentials.uid}`), dispatchedData)
    } catch (error) {
      setError('Invalid Credentials')
    }
  }

  const handleNameInput = (e) => {
    if (e.target.value !== '') {
      setError('')
    }
    setEnterName(e.target.value)
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
    <div
      // id="authentication-modal"
      //  tabIndex="-1"
      //   aria-hidden="true"
      className={` ${
        createNewAccount ? '' : 'hidden'
      } bg-opacity-50 bg-white flex items-center justify-center overflow-y-auto overflow-x-hidden fixed top-0 bottom-8 right-0 left-0 z-50 w-full md:inset-0`}
    >
      <div className="relative p-4 w-full max-w-md  md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            onClick={() => setCreateNewAccount(false)}
            type="button"
            className=" absolute top-1 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            //  data-modal-toggle="authentication-modal"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="py-2 px-6 lg:px-8 ">
            <h3 className=" text-xl font-medium text-gray-900 dark:text-white">
              Sign Up
            </h3>
            <p className="pb-3">It’s quick and easy.</p>

            <form onSubmit={handleSubmit} className="space-y-6 " action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter first name"
                  // required
                  value={enterName}
                  onChange={handleNameInput}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter e-mail"
                  // required
                  value={enterEmail}
                  onChange={handleEmailInput}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  //  required
                  value={enterPassword}
                  onChange={handlePasswordInput}
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign Up
              </button>
              {error && <p className="text-red-500 text-center">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpV2
