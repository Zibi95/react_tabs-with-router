(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var a=c(10),s=c.n(a),n=c(4),b=(c(16),c(17),c(2)),i=c(1),j=function(){return Object(i.jsx)("h1",{className:"title",children:"Home page"})},r=c(6),l=c(8),d=c(0),o=c(11),h=c.n(o),O=function(e){var t=e.tabsMap,c=e.activeTabId;return c&&t[c]?Object(i.jsx)("div",{className:"block","data-cy":"TabContent",children:t[c].content}):Object(i.jsx)("div",{className:"block","data-cy":"TabContent",children:"Please select a tab"})},x=function(e){var t=e.tabs,c=Object(b.h)().tabId,a=Object(d.useMemo)((function(){return t.reduce((function(e,t){return Object(l.a)(Object(l.a)({},e),{},Object(r.a)({},t.id,Object(l.a)({},t)))}),{})}),[t]);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"Tabs page"}),Object(i.jsx)("div",{className:"tabs is-boxed",children:Object(i.jsx)("ul",{children:t.map((function(e){var t=e.id,a=e.title;return Object(i.jsx)("li",{"data-cy":"Tab",className:h()({"is-active":c===t}),children:Object(i.jsx)(n.b,{to:"/tabs/".concat(t),children:a})},t)}))})}),Object(i.jsx)(O,{tabsMap:a,activeTabId:c})]})},m=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},u=(c(19),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),v=function(){var e=Object(b.f)().pathname;return Object(i.jsxs)(i.Fragment,{children:["/home"===e&&Object(i.jsx)(b.a,{to:"/",replace:!0}),Object(i.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(n.c,{to:"/",className:function(e){var t=e.isActive;return"navbar-item".concat(t?" is-active":"")},children:"Home"}),Object(i.jsx)(n.c,{to:"/tabs",className:function(e){var t=e.isActive;return"navbar-item".concat(t?" is-active":"")},children:"Tabs"})]})})}),Object(i.jsx)("div",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)(b.d,{children:[Object(i.jsx)(b.b,{path:"/",element:Object(i.jsx)(j,{})}),Object(i.jsxs)(b.b,{path:"tabs",children:[Object(i.jsx)(b.b,{index:!0,element:Object(i.jsx)(x,{tabs:u})}),Object(i.jsx)(b.b,{path:":tabId",element:Object(i.jsx)(x,{tabs:u})})]}),Object(i.jsx)(b.b,{path:"*",element:Object(i.jsx)(m,{})})]})})})]})};s.a.render(Object(i.jsx)(n.a,{children:Object(i.jsx)(v,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.20295de5.chunk.js.map