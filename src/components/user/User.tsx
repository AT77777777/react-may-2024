import React, {FC} from 'react';
import {IUser} from "../../models/IUser";

type IUserProps = {
    user: IUser;
    lift: (id: number) => void
}

const User: FC<IUserProps> = ({user, lift}) => {
    return (
        <div key={user.id}>
            {user.id} {user.firstName} {user.lastName}

            <button onClick={() => {lift(user.id);}}>
                Get all posts
            </button>
        </div>
    );
};

export default User;