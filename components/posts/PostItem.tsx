import { useRouter } from "next/router";
import useLoginModal from "@/hooks/useLoginModal";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useCallback } from "react";
import { useMemo } from "react";
import { formatDistanceToNowStrict } from "date-fns";
import Avatar from "../Avatar";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import useLike from "@/hooks/useLike";
import { AiFillHeart } from "react-icons/ai";

interface PostItemProps {
    // eslint-disable-next-line
    data: Record<string, any>;
    userId?: string;
}

const PostItem: React.FC<PostItemProps> = ({ data, userId }) => {
    const router = useRouter();
    const loginModal = useLoginModal();

    const { data: currentUser} = useCurrentUser();
    const {hasLiked, toggleLike} = useLike({postId: data.id, userId});
    // eslint-disable-next-line
    const goToUser = useCallback((event: any) => {
        event.stopPropagation();

        router.push(`/users/${data.user.id}`);
    }, [router, data.user.id])

    const goToPost = useCallback(() => {
        router.push(`/posts/${data.id}`);
    }, [router, data.id]);
    // eslint-disable-next-line
    const onLike = useCallback((event: any) => {
        event.stopPropagation();

        if (!currentUser) {
            return loginModal.onOpen();
        }

        toggleLike();
    }, [loginModal, currentUser, toggleLike]);

    const createdAt = useMemo(() => {
        if (!data?.createdAt) {
            return null;
        }

        return formatDistanceToNowStrict(new Date(data.createdAt));
    }, [data?.createdAt]);

    const LikeIcon = hasLiked ? AiFillHeart : AiOutlineHeart;

    return (
        <div
            onClick={goToPost}
            className="
                border-b-[1px]
                border-gray-200
                p-5
                cursor-pointer
                hover:bg-gray-200
                transition
                w-full
                max-w-full
                overflow-hidden
            "
        >
            <div className="flex flex-row items-start gap-3">
                <Avatar userId={data.user.id}/>
                    <div>
                        <div
                            className="
                                flex flex-row items-center gap-2
                            "
                        >
                            <p
                                onClick={goToUser}
                                className="
                                    text-blue-800
                                    font-semibold
                                    crusor-pointer
                                    hover:underline
                                "
                            >{data.user.name}</p>
                            <span 
                                onClick={goToUser}
                                className="
                                    text-neutral-500
                                    cursor-pointer
                                    hover:underline
                                    hidden
                                    md:block
                                ">
                                @{data.user.username}
                            </span>
                            <span className="text-neutral-500 text-sm">
                                {createdAt}
                            </span>
                        </div>
                        <div className="text-blue-800 mt-1 w-full max-w-full break-words break-all overflow-wrap whitespace-pre-wrap">
                            {data.body}
                        </div>
                        <div className="flex flex-row items-center mt-3 gap-10">
                            <div
                                className="
                                    flex
                                    flex-row
                                    items-center
                                    text-neutral-500
                                    gap-2
                                    cursor-pointer
                                    transition
                                    hover:text-sky-500
                                "
                            >
                                <AiOutlineMessage size={20} />
                                <p>
                                    {data.comments?.length || 0}
                                </p>
                            </div>
                            <div
                                onClick={onLike}
                                className="
                                    flex
                                    flex-row
                                    items-center
                                    text-neutral-500
                                    gap-2
                                    cursor-pointer
                                    transition
                                    hover:text-red-500
                                "
                            >
                                <LikeIcon size={20} color={hasLiked ? 'red' : ''} />
                                <p>
                                    {data.likedIds.length}
                                </p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default PostItem;