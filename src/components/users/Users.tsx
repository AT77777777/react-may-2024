import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import {getUsers} from "../../services/api.service";

const Users: FC = () => {
    let [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getUsers()
            .then((response) => setUsers(response))
    }, []);

    console.log(users);

    return (
        <div>
            
        </div>
    );
};

export default Users;