import React from "react"
import "./font/iconfont.css"
import { connect } from "react-redux"
import { CSSTransition } from "react-transition-group"
import * as actionCreators from "./store/actionCreators"
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import {
  HeaderWrapper, Logo, Nav, NavItem, Search, NavSearch, Addition, Button, SearchInfo,
  SearchInfoTitle, SearchInfoSwitch, SearchInfoItem
} from "./style"



class Header extends React.Component {
  getListArea () {
    const { focus, list, page, mouseIn, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
    const newList = list.toJS();
    const pageList = [];
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }

    if (focus || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>热门搜索
          <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage)}>
              <i className="iconfont spin">&#xe600;</i>换一批
              </SearchInfoSwitch>
          </SearchInfoTitle>
          <div>
            {pageList}
          </div>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render () {
    const { InputFocus, InputBlur, focus, list, login, logout } = this.props
    return (
      <div>
        <HeaderWrapper>
          <Logo href="/"></Logo>
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载App</NavItem>
            {
              login ?
                <NavItem className="right" onClick={logout}>退出</NavItem> :
                <NavItem className="right"><a href="/login">登录</a></NavItem>
            }
            <NavItem className="right">
              <i className="iconfont">&#xe636;</i>
            </NavItem>
            <Search>
              <CSSTransition
                in={focus}
                timeout={200}
                classNames="slide"
              >
                <NavSearch className={focus ? "focus" : ""} onFocus={() => InputFocus(list)} onBlur={InputBlur}>
                </NavSearch>
              </CSSTransition>
              {/* props.focus判断是否聚焦 */}
              <i className={focus ? "focus iconfont zoom" : "iconfont zoom"}>&#xe60b;</i>
              {this.getListArea()}
            </Search>

            <Addition>
              <Button className="reg">注册</Button>
              <a href="/write">
                <Button className="writting">
                  <i className="iconfont">&#xe615;</i>写文章</Button>
              </a>
            </Addition>
          </Nav>

        </HeaderWrapper>
      </div >
    )

  }

}

const mapStateToProps = (state) => {
  return {
    focus: state.getIn(["header", "focus"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    totalPage: state.getIn(["header", "totalPage"]),
    login: state.getIn(["login", "login"])
  }
}
const mapDispathToProps = (dispatch) => {
  return {
    InputFocus (list) {
      if (list.size === 0) {
        dispatch(actionCreators.getList())
      }

      dispatch(actionCreators.searchFocus())
    },
    InputBlur () {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter () {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave () {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage (page, totalPage) {
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    },
    logout () {
      dispatch(loginActionCreators.logout())
    }

  }
}
export default connect(mapStateToProps, mapDispathToProps)(Header) 