import { formatDistanceToNowStrict } from "date-fns";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useMemo } from "react";
import Avatar from "../Avatar";

interface CommentItemProps {
    // eslint-disable-next-line
    data: Record<string, any>
};

const CommentItem: React.FC<CommentItemProps> = ({data}) => {
    const router = useRouter();
    // eslint-disable-next-line
    const goToUser = useCallback((event: any) => {
        event.stopPropagation();

        router.push(`/users/${data.user.id}`);
    }, [router, data.user.id]);

    const createdAt = useMemo(() => {
        if (!data?.createdAt) {
            return null;
        }

        return formatDistanceToNowStrict(new Date(data.createdAt));
    }, [data?.createdAt])
    return (
        <div
            className="
                border-b-[1px]
                border-gray-200
                p-5
                cursor-pointer
                hover:bg-gray-200
                transition
            "
        >
            <div className="flex flex-row items-start gap-3">
                <Avatar userId={data.user.id} />
                <div>
                    <div className="flex flex-row items-center gap-2">
                        <p 
                        onClick={goToUser}
                        className="
                            text-blue-800
                            font-semibold
                            cursor-pointer
                            hover:underline
                        ">
                            {data.user.name}
                        </p>
                        <span
                            className="
                                text-neutral-500
                                cursor-pointer
                                hober:underline
                                hidden
                                md:block
                            "
                        >
                            @{data.user.username}
                        </span>
                        <span className="text-neutral-500 text-sm">
                                {createdAt}
                        </span>
                    </div>
                    <div className="text-blue-800 mt-1">
                        {data.body}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentItem