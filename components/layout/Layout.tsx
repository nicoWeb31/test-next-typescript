import React,{useContext} from "react";
import Header from "./header/Header";
import Notification from '../ui/notification/Notification';
import NotificationContext from "../../store/notification-context"
import { Notification } from "../../interfaces/envent";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {


    
    const notificationCtx =  useContext(NotificationContext);
    const activeNot  = notificationCtx.notification

    return (
        <React.Fragment>
            <Header/>
            <main>{children}</main>
            {activeNot && 
                <Notification title={activeNot.title} message={activeNot.} status={activeNot.status} />
            } 
        </React.Fragment>
    );
};
export default Layout;
