const formatDate = (dateWithTime) => {
  if (dateWithTime === '') {
    return '----년 --월 --일'
  }
  const date = dateWithTime.split(' ')[0].split('-')
  const yyyy = date[0]
  const mm = date[1][0] === '0' ? date[1][1] : date[1]
  const dd = date[2][0] === '0' ? date[2][1] : date[2]

  return `${yyyy}월 ${mm}월 ${dd}일`
}

const formatYearMonthDateDay = (dateWithEtc) => {
  const year = dateWithEtc.getFullYear()
  const month = dateWithEtc.getMonth() + 1
  const date = dateWithEtc.getDate()
  const day = dateWithEtc.getDay()

  return {year, month, date, day}
}

const getDateByType = (type) => {
  switch (type) {
    case 'year':
      return new Date().getFullYear()
    case 'month':
      return new Date().getMonth() + 1
    case 'date':
      return new Date().getDate()
  }
}

export {formatDate, formatYearMonthDateDay, getDateByType}
