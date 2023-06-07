import styled from "styled-components";

export const BlogCard = styled.h1`
/* transform: translate(-50%,-50%); */
/* -webkit-text-stroke: 1px white; */
color: transparent;
background-image: linear-gradient(white,white);
background-repeat: no-repeat;
-webkit-background-clip: text;
background-position: -600px 0;
animation: anim 5s linear infinite alternate;
 /* webkitTextStroke:'1px white', 
 color:'transparent', 
 backgroundImage:'linear-gradient(white, white)', 
 backgroundRepeat:'no-repeat', 
 WebkitBackgroundClip:'text', 
 backgroundPosition:'-600px 0', 
 animation:'anim 20s linear infinite' */

@keyframes anim {
    100%{
        background-position: 0 0;
    }
    
}
`;
