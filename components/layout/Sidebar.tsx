import {BiLogOut} from 'react-icons/bi';

import SidebarLogo from './SidebarLogo';
import SidebarItem from './SidebarItem';
import SidebarWhirlButton from './SidebarWhirlButton';
import useCurrentUser from '@/hooks/useCurrentUser';
import {signOut} from 'next-auth/react';
import { MdHome, MdNotifications, MdPerson} from 'react-icons/md';


const Sidebar = () => {
    const {data: currentUser} = useCurrentUser();

    const items = [
        {
            label: 'Home',
            href: '/',
            icon: MdHome
        },
        {
            label: 'Notifications',
            href: '/notifications',
            icon: MdNotifications,
            auth: true,
            alert: currentUser?.hasNotification,
        },
        {
            label: 'Profile',
            href: `/users/${currentUser?.id}`,
            icon: MdPerson,
            auth: true
        }
    ];
    return (
        <div className="col-span-1 h-full pr-4 md:pr-6">
            <div className="flex flex-col items-end">
                <div className="space-y-2 lg:w-[230px]">
                    <SidebarLogo />
                    {items.map((item) => (
                        <SidebarItem
                            key={item.href}
                            href={item.href}
                            label={item.label}
                            icon={item.icon}
                            auth={item.auth}
                            alert={item.alert}
                        />
                    ))}
                    {currentUser && (
                        <SidebarItem onClick={() => signOut()} icon={BiLogOut} label="Logout"/>
                    )}
                    <SidebarWhirlButton />
                </div>
            </div>
        </div>
    )
}

export default Sidebar;