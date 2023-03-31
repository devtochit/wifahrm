import Sidebar from "../components/layouts/sidebar/Sidebar";
import Navbar from "../components/layouts/navbar/Navbar";

const Dashboard = ({children}) => {
    return (
        <div className="flex ">
            <Sidebar />
            <div className="h-full overflow-y-hidden w-full xs:w-[calc(100%-7rem)] lg:w-[calc(100%-14rem)] p xs:pb-0">
                <Navbar />
                        <main className="w-screen sm:w-auto sm:px-12 lg:py-6 lg:px-6">
            {children}
        </main>
            </div>
        </div>
    );
};

export default Dashboard;

