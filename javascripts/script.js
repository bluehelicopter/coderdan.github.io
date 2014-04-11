 /*
 * TipTip
 * Copyright 2010 Drew Wilson
 * www.drewwilson.com
 * code.drewwilson.com/entry/tiptip-jquery-plugin
 *
 * Version 1.3   -   Updated: Mar. 23, 2010
 *
 * This Plug-In will create a custom tooltip to replace the default
 * browser tooltip. It is extremely lightweight and very smart in
 * that it detects the edges of the browser window and will make sure
 * the tooltip stays within the current window size. As a result the
 * tooltip will adjust itself to be displayed above, below, to the left
 * or to the right depending on what is necessary to stay within the
 * browser window. It is completely customizable as well via CSS.
 *
 * This TipTip jQuery plug-in is dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */; (function($){$.fn.tipTip=function(options){var defaults={activation:"hover",keepAlive:false,maxWidth:"200px",edgeOffset:3,defaultPosition:"bottom",delay:400,fadeIn:200,fadeOut:200,attribute:"title",content:false,enter:function(){},exit:function(){}};var opts=$.extend(defaults,options);if($("#tiptip_holder").length<=0){var tiptip_holder=$('<div id="tiptip_holder" style="max-width:'+opts.maxWidth+';"></div>');var tiptip_content=$('<div id="tiptip_content"></div>');var tiptip_arrow=$('<div id="tiptip_arrow"></div>');$("body").append(tiptip_holder.html(tiptip_content).prepend(tiptip_arrow.html('<div id="tiptip_arrow_inner"></div>')))}else{var tiptip_holder=$("#tiptip_holder");var tiptip_content=$("#tiptip_content");var tiptip_arrow=$("#tiptip_arrow")}return this.each(function(){var org_elem=$(this);if(opts.content){var org_title=opts.content}else{var org_title=org_elem.attr(opts.attribute)}if(org_title!=""){if(!opts.content){org_elem.removeAttr(opts.attribute)}var timeout=false;if(opts.activation=="hover"){org_elem.hover(function(){active_tiptip()},function(){if(!opts.keepAlive){deactive_tiptip()}});if(opts.keepAlive){tiptip_holder.hover(function(){},function(){deactive_tiptip()})}}else if(opts.activation=="focus"){org_elem.focus(function(){active_tiptip()}).blur(function(){deactive_tiptip()})}else if(opts.activation=="click"){org_elem.click(function(){active_tiptip();return false}).hover(function(){},function(){if(!opts.keepAlive){deactive_tiptip()}});if(opts.keepAlive){tiptip_holder.hover(function(){},function(){deactive_tiptip()})}}function active_tiptip(){opts.enter.call(this);tiptip_content.html(org_title);tiptip_holder.hide().removeAttr("class").css("margin","0");tiptip_arrow.removeAttr("style");var top=parseInt(org_elem.offset()['top']);var left=parseInt(org_elem.offset()['left']);var org_width=parseInt(org_elem.outerWidth());var org_height=parseInt(org_elem.outerHeight());var tip_w=tiptip_holder.outerWidth();var tip_h=tiptip_holder.outerHeight();var w_compare=Math.round((org_width-tip_w)/2);var h_compare=Math.round((org_height-tip_h)/2);var marg_left=Math.round(left+w_compare);var marg_top=Math.round(top+org_height+opts.edgeOffset);var t_class="";var arrow_top="";var arrow_left=Math.round(tip_w-12)/2;if(opts.defaultPosition=="bottom"){t_class="_bottom"}else if(opts.defaultPosition=="top"){t_class="_top"}else if(opts.defaultPosition=="left"){t_class="_left"}else if(opts.defaultPosition=="right"){t_class="_right"}var right_compare=(w_compare+left)<parseInt($(window).scrollLeft());var left_compare=(tip_w+left)>parseInt($(window).width());if((right_compare&&w_compare<0)||(t_class=="_right"&&!left_compare)||(t_class=="_left"&&left<(tip_w+opts.edgeOffset+5))){t_class="_right";arrow_top=Math.round(tip_h-13)/2;arrow_left=-12;marg_left=Math.round(left+org_width+opts.edgeOffset);marg_top=Math.round(top+h_compare)}else if((left_compare&&w_compare<0)||(t_class=="_left"&&!right_compare)){t_class="_left";arrow_top=Math.round(tip_h-13)/2;arrow_left=Math.round(tip_w);marg_left=Math.round(left-(tip_w+opts.edgeOffset+5));marg_top=Math.round(top+h_compare)}var top_compare=(top+org_height+opts.edgeOffset+tip_h+8)>parseInt($(window).height()+$(window).scrollTop());var bottom_compare=((top+org_height)-(opts.edgeOffset+tip_h+8))<0;if(top_compare||(t_class=="_bottom"&&top_compare)||(t_class=="_top"&&!bottom_compare)){if(t_class=="_top"||t_class=="_bottom"){t_class="_top"}else{t_class=t_class+"_top"}arrow_top=tip_h;marg_top=Math.round(top-(tip_h+5+opts.edgeOffset))}else if(bottom_compare|(t_class=="_top"&&bottom_compare)||(t_class=="_bottom"&&!top_compare)){if(t_class=="_top"||t_class=="_bottom"){t_class="_bottom"}else{t_class=t_class+"_bottom"}arrow_top=-12;marg_top=Math.round(top+org_height+opts.edgeOffset)}if(t_class=="_right_top"||t_class=="_left_top"){marg_top=marg_top+5}else if(t_class=="_right_bottom"||t_class=="_left_bottom"){marg_top=marg_top-5}if(t_class=="_left_top"||t_class=="_left_bottom"){marg_left=marg_left+5}tiptip_arrow.css({"margin-left":arrow_left+"px","margin-top":arrow_top+"px"});tiptip_holder.css({"margin-left":marg_left+"px","margin-top":marg_top+"px"}).attr("class","tip"+t_class);if(timeout){clearTimeout(timeout)}timeout=setTimeout(function(){tiptip_holder.stop(true,true).fadeIn(opts.fadeIn)},opts.delay)}function deactive_tiptip(){opts.exit.call(this);if(timeout){clearTimeout(timeout)}tiptip_holder.fadeOut(opts.fadeOut)}}})}})(jQuery);

/*
 * Glide.js
 * Ver: 1.0.5
 * Simple, lightweight and fast jQuery slider
 * url: http://jedrzejchalubek.com/glide
 * Autor: @JedrzejChalubek
 * site: http://jedrzejchalubek.com
 * Licensed under the MIT license
 */; (function(e,t,n,r){function o(r,i){var o=this;o.options=e.extend({},s,i);o.parent=r;o.wrapper=o.parent.children();o.slides=o.wrapper.children();o.currentSlide=0;o.CSS3support=true;o.options.beforeInit.call(o);o.init();o.build();o.play();if(o.options.touchDistance){o.swipe()}if(o.options.keyboard){e(n).on("keyup",function(e){if(e.keyCode===39)o.slide(1);if(e.keyCode===37)o.slide(-1)})}if(o.options.hoverpause){o.parent.add(o.arrows).add(o.nav).on("mouseover mouseout",function(e){o.pause();if(e.type==="mouseout")o.play()})}e(t).on("resize",function(){o.init();o.slide(0)});o.options.afterInit.call(o);return{current:function(){return-o.currentSlide+1},play:function(){o.play()},pause:function(){o.pause()},next:function(e){o.slide(1,false,e)},prev:function(e){o.slide(-1,false,e)},jump:function(e,t){o.slide(e-1,true,t)},nav:function(e){if(o.navWrapper){o.navWrapper.remove()}o.options.nav=e?e:o.options.nav;o.navigation()},arrows:function(e){if(o.arrowsWrapper){o.arrowsWrapper.remove()}o.options.arrows=e?e:o.options.arrows;o.arrows()}}}function u(e){var i=false,s="Khtml ms O Moz Webkit".split(" "),o=n.createElement("div"),u=null;e=e.toLowerCase();if(o.style[e]!==r)i=true;if(i===false){u=e.charAt(0).toUpperCase()+e.substr(1);for(var a=0;a<s.length;a++){if(o.style[s[a]+u]!==r){i=true;break}}}if(t.opera){if(t.opera.version()<13)i=false}return i}var i="glide",s={autoplay:4e3,hoverpause:true,animationTime:500,arrows:true,arrowsWrapperClass:"slider-arrows",arrowMainClass:"slider-arrow",arrowRightClass:"slider-arrow--right",arrowRightText:"next",arrowLeftClass:"slider-arrow--left",arrowLeftText:"prev",nav:true,navCenter:true,navClass:"slider-nav",navItemClass:"slider-nav__item",navCurrentItemClass:"slider-nav__item--current",keyboard:true,touchDistance:60,beforeInit:function(){},afterInit:function(){},beforeTransition:function(){},afterTransition:function(){}};o.prototype.build=function(){var e=this;if(e.options.arrows)e.arrows();if(e.options.nav)e.navigation()};o.prototype.navigation=function(){var t=this;if(t.slides.length>1){var n=t.options,r=t.options.nav===true?t.parent:t.options.nav;t.navWrapper=e("<div />",{"class":n.navClass}).appendTo(r);var i=t.navWrapper,s;for(var o=0;o<t.slides.length;o++){s=e("<a />",{href:"#","class":n.navItemClass,"data-distance":o}).appendTo(i);i[o+1]=s}var u=i.children();u.eq(0).addClass(n.navCurrentItemClass);if(n.navCenter){i.css({left:"50%",width:u.outerWidth(true)*u.length,"margin-left":-i.outerWidth(true)/2})}u.on("click touchstart",function(n){n.preventDefault();t.slide(e(this).data("distance"),true)})}};o.prototype.arrows=function(){var t=this;if(t.slides.length>1){var n=t.options,r=t.options.arrows===true?t.parent:t.options.arrows;t.arrowsWrapper=e("<div />",{"class":n.arrowsWrapperClass}).appendTo(r);var i=t.arrowsWrapper;i.right=e("<a />",{href:"#","class":n.arrowMainClass+" "+n.arrowRightClass,"data-distance":"1",html:n.arrowRightText}).appendTo(i);i.left=e("<a />",{href:"#","class":n.arrowMainClass+" "+n.arrowLeftClass,"data-distance":"-1",html:n.arrowLeftText}).appendTo(i);i.children().on("click touchstart",function(n){n.preventDefault();t.slide(e(this).data("distance"),false)})}};o.prototype.slide=function(e,t,n){var r=this;r.pause();r.options.beforeTransition.call(r);var i=t?0:r.currentSlide,s=-(r.slides.length-1),o=r.options.navCurrentItemClass,u=r.slides.spread;if(i===0&&e===-1){i=s}else if(i===s&&e===1){i=0}else{i=i+ -e}var a=u*i+"px";if(r.CSS3support){r.wrapper.css({"-webkit-transform":"translate3d("+a+", 0px, 0px)","-moz-transform":"translate3d("+a+", 0px, 0px)","-ms-transform":"translate3d("+a+", 0px, 0px)","-o-transform":"translate3d("+a+", 0px, 0px)",transform:"translate3d("+a+", 0px, 0px)"})}else{r.wrapper.stop().animate({"margin-left":a},r.options.animationTime)}if(r.options.nav&&r.navWrapper){r.navWrapper.children().eq(-i).addClass(o).siblings().removeClass(o)}r.currentSlide=i;r.options.afterTransition.call(r);if(n!=="undefined"&&typeof n==="function")n();r.play()};o.prototype.play=function(){var e=this;if(e.options.autoplay){e.auto=setInterval(function(){e.slide(1,false)},e.options.autoplay)}};o.prototype.pause=function(){var e=this;if(e.options.autoplay){e.auto=clearInterval(e.auto)}};o.prototype.swipe=function(){var e=this,t,n,r,i,s,o,u,a,f,l=180/Math.PI,c,h,p,d;e.parent.on("touchstart",function(e){t=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];r=t.pageX;i=t.pageY});e.parent.on("touchmove",function(e){t=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];s=t.pageX;o=t.pageY;c=s-r;h=o-i;p=Math.abs(c<<2);d=Math.abs(h<<2);u=Math.sqrt(p+d);a=Math.sqrt(d);f=Math.asin(a/u);if(f*l<32)e.preventDefault()});e.parent.on("touchend",function(i){t=i.originalEvent.touches[0]||i.originalEvent.changedTouches[0];n=t.pageX-r;if(n>e.options.touchDistance){e.slide(-1)}else if(n<-e.options.touchDistance){e.slide(1)}})};o.prototype.init=function(){var e=this,t=e.parent.width();e.slides.spread=t;e.wrapper.width(t*e.slides.length);e.slides.width(e.slides.spread);if(!u("transition")||!u("transform"))e.CSS3support=false};e.fn[i]=function(t){return this.each(function(){if(!e.data(this,"api_"+i)){e.data(this,"api_"+i,new o(e(this),t))}})}})(jQuery,window,document)

$(function(){
  var tipOpts   = { delay: 0, fadeIn: 100 }
  ,   slideOpts = { arrows: false, autoplay: 6000, navCenter: true, keyboard: false };

  $(".list--contact-header-item a").tipTip(tipOpts);
  $('.testimonial--slider').glide(slideOpts);
});