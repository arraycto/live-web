(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-798e709e"],{"42a9":function(a,t){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAABYlBMVEUAAAD///9/f3+qqqp/f3+2trafn5+/v7+qqqqZmZmzs7OioqKVlZWqqqqkpKShoaGmpqafn5+qqqqenp6np6egoKChoaGjo6OmpqakpKShoaGlpaWhoaGnp6ehoaGlpaWkpKSmpqajo6Ompqajo6Onp6ekpKSlpaWkpKSjo6OioqKkpKSlpaWjo6OmpqakpKSjo6OkpKSlpaWkpKSkpKSkpKSkpKSkpKSlpaWkpKSjo6OkpKSjo6OlpaWkpKSkpKSkpKSlpaWkpKSlpaWkpKSkpKSkpKSjo6OlpaWkpKSjo6Ojo6OkpKSkpKSkpKSkpKSjo6OkpKSkpKSkpKSjo6OkpKSkpKSkpKSjo6OlpaWkpKSkpKSkpKSkpKSkpKSlpaWkpKSkpKSkpKSjo6OkpKSkpKSkpKSkpKSkpKSkpKSlpaWkpKSjo6OkpKSkpKSkpKSjo6OkpKSkpKSkpKSlpaWkpKSm5YojAAAAdXRSTlMAAQIDBAcICAkKCgsMDA4TFxgbHR0jJicoLS4wMTQ2Njg8PT9AQENESUtNVFVZWV9hZWxte4SPkZOVmZqbm5+jpqytr7Czt7q6vL3DxMbIycvNz9DR09fY2dna3t/g4eLj5OXm5ufp7u/w8PHy8vP09fX7/v4HJ7EQAAABfklEQVQ4y62U6T8CQRjHp4hyRJErch/JUW65a0XuI4qQyBWKtuf/N7PJzj4zvPJ7M7Of+e7znf3sM0NInTf6AXxuR0yExTRw/jhZpU1rZz8BZa2eLZh9aYDstEZ5Baa4YGF1fBn2kA0wKApQOFVCXOaaGDOULr2iBmgtup8TB8HRXOrhLqs1ZSF0CAtMyZVwN0bo8DzOoJDAMJeaaCHEsUfXr2RQybXvplPPMV0/kEBll5mQjqRKC/WIkO4ye5J0NTVqEiDedcTqUAZDgquP/SMjJHNhSOpCkNyFIHdK5kLQktRlhGpeaMd1IlfD+lYXD03Q+Qp2LQPEOKhyk857Cek2uLYBchzUdgNwYR1cveO/C0P+PED8UmtH/bsQZA0Wy12e1BkEOWPfyNNiu84gyPVAD0r+WhmrNnSOEbLPZ2JBf2sFalO0cbvLaRWOBIbk+X8o/Be0A/D2yzH/SXMc4F5yYfBRzgoAG5KrB+e1X3aJGfM+YyPidWhILjJsI1/4WwRWAbma3wAAAABJRU5ErkJggg=="},"534e":function(a,t,s){"use strict";s.r(t);var e=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"address",attrs:{id:"address_page"}},[e("backeheader",{attrs:{title:"收获地址"}}),e("scroll",{ref:"scroll",attrs:{clickable:""}},a._l(a.list,(function(t){return e("div",{key:t.id,staticClass:"address-item",on:{click:function(s){return a.goBack(t)}}},[e("div",{staticClass:"icon-wrap"},[t.id===a.selected?e("van-icon",{staticClass:"selected-icon",attrs:{name:"success"}}):a._e()],1),e("div",{staticClass:"info"},[e("div",{staticClass:"user"},[e("p",{staticClass:"name"},[a._v(a._s(t.name))]),e("p",{staticClass:"phone"},[a._v(a._s(t.mobile))]),t.default?e("p",{staticClass:"tag"},[a._v("默认")]):a._e()]),e("p",{staticClass:"desc"},[a._v(a._s(t.province+t.city+t.district)+a._s(t.address))])]),e("img",{staticClass:"edit",attrs:{src:s("42a9"),alt:""},on:{click:function(s){return s.stopPropagation(),a.goEdit(t)}}})])})),0),e("button",{staticClass:"create",on:{click:function(t){return a.$router.push("/address/edit")}}},[a._v("+新建地址")])],1)},p=[],c=(s("a9e3"),s("5530")),i=s("a750"),o=s("ef39"),k=s("60b3"),n=s("9feb"),r={name:"addresses",components:{Backeheader:i["a"],Scroll:o["a"]},data:function(){return{list:[],tagClass:{"家":"red","公司":"blue","学校":"orange"},selected:0}},mounted:function(){var a=this;this.getList(),this.$nextTick((function(){a.$refs.scroll.refresh(),a.selected=Number(a.$route.params.id)}))},methods:{goBack:function(a){this.selected=a.id,Object(n["c"])("selectAddress",a),this.$router.goBack()},goEdit:function(a){this.$router.push({name:"address-edit",params:{address:Object(c["a"])({},a)}})},getList:function(){var a=this,t=this.$skeLoading("#address_page");Object(k["b"])("/shop/user/getUserAddressList").then((function(s){var e=s.data.data;a.list=e,t.close()})).catch((function(){t.close()}))}}},l=r,d=(s("a726"),s("2877")),K=Object(d["a"])(l,e,p,!1,null,"4069c10d",null);t["default"]=K.exports},a726:function(a,t,s){"use strict";var e=s("c113"),p=s.n(e);p.a},c113:function(a,t,s){}}]);
//# sourceMappingURL=chunk-798e709e.0773edf4.js.map