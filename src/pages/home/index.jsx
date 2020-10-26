import React, { Component } from 'react'
import { BackTop, Carousel } from 'antd'
import List from './components/List.js'
import axios from 'axios'
import { connect } from 'react-redux'
import {
  Img,
  Img2,
  Img3,
  Img4,
  Content,
  ContentItem,
  ImgLogo,
  ImgLogo2,
  ImgLogo3,
  ImgLogo4,
  Top,
  Text_Top,
} from './style'
const contentStyle = {
  width: '100%',
  height: '500px',
  color: '#fff',
  textAlign: 'center',
  margin: 'auto',
}

class Home extends Component {
  render() {
    return (
      <div>
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>
              <Img></Img>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <Img2></Img2>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <Img3></Img3>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <Img4></Img4>
            </h3>
          </div>
        </Carousel>
        <Content>
          <ContentItem className="item1">
            <div className="item_content">
              <div>起文会员</div>
              <ImgLogo></ImgLogo>
            </div>
          </ContentItem>
          <ContentItem className="item2">
            <div className="item_content">
              <div>优选连载</div>
              <ImgLogo2></ImgLogo2>
            </div>
          </ContentItem>
          <ContentItem className="item3">
            <div className="item_content">
              <div>起文版权</div>
              <ImgLogo3></ImgLogo3>
            </div>
          </ContentItem>
          <ContentItem className="item4">
            <div className="item_content">
              <div>起文学堂</div>
              <ImgLogo4></ImgLogo4>
            </div>
          </ContentItem>
        </Content>
        <List></List>
        <BackTop>回到顶部</BackTop>
        <Top>
          <Text_Top>
            关于起文 · 联系我们 · 加入我们 · 起文出版 · 品牌与徽标 · 帮助中心 ·
            合作伙伴
          </Text_Top>
        </Top>
      </div>
    )
  }
  componentDidMount() {
    this.props.changeHomeData()
  }
}
const mapDispatch = (dispatch) => ({
  changeHomeData() {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data
      const action = {
        type: 'change_home_data',
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList,
      }
      dispatch(action)
    })
  },
})

export default connect(null, mapDispatch)(Home)
