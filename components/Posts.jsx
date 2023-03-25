

// this component is the /posts component and will return the posts (all)
import Link from "next/link";
const Posts = (props) => {
    return <>
        {
            props?.posts?.map((post) => <div key={post?.id}><Link href={`/posts/${post.id}`}>{post?.title}</Link> </div>)
        }
    </>
}

export default Posts;