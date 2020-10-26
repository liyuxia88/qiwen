import styled from "styled-components"
import img1 from "../../img/1.jpg"
import img2 from "../../img/2.jpg"
import img3 from "../../img/3.jpg"
import img4 from "../../img/4.jpg"
import img5 from "../../img/huiyuan.png"
import img6 from "../../img/lianzai.png"
import img7 from "../../img/banquan.png"
import img8 from "../../img/xuetang.png"
export const Img = styled.a`
  display:block;
  width:100%;
  height:100%;
  background-size:cover;
  background:url(${img1})
`
export const Img2 = styled.a`
display:block;
  width:100%;
  height:500px;
  background-size:cover;
  background:url(${img2})
`
export const Img3 = styled.a`
  display:block;
  width:100%;
  height:100%;
  background-size:cover;
  background:url(${img3})
`
export const Img4 = styled.a`
display:block;
  width:100%;
  height:100%;
  background-size:cover;
  background:url(${img4})
`
export const Content = styled.div`
  margin:20px auto;
  width:960px;
  display:flex;
  flex-direction:row;
  justify-content:space-between;

`
export const ContentItem = styled.div`
  transition: all 0.3s;
  transform: translateY(0px);
  width:225px;
  height:250px;
  cursor: pointer;
  
  &:hover{
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    transform: translateY(-5px);
  }
  &.item1{
    background:#FFB84F;
    
  }
  &.item2{
    background:  #F4E0BD;
  }
  &.item3{
    background:#C1E4DE;
  }
  &.item4{
    background:#B7D6EC;
  }
  .item_content{
    height:250px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    }

`
export const ImgLogo = styled.div`
  width:100px;
  height:100px;
  background:url(${img5})
`
export const ImgLogo2 = styled.div`
  width:100px;
  height:100px;
  background:url(${img6})
`
export const ImgLogo3 = styled.div`
  width:100px;
  height:100px;
  background:url(${img7})
`
export const ImgLogo4 = styled.div`
  width:100px;
  height:100px;
  background:url(${img8})
`
export const Top = styled.div`

 height:100px;
width:100%;
 background:#999;
 text-align:center;
`
export const Text_Top = styled.div`
  margin:50px auto 0px;
  width:960px;
  font-size:15px;
  line-height:100px;
  color:#fff;
`

