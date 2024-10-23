import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import {getUsers} from "../../services/api.service";
import User from "../user/User";

type IUsersProps = {
    lift: (id: number) => void
}

const Users: FC<IUsersProps> = ({lift}) => {
    let [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            setUsers(await getUsers())
        }

        fetchUsers();
    }, []);

    console.log(users);

    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user} lift={lift} />)
            }
        </div>
    );
};

export default Users;