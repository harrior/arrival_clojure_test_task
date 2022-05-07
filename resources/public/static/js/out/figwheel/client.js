// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e30806){if((e30806 instanceof Error)){
var e = e30806;
return "Error: Unable to stringify";
} else {
throw e30806;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30809 = arguments.length;
switch (G__30809) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30807_SHARP_){
if(typeof p1__30807_SHARP_ === 'string'){
return p1__30807_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30807_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30812 = arguments.length;
var i__4737__auto___30813 = (0);
while(true){
if((i__4737__auto___30813 < len__4736__auto___30812)){
args__4742__auto__.push((arguments[i__4737__auto___30813]));

var G__30814 = (i__4737__auto___30813 + (1));
i__4737__auto___30813 = G__30814;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30811){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30811));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30816 = arguments.length;
var i__4737__auto___30817 = (0);
while(true){
if((i__4737__auto___30817 < len__4736__auto___30816)){
args__4742__auto__.push((arguments[i__4737__auto___30817]));

var G__30818 = (i__4737__auto___30817 + (1));
i__4737__auto___30817 = G__30818;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30815){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30815));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30819){
var map__30820 = p__30819;
var map__30820__$1 = (((((!((map__30820 == null))))?(((((map__30820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30820):map__30820);
var message = cljs.core.get.call(null,map__30820__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30820__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4126__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return false;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__26718__auto___30899 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26719__auto__ = (function (){var switch__26623__auto__ = (function (state_30871){
var state_val_30872 = (state_30871[(1)]);
if((state_val_30872 === (7))){
var inst_30867 = (state_30871[(2)]);
var state_30871__$1 = state_30871;
var statearr_30873_30900 = state_30871__$1;
(statearr_30873_30900[(2)] = inst_30867);

(statearr_30873_30900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30872 === (1))){
var state_30871__$1 = state_30871;
var statearr_30874_30901 = state_30871__$1;
(statearr_30874_30901[(2)] = null);

(statearr_30874_30901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30872 === (4))){
var inst_30824 = (state_30871[(7)]);
var inst_30824__$1 = (state_30871[(2)]);
var state_30871__$1 = (function (){var statearr_30875 = state_30871;
(statearr_30875[(7)] = inst_30824__$1);

return statearr_30875;
})();
if(cljs.core.truth_(inst_30824__$1)){
var statearr_30876_30902 = state_30871__$1;
(statearr_30876_30902[(1)] = (5));

} else {
var statearr_30877_30903 = state_30871__$1;
(statearr_30877_30903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30872 === (15))){
var inst_30831 = (state_30871[(8)]);
var inst_30846 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30831);
var inst_30847 = cljs.core.first.call(null,inst_30846);
var inst_30848 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30847);
var inst_30849 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30848)].join('');
var inst_30850 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30849);
var state_30871__$1 = state_30871;
var statearr_30878_30904 = state_30871__$1;
(statearr_30878_30904[(2)] = inst_30850);

(statearr_30878_30904[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30872 === (13))){
var inst_30855 = (state_30871[(2)]);
var state_30871__$1 = state_30871;
var statearr_30879_30905 = state_30871__$1;
(statearr_30879_30905[(2)] = inst_30855);

(statearr_30879_30905[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30872 === (6))){
var state_30871__$1 = state_30871;
var statearr_30880_30906 = state_30871__$1;
(statearr_30880_30906[(2)] = null);

(statearr_30880_30906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30872 === (17))){
var inst_30853 = (state_30871[(2)]);
var state_30871__$1 = state_30871;
var statearr_30881_30907 = state_30871__$1;
(statearr_30881_30907[(2)] = inst_30853);

(statearr_30881_30907[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30872 === (3))){
var inst_30869 = (state_30871[(2)]);
var state_30871__$1 = state_30871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30871__$1,inst_30869);
} else {
if((state_val_30872 === (12))){
var inst_30830 = (state_30871[(9)]);
var inst_30844 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30830,opts);
var state_30871__$1 = state_30871;
if(inst_30844){
var statearr_30882_30908 = state_30871__$1;
(statearr_30882_30908[(1)] = (15));

} else {
var statearr_30883_30909 = state_30871__$1;
(statearr_30883_30909[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30872 === (2))){
var state_30871__$1 = state_30871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30871__$1,(4),ch);
} else {
if((state_val_30872 === (11))){
var inst_30831 = (state_30871[(8)]);
var inst_30836 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30837 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30831);
var inst_30838 = cljs.core.async.timeout.call(null,(1000));
var inst_30839 = [inst_30837,inst_30838];
var inst_30840 = (new cljs.core.PersistentVector(null,2,(5),inst_30836,inst_30839,null));
var state_30871__$1 = state_30871;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30871__$1,(14),inst_30840);
} else {
if((state_val_30872 === (9))){
var inst_30831 = (state_30871[(8)]);
var inst_30857 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30858 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30831);
var inst_30859 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30858);
var inst_30860 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30859)].join('');
var inst_30861 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30860);
var state_30871__$1 = (function (){var statearr_30884 = state_30871;
(statearr_30884[(10)] = inst_30857);

return statearr_30884;
})();
var statearr_30885_30910 = state_30871__$1;
(statearr_30885_30910[(2)] = inst_30861);

(statearr_30885_30910[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30872 === (5))){
var inst_30824 = (state_30871[(7)]);
var inst_30826 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30827 = (new cljs.core.PersistentArrayMap(null,2,inst_30826,null));
var inst_30828 = (new cljs.core.PersistentHashSet(null,inst_30827,null));
var inst_30829 = figwheel.client.focus_msgs.call(null,inst_30828,inst_30824);
var inst_30830 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30829);
var inst_30831 = cljs.core.first.call(null,inst_30829);
var inst_30832 = figwheel.client.autoload_QMARK_.call(null);
var state_30871__$1 = (function (){var statearr_30886 = state_30871;
(statearr_30886[(9)] = inst_30830);

(statearr_30886[(8)] = inst_30831);

return statearr_30886;
})();
if(cljs.core.truth_(inst_30832)){
var statearr_30887_30911 = state_30871__$1;
(statearr_30887_30911[(1)] = (8));

} else {
var statearr_30888_30912 = state_30871__$1;
(statearr_30888_30912[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30872 === (14))){
var inst_30842 = (state_30871[(2)]);
var state_30871__$1 = state_30871;
var statearr_30889_30913 = state_30871__$1;
(statearr_30889_30913[(2)] = inst_30842);

(statearr_30889_30913[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30872 === (16))){
var state_30871__$1 = state_30871;
var statearr_30890_30914 = state_30871__$1;
(statearr_30890_30914[(2)] = null);

(statearr_30890_30914[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30872 === (10))){
var inst_30863 = (state_30871[(2)]);
var state_30871__$1 = (function (){var statearr_30891 = state_30871;
(statearr_30891[(11)] = inst_30863);

return statearr_30891;
})();
var statearr_30892_30915 = state_30871__$1;
(statearr_30892_30915[(2)] = null);

(statearr_30892_30915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30872 === (8))){
var inst_30830 = (state_30871[(9)]);
var inst_30834 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30830,opts);
var state_30871__$1 = state_30871;
if(cljs.core.truth_(inst_30834)){
var statearr_30893_30916 = state_30871__$1;
(statearr_30893_30916[(1)] = (11));

} else {
var statearr_30894_30917 = state_30871__$1;
(statearr_30894_30917[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26624__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26624__auto____0 = (function (){
var statearr_30895 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30895[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26624__auto__);

(statearr_30895[(1)] = (1));

return statearr_30895;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26624__auto____1 = (function (state_30871){
while(true){
var ret_value__26625__auto__ = (function (){try{while(true){
var result__26626__auto__ = switch__26623__auto__.call(null,state_30871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26626__auto__;
}
break;
}
}catch (e30896){if((e30896 instanceof Object)){
var ex__26627__auto__ = e30896;
var statearr_30897_30918 = state_30871;
(statearr_30897_30918[(5)] = ex__26627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30919 = state_30871;
state_30871 = G__30919;
continue;
} else {
return ret_value__26625__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26624__auto__ = function(state_30871){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26624__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26624__auto____1.call(this,state_30871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26624__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26624__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26624__auto__;
})()
})();
var state__26720__auto__ = (function (){var statearr_30898 = f__26719__auto__.call(null);
(statearr_30898[(6)] = c__26718__auto___30899);

return statearr_30898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26720__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30920_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30920_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30926 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30922 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30923 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30924 = true;
var _STAR_print_fn_STAR__temp_val__30925 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30924);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30925);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30923);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30922);
}}catch (e30921){if((e30921 instanceof Error)){
var e = e30921;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30926], null));
} else {
var e = e30921;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30927){
var map__30928 = p__30927;
var map__30928__$1 = (((((!((map__30928 == null))))?(((((map__30928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30928):map__30928);
var opts = map__30928__$1;
var build_id = cljs.core.get.call(null,map__30928__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__30930){
var vec__30931 = p__30930;
var seq__30932 = cljs.core.seq.call(null,vec__30931);
var first__30933 = cljs.core.first.call(null,seq__30932);
var seq__30932__$1 = cljs.core.next.call(null,seq__30932);
var map__30934 = first__30933;
var map__30934__$1 = (((((!((map__30934 == null))))?(((((map__30934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30934):map__30934);
var msg = map__30934__$1;
var msg_name = cljs.core.get.call(null,map__30934__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30932__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30936){
var vec__30937 = p__30936;
var seq__30938 = cljs.core.seq.call(null,vec__30937);
var first__30939 = cljs.core.first.call(null,seq__30938);
var seq__30938__$1 = cljs.core.next.call(null,seq__30938);
var map__30940 = first__30939;
var map__30940__$1 = (((((!((map__30940 == null))))?(((((map__30940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30940):map__30940);
var msg = map__30940__$1;
var msg_name = cljs.core.get.call(null,map__30940__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30938__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30942){
var map__30943 = p__30942;
var map__30943__$1 = (((((!((map__30943 == null))))?(((((map__30943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30943):map__30943);
var on_compile_warning = cljs.core.get.call(null,map__30943__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30943__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__30945){
var vec__30946 = p__30945;
var seq__30947 = cljs.core.seq.call(null,vec__30946);
var first__30948 = cljs.core.first.call(null,seq__30947);
var seq__30947__$1 = cljs.core.next.call(null,seq__30947);
var map__30949 = first__30948;
var map__30949__$1 = (((((!((map__30949 == null))))?(((((map__30949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30949):map__30949);
var msg = map__30949__$1;
var msg_name = cljs.core.get.call(null,map__30949__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30947__$1;
var pred__30951 = cljs.core._EQ_;
var expr__30952 = msg_name;
if(cljs.core.truth_(pred__30951.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30952))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30951.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30952))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26718__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26719__auto__ = (function (){var switch__26623__auto__ = (function (state_31041){
var state_val_31042 = (state_31041[(1)]);
if((state_val_31042 === (7))){
var inst_30961 = (state_31041[(2)]);
var state_31041__$1 = state_31041;
if(cljs.core.truth_(inst_30961)){
var statearr_31043_31090 = state_31041__$1;
(statearr_31043_31090[(1)] = (8));

} else {
var statearr_31044_31091 = state_31041__$1;
(statearr_31044_31091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (20))){
var inst_31035 = (state_31041[(2)]);
var state_31041__$1 = state_31041;
var statearr_31045_31092 = state_31041__$1;
(statearr_31045_31092[(2)] = inst_31035);

(statearr_31045_31092[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (27))){
var inst_31031 = (state_31041[(2)]);
var state_31041__$1 = state_31041;
var statearr_31046_31093 = state_31041__$1;
(statearr_31046_31093[(2)] = inst_31031);

(statearr_31046_31093[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (1))){
var inst_30954 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31041__$1 = state_31041;
if(cljs.core.truth_(inst_30954)){
var statearr_31047_31094 = state_31041__$1;
(statearr_31047_31094[(1)] = (2));

} else {
var statearr_31048_31095 = state_31041__$1;
(statearr_31048_31095[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (24))){
var inst_31033 = (state_31041[(2)]);
var state_31041__$1 = state_31041;
var statearr_31049_31096 = state_31041__$1;
(statearr_31049_31096[(2)] = inst_31033);

(statearr_31049_31096[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (4))){
var inst_31039 = (state_31041[(2)]);
var state_31041__$1 = state_31041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31041__$1,inst_31039);
} else {
if((state_val_31042 === (15))){
var inst_31037 = (state_31041[(2)]);
var state_31041__$1 = state_31041;
var statearr_31050_31097 = state_31041__$1;
(statearr_31050_31097[(2)] = inst_31037);

(statearr_31050_31097[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (21))){
var inst_30990 = (state_31041[(2)]);
var inst_30991 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30992 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30991);
var state_31041__$1 = (function (){var statearr_31051 = state_31041;
(statearr_31051[(7)] = inst_30990);

return statearr_31051;
})();
var statearr_31052_31098 = state_31041__$1;
(statearr_31052_31098[(2)] = inst_30992);

(statearr_31052_31098[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (31))){
var inst_31020 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31041__$1 = state_31041;
if(inst_31020){
var statearr_31053_31099 = state_31041__$1;
(statearr_31053_31099[(1)] = (34));

} else {
var statearr_31054_31100 = state_31041__$1;
(statearr_31054_31100[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (32))){
var inst_31029 = (state_31041[(2)]);
var state_31041__$1 = state_31041;
var statearr_31055_31101 = state_31041__$1;
(statearr_31055_31101[(2)] = inst_31029);

(statearr_31055_31101[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (33))){
var inst_31016 = (state_31041[(2)]);
var inst_31017 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31018 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31017);
var state_31041__$1 = (function (){var statearr_31056 = state_31041;
(statearr_31056[(8)] = inst_31016);

return statearr_31056;
})();
var statearr_31057_31102 = state_31041__$1;
(statearr_31057_31102[(2)] = inst_31018);

(statearr_31057_31102[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (13))){
var inst_30975 = figwheel.client.heads_up.clear.call(null);
var state_31041__$1 = state_31041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31041__$1,(16),inst_30975);
} else {
if((state_val_31042 === (22))){
var inst_30996 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30997 = figwheel.client.heads_up.append_warning_message.call(null,inst_30996);
var state_31041__$1 = state_31041;
var statearr_31058_31103 = state_31041__$1;
(statearr_31058_31103[(2)] = inst_30997);

(statearr_31058_31103[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (36))){
var inst_31027 = (state_31041[(2)]);
var state_31041__$1 = state_31041;
var statearr_31059_31104 = state_31041__$1;
(statearr_31059_31104[(2)] = inst_31027);

(statearr_31059_31104[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (29))){
var inst_31007 = (state_31041[(2)]);
var inst_31008 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31009 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31008);
var state_31041__$1 = (function (){var statearr_31060 = state_31041;
(statearr_31060[(9)] = inst_31007);

return statearr_31060;
})();
var statearr_31061_31105 = state_31041__$1;
(statearr_31061_31105[(2)] = inst_31009);

(statearr_31061_31105[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (6))){
var inst_30956 = (state_31041[(10)]);
var state_31041__$1 = state_31041;
var statearr_31062_31106 = state_31041__$1;
(statearr_31062_31106[(2)] = inst_30956);

(statearr_31062_31106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (28))){
var inst_31003 = (state_31041[(2)]);
var inst_31004 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31005 = figwheel.client.heads_up.display_warning.call(null,inst_31004);
var state_31041__$1 = (function (){var statearr_31063 = state_31041;
(statearr_31063[(11)] = inst_31003);

return statearr_31063;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31041__$1,(29),inst_31005);
} else {
if((state_val_31042 === (25))){
var inst_31001 = figwheel.client.heads_up.clear.call(null);
var state_31041__$1 = state_31041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31041__$1,(28),inst_31001);
} else {
if((state_val_31042 === (34))){
var inst_31022 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31041__$1 = state_31041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31041__$1,(37),inst_31022);
} else {
if((state_val_31042 === (17))){
var inst_30981 = (state_31041[(2)]);
var inst_30982 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30983 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30982);
var state_31041__$1 = (function (){var statearr_31064 = state_31041;
(statearr_31064[(12)] = inst_30981);

return statearr_31064;
})();
var statearr_31065_31107 = state_31041__$1;
(statearr_31065_31107[(2)] = inst_30983);

(statearr_31065_31107[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (3))){
var inst_30973 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31041__$1 = state_31041;
if(inst_30973){
var statearr_31066_31108 = state_31041__$1;
(statearr_31066_31108[(1)] = (13));

} else {
var statearr_31067_31109 = state_31041__$1;
(statearr_31067_31109[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (12))){
var inst_30969 = (state_31041[(2)]);
var state_31041__$1 = state_31041;
var statearr_31068_31110 = state_31041__$1;
(statearr_31068_31110[(2)] = inst_30969);

(statearr_31068_31110[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (2))){
var inst_30956 = (state_31041[(10)]);
var inst_30956__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31041__$1 = (function (){var statearr_31069 = state_31041;
(statearr_31069[(10)] = inst_30956__$1);

return statearr_31069;
})();
if(cljs.core.truth_(inst_30956__$1)){
var statearr_31070_31111 = state_31041__$1;
(statearr_31070_31111[(1)] = (5));

} else {
var statearr_31071_31112 = state_31041__$1;
(statearr_31071_31112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (23))){
var inst_30999 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31041__$1 = state_31041;
if(inst_30999){
var statearr_31072_31113 = state_31041__$1;
(statearr_31072_31113[(1)] = (25));

} else {
var statearr_31073_31114 = state_31041__$1;
(statearr_31073_31114[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (35))){
var state_31041__$1 = state_31041;
var statearr_31074_31115 = state_31041__$1;
(statearr_31074_31115[(2)] = null);

(statearr_31074_31115[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (19))){
var inst_30994 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31041__$1 = state_31041;
if(inst_30994){
var statearr_31075_31116 = state_31041__$1;
(statearr_31075_31116[(1)] = (22));

} else {
var statearr_31076_31117 = state_31041__$1;
(statearr_31076_31117[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (11))){
var inst_30965 = (state_31041[(2)]);
var state_31041__$1 = state_31041;
var statearr_31077_31118 = state_31041__$1;
(statearr_31077_31118[(2)] = inst_30965);

(statearr_31077_31118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (9))){
var inst_30967 = figwheel.client.heads_up.clear.call(null);
var state_31041__$1 = state_31041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31041__$1,(12),inst_30967);
} else {
if((state_val_31042 === (5))){
var inst_30958 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31041__$1 = state_31041;
var statearr_31078_31119 = state_31041__$1;
(statearr_31078_31119[(2)] = inst_30958);

(statearr_31078_31119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (14))){
var inst_30985 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31041__$1 = state_31041;
if(inst_30985){
var statearr_31079_31120 = state_31041__$1;
(statearr_31079_31120[(1)] = (18));

} else {
var statearr_31080_31121 = state_31041__$1;
(statearr_31080_31121[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (26))){
var inst_31011 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31041__$1 = state_31041;
if(inst_31011){
var statearr_31081_31122 = state_31041__$1;
(statearr_31081_31122[(1)] = (30));

} else {
var statearr_31082_31123 = state_31041__$1;
(statearr_31082_31123[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (16))){
var inst_30977 = (state_31041[(2)]);
var inst_30978 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30979 = figwheel.client.heads_up.display_exception.call(null,inst_30978);
var state_31041__$1 = (function (){var statearr_31083 = state_31041;
(statearr_31083[(13)] = inst_30977);

return statearr_31083;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31041__$1,(17),inst_30979);
} else {
if((state_val_31042 === (30))){
var inst_31013 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31014 = figwheel.client.heads_up.display_warning.call(null,inst_31013);
var state_31041__$1 = state_31041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31041__$1,(33),inst_31014);
} else {
if((state_val_31042 === (10))){
var inst_30971 = (state_31041[(2)]);
var state_31041__$1 = state_31041;
var statearr_31084_31124 = state_31041__$1;
(statearr_31084_31124[(2)] = inst_30971);

(statearr_31084_31124[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (18))){
var inst_30987 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30988 = figwheel.client.heads_up.display_exception.call(null,inst_30987);
var state_31041__$1 = state_31041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31041__$1,(21),inst_30988);
} else {
if((state_val_31042 === (37))){
var inst_31024 = (state_31041[(2)]);
var state_31041__$1 = state_31041;
var statearr_31085_31125 = state_31041__$1;
(statearr_31085_31125[(2)] = inst_31024);

(statearr_31085_31125[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (8))){
var inst_30963 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31041__$1 = state_31041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31041__$1,(11),inst_30963);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26624__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26624__auto____0 = (function (){
var statearr_31086 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31086[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26624__auto__);

(statearr_31086[(1)] = (1));

return statearr_31086;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26624__auto____1 = (function (state_31041){
while(true){
var ret_value__26625__auto__ = (function (){try{while(true){
var result__26626__auto__ = switch__26623__auto__.call(null,state_31041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26626__auto__;
}
break;
}
}catch (e31087){if((e31087 instanceof Object)){
var ex__26627__auto__ = e31087;
var statearr_31088_31126 = state_31041;
(statearr_31088_31126[(5)] = ex__26627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31127 = state_31041;
state_31041 = G__31127;
continue;
} else {
return ret_value__26625__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26624__auto__ = function(state_31041){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26624__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26624__auto____1.call(this,state_31041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26624__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26624__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26624__auto__;
})()
})();
var state__26720__auto__ = (function (){var statearr_31089 = f__26719__auto__.call(null);
(statearr_31089[(6)] = c__26718__auto__);

return statearr_31089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26720__auto__);
}));

return c__26718__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26718__auto___31156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26719__auto__ = (function (){var switch__26623__auto__ = (function (state_31142){
var state_val_31143 = (state_31142[(1)]);
if((state_val_31143 === (1))){
var state_31142__$1 = state_31142;
var statearr_31144_31157 = state_31142__$1;
(statearr_31144_31157[(2)] = null);

(statearr_31144_31157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (2))){
var state_31142__$1 = state_31142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31142__$1,(4),ch);
} else {
if((state_val_31143 === (3))){
var inst_31140 = (state_31142[(2)]);
var state_31142__$1 = state_31142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31142__$1,inst_31140);
} else {
if((state_val_31143 === (4))){
var inst_31130 = (state_31142[(7)]);
var inst_31130__$1 = (state_31142[(2)]);
var state_31142__$1 = (function (){var statearr_31145 = state_31142;
(statearr_31145[(7)] = inst_31130__$1);

return statearr_31145;
})();
if(cljs.core.truth_(inst_31130__$1)){
var statearr_31146_31158 = state_31142__$1;
(statearr_31146_31158[(1)] = (5));

} else {
var statearr_31147_31159 = state_31142__$1;
(statearr_31147_31159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (5))){
var inst_31130 = (state_31142[(7)]);
var inst_31132 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31130);
var state_31142__$1 = state_31142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31142__$1,(8),inst_31132);
} else {
if((state_val_31143 === (6))){
var state_31142__$1 = state_31142;
var statearr_31148_31160 = state_31142__$1;
(statearr_31148_31160[(2)] = null);

(statearr_31148_31160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (7))){
var inst_31138 = (state_31142[(2)]);
var state_31142__$1 = state_31142;
var statearr_31149_31161 = state_31142__$1;
(statearr_31149_31161[(2)] = inst_31138);

(statearr_31149_31161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (8))){
var inst_31134 = (state_31142[(2)]);
var state_31142__$1 = (function (){var statearr_31150 = state_31142;
(statearr_31150[(8)] = inst_31134);

return statearr_31150;
})();
var statearr_31151_31162 = state_31142__$1;
(statearr_31151_31162[(2)] = null);

(statearr_31151_31162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26624__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26624__auto____0 = (function (){
var statearr_31152 = [null,null,null,null,null,null,null,null,null];
(statearr_31152[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26624__auto__);

(statearr_31152[(1)] = (1));

return statearr_31152;
});
var figwheel$client$heads_up_plugin_$_state_machine__26624__auto____1 = (function (state_31142){
while(true){
var ret_value__26625__auto__ = (function (){try{while(true){
var result__26626__auto__ = switch__26623__auto__.call(null,state_31142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26626__auto__;
}
break;
}
}catch (e31153){if((e31153 instanceof Object)){
var ex__26627__auto__ = e31153;
var statearr_31154_31163 = state_31142;
(statearr_31154_31163[(5)] = ex__26627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31164 = state_31142;
state_31142 = G__31164;
continue;
} else {
return ret_value__26625__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26624__auto__ = function(state_31142){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26624__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26624__auto____1.call(this,state_31142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26624__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26624__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26624__auto__;
})()
})();
var state__26720__auto__ = (function (){var statearr_31155 = f__26719__auto__.call(null);
(statearr_31155[(6)] = c__26718__auto___31156);

return statearr_31155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26720__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26718__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26719__auto__ = (function (){var switch__26623__auto__ = (function (state_31170){
var state_val_31171 = (state_31170[(1)]);
if((state_val_31171 === (1))){
var inst_31165 = cljs.core.async.timeout.call(null,(3000));
var state_31170__$1 = state_31170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31170__$1,(2),inst_31165);
} else {
if((state_val_31171 === (2))){
var inst_31167 = (state_31170[(2)]);
var inst_31168 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31170__$1 = (function (){var statearr_31172 = state_31170;
(statearr_31172[(7)] = inst_31167);

return statearr_31172;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31170__$1,inst_31168);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26624__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26624__auto____0 = (function (){
var statearr_31173 = [null,null,null,null,null,null,null,null];
(statearr_31173[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26624__auto__);

(statearr_31173[(1)] = (1));

return statearr_31173;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26624__auto____1 = (function (state_31170){
while(true){
var ret_value__26625__auto__ = (function (){try{while(true){
var result__26626__auto__ = switch__26623__auto__.call(null,state_31170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26626__auto__;
}
break;
}
}catch (e31174){if((e31174 instanceof Object)){
var ex__26627__auto__ = e31174;
var statearr_31175_31177 = state_31170;
(statearr_31175_31177[(5)] = ex__26627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31178 = state_31170;
state_31170 = G__31178;
continue;
} else {
return ret_value__26625__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26624__auto__ = function(state_31170){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26624__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26624__auto____1.call(this,state_31170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26624__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26624__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26624__auto__;
})()
})();
var state__26720__auto__ = (function (){var statearr_31176 = f__26719__auto__.call(null);
(statearr_31176[(6)] = c__26718__auto__);

return statearr_31176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26720__auto__);
}));

return c__26718__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5753__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5753__auto__)){
var figwheel_version = temp__5753__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26718__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26719__auto__ = (function (){var switch__26623__auto__ = (function (state_31185){
var state_val_31186 = (state_31185[(1)]);
if((state_val_31186 === (1))){
var inst_31179 = cljs.core.async.timeout.call(null,(2000));
var state_31185__$1 = state_31185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31185__$1,(2),inst_31179);
} else {
if((state_val_31186 === (2))){
var inst_31181 = (state_31185[(2)]);
var inst_31182 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31183 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31182);
var state_31185__$1 = (function (){var statearr_31187 = state_31185;
(statearr_31187[(7)] = inst_31181);

return statearr_31187;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31185__$1,inst_31183);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26624__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26624__auto____0 = (function (){
var statearr_31188 = [null,null,null,null,null,null,null,null];
(statearr_31188[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26624__auto__);

(statearr_31188[(1)] = (1));

return statearr_31188;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26624__auto____1 = (function (state_31185){
while(true){
var ret_value__26625__auto__ = (function (){try{while(true){
var result__26626__auto__ = switch__26623__auto__.call(null,state_31185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26626__auto__;
}
break;
}
}catch (e31189){if((e31189 instanceof Object)){
var ex__26627__auto__ = e31189;
var statearr_31190_31192 = state_31185;
(statearr_31190_31192[(5)] = ex__26627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31193 = state_31185;
state_31185 = G__31193;
continue;
} else {
return ret_value__26625__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26624__auto__ = function(state_31185){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26624__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26624__auto____1.call(this,state_31185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26624__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26624__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26624__auto__;
})()
})();
var state__26720__auto__ = (function (){var statearr_31191 = f__26719__auto__.call(null);
(statearr_31191[(6)] = c__26718__auto__);

return statearr_31191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26720__auto__);
}));

return c__26718__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31194){
var map__31195 = p__31194;
var map__31195__$1 = (((((!((map__31195 == null))))?(((((map__31195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31195):map__31195);
var file = cljs.core.get.call(null,map__31195__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31195__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31195__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31197 = "";
var G__31197__$1 = (cljs.core.truth_(file)?[G__31197,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31197);
var G__31197__$2 = (cljs.core.truth_(line)?[G__31197__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31197__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__31197__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31197__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31198){
var map__31199 = p__31198;
var map__31199__$1 = (((((!((map__31199 == null))))?(((((map__31199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31199):map__31199);
var ed = map__31199__$1;
var exception_data = cljs.core.get.call(null,map__31199__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31199__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_31202 = (function (){var G__31201 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31201)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__31201;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_31202);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31203){
var map__31204 = p__31203;
var map__31204__$1 = (((((!((map__31204 == null))))?(((((map__31204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31204):map__31204);
var w = map__31204__$1;
var message = cljs.core.get.call(null,map__31204__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources\\public\\js\\out\\figwheel\\client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources\\public\\js\\out\\figwheel\\client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4115__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31206 = cljs.core.seq.call(null,plugins);
var chunk__31207 = null;
var count__31208 = (0);
var i__31209 = (0);
while(true){
if((i__31209 < count__31208)){
var vec__31216 = cljs.core._nth.call(null,chunk__31207,i__31209);
var k = cljs.core.nth.call(null,vec__31216,(0),null);
var plugin = cljs.core.nth.call(null,vec__31216,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31222 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31206,chunk__31207,count__31208,i__31209,pl_31222,vec__31216,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31222.call(null,msg_hist);
});})(seq__31206,chunk__31207,count__31208,i__31209,pl_31222,vec__31216,k,plugin))
);
} else {
}


var G__31223 = seq__31206;
var G__31224 = chunk__31207;
var G__31225 = count__31208;
var G__31226 = (i__31209 + (1));
seq__31206 = G__31223;
chunk__31207 = G__31224;
count__31208 = G__31225;
i__31209 = G__31226;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__31206);
if(temp__5753__auto__){
var seq__31206__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31206__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__31206__$1);
var G__31227 = cljs.core.chunk_rest.call(null,seq__31206__$1);
var G__31228 = c__4556__auto__;
var G__31229 = cljs.core.count.call(null,c__4556__auto__);
var G__31230 = (0);
seq__31206 = G__31227;
chunk__31207 = G__31228;
count__31208 = G__31229;
i__31209 = G__31230;
continue;
} else {
var vec__31219 = cljs.core.first.call(null,seq__31206__$1);
var k = cljs.core.nth.call(null,vec__31219,(0),null);
var plugin = cljs.core.nth.call(null,vec__31219,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31231 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31206,chunk__31207,count__31208,i__31209,pl_31231,vec__31219,k,plugin,seq__31206__$1,temp__5753__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31231.call(null,msg_hist);
});})(seq__31206,chunk__31207,count__31208,i__31209,pl_31231,vec__31219,k,plugin,seq__31206__$1,temp__5753__auto__))
);
} else {
}


var G__31232 = cljs.core.next.call(null,seq__31206__$1);
var G__31233 = null;
var G__31234 = (0);
var G__31235 = (0);
seq__31206 = G__31232;
chunk__31207 = G__31233;
count__31208 = G__31234;
i__31209 = G__31235;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__31237 = arguments.length;
switch (G__31237) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((((!((goog.dependencies_ == null)))) || ((((!((goog.debugLoader_ == null)))) && ((!((goog.debugLoader_.dependencies_ == null)))))))){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__31238_31243 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31239_31244 = null;
var count__31240_31245 = (0);
var i__31241_31246 = (0);
while(true){
if((i__31241_31246 < count__31240_31245)){
var msg_31247 = cljs.core._nth.call(null,chunk__31239_31244,i__31241_31246);
figwheel.client.socket.handle_incoming_message.call(null,msg_31247);


var G__31248 = seq__31238_31243;
var G__31249 = chunk__31239_31244;
var G__31250 = count__31240_31245;
var G__31251 = (i__31241_31246 + (1));
seq__31238_31243 = G__31248;
chunk__31239_31244 = G__31249;
count__31240_31245 = G__31250;
i__31241_31246 = G__31251;
continue;
} else {
var temp__5753__auto___31252 = cljs.core.seq.call(null,seq__31238_31243);
if(temp__5753__auto___31252){
var seq__31238_31253__$1 = temp__5753__auto___31252;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31238_31253__$1)){
var c__4556__auto___31254 = cljs.core.chunk_first.call(null,seq__31238_31253__$1);
var G__31255 = cljs.core.chunk_rest.call(null,seq__31238_31253__$1);
var G__31256 = c__4556__auto___31254;
var G__31257 = cljs.core.count.call(null,c__4556__auto___31254);
var G__31258 = (0);
seq__31238_31243 = G__31255;
chunk__31239_31244 = G__31256;
count__31240_31245 = G__31257;
i__31241_31246 = G__31258;
continue;
} else {
var msg_31259 = cljs.core.first.call(null,seq__31238_31253__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31259);


var G__31260 = cljs.core.next.call(null,seq__31238_31253__$1);
var G__31261 = null;
var G__31262 = (0);
var G__31263 = (0);
seq__31238_31243 = G__31260;
chunk__31239_31244 = G__31261;
count__31240_31245 = G__31262;
i__31241_31246 = G__31263;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
} else {
return null;
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31268 = arguments.length;
var i__4737__auto___31269 = (0);
while(true){
if((i__4737__auto___31269 < len__4736__auto___31268)){
args__4742__auto__.push((arguments[i__4737__auto___31269]));

var G__31270 = (i__4737__auto___31269 + (1));
i__4737__auto___31269 = G__31270;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31265){
var map__31266 = p__31265;
var map__31266__$1 = (((((!((map__31266 == null))))?(((((map__31266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31266):map__31266);
var opts = map__31266__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31264){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31264));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31271){if((e31271 instanceof Error)){
var e = e31271;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31271;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__31272){
var map__31273 = p__31272;
var map__31273__$1 = (((((!((map__31273 == null))))?(((((map__31273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31273):map__31273);
var msg_name = cljs.core.get.call(null,map__31273__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1651858393221
