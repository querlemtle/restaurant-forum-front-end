(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bc7f2e74"],{"0683":function(t,s,a){"use strict";a("ad37")},"9cab":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"container py-5"},[s("NavTabs"),t.isLoading?s("Spinner"):[s("h1",{staticClass:"mt-5"},[t._v(" 最新動態 ")]),s("hr"),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("h3",[t._v("最新餐廳")]),s("NewestRestaurants",{attrs:{restaurants:t.restaurants}})],1),s("div",{staticClass:"col-md-6"},[s("h3",[t._v("最新評論")]),s("NewestComments",{attrs:{comments:t.comments}})],1)])]],2)},r=[],n=a("8bb1"),i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[t._v(" 最新餐廳 ")]),s("div",{staticClass:"card-body"},t._l(t.restaurants,(function(a){return s("div",{key:a.id},[s("h4",[s("router-link",{attrs:{to:{name:"restaurant",params:{id:a.id}}}},[t._v(t._s(a.name))]),t._v("   "),s("small",[t._v(t._s(a.Category?a.Category.name:"未分類"))])],1),s("p",[t._v(t._s(a.description))]),t._v(" "+t._s(t._f("fromNow")(a.createdAt))+" "),s("hr")])})),0)])},c=[],o=a("2708"),d={mixins:[o["b"]],props:{restaurants:{type:Array,required:!0}}},u=d,l=(a("0683"),a("2877")),m=Object(l["a"])(u,i,c,!1,null,"2fc8d98f",null),v=m.exports,_=function(){var t=this,s=t._self._c;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[t._v(" 最新評論 ")]),s("div",{staticClass:"card-body"},t._l(t.comments,(function(a){return s("div",{key:a.id},[s("h4",[s("router-link",{attrs:{to:{name:"restaurant",params:{id:a.Restaurant.id}}}},[t._v(" "+t._s(a.Restaurant.name)+" ")])],1),s("p",[t._v("At reiciendis eaque hic excepturi ratione officiis ad ut minus.")]),t._v("by "),s("router-link",{attrs:{to:{name:"user",params:{id:a.UserId}}}},[t._v(" root ")]),t._v(" at 3 days ago "),s("hr")],1)})),0)])},h=[],p={props:{comments:{type:Array,required:!0}}},f=p,b=Object(l["a"])(f,_,h,!1,null,null,null),y=b.exports,C=a("c4c3"),w=a("2fa3"),g=a("2375"),k={name:"RestaurantFeeds",components:{NavTabs:n["a"],NewestRestaurants:v,NewestComments:y,Spinner:g["a"]},data(){return{restaurants:[],comments:[],isLoading:!0}},created(){this.fetchFeeds()},methods:{async fetchFeeds(){try{const t=await C["a"].getFeeds(),{restaurants:s,comments:a}=t.data;this.restaurants=s,this.comments=a.filter(t=>t.Restaurant),this.isLoading=!1}catch(t){this.isLoading=!1,console.error(t),w["a"].fire({icon:"error",title:"無法取得最新動態，請稍後再試"})}}}},N=k,R=Object(l["a"])(N,e,r,!1,null,null,null);s["default"]=R.exports},ad37:function(t,s,a){}}]);
//# sourceMappingURL=chunk-bc7f2e74.5da8acc2.js.map