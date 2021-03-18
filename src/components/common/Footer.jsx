import React from 'react'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Footer = (props) => {
  return (
    <div className="footerLayout">
      <div className="footer">
        <div className="brand">AlgoHub</div>
        <div className="madeBy">develop by yshjft & bjh9397</div>
        <div>
          <FontAwesomeIcon icon={faGithub} />
          <a href="https://github.com/yshjft" className="link">
            {' '}
            yshjft's GitHub
          </a>
        </div>
        <div>
          <FontAwesomeIcon icon={faGithub} />
          <a href="https://github.com/yshjft" className="link">
            {' '}
            bjh9397's GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
