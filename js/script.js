/*
* JavaScript Template v0.1
* Copyright 2013, Jason Xiang
* www.xiguabaobao.com
* Free to use under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
* 2013-8-13
*/


/* Table of Content
==================================================
	#Basic Scripts
	#Site Scripts 
	#Page Scripts */


/* #Basic Scripts
==================================================*/
	//将一个或多个函数绑定到window.onload事件
	//参数func：函数名(不含括号)
	function addLoadEvent(func){
		var oldonload = window.onload;
		if(typeof window.onload != 'function'){
			window.onload = func;
		} else {
			window.onload = function(){
				oldonload();
				func();
			}
		}
	}
	//为DOM增加insertAfter方法
	//参数newElement：	 将要插入的元素
	//参数targetElement：目标元素
	function insertAfter(newElement, targetElement) {
		var parent = targetElement.parentNode;
		if(parent.lastChild == targetElement) {
			parent.appendChild(newElement);
		} else {
			parent.insertBefore(newElement, targetElement.nextSibling);
		}
	}
	//给一个元素追加新的class
	//参数element：	需要添加新class的元素
	//参数value：	新的class名称
	function addClass(element,value) {
		if(!element.className) {
			element.className = value;
		} else {
			newClassName = element.className;
			newClassName += " ";
			newClassName += value;
			element.className = newClassName;
		}
	}


/* #Site Scripts
==================================================*/


/* #Page Scripts
==================================================*/
    function clock() {
        var sec = document.getElementById('sec');
        var min = document.getElementById('min');
        var hour = document.getElementById('hour');

        setInterval(function () {
            var seconds = new Date().getSeconds();
            var sdegree = seconds * 6;
            var srotate = "rotate(" + sdegree + "deg)";
            var scss = "-webkit-transform:" + srotate + ";-moz-transform:" + srotate + ";-o-transform:" + srotate + ";-ms-transform:" + srotate;

            sec.style.cssText = scss;
        },1000);

        setInterval(function () {
            var minutes = new Date().getMinutes();
            var mdegree = minutes * 6;
            var mrotate = "rotate(" + mdegree + "deg)";
            var mcss = "-webkit-transform:" + mrotate + ";-moz-transform:" + mrotate + ";-o-transform:" + mrotate + ";-ms-transform:" + mrotate;

            min.style.cssText = mcss;
        },1000);

        setInterval(function () {
            var hours = new Date().getHours();
            var minutes = new Date().getMinutes();
            var hdegree = hours * 30 + minutes * 0.5;
            var hrotate = "rotate(" + hdegree + "deg)";
            var hcss = "-webkit-transform:" + hrotate + ";-moz-transform:" + hrotate + ";-o-transform:" + hrotate + ";-ms-transform:" + hrotate;

            hour.style.cssText = hcss;
        },1000);
    }

    addLoadEvent(clock);