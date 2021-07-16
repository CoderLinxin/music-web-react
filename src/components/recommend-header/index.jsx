/* 推荐页面header组件 */

import React, { memo, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import {
  HeaderWrapper
} from './style'

const RecommendHeader = withRouter(memo(function (props) {
  const { title, keyWords, moreLink } = props

  return (
    <HeaderWrapper>
      {/* 标题 */}
      <div className={'left'}>
        <div className={'title'}>
          <div className={'icon sprite_02'}/>
          <h3 className={'titleIcon'}
              onClick={e => {console.log(window.location.href = moreLink)}}>
            {title}
          </h3>
        </div>

        {/* 关键词 */}
        <span className={'tab'}>
          {
            keyWords?.map((keyWord, index) => {
              return (
                <Fragment key={keyWord.key}>
                  <a href={keyWord.link}>{keyWord.key}</a>
                  {index !== keyWords.length - 1 && <span className={'divider'}>|</span>}
                </Fragment>
              )
            })
          }
        </span>
      </div>

      {/* 更多跳转 */}
      <div className={'right'}>
        <a href={moreLink}>更多</a>
        <span className={'arrow sprite_02'}/>
      </div>
    </HeaderWrapper>
  )
}))

RecommendHeader.propTypes = {
  title: PropTypes.string.isRequired,
  keyWords: PropTypes.array
}

RecommendHeader.defaultProps = {
  keyWords: []
}

export default RecommendHeader


