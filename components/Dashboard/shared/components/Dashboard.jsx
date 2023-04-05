import Sidebar from "../components/layouts/sidebar/Sidebar";
import Navbar from "../components/layouts/navbar/Navbar";

const Dashboard = ({ children }) => {
    return (
        <div className="grid grid-cols-1 xs:grid-cols-12 gap-6 p-4 md:p-6 ">
            <div className="lg:col-span-2">
                <Sidebar />
            </div>

            <div className="xs:col-span-11 lg:col-span-10">
                <Navbar />
                <main className="lg:py-6">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Dashboard;

