/*! For license information please see main.b04ca8a66c8f4b2bacd8.js.LICENSE.txt */
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-template-rows: min-content 24px 18px;
  grid-column-gap: 12px;
  grid-template-areas:
    'accountphoto accounttype'
    'accountphoto accountname'
    'accountphoto accountaddress';
  align-items: center;
  width: 100%;
  justify-self: start;

  & ${o.BadgeViolet} {
    grid-area: accounttype;
  }
`,f=a.default.div`
  display: flex;
  grid-area: accountphoto;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  align-self: center;
  height: 40px;
  width: 40px;
  background-color: ${u.Colors.Blue[500]};
  border-radius: ${u.BorderRad.full};
  overflow: hidden;
`,g=a.default.h5`
  grid-area: accountname;
  max-width: 100%;
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: ${u.Colors.Black[900]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,h=({active:e,address:A})=>e&&e.rootAccount===A||e.controllerAccount===A?i.default.createElement(o.BadgeViolet,null,e.rootAccount===A?"Root account":"Controller account"):null,p=a.default(s.CopyComponent)`
  grid-area: accountaddress;
`},91381:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.OptionAccount=void 0;const r=n(t(2784)),i=t(88954),a=t(31604),o=t(88345),s=t(41469);A.OptionAccount=({option:e})=>{const A=o.useBalance(e.address);return r.default.createElement(r.default.Fragment,null,r.default.createElement(s.AccountInfo,{account:e}),r.default.createElement(i.BalanceInfoInRow,null,r.default.createElement(i.InfoTitle,null,"Transferable balance"),r.default.createElement(i.InfoValue,null,r.default.createElement(a.TokenValue,{value:A?.transferable}))))}},90938:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.OptionListAccount=void 0;const r=n(t(2784)),i=t(52019),a=t(91381);A.OptionListAccount=r.default.memo((({options:e,onChange:A})=>r.default.createElement(i.OptionsListComponent,null,e.map((e=>r.default.createElement(i.Option,{key:e.address,onClick:()=>A&&A(e)},r.default.createElement(a.OptionAccount,{option:e})))))))},67738:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(A,e,t);return r(A,e),A};Object.defineProperty(A,"__esModule",{value:!0}),A.SelectAccount=A.filterAccount=void 0;const a=i(t(2784)),o=t(52019),s=t(87795),u=t(42482),c=t(3307),l=t(85079),d=t(15838),f=t(91381),g=t(90938);A.filterAccount=e=>{const A="string"==typeof e?e:e?.address;return e?e=>e.address!==A:()=>!0},A.SelectAccount=a.default.memo((({onChange:e,filter:A,selected:t})=>{const{allAccounts:n}=u.useAccounts(),r=n.filter(A||(()=>!0)),[i,h]=a.useState(t),[p,m]=a.useState(""),y=a.useMemo((()=>d.filterByText(r,p)),[p,r]),I=s.useKeyring();return a.useEffect((()=>{0===y.length&&l.isValidAddress(p,I)&&(!i||i.address!==p)&&h(c.accountOrNamed(n,p,"Unsaved account"))}),[y,p,i]),a.default.createElement(o.Select,{selected:i,onChange:e,disabled:!1,renderSelected:e=>a.default.createElement(f.OptionAccount,{option:e}),placeholder:"Select account or paste account address",renderList:e=>a.default.createElement(g.OptionListAccount,{onChange:e,options:y}),onSearch:e=>m(e)})}))},64297:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.SelectedAccount=void 0;const r=n(t(2784)),i=t(55017),a=t(24895),o=t(88954),s=t(31604),u=t(88345),c=t(41469);A.SelectedAccount=({account:e})=>{const{transferable:A}=u.useBalance(e.address)||{};return r.default.createElement(o.LockedAccount,null,r.default.createElement(c.AccountInfo,{account:e}),r.default.createElement(o.BalanceInfoInRow,null,r.default.createElement(o.InfoTitle,null,"Transferable balance"),r.default.createElement(o.InfoValue,null,r.default.createElement(s.TokenValue,{value:A}))),r.default.createElement(i.ToggleButton,{className:"ui-toggle",disabled:!0},r.default.createElement(a.ArrowDownIcon,null)))}},15838:(e,A)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.filterByText=void 0,A.filterByText=function(e,A){return e.filter((e=>e.name?.toLocaleLowerCase().includes(A.toLocaleLowerCase())||e.address.includes(A)))}},11679:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||n(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),r(t(67738),A),r(t(64297),A)},89300:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.TransferButtonStyled=A.TransferButton=void 0;const r=n(t(2784)),i=n(t(52275)),a=t(86096),o=t(67312),s=t(12101),u=t(19221);A.TransferButton=function({from:e,to:A,disabled:t}){const{showModal:n}=u.useModal(),i=!e&&!A,a=i?"transfer":e&&!i?"send":"receive",s=!!t;return r.default.createElement(c,{size:"medium",square:!0,onClick:()=>n({modal:"TransferTokens",data:{from:e,to:A}}),disabled:s},r.default.createElement(o.PickedTransferIcon,{type:a}))},A.TransferButtonStyled=function(){const{showModal:e}=u.useModal();return r.default.createElement(l,{size:"small",square:!0,onClick:()=>e({modal:"TransferTokens",data:{}})},r.default.createElement(o.PickedTransferIcon,{type:"transfer"}))};const c=i.default(a.ButtonGhost)`
  svg {
    color: ${s.Colors.Black[900]};
  }
`,l=i.default(a.ButtonPrimary)`
  width: 32px;
  height: 32px;
  grid-area: balancetransfer;
  justify-self: end;
`},42482:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.useAccounts=void 0;const n=t(2784),r=t(6846);A.useAccounts=function(){return n.useContext(r.AccountsContext)}},88345:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.useBalance=A.toBalances=void 0;const r=n(t(62197)),i=t(1361),a=t(28443);function o(e){const{lockedBalance:A,availableBalance:t}=e;return{total:t.add(A),transferable:t,locked:A,recoverable:new r.default(0)}}A.toBalances=o,A.useBalance=e=>{const{api:A}=i.useApi(),t=a.useObservable(e?A?.derive.balances.all(e):void 0,[A,e]);return void 0===t?null:o(t)}},6908:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.useBalances=void 0;const n=t(24496),r=t(56276),i=t(1361),a=t(28443),o=t(42482),s=t(88345);A.useBalances=function(){const{hasAccounts:e,allAccounts:A}=o.useAccounts(),{isConnected:t,api:u}=i.useApi(),c=A.map((e=>e.address)),l=u?c.map((e=>u.derive.balances.all(e).pipe(r.map(s.toBalances)))):[],d=a.useObservable(n.combineLatest(l),[u,JSON.stringify(c)]);return e&&t&&d?d.reduce(((e,A,t)=>({[c[t]]:A,...e})),{}):{}}},40531:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.useTotalBalances=A.zeroBalance=void 0;const r=n(t(62197)),i=t(6908);A.zeroBalance=()=>({recoverable:new r.default(0),locked:new r.default(0),transferable:new r.default(0),total:new r.default(0)});const a=(e,A)=>({recoverable:e.recoverable.add(A.recoverable),locked:e.locked.add(A.locked),transferable:e.transferable.add(A.transferable),total:e.total.add(A.total)});A.useTotalBalances=function(){const e=i.useBalances();return[...Object.values(e)].reduce(a,A.zeroBalance())}},48592:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.useTransactionFee=void 0;const n=t(2784),r=t(28443),i=t(88345);A.useTransactionFee=function(e,A){const t=r.useObservable(A?.paymentInfo(e||""),[A,e]),a=i.useBalance(e);return n.useMemo((()=>a&&t?{transactionFee:t.partialFee,canAfford:a.transferable.gte(t.partialFee)}:void 0),[a,t])}},38611:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(A,e,t);return r(A,e),A},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.TransferFormModal=void 0;const o=a(t(62197)),s=i(t(2784)),u=a(t(52275)),c=t(86096),l=t(85534),d=t(67312),f=t(76488),g=t(88954),h=t(65639),p=t(69051),m=t(11679),y=t(88345);A.TransferFormModal=function({from:e,to:A,onClose:t,onAccept:n,title:r}){const[i,a]=s.useState(A),[u,B]=s.useState(e),[C,v]=h.useNumberInput(0),b=y.useBalance(u?.address),w=s.useCallback(m.filterAccount(i),[i]),Q=b?.transferable??new o.default(0),M=s.useCallback(m.filterAccount(u),[u]),D=new o.default(C).lte(new o.default(0)),S=new o.default(C).gt(Q||0),_=D||S||!i,k=!u;return s.default.createElement(f.Modal,{modalSize:"m",onClose:t},s.default.createElement(f.ModalHeader,{onClick:t,title:r,icon:s.default.createElement(d.PickedTransferIcon,{type:e?"send":A?"receive":"transfer"})}),s.default.createElement(f.ModalBody,null,s.default.createElement(g.Row,null,s.default.createElement(l.InputComponent,{required:!0,inputSize:"l",label:"From",id:"transfer-from-input",disabled:!!e,borderless:!!e},e?s.default.createElement(m.SelectedAccount,{account:e}):s.default.createElement(m.SelectAccount,{filter:w,onChange:B}))),s.default.createElement(g.TransactionAmount,null,s.default.createElement(l.InputComponent,{label:"Number of tokens",id:"amount-input",disabled:k,required:!0,inputWidth:"s",units:"JOY"},s.default.createElement(l.InputNumber,{id:"amount-input",value:p.formatTokenValue(new o.default(C)),onChange:e=>v(e.target.value),disabled:k,placeholder:"0"})),s.default.createElement(I,null,s.default.createElement(E,{size:"small",onClick:()=>v(Q.div(new o.default(2)).toString()),disabled:k},"Use half"),s.default.createElement(E,{size:"small",onClick:()=>v(Q.toString()),disabled:k},"Use max"))),s.default.createElement(g.Row,null,s.default.createElement(l.InputComponent,{required:!0,inputSize:"l",label:"Destination account",id:"transfer-to-input",disabled:!!A,borderless:!!A},A?s.default.createElement(m.SelectedAccount,{account:A}):s.default.createElement(m.SelectAccount,{filter:M,onChange:a})))),s.default.createElement(f.ModalFooter,null,s.default.createElement(c.ButtonPrimary,{size:"medium",onClick:()=>{C&&i&&u&&n(new o.default(C),u,i)},disabled:_},"Transfer tokens")))};const I=u.default.div`
  display: inline-grid;
  grid-auto-flow: column;
  grid-column-gap: 8px;
  width: fit-content;
  height: 46px;
  align-items: center;
`,E=u.default(c.ButtonGhost)`
  height: 26px;
  padding: 4px 6px;
  font-size: 10px;
  line-height: 16px;
  text-transform: uppercase;
`},62291:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(A,e,t);return r(A,e),A},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.TransferModal=void 0;const o=a(t(62197)),s=i(t(2784)),u=t(15912),c=t(31604),l=t(19221),d=t(38611),f=t(90997),g=t(7283);A.TransferModal=function(){const{hideModal:e,modalData:A}=l.useModal(),{from:t,to:n}=A,[r,i]=s.useState("PREPARE"),[a,h]=s.useState(new o.default(0)),[p,m]=s.useState(new o.default(0)),[y,I]=s.useState(t),[E,B]=s.useState(n),C=t||n?t?"Send tokens":"Receive tokens":"Transfer tokens";return"PREPARE"!==r&&E&&y?"AUTHORIZE"===r?s.default.createElement(f.TransferSignModal,{onClose:e,from:y,amount:a,to:E,onDone:(e,A,t)=>{i(e?"SUCCESS":"ERROR"),m(t)}}):"SUCCESS"===r?s.default.createElement(g.TransferSuccessModal,{onClose:e,from:y,to:E,amount:a,fee:p}):s.default.createElement(u.FailureModal,{onClose:e},"You haven’t transferred ",s.default.createElement(c.TokenValue,{value:a})," stake from “",y.name,"” account to “",E.name,"” destination."):s.default.createElement(d.TransferFormModal,{onClose:e,from:y,to:E,onAccept:(e,A,t)=>{h(e),B(t),I(A),i("AUTHORIZE")},title:C})}},90997:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(A,e,t);return r(A,e),A};Object.defineProperty(A,"__esModule",{value:!0}),A.TransferSignModal=void 0;const a=i(t(2784)),o=t(86096),s=t(76746),u=t(24895),c=t(76488),l=t(88954),d=t(22807),f=t(31604),g=t(1361),h=t(28711),p=t(41469),m=t(88345);A.TransferSignModal=function({onClose:e,from:A,amount:t,to:n,onDone:r}){const i=n.address,y=A.address,I=m.useBalance(y),E=m.useBalance(i),{api:B}=g.useApi(),C=a.useMemo((()=>B?.tx?.balances?.transfer(i,t)),[i,t]),{paymentInfo:v,send:b,status:w}=h.useSignAndSendTransaction({transaction:C,signer:y,onDone:r});return a.default.createElement(d.TransactionModal,{status:w,onClose:e},a.default.createElement(c.ModalBody,null,a.default.createElement(c.SignTransferContainer,null,a.default.createElement(l.Row,null,a.default.createElement(f.TextMedium,{margin:"xl"},"You are transferring ",a.default.createElement(f.TokenValue,{value:t})," stake from “",A.name,"” account to “",n.name,"”"," ","destination."),a.default.createElement(l.LockedAccount,null,a.default.createElement(p.AccountInfo,{account:A}),a.default.createElement(l.BalanceInfoInRow,null,a.default.createElement(l.InfoTitle,null,"Transferable balance"),a.default.createElement(l.InfoValue,null,a.default.createElement(f.TokenValue,{value:I?.transferable}))))),a.default.createElement(l.TransactionAmountInfo,null,a.default.createElement(u.ArrowDownExpandedIcon,null),a.default.createElement(l.TransactionAmountInfoText,null,"Transferring ",a.default.createElement(f.TokenValue,{value:t}))),a.default.createElement(l.Row,null,a.default.createElement(l.LockedAccount,null,a.default.createElement(p.AccountInfo,{account:n}),a.default.createElement(l.BalanceInfoInRow,null,a.default.createElement(l.InfoTitle,null,"Transferable balance"),a.default.createElement(l.InfoValue,null,a.default.createElement(f.TokenValue,{value:E?.transferable}))))))),a.default.createElement(c.ModalFooter,null,a.default.createElement(l.TransactionInfo,null,a.default.createElement(l.BalanceInfoNarrow,null,a.default.createElement(l.InfoTitle,null,"Amount:"),a.default.createElement(l.InfoValue,null,a.default.createElement(f.TokenValue,{value:t}))),a.default.createElement(l.BalanceInfoNarrow,null,a.default.createElement(l.InfoTitle,null,"Transaction fee:"),a.default.createElement(l.InfoValue,null,a.default.createElement(f.TokenValue,{value:v?.partialFee.toBn()})),a.default.createElement(s.Help,{helperText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora mollitia necessitatibus, eos recusandae obcaecati facilis sed maiores. Impedit iusto expedita natus perspiciatis, perferendis totam commodi ad, illo, veritatis omnis beatae.Facilis natus recusandae, magni saepe hic veniam aliquid tempore quia assumenda voluptatum reprehenderit. Officiis provident nam corrupti, incidunt, repudiandae accusantium porro libero ipsam illo quae ratione. Beatae itaque quo quidem.",absolute:!0}))),a.default.createElement(o.ButtonPrimary,{size:"medium",onClick:b,disabled:"READY"!==w},"Sign transaction and Transfer")))}},7283:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.TransferSuccessModal=void 0;const r=n(t(2784)),i=t(24895),a=t(76488),o=t(88954),s=t(31604),u=t(41469),c=t(88345);A.TransferSuccessModal=function({onClose:e,from:A,to:t,amount:n,fee:l}){const d=c.useBalance(A.address),f=c.useBalance(t.address);if(!d||!f)return r.default.createElement(r.default.Fragment,null);const g=d.transferable,h=g.add(n).add(l),p=f.transferable,m=p.sub(n);return r.default.createElement(a.Modal,{modalSize:"m",modalHeight:"s",onClose:e},r.default.createElement(a.ModalHeader,{onClick:e,title:"Success",icon:r.default.createElement(i.SuccessIcon,null)}),r.default.createElement(a.SuccessModalBody,null,r.default.createElement(s.TextMedium,{margin:"l"},"You have just successfully transferred balance from"),r.default.createElement(o.LockedAccount,null,r.default.createElement(u.AccountInfo,{account:A}),r.default.createElement(o.BalanceInfo,null,r.default.createElement(o.InfoTitle,null,"Transferable balance before:"),r.default.createElement(o.InfoValue,null,r.default.createElement(s.TokenValue,{value:h})),r.default.createElement(o.InfoTitle,null,"Transferable balance after:"),r.default.createElement(o.InfoValue,null,r.default.createElement(s.TokenValue,{value:g})))),r.default.createElement(o.TransactionAmountInfo,null,r.default.createElement(i.ArrowDownExpandedIcon,null),r.default.createElement(o.TransactionAmountInfoText,null,"Transferred ",r.default.createElement(s.TokenValue,{value:n}))),r.default.createElement(o.LockedAccount,null,r.default.createElement(u.AccountInfo,{account:t}),r.default.createElement(o.BalanceInfo,null,r.default.createElement(o.InfoTitle,null,"Transferable balance before:"),r.default.createElement(o.InfoValue,null,r.default.createElement(s.TokenValue,{value:m})),r.default.createElement(o.InfoTitle,null,"Transferable balance after:"),r.default.createElement(o.InfoValue,null,r.default.createElement(s.TokenValue,{value:p}))))))}},10055:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||n(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),r(t(62291),A),r(t(28298),A)},28298:(e,A)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0})},53892:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.BalanceComparator=void 0;const r=n(t(62197)),i=t(19709);A.BalanceComparator=(e,A,t)=>(n,a)=>{const o=e[n.address]?.[A]||new r.default(0),s=e[a.address]?.[A]||new r.default(0);return i.applyOrder(o.cmp(s),t)}},3307:(e,A)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.accountOrNamed=void 0,A.accountOrNamed=(e,A,t)=>e.find((e=>e.address===A))??{address:A,name:t}},86325:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.filterAccounts=void 0;const r=n(t(62197));A.filterAccounts=(e,A,t)=>A?e:e.filter((({address:e})=>t[e]&&t[e].total.gt(new r.default(0))))},85079:(e,A)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.isValidAddress=void 0,A.isValidAddress=function(e,A){try{A.encodeAddress(A.decodeAddress(e))}catch(e){return!1}return!0}},89905:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.setOrder=A.sortAccounts=void 0;const n=t(19709),r=t(53892);A.sortAccounts=function(e,A,t,i=!1){return"name"===t?e.sort(n.Comparator(i,t).string):e.sort(r.BalanceComparator(A,t,i))},A.setOrder=function(e,A,t,n,r){e===A?r(!n):(r("name"!==e),t(e))}},6846:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.AccountsContext=void 0;const n=t(2784);A.AccountsContext=n.createContext({hasAccounts:!1,allAccounts:[]})},32415:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(A,e,t);return r(A,e),A};Object.defineProperty(A,"__esModule",{value:!0}),A.AccountsContextProvider=void 0;const a=t(2028),o=i(t(2784)),s=t(87795),u=t(28443),c=t(6846);A.AccountsContextProvider=e=>{const A=s.useKeyring(),[t,n]=o.useState(!1),[r,i]=o.useState(!1);var l,d;o.useEffect((l=()=>n(!0),d=()=>i(!0),()=>{let e=0;const A=setInterval((()=>{Object.keys(window.injectedWeb3).length?(clearInterval(A),l()):(e+=20,e>=1e3&&(clearInterval(A),d()))}),20);return()=>clearInterval(A)}),[]),o.useEffect((()=>{t&&(async e=>{await a.web3Enable("Pioneer");const A=(await a.web3Accounts()).map((({address:e,meta:A})=>({address:e,meta:{...A,name:`${A.name} (${A.source})`}})));(function(e){try{return!!e.keyring}catch{return!1}})(e)||e.loadAll({isDevelopment:!0},A)})(A).catch(console.error)}),[t]);const f=u.useObservable(A.accounts.subject.asObservable(),[A]),g=[];f&&g.push(...Object.values(f).map((e=>({address:e.json.address,name:e.json.meta.name}))));const h={allAccounts:g,hasAccounts:0!==g.length};return r&&(h.error="EXTENSION"),o.default.createElement(c.AccountsContext.Provider,{value:h},e.children)}},96646:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.App=void 0;const r=n(t(2784)),i=t(76410),a=t(27544),o=t(11667),s=t(2040),u=t(17554),c=t(60740),l=t(89797),d=t(45187),f=t(41152),g=t(83269),h=t(10132),p=t(9818),m=t(26837),y=t(50695);A.App=()=>r.default.createElement(y.Providers,null,r.default.createElement(o.Page,null,r.default.createElement(u.SideBar,null),r.default.createElement(i.Switch,null,r.default.createElement(i.Route,{exact:!0,path:"/profile",component:l.MyAccounts}),r.default.createElement(i.Route,{exact:!0,path:"/profile/memberships",component:d.MyMemberships}),r.default.createElement(i.Route,{exact:!0,path:"/working-groups",component:m.WorkingGroupsOpenings}),r.default.createElement(i.Route,{exact:!0,path:"/working-groups/working-groups",component:p.WorkingGroups}),r.default.createElement(i.Route,{exact:!0,path:"/working-groups/my-applications",component:f.MyApplications}),r.default.createElement(i.Route,{exact:!0,path:"/working-groups/my-roles",component:g.MyRoles}),r.default.createElement(i.Route,{exact:!0,path:"/working-groups/grouppreview",component:h.WorkingGroup}),r.default.createElement(i.Redirect,{exact:!0,from:"/",to:"/profile"}))),r.default.createElement(a.ConnectionStatus,null),r.default.createElement(s.ExtensionWarning,null),r.default.createElement(c.GlobalModals,null))},60740:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.GlobalModals=void 0;const r=n(t(2784)),i=t(10055),a=t(19221),o=t(8182),s=t(50291),u=t(26885);A.GlobalModals=()=>{const{modal:e}=a.useModal();switch(e){case"Member":return r.default.createElement(o.MemberProfile,null);case"BuyMembership":return r.default.createElement(s.BuyMembershipModal,null);case"TransferInvites":return r.default.createElement(u.TransferInviteModal,null);case"TransferTokens":return r.default.createElement(i.TransferModal,null);default:return null}}},50695:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Providers=void 0;const r=t(73059),i=n(t(2784)),a=t(76410),o=t(32415),s=t(26129),u=t(97136),c=t(71458),l=t(27813),d=t(61999),f=t(20184),g=t(52905),h=t(86693),p=g.makeServer(),m=new r.ApolloClient({uri:"http://localhost:8081/graphql",cache:new r.InMemoryCache});A.Providers=e=>i.default.createElement(u.KeyringContextProvider,null,i.default.createElement(o.AccountsContextProvider,null,i.default.createElement(s.ApiContextProvider,null,i.default.createElement(l.ServerContextProvider,{value:p},i.default.createElement(r.ApolloProvider,{client:m},i.default.createElement(d.MembershipContextProvider,null,i.default.createElement(a.HashRouter,null,i.default.createElement(c.ModalContextProvider,null,i.default.createElement(f.Mocks,null),i.default.createElement(h.GlobalStyle,null),e.children))))))))},86810:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.PageContainer=A.AppPage=void 0;const r=n(t(2784)),i=n(t(52275)),a=t(12510),o=t(31294);A.AppPage=({children:e,crumbs:t})=>r.default.createElement(a.PageContent,null,r.default.createElement(o.Breadcrumbs,{crumbs:t}),r.default.createElement(A.PageContainer,null,e)),A.PageContainer=i.default.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-row-gap: 24px;
  width: 100%;
`},2040:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(A,e,t);return r(A,e),A};Object.defineProperty(A,"__esModule",{value:!0}),A.ExtensionWarning=void 0;const a=i(t(2784)),o=t(42482),s=t(46020);A.ExtensionWarning=function(){const{error:e}=o.useAccounts(),[A,t]=a.useState(!1);return a.useEffect((()=>{"EXTENSION"===e&&t(!0)}),[e]),a.useEffect((()=>{if(!A)return;const e=setTimeout((()=>t(!1)),1e4);return()=>clearTimeout(e)}),[A]),A?a.default.createElement(s.SideNotification,{onClick:()=>t(!1),title:"Extension unavailable",message:"You need a Polkadot.js extension to use this site.",isError:!0}):null}},17554:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.SideBar=void 0;const r=n(t(2784)),i=n(t(52275)),a=t(35442),o=t(97426),s=t(20389),u=t(20828),c=t(84432),l=t(36085),d=t(47105),f=t(55805);A.SideBar=()=>r.default.createElement(u.Navigation,null,r.default.createElement(c.NavigationHeader,null,r.default.createElement(s.LogoLink,null)),r.default.createElement(g,null,r.default.createElement(h,null,r.default.createElement(l.NavigationLink,{to:"/profile"},r.default.createElement(a.MyProfileIcon,null),"My profile")),r.default.createElement(h,null,r.default.createElement(l.NavigationLink,{to:"/working-groups"},r.default.createElement(o.WorkingGroupsIcon,null),"Working Groups"))),r.default.createElement(f.ProfileComponent,null),r.default.createElement(d.Version,null));const g=i.default.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-area: barlinks;
  margin: 0;
  padding: 0;
  list-style: none;
`,h=i.default.li`
  display: flex;
  flex-direction: column;
  flex-basis: 48px;
  flex-shrink: 0;
  width: 100%;
`},39716:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.usePageTabs=void 0;const n=t(2784),r=t(76410);A.usePageTabs=e=>{const A=r.useHistory();return n.useMemo((()=>e.map((([e,t])=>({title:e,active:t===A.location.pathname,onClick:()=>A.push(t)})))),[JSON.stringify(e)])}},81495:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||n(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),r(t(96646),A)},89797:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.MyAccounts=void 0;const r=n(t(2784)),i=t(40531),a=t(10686),o=t(209),s=t(62523),u=t(86810),c=t(59101),l=t(83446);A.MyAccounts=function(){const{total:e,transferable:A,locked:t,recoverable:n}=i.useTotalBalances();return r.default.createElement(u.AppPage,{crumbs:[{href:"#",text:"My Profile"},{href:"#",text:"My Accounts"}]},r.default.createElement(a.PageHeader,null,r.default.createElement(o.PageTitle,null,"My Profile"),r.default.createElement(l.MyProfileTabs,null)),r.default.createElement(s.Statistics,null,r.default.createElement(s.TokenValueStat,{title:"Total balance",helperText:"Lorem ipsum...",value:e}),r.default.createElement(s.TokenValueStat,{title:"Total transferable balance",helperText:"Lorem ipsum...",value:A}),r.default.createElement(s.TokenValueStat,{title:"Total locked balance",helperText:"Lorem ipsum...",value:t}),r.default.createElement(s.TokenValueStat,{title:"Total recoverable",helperText:"Lorem ipsum...",value:n})),r.default.createElement(c.Accounts,null))}},45187:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.MyMemberships=void 0;const r=n(t(2784)),i=t(10686),a=t(209),o=t(86810),s=t(86001),u=t(83446);A.MyMemberships=()=>r.default.createElement(o.AppPage,{crumbs:[{href:"#",text:"My Profile"},{href:"#",text:"My Memberships"}]},r.default.createElement(i.PageHeader,null,r.default.createElement(a.PageTitle,null,"My Profile"),r.default.createElement(u.MyProfileTabs,null)),r.default.createElement(s.Memberships,null))},59101:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(A,e,t);return r(A,e),A},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Accounts=void 0;const o=a(t(62197)),s=i(t(2784)),u=a(t(52275)),c=t(41469),l=t(89300),d=t(42482),f=t(88345),g=t(6908),h=t(86325),p=t(89905),m=t(89451),y=t(69490),I=t(31604),E=t(12101);A.Accounts=function(){const{allAccounts:e,hasAccounts:A}=d.useAccounts(),[t,n]=s.useState(!0),r=g.useBalances(),[i,a]=s.useState("name"),[o,u]=s.useState(!1),c=s.useMemo((()=>h.filterAccounts(e,t,r)),[e,t,A]),l=s.useMemo((()=>p.sortAccounts(c,r,i,o)),[c,r,i,o]);if(!A)return s.default.createElement(S,null,"Loading accounts...");const f=({children:e,sortKey:A})=>{return s.default.createElement(b,{onClick:(t=A,()=>p.setOrder(t,i,a,o,u))},s.default.createElement(m.HeaderText,null,e,i===A&&(o?s.default.createElement(m.SortIconDown,null):s.default.createElement(m.SortIconUp,null))));var t},I=[{title:"All accounts",onClick:()=>!t&&n(!0),active:t},{title:"Transferable balance",onClick:()=>t&&n(!1),active:!t}];return s.default.createElement(s.default.Fragment,null,s.default.createElement(y.Tabs,{tabsSize:"xs",tabs:I}),s.default.createElement(C,null,s.default.createElement(v,null,s.default.createElement(f,{sortKey:"name"},"Account"),s.default.createElement(f,{sortKey:"total"},"Total balance"),s.default.createElement(f,{sortKey:"locked"},"Locked balance"),s.default.createElement(f,{sortKey:"recoverable"},"Recoverable balance"),s.default.createElement(f,{sortKey:"transferable"},"Transferable balance")),s.default.createElement(w,null,l.map((e=>s.default.createElement(B,{key:e.address,account:e}))))))};const B=({account:e})=>{const A=e.address,t=f.useBalance(A),n=!t?.transferable||!t.transferable.gt(new o.default(0));return s.default.createElement(Q,{key:A},s.default.createElement(c.AccountInfo,{account:e}),s.default.createElement(M,null,s.default.createElement(I.TokenValue,{value:t?.total})),s.default.createElement(M,null,s.default.createElement(I.TokenValue,{value:t?.locked})),s.default.createElement(M,null,s.default.createElement(I.TokenValue,{value:t?.recoverable})),s.default.createElement(M,null,s.default.createElement(I.TokenValue,{value:t?.transferable})),s.default.createElement(D,null,s.default.createElement(l.TransferButton,{to:e}),s.default.createElement(l.TransferButton,{from:e,disabled:n})))},C=u.default.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 16px auto;
  grid-template-areas:
    'accountstablenav'
    'accountslist';
  grid-row-gap: 5px;
  width: 100%;
`,v=u.default.div`
  display: grid;
  grid-area: accountstablenav;
  grid-template-rows: 1fr;
  grid-template-columns: 276px repeat(4, 128px) 136px;
  justify-content: space-between;
  width: 100%;
  padding-left: 16px;
`,b=u.default.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  justify-self: end;
  width: fit-content;
  font-size: 10px;
  line-height: 16px;
  font-weight: 700;
  color: ${E.Colors.Black[400]};
  text-transform: uppercase;
  text-align: right;
  user-select: none;
  cursor: pointer;

  &:first-child {
    text-align: left;
    justify-self: start;
  }
`,w=u.default.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`,Q=u.default.li`
  display: grid;
  grid-template-columns: 276px repeat(4, 128px) 136px;
  grid-template-rows: 1fr;
  justify-content: space-between;
  justify-items: end;
  align-items: center;
  width: 100%;
  height: ${E.Sizes.accountHeight};
  padding: 16px 0 16px 14px;
  border: 1px solid ${E.Colors.Black[100]};
  border-radius: ${E.BorderRad.s};

  & + & {
    margin-top: -1px;
  }
`,M=u.default.p``,D=u.default.div`
  display: grid;
  grid-template-columns: repeat(3, 40px);
  grid-template-rows: 40px;
  grid-column-gap: 8px;
`,S=u.default.div`
  font-size: 2em;
`},86001:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Memberships=void 0;const r=n(t(2784)),i=n(t(52275)),a=t(86096),o=t(31604),s=t(17129),u=t(3363),c=t(26359),l=t(54065);A.Memberships=function(){const{count:e,isLoading:A,members:t,active:n}=l.useMyMemberships(),i=!!e;if(A)return r.default.createElement(m,null,"Loading...");if(!i)return r.default.createElement(f,null,r.default.createElement(g,null,r.default.createElement("h3",null,"You have no active membership"),r.default.createElement(o.TextMedium,null,"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.")),r.default.createElement(d,null,"Create a membership"));const a=t.filter((e=>!n||n.handle!==e.handle));return r.default.createElement(h,null,r.default.createElement(p,null,r.default.createElement(u.InviteMemberButton,{size:"medium"},"Invite a member"),r.default.createElement(s.AddMembershipButton,{size:"medium"},"Add Membership")),!!n&&r.default.createElement(c.MembersSection,{title:"Active membership",members:[n]}),!!a.length&&r.default.createElement(c.MembersSection,{title:"Other memberships",members:a}))};const d=i.default(s.AddMembershipButton)`
  grid-area: none;
  margin-top: 24px;
`,f=i.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 420px;
  margin: 124px auto 0;
`,g=i.default.div`
  width: 100%;

  ${o.TextMedium} {
    margin-top: 16px;
  }
`,h=i.default.div`
  display: grid;
  position: relative;
  grid-row-gap: 26px;
  width: 100%;
  padding-top: 12px;
`,p=i.default(a.ButtonsGroup)`
  position: absolute;
  right: 0;
  top: 0;
`,m=i.default.div`
  font-size: 2em;
`},83446:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.MyProfileTabs=void 0;const r=n(t(2784)),i=t(69490),a=t(39716);A.MyProfileTabs=()=>{const e=a.usePageTabs([["My Accounts","/profile"],["My Accounts","/profile/memberships"]]);return r.default.createElement(i.Tabs,{tabs:e})}},41152:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(A,e,t);return r(A,e),A};Object.defineProperty(A,"__esModule",{value:!0}),A.MyApplications=void 0;const a=i(t(2784)),o=t(10686),s=t(209),u=t(31604),c=t(86810),l=t(96875);A.MyApplications=()=>{const e=a.useMemo((()=>[{href:"#",text:"Working Groups"},{href:"#",text:"My Applications"}]),[]);return a.default.createElement(c.AppPage,{crumbs:e},a.default.createElement(o.PageHeader,null,a.default.createElement(s.PageTitle,null,"Working Groups"),a.default.createElement(l.WorkingGroupsTabs,null)),a.default.createElement(u.TextBig,null,"My Applications"))}},83269:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.MyRoles=void 0;const r=n(t(2784)),i=t(10686),a=t(209),o=t(31604),s=t(86810),u=t(96875);A.MyRoles=()=>r.default.createElement(s.AppPage,{crumbs:[{href:"#",text:"Working Groups"},{href:"#",text:"My Roles"}]},r.default.createElement(i.PageHeader,null,r.default.createElement(a.PageTitle,null,"Working Groups"),r.default.createElement(u.WorkingGroupsTabs,null)),r.default.createElement(o.TextBig,null,"My roles"))},10132:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.OpeningsCategory=A.OpeningsCategories=A.WorkingGroup=void 0;const r=n(t(2784)),i=n(t(52275)),a=t(12510),o=t(10686),s=t(209),u=t(39408),c=t(62523),l=t(69490),d=t(31604),f=t(72367),g=t(14073),h=t(86810);A.WorkingGroup=function(){const e=g.useOpenings();return r.default.createElement(h.AppPage,{crumbs:[{href:"#",text:"Working Groups"},{href:"#",text:"Working Groups"},{href:"#",text:"Storage"}]},r.default.createElement(o.PageHeader,null,r.default.createElement(u.PreviousPage,null,r.default.createElement(s.PageTitle,null,"Storage")),r.default.createElement(l.Tabs,{tabs:[{title:"Openings",active:!0,onClick:()=>{}},{title:"About",active:!1,onClick:()=>{}},{title:"History",active:!1,onClick:()=>{}}]})),r.default.createElement(a.ContentWithSidepanel,null,r.default.createElement(a.MainPanel,null,r.default.createElement(c.Statistics,null,r.default.createElement(c.TokenValueStat,{title:"Current budget",helperText:"Lorem ipsum...",value:150200}),r.default.createElement(c.TokenValueStat,{title:"Working Group dept",helperText:"Lorem ipsum...",value:-200}),r.default.createElement(c.TokenValueStat,{title:"Avg stake",helperText:"Lorem ipsum...",value:1e5})),r.default.createElement(A.OpeningsCategories,null,r.default.createElement(A.OpeningsCategory,null,r.default.createElement(d.Label,null,"Upcoming openings"),r.default.createElement(f.OpeningsList,{openings:e})),r.default.createElement(A.OpeningsCategory,null,r.default.createElement(d.Label,null,"Openings"),r.default.createElement(f.OpeningsList,{openings:e})))),r.default.createElement(a.SidePanel,null,r.default.createElement(d.Label,null,"Leader"),r.default.createElement(d.Label,null,"Workers"))))},A.OpeningsCategories=i.default.div`
  display: grid;
  grid-row-gap: 24px;
  width: 100%;
`,A.OpeningsCategory=i.default.div`
  display: grid;
  grid-row-gap: 16px;
  width: 100%;
`},9818:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(A,e,t);return r(A,e),A};Object.defineProperty(A,"__esModule",{value:!0}),A.WorkingGroups=void 0;const a=i(t(2784)),o=t(10686),s=t(209),u=t(18414),c=t(17595),l=t(86810),d=t(96875);A.WorkingGroups=()=>{const{isLoading:e,groups:A}=c.useWorkingGroups(),t=a.useMemo((()=>[{href:"#",text:"Working Groups"},{href:"#",text:"Working Groups"}]),[]);return e?null:a.default.createElement(l.AppPage,{crumbs:t},a.default.createElement(o.PageHeader,null,a.default.createElement(s.PageTitle,null,"Working Groups"),a.default.createElement(d.WorkingGroupsTabs,null)),a.default.createElement(u.WorkingGroupsList,{groups:A}))}},26837:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(A,e,t);return r(A,e),A},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.WorkingGroupsOpenings=void 0;const o=a(t(62197)),s=i(t(2784)),u=t(40531),c=t(79386),l=t(12510),d=t(10686),f=t(209),g=t(62523),h=t(69490),p=t(31604),m=t(41090),y=t(1054),I=t(54065),E=t(72367),B=t(14073),C=t(86810),v=t(96875);A.WorkingGroupsOpenings=()=>{const e=B.useOpenings(),A=e.slice(0,1),t=m.useActivities(),{active:n}=I.useMyMemberships(),{locked:r}=u.useTotalBalances(),i={day:new o.default(200),month:new o.default(102e3)},a=s.useMemo((()=>[{href:"#",text:"Working Groups"},{href:"#",text:"Openings"}]),[]),[b,w]=s.useState("OPENINGS"),Q=[{title:"Openings",active:"OPENINGS"===b,onClick:()=>w("OPENINGS"),count:e.length},{title:"Upcoming openings",active:"UPCOMING"===b,onClick:()=>w("UPCOMING"),count:A.length}];return s.default.createElement(C.AppPage,{crumbs:a},s.default.createElement(d.PageHeader,null,s.default.createElement(f.PageTitle,null,"Working Groups"),s.default.createElement(v.WorkingGroupsTabs,null)),s.default.createElement(l.ContentWithSidepanel,null,s.default.createElement(l.MainPanel,null,s.default.createElement(g.Statistics,null,s.default.createElement(g.StatisticItem,{title:"My Roles"},n?s.default.createElement(y.MemberRoles,{member:n,size:"l",max:5}):s.default.createElement(p.TextMedium,null,"Select membership")),s.default.createElement(g.TokenValueStat,{title:"Currently staking",value:r}),s.default.createElement(g.MultiTokenValueStat,{title:"Earned in past",values:[{label:"24 hours",value:i.day},{label:"month",value:i.month}]})),s.default.createElement(h.Tabs,{tabsSize:"xs",tabs:Q}),s.default.createElement(E.OpeningsList,{openings:"OPENINGS"===b?e:A})),s.default.createElement(l.SidePanel,null,s.default.createElement(p.Label,null,"Working group activities"),s.default.createElement(c.Activities,{activities:t}))))}},96875:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.WorkingGroupsTabs=void 0;const r=n(t(2784)),i=t(69490),a=t(39716);A.WorkingGroupsTabs=()=>{const e=a.usePageTabs([["Openings","/working-groups"],["Working Groups","/working-groups/working-groups"],["My Applications","/working-groups/my-applications"],["My Roles","/working-groups/my-roles"]]);return r.default.createElement(i.Tabs,{tabs:e})}},86693:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.GlobalStyle=void 0;const r=t(52275),i=t(12101),a=n(t(48874)),o=n(t(36749)),s=n(t(28791)),u=n(t(82382));A.GlobalStyle=r.createGlobalStyle`
  @font-face {
    font-family: "Inter";
    src: url(${o.default}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Inter";
    src: url(${a.default}) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Grotesk";
    src: url(${u.default}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Grotesk";
    src: url(${s.default}) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
  *::selection, *:before::selection, *:after::selection {
    color: ${i.Colors.Blue[50]};
    background-color: ${i.Colors.Blue[500]};
  }

  body, html {
    margin: 0;
    width: 100%;
    height: 100%;
    background-color: ${i.Colors.White};
    font-family: ${i.Fonts.Grotesk};
    font-size: 14px;
    color: ${i.Colors.Black[900]};
    overscroll-behavior-y: none;
    overflow: hidden;
  }
  body > #app {
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  button {
    font-family: ${i.Fonts.Grotesk};
    font-size: 1rem;
    border: none;
    outline: none;
    background-color: transparent;
    padding: 0;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  p {
    margin: 0;
    padding: 0;
    font-family: ${i.Fonts.Inter};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${i.Fonts.Grotesk};
    margin: 0;
    padding: 0;
    font-weight: 700;
  }

  h1 {
    font-size: 40px;
    line-height: 48px
  }
  h2 {
    font-size: 32px;
    line-height: 40px
  }
  h3 {
    font-size: 24px;
    line-height: 32px
  }
  h4 {
    font-size: 20px;
    line-height: 28px
  }
  h5 {
    font-size: 16px;
    line-height: 24px
  }
  h6 {
    font-size: 14px;
    line-height: 20px
  }
  a {
    text-decoration: none;
    font-family: ${i.Fonts.Grotesk};
  }
  input {
    font-family: ${i.Fonts.Grotesk};

    &::placeholder {
      font-family: ${i.Fonts.Inter};
    }
  }

  h1, h2, h3, h4, h5, h6, p, span, ul, ol, li, a, div, i, button, input {
    &::selection {
      color: ${i.Colors.Blue[50]};
      background-color: ${i.Colors.Blue[500]};
      -webkit-text-stroke-color: ${i.Colors.Blue[50]};
    }
  }
`},28068:(e,A)=>{"use strict";var t,n,r,i,a,o,s;Object.defineProperty(A,"__esModule",{value:!0}),A.ApplicationFormQuestionType=A.WorkingGroupOpeningType=A.Network=A.MembershipSystemOrderByInput=A.MembershipOrderByInput=A.MembershipEntryMethod=A.BlockOrderByInput=void 0,(s=A.BlockOrderByInput||(A.BlockOrderByInput={})).CreatedAtAsc="createdAt_ASC",s.CreatedAtDesc="createdAt_DESC",s.UpdatedAtAsc="updatedAt_ASC",s.UpdatedAtDesc="updatedAt_DESC",s.DeletedAtAsc="deletedAt_ASC",s.DeletedAtDesc="deletedAt_DESC",s.BlockAsc="block_ASC",s.BlockDesc="block_DESC",s.ExecutedAtAsc="executedAt_ASC",s.ExecutedAtDesc="executedAt_DESC",s.NetworkAsc="network_ASC",s.NetworkDesc="network_DESC",(o=A.MembershipEntryMethod||(A.MembershipEntryMethod={})).Paid="PAID",o.Invited="INVITED",o.Genesis="GENESIS",(a=A.MembershipOrderByInput||(A.MembershipOrderByInput={})).CreatedAtAsc="createdAt_ASC",a.CreatedAtDesc="createdAt_DESC",a.UpdatedAtAsc="updatedAt_ASC",a.UpdatedAtDesc="updatedAt_DESC",a.DeletedAtAsc="deletedAt_ASC",a.DeletedAtDesc="deletedAt_DESC",a.HandleAsc="handle_ASC",a.HandleDesc="handle_DESC",a.NameAsc="name_ASC",a.NameDesc="name_DESC",a.AvatarUriAsc="avatarUri_ASC",a.AvatarUriDesc="avatarUri_DESC",a.AboutAsc="about_ASC",a.AboutDesc="about_DESC",a.ControllerAccountAsc="controllerAccount_ASC",a.ControllerAccountDesc="controllerAccount_DESC",a.RootAccountAsc="rootAccount_ASC",a.RootAccountDesc="rootAccount_DESC",a.RegisteredAtBlockIdAsc="registeredAtBlockId_ASC",a.RegisteredAtBlockIdDesc="registeredAtBlockId_DESC",a.RegisteredAtTimeAsc="registeredAtTime_ASC",a.RegisteredAtTimeDesc="registeredAtTime_DESC",a.EntryAsc="entry_ASC",a.EntryDesc="entry_DESC",a.IsVerifiedAsc="isVerified_ASC",a.IsVerifiedDesc="isVerified_DESC",a.InviteCountAsc="inviteCount_ASC",a.InviteCountDesc="inviteCount_DESC",a.InvitedByIdAsc="invitedById_ASC",a.InvitedByIdDesc="invitedById_DESC",a.ReferredByIdAsc="referredById_ASC",a.ReferredByIdDesc="referredById_DESC",(i=A.MembershipSystemOrderByInput||(A.MembershipSystemOrderByInput={})).CreatedAtAsc="createdAt_ASC",i.CreatedAtDesc="createdAt_DESC",i.UpdatedAtAsc="updatedAt_ASC",i.UpdatedAtDesc="updatedAt_DESC",i.DeletedAtAsc="deletedAt_ASC",i.DeletedAtDesc="deletedAt_DESC",i.DefaultInviteCountAsc="defaultInviteCount_ASC",i.DefaultInviteCountDesc="defaultInviteCount_DESC",i.MembershipPriceAsc="membershipPrice_ASC",i.MembershipPriceDesc="membershipPrice_DESC",i.ReferralCutAsc="referralCut_ASC",i.ReferralCutDesc="referralCut_DESC",i.InvitedInitialBalanceAsc="invitedInitialBalance_ASC",i.InvitedInitialBalanceDesc="invitedInitialBalance_DESC",(r=A.Network||(A.Network={})).Babylon="BABYLON",r.Alexandria="ALEXANDRIA",r.Rome="ROME",r.Olympia="OLYMPIA",(n=A.WorkingGroupOpeningType||(A.WorkingGroupOpeningType={})).Regular="REGULAR",n.Leader="LEADER",(t=A.ApplicationFormQuestionType||(A.ApplicationFormQuestionType={})).Text="TEXT",t.Textarea="TEXTAREA"},93395:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||n(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),r(t(28068),A)},39449:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.Activities=void 0;const r=n(t(2784)),i=t(31604),a=t(8537);A.Activities=({activities:e})=>r.default.createElement("div",null,e.map((e=>r.default.createElement(a.ActivityComponent,{key:e.id,type:e.type,category:e.category,timestamp:e.time},r.default.createElement(i.TextMedium,null,e.text)))))},8537:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.ActivityComponent=void 0;const r=n(t(2784)),i=t(62022),a=t(94515);A.ActivityComponent=({timestamp:e,category:A,type:t,children:n})=>r.default.createElement("div",null,r.default.createElement(a.ActivityIcon,{icon:A,variant:t}),r.default.createElement("div",null,i.relativeTime(e)),r.default.createElement("div",null,n))},94515:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.ActivityIcon=void 0;const r=n(t(2784)),i=t(24895);A.ActivityIcon=({icon:e,variant:A})=>"closed"===e?r.default.createElement(i.ArrowInsideIcon,null):r.default.createElement(i.CopyIcon,null)},79386:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||n(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),r(t(39449),A)},32916:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.BadgeViolet=void 0;const r=n(t(52275)),i=t(12101);A.BadgeViolet=r.default.p`
  display: flex;
  justify-content: center;
  width: fit-content;
  margin: 0;
  padding: 0 8px;
  font-size: 10px;
  line-height: 16px;
  border-radius: 8px;
  color: ${i.Colors.White};
  background-color: ${i.Colors.Blue[200]};
  text-transform: uppercase;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-column-gap: 8px;
  width: fit-content;
  height: fit-content;
  font-family: ${a.Fonts.Inter};
  font-size: 12px;
  line-height: 18px;
  color: ${({disabled:e})=>e?a.Colors.Black[300]:a.Colors.Black[400]};
  transition: ${a.Transitions.all};
`,A.CopyText=i.default.span`
  max-width: 100%;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-feature-settings: 'tnum';
  display: flex;
  position: ${({absolute:e})=>e?"absolute":"relative"};
  right: ${({absolute:e})=>e?"-24px":"auto"};
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  text-transform: none;
`;const u=i.default.div`
  display: none;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: ${({size:e})=>{switch(e){case"l":return"28px";case"m":default:return"20px"}}};
  left: ${({size:e})=>{switch(e){case"l":return"-12px";case"m":default:return"-16px"}}};
  width: max-content;
  min-width: 160px;
  max-width: 304px;
  padding: 16px 24px;
  border: 1px solid ${a.Colors.Black[900]};
  background-color: ${a.Colors.Black[700]};
  border-radius: ${a.BorderRad.m};
  transition: ${a.Transitions.all};
  visibility: hidden;
  z-index: 55;
  ${a.Animations.showHelperTooltip};

  &:after {
    content: '';
    position: absolute;
    left: 19px;
    top: -4px;
    width: 8px;
    height: 8px;
    background-color: ${a.Colors.Black[700]};
    border: 1px solid ${a.Colors.Black[900]};
    transform: rotate(45deg);
    z-index: 1;
  }
  &:before {
  }