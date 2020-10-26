import * as constants from "./constants"
import { fromJS } from "immutable"
const defaultState = fromJS({
  focus: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
})

export default (state = defaultState, action) => {
  if (action.type === constants.search_focus) {
    //immutable对象的set方法，会结合之前的immutable对象的值
    //和设置的值，返回一个全新的对象
    return state.set("focus", true)
  }
  if (action.type === constants.search_blur) {
    return state.set("focus", false)
  }
  if (action.type === constants.CHANG_LIST) {
    return state.set("list", action.data).merge({
      list: action.data,
      totalPage: action.totalPage
    })
  }
  if (action.type === constants.mouse_Enter) {
    return state.set("mouseIn", true)
  }
  if (action.type === constants.mouse_Leave) {
    return state.set("mouseIn", false)
  }
  if (action.type === constants.change_Page) {
    return state.set("page", action.page)
  }
  return state;
}