import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {MenuList, IMenuItem} from '@/util'
import styles from './home.less'

export class Home extends Component {
  render() {
    const mList = [{name: '酷炫3D', link: 'http://www.auoqu.com/heart/index.html', page: 'json', desc: 'JSON格式化', dateTime: '2017-01-30 19:30:20'}, ...MenuList]
    return (
      <div className={styles.home}>
        <section className={styles.description}>
          <h4>一个程序员</h4>
          <p>写过很多代码和Bug，攒了一些工程师小工具，有时候会很有用处哦✨✨✨</p>
        </section>
        <section className={styles.description}>
          <h4>写了几个小小前端工具</h4>
          <ul className={styles.toolList}>
            {mList
              .filter(item => item.page !== 'home')
              .map((item: any, index) => (
                <li key={index}>
                  <Link to={item.link}>{item.name}</Link>
                  <span className={styles.publishTime}>发布时间：{item.dateTime}</span>
                  <div className={styles.introduce}>{item.desc}</div>
                </li>
              ))}
          </ul>
        </section>
      </div>
    )
  }
}
