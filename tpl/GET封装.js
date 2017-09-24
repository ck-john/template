/**
 * Created by Administrator on 2017/7/1 0001.
 */
function GET(url,obj,sucessCallback,errorCallback,timeout){
    var xhr;
    if(window.XMLHttpRequest){
        xhr=new XMLHttpRequest();
    }else {
        xhr=new ActiveXObject("Microsoft.XMLHTTP");
    };
    var arrM=[];
    for(key in obj){
        arrM.push(key+"="+obj[key]);
    }
    var res=arrM.join("&");
    url=url+"?t"+Math.random()+"&"+res;
    url=encodeURI(url);
    xhr.open("get",url,true);
    xhr.send();
    xhr.onreadystatechange=function(){
        if(xhr.readystate==4){
            clearInterval(timer);
            if(xhr.status==200){
                function sucessCallback(){
                    console.log("运行成功：" + xhr.respondText);
                }
            }
            else{
                function errorCallback(){
                    console.log("运算失败：" + xhr.status);
                }
            }
        }
    }
    var timer=setInterval(function(){
        xhr.abort()
    },timeout)
}
function POST(url,obj,sucessCallback,errorCallback,timeout){
    var xhr;
    if(window.XMLHttpRequest){
        xhr=new XMLHttpRequest();
    }else {
        xhr=new ActiveXObject("Microsoft.XMLHTTP");
    };
    var arrM=[];
    for(key in obj){
        arrM.push(key+"="+obj[key]);
    }
    var res=arrM.join("&");
    xhr.open("post",url,true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(res);
    xhr.onreadystatechange=function(){
        if(xhr.readystate==4){
            clearInterval(timer)
            if(xhr.status==200){
                sucessCallback(xhr.respondText);
            }
            else{
                errorCallback(xhr.status)
            }
        }


    }
    var timer=setInterval(function(){
        xhr.abort();
    },timeout)
}
function Ajax(url,type,obj,sucessCallback,errorCallback,timeout){
    var xhr;
    if(window.XMLHttpRequest){
        xhr= new XMLHttpRequest();
    }
    else{
        xhr=new ActiveXObject("Microsoft.XMLHTTP");
    }
    var arrM[];
    for(key in obj){
        arrM.push[key+"="+obj[key]]
    }
    var res=arrM.join("&");
    if(type=="GET"){
        url=url+"?t"+Math.random()+"&"+res;
        url=encodeURI(url);
        xhr.open("get",url,true);
        xhr.send();
    }
    else if(type=="POST"){
        xhr.open("post",url,true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(res);
    }
    xhr.onreadystatechange=function(){
        if(xhr.readystate==4){
            clearInterval(timer)
            if(xhr.status==200){
                sucessCallback(xhr.responseText);
            }
            else{
                errorCallback(xhr.status)
            }
        }


    }
    var timer=setInterval(function(){
        xhr.abort();
    },timeout)
}