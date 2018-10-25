import React, { Component } from 'react';
import style from '../board/style.scss';
import Square from '@square';

class Board extends Component {

renderSquare(i) {
return( 
  <Square value={this.props.squares[i]} 
  onClick={() => 
                this.props.onClick(i)} 
  />
);
}

render() {

return (
<React.Fragment>
  <div className={style.status}>{status}</div>
    <div className={style.row}>
      {this.renderSquare(0)}
      {this.renderSquare(1)}
      {this.renderSquare(2)}
    </div>
    <div className={style.row}>
      {this.renderSquare(3)}
      {this.renderSquare(4)}
      {this.renderSquare(5)}
    </div>
    <div className={style.row}>
      {this.renderSquare(6)}
      {this.renderSquare(7)}
      {this.renderSquare(8)}
  </div>
</React.Fragment>
);
}
}




export default Board;
