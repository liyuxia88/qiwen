import React, { Component } from 'react'
import { ListItem, ListInfo, LoadMore } from './style'
import { connect } from 'react-redux'
import axios from 'axios'
import { fromJS } from 'immutable'
import { Link } from 'react-router-dom';
//import { actionCreator } from '../store'
class List extends Component {
  render () {
    const { list, getMoreList, page } = this.props
    return (
      <div>
        {
          list.map((item, index) => {
            return (
              <Link key={index} to={'/detail/' + item.get('id')}>
                <ListItem >
                  <img alt='' className='pic' src={item.get('imgUrl')} />
                  <ListInfo>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='desc'>{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            );
          })
        }
        <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
      </div>
    )
  }
}
const mapState = (state) => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage']),
})
const addHomeList = (list, nextPage) => ({
  type: 'ADD_LIST',
  list: fromJS(list),
  nextPage,
})
const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const result = res.data.data
      dispatch(addHomeList(result, page + 1))
    })
  }
}
const mapDispath = (dispatch) => ({
  getMoreList (page) {
    dispatch(getMoreList(page))
  },
})
export default connect(mapState, mapDispath)(List)
