import React from 'react'
import { useSelector } from 'react-redux'
import { StoreState } from '@/services'

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
import { useEffect, useState } from 'react'
import { POINTS_FOR_TASKS, QUIZZURL } from '@/constants'
import HintDialog from './HintDialog'
import { Button } from './ui/button'
import quizImg from "@/assets/Applogo/quiz.png";
const ResultTable = () => {
  const [table, setTable] = useState(null)
  const [total, setTotal] = useState(0)
  const teamInfo = useSelector(state => state.auth.userData)

  useEffect(() => {
    const tableData = StoreState.getWinnerDashboard(teamInfo.teamName);
    setTable(tableData);

    if (tableData) {
      const totalPoints = tableData.reduce((acc, data) => {
        if (data?.status === 'true') {
          return acc + POINTS_FOR_TASKS;
        }
        return acc;
      }, 0);
      setTotal(totalPoints);
    }
  }, [teamInfo])
  const taskHandler=(key)=>{
    if(key === 0) return"Started"
    else if(key ===6) return "Ended"
    else return `Task ${key}`
  }
  const statusHandler=(key)=>{
    if(key === 'true') return"Passed"
    else if(key ==='false') return "Failed"
  }
  return (
    <div>
      <h1 className="text-center mt-7 border-b-2 pb-3 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Congratulations!
      </h1>
      <h2 className="text-center scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Team {teamInfo.teamName}
      </h2>
      <Table>
        <TableCaption>Round Completion Tally</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">Task No.</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {table && table.map((data, key) => (
            <TableRow key={key}>
              <TableCell className="font-medium">{taskHandler(key)}</TableCell>
              <TableCell>{String(data?.timeStamp).split('GM')[0]}</TableCell>
              <TableCell>{statusHandler(data?.status)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={0}>Total Points: {total}</TableCell>
            <TableCell colSpan={1}>
              <HintDialog
                heading={'Quiz'}
                desc={'Click below to Start Your Quiz'}
                link={QUIZZURL}
              >
                <Button className="bg-transparent hover:bg-transparent hover:scale-105">
                  <img src={quizImg} className='w-20 mt-2' />
                </Button>
              </HintDialog>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}

export default ResultTable
