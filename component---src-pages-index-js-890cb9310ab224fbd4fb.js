(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(156);t.default=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null),r.a.createElement("div",{style:o},r.a.createElement("h1",{style:u},"Sav Younts"),r.a.createElement("p",{style:l},"DEVELOPER/DESIGNER")))};var o={position:"fixed",top:"35%",width:"100%",textAlign:"center"},u={fontSize:"4rem",color:"white",marginTop:"2%",marginLeft:"3%",textShadow:"-4px -4px 0 #000, 4px -4px 0 #000, -4px 4px 0 #000, 4px 4px 0 #000"},l={color:"white",marginLeft:"3%",textShadow:"-4px -4px 0 #000, 4px -4px 0 #000, -4px 4px 0 #000, 4px 4px 0 #000"}},146:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.withPrefix=d,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(149)),i=n(a(150)),o=n(a(7)),u=n(a(51)),l=n(a(52)),s=n(a(4)),c=n(a(0)),p=a(16),f=a(147);function d(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var A={activeClassName:s.default.string,activeStyle:s.default.object},h=function(e){function t(t){var a;a=e.call(this)||this,(0,l.default)((0,u.default)((0,u.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,u.default)((0,u.default)(a))),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,o=void 0===n?this.defaultGetProps:n,u=t.onClick,l=t.onMouseEnter,s=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),A=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),m=d(a);return c.default.createElement(p.Link,(0,i.default)({to:m,state:s,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){l&&l(e),___loader.hovering((0,f.parsePath)(a).pathname)},onClick:function(t){return u&&u(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(a,{state:s,replace:A})),!0}},h))},t}(c.default.Component);h.propTypes=(0,i.default)({},A,{innerRef:s.default.func,onClick:s.default.func,to:s.default.string.isRequired,replace:s.default.bool});var m=h;t.default=m;var g=function(e,t){window.___navigate(d(e),t)};t.navigate=g;var E=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(d(e))};t.push=E;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(d(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),E(e)}},147:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return A}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return d});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),u=a(146),l=a.n(u);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return u.withPrefix}),a.d(t,"navigate",function(){return u.navigate}),a.d(t,"push",function(){return u.push}),a.d(t,"replace",function(){return u.replace}),a.d(t,"navigateTo",function(){return u.navigateTo});var s=a(148),c=a.n(s);a.d(t,"PageRenderer",function(){return c.a});var p=a(32);a.d(t,"parsePath",function(){return p.a});var f=r.a.createContext({}),d=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function A(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},149:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}},150:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a},151:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),u=a(53),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},152:function(e,t){e.exports="data:image/png;base64,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"},153:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAACXBIWXMAAAsSAAALEgHS3X78AAABL0lEQVQ4jZVUbbGEMAxcUIAEJODg9RQ8JCABCTh4FpCAhEpAQs9BHez7QXoTculx7EyG6Uc2aZKlIYkKegAjgACgU/sJwCbmg6S1nuTKa2SSs+P/RjrK5TuIJLsa6XiTTGPXxPrJOsPti4x3ybJgLaQNj0ZFAD+q1I00Z5LvDiBL83q5HwHMAP6U3wNALFlaeA30bDZ+G0m0MjYaz+qovCOb9W8Zqc1Em25k2jm1H1qcBxsA1puZWhEMrXPRBrlCMuveI7U1vkIw69g6kaYbhCPOowgAuaak1yB/sMFpUqJSVDnUSspCHgzZwkNNHhZNupiR0hkMhrT2B8sU/evLJfrOQ2WTkyVk38MruB3kQpx4lGJzSINDeBKMpxCrsE+kyXtNrbNByHfnrHR9qfjiH1Jd0GAQagwcAAAAAElFTkSuQmCC"},154:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAACXBIWXMAAAsSAAALEgHS3X78AAABLUlEQVQ4ja2UYXHDMAyFX0OgYTAzWCCEwQKhDFYIg1AIgWAILgOXQcogQfD2w/LVS+R4bvvufImV6LMtSzqQREEtgG5l8wDmrAfJ3DiR9MzLkhw0Xw3WFWBrOZLtHrQjOVcAo2bx3UDNk8CoKe44hTpl9ZowkOSYQnvlh3NmsZJMhFrloxdgbUgujWRWX8jVBcAVwE3mVxmaejAEV1PPx/EdH9kR7bmwsVGqZU8ewADAIlSa03bcrA0FdQC+AXwJPC60gW6MO2qTdyPPdQ9YGjHeK8AluXh8+0aoPTC0PoMQhmPy8YZwiniRHuH4nzK/A5jE90NsCwCTlulPZZJrGqh0qfEF4MhM63sWfEkZua5/5v9qfuLfCgNJxIvK6YTQF4xc2BGhgiaEjFGz5hc+jMKkD0o5SAAAAABJRU5ErkJggg=="},155:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAACXBIWXMAAAsSAAALEgHS3X78AAABBklEQVQ4jeWUP0oDQRyFvwR7U9m6N/AKKSWNR7BRCysVFLTSLoWIjWC65AZrZ5kjrDfIEZLO7rPIDAz7J250G/GDYWGGfbz3frPbU+mafueKf070ArCjtQCyPpAB18DqlwY/gAmQoc7VpXoSnj9hGpbqMIpGztViS8HyO8PyoF6AApi1iLsCToEb4CA9qJv+Meue777p7wl4BPYrp6X4KQv1zGrPc/V2Qx2V+CkTYAQ8BGcAr6zr+Uz2qtQ4XaqXwWnkWb0vDWSs5nVOy6JFEGx7tfIg3hj/DXgPA9jdUEvKEXAIXJF+PMFpU5S2xMqKGH/k9he+ibE62AH2gDysLhj0/Nd//i/d22W7+3VbEAAAAABJRU5ErkJggg=="},156:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(147),o=a(152),u=a.n(o),l=a(153),s=a.n(l),c=a(154),p=a.n(c),f=a(155),d=a.n(f),A=function(){return r.a.createElement("div",null,r.a.createElement("a",{href:"mailto:savyounts@gmail.com"},r.a.createElement("img",{src:d.a,alt:"savyounts@gmail.com"})),r.a.createElement("a",{href:"https://github.com/savyounts",style:{paddingLeft:".5rem"}},r.a.createElement("img",{src:s.a,alt:"github"})),r.a.createElement("a",{href:"https://linkedin.com/in/savyounts",style:{paddingLeft:".5rem"}},r.a.createElement("img",{src:p.a,alt:"linkedin"})))},h=function(){return r.a.createElement("div",null,r.a.createElement(m,{to:"/about"},"about"),r.a.createElement(m,{to:"/projects"},"projects"),r.a.createElement(m,{to:"/blog"},"blog"))},m=function(e){return r.a.createElement(i.Link,{to:e.to,style:{textDecoration:"none",color:"white",padding:"0 2em"}},e.children," ")},g=(t.a=function(){return r.a.createElement("header",{style:g},r.a.createElement(i.Link,{to:"/",style:{textDecoration:"none"}},r.a.createElement("img",{src:u.a,alt:"Sav Younts Logo",style:{width:"3rem"}})),r.a.createElement(h,null),r.a.createElement(A,null))},{backgroundColor:"black",marginBottom:"2rem",padding:"1rem",display:"flex",justifyContent:"space-between",alignItems:"center"})}}]);
//# sourceMappingURL=component---src-pages-index-js-890cb9310ab224fbd4fb.js.map