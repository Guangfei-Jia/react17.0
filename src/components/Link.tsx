/*
 * @Descripttion: 
 * @version: 
 * @Author: fei
 * @Date: 2021-11-23 14:16:22
 * @LastEditors: fei
 * @LastEditTime: 2021-11-23 14:16:22
 */
import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active="", children="", onClick=()=>{} }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a
      href=""
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link