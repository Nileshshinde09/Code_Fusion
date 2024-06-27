import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { KodoForm } from "."
const KodoDialog = ({children}) => {
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
                <KodoForm/>
                </div>
            </DialogContent>
        </Dialog>
    )
}
export default KodoDialog;
