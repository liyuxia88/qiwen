import { fromJS } from "immutable"
const defaultState = fromJS({
  articleList: [],
  artclePage: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case "change_home_data":
      return state.merge({
        articleList: fromJS(action.articleList)
      })
    case "ADD_LIST":
      return state.merge({
        "articleList": state.get("articleList").concat(action.list),
        "artclePage": action.nextPage
      })

    default:
      return state
  }
}