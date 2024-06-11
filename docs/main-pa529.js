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
AppVersion.VERSION = "983e191";


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
        file_saver_1.default.saveAs(blob, "statement.ofx");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qix3Q0FBd0M7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsZ0RBQWdEO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJCQUEyQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvdkJEO0FBQ0E7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFNBQVM7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLE9BQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFNBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBLDhCQUE4Qjs7QUFFOUI7QUFDQSwyQ0FBMkMsVUFBVTtBQUNyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUyxXQUFXOztBQUVwQjtBQUNBO0FBQ0E7QUFDQSxTQUFTLFdBQVc7O0FBRXBCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLFdBQVc7O0FBRXBCO0FBQ0E7QUFDQSxTQUFTLFVBQVU7O0FBRW5CO0FBQ0E7O0FBRUEsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3Qjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQjs7QUFFcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLGlCQUFpQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGVBQWU7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EseUJBQXlCLFFBQVE7QUFDakM7QUFDQSxzQkFBc0IsZUFBZTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLFNBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLG9CQUFvQixjQUFjO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3REFBd0QsT0FBTztBQUMvRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0RBQXdELE9BQU87QUFDL0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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QTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9kYXlqcy9kYXlqcy5taW4uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9maWxlLXNhdmVyL2Rpc3QvRmlsZVNhdmVyLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdmVyc2lvbi50cyIsIndlYnBhY2s6Ly8vLi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9vZngtc2VjdXJpdHktc3RvY2tzLnRzIiwid2VicGFjazovLy8uL3BhLTUyOS1jc3YtdHJhbnNmb3JtZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy94MmpzL3gyanMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3YtcGFyc2UvZGlzdC9lc20vc3luYy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6KHQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczp0fHxzZWxmKS5kYXlqcz1lKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9MWUzLGU9NmU0LG49MzZlNSxyPVwibWlsbGlzZWNvbmRcIixpPVwic2Vjb25kXCIscz1cIm1pbnV0ZVwiLHU9XCJob3VyXCIsYT1cImRheVwiLG89XCJ3ZWVrXCIsYz1cIm1vbnRoXCIsZj1cInF1YXJ0ZXJcIixoPVwieWVhclwiLGQ9XCJkYXRlXCIsbD1cIkludmFsaWQgRGF0ZVwiLCQ9L14oXFxkezR9KVstL10/KFxcZHsxLDJ9KT9bLS9dPyhcXGR7MCwyfSlbVHRcXHNdKihcXGR7MSwyfSk/Oj8oXFxkezEsMn0pPzo/KFxcZHsxLDJ9KT9bLjpdPyhcXGQrKT8kLyx5PS9cXFsoW15cXF1dKyldfFl7MSw0fXxNezEsNH18RHsxLDJ9fGR7MSw0fXxIezEsMn18aHsxLDJ9fGF8QXxtezEsMn18c3sxLDJ9fFp7MSwyfXxTU1MvZyxNPXtuYW1lOlwiZW5cIix3ZWVrZGF5czpcIlN1bmRheV9Nb25kYXlfVHVlc2RheV9XZWRuZXNkYXlfVGh1cnNkYXlfRnJpZGF5X1NhdHVyZGF5XCIuc3BsaXQoXCJfXCIpLG1vbnRoczpcIkphbnVhcnlfRmVicnVhcnlfTWFyY2hfQXByaWxfTWF5X0p1bmVfSnVseV9BdWd1c3RfU2VwdGVtYmVyX09jdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXJcIi5zcGxpdChcIl9cIiksb3JkaW5hbDpmdW5jdGlvbih0KXt2YXIgZT1bXCJ0aFwiLFwic3RcIixcIm5kXCIsXCJyZFwiXSxuPXQlMTAwO3JldHVyblwiW1wiK3QrKGVbKG4tMjApJTEwXXx8ZVtuXXx8ZVswXSkrXCJdXCJ9fSxtPWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1TdHJpbmcodCk7cmV0dXJuIXJ8fHIubGVuZ3RoPj1lP3Q6XCJcIitBcnJheShlKzEtci5sZW5ndGgpLmpvaW4obikrdH0sdj17czptLHo6ZnVuY3Rpb24odCl7dmFyIGU9LXQudXRjT2Zmc2V0KCksbj1NYXRoLmFicyhlKSxyPU1hdGguZmxvb3Iobi82MCksaT1uJTYwO3JldHVybihlPD0wP1wiK1wiOlwiLVwiKSttKHIsMixcIjBcIikrXCI6XCIrbShpLDIsXCIwXCIpfSxtOmZ1bmN0aW9uIHQoZSxuKXtpZihlLmRhdGUoKTxuLmRhdGUoKSlyZXR1cm4tdChuLGUpO3ZhciByPTEyKihuLnllYXIoKS1lLnllYXIoKSkrKG4ubW9udGgoKS1lLm1vbnRoKCkpLGk9ZS5jbG9uZSgpLmFkZChyLGMpLHM9bi1pPDAsdT1lLmNsb25lKCkuYWRkKHIrKHM/LTE6MSksYyk7cmV0dXJuKygtKHIrKG4taSkvKHM/aS11OnUtaSkpfHwwKX0sYTpmdW5jdGlvbih0KXtyZXR1cm4gdDwwP01hdGguY2VpbCh0KXx8MDpNYXRoLmZsb29yKHQpfSxwOmZ1bmN0aW9uKHQpe3JldHVybntNOmMseTpoLHc6byxkOmEsRDpkLGg6dSxtOnMsczppLG1zOnIsUTpmfVt0XXx8U3RyaW5nKHR8fFwiXCIpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvcyQvLFwiXCIpfSx1OmZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10fX0sZz1cImVuXCIsRD17fTtEW2ddPU07dmFyIHA9XCIkaXNEYXlqc09iamVjdFwiLFM9ZnVuY3Rpb24odCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBffHwhKCF0fHwhdFtwXSl9LHc9ZnVuY3Rpb24gdChlLG4scil7dmFyIGk7aWYoIWUpcmV0dXJuIGc7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpe3ZhciBzPWUudG9Mb3dlckNhc2UoKTtEW3NdJiYoaT1zKSxuJiYoRFtzXT1uLGk9cyk7dmFyIHU9ZS5zcGxpdChcIi1cIik7aWYoIWkmJnUubGVuZ3RoPjEpcmV0dXJuIHQodVswXSl9ZWxzZXt2YXIgYT1lLm5hbWU7RFthXT1lLGk9YX1yZXR1cm4hciYmaSYmKGc9aSksaXx8IXImJmd9LE89ZnVuY3Rpb24odCxlKXtpZihTKHQpKXJldHVybiB0LmNsb25lKCk7dmFyIG49XCJvYmplY3RcIj09dHlwZW9mIGU/ZTp7fTtyZXR1cm4gbi5kYXRlPXQsbi5hcmdzPWFyZ3VtZW50cyxuZXcgXyhuKX0sYj12O2IubD13LGIuaT1TLGIudz1mdW5jdGlvbih0LGUpe3JldHVybiBPKHQse2xvY2FsZTplLiRMLHV0YzplLiR1LHg6ZS4keCwkb2Zmc2V0OmUuJG9mZnNldH0pfTt2YXIgXz1mdW5jdGlvbigpe2Z1bmN0aW9uIE0odCl7dGhpcy4kTD13KHQubG9jYWxlLG51bGwsITApLHRoaXMucGFyc2UodCksdGhpcy4keD10aGlzLiR4fHx0Lnh8fHt9LHRoaXNbcF09ITB9dmFyIG09TS5wcm90b3R5cGU7cmV0dXJuIG0ucGFyc2U9ZnVuY3Rpb24odCl7dGhpcy4kZD1mdW5jdGlvbih0KXt2YXIgZT10LmRhdGUsbj10LnV0YztpZihudWxsPT09ZSlyZXR1cm4gbmV3IERhdGUoTmFOKTtpZihiLnUoZSkpcmV0dXJuIG5ldyBEYXRlO2lmKGUgaW5zdGFuY2VvZiBEYXRlKXJldHVybiBuZXcgRGF0ZShlKTtpZihcInN0cmluZ1wiPT10eXBlb2YgZSYmIS9aJC9pLnRlc3QoZSkpe3ZhciByPWUubWF0Y2goJCk7aWYocil7dmFyIGk9clsyXS0xfHwwLHM9KHJbN118fFwiMFwiKS5zdWJzdHJpbmcoMCwzKTtyZXR1cm4gbj9uZXcgRGF0ZShEYXRlLlVUQyhyWzFdLGksclszXXx8MSxyWzRdfHwwLHJbNV18fDAscls2XXx8MCxzKSk6bmV3IERhdGUoclsxXSxpLHJbM118fDEscls0XXx8MCxyWzVdfHwwLHJbNl18fDAscyl9fXJldHVybiBuZXcgRGF0ZShlKX0odCksdGhpcy5pbml0KCl9LG0uaW5pdD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuJGQ7dGhpcy4keT10LmdldEZ1bGxZZWFyKCksdGhpcy4kTT10LmdldE1vbnRoKCksdGhpcy4kRD10LmdldERhdGUoKSx0aGlzLiRXPXQuZ2V0RGF5KCksdGhpcy4kSD10LmdldEhvdXJzKCksdGhpcy4kbT10LmdldE1pbnV0ZXMoKSx0aGlzLiRzPXQuZ2V0U2Vjb25kcygpLHRoaXMuJG1zPXQuZ2V0TWlsbGlzZWNvbmRzKCl9LG0uJHV0aWxzPWZ1bmN0aW9uKCl7cmV0dXJuIGJ9LG0uaXNWYWxpZD1mdW5jdGlvbigpe3JldHVybiEodGhpcy4kZC50b1N0cmluZygpPT09bCl9LG0uaXNTYW1lPWZ1bmN0aW9uKHQsZSl7dmFyIG49Tyh0KTtyZXR1cm4gdGhpcy5zdGFydE9mKGUpPD1uJiZuPD10aGlzLmVuZE9mKGUpfSxtLmlzQWZ0ZXI9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTyh0KTx0aGlzLnN0YXJ0T2YoZSl9LG0uaXNCZWZvcmU9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5lbmRPZihlKTxPKHQpfSxtLiRnPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gYi51KHQpP3RoaXNbZV06dGhpcy5zZXQobix0KX0sbS51bml4PWZ1bmN0aW9uKCl7cmV0dXJuIE1hdGguZmxvb3IodGhpcy52YWx1ZU9mKCkvMWUzKX0sbS52YWx1ZU9mPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQuZ2V0VGltZSgpfSxtLnN0YXJ0T2Y9ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzLHI9ISFiLnUoZSl8fGUsZj1iLnAodCksbD1mdW5jdGlvbih0LGUpe3ZhciBpPWIudyhuLiR1P0RhdGUuVVRDKG4uJHksZSx0KTpuZXcgRGF0ZShuLiR5LGUsdCksbik7cmV0dXJuIHI/aTppLmVuZE9mKGEpfSwkPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGIudyhuLnRvRGF0ZSgpW3RdLmFwcGx5KG4udG9EYXRlKFwic1wiKSwocj9bMCwwLDAsMF06WzIzLDU5LDU5LDk5OV0pLnNsaWNlKGUpKSxuKX0seT10aGlzLiRXLE09dGhpcy4kTSxtPXRoaXMuJEQsdj1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIik7c3dpdGNoKGYpe2Nhc2UgaDpyZXR1cm4gcj9sKDEsMCk6bCgzMSwxMSk7Y2FzZSBjOnJldHVybiByP2woMSxNKTpsKDAsTSsxKTtjYXNlIG86dmFyIGc9dGhpcy4kbG9jYWxlKCkud2Vla1N0YXJ0fHwwLEQ9KHk8Zz95Kzc6eSktZztyZXR1cm4gbChyP20tRDptKyg2LUQpLE0pO2Nhc2UgYTpjYXNlIGQ6cmV0dXJuICQoditcIkhvdXJzXCIsMCk7Y2FzZSB1OnJldHVybiAkKHYrXCJNaW51dGVzXCIsMSk7Y2FzZSBzOnJldHVybiAkKHYrXCJTZWNvbmRzXCIsMik7Y2FzZSBpOnJldHVybiAkKHYrXCJNaWxsaXNlY29uZHNcIiwzKTtkZWZhdWx0OnJldHVybiB0aGlzLmNsb25lKCl9fSxtLmVuZE9mPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnN0YXJ0T2YodCwhMSl9LG0uJHNldD1mdW5jdGlvbih0LGUpe3ZhciBuLG89Yi5wKHQpLGY9XCJzZXRcIisodGhpcy4kdT9cIlVUQ1wiOlwiXCIpLGw9KG49e30sblthXT1mK1wiRGF0ZVwiLG5bZF09ZitcIkRhdGVcIixuW2NdPWYrXCJNb250aFwiLG5baF09ZitcIkZ1bGxZZWFyXCIsblt1XT1mK1wiSG91cnNcIixuW3NdPWYrXCJNaW51dGVzXCIsbltpXT1mK1wiU2Vjb25kc1wiLG5bcl09ZitcIk1pbGxpc2Vjb25kc1wiLG4pW29dLCQ9bz09PWE/dGhpcy4kRCsoZS10aGlzLiRXKTplO2lmKG89PT1jfHxvPT09aCl7dmFyIHk9dGhpcy5jbG9uZSgpLnNldChkLDEpO3kuJGRbbF0oJCkseS5pbml0KCksdGhpcy4kZD15LnNldChkLE1hdGgubWluKHRoaXMuJEQseS5kYXlzSW5Nb250aCgpKSkuJGR9ZWxzZSBsJiZ0aGlzLiRkW2xdKCQpO3JldHVybiB0aGlzLmluaXQoKSx0aGlzfSxtLnNldD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmNsb25lKCkuJHNldCh0LGUpfSxtLmdldD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpc1tiLnAodCldKCl9LG0uYWRkPWZ1bmN0aW9uKHIsZil7dmFyIGQsbD10aGlzO3I9TnVtYmVyKHIpO3ZhciAkPWIucChmKSx5PWZ1bmN0aW9uKHQpe3ZhciBlPU8obCk7cmV0dXJuIGIudyhlLmRhdGUoZS5kYXRlKCkrTWF0aC5yb3VuZCh0KnIpKSxsKX07aWYoJD09PWMpcmV0dXJuIHRoaXMuc2V0KGMsdGhpcy4kTStyKTtpZigkPT09aClyZXR1cm4gdGhpcy5zZXQoaCx0aGlzLiR5K3IpO2lmKCQ9PT1hKXJldHVybiB5KDEpO2lmKCQ9PT1vKXJldHVybiB5KDcpO3ZhciBNPShkPXt9LGRbc109ZSxkW3VdPW4sZFtpXT10LGQpWyRdfHwxLG09dGhpcy4kZC5nZXRUaW1lKCkrcipNO3JldHVybiBiLncobSx0aGlzKX0sbS5zdWJ0cmFjdD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmFkZCgtMSp0LGUpfSxtLmZvcm1hdD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLG49dGhpcy4kbG9jYWxlKCk7aWYoIXRoaXMuaXNWYWxpZCgpKXJldHVybiBuLmludmFsaWREYXRlfHxsO3ZhciByPXR8fFwiWVlZWS1NTS1ERFRISDptbTpzc1pcIixpPWIueih0aGlzKSxzPXRoaXMuJEgsdT10aGlzLiRtLGE9dGhpcy4kTSxvPW4ud2Vla2RheXMsYz1uLm1vbnRocyxmPW4ubWVyaWRpZW0saD1mdW5jdGlvbih0LG4saSxzKXtyZXR1cm4gdCYmKHRbbl18fHQoZSxyKSl8fGlbbl0uc2xpY2UoMCxzKX0sZD1mdW5jdGlvbih0KXtyZXR1cm4gYi5zKHMlMTJ8fDEyLHQsXCIwXCIpfSwkPWZ8fGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj10PDEyP1wiQU1cIjpcIlBNXCI7cmV0dXJuIG4/ci50b0xvd2VyQ2FzZSgpOnJ9O3JldHVybiByLnJlcGxhY2UoeSwoZnVuY3Rpb24odCxyKXtyZXR1cm4gcnx8ZnVuY3Rpb24odCl7c3dpdGNoKHQpe2Nhc2VcIllZXCI6cmV0dXJuIFN0cmluZyhlLiR5KS5zbGljZSgtMik7Y2FzZVwiWVlZWVwiOnJldHVybiBiLnMoZS4keSw0LFwiMFwiKTtjYXNlXCJNXCI6cmV0dXJuIGErMTtjYXNlXCJNTVwiOnJldHVybiBiLnMoYSsxLDIsXCIwXCIpO2Nhc2VcIk1NTVwiOnJldHVybiBoKG4ubW9udGhzU2hvcnQsYSxjLDMpO2Nhc2VcIk1NTU1cIjpyZXR1cm4gaChjLGEpO2Nhc2VcIkRcIjpyZXR1cm4gZS4kRDtjYXNlXCJERFwiOnJldHVybiBiLnMoZS4kRCwyLFwiMFwiKTtjYXNlXCJkXCI6cmV0dXJuIFN0cmluZyhlLiRXKTtjYXNlXCJkZFwiOnJldHVybiBoKG4ud2Vla2RheXNNaW4sZS4kVyxvLDIpO2Nhc2VcImRkZFwiOnJldHVybiBoKG4ud2Vla2RheXNTaG9ydCxlLiRXLG8sMyk7Y2FzZVwiZGRkZFwiOnJldHVybiBvW2UuJFddO2Nhc2VcIkhcIjpyZXR1cm4gU3RyaW5nKHMpO2Nhc2VcIkhIXCI6cmV0dXJuIGIucyhzLDIsXCIwXCIpO2Nhc2VcImhcIjpyZXR1cm4gZCgxKTtjYXNlXCJoaFwiOnJldHVybiBkKDIpO2Nhc2VcImFcIjpyZXR1cm4gJChzLHUsITApO2Nhc2VcIkFcIjpyZXR1cm4gJChzLHUsITEpO2Nhc2VcIm1cIjpyZXR1cm4gU3RyaW5nKHUpO2Nhc2VcIm1tXCI6cmV0dXJuIGIucyh1LDIsXCIwXCIpO2Nhc2VcInNcIjpyZXR1cm4gU3RyaW5nKGUuJHMpO2Nhc2VcInNzXCI6cmV0dXJuIGIucyhlLiRzLDIsXCIwXCIpO2Nhc2VcIlNTU1wiOnJldHVybiBiLnMoZS4kbXMsMyxcIjBcIik7Y2FzZVwiWlwiOnJldHVybiBpfXJldHVybiBudWxsfSh0KXx8aS5yZXBsYWNlKFwiOlwiLFwiXCIpfSkpfSxtLnV0Y09mZnNldD1mdW5jdGlvbigpe3JldHVybiAxNSotTWF0aC5yb3VuZCh0aGlzLiRkLmdldFRpbWV6b25lT2Zmc2V0KCkvMTUpfSxtLmRpZmY9ZnVuY3Rpb24ocixkLGwpe3ZhciAkLHk9dGhpcyxNPWIucChkKSxtPU8ociksdj0obS51dGNPZmZzZXQoKS10aGlzLnV0Y09mZnNldCgpKSplLGc9dGhpcy1tLEQ9ZnVuY3Rpb24oKXtyZXR1cm4gYi5tKHksbSl9O3N3aXRjaChNKXtjYXNlIGg6JD1EKCkvMTI7YnJlYWs7Y2FzZSBjOiQ9RCgpO2JyZWFrO2Nhc2UgZjokPUQoKS8zO2JyZWFrO2Nhc2UgbzokPShnLXYpLzYwNDhlNTticmVhaztjYXNlIGE6JD0oZy12KS84NjRlNTticmVhaztjYXNlIHU6JD1nL247YnJlYWs7Y2FzZSBzOiQ9Zy9lO2JyZWFrO2Nhc2UgaTokPWcvdDticmVhaztkZWZhdWx0OiQ9Z31yZXR1cm4gbD8kOmIuYSgkKX0sbS5kYXlzSW5Nb250aD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVuZE9mKGMpLiREfSxtLiRsb2NhbGU9ZnVuY3Rpb24oKXtyZXR1cm4gRFt0aGlzLiRMXX0sbS5sb2NhbGU9ZnVuY3Rpb24odCxlKXtpZighdClyZXR1cm4gdGhpcy4kTDt2YXIgbj10aGlzLmNsb25lKCkscj13KHQsZSwhMCk7cmV0dXJuIHImJihuLiRMPXIpLG59LG0uY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gYi53KHRoaXMuJGQsdGhpcyl9LG0udG9EYXRlPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBEYXRlKHRoaXMudmFsdWVPZigpKX0sbS50b0pTT049ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pc1ZhbGlkKCk/dGhpcy50b0lTT1N0cmluZygpOm51bGx9LG0udG9JU09TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b0lTT1N0cmluZygpfSxtLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQudG9VVENTdHJpbmcoKX0sTX0oKSxrPV8ucHJvdG90eXBlO3JldHVybiBPLnByb3RvdHlwZT1rLFtbXCIkbXNcIixyXSxbXCIkc1wiLGldLFtcIiRtXCIsc10sW1wiJEhcIix1XSxbXCIkV1wiLGFdLFtcIiRNXCIsY10sW1wiJHlcIixoXSxbXCIkRFwiLGRdXS5mb3JFYWNoKChmdW5jdGlvbih0KXtrW3RbMV1dPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLiRnKGUsdFswXSx0WzFdKX19KSksTy5leHRlbmQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC4kaXx8KHQoZSxfLE8pLHQuJGk9ITApLE99LE8ubG9jYWxlPXcsTy5pc0RheWpzPVMsTy51bml4PWZ1bmN0aW9uKHQpe3JldHVybiBPKDFlMyp0KX0sTy5lbj1EW2ddLE8uTHM9RCxPLnA9e30sT30pKTsiLCIoZnVuY3Rpb24oYSxiKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLGIpO2Vsc2UgaWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGV4cG9ydHMpYigpO2Vsc2V7YigpLGEuRmlsZVNhdmVyPXtleHBvcnRzOnt9fS5leHBvcnRzfX0pKHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGEsYil7cmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGI/Yj17YXV0b0JvbTohMX06XCJvYmplY3RcIiE9dHlwZW9mIGImJihjb25zb2xlLndhcm4oXCJEZXByZWNhdGVkOiBFeHBlY3RlZCB0aGlyZCBhcmd1bWVudCB0byBiZSBhIG9iamVjdFwiKSxiPXthdXRvQm9tOiFifSksYi5hdXRvQm9tJiYvXlxccyooPzp0ZXh0XFwvXFxTKnxhcHBsaWNhdGlvblxcL3htbHxcXFMqXFwvXFxTKlxcK3htbClcXHMqOy4qY2hhcnNldFxccyo9XFxzKnV0Zi04L2kudGVzdChhLnR5cGUpP25ldyBCbG9iKFtcIlxcdUZFRkZcIixhXSx7dHlwZTphLnR5cGV9KTphfWZ1bmN0aW9uIGMoYSxiLGMpe3ZhciBkPW5ldyBYTUxIdHRwUmVxdWVzdDtkLm9wZW4oXCJHRVRcIixhKSxkLnJlc3BvbnNlVHlwZT1cImJsb2JcIixkLm9ubG9hZD1mdW5jdGlvbigpe2coZC5yZXNwb25zZSxiLGMpfSxkLm9uZXJyb3I9ZnVuY3Rpb24oKXtjb25zb2xlLmVycm9yKFwiY291bGQgbm90IGRvd25sb2FkIGZpbGVcIil9LGQuc2VuZCgpfWZ1bmN0aW9uIGQoYSl7dmFyIGI9bmV3IFhNTEh0dHBSZXF1ZXN0O2Iub3BlbihcIkhFQURcIixhLCExKTt0cnl7Yi5zZW5kKCl9Y2F0Y2goYSl7fXJldHVybiAyMDA8PWIuc3RhdHVzJiYyOTk+PWIuc3RhdHVzfWZ1bmN0aW9uIGUoYSl7dHJ5e2EuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcImNsaWNrXCIpKX1jYXRjaChjKXt2YXIgYj1kb2N1bWVudC5jcmVhdGVFdmVudChcIk1vdXNlRXZlbnRzXCIpO2IuaW5pdE1vdXNlRXZlbnQoXCJjbGlja1wiLCEwLCEwLHdpbmRvdywwLDAsMCw4MCwyMCwhMSwhMSwhMSwhMSwwLG51bGwpLGEuZGlzcGF0Y2hFdmVudChiKX19dmFyIGY9XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmd2luZG93LndpbmRvdz09PXdpbmRvdz93aW5kb3c6XCJvYmplY3RcIj09dHlwZW9mIHNlbGYmJnNlbGYuc2VsZj09PXNlbGY/c2VsZjpcIm9iamVjdFwiPT10eXBlb2YgZ2xvYmFsJiZnbG9iYWwuZ2xvYmFsPT09Z2xvYmFsP2dsb2JhbDp2b2lkIDAsYT1mLm5hdmlnYXRvciYmL01hY2ludG9zaC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSYmL0FwcGxlV2ViS2l0Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpJiYhL1NhZmFyaS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxnPWYuc2F2ZUFzfHwoXCJvYmplY3RcIiE9dHlwZW9mIHdpbmRvd3x8d2luZG93IT09Zj9mdW5jdGlvbigpe306XCJkb3dubG9hZFwiaW4gSFRNTEFuY2hvckVsZW1lbnQucHJvdG90eXBlJiYhYT9mdW5jdGlvbihiLGcsaCl7dmFyIGk9Zi5VUkx8fGYud2Via2l0VVJMLGo9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7Zz1nfHxiLm5hbWV8fFwiZG93bmxvYWRcIixqLmRvd25sb2FkPWcsai5yZWw9XCJub29wZW5lclwiLFwic3RyaW5nXCI9PXR5cGVvZiBiPyhqLmhyZWY9YixqLm9yaWdpbj09PWxvY2F0aW9uLm9yaWdpbj9lKGopOmQoai5ocmVmKT9jKGIsZyxoKTplKGosai50YXJnZXQ9XCJfYmxhbmtcIikpOihqLmhyZWY9aS5jcmVhdGVPYmplY3RVUkwoYiksc2V0VGltZW91dChmdW5jdGlvbigpe2kucmV2b2tlT2JqZWN0VVJMKGouaHJlZil9LDRFNCksc2V0VGltZW91dChmdW5jdGlvbigpe2Uoail9LDApKX06XCJtc1NhdmVPck9wZW5CbG9iXCJpbiBuYXZpZ2F0b3I/ZnVuY3Rpb24oZixnLGgpe2lmKGc9Z3x8Zi5uYW1lfHxcImRvd25sb2FkXCIsXCJzdHJpbmdcIiE9dHlwZW9mIGYpbmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IoYihmLGgpLGcpO2Vsc2UgaWYoZChmKSljKGYsZyxoKTtlbHNle3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2kuaHJlZj1mLGkudGFyZ2V0PVwiX2JsYW5rXCIsc2V0VGltZW91dChmdW5jdGlvbigpe2UoaSl9KX19OmZ1bmN0aW9uKGIsZCxlLGcpe2lmKGc9Z3x8b3BlbihcIlwiLFwiX2JsYW5rXCIpLGcmJihnLmRvY3VtZW50LnRpdGxlPWcuZG9jdW1lbnQuYm9keS5pbm5lclRleHQ9XCJkb3dubG9hZGluZy4uLlwiKSxcInN0cmluZ1wiPT10eXBlb2YgYilyZXR1cm4gYyhiLGQsZSk7dmFyIGg9XCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIj09PWIudHlwZSxpPS9jb25zdHJ1Y3Rvci9pLnRlc3QoZi5IVE1MRWxlbWVudCl8fGYuc2FmYXJpLGo9L0NyaU9TXFwvW1xcZF0rLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO2lmKChqfHxoJiZpfHxhKSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIEZpbGVSZWFkZXIpe3ZhciBrPW5ldyBGaWxlUmVhZGVyO2sub25sb2FkZW5kPWZ1bmN0aW9uKCl7dmFyIGE9ay5yZXN1bHQ7YT1qP2E6YS5yZXBsYWNlKC9eZGF0YTpbXjtdKjsvLFwiZGF0YTphdHRhY2htZW50L2ZpbGU7XCIpLGc/Zy5sb2NhdGlvbi5ocmVmPWE6bG9jYXRpb249YSxnPW51bGx9LGsucmVhZEFzRGF0YVVSTChiKX1lbHNle3ZhciBsPWYuVVJMfHxmLndlYmtpdFVSTCxtPWwuY3JlYXRlT2JqZWN0VVJMKGIpO2c/Zy5sb2NhdGlvbj1tOmxvY2F0aW9uLmhyZWY9bSxnPW51bGwsc2V0VGltZW91dChmdW5jdGlvbigpe2wucmV2b2tlT2JqZWN0VVJMKG0pfSw0RTQpfX0pO2Yuc2F2ZUFzPWcuc2F2ZUFzPWcsXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmKG1vZHVsZS5leHBvcnRzPWcpfSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZpbGVTYXZlci5taW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFwcFZlcnNpb24gPSB2b2lkIDA7XG5jbGFzcyBBcHBWZXJzaW9uIHtcbn1cbmV4cG9ydHMuQXBwVmVyc2lvbiA9IEFwcFZlcnNpb247XG5BcHBWZXJzaW9uLlZFUlNJT04gPSBcIjk4M2UxOTFcIjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QYTUyOUNzdlRvT2Z4Q29udmVydGVyID0gdm9pZCAwO1xuY29uc3QgcGFfNTI5X2Nzdl90cmFuc2Zvcm1lcl8xID0gcmVxdWlyZShcIi4vcGEtNTI5LWNzdi10cmFuc2Zvcm1lclwiKTtcbmNvbnN0IG9meF9zZWN1cml0eV9zdG9ja3NfMSA9IHJlcXVpcmUoXCIuL29meC1zZWN1cml0eS1zdG9ja3NcIik7XG5jb25zdCBmaWxlX3NhdmVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImZpbGUtc2F2ZXJcIikpO1xuY29uc3QgYXBwX3ZlcnNpb25fMSA9IHJlcXVpcmUoXCIuL2FwcC12ZXJzaW9uXCIpO1xuY29uc29sZS5sb2coXCJBcHAgdmVyc2lvbjogXCIgKyBhcHBfdmVyc2lvbl8xLkFwcFZlcnNpb24uVkVSU0lPTik7XG5jbGFzcyBQYTUyOUNzdlRvT2Z4Q29udmVydGVyIHtcbiAgICBzdGF0aWMgY29udmVydENzdlRvT2Z4KGNzdikge1xuICAgICAgICBsZXQgY3JlYXRlRmFrZSA9IHRoaXMuY3JlYXRlRmFrZVRyYW5zYWN0aW9ucygpO1xuICAgICAgICBsZXQgY29uZmlnID0gcGFfNTI5X2Nzdl90cmFuc2Zvcm1lcl8xLlBhNTI5Q3N2VHJhbnNmb3JtZXIuY29udmVydENzdlRvT2Z4Q3JlYXRpb25EdG8oY3N2LCBjcmVhdGVGYWtlKTtcbiAgICAgICAgbGV0IG9meCA9IG9meF9zZWN1cml0eV9zdG9ja3NfMS5PZnhTZWN1cml0eUdlbmVyYXRvci5nZW5lcmF0ZU9meChjb25maWcpO1xuICAgICAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFtvZnhdLCB7IHR5cGU6IFwidGV4dC9wbGFpbjtjaGFyc2V0PXV0Zi04XCIgfSk7XG4gICAgICAgIGZpbGVfc2F2ZXJfMS5kZWZhdWx0LnNhdmVBcyhibG9iLCBcInN0YXRlbWVudC5vZnhcIik7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGVGYWtlVHJhbnNhY3Rpb25zKCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zha2UtdHJhbnNhY3Rpb25zJykuY2hlY2tlZDtcbiAgICB9XG59XG5leHBvcnRzLlBhNTI5Q3N2VG9PZnhDb252ZXJ0ZXIgPSBQYTUyOUNzdlRvT2Z4Q29udmVydGVyO1xuY29uc3QgZHJvcEFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcC1hcmVhJyk7XG5kcm9wQXJlYS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZHJvcEFyZWEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNlMGUwZTAnO1xufSk7XG5kcm9wQXJlYS5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCAoKSA9PiB7XG4gICAgZHJvcEFyZWEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmOWY5ZjknO1xufSk7XG5kcm9wQXJlYS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBkcm9wQXJlYS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2Y5ZjlmOSc7XG4gICAgY29uc3QgZmlsZXMgPSBldmVudC5kYXRhVHJhbnNmZXIuZmlsZXM7XG4gICAgaWYgKGZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGZpbGVzWzBdO1xuICAgICAgICBjb25zb2xlLmxvZyhgRmlsZSBuYW1lOiAke2ZpbGUubmFtZX1gKTtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgUGE1MjlDc3ZUb09meENvbnZlcnRlci5jb252ZXJ0Q3N2VG9PZngoY29udGVudC50b1N0cmluZygpKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIHJlYWRpbmcgdGhlIGZpbGVcIiwgZSk7XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xuICAgIH1cbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk9meFNlY3VyaXR5R2VuZXJhdG9yID0gdm9pZCAwO1xuY29uc3QgZGF5anNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZGF5anNcIikpO1xuY29uc3QgeDJqc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ4MmpzXCIpKTtcbi8vIGltcG9ydCB4bWxGb3JtYXQgZnJvbSBcInhtbC1mb3JtYXR0ZXJcIlxuY2xhc3MgT2Z4U2VjdXJpdHlHZW5lcmF0b3Ige1xuICAgIHN0YXRpYyBnZW5lcmF0ZU9meChjb25maWcpIHtcbiAgICAgICAgdGhpcy5jaGVja1RyYW5zYWN0aW9uU2lnbnMoY29uZmlnLm11dHVhbEZ1bmRUcmFuc2FjdGlvbnMpO1xuICAgICAgICB2YXIgeDJqcyA9IG5ldyB4MmpzXzEuZGVmYXVsdCh7IHNlbGZDbG9zaW5nRWxlbWVudHM6IGZhbHNlIH0pO1xuICAgICAgICBsZXQganMgPSB4MmpzLnhtbDJqcyhPRlhfU1RPQ0tfVEVNUExBVEUpO1xuICAgICAgICBqcy5PRlguSU5WU1RNVE1TR1NSU1YxLklOVlNUTVRUUk5SUy5JTlZTVE1UUlMuSU5WQUNDVEZST00uQUNDVElEID0gY29uZmlnLmFjY291bnRJZDtcbiAgICAgICAganMuT0ZYLklOVlNUTVRNU0dTUlNWMS5JTlZTVE1UVFJOUlMuSU5WU1RNVFJTLklOVkFDQ1RGUk9NLkJST0tFUklEID0gY29uZmlnLmJyb2tlcklkO1xuICAgICAgICBqcy5PRlguSU5WU1RNVE1TR1NSU1YxLklOVlNUTVRUUk5SUy5JTlZTVE1UUlMuRFRBU09GID0gdGhpcy5mb3JtYXREYXRlKGNvbmZpZy51cGRhdGVEYXRlVGltZSk7XG4gICAgICAgIGpzLk9GWC5JTlZTVE1UTVNHU1JTVjEuSU5WU1RNVFRSTlJTLklOVlNUTVRSUy5JTlZUUkFOTElTVC5EVFNUQVJUID0gdGhpcy5mb3JtYXREYXRlKGNvbmZpZy5zdGFydERhdGUpO1xuICAgICAgICBqcy5PRlguSU5WU1RNVE1TR1NSU1YxLklOVlNUTVRUUk5SUy5JTlZTVE1UUlMuSU5WVFJBTkxJU1QuRFRFTkQgPSB0aGlzLmZvcm1hdERhdGUoY29uZmlnLmVuZERhdGUpO1xuICAgICAgICBsZXQgaW52ZXN0bWVudFRyYW5MaXN0ID0ganMuT0ZYLklOVlNUTVRNU0dTUlNWMS5JTlZTVE1UVFJOUlMuSU5WU1RNVFJTLklOVlRSQU5MSVNUO1xuICAgICAgICBpbnZlc3RtZW50VHJhbkxpc3QuQlVZTUYgPSBbXTtcbiAgICAgICAgaW52ZXN0bWVudFRyYW5MaXN0LlNFTExNRiA9IFtdO1xuICAgICAgICBjb25maWcubXV0dWFsRnVuZFRyYW5zYWN0aW9ucy5mb3JFYWNoKHNpbmdsZVRyYW4gPT4ge1xuICAgICAgICAgICAgaWYgKHNpbmdsZVRyYW4uc2hhcmVzID49IDApXG4gICAgICAgICAgICAgICAgaW52ZXN0bWVudFRyYW5MaXN0LkJVWU1GLnB1c2godGhpcy5jcmVhdGVCdXlUcmFuc2FjdGlvbihzaW5nbGVUcmFuKSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgaW52ZXN0bWVudFRyYW5MaXN0LlNFTExNRi5wdXNoKHRoaXMuY3JlYXRlU2VsbFRyYW5zYWN0aW9uKHNpbmdsZVRyYW4pKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGpzLk9GWC5TRUNMSVNUTVNHU1JTVjEuU0VDTElTVC5NRklORk8gPSBjb25maWcuc2VjdXJpdHlQcmljZUluZm8ubWFwKHNpbmdsZVNlY3VyaXR5ID0+IHtcbiAgICAgICAgICAgIGxldCBtZkluZm8gPSB7XG4gICAgICAgICAgICAgICAgU0VDSU5GTzogdGhpcy5jb252ZXJ0U2VjdXJpdHlJbmZvKHNpbmdsZVNlY3VyaXR5KSxcbiAgICAgICAgICAgICAgICBNRlRZUEU6IFwiT1BFTkVORFwiLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBtZkluZm87XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaW52ZXN0bWVudFRyYW5MaXN0LkJVWU1GLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIGRlbGV0ZSBpbnZlc3RtZW50VHJhbkxpc3QuQlVZTUY7XG4gICAgICAgIGlmIChpbnZlc3RtZW50VHJhbkxpc3QuU0VMTE1GLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIGRlbGV0ZSBpbnZlc3RtZW50VHJhbkxpc3QuU0VMTE1GO1xuICAgICAgICBpZiAoanMuT0ZYLlNFQ0xJU1RNU0dTUlNWMS5TRUNMSVNULk1GSU5GTy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICBkZWxldGUganMuT0ZYLlNFQ0xJU1RNU0dTUlNWMS5TRUNMSVNULk1GSU5GTztcbiAgICAgICAgdmFyIHhtbEJvZHkgPSB4MmpzLmpzMnhtbChqcyk7XG4gICAgICAgIHZhciBmaWxlVGV4dCA9IE9GWF9TVE9DS19IRUFERVIgKyB4bWxCb2R5O1xuICAgICAgICBmaWxlVGV4dCA9IGZpbGVUZXh0LnJlcGxhY2UoLyYjeDI3Oy9nLCBcIidcIik7XG4gICAgICAgIGZpbGVUZXh0ID0gZmlsZVRleHQucmVwbGFjZSgvJmFwb3M7L2csIFwiJ1wiKTtcbiAgICAgICAgZmlsZVRleHQgPSBmaWxlVGV4dC5yZXBsYWNlKC8mYW1wOy9nLCBcIiZcIik7XG4gICAgICAgIGZpbGVUZXh0ID0gZmlsZVRleHQucmVwbGFjZSgvJnF1b3Q7L2csICdcIicpO1xuICAgICAgICByZXR1cm4gZmlsZVRleHQ7XG4gICAgICAgIC8vIHJldHVybiB4bWxGb3JtYXQoZmlsZVRleHQsIHsgaW5kZW50YXRpb246IFwiICBcIiB9KTtcbiAgICB9XG4gICAgc3RhdGljIGNoZWNrVHJhbnNhY3Rpb25TaWducyhtdXR1YWxGdW5kVHJhbnNhY3Rpb25zKSB7XG4gICAgICAgIGxldCBpbmNvcnJlY3RTaWduID0gbXV0dWFsRnVuZFRyYW5zYWN0aW9ucy5maW5kKHNpbmdsZSA9PiBzaW5nbGUuZG9sbGFyVG90YWwgKiBzaW5nbGUuc2hhcmVzID4gMCk7XG4gICAgICAgIGlmIChpbmNvcnJlY3RTaWduKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW5jb3JyZWN0IHNpZ24gb24gc2VjdXJpdHkgdHJhbnNhY3Rpb24uICBCdXkgdHJhbnNhY3Rpb25zIHNob3VsZCBoYXZlIHBvc2l0aXZlIHNoYXJlcywgbmVnYXRpdmUgZG9sbGFycy4gU2FsZXMgYXJlIG9wcG9zaXRlLlwiKTtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZUJ1eVRyYW5zYWN0aW9uKHNpbmdsZVRyYW4pIHtcbiAgICAgICAgbGV0IGJ1eSA9IHtcbiAgICAgICAgICAgIElOVkJVWTogdGhpcy5jb252ZXJ0VHJhbnNhY3Rpb24oc2luZ2xlVHJhbiksXG4gICAgICAgICAgICBCVVlUWVBFOiBcIkJVWVwiLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYnV5O1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlU2VsbFRyYW5zYWN0aW9uKHNpbmdsZVRyYW4pIHtcbiAgICAgICAgbGV0IHNlbGwgPSB7XG4gICAgICAgICAgICBJTlZTRUxMOiB0aGlzLmNvbnZlcnRUcmFuc2FjdGlvbihzaW5nbGVUcmFuKSxcbiAgICAgICAgICAgIFNFTExUWVBFOiBcIlNFTExcIixcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHNlbGw7XG4gICAgfVxuICAgIHN0YXRpYyBjb252ZXJ0U2VjdXJpdHlJbmZvKGNyZWF0aW9uRHRvKSB7XG4gICAgICAgIGxldCBvZnhJbmZvID0ge1xuICAgICAgICAgICAgRklJRDogY3JlYXRpb25EdG8uZmlpZCxcbiAgICAgICAgICAgIFNFQ0lEOiB7XG4gICAgICAgICAgICAgICAgVU5JUVVFSUQ6IGNyZWF0aW9uRHRvLnNlY3VyaXR5VWlkLFxuICAgICAgICAgICAgICAgIFVOSVFVRUlEVFlQRTogXCJGVU5EX05BTUVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBTRUNOQU1FOiBjcmVhdGlvbkR0by5zZWN1cml0eU5hbWUsXG4gICAgICAgICAgICBUSUNLRVI6IGNyZWF0aW9uRHRvLnRpY2tlcixcbiAgICAgICAgICAgIFVOSVRQUklDRTogY3JlYXRpb25EdG8ucHJpY2VQZXJTaGFyZSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG9meEluZm87XG4gICAgfVxuICAgIHN0YXRpYyBjb252ZXJ0VHJhbnNhY3Rpb24oY29uZmlnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBJTlZUUkFOOiB7XG4gICAgICAgICAgICAgICAgRFRTRVRUTEU6IHRoaXMuZm9ybWF0RGF0ZShjb25maWcudHJhZGVEYXRlKSxcbiAgICAgICAgICAgICAgICBEVFRSQURFOiB0aGlzLmZvcm1hdERhdGUoY29uZmlnLnRyYWRlRGF0ZSksXG4gICAgICAgICAgICAgICAgRklUSUQ6IGNvbmZpZy50cmFuc2FjdGlvbklkLFxuICAgICAgICAgICAgICAgIE1FTU86IGNvbmZpZy5tZW1vLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFNFQ0lEOiB7XG4gICAgICAgICAgICAgICAgVU5JUVVFSUQ6IGNvbmZpZy5zZWN1cml0eUlkLFxuICAgICAgICAgICAgICAgIFVOSVFVRUlEVFlQRTogXCJGVU5EX05BTUVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBTVUJBQ0NURlVORDogXCJDQVNIXCIsXG4gICAgICAgICAgICBTVUJBQ0NUU0VDOiBcIkNBU0hcIixcbiAgICAgICAgICAgIFRPVEFMOiBjb25maWcuZG9sbGFyVG90YWwsXG4gICAgICAgICAgICBVTklUUFJJQ0U6IGNvbmZpZy5wcmljZVBlclNoYXJlLFxuICAgICAgICAgICAgVU5JVFM6IGNvbmZpZy5zaGFyZXMsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHN0YXRpYyBmb3JtYXREYXRlKGRhdGUpIHtcbiAgICAgICAgcmV0dXJuICgwLCBkYXlqc18xLmRlZmF1bHQpKGRhdGUpLmZvcm1hdChcIllZWVlNTUREXCIpO1xuICAgIH1cbn1cbmV4cG9ydHMuT2Z4U2VjdXJpdHlHZW5lcmF0b3IgPSBPZnhTZWN1cml0eUdlbmVyYXRvcjtcbmNvbnN0IE9GWF9TVE9DS19IRUFERVIgPSBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XG48P09GWCBPRlhIRUFERVI9XCIyMDBcIiBWRVJTSU9OPVwiMjIwXCIgU0VDVVJJVFk9XCJOT05FXCIgT0xERklMRVVJRD1cIk5PTkVcIiBORVdGSUxFVUlEPVwiTk9ORVwiPz5cbmA7XG5jb25zdCBPRlhfU1RPQ0tfVEVNUExBVEUgPSBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XG48P09GWCBPRlhIRUFERVI9XCIyMDBcIiBWRVJTSU9OPVwiMjIwXCIgU0VDVVJJVFk9XCJOT05FXCIgT0xERklMRVVJRD1cIk5PTkVcIiBORVdGSUxFVUlEPVwiTk9ORVwiPz5cbjxPRlg+XG4gIDxJTlZTVE1UTVNHU1JTVjE+XG4gICAgPElOVlNUTVRUUk5SUz5cbiAgICAgIDxUUk5VSUQ+MDwvVFJOVUlEPlxuICAgICAgPFNUQVRVUz5cbiAgICAgICAgPENPREU+MDwvQ09ERT5cbiAgICAgICAgPFNFVkVSSVRZPklORk88L1NFVkVSSVRZPlxuICAgICAgPC9TVEFUVVM+XG4gICAgICA8SU5WU1RNVFJTPlxuICAgICAgICA8RFRBU09GPjwvRFRBU09GPlxuICAgICAgICA8Q1VSREVGPlVTRDwvQ1VSREVGPlxuICAgICAgICA8SU5WQUNDVEZST00+XG4gICAgICAgICAgPEJST0tFUklEPjwvQlJPS0VSSUQ+XG4gICAgICAgICAgPEFDQ1RJRD48L0FDQ1RJRD5cbiAgICAgICAgPC9JTlZBQ0NURlJPTT5cbiAgICAgICAgPElOVlRSQU5MSVNUPlxuICAgICAgICAgIDxEVFNUQVJUPjwvRFRTVEFSVD5cbiAgICAgICAgICA8RFRFTkQ+PC9EVEVORD5cbiAgICAgICAgPC9JTlZUUkFOTElTVD5cbiAgICAgIDwvSU5WU1RNVFJTPlxuICAgIDwvSU5WU1RNVFRSTlJTPlxuICA8L0lOVlNUTVRNU0dTUlNWMT5cbiAgPFNFQ0xJU1RNU0dTUlNWMT5cbiAgICA8U0VDTElTVD5cbiAgICA8L1NFQ0xJU1Q+XG4gIDwvU0VDTElTVE1TR1NSU1YxPlxuPC9PRlg+XG5gO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBhNTI5Q3N2VHJhbnNmb3JtZXIgPSB2b2lkIDA7XG5jb25zdCBzeW5jXzEgPSByZXF1aXJlKFwiY3N2LXBhcnNlL2Jyb3dzZXIvZXNtL3N5bmNcIik7XG5jb25zdCBkYXlqc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJkYXlqc1wiKSk7XG5jbGFzcyBQYTUyOUNzdlRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjc3ZSYXdcbiAgICAgKiBAcGFyYW0gY3JlYXRlRmFrZVxuICAgICAqIGZvciBlYWNoIGhvbGRpbmcsIGNyZWF0ZSBhbiBleHRyYSBidXkgYW5kIG9mZnNldHRpbmcgc2FsZSBhdCB0aGUgY3VycmVudFxuICAgICAqIG1hcmtldCBwcmljZXMuICB0aGlzIGFsbG93cyBzb21lIHBlcnNvbmFsIGZpbmFuY2VzIHNvZnR3YXJlIHByb2dyYW1zIHRvIHVwZGF0ZVxuICAgICAqIHRoZWlyIGN1cnJlbnQgcHJpY2VzIGZvciBzZWN1cml0aWVzIHdoaWNoIGFyZW4ndCBwdWJsaWNseSBsaXN0ZWQuXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBzdGF0aWMgY29udmVydENzdlRvT2Z4Q3JlYXRpb25EdG8oY3N2UmF3LCBjcmVhdGVGYWtlKSB7XG4gICAgICAgIGxldCBzcGxpdHMgPSBjc3ZSYXcucmVwbGFjZSgvXFxuezMsfS9nLCBcIlxcblxcblwiKS5zcGxpdChcIlxcblxcblwiKTtcbiAgICAgICAgbGV0IGhvbGRpbmdzU2VjdGlvbk9mQ3N2ID0gc3BsaXRzWzBdO1xuICAgICAgICBsZXQgdHJhbnNhY3Rpb25zU2VjdGlvbk9mQ3N2ID0gc3BsaXRzWzFdO1xuICAgICAgICBsZXQgaG9sZGluZ3MgPSB0aGlzLmdldENzdkhvbGRpbmdzKGhvbGRpbmdzU2VjdGlvbk9mQ3N2KTtcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9ucyA9IHRoaXMuZ2V0VHJhbnNhY3Rpb25zKHRyYW5zYWN0aW9uc1NlY3Rpb25PZkNzdik7XG4gICAgICAgIGxldCBhY2NvdW50TnVtYmVycyA9IG5ldyBTZXQoKTtcbiAgICAgICAgbGV0IGR0b1RyYW5zYWN0aW9ucyA9IFtdO1xuICAgICAgICB0cmFuc2FjdGlvbnMuZm9yRWFjaChzaW5nbGVUcmFuID0+IHtcbiAgICAgICAgICAgIGFjY291bnROdW1iZXJzLmFkZChzaW5nbGVUcmFuLmFjY291bnROdW1iZXIpO1xuICAgICAgICAgICAgZHRvVHJhbnNhY3Rpb25zLnB1c2godGhpcy5jcmVhdGVUcmFuc2FjdGlvbnMoc2luZ2xlVHJhbikpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNyZWF0ZUZha2UpIHtcbiAgICAgICAgICAgIGhvbGRpbmdzLmZvckVhY2goc2luZ2xlSG9sZGluZyA9PiB7XG4gICAgICAgICAgICAgICAgZHRvVHJhbnNhY3Rpb25zLnB1c2godGhpcy5jcmVhdGVGYWtlVHJhZGUoc2luZ2xlSG9sZGluZywgdHJ1ZSkpO1xuICAgICAgICAgICAgICAgIGR0b1RyYW5zYWN0aW9ucy5wdXNoKHRoaXMuY3JlYXRlRmFrZVRyYWRlKHNpbmdsZUhvbGRpbmcsIGZhbHNlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2VjdXJpdHlJbmZvID0gaG9sZGluZ3MubWFwKHNpbmdsZUhvbGRpbmcgPT4ge1xuICAgICAgICAgICAgbGV0IGhvbGRpbmcgPSB7XG4gICAgICAgICAgICAgICAgZmlpZDogXCJQQTUyOVwiLFxuICAgICAgICAgICAgICAgIHNlY3VyaXR5VWlkOiB0aGlzLmdldFNlY3VyaXR5SWRGcm9tSG9sZGluZyhzaW5nbGVIb2xkaW5nKSxcbiAgICAgICAgICAgICAgICBzZWN1cml0eU5hbWU6IFwiUEE1MjkgLSBcIiArIHNpbmdsZUhvbGRpbmcuZnVuZE5hbWUsXG4gICAgICAgICAgICAgICAgdGlja2VyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHByaWNlUGVyU2hhcmU6IHNpbmdsZUhvbGRpbmcucHJpY2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGhvbGRpbmc7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoYWNjb3VudE51bWJlcnMuc2l6ZSAhPT0gMSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkluY29ycmVjdCBudW1iZXIgb2YgYWNjb3VudHMgbGlzdGVkLiAxIGFuZCBvbmx5IDEgYWNjb3VudCBudW1iZXIgbXVzdCBiZSBsaXN0ZWQuXCIpO1xuICAgICAgICBsZXQgW2FjY291bnROdW1iZXJdID0gYWNjb3VudE51bWJlcnM7XG4gICAgICAgIGxldCBzdGFydEVuZERhdGVzID0gdGhpcy5nZXRTdGFydEVuZERhdGVzKHRyYW5zYWN0aW9ucyk7XG4gICAgICAgIGxldCBjb25maWcgPSB7XG4gICAgICAgICAgICB1cGRhdGVEYXRlVGltZTogbmV3IERhdGUoKSxcbiAgICAgICAgICAgIGFjY291bnRJZDogYWNjb3VudE51bWJlcixcbiAgICAgICAgICAgIGJyb2tlcklkOiBcIlBBNTI5XCIsXG4gICAgICAgICAgICBzdGFydERhdGU6IHN0YXJ0RW5kRGF0ZXNbMF0sXG4gICAgICAgICAgICBlbmREYXRlOiBzdGFydEVuZERhdGVzWzFdLFxuICAgICAgICAgICAgbXV0dWFsRnVuZFRyYW5zYWN0aW9uczogZHRvVHJhbnNhY3Rpb25zLFxuICAgICAgICAgICAgc2VjdXJpdHlQcmljZUluZm86IHNlY3VyaXR5SW5mbyxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZVRyYW5zYWN0aW9ucyhzaW5nbGVUcmFuKSB7XG4gICAgICAgIGxldCBkdG8gPSB7XG4gICAgICAgICAgICB0cmFkZURhdGU6IHNpbmdsZVRyYW4udHJhZGVEYXRlLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb25JZDogYCR7KDAsIGRheWpzXzEuZGVmYXVsdCkoc2luZ2xlVHJhbi50cmFkZURhdGUpLmZvcm1hdChcIllZWVlNTUREXCIpfSR7c2luZ2xlVHJhbi5pbnZlc3RtZW50TmFtZX1gLnJlcGxhY2UoLyAvZywgXCJcIiksXG4gICAgICAgICAgICBtZW1vOiBgJHtzaW5nbGVUcmFuLnRyYW5zYWN0aW9uVHlwZX0gLSAke3NpbmdsZVRyYW4uaW52ZXN0bWVudE5hbWV9YCxcbiAgICAgICAgICAgIHNlY3VyaXR5SWQ6IHRoaXMuZ2V0U2VjdXJpdHlJZEZyb21UcmFuKHNpbmdsZVRyYW4pLFxuICAgICAgICAgICAgZG9sbGFyVG90YWw6IC1zaW5nbGVUcmFuLmdyb3NzQW1vdW50LFxuICAgICAgICAgICAgcHJpY2VQZXJTaGFyZTogc2luZ2xlVHJhbi5zaGFyZVByaWNlLFxuICAgICAgICAgICAgc2hhcmVzOiBzaW5nbGVUcmFuLnNoYXJlcyxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGR0bztcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZUZha2VUcmFkZShob2xkaW5nLCBidXkpIHtcbiAgICAgICAgbGV0IG11bHRpcGxpZXIgPSBidXkgPyAxIDogLTE7XG4gICAgICAgIGxldCB0cmFkZVR5cGUgPSBidXkgPyBcImJ1eVwiIDogXCJzZWxsXCI7XG4gICAgICAgIGxldCB0cmFuID0ge1xuICAgICAgICAgICAgdHJhZGVEYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb25JZDogYGZha2VfdHJhZGVfJHt0cmFkZVR5cGV9XyR7KDAsIGRheWpzXzEuZGVmYXVsdCkobmV3IERhdGUpLmZvcm1hdChcIllZWVlNTUREXCIpfSR7aG9sZGluZy5mdW5kTmFtZX1gLnJlcGxhY2UoLyAvZywgXCJcIiksXG4gICAgICAgICAgICBtZW1vOiBgRmFrZSAke3RyYWRlVHlwZX0gdHJhbnNhY3Rpb24gJHtob2xkaW5nLmZ1bmROYW1lfSBjdXJyZW50IHByaWNlICR7aG9sZGluZy5wcmljZX1gLFxuICAgICAgICAgICAgc2VjdXJpdHlJZDogdGhpcy5nZXRTZWN1cml0eUlkRnJvbUhvbGRpbmcoaG9sZGluZyksXG4gICAgICAgICAgICBkb2xsYXJUb3RhbDogLTEgKiBob2xkaW5nLnByaWNlICogbXVsdGlwbGllcixcbiAgICAgICAgICAgIHByaWNlUGVyU2hhcmU6IGhvbGRpbmcucHJpY2UsXG4gICAgICAgICAgICBzaGFyZXM6IDEgKiBtdWx0aXBsaWVyLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdHJhbjtcbiAgICB9XG4gICAgc3RhdGljIGdldFNlY3VyaXR5SWRGcm9tVHJhbihzaW5nbGVUcmFuKSB7XG4gICAgICAgIHJldHVybiBcIlBBNTI5IFwiICsgc2luZ2xlVHJhbi5pbnZlc3RtZW50TmFtZTtcbiAgICB9XG4gICAgc3RhdGljIGdldFNlY3VyaXR5SWRGcm9tSG9sZGluZyhzaW5nbGVIb2xkaW5nKSB7XG4gICAgICAgIHJldHVybiBcIlBBNTI5IFwiICsgc2luZ2xlSG9sZGluZy5mdW5kTmFtZTtcbiAgICB9XG4gICAgc3RhdGljIGdldFN0YXJ0RW5kRGF0ZXModHJhbnNhY3Rpb25zKSB7XG4gICAgICAgIGxldCBzdGFydDtcbiAgICAgICAgbGV0IGVuZDtcbiAgICAgICAgdHJhbnNhY3Rpb25zLmZvckVhY2goc2luZ2xlID0+IHtcbiAgICAgICAgICAgIGlmICghc3RhcnQgfHwgc3RhcnQgPiBzaW5nbGUudHJhZGVEYXRlKVxuICAgICAgICAgICAgICAgIHN0YXJ0ID0gc2luZ2xlLnRyYWRlRGF0ZTtcbiAgICAgICAgICAgIGlmICghZW5kIHx8IGVuZCA8IHNpbmdsZS50cmFkZURhdGUpXG4gICAgICAgICAgICAgICAgZW5kID0gc2luZ2xlLnRyYWRlRGF0ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBbc3RhcnQsIGVuZF07XG4gICAgfVxuICAgIHN0YXRpYyBnZXRUcmFuc2FjdGlvbnModHJhbnNhY3Rpb25zU2VjdGlvbk9mQ3N2KSB7XG4gICAgICAgIGxldCB0cmFuc2FjdGlvbnNBbmRIZWFkZXIgPSAoMCwgc3luY18xLnBhcnNlKSh0cmFuc2FjdGlvbnNTZWN0aW9uT2ZDc3YpO1xuICAgICAgICB0aGlzLmNoZWNrVHJhbnNhY3Rpb25Db2x1bW5OYW1lcyh0cmFuc2FjdGlvbnNBbmRIZWFkZXJbMF0pO1xuICAgICAgICBsZXQgdHJhbnNhY3Rpb25zUm93cyA9IHRyYW5zYWN0aW9uc0FuZEhlYWRlci5zbGljZSgxKTsgLy8gcmVtb3ZlIGZpcnN0IHJvdyB3aGljaCBpcyBqdXN0IGhlYWRlcnNcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udmVydENzdlJvd3NUb1RyYW5zYWN0aW9ucyh0cmFuc2FjdGlvbnNSb3dzKTtcbiAgICB9XG4gICAgc3RhdGljIGdldENzdkhvbGRpbmdzKGhvbGRpbmdzU2VjdGlvbk9mQ3N2KSB7XG4gICAgICAgIGxldCBob2xkaW5nc0FuZEhlYWRlcnMgPSAoMCwgc3luY18xLnBhcnNlKShob2xkaW5nc1NlY3Rpb25PZkNzdik7XG4gICAgICAgIHRoaXMuY2hlY2tIb2xkaW5nQ29sdW1uTmFtZXMoaG9sZGluZ3NBbmRIZWFkZXJzWzBdKTtcbiAgICAgICAgbGV0IGhvbGRpbmdSb3dzID0gaG9sZGluZ3NBbmRIZWFkZXJzLnNsaWNlKDEpOyAvLyByZW1vdmUgZmlyc3Qgcm93IHdoaWNoIGlzIGp1c3QgaGVhZGVyc1xuICAgICAgICByZXR1cm4gdGhpcy5jb252ZXJ0Q3N2Um93c1RvSG9sZGluZ3MoaG9sZGluZ1Jvd3MpO1xuICAgIH1cbiAgICBzdGF0aWMgY29udmVydENzdlJvd3NUb0hvbGRpbmdzKHJvd3MpIHtcbiAgICAgICAgcmV0dXJuIHJvd3MubWFwKHNpbmdsZVJvdyA9PiB7XG4gICAgICAgICAgICBsZXQgaG9sZGluZ3MgPSB7XG4gICAgICAgICAgICAgICAgYWNjb3VudE51bWJlcjogc2luZ2xlUm93W1BhNTI5SG9sZGluZ0NvbHVtbnMuRlVORF9BQ0NPVU5UX05VTUJFUl0sXG4gICAgICAgICAgICAgICAgZnVuZE5hbWU6IHNpbmdsZVJvd1tQYTUyOUhvbGRpbmdDb2x1bW5zLkZVTkRfTkFNRV0sXG4gICAgICAgICAgICAgICAgcHJpY2U6IHRoaXMuY29udmVydERvbGxhclN0cmluZ1RvTnVtYmVyKHNpbmdsZVJvd1tQYTUyOUhvbGRpbmdDb2x1bW5zLlBSSUNFXSksXG4gICAgICAgICAgICAgICAgc2hhcmVzOiArc2luZ2xlUm93W1BhNTI5SG9sZGluZ0NvbHVtbnMuU0hBUkVTXSxcbiAgICAgICAgICAgICAgICB0b3RhbFZhbHVlOiB0aGlzLmNvbnZlcnREb2xsYXJTdHJpbmdUb051bWJlcihzaW5nbGVSb3dbUGE1MjlIb2xkaW5nQ29sdW1ucy5UT1RBTF9WQUxVRV0pLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBob2xkaW5ncztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBjb252ZXJ0Q3N2Um93c1RvVHJhbnNhY3Rpb25zKHJvd3MpIHtcbiAgICAgICAgcmV0dXJuIHJvd3MubWFwKHNpbmdsZVJvdyA9PiB7XG4gICAgICAgICAgICBsZXQgdHJhbiA9IHtcbiAgICAgICAgICAgICAgICBhY2NvdW50TnVtYmVyOiBzaW5nbGVSb3dbUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnMuQUNDT1VOVF9OVU1CRVJdLFxuICAgICAgICAgICAgICAgIHRyYWRlRGF0ZTogdGhpcy5jb252ZXJ0TWR5VG9EYXRlKHNpbmdsZVJvd1tQYTUyOVRyYW5zYWN0aW9uQ29sdW1ucy5UUkFERV9EQVRFXSksXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiBzaW5nbGVSb3dbUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnMuVFJBTlNBQ1RJT05fVFlQRV0sXG4gICAgICAgICAgICAgICAgaW52ZXN0bWVudE5hbWU6IHNpbmdsZVJvd1tQYTUyOVRyYW5zYWN0aW9uQ29sdW1ucy5JTlZFU1RNRU5UX05BTUVdLFxuICAgICAgICAgICAgICAgIHNoYXJlUHJpY2U6IHRoaXMuY29udmVydERvbGxhclN0cmluZ1RvTnVtYmVyKHNpbmdsZVJvd1tQYTUyOVRyYW5zYWN0aW9uQ29sdW1ucy5TSEFSRV9QUklDRV0pLFxuICAgICAgICAgICAgICAgIHNoYXJlczogK3NpbmdsZVJvd1tQYTUyOVRyYW5zYWN0aW9uQ29sdW1ucy5TSEFSRVNdLFxuICAgICAgICAgICAgICAgIGdyb3NzQW1vdW50OiB0aGlzLmNvbnZlcnREb2xsYXJTdHJpbmdUb051bWJlcihzaW5nbGVSb3dbUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnMuR1JPU1NfQU1PVU5UXSksXG4gICAgICAgICAgICAgICAgbmV0QW1vdW50OiB0aGlzLmNvbnZlcnREb2xsYXJTdHJpbmdUb051bWJlcihzaW5nbGVSb3dbUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnMuTkVUX0FNT1VOVF0pLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiB0cmFuO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGNvbnZlcnRNZHlUb0RhdGUoZGF0ZVN0cmluZykge1xuICAgICAgICByZXR1cm4gKDAsIGRheWpzXzEuZGVmYXVsdCkoZGF0ZVN0cmluZywgXCJNTS9ERC9ZWVlZXCIpLnRvRGF0ZSgpO1xuICAgIH1cbiAgICBzdGF0aWMgY29udmVydERvbGxhclN0cmluZ1RvTnVtYmVyKGRvbGxhclN0cmluZykge1xuICAgICAgICByZXR1cm4gK2RvbGxhclN0cmluZy5yZXBsYWNlKC9cXCQvZywgJycpO1xuICAgIH1cbiAgICBzdGF0aWMgY2hlY2tIb2xkaW5nQ29sdW1uTmFtZXMoY29sdW1ucykge1xuICAgICAgICB0aGlzLmNoZWNrQ29sdW1uKGNvbHVtbnMsIFBhNTI5SG9sZGluZ0NvbHVtbnMuRlVORF9BQ0NPVU5UX05VTUJFUiwgXCJGdW5kIEFjY291bnQgTnVtYmVyXCIpO1xuICAgICAgICB0aGlzLmNoZWNrQ29sdW1uKGNvbHVtbnMsIFBhNTI5SG9sZGluZ0NvbHVtbnMuRlVORF9OQU1FLCBcIkZ1bmQgTmFtZVwiKTtcbiAgICAgICAgdGhpcy5jaGVja0NvbHVtbihjb2x1bW5zLCBQYTUyOUhvbGRpbmdDb2x1bW5zLlBSSUNFLCBcIlByaWNlXCIpO1xuICAgICAgICB0aGlzLmNoZWNrQ29sdW1uKGNvbHVtbnMsIFBhNTI5SG9sZGluZ0NvbHVtbnMuU0hBUkVTLCBcIlNoYXJlc1wiKTtcbiAgICAgICAgdGhpcy5jaGVja0NvbHVtbihjb2x1bW5zLCBQYTUyOUhvbGRpbmdDb2x1bW5zLlRPVEFMX1ZBTFVFLCBcIlRvdGFsIFZhbHVlXCIpO1xuICAgIH1cbiAgICBzdGF0aWMgY2hlY2tUcmFuc2FjdGlvbkNvbHVtbk5hbWVzKGNvbHVtbnMpIHtcbiAgICAgICAgdGhpcy5jaGVja0NvbHVtbihjb2x1bW5zLCBQYTUyOVRyYW5zYWN0aW9uQ29sdW1ucy5BQ0NPVU5UX05VTUJFUiwgXCJBY2NvdW50IE51bWJlclwiKTtcbiAgICAgICAgdGhpcy5jaGVja0NvbHVtbihjb2x1bW5zLCBQYTUyOVRyYW5zYWN0aW9uQ29sdW1ucy5UUkFERV9EQVRFLCBcIlRyYWRlIERhdGVcIik7XG4gICAgICAgIHRoaXMuY2hlY2tDb2x1bW4oY29sdW1ucywgUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnMuUFJPQ0VTU19EQVRFLCBcIlByb2Nlc3MgRGF0ZVwiKTtcbiAgICAgICAgdGhpcy5jaGVja0NvbHVtbihjb2x1bW5zLCBQYTUyOVRyYW5zYWN0aW9uQ29sdW1ucy5UUkFOU0FDVElPTl9UWVBFLCBcIlRyYW5zYWN0aW9uIFR5cGVcIik7XG4gICAgICAgIHRoaXMuY2hlY2tDb2x1bW4oY29sdW1ucywgUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnMuVFJBTlNBQ1RJT05fREVTQ1JJUFRJT04sIFwiVHJhbnNhY3Rpb24gRGVzY3JpcHRpb25cIik7XG4gICAgICAgIHRoaXMuY2hlY2tDb2x1bW4oY29sdW1ucywgUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnMuSU5WRVNUTUVOVF9OQU1FLCBcIkludmVzdG1lbnQgTmFtZVwiKTtcbiAgICAgICAgdGhpcy5jaGVja0NvbHVtbihjb2x1bW5zLCBQYTUyOVRyYW5zYWN0aW9uQ29sdW1ucy5TSEFSRV9QUklDRSwgXCJTaGFyZSBQcmljZVwiKTtcbiAgICAgICAgdGhpcy5jaGVja0NvbHVtbihjb2x1bW5zLCBQYTUyOVRyYW5zYWN0aW9uQ29sdW1ucy5TSEFSRVMsIFwiU2hhcmVzXCIpO1xuICAgICAgICB0aGlzLmNoZWNrQ29sdW1uKGNvbHVtbnMsIFBhNTI5VHJhbnNhY3Rpb25Db2x1bW5zLkdST1NTX0FNT1VOVCwgXCJHcm9zcyBBbW91bnRcIik7XG4gICAgICAgIHRoaXMuY2hlY2tDb2x1bW4oY29sdW1ucywgUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnMuTkVUX0FNT1VOVCwgXCJOZXQgQW1vdW50XCIpO1xuICAgIH1cbiAgICBzdGF0aWMgY2hlY2tDb2x1bW4oY29sdW1ucywgY29sdW1uTnVtYmVyLCBleHBlY3RlZCkge1xuICAgICAgICBpZiAoY29sdW1uc1tjb2x1bW5OdW1iZXJdICE9PSBleHBlY3RlZClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgY29sdW1uICR7Y29sdW1uTnVtYmVyICsgMX0gdG8gYmUgXCIke2V4cGVjdGVkfVwiLCBidXQgZm91bmQgXCIke2NvbHVtbnNbY29sdW1uTnVtYmVyXX1cImApO1xuICAgIH1cbn1cbmV4cG9ydHMuUGE1MjlDc3ZUcmFuc2Zvcm1lciA9IFBhNTI5Q3N2VHJhbnNmb3JtZXI7XG52YXIgUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnM7XG4oZnVuY3Rpb24gKFBhNTI5VHJhbnNhY3Rpb25Db2x1bW5zKSB7XG4gICAgUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnNbUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnNbXCJBQ0NPVU5UX05VTUJFUlwiXSA9IDBdID0gXCJBQ0NPVU5UX05VTUJFUlwiO1xuICAgIFBhNTI5VHJhbnNhY3Rpb25Db2x1bW5zW1BhNTI5VHJhbnNhY3Rpb25Db2x1bW5zW1wiVFJBREVfREFURVwiXSA9IDFdID0gXCJUUkFERV9EQVRFXCI7XG4gICAgUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnNbUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnNbXCJQUk9DRVNTX0RBVEVcIl0gPSAyXSA9IFwiUFJPQ0VTU19EQVRFXCI7XG4gICAgUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnNbUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnNbXCJUUkFOU0FDVElPTl9UWVBFXCJdID0gM10gPSBcIlRSQU5TQUNUSU9OX1RZUEVcIjtcbiAgICBQYTUyOVRyYW5zYWN0aW9uQ29sdW1uc1tQYTUyOVRyYW5zYWN0aW9uQ29sdW1uc1tcIlRSQU5TQUNUSU9OX0RFU0NSSVBUSU9OXCJdID0gNF0gPSBcIlRSQU5TQUNUSU9OX0RFU0NSSVBUSU9OXCI7XG4gICAgUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnNbUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnNbXCJJTlZFU1RNRU5UX05BTUVcIl0gPSA1XSA9IFwiSU5WRVNUTUVOVF9OQU1FXCI7XG4gICAgUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnNbUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnNbXCJTSEFSRV9QUklDRVwiXSA9IDZdID0gXCJTSEFSRV9QUklDRVwiO1xuICAgIFBhNTI5VHJhbnNhY3Rpb25Db2x1bW5zW1BhNTI5VHJhbnNhY3Rpb25Db2x1bW5zW1wiU0hBUkVTXCJdID0gN10gPSBcIlNIQVJFU1wiO1xuICAgIFBhNTI5VHJhbnNhY3Rpb25Db2x1bW5zW1BhNTI5VHJhbnNhY3Rpb25Db2x1bW5zW1wiR1JPU1NfQU1PVU5UXCJdID0gOF0gPSBcIkdST1NTX0FNT1VOVFwiO1xuICAgIFBhNTI5VHJhbnNhY3Rpb25Db2x1bW5zW1BhNTI5VHJhbnNhY3Rpb25Db2x1bW5zW1wiTkVUX0FNT1VOVFwiXSA9IDldID0gXCJORVRfQU1PVU5UXCI7XG59KShQYTUyOVRyYW5zYWN0aW9uQ29sdW1ucyB8fCAoUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnMgPSB7fSkpO1xudmFyIFBhNTI5SG9sZGluZ0NvbHVtbnM7XG4oZnVuY3Rpb24gKFBhNTI5SG9sZGluZ0NvbHVtbnMpIHtcbiAgICBQYTUyOUhvbGRpbmdDb2x1bW5zW1BhNTI5SG9sZGluZ0NvbHVtbnNbXCJGVU5EX0FDQ09VTlRfTlVNQkVSXCJdID0gMF0gPSBcIkZVTkRfQUNDT1VOVF9OVU1CRVJcIjtcbiAgICBQYTUyOUhvbGRpbmdDb2x1bW5zW1BhNTI5SG9sZGluZ0NvbHVtbnNbXCJGVU5EX05BTUVcIl0gPSAxXSA9IFwiRlVORF9OQU1FXCI7XG4gICAgUGE1MjlIb2xkaW5nQ29sdW1uc1tQYTUyOUhvbGRpbmdDb2x1bW5zW1wiUFJJQ0VcIl0gPSAyXSA9IFwiUFJJQ0VcIjtcbiAgICBQYTUyOUhvbGRpbmdDb2x1bW5zW1BhNTI5SG9sZGluZ0NvbHVtbnNbXCJTSEFSRVNcIl0gPSAzXSA9IFwiU0hBUkVTXCI7XG4gICAgUGE1MjlIb2xkaW5nQ29sdW1uc1tQYTUyOUhvbGRpbmdDb2x1bW5zW1wiVE9UQUxfVkFMVUVcIl0gPSA0XSA9IFwiVE9UQUxfVkFMVUVcIjtcbn0pKFBhNTI5SG9sZGluZ0NvbHVtbnMgfHwgKFBhNTI5SG9sZGluZ0NvbHVtbnMgPSB7fSkpO1xuIiwiLypcclxuXHRDb3B5cmlnaHQgMjAxNSBBeGlub21cclxuXHRDb3B5cmlnaHQgMjAxMS0yMDEzIEFiZHVsbGEgQWJkdXJha2htYW5vdlxyXG5cdE9yaWdpbmFsIHNvdXJjZXMgYXJlIGF2YWlsYWJsZSBhdCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3gyanMvXHJcblxyXG5cdExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcblx0eW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG5cdFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG5cclxuXHRodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblx0VW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG5cdGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuXHRXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuXHRTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcblx0bGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcblxyXG4vKlxyXG5cdFN1cHBvcnRlZCBleHBvcnQgbWV0aG9kczpcclxuXHQqIEFNRFxyXG5cdCogPHNjcmlwdD4gKHdpbmRvdy5YMkpTKVxyXG5cdCogTm9kZS5qc1xyXG5cclxuXHRMaW1pdGF0aW9uczpcclxuXHQqIEF0dHJpYnV0ZSBuYW1lc3BhY2UgcHJlZml4ZXMgYXJlIG5vdCBwYXJzZWQgYXMgc3VjaC5cclxuXHQqIE92ZXJhbGwgdGhlIHNlcmlhbGl6YXRpb24vZGVzZXJpYWxpemF0b24gY29kZSBpcyBcImJlc3QgZWZmb3J0XCIgYW5kIG5vdCBmb29scHJvb2YuXHJcbiovXHJcblxyXG4vLyBNb2R1bGUgZGVmaW5pdGlvbiBwYXR0ZXJuIHVzZWQgaXMgcmV0dXJuRXhwb3J0cyBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS91bWRqcy91bWRcclxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdC8qIGdsb2JhbCBkZWZpbmUgKi9cclxuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XHJcblx0XHQvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXHJcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xyXG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcclxuXHRcdC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dCBvbmx5IENvbW1vbkpTLWxpa2VcclxuXHRcdC8vIGVudmlyb25tZW50cyB0aGF0IHN1cHBvcnQgbW9kdWxlLmV4cG9ydHMsIGxpa2UgTm9kZS5cclxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQHhtbGRvbS94bWxkb21cIikuRE9NUGFyc2VyKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Ly8gQnJvd3NlciBnbG9iYWxzIChyb290IGlzIHdpbmRvdylcclxuXHRcdHJvb3QuWDJKUyA9IGZhY3RvcnkoKTtcclxuXHR9XHJcbn0pKHRoaXMsIGZ1bmN0aW9uIChDdXN0b21ET01QYXJzZXIpIHtcclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHJcblx0Ly8gV2UgcmV0dXJuIGEgY29uc3RydWN0b3IgdGhhdCBjYW4gYmUgdXNlZCB0byBtYWtlIFgySlMgaW5zdGFuY2VzLlxyXG5cdHJldHVybiBmdW5jdGlvbiBYMkpTKGNvbmZpZykge1xyXG5cdFx0dmFyIFZFUlNJT04gPSBcIjMuNC40XCI7XHJcblxyXG5cdFx0Y29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG5cclxuXHRcdGZ1bmN0aW9uIGluaXRDb25maWdEZWZhdWx0cygpIHtcclxuXHRcdFx0Ly8gSWYgc2V0IHRvIFwicHJvcGVydHlcIiB0aGVuIDxlbGVtZW50Pl9hc0FycmF5IHdpbGwgYmUgY3JlYXRlZFxyXG5cdFx0XHQvLyB0byBhbGxvdyB5b3UgdG8gYWNjZXNzIGFueSBlbGVtZW50IGFzIGFuIGFycmF5IChldmVuIGlmIHRoZXJlIGlzIG9ubHkgb25lIG9mIGl0KS5cclxuXHRcdFx0Y29uZmlnLmFycmF5QWNjZXNzRm9ybSA9IGNvbmZpZy5hcnJheUFjY2Vzc0Zvcm0gfHwgXCJub25lXCI7XHJcblxyXG5cdFx0XHQvLyBJZiBcInRleHRcIiB0aGVuIDxlbXB0eT48L2VtcHR5PiB3aWxsIGJlIHRyYW5zZm9ybWVkIHRvIFwiXCIuXHJcblx0XHRcdC8vIElmIFwib2JqZWN0XCIgdGhlbiA8ZW1wdHk+PC9lbXB0eT4gd2lsbCBiZSB0cmFuc2Zvcm1lZCB0byB7fS5cclxuXHRcdFx0Y29uZmlnLmVtcHR5Tm9kZUZvcm0gPSBjb25maWcuZW1wdHlOb2RlRm9ybSB8fCBcInRleHRcIjtcclxuXHJcblx0XHRcdC8vIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2ggZWxlbWVudHMsIGlmIHRoZSBmdW5jdGlvbiByZXR1cm5zIHRydWUsIHRoZSBlbGVtZW50IHdpbGwgYmUgc2tpcHBlZFxyXG5cdFx0XHQvLyBmdW5jdGlvbihuYW1lLCB2YWx1ZSkgeyByZXR1cm4gdHJ1ZTsgfTtcclxuXHRcdFx0Y29uZmlnLmpzQXR0cmlidXRlRmlsdGVyID0gY29uZmlnLmpzQXR0cmlidXRlRmlsdGVyO1xyXG5cclxuXHRcdFx0Ly8gRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaCBlbGVtZW50cywgdGhlIGVsZW1lbnQgdmFsdWUgd2lsbCBiZSByZXBsYWNlZCBieSB0aGUgcmV0dXJuZWQgdmFsdWVcclxuXHRcdFx0Ly8gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHsgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpOyB9O1xyXG5cdFx0XHRjb25maWcuanNBdHRyaWJ1dGVDb252ZXJ0ZXIgPSBjb25maWcuanNBdHRyaWJ1dGVDb252ZXJ0ZXI7XHJcblxyXG5cdFx0XHQvLyBBbGxvd3MgYXR0cmlidXRlIHZhbHVlcyB0byBiZSBjb252ZXJ0ZWQgb24gdGhlIGZseSBkdXJpbmcgcGFyc2luZyB0byBvYmplY3RzLlxyXG5cdFx0XHQvLyBcdFwidGVzdFwiOiBmdW5jdGlvbihuYW1lLCB2YWx1ZSkgeyByZXR1cm4gdHJ1ZTsgfVxyXG5cdFx0XHQvL1x0XCJjb252ZXJ0XCI6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7IHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTsgfTtcclxuXHRcdFx0Ly8gY29udmVydCgpIHdpbGwgYmUgY2FsbGVkIGZvciBldmVyeSBhdHRyaWJ1dGUgd2hlcmUgdGVzdCgpIHJldHVybnMgdHJ1ZVxyXG5cdFx0XHQvLyBhbmQgdGhlIHJldHVybiB2YWx1ZSBmcm9tIGNvbnZlcnQoKSB3aWxsIHJlcGxhY2UgdGhlIG9yaWdpbmFsIHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUuXHJcblx0XHRcdGNvbmZpZy5hdHRyaWJ1dGVDb252ZXJ0ZXJzID0gY29uZmlnLmF0dHJpYnV0ZUNvbnZlcnRlcnMgfHwgW107XHJcblxyXG5cdFx0XHQvLyBBbnkgZWxlbWVudHMgdGhhdCBtYXRjaCB0aGUgcGF0aHMgaGVyZSB3aWxsIGhhdmUgdGhlaXIgdGV4dCBwYXJzZWRcclxuXHRcdFx0Ly8gYXMgYW4gWE1MIGRhdGV0aW1lIHZhbHVlICgyMDExLTExLTEyVDEzOjAwOjAwLTA3OjAwIHN0eWxlKS5cclxuXHRcdFx0Ly8gVGhlIHBhdGggY2FuIGJlIGEgcGxhaW4gc3RyaW5nIChwYXJlbnQuY2hpbGQxLmNoaWxkMiksXHJcblx0XHRcdC8vIGEgcmVnZXggKC8uKlxcLmNoaWxkMi8pIG9yIGZ1bmN0aW9uKGVsZW1lbnRQYXRoKS5cclxuXHRcdFx0Y29uZmlnLmRhdGV0aW1lQWNjZXNzRm9ybVBhdGhzID0gY29uZmlnLmRhdGV0aW1lQWNjZXNzRm9ybVBhdGhzIHx8IFtdO1xyXG5cclxuXHRcdFx0Ly8gQW55IGVsZW1lbnRzIHRoYXQgbWF0Y2ggdGhlIHBhdGhzIGxpc3RlZCBoZXJlIHdpbGwgYmUgc3RvcmVkIGluIEphdmFTY3JpcHQgb2JqZWN0c1xyXG5cdFx0XHQvLyBhcyBhcnJheXMgZXZlbiBpZiB0aGVyZSBpcyBvbmx5IG9uZSBvZiB0aGVtLiBUaGUgcGF0aCBjYW4gYmUgYSBwbGFpbiBzdHJpbmdcclxuXHRcdFx0Ly8gKHBhcmVudC5jaGlsZDEuY2hpbGQyKSwgYSByZWdleCAoLy4qXFwuY2hpbGQyLykgb3IgZnVuY3Rpb24oZWxlbWVudE5hbWUsIGVsZW1lbnRQYXRoKS5cclxuXHRcdFx0Y29uZmlnLmFycmF5QWNjZXNzRm9ybVBhdGhzID0gY29uZmlnLmFycmF5QWNjZXNzRm9ybVBhdGhzIHx8IFtdO1xyXG5cclxuICAgICAgICAgICAgLy8geG1sZG9tIGNvbnN0cnVjdG9yIGFyZ3VtZW50c1xyXG4gICAgICAgICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qaW5kdy94bWxkb20jYXBpLXJlZmVyZW5jZVxyXG5cdFx0XHRjb25maWcueG1sZG9tT3B0aW9ucyA9IGNvbmZpZy54bWxkb21PcHRpb25zIHx8IHt9O1xyXG5cclxuXHRcdFx0Ly8gSWYgdHJ1ZSwgYSB0b1N0cmluZyBmdW5jdGlvbiBpcyBnZW5lcmF0ZWQgdG8gcHJpbnQgbm9kZXMgY29udGFpbmluZyB0ZXh0IG9yIGNkYXRhLlxyXG5cdFx0XHQvLyBVc2VmdWwgaWYgeW91IHdhbnQgdG8gYWNjZXB0IGJvdGggcGxhaW4gdGV4dCBhbmQgQ0RhdGEgYXMgZXF1aXZhbGVudCBpbnB1dHMuXHJcblx0XHRcdGlmIChjb25maWcuZW5hYmxlVG9TdHJpbmdGdW5jID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRjb25maWcuZW5hYmxlVG9TdHJpbmdGdW5jID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gSWYgdHJ1ZSwgZW1wdHkgdGV4dCB0YWdzIGFyZSBpZ25vcmVkIGZvciBlbGVtZW50cyB3aXRoIGNoaWxkIG5vZGVzLlxyXG5cdFx0XHRpZiAoY29uZmlnLnNraXBFbXB0eVRleHROb2Rlc0Zvck9iaiA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0Y29uZmlnLnNraXBFbXB0eVRleHROb2Rlc0Zvck9iaiA9IHRydWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIElmIHRydWUsIHdoaXRlc3BhY2UgaXMgdHJpbW1lZCBmcm9tIHRleHQgbm9kZXMuXHJcblx0XHRcdGlmIChjb25maWcuc3RyaXBXaGl0ZXNwYWNlcyA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0Y29uZmlnLnN0cmlwV2hpdGVzcGFjZXMgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBJZiB0cnVlLCBkb3VibGUgcXVvdGVzIGFyZSB1c2VkIGluIGdlbmVyYXRlZCBYTUwuXHJcblx0XHRcdGlmIChjb25maWcudXNlRG91YmxlUXVvdGVzID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRjb25maWcudXNlRG91YmxlUXVvdGVzID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gSWYgdHJ1ZSwgdGhlIHJvb3QgZWxlbWVudCBvZiB0aGUgWE1MIGRvY3VtZW50IGlzIGlnbm9yZWQgd2hlbiBjb252ZXJ0aW5nIHRvIG9iamVjdHMuXHJcblx0XHRcdC8vIFRoZSByZXN1bHQgd2lsbCBkaXJlY3RseSBoYXZlIHRoZSByb290IGVsZW1lbnQncyBjaGlsZHJlbiBhcyBpdHMgb3duIHByb3BlcnRpZXMuXHJcblx0XHRcdGlmIChjb25maWcuaWdub3JlUm9vdCA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0Y29uZmlnLmlnbm9yZVJvb3QgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gV2hldGhlciBYTUwgY2hhcmFjdGVycyBpbiB0ZXh0IGFyZSBlc2NhcGVkIHdoZW4gcmVhZGluZy93cml0aW5nIFhNTC5cclxuXHRcdFx0aWYgKGNvbmZpZy5lc2NhcGVNb2RlID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRjb25maWcuZXNjYXBlTW9kZSA9IHRydWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIFByZWZpeCB0byB1c2UgZm9yIHByb3BlcnRpZXMgdGhhdCBhcmUgY3JlYXRlZCB0byByZXByZXNlbnQgWE1MIGF0dHJpYnV0ZXMuXHJcblx0XHRcdGlmIChjb25maWcuYXR0cmlidXRlUHJlZml4ID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRjb25maWcuYXR0cmlidXRlUHJlZml4ID0gXCJfXCI7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIElmIHRydWUsIGVtcHR5IGVsZW1lbnRzIHdpbGwgY3JlYXRlZCBhcyBzZWxmIGNsb3NpbmcgZWxlbWVudHMgKDxlbGVtZW50IC8+KVxyXG5cdFx0XHQvLyBJZiBmYWxzZSwgZW1wdHkgZWxlbWVudHMgd2lsbCBiZSBjcmVhdGVkIHdpdGggc3RhcnQgYW5kIGVuZCB0YWdzICg8ZWxlbWVudD48L2VsZW1lbnQ+KVxyXG5cdFx0XHRpZiAoY29uZmlnLnNlbGZDbG9zaW5nRWxlbWVudHMgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdGNvbmZpZy5zZWxmQ2xvc2luZ0VsZW1lbnRzID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gSWYgdGhpcyBwcm9wZXJ0eSBkZWZpbmVkIGFzIGZhbHNlIGFuZCBhbiBYTUwgZWxlbWVudCBoYXMgQ0RhdGEgbm9kZSBPTkxZLCBpdCB3aWxsIGJlIGNvbnZlcnRlZCB0byB0ZXh0IHdpdGhvdXQgYWRkaXRpb25hbCBwcm9wZXJ0eSBcIl9fY2RhdGFcIlxyXG5cdFx0XHRpZiAoY29uZmlnLmtlZXBDRGF0YSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0Y29uZmlnLmtlZXBDRGF0YSA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBJZiB0aGlzIHByb3BlcnR5IGRlZmluZWQgYXMgdHJ1ZSwgdXNlIHsgX190ZXh0OiAnYWJjJyB9IG92ZXIgJ2FiYydcclxuXHRcdFx0aWYgKGNvbmZpZy5rZWVwVGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0Y29uZmlnLmtlZXBUZXh0ID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIElmIHRydWUsIHdpbGwgb3V0cHV0IGRhdGVzIGluIFVUQ1xyXG5cdFx0XHRpZiAoY29uZmlnLmpzRGF0ZVVUQyA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0Y29uZmlnLmpzRGF0ZVVUQyA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gaW5pdFJlcXVpcmVkUG9seWZpbGxzKCkge1xyXG5cdFx0XHRmdW5jdGlvbiBwYWQobnVtYmVyKSB7XHJcblx0XHRcdFx0dmFyIHIgPSBTdHJpbmcobnVtYmVyKTtcclxuXHRcdFx0XHRpZiAoci5sZW5ndGggPT09IDEpIHtcclxuXHRcdFx0XHRcdHIgPSAnMCcgKyByO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gcjtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBIZWxsbyBJRTgtXHJcblx0XHRcdGlmICh0eXBlb2YgU3RyaW5nLnByb3RvdHlwZS50cmltICE9PSAnZnVuY3Rpb24nKSB7XHJcblx0XHRcdFx0U3RyaW5nLnByb3RvdHlwZS50cmltID0gZnVuY3Rpb24gdHJpbSgpIHtcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLnJlcGxhY2UoL15cXHMrfF5cXG4rfChcXHN8XFxuKSskL2csICcnKTtcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0eXBlb2YgRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcgIT09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0XHQvLyBJbXBsZW1lbnRhdGlvbiBmcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjU3MzUyMS9ob3ctZG8taS1vdXRwdXQtYW4taXNvLTg2MDEtZm9ybWF0dGVkLXN0cmluZy1pbi1qYXZhc2NyaXB0XHJcblx0XHRcdFx0RGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcgPSBmdW5jdGlvbiB0b0lTT1N0cmluZygpIHtcclxuXHRcdFx0XHRcdHZhciBNU19JTl9TID0gMTAwMDtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5nZXRVVENGdWxsWWVhcigpXHJcblx0XHRcdFx0XHRcdCsgJy0nICsgcGFkKHRoaXMuZ2V0VVRDTW9udGgoKSArIDEpXHJcblx0XHRcdFx0XHRcdCsgJy0nICsgcGFkKHRoaXMuZ2V0VVRDRGF0ZSgpKVxyXG5cdFx0XHRcdFx0XHQrICdUJyArIHBhZCh0aGlzLmdldFVUQ0hvdXJzKCkpXHJcblx0XHRcdFx0XHRcdCsgJzonICsgcGFkKHRoaXMuZ2V0VVRDTWludXRlcygpKVxyXG5cdFx0XHRcdFx0XHQrICc6JyArIHBhZCh0aGlzLmdldFVUQ1NlY29uZHMoKSlcclxuXHRcdFx0XHRcdFx0KyAnLicgKyBTdHJpbmcoKHRoaXMuZ2V0VVRDTWlsbGlzZWNvbmRzKCkgLyBNU19JTl9TKS50b0ZpeGVkKDMpKS5zbGljZSgyLCA1KVxyXG5cdFx0XHRcdFx0XHQrICdaJztcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aW5pdENvbmZpZ0RlZmF1bHRzKCk7XHJcblx0XHRpbml0UmVxdWlyZWRQb2x5ZmlsbHMoKTtcclxuXHJcblx0XHR2YXIgRE9NTm9kZVR5cGVzID0ge1xyXG5cdFx0XHRcIkVMRU1FTlRfTk9ERVwiOiAxLFxyXG5cdFx0XHRcIlRFWFRfTk9ERVwiOiAzLFxyXG5cdFx0XHRcIkNEQVRBX1NFQ1RJT05fTk9ERVwiOiA0LFxyXG5cdFx0XHRcIkNPTU1FTlRfTk9ERVwiOiA4LFxyXG5cdFx0XHRcIkRPQ1VNRU5UX05PREVcIjogOVxyXG5cdFx0fTtcclxuXHJcblx0XHRmdW5jdGlvbiBnZXREb21Ob2RlTG9jYWxOYW1lKGRvbU5vZGUpIHtcclxuXHRcdFx0dmFyIGxvY2FsTmFtZSA9IGRvbU5vZGUubG9jYWxOYW1lO1xyXG5cdFx0XHRpZiAobG9jYWxOYW1lID09IG51bGwpIHtcclxuXHRcdFx0XHQvLyBZZWFoLCB0aGlzIGlzIElFISFcclxuXHRcdFx0XHRsb2NhbE5hbWUgPSBkb21Ob2RlLmJhc2VOYW1lO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChsb2NhbE5hbWUgPT0gbnVsbCB8fCBsb2NhbE5hbWUgPT09IFwiXCIpIHtcclxuXHRcdFx0XHQvLyA9PT1cIlwiIGlzIElFIHRvb1xyXG5cdFx0XHRcdGxvY2FsTmFtZSA9IGRvbU5vZGUubm9kZU5hbWU7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGxvY2FsTmFtZTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBnZXREb21Ob2RlTmFtZXNwYWNlUHJlZml4KG5vZGUpIHtcclxuXHRcdFx0cmV0dXJuIG5vZGUucHJlZml4O1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGVzY2FwZVhtbENoYXJzKHN0cikge1xyXG5cdFx0XHRpZiAodHlwZW9mIHN0ciA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRyZXR1cm4gc3RyLnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoLz4vZywgJyZndDsnKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JykucmVwbGFjZSgvJy9nLCAnJiN4Mjc7Jyk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXR1cm4gc3RyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHVuZXNjYXBlWG1sQ2hhcnMoc3RyKSB7XHJcblx0XHRcdHJldHVybiBzdHIucmVwbGFjZSgvJmx0Oy9nLCAnPCcpLnJlcGxhY2UoLyZndDsvZywgJz4nKS5yZXBsYWNlKC8mcXVvdDsvZywgJ1wiJykucmVwbGFjZSgvJiN4Mjc7L2csIFwiJ1wiKS5yZXBsYWNlKC8mYW1wOy9nLCAnJicpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGVuc3VyZVByb3BlckFycmF5QWNjZXNzRm9ybShlbGVtZW50LCBjaGlsZE5hbWUsIGVsZW1lbnRQYXRoKSB7XHJcblx0XHRcdHN3aXRjaCAoY29uZmlnLmFycmF5QWNjZXNzRm9ybSkge1xyXG5cdFx0XHRcdGNhc2UgXCJwcm9wZXJ0eVwiOlxyXG5cdFx0XHRcdFx0aWYgKCEoZWxlbWVudFtjaGlsZE5hbWVdIGluc3RhbmNlb2YgQXJyYXkpKVxyXG5cdFx0XHRcdFx0XHRlbGVtZW50W2NoaWxkTmFtZSArIFwiX2FzQXJyYXlcIl0gPSBbZWxlbWVudFtjaGlsZE5hbWVdXTtcclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0ZWxlbWVudFtjaGlsZE5hbWUgKyBcIl9hc0FycmF5XCJdID0gZWxlbWVudFtjaGlsZE5hbWVdO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICghKGVsZW1lbnRbY2hpbGROYW1lXSBpbnN0YW5jZW9mIEFycmF5KSAmJiBjb25maWcuYXJyYXlBY2Nlc3NGb3JtUGF0aHMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdHZhciBtYXRjaCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNvbmZpZy5hcnJheUFjY2Vzc0Zvcm1QYXRocy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0dmFyIGFycmF5UGF0aCA9IGNvbmZpZy5hcnJheUFjY2Vzc0Zvcm1QYXRoc1tpXTtcclxuXHRcdFx0XHRcdGlmICh0eXBlb2YgYXJyYXlQYXRoID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0XHRcdGlmIChhcnJheVBhdGggPT09IGVsZW1lbnRQYXRoKSB7XHJcblx0XHRcdFx0XHRcdFx0bWF0Y2ggPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGFycmF5UGF0aCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoYXJyYXlQYXRoLnRlc3QoZWxlbWVudFBhdGgpKSB7XHJcblx0XHRcdFx0XHRcdFx0bWF0Y2ggPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBhcnJheVBhdGggPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0XHRcdFx0XHRpZiAoYXJyYXlQYXRoKGNoaWxkTmFtZSwgZWxlbWVudFBhdGgpKSB7XHJcblx0XHRcdFx0XHRcdFx0bWF0Y2ggPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAobWF0Y2gpXHJcblx0XHRcdFx0XHRlbGVtZW50W2NoaWxkTmFtZV0gPSBbZWxlbWVudFtjaGlsZE5hbWVdXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHhtbERhdGVUaW1lVG9EYXRlKHByb3ApIHtcclxuXHRcdFx0Ly8gSW1wbGVtZW50YXRpb24gYmFzZWQgdXAgb24gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy84MTc4NTk4L3htbC1kYXRldGltZS10by1qYXZhc2NyaXB0LWRhdGUtb2JqZWN0XHJcblx0XHRcdC8vIEltcHJvdmVkIHRvIHN1cHBvcnQgZnVsbCBzcGVjIGFuZCBvcHRpb25hbCBwYXJ0c1xyXG5cdFx0XHR2YXIgTUlOVVRFU19QRVJfSE9VUiA9IDYwO1xyXG5cclxuXHRcdFx0dmFyIGJpdHMgPSBwcm9wLnNwbGl0KC9bLVQ6K1pdL2cpO1xyXG5cclxuXHRcdFx0dmFyIGQgPSBuZXcgRGF0ZShiaXRzWzBdLCBiaXRzWzFdIC0gMSwgYml0c1syXSk7XHJcblx0XHRcdHZhciBzZWNvbmRCaXRzID0gYml0c1s1XS5zcGxpdChcIlxcLlwiKTtcclxuXHRcdFx0ZC5zZXRIb3VycyhiaXRzWzNdLCBiaXRzWzRdLCBzZWNvbmRCaXRzWzBdKTtcclxuXHRcdFx0aWYgKHNlY29uZEJpdHMubGVuZ3RoID4gMSlcclxuXHRcdFx0XHRkLnNldE1pbGxpc2Vjb25kcyhzZWNvbmRCaXRzWzFdKTtcclxuXHJcblx0XHRcdC8vIEdldCBzdXBwbGllZCB0aW1lIHpvbmUgb2Zmc2V0IGluIG1pbnV0ZXNcclxuXHRcdFx0aWYgKGJpdHNbNl0gJiYgYml0c1s3XSkge1xyXG5cdFx0XHRcdHZhciBvZmZzZXRNaW51dGVzID0gYml0c1s2XSAqIE1JTlVURVNfUEVSX0hPVVIgKyBOdW1iZXIoYml0c1s3XSk7XHJcblx0XHRcdFx0dmFyIHNpZ24gPSAvXFxkXFxkLVxcZFxcZDpcXGRcXGQkLy50ZXN0KHByb3ApID8gJy0nIDogJysnO1xyXG5cclxuXHRcdFx0XHQvLyBBcHBseSB0aGUgc2lnblxyXG5cdFx0XHRcdG9mZnNldE1pbnV0ZXMgPSAwICsgKHNpZ24gPT09ICctJyA/IC0xICogb2Zmc2V0TWludXRlcyA6IG9mZnNldE1pbnV0ZXMpO1xyXG5cclxuXHRcdFx0XHQvLyBBcHBseSBvZmZzZXQgYW5kIGxvY2FsIHRpbWV6b25lXHJcblx0XHRcdFx0ZC5zZXRNaW51dGVzKGQuZ2V0TWludXRlcygpIC0gb2Zmc2V0TWludXRlcyAtIGQuZ2V0VGltZXpvbmVPZmZzZXQoKSk7XHJcblx0XHRcdH0gZWxzZSBpZiAocHJvcC5pbmRleE9mKFwiWlwiLCBwcm9wLmxlbmd0aCAtIDEpICE9PSAtMSkge1xyXG5cdFx0XHRcdGQgPSBuZXcgRGF0ZShEYXRlLlVUQyhkLmdldEZ1bGxZZWFyKCksIGQuZ2V0TW9udGgoKSwgZC5nZXREYXRlKCksIGQuZ2V0SG91cnMoKSwgZC5nZXRNaW51dGVzKCksIGQuZ2V0U2Vjb25kcygpLCBkLmdldE1pbGxpc2Vjb25kcygpKSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGQgaXMgbm93IGEgbG9jYWwgdGltZSBlcXVpdmFsZW50IHRvIHRoZSBzdXBwbGllZCB0aW1lXHJcblx0XHRcdHJldHVybiBkO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGNvbnZlcnRUb0RhdGVJZlJlcXVpcmVkKHZhbHVlLCBjaGlsZE5hbWUsIGZ1bGxQYXRoKSB7XHJcblx0XHRcdGlmIChjb25maWcuZGF0ZXRpbWVBY2Nlc3NGb3JtUGF0aHMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdHZhciBwYXRoV2l0aG91dFRleHROb2RlID0gZnVsbFBhdGguc3BsaXQoXCJcXC4jXCIpWzBdO1xyXG5cclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNvbmZpZy5kYXRldGltZUFjY2Vzc0Zvcm1QYXRocy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0dmFyIGNhbmRpZGF0ZVBhdGggPSBjb25maWcuZGF0ZXRpbWVBY2Nlc3NGb3JtUGF0aHNbaV07XHJcblx0XHRcdFx0XHRpZiAodHlwZW9mIGNhbmRpZGF0ZVBhdGggPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0XHRcdFx0aWYgKGNhbmRpZGF0ZVBhdGggPT09IHBhdGhXaXRob3V0VGV4dE5vZGUpXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHhtbERhdGVUaW1lVG9EYXRlKHZhbHVlKTtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoY2FuZGlkYXRlUGF0aCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoY2FuZGlkYXRlUGF0aC50ZXN0KHBhdGhXaXRob3V0VGV4dE5vZGUpKVxyXG5cdFx0XHRcdFx0XHRcdHJldHVybiB4bWxEYXRlVGltZVRvRGF0ZSh2YWx1ZSk7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBjYW5kaWRhdGVQYXRoID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0XHRcdFx0aWYgKGNhbmRpZGF0ZVBhdGgocGF0aFdpdGhvdXRUZXh0Tm9kZSkpXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHhtbERhdGVUaW1lVG9EYXRlKHZhbHVlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiB2YWx1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBkZXNlcmlhbGl6ZVJvb3RFbGVtZW50Q2hpbGRyZW4ocm9vdEVsZW1lbnQpIHtcclxuXHRcdFx0dmFyIHJlc3VsdCA9IHt9O1xyXG5cdFx0XHR2YXIgY2hpbGRyZW4gPSByb290RWxlbWVudC5jaGlsZE5vZGVzO1xyXG5cclxuXHRcdFx0Ly8gQWx0ZXJuYXRpdmUgZm9yIGZpcnN0RWxlbWVudENoaWxkIHdoaWNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gc29tZSBlbnZpcm9ubWVudHNcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHZhciBjaGlsZCA9IGNoaWxkcmVuLml0ZW0oaSk7XHJcblx0XHRcdFx0aWYgKGNoaWxkLm5vZGVUeXBlID09PSBET01Ob2RlVHlwZXMuRUxFTUVOVF9OT0RFKSB7XHJcblx0XHRcdFx0XHR2YXIgY2hpbGROYW1lID0gZ2V0RG9tTm9kZUxvY2FsTmFtZShjaGlsZCk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGNvbmZpZy5pZ25vcmVSb290KVxyXG5cdFx0XHRcdFx0XHRyZXN1bHQgPSBkZXNlcmlhbGl6ZURvbUNoaWxkcmVuKGNoaWxkLCBjaGlsZE5hbWUpO1xyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRyZXN1bHRbY2hpbGROYW1lXSA9IGRlc2VyaWFsaXplRG9tQ2hpbGRyZW4oY2hpbGQsIGNoaWxkTmFtZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGRlc2VyaWFsaXplRWxlbWVudENoaWxkcmVuKGVsZW1lbnQsIGVsZW1lbnRQYXRoKSB7XHJcblx0XHRcdHZhciByZXN1bHQgPSB7fTtcclxuXHRcdFx0cmVzdWx0Ll9fY250ID0gMDtcclxuXHJcblx0XHRcdHZhciBub2RlQ2hpbGRyZW4gPSBlbGVtZW50LmNoaWxkTm9kZXM7XHJcblxyXG5cdFx0XHQvLyBDaGlsZCBub2Rlcy5cclxuXHRcdFx0Zm9yICh2YXIgaUNoaWxkID0gMDsgaUNoaWxkIDwgbm9kZUNoaWxkcmVuLmxlbmd0aDsgaUNoaWxkKyspIHtcclxuXHRcdFx0XHR2YXIgY2hpbGQgPSBub2RlQ2hpbGRyZW4uaXRlbShpQ2hpbGQpO1xyXG5cdFx0XHRcdHZhciBjaGlsZE5hbWUgPSBnZXREb21Ob2RlTG9jYWxOYW1lKGNoaWxkKTtcclxuXHJcblx0XHRcdFx0aWYgKGNoaWxkLm5vZGVUeXBlID09PSBET01Ob2RlVHlwZXMuQ09NTUVOVF9OT0RFKVxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRcdHJlc3VsdC5fX2NudCsrO1xyXG5cclxuXHRcdFx0XHQvLyBXZSBkZWxpYmVyYXRlbHkgZG8gbm90IGFjY2VwdCBldmVyeXRoaW5nIGZhbHNleSBoZXJlIGJlY2F1c2VcclxuXHRcdFx0XHQvLyBlbGVtZW50cyB0aGF0IHJlc29sdmUgdG8gZW1wdHkgc3RyaW5nIHNob3VsZCBzdGlsbCBiZSBwcmVzZXJ2ZWQuXHJcblx0XHRcdFx0aWYgKHJlc3VsdFtjaGlsZE5hbWVdID09IG51bGwpIHtcclxuXHRcdFx0XHRcdHJlc3VsdFtjaGlsZE5hbWVdID0gZGVzZXJpYWxpemVEb21DaGlsZHJlbihjaGlsZCwgZWxlbWVudFBhdGggKyBcIi5cIiArIGNoaWxkTmFtZSk7XHJcblx0XHRcdFx0XHRlbnN1cmVQcm9wZXJBcnJheUFjY2Vzc0Zvcm0ocmVzdWx0LCBjaGlsZE5hbWUsIGVsZW1lbnRQYXRoICsgXCIuXCIgKyBjaGlsZE5hbWUpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpZiAoIShyZXN1bHRbY2hpbGROYW1lXSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG5cdFx0XHRcdFx0XHRyZXN1bHRbY2hpbGROYW1lXSA9IFtyZXN1bHRbY2hpbGROYW1lXV07XHJcblx0XHRcdFx0XHRcdGVuc3VyZVByb3BlckFycmF5QWNjZXNzRm9ybShyZXN1bHQsIGNoaWxkTmFtZSwgZWxlbWVudFBhdGggKyBcIi5cIiArIGNoaWxkTmFtZSk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0cmVzdWx0W2NoaWxkTmFtZV1bcmVzdWx0W2NoaWxkTmFtZV0ubGVuZ3RoXSA9IGRlc2VyaWFsaXplRG9tQ2hpbGRyZW4oY2hpbGQsIGVsZW1lbnRQYXRoICsgXCIuXCIgKyBjaGlsZE5hbWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gQXR0cmlidXRlc1xyXG5cdFx0XHRmb3IgKHZhciBpQXR0cmlidXRlID0gMDsgaUF0dHJpYnV0ZSA8IGVsZW1lbnQuYXR0cmlidXRlcy5sZW5ndGg7IGlBdHRyaWJ1dGUrKykge1xyXG5cdFx0XHRcdHZhciBhdHRyaWJ1dGUgPSBlbGVtZW50LmF0dHJpYnV0ZXMuaXRlbShpQXR0cmlidXRlKTtcclxuXHRcdFx0XHRyZXN1bHQuX19jbnQrKztcclxuXHJcblx0XHRcdFx0dmFyIGFkanVzdGVkVmFsdWUgPSBhdHRyaWJ1dGUudmFsdWU7XHJcblx0XHRcdFx0Zm9yICh2YXIgaUNvbnZlcnRlciA9IDA7IGlDb252ZXJ0ZXIgPCBjb25maWcuYXR0cmlidXRlQ29udmVydGVycy5sZW5ndGg7IGlDb252ZXJ0ZXIrKykge1xyXG5cdFx0XHRcdFx0dmFyIGNvbnZlcnRlciA9IGNvbmZpZy5hdHRyaWJ1dGVDb252ZXJ0ZXJzW2lDb252ZXJ0ZXJdO1xyXG5cdFx0XHRcdFx0aWYgKGNvbnZlcnRlci50ZXN0LmNhbGwobnVsbCwgYXR0cmlidXRlLm5hbWUsIGF0dHJpYnV0ZS52YWx1ZSkpXHJcblx0XHRcdFx0XHRcdGFkanVzdGVkVmFsdWUgPSBjb252ZXJ0ZXIuY29udmVydC5jYWxsKG51bGwsIGF0dHJpYnV0ZS5uYW1lLCBhdHRyaWJ1dGUudmFsdWUpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmVzdWx0W2NvbmZpZy5hdHRyaWJ1dGVQcmVmaXggKyBhdHRyaWJ1dGUubmFtZV0gPSBhZGp1c3RlZFZhbHVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBOb2RlIG5hbWVzcGFjZSBwcmVmaXhcclxuXHRcdFx0dmFyIG5hbWVzcGFjZVByZWZpeCA9IGdldERvbU5vZGVOYW1lc3BhY2VQcmVmaXgoZWxlbWVudCk7XHJcblx0XHRcdGlmIChuYW1lc3BhY2VQcmVmaXgpIHtcclxuXHRcdFx0XHRyZXN1bHQuX19jbnQrKztcclxuXHRcdFx0XHRyZXN1bHQuX19wcmVmaXggPSBuYW1lc3BhY2VQcmVmaXg7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChyZXN1bHRbXCIjdGV4dFwiXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5fX3RleHQgPSByZXN1bHRbXCIjdGV4dFwiXTtcclxuXHJcblx0XHRcdFx0aWYgKHJlc3VsdC5fX3RleHQgaW5zdGFuY2VvZiBBcnJheSkge1xyXG5cdFx0XHRcdFx0cmVzdWx0Ll9fdGV4dCA9IHJlc3VsdC5fX3RleHQuam9pbihcIlxcblwiKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChjb25maWcuZXNjYXBlTW9kZSlcclxuXHRcdFx0XHRcdHJlc3VsdC5fX3RleHQgPSB1bmVzY2FwZVhtbENoYXJzKHJlc3VsdC5fX3RleHQpO1xyXG5cclxuXHRcdFx0XHRpZiAoY29uZmlnLnN0cmlwV2hpdGVzcGFjZXMpXHJcblx0XHRcdFx0XHRyZXN1bHQuX190ZXh0ID0gcmVzdWx0Ll9fdGV4dC50cmltKCk7XHJcblxyXG5cdFx0XHRcdGRlbGV0ZSByZXN1bHRbXCIjdGV4dFwiXTtcclxuXHJcblx0XHRcdFx0aWYgKGNvbmZpZy5hcnJheUFjY2Vzc0Zvcm0gPT09IFwicHJvcGVydHlcIilcclxuXHRcdFx0XHRcdGRlbGV0ZSByZXN1bHRbXCIjdGV4dF9hc0FycmF5XCJdO1xyXG5cclxuXHRcdFx0XHRyZXN1bHQuX190ZXh0ID0gY29udmVydFRvRGF0ZUlmUmVxdWlyZWQocmVzdWx0Ll9fdGV4dCwgXCIjdGV4dFwiLCBlbGVtZW50UGF0aCArIFwiLiN0ZXh0XCIpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAocmVzdWx0Lmhhc093blByb3BlcnR5KCcjY2RhdGEtc2VjdGlvbicpKSB7XHJcblx0XHRcdFx0cmVzdWx0Ll9fY2RhdGEgPSByZXN1bHRbXCIjY2RhdGEtc2VjdGlvblwiXTtcclxuXHRcdFx0XHRkZWxldGUgcmVzdWx0W1wiI2NkYXRhLXNlY3Rpb25cIl07XHJcblxyXG5cdFx0XHRcdGlmIChjb25maWcuYXJyYXlBY2Nlc3NGb3JtID09PSBcInByb3BlcnR5XCIpXHJcblx0XHRcdFx0XHRkZWxldGUgcmVzdWx0W1wiI2NkYXRhLXNlY3Rpb25fYXNBcnJheVwiXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHJlc3VsdC5fX2NudCA9PT0gMSAmJiByZXN1bHQuX190ZXh0ICYmICFjb25maWcua2VlcFRleHQpIHtcclxuXHRcdFx0XHRyZXN1bHQgPSByZXN1bHQuX190ZXh0O1xyXG5cdFx0XHR9IGVsc2UgaWYgKHJlc3VsdC5fX2NudCA9PT0gMCAmJiBjb25maWcuZW1wdHlOb2RlRm9ybSA9PT0gXCJ0ZXh0XCIpIHtcclxuXHRcdFx0XHRyZXN1bHQgPSAnJztcclxuXHRcdFx0fSBlbHNlIGlmIChyZXN1bHQuX19jbnQgPiAxICYmIHJlc3VsdC5fX3RleHQgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuc2tpcEVtcHR5VGV4dE5vZGVzRm9yT2JqKSB7XHJcblx0XHRcdFx0aWYgKGNvbmZpZy5zdHJpcFdoaXRlc3BhY2VzICYmIHJlc3VsdC5fX3RleHQgPT09IFwiXCIgfHwgcmVzdWx0Ll9fdGV4dC50cmltKCkgPT09IFwiXCIpIHtcclxuXHRcdFx0XHRcdGRlbGV0ZSByZXN1bHQuX190ZXh0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRkZWxldGUgcmVzdWx0Ll9fY250O1xyXG5cclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIFdlIGFyZSBjaGVja2luZyBpZiB3ZSBhcmUgY3JlYXRpbmcgYSBfX2NkYXRhIHByb3BlcnR5IG9yIGlmIHdlIGp1c3QgYWRkIHRoZSBjb250ZW50IG9mIGNkYXRhIGluc2lkZSByZXN1bHQuXHJcblx0XHRcdCAqIEJ1dCwgaWYgd2UgaGF2ZSBhIHByb3BlcnR5IGluc2lkZSB4bWwgdGFnICg8dGFnIFBST1BFUlRZPVwiMVwiPjwvdGFnPiksIGFuZCBhIGNkYXRhIGluc2lkZSwgd2UgY2FuJ3QgaWdub3JlIGl0LlxyXG5cdFx0XHQgKiBJbiB0aGlzIGNhc2Ugd2UgYXJlIGtlZXBpbmcgX19jZGF0YSBwcm9wZXJ0eS5cclxuXHRcdFx0ICovXHJcblx0XHRcdGlmICghY29uZmlnLmtlZXBDRGF0YSAmJiAoIXJlc3VsdC5oYXNPd25Qcm9wZXJ0eSgnX190ZXh0JykgJiYgcmVzdWx0Lmhhc093blByb3BlcnR5KCdfX2NkYXRhJykgJiYgT2JqZWN0LmtleXMocmVzdWx0KS5sZW5ndGggPT09IDEpKSB7XHJcblx0XHRcdFx0cmV0dXJuIChyZXN1bHQuX19jZGF0YSA/IHJlc3VsdC5fX2NkYXRhIDogJycpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoY29uZmlnLmVuYWJsZVRvU3RyaW5nRnVuYyAmJiAocmVzdWx0Ll9fdGV4dCB8fCByZXN1bHQuX19jZGF0YSkpIHtcclxuXHRcdFx0XHRyZXN1bHQudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdFx0XHRcdHJldHVybiAodGhpcy5fX3RleHQgPyB0aGlzLl9fdGV4dCA6ICcnKSArICh0aGlzLl9fY2RhdGEgPyB0aGlzLl9fY2RhdGEgOiAnJyk7XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBkZXNlcmlhbGl6ZURvbUNoaWxkcmVuKG5vZGUsIHBhcmVudFBhdGgpIHtcclxuXHRcdFx0aWYgKG5vZGUubm9kZVR5cGUgPT09IERPTU5vZGVUeXBlcy5ET0NVTUVOVF9OT0RFKSB7XHJcblx0XHRcdFx0cmV0dXJuIGRlc2VyaWFsaXplUm9vdEVsZW1lbnRDaGlsZHJlbihub2RlKTtcclxuXHRcdFx0fSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSBET01Ob2RlVHlwZXMuRUxFTUVOVF9OT0RFKSB7XHJcblx0XHRcdFx0cmV0dXJuIGRlc2VyaWFsaXplRWxlbWVudENoaWxkcmVuKG5vZGUsIHBhcmVudFBhdGgpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IERPTU5vZGVUeXBlcy5URVhUX05PREUgfHwgbm9kZS5ub2RlVHlwZSA9PT0gRE9NTm9kZVR5cGVzLkNEQVRBX1NFQ1RJT05fTk9ERSkge1xyXG5cdFx0XHRcdHJldHVybiBub2RlLm5vZGVWYWx1ZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHNlcmlhbGl6ZVN0YXJ0VGFnKGpzT2JqZWN0LCBlbGVtZW50TmFtZSwgYXR0cmlidXRlTmFtZXMsIHNlbGZDbG9zaW5nKSB7XHJcblx0XHRcdHZhciByZXN1bHRTdHIgPSBcIjxcIiArICgoanNPYmplY3QgJiYganNPYmplY3QuX19wcmVmaXgpID8gKGpzT2JqZWN0Ll9fcHJlZml4ICsgXCI6XCIpIDogXCJcIikgKyBlbGVtZW50TmFtZTtcclxuXHJcblx0XHRcdGlmIChhdHRyaWJ1dGVOYW1lcykge1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXR0cmlidXRlTmFtZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdHZhciBhdHRyaWJ1dGVOYW1lID0gYXR0cmlidXRlTmFtZXNbaV07XHJcblx0XHRcdFx0XHR2YXIgYXR0cmlidXRlVmFsdWUgPSBqc09iamVjdFthdHRyaWJ1dGVOYW1lXTtcclxuXHJcblx0XHRcdFx0XHRpZiAoY29uZmlnLmVzY2FwZU1vZGUpXHJcblx0XHRcdFx0XHRcdGF0dHJpYnV0ZVZhbHVlID0gZXNjYXBlWG1sQ2hhcnMoYXR0cmlidXRlVmFsdWUpO1xyXG5cclxuXHRcdFx0XHRcdHJlc3VsdFN0ciArPSBcIiBcIiArIGF0dHJpYnV0ZU5hbWUuc3Vic3RyKGNvbmZpZy5hdHRyaWJ1dGVQcmVmaXgubGVuZ3RoKSArIFwiPVwiO1xyXG5cclxuXHRcdFx0XHRcdGlmIChjb25maWcudXNlRG91YmxlUXVvdGVzKVxyXG5cdFx0XHRcdFx0XHRyZXN1bHRTdHIgKz0gJ1wiJyArIGF0dHJpYnV0ZVZhbHVlICsgJ1wiJztcclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0cmVzdWx0U3RyICs9IFwiJ1wiICsgYXR0cmlidXRlVmFsdWUgKyBcIidcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICghc2VsZkNsb3NpbmcpXHJcblx0XHRcdFx0cmVzdWx0U3RyICs9IFwiPlwiO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmVzdWx0U3RyICs9IFwiIC8+XCI7XHJcblxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0U3RyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHNlcmlhbGl6ZUVuZFRhZyhqc09iamVjdCwgZWxlbWVudE5hbWUpIHtcclxuXHRcdFx0cmV0dXJuIFwiPC9cIiArICgoanNPYmplY3QgJiYganNPYmplY3QuX19wcmVmaXgpID8gKGpzT2JqZWN0Ll9fcHJlZml4ICsgXCI6XCIpIDogXCJcIikgKyBlbGVtZW50TmFtZSArIFwiPlwiO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGVuZHNXaXRoKHN0ciwgc3VmZml4KSB7XHJcblx0XHRcdHJldHVybiBzdHIuaW5kZXhPZihzdWZmaXgsIHN0ci5sZW5ndGggLSBzdWZmaXgubGVuZ3RoKSAhPT0gLTE7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gaXNTcGVjaWFsUHJvcGVydHkoanNvbk9iaiwgcHJvcGVydHlOYW1lKSB7XHJcblx0XHRcdGlmICgoY29uZmlnLmFycmF5QWNjZXNzRm9ybSA9PT0gXCJwcm9wZXJ0eVwiICYmIGVuZHNXaXRoKHByb3BlcnR5TmFtZS50b1N0cmluZygpLCAoXCJfYXNBcnJheVwiKSkpXHJcblx0XHRcdFx0fHwgcHJvcGVydHlOYW1lLnRvU3RyaW5nKCkuaW5kZXhPZihjb25maWcuYXR0cmlidXRlUHJlZml4KSA9PT0gMFxyXG5cdFx0XHRcdHx8IHByb3BlcnR5TmFtZS50b1N0cmluZygpLmluZGV4T2YoXCJfX1wiKSA9PT0gMFxyXG5cdFx0XHRcdHx8IChqc29uT2JqW3Byb3BlcnR5TmFtZV0gaW5zdGFuY2VvZiBGdW5jdGlvbikpXHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZ2V0RGF0YUVsZW1lbnRDb3VudChqc09iamVjdCkge1xyXG5cdFx0XHR2YXIgY291bnQgPSAwO1xyXG5cclxuXHRcdFx0aWYgKGpzT2JqZWN0IGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgcHJvcGVydHlOYW1lIGluIGpzT2JqZWN0KSB7XHJcblx0XHRcdFx0XHRpZiAoaXNTcGVjaWFsUHJvcGVydHkoanNPYmplY3QsIHByb3BlcnR5TmFtZSkpXHJcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0XHRcdGNvdW50Kys7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gY291bnQ7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZ2V0RGF0YUF0dHJpYnV0ZU5hbWVzKGpzT2JqZWN0KSB7XHJcblx0XHRcdHZhciBuYW1lcyA9IFtdO1xyXG5cclxuXHRcdFx0aWYgKGpzT2JqZWN0IGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgYXR0cmlidXRlTmFtZSBpbiBqc09iamVjdCkge1xyXG5cdFx0XHRcdFx0aWYgKGF0dHJpYnV0ZU5hbWUudG9TdHJpbmcoKS5pbmRleE9mKFwiX19cIikgPT09IC0xXHJcblx0XHRcdFx0XHRcdCYmIGF0dHJpYnV0ZU5hbWUudG9TdHJpbmcoKS5pbmRleE9mKGNvbmZpZy5hdHRyaWJ1dGVQcmVmaXgpID09PSAwKSB7XHJcblx0XHRcdFx0XHRcdG5hbWVzLnB1c2goYXR0cmlidXRlTmFtZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gbmFtZXM7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gc2VyaWFsaXplQ29tcGxleFRleHROb2RlQ29udGVudHModGV4dE5vZGUpIHtcclxuXHRcdFx0dmFyIHJlc3VsdCA9IFwiXCI7XHJcblxyXG5cdFx0XHRpZiAodGV4dE5vZGUuX19jZGF0YSkge1xyXG5cdFx0XHRcdHJlc3VsdCArPSBcIjwhW0NEQVRBW1wiICsgdGV4dE5vZGUuX19jZGF0YSArIFwiXV0+XCI7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh0ZXh0Tm9kZS5fX3RleHQgfHwgdHlwZW9mICh0ZXh0Tm9kZS5fX3RleHQpID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgKHRleHROb2RlLl9fdGV4dCkgPT09ICdib29sZWFuJykge1xyXG5cdFx0XHRcdGlmIChjb25maWcuZXNjYXBlTW9kZSlcclxuXHRcdFx0XHRcdHJlc3VsdCArPSBlc2NhcGVYbWxDaGFycyh0ZXh0Tm9kZS5fX3RleHQpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHJlc3VsdCArPSB0ZXh0Tm9kZS5fX3RleHQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gc2VyaWFsaXplVGV4dE5vZGVDb250ZW50cyh0ZXh0Tm9kZSkge1xyXG5cdFx0XHR2YXIgcmVzdWx0ID0gXCJcIjtcclxuXHJcblx0XHRcdGlmICh0ZXh0Tm9kZSBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG5cdFx0XHRcdHJlc3VsdCArPSBzZXJpYWxpemVDb21wbGV4VGV4dE5vZGVDb250ZW50cyh0ZXh0Tm9kZSk7XHJcblx0XHRcdH0gZWxzZSBpZiAodGV4dE5vZGUgIT09IG51bGwpIHtcclxuXHRcdFx0XHRpZiAoY29uZmlnLmVzY2FwZU1vZGUpXHJcblx0XHRcdFx0XHRyZXN1bHQgKz0gZXNjYXBlWG1sQ2hhcnModGV4dE5vZGUpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHJlc3VsdCArPSB0ZXh0Tm9kZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBzZXJpYWxpemVBcnJheShlbGVtZW50QXJyYXksIGVsZW1lbnROYW1lLCBhdHRyaWJ1dGVzKSB7XHJcblx0XHRcdHZhciByZXN1bHQgPSBcIlwiO1xyXG5cclxuXHRcdFx0aWYgKGVsZW1lbnRBcnJheS5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHRyZXN1bHQgKz0gc2VyaWFsaXplU3RhcnRUYWcoZWxlbWVudEFycmF5LCBlbGVtZW50TmFtZSwgYXR0cmlidXRlcywgdHJ1ZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50QXJyYXkubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdHJlc3VsdCArPSBzZXJpYWxpemVKYXZhU2NyaXB0T2JqZWN0KGVsZW1lbnRBcnJheVtpXSwgZWxlbWVudE5hbWUsIGdldERhdGFBdHRyaWJ1dGVOYW1lcyhlbGVtZW50QXJyYXlbaV0pKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gc2VyaWFsaXplSmF2YVNjcmlwdE9iamVjdChlbGVtZW50LCBlbGVtZW50TmFtZSwgYXR0cmlidXRlcykge1xyXG5cdFx0XHR2YXIgcmVzdWx0ID0gXCJcIjtcclxuXHJcblx0XHRcdC8vIEZpbHRlciBvdXQgZWxlbWVudHNcclxuXHRcdFx0aWYgKGNvbmZpZy5qc0F0dHJpYnV0ZUZpbHRlciAmJiBjb25maWcuanNBdHRyaWJ1dGVGaWx0ZXIuY2FsbChudWxsLCBlbGVtZW50TmFtZSwgZWxlbWVudCkpIHtcclxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIENvbnZlcnQgZWxlbWVudFxyXG5cdFx0XHRpZiAoY29uZmlnLmpzQXR0cmlidXRlQ29udmVydGVyKSB7XHJcblx0XHRcdFx0ZWxlbWVudCA9IGNvbmZpZy5qc0F0dHJpYnV0ZUNvbnZlcnRlci5jYWxsKG51bGwsIGVsZW1lbnROYW1lLCBlbGVtZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoKGVsZW1lbnQgPT09IHVuZGVmaW5lZCB8fCBlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09ICcnKSAmJiBjb25maWcuc2VsZkNsb3NpbmdFbGVtZW50cykge1xyXG5cdFx0XHRcdHJlc3VsdCArPSBzZXJpYWxpemVTdGFydFRhZyhlbGVtZW50LCBlbGVtZW50TmFtZSwgYXR0cmlidXRlcywgdHJ1ZSk7XHJcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdvYmplY3QnKSB7XHJcblx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlbGVtZW50KSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xyXG5cdFx0XHRcdFx0cmVzdWx0ICs9IHNlcmlhbGl6ZUFycmF5KGVsZW1lbnQsIGVsZW1lbnROYW1lLCBhdHRyaWJ1dGVzKTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBEYXRlKSB7XHJcblx0XHRcdFx0XHRyZXN1bHQgKz0gc2VyaWFsaXplU3RhcnRUYWcoZWxlbWVudCwgZWxlbWVudE5hbWUsIGF0dHJpYnV0ZXMsIGZhbHNlKTtcclxuXHRcdFx0XHRcdC8vIFNlcmlhbGl6ZSBkYXRlXHJcblx0XHRcdFx0XHRyZXN1bHQgKz0gY29uZmlnLmpzRGF0ZVVUQyA/IGVsZW1lbnQudG9VVENTdHJpbmcoKSA6IGVsZW1lbnQudG9JU09TdHJpbmcoKTtcclxuXHRcdFx0XHRcdHJlc3VsdCArPSBzZXJpYWxpemVFbmRUYWcoZWxlbWVudCwgZWxlbWVudE5hbWUpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR2YXIgY2hpbGRFbGVtZW50Q291bnQgPSBnZXREYXRhRWxlbWVudENvdW50KGVsZW1lbnQpO1xyXG5cdFx0XHRcdFx0aWYgKGNoaWxkRWxlbWVudENvdW50ID4gMCB8fCB0eXBlb2YgKGVsZW1lbnQuX190ZXh0KSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIChlbGVtZW50Ll9fdGV4dCkgPT09ICdib29sZWFuJyB8fCBlbGVtZW50Ll9fdGV4dCB8fCBlbGVtZW50Ll9fY2RhdGEpIHtcclxuXHRcdFx0XHRcdFx0cmVzdWx0ICs9IHNlcmlhbGl6ZVN0YXJ0VGFnKGVsZW1lbnQsIGVsZW1lbnROYW1lLCBhdHRyaWJ1dGVzLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdHJlc3VsdCArPSBzZXJpYWxpemVKYXZhU2NyaXB0T2JqZWN0Q2hpbGRyZW4oZWxlbWVudCk7XHJcblx0XHRcdFx0XHRcdHJlc3VsdCArPSBzZXJpYWxpemVFbmRUYWcoZWxlbWVudCwgZWxlbWVudE5hbWUpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjb25maWcuc2VsZkNsb3NpbmdFbGVtZW50cykge1xyXG5cdFx0XHRcdFx0XHRyZXN1bHQgKz0gc2VyaWFsaXplU3RhcnRUYWcoZWxlbWVudCwgZWxlbWVudE5hbWUsIGF0dHJpYnV0ZXMsIHRydWUpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cmVzdWx0ICs9IHNlcmlhbGl6ZVN0YXJ0VGFnKGVsZW1lbnQsIGVsZW1lbnROYW1lLCBhdHRyaWJ1dGVzLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdHJlc3VsdCArPSBzZXJpYWxpemVFbmRUYWcoZWxlbWVudCwgZWxlbWVudE5hbWUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQgKz0gc2VyaWFsaXplU3RhcnRUYWcoZWxlbWVudCwgZWxlbWVudE5hbWUsIGF0dHJpYnV0ZXMsIGZhbHNlKTtcclxuXHRcdFx0XHRyZXN1bHQgKz0gc2VyaWFsaXplVGV4dE5vZGVDb250ZW50cyhlbGVtZW50KTtcclxuXHRcdFx0XHRyZXN1bHQgKz0gc2VyaWFsaXplRW5kVGFnKGVsZW1lbnQsIGVsZW1lbnROYW1lKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBzZXJpYWxpemVKYXZhU2NyaXB0T2JqZWN0Q2hpbGRyZW4oanNPYmplY3QpIHtcclxuXHRcdFx0dmFyIHJlc3VsdCA9IFwiXCI7XHJcblxyXG5cdFx0XHR2YXIgZWxlbWVudENvdW50ID0gZ2V0RGF0YUVsZW1lbnRDb3VudChqc09iamVjdCk7XHJcblxyXG5cdFx0XHRpZiAoZWxlbWVudENvdW50ID4gMCkge1xyXG5cdFx0XHRcdGZvciAodmFyIGVsZW1lbnROYW1lIGluIGpzT2JqZWN0KSB7XHJcblx0XHRcdFx0XHRpZiAoaXNTcGVjaWFsUHJvcGVydHkoanNPYmplY3QsIGVsZW1lbnROYW1lKSlcclxuXHRcdFx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGVsZW1lbnQgPSBqc09iamVjdFtlbGVtZW50TmFtZV07XHJcblx0XHRcdFx0XHR2YXIgYXR0cmlidXRlcyA9IGdldERhdGFBdHRyaWJ1dGVOYW1lcyhlbGVtZW50KTtcclxuXHJcblx0XHRcdFx0XHRyZXN1bHQgKz0gc2VyaWFsaXplSmF2YVNjcmlwdE9iamVjdChlbGVtZW50LCBlbGVtZW50TmFtZSwgYXR0cmlidXRlcyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXN1bHQgKz0gc2VyaWFsaXplVGV4dE5vZGVDb250ZW50cyhqc09iamVjdCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHBhcnNlWG1sKHhtbCkge1xyXG5cdFx0XHRpZiAoeG1sID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHR5cGVvZiB4bWwgIT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIHBhcnNlciA9IG51bGw7XHJcblx0XHRcdHZhciBkb21Ob2RlID0gbnVsbDtcclxuXHJcblx0XHRcdGlmIChDdXN0b21ET01QYXJzZXIpIHtcclxuXHRcdFx0XHQvLyBUaGlzIGJyYW5jaCBpcyB1c2VkIGZvciBub2RlLmpzLCB3aXRoIHRoZSB4bWxkb20gcGFyc2VyLlxyXG5cdFx0XHRcdHBhcnNlciA9IG5ldyBDdXN0b21ET01QYXJzZXIoY29uZmlnLnhtbGRvbU9wdGlvbnMpO1xyXG5cclxuXHRcdFx0XHRkb21Ob2RlID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyh4bWwsIFwidGV4dC94bWxcIik7XHJcblx0XHRcdH0gZWxzZSBpZiAod2luZG93ICYmIHdpbmRvdy5ET01QYXJzZXIpIHtcclxuXHRcdFx0XHRwYXJzZXIgPSBuZXcgd2luZG93LkRPTVBhcnNlcigpO1xyXG5cdFx0XHRcdHZhciBwYXJzZXJlcnJvck5TID0gbnVsbDtcclxuXHJcblx0XHRcdFx0dmFyIGlzSUVQYXJzZXIgPSB3aW5kb3cuQWN0aXZlWE9iamVjdCB8fCBcIkFjdGl2ZVhPYmplY3RcIiBpbiB3aW5kb3c7XHJcblxyXG5cdFx0XHRcdC8vIElFOSsgbm93IGlzIGhlcmVcclxuXHRcdFx0XHRpZiAoIWlzSUVQYXJzZXIgJiYgZG9jdW1lbnQuYWxsICYmICFkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKSB7XHJcblx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHRwYXJzZXJlcnJvck5TID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhcIklOVkFMSURcIiwgXCJ0ZXh0L3htbFwiKS5jaGlsZE5vZGVzWzBdLm5hbWVzcGFjZVVSSTtcclxuXHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdFx0XHRwYXJzZXJlcnJvck5TID0gbnVsbDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRkb21Ob2RlID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyh4bWwsIFwidGV4dC94bWxcIik7XHJcblx0XHRcdFx0XHRpZiAocGFyc2VyZXJyb3JOUyAhPT0gbnVsbCAmJiBkb21Ob2RlLmdldEVsZW1lbnRzQnlUYWdOYW1lTlMocGFyc2VyZXJyb3JOUywgXCJwYXJzZXJlcnJvclwiKS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRcdGRvbU5vZGUgPSBudWxsO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdFx0ZG9tTm9kZSA9IG51bGw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIElFIDooXHJcblx0XHRcdFx0aWYgKHhtbC5pbmRleE9mKFwiPD9cIikgPT09IDApIHtcclxuXHRcdFx0XHRcdHhtbCA9IHhtbC5zdWJzdHIoeG1sLmluZGV4T2YoXCI/PlwiKSArIDIpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LyogZ2xvYmFsIEFjdGl2ZVhPYmplY3QgKi9cclxuXHRcdFx0XHRkb21Ob2RlID0gbmV3IEFjdGl2ZVhPYmplY3QoXCJNaWNyb3NvZnQuWE1MRE9NXCIpO1xyXG5cdFx0XHRcdGRvbU5vZGUuYXN5bmMgPSBcImZhbHNlXCI7XHJcblx0XHRcdFx0ZG9tTm9kZS5sb2FkWE1MKHhtbCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBkb21Ob2RlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuYXNBcnJheSA9IGZ1bmN0aW9uIGFzQXJyYXkocHJvcCkge1xyXG5cdFx0XHRpZiAocHJvcCA9PT0gdW5kZWZpbmVkIHx8IHByb3AgPT09IG51bGwpIHtcclxuXHRcdFx0XHRyZXR1cm4gW107XHJcblx0XHRcdH0gZWxzZSBpZiAocHJvcCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcblx0XHRcdFx0cmV0dXJuIHByb3A7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIFtwcm9wXTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLnRvWG1sRGF0ZVRpbWUgPSBmdW5jdGlvbiB0b1htbERhdGVUaW1lKGR0KSB7XHJcblx0XHRcdGlmIChkdCBpbnN0YW5jZW9mIERhdGUpIHtcclxuXHRcdFx0XHRyZXR1cm4gZHQudG9JU09TdHJpbmcoKTtcclxuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgKGR0KSA9PT0gJ251bWJlcicpIHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IERhdGUoZHQpLnRvSVNPU3RyaW5nKCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5hc0RhdGVUaW1lID0gZnVuY3Rpb24gYXNEYXRlVGltZShwcm9wKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgKHByb3ApID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0cmV0dXJuIHhtbERhdGVUaW1lVG9EYXRlKHByb3ApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBwcm9wO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qXHJcblx0XHRcdEludGVybmFsbHkgdGhlIGxvZ2ljIHdvcmtzIGluIGEgY3ljbGU6XHJcblx0XHRcdERPTS0+SlMgLSBpbXBsZW1lbnRlZCBieSBjdXN0b20gbG9naWMgKGRlc2VyaWFsaXphdGlvbikuXHJcblx0XHRcdEpTLT5YTUwgLSBpbXBsZW1lbnRlZCBieSBjdXN0b20gbG9naWMgKHNlcmlhbGl6YXRpb24pLlxyXG5cdFx0XHRYTUwtPkRPTSAtIGltcGxlbWVudGVkIGJ5IGJyb3dzZXIuXHJcblx0XHQqL1xyXG5cclxuXHRcdC8vIFRyYW5zZm9ybW5zIGFuIFhNTCBzdHJpbmcgaW50byBET00tdHJlZVxyXG5cdFx0dGhpcy54bWwyZG9tID0gZnVuY3Rpb24geG1sMmRvbSh4bWwpIHtcclxuXHRcdFx0cmV0dXJuIHBhcnNlWG1sKHhtbCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8vIFRyYW5zZm9ybXMgYSBET00gdHJlZSB0byBKYXZhU2NyaXB0IG9iamVjdHMuXHJcblx0XHR0aGlzLmRvbTJqcyA9IGZ1bmN0aW9uIGRvbTJqcyhkb21Ob2RlKSB7XHJcblx0XHRcdHJldHVybiBkZXNlcmlhbGl6ZURvbUNoaWxkcmVuKGRvbU5vZGUsIG51bGwpO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvLyBUcmFuc2Zvcm1zIEphdmFTY3JpcHQgb2JqZWN0cyB0byBhIERPTSB0cmVlLlxyXG5cdFx0dGhpcy5qczJkb20gPSBmdW5jdGlvbiBqczJkb20oanNPYmplY3QpIHtcclxuXHRcdFx0dmFyIHhtbCA9IHRoaXMuanMyeG1sKGpzT2JqZWN0KTtcclxuXHRcdFx0cmV0dXJuIHBhcnNlWG1sKHhtbCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8vIFRyYW5zZm9ybW5zIGFuIFhNTCBzdHJpbmcgaW50byBKYXZhU2NyaXB0IG9iamVjdHMuXHJcblx0XHR0aGlzLnhtbDJqcyA9IGZ1bmN0aW9uIHhtbDJqcyh4bWwpIHtcclxuXHRcdFx0dmFyIGRvbU5vZGUgPSBwYXJzZVhtbCh4bWwpO1xyXG5cdFx0XHRpZiAoZG9tTm9kZSAhPSBudWxsKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmRvbTJqcyhkb21Ob2RlKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvLyBUcmFuc2Zvcm1zIEphdmFTY3JpcHQgb2JqZWN0cyBpbnRvIGFuIFhNTCBzdHJpbmcuXHJcblx0XHR0aGlzLmpzMnhtbCA9IGZ1bmN0aW9uIGpzMnhtbChqc09iamVjdCkge1xyXG5cdFx0XHRyZXR1cm4gc2VyaWFsaXplSmF2YVNjcmlwdE9iamVjdENoaWxkcmVuKGpzT2JqZWN0KTtcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5nZXRWZXJzaW9uID0gZnVuY3Rpb24gZ2V0VmVyc2lvbigpIHtcclxuXHRcdFx0cmV0dXJuIFZFUlNJT047XHJcblx0XHR9O1xyXG5cdH07XHJcbn0pO1xyXG4iLCJ2YXIgZ2xvYmFsJDEgPSAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6XG4gICAgICAgICAgICB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOlxuICAgICAgICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KTtcblxudmFyIGxvb2t1cCA9IFtdO1xudmFyIHJldkxvb2t1cCA9IFtdO1xudmFyIEFyciA9IHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyA/IFVpbnQ4QXJyYXkgOiBBcnJheTtcbnZhciBpbml0ZWQgPSBmYWxzZTtcbmZ1bmN0aW9uIGluaXQgKCkge1xuICBpbml0ZWQgPSB0cnVlO1xuICB2YXIgY29kZSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJztcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvZGUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICBsb29rdXBbaV0gPSBjb2RlW2ldO1xuICAgIHJldkxvb2t1cFtjb2RlLmNoYXJDb2RlQXQoaSldID0gaTtcbiAgfVxuXG4gIHJldkxvb2t1cFsnLScuY2hhckNvZGVBdCgwKV0gPSA2MjtcbiAgcmV2TG9va3VwWydfJy5jaGFyQ29kZUF0KDApXSA9IDYzO1xufVxuXG5mdW5jdGlvbiB0b0J5dGVBcnJheSAoYjY0KSB7XG4gIGlmICghaW5pdGVkKSB7XG4gICAgaW5pdCgpO1xuICB9XG4gIHZhciBpLCBqLCBsLCB0bXAsIHBsYWNlSG9sZGVycywgYXJyO1xuICB2YXIgbGVuID0gYjY0Lmxlbmd0aDtcblxuICBpZiAobGVuICUgNCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuICB9XG5cbiAgLy8gdGhlIG51bWJlciBvZiBlcXVhbCBzaWducyAocGxhY2UgaG9sZGVycylcbiAgLy8gaWYgdGhlcmUgYXJlIHR3byBwbGFjZWhvbGRlcnMsIHRoYW4gdGhlIHR3byBjaGFyYWN0ZXJzIGJlZm9yZSBpdFxuICAvLyByZXByZXNlbnQgb25lIGJ5dGVcbiAgLy8gaWYgdGhlcmUgaXMgb25seSBvbmUsIHRoZW4gdGhlIHRocmVlIGNoYXJhY3RlcnMgYmVmb3JlIGl0IHJlcHJlc2VudCAyIGJ5dGVzXG4gIC8vIHRoaXMgaXMganVzdCBhIGNoZWFwIGhhY2sgdG8gbm90IGRvIGluZGV4T2YgdHdpY2VcbiAgcGxhY2VIb2xkZXJzID0gYjY0W2xlbiAtIDJdID09PSAnPScgPyAyIDogYjY0W2xlbiAtIDFdID09PSAnPScgPyAxIDogMDtcblxuICAvLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcbiAgYXJyID0gbmV3IEFycihsZW4gKiAzIC8gNCAtIHBsYWNlSG9sZGVycyk7XG5cbiAgLy8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuICBsID0gcGxhY2VIb2xkZXJzID4gMCA/IGxlbiAtIDQgOiBsZW47XG5cbiAgdmFyIEwgPSAwO1xuXG4gIGZvciAoaSA9IDAsIGogPSAwOyBpIDwgbDsgaSArPSA0LCBqICs9IDMpIHtcbiAgICB0bXAgPSAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxOCkgfCAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgMTIpIHwgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildIDw8IDYpIHwgcmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAzKV07XG4gICAgYXJyW0wrK10gPSAodG1wID4+IDE2KSAmIDB4RkY7XG4gICAgYXJyW0wrK10gPSAodG1wID4+IDgpICYgMHhGRjtcbiAgICBhcnJbTCsrXSA9IHRtcCAmIDB4RkY7XG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzID09PSAyKSB7XG4gICAgdG1wID0gKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMikgfCAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPj4gNCk7XG4gICAgYXJyW0wrK10gPSB0bXAgJiAweEZGO1xuICB9IGVsc2UgaWYgKHBsYWNlSG9sZGVycyA9PT0gMSkge1xuICAgIHRtcCA9IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDEwKSB8IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCA0KSB8IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA+PiAyKTtcbiAgICBhcnJbTCsrXSA9ICh0bXAgPj4gOCkgJiAweEZGO1xuICAgIGFycltMKytdID0gdG1wICYgMHhGRjtcbiAgfVxuXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcbiAgcmV0dXJuIGxvb2t1cFtudW0gPj4gMTggJiAweDNGXSArIGxvb2t1cFtudW0gPj4gMTIgJiAweDNGXSArIGxvb2t1cFtudW0gPj4gNiAmIDB4M0ZdICsgbG9va3VwW251bSAmIDB4M0ZdXG59XG5cbmZ1bmN0aW9uIGVuY29kZUNodW5rICh1aW50OCwgc3RhcnQsIGVuZCkge1xuICB2YXIgdG1wO1xuICB2YXIgb3V0cHV0ID0gW107XG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSArPSAzKSB7XG4gICAgdG1wID0gKHVpbnQ4W2ldIDw8IDE2KSArICh1aW50OFtpICsgMV0gPDwgOCkgKyAodWludDhbaSArIDJdKTtcbiAgICBvdXRwdXQucHVzaCh0cmlwbGV0VG9CYXNlNjQodG1wKSk7XG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBmcm9tQnl0ZUFycmF5ICh1aW50OCkge1xuICBpZiAoIWluaXRlZCkge1xuICAgIGluaXQoKTtcbiAgfVxuICB2YXIgdG1wO1xuICB2YXIgbGVuID0gdWludDgubGVuZ3RoO1xuICB2YXIgZXh0cmFCeXRlcyA9IGxlbiAlIDM7IC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG4gIHZhciBvdXRwdXQgPSAnJztcbiAgdmFyIHBhcnRzID0gW107XG4gIHZhciBtYXhDaHVua0xlbmd0aCA9IDE2MzgzOyAvLyBtdXN0IGJlIG11bHRpcGxlIG9mIDNcblxuICAvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG4gIGZvciAodmFyIGkgPSAwLCBsZW4yID0gbGVuIC0gZXh0cmFCeXRlczsgaSA8IGxlbjI7IGkgKz0gbWF4Q2h1bmtMZW5ndGgpIHtcbiAgICBwYXJ0cy5wdXNoKGVuY29kZUNodW5rKHVpbnQ4LCBpLCAoaSArIG1heENodW5rTGVuZ3RoKSA+IGxlbjIgPyBsZW4yIDogKGkgKyBtYXhDaHVua0xlbmd0aCkpKTtcbiAgfVxuXG4gIC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcbiAgaWYgKGV4dHJhQnl0ZXMgPT09IDEpIHtcbiAgICB0bXAgPSB1aW50OFtsZW4gLSAxXTtcbiAgICBvdXRwdXQgKz0gbG9va3VwW3RtcCA+PiAyXTtcbiAgICBvdXRwdXQgKz0gbG9va3VwWyh0bXAgPDwgNCkgJiAweDNGXTtcbiAgICBvdXRwdXQgKz0gJz09JztcbiAgfSBlbHNlIGlmIChleHRyYUJ5dGVzID09PSAyKSB7XG4gICAgdG1wID0gKHVpbnQ4W2xlbiAtIDJdIDw8IDgpICsgKHVpbnQ4W2xlbiAtIDFdKTtcbiAgICBvdXRwdXQgKz0gbG9va3VwW3RtcCA+PiAxMF07XG4gICAgb3V0cHV0ICs9IGxvb2t1cFsodG1wID4+IDQpICYgMHgzRl07XG4gICAgb3V0cHV0ICs9IGxvb2t1cFsodG1wIDw8IDIpICYgMHgzRl07XG4gICAgb3V0cHV0ICs9ICc9JztcbiAgfVxuXG4gIHBhcnRzLnB1c2gob3V0cHV0KTtcblxuICByZXR1cm4gcGFydHMuam9pbignJylcbn1cblxuZnVuY3Rpb24gcmVhZCAoYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbTtcbiAgdmFyIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDE7XG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxO1xuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDE7XG4gIHZhciBuQml0cyA9IC03O1xuICB2YXIgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwO1xuICB2YXIgZCA9IGlzTEUgPyAtMSA6IDE7XG4gIHZhciBzID0gYnVmZmVyW29mZnNldCArIGldO1xuXG4gIGkgKz0gZDtcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKTtcbiAgcyA+Pj0gKC1uQml0cyk7XG4gIG5CaXRzICs9IGVMZW47XG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSBlICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSk7XG4gIGUgPj49ICgtbkJpdHMpO1xuICBuQml0cyArPSBtTGVuO1xuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gbSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhcztcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiAoKHMgPyAtMSA6IDEpICogSW5maW5pdHkpXG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKTtcbiAgICBlID0gZSAtIGVCaWFzO1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pXG59XG5cbmZ1bmN0aW9uIHdyaXRlIChidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgYztcbiAgdmFyIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDE7XG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxO1xuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDE7XG4gIHZhciBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMCk7XG4gIHZhciBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSk7XG4gIHZhciBkID0gaXNMRSA/IDEgOiAtMTtcbiAgdmFyIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDA7XG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSk7XG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDA7XG4gICAgZSA9IGVNYXg7XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpO1xuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLTtcbiAgICAgIGMgKj0gMjtcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKys7XG4gICAgICBjIC89IDI7XG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMDtcbiAgICAgIGUgPSBlTWF4O1xuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAodmFsdWUgKiBjIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKTtcbiAgICAgIGUgPSBlICsgZUJpYXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKTtcbiAgICAgIGUgPSAwO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBtTGVuID49IDg7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IG0gJiAweGZmLCBpICs9IGQsIG0gLz0gMjU2LCBtTGVuIC09IDgpIHt9XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbTtcbiAgZUxlbiArPSBtTGVuO1xuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpIHt9XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4O1xufVxuXG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxudmFyIElOU1BFQ1RfTUFYX0JZVEVTID0gNTA7XG5cbi8qKlxuICogSWYgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYDpcbiAqICAgPT09IHRydWUgICAgVXNlIFVpbnQ4QXJyYXkgaW1wbGVtZW50YXRpb24gKGZhc3Rlc3QpXG4gKiAgID09PSBmYWxzZSAgIFVzZSBPYmplY3QgaW1wbGVtZW50YXRpb24gKG1vc3QgY29tcGF0aWJsZSwgZXZlbiBJRTYpXG4gKlxuICogQnJvd3NlcnMgdGhhdCBzdXBwb3J0IHR5cGVkIGFycmF5cyBhcmUgSUUgMTArLCBGaXJlZm94IDQrLCBDaHJvbWUgNyssIFNhZmFyaSA1LjErLFxuICogT3BlcmEgMTEuNissIGlPUyA0LjIrLlxuICpcbiAqIER1ZSB0byB2YXJpb3VzIGJyb3dzZXIgYnVncywgc29tZXRpbWVzIHRoZSBPYmplY3QgaW1wbGVtZW50YXRpb24gd2lsbCBiZSB1c2VkIGV2ZW5cbiAqIHdoZW4gdGhlIGJyb3dzZXIgc3VwcG9ydHMgdHlwZWQgYXJyYXlzLlxuICpcbiAqIE5vdGU6XG4gKlxuICogICAtIEZpcmVmb3ggNC0yOSBsYWNrcyBzdXBwb3J0IGZvciBhZGRpbmcgbmV3IHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgIGluc3RhbmNlcyxcbiAqICAgICBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5NTQzOC5cbiAqXG4gKiAgIC0gQ2hyb21lIDktMTAgaXMgbWlzc2luZyB0aGUgYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbi5cbiAqXG4gKiAgIC0gSUUxMCBoYXMgYSBicm9rZW4gYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFycmF5cyBvZlxuICogICAgIGluY29ycmVjdCBsZW5ndGggaW4gc29tZSBzaXR1YXRpb25zLlxuXG4gKiBXZSBkZXRlY3QgdGhlc2UgYnVnZ3kgYnJvd3NlcnMgYW5kIHNldCBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgIHRvIGBmYWxzZWAgc28gdGhleVxuICogZ2V0IHRoZSBPYmplY3QgaW1wbGVtZW50YXRpb24sIHdoaWNoIGlzIHNsb3dlciBidXQgYmVoYXZlcyBjb3JyZWN0bHkuXG4gKi9cbkJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUID0gZ2xvYmFsJDEuVFlQRURfQVJSQVlfU1VQUE9SVCAhPT0gdW5kZWZpbmVkXG4gID8gZ2xvYmFsJDEuVFlQRURfQVJSQVlfU1VQUE9SVFxuICA6IHRydWU7XG5cbi8qXG4gKiBFeHBvcnQga01heExlbmd0aCBhZnRlciB0eXBlZCBhcnJheSBzdXBwb3J0IGlzIGRldGVybWluZWQuXG4gKi9cbmtNYXhMZW5ndGgoKTtcblxuZnVuY3Rpb24ga01heExlbmd0aCAoKSB7XG4gIHJldHVybiBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVFxuICAgID8gMHg3ZmZmZmZmZlxuICAgIDogMHgzZmZmZmZmZlxufVxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIgKHRoYXQsIGxlbmd0aCkge1xuICBpZiAoa01heExlbmd0aCgpIDwgbGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdHlwZWQgYXJyYXkgbGVuZ3RoJylcbiAgfVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICB0aGF0ID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKTtcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGU7XG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIGlmICh0aGF0ID09PSBudWxsKSB7XG4gICAgICB0aGF0ID0gbmV3IEJ1ZmZlcihsZW5ndGgpO1xuICAgIH1cbiAgICB0aGF0Lmxlbmd0aCA9IGxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiB0aGF0XG59XG5cbi8qKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBoYXZlIHRoZWlyXG4gKiBwcm90b3R5cGUgY2hhbmdlZCB0byBgQnVmZmVyLnByb3RvdHlwZWAuIEZ1cnRoZXJtb3JlLCBgQnVmZmVyYCBpcyBhIHN1YmNsYXNzIG9mXG4gKiBgVWludDhBcnJheWAsIHNvIHRoZSByZXR1cm5lZCBpbnN0YW5jZXMgd2lsbCBoYXZlIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBtZXRob2RzXG4gKiBhbmQgdGhlIGBVaW50OEFycmF5YCBtZXRob2RzLiBTcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdFxuICogcmV0dXJucyBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBUaGUgYFVpbnQ4QXJyYXlgIHByb3RvdHlwZSByZW1haW5zIHVubW9kaWZpZWQuXG4gKi9cblxuZnVuY3Rpb24gQnVmZmVyIChhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmICEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIC8vIENvbW1vbiBjYXNlLlxuICBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAodHlwZW9mIGVuY29kaW5nT3JPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdJZiBlbmNvZGluZyBpcyBzcGVjaWZpZWQgdGhlbiB0aGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZydcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGFsbG9jVW5zYWZlKHRoaXMsIGFyZylcbiAgfVxuICByZXR1cm4gZnJvbSh0aGlzLCBhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnBvb2xTaXplID0gODE5MjsgLy8gbm90IHVzZWQgYnkgdGhpcyBpbXBsZW1lbnRhdGlvblxuXG4vLyBUT0RPOiBMZWdhY3ksIG5vdCBuZWVkZWQgYW55bW9yZS4gUmVtb3ZlIGluIG5leHQgbWFqb3IgdmVyc2lvbi5cbkJ1ZmZlci5fYXVnbWVudCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgYXJyLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGU7XG4gIHJldHVybiBhcnJcbn07XG5cbmZ1bmN0aW9uIGZyb20gKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZyb21TdHJpbmcodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQpXG4gIH1cblxuICByZXR1cm4gZnJvbU9iamVjdCh0aGF0LCB2YWx1ZSlcbn1cblxuLyoqXG4gKiBGdW5jdGlvbmFsbHkgZXF1aXZhbGVudCB0byBCdWZmZXIoYXJnLCBlbmNvZGluZykgYnV0IHRocm93cyBhIFR5cGVFcnJvclxuICogaWYgdmFsdWUgaXMgYSBudW1iZXIuXG4gKiBCdWZmZXIuZnJvbShzdHJbLCBlbmNvZGluZ10pXG4gKiBCdWZmZXIuZnJvbShhcnJheSlcbiAqIEJ1ZmZlci5mcm9tKGJ1ZmZlcilcbiAqIEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyWywgYnl0ZU9mZnNldFssIGxlbmd0aF1dKVxuICoqL1xuQnVmZmVyLmZyb20gPSBmdW5jdGlvbiAodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gZnJvbShudWxsLCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufTtcblxuaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gIEJ1ZmZlci5wcm90b3R5cGUuX19wcm90b19fID0gVWludDhBcnJheS5wcm90b3R5cGU7XG4gIEJ1ZmZlci5fX3Byb3RvX18gPSBVaW50OEFycmF5O1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnNwZWNpZXMgJiZcbiAgICAgIEJ1ZmZlcltTeW1ib2wuc3BlY2llc10gPT09IEJ1ZmZlcikgO1xufVxuXG5mdW5jdGlvbiBhc3NlcnRTaXplIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfSBlbHNlIGlmIChzaXplIDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBuZWdhdGl2ZScpXG4gIH1cbn1cblxuZnVuY3Rpb24gYWxsb2MgKHRoYXQsIHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIGFzc2VydFNpemUoc2l6ZSk7XG4gIGlmIChzaXplIDw9IDApIHtcbiAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpXG4gIH1cbiAgaWYgKGZpbGwgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9ubHkgcGF5IGF0dGVudGlvbiB0byBlbmNvZGluZyBpZiBpdCdzIGEgc3RyaW5nLiBUaGlzXG4gICAgLy8gcHJldmVudHMgYWNjaWRlbnRhbGx5IHNlbmRpbmcgaW4gYSBudW1iZXIgdGhhdCB3b3VsZFxuICAgIC8vIGJlIGludGVycHJldHRlZCBhcyBhIHN0YXJ0IG9mZnNldC5cbiAgICByZXR1cm4gdHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJ1xuICAgICAgPyBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSkuZmlsbChmaWxsLCBlbmNvZGluZylcbiAgICAgIDogY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpLmZpbGwoZmlsbClcbiAgfVxuICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBmaWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogYWxsb2Moc2l6ZVssIGZpbGxbLCBlbmNvZGluZ11dKVxuICoqL1xuQnVmZmVyLmFsbG9jID0gZnVuY3Rpb24gKHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIHJldHVybiBhbGxvYyhudWxsLCBzaXplLCBmaWxsLCBlbmNvZGluZylcbn07XG5cbmZ1bmN0aW9uIGFsbG9jVW5zYWZlICh0aGF0LCBzaXplKSB7XG4gIGFzc2VydFNpemUoc2l6ZSk7XG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSA8IDAgPyAwIDogY2hlY2tlZChzaXplKSB8IDApO1xuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgIHRoYXRbaV0gPSAwO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gQnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKG51bGwsIHNpemUpXG59O1xuLyoqXG4gKiBFcXVpdmFsZW50IHRvIFNsb3dCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufTtcblxuZnVuY3Rpb24gZnJvbVN0cmluZyAodGhhdCwgc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAodHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJyB8fCBlbmNvZGluZyA9PT0gJycpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4JztcbiAgfVxuXG4gIGlmICghQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJlbmNvZGluZ1wiIG11c3QgYmUgYSB2YWxpZCBzdHJpbmcgZW5jb2RpbmcnKVxuICB9XG5cbiAgdmFyIGxlbmd0aCA9IGJ5dGVMZW5ndGgoc3RyaW5nLCBlbmNvZGluZykgfCAwO1xuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aCk7XG5cbiAgdmFyIGFjdHVhbCA9IHRoYXQud3JpdGUoc3RyaW5nLCBlbmNvZGluZyk7XG5cbiAgaWYgKGFjdHVhbCAhPT0gbGVuZ3RoKSB7XG4gICAgLy8gV3JpdGluZyBhIGhleCBzdHJpbmcsIGZvciBleGFtcGxlLCB0aGF0IGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVycyB3aWxsXG4gICAgLy8gY2F1c2UgZXZlcnl0aGluZyBhZnRlciB0aGUgZmlyc3QgaW52YWxpZCBjaGFyYWN0ZXIgdG8gYmUgaWdub3JlZC4gKGUuZy5cbiAgICAvLyAnYWJ4eGNkJyB3aWxsIGJlIHRyZWF0ZWQgYXMgJ2FiJylcbiAgICB0aGF0ID0gdGhhdC5zbGljZSgwLCBhY3R1YWwpO1xuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5TGlrZSAodGhhdCwgYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCA8IDAgPyAwIDogY2hlY2tlZChhcnJheS5sZW5ndGgpIHwgMDtcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhhdFtpXSA9IGFycmF5W2ldICYgMjU1O1xuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUJ1ZmZlciAodGhhdCwgYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICBhcnJheS5ieXRlTGVuZ3RoOyAvLyB0aGlzIHRocm93cyBpZiBgYXJyYXlgIGlzIG5vdCBhIHZhbGlkIEFycmF5QnVmZmVyXG5cbiAgaWYgKGJ5dGVPZmZzZXQgPCAwIHx8IGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0KSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ29mZnNldFxcJyBpcyBvdXQgb2YgYm91bmRzJylcbiAgfVxuXG4gIGlmIChhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCArIChsZW5ndGggfHwgMCkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnbGVuZ3RoXFwnIGlzIG91dCBvZiBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGJ5dGVPZmZzZXQgPT09IHVuZGVmaW5lZCAmJiBsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXkpO1xuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldCk7XG4gIH0gZWxzZSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcbiAgfVxuXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlLCBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIHRoYXQgPSBhcnJheTtcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGU7XG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIHRoYXQgPSBmcm9tQXJyYXlMaWtlKHRoYXQsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tT2JqZWN0ICh0aGF0LCBvYmopIHtcbiAgaWYgKGludGVybmFsSXNCdWZmZXIob2JqKSkge1xuICAgIHZhciBsZW4gPSBjaGVja2VkKG9iai5sZW5ndGgpIHwgMDtcbiAgICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbik7XG5cbiAgICBpZiAodGhhdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGF0XG4gICAgfVxuXG4gICAgb2JqLmNvcHkodGhhdCwgMCwgMCwgbGVuKTtcbiAgICByZXR1cm4gdGhhdFxuICB9XG5cbiAgaWYgKG9iaikge1xuICAgIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBvYmouYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHx8ICdsZW5ndGgnIGluIG9iaikge1xuICAgICAgaWYgKHR5cGVvZiBvYmoubGVuZ3RoICE9PSAnbnVtYmVyJyB8fCBpc25hbihvYmoubGVuZ3RoKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIDApXG4gICAgICB9XG4gICAgICByZXR1cm4gZnJvbUFycmF5TGlrZSh0aGF0LCBvYmopXG4gICAgfVxuXG4gICAgaWYgKG9iai50eXBlID09PSAnQnVmZmVyJyAmJiBpc0FycmF5KG9iai5kYXRhKSkge1xuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqLmRhdGEpXG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZywgQnVmZmVyLCBBcnJheUJ1ZmZlciwgQXJyYXksIG9yIGFycmF5LWxpa2Ugb2JqZWN0LicpXG59XG5cbmZ1bmN0aW9uIGNoZWNrZWQgKGxlbmd0aCkge1xuICAvLyBOb3RlOiBjYW5ub3QgdXNlIGBsZW5ndGggPCBrTWF4TGVuZ3RoKClgIGhlcmUgYmVjYXVzZSB0aGF0IGZhaWxzIHdoZW5cbiAgLy8gbGVuZ3RoIGlzIE5hTiAod2hpY2ggaXMgb3RoZXJ3aXNlIGNvZXJjZWQgdG8gemVyby4pXG4gIGlmIChsZW5ndGggPj0ga01heExlbmd0aCgpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gYWxsb2NhdGUgQnVmZmVyIGxhcmdlciB0aGFuIG1heGltdW0gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3NpemU6IDB4JyArIGtNYXhMZW5ndGgoKS50b1N0cmluZygxNikgKyAnIGJ5dGVzJylcbiAgfVxuICByZXR1cm4gbGVuZ3RoIHwgMFxufVxuQnVmZmVyLmlzQnVmZmVyID0gaXNCdWZmZXI7XG5mdW5jdGlvbiBpbnRlcm5hbElzQnVmZmVyIChiKSB7XG4gIHJldHVybiAhIShiICE9IG51bGwgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAoYSwgYikge1xuICBpZiAoIWludGVybmFsSXNCdWZmZXIoYSkgfHwgIWludGVybmFsSXNCdWZmZXIoYikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgbXVzdCBiZSBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChhID09PSBiKSByZXR1cm4gMFxuXG4gIHZhciB4ID0gYS5sZW5ndGg7XG4gIHZhciB5ID0gYi5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IE1hdGgubWluKHgsIHkpOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAoYVtpXSAhPT0gYltpXSkge1xuICAgICAgeCA9IGFbaV07XG4gICAgICB5ID0gYltpXTtcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufTtcblxuQnVmZmVyLmlzRW5jb2RpbmcgPSBmdW5jdGlvbiBpc0VuY29kaW5nIChlbmNvZGluZykge1xuICBzd2l0Y2ggKFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdsYXRpbjEnOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn07XG5cbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiBjb25jYXQgKGxpc3QsIGxlbmd0aCkge1xuICBpZiAoIWlzQXJyYXkobGlzdCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5hbGxvYygwKVxuICB9XG5cbiAgdmFyIGk7XG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGxlbmd0aCA9IDA7XG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICAgIGxlbmd0aCArPSBsaXN0W2ldLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICB2YXIgYnVmZmVyID0gQnVmZmVyLmFsbG9jVW5zYWZlKGxlbmd0aCk7XG4gIHZhciBwb3MgPSAwO1xuICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgIHZhciBidWYgPSBsaXN0W2ldO1xuICAgIGlmICghaW50ZXJuYWxJc0J1ZmZlcihidWYpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICAgIH1cbiAgICBidWYuY29weShidWZmZXIsIHBvcyk7XG4gICAgcG9zICs9IGJ1Zi5sZW5ndGg7XG4gIH1cbiAgcmV0dXJuIGJ1ZmZlclxufTtcblxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAoaW50ZXJuYWxJc0J1ZmZlcihzdHJpbmcpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5sZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgQXJyYXlCdWZmZXIuaXNWaWV3ID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAoQXJyYXlCdWZmZXIuaXNWaWV3KHN0cmluZykgfHwgc3RyaW5nIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5ieXRlTGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgc3RyaW5nID0gJycgKyBzdHJpbmc7XG4gIH1cblxuICB2YXIgbGVuID0gc3RyaW5nLmxlbmd0aDtcbiAgaWYgKGxlbiA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBVc2UgYSBmb3IgbG9vcCB0byBhdm9pZCByZWN1cnNpb25cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2U7XG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxlblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICBjYXNlIHVuZGVmaW5lZDpcbiAgICAgICAgcmV0dXJuIHV0ZjhUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gbGVuICogMlxuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGxlbiA+Pj4gMVxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgcmV0dXJuIHV0ZjhUb0J5dGVzKHN0cmluZykubGVuZ3RoIC8vIGFzc3VtZSB1dGY4XG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aDtcblxuZnVuY3Rpb24gc2xvd1RvU3RyaW5nIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZTtcblxuICAvLyBObyBuZWVkIHRvIHZlcmlmeSB0aGF0IFwidGhpcy5sZW5ndGggPD0gTUFYX1VJTlQzMlwiIHNpbmNlIGl0J3MgYSByZWFkLW9ubHlcbiAgLy8gcHJvcGVydHkgb2YgYSB0eXBlZCBhcnJheS5cblxuICAvLyBUaGlzIGJlaGF2ZXMgbmVpdGhlciBsaWtlIFN0cmluZyBub3IgVWludDhBcnJheSBpbiB0aGF0IHdlIHNldCBzdGFydC9lbmRcbiAgLy8gdG8gdGhlaXIgdXBwZXIvbG93ZXIgYm91bmRzIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgb3V0IG9mIHJhbmdlLlxuICAvLyB1bmRlZmluZWQgaXMgaGFuZGxlZCBzcGVjaWFsbHkgYXMgcGVyIEVDTUEtMjYyIDZ0aCBFZGl0aW9uLFxuICAvLyBTZWN0aW9uIDEzLjMuMy43IFJ1bnRpbWUgU2VtYW50aWNzOiBLZXllZEJpbmRpbmdJbml0aWFsaXphdGlvbi5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQgfHwgc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSAwO1xuICB9XG4gIC8vIFJldHVybiBlYXJseSBpZiBzdGFydCA+IHRoaXMubGVuZ3RoLiBEb25lIGhlcmUgdG8gcHJldmVudCBwb3RlbnRpYWwgdWludDMyXG4gIC8vIGNvZXJjaW9uIGZhaWwgYmVsb3cuXG4gIGlmIChzdGFydCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoZW5kID09PSB1bmRlZmluZWQgfHwgZW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICBlbmQgPSB0aGlzLmxlbmd0aDtcbiAgfVxuXG4gIGlmIChlbmQgPD0gMCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgLy8gRm9yY2UgY29lcnNpb24gdG8gdWludDMyLiBUaGlzIHdpbGwgYWxzbyBjb2VyY2UgZmFsc2V5L05hTiB2YWx1ZXMgdG8gMC5cbiAgZW5kID4+Pj0gMDtcbiAgc3RhcnQgPj4+PSAwO1xuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnO1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHV0ZjE2bGVTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoZW5jb2RpbmcgKyAnJykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuXG4vLyBUaGUgcHJvcGVydHkgaXMgdXNlZCBieSBgQnVmZmVyLmlzQnVmZmVyYCBhbmQgYGlzLWJ1ZmZlcmAgKGluIFNhZmFyaSA1LTcpIHRvIGRldGVjdFxuLy8gQnVmZmVyIGluc3RhbmNlcy5cbkJ1ZmZlci5wcm90b3R5cGUuX2lzQnVmZmVyID0gdHJ1ZTtcblxuZnVuY3Rpb24gc3dhcCAoYiwgbiwgbSkge1xuICB2YXIgaSA9IGJbbl07XG4gIGJbbl0gPSBiW21dO1xuICBiW21dID0gaTtcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMTYgPSBmdW5jdGlvbiBzd2FwMTYgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGg7XG4gIGlmIChsZW4gJSAyICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAxNi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMSk7XG4gIH1cbiAgcmV0dXJuIHRoaXNcbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDMyID0gZnVuY3Rpb24gc3dhcDMyICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoO1xuICBpZiAobGVuICUgNCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMzItYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDMpO1xuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyAyKTtcbiAgfVxuICByZXR1cm4gdGhpc1xufTtcblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwNjQgPSBmdW5jdGlvbiBzd2FwNjQgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGg7XG4gIGlmIChsZW4gJSA4ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA2NC1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA4KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgNyk7XG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDYpO1xuICAgIHN3YXAodGhpcywgaSArIDIsIGkgKyA1KTtcbiAgICBzd2FwKHRoaXMsIGkgKyAzLCBpICsgNCk7XG4gIH1cbiAgcmV0dXJuIHRoaXNcbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCB8IDA7XG4gIGlmIChsZW5ndGggPT09IDApIHJldHVybiAnJ1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCAwLCBsZW5ndGgpXG4gIHJldHVybiBzbG93VG9TdHJpbmcuYXBwbHkodGhpcywgYXJndW1lbnRzKVxufTtcblxuQnVmZmVyLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMgKGIpIHtcbiAgaWYgKCFpbnRlcm5hbElzQnVmZmVyKGIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgaWYgKHRoaXMgPT09IGIpIHJldHVybiB0cnVlXG4gIHJldHVybiBCdWZmZXIuY29tcGFyZSh0aGlzLCBiKSA9PT0gMFxufTtcblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gaW5zcGVjdCAoKSB7XG4gIHZhciBzdHIgPSAnJztcbiAgdmFyIG1heCA9IElOU1BFQ1RfTUFYX0JZVEVTO1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgc3RyID0gdGhpcy50b1N0cmluZygnaGV4JywgMCwgbWF4KS5tYXRjaCgvLnsyfS9nKS5qb2luKCcgJyk7XG4gICAgaWYgKHRoaXMubGVuZ3RoID4gbWF4KSBzdHIgKz0gJyAuLi4gJztcbiAgfVxuICByZXR1cm4gJzxCdWZmZXIgJyArIHN0ciArICc+J1xufTtcblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAodGFyZ2V0LCBzdGFydCwgZW5kLCB0aGlzU3RhcnQsIHRoaXNFbmQpIHtcbiAgaWYgKCFpbnRlcm5hbElzQnVmZmVyKHRhcmdldCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgfVxuXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RhcnQgPSAwO1xuICB9XG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuZCA9IHRhcmdldCA/IHRhcmdldC5sZW5ndGggOiAwO1xuICB9XG4gIGlmICh0aGlzU3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNTdGFydCA9IDA7XG4gIH1cbiAgaWYgKHRoaXNFbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNFbmQgPSB0aGlzLmxlbmd0aDtcbiAgfVxuXG4gIGlmIChzdGFydCA8IDAgfHwgZW5kID4gdGFyZ2V0Lmxlbmd0aCB8fCB0aGlzU3RhcnQgPCAwIHx8IHRoaXNFbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdvdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kICYmIHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgaWYgKHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAxXG4gIH1cblxuICBzdGFydCA+Pj49IDA7XG4gIGVuZCA+Pj49IDA7XG4gIHRoaXNTdGFydCA+Pj49IDA7XG4gIHRoaXNFbmQgPj4+PSAwO1xuXG4gIGlmICh0aGlzID09PSB0YXJnZXQpIHJldHVybiAwXG5cbiAgdmFyIHggPSB0aGlzRW5kIC0gdGhpc1N0YXJ0O1xuICB2YXIgeSA9IGVuZCAtIHN0YXJ0O1xuICB2YXIgbGVuID0gTWF0aC5taW4oeCwgeSk7XG5cbiAgdmFyIHRoaXNDb3B5ID0gdGhpcy5zbGljZSh0aGlzU3RhcnQsIHRoaXNFbmQpO1xuICB2YXIgdGFyZ2V0Q29weSA9IHRhcmdldC5zbGljZShzdGFydCwgZW5kKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKHRoaXNDb3B5W2ldICE9PSB0YXJnZXRDb3B5W2ldKSB7XG4gICAgICB4ID0gdGhpc0NvcHlbaV07XG4gICAgICB5ID0gdGFyZ2V0Q29weVtpXTtcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufTtcblxuLy8gRmluZHMgZWl0aGVyIHRoZSBmaXJzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPj0gYGJ5dGVPZmZzZXRgLFxuLy8gT1IgdGhlIGxhc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0IDw9IGBieXRlT2Zmc2V0YC5cbi8vXG4vLyBBcmd1bWVudHM6XG4vLyAtIGJ1ZmZlciAtIGEgQnVmZmVyIHRvIHNlYXJjaFxuLy8gLSB2YWwgLSBhIHN0cmluZywgQnVmZmVyLCBvciBudW1iZXJcbi8vIC0gYnl0ZU9mZnNldCAtIGFuIGluZGV4IGludG8gYGJ1ZmZlcmA7IHdpbGwgYmUgY2xhbXBlZCB0byBhbiBpbnQzMlxuLy8gLSBlbmNvZGluZyAtIGFuIG9wdGlvbmFsIGVuY29kaW5nLCByZWxldmFudCBpcyB2YWwgaXMgYSBzdHJpbmdcbi8vIC0gZGlyIC0gdHJ1ZSBmb3IgaW5kZXhPZiwgZmFsc2UgZm9yIGxhc3RJbmRleE9mXG5mdW5jdGlvbiBiaWRpcmVjdGlvbmFsSW5kZXhPZiAoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgLy8gRW1wdHkgYnVmZmVyIG1lYW5zIG5vIG1hdGNoXG4gIGlmIChidWZmZXIubGVuZ3RoID09PSAwKSByZXR1cm4gLTFcblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldFxuICBpZiAodHlwZW9mIGJ5dGVPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBieXRlT2Zmc2V0O1xuICAgIGJ5dGVPZmZzZXQgPSAwO1xuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPiAweDdmZmZmZmZmKSB7XG4gICAgYnl0ZU9mZnNldCA9IDB4N2ZmZmZmZmY7XG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IC0weDgwMDAwMDAwKSB7XG4gICAgYnl0ZU9mZnNldCA9IC0weDgwMDAwMDAwO1xuICB9XG4gIGJ5dGVPZmZzZXQgPSArYnl0ZU9mZnNldDsgIC8vIENvZXJjZSB0byBOdW1iZXIuXG4gIGlmIChpc05hTihieXRlT2Zmc2V0KSkge1xuICAgIC8vIGJ5dGVPZmZzZXQ6IGl0IGl0J3MgdW5kZWZpbmVkLCBudWxsLCBOYU4sIFwiZm9vXCIsIGV0Yywgc2VhcmNoIHdob2xlIGJ1ZmZlclxuICAgIGJ5dGVPZmZzZXQgPSBkaXIgPyAwIDogKGJ1ZmZlci5sZW5ndGggLSAxKTtcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0OiBuZWdhdGl2ZSBvZmZzZXRzIHN0YXJ0IGZyb20gdGhlIGVuZCBvZiB0aGUgYnVmZmVyXG4gIGlmIChieXRlT2Zmc2V0IDwgMCkgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggKyBieXRlT2Zmc2V0O1xuICBpZiAoYnl0ZU9mZnNldCA+PSBidWZmZXIubGVuZ3RoKSB7XG4gICAgaWYgKGRpcikgcmV0dXJuIC0xXG4gICAgZWxzZSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCAtIDE7XG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IDApIHtcbiAgICBpZiAoZGlyKSBieXRlT2Zmc2V0ID0gMDtcbiAgICBlbHNlIHJldHVybiAtMVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIHZhbFxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBCdWZmZXIuZnJvbSh2YWwsIGVuY29kaW5nKTtcbiAgfVxuXG4gIC8vIEZpbmFsbHksIHNlYXJjaCBlaXRoZXIgaW5kZXhPZiAoaWYgZGlyIGlzIHRydWUpIG9yIGxhc3RJbmRleE9mXG4gIGlmIChpbnRlcm5hbElzQnVmZmVyKHZhbCkpIHtcbiAgICAvLyBTcGVjaWFsIGNhc2U6IGxvb2tpbmcgZm9yIGVtcHR5IHN0cmluZy9idWZmZXIgYWx3YXlzIGZhaWxzXG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMHhGRjsgLy8gU2VhcmNoIGZvciBhIGJ5dGUgdmFsdWUgWzAtMjU1XVxuICAgIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJlxuICAgICAgICB0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKGRpcikge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmxhc3RJbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCBbIHZhbCBdLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsIG11c3QgYmUgc3RyaW5nLCBudW1iZXIgb3IgQnVmZmVyJylcbn1cblxuZnVuY3Rpb24gYXJyYXlJbmRleE9mIChhcnIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICB2YXIgaW5kZXhTaXplID0gMTtcbiAgdmFyIGFyckxlbmd0aCA9IGFyci5sZW5ndGg7XG4gIHZhciB2YWxMZW5ndGggPSB2YWwubGVuZ3RoO1xuXG4gIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGVuY29kaW5nID09PSAndWNzMicgfHwgZW5jb2RpbmcgPT09ICd1Y3MtMicgfHxcbiAgICAgICAgZW5jb2RpbmcgPT09ICd1dGYxNmxlJyB8fCBlbmNvZGluZyA9PT0gJ3V0Zi0xNmxlJykge1xuICAgICAgaWYgKGFyci5sZW5ndGggPCAyIHx8IHZhbC5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfVxuICAgICAgaW5kZXhTaXplID0gMjtcbiAgICAgIGFyckxlbmd0aCAvPSAyO1xuICAgICAgdmFsTGVuZ3RoIC89IDI7XG4gICAgICBieXRlT2Zmc2V0IC89IDI7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZCAoYnVmLCBpKSB7XG4gICAgaWYgKGluZGV4U2l6ZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIGJ1ZltpXVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYnVmLnJlYWRVSW50MTZCRShpICogaW5kZXhTaXplKVxuICAgIH1cbiAgfVxuXG4gIHZhciBpO1xuICBpZiAoZGlyKSB7XG4gICAgdmFyIGZvdW5kSW5kZXggPSAtMTtcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpIDwgYXJyTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWFkKGFyciwgaSkgPT09IHJlYWQodmFsLCBmb3VuZEluZGV4ID09PSAtMSA/IDAgOiBpIC0gZm91bmRJbmRleCkpIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggPT09IC0xKSBmb3VuZEluZGV4ID0gaTtcbiAgICAgICAgaWYgKGkgLSBmb3VuZEluZGV4ICsgMSA9PT0gdmFsTGVuZ3RoKSByZXR1cm4gZm91bmRJbmRleCAqIGluZGV4U2l6ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggIT09IC0xKSBpIC09IGkgLSBmb3VuZEluZGV4O1xuICAgICAgICBmb3VuZEluZGV4ID0gLTE7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChieXRlT2Zmc2V0ICsgdmFsTGVuZ3RoID4gYXJyTGVuZ3RoKSBieXRlT2Zmc2V0ID0gYXJyTGVuZ3RoIC0gdmFsTGVuZ3RoO1xuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgZm91bmQgPSB0cnVlO1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWxMZW5ndGg7IGorKykge1xuICAgICAgICBpZiAocmVhZChhcnIsIGkgKyBqKSAhPT0gcmVhZCh2YWwsIGopKSB7XG4gICAgICAgICAgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZm91bmQpIHJldHVybiBpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbiBpbmNsdWRlcyAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gdGhpcy5pbmRleE9mKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpICE9PSAtMVxufTtcblxuQnVmZmVyLnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gaW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgdHJ1ZSlcbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUubGFzdEluZGV4T2YgPSBmdW5jdGlvbiBsYXN0SW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZmFsc2UpXG59O1xuXG5mdW5jdGlvbiBoZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDA7XG4gIHZhciByZW1haW5pbmcgPSBidWYubGVuZ3RoIC0gb2Zmc2V0O1xuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZztcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKTtcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmc7XG4gICAgfVxuICB9XG5cbiAgLy8gbXVzdCBiZSBhbiBldmVuIG51bWJlciBvZiBkaWdpdHNcbiAgdmFyIHN0ckxlbiA9IHN0cmluZy5sZW5ndGg7XG4gIGlmIChzdHJMZW4gJSAyICE9PSAwKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMjtcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgdmFyIHBhcnNlZCA9IHBhcnNlSW50KHN0cmluZy5zdWJzdHIoaSAqIDIsIDIpLCAxNik7XG4gICAgaWYgKGlzTmFOKHBhcnNlZCkpIHJldHVybiBpXG4gICAgYnVmW29mZnNldCArIGldID0gcGFyc2VkO1xuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIHV0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGFzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gbGF0aW4xV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYXNjaWlXcml0ZShidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGJhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiB1Y3MyV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gd3JpdGUgKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcpXG4gIGlmIChvZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnO1xuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuICAgIG9mZnNldCA9IDA7XG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBvZmZzZXQ7XG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XG4gICAgb2Zmc2V0ID0gMDtcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgb2Zmc2V0WywgbGVuZ3RoXVssIGVuY29kaW5nXSlcbiAgfSBlbHNlIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHwgMDtcbiAgICBpZiAoaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgbGVuZ3RoID0gbGVuZ3RoIHwgMDtcbiAgICAgIGlmIChlbmNvZGluZyA9PT0gdW5kZWZpbmVkKSBlbmNvZGluZyA9ICd1dGY4JztcbiAgICB9IGVsc2Uge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGg7XG4gICAgICBsZW5ndGggPSB1bmRlZmluZWQ7XG4gICAgfVxuICAvLyBsZWdhY3kgd3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0LCBsZW5ndGgpIC0gcmVtb3ZlIGluIHYwLjEzXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0J1ZmZlci53cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXRbLCBsZW5ndGhdKSBpcyBubyBsb25nZXIgc3VwcG9ydGVkJ1xuICAgIClcbiAgfVxuXG4gIHZhciByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldDtcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkIHx8IGxlbmd0aCA+IHJlbWFpbmluZykgbGVuZ3RoID0gcmVtYWluaW5nO1xuXG4gIGlmICgoc3RyaW5nLmxlbmd0aCA+IDAgJiYgKGxlbmd0aCA8IDAgfHwgb2Zmc2V0IDwgMCkpIHx8IG9mZnNldCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gd3JpdGUgb3V0c2lkZSBidWZmZXIgYm91bmRzJylcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnO1xuXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlO1xuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICAvLyBXYXJuaW5nOiBtYXhMZW5ndGggbm90IHRha2VuIGludG8gYWNjb3VudCBpbiBiYXNlNjRXcml0ZVxuICAgICAgICByZXR1cm4gYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHVjczJXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlO1xuICAgIH1cbiAgfVxufTtcblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59O1xuXG5mdW5jdGlvbiBiYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZyb21CeXRlQXJyYXkoYnVmLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHV0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZCk7XG4gIHZhciByZXMgPSBbXTtcblxuICB2YXIgaSA9IHN0YXJ0O1xuICB3aGlsZSAoaSA8IGVuZCkge1xuICAgIHZhciBmaXJzdEJ5dGUgPSBidWZbaV07XG4gICAgdmFyIGNvZGVQb2ludCA9IG51bGw7XG4gICAgdmFyIGJ5dGVzUGVyU2VxdWVuY2UgPSAoZmlyc3RCeXRlID4gMHhFRikgPyA0XG4gICAgICA6IChmaXJzdEJ5dGUgPiAweERGKSA/IDNcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4QkYpID8gMlxuICAgICAgOiAxO1xuXG4gICAgaWYgKGkgKyBieXRlc1BlclNlcXVlbmNlIDw9IGVuZCkge1xuICAgICAgdmFyIHNlY29uZEJ5dGUsIHRoaXJkQnl0ZSwgZm91cnRoQnl0ZSwgdGVtcENvZGVQb2ludDtcblxuICAgICAgc3dpdGNoIChieXRlc1BlclNlcXVlbmNlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAoZmlyc3RCeXRlIDwgMHg4MCkge1xuICAgICAgICAgICAgY29kZVBvaW50ID0gZmlyc3RCeXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV07XG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHgxRikgPDwgMHg2IHwgKHNlY29uZEJ5dGUgJiAweDNGKTtcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3Rikge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV07XG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXTtcbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweEMgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4NiB8ICh0aGlyZEJ5dGUgJiAweDNGKTtcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3RkYgJiYgKHRlbXBDb2RlUG9pbnQgPCAweEQ4MDAgfHwgdGVtcENvZGVQb2ludCA+IDB4REZGRikpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdO1xuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl07XG4gICAgICAgICAgZm91cnRoQnl0ZSA9IGJ1ZltpICsgM107XG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwICYmIChmb3VydGhCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweDEyIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweEMgfCAodGhpcmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKGZvdXJ0aEJ5dGUgJiAweDNGKTtcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHhGRkZGICYmIHRlbXBDb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29kZVBvaW50ID09PSBudWxsKSB7XG4gICAgICAvLyB3ZSBkaWQgbm90IGdlbmVyYXRlIGEgdmFsaWQgY29kZVBvaW50IHNvIGluc2VydCBhXG4gICAgICAvLyByZXBsYWNlbWVudCBjaGFyIChVK0ZGRkQpIGFuZCBhZHZhbmNlIG9ubHkgMSBieXRlXG4gICAgICBjb2RlUG9pbnQgPSAweEZGRkQ7XG4gICAgICBieXRlc1BlclNlcXVlbmNlID0gMTtcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA+IDB4RkZGRikge1xuICAgICAgLy8gZW5jb2RlIHRvIHV0ZjE2IChzdXJyb2dhdGUgcGFpciBkYW5jZSlcbiAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwO1xuICAgICAgcmVzLnB1c2goY29kZVBvaW50ID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKTtcbiAgICAgIGNvZGVQb2ludCA9IDB4REMwMCB8IGNvZGVQb2ludCAmIDB4M0ZGO1xuICAgIH1cblxuICAgIHJlcy5wdXNoKGNvZGVQb2ludCk7XG4gICAgaSArPSBieXRlc1BlclNlcXVlbmNlO1xuICB9XG5cbiAgcmV0dXJuIGRlY29kZUNvZGVQb2ludHNBcnJheShyZXMpXG59XG5cbi8vIEJhc2VkIG9uIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIyNzQ3MjcyLzY4MDc0MiwgdGhlIGJyb3dzZXIgd2l0aFxuLy8gdGhlIGxvd2VzdCBsaW1pdCBpcyBDaHJvbWUsIHdpdGggMHgxMDAwMCBhcmdzLlxuLy8gV2UgZ28gMSBtYWduaXR1ZGUgbGVzcywgZm9yIHNhZmV0eVxudmFyIE1BWF9BUkdVTUVOVFNfTEVOR1RIID0gMHgxMDAwO1xuXG5mdW5jdGlvbiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkgKGNvZGVQb2ludHMpIHtcbiAgdmFyIGxlbiA9IGNvZGVQb2ludHMubGVuZ3RoO1xuICBpZiAobGVuIDw9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjb2RlUG9pbnRzKSAvLyBhdm9pZCBleHRyYSBzbGljZSgpXG4gIH1cblxuICAvLyBEZWNvZGUgaW4gY2h1bmtzIHRvIGF2b2lkIFwiY2FsbCBzdGFjayBzaXplIGV4Y2VlZGVkXCIuXG4gIHZhciByZXMgPSAnJztcbiAgdmFyIGkgPSAwO1xuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFxuICAgICAgU3RyaW5nLFxuICAgICAgY29kZVBvaW50cy5zbGljZShpLCBpICs9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKVxuICAgICk7XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnO1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpO1xuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldICYgMHg3Rik7XG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBsYXRpbjFTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJztcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKTtcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSk7XG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBoZXhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSBidWYubGVuZ3RoO1xuXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPCAwKSBzdGFydCA9IDA7XG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW47XG5cbiAgdmFyIG91dCA9ICcnO1xuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIG91dCArPSB0b0hleChidWZbaV0pO1xuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICB2YXIgcmVzID0gJyc7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSArIGJ5dGVzW2kgKyAxXSAqIDI1Nik7XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gc2xpY2UgKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoO1xuICBzdGFydCA9IH5+c3RhcnQ7XG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogfn5lbmQ7XG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ICs9IGxlbjtcbiAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDA7XG4gIH0gZWxzZSBpZiAoc3RhcnQgPiBsZW4pIHtcbiAgICBzdGFydCA9IGxlbjtcbiAgfVxuXG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlbjtcbiAgICBpZiAoZW5kIDwgMCkgZW5kID0gMDtcbiAgfSBlbHNlIGlmIChlbmQgPiBsZW4pIHtcbiAgICBlbmQgPSBsZW47XG4gIH1cblxuICBpZiAoZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0O1xuXG4gIHZhciBuZXdCdWY7XG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIG5ld0J1ZiA9IHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZCk7XG4gICAgbmV3QnVmLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHNsaWNlTGVuID0gZW5kIC0gc3RhcnQ7XG4gICAgbmV3QnVmID0gbmV3IEJ1ZmZlcihzbGljZUxlbiwgdW5kZWZpbmVkKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyArK2kpIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3QnVmXG59O1xuXG4vKlxuICogTmVlZCB0byBtYWtlIHN1cmUgdGhhdCBidWZmZXIgaXNuJ3QgdHJ5aW5nIHRvIHdyaXRlIG91dCBvZiBib3VuZHMuXG4gKi9cbmZ1bmN0aW9uIGNoZWNrT2Zmc2V0IChvZmZzZXQsIGV4dCwgbGVuZ3RoKSB7XG4gIGlmICgob2Zmc2V0ICUgMSkgIT09IDAgfHwgb2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ29mZnNldCBpcyBub3QgdWludCcpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBsZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludExFID0gZnVuY3Rpb24gcmVhZFVJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwO1xuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDA7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpO1xuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF07XG4gIHZhciBtdWwgPSAxO1xuICB2YXIgaSA9IDA7XG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWw7XG4gIH1cblxuICByZXR1cm4gdmFsXG59O1xuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50QkUgPSBmdW5jdGlvbiByZWFkVUludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDA7XG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMDtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpO1xuICB9XG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXTtcbiAgdmFyIG11bCA9IDE7XG4gIHdoaWxlIChieXRlTGVuZ3RoID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF0gKiBtdWw7XG4gIH1cblxuICByZXR1cm4gdmFsXG59O1xuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIHJlYWRVSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKTtcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufTtcblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2TEUgPSBmdW5jdGlvbiByZWFkVUludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aCk7XG4gIHJldHVybiB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxufTtcblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiByZWFkVUludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aCk7XG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDgpIHwgdGhpc1tvZmZzZXQgKyAxXVxufTtcblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiByZWFkVUludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aCk7XG5cbiAgcmV0dXJuICgodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikpICtcbiAgICAgICh0aGlzW29mZnNldCArIDNdICogMHgxMDAwMDAwKVxufTtcblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyQkUgPSBmdW5jdGlvbiByZWFkVUludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aCk7XG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gKiAweDEwMDAwMDApICtcbiAgICAoKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgdGhpc1tvZmZzZXQgKyAzXSlcbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludExFID0gZnVuY3Rpb24gcmVhZEludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDA7XG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMDtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aCk7XG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XTtcbiAgdmFyIG11bCA9IDE7XG4gIHZhciBpID0gMDtcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bDtcbiAgfVxuICBtdWwgKj0gMHg4MDtcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKTtcblxuICByZXR1cm4gdmFsXG59O1xuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRCRSA9IGZ1bmN0aW9uIHJlYWRJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwO1xuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDA7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpO1xuXG4gIHZhciBpID0gYnl0ZUxlbmd0aDtcbiAgdmFyIG11bCA9IDE7XG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0taV07XG4gIHdoaWxlIChpID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0taV0gKiBtdWw7XG4gIH1cbiAgbXVsICo9IDB4ODA7XG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCk7XG5cbiAgcmV0dXJuIHZhbFxufTtcblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50OCA9IGZ1bmN0aW9uIHJlYWRJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpO1xuICBpZiAoISh0aGlzW29mZnNldF0gJiAweDgwKSkgcmV0dXJuICh0aGlzW29mZnNldF0pXG4gIHJldHVybiAoKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xKVxufTtcblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpO1xuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCk7XG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2QkUgPSBmdW5jdGlvbiByZWFkSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKTtcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgMV0gfCAodGhpc1tvZmZzZXRdIDw8IDgpO1xuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59O1xuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkxFID0gZnVuY3Rpb24gcmVhZEludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aCk7XG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0pIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSA8PCAyNClcbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiByZWFkSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKTtcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCAyNCkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDNdKVxufTtcblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdExFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpO1xuICByZXR1cm4gcmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDIzLCA0KVxufTtcblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRCRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdEJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpO1xuICByZXR1cm4gcmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCAyMywgNClcbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gcmVhZERvdWJsZUxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpO1xuICByZXR1cm4gcmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDUyLCA4KVxufTtcblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiByZWFkRG91YmxlQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aCk7XG4gIHJldHVybiByZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDUyLCA4KVxufTtcblxuZnVuY3Rpb24gY2hlY2tJbnQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAoIWludGVybmFsSXNCdWZmZXIoYnVmKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJidWZmZXJcIiBhcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyIGluc3RhbmNlJylcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWU7XG4gIG9mZnNldCA9IG9mZnNldCB8IDA7XG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMDtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDE7XG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApO1xuICB9XG5cbiAgdmFyIG11bCA9IDE7XG4gIHZhciBpID0gMDtcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGO1xuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRjtcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59O1xuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludEJFID0gZnVuY3Rpb24gd3JpdGVVSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlO1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwO1xuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDA7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxO1xuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKTtcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDE7XG4gIHZhciBtdWwgPSAxO1xuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGO1xuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkY7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufTtcblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVVSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWU7XG4gIG9mZnNldCA9IG9mZnNldCB8IDA7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4ZmYsIDApO1xuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpO1xuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKTtcbiAgcmV0dXJuIG9mZnNldCArIDFcbn07XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZiArIHZhbHVlICsgMTtcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCAyKTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDg7XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWU7XG4gIG9mZnNldCA9IG9mZnNldCB8IDA7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMCk7XG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpO1xuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpO1xuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpO1xuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59O1xuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZTtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMDtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKTtcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KTtcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZik7XG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpO1xuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59O1xuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxO1xuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDQpOyBpIDwgajsgKytpKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlID4+PiAobGl0dGxlRW5kaWFuID8gaSA6IDMgLSBpKSAqIDgpICYgMHhmZjtcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZTtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMDtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMCk7XG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KTtcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNik7XG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOCk7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZik7XG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSk7XG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlO1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwO1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKTtcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNCk7XG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpO1xuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpO1xuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKTtcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSk7XG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlO1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwO1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIGxpbWl0ID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGggLSAxKTtcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KTtcbiAgfVxuXG4gIHZhciBpID0gMDtcbiAgdmFyIG11bCA9IDE7XG4gIHZhciBzdWIgPSAwO1xuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkY7XG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpIC0gMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDE7XG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkY7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufTtcblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludEJFID0gZnVuY3Rpb24gd3JpdGVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWU7XG4gIG9mZnNldCA9IG9mZnNldCB8IDA7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpO1xuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpO1xuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMTtcbiAgdmFyIG11bCA9IDE7XG4gIHZhciBzdWIgPSAwO1xuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGO1xuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgKyAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMTtcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRjtcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59O1xuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uIHdyaXRlSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWU7XG4gIG9mZnNldCA9IG9mZnNldCB8IDA7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4N2YsIC0weDgwKTtcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKTtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmICsgdmFsdWUgKyAxO1xuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKTtcbiAgcmV0dXJuIG9mZnNldCArIDFcbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZTtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMDtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKTtcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZik7XG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOCk7XG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSk7XG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZTtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMDtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKTtcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KTtcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZik7XG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpO1xuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59O1xuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWU7XG4gIG9mZnNldCA9IG9mZnNldCB8IDA7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKTtcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZik7XG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOCk7XG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpO1xuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KTtcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKTtcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufTtcblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlO1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwO1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMCk7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMTtcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNCk7XG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpO1xuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpO1xuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKTtcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSk7XG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn07XG5cbmZ1bmN0aW9uIGNoZWNrSUVFRTc1NCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbiAgaWYgKG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5mdW5jdGlvbiB3cml0ZUZsb2F0IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDQpO1xuICB9XG4gIHdyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNCk7XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gd3JpdGVGbG9hdExFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdEJFID0gZnVuY3Rpb24gd3JpdGVGbG9hdEJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59O1xuXG5mdW5jdGlvbiB3cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA4KTtcbiAgfVxuICB3cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpO1xuICByZXR1cm4gb2Zmc2V0ICsgOFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59O1xuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufTtcblxuLy8gY29weSh0YXJnZXRCdWZmZXIsIHRhcmdldFN0YXJ0PTAsIHNvdXJjZVN0YXJ0PTAsIHNvdXJjZUVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gY29weSAodGFyZ2V0LCB0YXJnZXRTdGFydCwgc3RhcnQsIGVuZCkge1xuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDA7XG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGg7XG4gIGlmICh0YXJnZXRTdGFydCA+PSB0YXJnZXQubGVuZ3RoKSB0YXJnZXRTdGFydCA9IHRhcmdldC5sZW5ndGg7XG4gIGlmICghdGFyZ2V0U3RhcnQpIHRhcmdldFN0YXJ0ID0gMDtcbiAgaWYgKGVuZCA+IDAgJiYgZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0O1xuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuIDBcbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgdGhpcy5sZW5ndGggPT09IDApIHJldHVybiAwXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBpZiAodGFyZ2V0U3RhcnQgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICB9XG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKGVuZCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKSBlbmQgPSB0aGlzLmxlbmd0aDtcbiAgaWYgKHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCA8IGVuZCAtIHN0YXJ0KSB7XG4gICAgZW5kID0gdGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0ICsgc3RhcnQ7XG4gIH1cblxuICB2YXIgbGVuID0gZW5kIC0gc3RhcnQ7XG4gIHZhciBpO1xuXG4gIGlmICh0aGlzID09PSB0YXJnZXQgJiYgc3RhcnQgPCB0YXJnZXRTdGFydCAmJiB0YXJnZXRTdGFydCA8IGVuZCkge1xuICAgIC8vIGRlc2NlbmRpbmcgY29weSBmcm9tIGVuZFxuICAgIGZvciAoaSA9IGxlbiAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobGVuIDwgMTAwMCB8fCAhQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBhc2NlbmRpbmcgY29weSBmcm9tIHN0YXJ0XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgVWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwoXG4gICAgICB0YXJnZXQsXG4gICAgICB0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksXG4gICAgICB0YXJnZXRTdGFydFxuICAgICk7XG4gIH1cblxuICByZXR1cm4gbGVuXG59O1xuXG4vLyBVc2FnZTpcbi8vICAgIGJ1ZmZlci5maWxsKG51bWJlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoYnVmZmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChzdHJpbmdbLCBvZmZzZXRbLCBlbmRdXVssIGVuY29kaW5nXSlcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uIGZpbGwgKHZhbCwgc3RhcnQsIGVuZCwgZW5jb2RpbmcpIHtcbiAgLy8gSGFuZGxlIHN0cmluZyBjYXNlczpcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHR5cGVvZiBzdGFydCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gc3RhcnQ7XG4gICAgICBzdGFydCA9IDA7XG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbmQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IGVuZDtcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoO1xuICAgIH1cbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdmFyIGNvZGUgPSB2YWwuY2hhckNvZGVBdCgwKTtcbiAgICAgIGlmIChjb2RlIDwgMjU2KSB7XG4gICAgICAgIHZhbCA9IGNvZGU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuY29kaW5nIG11c3QgYmUgYSBzdHJpbmcnKVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJyAmJiAhQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMjU1O1xuICB9XG5cbiAgLy8gSW52YWxpZCByYW5nZXMgYXJlIG5vdCBzZXQgdG8gYSBkZWZhdWx0LCBzbyBjYW4gcmFuZ2UgY2hlY2sgZWFybHkuXG4gIGlmIChzdGFydCA8IDAgfHwgdGhpcy5sZW5ndGggPCBzdGFydCB8fCB0aGlzLmxlbmd0aCA8IGVuZCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdPdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzdGFydCA9IHN0YXJ0ID4+PiAwO1xuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IHRoaXMubGVuZ3RoIDogZW5kID4+PiAwO1xuXG4gIGlmICghdmFsKSB2YWwgPSAwO1xuXG4gIHZhciBpO1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgICB0aGlzW2ldID0gdmFsO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgYnl0ZXMgPSBpbnRlcm5hbElzQnVmZmVyKHZhbClcbiAgICAgID8gdmFsXG4gICAgICA6IHV0ZjhUb0J5dGVzKG5ldyBCdWZmZXIodmFsLCBlbmNvZGluZykudG9TdHJpbmcoKSk7XG4gICAgdmFyIGxlbiA9IGJ5dGVzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgZW5kIC0gc3RhcnQ7ICsraSkge1xuICAgICAgdGhpc1tpICsgc3RhcnRdID0gYnl0ZXNbaSAlIGxlbl07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXNcbn07XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxudmFyIElOVkFMSURfQkFTRTY0X1JFID0gL1teK1xcLzAtOUEtWmEtei1fXS9nO1xuXG5mdW5jdGlvbiBiYXNlNjRjbGVhbiAoc3RyKSB7XG4gIC8vIE5vZGUgc3RyaXBzIG91dCBpbnZhbGlkIGNoYXJhY3RlcnMgbGlrZSBcXG4gYW5kIFxcdCBmcm9tIHRoZSBzdHJpbmcsIGJhc2U2NC1qcyBkb2VzIG5vdFxuICBzdHIgPSBzdHJpbmd0cmltKHN0cikucmVwbGFjZShJTlZBTElEX0JBU0U2NF9SRSwgJycpO1xuICAvLyBOb2RlIGNvbnZlcnRzIHN0cmluZ3Mgd2l0aCBsZW5ndGggPCAyIHRvICcnXG4gIGlmIChzdHIubGVuZ3RoIDwgMikgcmV0dXJuICcnXG4gIC8vIE5vZGUgYWxsb3dzIGZvciBub24tcGFkZGVkIGJhc2U2NCBzdHJpbmdzIChtaXNzaW5nIHRyYWlsaW5nID09PSksIGJhc2U2NC1qcyBkb2VzIG5vdFxuICB3aGlsZSAoc3RyLmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICBzdHIgPSBzdHIgKyAnPSc7XG4gIH1cbiAgcmV0dXJuIHN0clxufVxuXG5mdW5jdGlvbiBzdHJpbmd0cmltIChzdHIpIHtcbiAgaWYgKHN0ci50cmltKSByZXR1cm4gc3RyLnRyaW0oKVxuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxufVxuXG5mdW5jdGlvbiB0b0hleCAobikge1xuICBpZiAobiA8IDE2KSByZXR1cm4gJzAnICsgbi50b1N0cmluZygxNilcbiAgcmV0dXJuIG4udG9TdHJpbmcoMTYpXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHJpbmcsIHVuaXRzKSB7XG4gIHVuaXRzID0gdW5pdHMgfHwgSW5maW5pdHk7XG4gIHZhciBjb2RlUG9pbnQ7XG4gIHZhciBsZW5ndGggPSBzdHJpbmcubGVuZ3RoO1xuICB2YXIgbGVhZFN1cnJvZ2F0ZSA9IG51bGw7XG4gIHZhciBieXRlcyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBjb2RlUG9pbnQgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcblxuICAgIC8vIGlzIHN1cnJvZ2F0ZSBjb21wb25lbnRcbiAgICBpZiAoY29kZVBvaW50ID4gMHhEN0ZGICYmIGNvZGVQb2ludCA8IDB4RTAwMCkge1xuICAgICAgLy8gbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICghbGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgICAvLyBubyBsZWFkIHlldFxuICAgICAgICBpZiAoY29kZVBvaW50ID4gMHhEQkZGKSB7XG4gICAgICAgICAgLy8gdW5leHBlY3RlZCB0cmFpbFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKTtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2UgaWYgKGkgKyAxID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAvLyB1bnBhaXJlZCBsZWFkXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpO1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyB2YWxpZCBsZWFkXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnQ7XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gMiBsZWFkcyBpbiBhIHJvd1xuICAgICAgaWYgKGNvZGVQb2ludCA8IDB4REMwMCkge1xuICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRCk7XG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnQ7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIHZhbGlkIHN1cnJvZ2F0ZSBwYWlyXG4gICAgICBjb2RlUG9pbnQgPSAobGVhZFN1cnJvZ2F0ZSAtIDB4RDgwMCA8PCAxMCB8IGNvZGVQb2ludCAtIDB4REMwMCkgKyAweDEwMDAwO1xuICAgIH0gZWxzZSBpZiAobGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgLy8gdmFsaWQgYm1wIGNoYXIsIGJ1dCBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpO1xuICAgIH1cblxuICAgIGxlYWRTdXJyb2dhdGUgPSBudWxsO1xuXG4gICAgLy8gZW5jb2RlIHV0ZjhcbiAgICBpZiAoY29kZVBvaW50IDwgMHg4MCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAxKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKGNvZGVQb2ludCk7XG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDgwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2IHwgMHhDMCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDMpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgfCAweEUwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gNCkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4MTIgfCAweEYwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb2RlIHBvaW50JylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnl0ZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRik7XG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyLCB1bml0cykge1xuICB2YXIgYywgaGksIGxvO1xuICB2YXIgYnl0ZUFycmF5ID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG5cbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgaGkgPSBjID4+IDg7XG4gICAgbG8gPSBjICUgMjU2O1xuICAgIGJ5dGVBcnJheS5wdXNoKGxvKTtcbiAgICBieXRlQXJyYXkucHVzaChoaSk7XG4gIH1cblxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiB0b0J5dGVBcnJheShiYXNlNjRjbGVhbihzdHIpKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSkgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV07XG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gaXNuYW4gKHZhbCkge1xuICByZXR1cm4gdmFsICE9PSB2YWwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zZWxmLWNvbXBhcmVcbn1cblxuXG4vLyB0aGUgZm9sbG93aW5nIGlzIGZyb20gaXMtYnVmZmVyLCBhbHNvIGJ5IEZlcm9zcyBBYm91a2hhZGlqZWggYW5kIHdpdGggc2FtZSBsaXNlbmNlXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5mdW5jdGlvbiBpc0J1ZmZlcihvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmICghIW9iai5faXNCdWZmZXIgfHwgaXNGYXN0QnVmZmVyKG9iaikgfHwgaXNTbG93QnVmZmVyKG9iaikpXG59XG5cbmZ1bmN0aW9uIGlzRmFzdEJ1ZmZlciAob2JqKSB7XG4gIHJldHVybiAhIW9iai5jb25zdHJ1Y3RvciAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG5cbi8vIEZvciBOb2RlIHYwLjEwIHN1cHBvcnQuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHkuXG5mdW5jdGlvbiBpc1Nsb3dCdWZmZXIgKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iai5yZWFkRmxvYXRMRSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLnNsaWNlID09PSAnZnVuY3Rpb24nICYmIGlzRmFzdEJ1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG5cbmNsYXNzIENzdkVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcihjb2RlLCBtZXNzYWdlLCBvcHRpb25zLCAuLi5jb250ZXh0cykge1xuICAgIGlmKEFycmF5LmlzQXJyYXkobWVzc2FnZSkpIG1lc3NhZ2UgPSBtZXNzYWdlLmpvaW4oJyAnKS50cmltKCk7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gICAgaWYoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UgIT09IHVuZGVmaW5lZCl7XG4gICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBDc3ZFcnJvcik7XG4gICAgfVxuICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgZm9yKGNvbnN0IGNvbnRleHQgb2YgY29udGV4dHMpe1xuICAgICAgZm9yKGNvbnN0IGtleSBpbiBjb250ZXh0KXtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjb250ZXh0W2tleV07XG4gICAgICAgIHRoaXNba2V5XSA9IGlzQnVmZmVyKHZhbHVlKSA/IHZhbHVlLnRvU3RyaW5nKG9wdGlvbnMuZW5jb2RpbmcpIDogdmFsdWUgPT0gbnVsbCA/IHZhbHVlIDogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBpc19vYmplY3QgPSBmdW5jdGlvbihvYmope1xuICByZXR1cm4gKHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iaiAhPT0gbnVsbCAmJiAhQXJyYXkuaXNBcnJheShvYmopKTtcbn07XG5cbmNvbnN0IG5vcm1hbGl6ZV9jb2x1bW5zX2FycmF5ID0gZnVuY3Rpb24oY29sdW1ucyl7XG4gIGNvbnN0IG5vcm1hbGl6ZWRDb2x1bW5zID0gW107XG4gIGZvcihsZXQgaSA9IDAsIGwgPSBjb2x1bW5zLmxlbmd0aDsgaSA8IGw7IGkrKyl7XG4gICAgY29uc3QgY29sdW1uID0gY29sdW1uc1tpXTtcbiAgICBpZihjb2x1bW4gPT09IHVuZGVmaW5lZCB8fCBjb2x1bW4gPT09IG51bGwgfHwgY29sdW1uID09PSBmYWxzZSl7XG4gICAgICBub3JtYWxpemVkQ29sdW1uc1tpXSA9IHsgZGlzYWJsZWQ6IHRydWUgfTtcbiAgICB9ZWxzZSBpZih0eXBlb2YgY29sdW1uID09PSAnc3RyaW5nJyl7XG4gICAgICBub3JtYWxpemVkQ29sdW1uc1tpXSA9IHsgbmFtZTogY29sdW1uIH07XG4gICAgfWVsc2UgaWYoaXNfb2JqZWN0KGNvbHVtbikpe1xuICAgICAgaWYodHlwZW9mIGNvbHVtbi5uYW1lICE9PSAnc3RyaW5nJyl7XG4gICAgICAgIHRocm93IG5ldyBDc3ZFcnJvcignQ1NWX09QVElPTl9DT0xVTU5TX01JU1NJTkdfTkFNRScsIFtcbiAgICAgICAgICAnT3B0aW9uIGNvbHVtbnMgbWlzc2luZyBuYW1lOicsXG4gICAgICAgICAgYHByb3BlcnR5IFwibmFtZVwiIGlzIHJlcXVpcmVkIGF0IHBvc2l0aW9uICR7aX1gLFxuICAgICAgICAgICd3aGVuIGNvbHVtbiBpcyBhbiBvYmplY3QgbGl0ZXJhbCdcbiAgICAgICAgXSk7XG4gICAgICB9XG4gICAgICBub3JtYWxpemVkQ29sdW1uc1tpXSA9IGNvbHVtbjtcbiAgICB9ZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgQ3N2RXJyb3IoJ0NTVl9JTlZBTElEX0NPTFVNTl9ERUZJTklUSU9OJywgW1xuICAgICAgICAnSW52YWxpZCBjb2x1bW4gZGVmaW5pdGlvbjonLFxuICAgICAgICAnZXhwZWN0IGEgc3RyaW5nIG9yIGEgbGl0ZXJhbCBvYmplY3QsJyxcbiAgICAgICAgYGdvdCAke0pTT04uc3RyaW5naWZ5KGNvbHVtbil9IGF0IHBvc2l0aW9uICR7aX1gXG4gICAgICBdKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5vcm1hbGl6ZWRDb2x1bW5zO1xufTtcblxuY2xhc3MgUmVzaXplYWJsZUJ1ZmZlcntcbiAgY29uc3RydWN0b3Ioc2l6ZT0xMDApe1xuICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgdGhpcy5sZW5ndGggPSAwO1xuICAgIHRoaXMuYnVmID0gQnVmZmVyLmFsbG9jVW5zYWZlKHNpemUpO1xuICB9XG4gIHByZXBlbmQodmFsKXtcbiAgICBpZihpc0J1ZmZlcih2YWwpKXtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMubGVuZ3RoICsgdmFsLmxlbmd0aDtcbiAgICAgIGlmKGxlbmd0aCA+PSB0aGlzLnNpemUpe1xuICAgICAgICB0aGlzLnJlc2l6ZSgpO1xuICAgICAgICBpZihsZW5ndGggPj0gdGhpcy5zaXplKXtcbiAgICAgICAgICB0aHJvdyBFcnJvcignSU5WQUxJRF9CVUZGRVJfU1RBVEUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgYnVmID0gdGhpcy5idWY7XG4gICAgICB0aGlzLmJ1ZiA9IEJ1ZmZlci5hbGxvY1Vuc2FmZSh0aGlzLnNpemUpO1xuICAgICAgdmFsLmNvcHkodGhpcy5idWYsIDApO1xuICAgICAgYnVmLmNvcHkodGhpcy5idWYsIHZhbC5sZW5ndGgpO1xuICAgICAgdGhpcy5sZW5ndGggKz0gdmFsLmxlbmd0aDtcbiAgICB9ZWxzZSB7XG4gICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmxlbmd0aCsrO1xuICAgICAgaWYobGVuZ3RoID09PSB0aGlzLnNpemUpe1xuICAgICAgICB0aGlzLnJlc2l6ZSgpO1xuICAgICAgfVxuICAgICAgY29uc3QgYnVmID0gdGhpcy5jbG9uZSgpO1xuICAgICAgdGhpcy5idWZbMF0gPSB2YWw7XG4gICAgICBidWYuY29weSh0aGlzLmJ1ZiwxLCAwLCBsZW5ndGgpO1xuICAgIH1cbiAgfVxuICBhcHBlbmQodmFsKXtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmxlbmd0aCsrO1xuICAgIGlmKGxlbmd0aCA9PT0gdGhpcy5zaXplKXtcbiAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgfVxuICAgIHRoaXMuYnVmW2xlbmd0aF0gPSB2YWw7XG4gIH1cbiAgY2xvbmUoKXtcbiAgICByZXR1cm4gQnVmZmVyLmZyb20odGhpcy5idWYuc2xpY2UoMCwgdGhpcy5sZW5ndGgpKTtcbiAgfVxuICByZXNpemUoKXtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmxlbmd0aDtcbiAgICB0aGlzLnNpemUgPSB0aGlzLnNpemUgKiAyO1xuICAgIGNvbnN0IGJ1ZiA9IEJ1ZmZlci5hbGxvY1Vuc2FmZSh0aGlzLnNpemUpO1xuICAgIHRoaXMuYnVmLmNvcHkoYnVmLDAsIDAsIGxlbmd0aCk7XG4gICAgdGhpcy5idWYgPSBidWY7XG4gIH1cbiAgdG9TdHJpbmcoZW5jb2Rpbmcpe1xuICAgIGlmKGVuY29kaW5nKXtcbiAgICAgIHJldHVybiB0aGlzLmJ1Zi5zbGljZSgwLCB0aGlzLmxlbmd0aCkudG9TdHJpbmcoZW5jb2RpbmcpO1xuICAgIH1lbHNlIHtcbiAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuYnVmLnNsaWNlKDAsIHRoaXMubGVuZ3RoKSk7XG4gICAgfVxuICB9XG4gIHRvSlNPTigpe1xuICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCd1dGY4Jyk7XG4gIH1cbiAgcmVzZXQoKXtcbiAgICB0aGlzLmxlbmd0aCA9IDA7XG4gIH1cbn1cblxuLy8gd2hpdGUgc3BhY2UgY2hhcmFjdGVyc1xuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2hpdGVzcGFjZV9jaGFyYWN0ZXJcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvR3VpZGUvUmVndWxhcl9FeHByZXNzaW9ucy9DaGFyYWN0ZXJfQ2xhc3NlcyNUeXBlc1xuLy8gXFxmXFxuXFxyXFx0XFx2XFx1MDBhMFxcdTE2ODBcXHUyMDAwLVxcdTIwMGFcXHUyMDI4XFx1MjAyOVxcdTIwMmZcXHUyMDVmXFx1MzAwMFxcdWZlZmZcbmNvbnN0IG5wID0gMTI7XG5jb25zdCBjciQxID0gMTM7IC8vIGBcXHJgLCBjYXJyaWFnZSByZXR1cm4sIDB4MEQgaW4gaGV4YWTDqWNpbWFsLCAxMyBpbiBkZWNpbWFsXG5jb25zdCBubCQxID0gMTA7IC8vIGBcXG5gLCBuZXdsaW5lLCAweDBBIGluIGhleGFkZWNpbWFsLCAxMCBpbiBkZWNpbWFsXG5jb25zdCBzcGFjZSA9IDMyO1xuY29uc3QgdGFiID0gOTtcblxuY29uc3QgaW5pdF9zdGF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICByZXR1cm4ge1xuICAgIGJvbVNraXBwZWQ6IGZhbHNlLFxuICAgIGJ1ZkJ5dGVzU3RhcnQ6IDAsXG4gICAgY2FzdEZpZWxkOiBvcHRpb25zLmNhc3RfZnVuY3Rpb24sXG4gICAgY29tbWVudGluZzogZmFsc2UsXG4gICAgLy8gQ3VycmVudCBlcnJvciBlbmNvdW50ZXJlZCBieSBhIHJlY29yZFxuICAgIGVycm9yOiB1bmRlZmluZWQsXG4gICAgZW5hYmxlZDogb3B0aW9ucy5mcm9tX2xpbmUgPT09IDEsXG4gICAgZXNjYXBpbmc6IGZhbHNlLFxuICAgIGVzY2FwZUlzUXVvdGU6IGlzQnVmZmVyKG9wdGlvbnMuZXNjYXBlKSAmJiBpc0J1ZmZlcihvcHRpb25zLnF1b3RlKSAmJiBCdWZmZXIuY29tcGFyZShvcHRpb25zLmVzY2FwZSwgb3B0aW9ucy5xdW90ZSkgPT09IDAsXG4gICAgLy8gY29sdW1ucyBjYW4gYmUgYGZhbHNlYCwgYHRydWVgLCBgQXJyYXlgXG4gICAgZXhwZWN0ZWRSZWNvcmRMZW5ndGg6IEFycmF5LmlzQXJyYXkob3B0aW9ucy5jb2x1bW5zKSA/IG9wdGlvbnMuY29sdW1ucy5sZW5ndGggOiB1bmRlZmluZWQsXG4gICAgZmllbGQ6IG5ldyBSZXNpemVhYmxlQnVmZmVyKDIwKSxcbiAgICBmaXJzdExpbmVUb0hlYWRlcnM6IG9wdGlvbnMuY2FzdF9maXJzdF9saW5lX3RvX2hlYWRlcixcbiAgICBuZWVkTW9yZURhdGFTaXplOiBNYXRoLm1heChcbiAgICAgIC8vIFNraXAgaWYgdGhlIHJlbWFpbmluZyBidWZmZXIgc21hbGxlciB0aGFuIGNvbW1lbnRcbiAgICAgIG9wdGlvbnMuY29tbWVudCAhPT0gbnVsbCA/IG9wdGlvbnMuY29tbWVudC5sZW5ndGggOiAwLFxuICAgICAgLy8gU2tpcCBpZiB0aGUgcmVtYWluaW5nIGJ1ZmZlciBjYW4gYmUgZGVsaW1pdGVyXG4gICAgICAuLi5vcHRpb25zLmRlbGltaXRlci5tYXAoKGRlbGltaXRlcikgPT4gZGVsaW1pdGVyLmxlbmd0aCksXG4gICAgICAvLyBTa2lwIGlmIHRoZSByZW1haW5pbmcgYnVmZmVyIGNhbiBiZSBlc2NhcGUgc2VxdWVuY2VcbiAgICAgIG9wdGlvbnMucXVvdGUgIT09IG51bGwgPyBvcHRpb25zLnF1b3RlLmxlbmd0aCA6IDAsXG4gICAgKSxcbiAgICBwcmV2aW91c0J1ZjogdW5kZWZpbmVkLFxuICAgIHF1b3Rpbmc6IGZhbHNlLFxuICAgIHN0b3A6IGZhbHNlLFxuICAgIHJhd0J1ZmZlcjogbmV3IFJlc2l6ZWFibGVCdWZmZXIoMTAwKSxcbiAgICByZWNvcmQ6IFtdLFxuICAgIHJlY29yZEhhc0Vycm9yOiBmYWxzZSxcbiAgICByZWNvcmRfbGVuZ3RoOiAwLFxuICAgIHJlY29yZERlbGltaXRlck1heExlbmd0aDogb3B0aW9ucy5yZWNvcmRfZGVsaW1pdGVyLmxlbmd0aCA9PT0gMCA/IDAgOiBNYXRoLm1heCguLi5vcHRpb25zLnJlY29yZF9kZWxpbWl0ZXIubWFwKCh2KSA9PiB2Lmxlbmd0aCkpLFxuICAgIHRyaW1DaGFyczogW0J1ZmZlci5mcm9tKCcgJywgb3B0aW9ucy5lbmNvZGluZylbMF0sIEJ1ZmZlci5mcm9tKCdcXHQnLCBvcHRpb25zLmVuY29kaW5nKVswXV0sXG4gICAgd2FzUXVvdGluZzogZmFsc2UsXG4gICAgd2FzUm93RGVsaW1pdGVyOiBmYWxzZSxcbiAgICB0aW1jaGFyczogW1xuICAgICAgQnVmZmVyLmZyb20oQnVmZmVyLmZyb20oW2NyJDFdLCAndXRmOCcpLnRvU3RyaW5nKCksIG9wdGlvbnMuZW5jb2RpbmcpLFxuICAgICAgQnVmZmVyLmZyb20oQnVmZmVyLmZyb20oW25sJDFdLCAndXRmOCcpLnRvU3RyaW5nKCksIG9wdGlvbnMuZW5jb2RpbmcpLFxuICAgICAgQnVmZmVyLmZyb20oQnVmZmVyLmZyb20oW25wXSwgJ3V0ZjgnKS50b1N0cmluZygpLCBvcHRpb25zLmVuY29kaW5nKSxcbiAgICAgIEJ1ZmZlci5mcm9tKEJ1ZmZlci5mcm9tKFtzcGFjZV0sICd1dGY4JykudG9TdHJpbmcoKSwgb3B0aW9ucy5lbmNvZGluZyksXG4gICAgICBCdWZmZXIuZnJvbShCdWZmZXIuZnJvbShbdGFiXSwgJ3V0ZjgnKS50b1N0cmluZygpLCBvcHRpb25zLmVuY29kaW5nKSxcbiAgICBdXG4gIH07XG59O1xuXG5jb25zdCB1bmRlcnNjb3JlID0gZnVuY3Rpb24oc3RyKXtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIGZ1bmN0aW9uKF8sIG1hdGNoKXtcbiAgICByZXR1cm4gJ18nICsgbWF0Y2gudG9Mb3dlckNhc2UoKTtcbiAgfSk7XG59O1xuXG5jb25zdCBub3JtYWxpemVfb3B0aW9ucyA9IGZ1bmN0aW9uKG9wdHMpe1xuICBjb25zdCBvcHRpb25zID0ge307XG4gIC8vIE1lcmdlIHdpdGggdXNlciBvcHRpb25zXG4gIGZvcihjb25zdCBvcHQgaW4gb3B0cyl7XG4gICAgb3B0aW9uc1t1bmRlcnNjb3JlKG9wdCldID0gb3B0c1tvcHRdO1xuICB9XG4gIC8vIE5vcm1hbGl6ZSBvcHRpb24gYGVuY29kaW5nYFxuICAvLyBOb3RlOiBkZWZpbmVkIGZpcnN0IGJlY2F1c2Ugb3RoZXIgb3B0aW9ucyBkZXBlbmRzIG9uIGl0XG4gIC8vIHRvIGNvbnZlcnQgY2hhcnMvc3RyaW5ncyBpbnRvIGJ1ZmZlcnMuXG4gIGlmKG9wdGlvbnMuZW5jb2RpbmcgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLmVuY29kaW5nID09PSB0cnVlKXtcbiAgICBvcHRpb25zLmVuY29kaW5nID0gJ3V0ZjgnO1xuICB9ZWxzZSBpZihvcHRpb25zLmVuY29kaW5nID09PSBudWxsIHx8IG9wdGlvbnMuZW5jb2RpbmcgPT09IGZhbHNlKXtcbiAgICBvcHRpb25zLmVuY29kaW5nID0gbnVsbDtcbiAgfWVsc2UgaWYodHlwZW9mIG9wdGlvbnMuZW5jb2RpbmcgIT09ICdzdHJpbmcnICYmIG9wdGlvbnMuZW5jb2RpbmcgIT09IG51bGwpe1xuICAgIHRocm93IG5ldyBDc3ZFcnJvcignQ1NWX0lOVkFMSURfT1BUSU9OX0VOQ09ESU5HJywgW1xuICAgICAgJ0ludmFsaWQgb3B0aW9uIGVuY29kaW5nOicsXG4gICAgICAnZW5jb2RpbmcgbXVzdCBiZSBhIHN0cmluZyBvciBudWxsIHRvIHJldHVybiBhIGJ1ZmZlciwnLFxuICAgICAgYGdvdCAke0pTT04uc3RyaW5naWZ5KG9wdGlvbnMuZW5jb2RpbmcpfWBcbiAgICBdLCBvcHRpb25zKTtcbiAgfVxuICAvLyBOb3JtYWxpemUgb3B0aW9uIGBib21gXG4gIGlmKG9wdGlvbnMuYm9tID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5ib20gPT09IG51bGwgfHwgb3B0aW9ucy5ib20gPT09IGZhbHNlKXtcbiAgICBvcHRpb25zLmJvbSA9IGZhbHNlO1xuICB9ZWxzZSBpZihvcHRpb25zLmJvbSAhPT0gdHJ1ZSl7XG4gICAgdGhyb3cgbmV3IENzdkVycm9yKCdDU1ZfSU5WQUxJRF9PUFRJT05fQk9NJywgW1xuICAgICAgJ0ludmFsaWQgb3B0aW9uIGJvbTonLCAnYm9tIG11c3QgYmUgdHJ1ZSwnLFxuICAgICAgYGdvdCAke0pTT04uc3RyaW5naWZ5KG9wdGlvbnMuYm9tKX1gXG4gICAgXSwgb3B0aW9ucyk7XG4gIH1cbiAgLy8gTm9ybWFsaXplIG9wdGlvbiBgY2FzdGBcbiAgb3B0aW9ucy5jYXN0X2Z1bmN0aW9uID0gbnVsbDtcbiAgaWYob3B0aW9ucy5jYXN0ID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5jYXN0ID09PSBudWxsIHx8IG9wdGlvbnMuY2FzdCA9PT0gZmFsc2UgfHwgb3B0aW9ucy5jYXN0ID09PSAnJyl7XG4gICAgb3B0aW9ucy5jYXN0ID0gdW5kZWZpbmVkO1xuICB9ZWxzZSBpZih0eXBlb2Ygb3B0aW9ucy5jYXN0ID09PSAnZnVuY3Rpb24nKXtcbiAgICBvcHRpb25zLmNhc3RfZnVuY3Rpb24gPSBvcHRpb25zLmNhc3Q7XG4gICAgb3B0aW9ucy5jYXN0ID0gdHJ1ZTtcbiAgfWVsc2UgaWYob3B0aW9ucy5jYXN0ICE9PSB0cnVlKXtcbiAgICB0aHJvdyBuZXcgQ3N2RXJyb3IoJ0NTVl9JTlZBTElEX09QVElPTl9DQVNUJywgW1xuICAgICAgJ0ludmFsaWQgb3B0aW9uIGNhc3Q6JywgJ2Nhc3QgbXVzdCBiZSB0cnVlIG9yIGEgZnVuY3Rpb24sJyxcbiAgICAgIGBnb3QgJHtKU09OLnN0cmluZ2lmeShvcHRpb25zLmNhc3QpfWBcbiAgICBdLCBvcHRpb25zKTtcbiAgfVxuICAvLyBOb3JtYWxpemUgb3B0aW9uIGBjYXN0X2RhdGVgXG4gIGlmKG9wdGlvbnMuY2FzdF9kYXRlID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5jYXN0X2RhdGUgPT09IG51bGwgfHwgb3B0aW9ucy5jYXN0X2RhdGUgPT09IGZhbHNlIHx8IG9wdGlvbnMuY2FzdF9kYXRlID09PSAnJyl7XG4gICAgb3B0aW9ucy5jYXN0X2RhdGUgPSBmYWxzZTtcbiAgfWVsc2UgaWYob3B0aW9ucy5jYXN0X2RhdGUgPT09IHRydWUpe1xuICAgIG9wdGlvbnMuY2FzdF9kYXRlID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgY29uc3QgZGF0ZSA9IERhdGUucGFyc2UodmFsdWUpO1xuICAgICAgcmV0dXJuICFpc05hTihkYXRlKSA/IG5ldyBEYXRlKGRhdGUpIDogdmFsdWU7XG4gICAgfTtcbiAgfWVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmNhc3RfZGF0ZSAhPT0gJ2Z1bmN0aW9uJyl7XG4gICAgdGhyb3cgbmV3IENzdkVycm9yKCdDU1ZfSU5WQUxJRF9PUFRJT05fQ0FTVF9EQVRFJywgW1xuICAgICAgJ0ludmFsaWQgb3B0aW9uIGNhc3RfZGF0ZTonLCAnY2FzdF9kYXRlIG11c3QgYmUgdHJ1ZSBvciBhIGZ1bmN0aW9uLCcsXG4gICAgICBgZ290ICR7SlNPTi5zdHJpbmdpZnkob3B0aW9ucy5jYXN0X2RhdGUpfWBcbiAgICBdLCBvcHRpb25zKTtcbiAgfVxuICAvLyBOb3JtYWxpemUgb3B0aW9uIGBjb2x1bW5zYFxuICBvcHRpb25zLmNhc3RfZmlyc3RfbGluZV90b19oZWFkZXIgPSBudWxsO1xuICBpZihvcHRpb25zLmNvbHVtbnMgPT09IHRydWUpe1xuICAgIC8vIEZpZWxkcyBpbiB0aGUgZmlyc3QgbGluZSBhcmUgY29udmVydGVkIGFzLWlzIHRvIGNvbHVtbnNcbiAgICBvcHRpb25zLmNhc3RfZmlyc3RfbGluZV90b19oZWFkZXIgPSB1bmRlZmluZWQ7XG4gIH1lbHNlIGlmKHR5cGVvZiBvcHRpb25zLmNvbHVtbnMgPT09ICdmdW5jdGlvbicpe1xuICAgIG9wdGlvbnMuY2FzdF9maXJzdF9saW5lX3RvX2hlYWRlciA9IG9wdGlvbnMuY29sdW1ucztcbiAgICBvcHRpb25zLmNvbHVtbnMgPSB0cnVlO1xuICB9ZWxzZSBpZihBcnJheS5pc0FycmF5KG9wdGlvbnMuY29sdW1ucykpe1xuICAgIG9wdGlvbnMuY29sdW1ucyA9IG5vcm1hbGl6ZV9jb2x1bW5zX2FycmF5KG9wdGlvbnMuY29sdW1ucyk7XG4gIH1lbHNlIGlmKG9wdGlvbnMuY29sdW1ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMuY29sdW1ucyA9PT0gbnVsbCB8fCBvcHRpb25zLmNvbHVtbnMgPT09IGZhbHNlKXtcbiAgICBvcHRpb25zLmNvbHVtbnMgPSBmYWxzZTtcbiAgfWVsc2Uge1xuICAgIHRocm93IG5ldyBDc3ZFcnJvcignQ1NWX0lOVkFMSURfT1BUSU9OX0NPTFVNTlMnLCBbXG4gICAgICAnSW52YWxpZCBvcHRpb24gY29sdW1uczonLFxuICAgICAgJ2V4cGVjdCBhbiBhcnJheSwgYSBmdW5jdGlvbiBvciB0cnVlLCcsXG4gICAgICBgZ290ICR7SlNPTi5zdHJpbmdpZnkob3B0aW9ucy5jb2x1bW5zKX1gXG4gICAgXSwgb3B0aW9ucyk7XG4gIH1cbiAgLy8gTm9ybWFsaXplIG9wdGlvbiBgZ3JvdXBfY29sdW1uc19ieV9uYW1lYFxuICBpZihvcHRpb25zLmdyb3VwX2NvbHVtbnNfYnlfbmFtZSA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMuZ3JvdXBfY29sdW1uc19ieV9uYW1lID09PSBudWxsIHx8IG9wdGlvbnMuZ3JvdXBfY29sdW1uc19ieV9uYW1lID09PSBmYWxzZSl7XG4gICAgb3B0aW9ucy5ncm91cF9jb2x1bW5zX2J5X25hbWUgPSBmYWxzZTtcbiAgfWVsc2UgaWYob3B0aW9ucy5ncm91cF9jb2x1bW5zX2J5X25hbWUgIT09IHRydWUpe1xuICAgIHRocm93IG5ldyBDc3ZFcnJvcignQ1NWX0lOVkFMSURfT1BUSU9OX0dST1VQX0NPTFVNTlNfQllfTkFNRScsIFtcbiAgICAgICdJbnZhbGlkIG9wdGlvbiBncm91cF9jb2x1bW5zX2J5X25hbWU6JyxcbiAgICAgICdleHBlY3QgYW4gYm9vbGVhbiwnLFxuICAgICAgYGdvdCAke0pTT04uc3RyaW5naWZ5KG9wdGlvbnMuZ3JvdXBfY29sdW1uc19ieV9uYW1lKX1gXG4gICAgXSwgb3B0aW9ucyk7XG4gIH1lbHNlIGlmKG9wdGlvbnMuY29sdW1ucyA9PT0gZmFsc2Upe1xuICAgIHRocm93IG5ldyBDc3ZFcnJvcignQ1NWX0lOVkFMSURfT1BUSU9OX0dST1VQX0NPTFVNTlNfQllfTkFNRScsIFtcbiAgICAgICdJbnZhbGlkIG9wdGlvbiBncm91cF9jb2x1bW5zX2J5X25hbWU6JyxcbiAgICAgICd0aGUgYGNvbHVtbnNgIG1vZGUgbXVzdCBiZSBhY3RpdmF0ZWQuJ1xuICAgIF0sIG9wdGlvbnMpO1xuICB9XG4gIC8vIE5vcm1hbGl6ZSBvcHRpb24gYGNvbW1lbnRgXG4gIGlmKG9wdGlvbnMuY29tbWVudCA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMuY29tbWVudCA9PT0gbnVsbCB8fCBvcHRpb25zLmNvbW1lbnQgPT09IGZhbHNlIHx8IG9wdGlvbnMuY29tbWVudCA9PT0gJycpe1xuICAgIG9wdGlvbnMuY29tbWVudCA9IG51bGw7XG4gIH1lbHNlIHtcbiAgICBpZih0eXBlb2Ygb3B0aW9ucy5jb21tZW50ID09PSAnc3RyaW5nJyl7XG4gICAgICBvcHRpb25zLmNvbW1lbnQgPSBCdWZmZXIuZnJvbShvcHRpb25zLmNvbW1lbnQsIG9wdGlvbnMuZW5jb2RpbmcpO1xuICAgIH1cbiAgICBpZighaXNCdWZmZXIob3B0aW9ucy5jb21tZW50KSl7XG4gICAgICB0aHJvdyBuZXcgQ3N2RXJyb3IoJ0NTVl9JTlZBTElEX09QVElPTl9DT01NRU5UJywgW1xuICAgICAgICAnSW52YWxpZCBvcHRpb24gY29tbWVudDonLFxuICAgICAgICAnY29tbWVudCBtdXN0IGJlIGEgYnVmZmVyIG9yIGEgc3RyaW5nLCcsXG4gICAgICAgIGBnb3QgJHtKU09OLnN0cmluZ2lmeShvcHRpb25zLmNvbW1lbnQpfWBcbiAgICAgIF0sIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuICAvLyBOb3JtYWxpemUgb3B0aW9uIGBjb21tZW50X25vX2luZml4YFxuICBpZihvcHRpb25zLmNvbW1lbnRfbm9faW5maXggPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLmNvbW1lbnRfbm9faW5maXggPT09IG51bGwgfHwgb3B0aW9ucy5jb21tZW50X25vX2luZml4ID09PSBmYWxzZSl7XG4gICAgb3B0aW9ucy5jb21tZW50X25vX2luZml4ID0gZmFsc2U7XG4gIH1lbHNlIGlmKG9wdGlvbnMuY29tbWVudF9ub19pbmZpeCAhPT0gdHJ1ZSl7XG4gICAgdGhyb3cgbmV3IENzdkVycm9yKCdDU1ZfSU5WQUxJRF9PUFRJT05fQ09NTUVOVCcsIFtcbiAgICAgICdJbnZhbGlkIG9wdGlvbiBjb21tZW50X25vX2luZml4OicsXG4gICAgICAndmFsdWUgbXVzdCBiZSBhIGJvb2xlYW4sJyxcbiAgICAgIGBnb3QgJHtKU09OLnN0cmluZ2lmeShvcHRpb25zLmNvbW1lbnRfbm9faW5maXgpfWBcbiAgICBdLCBvcHRpb25zKTtcbiAgfVxuICAvLyBOb3JtYWxpemUgb3B0aW9uIGBkZWxpbWl0ZXJgXG4gIGNvbnN0IGRlbGltaXRlcl9qc29uID0gSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5kZWxpbWl0ZXIpO1xuICBpZighQXJyYXkuaXNBcnJheShvcHRpb25zLmRlbGltaXRlcikpIG9wdGlvbnMuZGVsaW1pdGVyID0gW29wdGlvbnMuZGVsaW1pdGVyXTtcbiAgaWYob3B0aW9ucy5kZWxpbWl0ZXIubGVuZ3RoID09PSAwKXtcbiAgICB0aHJvdyBuZXcgQ3N2RXJyb3IoJ0NTVl9JTlZBTElEX09QVElPTl9ERUxJTUlURVInLCBbXG4gICAgICAnSW52YWxpZCBvcHRpb24gZGVsaW1pdGVyOicsXG4gICAgICAnZGVsaW1pdGVyIG11c3QgYmUgYSBub24gZW1wdHkgc3RyaW5nIG9yIGJ1ZmZlciBvciBhcnJheSBvZiBzdHJpbmd8YnVmZmVyLCcsXG4gICAgICBgZ290ICR7ZGVsaW1pdGVyX2pzb259YFxuICAgIF0sIG9wdGlvbnMpO1xuICB9XG4gIG9wdGlvbnMuZGVsaW1pdGVyID0gb3B0aW9ucy5kZWxpbWl0ZXIubWFwKGZ1bmN0aW9uKGRlbGltaXRlcil7XG4gICAgaWYoZGVsaW1pdGVyID09PSB1bmRlZmluZWQgfHwgZGVsaW1pdGVyID09PSBudWxsIHx8IGRlbGltaXRlciA9PT0gZmFsc2Upe1xuICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKCcsJywgb3B0aW9ucy5lbmNvZGluZyk7XG4gICAgfVxuICAgIGlmKHR5cGVvZiBkZWxpbWl0ZXIgPT09ICdzdHJpbmcnKXtcbiAgICAgIGRlbGltaXRlciA9IEJ1ZmZlci5mcm9tKGRlbGltaXRlciwgb3B0aW9ucy5lbmNvZGluZyk7XG4gICAgfVxuICAgIGlmKCFpc0J1ZmZlcihkZWxpbWl0ZXIpIHx8IGRlbGltaXRlci5sZW5ndGggPT09IDApe1xuICAgICAgdGhyb3cgbmV3IENzdkVycm9yKCdDU1ZfSU5WQUxJRF9PUFRJT05fREVMSU1JVEVSJywgW1xuICAgICAgICAnSW52YWxpZCBvcHRpb24gZGVsaW1pdGVyOicsXG4gICAgICAgICdkZWxpbWl0ZXIgbXVzdCBiZSBhIG5vbiBlbXB0eSBzdHJpbmcgb3IgYnVmZmVyIG9yIGFycmF5IG9mIHN0cmluZ3xidWZmZXIsJyxcbiAgICAgICAgYGdvdCAke2RlbGltaXRlcl9qc29ufWBcbiAgICAgIF0sIG9wdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gZGVsaW1pdGVyO1xuICB9KTtcbiAgLy8gTm9ybWFsaXplIG9wdGlvbiBgZXNjYXBlYFxuICBpZihvcHRpb25zLmVzY2FwZSA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMuZXNjYXBlID09PSB0cnVlKXtcbiAgICBvcHRpb25zLmVzY2FwZSA9IEJ1ZmZlci5mcm9tKCdcIicsIG9wdGlvbnMuZW5jb2RpbmcpO1xuICB9ZWxzZSBpZih0eXBlb2Ygb3B0aW9ucy5lc2NhcGUgPT09ICdzdHJpbmcnKXtcbiAgICBvcHRpb25zLmVzY2FwZSA9IEJ1ZmZlci5mcm9tKG9wdGlvbnMuZXNjYXBlLCBvcHRpb25zLmVuY29kaW5nKTtcbiAgfWVsc2UgaWYgKG9wdGlvbnMuZXNjYXBlID09PSBudWxsIHx8IG9wdGlvbnMuZXNjYXBlID09PSBmYWxzZSl7XG4gICAgb3B0aW9ucy5lc2NhcGUgPSBudWxsO1xuICB9XG4gIGlmKG9wdGlvbnMuZXNjYXBlICE9PSBudWxsKXtcbiAgICBpZighaXNCdWZmZXIob3B0aW9ucy5lc2NhcGUpKXtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBPcHRpb246IGVzY2FwZSBtdXN0IGJlIGEgYnVmZmVyLCBhIHN0cmluZyBvciBhIGJvb2xlYW4sIGdvdCAke0pTT04uc3RyaW5naWZ5KG9wdGlvbnMuZXNjYXBlKX1gKTtcbiAgICB9XG4gIH1cbiAgLy8gTm9ybWFsaXplIG9wdGlvbiBgZnJvbWBcbiAgaWYob3B0aW9ucy5mcm9tID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5mcm9tID09PSBudWxsKXtcbiAgICBvcHRpb25zLmZyb20gPSAxO1xuICB9ZWxzZSB7XG4gICAgaWYodHlwZW9mIG9wdGlvbnMuZnJvbSA9PT0gJ3N0cmluZycgJiYgL1xcZCsvLnRlc3Qob3B0aW9ucy5mcm9tKSl7XG4gICAgICBvcHRpb25zLmZyb20gPSBwYXJzZUludChvcHRpb25zLmZyb20pO1xuICAgIH1cbiAgICBpZihOdW1iZXIuaXNJbnRlZ2VyKG9wdGlvbnMuZnJvbSkpe1xuICAgICAgaWYob3B0aW9ucy5mcm9tIDwgMCl7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBPcHRpb246IGZyb20gbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXIsIGdvdCAke0pTT04uc3RyaW5naWZ5KG9wdHMuZnJvbSl9YCk7XG4gICAgICB9XG4gICAgfWVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIE9wdGlvbjogZnJvbSBtdXN0IGJlIGFuIGludGVnZXIsIGdvdCAke0pTT04uc3RyaW5naWZ5KG9wdGlvbnMuZnJvbSl9YCk7XG4gICAgfVxuICB9XG4gIC8vIE5vcm1hbGl6ZSBvcHRpb24gYGZyb21fbGluZWBcbiAgaWYob3B0aW9ucy5mcm9tX2xpbmUgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLmZyb21fbGluZSA9PT0gbnVsbCl7XG4gICAgb3B0aW9ucy5mcm9tX2xpbmUgPSAxO1xuICB9ZWxzZSB7XG4gICAgaWYodHlwZW9mIG9wdGlvbnMuZnJvbV9saW5lID09PSAnc3RyaW5nJyAmJiAvXFxkKy8udGVzdChvcHRpb25zLmZyb21fbGluZSkpe1xuICAgICAgb3B0aW9ucy5mcm9tX2xpbmUgPSBwYXJzZUludChvcHRpb25zLmZyb21fbGluZSk7XG4gICAgfVxuICAgIGlmKE51bWJlci5pc0ludGVnZXIob3B0aW9ucy5mcm9tX2xpbmUpKXtcbiAgICAgIGlmKG9wdGlvbnMuZnJvbV9saW5lIDw9IDApe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgT3B0aW9uOiBmcm9tX2xpbmUgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXIgZ3JlYXRlciB0aGFuIDAsIGdvdCAke0pTT04uc3RyaW5naWZ5KG9wdHMuZnJvbV9saW5lKX1gKTtcbiAgICAgIH1cbiAgICB9ZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgT3B0aW9uOiBmcm9tX2xpbmUgbXVzdCBiZSBhbiBpbnRlZ2VyLCBnb3QgJHtKU09OLnN0cmluZ2lmeShvcHRzLmZyb21fbGluZSl9YCk7XG4gICAgfVxuICB9XG4gIC8vIE5vcm1hbGl6ZSBvcHRpb25zIGBpZ25vcmVfbGFzdF9kZWxpbWl0ZXJzYFxuICBpZihvcHRpb25zLmlnbm9yZV9sYXN0X2RlbGltaXRlcnMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLmlnbm9yZV9sYXN0X2RlbGltaXRlcnMgPT09IG51bGwpe1xuICAgIG9wdGlvbnMuaWdub3JlX2xhc3RfZGVsaW1pdGVycyA9IGZhbHNlO1xuICB9ZWxzZSBpZih0eXBlb2Ygb3B0aW9ucy5pZ25vcmVfbGFzdF9kZWxpbWl0ZXJzID09PSAnbnVtYmVyJyl7XG4gICAgb3B0aW9ucy5pZ25vcmVfbGFzdF9kZWxpbWl0ZXJzID0gTWF0aC5mbG9vcihvcHRpb25zLmlnbm9yZV9sYXN0X2RlbGltaXRlcnMpO1xuICAgIGlmKG9wdGlvbnMuaWdub3JlX2xhc3RfZGVsaW1pdGVycyA9PT0gMCl7XG4gICAgICBvcHRpb25zLmlnbm9yZV9sYXN0X2RlbGltaXRlcnMgPSBmYWxzZTtcbiAgICB9XG4gIH1lbHNlIGlmKHR5cGVvZiBvcHRpb25zLmlnbm9yZV9sYXN0X2RlbGltaXRlcnMgIT09ICdib29sZWFuJyl7XG4gICAgdGhyb3cgbmV3IENzdkVycm9yKCdDU1ZfSU5WQUxJRF9PUFRJT05fSUdOT1JFX0xBU1RfREVMSU1JVEVSUycsIFtcbiAgICAgICdJbnZhbGlkIG9wdGlvbiBgaWdub3JlX2xhc3RfZGVsaW1pdGVyc2A6JyxcbiAgICAgICd0aGUgdmFsdWUgbXVzdCBiZSBhIGJvb2xlYW4gdmFsdWUgb3IgYW4gaW50ZWdlciwnLFxuICAgICAgYGdvdCAke0pTT04uc3RyaW5naWZ5KG9wdGlvbnMuaWdub3JlX2xhc3RfZGVsaW1pdGVycyl9YFxuICAgIF0sIG9wdGlvbnMpO1xuICB9XG4gIGlmKG9wdGlvbnMuaWdub3JlX2xhc3RfZGVsaW1pdGVycyA9PT0gdHJ1ZSAmJiBvcHRpb25zLmNvbHVtbnMgPT09IGZhbHNlKXtcbiAgICB0aHJvdyBuZXcgQ3N2RXJyb3IoJ0NTVl9JR05PUkVfTEFTVF9ERUxJTUlURVJTX1JFUVVJUkVTX0NPTFVNTlMnLCBbXG4gICAgICAnVGhlIG9wdGlvbiBgaWdub3JlX2xhc3RfZGVsaW1pdGVyc2AnLFxuICAgICAgJ3JlcXVpcmVzIHRoZSBhY3RpdmF0aW9uIG9mIHRoZSBgY29sdW1uc2Agb3B0aW9uJ1xuICAgIF0sIG9wdGlvbnMpO1xuICB9XG4gIC8vIE5vcm1hbGl6ZSBvcHRpb24gYGluZm9gXG4gIGlmKG9wdGlvbnMuaW5mbyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMuaW5mbyA9PT0gbnVsbCB8fCBvcHRpb25zLmluZm8gPT09IGZhbHNlKXtcbiAgICBvcHRpb25zLmluZm8gPSBmYWxzZTtcbiAgfWVsc2UgaWYob3B0aW9ucy5pbmZvICE9PSB0cnVlKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgT3B0aW9uOiBpbmZvIG11c3QgYmUgdHJ1ZSwgZ290ICR7SlNPTi5zdHJpbmdpZnkob3B0aW9ucy5pbmZvKX1gKTtcbiAgfVxuICAvLyBOb3JtYWxpemUgb3B0aW9uIGBtYXhfcmVjb3JkX3NpemVgXG4gIGlmKG9wdGlvbnMubWF4X3JlY29yZF9zaXplID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5tYXhfcmVjb3JkX3NpemUgPT09IG51bGwgfHwgb3B0aW9ucy5tYXhfcmVjb3JkX3NpemUgPT09IGZhbHNlKXtcbiAgICBvcHRpb25zLm1heF9yZWNvcmRfc2l6ZSA9IDA7XG4gIH1lbHNlIGlmKE51bWJlci5pc0ludGVnZXIob3B0aW9ucy5tYXhfcmVjb3JkX3NpemUpICYmIG9wdGlvbnMubWF4X3JlY29yZF9zaXplID49IDApO2Vsc2UgaWYodHlwZW9mIG9wdGlvbnMubWF4X3JlY29yZF9zaXplID09PSAnc3RyaW5nJyAmJiAvXFxkKy8udGVzdChvcHRpb25zLm1heF9yZWNvcmRfc2l6ZSkpe1xuICAgIG9wdGlvbnMubWF4X3JlY29yZF9zaXplID0gcGFyc2VJbnQob3B0aW9ucy5tYXhfcmVjb3JkX3NpemUpO1xuICB9ZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIE9wdGlvbjogbWF4X3JlY29yZF9zaXplIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyLCBnb3QgJHtKU09OLnN0cmluZ2lmeShvcHRpb25zLm1heF9yZWNvcmRfc2l6ZSl9YCk7XG4gIH1cbiAgLy8gTm9ybWFsaXplIG9wdGlvbiBgb2JqbmFtZWBcbiAgaWYob3B0aW9ucy5vYmpuYW1lID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5vYmpuYW1lID09PSBudWxsIHx8IG9wdGlvbnMub2JqbmFtZSA9PT0gZmFsc2Upe1xuICAgIG9wdGlvbnMub2JqbmFtZSA9IHVuZGVmaW5lZDtcbiAgfWVsc2UgaWYoaXNCdWZmZXIob3B0aW9ucy5vYmpuYW1lKSl7XG4gICAgaWYob3B0aW9ucy5vYmpuYW1lLmxlbmd0aCA9PT0gMCl7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgT3B0aW9uOiBvYmpuYW1lIG11c3QgYmUgYSBub24gZW1wdHkgYnVmZmVyYCk7XG4gICAgfVxuICAgIGlmKG9wdGlvbnMuZW5jb2RpbmcgPT09IG51bGwpO2Vsc2Uge1xuICAgICAgb3B0aW9ucy5vYmpuYW1lID0gb3B0aW9ucy5vYmpuYW1lLnRvU3RyaW5nKG9wdGlvbnMuZW5jb2RpbmcpO1xuICAgIH1cbiAgfWVsc2UgaWYodHlwZW9mIG9wdGlvbnMub2JqbmFtZSA9PT0gJ3N0cmluZycpe1xuICAgIGlmKG9wdGlvbnMub2JqbmFtZS5sZW5ndGggPT09IDApe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIE9wdGlvbjogb2JqbmFtZSBtdXN0IGJlIGEgbm9uIGVtcHR5IHN0cmluZ2ApO1xuICAgIH1cbiAgICAvLyBHcmVhdCwgbm90aGluZyB0byBkb1xuICB9ZWxzZSBpZih0eXBlb2Ygb3B0aW9ucy5vYmpuYW1lID09PSAnbnVtYmVyJyk7ZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIE9wdGlvbjogb2JqbmFtZSBtdXN0IGJlIGEgc3RyaW5nIG9yIGEgYnVmZmVyLCBnb3QgJHtvcHRpb25zLm9iam5hbWV9YCk7XG4gIH1cbiAgaWYob3B0aW9ucy5vYmpuYW1lICE9PSB1bmRlZmluZWQpe1xuICAgIGlmKHR5cGVvZiBvcHRpb25zLm9iam5hbWUgPT09ICdudW1iZXInKXtcbiAgICAgIGlmKG9wdGlvbnMuY29sdW1ucyAhPT0gZmFsc2Upe1xuICAgICAgICB0aHJvdyBFcnJvcignSW52YWxpZCBPcHRpb246IG9iam5hbWUgaW5kZXggY2Fubm90IGJlIGNvbWJpbmVkIHdpdGggY29sdW1ucyBvciBiZSBkZWZpbmVkIGFzIGEgZmllbGQnKTtcbiAgICAgIH1cbiAgICB9ZWxzZSB7IC8vIEEgc3RyaW5nIG9yIGEgYnVmZmVyXG4gICAgICBpZihvcHRpb25zLmNvbHVtbnMgPT09IGZhbHNlKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgT3B0aW9uOiBvYmpuYW1lIGZpZWxkIG11c3QgYmUgY29tYmluZWQgd2l0aCBjb2x1bW5zIG9yIGJlIGRlZmluZWQgYXMgYW4gaW5kZXgnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gTm9ybWFsaXplIG9wdGlvbiBgb25fcmVjb3JkYFxuICBpZihvcHRpb25zLm9uX3JlY29yZCA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMub25fcmVjb3JkID09PSBudWxsKXtcbiAgICBvcHRpb25zLm9uX3JlY29yZCA9IHVuZGVmaW5lZDtcbiAgfWVsc2UgaWYodHlwZW9mIG9wdGlvbnMub25fcmVjb3JkICE9PSAnZnVuY3Rpb24nKXtcbiAgICB0aHJvdyBuZXcgQ3N2RXJyb3IoJ0NTVl9JTlZBTElEX09QVElPTl9PTl9SRUNPUkQnLCBbXG4gICAgICAnSW52YWxpZCBvcHRpb24gYG9uX3JlY29yZGA6JyxcbiAgICAgICdleHBlY3QgYSBmdW5jdGlvbiwnLFxuICAgICAgYGdvdCAke0pTT04uc3RyaW5naWZ5KG9wdGlvbnMub25fcmVjb3JkKX1gXG4gICAgXSwgb3B0aW9ucyk7XG4gIH1cbiAgLy8gTm9ybWFsaXplIG9wdGlvbiBgb25fc2tpcGBcbiAgLy8gb3B0aW9ucy5vbl9za2lwID8/PSAoZXJyLCBjaHVuaykgPT4ge1xuICAvLyAgIHRoaXMuZW1pdCgnc2tpcCcsIGVyciwgY2h1bmspO1xuICAvLyB9O1xuICBpZihvcHRpb25zLm9uX3NraXAgIT09IHVuZGVmaW5lZCAmJiBvcHRpb25zLm9uX3NraXAgIT09IG51bGwgJiYgdHlwZW9mIG9wdGlvbnMub25fc2tpcCAhPT0gJ2Z1bmN0aW9uJyl7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIE9wdGlvbjogb25fc2tpcCBtdXN0IGJlIGEgZnVuY3Rpb24sIGdvdCAke0pTT04uc3RyaW5naWZ5KG9wdGlvbnMub25fc2tpcCl9YCk7XG4gIH1cbiAgLy8gTm9ybWFsaXplIG9wdGlvbiBgcXVvdGVgXG4gIGlmKG9wdGlvbnMucXVvdGUgPT09IG51bGwgfHwgb3B0aW9ucy5xdW90ZSA9PT0gZmFsc2UgfHwgb3B0aW9ucy5xdW90ZSA9PT0gJycpe1xuICAgIG9wdGlvbnMucXVvdGUgPSBudWxsO1xuICB9ZWxzZSB7XG4gICAgaWYob3B0aW9ucy5xdW90ZSA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMucXVvdGUgPT09IHRydWUpe1xuICAgICAgb3B0aW9ucy5xdW90ZSA9IEJ1ZmZlci5mcm9tKCdcIicsIG9wdGlvbnMuZW5jb2RpbmcpO1xuICAgIH1lbHNlIGlmKHR5cGVvZiBvcHRpb25zLnF1b3RlID09PSAnc3RyaW5nJyl7XG4gICAgICBvcHRpb25zLnF1b3RlID0gQnVmZmVyLmZyb20ob3B0aW9ucy5xdW90ZSwgb3B0aW9ucy5lbmNvZGluZyk7XG4gICAgfVxuICAgIGlmKCFpc0J1ZmZlcihvcHRpb25zLnF1b3RlKSl7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgT3B0aW9uOiBxdW90ZSBtdXN0IGJlIGEgYnVmZmVyIG9yIGEgc3RyaW5nLCBnb3QgJHtKU09OLnN0cmluZ2lmeShvcHRpb25zLnF1b3RlKX1gKTtcbiAgICB9XG4gIH1cbiAgLy8gTm9ybWFsaXplIG9wdGlvbiBgcmF3YFxuICBpZihvcHRpb25zLnJhdyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMucmF3ID09PSBudWxsIHx8IG9wdGlvbnMucmF3ID09PSBmYWxzZSl7XG4gICAgb3B0aW9ucy5yYXcgPSBmYWxzZTtcbiAgfWVsc2UgaWYob3B0aW9ucy5yYXcgIT09IHRydWUpe1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBPcHRpb246IHJhdyBtdXN0IGJlIHRydWUsIGdvdCAke0pTT04uc3RyaW5naWZ5KG9wdGlvbnMucmF3KX1gKTtcbiAgfVxuICAvLyBOb3JtYWxpemUgb3B0aW9uIGByZWNvcmRfZGVsaW1pdGVyYFxuICBpZihvcHRpb25zLnJlY29yZF9kZWxpbWl0ZXIgPT09IHVuZGVmaW5lZCl7XG4gICAgb3B0aW9ucy5yZWNvcmRfZGVsaW1pdGVyID0gW107XG4gIH1lbHNlIGlmKHR5cGVvZiBvcHRpb25zLnJlY29yZF9kZWxpbWl0ZXIgPT09ICdzdHJpbmcnIHx8IGlzQnVmZmVyKG9wdGlvbnMucmVjb3JkX2RlbGltaXRlcikpe1xuICAgIGlmKG9wdGlvbnMucmVjb3JkX2RlbGltaXRlci5sZW5ndGggPT09IDApe1xuICAgICAgdGhyb3cgbmV3IENzdkVycm9yKCdDU1ZfSU5WQUxJRF9PUFRJT05fUkVDT1JEX0RFTElNSVRFUicsIFtcbiAgICAgICAgJ0ludmFsaWQgb3B0aW9uIGByZWNvcmRfZGVsaW1pdGVyYDonLFxuICAgICAgICAndmFsdWUgbXVzdCBiZSBhIG5vbiBlbXB0eSBzdHJpbmcgb3IgYnVmZmVyLCcsXG4gICAgICAgIGBnb3QgJHtKU09OLnN0cmluZ2lmeShvcHRpb25zLnJlY29yZF9kZWxpbWl0ZXIpfWBcbiAgICAgIF0sIG9wdGlvbnMpO1xuICAgIH1cbiAgICBvcHRpb25zLnJlY29yZF9kZWxpbWl0ZXIgPSBbb3B0aW9ucy5yZWNvcmRfZGVsaW1pdGVyXTtcbiAgfWVsc2UgaWYoIUFycmF5LmlzQXJyYXkob3B0aW9ucy5yZWNvcmRfZGVsaW1pdGVyKSl7XG4gICAgdGhyb3cgbmV3IENzdkVycm9yKCdDU1ZfSU5WQUxJRF9PUFRJT05fUkVDT1JEX0RFTElNSVRFUicsIFtcbiAgICAgICdJbnZhbGlkIG9wdGlvbiBgcmVjb3JkX2RlbGltaXRlcmA6JyxcbiAgICAgICd2YWx1ZSBtdXN0IGJlIGEgc3RyaW5nLCBhIGJ1ZmZlciBvciBhcnJheSBvZiBzdHJpbmd8YnVmZmVyLCcsXG4gICAgICBgZ290ICR7SlNPTi5zdHJpbmdpZnkob3B0aW9ucy5yZWNvcmRfZGVsaW1pdGVyKX1gXG4gICAgXSwgb3B0aW9ucyk7XG4gIH1cbiAgb3B0aW9ucy5yZWNvcmRfZGVsaW1pdGVyID0gb3B0aW9ucy5yZWNvcmRfZGVsaW1pdGVyLm1hcChmdW5jdGlvbihyZCwgaSl7XG4gICAgaWYodHlwZW9mIHJkICE9PSAnc3RyaW5nJyAmJiAhIGlzQnVmZmVyKHJkKSl7XG4gICAgICB0aHJvdyBuZXcgQ3N2RXJyb3IoJ0NTVl9JTlZBTElEX09QVElPTl9SRUNPUkRfREVMSU1JVEVSJywgW1xuICAgICAgICAnSW52YWxpZCBvcHRpb24gYHJlY29yZF9kZWxpbWl0ZXJgOicsXG4gICAgICAgICd2YWx1ZSBtdXN0IGJlIGEgc3RyaW5nLCBhIGJ1ZmZlciBvciBhcnJheSBvZiBzdHJpbmd8YnVmZmVyJyxcbiAgICAgICAgYGF0IGluZGV4ICR7aX0sYCxcbiAgICAgICAgYGdvdCAke0pTT04uc3RyaW5naWZ5KHJkKX1gXG4gICAgICBdLCBvcHRpb25zKTtcbiAgICB9ZWxzZSBpZihyZC5sZW5ndGggPT09IDApe1xuICAgICAgdGhyb3cgbmV3IENzdkVycm9yKCdDU1ZfSU5WQUxJRF9PUFRJT05fUkVDT1JEX0RFTElNSVRFUicsIFtcbiAgICAgICAgJ0ludmFsaWQgb3B0aW9uIGByZWNvcmRfZGVsaW1pdGVyYDonLFxuICAgICAgICAndmFsdWUgbXVzdCBiZSBhIG5vbiBlbXB0eSBzdHJpbmcgb3IgYnVmZmVyJyxcbiAgICAgICAgYGF0IGluZGV4ICR7aX0sYCxcbiAgICAgICAgYGdvdCAke0pTT04uc3RyaW5naWZ5KHJkKX1gXG4gICAgICBdLCBvcHRpb25zKTtcbiAgICB9XG4gICAgaWYodHlwZW9mIHJkID09PSAnc3RyaW5nJyl7XG4gICAgICByZCA9IEJ1ZmZlci5mcm9tKHJkLCBvcHRpb25zLmVuY29kaW5nKTtcbiAgICB9XG4gICAgcmV0dXJuIHJkO1xuICB9KTtcbiAgLy8gTm9ybWFsaXplIG9wdGlvbiBgcmVsYXhfY29sdW1uX2NvdW50YFxuICBpZih0eXBlb2Ygb3B0aW9ucy5yZWxheF9jb2x1bW5fY291bnQgPT09ICdib29sZWFuJyk7ZWxzZSBpZihvcHRpb25zLnJlbGF4X2NvbHVtbl9jb3VudCA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMucmVsYXhfY29sdW1uX2NvdW50ID09PSBudWxsKXtcbiAgICBvcHRpb25zLnJlbGF4X2NvbHVtbl9jb3VudCA9IGZhbHNlO1xuICB9ZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIE9wdGlvbjogcmVsYXhfY29sdW1uX2NvdW50IG11c3QgYmUgYSBib29sZWFuLCBnb3QgJHtKU09OLnN0cmluZ2lmeShvcHRpb25zLnJlbGF4X2NvbHVtbl9jb3VudCl9YCk7XG4gIH1cbiAgaWYodHlwZW9mIG9wdGlvbnMucmVsYXhfY29sdW1uX2NvdW50X2xlc3MgPT09ICdib29sZWFuJyk7ZWxzZSBpZihvcHRpb25zLnJlbGF4X2NvbHVtbl9jb3VudF9sZXNzID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5yZWxheF9jb2x1bW5fY291bnRfbGVzcyA9PT0gbnVsbCl7XG4gICAgb3B0aW9ucy5yZWxheF9jb2x1bW5fY291bnRfbGVzcyA9IGZhbHNlO1xuICB9ZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIE9wdGlvbjogcmVsYXhfY29sdW1uX2NvdW50X2xlc3MgbXVzdCBiZSBhIGJvb2xlYW4sIGdvdCAke0pTT04uc3RyaW5naWZ5KG9wdGlvbnMucmVsYXhfY29sdW1uX2NvdW50X2xlc3MpfWApO1xuICB9XG4gIGlmKHR5cGVvZiBvcHRpb25zLnJlbGF4X2NvbHVtbl9jb3VudF9tb3JlID09PSAnYm9vbGVhbicpO2Vsc2UgaWYob3B0aW9ucy5yZWxheF9jb2x1bW5fY291bnRfbW9yZSA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMucmVsYXhfY29sdW1uX2NvdW50X21vcmUgPT09IG51bGwpe1xuICAgIG9wdGlvbnMucmVsYXhfY29sdW1uX2NvdW50X21vcmUgPSBmYWxzZTtcbiAgfWVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBPcHRpb246IHJlbGF4X2NvbHVtbl9jb3VudF9tb3JlIG11c3QgYmUgYSBib29sZWFuLCBnb3QgJHtKU09OLnN0cmluZ2lmeShvcHRpb25zLnJlbGF4X2NvbHVtbl9jb3VudF9tb3JlKX1gKTtcbiAgfVxuICAvLyBOb3JtYWxpemUgb3B0aW9uIGByZWxheF9xdW90ZXNgXG4gIGlmKHR5cGVvZiBvcHRpb25zLnJlbGF4X3F1b3RlcyA9PT0gJ2Jvb2xlYW4nKTtlbHNlIGlmKG9wdGlvbnMucmVsYXhfcXVvdGVzID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5yZWxheF9xdW90ZXMgPT09IG51bGwpe1xuICAgIG9wdGlvbnMucmVsYXhfcXVvdGVzID0gZmFsc2U7XG4gIH1lbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgT3B0aW9uOiByZWxheF9xdW90ZXMgbXVzdCBiZSBhIGJvb2xlYW4sIGdvdCAke0pTT04uc3RyaW5naWZ5KG9wdGlvbnMucmVsYXhfcXVvdGVzKX1gKTtcbiAgfVxuICAvLyBOb3JtYWxpemUgb3B0aW9uIGBza2lwX2VtcHR5X2xpbmVzYFxuICBpZih0eXBlb2Ygb3B0aW9ucy5za2lwX2VtcHR5X2xpbmVzID09PSAnYm9vbGVhbicpO2Vsc2UgaWYob3B0aW9ucy5za2lwX2VtcHR5X2xpbmVzID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5za2lwX2VtcHR5X2xpbmVzID09PSBudWxsKXtcbiAgICBvcHRpb25zLnNraXBfZW1wdHlfbGluZXMgPSBmYWxzZTtcbiAgfWVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBPcHRpb246IHNraXBfZW1wdHlfbGluZXMgbXVzdCBiZSBhIGJvb2xlYW4sIGdvdCAke0pTT04uc3RyaW5naWZ5KG9wdGlvbnMuc2tpcF9lbXB0eV9saW5lcyl9YCk7XG4gIH1cbiAgLy8gTm9ybWFsaXplIG9wdGlvbiBgc2tpcF9yZWNvcmRzX3dpdGhfZW1wdHlfdmFsdWVzYFxuICBpZih0eXBlb2Ygb3B0aW9ucy5za2lwX3JlY29yZHNfd2l0aF9lbXB0eV92YWx1ZXMgPT09ICdib29sZWFuJyk7ZWxzZSBpZihvcHRpb25zLnNraXBfcmVjb3Jkc193aXRoX2VtcHR5X3ZhbHVlcyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMuc2tpcF9yZWNvcmRzX3dpdGhfZW1wdHlfdmFsdWVzID09PSBudWxsKXtcbiAgICBvcHRpb25zLnNraXBfcmVjb3Jkc193aXRoX2VtcHR5X3ZhbHVlcyA9IGZhbHNlO1xuICB9ZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIE9wdGlvbjogc2tpcF9yZWNvcmRzX3dpdGhfZW1wdHlfdmFsdWVzIG11c3QgYmUgYSBib29sZWFuLCBnb3QgJHtKU09OLnN0cmluZ2lmeShvcHRpb25zLnNraXBfcmVjb3Jkc193aXRoX2VtcHR5X3ZhbHVlcyl9YCk7XG4gIH1cbiAgLy8gTm9ybWFsaXplIG9wdGlvbiBgc2tpcF9yZWNvcmRzX3dpdGhfZXJyb3JgXG4gIGlmKHR5cGVvZiBvcHRpb25zLnNraXBfcmVjb3Jkc193aXRoX2Vycm9yID09PSAnYm9vbGVhbicpO2Vsc2UgaWYob3B0aW9ucy5za2lwX3JlY29yZHNfd2l0aF9lcnJvciA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMuc2tpcF9yZWNvcmRzX3dpdGhfZXJyb3IgPT09IG51bGwpe1xuICAgIG9wdGlvbnMuc2tpcF9yZWNvcmRzX3dpdGhfZXJyb3IgPSBmYWxzZTtcbiAgfWVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBPcHRpb246IHNraXBfcmVjb3Jkc193aXRoX2Vycm9yIG11c3QgYmUgYSBib29sZWFuLCBnb3QgJHtKU09OLnN0cmluZ2lmeShvcHRpb25zLnNraXBfcmVjb3Jkc193aXRoX2Vycm9yKX1gKTtcbiAgfVxuICAvLyBOb3JtYWxpemUgb3B0aW9uIGBydHJpbWBcbiAgaWYob3B0aW9ucy5ydHJpbSA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMucnRyaW0gPT09IG51bGwgfHwgb3B0aW9ucy5ydHJpbSA9PT0gZmFsc2Upe1xuICAgIG9wdGlvbnMucnRyaW0gPSBmYWxzZTtcbiAgfWVsc2UgaWYob3B0aW9ucy5ydHJpbSAhPT0gdHJ1ZSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIE9wdGlvbjogcnRyaW0gbXVzdCBiZSBhIGJvb2xlYW4sIGdvdCAke0pTT04uc3RyaW5naWZ5KG9wdGlvbnMucnRyaW0pfWApO1xuICB9XG4gIC8vIE5vcm1hbGl6ZSBvcHRpb24gYGx0cmltYFxuICBpZihvcHRpb25zLmx0cmltID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5sdHJpbSA9PT0gbnVsbCB8fCBvcHRpb25zLmx0cmltID09PSBmYWxzZSl7XG4gICAgb3B0aW9ucy5sdHJpbSA9IGZhbHNlO1xuICB9ZWxzZSBpZihvcHRpb25zLmx0cmltICE9PSB0cnVlKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgT3B0aW9uOiBsdHJpbSBtdXN0IGJlIGEgYm9vbGVhbiwgZ290ICR7SlNPTi5zdHJpbmdpZnkob3B0aW9ucy5sdHJpbSl9YCk7XG4gIH1cbiAgLy8gTm9ybWFsaXplIG9wdGlvbiBgdHJpbWBcbiAgaWYob3B0aW9ucy50cmltID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy50cmltID09PSBudWxsIHx8IG9wdGlvbnMudHJpbSA9PT0gZmFsc2Upe1xuICAgIG9wdGlvbnMudHJpbSA9IGZhbHNlO1xuICB9ZWxzZSBpZihvcHRpb25zLnRyaW0gIT09IHRydWUpe1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBPcHRpb246IHRyaW0gbXVzdCBiZSBhIGJvb2xlYW4sIGdvdCAke0pTT04uc3RyaW5naWZ5KG9wdGlvbnMudHJpbSl9YCk7XG4gIH1cbiAgLy8gTm9ybWFsaXplIG9wdGlvbnMgYHRyaW1gLCBgbHRyaW1gIGFuZCBgcnRyaW1gXG4gIGlmKG9wdGlvbnMudHJpbSA9PT0gdHJ1ZSAmJiBvcHRzLmx0cmltICE9PSBmYWxzZSl7XG4gICAgb3B0aW9ucy5sdHJpbSA9IHRydWU7XG4gIH1lbHNlIGlmKG9wdGlvbnMubHRyaW0gIT09IHRydWUpe1xuICAgIG9wdGlvbnMubHRyaW0gPSBmYWxzZTtcbiAgfVxuICBpZihvcHRpb25zLnRyaW0gPT09IHRydWUgJiYgb3B0cy5ydHJpbSAhPT0gZmFsc2Upe1xuICAgIG9wdGlvbnMucnRyaW0gPSB0cnVlO1xuICB9ZWxzZSBpZihvcHRpb25zLnJ0cmltICE9PSB0cnVlKXtcbiAgICBvcHRpb25zLnJ0cmltID0gZmFsc2U7XG4gIH1cbiAgLy8gTm9ybWFsaXplIG9wdGlvbiBgdG9gXG4gIGlmKG9wdGlvbnMudG8gPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnRvID09PSBudWxsKXtcbiAgICBvcHRpb25zLnRvID0gLTE7XG4gIH1lbHNlIHtcbiAgICBpZih0eXBlb2Ygb3B0aW9ucy50byA9PT0gJ3N0cmluZycgJiYgL1xcZCsvLnRlc3Qob3B0aW9ucy50bykpe1xuICAgICAgb3B0aW9ucy50byA9IHBhcnNlSW50KG9wdGlvbnMudG8pO1xuICAgIH1cbiAgICBpZihOdW1iZXIuaXNJbnRlZ2VyKG9wdGlvbnMudG8pKXtcbiAgICAgIGlmKG9wdGlvbnMudG8gPD0gMCl7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBPcHRpb246IHRvIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiAwLCBnb3QgJHtKU09OLnN0cmluZ2lmeShvcHRzLnRvKX1gKTtcbiAgICAgIH1cbiAgICB9ZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgT3B0aW9uOiB0byBtdXN0IGJlIGFuIGludGVnZXIsIGdvdCAke0pTT04uc3RyaW5naWZ5KG9wdHMudG8pfWApO1xuICAgIH1cbiAgfVxuICAvLyBOb3JtYWxpemUgb3B0aW9uIGB0b19saW5lYFxuICBpZihvcHRpb25zLnRvX2xpbmUgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnRvX2xpbmUgPT09IG51bGwpe1xuICAgIG9wdGlvbnMudG9fbGluZSA9IC0xO1xuICB9ZWxzZSB7XG4gICAgaWYodHlwZW9mIG9wdGlvbnMudG9fbGluZSA9PT0gJ3N0cmluZycgJiYgL1xcZCsvLnRlc3Qob3B0aW9ucy50b19saW5lKSl7XG4gICAgICBvcHRpb25zLnRvX2xpbmUgPSBwYXJzZUludChvcHRpb25zLnRvX2xpbmUpO1xuICAgIH1cbiAgICBpZihOdW1iZXIuaXNJbnRlZ2VyKG9wdGlvbnMudG9fbGluZSkpe1xuICAgICAgaWYob3B0aW9ucy50b19saW5lIDw9IDApe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgT3B0aW9uOiB0b19saW5lIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiAwLCBnb3QgJHtKU09OLnN0cmluZ2lmeShvcHRzLnRvX2xpbmUpfWApO1xuICAgICAgfVxuICAgIH1lbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBPcHRpb246IHRvX2xpbmUgbXVzdCBiZSBhbiBpbnRlZ2VyLCBnb3QgJHtKU09OLnN0cmluZ2lmeShvcHRzLnRvX2xpbmUpfWApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb3B0aW9ucztcbn07XG5cbmNvbnN0IGlzUmVjb3JkRW1wdHkgPSBmdW5jdGlvbihyZWNvcmQpe1xuICByZXR1cm4gcmVjb3JkLmV2ZXJ5KChmaWVsZCkgPT4gZmllbGQgPT0gbnVsbCB8fCBmaWVsZC50b1N0cmluZyAmJiBmaWVsZC50b1N0cmluZygpLnRyaW0oKSA9PT0gJycpO1xufTtcblxuY29uc3QgY3IgPSAxMzsgLy8gYFxccmAsIGNhcnJpYWdlIHJldHVybiwgMHgwRCBpbiBoZXhhZMOpY2ltYWwsIDEzIGluIGRlY2ltYWxcbmNvbnN0IG5sID0gMTA7IC8vIGBcXG5gLCBuZXdsaW5lLCAweDBBIGluIGhleGFkZWNpbWFsLCAxMCBpbiBkZWNpbWFsXG5cbmNvbnN0IGJvbXMgPSB7XG4gIC8vIE5vdGUsIHRoZSBmb2xsb3dpbmcgYXJlIGVxdWFsczpcbiAgLy8gQnVmZmVyLmZyb20oXCJcXHVmZWZmXCIpXG4gIC8vIEJ1ZmZlci5mcm9tKFsyMzksIDE4NywgMTkxXSlcbiAgLy8gQnVmZmVyLmZyb20oJ0VGQkJCRicsICdoZXgnKVxuICAndXRmOCc6IEJ1ZmZlci5mcm9tKFsyMzksIDE4NywgMTkxXSksXG4gIC8vIE5vdGUsIHRoZSBmb2xsb3dpbmcgYXJlIGVxdWFsczpcbiAgLy8gQnVmZmVyLmZyb20gXCJcXHVmZWZmXCIsICd1dGYxNmxlXG4gIC8vIEJ1ZmZlci5mcm9tKFsyNTUsIDI1NF0pXG4gICd1dGYxNmxlJzogQnVmZmVyLmZyb20oWzI1NSwgMjU0XSlcbn07XG5cbmNvbnN0IHRyYW5zZm9ybSA9IGZ1bmN0aW9uKG9yaWdpbmFsX29wdGlvbnMgPSB7fSkge1xuICBjb25zdCBpbmZvID0ge1xuICAgIGJ5dGVzOiAwLFxuICAgIGNvbW1lbnRfbGluZXM6IDAsXG4gICAgZW1wdHlfbGluZXM6IDAsXG4gICAgaW52YWxpZF9maWVsZF9sZW5ndGg6IDAsXG4gICAgbGluZXM6IDEsXG4gICAgcmVjb3JkczogMFxuICB9O1xuICBjb25zdCBvcHRpb25zID0gbm9ybWFsaXplX29wdGlvbnMob3JpZ2luYWxfb3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgaW5mbzogaW5mbyxcbiAgICBvcmlnaW5hbF9vcHRpb25zOiBvcmlnaW5hbF9vcHRpb25zLFxuICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgc3RhdGU6IGluaXRfc3RhdGUob3B0aW9ucyksXG4gICAgX19uZWVkTW9yZURhdGE6IGZ1bmN0aW9uKGksIGJ1ZkxlbiwgZW5kKXtcbiAgICAgIGlmKGVuZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgY29uc3Qge2VuY29kaW5nLCBlc2NhcGUsIHF1b3RlfSA9IHRoaXMub3B0aW9ucztcbiAgICAgIGNvbnN0IHtxdW90aW5nLCBuZWVkTW9yZURhdGFTaXplLCByZWNvcmREZWxpbWl0ZXJNYXhMZW5ndGh9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGNvbnN0IG51bU9mQ2hhckxlZnQgPSBidWZMZW4gLSBpIC0gMTtcbiAgICAgIGNvbnN0IHJlcXVpcmVkTGVuZ3RoID0gTWF0aC5tYXgoXG4gICAgICAgIG5lZWRNb3JlRGF0YVNpemUsXG4gICAgICAgIC8vIFNraXAgaWYgdGhlIHJlbWFpbmluZyBidWZmZXIgc21hbGxlciB0aGFuIHJlY29yZCBkZWxpbWl0ZXJcbiAgICAgICAgLy8gSWYgXCJyZWNvcmRfZGVsaW1pdGVyXCIgaXMgeWV0IHRvIGJlIGRpc2NvdmVyZWQ6XG4gICAgICAgIC8vIDEuIEl0IGlzIGVxdWFscyB0byBgW11gIGFuZCBcInJlY29yZERlbGltaXRlck1heExlbmd0aFwiIGVxdWFscyBgMGBcbiAgICAgICAgLy8gMi4gV2Ugc2V0IHRoZSBsZW5ndGggdG8gd2luZG93cyBsaW5lIGVuZGluZyBpbiB0aGUgY3VycmVudCBlbmNvZGluZ1xuICAgICAgICAvLyBOb3RlLCB0aGF0IGVuY29kaW5nIGlzIGtub3duIGZyb20gdXNlciBvciBib20gZGlzY292ZXJ5IGF0IHRoYXQgcG9pbnRcbiAgICAgICAgLy8gcmVjb3JkRGVsaW1pdGVyTWF4TGVuZ3RoLFxuICAgICAgICByZWNvcmREZWxpbWl0ZXJNYXhMZW5ndGggPT09IDAgPyBCdWZmZXIuZnJvbSgnXFxyXFxuJywgZW5jb2RpbmcpLmxlbmd0aCA6IHJlY29yZERlbGltaXRlck1heExlbmd0aCxcbiAgICAgICAgLy8gU2tpcCBpZiByZW1haW5pbmcgYnVmZmVyIGNhbiBiZSBhbiBlc2NhcGVkIHF1b3RlXG4gICAgICAgIHF1b3RpbmcgPyAoKGVzY2FwZSA9PT0gbnVsbCA/IDAgOiBlc2NhcGUubGVuZ3RoKSArIHF1b3RlLmxlbmd0aCkgOiAwLFxuICAgICAgICAvLyBTa2lwIGlmIHJlbWFpbmluZyBidWZmZXIgY2FuIGJlIHJlY29yZCBkZWxpbWl0ZXIgZm9sbG93aW5nIHRoZSBjbG9zaW5nIHF1b3RlXG4gICAgICAgIHF1b3RpbmcgPyAocXVvdGUubGVuZ3RoICsgcmVjb3JkRGVsaW1pdGVyTWF4TGVuZ3RoKSA6IDAsXG4gICAgICApO1xuICAgICAgcmV0dXJuIG51bU9mQ2hhckxlZnQgPCByZXF1aXJlZExlbmd0aDtcbiAgICB9LFxuICAgIC8vIENlbnRyYWwgcGFyc2VyIGltcGxlbWVudGF0aW9uXG4gICAgcGFyc2U6IGZ1bmN0aW9uKG5leHRCdWYsIGVuZCwgcHVzaCwgY2xvc2Upe1xuICAgICAgY29uc3Qge2JvbSwgY29tbWVudF9ub19pbmZpeCwgZW5jb2RpbmcsIGZyb21fbGluZSwgbHRyaW0sIG1heF9yZWNvcmRfc2l6ZSxyYXcsIHJlbGF4X3F1b3RlcywgcnRyaW0sIHNraXBfZW1wdHlfbGluZXMsIHRvLCB0b19saW5lfSA9IHRoaXMub3B0aW9ucztcbiAgICAgIGxldCB7Y29tbWVudCwgZXNjYXBlLCBxdW90ZSwgcmVjb3JkX2RlbGltaXRlcn0gPSB0aGlzLm9wdGlvbnM7XG4gICAgICBjb25zdCB7Ym9tU2tpcHBlZCwgcHJldmlvdXNCdWYsIHJhd0J1ZmZlciwgZXNjYXBlSXNRdW90ZX0gPSB0aGlzLnN0YXRlO1xuICAgICAgbGV0IGJ1ZjtcbiAgICAgIGlmKHByZXZpb3VzQnVmID09PSB1bmRlZmluZWQpe1xuICAgICAgICBpZihuZXh0QnVmID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgIC8vIEhhbmRsZSBlbXB0eSBzdHJpbmdcbiAgICAgICAgICBjbG9zZSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgIGJ1ZiA9IG5leHRCdWY7XG4gICAgICAgIH1cbiAgICAgIH1lbHNlIGlmKHByZXZpb3VzQnVmICE9PSB1bmRlZmluZWQgJiYgbmV4dEJ1ZiA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgYnVmID0gcHJldmlvdXNCdWY7XG4gICAgICB9ZWxzZSB7XG4gICAgICAgIGJ1ZiA9IEJ1ZmZlci5jb25jYXQoW3ByZXZpb3VzQnVmLCBuZXh0QnVmXSk7XG4gICAgICB9XG4gICAgICAvLyBIYW5kbGUgVVRGIEJPTVxuICAgICAgaWYoYm9tU2tpcHBlZCA9PT0gZmFsc2Upe1xuICAgICAgICBpZihib20gPT09IGZhbHNlKXtcbiAgICAgICAgICB0aGlzLnN0YXRlLmJvbVNraXBwZWQgPSB0cnVlO1xuICAgICAgICB9ZWxzZSBpZihidWYubGVuZ3RoIDwgMyl7XG4gICAgICAgICAgLy8gTm8gZW5vdWdoIGRhdGFcbiAgICAgICAgICBpZihlbmQgPT09IGZhbHNlKXtcbiAgICAgICAgICAgIC8vIFdhaXQgZm9yIG1vcmUgZGF0YVxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5wcmV2aW91c0J1ZiA9IGJ1ZjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICBmb3IoY29uc3QgZW5jb2RpbmcgaW4gYm9tcyl7XG4gICAgICAgICAgICBpZihib21zW2VuY29kaW5nXS5jb21wYXJlKGJ1ZiwgMCwgYm9tc1tlbmNvZGluZ10ubGVuZ3RoKSA9PT0gMCl7XG4gICAgICAgICAgICAgIC8vIFNraXAgQk9NXG4gICAgICAgICAgICAgIGNvbnN0IGJvbUxlbmd0aCA9IGJvbXNbZW5jb2RpbmddLmxlbmd0aDtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5idWZCeXRlc1N0YXJ0ICs9IGJvbUxlbmd0aDtcbiAgICAgICAgICAgICAgYnVmID0gYnVmLnNsaWNlKGJvbUxlbmd0aCk7XG4gICAgICAgICAgICAgIC8vIFJlbm9ybWFsaXplIG9yaWdpbmFsIG9wdGlvbnMgd2l0aCB0aGUgbmV3IGVuY29kaW5nXG4gICAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IG5vcm1hbGl6ZV9vcHRpb25zKHsuLi50aGlzLm9yaWdpbmFsX29wdGlvbnMsIGVuY29kaW5nOiBlbmNvZGluZ30pO1xuICAgICAgICAgICAgICAvLyBPcHRpb25zIHdpbGwgcmUtZXZhbHVhdGUgdGhlIEJ1ZmZlciB3aXRoIHRoZSBuZXcgZW5jb2RpbmdcbiAgICAgICAgICAgICAgKHtjb21tZW50LCBlc2NhcGUsIHF1b3RlIH0gPSB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zdGF0ZS5ib21Ta2lwcGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgYnVmTGVuID0gYnVmLmxlbmd0aDtcbiAgICAgIGxldCBwb3M7XG4gICAgICBmb3IocG9zID0gMDsgcG9zIDwgYnVmTGVuOyBwb3MrKyl7XG4gICAgICAgIC8vIEVuc3VyZSB3ZSBnZXQgZW5vdWdoIHNwYWNlIHRvIGxvb2sgYWhlYWRcbiAgICAgICAgLy8gVGhlcmUgc2hvdWxkIGJlIGEgd2F5IHRvIG1vdmUgdGhpcyBvdXQgb2YgdGhlIGxvb3BcbiAgICAgICAgaWYodGhpcy5fX25lZWRNb3JlRGF0YShwb3MsIGJ1ZkxlbiwgZW5kKSl7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5zdGF0ZS53YXNSb3dEZWxpbWl0ZXIgPT09IHRydWUpe1xuICAgICAgICAgIHRoaXMuaW5mby5saW5lcysrO1xuICAgICAgICAgIHRoaXMuc3RhdGUud2FzUm93RGVsaW1pdGVyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYodG9fbGluZSAhPT0gLTEgJiYgdGhpcy5pbmZvLmxpbmVzID4gdG9fbGluZSl7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5zdG9wID0gdHJ1ZTtcbiAgICAgICAgICBjbG9zZSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBBdXRvIGRpc2NvdmVyeSBvZiByZWNvcmRfZGVsaW1pdGVyLCB1bml4LCBtYWMgYW5kIHdpbmRvd3Mgc3VwcG9ydGVkXG4gICAgICAgIGlmKHRoaXMuc3RhdGUucXVvdGluZyA9PT0gZmFsc2UgJiYgcmVjb3JkX2RlbGltaXRlci5sZW5ndGggPT09IDApe1xuICAgICAgICAgIGNvbnN0IHJlY29yZF9kZWxpbWl0ZXJDb3VudCA9IHRoaXMuX19hdXRvRGlzY292ZXJSZWNvcmREZWxpbWl0ZXIoYnVmLCBwb3MpO1xuICAgICAgICAgIGlmKHJlY29yZF9kZWxpbWl0ZXJDb3VudCl7XG4gICAgICAgICAgICByZWNvcmRfZGVsaW1pdGVyID0gdGhpcy5vcHRpb25zLnJlY29yZF9kZWxpbWl0ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNociA9IGJ1Zltwb3NdO1xuICAgICAgICBpZihyYXcgPT09IHRydWUpe1xuICAgICAgICAgIHJhd0J1ZmZlci5hcHBlbmQoY2hyKTtcbiAgICAgICAgfVxuICAgICAgICBpZigoY2hyID09PSBjciB8fCBjaHIgPT09IG5sKSAmJiB0aGlzLnN0YXRlLndhc1Jvd0RlbGltaXRlciA9PT0gZmFsc2Upe1xuICAgICAgICAgIHRoaXMuc3RhdGUud2FzUm93RGVsaW1pdGVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBQcmV2aW91cyBjaGFyIHdhcyBhIHZhbGlkIGVzY2FwZSBjaGFyXG4gICAgICAgIC8vIHRyZWF0IHRoZSBjdXJyZW50IGNoYXIgYXMgYSByZWd1bGFyIGNoYXJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5lc2NhcGluZyA9PT0gdHJ1ZSl7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5lc2NhcGluZyA9IGZhbHNlO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgLy8gRXNjYXBlIGlzIG9ubHkgYWN0aXZlIGluc2lkZSBxdW90ZWQgZmllbGRzXG4gICAgICAgICAgLy8gV2UgYXJlIHF1b3RpbmcsIHRoZSBjaGFyIGlzIGFuIGVzY2FwZSBjaHIgYW5kIHRoZXJlIGlzIGEgY2hyIHRvIGVzY2FwZVxuICAgICAgICAgIC8vIGlmKGVzY2FwZSAhPT0gbnVsbCAmJiB0aGlzLnN0YXRlLnF1b3RpbmcgPT09IHRydWUgJiYgY2hyID09PSBlc2NhcGUgJiYgcG9zICsgMSA8IGJ1Zkxlbil7XG4gICAgICAgICAgaWYoZXNjYXBlICE9PSBudWxsICYmIHRoaXMuc3RhdGUucXVvdGluZyA9PT0gdHJ1ZSAmJiB0aGlzLl9faXNFc2NhcGUoYnVmLCBwb3MsIGNocikgJiYgcG9zICsgZXNjYXBlLmxlbmd0aCA8IGJ1Zkxlbil7XG4gICAgICAgICAgICBpZihlc2NhcGVJc1F1b3RlKXtcbiAgICAgICAgICAgICAgaWYodGhpcy5fX2lzUXVvdGUoYnVmLCBwb3MrZXNjYXBlLmxlbmd0aCkpe1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZXNjYXBpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHBvcyArPSBlc2NhcGUubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnN0YXRlLmVzY2FwaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgcG9zICs9IGVzY2FwZS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gTm90IGN1cnJlbnRseSBlc2NhcGluZyBhbmQgY2hyIGlzIGEgcXVvdGVcbiAgICAgICAgICAvLyBUT0RPOiBuZWVkIHRvIGNvbXBhcmUgYnl0ZXMgaW5zdGVhZCBvZiBzaW5nbGUgY2hhclxuICAgICAgICAgIGlmKHRoaXMuc3RhdGUuY29tbWVudGluZyA9PT0gZmFsc2UgJiYgdGhpcy5fX2lzUXVvdGUoYnVmLCBwb3MpKXtcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUucXVvdGluZyA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgIGNvbnN0IG5leHRDaHIgPSBidWZbcG9zK3F1b3RlLmxlbmd0aF07XG4gICAgICAgICAgICAgIGNvbnN0IGlzTmV4dENoclRyaW1hYmxlID0gcnRyaW0gJiYgdGhpcy5fX2lzQ2hhclRyaW1hYmxlKGJ1ZiwgcG9zK3F1b3RlLmxlbmd0aCk7XG4gICAgICAgICAgICAgIGNvbnN0IGlzTmV4dENockNvbW1lbnQgPSBjb21tZW50ICE9PSBudWxsICYmIHRoaXMuX19jb21wYXJlQnl0ZXMoY29tbWVudCwgYnVmLCBwb3MrcXVvdGUubGVuZ3RoLCBuZXh0Q2hyKTtcbiAgICAgICAgICAgICAgY29uc3QgaXNOZXh0Q2hyRGVsaW1pdGVyID0gdGhpcy5fX2lzRGVsaW1pdGVyKGJ1ZiwgcG9zK3F1b3RlLmxlbmd0aCwgbmV4dENocik7XG4gICAgICAgICAgICAgIGNvbnN0IGlzTmV4dENoclJlY29yZERlbGltaXRlciA9IHJlY29yZF9kZWxpbWl0ZXIubGVuZ3RoID09PSAwID8gdGhpcy5fX2F1dG9EaXNjb3ZlclJlY29yZERlbGltaXRlcihidWYsIHBvcytxdW90ZS5sZW5ndGgpIDogdGhpcy5fX2lzUmVjb3JkRGVsaW1pdGVyKG5leHRDaHIsIGJ1ZiwgcG9zK3F1b3RlLmxlbmd0aCk7XG4gICAgICAgICAgICAgIC8vIEVzY2FwZSBhIHF1b3RlXG4gICAgICAgICAgICAgIC8vIFRyZWF0IG5leHQgY2hhciBhcyBhIHJlZ3VsYXIgY2hhcmFjdGVyXG4gICAgICAgICAgICAgIGlmKGVzY2FwZSAhPT0gbnVsbCAmJiB0aGlzLl9faXNFc2NhcGUoYnVmLCBwb3MsIGNocikgJiYgdGhpcy5fX2lzUXVvdGUoYnVmLCBwb3MgKyBlc2NhcGUubGVuZ3RoKSl7XG4gICAgICAgICAgICAgICAgcG9zICs9IGVzY2FwZS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICB9ZWxzZSBpZighbmV4dENociB8fCBpc05leHRDaHJEZWxpbWl0ZXIgfHwgaXNOZXh0Q2hyUmVjb3JkRGVsaW1pdGVyIHx8IGlzTmV4dENockNvbW1lbnQgfHwgaXNOZXh0Q2hyVHJpbWFibGUpe1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucXVvdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2FzUXVvdGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgcG9zICs9IHF1b3RlLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1lbHNlIGlmKHJlbGF4X3F1b3RlcyA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IHRoaXMuX19lcnJvcihcbiAgICAgICAgICAgICAgICAgIG5ldyBDc3ZFcnJvcignQ1NWX0lOVkFMSURfQ0xPU0lOR19RVU9URScsIFtcbiAgICAgICAgICAgICAgICAgICAgJ0ludmFsaWQgQ2xvc2luZyBRdW90ZTonLFxuICAgICAgICAgICAgICAgICAgICBgZ290IFwiJHtTdHJpbmcuZnJvbUNoYXJDb2RlKG5leHRDaHIpfVwiYCxcbiAgICAgICAgICAgICAgICAgICAgYGF0IGxpbmUgJHt0aGlzLmluZm8ubGluZXN9YCxcbiAgICAgICAgICAgICAgICAgICAgJ2luc3RlYWQgb2YgZGVsaW1pdGVyLCByZWNvcmQgZGVsaW1pdGVyLCB0cmltYWJsZSBjaGFyYWN0ZXInLFxuICAgICAgICAgICAgICAgICAgICAnKGlmIGFjdGl2YXRlZCkgb3IgY29tbWVudCcsXG4gICAgICAgICAgICAgICAgICBdLCB0aGlzLm9wdGlvbnMsIHRoaXMuX19pbmZvRmllbGQoKSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmKGVyciAhPT0gdW5kZWZpbmVkKSByZXR1cm4gZXJyO1xuICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5xdW90aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53YXNRdW90aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZpZWxkLnByZXBlbmQocXVvdGUpO1xuICAgICAgICAgICAgICAgIHBvcyArPSBxdW90ZS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuZmllbGQubGVuZ3RoICE9PSAwKXtcbiAgICAgICAgICAgICAgICAvLyBJbiByZWxheF9xdW90ZXMgbW9kZSwgdHJlYXQgb3BlbmluZyBxdW90ZSBwcmVjZWRlZCBieSBjaHJzIGFzIHJlZ3VsYXJcbiAgICAgICAgICAgICAgICBpZihyZWxheF9xdW90ZXMgPT09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGluZm8gPSB0aGlzLl9faW5mb0ZpZWxkKCk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBib20gPSBPYmplY3Qua2V5cyhib21zKS5tYXAoYiA9PiBib21zW2JdLmVxdWFscyh0aGlzLnN0YXRlLmZpZWxkLnRvU3RyaW5nKCkpID8gYiA6IGZhbHNlKS5maWx0ZXIoQm9vbGVhbilbMF07XG4gICAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSB0aGlzLl9fZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDc3ZFcnJvcignSU5WQUxJRF9PUEVOSU5HX1FVT1RFJywgW1xuICAgICAgICAgICAgICAgICAgICAgICdJbnZhbGlkIE9wZW5pbmcgUXVvdGU6JyxcbiAgICAgICAgICAgICAgICAgICAgICBgYSBxdW90ZSBpcyBmb3VuZCBvbiBmaWVsZCAke0pTT04uc3RyaW5naWZ5KGluZm8uY29sdW1uKX0gYXQgbGluZSAke2luZm8ubGluZXN9LCB2YWx1ZSBpcyAke0pTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuZmllbGQudG9TdHJpbmcoZW5jb2RpbmcpKX1gLFxuICAgICAgICAgICAgICAgICAgICAgIGJvbSA/IGAoJHtib219IGJvbSlgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIF0sIHRoaXMub3B0aW9ucywgaW5mbywge1xuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiB0aGlzLnN0YXRlLmZpZWxkLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIGlmKGVyciAhPT0gdW5kZWZpbmVkKSByZXR1cm4gZXJyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucXVvdGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgcG9zICs9IHF1b3RlLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYodGhpcy5zdGF0ZS5xdW90aW5nID09PSBmYWxzZSl7XG4gICAgICAgICAgICBjb25zdCByZWNvcmREZWxpbWl0ZXJMZW5ndGggPSB0aGlzLl9faXNSZWNvcmREZWxpbWl0ZXIoY2hyLCBidWYsIHBvcyk7XG4gICAgICAgICAgICBpZihyZWNvcmREZWxpbWl0ZXJMZW5ndGggIT09IDApe1xuICAgICAgICAgICAgICAvLyBEbyBub3QgZW1pdCBjb21tZW50cyB3aGljaCB0YWtlIGEgZnVsbCBsaW5lXG4gICAgICAgICAgICAgIGNvbnN0IHNraXBDb21tZW50TGluZSA9IHRoaXMuc3RhdGUuY29tbWVudGluZyAmJiAodGhpcy5zdGF0ZS53YXNRdW90aW5nID09PSBmYWxzZSAmJiB0aGlzLnN0YXRlLnJlY29yZC5sZW5ndGggPT09IDAgJiYgdGhpcy5zdGF0ZS5maWVsZC5sZW5ndGggPT09IDApO1xuICAgICAgICAgICAgICBpZihza2lwQ29tbWVudExpbmUpe1xuICAgICAgICAgICAgICAgIHRoaXMuaW5mby5jb21tZW50X2xpbmVzKys7XG4gICAgICAgICAgICAgICAgLy8gU2tpcCBmdWxsIGNvbW1lbnQgbGluZVxuICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gQWN0aXZhdGUgcmVjb3JkcyBlbWl0aW9uIGlmIGFib3ZlIGZyb21fbGluZVxuICAgICAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuZW5hYmxlZCA9PT0gZmFsc2UgJiYgdGhpcy5pbmZvLmxpbmVzICsgKHRoaXMuc3RhdGUud2FzUm93RGVsaW1pdGVyID09PSB0cnVlID8gMTogMCkgPj0gZnJvbV9saW5lKXtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICB0aGlzLl9fcmVzZXRGaWVsZCgpO1xuICAgICAgICAgICAgICAgICAgdGhpcy5fX3Jlc2V0UmVjb3JkKCk7XG4gICAgICAgICAgICAgICAgICBwb3MgKz0gcmVjb3JkRGVsaW1pdGVyTGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTa2lwIGlmIGxpbmUgaXMgZW1wdHkgYW5kIHNraXBfZW1wdHlfbGluZXMgYWN0aXZhdGVkXG4gICAgICAgICAgICAgICAgaWYoc2tpcF9lbXB0eV9saW5lcyA9PT0gdHJ1ZSAmJiB0aGlzLnN0YXRlLndhc1F1b3RpbmcgPT09IGZhbHNlICYmIHRoaXMuc3RhdGUucmVjb3JkLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnN0YXRlLmZpZWxkLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICAgICAgICB0aGlzLmluZm8uZW1wdHlfbGluZXMrKztcbiAgICAgICAgICAgICAgICAgIHBvcyArPSByZWNvcmREZWxpbWl0ZXJMZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaW5mby5ieXRlcyA9IHRoaXMuc3RhdGUuYnVmQnl0ZXNTdGFydCArIHBvcztcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJGaWVsZCA9IHRoaXMuX19vbkZpZWxkKCk7XG4gICAgICAgICAgICAgICAgaWYoZXJyRmllbGQgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGVyckZpZWxkO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5mby5ieXRlcyA9IHRoaXMuc3RhdGUuYnVmQnl0ZXNTdGFydCArIHBvcyArIHJlY29yZERlbGltaXRlckxlbmd0aDtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJSZWNvcmQgPSB0aGlzLl9fb25SZWNvcmQocHVzaCk7XG4gICAgICAgICAgICAgICAgaWYoZXJyUmVjb3JkICE9PSB1bmRlZmluZWQpIHJldHVybiBlcnJSZWNvcmQ7XG4gICAgICAgICAgICAgICAgaWYodG8gIT09IC0xICYmIHRoaXMuaW5mby5yZWNvcmRzID49IHRvKXtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc3RvcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBjbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbW1lbnRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcG9zICs9IHJlY29yZERlbGltaXRlckxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5jb21tZW50aW5nKXtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihjb21tZW50ICE9PSBudWxsICYmIChjb21tZW50X25vX2luZml4ID09PSBmYWxzZSB8fCAodGhpcy5zdGF0ZS5yZWNvcmQubGVuZ3RoID09PSAwICYmIHRoaXMuc3RhdGUuZmllbGQubGVuZ3RoID09PSAwKSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgY29tbWVudENvdW50ID0gdGhpcy5fX2NvbXBhcmVCeXRlcyhjb21tZW50LCBidWYsIHBvcywgY2hyKTtcbiAgICAgICAgICAgICAgaWYoY29tbWVudENvdW50ICE9PSAwKXtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbW1lbnRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkZWxpbWl0ZXJMZW5ndGggPSB0aGlzLl9faXNEZWxpbWl0ZXIoYnVmLCBwb3MsIGNocik7XG4gICAgICAgICAgICBpZihkZWxpbWl0ZXJMZW5ndGggIT09IDApe1xuICAgICAgICAgICAgICB0aGlzLmluZm8uYnl0ZXMgPSB0aGlzLnN0YXRlLmJ1ZkJ5dGVzU3RhcnQgKyBwb3M7XG4gICAgICAgICAgICAgIGNvbnN0IGVyckZpZWxkID0gdGhpcy5fX29uRmllbGQoKTtcbiAgICAgICAgICAgICAgaWYoZXJyRmllbGQgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGVyckZpZWxkO1xuICAgICAgICAgICAgICBwb3MgKz0gZGVsaW1pdGVyTGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuc3RhdGUuY29tbWVudGluZyA9PT0gZmFsc2Upe1xuICAgICAgICAgIGlmKG1heF9yZWNvcmRfc2l6ZSAhPT0gMCAmJiB0aGlzLnN0YXRlLnJlY29yZF9sZW5ndGggKyB0aGlzLnN0YXRlLmZpZWxkLmxlbmd0aCA+IG1heF9yZWNvcmRfc2l6ZSl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX2Vycm9yKFxuICAgICAgICAgICAgICBuZXcgQ3N2RXJyb3IoJ0NTVl9NQVhfUkVDT1JEX1NJWkUnLCBbXG4gICAgICAgICAgICAgICAgJ01heCBSZWNvcmQgU2l6ZTonLFxuICAgICAgICAgICAgICAgICdyZWNvcmQgZXhjZWVkIHRoZSBtYXhpbXVtIG51bWJlciBvZiB0b2xlcmF0ZWQgYnl0ZXMnLFxuICAgICAgICAgICAgICAgIGBvZiAke21heF9yZWNvcmRfc2l6ZX1gLFxuICAgICAgICAgICAgICAgIGBhdCBsaW5lICR7dGhpcy5pbmZvLmxpbmVzfWAsXG4gICAgICAgICAgICAgIF0sIHRoaXMub3B0aW9ucywgdGhpcy5fX2luZm9GaWVsZCgpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGFwcGVuZCA9IGx0cmltID09PSBmYWxzZSB8fCB0aGlzLnN0YXRlLnF1b3RpbmcgPT09IHRydWUgfHwgdGhpcy5zdGF0ZS5maWVsZC5sZW5ndGggIT09IDAgfHwgIXRoaXMuX19pc0NoYXJUcmltYWJsZShidWYsIHBvcyk7XG4gICAgICAgIC8vIHJ0cmltIGluIG5vbiBxdW90aW5nIGlzIGhhbmRsZSBpbiBfX29uRmllbGRcbiAgICAgICAgY29uc3QgcmFwcGVuZCA9IHJ0cmltID09PSBmYWxzZSB8fCB0aGlzLnN0YXRlLndhc1F1b3RpbmcgPT09IGZhbHNlO1xuICAgICAgICBpZihsYXBwZW5kID09PSB0cnVlICYmIHJhcHBlbmQgPT09IHRydWUpe1xuICAgICAgICAgIHRoaXMuc3RhdGUuZmllbGQuYXBwZW5kKGNocik7XG4gICAgICAgIH1lbHNlIGlmKHJ0cmltID09PSB0cnVlICYmICF0aGlzLl9faXNDaGFyVHJpbWFibGUoYnVmLCBwb3MpKXtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fX2Vycm9yKFxuICAgICAgICAgICAgbmV3IENzdkVycm9yKCdDU1ZfTk9OX1RSSU1BQkxFX0NIQVJfQUZURVJfQ0xPU0lOR19RVU9URScsIFtcbiAgICAgICAgICAgICAgJ0ludmFsaWQgQ2xvc2luZyBRdW90ZTonLFxuICAgICAgICAgICAgICAnZm91bmQgbm9uIHRyaW1hYmxlIGJ5dGUgYWZ0ZXIgcXVvdGUnLFxuICAgICAgICAgICAgICBgYXQgbGluZSAke3RoaXMuaW5mby5saW5lc31gLFxuICAgICAgICAgICAgXSwgdGhpcy5vcHRpb25zLCB0aGlzLl9faW5mb0ZpZWxkKCkpXG4gICAgICAgICAgKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgIGlmKGxhcHBlbmQgPT09IGZhbHNlKXtcbiAgICAgICAgICAgIHBvcyArPSB0aGlzLl9faXNDaGFyVHJpbWFibGUoYnVmLCBwb3MpIC0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKGVuZCA9PT0gdHJ1ZSl7XG4gICAgICAgIC8vIEVuc3VyZSB3ZSBhcmUgbm90IGVuZGluZyBpbiBhIHF1b3Rpbmcgc3RhdGVcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5xdW90aW5nID09PSB0cnVlKXtcbiAgICAgICAgICBjb25zdCBlcnIgPSB0aGlzLl9fZXJyb3IoXG4gICAgICAgICAgICBuZXcgQ3N2RXJyb3IoJ0NTVl9RVU9URV9OT1RfQ0xPU0VEJywgW1xuICAgICAgICAgICAgICAnUXVvdGUgTm90IENsb3NlZDonLFxuICAgICAgICAgICAgICBgdGhlIHBhcnNpbmcgaXMgZmluaXNoZWQgd2l0aCBhbiBvcGVuaW5nIHF1b3RlIGF0IGxpbmUgJHt0aGlzLmluZm8ubGluZXN9YCxcbiAgICAgICAgICAgIF0sIHRoaXMub3B0aW9ucywgdGhpcy5fX2luZm9GaWVsZCgpKVxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYoZXJyICE9PSB1bmRlZmluZWQpIHJldHVybiBlcnI7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAvLyBTa2lwIGxhc3QgbGluZSBpZiBpdCBoYXMgbm8gY2hhcmFjdGVyc1xuICAgICAgICAgIGlmKHRoaXMuc3RhdGUud2FzUXVvdGluZyA9PT0gdHJ1ZSB8fCB0aGlzLnN0YXRlLnJlY29yZC5sZW5ndGggIT09IDAgfHwgdGhpcy5zdGF0ZS5maWVsZC5sZW5ndGggIT09IDApe1xuICAgICAgICAgICAgdGhpcy5pbmZvLmJ5dGVzID0gdGhpcy5zdGF0ZS5idWZCeXRlc1N0YXJ0ICsgcG9zO1xuICAgICAgICAgICAgY29uc3QgZXJyRmllbGQgPSB0aGlzLl9fb25GaWVsZCgpO1xuICAgICAgICAgICAgaWYoZXJyRmllbGQgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGVyckZpZWxkO1xuICAgICAgICAgICAgY29uc3QgZXJyUmVjb3JkID0gdGhpcy5fX29uUmVjb3JkKHB1c2gpO1xuICAgICAgICAgICAgaWYoZXJyUmVjb3JkICE9PSB1bmRlZmluZWQpIHJldHVybiBlcnJSZWNvcmQ7XG4gICAgICAgICAgfWVsc2UgaWYodGhpcy5zdGF0ZS53YXNSb3dEZWxpbWl0ZXIgPT09IHRydWUpe1xuICAgICAgICAgICAgdGhpcy5pbmZvLmVtcHR5X2xpbmVzKys7XG4gICAgICAgICAgfWVsc2UgaWYodGhpcy5zdGF0ZS5jb21tZW50aW5nID09PSB0cnVlKXtcbiAgICAgICAgICAgIHRoaXMuaW5mby5jb21tZW50X2xpbmVzKys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9ZWxzZSB7XG4gICAgICAgIHRoaXMuc3RhdGUuYnVmQnl0ZXNTdGFydCArPSBwb3M7XG4gICAgICAgIHRoaXMuc3RhdGUucHJldmlvdXNCdWYgPSBidWYuc2xpY2UocG9zKTtcbiAgICAgIH1cbiAgICAgIGlmKHRoaXMuc3RhdGUud2FzUm93RGVsaW1pdGVyID09PSB0cnVlKXtcbiAgICAgICAgdGhpcy5pbmZvLmxpbmVzKys7XG4gICAgICAgIHRoaXMuc3RhdGUud2FzUm93RGVsaW1pdGVyID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSxcbiAgICBfX29uUmVjb3JkOiBmdW5jdGlvbihwdXNoKXtcbiAgICAgIGNvbnN0IHtjb2x1bW5zLCBncm91cF9jb2x1bW5zX2J5X25hbWUsIGVuY29kaW5nLCBpbmZvLCBmcm9tLCByZWxheF9jb2x1bW5fY291bnQsIHJlbGF4X2NvbHVtbl9jb3VudF9sZXNzLCByZWxheF9jb2x1bW5fY291bnRfbW9yZSwgcmF3LCBza2lwX3JlY29yZHNfd2l0aF9lbXB0eV92YWx1ZXN9ID0gdGhpcy5vcHRpb25zO1xuICAgICAgY29uc3Qge2VuYWJsZWQsIHJlY29yZH0gPSB0aGlzLnN0YXRlO1xuICAgICAgaWYoZW5hYmxlZCA9PT0gZmFsc2Upe1xuICAgICAgICByZXR1cm4gdGhpcy5fX3Jlc2V0UmVjb3JkKCk7XG4gICAgICB9XG4gICAgICAvLyBDb252ZXJ0IHRoZSBmaXJzdCBsaW5lIGludG8gY29sdW1uIG5hbWVzXG4gICAgICBjb25zdCByZWNvcmRMZW5ndGggPSByZWNvcmQubGVuZ3RoO1xuICAgICAgaWYoY29sdW1ucyA9PT0gdHJ1ZSl7XG4gICAgICAgIGlmKHNraXBfcmVjb3Jkc193aXRoX2VtcHR5X3ZhbHVlcyA9PT0gdHJ1ZSAmJiBpc1JlY29yZEVtcHR5KHJlY29yZCkpe1xuICAgICAgICAgIHRoaXMuX19yZXNldFJlY29yZCgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fX2ZpcnN0TGluZVRvQ29sdW1ucyhyZWNvcmQpO1xuICAgICAgfVxuICAgICAgaWYoY29sdW1ucyA9PT0gZmFsc2UgJiYgdGhpcy5pbmZvLnJlY29yZHMgPT09IDApe1xuICAgICAgICB0aGlzLnN0YXRlLmV4cGVjdGVkUmVjb3JkTGVuZ3RoID0gcmVjb3JkTGVuZ3RoO1xuICAgICAgfVxuICAgICAgaWYocmVjb3JkTGVuZ3RoICE9PSB0aGlzLnN0YXRlLmV4cGVjdGVkUmVjb3JkTGVuZ3RoKXtcbiAgICAgICAgY29uc3QgZXJyID0gY29sdW1ucyA9PT0gZmFsc2UgP1xuICAgICAgICAgIG5ldyBDc3ZFcnJvcignQ1NWX1JFQ09SRF9JTkNPTlNJU1RFTlRfRklFTERTX0xFTkdUSCcsIFtcbiAgICAgICAgICAgICdJbnZhbGlkIFJlY29yZCBMZW5ndGg6JyxcbiAgICAgICAgICAgIGBleHBlY3QgJHt0aGlzLnN0YXRlLmV4cGVjdGVkUmVjb3JkTGVuZ3RofSxgLFxuICAgICAgICAgICAgYGdvdCAke3JlY29yZExlbmd0aH0gb24gbGluZSAke3RoaXMuaW5mby5saW5lc31gLFxuICAgICAgICAgIF0sIHRoaXMub3B0aW9ucywgdGhpcy5fX2luZm9GaWVsZCgpLCB7XG4gICAgICAgICAgICByZWNvcmQ6IHJlY29yZCxcbiAgICAgICAgICB9KVxuICAgICAgICAgIDpcbiAgICAgICAgICBuZXcgQ3N2RXJyb3IoJ0NTVl9SRUNPUkRfSU5DT05TSVNURU5UX0NPTFVNTlMnLCBbXG4gICAgICAgICAgICAnSW52YWxpZCBSZWNvcmQgTGVuZ3RoOicsXG4gICAgICAgICAgICBgY29sdW1ucyBsZW5ndGggaXMgJHtjb2x1bW5zLmxlbmd0aH0sYCwgLy8gcmVuYW1lIGNvbHVtbnNcbiAgICAgICAgICAgIGBnb3QgJHtyZWNvcmRMZW5ndGh9IG9uIGxpbmUgJHt0aGlzLmluZm8ubGluZXN9YCxcbiAgICAgICAgICBdLCB0aGlzLm9wdGlvbnMsIHRoaXMuX19pbmZvRmllbGQoKSwge1xuICAgICAgICAgICAgcmVjb3JkOiByZWNvcmQsXG4gICAgICAgICAgfSk7XG4gICAgICAgIGlmKHJlbGF4X2NvbHVtbl9jb3VudCA9PT0gdHJ1ZSB8fFxuICAgICAgICAgIChyZWxheF9jb2x1bW5fY291bnRfbGVzcyA9PT0gdHJ1ZSAmJiByZWNvcmRMZW5ndGggPCB0aGlzLnN0YXRlLmV4cGVjdGVkUmVjb3JkTGVuZ3RoKSB8fFxuICAgICAgICAgIChyZWxheF9jb2x1bW5fY291bnRfbW9yZSA9PT0gdHJ1ZSAmJiByZWNvcmRMZW5ndGggPiB0aGlzLnN0YXRlLmV4cGVjdGVkUmVjb3JkTGVuZ3RoKSl7XG4gICAgICAgICAgdGhpcy5pbmZvLmludmFsaWRfZmllbGRfbGVuZ3RoKys7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5lcnJvciA9IGVycjtcbiAgICAgICAgLy8gRXJyb3IgaXMgdW5kZWZpbmVkIHdpdGggc2tpcF9yZWNvcmRzX3dpdGhfZXJyb3JcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgIGNvbnN0IGZpbmFsRXJyID0gdGhpcy5fX2Vycm9yKGVycik7XG4gICAgICAgICAgaWYoZmluYWxFcnIpIHJldHVybiBmaW5hbEVycjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYoc2tpcF9yZWNvcmRzX3dpdGhfZW1wdHlfdmFsdWVzID09PSB0cnVlICYmIGlzUmVjb3JkRW1wdHkocmVjb3JkKSl7XG4gICAgICAgIHRoaXMuX19yZXNldFJlY29yZCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZih0aGlzLnN0YXRlLnJlY29yZEhhc0Vycm9yID09PSB0cnVlKXtcbiAgICAgICAgdGhpcy5fX3Jlc2V0UmVjb3JkKCk7XG4gICAgICAgIHRoaXMuc3RhdGUucmVjb3JkSGFzRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5pbmZvLnJlY29yZHMrKztcbiAgICAgIGlmKGZyb20gPT09IDEgfHwgdGhpcy5pbmZvLnJlY29yZHMgPj0gZnJvbSl7XG4gICAgICAgIGNvbnN0IHtvYmpuYW1lfSA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgLy8gV2l0aCBjb2x1bW5zLCByZWNvcmRzIGFyZSBvYmplY3RcbiAgICAgICAgaWYoY29sdW1ucyAhPT0gZmFsc2Upe1xuICAgICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICAgIC8vIFRyYW5zZm9ybSByZWNvcmQgYXJyYXkgdG8gYW4gb2JqZWN0XG4gICAgICAgICAgZm9yKGxldCBpID0gMCwgbCA9IHJlY29yZC5sZW5ndGg7IGkgPCBsOyBpKyspe1xuICAgICAgICAgICAgaWYoY29sdW1uc1tpXSA9PT0gdW5kZWZpbmVkIHx8IGNvbHVtbnNbaV0uZGlzYWJsZWQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgLy8gVHVybiBkdXBsaWNhdGUgY29sdW1ucyBpbnRvIGFuIGFycmF5XG4gICAgICAgICAgICBpZiAoZ3JvdXBfY29sdW1uc19ieV9uYW1lID09PSB0cnVlICYmIG9ialtjb2x1bW5zW2ldLm5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqW2NvbHVtbnNbaV0ubmFtZV0pKSB7XG4gICAgICAgICAgICAgICAgb2JqW2NvbHVtbnNbaV0ubmFtZV0gPSBvYmpbY29sdW1uc1tpXS5uYW1lXS5jb25jYXQocmVjb3JkW2ldKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmpbY29sdW1uc1tpXS5uYW1lXSA9IFtvYmpbY29sdW1uc1tpXS5uYW1lXSwgcmVjb3JkW2ldXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgb2JqW2NvbHVtbnNbaV0ubmFtZV0gPSByZWNvcmRbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFdpdGhvdXQgb2JqbmFtZSAoZGVmYXVsdClcbiAgICAgICAgICBpZihyYXcgPT09IHRydWUgfHwgaW5mbyA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBjb25zdCBleHRSZWNvcmQgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICB7cmVjb3JkOiBvYmp9LFxuICAgICAgICAgICAgICAocmF3ID09PSB0cnVlID8ge3JhdzogdGhpcy5zdGF0ZS5yYXdCdWZmZXIudG9TdHJpbmcoZW5jb2RpbmcpfToge30pLFxuICAgICAgICAgICAgICAoaW5mbyA9PT0gdHJ1ZSA/IHtpbmZvOiB0aGlzLl9faW5mb1JlY29yZCgpfToge30pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgZXJyID0gdGhpcy5fX3B1c2goXG4gICAgICAgICAgICAgIG9iam5hbWUgPT09IHVuZGVmaW5lZCA/IGV4dFJlY29yZCA6IFtvYmpbb2JqbmFtZV0sIGV4dFJlY29yZF1cbiAgICAgICAgICAgICAgLCBwdXNoKTtcbiAgICAgICAgICAgIGlmKGVycil7XG4gICAgICAgICAgICAgIHJldHVybiBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZXJyID0gdGhpcy5fX3B1c2goXG4gICAgICAgICAgICAgIG9iam5hbWUgPT09IHVuZGVmaW5lZCA/IG9iaiA6IFtvYmpbb2JqbmFtZV0sIG9ial1cbiAgICAgICAgICAgICAgLCBwdXNoKTtcbiAgICAgICAgICAgIGlmKGVycil7XG4gICAgICAgICAgICAgIHJldHVybiBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAvLyBXaXRob3V0IGNvbHVtbnMsIHJlY29yZHMgYXJlIGFycmF5XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICBpZihyYXcgPT09IHRydWUgfHwgaW5mbyA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBjb25zdCBleHRSZWNvcmQgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICB7cmVjb3JkOiByZWNvcmR9LFxuICAgICAgICAgICAgICByYXcgPT09IHRydWUgPyB7cmF3OiB0aGlzLnN0YXRlLnJhd0J1ZmZlci50b1N0cmluZyhlbmNvZGluZyl9OiB7fSxcbiAgICAgICAgICAgICAgaW5mbyA9PT0gdHJ1ZSA/IHtpbmZvOiB0aGlzLl9faW5mb1JlY29yZCgpfToge31cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBlcnIgPSB0aGlzLl9fcHVzaChcbiAgICAgICAgICAgICAgb2JqbmFtZSA9PT0gdW5kZWZpbmVkID8gZXh0UmVjb3JkIDogW3JlY29yZFtvYmpuYW1lXSwgZXh0UmVjb3JkXVxuICAgICAgICAgICAgICAsIHB1c2gpO1xuICAgICAgICAgICAgaWYoZXJyKXtcbiAgICAgICAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBlcnIgPSB0aGlzLl9fcHVzaChcbiAgICAgICAgICAgICAgb2JqbmFtZSA9PT0gdW5kZWZpbmVkID8gcmVjb3JkIDogW3JlY29yZFtvYmpuYW1lXSwgcmVjb3JkXVxuICAgICAgICAgICAgICAsIHB1c2gpO1xuICAgICAgICAgICAgaWYoZXJyKXtcbiAgICAgICAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX19yZXNldFJlY29yZCgpO1xuICAgIH0sXG4gICAgX19maXJzdExpbmVUb0NvbHVtbnM6IGZ1bmN0aW9uKHJlY29yZCl7XG4gICAgICBjb25zdCB7Zmlyc3RMaW5lVG9IZWFkZXJzfSA9IHRoaXMuc3RhdGU7XG4gICAgICB0cnl7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBmaXJzdExpbmVUb0hlYWRlcnMgPT09IHVuZGVmaW5lZCA/IHJlY29yZCA6IGZpcnN0TGluZVRvSGVhZGVycy5jYWxsKG51bGwsIHJlY29yZCk7XG4gICAgICAgIGlmKCFBcnJheS5pc0FycmF5KGhlYWRlcnMpKXtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fX2Vycm9yKFxuICAgICAgICAgICAgbmV3IENzdkVycm9yKCdDU1ZfSU5WQUxJRF9DT0xVTU5fTUFQUElORycsIFtcbiAgICAgICAgICAgICAgJ0ludmFsaWQgQ29sdW1uIE1hcHBpbmc6JyxcbiAgICAgICAgICAgICAgJ2V4cGVjdCBhbiBhcnJheSBmcm9tIGNvbHVtbiBmdW5jdGlvbiwnLFxuICAgICAgICAgICAgICBgZ290ICR7SlNPTi5zdHJpbmdpZnkoaGVhZGVycyl9YFxuICAgICAgICAgICAgXSwgdGhpcy5vcHRpb25zLCB0aGlzLl9faW5mb0ZpZWxkKCksIHtcbiAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBub3JtYWxpemVkSGVhZGVycyA9IG5vcm1hbGl6ZV9jb2x1bW5zX2FycmF5KGhlYWRlcnMpO1xuICAgICAgICB0aGlzLnN0YXRlLmV4cGVjdGVkUmVjb3JkTGVuZ3RoID0gbm9ybWFsaXplZEhlYWRlcnMubGVuZ3RoO1xuICAgICAgICB0aGlzLm9wdGlvbnMuY29sdW1ucyA9IG5vcm1hbGl6ZWRIZWFkZXJzO1xuICAgICAgICB0aGlzLl9fcmVzZXRSZWNvcmQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfWNhdGNoKGVycil7XG4gICAgICAgIHJldHVybiBlcnI7XG4gICAgICB9XG4gICAgfSxcbiAgICBfX3Jlc2V0UmVjb3JkOiBmdW5jdGlvbigpe1xuICAgICAgaWYodGhpcy5vcHRpb25zLnJhdyA9PT0gdHJ1ZSl7XG4gICAgICAgIHRoaXMuc3RhdGUucmF3QnVmZmVyLnJlc2V0KCk7XG4gICAgICB9XG4gICAgICB0aGlzLnN0YXRlLmVycm9yID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5zdGF0ZS5yZWNvcmQgPSBbXTtcbiAgICAgIHRoaXMuc3RhdGUucmVjb3JkX2xlbmd0aCA9IDA7XG4gICAgfSxcbiAgICBfX29uRmllbGQ6IGZ1bmN0aW9uKCl7XG4gICAgICBjb25zdCB7Y2FzdCwgZW5jb2RpbmcsIHJ0cmltLCBtYXhfcmVjb3JkX3NpemV9ID0gdGhpcy5vcHRpb25zO1xuICAgICAgY29uc3Qge2VuYWJsZWQsIHdhc1F1b3Rpbmd9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIC8vIFNob3J0IGNpcmN1aXQgZm9yIHRoZSBmcm9tX2xpbmUgb3B0aW9uc1xuICAgICAgaWYoZW5hYmxlZCA9PT0gZmFsc2Upe1xuICAgICAgICByZXR1cm4gdGhpcy5fX3Jlc2V0RmllbGQoKTtcbiAgICAgIH1cbiAgICAgIGxldCBmaWVsZCA9IHRoaXMuc3RhdGUuZmllbGQudG9TdHJpbmcoZW5jb2RpbmcpO1xuICAgICAgaWYocnRyaW0gPT09IHRydWUgJiYgd2FzUXVvdGluZyA9PT0gZmFsc2Upe1xuICAgICAgICBmaWVsZCA9IGZpZWxkLnRyaW1SaWdodCgpO1xuICAgICAgfVxuICAgICAgaWYoY2FzdCA9PT0gdHJ1ZSl7XG4gICAgICAgIGNvbnN0IFtlcnIsIGZdID0gdGhpcy5fX2Nhc3QoZmllbGQpO1xuICAgICAgICBpZihlcnIgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGVycjtcbiAgICAgICAgZmllbGQgPSBmO1xuICAgICAgfVxuICAgICAgdGhpcy5zdGF0ZS5yZWNvcmQucHVzaChmaWVsZCk7XG4gICAgICAvLyBJbmNyZW1lbnQgcmVjb3JkIGxlbmd0aCBpZiByZWNvcmQgc2l6ZSBtdXN0IG5vdCBleGNlZWQgYSBsaW1pdFxuICAgICAgaWYobWF4X3JlY29yZF9zaXplICE9PSAwICYmIHR5cGVvZiBmaWVsZCA9PT0gJ3N0cmluZycpe1xuICAgICAgICB0aGlzLnN0YXRlLnJlY29yZF9sZW5ndGggKz0gZmllbGQubGVuZ3RoO1xuICAgICAgfVxuICAgICAgdGhpcy5fX3Jlc2V0RmllbGQoKTtcbiAgICB9LFxuICAgIF9fcmVzZXRGaWVsZDogZnVuY3Rpb24oKXtcbiAgICAgIHRoaXMuc3RhdGUuZmllbGQucmVzZXQoKTtcbiAgICAgIHRoaXMuc3RhdGUud2FzUXVvdGluZyA9IGZhbHNlO1xuICAgIH0sXG4gICAgX19wdXNoOiBmdW5jdGlvbihyZWNvcmQsIHB1c2gpe1xuICAgICAgY29uc3Qge29uX3JlY29yZH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgICBpZihvbl9yZWNvcmQgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgIGNvbnN0IGluZm8gPSB0aGlzLl9faW5mb1JlY29yZCgpO1xuICAgICAgICB0cnl7XG4gICAgICAgICAgcmVjb3JkID0gb25fcmVjb3JkLmNhbGwobnVsbCwgcmVjb3JkLCBpbmZvKTtcbiAgICAgICAgfWNhdGNoKGVycil7XG4gICAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgICAgfVxuICAgICAgICBpZihyZWNvcmQgPT09IHVuZGVmaW5lZCB8fCByZWNvcmQgPT09IG51bGwpeyByZXR1cm47IH1cbiAgICAgIH1cbiAgICAgIHB1c2gocmVjb3JkKTtcbiAgICB9LFxuICAgIC8vIFJldHVybiBhIHR1cGxlIHdpdGggdGhlIGVycm9yIGFuZCB0aGUgY2FzdGVkIHZhbHVlXG4gICAgX19jYXN0OiBmdW5jdGlvbihmaWVsZCl7XG4gICAgICBjb25zdCB7Y29sdW1ucywgcmVsYXhfY29sdW1uX2NvdW50fSA9IHRoaXMub3B0aW9ucztcbiAgICAgIGNvbnN0IGlzQ29sdW1ucyA9IEFycmF5LmlzQXJyYXkoY29sdW1ucyk7XG4gICAgICAvLyBEb250IGxvb3NlIHRpbWUgY2FsbGluZyBjYXN0XG4gICAgICAvLyBiZWNhdXNlIHRoZSBmaW5hbCByZWNvcmQgaXMgYW4gb2JqZWN0XG4gICAgICAvLyBhbmQgdGhpcyBmaWVsZCBjYW4ndCBiZSBhc3NvY2lhdGVkIHRvIGEga2V5IHByZXNlbnQgaW4gY29sdW1uc1xuICAgICAgaWYoaXNDb2x1bW5zID09PSB0cnVlICYmIHJlbGF4X2NvbHVtbl9jb3VudCAmJiB0aGlzLm9wdGlvbnMuY29sdW1ucy5sZW5ndGggPD0gdGhpcy5zdGF0ZS5yZWNvcmQubGVuZ3RoKXtcbiAgICAgICAgcmV0dXJuIFt1bmRlZmluZWQsIHVuZGVmaW5lZF07XG4gICAgICB9XG4gICAgICBpZih0aGlzLnN0YXRlLmNhc3RGaWVsZCAhPT0gbnVsbCl7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICBjb25zdCBpbmZvID0gdGhpcy5fX2luZm9GaWVsZCgpO1xuICAgICAgICAgIHJldHVybiBbdW5kZWZpbmVkLCB0aGlzLnN0YXRlLmNhc3RGaWVsZC5jYWxsKG51bGwsIGZpZWxkLCBpbmZvKV07XG4gICAgICAgIH1jYXRjaChlcnIpe1xuICAgICAgICAgIHJldHVybiBbZXJyXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYodGhpcy5fX2lzRmxvYXQoZmllbGQpKXtcbiAgICAgICAgcmV0dXJuIFt1bmRlZmluZWQsIHBhcnNlRmxvYXQoZmllbGQpXTtcbiAgICAgIH1lbHNlIGlmKHRoaXMub3B0aW9ucy5jYXN0X2RhdGUgIT09IGZhbHNlKXtcbiAgICAgICAgY29uc3QgaW5mbyA9IHRoaXMuX19pbmZvRmllbGQoKTtcbiAgICAgICAgcmV0dXJuIFt1bmRlZmluZWQsIHRoaXMub3B0aW9ucy5jYXN0X2RhdGUuY2FsbChudWxsLCBmaWVsZCwgaW5mbyldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFt1bmRlZmluZWQsIGZpZWxkXTtcbiAgICB9LFxuICAgIC8vIEhlbHBlciB0byB0ZXN0IGlmIGEgY2hhcmFjdGVyIGlzIGEgc3BhY2Ugb3IgYSBsaW5lIGRlbGltaXRlclxuICAgIF9faXNDaGFyVHJpbWFibGU6IGZ1bmN0aW9uKGJ1ZiwgcG9zKXtcbiAgICAgIGNvbnN0IGlzVHJpbSA9IChidWYsIHBvcykgPT4ge1xuICAgICAgICBjb25zdCB7dGltY2hhcnN9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbG9vcDE6IGZvcihsZXQgaSA9IDA7IGkgPCB0aW1jaGFycy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgY29uc3QgdGltY2hhciA9IHRpbWNoYXJzW2ldO1xuICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB0aW1jaGFyLmxlbmd0aDsgaisrKXtcbiAgICAgICAgICAgIGlmKHRpbWNoYXJbal0gIT09IGJ1Zltwb3Mral0pIGNvbnRpbnVlIGxvb3AxO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGltY2hhci5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9O1xuICAgICAgcmV0dXJuIGlzVHJpbShidWYsIHBvcyk7XG4gICAgfSxcbiAgICAvLyBLZWVwIGl0IGluIGNhc2Ugd2UgaW1wbGVtZW50IHRoZSBgY2FzdF9pbnRgIG9wdGlvblxuICAgIC8vIF9faXNJbnQodmFsdWUpe1xuICAgIC8vICAgLy8gcmV0dXJuIE51bWJlci5pc0ludGVnZXIocGFyc2VJbnQodmFsdWUpKVxuICAgIC8vICAgLy8gcmV0dXJuICFpc05hTiggcGFyc2VJbnQoIG9iaiApICk7XG4gICAgLy8gICByZXR1cm4gL14oXFwtfFxcKyk/WzEtOV1bMC05XSokLy50ZXN0KHZhbHVlKVxuICAgIC8vIH1cbiAgICBfX2lzRmxvYXQ6IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIHJldHVybiAodmFsdWUgLSBwYXJzZUZsb2F0KHZhbHVlKSArIDEpID49IDA7IC8vIEJvcnJvd2VkIGZyb20ganF1ZXJ5XG4gICAgfSxcbiAgICBfX2NvbXBhcmVCeXRlczogZnVuY3Rpb24oc291cmNlQnVmLCB0YXJnZXRCdWYsIHRhcmdldFBvcywgZmlyc3RCeXRlKXtcbiAgICAgIGlmKHNvdXJjZUJ1ZlswXSAhPT0gZmlyc3RCeXRlKSByZXR1cm4gMDtcbiAgICAgIGNvbnN0IHNvdXJjZUxlbmd0aCA9IHNvdXJjZUJ1Zi5sZW5ndGg7XG4gICAgICBmb3IobGV0IGkgPSAxOyBpIDwgc291cmNlTGVuZ3RoOyBpKyspe1xuICAgICAgICBpZihzb3VyY2VCdWZbaV0gIT09IHRhcmdldEJ1Zlt0YXJnZXRQb3MraV0pIHJldHVybiAwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNvdXJjZUxlbmd0aDtcbiAgICB9LFxuICAgIF9faXNEZWxpbWl0ZXI6IGZ1bmN0aW9uKGJ1ZiwgcG9zLCBjaHIpe1xuICAgICAgY29uc3Qge2RlbGltaXRlciwgaWdub3JlX2xhc3RfZGVsaW1pdGVyc30gPSB0aGlzLm9wdGlvbnM7XG4gICAgICBpZihpZ25vcmVfbGFzdF9kZWxpbWl0ZXJzID09PSB0cnVlICYmIHRoaXMuc3RhdGUucmVjb3JkLmxlbmd0aCA9PT0gdGhpcy5vcHRpb25zLmNvbHVtbnMubGVuZ3RoIC0gMSl7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfWVsc2UgaWYoaWdub3JlX2xhc3RfZGVsaW1pdGVycyAhPT0gZmFsc2UgJiYgdHlwZW9mIGlnbm9yZV9sYXN0X2RlbGltaXRlcnMgPT09ICdudW1iZXInICYmIHRoaXMuc3RhdGUucmVjb3JkLmxlbmd0aCA9PT0gaWdub3JlX2xhc3RfZGVsaW1pdGVycyAtIDEpe1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICAgIGxvb3AxOiBmb3IobGV0IGkgPSAwOyBpIDwgZGVsaW1pdGVyLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgZGVsID0gZGVsaW1pdGVyW2ldO1xuICAgICAgICBpZihkZWxbMF0gPT09IGNocil7XG4gICAgICAgICAgZm9yKGxldCBqID0gMTsgaiA8IGRlbC5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICBpZihkZWxbal0gIT09IGJ1Zltwb3Mral0pIGNvbnRpbnVlIGxvb3AxO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZGVsLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfSxcbiAgICBfX2lzUmVjb3JkRGVsaW1pdGVyOiBmdW5jdGlvbihjaHIsIGJ1ZiwgcG9zKXtcbiAgICAgIGNvbnN0IHtyZWNvcmRfZGVsaW1pdGVyfSA9IHRoaXMub3B0aW9ucztcbiAgICAgIGNvbnN0IHJlY29yZERlbGltaXRlckxlbmd0aCA9IHJlY29yZF9kZWxpbWl0ZXIubGVuZ3RoO1xuICAgICAgbG9vcDE6IGZvcihsZXQgaSA9IDA7IGkgPCByZWNvcmREZWxpbWl0ZXJMZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IHJkID0gcmVjb3JkX2RlbGltaXRlcltpXTtcbiAgICAgICAgY29uc3QgcmRMZW5ndGggPSByZC5sZW5ndGg7XG4gICAgICAgIGlmKHJkWzBdICE9PSBjaHIpe1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaiA9IDE7IGogPCByZExlbmd0aDsgaisrKXtcbiAgICAgICAgICBpZihyZFtqXSAhPT0gYnVmW3BvcytqXSl7XG4gICAgICAgICAgICBjb250aW51ZSBsb29wMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJkLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH0sXG4gICAgX19pc0VzY2FwZTogZnVuY3Rpb24oYnVmLCBwb3MsIGNocil7XG4gICAgICBjb25zdCB7ZXNjYXBlfSA9IHRoaXMub3B0aW9ucztcbiAgICAgIGlmKGVzY2FwZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgY29uc3QgbCA9IGVzY2FwZS5sZW5ndGg7XG4gICAgICBpZihlc2NhcGVbMF0gPT09IGNocil7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsOyBpKyspe1xuICAgICAgICAgIGlmKGVzY2FwZVtpXSAhPT0gYnVmW3BvcytpXSl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgX19pc1F1b3RlOiBmdW5jdGlvbihidWYsIHBvcyl7XG4gICAgICBjb25zdCB7cXVvdGV9ID0gdGhpcy5vcHRpb25zO1xuICAgICAgaWYocXVvdGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgIGNvbnN0IGwgPSBxdW90ZS5sZW5ndGg7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbDsgaSsrKXtcbiAgICAgICAgaWYocXVvdGVbaV0gIT09IGJ1Zltwb3MraV0pe1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBfX2F1dG9EaXNjb3ZlclJlY29yZERlbGltaXRlcjogZnVuY3Rpb24oYnVmLCBwb3Mpe1xuICAgICAgY29uc3QgeyBlbmNvZGluZyB9ID0gdGhpcy5vcHRpb25zO1xuICAgICAgLy8gTm90ZSwgd2UgZG9uJ3QgbmVlZCB0byBjYWNoZSB0aGlzIGluZm9ybWF0aW9uIGluIHN0YXRlLFxuICAgICAgLy8gSXQgaXMgb25seSBjYWxsZWQgb24gdGhlIGZpcnN0IGxpbmUgdW50aWwgd2UgZmluZCBvdXQgYSBzdWl0YWJsZVxuICAgICAgLy8gcmVjb3JkIGRlbGltaXRlci5cbiAgICAgIGNvbnN0IHJkcyA9IFtcbiAgICAgICAgLy8gSW1wb3J0YW50LCB0aGUgd2luZG93cyBsaW5lIGVuZGluZyBtdXN0IGJlIGJlZm9yZSBtYWMgb3MgOVxuICAgICAgICBCdWZmZXIuZnJvbSgnXFxyXFxuJywgZW5jb2RpbmcpLFxuICAgICAgICBCdWZmZXIuZnJvbSgnXFxuJywgZW5jb2RpbmcpLFxuICAgICAgICBCdWZmZXIuZnJvbSgnXFxyJywgZW5jb2RpbmcpLFxuICAgICAgXTtcbiAgICAgIGxvb3A6IGZvcihsZXQgaSA9IDA7IGkgPCByZHMubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBsID0gcmRzW2ldLmxlbmd0aDtcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGw7IGorKyl7XG4gICAgICAgICAgaWYocmRzW2ldW2pdICE9PSBidWZbcG9zICsgal0pe1xuICAgICAgICAgICAgY29udGludWUgbG9vcDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zLnJlY29yZF9kZWxpbWl0ZXIucHVzaChyZHNbaV0pO1xuICAgICAgICB0aGlzLnN0YXRlLnJlY29yZERlbGltaXRlck1heExlbmd0aCA9IHJkc1tpXS5sZW5ndGg7XG4gICAgICAgIHJldHVybiByZHNbaV0ubGVuZ3RoO1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfSxcbiAgICBfX2Vycm9yOiBmdW5jdGlvbihtc2cpe1xuICAgICAgY29uc3Qge2VuY29kaW5nLCByYXcsIHNraXBfcmVjb3Jkc193aXRoX2Vycm9yfSA9IHRoaXMub3B0aW9ucztcbiAgICAgIGNvbnN0IGVyciA9IHR5cGVvZiBtc2cgPT09ICdzdHJpbmcnID8gbmV3IEVycm9yKG1zZykgOiBtc2c7XG4gICAgICBpZihza2lwX3JlY29yZHNfd2l0aF9lcnJvcil7XG4gICAgICAgIHRoaXMuc3RhdGUucmVjb3JkSGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICBpZih0aGlzLm9wdGlvbnMub25fc2tpcCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMub25fc2tpcChlcnIsIHJhdyA/IHRoaXMuc3RhdGUucmF3QnVmZmVyLnRvU3RyaW5nKGVuY29kaW5nKSA6IHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5lbWl0KCdza2lwJywgZXJyLCByYXcgPyB0aGlzLnN0YXRlLnJhd0J1ZmZlci50b1N0cmluZyhlbmNvZGluZykgOiB1bmRlZmluZWQpO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfWVsc2Uge1xuICAgICAgICByZXR1cm4gZXJyO1xuICAgICAgfVxuICAgIH0sXG4gICAgX19pbmZvRGF0YVNldDogZnVuY3Rpb24oKXtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnRoaXMuaW5mbyxcbiAgICAgICAgY29sdW1uczogdGhpcy5vcHRpb25zLmNvbHVtbnNcbiAgICAgIH07XG4gICAgfSxcbiAgICBfX2luZm9SZWNvcmQ6IGZ1bmN0aW9uKCl7XG4gICAgICBjb25zdCB7Y29sdW1ucywgcmF3LCBlbmNvZGluZ30gPSB0aGlzLm9wdGlvbnM7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi50aGlzLl9faW5mb0RhdGFTZXQoKSxcbiAgICAgICAgZXJyb3I6IHRoaXMuc3RhdGUuZXJyb3IsXG4gICAgICAgIGhlYWRlcjogY29sdW1ucyA9PT0gdHJ1ZSxcbiAgICAgICAgaW5kZXg6IHRoaXMuc3RhdGUucmVjb3JkLmxlbmd0aCxcbiAgICAgICAgcmF3OiByYXcgPyB0aGlzLnN0YXRlLnJhd0J1ZmZlci50b1N0cmluZyhlbmNvZGluZykgOiB1bmRlZmluZWRcbiAgICAgIH07XG4gICAgfSxcbiAgICBfX2luZm9GaWVsZDogZnVuY3Rpb24oKXtcbiAgICAgIGNvbnN0IHtjb2x1bW5zfSA9IHRoaXMub3B0aW9ucztcbiAgICAgIGNvbnN0IGlzQ29sdW1ucyA9IEFycmF5LmlzQXJyYXkoY29sdW1ucyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi50aGlzLl9faW5mb1JlY29yZCgpLFxuICAgICAgICBjb2x1bW46IGlzQ29sdW1ucyA9PT0gdHJ1ZSA/XG4gICAgICAgICAgKGNvbHVtbnMubGVuZ3RoID4gdGhpcy5zdGF0ZS5yZWNvcmQubGVuZ3RoID9cbiAgICAgICAgICAgIGNvbHVtbnNbdGhpcy5zdGF0ZS5yZWNvcmQubGVuZ3RoXS5uYW1lIDpcbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgICApIDpcbiAgICAgICAgICB0aGlzLnN0YXRlLnJlY29yZC5sZW5ndGgsXG4gICAgICAgIHF1b3Rpbmc6IHRoaXMuc3RhdGUud2FzUXVvdGluZyxcbiAgICAgIH07XG4gICAgfVxuICB9O1xufTtcblxuY29uc3QgcGFyc2UgPSBmdW5jdGlvbihkYXRhLCBvcHRzPXt9KXtcbiAgaWYodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKXtcbiAgICBkYXRhID0gQnVmZmVyLmZyb20oZGF0YSk7XG4gIH1cbiAgY29uc3QgcmVjb3JkcyA9IG9wdHMgJiYgb3B0cy5vYmpuYW1lID8ge30gOiBbXTtcbiAgY29uc3QgcGFyc2VyID0gdHJhbnNmb3JtKG9wdHMpO1xuICBjb25zdCBwdXNoID0gKHJlY29yZCkgPT4ge1xuICAgIGlmKHBhcnNlci5vcHRpb25zLm9iam5hbWUgPT09IHVuZGVmaW5lZClcbiAgICAgIHJlY29yZHMucHVzaChyZWNvcmQpO1xuICAgIGVsc2Uge1xuICAgICAgcmVjb3Jkc1tyZWNvcmRbMF1dID0gcmVjb3JkWzFdO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgY2xvc2UgPSAoKSA9PiB7fTtcbiAgY29uc3QgZXJyMSA9IHBhcnNlci5wYXJzZShkYXRhLCBmYWxzZSwgcHVzaCwgY2xvc2UpO1xuICBpZihlcnIxICE9PSB1bmRlZmluZWQpIHRocm93IGVycjE7XG4gIGNvbnN0IGVycjIgPSBwYXJzZXIucGFyc2UodW5kZWZpbmVkLCB0cnVlLCBwdXNoLCBjbG9zZSk7XG4gIGlmKGVycjIgIT09IHVuZGVmaW5lZCkgdGhyb3cgZXJyMjtcbiAgcmV0dXJuIHJlY29yZHM7XG59O1xuXG5leHBvcnQgeyBDc3ZFcnJvciwgcGFyc2UgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9