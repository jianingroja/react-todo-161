(this["webpackJsonpreact-todo-161"]=this["webpackJsonpreact-todo-161"]||[]).push([[0],[,,,,,,,function(e,t,n){},,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(8),c=n.n(s),r=(n(14),n(2)),l=n(3),o=n(1),u=n(5),h=n(4),d=(n(15),n(16),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"header"},i.a.createElement("h2",{className:"title"}," Jquery To Do List"),i.a.createElement("p",{className:"sub-title"},i.a.createElement("em",null,"Simple Todo List with adding and filter by diff status.")))}}]),n}(i.a.Component)),f=(n(17),n(7),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).props=e,a.state={todo:a.props.content,isReadOnly:!0,isChecked:a.props.isChecked},a.handleInputChange=a.handleInputChange.bind(Object(o.a)(a)),a.handleReadOnly=a.handleReadOnly.bind(Object(o.a)(a)),a.handleChecked=a.handleChecked.bind(Object(o.a)(a)),a}return Object(l.a)(n,[{key:"handleInputChange",value:function(e){this.setState({todo:e.target.value})}},{key:"handleReadOnly",value:function(){this.setState({isReadOnly:!1})}},{key:"handleChecked",value:function(e){this.setState({isChecked:e.target.checked}),this.props.handleState(this.props.id+1,e.target.checked)}},{key:"render",value:function(){return i.a.createElement("li",{className:this.props.id%2===0?null:"even"},i.a.createElement("input",{type:"checkbox",className:"checkbox",checked:this.state.isChecked,onChange:this.handleChecked}),i.a.createElement("input",{type:"text",className:this.state.isChecked?"completed input-text":"input-text",readOnly:this.state.isReadOnly,value:this.state.todo,onChange:this.handleInputChange,onDoubleClick:this.handleReadOnly}))}}]),n}(i.a.Component)),m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).props=e,a}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"list-wrapper"},i.a.createElement("ol",null,this.props.tasks.map((function(t,n){return i.a.createElement(f,{content:t.content,key:t.id,id:n,isChecked:t.isChecked,handleState:e.props.handleState,handleContentChange:e.props.handleContentChange})}))))}}]),n}(i.a.Component),b=(n(18),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={item:""},a.handleSubmit=a.handleSubmit.bind(Object(o.a)(a)),a.handleChange=a.handleChange.bind(Object(o.a)(a)),a}return Object(l.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault(),""!==this.state.item&&(this.props.onFormSubmit(this.state.item),this.setState({item:""}))}},{key:"handleChange",value:function(e){this.setState({item:e.target.value})}},{key:"render",value:function(){return i.a.createElement("form",{className:"from",onSubmit:this.handleSubmit},i.a.createElement("input",{type:"text",className:"input",placeholder:"Enter Item",value:this.state.item,onChange:this.handleChange}),i.a.createElement("button",{className:"button"},"Add"))}}]),n}(i.a.Component)),k=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={tasks:[{id:1,content:"Learning something pretty",isChecked:!1}],filteredTasks:[],isFiltered:!1},a.handleSubmit=a.handleSubmit.bind(Object(o.a)(a)),a.handleState=a.handleState.bind(Object(o.a)(a)),a.handlecontentChange=a.handleContentChange.bind(Object(o.a)(a)),a}return Object(l.a)(n,[{key:"handleSubmit",value:function(e){var t=this;this.setState((function(n){var a=[{id:t.state.tasks.length+1,content:e,isChecked:!1}];return{tasks:n.tasks.concat(a)}})),this.filterTasks("Active")}},{key:"handleState",value:function(e,t){this.setState((function(n){return n.tasks.map((function(n){return n.id===e&&(n.isChecked=t),n}))}))}},{key:"handleContentChange",value:function(e,t){this.setState((function(n){return n.tasks.map((function(n){return n.id===e&&(n.content=t),n}))}))}},{key:"filterTasks",value:function(e){switch(e){case"Active":this.setState((function(e){return{filteredTasks:e.tasks.filter((function(e){return!e.isChecked}))}}));break;case"Completed":this.setState((function(e){return{filteredTasks:e.tasks.filter((function(e){return e.isChecked}))}}));break;case"All":default:this.setState({filteredTasks:this.state.tasks})}this.setState({isFiltered:!0})}},{key:"render",value:function(){return i.a.createElement("div",{className:"todo-body"},i.a.createElement("div",null,i.a.createElement(b,{onFormSubmit:this.handleSubmit}),i.a.createElement(m,{tasks:this.state.isFiltered?this.state.filteredTasks:this.state.tasks,handleState:this.handleState,handleContentChange:this.handlecontentChange})))}}]),n}(i.a.Component),p=(n(19),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).props=e,a.state={condition:"All"},a}return Object(l.a)(n,[{key:"filterTasks",value:function(e){this.props.filterTasks(e),this.setState({condition:e})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"footer"},i.a.createElement("button",{className:"All"===this.state.condition?"filtered":"button-footer",onClick:function(t){return e.filterTasks("All",t)}},"All"),i.a.createElement("button",{className:"Active"===this.state.condition?"filtered":"button-footer",onClick:function(t){return e.filterTasks("Active",t)}},"Active"),i.a.createElement("button",{className:"Completed"===this.state.condition?"filtered":"button-footer",onClick:function(t){return e.filterTasks("Completed",t)}},"Completed"))}}]),n}(i.a.Component)),C=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).body=i.a.createRef(),a.filterTasks=a.filterTasks.bind(Object(o.a)(a)),a}return Object(l.a)(n,[{key:"filterTasks",value:function(e){this.body.current.filterTasks(e)}},{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement(d,null),i.a.createElement(k,{ref:this.body}),i.a.createElement(p,{filterTasks:this.filterTasks}))}}]),n}(i.a.Component);c.a.render(i.a.createElement(C,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.892a938e.chunk.js.map