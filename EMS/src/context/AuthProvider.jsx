import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        // Check if data is already in localStorage
        const { employees } = getLocalStorage()
        if (!employees || employees.length === 0) {
            setLocalStorage()  // Initialize localStorage only if it's empty
        } else {
            setUserData(employees)  // Set userData from localStorage if present
        }
    }, [])
    
    return (
        <AuthContext.Provider value={[userData, setUserData]}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
