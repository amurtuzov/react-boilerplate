import './FetchLoader.scss'
const FetchLoader = (props: { color: string; size: string }) => {
  return <div className={`fetch-loader ${props.color} ${props.size}`} />
}

export default FetchLoader
