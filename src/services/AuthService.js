import {authentication} from "../firebase/config";
import {signInWithEmailAndPassword} from 'firebase/auth'

export const loginUser = async (email, password) => await signInWithEmailAndPassword(authentication, email, password);
