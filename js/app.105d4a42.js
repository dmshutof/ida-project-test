(function(t){function e(e){for(var s,n,c=e[0],o=e[1],l=e[2],u=0,p=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&p.push(r[n][0]),r[n]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],s=!0,c=1;c<i.length;c++){var o=i[c];0!==r[o]&&(s=!1)}s&&(a.splice(e--,1),t=n(n.s=i[0]))}return t}var s={},r={app:0},a=[];function n(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=s,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/ida-project-test/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=o;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},1012:function(t,e,i){},2593:function(t,e,i){"use strict";i("ab62")},"27f0":function(t,e,i){},"3af7":function(t,e,i){"use strict";i("a6b4")},"3e9a":function(t,e,i){},"3f0d":function(t,e,i){"use strict";i("3e9a")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",{attrs:{id:"app"}},[i("div",{staticClass:"fix"},[i("Sidebar"),i("Cards")],1)])},a=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:{sticky_block:t.windowWidth>768}},[i("div",{staticClass:"hamb",class:{active:t.hambActive},on:{click:function(e){t.hambActive=!t.hambActive}}},[i("span"),i("span"),i("span"),i("span")]),i("div",{class:{opened:t.hambActive,sticky_block:t.windowWidth<=768}},[i("h1",[t._v("Добавление товара")]),i("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[i("div",{staticClass:"input_wrap",class:{loading:"PENDING"===t.submitStatus}},t._l(t.$v.formInputs.$each.$iter,(function(t,e){return i("Input",{key:e,attrs:{input:t}})})),1),i("button",{attrs:{type:"submit",disabled:"PENDING"===t.submitStatus||t.$v.$invalid}},[i("span",[t._v("Добавить товар")])]),i("transition",{attrs:{name:"fade"}},[""!==t.submitStatus?i("Loader",{attrs:{status:t.submitStatus}}):t._e()],1)],1)])])},c=[],o=(i("ac1f"),i("5319"),i("d3b7"),i("159b"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"input_box",class:{error:t.input.$error}},[i("label",{attrs:{for:"input"+t.input.$model.id}},[t._v(t._s(t.input.$model.label)+" "),t.input.$model.req?i("svg",{attrs:{width:"4",height:"4",viewBox:"0 0 4 4",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("rect",{attrs:{width:"4",height:"4",rx:"2",fill:"#FF8484"}})]):t._e()]),"INPUT"===t.input.$model.type?i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.input.value.$model,expression:"input.value.$model",modifiers:{trim:!0}}],staticClass:"input_box__input",attrs:{type:"text",id:"input"+t.input.$model.id,placeholder:t.input.$model.placeholder,autocomplete:"off"},domProps:{value:t.input.value.$model},on:{input:[function(e){e.target.composing||t.$set(t.input.value,"$model",e.target.value.trim())},t.Mask],blur:function(e){return t.$forceUpdate()}}}):t._e(),"TEXTAREA"===t.input.$model.type?i("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.input.value.$model,expression:"input.value.$model",modifiers:{trim:!0}}],staticClass:"input_box__input",attrs:{id:"input"+t.input.$model.id,placeholder:t.input.$model.placeholder},domProps:{value:t.input.value.$model},on:{input:function(e){e.target.composing||t.$set(t.input.value,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}):t._e(),t.input.$error?i("div",{staticClass:"input_description error"},[t._v("Поле обязательно для заполнения")]):t._e()])}),l=[],d=(i("a15b"),i("1276"),i("25f0"),{props:{input:Object},name:"Input",methods:{Mask:function(){this.$props.input.$model.mask&&(this.$props.input.value.$model=this.$props.input.value.$model.toString().split(" ").join("").replace(/[^\d]/g,"").replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,"$1 "))}}}),u=d,p=(i("2593"),i("2877")),m=Object(p["a"])(u,o,l,!1,null,"46d9a6f1",null),f=m.exports,v=i("b5ae"),h=JSON.parse(localStorage.getItem("CardsLocal"))||[{id:1,title:"аНаименование товара",image:"./assets/cardImage.jpg",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:10001},{id:2,title:"бНаименование товара",image:"./assets/cardImage.jpg",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:10002},{id:3,title:"вНаименование товара",image:"./assets/cardImage.jpg",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:10003},{id:4,title:"гНаименование товара",image:"./assets/cardImage.jpg",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:10004},{id:5,title:"дНаименование товара",image:"./assets/cardImage.jpg",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:10005},{id:6,title:"Наименование товара",image:"./assets/cardImage.jpg",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:10006},{id:7,title:"Наименование товара",image:"./assets/cardImage.jpg",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:10007},{id:8,title:"Наименование товара",image:"./assets/cardImage.jpg",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:10008},{id:9,title:"Наименование товара",image:"./assets/cardImage.jpg",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:10009},{id:10,title:"Наименование товара",image:"./assets/cardImage.jpg",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:10010},{id:11,title:"Наименование товара",image:"./assets/cardImage.jpg",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:10011},{id:12,title:"Наименование товара",image:"./assets/cardImage.jpg",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:10012},{id:13,title:"Наименование товара",image:"./assets/cardImage.jpg",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:10013},{id:14,title:"Наименование товара",image:"./assets/cardImage.jpg",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:10014},{id:15,title:"Наименование товара",image:"./assets/cardImage.jpg",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:10015},{id:16,title:"Наименование товара",image:"./assets/cardImage.jpg",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:10016},{id:17,title:"Наименование товара",image:"./assets/cardImage.jpg",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:10017}],g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"loader_bg"},[i("div",{staticClass:"rings",class:{success:"OK"===t.status,error:"ERROR"===t.status}},[i("div",{staticClass:"ring"}),i("div",{staticClass:"ring"}),i("div",{staticClass:"ring"}),i("div",{staticClass:"ring"}),i("div",{staticClass:"ring"})]),i("div",{staticClass:"loader_wrap"},[i("svg",{staticClass:"loader",class:{success:"OK"===t.status,error:"ERROR"===t.status},attrs:{viewBox:"0 0 55 55","xml:space":"preserve"}},["OK"===t.status||"PENDING"===t.status?i("path",{staticClass:"loader_path",attrs:{d:"M17.5,42.3l23.2-23.2L23.9,35.9l-17-17c3.4-8.1,11.3-13.7,20.6-13.7c12.3,0,22.3,10,22.3,22.3 s-10,22.3-22.3,22.3S5.2,39.8,5.2,27.5c0-3.1,0.6-6,1.7-8.6"}}):t._e(),"ERROR"===t.status?i("path",{staticClass:"loader_path",attrs:{d:"M15.8,39.2l23.4-23.4v23.4L11.7,11.7c4-4,9.6-6.5,15.8-6.5c12.3,0,22.3,10,22.3,22.3s-10,22.3-22.3,22.3 S5.2,39.8,5.2,27.5c0-6.2,2.5-11.8,6.6-15.8"}}):t._e()]),"OK"===t.status?i("span",[t._v("Товар добавлен!")]):t._e(),"ERROR"===t.status?i("span",[t._v("Заполните форму")]):t._e()])])},_=[],b={name:"Loader",props:{status:String}},w=b,C=(i("3f0d"),Object(p["a"])(w,g,_,!1,null,"a14fc5ae",null)),S=C.exports,$={name:"Sidebar",components:{Input:f,Loader:S},created:function(){var t=this;this.windowWidth=window.innerWidth,window.addEventListener("resize",(function(){t.windowWidth=window.innerWidth}))},validations:{formInputs:{$each:{value:{required:Object(v["requiredIf"])((function(t){return t.req}))}}}},data:function(){return{formInputs:[{id:1,placeholder:"Введите наименование товара",label:"Наименование товара",req:!0,type:"INPUT",value:"",mask:!1},{id:2,placeholder:"Введите описание товара",label:"Описание товара",req:!1,type:"TEXTAREA",value:"",mask:!1},{id:3,placeholder:"Введите ссылку",label:"Ссылка на изображение товара",req:!0,type:"INPUT",value:"",mask:!1},{id:4,placeholder:"Введите цену",label:"Цена товара",req:!0,type:"INPUT",value:"",mask:!0}],submitStatus:"",hambActive:!1,windowWidth:null}},methods:{submit:function(){var t=this;if(this.$v.$touch(),this.$v.$invalid)this.submitStatus="ERROR",setTimeout((function(){t.submitStatus=""}),1e3);else{this.submitStatus="PENDING";var e={id:h.length+1,title:this.formInputs[0].value,description:this.formInputs[1].value,image:this.formInputs[2].value,price:parseFloat(this.formInputs[3].value.replace(/\s/g,""))};setTimeout((function(){t.submitStatus="OK",setTimeout((function(){t.submitStatus="",h.push(e),t.formInputs.forEach((function(t){t.value=""})),t.$v.$reset(),t.hambActive=!1}),5e3)}),1e3)}}}},I=$,j=(i("80eb"),Object(p["a"])(I,n,c,!1,null,"47cc8aa9",null)),O=j.exports,E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("sort-dropdown",{attrs:{"current-select-props":t.currentSelect},on:{"update:currentSelectProps":function(e){t.currentSelect=e},"update:current-select-props":function(e){t.currentSelect=e}}}),i("transition-group",{ref:"cardsContainer",staticClass:"cards",attrs:{name:"cards",tag:"div"}},t._l(t.sortCards,(function(e){return i("Card",{key:e.id,attrs:{card:e,"delete-card":t.deleteCard}})})),1)],1)},y=[],x=(i("4e82"),i("a434"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"card",attrs:{"data-id":t.card.id}},[s("span",{staticClass:"card__delete",on:{click:function(e){return t.deleteCard(t.card.id)}}},[s("img",{attrs:{src:i("d739"),alt:"delete"}})]),s("div",{staticClass:"card__image"},[s("img",{attrs:{src:t.card.image,alt:t.card.title}})]),s("div",{staticClass:"card__info"},[s("p",{staticClass:"card__title"},[t._v(t._s(t.card.title))]),s("p",{staticClass:"card__description"},[t._v(t._s(t.card.description))]),s("div",{staticClass:"card__price"},[t._v(t._s(t.card.price.toLocaleString())+" руб.")])])])}),k=[],L={name:"Card",props:{card:Object,deleteCard:Function}},P=L,R=(i("ec74"),Object(p["a"])(P,x,k,!1,null,"98587d4e",null)),N=R.exports,T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"select",staticClass:"select",class:{active:t.showSelectList}},[i("div",{staticClass:"select_selected",on:{click:function(e){t.showSelectList=!t.showSelectList}}},[i("span",{staticClass:"select__current"},[t._v(t._s(t.currentSelect.title))]),i("svg",{staticClass:"chevron",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"}},[i("g",{staticClass:"chevron__lines"},[i("path",{staticClass:"chevron__line chevron__line_left",attrs:{d:"M10 50h40"}}),i("path",{staticClass:"chevron__line chevron__line_right",attrs:{d:"M90 50H50"}})])])]),i("transition",{attrs:{name:"select_list"}},[i("ul",{directives:[{name:"show",rawName:"v-show",value:t.showSelectList,expression:"showSelectList"}],staticClass:"select_list"},t._l(t.selectList,(function(e){return i("li",{key:e.id,staticClass:"select_list__item ",class:{selected:t.currentSelect===e.code},on:{click:function(i){return t.changeSelect(e)}}},[t._v(t._s(e.title)+" ")])})),0)])],1)},A=[],M={name:"SortDropdown",props:{currentSelectProps:Object},created:function(){document.addEventListener("click",this.dropdownOffClick),this.currentSelect=this.$props.currentSelectProps},destroyed:function(){document.removeEventListener("click",this.dropdownOffClick)},data:function(){return{currentSelect:null,selectList:[{id:1,title:"По умолчанию",code:"DEFAULT"},{id:2,title:"По убыванию цены",code:"PRICE_MIN"},{id:3,title:"По возрастанию цены",code:"PRICE_MAX"},{id:4,title:"По наименованию",code:"SORT_NAME"}],showSelectList:!1}},methods:{changeSelect:function(t){this.currentSelect=t,this.showSelectList=!1,this.$emit("update:currentSelectProps",t)},dropdownOffClick:function(t){var e=this.$refs.select,i=t.target;e===i||e.contains(i)||(this.showSelectList=!1)}}},D=M,U=(i("3af7"),Object(p["a"])(D,T,A,!1,null,"33f66cf1",null)),q=U.exports,F={name:"Main",components:{Card:N,SortDropdown:q},created:function(){this.cards=h},data:function(){return{cards:[],currentSelect:{id:1,title:"По умолчанию",code:"DEFAULT"}}},computed:{sortCards:function(){var t,e=this.cards;return"DEFAULT"===this.currentSelect.code&&(t=e.sort((function(t,e){return t.id-e.id}))),"SORT_NAME"===this.currentSelect.code&&(t=e.sort((function(t,e){var i=t.title.toLowerCase(),s=e.title.toLowerCase();return i<s?-1:i>s?1:void 0}))),"PRICE_MIN"===this.currentSelect.code&&(t=e.sort((function(t,e){return e.price-t.price}))),"PRICE_MAX"===this.currentSelect.code&&(t=e.sort((function(t,e){return t.price-e.price}))),t}},methods:{deleteCard:function(t){var e=this;this.cards.forEach((function(i,s){i.id===t&&e.cards.splice(s,1)}))}}},W=F,K=(i("7769"),Object(p["a"])(W,E,y,!1,null,"848171d8",null)),G=K.exports,X={name:"App",components:{Sidebar:O,Cards:G},created:function(){window.addEventListener("unload",(function(){}))}},B=X,J=(i("5c0b"),Object(p["a"])(B,r,a,!1,null,null,null)),z=J.exports,H=i("1dce"),Q=i.n(H);s["a"].config.productionTip=!1,s["a"].use(Q.a),new s["a"]({render:function(t){return t(z)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";i("9c0c")},7769:function(t,e,i){"use strict";i("e5aa")},"80eb":function(t,e,i){"use strict";i("27f0")},"9c0c":function(t,e,i){},a6b4:function(t,e,i){},ab62:function(t,e,i){},d739:function(t,e,i){t.exports=i.p+"img/delete.62bd31fa.svg"},e5aa:function(t,e,i){},ec74:function(t,e,i){"use strict";i("1012")}});
//# sourceMappingURL=app.105d4a42.js.map