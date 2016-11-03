import NavComp from '../home/NavComp';
import Board from '../dnd/Board';

var Main = {
	Data: {

	},
	Init: function () {
		this.Data.name = "Nguyen Duc Duyen";
	},
	Render: function () {
		ReactDOM.render(<NavComp />, document.getElementById('nav_comp'));
		ReactDOM.render(
			<div>
				<Board knightPosition={[1, 7]} />
			</div>
			,document.getElementById('body_comp'));
	}
}

// try {
	Main.Init();
	Main.Render();
// }
// catch(err) {
//     console.log(err);
// }