"use strict";var b=function(r,a){return function(){try{return a||r((a={exports:{}}).exports,a),a.exports}catch(e){throw (a=0, e)}};};var C=b(function(I,m){
function z(r,a,e,v,o,i,n,t,k,l){var f,q,y,x,s,c,u,g,p;for(f=v.data,q=t.data,y=v.accessors[0],x=t.accessors[0],g=r-a,s=i,c=l,u=0,p=0;p<r;p++)u+=(y(f,s)-e)*(x(q,c)-n),s+=o,c+=k;return u/g}m.exports=z
});var d=b(function(J,j){
var P=require('@stdlib/array-base-arraylike2object/dist'),A=C();function B(r,a,e,v,o,i,n,t,k,l){var f,q,y,x,s,c,u;if(c=r-a,r<=0||c<=0)return NaN;if(f=P(v),q=P(t),f.accessorProtocol||q.accessorProtocol)return A(r,a,e,f,o,i,n,q,k,l);for(y=i,x=l,s=0,u=0;u<r;u++)s+=(v[y]-e)*(t[x]-n),y+=o,x+=k;return s/c}j.exports=B
});var h=b(function(K,R){
var O=require('@stdlib/strided-base-stride2offset/dist'),D=d();function E(r,a,e,v,o,i,n,t){return D(r,a,e,v,o,O(r,o),i,n,t,O(r,t))}R.exports=E
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),w=h(),G=d();F(w,"ndarray",G);module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
