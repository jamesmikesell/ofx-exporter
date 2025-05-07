/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/dayjs/dayjs.min.js":
/*!******************************************!*\
  !*** ../node_modules/dayjs/dayjs.min.js ***!
  \******************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p="$isDayjsObject",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return b},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=b.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return a+1;case"MM":return b.s(a+1,2,"0");case"MMM":return h(n.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return b.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(s,u,!0);case"A":return $(s,u,!1);case"m":return String(u);case"mm":return b.s(u,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=!0),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O}));

/***/ }),

/***/ "../node_modules/file-saver/dist/FileSaver.min.js":
/*!********************************************************!*\
  !*** ../node_modules/file-saver/dist/FileSaver.min.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof __webpack_require__.g&&__webpack_require__.g.global===__webpack_require__.g?__webpack_require__.g:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "./app-version.ts":
/*!************************!*\
  !*** ./app-version.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppVersion = void 0;
class AppVersion {
}
exports.AppVersion = AppVersion;
AppVersion.VERSION = "db0e0f5";


/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Pa529CsvToOfxConverter = void 0;
const pa_529_csv_transformer_1 = __webpack_require__(/*! ./pa-529-csv-transformer */ "./pa-529-csv-transformer.ts");
const ofx_security_stocks_1 = __webpack_require__(/*! ./ofx-security-stocks */ "./ofx-security-stocks.ts");
const file_saver_1 = __importDefault(__webpack_require__(/*! file-saver */ "../node_modules/file-saver/dist/FileSaver.min.js"));
const app_version_1 = __webpack_require__(/*! ./app-version */ "./app-version.ts");
console.log("App version: " + app_version_1.AppVersion.VERSION);
class Pa529CsvToOfxConverter {
    static convertCsvToOfx(csv) {
        let createFake = this.createFakeTransactions();
        let config = pa_529_csv_transformer_1.Pa529CsvTransformer.convertCsvToOfxCreationDto(csv, createFake);
        let ofx = ofx_security_stocks_1.OfxSecurityGenerator.generateOfx(config);
        var blob = new Blob([ofx], { type: "text/plain;charset=utf-8" });
        file_saver_1.default.saveAs(blob, "pa-529-statement.ofx");
    }
    static createFakeTransactions() {
        return document.getElementById('fake-transactions').checked;
    }
}
exports.Pa529CsvToOfxConverter = Pa529CsvToOfxConverter;
const dropArea = document.getElementById('drop-area');
dropArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropArea.style.backgroundColor = '#e0e0e0';
});
dropArea.addEventListener('dragleave', () => {
    dropArea.style.backgroundColor = '#f9f9f9';
});
dropArea.addEventListener('drop', (event) => {
    event.preventDefault();
    dropArea.style.backgroundColor = '#f9f9f9';
    const files = event.dataTransfer.files;
    if (files.length > 0) {
        const file = files[0];
        console.log(`File name: ${file.name}`);
        const reader = new FileReader();
        reader.onload = function (e) {
            const content = e.target.result;
            Pa529CsvToOfxConverter.convertCsvToOfx(content.toString());
        };
        reader.onerror = function (e) {
            console.error("An error occurred while reading the file", e);
        };
        reader.readAsText(file);
    }
});


/***/ }),

/***/ "./ofx-security-stocks.ts":
/*!********************************!*\
  !*** ./ofx-security-stocks.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OfxSecurityGenerator = void 0;
const dayjs_1 = __importDefault(__webpack_require__(/*! dayjs */ "../node_modules/dayjs/dayjs.min.js"));
const x2js_1 = __importDefault(__webpack_require__(/*! x2js */ "../node_modules/x2js/x2js.js"));
// import xmlFormat from "xml-formatter"
class OfxSecurityGenerator {
    static generateOfx(config) {
        this.checkTransactionSigns(config.mutualFundTransactions);
        var x2js = new x2js_1.default({ selfClosingElements: false });
        let js = x2js.xml2js(OFX_STOCK_TEMPLATE);
        js.OFX.INVSTMTMSGSRSV1.INVSTMTTRNRS.INVSTMTRS.INVACCTFROM.ACCTID = config.accountId;
        js.OFX.INVSTMTMSGSRSV1.INVSTMTTRNRS.INVSTMTRS.INVACCTFROM.BROKERID = config.brokerId;
        js.OFX.INVSTMTMSGSRSV1.INVSTMTTRNRS.INVSTMTRS.DTASOF = this.formatDate(config.updateDateTime);
        js.OFX.INVSTMTMSGSRSV1.INVSTMTTRNRS.INVSTMTRS.INVTRANLIST.DTSTART = this.formatDate(config.startDate);
        js.OFX.INVSTMTMSGSRSV1.INVSTMTTRNRS.INVSTMTRS.INVTRANLIST.DTEND = this.formatDate(config.endDate);
        let investmentTranList = js.OFX.INVSTMTMSGSRSV1.INVSTMTTRNRS.INVSTMTRS.INVTRANLIST;
        investmentTranList.BUYMF = [];
        investmentTranList.SELLMF = [];
        config.mutualFundTransactions.forEach(singleTran => {
            if (singleTran.shares >= 0)
                investmentTranList.BUYMF.push(this.createBuyTransaction(singleTran));
            else
                investmentTranList.SELLMF.push(this.createSellTransaction(singleTran));
        });
        js.OFX.SECLISTMSGSRSV1.SECLIST.MFINFO = config.securityPriceInfo.map(singleSecurity => {
            let mfInfo = {
                SECINFO: this.convertSecurityInfo(singleSecurity),
                MFTYPE: "OPENEND",
            };
            return mfInfo;
        });
        if (investmentTranList.BUYMF.length === 0)
            delete investmentTranList.BUYMF;
        if (investmentTranList.SELLMF.length === 0)
            delete investmentTranList.SELLMF;
        if (js.OFX.SECLISTMSGSRSV1.SECLIST.MFINFO.length === 0)
            delete js.OFX.SECLISTMSGSRSV1.SECLIST.MFINFO;
        var xmlBody = x2js.js2xml(js);
        var fileText = OFX_STOCK_HEADER + xmlBody;
        fileText = fileText.replace(/&#x27;/g, "'");
        fileText = fileText.replace(/&apos;/g, "'");
        fileText = fileText.replace(/&amp;/g, "&");
        fileText = fileText.replace(/&quot;/g, '"');
        return fileText;
        // return xmlFormat(fileText, { indentation: "  " });
    }
    static checkTransactionSigns(mutualFundTransactions) {
        let incorrectSign = mutualFundTransactions.find(single => single.dollarTotal * single.shares > 0);
        if (incorrectSign)
            throw new Error("Incorrect sign on security transaction.  Buy transactions should have positive shares, negative dollars. Sales are opposite.");
    }
    static createBuyTransaction(singleTran) {
        let buy = {
            INVBUY: this.convertTransaction(singleTran),
            BUYTYPE: "BUY",
        };
        return buy;
    }
    static createSellTransaction(singleTran) {
        let sell = {
            INVSELL: this.convertTransaction(singleTran),
            SELLTYPE: "SELL",
        };
        return sell;
    }
    static convertSecurityInfo(creationDto) {
        let ofxInfo = {
            FIID: creationDto.fiid,
            SECID: {
                UNIQUEID: creationDto.securityUid,
                UNIQUEIDTYPE: "FUND_NAME",
            },
            SECNAME: creationDto.securityName,
            TICKER: creationDto.ticker,
            UNITPRICE: creationDto.pricePerShare,
        };
        return ofxInfo;
    }
    static convertTransaction(config) {
        return {
            INVTRAN: {
                DTSETTLE: this.formatDate(config.tradeDate),
                DTTRADE: this.formatDate(config.tradeDate),
                FITID: config.transactionId,
                MEMO: config.memo,
            },
            SECID: {
                UNIQUEID: config.securityId,
                UNIQUEIDTYPE: "FUND_NAME",
            },
            SUBACCTFUND: "CASH",
            SUBACCTSEC: "CASH",
            TOTAL: config.dollarTotal,
            UNITPRICE: config.pricePerShare,
            UNITS: config.shares,
        };
    }
    static formatDate(date) {
        return (0, dayjs_1.default)(date).format("YYYYMMDD");
    }
}
exports.OfxSecurityGenerator = OfxSecurityGenerator;
const OFX_STOCK_HEADER = `<?xml version="1.0" encoding="UTF-8"?>
<?OFX OFXHEADER="200" VERSION="220" SECURITY="NONE" OLDFILEUID="NONE" NEWFILEUID="NONE"?>
`;
const OFX_STOCK_TEMPLATE = `<?xml version="1.0" encoding="UTF-8"?>
<?OFX OFXHEADER="200" VERSION="220" SECURITY="NONE" OLDFILEUID="NONE" NEWFILEUID="NONE"?>
<OFX>
  <INVSTMTMSGSRSV1>
    <INVSTMTTRNRS>
      <TRNUID>0</TRNUID>
      <STATUS>
        <CODE>0</CODE>
        <SEVERITY>INFO</SEVERITY>
      </STATUS>
      <INVSTMTRS>
        <DTASOF></DTASOF>
        <CURDEF>USD</CURDEF>
        <INVACCTFROM>
          <BROKERID></BROKERID>
          <ACCTID></ACCTID>
        </INVACCTFROM>
        <INVTRANLIST>
          <DTSTART></DTSTART>
          <DTEND></DTEND>
        </INVTRANLIST>
      </INVSTMTRS>
    </INVSTMTTRNRS>
  </INVSTMTMSGSRSV1>
  <SECLISTMSGSRSV1>
    <SECLIST>
    </SECLIST>
  </SECLISTMSGSRSV1>
</OFX>
`;


/***/ }),

/***/ "./pa-529-csv-transformer.ts":
/*!***********************************!*\
  !*** ./pa-529-csv-transformer.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Pa529CsvTransformer = void 0;
const sync_1 = __webpack_require__(/*! csv-parse/browser/esm/sync */ "../node_modules/csv-parse/dist/esm/sync.js");
const dayjs_1 = __importDefault(__webpack_require__(/*! dayjs */ "../node_modules/dayjs/dayjs.min.js"));
class Pa529CsvTransformer {
    /**
     *
     * @param csvRaw
     * @param createFake
     * for each holding, create an extra buy and offsetting sale at the current
     * market prices.  this allows some personal finances software programs to update
     * their current prices for securities which aren't publicly listed.
     * @returns
     */
    static convertCsvToOfxCreationDto(csvRaw, createFake) {
        let splits = csvRaw.replace(/\n{3,}/g, "\n\n").split("\n\n");
        let holdingsSectionOfCsv = splits[0];
        let transactionsSectionOfCsv = splits[1];
        let holdings = this.getCsvHoldings(holdingsSectionOfCsv);
        let transactions = this.getTransactions(transactionsSectionOfCsv);
        let accountNumbers = new Set();
        let dtoTransactions = [];
        transactions.forEach(singleTran => {
            accountNumbers.add(singleTran.accountNumber);
            dtoTransactions.push(this.createTransactions(singleTran));
        });
        if (createFake) {
            holdings.forEach(singleHolding => {
                dtoTransactions.push(this.createFakeTrade(singleHolding, true));
                dtoTransactions.push(this.createFakeTrade(singleHolding, false));
            });
        }
        let securityInfo = holdings.map(singleHolding => {
            let holding = {
                fiid: "PA529",
                securityUid: this.getSecurityIdFromHolding(singleHolding),
                securityName: "PA529 - " + singleHolding.fundName,
                ticker: "",
                pricePerShare: singleHolding.price,
            };
            return holding;
        });
        if (accountNumbers.size !== 1)
            throw new Error("Incorrect number of accounts listed. 1 and only 1 account number must be listed.");
        let [accountNumber] = accountNumbers;
        let startEndDates = this.getStartEndDates(transactions);
        let config = {
            updateDateTime: new Date(),
            accountId: accountNumber,
            brokerId: "PA529",
            startDate: startEndDates[0],
            endDate: startEndDates[1],
            mutualFundTransactions: dtoTransactions,
            securityPriceInfo: securityInfo,
        };
        return config;
    }
    static createTransactions(singleTran) {
        let dto = {
            tradeDate: singleTran.tradeDate,
            transactionId: `${(0, dayjs_1.default)(singleTran.tradeDate).format("YYYYMMDD")}${singleTran.investmentName}`.replace(/ /g, ""),
            memo: `${singleTran.transactionType} - ${singleTran.investmentName}`,
            securityId: this.getSecurityIdFromTran(singleTran),
            dollarTotal: -singleTran.grossAmount,
            pricePerShare: singleTran.sharePrice,
            shares: singleTran.shares,
        };
        return dto;
    }
    static createFakeTrade(holding, buy) {
        let multiplier = buy ? 1 : -1;
        let tradeType = buy ? "buy" : "sell";
        let tran = {
            tradeDate: new Date(),
            transactionId: `fake_trade_${tradeType}_${(0, dayjs_1.default)(new Date).format("YYYYMMDD")}${holding.fundName}`.replace(/ /g, ""),
            memo: `Fake ${tradeType} transaction ${holding.fundName} current price ${holding.price}`,
            securityId: this.getSecurityIdFromHolding(holding),
            dollarTotal: -1 * holding.price * multiplier,
            pricePerShare: holding.price,
            shares: 1 * multiplier,
        };
        return tran;
    }
    static getSecurityIdFromTran(singleTran) {
        return "PA529 " + singleTran.investmentName;
    }
    static getSecurityIdFromHolding(singleHolding) {
        return "PA529 " + singleHolding.fundName;
    }
    static getStartEndDates(transactions) {
        let start;
        let end;
        transactions.forEach(single => {
            if (!start || start > single.tradeDate)
                start = single.tradeDate;
            if (!end || end < single.tradeDate)
                end = single.tradeDate;
        });
        return [start, end];
    }
    static getTransactions(transactionsSectionOfCsv) {
        let transactionsAndHeader = (0, sync_1.parse)(transactionsSectionOfCsv);
        this.checkTransactionColumnNames(transactionsAndHeader[0]);
        let transactionsRows = transactionsAndHeader.slice(1); // remove first row which is just headers
        return this.convertCsvRowsToTransactions(transactionsRows);
    }
    static getCsvHoldings(holdingsSectionOfCsv) {
        let holdingsAndHeaders = (0, sync_1.parse)(holdingsSectionOfCsv);
        this.checkHoldingColumnNames(holdingsAndHeaders[0]);
        let holdingRows = holdingsAndHeaders.slice(1); // remove first row which is just headers
        return this.convertCsvRowsToHoldings(holdingRows);
    }
    static convertCsvRowsToHoldings(rows) {
        return rows.map(singleRow => {
            let holdings = {
                accountNumber: singleRow[Pa529HoldingColumns.FUND_ACCOUNT_NUMBER],
                fundName: singleRow[Pa529HoldingColumns.FUND_NAME],
                price: this.convertDollarStringToNumber(singleRow[Pa529HoldingColumns.PRICE]),
                shares: +singleRow[Pa529HoldingColumns.SHARES],
                totalValue: this.convertDollarStringToNumber(singleRow[Pa529HoldingColumns.TOTAL_VALUE]),
            };
            return holdings;
        });
    }
    static convertCsvRowsToTransactions(rows) {
        return rows.map(singleRow => {
            let tran = {
                accountNumber: singleRow[Pa529TransactionColumns.ACCOUNT_NUMBER],
                tradeDate: this.convertMdyToDate(singleRow[Pa529TransactionColumns.TRADE_DATE]),
                transactionType: singleRow[Pa529TransactionColumns.TRANSACTION_TYPE],
                investmentName: singleRow[Pa529TransactionColumns.INVESTMENT_NAME],
                sharePrice: this.convertDollarStringToNumber(singleRow[Pa529TransactionColumns.SHARE_PRICE]),
                shares: +singleRow[Pa529TransactionColumns.SHARES],
                grossAmount: this.convertDollarStringToNumber(singleRow[Pa529TransactionColumns.GROSS_AMOUNT]),
                netAmount: this.convertDollarStringToNumber(singleRow[Pa529TransactionColumns.NET_AMOUNT]),
            };
            return tran;
        });
    }
    static convertMdyToDate(dateString) {
        return (0, dayjs_1.default)(dateString, "MM/DD/YYYY").toDate();
    }
    static convertDollarStringToNumber(dollarString) {
        return +dollarString.replace(/\$/g, '');
    }
    static checkHoldingColumnNames(columns) {
        this.checkColumn(columns, Pa529HoldingColumns.FUND_ACCOUNT_NUMBER, "Fund Account Number");
        this.checkColumn(columns, Pa529HoldingColumns.FUND_NAME, "Fund Name");
        this.checkColumn(columns, Pa529HoldingColumns.PRICE, "Price");
        this.checkColumn(columns, Pa529HoldingColumns.SHARES, "Shares");
        this.checkColumn(columns, Pa529HoldingColumns.TOTAL_VALUE, "Total Value");
    }
    static checkTransactionColumnNames(columns) {
        this.checkColumn(columns, Pa529TransactionColumns.ACCOUNT_NUMBER, "Account Number");
        this.checkColumn(columns, Pa529TransactionColumns.TRADE_DATE, "Trade Date");
        this.checkColumn(columns, Pa529TransactionColumns.PROCESS_DATE, "Process Date");
        this.checkColumn(columns, Pa529TransactionColumns.TRANSACTION_TYPE, "Transaction Type");
        this.checkColumn(columns, Pa529TransactionColumns.TRANSACTION_DESCRIPTION, "Transaction Description");
        this.checkColumn(columns, Pa529TransactionColumns.INVESTMENT_NAME, "Investment Name");
        this.checkColumn(columns, Pa529TransactionColumns.SHARE_PRICE, "Share Price");
        this.checkColumn(columns, Pa529TransactionColumns.SHARES, "Shares");
        this.checkColumn(columns, Pa529TransactionColumns.GROSS_AMOUNT, "Gross Amount");
        this.checkColumn(columns, Pa529TransactionColumns.NET_AMOUNT, "Net Amount");
    }
    static checkColumn(columns, columnNumber, expected) {
        if (columns[columnNumber] !== expected)
            throw new Error(`Expected column ${columnNumber + 1} to be "${expected}", but found "${columns[columnNumber]}"`);
    }
}
exports.Pa529CsvTransformer = Pa529CsvTransformer;
var Pa529TransactionColumns;
(function (Pa529TransactionColumns) {
    Pa529TransactionColumns[Pa529TransactionColumns["ACCOUNT_NUMBER"] = 0] = "ACCOUNT_NUMBER";
    Pa529TransactionColumns[Pa529TransactionColumns["TRADE_DATE"] = 1] = "TRADE_DATE";
    Pa529TransactionColumns[Pa529TransactionColumns["PROCESS_DATE"] = 2] = "PROCESS_DATE";
    Pa529TransactionColumns[Pa529TransactionColumns["TRANSACTION_TYPE"] = 3] = "TRANSACTION_TYPE";
    Pa529TransactionColumns[Pa529TransactionColumns["TRANSACTION_DESCRIPTION"] = 4] = "TRANSACTION_DESCRIPTION";
    Pa529TransactionColumns[Pa529TransactionColumns["INVESTMENT_NAME"] = 5] = "INVESTMENT_NAME";
    Pa529TransactionColumns[Pa529TransactionColumns["SHARE_PRICE"] = 6] = "SHARE_PRICE";
    Pa529TransactionColumns[Pa529TransactionColumns["SHARES"] = 7] = "SHARES";
    Pa529TransactionColumns[Pa529TransactionColumns["GROSS_AMOUNT"] = 8] = "GROSS_AMOUNT";
    Pa529TransactionColumns[Pa529TransactionColumns["NET_AMOUNT"] = 9] = "NET_AMOUNT";
})(Pa529TransactionColumns || (Pa529TransactionColumns = {}));
var Pa529HoldingColumns;
(function (Pa529HoldingColumns) {
    Pa529HoldingColumns[Pa529HoldingColumns["FUND_ACCOUNT_NUMBER"] = 0] = "FUND_ACCOUNT_NUMBER";
    Pa529HoldingColumns[Pa529HoldingColumns["FUND_NAME"] = 1] = "FUND_NAME";
    Pa529HoldingColumns[Pa529HoldingColumns["PRICE"] = 2] = "PRICE";
    Pa529HoldingColumns[Pa529HoldingColumns["SHARES"] = 3] = "SHARES";
    Pa529HoldingColumns[Pa529HoldingColumns["TOTAL_VALUE"] = 4] = "TOTAL_VALUE";
})(Pa529HoldingColumns || (Pa529HoldingColumns = {}));


/***/ }),

/***/ "../node_modules/x2js/x2js.js":
/*!************************************!*\
  !*** ../node_modules/x2js/x2js.js ***!
  \************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	Copyright 2015 Axinom
	Copyright 2011-2013 Abdulla Abdurakhmanov
	Original sources are available at https://code.google.com/p/x2js/

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
*/

/*
	Supported export methods:
	* AMD
	* <script> (window.X2JS)
	* Node.js

	Limitations:
	* Attribute namespace prefixes are not parsed as such.
	* Overall the serialization/deserializaton code is "best effort" and not foolproof.
*/

// Module definition pattern used is returnExports from https://github.com/umdjs/umd
(function (root, factory) {
	"use strict";

	/* global define */
	if (true) {
		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
})(this, function (CustomDOMParser) {
	"use strict";

	// We return a constructor that can be used to make X2JS instances.
	return function X2JS(config) {
		var VERSION = "3.4.4";

		config = config || {};

		function initConfigDefaults() {
			// If set to "property" then <element>_asArray will be created
			// to allow you to access any element as an array (even if there is only one of it).
			config.arrayAccessForm = config.arrayAccessForm || "none";

			// If "text" then <empty></empty> will be transformed to "".
			// If "object" then <empty></empty> will be transformed to {}.
			config.emptyNodeForm = config.emptyNodeForm || "text";

			// Function that will be called for each elements, if the function returns true, the element will be skipped
			// function(name, value) { return true; };
			config.jsAttributeFilter = config.jsAttributeFilter;

			// Function that will be called for each elements, the element value will be replaced by the returned value
			// function(name, value) { return parseFloat(value); };
			config.jsAttributeConverter = config.jsAttributeConverter;

			// Allows attribute values to be converted on the fly during parsing to objects.
			// 	"test": function(name, value) { return true; }
			//	"convert": function(name, value) { return parseFloat(value); };
			// convert() will be called for every attribute where test() returns true
			// and the return value from convert() will replace the original value of the attribute.
			config.attributeConverters = config.attributeConverters || [];

			// Any elements that match the paths here will have their text parsed
			// as an XML datetime value (2011-11-12T13:00:00-07:00 style).
			// The path can be a plain string (parent.child1.child2),
			// a regex (/.*\.child2/) or function(elementPath).
			config.datetimeAccessFormPaths = config.datetimeAccessFormPaths || [];

			// Any elements that match the paths listed here will be stored in JavaScript objects
			// as arrays even if there is only one of them. The path can be a plain string
			// (parent.child1.child2), a regex (/.*\.child2/) or function(elementName, elementPath).
			config.arrayAccessFormPaths = config.arrayAccessFormPaths || [];

            // xmldom constructor arguments
            // @see https://github.com/jindw/xmldom#api-reference
			config.xmldomOptions = config.xmldomOptions || {};

			// If true, a toString function is generated to print nodes containing text or cdata.
			// Useful if you want to accept both plain text and CData as equivalent inputs.
			if (config.enableToStringFunc === undefined) {
				config.enableToStringFunc = true;
			}

			// If true, empty text tags are ignored for elements with child nodes.
			if (config.skipEmptyTextNodesForObj === undefined) {
				config.skipEmptyTextNodesForObj = true;
			}

			// If true, whitespace is trimmed from text nodes.
			if (config.stripWhitespaces === undefined) {
				config.stripWhitespaces = true;
			}

			// If true, double quotes are used in generated XML.
			if (config.useDoubleQuotes === undefined) {
				config.useDoubleQuotes = true;
			}

			// If true, the root element of the XML document is ignored when converting to objects.
			// The result will directly have the root element's children as its own properties.
			if (config.ignoreRoot === undefined) {
				config.ignoreRoot = false;
			}

			// Whether XML characters in text are escaped when reading/writing XML.
			if (config.escapeMode === undefined) {
				config.escapeMode = true;
			}

			// Prefix to use for properties that are created to represent XML attributes.
			if (config.attributePrefix === undefined) {
				config.attributePrefix = "_";
			}

			// If true, empty elements will created as self closing elements (<element />)
			// If false, empty elements will be created with start and end tags (<element></element>)
			if (config.selfClosingElements === undefined) {
				config.selfClosingElements = true;
			}

			// If this property defined as false and an XML element has CData node ONLY, it will be converted to text without additional property "__cdata"
			if (config.keepCData === undefined) {
				config.keepCData = false;
			}

			// If this property defined as true, use { __text: 'abc' } over 'abc'
			if (config.keepText === undefined) {
				config.keepText = false;
			}

			// If true, will output dates in UTC
			if (config.jsDateUTC === undefined) {
				config.jsDateUTC = false;
			}
		}

		function initRequiredPolyfills() {
			function pad(number) {
				var r = String(number);
				if (r.length === 1) {
					r = '0' + r;
				}
				return r;
			}
			// Hello IE8-
			if (typeof String.prototype.trim !== 'function') {
				String.prototype.trim = function trim() {
					return this.replace(/^\s+|^\n+|(\s|\n)+$/g, '');
				};
			}
			if (typeof Date.prototype.toISOString !== 'function') {
				// Implementation from http://stackoverflow.com/questions/2573521/how-do-i-output-an-iso-8601-formatted-string-in-javascript
				Date.prototype.toISOString = function toISOString() {
					var MS_IN_S = 1000;

					return this.getUTCFullYear()
						+ '-' + pad(this.getUTCMonth() + 1)
						+ '-' + pad(this.getUTCDate())
						+ 'T' + pad(this.getUTCHours())
						+ ':' + pad(this.getUTCMinutes())
						+ ':' + pad(this.getUTCSeconds())
						+ '.' + String((this.getUTCMilliseconds() / MS_IN_S).toFixed(3)).slice(2, 5)
						+ 'Z';
				};
			}
		}

		initConfigDefaults();
		initRequiredPolyfills();

		var DOMNodeTypes = {
			"ELEMENT_NODE": 1,
			"TEXT_NODE": 3,
			"CDATA_SECTION_NODE": 4,
			"COMMENT_NODE": 8,
			"DOCUMENT_NODE": 9
		};

		function getDomNodeLocalName(domNode) {
			var localName = domNode.localName;
			if (localName == null) {
				// Yeah, this is IE!!
				localName = domNode.baseName;
			}
			if (localName == null || localName === "") {
				// ==="" is IE too
				localName = domNode.nodeName;
			}
			return localName;
		}

		function getDomNodeNamespacePrefix(node) {
			return node.prefix;
		}

		function escapeXmlChars(str) {
			if (typeof str === "string")
				return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
			else
				return str;
		}

		function unescapeXmlChars(str) {
			return str.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&amp;/g, '&');
		}

		function ensureProperArrayAccessForm(element, childName, elementPath) {
			switch (config.arrayAccessForm) {
				case "property":
					if (!(element[childName] instanceof Array))
						element[childName + "_asArray"] = [element[childName]];
					else
						element[childName + "_asArray"] = element[childName];
					break;
			}

			if (!(element[childName] instanceof Array) && config.arrayAccessFormPaths.length > 0) {
				var match = false;

				for (var i = 0; i < config.arrayAccessFormPaths.length; i++) {
					var arrayPath = config.arrayAccessFormPaths[i];
					if (typeof arrayPath === "string") {
						if (arrayPath === elementPath) {
							match = true;
							break;
						}
					} else if (arrayPath instanceof RegExp) {
						if (arrayPath.test(elementPath)) {
							match = true;
							break;
						}
					} else if (typeof arrayPath === "function") {
						if (arrayPath(childName, elementPath)) {
							match = true;
							break;
						}
					}
				}

				if (match)
					element[childName] = [element[childName]];
			}
		}

		function xmlDateTimeToDate(prop) {
			// Implementation based up on http://stackoverflow.com/questions/8178598/xml-datetime-to-javascript-date-object
			// Improved to support full spec and optional parts
			var MINUTES_PER_HOUR = 60;

			var bits = prop.split(/[-T:+Z]/g);

			var d = new Date(bits[0], bits[1] - 1, bits[2]);
			var secondBits = bits[5].split("\.");
			d.setHours(bits[3], bits[4], secondBits[0]);
			if (secondBits.length > 1)
				d.setMilliseconds(secondBits[1]);

			// Get supplied time zone offset in minutes
			if (bits[6] && bits[7]) {
				var offsetMinutes = bits[6] * MINUTES_PER_HOUR + Number(bits[7]);
				var sign = /\d\d-\d\d:\d\d$/.test(prop) ? '-' : '+';

				// Apply the sign
				offsetMinutes = 0 + (sign === '-' ? -1 * offsetMinutes : offsetMinutes);

				// Apply offset and local timezone
				d.setMinutes(d.getMinutes() - offsetMinutes - d.getTimezoneOffset());
			} else if (prop.indexOf("Z", prop.length - 1) !== -1) {
				d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds()));
			}

			// d is now a local time equivalent to the supplied time
			return d;
		}

		function convertToDateIfRequired(value, childName, fullPath) {
			if (config.datetimeAccessFormPaths.length > 0) {
				var pathWithoutTextNode = fullPath.split("\.#")[0];

				for (var i = 0; i < config.datetimeAccessFormPaths.length; i++) {
					var candidatePath = config.datetimeAccessFormPaths[i];
					if (typeof candidatePath === "string") {
						if (candidatePath === pathWithoutTextNode)
							return xmlDateTimeToDate(value);
					} else if (candidatePath instanceof RegExp) {
						if (candidatePath.test(pathWithoutTextNode))
							return xmlDateTimeToDate(value);
					} else if (typeof candidatePath === "function") {
						if (candidatePath(pathWithoutTextNode))
							return xmlDateTimeToDate(value);
					}
				}
			}

			return value;
		}

		function deserializeRootElementChildren(rootElement) {
			var result = {};
			var children = rootElement.childNodes;

			// Alternative for firstElementChild which is not supported in some environments
			for (var i = 0; i < children.length; i++) {
				var child = children.item(i);
				if (child.nodeType === DOMNodeTypes.ELEMENT_NODE) {
					var childName = getDomNodeLocalName(child);

					if (config.ignoreRoot)
						result = deserializeDomChildren(child, childName);
					else
						result[childName] = deserializeDomChildren(child, childName);
				}
			}

			return result;
		}

		function deserializeElementChildren(element, elementPath) {
			var result = {};
			result.__cnt = 0;

			var nodeChildren = element.childNodes;

			// Child nodes.
			for (var iChild = 0; iChild < nodeChildren.length; iChild++) {
				var child = nodeChildren.item(iChild);
				var childName = getDomNodeLocalName(child);

				if (child.nodeType === DOMNodeTypes.COMMENT_NODE)
					continue;

				result.__cnt++;

				// We deliberately do not accept everything falsey here because
				// elements that resolve to empty string should still be preserved.
				if (result[childName] == null) {
					result[childName] = deserializeDomChildren(child, elementPath + "." + childName);
					ensureProperArrayAccessForm(result, childName, elementPath + "." + childName);
				} else {
					if (!(result[childName] instanceof Array)) {
						result[childName] = [result[childName]];
						ensureProperArrayAccessForm(result, childName, elementPath + "." + childName);
					}

					result[childName][result[childName].length] = deserializeDomChildren(child, elementPath + "." + childName);
				}
			}

			// Attributes
			for (var iAttribute = 0; iAttribute < element.attributes.length; iAttribute++) {
				var attribute = element.attributes.item(iAttribute);
				result.__cnt++;

				var adjustedValue = attribute.value;
				for (var iConverter = 0; iConverter < config.attributeConverters.length; iConverter++) {
					var converter = config.attributeConverters[iConverter];
					if (converter.test.call(null, attribute.name, attribute.value))
						adjustedValue = converter.convert.call(null, attribute.name, attribute.value);
				}

				result[config.attributePrefix + attribute.name] = adjustedValue;
			}

			// Node namespace prefix
			var namespacePrefix = getDomNodeNamespacePrefix(element);
			if (namespacePrefix) {
				result.__cnt++;
				result.__prefix = namespacePrefix;
			}

			if (result["#text"]) {
				result.__text = result["#text"];

				if (result.__text instanceof Array) {
					result.__text = result.__text.join("\n");
				}

				if (config.escapeMode)
					result.__text = unescapeXmlChars(result.__text);

				if (config.stripWhitespaces)
					result.__text = result.__text.trim();

				delete result["#text"];

				if (config.arrayAccessForm === "property")
					delete result["#text_asArray"];

				result.__text = convertToDateIfRequired(result.__text, "#text", elementPath + ".#text");
			}

			if (result.hasOwnProperty('#cdata-section')) {
				result.__cdata = result["#cdata-section"];
				delete result["#cdata-section"];

				if (config.arrayAccessForm === "property")
					delete result["#cdata-section_asArray"];
			}

			if (result.__cnt === 1 && result.__text && !config.keepText) {
				result = result.__text;
			} else if (result.__cnt === 0 && config.emptyNodeForm === "text") {
				result = '';
			} else if (result.__cnt > 1 && result.__text !== undefined && config.skipEmptyTextNodesForObj) {
				if (config.stripWhitespaces && result.__text === "" || result.__text.trim() === "") {
					delete result.__text;
				}
			}
			delete result.__cnt;

			/**
			 * We are checking if we are creating a __cdata property or if we just add the content of cdata inside result.
			 * But, if we have a property inside xml tag (<tag PROPERTY="1"></tag>), and a cdata inside, we can't ignore it.
			 * In this case we are keeping __cdata property.
			 */
			if (!config.keepCData && (!result.hasOwnProperty('__text') && result.hasOwnProperty('__cdata') && Object.keys(result).length === 1)) {
				return (result.__cdata ? result.__cdata : '');
			}

			if (config.enableToStringFunc && (result.__text || result.__cdata)) {
				result.toString = function toString() {
					return (this.__text ? this.__text : '') + (this.__cdata ? this.__cdata : '');
				};
			}

			return result;
		}

		function deserializeDomChildren(node, parentPath) {
			if (node.nodeType === DOMNodeTypes.DOCUMENT_NODE) {
				return deserializeRootElementChildren(node);
			} else if (node.nodeType === DOMNodeTypes.ELEMENT_NODE) {
				return deserializeElementChildren(node, parentPath);
			} else if (node.nodeType === DOMNodeTypes.TEXT_NODE || node.nodeType === DOMNodeTypes.CDATA_SECTION_NODE) {
				return node.nodeValue;
			} else {
				return null;
			}
		}

		function serializeStartTag(jsObject, elementName, attributeNames, selfClosing) {
			var resultStr = "<" + ((jsObject && jsObject.__prefix) ? (jsObject.__prefix + ":") : "") + elementName;

			if (attributeNames) {
				for (var i = 0; i < attributeNames.length; i++) {
					var attributeName = attributeNames[i];
					var attributeValue = jsObject[attributeName];

					if (config.escapeMode)
						attributeValue = escapeXmlChars(attributeValue);

					resultStr += " " + attributeName.substr(config.attributePrefix.length) + "=";

					if (config.useDoubleQuotes)
						resultStr += '"' + attributeValue + '"';
					else
						resultStr += "'" + attributeValue + "'";
				}
			}

			if (!selfClosing)
				resultStr += ">";
			else
				resultStr += " />";

			return resultStr;
		}

		function serializeEndTag(jsObject, elementName) {
			return "</" + ((jsObject && jsObject.__prefix) ? (jsObject.__prefix + ":") : "") + elementName + ">";
		}

		function endsWith(str, suffix) {
			return str.indexOf(suffix, str.length - suffix.length) !== -1;
		}

		function isSpecialProperty(jsonObj, propertyName) {
			if ((config.arrayAccessForm === "property" && endsWith(propertyName.toString(), ("_asArray")))
				|| propertyName.toString().indexOf(config.attributePrefix) === 0
				|| propertyName.toString().indexOf("__") === 0
				|| (jsonObj[propertyName] instanceof Function))
				return true;
			else
				return false;
		}

		function getDataElementCount(jsObject) {
			var count = 0;

			if (jsObject instanceof Object) {
				for (var propertyName in jsObject) {
					if (isSpecialProperty(jsObject, propertyName))
						continue;

					count++;
				}
			}

			return count;
		}

		function getDataAttributeNames(jsObject) {
			var names = [];

			if (jsObject instanceof Object) {
				for (var attributeName in jsObject) {
					if (attributeName.toString().indexOf("__") === -1
						&& attributeName.toString().indexOf(config.attributePrefix) === 0) {
						names.push(attributeName);
					}
				}
			}

			return names;
		}

		function serializeComplexTextNodeContents(textNode) {
			var result = "";

			if (textNode.__cdata) {
				result += "<![CDATA[" + textNode.__cdata + "]]>";
			}

			if (textNode.__text || typeof (textNode.__text) === 'number' || typeof (textNode.__text) === 'boolean') {
				if (config.escapeMode)
					result += escapeXmlChars(textNode.__text);
				else
					result += textNode.__text;
			}

			return result;
		}

		function serializeTextNodeContents(textNode) {
			var result = "";

			if (textNode instanceof Object) {
				result += serializeComplexTextNodeContents(textNode);
			} else if (textNode !== null) {
				if (config.escapeMode)
					result += escapeXmlChars(textNode);
				else
					result += textNode;
			}

			return result;
		}

		function serializeArray(elementArray, elementName, attributes) {
			var result = "";

			if (elementArray.length === 0) {
				result += serializeStartTag(elementArray, elementName, attributes, true);
			} else {
				for (var i = 0; i < elementArray.length; i++) {
					result += serializeJavaScriptObject(elementArray[i], elementName, getDataAttributeNames(elementArray[i]));
				}
			}

			return result;
		}

		function serializeJavaScriptObject(element, elementName, attributes) {
			var result = "";

			// Filter out elements
			if (config.jsAttributeFilter && config.jsAttributeFilter.call(null, elementName, element)) {
				return result;
			}
			// Convert element
			if (config.jsAttributeConverter) {
				element = config.jsAttributeConverter.call(null, elementName, element);
			}
			if ((element === undefined || element === null || element === '') && config.selfClosingElements) {
				result += serializeStartTag(element, elementName, attributes, true);
			} else if (typeof element === 'object') {
				if (Object.prototype.toString.call(element) === '[object Array]') {
					result += serializeArray(element, elementName, attributes);
				} else if (element instanceof Date) {
					result += serializeStartTag(element, elementName, attributes, false);
					// Serialize date
					result += config.jsDateUTC ? element.toUTCString() : element.toISOString();
					result += serializeEndTag(element, elementName);
				} else {
					var childElementCount = getDataElementCount(element);
					if (childElementCount > 0 || typeof (element.__text) === 'number' || typeof (element.__text) === 'boolean' || element.__text || element.__cdata) {
						result += serializeStartTag(element, elementName, attributes, false);
						result += serializeJavaScriptObjectChildren(element);
						result += serializeEndTag(element, elementName);
					} else if (config.selfClosingElements) {
						result += serializeStartTag(element, elementName, attributes, true);
					} else {
						result += serializeStartTag(element, elementName, attributes, false);
						result += serializeEndTag(element, elementName);
					}
				}
			} else {
				result += serializeStartTag(element, elementName, attributes, false);
				result += serializeTextNodeContents(element);
				result += serializeEndTag(element, elementName);
			}

			return result;
		}

		function serializeJavaScriptObjectChildren(jsObject) {
			var result = "";

			var elementCount = getDataElementCount(jsObject);

			if (elementCount > 0) {
				for (var elementName in jsObject) {
					if (isSpecialProperty(jsObject, elementName))
						continue;

					var element = jsObject[elementName];
					var attributes = getDataAttributeNames(element);

					result += serializeJavaScriptObject(element, elementName, attributes);
				}
			}

			result += serializeTextNodeContents(jsObject);

			return result;
		}

		function parseXml(xml) {
			if (xml === undefined) {
				return null;
			}

			if (typeof xml !== "string") {
				return null;
			}

			var parser = null;
			var domNode = null;

			if (CustomDOMParser) {
				// This branch is used for node.js, with the xmldom parser.
				parser = new CustomDOMParser(config.xmldomOptions);

				domNode = parser.parseFromString(xml, "text/xml");
			} else if (window && window.DOMParser) {
				parser = new window.DOMParser();
				var parsererrorNS = null;

				var isIEParser = window.ActiveXObject || "ActiveXObject" in window;

				// IE9+ now is here
				if (!isIEParser && document.all && !document.addEventListener) {
					try {
						parsererrorNS = parser.parseFromString("INVALID", "text/xml").childNodes[0].namespaceURI;
					} catch (err) {
						parsererrorNS = null;
					}
				}

				try {
					domNode = parser.parseFromString(xml, "text/xml");
					if (parsererrorNS !== null && domNode.getElementsByTagNameNS(parsererrorNS, "parsererror").length > 0) {
						domNode = null;
					}
				} catch (err) {
					domNode = null;
				}
			} else {
				// IE :(
				if (xml.indexOf("<?") === 0) {
					xml = xml.substr(xml.indexOf("?>") + 2);
				}

				/* global ActiveXObject */
				domNode = new ActiveXObject("Microsoft.XMLDOM");
				domNode.async = "false";
				domNode.loadXML(xml);
			}

			return domNode;
		}

		this.asArray = function asArray(prop) {
			if (prop === undefined || prop === null) {
				return [];
			} else if (prop instanceof Array) {
				return prop;
			} else {
				return [prop];
			}
		};

		this.toXmlDateTime = function toXmlDateTime(dt) {
			if (dt instanceof Date) {
				return dt.toISOString();
			} else if (typeof (dt) === 'number') {
				return new Date(dt).toISOString();
			} else {
				return null;
			}
		};

		this.asDateTime = function asDateTime(prop) {
			if (typeof (prop) === "string") {
				return xmlDateTimeToDate(prop);
			} else {
				return prop;
			}
		};

		/*
			Internally the logic works in a cycle:
			DOM->JS - implemented by custom logic (deserialization).
			JS->XML - implemented by custom logic (serialization).
			XML->DOM - implemented by browser.
		*/

		// Transformns an XML string into DOM-tree
		this.xml2dom = function xml2dom(xml) {
			return parseXml(xml);
		};

		// Transforms a DOM tree to JavaScript objects.
		this.dom2js = function dom2js(domNode) {
			return deserializeDomChildren(domNode, null);
		};

		// Transforms JavaScript objects to a DOM tree.
		this.js2dom = function js2dom(jsObject) {
			var xml = this.js2xml(jsObject);
			return parseXml(xml);
		};

		// Transformns an XML string into JavaScript objects.
		this.xml2js = function xml2js(xml) {
			var domNode = parseXml(xml);
			if (domNode != null)
				return this.dom2js(domNode);
			else
				return null;
		};

		// Transforms JavaScript objects into an XML string.
		this.js2xml = function js2xml(jsObject) {
			return serializeJavaScriptObjectChildren(jsObject);
		};

		this.getVersion = function getVersion() {
			return VERSION;
		};
	};
});


/***/ }),

/***/ "../node_modules/csv-parse/dist/esm/sync.js":
/*!**************************************************!*\
  !*** ../node_modules/csv-parse/dist/esm/sync.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CsvError: () => (/* binding */ CsvError),
/* harmony export */   parse: () => (/* binding */ parse)
/* harmony export */ });
var global$1 = (typeof global !== "undefined" ? global :
            typeof self !== "undefined" ? self :
            typeof window !== "undefined" ? window : {});

var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var inited = false;
function init () {
  inited = true;
  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
  }

  revLookup['-'.charCodeAt(0)] = 62;
  revLookup['_'.charCodeAt(0)] = 63;
}

function toByteArray (b64) {
  if (!inited) {
    init();
  }
  var i, j, l, tmp, placeHolders, arr;
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

  // base64 is 4/3 + up to two characters of the original data
  arr = new Arr(len * 3 / 4 - placeHolders);

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len;

  var L = 0;

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)];
    arr[L++] = (tmp >> 16) & 0xFF;
    arr[L++] = (tmp >> 8) & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4);
    arr[L++] = tmp & 0xFF;
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2);
    arr[L++] = (tmp >> 8) & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
    output.push(tripletToBase64(tmp));
  }
  return output.join('')
}

function fromByteArray (uint8) {
  if (!inited) {
    init();
  }
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
  var output = '';
  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    output += lookup[tmp >> 2];
    output += lookup[(tmp << 4) & 0x3F];
    output += '==';
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
    output += lookup[tmp >> 10];
    output += lookup[(tmp >> 4) & 0x3F];
    output += lookup[(tmp << 2) & 0x3F];
    output += '=';
  }

  parts.push(output);

  return parts.join('')
}

function read (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? (nBytes - 1) : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

function write (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
  var i = isLE ? 0 : (nBytes - 1);
  var d = isLE ? 1 : -1;
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
}

var toString = {}.toString;

var isArray = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

var INSPECT_MAX_BYTES = 50;

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global$1.TYPED_ARRAY_SUPPORT !== undefined
  ? global$1.TYPED_ARRAY_SUPPORT
  : true;

/*
 * Export kMaxLength after typed array support is determined.
 */
kMaxLength();

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }
    that.length = length;
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192; // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr
};

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) ;
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
};

function allocUnsafe (that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
};

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);

  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }
  return that
}

function fromObject (that, obj) {
  if (internalIsBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len);
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}
Buffer.isBuffer = isBuffer;
function internalIsBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
};

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
};

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i;
  if (length === undefined) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;
  for (i = 0; i < list.length; ++i) {
    var buf = list[i];
    if (!internalIsBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer
};

function byteLength (string, encoding) {
  if (internalIsBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer.byteLength = byteLength;

function slowToString (encoding, start, end) {
  var loweredCase = false;

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0;
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true;

function swap (b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length;
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }
  return this
};

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length;
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }
  return this
};

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length;
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }
  return this
};

Buffer.prototype.toString = function toString () {
  var length = this.length | 0;
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
};

Buffer.prototype.equals = function equals (b) {
  if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
};

Buffer.prototype.inspect = function inspect () {
  var str = '';
  var max = INSPECT_MAX_BYTES;
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }
  return '<Buffer ' + str + '>'
};

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!internalIsBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = target ? target.length : 0;
  }
  if (thisStart === undefined) {
    thisStart = 0;
  }
  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;

  if (this === target) return 0

  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);

  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
};

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }
  byteOffset = +byteOffset;  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1);
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (internalIsBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
};

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
};

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
};

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }

  // must be an even number of digits
  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed;
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0;
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0;
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;
    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8';

  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
};

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return fromByteArray(buf)
  } else {
    return fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];

  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }
          break
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }
          break
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }
          break
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = '';
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    );
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length;

  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;

  var out = '';
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;

  var newBuf;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf
};

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val
};

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val
};

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset]
};

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | (this[offset + 1] << 8)
};

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return (this[offset] << 8) | this[offset + 1]
};

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
};

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
};

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val
};

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val
};

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
};

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | (this[offset + 1] << 8);
  return (val & 0x8000) ? val | 0xFFFF0000 : val
};

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | (this[offset] << 8);
  return (val & 0x8000) ? val | 0xFFFF0000 : val
};

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
};

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
};

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return read(this, offset, true, 23, 4)
};

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return read(this, offset, false, 23, 4)
};

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return read(this, offset, true, 52, 8)
};

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return read(this, offset, false, 52, 8)
};

function checkInt (buf, value, offset, ext, max, min) {
  if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = (value & 0xff);
  return offset + 1
};

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8);
    this[offset + 1] = (value & 0xff);
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2
};

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24);
    this[offset + 2] = (value >>> 16);
    this[offset + 1] = (value >>> 8);
    this[offset] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24);
    this[offset + 1] = (value >>> 16);
    this[offset + 2] = (value >>> 8);
    this[offset + 3] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4
};

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = (value & 0xff);
  return offset + 1
};

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2
};

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8);
    this[offset + 1] = (value & 0xff);
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2
};

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
    this[offset + 2] = (value >>> 16);
    this[offset + 3] = (value >>> 24);
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4
};

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24);
    this[offset + 1] = (value >>> 16);
    this[offset + 2] = (value >>> 8);
    this[offset + 3] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4
};

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4);
  }
  write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
};

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
};

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8);
  }
  write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
};

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start;

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    );
  }

  return len
};

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0);
      if (code < 256) {
        val = code;
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;

  if (!val) val = 0;

  var i;
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = internalIsBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this
};

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '=';
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue
        }

        // valid lead
        leadSurrogate = codePoint;

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null;

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      );
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      );
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      );
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray
}


function base64ToBytes (str) {
  return toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i];
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}


// the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
function isBuffer(obj) {
  return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj))
}

function isFastBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0))
}

class CsvError extends Error {
  constructor(code, message, options, ...contexts) {
    if(Array.isArray(message)) message = message.join(' ').trim();
    super(message);
    if(Error.captureStackTrace !== undefined){
      Error.captureStackTrace(this, CsvError);
    }
    this.code = code;
    for(const context of contexts){
      for(const key in context){
        const value = context[key];
        this[key] = isBuffer(value) ? value.toString(options.encoding) : value == null ? value : JSON.parse(JSON.stringify(value));
      }
    }
  }
}

const is_object = function(obj){
  return (typeof obj === 'object' && obj !== null && !Array.isArray(obj));
};

const normalize_columns_array = function(columns){
  const normalizedColumns = [];
  for(let i = 0, l = columns.length; i < l; i++){
    const column = columns[i];
    if(column === undefined || column === null || column === false){
      normalizedColumns[i] = { disabled: true };
    }else if(typeof column === 'string'){
      normalizedColumns[i] = { name: column };
    }else if(is_object(column)){
      if(typeof column.name !== 'string'){
        throw new CsvError('CSV_OPTION_COLUMNS_MISSING_NAME', [
          'Option columns missing name:',
          `property "name" is required at position ${i}`,
          'when column is an object literal'
        ]);
      }
      normalizedColumns[i] = column;
    }else {
      throw new CsvError('CSV_INVALID_COLUMN_DEFINITION', [
        'Invalid column definition:',
        'expect a string or a literal object,',
        `got ${JSON.stringify(column)} at position ${i}`
      ]);
    }
  }
  return normalizedColumns;
};

class ResizeableBuffer{
  constructor(size=100){
    this.size = size;
    this.length = 0;
    this.buf = Buffer.allocUnsafe(size);
  }
  prepend(val){
    if(isBuffer(val)){
      const length = this.length + val.length;
      if(length >= this.size){
        this.resize();
        if(length >= this.size){
          throw Error('INVALID_BUFFER_STATE');
        }
      }
      const buf = this.buf;
      this.buf = Buffer.allocUnsafe(this.size);
      val.copy(this.buf, 0);
      buf.copy(this.buf, val.length);
      this.length += val.length;
    }else {
      const length = this.length++;
      if(length === this.size){
        this.resize();
      }
      const buf = this.clone();
      this.buf[0] = val;
      buf.copy(this.buf,1, 0, length);
    }
  }
  append(val){
    const length = this.length++;
    if(length === this.size){
      this.resize();
    }
    this.buf[length] = val;
  }
  clone(){
    return Buffer.from(this.buf.slice(0, this.length));
  }
  resize(){
    const length = this.length;
    this.size = this.size * 2;
    const buf = Buffer.allocUnsafe(this.size);
    this.buf.copy(buf,0, 0, length);
    this.buf = buf;
  }
  toString(encoding){
    if(encoding){
      return this.buf.slice(0, this.length).toString(encoding);
    }else {
      return Uint8Array.prototype.slice.call(this.buf.slice(0, this.length));
    }
  }
  toJSON(){
    return this.toString('utf8');
  }
  reset(){
    this.length = 0;
  }
}

// white space characters
// https://en.wikipedia.org/wiki/Whitespace_character
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes#Types
// \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff
const np = 12;
const cr$1 = 13; // `\r`, carriage return, 0x0D in hexadécimal, 13 in decimal
const nl$1 = 10; // `\n`, newline, 0x0A in hexadecimal, 10 in decimal
const space = 32;
const tab = 9;

const init_state = function(options){
  return {
    bomSkipped: false,
    bufBytesStart: 0,
    castField: options.cast_function,
    commenting: false,
    // Current error encountered by a record
    error: undefined,
    enabled: options.from_line === 1,
    escaping: false,
    escapeIsQuote: isBuffer(options.escape) && isBuffer(options.quote) && Buffer.compare(options.escape, options.quote) === 0,
    // columns can be `false`, `true`, `Array`
    expectedRecordLength: Array.isArray(options.columns) ? options.columns.length : undefined,
    field: new ResizeableBuffer(20),
    firstLineToHeaders: options.cast_first_line_to_header,
    needMoreDataSize: Math.max(
      // Skip if the remaining buffer smaller than comment
      options.comment !== null ? options.comment.length : 0,
      // Skip if the remaining buffer can be delimiter
      ...options.delimiter.map((delimiter) => delimiter.length),
      // Skip if the remaining buffer can be escape sequence
      options.quote !== null ? options.quote.length : 0,
    ),
    previousBuf: undefined,
    quoting: false,
    stop: false,
    rawBuffer: new ResizeableBuffer(100),
    record: [],
    recordHasError: false,
    record_length: 0,
    recordDelimiterMaxLength: options.record_delimiter.length === 0 ? 0 : Math.max(...options.record_delimiter.map((v) => v.length)),
    trimChars: [Buffer.from(' ', options.encoding)[0], Buffer.from('\t', options.encoding)[0]],
    wasQuoting: false,
    wasRowDelimiter: false,
    timchars: [
      Buffer.from(Buffer.from([cr$1], 'utf8').toString(), options.encoding),
      Buffer.from(Buffer.from([nl$1], 'utf8').toString(), options.encoding),
      Buffer.from(Buffer.from([np], 'utf8').toString(), options.encoding),
      Buffer.from(Buffer.from([space], 'utf8').toString(), options.encoding),
      Buffer.from(Buffer.from([tab], 'utf8').toString(), options.encoding),
    ]
  };
};

const underscore = function(str){
  return str.replace(/([A-Z])/g, function(_, match){
    return '_' + match.toLowerCase();
  });
};

const normalize_options = function(opts){
  const options = {};
  // Merge with user options
  for(const opt in opts){
    options[underscore(opt)] = opts[opt];
  }
  // Normalize option `encoding`
  // Note: defined first because other options depends on it
  // to convert chars/strings into buffers.
  if(options.encoding === undefined || options.encoding === true){
    options.encoding = 'utf8';
  }else if(options.encoding === null || options.encoding === false){
    options.encoding = null;
  }else if(typeof options.encoding !== 'string' && options.encoding !== null){
    throw new CsvError('CSV_INVALID_OPTION_ENCODING', [
      'Invalid option encoding:',
      'encoding must be a string or null to return a buffer,',
      `got ${JSON.stringify(options.encoding)}`
    ], options);
  }
  // Normalize option `bom`
  if(options.bom === undefined || options.bom === null || options.bom === false){
    options.bom = false;
  }else if(options.bom !== true){
    throw new CsvError('CSV_INVALID_OPTION_BOM', [
      'Invalid option bom:', 'bom must be true,',
      `got ${JSON.stringify(options.bom)}`
    ], options);
  }
  // Normalize option `cast`
  options.cast_function = null;
  if(options.cast === undefined || options.cast === null || options.cast === false || options.cast === ''){
    options.cast = undefined;
  }else if(typeof options.cast === 'function'){
    options.cast_function = options.cast;
    options.cast = true;
  }else if(options.cast !== true){
    throw new CsvError('CSV_INVALID_OPTION_CAST', [
      'Invalid option cast:', 'cast must be true or a function,',
      `got ${JSON.stringify(options.cast)}`
    ], options);
  }
  // Normalize option `cast_date`
  if(options.cast_date === undefined || options.cast_date === null || options.cast_date === false || options.cast_date === ''){
    options.cast_date = false;
  }else if(options.cast_date === true){
    options.cast_date = function(value){
      const date = Date.parse(value);
      return !isNaN(date) ? new Date(date) : value;
    };
  }else if (typeof options.cast_date !== 'function'){
    throw new CsvError('CSV_INVALID_OPTION_CAST_DATE', [
      'Invalid option cast_date:', 'cast_date must be true or a function,',
      `got ${JSON.stringify(options.cast_date)}`
    ], options);
  }
  // Normalize option `columns`
  options.cast_first_line_to_header = null;
  if(options.columns === true){
    // Fields in the first line are converted as-is to columns
    options.cast_first_line_to_header = undefined;
  }else if(typeof options.columns === 'function'){
    options.cast_first_line_to_header = options.columns;
    options.columns = true;
  }else if(Array.isArray(options.columns)){
    options.columns = normalize_columns_array(options.columns);
  }else if(options.columns === undefined || options.columns === null || options.columns === false){
    options.columns = false;
  }else {
    throw new CsvError('CSV_INVALID_OPTION_COLUMNS', [
      'Invalid option columns:',
      'expect an array, a function or true,',
      `got ${JSON.stringify(options.columns)}`
    ], options);
  }
  // Normalize option `group_columns_by_name`
  if(options.group_columns_by_name === undefined || options.group_columns_by_name === null || options.group_columns_by_name === false){
    options.group_columns_by_name = false;
  }else if(options.group_columns_by_name !== true){
    throw new CsvError('CSV_INVALID_OPTION_GROUP_COLUMNS_BY_NAME', [
      'Invalid option group_columns_by_name:',
      'expect an boolean,',
      `got ${JSON.stringify(options.group_columns_by_name)}`
    ], options);
  }else if(options.columns === false){
    throw new CsvError('CSV_INVALID_OPTION_GROUP_COLUMNS_BY_NAME', [
      'Invalid option group_columns_by_name:',
      'the `columns` mode must be activated.'
    ], options);
  }
  // Normalize option `comment`
  if(options.comment === undefined || options.comment === null || options.comment === false || options.comment === ''){
    options.comment = null;
  }else {
    if(typeof options.comment === 'string'){
      options.comment = Buffer.from(options.comment, options.encoding);
    }
    if(!isBuffer(options.comment)){
      throw new CsvError('CSV_INVALID_OPTION_COMMENT', [
        'Invalid option comment:',
        'comment must be a buffer or a string,',
        `got ${JSON.stringify(options.comment)}`
      ], options);
    }
  }
  // Normalize option `comment_no_infix`
  if(options.comment_no_infix === undefined || options.comment_no_infix === null || options.comment_no_infix === false){
    options.comment_no_infix = false;
  }else if(options.comment_no_infix !== true){
    throw new CsvError('CSV_INVALID_OPTION_COMMENT', [
      'Invalid option comment_no_infix:',
      'value must be a boolean,',
      `got ${JSON.stringify(options.comment_no_infix)}`
    ], options);
  }
  // Normalize option `delimiter`
  const delimiter_json = JSON.stringify(options.delimiter);
  if(!Array.isArray(options.delimiter)) options.delimiter = [options.delimiter];
  if(options.delimiter.length === 0){
    throw new CsvError('CSV_INVALID_OPTION_DELIMITER', [
      'Invalid option delimiter:',
      'delimiter must be a non empty string or buffer or array of string|buffer,',
      `got ${delimiter_json}`
    ], options);
  }
  options.delimiter = options.delimiter.map(function(delimiter){
    if(delimiter === undefined || delimiter === null || delimiter === false){
      return Buffer.from(',', options.encoding);
    }
    if(typeof delimiter === 'string'){
      delimiter = Buffer.from(delimiter, options.encoding);
    }
    if(!isBuffer(delimiter) || delimiter.length === 0){
      throw new CsvError('CSV_INVALID_OPTION_DELIMITER', [
        'Invalid option delimiter:',
        'delimiter must be a non empty string or buffer or array of string|buffer,',
        `got ${delimiter_json}`
      ], options);
    }
    return delimiter;
  });
  // Normalize option `escape`
  if(options.escape === undefined || options.escape === true){
    options.escape = Buffer.from('"', options.encoding);
  }else if(typeof options.escape === 'string'){
    options.escape = Buffer.from(options.escape, options.encoding);
  }else if (options.escape === null || options.escape === false){
    options.escape = null;
  }
  if(options.escape !== null){
    if(!isBuffer(options.escape)){
      throw new Error(`Invalid Option: escape must be a buffer, a string or a boolean, got ${JSON.stringify(options.escape)}`);
    }
  }
  // Normalize option `from`
  if(options.from === undefined || options.from === null){
    options.from = 1;
  }else {
    if(typeof options.from === 'string' && /\d+/.test(options.from)){
      options.from = parseInt(options.from);
    }
    if(Number.isInteger(options.from)){
      if(options.from < 0){
        throw new Error(`Invalid Option: from must be a positive integer, got ${JSON.stringify(opts.from)}`);
      }
    }else {
      throw new Error(`Invalid Option: from must be an integer, got ${JSON.stringify(options.from)}`);
    }
  }
  // Normalize option `from_line`
  if(options.from_line === undefined || options.from_line === null){
    options.from_line = 1;
  }else {
    if(typeof options.from_line === 'string' && /\d+/.test(options.from_line)){
      options.from_line = parseInt(options.from_line);
    }
    if(Number.isInteger(options.from_line)){
      if(options.from_line <= 0){
        throw new Error(`Invalid Option: from_line must be a positive integer greater than 0, got ${JSON.stringify(opts.from_line)}`);
      }
    }else {
      throw new Error(`Invalid Option: from_line must be an integer, got ${JSON.stringify(opts.from_line)}`);
    }
  }
  // Normalize options `ignore_last_delimiters`
  if(options.ignore_last_delimiters === undefined || options.ignore_last_delimiters === null){
    options.ignore_last_delimiters = false;
  }else if(typeof options.ignore_last_delimiters === 'number'){
    options.ignore_last_delimiters = Math.floor(options.ignore_last_delimiters);
    if(options.ignore_last_delimiters === 0){
      options.ignore_last_delimiters = false;
    }
  }else if(typeof options.ignore_last_delimiters !== 'boolean'){
    throw new CsvError('CSV_INVALID_OPTION_IGNORE_LAST_DELIMITERS', [
      'Invalid option `ignore_last_delimiters`:',
      'the value must be a boolean value or an integer,',
      `got ${JSON.stringify(options.ignore_last_delimiters)}`
    ], options);
  }
  if(options.ignore_last_delimiters === true && options.columns === false){
    throw new CsvError('CSV_IGNORE_LAST_DELIMITERS_REQUIRES_COLUMNS', [
      'The option `ignore_last_delimiters`',
      'requires the activation of the `columns` option'
    ], options);
  }
  // Normalize option `info`
  if(options.info === undefined || options.info === null || options.info === false){
    options.info = false;
  }else if(options.info !== true){
    throw new Error(`Invalid Option: info must be true, got ${JSON.stringify(options.info)}`);
  }
  // Normalize option `max_record_size`
  if(options.max_record_size === undefined || options.max_record_size === null || options.max_record_size === false){
    options.max_record_size = 0;
  }else if(Number.isInteger(options.max_record_size) && options.max_record_size >= 0);else if(typeof options.max_record_size === 'string' && /\d+/.test(options.max_record_size)){
    options.max_record_size = parseInt(options.max_record_size);
  }else {
    throw new Error(`Invalid Option: max_record_size must be a positive integer, got ${JSON.stringify(options.max_record_size)}`);
  }
  // Normalize option `objname`
  if(options.objname === undefined || options.objname === null || options.objname === false){
    options.objname = undefined;
  }else if(isBuffer(options.objname)){
    if(options.objname.length === 0){
      throw new Error(`Invalid Option: objname must be a non empty buffer`);
    }
    if(options.encoding === null);else {
      options.objname = options.objname.toString(options.encoding);
    }
  }else if(typeof options.objname === 'string'){
    if(options.objname.length === 0){
      throw new Error(`Invalid Option: objname must be a non empty string`);
    }
    // Great, nothing to do
  }else if(typeof options.objname === 'number');else {
    throw new Error(`Invalid Option: objname must be a string or a buffer, got ${options.objname}`);
  }
  if(options.objname !== undefined){
    if(typeof options.objname === 'number'){
      if(options.columns !== false){
        throw Error('Invalid Option: objname index cannot be combined with columns or be defined as a field');
      }
    }else { // A string or a buffer
      if(options.columns === false){
        throw Error('Invalid Option: objname field must be combined with columns or be defined as an index');
      }
    }
  }
  // Normalize option `on_record`
  if(options.on_record === undefined || options.on_record === null){
    options.on_record = undefined;
  }else if(typeof options.on_record !== 'function'){
    throw new CsvError('CSV_INVALID_OPTION_ON_RECORD', [
      'Invalid option `on_record`:',
      'expect a function,',
      `got ${JSON.stringify(options.on_record)}`
    ], options);
  }
  // Normalize option `on_skip`
  // options.on_skip ??= (err, chunk) => {
  //   this.emit('skip', err, chunk);
  // };
  if(options.on_skip !== undefined && options.on_skip !== null && typeof options.on_skip !== 'function'){
    throw new Error(`Invalid Option: on_skip must be a function, got ${JSON.stringify(options.on_skip)}`);
  }
  // Normalize option `quote`
  if(options.quote === null || options.quote === false || options.quote === ''){
    options.quote = null;
  }else {
    if(options.quote === undefined || options.quote === true){
      options.quote = Buffer.from('"', options.encoding);
    }else if(typeof options.quote === 'string'){
      options.quote = Buffer.from(options.quote, options.encoding);
    }
    if(!isBuffer(options.quote)){
      throw new Error(`Invalid Option: quote must be a buffer or a string, got ${JSON.stringify(options.quote)}`);
    }
  }
  // Normalize option `raw`
  if(options.raw === undefined || options.raw === null || options.raw === false){
    options.raw = false;
  }else if(options.raw !== true){
    throw new Error(`Invalid Option: raw must be true, got ${JSON.stringify(options.raw)}`);
  }
  // Normalize option `record_delimiter`
  if(options.record_delimiter === undefined){
    options.record_delimiter = [];
  }else if(typeof options.record_delimiter === 'string' || isBuffer(options.record_delimiter)){
    if(options.record_delimiter.length === 0){
      throw new CsvError('CSV_INVALID_OPTION_RECORD_DELIMITER', [
        'Invalid option `record_delimiter`:',
        'value must be a non empty string or buffer,',
        `got ${JSON.stringify(options.record_delimiter)}`
      ], options);
    }
    options.record_delimiter = [options.record_delimiter];
  }else if(!Array.isArray(options.record_delimiter)){
    throw new CsvError('CSV_INVALID_OPTION_RECORD_DELIMITER', [
      'Invalid option `record_delimiter`:',
      'value must be a string, a buffer or array of string|buffer,',
      `got ${JSON.stringify(options.record_delimiter)}`
    ], options);
  }
  options.record_delimiter = options.record_delimiter.map(function(rd, i){
    if(typeof rd !== 'string' && ! isBuffer(rd)){
      throw new CsvError('CSV_INVALID_OPTION_RECORD_DELIMITER', [
        'Invalid option `record_delimiter`:',
        'value must be a string, a buffer or array of string|buffer',
        `at index ${i},`,
        `got ${JSON.stringify(rd)}`
      ], options);
    }else if(rd.length === 0){
      throw new CsvError('CSV_INVALID_OPTION_RECORD_DELIMITER', [
        'Invalid option `record_delimiter`:',
        'value must be a non empty string or buffer',
        `at index ${i},`,
        `got ${JSON.stringify(rd)}`
      ], options);
    }
    if(typeof rd === 'string'){
      rd = Buffer.from(rd, options.encoding);
    }
    return rd;
  });
  // Normalize option `relax_column_count`
  if(typeof options.relax_column_count === 'boolean');else if(options.relax_column_count === undefined || options.relax_column_count === null){
    options.relax_column_count = false;
  }else {
    throw new Error(`Invalid Option: relax_column_count must be a boolean, got ${JSON.stringify(options.relax_column_count)}`);
  }
  if(typeof options.relax_column_count_less === 'boolean');else if(options.relax_column_count_less === undefined || options.relax_column_count_less === null){
    options.relax_column_count_less = false;
  }else {
    throw new Error(`Invalid Option: relax_column_count_less must be a boolean, got ${JSON.stringify(options.relax_column_count_less)}`);
  }
  if(typeof options.relax_column_count_more === 'boolean');else if(options.relax_column_count_more === undefined || options.relax_column_count_more === null){
    options.relax_column_count_more = false;
  }else {
    throw new Error(`Invalid Option: relax_column_count_more must be a boolean, got ${JSON.stringify(options.relax_column_count_more)}`);
  }
  // Normalize option `relax_quotes`
  if(typeof options.relax_quotes === 'boolean');else if(options.relax_quotes === undefined || options.relax_quotes === null){
    options.relax_quotes = false;
  }else {
    throw new Error(`Invalid Option: relax_quotes must be a boolean, got ${JSON.stringify(options.relax_quotes)}`);
  }
  // Normalize option `skip_empty_lines`
  if(typeof options.skip_empty_lines === 'boolean');else if(options.skip_empty_lines === undefined || options.skip_empty_lines === null){
    options.skip_empty_lines = false;
  }else {
    throw new Error(`Invalid Option: skip_empty_lines must be a boolean, got ${JSON.stringify(options.skip_empty_lines)}`);
  }
  // Normalize option `skip_records_with_empty_values`
  if(typeof options.skip_records_with_empty_values === 'boolean');else if(options.skip_records_with_empty_values === undefined || options.skip_records_with_empty_values === null){
    options.skip_records_with_empty_values = false;
  }else {
    throw new Error(`Invalid Option: skip_records_with_empty_values must be a boolean, got ${JSON.stringify(options.skip_records_with_empty_values)}`);
  }
  // Normalize option `skip_records_with_error`
  if(typeof options.skip_records_with_error === 'boolean');else if(options.skip_records_with_error === undefined || options.skip_records_with_error === null){
    options.skip_records_with_error = false;
  }else {
    throw new Error(`Invalid Option: skip_records_with_error must be a boolean, got ${JSON.stringify(options.skip_records_with_error)}`);
  }
  // Normalize option `rtrim`
  if(options.rtrim === undefined || options.rtrim === null || options.rtrim === false){
    options.rtrim = false;
  }else if(options.rtrim !== true){
    throw new Error(`Invalid Option: rtrim must be a boolean, got ${JSON.stringify(options.rtrim)}`);
  }
  // Normalize option `ltrim`
  if(options.ltrim === undefined || options.ltrim === null || options.ltrim === false){
    options.ltrim = false;
  }else if(options.ltrim !== true){
    throw new Error(`Invalid Option: ltrim must be a boolean, got ${JSON.stringify(options.ltrim)}`);
  }
  // Normalize option `trim`
  if(options.trim === undefined || options.trim === null || options.trim === false){
    options.trim = false;
  }else if(options.trim !== true){
    throw new Error(`Invalid Option: trim must be a boolean, got ${JSON.stringify(options.trim)}`);
  }
  // Normalize options `trim`, `ltrim` and `rtrim`
  if(options.trim === true && opts.ltrim !== false){
    options.ltrim = true;
  }else if(options.ltrim !== true){
    options.ltrim = false;
  }
  if(options.trim === true && opts.rtrim !== false){
    options.rtrim = true;
  }else if(options.rtrim !== true){
    options.rtrim = false;
  }
  // Normalize option `to`
  if(options.to === undefined || options.to === null){
    options.to = -1;
  }else {
    if(typeof options.to === 'string' && /\d+/.test(options.to)){
      options.to = parseInt(options.to);
    }
    if(Number.isInteger(options.to)){
      if(options.to <= 0){
        throw new Error(`Invalid Option: to must be a positive integer greater than 0, got ${JSON.stringify(opts.to)}`);
      }
    }else {
      throw new Error(`Invalid Option: to must be an integer, got ${JSON.stringify(opts.to)}`);
    }
  }
  // Normalize option `to_line`
  if(options.to_line === undefined || options.to_line === null){
    options.to_line = -1;
  }else {
    if(typeof options.to_line === 'string' && /\d+/.test(options.to_line)){
      options.to_line = parseInt(options.to_line);
    }
    if(Number.isInteger(options.to_line)){
      if(options.to_line <= 0){
        throw new Error(`Invalid Option: to_line must be a positive integer greater than 0, got ${JSON.stringify(opts.to_line)}`);
      }
    }else {
      throw new Error(`Invalid Option: to_line must be an integer, got ${JSON.stringify(opts.to_line)}`);
    }
  }
  return options;
};

const isRecordEmpty = function(record){
  return record.every((field) => field == null || field.toString && field.toString().trim() === '');
};

const cr = 13; // `\r`, carriage return, 0x0D in hexadécimal, 13 in decimal
const nl = 10; // `\n`, newline, 0x0A in hexadecimal, 10 in decimal

const boms = {
  // Note, the following are equals:
  // Buffer.from("\ufeff")
  // Buffer.from([239, 187, 191])
  // Buffer.from('EFBBBF', 'hex')
  'utf8': Buffer.from([239, 187, 191]),
  // Note, the following are equals:
  // Buffer.from "\ufeff", 'utf16le
  // Buffer.from([255, 254])
  'utf16le': Buffer.from([255, 254])
};

const transform = function(original_options = {}) {
  const info = {
    bytes: 0,
    comment_lines: 0,
    empty_lines: 0,
    invalid_field_length: 0,
    lines: 1,
    records: 0
  };
  const options = normalize_options(original_options);
  return {
    info: info,
    original_options: original_options,
    options: options,
    state: init_state(options),
    __needMoreData: function(i, bufLen, end){
      if(end) return false;
      const {encoding, escape, quote} = this.options;
      const {quoting, needMoreDataSize, recordDelimiterMaxLength} = this.state;
      const numOfCharLeft = bufLen - i - 1;
      const requiredLength = Math.max(
        needMoreDataSize,
        // Skip if the remaining buffer smaller than record delimiter
        // If "record_delimiter" is yet to be discovered:
        // 1. It is equals to `[]` and "recordDelimiterMaxLength" equals `0`
        // 2. We set the length to windows line ending in the current encoding
        // Note, that encoding is known from user or bom discovery at that point
        // recordDelimiterMaxLength,
        recordDelimiterMaxLength === 0 ? Buffer.from('\r\n', encoding).length : recordDelimiterMaxLength,
        // Skip if remaining buffer can be an escaped quote
        quoting ? ((escape === null ? 0 : escape.length) + quote.length) : 0,
        // Skip if remaining buffer can be record delimiter following the closing quote
        quoting ? (quote.length + recordDelimiterMaxLength) : 0,
      );
      return numOfCharLeft < requiredLength;
    },
    // Central parser implementation
    parse: function(nextBuf, end, push, close){
      const {bom, comment_no_infix, encoding, from_line, ltrim, max_record_size,raw, relax_quotes, rtrim, skip_empty_lines, to, to_line} = this.options;
      let {comment, escape, quote, record_delimiter} = this.options;
      const {bomSkipped, previousBuf, rawBuffer, escapeIsQuote} = this.state;
      let buf;
      if(previousBuf === undefined){
        if(nextBuf === undefined){
          // Handle empty string
          close();
          return;
        }else {
          buf = nextBuf;
        }
      }else if(previousBuf !== undefined && nextBuf === undefined){
        buf = previousBuf;
      }else {
        buf = Buffer.concat([previousBuf, nextBuf]);
      }
      // Handle UTF BOM
      if(bomSkipped === false){
        if(bom === false){
          this.state.bomSkipped = true;
        }else if(buf.length < 3){
          // No enough data
          if(end === false){
            // Wait for more data
            this.state.previousBuf = buf;
            return;
          }
        }else {
          for(const encoding in boms){
            if(boms[encoding].compare(buf, 0, boms[encoding].length) === 0){
              // Skip BOM
              const bomLength = boms[encoding].length;
              this.state.bufBytesStart += bomLength;
              buf = buf.slice(bomLength);
              // Renormalize original options with the new encoding
              this.options = normalize_options({...this.original_options, encoding: encoding});
              // Options will re-evaluate the Buffer with the new encoding
              ({comment, escape, quote } = this.options);
              break;
            }
          }
          this.state.bomSkipped = true;
        }
      }
      const bufLen = buf.length;
      let pos;
      for(pos = 0; pos < bufLen; pos++){
        // Ensure we get enough space to look ahead
        // There should be a way to move this out of the loop
        if(this.__needMoreData(pos, bufLen, end)){
          break;
        }
        if(this.state.wasRowDelimiter === true){
          this.info.lines++;
          this.state.wasRowDelimiter = false;
        }
        if(to_line !== -1 && this.info.lines > to_line){
          this.state.stop = true;
          close();
          return;
        }
        // Auto discovery of record_delimiter, unix, mac and windows supported
        if(this.state.quoting === false && record_delimiter.length === 0){
          const record_delimiterCount = this.__autoDiscoverRecordDelimiter(buf, pos);
          if(record_delimiterCount){
            record_delimiter = this.options.record_delimiter;
          }
        }
        const chr = buf[pos];
        if(raw === true){
          rawBuffer.append(chr);
        }
        if((chr === cr || chr === nl) && this.state.wasRowDelimiter === false){
          this.state.wasRowDelimiter = true;
        }
        // Previous char was a valid escape char
        // treat the current char as a regular char
        if(this.state.escaping === true){
          this.state.escaping = false;
        }else {
          // Escape is only active inside quoted fields
          // We are quoting, the char is an escape chr and there is a chr to escape
          // if(escape !== null && this.state.quoting === true && chr === escape && pos + 1 < bufLen){
          if(escape !== null && this.state.quoting === true && this.__isEscape(buf, pos, chr) && pos + escape.length < bufLen){
            if(escapeIsQuote){
              if(this.__isQuote(buf, pos+escape.length)){
                this.state.escaping = true;
                pos += escape.length - 1;
                continue;
              }
            }else {
              this.state.escaping = true;
              pos += escape.length - 1;
              continue;
            }
          }
          // Not currently escaping and chr is a quote
          // TODO: need to compare bytes instead of single char
          if(this.state.commenting === false && this.__isQuote(buf, pos)){
            if(this.state.quoting === true){
              const nextChr = buf[pos+quote.length];
              const isNextChrTrimable = rtrim && this.__isCharTrimable(buf, pos+quote.length);
              const isNextChrComment = comment !== null && this.__compareBytes(comment, buf, pos+quote.length, nextChr);
              const isNextChrDelimiter = this.__isDelimiter(buf, pos+quote.length, nextChr);
              const isNextChrRecordDelimiter = record_delimiter.length === 0 ? this.__autoDiscoverRecordDelimiter(buf, pos+quote.length) : this.__isRecordDelimiter(nextChr, buf, pos+quote.length);
              // Escape a quote
              // Treat next char as a regular character
              if(escape !== null && this.__isEscape(buf, pos, chr) && this.__isQuote(buf, pos + escape.length)){
                pos += escape.length - 1;
              }else if(!nextChr || isNextChrDelimiter || isNextChrRecordDelimiter || isNextChrComment || isNextChrTrimable){
                this.state.quoting = false;
                this.state.wasQuoting = true;
                pos += quote.length - 1;
                continue;
              }else if(relax_quotes === false){
                const err = this.__error(
                  new CsvError('CSV_INVALID_CLOSING_QUOTE', [
                    'Invalid Closing Quote:',
                    `got "${String.fromCharCode(nextChr)}"`,
                    `at line ${this.info.lines}`,
                    'instead of delimiter, record delimiter, trimable character',
                    '(if activated) or comment',
                  ], this.options, this.__infoField())
                );
                if(err !== undefined) return err;
              }else {
                this.state.quoting = false;
                this.state.wasQuoting = true;
                this.state.field.prepend(quote);
                pos += quote.length - 1;
              }
            }else {
              if(this.state.field.length !== 0){
                // In relax_quotes mode, treat opening quote preceded by chrs as regular
                if(relax_quotes === false){
                  const info = this.__infoField();
                  const bom = Object.keys(boms).map(b => boms[b].equals(this.state.field.toString()) ? b : false).filter(Boolean)[0];
                  const err = this.__error(
                    new CsvError('INVALID_OPENING_QUOTE', [
                      'Invalid Opening Quote:',
                      `a quote is found on field ${JSON.stringify(info.column)} at line ${info.lines}, value is ${JSON.stringify(this.state.field.toString(encoding))}`,
                      bom ? `(${bom} bom)` : undefined
                    ], this.options, info, {
                      field: this.state.field,
                    })
                  );
                  if(err !== undefined) return err;
                }
              }else {
                this.state.quoting = true;
                pos += quote.length - 1;
                continue;
              }
            }
          }
          if(this.state.quoting === false){
            const recordDelimiterLength = this.__isRecordDelimiter(chr, buf, pos);
            if(recordDelimiterLength !== 0){
              // Do not emit comments which take a full line
              const skipCommentLine = this.state.commenting && (this.state.wasQuoting === false && this.state.record.length === 0 && this.state.field.length === 0);
              if(skipCommentLine){
                this.info.comment_lines++;
                // Skip full comment line
              }else {
                // Activate records emition if above from_line
                if(this.state.enabled === false && this.info.lines + (this.state.wasRowDelimiter === true ? 1: 0) >= from_line){
                  this.state.enabled = true;
                  this.__resetField();
                  this.__resetRecord();
                  pos += recordDelimiterLength - 1;
                  continue;
                }
                // Skip if line is empty and skip_empty_lines activated
                if(skip_empty_lines === true && this.state.wasQuoting === false && this.state.record.length === 0 && this.state.field.length === 0){
                  this.info.empty_lines++;
                  pos += recordDelimiterLength - 1;
                  continue;
                }
                this.info.bytes = this.state.bufBytesStart + pos;
                const errField = this.__onField();
                if(errField !== undefined) return errField;
                this.info.bytes = this.state.bufBytesStart + pos + recordDelimiterLength;
                const errRecord = this.__onRecord(push);
                if(errRecord !== undefined) return errRecord;
                if(to !== -1 && this.info.records >= to){
                  this.state.stop = true;
                  close();
                  return;
                }
              }
              this.state.commenting = false;
              pos += recordDelimiterLength - 1;
              continue;
            }
            if(this.state.commenting){
              continue;
            }
            if(comment !== null && (comment_no_infix === false || (this.state.record.length === 0 && this.state.field.length === 0))) {
              const commentCount = this.__compareBytes(comment, buf, pos, chr);
              if(commentCount !== 0){
                this.state.commenting = true;
                continue;
              }
            }
            const delimiterLength = this.__isDelimiter(buf, pos, chr);
            if(delimiterLength !== 0){
              this.info.bytes = this.state.bufBytesStart + pos;
              const errField = this.__onField();
              if(errField !== undefined) return errField;
              pos += delimiterLength - 1;
              continue;
            }
          }
        }
        if(this.state.commenting === false){
          if(max_record_size !== 0 && this.state.record_length + this.state.field.length > max_record_size){
            return this.__error(
              new CsvError('CSV_MAX_RECORD_SIZE', [
                'Max Record Size:',
                'record exceed the maximum number of tolerated bytes',
                `of ${max_record_size}`,
                `at line ${this.info.lines}`,
              ], this.options, this.__infoField())
            );
          }
        }
        const lappend = ltrim === false || this.state.quoting === true || this.state.field.length !== 0 || !this.__isCharTrimable(buf, pos);
        // rtrim in non quoting is handle in __onField
        const rappend = rtrim === false || this.state.wasQuoting === false;
        if(lappend === true && rappend === true){
          this.state.field.append(chr);
        }else if(rtrim === true && !this.__isCharTrimable(buf, pos)){
          return this.__error(
            new CsvError('CSV_NON_TRIMABLE_CHAR_AFTER_CLOSING_QUOTE', [
              'Invalid Closing Quote:',
              'found non trimable byte after quote',
              `at line ${this.info.lines}`,
            ], this.options, this.__infoField())
          );
        }else {
          if(lappend === false){
            pos += this.__isCharTrimable(buf, pos) - 1;
          }
          continue;
        }
      }
      if(end === true){
        // Ensure we are not ending in a quoting state
        if(this.state.quoting === true){
          const err = this.__error(
            new CsvError('CSV_QUOTE_NOT_CLOSED', [
              'Quote Not Closed:',
              `the parsing is finished with an opening quote at line ${this.info.lines}`,
            ], this.options, this.__infoField())
          );
          if(err !== undefined) return err;
        }else {
          // Skip last line if it has no characters
          if(this.state.wasQuoting === true || this.state.record.length !== 0 || this.state.field.length !== 0){
            this.info.bytes = this.state.bufBytesStart + pos;
            const errField = this.__onField();
            if(errField !== undefined) return errField;
            const errRecord = this.__onRecord(push);
            if(errRecord !== undefined) return errRecord;
          }else if(this.state.wasRowDelimiter === true){
            this.info.empty_lines++;
          }else if(this.state.commenting === true){
            this.info.comment_lines++;
          }
        }
      }else {
        this.state.bufBytesStart += pos;
        this.state.previousBuf = buf.slice(pos);
      }
      if(this.state.wasRowDelimiter === true){
        this.info.lines++;
        this.state.wasRowDelimiter = false;
      }
    },
    __onRecord: function(push){
      const {columns, group_columns_by_name, encoding, info, from, relax_column_count, relax_column_count_less, relax_column_count_more, raw, skip_records_with_empty_values} = this.options;
      const {enabled, record} = this.state;
      if(enabled === false){
        return this.__resetRecord();
      }
      // Convert the first line into column names
      const recordLength = record.length;
      if(columns === true){
        if(skip_records_with_empty_values === true && isRecordEmpty(record)){
          this.__resetRecord();
          return;
        }
        return this.__firstLineToColumns(record);
      }
      if(columns === false && this.info.records === 0){
        this.state.expectedRecordLength = recordLength;
      }
      if(recordLength !== this.state.expectedRecordLength){
        const err = columns === false ?
          new CsvError('CSV_RECORD_INCONSISTENT_FIELDS_LENGTH', [
            'Invalid Record Length:',
            `expect ${this.state.expectedRecordLength},`,
            `got ${recordLength} on line ${this.info.lines}`,
          ], this.options, this.__infoField(), {
            record: record,
          })
          :
          new CsvError('CSV_RECORD_INCONSISTENT_COLUMNS', [
            'Invalid Record Length:',
            `columns length is ${columns.length},`, // rename columns
            `got ${recordLength} on line ${this.info.lines}`,
          ], this.options, this.__infoField(), {
            record: record,
          });
        if(relax_column_count === true ||
          (relax_column_count_less === true && recordLength < this.state.expectedRecordLength) ||
          (relax_column_count_more === true && recordLength > this.state.expectedRecordLength)){
          this.info.invalid_field_length++;
          this.state.error = err;
        // Error is undefined with skip_records_with_error
        }else {
          const finalErr = this.__error(err);
          if(finalErr) return finalErr;
        }
      }
      if(skip_records_with_empty_values === true && isRecordEmpty(record)){
        this.__resetRecord();
        return;
      }
      if(this.state.recordHasError === true){
        this.__resetRecord();
        this.state.recordHasError = false;
        return;
      }
      this.info.records++;
      if(from === 1 || this.info.records >= from){
        const {objname} = this.options;
        // With columns, records are object
        if(columns !== false){
          const obj = {};
          // Transform record array to an object
          for(let i = 0, l = record.length; i < l; i++){
            if(columns[i] === undefined || columns[i].disabled) continue;
            // Turn duplicate columns into an array
            if (group_columns_by_name === true && obj[columns[i].name] !== undefined) {
              if (Array.isArray(obj[columns[i].name])) {
                obj[columns[i].name] = obj[columns[i].name].concat(record[i]);
              } else {
                obj[columns[i].name] = [obj[columns[i].name], record[i]];
              }
            } else {
              obj[columns[i].name] = record[i];
            }
          }
          // Without objname (default)
          if(raw === true || info === true){
            const extRecord = Object.assign(
              {record: obj},
              (raw === true ? {raw: this.state.rawBuffer.toString(encoding)}: {}),
              (info === true ? {info: this.__infoRecord()}: {})
            );
            const err = this.__push(
              objname === undefined ? extRecord : [obj[objname], extRecord]
              , push);
            if(err){
              return err;
            }
          }else {
            const err = this.__push(
              objname === undefined ? obj : [obj[objname], obj]
              , push);
            if(err){
              return err;
            }
          }
        // Without columns, records are array
        }else {
          if(raw === true || info === true){
            const extRecord = Object.assign(
              {record: record},
              raw === true ? {raw: this.state.rawBuffer.toString(encoding)}: {},
              info === true ? {info: this.__infoRecord()}: {}
            );
            const err = this.__push(
              objname === undefined ? extRecord : [record[objname], extRecord]
              , push);
            if(err){
              return err;
            }
          }else {
            const err = this.__push(
              objname === undefined ? record : [record[objname], record]
              , push);
            if(err){
              return err;
            }
          }
        }
      }
      this.__resetRecord();
    },
    __firstLineToColumns: function(record){
      const {firstLineToHeaders} = this.state;
      try{
        const headers = firstLineToHeaders === undefined ? record : firstLineToHeaders.call(null, record);
        if(!Array.isArray(headers)){
          return this.__error(
            new CsvError('CSV_INVALID_COLUMN_MAPPING', [
              'Invalid Column Mapping:',
              'expect an array from column function,',
              `got ${JSON.stringify(headers)}`
            ], this.options, this.__infoField(), {
              headers: headers,
            })
          );
        }
        const normalizedHeaders = normalize_columns_array(headers);
        this.state.expectedRecordLength = normalizedHeaders.length;
        this.options.columns = normalizedHeaders;
        this.__resetRecord();
        return;
      }catch(err){
        return err;
      }
    },
    __resetRecord: function(){
      if(this.options.raw === true){
        this.state.rawBuffer.reset();
      }
      this.state.error = undefined;
      this.state.record = [];
      this.state.record_length = 0;
    },
    __onField: function(){
      const {cast, encoding, rtrim, max_record_size} = this.options;
      const {enabled, wasQuoting} = this.state;
      // Short circuit for the from_line options
      if(enabled === false){
        return this.__resetField();
      }
      let field = this.state.field.toString(encoding);
      if(rtrim === true && wasQuoting === false){
        field = field.trimRight();
      }
      if(cast === true){
        const [err, f] = this.__cast(field);
        if(err !== undefined) return err;
        field = f;
      }
      this.state.record.push(field);
      // Increment record length if record size must not exceed a limit
      if(max_record_size !== 0 && typeof field === 'string'){
        this.state.record_length += field.length;
      }
      this.__resetField();
    },
    __resetField: function(){
      this.state.field.reset();
      this.state.wasQuoting = false;
    },
    __push: function(record, push){
      const {on_record} = this.options;
      if(on_record !== undefined){
        const info = this.__infoRecord();
        try{
          record = on_record.call(null, record, info);
        }catch(err){
          return err;
        }
        if(record === undefined || record === null){ return; }
      }
      push(record);
    },
    // Return a tuple with the error and the casted value
    __cast: function(field){
      const {columns, relax_column_count} = this.options;
      const isColumns = Array.isArray(columns);
      // Dont loose time calling cast
      // because the final record is an object
      // and this field can't be associated to a key present in columns
      if(isColumns === true && relax_column_count && this.options.columns.length <= this.state.record.length){
        return [undefined, undefined];
      }
      if(this.state.castField !== null){
        try{
          const info = this.__infoField();
          return [undefined, this.state.castField.call(null, field, info)];
        }catch(err){
          return [err];
        }
      }
      if(this.__isFloat(field)){
        return [undefined, parseFloat(field)];
      }else if(this.options.cast_date !== false){
        const info = this.__infoField();
        return [undefined, this.options.cast_date.call(null, field, info)];
      }
      return [undefined, field];
    },
    // Helper to test if a character is a space or a line delimiter
    __isCharTrimable: function(buf, pos){
      const isTrim = (buf, pos) => {
        const {timchars} = this.state;
        loop1: for(let i = 0; i < timchars.length; i++){
          const timchar = timchars[i];
          for(let j = 0; j < timchar.length; j++){
            if(timchar[j] !== buf[pos+j]) continue loop1;
          }
          return timchar.length;
        }
        return 0;
      };
      return isTrim(buf, pos);
    },
    // Keep it in case we implement the `cast_int` option
    // __isInt(value){
    //   // return Number.isInteger(parseInt(value))
    //   // return !isNaN( parseInt( obj ) );
    //   return /^(\-|\+)?[1-9][0-9]*$/.test(value)
    // }
    __isFloat: function(value){
      return (value - parseFloat(value) + 1) >= 0; // Borrowed from jquery
    },
    __compareBytes: function(sourceBuf, targetBuf, targetPos, firstByte){
      if(sourceBuf[0] !== firstByte) return 0;
      const sourceLength = sourceBuf.length;
      for(let i = 1; i < sourceLength; i++){
        if(sourceBuf[i] !== targetBuf[targetPos+i]) return 0;
      }
      return sourceLength;
    },
    __isDelimiter: function(buf, pos, chr){
      const {delimiter, ignore_last_delimiters} = this.options;
      if(ignore_last_delimiters === true && this.state.record.length === this.options.columns.length - 1){
        return 0;
      }else if(ignore_last_delimiters !== false && typeof ignore_last_delimiters === 'number' && this.state.record.length === ignore_last_delimiters - 1){
        return 0;
      }
      loop1: for(let i = 0; i < delimiter.length; i++){
        const del = delimiter[i];
        if(del[0] === chr){
          for(let j = 1; j < del.length; j++){
            if(del[j] !== buf[pos+j]) continue loop1;
          }
          return del.length;
        }
      }
      return 0;
    },
    __isRecordDelimiter: function(chr, buf, pos){
      const {record_delimiter} = this.options;
      const recordDelimiterLength = record_delimiter.length;
      loop1: for(let i = 0; i < recordDelimiterLength; i++){
        const rd = record_delimiter[i];
        const rdLength = rd.length;
        if(rd[0] !== chr){
          continue;
        }
        for(let j = 1; j < rdLength; j++){
          if(rd[j] !== buf[pos+j]){
            continue loop1;
          }
        }
        return rd.length;
      }
      return 0;
    },
    __isEscape: function(buf, pos, chr){
      const {escape} = this.options;
      if(escape === null) return false;
      const l = escape.length;
      if(escape[0] === chr){
        for(let i = 0; i < l; i++){
          if(escape[i] !== buf[pos+i]){
            return false;
          }
        }
        return true;
      }
      return false;
    },
    __isQuote: function(buf, pos){
      const {quote} = this.options;
      if(quote === null) return false;
      const l = quote.length;
      for(let i = 0; i < l; i++){
        if(quote[i] !== buf[pos+i]){
          return false;
        }
      }
      return true;
    },
    __autoDiscoverRecordDelimiter: function(buf, pos){
      const { encoding } = this.options;
      // Note, we don't need to cache this information in state,
      // It is only called on the first line until we find out a suitable
      // record delimiter.
      const rds = [
        // Important, the windows line ending must be before mac os 9
        Buffer.from('\r\n', encoding),
        Buffer.from('\n', encoding),
        Buffer.from('\r', encoding),
      ];
      loop: for(let i = 0; i < rds.length; i++){
        const l = rds[i].length;
        for(let j = 0; j < l; j++){
          if(rds[i][j] !== buf[pos + j]){
            continue loop;
          }
        }
        this.options.record_delimiter.push(rds[i]);
        this.state.recordDelimiterMaxLength = rds[i].length;
        return rds[i].length;
      }
      return 0;
    },
    __error: function(msg){
      const {encoding, raw, skip_records_with_error} = this.options;
      const err = typeof msg === 'string' ? new Error(msg) : msg;
      if(skip_records_with_error){
        this.state.recordHasError = true;
        if(this.options.on_skip !== undefined){
          this.options.on_skip(err, raw ? this.state.rawBuffer.toString(encoding) : undefined);
        }
        // this.emit('skip', err, raw ? this.state.rawBuffer.toString(encoding) : undefined);
        return undefined;
      }else {
        return err;
      }
    },
    __infoDataSet: function(){
      return {
        ...this.info,
        columns: this.options.columns
      };
    },
    __infoRecord: function(){
      const {columns, raw, encoding} = this.options;
      return {
        ...this.__infoDataSet(),
        error: this.state.error,
        header: columns === true,
        index: this.state.record.length,
        raw: raw ? this.state.rawBuffer.toString(encoding) : undefined
      };
    },
    __infoField: function(){
      const {columns} = this.options;
      const isColumns = Array.isArray(columns);
      return {
        ...this.__infoRecord(),
        column: isColumns === true ?
          (columns.length > this.state.record.length ?
            columns[this.state.record.length].name :
            null
          ) :
          this.state.record.length,
        quoting: this.state.wasQuoting,
      };
    }
  };
};

const parse = function(data, opts={}){
  if(typeof data === 'string'){
    data = Buffer.from(data);
  }
  const records = opts && opts.objname ? {} : [];
  const parser = transform(opts);
  const push = (record) => {
    if(parser.options.objname === undefined)
      records.push(record);
    else {
      records[record[0]] = record[1];
    }
  };
  const close = () => {};
  const err1 = parser.parse(data, false, push, close);
  if(err1 !== undefined) throw err1;
  const err2 = parser.parse(undefined, true, push, close);
  if(err2 !== undefined) throw err2;
  return records;
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qix3Q0FBd0M7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsZ0RBQWdEO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJCQUEyQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvdkJEO0FBQ0E7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFNBQVM7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLE9BQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFNBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBLDhCQUE4Qjs7QUFFOUI7QUFDQSwyQ0FBMkMsVUFBVTtBQUNyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUyxXQUFXOztBQUVwQjtBQUNBO0FBQ0E7QUFDQSxTQUFTLFdBQVc7O0FBRXBCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLFdBQVc7O0FBRXBCO0FBQ0E7QUFDQSxTQUFTLFVBQVU7O0FBRW5CO0FBQ0E7O0FBRUEsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3Qjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQjs7QUFFcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLGlCQUFpQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGVBQWU7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EseUJBQXlCLFFBQVE7QUFDakM7QUFDQSxzQkFBc0IsZUFBZTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLFNBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLG9CQUFvQixjQUFjO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3REFBd0QsT0FBTztBQUMvRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0RBQXdELE9BQU87QUFDL0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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QTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9kYXlqcy9kYXlqcy5taW4uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9maWxlLXNhdmVyL2Rpc3QvRmlsZVNhdmVyLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdmVyc2lvbi50cyIsIndlYnBhY2s6Ly8vLi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9vZngtc2VjdXJpdHktc3RvY2tzLnRzIiwid2VicGFjazovLy8uL3BhLTUyOS1jc3YtdHJhbnNmb3JtZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy94MmpzL3gyanMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3YtcGFyc2UvZGlzdC9lc20vc3luYy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6KHQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczp0fHxzZWxmKS5kYXlqcz1lKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9MWUzLGU9NmU0LG49MzZlNSxyPVwibWlsbGlzZWNvbmRcIixpPVwic2Vjb25kXCIscz1cIm1pbnV0ZVwiLHU9XCJob3VyXCIsYT1cImRheVwiLG89XCJ3ZWVrXCIsYz1cIm1vbnRoXCIsZj1cInF1YXJ0ZXJcIixoPVwieWVhclwiLGQ9XCJkYXRlXCIsbD1cIkludmFsaWQgRGF0ZVwiLCQ9L14oXFxkezR9KVstL10/KFxcZHsxLDJ9KT9bLS9dPyhcXGR7MCwyfSlbVHRcXHNdKihcXGR7MSwyfSk/Oj8oXFxkezEsMn0pPzo/KFxcZHsxLDJ9KT9bLjpdPyhcXGQrKT8kLyx5PS9cXFsoW15cXF1dKyldfFl7MSw0fXxNezEsNH18RHsxLDJ9fGR7MSw0fXxIezEsMn18aHsxLDJ9fGF8QXxtezEsMn18c3sxLDJ9fFp7MSwyfXxTU1MvZyxNPXtuYW1lOlwiZW5cIix3ZWVrZGF5czpcIlN1bmRheV9Nb25kYXlfVHVlc2RheV9XZWRuZXNkYXlfVGh1cnNkYXlfRnJpZGF5X1NhdHVyZGF5XCIuc3BsaXQoXCJfXCIpLG1vbnRoczpcIkphbnVhcnlfRmVicnVhcnlfTWFyY2hfQXByaWxfTWF5X0p1bmVfSnVseV9BdWd1c3RfU2VwdGVtYmVyX09jdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXJcIi5zcGxpdChcIl9cIiksb3JkaW5hbDpmdW5jdGlvbih0KXt2YXIgZT1bXCJ0aFwiLFwic3RcIixcIm5kXCIsXCJyZFwiXSxuPXQlMTAwO3JldHVyblwiW1wiK3QrKGVbKG4tMjApJTEwXXx8ZVtuXXx8ZVswXSkrXCJdXCJ9fSxtPWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1TdHJpbmcodCk7cmV0dXJuIXJ8fHIubGVuZ3RoPj1lP3Q6XCJcIitBcnJheShlKzEtci5sZW5ndGgpLmpvaW4obikrdH0sdj17czptLHo6ZnVuY3Rpb24odCl7dmFyIGU9LXQudXRjT2Zmc2V0KCksbj1NYXRoLmFicyhlKSxyPU1hdGguZmxvb3Iobi82MCksaT1uJTYwO3JldHVybihlPD0wP1wiK1wiOlwiLVwiKSttKHIsMixcIjBcIikrXCI6XCIrbShpLDIsXCIwXCIpfSxtOmZ1bmN0aW9uIHQoZSxuKXtpZihlLmRhdGUoKTxuLmRhdGUoKSlyZXR1cm4tdChuLGUpO3ZhciByPTEyKihuLnllYXIoKS1lLnllYXIoKSkrKG4ubW9udGgoKS1lLm1vbnRoKCkpLGk9ZS5jbG9uZSgpLmFkZChyLGMpLHM9bi1pPDAsdT1lLmNsb25lKCkuYWRkKHIrKHM/LTE6MSksYyk7cmV0dXJuKygtKHIrKG4taSkvKHM/aS11OnUtaSkpfHwwKX0sYTpmdW5jdGlvbih0KXtyZXR1cm4gdDwwP01hdGguY2VpbCh0KXx8MDpNYXRoLmZsb29yKHQpfSxwOmZ1bmN0aW9uKHQpe3JldHVybntNOmMseTpoLHc6byxkOmEsRDpkLGg6dSxtOnMsczppLG1zOnIsUTpmfVt0XXx8U3RyaW5nKHR8fFwiXCIpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvcyQvLFwiXCIpfSx1OmZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10fX0sZz1cImVuXCIsRD17fTtEW2ddPU07dmFyIHA9XCIkaXNEYXlqc09iamVjdFwiLFM9ZnVuY3Rpb24odCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBffHwhKCF0fHwhdFtwXSl9LHc9ZnVuY3Rpb24gdChlLG4scil7dmFyIGk7aWYoIWUpcmV0dXJuIGc7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpe3ZhciBzPWUudG9Mb3dlckNhc2UoKTtEW3NdJiYoaT1zKSxuJiYoRFtzXT1uLGk9cyk7dmFyIHU9ZS5zcGxpdChcIi1cIik7aWYoIWkmJnUubGVuZ3RoPjEpcmV0dXJuIHQodVswXSl9ZWxzZXt2YXIgYT1lLm5hbWU7RFthXT1lLGk9YX1yZXR1cm4hciYmaSYmKGc9aSksaXx8IXImJmd9LE89ZnVuY3Rpb24odCxlKXtpZihTKHQpKXJldHVybiB0LmNsb25lKCk7dmFyIG49XCJvYmplY3RcIj09dHlwZW9mIGU/ZTp7fTtyZXR1cm4gbi5kYXRlPXQsbi5hcmdzPWFyZ3VtZW50cyxuZXcgXyhuKX0sYj12O2IubD13LGIuaT1TLGIudz1mdW5jdGlvbih0LGUpe3JldHVybiBPKHQse2xvY2FsZTplLiRMLHV0YzplLiR1LHg6ZS4keCwkb2Zmc2V0OmUuJG9mZnNldH0pfTt2YXIgXz1mdW5jdGlvbigpe2Z1bmN0aW9uIE0odCl7dGhpcy4kTD13KHQubG9jYWxlLG51bGwsITApLHRoaXMucGFyc2UodCksdGhpcy4keD10aGlzLiR4fHx0Lnh8fHt9LHRoaXNbcF09ITB9dmFyIG09TS5wcm90b3R5cGU7cmV0dXJuIG0ucGFyc2U9ZnVuY3Rpb24odCl7dGhpcy4kZD1mdW5jdGlvbih0KXt2YXIgZT10LmRhdGUsbj10LnV0YztpZihudWxsPT09ZSlyZXR1cm4gbmV3IERhdGUoTmFOKTtpZihiLnUoZSkpcmV0dXJuIG5ldyBEYXRlO2lmKGUgaW5zdGFuY2VvZiBEYXRlKXJldHVybiBuZXcgRGF0ZShlKTtpZihcInN0cmluZ1wiPT10eXBlb2YgZSYmIS9aJC9pLnRlc3QoZSkpe3ZhciByPWUubWF0Y2goJCk7aWYocil7dmFyIGk9clsyXS0xfHwwLHM9KHJbN118fFwiMFwiKS5zdWJzdHJpbmcoMCwzKTtyZXR1cm4gbj9uZXcgRGF0ZShEYXRlLlVUQyhyWzFdLGksclszXXx8MSxyWzRdfHwwLHJbNV18fDAscls2XXx8MCxzKSk6bmV3IERhdGUoclsxXSxpLHJbM118fDEscls0XXx8MCxyWzVdfHwwLHJbNl18fDAscyl9fXJldHVybiBuZXcgRGF0ZShlKX0odCksdGhpcy5pbml0KCl9LG0uaW5pdD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuJGQ7dGhpcy4keT10LmdldEZ1bGxZZWFyKCksdGhpcy4kTT10LmdldE1vbnRoKCksdGhpcy4kRD10LmdldERhdGUoKSx0aGlzLiRXPXQuZ2V0RGF5KCksdGhpcy4kSD10LmdldEhvdXJzKCksdGhpcy4kbT10LmdldE1pbnV0ZXMoKSx0aGlzLiRzPXQuZ2V0U2Vjb25kcygpLHRoaXMuJG1zPXQuZ2V0TWlsbGlzZWNvbmRzKCl9LG0uJHV0aWxzPWZ1bmN0aW9uKCl7cmV0dXJuIGJ9LG0uaXNWYWxpZD1mdW5jdGlvbigpe3JldHVybiEodGhpcy4kZC50b1N0cmluZygpPT09bCl9LG0uaXNTYW1lPWZ1bmN0aW9uKHQsZSl7dmFyIG49Tyh0KTtyZXR1cm4gdGhpcy5zdGFydE9mKGUpPD1uJiZuPD10aGlzLmVuZE9mKGUpfSxtLmlzQWZ0ZXI9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTyh0KTx0aGlzLnN0YXJ0T2YoZSl9LG0uaXNCZWZvcmU9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5lbmRPZihlKTxPKHQpfSxtLiRnPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gYi51KHQpP3RoaXNbZV06dGhpcy5zZXQobix0KX0sbS51bml4PWZ1bmN0aW9uKCl7cmV0dXJuIE1hdGguZmxvb3IodGhpcy52YWx1ZU9mKCkvMWUzKX0sbS52YWx1ZU9mPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQuZ2V0VGltZSgpfSxtLnN0YXJ0T2Y9ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzLHI9ISFiLnUoZSl8fGUsZj1iLnAodCksbD1mdW5jdGlvbih0LGUpe3ZhciBpPWIudyhuLiR1P0RhdGUuVVRDKG4uJHksZSx0KTpuZXcgRGF0ZShuLiR5LGUsdCksbik7cmV0dXJuIHI/aTppLmVuZE9mKGEpfSwkPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGIudyhuLnRvRGF0ZSgpW3RdLmFwcGx5KG4udG9EYXRlKFwic1wiKSwocj9bMCwwLDAsMF06WzIzLDU5LDU5LDk5OV0pLnNsaWNlKGUpKSxuKX0seT10aGlzLiRXLE09dGhpcy4kTSxtPXRoaXMuJEQsdj1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIik7c3dpdGNoKGYpe2Nhc2UgaDpyZXR1cm4gcj9sKDEsMCk6bCgzMSwxMSk7Y2FzZSBjOnJldHVybiByP2woMSxNKTpsKDAsTSsxKTtjYXNlIG86dmFyIGc9dGhpcy4kbG9jYWxlKCkud2Vla1N0YXJ0fHwwLEQ9KHk8Zz95Kzc6eSktZztyZXR1cm4gbChyP20tRDptKyg2LUQpLE0pO2Nhc2UgYTpjYXNlIGQ6cmV0dXJuICQoditcIkhvdXJzXCIsMCk7Y2FzZSB1OnJldHVybiAkKHYrXCJNaW51dGVzXCIsMSk7Y2FzZSBzOnJldHVybiAkKHYrXCJTZWNvbmRzXCIsMik7Y2FzZSBpOnJldHVybiAkKHYrXCJNaWxsaXNlY29uZHNcIiwzKTtkZWZhdWx0OnJldHVybiB0aGlzLmNsb25lKCl9fSxtLmVuZE9mPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnN0YXJ0T2YodCwhMSl9LG0uJHNldD1mdW5jdGlvbih0LGUpe3ZhciBuLG89Yi5wKHQpLGY9XCJzZXRcIisodGhpcy4kdT9cIlVUQ1wiOlwiXCIpLGw9KG49e30sblthXT1mK1wiRGF0ZVwiLG5bZF09ZitcIkRhdGVcIixuW2NdPWYrXCJNb250aFwiLG5baF09ZitcIkZ1bGxZZWFyXCIsblt1XT1mK1wiSG91cnNcIixuW3NdPWYrXCJNaW51dGVzXCIsbltpXT1mK1wiU2Vjb25kc1wiLG5bcl09ZitcIk1pbGxpc2Vjb25kc1wiLG4pW29dLCQ9bz09PWE/dGhpcy4kRCsoZS10aGlzLiRXKTplO2lmKG89PT1jfHxvPT09aCl7dmFyIHk9dGhpcy5jbG9uZSgpLnNldChkLDEpO3kuJGRbbF0oJCkseS5pbml0KCksdGhpcy4kZD15LnNldChkLE1hdGgubWluKHRoaXMuJEQseS5kYXlzSW5Nb250aCgpKSkuJGR9ZWxzZSBsJiZ0aGlzLiRkW2xdKCQpO3JldHVybiB0aGlzLmluaXQoKSx0aGlzfSxtLnNldD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmNsb25lKCkuJHNldCh0LGUpfSxtLmdldD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpc1tiLnAodCldKCl9LG0uYWRkPWZ1bmN0aW9uKHIsZil7dmFyIGQsbD10aGlzO3I9TnVtYmVyKHIpO3ZhciAkPWIucChmKSx5PWZ1bmN0aW9uKHQpe3ZhciBlPU8obCk7cmV0dXJuIGIudyhlLmRhdGUoZS5kYXRlKCkrTWF0aC5yb3VuZCh0KnIpKSxsKX07aWYoJD09PWMpcmV0dXJuIHRoaXMuc2V0KGMsdGhpcy4kTStyKTtpZigkPT09aClyZXR1cm4gdGhpcy5zZXQoaCx0aGlzLiR5K3IpO2lmKCQ9PT1hKXJldHVybiB5KDEpO2lmKCQ9PT1vKXJldHVybiB5KDcpO3ZhciBNPShkPXt9LGRbc109ZSxkW3VdPW4sZFtpXT10LGQpWyRdfHwxLG09dGhpcy4kZC5nZXRUaW1lKCkrcipNO3JldHVybiBiLncobSx0aGlzKX0sbS5zdWJ0cmFjdD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmFkZCgtMSp0LGUpfSxtLmZvcm1hdD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLG49dGhpcy4kbG9jYWxlKCk7aWYoIXRoaXMuaXNWYWxpZCgpKXJldHVybiBuLmludmFsaWREYXRlfHxsO3ZhciByPXR8fFwiWVlZWS1NTS1ERFRISDptbTpzc1pcIixpPWIueih0aGlzKSxzPXRoaXMuJEgsdT10aGlzLiRtLGE9dGhpcy4kTSxvPW4ud2Vla2RheXMsYz1uLm1vbnRocyxmPW4ubWVyaWRpZW0saD1mdW5jdGlvbih0LG4saSxzKXtyZXR1cm4gdCYmKHRbbl18fHQoZSxyKSl8fGlbbl0uc2xpY2UoMCxzKX0sZD1mdW5jdGlvbih0KXtyZXR1cm4gYi5zKHMlMTJ8fDEyLHQsXCIwXCIpfSwkPWZ8fGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj10PDEyP1wiQU1cIjpcIlBNXCI7cmV0dXJuIG4/ci50b0xvd2VyQ2FzZSgpOnJ9O3JldHVybiByLnJlcGxhY2UoeSwoZnVuY3Rpb24odCxyKXtyZXR1cm4gcnx8ZnVuY3Rpb24odCl7c3dpdGNoKHQpe2Nhc2VcIllZXCI6cmV0dXJuIFN0cmluZyhlLiR5KS5zbGljZSgtMik7Y2FzZVwiWVlZWVwiOnJldHVybiBiLnMoZS4keSw0LFwiMFwiKTtjYXNlXCJNXCI6cmV0dXJuIGErMTtjYXNlXCJNTVwiOnJldHVybiBiLnMoYSsxLDIsXCIwXCIpO2Nhc2VcIk1NTVwiOnJldHVybiBoKG4ubW9udGhzU2hvcnQsYSxjLDMpO2Nhc2VcIk1NTU1cIjpyZXR1cm4gaChjLGEpO2Nhc2VcIkRcIjpyZXR1cm4gZS4kRDtjYXNlXCJERFwiOnJldHVybiBiLnMoZS4kRCwyLFwiMFwiKTtjYXNlXCJkXCI6cmV0dXJuIFN0cmluZyhlLiRXKTtjYXNlXCJkZFwiOnJldHVybiBoKG4ud2Vla2RheXNNaW4sZS4kVyxvLDIpO2Nhc2VcImRkZFwiOnJldHVybiBoKG4ud2Vla2RheXNTaG9ydCxlLiRXLG8sMyk7Y2FzZVwiZGRkZFwiOnJldHVybiBvW2UuJFddO2Nhc2VcIkhcIjpyZXR1cm4gU3RyaW5nKHMpO2Nhc2VcIkhIXCI6cmV0dXJuIGIucyhzLDIsXCIwXCIpO2Nhc2VcImhcIjpyZXR1cm4gZCgxKTtjYXNlXCJoaFwiOnJldHVybiBkKDIpO2Nhc2VcImFcIjpyZXR1cm4gJChzLHUsITApO2Nhc2VcIkFcIjpyZXR1cm4gJChzLHUsITEpO2Nhc2VcIm1cIjpyZXR1cm4gU3RyaW5nKHUpO2Nhc2VcIm1tXCI6cmV0dXJuIGIucyh1LDIsXCIwXCIpO2Nhc2VcInNcIjpyZXR1cm4gU3RyaW5nKGUuJHMpO2Nhc2VcInNzXCI6cmV0dXJuIGIucyhlLiRzLDIsXCIwXCIpO2Nhc2VcIlNTU1wiOnJldHVybiBiLnMoZS4kbXMsMyxcIjBcIik7Y2FzZVwiWlwiOnJldHVybiBpfXJldHVybiBudWxsfSh0KXx8aS5yZXBsYWNlKFwiOlwiLFwiXCIpfSkpfSxtLnV0Y09mZnNldD1mdW5jdGlvbigpe3JldHVybiAxNSotTWF0aC5yb3VuZCh0aGlzLiRkLmdldFRpbWV6b25lT2Zmc2V0KCkvMTUpfSxtLmRpZmY9ZnVuY3Rpb24ocixkLGwpe3ZhciAkLHk9dGhpcyxNPWIucChkKSxtPU8ociksdj0obS51dGNPZmZzZXQoKS10aGlzLnV0Y09mZnNldCgpKSplLGc9dGhpcy1tLEQ9ZnVuY3Rpb24oKXtyZXR1cm4gYi5tKHksbSl9O3N3aXRjaChNKXtjYXNlIGg6JD1EKCkvMTI7YnJlYWs7Y2FzZSBjOiQ9RCgpO2JyZWFrO2Nhc2UgZjokPUQoKS8zO2JyZWFrO2Nhc2UgbzokPShnLXYpLzYwNDhlNTticmVhaztjYXNlIGE6JD0oZy12KS84NjRlNTticmVhaztjYXNlIHU6JD1nL247YnJlYWs7Y2FzZSBzOiQ9Zy9lO2JyZWFrO2Nhc2UgaTokPWcvdDticmVhaztkZWZhdWx0OiQ9Z31yZXR1cm4gbD8kOmIuYSgkKX0sbS5kYXlzSW5Nb250aD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVuZE9mKGMpLiREfSxtLiRsb2NhbGU9ZnVuY3Rpb24oKXtyZXR1cm4gRFt0aGlzLiRMXX0sbS5sb2NhbGU9ZnVuY3Rpb24odCxlKXtpZighdClyZXR1cm4gdGhpcy4kTDt2YXIgbj10aGlzLmNsb25lKCkscj13KHQsZSwhMCk7cmV0dXJuIHImJihuLiRMPXIpLG59LG0uY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gYi53KHRoaXMuJGQsdGhpcyl9LG0udG9EYXRlPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBEYXRlKHRoaXMudmFsdWVPZigpKX0sbS50b0pTT049ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pc1ZhbGlkKCk/dGhpcy50b0lTT1N0cmluZygpOm51bGx9LG0udG9JU09TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b0lTT1N0cmluZygpfSxtLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQudG9VVENTdHJpbmcoKX0sTX0oKSxrPV8ucHJvdG90eXBlO3JldHVybiBPLnByb3RvdHlwZT1rLFtbXCIkbXNcIixyXSxbXCIkc1wiLGldLFtcIiRtXCIsc10sW1wiJEhcIix1XSxbXCIkV1wiLGFdLFtcIiRNXCIsY10sW1wiJHlcIixoXSxbXCIkRFwiLGRdXS5mb3JFYWNoKChmdW5jdGlvbih0KXtrW3RbMV1dPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLiRnKGUsdFswXSx0WzFdKX19KSksTy5leHRlbmQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC4kaXx8KHQoZSxfLE8pLHQuJGk9ITApLE99LE8ubG9jYWxlPXcsTy5pc0RheWpzPVMsTy51bml4PWZ1bmN0aW9uKHQpe3JldHVybiBPKDFlMyp0KX0sTy5lbj1EW2ddLE8uTHM9RCxPLnA9e30sT30pKTsiLCIoZnVuY3Rpb24oYSxiKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLGIpO2Vsc2UgaWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGV4cG9ydHMpYigpO2Vsc2V7YigpLGEuRmlsZVNhdmVyPXtleHBvcnRzOnt9fS5leHBvcnRzfX0pKHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGEsYil7cmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGI/Yj17YXV0b0JvbTohMX06XCJvYmplY3RcIiE9dHlwZW9mIGImJihjb25zb2xlLndhcm4oXCJEZXByZWNhdGVkOiBFeHBlY3RlZCB0aGlyZCBhcmd1bWVudCB0byBiZSBhIG9iamVjdFwiKSxiPXthdXRvQm9tOiFifSksYi5hdXRvQm9tJiYvXlxccyooPzp0ZXh0XFwvXFxTKnxhcHBsaWNhdGlvblxcL3htbHxcXFMqXFwvXFxTKlxcK3htbClcXHMqOy4qY2hhcnNldFxccyo9XFxzKnV0Zi04L2kudGVzdChhLnR5cGUpP25ldyBCbG9iKFtcIlxcdUZFRkZcIixhXSx7dHlwZTphLnR5cGV9KTphfWZ1bmN0aW9uIGMoYSxiLGMpe3ZhciBkPW5ldyBYTUxIdHRwUmVxdWVzdDtkLm9wZW4oXCJHRVRcIixhKSxkLnJlc3BvbnNlVHlwZT1cImJsb2JcIixkLm9ubG9hZD1mdW5jdGlvbigpe2coZC5yZXNwb25zZSxiLGMpfSxkLm9uZXJyb3I9ZnVuY3Rpb24oKXtjb25zb2xlLmVycm9yKFwiY291bGQgbm90IGRvd25sb2FkIGZpbGVcIil9LGQuc2VuZCgpfWZ1bmN0aW9uIGQoYSl7dmFyIGI9bmV3IFhNTEh0dHBSZXF1ZXN0O2Iub3BlbihcIkhFQURcIixhLCExKTt0cnl7Yi5zZW5kKCl9Y2F0Y2goYSl7fXJldHVybiAyMDA8PWIuc3RhdHVzJiYyOTk+PWIuc3RhdHVzfWZ1bmN0aW9uIGUoYSl7dHJ5e2EuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcImNsaWNrXCIpKX1jYXRjaChjKXt2YXIgYj1kb2N1bWVudC5jcmVhdGVFdmVudChcIk1vdXNlRXZlbnRzXCIpO2IuaW5pdE1vdXNlRXZlbnQoXCJjbGlja1wiLCEwLCEwLHdpbmRvdywwLDAsMCw4MCwyMCwhMSwhMSwhMSwhMSwwLG51bGwpLGEuZGlzcGF0Y2hFdmVudChiKX19dmFyIGY9XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmd2luZG93LndpbmRvdz09PXdpbmRvdz93aW5kb3c6XCJvYmplY3RcIj09dHlwZW9mIHNlbGYmJnNlbGYuc2VsZj09PXNlbGY/c2VsZjpcIm9iamVjdFwiPT10eXBlb2YgZ2xvYmFsJiZnbG9iYWwuZ2xvYmFsPT09Z2xvYmFsP2dsb2JhbDp2b2lkIDAsYT1mLm5hdmlnYXRvciYmL01hY2ludG9zaC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSYmL0FwcGxlV2ViS2l0Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpJiYhL1NhZmFyaS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxnPWYuc2F2ZUFzfHwoXCJvYmplY3RcIiE9dHlwZW9mIHdpbmRvd3x8d2luZG93IT09Zj9mdW5jdGlvbigpe306XCJkb3dubG9hZFwiaW4gSFRNTEFuY2hvckVsZW1lbnQucHJvdG90eXBlJiYhYT9mdW5jdGlvbihiLGcsaCl7dmFyIGk9Zi5VUkx8fGYud2Via2l0VVJMLGo9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7Zz1nfHxiLm5hbWV8fFwiZG93bmxvYWRcIixqLmRvd25sb2FkPWcsai5yZWw9XCJub29wZW5lclwiLFwic3RyaW5nXCI9PXR5cGVvZiBiPyhqLmhyZWY9YixqLm9yaWdpbj09PWxvY2F0aW9uLm9yaWdpbj9lKGopOmQoai5ocmVmKT9jKGIsZyxoKTplKGosai50YXJnZXQ9XCJfYmxhbmtcIikpOihqLmhyZWY9aS5jcmVhdGVPYmplY3RVUkwoYiksc2V0VGltZW91dChmdW5jdGlvbigpe2kucmV2b2tlT2JqZWN0VVJMKGouaHJlZil9LDRFNCksc2V0VGltZW91dChmdW5jdGlvbigpe2Uoail9LDApKX06XCJtc1NhdmVPck9wZW5CbG9iXCJpbiBuYXZpZ2F0b3I/ZnVuY3Rpb24oZixnLGgpe2lmKGc9Z3x8Zi5uYW1lfHxcImRvd25sb2FkXCIsXCJzdHJpbmdcIiE9dHlwZW9mIGYpbmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IoYihmLGgpLGcpO2Vsc2UgaWYoZChmKSljKGYsZyxoKTtlbHNle3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2kuaHJlZj1mLGkudGFyZ2V0PVwiX2JsYW5rXCIsc2V0VGltZW91dChmdW5jdGlvbigpe2UoaSl9KX19OmZ1bmN0aW9uKGIsZCxlLGcpe2lmKGc9Z3x8b3BlbihcIlwiLFwiX2JsYW5rXCIpLGcmJihnLmRvY3VtZW50LnRpdGxlPWcuZG9jdW1lbnQuYm9keS5pbm5lclRleHQ9XCJkb3dubG9hZGluZy4uLlwiKSxcInN0cmluZ1wiPT10eXBlb2YgYilyZXR1cm4gYyhiLGQsZSk7dmFyIGg9XCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIj09PWIudHlwZSxpPS9jb25zdHJ1Y3Rvci9pLnRlc3QoZi5IVE1MRWxlbWVudCl8fGYuc2FmYXJpLGo9L0NyaU9TXFwvW1xcZF0rLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO2lmKChqfHxoJiZpfHxhKSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIEZpbGVSZWFkZXIpe3ZhciBrPW5ldyBGaWxlUmVhZGVyO2sub25sb2FkZW5kPWZ1bmN0aW9uKCl7dmFyIGE9ay5yZXN1bHQ7YT1qP2E6YS5yZXBsYWNlKC9eZGF0YTpbXjtdKjsvLFwiZGF0YTphdHRhY2htZW50L2ZpbGU7XCIpLGc/Zy5sb2NhdGlvbi5ocmVmPWE6bG9jYXRpb249YSxnPW51bGx9LGsucmVhZEFzRGF0YVVSTChiKX1lbHNle3ZhciBsPWYuVVJMfHxmLndlYmtpdFVSTCxtPWwuY3JlYXRlT2JqZWN0VVJMKGIpO2c/Zy5sb2NhdGlvbj1tOmxvY2F0aW9uLmhyZWY9bSxnPW51bGwsc2V0VGltZW91dChmdW5jdGlvbigpe2wucmV2b2tlT2JqZWN0VVJMKG0pfSw0RTQpfX0pO2Yuc2F2ZUFzPWcuc2F2ZUFzPWcsXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmKG1vZHVsZS5leHBvcnRzPWcpfSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZpbGVTYXZlci5taW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFwcFZlcnNpb24gPSB2b2lkIDA7XG5jbGFzcyBBcHBWZXJzaW9uIHtcbn1cbmV4cG9ydHMuQXBwVmVyc2lvbiA9IEFwcFZlcnNpb247XG5BcHBWZXJzaW9uLlZFUlNJT04gPSBcImRiMGUwZjVcIjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QYTUyOUNzdlRvT2Z4Q29udmVydGVyID0gdm9pZCAwO1xuY29uc3QgcGFfNTI5X2Nzdl90cmFuc2Zvcm1lcl8xID0gcmVxdWlyZShcIi4vcGEtNTI5LWNzdi10cmFuc2Zvcm1lclwiKTtcbmNvbnN0IG9meF9zZWN1cml0eV9zdG9ja3NfMSA9IHJlcXVpcmUoXCIuL29meC1zZWN1cml0eS1zdG9ja3NcIik7XG5jb25zdCBmaWxlX3NhdmVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImZpbGUtc2F2ZXJcIikpO1xuY29uc3QgYXBwX3ZlcnNpb25fMSA9IHJlcXVpcmUoXCIuL2FwcC12ZXJzaW9uXCIpO1xuY29uc29sZS5sb2coXCJBcHAgdmVyc2lvbjogXCIgKyBhcHBfdmVyc2lvbl8xLkFwcFZlcnNpb24uVkVSU0lPTik7XG5jbGFzcyBQYTUyOUNzdlRvT2Z4Q29udmVydGVyIHtcbiAgICBzdGF0aWMgY29udmVydENzdlRvT2Z4KGNzdikge1xuICAgICAgICBsZXQgY3JlYXRlRmFrZSA9IHRoaXMuY3JlYXRlRmFrZVRyYW5zYWN0aW9ucygpO1xuICAgICAgICBsZXQgY29uZmlnID0gcGFfNTI5X2Nzdl90cmFuc2Zvcm1lcl8xLlBhNTI5Q3N2VHJhbnNmb3JtZXIuY29udmVydENzdlRvT2Z4Q3JlYXRpb25EdG8oY3N2LCBjcmVhdGVGYWtlKTtcbiAgICAgICAgbGV0IG9meCA9IG9meF9zZWN1cml0eV9zdG9ja3NfMS5PZnhTZWN1cml0eUdlbmVyYXRvci5nZW5lcmF0ZU9meChjb25maWcpO1xuICAgICAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFtvZnhdLCB7IHR5cGU6IFwidGV4dC9wbGFpbjtjaGFyc2V0PXV0Zi04XCIgfSk7XG4gICAgICAgIGZpbGVfc2F2ZXJfMS5kZWZhdWx0LnNhdmVBcyhibG9iLCBcInBhLTUyOS1zdGF0ZW1lbnQub2Z4XCIpO1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlRmFrZVRyYW5zYWN0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYWtlLXRyYW5zYWN0aW9ucycpLmNoZWNrZWQ7XG4gICAgfVxufVxuZXhwb3J0cy5QYTUyOUNzdlRvT2Z4Q29udmVydGVyID0gUGE1MjlDc3ZUb09meENvbnZlcnRlcjtcbmNvbnN0IGRyb3BBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3AtYXJlYScpO1xuZHJvcEFyZWEuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRyb3BBcmVhLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZTBlMGUwJztcbn0pO1xuZHJvcEFyZWEuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgKCkgPT4ge1xuICAgIGRyb3BBcmVhLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZjlmOWY5Jztcbn0pO1xuZHJvcEFyZWEuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZHJvcEFyZWEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmOWY5ZjknO1xuICAgIGNvbnN0IGZpbGVzID0gZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzO1xuICAgIGlmIChmaWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBmaWxlc1swXTtcbiAgICAgICAgY29uc29sZS5sb2coYEZpbGUgbmFtZTogJHtmaWxlLm5hbWV9YCk7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgIFBhNTI5Q3N2VG9PZnhDb252ZXJ0ZXIuY29udmVydENzdlRvT2Z4KGNvbnRlbnQudG9TdHJpbmcoKSk7XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSByZWFkaW5nIHRoZSBmaWxlXCIsIGUpO1xuICAgICAgICB9O1xuICAgICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcbiAgICB9XG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5PZnhTZWN1cml0eUdlbmVyYXRvciA9IHZvaWQgMDtcbmNvbnN0IGRheWpzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImRheWpzXCIpKTtcbmNvbnN0IHgyanNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwieDJqc1wiKSk7XG4vLyBpbXBvcnQgeG1sRm9ybWF0IGZyb20gXCJ4bWwtZm9ybWF0dGVyXCJcbmNsYXNzIE9meFNlY3VyaXR5R2VuZXJhdG9yIHtcbiAgICBzdGF0aWMgZ2VuZXJhdGVPZngoY29uZmlnKSB7XG4gICAgICAgIHRoaXMuY2hlY2tUcmFuc2FjdGlvblNpZ25zKGNvbmZpZy5tdXR1YWxGdW5kVHJhbnNhY3Rpb25zKTtcbiAgICAgICAgdmFyIHgyanMgPSBuZXcgeDJqc18xLmRlZmF1bHQoeyBzZWxmQ2xvc2luZ0VsZW1lbnRzOiBmYWxzZSB9KTtcbiAgICAgICAgbGV0IGpzID0geDJqcy54bWwyanMoT0ZYX1NUT0NLX1RFTVBMQVRFKTtcbiAgICAgICAganMuT0ZYLklOVlNUTVRNU0dTUlNWMS5JTlZTVE1UVFJOUlMuSU5WU1RNVFJTLklOVkFDQ1RGUk9NLkFDQ1RJRCA9IGNvbmZpZy5hY2NvdW50SWQ7XG4gICAgICAgIGpzLk9GWC5JTlZTVE1UTVNHU1JTVjEuSU5WU1RNVFRSTlJTLklOVlNUTVRSUy5JTlZBQ0NURlJPTS5CUk9LRVJJRCA9IGNvbmZpZy5icm9rZXJJZDtcbiAgICAgICAganMuT0ZYLklOVlNUTVRNU0dTUlNWMS5JTlZTVE1UVFJOUlMuSU5WU1RNVFJTLkRUQVNPRiA9IHRoaXMuZm9ybWF0RGF0ZShjb25maWcudXBkYXRlRGF0ZVRpbWUpO1xuICAgICAgICBqcy5PRlguSU5WU1RNVE1TR1NSU1YxLklOVlNUTVRUUk5SUy5JTlZTVE1UUlMuSU5WVFJBTkxJU1QuRFRTVEFSVCA9IHRoaXMuZm9ybWF0RGF0ZShjb25maWcuc3RhcnREYXRlKTtcbiAgICAgICAganMuT0ZYLklOVlNUTVRNU0dTUlNWMS5JTlZTVE1UVFJOUlMuSU5WU1RNVFJTLklOVlRSQU5MSVNULkRURU5EID0gdGhpcy5mb3JtYXREYXRlKGNvbmZpZy5lbmREYXRlKTtcbiAgICAgICAgbGV0IGludmVzdG1lbnRUcmFuTGlzdCA9IGpzLk9GWC5JTlZTVE1UTVNHU1JTVjEuSU5WU1RNVFRSTlJTLklOVlNUTVRSUy5JTlZUUkFOTElTVDtcbiAgICAgICAgaW52ZXN0bWVudFRyYW5MaXN0LkJVWU1GID0gW107XG4gICAgICAgIGludmVzdG1lbnRUcmFuTGlzdC5TRUxMTUYgPSBbXTtcbiAgICAgICAgY29uZmlnLm11dHVhbEZ1bmRUcmFuc2FjdGlvbnMuZm9yRWFjaChzaW5nbGVUcmFuID0+IHtcbiAgICAgICAgICAgIGlmIChzaW5nbGVUcmFuLnNoYXJlcyA+PSAwKVxuICAgICAgICAgICAgICAgIGludmVzdG1lbnRUcmFuTGlzdC5CVVlNRi5wdXNoKHRoaXMuY3JlYXRlQnV5VHJhbnNhY3Rpb24oc2luZ2xlVHJhbikpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGludmVzdG1lbnRUcmFuTGlzdC5TRUxMTUYucHVzaCh0aGlzLmNyZWF0ZVNlbGxUcmFuc2FjdGlvbihzaW5nbGVUcmFuKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBqcy5PRlguU0VDTElTVE1TR1NSU1YxLlNFQ0xJU1QuTUZJTkZPID0gY29uZmlnLnNlY3VyaXR5UHJpY2VJbmZvLm1hcChzaW5nbGVTZWN1cml0eSA9PiB7XG4gICAgICAgICAgICBsZXQgbWZJbmZvID0ge1xuICAgICAgICAgICAgICAgIFNFQ0lORk86IHRoaXMuY29udmVydFNlY3VyaXR5SW5mbyhzaW5nbGVTZWN1cml0eSksXG4gICAgICAgICAgICAgICAgTUZUWVBFOiBcIk9QRU5FTkRcIixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gbWZJbmZvO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGludmVzdG1lbnRUcmFuTGlzdC5CVVlNRi5sZW5ndGggPT09IDApXG4gICAgICAgICAgICBkZWxldGUgaW52ZXN0bWVudFRyYW5MaXN0LkJVWU1GO1xuICAgICAgICBpZiAoaW52ZXN0bWVudFRyYW5MaXN0LlNFTExNRi5sZW5ndGggPT09IDApXG4gICAgICAgICAgICBkZWxldGUgaW52ZXN0bWVudFRyYW5MaXN0LlNFTExNRjtcbiAgICAgICAgaWYgKGpzLk9GWC5TRUNMSVNUTVNHU1JTVjEuU0VDTElTVC5NRklORk8ubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgZGVsZXRlIGpzLk9GWC5TRUNMSVNUTVNHU1JTVjEuU0VDTElTVC5NRklORk87XG4gICAgICAgIHZhciB4bWxCb2R5ID0geDJqcy5qczJ4bWwoanMpO1xuICAgICAgICB2YXIgZmlsZVRleHQgPSBPRlhfU1RPQ0tfSEVBREVSICsgeG1sQm9keTtcbiAgICAgICAgZmlsZVRleHQgPSBmaWxlVGV4dC5yZXBsYWNlKC8mI3gyNzsvZywgXCInXCIpO1xuICAgICAgICBmaWxlVGV4dCA9IGZpbGVUZXh0LnJlcGxhY2UoLyZhcG9zOy9nLCBcIidcIik7XG4gICAgICAgIGZpbGVUZXh0ID0gZmlsZVRleHQucmVwbGFjZSgvJmFtcDsvZywgXCImXCIpO1xuICAgICAgICBmaWxlVGV4dCA9IGZpbGVUZXh0LnJlcGxhY2UoLyZxdW90Oy9nLCAnXCInKTtcbiAgICAgICAgcmV0dXJuIGZpbGVUZXh0O1xuICAgICAgICAvLyByZXR1cm4geG1sRm9ybWF0KGZpbGVUZXh0LCB7IGluZGVudGF0aW9uOiBcIiAgXCIgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBjaGVja1RyYW5zYWN0aW9uU2lnbnMobXV0dWFsRnVuZFRyYW5zYWN0aW9ucykge1xuICAgICAgICBsZXQgaW5jb3JyZWN0U2lnbiA9IG11dHVhbEZ1bmRUcmFuc2FjdGlvbnMuZmluZChzaW5nbGUgPT4gc2luZ2xlLmRvbGxhclRvdGFsICogc2luZ2xlLnNoYXJlcyA+IDApO1xuICAgICAgICBpZiAoaW5jb3JyZWN0U2lnbilcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkluY29ycmVjdCBzaWduIG9uIHNlY3VyaXR5IHRyYW5zYWN0aW9uLiAgQnV5IHRyYW5zYWN0aW9ucyBzaG91bGQgaGF2ZSBwb3NpdGl2ZSBzaGFyZXMsIG5lZ2F0aXZlIGRvbGxhcnMuIFNhbGVzIGFyZSBvcHBvc2l0ZS5cIik7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGVCdXlUcmFuc2FjdGlvbihzaW5nbGVUcmFuKSB7XG4gICAgICAgIGxldCBidXkgPSB7XG4gICAgICAgICAgICBJTlZCVVk6IHRoaXMuY29udmVydFRyYW5zYWN0aW9uKHNpbmdsZVRyYW4pLFxuICAgICAgICAgICAgQlVZVFlQRTogXCJCVVlcIixcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGJ1eTtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZVNlbGxUcmFuc2FjdGlvbihzaW5nbGVUcmFuKSB7XG4gICAgICAgIGxldCBzZWxsID0ge1xuICAgICAgICAgICAgSU5WU0VMTDogdGhpcy5jb252ZXJ0VHJhbnNhY3Rpb24oc2luZ2xlVHJhbiksXG4gICAgICAgICAgICBTRUxMVFlQRTogXCJTRUxMXCIsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBzZWxsO1xuICAgIH1cbiAgICBzdGF0aWMgY29udmVydFNlY3VyaXR5SW5mbyhjcmVhdGlvbkR0bykge1xuICAgICAgICBsZXQgb2Z4SW5mbyA9IHtcbiAgICAgICAgICAgIEZJSUQ6IGNyZWF0aW9uRHRvLmZpaWQsXG4gICAgICAgICAgICBTRUNJRDoge1xuICAgICAgICAgICAgICAgIFVOSVFVRUlEOiBjcmVhdGlvbkR0by5zZWN1cml0eVVpZCxcbiAgICAgICAgICAgICAgICBVTklRVUVJRFRZUEU6IFwiRlVORF9OQU1FXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgU0VDTkFNRTogY3JlYXRpb25EdG8uc2VjdXJpdHlOYW1lLFxuICAgICAgICAgICAgVElDS0VSOiBjcmVhdGlvbkR0by50aWNrZXIsXG4gICAgICAgICAgICBVTklUUFJJQ0U6IGNyZWF0aW9uRHRvLnByaWNlUGVyU2hhcmUsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBvZnhJbmZvO1xuICAgIH1cbiAgICBzdGF0aWMgY29udmVydFRyYW5zYWN0aW9uKGNvbmZpZykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgSU5WVFJBTjoge1xuICAgICAgICAgICAgICAgIERUU0VUVExFOiB0aGlzLmZvcm1hdERhdGUoY29uZmlnLnRyYWRlRGF0ZSksXG4gICAgICAgICAgICAgICAgRFRUUkFERTogdGhpcy5mb3JtYXREYXRlKGNvbmZpZy50cmFkZURhdGUpLFxuICAgICAgICAgICAgICAgIEZJVElEOiBjb25maWcudHJhbnNhY3Rpb25JZCxcbiAgICAgICAgICAgICAgICBNRU1POiBjb25maWcubWVtbyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBTRUNJRDoge1xuICAgICAgICAgICAgICAgIFVOSVFVRUlEOiBjb25maWcuc2VjdXJpdHlJZCxcbiAgICAgICAgICAgICAgICBVTklRVUVJRFRZUEU6IFwiRlVORF9OQU1FXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgU1VCQUNDVEZVTkQ6IFwiQ0FTSFwiLFxuICAgICAgICAgICAgU1VCQUNDVFNFQzogXCJDQVNIXCIsXG4gICAgICAgICAgICBUT1RBTDogY29uZmlnLmRvbGxhclRvdGFsLFxuICAgICAgICAgICAgVU5JVFBSSUNFOiBjb25maWcucHJpY2VQZXJTaGFyZSxcbiAgICAgICAgICAgIFVOSVRTOiBjb25maWcuc2hhcmVzLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBzdGF0aWMgZm9ybWF0RGF0ZShkYXRlKSB7XG4gICAgICAgIHJldHVybiAoMCwgZGF5anNfMS5kZWZhdWx0KShkYXRlKS5mb3JtYXQoXCJZWVlZTU1ERFwiKTtcbiAgICB9XG59XG5leHBvcnRzLk9meFNlY3VyaXR5R2VuZXJhdG9yID0gT2Z4U2VjdXJpdHlHZW5lcmF0b3I7XG5jb25zdCBPRlhfU1RPQ0tfSEVBREVSID0gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PlxuPD9PRlggT0ZYSEVBREVSPVwiMjAwXCIgVkVSU0lPTj1cIjIyMFwiIFNFQ1VSSVRZPVwiTk9ORVwiIE9MREZJTEVVSUQ9XCJOT05FXCIgTkVXRklMRVVJRD1cIk5PTkVcIj8+XG5gO1xuY29uc3QgT0ZYX1NUT0NLX1RFTVBMQVRFID0gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PlxuPD9PRlggT0ZYSEVBREVSPVwiMjAwXCIgVkVSU0lPTj1cIjIyMFwiIFNFQ1VSSVRZPVwiTk9ORVwiIE9MREZJTEVVSUQ9XCJOT05FXCIgTkVXRklMRVVJRD1cIk5PTkVcIj8+XG48T0ZYPlxuICA8SU5WU1RNVE1TR1NSU1YxPlxuICAgIDxJTlZTVE1UVFJOUlM+XG4gICAgICA8VFJOVUlEPjA8L1RSTlVJRD5cbiAgICAgIDxTVEFUVVM+XG4gICAgICAgIDxDT0RFPjA8L0NPREU+XG4gICAgICAgIDxTRVZFUklUWT5JTkZPPC9TRVZFUklUWT5cbiAgICAgIDwvU1RBVFVTPlxuICAgICAgPElOVlNUTVRSUz5cbiAgICAgICAgPERUQVNPRj48L0RUQVNPRj5cbiAgICAgICAgPENVUkRFRj5VU0Q8L0NVUkRFRj5cbiAgICAgICAgPElOVkFDQ1RGUk9NPlxuICAgICAgICAgIDxCUk9LRVJJRD48L0JST0tFUklEPlxuICAgICAgICAgIDxBQ0NUSUQ+PC9BQ0NUSUQ+XG4gICAgICAgIDwvSU5WQUNDVEZST00+XG4gICAgICAgIDxJTlZUUkFOTElTVD5cbiAgICAgICAgICA8RFRTVEFSVD48L0RUU1RBUlQ+XG4gICAgICAgICAgPERURU5EPjwvRFRFTkQ+XG4gICAgICAgIDwvSU5WVFJBTkxJU1Q+XG4gICAgICA8L0lOVlNUTVRSUz5cbiAgICA8L0lOVlNUTVRUUk5SUz5cbiAgPC9JTlZTVE1UTVNHU1JTVjE+XG4gIDxTRUNMSVNUTVNHU1JTVjE+XG4gICAgPFNFQ0xJU1Q+XG4gICAgPC9TRUNMSVNUPlxuICA8L1NFQ0xJU1RNU0dTUlNWMT5cbjwvT0ZYPlxuYDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QYTUyOUNzdlRyYW5zZm9ybWVyID0gdm9pZCAwO1xuY29uc3Qgc3luY18xID0gcmVxdWlyZShcImNzdi1wYXJzZS9icm93c2VyL2VzbS9zeW5jXCIpO1xuY29uc3QgZGF5anNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZGF5anNcIikpO1xuY2xhc3MgUGE1MjlDc3ZUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY3N2UmF3XG4gICAgICogQHBhcmFtIGNyZWF0ZUZha2VcbiAgICAgKiBmb3IgZWFjaCBob2xkaW5nLCBjcmVhdGUgYW4gZXh0cmEgYnV5IGFuZCBvZmZzZXR0aW5nIHNhbGUgYXQgdGhlIGN1cnJlbnRcbiAgICAgKiBtYXJrZXQgcHJpY2VzLiAgdGhpcyBhbGxvd3Mgc29tZSBwZXJzb25hbCBmaW5hbmNlcyBzb2Z0d2FyZSBwcm9ncmFtcyB0byB1cGRhdGVcbiAgICAgKiB0aGVpciBjdXJyZW50IHByaWNlcyBmb3Igc2VjdXJpdGllcyB3aGljaCBhcmVuJ3QgcHVibGljbHkgbGlzdGVkLlxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgc3RhdGljIGNvbnZlcnRDc3ZUb09meENyZWF0aW9uRHRvKGNzdlJhdywgY3JlYXRlRmFrZSkge1xuICAgICAgICBsZXQgc3BsaXRzID0gY3N2UmF3LnJlcGxhY2UoL1xcbnszLH0vZywgXCJcXG5cXG5cIikuc3BsaXQoXCJcXG5cXG5cIik7XG4gICAgICAgIGxldCBob2xkaW5nc1NlY3Rpb25PZkNzdiA9IHNwbGl0c1swXTtcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9uc1NlY3Rpb25PZkNzdiA9IHNwbGl0c1sxXTtcbiAgICAgICAgbGV0IGhvbGRpbmdzID0gdGhpcy5nZXRDc3ZIb2xkaW5ncyhob2xkaW5nc1NlY3Rpb25PZkNzdik7XG4gICAgICAgIGxldCB0cmFuc2FjdGlvbnMgPSB0aGlzLmdldFRyYW5zYWN0aW9ucyh0cmFuc2FjdGlvbnNTZWN0aW9uT2ZDc3YpO1xuICAgICAgICBsZXQgYWNjb3VudE51bWJlcnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGxldCBkdG9UcmFuc2FjdGlvbnMgPSBbXTtcbiAgICAgICAgdHJhbnNhY3Rpb25zLmZvckVhY2goc2luZ2xlVHJhbiA9PiB7XG4gICAgICAgICAgICBhY2NvdW50TnVtYmVycy5hZGQoc2luZ2xlVHJhbi5hY2NvdW50TnVtYmVyKTtcbiAgICAgICAgICAgIGR0b1RyYW5zYWN0aW9ucy5wdXNoKHRoaXMuY3JlYXRlVHJhbnNhY3Rpb25zKHNpbmdsZVRyYW4pKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjcmVhdGVGYWtlKSB7XG4gICAgICAgICAgICBob2xkaW5ncy5mb3JFYWNoKHNpbmdsZUhvbGRpbmcgPT4ge1xuICAgICAgICAgICAgICAgIGR0b1RyYW5zYWN0aW9ucy5wdXNoKHRoaXMuY3JlYXRlRmFrZVRyYWRlKHNpbmdsZUhvbGRpbmcsIHRydWUpKTtcbiAgICAgICAgICAgICAgICBkdG9UcmFuc2FjdGlvbnMucHVzaCh0aGlzLmNyZWF0ZUZha2VUcmFkZShzaW5nbGVIb2xkaW5nLCBmYWxzZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNlY3VyaXR5SW5mbyA9IGhvbGRpbmdzLm1hcChzaW5nbGVIb2xkaW5nID0+IHtcbiAgICAgICAgICAgIGxldCBob2xkaW5nID0ge1xuICAgICAgICAgICAgICAgIGZpaWQ6IFwiUEE1MjlcIixcbiAgICAgICAgICAgICAgICBzZWN1cml0eVVpZDogdGhpcy5nZXRTZWN1cml0eUlkRnJvbUhvbGRpbmcoc2luZ2xlSG9sZGluZyksXG4gICAgICAgICAgICAgICAgc2VjdXJpdHlOYW1lOiBcIlBBNTI5IC0gXCIgKyBzaW5nbGVIb2xkaW5nLmZ1bmROYW1lLFxuICAgICAgICAgICAgICAgIHRpY2tlcjogXCJcIixcbiAgICAgICAgICAgICAgICBwcmljZVBlclNoYXJlOiBzaW5nbGVIb2xkaW5nLnByaWNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBob2xkaW5nO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGFjY291bnROdW1iZXJzLnNpemUgIT09IDEpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbmNvcnJlY3QgbnVtYmVyIG9mIGFjY291bnRzIGxpc3RlZC4gMSBhbmQgb25seSAxIGFjY291bnQgbnVtYmVyIG11c3QgYmUgbGlzdGVkLlwiKTtcbiAgICAgICAgbGV0IFthY2NvdW50TnVtYmVyXSA9IGFjY291bnROdW1iZXJzO1xuICAgICAgICBsZXQgc3RhcnRFbmREYXRlcyA9IHRoaXMuZ2V0U3RhcnRFbmREYXRlcyh0cmFuc2FjdGlvbnMpO1xuICAgICAgICBsZXQgY29uZmlnID0ge1xuICAgICAgICAgICAgdXBkYXRlRGF0ZVRpbWU6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICBhY2NvdW50SWQ6IGFjY291bnROdW1iZXIsXG4gICAgICAgICAgICBicm9rZXJJZDogXCJQQTUyOVwiLFxuICAgICAgICAgICAgc3RhcnREYXRlOiBzdGFydEVuZERhdGVzWzBdLFxuICAgICAgICAgICAgZW5kRGF0ZTogc3RhcnRFbmREYXRlc1sxXSxcbiAgICAgICAgICAgIG11dHVhbEZ1bmRUcmFuc2FjdGlvbnM6IGR0b1RyYW5zYWN0aW9ucyxcbiAgICAgICAgICAgIHNlY3VyaXR5UHJpY2VJbmZvOiBzZWN1cml0eUluZm8sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGVUcmFuc2FjdGlvbnMoc2luZ2xlVHJhbikge1xuICAgICAgICBsZXQgZHRvID0ge1xuICAgICAgICAgICAgdHJhZGVEYXRlOiBzaW5nbGVUcmFuLnRyYWRlRGF0ZSxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uSWQ6IGAkeygwLCBkYXlqc18xLmRlZmF1bHQpKHNpbmdsZVRyYW4udHJhZGVEYXRlKS5mb3JtYXQoXCJZWVlZTU1ERFwiKX0ke3NpbmdsZVRyYW4uaW52ZXN0bWVudE5hbWV9YC5yZXBsYWNlKC8gL2csIFwiXCIpLFxuICAgICAgICAgICAgbWVtbzogYCR7c2luZ2xlVHJhbi50cmFuc2FjdGlvblR5cGV9IC0gJHtzaW5nbGVUcmFuLmludmVzdG1lbnROYW1lfWAsXG4gICAgICAgICAgICBzZWN1cml0eUlkOiB0aGlzLmdldFNlY3VyaXR5SWRGcm9tVHJhbihzaW5nbGVUcmFuKSxcbiAgICAgICAgICAgIGRvbGxhclRvdGFsOiAtc2luZ2xlVHJhbi5ncm9zc0Ftb3VudCxcbiAgICAgICAgICAgIHByaWNlUGVyU2hhcmU6IHNpbmdsZVRyYW4uc2hhcmVQcmljZSxcbiAgICAgICAgICAgIHNoYXJlczogc2luZ2xlVHJhbi5zaGFyZXMsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBkdG87XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGVGYWtlVHJhZGUoaG9sZGluZywgYnV5KSB7XG4gICAgICAgIGxldCBtdWx0aXBsaWVyID0gYnV5ID8gMSA6IC0xO1xuICAgICAgICBsZXQgdHJhZGVUeXBlID0gYnV5ID8gXCJidXlcIiA6IFwic2VsbFwiO1xuICAgICAgICBsZXQgdHJhbiA9IHtcbiAgICAgICAgICAgIHRyYWRlRGF0ZTogbmV3IERhdGUoKSxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uSWQ6IGBmYWtlX3RyYWRlXyR7dHJhZGVUeXBlfV8keygwLCBkYXlqc18xLmRlZmF1bHQpKG5ldyBEYXRlKS5mb3JtYXQoXCJZWVlZTU1ERFwiKX0ke2hvbGRpbmcuZnVuZE5hbWV9YC5yZXBsYWNlKC8gL2csIFwiXCIpLFxuICAgICAgICAgICAgbWVtbzogYEZha2UgJHt0cmFkZVR5cGV9IHRyYW5zYWN0aW9uICR7aG9sZGluZy5mdW5kTmFtZX0gY3VycmVudCBwcmljZSAke2hvbGRpbmcucHJpY2V9YCxcbiAgICAgICAgICAgIHNlY3VyaXR5SWQ6IHRoaXMuZ2V0U2VjdXJpdHlJZEZyb21Ib2xkaW5nKGhvbGRpbmcpLFxuICAgICAgICAgICAgZG9sbGFyVG90YWw6IC0xICogaG9sZGluZy5wcmljZSAqIG11bHRpcGxpZXIsXG4gICAgICAgICAgICBwcmljZVBlclNoYXJlOiBob2xkaW5nLnByaWNlLFxuICAgICAgICAgICAgc2hhcmVzOiAxICogbXVsdGlwbGllcixcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRyYW47XG4gICAgfVxuICAgIHN0YXRpYyBnZXRTZWN1cml0eUlkRnJvbVRyYW4oc2luZ2xlVHJhbikge1xuICAgICAgICByZXR1cm4gXCJQQTUyOSBcIiArIHNpbmdsZVRyYW4uaW52ZXN0bWVudE5hbWU7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRTZWN1cml0eUlkRnJvbUhvbGRpbmcoc2luZ2xlSG9sZGluZykge1xuICAgICAgICByZXR1cm4gXCJQQTUyOSBcIiArIHNpbmdsZUhvbGRpbmcuZnVuZE5hbWU7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRTdGFydEVuZERhdGVzKHRyYW5zYWN0aW9ucykge1xuICAgICAgICBsZXQgc3RhcnQ7XG4gICAgICAgIGxldCBlbmQ7XG4gICAgICAgIHRyYW5zYWN0aW9ucy5mb3JFYWNoKHNpbmdsZSA9PiB7XG4gICAgICAgICAgICBpZiAoIXN0YXJ0IHx8IHN0YXJ0ID4gc2luZ2xlLnRyYWRlRGF0ZSlcbiAgICAgICAgICAgICAgICBzdGFydCA9IHNpbmdsZS50cmFkZURhdGU7XG4gICAgICAgICAgICBpZiAoIWVuZCB8fCBlbmQgPCBzaW5nbGUudHJhZGVEYXRlKVxuICAgICAgICAgICAgICAgIGVuZCA9IHNpbmdsZS50cmFkZURhdGU7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gW3N0YXJ0LCBlbmRdO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0VHJhbnNhY3Rpb25zKHRyYW5zYWN0aW9uc1NlY3Rpb25PZkNzdikge1xuICAgICAgICBsZXQgdHJhbnNhY3Rpb25zQW5kSGVhZGVyID0gKDAsIHN5bmNfMS5wYXJzZSkodHJhbnNhY3Rpb25zU2VjdGlvbk9mQ3N2KTtcbiAgICAgICAgdGhpcy5jaGVja1RyYW5zYWN0aW9uQ29sdW1uTmFtZXModHJhbnNhY3Rpb25zQW5kSGVhZGVyWzBdKTtcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9uc1Jvd3MgPSB0cmFuc2FjdGlvbnNBbmRIZWFkZXIuc2xpY2UoMSk7IC8vIHJlbW92ZSBmaXJzdCByb3cgd2hpY2ggaXMganVzdCBoZWFkZXJzXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRDc3ZSb3dzVG9UcmFuc2FjdGlvbnModHJhbnNhY3Rpb25zUm93cyk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRDc3ZIb2xkaW5ncyhob2xkaW5nc1NlY3Rpb25PZkNzdikge1xuICAgICAgICBsZXQgaG9sZGluZ3NBbmRIZWFkZXJzID0gKDAsIHN5bmNfMS5wYXJzZSkoaG9sZGluZ3NTZWN0aW9uT2ZDc3YpO1xuICAgICAgICB0aGlzLmNoZWNrSG9sZGluZ0NvbHVtbk5hbWVzKGhvbGRpbmdzQW5kSGVhZGVyc1swXSk7XG4gICAgICAgIGxldCBob2xkaW5nUm93cyA9IGhvbGRpbmdzQW5kSGVhZGVycy5zbGljZSgxKTsgLy8gcmVtb3ZlIGZpcnN0IHJvdyB3aGljaCBpcyBqdXN0IGhlYWRlcnNcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udmVydENzdlJvd3NUb0hvbGRpbmdzKGhvbGRpbmdSb3dzKTtcbiAgICB9XG4gICAgc3RhdGljIGNvbnZlcnRDc3ZSb3dzVG9Ib2xkaW5ncyhyb3dzKSB7XG4gICAgICAgIHJldHVybiByb3dzLm1hcChzaW5nbGVSb3cgPT4ge1xuICAgICAgICAgICAgbGV0IGhvbGRpbmdzID0ge1xuICAgICAgICAgICAgICAgIGFjY291bnROdW1iZXI6IHNpbmdsZVJvd1tQYTUyOUhvbGRpbmdDb2x1bW5zLkZVTkRfQUNDT1VOVF9OVU1CRVJdLFxuICAgICAgICAgICAgICAgIGZ1bmROYW1lOiBzaW5nbGVSb3dbUGE1MjlIb2xkaW5nQ29sdW1ucy5GVU5EX05BTUVdLFxuICAgICAgICAgICAgICAgIHByaWNlOiB0aGlzLmNvbnZlcnREb2xsYXJTdHJpbmdUb051bWJlcihzaW5nbGVSb3dbUGE1MjlIb2xkaW5nQ29sdW1ucy5QUklDRV0pLFxuICAgICAgICAgICAgICAgIHNoYXJlczogK3NpbmdsZVJvd1tQYTUyOUhvbGRpbmdDb2x1bW5zLlNIQVJFU10sXG4gICAgICAgICAgICAgICAgdG90YWxWYWx1ZTogdGhpcy5jb252ZXJ0RG9sbGFyU3RyaW5nVG9OdW1iZXIoc2luZ2xlUm93W1BhNTI5SG9sZGluZ0NvbHVtbnMuVE9UQUxfVkFMVUVdKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gaG9sZGluZ3M7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgY29udmVydENzdlJvd3NUb1RyYW5zYWN0aW9ucyhyb3dzKSB7XG4gICAgICAgIHJldHVybiByb3dzLm1hcChzaW5nbGVSb3cgPT4ge1xuICAgICAgICAgICAgbGV0IHRyYW4gPSB7XG4gICAgICAgICAgICAgICAgYWNjb3VudE51bWJlcjogc2luZ2xlUm93W1BhNTI5VHJhbnNhY3Rpb25Db2x1bW5zLkFDQ09VTlRfTlVNQkVSXSxcbiAgICAgICAgICAgICAgICB0cmFkZURhdGU6IHRoaXMuY29udmVydE1keVRvRGF0ZShzaW5nbGVSb3dbUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnMuVFJBREVfREFURV0pLFxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogc2luZ2xlUm93W1BhNTI5VHJhbnNhY3Rpb25Db2x1bW5zLlRSQU5TQUNUSU9OX1RZUEVdLFxuICAgICAgICAgICAgICAgIGludmVzdG1lbnROYW1lOiBzaW5nbGVSb3dbUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnMuSU5WRVNUTUVOVF9OQU1FXSxcbiAgICAgICAgICAgICAgICBzaGFyZVByaWNlOiB0aGlzLmNvbnZlcnREb2xsYXJTdHJpbmdUb051bWJlcihzaW5nbGVSb3dbUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnMuU0hBUkVfUFJJQ0VdKSxcbiAgICAgICAgICAgICAgICBzaGFyZXM6ICtzaW5nbGVSb3dbUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnMuU0hBUkVTXSxcbiAgICAgICAgICAgICAgICBncm9zc0Ftb3VudDogdGhpcy5jb252ZXJ0RG9sbGFyU3RyaW5nVG9OdW1iZXIoc2luZ2xlUm93W1BhNTI5VHJhbnNhY3Rpb25Db2x1bW5zLkdST1NTX0FNT1VOVF0pLFxuICAgICAgICAgICAgICAgIG5ldEFtb3VudDogdGhpcy5jb252ZXJ0RG9sbGFyU3RyaW5nVG9OdW1iZXIoc2luZ2xlUm93W1BhNTI5VHJhbnNhY3Rpb25Db2x1bW5zLk5FVF9BTU9VTlRdKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gdHJhbjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBjb252ZXJ0TWR5VG9EYXRlKGRhdGVTdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuICgwLCBkYXlqc18xLmRlZmF1bHQpKGRhdGVTdHJpbmcsIFwiTU0vREQvWVlZWVwiKS50b0RhdGUoKTtcbiAgICB9XG4gICAgc3RhdGljIGNvbnZlcnREb2xsYXJTdHJpbmdUb051bWJlcihkb2xsYXJTdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuICtkb2xsYXJTdHJpbmcucmVwbGFjZSgvXFwkL2csICcnKTtcbiAgICB9XG4gICAgc3RhdGljIGNoZWNrSG9sZGluZ0NvbHVtbk5hbWVzKGNvbHVtbnMpIHtcbiAgICAgICAgdGhpcy5jaGVja0NvbHVtbihjb2x1bW5zLCBQYTUyOUhvbGRpbmdDb2x1bW5zLkZVTkRfQUNDT1VOVF9OVU1CRVIsIFwiRnVuZCBBY2NvdW50IE51bWJlclwiKTtcbiAgICAgICAgdGhpcy5jaGVja0NvbHVtbihjb2x1bW5zLCBQYTUyOUhvbGRpbmdDb2x1bW5zLkZVTkRfTkFNRSwgXCJGdW5kIE5hbWVcIik7XG4gICAgICAgIHRoaXMuY2hlY2tDb2x1bW4oY29sdW1ucywgUGE1MjlIb2xkaW5nQ29sdW1ucy5QUklDRSwgXCJQcmljZVwiKTtcbiAgICAgICAgdGhpcy5jaGVja0NvbHVtbihjb2x1bW5zLCBQYTUyOUhvbGRpbmdDb2x1bW5zLlNIQVJFUywgXCJTaGFyZXNcIik7XG4gICAgICAgIHRoaXMuY2hlY2tDb2x1bW4oY29sdW1ucywgUGE1MjlIb2xkaW5nQ29sdW1ucy5UT1RBTF9WQUxVRSwgXCJUb3RhbCBWYWx1ZVwiKTtcbiAgICB9XG4gICAgc3RhdGljIGNoZWNrVHJhbnNhY3Rpb25Db2x1bW5OYW1lcyhjb2x1bW5zKSB7XG4gICAgICAgIHRoaXMuY2hlY2tDb2x1bW4oY29sdW1ucywgUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnMuQUNDT1VOVF9OVU1CRVIsIFwiQWNjb3VudCBOdW1iZXJcIik7XG4gICAgICAgIHRoaXMuY2hlY2tDb2x1bW4oY29sdW1ucywgUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnMuVFJBREVfREFURSwgXCJUcmFkZSBEYXRlXCIpO1xuICAgICAgICB0aGlzLmNoZWNrQ29sdW1uKGNvbHVtbnMsIFBhNTI5VHJhbnNhY3Rpb25Db2x1bW5zLlBST0NFU1NfREFURSwgXCJQcm9jZXNzIERhdGVcIik7XG4gICAgICAgIHRoaXMuY2hlY2tDb2x1bW4oY29sdW1ucywgUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnMuVFJBTlNBQ1RJT05fVFlQRSwgXCJUcmFuc2FjdGlvbiBUeXBlXCIpO1xuICAgICAgICB0aGlzLmNoZWNrQ29sdW1uKGNvbHVtbnMsIFBhNTI5VHJhbnNhY3Rpb25Db2x1bW5zLlRSQU5TQUNUSU9OX0RFU0NSSVBUSU9OLCBcIlRyYW5zYWN0aW9uIERlc2NyaXB0aW9uXCIpO1xuICAgICAgICB0aGlzLmNoZWNrQ29sdW1uKGNvbHVtbnMsIFBhNTI5VHJhbnNhY3Rpb25Db2x1bW5zLklOVkVTVE1FTlRfTkFNRSwgXCJJbnZlc3RtZW50IE5hbWVcIik7XG4gICAgICAgIHRoaXMuY2hlY2tDb2x1bW4oY29sdW1ucywgUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnMuU0hBUkVfUFJJQ0UsIFwiU2hhcmUgUHJpY2VcIik7XG4gICAgICAgIHRoaXMuY2hlY2tDb2x1bW4oY29sdW1ucywgUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnMuU0hBUkVTLCBcIlNoYXJlc1wiKTtcbiAgICAgICAgdGhpcy5jaGVja0NvbHVtbihjb2x1bW5zLCBQYTUyOVRyYW5zYWN0aW9uQ29sdW1ucy5HUk9TU19BTU9VTlQsIFwiR3Jvc3MgQW1vdW50XCIpO1xuICAgICAgICB0aGlzLmNoZWNrQ29sdW1uKGNvbHVtbnMsIFBhNTI5VHJhbnNhY3Rpb25Db2x1bW5zLk5FVF9BTU9VTlQsIFwiTmV0IEFtb3VudFwiKTtcbiAgICB9XG4gICAgc3RhdGljIGNoZWNrQ29sdW1uKGNvbHVtbnMsIGNvbHVtbk51bWJlciwgZXhwZWN0ZWQpIHtcbiAgICAgICAgaWYgKGNvbHVtbnNbY29sdW1uTnVtYmVyXSAhPT0gZXhwZWN0ZWQpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGNvbHVtbiAke2NvbHVtbk51bWJlciArIDF9IHRvIGJlIFwiJHtleHBlY3RlZH1cIiwgYnV0IGZvdW5kIFwiJHtjb2x1bW5zW2NvbHVtbk51bWJlcl19XCJgKTtcbiAgICB9XG59XG5leHBvcnRzLlBhNTI5Q3N2VHJhbnNmb3JtZXIgPSBQYTUyOUNzdlRyYW5zZm9ybWVyO1xudmFyIFBhNTI5VHJhbnNhY3Rpb25Db2x1bW5zO1xuKGZ1bmN0aW9uIChQYTUyOVRyYW5zYWN0aW9uQ29sdW1ucykge1xuICAgIFBhNTI5VHJhbnNhY3Rpb25Db2x1bW5zW1BhNTI5VHJhbnNhY3Rpb25Db2x1bW5zW1wiQUNDT1VOVF9OVU1CRVJcIl0gPSAwXSA9IFwiQUNDT1VOVF9OVU1CRVJcIjtcbiAgICBQYTUyOVRyYW5zYWN0aW9uQ29sdW1uc1tQYTUyOVRyYW5zYWN0aW9uQ29sdW1uc1tcIlRSQURFX0RBVEVcIl0gPSAxXSA9IFwiVFJBREVfREFURVwiO1xuICAgIFBhNTI5VHJhbnNhY3Rpb25Db2x1bW5zW1BhNTI5VHJhbnNhY3Rpb25Db2x1bW5zW1wiUFJPQ0VTU19EQVRFXCJdID0gMl0gPSBcIlBST0NFU1NfREFURVwiO1xuICAgIFBhNTI5VHJhbnNhY3Rpb25Db2x1bW5zW1BhNTI5VHJhbnNhY3Rpb25Db2x1bW5zW1wiVFJBTlNBQ1RJT05fVFlQRVwiXSA9IDNdID0gXCJUUkFOU0FDVElPTl9UWVBFXCI7XG4gICAgUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnNbUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnNbXCJUUkFOU0FDVElPTl9ERVNDUklQVElPTlwiXSA9IDRdID0gXCJUUkFOU0FDVElPTl9ERVNDUklQVElPTlwiO1xuICAgIFBhNTI5VHJhbnNhY3Rpb25Db2x1bW5zW1BhNTI5VHJhbnNhY3Rpb25Db2x1bW5zW1wiSU5WRVNUTUVOVF9OQU1FXCJdID0gNV0gPSBcIklOVkVTVE1FTlRfTkFNRVwiO1xuICAgIFBhNTI5VHJhbnNhY3Rpb25Db2x1bW5zW1BhNTI5VHJhbnNhY3Rpb25Db2x1bW5zW1wiU0hBUkVfUFJJQ0VcIl0gPSA2XSA9IFwiU0hBUkVfUFJJQ0VcIjtcbiAgICBQYTUyOVRyYW5zYWN0aW9uQ29sdW1uc1tQYTUyOVRyYW5zYWN0aW9uQ29sdW1uc1tcIlNIQVJFU1wiXSA9IDddID0gXCJTSEFSRVNcIjtcbiAgICBQYTUyOVRyYW5zYWN0aW9uQ29sdW1uc1tQYTUyOVRyYW5zYWN0aW9uQ29sdW1uc1tcIkdST1NTX0FNT1VOVFwiXSA9IDhdID0gXCJHUk9TU19BTU9VTlRcIjtcbiAgICBQYTUyOVRyYW5zYWN0aW9uQ29sdW1uc1tQYTUyOVRyYW5zYWN0aW9uQ29sdW1uc1tcIk5FVF9BTU9VTlRcIl0gPSA5XSA9IFwiTkVUX0FNT1VOVFwiO1xufSkoUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnMgfHwgKFBhNTI5VHJhbnNhY3Rpb25Db2x1bW5zID0ge30pKTtcbnZhciBQYTUyOUhvbGRpbmdDb2x1bW5zO1xuKGZ1bmN0aW9uIChQYTUyOUhvbGRpbmdDb2x1bW5zKSB7XG4gICAgUGE1MjlIb2xkaW5nQ29sdW1uc1tQYTUyOUhvbGRpbmdDb2x1bW5zW1wiRlVORF9BQ0NPVU5UX05VTUJFUlwiXSA9IDBdID0gXCJGVU5EX0FDQ09VTlRfTlVNQkVSXCI7XG4gICAgUGE1MjlIb2xkaW5nQ29sdW1uc1tQYTUyOUhvbGRpbmdDb2x1bW5zW1wiRlVORF9OQU1FXCJdID0gMV0gPSBcIkZVTkRfTkFNRVwiO1xuICAgIFBhNTI5SG9sZGluZ0NvbHVtbnNbUGE1MjlIb2xkaW5nQ29sdW1uc1tcIlBSSUNFXCJdID0gMl0gPSBcIlBSSUNFXCI7XG4gICAgUGE1MjlIb2xkaW5nQ29sdW1uc1tQYTUyOUhvbGRpbmdDb2x1bW5zW1wiU0hBUkVTXCJdID0gM10gPSBcIlNIQVJFU1wiO1xuICAgIFBhNTI5SG9sZGluZ0NvbHVtbnNbUGE1MjlIb2xkaW5nQ29sdW1uc1tcIlRPVEFMX1ZBTFVFXCJdID0gNF0gPSBcIlRPVEFMX1ZBTFVFXCI7XG59KShQYTUyOUhvbGRpbmdDb2x1bW5zIHx8IChQYTUyOUhvbGRpbmdDb2x1bW5zID0ge30pKTtcbiIsIi8qXHJcblx0Q29weXJpZ2h0IDIwMTUgQXhpbm9tXHJcblx0Q29weXJpZ2h0IDIwMTEtMjAxMyBBYmR1bGxhIEFiZHVyYWtobWFub3ZcclxuXHRPcmlnaW5hbCBzb3VyY2VzIGFyZSBhdmFpbGFibGUgYXQgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC94MmpzL1xyXG5cclxuXHRMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG5cdHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuXHRZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuXHJcblx0aHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5cdFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuXHRkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcblx0V0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcblx0U2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG5cdGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuLypcclxuXHRTdXBwb3J0ZWQgZXhwb3J0IG1ldGhvZHM6XHJcblx0KiBBTURcclxuXHQqIDxzY3JpcHQ+ICh3aW5kb3cuWDJKUylcclxuXHQqIE5vZGUuanNcclxuXHJcblx0TGltaXRhdGlvbnM6XHJcblx0KiBBdHRyaWJ1dGUgbmFtZXNwYWNlIHByZWZpeGVzIGFyZSBub3QgcGFyc2VkIGFzIHN1Y2guXHJcblx0KiBPdmVyYWxsIHRoZSBzZXJpYWxpemF0aW9uL2Rlc2VyaWFsaXphdG9uIGNvZGUgaXMgXCJiZXN0IGVmZm9ydFwiIGFuZCBub3QgZm9vbHByb29mLlxyXG4qL1xyXG5cclxuLy8gTW9kdWxlIGRlZmluaXRpb24gcGF0dGVybiB1c2VkIGlzIHJldHVybkV4cG9ydHMgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdW1kanMvdW1kXHJcbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHQvKiBnbG9iYWwgZGVmaW5lICovXHJcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xyXG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxyXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcclxuXHR9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XHJcblx0XHQvLyBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXQgb25seSBDb21tb25KUy1saWtlXHJcblx0XHQvLyBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLCBsaWtlIE5vZGUuXHJcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkB4bWxkb20veG1sZG9tXCIpLkRPTVBhcnNlcik7XHJcblx0fSBlbHNlIHtcclxuXHRcdC8vIEJyb3dzZXIgZ2xvYmFscyAocm9vdCBpcyB3aW5kb3cpXHJcblx0XHRyb290LlgySlMgPSBmYWN0b3J5KCk7XHJcblx0fVxyXG59KSh0aGlzLCBmdW5jdGlvbiAoQ3VzdG9tRE9NUGFyc2VyKSB7XHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdC8vIFdlIHJldHVybiBhIGNvbnN0cnVjdG9yIHRoYXQgY2FuIGJlIHVzZWQgdG8gbWFrZSBYMkpTIGluc3RhbmNlcy5cclxuXHRyZXR1cm4gZnVuY3Rpb24gWDJKUyhjb25maWcpIHtcclxuXHRcdHZhciBWRVJTSU9OID0gXCIzLjQuNFwiO1xyXG5cclxuXHRcdGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuXHJcblx0XHRmdW5jdGlvbiBpbml0Q29uZmlnRGVmYXVsdHMoKSB7XHJcblx0XHRcdC8vIElmIHNldCB0byBcInByb3BlcnR5XCIgdGhlbiA8ZWxlbWVudD5fYXNBcnJheSB3aWxsIGJlIGNyZWF0ZWRcclxuXHRcdFx0Ly8gdG8gYWxsb3cgeW91IHRvIGFjY2VzcyBhbnkgZWxlbWVudCBhcyBhbiBhcnJheSAoZXZlbiBpZiB0aGVyZSBpcyBvbmx5IG9uZSBvZiBpdCkuXHJcblx0XHRcdGNvbmZpZy5hcnJheUFjY2Vzc0Zvcm0gPSBjb25maWcuYXJyYXlBY2Nlc3NGb3JtIHx8IFwibm9uZVwiO1xyXG5cclxuXHRcdFx0Ly8gSWYgXCJ0ZXh0XCIgdGhlbiA8ZW1wdHk+PC9lbXB0eT4gd2lsbCBiZSB0cmFuc2Zvcm1lZCB0byBcIlwiLlxyXG5cdFx0XHQvLyBJZiBcIm9iamVjdFwiIHRoZW4gPGVtcHR5PjwvZW1wdHk+IHdpbGwgYmUgdHJhbnNmb3JtZWQgdG8ge30uXHJcblx0XHRcdGNvbmZpZy5lbXB0eU5vZGVGb3JtID0gY29uZmlnLmVtcHR5Tm9kZUZvcm0gfHwgXCJ0ZXh0XCI7XHJcblxyXG5cdFx0XHQvLyBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoIGVsZW1lbnRzLCBpZiB0aGUgZnVuY3Rpb24gcmV0dXJucyB0cnVlLCB0aGUgZWxlbWVudCB3aWxsIGJlIHNraXBwZWRcclxuXHRcdFx0Ly8gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHsgcmV0dXJuIHRydWU7IH07XHJcblx0XHRcdGNvbmZpZy5qc0F0dHJpYnV0ZUZpbHRlciA9IGNvbmZpZy5qc0F0dHJpYnV0ZUZpbHRlcjtcclxuXHJcblx0XHRcdC8vIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2ggZWxlbWVudHMsIHRoZSBlbGVtZW50IHZhbHVlIHdpbGwgYmUgcmVwbGFjZWQgYnkgdGhlIHJldHVybmVkIHZhbHVlXHJcblx0XHRcdC8vIGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7IHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTsgfTtcclxuXHRcdFx0Y29uZmlnLmpzQXR0cmlidXRlQ29udmVydGVyID0gY29uZmlnLmpzQXR0cmlidXRlQ29udmVydGVyO1xyXG5cclxuXHRcdFx0Ly8gQWxsb3dzIGF0dHJpYnV0ZSB2YWx1ZXMgdG8gYmUgY29udmVydGVkIG9uIHRoZSBmbHkgZHVyaW5nIHBhcnNpbmcgdG8gb2JqZWN0cy5cclxuXHRcdFx0Ly8gXHRcInRlc3RcIjogZnVuY3Rpb24obmFtZSwgdmFsdWUpIHsgcmV0dXJuIHRydWU7IH1cclxuXHRcdFx0Ly9cdFwiY29udmVydFwiOiBmdW5jdGlvbihuYW1lLCB2YWx1ZSkgeyByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7IH07XHJcblx0XHRcdC8vIGNvbnZlcnQoKSB3aWxsIGJlIGNhbGxlZCBmb3IgZXZlcnkgYXR0cmlidXRlIHdoZXJlIHRlc3QoKSByZXR1cm5zIHRydWVcclxuXHRcdFx0Ly8gYW5kIHRoZSByZXR1cm4gdmFsdWUgZnJvbSBjb252ZXJ0KCkgd2lsbCByZXBsYWNlIHRoZSBvcmlnaW5hbCB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlLlxyXG5cdFx0XHRjb25maWcuYXR0cmlidXRlQ29udmVydGVycyA9IGNvbmZpZy5hdHRyaWJ1dGVDb252ZXJ0ZXJzIHx8IFtdO1xyXG5cclxuXHRcdFx0Ly8gQW55IGVsZW1lbnRzIHRoYXQgbWF0Y2ggdGhlIHBhdGhzIGhlcmUgd2lsbCBoYXZlIHRoZWlyIHRleHQgcGFyc2VkXHJcblx0XHRcdC8vIGFzIGFuIFhNTCBkYXRldGltZSB2YWx1ZSAoMjAxMS0xMS0xMlQxMzowMDowMC0wNzowMCBzdHlsZSkuXHJcblx0XHRcdC8vIFRoZSBwYXRoIGNhbiBiZSBhIHBsYWluIHN0cmluZyAocGFyZW50LmNoaWxkMS5jaGlsZDIpLFxyXG5cdFx0XHQvLyBhIHJlZ2V4ICgvLipcXC5jaGlsZDIvKSBvciBmdW5jdGlvbihlbGVtZW50UGF0aCkuXHJcblx0XHRcdGNvbmZpZy5kYXRldGltZUFjY2Vzc0Zvcm1QYXRocyA9IGNvbmZpZy5kYXRldGltZUFjY2Vzc0Zvcm1QYXRocyB8fCBbXTtcclxuXHJcblx0XHRcdC8vIEFueSBlbGVtZW50cyB0aGF0IG1hdGNoIHRoZSBwYXRocyBsaXN0ZWQgaGVyZSB3aWxsIGJlIHN0b3JlZCBpbiBKYXZhU2NyaXB0IG9iamVjdHNcclxuXHRcdFx0Ly8gYXMgYXJyYXlzIGV2ZW4gaWYgdGhlcmUgaXMgb25seSBvbmUgb2YgdGhlbS4gVGhlIHBhdGggY2FuIGJlIGEgcGxhaW4gc3RyaW5nXHJcblx0XHRcdC8vIChwYXJlbnQuY2hpbGQxLmNoaWxkMiksIGEgcmVnZXggKC8uKlxcLmNoaWxkMi8pIG9yIGZ1bmN0aW9uKGVsZW1lbnROYW1lLCBlbGVtZW50UGF0aCkuXHJcblx0XHRcdGNvbmZpZy5hcnJheUFjY2Vzc0Zvcm1QYXRocyA9IGNvbmZpZy5hcnJheUFjY2Vzc0Zvcm1QYXRocyB8fCBbXTtcclxuXHJcbiAgICAgICAgICAgIC8vIHhtbGRvbSBjb25zdHJ1Y3RvciBhcmd1bWVudHNcclxuICAgICAgICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vamluZHcveG1sZG9tI2FwaS1yZWZlcmVuY2VcclxuXHRcdFx0Y29uZmlnLnhtbGRvbU9wdGlvbnMgPSBjb25maWcueG1sZG9tT3B0aW9ucyB8fCB7fTtcclxuXHJcblx0XHRcdC8vIElmIHRydWUsIGEgdG9TdHJpbmcgZnVuY3Rpb24gaXMgZ2VuZXJhdGVkIHRvIHByaW50IG5vZGVzIGNvbnRhaW5pbmcgdGV4dCBvciBjZGF0YS5cclxuXHRcdFx0Ly8gVXNlZnVsIGlmIHlvdSB3YW50IHRvIGFjY2VwdCBib3RoIHBsYWluIHRleHQgYW5kIENEYXRhIGFzIGVxdWl2YWxlbnQgaW5wdXRzLlxyXG5cdFx0XHRpZiAoY29uZmlnLmVuYWJsZVRvU3RyaW5nRnVuYyA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0Y29uZmlnLmVuYWJsZVRvU3RyaW5nRnVuYyA9IHRydWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIElmIHRydWUsIGVtcHR5IHRleHQgdGFncyBhcmUgaWdub3JlZCBmb3IgZWxlbWVudHMgd2l0aCBjaGlsZCBub2Rlcy5cclxuXHRcdFx0aWYgKGNvbmZpZy5za2lwRW1wdHlUZXh0Tm9kZXNGb3JPYmogPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdGNvbmZpZy5za2lwRW1wdHlUZXh0Tm9kZXNGb3JPYmogPSB0cnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBJZiB0cnVlLCB3aGl0ZXNwYWNlIGlzIHRyaW1tZWQgZnJvbSB0ZXh0IG5vZGVzLlxyXG5cdFx0XHRpZiAoY29uZmlnLnN0cmlwV2hpdGVzcGFjZXMgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdGNvbmZpZy5zdHJpcFdoaXRlc3BhY2VzID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gSWYgdHJ1ZSwgZG91YmxlIHF1b3RlcyBhcmUgdXNlZCBpbiBnZW5lcmF0ZWQgWE1MLlxyXG5cdFx0XHRpZiAoY29uZmlnLnVzZURvdWJsZVF1b3RlcyA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0Y29uZmlnLnVzZURvdWJsZVF1b3RlcyA9IHRydWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIElmIHRydWUsIHRoZSByb290IGVsZW1lbnQgb2YgdGhlIFhNTCBkb2N1bWVudCBpcyBpZ25vcmVkIHdoZW4gY29udmVydGluZyB0byBvYmplY3RzLlxyXG5cdFx0XHQvLyBUaGUgcmVzdWx0IHdpbGwgZGlyZWN0bHkgaGF2ZSB0aGUgcm9vdCBlbGVtZW50J3MgY2hpbGRyZW4gYXMgaXRzIG93biBwcm9wZXJ0aWVzLlxyXG5cdFx0XHRpZiAoY29uZmlnLmlnbm9yZVJvb3QgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdGNvbmZpZy5pZ25vcmVSb290ID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIFdoZXRoZXIgWE1MIGNoYXJhY3RlcnMgaW4gdGV4dCBhcmUgZXNjYXBlZCB3aGVuIHJlYWRpbmcvd3JpdGluZyBYTUwuXHJcblx0XHRcdGlmIChjb25maWcuZXNjYXBlTW9kZSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0Y29uZmlnLmVzY2FwZU1vZGUgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBQcmVmaXggdG8gdXNlIGZvciBwcm9wZXJ0aWVzIHRoYXQgYXJlIGNyZWF0ZWQgdG8gcmVwcmVzZW50IFhNTCBhdHRyaWJ1dGVzLlxyXG5cdFx0XHRpZiAoY29uZmlnLmF0dHJpYnV0ZVByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0Y29uZmlnLmF0dHJpYnV0ZVByZWZpeCA9IFwiX1wiO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBJZiB0cnVlLCBlbXB0eSBlbGVtZW50cyB3aWxsIGNyZWF0ZWQgYXMgc2VsZiBjbG9zaW5nIGVsZW1lbnRzICg8ZWxlbWVudCAvPilcclxuXHRcdFx0Ly8gSWYgZmFsc2UsIGVtcHR5IGVsZW1lbnRzIHdpbGwgYmUgY3JlYXRlZCB3aXRoIHN0YXJ0IGFuZCBlbmQgdGFncyAoPGVsZW1lbnQ+PC9lbGVtZW50PilcclxuXHRcdFx0aWYgKGNvbmZpZy5zZWxmQ2xvc2luZ0VsZW1lbnRzID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRjb25maWcuc2VsZkNsb3NpbmdFbGVtZW50cyA9IHRydWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIElmIHRoaXMgcHJvcGVydHkgZGVmaW5lZCBhcyBmYWxzZSBhbmQgYW4gWE1MIGVsZW1lbnQgaGFzIENEYXRhIG5vZGUgT05MWSwgaXQgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gdGV4dCB3aXRob3V0IGFkZGl0aW9uYWwgcHJvcGVydHkgXCJfX2NkYXRhXCJcclxuXHRcdFx0aWYgKGNvbmZpZy5rZWVwQ0RhdGEgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdGNvbmZpZy5rZWVwQ0RhdGEgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gSWYgdGhpcyBwcm9wZXJ0eSBkZWZpbmVkIGFzIHRydWUsIHVzZSB7IF9fdGV4dDogJ2FiYycgfSBvdmVyICdhYmMnXHJcblx0XHRcdGlmIChjb25maWcua2VlcFRleHQgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdGNvbmZpZy5rZWVwVGV4dCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBJZiB0cnVlLCB3aWxsIG91dHB1dCBkYXRlcyBpbiBVVENcclxuXHRcdFx0aWYgKGNvbmZpZy5qc0RhdGVVVEMgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdGNvbmZpZy5qc0RhdGVVVEMgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGluaXRSZXF1aXJlZFBvbHlmaWxscygpIHtcclxuXHRcdFx0ZnVuY3Rpb24gcGFkKG51bWJlcikge1xyXG5cdFx0XHRcdHZhciByID0gU3RyaW5nKG51bWJlcik7XHJcblx0XHRcdFx0aWYgKHIubGVuZ3RoID09PSAxKSB7XHJcblx0XHRcdFx0XHRyID0gJzAnICsgcjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHI7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gSGVsbG8gSUU4LVxyXG5cdFx0XHRpZiAodHlwZW9mIFN0cmluZy5wcm90b3R5cGUudHJpbSAhPT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0XHRcdFN0cmluZy5wcm90b3R5cGUudHJpbSA9IGZ1bmN0aW9uIHRyaW0oKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5yZXBsYWNlKC9eXFxzK3xeXFxuK3woXFxzfFxcbikrJC9nLCAnJyk7XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodHlwZW9mIERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nICE9PSAnZnVuY3Rpb24nKSB7XHJcblx0XHRcdFx0Ly8gSW1wbGVtZW50YXRpb24gZnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI1NzM1MjEvaG93LWRvLWktb3V0cHV0LWFuLWlzby04NjAxLWZvcm1hdHRlZC1zdHJpbmctaW4tamF2YXNjcmlwdFxyXG5cdFx0XHRcdERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nID0gZnVuY3Rpb24gdG9JU09TdHJpbmcoKSB7XHJcblx0XHRcdFx0XHR2YXIgTVNfSU5fUyA9IDEwMDA7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0VVRDRnVsbFllYXIoKVxyXG5cdFx0XHRcdFx0XHQrICctJyArIHBhZCh0aGlzLmdldFVUQ01vbnRoKCkgKyAxKVxyXG5cdFx0XHRcdFx0XHQrICctJyArIHBhZCh0aGlzLmdldFVUQ0RhdGUoKSlcclxuXHRcdFx0XHRcdFx0KyAnVCcgKyBwYWQodGhpcy5nZXRVVENIb3VycygpKVxyXG5cdFx0XHRcdFx0XHQrICc6JyArIHBhZCh0aGlzLmdldFVUQ01pbnV0ZXMoKSlcclxuXHRcdFx0XHRcdFx0KyAnOicgKyBwYWQodGhpcy5nZXRVVENTZWNvbmRzKCkpXHJcblx0XHRcdFx0XHRcdCsgJy4nICsgU3RyaW5nKCh0aGlzLmdldFVUQ01pbGxpc2Vjb25kcygpIC8gTVNfSU5fUykudG9GaXhlZCgzKSkuc2xpY2UoMiwgNSlcclxuXHRcdFx0XHRcdFx0KyAnWic7XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGluaXRDb25maWdEZWZhdWx0cygpO1xyXG5cdFx0aW5pdFJlcXVpcmVkUG9seWZpbGxzKCk7XHJcblxyXG5cdFx0dmFyIERPTU5vZGVUeXBlcyA9IHtcclxuXHRcdFx0XCJFTEVNRU5UX05PREVcIjogMSxcclxuXHRcdFx0XCJURVhUX05PREVcIjogMyxcclxuXHRcdFx0XCJDREFUQV9TRUNUSU9OX05PREVcIjogNCxcclxuXHRcdFx0XCJDT01NRU5UX05PREVcIjogOCxcclxuXHRcdFx0XCJET0NVTUVOVF9OT0RFXCI6IDlcclxuXHRcdH07XHJcblxyXG5cdFx0ZnVuY3Rpb24gZ2V0RG9tTm9kZUxvY2FsTmFtZShkb21Ob2RlKSB7XHJcblx0XHRcdHZhciBsb2NhbE5hbWUgPSBkb21Ob2RlLmxvY2FsTmFtZTtcclxuXHRcdFx0aWYgKGxvY2FsTmFtZSA9PSBudWxsKSB7XHJcblx0XHRcdFx0Ly8gWWVhaCwgdGhpcyBpcyBJRSEhXHJcblx0XHRcdFx0bG9jYWxOYW1lID0gZG9tTm9kZS5iYXNlTmFtZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAobG9jYWxOYW1lID09IG51bGwgfHwgbG9jYWxOYW1lID09PSBcIlwiKSB7XHJcblx0XHRcdFx0Ly8gPT09XCJcIiBpcyBJRSB0b29cclxuXHRcdFx0XHRsb2NhbE5hbWUgPSBkb21Ob2RlLm5vZGVOYW1lO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBsb2NhbE5hbWU7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZ2V0RG9tTm9kZU5hbWVzcGFjZVByZWZpeChub2RlKSB7XHJcblx0XHRcdHJldHVybiBub2RlLnByZWZpeDtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBlc2NhcGVYbWxDaGFycyhzdHIpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBzdHIgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0cmV0dXJuIHN0ci5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7JykucmVwbGFjZSgvXCIvZywgJyZxdW90OycpLnJlcGxhY2UoLycvZywgJyYjeDI3OycpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmV0dXJuIHN0cjtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiB1bmVzY2FwZVhtbENoYXJzKHN0cikge1xyXG5cdFx0XHRyZXR1cm4gc3RyLnJlcGxhY2UoLyZsdDsvZywgJzwnKS5yZXBsYWNlKC8mZ3Q7L2csICc+JykucmVwbGFjZSgvJnF1b3Q7L2csICdcIicpLnJlcGxhY2UoLyYjeDI3Oy9nLCBcIidcIikucmVwbGFjZSgvJmFtcDsvZywgJyYnKTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBlbnN1cmVQcm9wZXJBcnJheUFjY2Vzc0Zvcm0oZWxlbWVudCwgY2hpbGROYW1lLCBlbGVtZW50UGF0aCkge1xyXG5cdFx0XHRzd2l0Y2ggKGNvbmZpZy5hcnJheUFjY2Vzc0Zvcm0pIHtcclxuXHRcdFx0XHRjYXNlIFwicHJvcGVydHlcIjpcclxuXHRcdFx0XHRcdGlmICghKGVsZW1lbnRbY2hpbGROYW1lXSBpbnN0YW5jZW9mIEFycmF5KSlcclxuXHRcdFx0XHRcdFx0ZWxlbWVudFtjaGlsZE5hbWUgKyBcIl9hc0FycmF5XCJdID0gW2VsZW1lbnRbY2hpbGROYW1lXV07XHJcblx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdGVsZW1lbnRbY2hpbGROYW1lICsgXCJfYXNBcnJheVwiXSA9IGVsZW1lbnRbY2hpbGROYW1lXTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIShlbGVtZW50W2NoaWxkTmFtZV0gaW5zdGFuY2VvZiBBcnJheSkgJiYgY29uZmlnLmFycmF5QWNjZXNzRm9ybVBhdGhzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHR2YXIgbWF0Y2ggPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjb25maWcuYXJyYXlBY2Nlc3NGb3JtUGF0aHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdHZhciBhcnJheVBhdGggPSBjb25maWcuYXJyYXlBY2Nlc3NGb3JtUGF0aHNbaV07XHJcblx0XHRcdFx0XHRpZiAodHlwZW9mIGFycmF5UGF0aCA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdFx0XHRpZiAoYXJyYXlQYXRoID09PSBlbGVtZW50UGF0aCkge1xyXG5cdFx0XHRcdFx0XHRcdG1hdGNoID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChhcnJheVBhdGggaW5zdGFuY2VvZiBSZWdFeHApIHtcclxuXHRcdFx0XHRcdFx0aWYgKGFycmF5UGF0aC50ZXN0KGVsZW1lbnRQYXRoKSkge1xyXG5cdFx0XHRcdFx0XHRcdG1hdGNoID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgYXJyYXlQYXRoID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0XHRcdFx0aWYgKGFycmF5UGF0aChjaGlsZE5hbWUsIGVsZW1lbnRQYXRoKSkge1xyXG5cdFx0XHRcdFx0XHRcdG1hdGNoID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKG1hdGNoKVxyXG5cdFx0XHRcdFx0ZWxlbWVudFtjaGlsZE5hbWVdID0gW2VsZW1lbnRbY2hpbGROYW1lXV07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiB4bWxEYXRlVGltZVRvRGF0ZShwcm9wKSB7XHJcblx0XHRcdC8vIEltcGxlbWVudGF0aW9uIGJhc2VkIHVwIG9uIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvODE3ODU5OC94bWwtZGF0ZXRpbWUtdG8tamF2YXNjcmlwdC1kYXRlLW9iamVjdFxyXG5cdFx0XHQvLyBJbXByb3ZlZCB0byBzdXBwb3J0IGZ1bGwgc3BlYyBhbmQgb3B0aW9uYWwgcGFydHNcclxuXHRcdFx0dmFyIE1JTlVURVNfUEVSX0hPVVIgPSA2MDtcclxuXHJcblx0XHRcdHZhciBiaXRzID0gcHJvcC5zcGxpdCgvWy1UOitaXS9nKTtcclxuXHJcblx0XHRcdHZhciBkID0gbmV3IERhdGUoYml0c1swXSwgYml0c1sxXSAtIDEsIGJpdHNbMl0pO1xyXG5cdFx0XHR2YXIgc2Vjb25kQml0cyA9IGJpdHNbNV0uc3BsaXQoXCJcXC5cIik7XHJcblx0XHRcdGQuc2V0SG91cnMoYml0c1szXSwgYml0c1s0XSwgc2Vjb25kQml0c1swXSk7XHJcblx0XHRcdGlmIChzZWNvbmRCaXRzLmxlbmd0aCA+IDEpXHJcblx0XHRcdFx0ZC5zZXRNaWxsaXNlY29uZHMoc2Vjb25kQml0c1sxXSk7XHJcblxyXG5cdFx0XHQvLyBHZXQgc3VwcGxpZWQgdGltZSB6b25lIG9mZnNldCBpbiBtaW51dGVzXHJcblx0XHRcdGlmIChiaXRzWzZdICYmIGJpdHNbN10pIHtcclxuXHRcdFx0XHR2YXIgb2Zmc2V0TWludXRlcyA9IGJpdHNbNl0gKiBNSU5VVEVTX1BFUl9IT1VSICsgTnVtYmVyKGJpdHNbN10pO1xyXG5cdFx0XHRcdHZhciBzaWduID0gL1xcZFxcZC1cXGRcXGQ6XFxkXFxkJC8udGVzdChwcm9wKSA/ICctJyA6ICcrJztcclxuXHJcblx0XHRcdFx0Ly8gQXBwbHkgdGhlIHNpZ25cclxuXHRcdFx0XHRvZmZzZXRNaW51dGVzID0gMCArIChzaWduID09PSAnLScgPyAtMSAqIG9mZnNldE1pbnV0ZXMgOiBvZmZzZXRNaW51dGVzKTtcclxuXHJcblx0XHRcdFx0Ly8gQXBwbHkgb2Zmc2V0IGFuZCBsb2NhbCB0aW1lem9uZVxyXG5cdFx0XHRcdGQuc2V0TWludXRlcyhkLmdldE1pbnV0ZXMoKSAtIG9mZnNldE1pbnV0ZXMgLSBkLmdldFRpbWV6b25lT2Zmc2V0KCkpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHByb3AuaW5kZXhPZihcIlpcIiwgcHJvcC5sZW5ndGggLSAxKSAhPT0gLTEpIHtcclxuXHRcdFx0XHRkID0gbmV3IERhdGUoRGF0ZS5VVEMoZC5nZXRGdWxsWWVhcigpLCBkLmdldE1vbnRoKCksIGQuZ2V0RGF0ZSgpLCBkLmdldEhvdXJzKCksIGQuZ2V0TWludXRlcygpLCBkLmdldFNlY29uZHMoKSwgZC5nZXRNaWxsaXNlY29uZHMoKSkpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBkIGlzIG5vdyBhIGxvY2FsIHRpbWUgZXF1aXZhbGVudCB0byB0aGUgc3VwcGxpZWQgdGltZVxyXG5cdFx0XHRyZXR1cm4gZDtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBjb252ZXJ0VG9EYXRlSWZSZXF1aXJlZCh2YWx1ZSwgY2hpbGROYW1lLCBmdWxsUGF0aCkge1xyXG5cdFx0XHRpZiAoY29uZmlnLmRhdGV0aW1lQWNjZXNzRm9ybVBhdGhzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHR2YXIgcGF0aFdpdGhvdXRUZXh0Tm9kZSA9IGZ1bGxQYXRoLnNwbGl0KFwiXFwuI1wiKVswXTtcclxuXHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjb25maWcuZGF0ZXRpbWVBY2Nlc3NGb3JtUGF0aHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdHZhciBjYW5kaWRhdGVQYXRoID0gY29uZmlnLmRhdGV0aW1lQWNjZXNzRm9ybVBhdGhzW2ldO1xyXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBjYW5kaWRhdGVQYXRoID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0XHRcdGlmIChjYW5kaWRhdGVQYXRoID09PSBwYXRoV2l0aG91dFRleHROb2RlKVxyXG5cdFx0XHRcdFx0XHRcdHJldHVybiB4bWxEYXRlVGltZVRvRGF0ZSh2YWx1ZSk7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGNhbmRpZGF0ZVBhdGggaW5zdGFuY2VvZiBSZWdFeHApIHtcclxuXHRcdFx0XHRcdFx0aWYgKGNhbmRpZGF0ZVBhdGgudGVzdChwYXRoV2l0aG91dFRleHROb2RlKSlcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4geG1sRGF0ZVRpbWVUb0RhdGUodmFsdWUpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgY2FuZGlkYXRlUGF0aCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRcdFx0XHRcdGlmIChjYW5kaWRhdGVQYXRoKHBhdGhXaXRob3V0VGV4dE5vZGUpKVxyXG5cdFx0XHRcdFx0XHRcdHJldHVybiB4bWxEYXRlVGltZVRvRGF0ZSh2YWx1ZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdmFsdWU7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZGVzZXJpYWxpemVSb290RWxlbWVudENoaWxkcmVuKHJvb3RFbGVtZW50KSB7XHJcblx0XHRcdHZhciByZXN1bHQgPSB7fTtcclxuXHRcdFx0dmFyIGNoaWxkcmVuID0gcm9vdEVsZW1lbnQuY2hpbGROb2RlcztcclxuXHJcblx0XHRcdC8vIEFsdGVybmF0aXZlIGZvciBmaXJzdEVsZW1lbnRDaGlsZCB3aGljaCBpcyBub3Qgc3VwcG9ydGVkIGluIHNvbWUgZW52aXJvbm1lbnRzXHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHR2YXIgY2hpbGQgPSBjaGlsZHJlbi5pdGVtKGkpO1xyXG5cdFx0XHRcdGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gRE9NTm9kZVR5cGVzLkVMRU1FTlRfTk9ERSkge1xyXG5cdFx0XHRcdFx0dmFyIGNoaWxkTmFtZSA9IGdldERvbU5vZGVMb2NhbE5hbWUoY2hpbGQpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChjb25maWcuaWdub3JlUm9vdClcclxuXHRcdFx0XHRcdFx0cmVzdWx0ID0gZGVzZXJpYWxpemVEb21DaGlsZHJlbihjaGlsZCwgY2hpbGROYW1lKTtcclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0cmVzdWx0W2NoaWxkTmFtZV0gPSBkZXNlcmlhbGl6ZURvbUNoaWxkcmVuKGNoaWxkLCBjaGlsZE5hbWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBkZXNlcmlhbGl6ZUVsZW1lbnRDaGlsZHJlbihlbGVtZW50LCBlbGVtZW50UGF0aCkge1xyXG5cdFx0XHR2YXIgcmVzdWx0ID0ge307XHJcblx0XHRcdHJlc3VsdC5fX2NudCA9IDA7XHJcblxyXG5cdFx0XHR2YXIgbm9kZUNoaWxkcmVuID0gZWxlbWVudC5jaGlsZE5vZGVzO1xyXG5cclxuXHRcdFx0Ly8gQ2hpbGQgbm9kZXMuXHJcblx0XHRcdGZvciAodmFyIGlDaGlsZCA9IDA7IGlDaGlsZCA8IG5vZGVDaGlsZHJlbi5sZW5ndGg7IGlDaGlsZCsrKSB7XHJcblx0XHRcdFx0dmFyIGNoaWxkID0gbm9kZUNoaWxkcmVuLml0ZW0oaUNoaWxkKTtcclxuXHRcdFx0XHR2YXIgY2hpbGROYW1lID0gZ2V0RG9tTm9kZUxvY2FsTmFtZShjaGlsZCk7XHJcblxyXG5cdFx0XHRcdGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gRE9NTm9kZVR5cGVzLkNPTU1FTlRfTk9ERSlcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0XHRyZXN1bHQuX19jbnQrKztcclxuXHJcblx0XHRcdFx0Ly8gV2UgZGVsaWJlcmF0ZWx5IGRvIG5vdCBhY2NlcHQgZXZlcnl0aGluZyBmYWxzZXkgaGVyZSBiZWNhdXNlXHJcblx0XHRcdFx0Ly8gZWxlbWVudHMgdGhhdCByZXNvbHZlIHRvIGVtcHR5IHN0cmluZyBzaG91bGQgc3RpbGwgYmUgcHJlc2VydmVkLlxyXG5cdFx0XHRcdGlmIChyZXN1bHRbY2hpbGROYW1lXSA9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRyZXN1bHRbY2hpbGROYW1lXSA9IGRlc2VyaWFsaXplRG9tQ2hpbGRyZW4oY2hpbGQsIGVsZW1lbnRQYXRoICsgXCIuXCIgKyBjaGlsZE5hbWUpO1xyXG5cdFx0XHRcdFx0ZW5zdXJlUHJvcGVyQXJyYXlBY2Nlc3NGb3JtKHJlc3VsdCwgY2hpbGROYW1lLCBlbGVtZW50UGF0aCArIFwiLlwiICsgY2hpbGROYW1lKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKCEocmVzdWx0W2NoaWxkTmFtZV0gaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuXHRcdFx0XHRcdFx0cmVzdWx0W2NoaWxkTmFtZV0gPSBbcmVzdWx0W2NoaWxkTmFtZV1dO1xyXG5cdFx0XHRcdFx0XHRlbnN1cmVQcm9wZXJBcnJheUFjY2Vzc0Zvcm0ocmVzdWx0LCBjaGlsZE5hbWUsIGVsZW1lbnRQYXRoICsgXCIuXCIgKyBjaGlsZE5hbWUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHJlc3VsdFtjaGlsZE5hbWVdW3Jlc3VsdFtjaGlsZE5hbWVdLmxlbmd0aF0gPSBkZXNlcmlhbGl6ZURvbUNoaWxkcmVuKGNoaWxkLCBlbGVtZW50UGF0aCArIFwiLlwiICsgY2hpbGROYW1lKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIEF0dHJpYnV0ZXNcclxuXHRcdFx0Zm9yICh2YXIgaUF0dHJpYnV0ZSA9IDA7IGlBdHRyaWJ1dGUgPCBlbGVtZW50LmF0dHJpYnV0ZXMubGVuZ3RoOyBpQXR0cmlidXRlKyspIHtcclxuXHRcdFx0XHR2YXIgYXR0cmlidXRlID0gZWxlbWVudC5hdHRyaWJ1dGVzLml0ZW0oaUF0dHJpYnV0ZSk7XHJcblx0XHRcdFx0cmVzdWx0Ll9fY250Kys7XHJcblxyXG5cdFx0XHRcdHZhciBhZGp1c3RlZFZhbHVlID0gYXR0cmlidXRlLnZhbHVlO1xyXG5cdFx0XHRcdGZvciAodmFyIGlDb252ZXJ0ZXIgPSAwOyBpQ29udmVydGVyIDwgY29uZmlnLmF0dHJpYnV0ZUNvbnZlcnRlcnMubGVuZ3RoOyBpQ29udmVydGVyKyspIHtcclxuXHRcdFx0XHRcdHZhciBjb252ZXJ0ZXIgPSBjb25maWcuYXR0cmlidXRlQ29udmVydGVyc1tpQ29udmVydGVyXTtcclxuXHRcdFx0XHRcdGlmIChjb252ZXJ0ZXIudGVzdC5jYWxsKG51bGwsIGF0dHJpYnV0ZS5uYW1lLCBhdHRyaWJ1dGUudmFsdWUpKVxyXG5cdFx0XHRcdFx0XHRhZGp1c3RlZFZhbHVlID0gY29udmVydGVyLmNvbnZlcnQuY2FsbChudWxsLCBhdHRyaWJ1dGUubmFtZSwgYXR0cmlidXRlLnZhbHVlKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJlc3VsdFtjb25maWcuYXR0cmlidXRlUHJlZml4ICsgYXR0cmlidXRlLm5hbWVdID0gYWRqdXN0ZWRWYWx1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gTm9kZSBuYW1lc3BhY2UgcHJlZml4XHJcblx0XHRcdHZhciBuYW1lc3BhY2VQcmVmaXggPSBnZXREb21Ob2RlTmFtZXNwYWNlUHJlZml4KGVsZW1lbnQpO1xyXG5cdFx0XHRpZiAobmFtZXNwYWNlUHJlZml4KSB7XHJcblx0XHRcdFx0cmVzdWx0Ll9fY250Kys7XHJcblx0XHRcdFx0cmVzdWx0Ll9fcHJlZml4ID0gbmFtZXNwYWNlUHJlZml4O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAocmVzdWx0W1wiI3RleHRcIl0pIHtcclxuXHRcdFx0XHRyZXN1bHQuX190ZXh0ID0gcmVzdWx0W1wiI3RleHRcIl07XHJcblxyXG5cdFx0XHRcdGlmIChyZXN1bHQuX190ZXh0IGluc3RhbmNlb2YgQXJyYXkpIHtcclxuXHRcdFx0XHRcdHJlc3VsdC5fX3RleHQgPSByZXN1bHQuX190ZXh0LmpvaW4oXCJcXG5cIik7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoY29uZmlnLmVzY2FwZU1vZGUpXHJcblx0XHRcdFx0XHRyZXN1bHQuX190ZXh0ID0gdW5lc2NhcGVYbWxDaGFycyhyZXN1bHQuX190ZXh0KTtcclxuXHJcblx0XHRcdFx0aWYgKGNvbmZpZy5zdHJpcFdoaXRlc3BhY2VzKVxyXG5cdFx0XHRcdFx0cmVzdWx0Ll9fdGV4dCA9IHJlc3VsdC5fX3RleHQudHJpbSgpO1xyXG5cclxuXHRcdFx0XHRkZWxldGUgcmVzdWx0W1wiI3RleHRcIl07XHJcblxyXG5cdFx0XHRcdGlmIChjb25maWcuYXJyYXlBY2Nlc3NGb3JtID09PSBcInByb3BlcnR5XCIpXHJcblx0XHRcdFx0XHRkZWxldGUgcmVzdWx0W1wiI3RleHRfYXNBcnJheVwiXTtcclxuXHJcblx0XHRcdFx0cmVzdWx0Ll9fdGV4dCA9IGNvbnZlcnRUb0RhdGVJZlJlcXVpcmVkKHJlc3VsdC5fX3RleHQsIFwiI3RleHRcIiwgZWxlbWVudFBhdGggKyBcIi4jdGV4dFwiKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHJlc3VsdC5oYXNPd25Qcm9wZXJ0eSgnI2NkYXRhLXNlY3Rpb24nKSkge1xyXG5cdFx0XHRcdHJlc3VsdC5fX2NkYXRhID0gcmVzdWx0W1wiI2NkYXRhLXNlY3Rpb25cIl07XHJcblx0XHRcdFx0ZGVsZXRlIHJlc3VsdFtcIiNjZGF0YS1zZWN0aW9uXCJdO1xyXG5cclxuXHRcdFx0XHRpZiAoY29uZmlnLmFycmF5QWNjZXNzRm9ybSA9PT0gXCJwcm9wZXJ0eVwiKVxyXG5cdFx0XHRcdFx0ZGVsZXRlIHJlc3VsdFtcIiNjZGF0YS1zZWN0aW9uX2FzQXJyYXlcIl07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChyZXN1bHQuX19jbnQgPT09IDEgJiYgcmVzdWx0Ll9fdGV4dCAmJiAhY29uZmlnLmtlZXBUZXh0KSB7XHJcblx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0Ll9fdGV4dDtcclxuXHRcdFx0fSBlbHNlIGlmIChyZXN1bHQuX19jbnQgPT09IDAgJiYgY29uZmlnLmVtcHR5Tm9kZUZvcm0gPT09IFwidGV4dFwiKSB7XHJcblx0XHRcdFx0cmVzdWx0ID0gJyc7XHJcblx0XHRcdH0gZWxzZSBpZiAocmVzdWx0Ll9fY250ID4gMSAmJiByZXN1bHQuX190ZXh0ICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLnNraXBFbXB0eVRleHROb2Rlc0Zvck9iaikge1xyXG5cdFx0XHRcdGlmIChjb25maWcuc3RyaXBXaGl0ZXNwYWNlcyAmJiByZXN1bHQuX190ZXh0ID09PSBcIlwiIHx8IHJlc3VsdC5fX3RleHQudHJpbSgpID09PSBcIlwiKSB7XHJcblx0XHRcdFx0XHRkZWxldGUgcmVzdWx0Ll9fdGV4dDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZGVsZXRlIHJlc3VsdC5fX2NudDtcclxuXHJcblx0XHRcdC8qKlxyXG5cdFx0XHQgKiBXZSBhcmUgY2hlY2tpbmcgaWYgd2UgYXJlIGNyZWF0aW5nIGEgX19jZGF0YSBwcm9wZXJ0eSBvciBpZiB3ZSBqdXN0IGFkZCB0aGUgY29udGVudCBvZiBjZGF0YSBpbnNpZGUgcmVzdWx0LlxyXG5cdFx0XHQgKiBCdXQsIGlmIHdlIGhhdmUgYSBwcm9wZXJ0eSBpbnNpZGUgeG1sIHRhZyAoPHRhZyBQUk9QRVJUWT1cIjFcIj48L3RhZz4pLCBhbmQgYSBjZGF0YSBpbnNpZGUsIHdlIGNhbid0IGlnbm9yZSBpdC5cclxuXHRcdFx0ICogSW4gdGhpcyBjYXNlIHdlIGFyZSBrZWVwaW5nIF9fY2RhdGEgcHJvcGVydHkuXHJcblx0XHRcdCAqL1xyXG5cdFx0XHRpZiAoIWNvbmZpZy5rZWVwQ0RhdGEgJiYgKCFyZXN1bHQuaGFzT3duUHJvcGVydHkoJ19fdGV4dCcpICYmIHJlc3VsdC5oYXNPd25Qcm9wZXJ0eSgnX19jZGF0YScpICYmIE9iamVjdC5rZXlzKHJlc3VsdCkubGVuZ3RoID09PSAxKSkge1xyXG5cdFx0XHRcdHJldHVybiAocmVzdWx0Ll9fY2RhdGEgPyByZXN1bHQuX19jZGF0YSA6ICcnKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGNvbmZpZy5lbmFibGVUb1N0cmluZ0Z1bmMgJiYgKHJlc3VsdC5fX3RleHQgfHwgcmVzdWx0Ll9fY2RhdGEpKSB7XHJcblx0XHRcdFx0cmVzdWx0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gKHRoaXMuX190ZXh0ID8gdGhpcy5fX3RleHQgOiAnJykgKyAodGhpcy5fX2NkYXRhID8gdGhpcy5fX2NkYXRhIDogJycpO1xyXG5cdFx0XHRcdH07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZGVzZXJpYWxpemVEb21DaGlsZHJlbihub2RlLCBwYXJlbnRQYXRoKSB7XHJcblx0XHRcdGlmIChub2RlLm5vZGVUeXBlID09PSBET01Ob2RlVHlwZXMuRE9DVU1FTlRfTk9ERSkge1xyXG5cdFx0XHRcdHJldHVybiBkZXNlcmlhbGl6ZVJvb3RFbGVtZW50Q2hpbGRyZW4obm9kZSk7XHJcblx0XHRcdH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gRE9NTm9kZVR5cGVzLkVMRU1FTlRfTk9ERSkge1xyXG5cdFx0XHRcdHJldHVybiBkZXNlcmlhbGl6ZUVsZW1lbnRDaGlsZHJlbihub2RlLCBwYXJlbnRQYXRoKTtcclxuXHRcdFx0fSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSBET01Ob2RlVHlwZXMuVEVYVF9OT0RFIHx8IG5vZGUubm9kZVR5cGUgPT09IERPTU5vZGVUeXBlcy5DREFUQV9TRUNUSU9OX05PREUpIHtcclxuXHRcdFx0XHRyZXR1cm4gbm9kZS5ub2RlVmFsdWU7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBzZXJpYWxpemVTdGFydFRhZyhqc09iamVjdCwgZWxlbWVudE5hbWUsIGF0dHJpYnV0ZU5hbWVzLCBzZWxmQ2xvc2luZykge1xyXG5cdFx0XHR2YXIgcmVzdWx0U3RyID0gXCI8XCIgKyAoKGpzT2JqZWN0ICYmIGpzT2JqZWN0Ll9fcHJlZml4KSA/IChqc09iamVjdC5fX3ByZWZpeCArIFwiOlwiKSA6IFwiXCIpICsgZWxlbWVudE5hbWU7XHJcblxyXG5cdFx0XHRpZiAoYXR0cmlidXRlTmFtZXMpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGF0dHJpYnV0ZU5hbWVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHR2YXIgYXR0cmlidXRlTmFtZSA9IGF0dHJpYnV0ZU5hbWVzW2ldO1xyXG5cdFx0XHRcdFx0dmFyIGF0dHJpYnV0ZVZhbHVlID0ganNPYmplY3RbYXR0cmlidXRlTmFtZV07XHJcblxyXG5cdFx0XHRcdFx0aWYgKGNvbmZpZy5lc2NhcGVNb2RlKVxyXG5cdFx0XHRcdFx0XHRhdHRyaWJ1dGVWYWx1ZSA9IGVzY2FwZVhtbENoYXJzKGF0dHJpYnV0ZVZhbHVlKTtcclxuXHJcblx0XHRcdFx0XHRyZXN1bHRTdHIgKz0gXCIgXCIgKyBhdHRyaWJ1dGVOYW1lLnN1YnN0cihjb25maWcuYXR0cmlidXRlUHJlZml4Lmxlbmd0aCkgKyBcIj1cIjtcclxuXHJcblx0XHRcdFx0XHRpZiAoY29uZmlnLnVzZURvdWJsZVF1b3RlcylcclxuXHRcdFx0XHRcdFx0cmVzdWx0U3RyICs9ICdcIicgKyBhdHRyaWJ1dGVWYWx1ZSArICdcIic7XHJcblx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdHJlc3VsdFN0ciArPSBcIidcIiArIGF0dHJpYnV0ZVZhbHVlICsgXCInXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIXNlbGZDbG9zaW5nKVxyXG5cdFx0XHRcdHJlc3VsdFN0ciArPSBcIj5cIjtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJlc3VsdFN0ciArPSBcIiAvPlwiO1xyXG5cclxuXHRcdFx0cmV0dXJuIHJlc3VsdFN0cjtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBzZXJpYWxpemVFbmRUYWcoanNPYmplY3QsIGVsZW1lbnROYW1lKSB7XHJcblx0XHRcdHJldHVybiBcIjwvXCIgKyAoKGpzT2JqZWN0ICYmIGpzT2JqZWN0Ll9fcHJlZml4KSA/IChqc09iamVjdC5fX3ByZWZpeCArIFwiOlwiKSA6IFwiXCIpICsgZWxlbWVudE5hbWUgKyBcIj5cIjtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBlbmRzV2l0aChzdHIsIHN1ZmZpeCkge1xyXG5cdFx0XHRyZXR1cm4gc3RyLmluZGV4T2Yoc3VmZml4LCBzdHIubGVuZ3RoIC0gc3VmZml4Lmxlbmd0aCkgIT09IC0xO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGlzU3BlY2lhbFByb3BlcnR5KGpzb25PYmosIHByb3BlcnR5TmFtZSkge1xyXG5cdFx0XHRpZiAoKGNvbmZpZy5hcnJheUFjY2Vzc0Zvcm0gPT09IFwicHJvcGVydHlcIiAmJiBlbmRzV2l0aChwcm9wZXJ0eU5hbWUudG9TdHJpbmcoKSwgKFwiX2FzQXJyYXlcIikpKVxyXG5cdFx0XHRcdHx8IHByb3BlcnR5TmFtZS50b1N0cmluZygpLmluZGV4T2YoY29uZmlnLmF0dHJpYnV0ZVByZWZpeCkgPT09IDBcclxuXHRcdFx0XHR8fCBwcm9wZXJ0eU5hbWUudG9TdHJpbmcoKS5pbmRleE9mKFwiX19cIikgPT09IDBcclxuXHRcdFx0XHR8fCAoanNvbk9ialtwcm9wZXJ0eU5hbWVdIGluc3RhbmNlb2YgRnVuY3Rpb24pKVxyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGdldERhdGFFbGVtZW50Q291bnQoanNPYmplY3QpIHtcclxuXHRcdFx0dmFyIGNvdW50ID0gMDtcclxuXHJcblx0XHRcdGlmIChqc09iamVjdCBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG5cdFx0XHRcdGZvciAodmFyIHByb3BlcnR5TmFtZSBpbiBqc09iamVjdCkge1xyXG5cdFx0XHRcdFx0aWYgKGlzU3BlY2lhbFByb3BlcnR5KGpzT2JqZWN0LCBwcm9wZXJ0eU5hbWUpKVxyXG5cdFx0XHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdFx0XHRjb3VudCsrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGNvdW50O1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGdldERhdGFBdHRyaWJ1dGVOYW1lcyhqc09iamVjdCkge1xyXG5cdFx0XHR2YXIgbmFtZXMgPSBbXTtcclxuXHJcblx0XHRcdGlmIChqc09iamVjdCBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG5cdFx0XHRcdGZvciAodmFyIGF0dHJpYnV0ZU5hbWUgaW4ganNPYmplY3QpIHtcclxuXHRcdFx0XHRcdGlmIChhdHRyaWJ1dGVOYW1lLnRvU3RyaW5nKCkuaW5kZXhPZihcIl9fXCIpID09PSAtMVxyXG5cdFx0XHRcdFx0XHQmJiBhdHRyaWJ1dGVOYW1lLnRvU3RyaW5nKCkuaW5kZXhPZihjb25maWcuYXR0cmlidXRlUHJlZml4KSA9PT0gMCkge1xyXG5cdFx0XHRcdFx0XHRuYW1lcy5wdXNoKGF0dHJpYnV0ZU5hbWUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIG5hbWVzO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHNlcmlhbGl6ZUNvbXBsZXhUZXh0Tm9kZUNvbnRlbnRzKHRleHROb2RlKSB7XHJcblx0XHRcdHZhciByZXN1bHQgPSBcIlwiO1xyXG5cclxuXHRcdFx0aWYgKHRleHROb2RlLl9fY2RhdGEpIHtcclxuXHRcdFx0XHRyZXN1bHQgKz0gXCI8IVtDREFUQVtcIiArIHRleHROb2RlLl9fY2RhdGEgKyBcIl1dPlwiO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodGV4dE5vZGUuX190ZXh0IHx8IHR5cGVvZiAodGV4dE5vZGUuX190ZXh0KSA9PT0gJ251bWJlcicgfHwgdHlwZW9mICh0ZXh0Tm9kZS5fX3RleHQpID09PSAnYm9vbGVhbicpIHtcclxuXHRcdFx0XHRpZiAoY29uZmlnLmVzY2FwZU1vZGUpXHJcblx0XHRcdFx0XHRyZXN1bHQgKz0gZXNjYXBlWG1sQ2hhcnModGV4dE5vZGUuX190ZXh0KTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRyZXN1bHQgKz0gdGV4dE5vZGUuX190ZXh0O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHNlcmlhbGl6ZVRleHROb2RlQ29udGVudHModGV4dE5vZGUpIHtcclxuXHRcdFx0dmFyIHJlc3VsdCA9IFwiXCI7XHJcblxyXG5cdFx0XHRpZiAodGV4dE5vZGUgaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuXHRcdFx0XHRyZXN1bHQgKz0gc2VyaWFsaXplQ29tcGxleFRleHROb2RlQ29udGVudHModGV4dE5vZGUpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRleHROb2RlICE9PSBudWxsKSB7XHJcblx0XHRcdFx0aWYgKGNvbmZpZy5lc2NhcGVNb2RlKVxyXG5cdFx0XHRcdFx0cmVzdWx0ICs9IGVzY2FwZVhtbENoYXJzKHRleHROb2RlKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRyZXN1bHQgKz0gdGV4dE5vZGU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gc2VyaWFsaXplQXJyYXkoZWxlbWVudEFycmF5LCBlbGVtZW50TmFtZSwgYXR0cmlidXRlcykge1xyXG5cdFx0XHR2YXIgcmVzdWx0ID0gXCJcIjtcclxuXHJcblx0XHRcdGlmIChlbGVtZW50QXJyYXkubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdFx0cmVzdWx0ICs9IHNlcmlhbGl6ZVN0YXJ0VGFnKGVsZW1lbnRBcnJheSwgZWxlbWVudE5hbWUsIGF0dHJpYnV0ZXMsIHRydWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRyZXN1bHQgKz0gc2VyaWFsaXplSmF2YVNjcmlwdE9iamVjdChlbGVtZW50QXJyYXlbaV0sIGVsZW1lbnROYW1lLCBnZXREYXRhQXR0cmlidXRlTmFtZXMoZWxlbWVudEFycmF5W2ldKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHNlcmlhbGl6ZUphdmFTY3JpcHRPYmplY3QoZWxlbWVudCwgZWxlbWVudE5hbWUsIGF0dHJpYnV0ZXMpIHtcclxuXHRcdFx0dmFyIHJlc3VsdCA9IFwiXCI7XHJcblxyXG5cdFx0XHQvLyBGaWx0ZXIgb3V0IGVsZW1lbnRzXHJcblx0XHRcdGlmIChjb25maWcuanNBdHRyaWJ1dGVGaWx0ZXIgJiYgY29uZmlnLmpzQXR0cmlidXRlRmlsdGVyLmNhbGwobnVsbCwgZWxlbWVudE5hbWUsIGVsZW1lbnQpKSB7XHJcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBDb252ZXJ0IGVsZW1lbnRcclxuXHRcdFx0aWYgKGNvbmZpZy5qc0F0dHJpYnV0ZUNvbnZlcnRlcikge1xyXG5cdFx0XHRcdGVsZW1lbnQgPSBjb25maWcuanNBdHRyaWJ1dGVDb252ZXJ0ZXIuY2FsbChudWxsLCBlbGVtZW50TmFtZSwgZWxlbWVudCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKChlbGVtZW50ID09PSB1bmRlZmluZWQgfHwgZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSAnJykgJiYgY29uZmlnLnNlbGZDbG9zaW5nRWxlbWVudHMpIHtcclxuXHRcdFx0XHRyZXN1bHQgKz0gc2VyaWFsaXplU3RhcnRUYWcoZWxlbWVudCwgZWxlbWVudE5hbWUsIGF0dHJpYnV0ZXMsIHRydWUpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnb2JqZWN0Jykge1xyXG5cdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZWxlbWVudCkgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcclxuXHRcdFx0XHRcdHJlc3VsdCArPSBzZXJpYWxpemVBcnJheShlbGVtZW50LCBlbGVtZW50TmFtZSwgYXR0cmlidXRlcyk7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgRGF0ZSkge1xyXG5cdFx0XHRcdFx0cmVzdWx0ICs9IHNlcmlhbGl6ZVN0YXJ0VGFnKGVsZW1lbnQsIGVsZW1lbnROYW1lLCBhdHRyaWJ1dGVzLCBmYWxzZSk7XHJcblx0XHRcdFx0XHQvLyBTZXJpYWxpemUgZGF0ZVxyXG5cdFx0XHRcdFx0cmVzdWx0ICs9IGNvbmZpZy5qc0RhdGVVVEMgPyBlbGVtZW50LnRvVVRDU3RyaW5nKCkgOiBlbGVtZW50LnRvSVNPU3RyaW5nKCk7XHJcblx0XHRcdFx0XHRyZXN1bHQgKz0gc2VyaWFsaXplRW5kVGFnKGVsZW1lbnQsIGVsZW1lbnROYW1lKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dmFyIGNoaWxkRWxlbWVudENvdW50ID0gZ2V0RGF0YUVsZW1lbnRDb3VudChlbGVtZW50KTtcclxuXHRcdFx0XHRcdGlmIChjaGlsZEVsZW1lbnRDb3VudCA+IDAgfHwgdHlwZW9mIChlbGVtZW50Ll9fdGV4dCkgPT09ICdudW1iZXInIHx8IHR5cGVvZiAoZWxlbWVudC5fX3RleHQpID09PSAnYm9vbGVhbicgfHwgZWxlbWVudC5fX3RleHQgfHwgZWxlbWVudC5fX2NkYXRhKSB7XHJcblx0XHRcdFx0XHRcdHJlc3VsdCArPSBzZXJpYWxpemVTdGFydFRhZyhlbGVtZW50LCBlbGVtZW50TmFtZSwgYXR0cmlidXRlcywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRyZXN1bHQgKz0gc2VyaWFsaXplSmF2YVNjcmlwdE9iamVjdENoaWxkcmVuKGVsZW1lbnQpO1xyXG5cdFx0XHRcdFx0XHRyZXN1bHQgKz0gc2VyaWFsaXplRW5kVGFnKGVsZW1lbnQsIGVsZW1lbnROYW1lKTtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoY29uZmlnLnNlbGZDbG9zaW5nRWxlbWVudHMpIHtcclxuXHRcdFx0XHRcdFx0cmVzdWx0ICs9IHNlcmlhbGl6ZVN0YXJ0VGFnKGVsZW1lbnQsIGVsZW1lbnROYW1lLCBhdHRyaWJ1dGVzLCB0cnVlKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJlc3VsdCArPSBzZXJpYWxpemVTdGFydFRhZyhlbGVtZW50LCBlbGVtZW50TmFtZSwgYXR0cmlidXRlcywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRyZXN1bHQgKz0gc2VyaWFsaXplRW5kVGFnKGVsZW1lbnQsIGVsZW1lbnROYW1lKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0ICs9IHNlcmlhbGl6ZVN0YXJ0VGFnKGVsZW1lbnQsIGVsZW1lbnROYW1lLCBhdHRyaWJ1dGVzLCBmYWxzZSk7XHJcblx0XHRcdFx0cmVzdWx0ICs9IHNlcmlhbGl6ZVRleHROb2RlQ29udGVudHMoZWxlbWVudCk7XHJcblx0XHRcdFx0cmVzdWx0ICs9IHNlcmlhbGl6ZUVuZFRhZyhlbGVtZW50LCBlbGVtZW50TmFtZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gc2VyaWFsaXplSmF2YVNjcmlwdE9iamVjdENoaWxkcmVuKGpzT2JqZWN0KSB7XHJcblx0XHRcdHZhciByZXN1bHQgPSBcIlwiO1xyXG5cclxuXHRcdFx0dmFyIGVsZW1lbnRDb3VudCA9IGdldERhdGFFbGVtZW50Q291bnQoanNPYmplY3QpO1xyXG5cclxuXHRcdFx0aWYgKGVsZW1lbnRDb3VudCA+IDApIHtcclxuXHRcdFx0XHRmb3IgKHZhciBlbGVtZW50TmFtZSBpbiBqc09iamVjdCkge1xyXG5cdFx0XHRcdFx0aWYgKGlzU3BlY2lhbFByb3BlcnR5KGpzT2JqZWN0LCBlbGVtZW50TmFtZSkpXHJcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0XHRcdHZhciBlbGVtZW50ID0ganNPYmplY3RbZWxlbWVudE5hbWVdO1xyXG5cdFx0XHRcdFx0dmFyIGF0dHJpYnV0ZXMgPSBnZXREYXRhQXR0cmlidXRlTmFtZXMoZWxlbWVudCk7XHJcblxyXG5cdFx0XHRcdFx0cmVzdWx0ICs9IHNlcmlhbGl6ZUphdmFTY3JpcHRPYmplY3QoZWxlbWVudCwgZWxlbWVudE5hbWUsIGF0dHJpYnV0ZXMpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmVzdWx0ICs9IHNlcmlhbGl6ZVRleHROb2RlQ29udGVudHMoanNPYmplY3QpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBwYXJzZVhtbCh4bWwpIHtcclxuXHRcdFx0aWYgKHhtbCA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh0eXBlb2YgeG1sICE9PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBwYXJzZXIgPSBudWxsO1xyXG5cdFx0XHR2YXIgZG9tTm9kZSA9IG51bGw7XHJcblxyXG5cdFx0XHRpZiAoQ3VzdG9tRE9NUGFyc2VyKSB7XHJcblx0XHRcdFx0Ly8gVGhpcyBicmFuY2ggaXMgdXNlZCBmb3Igbm9kZS5qcywgd2l0aCB0aGUgeG1sZG9tIHBhcnNlci5cclxuXHRcdFx0XHRwYXJzZXIgPSBuZXcgQ3VzdG9tRE9NUGFyc2VyKGNvbmZpZy54bWxkb21PcHRpb25zKTtcclxuXHJcblx0XHRcdFx0ZG9tTm9kZSA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoeG1sLCBcInRleHQveG1sXCIpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHdpbmRvdyAmJiB3aW5kb3cuRE9NUGFyc2VyKSB7XHJcblx0XHRcdFx0cGFyc2VyID0gbmV3IHdpbmRvdy5ET01QYXJzZXIoKTtcclxuXHRcdFx0XHR2YXIgcGFyc2VyZXJyb3JOUyA9IG51bGw7XHJcblxyXG5cdFx0XHRcdHZhciBpc0lFUGFyc2VyID0gd2luZG93LkFjdGl2ZVhPYmplY3QgfHwgXCJBY3RpdmVYT2JqZWN0XCIgaW4gd2luZG93O1xyXG5cclxuXHRcdFx0XHQvLyBJRTkrIG5vdyBpcyBoZXJlXHJcblx0XHRcdFx0aWYgKCFpc0lFUGFyc2VyICYmIGRvY3VtZW50LmFsbCAmJiAhZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG5cdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0cGFyc2VyZXJyb3JOUyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoXCJJTlZBTElEXCIsIFwidGV4dC94bWxcIikuY2hpbGROb2Rlc1swXS5uYW1lc3BhY2VVUkk7XHJcblx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0XHRcdFx0cGFyc2VyZXJyb3JOUyA9IG51bGw7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0ZG9tTm9kZSA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoeG1sLCBcInRleHQveG1sXCIpO1xyXG5cdFx0XHRcdFx0aWYgKHBhcnNlcmVycm9yTlMgIT09IG51bGwgJiYgZG9tTm9kZS5nZXRFbGVtZW50c0J5VGFnTmFtZU5TKHBhcnNlcmVycm9yTlMsIFwicGFyc2VyZXJyb3JcIikubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0XHRkb21Ob2RlID0gbnVsbDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0XHRcdGRvbU5vZGUgPSBudWxsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBJRSA6KFxyXG5cdFx0XHRcdGlmICh4bWwuaW5kZXhPZihcIjw/XCIpID09PSAwKSB7XHJcblx0XHRcdFx0XHR4bWwgPSB4bWwuc3Vic3RyKHhtbC5pbmRleE9mKFwiPz5cIikgKyAyKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8qIGdsb2JhbCBBY3RpdmVYT2JqZWN0ICovXHJcblx0XHRcdFx0ZG9tTm9kZSA9IG5ldyBBY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTERPTVwiKTtcclxuXHRcdFx0XHRkb21Ob2RlLmFzeW5jID0gXCJmYWxzZVwiO1xyXG5cdFx0XHRcdGRvbU5vZGUubG9hZFhNTCh4bWwpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gZG9tTm9kZTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmFzQXJyYXkgPSBmdW5jdGlvbiBhc0FycmF5KHByb3ApIHtcclxuXHRcdFx0aWYgKHByb3AgPT09IHVuZGVmaW5lZCB8fCBwcm9wID09PSBudWxsKSB7XHJcblx0XHRcdFx0cmV0dXJuIFtdO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHByb3AgaW5zdGFuY2VvZiBBcnJheSkge1xyXG5cdFx0XHRcdHJldHVybiBwcm9wO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBbcHJvcF07XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy50b1htbERhdGVUaW1lID0gZnVuY3Rpb24gdG9YbWxEYXRlVGltZShkdCkge1xyXG5cdFx0XHRpZiAoZHQgaW5zdGFuY2VvZiBEYXRlKSB7XHJcblx0XHRcdFx0cmV0dXJuIGR0LnRvSVNPU3RyaW5nKCk7XHJcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIChkdCkgPT09ICdudW1iZXInKSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBEYXRlKGR0KS50b0lTT1N0cmluZygpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMuYXNEYXRlVGltZSA9IGZ1bmN0aW9uIGFzRGF0ZVRpbWUocHJvcCkge1xyXG5cdFx0XHRpZiAodHlwZW9mIChwcm9wKSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdHJldHVybiB4bWxEYXRlVGltZVRvRGF0ZShwcm9wKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gcHJvcDtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKlxyXG5cdFx0XHRJbnRlcm5hbGx5IHRoZSBsb2dpYyB3b3JrcyBpbiBhIGN5Y2xlOlxyXG5cdFx0XHRET00tPkpTIC0gaW1wbGVtZW50ZWQgYnkgY3VzdG9tIGxvZ2ljIChkZXNlcmlhbGl6YXRpb24pLlxyXG5cdFx0XHRKUy0+WE1MIC0gaW1wbGVtZW50ZWQgYnkgY3VzdG9tIGxvZ2ljIChzZXJpYWxpemF0aW9uKS5cclxuXHRcdFx0WE1MLT5ET00gLSBpbXBsZW1lbnRlZCBieSBicm93c2VyLlxyXG5cdFx0Ki9cclxuXHJcblx0XHQvLyBUcmFuc2Zvcm1ucyBhbiBYTUwgc3RyaW5nIGludG8gRE9NLXRyZWVcclxuXHRcdHRoaXMueG1sMmRvbSA9IGZ1bmN0aW9uIHhtbDJkb20oeG1sKSB7XHJcblx0XHRcdHJldHVybiBwYXJzZVhtbCh4bWwpO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvLyBUcmFuc2Zvcm1zIGEgRE9NIHRyZWUgdG8gSmF2YVNjcmlwdCBvYmplY3RzLlxyXG5cdFx0dGhpcy5kb20yanMgPSBmdW5jdGlvbiBkb20yanMoZG9tTm9kZSkge1xyXG5cdFx0XHRyZXR1cm4gZGVzZXJpYWxpemVEb21DaGlsZHJlbihkb21Ob2RlLCBudWxsKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gVHJhbnNmb3JtcyBKYXZhU2NyaXB0IG9iamVjdHMgdG8gYSBET00gdHJlZS5cclxuXHRcdHRoaXMuanMyZG9tID0gZnVuY3Rpb24ganMyZG9tKGpzT2JqZWN0KSB7XHJcblx0XHRcdHZhciB4bWwgPSB0aGlzLmpzMnhtbChqc09iamVjdCk7XHJcblx0XHRcdHJldHVybiBwYXJzZVhtbCh4bWwpO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvLyBUcmFuc2Zvcm1ucyBhbiBYTUwgc3RyaW5nIGludG8gSmF2YVNjcmlwdCBvYmplY3RzLlxyXG5cdFx0dGhpcy54bWwyanMgPSBmdW5jdGlvbiB4bWwyanMoeG1sKSB7XHJcblx0XHRcdHZhciBkb21Ob2RlID0gcGFyc2VYbWwoeG1sKTtcclxuXHRcdFx0aWYgKGRvbU5vZGUgIT0gbnVsbClcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5kb20yanMoZG9tTm9kZSk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gVHJhbnNmb3JtcyBKYXZhU2NyaXB0IG9iamVjdHMgaW50byBhbiBYTUwgc3RyaW5nLlxyXG5cdFx0dGhpcy5qczJ4bWwgPSBmdW5jdGlvbiBqczJ4bWwoanNPYmplY3QpIHtcclxuXHRcdFx0cmV0dXJuIHNlcmlhbGl6ZUphdmFTY3JpcHRPYmplY3RDaGlsZHJlbihqc09iamVjdCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMuZ2V0VmVyc2lvbiA9IGZ1bmN0aW9uIGdldFZlcnNpb24oKSB7XHJcblx0XHRcdHJldHVybiBWRVJTSU9OO1xyXG5cdFx0fTtcclxuXHR9O1xyXG59KTtcclxuIiwidmFyIGdsb2JhbCQxID0gKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOlxuICAgICAgICAgICAgdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDpcbiAgICAgICAgICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSk7XG5cbnZhciBsb29rdXAgPSBbXTtcbnZhciByZXZMb29rdXAgPSBbXTtcbnZhciBBcnIgPSB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBVaW50OEFycmF5IDogQXJyYXk7XG52YXIgaW5pdGVkID0gZmFsc2U7XG5mdW5jdGlvbiBpbml0ICgpIHtcbiAgaW5pdGVkID0gdHJ1ZTtcbiAgdmFyIGNvZGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjb2RlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgbG9va3VwW2ldID0gY29kZVtpXTtcbiAgICByZXZMb29rdXBbY29kZS5jaGFyQ29kZUF0KGkpXSA9IGk7XG4gIH1cblxuICByZXZMb29rdXBbJy0nLmNoYXJDb2RlQXQoMCldID0gNjI7XG4gIHJldkxvb2t1cFsnXycuY2hhckNvZGVBdCgwKV0gPSA2Mztcbn1cblxuZnVuY3Rpb24gdG9CeXRlQXJyYXkgKGI2NCkge1xuICBpZiAoIWluaXRlZCkge1xuICAgIGluaXQoKTtcbiAgfVxuICB2YXIgaSwgaiwgbCwgdG1wLCBwbGFjZUhvbGRlcnMsIGFycjtcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGg7XG5cbiAgaWYgKGxlbiAlIDQgPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0JylcbiAgfVxuXG4gIC8vIHRoZSBudW1iZXIgb2YgZXF1YWwgc2lnbnMgKHBsYWNlIGhvbGRlcnMpXG4gIC8vIGlmIHRoZXJlIGFyZSB0d28gcGxhY2Vob2xkZXJzLCB0aGFuIHRoZSB0d28gY2hhcmFjdGVycyBiZWZvcmUgaXRcbiAgLy8gcmVwcmVzZW50IG9uZSBieXRlXG4gIC8vIGlmIHRoZXJlIGlzIG9ubHkgb25lLCB0aGVuIHRoZSB0aHJlZSBjaGFyYWN0ZXJzIGJlZm9yZSBpdCByZXByZXNlbnQgMiBieXRlc1xuICAvLyB0aGlzIGlzIGp1c3QgYSBjaGVhcCBoYWNrIHRvIG5vdCBkbyBpbmRleE9mIHR3aWNlXG4gIHBsYWNlSG9sZGVycyA9IGI2NFtsZW4gLSAyXSA9PT0gJz0nID8gMiA6IGI2NFtsZW4gLSAxXSA9PT0gJz0nID8gMSA6IDA7XG5cbiAgLy8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG4gIGFyciA9IG5ldyBBcnIobGVuICogMyAvIDQgLSBwbGFjZUhvbGRlcnMpO1xuXG4gIC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcbiAgbCA9IHBsYWNlSG9sZGVycyA+IDAgPyBsZW4gLSA0IDogbGVuO1xuXG4gIHZhciBMID0gMDtcblxuICBmb3IgKGkgPSAwLCBqID0gMDsgaSA8IGw7IGkgKz0gNCwgaiArPSAzKSB7XG4gICAgdG1wID0gKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTgpIHwgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDEyKSB8IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA8PCA2KSB8IHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMyldO1xuICAgIGFycltMKytdID0gKHRtcCA+PiAxNikgJiAweEZGO1xuICAgIGFycltMKytdID0gKHRtcCA+PiA4KSAmIDB4RkY7XG4gICAgYXJyW0wrK10gPSB0bXAgJiAweEZGO1xuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVycyA9PT0gMikge1xuICAgIHRtcCA9IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDIpIHwgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldID4+IDQpO1xuICAgIGFycltMKytdID0gdG1wICYgMHhGRjtcbiAgfSBlbHNlIGlmIChwbGFjZUhvbGRlcnMgPT09IDEpIHtcbiAgICB0bXAgPSAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxMCkgfCAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgNCkgfCAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPj4gMik7XG4gICAgYXJyW0wrK10gPSAodG1wID4+IDgpICYgMHhGRjtcbiAgICBhcnJbTCsrXSA9IHRtcCAmIDB4RkY7XG4gIH1cblxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG4gIHJldHVybiBsb29rdXBbbnVtID4+IDE4ICYgMHgzRl0gKyBsb29rdXBbbnVtID4+IDEyICYgMHgzRl0gKyBsb29rdXBbbnVtID4+IDYgJiAweDNGXSArIGxvb2t1cFtudW0gJiAweDNGXVxufVxuXG5mdW5jdGlvbiBlbmNvZGVDaHVuayAodWludDgsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHRtcDtcbiAgdmFyIG91dHB1dCA9IFtdO1xuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMykge1xuICAgIHRtcCA9ICh1aW50OFtpXSA8PCAxNikgKyAodWludDhbaSArIDFdIDw8IDgpICsgKHVpbnQ4W2kgKyAyXSk7XG4gICAgb3V0cHV0LnB1c2godHJpcGxldFRvQmFzZTY0KHRtcCkpO1xuICB9XG4gIHJldHVybiBvdXRwdXQuam9pbignJylcbn1cblxuZnVuY3Rpb24gZnJvbUJ5dGVBcnJheSAodWludDgpIHtcbiAgaWYgKCFpbml0ZWQpIHtcbiAgICBpbml0KCk7XG4gIH1cbiAgdmFyIHRtcDtcbiAgdmFyIGxlbiA9IHVpbnQ4Lmxlbmd0aDtcbiAgdmFyIGV4dHJhQnl0ZXMgPSBsZW4gJSAzOyAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuICB2YXIgb3V0cHV0ID0gJyc7XG4gIHZhciBwYXJ0cyA9IFtdO1xuICB2YXIgbWF4Q2h1bmtMZW5ndGggPSAxNjM4MzsgLy8gbXVzdCBiZSBtdWx0aXBsZSBvZiAzXG5cbiAgLy8gZ28gdGhyb3VnaCB0aGUgYXJyYXkgZXZlcnkgdGhyZWUgYnl0ZXMsIHdlJ2xsIGRlYWwgd2l0aCB0cmFpbGluZyBzdHVmZiBsYXRlclxuICBmb3IgKHZhciBpID0gMCwgbGVuMiA9IGxlbiAtIGV4dHJhQnl0ZXM7IGkgPCBsZW4yOyBpICs9IG1heENodW5rTGVuZ3RoKSB7XG4gICAgcGFydHMucHVzaChlbmNvZGVDaHVuayh1aW50OCwgaSwgKGkgKyBtYXhDaHVua0xlbmd0aCkgPiBsZW4yID8gbGVuMiA6IChpICsgbWF4Q2h1bmtMZW5ndGgpKSk7XG4gIH1cblxuICAvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG4gIGlmIChleHRyYUJ5dGVzID09PSAxKSB7XG4gICAgdG1wID0gdWludDhbbGVuIC0gMV07XG4gICAgb3V0cHV0ICs9IGxvb2t1cFt0bXAgPj4gMl07XG4gICAgb3V0cHV0ICs9IGxvb2t1cFsodG1wIDw8IDQpICYgMHgzRl07XG4gICAgb3V0cHV0ICs9ICc9PSc7XG4gIH0gZWxzZSBpZiAoZXh0cmFCeXRlcyA9PT0gMikge1xuICAgIHRtcCA9ICh1aW50OFtsZW4gLSAyXSA8PCA4KSArICh1aW50OFtsZW4gLSAxXSk7XG4gICAgb3V0cHV0ICs9IGxvb2t1cFt0bXAgPj4gMTBdO1xuICAgIG91dHB1dCArPSBsb29rdXBbKHRtcCA+PiA0KSAmIDB4M0ZdO1xuICAgIG91dHB1dCArPSBsb29rdXBbKHRtcCA8PCAyKSAmIDB4M0ZdO1xuICAgIG91dHB1dCArPSAnPSc7XG4gIH1cblxuICBwYXJ0cy5wdXNoKG91dHB1dCk7XG5cbiAgcmV0dXJuIHBhcnRzLmpvaW4oJycpXG59XG5cbmZ1bmN0aW9uIHJlYWQgKGJ1ZmZlciwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG07XG4gIHZhciBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxO1xuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMTtcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxO1xuICB2YXIgbkJpdHMgPSAtNztcbiAgdmFyIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMDtcbiAgdmFyIGQgPSBpc0xFID8gLTEgOiAxO1xuICB2YXIgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXTtcblxuICBpICs9IGQ7XG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSk7XG4gIHMgPj49ICgtbkJpdHMpO1xuICBuQml0cyArPSBlTGVuO1xuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gZSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpO1xuICBlID4+PSAoLW5CaXRzKTtcbiAgbkJpdHMgKz0gbUxlbjtcbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IG0gKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXM7XG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KVxuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbik7XG4gICAgZSA9IGUgLSBlQmlhcztcbiAgfVxuICByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIE1hdGgucG93KDIsIGUgLSBtTGVuKVxufVxuXG5mdW5jdGlvbiB3cml0ZSAoYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGM7XG4gIHZhciBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxO1xuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMTtcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxO1xuICB2YXIgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApO1xuICB2YXIgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpO1xuICB2YXIgZCA9IGlzTEUgPyAxIDogLTE7XG4gIHZhciBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwO1xuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpO1xuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwO1xuICAgIGUgPSBlTWF4O1xuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKTtcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS07XG4gICAgICBjICo9IDI7XG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcyk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrO1xuICAgICAgYyAvPSAyO1xuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDA7XG4gICAgICBlID0gZU1heDtcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKHZhbHVlICogYyAtIDEpICogTWF0aC5wb3coMiwgbUxlbik7XG4gICAgICBlID0gZSArIGVCaWFzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbik7XG4gICAgICBlID0gMDtcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KSB7fVxuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG07XG4gIGVMZW4gKz0gbUxlbjtcbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBlICYgMHhmZiwgaSArPSBkLCBlIC89IDI1NiwgZUxlbiAtPSA4KSB7fVxuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyODtcbn1cblxudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbnZhciBJTlNQRUNUX01BWF9CWVRFUyA9IDUwO1xuXG4vKipcbiAqIElmIGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGA6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBVc2UgT2JqZWN0IGltcGxlbWVudGF0aW9uIChtb3N0IGNvbXBhdGlibGUsIGV2ZW4gSUU2KVxuICpcbiAqIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCB0eXBlZCBhcnJheXMgYXJlIElFIDEwKywgRmlyZWZveCA0KywgQ2hyb21lIDcrLCBTYWZhcmkgNS4xKyxcbiAqIE9wZXJhIDExLjYrLCBpT1MgNC4yKy5cbiAqXG4gKiBEdWUgdG8gdmFyaW91cyBicm93c2VyIGJ1Z3MsIHNvbWV0aW1lcyB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uIHdpbGwgYmUgdXNlZCBldmVuXG4gKiB3aGVuIHRoZSBicm93c2VyIHN1cHBvcnRzIHR5cGVkIGFycmF5cy5cbiAqXG4gKiBOb3RlOlxuICpcbiAqICAgLSBGaXJlZm94IDQtMjkgbGFja3Mgc3VwcG9ydCBmb3IgYWRkaW5nIG5ldyBwcm9wZXJ0aWVzIHRvIGBVaW50OEFycmF5YCBpbnN0YW5jZXMsXG4gKiAgICAgU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzguXG4gKlxuICogICAtIENocm9tZSA5LTEwIGlzIG1pc3NpbmcgdGhlIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24uXG4gKlxuICogICAtIElFMTAgaGFzIGEgYnJva2VuIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhcnJheXMgb2ZcbiAqICAgICBpbmNvcnJlY3QgbGVuZ3RoIGluIHNvbWUgc2l0dWF0aW9ucy5cblxuICogV2UgZGV0ZWN0IHRoZXNlIGJ1Z2d5IGJyb3dzZXJzIGFuZCBzZXQgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYCB0byBgZmFsc2VgIHNvIHRoZXlcbiAqIGdldCB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uLCB3aGljaCBpcyBzbG93ZXIgYnV0IGJlaGF2ZXMgY29ycmVjdGx5LlxuICovXG5CdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCA9IGdsb2JhbCQxLlRZUEVEX0FSUkFZX1NVUFBPUlQgIT09IHVuZGVmaW5lZFxuICA/IGdsb2JhbCQxLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgOiB0cnVlO1xuXG4vKlxuICogRXhwb3J0IGtNYXhMZW5ndGggYWZ0ZXIgdHlwZWQgYXJyYXkgc3VwcG9ydCBpcyBkZXRlcm1pbmVkLlxuICovXG5rTWF4TGVuZ3RoKCk7XG5cbmZ1bmN0aW9uIGtNYXhMZW5ndGggKCkge1xuICByZXR1cm4gQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgICA/IDB4N2ZmZmZmZmZcbiAgICA6IDB4M2ZmZmZmZmZcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyICh0aGF0LCBsZW5ndGgpIHtcbiAgaWYgKGtNYXhMZW5ndGgoKSA8IGxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHR5cGVkIGFycmF5IGxlbmd0aCcpXG4gIH1cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IG5ldyBVaW50OEFycmF5KGxlbmd0aCk7XG4gICAgdGhhdC5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlO1xuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gYW4gb2JqZWN0IGluc3RhbmNlIG9mIHRoZSBCdWZmZXIgY2xhc3NcbiAgICBpZiAodGhhdCA9PT0gbnVsbCkge1xuICAgICAgdGhhdCA9IG5ldyBCdWZmZXIobGVuZ3RoKTtcbiAgICB9XG4gICAgdGhhdC5sZW5ndGggPSBsZW5ndGg7XG4gIH1cblxuICByZXR1cm4gdGhhdFxufVxuXG4vKipcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgaGF2ZSB0aGVpclxuICogcHJvdG90eXBlIGNoYW5nZWQgdG8gYEJ1ZmZlci5wcm90b3R5cGVgLiBGdXJ0aGVybW9yZSwgYEJ1ZmZlcmAgaXMgYSBzdWJjbGFzcyBvZlxuICogYFVpbnQ4QXJyYXlgLCBzbyB0aGUgcmV0dXJuZWQgaW5zdGFuY2VzIHdpbGwgaGF2ZSBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgbWV0aG9kc1xuICogYW5kIHRoZSBgVWludDhBcnJheWAgbWV0aG9kcy4gU3F1YXJlIGJyYWNrZXQgbm90YXRpb24gd29ya3MgYXMgZXhwZWN0ZWQgLS0gaXRcbiAqIHJldHVybnMgYSBzaW5nbGUgb2N0ZXQuXG4gKlxuICogVGhlIGBVaW50OEFycmF5YCBwcm90b3R5cGUgcmVtYWlucyB1bm1vZGlmaWVkLlxuICovXG5cbmZ1bmN0aW9uIEJ1ZmZlciAoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJiAhKHRoaXMgaW5zdGFuY2VvZiBCdWZmZXIpKSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICAvLyBDb21tb24gY2FzZS5cbiAgaWYgKHR5cGVvZiBhcmcgPT09ICdudW1iZXInKSB7XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZ09yT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnSWYgZW5jb2RpbmcgaXMgc3BlY2lmaWVkIHRoZW4gdGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcnXG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiBhbGxvY1Vuc2FmZSh0aGlzLCBhcmcpXG4gIH1cbiAgcmV0dXJuIGZyb20odGhpcywgYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wb29sU2l6ZSA9IDgxOTI7IC8vIG5vdCB1c2VkIGJ5IHRoaXMgaW1wbGVtZW50YXRpb25cblxuLy8gVE9ETzogTGVnYWN5LCBub3QgbmVlZGVkIGFueW1vcmUuIFJlbW92ZSBpbiBuZXh0IG1ham9yIHZlcnNpb24uXG5CdWZmZXIuX2F1Z21lbnQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGFyci5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlO1xuICByZXR1cm4gYXJyXG59O1xuXG5mdW5jdGlvbiBmcm9tICh0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIGEgbnVtYmVyJylcbiAgfVxuXG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm4gZnJvbUFycmF5QnVmZmVyKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmcm9tU3RyaW5nKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0KVxuICB9XG5cbiAgcmV0dXJuIGZyb21PYmplY3QodGhhdCwgdmFsdWUpXG59XG5cbi8qKlxuICogRnVuY3Rpb25hbGx5IGVxdWl2YWxlbnQgdG8gQnVmZmVyKGFyZywgZW5jb2RpbmcpIGJ1dCB0aHJvd3MgYSBUeXBlRXJyb3JcbiAqIGlmIHZhbHVlIGlzIGEgbnVtYmVyLlxuICogQnVmZmVyLmZyb20oc3RyWywgZW5jb2RpbmddKVxuICogQnVmZmVyLmZyb20oYXJyYXkpXG4gKiBCdWZmZXIuZnJvbShidWZmZXIpXG4gKiBCdWZmZXIuZnJvbShhcnJheUJ1ZmZlclssIGJ5dGVPZmZzZXRbLCBsZW5ndGhdXSlcbiAqKi9cbkJ1ZmZlci5mcm9tID0gZnVuY3Rpb24gKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGZyb20obnVsbCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn07XG5cbmlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICBCdWZmZXIucHJvdG90eXBlLl9fcHJvdG9fXyA9IFVpbnQ4QXJyYXkucHJvdG90eXBlO1xuICBCdWZmZXIuX19wcm90b19fID0gVWludDhBcnJheTtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC5zcGVjaWVzICYmXG4gICAgICBCdWZmZXJbU3ltYm9sLnNwZWNpZXNdID09PSBCdWZmZXIpIDtcbn1cblxuZnVuY3Rpb24gYXNzZXJ0U2l6ZSAoc2l6ZSkge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBiZSBhIG51bWJlcicpXG4gIH0gZWxzZSBpZiAoc2l6ZSA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgbmVnYXRpdmUnKVxuICB9XG59XG5cbmZ1bmN0aW9uIGFsbG9jICh0aGF0LCBzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICBhc3NlcnRTaXplKHNpemUpO1xuICBpZiAoc2l6ZSA8PSAwKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKVxuICB9XG4gIGlmIChmaWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPbmx5IHBheSBhdHRlbnRpb24gdG8gZW5jb2RpbmcgaWYgaXQncyBhIHN0cmluZy4gVGhpc1xuICAgIC8vIHByZXZlbnRzIGFjY2lkZW50YWxseSBzZW5kaW5nIGluIGEgbnVtYmVyIHRoYXQgd291bGRcbiAgICAvLyBiZSBpbnRlcnByZXR0ZWQgYXMgYSBzdGFydCBvZmZzZXQuXG4gICAgcmV0dXJuIHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZydcbiAgICAgID8gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpLmZpbGwoZmlsbCwgZW5jb2RpbmcpXG4gICAgICA6IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwpXG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqIGFsbG9jKHNpemVbLCBmaWxsWywgZW5jb2RpbmddXSlcbiAqKi9cbkJ1ZmZlci5hbGxvYyA9IGZ1bmN0aW9uIChzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICByZXR1cm4gYWxsb2MobnVsbCwgc2l6ZSwgZmlsbCwgZW5jb2RpbmcpXG59O1xuXG5mdW5jdGlvbiBhbGxvY1Vuc2FmZSAodGhhdCwgc2l6ZSkge1xuICBhc3NlcnRTaXplKHNpemUpO1xuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUgPCAwID8gMCA6IGNoZWNrZWQoc2l6ZSkgfCAwKTtcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICB0aGF0W2ldID0gMDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIEJ1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufTtcbi8qKlxuICogRXF1aXZhbGVudCB0byBTbG93QnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZVNsb3cgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUobnVsbCwgc2l6ZSlcbn07XG5cbmZ1bmN0aW9uIGZyb21TdHJpbmcgKHRoYXQsIHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycgfHwgZW5jb2RpbmcgPT09ICcnKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCc7XG4gIH1cblxuICBpZiAoIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiZW5jb2RpbmdcIiBtdXN0IGJlIGEgdmFsaWQgc3RyaW5nIGVuY29kaW5nJylcbiAgfVxuXG4gIHZhciBsZW5ndGggPSBieXRlTGVuZ3RoKHN0cmluZywgZW5jb2RpbmcpIHwgMDtcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW5ndGgpO1xuXG4gIHZhciBhY3R1YWwgPSB0aGF0LndyaXRlKHN0cmluZywgZW5jb2RpbmcpO1xuXG4gIGlmIChhY3R1YWwgIT09IGxlbmd0aCkge1xuICAgIC8vIFdyaXRpbmcgYSBoZXggc3RyaW5nLCBmb3IgZXhhbXBsZSwgdGhhdCBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnMgd2lsbFxuICAgIC8vIGNhdXNlIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpcnN0IGludmFsaWQgY2hhcmFjdGVyIHRvIGJlIGlnbm9yZWQuIChlLmcuXG4gICAgLy8gJ2FieHhjZCcgd2lsbCBiZSB0cmVhdGVkIGFzICdhYicpXG4gICAgdGhhdCA9IHRoYXQuc2xpY2UoMCwgYWN0dWFsKTtcbiAgfVxuXG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUxpa2UgKHRoYXQsIGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGggPCAwID8gMCA6IGNoZWNrZWQoYXJyYXkubGVuZ3RoKSB8IDA7XG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoYXRbaV0gPSBhcnJheVtpXSAmIDI1NTtcbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlCdWZmZXIgKHRoYXQsIGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgYXJyYXkuYnl0ZUxlbmd0aDsgLy8gdGhpcyB0aHJvd3MgaWYgYGFycmF5YCBpcyBub3QgYSB2YWxpZCBBcnJheUJ1ZmZlclxuXG4gIGlmIChieXRlT2Zmc2V0IDwgMCB8fCBhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdvZmZzZXRcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQgKyAobGVuZ3RoIHx8IDApKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ2xlbmd0aFxcJyBpcyBvdXQgb2YgYm91bmRzJylcbiAgfVxuXG4gIGlmIChieXRlT2Zmc2V0ID09PSB1bmRlZmluZWQgJiYgbGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5KTtcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQpO1xuICB9IGVsc2Uge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG4gIH1cblxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICB0aGF0ID0gYXJyYXk7XG4gICAgdGhhdC5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlO1xuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gYW4gb2JqZWN0IGluc3RhbmNlIG9mIHRoZSBCdWZmZXIgY2xhc3NcbiAgICB0aGF0ID0gZnJvbUFycmF5TGlrZSh0aGF0LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbU9iamVjdCAodGhhdCwgb2JqKSB7XG4gIGlmIChpbnRlcm5hbElzQnVmZmVyKG9iaikpIHtcbiAgICB2YXIgbGVuID0gY2hlY2tlZChvYmoubGVuZ3RoKSB8IDA7XG4gICAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW4pO1xuXG4gICAgaWYgKHRoYXQubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhhdFxuICAgIH1cblxuICAgIG9iai5jb3B5KHRoYXQsIDAsIDAsIGxlbik7XG4gICAgcmV0dXJuIHRoYXRcbiAgfVxuXG4gIGlmIChvYmopIHtcbiAgICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgb2JqLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB8fCAnbGVuZ3RoJyBpbiBvYmopIHtcbiAgICAgIGlmICh0eXBlb2Ygb2JqLmxlbmd0aCAhPT0gJ251bWJlcicgfHwgaXNuYW4ob2JqLmxlbmd0aCkpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCAwKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqKVxuICAgIH1cblxuICAgIGlmIChvYmoudHlwZSA9PT0gJ0J1ZmZlcicgJiYgaXNBcnJheShvYmouZGF0YSkpIHtcbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iai5kYXRhKVxuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcsIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEFycmF5LCBvciBhcnJheS1saWtlIG9iamVjdC4nKVxufVxuXG5mdW5jdGlvbiBjaGVja2VkIChsZW5ndGgpIHtcbiAgLy8gTm90ZTogY2Fubm90IHVzZSBgbGVuZ3RoIDwga01heExlbmd0aCgpYCBoZXJlIGJlY2F1c2UgdGhhdCBmYWlscyB3aGVuXG4gIC8vIGxlbmd0aCBpcyBOYU4gKHdoaWNoIGlzIG90aGVyd2lzZSBjb2VyY2VkIHRvIHplcm8uKVxuICBpZiAobGVuZ3RoID49IGtNYXhMZW5ndGgoKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIGFsbG9jYXRlIEJ1ZmZlciBsYXJnZXIgdGhhbiBtYXhpbXVtICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICdzaXplOiAweCcgKyBrTWF4TGVuZ3RoKCkudG9TdHJpbmcoMTYpICsgJyBieXRlcycpXG4gIH1cbiAgcmV0dXJuIGxlbmd0aCB8IDBcbn1cbkJ1ZmZlci5pc0J1ZmZlciA9IGlzQnVmZmVyO1xuZnVuY3Rpb24gaW50ZXJuYWxJc0J1ZmZlciAoYikge1xuICByZXR1cm4gISEoYiAhPSBudWxsICYmIGIuX2lzQnVmZmVyKVxufVxuXG5CdWZmZXIuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKGEsIGIpIHtcbiAgaWYgKCFpbnRlcm5hbElzQnVmZmVyKGEpIHx8ICFpbnRlcm5hbElzQnVmZmVyKGIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIG11c3QgYmUgQnVmZmVycycpXG4gIH1cblxuICBpZiAoYSA9PT0gYikgcmV0dXJuIDBcblxuICB2YXIgeCA9IGEubGVuZ3RoO1xuICB2YXIgeSA9IGIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBNYXRoLm1pbih4LCB5KTsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKGFbaV0gIT09IGJbaV0pIHtcbiAgICAgIHggPSBhW2ldO1xuICAgICAgeSA9IGJbaV07XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn07XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gaXNFbmNvZGluZyAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnbGF0aW4xJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59O1xuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0IChsaXN0LCBsZW5ndGgpIHtcbiAgaWYgKCFpc0FycmF5KGxpc3QpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBCdWZmZXIuYWxsb2MoMClcbiAgfVxuXG4gIHZhciBpO1xuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBsZW5ndGggPSAwO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICBsZW5ndGggKz0gbGlzdFtpXS5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZmZlciA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShsZW5ndGgpO1xuICB2YXIgcG9zID0gMDtcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgYnVmID0gbGlzdFtpXTtcbiAgICBpZiAoIWludGVybmFsSXNCdWZmZXIoYnVmKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgICB9XG4gICAgYnVmLmNvcHkoYnVmZmVyLCBwb3MpO1xuICAgIHBvcyArPSBidWYubGVuZ3RoO1xuICB9XG4gIHJldHVybiBidWZmZXJcbn07XG5cbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKGludGVybmFsSXNCdWZmZXIoc3RyaW5nKSkge1xuICAgIHJldHVybiBzdHJpbmcubGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIEFycmF5QnVmZmVyLmlzVmlldyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgKEFycmF5QnVmZmVyLmlzVmlldyhzdHJpbmcpIHx8IHN0cmluZyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSkge1xuICAgIHJldHVybiBzdHJpbmcuYnl0ZUxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHN0cmluZyA9ICcnICsgc3RyaW5nO1xuICB9XG5cbiAgdmFyIGxlbiA9IHN0cmluZy5sZW5ndGg7XG4gIGlmIChsZW4gPT09IDApIHJldHVybiAwXG5cbiAgLy8gVXNlIGEgZm9yIGxvb3AgdG8gYXZvaWQgcmVjdXJzaW9uXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlO1xuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsZW5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIGxlbiAqIDJcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBsZW4gPj4+IDFcbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aCAvLyBhc3N1bWUgdXRmOFxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWU7XG4gICAgfVxuICB9XG59XG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGg7XG5cbmZ1bmN0aW9uIHNsb3dUb1N0cmluZyAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2U7XG5cbiAgLy8gTm8gbmVlZCB0byB2ZXJpZnkgdGhhdCBcInRoaXMubGVuZ3RoIDw9IE1BWF9VSU5UMzJcIiBzaW5jZSBpdCdzIGEgcmVhZC1vbmx5XG4gIC8vIHByb3BlcnR5IG9mIGEgdHlwZWQgYXJyYXkuXG5cbiAgLy8gVGhpcyBiZWhhdmVzIG5laXRoZXIgbGlrZSBTdHJpbmcgbm9yIFVpbnQ4QXJyYXkgaW4gdGhhdCB3ZSBzZXQgc3RhcnQvZW5kXG4gIC8vIHRvIHRoZWlyIHVwcGVyL2xvd2VyIGJvdW5kcyBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIG91dCBvZiByYW5nZS5cbiAgLy8gdW5kZWZpbmVkIGlzIGhhbmRsZWQgc3BlY2lhbGx5IGFzIHBlciBFQ01BLTI2MiA2dGggRWRpdGlvbixcbiAgLy8gU2VjdGlvbiAxMy4zLjMuNyBSdW50aW1lIFNlbWFudGljczogS2V5ZWRCaW5kaW5nSW5pdGlhbGl6YXRpb24uXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkIHx8IHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gMDtcbiAgfVxuICAvLyBSZXR1cm4gZWFybHkgaWYgc3RhcnQgPiB0aGlzLmxlbmd0aC4gRG9uZSBoZXJlIHRvIHByZXZlbnQgcG90ZW50aWFsIHVpbnQzMlxuICAvLyBjb2VyY2lvbiBmYWlsIGJlbG93LlxuICBpZiAoc3RhcnQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkIHx8IGVuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgZW5kID0gdGhpcy5sZW5ndGg7XG4gIH1cblxuICBpZiAoZW5kIDw9IDApIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIC8vIEZvcmNlIGNvZXJzaW9uIHRvIHVpbnQzMi4gVGhpcyB3aWxsIGFsc28gY29lcmNlIGZhbHNleS9OYU4gdmFsdWVzIHRvIDAuXG4gIGVuZCA+Pj49IDA7XG4gIHN0YXJ0ID4+Pj0gMDtcblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4JztcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1dGYxNmxlU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKGVuY29kaW5nICsgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuLy8gVGhlIHByb3BlcnR5IGlzIHVzZWQgYnkgYEJ1ZmZlci5pc0J1ZmZlcmAgYW5kIGBpcy1idWZmZXJgIChpbiBTYWZhcmkgNS03KSB0byBkZXRlY3Rcbi8vIEJ1ZmZlciBpbnN0YW5jZXMuXG5CdWZmZXIucHJvdG90eXBlLl9pc0J1ZmZlciA9IHRydWU7XG5cbmZ1bmN0aW9uIHN3YXAgKGIsIG4sIG0pIHtcbiAgdmFyIGkgPSBiW25dO1xuICBiW25dID0gYlttXTtcbiAgYlttXSA9IGk7XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDE2ID0gZnVuY3Rpb24gc3dhcDE2ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoO1xuICBpZiAobGVuICUgMiAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMTYtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMikge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDEpO1xuICB9XG4gIHJldHVybiB0aGlzXG59O1xuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAzMiA9IGZ1bmN0aW9uIHN3YXAzMiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aDtcbiAgaWYgKGxlbiAlIDQgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDMyLWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAzKTtcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgMik7XG4gIH1cbiAgcmV0dXJuIHRoaXNcbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDY0ID0gZnVuY3Rpb24gc3dhcDY0ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoO1xuICBpZiAobGVuICUgOCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNjQtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gOCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDcpO1xuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyA2KTtcbiAgICBzd2FwKHRoaXMsIGkgKyAyLCBpICsgNSk7XG4gICAgc3dhcCh0aGlzLCBpICsgMywgaSArIDQpO1xuICB9XG4gIHJldHVybiB0aGlzXG59O1xuXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGggfCAwO1xuICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gJydcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHJldHVybiB1dGY4U2xpY2UodGhpcywgMCwgbGVuZ3RoKVxuICByZXR1cm4gc2xvd1RvU3RyaW5nLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzIChiKSB7XG4gIGlmICghaW50ZXJuYWxJc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIGlmICh0aGlzID09PSBiKSByZXR1cm4gdHJ1ZVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYikgPT09IDBcbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uIGluc3BlY3QgKCkge1xuICB2YXIgc3RyID0gJyc7XG4gIHZhciBtYXggPSBJTlNQRUNUX01BWF9CWVRFUztcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIHN0ciA9IHRoaXMudG9TdHJpbmcoJ2hleCcsIDAsIG1heCkubWF0Y2goLy57Mn0vZykuam9pbignICcpO1xuICAgIGlmICh0aGlzLmxlbmd0aCA+IG1heCkgc3RyICs9ICcgLi4uICc7XG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBzdHIgKyAnPidcbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKHRhcmdldCwgc3RhcnQsIGVuZCwgdGhpc1N0YXJ0LCB0aGlzRW5kKSB7XG4gIGlmICghaW50ZXJuYWxJc0J1ZmZlcih0YXJnZXQpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIH1cblxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHN0YXJ0ID0gMDtcbiAgfVxuICBpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmQgPSB0YXJnZXQgPyB0YXJnZXQubGVuZ3RoIDogMDtcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzU3RhcnQgPSAwO1xuICB9XG4gIGlmICh0aGlzRW5kID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzRW5kID0gdGhpcy5sZW5ndGg7XG4gIH1cblxuICBpZiAoc3RhcnQgPCAwIHx8IGVuZCA+IHRhcmdldC5sZW5ndGggfHwgdGhpc1N0YXJ0IDwgMCB8fCB0aGlzRW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCAmJiBzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMVxuICB9XG5cbiAgc3RhcnQgPj4+PSAwO1xuICBlbmQgPj4+PSAwO1xuICB0aGlzU3RhcnQgPj4+PSAwO1xuICB0aGlzRW5kID4+Pj0gMDtcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0KSByZXR1cm4gMFxuXG4gIHZhciB4ID0gdGhpc0VuZCAtIHRoaXNTdGFydDtcbiAgdmFyIHkgPSBlbmQgLSBzdGFydDtcbiAgdmFyIGxlbiA9IE1hdGgubWluKHgsIHkpO1xuXG4gIHZhciB0aGlzQ29weSA9IHRoaXMuc2xpY2UodGhpc1N0YXJ0LCB0aGlzRW5kKTtcbiAgdmFyIHRhcmdldENvcHkgPSB0YXJnZXQuc2xpY2Uoc3RhcnQsIGVuZCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIGlmICh0aGlzQ29weVtpXSAhPT0gdGFyZ2V0Q29weVtpXSkge1xuICAgICAgeCA9IHRoaXNDb3B5W2ldO1xuICAgICAgeSA9IHRhcmdldENvcHlbaV07XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn07XG5cbi8vIEZpbmRzIGVpdGhlciB0aGUgZmlyc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0ID49IGBieXRlT2Zmc2V0YCxcbi8vIE9SIHRoZSBsYXN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA8PSBgYnl0ZU9mZnNldGAuXG4vL1xuLy8gQXJndW1lbnRzOlxuLy8gLSBidWZmZXIgLSBhIEJ1ZmZlciB0byBzZWFyY2hcbi8vIC0gdmFsIC0gYSBzdHJpbmcsIEJ1ZmZlciwgb3IgbnVtYmVyXG4vLyAtIGJ5dGVPZmZzZXQgLSBhbiBpbmRleCBpbnRvIGBidWZmZXJgOyB3aWxsIGJlIGNsYW1wZWQgdG8gYW4gaW50MzJcbi8vIC0gZW5jb2RpbmcgLSBhbiBvcHRpb25hbCBlbmNvZGluZywgcmVsZXZhbnQgaXMgdmFsIGlzIGEgc3RyaW5nXG4vLyAtIGRpciAtIHRydWUgZm9yIGluZGV4T2YsIGZhbHNlIGZvciBsYXN0SW5kZXhPZlxuZnVuY3Rpb24gYmlkaXJlY3Rpb25hbEluZGV4T2YgKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIC8vIEVtcHR5IGJ1ZmZlciBtZWFucyBubyBtYXRjaFxuICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC0xXG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXRcbiAgaWYgKHR5cGVvZiBieXRlT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gYnl0ZU9mZnNldDtcbiAgICBieXRlT2Zmc2V0ID0gMDtcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0ID4gMHg3ZmZmZmZmZikge1xuICAgIGJ5dGVPZmZzZXQgPSAweDdmZmZmZmZmO1xuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAtMHg4MDAwMDAwMCkge1xuICAgIGJ5dGVPZmZzZXQgPSAtMHg4MDAwMDAwMDtcbiAgfVxuICBieXRlT2Zmc2V0ID0gK2J5dGVPZmZzZXQ7ICAvLyBDb2VyY2UgdG8gTnVtYmVyLlxuICBpZiAoaXNOYU4oYnl0ZU9mZnNldCkpIHtcbiAgICAvLyBieXRlT2Zmc2V0OiBpdCBpdCdzIHVuZGVmaW5lZCwgbnVsbCwgTmFOLCBcImZvb1wiLCBldGMsIHNlYXJjaCB3aG9sZSBidWZmZXJcbiAgICBieXRlT2Zmc2V0ID0gZGlyID8gMCA6IChidWZmZXIubGVuZ3RoIC0gMSk7XG4gIH1cblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldDogbmVnYXRpdmUgb2Zmc2V0cyBzdGFydCBmcm9tIHRoZSBlbmQgb2YgdGhlIGJ1ZmZlclxuICBpZiAoYnl0ZU9mZnNldCA8IDApIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoICsgYnl0ZU9mZnNldDtcbiAgaWYgKGJ5dGVPZmZzZXQgPj0gYnVmZmVyLmxlbmd0aCkge1xuICAgIGlmIChkaXIpIHJldHVybiAtMVxuICAgIGVsc2UgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggLSAxO1xuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAwKSB7XG4gICAgaWYgKGRpcikgYnl0ZU9mZnNldCA9IDA7XG4gICAgZWxzZSByZXR1cm4gLTFcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSB2YWxcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsID0gQnVmZmVyLmZyb20odmFsLCBlbmNvZGluZyk7XG4gIH1cblxuICAvLyBGaW5hbGx5LCBzZWFyY2ggZWl0aGVyIGluZGV4T2YgKGlmIGRpciBpcyB0cnVlKSBvciBsYXN0SW5kZXhPZlxuICBpZiAoaW50ZXJuYWxJc0J1ZmZlcih2YWwpKSB7XG4gICAgLy8gU3BlY2lhbCBjYXNlOiBsb29raW5nIGZvciBlbXB0eSBzdHJpbmcvYnVmZmVyIGFsd2F5cyBmYWlsc1xuICAgIGlmICh2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDB4RkY7IC8vIFNlYXJjaCBmb3IgYSBieXRlIHZhbHVlIFswLTI1NV1cbiAgICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiZcbiAgICAgICAgdHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChkaXIpIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgWyB2YWwgXSwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbCBtdXN0IGJlIHN0cmluZywgbnVtYmVyIG9yIEJ1ZmZlcicpXG59XG5cbmZ1bmN0aW9uIGFycmF5SW5kZXhPZiAoYXJyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgdmFyIGluZGV4U2l6ZSA9IDE7XG4gIHZhciBhcnJMZW5ndGggPSBhcnIubGVuZ3RoO1xuICB2YXIgdmFsTGVuZ3RoID0gdmFsLmxlbmd0aDtcblxuICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChlbmNvZGluZyA9PT0gJ3VjczInIHx8IGVuY29kaW5nID09PSAndWNzLTInIHx8XG4gICAgICAgIGVuY29kaW5nID09PSAndXRmMTZsZScgfHwgZW5jb2RpbmcgPT09ICd1dGYtMTZsZScpIHtcbiAgICAgIGlmIChhcnIubGVuZ3RoIDwgMiB8fCB2YWwubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gLTFcbiAgICAgIH1cbiAgICAgIGluZGV4U2l6ZSA9IDI7XG4gICAgICBhcnJMZW5ndGggLz0gMjtcbiAgICAgIHZhbExlbmd0aCAvPSAyO1xuICAgICAgYnl0ZU9mZnNldCAvPSAyO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWQgKGJ1ZiwgaSkge1xuICAgIGlmIChpbmRleFNpemUgPT09IDEpIHtcbiAgICAgIHJldHVybiBidWZbaV1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJ1Zi5yZWFkVUludDE2QkUoaSAqIGluZGV4U2l6ZSlcbiAgICB9XG4gIH1cblxuICB2YXIgaTtcbiAgaWYgKGRpcikge1xuICAgIHZhciBmb3VuZEluZGV4ID0gLTE7XG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA8IGFyckxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocmVhZChhcnIsIGkpID09PSByZWFkKHZhbCwgZm91bmRJbmRleCA9PT0gLTEgPyAwIDogaSAtIGZvdW5kSW5kZXgpKSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ID09PSAtMSkgZm91bmRJbmRleCA9IGk7XG4gICAgICAgIGlmIChpIC0gZm91bmRJbmRleCArIDEgPT09IHZhbExlbmd0aCkgcmV0dXJuIGZvdW5kSW5kZXggKiBpbmRleFNpemVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ICE9PSAtMSkgaSAtPSBpIC0gZm91bmRJbmRleDtcbiAgICAgICAgZm91bmRJbmRleCA9IC0xO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoYnl0ZU9mZnNldCArIHZhbExlbmd0aCA+IGFyckxlbmd0aCkgYnl0ZU9mZnNldCA9IGFyckxlbmd0aCAtIHZhbExlbmd0aDtcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGZvdW5kID0gdHJ1ZTtcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHJlYWQoYXJyLCBpICsgaikgIT09IHJlYWQodmFsLCBqKSkge1xuICAgICAgICAgIGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGZvdW5kKSByZXR1cm4gaVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluY2x1ZGVzID0gZnVuY3Rpb24gaW5jbHVkZXMgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIHRoaXMuaW5kZXhPZih2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSAhPT0gLTFcbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIHRydWUpXG59O1xuXG5CdWZmZXIucHJvdG90eXBlLmxhc3RJbmRleE9mID0gZnVuY3Rpb24gbGFzdEluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGZhbHNlKVxufTtcblxuZnVuY3Rpb24gaGV4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwO1xuICB2YXIgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldDtcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmc7XG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aCk7XG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nO1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoO1xuICBpZiAoc3RyTGVuICUgMiAhPT0gMCkgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBoZXggc3RyaW5nJylcblxuICBpZiAobGVuZ3RoID4gc3RyTGVuIC8gMikge1xuICAgIGxlbmd0aCA9IHN0ckxlbiAvIDI7XG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIHZhciBwYXJzZWQgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpO1xuICAgIGlmIChpc05hTihwYXJzZWQpKSByZXR1cm4gaVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHBhcnNlZDtcbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiB1dGY4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGY4VG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBhc2NpaVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYXNjaWlUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGxhdGluMVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGFzY2lpV3JpdGUoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBiYXNlNjRXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gdWNzMldyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmMTZsZVRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIHdyaXRlIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZykge1xuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nKVxuICBpZiAob2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4JztcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aDtcbiAgICBvZmZzZXQgPSAwO1xuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBlbmNvZGluZylcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gb2Zmc2V0O1xuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuICAgIG9mZnNldCA9IDA7XG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIG9mZnNldFssIGxlbmd0aF1bLCBlbmNvZGluZ10pXG4gIH0gZWxzZSBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIG9mZnNldCA9IG9mZnNldCB8IDA7XG4gICAgaWYgKGlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGxlbmd0aCA9IGxlbmd0aCB8IDA7XG4gICAgICBpZiAoZW5jb2RpbmcgPT09IHVuZGVmaW5lZCkgZW5jb2RpbmcgPSAndXRmOCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVuY29kaW5nID0gbGVuZ3RoO1xuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgLy8gbGVnYWN5IHdyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKSAtIHJlbW92ZSBpbiB2MC4xM1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdCdWZmZXIud3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0WywgbGVuZ3RoXSkgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCdcbiAgICApXG4gIH1cblxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXQ7XG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCB8fCBsZW5ndGggPiByZW1haW5pbmcpIGxlbmd0aCA9IHJlbWFpbmluZztcblxuICBpZiAoKHN0cmluZy5sZW5ndGggPiAwICYmIChsZW5ndGggPCAwIHx8IG9mZnNldCA8IDApKSB8fCBvZmZzZXQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIHdyaXRlIG91dHNpZGUgYnVmZmVyIGJvdW5kcycpXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4JztcblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZTtcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgLy8gV2FybmluZzogbWF4TGVuZ3RoIG5vdCB0YWtlbiBpbnRvIGFjY291bnQgaW4gYmFzZTY0V3JpdGVcbiAgICAgICAgcmV0dXJuIGJhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1Y3MyV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQnVmZmVyJyxcbiAgICBkYXRhOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9hcnIgfHwgdGhpcywgMClcbiAgfVxufTtcblxuZnVuY3Rpb24gYmFzZTY0U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBidWYubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB1dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpO1xuICB2YXIgcmVzID0gW107XG5cbiAgdmFyIGkgPSBzdGFydDtcbiAgd2hpbGUgKGkgPCBlbmQpIHtcbiAgICB2YXIgZmlyc3RCeXRlID0gYnVmW2ldO1xuICAgIHZhciBjb2RlUG9pbnQgPSBudWxsO1xuICAgIHZhciBieXRlc1BlclNlcXVlbmNlID0gKGZpcnN0Qnl0ZSA+IDB4RUYpID8gNFxuICAgICAgOiAoZmlyc3RCeXRlID4gMHhERikgPyAzXG4gICAgICA6IChmaXJzdEJ5dGUgPiAweEJGKSA/IDJcbiAgICAgIDogMTtcblxuICAgIGlmIChpICsgYnl0ZXNQZXJTZXF1ZW5jZSA8PSBlbmQpIHtcbiAgICAgIHZhciBzZWNvbmRCeXRlLCB0aGlyZEJ5dGUsIGZvdXJ0aEJ5dGUsIHRlbXBDb2RlUG9pbnQ7XG5cbiAgICAgIHN3aXRjaCAoYnl0ZXNQZXJTZXF1ZW5jZSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaWYgKGZpcnN0Qnl0ZSA8IDB4ODApIHtcbiAgICAgICAgICAgIGNvZGVQb2ludCA9IGZpcnN0Qnl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdO1xuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4MUYpIDw8IDB4NiB8IChzZWNvbmRCeXRlICYgMHgzRik7XG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0YpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdO1xuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl07XG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHhDIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAodGhpcmRCeXRlICYgMHgzRik7XG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0ZGICYmICh0ZW1wQ29kZVBvaW50IDwgMHhEODAwIHx8IHRlbXBDb2RlUG9pbnQgPiAweERGRkYpKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXTtcbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdO1xuICAgICAgICAgIGZvdXJ0aEJ5dGUgPSBidWZbaSArIDNdO1xuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAoZm91cnRoQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHgxMiB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHhDIHwgKHRoaXJkQnl0ZSAmIDB4M0YpIDw8IDB4NiB8IChmb3VydGhCeXRlICYgMHgzRik7XG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4RkZGRiAmJiB0ZW1wQ29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvZGVQb2ludCA9PT0gbnVsbCkge1xuICAgICAgLy8gd2UgZGlkIG5vdCBnZW5lcmF0ZSBhIHZhbGlkIGNvZGVQb2ludCBzbyBpbnNlcnQgYVxuICAgICAgLy8gcmVwbGFjZW1lbnQgY2hhciAoVStGRkZEKSBhbmQgYWR2YW5jZSBvbmx5IDEgYnl0ZVxuICAgICAgY29kZVBvaW50ID0gMHhGRkZEO1xuICAgICAgYnl0ZXNQZXJTZXF1ZW5jZSA9IDE7XG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPiAweEZGRkYpIHtcbiAgICAgIC8vIGVuY29kZSB0byB1dGYxNiAoc3Vycm9nYXRlIHBhaXIgZGFuY2UpXG4gICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMDtcbiAgICAgIHJlcy5wdXNoKGNvZGVQb2ludCA+Pj4gMTAgJiAweDNGRiB8IDB4RDgwMCk7XG4gICAgICBjb2RlUG9pbnQgPSAweERDMDAgfCBjb2RlUG9pbnQgJiAweDNGRjtcbiAgICB9XG5cbiAgICByZXMucHVzaChjb2RlUG9pbnQpO1xuICAgIGkgKz0gYnl0ZXNQZXJTZXF1ZW5jZTtcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkocmVzKVxufVxuXG4vLyBCYXNlZCBvbiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjc0NzI3Mi82ODA3NDIsIHRoZSBicm93c2VyIHdpdGhcbi8vIHRoZSBsb3dlc3QgbGltaXQgaXMgQ2hyb21lLCB3aXRoIDB4MTAwMDAgYXJncy5cbi8vIFdlIGdvIDEgbWFnbml0dWRlIGxlc3MsIGZvciBzYWZldHlcbnZhciBNQVhfQVJHVU1FTlRTX0xFTkdUSCA9IDB4MTAwMDtcblxuZnVuY3Rpb24gZGVjb2RlQ29kZVBvaW50c0FycmF5IChjb2RlUG9pbnRzKSB7XG4gIHZhciBsZW4gPSBjb2RlUG9pbnRzLmxlbmd0aDtcbiAgaWYgKGxlbiA8PSBNQVhfQVJHVU1FTlRTX0xFTkdUSCkge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgY29kZVBvaW50cykgLy8gYXZvaWQgZXh0cmEgc2xpY2UoKVxuICB9XG5cbiAgLy8gRGVjb2RlIGluIGNodW5rcyB0byBhdm9pZCBcImNhbGwgc3RhY2sgc2l6ZSBleGNlZWRlZFwiLlxuICB2YXIgcmVzID0gJyc7XG4gIHZhciBpID0gMDtcbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShcbiAgICAgIFN0cmluZyxcbiAgICAgIGNvZGVQb2ludHMuc2xpY2UoaSwgaSArPSBNQVhfQVJHVU1FTlRTX0xFTkdUSClcbiAgICApO1xuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJztcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKTtcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSAmIDB4N0YpO1xuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gbGF0aW4xU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJyc7XG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZCk7XG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pO1xuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gaGV4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gYnVmLmxlbmd0aDtcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwO1xuICBpZiAoIWVuZCB8fCBlbmQgPCAwIHx8IGVuZCA+IGxlbikgZW5kID0gbGVuO1xuXG4gIHZhciBvdXQgPSAnJztcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKTtcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBieXRlcyA9IGJ1Zi5zbGljZShzdGFydCwgZW5kKTtcbiAgdmFyIHJlcyA9ICcnO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyBieXRlc1tpICsgMV0gKiAyNTYpO1xuICB9XG4gIHJldHVybiByZXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIHNsaWNlIChzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aDtcbiAgc3RhcnQgPSB+fnN0YXJ0O1xuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IH5+ZW5kO1xuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCArPSBsZW47XG4gICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSAwO1xuICB9IGVsc2UgaWYgKHN0YXJ0ID4gbGVuKSB7XG4gICAgc3RhcnQgPSBsZW47XG4gIH1cblxuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW47XG4gICAgaWYgKGVuZCA8IDApIGVuZCA9IDA7XG4gIH0gZWxzZSBpZiAoZW5kID4gbGVuKSB7XG4gICAgZW5kID0gbGVuO1xuICB9XG5cbiAgaWYgKGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydDtcblxuICB2YXIgbmV3QnVmO1xuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBuZXdCdWYgPSB0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpO1xuICAgIG5ld0J1Zi5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlO1xuICB9IGVsc2Uge1xuICAgIHZhciBzbGljZUxlbiA9IGVuZCAtIHN0YXJ0O1xuICAgIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZUxlbjsgKytpKSB7XG4gICAgICBuZXdCdWZbaV0gPSB0aGlzW2kgKyBzdGFydF07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld0J1ZlxufTtcblxuLypcbiAqIE5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgYnVmZmVyIGlzbid0IHRyeWluZyB0byB3cml0ZSBvdXQgb2YgYm91bmRzLlxuICovXG5mdW5jdGlvbiBjaGVja09mZnNldCAob2Zmc2V0LCBleHQsIGxlbmd0aCkge1xuICBpZiAoKG9mZnNldCAlIDEpICE9PSAwIHx8IG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdvZmZzZXQgaXMgbm90IHVpbnQnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gbGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRMRSA9IGZ1bmN0aW9uIHJlYWRVSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMDtcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwO1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKTtcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdO1xuICB2YXIgbXVsID0gMTtcbiAgdmFyIGkgPSAwO1xuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsO1xuICB9XG5cbiAgcmV0dXJuIHZhbFxufTtcblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludEJFID0gZnVuY3Rpb24gcmVhZFVJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwO1xuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDA7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKTtcbiAgfVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF07XG4gIHZhciBtdWwgPSAxO1xuICB3aGlsZSAoYnl0ZUxlbmd0aCA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdICogbXVsO1xuICB9XG5cbiAgcmV0dXJuIHZhbFxufTtcblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiByZWFkVUludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aCk7XG4gIHJldHVybiB0aGlzW29mZnNldF1cbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpO1xuICByZXR1cm4gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpO1xuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCA4KSB8IHRoaXNbb2Zmc2V0ICsgMV1cbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpO1xuXG4gIHJldHVybiAoKHRoaXNbb2Zmc2V0XSkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpKSArXG4gICAgICAodGhpc1tvZmZzZXQgKyAzXSAqIDB4MTAwMDAwMClcbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpO1xuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdICogMHgxMDAwMDAwKSArXG4gICAgKCh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgIHRoaXNbb2Zmc2V0ICsgM10pXG59O1xuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRMRSA9IGZ1bmN0aW9uIHJlYWRJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwO1xuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDA7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpO1xuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF07XG4gIHZhciBtdWwgPSAxO1xuICB2YXIgaSA9IDA7XG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWw7XG4gIH1cbiAgbXVsICo9IDB4ODA7XG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCk7XG5cbiAgcmV0dXJuIHZhbFxufTtcblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50QkUgPSBmdW5jdGlvbiByZWFkSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMDtcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwO1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKTtcblxuICB2YXIgaSA9IGJ5dGVMZW5ndGg7XG4gIHZhciBtdWwgPSAxO1xuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWldO1xuICB3aGlsZSAoaSA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWldICogbXVsO1xuICB9XG4gIG11bCAqPSAweDgwO1xuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpO1xuXG4gIHJldHVybiB2YWxcbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiByZWFkSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKTtcbiAgaWYgKCEodGhpc1tvZmZzZXRdICYgMHg4MCkpIHJldHVybiAodGhpc1tvZmZzZXRdKVxuICByZXR1cm4gKCgweGZmIC0gdGhpc1tvZmZzZXRdICsgMSkgKiAtMSlcbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiByZWFkSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKTtcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpO1xuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59O1xuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gcmVhZEludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aCk7XG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIDFdIHwgKHRoaXNbb2Zmc2V0XSA8PCA4KTtcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufTtcblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpO1xuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdKSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10gPDwgMjQpXG59O1xuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gcmVhZEludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aCk7XG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgMjQpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSlcbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiByZWFkRmxvYXRMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKTtcbiAgcmV0dXJuIHJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCAyMywgNClcbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiByZWFkRmxvYXRCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKTtcbiAgcmV0dXJuIHJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgMjMsIDQpXG59O1xuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKTtcbiAgcmV0dXJuIHJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCA1MiwgOClcbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gcmVhZERvdWJsZUJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpO1xuICByZXR1cm4gcmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCA1MiwgOClcbn07XG5cbmZ1bmN0aW9uIGNoZWNrSW50IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKCFpbnRlcm5hbElzQnVmZmVyKGJ1ZikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiYnVmZmVyXCIgYXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlciBpbnN0YW5jZScpXG4gIGlmICh2YWx1ZSA+IG1heCB8fCB2YWx1ZSA8IG1pbikgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBpcyBvdXQgb2YgYm91bmRzJylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludExFID0gZnVuY3Rpb24gd3JpdGVVSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlO1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwO1xuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDA7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxO1xuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKTtcbiAgfVxuXG4gIHZhciBtdWwgPSAxO1xuICB2YXIgaSA9IDA7XG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRjtcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkY7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufTtcblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlVUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZTtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMDtcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwO1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMTtcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMCk7XG4gIH1cblxuICB2YXIgaSA9IGJ5dGVMZW5ndGggLSAxO1xuICB2YXIgbXVsID0gMTtcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRjtcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGO1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uIHdyaXRlVUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlO1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwO1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweGZmLCAwKTtcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKTtcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZik7XG4gIHJldHVybiBvZmZzZXQgKyAxXG59O1xuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmYgKyB2YWx1ZSArIDE7XG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgMik7IGkgPCBqOyArK2kpIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgJiAoMHhmZiA8PCAoOCAqIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpKSkpID4+PlxuICAgICAgKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkgKiA4O1xuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlO1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwO1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApO1xuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKTtcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KTtcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKTtcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufTtcblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWU7XG4gIG9mZnNldCA9IG9mZnNldCB8IDA7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMCk7XG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOCk7XG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpO1xuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKTtcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufTtcblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MzIgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMTtcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCA0KTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSA+Pj4gKGxpdHRsZUVuZGlhbiA/IGkgOiAzIC0gaSkgKiA4KSAmIDB4ZmY7XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWU7XG4gIG9mZnNldCA9IG9mZnNldCB8IDA7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApO1xuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNCk7XG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpO1xuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpO1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpO1xuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpO1xuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59O1xuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZTtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMDtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMCk7XG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpO1xuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KTtcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KTtcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZik7XG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpO1xuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59O1xuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50TEUgPSBmdW5jdGlvbiB3cml0ZUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZTtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMDtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSk7XG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdCk7XG4gIH1cblxuICB2YXIgaSA9IDA7XG4gIHZhciBtdWwgPSAxO1xuICB2YXIgc3ViID0gMDtcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGO1xuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSAtIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxO1xuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGO1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlO1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwO1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIGxpbWl0ID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGggLSAxKTtcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KTtcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDE7XG4gIHZhciBtdWwgPSAxO1xuICB2YXIgc3ViID0gMDtcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRjtcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpICsgMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDE7XG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkY7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufTtcblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDggPSBmdW5jdGlvbiB3cml0ZUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlO1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwO1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweDdmLCAtMHg4MCk7XG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSk7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZiArIHZhbHVlICsgMTtcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZik7XG4gIHJldHVybiBvZmZzZXQgKyAxXG59O1xuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWU7XG4gIG9mZnNldCA9IG9mZnNldCB8IDA7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMCk7XG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpO1xuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpO1xuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpO1xuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59O1xuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWU7XG4gIG9mZnNldCA9IG9mZnNldCB8IDA7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMCk7XG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOCk7XG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpO1xuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKTtcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufTtcblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlO1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwO1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMCk7XG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpO1xuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpO1xuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KTtcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNCk7XG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSk7XG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZTtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMDtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApO1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDE7XG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpO1xuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KTtcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KTtcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZik7XG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpO1xuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59O1xuXG5mdW5jdGlvbiBjaGVja0lFRUU3NTQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG4gIGlmIChvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuZnVuY3Rpb24gd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA0KTtcbiAgfVxuICB3cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpO1xuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRMRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59O1xuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufTtcblxuZnVuY3Rpb24gd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgOCk7XG4gIH1cbiAgd3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KTtcbiAgcmV0dXJuIG9mZnNldCArIDhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufTtcblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUJFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn07XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uIGNvcHkgKHRhcmdldCwgdGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwO1xuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoO1xuICBpZiAodGFyZ2V0U3RhcnQgPj0gdGFyZ2V0Lmxlbmd0aCkgdGFyZ2V0U3RhcnQgPSB0YXJnZXQubGVuZ3RoO1xuICBpZiAoIXRhcmdldFN0YXJ0KSB0YXJnZXRTdGFydCA9IDA7XG4gIGlmIChlbmQgPiAwICYmIGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydDtcblxuICAvLyBDb3B5IDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVybiAwXG4gIGlmICh0YXJnZXQubGVuZ3RoID09PSAwIHx8IHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIEZhdGFsIGVycm9yIGNvbmRpdGlvbnNcbiAgaWYgKHRhcmdldFN0YXJ0IDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd0YXJnZXRTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgfVxuICBpZiAoc3RhcnQgPCAwIHx8IHN0YXJ0ID49IHRoaXMubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlU3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChlbmQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlRW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIC8vIEFyZSB3ZSBvb2I/XG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aCkgZW5kID0gdGhpcy5sZW5ndGg7XG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgPCBlbmQgLSBzdGFydCkge1xuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCArIHN0YXJ0O1xuICB9XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0O1xuICB2YXIgaTtcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0ICYmIHN0YXJ0IDwgdGFyZ2V0U3RhcnQgJiYgdGFyZ2V0U3RhcnQgPCBlbmQpIHtcbiAgICAvLyBkZXNjZW5kaW5nIGNvcHkgZnJvbSBlbmRcbiAgICBmb3IgKGkgPSBsZW4gLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF07XG4gICAgfVxuICB9IGVsc2UgaWYgKGxlbiA8IDEwMDAgfHwgIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gYXNjZW5kaW5nIGNvcHkgZnJvbSBzdGFydFxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF07XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIFVpbnQ4QXJyYXkucHJvdG90eXBlLnNldC5jYWxsKFxuICAgICAgdGFyZ2V0LFxuICAgICAgdGhpcy5zdWJhcnJheShzdGFydCwgc3RhcnQgKyBsZW4pLFxuICAgICAgdGFyZ2V0U3RhcnRcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIGxlblxufTtcblxuLy8gVXNhZ2U6XG4vLyAgICBidWZmZXIuZmlsbChudW1iZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKGJ1ZmZlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoc3RyaW5nWywgb2Zmc2V0WywgZW5kXV1bLCBlbmNvZGluZ10pXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiBmaWxsICh2YWwsIHN0YXJ0LCBlbmQsIGVuY29kaW5nKSB7XG4gIC8vIEhhbmRsZSBzdHJpbmcgY2FzZXM6XG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2Ygc3RhcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IHN0YXJ0O1xuICAgICAgc3RhcnQgPSAwO1xuICAgICAgZW5kID0gdGhpcy5sZW5ndGg7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZW5kID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBlbmQ7XG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aDtcbiAgICB9XG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHZhciBjb2RlID0gdmFsLmNoYXJDb2RlQXQoMCk7XG4gICAgICBpZiAoY29kZSA8IDI1Nikge1xuICAgICAgICB2YWwgPSBjb2RlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdlbmNvZGluZyBtdXN0IGJlIGEgc3RyaW5nJylcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZycgJiYgIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDI1NTtcbiAgfVxuXG4gIC8vIEludmFsaWQgcmFuZ2VzIGFyZSBub3Qgc2V0IHRvIGEgZGVmYXVsdCwgc28gY2FuIHJhbmdlIGNoZWNrIGVhcmx5LlxuICBpZiAoc3RhcnQgPCAwIHx8IHRoaXMubGVuZ3RoIDwgc3RhcnQgfHwgdGhpcy5sZW5ndGggPCBlbmQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignT3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc3RhcnQgPSBzdGFydCA+Pj4gMDtcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyB0aGlzLmxlbmd0aCA6IGVuZCA+Pj4gMDtcblxuICBpZiAoIXZhbCkgdmFsID0gMDtcblxuICB2YXIgaTtcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IHZhbDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGJ5dGVzID0gaW50ZXJuYWxJc0J1ZmZlcih2YWwpXG4gICAgICA/IHZhbFxuICAgICAgOiB1dGY4VG9CeXRlcyhuZXcgQnVmZmVyKHZhbCwgZW5jb2RpbmcpLnRvU3RyaW5nKCkpO1xuICAgIHZhciBsZW4gPSBieXRlcy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGVuZCAtIHN0YXJ0OyArK2kpIHtcbiAgICAgIHRoaXNbaSArIHN0YXJ0XSA9IGJ5dGVzW2kgJSBsZW5dO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzXG59O1xuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbnZhciBJTlZBTElEX0JBU0U2NF9SRSA9IC9bXitcXC8wLTlBLVphLXotX10vZztcblxuZnVuY3Rpb24gYmFzZTY0Y2xlYW4gKHN0cikge1xuICAvLyBOb2RlIHN0cmlwcyBvdXQgaW52YWxpZCBjaGFyYWN0ZXJzIGxpa2UgXFxuIGFuZCBcXHQgZnJvbSB0aGUgc3RyaW5nLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgc3RyID0gc3RyaW5ndHJpbShzdHIpLnJlcGxhY2UoSU5WQUxJRF9CQVNFNjRfUkUsICcnKTtcbiAgLy8gTm9kZSBjb252ZXJ0cyBzdHJpbmdzIHdpdGggbGVuZ3RoIDwgMiB0byAnJ1xuICBpZiAoc3RyLmxlbmd0aCA8IDIpIHJldHVybiAnJ1xuICAvLyBOb2RlIGFsbG93cyBmb3Igbm9uLXBhZGRlZCBiYXNlNjQgc3RyaW5ncyAobWlzc2luZyB0cmFpbGluZyA9PT0pLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgd2hpbGUgKHN0ci5sZW5ndGggJSA0ICE9PSAwKSB7XG4gICAgc3RyID0gc3RyICsgJz0nO1xuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxuZnVuY3Rpb24gdG9IZXggKG4pIHtcbiAgaWYgKG4gPCAxNikgcmV0dXJuICcwJyArIG4udG9TdHJpbmcoMTYpXG4gIHJldHVybiBuLnRvU3RyaW5nKDE2KVxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyaW5nLCB1bml0cykge1xuICB1bml0cyA9IHVuaXRzIHx8IEluZmluaXR5O1xuICB2YXIgY29kZVBvaW50O1xuICB2YXIgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aDtcbiAgdmFyIGxlYWRTdXJyb2dhdGUgPSBudWxsO1xuICB2YXIgYnl0ZXMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgY29kZVBvaW50ID0gc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG5cbiAgICAvLyBpcyBzdXJyb2dhdGUgY29tcG9uZW50XG4gICAgaWYgKGNvZGVQb2ludCA+IDB4RDdGRiAmJiBjb2RlUG9pbnQgPCAweEUwMDApIHtcbiAgICAgIC8vIGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoIWxlYWRTdXJyb2dhdGUpIHtcbiAgICAgICAgLy8gbm8gbGVhZCB5ZXRcbiAgICAgICAgaWYgKGNvZGVQb2ludCA+IDB4REJGRikge1xuICAgICAgICAgIC8vIHVuZXhwZWN0ZWQgdHJhaWxcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRCk7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIGlmIChpICsgMSA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgLy8gdW5wYWlyZWQgbGVhZFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKTtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmFsaWQgbGVhZFxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50O1xuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIDIgbGVhZHMgaW4gYSByb3dcbiAgICAgIGlmIChjb2RlUG9pbnQgPCAweERDMDApIHtcbiAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpO1xuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50O1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyB2YWxpZCBzdXJyb2dhdGUgcGFpclxuICAgICAgY29kZVBvaW50ID0gKGxlYWRTdXJyb2dhdGUgLSAweEQ4MDAgPDwgMTAgfCBjb2RlUG9pbnQgLSAweERDMDApICsgMHgxMDAwMDtcbiAgICB9IGVsc2UgaWYgKGxlYWRTdXJyb2dhdGUpIHtcbiAgICAgIC8vIHZhbGlkIGJtcCBjaGFyLCBidXQgbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKTtcbiAgICB9XG5cbiAgICBsZWFkU3Vycm9nYXRlID0gbnVsbDtcblxuICAgIC8vIGVuY29kZSB1dGY4XG4gICAgaWYgKGNvZGVQb2ludCA8IDB4ODApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMSkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChjb2RlUG9pbnQpO1xuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHg4MDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiB8IDB4QzAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAzKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDIHwgMHhFMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDQpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDEyIHwgMHhGMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29kZSBwb2ludCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpO1xuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVRvQnl0ZXMgKHN0ciwgdW5pdHMpIHtcbiAgdmFyIGMsIGhpLCBsbztcbiAgdmFyIGJ5dGVBcnJheSA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuXG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgIGhpID0gYyA+PiA4O1xuICAgIGxvID0gYyAlIDI1NjtcbiAgICBieXRlQXJyYXkucHVzaChsbyk7XG4gICAgYnl0ZUFycmF5LnB1c2goaGkpO1xuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5cbmZ1bmN0aW9uIGJhc2U2NFRvQnl0ZXMgKHN0cikge1xuICByZXR1cm4gdG9CeXRlQXJyYXkoYmFzZTY0Y2xlYW4oc3RyKSlcbn1cblxuZnVuY3Rpb24gYmxpdEJ1ZmZlciAoc3JjLCBkc3QsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldO1xuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIGlzbmFuICh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gdmFsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1jb21wYXJlXG59XG5cblxuLy8gdGhlIGZvbGxvd2luZyBpcyBmcm9tIGlzLWJ1ZmZlciwgYWxzbyBieSBGZXJvc3MgQWJvdWtoYWRpamVoIGFuZCB3aXRoIHNhbWUgbGlzZW5jZVxuLy8gVGhlIF9pc0J1ZmZlciBjaGVjayBpcyBmb3IgU2FmYXJpIDUtNyBzdXBwb3J0LCBiZWNhdXNlIGl0J3MgbWlzc2luZ1xuLy8gT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseVxuZnVuY3Rpb24gaXNCdWZmZXIob2JqKSB7XG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiAoISFvYmouX2lzQnVmZmVyIHx8IGlzRmFzdEJ1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopKVxufVxuXG5mdW5jdGlvbiBpc0Zhc3RCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0Zhc3RCdWZmZXIob2JqLnNsaWNlKDAsIDApKVxufVxuXG5jbGFzcyBDc3ZFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoY29kZSwgbWVzc2FnZSwgb3B0aW9ucywgLi4uY29udGV4dHMpIHtcbiAgICBpZihBcnJheS5pc0FycmF5KG1lc3NhZ2UpKSBtZXNzYWdlID0gbWVzc2FnZS5qb2luKCcgJykudHJpbSgpO1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIGlmKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlICE9PSB1bmRlZmluZWQpe1xuICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgQ3N2RXJyb3IpO1xuICAgIH1cbiAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICAgIGZvcihjb25zdCBjb250ZXh0IG9mIGNvbnRleHRzKXtcbiAgICAgIGZvcihjb25zdCBrZXkgaW4gY29udGV4dCl7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gY29udGV4dFtrZXldO1xuICAgICAgICB0aGlzW2tleV0gPSBpc0J1ZmZlcih2YWx1ZSkgPyB2YWx1ZS50b1N0cmluZyhvcHRpb25zLmVuY29kaW5nKSA6IHZhbHVlID09IG51bGwgPyB2YWx1ZSA6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuY29uc3QgaXNfb2JqZWN0ID0gZnVuY3Rpb24ob2JqKXtcbiAgcmV0dXJuICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmogIT09IG51bGwgJiYgIUFycmF5LmlzQXJyYXkob2JqKSk7XG59O1xuXG5jb25zdCBub3JtYWxpemVfY29sdW1uc19hcnJheSA9IGZ1bmN0aW9uKGNvbHVtbnMpe1xuICBjb25zdCBub3JtYWxpemVkQ29sdW1ucyA9IFtdO1xuICBmb3IobGV0IGkgPSAwLCBsID0gY29sdW1ucy5sZW5ndGg7IGkgPCBsOyBpKyspe1xuICAgIGNvbnN0IGNvbHVtbiA9IGNvbHVtbnNbaV07XG4gICAgaWYoY29sdW1uID09PSB1bmRlZmluZWQgfHwgY29sdW1uID09PSBudWxsIHx8IGNvbHVtbiA9PT0gZmFsc2Upe1xuICAgICAgbm9ybWFsaXplZENvbHVtbnNbaV0gPSB7IGRpc2FibGVkOiB0cnVlIH07XG4gICAgfWVsc2UgaWYodHlwZW9mIGNvbHVtbiA9PT0gJ3N0cmluZycpe1xuICAgICAgbm9ybWFsaXplZENvbHVtbnNbaV0gPSB7IG5hbWU6IGNvbHVtbiB9O1xuICAgIH1lbHNlIGlmKGlzX29iamVjdChjb2x1bW4pKXtcbiAgICAgIGlmKHR5cGVvZiBjb2x1bW4ubmFtZSAhPT0gJ3N0cmluZycpe1xuICAgICAgICB0aHJvdyBuZXcgQ3N2RXJyb3IoJ0NTVl9PUFRJT05fQ09MVU1OU19NSVNTSU5HX05BTUUnLCBbXG4gICAgICAgICAgJ09wdGlvbiBjb2x1bW5zIG1pc3NpbmcgbmFtZTonLFxuICAgICAgICAgIGBwcm9wZXJ0eSBcIm5hbWVcIiBpcyByZXF1aXJlZCBhdCBwb3NpdGlvbiAke2l9YCxcbiAgICAgICAgICAnd2hlbiBjb2x1bW4gaXMgYW4gb2JqZWN0IGxpdGVyYWwnXG4gICAgICAgIF0pO1xuICAgICAgfVxuICAgICAgbm9ybWFsaXplZENvbHVtbnNbaV0gPSBjb2x1bW47XG4gICAgfWVsc2Uge1xuICAgICAgdGhyb3cgbmV3IENzdkVycm9yKCdDU1ZfSU5WQUxJRF9DT0xVTU5fREVGSU5JVElPTicsIFtcbiAgICAgICAgJ0ludmFsaWQgY29sdW1uIGRlZmluaXRpb246JyxcbiAgICAgICAgJ2V4cGVjdCBhIHN0cmluZyBvciBhIGxpdGVyYWwgb2JqZWN0LCcsXG4gICAgICAgIGBnb3QgJHtKU09OLnN0cmluZ2lmeShjb2x1bW4pfSBhdCBwb3NpdGlvbiAke2l9YFxuICAgICAgXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBub3JtYWxpemVkQ29sdW1ucztcbn07XG5cbmNsYXNzIFJlc2l6ZWFibGVCdWZmZXJ7XG4gIGNvbnN0cnVjdG9yKHNpemU9MTAwKXtcbiAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgIHRoaXMubGVuZ3RoID0gMDtcbiAgICB0aGlzLmJ1ZiA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShzaXplKTtcbiAgfVxuICBwcmVwZW5kKHZhbCl7XG4gICAgaWYoaXNCdWZmZXIodmFsKSl7XG4gICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmxlbmd0aCArIHZhbC5sZW5ndGg7XG4gICAgICBpZihsZW5ndGggPj0gdGhpcy5zaXplKXtcbiAgICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICAgICAgaWYobGVuZ3RoID49IHRoaXMuc2l6ZSl7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoJ0lOVkFMSURfQlVGRkVSX1NUQVRFJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IGJ1ZiA9IHRoaXMuYnVmO1xuICAgICAgdGhpcy5idWYgPSBCdWZmZXIuYWxsb2NVbnNhZmUodGhpcy5zaXplKTtcbiAgICAgIHZhbC5jb3B5KHRoaXMuYnVmLCAwKTtcbiAgICAgIGJ1Zi5jb3B5KHRoaXMuYnVmLCB2YWwubGVuZ3RoKTtcbiAgICAgIHRoaXMubGVuZ3RoICs9IHZhbC5sZW5ndGg7XG4gICAgfWVsc2Uge1xuICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5sZW5ndGgrKztcbiAgICAgIGlmKGxlbmd0aCA9PT0gdGhpcy5zaXplKXtcbiAgICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGJ1ZiA9IHRoaXMuY2xvbmUoKTtcbiAgICAgIHRoaXMuYnVmWzBdID0gdmFsO1xuICAgICAgYnVmLmNvcHkodGhpcy5idWYsMSwgMCwgbGVuZ3RoKTtcbiAgICB9XG4gIH1cbiAgYXBwZW5kKHZhbCl7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5sZW5ndGgrKztcbiAgICBpZihsZW5ndGggPT09IHRoaXMuc2l6ZSl7XG4gICAgICB0aGlzLnJlc2l6ZSgpO1xuICAgIH1cbiAgICB0aGlzLmJ1ZltsZW5ndGhdID0gdmFsO1xuICB9XG4gIGNsb25lKCl7XG4gICAgcmV0dXJuIEJ1ZmZlci5mcm9tKHRoaXMuYnVmLnNsaWNlKDAsIHRoaXMubGVuZ3RoKSk7XG4gIH1cbiAgcmVzaXplKCl7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XG4gICAgdGhpcy5zaXplID0gdGhpcy5zaXplICogMjtcbiAgICBjb25zdCBidWYgPSBCdWZmZXIuYWxsb2NVbnNhZmUodGhpcy5zaXplKTtcbiAgICB0aGlzLmJ1Zi5jb3B5KGJ1ZiwwLCAwLCBsZW5ndGgpO1xuICAgIHRoaXMuYnVmID0gYnVmO1xuICB9XG4gIHRvU3RyaW5nKGVuY29kaW5nKXtcbiAgICBpZihlbmNvZGluZyl7XG4gICAgICByZXR1cm4gdGhpcy5idWYuc2xpY2UoMCwgdGhpcy5sZW5ndGgpLnRvU3RyaW5nKGVuY29kaW5nKTtcbiAgICB9ZWxzZSB7XG4gICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLmJ1Zi5zbGljZSgwLCB0aGlzLmxlbmd0aCkpO1xuICAgIH1cbiAgfVxuICB0b0pTT04oKXtcbiAgICByZXR1cm4gdGhpcy50b1N0cmluZygndXRmOCcpO1xuICB9XG4gIHJlc2V0KCl7XG4gICAgdGhpcy5sZW5ndGggPSAwO1xuICB9XG59XG5cbi8vIHdoaXRlIHNwYWNlIGNoYXJhY3RlcnNcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1doaXRlc3BhY2VfY2hhcmFjdGVyXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L0d1aWRlL1JlZ3VsYXJfRXhwcmVzc2lvbnMvQ2hhcmFjdGVyX0NsYXNzZXMjVHlwZXNcbi8vIFxcZlxcblxcclxcdFxcdlxcdTAwYTBcXHUxNjgwXFx1MjAwMC1cXHUyMDBhXFx1MjAyOFxcdTIwMjlcXHUyMDJmXFx1MjA1ZlxcdTMwMDBcXHVmZWZmXG5jb25zdCBucCA9IDEyO1xuY29uc3QgY3IkMSA9IDEzOyAvLyBgXFxyYCwgY2FycmlhZ2UgcmV0dXJuLCAweDBEIGluIGhleGFkw6ljaW1hbCwgMTMgaW4gZGVjaW1hbFxuY29uc3QgbmwkMSA9IDEwOyAvLyBgXFxuYCwgbmV3bGluZSwgMHgwQSBpbiBoZXhhZGVjaW1hbCwgMTAgaW4gZGVjaW1hbFxuY29uc3Qgc3BhY2UgPSAzMjtcbmNvbnN0IHRhYiA9IDk7XG5cbmNvbnN0IGluaXRfc3RhdGUgPSBmdW5jdGlvbihvcHRpb25zKXtcbiAgcmV0dXJuIHtcbiAgICBib21Ta2lwcGVkOiBmYWxzZSxcbiAgICBidWZCeXRlc1N0YXJ0OiAwLFxuICAgIGNhc3RGaWVsZDogb3B0aW9ucy5jYXN0X2Z1bmN0aW9uLFxuICAgIGNvbW1lbnRpbmc6IGZhbHNlLFxuICAgIC8vIEN1cnJlbnQgZXJyb3IgZW5jb3VudGVyZWQgYnkgYSByZWNvcmRcbiAgICBlcnJvcjogdW5kZWZpbmVkLFxuICAgIGVuYWJsZWQ6IG9wdGlvbnMuZnJvbV9saW5lID09PSAxLFxuICAgIGVzY2FwaW5nOiBmYWxzZSxcbiAgICBlc2NhcGVJc1F1b3RlOiBpc0J1ZmZlcihvcHRpb25zLmVzY2FwZSkgJiYgaXNCdWZmZXIob3B0aW9ucy5xdW90ZSkgJiYgQnVmZmVyLmNvbXBhcmUob3B0aW9ucy5lc2NhcGUsIG9wdGlvbnMucXVvdGUpID09PSAwLFxuICAgIC8vIGNvbHVtbnMgY2FuIGJlIGBmYWxzZWAsIGB0cnVlYCwgYEFycmF5YFxuICAgIGV4cGVjdGVkUmVjb3JkTGVuZ3RoOiBBcnJheS5pc0FycmF5KG9wdGlvbnMuY29sdW1ucykgPyBvcHRpb25zLmNvbHVtbnMubGVuZ3RoIDogdW5kZWZpbmVkLFxuICAgIGZpZWxkOiBuZXcgUmVzaXplYWJsZUJ1ZmZlcigyMCksXG4gICAgZmlyc3RMaW5lVG9IZWFkZXJzOiBvcHRpb25zLmNhc3RfZmlyc3RfbGluZV90b19oZWFkZXIsXG4gICAgbmVlZE1vcmVEYXRhU2l6ZTogTWF0aC5tYXgoXG4gICAgICAvLyBTa2lwIGlmIHRoZSByZW1haW5pbmcgYnVmZmVyIHNtYWxsZXIgdGhhbiBjb21tZW50XG4gICAgICBvcHRpb25zLmNvbW1lbnQgIT09IG51bGwgPyBvcHRpb25zLmNvbW1lbnQubGVuZ3RoIDogMCxcbiAgICAgIC8vIFNraXAgaWYgdGhlIHJlbWFpbmluZyBidWZmZXIgY2FuIGJlIGRlbGltaXRlclxuICAgICAgLi4ub3B0aW9ucy5kZWxpbWl0ZXIubWFwKChkZWxpbWl0ZXIpID0+IGRlbGltaXRlci5sZW5ndGgpLFxuICAgICAgLy8gU2tpcCBpZiB0aGUgcmVtYWluaW5nIGJ1ZmZlciBjYW4gYmUgZXNjYXBlIHNlcXVlbmNlXG4gICAgICBvcHRpb25zLnF1b3RlICE9PSBudWxsID8gb3B0aW9ucy5xdW90ZS5sZW5ndGggOiAwLFxuICAgICksXG4gICAgcHJldmlvdXNCdWY6IHVuZGVmaW5lZCxcbiAgICBxdW90aW5nOiBmYWxzZSxcbiAgICBzdG9wOiBmYWxzZSxcbiAgICByYXdCdWZmZXI6IG5ldyBSZXNpemVhYmxlQnVmZmVyKDEwMCksXG4gICAgcmVjb3JkOiBbXSxcbiAgICByZWNvcmRIYXNFcnJvcjogZmFsc2UsXG4gICAgcmVjb3JkX2xlbmd0aDogMCxcbiAgICByZWNvcmREZWxpbWl0ZXJNYXhMZW5ndGg6IG9wdGlvbnMucmVjb3JkX2RlbGltaXRlci5sZW5ndGggPT09IDAgPyAwIDogTWF0aC5tYXgoLi4ub3B0aW9ucy5yZWNvcmRfZGVsaW1pdGVyLm1hcCgodikgPT4gdi5sZW5ndGgpKSxcbiAgICB0cmltQ2hhcnM6IFtCdWZmZXIuZnJvbSgnICcsIG9wdGlvbnMuZW5jb2RpbmcpWzBdLCBCdWZmZXIuZnJvbSgnXFx0Jywgb3B0aW9ucy5lbmNvZGluZylbMF1dLFxuICAgIHdhc1F1b3Rpbmc6IGZhbHNlLFxuICAgIHdhc1Jvd0RlbGltaXRlcjogZmFsc2UsXG4gICAgdGltY2hhcnM6IFtcbiAgICAgIEJ1ZmZlci5mcm9tKEJ1ZmZlci5mcm9tKFtjciQxXSwgJ3V0ZjgnKS50b1N0cmluZygpLCBvcHRpb25zLmVuY29kaW5nKSxcbiAgICAgIEJ1ZmZlci5mcm9tKEJ1ZmZlci5mcm9tKFtubCQxXSwgJ3V0ZjgnKS50b1N0cmluZygpLCBvcHRpb25zLmVuY29kaW5nKSxcbiAgICAgIEJ1ZmZlci5mcm9tKEJ1ZmZlci5mcm9tKFtucF0sICd1dGY4JykudG9TdHJpbmcoKSwgb3B0aW9ucy5lbmNvZGluZyksXG4gICAgICBCdWZmZXIuZnJvbShCdWZmZXIuZnJvbShbc3BhY2VdLCAndXRmOCcpLnRvU3RyaW5nKCksIG9wdGlvbnMuZW5jb2RpbmcpLFxuICAgICAgQnVmZmVyLmZyb20oQnVmZmVyLmZyb20oW3RhYl0sICd1dGY4JykudG9TdHJpbmcoKSwgb3B0aW9ucy5lbmNvZGluZyksXG4gICAgXVxuICB9O1xufTtcblxuY29uc3QgdW5kZXJzY29yZSA9IGZ1bmN0aW9uKHN0cil7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCBmdW5jdGlvbihfLCBtYXRjaCl7XG4gICAgcmV0dXJuICdfJyArIG1hdGNoLnRvTG93ZXJDYXNlKCk7XG4gIH0pO1xufTtcblxuY29uc3Qgbm9ybWFsaXplX29wdGlvbnMgPSBmdW5jdGlvbihvcHRzKXtcbiAgY29uc3Qgb3B0aW9ucyA9IHt9O1xuICAvLyBNZXJnZSB3aXRoIHVzZXIgb3B0aW9uc1xuICBmb3IoY29uc3Qgb3B0IGluIG9wdHMpe1xuICAgIG9wdGlvbnNbdW5kZXJzY29yZShvcHQpXSA9IG9wdHNbb3B0XTtcbiAgfVxuICAvLyBOb3JtYWxpemUgb3B0aW9uIGBlbmNvZGluZ2BcbiAgLy8gTm90ZTogZGVmaW5lZCBmaXJzdCBiZWNhdXNlIG90aGVyIG9wdGlvbnMgZGVwZW5kcyBvbiBpdFxuICAvLyB0byBjb252ZXJ0IGNoYXJzL3N0cmluZ3MgaW50byBidWZmZXJzLlxuICBpZihvcHRpb25zLmVuY29kaW5nID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5lbmNvZGluZyA9PT0gdHJ1ZSl7XG4gICAgb3B0aW9ucy5lbmNvZGluZyA9ICd1dGY4JztcbiAgfWVsc2UgaWYob3B0aW9ucy5lbmNvZGluZyA9PT0gbnVsbCB8fCBvcHRpb25zLmVuY29kaW5nID09PSBmYWxzZSl7XG4gICAgb3B0aW9ucy5lbmNvZGluZyA9IG51bGw7XG4gIH1lbHNlIGlmKHR5cGVvZiBvcHRpb25zLmVuY29kaW5nICE9PSAnc3RyaW5nJyAmJiBvcHRpb25zLmVuY29kaW5nICE9PSBudWxsKXtcbiAgICB0aHJvdyBuZXcgQ3N2RXJyb3IoJ0NTVl9JTlZBTElEX09QVElPTl9FTkNPRElORycsIFtcbiAgICAgICdJbnZhbGlkIG9wdGlvbiBlbmNvZGluZzonLFxuICAgICAgJ2VuY29kaW5nIG11c3QgYmUgYSBzdHJpbmcgb3IgbnVsbCB0byByZXR1cm4gYSBidWZmZXIsJyxcbiAgICAgIGBnb3QgJHtKU09OLnN0cmluZ2lmeShvcHRpb25zLmVuY29kaW5nKX1gXG4gICAgXSwgb3B0aW9ucyk7XG4gIH1cbiAgLy8gTm9ybWFsaXplIG9wdGlvbiBgYm9tYFxuICBpZihvcHRpb25zLmJvbSA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMuYm9tID09PSBudWxsIHx8IG9wdGlvbnMuYm9tID09PSBmYWxzZSl7XG4gICAgb3B0aW9ucy5ib20gPSBmYWxzZTtcbiAgfWVsc2UgaWYob3B0aW9ucy5ib20gIT09IHRydWUpe1xuICAgIHRocm93IG5ldyBDc3ZFcnJvcignQ1NWX0lOVkFMSURfT1BUSU9OX0JPTScsIFtcbiAgICAgICdJbnZhbGlkIG9wdGlvbiBib206JywgJ2JvbSBtdXN0IGJlIHRydWUsJyxcbiAgICAgIGBnb3QgJHtKU09OLnN0cmluZ2lmeShvcHRpb25zLmJvbSl9YFxuICAgIF0sIG9wdGlvbnMpO1xuICB9XG4gIC8vIE5vcm1hbGl6ZSBvcHRpb24gYGNhc3RgXG4gIG9wdGlvbnMuY2FzdF9mdW5jdGlvbiA9IG51bGw7XG4gIGlmKG9wdGlvbnMuY2FzdCA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMuY2FzdCA9PT0gbnVsbCB8fCBvcHRpb25zLmNhc3QgPT09IGZhbHNlIHx8IG9wdGlvbnMuY2FzdCA9PT0gJycpe1xuICAgIG9wdGlvbnMuY2FzdCA9IHVuZGVmaW5lZDtcbiAgfWVsc2UgaWYodHlwZW9mIG9wdGlvbnMuY2FzdCA9PT0gJ2Z1bmN0aW9uJyl7XG4gICAgb3B0aW9ucy5jYXN0X2Z1bmN0aW9uID0gb3B0aW9ucy5jYXN0O1xuICAgIG9wdGlvbnMuY2FzdCA9IHRydWU7XG4gIH1lbHNlIGlmKG9wdGlvbnMuY2FzdCAhPT0gdHJ1ZSl7XG4gICAgdGhyb3cgbmV3IENzdkVycm9yKCdDU1ZfSU5WQUxJRF9PUFRJT05fQ0FTVCcsIFtcbiAgICAgICdJbnZhbGlkIG9wdGlvbiBjYXN0OicsICdjYXN0IG11c3QgYmUgdHJ1ZSBvciBhIGZ1bmN0aW9uLCcsXG4gICAgICBgZ290ICR7SlNPTi5zdHJpbmdpZnkob3B0aW9ucy5jYXN0KX1gXG4gICAgXSwgb3B0aW9ucyk7XG4gIH1cbiAgLy8gTm9ybWFsaXplIG9wdGlvbiBgY2FzdF9kYXRlYFxuICBpZihvcHRpb25zLmNhc3RfZGF0ZSA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMuY2FzdF9kYXRlID09PSBudWxsIHx8IG9wdGlvbnMuY2FzdF9kYXRlID09PSBmYWxzZSB8fCBvcHRpb25zLmNhc3RfZGF0ZSA9PT0gJycpe1xuICAgIG9wdGlvbnMuY2FzdF9kYXRlID0gZmFsc2U7XG4gIH1lbHNlIGlmKG9wdGlvbnMuY2FzdF9kYXRlID09PSB0cnVlKXtcbiAgICBvcHRpb25zLmNhc3RfZGF0ZSA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGNvbnN0IGRhdGUgPSBEYXRlLnBhcnNlKHZhbHVlKTtcbiAgICAgIHJldHVybiAhaXNOYU4oZGF0ZSkgPyBuZXcgRGF0ZShkYXRlKSA6IHZhbHVlO1xuICAgIH07XG4gIH1lbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5jYXN0X2RhdGUgIT09ICdmdW5jdGlvbicpe1xuICAgIHRocm93IG5ldyBDc3ZFcnJvcignQ1NWX0lOVkFMSURfT1BUSU9OX0NBU1RfREFURScsIFtcbiAgICAgICdJbnZhbGlkIG9wdGlvbiBjYXN0X2RhdGU6JywgJ2Nhc3RfZGF0ZSBtdXN0IGJlIHRydWUgb3IgYSBmdW5jdGlvbiwnLFxuICAgICAgYGdvdCAke0pTT04uc3RyaW5naWZ5KG9wdGlvbnMuY2FzdF9kYXRlKX1gXG4gICAgXSwgb3B0aW9ucyk7XG4gIH1cbiAgLy8gTm9ybWFsaXplIG9wdGlvbiBgY29sdW1uc2BcbiAgb3B0aW9ucy5jYXN0X2ZpcnN0X2xpbmVfdG9faGVhZGVyID0gbnVsbDtcbiAgaWYob3B0aW9ucy5jb2x1bW5zID09PSB0cnVlKXtcbiAgICAvLyBGaWVsZHMgaW4gdGhlIGZpcnN0IGxpbmUgYXJlIGNvbnZlcnRlZCBhcy1pcyB0byBjb2x1bW5zXG4gICAgb3B0aW9ucy5jYXN0X2ZpcnN0X2xpbmVfdG9faGVhZGVyID0gdW5kZWZpbmVkO1xuICB9ZWxzZSBpZih0eXBlb2Ygb3B0aW9ucy5jb2x1bW5zID09PSAnZnVuY3Rpb24nKXtcbiAgICBvcHRpb25zLmNhc3RfZmlyc3RfbGluZV90b19oZWFkZXIgPSBvcHRpb25zLmNvbHVtbnM7XG4gICAgb3B0aW9ucy5jb2x1bW5zID0gdHJ1ZTtcbiAgfWVsc2UgaWYoQXJyYXkuaXNBcnJheShvcHRpb25zLmNvbHVtbnMpKXtcbiAgICBvcHRpb25zLmNvbHVtbnMgPSBub3JtYWxpemVfY29sdW1uc19hcnJheShvcHRpb25zLmNvbHVtbnMpO1xuICB9ZWxzZSBpZihvcHRpb25zLmNvbHVtbnMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLmNvbHVtbnMgPT09IG51bGwgfHwgb3B0aW9ucy5jb2x1bW5zID09PSBmYWxzZSl7XG4gICAgb3B0aW9ucy5jb2x1bW5zID0gZmFsc2U7XG4gIH1lbHNlIHtcbiAgICB0aHJvdyBuZXcgQ3N2RXJyb3IoJ0NTVl9JTlZBTElEX09QVElPTl9DT0xVTU5TJywgW1xuICAgICAgJ0ludmFsaWQgb3B0aW9uIGNvbHVtbnM6JyxcbiAgICAgICdleHBlY3QgYW4gYXJyYXksIGEgZnVuY3Rpb24gb3IgdHJ1ZSwnLFxuICAgICAgYGdvdCAke0pTT04uc3RyaW5naWZ5KG9wdGlvbnMuY29sdW1ucyl9YFxuICAgIF0sIG9wdGlvbnMpO1xuICB9XG4gIC8vIE5vcm1hbGl6ZSBvcHRpb24gYGdyb3VwX2NvbHVtbnNfYnlfbmFtZWBcbiAgaWYob3B0aW9ucy5ncm91cF9jb2x1bW5zX2J5X25hbWUgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLmdyb3VwX2NvbHVtbnNfYnlfbmFtZSA9PT0gbnVsbCB8fCBvcHRpb25zLmdyb3VwX2NvbHVtbnNfYnlfbmFtZSA9PT0gZmFsc2Upe1xuICAgIG9wdGlvbnMuZ3JvdXBfY29sdW1uc19ieV9uYW1lID0gZmFsc2U7XG4gIH1lbHNlIGlmKG9wdGlvbnMuZ3JvdXBfY29sdW1uc19ieV9uYW1lICE9PSB0cnVlKXtcbiAgICB0aHJvdyBuZXcgQ3N2RXJyb3IoJ0NTVl9JTlZBTElEX09QVElPTl9HUk9VUF9DT0xVTU5TX0JZX05BTUUnLCBbXG4gICAgICAnSW52YWxpZCBvcHRpb24gZ3JvdXBfY29sdW1uc19ieV9uYW1lOicsXG4gICAgICAnZXhwZWN0IGFuIGJvb2xlYW4sJyxcbiAgICAgIGBnb3QgJHtKU09OLnN0cmluZ2lmeShvcHRpb25zLmdyb3VwX2NvbHVtbnNfYnlfbmFtZSl9YFxuICAgIF0sIG9wdGlvbnMpO1xuICB9ZWxzZSBpZihvcHRpb25zLmNvbHVtbnMgPT09IGZhbHNlKXtcbiAgICB0aHJvdyBuZXcgQ3N2RXJyb3IoJ0NTVl9JTlZBTElEX09QVElPTl9HUk9VUF9DT0xVTU5TX0JZX05BTUUnLCBbXG4gICAgICAnSW52YWxpZCBvcHRpb24gZ3JvdXBfY29sdW1uc19ieV9uYW1lOicsXG4gICAgICAndGhlIGBjb2x1bW5zYCBtb2RlIG11c3QgYmUgYWN0aXZhdGVkLidcbiAgICBdLCBvcHRpb25zKTtcbiAgfVxuICAvLyBOb3JtYWxpemUgb3B0aW9uIGBjb21tZW50YFxuICBpZihvcHRpb25zLmNvbW1lbnQgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLmNvbW1lbnQgPT09IG51bGwgfHwgb3B0aW9ucy5jb21tZW50ID09PSBmYWxzZSB8fCBvcHRpb25zLmNvbW1lbnQgPT09ICcnKXtcbiAgICBvcHRpb25zLmNvbW1lbnQgPSBudWxsO1xuICB9ZWxzZSB7XG4gICAgaWYodHlwZW9mIG9wdGlvbnMuY29tbWVudCA9PT0gJ3N0cmluZycpe1xuICAgICAgb3B0aW9ucy5jb21tZW50ID0gQnVmZmVyLmZyb20ob3B0aW9ucy5jb21tZW50LCBvcHRpb25zLmVuY29kaW5nKTtcbiAgICB9XG4gICAgaWYoIWlzQnVmZmVyKG9wdGlvbnMuY29tbWVudCkpe1xuICAgICAgdGhyb3cgbmV3IENzdkVycm9yKCdDU1ZfSU5WQUxJRF9PUFRJT05fQ09NTUVOVCcsIFtcbiAgICAgICAgJ0ludmFsaWQgb3B0aW9uIGNvbW1lbnQ6JyxcbiAgICAgICAgJ2NvbW1lbnQgbXVzdCBiZSBhIGJ1ZmZlciBvciBhIHN0cmluZywnLFxuICAgICAgICBgZ290ICR7SlNPTi5zdHJpbmdpZnkob3B0aW9ucy5jb21tZW50KX1gXG4gICAgICBdLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cbiAgLy8gTm9ybWFsaXplIG9wdGlvbiBgY29tbWVudF9ub19pbmZpeGBcbiAgaWYob3B0aW9ucy5jb21tZW50X25vX2luZml4ID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5jb21tZW50X25vX2luZml4ID09PSBudWxsIHx8IG9wdGlvbnMuY29tbWVudF9ub19pbmZpeCA9PT0gZmFsc2Upe1xuICAgIG9wdGlvbnMuY29tbWVudF9ub19pbmZpeCA9IGZhbHNlO1xuICB9ZWxzZSBpZihvcHRpb25zLmNvbW1lbnRfbm9faW5maXggIT09IHRydWUpe1xuICAgIHRocm93IG5ldyBDc3ZFcnJvcignQ1NWX0lOVkFMSURfT1BUSU9OX0NPTU1FTlQnLCBbXG4gICAgICAnSW52YWxpZCBvcHRpb24gY29tbWVudF9ub19pbmZpeDonLFxuICAgICAgJ3ZhbHVlIG11c3QgYmUgYSBib29sZWFuLCcsXG4gICAgICBgZ290ICR7SlNPTi5zdHJpbmdpZnkob3B0aW9ucy5jb21tZW50X25vX2luZml4KX1gXG4gICAgXSwgb3B0aW9ucyk7XG4gIH1cbiAgLy8gTm9ybWFsaXplIG9wdGlvbiBgZGVsaW1pdGVyYFxuICBjb25zdCBkZWxpbWl0ZXJfanNvbiA9IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuZGVsaW1pdGVyKTtcbiAgaWYoIUFycmF5LmlzQXJyYXkob3B0aW9ucy5kZWxpbWl0ZXIpKSBvcHRpb25zLmRlbGltaXRlciA9IFtvcHRpb25zLmRlbGltaXRlcl07XG4gIGlmKG9wdGlvbnMuZGVsaW1pdGVyLmxlbmd0aCA9PT0gMCl7XG4gICAgdGhyb3cgbmV3IENzdkVycm9yKCdDU1ZfSU5WQUxJRF9PUFRJT05fREVMSU1JVEVSJywgW1xuICAgICAgJ0ludmFsaWQgb3B0aW9uIGRlbGltaXRlcjonLFxuICAgICAgJ2RlbGltaXRlciBtdXN0IGJlIGEgbm9uIGVtcHR5IHN0cmluZyBvciBidWZmZXIgb3IgYXJyYXkgb2Ygc3RyaW5nfGJ1ZmZlciwnLFxuICAgICAgYGdvdCAke2RlbGltaXRlcl9qc29ufWBcbiAgICBdLCBvcHRpb25zKTtcbiAgfVxuICBvcHRpb25zLmRlbGltaXRlciA9IG9wdGlvbnMuZGVsaW1pdGVyLm1hcChmdW5jdGlvbihkZWxpbWl0ZXIpe1xuICAgIGlmKGRlbGltaXRlciA9PT0gdW5kZWZpbmVkIHx8IGRlbGltaXRlciA9PT0gbnVsbCB8fCBkZWxpbWl0ZXIgPT09IGZhbHNlKXtcbiAgICAgIHJldHVybiBCdWZmZXIuZnJvbSgnLCcsIG9wdGlvbnMuZW5jb2RpbmcpO1xuICAgIH1cbiAgICBpZih0eXBlb2YgZGVsaW1pdGVyID09PSAnc3RyaW5nJyl7XG4gICAgICBkZWxpbWl0ZXIgPSBCdWZmZXIuZnJvbShkZWxpbWl0ZXIsIG9wdGlvbnMuZW5jb2RpbmcpO1xuICAgIH1cbiAgICBpZighaXNCdWZmZXIoZGVsaW1pdGVyKSB8fCBkZWxpbWl0ZXIubGVuZ3RoID09PSAwKXtcbiAgICAgIHRocm93IG5ldyBDc3ZFcnJvcignQ1NWX0lOVkFMSURfT1BUSU9OX0RFTElNSVRFUicsIFtcbiAgICAgICAgJ0ludmFsaWQgb3B0aW9uIGRlbGltaXRlcjonLFxuICAgICAgICAnZGVsaW1pdGVyIG11c3QgYmUgYSBub24gZW1wdHkgc3RyaW5nIG9yIGJ1ZmZlciBvciBhcnJheSBvZiBzdHJpbmd8YnVmZmVyLCcsXG4gICAgICAgIGBnb3QgJHtkZWxpbWl0ZXJfanNvbn1gXG4gICAgICBdLCBvcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlbGltaXRlcjtcbiAgfSk7XG4gIC8vIE5vcm1hbGl6ZSBvcHRpb24gYGVzY2FwZWBcbiAgaWYob3B0aW9ucy5lc2NhcGUgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLmVzY2FwZSA9PT0gdHJ1ZSl7XG4gICAgb3B0aW9ucy5lc2NhcGUgPSBCdWZmZXIuZnJvbSgnXCInLCBvcHRpb25zLmVuY29kaW5nKTtcbiAgfWVsc2UgaWYodHlwZW9mIG9wdGlvbnMuZXNjYXBlID09PSAnc3RyaW5nJyl7XG4gICAgb3B0aW9ucy5lc2NhcGUgPSBCdWZmZXIuZnJvbShvcHRpb25zLmVzY2FwZSwgb3B0aW9ucy5lbmNvZGluZyk7XG4gIH1lbHNlIGlmIChvcHRpb25zLmVzY2FwZSA9PT0gbnVsbCB8fCBvcHRpb25zLmVzY2FwZSA9PT0gZmFsc2Upe1xuICAgIG9wdGlvbnMuZXNjYXBlID0gbnVsbDtcbiAgfVxuICBpZihvcHRpb25zLmVzY2FwZSAhPT0gbnVsbCl7XG4gICAgaWYoIWlzQnVmZmVyKG9wdGlvbnMuZXNjYXBlKSl7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgT3B0aW9uOiBlc2NhcGUgbXVzdCBiZSBhIGJ1ZmZlciwgYSBzdHJpbmcgb3IgYSBib29sZWFuLCBnb3QgJHtKU09OLnN0cmluZ2lmeShvcHRpb25zLmVzY2FwZSl9YCk7XG4gICAgfVxuICB9XG4gIC8vIE5vcm1hbGl6ZSBvcHRpb24gYGZyb21gXG4gIGlmKG9wdGlvbnMuZnJvbSA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMuZnJvbSA9PT0gbnVsbCl7XG4gICAgb3B0aW9ucy5mcm9tID0gMTtcbiAgfWVsc2Uge1xuICAgIGlmKHR5cGVvZiBvcHRpb25zLmZyb20gPT09ICdzdHJpbmcnICYmIC9cXGQrLy50ZXN0KG9wdGlvbnMuZnJvbSkpe1xuICAgICAgb3B0aW9ucy5mcm9tID0gcGFyc2VJbnQob3B0aW9ucy5mcm9tKTtcbiAgICB9XG4gICAgaWYoTnVtYmVyLmlzSW50ZWdlcihvcHRpb25zLmZyb20pKXtcbiAgICAgIGlmKG9wdGlvbnMuZnJvbSA8IDApe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgT3B0aW9uOiBmcm9tIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyLCBnb3QgJHtKU09OLnN0cmluZ2lmeShvcHRzLmZyb20pfWApO1xuICAgICAgfVxuICAgIH1lbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBPcHRpb246IGZyb20gbXVzdCBiZSBhbiBpbnRlZ2VyLCBnb3QgJHtKU09OLnN0cmluZ2lmeShvcHRpb25zLmZyb20pfWApO1xuICAgIH1cbiAgfVxuICAvLyBOb3JtYWxpemUgb3B0aW9uIGBmcm9tX2xpbmVgXG4gIGlmKG9wdGlvbnMuZnJvbV9saW5lID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5mcm9tX2xpbmUgPT09IG51bGwpe1xuICAgIG9wdGlvbnMuZnJvbV9saW5lID0gMTtcbiAgfWVsc2Uge1xuICAgIGlmKHR5cGVvZiBvcHRpb25zLmZyb21fbGluZSA9PT0gJ3N0cmluZycgJiYgL1xcZCsvLnRlc3Qob3B0aW9ucy5mcm9tX2xpbmUpKXtcbiAgICAgIG9wdGlvbnMuZnJvbV9saW5lID0gcGFyc2VJbnQob3B0aW9ucy5mcm9tX2xpbmUpO1xuICAgIH1cbiAgICBpZihOdW1iZXIuaXNJbnRlZ2VyKG9wdGlvbnMuZnJvbV9saW5lKSl7XG4gICAgICBpZihvcHRpb25zLmZyb21fbGluZSA8PSAwKXtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIE9wdGlvbjogZnJvbV9saW5lIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiAwLCBnb3QgJHtKU09OLnN0cmluZ2lmeShvcHRzLmZyb21fbGluZSl9YCk7XG4gICAgICB9XG4gICAgfWVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIE9wdGlvbjogZnJvbV9saW5lIG11c3QgYmUgYW4gaW50ZWdlciwgZ290ICR7SlNPTi5zdHJpbmdpZnkob3B0cy5mcm9tX2xpbmUpfWApO1xuICAgIH1cbiAgfVxuICAvLyBOb3JtYWxpemUgb3B0aW9ucyBgaWdub3JlX2xhc3RfZGVsaW1pdGVyc2BcbiAgaWYob3B0aW9ucy5pZ25vcmVfbGFzdF9kZWxpbWl0ZXJzID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5pZ25vcmVfbGFzdF9kZWxpbWl0ZXJzID09PSBudWxsKXtcbiAgICBvcHRpb25zLmlnbm9yZV9sYXN0X2RlbGltaXRlcnMgPSBmYWxzZTtcbiAgfWVsc2UgaWYodHlwZW9mIG9wdGlvbnMuaWdub3JlX2xhc3RfZGVsaW1pdGVycyA9PT0gJ251bWJlcicpe1xuICAgIG9wdGlvbnMuaWdub3JlX2xhc3RfZGVsaW1pdGVycyA9IE1hdGguZmxvb3Iob3B0aW9ucy5pZ25vcmVfbGFzdF9kZWxpbWl0ZXJzKTtcbiAgICBpZihvcHRpb25zLmlnbm9yZV9sYXN0X2RlbGltaXRlcnMgPT09IDApe1xuICAgICAgb3B0aW9ucy5pZ25vcmVfbGFzdF9kZWxpbWl0ZXJzID0gZmFsc2U7XG4gICAgfVxuICB9ZWxzZSBpZih0eXBlb2Ygb3B0aW9ucy5pZ25vcmVfbGFzdF9kZWxpbWl0ZXJzICE9PSAnYm9vbGVhbicpe1xuICAgIHRocm93IG5ldyBDc3ZFcnJvcignQ1NWX0lOVkFMSURfT1BUSU9OX0lHTk9SRV9MQVNUX0RFTElNSVRFUlMnLCBbXG4gICAgICAnSW52YWxpZCBvcHRpb24gYGlnbm9yZV9sYXN0X2RlbGltaXRlcnNgOicsXG4gICAgICAndGhlIHZhbHVlIG11c3QgYmUgYSBib29sZWFuIHZhbHVlIG9yIGFuIGludGVnZXIsJyxcbiAgICAgIGBnb3QgJHtKU09OLnN0cmluZ2lmeShvcHRpb25zLmlnbm9yZV9sYXN0X2RlbGltaXRlcnMpfWBcbiAgICBdLCBvcHRpb25zKTtcbiAgfVxuICBpZihvcHRpb25zLmlnbm9yZV9sYXN0X2RlbGltaXRlcnMgPT09IHRydWUgJiYgb3B0aW9ucy5jb2x1bW5zID09PSBmYWxzZSl7XG4gICAgdGhyb3cgbmV3IENzdkVycm9yKCdDU1ZfSUdOT1JFX0xBU1RfREVMSU1JVEVSU19SRVFVSVJFU19DT0xVTU5TJywgW1xuICAgICAgJ1RoZSBvcHRpb24gYGlnbm9yZV9sYXN0X2RlbGltaXRlcnNgJyxcbiAgICAgICdyZXF1aXJlcyB0aGUgYWN0aXZhdGlvbiBvZiB0aGUgYGNvbHVtbnNgIG9wdGlvbidcbiAgICBdLCBvcHRpb25zKTtcbiAgfVxuICAvLyBOb3JtYWxpemUgb3B0aW9uIGBpbmZvYFxuICBpZihvcHRpb25zLmluZm8gPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLmluZm8gPT09IG51bGwgfHwgb3B0aW9ucy5pbmZvID09PSBmYWxzZSl7XG4gICAgb3B0aW9ucy5pbmZvID0gZmFsc2U7XG4gIH1lbHNlIGlmKG9wdGlvbnMuaW5mbyAhPT0gdHJ1ZSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIE9wdGlvbjogaW5mbyBtdXN0IGJlIHRydWUsIGdvdCAke0pTT04uc3RyaW5naWZ5KG9wdGlvbnMuaW5mbyl9YCk7XG4gIH1cbiAgLy8gTm9ybWFsaXplIG9wdGlvbiBgbWF4X3JlY29yZF9zaXplYFxuICBpZihvcHRpb25zLm1heF9yZWNvcmRfc2l6ZSA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMubWF4X3JlY29yZF9zaXplID09PSBudWxsIHx8IG9wdGlvbnMubWF4X3JlY29yZF9zaXplID09PSBmYWxzZSl7XG4gICAgb3B0aW9ucy5tYXhfcmVjb3JkX3NpemUgPSAwO1xuICB9ZWxzZSBpZihOdW1iZXIuaXNJbnRlZ2VyKG9wdGlvbnMubWF4X3JlY29yZF9zaXplKSAmJiBvcHRpb25zLm1heF9yZWNvcmRfc2l6ZSA+PSAwKTtlbHNlIGlmKHR5cGVvZiBvcHRpb25zLm1heF9yZWNvcmRfc2l6ZSA9PT0gJ3N0cmluZycgJiYgL1xcZCsvLnRlc3Qob3B0aW9ucy5tYXhfcmVjb3JkX3NpemUpKXtcbiAgICBvcHRpb25zLm1heF9yZWNvcmRfc2l6ZSA9IHBhcnNlSW50KG9wdGlvbnMubWF4X3JlY29yZF9zaXplKTtcbiAgfWVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBPcHRpb246IG1heF9yZWNvcmRfc2l6ZSBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlciwgZ290ICR7SlNPTi5zdHJpbmdpZnkob3B0aW9ucy5tYXhfcmVjb3JkX3NpemUpfWApO1xuICB9XG4gIC8vIE5vcm1hbGl6ZSBvcHRpb24gYG9iam5hbWVgXG4gIGlmKG9wdGlvbnMub2JqbmFtZSA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMub2JqbmFtZSA9PT0gbnVsbCB8fCBvcHRpb25zLm9iam5hbWUgPT09IGZhbHNlKXtcbiAgICBvcHRpb25zLm9iam5hbWUgPSB1bmRlZmluZWQ7XG4gIH1lbHNlIGlmKGlzQnVmZmVyKG9wdGlvbnMub2JqbmFtZSkpe1xuICAgIGlmKG9wdGlvbnMub2JqbmFtZS5sZW5ndGggPT09IDApe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIE9wdGlvbjogb2JqbmFtZSBtdXN0IGJlIGEgbm9uIGVtcHR5IGJ1ZmZlcmApO1xuICAgIH1cbiAgICBpZihvcHRpb25zLmVuY29kaW5nID09PSBudWxsKTtlbHNlIHtcbiAgICAgIG9wdGlvbnMub2JqbmFtZSA9IG9wdGlvbnMub2JqbmFtZS50b1N0cmluZyhvcHRpb25zLmVuY29kaW5nKTtcbiAgICB9XG4gIH1lbHNlIGlmKHR5cGVvZiBvcHRpb25zLm9iam5hbWUgPT09ICdzdHJpbmcnKXtcbiAgICBpZihvcHRpb25zLm9iam5hbWUubGVuZ3RoID09PSAwKXtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBPcHRpb246IG9iam5hbWUgbXVzdCBiZSBhIG5vbiBlbXB0eSBzdHJpbmdgKTtcbiAgICB9XG4gICAgLy8gR3JlYXQsIG5vdGhpbmcgdG8gZG9cbiAgfWVsc2UgaWYodHlwZW9mIG9wdGlvbnMub2JqbmFtZSA9PT0gJ251bWJlcicpO2Vsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBPcHRpb246IG9iam5hbWUgbXVzdCBiZSBhIHN0cmluZyBvciBhIGJ1ZmZlciwgZ290ICR7b3B0aW9ucy5vYmpuYW1lfWApO1xuICB9XG4gIGlmKG9wdGlvbnMub2JqbmFtZSAhPT0gdW5kZWZpbmVkKXtcbiAgICBpZih0eXBlb2Ygb3B0aW9ucy5vYmpuYW1lID09PSAnbnVtYmVyJyl7XG4gICAgICBpZihvcHRpb25zLmNvbHVtbnMgIT09IGZhbHNlKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgT3B0aW9uOiBvYmpuYW1lIGluZGV4IGNhbm5vdCBiZSBjb21iaW5lZCB3aXRoIGNvbHVtbnMgb3IgYmUgZGVmaW5lZCBhcyBhIGZpZWxkJyk7XG4gICAgICB9XG4gICAgfWVsc2UgeyAvLyBBIHN0cmluZyBvciBhIGJ1ZmZlclxuICAgICAgaWYob3B0aW9ucy5jb2x1bW5zID09PSBmYWxzZSl7XG4gICAgICAgIHRocm93IEVycm9yKCdJbnZhbGlkIE9wdGlvbjogb2JqbmFtZSBmaWVsZCBtdXN0IGJlIGNvbWJpbmVkIHdpdGggY29sdW1ucyBvciBiZSBkZWZpbmVkIGFzIGFuIGluZGV4Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIE5vcm1hbGl6ZSBvcHRpb24gYG9uX3JlY29yZGBcbiAgaWYob3B0aW9ucy5vbl9yZWNvcmQgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLm9uX3JlY29yZCA9PT0gbnVsbCl7XG4gICAgb3B0aW9ucy5vbl9yZWNvcmQgPSB1bmRlZmluZWQ7XG4gIH1lbHNlIGlmKHR5cGVvZiBvcHRpb25zLm9uX3JlY29yZCAhPT0gJ2Z1bmN0aW9uJyl7XG4gICAgdGhyb3cgbmV3IENzdkVycm9yKCdDU1ZfSU5WQUxJRF9PUFRJT05fT05fUkVDT1JEJywgW1xuICAgICAgJ0ludmFsaWQgb3B0aW9uIGBvbl9yZWNvcmRgOicsXG4gICAgICAnZXhwZWN0IGEgZnVuY3Rpb24sJyxcbiAgICAgIGBnb3QgJHtKU09OLnN0cmluZ2lmeShvcHRpb25zLm9uX3JlY29yZCl9YFxuICAgIF0sIG9wdGlvbnMpO1xuICB9XG4gIC8vIE5vcm1hbGl6ZSBvcHRpb24gYG9uX3NraXBgXG4gIC8vIG9wdGlvbnMub25fc2tpcCA/Pz0gKGVyciwgY2h1bmspID0+IHtcbiAgLy8gICB0aGlzLmVtaXQoJ3NraXAnLCBlcnIsIGNodW5rKTtcbiAgLy8gfTtcbiAgaWYob3B0aW9ucy5vbl9za2lwICE9PSB1bmRlZmluZWQgJiYgb3B0aW9ucy5vbl9za2lwICE9PSBudWxsICYmIHR5cGVvZiBvcHRpb25zLm9uX3NraXAgIT09ICdmdW5jdGlvbicpe1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBPcHRpb246IG9uX3NraXAgbXVzdCBiZSBhIGZ1bmN0aW9uLCBnb3QgJHtKU09OLnN0cmluZ2lmeShvcHRpb25zLm9uX3NraXApfWApO1xuICB9XG4gIC8vIE5vcm1hbGl6ZSBvcHRpb24gYHF1b3RlYFxuICBpZihvcHRpb25zLnF1b3RlID09PSBudWxsIHx8IG9wdGlvbnMucXVvdGUgPT09IGZhbHNlIHx8IG9wdGlvbnMucXVvdGUgPT09ICcnKXtcbiAgICBvcHRpb25zLnF1b3RlID0gbnVsbDtcbiAgfWVsc2Uge1xuICAgIGlmKG9wdGlvbnMucXVvdGUgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnF1b3RlID09PSB0cnVlKXtcbiAgICAgIG9wdGlvbnMucXVvdGUgPSBCdWZmZXIuZnJvbSgnXCInLCBvcHRpb25zLmVuY29kaW5nKTtcbiAgICB9ZWxzZSBpZih0eXBlb2Ygb3B0aW9ucy5xdW90ZSA9PT0gJ3N0cmluZycpe1xuICAgICAgb3B0aW9ucy5xdW90ZSA9IEJ1ZmZlci5mcm9tKG9wdGlvbnMucXVvdGUsIG9wdGlvbnMuZW5jb2RpbmcpO1xuICAgIH1cbiAgICBpZighaXNCdWZmZXIob3B0aW9ucy5xdW90ZSkpe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIE9wdGlvbjogcXVvdGUgbXVzdCBiZSBhIGJ1ZmZlciBvciBhIHN0cmluZywgZ290ICR7SlNPTi5zdHJpbmdpZnkob3B0aW9ucy5xdW90ZSl9YCk7XG4gICAgfVxuICB9XG4gIC8vIE5vcm1hbGl6ZSBvcHRpb24gYHJhd2BcbiAgaWYob3B0aW9ucy5yYXcgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnJhdyA9PT0gbnVsbCB8fCBvcHRpb25zLnJhdyA9PT0gZmFsc2Upe1xuICAgIG9wdGlvbnMucmF3ID0gZmFsc2U7XG4gIH1lbHNlIGlmKG9wdGlvbnMucmF3ICE9PSB0cnVlKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgT3B0aW9uOiByYXcgbXVzdCBiZSB0cnVlLCBnb3QgJHtKU09OLnN0cmluZ2lmeShvcHRpb25zLnJhdyl9YCk7XG4gIH1cbiAgLy8gTm9ybWFsaXplIG9wdGlvbiBgcmVjb3JkX2RlbGltaXRlcmBcbiAgaWYob3B0aW9ucy5yZWNvcmRfZGVsaW1pdGVyID09PSB1bmRlZmluZWQpe1xuICAgIG9wdGlvbnMucmVjb3JkX2RlbGltaXRlciA9IFtdO1xuICB9ZWxzZSBpZih0eXBlb2Ygb3B0aW9ucy5yZWNvcmRfZGVsaW1pdGVyID09PSAnc3RyaW5nJyB8fCBpc0J1ZmZlcihvcHRpb25zLnJlY29yZF9kZWxpbWl0ZXIpKXtcbiAgICBpZihvcHRpb25zLnJlY29yZF9kZWxpbWl0ZXIubGVuZ3RoID09PSAwKXtcbiAgICAgIHRocm93IG5ldyBDc3ZFcnJvcignQ1NWX0lOVkFMSURfT1BUSU9OX1JFQ09SRF9ERUxJTUlURVInLCBbXG4gICAgICAgICdJbnZhbGlkIG9wdGlvbiBgcmVjb3JkX2RlbGltaXRlcmA6JyxcbiAgICAgICAgJ3ZhbHVlIG11c3QgYmUgYSBub24gZW1wdHkgc3RyaW5nIG9yIGJ1ZmZlciwnLFxuICAgICAgICBgZ290ICR7SlNPTi5zdHJpbmdpZnkob3B0aW9ucy5yZWNvcmRfZGVsaW1pdGVyKX1gXG4gICAgICBdLCBvcHRpb25zKTtcbiAgICB9XG4gICAgb3B0aW9ucy5yZWNvcmRfZGVsaW1pdGVyID0gW29wdGlvbnMucmVjb3JkX2RlbGltaXRlcl07XG4gIH1lbHNlIGlmKCFBcnJheS5pc0FycmF5KG9wdGlvbnMucmVjb3JkX2RlbGltaXRlcikpe1xuICAgIHRocm93IG5ldyBDc3ZFcnJvcignQ1NWX0lOVkFMSURfT1BUSU9OX1JFQ09SRF9ERUxJTUlURVInLCBbXG4gICAgICAnSW52YWxpZCBvcHRpb24gYHJlY29yZF9kZWxpbWl0ZXJgOicsXG4gICAgICAndmFsdWUgbXVzdCBiZSBhIHN0cmluZywgYSBidWZmZXIgb3IgYXJyYXkgb2Ygc3RyaW5nfGJ1ZmZlciwnLFxuICAgICAgYGdvdCAke0pTT04uc3RyaW5naWZ5KG9wdGlvbnMucmVjb3JkX2RlbGltaXRlcil9YFxuICAgIF0sIG9wdGlvbnMpO1xuICB9XG4gIG9wdGlvbnMucmVjb3JkX2RlbGltaXRlciA9IG9wdGlvbnMucmVjb3JkX2RlbGltaXRlci5tYXAoZnVuY3Rpb24ocmQsIGkpe1xuICAgIGlmKHR5cGVvZiByZCAhPT0gJ3N0cmluZycgJiYgISBpc0J1ZmZlcihyZCkpe1xuICAgICAgdGhyb3cgbmV3IENzdkVycm9yKCdDU1ZfSU5WQUxJRF9PUFRJT05fUkVDT1JEX0RFTElNSVRFUicsIFtcbiAgICAgICAgJ0ludmFsaWQgb3B0aW9uIGByZWNvcmRfZGVsaW1pdGVyYDonLFxuICAgICAgICAndmFsdWUgbXVzdCBiZSBhIHN0cmluZywgYSBidWZmZXIgb3IgYXJyYXkgb2Ygc3RyaW5nfGJ1ZmZlcicsXG4gICAgICAgIGBhdCBpbmRleCAke2l9LGAsXG4gICAgICAgIGBnb3QgJHtKU09OLnN0cmluZ2lmeShyZCl9YFxuICAgICAgXSwgb3B0aW9ucyk7XG4gICAgfWVsc2UgaWYocmQubGVuZ3RoID09PSAwKXtcbiAgICAgIHRocm93IG5ldyBDc3ZFcnJvcignQ1NWX0lOVkFMSURfT1BUSU9OX1JFQ09SRF9ERUxJTUlURVInLCBbXG4gICAgICAgICdJbnZhbGlkIG9wdGlvbiBgcmVjb3JkX2RlbGltaXRlcmA6JyxcbiAgICAgICAgJ3ZhbHVlIG11c3QgYmUgYSBub24gZW1wdHkgc3RyaW5nIG9yIGJ1ZmZlcicsXG4gICAgICAgIGBhdCBpbmRleCAke2l9LGAsXG4gICAgICAgIGBnb3QgJHtKU09OLnN0cmluZ2lmeShyZCl9YFxuICAgICAgXSwgb3B0aW9ucyk7XG4gICAgfVxuICAgIGlmKHR5cGVvZiByZCA9PT0gJ3N0cmluZycpe1xuICAgICAgcmQgPSBCdWZmZXIuZnJvbShyZCwgb3B0aW9ucy5lbmNvZGluZyk7XG4gICAgfVxuICAgIHJldHVybiByZDtcbiAgfSk7XG4gIC8vIE5vcm1hbGl6ZSBvcHRpb24gYHJlbGF4X2NvbHVtbl9jb3VudGBcbiAgaWYodHlwZW9mIG9wdGlvbnMucmVsYXhfY29sdW1uX2NvdW50ID09PSAnYm9vbGVhbicpO2Vsc2UgaWYob3B0aW9ucy5yZWxheF9jb2x1bW5fY291bnQgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnJlbGF4X2NvbHVtbl9jb3VudCA9PT0gbnVsbCl7XG4gICAgb3B0aW9ucy5yZWxheF9jb2x1bW5fY291bnQgPSBmYWxzZTtcbiAgfWVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBPcHRpb246IHJlbGF4X2NvbHVtbl9jb3VudCBtdXN0IGJlIGEgYm9vbGVhbiwgZ290ICR7SlNPTi5zdHJpbmdpZnkob3B0aW9ucy5yZWxheF9jb2x1bW5fY291bnQpfWApO1xuICB9XG4gIGlmKHR5cGVvZiBvcHRpb25zLnJlbGF4X2NvbHVtbl9jb3VudF9sZXNzID09PSAnYm9vbGVhbicpO2Vsc2UgaWYob3B0aW9ucy5yZWxheF9jb2x1bW5fY291bnRfbGVzcyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMucmVsYXhfY29sdW1uX2NvdW50X2xlc3MgPT09IG51bGwpe1xuICAgIG9wdGlvbnMucmVsYXhfY29sdW1uX2NvdW50X2xlc3MgPSBmYWxzZTtcbiAgfWVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBPcHRpb246IHJlbGF4X2NvbHVtbl9jb3VudF9sZXNzIG11c3QgYmUgYSBib29sZWFuLCBnb3QgJHtKU09OLnN0cmluZ2lmeShvcHRpb25zLnJlbGF4X2NvbHVtbl9jb3VudF9sZXNzKX1gKTtcbiAgfVxuICBpZih0eXBlb2Ygb3B0aW9ucy5yZWxheF9jb2x1bW5fY291bnRfbW9yZSA9PT0gJ2Jvb2xlYW4nKTtlbHNlIGlmKG9wdGlvbnMucmVsYXhfY29sdW1uX2NvdW50X21vcmUgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnJlbGF4X2NvbHVtbl9jb3VudF9tb3JlID09PSBudWxsKXtcbiAgICBvcHRpb25zLnJlbGF4X2NvbHVtbl9jb3VudF9tb3JlID0gZmFsc2U7XG4gIH1lbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgT3B0aW9uOiByZWxheF9jb2x1bW5fY291bnRfbW9yZSBtdXN0IGJlIGEgYm9vbGVhbiwgZ290ICR7SlNPTi5zdHJpbmdpZnkob3B0aW9ucy5yZWxheF9jb2x1bW5fY291bnRfbW9yZSl9YCk7XG4gIH1cbiAgLy8gTm9ybWFsaXplIG9wdGlvbiBgcmVsYXhfcXVvdGVzYFxuICBpZih0eXBlb2Ygb3B0aW9ucy5yZWxheF9xdW90ZXMgPT09ICdib29sZWFuJyk7ZWxzZSBpZihvcHRpb25zLnJlbGF4X3F1b3RlcyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMucmVsYXhfcXVvdGVzID09PSBudWxsKXtcbiAgICBvcHRpb25zLnJlbGF4X3F1b3RlcyA9IGZhbHNlO1xuICB9ZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIE9wdGlvbjogcmVsYXhfcXVvdGVzIG11c3QgYmUgYSBib29sZWFuLCBnb3QgJHtKU09OLnN0cmluZ2lmeShvcHRpb25zLnJlbGF4X3F1b3Rlcyl9YCk7XG4gIH1cbiAgLy8gTm9ybWFsaXplIG9wdGlvbiBgc2tpcF9lbXB0eV9saW5lc2BcbiAgaWYodHlwZW9mIG9wdGlvbnMuc2tpcF9lbXB0eV9saW5lcyA9PT0gJ2Jvb2xlYW4nKTtlbHNlIGlmKG9wdGlvbnMuc2tpcF9lbXB0eV9saW5lcyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMuc2tpcF9lbXB0eV9saW5lcyA9PT0gbnVsbCl7XG4gICAgb3B0aW9ucy5za2lwX2VtcHR5X2xpbmVzID0gZmFsc2U7XG4gIH1lbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgT3B0aW9uOiBza2lwX2VtcHR5X2xpbmVzIG11c3QgYmUgYSBib29sZWFuLCBnb3QgJHtKU09OLnN0cmluZ2lmeShvcHRpb25zLnNraXBfZW1wdHlfbGluZXMpfWApO1xuICB9XG4gIC8vIE5vcm1hbGl6ZSBvcHRpb24gYHNraXBfcmVjb3Jkc193aXRoX2VtcHR5X3ZhbHVlc2BcbiAgaWYodHlwZW9mIG9wdGlvbnMuc2tpcF9yZWNvcmRzX3dpdGhfZW1wdHlfdmFsdWVzID09PSAnYm9vbGVhbicpO2Vsc2UgaWYob3B0aW9ucy5za2lwX3JlY29yZHNfd2l0aF9lbXB0eV92YWx1ZXMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnNraXBfcmVjb3Jkc193aXRoX2VtcHR5X3ZhbHVlcyA9PT0gbnVsbCl7XG4gICAgb3B0aW9ucy5za2lwX3JlY29yZHNfd2l0aF9lbXB0eV92YWx1ZXMgPSBmYWxzZTtcbiAgfWVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBPcHRpb246IHNraXBfcmVjb3Jkc193aXRoX2VtcHR5X3ZhbHVlcyBtdXN0IGJlIGEgYm9vbGVhbiwgZ290ICR7SlNPTi5zdHJpbmdpZnkob3B0aW9ucy5za2lwX3JlY29yZHNfd2l0aF9lbXB0eV92YWx1ZXMpfWApO1xuICB9XG4gIC8vIE5vcm1hbGl6ZSBvcHRpb24gYHNraXBfcmVjb3Jkc193aXRoX2Vycm9yYFxuICBpZih0eXBlb2Ygb3B0aW9ucy5za2lwX3JlY29yZHNfd2l0aF9lcnJvciA9PT0gJ2Jvb2xlYW4nKTtlbHNlIGlmKG9wdGlvbnMuc2tpcF9yZWNvcmRzX3dpdGhfZXJyb3IgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnNraXBfcmVjb3Jkc193aXRoX2Vycm9yID09PSBudWxsKXtcbiAgICBvcHRpb25zLnNraXBfcmVjb3Jkc193aXRoX2Vycm9yID0gZmFsc2U7XG4gIH1lbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgT3B0aW9uOiBza2lwX3JlY29yZHNfd2l0aF9lcnJvciBtdXN0IGJlIGEgYm9vbGVhbiwgZ290ICR7SlNPTi5zdHJpbmdpZnkob3B0aW9ucy5za2lwX3JlY29yZHNfd2l0aF9lcnJvcil9YCk7XG4gIH1cbiAgLy8gTm9ybWFsaXplIG9wdGlvbiBgcnRyaW1gXG4gIGlmKG9wdGlvbnMucnRyaW0gPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnJ0cmltID09PSBudWxsIHx8IG9wdGlvbnMucnRyaW0gPT09IGZhbHNlKXtcbiAgICBvcHRpb25zLnJ0cmltID0gZmFsc2U7XG4gIH1lbHNlIGlmKG9wdGlvbnMucnRyaW0gIT09IHRydWUpe1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBPcHRpb246IHJ0cmltIG11c3QgYmUgYSBib29sZWFuLCBnb3QgJHtKU09OLnN0cmluZ2lmeShvcHRpb25zLnJ0cmltKX1gKTtcbiAgfVxuICAvLyBOb3JtYWxpemUgb3B0aW9uIGBsdHJpbWBcbiAgaWYob3B0aW9ucy5sdHJpbSA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMubHRyaW0gPT09IG51bGwgfHwgb3B0aW9ucy5sdHJpbSA9PT0gZmFsc2Upe1xuICAgIG9wdGlvbnMubHRyaW0gPSBmYWxzZTtcbiAgfWVsc2UgaWYob3B0aW9ucy5sdHJpbSAhPT0gdHJ1ZSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIE9wdGlvbjogbHRyaW0gbXVzdCBiZSBhIGJvb2xlYW4sIGdvdCAke0pTT04uc3RyaW5naWZ5KG9wdGlvbnMubHRyaW0pfWApO1xuICB9XG4gIC8vIE5vcm1hbGl6ZSBvcHRpb24gYHRyaW1gXG4gIGlmKG9wdGlvbnMudHJpbSA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMudHJpbSA9PT0gbnVsbCB8fCBvcHRpb25zLnRyaW0gPT09IGZhbHNlKXtcbiAgICBvcHRpb25zLnRyaW0gPSBmYWxzZTtcbiAgfWVsc2UgaWYob3B0aW9ucy50cmltICE9PSB0cnVlKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgT3B0aW9uOiB0cmltIG11c3QgYmUgYSBib29sZWFuLCBnb3QgJHtKU09OLnN0cmluZ2lmeShvcHRpb25zLnRyaW0pfWApO1xuICB9XG4gIC8vIE5vcm1hbGl6ZSBvcHRpb25zIGB0cmltYCwgYGx0cmltYCBhbmQgYHJ0cmltYFxuICBpZihvcHRpb25zLnRyaW0gPT09IHRydWUgJiYgb3B0cy5sdHJpbSAhPT0gZmFsc2Upe1xuICAgIG9wdGlvbnMubHRyaW0gPSB0cnVlO1xuICB9ZWxzZSBpZihvcHRpb25zLmx0cmltICE9PSB0cnVlKXtcbiAgICBvcHRpb25zLmx0cmltID0gZmFsc2U7XG4gIH1cbiAgaWYob3B0aW9ucy50cmltID09PSB0cnVlICYmIG9wdHMucnRyaW0gIT09IGZhbHNlKXtcbiAgICBvcHRpb25zLnJ0cmltID0gdHJ1ZTtcbiAgfWVsc2UgaWYob3B0aW9ucy5ydHJpbSAhPT0gdHJ1ZSl7XG4gICAgb3B0aW9ucy5ydHJpbSA9IGZhbHNlO1xuICB9XG4gIC8vIE5vcm1hbGl6ZSBvcHRpb24gYHRvYFxuICBpZihvcHRpb25zLnRvID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy50byA9PT0gbnVsbCl7XG4gICAgb3B0aW9ucy50byA9IC0xO1xuICB9ZWxzZSB7XG4gICAgaWYodHlwZW9mIG9wdGlvbnMudG8gPT09ICdzdHJpbmcnICYmIC9cXGQrLy50ZXN0KG9wdGlvbnMudG8pKXtcbiAgICAgIG9wdGlvbnMudG8gPSBwYXJzZUludChvcHRpb25zLnRvKTtcbiAgICB9XG4gICAgaWYoTnVtYmVyLmlzSW50ZWdlcihvcHRpb25zLnRvKSl7XG4gICAgICBpZihvcHRpb25zLnRvIDw9IDApe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgT3B0aW9uOiB0byBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlciBncmVhdGVyIHRoYW4gMCwgZ290ICR7SlNPTi5zdHJpbmdpZnkob3B0cy50byl9YCk7XG4gICAgICB9XG4gICAgfWVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIE9wdGlvbjogdG8gbXVzdCBiZSBhbiBpbnRlZ2VyLCBnb3QgJHtKU09OLnN0cmluZ2lmeShvcHRzLnRvKX1gKTtcbiAgICB9XG4gIH1cbiAgLy8gTm9ybWFsaXplIG9wdGlvbiBgdG9fbGluZWBcbiAgaWYob3B0aW9ucy50b19saW5lID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy50b19saW5lID09PSBudWxsKXtcbiAgICBvcHRpb25zLnRvX2xpbmUgPSAtMTtcbiAgfWVsc2Uge1xuICAgIGlmKHR5cGVvZiBvcHRpb25zLnRvX2xpbmUgPT09ICdzdHJpbmcnICYmIC9cXGQrLy50ZXN0KG9wdGlvbnMudG9fbGluZSkpe1xuICAgICAgb3B0aW9ucy50b19saW5lID0gcGFyc2VJbnQob3B0aW9ucy50b19saW5lKTtcbiAgICB9XG4gICAgaWYoTnVtYmVyLmlzSW50ZWdlcihvcHRpb25zLnRvX2xpbmUpKXtcbiAgICAgIGlmKG9wdGlvbnMudG9fbGluZSA8PSAwKXtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIE9wdGlvbjogdG9fbGluZSBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlciBncmVhdGVyIHRoYW4gMCwgZ290ICR7SlNPTi5zdHJpbmdpZnkob3B0cy50b19saW5lKX1gKTtcbiAgICAgIH1cbiAgICB9ZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgT3B0aW9uOiB0b19saW5lIG11c3QgYmUgYW4gaW50ZWdlciwgZ290ICR7SlNPTi5zdHJpbmdpZnkob3B0cy50b19saW5lKX1gKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9wdGlvbnM7XG59O1xuXG5jb25zdCBpc1JlY29yZEVtcHR5ID0gZnVuY3Rpb24ocmVjb3JkKXtcbiAgcmV0dXJuIHJlY29yZC5ldmVyeSgoZmllbGQpID0+IGZpZWxkID09IG51bGwgfHwgZmllbGQudG9TdHJpbmcgJiYgZmllbGQudG9TdHJpbmcoKS50cmltKCkgPT09ICcnKTtcbn07XG5cbmNvbnN0IGNyID0gMTM7IC8vIGBcXHJgLCBjYXJyaWFnZSByZXR1cm4sIDB4MEQgaW4gaGV4YWTDqWNpbWFsLCAxMyBpbiBkZWNpbWFsXG5jb25zdCBubCA9IDEwOyAvLyBgXFxuYCwgbmV3bGluZSwgMHgwQSBpbiBoZXhhZGVjaW1hbCwgMTAgaW4gZGVjaW1hbFxuXG5jb25zdCBib21zID0ge1xuICAvLyBOb3RlLCB0aGUgZm9sbG93aW5nIGFyZSBlcXVhbHM6XG4gIC8vIEJ1ZmZlci5mcm9tKFwiXFx1ZmVmZlwiKVxuICAvLyBCdWZmZXIuZnJvbShbMjM5LCAxODcsIDE5MV0pXG4gIC8vIEJ1ZmZlci5mcm9tKCdFRkJCQkYnLCAnaGV4JylcbiAgJ3V0ZjgnOiBCdWZmZXIuZnJvbShbMjM5LCAxODcsIDE5MV0pLFxuICAvLyBOb3RlLCB0aGUgZm9sbG93aW5nIGFyZSBlcXVhbHM6XG4gIC8vIEJ1ZmZlci5mcm9tIFwiXFx1ZmVmZlwiLCAndXRmMTZsZVxuICAvLyBCdWZmZXIuZnJvbShbMjU1LCAyNTRdKVxuICAndXRmMTZsZSc6IEJ1ZmZlci5mcm9tKFsyNTUsIDI1NF0pXG59O1xuXG5jb25zdCB0cmFuc2Zvcm0gPSBmdW5jdGlvbihvcmlnaW5hbF9vcHRpb25zID0ge30pIHtcbiAgY29uc3QgaW5mbyA9IHtcbiAgICBieXRlczogMCxcbiAgICBjb21tZW50X2xpbmVzOiAwLFxuICAgIGVtcHR5X2xpbmVzOiAwLFxuICAgIGludmFsaWRfZmllbGRfbGVuZ3RoOiAwLFxuICAgIGxpbmVzOiAxLFxuICAgIHJlY29yZHM6IDBcbiAgfTtcbiAgY29uc3Qgb3B0aW9ucyA9IG5vcm1hbGl6ZV9vcHRpb25zKG9yaWdpbmFsX29wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIGluZm86IGluZm8sXG4gICAgb3JpZ2luYWxfb3B0aW9uczogb3JpZ2luYWxfb3B0aW9ucyxcbiAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgIHN0YXRlOiBpbml0X3N0YXRlKG9wdGlvbnMpLFxuICAgIF9fbmVlZE1vcmVEYXRhOiBmdW5jdGlvbihpLCBidWZMZW4sIGVuZCl7XG4gICAgICBpZihlbmQpIHJldHVybiBmYWxzZTtcbiAgICAgIGNvbnN0IHtlbmNvZGluZywgZXNjYXBlLCBxdW90ZX0gPSB0aGlzLm9wdGlvbnM7XG4gICAgICBjb25zdCB7cXVvdGluZywgbmVlZE1vcmVEYXRhU2l6ZSwgcmVjb3JkRGVsaW1pdGVyTWF4TGVuZ3RofSA9IHRoaXMuc3RhdGU7XG4gICAgICBjb25zdCBudW1PZkNoYXJMZWZ0ID0gYnVmTGVuIC0gaSAtIDE7XG4gICAgICBjb25zdCByZXF1aXJlZExlbmd0aCA9IE1hdGgubWF4KFxuICAgICAgICBuZWVkTW9yZURhdGFTaXplLFxuICAgICAgICAvLyBTa2lwIGlmIHRoZSByZW1haW5pbmcgYnVmZmVyIHNtYWxsZXIgdGhhbiByZWNvcmQgZGVsaW1pdGVyXG4gICAgICAgIC8vIElmIFwicmVjb3JkX2RlbGltaXRlclwiIGlzIHlldCB0byBiZSBkaXNjb3ZlcmVkOlxuICAgICAgICAvLyAxLiBJdCBpcyBlcXVhbHMgdG8gYFtdYCBhbmQgXCJyZWNvcmREZWxpbWl0ZXJNYXhMZW5ndGhcIiBlcXVhbHMgYDBgXG4gICAgICAgIC8vIDIuIFdlIHNldCB0aGUgbGVuZ3RoIHRvIHdpbmRvd3MgbGluZSBlbmRpbmcgaW4gdGhlIGN1cnJlbnQgZW5jb2RpbmdcbiAgICAgICAgLy8gTm90ZSwgdGhhdCBlbmNvZGluZyBpcyBrbm93biBmcm9tIHVzZXIgb3IgYm9tIGRpc2NvdmVyeSBhdCB0aGF0IHBvaW50XG4gICAgICAgIC8vIHJlY29yZERlbGltaXRlck1heExlbmd0aCxcbiAgICAgICAgcmVjb3JkRGVsaW1pdGVyTWF4TGVuZ3RoID09PSAwID8gQnVmZmVyLmZyb20oJ1xcclxcbicsIGVuY29kaW5nKS5sZW5ndGggOiByZWNvcmREZWxpbWl0ZXJNYXhMZW5ndGgsXG4gICAgICAgIC8vIFNraXAgaWYgcmVtYWluaW5nIGJ1ZmZlciBjYW4gYmUgYW4gZXNjYXBlZCBxdW90ZVxuICAgICAgICBxdW90aW5nID8gKChlc2NhcGUgPT09IG51bGwgPyAwIDogZXNjYXBlLmxlbmd0aCkgKyBxdW90ZS5sZW5ndGgpIDogMCxcbiAgICAgICAgLy8gU2tpcCBpZiByZW1haW5pbmcgYnVmZmVyIGNhbiBiZSByZWNvcmQgZGVsaW1pdGVyIGZvbGxvd2luZyB0aGUgY2xvc2luZyBxdW90ZVxuICAgICAgICBxdW90aW5nID8gKHF1b3RlLmxlbmd0aCArIHJlY29yZERlbGltaXRlck1heExlbmd0aCkgOiAwLFxuICAgICAgKTtcbiAgICAgIHJldHVybiBudW1PZkNoYXJMZWZ0IDwgcmVxdWlyZWRMZW5ndGg7XG4gICAgfSxcbiAgICAvLyBDZW50cmFsIHBhcnNlciBpbXBsZW1lbnRhdGlvblxuICAgIHBhcnNlOiBmdW5jdGlvbihuZXh0QnVmLCBlbmQsIHB1c2gsIGNsb3NlKXtcbiAgICAgIGNvbnN0IHtib20sIGNvbW1lbnRfbm9faW5maXgsIGVuY29kaW5nLCBmcm9tX2xpbmUsIGx0cmltLCBtYXhfcmVjb3JkX3NpemUscmF3LCByZWxheF9xdW90ZXMsIHJ0cmltLCBza2lwX2VtcHR5X2xpbmVzLCB0bywgdG9fbGluZX0gPSB0aGlzLm9wdGlvbnM7XG4gICAgICBsZXQge2NvbW1lbnQsIGVzY2FwZSwgcXVvdGUsIHJlY29yZF9kZWxpbWl0ZXJ9ID0gdGhpcy5vcHRpb25zO1xuICAgICAgY29uc3Qge2JvbVNraXBwZWQsIHByZXZpb3VzQnVmLCByYXdCdWZmZXIsIGVzY2FwZUlzUXVvdGV9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGxldCBidWY7XG4gICAgICBpZihwcmV2aW91c0J1ZiA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgaWYobmV4dEJ1ZiA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAvLyBIYW5kbGUgZW1wdHkgc3RyaW5nXG4gICAgICAgICAgY2xvc2UoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICBidWYgPSBuZXh0QnVmO1xuICAgICAgICB9XG4gICAgICB9ZWxzZSBpZihwcmV2aW91c0J1ZiAhPT0gdW5kZWZpbmVkICYmIG5leHRCdWYgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgIGJ1ZiA9IHByZXZpb3VzQnVmO1xuICAgICAgfWVsc2Uge1xuICAgICAgICBidWYgPSBCdWZmZXIuY29uY2F0KFtwcmV2aW91c0J1ZiwgbmV4dEJ1Zl0pO1xuICAgICAgfVxuICAgICAgLy8gSGFuZGxlIFVURiBCT01cbiAgICAgIGlmKGJvbVNraXBwZWQgPT09IGZhbHNlKXtcbiAgICAgICAgaWYoYm9tID09PSBmYWxzZSl7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5ib21Ta2lwcGVkID0gdHJ1ZTtcbiAgICAgICAgfWVsc2UgaWYoYnVmLmxlbmd0aCA8IDMpe1xuICAgICAgICAgIC8vIE5vIGVub3VnaCBkYXRhXG4gICAgICAgICAgaWYoZW5kID09PSBmYWxzZSl7XG4gICAgICAgICAgICAvLyBXYWl0IGZvciBtb3JlIGRhdGFcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucHJldmlvdXNCdWYgPSBidWY7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgZm9yKGNvbnN0IGVuY29kaW5nIGluIGJvbXMpe1xuICAgICAgICAgICAgaWYoYm9tc1tlbmNvZGluZ10uY29tcGFyZShidWYsIDAsIGJvbXNbZW5jb2RpbmddLmxlbmd0aCkgPT09IDApe1xuICAgICAgICAgICAgICAvLyBTa2lwIEJPTVxuICAgICAgICAgICAgICBjb25zdCBib21MZW5ndGggPSBib21zW2VuY29kaW5nXS5sZW5ndGg7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuYnVmQnl0ZXNTdGFydCArPSBib21MZW5ndGg7XG4gICAgICAgICAgICAgIGJ1ZiA9IGJ1Zi5zbGljZShib21MZW5ndGgpO1xuICAgICAgICAgICAgICAvLyBSZW5vcm1hbGl6ZSBvcmlnaW5hbCBvcHRpb25zIHdpdGggdGhlIG5ldyBlbmNvZGluZ1xuICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBub3JtYWxpemVfb3B0aW9ucyh7Li4udGhpcy5vcmlnaW5hbF9vcHRpb25zLCBlbmNvZGluZzogZW5jb2Rpbmd9KTtcbiAgICAgICAgICAgICAgLy8gT3B0aW9ucyB3aWxsIHJlLWV2YWx1YXRlIHRoZSBCdWZmZXIgd2l0aCB0aGUgbmV3IGVuY29kaW5nXG4gICAgICAgICAgICAgICh7Y29tbWVudCwgZXNjYXBlLCBxdW90ZSB9ID0gdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc3RhdGUuYm9tU2tpcHBlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IGJ1ZkxlbiA9IGJ1Zi5sZW5ndGg7XG4gICAgICBsZXQgcG9zO1xuICAgICAgZm9yKHBvcyA9IDA7IHBvcyA8IGJ1ZkxlbjsgcG9zKyspe1xuICAgICAgICAvLyBFbnN1cmUgd2UgZ2V0IGVub3VnaCBzcGFjZSB0byBsb29rIGFoZWFkXG4gICAgICAgIC8vIFRoZXJlIHNob3VsZCBiZSBhIHdheSB0byBtb3ZlIHRoaXMgb3V0IG9mIHRoZSBsb29wXG4gICAgICAgIGlmKHRoaXMuX19uZWVkTW9yZURhdGEocG9zLCBidWZMZW4sIGVuZCkpe1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuc3RhdGUud2FzUm93RGVsaW1pdGVyID09PSB0cnVlKXtcbiAgICAgICAgICB0aGlzLmluZm8ubGluZXMrKztcbiAgICAgICAgICB0aGlzLnN0YXRlLndhc1Jvd0RlbGltaXRlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRvX2xpbmUgIT09IC0xICYmIHRoaXMuaW5mby5saW5lcyA+IHRvX2xpbmUpe1xuICAgICAgICAgIHRoaXMuc3RhdGUuc3RvcCA9IHRydWU7XG4gICAgICAgICAgY2xvc2UoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXV0byBkaXNjb3Zlcnkgb2YgcmVjb3JkX2RlbGltaXRlciwgdW5peCwgbWFjIGFuZCB3aW5kb3dzIHN1cHBvcnRlZFxuICAgICAgICBpZih0aGlzLnN0YXRlLnF1b3RpbmcgPT09IGZhbHNlICYmIHJlY29yZF9kZWxpbWl0ZXIubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICBjb25zdCByZWNvcmRfZGVsaW1pdGVyQ291bnQgPSB0aGlzLl9fYXV0b0Rpc2NvdmVyUmVjb3JkRGVsaW1pdGVyKGJ1ZiwgcG9zKTtcbiAgICAgICAgICBpZihyZWNvcmRfZGVsaW1pdGVyQ291bnQpe1xuICAgICAgICAgICAgcmVjb3JkX2RlbGltaXRlciA9IHRoaXMub3B0aW9ucy5yZWNvcmRfZGVsaW1pdGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjaHIgPSBidWZbcG9zXTtcbiAgICAgICAgaWYocmF3ID09PSB0cnVlKXtcbiAgICAgICAgICByYXdCdWZmZXIuYXBwZW5kKGNocik7XG4gICAgICAgIH1cbiAgICAgICAgaWYoKGNociA9PT0gY3IgfHwgY2hyID09PSBubCkgJiYgdGhpcy5zdGF0ZS53YXNSb3dEZWxpbWl0ZXIgPT09IGZhbHNlKXtcbiAgICAgICAgICB0aGlzLnN0YXRlLndhc1Jvd0RlbGltaXRlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUHJldmlvdXMgY2hhciB3YXMgYSB2YWxpZCBlc2NhcGUgY2hhclxuICAgICAgICAvLyB0cmVhdCB0aGUgY3VycmVudCBjaGFyIGFzIGEgcmVndWxhciBjaGFyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuZXNjYXBpbmcgPT09IHRydWUpe1xuICAgICAgICAgIHRoaXMuc3RhdGUuZXNjYXBpbmcgPSBmYWxzZTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgIC8vIEVzY2FwZSBpcyBvbmx5IGFjdGl2ZSBpbnNpZGUgcXVvdGVkIGZpZWxkc1xuICAgICAgICAgIC8vIFdlIGFyZSBxdW90aW5nLCB0aGUgY2hhciBpcyBhbiBlc2NhcGUgY2hyIGFuZCB0aGVyZSBpcyBhIGNociB0byBlc2NhcGVcbiAgICAgICAgICAvLyBpZihlc2NhcGUgIT09IG51bGwgJiYgdGhpcy5zdGF0ZS5xdW90aW5nID09PSB0cnVlICYmIGNociA9PT0gZXNjYXBlICYmIHBvcyArIDEgPCBidWZMZW4pe1xuICAgICAgICAgIGlmKGVzY2FwZSAhPT0gbnVsbCAmJiB0aGlzLnN0YXRlLnF1b3RpbmcgPT09IHRydWUgJiYgdGhpcy5fX2lzRXNjYXBlKGJ1ZiwgcG9zLCBjaHIpICYmIHBvcyArIGVzY2FwZS5sZW5ndGggPCBidWZMZW4pe1xuICAgICAgICAgICAgaWYoZXNjYXBlSXNRdW90ZSl7XG4gICAgICAgICAgICAgIGlmKHRoaXMuX19pc1F1b3RlKGJ1ZiwgcG9zK2VzY2FwZS5sZW5ndGgpKXtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmVzY2FwaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBwb3MgKz0gZXNjYXBlLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5lc2NhcGluZyA9IHRydWU7XG4gICAgICAgICAgICAgIHBvcyArPSBlc2NhcGUubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIE5vdCBjdXJyZW50bHkgZXNjYXBpbmcgYW5kIGNociBpcyBhIHF1b3RlXG4gICAgICAgICAgLy8gVE9ETzogbmVlZCB0byBjb21wYXJlIGJ5dGVzIGluc3RlYWQgb2Ygc2luZ2xlIGNoYXJcbiAgICAgICAgICBpZih0aGlzLnN0YXRlLmNvbW1lbnRpbmcgPT09IGZhbHNlICYmIHRoaXMuX19pc1F1b3RlKGJ1ZiwgcG9zKSl7XG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLnF1b3RpbmcgPT09IHRydWUpe1xuICAgICAgICAgICAgICBjb25zdCBuZXh0Q2hyID0gYnVmW3BvcytxdW90ZS5sZW5ndGhdO1xuICAgICAgICAgICAgICBjb25zdCBpc05leHRDaHJUcmltYWJsZSA9IHJ0cmltICYmIHRoaXMuX19pc0NoYXJUcmltYWJsZShidWYsIHBvcytxdW90ZS5sZW5ndGgpO1xuICAgICAgICAgICAgICBjb25zdCBpc05leHRDaHJDb21tZW50ID0gY29tbWVudCAhPT0gbnVsbCAmJiB0aGlzLl9fY29tcGFyZUJ5dGVzKGNvbW1lbnQsIGJ1ZiwgcG9zK3F1b3RlLmxlbmd0aCwgbmV4dENocik7XG4gICAgICAgICAgICAgIGNvbnN0IGlzTmV4dENockRlbGltaXRlciA9IHRoaXMuX19pc0RlbGltaXRlcihidWYsIHBvcytxdW90ZS5sZW5ndGgsIG5leHRDaHIpO1xuICAgICAgICAgICAgICBjb25zdCBpc05leHRDaHJSZWNvcmREZWxpbWl0ZXIgPSByZWNvcmRfZGVsaW1pdGVyLmxlbmd0aCA9PT0gMCA/IHRoaXMuX19hdXRvRGlzY292ZXJSZWNvcmREZWxpbWl0ZXIoYnVmLCBwb3MrcXVvdGUubGVuZ3RoKSA6IHRoaXMuX19pc1JlY29yZERlbGltaXRlcihuZXh0Q2hyLCBidWYsIHBvcytxdW90ZS5sZW5ndGgpO1xuICAgICAgICAgICAgICAvLyBFc2NhcGUgYSBxdW90ZVxuICAgICAgICAgICAgICAvLyBUcmVhdCBuZXh0IGNoYXIgYXMgYSByZWd1bGFyIGNoYXJhY3RlclxuICAgICAgICAgICAgICBpZihlc2NhcGUgIT09IG51bGwgJiYgdGhpcy5fX2lzRXNjYXBlKGJ1ZiwgcG9zLCBjaHIpICYmIHRoaXMuX19pc1F1b3RlKGJ1ZiwgcG9zICsgZXNjYXBlLmxlbmd0aCkpe1xuICAgICAgICAgICAgICAgIHBvcyArPSBlc2NhcGUubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgfWVsc2UgaWYoIW5leHRDaHIgfHwgaXNOZXh0Q2hyRGVsaW1pdGVyIHx8IGlzTmV4dENoclJlY29yZERlbGltaXRlciB8fCBpc05leHRDaHJDb21tZW50IHx8IGlzTmV4dENoclRyaW1hYmxlKXtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnF1b3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLndhc1F1b3RpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHBvcyArPSBxdW90ZS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9ZWxzZSBpZihyZWxheF9xdW90ZXMgPT09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSB0aGlzLl9fZXJyb3IoXG4gICAgICAgICAgICAgICAgICBuZXcgQ3N2RXJyb3IoJ0NTVl9JTlZBTElEX0NMT1NJTkdfUVVPVEUnLCBbXG4gICAgICAgICAgICAgICAgICAgICdJbnZhbGlkIENsb3NpbmcgUXVvdGU6JyxcbiAgICAgICAgICAgICAgICAgICAgYGdvdCBcIiR7U3RyaW5nLmZyb21DaGFyQ29kZShuZXh0Q2hyKX1cImAsXG4gICAgICAgICAgICAgICAgICAgIGBhdCBsaW5lICR7dGhpcy5pbmZvLmxpbmVzfWAsXG4gICAgICAgICAgICAgICAgICAgICdpbnN0ZWFkIG9mIGRlbGltaXRlciwgcmVjb3JkIGRlbGltaXRlciwgdHJpbWFibGUgY2hhcmFjdGVyJyxcbiAgICAgICAgICAgICAgICAgICAgJyhpZiBhY3RpdmF0ZWQpIG9yIGNvbW1lbnQnLFxuICAgICAgICAgICAgICAgICAgXSwgdGhpcy5vcHRpb25zLCB0aGlzLl9faW5mb0ZpZWxkKCkpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZihlcnIgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGVycjtcbiAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucXVvdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2FzUXVvdGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5maWVsZC5wcmVwZW5kKHF1b3RlKTtcbiAgICAgICAgICAgICAgICBwb3MgKz0gcXVvdGUubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICBpZih0aGlzLnN0YXRlLmZpZWxkLmxlbmd0aCAhPT0gMCl7XG4gICAgICAgICAgICAgICAgLy8gSW4gcmVsYXhfcXVvdGVzIG1vZGUsIHRyZWF0IG9wZW5pbmcgcXVvdGUgcHJlY2VkZWQgYnkgY2hycyBhcyByZWd1bGFyXG4gICAgICAgICAgICAgICAgaWYocmVsYXhfcXVvdGVzID09PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgICBjb25zdCBpbmZvID0gdGhpcy5fX2luZm9GaWVsZCgpO1xuICAgICAgICAgICAgICAgICAgY29uc3QgYm9tID0gT2JqZWN0LmtleXMoYm9tcykubWFwKGIgPT4gYm9tc1tiXS5lcXVhbHModGhpcy5zdGF0ZS5maWVsZC50b1N0cmluZygpKSA/IGIgOiBmYWxzZSkuZmlsdGVyKEJvb2xlYW4pWzBdO1xuICAgICAgICAgICAgICAgICAgY29uc3QgZXJyID0gdGhpcy5fX2Vycm9yKFxuICAgICAgICAgICAgICAgICAgICBuZXcgQ3N2RXJyb3IoJ0lOVkFMSURfT1BFTklOR19RVU9URScsIFtcbiAgICAgICAgICAgICAgICAgICAgICAnSW52YWxpZCBPcGVuaW5nIFF1b3RlOicsXG4gICAgICAgICAgICAgICAgICAgICAgYGEgcXVvdGUgaXMgZm91bmQgb24gZmllbGQgJHtKU09OLnN0cmluZ2lmeShpbmZvLmNvbHVtbil9IGF0IGxpbmUgJHtpbmZvLmxpbmVzfSwgdmFsdWUgaXMgJHtKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLmZpZWxkLnRvU3RyaW5nKGVuY29kaW5nKSl9YCxcbiAgICAgICAgICAgICAgICAgICAgICBib20gPyBgKCR7Ym9tfSBib20pYCA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICBdLCB0aGlzLm9wdGlvbnMsIGluZm8sIHtcbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogdGhpcy5zdGF0ZS5maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBpZihlcnIgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGVycjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnF1b3RpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHBvcyArPSBxdW90ZS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHRoaXMuc3RhdGUucXVvdGluZyA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgY29uc3QgcmVjb3JkRGVsaW1pdGVyTGVuZ3RoID0gdGhpcy5fX2lzUmVjb3JkRGVsaW1pdGVyKGNociwgYnVmLCBwb3MpO1xuICAgICAgICAgICAgaWYocmVjb3JkRGVsaW1pdGVyTGVuZ3RoICE9PSAwKXtcbiAgICAgICAgICAgICAgLy8gRG8gbm90IGVtaXQgY29tbWVudHMgd2hpY2ggdGFrZSBhIGZ1bGwgbGluZVxuICAgICAgICAgICAgICBjb25zdCBza2lwQ29tbWVudExpbmUgPSB0aGlzLnN0YXRlLmNvbW1lbnRpbmcgJiYgKHRoaXMuc3RhdGUud2FzUXVvdGluZyA9PT0gZmFsc2UgJiYgdGhpcy5zdGF0ZS5yZWNvcmQubGVuZ3RoID09PSAwICYmIHRoaXMuc3RhdGUuZmllbGQubGVuZ3RoID09PSAwKTtcbiAgICAgICAgICAgICAgaWYoc2tpcENvbW1lbnRMaW5lKXtcbiAgICAgICAgICAgICAgICB0aGlzLmluZm8uY29tbWVudF9saW5lcysrO1xuICAgICAgICAgICAgICAgIC8vIFNraXAgZnVsbCBjb21tZW50IGxpbmVcbiAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEFjdGl2YXRlIHJlY29yZHMgZW1pdGlvbiBpZiBhYm92ZSBmcm9tX2xpbmVcbiAgICAgICAgICAgICAgICBpZih0aGlzLnN0YXRlLmVuYWJsZWQgPT09IGZhbHNlICYmIHRoaXMuaW5mby5saW5lcyArICh0aGlzLnN0YXRlLndhc1Jvd0RlbGltaXRlciA9PT0gdHJ1ZSA/IDE6IDApID49IGZyb21fbGluZSl7XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgdGhpcy5fX3Jlc2V0RmllbGQoKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuX19yZXNldFJlY29yZCgpO1xuICAgICAgICAgICAgICAgICAgcG9zICs9IHJlY29yZERlbGltaXRlckxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU2tpcCBpZiBsaW5lIGlzIGVtcHR5IGFuZCBza2lwX2VtcHR5X2xpbmVzIGFjdGl2YXRlZFxuICAgICAgICAgICAgICAgIGlmKHNraXBfZW1wdHlfbGluZXMgPT09IHRydWUgJiYgdGhpcy5zdGF0ZS53YXNRdW90aW5nID09PSBmYWxzZSAmJiB0aGlzLnN0YXRlLnJlY29yZC5sZW5ndGggPT09IDAgJiYgdGhpcy5zdGF0ZS5maWVsZC5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgICAgICAgdGhpcy5pbmZvLmVtcHR5X2xpbmVzKys7XG4gICAgICAgICAgICAgICAgICBwb3MgKz0gcmVjb3JkRGVsaW1pdGVyTGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmluZm8uYnl0ZXMgPSB0aGlzLnN0YXRlLmJ1ZkJ5dGVzU3RhcnQgKyBwb3M7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyRmllbGQgPSB0aGlzLl9fb25GaWVsZCgpO1xuICAgICAgICAgICAgICAgIGlmKGVyckZpZWxkICE9PSB1bmRlZmluZWQpIHJldHVybiBlcnJGaWVsZDtcbiAgICAgICAgICAgICAgICB0aGlzLmluZm8uYnl0ZXMgPSB0aGlzLnN0YXRlLmJ1ZkJ5dGVzU3RhcnQgKyBwb3MgKyByZWNvcmREZWxpbWl0ZXJMZW5ndGg7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyUmVjb3JkID0gdGhpcy5fX29uUmVjb3JkKHB1c2gpO1xuICAgICAgICAgICAgICAgIGlmKGVyclJlY29yZCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gZXJyUmVjb3JkO1xuICAgICAgICAgICAgICAgIGlmKHRvICE9PSAtMSAmJiB0aGlzLmluZm8ucmVjb3JkcyA+PSB0byl7XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnN0b3AgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb21tZW50aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIHBvcyArPSByZWNvcmREZWxpbWl0ZXJMZW5ndGggLSAxO1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuY29tbWVudGluZyl7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoY29tbWVudCAhPT0gbnVsbCAmJiAoY29tbWVudF9ub19pbmZpeCA9PT0gZmFsc2UgfHwgKHRoaXMuc3RhdGUucmVjb3JkLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnN0YXRlLmZpZWxkLmxlbmd0aCA9PT0gMCkpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRDb3VudCA9IHRoaXMuX19jb21wYXJlQnl0ZXMoY29tbWVudCwgYnVmLCBwb3MsIGNocik7XG4gICAgICAgICAgICAgIGlmKGNvbW1lbnRDb3VudCAhPT0gMCl7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb21tZW50aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGVsaW1pdGVyTGVuZ3RoID0gdGhpcy5fX2lzRGVsaW1pdGVyKGJ1ZiwgcG9zLCBjaHIpO1xuICAgICAgICAgICAgaWYoZGVsaW1pdGVyTGVuZ3RoICE9PSAwKXtcbiAgICAgICAgICAgICAgdGhpcy5pbmZvLmJ5dGVzID0gdGhpcy5zdGF0ZS5idWZCeXRlc1N0YXJ0ICsgcG9zO1xuICAgICAgICAgICAgICBjb25zdCBlcnJGaWVsZCA9IHRoaXMuX19vbkZpZWxkKCk7XG4gICAgICAgICAgICAgIGlmKGVyckZpZWxkICE9PSB1bmRlZmluZWQpIHJldHVybiBlcnJGaWVsZDtcbiAgICAgICAgICAgICAgcG9zICs9IGRlbGltaXRlckxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnN0YXRlLmNvbW1lbnRpbmcgPT09IGZhbHNlKXtcbiAgICAgICAgICBpZihtYXhfcmVjb3JkX3NpemUgIT09IDAgJiYgdGhpcy5zdGF0ZS5yZWNvcmRfbGVuZ3RoICsgdGhpcy5zdGF0ZS5maWVsZC5sZW5ndGggPiBtYXhfcmVjb3JkX3NpemUpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19lcnJvcihcbiAgICAgICAgICAgICAgbmV3IENzdkVycm9yKCdDU1ZfTUFYX1JFQ09SRF9TSVpFJywgW1xuICAgICAgICAgICAgICAgICdNYXggUmVjb3JkIFNpemU6JyxcbiAgICAgICAgICAgICAgICAncmVjb3JkIGV4Y2VlZCB0aGUgbWF4aW11bSBudW1iZXIgb2YgdG9sZXJhdGVkIGJ5dGVzJyxcbiAgICAgICAgICAgICAgICBgb2YgJHttYXhfcmVjb3JkX3NpemV9YCxcbiAgICAgICAgICAgICAgICBgYXQgbGluZSAke3RoaXMuaW5mby5saW5lc31gLFxuICAgICAgICAgICAgICBdLCB0aGlzLm9wdGlvbnMsIHRoaXMuX19pbmZvRmllbGQoKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxhcHBlbmQgPSBsdHJpbSA9PT0gZmFsc2UgfHwgdGhpcy5zdGF0ZS5xdW90aW5nID09PSB0cnVlIHx8IHRoaXMuc3RhdGUuZmllbGQubGVuZ3RoICE9PSAwIHx8ICF0aGlzLl9faXNDaGFyVHJpbWFibGUoYnVmLCBwb3MpO1xuICAgICAgICAvLyBydHJpbSBpbiBub24gcXVvdGluZyBpcyBoYW5kbGUgaW4gX19vbkZpZWxkXG4gICAgICAgIGNvbnN0IHJhcHBlbmQgPSBydHJpbSA9PT0gZmFsc2UgfHwgdGhpcy5zdGF0ZS53YXNRdW90aW5nID09PSBmYWxzZTtcbiAgICAgICAgaWYobGFwcGVuZCA9PT0gdHJ1ZSAmJiByYXBwZW5kID09PSB0cnVlKXtcbiAgICAgICAgICB0aGlzLnN0YXRlLmZpZWxkLmFwcGVuZChjaHIpO1xuICAgICAgICB9ZWxzZSBpZihydHJpbSA9PT0gdHJ1ZSAmJiAhdGhpcy5fX2lzQ2hhclRyaW1hYmxlKGJ1ZiwgcG9zKSl7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX19lcnJvcihcbiAgICAgICAgICAgIG5ldyBDc3ZFcnJvcignQ1NWX05PTl9UUklNQUJMRV9DSEFSX0FGVEVSX0NMT1NJTkdfUVVPVEUnLCBbXG4gICAgICAgICAgICAgICdJbnZhbGlkIENsb3NpbmcgUXVvdGU6JyxcbiAgICAgICAgICAgICAgJ2ZvdW5kIG5vbiB0cmltYWJsZSBieXRlIGFmdGVyIHF1b3RlJyxcbiAgICAgICAgICAgICAgYGF0IGxpbmUgJHt0aGlzLmluZm8ubGluZXN9YCxcbiAgICAgICAgICAgIF0sIHRoaXMub3B0aW9ucywgdGhpcy5fX2luZm9GaWVsZCgpKVxuICAgICAgICAgICk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICBpZihsYXBwZW5kID09PSBmYWxzZSl7XG4gICAgICAgICAgICBwb3MgKz0gdGhpcy5fX2lzQ2hhclRyaW1hYmxlKGJ1ZiwgcG9zKSAtIDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZihlbmQgPT09IHRydWUpe1xuICAgICAgICAvLyBFbnN1cmUgd2UgYXJlIG5vdCBlbmRpbmcgaW4gYSBxdW90aW5nIHN0YXRlXG4gICAgICAgIGlmKHRoaXMuc3RhdGUucXVvdGluZyA9PT0gdHJ1ZSl7XG4gICAgICAgICAgY29uc3QgZXJyID0gdGhpcy5fX2Vycm9yKFxuICAgICAgICAgICAgbmV3IENzdkVycm9yKCdDU1ZfUVVPVEVfTk9UX0NMT1NFRCcsIFtcbiAgICAgICAgICAgICAgJ1F1b3RlIE5vdCBDbG9zZWQ6JyxcbiAgICAgICAgICAgICAgYHRoZSBwYXJzaW5nIGlzIGZpbmlzaGVkIHdpdGggYW4gb3BlbmluZyBxdW90ZSBhdCBsaW5lICR7dGhpcy5pbmZvLmxpbmVzfWAsXG4gICAgICAgICAgICBdLCB0aGlzLm9wdGlvbnMsIHRoaXMuX19pbmZvRmllbGQoKSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmKGVyciAhPT0gdW5kZWZpbmVkKSByZXR1cm4gZXJyO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgLy8gU2tpcCBsYXN0IGxpbmUgaWYgaXQgaGFzIG5vIGNoYXJhY3RlcnNcbiAgICAgICAgICBpZih0aGlzLnN0YXRlLndhc1F1b3RpbmcgPT09IHRydWUgfHwgdGhpcy5zdGF0ZS5yZWNvcmQubGVuZ3RoICE9PSAwIHx8IHRoaXMuc3RhdGUuZmllbGQubGVuZ3RoICE9PSAwKXtcbiAgICAgICAgICAgIHRoaXMuaW5mby5ieXRlcyA9IHRoaXMuc3RhdGUuYnVmQnl0ZXNTdGFydCArIHBvcztcbiAgICAgICAgICAgIGNvbnN0IGVyckZpZWxkID0gdGhpcy5fX29uRmllbGQoKTtcbiAgICAgICAgICAgIGlmKGVyckZpZWxkICE9PSB1bmRlZmluZWQpIHJldHVybiBlcnJGaWVsZDtcbiAgICAgICAgICAgIGNvbnN0IGVyclJlY29yZCA9IHRoaXMuX19vblJlY29yZChwdXNoKTtcbiAgICAgICAgICAgIGlmKGVyclJlY29yZCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gZXJyUmVjb3JkO1xuICAgICAgICAgIH1lbHNlIGlmKHRoaXMuc3RhdGUud2FzUm93RGVsaW1pdGVyID09PSB0cnVlKXtcbiAgICAgICAgICAgIHRoaXMuaW5mby5lbXB0eV9saW5lcysrO1xuICAgICAgICAgIH1lbHNlIGlmKHRoaXMuc3RhdGUuY29tbWVudGluZyA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICB0aGlzLmluZm8uY29tbWVudF9saW5lcysrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfWVsc2Uge1xuICAgICAgICB0aGlzLnN0YXRlLmJ1ZkJ5dGVzU3RhcnQgKz0gcG9zO1xuICAgICAgICB0aGlzLnN0YXRlLnByZXZpb3VzQnVmID0gYnVmLnNsaWNlKHBvcyk7XG4gICAgICB9XG4gICAgICBpZih0aGlzLnN0YXRlLndhc1Jvd0RlbGltaXRlciA9PT0gdHJ1ZSl7XG4gICAgICAgIHRoaXMuaW5mby5saW5lcysrO1xuICAgICAgICB0aGlzLnN0YXRlLndhc1Jvd0RlbGltaXRlciA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG4gICAgX19vblJlY29yZDogZnVuY3Rpb24ocHVzaCl7XG4gICAgICBjb25zdCB7Y29sdW1ucywgZ3JvdXBfY29sdW1uc19ieV9uYW1lLCBlbmNvZGluZywgaW5mbywgZnJvbSwgcmVsYXhfY29sdW1uX2NvdW50LCByZWxheF9jb2x1bW5fY291bnRfbGVzcywgcmVsYXhfY29sdW1uX2NvdW50X21vcmUsIHJhdywgc2tpcF9yZWNvcmRzX3dpdGhfZW1wdHlfdmFsdWVzfSA9IHRoaXMub3B0aW9ucztcbiAgICAgIGNvbnN0IHtlbmFibGVkLCByZWNvcmR9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGlmKGVuYWJsZWQgPT09IGZhbHNlKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19yZXNldFJlY29yZCgpO1xuICAgICAgfVxuICAgICAgLy8gQ29udmVydCB0aGUgZmlyc3QgbGluZSBpbnRvIGNvbHVtbiBuYW1lc1xuICAgICAgY29uc3QgcmVjb3JkTGVuZ3RoID0gcmVjb3JkLmxlbmd0aDtcbiAgICAgIGlmKGNvbHVtbnMgPT09IHRydWUpe1xuICAgICAgICBpZihza2lwX3JlY29yZHNfd2l0aF9lbXB0eV92YWx1ZXMgPT09IHRydWUgJiYgaXNSZWNvcmRFbXB0eShyZWNvcmQpKXtcbiAgICAgICAgICB0aGlzLl9fcmVzZXRSZWNvcmQoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX19maXJzdExpbmVUb0NvbHVtbnMocmVjb3JkKTtcbiAgICAgIH1cbiAgICAgIGlmKGNvbHVtbnMgPT09IGZhbHNlICYmIHRoaXMuaW5mby5yZWNvcmRzID09PSAwKXtcbiAgICAgICAgdGhpcy5zdGF0ZS5leHBlY3RlZFJlY29yZExlbmd0aCA9IHJlY29yZExlbmd0aDtcbiAgICAgIH1cbiAgICAgIGlmKHJlY29yZExlbmd0aCAhPT0gdGhpcy5zdGF0ZS5leHBlY3RlZFJlY29yZExlbmd0aCl7XG4gICAgICAgIGNvbnN0IGVyciA9IGNvbHVtbnMgPT09IGZhbHNlID9cbiAgICAgICAgICBuZXcgQ3N2RXJyb3IoJ0NTVl9SRUNPUkRfSU5DT05TSVNURU5UX0ZJRUxEU19MRU5HVEgnLCBbXG4gICAgICAgICAgICAnSW52YWxpZCBSZWNvcmQgTGVuZ3RoOicsXG4gICAgICAgICAgICBgZXhwZWN0ICR7dGhpcy5zdGF0ZS5leHBlY3RlZFJlY29yZExlbmd0aH0sYCxcbiAgICAgICAgICAgIGBnb3QgJHtyZWNvcmRMZW5ndGh9IG9uIGxpbmUgJHt0aGlzLmluZm8ubGluZXN9YCxcbiAgICAgICAgICBdLCB0aGlzLm9wdGlvbnMsIHRoaXMuX19pbmZvRmllbGQoKSwge1xuICAgICAgICAgICAgcmVjb3JkOiByZWNvcmQsXG4gICAgICAgICAgfSlcbiAgICAgICAgICA6XG4gICAgICAgICAgbmV3IENzdkVycm9yKCdDU1ZfUkVDT1JEX0lOQ09OU0lTVEVOVF9DT0xVTU5TJywgW1xuICAgICAgICAgICAgJ0ludmFsaWQgUmVjb3JkIExlbmd0aDonLFxuICAgICAgICAgICAgYGNvbHVtbnMgbGVuZ3RoIGlzICR7Y29sdW1ucy5sZW5ndGh9LGAsIC8vIHJlbmFtZSBjb2x1bW5zXG4gICAgICAgICAgICBgZ290ICR7cmVjb3JkTGVuZ3RofSBvbiBsaW5lICR7dGhpcy5pbmZvLmxpbmVzfWAsXG4gICAgICAgICAgXSwgdGhpcy5vcHRpb25zLCB0aGlzLl9faW5mb0ZpZWxkKCksIHtcbiAgICAgICAgICAgIHJlY29yZDogcmVjb3JkLFxuICAgICAgICAgIH0pO1xuICAgICAgICBpZihyZWxheF9jb2x1bW5fY291bnQgPT09IHRydWUgfHxcbiAgICAgICAgICAocmVsYXhfY29sdW1uX2NvdW50X2xlc3MgPT09IHRydWUgJiYgcmVjb3JkTGVuZ3RoIDwgdGhpcy5zdGF0ZS5leHBlY3RlZFJlY29yZExlbmd0aCkgfHxcbiAgICAgICAgICAocmVsYXhfY29sdW1uX2NvdW50X21vcmUgPT09IHRydWUgJiYgcmVjb3JkTGVuZ3RoID4gdGhpcy5zdGF0ZS5leHBlY3RlZFJlY29yZExlbmd0aCkpe1xuICAgICAgICAgIHRoaXMuaW5mby5pbnZhbGlkX2ZpZWxkX2xlbmd0aCsrO1xuICAgICAgICAgIHRoaXMuc3RhdGUuZXJyb3IgPSBlcnI7XG4gICAgICAgIC8vIEVycm9yIGlzIHVuZGVmaW5lZCB3aXRoIHNraXBfcmVjb3Jkc193aXRoX2Vycm9yXG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICBjb25zdCBmaW5hbEVyciA9IHRoaXMuX19lcnJvcihlcnIpO1xuICAgICAgICAgIGlmKGZpbmFsRXJyKSByZXR1cm4gZmluYWxFcnI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKHNraXBfcmVjb3Jkc193aXRoX2VtcHR5X3ZhbHVlcyA9PT0gdHJ1ZSAmJiBpc1JlY29yZEVtcHR5KHJlY29yZCkpe1xuICAgICAgICB0aGlzLl9fcmVzZXRSZWNvcmQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYodGhpcy5zdGF0ZS5yZWNvcmRIYXNFcnJvciA9PT0gdHJ1ZSl7XG4gICAgICAgIHRoaXMuX19yZXNldFJlY29yZCgpO1xuICAgICAgICB0aGlzLnN0YXRlLnJlY29yZEhhc0Vycm9yID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuaW5mby5yZWNvcmRzKys7XG4gICAgICBpZihmcm9tID09PSAxIHx8IHRoaXMuaW5mby5yZWNvcmRzID49IGZyb20pe1xuICAgICAgICBjb25zdCB7b2JqbmFtZX0gPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIC8vIFdpdGggY29sdW1ucywgcmVjb3JkcyBhcmUgb2JqZWN0XG4gICAgICAgIGlmKGNvbHVtbnMgIT09IGZhbHNlKXtcbiAgICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgICAgICAvLyBUcmFuc2Zvcm0gcmVjb3JkIGFycmF5IHRvIGFuIG9iamVjdFxuICAgICAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSByZWNvcmQubGVuZ3RoOyBpIDwgbDsgaSsrKXtcbiAgICAgICAgICAgIGlmKGNvbHVtbnNbaV0gPT09IHVuZGVmaW5lZCB8fCBjb2x1bW5zW2ldLmRpc2FibGVkKSBjb250aW51ZTtcbiAgICAgICAgICAgIC8vIFR1cm4gZHVwbGljYXRlIGNvbHVtbnMgaW50byBhbiBhcnJheVxuICAgICAgICAgICAgaWYgKGdyb3VwX2NvbHVtbnNfYnlfbmFtZSA9PT0gdHJ1ZSAmJiBvYmpbY29sdW1uc1tpXS5uYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9ialtjb2x1bW5zW2ldLm5hbWVdKSkge1xuICAgICAgICAgICAgICAgIG9ialtjb2x1bW5zW2ldLm5hbWVdID0gb2JqW2NvbHVtbnNbaV0ubmFtZV0uY29uY2F0KHJlY29yZFtpXSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JqW2NvbHVtbnNbaV0ubmFtZV0gPSBbb2JqW2NvbHVtbnNbaV0ubmFtZV0sIHJlY29yZFtpXV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG9ialtjb2x1bW5zW2ldLm5hbWVdID0gcmVjb3JkW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBXaXRob3V0IG9iam5hbWUgKGRlZmF1bHQpXG4gICAgICAgICAgaWYocmF3ID09PSB0cnVlIHx8IGluZm8gPT09IHRydWUpe1xuICAgICAgICAgICAgY29uc3QgZXh0UmVjb3JkID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAge3JlY29yZDogb2JqfSxcbiAgICAgICAgICAgICAgKHJhdyA9PT0gdHJ1ZSA/IHtyYXc6IHRoaXMuc3RhdGUucmF3QnVmZmVyLnRvU3RyaW5nKGVuY29kaW5nKX06IHt9KSxcbiAgICAgICAgICAgICAgKGluZm8gPT09IHRydWUgPyB7aW5mbzogdGhpcy5fX2luZm9SZWNvcmQoKX06IHt9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGVyciA9IHRoaXMuX19wdXNoKFxuICAgICAgICAgICAgICBvYmpuYW1lID09PSB1bmRlZmluZWQgPyBleHRSZWNvcmQgOiBbb2JqW29iam5hbWVdLCBleHRSZWNvcmRdXG4gICAgICAgICAgICAgICwgcHVzaCk7XG4gICAgICAgICAgICBpZihlcnIpe1xuICAgICAgICAgICAgICByZXR1cm4gZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGVyciA9IHRoaXMuX19wdXNoKFxuICAgICAgICAgICAgICBvYmpuYW1lID09PSB1bmRlZmluZWQgPyBvYmogOiBbb2JqW29iam5hbWVdLCBvYmpdXG4gICAgICAgICAgICAgICwgcHVzaCk7XG4gICAgICAgICAgICBpZihlcnIpe1xuICAgICAgICAgICAgICByZXR1cm4gZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgLy8gV2l0aG91dCBjb2x1bW5zLCByZWNvcmRzIGFyZSBhcnJheVxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgaWYocmF3ID09PSB0cnVlIHx8IGluZm8gPT09IHRydWUpe1xuICAgICAgICAgICAgY29uc3QgZXh0UmVjb3JkID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAge3JlY29yZDogcmVjb3JkfSxcbiAgICAgICAgICAgICAgcmF3ID09PSB0cnVlID8ge3JhdzogdGhpcy5zdGF0ZS5yYXdCdWZmZXIudG9TdHJpbmcoZW5jb2RpbmcpfToge30sXG4gICAgICAgICAgICAgIGluZm8gPT09IHRydWUgPyB7aW5mbzogdGhpcy5fX2luZm9SZWNvcmQoKX06IHt9XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgZXJyID0gdGhpcy5fX3B1c2goXG4gICAgICAgICAgICAgIG9iam5hbWUgPT09IHVuZGVmaW5lZCA/IGV4dFJlY29yZCA6IFtyZWNvcmRbb2JqbmFtZV0sIGV4dFJlY29yZF1cbiAgICAgICAgICAgICAgLCBwdXNoKTtcbiAgICAgICAgICAgIGlmKGVycil7XG4gICAgICAgICAgICAgIHJldHVybiBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZXJyID0gdGhpcy5fX3B1c2goXG4gICAgICAgICAgICAgIG9iam5hbWUgPT09IHVuZGVmaW5lZCA/IHJlY29yZCA6IFtyZWNvcmRbb2JqbmFtZV0sIHJlY29yZF1cbiAgICAgICAgICAgICAgLCBwdXNoKTtcbiAgICAgICAgICAgIGlmKGVycil7XG4gICAgICAgICAgICAgIHJldHVybiBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9fcmVzZXRSZWNvcmQoKTtcbiAgICB9LFxuICAgIF9fZmlyc3RMaW5lVG9Db2x1bW5zOiBmdW5jdGlvbihyZWNvcmQpe1xuICAgICAgY29uc3Qge2ZpcnN0TGluZVRvSGVhZGVyc30gPSB0aGlzLnN0YXRlO1xuICAgICAgdHJ5e1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gZmlyc3RMaW5lVG9IZWFkZXJzID09PSB1bmRlZmluZWQgPyByZWNvcmQgOiBmaXJzdExpbmVUb0hlYWRlcnMuY2FsbChudWxsLCByZWNvcmQpO1xuICAgICAgICBpZighQXJyYXkuaXNBcnJheShoZWFkZXJzKSl7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX19lcnJvcihcbiAgICAgICAgICAgIG5ldyBDc3ZFcnJvcignQ1NWX0lOVkFMSURfQ09MVU1OX01BUFBJTkcnLCBbXG4gICAgICAgICAgICAgICdJbnZhbGlkIENvbHVtbiBNYXBwaW5nOicsXG4gICAgICAgICAgICAgICdleHBlY3QgYW4gYXJyYXkgZnJvbSBjb2x1bW4gZnVuY3Rpb24sJyxcbiAgICAgICAgICAgICAgYGdvdCAke0pTT04uc3RyaW5naWZ5KGhlYWRlcnMpfWBcbiAgICAgICAgICAgIF0sIHRoaXMub3B0aW9ucywgdGhpcy5fX2luZm9GaWVsZCgpLCB7XG4gICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZEhlYWRlcnMgPSBub3JtYWxpemVfY29sdW1uc19hcnJheShoZWFkZXJzKTtcbiAgICAgICAgdGhpcy5zdGF0ZS5leHBlY3RlZFJlY29yZExlbmd0aCA9IG5vcm1hbGl6ZWRIZWFkZXJzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5vcHRpb25zLmNvbHVtbnMgPSBub3JtYWxpemVkSGVhZGVycztcbiAgICAgICAgdGhpcy5fX3Jlc2V0UmVjb3JkKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1jYXRjaChlcnIpe1xuICAgICAgICByZXR1cm4gZXJyO1xuICAgICAgfVxuICAgIH0sXG4gICAgX19yZXNldFJlY29yZDogZnVuY3Rpb24oKXtcbiAgICAgIGlmKHRoaXMub3B0aW9ucy5yYXcgPT09IHRydWUpe1xuICAgICAgICB0aGlzLnN0YXRlLnJhd0J1ZmZlci5yZXNldCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5zdGF0ZS5lcnJvciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuc3RhdGUucmVjb3JkID0gW107XG4gICAgICB0aGlzLnN0YXRlLnJlY29yZF9sZW5ndGggPSAwO1xuICAgIH0sXG4gICAgX19vbkZpZWxkOiBmdW5jdGlvbigpe1xuICAgICAgY29uc3Qge2Nhc3QsIGVuY29kaW5nLCBydHJpbSwgbWF4X3JlY29yZF9zaXplfSA9IHRoaXMub3B0aW9ucztcbiAgICAgIGNvbnN0IHtlbmFibGVkLCB3YXNRdW90aW5nfSA9IHRoaXMuc3RhdGU7XG4gICAgICAvLyBTaG9ydCBjaXJjdWl0IGZvciB0aGUgZnJvbV9saW5lIG9wdGlvbnNcbiAgICAgIGlmKGVuYWJsZWQgPT09IGZhbHNlKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19yZXNldEZpZWxkKCk7XG4gICAgICB9XG4gICAgICBsZXQgZmllbGQgPSB0aGlzLnN0YXRlLmZpZWxkLnRvU3RyaW5nKGVuY29kaW5nKTtcbiAgICAgIGlmKHJ0cmltID09PSB0cnVlICYmIHdhc1F1b3RpbmcgPT09IGZhbHNlKXtcbiAgICAgICAgZmllbGQgPSBmaWVsZC50cmltUmlnaHQoKTtcbiAgICAgIH1cbiAgICAgIGlmKGNhc3QgPT09IHRydWUpe1xuICAgICAgICBjb25zdCBbZXJyLCBmXSA9IHRoaXMuX19jYXN0KGZpZWxkKTtcbiAgICAgICAgaWYoZXJyICE9PSB1bmRlZmluZWQpIHJldHVybiBlcnI7XG4gICAgICAgIGZpZWxkID0gZjtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhdGUucmVjb3JkLnB1c2goZmllbGQpO1xuICAgICAgLy8gSW5jcmVtZW50IHJlY29yZCBsZW5ndGggaWYgcmVjb3JkIHNpemUgbXVzdCBub3QgZXhjZWVkIGEgbGltaXRcbiAgICAgIGlmKG1heF9yZWNvcmRfc2l6ZSAhPT0gMCAmJiB0eXBlb2YgZmllbGQgPT09ICdzdHJpbmcnKXtcbiAgICAgICAgdGhpcy5zdGF0ZS5yZWNvcmRfbGVuZ3RoICs9IGZpZWxkLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX19yZXNldEZpZWxkKCk7XG4gICAgfSxcbiAgICBfX3Jlc2V0RmllbGQ6IGZ1bmN0aW9uKCl7XG4gICAgICB0aGlzLnN0YXRlLmZpZWxkLnJlc2V0KCk7XG4gICAgICB0aGlzLnN0YXRlLndhc1F1b3RpbmcgPSBmYWxzZTtcbiAgICB9LFxuICAgIF9fcHVzaDogZnVuY3Rpb24ocmVjb3JkLCBwdXNoKXtcbiAgICAgIGNvbnN0IHtvbl9yZWNvcmR9ID0gdGhpcy5vcHRpb25zO1xuICAgICAgaWYob25fcmVjb3JkICE9PSB1bmRlZmluZWQpe1xuICAgICAgICBjb25zdCBpbmZvID0gdGhpcy5fX2luZm9SZWNvcmQoKTtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgIHJlY29yZCA9IG9uX3JlY29yZC5jYWxsKG51bGwsIHJlY29yZCwgaW5mbyk7XG4gICAgICAgIH1jYXRjaChlcnIpe1xuICAgICAgICAgIHJldHVybiBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgaWYocmVjb3JkID09PSB1bmRlZmluZWQgfHwgcmVjb3JkID09PSBudWxsKXsgcmV0dXJuOyB9XG4gICAgICB9XG4gICAgICBwdXNoKHJlY29yZCk7XG4gICAgfSxcbiAgICAvLyBSZXR1cm4gYSB0dXBsZSB3aXRoIHRoZSBlcnJvciBhbmQgdGhlIGNhc3RlZCB2YWx1ZVxuICAgIF9fY2FzdDogZnVuY3Rpb24oZmllbGQpe1xuICAgICAgY29uc3Qge2NvbHVtbnMsIHJlbGF4X2NvbHVtbl9jb3VudH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgICBjb25zdCBpc0NvbHVtbnMgPSBBcnJheS5pc0FycmF5KGNvbHVtbnMpO1xuICAgICAgLy8gRG9udCBsb29zZSB0aW1lIGNhbGxpbmcgY2FzdFxuICAgICAgLy8gYmVjYXVzZSB0aGUgZmluYWwgcmVjb3JkIGlzIGFuIG9iamVjdFxuICAgICAgLy8gYW5kIHRoaXMgZmllbGQgY2FuJ3QgYmUgYXNzb2NpYXRlZCB0byBhIGtleSBwcmVzZW50IGluIGNvbHVtbnNcbiAgICAgIGlmKGlzQ29sdW1ucyA9PT0gdHJ1ZSAmJiByZWxheF9jb2x1bW5fY291bnQgJiYgdGhpcy5vcHRpb25zLmNvbHVtbnMubGVuZ3RoIDw9IHRoaXMuc3RhdGUucmVjb3JkLmxlbmd0aCl7XG4gICAgICAgIHJldHVybiBbdW5kZWZpbmVkLCB1bmRlZmluZWRdO1xuICAgICAgfVxuICAgICAgaWYodGhpcy5zdGF0ZS5jYXN0RmllbGQgIT09IG51bGwpe1xuICAgICAgICB0cnl7XG4gICAgICAgICAgY29uc3QgaW5mbyA9IHRoaXMuX19pbmZvRmllbGQoKTtcbiAgICAgICAgICByZXR1cm4gW3VuZGVmaW5lZCwgdGhpcy5zdGF0ZS5jYXN0RmllbGQuY2FsbChudWxsLCBmaWVsZCwgaW5mbyldO1xuICAgICAgICB9Y2F0Y2goZXJyKXtcbiAgICAgICAgICByZXR1cm4gW2Vycl07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKHRoaXMuX19pc0Zsb2F0KGZpZWxkKSl7XG4gICAgICAgIHJldHVybiBbdW5kZWZpbmVkLCBwYXJzZUZsb2F0KGZpZWxkKV07XG4gICAgICB9ZWxzZSBpZih0aGlzLm9wdGlvbnMuY2FzdF9kYXRlICE9PSBmYWxzZSl7XG4gICAgICAgIGNvbnN0IGluZm8gPSB0aGlzLl9faW5mb0ZpZWxkKCk7XG4gICAgICAgIHJldHVybiBbdW5kZWZpbmVkLCB0aGlzLm9wdGlvbnMuY2FzdF9kYXRlLmNhbGwobnVsbCwgZmllbGQsIGluZm8pXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbdW5kZWZpbmVkLCBmaWVsZF07XG4gICAgfSxcbiAgICAvLyBIZWxwZXIgdG8gdGVzdCBpZiBhIGNoYXJhY3RlciBpcyBhIHNwYWNlIG9yIGEgbGluZSBkZWxpbWl0ZXJcbiAgICBfX2lzQ2hhclRyaW1hYmxlOiBmdW5jdGlvbihidWYsIHBvcyl7XG4gICAgICBjb25zdCBpc1RyaW0gPSAoYnVmLCBwb3MpID0+IHtcbiAgICAgICAgY29uc3Qge3RpbWNoYXJzfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxvb3AxOiBmb3IobGV0IGkgPSAwOyBpIDwgdGltY2hhcnMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgIGNvbnN0IHRpbWNoYXIgPSB0aW1jaGFyc1tpXTtcbiAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgdGltY2hhci5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICBpZih0aW1jaGFyW2pdICE9PSBidWZbcG9zK2pdKSBjb250aW51ZSBsb29wMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRpbWNoYXIubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfTtcbiAgICAgIHJldHVybiBpc1RyaW0oYnVmLCBwb3MpO1xuICAgIH0sXG4gICAgLy8gS2VlcCBpdCBpbiBjYXNlIHdlIGltcGxlbWVudCB0aGUgYGNhc3RfaW50YCBvcHRpb25cbiAgICAvLyBfX2lzSW50KHZhbHVlKXtcbiAgICAvLyAgIC8vIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHBhcnNlSW50KHZhbHVlKSlcbiAgICAvLyAgIC8vIHJldHVybiAhaXNOYU4oIHBhcnNlSW50KCBvYmogKSApO1xuICAgIC8vICAgcmV0dXJuIC9eKFxcLXxcXCspP1sxLTldWzAtOV0qJC8udGVzdCh2YWx1ZSlcbiAgICAvLyB9XG4gICAgX19pc0Zsb2F0OiBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICByZXR1cm4gKHZhbHVlIC0gcGFyc2VGbG9hdCh2YWx1ZSkgKyAxKSA+PSAwOyAvLyBCb3Jyb3dlZCBmcm9tIGpxdWVyeVxuICAgIH0sXG4gICAgX19jb21wYXJlQnl0ZXM6IGZ1bmN0aW9uKHNvdXJjZUJ1ZiwgdGFyZ2V0QnVmLCB0YXJnZXRQb3MsIGZpcnN0Qnl0ZSl7XG4gICAgICBpZihzb3VyY2VCdWZbMF0gIT09IGZpcnN0Qnl0ZSkgcmV0dXJuIDA7XG4gICAgICBjb25zdCBzb3VyY2VMZW5ndGggPSBzb3VyY2VCdWYubGVuZ3RoO1xuICAgICAgZm9yKGxldCBpID0gMTsgaSA8IHNvdXJjZUxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYoc291cmNlQnVmW2ldICE9PSB0YXJnZXRCdWZbdGFyZ2V0UG9zK2ldKSByZXR1cm4gMDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzb3VyY2VMZW5ndGg7XG4gICAgfSxcbiAgICBfX2lzRGVsaW1pdGVyOiBmdW5jdGlvbihidWYsIHBvcywgY2hyKXtcbiAgICAgIGNvbnN0IHtkZWxpbWl0ZXIsIGlnbm9yZV9sYXN0X2RlbGltaXRlcnN9ID0gdGhpcy5vcHRpb25zO1xuICAgICAgaWYoaWdub3JlX2xhc3RfZGVsaW1pdGVycyA9PT0gdHJ1ZSAmJiB0aGlzLnN0YXRlLnJlY29yZC5sZW5ndGggPT09IHRoaXMub3B0aW9ucy5jb2x1bW5zLmxlbmd0aCAtIDEpe1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1lbHNlIGlmKGlnbm9yZV9sYXN0X2RlbGltaXRlcnMgIT09IGZhbHNlICYmIHR5cGVvZiBpZ25vcmVfbGFzdF9kZWxpbWl0ZXJzID09PSAnbnVtYmVyJyAmJiB0aGlzLnN0YXRlLnJlY29yZC5sZW5ndGggPT09IGlnbm9yZV9sYXN0X2RlbGltaXRlcnMgLSAxKXtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgICBsb29wMTogZm9yKGxldCBpID0gMDsgaSA8IGRlbGltaXRlci5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IGRlbCA9IGRlbGltaXRlcltpXTtcbiAgICAgICAgaWYoZGVsWzBdID09PSBjaHIpe1xuICAgICAgICAgIGZvcihsZXQgaiA9IDE7IGogPCBkZWwubGVuZ3RoOyBqKyspe1xuICAgICAgICAgICAgaWYoZGVsW2pdICE9PSBidWZbcG9zK2pdKSBjb250aW51ZSBsb29wMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGRlbC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH0sXG4gICAgX19pc1JlY29yZERlbGltaXRlcjogZnVuY3Rpb24oY2hyLCBidWYsIHBvcyl7XG4gICAgICBjb25zdCB7cmVjb3JkX2RlbGltaXRlcn0gPSB0aGlzLm9wdGlvbnM7XG4gICAgICBjb25zdCByZWNvcmREZWxpbWl0ZXJMZW5ndGggPSByZWNvcmRfZGVsaW1pdGVyLmxlbmd0aDtcbiAgICAgIGxvb3AxOiBmb3IobGV0IGkgPSAwOyBpIDwgcmVjb3JkRGVsaW1pdGVyTGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCByZCA9IHJlY29yZF9kZWxpbWl0ZXJbaV07XG4gICAgICAgIGNvbnN0IHJkTGVuZ3RoID0gcmQubGVuZ3RoO1xuICAgICAgICBpZihyZFswXSAhPT0gY2hyKXtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGogPSAxOyBqIDwgcmRMZW5ndGg7IGorKyl7XG4gICAgICAgICAgaWYocmRbal0gIT09IGJ1Zltwb3Mral0pe1xuICAgICAgICAgICAgY29udGludWUgbG9vcDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZC5sZW5ndGg7XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9LFxuICAgIF9faXNFc2NhcGU6IGZ1bmN0aW9uKGJ1ZiwgcG9zLCBjaHIpe1xuICAgICAgY29uc3Qge2VzY2FwZX0gPSB0aGlzLm9wdGlvbnM7XG4gICAgICBpZihlc2NhcGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgIGNvbnN0IGwgPSBlc2NhcGUubGVuZ3RoO1xuICAgICAgaWYoZXNjYXBlWzBdID09PSBjaHIpe1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbDsgaSsrKXtcbiAgICAgICAgICBpZihlc2NhcGVbaV0gIT09IGJ1Zltwb3MraV0pe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIF9faXNRdW90ZTogZnVuY3Rpb24oYnVmLCBwb3Mpe1xuICAgICAgY29uc3Qge3F1b3RlfSA9IHRoaXMub3B0aW9ucztcbiAgICAgIGlmKHF1b3RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgICBjb25zdCBsID0gcXVvdGUubGVuZ3RoO1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGw7IGkrKyl7XG4gICAgICAgIGlmKHF1b3RlW2ldICE9PSBidWZbcG9zK2ldKXtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgX19hdXRvRGlzY292ZXJSZWNvcmREZWxpbWl0ZXI6IGZ1bmN0aW9uKGJ1ZiwgcG9zKXtcbiAgICAgIGNvbnN0IHsgZW5jb2RpbmcgfSA9IHRoaXMub3B0aW9ucztcbiAgICAgIC8vIE5vdGUsIHdlIGRvbid0IG5lZWQgdG8gY2FjaGUgdGhpcyBpbmZvcm1hdGlvbiBpbiBzdGF0ZSxcbiAgICAgIC8vIEl0IGlzIG9ubHkgY2FsbGVkIG9uIHRoZSBmaXJzdCBsaW5lIHVudGlsIHdlIGZpbmQgb3V0IGEgc3VpdGFibGVcbiAgICAgIC8vIHJlY29yZCBkZWxpbWl0ZXIuXG4gICAgICBjb25zdCByZHMgPSBbXG4gICAgICAgIC8vIEltcG9ydGFudCwgdGhlIHdpbmRvd3MgbGluZSBlbmRpbmcgbXVzdCBiZSBiZWZvcmUgbWFjIG9zIDlcbiAgICAgICAgQnVmZmVyLmZyb20oJ1xcclxcbicsIGVuY29kaW5nKSxcbiAgICAgICAgQnVmZmVyLmZyb20oJ1xcbicsIGVuY29kaW5nKSxcbiAgICAgICAgQnVmZmVyLmZyb20oJ1xccicsIGVuY29kaW5nKSxcbiAgICAgIF07XG4gICAgICBsb29wOiBmb3IobGV0IGkgPSAwOyBpIDwgcmRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgbCA9IHJkc1tpXS5sZW5ndGg7XG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBsOyBqKyspe1xuICAgICAgICAgIGlmKHJkc1tpXVtqXSAhPT0gYnVmW3BvcyArIGpdKXtcbiAgICAgICAgICAgIGNvbnRpbnVlIGxvb3A7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW9ucy5yZWNvcmRfZGVsaW1pdGVyLnB1c2gocmRzW2ldKTtcbiAgICAgICAgdGhpcy5zdGF0ZS5yZWNvcmREZWxpbWl0ZXJNYXhMZW5ndGggPSByZHNbaV0ubGVuZ3RoO1xuICAgICAgICByZXR1cm4gcmRzW2ldLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH0sXG4gICAgX19lcnJvcjogZnVuY3Rpb24obXNnKXtcbiAgICAgIGNvbnN0IHtlbmNvZGluZywgcmF3LCBza2lwX3JlY29yZHNfd2l0aF9lcnJvcn0gPSB0aGlzLm9wdGlvbnM7XG4gICAgICBjb25zdCBlcnIgPSB0eXBlb2YgbXNnID09PSAnc3RyaW5nJyA/IG5ldyBFcnJvcihtc2cpIDogbXNnO1xuICAgICAgaWYoc2tpcF9yZWNvcmRzX3dpdGhfZXJyb3Ipe1xuICAgICAgICB0aGlzLnN0YXRlLnJlY29yZEhhc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgaWYodGhpcy5vcHRpb25zLm9uX3NraXAgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLm9uX3NraXAoZXJyLCByYXcgPyB0aGlzLnN0YXRlLnJhd0J1ZmZlci50b1N0cmluZyhlbmNvZGluZykgOiB1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuZW1pdCgnc2tpcCcsIGVyciwgcmF3ID8gdGhpcy5zdGF0ZS5yYXdCdWZmZXIudG9TdHJpbmcoZW5jb2RpbmcpIDogdW5kZWZpbmVkKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1lbHNlIHtcbiAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgIH1cbiAgICB9LFxuICAgIF9faW5mb0RhdGFTZXQ6IGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi50aGlzLmluZm8sXG4gICAgICAgIGNvbHVtbnM6IHRoaXMub3B0aW9ucy5jb2x1bW5zXG4gICAgICB9O1xuICAgIH0sXG4gICAgX19pbmZvUmVjb3JkOiBmdW5jdGlvbigpe1xuICAgICAgY29uc3Qge2NvbHVtbnMsIHJhdywgZW5jb2Rpbmd9ID0gdGhpcy5vcHRpb25zO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4udGhpcy5fX2luZm9EYXRhU2V0KCksXG4gICAgICAgIGVycm9yOiB0aGlzLnN0YXRlLmVycm9yLFxuICAgICAgICBoZWFkZXI6IGNvbHVtbnMgPT09IHRydWUsXG4gICAgICAgIGluZGV4OiB0aGlzLnN0YXRlLnJlY29yZC5sZW5ndGgsXG4gICAgICAgIHJhdzogcmF3ID8gdGhpcy5zdGF0ZS5yYXdCdWZmZXIudG9TdHJpbmcoZW5jb2RpbmcpIDogdW5kZWZpbmVkXG4gICAgICB9O1xuICAgIH0sXG4gICAgX19pbmZvRmllbGQ6IGZ1bmN0aW9uKCl7XG4gICAgICBjb25zdCB7Y29sdW1uc30gPSB0aGlzLm9wdGlvbnM7XG4gICAgICBjb25zdCBpc0NvbHVtbnMgPSBBcnJheS5pc0FycmF5KGNvbHVtbnMpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4udGhpcy5fX2luZm9SZWNvcmQoKSxcbiAgICAgICAgY29sdW1uOiBpc0NvbHVtbnMgPT09IHRydWUgP1xuICAgICAgICAgIChjb2x1bW5zLmxlbmd0aCA+IHRoaXMuc3RhdGUucmVjb3JkLmxlbmd0aCA/XG4gICAgICAgICAgICBjb2x1bW5zW3RoaXMuc3RhdGUucmVjb3JkLmxlbmd0aF0ubmFtZSA6XG4gICAgICAgICAgICBudWxsXG4gICAgICAgICAgKSA6XG4gICAgICAgICAgdGhpcy5zdGF0ZS5yZWNvcmQubGVuZ3RoLFxuICAgICAgICBxdW90aW5nOiB0aGlzLnN0YXRlLndhc1F1b3RpbmcsXG4gICAgICB9O1xuICAgIH1cbiAgfTtcbn07XG5cbmNvbnN0IHBhcnNlID0gZnVuY3Rpb24oZGF0YSwgb3B0cz17fSl7XG4gIGlmKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJyl7XG4gICAgZGF0YSA9IEJ1ZmZlci5mcm9tKGRhdGEpO1xuICB9XG4gIGNvbnN0IHJlY29yZHMgPSBvcHRzICYmIG9wdHMub2JqbmFtZSA/IHt9IDogW107XG4gIGNvbnN0IHBhcnNlciA9IHRyYW5zZm9ybShvcHRzKTtcbiAgY29uc3QgcHVzaCA9IChyZWNvcmQpID0+IHtcbiAgICBpZihwYXJzZXIub3B0aW9ucy5vYmpuYW1lID09PSB1bmRlZmluZWQpXG4gICAgICByZWNvcmRzLnB1c2gocmVjb3JkKTtcbiAgICBlbHNlIHtcbiAgICAgIHJlY29yZHNbcmVjb3JkWzBdXSA9IHJlY29yZFsxXTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGNsb3NlID0gKCkgPT4ge307XG4gIGNvbnN0IGVycjEgPSBwYXJzZXIucGFyc2UoZGF0YSwgZmFsc2UsIHB1c2gsIGNsb3NlKTtcbiAgaWYoZXJyMSAhPT0gdW5kZWZpbmVkKSB0aHJvdyBlcnIxO1xuICBjb25zdCBlcnIyID0gcGFyc2VyLnBhcnNlKHVuZGVmaW5lZCwgdHJ1ZSwgcHVzaCwgY2xvc2UpO1xuICBpZihlcnIyICE9PSB1bmRlZmluZWQpIHRocm93IGVycjI7XG4gIHJldHVybiByZWNvcmRzO1xufTtcblxuZXhwb3J0IHsgQ3N2RXJyb3IsIHBhcnNlIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==