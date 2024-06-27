import { ComplitionForm, ResultTable } from '@/components'
import React from 'react'
import { useSelector } from 'react-redux'
const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        paymentMethod: "Credit Card",
    },
]
const Complition = () => {
    // ResultTable
    return (
        <div className='w-full'>
<>
          <div className='w-fit mx-auto -mt-[10rem]'>
            <h1 className="scale-150 inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 border-b-2 text-center pb-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Code Fusion <br /> <h1 className='text-gray-400'>コード融合</h1>
            </h1>
            <h4 className="text-center my-8 scroll-m-20 text-xl text-white font-semibold tracking-tight">
            コードを融合する準備ができました
            </h4>
          </div>
          <div className='w-full scale-125 transition'>
            <ComplitionForm />
          </div>
        </>
           
        </div>
    )
}

export default Complition