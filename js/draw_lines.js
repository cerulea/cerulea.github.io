// This function is called when an outlet is clicked.
// It draws a line between the outlet and the mouse and redraws it every time the mouse moves.
function initLineFollowMouse(outlet)
{
	var mousePosX;
	var mousePosY;
	document.getElementById("canvas").onmousemove = handleMouseMove;
	
	var outletBoundingRect = outlet.getBoundingClientRect();
	var outletX = (outletBoundingRect.left + outletBoundingRect.right) / 2;
	var outletY = (outletBoundingRect.top + outletBoundingRect.bottom) / 2;
	
	console.log("Outlet clicked, awaiting an inlet from another node to be clicked");
	
	setInterval( function() { drawLine(outletX, outletY, mousePosX, mousePosY); }, 100);
}


// Awaits an inlet object other than the inlet with the same parent as the outlet passed in to be clicked.
// When clicked, draws a line between the outlet and the inlet.
// TO-DO: draw an arrow instead.
// TO-DO: store the connection as an edge in a directed graph.
function awaitClickOnInletAndDrawLine(outlet)
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
	
	addOnClickDrawLineTo_ForAllInlets(outlet);
}

function addOnClickDrawLineTo_ForAllInlets(outlet)
{
	var nodesIterable = document.getElementById("nodes").getElementsByClassName("node");
	var i;
	for (i = 0; i < nodesIterable.length; ++i)
	{
		var inlet = nodesIterable[i].getElementsByClassName("inlet")[0];
		var inletBoundingRect = inlet.getBoundingClientRect();
		var inletX = (inletBoundingRect.left + inletBoundingRect.right) / 2;
		var inletY = (inletBoundingRect.top + inletBoundingRect.bottom) / 2;
		
		// we need to fix the Y problem
		// the Y is offset by the SVG not being the entire page
		// so we need to subtract out the offset
		if (outlet.parentNode != inlet.parentNode) // disallow node outlet connecting to its own inlet
		{
			inlet.onclick = drawLine(outletX, outletY, inletX, inletY);
		}
	}
}

function removeOnClickDrawLineTo_ForAllInlets()
{
	var nodesIterable = document.getElementById("nodes").getElementsByClassName("node");
	var i;
	for (i = 0; i < nodesIterable.length; ++i)
	{
		var inlet = nodesIterable[i].getElementsByClassName("inlet")[0];
		inlet.onclick = null;
	}
}

// This function factors in the offset of the svg element from the top of the page
// into the calculation for drawing a line from the start point to the end point.
function drawLine(startX, startY, endX, endY)
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
	
	var offsetFromTop = document.getElementById("canvas").getBoundingClientRect().top;
	startY -= offsetFromTop;
	endY -= offsetFromTop;
	
	var line = document.getElementById("test_line");
	
	line.attributes[1].value = startX.toString(); // x1
	line.attributes[2].value = startY.toString(); // y1
	line.attributes[3].value = endX.toString();   // x2
	line.attributes[4].value = endY.toString();   // y2
	
	// afterwards, remove the listeners from all inlets
	removeOnClickDrawLineTo_ForAllInlets();
}

function handleMouseMove(event)
{
	// Taken from StackOverflow
	
	var eventDoc, doc, body;

	event = event || window.event; // IE-ism

	// If pageX/Y aren't available and clientX/Y are,
	// calculate pageX/Y - logic taken from jQuery.
	// (This is to support old IE)
	if (event.pageX == null && event.clientX != null)
	{
		eventDoc = (event.target && event.target.ownerDocument) || document;
		doc = eventDoc.documentElement;
		body = eventDoc.body;

		event.pageX = event.clientX +
		  (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
		  (doc && doc.clientLeft || body && body.clientLeft || 0);
		event.pageY = event.clientY +
		  (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
		  (doc && doc.clientTop  || body && body.clientTop  || 0 );
	}
	
	// Use event.pageX / event.pageY here
	mousePosX = event.pageX;
	mousePosY = event.pageY;
	
	console.log(mousePosX + "asdfas");
	console.log(mousePosY + "asdsafd");
}