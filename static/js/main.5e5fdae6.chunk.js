(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n(25)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),c=n.n(r),l=n(7),i=n(10),u=n(6),s=n(1),m=n(2),d=n(4),f=n(3),b=n(5),h=(n(18),function(e){var t=e.toDo,n=e.done;return o.a.createElement("div",{className:"app-header d-flex"},o.a.createElement("h1",null,"Todo List"),o.a.createElement("h2",null,t," more to do, ",n," done"))}),p=(n(19),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(d.a)(this,Object(f.a)(t).call(this))).state={term:""},e.onSearchChange=function(t){var n=t.target.value;e.setState({term:n}),e.props.onSearchChange(n)},e}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("input",{type:"text",className:"form-control search-input",onChange:this.onSearchChange,placeholder:"type to search",value:this.state.term})}}]),t}(a.Component)),g=n(11),v=(n(20),function(e){var t=e.label,n=e.onDeleted,a=e.onToggleImportant,r=e.onToggleDone,c=e.important,l="todo-list-item";return e.done&&(l+=" done"),c&&(l+=" important"),o.a.createElement("span",{className:l},o.a.createElement("span",{className:"todo-list-item-label",onClick:r},t),o.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:a},o.a.createElement("i",{className:"fa fa-exclamation"})),o.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:n},o.a.createElement("i",{className:"fa fa-trash-o"})))}),O=(n(21),function(e){var t=e.todos,n=e.onDeleted,a=e.onToggleImportant,r=e.onToggleDone,c=t.map(function(e){var t=e.id,c=Object(g.a)(e,["id"]);return o.a.createElement("li",{key:t,className:"list-group-item"},o.a.createElement(v,Object.assign({},c,{onDeleted:function(){n(t)},onToggleImportant:function(){a(t)},onToggleDone:function(){r(t)}})))});return o.a.createElement("ul",{className:"list-group todo-list"},c)}),j=(n(22),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).buttons=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.group,n=e.onFiltetChange,a=this.buttons.map(function(e){var a=e.name,r=e.label,c=t===a?"btn-info":"btn-outline-secondary";return o.a.createElement("button",{type:"button",className:"btn ".concat(c),key:a,onClick:function(){return n(a)}},r)});return o.a.createElement("div",{className:"btn-group"},a)}}]),t}(a.Component)),D=(n(23),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={label:""},n.onLabelChange=function(e){n.setState({label:e.target.value})},n.onSubmit=function(e){e.preventDefault(),n.props.onItemAdded(n.state.label),n.setState({label:""})},n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{className:"item-add-form d-flex",onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",className:"form-control",onChange:this.onLabelChange,placeholder:"What needs to be done",value:this.state.label}),o.a.createElement("button",{className:"btn btn-outline-secondary"},"Add"))}}]),t}(a.Component)),E=(n(24),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(d.a)(this,Object(f.a)(t).call(this))).maxId=100,e.state={todoData:[e.createTodoItem("Drink Coffe"),e.createTodoItem("Make Awesome App"),e.createTodoItem("Have a lunch")],term:"",group:"all"},e.deteleItem=function(t){e.setState(function(e){var n=e.todoData.findIndex(function(e){return e.id===t});return{todoData:[].concat(Object(u.a)(e.todoData.slice(0,n)),Object(u.a)(e.todoData.slice(n+1)))}})},e.addItem=function(t){var n=e.createTodoItem(t);e.setState(function(e){return{todoData:[].concat(Object(u.a)(e.todoData),[n])}})},e.onToggleImportant=function(t){e.setState(function(n){var a=n.todoData;return{todoData:e.toggleProperty(a,t,"important")}})},e.onToggleDone=function(t){e.setState(function(n){var a=n.todoData;return{todoData:e.toggleProperty(a,t,"done")}})},e.onSearchChange=function(t){e.setState({term:t})},e.onFiltetChange=function(t){e.setState({group:t})},e}return Object(b.a)(t,e),Object(m.a)(t,[{key:"createTodoItem",value:function(e){return{label:e,important:!1,done:!1,id:this.maxId++}}},{key:"toggleProperty",value:function(e,t,n){var a=e.findIndex(function(e){return e.id===t}),o=e[a],r=Object(i.a)({},o,Object(l.a)({},n,!o[n]));return[].concat(Object(u.a)(e.slice(0,a)),[r],Object(u.a)(e.slice(a+1)))}},{key:"search",value:function(e,t){return 0===t.length?e:e.filter(function(e){return e.label.toLowerCase().indexOf(t.toLowerCase())>-1})}},{key:"filter",value:function(e,t){switch(t){case"all":return e;case"active":return e.filter(function(e){return!e.done});case"done":return e.filter(function(e){return e.done});default:return e}}},{key:"render",value:function(){var e=this.state,t=e.todoData,n=e.term,a=e.group,r=this.search(this.filter(t,a),n),c=t.filter(function(e){return e.done}).length,l=t.length-c;return o.a.createElement("div",{className:"todo-app"},o.a.createElement(h,{toDo:l,done:c}),o.a.createElement("div",{className:"top-panel d-flex"},o.a.createElement(p,{onSearchChange:this.onSearchChange}),o.a.createElement(j,{group:a,onFiltetChange:this.onFiltetChange})),o.a.createElement(O,{todos:r,onDeleted:this.deteleItem,onToggleImportant:this.onToggleImportant,onToggleDone:this.onToggleDone}),o.a.createElement(D,{onItemAdded:this.addItem}))}}]),t}(a.Component));c.a.render(o.a.createElement(E,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.5e5fdae6.chunk.js.map