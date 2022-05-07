// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30459){
var map__30460 = p__30459;
var map__30460__$1 = (((((!((map__30460 == null))))?(((((map__30460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30460):map__30460);
var m = map__30460__$1;
var n = cljs.core.get.call(null,map__30460__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30460__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30462_30494 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30463_30495 = null;
var count__30464_30496 = (0);
var i__30465_30497 = (0);
while(true){
if((i__30465_30497 < count__30464_30496)){
var f_30498 = cljs.core._nth.call(null,chunk__30463_30495,i__30465_30497);
cljs.core.println.call(null,"  ",f_30498);


var G__30499 = seq__30462_30494;
var G__30500 = chunk__30463_30495;
var G__30501 = count__30464_30496;
var G__30502 = (i__30465_30497 + (1));
seq__30462_30494 = G__30499;
chunk__30463_30495 = G__30500;
count__30464_30496 = G__30501;
i__30465_30497 = G__30502;
continue;
} else {
var temp__5753__auto___30503 = cljs.core.seq.call(null,seq__30462_30494);
if(temp__5753__auto___30503){
var seq__30462_30504__$1 = temp__5753__auto___30503;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30462_30504__$1)){
var c__4556__auto___30505 = cljs.core.chunk_first.call(null,seq__30462_30504__$1);
var G__30506 = cljs.core.chunk_rest.call(null,seq__30462_30504__$1);
var G__30507 = c__4556__auto___30505;
var G__30508 = cljs.core.count.call(null,c__4556__auto___30505);
var G__30509 = (0);
seq__30462_30494 = G__30506;
chunk__30463_30495 = G__30507;
count__30464_30496 = G__30508;
i__30465_30497 = G__30509;
continue;
} else {
var f_30510 = cljs.core.first.call(null,seq__30462_30504__$1);
cljs.core.println.call(null,"  ",f_30510);


var G__30511 = cljs.core.next.call(null,seq__30462_30504__$1);
var G__30512 = null;
var G__30513 = (0);
var G__30514 = (0);
seq__30462_30494 = G__30511;
chunk__30463_30495 = G__30512;
count__30464_30496 = G__30513;
i__30465_30497 = G__30514;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30515 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30515);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30515)))?cljs.core.second.call(null,arglists_30515):arglists_30515));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30466_30516 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30467_30517 = null;
var count__30468_30518 = (0);
var i__30469_30519 = (0);
while(true){
if((i__30469_30519 < count__30468_30518)){
var vec__30480_30520 = cljs.core._nth.call(null,chunk__30467_30517,i__30469_30519);
var name_30521 = cljs.core.nth.call(null,vec__30480_30520,(0),null);
var map__30483_30522 = cljs.core.nth.call(null,vec__30480_30520,(1),null);
var map__30483_30523__$1 = (((((!((map__30483_30522 == null))))?(((((map__30483_30522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30483_30522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30483_30522):map__30483_30522);
var doc_30524 = cljs.core.get.call(null,map__30483_30523__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30525 = cljs.core.get.call(null,map__30483_30523__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30521);

cljs.core.println.call(null," ",arglists_30525);

if(cljs.core.truth_(doc_30524)){
cljs.core.println.call(null," ",doc_30524);
} else {
}


var G__30526 = seq__30466_30516;
var G__30527 = chunk__30467_30517;
var G__30528 = count__30468_30518;
var G__30529 = (i__30469_30519 + (1));
seq__30466_30516 = G__30526;
chunk__30467_30517 = G__30527;
count__30468_30518 = G__30528;
i__30469_30519 = G__30529;
continue;
} else {
var temp__5753__auto___30530 = cljs.core.seq.call(null,seq__30466_30516);
if(temp__5753__auto___30530){
var seq__30466_30531__$1 = temp__5753__auto___30530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30466_30531__$1)){
var c__4556__auto___30532 = cljs.core.chunk_first.call(null,seq__30466_30531__$1);
var G__30533 = cljs.core.chunk_rest.call(null,seq__30466_30531__$1);
var G__30534 = c__4556__auto___30532;
var G__30535 = cljs.core.count.call(null,c__4556__auto___30532);
var G__30536 = (0);
seq__30466_30516 = G__30533;
chunk__30467_30517 = G__30534;
count__30468_30518 = G__30535;
i__30469_30519 = G__30536;
continue;
} else {
var vec__30485_30537 = cljs.core.first.call(null,seq__30466_30531__$1);
var name_30538 = cljs.core.nth.call(null,vec__30485_30537,(0),null);
var map__30488_30539 = cljs.core.nth.call(null,vec__30485_30537,(1),null);
var map__30488_30540__$1 = (((((!((map__30488_30539 == null))))?(((((map__30488_30539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30488_30539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30488_30539):map__30488_30539);
var doc_30541 = cljs.core.get.call(null,map__30488_30540__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30542 = cljs.core.get.call(null,map__30488_30540__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30538);

cljs.core.println.call(null," ",arglists_30542);

if(cljs.core.truth_(doc_30541)){
cljs.core.println.call(null," ",doc_30541);
} else {
}


var G__30543 = cljs.core.next.call(null,seq__30466_30531__$1);
var G__30544 = null;
var G__30545 = (0);
var G__30546 = (0);
seq__30466_30516 = G__30543;
chunk__30467_30517 = G__30544;
count__30468_30518 = G__30545;
i__30469_30519 = G__30546;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.call(null,"Spec");

var seq__30490 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30491 = null;
var count__30492 = (0);
var i__30493 = (0);
while(true){
if((i__30493 < count__30492)){
var role = cljs.core._nth.call(null,chunk__30491,i__30493);
var temp__5753__auto___30547__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___30547__$1)){
var spec_30548 = temp__5753__auto___30547__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30548));
} else {
}


var G__30549 = seq__30490;
var G__30550 = chunk__30491;
var G__30551 = count__30492;
var G__30552 = (i__30493 + (1));
seq__30490 = G__30549;
chunk__30491 = G__30550;
count__30492 = G__30551;
i__30493 = G__30552;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq.call(null,seq__30490);
if(temp__5753__auto____$1){
var seq__30490__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30490__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__30490__$1);
var G__30553 = cljs.core.chunk_rest.call(null,seq__30490__$1);
var G__30554 = c__4556__auto__;
var G__30555 = cljs.core.count.call(null,c__4556__auto__);
var G__30556 = (0);
seq__30490 = G__30553;
chunk__30491 = G__30554;
count__30492 = G__30555;
i__30493 = G__30556;
continue;
} else {
var role = cljs.core.first.call(null,seq__30490__$1);
var temp__5753__auto___30557__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___30557__$2)){
var spec_30558 = temp__5753__auto___30557__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30558));
} else {
}


var G__30559 = cljs.core.next.call(null,seq__30490__$1);
var G__30560 = null;
var G__30561 = (0);
var G__30562 = (0);
seq__30490 = G__30559;
chunk__30491 = G__30560;
count__30492 = G__30561;
i__30493 = G__30562;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__30563 = cljs.core.conj.call(null,via,t);
var G__30564 = cljs.core.ex_cause.call(null,t);
via = G__30563;
t = G__30564;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__30567 = datafied_throwable;
var map__30567__$1 = (((((!((map__30567 == null))))?(((((map__30567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30567):map__30567);
var via = cljs.core.get.call(null,map__30567__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__30567__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__30567__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__30568 = cljs.core.last.call(null,via);
var map__30568__$1 = (((((!((map__30568 == null))))?(((((map__30568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30568):map__30568);
var type = cljs.core.get.call(null,map__30568__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__30568__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__30568__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__30569 = data;
var map__30569__$1 = (((((!((map__30569 == null))))?(((((map__30569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30569):map__30569);
var problems = cljs.core.get.call(null,map__30569__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__30569__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__30569__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__30570 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__30570__$1 = (((((!((map__30570 == null))))?(((((map__30570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30570):map__30570);
var top_data = map__30570__$1;
var source = cljs.core.get.call(null,map__30570__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__30575 = phase;
var G__30575__$1 = (((G__30575 instanceof cljs.core.Keyword))?G__30575.fqn:null);
switch (G__30575__$1) {
case "read-source":
var map__30576 = data;
var map__30576__$1 = (((((!((map__30576 == null))))?(((((map__30576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30576):map__30576);
var line = cljs.core.get.call(null,map__30576__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__30576__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__30578 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__30578__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__30578,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30578);
var G__30578__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__30578__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30578__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__30578__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30578__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__30579 = top_data;
var G__30579__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__30579,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30579);
var G__30579__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__30579__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30579__$1);
var G__30579__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__30579__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30579__$2);
var G__30579__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__30579__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30579__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__30579__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30579__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__30580 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__30580,(0),null);
var method = cljs.core.nth.call(null,vec__30580,(1),null);
var file = cljs.core.nth.call(null,vec__30580,(2),null);
var line = cljs.core.nth.call(null,vec__30580,(3),null);
var G__30583 = top_data;
var G__30583__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__30583,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__30583);
var G__30583__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__30583__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__30583__$1);
var G__30583__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__30583__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__30583__$2);
var G__30583__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__30583__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30583__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__30583__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30583__$4;
}

break;
case "execution":
var vec__30584 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__30584,(0),null);
var method = cljs.core.nth.call(null,vec__30584,(1),null);
var file = cljs.core.nth.call(null,vec__30584,(2),null);
var line = cljs.core.nth.call(null,vec__30584,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__30566_SHARP_){
var or__4126__auto__ = (p1__30566_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__30566_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__30587 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__30587__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__30587,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__30587);
var G__30587__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__30587__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30587__$1);
var G__30587__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__30587__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__30587__$2);
var G__30587__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__30587__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__30587__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__30587__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30587__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30575__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__30591){
var map__30592 = p__30591;
var map__30592__$1 = (((((!((map__30592 == null))))?(((((map__30592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30592):map__30592);
var triage_data = map__30592__$1;
var phase = cljs.core.get.call(null,map__30592__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__30592__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__30592__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__30592__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__30592__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__30592__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__30592__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__30592__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__30594 = phase;
var G__30594__$1 = (((G__30594 instanceof cljs.core.Keyword))?G__30594.fqn:null);
switch (G__30594__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30595_30604 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30596_30605 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30597_30606 = true;
var _STAR_print_fn_STAR__temp_val__30598_30607 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30597_30606);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30598_30607);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__30589_SHARP_){
return cljs.core.dissoc.call(null,p1__30589_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30596_30605);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30595_30604);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30599_30608 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30600_30609 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30601_30610 = true;
var _STAR_print_fn_STAR__temp_val__30602_30611 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30601_30610);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30602_30611);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__30590_SHARP_){
return cljs.core.dissoc.call(null,p1__30590_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30600_30609);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30599_30608);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30594__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1651858392241
