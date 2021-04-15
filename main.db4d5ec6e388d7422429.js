/*! For license information please see main.db4d5ec6e388d7422429.js.LICENSE.txt */
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
`,p=({active:e,address:A})=>e&&e.rootAccount===A||e.controllerAccount===A?i.default.createElement(o.BadgeViolet,null,e.rootAccount===A?"Root account":"Controller account"):null,h=a.default(s.CopyComponent)`
  grid-area: accountaddress;
`},91381:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.OptionAccount=void 0;const r=n(t(2784)),i=t(88954),a=t(31604),o=t(88345),s=t(41469);A.OptionAccount=({option:e})=>{const A=o.useBalance(e.address);return r.default.createElement(r.default.Fragment,null,r.default.createElement(s.AccountInfo,{account:e}),r.default.createElement(i.BalanceInfoInRow,null,r.default.createElement(i.InfoTitle,null,"Transferable balance"),r.default.createElement(i.InfoValue,null,r.default.createElement(a.TokenValue,{value:A?.transferable}))))}},90938:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.OptionListAccount=void 0;const r=n(t(2784)),i=t(52019),a=t(91381);A.OptionListAccount=r.default.memo((({options:e,onChange:A})=>r.default.createElement(i.OptionsListComponent,null,e.map((e=>r.default.createElement(i.Option,{key:e.address,onClick:()=>A&&A(e)},r.default.createElement(a.OptionAccount,{option:e})))))))},67738:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,A){Object.defineProperty(e,"default",{enumerable:!0,value:A})}:function(e,A){e.default=A}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var A={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(A,e,t);return r(A,e),A};Object.defineProperty(A,"__esModule",{value:!0}),A.SelectAccount=A.filterAccount=void 0;const a=i(t(2784)),o=t(52019),s=t(87795),u=t(42482),c=t(3307),l=t(85079),d=t(15838),f=t(91381),g=t(90938);A.filterAccount=e=>{const A="string"==typeof e?e:e?.address;return e?e=>e.address!==A:()=>!0},A.SelectAccount=a.default.memo((({onChange:e,filter:A,selected:t})=>{const{allAccounts:n}=u.useAccounts(),r=n.filter(A||(()=>!0)),[i,p]=a.useState(t),[h,m]=a.useState(""),y=a.useMemo((()=>d.filterByText(r,h)),[h,r]),I=s.useKeyring();return a.useEffect((()=>{0===y.length&&l.isValidAddress(h,I)&&(!i||i.address!==h)&&p(c.accountOrNamed(n,h,"Unsaved account"))}),[y,h,i]),a.default.createElement(o.Select,{selected:i,onChange:e,disabled:!1,renderSelected:e=>a.default.createElement(f.OptionAccount,{option:e}),placeholder:"Select account or paste account address",renderList:e=>a.default.createElement(g.OptionListAccount,{onChange:e,options:y}),onSearch:e=>m(e)})}))},64297:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.SelectedAccount=void 0;const r=n(t(2784)),i=t(55017),a=t(24895),o=t(88954),s=t(31604),u=t(88345),c=t(41469);A.SelectedAccount=({account:e})=>{const{transferable:A}=u.useBalance(e.address)||{};return r.default.createElement(o.LockedAccount,null,r.default.createElement(c.AccountInfo,{account:e}),r.default.createElement(o.BalanceInfoInRow,null,r.default.createElement(o.InfoTitle,null,"Transferable balance"),r.default.createElement(o.InfoValue,null,r.default.createElement(s.TokenValue,{value:A}))),r.default.createElement(i.ToggleButton,{className:"ui-toggle",disabled:!0},r.default.createElement(a.ArrowDownIcon,null)))}},15838:(e,A)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.filterByText=void 0,A.filterByText=function(e,A){return e.filter((e=>e.name?.toLocaleLowerCase().includes(A.toLocaleLowerCase())||e.address.includes(A)))}},11679:function(e,A,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,A,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return A[t]}})}:function(e,A,t,n){void 0===n&&(n=t),e[n]=A[t]}),r=this&&this.__exportStar||function(e,A){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(A,t)||n(A,e,t)};Object.defineProperty(A,"__esModule",{value:!0}),r(t(67738),A),r(t(64297),A)},89300:function(e,A,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(A,"__esModule",{value:!0}),A.TransferButtonStyled=A.TransferButton=void 0;const r=n(t(2784)),i=n(t(52275)),a=t(86096),o=t(67312),s=t(12101),u=t(19221);A.TransferButton=function({from:e,to:A,disabled:t}){const{showModal:n}=u.useModal(),i=!e&&!A,a=i?"transfer":e&&!i?"send":"receive",s=!!t;return r.default.createElement(c,{size:"medium",square:!0,onClick:()=>n({modal:"TransferTokens",data:{from:e,to:A}}),disabled:s},r.default.createElement(o.PickedTransferIcon,{type:a}))},A.TransferButtonStyled=function(){const{showModal:e}=u.useModal();return r.default.createElement(l,{size:"small",square:!0,onClick:()=>e({modal:"TransferTokens",data:{}})},r.default.createElement(o.PickedTransferIcon,{type:"transfer"}))};const c=i.default(a.ButtonGhost)`
  svg {
    color: ${s.Colors.Black[900]};
  }
`,l=i.default(a.ButtonPrimary)`
  width: 32px;
  height: 32px;
  grid-area: balancetransfer;
  justify-self: end;
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
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-row-gap: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-area: barlinks;
  margin: 0;
  padding: 0;
  list-style: none;
`,p=i.default.li`
  display: flex;
  flex-direction: column;
  flex-basis: 48px;
  flex-shrink: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 276px repeat(4, 128px) 136px;
  grid-template-rows: 1fr;
  justify-content: space-between;
  justify-items: end;
  align-items: center;
  width: 100%;
  height: ${d.Sizes.accountHeight};
  padding: 16px 0 16px 14px;
`,g=a.default.p``,p=a.default.div`
  display: grid;
  grid-template-columns: repeat(2, 40px);
  grid-template-rows: 40px;
  grid-column-gap: 8px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 16px auto;
  grid-template-areas:
    'accountstablenav'
    'accountslist';
  grid-row-gap: 5px;
  width: 100%;
`,E=s.default.div`
  display: grid;
  grid-area: accountstablenav;
  grid-template-rows: 1fr;
  grid-template-columns: 276px repeat(4, 128px) 136px;
  justify-content: space-between;
  width: 100%;
  padding-left: 16px;
`,B=s.default.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  justify-self: end;
  width: fit-content;
  font-size: 10px;
  line-height: 16px;
  font-weight: 700;

  }

  }

