(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n(25)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(9),c=n.n(l),r=n(2),i=n(10),u=n(1),s=n(3),m=n(4),d=n(6),b=n(5),f=n(7),p=(n(18),function(e){var t=e.toDo,n=e.done;return o.a.createElement("div",{className:"app-header d-flex"},o.a.createElement("h1",null,"Todo List"),o.a.createElement("h2",null,t," more to do, ",n," done"))}),g=(n(19),function(){return o.a.createElement("input",{type:"text",className:"form-control search-input",placeholder:"type to search"})}),h=n(11),E=(n(20),function(e){var t=e.label,n=e.onDeleted,a=e.onToggleImportant,l=e.onToggleDone,c=e.important,r="todo-list-item";return e.done&&(r+=" done"),c&&(r+=" important"),o.a.createElement("span",{className:r},o.a.createElement("span",{className:"todo-list-item-label",onClick:l},t),o.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:a},o.a.createElement("i",{className:"fa fa-exclamation"})),o.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:n},o.a.createElement("i",{className:"fa fa-trash-o"})))}),v=(n(21),function(e){var t=e.todos,n=e.onDeleted,a=e.onToggleImportant,l=e.onToggleDone,c=t.map(function(e){var t=e.id,c=Object(h.a)(e,["id"]);return o.a.createElement("li",{key:t,className:"list-group-item"},o.a.createElement(E,Object.assign({},c,{onDeleted:function(){n(t)},onToggleImportant:function(){a(t)},onToggleDone:function(){l(t)}})))});return o.a.createElement("ul",{className:"list-group todo-list"},c)}),D=(n(22),function(){return o.a.createElement("div",{className:"btn-group"},o.a.createElement("button",{type:"button",className:"btn btn-info"},"All"),o.a.createElement("button",{type:"button",className:"btn btn-outline-secondary"},"Active"),o.a.createElement("button",{type:"button",className:"btn btn-outline-secondary"},"Done"))}),y=(n(23),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).state={label:""},n.onLabelChange=function(e){n.setState({label:e.target.value})},n.onSubmit=function(e){e.preventDefault(),n.props.onItemAdded(n.state.label),n.setState({label:""})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{className:"item-add-form d-flex",onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",className:"form-control",onChange:this.onLabelChange,placeholder:"What needs to be done",value:this.state.label}),o.a.createElement("button",{className:"btn btn-outline-secondary"},"Add"))}}]),t}(a.Component)),I=(n(24),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(d.a)(this,Object(b.a)(t).call(this))).deteleItem=function(t){e.setState(function(e){var n=e.todoData.findIndex(function(e){return e.id===t});return{todoData:[].concat(Object(u.a)(e.todoData.slice(0,n)),Object(u.a)(e.todoData.slice(n+1)))}})},e.addItem=function(t){var n=e.createTodoItem(t);e.setState(function(e){return{todoData:[].concat(Object(u.a)(e.todoData),[n])}})},e.onToggleImportant=function(t){e.setState(function(n){var a=n.todoData;return{todoData:e.toggleProperty(a,t,"important")}})},e.onToggleDone=function(t){e.setState(function(n){var a=n.todoData;return{todoData:e.toggleProperty(a,t,"done")}})},e.maxId=100,e.state={todoData:[e.createTodoItem("Drink Coffe"),e.createTodoItem("Make Awesome App"),e.createTodoItem("Have a lunch")]},e}return Object(f.a)(t,e),Object(m.a)(t,[{key:"createTodoItem",value:function(e){return{label:e,important:!1,done:!1,id:this.maxId++}}},{key:"toggleProperty",value:function(e,t,n){var a=e.findIndex(function(e){return e.id===t}),o=e[a],l=Object(i.a)({},o,Object(r.a)({},n,!o[n]));return[].concat(Object(u.a)(e.slice(0,a)),[l],Object(u.a)(e.slice(a+1)))}},{key:"render",value:function(){var e=this.state.todoData,t=e.filter(function(e){return e.done}).length,n=e.length-t;return o.a.createElement("div",{className:"todo-app"},o.a.createElement(p,{toDo:n,done:t}),o.a.createElement("div",{className:"top-panel d-flex"},o.a.createElement(g,null),o.a.createElement(D,null)),o.a.createElement(v,{todos:e,onDeleted:this.deteleItem,onToggleImportant:this.onToggleImportant,onToggleDone:this.onToggleDone}),o.a.createElement(y,{onItemAdded:this.addItem}))}}]),t}(a.Component));c.a.render(o.a.createElement(I,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.ae85256e.chunk.js.map