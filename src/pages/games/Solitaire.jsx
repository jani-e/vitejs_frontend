const solitaireUrl = '/build/solitaire'

const Solitaire = () => {
  return (
    <iframe
      src={solitaireUrl}
      title='Solitaire'
      width={1000}
      height={1000}
    />
  )
}

export default Solitaire

//currently works only when run from server provided frontend