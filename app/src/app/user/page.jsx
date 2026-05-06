import React from 'react';
import { getUser } from '../lib/data';
import UserDetail from '@/component/UserDetail';
import { createUser, deleteUser } from '../lib/action';
import ModalTask from '@/component/ModalTask';

const page = async () => {

    const data = await getUser()

    return (
        <div>
            User management
            <div className='flex justify-center items-center gap-3'>
                <h2>Data: {data.length}</h2>
                <ModalTask createUserAction={createUser}></ModalTask>
            </div>
            <UserDetail p={data} deleteUser={deleteUser}></UserDetail>
        </div>
    );
};

export default page;