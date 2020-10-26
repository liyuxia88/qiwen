import styled from "styled-components"

export const DetailWrapper = styled.div`
  overflow:hidden;
  width:960px;
  margin:0 auto;
  padding-bottom:100px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);

`
export const Header = styled.div`
  margin:50px 0 20px 50px;
  line-height:44px;
  font-size:34px;
  color:#333;
  font-weight:bold;

`
export const Content = styled.div`
  color:#2f2f2f;
  img{
    width:700px;
    margin:20px 130px 20px;
  }
  p{
    text-indent:2em; 
    padding:0 50px 10px;
    font-size:16px;
    line-height:30px;
  }
`
export const ComTop = styled.div`
  width:100%;
  height:100px;
  background:#999;
  margin-top:100px;
  position:fixed;
  bottom:0;
`
export const Comment = styled.input`
  margin:auto;
  border-radius:5px;
  padding-left:10px;
  margin-top:25px;
  display:block;
  width:400px;
  height:50px;
  outline:none;
  border: 1px solid #000;
  
`
export const BTN = styled.div`
  position:absolute;
  bottom:30px;
  left:65%;
 
`
export const Button = styled.button`
  padding:10px;
  outline:none;
  border-radius:20px;
  margin-right:10px;
`
