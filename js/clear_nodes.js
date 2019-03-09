function clearNodes()
{
	var nodesObject = document.getElementById("nodes");
	nodesObject.innerHTML = nodesObject.getElementsByClassName("node")[0].outerHTML;
	
	resetCount();
	
	function resetCount()
	{
		document.getElementById("number_of_nodes").innerHTML = 1;
	}
}