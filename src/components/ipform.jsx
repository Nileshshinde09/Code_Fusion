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
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { StoreState } from "@/services";
import { TASK_ENUM } from "@/constants";

const FormSchema = z.object({
  ans: z.string().min(2, {
    message: "Answer must be at least 2 characters.",
  }),
});

const useLocalIP = () => {
  const [ip, setIp] = useState("");

  useEffect(() => {
    const getLocalIP = async () => {
      try {
        const RTCPeerConnection = 
          window.RTCPeerConnection || 
          window.mozRTCPeerConnection || 
          window.webkitRTCPeerConnection;
        
        if (!RTCPeerConnection) {
          console.warn("RTCPeerConnection is not supported by your browser");
          return;
        }

        const pc = new RTCPeerConnection({ iceServers: [] });
        pc.createDataChannel(""); // create a bogus data channel
        pc.createOffer()
          .then((offer) => pc.setLocalDescription(offer))
          .catch((error) => console.error("Error creating offer: ", error));

        pc.onicecandidate = (ice) => {
          if (ice && ice.candidate && ice.candidate.candidate) {
            const match = /([0-9]{1,3}(\.[0-9]{1,3}){3})/.exec(ice.candidate.candidate);
            if (match) {
              setIp(match[1]);
              pc.onicecandidate = null;
            }
          }
        };
      } catch (error) {
        console.error("Error getting local IP address: ", error);
      }
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
  function isValidIP(ip) {
    const pattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    return pattern.test(ip);
}
  const onSubmit = (data) => {
    if (data.ans === ip || isValidIP(String(data.ans))) {
      setValue('striver');
      StoreState.tasks(TASK_ENUM.TASK_3, {
        status: 'true',
      });
      toast({
        title: "Congratulations!!",
        description: "You have entered the correct IP address.",
      });
    } else {
      toast({
        title: "Incorrect IP",
        description: "Please try again.",
        status: "error",
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
                <Input className="bg-transparent text-white" placeholder="...." {...field} />
              </FormControl>
              <FormDescription>
                Enter your IP 🤔🤔.
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
                    <p className="text-sm text-muted-foreground">*Note it down</p>
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
