
// this component is the /posts component and will return the posts (all)
import { useEffect, useState } from "react";
import Posts from "../../components/Posts"
const PostPage = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then((response) => response.json())
            .then((jsonData) => setPosts(jsonData));

    }, [])

    return <Posts posts={posts} />
}

export default PostPage