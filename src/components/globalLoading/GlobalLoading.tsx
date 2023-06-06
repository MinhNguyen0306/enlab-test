import React from 'react';
import { useSelector } from "react-redux";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "./GlobalLoading.scss";
import { RootState } from '../../redux/store';


const GlobalLoading = () => {
    const globalLoading = useSelector((state: RootState) => state.globalStateSlice.globalLoading);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    React.useEffect(() => {
        if(globalLoading) {
            setIsLoading(true);
            document.body.style.overflow = 'hidden'
        } else {
            setTimeout(() => {
                setIsLoading(false);
                document.body.style.overflow = 'unset'
            }, 1000)
        }
    }, [globalLoading])

    return (
        <>
            {
                isLoading ? (
                    <div className='global-loading'>
                        <div className='global-loading__content'>
                            <AiOutlineLoading3Quarters className="global-loading__loading" />
                            <span>Loading...</span>
                        </div>
                    </div>
                ) : null 
            }
        </>
    )
}

export default GlobalLoading
