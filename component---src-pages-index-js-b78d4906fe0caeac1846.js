(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{151:function(e,t,a){"use strict";a.r(t);a(193),a(35),a(77);var n=a(36),i=a.n(n),o=a(7),r=a.n(o),l=a(0),c=a.n(l),s=a(166),p=a(159),m=a(199),d=a(154),g=a(157),h=a(196),u=a.n(h),x=d.a.div.withConfig({displayName:"presentation-block__PresentationView",componentId:"sc-10jnrrp-0"})(["height:","px;width:100%;overflow:hidden;position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;.creative{color:var(--primaryColor);display:block;font-size:16vw;text-align:center;-webkit-text-stroke:5px var(--primaryColor);@media(max-width:768px){-webkit-text-stroke:3px var(--primaryColor)}@media(max-width:480px){-webkit-text-stroke:1px var(--primaryColor)}}.developer{color:var(--primaryColor);font-size:16vw;display:block;font-weight:bolder;text-align:center;-webkit-text-stroke:5px var(--primaryColor);@media(max-width:768px){-webkit-text-stroke:3px var(--primaryColor)}@media(max-width:480px){-webkit-text-stroke:1px var(--primaryColor)}}.year{color:var(--secondaryColor);font-size:1.5vw;display:block;font-weight:bolder;text-align:center;font-style:italic;margin-top:50px;@media(max-width:1080px){font-size:4vw}@media(max-width:768px){font-size:6vw}@media(max-width:480px){font-size:6vw;margin-top:30px;}}.face{position:absolute;width:400px;height:400px;top:50%;left:50%;margin-top:-200px;margin-left:-200px;opacity:0;@media(max-width:510px){width:300px;height:300px;margin-top:-150px;margin-left:-150px;}img{width:100%;}}.mouse{position:absolute;bottom:20px;left:50%;margin-left:-9px;display:block;width:18px;height:28px;border-radius:11px 11px 15px 15px;border:1px solid var(--primaryColor);span.scroll{display:block;margin:6px auto;width:1px;height:3px;border-radius:4px;background:var(--primaryColor);border:1px solid transparent;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:scroll;animation-name:scroll;}}"],function(e){return e.height}),f=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={complete:!1,height:0,width:0},t.animationComplete=function(){t.setState({complete:!0}),t.props.markAsCompleted()},t.animation=function(){var e=document.querySelector(".creative"),a=document.querySelector(".developer"),n=document.querySelector(".face"),i=document.querySelector(".year");(new m.b).fromTo(n,3,{opacity:0},{opacity:1,ease:m.a.easeOut}).fromTo(n,1,{opacity:1},{opacity:0,ease:m.a.easeOut},"+=1").add("name").from(e,2,{x:-150,opacity:0,ease:m.a.easeOut},"name").from(a,2,{x:150,opacity:0,ease:m.a.easeOut},"name").from(i,2,{opacity:0,delay:1.5,ease:m.a.easeOut,onComplete:t.animationComplete})},t}r()(t,e),t.getDerivedStateFromProps=function(e,t){return e.height!==t.height?{height:e.height}:null};var a=t.prototype;return a.componentDidUpdate=function(e,t){if(t.height!==this.state.height){var a=this.state.height;this.setState({height:a})}},a.componentDidMount=function(){this.setState({height:this.props.height,complete:this.props.completed}),this.props.completed?this.props.markAsCompleted():this.animation()},a.render=function(){var e=this.state,t=e.height,a=e.complete;return c.a.createElement(x,{height:t},c.a.createElement("h1",{className:"creative"},"Creative"),c.a.createElement("h2",{className:"developer"},"Developer"),c.a.createElement("span",{className:"year"},"since 1986"),c.a.createElement("span",{className:"face"},c.a.createElement(g.a,{imageUrl:u.a,title:"Juanma Pérez"})),a&&c.a.createElement("span",{className:"mouse"},c.a.createElement("span",{className:"scroll"})))},t}(l.Component),b=a(172),y=d.a.div.withConfig({displayName:"intro-block__IntroView",componentId:"z4l96n-0"})(["padding-top:200px;min-height:","px;background:var(--bgColor);width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;.intro-text{width:100%;font-size:8vw;color:var(--primaryColor);line-height:1.2;padding:20px 80px;box-sizing:border-box;font-weight:bolder;-webkit-text-stroke:1px var(--primaryColor);p{margin-bottom:100px;opacity:0;transition:opacity 600ms linear;&.fade-in{opacity:1;}strong,a{color:var(--tertiaryColor);-webkit-text-stroke:0.0002em var(--tertiaryColor);&:hover{text-decoration:underline}}}}@media(max-width:1080px){padding-top:200px;min-height:400px;.intro-text{padding:20px;font-size:9vw;p{margin-bottom:80px;}}}@media(max-width:768px){padding-top:200px;min-height:400px;.intro-text{font-size:9vw;p{margin-bottom:50px;}}}@media(max-width:480px){padding-top:120px;min-height:","px;.intro-text{padding:10px;-webkit-text-stroke:0px var(--primaryColor);font-size:9vw;p{margin-bottom:10px;strong{color:var(--secondaryColor);-webkit-text-stroke:0px var(--secondaryColor);}}}"],function(e){return e.height},function(e){return e.height/1.2}),w=function(e){var t=e.height;return c.a.createElement(y,{height:t},c.a.createElement("div",{className:"intro-text"},c.a.createElement(b.a,null,c.a.createElement(b.b,{classToggle:"fade-in",triggerHook:.8},c.a.createElement("p",null,"I'm ",c.a.createElement("span",null,"Juanma Pérez "),", a javascript ",c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/juanmaperezvargas/"},"Front End Developer")," from Seville."))),c.a.createElement(b.a,null,c.a.createElement(b.b,{classToggle:"fade-in",triggerHook:.8},c.a.createElement("p",null,"I grew up professionally in Barcelona and I moved to ",c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.google.com/maps/place/London/@51.5287718,-0.2416815,11z/data=!3m1!4b1!4m5!3m4!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5073509!4d-0.1277583"},"London")," in 2018."))),c.a.createElement(b.a,null,c.a.createElement(b.b,{classToggle:"fade-in",triggerHook:.8},c.a.createElement("p",null,"Nowadays, I work at ",c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://colossusbets.com/"},"ColossusBets")," where I'm continuously improving my skills in web development and UX."))),c.a.createElement(b.a,null,c.a.createElement(b.b,{classToggle:"fade-in",triggerHook:.8},c.a.createElement("p",null,"I also love music, books, films, sports, and ",c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/worldoftypographies/"},"typography"),".")))))},v=a(197),k=a(155),E=["var(--secondaryColor)","#a3cccc","var(--tertiaryColor)"],A=d.a.div.withConfig({displayName:"work-block-item__WorkBlockItemView",componentId:"sc-11hy6dj-0"})(["width:33%;padding:150px 20px 30px;background:var(--bgColor);box-sizing:border-box;min-height:","px;@media(max-width:768px){width:100%;display:",";padding:40px 10px;min-height:","px;}@media(max-width:510px){width:100%;display:",";padding:40px 10px;min-height:","px;}a{background:",";padding:0px;width:100%;box-sizing:border-box;display:flex;flex-direction:row;justify-content:center;align-items:center;height:100%;img{max-width:100%;max-height:100%;}}"],function(e){return e.height},function(e){return e.index>1?"none":"block"},function(e){return e.height/1.3},function(e){return e.index>0?"none":"block"},function(e){return e.height/1.3},function(e){return E[e.index]}),C=function(e){var t=e.height,a=e.frontmatter,n=e.index;return c.a.createElement(A,{index:n,height:t},c.a.createElement(k.a,{to:a.path},c.a.createElement(g.a,{imageUrl:a.thumbnail.childImageSharp.fluid.src,title:a.title})))},z=d.a.div.withConfig({displayName:"works-block__WorksBlockView",componentId:"sc-18lj4cj-0"})(["min-height:","px;padding-bottom:30px;.works-block-list{width:100%;display:flex;flex-direction:row;overflow:hidden;opacity:0;transition:opacity 600ms linear;&.fade-in{opacity:1;}}.all{box-sizing:border-box;padding:0px 20px;display:block;font-size:20px;color:var(--primaryColor);}@media(max-width:768px){padding-top:30px;min-height:","px;}@media(max-width:510px){padding-top:0px;min-height:","px;.works-block-list{margin:30px 0px 0px;}}"],function(e){return e.height},function(e){return e.height/1.3},function(e){return e.height/1.2}),N=function(e){var t=e.height;return c.a.createElement(z,{height:t},c.a.createElement(b.a,null,c.a.createElement(b.b,{classToggle:"fade-in",triggerHook:.65},c.a.createElement("div",{className:"works-block-list"},c.a.createElement(k.b,{query:"1586830741",render:function(e){return e.allMarkdownRemark.edges.map(function(e,a){var n=e.node.frontmatter;return c.a.createElement(C,{key:a,index:a,height:t,frontmatter:n})})},data:v})))),c.a.createElement(k.a,{className:"all",to:"/work"},"View all works"))},S=a(198),B=d.a.div.withConfig({displayName:"posts-block__PostsBlockView",componentId:"sc-11atmln-0"})(["min-height:","px;padding:100px 20px;box-sizing:border-box;.posts-block-list{width:70%;margin:20px auto 60px;overflow:hidden;.post-item{width:100%;margin-bottom:70px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;opacity:0;transition:opacity 600ms linear;&.fade-in{opacity:1}img{width:25px;height:auto;margin-right:20px;}span{font-size:80px;font-weight:bolder;letter-spacing:1px;color:var(--primaryColor);}&:hover{span{text-decoration:underline;}}}}.all{box-sizing:border-box;padding:0px 20px;display:block;font-size:20px;color:var(--primaryColor);}@media(max-width:768px){padding:100px 20px 0px;min-height:","px;.posts-block-list{width:85%;margin:100px auto 0px;.post-item{img{width:20px;}span{font-size:40px;}}}}@media(max-width:510px){min-height:","px;padding:50px 20px;.posts-block-list{margin:30px 0px 0px;width:100%;.post-item{padding:0px;margin-bottom:30px;box-sizing:border-box;img{transform:translateY(5px);width:20px;margin-right:10px;}span{font-size:26px;font-weight:normal;}}}.all{padding:0px;margin-top:30px;}}"],function(e){return e.height},function(e){return e.height/1.3},function(e){return e.height/1.2}),j=function(e){var t=e.height;return c.a.createElement(B,{height:t},c.a.createElement(k.b,{query:"317642646",render:function(e){var a=e.allMarkdownRemark.edges;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"posts-block-list"},a.map(function(e,a){var n=e.node.frontmatter;return c.a.createElement(b.a,{key:a},c.a.createElement(b.b,{classToggle:"fade-in",triggerHook:.85},c.a.createElement("div",{className:"post-item",key:a,index:a,height:t,frontmatter:n},c.a.createElement(k.a,{to:""+n.path},c.a.createElement(g.a,{imageUrl:n.icon.childImageSharp.fluid.src,title:n.category}),c.a.createElement("span",null,n.title)))))})),c.a.createElement(k.a,{className:"all",to:"/blog"},"View all posts"))},data:S}))},R=(a(76),d.a.div.withConfig({displayName:"contact-block__ContactBlockView",componentId:"sc-1aweg9q-0"})([".contact-wrapper{padding:50px 20px;opacity:0;transition:opacity 600ms linear;&.fade-in{opacity:1}.title-box{width:100%;padding:20px;box-sizing:border-box;margin-bottom:30px;.contact-title{font-size:8vw;margin:50px 0px 0px;line-height:0.9;color:var(--primaryColor);-webkit-text-stroke:0.001em var(--primaryColor);}.contact-subtitle{margin-top:50px;font-size:8vw;margin:0px;color:var(--tertiaryColor);-webkit-text-stroke:0.001em var(--tertiaryColor);}}.content{display:flex;flex-direction:row;justify-content:flex-start;.hi-box{width:50%;padding:20px;box-sizing:border-box;.contact-resume{line-height:1.4;font-size:22px;letter-spacing:1px;h3{font-size:34px;margin-bottom:20px;line-height:1;}p{max-width:90%;margin-bottom:20px;span{display:block;color:var(--secondaryColor);&.contact-btn{margin-top:5px;display:block;border:2px solid;padding:6px;text-align:center;cursor:pointer;margin-bottom:20px;max-width:200px;}}}}}.social-box{width:50%;padding:20px;box-sizing:border-box;line-height:1.4;font-size:22px;letter-spacing:1px;ul{padding:30px 20px;li{margin-bottom:10px;}}}}@media(max-width:768px){padding:30px 0px;.title-box{.contact-title{font-size:60px;color:var(--primaryColor);}.contact-subtitle{font-size:60px;color:var(--tertiaryColor);}}.content{display:block;.hi-box,.social-box{width:100%;}}}@media(max-width:510px){padding:30px 10px;min-height:","px;.title-box{margin-bottom:0px;.contact-title,.contact-subtitle{font-size:40px;}}.content{.hi-box{.contact-resume{h3{font-size:23px;line-height:1.4;}}}}}}.message{width:auto;padding:15px 20px;position:fixed;bottom:20px;left:20px;border-radius:4px;font-weight:bolder;background:var(--secondaryColor);color:var(--bgColor);box-shadow:0px 1px 1px 1px rgba(var(--secondaryColor),0.2),0 2px 4px rgba(var(--secondaryColor),0.08);}"],function(e){return e.height/1.2})),P=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={msg:null,type:"",phone:"+44 07447881161",email:"juanmaperezvar"},t.timeOut=null,t.getMyPhone=function(e){e.preventDefault();var a=t.state.phone;t.copyTextToClipboard(a,"Phone")&&t.removeMsg()},t.getMyEmail=function(e){e.preventDefault();var a=t.state.email+"@gmail.com";t.copyTextToClipboard(a,"Email")&&t.removeMsg()},t.copyTextToClipboard=function(e,a){var n;if((n=navigator.userAgent.match(/ipad|ipod|iphone/i)?document.createElement("input"):document.createElement("textarea")).id="txt",n.style.position="fixed",n.style.top="0",n.style.left="0",n.style.opacity="0",n.style.opacity="0",n.value=e,document.body.appendChild(n),navigator.userAgent.match(/ipad|ipod|iphone/i)){var i=n.contentEditable,o=n.readOnly;n.contentEditable=!0,n.readOnly=!1;var r=document.createRange();r.selectNodeContents(n);var l=window.getSelection();l.removeAllRanges(),l.addRange(r),n.setSelectionRange(0,999999),n.contentEditable=i,n.readOnly=o}else n.select();try{var c=document.execCommand("copy"),s=c?a+" copied on your clipboard":a+" unable to copy";if(c)return t.setState(function(){return{msg:s,type:a}}),!0}catch(p){console.error(t.msg)}finally{document.body.removeChild(n)}return!1},t.removeMsg=function(){t.timeOut=null,t.timeOut||(t.timeOut=setTimeout(function(){return t.setState(function(){return{msg:null,type:""}})},4e3))},t}return r()(t,e),t.prototype.render=function(){var e=this.props.height,t=this.state.msg;return c.a.createElement(R,{height:e},c.a.createElement(b.a,null,c.a.createElement(b.b,{classToggle:"fade-in",triggerHook:.65},c.a.createElement("div",{className:"contact-wrapper"},c.a.createElement("div",{className:"title-box"},c.a.createElement("h2",{className:"contact-title"},"Get in touch,"),c.a.createElement("h2",{className:"contact-subtitle"},"don't be shy")),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"hi-box"},c.a.createElement("div",{className:"contact-resume"},c.a.createElement("h3",null,"Available from September '19"),c.a.createElement("p",null,"You have a project or idea which must be developed in a ",c.a.createElement("strong",null,"online environment"),", tell me more about it."),c.a.createElement("p",null,c.a.createElement("strong",null,"Contact me:")),c.a.createElement("p",null,c.a.createElement("span",{className:"contact-btn",onClick:this.getMyEmail},"Get my email"),c.a.createElement("span",{className:"contact-btn",onClick:this.getMyPhone},"Get my phone")))),c.a.createElement("div",{className:"social-box"},c.a.createElement("p",null,"If you prefer something more social to talk with me, you can do it on the following platforms:"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/juanmaperez"},"Github")),c.a.createElement("li",null,c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/juanmaperezvargas/"},"Linkedin")),c.a.createElement("li",null,c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.pinterest.co.uk/juanmaperezvar/"},"Pinterest")),c.a.createElement("li",null,c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://stackoverflow.com/users/7850072/juanmaperez"},"StackOverflow")))))))),t&&c.a.createElement("div",{className:"message"},t))},t}(l.Component),I=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={completed:!1,height:0,width:0},t.resize=function(){var e=window.innerWidth,a=window.innerHeight,n=!!t.checkCookies();t.setState({height:a,width:e,completed:n})},t.animationCompleted=function(){t.setState({completed:!0}),t.setCookie()},t.checkCookies=function(){var e=document.cookie,t={};return e.split(";").forEach(function(e){var a=e.split("=");t[a[0].trim().toString()]=a[1]}),t.animationCompleted},t.setCookie=function(){var e=new Date;e.setTime(e.getTime()+864e5),document.cookie="animationCompleted=true; expires="+e.toGMTString()},t.render=function(){var e=t.state,a=e.completed,n=e.height;return c.a.createElement(s.a,null,c.a.createElement(p.a,{title:"Encapsulated",description:"Personal Website by Juanma Perez, Front End developer at Colossus Bets, London",keywords:["Juanma Perez","javascript","developer"]}),n>0&&c.a.createElement(f,{height:n,completed:a,markAsCompleted:t.animationCompleted.bind(i()(t))}),a&&c.a.createElement(w,{height:n}),a&&c.a.createElement(N,{height:n}),a&&c.a.createElement(j,{height:n}),a&&c.a.createElement(P,{height:n}))},t}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.resize(),window.addEventListener("resize",this.resize.bind(this))},a.componentWillUnmount=function(){window.removeEventListener("resize",this.resize.bind(this))},t}(l.Component);t.default=I},155:function(e,t,a){"use strict";a.d(t,"b",function(){return p});var n=a(0),i=a.n(n),o=a(4),r=a.n(o),l=a(33),c=a.n(l);a.d(t,"a",function(){return c.a});a(156);var s=i.a.createContext({}),p=function(e){return i.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};p.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},156:function(e,t,a){var n;e.exports=(n=a(165))&&n.default||n},157:function(e,t,a){"use strict";var n=a(0),i=a.n(n),o=a(4),r=a.n(o),l=function(e){var t=e.title,a=e.imageUrl;return i.a.createElement("img",{alt:t,src:a})};l.propTypes={title:r.a.string,imageUrl:r.a.string},t.a=l},158:function(e,t,a){e.exports=a.p+"static/logo_pill-9042e18128ac9c15c1bdbf8bc5a69755.png"},159:function(e,t,a){"use strict";var n=a(160),i=a(0),o=a.n(i),r=a(4),l=a.n(r),c=a(169),s=a.n(c),p=a(161),m=a(162),d=a(163);function g(e){var t=e.description,a=e.lang,i=e.meta,r=e.keywords,l=e.title,c=n.data.site,g=t||c.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,link:[{rel:"icon",type:"image/png",sizes:"16x16",href:""+p.icon16},{rel:"icon",type:"image/png",sizes:"32x32",href:""+m.icon32},{rel:"shortcut icon",type:"image/png",href:""+d.icon64}],meta:[{name:"description",content:g},{property:"og:title",content:l},{property:"og:description",content:g},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:g},{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(i)})}g.defaultProps={lang:"en",meta:[],keywords:[],description:""},g.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=g},160:function(e){e.exports={data:{site:{siteMetadata:{title:"encapsulated",description:"Little pills about javascript, react, angular, gatsbyjs, nodejs by Juanma Perez, Front end developer",author:"Juanma Perez"}}}}},161:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWpJREFUeNpiYBjU4LuLHxcQS+JTw4hHcz+QygBiDiA+AMSBnHs2fUBXx4RN8zcXvwQgFQTErFAhhz///3diU8uCTfDD79/GgqysP4BMZpjYHyYm/bJdB+czMTErQIXuAnEdhgsq9hxRYOPnV0EX5/j///uWOVOz/v7+PQNkx5/fv+we37/NAndB6fZ9qQyMjIFfPn24/fHvn9/cDAw8QOFfn7g4b99WVma4pKfH4ysjdeHvnz9Szx/dj11fX7Xx0+PH/xmhtp7/8/v3f4b//8tY2NhMJR490vvDwWH7WlT03+9fP/89uf/wy9MHj+6ws/xO29fR9gojDL59/TKXi5tHBMi0AfFXX73O++rZq/sPbt7m+/3rtxowsuSBwq8Zrhx6RVw0all3MzAx+wFZakiiB4AGOBIVjQyMTMeBJC8Q/0USPYRNKTNWA14/us4gJscHZOkDTeNkYPi/mOHrxwqGDy//MAw/ABBgAGUOiWlTKmApAAAAAElFTkSuQmCC"},162:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5ZJREFUeNrsVmtIVEEUnp17d9t1TVvL7cGCuGRPKCstSikD+5FC4I+QHtCLsvpVRGVg0AP6058eCBEZPX/YO9SysDRp3a0opBZNN1Nz85V1W3fvPu/M7YwpLWXbJm792QPfnXNnzpn55tw5Zy5CUYnKfxbFSB1vzF2oyU2ctIjpIiEvJ1RXOP8JgZ6sHJ0a42IVxmuC+4ksX4OmIPZR2deIEehdnjN9LMebQeUAXsD4QX1AZITsrR5x0WzTo85w58R/QyCW488O+rAF9MGLD+7GkKzRXo5IBL4sz03TcNxzUN8ADICE39k6iTRTX33vbTjz8mEzVSiyoHEBAoC4kGTj4uYXVj3Vi4IQr9XpZkGXhvVTIolEIvXPSq/WPL10PvBXBODgxQa9cqFsbenpp9j5gMURIRLye71IpVYjjuMRBmSs3yim5a1OPZG38h0fifQ1Wsznjjm673SYTK/tdXVu1rf3fvV8IksVHM9PIpTGSJSQsCKw/2FtpizL6+orH6SnvrGGxc7o9Xebjx+37KusyVFw3H7w5zDGGWzM63E3CX29+Rc3rW/9LYFdt++lqGK0GzCH82GzU72iy06/Cs1BJnS4DII0bP0UH/+hOmOJrrBw33XoygaMg/ODvG73JaGv58mLB+VXGkpL/cOGck9FlZFXqo4qMF7r83oE0ekocwifS0p3FtR6slcdApMDAAcgkdkHZGoRtLH9tmkp3daZMyZ2GgxxmOMWD83nEV1OCPlYt8tZeyY/b1nILIDFjyjHqA8G/L7+3k77truHi0r6Ozro0LiLSHVdRmNly5Qp2raUqZ1der0OiC4F/MgIShEQtiFZvtnW3Fh+v+iAKazDBCmzFJonA2GU5X4I2StQJUaQSpIa8/w80Mf87Oz3+WCXzgYiUZO56rGhqb7B7vcHYC7FaWStLQ67Dnx439yuG59oVmu0i5UqFdtR1o9aiZHTIbA6YIPP0qLkVQ2vTJYZNmsj+tzzpQsYr4DBrT/tiYw4nVK3bEnSJCQksQgILS3v39661T0wMCuzAMicBM33p0IEsgMicGZElbC+pKQdmvZfbw08mUWd1RnAgpCzUkpH/zKS5Y9B9tIfjNtGnwAlNfDUsqoMCH3nY846+gQa6yC96DnQktl/yfe6M+zuL8D3j8z/AFLgvfBsYtUW0DfM4hYkOrZH9p8weY4SxcTvBs/N4D59sJfVjfPh5n5UohKVYPkmwACXxmXS/dVLCAAAAABJRU5ErkJggg=="},163:function(e,t){e.exports="data:image/png;base64,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"},164:function(e){e.exports={data:{site:{siteMetadata:{title:"encapsulated"}}}}},165:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),i=a.n(n),o=a(4),r=a.n(o),l=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=s},166:function(e,t,a){"use strict";var n=a(164),i=a(0),o=a.n(i),r=a(4),l=a.n(r),c=a(155),s=(a(170),a(171),a(154)),p=a(157),m=a(7),d=a.n(m),g=s.a.div.withConfig({displayName:"menu__MenuView",componentId:"ldryeq-0"})(["position:relative;.menu-list{opacity:0;display:none;transition:all 400ms linear;position:absolute;bottom:-110px;right:5px;&.open{display:block;opacity:1;}ul{list-style:none;li{margin-bottom:10px;text-align:right;a{color:var(--primaryColor);font-size:22px;&.active{text-decoration:line-through;}&:hover{text-decoration:line-through;}}}}}#nav-icon{margin:5px;width:35px;height:20px;position:relative;-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:.5s ease-in-out;-moz-transition:.5s ease-in-out;-o-transition:.5s ease-in-out;transition:.5s ease-in-out;cursor:pointer;.bar{display:block;position:absolute;height:2px;width:100%;background:var(--primaryColor);border-radius:9px;opacity:1;left:0;-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:.25s ease-in-out;-moz-transition:.25s ease-in-out;-o-transition:.25s ease-in-out;transition:.25s ease-in-out;&:nth-child(1){top:0px}&:nth-child(2),&:nth-child(3){top:9px}&:nth-child(4){top:18px}}&.open{.bar{&:nth-child(1){top:18px;width:0%;left:50%;opacity:0;}&:nth-child(2){-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg);}&:nth-child(3){-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg);}&:nth-child(4){top:18px;width:0%;left:50%;opacity:0;}}}}"]),h=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={open:!1},t.toggleMenu=function(){var e=t.state.open;t.setState(function(){return{open:!e}})},t}return d()(t,e),t.prototype.render=function(){var e=this.state.open;return o.a.createElement(g,null,o.a.createElement("div",{className:e?"open":"",id:"nav-icon",onClick:this.toggleMenu},o.a.createElement("span",{className:"bar"}),o.a.createElement("span",{className:"bar"}),o.a.createElement("span",{className:"bar"}),o.a.createElement("span",{className:"bar"})),o.a.createElement("div",{className:e?"open menu-list":"menu-list"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(c.a,{activeClassName:"active",to:"/"}," Home ")),o.a.createElement("li",null,o.a.createElement(c.a,{activeClassName:"active",to:"/work"}," Work ")),o.a.createElement("li",null,o.a.createElement(c.a,{activeClassName:"active",to:"/blog"}," Blog ")))))},t}(i.Component),u=a(158),x=a.n(u),f=a(167),b=a(168),y=s.a.div.withConfig({displayName:"theme-switcher__ThemeSwitcherView",componentId:"sc-15zitb9-0"})(["margin-top:5px;margin-right:5px;background:var(--bgColor);border:1px solid var(--primaryColor);width:40px;height:20px;border-radius:20px/20px;position:relative;.dark-icon{font-size:12px;position:absolute;left:5px;top:4px;color:var(--primaryColor);}.light-icon{font-size:12px;position:absolute;right:5px;top:4px;color:var(--primaryColor);}.ball-button{position:absolute;z-index:10;top:-1px;left:-1px;border:1px solid var(--primaryColor);width:20px;height:20px;border-radius:50%;background:var(--bgColor);transition:all 300ms ease-in;:hover{border:1px solid var(--secondaryColor);}&.dark{transform:translateX(20px);}}"]),w=function(e){function t(t){var a;if((a=e.call(this,t)||this).state={},a.toggleButton=function(){var e=a.state.theme;e="light"===e?"dark":"light",a.setTheme(e),a.storeTheme(e)},a.setTheme=function(e){a.setState({theme:e},function(){var t=document.querySelector("body");t.className="",t.classList.add(e)})},a.storeTheme=function(e){a.store&&a.store.setItem("theme",e)},a.store="undefined"==typeof localStorage?null:localStorage,a.store){var n=a.store.getItem("theme")||"light";a.state={theme:n};var i=document.querySelector("body");i.className="",i.classList.add(n)}return a}d()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.state.theme;if(this.store){var t=this.store.getItem("theme")||"light";t!==e&&this.setState({theme:t}),this.setTheme(t)}},a.render=function(){var e=this.state.theme;return o.a.createElement(y,{onClick:this.toggleButton},o.a.createElement(f.a,{style:{fontSize:"12px"},className:"light-icon",icon:b.f}),o.a.createElement(f.a,{style:{fontSize:"12px"},className:"dark-icon",icon:b.e}),o.a.createElement("div",{className:"ball-button "+e}))},t}(i.Component),v=s.a.header.withConfig({displayName:"header__HeaderView",componentId:"sc-31ozxh-0"})(["padding:0px;color:#000;width:100%;position:fixed;top:0px;left:0px;z-index:1000;box-sizing:border-box;.header-wrapper{display:flex;flex-direction:row;justify-content:space-between;padding:15px 20px;box-sizing:border-box;max-width:100%;div{display:flex;flex-direction:row;justify-content:flex-start;.logo{margin-top:3px;width:35px;height:24px;img{max-width:100%;}}.title{margin-left:5px;font-size:26px;line-height:1.1;font-weight:800;color:var(--primaryColor);display:inline-block;font-family:'Questrial',sans-serif;mix-blend-mode:difference;.title-link{color:var(--primaryColor);letter-spacing:1.4px;-webkit-text-stroke:0.3px var(--primaryColor);text-decoration:none;mix-blend-mode:difference;}@media(max-width:510px){display:none;}}}}"]),k=function(e){var t=e.siteTitle;return o.a.createElement(v,null,o.a.createElement("div",{className:"header-wrapper"},o.a.createElement("div",null,o.a.createElement("div",{className:"logo"},o.a.createElement(c.a,{className:"title-link",to:"/"},o.a.createElement(p.a,{className:"logo",title:"encapsulated logotype",imageUrl:x.a}))),o.a.createElement("h1",{className:"title"},o.a.createElement(c.a,{className:"title-link",to:"/"},t))),o.a.createElement("div",null,o.a.createElement(w,null),o.a.createElement(h,null))))};k.propTypes={siteTitle:l.a.string},k.defaultProps={siteTitle:""};var E=k,A=function(e){var t=e.children;return o.a.createElement(c.b,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(E,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"content-wrapper"},t)))},data:n})};A.propTypes={children:l.a.node.isRequired};t.a=A},196:function(e,t,a){e.exports=a.p+"static/jp_brush_normal-b9d7b8acf30e4b0bbc9c828eef59c9dc.png"},197:function(e){e.exports={data:{allMarkdownRemark:{totalCount:4,edges:[{node:{id:"638ddf23-39b8-5b65-8c79-27209b4f2762",frontmatter:{path:"/work/umaicha",type:"project",thumbnail:{childImageSharp:{fluid:{src:"/static/68d8d4a015d435202fd2f7f36107a0b9/90fcb/umaicha.png"}}}}}},{node:{id:"8016d8bd-72c8-584c-837c-2e4ec445e6fb",frontmatter:{path:"/work/australis",type:"project",thumbnail:{childImageSharp:{fluid:{src:"/static/d7aa8c521ca4a0868b0e8cd3c8f70866/90fcb/australis.png"}}}}}},{node:{id:"9465beb6-6e38-552f-a424-b98a06992e16",frontmatter:{path:"/work/colossus",type:"project",thumbnail:{childImageSharp:{fluid:{src:"/static/1df673a7187a660849d7e1079cb8ca4b/90fcb/colossus.png"}}}}}}]}}}},198:function(e){e.exports={data:{allMarkdownRemark:{totalCount:3,edges:[{node:{id:"f3489be5-7812-54ab-ad0b-410208012826",frontmatter:{path:"/blog/angular-forms-template-driven-approach",title:"Angular Forms: Template Driven approach",category:"angular",icon:{childImageSharp:{fluid:{src:"/static/400f9d04b95a30fefc2839dcc8e519e4/e7c66/angular.png"}}}}}},{node:{id:"e79fa995-91bd-5895-93e1-54766a52ebf1",frontmatter:{path:"/blog/angular-forms-reactive-approach",title:"Angular Forms: Reactive approach",category:"angular",icon:{childImageSharp:{fluid:{src:"/static/400f9d04b95a30fefc2839dcc8e519e4/e7c66/angular.png"}}}}}},{node:{id:"8f8f071e-25de-5629-80fc-58ae17986a94",frontmatter:{path:"/blog/how-javascript-engine-works",title:"How javascript engine works",category:"javascript",icon:{childImageSharp:{fluid:{src:"/static/49a21704a5bb82d398913aceb94c63af/e7c66/javascript.png"}}}}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-b78d4906fe0caeac1846.js.map