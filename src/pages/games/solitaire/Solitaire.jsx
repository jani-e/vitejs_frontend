const Solitaire = () => {

  return (
    <div>
      <h2>Solitaire</h2>
      <svg width={100} height={150}>
        <rect width={100} height={150} rx={15} fill="orange"/>
        <text x={80} y={20} fill="white">9</text>
        <text x={5} y={140} fill="white">9</text>
        <text x={5} y={20} fill="white">♥</text>
        <text x={80} y={140} fill="white">♥</text>
      </svg>
    </div>
  )
}

/*
todo / things to consider
 - can svg be dragged and moved like in solitaire game?
   - card needs to be draggable
   - card should move with the user's cursor when dragged
   - cards should have fixed places
 - game code logic
   - tracking where cards are
   - double click card logic
   - hidden card / reveal card
   - deck
 - move card svg/image to assets or components?
*/

export default Solitaire