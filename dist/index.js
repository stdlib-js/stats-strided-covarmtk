"use strict";var b=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var C=b(function(I,m){
function z(r,a,u,t,v,i,n,e,k,l){var f,q,y,x,o,s,c,g,p;for(f=t.data,q=e.data,y=t.accessors[0],x=e.accessors[0],g=r-a,o=i,s=l,c=0,p=0;p<r;p++)c+=(y(f,o)-u)*(x(q,s)-n),o+=v,s+=k;return c/g}m.exports=z
});var d=b(function(J,j){
var P=require('@stdlib/array-base-arraylike2object/dist'),A=C();function B(r,a,u,t,v,i,n,e,k,l){var f,q,y,x,o,s,c;if(s=r-a,r<=0||s<=0)return NaN;if(f=P(t),q=P(e),f.accessorProtocol||q.accessorProtocol)return A(r,a,u,f,v,i,n,q,k,l);for(y=i,x=l,o=0,c=0;c<r;c++)o+=(t[y]-u)*(e[x]-n),y+=v,x+=k;return o/s}j.exports=B
});var h=b(function(K,R){
var O=require('@stdlib/strided-base-stride2offset/dist'),D=d();function E(r,a,u,t,v,i,n,e){return D(r,a,u,t,v,O(r,v),i,n,e,O(r,e))}R.exports=E
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),w=h(),G=d();F(w,"ndarray",G);module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
