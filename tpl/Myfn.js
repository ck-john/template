/**
 * Created by Administrator on 2017/4/26.
 */

/**
 * 匀速运动框架
 * @param obj
 * @param target
 * @param speed
 */
function constant(obj,target,speed) {
    clearInterval(obj.timer);
    //开始动画
    obj.timer = setInterval(function () {
        //让box做匀速动画
        var MySpeed = target>obj.offsetLeft?speed:-speed;
        obj.style.left = obj.offsetLeft + MySpeed +'px';
        if(Math.abs(target-obj.offsetLeft)<Math.abs(MySpeed))
        {
            clearInterval(obj.timer);
            obj.style.left = target +'px';
        }
    },20);
}


/**
 * 封装获取CSS属性的方法
 * @param obj
 * @param attr
 * @returns {*}
 */
function getCSSAttr(obj,attr) {
    //先判断ie
    if(obj.currentStyle)
    {
        return obj.currentStyle[attr];
    }
    else
    {
        return getComputedStyle(obj)[attr];
    }
}


/**
 * 封装缓动动画库
 * @param obj
 * @param json
 * @param fn
 */
function buffer(obj,json,fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {

        //定义一个变量作为旗帜
        var isStop = true;
        for (var key in json)
        {
            var begin = parseInt(getCSSAttr(obj,key));
            var target = parseInt(json[key]);
            var speed = (target -begin) / 20;
            speed = target>begin?Math.ceil(speed):Math.floor(speed);
            obj.style[key] = speed + begin + 'px';
            if(begin!=target)
            {
                isStop = false;
            }
        }

        //判断清除定时器的时机
        if (isStop){
            clearInterval(obj.timer);

            //加回调
            //先判断是否传入了回调
            if(fn) {
                //执行回调
                fn();
            }
        }
    },20);
}

/**
 * 获取scrollTop和scrollLeft
 * @returns {*}
 */
function scroll() {
    if(window.pageYOffset !== null){ // ie9+  和 最新浏览器
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }else if(document.compatMode == 'CSS1Compat'){ // 非怪异浏览器
        return{
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return{
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}


/**
 * 封装标签显示
 * @param tagId
 * @returns {string}
 */
function show(tagId) {
    return document.getElementById(tagId).style.display = 'block';
}

/**
 * 封装标签隐藏
 * @param tagId
 * @returns {string}
 */
function hide(tagId) {
    return document.getElementById(tagId).style.display = 'none';
}

/**
 * 封装$函数获取id
 * @param tagId
 * @returns {Element}
 */
function $(tagId)
{
    return typeof  tagId==='string'?document.getElementById(tagId):tagId;
}

/**
 * 封装获取TagName方法
 * @param tag
 * @returns {NodeList}
 */
function getTag(tag) {
    return typeof tag==='string'?document.getElementsByTagName(tag):tag;
}

/**
 * 封装获取ClassName方法
 * @param className
 * @returns {*}
 */
function getClass(className) {
    //1.判断当前浏览器是否支持
    if (document.getElementsByClassName) {
        return document.getElementsByClassName(className);
    }
    //2.不支持的浏览器
    var allTags = document.getElementsByTagName('*');

    var arr = [];
    //3.遍历
    for (var i = 0; i < allTags.length; i++) {
        //3.1.判断遍历得到的所有标签的className是否和函数外部传入的className相等

        if (allTags[i].className == className) {
            arr.push(allTags[i]);
        }
        //3.2.如果相等,就应该留下来
    }

    //千万不要忘记返回数组
    return arr;
}

/**
 * 得到一个兼容的获取屏幕的宽度和高度
 * @returns {*}
 */
function client() {
    //1.判断是否是ie9+和最新浏览器
    if(window.innerWidth!=null)
    {
        return {
            width:window.innerWidth,
            height:window.innerHeight
        }
    }
    //标准浏览器
    else if(document.compatMode=='CSS1Compat')
    {
        return{
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        }
    }
    //3.怪异模式
    else {
        return{
            width:document.body.clientWidth,
            height:document.body.clientHeight
        }
    }

}
