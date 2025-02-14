import usePosts from "@/hooks/usePosts";
import PostItem from "./PostItem";

interface PostFeedProps {
    userId?: string;
}


const PostFeed: React.FC<PostFeedProps> = ({ userId }) => {
    const {data: posts = []} = usePosts(userId);
    return (
        <>
            {posts.map(
                // eslint-disable-next-line
                (post: Record<string, any>) => (
                <PostItem 
                    userId={userId}
                    key={post.id}
                    data={post}
                />
            ))}
        </>
    )
}

export default PostFeed