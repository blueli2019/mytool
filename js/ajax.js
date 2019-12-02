

function getAjax() {//获取XMLHttpRequest
    var xmlAjax;
    if (XMLHttpRequest) {
        xmlAjax = new XMLHttpRequest();
    }
    if (window.ActiveXObject) {
        xmlAjax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlAjax;
}
function getElement(id) {
    return document.getElementById(id);
}

/* 
* ajax函数
* 功能:1 获取服务器文件并返回获取的数据
* 2可以获取.json,.txt文件
* 3接收3个参数 方法,地址,回调函数,回调函数接收一个参数就是返回的数据对象
 */
function getAjaxResponseText(method, url,data, fn) {
    var xhr = getAjax();
	if(method.toLowerCase()=='get'){//判断传入的方法,因为方法大小写都可以,所以要转化比较
		url+='?time='+new Date().getTime()+'&'+data;
		xhr.open(method, url);
		xhr.send();
	}else if(method.toLowerCase()==='post'){
		url+='?time='+new Date().getTime();
		xhr.open(method, url);
		xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
		xhr.send(data);//date格式为'name=jery&pwd=123456'
	}
    var text = null;
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4&&xhr.status == 200) {
            text = JSON.parse(xhr.responseText);
            fn(text, this); //回调函数
        }else if(xhr.status!==200){//如果读取文件失败,则把错误代号返回
			fn(text,this.status);
			
		}


    };
}

getAjaxResponseText('post', 'news.json','name=jery&pwd=123113', function(object) {
    console.log(object);
});