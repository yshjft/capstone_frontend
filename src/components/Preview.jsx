import React from 'react'
import {Badge, Card} from 'react-bootstrap'
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Preview = (props) => {
  return (
    <div className="preview">
      <Card>
        <Card.Header>BOJ 1000 - 알고리즘 문제</Card.Header>
        <Card.Body>
          <div>
            <span className="date">2021월 3월 18일</span>
            <span className="like">
              <FontAwesomeIcon icon={faThumbsUp} className="icon" />
              <span>20</span>
            </span>
          </div>
          <Badge variant="primary">JAVA</Badge>
          <div className="date">by yshjft</div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Preview
