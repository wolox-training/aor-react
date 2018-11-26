function calculateWinner(squares) {
  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (squares[a].key && squares[a].key === squares[b].key && squares[a].key === squares[c].key) {
      return squares[a].key;
    }
  }
  return null;
}

export default calculateWinner;
