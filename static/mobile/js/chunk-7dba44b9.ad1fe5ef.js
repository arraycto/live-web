(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7dba44b9"],{"43c3":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"seller-goods-add",staticStyle:{"padding-top":"44px"}},[s("backer-header",{attrs:{title:"编辑商品"}}),s("scroll",{ref:"scroll",attrs:{clickable:""}},[s("div",{staticClass:"goods-section"},[s("h4",[t._v("商品标题")]),s("p",[t._v(t._s(t.form.title))]),s("div",{staticClass:"covers"},t._l(t.titleImgs,(function(t,e){return s("div",{key:t+e,staticClass:"img",style:{backgroundImage:"url("+t+")"}})})),0)]),s("div",{staticClass:"goods-section"},[s("h4",[t._v("商品详情")]),s("p",[t._v(t._s(t.form.desc))]),s("div",{staticClass:"covers"},t._l(t.detailImgs,(function(t,e){return s("div",{key:t+e,staticClass:"img",style:{backgroundImage:"url("+t+")"}})})),0)]),s("div",{staticClass:"rules"},[s("h4",[t._v("销售规格")]),t._l(t.rules,(function(e,i){return s("div",{key:i,staticClass:"item"},[s("h5",[s("span",[t._v(t._s(e.color))]),s("span",[t._v(t._s(e.size))])]),s("div",{staticClass:"input"},[s("label",[t._v("价格（元）")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.price,expression:"item.price"}],attrs:{type:"text",placeholder:"请输入商品价格"},domProps:{value:e.price},on:{blur:function(e){return e.preventDefault(),t.inputBlur(e)},input:function(s){s.target.composing||t.$set(e,"price",s.target.value)}}})]),s("div",{staticClass:"input"},[s("label",[t._v("库存（件）")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.left_count,expression:"item.left_count"}],attrs:{type:"text",placeholder:"请输入商品库存"},domProps:{value:e.left_count},on:{blur:function(e){return e.preventDefault(),t.inputBlur(e)},input:function(s){s.target.composing||t.$set(e,"left_count",s.target.value)}}})])])}))],2),s("div",{staticStyle:{height:"20px"}}),s("div",{staticClass:"bottom-btn",on:{click:t.submit}},[t._v("提交")])]),s("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"file",attrs:{type:"file"},on:{change:t.upload}}),s("van-popup",{attrs:{round:"",position:"bottom"},model:{value:t.showPicker,callback:function(e){t.showPicker=e},expression:"showPicker"}},[s("van-picker",{attrs:{"swipe-duration":500,"show-toolbar":"","value-key":"name",columns:t.columns},on:{cancel:function(e){t.showPicker=!1},confirm:t.onConfirm}})],1)],1)},o=[],r=(s("4de4"),s("4160"),s("c975"),s("a15b"),s("d81d"),s("45fc"),s("a434"),s("b0c0"),s("d3b7"),s("ac1f"),s("25f0"),s("466d"),s("1276"),s("159b"),s("5530")),c=s("a750"),n=s("ef39"),l=s("9feb"),a=s("eef5"),u=s("2f62"),f=s("493f"),h=s("60b3"),d=s("4554"),p={name:"seller-goods-edit",components:{BackerHeader:c["a"],Scroll:n["a"]},data:function(){return{titleImgs:[],upType:"title",detailImgs:[],colors:[],sizes:[],checked:!0,goodsClassify:{},rules:[],imgIndex:0,form:{title:"",desc:"",delivery:"",freight:0},address:"",columns:d["a"],showPicker:!1}},created:function(){this.init(),this.getDetail()},activated:function(){this.init(),window.addEventListener("resize",this.scrollRefresh)},mounted:function(){window.addEventListener("resize",this.scrollRefresh)},deactivated:function(){window.removeEventListener("resize",this.scrollRefresh)},computed:Object(r["a"])({},Object(u["c"])(["appConfig","routeHistory"])),methods:{getDetail:function(){var t=this;Object(h["b"])("/shop/goods/getGoodsInfo",{goodsid:this.$route.params.id}).then((function(e){var s=e.data.data;t.form.title=s.goods.title,t.form.desc=s.goods.desc,t.titleImgs=s.goods.thumb_urls.split(","),t.detailImgs=s.goods.desc_img_urls.split(",");var i={};s.colors.forEach((function(t){i[t.id]=t.color}));var o={};s.sizes.forEach((function(t){o[t.id]=t.size})),t.rules=s.inventory.map((function(t){return Object(r["a"])(Object(r["a"])({},t),{},{color:i[t.colorid],size:o[t.sizeid],price:parseInt(t.price).toString()})}))}))},inputBlur:function(){var t=navigator.userAgent,e=!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);e&&setTimeout((function(){var t=document.documentElement.scrollTop||document.body.scrollTop||0;window.scrollTo(0,Math.max(t-1,0))}),200)},scrollRefresh:function(){this.$refs.scroll.refresh()},onConfirm:function(t){this.address=t.join(""),this.showPicker=!1},init:function(){var t=Object(l["a"])("selectClassify"),e=Object(l["a"])("selectAddress");t&&(this.goodsClassify=t,Object(l["b"])("selectClassify")),e&&(this.address=e,Object(l["b"])("selectAddress"))},delTitleImgs:function(t){this.titleImgs.splice(t,1)},delDetailImgs:function(t){this.detailImgs.splice(t,1)},delColor:function(t){for(var e=this,s=Object(f["a"])(this.rules),i=0;i<s.length;i++)s[i].color===this.colors[t].color&&(s.splice(i,1),i--);this.rules=s,this.colors.splice(t,1),this.$nextTick((function(){e.scrollRefresh()}))},delSize:function(t){for(var e=this,s=Object(f["a"])(this.rules),i=0;i<s.length;i++)1===this.sizes.length?s[i].size="":s[i].size===this.sizes[t].size&&(s.splice(i,1),i--);this.rules=s,this.sizes.splice(t,1),this.$nextTick((function(){e.scrollRefresh()}))},clickFile:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.upType=t,this.imgIndex=e,this.$refs.file.click()},editColor:function(t){this.$set(this.colors,t,Object(r["a"])(Object(r["a"])({},this.colors[t]),{},{isConfirm:!1}))},pushColor:function(){var t=this;this.colors.push({key:Date.now(),img_url:"",isConfirm:"",color:"",prev:""}),this.$nextTick((function(){t.scrollRefresh()}))},pushSize:function(){var t=this;this.sizes.push({key:Date.now(),size:"",isConfirm:"",prev:""}),this.$nextTick((function(){t.scrollRefresh()}))},confirmColor:function(t){if(this.colors[t].color){for(var e=0;e<this.colors.length;e++)if(e!==t&&this.colors[e].color===this.colors[t].color)return void this.$toast.fail("颜色分类不能重复");this.genRules(this.colors[t],"color",this.colors[t].prev),this.$set(this.colors,t,Object(r["a"])(Object(r["a"])({},this.colors[t]),{},{isConfirm:!0,prev:this.colors[t].color}))}else this.$toast.fail("请输入颜色分类")},confirmSize:function(t){if(this.sizes[t].size){for(var e=0;e<this.sizes.length;e++)if(e!==t&&this.sizes[e].size===this.sizes[t].size)return void this.$toast.fail("尺码分类不能重复");this.genRules(this.sizes[t],"size",this.sizes[t].prev),this.$set(this.sizes,t,Object(r["a"])(Object(r["a"])({},this.sizes[t]),{},{isConfirm:!0,prev:this.sizes[t].size}))}else this.$toast.fail("请输入尺码分类")},genRules:function(t,e,s){var i=Object(f["a"])(this.rules);if(s)return i.forEach((function(i){"size"===e&&i.size===s&&(i.size=t.size),"color"===e&&i.color===s&&(i.color=t.color)})),void(this.rules=i);if("color"===e){var o=this.sizes.filter((function(t){return t.isConfirm}));o.length?o.forEach((function(e){i.push({color:t.color,size:e.size,left_count:"",price:""})})):i.push({color:t.color,size:"",left_count:"",price:""})}else{var r=this.colors.filter((function(t){return t.isConfirm}));if(!r.length)return;var c=i.map((function(e){return e.size?"":(e.size=t.size,e.color)}));r.forEach((function(e){c.indexOf(e.color)>=0||i.push({color:e.color,size:t.size,left_count:"",price:""})}))}this.rules=i},upload:function(){var t=this,e=this.$refs.file.files[0];e&&this.cosImg(e).then((function(e){switch(t.upType){case"title":t.titleImgs.push(e);break;case"detail":t.detailImgs.push(e);break;case"color":t.$set(t.colors,t.imgIndex,Object(r["a"])(Object(r["a"])({},t.colors[t.imgIndex]),{},{img_url:e}));break}t.$refs.file.value=""}))},cosImg:function(t){var e=this,s=this.$toast.loading({message:"上传中..."});return new Promise((function(i,o){var r=Object(a["a"])();r.putObject({Bucket:e.appConfig.cos_bucket,Region:e.appConfig.cos_region,Key:e.appConfig.cos_folder_image+"/".concat(t.name),Body:t},(function(t,r){if(t)return e.$toast.fail("上传失败"),void o(t);s.close(),i("https://"+r.Location)}))}))},submit:function(){var t=this,e="";this.rules.some((function(t){t.price||e||(e="有价格未输入"),t.price.indexOf(".")>=0&&(e||(e="价格不能有小数")),t.left_count||e||(e="有库存未输入")})),e?this.$toast.fail(e):Object(h["b"])("/shop/goods/editGoodsInventory",{inventorys:this.rules,goodsid:this.$route.params.id}).then((function(){t.$router.back()})).catch((function(t){console.log(t)}))}},watch:{routeHistory:function(t){t.indexOf("/seller/goods/add")<0&&this.$destroy()}}},m=p,v=(s("cbca"),s("2877")),g=Object(v["a"])(m,i,o,!1,null,"12ba3d27",null);e["default"]=g.exports},"45fc":function(t,e,s){"use strict";var i=s("23e7"),o=s("b727").some,r=s("a640"),c=s("ae40"),n=r("some"),l=c("some");i({target:"Array",proto:!0,forced:!n||!l},{some:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"493f":function(t,e,s){"use strict";s("d3b7"),s("25f0");var i=function t(e){if(Array.isArray(e)||"[object Object]"===Object.prototype.toString.call(e)){var s=Array.isArray(e)?[]:{};for(var i in e)Array.isArray(e[i])||"[object Object]"===Object.prototype.toString.call(e[i])?s[i]=t(e[i]):s[i]=e[i];return s}return e};e["a"]=i},cbca:function(t,e,s){"use strict";var i=s("dc45"),o=s.n(i);o.a},d81d:function(t,e,s){"use strict";var i=s("23e7"),o=s("b727").map,r=s("1dde"),c=s("ae40"),n=r("map"),l=c("map");i({target:"Array",proto:!0,forced:!n||!l},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},dc45:function(t,e,s){}}]);
//# sourceMappingURL=chunk-7dba44b9.ad1fe5ef.js.map