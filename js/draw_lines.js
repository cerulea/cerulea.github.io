
// Draws an SVG arrow from the position of the given element to the cursor,
// stopping and connecting the outlet and the inlet
// when the mouse is clicked on another node's inlet.
// ESC to cancel.

// Or.. just doesn't for now and awaits an inlet object to be clicked.
function drawLineToCursor(the_outlet)
{
	var outlet_rect = the_outlet.getBoundingClientRect();
	// console.log(outlet_rect.top, outlet_rect.right, outlet_rect.bottom, outlet_rect.left);
	console.log("Outlet clicked, awaiting an inlet from another node to be clicked");
	
	// Dynamically add event listeners to all node outlets? Time complexity O(n)... not that good
	// But let's not worry about scalability for now.
	//
	// loop over all inlets, adding an event listener onclick that draws an arrow (SVG?)
	// from the selected outlet's position to the inlet's position, and when done, removes all event listeners.
	//
	// also in some auxilliary data structure(s), [such as an adjacency list implementation]
	// record the link between the nodes as an edge in a directed graph.
	// This is useful for saving/loading.
	
	addOnClickDrawArrowTo_ForAllInlets();
	
	function addOnClickDrawArrowTo_ForAllInlets()
	{
		// add something like: drawArrrow(outlet_rect, inlet.position) to all inlets' onclick
		
	}
	
	function removeOnClickDrawArrowTo_ForAllInlets()
	{
	}
	
	function drawArrow(start, end)
	{
		// code to draw SVG arrow from pos "start" to pos "end"
		// ...<code>...
		
		// afterwards, remove the listeners from all inlets
		removeOnClickDrawArrowTo_ForAllInlets();
	}
}