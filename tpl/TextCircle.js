/**
 * Created by Administrator on 2017/7/14 0014.
 */
function TextCircle(option) {
    this._init(option)
};
TextCircle.prototype={
    constructor:TextCircle,
    _init:function (option) {
        option=option||{};
        this.x=option.x;
        this.y=option.y;
        this.innerRadius = option.innerRadius || 0;
        this.outerRadius = option.outerRadius || 0;
        this.innerFill=option.innerFill||"black";
        this.outerColor=option.outerColor;
        this.text=option.text;
        this.textColor=option.textColor||"white";
    },
    render:function (layer) {
        this.group=new Konva.Group({
            x:this.x,
            y:this.y
        });
        layer.add(this.group);
        var inner_circle=new Konva.Circle({
            radius:this.innerRadius,
            innerFill:this.innerFill
        });
        this.group.add(inner_circle);
        var outer_Ring=new Konva.Ring({
            innerRadius:this.innerRadius,
            outerRadius:this.outerRadius,
            outerColor:this.outerColor
        });
        this.group.add(outer_Ring);
        var text=new Konva.Text({
            x:-this.innerRadius,
            y:-8,
            width:2*this.innerRadius,
            align:"center",
            text:this.text,
            fontSize:16,
            innerFill:this.textColor
        })
        this.group.add(text)
    }
}