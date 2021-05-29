import React from  'react'
import styles from './index.module.scss'

const LanguageFilter = (props) => {
    const {selectedLang, handleLanguageFilter} = props
    const languages = [{language: 'C', value: 'c'}, {language: 'C++', value:'cpp'}, {language: 'C#', value: 'csharp'}, {language: 'Python', value:'python'}, {language: 'Java', value: 'java'}, {language: 'JavaScript', value: 'javascript'}, {language: 'Ruby', value: 'ruby'}, {language: 'Kotlin', value: 'kotlin'}, {language: 'Swift', value: 'swift'}]

    return (
        <div className={styles.languages}>
            {languages.map((obj, index) => <div key={index} onClick={()=>handleLanguageFilter(obj.value)} className={selectedLang.includes(obj.value)? styles.languageSelected : styles.language}>{obj.language}</div>)}
        </div>
    )
}

export default LanguageFilter