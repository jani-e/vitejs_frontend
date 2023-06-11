const PageOne = () => {
  const style = {
    backgroundColor: 'gray'
  }
  return (
    <div style={style}>
      <p>Page 1</p>
      <svg height='80' width='200'>
        <text x={0} y={15} fill='red' transform='rotate(30 20,40)'>Rotated SVG text</text>
      </svg>
    </div>
  )
}

export default PageOne