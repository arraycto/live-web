(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-013a7da1"],{"05fd":function(s,t){s.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAAAkFBMVEUAAABRUFZQUFZQTlZRUFZRUFZQTltTUVVRUFZRUFZRUFZPT1ZRUFZRUFVQUFVQTlZRT1VQUFRRUFZRUFZRUFZRUFZRUFZQT1VQUFVRUFVRUFZRUFZRUFZRT1ZRUFZRUFZRUFVSUVZRUFZRUFZRUFZQUFZRUFZRUFVRUFZRUFVRT1VRUFZRUFZRT1ZRUFZRUFbgwHqAAAAAL3RSTlMA+3oL9/MGEfDs6Bbjv0ocKCCxzoCZdVo4JNTKxpSQXz4y3tm6oIaqpUMti2ZuUs9tnWMAAAMlSURBVEjH1ZXXmqowEIADJPQOUhQFFRCs7/92Z4awuBTLudy5gS+TP9MT8kdFNs5X32SUMt0SE0f+DkrCjAqPXgS6vthfgMrW7JmB1Mv0AyS1OocEgakqE/oT9Jvy1lSocc+sS5Tf7fgW+lpH0sp5g50Y7lGrvSH/HOTWDEHBSl/aanAD2+zHy07DkPONFykUUa2FyizgK2ZJqJYTmmBcNJb6Q7yz6/1sLI5or15M4hrDyvHXSHYHTKTKzFXR+XbXQXlIFrAQHdlJYCcv2bN01Lqi1zfUrqQZlaKxtQNWG3VcbrYCTq6A09wZdqNwcg7UqrMkMP1w0FWhS34DVlx9KTqpAn0AKYgobizFuDjvi1j0u+RfZCJt4QR96qVngjaGr4ZFiI2hlrGJCzZkBXyn9gTbo+sp9EmfzqfYGhy4lYgRgGo1wa6AlQZJsUCNPEvxwSOkBFU2wbb8yJiBJ+exCpNBC0IuGP04OCMDLCREhJPNaaueQBcRkuMEhWfl14E+VlMkcg1ff9qrF1g8QZBdMVjzHIUIV+iVZ/ky6x8elEP5AN8GBfrGVhLWGo1OBLUBfONARUwcKTaEfMCIcT/OMKvHHuEUi54BW4uYvIOf3azLS/2YEKVojVdYzZM2FiA8cITRk7KIDUHORdoy6Lp0EeNh6EPBHM8xDMPx3HarCd04zjDuWw5nMqU3IB7N9SbL1ibl16x2lU8jzDb7mUhwfu58sdUfI6GRRGz6MO1fc1O3chc8Toc/TMwggqBZBfrd1nuyIA3eUC53stbBO0oFqgeVaEvkjSQUR0HmXOq65/3ZdVMHmPeywdhb8r9S4A1l5tJP0HfvG4r310ONuJ/2QV07X3FGiVzG767sgT36laQWcEdviNRXPjOuWG5MxJwBU4Nsl8ivEcmNDuyBMsJQqLpNXhhtK+xXlKdnzbAiMD+XFjJYm8KwgwUJX3V8ldFheaXMKJF2KnVt7WxvlNlCLAOdP0PV1N7exGVzFy9WV7HDDEEhml3m+JZ6rxPmRDgQm4mba/6KvZMbPiGT9wFuc5Z/aB8Vu2ASW0CrT91w1dSY/CX5B8rTc5m/vhmMAAAAAElFTkSuQmCC"},"13c0":function(s,t,o){"use strict";var i=o("8f02"),a=o.n(i);a.a},"3e63":function(s,t,o){"use strict";o.r(t);var i=function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"store",staticStyle:{"padding-top":"44px"},attrs:{id:"store_page"}},[i("back-header",[i("router-link",{staticClass:"open-store",attrs:{to:"/personal"}},[i("van-icon",{staticClass:"shop-icon",attrs:{name:"shop-o"}}),i("span",[s._v("我要开店")])],1)],1),i("scroll",{ref:"scroll",staticClass:"scroll",attrs:{"is-finished":s.isFinished,clickable:""},on:{scrollToEnd:s.onLoad}},[i("div",[i("div",{staticClass:"boss"},[i("img",{staticClass:"avatar",attrs:{src:s.user.avatar||s.$store.state.defaultAvatar,alt:""}}),i("p",[s._v(s._s(s.user.nick_name))]),i("div",{staticStyle:{flex:"1"}}),i("img",{staticClass:"chat",attrs:{src:o("05fd"),alt:""},on:{click:s.chat}})]),i("div",{staticClass:"goods-list"},[i("h4",[i("span",[s._v(s._s(s.goodsType)+"（"+s._s(s.goodsCount)+"）")])]),i("div",{staticClass:"list"},s._l(s.goods,(function(s){return i("goods-item",{key:s.id,attrs:{goods:s}})})),1)])])]),i("goods-classify",{directives:[{name:"show",rawName:"v-show",value:s.showClassify,expression:"showClassify"}],attrs:{show:s.showClassify},on:{close:s.close}})],1)},a=[],e=(o("99af"),o("a750")),n=function(){var s=this,t=s.$createElement,o=s._self._c||t;return o("div",{staticClass:"goods-item",on:{click:function(t){return s.$router.push("/goods/"+s.goods.id)}}},[o("div",{staticClass:"cover",style:{backgroundImage:"url("+s.goods.thumb_urls.split(",")[0]+")"}}),o("h6",{staticClass:"van-multi-ellipsis--l2"},[s._v(s._s(s.goods.title))]),o("div",{staticClass:"price"},[o("p",[s._v("¥ "+s._s(s.goods.price))]),o("span",[s._v("已售"+s._s(s.goods.sale_count)+"件")])])])},c=[],l={name:"goods-item",props:{goods:{type:Object,detail:function(){return{}}}}},r=l,d=(o("efd9"),o("2877")),u=Object(d["a"])(r,n,c,!1,null,"4306f7a8",null),h=u.exports,f=function(){var s=this,t=s.$createElement,o=s._self._c||t;return o("div",{staticClass:"goods-classify",on:{click:function(t){return s.$emit("close")}}},[o("transition",{attrs:{name:"van-slide-right"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:s.show,expression:"show"}],staticClass:"classify"},[o("h4",[s._v("商品分类")]),s._l(s.classify,(function(t){return o("p",{key:t,on:{click:function(o){return s.$emit("close",t)}}},[s._v(s._s(t))])}))],2)])],1)},g=[],p={name:"goods-classify",props:{show:{type:Boolean,default:!1}},data:function(){return{classify:["上衣","鞋包配饰","裙装","半身裙"]}}},U=p,v=(o("48f9"),Object(d["a"])(U,f,g,!1,null,"04354508",null)),F=v.exports,A=o("ef39"),R=o("60b3"),m=10,Z={name:"store",components:{BackHeader:e["a"],GoodsItem:h,GoodsClassify:F,Scroll:A["a"]},data:function(){return{goods:[],loading:!1,showClassify:!1,goodsType:"全部商品",page:1,isFinished:!0,goodsCount:0,user:{},shopid:""}},mounted:function(){this.shopid=this.$route.params.id,this.getList()},activated:function(){this.$route.params.id!==this.shopid&&(this.shopid=this.$route.params.id,this.getList()),this.$refs.scroll.refresh()},methods:{chat:function(){this.$jsCallNative("chat",{uid:this.user.id+"",nick_name:this.user.nick_name})},onLoad:function(){this.loading||(this.loading=!0,this.page++,this.getList())},close:function(s){s&&(this.goodsType=s),this.showClassify=!1},getList:function(){var s=this,t=null;1===this.page&&(t=this.$skeLoading("#store_page")),Object(R["b"])("/shop/goods/getGoodsList",{shopid:this.shopid,page:this.page,size:m}).then((function(o){var i=o.data.data;s.goods=s.goods.concat(i.list),s.isFinished=i.list.length<m,s.goodsCount=i.count,s.user=i.shop.user,s.loading=!1,t&&t.close(),s.$nextTick((function(){s.$refs.scroll.refresh()}))})).catch((function(){t&&t.close()}))}}},C=Z,w=(o("13c0"),Object(d["a"])(C,i,a,!1,null,"99aa4a3c",null));t["default"]=w.exports},"48f9":function(s,t,o){"use strict";var i=o("9852"),a=o.n(i);a.a},"8f02":function(s,t,o){},9852:function(s,t,o){},"990e":function(s,t,o){},efd9:function(s,t,o){"use strict";var i=o("990e"),a=o.n(i);a.a}}]);
//# sourceMappingURL=chunk-013a7da1.b51cc0a0.js.map