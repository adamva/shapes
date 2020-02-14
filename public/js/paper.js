// Create a new path once, when the script is executed:
// var curShape = new Path.Circle(new Point(100, 100), 50);
// var curShape = new Path.Rectangle(new Point(100, 100), new Size(100, 100));
// curShape.fillColor = globals.color;

var curShape;

function onMouseDown(e){
    project.activeLayer.selected = false;
    if(e.item){
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
    switch(globals.shape){
        case 'square':
            curShape = new Path.Rectangle(new Point(100, 100), new Size(100, 100));
            curShape.fillColor = globals.color;
            break;
        case 'circle':
            curShape = new Path.Circle(new Point(100, 100), 50);
            curShape.fillColor = globals.color;
            break;
        case 'star':
            curShape = new Path.Star(new Point(100, 100), 5, 60, 30);
            curShape.fillColor = globals.color;
            break;
        case 'rectangle':
            curShape = new Path.Rectangle(new Point(100, 100), new Size(200, 100));
            curShape.fillColor = globals.color;
            break;
        case 'triangle':
            curShape = new Path.RegularPolygon(new Point(100, 100), 3, 60);
            curShape.fillColor = globals.color;
            break;
    }
}

globals.changeColor = function(){
    project.selectedItems[0].fillColor = globals.color;
}