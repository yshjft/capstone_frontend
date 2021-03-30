const formatDate = (dateWithTime) => {
  const date = dateWithTime.split(' ')[0].split('-')
  const yyyy = date[0]
  const mm = date[1][0] === '0' ? date[1][1] : date[1]
  const dd = date[2][0] === '0' ? date[2][1] : date[2]

  return `${yyyy}월 ${mm}월 ${dd}일`
}

export default formatDate
