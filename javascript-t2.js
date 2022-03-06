dragElement(document.getElementById("dragc1",));
dragElement(document.getElementById("dragc2",));
dragElement(document.getElementById("dragc3",));
dragElement(document.getElementById("dragc4",));
dragElement(document.getElementById("dragc5",));
dragElement(document.getElementById("dragc6",));
dragElement(document.getElementById("dragc7",));
dragElement(document.getElementById("dragc8",));
dragElement(document.getElementById("dragc9",));
dragElement(document.getElementById("dragc10",));
dragElement(document.getElementById("dragc11",));
dragElement(document.getElementById("dragc12",));
dragElement(document.getElementById("dragc13",));
dragElement(document.getElementById("dragc14",));
dragElement(document.getElementById("dragc15",));
dragElement(document.getElementById("dragmc1",));
dragElement(document.getElementById("dragmc2",));
dragElement(document.getElementById("dragmc3",));




function dragElement(elmnt) {
  var pos1 = 0 , pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

