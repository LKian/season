(this.webpackJsonpseason=this.webpackJsonpseason||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),i=a.n(o),c=a(3),s=a(4),l=a(6),u=a(5),d=(a(12),{summer:{text:"To the beach",iconName:"sun"},winter:{text:"Brrr, it's cold!",iconName:"snowflake"}}),m=function(e){var t,a,n=(t=e.lat,(a=(new Date).getMonth())>2&&a<9?t>0?"summer":"winter":t>0?"winter":"summer"),o=d[n],i=o.text,c=o.iconName;return r.a.createElement("div",{className:"ui raised centered card "},r.a.createElement("div",{class:"ui top attached label"},"Current Latitude: ",e.lat),r.a.createElement("div",{class:"weather-season"},r.a.createElement("h2",null,n)),r.a.createElement("div",{className:"weather-alert"},r.a.createElement("i",{className:"icon icon-right big ".concat(c)}),r.a.createElement("h3",{className:"weather-activity"},i),r.a.createElement("i",{className:"icon icon-right big ".concat(c)})))},g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={lat:null,errorMessage:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("Data loading i.e. making network request to api, getting geolocation.  It is recommended to do data loading in 'componentDidMount' method.  That way, data loading is centralized."),window.navigator.geolocation.getCurrentPosition((function(t){return e.setState({lat:t.coords.latitude.toFixed(2)})}),(function(t){e.setState({errorMessage:t.message})}))}},{key:"componentDidUpdate",value:function(){console.log("Component Did Update")}},{key:"render",value:function(){return this.state.errorMessage&&!this.state.lat?r.a.createElement("div",null,"Error: ",this.state.errorMessage):!this.state.errorMessage&&this.state.lat?r.a.createElement("div",{class:"card-container"},r.a.createElement(m,{lat:this.state.lat})):r.a.createElement("div",null,"Loading...")}}]),a}(r.a.Component);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.3861f0e7.chunk.js.map