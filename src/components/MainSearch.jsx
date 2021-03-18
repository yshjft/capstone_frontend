import React from 'react'
import {Button} from 'react-bootstrap'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const MainSearch = (props) => {
  return (
    <div className="mainSearch">
      <input placeholder="검색어를 입력하세요" />
      <Button className="button">
        <FontAwesomeIcon icon={faSearch} />
      </Button>
    </div>
  )
}

export default MainSearch
