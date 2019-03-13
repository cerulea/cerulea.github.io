function initFloat()
{
	var mousePosX, mousePosY;
	var circle = document.getElementById("circle");
	document.onmousemove = handleMouseMove;

	setInterval( function() { moveTo(circle, mousePosX, mousePosY); }, 10);
	
	// Moves the element closer to the speicified position.
	// Precondition:: the element's x is in attributes[1],
	// and the element's y is in attributes[2]
    function moveTo(elem, posX, posY)
	{
		//console.log("x: " + elem.attributes[1].value + ", y: " + elem.attributes[2].value);
		//console.log(parseInt(elem.attributes[1].value, 10) + 1);
		
		// why don't these work?
		
		/*
		if (elem.attributes[1].value < posX)
		{
			elem.atrributes[1].value = parseInt(elem.attributes[1].value, 10) + 1;
		}
		else if (elem.attributes[1].value > posX)
		{
			elem.atrributes[1].value = parseInt(elem.attributes[1].value, 10) - 1;
		}
		
		if (elem.attributes[2].value < posY)
		{
			elem.atrributes[2].value = parseInt(elem.attributes[2].value, 10) + 1;
		}
		else if (elem.attributes[2].value > posX)
		{
			elem.atrributes[2].value = parseInt(elem.attributes[2].value, 10) - 1;
		}
		*/
		
		/*
		if (elem.attributes[1].value < posX)
		{
			elem.atrributes[1].value = (parseInt(elem.attributes[1].value, 10) + 1).toString();
		}
		else if (elem.attributes[1].value > posX)
		{
			elem.atrributes[1].value = (parseInt(elem.attributes[1].value, 10) - 1).toString();
		}
		
		if (elem.attributes[2].value < posY)
		{
			elem.atrributes[2].value = (parseInt(elem.attributes[2].value, 10) + 1).toString();
		}
		else if (elem.attributes[2].value > posX)
		{
			elem.atrributes[2].value = (parseInt(elem.attributes[2].value, 10) - 1).toString();
		}
		*/
		
		elem.attributes[1].value =
			elem.attributes[1].value < posX
				? parseInt(elem.attributes[1].value, 10) + 1
				: (elem.attributes[1].value > posX ? parseInt(elem.attributes[1].value, 10) - 1 : elem.attributes[1].value);
			
		elem.attributes[2].value =
			elem.attributes[2].value < posY
				? parseInt(elem.attributes[2].value, 10) + 1
				: (elem.attributes[2].value > posY ? parseInt(elem.attributes[2].value, 10) - 1 : elem.attributes[2].value);
		
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
    }
}