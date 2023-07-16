import TreeView from "src/components/TreeView"

const pages = [
  { id: 1, name: 'Home', parent: null },
  { id: 2, name: 'About', parent: null },
  { id: 3, name: 'Games', parent: null },
  { id: 4, name: 'Page1', parent: 1 },
  { id: 5, name: 'Page2', parent: 1 },
  { id: 6, name: 'Me', parent: 2 },
  { id: 7, name: 'Solitaire', parent: 3 },
  { id: 8, name: 'TBA', parent: 3 },
  { id: 9, name: 'Content 1', parent: 4 },
  { id: 10, name: 'Content 2', parent: 4 },
  { id: 11, name: 'Service 1', parent: 5 },
]

const Footer = () => {
  return (
    <footer>
      <h3>FOOTER</h3>
      <TreeView pages={pages} />
    </footer>
  )
}

export default Footer

//todo: move pages array elsewhere, server/database?