import useCurrentUser from "@/hooks/useCurrentUser";
import useNotifications from "@/hooks/useNotifications";
import { useEffect } from "react";
import { BsTwitter } from "react-icons/bs";
import Image from "next/image";

const NotificationsFeed = () => {
    const {data: currentUser, mutate: mutateCurrentUser} = useCurrentUser();
    const {data: fetchedNotifications = []} = useNotifications(currentUser?.id);

    useEffect(() => {
        mutateCurrentUser();
    }, [mutateCurrentUser]);

    if (fetchedNotifications.length == 0) {
        return (
            <div
                className="
                    text-neutral-600
                    text-center
                    p-6
                    text-xl
                "
            >
                No notifications
            </div>
        )
    }
    return (
        <div className="flex flex-col">
            {fetchedNotifications.map(
                // eslint-disable-next-line
                (notification: Record<string, any>) => (
                <div
                    key={notification.id}
                    className="
                        flex
                        flex-row
                        items-center
                        p-6
                        gap-4
                        border-b-[1px]
                        border-gray-200
                    "
                >
                    <Image 
                        src="/images/whirlDot.png"
                        alt="Notification Icon"
                        width={32} 
                        height={32}
                        className="rounded-full" 
                    />
                    <p className="text-blue-800">
                        {notification.body}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default NotificationsFeed