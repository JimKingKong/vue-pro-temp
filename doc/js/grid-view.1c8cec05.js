(window.webpackJsonp=window.webpackJsonp||[]).push([["grid-view"],{"1b62":function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var n={data:function(){return{tabColumnProps:[{prop:"attr",label:"参数",width:"180px"},{prop:"des",label:"说明"},{prop:"type",label:"类型",width:"180px"},{prop:"select",label:"可选值"},{prop:"default",label:"默认值",width:"180px"}],tabColumnSlot:[{prop:"name",label:"插槽名称",width:"180px"},{prop:"des",label:"说明"}],tabColumnEvent:[{prop:"name",label:"事件名称",width:"180px"},{prop:"des",label:"说明"},{prop:"func",label:"回调参数"}],tabColumnMethods:[{prop:"name",label:"事件名称",width:"180px"},{prop:"des",label:"说明"},{prop:"func",label:"参数"}],tabDataProps:[{attr:"刘军",des:100,type:"男",select:"理科生是否收到收到是是的撒旦法第三方沙发是否撒旦法撒旦法sad法尔范 多个发给 ",default:"上海市普陀区金沙江路 1518 弄"}],tabDataSlot:[{name:"刘军",des:100}],tabDataEvent:[{name:"刘军",des:100,func:"dd"}],tabDataMethods:[{name:"刘军",des:100,func:"dd"}]}}}},4423:function(e,a,t){"use strict";var n=t("e662");t.n(n).a},e27e:function(e,a,t){"use strict";t.r(a);var n={name:"GridView",components:{},mixins:[t("1b62").a],props:{msg:{type:String,default:"GridView"}},data:function(){return{itemData:[{name:"大军",age:"11",sex:"男",address:"abc",email:"113345321@123"},{name:"小军1",age:"11",sex:"男",address:"abc",email:"113345321@123"},{name:"小军2",age:"11",sex:"男",address:"abc",email:"113345321@123"},{name:"小军3",age:"11",sex:"男",address:"abc",email:"113345321@123"},{name:"小军4",age:"11",sex:"男",address:"abc",email:"113345321@123"},{name:"小军3",age:"11",sex:"男",address:"abc",email:"113345321@123"},{name:"小军4",age:"11",sex:"男",address:"abc",email:"113345321@123"},{name:"小军3",age:"11",sex:"男",address:"abc",email:"113345321@123"},{name:"小军4",age:"11",sex:"男",address:"abc",email:"113345321@123"}],paginationConf:{"current-page":1,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400},tabDataProps:[{attr:"width",des:"组件的宽",type:"String",select:" ",default:"null"},{attr:"gutter",des:"栅格间隔",type:"Number",select:" ",default:"0"},{attr:"itemData",des:"栅格系统的数据",type:"Array",select:" ",default:"[]"},{attr:"hasPagination",des:"是否有分页器",type:"Boolean",select:" ",default:"true"},{attr:"paginationConf",des:"分页器的配置",type:"Object",select:" ",default:"\n          {\n            'current-page': 1, // 重 1 开始\n            'page-sizes': [100, 200, 300, 400],\n            'page-size': 100,\n            layout: 'total, sizes, prev, pager, next, jumper',\n            total: 400\n          }\n          "},{attr:"xs",des:"",type:"Number",select:" ",default:"24"},{attr:"sm",des:"",type:"Number",select:" ",default:"24"},{attr:"md",des:"",type:"Number",select:" ",default:"24"},{attr:"lg",des:"",type:"Number",select:" ",default:"8"},{attr:"xl",des:"",type:"Number",select:" ",default:"6"},{attr:"showEmptyText",des:"没数据时是否显示空文本",type:"Boolean",select:" ",default:"false"}],tabDataSlot:[],tabDataEvent:[{name:"handlePaginatonChange",des:"监听分页器的点击事件",func:"func( pagination )"}]}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{handlePaginatonChange:function(){}}},s=(t("4423"),t("2877")),i=Object(s.a)(n,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"grid-view"},[t("b-title-tag",{attrs:{name:"b-grid-view 组件"}}),t("h4",[e._v("1.基本的使用")]),t("b-grid-view",{attrs:{itemData:e.itemData,hasPagination:!1,gutter:8,md:6,lg:4,xl:3},scopedSlots:e._u([{key:"col-item",fn:function(a){return[t("div",{staticClass:"gird-col1"},[e._v(" "+e._s(a.item.name)+" ")])]}}])}),t("code-h",{attrs:{lang:"html",content:'\n    <b-grid-view\n      :itemData="itemData"\n      :hasPagination="false"\n      :gutter="8"\n      :md="6"\n      :lg="4"\n      :xl="3"\n    >\n      <template v-slot:col-item="slotProps">\n        <div class="gird-col1">\n          { {slotProps.item.name}}\n        </div>\n      </template>\n    </b-grid-view>\n  '}}),t("code-h",{attrs:{lang:"js",content:"\n          itemData: [\n      {\n        name: '大军',\n        age: '11',\n        sex: '男',\n        address: 'abc',\n        email: '113345321@123'\n      },\n      {\n        name: '小军1',\n        age: '11',\n        sex: '男',\n        address: 'abc',\n        email: '113345321@123'\n      },\n      {\n        name: '小军2',\n        age: '11',\n        sex: '男',\n        address: 'abc',\n        email: '113345321@123'\n      },\n      {\n        name: '小军3',\n        age: '11',\n        sex: '男',\n        address: 'abc',\n        email: '113345321@123'\n      },\n      {\n        name: '小军4',\n        age: '11',\n        sex: '男',\n        address: 'abc',\n        email: '113345321@123'\n      },\n      {\n        name: '小军3',\n        age: '11',\n        sex: '男',\n        address: 'abc',\n        email: '113345321@123'\n      },\n      {\n        name: '小军4',\n        age: '11',\n        sex: '男',\n        address: 'abc',\n        email: '113345321@123'\n      },\n      {\n        name: '小军3',\n        age: '11',\n        sex: '男',\n        address: 'abc',\n        email: '113345321@123'\n      },\n      {\n        name: '小军4',\n        age: '11',\n        sex: '男',\n        address: 'abc',\n        email: '113345321@123'\n      }\n    ],\n    "}}),t("h4",[e._v("2.带分页器")]),t("b-grid-view",{attrs:{itemData:e.itemData,showEmptyText:!0},on:{handlePaginatonChange:e.handlePaginatonChange},scopedSlots:e._u([{key:"col-item",fn:function(a){return[t("div",{staticClass:"gird-col2"},[e._v(" "+e._s(a.item.name)+" ")])]}}])}),t("code-h",{attrs:{lang:"html",content:'\n    <b-grid-view\n      :itemData="itemData"\n      :showEmptyText="true"\n      @handlePaginatonChange="handlePaginatonChange"\n    >\n      <template v-slot:col-item="slotProps">\n        <div class="gird-col2">\n          { {slotProps.item.name}}\n        </div>\n      </template>\n    </b-grid-view>\n  '}}),t("h4",[e._v("3.带分页器没数据时")]),t("b-grid-view",{attrs:{itemData:[],paginationConf:e.paginationConf,showEmptyText:!0},on:{handlePaginatonChange:e.handlePaginatonChange},scopedSlots:e._u([{key:"col-item",fn:function(a){return[t("div",{staticClass:"gird-col2"},[e._v(" "+e._s(a.item.name)+" ")])]}}])}),t("code-h",{attrs:{lang:"html",content:'\n    <b-grid-view\n      :itemData="[]"\n      :showEmptyText="true"\n      @handlePaginatonChange="handlePaginatonChange"\n    >\n      <template v-slot:col-item="slotProps">\n        <div class="gird-col2">\n          { {slotProps.item.name}}\n        </div>\n      </template>\n    </b-grid-view>\n  '}}),t("h4",[e._v("BGridView 的 Props：")]),t("b-advanced-table",{staticStyle:{width:"100%"},attrs:{stripe:"",border:!0,hasPagination:!1,tabColumn:e.tabColumnProps,tabData:e.tabDataProps}}),t("h4",[e._v("BGridView 的 Slot：")]),t("b-advanced-table",{staticStyle:{width:"900px"},attrs:{stripe:"",border:!0,hasPagination:!1,tabColumn:e.tabColumnSlot,tabData:e.tabDataSlot}}),t("h4",[e._v("BGridView 的 Event：")]),t("b-advanced-table",{staticStyle:{width:"900px"},attrs:{stripe:"",border:!0,hasPagination:!1,tabColumn:e.tabColumnEvent,tabData:e.tabDataEvent}})],1)}),[],!1,null,"3f13be4c",null);a.default=i.exports},e662:function(e,a,t){}}]);