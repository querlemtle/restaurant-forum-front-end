(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2ec8"],{"25d3":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container py-5"},[t.isLoading?a("Spinner"):[a("div",[a("h1",[t._v(t._s(t.restaurant.name))]),a("span",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v(" "+t._s(t.restaurant.categoryName)+" ")])]),a("hr"),a("ul",[a("li",[t._v("評論數： "+t._s(t.restaurant.commentsLength))]),a("li",[t._v("瀏覽次數： "+t._s(t.restaurant.viewCounts))])]),a("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(a){return t.$router.back()}}},[t._v(" 回上一頁 ")])]],2)},s=[],r=e("c4c3"),i=e("2fa3"),o=e("2375"),c={name:"RestaurantDashboard",components:{Spinner:o["a"]},data(){return{restaurant:{id:-1,name:"",categoryName:"",commentsLength:0,viewCounts:0},isLoading:!0}},created(){const{id:t}=this.$route.params;this.fetchRestaurant(t)},beforeRouteUpdate(t,a,e){const{id:n}=t.params;this.fetchRestaurant(n),e()},methods:{async fetchRestaurant(t){try{const{data:a}=await r["a"].getRestaurant({restaurantId:t}),{id:e,name:n,Category:s,Comments:i,viewCounts:o}=a.restaurant;this.restaurant={...this.restaurant,id:e,name:n,categoryName:s?s.name:"未分類",commentsLength:i.length,viewCounts:o},this.isLoading=!1}catch(a){this.isLoading=!1,console.error(a.message),i["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"})}}}},u=c,d=e("2877"),m=Object(d["a"])(u,n,s,!1,null,null,null);a["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0b2ec8.0999be54.js.map