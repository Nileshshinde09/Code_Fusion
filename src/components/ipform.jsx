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
import { DEKODOSURU_PASSWORD, FUSION_AUTH_STORE, TASK_ENUM } from "@/constants";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { StoreState } from "@/services";

const FormSchema = z.object({
  ans: z.string().min(2, {
    message: "Answer must be at least 2 characters.",
  }),
});

const useLocalIP = () => {
  const [ip, setIp] = useState("");

  useEffect(() => {
    const getLocalIP = () => {
      window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
      const pc = new RTCPeerConnection({ iceServers: [] });
      pc.createDataChannel(""); // create a bogus data channel
      pc.createOffer().then((offer) => pc.setLocalDescription(offer));
      pc.onicecandidate = (ice) => {
        if (ice && ice.candidate && ice.candidate.candidate) {
          const myIP = /([0-9]{1,3}(\.[0-9]{1,3}){3})/.exec(ice.candidate.candidate)[1];
          setIp(myIP);
          pc.onicecandidate = () => {};
        }
      };
    };

    getLocalIP();
  }, []);

  return ip;
};

const Ipform = () => {
  const [value, setValue] = useState('');
  const ip = useLocalIP();

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      ans: "",
    },
  });

  const onSubmit = (data) => {
    if (data.ans === ip) {
      setValue('striver');
      StoreState.tasks(TASK_ENUM.TASK_3, {
        status: 'true',
      });
      toast({
        title: "Congratulations !!, ........",
      });
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
                <Input className="bg-transparent text-white" placeholder="172.25.96.1" {...field} />
              </FormControl>
              <FormDescription>
                Enter IP 🤔🤔.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="text"
          render={() => (
            <FormItem>
              <FormLabel className="text-gray-400">Your Clue:</FormLabel>
              <FormControl>
                {value ? (
                  <>
                    <Badge>{value}</Badge>
                    <p className="text-sm text-muted-foreground">*Notedown</p>
                  </>
                ) : (
                  <>👎</>
                )}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          <p className="text-xl">Enter</p>
        </Button>
      </form>
    </Form>
  );
};

export default Ipform;
