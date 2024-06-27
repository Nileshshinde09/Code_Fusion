import React from 'react'
import { useSelector } from 'react-redux'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
const resultTable = () => {
    const teamInfo = useSelector(state => state.auth.userData)
    return (
        <div>
            <h1 className="text-center border-b-2 pb-3 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Congratulations!
            </h1>
            <h2 className="text-center scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Team {teamInfo.teamName}
            </h2>
            <Table>
                <TableCaption>Round Complition Tally</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Task No.</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Time</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoices.map((invoice) => (
                        <TableRow key={invoice.invoice}>
                            <TableCell className="font-medium">{invoice.invoice}</TableCell>
                            <TableCell>{invoice.paymentStatus}</TableCell>
                            <TableCell>{invoice.paymentMethod}</TableCell>
                            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    )
}

export default resultTable
