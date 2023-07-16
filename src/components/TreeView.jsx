import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const TreeView = ({pages, parent = null}) => {
  const filteredPages = pages.filter(page => page.parent === parent)
  if (filteredPages.length === 0) {
    return null
  }

  const listStyle = {
    listStyleType: 'none',
    paddingInlineStart: '15px' //change to 0px after lines logic
  }

  console.log(filteredPages.length - 1) // if last: &#x2517; ┗, otherwise &#x2523; ┣

  return (
    <ul style={listStyle}>
      {filteredPages.map(page => (
        <li key={page.id}>
          {page.parent !== null && <span>&#x2523; &#x2501; </span>}<Link to={page.name}>{page.name}</Link>
          {<TreeView pages={pages} parent={page.id} />}
        </li>
      ))}
    </ul>
  )
}

export default TreeView

TreeView.propTypes = {
  pages: PropTypes.array.isRequired,
  parent: PropTypes.number
}

/*
&#x2523; ┣
&#x2517; ┗
&#x2501; ━
&#x2503; ┃

TODO:
improve logic for the lines
linking is based on page.name -> doesn't work with submenu items, missing parent from path
*/