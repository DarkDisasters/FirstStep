function Test(){
    var _this = this

    this.init = function(){
        
    }
    
    this.load = function(){
        var canvas = document.getElementById("mycanvas")
        var ctx = canvas.getContext("2d")
        ctx.beginPath()
        //paper.install(this)
        paper.setup(canvas)
        
        //var canvas = document.getElementById('myCanvas');
        // Create an empty project and a view for the canvas:
        //paper.setup(canvas);
        // Create a Paper.js Path to draw a line into it:
        var path1 = new paper.Path();
        // Give the stroke a color
        path.strokeColor = 'red';
        path.strokeWidth = 3
        color = "green"
        lchColor = d3.hcl(color)
        lchColor.opacity = 0.4
        //console.log("lchColor", lchColor)
        ctx.fillStyle = lchColor

        var start = new paper.Point(100, 100);
        // Move to start and draw a line from there
        path.moveTo(start);
        // Note that the plus operator on Point objects does not work
        // in JavaScript. Instead, we need to call the add() function:
        path.lineTo(start.add([ 200, -50 ]));
        path.lineTo(new paper.Point([150, 150]))
        // Draw the view now:
        path.closePath()
        paper.view.draw();
        ctx.fill()

    }

    //this.init()
    
}