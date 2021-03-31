import {createContext} from 'react'

// interface ContextNotification {
//     notification : null | {title: string, message: string,status: string};
//     showNotification: ()=>{};
//     hideNotification: ()=>{};

// }

const notificationContext = createContext({
    notification: null,
    showNotification: function(){},
    hideNotification: function(){},
})

export default notificationContext