import * as constants from "./constants"
import axios from "axios"
import { fromJS } from "immutable"

const changeList = (data) => ({
  type: constants.CHANG_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})
export const searchFocus = () => ({
  type: constants.search_focus
})
//函数返回一个对象
export const searchBlur = () => ({
  type: constants.search_blur
})

export const mouseEnter = () => ({
  type: constants.mouse_Enter
})
export const mouseLeave = () => ({
  type: constants.mouse_Leave
})
export const changePage = (page) => ({
  type: constants.change_Page, page
})

//函数返回一个函数，在函数中做一个异步请求
export const getList = () => {
  return (dispatch) => {
    axios.get("/api/headerList.json").then((res) => {
      const data = res.data;
      dispatch(changeList(data.data));

    }).catch(() => {
      console.log("error")
    })
  }
}