import React, { useEffect, useState } from 'react';
import { Loading, SmokeComponent, LobbyInputForm, DekodosuruDialog,HintDialog } from '@/components'
import { useToast } from '@/components/ui/use-toast';
import NinjaStart from "@/assets/Applogo/ninja-star.png"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { ArrowLeftIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { PAGE_LIST, TASK_ENUM } from '@/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setBG } from '@/app/slices/bgSlice';
import HintImg from "@/assets/Applogo/hint.png";
import { StoreState } from '@/services';

const DekodoSuru = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const teamdata = useSelector((state)=>state.auth.userData)
    const { pathname } = useLocation()
    const { toast } = useToast()
    const [isLoading, setIsLoading] = useState(false)
    const [Prev, setPrev] = useState(true)
    const [Next, setNext] = useState(false)
    const nextHandler = () => {
        navigate('/'+PAGE_LIST[PAGE_LIST.indexOf(pathname.split('/')[1]) + 1])
    }
    const prevHandler = () => {
        navigate('/'+PAGE_LIST[PAGE_LIST.indexOf(pathname.split('/')[1])-1])
    }
    useEffect(() => {
        dispatch(setBG())
        if(StoreState.getTaskComplition(TASK_ENUM.TASK_1)){
            if(StoreState.getTaskComplition(TASK_ENUM.TASK_1).status !== 'true'){
                StoreState.tasks(TASK_ENUM.TASK_1,{
                    status:'false'
                })
            }
        }else{
            StoreState.tasks(TASK_ENUM.TASK_1,{
                status:'false'
            })
        }
        toast({
            title: "Welcome!, Your competition has been started. 🏃🏃‍♂️"
        })
    }, [])
    return (
        <>
            {!isLoading ?
                <>
                    <div className='w-fit mx-auto -mt-[10rem]'>
                        <h1 className="scale-150 inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 border-b-2 text-center pb-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                            Code Fusion <br />
                            <div className='flex'>
                                <img className="h-10 mx-2 mt-2 animate-spin [animation-duration:5s]" src={NinjaStart} alt="Ninja Star" />
                                <h1 className='text-gray-400'>{teamdata.teamName}</h1>
                                <img className="h-10 mx-2 mt-2 animate-spin [animation-duration:5s]" src={NinjaStart} alt="Ninja Star" />
                            </div>
                        </h1>
                        <h4 className="text-center my-8 scroll-m-20 text-xl text-white font-semibold tracking-tight">
                            コードを融合する準備ができました
                        </h4>
                    </div>
                    <div className='w-full transition'>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>😀👩‍💻🐉🥷🥷</AccordionTrigger>
                                <AccordionContent>
                                    01101100 01100001 01101110 01100111 01110101 01100001 01100111 01100101
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>🫡👩‍💻🐉🥷🥷</AccordionTrigger>
                                <AccordionContent>
                                    01110010 01100101 01101100 01100001 01110100 01100101 01110011
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>😰👩‍💻🐉🥷🥷</AccordionTrigger>
                                <AccordionContent>
                                    01110011 01101110 01100001 01101011 01100101
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <div className='my-5 space-y-3'>
                            <DekodosuruDialog>
                                <Button className="w-full bg-pink-200">Get Your First Clue</Button>
                            </DekodosuruDialog>
                            <div className='flex justify-between'>
                                <Button disabled={Prev}><div onClick={prevHandler} className='flex space-x-2 items-center'><ArrowLeftIcon /><h1>Prev</h1></div></Button>
                                <HintDialog
                                    heading={'Hint 💡'}
                                    desc={'Kuch hint nahi hai , 😜😜'}
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

export default DekodoSuru
