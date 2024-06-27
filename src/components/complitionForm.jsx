import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import NinjaStart from "@/assets/Applogo/ninja-star.png";
import { FUSION_AUTH_STORE, TASK_ENUM } from "@/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/app/slices/authSlice";
import { StoreState } from "@/services";
import HintDialog from "./HintDialog";
import HintImg from "@/assets/Applogo/hint.png";
import { useState } from "react";
import { ArrowLeftIcon,ArrowRightIcon } from "lucide-react";
const FormSchema = z.object({
    teamName: z.string().min(2, {
        message: "Team name must be at least 2 characters.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
});

const ComplitionForm = () => {
    const [Prev, setPrev] = useState(false);
    const [Next, setNext] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const nextHandler = () => {
        navigate('/' + PAGE_LIST[PAGE_LIST.indexOf(pathname.split('/')[1]) + 1]);
    };

    const prevHandler = () => {
        navigate('/' + PAGE_LIST[PAGE_LIST.indexOf(pathname.split('/')[1]) - 1]);
    };

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            password: "",
        },
    });
    const onSubmit = (data) => {
        if (FUSION_AUTH_STORE.get(data.teamName) === data.password) {
            if (localStorage.getItem(data.teamName) === data.password) {
                dispatch(login(data))
                StoreState.tasks(TASK_ENUM.END, {
                    status: 'true'
                })
                toast({
                    title: "Authenticated successfully! 😎😎",
                });
                navigate('/DekodoSuru');
            }
        } else {
            toast({
                title: "Wrong password! 🤔🤔😭😭",
            });
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6 mx-auto">
                <h2 className="text-center scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    Complition!!
                </h2>
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-gray-400">Password パスワード</FormLabel>
                            <FormControl>
                                <Input className="bg-transparent text-white" placeholder="password" type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" variant="outline" className="hover:scale-110 transition bg-transparent hover:bg-transparent">
                    <img className="w-10 mx-1 animate-spin [animation-duration:5s]" src={NinjaStart} alt="Ninja Star" />
                    <p className="text-xl text-muted-foreground">
                        Submit
                    </p>
                </Button>
                <div className='flex justify-center space-x-4'>
                    <Button disabled={Prev}><div onClick={prevHandler} className='flex space-x-2 items-center'><ArrowLeftIcon /><h1>Prev</h1></div></Button>
                    <HintDialog
                        heading={'Hint 💡'}
                        desc={'Enter password that you get throughout the task combine it and enter.\n For eg. if your password is java storage 0&$\n then enter java_storage_0&$'}
                    >
                        <Button>
                            {/* <img src={HintImg} className='' /> */}
                            Hint
                        </Button>
                    </HintDialog>
                    <Button disabled={Next}><div onClick={nextHandler} className='flex space-x-2 items-center'><h1>Next</h1> <ArrowRightIcon /></div></Button>
                </div>
            </form>
        </Form>
    );
};

export default ComplitionForm;
