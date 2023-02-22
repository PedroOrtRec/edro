import Image from "next/image"

export const Posit = ({ post }) => {

    const { imageTitle } = post;
    const imageAlt = imageTitle.replace("/images/", "")
    console.log(imageTitle)

    return <div className="posit">
        <div className="imagecontainer">
            <Image src={post.imageTitle}
                width={300}
                height={300}
                alt={imageAlt} />
        </div>
        <h3>{post.title}</h3>
        <p>{post.date}</p>
    </div>
}