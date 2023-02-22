import Image from "next/image"
import styled from "styled-components"

const StyledPosit = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #ffffff1f;
border-radius: 10px;
box-shadow: black 1px 1px 5px;
width: 200px;
height: 400px;
`

const StyledImgContainer = styled.div`
height: 50%;
`

export const Posit = ({ post }) => {

    const { imageTitle } = post;
    const imageAlt = imageTitle.replace("/images/", "")
    console.log(imageTitle)

    return <StyledPosit>
        <StyledImgContainer>
            {/* <Image src={post.imageTitle}
                fill
                alt={imageAlt} /> */}
            <img src={post.imageTitle} alt={imageAlt} width={200} />
        </StyledImgContainer>
        <h3>{post.title}</h3>
        <p>{post.date}</p>
    </StyledPosit>
}