import Sidebar from "../components/layouts/sidebar/Sidebar";
import Navbar from "../components/layouts/navbar/Navbar";

const Dashboard = ({ children }) => {
    return (
        <div className="flex gap-6 p-6">
            <Sidebar />
            <div className="h-full overflow-y-hidden w-full xs:w-[calc(100%-7rem)] lg:w-[calc(100%-14rem)] p xs:pb-0">
                <Navbar />
                <main className="sm:w-auto lg:py-6">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Dashboard;

