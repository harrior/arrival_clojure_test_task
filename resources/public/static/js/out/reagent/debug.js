// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__21667__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21667 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21668__i = 0, G__21668__a = new Array(arguments.length -  0);
while (G__21668__i < G__21668__a.length) {G__21668__a[G__21668__i] = arguments[G__21668__i + 0]; ++G__21668__i;}
  args = new cljs.core.IndexedSeq(G__21668__a,0,null);
} 
return G__21667__delegate.call(this,args);};
G__21667.cljs$lang$maxFixedArity = 0;
G__21667.cljs$lang$applyTo = (function (arglist__21669){
var args = cljs.core.seq(arglist__21669);
return G__21667__delegate(args);
});
G__21667.cljs$core$IFn$_invoke$arity$variadic = G__21667__delegate;
return G__21667;
})()
);

(o.error = (function() { 
var G__21670__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21670 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21671__i = 0, G__21671__a = new Array(arguments.length -  0);
while (G__21671__i < G__21671__a.length) {G__21671__a[G__21671__i] = arguments[G__21671__i + 0]; ++G__21671__i;}
  args = new cljs.core.IndexedSeq(G__21671__a,0,null);
} 
return G__21670__delegate.call(this,args);};
G__21670.cljs$lang$maxFixedArity = 0;
G__21670.cljs$lang$applyTo = (function (arglist__21672){
var args = cljs.core.seq(arglist__21672);
return G__21670__delegate(args);
});
G__21670.cljs$core$IFn$_invoke$arity$variadic = G__21670__delegate;
return G__21670;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1651858376428
