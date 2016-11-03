import NavComp from '../home/NavComp';
import ChessboardTutorialApp from '../dnd/Chessboard';
import DustbinMultipleTarget from '../dnd/Dustbin/MultipleTargets';
import SingleTarget from '../dnd/Dustbin/SingleTarget';
import DustbinStressTest from '../dnd/Dustbin/StressTest';
import DragAroundCustomDragLayer from '../dnd/DragAround/CustomDragLayer';
import DragAroundNaive from '../dnd/DragAround/Naive';
import NestingDragSources from '../dnd/Nesting/DragSources';
import NestingDropTargets from '../dnd/Nesting/DropTargets';
import SortableCancelOnDropOutside from '../dnd/Sortable/CancelOnDropOutside';
import SortableSimple from '../dnd/Sortable/Simple';
import SortableStressTest from '../dnd/Sortable/StressTest';
import CustomizeDropEffects from '../dnd/Customize/DropEffects';
import CustomizeHandlesAndPreviews from '../dnd/Customize/HandlesAndPreviews';

import './index.dnd.css';

import React, { Component } from 'react';
class BodyComp extends Component {

	constructor(props) {
		super(props)
		this.state = {
            tabSelect: 1
        };
	}

    tabChanged(tab) {
    	this.setState({
    		tabSelect: tab
    	});
    }

	render() {
		let tab = this.state.tabSelect;
		let divTitle = null;
		let divContent = null;
		switch(tab){

			case 1:{
				divTitle = <h2>1. ChessboardTutorialApp</h2>;
				divContent = <ChessboardTutorialApp />;
				break;
			}
			case 2:{
				divTitle = <h2>2. DustbinMultipleTarget</h2>;
				divContent = <DustbinMultipleTarget />;
				break;
			}
			case 3:{
				divTitle = <h2>3. SingleTarget</h2>;
				divContent = <SingleTarget />;
				break;
			}
			case 4:{
				divTitle = <h2>4. DustbinStressTest</h2>;
				divContent = <DustbinStressTest />;
				break;
			}
			case 5:{
				divTitle = <h2>5. DragAroundCustomDragLayer</h2>;
				divContent = <DragAroundCustomDragLayer />;
				break;
			}
			case 6:{
				divTitle = <h2>6. DragAroundNaive</h2>;
				divContent = <DragAroundNaive />;
				break;
			}
			case 7:{
				divTitle = <h2>7. NestingDragSources</h2>;
				divContent = <NestingDragSources />;
				break;
			}
			case 8:{
				divTitle = <h2>8. NestingDropTargets</h2>;
				divContent = <NestingDropTargets />;
				break;
			}
			case 9:{
				divTitle = <h2>9. SortableCancelOnDropOutside</h2>;
				divContent = <SortableCancelOnDropOutside />;
				break;
			}
			case 10:{
				divTitle = <h2>10. SortableSimple</h2>;
				divContent = <SortableSimple />;
				break;
			}
			case 11:{
				divTitle = <h2>11. SortableStressTest</h2>;
				divContent = <SortableStressTest />;
				break;
			}
			case 12:{
				divTitle = <h2>12. CustomizeDropEffects</h2>;
				divContent = <CustomizeDropEffects />;
				break;
			}
			case 13:{
				divTitle = <h2>13. CustomizeHandlesAndPreviews</h2>;
				divContent = <CustomizeHandlesAndPreviews />;
				break;
			}
		}

		return (
			<div className="row">
				<div className="col-xs-3">
					<ul>
						<li className={(tab==1)?'active':''}><a onClick={this.tabChanged.bind(this, 1)}>1. ChessboardTutorialApp</a></li>
						<li className={(tab==2)?'active':''}><a onClick={this.tabChanged.bind(this, 2)}>2. DustbinMultipleTarget</a></li>
						<li className={(tab==3)?'active':''}><a onClick={this.tabChanged.bind(this, 3)}>3. SingleTarget</a></li>
						<li className={(tab==4)?'active':''}><a onClick={this.tabChanged.bind(this, 4)}>4. DustbinStressTest</a></li>
						<li className={(tab==5)?'active':''}><a onClick={this.tabChanged.bind(this, 5)}>5. DragAroundCustomDragLayer</a></li>
						<li className={(tab==6)?'active':''}><a onClick={this.tabChanged.bind(this, 6)}>6. DragAroundNaive</a></li>
						<li className={(tab==7)?'active':''}><a onClick={this.tabChanged.bind(this, 7)}>7. NestingDragSources</a></li>
						<li className={(tab==8)?'active':''}><a onClick={this.tabChanged.bind(this, 8)}>8. NestingDropTargets</a></li>
						<li className={(tab==9)?'active':''}><a onClick={this.tabChanged.bind(this, 9)}>9. SortableCancelOnDropOutside</a></li>
						<li className={(tab==10)?'active':''}><a onClick={this.tabChanged.bind(this, 10)}>10. SortableSimple</a></li>
						<li className={(tab==11)?'active':''}><a onClick={this.tabChanged.bind(this, 11)}>11. SortableStressTest</a></li>
						<li className={(tab==12)?'active':''}><a onClick={this.tabChanged.bind(this, 12)}>12. CustomizeDropEffects</a></li>
						<li className={(tab==13)?'active':''}><a onClick={this.tabChanged.bind(this, 13)}>13. CustomizeHandlesAndPreviews</a></li>
					</ul>
				</div>
				<div className="col-xs-9">
					{divTitle}
					<hr/>
					{divContent}
				</div>				
			</div>
		);
	}
}

var Main = {
	Data: {

	},
	Init: function () {
		this.Data.name = "Nguyen Duc Duyen";
	},
	Render: function () {
		ReactDOM.render(<NavComp />, document.getElementById('nav_comp'));
		ReactDOM.render(
			<BodyComp />
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