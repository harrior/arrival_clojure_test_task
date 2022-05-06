// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return (!((goog.debugLoader_ == null)));
});
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4126__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
return ((cljs.core._EQ_.call(null,"goog",ns)) || (cljs.core._EQ_.call(null,"cljs.core",ns)) || (cljs.core._EQ_.call(null,"cljs.nodejs",ns)) || (goog.string.startsWith(ns,"clojure.")) || (goog.string.startsWith(ns,"goog.")));
});
figwheel.client.file_reloading.base_requires_for_ns_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__28579 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__28579 == null)){
return null;
} else {
return goog.object.get(G__28579,"requires");
}
}):(function (path){
var G__28580 = goog.object.get(goog.dependencies_.requires,path);
if((G__28580 == null)){
return null;
} else {
return goog.object.getKeys(G__28580);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28581_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28581_SHARP_)));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
}));
figwheel.client.file_reloading.path__GT_name = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__28582 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__28582__$1 = (((G__28582 == null))?null:goog.object.get(G__28582,"provides"));
if((G__28582__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__28582__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return goog.object.forEach(goog.object.filter(goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,goog.object.get(dep,"provides")));
})),(function (dep,path,_){
var provides = goog.object.get(dep,"provides");
var requires = goog.object.get(dep,"requires");
var seq__28583 = cljs.core.seq.call(null,provides);
var chunk__28584 = null;
var count__28585 = (0);
var i__28586 = (0);
while(true){
if((i__28586 < count__28585)){
var prov = cljs.core._nth.call(null,chunk__28584,i__28586);
var seq__28595_28607 = cljs.core.seq.call(null,requires);
var chunk__28596_28608 = null;
var count__28597_28609 = (0);
var i__28598_28610 = (0);
while(true){
if((i__28598_28610 < count__28597_28609)){
var req_28611 = cljs.core._nth.call(null,chunk__28596_28608,i__28598_28610);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28611,prov);


var G__28612 = seq__28595_28607;
var G__28613 = chunk__28596_28608;
var G__28614 = count__28597_28609;
var G__28615 = (i__28598_28610 + (1));
seq__28595_28607 = G__28612;
chunk__28596_28608 = G__28613;
count__28597_28609 = G__28614;
i__28598_28610 = G__28615;
continue;
} else {
var temp__5720__auto___28616 = cljs.core.seq.call(null,seq__28595_28607);
if(temp__5720__auto___28616){
var seq__28595_28617__$1 = temp__5720__auto___28616;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28595_28617__$1)){
var c__4556__auto___28618 = cljs.core.chunk_first.call(null,seq__28595_28617__$1);
var G__28619 = cljs.core.chunk_rest.call(null,seq__28595_28617__$1);
var G__28620 = c__4556__auto___28618;
var G__28621 = cljs.core.count.call(null,c__4556__auto___28618);
var G__28622 = (0);
seq__28595_28607 = G__28619;
chunk__28596_28608 = G__28620;
count__28597_28609 = G__28621;
i__28598_28610 = G__28622;
continue;
} else {
var req_28623 = cljs.core.first.call(null,seq__28595_28617__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28623,prov);


var G__28624 = cljs.core.next.call(null,seq__28595_28617__$1);
var G__28625 = null;
var G__28626 = (0);
var G__28627 = (0);
seq__28595_28607 = G__28624;
chunk__28596_28608 = G__28625;
count__28597_28609 = G__28626;
i__28598_28610 = G__28627;
continue;
}
} else {
}
}
break;
}


var G__28628 = seq__28583;
var G__28629 = chunk__28584;
var G__28630 = count__28585;
var G__28631 = (i__28586 + (1));
seq__28583 = G__28628;
chunk__28584 = G__28629;
count__28585 = G__28630;
i__28586 = G__28631;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28583);
if(temp__5720__auto__){
var seq__28583__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28583__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28583__$1);
var G__28632 = cljs.core.chunk_rest.call(null,seq__28583__$1);
var G__28633 = c__4556__auto__;
var G__28634 = cljs.core.count.call(null,c__4556__auto__);
var G__28635 = (0);
seq__28583 = G__28632;
chunk__28584 = G__28633;
count__28585 = G__28634;
i__28586 = G__28635;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28583__$1);
var seq__28599_28636 = cljs.core.seq.call(null,requires);
var chunk__28600_28637 = null;
var count__28601_28638 = (0);
var i__28602_28639 = (0);
while(true){
if((i__28602_28639 < count__28601_28638)){
var req_28640 = cljs.core._nth.call(null,chunk__28600_28637,i__28602_28639);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28640,prov);


var G__28641 = seq__28599_28636;
var G__28642 = chunk__28600_28637;
var G__28643 = count__28601_28638;
var G__28644 = (i__28602_28639 + (1));
seq__28599_28636 = G__28641;
chunk__28600_28637 = G__28642;
count__28601_28638 = G__28643;
i__28602_28639 = G__28644;
continue;
} else {
var temp__5720__auto___28645__$1 = cljs.core.seq.call(null,seq__28599_28636);
if(temp__5720__auto___28645__$1){
var seq__28599_28646__$1 = temp__5720__auto___28645__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28599_28646__$1)){
var c__4556__auto___28647 = cljs.core.chunk_first.call(null,seq__28599_28646__$1);
var G__28648 = cljs.core.chunk_rest.call(null,seq__28599_28646__$1);
var G__28649 = c__4556__auto___28647;
var G__28650 = cljs.core.count.call(null,c__4556__auto___28647);
var G__28651 = (0);
seq__28599_28636 = G__28648;
chunk__28600_28637 = G__28649;
count__28601_28638 = G__28650;
i__28602_28639 = G__28651;
continue;
} else {
var req_28652 = cljs.core.first.call(null,seq__28599_28646__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28652,prov);


var G__28653 = cljs.core.next.call(null,seq__28599_28646__$1);
var G__28654 = null;
var G__28655 = (0);
var G__28656 = (0);
seq__28599_28636 = G__28653;
chunk__28600_28637 = G__28654;
count__28601_28638 = G__28655;
i__28602_28639 = G__28656;
continue;
}
} else {
}
}
break;
}


var G__28657 = cljs.core.next.call(null,seq__28583__$1);
var G__28658 = null;
var G__28659 = (0);
var G__28660 = (0);
seq__28583 = G__28657;
chunk__28584 = G__28658;
count__28585 = G__28659;
i__28586 = G__28660;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (deps,path,_){
var seq__28603 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__28604 = null;
var count__28605 = (0);
var i__28606 = (0);
while(true){
if((i__28606 < count__28605)){
var prov = cljs.core._nth.call(null,chunk__28604,i__28606);
goog.object.forEach(deps,((function (seq__28603,chunk__28604,count__28605,i__28606,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__28603,chunk__28604,count__28605,i__28606,prov,requires))
);


var G__28661 = seq__28603;
var G__28662 = chunk__28604;
var G__28663 = count__28605;
var G__28664 = (i__28606 + (1));
seq__28603 = G__28661;
chunk__28604 = G__28662;
count__28605 = G__28663;
i__28606 = G__28664;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28603);
if(temp__5720__auto__){
var seq__28603__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28603__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28603__$1);
var G__28665 = cljs.core.chunk_rest.call(null,seq__28603__$1);
var G__28666 = c__4556__auto__;
var G__28667 = cljs.core.count.call(null,c__4556__auto__);
var G__28668 = (0);
seq__28603 = G__28665;
chunk__28604 = G__28666;
count__28605 = G__28667;
i__28606 = G__28668;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28603__$1);
goog.object.forEach(deps,((function (seq__28603,chunk__28604,count__28605,i__28606,prov,seq__28603__$1,temp__5720__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__28603,chunk__28604,count__28605,i__28606,prov,seq__28603__$1,temp__5720__auto__,requires))
);


var G__28669 = cljs.core.next.call(null,seq__28603__$1);
var G__28670 = null;
var G__28671 = (0);
var G__28672 = (0);
seq__28603 = G__28669;
chunk__28604 = G__28670;
count__28605 = G__28671;
i__28606 = G__28672;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__28673){
var vec__28674 = p__28673;
var _ = cljs.core.nth.call(null,vec__28674,(0),null);
var v = cljs.core.nth.call(null,vec__28674,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__28677){
var vec__28678 = p__28677;
var k = cljs.core.nth.call(null,vec__28678,(0),null);
var v = cljs.core.nth.call(null,vec__28678,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28690_28698 = cljs.core.seq.call(null,deps);
var chunk__28691_28699 = null;
var count__28692_28700 = (0);
var i__28693_28701 = (0);
while(true){
if((i__28693_28701 < count__28692_28700)){
var dep_28702 = cljs.core._nth.call(null,chunk__28691_28699,i__28693_28701);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_28702;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28702));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28702,(depth + (1)),state);
} else {
}


var G__28703 = seq__28690_28698;
var G__28704 = chunk__28691_28699;
var G__28705 = count__28692_28700;
var G__28706 = (i__28693_28701 + (1));
seq__28690_28698 = G__28703;
chunk__28691_28699 = G__28704;
count__28692_28700 = G__28705;
i__28693_28701 = G__28706;
continue;
} else {
var temp__5720__auto___28707 = cljs.core.seq.call(null,seq__28690_28698);
if(temp__5720__auto___28707){
var seq__28690_28708__$1 = temp__5720__auto___28707;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28690_28708__$1)){
var c__4556__auto___28709 = cljs.core.chunk_first.call(null,seq__28690_28708__$1);
var G__28710 = cljs.core.chunk_rest.call(null,seq__28690_28708__$1);
var G__28711 = c__4556__auto___28709;
var G__28712 = cljs.core.count.call(null,c__4556__auto___28709);
var G__28713 = (0);
seq__28690_28698 = G__28710;
chunk__28691_28699 = G__28711;
count__28692_28700 = G__28712;
i__28693_28701 = G__28713;
continue;
} else {
var dep_28714 = cljs.core.first.call(null,seq__28690_28708__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_28714;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28714));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28714,(depth + (1)),state);
} else {
}


var G__28715 = cljs.core.next.call(null,seq__28690_28708__$1);
var G__28716 = null;
var G__28717 = (0);
var G__28718 = (0);
seq__28690_28698 = G__28715;
chunk__28691_28699 = G__28716;
count__28692_28700 = G__28717;
i__28693_28701 = G__28718;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28694){
var vec__28695 = p__28694;
var seq__28696 = cljs.core.seq.call(null,vec__28695);
var first__28697 = cljs.core.first.call(null,seq__28696);
var seq__28696__$1 = cljs.core.next.call(null,seq__28696);
var x = first__28697;
var xs = seq__28696__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__28681_SHARP_){
return clojure.set.difference.call(null,p1__28681_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.debugLoader_.written_,path);

return goog.object.remove(goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__28719_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__28719_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28720 = cljs.core.seq.call(null,provides);
var chunk__28721 = null;
var count__28722 = (0);
var i__28723 = (0);
while(true){
if((i__28723 < count__28722)){
var prov = cljs.core._nth.call(null,chunk__28721,i__28723);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28732_28740 = cljs.core.seq.call(null,requires);
var chunk__28733_28741 = null;
var count__28734_28742 = (0);
var i__28735_28743 = (0);
while(true){
if((i__28735_28743 < count__28734_28742)){
var req_28744 = cljs.core._nth.call(null,chunk__28733_28741,i__28735_28743);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28744,prov);


var G__28745 = seq__28732_28740;
var G__28746 = chunk__28733_28741;
var G__28747 = count__28734_28742;
var G__28748 = (i__28735_28743 + (1));
seq__28732_28740 = G__28745;
chunk__28733_28741 = G__28746;
count__28734_28742 = G__28747;
i__28735_28743 = G__28748;
continue;
} else {
var temp__5720__auto___28749 = cljs.core.seq.call(null,seq__28732_28740);
if(temp__5720__auto___28749){
var seq__28732_28750__$1 = temp__5720__auto___28749;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28732_28750__$1)){
var c__4556__auto___28751 = cljs.core.chunk_first.call(null,seq__28732_28750__$1);
var G__28752 = cljs.core.chunk_rest.call(null,seq__28732_28750__$1);
var G__28753 = c__4556__auto___28751;
var G__28754 = cljs.core.count.call(null,c__4556__auto___28751);
var G__28755 = (0);
seq__28732_28740 = G__28752;
chunk__28733_28741 = G__28753;
count__28734_28742 = G__28754;
i__28735_28743 = G__28755;
continue;
} else {
var req_28756 = cljs.core.first.call(null,seq__28732_28750__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28756,prov);


var G__28757 = cljs.core.next.call(null,seq__28732_28750__$1);
var G__28758 = null;
var G__28759 = (0);
var G__28760 = (0);
seq__28732_28740 = G__28757;
chunk__28733_28741 = G__28758;
count__28734_28742 = G__28759;
i__28735_28743 = G__28760;
continue;
}
} else {
}
}
break;
}


var G__28761 = seq__28720;
var G__28762 = chunk__28721;
var G__28763 = count__28722;
var G__28764 = (i__28723 + (1));
seq__28720 = G__28761;
chunk__28721 = G__28762;
count__28722 = G__28763;
i__28723 = G__28764;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28720);
if(temp__5720__auto__){
var seq__28720__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28720__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28720__$1);
var G__28765 = cljs.core.chunk_rest.call(null,seq__28720__$1);
var G__28766 = c__4556__auto__;
var G__28767 = cljs.core.count.call(null,c__4556__auto__);
var G__28768 = (0);
seq__28720 = G__28765;
chunk__28721 = G__28766;
count__28722 = G__28767;
i__28723 = G__28768;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28720__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28736_28769 = cljs.core.seq.call(null,requires);
var chunk__28737_28770 = null;
var count__28738_28771 = (0);
var i__28739_28772 = (0);
while(true){
if((i__28739_28772 < count__28738_28771)){
var req_28773 = cljs.core._nth.call(null,chunk__28737_28770,i__28739_28772);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28773,prov);


var G__28774 = seq__28736_28769;
var G__28775 = chunk__28737_28770;
var G__28776 = count__28738_28771;
var G__28777 = (i__28739_28772 + (1));
seq__28736_28769 = G__28774;
chunk__28737_28770 = G__28775;
count__28738_28771 = G__28776;
i__28739_28772 = G__28777;
continue;
} else {
var temp__5720__auto___28778__$1 = cljs.core.seq.call(null,seq__28736_28769);
if(temp__5720__auto___28778__$1){
var seq__28736_28779__$1 = temp__5720__auto___28778__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28736_28779__$1)){
var c__4556__auto___28780 = cljs.core.chunk_first.call(null,seq__28736_28779__$1);
var G__28781 = cljs.core.chunk_rest.call(null,seq__28736_28779__$1);
var G__28782 = c__4556__auto___28780;
var G__28783 = cljs.core.count.call(null,c__4556__auto___28780);
var G__28784 = (0);
seq__28736_28769 = G__28781;
chunk__28737_28770 = G__28782;
count__28738_28771 = G__28783;
i__28739_28772 = G__28784;
continue;
} else {
var req_28785 = cljs.core.first.call(null,seq__28736_28779__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28785,prov);


var G__28786 = cljs.core.next.call(null,seq__28736_28779__$1);
var G__28787 = null;
var G__28788 = (0);
var G__28789 = (0);
seq__28736_28769 = G__28786;
chunk__28737_28770 = G__28787;
count__28738_28771 = G__28788;
i__28739_28772 = G__28789;
continue;
}
} else {
}
}
break;
}


var G__28790 = cljs.core.next.call(null,seq__28720__$1);
var G__28791 = null;
var G__28792 = (0);
var G__28793 = (0);
seq__28720 = G__28790;
chunk__28721 = G__28791;
count__28722 = G__28792;
i__28723 = G__28793;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28794_28798 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28795_28799 = null;
var count__28796_28800 = (0);
var i__28797_28801 = (0);
while(true){
if((i__28797_28801 < count__28796_28800)){
var ns_28802 = cljs.core._nth.call(null,chunk__28795_28799,i__28797_28801);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28802);


var G__28803 = seq__28794_28798;
var G__28804 = chunk__28795_28799;
var G__28805 = count__28796_28800;
var G__28806 = (i__28797_28801 + (1));
seq__28794_28798 = G__28803;
chunk__28795_28799 = G__28804;
count__28796_28800 = G__28805;
i__28797_28801 = G__28806;
continue;
} else {
var temp__5720__auto___28807 = cljs.core.seq.call(null,seq__28794_28798);
if(temp__5720__auto___28807){
var seq__28794_28808__$1 = temp__5720__auto___28807;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28794_28808__$1)){
var c__4556__auto___28809 = cljs.core.chunk_first.call(null,seq__28794_28808__$1);
var G__28810 = cljs.core.chunk_rest.call(null,seq__28794_28808__$1);
var G__28811 = c__4556__auto___28809;
var G__28812 = cljs.core.count.call(null,c__4556__auto___28809);
var G__28813 = (0);
seq__28794_28798 = G__28810;
chunk__28795_28799 = G__28811;
count__28796_28800 = G__28812;
i__28797_28801 = G__28813;
continue;
} else {
var ns_28814 = cljs.core.first.call(null,seq__28794_28808__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28814);


var G__28815 = cljs.core.next.call(null,seq__28794_28808__$1);
var G__28816 = null;
var G__28817 = (0);
var G__28818 = (0);
seq__28794_28798 = G__28815;
chunk__28795_28799 = G__28816;
count__28796_28800 = G__28817;
i__28797_28801 = G__28818;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4126__auto__ = goog.require__;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__28819__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28819 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28820__i = 0, G__28820__a = new Array(arguments.length -  0);
while (G__28820__i < G__28820__a.length) {G__28820__a[G__28820__i] = arguments[G__28820__i + 0]; ++G__28820__i;}
  args = new cljs.core.IndexedSeq(G__28820__a,0,null);
} 
return G__28819__delegate.call(this,args);};
G__28819.cljs$lang$maxFixedArity = 0;
G__28819.cljs$lang$applyTo = (function (arglist__28821){
var args = cljs.core.seq(arglist__28821);
return G__28819__delegate(args);
});
G__28819.cljs$core$IFn$_invoke$arity$variadic = G__28819__delegate;
return G__28819;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__28822_SHARP_,p2__28823_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28822_SHARP_)),p2__28823_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__28824_SHARP_,p2__28825_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28824_SHARP_),p2__28825_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28826 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28826.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__28826.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__28826;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28827){if((e28827 instanceof Error)){
var e = e28827;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28827;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28828){if((e28828 instanceof Error)){
var e = e28828;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28828;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28829 = cljs.core._EQ_;
var expr__28830 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28829.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28830))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28829.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28830))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28829.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28830))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28832,callback){
var map__28833 = p__28832;
var map__28833__$1 = (((((!((map__28833 == null))))?(((((map__28833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28833):map__28833);
var file_msg = map__28833__$1;
var request_url = cljs.core.get.call(null,map__28833__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4126__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__26454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26455__auto__ = (function (){var switch__26359__auto__ = (function (state_28871){
var state_val_28872 = (state_28871[(1)]);
if((state_val_28872 === (7))){
var inst_28867 = (state_28871[(2)]);
var state_28871__$1 = state_28871;
var statearr_28873_28899 = state_28871__$1;
(statearr_28873_28899[(2)] = inst_28867);

(statearr_28873_28899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28872 === (1))){
var state_28871__$1 = state_28871;
var statearr_28874_28900 = state_28871__$1;
(statearr_28874_28900[(2)] = null);

(statearr_28874_28900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28872 === (4))){
var inst_28837 = (state_28871[(7)]);
var inst_28837__$1 = (state_28871[(2)]);
var state_28871__$1 = (function (){var statearr_28875 = state_28871;
(statearr_28875[(7)] = inst_28837__$1);

return statearr_28875;
})();
if(cljs.core.truth_(inst_28837__$1)){
var statearr_28876_28901 = state_28871__$1;
(statearr_28876_28901[(1)] = (5));

} else {
var statearr_28877_28902 = state_28871__$1;
(statearr_28877_28902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28872 === (15))){
var inst_28852 = (state_28871[(8)]);
var inst_28850 = (state_28871[(9)]);
var inst_28854 = inst_28852.call(null,inst_28850);
var state_28871__$1 = state_28871;
var statearr_28878_28903 = state_28871__$1;
(statearr_28878_28903[(2)] = inst_28854);

(statearr_28878_28903[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28872 === (13))){
var inst_28861 = (state_28871[(2)]);
var state_28871__$1 = state_28871;
var statearr_28879_28904 = state_28871__$1;
(statearr_28879_28904[(2)] = inst_28861);

(statearr_28879_28904[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28872 === (6))){
var state_28871__$1 = state_28871;
var statearr_28880_28905 = state_28871__$1;
(statearr_28880_28905[(2)] = null);

(statearr_28880_28905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28872 === (17))){
var inst_28858 = (state_28871[(2)]);
var state_28871__$1 = state_28871;
var statearr_28881_28906 = state_28871__$1;
(statearr_28881_28906[(2)] = inst_28858);

(statearr_28881_28906[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28872 === (3))){
var inst_28869 = (state_28871[(2)]);
var state_28871__$1 = state_28871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28871__$1,inst_28869);
} else {
if((state_val_28872 === (12))){
var state_28871__$1 = state_28871;
var statearr_28882_28907 = state_28871__$1;
(statearr_28882_28907[(2)] = null);

(statearr_28882_28907[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28872 === (2))){
var state_28871__$1 = state_28871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28871__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28872 === (11))){
var inst_28842 = (state_28871[(10)]);
var inst_28848 = figwheel.client.file_reloading.blocking_load.call(null,inst_28842);
var state_28871__$1 = state_28871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28871__$1,(14),inst_28848);
} else {
if((state_val_28872 === (9))){
var inst_28842 = (state_28871[(10)]);
var state_28871__$1 = state_28871;
if(cljs.core.truth_(inst_28842)){
var statearr_28883_28908 = state_28871__$1;
(statearr_28883_28908[(1)] = (11));

} else {
var statearr_28884_28909 = state_28871__$1;
(statearr_28884_28909[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28872 === (5))){
var inst_28837 = (state_28871[(7)]);
var inst_28843 = (state_28871[(11)]);
var inst_28842 = cljs.core.nth.call(null,inst_28837,(0),null);
var inst_28843__$1 = cljs.core.nth.call(null,inst_28837,(1),null);
var state_28871__$1 = (function (){var statearr_28885 = state_28871;
(statearr_28885[(10)] = inst_28842);

(statearr_28885[(11)] = inst_28843__$1);

return statearr_28885;
})();
if(cljs.core.truth_(inst_28843__$1)){
var statearr_28886_28910 = state_28871__$1;
(statearr_28886_28910[(1)] = (8));

} else {
var statearr_28887_28911 = state_28871__$1;
(statearr_28887_28911[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28872 === (14))){
var inst_28842 = (state_28871[(10)]);
var inst_28852 = (state_28871[(8)]);
var inst_28850 = (state_28871[(2)]);
var inst_28851 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28852__$1 = cljs.core.get.call(null,inst_28851,inst_28842);
var state_28871__$1 = (function (){var statearr_28888 = state_28871;
(statearr_28888[(8)] = inst_28852__$1);

(statearr_28888[(9)] = inst_28850);

return statearr_28888;
})();
if(cljs.core.truth_(inst_28852__$1)){
var statearr_28889_28912 = state_28871__$1;
(statearr_28889_28912[(1)] = (15));

} else {
var statearr_28890_28913 = state_28871__$1;
(statearr_28890_28913[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28872 === (16))){
var inst_28850 = (state_28871[(9)]);
var inst_28856 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28850);
var state_28871__$1 = state_28871;
var statearr_28891_28914 = state_28871__$1;
(statearr_28891_28914[(2)] = inst_28856);

(statearr_28891_28914[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28872 === (10))){
var inst_28863 = (state_28871[(2)]);
var state_28871__$1 = (function (){var statearr_28892 = state_28871;
(statearr_28892[(12)] = inst_28863);

return statearr_28892;
})();
var statearr_28893_28915 = state_28871__$1;
(statearr_28893_28915[(2)] = null);

(statearr_28893_28915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28872 === (8))){
var inst_28843 = (state_28871[(11)]);
var inst_28845 = eval(inst_28843);
var state_28871__$1 = state_28871;
var statearr_28894_28916 = state_28871__$1;
(statearr_28894_28916[(2)] = inst_28845);

(statearr_28894_28916[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__26360__auto__ = null;
var figwheel$client$file_reloading$state_machine__26360__auto____0 = (function (){
var statearr_28895 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28895[(0)] = figwheel$client$file_reloading$state_machine__26360__auto__);

(statearr_28895[(1)] = (1));

return statearr_28895;
});
var figwheel$client$file_reloading$state_machine__26360__auto____1 = (function (state_28871){
while(true){
var ret_value__26361__auto__ = (function (){try{while(true){
var result__26362__auto__ = switch__26359__auto__.call(null,state_28871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26362__auto__;
}
break;
}
}catch (e28896){if((e28896 instanceof Object)){
var ex__26363__auto__ = e28896;
var statearr_28897_28917 = state_28871;
(statearr_28897_28917[(5)] = ex__26363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28918 = state_28871;
state_28871 = G__28918;
continue;
} else {
return ret_value__26361__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26360__auto__ = function(state_28871){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26360__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26360__auto____1.call(this,state_28871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26360__auto____0;
figwheel$client$file_reloading$state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26360__auto____1;
return figwheel$client$file_reloading$state_machine__26360__auto__;
})()
})();
var state__26456__auto__ = (function (){var statearr_28898 = f__26455__auto__.call(null);
(statearr_28898[(6)] = c__26454__auto__);

return statearr_28898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26456__auto__);
}));

return c__26454__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28920 = arguments.length;
switch (G__28920) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28922,callback){
var map__28923 = p__28922;
var map__28923__$1 = (((((!((map__28923 == null))))?(((((map__28923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28923):map__28923);
var file_msg = map__28923__$1;
var namespace = cljs.core.get.call(null,map__28923__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28925){
var map__28926 = p__28925;
var map__28926__$1 = (((((!((map__28926 == null))))?(((((map__28926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28926):map__28926);
var file_msg = map__28926__$1;
var namespace = cljs.core.get.call(null,map__28926__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28928){
var map__28929 = p__28928;
var map__28929__$1 = (((((!((map__28929 == null))))?(((((map__28929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28929):map__28929);
var file_msg = map__28929__$1;
var namespace = cljs.core.get.call(null,map__28929__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4126__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28931,callback){
var map__28932 = p__28931;
var map__28932__$1 = (((((!((map__28932 == null))))?(((((map__28932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28932):map__28932);
var file_msg = map__28932__$1;
var request_url = cljs.core.get.call(null,map__28932__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28932__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__26454__auto___28982 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26455__auto__ = (function (){var switch__26359__auto__ = (function (state_28967){
var state_val_28968 = (state_28967[(1)]);
if((state_val_28968 === (1))){
var inst_28941 = cljs.core.seq.call(null,files);
var inst_28942 = cljs.core.first.call(null,inst_28941);
var inst_28943 = cljs.core.next.call(null,inst_28941);
var inst_28944 = files;
var state_28967__$1 = (function (){var statearr_28969 = state_28967;
(statearr_28969[(7)] = inst_28943);

(statearr_28969[(8)] = inst_28944);

(statearr_28969[(9)] = inst_28942);

return statearr_28969;
})();
var statearr_28970_28983 = state_28967__$1;
(statearr_28970_28983[(2)] = null);

(statearr_28970_28983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28968 === (2))){
var inst_28950 = (state_28967[(10)]);
var inst_28944 = (state_28967[(8)]);
var inst_28949 = cljs.core.seq.call(null,inst_28944);
var inst_28950__$1 = cljs.core.first.call(null,inst_28949);
var inst_28951 = cljs.core.next.call(null,inst_28949);
var inst_28952 = (inst_28950__$1 == null);
var inst_28953 = cljs.core.not.call(null,inst_28952);
var state_28967__$1 = (function (){var statearr_28971 = state_28967;
(statearr_28971[(11)] = inst_28951);

(statearr_28971[(10)] = inst_28950__$1);

return statearr_28971;
})();
if(inst_28953){
var statearr_28972_28984 = state_28967__$1;
(statearr_28972_28984[(1)] = (4));

} else {
var statearr_28973_28985 = state_28967__$1;
(statearr_28973_28985[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28968 === (3))){
var inst_28965 = (state_28967[(2)]);
var state_28967__$1 = state_28967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28967__$1,inst_28965);
} else {
if((state_val_28968 === (4))){
var inst_28950 = (state_28967[(10)]);
var inst_28955 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28950);
var state_28967__$1 = state_28967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28967__$1,(7),inst_28955);
} else {
if((state_val_28968 === (5))){
var inst_28961 = cljs.core.async.close_BANG_.call(null,out);
var state_28967__$1 = state_28967;
var statearr_28974_28986 = state_28967__$1;
(statearr_28974_28986[(2)] = inst_28961);

(statearr_28974_28986[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28968 === (6))){
var inst_28963 = (state_28967[(2)]);
var state_28967__$1 = state_28967;
var statearr_28975_28987 = state_28967__$1;
(statearr_28975_28987[(2)] = inst_28963);

(statearr_28975_28987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28968 === (7))){
var inst_28951 = (state_28967[(11)]);
var inst_28957 = (state_28967[(2)]);
var inst_28958 = cljs.core.async.put_BANG_.call(null,out,inst_28957);
var inst_28944 = inst_28951;
var state_28967__$1 = (function (){var statearr_28976 = state_28967;
(statearr_28976[(12)] = inst_28958);

(statearr_28976[(8)] = inst_28944);

return statearr_28976;
})();
var statearr_28977_28988 = state_28967__$1;
(statearr_28977_28988[(2)] = null);

(statearr_28977_28988[(1)] = (2));


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
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26360__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26360__auto____0 = (function (){
var statearr_28978 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28978[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26360__auto__);

(statearr_28978[(1)] = (1));

return statearr_28978;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26360__auto____1 = (function (state_28967){
while(true){
var ret_value__26361__auto__ = (function (){try{while(true){
var result__26362__auto__ = switch__26359__auto__.call(null,state_28967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26362__auto__;
}
break;
}
}catch (e28979){if((e28979 instanceof Object)){
var ex__26363__auto__ = e28979;
var statearr_28980_28989 = state_28967;
(statearr_28980_28989[(5)] = ex__26363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28990 = state_28967;
state_28967 = G__28990;
continue;
} else {
return ret_value__26361__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26360__auto__ = function(state_28967){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26360__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26360__auto____1.call(this,state_28967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26360__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26360__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26360__auto__;
})()
})();
var state__26456__auto__ = (function (){var statearr_28981 = f__26455__auto__.call(null);
(statearr_28981[(6)] = c__26454__auto___28982);

return statearr_28981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26456__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28991,opts){
var map__28992 = p__28991;
var map__28992__$1 = (((((!((map__28992 == null))))?(((((map__28992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28992):map__28992);
var eval_body = cljs.core.get.call(null,map__28992__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28992__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4115__auto__ = eval_body;
if(cljs.core.truth_(and__4115__auto__)){
return typeof eval_body === 'string';
} else {
return and__4115__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28994){var e = e28994;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__28995_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28995_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28996){
var vec__28997 = p__28996;
var k = cljs.core.nth.call(null,vec__28997,(0),null);
var v = cljs.core.nth.call(null,vec__28997,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29000){
var vec__29001 = p__29000;
var k = cljs.core.nth.call(null,vec__29001,(0),null);
var v = cljs.core.nth.call(null,vec__29001,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29007,p__29008){
var map__29009 = p__29007;
var map__29009__$1 = (((((!((map__29009 == null))))?(((((map__29009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29009):map__29009);
var opts = map__29009__$1;
var before_jsload = cljs.core.get.call(null,map__29009__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29009__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29009__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29010 = p__29008;
var map__29010__$1 = (((((!((map__29010 == null))))?(((((map__29010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29010):map__29010);
var msg = map__29010__$1;
var files = cljs.core.get.call(null,map__29010__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29010__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29010__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26455__auto__ = (function (){var switch__26359__auto__ = (function (state_29164){
var state_val_29165 = (state_29164[(1)]);
if((state_val_29165 === (7))){
var inst_29024 = (state_29164[(7)]);
var inst_29027 = (state_29164[(8)]);
var inst_29026 = (state_29164[(9)]);
var inst_29025 = (state_29164[(10)]);
var inst_29032 = cljs.core._nth.call(null,inst_29025,inst_29027);
var inst_29033 = figwheel.client.file_reloading.eval_body.call(null,inst_29032,opts);
var inst_29034 = (inst_29027 + (1));
var tmp29166 = inst_29024;
var tmp29167 = inst_29026;
var tmp29168 = inst_29025;
var inst_29024__$1 = tmp29166;
var inst_29025__$1 = tmp29168;
var inst_29026__$1 = tmp29167;
var inst_29027__$1 = inst_29034;
var state_29164__$1 = (function (){var statearr_29169 = state_29164;
(statearr_29169[(7)] = inst_29024__$1);

(statearr_29169[(8)] = inst_29027__$1);

(statearr_29169[(9)] = inst_29026__$1);

(statearr_29169[(10)] = inst_29025__$1);

(statearr_29169[(11)] = inst_29033);

return statearr_29169;
})();
var statearr_29170_29253 = state_29164__$1;
(statearr_29170_29253[(2)] = null);

(statearr_29170_29253[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (20))){
var inst_29067 = (state_29164[(12)]);
var inst_29075 = figwheel.client.file_reloading.sort_files.call(null,inst_29067);
var state_29164__$1 = state_29164;
var statearr_29171_29254 = state_29164__$1;
(statearr_29171_29254[(2)] = inst_29075);

(statearr_29171_29254[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (27))){
var state_29164__$1 = state_29164;
var statearr_29172_29255 = state_29164__$1;
(statearr_29172_29255[(2)] = null);

(statearr_29172_29255[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (1))){
var inst_29016 = (state_29164[(13)]);
var inst_29013 = before_jsload.call(null,files);
var inst_29014 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29015 = (function (){return (function (p1__29004_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29004_SHARP_);
});
})();
var inst_29016__$1 = cljs.core.filter.call(null,inst_29015,files);
var inst_29017 = cljs.core.not_empty.call(null,inst_29016__$1);
var state_29164__$1 = (function (){var statearr_29173 = state_29164;
(statearr_29173[(14)] = inst_29014);

(statearr_29173[(13)] = inst_29016__$1);

(statearr_29173[(15)] = inst_29013);

return statearr_29173;
})();
if(cljs.core.truth_(inst_29017)){
var statearr_29174_29256 = state_29164__$1;
(statearr_29174_29256[(1)] = (2));

} else {
var statearr_29175_29257 = state_29164__$1;
(statearr_29175_29257[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (24))){
var state_29164__$1 = state_29164;
var statearr_29176_29258 = state_29164__$1;
(statearr_29176_29258[(2)] = null);

(statearr_29176_29258[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (39))){
var inst_29117 = (state_29164[(16)]);
var state_29164__$1 = state_29164;
var statearr_29177_29259 = state_29164__$1;
(statearr_29177_29259[(2)] = inst_29117);

(statearr_29177_29259[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (46))){
var inst_29159 = (state_29164[(2)]);
var state_29164__$1 = state_29164;
var statearr_29178_29260 = state_29164__$1;
(statearr_29178_29260[(2)] = inst_29159);

(statearr_29178_29260[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (4))){
var inst_29061 = (state_29164[(2)]);
var inst_29062 = cljs.core.List.EMPTY;
var inst_29063 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29062);
var inst_29064 = (function (){return (function (p1__29005_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29005_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29005_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29005_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_29065 = cljs.core.filter.call(null,inst_29064,files);
var inst_29066 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29067 = cljs.core.concat.call(null,inst_29065,inst_29066);
var state_29164__$1 = (function (){var statearr_29179 = state_29164;
(statearr_29179[(12)] = inst_29067);

(statearr_29179[(17)] = inst_29061);

(statearr_29179[(18)] = inst_29063);

return statearr_29179;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29180_29261 = state_29164__$1;
(statearr_29180_29261[(1)] = (16));

} else {
var statearr_29181_29262 = state_29164__$1;
(statearr_29181_29262[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (15))){
var inst_29051 = (state_29164[(2)]);
var state_29164__$1 = state_29164;
var statearr_29182_29263 = state_29164__$1;
(statearr_29182_29263[(2)] = inst_29051);

(statearr_29182_29263[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (21))){
var inst_29077 = (state_29164[(19)]);
var inst_29077__$1 = (state_29164[(2)]);
var inst_29078 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29077__$1);
var state_29164__$1 = (function (){var statearr_29183 = state_29164;
(statearr_29183[(19)] = inst_29077__$1);

return statearr_29183;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29164__$1,(22),inst_29078);
} else {
if((state_val_29165 === (31))){
var inst_29162 = (state_29164[(2)]);
var state_29164__$1 = state_29164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29164__$1,inst_29162);
} else {
if((state_val_29165 === (32))){
var inst_29117 = (state_29164[(16)]);
var inst_29122 = inst_29117.cljs$lang$protocol_mask$partition0$;
var inst_29123 = (inst_29122 & (64));
var inst_29124 = inst_29117.cljs$core$ISeq$;
var inst_29125 = (cljs.core.PROTOCOL_SENTINEL === inst_29124);
var inst_29126 = ((inst_29123) || (inst_29125));
var state_29164__$1 = state_29164;
if(cljs.core.truth_(inst_29126)){
var statearr_29184_29264 = state_29164__$1;
(statearr_29184_29264[(1)] = (35));

} else {
var statearr_29185_29265 = state_29164__$1;
(statearr_29185_29265[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (40))){
var inst_29139 = (state_29164[(20)]);
var inst_29138 = (state_29164[(2)]);
var inst_29139__$1 = cljs.core.get.call(null,inst_29138,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29140 = cljs.core.get.call(null,inst_29138,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29141 = cljs.core.not_empty.call(null,inst_29139__$1);
var state_29164__$1 = (function (){var statearr_29186 = state_29164;
(statearr_29186[(21)] = inst_29140);

(statearr_29186[(20)] = inst_29139__$1);

return statearr_29186;
})();
if(cljs.core.truth_(inst_29141)){
var statearr_29187_29266 = state_29164__$1;
(statearr_29187_29266[(1)] = (41));

} else {
var statearr_29188_29267 = state_29164__$1;
(statearr_29188_29267[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (33))){
var state_29164__$1 = state_29164;
var statearr_29189_29268 = state_29164__$1;
(statearr_29189_29268[(2)] = false);

(statearr_29189_29268[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (13))){
var inst_29037 = (state_29164[(22)]);
var inst_29041 = cljs.core.chunk_first.call(null,inst_29037);
var inst_29042 = cljs.core.chunk_rest.call(null,inst_29037);
var inst_29043 = cljs.core.count.call(null,inst_29041);
var inst_29024 = inst_29042;
var inst_29025 = inst_29041;
var inst_29026 = inst_29043;
var inst_29027 = (0);
var state_29164__$1 = (function (){var statearr_29190 = state_29164;
(statearr_29190[(7)] = inst_29024);

(statearr_29190[(8)] = inst_29027);

(statearr_29190[(9)] = inst_29026);

(statearr_29190[(10)] = inst_29025);

return statearr_29190;
})();
var statearr_29191_29269 = state_29164__$1;
(statearr_29191_29269[(2)] = null);

(statearr_29191_29269[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (22))){
var inst_29085 = (state_29164[(23)]);
var inst_29080 = (state_29164[(24)]);
var inst_29081 = (state_29164[(25)]);
var inst_29077 = (state_29164[(19)]);
var inst_29080__$1 = (state_29164[(2)]);
var inst_29081__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29080__$1);
var inst_29082 = (function (){var all_files = inst_29077;
var res_SINGLEQUOTE_ = inst_29080__$1;
var res = inst_29081__$1;
return (function (p1__29006_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29006_SHARP_));
});
})();
var inst_29083 = cljs.core.filter.call(null,inst_29082,inst_29080__$1);
var inst_29084 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29085__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29084);
var inst_29086 = cljs.core.not_empty.call(null,inst_29085__$1);
var state_29164__$1 = (function (){var statearr_29192 = state_29164;
(statearr_29192[(26)] = inst_29083);

(statearr_29192[(23)] = inst_29085__$1);

(statearr_29192[(24)] = inst_29080__$1);

(statearr_29192[(25)] = inst_29081__$1);

return statearr_29192;
})();
if(cljs.core.truth_(inst_29086)){
var statearr_29193_29270 = state_29164__$1;
(statearr_29193_29270[(1)] = (23));

} else {
var statearr_29194_29271 = state_29164__$1;
(statearr_29194_29271[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (36))){
var state_29164__$1 = state_29164;
var statearr_29195_29272 = state_29164__$1;
(statearr_29195_29272[(2)] = false);

(statearr_29195_29272[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (41))){
var inst_29139 = (state_29164[(20)]);
var inst_29143 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29144 = cljs.core.map.call(null,inst_29143,inst_29139);
var inst_29145 = cljs.core.pr_str.call(null,inst_29144);
var inst_29146 = ["figwheel-no-load meta-data: ",inst_29145].join('');
var inst_29147 = figwheel.client.utils.log.call(null,inst_29146);
var state_29164__$1 = state_29164;
var statearr_29196_29273 = state_29164__$1;
(statearr_29196_29273[(2)] = inst_29147);

(statearr_29196_29273[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (43))){
var inst_29140 = (state_29164[(21)]);
var inst_29150 = (state_29164[(2)]);
var inst_29151 = cljs.core.not_empty.call(null,inst_29140);
var state_29164__$1 = (function (){var statearr_29197 = state_29164;
(statearr_29197[(27)] = inst_29150);

return statearr_29197;
})();
if(cljs.core.truth_(inst_29151)){
var statearr_29198_29274 = state_29164__$1;
(statearr_29198_29274[(1)] = (44));

} else {
var statearr_29199_29275 = state_29164__$1;
(statearr_29199_29275[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (29))){
var inst_29083 = (state_29164[(26)]);
var inst_29085 = (state_29164[(23)]);
var inst_29080 = (state_29164[(24)]);
var inst_29081 = (state_29164[(25)]);
var inst_29117 = (state_29164[(16)]);
var inst_29077 = (state_29164[(19)]);
var inst_29113 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29116 = (function (){var all_files = inst_29077;
var res_SINGLEQUOTE_ = inst_29080;
var res = inst_29081;
var files_not_loaded = inst_29083;
var dependencies_that_loaded = inst_29085;
return (function (p__29115){
var map__29200 = p__29115;
var map__29200__$1 = (((((!((map__29200 == null))))?(((((map__29200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29200):map__29200);
var namespace = cljs.core.get.call(null,map__29200__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_29117__$1 = cljs.core.group_by.call(null,inst_29116,inst_29083);
var inst_29119 = (inst_29117__$1 == null);
var inst_29120 = cljs.core.not.call(null,inst_29119);
var state_29164__$1 = (function (){var statearr_29202 = state_29164;
(statearr_29202[(28)] = inst_29113);

(statearr_29202[(16)] = inst_29117__$1);

return statearr_29202;
})();
if(inst_29120){
var statearr_29203_29276 = state_29164__$1;
(statearr_29203_29276[(1)] = (32));

} else {
var statearr_29204_29277 = state_29164__$1;
(statearr_29204_29277[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (44))){
var inst_29140 = (state_29164[(21)]);
var inst_29153 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29140);
var inst_29154 = cljs.core.pr_str.call(null,inst_29153);
var inst_29155 = ["not required: ",inst_29154].join('');
var inst_29156 = figwheel.client.utils.log.call(null,inst_29155);
var state_29164__$1 = state_29164;
var statearr_29205_29278 = state_29164__$1;
(statearr_29205_29278[(2)] = inst_29156);

(statearr_29205_29278[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (6))){
var inst_29058 = (state_29164[(2)]);
var state_29164__$1 = state_29164;
var statearr_29206_29279 = state_29164__$1;
(statearr_29206_29279[(2)] = inst_29058);

(statearr_29206_29279[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (28))){
var inst_29083 = (state_29164[(26)]);
var inst_29110 = (state_29164[(2)]);
var inst_29111 = cljs.core.not_empty.call(null,inst_29083);
var state_29164__$1 = (function (){var statearr_29207 = state_29164;
(statearr_29207[(29)] = inst_29110);

return statearr_29207;
})();
if(cljs.core.truth_(inst_29111)){
var statearr_29208_29280 = state_29164__$1;
(statearr_29208_29280[(1)] = (29));

} else {
var statearr_29209_29281 = state_29164__$1;
(statearr_29209_29281[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (25))){
var inst_29081 = (state_29164[(25)]);
var inst_29097 = (state_29164[(2)]);
var inst_29098 = cljs.core.not_empty.call(null,inst_29081);
var state_29164__$1 = (function (){var statearr_29210 = state_29164;
(statearr_29210[(30)] = inst_29097);

return statearr_29210;
})();
if(cljs.core.truth_(inst_29098)){
var statearr_29211_29282 = state_29164__$1;
(statearr_29211_29282[(1)] = (26));

} else {
var statearr_29212_29283 = state_29164__$1;
(statearr_29212_29283[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (34))){
var inst_29133 = (state_29164[(2)]);
var state_29164__$1 = state_29164;
if(cljs.core.truth_(inst_29133)){
var statearr_29213_29284 = state_29164__$1;
(statearr_29213_29284[(1)] = (38));

} else {
var statearr_29214_29285 = state_29164__$1;
(statearr_29214_29285[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (17))){
var state_29164__$1 = state_29164;
var statearr_29215_29286 = state_29164__$1;
(statearr_29215_29286[(2)] = recompile_dependents);

(statearr_29215_29286[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (3))){
var state_29164__$1 = state_29164;
var statearr_29216_29287 = state_29164__$1;
(statearr_29216_29287[(2)] = null);

(statearr_29216_29287[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (12))){
var inst_29054 = (state_29164[(2)]);
var state_29164__$1 = state_29164;
var statearr_29217_29288 = state_29164__$1;
(statearr_29217_29288[(2)] = inst_29054);

(statearr_29217_29288[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (2))){
var inst_29016 = (state_29164[(13)]);
var inst_29023 = cljs.core.seq.call(null,inst_29016);
var inst_29024 = inst_29023;
var inst_29025 = null;
var inst_29026 = (0);
var inst_29027 = (0);
var state_29164__$1 = (function (){var statearr_29218 = state_29164;
(statearr_29218[(7)] = inst_29024);

(statearr_29218[(8)] = inst_29027);

(statearr_29218[(9)] = inst_29026);

(statearr_29218[(10)] = inst_29025);

return statearr_29218;
})();
var statearr_29219_29289 = state_29164__$1;
(statearr_29219_29289[(2)] = null);

(statearr_29219_29289[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (23))){
var inst_29083 = (state_29164[(26)]);
var inst_29085 = (state_29164[(23)]);
var inst_29080 = (state_29164[(24)]);
var inst_29081 = (state_29164[(25)]);
var inst_29077 = (state_29164[(19)]);
var inst_29088 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29090 = (function (){var all_files = inst_29077;
var res_SINGLEQUOTE_ = inst_29080;
var res = inst_29081;
var files_not_loaded = inst_29083;
var dependencies_that_loaded = inst_29085;
return (function (p__29089){
var map__29220 = p__29089;
var map__29220__$1 = (((((!((map__29220 == null))))?(((((map__29220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29220):map__29220);
var request_url = cljs.core.get.call(null,map__29220__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_29091 = cljs.core.reverse.call(null,inst_29085);
var inst_29092 = cljs.core.map.call(null,inst_29090,inst_29091);
var inst_29093 = cljs.core.pr_str.call(null,inst_29092);
var inst_29094 = figwheel.client.utils.log.call(null,inst_29093);
var state_29164__$1 = (function (){var statearr_29222 = state_29164;
(statearr_29222[(31)] = inst_29088);

return statearr_29222;
})();
var statearr_29223_29290 = state_29164__$1;
(statearr_29223_29290[(2)] = inst_29094);

(statearr_29223_29290[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (35))){
var state_29164__$1 = state_29164;
var statearr_29224_29291 = state_29164__$1;
(statearr_29224_29291[(2)] = true);

(statearr_29224_29291[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (19))){
var inst_29067 = (state_29164[(12)]);
var inst_29073 = figwheel.client.file_reloading.expand_files.call(null,inst_29067);
var state_29164__$1 = state_29164;
var statearr_29225_29292 = state_29164__$1;
(statearr_29225_29292[(2)] = inst_29073);

(statearr_29225_29292[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (11))){
var state_29164__$1 = state_29164;
var statearr_29226_29293 = state_29164__$1;
(statearr_29226_29293[(2)] = null);

(statearr_29226_29293[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (9))){
var inst_29056 = (state_29164[(2)]);
var state_29164__$1 = state_29164;
var statearr_29227_29294 = state_29164__$1;
(statearr_29227_29294[(2)] = inst_29056);

(statearr_29227_29294[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (5))){
var inst_29027 = (state_29164[(8)]);
var inst_29026 = (state_29164[(9)]);
var inst_29029 = (inst_29027 < inst_29026);
var inst_29030 = inst_29029;
var state_29164__$1 = state_29164;
if(cljs.core.truth_(inst_29030)){
var statearr_29228_29295 = state_29164__$1;
(statearr_29228_29295[(1)] = (7));

} else {
var statearr_29229_29296 = state_29164__$1;
(statearr_29229_29296[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (14))){
var inst_29037 = (state_29164[(22)]);
var inst_29046 = cljs.core.first.call(null,inst_29037);
var inst_29047 = figwheel.client.file_reloading.eval_body.call(null,inst_29046,opts);
var inst_29048 = cljs.core.next.call(null,inst_29037);
var inst_29024 = inst_29048;
var inst_29025 = null;
var inst_29026 = (0);
var inst_29027 = (0);
var state_29164__$1 = (function (){var statearr_29230 = state_29164;
(statearr_29230[(7)] = inst_29024);

(statearr_29230[(8)] = inst_29027);

(statearr_29230[(9)] = inst_29026);

(statearr_29230[(32)] = inst_29047);

(statearr_29230[(10)] = inst_29025);

return statearr_29230;
})();
var statearr_29231_29297 = state_29164__$1;
(statearr_29231_29297[(2)] = null);

(statearr_29231_29297[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (45))){
var state_29164__$1 = state_29164;
var statearr_29232_29298 = state_29164__$1;
(statearr_29232_29298[(2)] = null);

(statearr_29232_29298[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (26))){
var inst_29083 = (state_29164[(26)]);
var inst_29085 = (state_29164[(23)]);
var inst_29080 = (state_29164[(24)]);
var inst_29081 = (state_29164[(25)]);
var inst_29077 = (state_29164[(19)]);
var inst_29100 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29102 = (function (){var all_files = inst_29077;
var res_SINGLEQUOTE_ = inst_29080;
var res = inst_29081;
var files_not_loaded = inst_29083;
var dependencies_that_loaded = inst_29085;
return (function (p__29101){
var map__29233 = p__29101;
var map__29233__$1 = (((((!((map__29233 == null))))?(((((map__29233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29233):map__29233);
var namespace = cljs.core.get.call(null,map__29233__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29233__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_29103 = cljs.core.map.call(null,inst_29102,inst_29081);
var inst_29104 = cljs.core.pr_str.call(null,inst_29103);
var inst_29105 = figwheel.client.utils.log.call(null,inst_29104);
var inst_29106 = (function (){var all_files = inst_29077;
var res_SINGLEQUOTE_ = inst_29080;
var res = inst_29081;
var files_not_loaded = inst_29083;
var dependencies_that_loaded = inst_29085;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_29107 = setTimeout(inst_29106,(10));
var state_29164__$1 = (function (){var statearr_29235 = state_29164;
(statearr_29235[(33)] = inst_29105);

(statearr_29235[(34)] = inst_29100);

return statearr_29235;
})();
var statearr_29236_29299 = state_29164__$1;
(statearr_29236_29299[(2)] = inst_29107);

(statearr_29236_29299[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (16))){
var state_29164__$1 = state_29164;
var statearr_29237_29300 = state_29164__$1;
(statearr_29237_29300[(2)] = reload_dependents);

(statearr_29237_29300[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (38))){
var inst_29117 = (state_29164[(16)]);
var inst_29135 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29117);
var state_29164__$1 = state_29164;
var statearr_29238_29301 = state_29164__$1;
(statearr_29238_29301[(2)] = inst_29135);

(statearr_29238_29301[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (30))){
var state_29164__$1 = state_29164;
var statearr_29239_29302 = state_29164__$1;
(statearr_29239_29302[(2)] = null);

(statearr_29239_29302[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (10))){
var inst_29037 = (state_29164[(22)]);
var inst_29039 = cljs.core.chunked_seq_QMARK_.call(null,inst_29037);
var state_29164__$1 = state_29164;
if(inst_29039){
var statearr_29240_29303 = state_29164__$1;
(statearr_29240_29303[(1)] = (13));

} else {
var statearr_29241_29304 = state_29164__$1;
(statearr_29241_29304[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (18))){
var inst_29071 = (state_29164[(2)]);
var state_29164__$1 = state_29164;
if(cljs.core.truth_(inst_29071)){
var statearr_29242_29305 = state_29164__$1;
(statearr_29242_29305[(1)] = (19));

} else {
var statearr_29243_29306 = state_29164__$1;
(statearr_29243_29306[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (42))){
var state_29164__$1 = state_29164;
var statearr_29244_29307 = state_29164__$1;
(statearr_29244_29307[(2)] = null);

(statearr_29244_29307[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (37))){
var inst_29130 = (state_29164[(2)]);
var state_29164__$1 = state_29164;
var statearr_29245_29308 = state_29164__$1;
(statearr_29245_29308[(2)] = inst_29130);

(statearr_29245_29308[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (8))){
var inst_29024 = (state_29164[(7)]);
var inst_29037 = (state_29164[(22)]);
var inst_29037__$1 = cljs.core.seq.call(null,inst_29024);
var state_29164__$1 = (function (){var statearr_29246 = state_29164;
(statearr_29246[(22)] = inst_29037__$1);

return statearr_29246;
})();
if(inst_29037__$1){
var statearr_29247_29309 = state_29164__$1;
(statearr_29247_29309[(1)] = (10));

} else {
var statearr_29248_29310 = state_29164__$1;
(statearr_29248_29310[(1)] = (11));

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
}
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26360__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26360__auto____0 = (function (){
var statearr_29249 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29249[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26360__auto__);

(statearr_29249[(1)] = (1));

return statearr_29249;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26360__auto____1 = (function (state_29164){
while(true){
var ret_value__26361__auto__ = (function (){try{while(true){
var result__26362__auto__ = switch__26359__auto__.call(null,state_29164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26362__auto__;
}
break;
}
}catch (e29250){if((e29250 instanceof Object)){
var ex__26363__auto__ = e29250;
var statearr_29251_29311 = state_29164;
(statearr_29251_29311[(5)] = ex__26363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29312 = state_29164;
state_29164 = G__29312;
continue;
} else {
return ret_value__26361__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26360__auto__ = function(state_29164){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26360__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26360__auto____1.call(this,state_29164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26360__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26360__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26360__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26360__auto__;
})()
})();
var state__26456__auto__ = (function (){var statearr_29252 = f__26455__auto__.call(null);
(statearr_29252[(6)] = c__26454__auto__);

return statearr_29252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26456__auto__);
}));

return c__26454__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29315,link){
var map__29316 = p__29315;
var map__29316__$1 = (((((!((map__29316 == null))))?(((((map__29316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29316):map__29316);
var file = cljs.core.get.call(null,map__29316__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__29313_SHARP_,p2__29314_SHARP_){
if(cljs.core._EQ_.call(null,p1__29313_SHARP_,p2__29314_SHARP_)){
return p1__29313_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29319){
var map__29320 = p__29319;
var map__29320__$1 = (((((!((map__29320 == null))))?(((((map__29320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29320):map__29320);
var match_length = cljs.core.get.call(null,map__29320__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29320__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29318_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29318_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29322_SHARP_,p2__29323_SHARP_){
return cljs.core.assoc.call(null,p1__29322_SHARP_,cljs.core.get.call(null,p2__29323_SHARP_,key),p2__29323_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_29324 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29324);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29324);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29325,p__29326){
var map__29327 = p__29325;
var map__29327__$1 = (((((!((map__29327 == null))))?(((((map__29327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29327):map__29327);
var on_cssload = cljs.core.get.call(null,map__29327__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29328 = p__29326;
var map__29328__$1 = (((((!((map__29328 == null))))?(((((map__29328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29328):map__29328);
var files_msg = map__29328__$1;
var files = cljs.core.get.call(null,map__29328__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1651769153165
