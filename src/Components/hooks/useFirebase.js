import { useState } from 'react';
import firebaseInit from './../Authintication/FirebaseInit';
import { getAuth, createUserWithEmailAndPassword,updateProfile,signInWithPopup,GoogleAuthProvider ,onAuthStateChanged,signOut ,signInWithEmailAndPassword} from "firebase/auth";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



firebaseInit()
const useFirebase = ()=>{
    const [user,setUser] = useState({})
    const [IsLoading,setIsLoading] = useState(true)
    const [error,setError] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [admin,setAdmin] = useState(false)




    // Ragristation
    const Regristation = (email,password,name,location,navigate)=>{
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('')
                navigate("/")
                // send name to firebaase after createion 
                const newUser = {email,displayName:name}
                setUser(newUser)
                saveUser(email,name,"POST")
                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {  
                  }).catch((error) => {
                  });
            })
            .catch((error) => {
                setError(error.message);
            });
    }
     // state Change 
     useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
              } else {
                setUser({})
              }
          setIsLoading(false)
        });
        return ()=> unSubscribe;
    },[])

      // login 
      const loginUser = (email,password,location,navigate)=>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destinatetion = location?.state?.from || '/'
                navigate(destinatetion)
                setError('')
            })
            .catch((error) => {
                setError(error.message);
        })
        .finally(()=>setIsLoading(false));;
    }
      

     //Logout
     const Logout = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=>setIsLoading(false));;
    }
    // google singIn 
    const googleSingIn = (location,navigate)=>{
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user
                saveUser(user.email,user.displayName,'PUT')
                navigate('/')
                setError('')
            }).catch((error) => {
                setError(error.message);
            });

    } 

    //seve user 
    const saveUser = (email,displayName,medhod)=>{
        const informations = {email,displayName}
        console.log(informations)
        fetch('https://protected-falls-24199.herokuapp.com/user',{
            method:medhod,
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(informations)
        })
        .then()
    }

    useEffect(()=>{
        fetch(`https://protected-falls-24199.herokuapp.com/user/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[user.email])


    return {
        user,
        Regristation,
        loginUser,
        IsLoading,
        Logout,
        error,
        googleSingIn,
        admin
    }
}
export default useFirebase