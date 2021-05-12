import React, {useRef, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import qs from 'query-string'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import styles from './index.module.scss'

const MainSearch = (props) => {
  const {handleSearch} = props
  const inputRef = useRef()
  const location = useLocation()
  const query = qs.parse(location.search)

  useEffect(() => {
    inputRef.current.value = query.search == null ? '' : query.search
  }, [query.search])

  async function enterKey() {
    if (window.event.keyCode === 13) {
      await handleSearch(inputRef.current.value)
    }
  }

  return (
    <div className={styles.mainSearch}>
      <div className={styles.searchBox}>
        <input ref={inputRef} placeholder="검색어를 입력하세요" onKeyUp={enterKey} />
        <button onClick={() => handleSearch(inputRef.current.value)}>
          <FontAwesomeIcon icon={faSearch} className={styles.icon} />
        </button>
      </div>
    </div>
  )
}

export default MainSearch
