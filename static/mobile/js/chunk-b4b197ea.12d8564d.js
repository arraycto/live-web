(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b4b197ea"],{"1d21":function(e,r,t){"use strict";var o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"order-item"},[e.showCheckbox?t("van-checkbox",{staticStyle:{"padding-right":"0.32rem","min-width":"0.36rem"},attrs:{"icon-size":"0.36rem","checked-color":"#E1244E"},on:{change:e.toggleGoods},model:{value:e.goods.checked,callback:function(r){e.$set(e.goods,"checked",r)},expression:"goods.checked"}}):e._e(),t("div",{staticClass:"img",style:{backgroundImage:"url("+e.goods.cover+")"}}),t("div",{staticClass:"info"},[t("p",{staticClass:"van-multi-ellipsis--l2"},[e._v(e._s(e.goods.title))]),e.goods.size?t("span",[e._v(e._s(e.goods.size)+" "),e.sizeDrop?t("van-icon",{staticClass:"drop-icon",attrs:{name:"arrow-down"}}):e._e()],1):e._e()]),e.priceShow?t("div",{staticClass:"price"},[t("p",[e._v(e._s(e.goods.price))]),t("span",[e._v("x"+e._s(e.goods.count))])]):e._e()],1)},s=[],n=(t("a9e3"),{name:"order-item",props:{goods:{type:Object,default:function(){return{}}},showCheckbox:{type:Boolean,default:!1},priceShow:{type:Boolean,default:!1},parIndex:{type:Number,default:0},sizeDrop:{type:Boolean,default:!0}},data:function(){return{checked:!1}},methods:{toggleGoods:function(){this.$emit("toggleGoods",{parIndex:this.parIndex})}}}),a=n,d=(t("2389"),t("2877")),i=Object(d["a"])(a,o,s,!1,null,"9bfd3f1e",null);r["a"]=i.exports},2389:function(e,r,t){"use strict";var o=t("dbc1"),s=t.n(o);s.a},"7e94":function(e,r,t){"use strict";t.r(r);var o=function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("div",{staticClass:"seller-order-detail"},[o("backer-header",{attrs:{title:"订单详情"}}),o("scroll",{ref:"scroll",class:{return:1===e.order.return_status},attrs:{clickable:""}},[o("div",{staticClass:"order"},[o("div",{staticClass:"order-no"},[o("p",[e._v("订单编号："+e._s(e.order.order_no))]),o("span",[e._v(e._s(4===e.order.status?e.refundStatus[e.order.return_status]:1===e.order.status&&e.order.delivery_status?"已发货":e.status[e.order.status]))])]),e._l(e.goods,(function(e){return o("order-item",{key:e.id,staticClass:"item",attrs:{"size-drop":!1,goods:e,"price-show":""}})}))],2),o("div",{staticClass:"address"},[o("van-icon",{staticClass:"location-icon",attrs:{name:"location-o"}}),o("div",{staticClass:"info"},[o("p",[e._v(e._s(e.order.receiver_name)+" "),o("span",[e._v(e._s(e.order.receiver_mobile))])]),o("span",[e._v(e._s(e.order.receiver_address))])])],1),o("div",{staticClass:"connect",on:{click:e.chat}},[o("img",{attrs:{src:t("bb9e"),alt:""}}),o("p",[e._v("联系买家")])]),o("div",{staticClass:"order-intro"},[e.order.remark?o("p",[o("span",[e._v("订单备注")]),e._v(e._s(e.order.remark))]):e._e(),o("p",[o("span",[e._v("订单编号")]),e._v(e._s(e.order.order_no))]),4!==e.order.status?o("p",[o("span",[e._v("创建时间")]),e._v(e._s(e.order.create_time))]):e._e(),4===e.order.status?o("p",[o("span",[e._v("申请时间")]),e._v(e._s(e.order.return_info.create_time))]):e._e(),4===e.order.status?o("p",[o("span",[e._v("退款金额")]),e._v(e._s(e.order.return_info.amount))]):e._e(),e.order.pay_no&&4!==e.order.status?o("p",[o("span",[e._v("支付方式")]),e._v(e._s(1===e.order.pay_channel?"微信支付":"支付宝支付"))]):e._e(),e.order.pay_time&&4!==e.order.status?o("p",[o("span",[e._v("支付时间")]),e._v(e._s(e.order.pay_time))]):e._e(),e.order.express_no&&4!==e.order.status?o("p",[o("span",[e._v("物流单号")]),e._v(e._s(e.order.express_no))]):e._e(),e.order.return_info&&e.order.return_info.express_no&&4===e.order.status?o("p",[o("span",[e._v("物流单号")]),e._v(e._s(e.order.return_info.express_no))]):e._e(),e.order.return_info&&e.order.return_info.refund_trade_no&&4===e.order.status?o("p",[o("span",[e._v("退款单号")]),e._v(e._s(e.order.return_info.refund_trade_no))]):e._e()]),1===e.order.status&&0===e.order.delivery_status?o("div",{staticClass:"bottom-btn",on:{click:e.delivery}},[e._v("立即发货")]):e._e()]),1===e.order.return_status?o("div",{staticClass:"return-btn"},[o("button",{on:{click:e.closeReturn}},[e._v("拒绝退款")]),o("button",{on:{click:e.refund}},[e._v("接受退款")])]):e._e(),e.order.return_info&&e.order.return_info.express_no&&2===e.order.return_status?o("div",{staticClass:"bottom-btn",staticStyle:{position:"fixed"},on:{click:e.returnMoney}},[e._v("已收货，立即退款")]):e._e()],1)},s=[],n=(t("d81d"),t("ac1f"),t("1276"),t("5530")),a=t("a750"),d=t("ef39"),i=t("1d21"),c=t("60b3"),u={name:"seller-order-detail",components:{BackerHeader:a["a"],Scroll:d["a"],OrderItem:i["a"]},data:function(){return{order:{return_info:{}},goods:[],refundStatus:["","待审核","已同意","已拒绝","已完成"],status:["待付款","待发货","已发货","已完成","退款"]}},mounted:function(){var e=this.$route.query.type;"4"!==e?this.getDetail():this.getRefundDetail()},methods:{chat:function(){this.$jsCallNative("chat",{uid:this.order.user.id+"",nick_name:this.order.user.nick_name})},refund:function(){this.$router.push({name:"seller-refunds",params:{order:this.order,goods:this.goods}})},delivery:function(){this.$router.push({name:"delivery",params:{goods:this.goods,orderId:this.order.id}})},getRefundDetail:function(){var e=this,r=this.$skeLoading(".seller-order-detail","0");Object(c["b"])("/shop/order/returnOrderInfo",{ordergoodsid:this.$route.params.id}).then((function(t){var o=t.data.data;e.goods=[Object(n["a"])(Object(n["a"])({},o.ordergoods),{},{goodsId:o.ordergoods.id,title:o.ordergoods.goods.title,goods:null,size:o.ordergoods.color+(o.ordergoods.size||""),cover:o.ordergoods.goods.thumb_urls.split(",")[0]})],e.order=Object(n["a"])(Object(n["a"])({},o.ordergoods.suborder),{},{shop:o.ordergoods.shop,user:o.ordergoods.user,status:4,return_status:o.return_info.status,return_info:o.return_info}),e.$nextTick((function(){e.$refs.scroll.refresh()})),r.close()}))},getDetail:function(){var e=this,r=this.$skeLoading(".seller-order-detail");Object(c["b"])("/shop/order/getOrderInfo",{suborderid:this.$route.params.id}).then((function(t){var o=t.data.data;e.order=o.order,e.goods=o.goods.map((function(e){return Object(n["a"])(Object(n["a"])({},e),{},{title:e.goods.title,goods:null,size:e.color+(e.size||""),cover:e.goods.thumb_urls.split(",")[0]})})),e.$nextTick((function(){e.$refs.scroll.refresh()})),r.close()}))},closeReturn:function(){var e=this,r=this.$toast.loading();Object(c["b"])("/shop/order/operateReturn",{returnid:this.order.return_info.id,operate:2}).then((function(){r.close(),e.getRefundDetail()})).catch((function(){r.close()}))},returnMoney:function(){var e=this,r=this.$toast.loading();Object(c["b"])("/shop/order/shopReceiveReturn",{returnid:this.order.return_info.id}).then((function(){r.close(),e.getRefundDetail()})).catch((function(){r.close()}))}}},l=u,M=(t("d400"),t("2877")),z=Object(M["a"])(l,o,s,!1,null,"b8ec60bc",null);r["default"]=z.exports},bb9e:function(e,r){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAMAAAB61OwbAAABO1BMVEUAAAAAAABAQEAzMzMkJCRAQEA5OTkzMzMqKio7Ozs3NzczMzMwMDAtLS05OTkzMzMxMTEuLi43Nzc0NDQyMjIwMDA2NjYyMjIxMTE1NTU0NDQzMzM1NTU0NDQ1NTU0NDQzMzMyMjI0NDQyMjIyMjIyMjIzMzM0NDQ0NDQzMzMzMzMyMjI0NDQzMzMyMjI0NDQ0NDQzMzMzMzMyMjI0NDQyMjI0NDQzMzM0NDQzMzMzMzM0NDQzMzMzMzM0NDQyMjIzMzMyMjIzMzM0NDQyMjIzMzMzMzMzMzMzMzM0NDQzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzO5FQMxAAAAaHRSTlMAAgQFBwgJCgwNDg8QERIUFRYXIiQlJikqKywtMDE1Njw9QEJITWRscXJzdXZ3enuAgoOEhYmKjI+Ql5mam56iqqyzt8DDxMfJy8zOz9DU1djZ2tvh5OXm6Onr7vDx8/T19vf4+fv8/vN5QkgAAAEeSURBVCjPzZPXUgJBFERbBSOIihhwVVxzwIhhzGJGEEwYUDHC+f8v8AELS2AtH+nH7lNzu27Nlf6hzu10njLlb7b8hXz0FQdlRySp6xXek4kyJT8g65e0A1Fvpcm+fdiU9MBTU+VunhfSkuDIqX2CvCQ4cAaoKsA9uRKQ1BFZapPUszbtKgE24a5RisOJ5M3ARglwCQyqBcAtG0hVfuEMjiVPBtZLANfEckBS++KCT1L36pSrChf1B5Aj7gRc8CYpSb6/ch6CU0kzcD/Wb1mW1VtTCOpDtm3bw+FHGJfkjhW/eSwoSUNXReOwTpJao0XjY662wfwc0W7z97CBWWOMMSng+hY4N8YYE7ZKS7kjOYDPeZfjlfbtPWeiwV/WF6x4e/m2bPf8AAAAAElFTkSuQmCC"},c007:function(e,r,t){},d400:function(e,r,t){"use strict";var o=t("c007"),s=t.n(o);s.a},d81d:function(e,r,t){"use strict";var o=t("23e7"),s=t("b727").map,n=t("1dde"),a=t("ae40"),d=n("map"),i=a("map");o({target:"Array",proto:!0,forced:!d||!i},{map:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}})},dbc1:function(e,r,t){}}]);
//# sourceMappingURL=chunk-b4b197ea.12d8564d.js.map