// Compiled by ClojureScript 1.10.773 {}
goog.provide('testapp.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
if((typeof testapp !== 'undefined') && (typeof testapp.core !== 'undefined') && (typeof testapp.core.current_page !== 'undefined')){
} else {
testapp.core.current_page = reagent.core.atom.call(null,"list");
}
if((typeof testapp !== 'undefined') && (typeof testapp.core !== 'undefined') && (typeof testapp.core.dataset !== 'undefined')){
} else {
testapp.core.dataset = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"title","title",636505583),"Fix phone",new cljs.core.Keyword(null,"description","description",-1428560544),"Fix stupid phone!",new cljs.core.Keyword(null,"customer","customer",1742966319),"Petya",new cljs.core.Keyword(null,"executor","executor",1197215162),"Ivan",new cljs.core.Keyword(null,"execution_date","execution_date",-179267524),"25-04-22"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"title","title",636505583),"Problem with AD",new cljs.core.Keyword(null,"description","description",-1428560544),"Some problem with AD. Check it.",new cljs.core.Keyword(null,"customer","customer",1742966319),"Tanya",new cljs.core.Keyword(null,"executor","executor",1197215162),"Ivan",new cljs.core.Keyword(null,"execution_date","execution_date",-179267524),"25-03-22"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"title","title",636505583),"Help me!!!",new cljs.core.Keyword(null,"description","description",-1428560544),"Recall to customer and figure out wht happened",new cljs.core.Keyword(null,"customer","customer",1742966319),"Masha",new cljs.core.Keyword(null,"executor","executor",1197215162),"Ivan",new cljs.core.Keyword(null,"execution_date","execution_date",-179267524),"22-04-22"], null)], null));
}
testapp.core.order_item = (function testapp$core$order_item(order){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.order-item","div.order-item",-2001016246),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.order-item_title","div.order-item_title",-1289221619),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spin","spin",-869832076),["Date: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"execution_date","execution_date",-179267524).cljs$core$IFn$_invoke$arity$1(order))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spin","spin",-869832076),["Customer: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"customer","customer",1742966319).cljs$core$IFn$_invoke$arity$1(order))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spin","spin",-869832076),["Executor: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"executor","executor",1197215162).cljs$core$IFn$_invoke$arity$1(order))].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.order-item_body","div.order-item_body",-564047054),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Title: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(order))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Description: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(order))].join('')], null)], null)], null);
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
if((typeof testapp !== 'undefined') && (typeof testapp.core !== 'undefined') && (typeof testapp.core.form_values !== 'undefined')){
} else {
testapp.core.form_values = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
testapp.core.input_field = (function testapp$core$input_field(name){
var key = cljs.core.keyword.call(null,clojure.string.lower_case.call(null,name));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),name,new cljs.core.Keyword(null,"id","id",-1388402092),name,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,testapp.core.form_values).call(null,key),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__21672_SHARP_){
return cljs.core.swap_BANG_.call(null,testapp.core.form_values,(function (){
return cljs.core.assoc.call(null,cljs.core.deref.call(null,testapp.core.form_values),key,p1__21672_SHARP_.target.value);
}));
})], null)], null)], null)], null);
});
testapp.core.text_field = (function testapp$core$text_field(name){
var key = cljs.core.keyword.call(null,clojure.string.lower_case.call(null,name));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),name,new cljs.core.Keyword(null,"id","id",-1388402092),name,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,testapp.core.form_values).call(null,key),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__21673_SHARP_){
return cljs.core.swap_BANG_.call(null,testapp.core.form_values,(function (){
return cljs.core.assoc.call(null,cljs.core.deref.call(null,testapp.core.form_values),key,p1__21673_SHARP_.target.value);
}));
})], null)], null)], null)], null);
});
testapp.core.date_field = (function testapp$core$date_field(name){
var key = cljs.core.keyword.call(null,clojure.string.lower_case.call(null,name));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),name,new cljs.core.Keyword(null,"id","id",-1388402092),name,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,testapp.core.form_values).call(null,key),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__21674_SHARP_){
return cljs.core.swap_BANG_.call(null,testapp.core.form_values,(function (){
return cljs.core.assoc.call(null,cljs.core.deref.call(null,testapp.core.form_values),key,p1__21674_SHARP_.target.value);
}));
})], null)], null)], null)], null);
});
testapp.core.validate_form = (function testapp$core$validate_form(values){
cljs.core.println.call(null,values);

return values;
});
testapp.core.send_date = (function testapp$core$send_date(values){
return cljs.core.swap_BANG_.call(null,testapp.core.dataset,(function (){
return cljs.core.conj.call(null,cljs.core.deref.call(null,testapp.core.dataset),cljs.core.assoc.call(null,values,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.count.call(null,cljs.core.deref.call(null,testapp.core.dataset))));
}));
});
testapp.core.add_form = (function testapp$core$add_form(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.order-form","form.order-form",-432558694),testapp.core.input_field.call(null,"Customer"),testapp.core.input_field.call(null,"Executor"),testapp.core.input_field.call(null,"Title"),testapp.core.text_field.call(null,"Description"),testapp.core.date_field.call(null,"Execution_Date"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return (function (){
e.preventDefault();

testapp.core.validate_form.call(null,cljs.core.deref.call(null,testapp.core.form_values));

testapp.core.send_date.call(null,cljs.core.deref.call(null,testapp.core.form_values));

cljs.core.reset_BANG_.call(null,testapp.core.form_values,cljs.core.PersistentArrayMap.EMPTY);

return cljs.core.reset_BANG_.call(null,testapp.core.current_page,"list");
})()
.call(null);
})], null),"Add"], null)], null);
});
testapp.core.order_list = (function testapp$core$order_list(){
var iter__4529__auto__ = (function testapp$core$order_list_$_iter__21675(s__21676){
return (new cljs.core.LazySeq(null,(function (){
var s__21676__$1 = s__21676;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__21676__$1);
if(temp__5753__auto__){
var s__21676__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21676__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__21676__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__21678 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__21677 = (0);
while(true){
if((i__21677 < size__4528__auto__)){
var order = cljs.core._nth.call(null,c__4527__auto__,i__21677);
cljs.core.chunk_append.call(null,b__21678,testapp.core.order_item.call(null,order));

var G__21679 = (i__21677 + (1));
i__21677 = G__21679;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21678),testapp$core$order_list_$_iter__21675.call(null,cljs.core.chunk_rest.call(null,s__21676__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21678),null);
}
} else {
var order = cljs.core.first.call(null,s__21676__$2);
return cljs.core.cons.call(null,testapp.core.order_item.call(null,order),testapp$core$order_list_$_iter__21675.call(null,cljs.core.rest.call(null,s__21676__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),(function (){var G__21680 = cljs.core.deref.call(null,testapp.core.current_page);
switch (G__21680) {
case "list":
return testapp.core.order_list.call(null);

break;
case "add":
return testapp.core.add_form.call(null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21680)].join('')));

}
})()], null);
});
testapp.core.index = (function testapp$core$index(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testapp.core.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testapp.core.main], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testapp.core.footer], null)], null);
});
reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testapp.core.index], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1651856615446
