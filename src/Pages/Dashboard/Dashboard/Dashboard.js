import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>

            <div>
                <div class="drawer drawer-mobile">
                    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content flex flex-col items-center justify-center">
                        {/* <!-- Page content here --> */}
                        <h2 className="text-3xl text-primary text-center font-bold">Dashboard</h2>
                        <Outlet></Outlet>
                        <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    </div>
                    <div class="drawer-side">
                        <label for="my-drawer-2" class="drawer-overlay"></label>
                        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                            {/* side bar content  */}
                            <li><Link to="/dashboard">My Order</Link></li>
                            <li><Link to="/dashboard/addReview">Add Review</Link></li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;