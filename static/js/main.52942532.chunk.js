(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,s){},17:function(t,e,s){"use strict";s.r(e);var n,r=s(4),c=s.n(r),i=s(5),o=s(6),a=s(9),u=s(7),l=s(8),b=s(1),h=(s(14),s(15),s(2)),d=s.n(h),p=s(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var y=function(t){Object(a.a)(s,t);var e=Object(u.a)(s);function s(){var t;Object(i.a)(this,s);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={isReversed:!1,sortType:n.NONE},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortByType=function(e){t.setState({sortType:e})},t.reset=function(){t.setState({isReversed:!1,sortType:n.NONE})},t}return Object(o.a)(s,[{key:"render",value:function(){var t=this,e=this.state,s=e.isReversed,r=e.sortType,c=r!==n.NONE||s,i=function(t,e){var s=e.sortType,r=e.isReversed,c=Object(l.a)(t);return c.sort((function(t,e){switch(s){case n.ALPHABET:return t.localeCompare(e);case n.LENGTH:return t.length-e.length;default:return 0}})),r&&c.reverse(),c}(j,this.state);return Object(p.jsxs)("div",{className:"section content",children:[Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)("button",{type:"button",className:d()("button is-info",{"is-light":r!==n.ALPHABET}),onClick:function(){return t.sortByType(n.ALPHABET)},children:"Sort alphabetically"}),Object(p.jsx)("button",{type:"button",className:d()("button is-success",{"is-light":r!==n.LENGTH}),onClick:function(){return t.sortByType(n.LENGTH)},children:"Sort by length"}),Object(p.jsx)("button",{type:"button",className:d()("button is-warning",{"is-light":!s}),onClick:this.reverse,children:"Reverse"}),c&&Object(p.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.reset,children:"Reset"})]}),Object(p.jsx)("ul",{children:i.map((function(t){return Object(p.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})}}]),s}(b.Component);c.a.render(Object(p.jsx)(y,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.52942532.chunk.js.map