
// this is a page that will load the post based on id

import { useEffect, useState } from 'react'
import SinglePost from '../../components/SinglePost';
import PostMeta from '../../components/PostHead'

export async function getServerSideProps({ params }) {
    const { id } = params
    return {
        props: {
            id
        }
    }
}
const PostDetails = (props) => {
    const [post, setPost] = useState({})
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${props.id}`)
            .then((response) => response.json())
            .then((jsonData) => setPost(jsonData));

    }, [props.id])

    return <>
        <PostMeta post={post.title} />
        <SinglePost post={post} />

    </>
}

export default PostDetails