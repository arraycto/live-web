(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-141ec91e"],{"05fd":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAAAkFBMVEUAAABRUFZQUFZQTlZRUFZRUFZQTltTUVVRUFZRUFZRUFZPT1ZRUFZRUFVQUFVQTlZRT1VQUFRRUFZRUFZRUFZRUFZRUFZQT1VQUFVRUFVRUFZRUFZRUFZRT1ZRUFZRUFZRUFVSUVZRUFZRUFZRUFZQUFZRUFZRUFVRUFZRUFVRT1VRUFZRUFZRT1ZRUFZRUFbgwHqAAAAAL3RSTlMA+3oL9/MGEfDs6Bbjv0ocKCCxzoCZdVo4JNTKxpSQXz4y3tm6oIaqpUMti2ZuUs9tnWMAAAMlSURBVEjH1ZXXmqowEIADJPQOUhQFFRCs7/92Z4awuBTLudy5gS+TP9MT8kdFNs5X32SUMt0SE0f+DkrCjAqPXgS6vthfgMrW7JmB1Mv0AyS1OocEgakqE/oT9Jvy1lSocc+sS5Tf7fgW+lpH0sp5g50Y7lGrvSH/HOTWDEHBSl/aanAD2+zHy07DkPONFykUUa2FyizgK2ZJqJYTmmBcNJb6Q7yz6/1sLI5or15M4hrDyvHXSHYHTKTKzFXR+XbXQXlIFrAQHdlJYCcv2bN01Lqi1zfUrqQZlaKxtQNWG3VcbrYCTq6A09wZdqNwcg7UqrMkMP1w0FWhS34DVlx9KTqpAn0AKYgobizFuDjvi1j0u+RfZCJt4QR96qVngjaGr4ZFiI2hlrGJCzZkBXyn9gTbo+sp9EmfzqfYGhy4lYgRgGo1wa6AlQZJsUCNPEvxwSOkBFU2wbb8yJiBJ+exCpNBC0IuGP04OCMDLCREhJPNaaueQBcRkuMEhWfl14E+VlMkcg1ff9qrF1g8QZBdMVjzHIUIV+iVZ/ky6x8elEP5AN8GBfrGVhLWGo1OBLUBfONARUwcKTaEfMCIcT/OMKvHHuEUi54BW4uYvIOf3azLS/2YEKVojVdYzZM2FiA8cITRk7KIDUHORdoy6Lp0EeNh6EPBHM8xDMPx3HarCd04zjDuWw5nMqU3IB7N9SbL1ibl16x2lU8jzDb7mUhwfu58sdUfI6GRRGz6MO1fc1O3chc8Toc/TMwggqBZBfrd1nuyIA3eUC53stbBO0oFqgeVaEvkjSQUR0HmXOq65/3ZdVMHmPeywdhb8r9S4A1l5tJP0HfvG4r310ONuJ/2QV07X3FGiVzG767sgT36laQWcEdviNRXPjOuWG5MxJwBU4Nsl8ivEcmNDuyBMsJQqLpNXhhtK+xXlKdnzbAiMD+XFjJYm8KwgwUJX3V8ldFheaXMKJF2KnVt7WxvlNlCLAOdP0PV1N7exGVzFy9WV7HDDEEhml3m+JZ6rxPmRDgQm4mba/6KvZMbPiGT9wFuc5Z/aB8Vu2ASW0CrT91w1dSY/CX5B8rTc5m/vhmMAAAAAElFTkSuQmCC"},1148:function(t,e,s){"use strict";var i=s("a691"),r=s("1d80");t.exports="".repeat||function(t){var e=String(r(this)),s="",o=i(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(s+=e);return s}},"1b62":function(t,e,s){},"1d4b":function(t,e,s){},"1fbb":function(t,e,s){},"408a":function(t,e,s){var i=s("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=i(t))throw TypeError("Incorrect invocation");return+t}},4337:function(t,e,s){"use strict";var i=s("1d4b"),r=s.n(i);r.a},"45fc":function(t,e,s){"use strict";var i=s("23e7"),r=s("b727").some,o=s("a640"),a=s("ae40"),n=o("some"),c=a("some");i({target:"Array",proto:!0,forced:!n||!c},{some:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},"499c":function(t,e,s){"use strict";var i=s("1fbb"),r=s.n(i);r.a},9530:function(t,e,s){"use strict";var i=s("1b62"),r=s.n(i);r.a},b680:function(t,e,s){"use strict";var i=s("23e7"),r=s("a691"),o=s("408a"),a=s("1148"),n=s("d039"),c=1..toFixed,l=Math.floor,u=function(t,e,s){return 0===e?s:e%2===1?u(t,e-1,s*t):u(t*t,e/2,s)},v=function(t){var e=0,s=t;while(s>=4096)e+=12,s/=4096;while(s>=2)e+=1,s/=2;return e},d=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!n((function(){c.call({})}));i({target:"Number",proto:!0,forced:d},{toFixed:function(t){var e,s,i,n,c=o(this),d=r(t),f=[0,0,0,0,0,0],h="",g="0",m=function(t,e){var s=-1,i=e;while(++s<6)i+=t*f[s],f[s]=i%1e7,i=l(i/1e7)},p=function(t){var e=6,s=0;while(--e>=0)s+=f[e],f[e]=l(s/t),s=s%t*1e7},A=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==f[t]){var s=String(f[t]);e=""===e?s:e+a.call("0",7-s.length)+s}return e};if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(h="-",c=-c),c>1e-21)if(e=v(c*u(2,69,1))-69,s=e<0?c*u(2,-e,1):c/u(2,e,1),s*=4503599627370496,e=52-e,e>0){m(0,s),i=d;while(i>=7)m(1e7,0),i-=7;m(u(10,i,1),0),i=e-1;while(i>=23)p(1<<23),i-=23;p(1<<i),m(1,1),p(2),g=A()}else m(0,s),m(1<<-e,0),g=A()+a.call("0",d);return d>0?(n=g.length,g=h+(n<=d?"0."+a.call("0",d-n)+g:g.slice(0,n-d)+"."+g.slice(n-d))):g=h+g,g}})},c4b0:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAAAnFBMVEUAAAD+JVr+JVr+JVr+JVr+JVr/JVj+JFr/Jln+JFr/Jlf+JVr/JVr/JVr/IWD/Nlz/JVn/JVr+JVr/I1f+JVr+JVr+JVr/JVn/I1r/Jl7/JVr/Jlr+JFr/JVr+JVr+JVn/JVr/JFr/JVr/Ilr+JVr/JVr+JVr+JFr/JVr/JVf+JVr+JFr/JVr/JVn/JFr/JVr+JFj/JFr/JVv+JVrZHmV7AAAAM3RSTlMAznz68/xL7yiAGvdsMQcDkN/sCeLKmkMeDdwh6ObWXbCJUSXSxLifLBCmaWRYF3ZHO74KWZ1SAAACU0lEQVRIx+2W2ZqiMBCF04MRIUDYRXZB3NfO+7/bVNiGaAt9O1/3ubKS/LVREdCPEF2c/oxJ0XT6BZaFhI2KWMprrExik5JM4wkrU/YNxfcnTCPgzN58vJcL6eC1GO5wxIx5FI1JAW4TCEu6DSXP0agWCSRUCEtrCPahjmOrHRyqhJUZ5K1QNK4Tr38xWLhB2skSTSgKwbk/COYxaIgxhdEjE5pS2BA9Q5PSoRZy7izDhFotB1F9/l7LA5ysINzO6XK2IJgG7bRs+a3iCo4XvAdli13AiEsUpOMDCdkF4aCavAmtTmBZW862xewmR3oms/ciOa/pTBiTWww82PVgrcrFW6n1MCwhBG4xqcOmxTGp/S0zRk6o12PnR4MBPub9+IhJfkLBvtM7hJ1w31l73ruec3z2ryUZFJd097bkg4Z3q8HUs003v/MYnFwGI8rcxqWaSww08w1uGf6s7v02aCgXjLSrgCr8qOw/FvrNxu1TsjRdP1lSY+GZ8tjfj9wHufX3S91ivoclXENJHQIz3ASOawszCXN3+eAyq5XEeiWFNrAkrUgG1vYq/AX5dpuO7O2hiA3BtUU2d+imJ7epx+YKCXLm620Yu5WZ1RuB5nuu6/laUPfzYn6Gbpqvl69XmV6DMro6vR81itTeMq5BFBwO+lOwiy0XFE3o4ZJKFVKEylJ1gqJrzJ/1QCq0PNQnMMMETHvGrF/sv8OugLlTmMOxkzA3hAHneR9jSuEQEV/COWbfklsKmB6zab1+YNAslaah5HhAT9prX32eCbotKfoB+gute4y0UdcfhgAAAABJRU5ErkJggg=="},ca1e:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"goods goods-detail",staticStyle:{"padding-top":"44px"},on:{click:function(e){t.visibleService=!1}}},[i("back-header",{attrs:{title:"商品详情"}},[i("van-icon",{staticClass:"shopping-cart",attrs:{name:"shopping-cart-o"},on:{click:function(e){return t.$router.push("/shopping")}}})],1),i("scroll",{ref:"scroll",attrs:{clickable:""}},[i("van-swipe",{attrs:{loop:"",width:"100%"},on:{change:t.onChange},scopedSlots:t._u([{key:"indicator",fn:function(){return[i("div",{staticClass:"custom-indicator"},[t._v(" "+t._s(t.current+1)+"/"+t._s(t.covers.length)+" ")])]},proxy:!0}])},t._l(t.covers,(function(t,e){return i("van-swipe-item",{key:e},[i("div",{staticClass:"goods-banner-img",style:{backgroundImage:"url("+t+")"}})])})),1),i("div",{staticClass:"goods-desc"},[i("p",{staticClass:"price"},[t._v("￥"+t._s(t.goods.price))]),i("p",{staticClass:"desc van-multi-ellipsis--l2"},[t._v(t._s(t.goods.title))]),i("div",{staticClass:"nums"},[i("span",[t._v("运费："+t._s(t.goods.freight)+"元")]),i("span",[t._v("已售"+t._s(t.goods.sale_count)+"件")]),i("span",[t._v(t._s(t.goods.address))])]),i("div",{staticClass:"service"},[i("span",[t._v("发货")]),i("p",[t._v("下单后"+t._s(t.goods.delivery)+"小时内发货")])]),i("div",{staticClass:"service",on:{click:function(e){e.stopPropagation(),t.visibleService=!0}}},[i("span",[t._v("服务")]),i("p",[i("van-icon",{staticClass:"verify-icon",attrs:{name:"passed"}}),t._v("已交保证金")],1),i("p",[i("van-icon",{staticClass:"verify-icon",attrs:{name:"passed"}}),t._v("店铺资质认证")],1),i("div",{staticStyle:{flex:"1"}}),i("van-icon",{staticClass:"icon-right",attrs:{name:"arrow"}})],1)]),t.evaluateCount?i("router-link",{staticClass:"comment",attrs:{to:"/goods/"+t.goods.id+"/comment"}},[i("div",{staticClass:"title"},[i("h4",[t._v("商品评价("+t._s(t.evaluateCount)+")")]),i("span",[t._v("查看全部 "),i("van-icon",{staticClass:"icon-right",attrs:{name:"arrow"}})],1)]),i("div",{staticClass:"single-comment"},[i("div",{staticClass:"user"},[i("img",{attrs:{src:t.evaluate.user.avatar||t.$store.state.defaultAvatar,alt:""}}),i("p",[t._v(t._s(t.evaluate.user.nick_name))])]),i("p",{staticClass:"van-multi-ellipsis--l2"},[t._v(t._s(t.evaluate.content))])])]):t._e(),i("router-link",{staticClass:"store",attrs:{to:"/stores/"+t.goods.shopid}},[i("img",{attrs:{src:t.goods.shop.user.avatar||t.$store.state.defaultAvatar,alt:""}}),i("p",[t._v(t._s(t.goods.shop.user.nick_name))]),i("div",{staticStyle:{flex:"1"}}),i("button",[t._v("进店逛逛")])]),i("div",{staticClass:"detail"},[i("h5",[t._v("商品详情")]),i("p",[t._v(t._s(t.goods.desc))]),t._l(t.detailImgs,(function(e,s){return i("img",{key:s,attrs:{src:e,alt:""},on:{load:t.refresh}})}))],2)],1),i("div",{ref:"buyControl",staticClass:"buy-control"},[i("div",{staticClass:"link",on:{click:function(e){return t.$router.push("/stores/1")}}},[i("img",{attrs:{src:s("c4b0"),alt:""}}),i("p",[t._v("店铺")])]),i("div",{staticClass:"link",on:{click:t.chat}},[i("img",{attrs:{src:s("05fd"),alt:""}}),i("p",[t._v("客服")])]),i("div",{staticStyle:{flex:"1"}}),i("div",{staticClass:"btns"},[i("div",{staticClass:"btn",on:{click:function(e){return t.slideSize(0)}}},[t._v("加入购物车")]),i("div",{staticClass:"btn",on:{click:function(e){return t.slideSize(1)}}},[t._v("立即购买")])])]),i("transition",{attrs:{name:"slide"}},[i("service-alert",{directives:[{name:"show",rawName:"v-show",value:t.visibleService,expression:"visibleService"}],on:{close:function(e){t.visibleService=!1}}})],1),i("transition",{attrs:{name:"slide"}},[t.visibleSizeSelect?i("size-select",{attrs:{sizes:t.sizes,colors:t.colors,rules:t.rules,"default-img":t.covers[0]},on:{confirm:t.confirm,close:function(e){t.visibleSizeSelect=!1}}}):t._e()],1)],1)},r=[],o=(s("ac1f"),s("1276"),s("5530")),a=s("a750"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"service-alert",on:{touchmove:function(t){t.preventDefault()},click:function(t){t.stopPropagation()}}},[s("h4",[t._v("基础服务")]),s("van-icon",{staticClass:"close",attrs:{name:"cross"},on:{click:function(e){return t.$emit("close")}}}),s("h5",[s("van-icon",{staticClass:"verify-icon",attrs:{name:"passed"}}),t._v("已交保证金")],1),s("p",{staticClass:"desc"},[t._v("商家已向平台缴纳保证金，交易产生纠纷时用于保证买家的权益")]),s("h5",[s("van-icon",{staticClass:"verify-icon",attrs:{name:"passed"}}),t._v("资质保障")],1),s("p",{staticClass:"desc"},[t._v("商家已向平台提交经营执照、许可资质等相关资质证明")]),s("h4",[t._v("其他")]),s("h5",{staticClass:"pay"},[s("van-icon",{staticClass:"verify-icon",attrs:{name:"passed"}}),t._v("微信支付")],1),s("h5",[s("van-icon",{staticClass:"verify-icon",attrs:{name:"passed"}}),t._v("支付宝支付")],1),s("button",{on:{click:function(e){return t.$emit("close")}}},[t._v("确定")])],1)},c=[],l={name:"service-alert"},u=l,v=(s("499c"),s("2877")),d=Object(v["a"])(u,n,c,!1,null,"58ad9c5e",null),f=d.exports,h=s("ef39"),g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"size-select"},[s("van-icon",{staticClass:"close",attrs:{name:"cross"},on:{click:function(e){return t.$emit("close")}}}),s("div",{staticClass:"info"},[s("div",{staticClass:"cover",style:{backgroundImage:"url("+(t.activeColor.img_url||t.defaultImg)+")"}}),s("div",{staticClass:"price"},[s("h4",[t._v("￥"+t._s(t.totalPrice))]),s("p",[t._v("库存"+t._s(t.activeRule.left_count)+"件")]),s("span",[t._v("请选择 颜色分类 尺码")])])]),s("div",{staticClass:"select"},[s("h5",[t._v("颜色分类")]),s("ul",t._l(t.colors,(function(e){return s("li",{key:e.id,class:{active:e.id===t.activeColor.id},on:{click:function(s){t.activeColor=e}}},[t._v(t._s(e.color))])})),0)]),t.sizes.length?s("div",{staticClass:"select"},[s("h5",[t._v("尺码")]),s("ul",t._l(t.sizes,(function(e){return s("li",{key:e.id,class:{active:t.activeSize.id===e.id},on:{click:function(s){t.activeSize=e}}},[t._v(t._s(e.size))])})),0)]):t._e(),s("div",{staticClass:"num"},[s("label",[t._v("数量")]),s("van-stepper",{attrs:{max:t.activeRule.left_count,"button-size":"0.66rem","input-width":"0.66rem","disable-input":""},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}})],1),s("button",{on:{click:t.confirm}},[t._v("确定")])],1)},m=[],p=(s("45fc"),s("b680"),{name:"size-select",props:{defaultImg:{type:String,default:""},colors:{type:Array,default:function(){return[]}},sizes:{type:Array,default:function(){return[]}},rules:{type:Array,default:function(){return[]}}},data:function(){return{num:1,activeColor:0,activeSize:0,cover:""}},mounted:function(){this.activeColor=this.colors.length&&this.colors[0],this.cover=this.colors.length&&this.colors[0].img_url,this.activeSize=this.sizes.length?this.sizes[0]:{id:0}},computed:{activeRule:function(){var t=this,e={};return this.rules.some((function(s){if(s.colorid===t.activeColor.id&&s.sizeid===t.activeSize.id)return e=s,!0})),e},totalPrice:function(){return(this.activeRule.price*this.num).toFixed(2)}},methods:{confirm:function(){this.$emit("confirm",{count:this.num,inventoryid:this.activeRule.id,size:this.activeColor.color+this.activeSize.size,price:this.activeRule.price,cover:this.activeColor.img_url||this.defaultImg})}}}),A=p,C=(s("4337"),Object(v["a"])(A,g,m,!1,null,"2205142a",null)),b=C.exports,F=s("60b3"),J={name:"goods",components:{BackHeader:a["a"],ServiceAlert:f,Scroll:h["a"],SizeSelect:b},data:function(){return{current:0,covers:[],visibleService:!1,visibleSizeSelect:!1,confirmType:0,detailImgs:[],goods:{shop:{user:{}}},colors:[],sizes:[],rules:[],evaluateCount:0,evaluate:{}}},mounted:function(){this.getDetail()},activated:function(){this.getDetail()},methods:{chat:function(){this.$jsCallNative("chat",{uid:this.goods.shop.id+"",nick_name:this.goods.shop.user.nick_name})},onChange:function(t){this.current=t},refresh:function(){var t=this;this.$nextTick((function(){t.$refs.scroll&&t.$refs.scroll.refresh()}))},slideSize:function(t){this.confirmType=t,this.visibleSizeSelect=!0},confirm:function(t){if(this.visibleSizeSelect=!1,1===this.confirmType)this.$router.push({name:"place-order",params:{order:[{shopid:this.goods.shop.id,store:this.goods.shop.user,remark:"",goods:[Object(o["a"])(Object(o["a"])({},this.goods),t)]}]}});else{var e=this.$toast.loading();Object(F["b"])("/shop/cart/addCartGoods",{inventoryid:t.inventoryid,count:t.count,shopid:this.goods.shopid}).then((function(){e.close()}))}},getDetail:function(){var t=this,e=this.$skeLoading(".goods-detail");Object(F["b"])("/shop/goods/getGoodsInfo",{goodsid:this.$route.params.id}).then((function(s){var i=s.data.data;t.covers=i.goods.thumb_urls.split(","),t.detailImgs=i.goods.desc_img_urls.split(","),t.goods=i.goods,t.colors=i.colors,t.sizes=i.sizes,t.rules=i.inventory,t.evaluateCount=i.evaluate_count,t.evaluate=i.evaluate,e.close()}))}}},_=J,U=(s("9530"),Object(v["a"])(_,i,r,!1,null,"1156f138",null));e["default"]=U.exports}}]);
//# sourceMappingURL=chunk-141ec91e.c8945ce4.js.map