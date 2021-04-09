import React, {useState, useEffect} from 'react'
import {useLocation, useHistory} from 'react-router-dom'
import qs from 'query-string'
import {formatYearMonthDateDay} from '../../../lib/formatDate'
import CalenderForLog from '../../../components/CalenderForLog'
import styles from './index.module.scss'

const monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const yearList = [2021, 2022, 2023, 2024]

const UserPostLogPresenter = (props) => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const history = useHistory()
  const location = useLocation()
  const query = qs.parse(location.search)

  function handleYearChange(year) {
    query.year = year
    history.push({
      pathname: location.pathname,
      search: qs.stringify(query)
    })
    setSelectedYear(year)
  }

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
          <CalenderForLog key={index} year={selectedYear} month={month} />
        ))}
      </div>
    </div>
  )
}

export default UserPostLogPresenter
