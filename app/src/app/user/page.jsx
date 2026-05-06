import React from 'react';
import { getUser } from '../lib/data';

const page = async () => {

    const data = await getUser()

    return (
        <div>
            User management
            <h2>Data: {data.length}</h2>
        </div>
    );
};

export default page;