(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},25:function(e,t,n){e.exports=n(39)},30:function(e,t,n){},36:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),l=n(13),r=n.n(l),i=(n(30),n(5)),s=n(6),c=n(8),u=n(7),h=n(9),m=n(3),d=n(12),p=(n(15),"");switch(window.location.hostname){case"localhost":p="http://localhost:3000";break;case"haccpclient.herokuapp.com":p="https://kcp-pieapi.herokuapp.com"}var g=p,E=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(d.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){console.log(n.state),e.preventDefault(),fetch("".concat(g,"/api/user"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:n.state})}).then(function(e){return e.json()}).then(function(e){console.log(e),n.props.setToken(e.sessionToken)})},n.state={username:"",password:""},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Sign Up"),o.a.createElement("h6",null,"Sign Up For the best FDA HACCP plan logging site in the classroom!"),o.a.createElement(m.e,{onSubmit:this.handleSubmit},o.a.createElement(m.f,null,o.a.createElement(m.h,{for:"username"},"Username"),o.a.createElement(m.g,{id:"su_sername",typr:"text",name:"username",placeholder:"enter username",onChange:this.handleChange})),o.a.createElement(m.f,null,o.a.createElement(m.h,{for:"password"},"Password"),o.a.createElement(m.g,{id:"su_password",type:"password",name:"password",placeholder:"enter password",onChange:this.handleChange})),o.a.createElement(m.a,{className:"button",type:"submit"},"Submit")))}}]),t}(a.Component),f=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(d.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){fetch("http://localhost:3000/api/login",{method:"POST",body:JSON.stringify({user:n.state}),headers:new Headers({"Content-Type":"application/json"})}).then(function(e){return e.json()}).then(function(e){console.log(e.sessionToken),n.props.setToken(e.sessionToken)}),e.preventDefault()},n.state={username:"",password:""},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Login"),o.a.createElement("h6",null,"Login to the best FDA HACCP log in the classroom!"),o.a.createElement(m.e,{onSubmit:this.handleSubmit},o.a.createElement(m.f,null,o.a.createElement(m.h,{for:"username"},"Username"),o.a.createElement(m.g,{id:"li_username",type:"username",name:"username",placeholder:"enter username",onChange:this.handleChange})),o.a.createElement(m.f,null,o.a.createElement(m.h,{for:"password"},"Password"),o.a.createElement(m.g,{id:"li_password",type:"password",name:"password",placeholder:"enter password",onChange:this.handleChange})),o.a.createElement(m.a,{className:"button",type:"submit"}," Submit ")))}}]),t}(a.Component),b=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(e){!0===n.state.showSignup?n.setState({showSignup:!1}):n.setState({showSignup:!0})},n.state={showSignup:!0},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(m.d,{className:"auth-container"},o.a.createElement(m.q,null,o.a.createElement(m.b,{md:"12"},!0===this.state.showSignup?o.a.createElement(E,{setToken:this.props.setToken}):o.a.createElement(f,{setToken:this.props.setToken}),o.a.createElement("br",null),o.a.createElement(m.a,{className:"button",type:"button",onClick:this.handleClick},!0===this.state.showSignup?o.a.createElement("p",null,"Login Here"):o.a.createElement("p",null,"Sign Up Here")))))}}]),t}(a.Component),k=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).toggle=function(){n.setState({isOpen:!n.state.isOpen})},n.state={isOpen:!1},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(m.n,{color:"grey",light:!0,expand:"ms"},o.a.createElement(m.o,{color:"white",href:"/"},"HACCP Plan Log Sheet"),o.a.createElement(m.p,{onClick:this.toggle}),o.a.createElement(m.c,{isOpen:this.state.isOpen,navbar:!0},o.a.createElement(m.l,{className:"ml-auto",navbar:!0},o.a.createElement(m.m,null,o.a.createElement(m.a,{onClick:function(){return e.props.clickLogout()}},"Logout"))))))}}]),t}(a.Component),w=(n(16),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(d.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),fetch("".concat(g,"/api/log/"),{method:"POST",body:JSON.stringify({log:n.state}),headers:new Headers({"Content-Type":"application/json",Authorization:n.props.token})}).then(function(e){return e.json()}).then(function(e){n.props.updateWorkoutsArray(),n.setState({id:"",results:"",description:"",definition:"",thawing:"",marinade:"",cooling:""})})},n.state={id:"",results:"",description:"",definition:"",thawing:"",marinade:"",cooling:""},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h3",null,"Log a production batch"),o.a.createElement("hr",null),o.a.createElement(m.e,{onSubmit:this.handleSubmit},o.a.createElement(m.f,null,o.a.createElement(m.h,{for:"result"},"Batch Number"),o.a.createElement(m.g,{id:"results",type:"text",name:"results",value:this.state.results,placeholder:"Batch #",onChange:this.handleChange})),o.a.createElement(m.f,null,o.a.createElement(m.h,{for:"def"},"Expiration Date"),o.a.createElement(m.g,{type:"text",name:"definition",id:"definition",value:this.state.definition,onChange:this.handleChange,placeholder:"Date"})),o.a.createElement(m.f,null,o.a.createElement(m.h,{for:"thawing"},"Thawing"),o.a.createElement(m.g,{type:"text",name:"thawing",id:"thawing",value:this.state.thawing,onChange:this.handleChange,placeholder:"Date Initials"})),o.a.createElement(m.f,null,o.a.createElement(m.h,{for:"marinade"},"Marinade"),o.a.createElement(m.g,{type:"text",name:"marinade",id:"marinade",value:this.state.marinade,onChange:this.handleChange,placeholder:"Date Initials"})),o.a.createElement(m.f,null,o.a.createElement(m.h,{for:"description"},"Smoking"),o.a.createElement(m.g,{id:"description",type:"text",name:"description",value:this.state.description,placeholder:"Date, Time, Initials",onChange:this.handleChange})),o.a.createElement(m.f,null,o.a.createElement(m.h,{for:"cooling"},"Cooling"),o.a.createElement(m.g,{type:"text",name:"cooling",id:"cooling",value:this.state.cooling,onChange:this.handleChange,placeholder:"Temp, Exposure time, Initials"})),o.a.createElement(m.a,{type:"submit",color:"primary"},"Submit")))}}]),t}(a.Component)),C=function(e){return o.a.createElement("div",null,o.a.createElement("h3",null,"HACCP Production Log"),o.a.createElement("hr",null),o.a.createElement(m.r,{striped:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"#"),o.a.createElement("th",null,"Batch Number"),o.a.createElement("th",null,"Experation Date"),o.a.createElement("th",null,"Thawing"),o.a.createElement("th",null,"Marinade"),o.a.createElement("th",null,"Smoking"),o.a.createElement("th",null,"Cooling"),o.a.createElement("th",null))),o.a.createElement("tbody",null,e.workouts.map(function(t,n){return o.a.createElement("tr",{key:n},o.a.createElement("th",{scope:"row"},t.id),o.a.createElement("td",null,t.results),o.a.createElement("td",null,t.definition),o.a.createElement("td",null,t.description),o.a.createElement("td",null,t.thawing),o.a.createElement("td",null,t.marinade),o.a.createElement("td",null,t.cooling),o.a.createElement("td",null,o.a.createElement(m.a,{id:t.id,onClick:e.delete,color:"danger"},"Delete"),o.a.createElement(m.a,{id:t.id,onClick:function(n){return e.update(n,t)},color:"warning"},"Update")))}))))},S=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(d.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.props.update(e,n.state)},n.state={id:"",results:"",description:"",definition:"",thawing:"",marinade:"",cooling:""},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.setState({id:this.props.workout.id,results:this.props.workout.results,description:this.props.workout.description,definition:this.props.workout.definition,thawing:this.props.workout.thawing,marinade:this.props.workout.marinade,cooling:this.props.workout.cooling})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(m.i,{isOpen:!0},o.a.createElement(m.k,null,"Update a Log"),o.a.createElement(m.j,null,o.a.createElement(m.e,{onSubmit:this.handleSubmit},o.a.createElement(m.f,null,o.a.createElement(m.h,{for:"result"},"Batch Number"),o.a.createElement(m.g,{id:"results",type:"text",name:"results",value:this.state.results,placeholder:"Batch #",onChange:this.handleChange})),o.a.createElement(m.f,null,o.a.createElement(m.h,{for:"def"},"Expiration Date"),o.a.createElement(m.g,{type:"text",name:"definition",id:"definition",value:this.state.definition,onChange:this.handleChange,placeholder:"Date"})),o.a.createElement(m.f,null,o.a.createElement(m.h,{for:"thawing"},"Thawing"),o.a.createElement(m.g,{type:"text",name:"thawing",id:"thawing",value:this.state.thawing,onChange:this.handleChange,placeholder:"Date Initials"})),o.a.createElement(m.f,null,o.a.createElement(m.h,{for:"marinade"},"Marinade"),o.a.createElement(m.g,{type:"text",name:"marinade",id:"marinade",value:this.state.marinade,onChange:this.handleChange,placeholder:"Date Initials"})),o.a.createElement(m.f,null,o.a.createElement(m.h,{for:"description"},"Smoking"),o.a.createElement(m.g,{id:"description",type:"text",name:"description",value:this.state.description,placeholder:"Date, Time, Initials",onChange:this.handleChange})),o.a.createElement(m.f,null,o.a.createElement(m.h,{for:"cooling"},"Cooling"),o.a.createElement(m.g,{type:"text",name:"cooling",id:"cooling",value:this.state.cooling,onChange:this.handleChange,placeholder:"Temp, Exposure time, Initials"})),o.a.createElement(m.a,{type:"submit",color:"primary"}," Submit ")))))}}]),t}(o.a.Component),O=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).fetchWorkouts=function(){fetch("".concat(g,"/api/log/"),{method:"GET",headers:new Headers({"Content-Type":"application/json",Authorization:n.props.token})}).then(function(e){return e.json()}).then(function(e){return n.setState({workouts:e})})},n.workoutDelete=function(e){fetch("".concat(g,"/api/log/").concat(e.target.id),{method:"DELETE",body:JSON.stringify({log:{id:e.target.id}}),headers:new Headers({"Content-Type":"application/json",Authorization:n.props.token})}).then(function(e){return n.fetchWorkouts()})},n.workoutUpdate=function(e,t){fetch("".concat(g,"/api/log/").concat(t.id),{method:"PUT",body:JSON.stringify({log:t}),headers:new Headers({"Content-Type":"application/json",Authorization:n.props.token})}).then(function(e){n.setState({updatePressed:!1}),n.fetchWorkouts()})},n.setUpdatedWorkout=function(e,t){n.setState({workoutToUpdate:t,updatePressed:!0})},n.state={workouts:[],updatePressed:!1,workoutToUpdate:{}},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.fetchWorkouts()}},{key:"render",value:function(){var e=this.state.workouts.length>=1?o.a.createElement(C,{workouts:this.state.workouts,delete:this.workoutDelete,update:this.setUpdatedWorkout}):o.a.createElement("h2",null,"Log a batch to see table");return o.a.createElement(m.d,null,o.a.createElement(m.q,null,o.a.createElement(m.b,{md:"3"},o.a.createElement(w,{token:this.props.token,updateWorkoutsArray:this.fetchWorkouts})),o.a.createElement(m.b,{md:"9"},e),o.a.createElement(m.b,{md:"12"},this.state.updatePressed?o.a.createElement(S,{t:this.state.updatePressed,update:this.workoutUpdate,workout:this.state.workoutToUpdate}):o.a.createElement("div",null))))}}]),t}(a.Component),v=function(e){return o.a.createElement("div",null,o.a.createElement(O,{token:e.sessionToken}))},y=n(43),j=n(42),T=n(41),x=(n(36),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).setSessionState=function(t){localStorage.setItem("token",t),e.setState({sessionToken:t})},e.logout=function(){e.setState({sessionToken:""}),localStorage.clear()},e.protectedViews=function(){return e.state.sessionToken===localStorage.getItem("token")?o.a.createElement(y.a,null,o.a.createElement(j.a,{path:"/",exact:!0},o.a.createElement(v,{sessionToken:e.state.sessionToken}))):o.a.createElement(j.a,{path:"/auth"},o.a.createElement(b,{setToken:e.setSessionState}))},e.state={sessionToken:""},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=localStorage.getItem("token");e&&!this.state.sessionToken&&this.setState({sessionToken:e})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(T.a,null,o.a.createElement("div",null,o.a.createElement(k,{clickLogout:this.logout}),this.protectedViews())))}}]),t}(a.Component));r.a.render(o.a.createElement(x,null),document.getElementById("root"))}},[[25,2,1]]]);
//# sourceMappingURL=main.d7e73ca5.chunk.js.map