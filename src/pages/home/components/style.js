import styled from "styled-components"

export const ListItem = styled.div`
  width:960px;
  height:150px;
  margin:auto;
  padding:20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic{
    overflow:hidden;
    display:block;
    width:125px;
    height:100px;
    float:right;
    border-radius:10px;
  }
`
export const ListInfo = styled.div`
  width:500px;
  float:left;
  .title{
    font-size:18px;
    line-height:27px;
    font-weight:bold;
  }
  .desc{
    line-height:24px;
    font-size:13px;
    color:#999;
  }
`
export const LoadMore = styled.div`
  width:960px;
  margin:20px auto;
  height:50px;
  background:#999;
  color:#fff;
  line-height:50px;
  text-align:center;
  border-radius:25px;
`