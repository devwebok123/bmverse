"use strict";(self.webpackChunkbmverse=self.webpackChunkbmverse||[]).push([[7100],{57100:function(e,t,n){n.r(t);var r=n(24611),o=(n(79619),n(37991));n(8278),n(64731),n(15461);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t,n,r,o,i,c){try{var a=e[i](c),u=a.value}catch(s){return void n(s)}a.done?t(u):Promise.resolve(u).then(r,o)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(e){u(i,r,o,c,a,"next",e)}function a(e){u(i,r,o,c,a,"throw",e)}c(void 0)}))}}t.default=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.heading,i=t.description,a=t.icon,u=t.html,l=t.button,f=!1;return o.a.subscribe((function(t){var n=t.walletCheckInProgress;!1===e&&!0===n&&(f=!1),e=n})),function(){var e=s((0,r.Z)().mark((function e(t){var p,w,h,b,v,d,k,y,m;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p=t.network,w=t.appNetworkId,h=t.walletSelect,b=t.walletCheck,v=t.exit,d=t.stateSyncStatus,k=t.stateStore,y=t.wallet,null!==p){e.next=5;break}if(!d.network){e.next=5;break}return e.next=5,new Promise((function(e){d.network&&d.network.then(e),setTimeout((function(){null===p&&e(void 0)}),500)}));case 5:if(f||k.network.get()==w||"WalletConnect"===(0,o.b)(null===y||void 0===y?void 0:y.provider)){e.next=14;break}return e.prev=6,f=!0,e.next=10,null===y||void 0===y||null===(m=y.provider)||void 0===m?void 0:m.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x"+(null===w||void 0===w?void 0:w.toString(16))}]});case 10:e.next=14;break;case 12:e.prev=12,e.t0=e.catch(6);case 14:if(k.network.get()==w){e.next=16;break}return e.abrupt("return",{heading:n||"You Must Change Networks",description:i||"We've detected that you need to switch your wallet's network from <b>".concat((0,o.n)(p),"</b> to <b>").concat((0,o.n)(w),'</b> for this Dapp. <br><br> <i style="font-size: inherit; font-family: inherit;">*Some wallets may not support changing networks. If you can not change networks in your wallet you may consider switching to a different wallet.</i>'),eventCode:"networkFail",button:l||{onclick:function(){var e=s((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!1,{switchingWallets:!0}),e.next=3,h();case 3:if(t=e.sent,e.t0=t,!e.t0){e.next=9;break}return e.next=8,b();case 8:e.t0=e.sent;case 9:n=e.t0,o.a.update((function(e){return c(c({},e),{},{switchingWallets:!1,walletCheckCompleted:n})}));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),text:"Switch Wallet"},html:u,icon:a||o.h});case 16:case"end":return e.stop()}}),e,null,[[6,12]])})));return function(t){return e.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=7100.1ae73fe5.chunk.js.map