(self.webpackChunkmfRutPayment=self.webpackChunkmfRutPayment||[]).push([[321],{8555:(ht,J,E)=>{E.r(J),E.d(J,{ACTIVE_RUNTIME_CHECKS:()=>S,ActionsSubject:()=>R,FEATURE_REDUCERS:()=>D,INIT:()=>M,INITIAL_REDUCERS:()=>C,INITIAL_STATE:()=>g,META_REDUCERS:()=>m,REDUCER_FACTORY:()=>k,ReducerManager:()=>I,ReducerManagerDispatcher:()=>V,ReducerObservable:()=>v,STORE_FEATURES:()=>w,ScannedActionsSubject:()=>T,State:()=>L,StateObservable:()=>K,Store:()=>_,StoreFeatureModule:()=>_e,StoreModule:()=>at,StoreRootModule:()=>Q,UPDATE:()=>de,USER_PROVIDED_META_REDUCERS:()=>U,USER_RUNTIME_CHECKS:()=>N,combineReducers:()=>j,compose:()=>z,createAction:()=>X,createActionGroup:()=>ke,createFeature:()=>Ye,createFeatureSelector:()=>je,createReducer:()=>St,createReducerFactory:()=>$,createSelector:()=>W,createSelectorFactory:()=>ge,defaultMemoize:()=>b,defaultStateFn:()=>Ie,emptyProps:()=>Ce,isNgrxMockEnvironment:()=>me,on:()=>yt,props:()=>ee,reduceState:()=>le,resultMemoize:()=>qe,select:()=>fe,setNgrxMockEnvironment:()=>We,union:()=>Me});var c=E(1423),p=E(3970),y=E(6209);const h={};function X(e,r){if(h[e]=(h[e]||0)+1,"function"==typeof r)return A(e,(...n)=>({...r(...n),type:e}));switch(r?r._as:"empty"){case"empty":return A(e,()=>({type:e}));case"props":return A(e,n=>({...n,type:e}));default:throw new Error("Unexpected config.")}}function ee(){return{_as:"props",_p:void 0}}function Me(e){}function A(e,r){return Object.defineProperty(r,"type",{value:e,writable:!1})}function F(e){return e.charAt(0).toUpperCase()+e.substring(1)}function ke(e){const{source:r,events:t}=e;return Object.keys(t).reduce((n,o)=>({...n,[Oe(o)]:X(we(r,o),t[o])}),{})}function Ce(){return{_as:"props",_p:void 0}}function Oe(e){return e.trim().toLowerCase().split(" ").map((r,t)=>0===t?r:F(r)).join("")}function we(e,r){return`[${e}] ${r}`}const M="@ngrx/store/init";let R=(()=>{class e extends p.BehaviorSubject{constructor(){super({type:M})}next(t){if("function"==typeof t)throw new TypeError("\n        Dispatch expected an object, instead it received a function.\n        If you're using the createAction function, make sure to invoke the function\n        before dispatching the action. For example, someAction should be someAction().");if(typeof t>"u")throw new TypeError("Actions must be objects");if(typeof t.type>"u")throw new TypeError("Actions must have a type property");super.next(t)}complete(){}ngOnDestroy(){super.complete()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=c.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e})();const xe=[R],te=new c.InjectionToken("@ngrx/store Internal Root Guard"),ne=new c.InjectionToken("@ngrx/store Internal Initial State"),g=new c.InjectionToken("@ngrx/store Initial State"),k=new c.InjectionToken("@ngrx/store Reducer Factory"),re=new c.InjectionToken("@ngrx/store Internal Reducer Factory Provider"),C=new c.InjectionToken("@ngrx/store Initial Reducers"),O=new c.InjectionToken("@ngrx/store Internal Initial Reducers"),w=new c.InjectionToken("@ngrx/store Store Features"),oe=new c.InjectionToken("@ngrx/store Internal Store Reducers"),x=new c.InjectionToken("@ngrx/store Internal Feature Reducers"),ce=new c.InjectionToken("@ngrx/store Internal Feature Configs"),ie=new c.InjectionToken("@ngrx/store Internal Store Features"),se=new c.InjectionToken("@ngrx/store Internal Feature Reducers Token"),D=new c.InjectionToken("@ngrx/store Feature Reducers"),U=new c.InjectionToken("@ngrx/store User Provided Meta Reducers"),m=new c.InjectionToken("@ngrx/store Meta Reducers"),ue=new c.InjectionToken("@ngrx/store Internal Resolved Meta Reducers"),N=new c.InjectionToken("@ngrx/store User Runtime Checks Config"),ae=new c.InjectionToken("@ngrx/store Internal User Runtime Checks Config"),S=new c.InjectionToken("@ngrx/store Internal Runtime Checks"),P=new c.InjectionToken("@ngrx/store Check if Action types are unique");function j(e,r={}){const t=Object.keys(e),n={};for(let i=0;i<t.length;i++){const s=t[i];"function"==typeof e[s]&&(n[s]=e[s])}const o=Object.keys(n);return function(s,d){s=void 0===s?r:s;let a=!1;const l={};for(let u=0;u<o.length;u++){const f=o[u],Ae=s[f],Fe=(0,n[f])(Ae,d);l[f]=Fe,a=a||Fe!==Ae}return a?l:s}}function z(...e){return function(r){if(0===e.length)return r;const t=e[e.length-1];return e.slice(0,-1).reduceRight((o,i)=>i(o),t(r))}}function $(e,r){return Array.isArray(r)&&r.length>0&&(e=z.apply(null,[...r,e])),(t,n)=>{const o=e(t);return(i,s)=>o(i=void 0===i?n:i,s)}}class v extends p.Observable{}class V extends R{}const de="@ngrx/store/update-reducers";let I=(()=>{class e extends p.BehaviorSubject{constructor(t,n,o,i){super(i(o,n)),this.dispatcher=t,this.initialState=n,this.reducers=o,this.reducerFactory=i}get currentReducers(){return this.reducers}addFeature(t){this.addFeatures([t])}addFeatures(t){const n=t.reduce((o,{reducers:i,reducerFactory:s,metaReducers:d,initialState:a,key:l})=>{const u="function"==typeof i?function Ue(e){const r=Array.isArray(e)&&e.length>0?z(...e):t=>t;return(t,n)=>(t=r(t),(o,i)=>t(o=void 0===o?n:o,i))}(d)(i,a):$(s,d)(i,a);return o[l]=u,o},{});this.addReducers(n)}removeFeature(t){this.removeFeatures([t])}removeFeatures(t){this.removeReducers(t.map(n=>n.key))}addReducer(t,n){this.addReducers({[t]:n})}addReducers(t){this.reducers={...this.reducers,...t},this.updateReducers(Object.keys(t))}removeReducer(t){this.removeReducers([t])}removeReducers(t){t.forEach(n=>{this.reducers=function De(e,r){return Object.keys(e).filter(t=>t!==r).reduce((t,n)=>Object.assign(t,{[n]:e[n]}),{})}(this.reducers,n)}),this.updateReducers(t)}updateReducers(t){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:de,features:t})}ngOnDestroy(){this.complete()}}return e.\u0275fac=function(t){return new(t||e)(c.\u0275\u0275inject(V),c.\u0275\u0275inject(g),c.\u0275\u0275inject(C),c.\u0275\u0275inject(k))},e.\u0275prov=c.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e})();const Ne=[I,{provide:v,useExisting:I},{provide:V,useExisting:R}];let T=(()=>{class e extends p.Subject{ngOnDestroy(){this.complete()}}return e.\u0275fac=function(){let r;return function(n){return(r||(r=c.\u0275\u0275getInheritedFactory(e)))(n||e)}}(),e.\u0275prov=c.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e})();const Pe=[T];class K extends p.Observable{}let L=(()=>{class e extends p.BehaviorSubject{constructor(t,n,o,i){super(i);const l=t.pipe((0,y.observeOn)(p.queueScheduler)).pipe((0,y.withLatestFrom)(n)).pipe((0,y.scan)(le,{state:i}));this.stateSubscription=l.subscribe(({state:u,action:f})=>{this.next(u),o.next(f)})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}}return e.INIT=M,e.\u0275fac=function(t){return new(t||e)(c.\u0275\u0275inject(R),c.\u0275\u0275inject(v),c.\u0275\u0275inject(T),c.\u0275\u0275inject(g))},e.\u0275prov=c.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e})();function le(e={state:void 0},[r,t]){const{state:n}=e;return{state:t(n,r),action:r}}const ze=[L,{provide:K,useExisting:L}];let _=(()=>{class e extends p.Observable{constructor(t,n,o){super(),this.actionsObserver=n,this.reducerManager=o,this.source=t}select(t,...n){return fe.call(null,t,...n)(this)}lift(t){const n=new e(this,this.actionsObserver,this.reducerManager);return n.operator=t,n}dispatch(t){this.actionsObserver.next(t)}next(t){this.actionsObserver.next(t)}error(t){this.actionsObserver.error(t)}complete(){this.actionsObserver.complete()}addReducer(t,n){this.reducerManager.addReducer(t,n)}removeReducer(t){this.reducerManager.removeReducer(t)}}return e.\u0275fac=function(t){return new(t||e)(c.\u0275\u0275inject(K),c.\u0275\u0275inject(R),c.\u0275\u0275inject(I))},e.\u0275prov=c.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e})();const $e=[_];function fe(e,r,...t){return function(o){let i;if("string"==typeof e){const s=[r,...t].filter(Boolean);i=o.pipe((0,y.pluck)(e,...s))}else{if("function"!=typeof e)throw new TypeError(`Unexpected type '${typeof e}' in select operator, expected 'string' or 'function'`);i=o.pipe((0,y.map)(s=>e(s,r)))}return i.pipe((0,y.distinctUntilChanged)())}}const B="https://ngrx.io/guide/store/configuration/runtime-checks";function pe(e){return void 0===e}function Re(e){return null===e}function ye(e){return Array.isArray(e)}function Se(e){return"object"==typeof e&&null!==e}function Ee(e){if(!function Be(e){return Se(e)&&!ye(e)}(e))return!1;const r=Object.getPrototypeOf(e);return r===Object.prototype||null===r}function G(e){return"function"==typeof e}let he=!1;function We(e){he=e}function me(){return he}function H(e,r){return e===r}function Ze(e,r,t){for(let n=0;n<e.length;n++)if(!t(e[n],r[n]))return!0;return!1}function qe(e,r){return b(e,H,r)}function b(e,r=H,t=H){let i,n=null,o=null;return{memoized:function l(){if(void 0!==i)return i.result;if(!n)return o=e.apply(null,arguments),n=arguments,o;if(!Ze(arguments,n,r))return o;const u=e.apply(null,arguments);return n=arguments,t(o,u)?o:(o=u,u)},reset:function s(){n=null,o=null},setResult:function d(u){i={result:u}},clearResult:function a(){i=void 0}}}function W(...e){return ge(b)(...e)}function Ie(e,r,t,n){if(void 0===t){const i=r.map(s=>s(e));return n.memoized.apply(null,i)}const o=r.map(i=>i(e,t));return n.memoized.apply(null,[...o,t])}function ge(e,r={stateFn:Ie}){return function(...t){let n=t;if(Array.isArray(n[0])){const[u,...f]=n;n=[...u,...f]}const o=n.slice(0,n.length-1),i=n[n.length-1],s=o.filter(u=>u.release&&"function"==typeof u.release),d=e(function(...u){return i.apply(null,u)}),a=b(function(u,f){return r.stateFn.apply(null,[u,o,f,d])});return Object.assign(a.memoized,{release:function l(){a.reset(),d.reset(),s.forEach(u=>u.release())},projector:d.memoized,setResult:a.setResult,clearResult:a.clearResult})}}function je(e){return W(r=>{const t=r[e];return!me()&&(0,c.isDevMode)()&&!(e in r)&&console.warn(`@ngrx/store: The feature name "${e}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${e}', ...) or StoreModule.forFeature('${e}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`),t},r=>r)}function Ye(e){const{name:r,reducer:t}=e,n=je(r),o=function Qe(e,r){const t=function Je(e){return e(void 0,{type:"@ngrx/feature/init"})}(r);return(Ee(t)?Object.keys(t):[]).reduce((o,i)=>({...o,[`select${F(i)}`]:W(e,s=>s?.[i])}),{})}(n,t);return{name:r,reducer:t,[`select${F(r)}State`]:n,...o}}function Z(e){Object.freeze(e);const r=G(e);return Object.getOwnPropertyNames(e).forEach(t=>{if(!t.startsWith("\u0275")&&function He(e,r){return Object.prototype.hasOwnProperty.call(e,r)}(e,t)&&(!r||"caller"!==t&&"callee"!==t&&"arguments"!==t)){const n=e[t];(Se(n)||G(n))&&!Object.isFrozen(n)&&Z(n)}}),e}function q(e,r=[]){return(pe(e)||Re(e))&&0===r.length?{path:["root"],value:e}:Object.keys(e).reduce((n,o)=>{if(n)return n;const i=e[o];return function Ge(e){return G(e)&&e.hasOwnProperty("\u0275cmp")}(i)?n:!(pe(i)||Re(i)||function Le(e){return"number"==typeof e}(i)||function Ke(e){return"boolean"==typeof e}(i)||function Ve(e){return"string"==typeof e}(i)||ye(i))&&(Ee(i)?q(i,[...r,o]):{path:[...r,o],value:i})},!1)}function ve(e,r){if(!1===e)return;const t=e.path.join("."),n=new Error(`Detected unserializable ${r} at "${t}". ${B}#strict${r}serializability`);throw n.value=e.value,n.unserializablePath=t,n}function nt(e){return(0,c.isDevMode)()?{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1,...e}:{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function rt({strictActionSerializability:e,strictStateSerializability:r}){return t=>e||r?function et(e,r){return function(t,n){r.action(n)&&ve(q(n),"action");const o=e(t,n);return r.state()&&ve(q(o),"state"),o}}(t,{action:n=>e&&!Y(n),state:()=>r}):t}function ot({strictActionImmutability:e,strictStateImmutability:r}){return t=>e||r?function Xe(e,r){return function(t,n){const o=r.action(n)?Z(n):n,i=e(t,o);return r.state()?Z(i):i}}(t,{action:n=>e&&!Y(n),state:()=>r}):t}function Y(e){return e.type.startsWith("@ngrx")}function ct({strictActionWithinNgZone:e}){return r=>e?function tt(e,r){return function(t,n){if(r.action(n)&&!c.NgZone.isInAngularZone())throw new Error(`Action '${n.type}' running outside NgZone. ${B}#strictactionwithinngzone`);return e(t,n)}}(r,{action:t=>e&&!Y(t)}):r}function it(e){return[{provide:ae,useValue:e},{provide:N,useFactory:st,deps:[ae]},{provide:S,deps:[N],useFactory:nt},{provide:m,multi:!0,deps:[S],useFactory:ot},{provide:m,multi:!0,deps:[S],useFactory:rt},{provide:m,multi:!0,deps:[S],useFactory:ct}]}function Te(){return[{provide:P,multi:!0,deps:[S],useFactory:ut}]}function st(e){return e}function ut(e){if(!e.strictActionTypeUniqueness)return;const r=Object.entries(h).filter(([,t])=>t>1).map(([t])=>t);if(r.length)throw new Error(`Action types are registered more than once, ${r.map(t=>`"${t}"`).join(", ")}. ${B}#strictactiontypeuniqueness`)}let Q=(()=>{class e{constructor(t,n,o,i,s,d){}}return e.\u0275fac=function(t){return new(t||e)(c.\u0275\u0275inject(R),c.\u0275\u0275inject(v),c.\u0275\u0275inject(T),c.\u0275\u0275inject(_),c.\u0275\u0275inject(te,8),c.\u0275\u0275inject(P,8))},e.\u0275mod=c.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=c.\u0275\u0275defineInjector({}),e})(),_e=(()=>{class e{constructor(t,n,o,i,s){this.features=t,this.featureReducers=n,this.reducerManager=o;const d=t.map((a,l)=>{const f=n.shift()[l];return{...a,reducers:f,initialState:be(a.initialState)}});o.addFeatures(d)}ngOnDestroy(){this.reducerManager.removeFeatures(this.features)}}return e.\u0275fac=function(t){return new(t||e)(c.\u0275\u0275inject(ie),c.\u0275\u0275inject(D),c.\u0275\u0275inject(I),c.\u0275\u0275inject(Q),c.\u0275\u0275inject(P,8))},e.\u0275mod=c.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=c.\u0275\u0275defineInjector({}),e})(),at=(()=>{class e{static forRoot(t,n={}){return{ngModule:Q,providers:[{provide:te,useFactory:Rt,deps:[[_,new c.Optional,new c.SkipSelf]]},{provide:ne,useValue:n.initialState},{provide:g,useFactory:be,deps:[ne]},{provide:O,useValue:t},{provide:oe,useExisting:t instanceof c.InjectionToken?t:O},{provide:C,deps:[c.Injector,O,[new c.Inject(oe)]],useFactory:dt},{provide:U,useValue:n.metaReducers?n.metaReducers:[]},{provide:ue,deps:[m,U],useFactory:pt},{provide:re,useValue:n.reducerFactory?n.reducerFactory:j},{provide:k,deps:[re,ue],useFactory:$},xe,Ne,Pe,ze,$e,it(n.runtimeChecks),Te()]}}static forFeature(t,n,o={}){return{ngModule:_e,providers:[{provide:ce,multi:!0,useValue:t instanceof Object?{}:o},{provide:w,multi:!0,useValue:{key:t instanceof Object?t.name:t,reducerFactory:o instanceof c.InjectionToken||!o.reducerFactory?j:o.reducerFactory,metaReducers:o instanceof c.InjectionToken||!o.metaReducers?[]:o.metaReducers,initialState:o instanceof c.InjectionToken||!o.initialState?void 0:o.initialState}},{provide:ie,deps:[c.Injector,ce,w],useFactory:lt},{provide:x,multi:!0,useValue:t instanceof Object?t.reducer:n},{provide:se,multi:!0,useExisting:n instanceof c.InjectionToken?n:x},{provide:D,multi:!0,deps:[c.Injector,x,[new c.Inject(se)]],useFactory:ft},Te()]}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=c.\u0275\u0275defineInjector({}),e})();function dt(e,r){return r instanceof c.InjectionToken?e.get(r):r}function lt(e,r,t){return t.map((n,o)=>{if(r[o]instanceof c.InjectionToken){const i=e.get(r[o]);return{key:n.key,reducerFactory:i.reducerFactory?i.reducerFactory:j,metaReducers:i.metaReducers?i.metaReducers:[],initialState:i.initialState}}return n})}function ft(e,r){return r.map(n=>n instanceof c.InjectionToken?e.get(n):n)}function be(e){return"function"==typeof e?e():e}function pt(e,r){return e.concat(r)}function Rt(e){if(e)throw new TypeError("StoreModule.forRoot() called twice. Feature modules should use StoreModule.forFeature() instead.");return"guarded"}function yt(...e){return{reducer:e.pop(),types:e.map(n=>n.type)}}function St(e,...r){const t=new Map;for(const n of r)for(const o of n.types){const i=t.get(o);t.set(o,i?(d,a)=>n.reducer(i(d,a),a):n.reducer)}return function(n=e,o){const i=t.get(o.type);return i?i(n,o):n}}}}]);