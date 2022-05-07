// Compiled by ClojureScript 1.10.773 {}
goog.provide('testapp.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('clojure.string');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
if((typeof testapp !== 'undefined') && (typeof testapp.core !== 'undefined') && (typeof testapp.core.dataset !== 'undefined')){
} else {
testapp.core.dataset = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof testapp !== 'undefined') && (typeof testapp.core !== 'undefined') && (typeof testapp.core.current_page !== 'undefined')){
} else {
testapp.core.current_page = reagent.core.atom.call(null,"list");
}
testapp.core.update_order_list = (function testapp$core$update_order_list(){
var c__22972__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22973__auto__ = (function (){var switch__22949__auto__ = (function (state_23727){
var state_val_23728 = (state_23727[(1)]);
if((state_val_23728 === (1))){
var inst_23717 = cljs_http.client.get.call(null,"http://localhost:8080/order/list");
var state_23727__$1 = state_23727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23727__$1,(2),inst_23717);
} else {
if((state_val_23728 === (2))){
var inst_23719 = (state_23727[(2)]);
var inst_23720 = inst_23719.call(null,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_23721 = cljs.core.js__GT_clj.call(null,inst_23720);
var inst_23722 = cljs.core.reset_BANG_.call(null,testapp.core.dataset,inst_23721);
var inst_23723 = cljs.core.deref.call(null,testapp.core.dataset);
var inst_23724 = inst_23723.call(null);
var inst_23725 = console.log(inst_23724);
var state_23727__$1 = (function (){var statearr_23729 = state_23727;
(statearr_23729[(7)] = inst_23722);

return statearr_23729;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23727__$1,inst_23725);
} else {
return null;
}
}
});
return (function() {
var testapp$core$update_order_list_$_state_machine__22950__auto__ = null;
var testapp$core$update_order_list_$_state_machine__22950__auto____0 = (function (){
var statearr_23730 = [null,null,null,null,null,null,null,null];
(statearr_23730[(0)] = testapp$core$update_order_list_$_state_machine__22950__auto__);

(statearr_23730[(1)] = (1));

return statearr_23730;
});
var testapp$core$update_order_list_$_state_machine__22950__auto____1 = (function (state_23727){
while(true){
var ret_value__22951__auto__ = (function (){try{while(true){
var result__22952__auto__ = switch__22949__auto__.call(null,state_23727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22952__auto__;
}
break;
}
}catch (e23731){if((e23731 instanceof Object)){
var ex__22953__auto__ = e23731;
var statearr_23732_23734 = state_23727;
(statearr_23732_23734[(5)] = ex__22953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23735 = state_23727;
state_23727 = G__23735;
continue;
} else {
return ret_value__22951__auto__;
}
break;
}
});
testapp$core$update_order_list_$_state_machine__22950__auto__ = function(state_23727){
switch(arguments.length){
case 0:
return testapp$core$update_order_list_$_state_machine__22950__auto____0.call(this);
case 1:
return testapp$core$update_order_list_$_state_machine__22950__auto____1.call(this,state_23727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
testapp$core$update_order_list_$_state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$0 = testapp$core$update_order_list_$_state_machine__22950__auto____0;
testapp$core$update_order_list_$_state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$1 = testapp$core$update_order_list_$_state_machine__22950__auto____1;
return testapp$core$update_order_list_$_state_machine__22950__auto__;
})()
})();
var state__22974__auto__ = (function (){var statearr_23733 = f__22973__auto__.call(null);
(statearr_23733[(6)] = c__22972__auto__);

return statearr_23733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22974__auto__);
}));

return c__22972__auto__;
});
testapp.core.send_new_order = (function testapp$core$send_new_order(order){
return cljs_http.client.post.call(null,"http://localhost:8080/order",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"json-params","json-params",-1112693596),order], null));
});
if((typeof testapp !== 'undefined') && (typeof testapp.core !== 'undefined') && (typeof testapp.core.autoupdate !== 'undefined')){
} else {
testapp.core.autoupdate = setInterval((function (){
return testapp.core.update_order_list.call(null);
}),(500));
}
testapp.core.order_item = (function testapp$core$order_item(order){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.order-item","div.order-item",-2001016246),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.order-item_title","div.order-item_title",-1289221619),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spin","spin",-869832076),["Date: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"execution_date","execution_date",-179267524).cljs$core$IFn$_invoke$arity$1(order))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spin","spin",-869832076),["Customer: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"customer","customer",1742966319).cljs$core$IFn$_invoke$arity$1(order))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spin","spin",-869832076),["Executor: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"executor","executor",1197215162).cljs$core$IFn$_invoke$arity$1(order))].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.order-item_body","div.order-item_body",-564047054),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Title: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(order))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Description: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(order))].join('')], null)], null)], null);
});
if((typeof testapp !== 'undefined') && (typeof testapp.core !== 'undefined') && (typeof testapp.core.form_values !== 'undefined')){
} else {
testapp.core.form_values = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
testapp.core.input_field = (function testapp$core$input_field(name){
var key = cljs.core.keyword.call(null,clojure.string.lower_case.call(null,name));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),name,new cljs.core.Keyword(null,"id","id",-1388402092),name,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,testapp.core.form_values).call(null,key),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__23736_SHARP_){
return cljs.core.swap_BANG_.call(null,testapp.core.form_values,(function (){
return cljs.core.assoc.call(null,cljs.core.deref.call(null,testapp.core.form_values),key,p1__23736_SHARP_.target.value);
}));
})], null)], null)], null)], null);
});
testapp.core.text_field = (function testapp$core$text_field(name){
var key = cljs.core.keyword.call(null,clojure.string.lower_case.call(null,name));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),name,new cljs.core.Keyword(null,"id","id",-1388402092),name,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,testapp.core.form_values).call(null,key),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__23737_SHARP_){
return cljs.core.swap_BANG_.call(null,testapp.core.form_values,(function (){
return cljs.core.assoc.call(null,cljs.core.deref.call(null,testapp.core.form_values),key,p1__23737_SHARP_.target.value);
}));
})], null)], null)], null)], null);
});
testapp.core.date_field = (function testapp$core$date_field(name){
var key = cljs.core.keyword.call(null,clojure.string.lower_case.call(null,name));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),name,new cljs.core.Keyword(null,"id","id",-1388402092),name,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,testapp.core.form_values).call(null,key),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__23738_SHARP_){
return cljs.core.swap_BANG_.call(null,testapp.core.form_values,(function (){
return cljs.core.assoc.call(null,cljs.core.deref.call(null,testapp.core.form_values),key,p1__23738_SHARP_.target.value);
}));
})], null)], null)], null)], null);
});
testapp.core.validate_form = (function testapp$core$validate_form(values){
return values;
});
testapp.core.header = (function testapp$core$header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.menu","nav.menu",712557538),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.menu_items","ul.menu_items",314792485),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.menu_item","a.menu_item",-1570606036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,testapp.core.current_page),"add"))?"meni_item--selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,testapp.core.current_page,"add");
})], null),"Add order"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.menu_item","a.menu_item",-1570606036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,testapp.core.current_page),"list"))?"meni_item--selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,testapp.core.current_page,"list");
})], null),"Order list"], null)], null)], null)], null)], null);
});
testapp.core.footer = (function testapp$core$footer(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),"Test Task for Arrival (c) Sizov Sergey 2022"], null);
});
testapp.core.add_form = (function testapp$core$add_form(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.order-form","form.order-form",-432558694),testapp.core.input_field.call(null,"Customer"),testapp.core.input_field.call(null,"Executor"),testapp.core.input_field.call(null,"Title"),testapp.core.text_field.call(null,"Description"),testapp.core.date_field.call(null,"Execution_Date"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return (function (){
e.preventDefault();

testapp.core.validate_form.call(null,cljs.core.deref.call(null,testapp.core.form_values));

testapp.core.send_new_order.call(null,cljs.core.deref.call(null,testapp.core.form_values));

cljs.core.reset_BANG_.call(null,testapp.core.form_values,cljs.core.PersistentArrayMap.EMPTY);

return cljs.core.reset_BANG_.call(null,testapp.core.current_page,"list");
})()
.call(null);
})], null),"Add"], null)], null);
});
testapp.core.order_list = (function testapp$core$order_list(){
var iter__4529__auto__ = (function testapp$core$order_list_$_iter__23739(s__23740){
return (new cljs.core.LazySeq(null,(function (){
var s__23740__$1 = s__23740;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__23740__$1);
if(temp__5753__auto__){
var s__23740__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23740__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__23740__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__23742 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__23741 = (0);
while(true){
if((i__23741 < size__4528__auto__)){
var order = cljs.core._nth.call(null,c__4527__auto__,i__23741);
cljs.core.chunk_append.call(null,b__23742,testapp.core.order_item.call(null,order));

var G__23743 = (i__23741 + (1));
i__23741 = G__23743;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23742),testapp$core$order_list_$_iter__23739.call(null,cljs.core.chunk_rest.call(null,s__23740__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23742),null);
}
} else {
var order = cljs.core.first.call(null,s__23740__$2);
return cljs.core.cons.call(null,testapp.core.order_item.call(null,order),testapp$core$order_list_$_iter__23739.call(null,cljs.core.rest.call(null,s__23740__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.reverse.call(null,cljs.core.deref.call(null,testapp.core.dataset)));
});
testapp.core.main = (function testapp$core$main(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),(function (){var G__23744 = cljs.core.deref.call(null,testapp.core.current_page);
switch (G__23744) {
case "list":
return testapp.core.order_list.call(null);

break;
case "add":
return testapp.core.add_form.call(null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23744)].join('')));

}
})()], null);
});
testapp.core.index = (function testapp$core$index(){
testapp.core.update_order_list.call(null);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testapp.core.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testapp.core.main], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testapp.core.footer], null)], null);
});
reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testapp.core.index], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1651945700487
