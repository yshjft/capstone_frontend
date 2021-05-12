import React from 'react'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import styles from './index.module.scss'

const Footer = (props) => {
  return (
    <div className={styles.footerLayout}>
      <div className={styles.footer}>
        <div className={styles.brand}>AlgoHub</div>
        <div className={styles.developers}>Developed by yshjft, bjh9379, yoojw1021, mung</div>
        <div className={styles.gitHubLinkArea}>
          <div className={styles.gitHubLinks}>
            <div className={styles.gitHubLink}>
              <FontAwesomeIcon icon={faGithub} />
              <a href="https://github.com/yshjft" className={styles.link}>
                {' '}
                yshjft's GitHub
              </a>
            </div>
            <div className={styles.gitHubLink}>
              <FontAwesomeIcon icon={faGithub} />
              <a href="https://github.com/bjh9379" className={styles.link}>
                {' '}
                bjh9379's GitHub
              </a>
            </div>
          </div>
          <div className={styles.gitHubLinks}>
            <div className={styles.gitHubLink}>
              <FontAwesomeIcon icon={faGithub} />
              <a href="https://github.com/mung" className={styles.link}>
                {' '}
                mung's GitHub
              </a>
            </div>
            <div className={styles.gitHubLink}>
              <FontAwesomeIcon icon={faGithub} />
              <a href="https://github.com/yoojw1021" className={styles.link}>
                {' '}
                yoojw1021's GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
