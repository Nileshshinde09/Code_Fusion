import React, { useEffect, useState } from 'react';
import { Loading, HintDialog, KodoDialog } from '@/components';
import { useToast } from '@/components/ui/use-toast';
import NinjaStart from "@/assets/Applogo/ninja-star.png";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {
    python as Python,
    c as C,
    cpp as Cpp,
    csh as Csh,
    java as Java,
    TASK_ENUM
} from '@/constants';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { ArrowLeftIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { PAGE_LIST } from '@/constants';
import { useDispatch } from 'react-redux';
import { setfinalRoundBG } from '@/app/slices/bgSlice';
import HintImg from "@/assets/Applogo/hint.png";
import { StoreState } from '@/services';

const Kodotesuta = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [teamName, setTeamName] = useState('');
    const [Prev, setPrev] = useState(false);
    const [Next, setNext] = useState(false);

    const nextHandler = () => {
        navigate('/' + PAGE_LIST[PAGE_LIST.indexOf(pathname.split('/')[1]) + 1]);
    };

    const prevHandler = () => {
        navigate('/' + PAGE_LIST[PAGE_LIST.indexOf(pathname.split('/')[1]) - 1]);
    };

    useEffect(() => {
        dispatch(setfinalRoundBG());
        if(StoreState.getTaskComplition(TASK_ENUM.TASK_2)){
            if(StoreState.getTaskComplition(TASK_ENUM.TASK_2).status !== 'true'){
                StoreState.tasks(TASK_ENUM.TASK_2,{
                    status:'false'
                })
            }
        }else{
            StoreState.tasks(TASK_ENUM.TASK_2,{
                status:'false'
            })
        }
        toast({
            title: "Task two is to find right pattern with programming knowledge."
        });
    }, [dispatch, toast]);

    const CODE_SNIPPETS = [
        Python,
        C,
        Csh,
        Cpp,
        Java
    ];

    return (
        <>
            {!isLoading ?
                <>
                    <div className='w-fit mx-auto -mt-[5rem]'>
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
                        <Carousel className="w-full max-w-xs -mt-7 mx-auto">
                            <CarouselContent>
                                {CODE_SNIPPETS.map((snippet, index) => (
                                    <CarouselItem key={index}>
                                        <div className="p-1">
                                            <a href={snippet} download={`snippet-${index + 1}`}>
                                                <img src={snippet} className='w-full rounded-3xl hover:scale-150 cursor-pointer'/>
                                            </a>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                        <div className='my-5 space-y-3'>
                            <KodoDialog>
                                <Button className="w-full bg-green-200">Get Password</Button>
                            </KodoDialog>
                            <div className='flex justify-between'>
                                <Button disabled={Prev}><div onClick={prevHandler} className='flex space-x-2 items-center'><ArrowLeftIcon /><h1>Prev</h1></div></Button>
                                <HintDialog
                                    heading={'Hint 💡'}
                                    desc={'Kuch hint nahi hai , is task ke liye 😶😶'}
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

export default Kodotesuta;
