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
				<h2>1. ChessboardTutorialApp</h2>
				<ChessboardTutorialApp />
				<hr/>

				<h2>2. DustbinMultipleTarget</h2>
				<DustbinMultipleTarget />
				<hr/>

				<h2>3. SingleTarget</h2>
				<SingleTarget />
				<hr/>

				<h2>4. DustbinStressTest</h2>
				<DustbinStressTest />
				<hr/>

				<h2>5. DragAroundCustomDragLayer</h2>
				<DragAroundCustomDragLayer />
				<hr/>

				<h2>6. DragAroundNaive</h2>
				<DragAroundNaive />
				<hr/>

				<h2>7. NestingDragSources</h2>
				<NestingDragSources />
				<hr/>

				<h2>8. NestingDropTargets</h2>
				<NestingDropTargets />
				<hr/>

				<h2>9. SortableCancelOnDropOutside</h2>
				<SortableCancelOnDropOutside />
				<hr/>

				<h2>10. SortableSimple</h2>
				<SortableSimple />
				<hr/>

				<h2>11. SortableStressTest</h2>
				<SortableStressTest />
				<hr/>

				<h2>12. CustomizeDropEffects</h2>
				<CustomizeDropEffects />
				<hr/>

				<h2>13. CustomizeHandlesAndPreviews</h2>
				<CustomizeHandlesAndPreviews />
				<hr/>
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