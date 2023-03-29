

// this component is the /posts component and will
import { useRouter } from "next/router";
import Image from "next/image";
const SinglePost = ({ post }) => {

    const router = useRouter()
    return <>
        <div>{post.id}</div>
        <div>{post.title}</div>
        <div>{post.name}</div>
        <Image
            src='https://images.unsplash.com/photo-1605460375648-278bcbd579a6'
            alt='A beautiful English Setter'
            width={500}
            height={200}
            // width={300px}
            // srcset
            layout='responsive'
        />
        <button onClick={() => router.push('/posts')}>Go back</button>
    </>
}

export default SinglePost;