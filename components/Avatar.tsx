import useUser from "@/hooks/useUser";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

interface AvatarProps {
    userId: string;
    isLarge?: boolean;
    hasBorder?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
    userId,
    isLarge,
    hasBorder
}) => {
    const {data: fetchedUser} = useUser(userId);
    const router = useRouter()

    const onClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();

        const url = `/users/${userId}`;

        router.push(url);
    }, [router, userId]);
    return (
        <div
            className={`
                ${hasBorder ? 'border-4 border-blue-800' : ''}
                ${isLarge ? 'h-32 w-32' : 'h-12 w-12'}
                rounded-full
                hover:opacity-90
                transition
                cursor-pointer
                relative
                flex-shrink-0  /* Prevent shrinking */
            `}
        >
            <Image 
                fill
                style={{
                    objectFit: 'cover',
                    borderRadius: '100%'
                }}
                alt='Avatar'
                onClick={onClick}
                src={fetchedUser?.profileImage || "/images/placeholder.png"}
            />
        </div>
    );
    
}

export default Avatar;