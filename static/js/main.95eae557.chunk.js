(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,a,t){},119:function(e,a,t){},120:function(e,a,t){},121:function(e,a,t){},122:function(e,a,t){},125:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(11),l=t.n(i),u=t(25),o=t(26),c=t(31),s=t(27),m=t(32),h=t(79),b=t(23),p=t(127),k=t(129),d=t(128),g=(t(87),function(){return r.a.createElement(p.a,{bg:"dark",variant:"dark",expand:"lg"},r.a.createElement(p.a.Brand,{href:"/"},"Nhentai Generator"),r.a.createElement(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(p.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(k.a,{className:"mr-auto"},r.a.createElement(k.a.Link,{href:"/"},"Home"),r.a.createElement(k.a.Link,{href:"#/about"},"About"),r.a.createElement(k.a.Link,{href:"#/faq"},"FAQ"),r.a.createElement(k.a.Link,{href:"#/surprise"},"Surprise")),r.a.createElement(k.a,null,r.a.createElement(d.a,{title:"Miruku Sheki",id:"basic-nav-dropdown"},r.a.createElement(d.a.Item,{href:"https://github.com/mirukusheki",target:"_blank"},"Github"),r.a.createElement(d.a.Item,{href:"https://paypal.me/RJKuker?locale.x=id_ID",target:"_blank"},"Donation"),r.a.createElement(d.a.Item,{href:"https://github.com/mirukusheki/your-num-generator",target:"_blank"},"Repositories"),r.a.createElement(d.a.Divider,null),r.a.createElement(d.a.Item,{href:"https://mirukusheki.github.io/ashiyaap/",target:"_blank"},"Ashiyaap.exe")))))}),E=t(126),f=t(76),v=t.n(f),y=t(77),w=t.n(y),N={NHen:v.a,Warning:w.a},j=(t(106),function(e){return r.a.createElement(E.a,{show:e.open,onHide:e.onHide,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},r.a.createElement(E.a.Body,null,r.a.createElement("img",{src:N.Warning,alt:"Warning!",onContextMenu:function(e){return e.preventDefault()},onClick:e.onHide})))}),O=t(75),A=(t(119),function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(c.a)(this,Object(s.a)(a).call(this,e))).generateCode=function(){var e=1+264999*Math.random();t.setState({number:Math.floor(e)})},t.state={number:0,show:!0},t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"closeModal",value:function(){this.setState({show:!1})}},{key:"render",value:function(){var e=this,a=this.state,t=a.number,n=a.show;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"title"},r.a.createElement("img",{src:N.NHen,alt:"nHentai Logo",onContextMenu:function(e){return e.preventDefault()}}),r.a.createElement("br",null),r.a.createElement("h1",null,"NHentai Number Generator"),r.a.createElement("i",null,"Your pleasure, my pleasure! No, it's OUR PLEASURE!")),r.a.createElement("div",{className:"generate"},r.a.createElement(O.a,{variant:"light",onClick:function(a){return e.generateCode()}},"Generate Number"),r.a.createElement("br",null),r.a.createElement("div",{className:"message"},0===t?'Please click "Generate Number" button':r.a.createElement("div",null,"This is your nHentai number:",r.a.createElement("br",null),"Click the number to access the doujin: ",r.a.createElement("br",null),r.a.createElement("a",{href:"https://nhentai.net/g/".concat(t),target:"_blank",rel:"noopener noreferrer"},t),r.a.createElement("br",null),"Use VPN to access to website if your provider blocks your wae."))),r.a.createElement(j,{open:n,onHide:function(a){return e.closeModal()}}))}}]),a}(n.Component)),x=(t(120),function(e){function a(){return Object(u.a)(this,a),Object(c.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"About This Website"),r.a.createElement("p",null,'Nhentai Generator adalah sebuah website single page application yang bertujuan untuk me-generate enam digit angka secara acak) untuk website nHentai, website doujin pemuas hasrat anda. Kamu hanya perlu klik tombol "Generate Number" dan website ini akan menyediakan kamu nomor ID doujin nHentai sekaligus menyediakan link agar dapat langsung diakses ke nomor ID tersebut.'),r.a.createElement("p",null,"Program ini dibuat oleh Miruku Sheki, mengunakan framework ReactJS Dapat diakses melalui HP dan PC"),r.a.createElement("p",null,r.a.createElement("b",null,"WARNING MATURE CONTENT! Mengandung muatan konten negatif! Dilarang keras mengakses website ini jika anda belum berumur 18 tahun keatas!")),r.a.createElement("p",null,"Menemukan bug? Atau ingin menambahkan saran lainnya? Silahkan open issue di repository ini: ",r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/mirukusheki/nhentai-generator/issues"},"https://github.com/mirukusheki/nhentai-generator/issues")),r.a.createElement("br",null),r.a.createElement("p",null,"Laman lain yang dibuat oleh MirukuSheki:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://mirukusheki.github.io/ashiyaap"},"Ashiyaap.exe")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://mirukusheki.github.io/aqourslivetour"},"Aqours Live Tour"))))}}]),a}(n.Component)),C=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Frequently Asked Questions (FAQ)"),r.a.createElement("p",null,"Laman FAQ ini sedang dalam tahap perkembangan. Apabila kalian memiliki pertanyaan, silahkan tanyakan melalui Issue repository di ",r.a.createElement("a",{href:"https://github.com/mirukusheki/nhentai-generator/issues"},"https://github.com/mirukusheki/nhentai-generator/issues")))},H=(t(121),[{path:"/",exact:!0,component:A},{path:"/about",exact:!0,component:x},{path:"/faq",exact:!0,component:C},{path:"/surprise",exact:!0,component:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"video-wrapper"},r.a.createElement("iframe",{title:"youtube-wrapper",src:"https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0&showinfo=0&disablekb=1&modestbranding=1&autohide=1",frameBorder:"0"})))}}]),M=(t(122),function(e){function a(){return Object(u.a)(this,a),Object(c.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(g,null),H.map(function(e,a){return r.a.createElement(b.a,Object.assign({key:a},e))}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},76:function(e,a,t){e.exports=t.p+"static/media/nhen.6679bf44.png"},77:function(e,a,t){e.exports=t.p+"static/media/FBI.f6d0b937.jpg"},82:function(e,a,t){e.exports=t(125)},87:function(e,a,t){}},[[82,1,2]]]);
//# sourceMappingURL=main.95eae557.chunk.js.map