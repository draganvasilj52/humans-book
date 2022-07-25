import { authentication } from '../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react'

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(authentication.currentUser)
  onAuthStateChanged(authentication, (user) => {
    setCurrentUser(user)
  })

  return currentUser
}

export default useCurrentUser
