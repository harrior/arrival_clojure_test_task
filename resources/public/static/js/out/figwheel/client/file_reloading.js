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
var G__28843 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__28843 == null)){
return null;
} else {
return goog.object.get(G__28843,"requires");
}
}):(function (path){
var G__28844 = goog.object.get(goog.dependencies_.requires,path);
if((G__28844 == null)){
return null;
} else {
return goog.object.getKeys(G__28844);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28845_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28845_SHARP_)));
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
var G__28846 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__28846__$1 = (((G__28846 == null))?null:goog.object.get(G__28846,"provides"));
if((G__28846__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__28846__$1);
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
var seq__28847 = cljs.core.seq.call(null,provides);
var chunk__28848 = null;
var count__28849 = (0);
var i__28850 = (0);
while(true){
if((i__28850 < count__28849)){
var prov = cljs.core._nth.call(null,chunk__28848,i__28850);
var seq__28859_28871 = cljs.core.seq.call(null,requires);
var chunk__28860_28872 = null;
var count__28861_28873 = (0);
var i__28862_28874 = (0);
while(true){
if((i__28862_28874 < count__28861_28873)){
var req_28875 = cljs.core._nth.call(null,chunk__28860_28872,i__28862_28874);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28875,prov);


var G__28876 = seq__28859_28871;
var G__28877 = chunk__28860_28872;
var G__28878 = count__28861_28873;
var G__28879 = (i__28862_28874 + (1));
seq__28859_28871 = G__28876;
chunk__28860_28872 = G__28877;
count__28861_28873 = G__28878;
i__28862_28874 = G__28879;
continue;
} else {
var temp__5753__auto___28880 = cljs.core.seq.call(null,seq__28859_28871);
if(temp__5753__auto___28880){
var seq__28859_28881__$1 = temp__5753__auto___28880;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28859_28881__$1)){
var c__4556__auto___28882 = cljs.core.chunk_first.call(null,seq__28859_28881__$1);
var G__28883 = cljs.core.chunk_rest.call(null,seq__28859_28881__$1);
var G__28884 = c__4556__auto___28882;
var G__28885 = cljs.core.count.call(null,c__4556__auto___28882);
var G__28886 = (0);
seq__28859_28871 = G__28883;
chunk__28860_28872 = G__28884;
count__28861_28873 = G__28885;
i__28862_28874 = G__28886;
continue;
} else {
var req_28887 = cljs.core.first.call(null,seq__28859_28881__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28887,prov);


var G__28888 = cljs.core.next.call(null,seq__28859_28881__$1);
var G__28889 = null;
var G__28890 = (0);
var G__28891 = (0);
seq__28859_28871 = G__28888;
chunk__28860_28872 = G__28889;
count__28861_28873 = G__28890;
i__28862_28874 = G__28891;
continue;
}
} else {
}
}
break;
}


var G__28892 = seq__28847;
var G__28893 = chunk__28848;
var G__28894 = count__28849;
var G__28895 = (i__28850 + (1));
seq__28847 = G__28892;
chunk__28848 = G__28893;
count__28849 = G__28894;
i__28850 = G__28895;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__28847);
if(temp__5753__auto__){
var seq__28847__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28847__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28847__$1);
var G__28896 = cljs.core.chunk_rest.call(null,seq__28847__$1);
var G__28897 = c__4556__auto__;
var G__28898 = cljs.core.count.call(null,c__4556__auto__);
var G__28899 = (0);
seq__28847 = G__28896;
chunk__28848 = G__28897;
count__28849 = G__28898;
i__28850 = G__28899;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28847__$1);
var seq__28863_28900 = cljs.core.seq.call(null,requires);
var chunk__28864_28901 = null;
var count__28865_28902 = (0);
var i__28866_28903 = (0);
while(true){
if((i__28866_28903 < count__28865_28902)){
var req_28904 = cljs.core._nth.call(null,chunk__28864_28901,i__28866_28903);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28904,prov);


var G__28905 = seq__28863_28900;
var G__28906 = chunk__28864_28901;
var G__28907 = count__28865_28902;
var G__28908 = (i__28866_28903 + (1));
seq__28863_28900 = G__28905;
chunk__28864_28901 = G__28906;
count__28865_28902 = G__28907;
i__28866_28903 = G__28908;
continue;
} else {
var temp__5753__auto___28909__$1 = cljs.core.seq.call(null,seq__28863_28900);
if(temp__5753__auto___28909__$1){
var seq__28863_28910__$1 = temp__5753__auto___28909__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28863_28910__$1)){
var c__4556__auto___28911 = cljs.core.chunk_first.call(null,seq__28863_28910__$1);
var G__28912 = cljs.core.chunk_rest.call(null,seq__28863_28910__$1);
var G__28913 = c__4556__auto___28911;
var G__28914 = cljs.core.count.call(null,c__4556__auto___28911);
var G__28915 = (0);
seq__28863_28900 = G__28912;
chunk__28864_28901 = G__28913;
count__28865_28902 = G__28914;
i__28866_28903 = G__28915;
continue;
} else {
var req_28916 = cljs.core.first.call(null,seq__28863_28910__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28916,prov);


var G__28917 = cljs.core.next.call(null,seq__28863_28910__$1);
var G__28918 = null;
var G__28919 = (0);
var G__28920 = (0);
seq__28863_28900 = G__28917;
chunk__28864_28901 = G__28918;
count__28865_28902 = G__28919;
i__28866_28903 = G__28920;
continue;
}
} else {
}
}
break;
}


var G__28921 = cljs.core.next.call(null,seq__28847__$1);
var G__28922 = null;
var G__28923 = (0);
var G__28924 = (0);
seq__28847 = G__28921;
chunk__28848 = G__28922;
count__28849 = G__28923;
i__28850 = G__28924;
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
var seq__28867 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__28868 = null;
var count__28869 = (0);
var i__28870 = (0);
while(true){
if((i__28870 < count__28869)){
var prov = cljs.core._nth.call(null,chunk__28868,i__28870);
goog.object.forEach(deps,((function (seq__28867,chunk__28868,count__28869,i__28870,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__28867,chunk__28868,count__28869,i__28870,prov,requires))
);


var G__28925 = seq__28867;
var G__28926 = chunk__28868;
var G__28927 = count__28869;
var G__28928 = (i__28870 + (1));
seq__28867 = G__28925;
chunk__28868 = G__28926;
count__28869 = G__28927;
i__28870 = G__28928;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__28867);
if(temp__5753__auto__){
var seq__28867__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28867__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28867__$1);
var G__28929 = cljs.core.chunk_rest.call(null,seq__28867__$1);
var G__28930 = c__4556__auto__;
var G__28931 = cljs.core.count.call(null,c__4556__auto__);
var G__28932 = (0);
seq__28867 = G__28929;
chunk__28868 = G__28930;
count__28869 = G__28931;
i__28870 = G__28932;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28867__$1);
goog.object.forEach(deps,((function (seq__28867,chunk__28868,count__28869,i__28870,prov,seq__28867__$1,temp__5753__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__28867,chunk__28868,count__28869,i__28870,prov,seq__28867__$1,temp__5753__auto__,requires))
);


var G__28933 = cljs.core.next.call(null,seq__28867__$1);
var G__28934 = null;
var G__28935 = (0);
var G__28936 = (0);
seq__28867 = G__28933;
chunk__28868 = G__28934;
count__28869 = G__28935;
i__28870 = G__28936;
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
return cljs.core.some.call(null,(function (p__28937){
var vec__28938 = p__28937;
var _ = cljs.core.nth.call(null,vec__28938,(0),null);
var v = cljs.core.nth.call(null,vec__28938,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__28941){
var vec__28942 = p__28941;
var k = cljs.core.nth.call(null,vec__28942,(0),null);
var v = cljs.core.nth.call(null,vec__28942,(1),null);
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

var seq__28954_28962 = cljs.core.seq.call(null,deps);
var chunk__28955_28963 = null;
var count__28956_28964 = (0);
var i__28957_28965 = (0);
while(true){
if((i__28957_28965 < count__28956_28964)){
var dep_28966 = cljs.core._nth.call(null,chunk__28955_28963,i__28957_28965);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_28966;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28966));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28966,(depth + (1)),state);
} else {
}


var G__28967 = seq__28954_28962;
var G__28968 = chunk__28955_28963;
var G__28969 = count__28956_28964;
var G__28970 = (i__28957_28965 + (1));
seq__28954_28962 = G__28967;
chunk__28955_28963 = G__28968;
count__28956_28964 = G__28969;
i__28957_28965 = G__28970;
continue;
} else {
var temp__5753__auto___28971 = cljs.core.seq.call(null,seq__28954_28962);
if(temp__5753__auto___28971){
var seq__28954_28972__$1 = temp__5753__auto___28971;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28954_28972__$1)){
var c__4556__auto___28973 = cljs.core.chunk_first.call(null,seq__28954_28972__$1);
var G__28974 = cljs.core.chunk_rest.call(null,seq__28954_28972__$1);
var G__28975 = c__4556__auto___28973;
var G__28976 = cljs.core.count.call(null,c__4556__auto___28973);
var G__28977 = (0);
seq__28954_28962 = G__28974;
chunk__28955_28963 = G__28975;
count__28956_28964 = G__28976;
i__28957_28965 = G__28977;
continue;
} else {
var dep_28978 = cljs.core.first.call(null,seq__28954_28972__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_28978;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28978));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28978,(depth + (1)),state);
} else {
}


var G__28979 = cljs.core.next.call(null,seq__28954_28972__$1);
var G__28980 = null;
var G__28981 = (0);
var G__28982 = (0);
seq__28954_28962 = G__28979;
chunk__28955_28963 = G__28980;
count__28956_28964 = G__28981;
i__28957_28965 = G__28982;
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
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28958){
var vec__28959 = p__28958;
var seq__28960 = cljs.core.seq.call(null,vec__28959);
var first__28961 = cljs.core.first.call(null,seq__28960);
var seq__28960__$1 = cljs.core.next.call(null,seq__28960);
var x = first__28961;
var xs = seq__28960__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__28945_SHARP_){
return clojure.set.difference.call(null,p1__28945_SHARP_,x);
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
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__28983_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__28983_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28984 = cljs.core.seq.call(null,provides);
var chunk__28985 = null;
var count__28986 = (0);
var i__28987 = (0);
while(true){
if((i__28987 < count__28986)){
var prov = cljs.core._nth.call(null,chunk__28985,i__28987);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28996_29004 = cljs.core.seq.call(null,requires);
var chunk__28997_29005 = null;
var count__28998_29006 = (0);
var i__28999_29007 = (0);
while(true){
if((i__28999_29007 < count__28998_29006)){
var req_29008 = cljs.core._nth.call(null,chunk__28997_29005,i__28999_29007);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29008,prov);


var G__29009 = seq__28996_29004;
var G__29010 = chunk__28997_29005;
var G__29011 = count__28998_29006;
var G__29012 = (i__28999_29007 + (1));
seq__28996_29004 = G__29009;
chunk__28997_29005 = G__29010;
count__28998_29006 = G__29011;
i__28999_29007 = G__29012;
continue;
} else {
var temp__5753__auto___29013 = cljs.core.seq.call(null,seq__28996_29004);
if(temp__5753__auto___29013){
var seq__28996_29014__$1 = temp__5753__auto___29013;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28996_29014__$1)){
var c__4556__auto___29015 = cljs.core.chunk_first.call(null,seq__28996_29014__$1);
var G__29016 = cljs.core.chunk_rest.call(null,seq__28996_29014__$1);
var G__29017 = c__4556__auto___29015;
var G__29018 = cljs.core.count.call(null,c__4556__auto___29015);
var G__29019 = (0);
seq__28996_29004 = G__29016;
chunk__28997_29005 = G__29017;
count__28998_29006 = G__29018;
i__28999_29007 = G__29019;
continue;
} else {
var req_29020 = cljs.core.first.call(null,seq__28996_29014__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29020,prov);


var G__29021 = cljs.core.next.call(null,seq__28996_29014__$1);
var G__29022 = null;
var G__29023 = (0);
var G__29024 = (0);
seq__28996_29004 = G__29021;
chunk__28997_29005 = G__29022;
count__28998_29006 = G__29023;
i__28999_29007 = G__29024;
continue;
}
} else {
}
}
break;
}


var G__29025 = seq__28984;
var G__29026 = chunk__28985;
var G__29027 = count__28986;
var G__29028 = (i__28987 + (1));
seq__28984 = G__29025;
chunk__28985 = G__29026;
count__28986 = G__29027;
i__28987 = G__29028;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__28984);
if(temp__5753__auto__){
var seq__28984__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28984__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28984__$1);
var G__29029 = cljs.core.chunk_rest.call(null,seq__28984__$1);
var G__29030 = c__4556__auto__;
var G__29031 = cljs.core.count.call(null,c__4556__auto__);
var G__29032 = (0);
seq__28984 = G__29029;
chunk__28985 = G__29030;
count__28986 = G__29031;
i__28987 = G__29032;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28984__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29000_29033 = cljs.core.seq.call(null,requires);
var chunk__29001_29034 = null;
var count__29002_29035 = (0);
var i__29003_29036 = (0);
while(true){
if((i__29003_29036 < count__29002_29035)){
var req_29037 = cljs.core._nth.call(null,chunk__29001_29034,i__29003_29036);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29037,prov);


var G__29038 = seq__29000_29033;
var G__29039 = chunk__29001_29034;
var G__29040 = count__29002_29035;
var G__29041 = (i__29003_29036 + (1));
seq__29000_29033 = G__29038;
chunk__29001_29034 = G__29039;
count__29002_29035 = G__29040;
i__29003_29036 = G__29041;
continue;
} else {
var temp__5753__auto___29042__$1 = cljs.core.seq.call(null,seq__29000_29033);
if(temp__5753__auto___29042__$1){
var seq__29000_29043__$1 = temp__5753__auto___29042__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29000_29043__$1)){
var c__4556__auto___29044 = cljs.core.chunk_first.call(null,seq__29000_29043__$1);
var G__29045 = cljs.core.chunk_rest.call(null,seq__29000_29043__$1);
var G__29046 = c__4556__auto___29044;
var G__29047 = cljs.core.count.call(null,c__4556__auto___29044);
var G__29048 = (0);
seq__29000_29033 = G__29045;
chunk__29001_29034 = G__29046;
count__29002_29035 = G__29047;
i__29003_29036 = G__29048;
continue;
} else {
var req_29049 = cljs.core.first.call(null,seq__29000_29043__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29049,prov);


var G__29050 = cljs.core.next.call(null,seq__29000_29043__$1);
var G__29051 = null;
var G__29052 = (0);
var G__29053 = (0);
seq__29000_29033 = G__29050;
chunk__29001_29034 = G__29051;
count__29002_29035 = G__29052;
i__29003_29036 = G__29053;
continue;
}
} else {
}
}
break;
}


var G__29054 = cljs.core.next.call(null,seq__28984__$1);
var G__29055 = null;
var G__29056 = (0);
var G__29057 = (0);
seq__28984 = G__29054;
chunk__28985 = G__29055;
count__28986 = G__29056;
i__28987 = G__29057;
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
var seq__29058_29062 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29059_29063 = null;
var count__29060_29064 = (0);
var i__29061_29065 = (0);
while(true){
if((i__29061_29065 < count__29060_29064)){
var ns_29066 = cljs.core._nth.call(null,chunk__29059_29063,i__29061_29065);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29066);


var G__29067 = seq__29058_29062;
var G__29068 = chunk__29059_29063;
var G__29069 = count__29060_29064;
var G__29070 = (i__29061_29065 + (1));
seq__29058_29062 = G__29067;
chunk__29059_29063 = G__29068;
count__29060_29064 = G__29069;
i__29061_29065 = G__29070;
continue;
} else {
var temp__5753__auto___29071 = cljs.core.seq.call(null,seq__29058_29062);
if(temp__5753__auto___29071){
var seq__29058_29072__$1 = temp__5753__auto___29071;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29058_29072__$1)){
var c__4556__auto___29073 = cljs.core.chunk_first.call(null,seq__29058_29072__$1);
var G__29074 = cljs.core.chunk_rest.call(null,seq__29058_29072__$1);
var G__29075 = c__4556__auto___29073;
var G__29076 = cljs.core.count.call(null,c__4556__auto___29073);
var G__29077 = (0);
seq__29058_29062 = G__29074;
chunk__29059_29063 = G__29075;
count__29060_29064 = G__29076;
i__29061_29065 = G__29077;
continue;
} else {
var ns_29078 = cljs.core.first.call(null,seq__29058_29072__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29078);


var G__29079 = cljs.core.next.call(null,seq__29058_29072__$1);
var G__29080 = null;
var G__29081 = (0);
var G__29082 = (0);
seq__29058_29062 = G__29079;
chunk__29059_29063 = G__29080;
count__29060_29064 = G__29081;
i__29061_29065 = G__29082;
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
var G__29083__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29083 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29084__i = 0, G__29084__a = new Array(arguments.length -  0);
while (G__29084__i < G__29084__a.length) {G__29084__a[G__29084__i] = arguments[G__29084__i + 0]; ++G__29084__i;}
  args = new cljs.core.IndexedSeq(G__29084__a,0,null);
} 
return G__29083__delegate.call(this,args);};
G__29083.cljs$lang$maxFixedArity = 0;
G__29083.cljs$lang$applyTo = (function (arglist__29085){
var args = cljs.core.seq(arglist__29085);
return G__29083__delegate(args);
});
G__29083.cljs$core$IFn$_invoke$arity$variadic = G__29083__delegate;
return G__29083;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__29086_SHARP_,p2__29087_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29086_SHARP_)),p2__29087_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__29088_SHARP_,p2__29089_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29088_SHARP_),p2__29089_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29090 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29090.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__29090.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__29090;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29091){if((e29091 instanceof Error)){
var e = e29091;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29091;

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
}catch (e29092){if((e29092 instanceof Error)){
var e = e29092;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29092;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29093 = cljs.core._EQ_;
var expr__29094 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29093.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29094))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29093.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29094))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29093.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29094))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29096,callback){
var map__29097 = p__29096;
var map__29097__$1 = (((((!((map__29097 == null))))?(((((map__29097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29097):map__29097);
var file_msg = map__29097__$1;
var request_url = cljs.core.get.call(null,map__29097__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
figwheel.client.file_reloading.reloader_loop = (function (){var c__26718__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26719__auto__ = (function (){var switch__26623__auto__ = (function (state_29135){
var state_val_29136 = (state_29135[(1)]);
if((state_val_29136 === (7))){
var inst_29131 = (state_29135[(2)]);
var state_29135__$1 = state_29135;
var statearr_29137_29163 = state_29135__$1;
(statearr_29137_29163[(2)] = inst_29131);

(statearr_29137_29163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (1))){
var state_29135__$1 = state_29135;
var statearr_29138_29164 = state_29135__$1;
(statearr_29138_29164[(2)] = null);

(statearr_29138_29164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (4))){
var inst_29101 = (state_29135[(7)]);
var inst_29101__$1 = (state_29135[(2)]);
var state_29135__$1 = (function (){var statearr_29139 = state_29135;
(statearr_29139[(7)] = inst_29101__$1);

return statearr_29139;
})();
if(cljs.core.truth_(inst_29101__$1)){
var statearr_29140_29165 = state_29135__$1;
(statearr_29140_29165[(1)] = (5));

} else {
var statearr_29141_29166 = state_29135__$1;
(statearr_29141_29166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (15))){
var inst_29116 = (state_29135[(8)]);
var inst_29114 = (state_29135[(9)]);
var inst_29118 = inst_29116.call(null,inst_29114);
var state_29135__$1 = state_29135;
var statearr_29142_29167 = state_29135__$1;
(statearr_29142_29167[(2)] = inst_29118);

(statearr_29142_29167[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (13))){
var inst_29125 = (state_29135[(2)]);
var state_29135__$1 = state_29135;
var statearr_29143_29168 = state_29135__$1;
(statearr_29143_29168[(2)] = inst_29125);

(statearr_29143_29168[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (6))){
var state_29135__$1 = state_29135;
var statearr_29144_29169 = state_29135__$1;
(statearr_29144_29169[(2)] = null);

(statearr_29144_29169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (17))){
var inst_29122 = (state_29135[(2)]);
var state_29135__$1 = state_29135;
var statearr_29145_29170 = state_29135__$1;
(statearr_29145_29170[(2)] = inst_29122);

(statearr_29145_29170[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (3))){
var inst_29133 = (state_29135[(2)]);
var state_29135__$1 = state_29135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29135__$1,inst_29133);
} else {
if((state_val_29136 === (12))){
var state_29135__$1 = state_29135;
var statearr_29146_29171 = state_29135__$1;
(statearr_29146_29171[(2)] = null);

(statearr_29146_29171[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (2))){
var state_29135__$1 = state_29135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29135__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29136 === (11))){
var inst_29106 = (state_29135[(10)]);
var inst_29112 = figwheel.client.file_reloading.blocking_load.call(null,inst_29106);
var state_29135__$1 = state_29135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29135__$1,(14),inst_29112);
} else {
if((state_val_29136 === (9))){
var inst_29106 = (state_29135[(10)]);
var state_29135__$1 = state_29135;
if(cljs.core.truth_(inst_29106)){
var statearr_29147_29172 = state_29135__$1;
(statearr_29147_29172[(1)] = (11));

} else {
var statearr_29148_29173 = state_29135__$1;
(statearr_29148_29173[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (5))){
var inst_29107 = (state_29135[(11)]);
var inst_29101 = (state_29135[(7)]);
var inst_29106 = cljs.core.nth.call(null,inst_29101,(0),null);
var inst_29107__$1 = cljs.core.nth.call(null,inst_29101,(1),null);
var state_29135__$1 = (function (){var statearr_29149 = state_29135;
(statearr_29149[(11)] = inst_29107__$1);

(statearr_29149[(10)] = inst_29106);

return statearr_29149;
})();
if(cljs.core.truth_(inst_29107__$1)){
var statearr_29150_29174 = state_29135__$1;
(statearr_29150_29174[(1)] = (8));

} else {
var statearr_29151_29175 = state_29135__$1;
(statearr_29151_29175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (14))){
var inst_29116 = (state_29135[(8)]);
var inst_29106 = (state_29135[(10)]);
var inst_29114 = (state_29135[(2)]);
var inst_29115 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29116__$1 = cljs.core.get.call(null,inst_29115,inst_29106);
var state_29135__$1 = (function (){var statearr_29152 = state_29135;
(statearr_29152[(8)] = inst_29116__$1);

(statearr_29152[(9)] = inst_29114);

return statearr_29152;
})();
if(cljs.core.truth_(inst_29116__$1)){
var statearr_29153_29176 = state_29135__$1;
(statearr_29153_29176[(1)] = (15));

} else {
var statearr_29154_29177 = state_29135__$1;
(statearr_29154_29177[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (16))){
var inst_29114 = (state_29135[(9)]);
var inst_29120 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29114);
var state_29135__$1 = state_29135;
var statearr_29155_29178 = state_29135__$1;
(statearr_29155_29178[(2)] = inst_29120);

(statearr_29155_29178[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (10))){
var inst_29127 = (state_29135[(2)]);
var state_29135__$1 = (function (){var statearr_29156 = state_29135;
(statearr_29156[(12)] = inst_29127);

return statearr_29156;
})();
var statearr_29157_29179 = state_29135__$1;
(statearr_29157_29179[(2)] = null);

(statearr_29157_29179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29136 === (8))){
var inst_29107 = (state_29135[(11)]);
var inst_29109 = eval(inst_29107);
var state_29135__$1 = state_29135;
var statearr_29158_29180 = state_29135__$1;
(statearr_29158_29180[(2)] = inst_29109);

(statearr_29158_29180[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__26624__auto__ = null;
var figwheel$client$file_reloading$state_machine__26624__auto____0 = (function (){
var statearr_29159 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29159[(0)] = figwheel$client$file_reloading$state_machine__26624__auto__);

(statearr_29159[(1)] = (1));

return statearr_29159;
});
var figwheel$client$file_reloading$state_machine__26624__auto____1 = (function (state_29135){
while(true){
var ret_value__26625__auto__ = (function (){try{while(true){
var result__26626__auto__ = switch__26623__auto__.call(null,state_29135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26626__auto__;
}
break;
}
}catch (e29160){if((e29160 instanceof Object)){
var ex__26627__auto__ = e29160;
var statearr_29161_29181 = state_29135;
(statearr_29161_29181[(5)] = ex__26627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29182 = state_29135;
state_29135 = G__29182;
continue;
} else {
return ret_value__26625__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26624__auto__ = function(state_29135){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26624__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26624__auto____1.call(this,state_29135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26624__auto____0;
figwheel$client$file_reloading$state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26624__auto____1;
return figwheel$client$file_reloading$state_machine__26624__auto__;
})()
})();
var state__26720__auto__ = (function (){var statearr_29162 = f__26719__auto__.call(null);
(statearr_29162[(6)] = c__26718__auto__);

return statearr_29162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26720__auto__);
}));

return c__26718__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29184 = arguments.length;
switch (G__29184) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29186,callback){
var map__29187 = p__29186;
var map__29187__$1 = (((((!((map__29187 == null))))?(((((map__29187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29187):map__29187);
var file_msg = map__29187__$1;
var namespace = cljs.core.get.call(null,map__29187__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29189){
var map__29190 = p__29189;
var map__29190__$1 = (((((!((map__29190 == null))))?(((((map__29190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29190):map__29190);
var file_msg = map__29190__$1;
var namespace = cljs.core.get.call(null,map__29190__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29192){
var map__29193 = p__29192;
var map__29193__$1 = (((((!((map__29193 == null))))?(((((map__29193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29193):map__29193);
var file_msg = map__29193__$1;
var namespace = cljs.core.get.call(null,map__29193__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29195,callback){
var map__29196 = p__29195;
var map__29196__$1 = (((((!((map__29196 == null))))?(((((map__29196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29196):map__29196);
var file_msg = map__29196__$1;
var request_url = cljs.core.get.call(null,map__29196__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29196__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__26718__auto___29246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26719__auto__ = (function (){var switch__26623__auto__ = (function (state_29231){
var state_val_29232 = (state_29231[(1)]);
if((state_val_29232 === (1))){
var inst_29205 = cljs.core.seq.call(null,files);
var inst_29206 = cljs.core.first.call(null,inst_29205);
var inst_29207 = cljs.core.next.call(null,inst_29205);
var inst_29208 = files;
var state_29231__$1 = (function (){var statearr_29233 = state_29231;
(statearr_29233[(7)] = inst_29207);

(statearr_29233[(8)] = inst_29206);

(statearr_29233[(9)] = inst_29208);

return statearr_29233;
})();
var statearr_29234_29247 = state_29231__$1;
(statearr_29234_29247[(2)] = null);

(statearr_29234_29247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29232 === (2))){
var inst_29214 = (state_29231[(10)]);
var inst_29208 = (state_29231[(9)]);
var inst_29213 = cljs.core.seq.call(null,inst_29208);
var inst_29214__$1 = cljs.core.first.call(null,inst_29213);
var inst_29215 = cljs.core.next.call(null,inst_29213);
var inst_29216 = (inst_29214__$1 == null);
var inst_29217 = cljs.core.not.call(null,inst_29216);
var state_29231__$1 = (function (){var statearr_29235 = state_29231;
(statearr_29235[(10)] = inst_29214__$1);

(statearr_29235[(11)] = inst_29215);

return statearr_29235;
})();
if(inst_29217){
var statearr_29236_29248 = state_29231__$1;
(statearr_29236_29248[(1)] = (4));

} else {
var statearr_29237_29249 = state_29231__$1;
(statearr_29237_29249[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29232 === (3))){
var inst_29229 = (state_29231[(2)]);
var state_29231__$1 = state_29231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29231__$1,inst_29229);
} else {
if((state_val_29232 === (4))){
var inst_29214 = (state_29231[(10)]);
var inst_29219 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29214);
var state_29231__$1 = state_29231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29231__$1,(7),inst_29219);
} else {
if((state_val_29232 === (5))){
var inst_29225 = cljs.core.async.close_BANG_.call(null,out);
var state_29231__$1 = state_29231;
var statearr_29238_29250 = state_29231__$1;
(statearr_29238_29250[(2)] = inst_29225);

(statearr_29238_29250[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29232 === (6))){
var inst_29227 = (state_29231[(2)]);
var state_29231__$1 = state_29231;
var statearr_29239_29251 = state_29231__$1;
(statearr_29239_29251[(2)] = inst_29227);

(statearr_29239_29251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29232 === (7))){
var inst_29215 = (state_29231[(11)]);
var inst_29221 = (state_29231[(2)]);
var inst_29222 = cljs.core.async.put_BANG_.call(null,out,inst_29221);
var inst_29208 = inst_29215;
var state_29231__$1 = (function (){var statearr_29240 = state_29231;
(statearr_29240[(12)] = inst_29222);

(statearr_29240[(9)] = inst_29208);

return statearr_29240;
})();
var statearr_29241_29252 = state_29231__$1;
(statearr_29241_29252[(2)] = null);

(statearr_29241_29252[(1)] = (2));


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
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26624__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26624__auto____0 = (function (){
var statearr_29242 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29242[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26624__auto__);

(statearr_29242[(1)] = (1));

return statearr_29242;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26624__auto____1 = (function (state_29231){
while(true){
var ret_value__26625__auto__ = (function (){try{while(true){
var result__26626__auto__ = switch__26623__auto__.call(null,state_29231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26626__auto__;
}
break;
}
}catch (e29243){if((e29243 instanceof Object)){
var ex__26627__auto__ = e29243;
var statearr_29244_29253 = state_29231;
(statearr_29244_29253[(5)] = ex__26627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29254 = state_29231;
state_29231 = G__29254;
continue;
} else {
return ret_value__26625__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26624__auto__ = function(state_29231){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26624__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26624__auto____1.call(this,state_29231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26624__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26624__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26624__auto__;
})()
})();
var state__26720__auto__ = (function (){var statearr_29245 = f__26719__auto__.call(null);
(statearr_29245[(6)] = c__26718__auto___29246);

return statearr_29245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26720__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29255,opts){
var map__29256 = p__29255;
var map__29256__$1 = (((((!((map__29256 == null))))?(((((map__29256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29256):map__29256);
var eval_body = cljs.core.get.call(null,map__29256__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29256__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e29258){var e = e29258;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5751__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29259_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29259_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5751__auto__)){
var file_msg = temp__5751__auto__;
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
return cljs.core.map.call(null,(function (p__29260){
var vec__29261 = p__29260;
var k = cljs.core.nth.call(null,vec__29261,(0),null);
var v = cljs.core.nth.call(null,vec__29261,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29264){
var vec__29265 = p__29264;
var k = cljs.core.nth.call(null,vec__29265,(0),null);
var v = cljs.core.nth.call(null,vec__29265,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29271,p__29272){
var map__29273 = p__29271;
var map__29273__$1 = (((((!((map__29273 == null))))?(((((map__29273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29273):map__29273);
var opts = map__29273__$1;
var before_jsload = cljs.core.get.call(null,map__29273__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29273__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29273__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29274 = p__29272;
var map__29274__$1 = (((((!((map__29274 == null))))?(((((map__29274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29274):map__29274);
var msg = map__29274__$1;
var files = cljs.core.get.call(null,map__29274__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29274__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29274__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26718__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26719__auto__ = (function (){var switch__26623__auto__ = (function (state_29428){
var state_val_29429 = (state_29428[(1)]);
if((state_val_29429 === (7))){
var inst_29290 = (state_29428[(7)]);
var inst_29289 = (state_29428[(8)]);
var inst_29291 = (state_29428[(9)]);
var inst_29288 = (state_29428[(10)]);
var inst_29296 = cljs.core._nth.call(null,inst_29289,inst_29291);
var inst_29297 = figwheel.client.file_reloading.eval_body.call(null,inst_29296,opts);
var inst_29298 = (inst_29291 + (1));
var tmp29430 = inst_29290;
var tmp29431 = inst_29289;
var tmp29432 = inst_29288;
var inst_29288__$1 = tmp29432;
var inst_29289__$1 = tmp29431;
var inst_29290__$1 = tmp29430;
var inst_29291__$1 = inst_29298;
var state_29428__$1 = (function (){var statearr_29433 = state_29428;
(statearr_29433[(7)] = inst_29290__$1);

(statearr_29433[(8)] = inst_29289__$1);

(statearr_29433[(11)] = inst_29297);

(statearr_29433[(9)] = inst_29291__$1);

(statearr_29433[(10)] = inst_29288__$1);

return statearr_29433;
})();
var statearr_29434_29517 = state_29428__$1;
(statearr_29434_29517[(2)] = null);

(statearr_29434_29517[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (20))){
var inst_29331 = (state_29428[(12)]);
var inst_29339 = figwheel.client.file_reloading.sort_files.call(null,inst_29331);
var state_29428__$1 = state_29428;
var statearr_29435_29518 = state_29428__$1;
(statearr_29435_29518[(2)] = inst_29339);

(statearr_29435_29518[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (27))){
var state_29428__$1 = state_29428;
var statearr_29436_29519 = state_29428__$1;
(statearr_29436_29519[(2)] = null);

(statearr_29436_29519[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (1))){
var inst_29280 = (state_29428[(13)]);
var inst_29277 = before_jsload.call(null,files);
var inst_29278 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29279 = (function (){return (function (p1__29268_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29268_SHARP_);
});
})();
var inst_29280__$1 = cljs.core.filter.call(null,inst_29279,files);
var inst_29281 = cljs.core.not_empty.call(null,inst_29280__$1);
var state_29428__$1 = (function (){var statearr_29437 = state_29428;
(statearr_29437[(14)] = inst_29277);

(statearr_29437[(13)] = inst_29280__$1);

(statearr_29437[(15)] = inst_29278);

return statearr_29437;
})();
if(cljs.core.truth_(inst_29281)){
var statearr_29438_29520 = state_29428__$1;
(statearr_29438_29520[(1)] = (2));

} else {
var statearr_29439_29521 = state_29428__$1;
(statearr_29439_29521[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (24))){
var state_29428__$1 = state_29428;
var statearr_29440_29522 = state_29428__$1;
(statearr_29440_29522[(2)] = null);

(statearr_29440_29522[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (39))){
var inst_29381 = (state_29428[(16)]);
var state_29428__$1 = state_29428;
var statearr_29441_29523 = state_29428__$1;
(statearr_29441_29523[(2)] = inst_29381);

(statearr_29441_29523[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (46))){
var inst_29423 = (state_29428[(2)]);
var state_29428__$1 = state_29428;
var statearr_29442_29524 = state_29428__$1;
(statearr_29442_29524[(2)] = inst_29423);

(statearr_29442_29524[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (4))){
var inst_29325 = (state_29428[(2)]);
var inst_29326 = cljs.core.List.EMPTY;
var inst_29327 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29326);
var inst_29328 = (function (){return (function (p1__29269_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29269_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29269_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29269_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_29329 = cljs.core.filter.call(null,inst_29328,files);
var inst_29330 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29331 = cljs.core.concat.call(null,inst_29329,inst_29330);
var state_29428__$1 = (function (){var statearr_29443 = state_29428;
(statearr_29443[(12)] = inst_29331);

(statearr_29443[(17)] = inst_29327);

(statearr_29443[(18)] = inst_29325);

return statearr_29443;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29444_29525 = state_29428__$1;
(statearr_29444_29525[(1)] = (16));

} else {
var statearr_29445_29526 = state_29428__$1;
(statearr_29445_29526[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (15))){
var inst_29315 = (state_29428[(2)]);
var state_29428__$1 = state_29428;
var statearr_29446_29527 = state_29428__$1;
(statearr_29446_29527[(2)] = inst_29315);

(statearr_29446_29527[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (21))){
var inst_29341 = (state_29428[(19)]);
var inst_29341__$1 = (state_29428[(2)]);
var inst_29342 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29341__$1);
var state_29428__$1 = (function (){var statearr_29447 = state_29428;
(statearr_29447[(19)] = inst_29341__$1);

return statearr_29447;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29428__$1,(22),inst_29342);
} else {
if((state_val_29429 === (31))){
var inst_29426 = (state_29428[(2)]);
var state_29428__$1 = state_29428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29428__$1,inst_29426);
} else {
if((state_val_29429 === (32))){
var inst_29381 = (state_29428[(16)]);
var inst_29386 = inst_29381.cljs$lang$protocol_mask$partition0$;
var inst_29387 = (inst_29386 & (64));
var inst_29388 = inst_29381.cljs$core$ISeq$;
var inst_29389 = (cljs.core.PROTOCOL_SENTINEL === inst_29388);
var inst_29390 = ((inst_29387) || (inst_29389));
var state_29428__$1 = state_29428;
if(cljs.core.truth_(inst_29390)){
var statearr_29448_29528 = state_29428__$1;
(statearr_29448_29528[(1)] = (35));

} else {
var statearr_29449_29529 = state_29428__$1;
(statearr_29449_29529[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (40))){
var inst_29403 = (state_29428[(20)]);
var inst_29402 = (state_29428[(2)]);
var inst_29403__$1 = cljs.core.get.call(null,inst_29402,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29404 = cljs.core.get.call(null,inst_29402,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29405 = cljs.core.not_empty.call(null,inst_29403__$1);
var state_29428__$1 = (function (){var statearr_29450 = state_29428;
(statearr_29450[(21)] = inst_29404);

(statearr_29450[(20)] = inst_29403__$1);

return statearr_29450;
})();
if(cljs.core.truth_(inst_29405)){
var statearr_29451_29530 = state_29428__$1;
(statearr_29451_29530[(1)] = (41));

} else {
var statearr_29452_29531 = state_29428__$1;
(statearr_29452_29531[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (33))){
var state_29428__$1 = state_29428;
var statearr_29453_29532 = state_29428__$1;
(statearr_29453_29532[(2)] = false);

(statearr_29453_29532[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (13))){
var inst_29301 = (state_29428[(22)]);
var inst_29305 = cljs.core.chunk_first.call(null,inst_29301);
var inst_29306 = cljs.core.chunk_rest.call(null,inst_29301);
var inst_29307 = cljs.core.count.call(null,inst_29305);
var inst_29288 = inst_29306;
var inst_29289 = inst_29305;
var inst_29290 = inst_29307;
var inst_29291 = (0);
var state_29428__$1 = (function (){var statearr_29454 = state_29428;
(statearr_29454[(7)] = inst_29290);

(statearr_29454[(8)] = inst_29289);

(statearr_29454[(9)] = inst_29291);

(statearr_29454[(10)] = inst_29288);

return statearr_29454;
})();
var statearr_29455_29533 = state_29428__$1;
(statearr_29455_29533[(2)] = null);

(statearr_29455_29533[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (22))){
var inst_29341 = (state_29428[(19)]);
var inst_29344 = (state_29428[(23)]);
var inst_29345 = (state_29428[(24)]);
var inst_29349 = (state_29428[(25)]);
var inst_29344__$1 = (state_29428[(2)]);
var inst_29345__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29344__$1);
var inst_29346 = (function (){var all_files = inst_29341;
var res_SINGLEQUOTE_ = inst_29344__$1;
var res = inst_29345__$1;
return (function (p1__29270_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29270_SHARP_));
});
})();
var inst_29347 = cljs.core.filter.call(null,inst_29346,inst_29344__$1);
var inst_29348 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29349__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29348);
var inst_29350 = cljs.core.not_empty.call(null,inst_29349__$1);
var state_29428__$1 = (function (){var statearr_29456 = state_29428;
(statearr_29456[(23)] = inst_29344__$1);

(statearr_29456[(26)] = inst_29347);

(statearr_29456[(24)] = inst_29345__$1);

(statearr_29456[(25)] = inst_29349__$1);

return statearr_29456;
})();
if(cljs.core.truth_(inst_29350)){
var statearr_29457_29534 = state_29428__$1;
(statearr_29457_29534[(1)] = (23));

} else {
var statearr_29458_29535 = state_29428__$1;
(statearr_29458_29535[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (36))){
var state_29428__$1 = state_29428;
var statearr_29459_29536 = state_29428__$1;
(statearr_29459_29536[(2)] = false);

(statearr_29459_29536[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (41))){
var inst_29403 = (state_29428[(20)]);
var inst_29407 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29408 = cljs.core.map.call(null,inst_29407,inst_29403);
var inst_29409 = cljs.core.pr_str.call(null,inst_29408);
var inst_29410 = ["figwheel-no-load meta-data: ",inst_29409].join('');
var inst_29411 = figwheel.client.utils.log.call(null,inst_29410);
var state_29428__$1 = state_29428;
var statearr_29460_29537 = state_29428__$1;
(statearr_29460_29537[(2)] = inst_29411);

(statearr_29460_29537[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (43))){
var inst_29404 = (state_29428[(21)]);
var inst_29414 = (state_29428[(2)]);
var inst_29415 = cljs.core.not_empty.call(null,inst_29404);
var state_29428__$1 = (function (){var statearr_29461 = state_29428;
(statearr_29461[(27)] = inst_29414);

return statearr_29461;
})();
if(cljs.core.truth_(inst_29415)){
var statearr_29462_29538 = state_29428__$1;
(statearr_29462_29538[(1)] = (44));

} else {
var statearr_29463_29539 = state_29428__$1;
(statearr_29463_29539[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (29))){
var inst_29381 = (state_29428[(16)]);
var inst_29341 = (state_29428[(19)]);
var inst_29344 = (state_29428[(23)]);
var inst_29347 = (state_29428[(26)]);
var inst_29345 = (state_29428[(24)]);
var inst_29349 = (state_29428[(25)]);
var inst_29377 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29380 = (function (){var all_files = inst_29341;
var res_SINGLEQUOTE_ = inst_29344;
var res = inst_29345;
var files_not_loaded = inst_29347;
var dependencies_that_loaded = inst_29349;
return (function (p__29379){
var map__29464 = p__29379;
var map__29464__$1 = (((((!((map__29464 == null))))?(((((map__29464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29464):map__29464);
var namespace = cljs.core.get.call(null,map__29464__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
var inst_29381__$1 = cljs.core.group_by.call(null,inst_29380,inst_29347);
var inst_29383 = (inst_29381__$1 == null);
var inst_29384 = cljs.core.not.call(null,inst_29383);
var state_29428__$1 = (function (){var statearr_29466 = state_29428;
(statearr_29466[(28)] = inst_29377);

(statearr_29466[(16)] = inst_29381__$1);

return statearr_29466;
})();
if(inst_29384){
var statearr_29467_29540 = state_29428__$1;
(statearr_29467_29540[(1)] = (32));

} else {
var statearr_29468_29541 = state_29428__$1;
(statearr_29468_29541[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (44))){
var inst_29404 = (state_29428[(21)]);
var inst_29417 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29404);
var inst_29418 = cljs.core.pr_str.call(null,inst_29417);
var inst_29419 = ["not required: ",inst_29418].join('');
var inst_29420 = figwheel.client.utils.log.call(null,inst_29419);
var state_29428__$1 = state_29428;
var statearr_29469_29542 = state_29428__$1;
(statearr_29469_29542[(2)] = inst_29420);

(statearr_29469_29542[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (6))){
var inst_29322 = (state_29428[(2)]);
var state_29428__$1 = state_29428;
var statearr_29470_29543 = state_29428__$1;
(statearr_29470_29543[(2)] = inst_29322);

(statearr_29470_29543[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (28))){
var inst_29347 = (state_29428[(26)]);
var inst_29374 = (state_29428[(2)]);
var inst_29375 = cljs.core.not_empty.call(null,inst_29347);
var state_29428__$1 = (function (){var statearr_29471 = state_29428;
(statearr_29471[(29)] = inst_29374);

return statearr_29471;
})();
if(cljs.core.truth_(inst_29375)){
var statearr_29472_29544 = state_29428__$1;
(statearr_29472_29544[(1)] = (29));

} else {
var statearr_29473_29545 = state_29428__$1;
(statearr_29473_29545[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (25))){
var inst_29345 = (state_29428[(24)]);
var inst_29361 = (state_29428[(2)]);
var inst_29362 = cljs.core.not_empty.call(null,inst_29345);
var state_29428__$1 = (function (){var statearr_29474 = state_29428;
(statearr_29474[(30)] = inst_29361);

return statearr_29474;
})();
if(cljs.core.truth_(inst_29362)){
var statearr_29475_29546 = state_29428__$1;
(statearr_29475_29546[(1)] = (26));

} else {
var statearr_29476_29547 = state_29428__$1;
(statearr_29476_29547[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (34))){
var inst_29397 = (state_29428[(2)]);
var state_29428__$1 = state_29428;
if(cljs.core.truth_(inst_29397)){
var statearr_29477_29548 = state_29428__$1;
(statearr_29477_29548[(1)] = (38));

} else {
var statearr_29478_29549 = state_29428__$1;
(statearr_29478_29549[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (17))){
var state_29428__$1 = state_29428;
var statearr_29479_29550 = state_29428__$1;
(statearr_29479_29550[(2)] = recompile_dependents);

(statearr_29479_29550[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (3))){
var state_29428__$1 = state_29428;
var statearr_29480_29551 = state_29428__$1;
(statearr_29480_29551[(2)] = null);

(statearr_29480_29551[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (12))){
var inst_29318 = (state_29428[(2)]);
var state_29428__$1 = state_29428;
var statearr_29481_29552 = state_29428__$1;
(statearr_29481_29552[(2)] = inst_29318);

(statearr_29481_29552[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (2))){
var inst_29280 = (state_29428[(13)]);
var inst_29287 = cljs.core.seq.call(null,inst_29280);
var inst_29288 = inst_29287;
var inst_29289 = null;
var inst_29290 = (0);
var inst_29291 = (0);
var state_29428__$1 = (function (){var statearr_29482 = state_29428;
(statearr_29482[(7)] = inst_29290);

(statearr_29482[(8)] = inst_29289);

(statearr_29482[(9)] = inst_29291);

(statearr_29482[(10)] = inst_29288);

return statearr_29482;
})();
var statearr_29483_29553 = state_29428__$1;
(statearr_29483_29553[(2)] = null);

(statearr_29483_29553[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (23))){
var inst_29341 = (state_29428[(19)]);
var inst_29344 = (state_29428[(23)]);
var inst_29347 = (state_29428[(26)]);
var inst_29345 = (state_29428[(24)]);
var inst_29349 = (state_29428[(25)]);
var inst_29352 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29354 = (function (){var all_files = inst_29341;
var res_SINGLEQUOTE_ = inst_29344;
var res = inst_29345;
var files_not_loaded = inst_29347;
var dependencies_that_loaded = inst_29349;
return (function (p__29353){
var map__29484 = p__29353;
var map__29484__$1 = (((((!((map__29484 == null))))?(((((map__29484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29484):map__29484);
var request_url = cljs.core.get.call(null,map__29484__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_29355 = cljs.core.reverse.call(null,inst_29349);
var inst_29356 = cljs.core.map.call(null,inst_29354,inst_29355);
var inst_29357 = cljs.core.pr_str.call(null,inst_29356);
var inst_29358 = figwheel.client.utils.log.call(null,inst_29357);
var state_29428__$1 = (function (){var statearr_29486 = state_29428;
(statearr_29486[(31)] = inst_29352);

return statearr_29486;
})();
var statearr_29487_29554 = state_29428__$1;
(statearr_29487_29554[(2)] = inst_29358);

(statearr_29487_29554[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (35))){
var state_29428__$1 = state_29428;
var statearr_29488_29555 = state_29428__$1;
(statearr_29488_29555[(2)] = true);

(statearr_29488_29555[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (19))){
var inst_29331 = (state_29428[(12)]);
var inst_29337 = figwheel.client.file_reloading.expand_files.call(null,inst_29331);
var state_29428__$1 = state_29428;
var statearr_29489_29556 = state_29428__$1;
(statearr_29489_29556[(2)] = inst_29337);

(statearr_29489_29556[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (11))){
var state_29428__$1 = state_29428;
var statearr_29490_29557 = state_29428__$1;
(statearr_29490_29557[(2)] = null);

(statearr_29490_29557[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (9))){
var inst_29320 = (state_29428[(2)]);
var state_29428__$1 = state_29428;
var statearr_29491_29558 = state_29428__$1;
(statearr_29491_29558[(2)] = inst_29320);

(statearr_29491_29558[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (5))){
var inst_29290 = (state_29428[(7)]);
var inst_29291 = (state_29428[(9)]);
var inst_29293 = (inst_29291 < inst_29290);
var inst_29294 = inst_29293;
var state_29428__$1 = state_29428;
if(cljs.core.truth_(inst_29294)){
var statearr_29492_29559 = state_29428__$1;
(statearr_29492_29559[(1)] = (7));

} else {
var statearr_29493_29560 = state_29428__$1;
(statearr_29493_29560[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (14))){
var inst_29301 = (state_29428[(22)]);
var inst_29310 = cljs.core.first.call(null,inst_29301);
var inst_29311 = figwheel.client.file_reloading.eval_body.call(null,inst_29310,opts);
var inst_29312 = cljs.core.next.call(null,inst_29301);
var inst_29288 = inst_29312;
var inst_29289 = null;
var inst_29290 = (0);
var inst_29291 = (0);
var state_29428__$1 = (function (){var statearr_29494 = state_29428;
(statearr_29494[(32)] = inst_29311);

(statearr_29494[(7)] = inst_29290);

(statearr_29494[(8)] = inst_29289);

(statearr_29494[(9)] = inst_29291);

(statearr_29494[(10)] = inst_29288);

return statearr_29494;
})();
var statearr_29495_29561 = state_29428__$1;
(statearr_29495_29561[(2)] = null);

(statearr_29495_29561[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (45))){
var state_29428__$1 = state_29428;
var statearr_29496_29562 = state_29428__$1;
(statearr_29496_29562[(2)] = null);

(statearr_29496_29562[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (26))){
var inst_29341 = (state_29428[(19)]);
var inst_29344 = (state_29428[(23)]);
var inst_29347 = (state_29428[(26)]);
var inst_29345 = (state_29428[(24)]);
var inst_29349 = (state_29428[(25)]);
var inst_29364 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29366 = (function (){var all_files = inst_29341;
var res_SINGLEQUOTE_ = inst_29344;
var res = inst_29345;
var files_not_loaded = inst_29347;
var dependencies_that_loaded = inst_29349;
return (function (p__29365){
var map__29497 = p__29365;
var map__29497__$1 = (((((!((map__29497 == null))))?(((((map__29497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29497):map__29497);
var namespace = cljs.core.get.call(null,map__29497__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29497__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_29367 = cljs.core.map.call(null,inst_29366,inst_29345);
var inst_29368 = cljs.core.pr_str.call(null,inst_29367);
var inst_29369 = figwheel.client.utils.log.call(null,inst_29368);
var inst_29370 = (function (){var all_files = inst_29341;
var res_SINGLEQUOTE_ = inst_29344;
var res = inst_29345;
var files_not_loaded = inst_29347;
var dependencies_that_loaded = inst_29349;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_29371 = setTimeout(inst_29370,(10));
var state_29428__$1 = (function (){var statearr_29499 = state_29428;
(statearr_29499[(33)] = inst_29369);

(statearr_29499[(34)] = inst_29364);

return statearr_29499;
})();
var statearr_29500_29563 = state_29428__$1;
(statearr_29500_29563[(2)] = inst_29371);

(statearr_29500_29563[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (16))){
var state_29428__$1 = state_29428;
var statearr_29501_29564 = state_29428__$1;
(statearr_29501_29564[(2)] = reload_dependents);

(statearr_29501_29564[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (38))){
var inst_29381 = (state_29428[(16)]);
var inst_29399 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29381);
var state_29428__$1 = state_29428;
var statearr_29502_29565 = state_29428__$1;
(statearr_29502_29565[(2)] = inst_29399);

(statearr_29502_29565[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (30))){
var state_29428__$1 = state_29428;
var statearr_29503_29566 = state_29428__$1;
(statearr_29503_29566[(2)] = null);

(statearr_29503_29566[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (10))){
var inst_29301 = (state_29428[(22)]);
var inst_29303 = cljs.core.chunked_seq_QMARK_.call(null,inst_29301);
var state_29428__$1 = state_29428;
if(inst_29303){
var statearr_29504_29567 = state_29428__$1;
(statearr_29504_29567[(1)] = (13));

} else {
var statearr_29505_29568 = state_29428__$1;
(statearr_29505_29568[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (18))){
var inst_29335 = (state_29428[(2)]);
var state_29428__$1 = state_29428;
if(cljs.core.truth_(inst_29335)){
var statearr_29506_29569 = state_29428__$1;
(statearr_29506_29569[(1)] = (19));

} else {
var statearr_29507_29570 = state_29428__$1;
(statearr_29507_29570[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (42))){
var state_29428__$1 = state_29428;
var statearr_29508_29571 = state_29428__$1;
(statearr_29508_29571[(2)] = null);

(statearr_29508_29571[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (37))){
var inst_29394 = (state_29428[(2)]);
var state_29428__$1 = state_29428;
var statearr_29509_29572 = state_29428__$1;
(statearr_29509_29572[(2)] = inst_29394);

(statearr_29509_29572[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (8))){
var inst_29301 = (state_29428[(22)]);
var inst_29288 = (state_29428[(10)]);
var inst_29301__$1 = cljs.core.seq.call(null,inst_29288);
var state_29428__$1 = (function (){var statearr_29510 = state_29428;
(statearr_29510[(22)] = inst_29301__$1);

return statearr_29510;
})();
if(inst_29301__$1){
var statearr_29511_29573 = state_29428__$1;
(statearr_29511_29573[(1)] = (10));

} else {
var statearr_29512_29574 = state_29428__$1;
(statearr_29512_29574[(1)] = (11));

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
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26624__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26624__auto____0 = (function (){
var statearr_29513 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29513[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26624__auto__);

(statearr_29513[(1)] = (1));

return statearr_29513;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26624__auto____1 = (function (state_29428){
while(true){
var ret_value__26625__auto__ = (function (){try{while(true){
var result__26626__auto__ = switch__26623__auto__.call(null,state_29428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26626__auto__;
}
break;
}
}catch (e29514){if((e29514 instanceof Object)){
var ex__26627__auto__ = e29514;
var statearr_29515_29575 = state_29428;
(statearr_29515_29575[(5)] = ex__26627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29576 = state_29428;
state_29428 = G__29576;
continue;
} else {
return ret_value__26625__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26624__auto__ = function(state_29428){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26624__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26624__auto____1.call(this,state_29428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26624__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26624__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26624__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26624__auto__;
})()
})();
var state__26720__auto__ = (function (){var statearr_29516 = f__26719__auto__.call(null);
(statearr_29516[(6)] = c__26718__auto__);

return statearr_29516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26720__auto__);
}));

return c__26718__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29579,link){
var map__29580 = p__29579;
var map__29580__$1 = (((((!((map__29580 == null))))?(((((map__29580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29580):map__29580);
var file = cljs.core.get.call(null,map__29580__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5753__auto__ = link.href;
if(cljs.core.truth_(temp__5753__auto__)){
var link_href = temp__5753__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__29577_SHARP_,p2__29578_SHARP_){
if(cljs.core._EQ_.call(null,p1__29577_SHARP_,p2__29578_SHARP_)){
return p1__29577_SHARP_;
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
var temp__5753__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29583){
var map__29584 = p__29583;
var map__29584__$1 = (((((!((map__29584 == null))))?(((((map__29584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29584):map__29584);
var match_length = cljs.core.get.call(null,map__29584__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29584__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29582_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29582_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5753__auto__)){
var res = temp__5753__auto__;
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29586_SHARP_,p2__29587_SHARP_){
return cljs.core.assoc.call(null,p1__29586_SHARP_,cljs.core.get.call(null,p2__29587_SHARP_,key),p2__29587_SHARP_);
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
var temp__5751__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5751__auto__)){
var link = temp__5751__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_29588 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29588);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29588);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29589,p__29590){
var map__29591 = p__29589;
var map__29591__$1 = (((((!((map__29591 == null))))?(((((map__29591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29591):map__29591);
var on_cssload = cljs.core.get.call(null,map__29591__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29592 = p__29590;
var map__29592__$1 = (((((!((map__29592 == null))))?(((((map__29592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29592):map__29592);
var files_msg = map__29592__$1;
var files = cljs.core.get.call(null,map__29592__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5753__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5753__auto__)){
var f_datas = temp__5753__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1651858390039
