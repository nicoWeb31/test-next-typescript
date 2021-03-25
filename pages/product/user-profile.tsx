import React from 'react';

interface PuserProfileProps {
username :string;
}



const PuserProfile : React.FC<PuserProfileProps> = ({username}) => {
    return (
        <div>
            <h1>user name</h1>
            <h3>{username}</h3>
        </div>
    )
}

//for all req
export async function getServerSideProps(context:any){
    //context --> full header response 
    const {params, req, res} = context;
    // console.log(req);
    // console.log(res);

return {
    props: {
        unsername : 'toto'
    }
}
}

export default PuserProfile
