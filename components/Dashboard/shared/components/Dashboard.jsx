import Sidebar from "../components/layouts/sidebar/Sidebar";
import Navbar from "../components/layouts/navbar/Navbar";

const Dashboard = ({ children }) => {
    return (
        <div className="grid grid-cols-1 xs:grid-cols-16 gap-4 p-2 pl-4 xs:p-6 h-screen overflow-auto xs:h-auto">
            <div className="xs:col-span-1 lg:col-span-3">
                <Sidebar />
            </div>

            <div className="xs:col-span-15 xs:ml-4 md:m-0 lg:col-span-13">
                <Navbar />
                <main className="my-4 lg:py-6 w-full min-h-main mx-auto p-4 sm:p-6 bg-cusgray rounded-xl">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Dashboard;

