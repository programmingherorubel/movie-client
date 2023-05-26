import React from 'react';
import useAuth from './../../hooks/Context/useAuth';
import { useLocation, Navigate } from 'react-router-dom';

const RequiredRoute = ({children,...rest}) => {
    const {user,IsLoading} = useAuth()
    let location = useLocation()

    if(IsLoading){
        return <div style={{textAlign:'center'}}><div class="spinner-border text-warning" role="status"></div></div>
    };

        if(user.email){
            return children;
        }
        return <Navigate to="/login" state={{from:location}} />
};

export default RequiredRoute;