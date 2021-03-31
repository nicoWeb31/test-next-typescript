import { createContext, useState } from "react";
import { Notification } from "../interfaces/envent";


interface ContextNotificationProviderProps {
    children: React.ReactNode;
}

const NotificationContext = createContext({
    notification: null,
    showNotification: function (notificationData: Notification) {},
    hideNotification: function () {},
});

export const NotificationcontextProvider: React.FC<ContextNotificationProviderProps> = ({
    children,
}) => {
    const [activNotifications, setActiveNotifications] = useState<null | Notification>(null);

    const showNotification = (notificationData : Notification) => {
        setActiveNotifications(notificationData);
    };

    const hideNotification = () => {
        setActiveNotifications(null);
    };

    const context = {
        notification: activNotifications,
        showNotification: showNotification,
        hideNotification: hideNotification,
    };

    return (
        <NotificationContext.Provider value={context}>
            {children}
        </NotificationContext.Provider>
    );
};

export default NotificationContext;
