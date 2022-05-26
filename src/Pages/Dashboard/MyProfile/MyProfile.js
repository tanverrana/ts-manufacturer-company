import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);

    return (
        <div>
            <h2 className="text-3xl font-bold text-orange-500">My Profile</h2>
            <div class="overflow-x-auto">
                <table class="table w-6/12">

                    <thead>
                        <tr>
                            <th>Profile Name</th>
                            <th>Email</th>

                        </tr>
                    </thead>
                    <tbody>

                        <tr>

                            <td>{user.displayName}</td>
                            <td>{user.email}</td>

                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProfile;