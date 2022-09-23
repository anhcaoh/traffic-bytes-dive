const transformData = (text: string) => {
  return text?.replaceAll('\n',',')
}
export default transformData