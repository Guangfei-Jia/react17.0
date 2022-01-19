/*
 * @Descripttion: 
 * @version: 
 * @Author: fei
 * @Date: 2021-11-23 14:16:55
 * @LastEditors: fei
 * @LastEditTime: 2021-11-23 14:16:55
 */
import React from 'react'
import FilterLink from './containers/FilterLink'

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
)

export default Footer