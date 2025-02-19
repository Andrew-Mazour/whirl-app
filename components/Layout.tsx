import Sidebar from "./layout/Sidebar";
import FollowBar from "./layout/FollowBar";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="h-screen bg-gradient-to-br bg-white">
            <div className="container h-full mx-auto xl:px-30 max-w-6xl">
                <div className="grid grid-cols-4 h-full">
                    <Sidebar />
                    <div className="
                        col-span-3 
                        lg:col-span-2 
                        border-x-3
                        border-violet-400
                        shadow-lg
                        "
                    >
                        {children}
                    </div>
                    <FollowBar />
                </div>
            </div>
        </div>
    )
}

export default Layout;