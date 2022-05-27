import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div>

            <div>
                <div class="drawer drawer-mobile">
                    <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content">
                        {/* <!-- Page content here --> */}
                        <h2 className="text-3xl text-primary text-center font-bold">Dashboard</h2>
                        <Outlet></Outlet>


                    </div>
                    <div class="drawer-side">
                        <label for="dashboard-sidebar" class="drawer-overlay"></label>
                        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                            {/* side bar content  */}
                            <li><Link to="/dashboard">My Profile</Link></li>
                            {!admin && <li><Link to="/dashboard/myOrder">My Order</Link></li>}
                            {!admin && <li><Link to="/dashboard/addReview">Add Review</Link></li>}

                            {admin && <li><Link to="/dashboard/users">Users & Admin</Link></li>}
                            {admin && <li><Link to="/dashboard/addTools">Add Tool</Link></li>}
                            {admin && <li><Link to="/dashboard/manageTools">Manage Tools</Link></li>}
                            {admin && <li><Link to="/dashboard/manageOrder">Manage Orders</Link></li>}
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;