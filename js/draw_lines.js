
// Draws an SVG arrow from the position of the given element to the cursor,
// stopping and connecting the outlet and the inlet
// when the mouse is clicked on another node's inlet.
// ESC to cancel.

// Or.. just doesn't for now and awaits an inlet object to be clicked.
function drawLineToCursor(outlet)
{
	var outletBoundingRect = outlet.getBoundingClientRect();
	var outletX = (outletBoundingRect.left + outletBoundingRect.right) / 2;
	var outletY = (outletBoundingRect.top + outletBoundingRect.bottom) / 2;
	
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
		
		var nodesIterable = document.getElementById("nodes").getElementsByClassName("node");
		var i;
		for (i = 0; i < nodesIterable.length; ++i)
		{
			var inlet = nodesIterable[i].getElementsByClassName("inlet")[0];
			var inletBoundingRect = inlet.getBoundingClientRect();
			var inletX = (inletBoundingRect.left + inletBoundingRect.right) / 2;
			var inletY = (inletBoundingRect.top + inletBoundingRect.bottom) / 2;
			
			// nodesIterable[i].onclick = drawArrow(outletX, outletY, inletX, inletY);
			
			// we need to fix the Y problem
			// the Y is offset by the SVG not being the entire page
			// so we need to subtract out the offset
			var offsetFromTop = document.getElementById("canvas").getBoundingClientRect().top;
			console.log(offsetFromTop);
			inlet.onclick = drawArrow(outletX, outletY - offsetFromTop, inletX, inletY - offsetFromTop);
		}
	}
	
	function removeOnClickDrawArrowTo_ForAllInlets()
	{
	}
	
	function drawArrow(startX, startY, endX, endY)
	{
		// code to draw SVG arrow from pos "start" to pos "end"
		
		// insertAdjacentHTML("afterend",
		// '<line x1="0" y1="0" x2="0" y2="0" style="stroke:rgb(255,0,0);stroke-width:2" />');

		
		/*
		var line = document.getElementById("canvas").appendChild("line");
		
		var ax1 = document.createAttribute("x1");
		var ay1 = document.createAttribute("y1");
		var ax2 = document.createAttribute("x2");
		var ay2 = document.createAttribute("y2");
		
		ax1.value = "0";
		ay1.value = "0";
		ax2.value = "0";
		ay2.value = "0";
		
		line.setAttributeNode(ax1);
		line.setAttributeNode(ay1);
		line.setAttributeNode(ax2);
		line.setAttributeNode(ay2);
		
		line.attributes[1].value = startX.toString(); // x1
		line.attributes[2].value = startY.toString(); // y1
		line.attributes[3].value = endX.toString();   // x2
		line.attributes[4].value = endY.toString();   // y2
		
		*/
		
		var line = document.getElementById("test_line");
		
		line.attributes[1].value = startX.toString(); // x1
		line.attributes[2].value = startY.toString(); // y1
		line.attributes[3].value = endX.toString();   // x2
		line.attributes[4].value = endY.toString();   // y2
		
		// afterwards, remove the listeners from all inlets
		removeOnClickDrawArrowTo_ForAllInlets();
	}
}