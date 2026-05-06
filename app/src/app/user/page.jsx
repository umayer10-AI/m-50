import React from 'react';
import { getUser } from '../lib/data';
import UserDetail from '@/component/UserDetail';

const page = async () => {

    const data = await getUser()

    return (
        <div>
            User management
            <h2>Data: {data.length}</h2>
            <UserDetail p={data}></UserDetail>
        </div>
    );
};

export default page;