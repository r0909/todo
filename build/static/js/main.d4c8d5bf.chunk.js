(window.webpackJsonptodo=window.webpackJsonptodo||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(7),l=n.n(c),r=(n(13),n(1)),s=n(2),i=n(4),m=n(3),u=n(5),d=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).handleKeyDown=function(e){if(13===e.keyCode&&null!=e.target.value&&e.target.value.length>0){var t=e.target.value;n.props.addToDo({title:t}),e.target.value=""}},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"form-group"},o.a.createElement("h1",{style:{textAlign:"center",marginBottom:"20px"}},"\u5f85\u529e\u4e8b\u9879"),o.a.createElement("input",{type:"text",className:"form-control",placeholder:"\u8f93\u5165\u540e\u6309\u56de\u8f66\u4fdd\u5b58",autoFocus:!0,onKeyDown:this.handleKeyDown}))}}]),t}(o.a.Component),p=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.todo;return o.a.createElement("div",null,o.a.createElement("li",{className:"list-group-item"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-1"},o.a.createElement("input",{type:"checkbox",checked:t.completed,onChange:function(){return e.props.toggle(t.id)}})),o.a.createElement("div",{className:"col-md-10",style:{textDecoration:t.completed?"line-through":""}},t.title),o.a.createElement("div",{className:"col-md-1"},o.a.createElement("button",{className:"btn btn-danger btn-xs",onClick:function(){return e.props.remove(t.id)}},"x")))))}}]),t}(o.a.Component),h="all",f=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"row",style:{textAlign:"center",marginTop:"10px"}},o.a.createElement("div",{className:"col-md-4",style:{textAlign:"left"}},this.props.activeTodoCount>0?o.a.createElement("button",{className:"btn btn-primary",type:"button"},"\u4f60\u6709 ",o.a.createElement("span",{className:"badge"},this.props.activeTodoCount)," \u4ef6\u5f85\u529e"):null),o.a.createElement("div",{className:"col-md-5"},o.a.createElement("button",{className:"".concat(this.filter===h?"btn-success":"btn-default"," btn-sm"),onClick:function(){return e.props.changeFilter(h)},style:{margin:"0 5px"}},"\u5168\u90e8"),o.a.createElement("button",{className:"".concat("active"===this.filter?"btn-success":"btn-default"," btn-sm"),onClick:function(){return e.props.changeFilter("active")},style:{margin:"0 5px"}},"\u672a\u5b8c\u6210"),o.a.createElement("button",{className:"".concat("completed"===this.filter?"btn-success":"btn-default"," btn-sm"),onClick:function(){return e.props.changeFilter("completed")},style:{margin:"0 5px"}},"\u5df2\u5b8c\u6210")),o.a.createElement("div",{className:"col-md-3",style:{textAlign:"right"}},this.props.completedTodoCount>0?o.a.createElement("button",{className:"btn btn-danger",onClick:this.props.clearCompleted},"\u5220\u9664\u5df2\u5b8c\u6210"):null))}}]),t}(o.a.Component),b=(n(14),n(15),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(i.a)(this,Object(m.a)(t).call(this,e))).changeFilter=function(e){n.setState({filter:e})},n.state={filter:h},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.model.todos,n=t.reduce(function(e,t){return e+(t.completed?0:1)},0),a=t.length-n,c=t.filter(function(t){switch(e.state.filter){case"active":return!t.completed;case"completed":return t.completed;default:return!0}}),l=o.a.createElement("ul",{className:"list-group"},t.length>0?o.a.createElement("li",{className:"list-group-item"},o.a.createElement("input",{type:"checkbox",checked:0===n,onChange:this.props.model.toggleAll}),0===n?"\u53cd\u9009":"\u5168\u9009"):null,c.map(function(t,n){return o.a.createElement(p,{key:n,todo:t,toggle:e.props.model.toggle,remove:e.props.model.remove})}));return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-3"}),o.a.createElement("div",{className:"col-md-6"},o.a.createElement("div",{className:"panel panel-default"},o.a.createElement("div",{className:"panel-header"},o.a.createElement(d,{addToDo:this.props.model.addToDo})),o.a.createElement("div",{className:"panel-body"},l),o.a.createElement("div",{className:"panel-footer"},o.a.createElement(f,{activeTodoCount:n,changeFilter:this.changeFilter,filter:this.state.filter,clearCompleted:this.props.model.clearCompleted,completedTodoCount:a})))),o.a.createElement("div",{className:"col-md-3"})))}}]),t}(o.a.Component)),g=new function e(){var t=this;Object(r.a)(this,e),this.subscribe=function(e){t.listeners.push(e)},this.emit=function(){t.listeners.forEach(function(e){return e()})},this.notify=function(e){localStorage.setItem(t.storeKey,JSON.stringify(e)),t.todos=e,t.emit()},this.addToDo=function(e){e.id=Date.now(),e.completed=!1;var n=t.todos;n.push(e),t.notify(n)},this.toggle=function(e){var n=t.todos;n=n.map(function(t){return t.id===e&&(t.completed=!t.completed),t}),t.notify(n)},this.remove=function(e){var n=t.todos,a=n.findIndex(function(t){return t.id===e});n.splice(a,1),t.notify(n)},this.toggleAll=function(e){var n=e.target.checked,a=t.todos;a=a.map(function(e){return e.completed=n,e}),t.notify(a)},this.clearCompleted=function(){var e=t.todos;e=e.filter(function(e){return!e.completed}),t.notify(e)},this.storeKey="todos",this.todos=localStorage.getItem(this.storeKey)?JSON.parse(localStorage.getItem(this.storeKey)):[],this.listeners=[]};function v(){l.a.render(o.a.createElement(b,{model:g}),document.getElementById("root"))}g.subscribe(v),v()},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.d4c8d5bf.chunk.js.map