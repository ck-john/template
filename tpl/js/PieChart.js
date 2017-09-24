/**
 * Created by Administrator on 2017/7/12 0012.
 */
function PieChart(option) {
    this._init(option)
}
PieChart.prototype={
    constructor:PieChart,
    _init:function (option) {
        option=option||{};
        this.x=option.x||0;
        this.y=option.y||0;
        this.innerR=option.innerR||0;
        this.outerR=option.outerR||0;
        this.outerColor=option.outerColor||"black";
        this.outerWidth=option.outerWidth;
        this.dataArray=option.dataArray;
        this.animationIndex=0
    },
    render:function (layer) {
        this.group=new Konva.Group();
        layer.add(this.group);

       this.wedeGroup=new Konva.Group();
       this.group.add(this.wedeGroup);

       this.textGroup=new Konva.Group();
       this.group.add(this.textGroup);

        this.areaGroup=new Konva.Group();
        this.group.add(this.areaGroup);

        var outerCircle=new Konva.Circle({
            x:this.x,
            y:this.y,
            radius:this.outerR,
            strokeWidth:this.outerWidth,
            stroke:this.outerColor
    });
        this.group.add(outerCircle);

        var self=this;
        var startAngle=-90;
        this.dataArray.forEach(function (item,index) {
            var tempAngle=item.value*360;
            var wedge=new Konva.Wedge({
                x:self.x,
                y:self.y,
                radius:self.innerR,
                fill:item.color,
            angel:tempAngle,
            rotation:startAngle
            })
            self.wedgeGroup.add(wedge);
            var textAngle=startAngle+tempAngle*0.5;
            var textX=self.x+(self.outerR+20)*Math.cos(textAngle*Math.PI/180);
            var textY=self.y+(self.outerR+20)*Math.sin(textAngle*Math.PI/180);
        var text=new Konva.Text({
            x:textX,
            y:textY,
            text:item.value*100+"%",
            fill:item.color,
            fontSize:18
        });
        if(textAngle>90&&textAngle<270){
            text.x(textX-text.width);
        }
        self.textGroup.add(text);
        var areaW=60;
        var areaH=20;
        var areaX=self.x+self.outerR+80;
        var areaY=self.y+index*(areaH+10)
        var areaRect=new Konva.Rect({
            x:areaX,
            y:areaY,
            width:areaW,
            height:areaH,
            fill:item.color,
        })
            self.areaGroup.add(areaRect);
        var areaText=new Konva.Text({
            x:areaX+areaW+20,
            y:areaY,
            text:item.name,
            fontSize:20,
            fill:item.color
        });
        self.areaGroup.add(areaText);
        startAngle=startAngle+tempAngle;
        })
    
    },
    update:function () {
        var self=this;
        if(this.animationIndex==0){
            this.wedgeGroup.getChildren().forEach(function (item,index){
                item.angle(0);
            })
        };
        var wedge=this.wedgeGroup.getChildren()[this.animationIndex];
        wedge.to({
            angel:360*this.dataArray[this.animationIndex].value,
            time:this.dataArray[this.animationIndex].value,
            onFinish:function () {
                self.animationIndex++;
                if(self.animationIndex>=self.dataArray.length){
                    self.animationIndex=0;
                    return
                }
                self.update();
            }
        })

    }
}