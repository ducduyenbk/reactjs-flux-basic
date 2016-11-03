let knightPosition = [1, 7];
import Board from '../dnd/Board';

export function moveKnight(toX, toY) {
	knightPosition = [toX, toY];
	ReactDOM.render(
		<div>
			<Board knightPosition={[toX, toY]} />
		</div>
	,document.getElementById('body_comp'));
}

export function canMoveKnight(toX, toY) {

  	const x = knightPosition[0];
  	const y = knightPosition[1];
  	const dx = toX - x;
  	const dy = toY - y;

  	return 	(Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         	(Math.abs(dx) === 1 && Math.abs(dy) === 2);
}
