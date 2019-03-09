function createNewNode()
{
	addHTML();
	incrementNodeCount();

	function addHTML()
	{
		var nodesObject = document.getElementById("nodes");
		var nodesArr = nodesObject.getElementsByClassName("node");
		
		var lastNode = nodesArr[nodesArr.length - 1];
		var lastNodeClone = lastNode.cloneNode(true);		
		
		//document.getElementById('nodes').innerHTML += lastNodeClone.outerHTML;
		//flashOnCreation(lastNodeClone);
		
		nodesObject.appendChild(lastNodeClone);
		//flashOnCreation(lastNodeClone);
		
		// set new node's bg color to red; set penultimate node's bg color to blue
		setLastNodeRedAndSecondToLastBlue();
		
		function setLastNodeRedAndSecondToLastBlue()
		{
			lastNodeClone.getElementsByClassName("nodeheader")[0].style.backgroundColor = "red";
			lastNode.getElementsByClassName("nodeheader")[0].style.backgroundColor = "#2196F3";
		}
		
		/*
		function flashOnCreation(newNode)
		{
			var nodeHeader = newNode.getElementsByClassName("nodeheader")[0];
			var originalColor = nodeHeader.style.backgroundColor;
			var alertColor = "red";
			var millisecondDelay = 500;
			var numTimesFlash = 2;
			var i;
			
			changeColor(newNode, alertColor);
			
			//setTimeout(function() { changeColor(newNode, alertColor)   ; }, millisecondDelay);
			
			
			for (i = 0; i < numTimesFlash; ++i)
			{
				setTimeout(function() { changeColor(newNode, alertColor)   ; }, millisecondDelay);
				setTimeout(function() { changeColor(newNode, originalColor); }, millisecondDelay);
			}
			
			
			function changeColor(newNode, color)
			{
				nodeHeader.style.backgroundColor = color;
			}
		}
		*/
	}
	
	function incrementNodeCount()
	{
		document.getElementById("number_of_nodes").innerHTML
			= parseInt(document.getElementById("number_of_nodes").innerHTML, 10) + 1;
	}
}