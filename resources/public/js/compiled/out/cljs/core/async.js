// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__26514 = arguments.length;
switch (G__26514) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26515 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26515 = (function (f,blockable,meta26516){
this.f = f;
this.blockable = blockable;
this.meta26516 = meta26516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26517,meta26516__$1){
var self__ = this;
var _26517__$1 = this;
return (new cljs.core.async.t_cljs$core$async26515(self__.f,self__.blockable,meta26516__$1));
}));

(cljs.core.async.t_cljs$core$async26515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26517){
var self__ = this;
var _26517__$1 = this;
return self__.meta26516;
}));

(cljs.core.async.t_cljs$core$async26515.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26515.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26515.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async26515.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async26515.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26516","meta26516",-1715784209,null)], null);
}));

(cljs.core.async.t_cljs$core$async26515.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26515.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26515");

(cljs.core.async.t_cljs$core$async26515.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26515");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26515.
 */
cljs.core.async.__GT_t_cljs$core$async26515 = (function cljs$core$async$__GT_t_cljs$core$async26515(f__$1,blockable__$1,meta26516){
return (new cljs.core.async.t_cljs$core$async26515(f__$1,blockable__$1,meta26516));
});

}

return (new cljs.core.async.t_cljs$core$async26515(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__26521 = arguments.length;
switch (G__26521) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__26524 = arguments.length;
switch (G__26524) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__26527 = arguments.length;
switch (G__26527) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26529 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26529);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_26529);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__26531 = arguments.length;
switch (G__26531) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___26533 = n;
var x_26534 = (0);
while(true){
if((x_26534 < n__4613__auto___26533)){
(a[x_26534] = x_26534);

var G__26535 = (x_26534 + (1));
x_26534 = G__26535;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26536 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26536 = (function (flag,meta26537){
this.flag = flag;
this.meta26537 = meta26537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26538,meta26537__$1){
var self__ = this;
var _26538__$1 = this;
return (new cljs.core.async.t_cljs$core$async26536(self__.flag,meta26537__$1));
}));

(cljs.core.async.t_cljs$core$async26536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26538){
var self__ = this;
var _26538__$1 = this;
return self__.meta26537;
}));

(cljs.core.async.t_cljs$core$async26536.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26536.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async26536.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26536.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async26536.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26537","meta26537",-951118399,null)], null);
}));

(cljs.core.async.t_cljs$core$async26536.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26536.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26536");

(cljs.core.async.t_cljs$core$async26536.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26536");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26536.
 */
cljs.core.async.__GT_t_cljs$core$async26536 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26536(flag__$1,meta26537){
return (new cljs.core.async.t_cljs$core$async26536(flag__$1,meta26537));
});

}

return (new cljs.core.async.t_cljs$core$async26536(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26539 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26539 = (function (flag,cb,meta26540){
this.flag = flag;
this.cb = cb;
this.meta26540 = meta26540;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26541,meta26540__$1){
var self__ = this;
var _26541__$1 = this;
return (new cljs.core.async.t_cljs$core$async26539(self__.flag,self__.cb,meta26540__$1));
}));

(cljs.core.async.t_cljs$core$async26539.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26541){
var self__ = this;
var _26541__$1 = this;
return self__.meta26540;
}));

(cljs.core.async.t_cljs$core$async26539.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26539.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async26539.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26539.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async26539.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26540","meta26540",-2140756929,null)], null);
}));

(cljs.core.async.t_cljs$core$async26539.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26539.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26539");

(cljs.core.async.t_cljs$core$async26539.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26539");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26539.
 */
cljs.core.async.__GT_t_cljs$core$async26539 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26539(flag__$1,cb__$1,meta26540){
return (new cljs.core.async.t_cljs$core$async26539(flag__$1,cb__$1,meta26540));
});

}

return (new cljs.core.async.t_cljs$core$async26539(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26542_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26542_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26543_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26543_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26544 = (i + (1));
i = G__26544;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26550 = arguments.length;
var i__4737__auto___26551 = (0);
while(true){
if((i__4737__auto___26551 < len__4736__auto___26550)){
args__4742__auto__.push((arguments[i__4737__auto___26551]));

var G__26552 = (i__4737__auto___26551 + (1));
i__4737__auto___26551 = G__26552;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26547){
var map__26548 = p__26547;
var map__26548__$1 = (((((!((map__26548 == null))))?(((((map__26548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26548):map__26548);
var opts = map__26548__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26545){
var G__26546 = cljs.core.first.call(null,seq26545);
var seq26545__$1 = cljs.core.next.call(null,seq26545);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26546,seq26545__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__26554 = arguments.length;
switch (G__26554) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26454__auto___26600 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26455__auto__ = (function (){var switch__26359__auto__ = (function (state_26578){
var state_val_26579 = (state_26578[(1)]);
if((state_val_26579 === (7))){
var inst_26574 = (state_26578[(2)]);
var state_26578__$1 = state_26578;
var statearr_26580_26601 = state_26578__$1;
(statearr_26580_26601[(2)] = inst_26574);

(statearr_26580_26601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26579 === (1))){
var state_26578__$1 = state_26578;
var statearr_26581_26602 = state_26578__$1;
(statearr_26581_26602[(2)] = null);

(statearr_26581_26602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26579 === (4))){
var inst_26557 = (state_26578[(7)]);
var inst_26557__$1 = (state_26578[(2)]);
var inst_26558 = (inst_26557__$1 == null);
var state_26578__$1 = (function (){var statearr_26582 = state_26578;
(statearr_26582[(7)] = inst_26557__$1);

return statearr_26582;
})();
if(cljs.core.truth_(inst_26558)){
var statearr_26583_26603 = state_26578__$1;
(statearr_26583_26603[(1)] = (5));

} else {
var statearr_26584_26604 = state_26578__$1;
(statearr_26584_26604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26579 === (13))){
var state_26578__$1 = state_26578;
var statearr_26585_26605 = state_26578__$1;
(statearr_26585_26605[(2)] = null);

(statearr_26585_26605[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26579 === (6))){
var inst_26557 = (state_26578[(7)]);
var state_26578__$1 = state_26578;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26578__$1,(11),to,inst_26557);
} else {
if((state_val_26579 === (3))){
var inst_26576 = (state_26578[(2)]);
var state_26578__$1 = state_26578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26578__$1,inst_26576);
} else {
if((state_val_26579 === (12))){
var state_26578__$1 = state_26578;
var statearr_26586_26606 = state_26578__$1;
(statearr_26586_26606[(2)] = null);

(statearr_26586_26606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26579 === (2))){
var state_26578__$1 = state_26578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26578__$1,(4),from);
} else {
if((state_val_26579 === (11))){
var inst_26567 = (state_26578[(2)]);
var state_26578__$1 = state_26578;
if(cljs.core.truth_(inst_26567)){
var statearr_26587_26607 = state_26578__$1;
(statearr_26587_26607[(1)] = (12));

} else {
var statearr_26588_26608 = state_26578__$1;
(statearr_26588_26608[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26579 === (9))){
var state_26578__$1 = state_26578;
var statearr_26589_26609 = state_26578__$1;
(statearr_26589_26609[(2)] = null);

(statearr_26589_26609[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26579 === (5))){
var state_26578__$1 = state_26578;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26590_26610 = state_26578__$1;
(statearr_26590_26610[(1)] = (8));

} else {
var statearr_26591_26611 = state_26578__$1;
(statearr_26591_26611[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26579 === (14))){
var inst_26572 = (state_26578[(2)]);
var state_26578__$1 = state_26578;
var statearr_26592_26612 = state_26578__$1;
(statearr_26592_26612[(2)] = inst_26572);

(statearr_26592_26612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26579 === (10))){
var inst_26564 = (state_26578[(2)]);
var state_26578__$1 = state_26578;
var statearr_26593_26613 = state_26578__$1;
(statearr_26593_26613[(2)] = inst_26564);

(statearr_26593_26613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26579 === (8))){
var inst_26561 = cljs.core.async.close_BANG_.call(null,to);
var state_26578__$1 = state_26578;
var statearr_26594_26614 = state_26578__$1;
(statearr_26594_26614[(2)] = inst_26561);

(statearr_26594_26614[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__26360__auto__ = null;
var cljs$core$async$state_machine__26360__auto____0 = (function (){
var statearr_26595 = [null,null,null,null,null,null,null,null];
(statearr_26595[(0)] = cljs$core$async$state_machine__26360__auto__);

(statearr_26595[(1)] = (1));

return statearr_26595;
});
var cljs$core$async$state_machine__26360__auto____1 = (function (state_26578){
while(true){
var ret_value__26361__auto__ = (function (){try{while(true){
var result__26362__auto__ = switch__26359__auto__.call(null,state_26578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26362__auto__;
}
break;
}
}catch (e26596){if((e26596 instanceof Object)){
var ex__26363__auto__ = e26596;
var statearr_26597_26615 = state_26578;
(statearr_26597_26615[(5)] = ex__26363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26616 = state_26578;
state_26578 = G__26616;
continue;
} else {
return ret_value__26361__auto__;
}
break;
}
});
cljs$core$async$state_machine__26360__auto__ = function(state_26578){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26360__auto____1.call(this,state_26578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26360__auto____0;
cljs$core$async$state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26360__auto____1;
return cljs$core$async$state_machine__26360__auto__;
})()
})();
var state__26456__auto__ = (function (){var statearr_26598 = f__26455__auto__.call(null);
(statearr_26598[(6)] = c__26454__auto___26600);

return statearr_26598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26456__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__26617){
var vec__26618 = p__26617;
var v = cljs.core.nth.call(null,vec__26618,(0),null);
var p = cljs.core.nth.call(null,vec__26618,(1),null);
var job = vec__26618;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26454__auto___26789 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26455__auto__ = (function (){var switch__26359__auto__ = (function (state_26625){
var state_val_26626 = (state_26625[(1)]);
if((state_val_26626 === (1))){
var state_26625__$1 = state_26625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26625__$1,(2),res,v);
} else {
if((state_val_26626 === (2))){
var inst_26622 = (state_26625[(2)]);
var inst_26623 = cljs.core.async.close_BANG_.call(null,res);
var state_26625__$1 = (function (){var statearr_26627 = state_26625;
(statearr_26627[(7)] = inst_26622);

return statearr_26627;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26625__$1,inst_26623);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26360__auto____0 = (function (){
var statearr_26628 = [null,null,null,null,null,null,null,null];
(statearr_26628[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26360__auto__);

(statearr_26628[(1)] = (1));

return statearr_26628;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26360__auto____1 = (function (state_26625){
while(true){
var ret_value__26361__auto__ = (function (){try{while(true){
var result__26362__auto__ = switch__26359__auto__.call(null,state_26625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26362__auto__;
}
break;
}
}catch (e26629){if((e26629 instanceof Object)){
var ex__26363__auto__ = e26629;
var statearr_26630_26790 = state_26625;
(statearr_26630_26790[(5)] = ex__26363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26791 = state_26625;
state_26625 = G__26791;
continue;
} else {
return ret_value__26361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26360__auto__ = function(state_26625){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26360__auto____1.call(this,state_26625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26360__auto__;
})()
})();
var state__26456__auto__ = (function (){var statearr_26631 = f__26455__auto__.call(null);
(statearr_26631[(6)] = c__26454__auto___26789);

return statearr_26631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26456__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__26632){
var vec__26633 = p__26632;
var v = cljs.core.nth.call(null,vec__26633,(0),null);
var p = cljs.core.nth.call(null,vec__26633,(1),null);
var job = vec__26633;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___26792 = n;
var __26793 = (0);
while(true){
if((__26793 < n__4613__auto___26792)){
var G__26636_26794 = type;
var G__26636_26795__$1 = (((G__26636_26794 instanceof cljs.core.Keyword))?G__26636_26794.fqn:null);
switch (G__26636_26795__$1) {
case "compute":
var c__26454__auto___26797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26793,c__26454__auto___26797,G__26636_26794,G__26636_26795__$1,n__4613__auto___26792,jobs,results,process,async){
return (function (){
var f__26455__auto__ = (function (){var switch__26359__auto__ = ((function (__26793,c__26454__auto___26797,G__26636_26794,G__26636_26795__$1,n__4613__auto___26792,jobs,results,process,async){
return (function (state_26649){
var state_val_26650 = (state_26649[(1)]);
if((state_val_26650 === (1))){
var state_26649__$1 = state_26649;
var statearr_26651_26798 = state_26649__$1;
(statearr_26651_26798[(2)] = null);

(statearr_26651_26798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26650 === (2))){
var state_26649__$1 = state_26649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26649__$1,(4),jobs);
} else {
if((state_val_26650 === (3))){
var inst_26647 = (state_26649[(2)]);
var state_26649__$1 = state_26649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26649__$1,inst_26647);
} else {
if((state_val_26650 === (4))){
var inst_26639 = (state_26649[(2)]);
var inst_26640 = process.call(null,inst_26639);
var state_26649__$1 = state_26649;
if(cljs.core.truth_(inst_26640)){
var statearr_26652_26799 = state_26649__$1;
(statearr_26652_26799[(1)] = (5));

} else {
var statearr_26653_26800 = state_26649__$1;
(statearr_26653_26800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26650 === (5))){
var state_26649__$1 = state_26649;
var statearr_26654_26801 = state_26649__$1;
(statearr_26654_26801[(2)] = null);

(statearr_26654_26801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26650 === (6))){
var state_26649__$1 = state_26649;
var statearr_26655_26802 = state_26649__$1;
(statearr_26655_26802[(2)] = null);

(statearr_26655_26802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26650 === (7))){
var inst_26645 = (state_26649[(2)]);
var state_26649__$1 = state_26649;
var statearr_26656_26803 = state_26649__$1;
(statearr_26656_26803[(2)] = inst_26645);

(statearr_26656_26803[(1)] = (3));


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
});})(__26793,c__26454__auto___26797,G__26636_26794,G__26636_26795__$1,n__4613__auto___26792,jobs,results,process,async))
;
return ((function (__26793,switch__26359__auto__,c__26454__auto___26797,G__26636_26794,G__26636_26795__$1,n__4613__auto___26792,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26360__auto____0 = (function (){
var statearr_26657 = [null,null,null,null,null,null,null];
(statearr_26657[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26360__auto__);

(statearr_26657[(1)] = (1));

return statearr_26657;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26360__auto____1 = (function (state_26649){
while(true){
var ret_value__26361__auto__ = (function (){try{while(true){
var result__26362__auto__ = switch__26359__auto__.call(null,state_26649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26362__auto__;
}
break;
}
}catch (e26658){if((e26658 instanceof Object)){
var ex__26363__auto__ = e26658;
var statearr_26659_26804 = state_26649;
(statearr_26659_26804[(5)] = ex__26363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26805 = state_26649;
state_26649 = G__26805;
continue;
} else {
return ret_value__26361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26360__auto__ = function(state_26649){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26360__auto____1.call(this,state_26649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26360__auto__;
})()
;})(__26793,switch__26359__auto__,c__26454__auto___26797,G__26636_26794,G__26636_26795__$1,n__4613__auto___26792,jobs,results,process,async))
})();
var state__26456__auto__ = (function (){var statearr_26660 = f__26455__auto__.call(null);
(statearr_26660[(6)] = c__26454__auto___26797);

return statearr_26660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26456__auto__);
});})(__26793,c__26454__auto___26797,G__26636_26794,G__26636_26795__$1,n__4613__auto___26792,jobs,results,process,async))
);


break;
case "async":
var c__26454__auto___26806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26793,c__26454__auto___26806,G__26636_26794,G__26636_26795__$1,n__4613__auto___26792,jobs,results,process,async){
return (function (){
var f__26455__auto__ = (function (){var switch__26359__auto__ = ((function (__26793,c__26454__auto___26806,G__26636_26794,G__26636_26795__$1,n__4613__auto___26792,jobs,results,process,async){
return (function (state_26673){
var state_val_26674 = (state_26673[(1)]);
if((state_val_26674 === (1))){
var state_26673__$1 = state_26673;
var statearr_26675_26807 = state_26673__$1;
(statearr_26675_26807[(2)] = null);

(statearr_26675_26807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (2))){
var state_26673__$1 = state_26673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26673__$1,(4),jobs);
} else {
if((state_val_26674 === (3))){
var inst_26671 = (state_26673[(2)]);
var state_26673__$1 = state_26673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26673__$1,inst_26671);
} else {
if((state_val_26674 === (4))){
var inst_26663 = (state_26673[(2)]);
var inst_26664 = async.call(null,inst_26663);
var state_26673__$1 = state_26673;
if(cljs.core.truth_(inst_26664)){
var statearr_26676_26808 = state_26673__$1;
(statearr_26676_26808[(1)] = (5));

} else {
var statearr_26677_26809 = state_26673__$1;
(statearr_26677_26809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (5))){
var state_26673__$1 = state_26673;
var statearr_26678_26810 = state_26673__$1;
(statearr_26678_26810[(2)] = null);

(statearr_26678_26810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (6))){
var state_26673__$1 = state_26673;
var statearr_26679_26811 = state_26673__$1;
(statearr_26679_26811[(2)] = null);

(statearr_26679_26811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (7))){
var inst_26669 = (state_26673[(2)]);
var state_26673__$1 = state_26673;
var statearr_26680_26812 = state_26673__$1;
(statearr_26680_26812[(2)] = inst_26669);

(statearr_26680_26812[(1)] = (3));


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
});})(__26793,c__26454__auto___26806,G__26636_26794,G__26636_26795__$1,n__4613__auto___26792,jobs,results,process,async))
;
return ((function (__26793,switch__26359__auto__,c__26454__auto___26806,G__26636_26794,G__26636_26795__$1,n__4613__auto___26792,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26360__auto____0 = (function (){
var statearr_26681 = [null,null,null,null,null,null,null];
(statearr_26681[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26360__auto__);

(statearr_26681[(1)] = (1));

return statearr_26681;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26360__auto____1 = (function (state_26673){
while(true){
var ret_value__26361__auto__ = (function (){try{while(true){
var result__26362__auto__ = switch__26359__auto__.call(null,state_26673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26362__auto__;
}
break;
}
}catch (e26682){if((e26682 instanceof Object)){
var ex__26363__auto__ = e26682;
var statearr_26683_26813 = state_26673;
(statearr_26683_26813[(5)] = ex__26363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26814 = state_26673;
state_26673 = G__26814;
continue;
} else {
return ret_value__26361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26360__auto__ = function(state_26673){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26360__auto____1.call(this,state_26673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26360__auto__;
})()
;})(__26793,switch__26359__auto__,c__26454__auto___26806,G__26636_26794,G__26636_26795__$1,n__4613__auto___26792,jobs,results,process,async))
})();
var state__26456__auto__ = (function (){var statearr_26684 = f__26455__auto__.call(null);
(statearr_26684[(6)] = c__26454__auto___26806);

return statearr_26684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26456__auto__);
});})(__26793,c__26454__auto___26806,G__26636_26794,G__26636_26795__$1,n__4613__auto___26792,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26636_26795__$1)].join('')));

}

var G__26815 = (__26793 + (1));
__26793 = G__26815;
continue;
} else {
}
break;
}

var c__26454__auto___26816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26455__auto__ = (function (){var switch__26359__auto__ = (function (state_26706){
var state_val_26707 = (state_26706[(1)]);
if((state_val_26707 === (7))){
var inst_26702 = (state_26706[(2)]);
var state_26706__$1 = state_26706;
var statearr_26708_26817 = state_26706__$1;
(statearr_26708_26817[(2)] = inst_26702);

(statearr_26708_26817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26707 === (1))){
var state_26706__$1 = state_26706;
var statearr_26709_26818 = state_26706__$1;
(statearr_26709_26818[(2)] = null);

(statearr_26709_26818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26707 === (4))){
var inst_26687 = (state_26706[(7)]);
var inst_26687__$1 = (state_26706[(2)]);
var inst_26688 = (inst_26687__$1 == null);
var state_26706__$1 = (function (){var statearr_26710 = state_26706;
(statearr_26710[(7)] = inst_26687__$1);

return statearr_26710;
})();
if(cljs.core.truth_(inst_26688)){
var statearr_26711_26819 = state_26706__$1;
(statearr_26711_26819[(1)] = (5));

} else {
var statearr_26712_26820 = state_26706__$1;
(statearr_26712_26820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26707 === (6))){
var inst_26692 = (state_26706[(8)]);
var inst_26687 = (state_26706[(7)]);
var inst_26692__$1 = cljs.core.async.chan.call(null,(1));
var inst_26693 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26694 = [inst_26687,inst_26692__$1];
var inst_26695 = (new cljs.core.PersistentVector(null,2,(5),inst_26693,inst_26694,null));
var state_26706__$1 = (function (){var statearr_26713 = state_26706;
(statearr_26713[(8)] = inst_26692__$1);

return statearr_26713;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26706__$1,(8),jobs,inst_26695);
} else {
if((state_val_26707 === (3))){
var inst_26704 = (state_26706[(2)]);
var state_26706__$1 = state_26706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26706__$1,inst_26704);
} else {
if((state_val_26707 === (2))){
var state_26706__$1 = state_26706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26706__$1,(4),from);
} else {
if((state_val_26707 === (9))){
var inst_26699 = (state_26706[(2)]);
var state_26706__$1 = (function (){var statearr_26714 = state_26706;
(statearr_26714[(9)] = inst_26699);

return statearr_26714;
})();
var statearr_26715_26821 = state_26706__$1;
(statearr_26715_26821[(2)] = null);

(statearr_26715_26821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26707 === (5))){
var inst_26690 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26706__$1 = state_26706;
var statearr_26716_26822 = state_26706__$1;
(statearr_26716_26822[(2)] = inst_26690);

(statearr_26716_26822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26707 === (8))){
var inst_26692 = (state_26706[(8)]);
var inst_26697 = (state_26706[(2)]);
var state_26706__$1 = (function (){var statearr_26717 = state_26706;
(statearr_26717[(10)] = inst_26697);

return statearr_26717;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26706__$1,(9),results,inst_26692);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26360__auto____0 = (function (){
var statearr_26718 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26718[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26360__auto__);

(statearr_26718[(1)] = (1));

return statearr_26718;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26360__auto____1 = (function (state_26706){
while(true){
var ret_value__26361__auto__ = (function (){try{while(true){
var result__26362__auto__ = switch__26359__auto__.call(null,state_26706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26362__auto__;
}
break;
}
}catch (e26719){if((e26719 instanceof Object)){
var ex__26363__auto__ = e26719;
var statearr_26720_26823 = state_26706;
(statearr_26720_26823[(5)] = ex__26363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26824 = state_26706;
state_26706 = G__26824;
continue;
} else {
return ret_value__26361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26360__auto__ = function(state_26706){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26360__auto____1.call(this,state_26706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26360__auto__;
})()
})();
var state__26456__auto__ = (function (){var statearr_26721 = f__26455__auto__.call(null);
(statearr_26721[(6)] = c__26454__auto___26816);

return statearr_26721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26456__auto__);
}));


var c__26454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26455__auto__ = (function (){var switch__26359__auto__ = (function (state_26759){
var state_val_26760 = (state_26759[(1)]);
if((state_val_26760 === (7))){
var inst_26755 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
var statearr_26761_26825 = state_26759__$1;
(statearr_26761_26825[(2)] = inst_26755);

(statearr_26761_26825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (20))){
var state_26759__$1 = state_26759;
var statearr_26762_26826 = state_26759__$1;
(statearr_26762_26826[(2)] = null);

(statearr_26762_26826[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (1))){
var state_26759__$1 = state_26759;
var statearr_26763_26827 = state_26759__$1;
(statearr_26763_26827[(2)] = null);

(statearr_26763_26827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (4))){
var inst_26724 = (state_26759[(7)]);
var inst_26724__$1 = (state_26759[(2)]);
var inst_26725 = (inst_26724__$1 == null);
var state_26759__$1 = (function (){var statearr_26764 = state_26759;
(statearr_26764[(7)] = inst_26724__$1);

return statearr_26764;
})();
if(cljs.core.truth_(inst_26725)){
var statearr_26765_26828 = state_26759__$1;
(statearr_26765_26828[(1)] = (5));

} else {
var statearr_26766_26829 = state_26759__$1;
(statearr_26766_26829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (15))){
var inst_26737 = (state_26759[(8)]);
var state_26759__$1 = state_26759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26759__$1,(18),to,inst_26737);
} else {
if((state_val_26760 === (21))){
var inst_26750 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
var statearr_26767_26830 = state_26759__$1;
(statearr_26767_26830[(2)] = inst_26750);

(statearr_26767_26830[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (13))){
var inst_26752 = (state_26759[(2)]);
var state_26759__$1 = (function (){var statearr_26768 = state_26759;
(statearr_26768[(9)] = inst_26752);

return statearr_26768;
})();
var statearr_26769_26831 = state_26759__$1;
(statearr_26769_26831[(2)] = null);

(statearr_26769_26831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (6))){
var inst_26724 = (state_26759[(7)]);
var state_26759__$1 = state_26759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26759__$1,(11),inst_26724);
} else {
if((state_val_26760 === (17))){
var inst_26745 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
if(cljs.core.truth_(inst_26745)){
var statearr_26770_26832 = state_26759__$1;
(statearr_26770_26832[(1)] = (19));

} else {
var statearr_26771_26833 = state_26759__$1;
(statearr_26771_26833[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (3))){
var inst_26757 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26759__$1,inst_26757);
} else {
if((state_val_26760 === (12))){
var inst_26734 = (state_26759[(10)]);
var state_26759__$1 = state_26759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26759__$1,(14),inst_26734);
} else {
if((state_val_26760 === (2))){
var state_26759__$1 = state_26759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26759__$1,(4),results);
} else {
if((state_val_26760 === (19))){
var state_26759__$1 = state_26759;
var statearr_26772_26834 = state_26759__$1;
(statearr_26772_26834[(2)] = null);

(statearr_26772_26834[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (11))){
var inst_26734 = (state_26759[(2)]);
var state_26759__$1 = (function (){var statearr_26773 = state_26759;
(statearr_26773[(10)] = inst_26734);

return statearr_26773;
})();
var statearr_26774_26835 = state_26759__$1;
(statearr_26774_26835[(2)] = null);

(statearr_26774_26835[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (9))){
var state_26759__$1 = state_26759;
var statearr_26775_26836 = state_26759__$1;
(statearr_26775_26836[(2)] = null);

(statearr_26775_26836[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (5))){
var state_26759__$1 = state_26759;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26776_26837 = state_26759__$1;
(statearr_26776_26837[(1)] = (8));

} else {
var statearr_26777_26838 = state_26759__$1;
(statearr_26777_26838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (14))){
var inst_26737 = (state_26759[(8)]);
var inst_26737__$1 = (state_26759[(2)]);
var inst_26738 = (inst_26737__$1 == null);
var inst_26739 = cljs.core.not.call(null,inst_26738);
var state_26759__$1 = (function (){var statearr_26778 = state_26759;
(statearr_26778[(8)] = inst_26737__$1);

return statearr_26778;
})();
if(inst_26739){
var statearr_26779_26839 = state_26759__$1;
(statearr_26779_26839[(1)] = (15));

} else {
var statearr_26780_26840 = state_26759__$1;
(statearr_26780_26840[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (16))){
var state_26759__$1 = state_26759;
var statearr_26781_26841 = state_26759__$1;
(statearr_26781_26841[(2)] = false);

(statearr_26781_26841[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (10))){
var inst_26731 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
var statearr_26782_26842 = state_26759__$1;
(statearr_26782_26842[(2)] = inst_26731);

(statearr_26782_26842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (18))){
var inst_26742 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
var statearr_26783_26843 = state_26759__$1;
(statearr_26783_26843[(2)] = inst_26742);

(statearr_26783_26843[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (8))){
var inst_26728 = cljs.core.async.close_BANG_.call(null,to);
var state_26759__$1 = state_26759;
var statearr_26784_26844 = state_26759__$1;
(statearr_26784_26844[(2)] = inst_26728);

(statearr_26784_26844[(1)] = (10));


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
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26360__auto____0 = (function (){
var statearr_26785 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26785[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26360__auto__);

(statearr_26785[(1)] = (1));

return statearr_26785;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26360__auto____1 = (function (state_26759){
while(true){
var ret_value__26361__auto__ = (function (){try{while(true){
var result__26362__auto__ = switch__26359__auto__.call(null,state_26759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26362__auto__;
}
break;
}
}catch (e26786){if((e26786 instanceof Object)){
var ex__26363__auto__ = e26786;
var statearr_26787_26845 = state_26759;
(statearr_26787_26845[(5)] = ex__26363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26846 = state_26759;
state_26759 = G__26846;
continue;
} else {
return ret_value__26361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26360__auto__ = function(state_26759){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26360__auto____1.call(this,state_26759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26360__auto__;
})()
})();
var state__26456__auto__ = (function (){var statearr_26788 = f__26455__auto__.call(null);
(statearr_26788[(6)] = c__26454__auto__);

return statearr_26788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26456__auto__);
}));

return c__26454__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__26848 = arguments.length;
switch (G__26848) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__26851 = arguments.length;
switch (G__26851) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__26854 = arguments.length;
switch (G__26854) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26454__auto___26903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26455__auto__ = (function (){var switch__26359__auto__ = (function (state_26880){
var state_val_26881 = (state_26880[(1)]);
if((state_val_26881 === (7))){
var inst_26876 = (state_26880[(2)]);
var state_26880__$1 = state_26880;
var statearr_26882_26904 = state_26880__$1;
(statearr_26882_26904[(2)] = inst_26876);

(statearr_26882_26904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (1))){
var state_26880__$1 = state_26880;
var statearr_26883_26905 = state_26880__$1;
(statearr_26883_26905[(2)] = null);

(statearr_26883_26905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (4))){
var inst_26857 = (state_26880[(7)]);
var inst_26857__$1 = (state_26880[(2)]);
var inst_26858 = (inst_26857__$1 == null);
var state_26880__$1 = (function (){var statearr_26884 = state_26880;
(statearr_26884[(7)] = inst_26857__$1);

return statearr_26884;
})();
if(cljs.core.truth_(inst_26858)){
var statearr_26885_26906 = state_26880__$1;
(statearr_26885_26906[(1)] = (5));

} else {
var statearr_26886_26907 = state_26880__$1;
(statearr_26886_26907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (13))){
var state_26880__$1 = state_26880;
var statearr_26887_26908 = state_26880__$1;
(statearr_26887_26908[(2)] = null);

(statearr_26887_26908[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (6))){
var inst_26857 = (state_26880[(7)]);
var inst_26863 = p.call(null,inst_26857);
var state_26880__$1 = state_26880;
if(cljs.core.truth_(inst_26863)){
var statearr_26888_26909 = state_26880__$1;
(statearr_26888_26909[(1)] = (9));

} else {
var statearr_26889_26910 = state_26880__$1;
(statearr_26889_26910[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (3))){
var inst_26878 = (state_26880[(2)]);
var state_26880__$1 = state_26880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26880__$1,inst_26878);
} else {
if((state_val_26881 === (12))){
var state_26880__$1 = state_26880;
var statearr_26890_26911 = state_26880__$1;
(statearr_26890_26911[(2)] = null);

(statearr_26890_26911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (2))){
var state_26880__$1 = state_26880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26880__$1,(4),ch);
} else {
if((state_val_26881 === (11))){
var inst_26857 = (state_26880[(7)]);
var inst_26867 = (state_26880[(2)]);
var state_26880__$1 = state_26880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26880__$1,(8),inst_26867,inst_26857);
} else {
if((state_val_26881 === (9))){
var state_26880__$1 = state_26880;
var statearr_26891_26912 = state_26880__$1;
(statearr_26891_26912[(2)] = tc);

(statearr_26891_26912[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (5))){
var inst_26860 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26861 = cljs.core.async.close_BANG_.call(null,fc);
var state_26880__$1 = (function (){var statearr_26892 = state_26880;
(statearr_26892[(8)] = inst_26860);

return statearr_26892;
})();
var statearr_26893_26913 = state_26880__$1;
(statearr_26893_26913[(2)] = inst_26861);

(statearr_26893_26913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (14))){
var inst_26874 = (state_26880[(2)]);
var state_26880__$1 = state_26880;
var statearr_26894_26914 = state_26880__$1;
(statearr_26894_26914[(2)] = inst_26874);

(statearr_26894_26914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (10))){
var state_26880__$1 = state_26880;
var statearr_26895_26915 = state_26880__$1;
(statearr_26895_26915[(2)] = fc);

(statearr_26895_26915[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26881 === (8))){
var inst_26869 = (state_26880[(2)]);
var state_26880__$1 = state_26880;
if(cljs.core.truth_(inst_26869)){
var statearr_26896_26916 = state_26880__$1;
(statearr_26896_26916[(1)] = (12));

} else {
var statearr_26897_26917 = state_26880__$1;
(statearr_26897_26917[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__26360__auto__ = null;
var cljs$core$async$state_machine__26360__auto____0 = (function (){
var statearr_26898 = [null,null,null,null,null,null,null,null,null];
(statearr_26898[(0)] = cljs$core$async$state_machine__26360__auto__);

(statearr_26898[(1)] = (1));

return statearr_26898;
});
var cljs$core$async$state_machine__26360__auto____1 = (function (state_26880){
while(true){
var ret_value__26361__auto__ = (function (){try{while(true){
var result__26362__auto__ = switch__26359__auto__.call(null,state_26880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26362__auto__;
}
break;
}
}catch (e26899){if((e26899 instanceof Object)){
var ex__26363__auto__ = e26899;
var statearr_26900_26918 = state_26880;
(statearr_26900_26918[(5)] = ex__26363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26919 = state_26880;
state_26880 = G__26919;
continue;
} else {
return ret_value__26361__auto__;
}
break;
}
});
cljs$core$async$state_machine__26360__auto__ = function(state_26880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26360__auto____1.call(this,state_26880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26360__auto____0;
cljs$core$async$state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26360__auto____1;
return cljs$core$async$state_machine__26360__auto__;
})()
})();
var state__26456__auto__ = (function (){var statearr_26901 = f__26455__auto__.call(null);
(statearr_26901[(6)] = c__26454__auto___26903);

return statearr_26901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26456__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__26454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26455__auto__ = (function (){var switch__26359__auto__ = (function (state_26940){
var state_val_26941 = (state_26940[(1)]);
if((state_val_26941 === (7))){
var inst_26936 = (state_26940[(2)]);
var state_26940__$1 = state_26940;
var statearr_26942_26960 = state_26940__$1;
(statearr_26942_26960[(2)] = inst_26936);

(statearr_26942_26960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26941 === (1))){
var inst_26920 = init;
var state_26940__$1 = (function (){var statearr_26943 = state_26940;
(statearr_26943[(7)] = inst_26920);

return statearr_26943;
})();
var statearr_26944_26961 = state_26940__$1;
(statearr_26944_26961[(2)] = null);

(statearr_26944_26961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26941 === (4))){
var inst_26923 = (state_26940[(8)]);
var inst_26923__$1 = (state_26940[(2)]);
var inst_26924 = (inst_26923__$1 == null);
var state_26940__$1 = (function (){var statearr_26945 = state_26940;
(statearr_26945[(8)] = inst_26923__$1);

return statearr_26945;
})();
if(cljs.core.truth_(inst_26924)){
var statearr_26946_26962 = state_26940__$1;
(statearr_26946_26962[(1)] = (5));

} else {
var statearr_26947_26963 = state_26940__$1;
(statearr_26947_26963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26941 === (6))){
var inst_26920 = (state_26940[(7)]);
var inst_26927 = (state_26940[(9)]);
var inst_26923 = (state_26940[(8)]);
var inst_26927__$1 = f.call(null,inst_26920,inst_26923);
var inst_26928 = cljs.core.reduced_QMARK_.call(null,inst_26927__$1);
var state_26940__$1 = (function (){var statearr_26948 = state_26940;
(statearr_26948[(9)] = inst_26927__$1);

return statearr_26948;
})();
if(inst_26928){
var statearr_26949_26964 = state_26940__$1;
(statearr_26949_26964[(1)] = (8));

} else {
var statearr_26950_26965 = state_26940__$1;
(statearr_26950_26965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26941 === (3))){
var inst_26938 = (state_26940[(2)]);
var state_26940__$1 = state_26940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26940__$1,inst_26938);
} else {
if((state_val_26941 === (2))){
var state_26940__$1 = state_26940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26940__$1,(4),ch);
} else {
if((state_val_26941 === (9))){
var inst_26927 = (state_26940[(9)]);
var inst_26920 = inst_26927;
var state_26940__$1 = (function (){var statearr_26951 = state_26940;
(statearr_26951[(7)] = inst_26920);

return statearr_26951;
})();
var statearr_26952_26966 = state_26940__$1;
(statearr_26952_26966[(2)] = null);

(statearr_26952_26966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26941 === (5))){
var inst_26920 = (state_26940[(7)]);
var state_26940__$1 = state_26940;
var statearr_26953_26967 = state_26940__$1;
(statearr_26953_26967[(2)] = inst_26920);

(statearr_26953_26967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26941 === (10))){
var inst_26934 = (state_26940[(2)]);
var state_26940__$1 = state_26940;
var statearr_26954_26968 = state_26940__$1;
(statearr_26954_26968[(2)] = inst_26934);

(statearr_26954_26968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26941 === (8))){
var inst_26927 = (state_26940[(9)]);
var inst_26930 = cljs.core.deref.call(null,inst_26927);
var state_26940__$1 = state_26940;
var statearr_26955_26969 = state_26940__$1;
(statearr_26955_26969[(2)] = inst_26930);

(statearr_26955_26969[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__26360__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26360__auto____0 = (function (){
var statearr_26956 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26956[(0)] = cljs$core$async$reduce_$_state_machine__26360__auto__);

(statearr_26956[(1)] = (1));

return statearr_26956;
});
var cljs$core$async$reduce_$_state_machine__26360__auto____1 = (function (state_26940){
while(true){
var ret_value__26361__auto__ = (function (){try{while(true){
var result__26362__auto__ = switch__26359__auto__.call(null,state_26940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26362__auto__;
}
break;
}
}catch (e26957){if((e26957 instanceof Object)){
var ex__26363__auto__ = e26957;
var statearr_26958_26970 = state_26940;
(statearr_26958_26970[(5)] = ex__26363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26971 = state_26940;
state_26940 = G__26971;
continue;
} else {
return ret_value__26361__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26360__auto__ = function(state_26940){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26360__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26360__auto____1.call(this,state_26940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26360__auto____0;
cljs$core$async$reduce_$_state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26360__auto____1;
return cljs$core$async$reduce_$_state_machine__26360__auto__;
})()
})();
var state__26456__auto__ = (function (){var statearr_26959 = f__26455__auto__.call(null);
(statearr_26959[(6)] = c__26454__auto__);

return statearr_26959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26456__auto__);
}));

return c__26454__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26455__auto__ = (function (){var switch__26359__auto__ = (function (state_26977){
var state_val_26978 = (state_26977[(1)]);
if((state_val_26978 === (1))){
var inst_26972 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_26977__$1 = state_26977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26977__$1,(2),inst_26972);
} else {
if((state_val_26978 === (2))){
var inst_26974 = (state_26977[(2)]);
var inst_26975 = f__$1.call(null,inst_26974);
var state_26977__$1 = state_26977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26977__$1,inst_26975);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__26360__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26360__auto____0 = (function (){
var statearr_26979 = [null,null,null,null,null,null,null];
(statearr_26979[(0)] = cljs$core$async$transduce_$_state_machine__26360__auto__);

(statearr_26979[(1)] = (1));

return statearr_26979;
});
var cljs$core$async$transduce_$_state_machine__26360__auto____1 = (function (state_26977){
while(true){
var ret_value__26361__auto__ = (function (){try{while(true){
var result__26362__auto__ = switch__26359__auto__.call(null,state_26977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26362__auto__;
}
break;
}
}catch (e26980){if((e26980 instanceof Object)){
var ex__26363__auto__ = e26980;
var statearr_26981_26983 = state_26977;
(statearr_26981_26983[(5)] = ex__26363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26984 = state_26977;
state_26977 = G__26984;
continue;
} else {
return ret_value__26361__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26360__auto__ = function(state_26977){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26360__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26360__auto____1.call(this,state_26977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26360__auto____0;
cljs$core$async$transduce_$_state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26360__auto____1;
return cljs$core$async$transduce_$_state_machine__26360__auto__;
})()
})();
var state__26456__auto__ = (function (){var statearr_26982 = f__26455__auto__.call(null);
(statearr_26982[(6)] = c__26454__auto__);

return statearr_26982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26456__auto__);
}));

return c__26454__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__26986 = arguments.length;
switch (G__26986) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26455__auto__ = (function (){var switch__26359__auto__ = (function (state_27011){
var state_val_27012 = (state_27011[(1)]);
if((state_val_27012 === (7))){
var inst_26993 = (state_27011[(2)]);
var state_27011__$1 = state_27011;
var statearr_27013_27034 = state_27011__$1;
(statearr_27013_27034[(2)] = inst_26993);

(statearr_27013_27034[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (1))){
var inst_26987 = cljs.core.seq.call(null,coll);
var inst_26988 = inst_26987;
var state_27011__$1 = (function (){var statearr_27014 = state_27011;
(statearr_27014[(7)] = inst_26988);

return statearr_27014;
})();
var statearr_27015_27035 = state_27011__$1;
(statearr_27015_27035[(2)] = null);

(statearr_27015_27035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (4))){
var inst_26988 = (state_27011[(7)]);
var inst_26991 = cljs.core.first.call(null,inst_26988);
var state_27011__$1 = state_27011;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27011__$1,(7),ch,inst_26991);
} else {
if((state_val_27012 === (13))){
var inst_27005 = (state_27011[(2)]);
var state_27011__$1 = state_27011;
var statearr_27016_27036 = state_27011__$1;
(statearr_27016_27036[(2)] = inst_27005);

(statearr_27016_27036[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (6))){
var inst_26996 = (state_27011[(2)]);
var state_27011__$1 = state_27011;
if(cljs.core.truth_(inst_26996)){
var statearr_27017_27037 = state_27011__$1;
(statearr_27017_27037[(1)] = (8));

} else {
var statearr_27018_27038 = state_27011__$1;
(statearr_27018_27038[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (3))){
var inst_27009 = (state_27011[(2)]);
var state_27011__$1 = state_27011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27011__$1,inst_27009);
} else {
if((state_val_27012 === (12))){
var state_27011__$1 = state_27011;
var statearr_27019_27039 = state_27011__$1;
(statearr_27019_27039[(2)] = null);

(statearr_27019_27039[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (2))){
var inst_26988 = (state_27011[(7)]);
var state_27011__$1 = state_27011;
if(cljs.core.truth_(inst_26988)){
var statearr_27020_27040 = state_27011__$1;
(statearr_27020_27040[(1)] = (4));

} else {
var statearr_27021_27041 = state_27011__$1;
(statearr_27021_27041[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (11))){
var inst_27002 = cljs.core.async.close_BANG_.call(null,ch);
var state_27011__$1 = state_27011;
var statearr_27022_27042 = state_27011__$1;
(statearr_27022_27042[(2)] = inst_27002);

(statearr_27022_27042[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (9))){
var state_27011__$1 = state_27011;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27023_27043 = state_27011__$1;
(statearr_27023_27043[(1)] = (11));

} else {
var statearr_27024_27044 = state_27011__$1;
(statearr_27024_27044[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (5))){
var inst_26988 = (state_27011[(7)]);
var state_27011__$1 = state_27011;
var statearr_27025_27045 = state_27011__$1;
(statearr_27025_27045[(2)] = inst_26988);

(statearr_27025_27045[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (10))){
var inst_27007 = (state_27011[(2)]);
var state_27011__$1 = state_27011;
var statearr_27026_27046 = state_27011__$1;
(statearr_27026_27046[(2)] = inst_27007);

(statearr_27026_27046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27012 === (8))){
var inst_26988 = (state_27011[(7)]);
var inst_26998 = cljs.core.next.call(null,inst_26988);
var inst_26988__$1 = inst_26998;
var state_27011__$1 = (function (){var statearr_27027 = state_27011;
(statearr_27027[(7)] = inst_26988__$1);

return statearr_27027;
})();
var statearr_27028_27047 = state_27011__$1;
(statearr_27028_27047[(2)] = null);

(statearr_27028_27047[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__26360__auto__ = null;
var cljs$core$async$state_machine__26360__auto____0 = (function (){
var statearr_27029 = [null,null,null,null,null,null,null,null];
(statearr_27029[(0)] = cljs$core$async$state_machine__26360__auto__);

(statearr_27029[(1)] = (1));

return statearr_27029;
});
var cljs$core$async$state_machine__26360__auto____1 = (function (state_27011){
while(true){
var ret_value__26361__auto__ = (function (){try{while(true){
var result__26362__auto__ = switch__26359__auto__.call(null,state_27011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26362__auto__;
}
break;
}
}catch (e27030){if((e27030 instanceof Object)){
var ex__26363__auto__ = e27030;
var statearr_27031_27048 = state_27011;
(statearr_27031_27048[(5)] = ex__26363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27049 = state_27011;
state_27011 = G__27049;
continue;
} else {
return ret_value__26361__auto__;
}
break;
}
});
cljs$core$async$state_machine__26360__auto__ = function(state_27011){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26360__auto____1.call(this,state_27011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26360__auto____0;
cljs$core$async$state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26360__auto____1;
return cljs$core$async$state_machine__26360__auto__;
})()
})();
var state__26456__auto__ = (function (){var statearr_27032 = f__26455__auto__.call(null);
(statearr_27032[(6)] = c__26454__auto__);

return statearr_27032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26456__auto__);
}));

return c__26454__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_27050 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_27050.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_27051 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_27051.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_27052 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_27052.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_27053 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_27053.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27054 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27054 = (function (ch,cs,meta27055){
this.ch = ch;
this.cs = cs;
this.meta27055 = meta27055;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27056,meta27055__$1){
var self__ = this;
var _27056__$1 = this;
return (new cljs.core.async.t_cljs$core$async27054(self__.ch,self__.cs,meta27055__$1));
}));

(cljs.core.async.t_cljs$core$async27054.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27056){
var self__ = this;
var _27056__$1 = this;
return self__.meta27055;
}));

(cljs.core.async.t_cljs$core$async27054.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27054.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async27054.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27054.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async27054.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async27054.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async27054.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27055","meta27055",-1318941565,null)], null);
}));

(cljs.core.async.t_cljs$core$async27054.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27054.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27054");

(cljs.core.async.t_cljs$core$async27054.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27054");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27054.
 */
cljs.core.async.__GT_t_cljs$core$async27054 = (function cljs$core$async$mult_$___GT_t_cljs$core$async27054(ch__$1,cs__$1,meta27055){
return (new cljs.core.async.t_cljs$core$async27054(ch__$1,cs__$1,meta27055));
});

}

return (new cljs.core.async.t_cljs$core$async27054(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__26454__auto___27276 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26455__auto__ = (function (){var switch__26359__auto__ = (function (state_27191){
var state_val_27192 = (state_27191[(1)]);
if((state_val_27192 === (7))){
var inst_27187 = (state_27191[(2)]);
var state_27191__$1 = state_27191;
var statearr_27193_27277 = state_27191__$1;
(statearr_27193_27277[(2)] = inst_27187);

(statearr_27193_27277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (20))){
var inst_27090 = (state_27191[(7)]);
var inst_27102 = cljs.core.first.call(null,inst_27090);
var inst_27103 = cljs.core.nth.call(null,inst_27102,(0),null);
var inst_27104 = cljs.core.nth.call(null,inst_27102,(1),null);
var state_27191__$1 = (function (){var statearr_27194 = state_27191;
(statearr_27194[(8)] = inst_27103);

return statearr_27194;
})();
if(cljs.core.truth_(inst_27104)){
var statearr_27195_27278 = state_27191__$1;
(statearr_27195_27278[(1)] = (22));

} else {
var statearr_27196_27279 = state_27191__$1;
(statearr_27196_27279[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (27))){
var inst_27139 = (state_27191[(9)]);
var inst_27132 = (state_27191[(10)]);
var inst_27059 = (state_27191[(11)]);
var inst_27134 = (state_27191[(12)]);
var inst_27139__$1 = cljs.core._nth.call(null,inst_27132,inst_27134);
var inst_27140 = cljs.core.async.put_BANG_.call(null,inst_27139__$1,inst_27059,done);
var state_27191__$1 = (function (){var statearr_27197 = state_27191;
(statearr_27197[(9)] = inst_27139__$1);

return statearr_27197;
})();
if(cljs.core.truth_(inst_27140)){
var statearr_27198_27280 = state_27191__$1;
(statearr_27198_27280[(1)] = (30));

} else {
var statearr_27199_27281 = state_27191__$1;
(statearr_27199_27281[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (1))){
var state_27191__$1 = state_27191;
var statearr_27200_27282 = state_27191__$1;
(statearr_27200_27282[(2)] = null);

(statearr_27200_27282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (24))){
var inst_27090 = (state_27191[(7)]);
var inst_27109 = (state_27191[(2)]);
var inst_27110 = cljs.core.next.call(null,inst_27090);
var inst_27068 = inst_27110;
var inst_27069 = null;
var inst_27070 = (0);
var inst_27071 = (0);
var state_27191__$1 = (function (){var statearr_27201 = state_27191;
(statearr_27201[(13)] = inst_27068);

(statearr_27201[(14)] = inst_27109);

(statearr_27201[(15)] = inst_27071);

(statearr_27201[(16)] = inst_27070);

(statearr_27201[(17)] = inst_27069);

return statearr_27201;
})();
var statearr_27202_27283 = state_27191__$1;
(statearr_27202_27283[(2)] = null);

(statearr_27202_27283[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (39))){
var state_27191__$1 = state_27191;
var statearr_27206_27284 = state_27191__$1;
(statearr_27206_27284[(2)] = null);

(statearr_27206_27284[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (4))){
var inst_27059 = (state_27191[(11)]);
var inst_27059__$1 = (state_27191[(2)]);
var inst_27060 = (inst_27059__$1 == null);
var state_27191__$1 = (function (){var statearr_27207 = state_27191;
(statearr_27207[(11)] = inst_27059__$1);

return statearr_27207;
})();
if(cljs.core.truth_(inst_27060)){
var statearr_27208_27285 = state_27191__$1;
(statearr_27208_27285[(1)] = (5));

} else {
var statearr_27209_27286 = state_27191__$1;
(statearr_27209_27286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (15))){
var inst_27068 = (state_27191[(13)]);
var inst_27071 = (state_27191[(15)]);
var inst_27070 = (state_27191[(16)]);
var inst_27069 = (state_27191[(17)]);
var inst_27086 = (state_27191[(2)]);
var inst_27087 = (inst_27071 + (1));
var tmp27203 = inst_27068;
var tmp27204 = inst_27070;
var tmp27205 = inst_27069;
var inst_27068__$1 = tmp27203;
var inst_27069__$1 = tmp27205;
var inst_27070__$1 = tmp27204;
var inst_27071__$1 = inst_27087;
var state_27191__$1 = (function (){var statearr_27210 = state_27191;
(statearr_27210[(18)] = inst_27086);

(statearr_27210[(13)] = inst_27068__$1);

(statearr_27210[(15)] = inst_27071__$1);

(statearr_27210[(16)] = inst_27070__$1);

(statearr_27210[(17)] = inst_27069__$1);

return statearr_27210;
})();
var statearr_27211_27287 = state_27191__$1;
(statearr_27211_27287[(2)] = null);

(statearr_27211_27287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (21))){
var inst_27113 = (state_27191[(2)]);
var state_27191__$1 = state_27191;
var statearr_27215_27288 = state_27191__$1;
(statearr_27215_27288[(2)] = inst_27113);

(statearr_27215_27288[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (31))){
var inst_27139 = (state_27191[(9)]);
var inst_27143 = done.call(null,null);
var inst_27144 = cljs.core.async.untap_STAR_.call(null,m,inst_27139);
var state_27191__$1 = (function (){var statearr_27216 = state_27191;
(statearr_27216[(19)] = inst_27143);

return statearr_27216;
})();
var statearr_27217_27289 = state_27191__$1;
(statearr_27217_27289[(2)] = inst_27144);

(statearr_27217_27289[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (32))){
var inst_27132 = (state_27191[(10)]);
var inst_27133 = (state_27191[(20)]);
var inst_27131 = (state_27191[(21)]);
var inst_27134 = (state_27191[(12)]);
var inst_27146 = (state_27191[(2)]);
var inst_27147 = (inst_27134 + (1));
var tmp27212 = inst_27132;
var tmp27213 = inst_27133;
var tmp27214 = inst_27131;
var inst_27131__$1 = tmp27214;
var inst_27132__$1 = tmp27212;
var inst_27133__$1 = tmp27213;
var inst_27134__$1 = inst_27147;
var state_27191__$1 = (function (){var statearr_27218 = state_27191;
(statearr_27218[(22)] = inst_27146);

(statearr_27218[(10)] = inst_27132__$1);

(statearr_27218[(20)] = inst_27133__$1);

(statearr_27218[(21)] = inst_27131__$1);

(statearr_27218[(12)] = inst_27134__$1);

return statearr_27218;
})();
var statearr_27219_27290 = state_27191__$1;
(statearr_27219_27290[(2)] = null);

(statearr_27219_27290[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (40))){
var inst_27159 = (state_27191[(23)]);
var inst_27163 = done.call(null,null);
var inst_27164 = cljs.core.async.untap_STAR_.call(null,m,inst_27159);
var state_27191__$1 = (function (){var statearr_27220 = state_27191;
(statearr_27220[(24)] = inst_27163);

return statearr_27220;
})();
var statearr_27221_27291 = state_27191__$1;
(statearr_27221_27291[(2)] = inst_27164);

(statearr_27221_27291[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (33))){
var inst_27150 = (state_27191[(25)]);
var inst_27152 = cljs.core.chunked_seq_QMARK_.call(null,inst_27150);
var state_27191__$1 = state_27191;
if(inst_27152){
var statearr_27222_27292 = state_27191__$1;
(statearr_27222_27292[(1)] = (36));

} else {
var statearr_27223_27293 = state_27191__$1;
(statearr_27223_27293[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (13))){
var inst_27080 = (state_27191[(26)]);
var inst_27083 = cljs.core.async.close_BANG_.call(null,inst_27080);
var state_27191__$1 = state_27191;
var statearr_27224_27294 = state_27191__$1;
(statearr_27224_27294[(2)] = inst_27083);

(statearr_27224_27294[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (22))){
var inst_27103 = (state_27191[(8)]);
var inst_27106 = cljs.core.async.close_BANG_.call(null,inst_27103);
var state_27191__$1 = state_27191;
var statearr_27225_27295 = state_27191__$1;
(statearr_27225_27295[(2)] = inst_27106);

(statearr_27225_27295[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (36))){
var inst_27150 = (state_27191[(25)]);
var inst_27154 = cljs.core.chunk_first.call(null,inst_27150);
var inst_27155 = cljs.core.chunk_rest.call(null,inst_27150);
var inst_27156 = cljs.core.count.call(null,inst_27154);
var inst_27131 = inst_27155;
var inst_27132 = inst_27154;
var inst_27133 = inst_27156;
var inst_27134 = (0);
var state_27191__$1 = (function (){var statearr_27226 = state_27191;
(statearr_27226[(10)] = inst_27132);

(statearr_27226[(20)] = inst_27133);

(statearr_27226[(21)] = inst_27131);

(statearr_27226[(12)] = inst_27134);

return statearr_27226;
})();
var statearr_27227_27296 = state_27191__$1;
(statearr_27227_27296[(2)] = null);

(statearr_27227_27296[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (41))){
var inst_27150 = (state_27191[(25)]);
var inst_27166 = (state_27191[(2)]);
var inst_27167 = cljs.core.next.call(null,inst_27150);
var inst_27131 = inst_27167;
var inst_27132 = null;
var inst_27133 = (0);
var inst_27134 = (0);
var state_27191__$1 = (function (){var statearr_27228 = state_27191;
(statearr_27228[(10)] = inst_27132);

(statearr_27228[(20)] = inst_27133);

(statearr_27228[(27)] = inst_27166);

(statearr_27228[(21)] = inst_27131);

(statearr_27228[(12)] = inst_27134);

return statearr_27228;
})();
var statearr_27229_27297 = state_27191__$1;
(statearr_27229_27297[(2)] = null);

(statearr_27229_27297[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (43))){
var state_27191__$1 = state_27191;
var statearr_27230_27298 = state_27191__$1;
(statearr_27230_27298[(2)] = null);

(statearr_27230_27298[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (29))){
var inst_27175 = (state_27191[(2)]);
var state_27191__$1 = state_27191;
var statearr_27231_27299 = state_27191__$1;
(statearr_27231_27299[(2)] = inst_27175);

(statearr_27231_27299[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (44))){
var inst_27184 = (state_27191[(2)]);
var state_27191__$1 = (function (){var statearr_27232 = state_27191;
(statearr_27232[(28)] = inst_27184);

return statearr_27232;
})();
var statearr_27233_27300 = state_27191__$1;
(statearr_27233_27300[(2)] = null);

(statearr_27233_27300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (6))){
var inst_27123 = (state_27191[(29)]);
var inst_27122 = cljs.core.deref.call(null,cs);
var inst_27123__$1 = cljs.core.keys.call(null,inst_27122);
var inst_27124 = cljs.core.count.call(null,inst_27123__$1);
var inst_27125 = cljs.core.reset_BANG_.call(null,dctr,inst_27124);
var inst_27130 = cljs.core.seq.call(null,inst_27123__$1);
var inst_27131 = inst_27130;
var inst_27132 = null;
var inst_27133 = (0);
var inst_27134 = (0);
var state_27191__$1 = (function (){var statearr_27234 = state_27191;
(statearr_27234[(30)] = inst_27125);

(statearr_27234[(10)] = inst_27132);

(statearr_27234[(20)] = inst_27133);

(statearr_27234[(29)] = inst_27123__$1);

(statearr_27234[(21)] = inst_27131);

(statearr_27234[(12)] = inst_27134);

return statearr_27234;
})();
var statearr_27235_27301 = state_27191__$1;
(statearr_27235_27301[(2)] = null);

(statearr_27235_27301[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (28))){
var inst_27150 = (state_27191[(25)]);
var inst_27131 = (state_27191[(21)]);
var inst_27150__$1 = cljs.core.seq.call(null,inst_27131);
var state_27191__$1 = (function (){var statearr_27236 = state_27191;
(statearr_27236[(25)] = inst_27150__$1);

return statearr_27236;
})();
if(inst_27150__$1){
var statearr_27237_27302 = state_27191__$1;
(statearr_27237_27302[(1)] = (33));

} else {
var statearr_27238_27303 = state_27191__$1;
(statearr_27238_27303[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (25))){
var inst_27133 = (state_27191[(20)]);
var inst_27134 = (state_27191[(12)]);
var inst_27136 = (inst_27134 < inst_27133);
var inst_27137 = inst_27136;
var state_27191__$1 = state_27191;
if(cljs.core.truth_(inst_27137)){
var statearr_27239_27304 = state_27191__$1;
(statearr_27239_27304[(1)] = (27));

} else {
var statearr_27240_27305 = state_27191__$1;
(statearr_27240_27305[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (34))){
var state_27191__$1 = state_27191;
var statearr_27241_27306 = state_27191__$1;
(statearr_27241_27306[(2)] = null);

(statearr_27241_27306[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (17))){
var state_27191__$1 = state_27191;
var statearr_27242_27307 = state_27191__$1;
(statearr_27242_27307[(2)] = null);

(statearr_27242_27307[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (3))){
var inst_27189 = (state_27191[(2)]);
var state_27191__$1 = state_27191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27191__$1,inst_27189);
} else {
if((state_val_27192 === (12))){
var inst_27118 = (state_27191[(2)]);
var state_27191__$1 = state_27191;
var statearr_27243_27308 = state_27191__$1;
(statearr_27243_27308[(2)] = inst_27118);

(statearr_27243_27308[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (2))){
var state_27191__$1 = state_27191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27191__$1,(4),ch);
} else {
if((state_val_27192 === (23))){
var state_27191__$1 = state_27191;
var statearr_27244_27309 = state_27191__$1;
(statearr_27244_27309[(2)] = null);

(statearr_27244_27309[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (35))){
var inst_27173 = (state_27191[(2)]);
var state_27191__$1 = state_27191;
var statearr_27245_27310 = state_27191__$1;
(statearr_27245_27310[(2)] = inst_27173);

(statearr_27245_27310[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (19))){
var inst_27090 = (state_27191[(7)]);
var inst_27094 = cljs.core.chunk_first.call(null,inst_27090);
var inst_27095 = cljs.core.chunk_rest.call(null,inst_27090);
var inst_27096 = cljs.core.count.call(null,inst_27094);
var inst_27068 = inst_27095;
var inst_27069 = inst_27094;
var inst_27070 = inst_27096;
var inst_27071 = (0);
var state_27191__$1 = (function (){var statearr_27246 = state_27191;
(statearr_27246[(13)] = inst_27068);

(statearr_27246[(15)] = inst_27071);

(statearr_27246[(16)] = inst_27070);

(statearr_27246[(17)] = inst_27069);

return statearr_27246;
})();
var statearr_27247_27311 = state_27191__$1;
(statearr_27247_27311[(2)] = null);

(statearr_27247_27311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (11))){
var inst_27068 = (state_27191[(13)]);
var inst_27090 = (state_27191[(7)]);
var inst_27090__$1 = cljs.core.seq.call(null,inst_27068);
var state_27191__$1 = (function (){var statearr_27248 = state_27191;
(statearr_27248[(7)] = inst_27090__$1);

return statearr_27248;
})();
if(inst_27090__$1){
var statearr_27249_27312 = state_27191__$1;
(statearr_27249_27312[(1)] = (16));

} else {
var statearr_27250_27313 = state_27191__$1;
(statearr_27250_27313[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (9))){
var inst_27120 = (state_27191[(2)]);
var state_27191__$1 = state_27191;
var statearr_27251_27314 = state_27191__$1;
(statearr_27251_27314[(2)] = inst_27120);

(statearr_27251_27314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (5))){
var inst_27066 = cljs.core.deref.call(null,cs);
var inst_27067 = cljs.core.seq.call(null,inst_27066);
var inst_27068 = inst_27067;
var inst_27069 = null;
var inst_27070 = (0);
var inst_27071 = (0);
var state_27191__$1 = (function (){var statearr_27252 = state_27191;
(statearr_27252[(13)] = inst_27068);

(statearr_27252[(15)] = inst_27071);

(statearr_27252[(16)] = inst_27070);

(statearr_27252[(17)] = inst_27069);

return statearr_27252;
})();
var statearr_27253_27315 = state_27191__$1;
(statearr_27253_27315[(2)] = null);

(statearr_27253_27315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (14))){
var state_27191__$1 = state_27191;
var statearr_27254_27316 = state_27191__$1;
(statearr_27254_27316[(2)] = null);

(statearr_27254_27316[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (45))){
var inst_27181 = (state_27191[(2)]);
var state_27191__$1 = state_27191;
var statearr_27255_27317 = state_27191__$1;
(statearr_27255_27317[(2)] = inst_27181);

(statearr_27255_27317[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (26))){
var inst_27123 = (state_27191[(29)]);
var inst_27177 = (state_27191[(2)]);
var inst_27178 = cljs.core.seq.call(null,inst_27123);
var state_27191__$1 = (function (){var statearr_27256 = state_27191;
(statearr_27256[(31)] = inst_27177);

return statearr_27256;
})();
if(inst_27178){
var statearr_27257_27318 = state_27191__$1;
(statearr_27257_27318[(1)] = (42));

} else {
var statearr_27258_27319 = state_27191__$1;
(statearr_27258_27319[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (16))){
var inst_27090 = (state_27191[(7)]);
var inst_27092 = cljs.core.chunked_seq_QMARK_.call(null,inst_27090);
var state_27191__$1 = state_27191;
if(inst_27092){
var statearr_27259_27320 = state_27191__$1;
(statearr_27259_27320[(1)] = (19));

} else {
var statearr_27260_27321 = state_27191__$1;
(statearr_27260_27321[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (38))){
var inst_27170 = (state_27191[(2)]);
var state_27191__$1 = state_27191;
var statearr_27261_27322 = state_27191__$1;
(statearr_27261_27322[(2)] = inst_27170);

(statearr_27261_27322[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (30))){
var state_27191__$1 = state_27191;
var statearr_27262_27323 = state_27191__$1;
(statearr_27262_27323[(2)] = null);

(statearr_27262_27323[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (10))){
var inst_27071 = (state_27191[(15)]);
var inst_27069 = (state_27191[(17)]);
var inst_27079 = cljs.core._nth.call(null,inst_27069,inst_27071);
var inst_27080 = cljs.core.nth.call(null,inst_27079,(0),null);
var inst_27081 = cljs.core.nth.call(null,inst_27079,(1),null);
var state_27191__$1 = (function (){var statearr_27263 = state_27191;
(statearr_27263[(26)] = inst_27080);

return statearr_27263;
})();
if(cljs.core.truth_(inst_27081)){
var statearr_27264_27324 = state_27191__$1;
(statearr_27264_27324[(1)] = (13));

} else {
var statearr_27265_27325 = state_27191__$1;
(statearr_27265_27325[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (18))){
var inst_27116 = (state_27191[(2)]);
var state_27191__$1 = state_27191;
var statearr_27266_27326 = state_27191__$1;
(statearr_27266_27326[(2)] = inst_27116);

(statearr_27266_27326[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (42))){
var state_27191__$1 = state_27191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27191__$1,(45),dchan);
} else {
if((state_val_27192 === (37))){
var inst_27150 = (state_27191[(25)]);
var inst_27059 = (state_27191[(11)]);
var inst_27159 = (state_27191[(23)]);
var inst_27159__$1 = cljs.core.first.call(null,inst_27150);
var inst_27160 = cljs.core.async.put_BANG_.call(null,inst_27159__$1,inst_27059,done);
var state_27191__$1 = (function (){var statearr_27267 = state_27191;
(statearr_27267[(23)] = inst_27159__$1);

return statearr_27267;
})();
if(cljs.core.truth_(inst_27160)){
var statearr_27268_27327 = state_27191__$1;
(statearr_27268_27327[(1)] = (39));

} else {
var statearr_27269_27328 = state_27191__$1;
(statearr_27269_27328[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (8))){
var inst_27071 = (state_27191[(15)]);
var inst_27070 = (state_27191[(16)]);
var inst_27073 = (inst_27071 < inst_27070);
var inst_27074 = inst_27073;
var state_27191__$1 = state_27191;
if(cljs.core.truth_(inst_27074)){
var statearr_27270_27329 = state_27191__$1;
(statearr_27270_27329[(1)] = (10));

} else {
var statearr_27271_27330 = state_27191__$1;
(statearr_27271_27330[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__26360__auto__ = null;
var cljs$core$async$mult_$_state_machine__26360__auto____0 = (function (){
var statearr_27272 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27272[(0)] = cljs$core$async$mult_$_state_machine__26360__auto__);

(statearr_27272[(1)] = (1));

return statearr_27272;
});
var cljs$core$async$mult_$_state_machine__26360__auto____1 = (function (state_27191){
while(true){
var ret_value__26361__auto__ = (function (){try{while(true){
var result__26362__auto__ = switch__26359__auto__.call(null,state_27191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26362__auto__;
}
break;
}
}catch (e27273){if((e27273 instanceof Object)){
var ex__26363__auto__ = e27273;
var statearr_27274_27331 = state_27191;
(statearr_27274_27331[(5)] = ex__26363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27332 = state_27191;
state_27191 = G__27332;
continue;
} else {
return ret_value__26361__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26360__auto__ = function(state_27191){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26360__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26360__auto____1.call(this,state_27191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26360__auto____0;
cljs$core$async$mult_$_state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26360__auto____1;
return cljs$core$async$mult_$_state_machine__26360__auto__;
})()
})();
var state__26456__auto__ = (function (){var statearr_27275 = f__26455__auto__.call(null);
(statearr_27275[(6)] = c__26454__auto___27276);

return statearr_27275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26456__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__27334 = arguments.length;
switch (G__27334) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_27336 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_27336.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_27337 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_27337.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_27338 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_27338.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_27339 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_27339.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_27340 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_27340.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27351 = arguments.length;
var i__4737__auto___27352 = (0);
while(true){
if((i__4737__auto___27352 < len__4736__auto___27351)){
args__4742__auto__.push((arguments[i__4737__auto___27352]));

var G__27353 = (i__4737__auto___27352 + (1));
i__4737__auto___27352 = G__27353;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27345){
var map__27346 = p__27345;
var map__27346__$1 = (((((!((map__27346 == null))))?(((((map__27346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27346):map__27346);
var opts = map__27346__$1;
var statearr_27348_27354 = state;
(statearr_27348_27354[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_27349_27355 = state;
(statearr_27349_27355[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_27350_27356 = state;
(statearr_27350_27356[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27341){
var G__27342 = cljs.core.first.call(null,seq27341);
var seq27341__$1 = cljs.core.next.call(null,seq27341);
var G__27343 = cljs.core.first.call(null,seq27341__$1);
var seq27341__$2 = cljs.core.next.call(null,seq27341__$1);
var G__27344 = cljs.core.first.call(null,seq27341__$2);
var seq27341__$3 = cljs.core.next.call(null,seq27341__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27342,G__27343,G__27344,seq27341__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27357 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27357 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27358){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27358 = meta27358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27359,meta27358__$1){
var self__ = this;
var _27359__$1 = this;
return (new cljs.core.async.t_cljs$core$async27357(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27358__$1));
}));

(cljs.core.async.t_cljs$core$async27357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27359){
var self__ = this;
var _27359__$1 = this;
return self__.meta27358;
}));

(cljs.core.async.t_cljs$core$async27357.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27357.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async27357.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27357.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27357.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27357.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27357.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27357.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27357.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27358","meta27358",-1911747372,null)], null);
}));

(cljs.core.async.t_cljs$core$async27357.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27357.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27357");

(cljs.core.async.t_cljs$core$async27357.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27357");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27357.
 */
cljs.core.async.__GT_t_cljs$core$async27357 = (function cljs$core$async$mix_$___GT_t_cljs$core$async27357(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27358){
return (new cljs.core.async.t_cljs$core$async27357(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27358));
});

}

return (new cljs.core.async.t_cljs$core$async27357(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26454__auto___27521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26455__auto__ = (function (){var switch__26359__auto__ = (function (state_27461){
var state_val_27462 = (state_27461[(1)]);
if((state_val_27462 === (7))){
var inst_27376 = (state_27461[(2)]);
var state_27461__$1 = state_27461;
var statearr_27463_27522 = state_27461__$1;
(statearr_27463_27522[(2)] = inst_27376);

(statearr_27463_27522[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (20))){
var inst_27388 = (state_27461[(7)]);
var state_27461__$1 = state_27461;
var statearr_27464_27523 = state_27461__$1;
(statearr_27464_27523[(2)] = inst_27388);

(statearr_27464_27523[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (27))){
var state_27461__$1 = state_27461;
var statearr_27465_27524 = state_27461__$1;
(statearr_27465_27524[(2)] = null);

(statearr_27465_27524[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (1))){
var inst_27363 = (state_27461[(8)]);
var inst_27363__$1 = calc_state.call(null);
var inst_27365 = (inst_27363__$1 == null);
var inst_27366 = cljs.core.not.call(null,inst_27365);
var state_27461__$1 = (function (){var statearr_27466 = state_27461;
(statearr_27466[(8)] = inst_27363__$1);

return statearr_27466;
})();
if(inst_27366){
var statearr_27467_27525 = state_27461__$1;
(statearr_27467_27525[(1)] = (2));

} else {
var statearr_27468_27526 = state_27461__$1;
(statearr_27468_27526[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (24))){
var inst_27421 = (state_27461[(9)]);
var inst_27412 = (state_27461[(10)]);
var inst_27435 = (state_27461[(11)]);
var inst_27435__$1 = inst_27412.call(null,inst_27421);
var state_27461__$1 = (function (){var statearr_27469 = state_27461;
(statearr_27469[(11)] = inst_27435__$1);

return statearr_27469;
})();
if(cljs.core.truth_(inst_27435__$1)){
var statearr_27470_27527 = state_27461__$1;
(statearr_27470_27527[(1)] = (29));

} else {
var statearr_27471_27528 = state_27461__$1;
(statearr_27471_27528[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (4))){
var inst_27379 = (state_27461[(2)]);
var state_27461__$1 = state_27461;
if(cljs.core.truth_(inst_27379)){
var statearr_27472_27529 = state_27461__$1;
(statearr_27472_27529[(1)] = (8));

} else {
var statearr_27473_27530 = state_27461__$1;
(statearr_27473_27530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (15))){
var inst_27406 = (state_27461[(2)]);
var state_27461__$1 = state_27461;
if(cljs.core.truth_(inst_27406)){
var statearr_27474_27531 = state_27461__$1;
(statearr_27474_27531[(1)] = (19));

} else {
var statearr_27475_27532 = state_27461__$1;
(statearr_27475_27532[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (21))){
var inst_27411 = (state_27461[(12)]);
var inst_27411__$1 = (state_27461[(2)]);
var inst_27412 = cljs.core.get.call(null,inst_27411__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27413 = cljs.core.get.call(null,inst_27411__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27414 = cljs.core.get.call(null,inst_27411__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27461__$1 = (function (){var statearr_27476 = state_27461;
(statearr_27476[(12)] = inst_27411__$1);

(statearr_27476[(13)] = inst_27413);

(statearr_27476[(10)] = inst_27412);

return statearr_27476;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27461__$1,(22),inst_27414);
} else {
if((state_val_27462 === (31))){
var inst_27443 = (state_27461[(2)]);
var state_27461__$1 = state_27461;
if(cljs.core.truth_(inst_27443)){
var statearr_27477_27533 = state_27461__$1;
(statearr_27477_27533[(1)] = (32));

} else {
var statearr_27478_27534 = state_27461__$1;
(statearr_27478_27534[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (32))){
var inst_27420 = (state_27461[(14)]);
var state_27461__$1 = state_27461;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27461__$1,(35),out,inst_27420);
} else {
if((state_val_27462 === (33))){
var inst_27411 = (state_27461[(12)]);
var inst_27388 = inst_27411;
var state_27461__$1 = (function (){var statearr_27479 = state_27461;
(statearr_27479[(7)] = inst_27388);

return statearr_27479;
})();
var statearr_27480_27535 = state_27461__$1;
(statearr_27480_27535[(2)] = null);

(statearr_27480_27535[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (13))){
var inst_27388 = (state_27461[(7)]);
var inst_27395 = inst_27388.cljs$lang$protocol_mask$partition0$;
var inst_27396 = (inst_27395 & (64));
var inst_27397 = inst_27388.cljs$core$ISeq$;
var inst_27398 = (cljs.core.PROTOCOL_SENTINEL === inst_27397);
var inst_27399 = ((inst_27396) || (inst_27398));
var state_27461__$1 = state_27461;
if(cljs.core.truth_(inst_27399)){
var statearr_27481_27536 = state_27461__$1;
(statearr_27481_27536[(1)] = (16));

} else {
var statearr_27482_27537 = state_27461__$1;
(statearr_27482_27537[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (22))){
var inst_27420 = (state_27461[(14)]);
var inst_27421 = (state_27461[(9)]);
var inst_27419 = (state_27461[(2)]);
var inst_27420__$1 = cljs.core.nth.call(null,inst_27419,(0),null);
var inst_27421__$1 = cljs.core.nth.call(null,inst_27419,(1),null);
var inst_27422 = (inst_27420__$1 == null);
var inst_27423 = cljs.core._EQ_.call(null,inst_27421__$1,change);
var inst_27424 = ((inst_27422) || (inst_27423));
var state_27461__$1 = (function (){var statearr_27483 = state_27461;
(statearr_27483[(14)] = inst_27420__$1);

(statearr_27483[(9)] = inst_27421__$1);

return statearr_27483;
})();
if(cljs.core.truth_(inst_27424)){
var statearr_27484_27538 = state_27461__$1;
(statearr_27484_27538[(1)] = (23));

} else {
var statearr_27485_27539 = state_27461__$1;
(statearr_27485_27539[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (36))){
var inst_27411 = (state_27461[(12)]);
var inst_27388 = inst_27411;
var state_27461__$1 = (function (){var statearr_27486 = state_27461;
(statearr_27486[(7)] = inst_27388);

return statearr_27486;
})();
var statearr_27487_27540 = state_27461__$1;
(statearr_27487_27540[(2)] = null);

(statearr_27487_27540[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (29))){
var inst_27435 = (state_27461[(11)]);
var state_27461__$1 = state_27461;
var statearr_27488_27541 = state_27461__$1;
(statearr_27488_27541[(2)] = inst_27435);

(statearr_27488_27541[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (6))){
var state_27461__$1 = state_27461;
var statearr_27489_27542 = state_27461__$1;
(statearr_27489_27542[(2)] = false);

(statearr_27489_27542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (28))){
var inst_27431 = (state_27461[(2)]);
var inst_27432 = calc_state.call(null);
var inst_27388 = inst_27432;
var state_27461__$1 = (function (){var statearr_27490 = state_27461;
(statearr_27490[(7)] = inst_27388);

(statearr_27490[(15)] = inst_27431);

return statearr_27490;
})();
var statearr_27491_27543 = state_27461__$1;
(statearr_27491_27543[(2)] = null);

(statearr_27491_27543[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (25))){
var inst_27457 = (state_27461[(2)]);
var state_27461__$1 = state_27461;
var statearr_27492_27544 = state_27461__$1;
(statearr_27492_27544[(2)] = inst_27457);

(statearr_27492_27544[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (34))){
var inst_27455 = (state_27461[(2)]);
var state_27461__$1 = state_27461;
var statearr_27493_27545 = state_27461__$1;
(statearr_27493_27545[(2)] = inst_27455);

(statearr_27493_27545[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (17))){
var state_27461__$1 = state_27461;
var statearr_27494_27546 = state_27461__$1;
(statearr_27494_27546[(2)] = false);

(statearr_27494_27546[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (3))){
var state_27461__$1 = state_27461;
var statearr_27495_27547 = state_27461__$1;
(statearr_27495_27547[(2)] = false);

(statearr_27495_27547[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (12))){
var inst_27459 = (state_27461[(2)]);
var state_27461__$1 = state_27461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27461__$1,inst_27459);
} else {
if((state_val_27462 === (2))){
var inst_27363 = (state_27461[(8)]);
var inst_27368 = inst_27363.cljs$lang$protocol_mask$partition0$;
var inst_27369 = (inst_27368 & (64));
var inst_27370 = inst_27363.cljs$core$ISeq$;
var inst_27371 = (cljs.core.PROTOCOL_SENTINEL === inst_27370);
var inst_27372 = ((inst_27369) || (inst_27371));
var state_27461__$1 = state_27461;
if(cljs.core.truth_(inst_27372)){
var statearr_27496_27548 = state_27461__$1;
(statearr_27496_27548[(1)] = (5));

} else {
var statearr_27497_27549 = state_27461__$1;
(statearr_27497_27549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (23))){
var inst_27420 = (state_27461[(14)]);
var inst_27426 = (inst_27420 == null);
var state_27461__$1 = state_27461;
if(cljs.core.truth_(inst_27426)){
var statearr_27498_27550 = state_27461__$1;
(statearr_27498_27550[(1)] = (26));

} else {
var statearr_27499_27551 = state_27461__$1;
(statearr_27499_27551[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (35))){
var inst_27446 = (state_27461[(2)]);
var state_27461__$1 = state_27461;
if(cljs.core.truth_(inst_27446)){
var statearr_27500_27552 = state_27461__$1;
(statearr_27500_27552[(1)] = (36));

} else {
var statearr_27501_27553 = state_27461__$1;
(statearr_27501_27553[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (19))){
var inst_27388 = (state_27461[(7)]);
var inst_27408 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27388);
var state_27461__$1 = state_27461;
var statearr_27502_27554 = state_27461__$1;
(statearr_27502_27554[(2)] = inst_27408);

(statearr_27502_27554[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (11))){
var inst_27388 = (state_27461[(7)]);
var inst_27392 = (inst_27388 == null);
var inst_27393 = cljs.core.not.call(null,inst_27392);
var state_27461__$1 = state_27461;
if(inst_27393){
var statearr_27503_27555 = state_27461__$1;
(statearr_27503_27555[(1)] = (13));

} else {
var statearr_27504_27556 = state_27461__$1;
(statearr_27504_27556[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (9))){
var inst_27363 = (state_27461[(8)]);
var state_27461__$1 = state_27461;
var statearr_27505_27557 = state_27461__$1;
(statearr_27505_27557[(2)] = inst_27363);

(statearr_27505_27557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (5))){
var state_27461__$1 = state_27461;
var statearr_27506_27558 = state_27461__$1;
(statearr_27506_27558[(2)] = true);

(statearr_27506_27558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (14))){
var state_27461__$1 = state_27461;
var statearr_27507_27559 = state_27461__$1;
(statearr_27507_27559[(2)] = false);

(statearr_27507_27559[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (26))){
var inst_27421 = (state_27461[(9)]);
var inst_27428 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27421);
var state_27461__$1 = state_27461;
var statearr_27508_27560 = state_27461__$1;
(statearr_27508_27560[(2)] = inst_27428);

(statearr_27508_27560[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (16))){
var state_27461__$1 = state_27461;
var statearr_27509_27561 = state_27461__$1;
(statearr_27509_27561[(2)] = true);

(statearr_27509_27561[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (38))){
var inst_27451 = (state_27461[(2)]);
var state_27461__$1 = state_27461;
var statearr_27510_27562 = state_27461__$1;
(statearr_27510_27562[(2)] = inst_27451);

(statearr_27510_27562[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (30))){
var inst_27413 = (state_27461[(13)]);
var inst_27421 = (state_27461[(9)]);
var inst_27412 = (state_27461[(10)]);
var inst_27438 = cljs.core.empty_QMARK_.call(null,inst_27412);
var inst_27439 = inst_27413.call(null,inst_27421);
var inst_27440 = cljs.core.not.call(null,inst_27439);
var inst_27441 = ((inst_27438) && (inst_27440));
var state_27461__$1 = state_27461;
var statearr_27511_27563 = state_27461__$1;
(statearr_27511_27563[(2)] = inst_27441);

(statearr_27511_27563[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (10))){
var inst_27363 = (state_27461[(8)]);
var inst_27384 = (state_27461[(2)]);
var inst_27385 = cljs.core.get.call(null,inst_27384,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27386 = cljs.core.get.call(null,inst_27384,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27387 = cljs.core.get.call(null,inst_27384,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27388 = inst_27363;
var state_27461__$1 = (function (){var statearr_27512 = state_27461;
(statearr_27512[(16)] = inst_27386);

(statearr_27512[(17)] = inst_27387);

(statearr_27512[(7)] = inst_27388);

(statearr_27512[(18)] = inst_27385);

return statearr_27512;
})();
var statearr_27513_27564 = state_27461__$1;
(statearr_27513_27564[(2)] = null);

(statearr_27513_27564[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (18))){
var inst_27403 = (state_27461[(2)]);
var state_27461__$1 = state_27461;
var statearr_27514_27565 = state_27461__$1;
(statearr_27514_27565[(2)] = inst_27403);

(statearr_27514_27565[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (37))){
var state_27461__$1 = state_27461;
var statearr_27515_27566 = state_27461__$1;
(statearr_27515_27566[(2)] = null);

(statearr_27515_27566[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (8))){
var inst_27363 = (state_27461[(8)]);
var inst_27381 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27363);
var state_27461__$1 = state_27461;
var statearr_27516_27567 = state_27461__$1;
(statearr_27516_27567[(2)] = inst_27381);

(statearr_27516_27567[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__26360__auto__ = null;
var cljs$core$async$mix_$_state_machine__26360__auto____0 = (function (){
var statearr_27517 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27517[(0)] = cljs$core$async$mix_$_state_machine__26360__auto__);

(statearr_27517[(1)] = (1));

return statearr_27517;
});
var cljs$core$async$mix_$_state_machine__26360__auto____1 = (function (state_27461){
while(true){
var ret_value__26361__auto__ = (function (){try{while(true){
var result__26362__auto__ = switch__26359__auto__.call(null,state_27461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26362__auto__;
}
break;
}
}catch (e27518){if((e27518 instanceof Object)){
var ex__26363__auto__ = e27518;
var statearr_27519_27568 = state_27461;
(statearr_27519_27568[(5)] = ex__26363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27569 = state_27461;
state_27461 = G__27569;
continue;
} else {
return ret_value__26361__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26360__auto__ = function(state_27461){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26360__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26360__auto____1.call(this,state_27461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26360__auto____0;
cljs$core$async$mix_$_state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26360__auto____1;
return cljs$core$async$mix_$_state_machine__26360__auto__;
})()
})();
var state__26456__auto__ = (function (){var statearr_27520 = f__26455__auto__.call(null);
(statearr_27520[(6)] = c__26454__auto___27521);

return statearr_27520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26456__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_27572 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_27572.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_27573 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_27573.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_27574 = (function() {
var G__27575 = null;
var G__27575__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__27575__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__27575 = function(p,v){
switch(arguments.length){
case 1:
return G__27575__1.call(this,p);
case 2:
return G__27575__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27575.cljs$core$IFn$_invoke$arity$1 = G__27575__1;
G__27575.cljs$core$IFn$_invoke$arity$2 = G__27575__2;
return G__27575;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__27571 = arguments.length;
switch (G__27571) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_27574.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_27574.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__27579 = arguments.length;
switch (G__27579) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__27577_SHARP_){
if(cljs.core.truth_(p1__27577_SHARP_.call(null,topic))){
return p1__27577_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27577_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27580 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27580 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27581){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27581 = meta27581;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27582,meta27581__$1){
var self__ = this;
var _27582__$1 = this;
return (new cljs.core.async.t_cljs$core$async27580(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27581__$1));
}));

(cljs.core.async.t_cljs$core$async27580.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27582){
var self__ = this;
var _27582__$1 = this;
return self__.meta27581;
}));

(cljs.core.async.t_cljs$core$async27580.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27580.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async27580.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27580.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async27580.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async27580.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async27580.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async27580.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27581","meta27581",-903299935,null)], null);
}));

(cljs.core.async.t_cljs$core$async27580.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27580.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27580");

(cljs.core.async.t_cljs$core$async27580.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27580");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27580.
 */
cljs.core.async.__GT_t_cljs$core$async27580 = (function cljs$core$async$__GT_t_cljs$core$async27580(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27581){
return (new cljs.core.async.t_cljs$core$async27580(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27581));
});

}

return (new cljs.core.async.t_cljs$core$async27580(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26454__auto___27700 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26455__auto__ = (function (){var switch__26359__auto__ = (function (state_27654){
var state_val_27655 = (state_27654[(1)]);
if((state_val_27655 === (7))){
var inst_27650 = (state_27654[(2)]);
var state_27654__$1 = state_27654;
var statearr_27656_27701 = state_27654__$1;
(statearr_27656_27701[(2)] = inst_27650);

(statearr_27656_27701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (20))){
var state_27654__$1 = state_27654;
var statearr_27657_27702 = state_27654__$1;
(statearr_27657_27702[(2)] = null);

(statearr_27657_27702[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (1))){
var state_27654__$1 = state_27654;
var statearr_27658_27703 = state_27654__$1;
(statearr_27658_27703[(2)] = null);

(statearr_27658_27703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (24))){
var inst_27633 = (state_27654[(7)]);
var inst_27642 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27633);
var state_27654__$1 = state_27654;
var statearr_27659_27704 = state_27654__$1;
(statearr_27659_27704[(2)] = inst_27642);

(statearr_27659_27704[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (4))){
var inst_27585 = (state_27654[(8)]);
var inst_27585__$1 = (state_27654[(2)]);
var inst_27586 = (inst_27585__$1 == null);
var state_27654__$1 = (function (){var statearr_27660 = state_27654;
(statearr_27660[(8)] = inst_27585__$1);

return statearr_27660;
})();
if(cljs.core.truth_(inst_27586)){
var statearr_27661_27705 = state_27654__$1;
(statearr_27661_27705[(1)] = (5));

} else {
var statearr_27662_27706 = state_27654__$1;
(statearr_27662_27706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (15))){
var inst_27627 = (state_27654[(2)]);
var state_27654__$1 = state_27654;
var statearr_27663_27707 = state_27654__$1;
(statearr_27663_27707[(2)] = inst_27627);

(statearr_27663_27707[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (21))){
var inst_27647 = (state_27654[(2)]);
var state_27654__$1 = (function (){var statearr_27664 = state_27654;
(statearr_27664[(9)] = inst_27647);

return statearr_27664;
})();
var statearr_27665_27708 = state_27654__$1;
(statearr_27665_27708[(2)] = null);

(statearr_27665_27708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (13))){
var inst_27609 = (state_27654[(10)]);
var inst_27611 = cljs.core.chunked_seq_QMARK_.call(null,inst_27609);
var state_27654__$1 = state_27654;
if(inst_27611){
var statearr_27666_27709 = state_27654__$1;
(statearr_27666_27709[(1)] = (16));

} else {
var statearr_27667_27710 = state_27654__$1;
(statearr_27667_27710[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (22))){
var inst_27639 = (state_27654[(2)]);
var state_27654__$1 = state_27654;
if(cljs.core.truth_(inst_27639)){
var statearr_27668_27711 = state_27654__$1;
(statearr_27668_27711[(1)] = (23));

} else {
var statearr_27669_27712 = state_27654__$1;
(statearr_27669_27712[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (6))){
var inst_27633 = (state_27654[(7)]);
var inst_27635 = (state_27654[(11)]);
var inst_27585 = (state_27654[(8)]);
var inst_27633__$1 = topic_fn.call(null,inst_27585);
var inst_27634 = cljs.core.deref.call(null,mults);
var inst_27635__$1 = cljs.core.get.call(null,inst_27634,inst_27633__$1);
var state_27654__$1 = (function (){var statearr_27670 = state_27654;
(statearr_27670[(7)] = inst_27633__$1);

(statearr_27670[(11)] = inst_27635__$1);

return statearr_27670;
})();
if(cljs.core.truth_(inst_27635__$1)){
var statearr_27671_27713 = state_27654__$1;
(statearr_27671_27713[(1)] = (19));

} else {
var statearr_27672_27714 = state_27654__$1;
(statearr_27672_27714[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (25))){
var inst_27644 = (state_27654[(2)]);
var state_27654__$1 = state_27654;
var statearr_27673_27715 = state_27654__$1;
(statearr_27673_27715[(2)] = inst_27644);

(statearr_27673_27715[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (17))){
var inst_27609 = (state_27654[(10)]);
var inst_27618 = cljs.core.first.call(null,inst_27609);
var inst_27619 = cljs.core.async.muxch_STAR_.call(null,inst_27618);
var inst_27620 = cljs.core.async.close_BANG_.call(null,inst_27619);
var inst_27621 = cljs.core.next.call(null,inst_27609);
var inst_27595 = inst_27621;
var inst_27596 = null;
var inst_27597 = (0);
var inst_27598 = (0);
var state_27654__$1 = (function (){var statearr_27674 = state_27654;
(statearr_27674[(12)] = inst_27598);

(statearr_27674[(13)] = inst_27620);

(statearr_27674[(14)] = inst_27597);

(statearr_27674[(15)] = inst_27596);

(statearr_27674[(16)] = inst_27595);

return statearr_27674;
})();
var statearr_27675_27716 = state_27654__$1;
(statearr_27675_27716[(2)] = null);

(statearr_27675_27716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (3))){
var inst_27652 = (state_27654[(2)]);
var state_27654__$1 = state_27654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27654__$1,inst_27652);
} else {
if((state_val_27655 === (12))){
var inst_27629 = (state_27654[(2)]);
var state_27654__$1 = state_27654;
var statearr_27676_27717 = state_27654__$1;
(statearr_27676_27717[(2)] = inst_27629);

(statearr_27676_27717[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (2))){
var state_27654__$1 = state_27654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27654__$1,(4),ch);
} else {
if((state_val_27655 === (23))){
var state_27654__$1 = state_27654;
var statearr_27677_27718 = state_27654__$1;
(statearr_27677_27718[(2)] = null);

(statearr_27677_27718[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (19))){
var inst_27635 = (state_27654[(11)]);
var inst_27585 = (state_27654[(8)]);
var inst_27637 = cljs.core.async.muxch_STAR_.call(null,inst_27635);
var state_27654__$1 = state_27654;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27654__$1,(22),inst_27637,inst_27585);
} else {
if((state_val_27655 === (11))){
var inst_27609 = (state_27654[(10)]);
var inst_27595 = (state_27654[(16)]);
var inst_27609__$1 = cljs.core.seq.call(null,inst_27595);
var state_27654__$1 = (function (){var statearr_27678 = state_27654;
(statearr_27678[(10)] = inst_27609__$1);

return statearr_27678;
})();
if(inst_27609__$1){
var statearr_27679_27719 = state_27654__$1;
(statearr_27679_27719[(1)] = (13));

} else {
var statearr_27680_27720 = state_27654__$1;
(statearr_27680_27720[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (9))){
var inst_27631 = (state_27654[(2)]);
var state_27654__$1 = state_27654;
var statearr_27681_27721 = state_27654__$1;
(statearr_27681_27721[(2)] = inst_27631);

(statearr_27681_27721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (5))){
var inst_27592 = cljs.core.deref.call(null,mults);
var inst_27593 = cljs.core.vals.call(null,inst_27592);
var inst_27594 = cljs.core.seq.call(null,inst_27593);
var inst_27595 = inst_27594;
var inst_27596 = null;
var inst_27597 = (0);
var inst_27598 = (0);
var state_27654__$1 = (function (){var statearr_27682 = state_27654;
(statearr_27682[(12)] = inst_27598);

(statearr_27682[(14)] = inst_27597);

(statearr_27682[(15)] = inst_27596);

(statearr_27682[(16)] = inst_27595);

return statearr_27682;
})();
var statearr_27683_27722 = state_27654__$1;
(statearr_27683_27722[(2)] = null);

(statearr_27683_27722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (14))){
var state_27654__$1 = state_27654;
var statearr_27687_27723 = state_27654__$1;
(statearr_27687_27723[(2)] = null);

(statearr_27687_27723[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (16))){
var inst_27609 = (state_27654[(10)]);
var inst_27613 = cljs.core.chunk_first.call(null,inst_27609);
var inst_27614 = cljs.core.chunk_rest.call(null,inst_27609);
var inst_27615 = cljs.core.count.call(null,inst_27613);
var inst_27595 = inst_27614;
var inst_27596 = inst_27613;
var inst_27597 = inst_27615;
var inst_27598 = (0);
var state_27654__$1 = (function (){var statearr_27688 = state_27654;
(statearr_27688[(12)] = inst_27598);

(statearr_27688[(14)] = inst_27597);

(statearr_27688[(15)] = inst_27596);

(statearr_27688[(16)] = inst_27595);

return statearr_27688;
})();
var statearr_27689_27724 = state_27654__$1;
(statearr_27689_27724[(2)] = null);

(statearr_27689_27724[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (10))){
var inst_27598 = (state_27654[(12)]);
var inst_27597 = (state_27654[(14)]);
var inst_27596 = (state_27654[(15)]);
var inst_27595 = (state_27654[(16)]);
var inst_27603 = cljs.core._nth.call(null,inst_27596,inst_27598);
var inst_27604 = cljs.core.async.muxch_STAR_.call(null,inst_27603);
var inst_27605 = cljs.core.async.close_BANG_.call(null,inst_27604);
var inst_27606 = (inst_27598 + (1));
var tmp27684 = inst_27597;
var tmp27685 = inst_27596;
var tmp27686 = inst_27595;
var inst_27595__$1 = tmp27686;
var inst_27596__$1 = tmp27685;
var inst_27597__$1 = tmp27684;
var inst_27598__$1 = inst_27606;
var state_27654__$1 = (function (){var statearr_27690 = state_27654;
(statearr_27690[(17)] = inst_27605);

(statearr_27690[(12)] = inst_27598__$1);

(statearr_27690[(14)] = inst_27597__$1);

(statearr_27690[(15)] = inst_27596__$1);

(statearr_27690[(16)] = inst_27595__$1);

return statearr_27690;
})();
var statearr_27691_27725 = state_27654__$1;
(statearr_27691_27725[(2)] = null);

(statearr_27691_27725[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (18))){
var inst_27624 = (state_27654[(2)]);
var state_27654__$1 = state_27654;
var statearr_27692_27726 = state_27654__$1;
(statearr_27692_27726[(2)] = inst_27624);

(statearr_27692_27726[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (8))){
var inst_27598 = (state_27654[(12)]);
var inst_27597 = (state_27654[(14)]);
var inst_27600 = (inst_27598 < inst_27597);
var inst_27601 = inst_27600;
var state_27654__$1 = state_27654;
if(cljs.core.truth_(inst_27601)){
var statearr_27693_27727 = state_27654__$1;
(statearr_27693_27727[(1)] = (10));

} else {
var statearr_27694_27728 = state_27654__$1;
(statearr_27694_27728[(1)] = (11));

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
var cljs$core$async$state_machine__26360__auto__ = null;
var cljs$core$async$state_machine__26360__auto____0 = (function (){
var statearr_27695 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27695[(0)] = cljs$core$async$state_machine__26360__auto__);

(statearr_27695[(1)] = (1));

return statearr_27695;
});
var cljs$core$async$state_machine__26360__auto____1 = (function (state_27654){
while(true){
var ret_value__26361__auto__ = (function (){try{while(true){
var result__26362__auto__ = switch__26359__auto__.call(null,state_27654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26362__auto__;
}
break;
}
}catch (e27696){if((e27696 instanceof Object)){
var ex__26363__auto__ = e27696;
var statearr_27697_27729 = state_27654;
(statearr_27697_27729[(5)] = ex__26363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27730 = state_27654;
state_27654 = G__27730;
continue;
} else {
return ret_value__26361__auto__;
}
break;
}
});
cljs$core$async$state_machine__26360__auto__ = function(state_27654){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26360__auto____1.call(this,state_27654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26360__auto____0;
cljs$core$async$state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26360__auto____1;
return cljs$core$async$state_machine__26360__auto__;
})()
})();
var state__26456__auto__ = (function (){var statearr_27698 = f__26455__auto__.call(null);
(statearr_27698[(6)] = c__26454__auto___27700);

return statearr_27698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26456__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__27732 = arguments.length;
switch (G__27732) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__27735 = arguments.length;
switch (G__27735) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__27738 = arguments.length;
switch (G__27738) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__26454__auto___27805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26455__auto__ = (function (){var switch__26359__auto__ = (function (state_27777){
var state_val_27778 = (state_27777[(1)]);
if((state_val_27778 === (7))){
var state_27777__$1 = state_27777;
var statearr_27779_27806 = state_27777__$1;
(statearr_27779_27806[(2)] = null);

(statearr_27779_27806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (1))){
var state_27777__$1 = state_27777;
var statearr_27780_27807 = state_27777__$1;
(statearr_27780_27807[(2)] = null);

(statearr_27780_27807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (4))){
var inst_27741 = (state_27777[(7)]);
var inst_27743 = (inst_27741 < cnt);
var state_27777__$1 = state_27777;
if(cljs.core.truth_(inst_27743)){
var statearr_27781_27808 = state_27777__$1;
(statearr_27781_27808[(1)] = (6));

} else {
var statearr_27782_27809 = state_27777__$1;
(statearr_27782_27809[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (15))){
var inst_27773 = (state_27777[(2)]);
var state_27777__$1 = state_27777;
var statearr_27783_27810 = state_27777__$1;
(statearr_27783_27810[(2)] = inst_27773);

(statearr_27783_27810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (13))){
var inst_27766 = cljs.core.async.close_BANG_.call(null,out);
var state_27777__$1 = state_27777;
var statearr_27784_27811 = state_27777__$1;
(statearr_27784_27811[(2)] = inst_27766);

(statearr_27784_27811[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (6))){
var state_27777__$1 = state_27777;
var statearr_27785_27812 = state_27777__$1;
(statearr_27785_27812[(2)] = null);

(statearr_27785_27812[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (3))){
var inst_27775 = (state_27777[(2)]);
var state_27777__$1 = state_27777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27777__$1,inst_27775);
} else {
if((state_val_27778 === (12))){
var inst_27763 = (state_27777[(8)]);
var inst_27763__$1 = (state_27777[(2)]);
var inst_27764 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27763__$1);
var state_27777__$1 = (function (){var statearr_27786 = state_27777;
(statearr_27786[(8)] = inst_27763__$1);

return statearr_27786;
})();
if(cljs.core.truth_(inst_27764)){
var statearr_27787_27813 = state_27777__$1;
(statearr_27787_27813[(1)] = (13));

} else {
var statearr_27788_27814 = state_27777__$1;
(statearr_27788_27814[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (2))){
var inst_27740 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27741 = (0);
var state_27777__$1 = (function (){var statearr_27789 = state_27777;
(statearr_27789[(7)] = inst_27741);

(statearr_27789[(9)] = inst_27740);

return statearr_27789;
})();
var statearr_27790_27815 = state_27777__$1;
(statearr_27790_27815[(2)] = null);

(statearr_27790_27815[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (11))){
var inst_27741 = (state_27777[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27777,(10),Object,null,(9));
var inst_27750 = chs__$1.call(null,inst_27741);
var inst_27751 = done.call(null,inst_27741);
var inst_27752 = cljs.core.async.take_BANG_.call(null,inst_27750,inst_27751);
var state_27777__$1 = state_27777;
var statearr_27791_27816 = state_27777__$1;
(statearr_27791_27816[(2)] = inst_27752);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27777__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (9))){
var inst_27741 = (state_27777[(7)]);
var inst_27754 = (state_27777[(2)]);
var inst_27755 = (inst_27741 + (1));
var inst_27741__$1 = inst_27755;
var state_27777__$1 = (function (){var statearr_27792 = state_27777;
(statearr_27792[(7)] = inst_27741__$1);

(statearr_27792[(10)] = inst_27754);

return statearr_27792;
})();
var statearr_27793_27817 = state_27777__$1;
(statearr_27793_27817[(2)] = null);

(statearr_27793_27817[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (5))){
var inst_27761 = (state_27777[(2)]);
var state_27777__$1 = (function (){var statearr_27794 = state_27777;
(statearr_27794[(11)] = inst_27761);

return statearr_27794;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27777__$1,(12),dchan);
} else {
if((state_val_27778 === (14))){
var inst_27763 = (state_27777[(8)]);
var inst_27768 = cljs.core.apply.call(null,f,inst_27763);
var state_27777__$1 = state_27777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27777__$1,(16),out,inst_27768);
} else {
if((state_val_27778 === (16))){
var inst_27770 = (state_27777[(2)]);
var state_27777__$1 = (function (){var statearr_27795 = state_27777;
(statearr_27795[(12)] = inst_27770);

return statearr_27795;
})();
var statearr_27796_27818 = state_27777__$1;
(statearr_27796_27818[(2)] = null);

(statearr_27796_27818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (10))){
var inst_27745 = (state_27777[(2)]);
var inst_27746 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27777__$1 = (function (){var statearr_27797 = state_27777;
(statearr_27797[(13)] = inst_27745);

return statearr_27797;
})();
var statearr_27798_27819 = state_27777__$1;
(statearr_27798_27819[(2)] = inst_27746);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27777__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (8))){
var inst_27759 = (state_27777[(2)]);
var state_27777__$1 = state_27777;
var statearr_27799_27820 = state_27777__$1;
(statearr_27799_27820[(2)] = inst_27759);

(statearr_27799_27820[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__26360__auto__ = null;
var cljs$core$async$state_machine__26360__auto____0 = (function (){
var statearr_27800 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27800[(0)] = cljs$core$async$state_machine__26360__auto__);

(statearr_27800[(1)] = (1));

return statearr_27800;
});
var cljs$core$async$state_machine__26360__auto____1 = (function (state_27777){
while(true){
var ret_value__26361__auto__ = (function (){try{while(true){
var result__26362__auto__ = switch__26359__auto__.call(null,state_27777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26362__auto__;
}
break;
}
}catch (e27801){if((e27801 instanceof Object)){
var ex__26363__auto__ = e27801;
var statearr_27802_27821 = state_27777;
(statearr_27802_27821[(5)] = ex__26363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27822 = state_27777;
state_27777 = G__27822;
continue;
} else {
return ret_value__26361__auto__;
}
break;
}
});
cljs$core$async$state_machine__26360__auto__ = function(state_27777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26360__auto____1.call(this,state_27777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26360__auto____0;
cljs$core$async$state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26360__auto____1;
return cljs$core$async$state_machine__26360__auto__;
})()
})();
var state__26456__auto__ = (function (){var statearr_27803 = f__26455__auto__.call(null);
(statearr_27803[(6)] = c__26454__auto___27805);

return statearr_27803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26456__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__27825 = arguments.length;
switch (G__27825) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26454__auto___27879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26455__auto__ = (function (){var switch__26359__auto__ = (function (state_27857){
var state_val_27858 = (state_27857[(1)]);
if((state_val_27858 === (7))){
var inst_27836 = (state_27857[(7)]);
var inst_27837 = (state_27857[(8)]);
var inst_27836__$1 = (state_27857[(2)]);
var inst_27837__$1 = cljs.core.nth.call(null,inst_27836__$1,(0),null);
var inst_27838 = cljs.core.nth.call(null,inst_27836__$1,(1),null);
var inst_27839 = (inst_27837__$1 == null);
var state_27857__$1 = (function (){var statearr_27859 = state_27857;
(statearr_27859[(9)] = inst_27838);

(statearr_27859[(7)] = inst_27836__$1);

(statearr_27859[(8)] = inst_27837__$1);

return statearr_27859;
})();
if(cljs.core.truth_(inst_27839)){
var statearr_27860_27880 = state_27857__$1;
(statearr_27860_27880[(1)] = (8));

} else {
var statearr_27861_27881 = state_27857__$1;
(statearr_27861_27881[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27858 === (1))){
var inst_27826 = cljs.core.vec.call(null,chs);
var inst_27827 = inst_27826;
var state_27857__$1 = (function (){var statearr_27862 = state_27857;
(statearr_27862[(10)] = inst_27827);

return statearr_27862;
})();
var statearr_27863_27882 = state_27857__$1;
(statearr_27863_27882[(2)] = null);

(statearr_27863_27882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27858 === (4))){
var inst_27827 = (state_27857[(10)]);
var state_27857__$1 = state_27857;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27857__$1,(7),inst_27827);
} else {
if((state_val_27858 === (6))){
var inst_27853 = (state_27857[(2)]);
var state_27857__$1 = state_27857;
var statearr_27864_27883 = state_27857__$1;
(statearr_27864_27883[(2)] = inst_27853);

(statearr_27864_27883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27858 === (3))){
var inst_27855 = (state_27857[(2)]);
var state_27857__$1 = state_27857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27857__$1,inst_27855);
} else {
if((state_val_27858 === (2))){
var inst_27827 = (state_27857[(10)]);
var inst_27829 = cljs.core.count.call(null,inst_27827);
var inst_27830 = (inst_27829 > (0));
var state_27857__$1 = state_27857;
if(cljs.core.truth_(inst_27830)){
var statearr_27866_27884 = state_27857__$1;
(statearr_27866_27884[(1)] = (4));

} else {
var statearr_27867_27885 = state_27857__$1;
(statearr_27867_27885[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27858 === (11))){
var inst_27827 = (state_27857[(10)]);
var inst_27846 = (state_27857[(2)]);
var tmp27865 = inst_27827;
var inst_27827__$1 = tmp27865;
var state_27857__$1 = (function (){var statearr_27868 = state_27857;
(statearr_27868[(11)] = inst_27846);

(statearr_27868[(10)] = inst_27827__$1);

return statearr_27868;
})();
var statearr_27869_27886 = state_27857__$1;
(statearr_27869_27886[(2)] = null);

(statearr_27869_27886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27858 === (9))){
var inst_27837 = (state_27857[(8)]);
var state_27857__$1 = state_27857;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27857__$1,(11),out,inst_27837);
} else {
if((state_val_27858 === (5))){
var inst_27851 = cljs.core.async.close_BANG_.call(null,out);
var state_27857__$1 = state_27857;
var statearr_27870_27887 = state_27857__$1;
(statearr_27870_27887[(2)] = inst_27851);

(statearr_27870_27887[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27858 === (10))){
var inst_27849 = (state_27857[(2)]);
var state_27857__$1 = state_27857;
var statearr_27871_27888 = state_27857__$1;
(statearr_27871_27888[(2)] = inst_27849);

(statearr_27871_27888[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27858 === (8))){
var inst_27838 = (state_27857[(9)]);
var inst_27836 = (state_27857[(7)]);
var inst_27837 = (state_27857[(8)]);
var inst_27827 = (state_27857[(10)]);
var inst_27841 = (function (){var cs = inst_27827;
var vec__27832 = inst_27836;
var v = inst_27837;
var c = inst_27838;
return (function (p1__27823_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27823_SHARP_);
});
})();
var inst_27842 = cljs.core.filterv.call(null,inst_27841,inst_27827);
var inst_27827__$1 = inst_27842;
var state_27857__$1 = (function (){var statearr_27872 = state_27857;
(statearr_27872[(10)] = inst_27827__$1);

return statearr_27872;
})();
var statearr_27873_27889 = state_27857__$1;
(statearr_27873_27889[(2)] = null);

(statearr_27873_27889[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__26360__auto__ = null;
var cljs$core$async$state_machine__26360__auto____0 = (function (){
var statearr_27874 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27874[(0)] = cljs$core$async$state_machine__26360__auto__);

(statearr_27874[(1)] = (1));

return statearr_27874;
});
var cljs$core$async$state_machine__26360__auto____1 = (function (state_27857){
while(true){
var ret_value__26361__auto__ = (function (){try{while(true){
var result__26362__auto__ = switch__26359__auto__.call(null,state_27857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26362__auto__;
}
break;
}
}catch (e27875){if((e27875 instanceof Object)){
var ex__26363__auto__ = e27875;
var statearr_27876_27890 = state_27857;
(statearr_27876_27890[(5)] = ex__26363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27891 = state_27857;
state_27857 = G__27891;
continue;
} else {
return ret_value__26361__auto__;
}
break;
}
});
cljs$core$async$state_machine__26360__auto__ = function(state_27857){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26360__auto____1.call(this,state_27857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26360__auto____0;
cljs$core$async$state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26360__auto____1;
return cljs$core$async$state_machine__26360__auto__;
})()
})();
var state__26456__auto__ = (function (){var statearr_27877 = f__26455__auto__.call(null);
(statearr_27877[(6)] = c__26454__auto___27879);

return statearr_27877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26456__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__27893 = arguments.length;
switch (G__27893) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26454__auto___27938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26455__auto__ = (function (){var switch__26359__auto__ = (function (state_27917){
var state_val_27918 = (state_27917[(1)]);
if((state_val_27918 === (7))){
var inst_27899 = (state_27917[(7)]);
var inst_27899__$1 = (state_27917[(2)]);
var inst_27900 = (inst_27899__$1 == null);
var inst_27901 = cljs.core.not.call(null,inst_27900);
var state_27917__$1 = (function (){var statearr_27919 = state_27917;
(statearr_27919[(7)] = inst_27899__$1);

return statearr_27919;
})();
if(inst_27901){
var statearr_27920_27939 = state_27917__$1;
(statearr_27920_27939[(1)] = (8));

} else {
var statearr_27921_27940 = state_27917__$1;
(statearr_27921_27940[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (1))){
var inst_27894 = (0);
var state_27917__$1 = (function (){var statearr_27922 = state_27917;
(statearr_27922[(8)] = inst_27894);

return statearr_27922;
})();
var statearr_27923_27941 = state_27917__$1;
(statearr_27923_27941[(2)] = null);

(statearr_27923_27941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (4))){
var state_27917__$1 = state_27917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27917__$1,(7),ch);
} else {
if((state_val_27918 === (6))){
var inst_27912 = (state_27917[(2)]);
var state_27917__$1 = state_27917;
var statearr_27924_27942 = state_27917__$1;
(statearr_27924_27942[(2)] = inst_27912);

(statearr_27924_27942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (3))){
var inst_27914 = (state_27917[(2)]);
var inst_27915 = cljs.core.async.close_BANG_.call(null,out);
var state_27917__$1 = (function (){var statearr_27925 = state_27917;
(statearr_27925[(9)] = inst_27914);

return statearr_27925;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27917__$1,inst_27915);
} else {
if((state_val_27918 === (2))){
var inst_27894 = (state_27917[(8)]);
var inst_27896 = (inst_27894 < n);
var state_27917__$1 = state_27917;
if(cljs.core.truth_(inst_27896)){
var statearr_27926_27943 = state_27917__$1;
(statearr_27926_27943[(1)] = (4));

} else {
var statearr_27927_27944 = state_27917__$1;
(statearr_27927_27944[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (11))){
var inst_27894 = (state_27917[(8)]);
var inst_27904 = (state_27917[(2)]);
var inst_27905 = (inst_27894 + (1));
var inst_27894__$1 = inst_27905;
var state_27917__$1 = (function (){var statearr_27928 = state_27917;
(statearr_27928[(8)] = inst_27894__$1);

(statearr_27928[(10)] = inst_27904);

return statearr_27928;
})();
var statearr_27929_27945 = state_27917__$1;
(statearr_27929_27945[(2)] = null);

(statearr_27929_27945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (9))){
var state_27917__$1 = state_27917;
var statearr_27930_27946 = state_27917__$1;
(statearr_27930_27946[(2)] = null);

(statearr_27930_27946[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (5))){
var state_27917__$1 = state_27917;
var statearr_27931_27947 = state_27917__$1;
(statearr_27931_27947[(2)] = null);

(statearr_27931_27947[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (10))){
var inst_27909 = (state_27917[(2)]);
var state_27917__$1 = state_27917;
var statearr_27932_27948 = state_27917__$1;
(statearr_27932_27948[(2)] = inst_27909);

(statearr_27932_27948[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (8))){
var inst_27899 = (state_27917[(7)]);
var state_27917__$1 = state_27917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27917__$1,(11),out,inst_27899);
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
});
return (function() {
var cljs$core$async$state_machine__26360__auto__ = null;
var cljs$core$async$state_machine__26360__auto____0 = (function (){
var statearr_27933 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27933[(0)] = cljs$core$async$state_machine__26360__auto__);

(statearr_27933[(1)] = (1));

return statearr_27933;
});
var cljs$core$async$state_machine__26360__auto____1 = (function (state_27917){
while(true){
var ret_value__26361__auto__ = (function (){try{while(true){
var result__26362__auto__ = switch__26359__auto__.call(null,state_27917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26362__auto__;
}
break;
}
}catch (e27934){if((e27934 instanceof Object)){
var ex__26363__auto__ = e27934;
var statearr_27935_27949 = state_27917;
(statearr_27935_27949[(5)] = ex__26363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27950 = state_27917;
state_27917 = G__27950;
continue;
} else {
return ret_value__26361__auto__;
}
break;
}
});
cljs$core$async$state_machine__26360__auto__ = function(state_27917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26360__auto____1.call(this,state_27917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26360__auto____0;
cljs$core$async$state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26360__auto____1;
return cljs$core$async$state_machine__26360__auto__;
})()
})();
var state__26456__auto__ = (function (){var statearr_27936 = f__26455__auto__.call(null);
(statearr_27936[(6)] = c__26454__auto___27938);

return statearr_27936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26456__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27952 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27952 = (function (f,ch,meta27953){
this.f = f;
this.ch = ch;
this.meta27953 = meta27953;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27954,meta27953__$1){
var self__ = this;
var _27954__$1 = this;
return (new cljs.core.async.t_cljs$core$async27952(self__.f,self__.ch,meta27953__$1));
}));

(cljs.core.async.t_cljs$core$async27952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27954){
var self__ = this;
var _27954__$1 = this;
return self__.meta27953;
}));

(cljs.core.async.t_cljs$core$async27952.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27952.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27952.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27952.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27952.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27955 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27955 = (function (f,ch,meta27953,_,fn1,meta27956){
this.f = f;
this.ch = ch;
this.meta27953 = meta27953;
this._ = _;
this.fn1 = fn1;
this.meta27956 = meta27956;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27957,meta27956__$1){
var self__ = this;
var _27957__$1 = this;
return (new cljs.core.async.t_cljs$core$async27955(self__.f,self__.ch,self__.meta27953,self__._,self__.fn1,meta27956__$1));
}));

(cljs.core.async.t_cljs$core$async27955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27957){
var self__ = this;
var _27957__$1 = this;
return self__.meta27956;
}));

(cljs.core.async.t_cljs$core$async27955.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27955.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async27955.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27955.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__27951_SHARP_){
return f1.call(null,(((p1__27951_SHARP_ == null))?null:self__.f.call(null,p1__27951_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async27955.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27953","meta27953",-1324102445,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27952","cljs.core.async/t_cljs$core$async27952",630847165,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27956","meta27956",1373726246,null)], null);
}));

(cljs.core.async.t_cljs$core$async27955.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27955.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27955");

(cljs.core.async.t_cljs$core$async27955.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27955");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27955.
 */
cljs.core.async.__GT_t_cljs$core$async27955 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27955(f__$1,ch__$1,meta27953__$1,___$2,fn1__$1,meta27956){
return (new cljs.core.async.t_cljs$core$async27955(f__$1,ch__$1,meta27953__$1,___$2,fn1__$1,meta27956));
});

}

return (new cljs.core.async.t_cljs$core$async27955(self__.f,self__.ch,self__.meta27953,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async27952.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27952.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async27952.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27953","meta27953",-1324102445,null)], null);
}));

(cljs.core.async.t_cljs$core$async27952.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27952.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27952");

(cljs.core.async.t_cljs$core$async27952.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27952");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27952.
 */
cljs.core.async.__GT_t_cljs$core$async27952 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27952(f__$1,ch__$1,meta27953){
return (new cljs.core.async.t_cljs$core$async27952(f__$1,ch__$1,meta27953));
});

}

return (new cljs.core.async.t_cljs$core$async27952(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27958 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27958 = (function (f,ch,meta27959){
this.f = f;
this.ch = ch;
this.meta27959 = meta27959;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27960,meta27959__$1){
var self__ = this;
var _27960__$1 = this;
return (new cljs.core.async.t_cljs$core$async27958(self__.f,self__.ch,meta27959__$1));
}));

(cljs.core.async.t_cljs$core$async27958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27960){
var self__ = this;
var _27960__$1 = this;
return self__.meta27959;
}));

(cljs.core.async.t_cljs$core$async27958.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27958.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27958.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27958.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async27958.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27958.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async27958.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27959","meta27959",-1372300490,null)], null);
}));

(cljs.core.async.t_cljs$core$async27958.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27958.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27958");

(cljs.core.async.t_cljs$core$async27958.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27958");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27958.
 */
cljs.core.async.__GT_t_cljs$core$async27958 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27958(f__$1,ch__$1,meta27959){
return (new cljs.core.async.t_cljs$core$async27958(f__$1,ch__$1,meta27959));
});

}

return (new cljs.core.async.t_cljs$core$async27958(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27961 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27961 = (function (p,ch,meta27962){
this.p = p;
this.ch = ch;
this.meta27962 = meta27962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27963,meta27962__$1){
var self__ = this;
var _27963__$1 = this;
return (new cljs.core.async.t_cljs$core$async27961(self__.p,self__.ch,meta27962__$1));
}));

(cljs.core.async.t_cljs$core$async27961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27963){
var self__ = this;
var _27963__$1 = this;
return self__.meta27962;
}));

(cljs.core.async.t_cljs$core$async27961.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27961.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27961.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27961.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27961.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async27961.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27961.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async27961.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27962","meta27962",-1929110701,null)], null);
}));

(cljs.core.async.t_cljs$core$async27961.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27961.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27961");

(cljs.core.async.t_cljs$core$async27961.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27961");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27961.
 */
cljs.core.async.__GT_t_cljs$core$async27961 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27961(p__$1,ch__$1,meta27962){
return (new cljs.core.async.t_cljs$core$async27961(p__$1,ch__$1,meta27962));
});

}

return (new cljs.core.async.t_cljs$core$async27961(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__27965 = arguments.length;
switch (G__27965) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26454__auto___28005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26455__auto__ = (function (){var switch__26359__auto__ = (function (state_27986){
var state_val_27987 = (state_27986[(1)]);
if((state_val_27987 === (7))){
var inst_27982 = (state_27986[(2)]);
var state_27986__$1 = state_27986;
var statearr_27988_28006 = state_27986__$1;
(statearr_27988_28006[(2)] = inst_27982);

(statearr_27988_28006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27987 === (1))){
var state_27986__$1 = state_27986;
var statearr_27989_28007 = state_27986__$1;
(statearr_27989_28007[(2)] = null);

(statearr_27989_28007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27987 === (4))){
var inst_27968 = (state_27986[(7)]);
var inst_27968__$1 = (state_27986[(2)]);
var inst_27969 = (inst_27968__$1 == null);
var state_27986__$1 = (function (){var statearr_27990 = state_27986;
(statearr_27990[(7)] = inst_27968__$1);

return statearr_27990;
})();
if(cljs.core.truth_(inst_27969)){
var statearr_27991_28008 = state_27986__$1;
(statearr_27991_28008[(1)] = (5));

} else {
var statearr_27992_28009 = state_27986__$1;
(statearr_27992_28009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27987 === (6))){
var inst_27968 = (state_27986[(7)]);
var inst_27973 = p.call(null,inst_27968);
var state_27986__$1 = state_27986;
if(cljs.core.truth_(inst_27973)){
var statearr_27993_28010 = state_27986__$1;
(statearr_27993_28010[(1)] = (8));

} else {
var statearr_27994_28011 = state_27986__$1;
(statearr_27994_28011[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27987 === (3))){
var inst_27984 = (state_27986[(2)]);
var state_27986__$1 = state_27986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27986__$1,inst_27984);
} else {
if((state_val_27987 === (2))){
var state_27986__$1 = state_27986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27986__$1,(4),ch);
} else {
if((state_val_27987 === (11))){
var inst_27976 = (state_27986[(2)]);
var state_27986__$1 = state_27986;
var statearr_27995_28012 = state_27986__$1;
(statearr_27995_28012[(2)] = inst_27976);

(statearr_27995_28012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27987 === (9))){
var state_27986__$1 = state_27986;
var statearr_27996_28013 = state_27986__$1;
(statearr_27996_28013[(2)] = null);

(statearr_27996_28013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27987 === (5))){
var inst_27971 = cljs.core.async.close_BANG_.call(null,out);
var state_27986__$1 = state_27986;
var statearr_27997_28014 = state_27986__$1;
(statearr_27997_28014[(2)] = inst_27971);

(statearr_27997_28014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27987 === (10))){
var inst_27979 = (state_27986[(2)]);
var state_27986__$1 = (function (){var statearr_27998 = state_27986;
(statearr_27998[(8)] = inst_27979);

return statearr_27998;
})();
var statearr_27999_28015 = state_27986__$1;
(statearr_27999_28015[(2)] = null);

(statearr_27999_28015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27987 === (8))){
var inst_27968 = (state_27986[(7)]);
var state_27986__$1 = state_27986;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27986__$1,(11),out,inst_27968);
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
});
return (function() {
var cljs$core$async$state_machine__26360__auto__ = null;
var cljs$core$async$state_machine__26360__auto____0 = (function (){
var statearr_28000 = [null,null,null,null,null,null,null,null,null];
(statearr_28000[(0)] = cljs$core$async$state_machine__26360__auto__);

(statearr_28000[(1)] = (1));

return statearr_28000;
});
var cljs$core$async$state_machine__26360__auto____1 = (function (state_27986){
while(true){
var ret_value__26361__auto__ = (function (){try{while(true){
var result__26362__auto__ = switch__26359__auto__.call(null,state_27986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26362__auto__;
}
break;
}
}catch (e28001){if((e28001 instanceof Object)){
var ex__26363__auto__ = e28001;
var statearr_28002_28016 = state_27986;
(statearr_28002_28016[(5)] = ex__26363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28017 = state_27986;
state_27986 = G__28017;
continue;
} else {
return ret_value__26361__auto__;
}
break;
}
});
cljs$core$async$state_machine__26360__auto__ = function(state_27986){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26360__auto____1.call(this,state_27986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26360__auto____0;
cljs$core$async$state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26360__auto____1;
return cljs$core$async$state_machine__26360__auto__;
})()
})();
var state__26456__auto__ = (function (){var statearr_28003 = f__26455__auto__.call(null);
(statearr_28003[(6)] = c__26454__auto___28005);

return statearr_28003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26456__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28019 = arguments.length;
switch (G__28019) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26455__auto__ = (function (){var switch__26359__auto__ = (function (state_28082){
var state_val_28083 = (state_28082[(1)]);
if((state_val_28083 === (7))){
var inst_28078 = (state_28082[(2)]);
var state_28082__$1 = state_28082;
var statearr_28084_28122 = state_28082__$1;
(statearr_28084_28122[(2)] = inst_28078);

(statearr_28084_28122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28083 === (20))){
var inst_28048 = (state_28082[(7)]);
var inst_28059 = (state_28082[(2)]);
var inst_28060 = cljs.core.next.call(null,inst_28048);
var inst_28034 = inst_28060;
var inst_28035 = null;
var inst_28036 = (0);
var inst_28037 = (0);
var state_28082__$1 = (function (){var statearr_28085 = state_28082;
(statearr_28085[(8)] = inst_28037);

(statearr_28085[(9)] = inst_28036);

(statearr_28085[(10)] = inst_28059);

(statearr_28085[(11)] = inst_28035);

(statearr_28085[(12)] = inst_28034);

return statearr_28085;
})();
var statearr_28086_28123 = state_28082__$1;
(statearr_28086_28123[(2)] = null);

(statearr_28086_28123[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28083 === (1))){
var state_28082__$1 = state_28082;
var statearr_28087_28124 = state_28082__$1;
(statearr_28087_28124[(2)] = null);

(statearr_28087_28124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28083 === (4))){
var inst_28023 = (state_28082[(13)]);
var inst_28023__$1 = (state_28082[(2)]);
var inst_28024 = (inst_28023__$1 == null);
var state_28082__$1 = (function (){var statearr_28088 = state_28082;
(statearr_28088[(13)] = inst_28023__$1);

return statearr_28088;
})();
if(cljs.core.truth_(inst_28024)){
var statearr_28089_28125 = state_28082__$1;
(statearr_28089_28125[(1)] = (5));

} else {
var statearr_28090_28126 = state_28082__$1;
(statearr_28090_28126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28083 === (15))){
var state_28082__$1 = state_28082;
var statearr_28094_28127 = state_28082__$1;
(statearr_28094_28127[(2)] = null);

(statearr_28094_28127[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28083 === (21))){
var state_28082__$1 = state_28082;
var statearr_28095_28128 = state_28082__$1;
(statearr_28095_28128[(2)] = null);

(statearr_28095_28128[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28083 === (13))){
var inst_28037 = (state_28082[(8)]);
var inst_28036 = (state_28082[(9)]);
var inst_28035 = (state_28082[(11)]);
var inst_28034 = (state_28082[(12)]);
var inst_28044 = (state_28082[(2)]);
var inst_28045 = (inst_28037 + (1));
var tmp28091 = inst_28036;
var tmp28092 = inst_28035;
var tmp28093 = inst_28034;
var inst_28034__$1 = tmp28093;
var inst_28035__$1 = tmp28092;
var inst_28036__$1 = tmp28091;
var inst_28037__$1 = inst_28045;
var state_28082__$1 = (function (){var statearr_28096 = state_28082;
(statearr_28096[(8)] = inst_28037__$1);

(statearr_28096[(9)] = inst_28036__$1);

(statearr_28096[(11)] = inst_28035__$1);

(statearr_28096[(14)] = inst_28044);

(statearr_28096[(12)] = inst_28034__$1);

return statearr_28096;
})();
var statearr_28097_28129 = state_28082__$1;
(statearr_28097_28129[(2)] = null);

(statearr_28097_28129[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28083 === (22))){
var state_28082__$1 = state_28082;
var statearr_28098_28130 = state_28082__$1;
(statearr_28098_28130[(2)] = null);

(statearr_28098_28130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28083 === (6))){
var inst_28023 = (state_28082[(13)]);
var inst_28032 = f.call(null,inst_28023);
var inst_28033 = cljs.core.seq.call(null,inst_28032);
var inst_28034 = inst_28033;
var inst_28035 = null;
var inst_28036 = (0);
var inst_28037 = (0);
var state_28082__$1 = (function (){var statearr_28099 = state_28082;
(statearr_28099[(8)] = inst_28037);

(statearr_28099[(9)] = inst_28036);

(statearr_28099[(11)] = inst_28035);

(statearr_28099[(12)] = inst_28034);

return statearr_28099;
})();
var statearr_28100_28131 = state_28082__$1;
(statearr_28100_28131[(2)] = null);

(statearr_28100_28131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28083 === (17))){
var inst_28048 = (state_28082[(7)]);
var inst_28052 = cljs.core.chunk_first.call(null,inst_28048);
var inst_28053 = cljs.core.chunk_rest.call(null,inst_28048);
var inst_28054 = cljs.core.count.call(null,inst_28052);
var inst_28034 = inst_28053;
var inst_28035 = inst_28052;
var inst_28036 = inst_28054;
var inst_28037 = (0);
var state_28082__$1 = (function (){var statearr_28101 = state_28082;
(statearr_28101[(8)] = inst_28037);

(statearr_28101[(9)] = inst_28036);

(statearr_28101[(11)] = inst_28035);

(statearr_28101[(12)] = inst_28034);

return statearr_28101;
})();
var statearr_28102_28132 = state_28082__$1;
(statearr_28102_28132[(2)] = null);

(statearr_28102_28132[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28083 === (3))){
var inst_28080 = (state_28082[(2)]);
var state_28082__$1 = state_28082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28082__$1,inst_28080);
} else {
if((state_val_28083 === (12))){
var inst_28068 = (state_28082[(2)]);
var state_28082__$1 = state_28082;
var statearr_28103_28133 = state_28082__$1;
(statearr_28103_28133[(2)] = inst_28068);

(statearr_28103_28133[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28083 === (2))){
var state_28082__$1 = state_28082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28082__$1,(4),in$);
} else {
if((state_val_28083 === (23))){
var inst_28076 = (state_28082[(2)]);
var state_28082__$1 = state_28082;
var statearr_28104_28134 = state_28082__$1;
(statearr_28104_28134[(2)] = inst_28076);

(statearr_28104_28134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28083 === (19))){
var inst_28063 = (state_28082[(2)]);
var state_28082__$1 = state_28082;
var statearr_28105_28135 = state_28082__$1;
(statearr_28105_28135[(2)] = inst_28063);

(statearr_28105_28135[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28083 === (11))){
var inst_28048 = (state_28082[(7)]);
var inst_28034 = (state_28082[(12)]);
var inst_28048__$1 = cljs.core.seq.call(null,inst_28034);
var state_28082__$1 = (function (){var statearr_28106 = state_28082;
(statearr_28106[(7)] = inst_28048__$1);

return statearr_28106;
})();
if(inst_28048__$1){
var statearr_28107_28136 = state_28082__$1;
(statearr_28107_28136[(1)] = (14));

} else {
var statearr_28108_28137 = state_28082__$1;
(statearr_28108_28137[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28083 === (9))){
var inst_28070 = (state_28082[(2)]);
var inst_28071 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28082__$1 = (function (){var statearr_28109 = state_28082;
(statearr_28109[(15)] = inst_28070);

return statearr_28109;
})();
if(cljs.core.truth_(inst_28071)){
var statearr_28110_28138 = state_28082__$1;
(statearr_28110_28138[(1)] = (21));

} else {
var statearr_28111_28139 = state_28082__$1;
(statearr_28111_28139[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28083 === (5))){
var inst_28026 = cljs.core.async.close_BANG_.call(null,out);
var state_28082__$1 = state_28082;
var statearr_28112_28140 = state_28082__$1;
(statearr_28112_28140[(2)] = inst_28026);

(statearr_28112_28140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28083 === (14))){
var inst_28048 = (state_28082[(7)]);
var inst_28050 = cljs.core.chunked_seq_QMARK_.call(null,inst_28048);
var state_28082__$1 = state_28082;
if(inst_28050){
var statearr_28113_28141 = state_28082__$1;
(statearr_28113_28141[(1)] = (17));

} else {
var statearr_28114_28142 = state_28082__$1;
(statearr_28114_28142[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28083 === (16))){
var inst_28066 = (state_28082[(2)]);
var state_28082__$1 = state_28082;
var statearr_28115_28143 = state_28082__$1;
(statearr_28115_28143[(2)] = inst_28066);

(statearr_28115_28143[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28083 === (10))){
var inst_28037 = (state_28082[(8)]);
var inst_28035 = (state_28082[(11)]);
var inst_28042 = cljs.core._nth.call(null,inst_28035,inst_28037);
var state_28082__$1 = state_28082;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28082__$1,(13),out,inst_28042);
} else {
if((state_val_28083 === (18))){
var inst_28048 = (state_28082[(7)]);
var inst_28057 = cljs.core.first.call(null,inst_28048);
var state_28082__$1 = state_28082;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28082__$1,(20),out,inst_28057);
} else {
if((state_val_28083 === (8))){
var inst_28037 = (state_28082[(8)]);
var inst_28036 = (state_28082[(9)]);
var inst_28039 = (inst_28037 < inst_28036);
var inst_28040 = inst_28039;
var state_28082__$1 = state_28082;
if(cljs.core.truth_(inst_28040)){
var statearr_28116_28144 = state_28082__$1;
(statearr_28116_28144[(1)] = (10));

} else {
var statearr_28117_28145 = state_28082__$1;
(statearr_28117_28145[(1)] = (11));

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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26360__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26360__auto____0 = (function (){
var statearr_28118 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28118[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26360__auto__);

(statearr_28118[(1)] = (1));

return statearr_28118;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26360__auto____1 = (function (state_28082){
while(true){
var ret_value__26361__auto__ = (function (){try{while(true){
var result__26362__auto__ = switch__26359__auto__.call(null,state_28082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26362__auto__;
}
break;
}
}catch (e28119){if((e28119 instanceof Object)){
var ex__26363__auto__ = e28119;
var statearr_28120_28146 = state_28082;
(statearr_28120_28146[(5)] = ex__26363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28147 = state_28082;
state_28082 = G__28147;
continue;
} else {
return ret_value__26361__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26360__auto__ = function(state_28082){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26360__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26360__auto____1.call(this,state_28082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26360__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26360__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26360__auto__;
})()
})();
var state__26456__auto__ = (function (){var statearr_28121 = f__26455__auto__.call(null);
(statearr_28121[(6)] = c__26454__auto__);

return statearr_28121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26456__auto__);
}));

return c__26454__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28149 = arguments.length;
switch (G__28149) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__28152 = arguments.length;
switch (G__28152) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__28155 = arguments.length;
switch (G__28155) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26454__auto___28202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26455__auto__ = (function (){var switch__26359__auto__ = (function (state_28179){
var state_val_28180 = (state_28179[(1)]);
if((state_val_28180 === (7))){
var inst_28174 = (state_28179[(2)]);
var state_28179__$1 = state_28179;
var statearr_28181_28203 = state_28179__$1;
(statearr_28181_28203[(2)] = inst_28174);

(statearr_28181_28203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28180 === (1))){
var inst_28156 = null;
var state_28179__$1 = (function (){var statearr_28182 = state_28179;
(statearr_28182[(7)] = inst_28156);

return statearr_28182;
})();
var statearr_28183_28204 = state_28179__$1;
(statearr_28183_28204[(2)] = null);

(statearr_28183_28204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28180 === (4))){
var inst_28159 = (state_28179[(8)]);
var inst_28159__$1 = (state_28179[(2)]);
var inst_28160 = (inst_28159__$1 == null);
var inst_28161 = cljs.core.not.call(null,inst_28160);
var state_28179__$1 = (function (){var statearr_28184 = state_28179;
(statearr_28184[(8)] = inst_28159__$1);

return statearr_28184;
})();
if(inst_28161){
var statearr_28185_28205 = state_28179__$1;
(statearr_28185_28205[(1)] = (5));

} else {
var statearr_28186_28206 = state_28179__$1;
(statearr_28186_28206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28180 === (6))){
var state_28179__$1 = state_28179;
var statearr_28187_28207 = state_28179__$1;
(statearr_28187_28207[(2)] = null);

(statearr_28187_28207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28180 === (3))){
var inst_28176 = (state_28179[(2)]);
var inst_28177 = cljs.core.async.close_BANG_.call(null,out);
var state_28179__$1 = (function (){var statearr_28188 = state_28179;
(statearr_28188[(9)] = inst_28176);

return statearr_28188;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28179__$1,inst_28177);
} else {
if((state_val_28180 === (2))){
var state_28179__$1 = state_28179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28179__$1,(4),ch);
} else {
if((state_val_28180 === (11))){
var inst_28159 = (state_28179[(8)]);
var inst_28168 = (state_28179[(2)]);
var inst_28156 = inst_28159;
var state_28179__$1 = (function (){var statearr_28189 = state_28179;
(statearr_28189[(7)] = inst_28156);

(statearr_28189[(10)] = inst_28168);

return statearr_28189;
})();
var statearr_28190_28208 = state_28179__$1;
(statearr_28190_28208[(2)] = null);

(statearr_28190_28208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28180 === (9))){
var inst_28159 = (state_28179[(8)]);
var state_28179__$1 = state_28179;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28179__$1,(11),out,inst_28159);
} else {
if((state_val_28180 === (5))){
var inst_28159 = (state_28179[(8)]);
var inst_28156 = (state_28179[(7)]);
var inst_28163 = cljs.core._EQ_.call(null,inst_28159,inst_28156);
var state_28179__$1 = state_28179;
if(inst_28163){
var statearr_28192_28209 = state_28179__$1;
(statearr_28192_28209[(1)] = (8));

} else {
var statearr_28193_28210 = state_28179__$1;
(statearr_28193_28210[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28180 === (10))){
var inst_28171 = (state_28179[(2)]);
var state_28179__$1 = state_28179;
var statearr_28194_28211 = state_28179__$1;
(statearr_28194_28211[(2)] = inst_28171);

(statearr_28194_28211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28180 === (8))){
var inst_28156 = (state_28179[(7)]);
var tmp28191 = inst_28156;
var inst_28156__$1 = tmp28191;
var state_28179__$1 = (function (){var statearr_28195 = state_28179;
(statearr_28195[(7)] = inst_28156__$1);

return statearr_28195;
})();
var statearr_28196_28212 = state_28179__$1;
(statearr_28196_28212[(2)] = null);

(statearr_28196_28212[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__26360__auto__ = null;
var cljs$core$async$state_machine__26360__auto____0 = (function (){
var statearr_28197 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28197[(0)] = cljs$core$async$state_machine__26360__auto__);

(statearr_28197[(1)] = (1));

return statearr_28197;
});
var cljs$core$async$state_machine__26360__auto____1 = (function (state_28179){
while(true){
var ret_value__26361__auto__ = (function (){try{while(true){
var result__26362__auto__ = switch__26359__auto__.call(null,state_28179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26362__auto__;
}
break;
}
}catch (e28198){if((e28198 instanceof Object)){
var ex__26363__auto__ = e28198;
var statearr_28199_28213 = state_28179;
(statearr_28199_28213[(5)] = ex__26363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28214 = state_28179;
state_28179 = G__28214;
continue;
} else {
return ret_value__26361__auto__;
}
break;
}
});
cljs$core$async$state_machine__26360__auto__ = function(state_28179){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26360__auto____1.call(this,state_28179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26360__auto____0;
cljs$core$async$state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26360__auto____1;
return cljs$core$async$state_machine__26360__auto__;
})()
})();
var state__26456__auto__ = (function (){var statearr_28200 = f__26455__auto__.call(null);
(statearr_28200[(6)] = c__26454__auto___28202);

return statearr_28200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26456__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28216 = arguments.length;
switch (G__28216) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26454__auto___28282 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26455__auto__ = (function (){var switch__26359__auto__ = (function (state_28254){
var state_val_28255 = (state_28254[(1)]);
if((state_val_28255 === (7))){
var inst_28250 = (state_28254[(2)]);
var state_28254__$1 = state_28254;
var statearr_28256_28283 = state_28254__$1;
(statearr_28256_28283[(2)] = inst_28250);

(statearr_28256_28283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28255 === (1))){
var inst_28217 = (new Array(n));
var inst_28218 = inst_28217;
var inst_28219 = (0);
var state_28254__$1 = (function (){var statearr_28257 = state_28254;
(statearr_28257[(7)] = inst_28219);

(statearr_28257[(8)] = inst_28218);

return statearr_28257;
})();
var statearr_28258_28284 = state_28254__$1;
(statearr_28258_28284[(2)] = null);

(statearr_28258_28284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28255 === (4))){
var inst_28222 = (state_28254[(9)]);
var inst_28222__$1 = (state_28254[(2)]);
var inst_28223 = (inst_28222__$1 == null);
var inst_28224 = cljs.core.not.call(null,inst_28223);
var state_28254__$1 = (function (){var statearr_28259 = state_28254;
(statearr_28259[(9)] = inst_28222__$1);

return statearr_28259;
})();
if(inst_28224){
var statearr_28260_28285 = state_28254__$1;
(statearr_28260_28285[(1)] = (5));

} else {
var statearr_28261_28286 = state_28254__$1;
(statearr_28261_28286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28255 === (15))){
var inst_28244 = (state_28254[(2)]);
var state_28254__$1 = state_28254;
var statearr_28262_28287 = state_28254__$1;
(statearr_28262_28287[(2)] = inst_28244);

(statearr_28262_28287[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28255 === (13))){
var state_28254__$1 = state_28254;
var statearr_28263_28288 = state_28254__$1;
(statearr_28263_28288[(2)] = null);

(statearr_28263_28288[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28255 === (6))){
var inst_28219 = (state_28254[(7)]);
var inst_28240 = (inst_28219 > (0));
var state_28254__$1 = state_28254;
if(cljs.core.truth_(inst_28240)){
var statearr_28264_28289 = state_28254__$1;
(statearr_28264_28289[(1)] = (12));

} else {
var statearr_28265_28290 = state_28254__$1;
(statearr_28265_28290[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28255 === (3))){
var inst_28252 = (state_28254[(2)]);
var state_28254__$1 = state_28254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28254__$1,inst_28252);
} else {
if((state_val_28255 === (12))){
var inst_28218 = (state_28254[(8)]);
var inst_28242 = cljs.core.vec.call(null,inst_28218);
var state_28254__$1 = state_28254;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28254__$1,(15),out,inst_28242);
} else {
if((state_val_28255 === (2))){
var state_28254__$1 = state_28254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28254__$1,(4),ch);
} else {
if((state_val_28255 === (11))){
var inst_28234 = (state_28254[(2)]);
var inst_28235 = (new Array(n));
var inst_28218 = inst_28235;
var inst_28219 = (0);
var state_28254__$1 = (function (){var statearr_28266 = state_28254;
(statearr_28266[(7)] = inst_28219);

(statearr_28266[(10)] = inst_28234);

(statearr_28266[(8)] = inst_28218);

return statearr_28266;
})();
var statearr_28267_28291 = state_28254__$1;
(statearr_28267_28291[(2)] = null);

(statearr_28267_28291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28255 === (9))){
var inst_28218 = (state_28254[(8)]);
var inst_28232 = cljs.core.vec.call(null,inst_28218);
var state_28254__$1 = state_28254;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28254__$1,(11),out,inst_28232);
} else {
if((state_val_28255 === (5))){
var inst_28219 = (state_28254[(7)]);
var inst_28222 = (state_28254[(9)]);
var inst_28218 = (state_28254[(8)]);
var inst_28227 = (state_28254[(11)]);
var inst_28226 = (inst_28218[inst_28219] = inst_28222);
var inst_28227__$1 = (inst_28219 + (1));
var inst_28228 = (inst_28227__$1 < n);
var state_28254__$1 = (function (){var statearr_28268 = state_28254;
(statearr_28268[(11)] = inst_28227__$1);

(statearr_28268[(12)] = inst_28226);

return statearr_28268;
})();
if(cljs.core.truth_(inst_28228)){
var statearr_28269_28292 = state_28254__$1;
(statearr_28269_28292[(1)] = (8));

} else {
var statearr_28270_28293 = state_28254__$1;
(statearr_28270_28293[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28255 === (14))){
var inst_28247 = (state_28254[(2)]);
var inst_28248 = cljs.core.async.close_BANG_.call(null,out);
var state_28254__$1 = (function (){var statearr_28272 = state_28254;
(statearr_28272[(13)] = inst_28247);

return statearr_28272;
})();
var statearr_28273_28294 = state_28254__$1;
(statearr_28273_28294[(2)] = inst_28248);

(statearr_28273_28294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28255 === (10))){
var inst_28238 = (state_28254[(2)]);
var state_28254__$1 = state_28254;
var statearr_28274_28295 = state_28254__$1;
(statearr_28274_28295[(2)] = inst_28238);

(statearr_28274_28295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28255 === (8))){
var inst_28218 = (state_28254[(8)]);
var inst_28227 = (state_28254[(11)]);
var tmp28271 = inst_28218;
var inst_28218__$1 = tmp28271;
var inst_28219 = inst_28227;
var state_28254__$1 = (function (){var statearr_28275 = state_28254;
(statearr_28275[(7)] = inst_28219);

(statearr_28275[(8)] = inst_28218__$1);

return statearr_28275;
})();
var statearr_28276_28296 = state_28254__$1;
(statearr_28276_28296[(2)] = null);

(statearr_28276_28296[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__26360__auto__ = null;
var cljs$core$async$state_machine__26360__auto____0 = (function (){
var statearr_28277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28277[(0)] = cljs$core$async$state_machine__26360__auto__);

(statearr_28277[(1)] = (1));

return statearr_28277;
});
var cljs$core$async$state_machine__26360__auto____1 = (function (state_28254){
while(true){
var ret_value__26361__auto__ = (function (){try{while(true){
var result__26362__auto__ = switch__26359__auto__.call(null,state_28254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26362__auto__;
}
break;
}
}catch (e28278){if((e28278 instanceof Object)){
var ex__26363__auto__ = e28278;
var statearr_28279_28297 = state_28254;
(statearr_28279_28297[(5)] = ex__26363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28298 = state_28254;
state_28254 = G__28298;
continue;
} else {
return ret_value__26361__auto__;
}
break;
}
});
cljs$core$async$state_machine__26360__auto__ = function(state_28254){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26360__auto____1.call(this,state_28254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26360__auto____0;
cljs$core$async$state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26360__auto____1;
return cljs$core$async$state_machine__26360__auto__;
})()
})();
var state__26456__auto__ = (function (){var statearr_28280 = f__26455__auto__.call(null);
(statearr_28280[(6)] = c__26454__auto___28282);

return statearr_28280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26456__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28300 = arguments.length;
switch (G__28300) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26454__auto___28370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26455__auto__ = (function (){var switch__26359__auto__ = (function (state_28342){
var state_val_28343 = (state_28342[(1)]);
if((state_val_28343 === (7))){
var inst_28338 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
var statearr_28344_28371 = state_28342__$1;
(statearr_28344_28371[(2)] = inst_28338);

(statearr_28344_28371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (1))){
var inst_28301 = [];
var inst_28302 = inst_28301;
var inst_28303 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28342__$1 = (function (){var statearr_28345 = state_28342;
(statearr_28345[(7)] = inst_28303);

(statearr_28345[(8)] = inst_28302);

return statearr_28345;
})();
var statearr_28346_28372 = state_28342__$1;
(statearr_28346_28372[(2)] = null);

(statearr_28346_28372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (4))){
var inst_28306 = (state_28342[(9)]);
var inst_28306__$1 = (state_28342[(2)]);
var inst_28307 = (inst_28306__$1 == null);
var inst_28308 = cljs.core.not.call(null,inst_28307);
var state_28342__$1 = (function (){var statearr_28347 = state_28342;
(statearr_28347[(9)] = inst_28306__$1);

return statearr_28347;
})();
if(inst_28308){
var statearr_28348_28373 = state_28342__$1;
(statearr_28348_28373[(1)] = (5));

} else {
var statearr_28349_28374 = state_28342__$1;
(statearr_28349_28374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (15))){
var inst_28332 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
var statearr_28350_28375 = state_28342__$1;
(statearr_28350_28375[(2)] = inst_28332);

(statearr_28350_28375[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (13))){
var state_28342__$1 = state_28342;
var statearr_28351_28376 = state_28342__$1;
(statearr_28351_28376[(2)] = null);

(statearr_28351_28376[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (6))){
var inst_28302 = (state_28342[(8)]);
var inst_28327 = inst_28302.length;
var inst_28328 = (inst_28327 > (0));
var state_28342__$1 = state_28342;
if(cljs.core.truth_(inst_28328)){
var statearr_28352_28377 = state_28342__$1;
(statearr_28352_28377[(1)] = (12));

} else {
var statearr_28353_28378 = state_28342__$1;
(statearr_28353_28378[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (3))){
var inst_28340 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28342__$1,inst_28340);
} else {
if((state_val_28343 === (12))){
var inst_28302 = (state_28342[(8)]);
var inst_28330 = cljs.core.vec.call(null,inst_28302);
var state_28342__$1 = state_28342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28342__$1,(15),out,inst_28330);
} else {
if((state_val_28343 === (2))){
var state_28342__$1 = state_28342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28342__$1,(4),ch);
} else {
if((state_val_28343 === (11))){
var inst_28306 = (state_28342[(9)]);
var inst_28310 = (state_28342[(10)]);
var inst_28320 = (state_28342[(2)]);
var inst_28321 = [];
var inst_28322 = inst_28321.push(inst_28306);
var inst_28302 = inst_28321;
var inst_28303 = inst_28310;
var state_28342__$1 = (function (){var statearr_28354 = state_28342;
(statearr_28354[(11)] = inst_28322);

(statearr_28354[(7)] = inst_28303);

(statearr_28354[(12)] = inst_28320);

(statearr_28354[(8)] = inst_28302);

return statearr_28354;
})();
var statearr_28355_28379 = state_28342__$1;
(statearr_28355_28379[(2)] = null);

(statearr_28355_28379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (9))){
var inst_28302 = (state_28342[(8)]);
var inst_28318 = cljs.core.vec.call(null,inst_28302);
var state_28342__$1 = state_28342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28342__$1,(11),out,inst_28318);
} else {
if((state_val_28343 === (5))){
var inst_28303 = (state_28342[(7)]);
var inst_28306 = (state_28342[(9)]);
var inst_28310 = (state_28342[(10)]);
var inst_28310__$1 = f.call(null,inst_28306);
var inst_28311 = cljs.core._EQ_.call(null,inst_28310__$1,inst_28303);
var inst_28312 = cljs.core.keyword_identical_QMARK_.call(null,inst_28303,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28313 = ((inst_28311) || (inst_28312));
var state_28342__$1 = (function (){var statearr_28356 = state_28342;
(statearr_28356[(10)] = inst_28310__$1);

return statearr_28356;
})();
if(cljs.core.truth_(inst_28313)){
var statearr_28357_28380 = state_28342__$1;
(statearr_28357_28380[(1)] = (8));

} else {
var statearr_28358_28381 = state_28342__$1;
(statearr_28358_28381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (14))){
var inst_28335 = (state_28342[(2)]);
var inst_28336 = cljs.core.async.close_BANG_.call(null,out);
var state_28342__$1 = (function (){var statearr_28360 = state_28342;
(statearr_28360[(13)] = inst_28335);

return statearr_28360;
})();
var statearr_28361_28382 = state_28342__$1;
(statearr_28361_28382[(2)] = inst_28336);

(statearr_28361_28382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (10))){
var inst_28325 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
var statearr_28362_28383 = state_28342__$1;
(statearr_28362_28383[(2)] = inst_28325);

(statearr_28362_28383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (8))){
var inst_28306 = (state_28342[(9)]);
var inst_28302 = (state_28342[(8)]);
var inst_28310 = (state_28342[(10)]);
var inst_28315 = inst_28302.push(inst_28306);
var tmp28359 = inst_28302;
var inst_28302__$1 = tmp28359;
var inst_28303 = inst_28310;
var state_28342__$1 = (function (){var statearr_28363 = state_28342;
(statearr_28363[(14)] = inst_28315);

(statearr_28363[(7)] = inst_28303);

(statearr_28363[(8)] = inst_28302__$1);

return statearr_28363;
})();
var statearr_28364_28384 = state_28342__$1;
(statearr_28364_28384[(2)] = null);

(statearr_28364_28384[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__26360__auto__ = null;
var cljs$core$async$state_machine__26360__auto____0 = (function (){
var statearr_28365 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28365[(0)] = cljs$core$async$state_machine__26360__auto__);

(statearr_28365[(1)] = (1));

return statearr_28365;
});
var cljs$core$async$state_machine__26360__auto____1 = (function (state_28342){
while(true){
var ret_value__26361__auto__ = (function (){try{while(true){
var result__26362__auto__ = switch__26359__auto__.call(null,state_28342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26362__auto__;
}
break;
}
}catch (e28366){if((e28366 instanceof Object)){
var ex__26363__auto__ = e28366;
var statearr_28367_28385 = state_28342;
(statearr_28367_28385[(5)] = ex__26363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28386 = state_28342;
state_28342 = G__28386;
continue;
} else {
return ret_value__26361__auto__;
}
break;
}
});
cljs$core$async$state_machine__26360__auto__ = function(state_28342){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26360__auto____1.call(this,state_28342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26360__auto____0;
cljs$core$async$state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26360__auto____1;
return cljs$core$async$state_machine__26360__auto__;
})()
})();
var state__26456__auto__ = (function (){var statearr_28368 = f__26455__auto__.call(null);
(statearr_28368[(6)] = c__26454__auto___28370);

return statearr_28368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26456__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1651769151899
