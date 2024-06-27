import { ComplitionForm, ResultTable } from '@/components'
import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'

const Complition = () => {
    const complition = useSelector((state)=>state.auth.complitionState)
    const [comp, setComp] = useState(false)
    useEffect(()=>{
        if(complition){
            setComp(true)
        }else{
            setComp(false)
        }
    },[complition])
    return (
        <div className='w-full'>
<>
          {!comp?<div className='w-fit mx-auto -mt-[10rem]'>
            <h1 className="scale-150 inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 border-b-2 text-center pb-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Code Fusion <br /> <h1 className='text-gray-400'>コード融合</h1>
            </h1>
            <h4 className="text-center my-8 scroll-m-20 text-xl text-white font-semibold tracking-tight">
            コードを融合する準備ができました
            </h4>
          </div>:<></>}
          <div className='w-full scale-125 transition'>
            {comp?
                <ResultTable/>:
                <ComplitionForm />
            }
          </div>
        </>
           
        </div>
    )
}

export default Complition