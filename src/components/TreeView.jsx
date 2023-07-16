import PropTypes from 'prop-types'

const TreeView = ({pages, parent = null}) => {
  const filteredPages = pages.filter(page => page.parent === parent)
  if (filteredPages.length === 0) {
    return null
  }
  return (
    <ul>
      {filteredPages.map(page => (
        <li key={page.id}>
          {page.name}
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