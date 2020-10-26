import styled from "styled-components"
import logo from "../../img/logo.png"

export const HeaderWrapper = styled.div`
  position:relative;
  height:56px;
  border-bottom:1px solid #f0f0f0;
`
export const Logo = styled.a`
  position:absolute;
  top:0;
  left:0;
  height:56px;
  display:block;
  width:100px;
  background: url(${logo});
  background-size:contain;
`
export const Nav = styled.div`
  width:960px;
  height:100%;
  margin:0 auto;
  padding-right:70px;
  box-sizing:border-box;
`
export const NavItem = styled.div`
  line-height:56px;
  padding:0 15px;
  font-size:17px;
  color:#333;
  &.left{
    float:left;
  }
  &.right{
    float:right;
    color:#81CA9a;
  }
  &.active{
    color:#81CA9D;
  }
`
export const Search = styled.div`
float:left;
position:relative;

.zoom{
  position:absolute;
  right: 4px;
  bottom:4px;
  width:30px;
  border-radius:15px;
  line-height:30px;
  text-align:center;
  color:black;
  &.focus{
    background:#999;
    color:#fff;
  }
}

`
export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  width:160px;
  height:38px;
  margin-top:9px;
  padding:0 30px 0 20px;
  box-sizing: border-box;
  margin-left:20px;
  border:none;
  outline:none;
  border-radius:19px;
  color:#666;
  background-color: #eee;
  font-size:14px;
  &::placeholder{
    color:#999;
  }
  &.focus{
    width:240px;
    
  }
  &.slide-enter{
  transition:all .2s ease-out;
}
&.slide-enter-active{
  width:240px;
}
&.slide-exit{
  transition:all .2s ease-out;
}
&.slide-exit-active{
  width:160px;
}
`
export const Addition = styled.div`
  position:absolute;
  right:0;
  top:0;
  height:56px;
`
export const Button = styled.div`
  float:left;
  line-height:38px;
  border-radius:19px;
  margin-right:20px;
  margin-top:9px;
  padding:0 20px;
  border:1px solid #81CA9D;
  &.reg{
     color:#81CA9D;
  }
  &.writting{
    background:#81CA9D;
    color:#fff;
  }
`
export const SearchInfo = styled.div`
  z-index: 1000;
  position:absolute;
  background:#FFF;
  left: 20px;
  top:56px;
  width:240px;
  padding:0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
`
export const SearchInfoTitle = styled.div`
  margin-top:20px;
  margin-bottom:15px;
  line-height:20px;
  font-size:14px;
  color:#969696;
`
export const SearchInfoSwitch = styled.span`
  float:right;
  font-size:13px;
  cursor: pointer;
  .spin{
    font-size:12px;
  }
`
export const SearchInfoItem = styled.a`
  display:block;
  float:left;
  line-height:20px;
  padding:0 5px;
  font-size:12px;
  border:1px solid #ddd;
  color:#969696;
  border-radius:3px;
  margin:6px;

`