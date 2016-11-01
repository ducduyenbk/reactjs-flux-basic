import HomeComp from '../home/HomeComp';

var Main = {
	Data: {

	},
	Init: function () {
		this.Data.name = "Nguyen Duc Duyen";
	},
	Render: function () {
		const app = document.getElementById('page-content');
		ReactDOM.render(<HomeComp Data={this.Data}/>, app);
	}
}

// try {
	Main.Init();
	Main.Render();
// }
// catch(err) {
//     console.log(err);
// }