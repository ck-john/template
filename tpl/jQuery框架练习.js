/**
 * Created by Administrator on 2017/6/27 0027.
 */
(function(window,undefined){
    var new jQuery=function(selector){
        return new jQuery.prototype.init(selector);
    }
    jQuery.prototype={
        constructor:jQuery;
    init:function (selector){
        if(!selector){
            return this;
        }
        else if(jQuery.isFunction(selector)){
            this.ready(selector);
        }
        else if(jQuery.isString(selector)){
            selector=jQuery.trim(selector);
            if(jQuery.isHTML(selector)){
                var temp=document.createElement('div');
                temp.innerHTML=selector;
                var nodes=temp.children;
                [].push.apply(this,nodes);
            }else {

            }
        }
    }
    }
    addClass:function (classT){
        if(jQuery.isString(classT)){
           var classArray=classT.split(" ");
            for(var i=0;i<classArray.length;i++){
                var classStr=classArray[i];
                this.each(function(index,dom){
                    if(!$(this).hasClass(classStr)){
                        this.className+=" "+classStr;
                    }
                })
            }
        }
        return this;
    }
    removeClass:function (classT){
        if(classT==undefined){
            this.each(function(i,dom){
                dom.className=" ";
            })
            else if(jQuery.isString(classT)){
                var classArray=classT.split(" ");
                var self=this;
                $.each(classArray,function(index,value){
                    var classItem=" "+classArray[index]+" ";

                    self.each(function(j,key){
                        var classRameStr=" "+this.classRame+" ";
                        if(classRameStr.indexOf(classItem)!=-1){
                            this.classRame=jQuery.trim(classRameStr.replace(classItem," "));
                        }
                    })
                })
            }
        }
        return this;
    }
    toggleClass:function (classT){
        if(arguments.length==0){
            this.removeClass(classT);
        }
        else if(jQuery.isString(classT)){
            var classArray=classT.split(" ");
            var self=this;
            $.each(classArray,function(index,value){
                var currentClass=value;
                self.each(function(i,dom){
                    if($(dom).hasclass(currentClass)){
                        $(dom).removeClass(currentClass," ")
                    }
                    else if(!$(dom).hasclass(currentClass)){
                        $(dom).addClass(currentClass);
                    }
                })
            })
        }
        return this;
    }
    addEvent:function (dom,eventType,callback){
        if(!jQuery.isFunction(callback)||!jQuery.isString(eventType)||dom.nodeType!=1){
            return "参数错误"
        }
        //兼容性处理判断
        if(dom.addEventListener()){
             dom.addEventListener(eventType,callback)
        }else{
            dom.attachEvent("on"+eventType,callback)
        }
    }
    removeEvent:function (dom,eventType,callback){
        if(!jQuery.isFunction(callback)||!jQuery.isString(eventType)||dom.nodeType!=1){
            return "参数错误"
        }
        if(dom.removeEventListener()){
            dom.removeEventListener(eventType,callback)
        }else{
            dom.detachEvent("on"+eventType,callback)
        }
    }
    on:function (eventType,callBack){
        this.each(function(index,ele){
            jQuery.addEvent(this,eventType,callback)
        })
        return this;
    }
    off:function (eventType,callBack){
        this.each(function(index,ele){
            jQuery.removeEvent(this,eventType,callback)
        })
        return this;
    }
})(window)