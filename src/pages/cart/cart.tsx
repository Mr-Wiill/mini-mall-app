import { Component } from 'react'
import Taro from '@tarojs/taro'


export default class Index extends Component {

    componentWillMount () { }
  
    componentDidMount () { }
  
    componentWillUnmount () { }
  
    componentDidShow () {
      const page = Taro.getCurrentPages()[0]
      if (typeof page.getTabBar === 'function' && page.getTabBar()) {
        page.setData({
          selected: 1
        })
      }
    }
  
    componentDidHide () { }
  
    render () {
      return (
          <view>购物车</view>
      )
    }
  }