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
var G__26778 = arguments.length;
switch (G__26778) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26779 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26779 = (function (f,blockable,meta26780){
this.f = f;
this.blockable = blockable;
this.meta26780 = meta26780;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26781,meta26780__$1){
var self__ = this;
var _26781__$1 = this;
return (new cljs.core.async.t_cljs$core$async26779(self__.f,self__.blockable,meta26780__$1));
}));

(cljs.core.async.t_cljs$core$async26779.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26781){
var self__ = this;
var _26781__$1 = this;
return self__.meta26780;
}));

(cljs.core.async.t_cljs$core$async26779.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26779.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26779.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async26779.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async26779.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26780","meta26780",1320883808,null)], null);
}));

(cljs.core.async.t_cljs$core$async26779.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26779.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26779");

(cljs.core.async.t_cljs$core$async26779.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26779");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26779.
 */
cljs.core.async.__GT_t_cljs$core$async26779 = (function cljs$core$async$__GT_t_cljs$core$async26779(f__$1,blockable__$1,meta26780){
return (new cljs.core.async.t_cljs$core$async26779(f__$1,blockable__$1,meta26780));
});

}

return (new cljs.core.async.t_cljs$core$async26779(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26785 = arguments.length;
switch (G__26785) {
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
var G__26788 = arguments.length;
switch (G__26788) {
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
var G__26791 = arguments.length;
switch (G__26791) {
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
var val_26793 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26793);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_26793);
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
var G__26795 = arguments.length;
switch (G__26795) {
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
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
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
var n__4613__auto___26797 = n;
var x_26798 = (0);
while(true){
if((x_26798 < n__4613__auto___26797)){
(a[x_26798] = x_26798);

var G__26799 = (x_26798 + (1));
x_26798 = G__26799;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26800 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26800 = (function (flag,meta26801){
this.flag = flag;
this.meta26801 = meta26801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26802,meta26801__$1){
var self__ = this;
var _26802__$1 = this;
return (new cljs.core.async.t_cljs$core$async26800(self__.flag,meta26801__$1));
}));

(cljs.core.async.t_cljs$core$async26800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26802){
var self__ = this;
var _26802__$1 = this;
return self__.meta26801;
}));

(cljs.core.async.t_cljs$core$async26800.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26800.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async26800.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26800.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async26800.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26801","meta26801",-1661159794,null)], null);
}));

(cljs.core.async.t_cljs$core$async26800.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26800.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26800");

(cljs.core.async.t_cljs$core$async26800.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26800");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26800.
 */
cljs.core.async.__GT_t_cljs$core$async26800 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26800(flag__$1,meta26801){
return (new cljs.core.async.t_cljs$core$async26800(flag__$1,meta26801));
});

}

return (new cljs.core.async.t_cljs$core$async26800(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26803 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26803 = (function (flag,cb,meta26804){
this.flag = flag;
this.cb = cb;
this.meta26804 = meta26804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26805,meta26804__$1){
var self__ = this;
var _26805__$1 = this;
return (new cljs.core.async.t_cljs$core$async26803(self__.flag,self__.cb,meta26804__$1));
}));

(cljs.core.async.t_cljs$core$async26803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26805){
var self__ = this;
var _26805__$1 = this;
return self__.meta26804;
}));

(cljs.core.async.t_cljs$core$async26803.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26803.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async26803.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26803.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async26803.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26804","meta26804",1489162920,null)], null);
}));

(cljs.core.async.t_cljs$core$async26803.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26803.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26803");

(cljs.core.async.t_cljs$core$async26803.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26803");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26803.
 */
cljs.core.async.__GT_t_cljs$core$async26803 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26803(flag__$1,cb__$1,meta26804){
return (new cljs.core.async.t_cljs$core$async26803(flag__$1,cb__$1,meta26804));
});

}

return (new cljs.core.async.t_cljs$core$async26803(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26806_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26806_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26807_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26807_SHARP_,port], null));
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
var G__26808 = (i + (1));
i = G__26808;
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
var temp__5753__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
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
var len__4736__auto___26814 = arguments.length;
var i__4737__auto___26815 = (0);
while(true){
if((i__4737__auto___26815 < len__4736__auto___26814)){
args__4742__auto__.push((arguments[i__4737__auto___26815]));

var G__26816 = (i__4737__auto___26815 + (1));
i__4737__auto___26815 = G__26816;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26811){
var map__26812 = p__26811;
var map__26812__$1 = (((((!((map__26812 == null))))?(((((map__26812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26812):map__26812);
var opts = map__26812__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26809){
var G__26810 = cljs.core.first.call(null,seq26809);
var seq26809__$1 = cljs.core.next.call(null,seq26809);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26810,seq26809__$1);
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
var G__26818 = arguments.length;
switch (G__26818) {
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
var c__26718__auto___26864 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26719__auto__ = (function (){var switch__26623__auto__ = (function (state_26842){
var state_val_26843 = (state_26842[(1)]);
if((state_val_26843 === (7))){
var inst_26838 = (state_26842[(2)]);
var state_26842__$1 = state_26842;
var statearr_26844_26865 = state_26842__$1;
(statearr_26844_26865[(2)] = inst_26838);

(statearr_26844_26865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26843 === (1))){
var state_26842__$1 = state_26842;
var statearr_26845_26866 = state_26842__$1;
(statearr_26845_26866[(2)] = null);

(statearr_26845_26866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26843 === (4))){
var inst_26821 = (state_26842[(7)]);
var inst_26821__$1 = (state_26842[(2)]);
var inst_26822 = (inst_26821__$1 == null);
var state_26842__$1 = (function (){var statearr_26846 = state_26842;
(statearr_26846[(7)] = inst_26821__$1);

return statearr_26846;
})();
if(cljs.core.truth_(inst_26822)){
var statearr_26847_26867 = state_26842__$1;
(statearr_26847_26867[(1)] = (5));

} else {
var statearr_26848_26868 = state_26842__$1;
(statearr_26848_26868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26843 === (13))){
var state_26842__$1 = state_26842;
var statearr_26849_26869 = state_26842__$1;
(statearr_26849_26869[(2)] = null);

(statearr_26849_26869[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26843 === (6))){
var inst_26821 = (state_26842[(7)]);
var state_26842__$1 = state_26842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26842__$1,(11),to,inst_26821);
} else {
if((state_val_26843 === (3))){
var inst_26840 = (state_26842[(2)]);
var state_26842__$1 = state_26842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26842__$1,inst_26840);
} else {
if((state_val_26843 === (12))){
var state_26842__$1 = state_26842;
var statearr_26850_26870 = state_26842__$1;
(statearr_26850_26870[(2)] = null);

(statearr_26850_26870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26843 === (2))){
var state_26842__$1 = state_26842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26842__$1,(4),from);
} else {
if((state_val_26843 === (11))){
var inst_26831 = (state_26842[(2)]);
var state_26842__$1 = state_26842;
if(cljs.core.truth_(inst_26831)){
var statearr_26851_26871 = state_26842__$1;
(statearr_26851_26871[(1)] = (12));

} else {
var statearr_26852_26872 = state_26842__$1;
(statearr_26852_26872[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26843 === (9))){
var state_26842__$1 = state_26842;
var statearr_26853_26873 = state_26842__$1;
(statearr_26853_26873[(2)] = null);

(statearr_26853_26873[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26843 === (5))){
var state_26842__$1 = state_26842;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26854_26874 = state_26842__$1;
(statearr_26854_26874[(1)] = (8));

} else {
var statearr_26855_26875 = state_26842__$1;
(statearr_26855_26875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26843 === (14))){
var inst_26836 = (state_26842[(2)]);
var state_26842__$1 = state_26842;
var statearr_26856_26876 = state_26842__$1;
(statearr_26856_26876[(2)] = inst_26836);

(statearr_26856_26876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26843 === (10))){
var inst_26828 = (state_26842[(2)]);
var state_26842__$1 = state_26842;
var statearr_26857_26877 = state_26842__$1;
(statearr_26857_26877[(2)] = inst_26828);

(statearr_26857_26877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26843 === (8))){
var inst_26825 = cljs.core.async.close_BANG_.call(null,to);
var state_26842__$1 = state_26842;
var statearr_26858_26878 = state_26842__$1;
(statearr_26858_26878[(2)] = inst_26825);

(statearr_26858_26878[(1)] = (10));


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
var cljs$core$async$state_machine__26624__auto__ = null;
var cljs$core$async$state_machine__26624__auto____0 = (function (){
var statearr_26859 = [null,null,null,null,null,null,null,null];
(statearr_26859[(0)] = cljs$core$async$state_machine__26624__auto__);

(statearr_26859[(1)] = (1));

return statearr_26859;
});
var cljs$core$async$state_machine__26624__auto____1 = (function (state_26842){
while(true){
var ret_value__26625__auto__ = (function (){try{while(true){
var result__26626__auto__ = switch__26623__auto__.call(null,state_26842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26626__auto__;
}
break;
}
}catch (e26860){if((e26860 instanceof Object)){
var ex__26627__auto__ = e26860;
var statearr_26861_26879 = state_26842;
(statearr_26861_26879[(5)] = ex__26627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26880 = state_26842;
state_26842 = G__26880;
continue;
} else {
return ret_value__26625__auto__;
}
break;
}
});
cljs$core$async$state_machine__26624__auto__ = function(state_26842){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26624__auto____1.call(this,state_26842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26624__auto____0;
cljs$core$async$state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26624__auto____1;
return cljs$core$async$state_machine__26624__auto__;
})()
})();
var state__26720__auto__ = (function (){var statearr_26862 = f__26719__auto__.call(null);
(statearr_26862[(6)] = c__26718__auto___26864);

return statearr_26862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26720__auto__);
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
var process = (function (p__26881){
var vec__26882 = p__26881;
var v = cljs.core.nth.call(null,vec__26882,(0),null);
var p = cljs.core.nth.call(null,vec__26882,(1),null);
var job = vec__26882;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26718__auto___27053 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26719__auto__ = (function (){var switch__26623__auto__ = (function (state_26889){
var state_val_26890 = (state_26889[(1)]);
if((state_val_26890 === (1))){
var state_26889__$1 = state_26889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26889__$1,(2),res,v);
} else {
if((state_val_26890 === (2))){
var inst_26886 = (state_26889[(2)]);
var inst_26887 = cljs.core.async.close_BANG_.call(null,res);
var state_26889__$1 = (function (){var statearr_26891 = state_26889;
(statearr_26891[(7)] = inst_26886);

return statearr_26891;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26889__$1,inst_26887);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26624__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26624__auto____0 = (function (){
var statearr_26892 = [null,null,null,null,null,null,null,null];
(statearr_26892[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26624__auto__);

(statearr_26892[(1)] = (1));

return statearr_26892;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26624__auto____1 = (function (state_26889){
while(true){
var ret_value__26625__auto__ = (function (){try{while(true){
var result__26626__auto__ = switch__26623__auto__.call(null,state_26889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26626__auto__;
}
break;
}
}catch (e26893){if((e26893 instanceof Object)){
var ex__26627__auto__ = e26893;
var statearr_26894_27054 = state_26889;
(statearr_26894_27054[(5)] = ex__26627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27055 = state_26889;
state_26889 = G__27055;
continue;
} else {
return ret_value__26625__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26624__auto__ = function(state_26889){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26624__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26624__auto____1.call(this,state_26889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26624__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26624__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26624__auto__;
})()
})();
var state__26720__auto__ = (function (){var statearr_26895 = f__26719__auto__.call(null);
(statearr_26895[(6)] = c__26718__auto___27053);

return statearr_26895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26720__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__26896){
var vec__26897 = p__26896;
var v = cljs.core.nth.call(null,vec__26897,(0),null);
var p = cljs.core.nth.call(null,vec__26897,(1),null);
var job = vec__26897;
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
var n__4613__auto___27056 = n;
var __27057 = (0);
while(true){
if((__27057 < n__4613__auto___27056)){
var G__26900_27058 = type;
var G__26900_27059__$1 = (((G__26900_27058 instanceof cljs.core.Keyword))?G__26900_27058.fqn:null);
switch (G__26900_27059__$1) {
case "compute":
var c__26718__auto___27061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27057,c__26718__auto___27061,G__26900_27058,G__26900_27059__$1,n__4613__auto___27056,jobs,results,process,async){
return (function (){
var f__26719__auto__ = (function (){var switch__26623__auto__ = ((function (__27057,c__26718__auto___27061,G__26900_27058,G__26900_27059__$1,n__4613__auto___27056,jobs,results,process,async){
return (function (state_26913){
var state_val_26914 = (state_26913[(1)]);
if((state_val_26914 === (1))){
var state_26913__$1 = state_26913;
var statearr_26915_27062 = state_26913__$1;
(statearr_26915_27062[(2)] = null);

(statearr_26915_27062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26914 === (2))){
var state_26913__$1 = state_26913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26913__$1,(4),jobs);
} else {
if((state_val_26914 === (3))){
var inst_26911 = (state_26913[(2)]);
var state_26913__$1 = state_26913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26913__$1,inst_26911);
} else {
if((state_val_26914 === (4))){
var inst_26903 = (state_26913[(2)]);
var inst_26904 = process.call(null,inst_26903);
var state_26913__$1 = state_26913;
if(cljs.core.truth_(inst_26904)){
var statearr_26916_27063 = state_26913__$1;
(statearr_26916_27063[(1)] = (5));

} else {
var statearr_26917_27064 = state_26913__$1;
(statearr_26917_27064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26914 === (5))){
var state_26913__$1 = state_26913;
var statearr_26918_27065 = state_26913__$1;
(statearr_26918_27065[(2)] = null);

(statearr_26918_27065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26914 === (6))){
var state_26913__$1 = state_26913;
var statearr_26919_27066 = state_26913__$1;
(statearr_26919_27066[(2)] = null);

(statearr_26919_27066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26914 === (7))){
var inst_26909 = (state_26913[(2)]);
var state_26913__$1 = state_26913;
var statearr_26920_27067 = state_26913__$1;
(statearr_26920_27067[(2)] = inst_26909);

(statearr_26920_27067[(1)] = (3));


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
});})(__27057,c__26718__auto___27061,G__26900_27058,G__26900_27059__$1,n__4613__auto___27056,jobs,results,process,async))
;
return ((function (__27057,switch__26623__auto__,c__26718__auto___27061,G__26900_27058,G__26900_27059__$1,n__4613__auto___27056,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26624__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26624__auto____0 = (function (){
var statearr_26921 = [null,null,null,null,null,null,null];
(statearr_26921[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26624__auto__);

(statearr_26921[(1)] = (1));

return statearr_26921;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26624__auto____1 = (function (state_26913){
while(true){
var ret_value__26625__auto__ = (function (){try{while(true){
var result__26626__auto__ = switch__26623__auto__.call(null,state_26913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26626__auto__;
}
break;
}
}catch (e26922){if((e26922 instanceof Object)){
var ex__26627__auto__ = e26922;
var statearr_26923_27068 = state_26913;
(statearr_26923_27068[(5)] = ex__26627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27069 = state_26913;
state_26913 = G__27069;
continue;
} else {
return ret_value__26625__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26624__auto__ = function(state_26913){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26624__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26624__auto____1.call(this,state_26913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26624__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26624__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26624__auto__;
})()
;})(__27057,switch__26623__auto__,c__26718__auto___27061,G__26900_27058,G__26900_27059__$1,n__4613__auto___27056,jobs,results,process,async))
})();
var state__26720__auto__ = (function (){var statearr_26924 = f__26719__auto__.call(null);
(statearr_26924[(6)] = c__26718__auto___27061);

return statearr_26924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26720__auto__);
});})(__27057,c__26718__auto___27061,G__26900_27058,G__26900_27059__$1,n__4613__auto___27056,jobs,results,process,async))
);


break;
case "async":
var c__26718__auto___27070 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27057,c__26718__auto___27070,G__26900_27058,G__26900_27059__$1,n__4613__auto___27056,jobs,results,process,async){
return (function (){
var f__26719__auto__ = (function (){var switch__26623__auto__ = ((function (__27057,c__26718__auto___27070,G__26900_27058,G__26900_27059__$1,n__4613__auto___27056,jobs,results,process,async){
return (function (state_26937){
var state_val_26938 = (state_26937[(1)]);
if((state_val_26938 === (1))){
var state_26937__$1 = state_26937;
var statearr_26939_27071 = state_26937__$1;
(statearr_26939_27071[(2)] = null);

(statearr_26939_27071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26938 === (2))){
var state_26937__$1 = state_26937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26937__$1,(4),jobs);
} else {
if((state_val_26938 === (3))){
var inst_26935 = (state_26937[(2)]);
var state_26937__$1 = state_26937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26937__$1,inst_26935);
} else {
if((state_val_26938 === (4))){
var inst_26927 = (state_26937[(2)]);
var inst_26928 = async.call(null,inst_26927);
var state_26937__$1 = state_26937;
if(cljs.core.truth_(inst_26928)){
var statearr_26940_27072 = state_26937__$1;
(statearr_26940_27072[(1)] = (5));

} else {
var statearr_26941_27073 = state_26937__$1;
(statearr_26941_27073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26938 === (5))){
var state_26937__$1 = state_26937;
var statearr_26942_27074 = state_26937__$1;
(statearr_26942_27074[(2)] = null);

(statearr_26942_27074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26938 === (6))){
var state_26937__$1 = state_26937;
var statearr_26943_27075 = state_26937__$1;
(statearr_26943_27075[(2)] = null);

(statearr_26943_27075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26938 === (7))){
var inst_26933 = (state_26937[(2)]);
var state_26937__$1 = state_26937;
var statearr_26944_27076 = state_26937__$1;
(statearr_26944_27076[(2)] = inst_26933);

(statearr_26944_27076[(1)] = (3));


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
});})(__27057,c__26718__auto___27070,G__26900_27058,G__26900_27059__$1,n__4613__auto___27056,jobs,results,process,async))
;
return ((function (__27057,switch__26623__auto__,c__26718__auto___27070,G__26900_27058,G__26900_27059__$1,n__4613__auto___27056,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26624__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26624__auto____0 = (function (){
var statearr_26945 = [null,null,null,null,null,null,null];
(statearr_26945[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26624__auto__);

(statearr_26945[(1)] = (1));

return statearr_26945;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26624__auto____1 = (function (state_26937){
while(true){
var ret_value__26625__auto__ = (function (){try{while(true){
var result__26626__auto__ = switch__26623__auto__.call(null,state_26937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26626__auto__;
}
break;
}
}catch (e26946){if((e26946 instanceof Object)){
var ex__26627__auto__ = e26946;
var statearr_26947_27077 = state_26937;
(statearr_26947_27077[(5)] = ex__26627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27078 = state_26937;
state_26937 = G__27078;
continue;
} else {
return ret_value__26625__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26624__auto__ = function(state_26937){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26624__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26624__auto____1.call(this,state_26937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26624__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26624__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26624__auto__;
})()
;})(__27057,switch__26623__auto__,c__26718__auto___27070,G__26900_27058,G__26900_27059__$1,n__4613__auto___27056,jobs,results,process,async))
})();
var state__26720__auto__ = (function (){var statearr_26948 = f__26719__auto__.call(null);
(statearr_26948[(6)] = c__26718__auto___27070);

return statearr_26948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26720__auto__);
});})(__27057,c__26718__auto___27070,G__26900_27058,G__26900_27059__$1,n__4613__auto___27056,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26900_27059__$1)].join('')));

}

var G__27079 = (__27057 + (1));
__27057 = G__27079;
continue;
} else {
}
break;
}

var c__26718__auto___27080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26719__auto__ = (function (){var switch__26623__auto__ = (function (state_26970){
var state_val_26971 = (state_26970[(1)]);
if((state_val_26971 === (7))){
var inst_26966 = (state_26970[(2)]);
var state_26970__$1 = state_26970;
var statearr_26972_27081 = state_26970__$1;
(statearr_26972_27081[(2)] = inst_26966);

(statearr_26972_27081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26971 === (1))){
var state_26970__$1 = state_26970;
var statearr_26973_27082 = state_26970__$1;
(statearr_26973_27082[(2)] = null);

(statearr_26973_27082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26971 === (4))){
var inst_26951 = (state_26970[(7)]);
var inst_26951__$1 = (state_26970[(2)]);
var inst_26952 = (inst_26951__$1 == null);
var state_26970__$1 = (function (){var statearr_26974 = state_26970;
(statearr_26974[(7)] = inst_26951__$1);

return statearr_26974;
})();
if(cljs.core.truth_(inst_26952)){
var statearr_26975_27083 = state_26970__$1;
(statearr_26975_27083[(1)] = (5));

} else {
var statearr_26976_27084 = state_26970__$1;
(statearr_26976_27084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26971 === (6))){
var inst_26956 = (state_26970[(8)]);
var inst_26951 = (state_26970[(7)]);
var inst_26956__$1 = cljs.core.async.chan.call(null,(1));
var inst_26957 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26958 = [inst_26951,inst_26956__$1];
var inst_26959 = (new cljs.core.PersistentVector(null,2,(5),inst_26957,inst_26958,null));
var state_26970__$1 = (function (){var statearr_26977 = state_26970;
(statearr_26977[(8)] = inst_26956__$1);

return statearr_26977;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26970__$1,(8),jobs,inst_26959);
} else {
if((state_val_26971 === (3))){
var inst_26968 = (state_26970[(2)]);
var state_26970__$1 = state_26970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26970__$1,inst_26968);
} else {
if((state_val_26971 === (2))){
var state_26970__$1 = state_26970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26970__$1,(4),from);
} else {
if((state_val_26971 === (9))){
var inst_26963 = (state_26970[(2)]);
var state_26970__$1 = (function (){var statearr_26978 = state_26970;
(statearr_26978[(9)] = inst_26963);

return statearr_26978;
})();
var statearr_26979_27085 = state_26970__$1;
(statearr_26979_27085[(2)] = null);

(statearr_26979_27085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26971 === (5))){
var inst_26954 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26970__$1 = state_26970;
var statearr_26980_27086 = state_26970__$1;
(statearr_26980_27086[(2)] = inst_26954);

(statearr_26980_27086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26971 === (8))){
var inst_26956 = (state_26970[(8)]);
var inst_26961 = (state_26970[(2)]);
var state_26970__$1 = (function (){var statearr_26981 = state_26970;
(statearr_26981[(10)] = inst_26961);

return statearr_26981;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26970__$1,(9),results,inst_26956);
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
var cljs$core$async$pipeline_STAR__$_state_machine__26624__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26624__auto____0 = (function (){
var statearr_26982 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26982[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26624__auto__);

(statearr_26982[(1)] = (1));

return statearr_26982;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26624__auto____1 = (function (state_26970){
while(true){
var ret_value__26625__auto__ = (function (){try{while(true){
var result__26626__auto__ = switch__26623__auto__.call(null,state_26970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26626__auto__;
}
break;
}
}catch (e26983){if((e26983 instanceof Object)){
var ex__26627__auto__ = e26983;
var statearr_26984_27087 = state_26970;
(statearr_26984_27087[(5)] = ex__26627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27088 = state_26970;
state_26970 = G__27088;
continue;
} else {
return ret_value__26625__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26624__auto__ = function(state_26970){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26624__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26624__auto____1.call(this,state_26970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26624__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26624__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26624__auto__;
})()
})();
var state__26720__auto__ = (function (){var statearr_26985 = f__26719__auto__.call(null);
(statearr_26985[(6)] = c__26718__auto___27080);

return statearr_26985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26720__auto__);
}));


var c__26718__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26719__auto__ = (function (){var switch__26623__auto__ = (function (state_27023){
var state_val_27024 = (state_27023[(1)]);
if((state_val_27024 === (7))){
var inst_27019 = (state_27023[(2)]);
var state_27023__$1 = state_27023;
var statearr_27025_27089 = state_27023__$1;
(statearr_27025_27089[(2)] = inst_27019);

(statearr_27025_27089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (20))){
var state_27023__$1 = state_27023;
var statearr_27026_27090 = state_27023__$1;
(statearr_27026_27090[(2)] = null);

(statearr_27026_27090[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (1))){
var state_27023__$1 = state_27023;
var statearr_27027_27091 = state_27023__$1;
(statearr_27027_27091[(2)] = null);

(statearr_27027_27091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (4))){
var inst_26988 = (state_27023[(7)]);
var inst_26988__$1 = (state_27023[(2)]);
var inst_26989 = (inst_26988__$1 == null);
var state_27023__$1 = (function (){var statearr_27028 = state_27023;
(statearr_27028[(7)] = inst_26988__$1);

return statearr_27028;
})();
if(cljs.core.truth_(inst_26989)){
var statearr_27029_27092 = state_27023__$1;
(statearr_27029_27092[(1)] = (5));

} else {
var statearr_27030_27093 = state_27023__$1;
(statearr_27030_27093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (15))){
var inst_27001 = (state_27023[(8)]);
var state_27023__$1 = state_27023;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27023__$1,(18),to,inst_27001);
} else {
if((state_val_27024 === (21))){
var inst_27014 = (state_27023[(2)]);
var state_27023__$1 = state_27023;
var statearr_27031_27094 = state_27023__$1;
(statearr_27031_27094[(2)] = inst_27014);

(statearr_27031_27094[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (13))){
var inst_27016 = (state_27023[(2)]);
var state_27023__$1 = (function (){var statearr_27032 = state_27023;
(statearr_27032[(9)] = inst_27016);

return statearr_27032;
})();
var statearr_27033_27095 = state_27023__$1;
(statearr_27033_27095[(2)] = null);

(statearr_27033_27095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (6))){
var inst_26988 = (state_27023[(7)]);
var state_27023__$1 = state_27023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27023__$1,(11),inst_26988);
} else {
if((state_val_27024 === (17))){
var inst_27009 = (state_27023[(2)]);
var state_27023__$1 = state_27023;
if(cljs.core.truth_(inst_27009)){
var statearr_27034_27096 = state_27023__$1;
(statearr_27034_27096[(1)] = (19));

} else {
var statearr_27035_27097 = state_27023__$1;
(statearr_27035_27097[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (3))){
var inst_27021 = (state_27023[(2)]);
var state_27023__$1 = state_27023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27023__$1,inst_27021);
} else {
if((state_val_27024 === (12))){
var inst_26998 = (state_27023[(10)]);
var state_27023__$1 = state_27023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27023__$1,(14),inst_26998);
} else {
if((state_val_27024 === (2))){
var state_27023__$1 = state_27023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27023__$1,(4),results);
} else {
if((state_val_27024 === (19))){
var state_27023__$1 = state_27023;
var statearr_27036_27098 = state_27023__$1;
(statearr_27036_27098[(2)] = null);

(statearr_27036_27098[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (11))){
var inst_26998 = (state_27023[(2)]);
var state_27023__$1 = (function (){var statearr_27037 = state_27023;
(statearr_27037[(10)] = inst_26998);

return statearr_27037;
})();
var statearr_27038_27099 = state_27023__$1;
(statearr_27038_27099[(2)] = null);

(statearr_27038_27099[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (9))){
var state_27023__$1 = state_27023;
var statearr_27039_27100 = state_27023__$1;
(statearr_27039_27100[(2)] = null);

(statearr_27039_27100[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (5))){
var state_27023__$1 = state_27023;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27040_27101 = state_27023__$1;
(statearr_27040_27101[(1)] = (8));

} else {
var statearr_27041_27102 = state_27023__$1;
(statearr_27041_27102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (14))){
var inst_27001 = (state_27023[(8)]);
var inst_27001__$1 = (state_27023[(2)]);
var inst_27002 = (inst_27001__$1 == null);
var inst_27003 = cljs.core.not.call(null,inst_27002);
var state_27023__$1 = (function (){var statearr_27042 = state_27023;
(statearr_27042[(8)] = inst_27001__$1);

return statearr_27042;
})();
if(inst_27003){
var statearr_27043_27103 = state_27023__$1;
(statearr_27043_27103[(1)] = (15));

} else {
var statearr_27044_27104 = state_27023__$1;
(statearr_27044_27104[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (16))){
var state_27023__$1 = state_27023;
var statearr_27045_27105 = state_27023__$1;
(statearr_27045_27105[(2)] = false);

(statearr_27045_27105[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (10))){
var inst_26995 = (state_27023[(2)]);
var state_27023__$1 = state_27023;
var statearr_27046_27106 = state_27023__$1;
(statearr_27046_27106[(2)] = inst_26995);

(statearr_27046_27106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (18))){
var inst_27006 = (state_27023[(2)]);
var state_27023__$1 = state_27023;
var statearr_27047_27107 = state_27023__$1;
(statearr_27047_27107[(2)] = inst_27006);

(statearr_27047_27107[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (8))){
var inst_26992 = cljs.core.async.close_BANG_.call(null,to);
var state_27023__$1 = state_27023;
var statearr_27048_27108 = state_27023__$1;
(statearr_27048_27108[(2)] = inst_26992);

(statearr_27048_27108[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__26624__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26624__auto____0 = (function (){
var statearr_27049 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27049[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26624__auto__);

(statearr_27049[(1)] = (1));

return statearr_27049;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26624__auto____1 = (function (state_27023){
while(true){
var ret_value__26625__auto__ = (function (){try{while(true){
var result__26626__auto__ = switch__26623__auto__.call(null,state_27023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26626__auto__;
}
break;
}
}catch (e27050){if((e27050 instanceof Object)){
var ex__26627__auto__ = e27050;
var statearr_27051_27109 = state_27023;
(statearr_27051_27109[(5)] = ex__26627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27110 = state_27023;
state_27023 = G__27110;
continue;
} else {
return ret_value__26625__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26624__auto__ = function(state_27023){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26624__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26624__auto____1.call(this,state_27023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26624__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26624__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26624__auto__;
})()
})();
var state__26720__auto__ = (function (){var statearr_27052 = f__26719__auto__.call(null);
(statearr_27052[(6)] = c__26718__auto__);

return statearr_27052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26720__auto__);
}));

return c__26718__auto__;
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
var G__27112 = arguments.length;
switch (G__27112) {
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
var G__27115 = arguments.length;
switch (G__27115) {
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
var G__27118 = arguments.length;
switch (G__27118) {
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
var c__26718__auto___27167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26719__auto__ = (function (){var switch__26623__auto__ = (function (state_27144){
var state_val_27145 = (state_27144[(1)]);
if((state_val_27145 === (7))){
var inst_27140 = (state_27144[(2)]);
var state_27144__$1 = state_27144;
var statearr_27146_27168 = state_27144__$1;
(statearr_27146_27168[(2)] = inst_27140);

(statearr_27146_27168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27145 === (1))){
var state_27144__$1 = state_27144;
var statearr_27147_27169 = state_27144__$1;
(statearr_27147_27169[(2)] = null);

(statearr_27147_27169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27145 === (4))){
var inst_27121 = (state_27144[(7)]);
var inst_27121__$1 = (state_27144[(2)]);
var inst_27122 = (inst_27121__$1 == null);
var state_27144__$1 = (function (){var statearr_27148 = state_27144;
(statearr_27148[(7)] = inst_27121__$1);

return statearr_27148;
})();
if(cljs.core.truth_(inst_27122)){
var statearr_27149_27170 = state_27144__$1;
(statearr_27149_27170[(1)] = (5));

} else {
var statearr_27150_27171 = state_27144__$1;
(statearr_27150_27171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27145 === (13))){
var state_27144__$1 = state_27144;
var statearr_27151_27172 = state_27144__$1;
(statearr_27151_27172[(2)] = null);

(statearr_27151_27172[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27145 === (6))){
var inst_27121 = (state_27144[(7)]);
var inst_27127 = p.call(null,inst_27121);
var state_27144__$1 = state_27144;
if(cljs.core.truth_(inst_27127)){
var statearr_27152_27173 = state_27144__$1;
(statearr_27152_27173[(1)] = (9));

} else {
var statearr_27153_27174 = state_27144__$1;
(statearr_27153_27174[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27145 === (3))){
var inst_27142 = (state_27144[(2)]);
var state_27144__$1 = state_27144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27144__$1,inst_27142);
} else {
if((state_val_27145 === (12))){
var state_27144__$1 = state_27144;
var statearr_27154_27175 = state_27144__$1;
(statearr_27154_27175[(2)] = null);

(statearr_27154_27175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27145 === (2))){
var state_27144__$1 = state_27144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27144__$1,(4),ch);
} else {
if((state_val_27145 === (11))){
var inst_27121 = (state_27144[(7)]);
var inst_27131 = (state_27144[(2)]);
var state_27144__$1 = state_27144;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27144__$1,(8),inst_27131,inst_27121);
} else {
if((state_val_27145 === (9))){
var state_27144__$1 = state_27144;
var statearr_27155_27176 = state_27144__$1;
(statearr_27155_27176[(2)] = tc);

(statearr_27155_27176[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27145 === (5))){
var inst_27124 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27125 = cljs.core.async.close_BANG_.call(null,fc);
var state_27144__$1 = (function (){var statearr_27156 = state_27144;
(statearr_27156[(8)] = inst_27124);

return statearr_27156;
})();
var statearr_27157_27177 = state_27144__$1;
(statearr_27157_27177[(2)] = inst_27125);

(statearr_27157_27177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27145 === (14))){
var inst_27138 = (state_27144[(2)]);
var state_27144__$1 = state_27144;
var statearr_27158_27178 = state_27144__$1;
(statearr_27158_27178[(2)] = inst_27138);

(statearr_27158_27178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27145 === (10))){
var state_27144__$1 = state_27144;
var statearr_27159_27179 = state_27144__$1;
(statearr_27159_27179[(2)] = fc);

(statearr_27159_27179[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27145 === (8))){
var inst_27133 = (state_27144[(2)]);
var state_27144__$1 = state_27144;
if(cljs.core.truth_(inst_27133)){
var statearr_27160_27180 = state_27144__$1;
(statearr_27160_27180[(1)] = (12));

} else {
var statearr_27161_27181 = state_27144__$1;
(statearr_27161_27181[(1)] = (13));

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
var cljs$core$async$state_machine__26624__auto__ = null;
var cljs$core$async$state_machine__26624__auto____0 = (function (){
var statearr_27162 = [null,null,null,null,null,null,null,null,null];
(statearr_27162[(0)] = cljs$core$async$state_machine__26624__auto__);

(statearr_27162[(1)] = (1));

return statearr_27162;
});
var cljs$core$async$state_machine__26624__auto____1 = (function (state_27144){
while(true){
var ret_value__26625__auto__ = (function (){try{while(true){
var result__26626__auto__ = switch__26623__auto__.call(null,state_27144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26626__auto__;
}
break;
}
}catch (e27163){if((e27163 instanceof Object)){
var ex__26627__auto__ = e27163;
var statearr_27164_27182 = state_27144;
(statearr_27164_27182[(5)] = ex__26627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27183 = state_27144;
state_27144 = G__27183;
continue;
} else {
return ret_value__26625__auto__;
}
break;
}
});
cljs$core$async$state_machine__26624__auto__ = function(state_27144){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26624__auto____1.call(this,state_27144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26624__auto____0;
cljs$core$async$state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26624__auto____1;
return cljs$core$async$state_machine__26624__auto__;
})()
})();
var state__26720__auto__ = (function (){var statearr_27165 = f__26719__auto__.call(null);
(statearr_27165[(6)] = c__26718__auto___27167);

return statearr_27165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26720__auto__);
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
var c__26718__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26719__auto__ = (function (){var switch__26623__auto__ = (function (state_27204){
var state_val_27205 = (state_27204[(1)]);
if((state_val_27205 === (7))){
var inst_27200 = (state_27204[(2)]);
var state_27204__$1 = state_27204;
var statearr_27206_27224 = state_27204__$1;
(statearr_27206_27224[(2)] = inst_27200);

(statearr_27206_27224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (1))){
var inst_27184 = init;
var state_27204__$1 = (function (){var statearr_27207 = state_27204;
(statearr_27207[(7)] = inst_27184);

return statearr_27207;
})();
var statearr_27208_27225 = state_27204__$1;
(statearr_27208_27225[(2)] = null);

(statearr_27208_27225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (4))){
var inst_27187 = (state_27204[(8)]);
var inst_27187__$1 = (state_27204[(2)]);
var inst_27188 = (inst_27187__$1 == null);
var state_27204__$1 = (function (){var statearr_27209 = state_27204;
(statearr_27209[(8)] = inst_27187__$1);

return statearr_27209;
})();
if(cljs.core.truth_(inst_27188)){
var statearr_27210_27226 = state_27204__$1;
(statearr_27210_27226[(1)] = (5));

} else {
var statearr_27211_27227 = state_27204__$1;
(statearr_27211_27227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (6))){
var inst_27191 = (state_27204[(9)]);
var inst_27187 = (state_27204[(8)]);
var inst_27184 = (state_27204[(7)]);
var inst_27191__$1 = f.call(null,inst_27184,inst_27187);
var inst_27192 = cljs.core.reduced_QMARK_.call(null,inst_27191__$1);
var state_27204__$1 = (function (){var statearr_27212 = state_27204;
(statearr_27212[(9)] = inst_27191__$1);

return statearr_27212;
})();
if(inst_27192){
var statearr_27213_27228 = state_27204__$1;
(statearr_27213_27228[(1)] = (8));

} else {
var statearr_27214_27229 = state_27204__$1;
(statearr_27214_27229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (3))){
var inst_27202 = (state_27204[(2)]);
var state_27204__$1 = state_27204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27204__$1,inst_27202);
} else {
if((state_val_27205 === (2))){
var state_27204__$1 = state_27204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27204__$1,(4),ch);
} else {
if((state_val_27205 === (9))){
var inst_27191 = (state_27204[(9)]);
var inst_27184 = inst_27191;
var state_27204__$1 = (function (){var statearr_27215 = state_27204;
(statearr_27215[(7)] = inst_27184);

return statearr_27215;
})();
var statearr_27216_27230 = state_27204__$1;
(statearr_27216_27230[(2)] = null);

(statearr_27216_27230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (5))){
var inst_27184 = (state_27204[(7)]);
var state_27204__$1 = state_27204;
var statearr_27217_27231 = state_27204__$1;
(statearr_27217_27231[(2)] = inst_27184);

(statearr_27217_27231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (10))){
var inst_27198 = (state_27204[(2)]);
var state_27204__$1 = state_27204;
var statearr_27218_27232 = state_27204__$1;
(statearr_27218_27232[(2)] = inst_27198);

(statearr_27218_27232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (8))){
var inst_27191 = (state_27204[(9)]);
var inst_27194 = cljs.core.deref.call(null,inst_27191);
var state_27204__$1 = state_27204;
var statearr_27219_27233 = state_27204__$1;
(statearr_27219_27233[(2)] = inst_27194);

(statearr_27219_27233[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__26624__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26624__auto____0 = (function (){
var statearr_27220 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27220[(0)] = cljs$core$async$reduce_$_state_machine__26624__auto__);

(statearr_27220[(1)] = (1));

return statearr_27220;
});
var cljs$core$async$reduce_$_state_machine__26624__auto____1 = (function (state_27204){
while(true){
var ret_value__26625__auto__ = (function (){try{while(true){
var result__26626__auto__ = switch__26623__auto__.call(null,state_27204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26626__auto__;
}
break;
}
}catch (e27221){if((e27221 instanceof Object)){
var ex__26627__auto__ = e27221;
var statearr_27222_27234 = state_27204;
(statearr_27222_27234[(5)] = ex__26627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27235 = state_27204;
state_27204 = G__27235;
continue;
} else {
return ret_value__26625__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26624__auto__ = function(state_27204){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26624__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26624__auto____1.call(this,state_27204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26624__auto____0;
cljs$core$async$reduce_$_state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26624__auto____1;
return cljs$core$async$reduce_$_state_machine__26624__auto__;
})()
})();
var state__26720__auto__ = (function (){var statearr_27223 = f__26719__auto__.call(null);
(statearr_27223[(6)] = c__26718__auto__);

return statearr_27223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26720__auto__);
}));

return c__26718__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26718__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26719__auto__ = (function (){var switch__26623__auto__ = (function (state_27241){
var state_val_27242 = (state_27241[(1)]);
if((state_val_27242 === (1))){
var inst_27236 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27241__$1 = state_27241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27241__$1,(2),inst_27236);
} else {
if((state_val_27242 === (2))){
var inst_27238 = (state_27241[(2)]);
var inst_27239 = f__$1.call(null,inst_27238);
var state_27241__$1 = state_27241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27241__$1,inst_27239);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__26624__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26624__auto____0 = (function (){
var statearr_27243 = [null,null,null,null,null,null,null];
(statearr_27243[(0)] = cljs$core$async$transduce_$_state_machine__26624__auto__);

(statearr_27243[(1)] = (1));

return statearr_27243;
});
var cljs$core$async$transduce_$_state_machine__26624__auto____1 = (function (state_27241){
while(true){
var ret_value__26625__auto__ = (function (){try{while(true){
var result__26626__auto__ = switch__26623__auto__.call(null,state_27241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26626__auto__;
}
break;
}
}catch (e27244){if((e27244 instanceof Object)){
var ex__26627__auto__ = e27244;
var statearr_27245_27247 = state_27241;
(statearr_27245_27247[(5)] = ex__26627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27248 = state_27241;
state_27241 = G__27248;
continue;
} else {
return ret_value__26625__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26624__auto__ = function(state_27241){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26624__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26624__auto____1.call(this,state_27241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26624__auto____0;
cljs$core$async$transduce_$_state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26624__auto____1;
return cljs$core$async$transduce_$_state_machine__26624__auto__;
})()
})();
var state__26720__auto__ = (function (){var statearr_27246 = f__26719__auto__.call(null);
(statearr_27246[(6)] = c__26718__auto__);

return statearr_27246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26720__auto__);
}));

return c__26718__auto__;
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
var G__27250 = arguments.length;
switch (G__27250) {
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
var c__26718__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26719__auto__ = (function (){var switch__26623__auto__ = (function (state_27275){
var state_val_27276 = (state_27275[(1)]);
if((state_val_27276 === (7))){
var inst_27257 = (state_27275[(2)]);
var state_27275__$1 = state_27275;
var statearr_27277_27298 = state_27275__$1;
(statearr_27277_27298[(2)] = inst_27257);

(statearr_27277_27298[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27276 === (1))){
var inst_27251 = cljs.core.seq.call(null,coll);
var inst_27252 = inst_27251;
var state_27275__$1 = (function (){var statearr_27278 = state_27275;
(statearr_27278[(7)] = inst_27252);

return statearr_27278;
})();
var statearr_27279_27299 = state_27275__$1;
(statearr_27279_27299[(2)] = null);

(statearr_27279_27299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27276 === (4))){
var inst_27252 = (state_27275[(7)]);
var inst_27255 = cljs.core.first.call(null,inst_27252);
var state_27275__$1 = state_27275;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27275__$1,(7),ch,inst_27255);
} else {
if((state_val_27276 === (13))){
var inst_27269 = (state_27275[(2)]);
var state_27275__$1 = state_27275;
var statearr_27280_27300 = state_27275__$1;
(statearr_27280_27300[(2)] = inst_27269);

(statearr_27280_27300[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27276 === (6))){
var inst_27260 = (state_27275[(2)]);
var state_27275__$1 = state_27275;
if(cljs.core.truth_(inst_27260)){
var statearr_27281_27301 = state_27275__$1;
(statearr_27281_27301[(1)] = (8));

} else {
var statearr_27282_27302 = state_27275__$1;
(statearr_27282_27302[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27276 === (3))){
var inst_27273 = (state_27275[(2)]);
var state_27275__$1 = state_27275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27275__$1,inst_27273);
} else {
if((state_val_27276 === (12))){
var state_27275__$1 = state_27275;
var statearr_27283_27303 = state_27275__$1;
(statearr_27283_27303[(2)] = null);

(statearr_27283_27303[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27276 === (2))){
var inst_27252 = (state_27275[(7)]);
var state_27275__$1 = state_27275;
if(cljs.core.truth_(inst_27252)){
var statearr_27284_27304 = state_27275__$1;
(statearr_27284_27304[(1)] = (4));

} else {
var statearr_27285_27305 = state_27275__$1;
(statearr_27285_27305[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27276 === (11))){
var inst_27266 = cljs.core.async.close_BANG_.call(null,ch);
var state_27275__$1 = state_27275;
var statearr_27286_27306 = state_27275__$1;
(statearr_27286_27306[(2)] = inst_27266);

(statearr_27286_27306[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27276 === (9))){
var state_27275__$1 = state_27275;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27287_27307 = state_27275__$1;
(statearr_27287_27307[(1)] = (11));

} else {
var statearr_27288_27308 = state_27275__$1;
(statearr_27288_27308[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27276 === (5))){
var inst_27252 = (state_27275[(7)]);
var state_27275__$1 = state_27275;
var statearr_27289_27309 = state_27275__$1;
(statearr_27289_27309[(2)] = inst_27252);

(statearr_27289_27309[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27276 === (10))){
var inst_27271 = (state_27275[(2)]);
var state_27275__$1 = state_27275;
var statearr_27290_27310 = state_27275__$1;
(statearr_27290_27310[(2)] = inst_27271);

(statearr_27290_27310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27276 === (8))){
var inst_27252 = (state_27275[(7)]);
var inst_27262 = cljs.core.next.call(null,inst_27252);
var inst_27252__$1 = inst_27262;
var state_27275__$1 = (function (){var statearr_27291 = state_27275;
(statearr_27291[(7)] = inst_27252__$1);

return statearr_27291;
})();
var statearr_27292_27311 = state_27275__$1;
(statearr_27292_27311[(2)] = null);

(statearr_27292_27311[(1)] = (2));


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
var cljs$core$async$state_machine__26624__auto__ = null;
var cljs$core$async$state_machine__26624__auto____0 = (function (){
var statearr_27293 = [null,null,null,null,null,null,null,null];
(statearr_27293[(0)] = cljs$core$async$state_machine__26624__auto__);

(statearr_27293[(1)] = (1));

return statearr_27293;
});
var cljs$core$async$state_machine__26624__auto____1 = (function (state_27275){
while(true){
var ret_value__26625__auto__ = (function (){try{while(true){
var result__26626__auto__ = switch__26623__auto__.call(null,state_27275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26626__auto__;
}
break;
}
}catch (e27294){if((e27294 instanceof Object)){
var ex__26627__auto__ = e27294;
var statearr_27295_27312 = state_27275;
(statearr_27295_27312[(5)] = ex__26627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27313 = state_27275;
state_27275 = G__27313;
continue;
} else {
return ret_value__26625__auto__;
}
break;
}
});
cljs$core$async$state_machine__26624__auto__ = function(state_27275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26624__auto____1.call(this,state_27275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26624__auto____0;
cljs$core$async$state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26624__auto____1;
return cljs$core$async$state_machine__26624__auto__;
})()
})();
var state__26720__auto__ = (function (){var statearr_27296 = f__26719__auto__.call(null);
(statearr_27296[(6)] = c__26718__auto__);

return statearr_27296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26720__auto__);
}));

return c__26718__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_27314 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_27314.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_27315 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_27315.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_27316 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_27316.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_27317 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_27317.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27318 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27318 = (function (ch,cs,meta27319){
this.ch = ch;
this.cs = cs;
this.meta27319 = meta27319;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27320,meta27319__$1){
var self__ = this;
var _27320__$1 = this;
return (new cljs.core.async.t_cljs$core$async27318(self__.ch,self__.cs,meta27319__$1));
}));

(cljs.core.async.t_cljs$core$async27318.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27320){
var self__ = this;
var _27320__$1 = this;
return self__.meta27319;
}));

(cljs.core.async.t_cljs$core$async27318.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27318.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async27318.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27318.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async27318.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async27318.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async27318.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27319","meta27319",1998316698,null)], null);
}));

(cljs.core.async.t_cljs$core$async27318.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27318.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27318");

(cljs.core.async.t_cljs$core$async27318.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27318");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27318.
 */
cljs.core.async.__GT_t_cljs$core$async27318 = (function cljs$core$async$mult_$___GT_t_cljs$core$async27318(ch__$1,cs__$1,meta27319){
return (new cljs.core.async.t_cljs$core$async27318(ch__$1,cs__$1,meta27319));
});

}

return (new cljs.core.async.t_cljs$core$async27318(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__26718__auto___27540 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26719__auto__ = (function (){var switch__26623__auto__ = (function (state_27455){
var state_val_27456 = (state_27455[(1)]);
if((state_val_27456 === (7))){
var inst_27451 = (state_27455[(2)]);
var state_27455__$1 = state_27455;
var statearr_27457_27541 = state_27455__$1;
(statearr_27457_27541[(2)] = inst_27451);

(statearr_27457_27541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (20))){
var inst_27354 = (state_27455[(7)]);
var inst_27366 = cljs.core.first.call(null,inst_27354);
var inst_27367 = cljs.core.nth.call(null,inst_27366,(0),null);
var inst_27368 = cljs.core.nth.call(null,inst_27366,(1),null);
var state_27455__$1 = (function (){var statearr_27458 = state_27455;
(statearr_27458[(8)] = inst_27367);

return statearr_27458;
})();
if(cljs.core.truth_(inst_27368)){
var statearr_27459_27542 = state_27455__$1;
(statearr_27459_27542[(1)] = (22));

} else {
var statearr_27460_27543 = state_27455__$1;
(statearr_27460_27543[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (27))){
var inst_27403 = (state_27455[(9)]);
var inst_27398 = (state_27455[(10)]);
var inst_27396 = (state_27455[(11)]);
var inst_27323 = (state_27455[(12)]);
var inst_27403__$1 = cljs.core._nth.call(null,inst_27396,inst_27398);
var inst_27404 = cljs.core.async.put_BANG_.call(null,inst_27403__$1,inst_27323,done);
var state_27455__$1 = (function (){var statearr_27461 = state_27455;
(statearr_27461[(9)] = inst_27403__$1);

return statearr_27461;
})();
if(cljs.core.truth_(inst_27404)){
var statearr_27462_27544 = state_27455__$1;
(statearr_27462_27544[(1)] = (30));

} else {
var statearr_27463_27545 = state_27455__$1;
(statearr_27463_27545[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (1))){
var state_27455__$1 = state_27455;
var statearr_27464_27546 = state_27455__$1;
(statearr_27464_27546[(2)] = null);

(statearr_27464_27546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (24))){
var inst_27354 = (state_27455[(7)]);
var inst_27373 = (state_27455[(2)]);
var inst_27374 = cljs.core.next.call(null,inst_27354);
var inst_27332 = inst_27374;
var inst_27333 = null;
var inst_27334 = (0);
var inst_27335 = (0);
var state_27455__$1 = (function (){var statearr_27465 = state_27455;
(statearr_27465[(13)] = inst_27335);

(statearr_27465[(14)] = inst_27373);

(statearr_27465[(15)] = inst_27332);

(statearr_27465[(16)] = inst_27334);

(statearr_27465[(17)] = inst_27333);

return statearr_27465;
})();
var statearr_27466_27547 = state_27455__$1;
(statearr_27466_27547[(2)] = null);

(statearr_27466_27547[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (39))){
var state_27455__$1 = state_27455;
var statearr_27470_27548 = state_27455__$1;
(statearr_27470_27548[(2)] = null);

(statearr_27470_27548[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (4))){
var inst_27323 = (state_27455[(12)]);
var inst_27323__$1 = (state_27455[(2)]);
var inst_27324 = (inst_27323__$1 == null);
var state_27455__$1 = (function (){var statearr_27471 = state_27455;
(statearr_27471[(12)] = inst_27323__$1);

return statearr_27471;
})();
if(cljs.core.truth_(inst_27324)){
var statearr_27472_27549 = state_27455__$1;
(statearr_27472_27549[(1)] = (5));

} else {
var statearr_27473_27550 = state_27455__$1;
(statearr_27473_27550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (15))){
var inst_27335 = (state_27455[(13)]);
var inst_27332 = (state_27455[(15)]);
var inst_27334 = (state_27455[(16)]);
var inst_27333 = (state_27455[(17)]);
var inst_27350 = (state_27455[(2)]);
var inst_27351 = (inst_27335 + (1));
var tmp27467 = inst_27332;
var tmp27468 = inst_27334;
var tmp27469 = inst_27333;
var inst_27332__$1 = tmp27467;
var inst_27333__$1 = tmp27469;
var inst_27334__$1 = tmp27468;
var inst_27335__$1 = inst_27351;
var state_27455__$1 = (function (){var statearr_27474 = state_27455;
(statearr_27474[(13)] = inst_27335__$1);

(statearr_27474[(15)] = inst_27332__$1);

(statearr_27474[(18)] = inst_27350);

(statearr_27474[(16)] = inst_27334__$1);

(statearr_27474[(17)] = inst_27333__$1);

return statearr_27474;
})();
var statearr_27475_27551 = state_27455__$1;
(statearr_27475_27551[(2)] = null);

(statearr_27475_27551[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (21))){
var inst_27377 = (state_27455[(2)]);
var state_27455__$1 = state_27455;
var statearr_27479_27552 = state_27455__$1;
(statearr_27479_27552[(2)] = inst_27377);

(statearr_27479_27552[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (31))){
var inst_27403 = (state_27455[(9)]);
var inst_27407 = done.call(null,null);
var inst_27408 = cljs.core.async.untap_STAR_.call(null,m,inst_27403);
var state_27455__$1 = (function (){var statearr_27480 = state_27455;
(statearr_27480[(19)] = inst_27407);

return statearr_27480;
})();
var statearr_27481_27553 = state_27455__$1;
(statearr_27481_27553[(2)] = inst_27408);

(statearr_27481_27553[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (32))){
var inst_27397 = (state_27455[(20)]);
var inst_27398 = (state_27455[(10)]);
var inst_27395 = (state_27455[(21)]);
var inst_27396 = (state_27455[(11)]);
var inst_27410 = (state_27455[(2)]);
var inst_27411 = (inst_27398 + (1));
var tmp27476 = inst_27397;
var tmp27477 = inst_27395;
var tmp27478 = inst_27396;
var inst_27395__$1 = tmp27477;
var inst_27396__$1 = tmp27478;
var inst_27397__$1 = tmp27476;
var inst_27398__$1 = inst_27411;
var state_27455__$1 = (function (){var statearr_27482 = state_27455;
(statearr_27482[(20)] = inst_27397__$1);

(statearr_27482[(22)] = inst_27410);

(statearr_27482[(10)] = inst_27398__$1);

(statearr_27482[(21)] = inst_27395__$1);

(statearr_27482[(11)] = inst_27396__$1);

return statearr_27482;
})();
var statearr_27483_27554 = state_27455__$1;
(statearr_27483_27554[(2)] = null);

(statearr_27483_27554[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (40))){
var inst_27423 = (state_27455[(23)]);
var inst_27427 = done.call(null,null);
var inst_27428 = cljs.core.async.untap_STAR_.call(null,m,inst_27423);
var state_27455__$1 = (function (){var statearr_27484 = state_27455;
(statearr_27484[(24)] = inst_27427);

return statearr_27484;
})();
var statearr_27485_27555 = state_27455__$1;
(statearr_27485_27555[(2)] = inst_27428);

(statearr_27485_27555[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (33))){
var inst_27414 = (state_27455[(25)]);
var inst_27416 = cljs.core.chunked_seq_QMARK_.call(null,inst_27414);
var state_27455__$1 = state_27455;
if(inst_27416){
var statearr_27486_27556 = state_27455__$1;
(statearr_27486_27556[(1)] = (36));

} else {
var statearr_27487_27557 = state_27455__$1;
(statearr_27487_27557[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (13))){
var inst_27344 = (state_27455[(26)]);
var inst_27347 = cljs.core.async.close_BANG_.call(null,inst_27344);
var state_27455__$1 = state_27455;
var statearr_27488_27558 = state_27455__$1;
(statearr_27488_27558[(2)] = inst_27347);

(statearr_27488_27558[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (22))){
var inst_27367 = (state_27455[(8)]);
var inst_27370 = cljs.core.async.close_BANG_.call(null,inst_27367);
var state_27455__$1 = state_27455;
var statearr_27489_27559 = state_27455__$1;
(statearr_27489_27559[(2)] = inst_27370);

(statearr_27489_27559[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (36))){
var inst_27414 = (state_27455[(25)]);
var inst_27418 = cljs.core.chunk_first.call(null,inst_27414);
var inst_27419 = cljs.core.chunk_rest.call(null,inst_27414);
var inst_27420 = cljs.core.count.call(null,inst_27418);
var inst_27395 = inst_27419;
var inst_27396 = inst_27418;
var inst_27397 = inst_27420;
var inst_27398 = (0);
var state_27455__$1 = (function (){var statearr_27490 = state_27455;
(statearr_27490[(20)] = inst_27397);

(statearr_27490[(10)] = inst_27398);

(statearr_27490[(21)] = inst_27395);

(statearr_27490[(11)] = inst_27396);

return statearr_27490;
})();
var statearr_27491_27560 = state_27455__$1;
(statearr_27491_27560[(2)] = null);

(statearr_27491_27560[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (41))){
var inst_27414 = (state_27455[(25)]);
var inst_27430 = (state_27455[(2)]);
var inst_27431 = cljs.core.next.call(null,inst_27414);
var inst_27395 = inst_27431;
var inst_27396 = null;
var inst_27397 = (0);
var inst_27398 = (0);
var state_27455__$1 = (function (){var statearr_27492 = state_27455;
(statearr_27492[(20)] = inst_27397);

(statearr_27492[(10)] = inst_27398);

(statearr_27492[(21)] = inst_27395);

(statearr_27492[(11)] = inst_27396);

(statearr_27492[(27)] = inst_27430);

return statearr_27492;
})();
var statearr_27493_27561 = state_27455__$1;
(statearr_27493_27561[(2)] = null);

(statearr_27493_27561[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (43))){
var state_27455__$1 = state_27455;
var statearr_27494_27562 = state_27455__$1;
(statearr_27494_27562[(2)] = null);

(statearr_27494_27562[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (29))){
var inst_27439 = (state_27455[(2)]);
var state_27455__$1 = state_27455;
var statearr_27495_27563 = state_27455__$1;
(statearr_27495_27563[(2)] = inst_27439);

(statearr_27495_27563[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (44))){
var inst_27448 = (state_27455[(2)]);
var state_27455__$1 = (function (){var statearr_27496 = state_27455;
(statearr_27496[(28)] = inst_27448);

return statearr_27496;
})();
var statearr_27497_27564 = state_27455__$1;
(statearr_27497_27564[(2)] = null);

(statearr_27497_27564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (6))){
var inst_27387 = (state_27455[(29)]);
var inst_27386 = cljs.core.deref.call(null,cs);
var inst_27387__$1 = cljs.core.keys.call(null,inst_27386);
var inst_27388 = cljs.core.count.call(null,inst_27387__$1);
var inst_27389 = cljs.core.reset_BANG_.call(null,dctr,inst_27388);
var inst_27394 = cljs.core.seq.call(null,inst_27387__$1);
var inst_27395 = inst_27394;
var inst_27396 = null;
var inst_27397 = (0);
var inst_27398 = (0);
var state_27455__$1 = (function (){var statearr_27498 = state_27455;
(statearr_27498[(20)] = inst_27397);

(statearr_27498[(10)] = inst_27398);

(statearr_27498[(21)] = inst_27395);

(statearr_27498[(11)] = inst_27396);

(statearr_27498[(29)] = inst_27387__$1);

(statearr_27498[(30)] = inst_27389);

return statearr_27498;
})();
var statearr_27499_27565 = state_27455__$1;
(statearr_27499_27565[(2)] = null);

(statearr_27499_27565[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (28))){
var inst_27414 = (state_27455[(25)]);
var inst_27395 = (state_27455[(21)]);
var inst_27414__$1 = cljs.core.seq.call(null,inst_27395);
var state_27455__$1 = (function (){var statearr_27500 = state_27455;
(statearr_27500[(25)] = inst_27414__$1);

return statearr_27500;
})();
if(inst_27414__$1){
var statearr_27501_27566 = state_27455__$1;
(statearr_27501_27566[(1)] = (33));

} else {
var statearr_27502_27567 = state_27455__$1;
(statearr_27502_27567[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (25))){
var inst_27397 = (state_27455[(20)]);
var inst_27398 = (state_27455[(10)]);
var inst_27400 = (inst_27398 < inst_27397);
var inst_27401 = inst_27400;
var state_27455__$1 = state_27455;
if(cljs.core.truth_(inst_27401)){
var statearr_27503_27568 = state_27455__$1;
(statearr_27503_27568[(1)] = (27));

} else {
var statearr_27504_27569 = state_27455__$1;
(statearr_27504_27569[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (34))){
var state_27455__$1 = state_27455;
var statearr_27505_27570 = state_27455__$1;
(statearr_27505_27570[(2)] = null);

(statearr_27505_27570[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (17))){
var state_27455__$1 = state_27455;
var statearr_27506_27571 = state_27455__$1;
(statearr_27506_27571[(2)] = null);

(statearr_27506_27571[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (3))){
var inst_27453 = (state_27455[(2)]);
var state_27455__$1 = state_27455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27455__$1,inst_27453);
} else {
if((state_val_27456 === (12))){
var inst_27382 = (state_27455[(2)]);
var state_27455__$1 = state_27455;
var statearr_27507_27572 = state_27455__$1;
(statearr_27507_27572[(2)] = inst_27382);

(statearr_27507_27572[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (2))){
var state_27455__$1 = state_27455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27455__$1,(4),ch);
} else {
if((state_val_27456 === (23))){
var state_27455__$1 = state_27455;
var statearr_27508_27573 = state_27455__$1;
(statearr_27508_27573[(2)] = null);

(statearr_27508_27573[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (35))){
var inst_27437 = (state_27455[(2)]);
var state_27455__$1 = state_27455;
var statearr_27509_27574 = state_27455__$1;
(statearr_27509_27574[(2)] = inst_27437);

(statearr_27509_27574[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (19))){
var inst_27354 = (state_27455[(7)]);
var inst_27358 = cljs.core.chunk_first.call(null,inst_27354);
var inst_27359 = cljs.core.chunk_rest.call(null,inst_27354);
var inst_27360 = cljs.core.count.call(null,inst_27358);
var inst_27332 = inst_27359;
var inst_27333 = inst_27358;
var inst_27334 = inst_27360;
var inst_27335 = (0);
var state_27455__$1 = (function (){var statearr_27510 = state_27455;
(statearr_27510[(13)] = inst_27335);

(statearr_27510[(15)] = inst_27332);

(statearr_27510[(16)] = inst_27334);

(statearr_27510[(17)] = inst_27333);

return statearr_27510;
})();
var statearr_27511_27575 = state_27455__$1;
(statearr_27511_27575[(2)] = null);

(statearr_27511_27575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (11))){
var inst_27332 = (state_27455[(15)]);
var inst_27354 = (state_27455[(7)]);
var inst_27354__$1 = cljs.core.seq.call(null,inst_27332);
var state_27455__$1 = (function (){var statearr_27512 = state_27455;
(statearr_27512[(7)] = inst_27354__$1);

return statearr_27512;
})();
if(inst_27354__$1){
var statearr_27513_27576 = state_27455__$1;
(statearr_27513_27576[(1)] = (16));

} else {
var statearr_27514_27577 = state_27455__$1;
(statearr_27514_27577[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (9))){
var inst_27384 = (state_27455[(2)]);
var state_27455__$1 = state_27455;
var statearr_27515_27578 = state_27455__$1;
(statearr_27515_27578[(2)] = inst_27384);

(statearr_27515_27578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (5))){
var inst_27330 = cljs.core.deref.call(null,cs);
var inst_27331 = cljs.core.seq.call(null,inst_27330);
var inst_27332 = inst_27331;
var inst_27333 = null;
var inst_27334 = (0);
var inst_27335 = (0);
var state_27455__$1 = (function (){var statearr_27516 = state_27455;
(statearr_27516[(13)] = inst_27335);

(statearr_27516[(15)] = inst_27332);

(statearr_27516[(16)] = inst_27334);

(statearr_27516[(17)] = inst_27333);

return statearr_27516;
})();
var statearr_27517_27579 = state_27455__$1;
(statearr_27517_27579[(2)] = null);

(statearr_27517_27579[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (14))){
var state_27455__$1 = state_27455;
var statearr_27518_27580 = state_27455__$1;
(statearr_27518_27580[(2)] = null);

(statearr_27518_27580[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (45))){
var inst_27445 = (state_27455[(2)]);
var state_27455__$1 = state_27455;
var statearr_27519_27581 = state_27455__$1;
(statearr_27519_27581[(2)] = inst_27445);

(statearr_27519_27581[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (26))){
var inst_27387 = (state_27455[(29)]);
var inst_27441 = (state_27455[(2)]);
var inst_27442 = cljs.core.seq.call(null,inst_27387);
var state_27455__$1 = (function (){var statearr_27520 = state_27455;
(statearr_27520[(31)] = inst_27441);

return statearr_27520;
})();
if(inst_27442){
var statearr_27521_27582 = state_27455__$1;
(statearr_27521_27582[(1)] = (42));

} else {
var statearr_27522_27583 = state_27455__$1;
(statearr_27522_27583[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (16))){
var inst_27354 = (state_27455[(7)]);
var inst_27356 = cljs.core.chunked_seq_QMARK_.call(null,inst_27354);
var state_27455__$1 = state_27455;
if(inst_27356){
var statearr_27523_27584 = state_27455__$1;
(statearr_27523_27584[(1)] = (19));

} else {
var statearr_27524_27585 = state_27455__$1;
(statearr_27524_27585[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (38))){
var inst_27434 = (state_27455[(2)]);
var state_27455__$1 = state_27455;
var statearr_27525_27586 = state_27455__$1;
(statearr_27525_27586[(2)] = inst_27434);

(statearr_27525_27586[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (30))){
var state_27455__$1 = state_27455;
var statearr_27526_27587 = state_27455__$1;
(statearr_27526_27587[(2)] = null);

(statearr_27526_27587[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (10))){
var inst_27335 = (state_27455[(13)]);
var inst_27333 = (state_27455[(17)]);
var inst_27343 = cljs.core._nth.call(null,inst_27333,inst_27335);
var inst_27344 = cljs.core.nth.call(null,inst_27343,(0),null);
var inst_27345 = cljs.core.nth.call(null,inst_27343,(1),null);
var state_27455__$1 = (function (){var statearr_27527 = state_27455;
(statearr_27527[(26)] = inst_27344);

return statearr_27527;
})();
if(cljs.core.truth_(inst_27345)){
var statearr_27528_27588 = state_27455__$1;
(statearr_27528_27588[(1)] = (13));

} else {
var statearr_27529_27589 = state_27455__$1;
(statearr_27529_27589[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (18))){
var inst_27380 = (state_27455[(2)]);
var state_27455__$1 = state_27455;
var statearr_27530_27590 = state_27455__$1;
(statearr_27530_27590[(2)] = inst_27380);

(statearr_27530_27590[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (42))){
var state_27455__$1 = state_27455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27455__$1,(45),dchan);
} else {
if((state_val_27456 === (37))){
var inst_27414 = (state_27455[(25)]);
var inst_27423 = (state_27455[(23)]);
var inst_27323 = (state_27455[(12)]);
var inst_27423__$1 = cljs.core.first.call(null,inst_27414);
var inst_27424 = cljs.core.async.put_BANG_.call(null,inst_27423__$1,inst_27323,done);
var state_27455__$1 = (function (){var statearr_27531 = state_27455;
(statearr_27531[(23)] = inst_27423__$1);

return statearr_27531;
})();
if(cljs.core.truth_(inst_27424)){
var statearr_27532_27591 = state_27455__$1;
(statearr_27532_27591[(1)] = (39));

} else {
var statearr_27533_27592 = state_27455__$1;
(statearr_27533_27592[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (8))){
var inst_27335 = (state_27455[(13)]);
var inst_27334 = (state_27455[(16)]);
var inst_27337 = (inst_27335 < inst_27334);
var inst_27338 = inst_27337;
var state_27455__$1 = state_27455;
if(cljs.core.truth_(inst_27338)){
var statearr_27534_27593 = state_27455__$1;
(statearr_27534_27593[(1)] = (10));

} else {
var statearr_27535_27594 = state_27455__$1;
(statearr_27535_27594[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__26624__auto__ = null;
var cljs$core$async$mult_$_state_machine__26624__auto____0 = (function (){
var statearr_27536 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27536[(0)] = cljs$core$async$mult_$_state_machine__26624__auto__);

(statearr_27536[(1)] = (1));

return statearr_27536;
});
var cljs$core$async$mult_$_state_machine__26624__auto____1 = (function (state_27455){
while(true){
var ret_value__26625__auto__ = (function (){try{while(true){
var result__26626__auto__ = switch__26623__auto__.call(null,state_27455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26626__auto__;
}
break;
}
}catch (e27537){if((e27537 instanceof Object)){
var ex__26627__auto__ = e27537;
var statearr_27538_27595 = state_27455;
(statearr_27538_27595[(5)] = ex__26627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27596 = state_27455;
state_27455 = G__27596;
continue;
} else {
return ret_value__26625__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26624__auto__ = function(state_27455){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26624__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26624__auto____1.call(this,state_27455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26624__auto____0;
cljs$core$async$mult_$_state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26624__auto____1;
return cljs$core$async$mult_$_state_machine__26624__auto__;
})()
})();
var state__26720__auto__ = (function (){var statearr_27539 = f__26719__auto__.call(null);
(statearr_27539[(6)] = c__26718__auto___27540);

return statearr_27539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26720__auto__);
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
var G__27598 = arguments.length;
switch (G__27598) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_27600 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_27600.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_27601 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_27601.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_27602 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_27602.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_27603 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_27603.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_27604 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_27604.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27615 = arguments.length;
var i__4737__auto___27616 = (0);
while(true){
if((i__4737__auto___27616 < len__4736__auto___27615)){
args__4742__auto__.push((arguments[i__4737__auto___27616]));

var G__27617 = (i__4737__auto___27616 + (1));
i__4737__auto___27616 = G__27617;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27609){
var map__27610 = p__27609;
var map__27610__$1 = (((((!((map__27610 == null))))?(((((map__27610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27610):map__27610);
var opts = map__27610__$1;
var statearr_27612_27618 = state;
(statearr_27612_27618[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_27613_27619 = state;
(statearr_27613_27619[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_27614_27620 = state;
(statearr_27614_27620[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27605){
var G__27606 = cljs.core.first.call(null,seq27605);
var seq27605__$1 = cljs.core.next.call(null,seq27605);
var G__27607 = cljs.core.first.call(null,seq27605__$1);
var seq27605__$2 = cljs.core.next.call(null,seq27605__$1);
var G__27608 = cljs.core.first.call(null,seq27605__$2);
var seq27605__$3 = cljs.core.next.call(null,seq27605__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27606,G__27607,G__27608,seq27605__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27621 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27621 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27622){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27622 = meta27622;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27623,meta27622__$1){
var self__ = this;
var _27623__$1 = this;
return (new cljs.core.async.t_cljs$core$async27621(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27622__$1));
}));

(cljs.core.async.t_cljs$core$async27621.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27623){
var self__ = this;
var _27623__$1 = this;
return self__.meta27622;
}));

(cljs.core.async.t_cljs$core$async27621.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27621.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async27621.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27621.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27621.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27621.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27621.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27621.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27621.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27622","meta27622",276199191,null)], null);
}));

(cljs.core.async.t_cljs$core$async27621.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27621.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27621");

(cljs.core.async.t_cljs$core$async27621.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27621");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27621.
 */
cljs.core.async.__GT_t_cljs$core$async27621 = (function cljs$core$async$mix_$___GT_t_cljs$core$async27621(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27622){
return (new cljs.core.async.t_cljs$core$async27621(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27622));
});

}

return (new cljs.core.async.t_cljs$core$async27621(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26718__auto___27785 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26719__auto__ = (function (){var switch__26623__auto__ = (function (state_27725){
var state_val_27726 = (state_27725[(1)]);
if((state_val_27726 === (7))){
var inst_27640 = (state_27725[(2)]);
var state_27725__$1 = state_27725;
var statearr_27727_27786 = state_27725__$1;
(statearr_27727_27786[(2)] = inst_27640);

(statearr_27727_27786[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (20))){
var inst_27652 = (state_27725[(7)]);
var state_27725__$1 = state_27725;
var statearr_27728_27787 = state_27725__$1;
(statearr_27728_27787[(2)] = inst_27652);

(statearr_27728_27787[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (27))){
var state_27725__$1 = state_27725;
var statearr_27729_27788 = state_27725__$1;
(statearr_27729_27788[(2)] = null);

(statearr_27729_27788[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (1))){
var inst_27627 = (state_27725[(8)]);
var inst_27627__$1 = calc_state.call(null);
var inst_27629 = (inst_27627__$1 == null);
var inst_27630 = cljs.core.not.call(null,inst_27629);
var state_27725__$1 = (function (){var statearr_27730 = state_27725;
(statearr_27730[(8)] = inst_27627__$1);

return statearr_27730;
})();
if(inst_27630){
var statearr_27731_27789 = state_27725__$1;
(statearr_27731_27789[(1)] = (2));

} else {
var statearr_27732_27790 = state_27725__$1;
(statearr_27732_27790[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (24))){
var inst_27699 = (state_27725[(9)]);
var inst_27676 = (state_27725[(10)]);
var inst_27685 = (state_27725[(11)]);
var inst_27699__$1 = inst_27676.call(null,inst_27685);
var state_27725__$1 = (function (){var statearr_27733 = state_27725;
(statearr_27733[(9)] = inst_27699__$1);

return statearr_27733;
})();
if(cljs.core.truth_(inst_27699__$1)){
var statearr_27734_27791 = state_27725__$1;
(statearr_27734_27791[(1)] = (29));

} else {
var statearr_27735_27792 = state_27725__$1;
(statearr_27735_27792[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (4))){
var inst_27643 = (state_27725[(2)]);
var state_27725__$1 = state_27725;
if(cljs.core.truth_(inst_27643)){
var statearr_27736_27793 = state_27725__$1;
(statearr_27736_27793[(1)] = (8));

} else {
var statearr_27737_27794 = state_27725__$1;
(statearr_27737_27794[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (15))){
var inst_27670 = (state_27725[(2)]);
var state_27725__$1 = state_27725;
if(cljs.core.truth_(inst_27670)){
var statearr_27738_27795 = state_27725__$1;
(statearr_27738_27795[(1)] = (19));

} else {
var statearr_27739_27796 = state_27725__$1;
(statearr_27739_27796[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (21))){
var inst_27675 = (state_27725[(12)]);
var inst_27675__$1 = (state_27725[(2)]);
var inst_27676 = cljs.core.get.call(null,inst_27675__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27677 = cljs.core.get.call(null,inst_27675__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27678 = cljs.core.get.call(null,inst_27675__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27725__$1 = (function (){var statearr_27740 = state_27725;
(statearr_27740[(13)] = inst_27677);

(statearr_27740[(10)] = inst_27676);

(statearr_27740[(12)] = inst_27675__$1);

return statearr_27740;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27725__$1,(22),inst_27678);
} else {
if((state_val_27726 === (31))){
var inst_27707 = (state_27725[(2)]);
var state_27725__$1 = state_27725;
if(cljs.core.truth_(inst_27707)){
var statearr_27741_27797 = state_27725__$1;
(statearr_27741_27797[(1)] = (32));

} else {
var statearr_27742_27798 = state_27725__$1;
(statearr_27742_27798[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (32))){
var inst_27684 = (state_27725[(14)]);
var state_27725__$1 = state_27725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27725__$1,(35),out,inst_27684);
} else {
if((state_val_27726 === (33))){
var inst_27675 = (state_27725[(12)]);
var inst_27652 = inst_27675;
var state_27725__$1 = (function (){var statearr_27743 = state_27725;
(statearr_27743[(7)] = inst_27652);

return statearr_27743;
})();
var statearr_27744_27799 = state_27725__$1;
(statearr_27744_27799[(2)] = null);

(statearr_27744_27799[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (13))){
var inst_27652 = (state_27725[(7)]);
var inst_27659 = inst_27652.cljs$lang$protocol_mask$partition0$;
var inst_27660 = (inst_27659 & (64));
var inst_27661 = inst_27652.cljs$core$ISeq$;
var inst_27662 = (cljs.core.PROTOCOL_SENTINEL === inst_27661);
var inst_27663 = ((inst_27660) || (inst_27662));
var state_27725__$1 = state_27725;
if(cljs.core.truth_(inst_27663)){
var statearr_27745_27800 = state_27725__$1;
(statearr_27745_27800[(1)] = (16));

} else {
var statearr_27746_27801 = state_27725__$1;
(statearr_27746_27801[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (22))){
var inst_27684 = (state_27725[(14)]);
var inst_27685 = (state_27725[(11)]);
var inst_27683 = (state_27725[(2)]);
var inst_27684__$1 = cljs.core.nth.call(null,inst_27683,(0),null);
var inst_27685__$1 = cljs.core.nth.call(null,inst_27683,(1),null);
var inst_27686 = (inst_27684__$1 == null);
var inst_27687 = cljs.core._EQ_.call(null,inst_27685__$1,change);
var inst_27688 = ((inst_27686) || (inst_27687));
var state_27725__$1 = (function (){var statearr_27747 = state_27725;
(statearr_27747[(14)] = inst_27684__$1);

(statearr_27747[(11)] = inst_27685__$1);

return statearr_27747;
})();
if(cljs.core.truth_(inst_27688)){
var statearr_27748_27802 = state_27725__$1;
(statearr_27748_27802[(1)] = (23));

} else {
var statearr_27749_27803 = state_27725__$1;
(statearr_27749_27803[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (36))){
var inst_27675 = (state_27725[(12)]);
var inst_27652 = inst_27675;
var state_27725__$1 = (function (){var statearr_27750 = state_27725;
(statearr_27750[(7)] = inst_27652);

return statearr_27750;
})();
var statearr_27751_27804 = state_27725__$1;
(statearr_27751_27804[(2)] = null);

(statearr_27751_27804[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (29))){
var inst_27699 = (state_27725[(9)]);
var state_27725__$1 = state_27725;
var statearr_27752_27805 = state_27725__$1;
(statearr_27752_27805[(2)] = inst_27699);

(statearr_27752_27805[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (6))){
var state_27725__$1 = state_27725;
var statearr_27753_27806 = state_27725__$1;
(statearr_27753_27806[(2)] = false);

(statearr_27753_27806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (28))){
var inst_27695 = (state_27725[(2)]);
var inst_27696 = calc_state.call(null);
var inst_27652 = inst_27696;
var state_27725__$1 = (function (){var statearr_27754 = state_27725;
(statearr_27754[(7)] = inst_27652);

(statearr_27754[(15)] = inst_27695);

return statearr_27754;
})();
var statearr_27755_27807 = state_27725__$1;
(statearr_27755_27807[(2)] = null);

(statearr_27755_27807[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (25))){
var inst_27721 = (state_27725[(2)]);
var state_27725__$1 = state_27725;
var statearr_27756_27808 = state_27725__$1;
(statearr_27756_27808[(2)] = inst_27721);

(statearr_27756_27808[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (34))){
var inst_27719 = (state_27725[(2)]);
var state_27725__$1 = state_27725;
var statearr_27757_27809 = state_27725__$1;
(statearr_27757_27809[(2)] = inst_27719);

(statearr_27757_27809[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (17))){
var state_27725__$1 = state_27725;
var statearr_27758_27810 = state_27725__$1;
(statearr_27758_27810[(2)] = false);

(statearr_27758_27810[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (3))){
var state_27725__$1 = state_27725;
var statearr_27759_27811 = state_27725__$1;
(statearr_27759_27811[(2)] = false);

(statearr_27759_27811[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (12))){
var inst_27723 = (state_27725[(2)]);
var state_27725__$1 = state_27725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27725__$1,inst_27723);
} else {
if((state_val_27726 === (2))){
var inst_27627 = (state_27725[(8)]);
var inst_27632 = inst_27627.cljs$lang$protocol_mask$partition0$;
var inst_27633 = (inst_27632 & (64));
var inst_27634 = inst_27627.cljs$core$ISeq$;
var inst_27635 = (cljs.core.PROTOCOL_SENTINEL === inst_27634);
var inst_27636 = ((inst_27633) || (inst_27635));
var state_27725__$1 = state_27725;
if(cljs.core.truth_(inst_27636)){
var statearr_27760_27812 = state_27725__$1;
(statearr_27760_27812[(1)] = (5));

} else {
var statearr_27761_27813 = state_27725__$1;
(statearr_27761_27813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (23))){
var inst_27684 = (state_27725[(14)]);
var inst_27690 = (inst_27684 == null);
var state_27725__$1 = state_27725;
if(cljs.core.truth_(inst_27690)){
var statearr_27762_27814 = state_27725__$1;
(statearr_27762_27814[(1)] = (26));

} else {
var statearr_27763_27815 = state_27725__$1;
(statearr_27763_27815[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (35))){
var inst_27710 = (state_27725[(2)]);
var state_27725__$1 = state_27725;
if(cljs.core.truth_(inst_27710)){
var statearr_27764_27816 = state_27725__$1;
(statearr_27764_27816[(1)] = (36));

} else {
var statearr_27765_27817 = state_27725__$1;
(statearr_27765_27817[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (19))){
var inst_27652 = (state_27725[(7)]);
var inst_27672 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27652);
var state_27725__$1 = state_27725;
var statearr_27766_27818 = state_27725__$1;
(statearr_27766_27818[(2)] = inst_27672);

(statearr_27766_27818[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (11))){
var inst_27652 = (state_27725[(7)]);
var inst_27656 = (inst_27652 == null);
var inst_27657 = cljs.core.not.call(null,inst_27656);
var state_27725__$1 = state_27725;
if(inst_27657){
var statearr_27767_27819 = state_27725__$1;
(statearr_27767_27819[(1)] = (13));

} else {
var statearr_27768_27820 = state_27725__$1;
(statearr_27768_27820[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (9))){
var inst_27627 = (state_27725[(8)]);
var state_27725__$1 = state_27725;
var statearr_27769_27821 = state_27725__$1;
(statearr_27769_27821[(2)] = inst_27627);

(statearr_27769_27821[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (5))){
var state_27725__$1 = state_27725;
var statearr_27770_27822 = state_27725__$1;
(statearr_27770_27822[(2)] = true);

(statearr_27770_27822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (14))){
var state_27725__$1 = state_27725;
var statearr_27771_27823 = state_27725__$1;
(statearr_27771_27823[(2)] = false);

(statearr_27771_27823[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (26))){
var inst_27685 = (state_27725[(11)]);
var inst_27692 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27685);
var state_27725__$1 = state_27725;
var statearr_27772_27824 = state_27725__$1;
(statearr_27772_27824[(2)] = inst_27692);

(statearr_27772_27824[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (16))){
var state_27725__$1 = state_27725;
var statearr_27773_27825 = state_27725__$1;
(statearr_27773_27825[(2)] = true);

(statearr_27773_27825[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (38))){
var inst_27715 = (state_27725[(2)]);
var state_27725__$1 = state_27725;
var statearr_27774_27826 = state_27725__$1;
(statearr_27774_27826[(2)] = inst_27715);

(statearr_27774_27826[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (30))){
var inst_27677 = (state_27725[(13)]);
var inst_27676 = (state_27725[(10)]);
var inst_27685 = (state_27725[(11)]);
var inst_27702 = cljs.core.empty_QMARK_.call(null,inst_27676);
var inst_27703 = inst_27677.call(null,inst_27685);
var inst_27704 = cljs.core.not.call(null,inst_27703);
var inst_27705 = ((inst_27702) && (inst_27704));
var state_27725__$1 = state_27725;
var statearr_27775_27827 = state_27725__$1;
(statearr_27775_27827[(2)] = inst_27705);

(statearr_27775_27827[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (10))){
var inst_27627 = (state_27725[(8)]);
var inst_27648 = (state_27725[(2)]);
var inst_27649 = cljs.core.get.call(null,inst_27648,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27650 = cljs.core.get.call(null,inst_27648,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27651 = cljs.core.get.call(null,inst_27648,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27652 = inst_27627;
var state_27725__$1 = (function (){var statearr_27776 = state_27725;
(statearr_27776[(16)] = inst_27651);

(statearr_27776[(7)] = inst_27652);

(statearr_27776[(17)] = inst_27649);

(statearr_27776[(18)] = inst_27650);

return statearr_27776;
})();
var statearr_27777_27828 = state_27725__$1;
(statearr_27777_27828[(2)] = null);

(statearr_27777_27828[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (18))){
var inst_27667 = (state_27725[(2)]);
var state_27725__$1 = state_27725;
var statearr_27778_27829 = state_27725__$1;
(statearr_27778_27829[(2)] = inst_27667);

(statearr_27778_27829[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (37))){
var state_27725__$1 = state_27725;
var statearr_27779_27830 = state_27725__$1;
(statearr_27779_27830[(2)] = null);

(statearr_27779_27830[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (8))){
var inst_27627 = (state_27725[(8)]);
var inst_27645 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27627);
var state_27725__$1 = state_27725;
var statearr_27780_27831 = state_27725__$1;
(statearr_27780_27831[(2)] = inst_27645);

(statearr_27780_27831[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__26624__auto__ = null;
var cljs$core$async$mix_$_state_machine__26624__auto____0 = (function (){
var statearr_27781 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27781[(0)] = cljs$core$async$mix_$_state_machine__26624__auto__);

(statearr_27781[(1)] = (1));

return statearr_27781;
});
var cljs$core$async$mix_$_state_machine__26624__auto____1 = (function (state_27725){
while(true){
var ret_value__26625__auto__ = (function (){try{while(true){
var result__26626__auto__ = switch__26623__auto__.call(null,state_27725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26626__auto__;
}
break;
}
}catch (e27782){if((e27782 instanceof Object)){
var ex__26627__auto__ = e27782;
var statearr_27783_27832 = state_27725;
(statearr_27783_27832[(5)] = ex__26627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27833 = state_27725;
state_27725 = G__27833;
continue;
} else {
return ret_value__26625__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26624__auto__ = function(state_27725){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26624__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26624__auto____1.call(this,state_27725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26624__auto____0;
cljs$core$async$mix_$_state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26624__auto____1;
return cljs$core$async$mix_$_state_machine__26624__auto__;
})()
})();
var state__26720__auto__ = (function (){var statearr_27784 = f__26719__auto__.call(null);
(statearr_27784[(6)] = c__26718__auto___27785);

return statearr_27784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26720__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_27836 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_27836.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_27837 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_27837.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_27838 = (function() {
var G__27839 = null;
var G__27839__1 = (function (p){
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
var G__27839__2 = (function (p,v){
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
G__27839 = function(p,v){
switch(arguments.length){
case 1:
return G__27839__1.call(this,p);
case 2:
return G__27839__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27839.cljs$core$IFn$_invoke$arity$1 = G__27839__1;
G__27839.cljs$core$IFn$_invoke$arity$2 = G__27839__2;
return G__27839;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__27835 = arguments.length;
switch (G__27835) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_27838.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_27838.call(null,p,v);
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
var G__27843 = arguments.length;
switch (G__27843) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__27841_SHARP_){
if(cljs.core.truth_(p1__27841_SHARP_.call(null,topic))){
return p1__27841_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27841_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27844 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27844 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27845){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27845 = meta27845;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27846,meta27845__$1){
var self__ = this;
var _27846__$1 = this;
return (new cljs.core.async.t_cljs$core$async27844(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27845__$1));
}));

(cljs.core.async.t_cljs$core$async27844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27846){
var self__ = this;
var _27846__$1 = this;
return self__.meta27845;
}));

(cljs.core.async.t_cljs$core$async27844.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27844.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async27844.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27844.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async27844.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async27844.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async27844.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async27844.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27845","meta27845",1826458023,null)], null);
}));

(cljs.core.async.t_cljs$core$async27844.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27844.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27844");

(cljs.core.async.t_cljs$core$async27844.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27844");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27844.
 */
cljs.core.async.__GT_t_cljs$core$async27844 = (function cljs$core$async$__GT_t_cljs$core$async27844(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27845){
return (new cljs.core.async.t_cljs$core$async27844(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27845));
});

}

return (new cljs.core.async.t_cljs$core$async27844(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26718__auto___27964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26719__auto__ = (function (){var switch__26623__auto__ = (function (state_27918){
var state_val_27919 = (state_27918[(1)]);
if((state_val_27919 === (7))){
var inst_27914 = (state_27918[(2)]);
var state_27918__$1 = state_27918;
var statearr_27920_27965 = state_27918__$1;
(statearr_27920_27965[(2)] = inst_27914);

(statearr_27920_27965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (20))){
var state_27918__$1 = state_27918;
var statearr_27921_27966 = state_27918__$1;
(statearr_27921_27966[(2)] = null);

(statearr_27921_27966[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (1))){
var state_27918__$1 = state_27918;
var statearr_27922_27967 = state_27918__$1;
(statearr_27922_27967[(2)] = null);

(statearr_27922_27967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (24))){
var inst_27897 = (state_27918[(7)]);
var inst_27906 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27897);
var state_27918__$1 = state_27918;
var statearr_27923_27968 = state_27918__$1;
(statearr_27923_27968[(2)] = inst_27906);

(statearr_27923_27968[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (4))){
var inst_27849 = (state_27918[(8)]);
var inst_27849__$1 = (state_27918[(2)]);
var inst_27850 = (inst_27849__$1 == null);
var state_27918__$1 = (function (){var statearr_27924 = state_27918;
(statearr_27924[(8)] = inst_27849__$1);

return statearr_27924;
})();
if(cljs.core.truth_(inst_27850)){
var statearr_27925_27969 = state_27918__$1;
(statearr_27925_27969[(1)] = (5));

} else {
var statearr_27926_27970 = state_27918__$1;
(statearr_27926_27970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (15))){
var inst_27891 = (state_27918[(2)]);
var state_27918__$1 = state_27918;
var statearr_27927_27971 = state_27918__$1;
(statearr_27927_27971[(2)] = inst_27891);

(statearr_27927_27971[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (21))){
var inst_27911 = (state_27918[(2)]);
var state_27918__$1 = (function (){var statearr_27928 = state_27918;
(statearr_27928[(9)] = inst_27911);

return statearr_27928;
})();
var statearr_27929_27972 = state_27918__$1;
(statearr_27929_27972[(2)] = null);

(statearr_27929_27972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (13))){
var inst_27873 = (state_27918[(10)]);
var inst_27875 = cljs.core.chunked_seq_QMARK_.call(null,inst_27873);
var state_27918__$1 = state_27918;
if(inst_27875){
var statearr_27930_27973 = state_27918__$1;
(statearr_27930_27973[(1)] = (16));

} else {
var statearr_27931_27974 = state_27918__$1;
(statearr_27931_27974[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (22))){
var inst_27903 = (state_27918[(2)]);
var state_27918__$1 = state_27918;
if(cljs.core.truth_(inst_27903)){
var statearr_27932_27975 = state_27918__$1;
(statearr_27932_27975[(1)] = (23));

} else {
var statearr_27933_27976 = state_27918__$1;
(statearr_27933_27976[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (6))){
var inst_27849 = (state_27918[(8)]);
var inst_27899 = (state_27918[(11)]);
var inst_27897 = (state_27918[(7)]);
var inst_27897__$1 = topic_fn.call(null,inst_27849);
var inst_27898 = cljs.core.deref.call(null,mults);
var inst_27899__$1 = cljs.core.get.call(null,inst_27898,inst_27897__$1);
var state_27918__$1 = (function (){var statearr_27934 = state_27918;
(statearr_27934[(11)] = inst_27899__$1);

(statearr_27934[(7)] = inst_27897__$1);

return statearr_27934;
})();
if(cljs.core.truth_(inst_27899__$1)){
var statearr_27935_27977 = state_27918__$1;
(statearr_27935_27977[(1)] = (19));

} else {
var statearr_27936_27978 = state_27918__$1;
(statearr_27936_27978[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (25))){
var inst_27908 = (state_27918[(2)]);
var state_27918__$1 = state_27918;
var statearr_27937_27979 = state_27918__$1;
(statearr_27937_27979[(2)] = inst_27908);

(statearr_27937_27979[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (17))){
var inst_27873 = (state_27918[(10)]);
var inst_27882 = cljs.core.first.call(null,inst_27873);
var inst_27883 = cljs.core.async.muxch_STAR_.call(null,inst_27882);
var inst_27884 = cljs.core.async.close_BANG_.call(null,inst_27883);
var inst_27885 = cljs.core.next.call(null,inst_27873);
var inst_27859 = inst_27885;
var inst_27860 = null;
var inst_27861 = (0);
var inst_27862 = (0);
var state_27918__$1 = (function (){var statearr_27938 = state_27918;
(statearr_27938[(12)] = inst_27860);

(statearr_27938[(13)] = inst_27884);

(statearr_27938[(14)] = inst_27861);

(statearr_27938[(15)] = inst_27859);

(statearr_27938[(16)] = inst_27862);

return statearr_27938;
})();
var statearr_27939_27980 = state_27918__$1;
(statearr_27939_27980[(2)] = null);

(statearr_27939_27980[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (3))){
var inst_27916 = (state_27918[(2)]);
var state_27918__$1 = state_27918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27918__$1,inst_27916);
} else {
if((state_val_27919 === (12))){
var inst_27893 = (state_27918[(2)]);
var state_27918__$1 = state_27918;
var statearr_27940_27981 = state_27918__$1;
(statearr_27940_27981[(2)] = inst_27893);

(statearr_27940_27981[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (2))){
var state_27918__$1 = state_27918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27918__$1,(4),ch);
} else {
if((state_val_27919 === (23))){
var state_27918__$1 = state_27918;
var statearr_27941_27982 = state_27918__$1;
(statearr_27941_27982[(2)] = null);

(statearr_27941_27982[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (19))){
var inst_27849 = (state_27918[(8)]);
var inst_27899 = (state_27918[(11)]);
var inst_27901 = cljs.core.async.muxch_STAR_.call(null,inst_27899);
var state_27918__$1 = state_27918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27918__$1,(22),inst_27901,inst_27849);
} else {
if((state_val_27919 === (11))){
var inst_27873 = (state_27918[(10)]);
var inst_27859 = (state_27918[(15)]);
var inst_27873__$1 = cljs.core.seq.call(null,inst_27859);
var state_27918__$1 = (function (){var statearr_27942 = state_27918;
(statearr_27942[(10)] = inst_27873__$1);

return statearr_27942;
})();
if(inst_27873__$1){
var statearr_27943_27983 = state_27918__$1;
(statearr_27943_27983[(1)] = (13));

} else {
var statearr_27944_27984 = state_27918__$1;
(statearr_27944_27984[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (9))){
var inst_27895 = (state_27918[(2)]);
var state_27918__$1 = state_27918;
var statearr_27945_27985 = state_27918__$1;
(statearr_27945_27985[(2)] = inst_27895);

(statearr_27945_27985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (5))){
var inst_27856 = cljs.core.deref.call(null,mults);
var inst_27857 = cljs.core.vals.call(null,inst_27856);
var inst_27858 = cljs.core.seq.call(null,inst_27857);
var inst_27859 = inst_27858;
var inst_27860 = null;
var inst_27861 = (0);
var inst_27862 = (0);
var state_27918__$1 = (function (){var statearr_27946 = state_27918;
(statearr_27946[(12)] = inst_27860);

(statearr_27946[(14)] = inst_27861);

(statearr_27946[(15)] = inst_27859);

(statearr_27946[(16)] = inst_27862);

return statearr_27946;
})();
var statearr_27947_27986 = state_27918__$1;
(statearr_27947_27986[(2)] = null);

(statearr_27947_27986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (14))){
var state_27918__$1 = state_27918;
var statearr_27951_27987 = state_27918__$1;
(statearr_27951_27987[(2)] = null);

(statearr_27951_27987[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (16))){
var inst_27873 = (state_27918[(10)]);
var inst_27877 = cljs.core.chunk_first.call(null,inst_27873);
var inst_27878 = cljs.core.chunk_rest.call(null,inst_27873);
var inst_27879 = cljs.core.count.call(null,inst_27877);
var inst_27859 = inst_27878;
var inst_27860 = inst_27877;
var inst_27861 = inst_27879;
var inst_27862 = (0);
var state_27918__$1 = (function (){var statearr_27952 = state_27918;
(statearr_27952[(12)] = inst_27860);

(statearr_27952[(14)] = inst_27861);

(statearr_27952[(15)] = inst_27859);

(statearr_27952[(16)] = inst_27862);

return statearr_27952;
})();
var statearr_27953_27988 = state_27918__$1;
(statearr_27953_27988[(2)] = null);

(statearr_27953_27988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (10))){
var inst_27860 = (state_27918[(12)]);
var inst_27861 = (state_27918[(14)]);
var inst_27859 = (state_27918[(15)]);
var inst_27862 = (state_27918[(16)]);
var inst_27867 = cljs.core._nth.call(null,inst_27860,inst_27862);
var inst_27868 = cljs.core.async.muxch_STAR_.call(null,inst_27867);
var inst_27869 = cljs.core.async.close_BANG_.call(null,inst_27868);
var inst_27870 = (inst_27862 + (1));
var tmp27948 = inst_27860;
var tmp27949 = inst_27861;
var tmp27950 = inst_27859;
var inst_27859__$1 = tmp27950;
var inst_27860__$1 = tmp27948;
var inst_27861__$1 = tmp27949;
var inst_27862__$1 = inst_27870;
var state_27918__$1 = (function (){var statearr_27954 = state_27918;
(statearr_27954[(12)] = inst_27860__$1);

(statearr_27954[(17)] = inst_27869);

(statearr_27954[(14)] = inst_27861__$1);

(statearr_27954[(15)] = inst_27859__$1);

(statearr_27954[(16)] = inst_27862__$1);

return statearr_27954;
})();
var statearr_27955_27989 = state_27918__$1;
(statearr_27955_27989[(2)] = null);

(statearr_27955_27989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (18))){
var inst_27888 = (state_27918[(2)]);
var state_27918__$1 = state_27918;
var statearr_27956_27990 = state_27918__$1;
(statearr_27956_27990[(2)] = inst_27888);

(statearr_27956_27990[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27919 === (8))){
var inst_27861 = (state_27918[(14)]);
var inst_27862 = (state_27918[(16)]);
var inst_27864 = (inst_27862 < inst_27861);
var inst_27865 = inst_27864;
var state_27918__$1 = state_27918;
if(cljs.core.truth_(inst_27865)){
var statearr_27957_27991 = state_27918__$1;
(statearr_27957_27991[(1)] = (10));

} else {
var statearr_27958_27992 = state_27918__$1;
(statearr_27958_27992[(1)] = (11));

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
var cljs$core$async$state_machine__26624__auto__ = null;
var cljs$core$async$state_machine__26624__auto____0 = (function (){
var statearr_27959 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27959[(0)] = cljs$core$async$state_machine__26624__auto__);

(statearr_27959[(1)] = (1));

return statearr_27959;
});
var cljs$core$async$state_machine__26624__auto____1 = (function (state_27918){
while(true){
var ret_value__26625__auto__ = (function (){try{while(true){
var result__26626__auto__ = switch__26623__auto__.call(null,state_27918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26626__auto__;
}
break;
}
}catch (e27960){if((e27960 instanceof Object)){
var ex__26627__auto__ = e27960;
var statearr_27961_27993 = state_27918;
(statearr_27961_27993[(5)] = ex__26627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27994 = state_27918;
state_27918 = G__27994;
continue;
} else {
return ret_value__26625__auto__;
}
break;
}
});
cljs$core$async$state_machine__26624__auto__ = function(state_27918){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26624__auto____1.call(this,state_27918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26624__auto____0;
cljs$core$async$state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26624__auto____1;
return cljs$core$async$state_machine__26624__auto__;
})()
})();
var state__26720__auto__ = (function (){var statearr_27962 = f__26719__auto__.call(null);
(statearr_27962[(6)] = c__26718__auto___27964);

return statearr_27962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26720__auto__);
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
var G__27996 = arguments.length;
switch (G__27996) {
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
var G__27999 = arguments.length;
switch (G__27999) {
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
var G__28002 = arguments.length;
switch (G__28002) {
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
var c__26718__auto___28069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26719__auto__ = (function (){var switch__26623__auto__ = (function (state_28041){
var state_val_28042 = (state_28041[(1)]);
if((state_val_28042 === (7))){
var state_28041__$1 = state_28041;
var statearr_28043_28070 = state_28041__$1;
(statearr_28043_28070[(2)] = null);

(statearr_28043_28070[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28042 === (1))){
var state_28041__$1 = state_28041;
var statearr_28044_28071 = state_28041__$1;
(statearr_28044_28071[(2)] = null);

(statearr_28044_28071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28042 === (4))){
var inst_28005 = (state_28041[(7)]);
var inst_28007 = (inst_28005 < cnt);
var state_28041__$1 = state_28041;
if(cljs.core.truth_(inst_28007)){
var statearr_28045_28072 = state_28041__$1;
(statearr_28045_28072[(1)] = (6));

} else {
var statearr_28046_28073 = state_28041__$1;
(statearr_28046_28073[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28042 === (15))){
var inst_28037 = (state_28041[(2)]);
var state_28041__$1 = state_28041;
var statearr_28047_28074 = state_28041__$1;
(statearr_28047_28074[(2)] = inst_28037);

(statearr_28047_28074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28042 === (13))){
var inst_28030 = cljs.core.async.close_BANG_.call(null,out);
var state_28041__$1 = state_28041;
var statearr_28048_28075 = state_28041__$1;
(statearr_28048_28075[(2)] = inst_28030);

(statearr_28048_28075[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28042 === (6))){
var state_28041__$1 = state_28041;
var statearr_28049_28076 = state_28041__$1;
(statearr_28049_28076[(2)] = null);

(statearr_28049_28076[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28042 === (3))){
var inst_28039 = (state_28041[(2)]);
var state_28041__$1 = state_28041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28041__$1,inst_28039);
} else {
if((state_val_28042 === (12))){
var inst_28027 = (state_28041[(8)]);
var inst_28027__$1 = (state_28041[(2)]);
var inst_28028 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28027__$1);
var state_28041__$1 = (function (){var statearr_28050 = state_28041;
(statearr_28050[(8)] = inst_28027__$1);

return statearr_28050;
})();
if(cljs.core.truth_(inst_28028)){
var statearr_28051_28077 = state_28041__$1;
(statearr_28051_28077[(1)] = (13));

} else {
var statearr_28052_28078 = state_28041__$1;
(statearr_28052_28078[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28042 === (2))){
var inst_28004 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28005 = (0);
var state_28041__$1 = (function (){var statearr_28053 = state_28041;
(statearr_28053[(9)] = inst_28004);

(statearr_28053[(7)] = inst_28005);

return statearr_28053;
})();
var statearr_28054_28079 = state_28041__$1;
(statearr_28054_28079[(2)] = null);

(statearr_28054_28079[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28042 === (11))){
var inst_28005 = (state_28041[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28041,(10),Object,null,(9));
var inst_28014 = chs__$1.call(null,inst_28005);
var inst_28015 = done.call(null,inst_28005);
var inst_28016 = cljs.core.async.take_BANG_.call(null,inst_28014,inst_28015);
var state_28041__$1 = state_28041;
var statearr_28055_28080 = state_28041__$1;
(statearr_28055_28080[(2)] = inst_28016);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28041__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28042 === (9))){
var inst_28005 = (state_28041[(7)]);
var inst_28018 = (state_28041[(2)]);
var inst_28019 = (inst_28005 + (1));
var inst_28005__$1 = inst_28019;
var state_28041__$1 = (function (){var statearr_28056 = state_28041;
(statearr_28056[(10)] = inst_28018);

(statearr_28056[(7)] = inst_28005__$1);

return statearr_28056;
})();
var statearr_28057_28081 = state_28041__$1;
(statearr_28057_28081[(2)] = null);

(statearr_28057_28081[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28042 === (5))){
var inst_28025 = (state_28041[(2)]);
var state_28041__$1 = (function (){var statearr_28058 = state_28041;
(statearr_28058[(11)] = inst_28025);

return statearr_28058;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28041__$1,(12),dchan);
} else {
if((state_val_28042 === (14))){
var inst_28027 = (state_28041[(8)]);
var inst_28032 = cljs.core.apply.call(null,f,inst_28027);
var state_28041__$1 = state_28041;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28041__$1,(16),out,inst_28032);
} else {
if((state_val_28042 === (16))){
var inst_28034 = (state_28041[(2)]);
var state_28041__$1 = (function (){var statearr_28059 = state_28041;
(statearr_28059[(12)] = inst_28034);

return statearr_28059;
})();
var statearr_28060_28082 = state_28041__$1;
(statearr_28060_28082[(2)] = null);

(statearr_28060_28082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28042 === (10))){
var inst_28009 = (state_28041[(2)]);
var inst_28010 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28041__$1 = (function (){var statearr_28061 = state_28041;
(statearr_28061[(13)] = inst_28009);

return statearr_28061;
})();
var statearr_28062_28083 = state_28041__$1;
(statearr_28062_28083[(2)] = inst_28010);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28041__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28042 === (8))){
var inst_28023 = (state_28041[(2)]);
var state_28041__$1 = state_28041;
var statearr_28063_28084 = state_28041__$1;
(statearr_28063_28084[(2)] = inst_28023);

(statearr_28063_28084[(1)] = (5));


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
var cljs$core$async$state_machine__26624__auto__ = null;
var cljs$core$async$state_machine__26624__auto____0 = (function (){
var statearr_28064 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28064[(0)] = cljs$core$async$state_machine__26624__auto__);

(statearr_28064[(1)] = (1));

return statearr_28064;
});
var cljs$core$async$state_machine__26624__auto____1 = (function (state_28041){
while(true){
var ret_value__26625__auto__ = (function (){try{while(true){
var result__26626__auto__ = switch__26623__auto__.call(null,state_28041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26626__auto__;
}
break;
}
}catch (e28065){if((e28065 instanceof Object)){
var ex__26627__auto__ = e28065;
var statearr_28066_28085 = state_28041;
(statearr_28066_28085[(5)] = ex__26627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28086 = state_28041;
state_28041 = G__28086;
continue;
} else {
return ret_value__26625__auto__;
}
break;
}
});
cljs$core$async$state_machine__26624__auto__ = function(state_28041){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26624__auto____1.call(this,state_28041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26624__auto____0;
cljs$core$async$state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26624__auto____1;
return cljs$core$async$state_machine__26624__auto__;
})()
})();
var state__26720__auto__ = (function (){var statearr_28067 = f__26719__auto__.call(null);
(statearr_28067[(6)] = c__26718__auto___28069);

return statearr_28067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26720__auto__);
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
var G__28089 = arguments.length;
switch (G__28089) {
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
var c__26718__auto___28143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26719__auto__ = (function (){var switch__26623__auto__ = (function (state_28121){
var state_val_28122 = (state_28121[(1)]);
if((state_val_28122 === (7))){
var inst_28101 = (state_28121[(7)]);
var inst_28100 = (state_28121[(8)]);
var inst_28100__$1 = (state_28121[(2)]);
var inst_28101__$1 = cljs.core.nth.call(null,inst_28100__$1,(0),null);
var inst_28102 = cljs.core.nth.call(null,inst_28100__$1,(1),null);
var inst_28103 = (inst_28101__$1 == null);
var state_28121__$1 = (function (){var statearr_28123 = state_28121;
(statearr_28123[(9)] = inst_28102);

(statearr_28123[(7)] = inst_28101__$1);

(statearr_28123[(8)] = inst_28100__$1);

return statearr_28123;
})();
if(cljs.core.truth_(inst_28103)){
var statearr_28124_28144 = state_28121__$1;
(statearr_28124_28144[(1)] = (8));

} else {
var statearr_28125_28145 = state_28121__$1;
(statearr_28125_28145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28122 === (1))){
var inst_28090 = cljs.core.vec.call(null,chs);
var inst_28091 = inst_28090;
var state_28121__$1 = (function (){var statearr_28126 = state_28121;
(statearr_28126[(10)] = inst_28091);

return statearr_28126;
})();
var statearr_28127_28146 = state_28121__$1;
(statearr_28127_28146[(2)] = null);

(statearr_28127_28146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28122 === (4))){
var inst_28091 = (state_28121[(10)]);
var state_28121__$1 = state_28121;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28121__$1,(7),inst_28091);
} else {
if((state_val_28122 === (6))){
var inst_28117 = (state_28121[(2)]);
var state_28121__$1 = state_28121;
var statearr_28128_28147 = state_28121__$1;
(statearr_28128_28147[(2)] = inst_28117);

(statearr_28128_28147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28122 === (3))){
var inst_28119 = (state_28121[(2)]);
var state_28121__$1 = state_28121;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28121__$1,inst_28119);
} else {
if((state_val_28122 === (2))){
var inst_28091 = (state_28121[(10)]);
var inst_28093 = cljs.core.count.call(null,inst_28091);
var inst_28094 = (inst_28093 > (0));
var state_28121__$1 = state_28121;
if(cljs.core.truth_(inst_28094)){
var statearr_28130_28148 = state_28121__$1;
(statearr_28130_28148[(1)] = (4));

} else {
var statearr_28131_28149 = state_28121__$1;
(statearr_28131_28149[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28122 === (11))){
var inst_28091 = (state_28121[(10)]);
var inst_28110 = (state_28121[(2)]);
var tmp28129 = inst_28091;
var inst_28091__$1 = tmp28129;
var state_28121__$1 = (function (){var statearr_28132 = state_28121;
(statearr_28132[(11)] = inst_28110);

(statearr_28132[(10)] = inst_28091__$1);

return statearr_28132;
})();
var statearr_28133_28150 = state_28121__$1;
(statearr_28133_28150[(2)] = null);

(statearr_28133_28150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28122 === (9))){
var inst_28101 = (state_28121[(7)]);
var state_28121__$1 = state_28121;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28121__$1,(11),out,inst_28101);
} else {
if((state_val_28122 === (5))){
var inst_28115 = cljs.core.async.close_BANG_.call(null,out);
var state_28121__$1 = state_28121;
var statearr_28134_28151 = state_28121__$1;
(statearr_28134_28151[(2)] = inst_28115);

(statearr_28134_28151[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28122 === (10))){
var inst_28113 = (state_28121[(2)]);
var state_28121__$1 = state_28121;
var statearr_28135_28152 = state_28121__$1;
(statearr_28135_28152[(2)] = inst_28113);

(statearr_28135_28152[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28122 === (8))){
var inst_28102 = (state_28121[(9)]);
var inst_28101 = (state_28121[(7)]);
var inst_28091 = (state_28121[(10)]);
var inst_28100 = (state_28121[(8)]);
var inst_28105 = (function (){var cs = inst_28091;
var vec__28096 = inst_28100;
var v = inst_28101;
var c = inst_28102;
return (function (p1__28087_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28087_SHARP_);
});
})();
var inst_28106 = cljs.core.filterv.call(null,inst_28105,inst_28091);
var inst_28091__$1 = inst_28106;
var state_28121__$1 = (function (){var statearr_28136 = state_28121;
(statearr_28136[(10)] = inst_28091__$1);

return statearr_28136;
})();
var statearr_28137_28153 = state_28121__$1;
(statearr_28137_28153[(2)] = null);

(statearr_28137_28153[(1)] = (2));


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
var cljs$core$async$state_machine__26624__auto__ = null;
var cljs$core$async$state_machine__26624__auto____0 = (function (){
var statearr_28138 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28138[(0)] = cljs$core$async$state_machine__26624__auto__);

(statearr_28138[(1)] = (1));

return statearr_28138;
});
var cljs$core$async$state_machine__26624__auto____1 = (function (state_28121){
while(true){
var ret_value__26625__auto__ = (function (){try{while(true){
var result__26626__auto__ = switch__26623__auto__.call(null,state_28121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26626__auto__;
}
break;
}
}catch (e28139){if((e28139 instanceof Object)){
var ex__26627__auto__ = e28139;
var statearr_28140_28154 = state_28121;
(statearr_28140_28154[(5)] = ex__26627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28155 = state_28121;
state_28121 = G__28155;
continue;
} else {
return ret_value__26625__auto__;
}
break;
}
});
cljs$core$async$state_machine__26624__auto__ = function(state_28121){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26624__auto____1.call(this,state_28121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26624__auto____0;
cljs$core$async$state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26624__auto____1;
return cljs$core$async$state_machine__26624__auto__;
})()
})();
var state__26720__auto__ = (function (){var statearr_28141 = f__26719__auto__.call(null);
(statearr_28141[(6)] = c__26718__auto___28143);

return statearr_28141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26720__auto__);
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
var G__28157 = arguments.length;
switch (G__28157) {
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
var c__26718__auto___28202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26719__auto__ = (function (){var switch__26623__auto__ = (function (state_28181){
var state_val_28182 = (state_28181[(1)]);
if((state_val_28182 === (7))){
var inst_28163 = (state_28181[(7)]);
var inst_28163__$1 = (state_28181[(2)]);
var inst_28164 = (inst_28163__$1 == null);
var inst_28165 = cljs.core.not.call(null,inst_28164);
var state_28181__$1 = (function (){var statearr_28183 = state_28181;
(statearr_28183[(7)] = inst_28163__$1);

return statearr_28183;
})();
if(inst_28165){
var statearr_28184_28203 = state_28181__$1;
(statearr_28184_28203[(1)] = (8));

} else {
var statearr_28185_28204 = state_28181__$1;
(statearr_28185_28204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (1))){
var inst_28158 = (0);
var state_28181__$1 = (function (){var statearr_28186 = state_28181;
(statearr_28186[(8)] = inst_28158);

return statearr_28186;
})();
var statearr_28187_28205 = state_28181__$1;
(statearr_28187_28205[(2)] = null);

(statearr_28187_28205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (4))){
var state_28181__$1 = state_28181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28181__$1,(7),ch);
} else {
if((state_val_28182 === (6))){
var inst_28176 = (state_28181[(2)]);
var state_28181__$1 = state_28181;
var statearr_28188_28206 = state_28181__$1;
(statearr_28188_28206[(2)] = inst_28176);

(statearr_28188_28206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (3))){
var inst_28178 = (state_28181[(2)]);
var inst_28179 = cljs.core.async.close_BANG_.call(null,out);
var state_28181__$1 = (function (){var statearr_28189 = state_28181;
(statearr_28189[(9)] = inst_28178);

return statearr_28189;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28181__$1,inst_28179);
} else {
if((state_val_28182 === (2))){
var inst_28158 = (state_28181[(8)]);
var inst_28160 = (inst_28158 < n);
var state_28181__$1 = state_28181;
if(cljs.core.truth_(inst_28160)){
var statearr_28190_28207 = state_28181__$1;
(statearr_28190_28207[(1)] = (4));

} else {
var statearr_28191_28208 = state_28181__$1;
(statearr_28191_28208[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (11))){
var inst_28158 = (state_28181[(8)]);
var inst_28168 = (state_28181[(2)]);
var inst_28169 = (inst_28158 + (1));
var inst_28158__$1 = inst_28169;
var state_28181__$1 = (function (){var statearr_28192 = state_28181;
(statearr_28192[(8)] = inst_28158__$1);

(statearr_28192[(10)] = inst_28168);

return statearr_28192;
})();
var statearr_28193_28209 = state_28181__$1;
(statearr_28193_28209[(2)] = null);

(statearr_28193_28209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (9))){
var state_28181__$1 = state_28181;
var statearr_28194_28210 = state_28181__$1;
(statearr_28194_28210[(2)] = null);

(statearr_28194_28210[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (5))){
var state_28181__$1 = state_28181;
var statearr_28195_28211 = state_28181__$1;
(statearr_28195_28211[(2)] = null);

(statearr_28195_28211[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (10))){
var inst_28173 = (state_28181[(2)]);
var state_28181__$1 = state_28181;
var statearr_28196_28212 = state_28181__$1;
(statearr_28196_28212[(2)] = inst_28173);

(statearr_28196_28212[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28182 === (8))){
var inst_28163 = (state_28181[(7)]);
var state_28181__$1 = state_28181;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28181__$1,(11),out,inst_28163);
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
var cljs$core$async$state_machine__26624__auto__ = null;
var cljs$core$async$state_machine__26624__auto____0 = (function (){
var statearr_28197 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28197[(0)] = cljs$core$async$state_machine__26624__auto__);

(statearr_28197[(1)] = (1));

return statearr_28197;
});
var cljs$core$async$state_machine__26624__auto____1 = (function (state_28181){
while(true){
var ret_value__26625__auto__ = (function (){try{while(true){
var result__26626__auto__ = switch__26623__auto__.call(null,state_28181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26626__auto__;
}
break;
}
}catch (e28198){if((e28198 instanceof Object)){
var ex__26627__auto__ = e28198;
var statearr_28199_28213 = state_28181;
(statearr_28199_28213[(5)] = ex__26627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28214 = state_28181;
state_28181 = G__28214;
continue;
} else {
return ret_value__26625__auto__;
}
break;
}
});
cljs$core$async$state_machine__26624__auto__ = function(state_28181){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26624__auto____1.call(this,state_28181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26624__auto____0;
cljs$core$async$state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26624__auto____1;
return cljs$core$async$state_machine__26624__auto__;
})()
})();
var state__26720__auto__ = (function (){var statearr_28200 = f__26719__auto__.call(null);
(statearr_28200[(6)] = c__26718__auto___28202);

return statearr_28200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26720__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28216 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28216 = (function (f,ch,meta28217){
this.f = f;
this.ch = ch;
this.meta28217 = meta28217;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28218,meta28217__$1){
var self__ = this;
var _28218__$1 = this;
return (new cljs.core.async.t_cljs$core$async28216(self__.f,self__.ch,meta28217__$1));
}));

(cljs.core.async.t_cljs$core$async28216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28218){
var self__ = this;
var _28218__$1 = this;
return self__.meta28217;
}));

(cljs.core.async.t_cljs$core$async28216.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28216.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28216.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28216.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28216.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28219 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28219 = (function (f,ch,meta28217,_,fn1,meta28220){
this.f = f;
this.ch = ch;
this.meta28217 = meta28217;
this._ = _;
this.fn1 = fn1;
this.meta28220 = meta28220;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28221,meta28220__$1){
var self__ = this;
var _28221__$1 = this;
return (new cljs.core.async.t_cljs$core$async28219(self__.f,self__.ch,self__.meta28217,self__._,self__.fn1,meta28220__$1));
}));

(cljs.core.async.t_cljs$core$async28219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28221){
var self__ = this;
var _28221__$1 = this;
return self__.meta28220;
}));

(cljs.core.async.t_cljs$core$async28219.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28219.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async28219.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28219.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__28215_SHARP_){
return f1.call(null,(((p1__28215_SHARP_ == null))?null:self__.f.call(null,p1__28215_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async28219.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28217","meta28217",-625594221,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28216","cljs.core.async/t_cljs$core$async28216",-171952351,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28220","meta28220",1540002239,null)], null);
}));

(cljs.core.async.t_cljs$core$async28219.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28219.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28219");

(cljs.core.async.t_cljs$core$async28219.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28219");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28219.
 */
cljs.core.async.__GT_t_cljs$core$async28219 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28219(f__$1,ch__$1,meta28217__$1,___$2,fn1__$1,meta28220){
return (new cljs.core.async.t_cljs$core$async28219(f__$1,ch__$1,meta28217__$1,___$2,fn1__$1,meta28220));
});

}

return (new cljs.core.async.t_cljs$core$async28219(self__.f,self__.ch,self__.meta28217,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async28216.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28216.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async28216.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28217","meta28217",-625594221,null)], null);
}));

(cljs.core.async.t_cljs$core$async28216.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28216.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28216");

(cljs.core.async.t_cljs$core$async28216.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28216");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28216.
 */
cljs.core.async.__GT_t_cljs$core$async28216 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28216(f__$1,ch__$1,meta28217){
return (new cljs.core.async.t_cljs$core$async28216(f__$1,ch__$1,meta28217));
});

}

return (new cljs.core.async.t_cljs$core$async28216(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28222 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28222 = (function (f,ch,meta28223){
this.f = f;
this.ch = ch;
this.meta28223 = meta28223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28224,meta28223__$1){
var self__ = this;
var _28224__$1 = this;
return (new cljs.core.async.t_cljs$core$async28222(self__.f,self__.ch,meta28223__$1));
}));

(cljs.core.async.t_cljs$core$async28222.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28224){
var self__ = this;
var _28224__$1 = this;
return self__.meta28223;
}));

(cljs.core.async.t_cljs$core$async28222.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28222.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28222.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28222.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28222.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28222.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async28222.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28223","meta28223",544628520,null)], null);
}));

(cljs.core.async.t_cljs$core$async28222.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28222.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28222");

(cljs.core.async.t_cljs$core$async28222.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28222");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28222.
 */
cljs.core.async.__GT_t_cljs$core$async28222 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28222(f__$1,ch__$1,meta28223){
return (new cljs.core.async.t_cljs$core$async28222(f__$1,ch__$1,meta28223));
});

}

return (new cljs.core.async.t_cljs$core$async28222(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28225 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28225 = (function (p,ch,meta28226){
this.p = p;
this.ch = ch;
this.meta28226 = meta28226;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28227,meta28226__$1){
var self__ = this;
var _28227__$1 = this;
return (new cljs.core.async.t_cljs$core$async28225(self__.p,self__.ch,meta28226__$1));
}));

(cljs.core.async.t_cljs$core$async28225.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28227){
var self__ = this;
var _28227__$1 = this;
return self__.meta28226;
}));

(cljs.core.async.t_cljs$core$async28225.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28225.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28225.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28225.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28225.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28225.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28225.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async28225.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28226","meta28226",-190140430,null)], null);
}));

(cljs.core.async.t_cljs$core$async28225.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28225.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28225");

(cljs.core.async.t_cljs$core$async28225.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28225");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28225.
 */
cljs.core.async.__GT_t_cljs$core$async28225 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28225(p__$1,ch__$1,meta28226){
return (new cljs.core.async.t_cljs$core$async28225(p__$1,ch__$1,meta28226));
});

}

return (new cljs.core.async.t_cljs$core$async28225(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28229 = arguments.length;
switch (G__28229) {
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
var c__26718__auto___28269 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26719__auto__ = (function (){var switch__26623__auto__ = (function (state_28250){
var state_val_28251 = (state_28250[(1)]);
if((state_val_28251 === (7))){
var inst_28246 = (state_28250[(2)]);
var state_28250__$1 = state_28250;
var statearr_28252_28270 = state_28250__$1;
(statearr_28252_28270[(2)] = inst_28246);

(statearr_28252_28270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (1))){
var state_28250__$1 = state_28250;
var statearr_28253_28271 = state_28250__$1;
(statearr_28253_28271[(2)] = null);

(statearr_28253_28271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (4))){
var inst_28232 = (state_28250[(7)]);
var inst_28232__$1 = (state_28250[(2)]);
var inst_28233 = (inst_28232__$1 == null);
var state_28250__$1 = (function (){var statearr_28254 = state_28250;
(statearr_28254[(7)] = inst_28232__$1);

return statearr_28254;
})();
if(cljs.core.truth_(inst_28233)){
var statearr_28255_28272 = state_28250__$1;
(statearr_28255_28272[(1)] = (5));

} else {
var statearr_28256_28273 = state_28250__$1;
(statearr_28256_28273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (6))){
var inst_28232 = (state_28250[(7)]);
var inst_28237 = p.call(null,inst_28232);
var state_28250__$1 = state_28250;
if(cljs.core.truth_(inst_28237)){
var statearr_28257_28274 = state_28250__$1;
(statearr_28257_28274[(1)] = (8));

} else {
var statearr_28258_28275 = state_28250__$1;
(statearr_28258_28275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (3))){
var inst_28248 = (state_28250[(2)]);
var state_28250__$1 = state_28250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28250__$1,inst_28248);
} else {
if((state_val_28251 === (2))){
var state_28250__$1 = state_28250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28250__$1,(4),ch);
} else {
if((state_val_28251 === (11))){
var inst_28240 = (state_28250[(2)]);
var state_28250__$1 = state_28250;
var statearr_28259_28276 = state_28250__$1;
(statearr_28259_28276[(2)] = inst_28240);

(statearr_28259_28276[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (9))){
var state_28250__$1 = state_28250;
var statearr_28260_28277 = state_28250__$1;
(statearr_28260_28277[(2)] = null);

(statearr_28260_28277[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (5))){
var inst_28235 = cljs.core.async.close_BANG_.call(null,out);
var state_28250__$1 = state_28250;
var statearr_28261_28278 = state_28250__$1;
(statearr_28261_28278[(2)] = inst_28235);

(statearr_28261_28278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (10))){
var inst_28243 = (state_28250[(2)]);
var state_28250__$1 = (function (){var statearr_28262 = state_28250;
(statearr_28262[(8)] = inst_28243);

return statearr_28262;
})();
var statearr_28263_28279 = state_28250__$1;
(statearr_28263_28279[(2)] = null);

(statearr_28263_28279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (8))){
var inst_28232 = (state_28250[(7)]);
var state_28250__$1 = state_28250;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28250__$1,(11),out,inst_28232);
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
var cljs$core$async$state_machine__26624__auto__ = null;
var cljs$core$async$state_machine__26624__auto____0 = (function (){
var statearr_28264 = [null,null,null,null,null,null,null,null,null];
(statearr_28264[(0)] = cljs$core$async$state_machine__26624__auto__);

(statearr_28264[(1)] = (1));

return statearr_28264;
});
var cljs$core$async$state_machine__26624__auto____1 = (function (state_28250){
while(true){
var ret_value__26625__auto__ = (function (){try{while(true){
var result__26626__auto__ = switch__26623__auto__.call(null,state_28250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26626__auto__;
}
break;
}
}catch (e28265){if((e28265 instanceof Object)){
var ex__26627__auto__ = e28265;
var statearr_28266_28280 = state_28250;
(statearr_28266_28280[(5)] = ex__26627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28281 = state_28250;
state_28250 = G__28281;
continue;
} else {
return ret_value__26625__auto__;
}
break;
}
});
cljs$core$async$state_machine__26624__auto__ = function(state_28250){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26624__auto____1.call(this,state_28250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26624__auto____0;
cljs$core$async$state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26624__auto____1;
return cljs$core$async$state_machine__26624__auto__;
})()
})();
var state__26720__auto__ = (function (){var statearr_28267 = f__26719__auto__.call(null);
(statearr_28267[(6)] = c__26718__auto___28269);

return statearr_28267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26720__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28283 = arguments.length;
switch (G__28283) {
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
var c__26718__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26719__auto__ = (function (){var switch__26623__auto__ = (function (state_28346){
var state_val_28347 = (state_28346[(1)]);
if((state_val_28347 === (7))){
var inst_28342 = (state_28346[(2)]);
var state_28346__$1 = state_28346;
var statearr_28348_28386 = state_28346__$1;
(statearr_28348_28386[(2)] = inst_28342);

(statearr_28348_28386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (20))){
var inst_28312 = (state_28346[(7)]);
var inst_28323 = (state_28346[(2)]);
var inst_28324 = cljs.core.next.call(null,inst_28312);
var inst_28298 = inst_28324;
var inst_28299 = null;
var inst_28300 = (0);
var inst_28301 = (0);
var state_28346__$1 = (function (){var statearr_28349 = state_28346;
(statearr_28349[(8)] = inst_28323);

(statearr_28349[(9)] = inst_28300);

(statearr_28349[(10)] = inst_28301);

(statearr_28349[(11)] = inst_28299);

(statearr_28349[(12)] = inst_28298);

return statearr_28349;
})();
var statearr_28350_28387 = state_28346__$1;
(statearr_28350_28387[(2)] = null);

(statearr_28350_28387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (1))){
var state_28346__$1 = state_28346;
var statearr_28351_28388 = state_28346__$1;
(statearr_28351_28388[(2)] = null);

(statearr_28351_28388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (4))){
var inst_28287 = (state_28346[(13)]);
var inst_28287__$1 = (state_28346[(2)]);
var inst_28288 = (inst_28287__$1 == null);
var state_28346__$1 = (function (){var statearr_28352 = state_28346;
(statearr_28352[(13)] = inst_28287__$1);

return statearr_28352;
})();
if(cljs.core.truth_(inst_28288)){
var statearr_28353_28389 = state_28346__$1;
(statearr_28353_28389[(1)] = (5));

} else {
var statearr_28354_28390 = state_28346__$1;
(statearr_28354_28390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (15))){
var state_28346__$1 = state_28346;
var statearr_28358_28391 = state_28346__$1;
(statearr_28358_28391[(2)] = null);

(statearr_28358_28391[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (21))){
var state_28346__$1 = state_28346;
var statearr_28359_28392 = state_28346__$1;
(statearr_28359_28392[(2)] = null);

(statearr_28359_28392[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (13))){
var inst_28300 = (state_28346[(9)]);
var inst_28301 = (state_28346[(10)]);
var inst_28299 = (state_28346[(11)]);
var inst_28298 = (state_28346[(12)]);
var inst_28308 = (state_28346[(2)]);
var inst_28309 = (inst_28301 + (1));
var tmp28355 = inst_28300;
var tmp28356 = inst_28299;
var tmp28357 = inst_28298;
var inst_28298__$1 = tmp28357;
var inst_28299__$1 = tmp28356;
var inst_28300__$1 = tmp28355;
var inst_28301__$1 = inst_28309;
var state_28346__$1 = (function (){var statearr_28360 = state_28346;
(statearr_28360[(9)] = inst_28300__$1);

(statearr_28360[(10)] = inst_28301__$1);

(statearr_28360[(11)] = inst_28299__$1);

(statearr_28360[(12)] = inst_28298__$1);

(statearr_28360[(14)] = inst_28308);

return statearr_28360;
})();
var statearr_28361_28393 = state_28346__$1;
(statearr_28361_28393[(2)] = null);

(statearr_28361_28393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (22))){
var state_28346__$1 = state_28346;
var statearr_28362_28394 = state_28346__$1;
(statearr_28362_28394[(2)] = null);

(statearr_28362_28394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (6))){
var inst_28287 = (state_28346[(13)]);
var inst_28296 = f.call(null,inst_28287);
var inst_28297 = cljs.core.seq.call(null,inst_28296);
var inst_28298 = inst_28297;
var inst_28299 = null;
var inst_28300 = (0);
var inst_28301 = (0);
var state_28346__$1 = (function (){var statearr_28363 = state_28346;
(statearr_28363[(9)] = inst_28300);

(statearr_28363[(10)] = inst_28301);

(statearr_28363[(11)] = inst_28299);

(statearr_28363[(12)] = inst_28298);

return statearr_28363;
})();
var statearr_28364_28395 = state_28346__$1;
(statearr_28364_28395[(2)] = null);

(statearr_28364_28395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (17))){
var inst_28312 = (state_28346[(7)]);
var inst_28316 = cljs.core.chunk_first.call(null,inst_28312);
var inst_28317 = cljs.core.chunk_rest.call(null,inst_28312);
var inst_28318 = cljs.core.count.call(null,inst_28316);
var inst_28298 = inst_28317;
var inst_28299 = inst_28316;
var inst_28300 = inst_28318;
var inst_28301 = (0);
var state_28346__$1 = (function (){var statearr_28365 = state_28346;
(statearr_28365[(9)] = inst_28300);

(statearr_28365[(10)] = inst_28301);

(statearr_28365[(11)] = inst_28299);

(statearr_28365[(12)] = inst_28298);

return statearr_28365;
})();
var statearr_28366_28396 = state_28346__$1;
(statearr_28366_28396[(2)] = null);

(statearr_28366_28396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (3))){
var inst_28344 = (state_28346[(2)]);
var state_28346__$1 = state_28346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28346__$1,inst_28344);
} else {
if((state_val_28347 === (12))){
var inst_28332 = (state_28346[(2)]);
var state_28346__$1 = state_28346;
var statearr_28367_28397 = state_28346__$1;
(statearr_28367_28397[(2)] = inst_28332);

(statearr_28367_28397[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (2))){
var state_28346__$1 = state_28346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28346__$1,(4),in$);
} else {
if((state_val_28347 === (23))){
var inst_28340 = (state_28346[(2)]);
var state_28346__$1 = state_28346;
var statearr_28368_28398 = state_28346__$1;
(statearr_28368_28398[(2)] = inst_28340);

(statearr_28368_28398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (19))){
var inst_28327 = (state_28346[(2)]);
var state_28346__$1 = state_28346;
var statearr_28369_28399 = state_28346__$1;
(statearr_28369_28399[(2)] = inst_28327);

(statearr_28369_28399[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (11))){
var inst_28312 = (state_28346[(7)]);
var inst_28298 = (state_28346[(12)]);
var inst_28312__$1 = cljs.core.seq.call(null,inst_28298);
var state_28346__$1 = (function (){var statearr_28370 = state_28346;
(statearr_28370[(7)] = inst_28312__$1);

return statearr_28370;
})();
if(inst_28312__$1){
var statearr_28371_28400 = state_28346__$1;
(statearr_28371_28400[(1)] = (14));

} else {
var statearr_28372_28401 = state_28346__$1;
(statearr_28372_28401[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (9))){
var inst_28334 = (state_28346[(2)]);
var inst_28335 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28346__$1 = (function (){var statearr_28373 = state_28346;
(statearr_28373[(15)] = inst_28334);

return statearr_28373;
})();
if(cljs.core.truth_(inst_28335)){
var statearr_28374_28402 = state_28346__$1;
(statearr_28374_28402[(1)] = (21));

} else {
var statearr_28375_28403 = state_28346__$1;
(statearr_28375_28403[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (5))){
var inst_28290 = cljs.core.async.close_BANG_.call(null,out);
var state_28346__$1 = state_28346;
var statearr_28376_28404 = state_28346__$1;
(statearr_28376_28404[(2)] = inst_28290);

(statearr_28376_28404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (14))){
var inst_28312 = (state_28346[(7)]);
var inst_28314 = cljs.core.chunked_seq_QMARK_.call(null,inst_28312);
var state_28346__$1 = state_28346;
if(inst_28314){
var statearr_28377_28405 = state_28346__$1;
(statearr_28377_28405[(1)] = (17));

} else {
var statearr_28378_28406 = state_28346__$1;
(statearr_28378_28406[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (16))){
var inst_28330 = (state_28346[(2)]);
var state_28346__$1 = state_28346;
var statearr_28379_28407 = state_28346__$1;
(statearr_28379_28407[(2)] = inst_28330);

(statearr_28379_28407[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (10))){
var inst_28301 = (state_28346[(10)]);
var inst_28299 = (state_28346[(11)]);
var inst_28306 = cljs.core._nth.call(null,inst_28299,inst_28301);
var state_28346__$1 = state_28346;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28346__$1,(13),out,inst_28306);
} else {
if((state_val_28347 === (18))){
var inst_28312 = (state_28346[(7)]);
var inst_28321 = cljs.core.first.call(null,inst_28312);
var state_28346__$1 = state_28346;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28346__$1,(20),out,inst_28321);
} else {
if((state_val_28347 === (8))){
var inst_28300 = (state_28346[(9)]);
var inst_28301 = (state_28346[(10)]);
var inst_28303 = (inst_28301 < inst_28300);
var inst_28304 = inst_28303;
var state_28346__$1 = state_28346;
if(cljs.core.truth_(inst_28304)){
var statearr_28380_28408 = state_28346__$1;
(statearr_28380_28408[(1)] = (10));

} else {
var statearr_28381_28409 = state_28346__$1;
(statearr_28381_28409[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__26624__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26624__auto____0 = (function (){
var statearr_28382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28382[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26624__auto__);

(statearr_28382[(1)] = (1));

return statearr_28382;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26624__auto____1 = (function (state_28346){
while(true){
var ret_value__26625__auto__ = (function (){try{while(true){
var result__26626__auto__ = switch__26623__auto__.call(null,state_28346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26626__auto__;
}
break;
}
}catch (e28383){if((e28383 instanceof Object)){
var ex__26627__auto__ = e28383;
var statearr_28384_28410 = state_28346;
(statearr_28384_28410[(5)] = ex__26627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28411 = state_28346;
state_28346 = G__28411;
continue;
} else {
return ret_value__26625__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26624__auto__ = function(state_28346){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26624__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26624__auto____1.call(this,state_28346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26624__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26624__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26624__auto__;
})()
})();
var state__26720__auto__ = (function (){var statearr_28385 = f__26719__auto__.call(null);
(statearr_28385[(6)] = c__26718__auto__);

return statearr_28385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26720__auto__);
}));

return c__26718__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28413 = arguments.length;
switch (G__28413) {
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
var G__28416 = arguments.length;
switch (G__28416) {
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
var G__28419 = arguments.length;
switch (G__28419) {
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
var c__26718__auto___28466 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26719__auto__ = (function (){var switch__26623__auto__ = (function (state_28443){
var state_val_28444 = (state_28443[(1)]);
if((state_val_28444 === (7))){
var inst_28438 = (state_28443[(2)]);
var state_28443__$1 = state_28443;
var statearr_28445_28467 = state_28443__$1;
(statearr_28445_28467[(2)] = inst_28438);

(statearr_28445_28467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (1))){
var inst_28420 = null;
var state_28443__$1 = (function (){var statearr_28446 = state_28443;
(statearr_28446[(7)] = inst_28420);

return statearr_28446;
})();
var statearr_28447_28468 = state_28443__$1;
(statearr_28447_28468[(2)] = null);

(statearr_28447_28468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (4))){
var inst_28423 = (state_28443[(8)]);
var inst_28423__$1 = (state_28443[(2)]);
var inst_28424 = (inst_28423__$1 == null);
var inst_28425 = cljs.core.not.call(null,inst_28424);
var state_28443__$1 = (function (){var statearr_28448 = state_28443;
(statearr_28448[(8)] = inst_28423__$1);

return statearr_28448;
})();
if(inst_28425){
var statearr_28449_28469 = state_28443__$1;
(statearr_28449_28469[(1)] = (5));

} else {
var statearr_28450_28470 = state_28443__$1;
(statearr_28450_28470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (6))){
var state_28443__$1 = state_28443;
var statearr_28451_28471 = state_28443__$1;
(statearr_28451_28471[(2)] = null);

(statearr_28451_28471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (3))){
var inst_28440 = (state_28443[(2)]);
var inst_28441 = cljs.core.async.close_BANG_.call(null,out);
var state_28443__$1 = (function (){var statearr_28452 = state_28443;
(statearr_28452[(9)] = inst_28440);

return statearr_28452;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28443__$1,inst_28441);
} else {
if((state_val_28444 === (2))){
var state_28443__$1 = state_28443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28443__$1,(4),ch);
} else {
if((state_val_28444 === (11))){
var inst_28423 = (state_28443[(8)]);
var inst_28432 = (state_28443[(2)]);
var inst_28420 = inst_28423;
var state_28443__$1 = (function (){var statearr_28453 = state_28443;
(statearr_28453[(7)] = inst_28420);

(statearr_28453[(10)] = inst_28432);

return statearr_28453;
})();
var statearr_28454_28472 = state_28443__$1;
(statearr_28454_28472[(2)] = null);

(statearr_28454_28472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (9))){
var inst_28423 = (state_28443[(8)]);
var state_28443__$1 = state_28443;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28443__$1,(11),out,inst_28423);
} else {
if((state_val_28444 === (5))){
var inst_28420 = (state_28443[(7)]);
var inst_28423 = (state_28443[(8)]);
var inst_28427 = cljs.core._EQ_.call(null,inst_28423,inst_28420);
var state_28443__$1 = state_28443;
if(inst_28427){
var statearr_28456_28473 = state_28443__$1;
(statearr_28456_28473[(1)] = (8));

} else {
var statearr_28457_28474 = state_28443__$1;
(statearr_28457_28474[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (10))){
var inst_28435 = (state_28443[(2)]);
var state_28443__$1 = state_28443;
var statearr_28458_28475 = state_28443__$1;
(statearr_28458_28475[(2)] = inst_28435);

(statearr_28458_28475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (8))){
var inst_28420 = (state_28443[(7)]);
var tmp28455 = inst_28420;
var inst_28420__$1 = tmp28455;
var state_28443__$1 = (function (){var statearr_28459 = state_28443;
(statearr_28459[(7)] = inst_28420__$1);

return statearr_28459;
})();
var statearr_28460_28476 = state_28443__$1;
(statearr_28460_28476[(2)] = null);

(statearr_28460_28476[(1)] = (2));


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
var cljs$core$async$state_machine__26624__auto__ = null;
var cljs$core$async$state_machine__26624__auto____0 = (function (){
var statearr_28461 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28461[(0)] = cljs$core$async$state_machine__26624__auto__);

(statearr_28461[(1)] = (1));

return statearr_28461;
});
var cljs$core$async$state_machine__26624__auto____1 = (function (state_28443){
while(true){
var ret_value__26625__auto__ = (function (){try{while(true){
var result__26626__auto__ = switch__26623__auto__.call(null,state_28443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26626__auto__;
}
break;
}
}catch (e28462){if((e28462 instanceof Object)){
var ex__26627__auto__ = e28462;
var statearr_28463_28477 = state_28443;
(statearr_28463_28477[(5)] = ex__26627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28478 = state_28443;
state_28443 = G__28478;
continue;
} else {
return ret_value__26625__auto__;
}
break;
}
});
cljs$core$async$state_machine__26624__auto__ = function(state_28443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26624__auto____1.call(this,state_28443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26624__auto____0;
cljs$core$async$state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26624__auto____1;
return cljs$core$async$state_machine__26624__auto__;
})()
})();
var state__26720__auto__ = (function (){var statearr_28464 = f__26719__auto__.call(null);
(statearr_28464[(6)] = c__26718__auto___28466);

return statearr_28464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26720__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28480 = arguments.length;
switch (G__28480) {
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
var c__26718__auto___28546 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26719__auto__ = (function (){var switch__26623__auto__ = (function (state_28518){
var state_val_28519 = (state_28518[(1)]);
if((state_val_28519 === (7))){
var inst_28514 = (state_28518[(2)]);
var state_28518__$1 = state_28518;
var statearr_28520_28547 = state_28518__$1;
(statearr_28520_28547[(2)] = inst_28514);

(statearr_28520_28547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (1))){
var inst_28481 = (new Array(n));
var inst_28482 = inst_28481;
var inst_28483 = (0);
var state_28518__$1 = (function (){var statearr_28521 = state_28518;
(statearr_28521[(7)] = inst_28483);

(statearr_28521[(8)] = inst_28482);

return statearr_28521;
})();
var statearr_28522_28548 = state_28518__$1;
(statearr_28522_28548[(2)] = null);

(statearr_28522_28548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (4))){
var inst_28486 = (state_28518[(9)]);
var inst_28486__$1 = (state_28518[(2)]);
var inst_28487 = (inst_28486__$1 == null);
var inst_28488 = cljs.core.not.call(null,inst_28487);
var state_28518__$1 = (function (){var statearr_28523 = state_28518;
(statearr_28523[(9)] = inst_28486__$1);

return statearr_28523;
})();
if(inst_28488){
var statearr_28524_28549 = state_28518__$1;
(statearr_28524_28549[(1)] = (5));

} else {
var statearr_28525_28550 = state_28518__$1;
(statearr_28525_28550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (15))){
var inst_28508 = (state_28518[(2)]);
var state_28518__$1 = state_28518;
var statearr_28526_28551 = state_28518__$1;
(statearr_28526_28551[(2)] = inst_28508);

(statearr_28526_28551[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (13))){
var state_28518__$1 = state_28518;
var statearr_28527_28552 = state_28518__$1;
(statearr_28527_28552[(2)] = null);

(statearr_28527_28552[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (6))){
var inst_28483 = (state_28518[(7)]);
var inst_28504 = (inst_28483 > (0));
var state_28518__$1 = state_28518;
if(cljs.core.truth_(inst_28504)){
var statearr_28528_28553 = state_28518__$1;
(statearr_28528_28553[(1)] = (12));

} else {
var statearr_28529_28554 = state_28518__$1;
(statearr_28529_28554[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (3))){
var inst_28516 = (state_28518[(2)]);
var state_28518__$1 = state_28518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28518__$1,inst_28516);
} else {
if((state_val_28519 === (12))){
var inst_28482 = (state_28518[(8)]);
var inst_28506 = cljs.core.vec.call(null,inst_28482);
var state_28518__$1 = state_28518;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28518__$1,(15),out,inst_28506);
} else {
if((state_val_28519 === (2))){
var state_28518__$1 = state_28518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28518__$1,(4),ch);
} else {
if((state_val_28519 === (11))){
var inst_28498 = (state_28518[(2)]);
var inst_28499 = (new Array(n));
var inst_28482 = inst_28499;
var inst_28483 = (0);
var state_28518__$1 = (function (){var statearr_28530 = state_28518;
(statearr_28530[(7)] = inst_28483);

(statearr_28530[(8)] = inst_28482);

(statearr_28530[(10)] = inst_28498);

return statearr_28530;
})();
var statearr_28531_28555 = state_28518__$1;
(statearr_28531_28555[(2)] = null);

(statearr_28531_28555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (9))){
var inst_28482 = (state_28518[(8)]);
var inst_28496 = cljs.core.vec.call(null,inst_28482);
var state_28518__$1 = state_28518;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28518__$1,(11),out,inst_28496);
} else {
if((state_val_28519 === (5))){
var inst_28483 = (state_28518[(7)]);
var inst_28491 = (state_28518[(11)]);
var inst_28482 = (state_28518[(8)]);
var inst_28486 = (state_28518[(9)]);
var inst_28490 = (inst_28482[inst_28483] = inst_28486);
var inst_28491__$1 = (inst_28483 + (1));
var inst_28492 = (inst_28491__$1 < n);
var state_28518__$1 = (function (){var statearr_28532 = state_28518;
(statearr_28532[(12)] = inst_28490);

(statearr_28532[(11)] = inst_28491__$1);

return statearr_28532;
})();
if(cljs.core.truth_(inst_28492)){
var statearr_28533_28556 = state_28518__$1;
(statearr_28533_28556[(1)] = (8));

} else {
var statearr_28534_28557 = state_28518__$1;
(statearr_28534_28557[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (14))){
var inst_28511 = (state_28518[(2)]);
var inst_28512 = cljs.core.async.close_BANG_.call(null,out);
var state_28518__$1 = (function (){var statearr_28536 = state_28518;
(statearr_28536[(13)] = inst_28511);

return statearr_28536;
})();
var statearr_28537_28558 = state_28518__$1;
(statearr_28537_28558[(2)] = inst_28512);

(statearr_28537_28558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (10))){
var inst_28502 = (state_28518[(2)]);
var state_28518__$1 = state_28518;
var statearr_28538_28559 = state_28518__$1;
(statearr_28538_28559[(2)] = inst_28502);

(statearr_28538_28559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (8))){
var inst_28491 = (state_28518[(11)]);
var inst_28482 = (state_28518[(8)]);
var tmp28535 = inst_28482;
var inst_28482__$1 = tmp28535;
var inst_28483 = inst_28491;
var state_28518__$1 = (function (){var statearr_28539 = state_28518;
(statearr_28539[(7)] = inst_28483);

(statearr_28539[(8)] = inst_28482__$1);

return statearr_28539;
})();
var statearr_28540_28560 = state_28518__$1;
(statearr_28540_28560[(2)] = null);

(statearr_28540_28560[(1)] = (2));


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
var cljs$core$async$state_machine__26624__auto__ = null;
var cljs$core$async$state_machine__26624__auto____0 = (function (){
var statearr_28541 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28541[(0)] = cljs$core$async$state_machine__26624__auto__);

(statearr_28541[(1)] = (1));

return statearr_28541;
});
var cljs$core$async$state_machine__26624__auto____1 = (function (state_28518){
while(true){
var ret_value__26625__auto__ = (function (){try{while(true){
var result__26626__auto__ = switch__26623__auto__.call(null,state_28518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26626__auto__;
}
break;
}
}catch (e28542){if((e28542 instanceof Object)){
var ex__26627__auto__ = e28542;
var statearr_28543_28561 = state_28518;
(statearr_28543_28561[(5)] = ex__26627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28562 = state_28518;
state_28518 = G__28562;
continue;
} else {
return ret_value__26625__auto__;
}
break;
}
});
cljs$core$async$state_machine__26624__auto__ = function(state_28518){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26624__auto____1.call(this,state_28518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26624__auto____0;
cljs$core$async$state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26624__auto____1;
return cljs$core$async$state_machine__26624__auto__;
})()
})();
var state__26720__auto__ = (function (){var statearr_28544 = f__26719__auto__.call(null);
(statearr_28544[(6)] = c__26718__auto___28546);

return statearr_28544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26720__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28564 = arguments.length;
switch (G__28564) {
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
var c__26718__auto___28634 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26719__auto__ = (function (){var switch__26623__auto__ = (function (state_28606){
var state_val_28607 = (state_28606[(1)]);
if((state_val_28607 === (7))){
var inst_28602 = (state_28606[(2)]);
var state_28606__$1 = state_28606;
var statearr_28608_28635 = state_28606__$1;
(statearr_28608_28635[(2)] = inst_28602);

(statearr_28608_28635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28607 === (1))){
var inst_28565 = [];
var inst_28566 = inst_28565;
var inst_28567 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28606__$1 = (function (){var statearr_28609 = state_28606;
(statearr_28609[(7)] = inst_28566);

(statearr_28609[(8)] = inst_28567);

return statearr_28609;
})();
var statearr_28610_28636 = state_28606__$1;
(statearr_28610_28636[(2)] = null);

(statearr_28610_28636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28607 === (4))){
var inst_28570 = (state_28606[(9)]);
var inst_28570__$1 = (state_28606[(2)]);
var inst_28571 = (inst_28570__$1 == null);
var inst_28572 = cljs.core.not.call(null,inst_28571);
var state_28606__$1 = (function (){var statearr_28611 = state_28606;
(statearr_28611[(9)] = inst_28570__$1);

return statearr_28611;
})();
if(inst_28572){
var statearr_28612_28637 = state_28606__$1;
(statearr_28612_28637[(1)] = (5));

} else {
var statearr_28613_28638 = state_28606__$1;
(statearr_28613_28638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28607 === (15))){
var inst_28596 = (state_28606[(2)]);
var state_28606__$1 = state_28606;
var statearr_28614_28639 = state_28606__$1;
(statearr_28614_28639[(2)] = inst_28596);

(statearr_28614_28639[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28607 === (13))){
var state_28606__$1 = state_28606;
var statearr_28615_28640 = state_28606__$1;
(statearr_28615_28640[(2)] = null);

(statearr_28615_28640[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28607 === (6))){
var inst_28566 = (state_28606[(7)]);
var inst_28591 = inst_28566.length;
var inst_28592 = (inst_28591 > (0));
var state_28606__$1 = state_28606;
if(cljs.core.truth_(inst_28592)){
var statearr_28616_28641 = state_28606__$1;
(statearr_28616_28641[(1)] = (12));

} else {
var statearr_28617_28642 = state_28606__$1;
(statearr_28617_28642[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28607 === (3))){
var inst_28604 = (state_28606[(2)]);
var state_28606__$1 = state_28606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28606__$1,inst_28604);
} else {
if((state_val_28607 === (12))){
var inst_28566 = (state_28606[(7)]);
var inst_28594 = cljs.core.vec.call(null,inst_28566);
var state_28606__$1 = state_28606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28606__$1,(15),out,inst_28594);
} else {
if((state_val_28607 === (2))){
var state_28606__$1 = state_28606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28606__$1,(4),ch);
} else {
if((state_val_28607 === (11))){
var inst_28574 = (state_28606[(10)]);
var inst_28570 = (state_28606[(9)]);
var inst_28584 = (state_28606[(2)]);
var inst_28585 = [];
var inst_28586 = inst_28585.push(inst_28570);
var inst_28566 = inst_28585;
var inst_28567 = inst_28574;
var state_28606__$1 = (function (){var statearr_28618 = state_28606;
(statearr_28618[(11)] = inst_28586);

(statearr_28618[(7)] = inst_28566);

(statearr_28618[(12)] = inst_28584);

(statearr_28618[(8)] = inst_28567);

return statearr_28618;
})();
var statearr_28619_28643 = state_28606__$1;
(statearr_28619_28643[(2)] = null);

(statearr_28619_28643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28607 === (9))){
var inst_28566 = (state_28606[(7)]);
var inst_28582 = cljs.core.vec.call(null,inst_28566);
var state_28606__$1 = state_28606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28606__$1,(11),out,inst_28582);
} else {
if((state_val_28607 === (5))){
var inst_28574 = (state_28606[(10)]);
var inst_28570 = (state_28606[(9)]);
var inst_28567 = (state_28606[(8)]);
var inst_28574__$1 = f.call(null,inst_28570);
var inst_28575 = cljs.core._EQ_.call(null,inst_28574__$1,inst_28567);
var inst_28576 = cljs.core.keyword_identical_QMARK_.call(null,inst_28567,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28577 = ((inst_28575) || (inst_28576));
var state_28606__$1 = (function (){var statearr_28620 = state_28606;
(statearr_28620[(10)] = inst_28574__$1);

return statearr_28620;
})();
if(cljs.core.truth_(inst_28577)){
var statearr_28621_28644 = state_28606__$1;
(statearr_28621_28644[(1)] = (8));

} else {
var statearr_28622_28645 = state_28606__$1;
(statearr_28622_28645[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28607 === (14))){
var inst_28599 = (state_28606[(2)]);
var inst_28600 = cljs.core.async.close_BANG_.call(null,out);
var state_28606__$1 = (function (){var statearr_28624 = state_28606;
(statearr_28624[(13)] = inst_28599);

return statearr_28624;
})();
var statearr_28625_28646 = state_28606__$1;
(statearr_28625_28646[(2)] = inst_28600);

(statearr_28625_28646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28607 === (10))){
var inst_28589 = (state_28606[(2)]);
var state_28606__$1 = state_28606;
var statearr_28626_28647 = state_28606__$1;
(statearr_28626_28647[(2)] = inst_28589);

(statearr_28626_28647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28607 === (8))){
var inst_28574 = (state_28606[(10)]);
var inst_28570 = (state_28606[(9)]);
var inst_28566 = (state_28606[(7)]);
var inst_28579 = inst_28566.push(inst_28570);
var tmp28623 = inst_28566;
var inst_28566__$1 = tmp28623;
var inst_28567 = inst_28574;
var state_28606__$1 = (function (){var statearr_28627 = state_28606;
(statearr_28627[(14)] = inst_28579);

(statearr_28627[(7)] = inst_28566__$1);

(statearr_28627[(8)] = inst_28567);

return statearr_28627;
})();
var statearr_28628_28648 = state_28606__$1;
(statearr_28628_28648[(2)] = null);

(statearr_28628_28648[(1)] = (2));


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
var cljs$core$async$state_machine__26624__auto__ = null;
var cljs$core$async$state_machine__26624__auto____0 = (function (){
var statearr_28629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28629[(0)] = cljs$core$async$state_machine__26624__auto__);

(statearr_28629[(1)] = (1));

return statearr_28629;
});
var cljs$core$async$state_machine__26624__auto____1 = (function (state_28606){
while(true){
var ret_value__26625__auto__ = (function (){try{while(true){
var result__26626__auto__ = switch__26623__auto__.call(null,state_28606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26626__auto__;
}
break;
}
}catch (e28630){if((e28630 instanceof Object)){
var ex__26627__auto__ = e28630;
var statearr_28631_28649 = state_28606;
(statearr_28631_28649[(5)] = ex__26627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28650 = state_28606;
state_28606 = G__28650;
continue;
} else {
return ret_value__26625__auto__;
}
break;
}
});
cljs$core$async$state_machine__26624__auto__ = function(state_28606){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26624__auto____1.call(this,state_28606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26624__auto____0;
cljs$core$async$state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26624__auto____1;
return cljs$core$async$state_machine__26624__auto__;
})()
})();
var state__26720__auto__ = (function (){var statearr_28632 = f__26719__auto__.call(null);
(statearr_28632[(6)] = c__26718__auto___28634);

return statearr_28632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26720__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1651858388867
