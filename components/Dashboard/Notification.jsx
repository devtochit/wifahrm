import { useMemo } from 'react'
import NotificationCard from './notification/NotificationCard'
import { useSelector } from 'react-redux'


const Notification = () => {
    const { NotificationData } = useSelector(state => state.notificationReducers.Notification)

    const unreadNotification = useMemo(() => NotificationData.filter(item => !item.hasRead), [NotificationData])


    return (
        <div>
            <h2 className="text-lg font-bold py-4 px-6 border-b border-primary/20">Notification</h2>
            {NotificationData.map((item) => <NotificationCard key={item.id} item={item} />)}
        </div>
    )
}

export default Notification