import React from 'react';
import { getUser } from '../lib/data';
import UserDetail from '@/component/UserDetail';
import { deleteUser } from '../lib/action';

const page = async () => {

    const data = await getUser()

    return (
        <div>
            User management
            <h2>Data: {data.length}</h2>
            <UserDetail p={data} deleteUser={deleteUser}></UserDetail>
        </div>
    );
};

export default page;