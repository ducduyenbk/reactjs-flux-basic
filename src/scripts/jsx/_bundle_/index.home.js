import NavComp from '../home/NavComp';
import TopComp from '../home/TopComp';
import ListComp from '../home/ListComp';
import RightComp from '../home/RightComp';
import CartComp from '../home/CartComp';

var Main = {
	Data: {

	},
	Init: function () {
		this.Data.name = "Nguyen Duc Duyen";
	},
	Render: function () {
		ReactDOM.render(<NavComp />, document.getElementById('nav_comp'));
		ReactDOM.render(<TopComp />, document.getElementById('top_comp'));
		ReactDOM.render(<ListComp />, document.getElementById('list_comp'));
		ReactDOM.render(<RightComp />, document.getElementById('right_comp'));
		ReactDOM.render(<CartComp />, document.getElementById('cart_comp'));
	}
}

// try {
	Main.Init();
	Main.Render();
// }
// catch(err) {
//     console.log(err);
// }