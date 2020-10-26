import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BackTop } from 'antd'
import {
  DetailWrapper,
  Header,
  Content,
  ComTop,
  Comment,
  Button,
  BTN,
} from './style'
import { actionCreators } from './store'

class Detail extends Component {
  render() {
    return (
      <div>
        <DetailWrapper>
          <Header>{this.props.title}</Header>
          <Content dangerouslySetInnerHTML={{ __html: this.props.content }} />
          <BackTop>回到顶部</BackTop>
        </DetailWrapper>
        <ComTop>
          <Comment placeholder="写下你的评论"></Comment>
          <BTN>
            <Button>发布</Button>
            <Button>取消</Button>
          </BTN>
        </ComTop>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    )
  }
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id)
  }
}
const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content']),
})
const mapDispatch = (disptch) => ({
  getDetail(id) {
    disptch(actionCreators.getDetail(id))
  },
})

export default connect(mapState, mapDispatch, null)(Detail)
