// Create a new path once, when the script is executed:
// var curShape = new Path.Circle(new Point(100, 100), 50);
// var curShape = new Path.Rectangle(new Point(100, 100), new Size(100, 100));
// curShape.fillColor = globals.color;

var curShape;
var centerScreen = new Point(view.viewSize._width/2, view.viewSize._height/2);

view.onResize = function(e) {
    centerScreen = new Point(view.viewSize._width/2, view.viewSize._height/2);
}
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

globals.makeShape = function() {
    switch(globals.shape){
        case 'square':
            curShape = new Path.Rectangle(centerScreen, new Size(100, 100));
            curShape.fillColor = globals.color;
            break;
        case 'circle':
            curShape = new Path.Circle(centerScreen, 50);
            curShape.fillColor = globals.color;
            break;
        case 'star':
            curShape = new Path.Star(centerScreen, 5, 60, 30);
            curShape.fillColor = globals.color;
            break;
        case 'rectangle':
            curShape = new Path.Rectangle(centerScreen, new Size(200, 100));
            curShape.fillColor = globals.color;
            break;
        case 'triangle':
            curShape = new Path.RegularPolygon(centerScreen, 3, 60);
            curShape.fillColor = globals.color;
            break;
    }
}

globals.changeColor = function(){
    if(project.selectedItems[0]){
        project.selectedItems[0].fillColor = globals.color;
    }    
}