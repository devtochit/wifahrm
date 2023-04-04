import { useState } from "react"
import { getReturnValues } from "../../../hooks/useCountdown"
import { useDispatch } from "react-redux"
import { readNotification } from "../../../redux/slice/notification/notificationSlice"

const NotificationCard = ({ item }) => {
    const { cropCategory, cropName, taskCategory, taskDescription, notificationTime, hasRead } = item
    const [isOpened, setIsOpened] = useState(false)
    const dispatch = useDispatch()

    const getTime = (time) => {
        const currentTime = new Date().getTime()
        const targetTime = new Date(time).getTime()
        const timeActive = currentTime - targetTime;

        const [days, hours, minutes, seconds] = getReturnValues(timeActive)

        if (days > 0) {
            return `${days} ${days > 1 ? 'days' : 'day'} ago`
        } else if (hours > 0) {
            return `${hours} ${hours > 1 ? 'hours' : 'hour'} ago`
        } else if (minutes > 0) {
            return `${minutes} min ago`
        } else if (seconds > 0) {
            return `${seconds} sec ago`
        }
    }

    const handleRead = (e) => {
        setIsOpened(!isOpened)
        if (!hasRead) {
            dispatch(readNotification({ id: item.id, dispatch }))

        }
    }

    return (
        <div className='border-b border-primary/20 px-6 py-3' onClick={handleRead}>
            <div className='flex justify-between text-xs mb-1' >
                <h4 className='font-bold'>{taskCategory}</h4>
                <p className=''>{getTime(notificationTime)}</p>
            </div>


            <div className='flex justify-between items-center text-sm' >
                <p className={`hover:cursor-pointer w-5/6  ${!isOpened && 'truncate'} ${!hasRead && 'font-bold text-primary'}`}>{taskDescription}
                </p>
                {!hasRead && < i className="w-2 h-2 bg-primary rounded-full " />}
            </div>


        </div >
    )
}

export default NotificationCard