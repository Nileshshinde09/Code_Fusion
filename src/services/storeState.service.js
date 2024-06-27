import { STORE_STATE_ENUM, TASK_ENUM ,TASKS} from "@/constants";
class storeState{
    login=(key,payload)=>{
        try {
            payload.timeStamp = String(new Date())
            localStorage.setItem(key,JSON.stringify(payload))
            return true;
        } catch (error) {
            console.log(error.message || "Something went wrong while initializing store.");
            return false
        }
    }   
    tasks=(taskNo,payload)=>{
        try {
            payload.timeStamp = String(new Date())
            localStorage.setItem(taskNo,JSON.stringify(payload))
            return true
        } catch (error) {
            console.log(error.message || "Something went wrong while storing task data.");
            return false
        }
    } 
    getTaskComplition=(taskNo)=>{
        try {
            return JSON.parse(localStorage.getItem(taskNo))
        } catch (error) {
            console.log(error.message || "Something went wrong while storing task data.");
            return null
        }
    }
    completeTasks=(payload)=>{
        try {
            payload.timeStamp = String(new Date())
            localStorage.setItem(STORE_STATE_ENUM.WRAP_UP_TASK,JSON.stringify(payload))
            return true
        } catch (error) {
            console.log(error.message || "Something went wrong while storing data in store.");
            return false
        }
    }
    getWinnerDashboard=(teamName)=>{
        try {
            const arr=[]
            TASKS.map((val,i)=>{
                arr.push(
                    JSON.parse(localStorage.getItem(val))
                )
            })
            return arr;
        } catch (error) {
            console.log(error.message || "Something went wrong while fetching data from store.");
            return false
        }
    }
    clear=()=>{
        try {
            localStorage.clear()
            return true;
        } catch (error) {
            console.log(error.message || "Something went wrong while clearing store.");
            return false
        }
    }
}
export const StoreState = new storeState()