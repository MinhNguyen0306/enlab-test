import React from 'react'
import { useSelector } from "react-redux";
import { RootState } from '../redux/store';
import { Navigate, useLocation } from 'react-router-dom';

interface Props {
    children: React.ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
    const isStart = useSelector((state: RootState) => state.globalStateSlice.isStart);
    const location = useLocation();
    console.log(isStart)

    return (
        <>
            {
                !isStart 
                    ? <Navigate to="/" state={{ from: location }} replace />
                    : children
            }
        </>
    )
}

export default ProtectedRoute
