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
const FormSchema = z.object({
  teamName: z.string().min(2, {
    message: "Team name must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

const LobbyInputForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      teamName: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    if (FUSION_AUTH_STORE.get(data.teamName) === data.password) {
      localStorage.setItem(data.teamName, data.password);
      if (localStorage.getItem(data.teamName) === data.password) {
        dispatch(login(data))
        StoreState.login(TASK_ENUM.LOGIN, {
          "team_name": data.teamName,
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
        <FormField
          control={form.control}
          name="teamName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-400">Team Name チームの名前</FormLabel>
              <FormControl>
                <Input className="bg-transparent text-white" placeholder="team name" {...field} />
              </FormControl>
              <FormDescription>
                Enter your team name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
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
        <Button type="submit" variant="outline">
          <img className="w-10 mx-1 animate-spin [animation-duration:5s]" src={NinjaStart} alt="Ninja Star" />
          <p className="text-xl text-muted-foreground">
            Start  始める
          </p>
        </Button>
      </form>
    </Form>
  );
};

export default LobbyInputForm;
