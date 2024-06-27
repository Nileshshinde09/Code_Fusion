import React, { useEffect, useState } from 'react'
import { BackgroundAnimation } from '@/components'
import EventLogo from "@/assets/Applogo/ninja.png"
import EventLogo2 from "@/assets/Applogo/ninja-action.png"

import Eventwbg from "@/assets/Applogo/winnerDashboard.jpg"
import Eventnbg from "@/assets/Applogo/bg.jpg"
import Eventfbg from "@/assets/Applogo/finalRoundBG.jpg"
import { useSelector } from 'react-redux'
import { SmokeComponent } from '@/components'
import { useNavigate } from 'react-router-dom'
const AuthLayout = ({ children }) => {
    const {status,complitionState} = useSelector(state => state.auth)
    const [bg, setBg] = useState(Eventnbg)
    const bgStore = useSelector(state => state.background.bg)
    const navigate = useNavigate()
    useEffect(()=>{
        if (!status) navigate('/')
        if(status && complitionState) navigate("/Complition")
    },[])
    useEffect(() => {
        
        if (bgStore === 'nbg') setBg(Eventnbg)
        else if (bgStore === 'wbg') setBg(Eventwbg)
        else if (bgStore === 'fbg') setBg(Eventfbg)
    }, [bgStore])
    return (
        <>
            <div className="bg-black relative w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] h-screen overflow-scroll no-scrollbar">
                <img src={bg} className='absolute bg-cover' />
                <div className="sm:block my-auto">
                    <div className="flex justify-center items-center absolute mx-10 mt-[13rem]">
                        <h2 className="text-gray-400 scale-150 absolute  text-center scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                            食べる睡眠コード繰り返し
                        </h2>
                    </div>
                    {bgStore === 'fbg' ?
                        <img className='w-auto scale-125 mx-auto drop-shadow-2xl shadow-black' src={EventLogo2} />
                        :

                        <SmokeComponent>
                            <img className='w-1/2 mx-auto drop-shadow-2xl shadow-black' src={EventLogo} />
                        </SmokeComponent>
                    }

                </div>
                <div className="flex items-center justify-center py-12  sm:drop-shadow-2xl">
                    <div className="mx-auto grid w-[350px] gap-6">
                        <>
                            {children}
                        </>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthLayout