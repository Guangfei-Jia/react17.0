/*
 * @Descripttion: 
 * @version: 
 * @Author: fei
 * @Date: 2021-11-23 14:20:29
 * @LastEditors: fei
 * @LastEditTime: 2021-11-23 14:20:30
 */
import { connect } from 'react-redux'
import { setVisibilityFilter } from '@/redux/actions'
import Link from '@/components/Link'

const mapStateToProps = (state:any, ownProps:any) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch:any, ownProps:any) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link as any)

export default FilterLink