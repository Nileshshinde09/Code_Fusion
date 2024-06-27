import React, { useEffect, useState } from 'react';
import { Loading, SmokeComponent, LobbyInputForm } from '@/components'
import { useToast } from '@/components/ui/use-toast';
import EventLogo from "@/assets/Applogo/ninja.png"
import { Input } from '@/components/ui/input';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate()
  const authState = useSelector(state=>state.auth.status)
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  useEffect(()=>{
    if(authState) navigate('/DekodoSuru')
  },[])
  return (
    <>
      {!isLoading ?
        <>
          <div className='w-fit mx-auto -mt-[10rem]'>
            <h1 className="scale-150 inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 border-b-2 text-center pb-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Code Fusion <br /> <h1 className='text-gray-400'>コード融合</h1>
            </h1>
            <h4 className="text-center my-8 scroll-m-20 text-xl text-white font-semibold tracking-tight">
            コードを融合する準備ができました
            </h4>
          </div>
          <div className='w-full scale-125 transition'>
            <LobbyInputForm />
          </div>
        </>
        :
        <Loading className="mx-auto" />
      }
    </>
  );
};

export default Home;
