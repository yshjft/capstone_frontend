import React, {useState, useEffect} from 'react'
import {formatYearMonthDateDay, getDateByType} from '../../lib/formatDate'
import {faSquare as normal} from '@fortawesome/free-regular-svg-icons'
import {faSquare as solid, faCheckSquare as check} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import styles from './index.module.scss'

const CalenderForLog = (props) => {
  const {year, month} = props
  const [weekList, setWeekList] = useState([])

  useEffect(() => {
    const endOfMonth = formatYearMonthDateDay(new Date(year, month, 0))
    let weekList = []

    let week = []
    for (let i = 1; i <= endOfMonth.date; i++) {
      const date = formatYearMonthDateDay(new Date(year, month - 1, i))
      week.push(date)
      if (date.day === 6 || date.date === endOfMonth.date) {
        weekList.push(week)
        week = []
      }
    }

    const firstWeek = weekList[0].concat()
    const lastWeek = weekList[weekList.length - 1].concat()
    if (firstWeek.length !== 7 || lastWeek.length !== 7) {
      const numOfLack = 7 - firstWeek.length
      let vacant = []
      for (let i = 0; i < numOfLack; i++) {
        vacant.push(null)
      }
      weekList[0] = vacant.concat(firstWeek)
    }
    setWeekList(weekList)
  }, [year, month])

  return (
    <div className={styles.calenderLayout}>
      <div className={getDateByType('month') === month ? styles.todayMonth : styles.month}>{month}</div>
      <div className={styles.weekArea}>
        <div>
          {weekList.map((week, weekListIndex) => (
            <div key={weekListIndex} className={styles.week}>
              {week.map((day, dayIndex) => {
                return day === null ? (
                  <FontAwesomeIcon key={dayIndex} icon={solid} className={styles.vacant} />
                ) : (
                  <FontAwesomeIcon
                    key={dayIndex}
                    icon={normal}
                    className={
                      getDateByType('year') === day.year &&
                      getDateByType('month') === day.month &&
                      getDateByType('date') === day.date
                        ? styles.todayIcon
                        : styles.icon
                    }
                  />
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CalenderForLog
