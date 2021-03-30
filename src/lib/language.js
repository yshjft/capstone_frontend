const language = (value) => {
  switch (value) {
    case 'c':
      return 'C'
    case 'cpp':
      return 'C++'
    case 'csharp':
      return 'C#'
    case 'python':
      return 'Python'
    case 'java':
      return 'Java'
    case 'javascript':
      return 'JavaScript'
    case 'ruby':
      return 'Ruby'
    case 'kotlin':
      return 'Kotlin'
    case 'swift':
      return 'Swift'
    case 'golang':
      return 'Go'
    default:
      return '?'
  }
}

export default language
