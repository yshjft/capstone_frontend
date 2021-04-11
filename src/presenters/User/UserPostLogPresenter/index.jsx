import React, {useState, useEffect} from 'react'
import {useLocation, useHistory} from 'react-router-dom'
import qs from 'query-string'
import {formatYearMonthDateDay, getDateByType} from '../../../lib/formatDate'
import CalenderForLog from '../../../components/CalenderForLog'
import styles from './index.module.scss'

const monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const UserPostLogPresenter = (props) => {
  const {userInfo, postLog, selectedYear, handleYearChange} = props
  const [yearList, setYearList] = useState([])
  const [postLogSet, setPostLogSet] = useState()

  useEffect(() => {
    const joinYear = new Date(userInfo.createdAt).getFullYear()
    const recentActiveYear = new Date(userInfo.lastPostCreatedAt).getFullYear()
    const yearsAfterJoin = []

    for (let i = joinYear; i <= recentActiveYear; i++) yearsAfterJoin.push(i)
    setYearList(yearsAfterJoin)
  }, [userInfo])

  useEffect(() => {
    const postLogSet = new Set()
    postLog.forEach((log) => {
      const dateObj = formatYearMonthDateDay(new Date(log.createdAt))
      postLogSet.add(`${dateObj.year}-${dateObj.month}-${dateObj.date}`)
    })
    setPostLogSet(postLogSet)
  }, [postLog])

  return (
    <div className={styles.userPostLogArea}>
      <div className={styles.yearArea}>2021</div>
      <div className={styles.yearSelectedArea}>
        {yearList.map((year, index) => (
          <div
            key={index}
            onClick={() => handleYearChange(year)}
            className={selectedYear === year ? styles.yearSelectedTag : styles.yearTag}
          >
            {year}
          </div>
        ))}
      </div>
      <div className={styles.calenderArea}>
        {monthList.map((month, index) => (
          <CalenderForLog key={index} year={selectedYear} month={month} postLogSet={postLogSet} />
        ))}
      </div>
    </div>
  )
}

export default UserPostLogPresenter
