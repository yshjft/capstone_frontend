import React, {useRef, useEffect} from 'react'
import {Button} from 'react-bootstrap'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useLocation} from 'react-router-dom'
import qs from 'query-string'

const MainSearch = (props) => {
  const {handleSearch} = props
  const inputRef = useRef()
  const location = useLocation()
  const query = qs.parse(location.search)

  useEffect(() => {
    inputRef.current.value = query.search == null ? '' : query.search
  }, [query.search])

  return (
    <div className="mainSearch">
      <input ref={inputRef} placeholder="검색어를 입력하세요" />
      <Button onClick={() => handleSearch(inputRef.current.value)} className="button">
        <FontAwesomeIcon icon={faSearch} />
      </Button>
    </div>
  )
}

export default MainSearch
