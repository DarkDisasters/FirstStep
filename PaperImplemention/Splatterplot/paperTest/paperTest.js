function Test(){
    var _this = this
    this._init = function(){
        var canvas = document.getElementById("mycanvas")
        /*
        var ctx = canvas.getContext("2d")
        ctx.arc(300, 500, 50, 0, 2*Math.PI)
        ctx.fillStyle = "#C56321"
        */
        paper.setup(canvas)
    }

    this.load = function(){
        var m_path = []
        var color1 = "green"
        var color2 = "#C56321"
        var color3 = "white"
        var color4 = "#ffffff"
        var path1 = new paper.Path()
        var lchColor1 = d3.hcl(color1)
        lchColor1.opacity = 0.8
        var start = new paper.Point(100, 100);
        path1.moveTo(start);
        path1.lineTo(start.add([ 200, -50 ]));
        path1.lineTo(new paper.Point([150, 150]))
        path1.closePath()
        path1.strokeColor = color1
        path1.strokeWidth = "5"
        path1.fillColor = color1

        var lchColor4 = d3.lab(color4)
        // lchColor4.l = 1
        // lchColor4.a = -0.97
        // lchColor4.b = 0.217762469
        lchColor4.l = 0
        lchColor4.a = 0
        lchColor4.b = 0
        var path4 = new paper.Path()
        path4.moveTo(new paper.Point(500,30))
        path4.lineTo(new paper.Point(800,200))
        path4.lineTo(new paper.Point(600,300))
        path4.fillColor = lchColor4.toString()

        console.log("math",Math.pow(0.5,-1))
        console.log("!!!!!!",lchColor4.toString())

        //path1.fillColor = lchColor1.toString()
        console.log("whiteHCL",d3.hcl("#000000"))
        console.log("fffff",lchColor1)
        console.log("lchColor1",lchColor1.toString())
        console.log("lchColor12",path1.fillColor)
        console.log("lchColor13",d3.hcl(path1.fillColor))



        var path2 = new paper.Path()
        var lchColor2 = d3.hcl(color2)
        lchColor2.opacity = 0.8
        path2.moveTo(new paper.Point(150,30))
        path2.lineTo(new paper.Point(300,200))
        path2.lineTo(new paper.Point(100,300))
        path2.closePath()
        path2.strokeColor = color2
        path2.strokeWidth = "5"
        path2.fillColor = lchColor2.toString()
        console.log("lchColor2",lchColor2.toString())
        console.log("fillColor",path2.fillColor.toString())

        var circle1 = new paper.Path.Circle(new paper.Point(500,500),50)
        circle1.fillColor = path2.fillColor

        var circle2 = new paper.Path.Circle(new paper.Point(400,500),50)
        circle2.fillColor = lchColor2.toString()

        console.log("lch2",lchColor2)
        console.log("lchtostring",lchColor2.toString())
        console.log("lch2torgb",d3.rgb(lchColor2))
        console.log("lchtostringTorgb",d3.rgb(lchColor2.toString()))

        var path3 = path1.intersect(path2)
        //var path3 = path1.intersect(path2)
        var path4 = path1.subtract(path3)
        //var path5 = path2.subtract(path3)
        //path3.position += new paper.Point(300,300)
        
        //m_path.push(path1.intersect(path2))
        m_path.push(path3)
        //m_path.push(path1.subtract(path3))
        m_path.push(path4)
        m_path.push(path2.subtract(path3))
        
        //path3.remove()
       /*
        m_path.push(path3)
        m_path.push(path4)
        m_path.push(path5)
        */
        path1.remove()
        path2.remove()
        //m_path[0].remove()
        m_path.shift()            //数组shift，但是path仍然在
        //path3.remove()
        //path3 = null
        //path4.remove()
        //path5.remove()

        //path1.subtract(path3).remove()
        //path2.subtract(path3).remove()

        paper.view.draw()
        console.log("lchColor2",lchColor2)
        console.log("lchColor2RGB",lchColor2.toString())
        console.log(m_path)
    }

    this._init()
}