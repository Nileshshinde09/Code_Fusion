import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from "./ui/separator"
import { useNavigate } from "react-router-dom"
import { DekodosuruForm } from "."
const DekodosuruDialog = ({children}) => {
    const navigate = useNavigate()
    return (
        <Dialog>
            <DialogTrigger asChild>
                {
                    children
                }
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-center">Get word of Phrase.</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4 scale-110">
                <DekodosuruForm/>
                </div>
            </DialogContent>
        </Dialog>
    )
}
export default DekodosuruDialog;
