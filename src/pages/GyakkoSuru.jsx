
import React, { useEffect, useState } from 'react';
import { Loading, SmokeComponent, LobbyInputForm, DekodosuruDialog, HintDialog, MitDialog } from '@/components'
import { useToast } from '@/components/ui/use-toast';
import NinjaStart from "@/assets/Applogo/ninja-star.png"
import Meme from "@/assets/Applogo/meme.jpg"
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { ArrowLeftIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { PAGE_LIST, TASK_ENUM } from '@/constants';
import { useDispatch } from 'react-redux';
import { setBG } from '@/app/slices/bgSlice';
import audio from "@/assets/audio/audio.mp3"
import audiogif from "@/assets/Applogo/audio.gif"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import HintImg from "@/assets/Applogo/hint.png";
import { StoreState } from '@/services';
const GyakkoSuru = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const { toast } = useToast()
    const [isLoading, setIsLoading] = useState(false)
    const [teamName, setTeamName] = useState('')
    const [Prev, setPrev] = useState(false)
    const [Next, setNext] = useState(false)
    const nextHandler = () => {
        navigate('/' + PAGE_LIST[PAGE_LIST.indexOf(pathname.split('/')[1]) + 1])
    }
    const prevHandler = () => {
        navigate('/' + PAGE_LIST[PAGE_LIST.indexOf(pathname.split('/')[1]) - 1])
    }
    useEffect(() => {
        dispatch(setBG())
        if(StoreState.getTaskComplition(TASK_ENUM.TASK_5)){

            if(StoreState.getTaskComplition(TASK_ENUM.TASK_5).status !== 'true'){
                StoreState.tasks(TASK_ENUM.TASK_5,{
                    status:'false'
                })
            }
        }else{
            StoreState.tasks(TASK_ENUM.TASK_5,{
                status:'false'
            })
        }
        toast({
            title: "Task two is to find right pattern with programming knowledge."
        })
    }, [])
    return (
        <>
            {!isLoading ?
                <>
                    <div className='w-fit mx-auto -mt-2 '>
                        <h1 className="scale-150 inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 border-b-2 text-center pb-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                            Code Fusion <br />
                            <div className='flex'>
                                <img className="h-10 mx-2 mt-2 animate-spin [animation-duration:5s]" src={NinjaStart} alt="Ninja Star" />
                                <h1 className='text-gray-400'>{teamName || 'Strivers'}</h1>
                                <img className="h-10 mx-2 mt-2 animate-spin [animation-duration:5s]" src={NinjaStart} alt="Ninja Star" />
                            </div>
                        </h1>
                        <h4 className="text-center my-8 scroll-m-20 text-xl text-white font-semibold tracking-tight">
                            コードを融合する準備ができました
                        </h4>
                    </div>
                    <div className='w-full transition'>
                        <img src={audiogif} className='mx-auto mb-3 rounded-3xl -mt-5 shadow-2xl shadow-pink-500 hover:scale-110 transition' alt="" />
                        <AudioPlayer
                            className='rounded-3xl'
                            src={audio}
                            onPlay={e => console.log("onPlay")}
                        />
                        <a href={audio} download>Download audio</a>
                        <div className='my-5 space-y-3'>
                            <MitDialog>
                                <Button className="w-full bg-pink-300">Get Password</Button>
                            </MitDialog>
                            <div className='flex justify-between'>
                                <Button disabled={Prev}><div onClick={prevHandler} className='flex space-x-2 items-center'><ArrowLeftIcon /><h1>Prev</h1></div></Button>
                                <HintDialog
                                    heading={'Hint 💡'}
                                    desc={'reverse. 🚶‍♀️🚶‍♂️🚶🏃‍♀️🏃‍♂️🏃'}
                                >
                                                                       <Button>
                                        <img src={HintImg} className='w-20 mt-2' />
                                    </Button>
                                </HintDialog>
                                <Button disabled={Next}><div onClick={nextHandler} className='flex space-x-2 items-center'><h1>Next</h1> <ArrowRightIcon /></div></Button>
                            </div>
                        </div>
                    </div>
                </>
                :
                <Loading className="mx-auto" />
            }
        </>
    );
};
export default GyakkoSuru;
