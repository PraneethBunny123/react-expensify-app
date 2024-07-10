import { auth, signInWithPopup, signOut, googleAuthProvider } from "../firebase/firebase";

export const startLogin = () => {
    return () => {
        return signInWithPopup(auth, googleAuthProvider)
    }
}


export const startLogout = () => {
    return () => {
        return signOut(auth)
    }
}

export const login = (uid) => ({
    type: 'LOGIN',
    uid
})

export const logout = () => ({
    type: 'LOGOUT'
})