(this.webpackJsonpnewsr=this.webpackJsonpnewsr||[]).push([[0],{131:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(61),c=n.n(i),s=(n(73),n(3)),o=n(4),u=n(6),l=n(5),d=n(7),h=(n(74),n(24)),p=n(1),f=n.n(p),m=n(23),v=n(15),b=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"loading"},r.a.createElement(v.a,{icon:"spinner",spin:!0}),"\xa0\xa0Loading ...")}}]),t}(r.a.Component),w=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.article;return r.a.createElement("span",{className:"article-detail-author"},e.date.format("DD.MM.YYYY HH:mm")," by ",e.author.name,"\xa0(",r.a.createElement("a",{href:"mailto:".concat(e.author.email)},e.author.email),")")}}]),t}(r.a.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.icon,n=e.children;return r.a.createElement("div",{className:"icon-button"},r.a.createElement(v.a,{icon:t}),"\xa0\xa0",n)}}]),t}(r.a.Component),g=n(10),E=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={isContentLoading:!1,contents:[],attachments:[]},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){return f.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:this.loadContent();case 1:case"end":return e.stop()}}),null,this)}},{key:"componentDidUpdate",value:function(e){return f.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:this.props.article===e.article&&this.props.showContent===e.showContent||this.loadContent();case 1:case"end":return t.stop()}}),null,this)}},{key:"loadContent",value:function(){var e;return f.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.props.showContent){t.next=2;break}return t.abrupt("return");case 2:return this.setState({isContentLoading:!0,contents:[],attachments:[]}),t.next=5,f.a.awrap(this.props.article.contents());case 5:e=t.sent,this.setState({isContentLoading:!1,contents:e.text,attachments:e.attachments});case 7:case"end":return t.stop()}}),null,this)}},{key:"nestContent",value:function(e,t){return 0===e?t:r.a.createElement("div",{className:"nested-content"},this.nestContent(e-1,t))}},{key:"render",value:function(){var e=this,t=this.props,n=t.article,a=t.showContent,i=t.onClickHeader,c=t.hasSimpleHeader,s=t.baseUrl,o=this.state,u=o.contents,l=o.attachments,d=o.isContentLoading;return r.a.createElement("div",{className:"article-detail"},r.a.createElement("div",{className:"header",onClick:function(){return i&&i(n.id)}},r.a.createElement("div",null,c?r.a.createElement("div",null,a?r.a.createElement(v.a,{icon:"chevron-down"}):r.a.createElement(v.a,{icon:"chevron-right"}),"\xa0\xa0",r.a.createElement(w,{article:n})):r.a.createElement("div",null,r.a.createElement("h1",{className:"article-detail-title"},n.subject),r.a.createElement(w,{article:n}))),r.a.createElement("a",{href:"mailto:".concat(n.author.email),className:"no-link"},r.a.createElement("div",{className:"article-button"},r.a.createElement(y,{icon:"reply"},"Reply"))),r.a.createElement(g.b,{to:"".concat(s).concat(n.number,"/post"),className:"no-link"},r.a.createElement("div",{className:"article-button"},r.a.createElement(y,{icon:"hand-point-right"},"Follow Up")))),d&&r.a.createElement(b,null),a&&r.a.createElement("div",{className:"article-detail-content"},u.map((function(t,n){return r.a.createElement("div",{key:n},e.nestContent(t.citationLevel,t.text+"\n"))})),l.length>0&&r.a.createElement("div",null,r.a.createElement("p",null,"Attachments:"),r.a.createElement("ul",null,l.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.dataUrl,download:e.name},["image/png","image/gif","image/jpeg","image/svg+xml"].includes(e.contentType)?r.a.createElement("img",{src:e.dataUrl,style:{width:"100%"},alt:e.name}):r.a.createElement("span",null,e.name)))}))))))}}]),t}(r.a.Component);E.defaultProps=void 0,E.defaultProps={onClickHeader:null,hasSimpleHeader:!1};var O=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.showContent,n=e.article,a=e.onClick,i=e.baseUrl;return r.a.createElement("li",{key:n.id},r.a.createElement(E,{article:n,baseUrl:i,showContent:t,onClickHeader:function(e){return a(e)},hasSimpleHeader:!0}),t&&r.a.createElement("div",null,r.a.createElement(j,{articles:n.followUps,baseUrl:i}),r.a.createElement("div",{className:"collapsible-line",onClick:function(){return a(n.id)}})))}}]),t}(r.a.Component),j=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={forceHideIds:[]},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleArticleClick",value:function(e){var t=this.state.forceHideIds;t.includes(e)?t.splice(t.indexOf(e),1):t.push(e),this.setState({forceHideIds:t})}},{key:"render",value:function(){var e=this,t=this.props,n=t.articles,a=t.baseUrl,i=this.state.forceHideIds;return r.a.createElement("div",{className:"collapsible-thread-list"},r.a.createElement("ul",null,n.map((function(t){return r.a.createElement(O,{baseUrl:a,key:t.id,article:t,showContent:!i.includes(t.id),onClick:function(t){return e.handleArticleClick(t)}})}))))}}]),t}(r.a.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.article,n=e.match,a="/groups/".concat(n.params.name,"/");return null===t?"Article not found!":r.a.createElement("div",{className:"thread-detail"},r.a.createElement(m.Helmet,null,r.a.createElement("title",null,"newsR - ",null===t||void 0===t?void 0:t.subject)),r.a.createElement(E,{baseUrl:a,article:t,showContent:!0}),r.a.createElement(j,{baseUrl:a,articles:null===t||void 0===t?void 0:t.followUps}))}}]),t}(r.a.Component),x=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"sidebar-content"},r.a.createElement("div",{className:"sidebar-content-sidebar"},this.props.sidebar),r.a.createElement("div",{className:"sidebar-content-content"},this.props.content))}}]),t}(r.a.Component),C=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.group,n=e.url;return r.a.createElement("div",{className:"group-title"},r.a.createElement(g.b,{className:"no-link",to:"".concat(n)},t.name))}}]),t}(r.a.Component),N=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app-grid"},r.a.createElement("div",{className:"app-grid-header"},this.props.header),r.a.createElement("div",{className:"app-grid-body"},this.props.body),r.a.createElement("div",{className:"app-grid-footer"},this.props.footer))}}]),t}(r.a.Component),S=n(39),R=n.n(S),_=n(64),I=n.n(_),A=n(30),P=function(){function e(t,n){Object(s.a)(this,e),this.name=void 0,this.email=void 0,this.name=t,this.email=n}return Object(o.a)(e,[{key:"toString",value:function(){return"".concat(this.name," <").concat(this.email,">")}}],[{key:"authorFromString",value:function(t){var n,a,r=new RegExp("(.*?) <(.*?)>").exec(t);return null===r?(n=t,a="placeholder.mail@srvr.at"):(n=r[1],a=r[2]),new e(n,a)}}]),e}(),U=n(65),T=n.n(U),q=function(){function e(t,n){Object(s.a)(this,e),this.citationLevel=void 0,this.text=void 0,this.citationLevel=n,this.text=t}return Object(o.a)(e,[{key:"isCitationStart",value:function(){return 0===this.citationLevel&&e.isCitationStart(this.text)}}],[{key:"isCitationStart",value:function(e){return void 0!==this.citationRegex.find((function(t){return t.test(e)}))}}]),e}();q.citationRegex=[new RegExp(/am(.*?)schrieb.*/,"i"),new RegExp(/on(.*?)wrote.*/,"i")];var D=function(){function e(t){Object(s.a)(this,e),this.db=void 0,this.db=t}return Object(o.a)(e,null,[{key:"instance",value:function(){var t=this;return f.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!this.cache){n.next=2;break}return n.abrupt("return",e.cache);case 2:return n.abrupt("return",new Promise((function(n,a){var r=indexedDB.open("newsR");r.onerror=function(){a()},r.onsuccess=function(a){t.cache=new e(r.result),n(t.cache)},r.onupgradeneeded=e.upgrade})));case 3:case"end":return n.stop()}}),null,this)}},{key:"upgrade",value:function(e){var t=e.target.result,n=t.createObjectStore("over",{keyPath:"id"});n.createIndex("server-group",["server","group"],{unique:!1}),n.createIndex("server","server",{unique:!1}),n.createIndex("group","group",{unique:!1}),n.createIndex("articleNumber","articleNumber",{unique:!1}),n.createIndex("headers","headers",{unique:!1}),n.createIndex("metadata","metadata",{unique:!1});var a=t.createObjectStore("body",{keyPath:"id"});a.createIndex("server-id",["server","id"],{unique:!1}),a.createIndex("server","server",{unique:!1}),a.createIndex("body","articleNumber",{unique:!1})}}]),Object(o.a)(e,[{key:"persistOverArticle",value:function(e,t,n){var a,r,i;return f.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:a=this.db.transaction(["over"],"readwrite"),r=a.objectStore("over"),i={id:n.headers["MESSAGE-ID"],"server-group":[e,t],server:e,group:t,articleNumber:n.articleNumber,headers:JSON.stringify(n.headers),metadata:JSON.stringify(n.metadata)},r.add(i);case 4:case"end":return c.stop()}}),null,this)}},{key:"persistOverArticles",value:function(e,t,n){var a=this;return f.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:n.forEach((function(n){return a.persistOverArticle(e,t,n)}));case 1:case"end":return r.stop()}}))}},{key:"retrieveOverArticles",value:function(e,t){var n=this;return f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",new Promise((function(a){var r=n.db.transaction("over").objectStore("over").index("server-group"),i=[];r.openCursor(IDBKeyRange.only([e,t])).onsuccess=function(e){var t=e.target.result;if(t){var n={articleNumber:t.value.articleNumber,headers:JSON.parse(t.value.headers),metadata:JSON.parse(t.value.metadata)};i.push(n),t.continue()}else a(i)}})));case 1:case"end":return a.stop()}}))}},{key:"persistBody",value:function(e,t){var n,a,r;return f.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:n=this.db.transaction(["body"],"readwrite"),a=n.objectStore("body"),r={id:t.messageId,server:e,body:JSON.stringify(t.body)},a.add(r);case 4:case"end":return i.stop()}}),null,this)}},{key:"retrieveBody",value:function(e,t){var n=this;return f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",new Promise((function(a,r){n.db.transaction("body").objectStore("body").index("server-id").openCursor(IDBKeyRange.only([e,t])).onsuccess=function(e){var t=e.target.result;if(t){var n={messageId:t.value.id,body:JSON.parse(t.value.body)};a(n)}else a()}})));case 1:case"end":return a.stop()}}))}}]),e}();D.cache=void 0;var H=function(){function e(t,n,a,r,i,c,o){Object(s.a)(this,e),this.id=void 0,this.number=void 0,this.subject=void 0,this.date=void 0,this.author=void 0,this.references=[],this.directReference="",this.followUps=[],this.group=void 0,this.newsieClient=void 0,this.id=t,this.number=n,this.subject=a,this.date=r,this.author=i,this.group=c,this.newsieClient=o}return Object(o.a)(e,[{key:"setReferences",value:function(e){e.length<=0||(this.references=e.split(" "),this.directReference=this.references[this.references.length-1])}},{key:"contents",value:function(){var t,n,a;return f.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,f.a.awrap(D.instance());case 2:return t=r.sent,r.next=5,f.a.awrap(t.retrieveBody(this.group.host,this.id));case 5:if((n=r.sent)&&n.body){r.next=16;break}return r.next=9,f.a.awrap(this.newsieClient.body(this.id));case 9:if(!(n=r.sent.article).body){r.next=15;break}return r.next=13,f.a.awrap(t.persistBody(this.group.host,n));case 13:r.next=16;break;case 15:n.body=["[newsR: content not found and not cached]"];case 16:return a=e.bodyToContents(n.body),e.stripStartEndCitationsFromContents(a.text),r.abrupt("return",{text:a.text,attachments:a.attachments});case 19:case"end":return r.stop()}}),null,this)}},{key:"postFollowup",value:function(e,t,n){return f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.a.awrap(this.group.post(e,t,n,this.references.concat(this.id)));case 2:case"end":return a.stop()}}),null,this)}}],[{key:"stripStartEndCitationsFromContents",value:function(t){if(!(t.length<1)){if(t[0].isCitationStart()){for(var n=1;n<t.length&&0!==t[n].citationLevel||0===t[n].text.length;)n++;t.splice(0,n)}for(var a=null,r=t.length-1;r>=0;r--){var i=t[r];if(0===i.citationLevel&&!e.isOnlyWhitespace(i.text))break;if(i.isCitationStart()){a=r;break}}null!==a&&t.splice(a,t.length-a)}}},{key:"isOnlyWhitespace",value:function(t){return e.whitespaceRegex.test(t)}},{key:"bodyToContents",value:function(e){var t=[],n=[];if("This is a multi-part message in MIME format."===e[0]){var a="MIME-Version: 1.0\n"+"Content-Type: multipart/mixed; boundary=".concat(e[1].substring(2),"\n")+"\n",r=T()(a+e.join("\n"));e=r.childNodes.filter((function(e){return"text/plain"===e.contentType.value})).map((function(e){return new TextDecoder("utf-8").decode(e.content)})).join("\n").split("\n"),n=r.childNodes.filter((function(e){return"text/plain"!==e.contentType.value})).map((function(e){var t=e.raw.substring(e.raw.lastIndexOf("\n\n")).replace(/\s/g,"");return{contentType:e.contentType.value,name:e.contentType.params.name,dataUrl:"data:".concat(e.contentType.value,";base64,").concat(t)}}))}return e?(e.forEach((function(e){for(var n=0;n<e.length&&">"===e[n];)n++;e=e.substring(n,e.length),t.push(new q(e,n))})),{text:t,attachments:n}):{text:t,attachments:n}}}]),e}();H.whitespaceRegex=new RegExp(/^$|\s+/);var W=function(){function e(t,n,a,r){Object(s.a)(this,e),this.name=void 0,this.description=void 0,this.host=void 0,this.newsieClient=void 0,this.name=t,this.description=n,this.newsieClient=r,this.host=a}return Object(o.a)(e,[{key:"threads",value:function(){var e,t,n,a,r,i,c,s=this;return f.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,f.a.awrap(this.newsieClient.group(this.name));case 2:if(0!==(e=o.sent.group).number){o.next=5;break}return o.abrupt("return",[]);case 5:return o.next=7,f.a.awrap(this.newsieClient.over("".concat(e.low,"-").concat(e.high)));case 7:return t=o.sent,o.next=10,f.a.awrap(D.instance());case 10:return n=o.sent,o.next=13,f.a.awrap(n.persistOverArticles(this.host,this.name,t.articles));case 13:return o.next=15,f.a.awrap(n.retrieveOverArticles(this.host,this.name));case 15:return a=o.sent,r=a.sort((function(e,t){return e.articleNumber-t.articleNumber})).map((function(e){var t=I()(e.headers.DATE),n=P.authorFromString(Object(A.mimeWordsDecode)(e.headers.FROM)),a=new H(e.headers["MESSAGE-ID"],e.articleNumber,Object(A.mimeWordsDecode)(e.headers.SUBJECT),t,n,s,s.newsieClient);return a.setReferences(e.headers.REFERENCES),a})),i={},c=[],r.forEach((function(e){i[e.id]=e,0===e.references.length?c.push(e):i[e.directReference]&&i[e.directReference].followUps.push(e)})),c.sort((function(e,t){return t.date.unix()-e.date.unix()})),o.abrupt("return",c);case 22:case"end":return o.stop()}}),null,this)}},{key:"post",value:function(e,t,n,a){var r,i,c,s;return f.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,f.a.awrap(this.newsieClient.post());case 2:if(340===(r=o.sent).code){o.next=7;break}throw i="Cannot post: Posting not permitted",console.error(i),new Error(i);case 7:return c={headers:{From:e.toString(),Newsgroups:this.name,Subject:t},body:n},a&&c.headers&&(c.headers.References=a.join(" ")),o.next=11,f.a.awrap(r.send(c));case 11:if(240===o.sent.code){o.next=16;break}throw s="Posting failed: Posting failed",console.error(s),new Error(s);case 16:case"end":return o.stop()}}),null,this)}}]),e}(),L=function e(t,n,a,r){var i=this;Object(s.a)(this,e),this._socket=void 0,this._host=void 0,this._port=void 0,this._queue=void 0,this.connect=function(){return f.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){i._socket.addEventListener("open",(function(){i.write("NNTPCONNECT ".concat(i._host," ").concat(i._port)),i._addSocketHandlers(),e(i._socket)}))})));case 1:case"end":return e.stop()}}))},this.disconnect=function(){i._socket.close(),i._queue.forEach((function(e){return e.reject(new Error("Disconnected from server"))})),i._queue=[]},this.write=function(e){i._socket.send(e)},this.addCallback=function(e,t,n){i._queue.push({callback:e,resolve:t,reject:n})},this._addSocketHandlers=function(){i._socket.onmessage=function(e){var t=i._queue[0],n=t.callback(e.data);i._queue.shift(),t.resolve(n)},i._socket.onerror=function(e){throw i._queue.forEach((function(t){return t.reject(e)})),i.disconnect(),e},i._socket.onclose=function(){i._queue.forEach((function(e){return e.reject(new Error("Connection closed"))}))}},this._socket=new WebSocket("wss://newsr-ws2nntp.herokuapp.com"),this._host=t,this._port=n,this._queue=[]},G=function(e){function t(e){var n;Object(s.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e)))._wsConnection=void 0,n.connect=function(){var e,t;return f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.a.awrap(n._wsConnection.connect());case 2:return e=a.sent,a.next=5,f.a.awrap(n.sendData(S.Command.GREETING));case 5:return t=a.sent,a.abrupt("return",Object(h.a)({},t,{socket:e}));case 7:case"end":return a.stop()}}))},n.disconnect=function(){return n._wsConnection.disconnect()},n.sendData=function(e,t){return new Promise((function(e,a){n._wsConnection.addCallback((function(e){return JSON.parse(e)}),e,a),t&&n._wsConnection.write(t)})).then((function(e){return e.code<400?e:Promise.reject(e)}))};var a=e.host,r=e.port,i=void 0===r?119:r,c=e.tlsPort,o=void 0!==c&&c,d=e.tlsOptions,p=void 0===d?{}:d;return n._wsConnection=new L(a,i,o,p),n}return Object(d.a)(t,e),t}(R.a),B=function(){function e(t,n){Object(s.a)(this,e),this.host=void 0,this.port=void 0,this.newsieClient=void 0,this.host=t,n&&(this.port=n),this.newsieClient=e.initWsNewsieClient(this.host,this.port)}return Object(o.a)(e,[{key:"connectAndVerifyNewsieClient",value:function(){return f.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.awrap(this.newsieClient.connect());case 2:if(200===e.sent.code){e.next=5;break}throw Error("No connection to server.");case 5:return e.next=7,f.a.awrap(this.newsieClient.capabilities());case 7:if(e.sent.capabilities.LIST.includes("NEWSGROUPS")){e.next=10;break}throw Error("Server does't have the required LIST NEWSGROUPS capability.");case 10:case"end":return e.stop()}}),null,this)}},{key:"getGroupByName",value:function(e){var t,n=this;return f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.a.awrap(this.newsieClient.listNewsgroups(e));case 2:if(1===(t=a.sent).newsgroups.length){a.next=5;break}return a.abrupt("return",null);case 5:return a.abrupt("return",t.newsgroups.map((function(e){var t="undefined"===typeof e.description?"":e.description;return new W(e.name,t,n.host,n.newsieClient)}))[0]);case 6:case"end":return a.stop()}}),null,this)}},{key:"groups",value:function(){var e,t=this;return f.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.a.awrap(this.newsieClient.listNewsgroups("tu-graz*"));case 2:return e=n.sent,n.abrupt("return",e.newsgroups.map((function(e){var n="undefined"===typeof e.description?"":e.description;return new W(e.name,n,t.host,t.newsieClient)})));case 4:case"end":return n.stop()}}),null,this)}}],[{key:"instance",value:function(){return f.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==this.server){t.next=4;break}return this.server=new e("news.tugraz.at",119),t.next=4,f.a.awrap(this.server.connectAndVerifyNewsieClient());case 4:return t.abrupt("return",this.server);case 5:case"end":return t.stop()}}),null,this)}},{key:"initWsNewsieClient",value:function(e,t){var n={host:e};return t&&!isNaN(t)&&(n.port=t),new G(n)}}]),e}();B.server=null;var M=n(16),J=n(67);function F(e){var t=e.entry;return a.createElement("div",{onClick:function(){return t.onPress?t.onPress():void 0}},a.createElement("p",{className:"list-entry"},a.createElement(g.b,{className:"no-link",to:t.url},a.createElement("span",{className:"title"+(t.bold?" bold":"")},t.title),a.createElement("br",null),a.createElement("span",{className:"subtitle"+(t.bold?" bold":"")},t.subtitle))))}function z(e){var t=e.data;return r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement(F,{key:t,entry:e})})))}function Y(e){var t=localStorage.getItem(e);return t?JSON.parse(t):[]}var V=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,group:null,threads:[],readArticles:[]},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e,t,n,a;return f.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,f.a.awrap(B.instance());case 2:return e=r.sent,r.next=5,f.a.awrap(e.getGroupByName(this.props.match.params.name));case 5:if(null!==(t=r.sent)){r.next=9;break}return this.setState({loading:!1,group:null}),r.abrupt("return");case 9:return r.next=11,f.a.awrap(t.threads());case 11:n=r.sent,a=Y(t.name),this.setState({loading:!1,group:t,threads:n,readArticles:a});case 14:case"end":return r.stop()}}),null,this)}},{key:"render",value:function(){var e=this,t=this.props.match,n=this.state,a=n.loading,i=n.group,c=n.threads;if(a)return r.a.createElement(b,null);if(null===i)return"Group not found!";var s=c.map((function(n){return{title:n.subject,subtitle:"".concat(n.author.name," - ").concat(n.date.format("DD.MM.YY HH:mm")),url:"".concat(t.url,"/").concat(n.number),bold:!e.state.readArticles.find((function(e){return e===n.id})),onPress:function(){!function(e,t){var n=Y(e);n.find((function(t){return t===e}))||localStorage.setItem(e,JSON.stringify(n.concat(t)))}(i.name,n.id),e.setState(Object(h.a)({},e.state,{readArticles:e.state.readArticles.concat(n.id)}))}}}));return r.a.createElement("div",{className:"group-detail"},r.a.createElement(m.Helmet,null,r.a.createElement("title",null,"newsR - ",null===i||void 0===i?void 0:i.name)),r.a.createElement(N,{header:r.a.createElement("div",{className:"float-div"},r.a.createElement("div",{className:"float"},r.a.createElement(g.b,{className:"no-link",to:"/"},r.a.createElement(v.a,{icon:"home",size:"xs"}))),r.a.createElement(C,{group:i,url:t.url})),body:r.a.createElement(J.a,{query:"(max-width: 45rem)"},(function(e){return e?r.a.createElement(M.c,null,r.a.createElement(M.a,{path:"".concat(t.path,"/:number"),render:function(e){return r.a.createElement(k,Object.assign({},e,{group:i,article:c.find((function(t){return t.number===parseInt(e.match.params.number)}))||null}))}}),r.a.createElement(M.a,{path:"".concat(t.path)},r.a.createElement(z,{data:s}))):r.a.createElement(x,{sidebar:r.a.createElement(z,{data:s}),content:r.a.createElement(M.c,null,r.a.createElement(M.a,{path:"".concat(t.path,"/:number"),render:function(e){return r.a.createElement(k,Object.assign({},e,{group:i,article:c.find((function(t){return t.number===parseInt(e.match.params.number)}))||null}))}}),r.a.createElement(M.a,{path:"".concat(t.path)},r.a.createElement("h3",null,"Please select a thread or ",r.a.createElement(g.b,{to:"/post/"},"Write"))))})})),footer:r.a.createElement("div",null)}))}}]),t}(r.a.Component),K=n(40);function $(){var e=Object(a.useState)({groups:[],filteredGroups:[]}),t=Object(K.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(!0),s=Object(K.a)(c,2),o=s[0],u=s[1];if(Object(a.useEffect)((function(){!function(){var e,t;f.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return u(!0),n.next=3,f.a.awrap(B.instance());case 3:return e=n.sent,n.next=6,f.a.awrap(e.groups());case 6:t=n.sent,i({groups:t,filteredGroups:t}),u(!1);case 9:case"end":return n.stop()}}))}()}),[]),o)return r.a.createElement(b,null);return r.a.createElement("div",null,r.a.createElement(m.Helmet,null,r.a.createElement("title",null,"newsR - news.tugraz.at")),r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Welcome to news.tugraz.at"),r.a.createElement("input",{className:"search",type:"text",placeholder:"Search...",onChange:function(e){return function(e){var t=n.groups.filter((function(t){return t.name.toLowerCase().includes(e)}));i(Object(h.a)({},n,{filteredGroups:t}))}(e.target.value.toLowerCase())}})),r.a.createElement(z,{data:n.filteredGroups.map((function(e){return{title:e.name,subtitle:e.description,url:"/groups/".concat(e.name)}}))}))}var Q=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement($,null)}}]),t}(r.a.Component),X=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"send",value:function(){var e,t,n;return f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.a.awrap(B.instance());case 2:return e=a.sent,a.next=5,f.a.awrap(e.getGroupByName("tu-graz.test"));case 5:t=a.sent,n=new P("Name","name@provider.tld"),null===t||void 0===t||t.post(n,"newsR",["test1"]);case 8:case"end":return a.stop()}}))}},{key:"render",value:function(){var e=this;return r.a.createElement("button",{onClick:function(){return e.send()}},"Send test Post (for real!)")}}]),t}(r.a.Component),Z=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(M.c,null,r.a.createElement(M.a,{path:"/groups/:name",component:V}),r.a.createElement(M.a,{path:"/post/",component:X}),r.a.createElement(M.a,{path:"/",component:Q})))}}]),t}(r.a.Component),ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function te(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ne=n(14),ae=n(21);ne.b.add(ae.f),ne.b.add(ae.d),ne.b.add(ae.e),ne.b.add(ae.c),ne.b.add(ae.b),ne.b.add(ae.a),c.a.render(r.a.createElement(g.a,{basename:""},r.a.createElement(Z,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/newsR",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/newsR","/service-worker.js");ee?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):te(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):te(t,e)}))}}()},68:function(e,t,n){e.exports=n(131)},73:function(e,t,n){},74:function(e,t,n){},94:function(e,t){},96:function(e,t){}},[[68,1,2]]]);
//# sourceMappingURL=main.2a20d50f.chunk.js.map