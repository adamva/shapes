// Create a new path once, when the script is executed:
// var curShape = new Path.Circle(new Point(100, 100), 50);
// var curShape = new Path.Rectangle(new Point(100, 100), new Size(100, 100));
// curShape.fillColor = globals.color;

var curShape;

function onMouseDown(e){
    project.activeLayer.selected = false;
    if(e.item){
        e.item.fillColor = globals.color;
        e.item.selected = true;
    }
}

function onMouseDrag(e){
    if(e.item){
        e.item.position += e.delta;   
    }
}

function onMouseUp(e){
}

globals.curParams = function(){
    console.log('Shape: ' + globals.shape + ' Color: ' + globals.color);
}

globals.makeShape = function() {
    if (globals.shape == 'square') {
        curShape = new Path.Rectangle(new Point(100, 100), new Size(200, 100));
        curShape.fillColor = globals.color;
    } else if (globals.shape == 'circle') {
        curShape = new Path.Circle(new Point(100, 100), 50);
        curShape.fillColor = globals.color;
    }
}

globals.changeColor = function(){
    project.selectedItems[0].fillColor = globals.color;
}