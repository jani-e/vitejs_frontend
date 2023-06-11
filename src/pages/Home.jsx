const Home = () => {
  const style = {
    backgroundColor: 'lightgray'
  }
  return (
    <div style={style}>
      <h2>Home</h2>
      <svg height='80' width='200'>
        <text x={0} y={15} fill='red' transform='rotate(30 20,40)'>Rotated SVG text</text>
      </svg>
    </div>
  )
}

export default Home