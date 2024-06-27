import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const HintDialog = ({ children, heading, desc ,link}) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                    {
                        children
                    }
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-transparent" >
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-center">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                        {heading}
                </h3>
                        </AlertDialogTitle>
                    <AlertDialogDescription>
                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-center">
                            {
                                desc
                            }
                        </h4>
                        {
                            link?
                            <pre className="text-center m-10">
                                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                                <a href={link} target="_blank">click me</a>
    </h3>
                            </pre>
                            :
                            <></>
                        }
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
export default HintDialog;