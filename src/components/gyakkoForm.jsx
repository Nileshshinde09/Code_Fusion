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
import {  useState } from "react";
import { Badge } from "./ui/badge";
import { GYAKKO_PASSWORD, TASK_ENUM } from "@/constants";
import { StoreState } from "@/services";
const FormSchema = z.object({
    ans: z.string().min(2, {
        message: "Answer must be at least 2 characters.",
    }),

});

const GyakkoForm = () => {
    const [value, setValue] = useState('')
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            ans: "",
        },
    });

    const onSubmit = (data) => {
        console.log(data);
        if (data.ans === GYAKKO_PASSWORD) {
            setValue("musicandcode")
            StoreState.tasks(TASK_ENUM.TASK_5,{
                status:'true'
            })
            toast({
                title: "Congratulations !!, ........"
            })

        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6 mx-auto">
                <FormField
                    control={form.control}
                    name="ans"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-gray-400">Answer</FormLabel>
                            <FormControl>
                                <Input className="bg-transparent text-white" placeholder="...." {...field} />
                            </FormControl>
                            <FormDescription>
                                Enter clue 🤔🤔.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="text"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-gray-400">Your Clue : </FormLabel>
                            <FormControl>
                                {value ? <>
                                    <Badge>{value}</Badge>
                                    <p className="text-sm text-muted-foreground">*Notedown</p>
                                </> : <>👎</>}

                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className="w-full" type="submit">
                    <p className="text-xl ">
                        Enter
                    </p>
                </Button>
            </form>
        </Form>
    );
};

export default GyakkoForm;