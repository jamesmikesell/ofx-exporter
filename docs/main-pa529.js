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
AppVersion.VERSION = "c611562";


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
        let dtoTransactions = [];
        transactions.forEach(singleTran => {
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
        let accountNumbers = this.getAccountNumbers(holdings, transactions);
        if (accountNumbers.size !== 1)
            throw new Error("Incorrect number of accounts listed. 1 and only 1 account number must be listed.");
        let [accountNumber] = accountNumbers;
        let startEndDates = this.getStartEndDates(dtoTransactions);
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
    static getAccountNumbers(holdings, transactions) {
        let accountNumbers = new Set();
        holdings.forEach(single => {
            if (single.accountNumber)
                accountNumbers.add(single.accountNumber);
        });
        transactions.forEach(single => {
            if (single.accountNumber)
                accountNumbers.add(single.accountNumber);
        });
        return accountNumbers;
    }
    static getStartEndDates(transactions) {
        if (transactions.length === 0) {
            let today = new Date();
            return [today, today];
        }
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
        if (!(transactionsSectionOfCsv === null || transactionsSectionOfCsv === void 0 ? void 0 : transactionsSectionOfCsv.trim()))
            return [];
        let transactionsAndHeader = (0, sync_1.parse)(transactionsSectionOfCsv);
        if (transactionsAndHeader.length === 0)
            return [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix3Q0FBd0M7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsZ0RBQWdEO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJCQUEyQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvdkJEO0FBQ0E7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFNBQVM7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLE9BQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFNBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBLDhCQUE4Qjs7QUFFOUI7QUFDQSwyQ0FBMkMsVUFBVTtBQUNyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUyxXQUFXOztBQUVwQjtBQUNBO0FBQ0E7QUFDQSxTQUFTLFdBQVc7O0FBRXBCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLFdBQVc7O0FBRXBCO0FBQ0E7QUFDQSxTQUFTLFVBQVU7O0FBRW5CO0FBQ0E7O0FBRUEsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3Qjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQjs7QUFFcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLGlCQUFpQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGVBQWU7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EseUJBQXlCLFFBQVE7QUFDakM7QUFDQSxzQkFBc0IsZUFBZTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLFNBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLG9CQUFvQixjQUFjO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3REFBd0QsT0FBTztBQUMvRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0RBQXdELE9BQU87QUFDL0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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QUUyQjs7Ozs7OztVQy91RzNCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9kYXlqcy9kYXlqcy5taW4uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9maWxlLXNhdmVyL2Rpc3QvRmlsZVNhdmVyLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdmVyc2lvbi50cyIsIndlYnBhY2s6Ly8vLi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9vZngtc2VjdXJpdHktc3RvY2tzLnRzIiwid2VicGFjazovLy8uL3BhLTUyOS1jc3YtdHJhbnNmb3JtZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy94MmpzL3gyanMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3YtcGFyc2UvZGlzdC9lc20vc3luYy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6KHQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczp0fHxzZWxmKS5kYXlqcz1lKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9MWUzLGU9NmU0LG49MzZlNSxyPVwibWlsbGlzZWNvbmRcIixpPVwic2Vjb25kXCIscz1cIm1pbnV0ZVwiLHU9XCJob3VyXCIsYT1cImRheVwiLG89XCJ3ZWVrXCIsYz1cIm1vbnRoXCIsZj1cInF1YXJ0ZXJcIixoPVwieWVhclwiLGQ9XCJkYXRlXCIsbD1cIkludmFsaWQgRGF0ZVwiLCQ9L14oXFxkezR9KVstL10/KFxcZHsxLDJ9KT9bLS9dPyhcXGR7MCwyfSlbVHRcXHNdKihcXGR7MSwyfSk/Oj8oXFxkezEsMn0pPzo/KFxcZHsxLDJ9KT9bLjpdPyhcXGQrKT8kLyx5PS9cXFsoW15cXF1dKyldfFl7MSw0fXxNezEsNH18RHsxLDJ9fGR7MSw0fXxIezEsMn18aHsxLDJ9fGF8QXxtezEsMn18c3sxLDJ9fFp7MSwyfXxTU1MvZyxNPXtuYW1lOlwiZW5cIix3ZWVrZGF5czpcIlN1bmRheV9Nb25kYXlfVHVlc2RheV9XZWRuZXNkYXlfVGh1cnNkYXlfRnJpZGF5X1NhdHVyZGF5XCIuc3BsaXQoXCJfXCIpLG1vbnRoczpcIkphbnVhcnlfRmVicnVhcnlfTWFyY2hfQXByaWxfTWF5X0p1bmVfSnVseV9BdWd1c3RfU2VwdGVtYmVyX09jdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXJcIi5zcGxpdChcIl9cIiksb3JkaW5hbDpmdW5jdGlvbih0KXt2YXIgZT1bXCJ0aFwiLFwic3RcIixcIm5kXCIsXCJyZFwiXSxuPXQlMTAwO3JldHVyblwiW1wiK3QrKGVbKG4tMjApJTEwXXx8ZVtuXXx8ZVswXSkrXCJdXCJ9fSxtPWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1TdHJpbmcodCk7cmV0dXJuIXJ8fHIubGVuZ3RoPj1lP3Q6XCJcIitBcnJheShlKzEtci5sZW5ndGgpLmpvaW4obikrdH0sdj17czptLHo6ZnVuY3Rpb24odCl7dmFyIGU9LXQudXRjT2Zmc2V0KCksbj1NYXRoLmFicyhlKSxyPU1hdGguZmxvb3Iobi82MCksaT1uJTYwO3JldHVybihlPD0wP1wiK1wiOlwiLVwiKSttKHIsMixcIjBcIikrXCI6XCIrbShpLDIsXCIwXCIpfSxtOmZ1bmN0aW9uIHQoZSxuKXtpZihlLmRhdGUoKTxuLmRhdGUoKSlyZXR1cm4tdChuLGUpO3ZhciByPTEyKihuLnllYXIoKS1lLnllYXIoKSkrKG4ubW9udGgoKS1lLm1vbnRoKCkpLGk9ZS5jbG9uZSgpLmFkZChyLGMpLHM9bi1pPDAsdT1lLmNsb25lKCkuYWRkKHIrKHM/LTE6MSksYyk7cmV0dXJuKygtKHIrKG4taSkvKHM/aS11OnUtaSkpfHwwKX0sYTpmdW5jdGlvbih0KXtyZXR1cm4gdDwwP01hdGguY2VpbCh0KXx8MDpNYXRoLmZsb29yKHQpfSxwOmZ1bmN0aW9uKHQpe3JldHVybntNOmMseTpoLHc6byxkOmEsRDpkLGg6dSxtOnMsczppLG1zOnIsUTpmfVt0XXx8U3RyaW5nKHR8fFwiXCIpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvcyQvLFwiXCIpfSx1OmZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10fX0sZz1cImVuXCIsRD17fTtEW2ddPU07dmFyIHA9XCIkaXNEYXlqc09iamVjdFwiLFM9ZnVuY3Rpb24odCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBffHwhKCF0fHwhdFtwXSl9LHc9ZnVuY3Rpb24gdChlLG4scil7dmFyIGk7aWYoIWUpcmV0dXJuIGc7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpe3ZhciBzPWUudG9Mb3dlckNhc2UoKTtEW3NdJiYoaT1zKSxuJiYoRFtzXT1uLGk9cyk7dmFyIHU9ZS5zcGxpdChcIi1cIik7aWYoIWkmJnUubGVuZ3RoPjEpcmV0dXJuIHQodVswXSl9ZWxzZXt2YXIgYT1lLm5hbWU7RFthXT1lLGk9YX1yZXR1cm4hciYmaSYmKGc9aSksaXx8IXImJmd9LE89ZnVuY3Rpb24odCxlKXtpZihTKHQpKXJldHVybiB0LmNsb25lKCk7dmFyIG49XCJvYmplY3RcIj09dHlwZW9mIGU/ZTp7fTtyZXR1cm4gbi5kYXRlPXQsbi5hcmdzPWFyZ3VtZW50cyxuZXcgXyhuKX0sYj12O2IubD13LGIuaT1TLGIudz1mdW5jdGlvbih0LGUpe3JldHVybiBPKHQse2xvY2FsZTplLiRMLHV0YzplLiR1LHg6ZS4keCwkb2Zmc2V0OmUuJG9mZnNldH0pfTt2YXIgXz1mdW5jdGlvbigpe2Z1bmN0aW9uIE0odCl7dGhpcy4kTD13KHQubG9jYWxlLG51bGwsITApLHRoaXMucGFyc2UodCksdGhpcy4keD10aGlzLiR4fHx0Lnh8fHt9LHRoaXNbcF09ITB9dmFyIG09TS5wcm90b3R5cGU7cmV0dXJuIG0ucGFyc2U9ZnVuY3Rpb24odCl7dGhpcy4kZD1mdW5jdGlvbih0KXt2YXIgZT10LmRhdGUsbj10LnV0YztpZihudWxsPT09ZSlyZXR1cm4gbmV3IERhdGUoTmFOKTtpZihiLnUoZSkpcmV0dXJuIG5ldyBEYXRlO2lmKGUgaW5zdGFuY2VvZiBEYXRlKXJldHVybiBuZXcgRGF0ZShlKTtpZihcInN0cmluZ1wiPT10eXBlb2YgZSYmIS9aJC9pLnRlc3QoZSkpe3ZhciByPWUubWF0Y2goJCk7aWYocil7dmFyIGk9clsyXS0xfHwwLHM9KHJbN118fFwiMFwiKS5zdWJzdHJpbmcoMCwzKTtyZXR1cm4gbj9uZXcgRGF0ZShEYXRlLlVUQyhyWzFdLGksclszXXx8MSxyWzRdfHwwLHJbNV18fDAscls2XXx8MCxzKSk6bmV3IERhdGUoclsxXSxpLHJbM118fDEscls0XXx8MCxyWzVdfHwwLHJbNl18fDAscyl9fXJldHVybiBuZXcgRGF0ZShlKX0odCksdGhpcy5pbml0KCl9LG0uaW5pdD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuJGQ7dGhpcy4keT10LmdldEZ1bGxZZWFyKCksdGhpcy4kTT10LmdldE1vbnRoKCksdGhpcy4kRD10LmdldERhdGUoKSx0aGlzLiRXPXQuZ2V0RGF5KCksdGhpcy4kSD10LmdldEhvdXJzKCksdGhpcy4kbT10LmdldE1pbnV0ZXMoKSx0aGlzLiRzPXQuZ2V0U2Vjb25kcygpLHRoaXMuJG1zPXQuZ2V0TWlsbGlzZWNvbmRzKCl9LG0uJHV0aWxzPWZ1bmN0aW9uKCl7cmV0dXJuIGJ9LG0uaXNWYWxpZD1mdW5jdGlvbigpe3JldHVybiEodGhpcy4kZC50b1N0cmluZygpPT09bCl9LG0uaXNTYW1lPWZ1bmN0aW9uKHQsZSl7dmFyIG49Tyh0KTtyZXR1cm4gdGhpcy5zdGFydE9mKGUpPD1uJiZuPD10aGlzLmVuZE9mKGUpfSxtLmlzQWZ0ZXI9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTyh0KTx0aGlzLnN0YXJ0T2YoZSl9LG0uaXNCZWZvcmU9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5lbmRPZihlKTxPKHQpfSxtLiRnPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gYi51KHQpP3RoaXNbZV06dGhpcy5zZXQobix0KX0sbS51bml4PWZ1bmN0aW9uKCl7cmV0dXJuIE1hdGguZmxvb3IodGhpcy52YWx1ZU9mKCkvMWUzKX0sbS52YWx1ZU9mPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQuZ2V0VGltZSgpfSxtLnN0YXJ0T2Y9ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzLHI9ISFiLnUoZSl8fGUsZj1iLnAodCksbD1mdW5jdGlvbih0LGUpe3ZhciBpPWIudyhuLiR1P0RhdGUuVVRDKG4uJHksZSx0KTpuZXcgRGF0ZShuLiR5LGUsdCksbik7cmV0dXJuIHI/aTppLmVuZE9mKGEpfSwkPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGIudyhuLnRvRGF0ZSgpW3RdLmFwcGx5KG4udG9EYXRlKFwic1wiKSwocj9bMCwwLDAsMF06WzIzLDU5LDU5LDk5OV0pLnNsaWNlKGUpKSxuKX0seT10aGlzLiRXLE09dGhpcy4kTSxtPXRoaXMuJEQsdj1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIik7c3dpdGNoKGYpe2Nhc2UgaDpyZXR1cm4gcj9sKDEsMCk6bCgzMSwxMSk7Y2FzZSBjOnJldHVybiByP2woMSxNKTpsKDAsTSsxKTtjYXNlIG86dmFyIGc9dGhpcy4kbG9jYWxlKCkud2Vla1N0YXJ0fHwwLEQ9KHk8Zz95Kzc6eSktZztyZXR1cm4gbChyP20tRDptKyg2LUQpLE0pO2Nhc2UgYTpjYXNlIGQ6cmV0dXJuICQoditcIkhvdXJzXCIsMCk7Y2FzZSB1OnJldHVybiAkKHYrXCJNaW51dGVzXCIsMSk7Y2FzZSBzOnJldHVybiAkKHYrXCJTZWNvbmRzXCIsMik7Y2FzZSBpOnJldHVybiAkKHYrXCJNaWxsaXNlY29uZHNcIiwzKTtkZWZhdWx0OnJldHVybiB0aGlzLmNsb25lKCl9fSxtLmVuZE9mPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnN0YXJ0T2YodCwhMSl9LG0uJHNldD1mdW5jdGlvbih0LGUpe3ZhciBuLG89Yi5wKHQpLGY9XCJzZXRcIisodGhpcy4kdT9cIlVUQ1wiOlwiXCIpLGw9KG49e30sblthXT1mK1wiRGF0ZVwiLG5bZF09ZitcIkRhdGVcIixuW2NdPWYrXCJNb250aFwiLG5baF09ZitcIkZ1bGxZZWFyXCIsblt1XT1mK1wiSG91cnNcIixuW3NdPWYrXCJNaW51dGVzXCIsbltpXT1mK1wiU2Vjb25kc1wiLG5bcl09ZitcIk1pbGxpc2Vjb25kc1wiLG4pW29dLCQ9bz09PWE/dGhpcy4kRCsoZS10aGlzLiRXKTplO2lmKG89PT1jfHxvPT09aCl7dmFyIHk9dGhpcy5jbG9uZSgpLnNldChkLDEpO3kuJGRbbF0oJCkseS5pbml0KCksdGhpcy4kZD15LnNldChkLE1hdGgubWluKHRoaXMuJEQseS5kYXlzSW5Nb250aCgpKSkuJGR9ZWxzZSBsJiZ0aGlzLiRkW2xdKCQpO3JldHVybiB0aGlzLmluaXQoKSx0aGlzfSxtLnNldD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmNsb25lKCkuJHNldCh0LGUpfSxtLmdldD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpc1tiLnAodCldKCl9LG0uYWRkPWZ1bmN0aW9uKHIsZil7dmFyIGQsbD10aGlzO3I9TnVtYmVyKHIpO3ZhciAkPWIucChmKSx5PWZ1bmN0aW9uKHQpe3ZhciBlPU8obCk7cmV0dXJuIGIudyhlLmRhdGUoZS5kYXRlKCkrTWF0aC5yb3VuZCh0KnIpKSxsKX07aWYoJD09PWMpcmV0dXJuIHRoaXMuc2V0KGMsdGhpcy4kTStyKTtpZigkPT09aClyZXR1cm4gdGhpcy5zZXQoaCx0aGlzLiR5K3IpO2lmKCQ9PT1hKXJldHVybiB5KDEpO2lmKCQ9PT1vKXJldHVybiB5KDcpO3ZhciBNPShkPXt9LGRbc109ZSxkW3VdPW4sZFtpXT10LGQpWyRdfHwxLG09dGhpcy4kZC5nZXRUaW1lKCkrcipNO3JldHVybiBiLncobSx0aGlzKX0sbS5zdWJ0cmFjdD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmFkZCgtMSp0LGUpfSxtLmZvcm1hdD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLG49dGhpcy4kbG9jYWxlKCk7aWYoIXRoaXMuaXNWYWxpZCgpKXJldHVybiBuLmludmFsaWREYXRlfHxsO3ZhciByPXR8fFwiWVlZWS1NTS1ERFRISDptbTpzc1pcIixpPWIueih0aGlzKSxzPXRoaXMuJEgsdT10aGlzLiRtLGE9dGhpcy4kTSxvPW4ud2Vla2RheXMsYz1uLm1vbnRocyxmPW4ubWVyaWRpZW0saD1mdW5jdGlvbih0LG4saSxzKXtyZXR1cm4gdCYmKHRbbl18fHQoZSxyKSl8fGlbbl0uc2xpY2UoMCxzKX0sZD1mdW5jdGlvbih0KXtyZXR1cm4gYi5zKHMlMTJ8fDEyLHQsXCIwXCIpfSwkPWZ8fGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj10PDEyP1wiQU1cIjpcIlBNXCI7cmV0dXJuIG4/ci50b0xvd2VyQ2FzZSgpOnJ9O3JldHVybiByLnJlcGxhY2UoeSwoZnVuY3Rpb24odCxyKXtyZXR1cm4gcnx8ZnVuY3Rpb24odCl7c3dpdGNoKHQpe2Nhc2VcIllZXCI6cmV0dXJuIFN0cmluZyhlLiR5KS5zbGljZSgtMik7Y2FzZVwiWVlZWVwiOnJldHVybiBiLnMoZS4keSw0LFwiMFwiKTtjYXNlXCJNXCI6cmV0dXJuIGErMTtjYXNlXCJNTVwiOnJldHVybiBiLnMoYSsxLDIsXCIwXCIpO2Nhc2VcIk1NTVwiOnJldHVybiBoKG4ubW9udGhzU2hvcnQsYSxjLDMpO2Nhc2VcIk1NTU1cIjpyZXR1cm4gaChjLGEpO2Nhc2VcIkRcIjpyZXR1cm4gZS4kRDtjYXNlXCJERFwiOnJldHVybiBiLnMoZS4kRCwyLFwiMFwiKTtjYXNlXCJkXCI6cmV0dXJuIFN0cmluZyhlLiRXKTtjYXNlXCJkZFwiOnJldHVybiBoKG4ud2Vla2RheXNNaW4sZS4kVyxvLDIpO2Nhc2VcImRkZFwiOnJldHVybiBoKG4ud2Vla2RheXNTaG9ydCxlLiRXLG8sMyk7Y2FzZVwiZGRkZFwiOnJldHVybiBvW2UuJFddO2Nhc2VcIkhcIjpyZXR1cm4gU3RyaW5nKHMpO2Nhc2VcIkhIXCI6cmV0dXJuIGIucyhzLDIsXCIwXCIpO2Nhc2VcImhcIjpyZXR1cm4gZCgxKTtjYXNlXCJoaFwiOnJldHVybiBkKDIpO2Nhc2VcImFcIjpyZXR1cm4gJChzLHUsITApO2Nhc2VcIkFcIjpyZXR1cm4gJChzLHUsITEpO2Nhc2VcIm1cIjpyZXR1cm4gU3RyaW5nKHUpO2Nhc2VcIm1tXCI6cmV0dXJuIGIucyh1LDIsXCIwXCIpO2Nhc2VcInNcIjpyZXR1cm4gU3RyaW5nKGUuJHMpO2Nhc2VcInNzXCI6cmV0dXJuIGIucyhlLiRzLDIsXCIwXCIpO2Nhc2VcIlNTU1wiOnJldHVybiBiLnMoZS4kbXMsMyxcIjBcIik7Y2FzZVwiWlwiOnJldHVybiBpfXJldHVybiBudWxsfSh0KXx8aS5yZXBsYWNlKFwiOlwiLFwiXCIpfSkpfSxtLnV0Y09mZnNldD1mdW5jdGlvbigpe3JldHVybiAxNSotTWF0aC5yb3VuZCh0aGlzLiRkLmdldFRpbWV6b25lT2Zmc2V0KCkvMTUpfSxtLmRpZmY9ZnVuY3Rpb24ocixkLGwpe3ZhciAkLHk9dGhpcyxNPWIucChkKSxtPU8ociksdj0obS51dGNPZmZzZXQoKS10aGlzLnV0Y09mZnNldCgpKSplLGc9dGhpcy1tLEQ9ZnVuY3Rpb24oKXtyZXR1cm4gYi5tKHksbSl9O3N3aXRjaChNKXtjYXNlIGg6JD1EKCkvMTI7YnJlYWs7Y2FzZSBjOiQ9RCgpO2JyZWFrO2Nhc2UgZjokPUQoKS8zO2JyZWFrO2Nhc2UgbzokPShnLXYpLzYwNDhlNTticmVhaztjYXNlIGE6JD0oZy12KS84NjRlNTticmVhaztjYXNlIHU6JD1nL247YnJlYWs7Y2FzZSBzOiQ9Zy9lO2JyZWFrO2Nhc2UgaTokPWcvdDticmVhaztkZWZhdWx0OiQ9Z31yZXR1cm4gbD8kOmIuYSgkKX0sbS5kYXlzSW5Nb250aD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVuZE9mKGMpLiREfSxtLiRsb2NhbGU9ZnVuY3Rpb24oKXtyZXR1cm4gRFt0aGlzLiRMXX0sbS5sb2NhbGU9ZnVuY3Rpb24odCxlKXtpZighdClyZXR1cm4gdGhpcy4kTDt2YXIgbj10aGlzLmNsb25lKCkscj13KHQsZSwhMCk7cmV0dXJuIHImJihuLiRMPXIpLG59LG0uY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gYi53KHRoaXMuJGQsdGhpcyl9LG0udG9EYXRlPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBEYXRlKHRoaXMudmFsdWVPZigpKX0sbS50b0pTT049ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pc1ZhbGlkKCk/dGhpcy50b0lTT1N0cmluZygpOm51bGx9LG0udG9JU09TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b0lTT1N0cmluZygpfSxtLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQudG9VVENTdHJpbmcoKX0sTX0oKSxrPV8ucHJvdG90eXBlO3JldHVybiBPLnByb3RvdHlwZT1rLFtbXCIkbXNcIixyXSxbXCIkc1wiLGldLFtcIiRtXCIsc10sW1wiJEhcIix1XSxbXCIkV1wiLGFdLFtcIiRNXCIsY10sW1wiJHlcIixoXSxbXCIkRFwiLGRdXS5mb3JFYWNoKChmdW5jdGlvbih0KXtrW3RbMV1dPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLiRnKGUsdFswXSx0WzFdKX19KSksTy5leHRlbmQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC4kaXx8KHQoZSxfLE8pLHQuJGk9ITApLE99LE8ubG9jYWxlPXcsTy5pc0RheWpzPVMsTy51bml4PWZ1bmN0aW9uKHQpe3JldHVybiBPKDFlMyp0KX0sTy5lbj1EW2ddLE8uTHM9RCxPLnA9e30sT30pKTsiLCIoZnVuY3Rpb24oYSxiKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLGIpO2Vsc2UgaWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGV4cG9ydHMpYigpO2Vsc2V7YigpLGEuRmlsZVNhdmVyPXtleHBvcnRzOnt9fS5leHBvcnRzfX0pKHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGEsYil7cmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGI/Yj17YXV0b0JvbTohMX06XCJvYmplY3RcIiE9dHlwZW9mIGImJihjb25zb2xlLndhcm4oXCJEZXByZWNhdGVkOiBFeHBlY3RlZCB0aGlyZCBhcmd1bWVudCB0byBiZSBhIG9iamVjdFwiKSxiPXthdXRvQm9tOiFifSksYi5hdXRvQm9tJiYvXlxccyooPzp0ZXh0XFwvXFxTKnxhcHBsaWNhdGlvblxcL3htbHxcXFMqXFwvXFxTKlxcK3htbClcXHMqOy4qY2hhcnNldFxccyo9XFxzKnV0Zi04L2kudGVzdChhLnR5cGUpP25ldyBCbG9iKFtcIlxcdUZFRkZcIixhXSx7dHlwZTphLnR5cGV9KTphfWZ1bmN0aW9uIGMoYSxiLGMpe3ZhciBkPW5ldyBYTUxIdHRwUmVxdWVzdDtkLm9wZW4oXCJHRVRcIixhKSxkLnJlc3BvbnNlVHlwZT1cImJsb2JcIixkLm9ubG9hZD1mdW5jdGlvbigpe2coZC5yZXNwb25zZSxiLGMpfSxkLm9uZXJyb3I9ZnVuY3Rpb24oKXtjb25zb2xlLmVycm9yKFwiY291bGQgbm90IGRvd25sb2FkIGZpbGVcIil9LGQuc2VuZCgpfWZ1bmN0aW9uIGQoYSl7dmFyIGI9bmV3IFhNTEh0dHBSZXF1ZXN0O2Iub3BlbihcIkhFQURcIixhLCExKTt0cnl7Yi5zZW5kKCl9Y2F0Y2goYSl7fXJldHVybiAyMDA8PWIuc3RhdHVzJiYyOTk+PWIuc3RhdHVzfWZ1bmN0aW9uIGUoYSl7dHJ5e2EuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcImNsaWNrXCIpKX1jYXRjaChjKXt2YXIgYj1kb2N1bWVudC5jcmVhdGVFdmVudChcIk1vdXNlRXZlbnRzXCIpO2IuaW5pdE1vdXNlRXZlbnQoXCJjbGlja1wiLCEwLCEwLHdpbmRvdywwLDAsMCw4MCwyMCwhMSwhMSwhMSwhMSwwLG51bGwpLGEuZGlzcGF0Y2hFdmVudChiKX19dmFyIGY9XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmd2luZG93LndpbmRvdz09PXdpbmRvdz93aW5kb3c6XCJvYmplY3RcIj09dHlwZW9mIHNlbGYmJnNlbGYuc2VsZj09PXNlbGY/c2VsZjpcIm9iamVjdFwiPT10eXBlb2YgZ2xvYmFsJiZnbG9iYWwuZ2xvYmFsPT09Z2xvYmFsP2dsb2JhbDp2b2lkIDAsYT1mLm5hdmlnYXRvciYmL01hY2ludG9zaC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSYmL0FwcGxlV2ViS2l0Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpJiYhL1NhZmFyaS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxnPWYuc2F2ZUFzfHwoXCJvYmplY3RcIiE9dHlwZW9mIHdpbmRvd3x8d2luZG93IT09Zj9mdW5jdGlvbigpe306XCJkb3dubG9hZFwiaW4gSFRNTEFuY2hvckVsZW1lbnQucHJvdG90eXBlJiYhYT9mdW5jdGlvbihiLGcsaCl7dmFyIGk9Zi5VUkx8fGYud2Via2l0VVJMLGo9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7Zz1nfHxiLm5hbWV8fFwiZG93bmxvYWRcIixqLmRvd25sb2FkPWcsai5yZWw9XCJub29wZW5lclwiLFwic3RyaW5nXCI9PXR5cGVvZiBiPyhqLmhyZWY9YixqLm9yaWdpbj09PWxvY2F0aW9uLm9yaWdpbj9lKGopOmQoai5ocmVmKT9jKGIsZyxoKTplKGosai50YXJnZXQ9XCJfYmxhbmtcIikpOihqLmhyZWY9aS5jcmVhdGVPYmplY3RVUkwoYiksc2V0VGltZW91dChmdW5jdGlvbigpe2kucmV2b2tlT2JqZWN0VVJMKGouaHJlZil9LDRFNCksc2V0VGltZW91dChmdW5jdGlvbigpe2Uoail9LDApKX06XCJtc1NhdmVPck9wZW5CbG9iXCJpbiBuYXZpZ2F0b3I/ZnVuY3Rpb24oZixnLGgpe2lmKGc9Z3x8Zi5uYW1lfHxcImRvd25sb2FkXCIsXCJzdHJpbmdcIiE9dHlwZW9mIGYpbmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IoYihmLGgpLGcpO2Vsc2UgaWYoZChmKSljKGYsZyxoKTtlbHNle3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2kuaHJlZj1mLGkudGFyZ2V0PVwiX2JsYW5rXCIsc2V0VGltZW91dChmdW5jdGlvbigpe2UoaSl9KX19OmZ1bmN0aW9uKGIsZCxlLGcpe2lmKGc9Z3x8b3BlbihcIlwiLFwiX2JsYW5rXCIpLGcmJihnLmRvY3VtZW50LnRpdGxlPWcuZG9jdW1lbnQuYm9keS5pbm5lclRleHQ9XCJkb3dubG9hZGluZy4uLlwiKSxcInN0cmluZ1wiPT10eXBlb2YgYilyZXR1cm4gYyhiLGQsZSk7dmFyIGg9XCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIj09PWIudHlwZSxpPS9jb25zdHJ1Y3Rvci9pLnRlc3QoZi5IVE1MRWxlbWVudCl8fGYuc2FmYXJpLGo9L0NyaU9TXFwvW1xcZF0rLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO2lmKChqfHxoJiZpfHxhKSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIEZpbGVSZWFkZXIpe3ZhciBrPW5ldyBGaWxlUmVhZGVyO2sub25sb2FkZW5kPWZ1bmN0aW9uKCl7dmFyIGE9ay5yZXN1bHQ7YT1qP2E6YS5yZXBsYWNlKC9eZGF0YTpbXjtdKjsvLFwiZGF0YTphdHRhY2htZW50L2ZpbGU7XCIpLGc/Zy5sb2NhdGlvbi5ocmVmPWE6bG9jYXRpb249YSxnPW51bGx9LGsucmVhZEFzRGF0YVVSTChiKX1lbHNle3ZhciBsPWYuVVJMfHxmLndlYmtpdFVSTCxtPWwuY3JlYXRlT2JqZWN0VVJMKGIpO2c/Zy5sb2NhdGlvbj1tOmxvY2F0aW9uLmhyZWY9bSxnPW51bGwsc2V0VGltZW91dChmdW5jdGlvbigpe2wucmV2b2tlT2JqZWN0VVJMKG0pfSw0RTQpfX0pO2Yuc2F2ZUFzPWcuc2F2ZUFzPWcsXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmKG1vZHVsZS5leHBvcnRzPWcpfSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZpbGVTYXZlci5taW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFwcFZlcnNpb24gPSB2b2lkIDA7XG5jbGFzcyBBcHBWZXJzaW9uIHtcbn1cbmV4cG9ydHMuQXBwVmVyc2lvbiA9IEFwcFZlcnNpb247XG5BcHBWZXJzaW9uLlZFUlNJT04gPSBcImM2MTE1NjJcIjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QYTUyOUNzdlRvT2Z4Q29udmVydGVyID0gdm9pZCAwO1xuY29uc3QgcGFfNTI5X2Nzdl90cmFuc2Zvcm1lcl8xID0gcmVxdWlyZShcIi4vcGEtNTI5LWNzdi10cmFuc2Zvcm1lclwiKTtcbmNvbnN0IG9meF9zZWN1cml0eV9zdG9ja3NfMSA9IHJlcXVpcmUoXCIuL29meC1zZWN1cml0eS1zdG9ja3NcIik7XG5jb25zdCBmaWxlX3NhdmVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImZpbGUtc2F2ZXJcIikpO1xuY29uc3QgYXBwX3ZlcnNpb25fMSA9IHJlcXVpcmUoXCIuL2FwcC12ZXJzaW9uXCIpO1xuY29uc29sZS5sb2coXCJBcHAgdmVyc2lvbjogXCIgKyBhcHBfdmVyc2lvbl8xLkFwcFZlcnNpb24uVkVSU0lPTik7XG5jbGFzcyBQYTUyOUNzdlRvT2Z4Q29udmVydGVyIHtcbiAgICBzdGF0aWMgY29udmVydENzdlRvT2Z4KGNzdikge1xuICAgICAgICBsZXQgY3JlYXRlRmFrZSA9IHRoaXMuY3JlYXRlRmFrZVRyYW5zYWN0aW9ucygpO1xuICAgICAgICBsZXQgY29uZmlnID0gcGFfNTI5X2Nzdl90cmFuc2Zvcm1lcl8xLlBhNTI5Q3N2VHJhbnNmb3JtZXIuY29udmVydENzdlRvT2Z4Q3JlYXRpb25EdG8oY3N2LCBjcmVhdGVGYWtlKTtcbiAgICAgICAgbGV0IG9meCA9IG9meF9zZWN1cml0eV9zdG9ja3NfMS5PZnhTZWN1cml0eUdlbmVyYXRvci5nZW5lcmF0ZU9meChjb25maWcpO1xuICAgICAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFtvZnhdLCB7IHR5cGU6IFwidGV4dC9wbGFpbjtjaGFyc2V0PXV0Zi04XCIgfSk7XG4gICAgICAgIGZpbGVfc2F2ZXJfMS5kZWZhdWx0LnNhdmVBcyhibG9iLCBcInBhLTUyOS1zdGF0ZW1lbnQub2Z4XCIpO1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlRmFrZVRyYW5zYWN0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYWtlLXRyYW5zYWN0aW9ucycpLmNoZWNrZWQ7XG4gICAgfVxufVxuZXhwb3J0cy5QYTUyOUNzdlRvT2Z4Q29udmVydGVyID0gUGE1MjlDc3ZUb09meENvbnZlcnRlcjtcbmNvbnN0IGRyb3BBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3AtYXJlYScpO1xuZHJvcEFyZWEuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRyb3BBcmVhLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZTBlMGUwJztcbn0pO1xuZHJvcEFyZWEuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgKCkgPT4ge1xuICAgIGRyb3BBcmVhLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZjlmOWY5Jztcbn0pO1xuZHJvcEFyZWEuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZHJvcEFyZWEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmOWY5ZjknO1xuICAgIGNvbnN0IGZpbGVzID0gZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzO1xuICAgIGlmIChmaWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBmaWxlc1swXTtcbiAgICAgICAgY29uc29sZS5sb2coYEZpbGUgbmFtZTogJHtmaWxlLm5hbWV9YCk7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgIFBhNTI5Q3N2VG9PZnhDb252ZXJ0ZXIuY29udmVydENzdlRvT2Z4KGNvbnRlbnQudG9TdHJpbmcoKSk7XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSByZWFkaW5nIHRoZSBmaWxlXCIsIGUpO1xuICAgICAgICB9O1xuICAgICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcbiAgICB9XG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5PZnhTZWN1cml0eUdlbmVyYXRvciA9IHZvaWQgMDtcbmNvbnN0IGRheWpzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImRheWpzXCIpKTtcbmNvbnN0IHgyanNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwieDJqc1wiKSk7XG4vLyBpbXBvcnQgeG1sRm9ybWF0IGZyb20gXCJ4bWwtZm9ybWF0dGVyXCJcbmNsYXNzIE9meFNlY3VyaXR5R2VuZXJhdG9yIHtcbiAgICBzdGF0aWMgZ2VuZXJhdGVPZngoY29uZmlnKSB7XG4gICAgICAgIHRoaXMuY2hlY2tUcmFuc2FjdGlvblNpZ25zKGNvbmZpZy5tdXR1YWxGdW5kVHJhbnNhY3Rpb25zKTtcbiAgICAgICAgdmFyIHgyanMgPSBuZXcgeDJqc18xLmRlZmF1bHQoeyBzZWxmQ2xvc2luZ0VsZW1lbnRzOiBmYWxzZSB9KTtcbiAgICAgICAgbGV0IGpzID0geDJqcy54bWwyanMoT0ZYX1NUT0NLX1RFTVBMQVRFKTtcbiAgICAgICAganMuT0ZYLklOVlNUTVRNU0dTUlNWMS5JTlZTVE1UVFJOUlMuSU5WU1RNVFJTLklOVkFDQ1RGUk9NLkFDQ1RJRCA9IGNvbmZpZy5hY2NvdW50SWQ7XG4gICAgICAgIGpzLk9GWC5JTlZTVE1UTVNHU1JTVjEuSU5WU1RNVFRSTlJTLklOVlNUTVRSUy5JTlZBQ0NURlJPTS5CUk9LRVJJRCA9IGNvbmZpZy5icm9rZXJJZDtcbiAgICAgICAganMuT0ZYLklOVlNUTVRNU0dTUlNWMS5JTlZTVE1UVFJOUlMuSU5WU1RNVFJTLkRUQVNPRiA9IHRoaXMuZm9ybWF0RGF0ZShjb25maWcudXBkYXRlRGF0ZVRpbWUpO1xuICAgICAgICBqcy5PRlguSU5WU1RNVE1TR1NSU1YxLklOVlNUTVRUUk5SUy5JTlZTVE1UUlMuSU5WVFJBTkxJU1QuRFRTVEFSVCA9IHRoaXMuZm9ybWF0RGF0ZShjb25maWcuc3RhcnREYXRlKTtcbiAgICAgICAganMuT0ZYLklOVlNUTVRNU0dTUlNWMS5JTlZTVE1UVFJOUlMuSU5WU1RNVFJTLklOVlRSQU5MSVNULkRURU5EID0gdGhpcy5mb3JtYXREYXRlKGNvbmZpZy5lbmREYXRlKTtcbiAgICAgICAgbGV0IGludmVzdG1lbnRUcmFuTGlzdCA9IGpzLk9GWC5JTlZTVE1UTVNHU1JTVjEuSU5WU1RNVFRSTlJTLklOVlNUTVRSUy5JTlZUUkFOTElTVDtcbiAgICAgICAgaW52ZXN0bWVudFRyYW5MaXN0LkJVWU1GID0gW107XG4gICAgICAgIGludmVzdG1lbnRUcmFuTGlzdC5TRUxMTUYgPSBbXTtcbiAgICAgICAgY29uZmlnLm11dHVhbEZ1bmRUcmFuc2FjdGlvbnMuZm9yRWFjaChzaW5nbGVUcmFuID0+IHtcbiAgICAgICAgICAgIGlmIChzaW5nbGVUcmFuLnNoYXJlcyA+PSAwKVxuICAgICAgICAgICAgICAgIGludmVzdG1lbnRUcmFuTGlzdC5CVVlNRi5wdXNoKHRoaXMuY3JlYXRlQnV5VHJhbnNhY3Rpb24oc2luZ2xlVHJhbikpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGludmVzdG1lbnRUcmFuTGlzdC5TRUxMTUYucHVzaCh0aGlzLmNyZWF0ZVNlbGxUcmFuc2FjdGlvbihzaW5nbGVUcmFuKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBqcy5PRlguU0VDTElTVE1TR1NSU1YxLlNFQ0xJU1QuTUZJTkZPID0gY29uZmlnLnNlY3VyaXR5UHJpY2VJbmZvLm1hcChzaW5nbGVTZWN1cml0eSA9PiB7XG4gICAgICAgICAgICBsZXQgbWZJbmZvID0ge1xuICAgICAgICAgICAgICAgIFNFQ0lORk86IHRoaXMuY29udmVydFNlY3VyaXR5SW5mbyhzaW5nbGVTZWN1cml0eSksXG4gICAgICAgICAgICAgICAgTUZUWVBFOiBcIk9QRU5FTkRcIixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gbWZJbmZvO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGludmVzdG1lbnRUcmFuTGlzdC5CVVlNRi5sZW5ndGggPT09IDApXG4gICAgICAgICAgICBkZWxldGUgaW52ZXN0bWVudFRyYW5MaXN0LkJVWU1GO1xuICAgICAgICBpZiAoaW52ZXN0bWVudFRyYW5MaXN0LlNFTExNRi5sZW5ndGggPT09IDApXG4gICAgICAgICAgICBkZWxldGUgaW52ZXN0bWVudFRyYW5MaXN0LlNFTExNRjtcbiAgICAgICAgaWYgKGpzLk9GWC5TRUNMSVNUTVNHU1JTVjEuU0VDTElTVC5NRklORk8ubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgZGVsZXRlIGpzLk9GWC5TRUNMSVNUTVNHU1JTVjEuU0VDTElTVC5NRklORk87XG4gICAgICAgIHZhciB4bWxCb2R5ID0geDJqcy5qczJ4bWwoanMpO1xuICAgICAgICB2YXIgZmlsZVRleHQgPSBPRlhfU1RPQ0tfSEVBREVSICsgeG1sQm9keTtcbiAgICAgICAgZmlsZVRleHQgPSBmaWxlVGV4dC5yZXBsYWNlKC8mI3gyNzsvZywgXCInXCIpO1xuICAgICAgICBmaWxlVGV4dCA9IGZpbGVUZXh0LnJlcGxhY2UoLyZhcG9zOy9nLCBcIidcIik7XG4gICAgICAgIGZpbGVUZXh0ID0gZmlsZVRleHQucmVwbGFjZSgvJmFtcDsvZywgXCImXCIpO1xuICAgICAgICBmaWxlVGV4dCA9IGZpbGVUZXh0LnJlcGxhY2UoLyZxdW90Oy9nLCAnXCInKTtcbiAgICAgICAgcmV0dXJuIGZpbGVUZXh0O1xuICAgICAgICAvLyByZXR1cm4geG1sRm9ybWF0KGZpbGVUZXh0LCB7IGluZGVudGF0aW9uOiBcIiAgXCIgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBjaGVja1RyYW5zYWN0aW9uU2lnbnMobXV0dWFsRnVuZFRyYW5zYWN0aW9ucykge1xuICAgICAgICBsZXQgaW5jb3JyZWN0U2lnbiA9IG11dHVhbEZ1bmRUcmFuc2FjdGlvbnMuZmluZChzaW5nbGUgPT4gc2luZ2xlLmRvbGxhclRvdGFsICogc2luZ2xlLnNoYXJlcyA+IDApO1xuICAgICAgICBpZiAoaW5jb3JyZWN0U2lnbilcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkluY29ycmVjdCBzaWduIG9uIHNlY3VyaXR5IHRyYW5zYWN0aW9uLiAgQnV5IHRyYW5zYWN0aW9ucyBzaG91bGQgaGF2ZSBwb3NpdGl2ZSBzaGFyZXMsIG5lZ2F0aXZlIGRvbGxhcnMuIFNhbGVzIGFyZSBvcHBvc2l0ZS5cIik7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGVCdXlUcmFuc2FjdGlvbihzaW5nbGVUcmFuKSB7XG4gICAgICAgIGxldCBidXkgPSB7XG4gICAgICAgICAgICBJTlZCVVk6IHRoaXMuY29udmVydFRyYW5zYWN0aW9uKHNpbmdsZVRyYW4pLFxuICAgICAgICAgICAgQlVZVFlQRTogXCJCVVlcIixcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGJ1eTtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZVNlbGxUcmFuc2FjdGlvbihzaW5nbGVUcmFuKSB7XG4gICAgICAgIGxldCBzZWxsID0ge1xuICAgICAgICAgICAgSU5WU0VMTDogdGhpcy5jb252ZXJ0VHJhbnNhY3Rpb24oc2luZ2xlVHJhbiksXG4gICAgICAgICAgICBTRUxMVFlQRTogXCJTRUxMXCIsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBzZWxsO1xuICAgIH1cbiAgICBzdGF0aWMgY29udmVydFNlY3VyaXR5SW5mbyhjcmVhdGlvbkR0bykge1xuICAgICAgICBsZXQgb2Z4SW5mbyA9IHtcbiAgICAgICAgICAgIEZJSUQ6IGNyZWF0aW9uRHRvLmZpaWQsXG4gICAgICAgICAgICBTRUNJRDoge1xuICAgICAgICAgICAgICAgIFVOSVFVRUlEOiBjcmVhdGlvbkR0by5zZWN1cml0eVVpZCxcbiAgICAgICAgICAgICAgICBVTklRVUVJRFRZUEU6IFwiRlVORF9OQU1FXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgU0VDTkFNRTogY3JlYXRpb25EdG8uc2VjdXJpdHlOYW1lLFxuICAgICAgICAgICAgVElDS0VSOiBjcmVhdGlvbkR0by50aWNrZXIsXG4gICAgICAgICAgICBVTklUUFJJQ0U6IGNyZWF0aW9uRHRvLnByaWNlUGVyU2hhcmUsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBvZnhJbmZvO1xuICAgIH1cbiAgICBzdGF0aWMgY29udmVydFRyYW5zYWN0aW9uKGNvbmZpZykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgSU5WVFJBTjoge1xuICAgICAgICAgICAgICAgIERUU0VUVExFOiB0aGlzLmZvcm1hdERhdGUoY29uZmlnLnRyYWRlRGF0ZSksXG4gICAgICAgICAgICAgICAgRFRUUkFERTogdGhpcy5mb3JtYXREYXRlKGNvbmZpZy50cmFkZURhdGUpLFxuICAgICAgICAgICAgICAgIEZJVElEOiBjb25maWcudHJhbnNhY3Rpb25JZCxcbiAgICAgICAgICAgICAgICBNRU1POiBjb25maWcubWVtbyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBTRUNJRDoge1xuICAgICAgICAgICAgICAgIFVOSVFVRUlEOiBjb25maWcuc2VjdXJpdHlJZCxcbiAgICAgICAgICAgICAgICBVTklRVUVJRFRZUEU6IFwiRlVORF9OQU1FXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgU1VCQUNDVEZVTkQ6IFwiQ0FTSFwiLFxuICAgICAgICAgICAgU1VCQUNDVFNFQzogXCJDQVNIXCIsXG4gICAgICAgICAgICBUT1RBTDogY29uZmlnLmRvbGxhclRvdGFsLFxuICAgICAgICAgICAgVU5JVFBSSUNFOiBjb25maWcucHJpY2VQZXJTaGFyZSxcbiAgICAgICAgICAgIFVOSVRTOiBjb25maWcuc2hhcmVzLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBzdGF0aWMgZm9ybWF0RGF0ZShkYXRlKSB7XG4gICAgICAgIHJldHVybiAoMCwgZGF5anNfMS5kZWZhdWx0KShkYXRlKS5mb3JtYXQoXCJZWVlZTU1ERFwiKTtcbiAgICB9XG59XG5leHBvcnRzLk9meFNlY3VyaXR5R2VuZXJhdG9yID0gT2Z4U2VjdXJpdHlHZW5lcmF0b3I7XG5jb25zdCBPRlhfU1RPQ0tfSEVBREVSID0gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PlxuPD9PRlggT0ZYSEVBREVSPVwiMjAwXCIgVkVSU0lPTj1cIjIyMFwiIFNFQ1VSSVRZPVwiTk9ORVwiIE9MREZJTEVVSUQ9XCJOT05FXCIgTkVXRklMRVVJRD1cIk5PTkVcIj8+XG5gO1xuY29uc3QgT0ZYX1NUT0NLX1RFTVBMQVRFID0gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PlxuPD9PRlggT0ZYSEVBREVSPVwiMjAwXCIgVkVSU0lPTj1cIjIyMFwiIFNFQ1VSSVRZPVwiTk9ORVwiIE9MREZJTEVVSUQ9XCJOT05FXCIgTkVXRklMRVVJRD1cIk5PTkVcIj8+XG48T0ZYPlxuICA8SU5WU1RNVE1TR1NSU1YxPlxuICAgIDxJTlZTVE1UVFJOUlM+XG4gICAgICA8VFJOVUlEPjA8L1RSTlVJRD5cbiAgICAgIDxTVEFUVVM+XG4gICAgICAgIDxDT0RFPjA8L0NPREU+XG4gICAgICAgIDxTRVZFUklUWT5JTkZPPC9TRVZFUklUWT5cbiAgICAgIDwvU1RBVFVTPlxuICAgICAgPElOVlNUTVRSUz5cbiAgICAgICAgPERUQVNPRj48L0RUQVNPRj5cbiAgICAgICAgPENVUkRFRj5VU0Q8L0NVUkRFRj5cbiAgICAgICAgPElOVkFDQ1RGUk9NPlxuICAgICAgICAgIDxCUk9LRVJJRD48L0JST0tFUklEPlxuICAgICAgICAgIDxBQ0NUSUQ+PC9BQ0NUSUQ+XG4gICAgICAgIDwvSU5WQUNDVEZST00+XG4gICAgICAgIDxJTlZUUkFOTElTVD5cbiAgICAgICAgICA8RFRTVEFSVD48L0RUU1RBUlQ+XG4gICAgICAgICAgPERURU5EPjwvRFRFTkQ+XG4gICAgICAgIDwvSU5WVFJBTkxJU1Q+XG4gICAgICA8L0lOVlNUTVRSUz5cbiAgICA8L0lOVlNUTVRUUk5SUz5cbiAgPC9JTlZTVE1UTVNHU1JTVjE+XG4gIDxTRUNMSVNUTVNHU1JTVjE+XG4gICAgPFNFQ0xJU1Q+XG4gICAgPC9TRUNMSVNUPlxuICA8L1NFQ0xJU1RNU0dTUlNWMT5cbjwvT0ZYPlxuYDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QYTUyOUNzdlRyYW5zZm9ybWVyID0gdm9pZCAwO1xuY29uc3Qgc3luY18xID0gcmVxdWlyZShcImNzdi1wYXJzZS9icm93c2VyL2VzbS9zeW5jXCIpO1xuY29uc3QgZGF5anNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZGF5anNcIikpO1xuY2xhc3MgUGE1MjlDc3ZUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY3N2UmF3XG4gICAgICogQHBhcmFtIGNyZWF0ZUZha2VcbiAgICAgKiBmb3IgZWFjaCBob2xkaW5nLCBjcmVhdGUgYW4gZXh0cmEgYnV5IGFuZCBvZmZzZXR0aW5nIHNhbGUgYXQgdGhlIGN1cnJlbnRcbiAgICAgKiBtYXJrZXQgcHJpY2VzLiAgdGhpcyBhbGxvd3Mgc29tZSBwZXJzb25hbCBmaW5hbmNlcyBzb2Z0d2FyZSBwcm9ncmFtcyB0byB1cGRhdGVcbiAgICAgKiB0aGVpciBjdXJyZW50IHByaWNlcyBmb3Igc2VjdXJpdGllcyB3aGljaCBhcmVuJ3QgcHVibGljbHkgbGlzdGVkLlxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgc3RhdGljIGNvbnZlcnRDc3ZUb09meENyZWF0aW9uRHRvKGNzdlJhdywgY3JlYXRlRmFrZSkge1xuICAgICAgICBsZXQgc3BsaXRzID0gY3N2UmF3LnJlcGxhY2UoL1xcbnszLH0vZywgXCJcXG5cXG5cIikuc3BsaXQoXCJcXG5cXG5cIik7XG4gICAgICAgIGxldCBob2xkaW5nc1NlY3Rpb25PZkNzdiA9IHNwbGl0c1swXTtcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9uc1NlY3Rpb25PZkNzdiA9IHNwbGl0c1sxXTtcbiAgICAgICAgbGV0IGhvbGRpbmdzID0gdGhpcy5nZXRDc3ZIb2xkaW5ncyhob2xkaW5nc1NlY3Rpb25PZkNzdik7XG4gICAgICAgIGxldCB0cmFuc2FjdGlvbnMgPSB0aGlzLmdldFRyYW5zYWN0aW9ucyh0cmFuc2FjdGlvbnNTZWN0aW9uT2ZDc3YpO1xuICAgICAgICBsZXQgZHRvVHJhbnNhY3Rpb25zID0gW107XG4gICAgICAgIHRyYW5zYWN0aW9ucy5mb3JFYWNoKHNpbmdsZVRyYW4gPT4ge1xuICAgICAgICAgICAgZHRvVHJhbnNhY3Rpb25zLnB1c2godGhpcy5jcmVhdGVUcmFuc2FjdGlvbnMoc2luZ2xlVHJhbikpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNyZWF0ZUZha2UpIHtcbiAgICAgICAgICAgIGhvbGRpbmdzLmZvckVhY2goc2luZ2xlSG9sZGluZyA9PiB7XG4gICAgICAgICAgICAgICAgZHRvVHJhbnNhY3Rpb25zLnB1c2godGhpcy5jcmVhdGVGYWtlVHJhZGUoc2luZ2xlSG9sZGluZywgdHJ1ZSkpO1xuICAgICAgICAgICAgICAgIGR0b1RyYW5zYWN0aW9ucy5wdXNoKHRoaXMuY3JlYXRlRmFrZVRyYWRlKHNpbmdsZUhvbGRpbmcsIGZhbHNlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2VjdXJpdHlJbmZvID0gaG9sZGluZ3MubWFwKHNpbmdsZUhvbGRpbmcgPT4ge1xuICAgICAgICAgICAgbGV0IGhvbGRpbmcgPSB7XG4gICAgICAgICAgICAgICAgZmlpZDogXCJQQTUyOVwiLFxuICAgICAgICAgICAgICAgIHNlY3VyaXR5VWlkOiB0aGlzLmdldFNlY3VyaXR5SWRGcm9tSG9sZGluZyhzaW5nbGVIb2xkaW5nKSxcbiAgICAgICAgICAgICAgICBzZWN1cml0eU5hbWU6IFwiUEE1MjkgLSBcIiArIHNpbmdsZUhvbGRpbmcuZnVuZE5hbWUsXG4gICAgICAgICAgICAgICAgdGlja2VyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHByaWNlUGVyU2hhcmU6IHNpbmdsZUhvbGRpbmcucHJpY2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGhvbGRpbmc7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgYWNjb3VudE51bWJlcnMgPSB0aGlzLmdldEFjY291bnROdW1iZXJzKGhvbGRpbmdzLCB0cmFuc2FjdGlvbnMpO1xuICAgICAgICBpZiAoYWNjb3VudE51bWJlcnMuc2l6ZSAhPT0gMSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkluY29ycmVjdCBudW1iZXIgb2YgYWNjb3VudHMgbGlzdGVkLiAxIGFuZCBvbmx5IDEgYWNjb3VudCBudW1iZXIgbXVzdCBiZSBsaXN0ZWQuXCIpO1xuICAgICAgICBsZXQgW2FjY291bnROdW1iZXJdID0gYWNjb3VudE51bWJlcnM7XG4gICAgICAgIGxldCBzdGFydEVuZERhdGVzID0gdGhpcy5nZXRTdGFydEVuZERhdGVzKGR0b1RyYW5zYWN0aW9ucyk7XG4gICAgICAgIGxldCBjb25maWcgPSB7XG4gICAgICAgICAgICB1cGRhdGVEYXRlVGltZTogbmV3IERhdGUoKSxcbiAgICAgICAgICAgIGFjY291bnRJZDogYWNjb3VudE51bWJlcixcbiAgICAgICAgICAgIGJyb2tlcklkOiBcIlBBNTI5XCIsXG4gICAgICAgICAgICBzdGFydERhdGU6IHN0YXJ0RW5kRGF0ZXNbMF0sXG4gICAgICAgICAgICBlbmREYXRlOiBzdGFydEVuZERhdGVzWzFdLFxuICAgICAgICAgICAgbXV0dWFsRnVuZFRyYW5zYWN0aW9uczogZHRvVHJhbnNhY3Rpb25zLFxuICAgICAgICAgICAgc2VjdXJpdHlQcmljZUluZm86IHNlY3VyaXR5SW5mbyxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZVRyYW5zYWN0aW9ucyhzaW5nbGVUcmFuKSB7XG4gICAgICAgIGxldCBkdG8gPSB7XG4gICAgICAgICAgICB0cmFkZURhdGU6IHNpbmdsZVRyYW4udHJhZGVEYXRlLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb25JZDogYCR7KDAsIGRheWpzXzEuZGVmYXVsdCkoc2luZ2xlVHJhbi50cmFkZURhdGUpLmZvcm1hdChcIllZWVlNTUREXCIpfSR7c2luZ2xlVHJhbi5pbnZlc3RtZW50TmFtZX1gLnJlcGxhY2UoLyAvZywgXCJcIiksXG4gICAgICAgICAgICBtZW1vOiBgJHtzaW5nbGVUcmFuLnRyYW5zYWN0aW9uVHlwZX0gLSAke3NpbmdsZVRyYW4uaW52ZXN0bWVudE5hbWV9YCxcbiAgICAgICAgICAgIHNlY3VyaXR5SWQ6IHRoaXMuZ2V0U2VjdXJpdHlJZEZyb21UcmFuKHNpbmdsZVRyYW4pLFxuICAgICAgICAgICAgZG9sbGFyVG90YWw6IC1zaW5nbGVUcmFuLmdyb3NzQW1vdW50LFxuICAgICAgICAgICAgcHJpY2VQZXJTaGFyZTogc2luZ2xlVHJhbi5zaGFyZVByaWNlLFxuICAgICAgICAgICAgc2hhcmVzOiBzaW5nbGVUcmFuLnNoYXJlcyxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGR0bztcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZUZha2VUcmFkZShob2xkaW5nLCBidXkpIHtcbiAgICAgICAgbGV0IG11bHRpcGxpZXIgPSBidXkgPyAxIDogLTE7XG4gICAgICAgIGxldCB0cmFkZVR5cGUgPSBidXkgPyBcImJ1eVwiIDogXCJzZWxsXCI7XG4gICAgICAgIGxldCB0cmFuID0ge1xuICAgICAgICAgICAgdHJhZGVEYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb25JZDogYGZha2VfdHJhZGVfJHt0cmFkZVR5cGV9XyR7KDAsIGRheWpzXzEuZGVmYXVsdCkobmV3IERhdGUpLmZvcm1hdChcIllZWVlNTUREXCIpfSR7aG9sZGluZy5mdW5kTmFtZX1gLnJlcGxhY2UoLyAvZywgXCJcIiksXG4gICAgICAgICAgICBtZW1vOiBgRmFrZSAke3RyYWRlVHlwZX0gdHJhbnNhY3Rpb24gJHtob2xkaW5nLmZ1bmROYW1lfSBjdXJyZW50IHByaWNlICR7aG9sZGluZy5wcmljZX1gLFxuICAgICAgICAgICAgc2VjdXJpdHlJZDogdGhpcy5nZXRTZWN1cml0eUlkRnJvbUhvbGRpbmcoaG9sZGluZyksXG4gICAgICAgICAgICBkb2xsYXJUb3RhbDogLTEgKiBob2xkaW5nLnByaWNlICogbXVsdGlwbGllcixcbiAgICAgICAgICAgIHByaWNlUGVyU2hhcmU6IGhvbGRpbmcucHJpY2UsXG4gICAgICAgICAgICBzaGFyZXM6IDEgKiBtdWx0aXBsaWVyLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdHJhbjtcbiAgICB9XG4gICAgc3RhdGljIGdldFNlY3VyaXR5SWRGcm9tVHJhbihzaW5nbGVUcmFuKSB7XG4gICAgICAgIHJldHVybiBcIlBBNTI5IFwiICsgc2luZ2xlVHJhbi5pbnZlc3RtZW50TmFtZTtcbiAgICB9XG4gICAgc3RhdGljIGdldFNlY3VyaXR5SWRGcm9tSG9sZGluZyhzaW5nbGVIb2xkaW5nKSB7XG4gICAgICAgIHJldHVybiBcIlBBNTI5IFwiICsgc2luZ2xlSG9sZGluZy5mdW5kTmFtZTtcbiAgICB9XG4gICAgc3RhdGljIGdldEFjY291bnROdW1iZXJzKGhvbGRpbmdzLCB0cmFuc2FjdGlvbnMpIHtcbiAgICAgICAgbGV0IGFjY291bnROdW1iZXJzID0gbmV3IFNldCgpO1xuICAgICAgICBob2xkaW5ncy5mb3JFYWNoKHNpbmdsZSA9PiB7XG4gICAgICAgICAgICBpZiAoc2luZ2xlLmFjY291bnROdW1iZXIpXG4gICAgICAgICAgICAgICAgYWNjb3VudE51bWJlcnMuYWRkKHNpbmdsZS5hY2NvdW50TnVtYmVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRyYW5zYWN0aW9ucy5mb3JFYWNoKHNpbmdsZSA9PiB7XG4gICAgICAgICAgICBpZiAoc2luZ2xlLmFjY291bnROdW1iZXIpXG4gICAgICAgICAgICAgICAgYWNjb3VudE51bWJlcnMuYWRkKHNpbmdsZS5hY2NvdW50TnVtYmVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhY2NvdW50TnVtYmVycztcbiAgICB9XG4gICAgc3RhdGljIGdldFN0YXJ0RW5kRGF0ZXModHJhbnNhY3Rpb25zKSB7XG4gICAgICAgIGlmICh0cmFuc2FjdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIFt0b2RheSwgdG9kYXldO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzdGFydDtcbiAgICAgICAgbGV0IGVuZDtcbiAgICAgICAgdHJhbnNhY3Rpb25zLmZvckVhY2goc2luZ2xlID0+IHtcbiAgICAgICAgICAgIGlmICghc3RhcnQgfHwgc3RhcnQgPiBzaW5nbGUudHJhZGVEYXRlKVxuICAgICAgICAgICAgICAgIHN0YXJ0ID0gc2luZ2xlLnRyYWRlRGF0ZTtcbiAgICAgICAgICAgIGlmICghZW5kIHx8IGVuZCA8IHNpbmdsZS50cmFkZURhdGUpXG4gICAgICAgICAgICAgICAgZW5kID0gc2luZ2xlLnRyYWRlRGF0ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBbc3RhcnQsIGVuZF07XG4gICAgfVxuICAgIHN0YXRpYyBnZXRUcmFuc2FjdGlvbnModHJhbnNhY3Rpb25zU2VjdGlvbk9mQ3N2KSB7XG4gICAgICAgIGlmICghKHRyYW5zYWN0aW9uc1NlY3Rpb25PZkNzdiA9PT0gbnVsbCB8fCB0cmFuc2FjdGlvbnNTZWN0aW9uT2ZDc3YgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRyYW5zYWN0aW9uc1NlY3Rpb25PZkNzdi50cmltKCkpKVxuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICBsZXQgdHJhbnNhY3Rpb25zQW5kSGVhZGVyID0gKDAsIHN5bmNfMS5wYXJzZSkodHJhbnNhY3Rpb25zU2VjdGlvbk9mQ3N2KTtcbiAgICAgICAgaWYgKHRyYW5zYWN0aW9uc0FuZEhlYWRlci5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIHRoaXMuY2hlY2tUcmFuc2FjdGlvbkNvbHVtbk5hbWVzKHRyYW5zYWN0aW9uc0FuZEhlYWRlclswXSk7XG4gICAgICAgIGxldCB0cmFuc2FjdGlvbnNSb3dzID0gdHJhbnNhY3Rpb25zQW5kSGVhZGVyLnNsaWNlKDEpOyAvLyByZW1vdmUgZmlyc3Qgcm93IHdoaWNoIGlzIGp1c3QgaGVhZGVyc1xuICAgICAgICByZXR1cm4gdGhpcy5jb252ZXJ0Q3N2Um93c1RvVHJhbnNhY3Rpb25zKHRyYW5zYWN0aW9uc1Jvd3MpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0Q3N2SG9sZGluZ3MoaG9sZGluZ3NTZWN0aW9uT2ZDc3YpIHtcbiAgICAgICAgbGV0IGhvbGRpbmdzQW5kSGVhZGVycyA9ICgwLCBzeW5jXzEucGFyc2UpKGhvbGRpbmdzU2VjdGlvbk9mQ3N2KTtcbiAgICAgICAgdGhpcy5jaGVja0hvbGRpbmdDb2x1bW5OYW1lcyhob2xkaW5nc0FuZEhlYWRlcnNbMF0pO1xuICAgICAgICBsZXQgaG9sZGluZ1Jvd3MgPSBob2xkaW5nc0FuZEhlYWRlcnMuc2xpY2UoMSk7IC8vIHJlbW92ZSBmaXJzdCByb3cgd2hpY2ggaXMganVzdCBoZWFkZXJzXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRDc3ZSb3dzVG9Ib2xkaW5ncyhob2xkaW5nUm93cyk7XG4gICAgfVxuICAgIHN0YXRpYyBjb252ZXJ0Q3N2Um93c1RvSG9sZGluZ3Mocm93cykge1xuICAgICAgICByZXR1cm4gcm93cy5tYXAoc2luZ2xlUm93ID0+IHtcbiAgICAgICAgICAgIGxldCBob2xkaW5ncyA9IHtcbiAgICAgICAgICAgICAgICBhY2NvdW50TnVtYmVyOiBzaW5nbGVSb3dbUGE1MjlIb2xkaW5nQ29sdW1ucy5GVU5EX0FDQ09VTlRfTlVNQkVSXSxcbiAgICAgICAgICAgICAgICBmdW5kTmFtZTogc2luZ2xlUm93W1BhNTI5SG9sZGluZ0NvbHVtbnMuRlVORF9OQU1FXSxcbiAgICAgICAgICAgICAgICBwcmljZTogdGhpcy5jb252ZXJ0RG9sbGFyU3RyaW5nVG9OdW1iZXIoc2luZ2xlUm93W1BhNTI5SG9sZGluZ0NvbHVtbnMuUFJJQ0VdKSxcbiAgICAgICAgICAgICAgICBzaGFyZXM6ICtzaW5nbGVSb3dbUGE1MjlIb2xkaW5nQ29sdW1ucy5TSEFSRVNdLFxuICAgICAgICAgICAgICAgIHRvdGFsVmFsdWU6IHRoaXMuY29udmVydERvbGxhclN0cmluZ1RvTnVtYmVyKHNpbmdsZVJvd1tQYTUyOUhvbGRpbmdDb2x1bW5zLlRPVEFMX1ZBTFVFXSksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGhvbGRpbmdzO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGNvbnZlcnRDc3ZSb3dzVG9UcmFuc2FjdGlvbnMocm93cykge1xuICAgICAgICByZXR1cm4gcm93cy5tYXAoc2luZ2xlUm93ID0+IHtcbiAgICAgICAgICAgIGxldCB0cmFuID0ge1xuICAgICAgICAgICAgICAgIGFjY291bnROdW1iZXI6IHNpbmdsZVJvd1tQYTUyOVRyYW5zYWN0aW9uQ29sdW1ucy5BQ0NPVU5UX05VTUJFUl0sXG4gICAgICAgICAgICAgICAgdHJhZGVEYXRlOiB0aGlzLmNvbnZlcnRNZHlUb0RhdGUoc2luZ2xlUm93W1BhNTI5VHJhbnNhY3Rpb25Db2x1bW5zLlRSQURFX0RBVEVdKSxcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6IHNpbmdsZVJvd1tQYTUyOVRyYW5zYWN0aW9uQ29sdW1ucy5UUkFOU0FDVElPTl9UWVBFXSxcbiAgICAgICAgICAgICAgICBpbnZlc3RtZW50TmFtZTogc2luZ2xlUm93W1BhNTI5VHJhbnNhY3Rpb25Db2x1bW5zLklOVkVTVE1FTlRfTkFNRV0sXG4gICAgICAgICAgICAgICAgc2hhcmVQcmljZTogdGhpcy5jb252ZXJ0RG9sbGFyU3RyaW5nVG9OdW1iZXIoc2luZ2xlUm93W1BhNTI5VHJhbnNhY3Rpb25Db2x1bW5zLlNIQVJFX1BSSUNFXSksXG4gICAgICAgICAgICAgICAgc2hhcmVzOiArc2luZ2xlUm93W1BhNTI5VHJhbnNhY3Rpb25Db2x1bW5zLlNIQVJFU10sXG4gICAgICAgICAgICAgICAgZ3Jvc3NBbW91bnQ6IHRoaXMuY29udmVydERvbGxhclN0cmluZ1RvTnVtYmVyKHNpbmdsZVJvd1tQYTUyOVRyYW5zYWN0aW9uQ29sdW1ucy5HUk9TU19BTU9VTlRdKSxcbiAgICAgICAgICAgICAgICBuZXRBbW91bnQ6IHRoaXMuY29udmVydERvbGxhclN0cmluZ1RvTnVtYmVyKHNpbmdsZVJvd1tQYTUyOVRyYW5zYWN0aW9uQ29sdW1ucy5ORVRfQU1PVU5UXSksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHRyYW47XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgY29udmVydE1keVRvRGF0ZShkYXRlU3RyaW5nKSB7XG4gICAgICAgIHJldHVybiAoMCwgZGF5anNfMS5kZWZhdWx0KShkYXRlU3RyaW5nLCBcIk1NL0REL1lZWVlcIikudG9EYXRlKCk7XG4gICAgfVxuICAgIHN0YXRpYyBjb252ZXJ0RG9sbGFyU3RyaW5nVG9OdW1iZXIoZG9sbGFyU3RyaW5nKSB7XG4gICAgICAgIHJldHVybiArZG9sbGFyU3RyaW5nLnJlcGxhY2UoL1xcJC9nLCAnJyk7XG4gICAgfVxuICAgIHN0YXRpYyBjaGVja0hvbGRpbmdDb2x1bW5OYW1lcyhjb2x1bW5zKSB7XG4gICAgICAgIHRoaXMuY2hlY2tDb2x1bW4oY29sdW1ucywgUGE1MjlIb2xkaW5nQ29sdW1ucy5GVU5EX0FDQ09VTlRfTlVNQkVSLCBcIkZ1bmQgQWNjb3VudCBOdW1iZXJcIik7XG4gICAgICAgIHRoaXMuY2hlY2tDb2x1bW4oY29sdW1ucywgUGE1MjlIb2xkaW5nQ29sdW1ucy5GVU5EX05BTUUsIFwiRnVuZCBOYW1lXCIpO1xuICAgICAgICB0aGlzLmNoZWNrQ29sdW1uKGNvbHVtbnMsIFBhNTI5SG9sZGluZ0NvbHVtbnMuUFJJQ0UsIFwiUHJpY2VcIik7XG4gICAgICAgIHRoaXMuY2hlY2tDb2x1bW4oY29sdW1ucywgUGE1MjlIb2xkaW5nQ29sdW1ucy5TSEFSRVMsIFwiU2hhcmVzXCIpO1xuICAgICAgICB0aGlzLmNoZWNrQ29sdW1uKGNvbHVtbnMsIFBhNTI5SG9sZGluZ0NvbHVtbnMuVE9UQUxfVkFMVUUsIFwiVG90YWwgVmFsdWVcIik7XG4gICAgfVxuICAgIHN0YXRpYyBjaGVja1RyYW5zYWN0aW9uQ29sdW1uTmFtZXMoY29sdW1ucykge1xuICAgICAgICB0aGlzLmNoZWNrQ29sdW1uKGNvbHVtbnMsIFBhNTI5VHJhbnNhY3Rpb25Db2x1bW5zLkFDQ09VTlRfTlVNQkVSLCBcIkFjY291bnQgTnVtYmVyXCIpO1xuICAgICAgICB0aGlzLmNoZWNrQ29sdW1uKGNvbHVtbnMsIFBhNTI5VHJhbnNhY3Rpb25Db2x1bW5zLlRSQURFX0RBVEUsIFwiVHJhZGUgRGF0ZVwiKTtcbiAgICAgICAgdGhpcy5jaGVja0NvbHVtbihjb2x1bW5zLCBQYTUyOVRyYW5zYWN0aW9uQ29sdW1ucy5QUk9DRVNTX0RBVEUsIFwiUHJvY2VzcyBEYXRlXCIpO1xuICAgICAgICB0aGlzLmNoZWNrQ29sdW1uKGNvbHVtbnMsIFBhNTI5VHJhbnNhY3Rpb25Db2x1bW5zLlRSQU5TQUNUSU9OX1RZUEUsIFwiVHJhbnNhY3Rpb24gVHlwZVwiKTtcbiAgICAgICAgdGhpcy5jaGVja0NvbHVtbihjb2x1bW5zLCBQYTUyOVRyYW5zYWN0aW9uQ29sdW1ucy5UUkFOU0FDVElPTl9ERVNDUklQVElPTiwgXCJUcmFuc2FjdGlvbiBEZXNjcmlwdGlvblwiKTtcbiAgICAgICAgdGhpcy5jaGVja0NvbHVtbihjb2x1bW5zLCBQYTUyOVRyYW5zYWN0aW9uQ29sdW1ucy5JTlZFU1RNRU5UX05BTUUsIFwiSW52ZXN0bWVudCBOYW1lXCIpO1xuICAgICAgICB0aGlzLmNoZWNrQ29sdW1uKGNvbHVtbnMsIFBhNTI5VHJhbnNhY3Rpb25Db2x1bW5zLlNIQVJFX1BSSUNFLCBcIlNoYXJlIFByaWNlXCIpO1xuICAgICAgICB0aGlzLmNoZWNrQ29sdW1uKGNvbHVtbnMsIFBhNTI5VHJhbnNhY3Rpb25Db2x1bW5zLlNIQVJFUywgXCJTaGFyZXNcIik7XG4gICAgICAgIHRoaXMuY2hlY2tDb2x1bW4oY29sdW1ucywgUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnMuR1JPU1NfQU1PVU5ULCBcIkdyb3NzIEFtb3VudFwiKTtcbiAgICAgICAgdGhpcy5jaGVja0NvbHVtbihjb2x1bW5zLCBQYTUyOVRyYW5zYWN0aW9uQ29sdW1ucy5ORVRfQU1PVU5ULCBcIk5ldCBBbW91bnRcIik7XG4gICAgfVxuICAgIHN0YXRpYyBjaGVja0NvbHVtbihjb2x1bW5zLCBjb2x1bW5OdW1iZXIsIGV4cGVjdGVkKSB7XG4gICAgICAgIGlmIChjb2x1bW5zW2NvbHVtbk51bWJlcl0gIT09IGV4cGVjdGVkKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBjb2x1bW4gJHtjb2x1bW5OdW1iZXIgKyAxfSB0byBiZSBcIiR7ZXhwZWN0ZWR9XCIsIGJ1dCBmb3VuZCBcIiR7Y29sdW1uc1tjb2x1bW5OdW1iZXJdfVwiYCk7XG4gICAgfVxufVxuZXhwb3J0cy5QYTUyOUNzdlRyYW5zZm9ybWVyID0gUGE1MjlDc3ZUcmFuc2Zvcm1lcjtcbnZhciBQYTUyOVRyYW5zYWN0aW9uQ29sdW1ucztcbihmdW5jdGlvbiAoUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnMpIHtcbiAgICBQYTUyOVRyYW5zYWN0aW9uQ29sdW1uc1tQYTUyOVRyYW5zYWN0aW9uQ29sdW1uc1tcIkFDQ09VTlRfTlVNQkVSXCJdID0gMF0gPSBcIkFDQ09VTlRfTlVNQkVSXCI7XG4gICAgUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnNbUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnNbXCJUUkFERV9EQVRFXCJdID0gMV0gPSBcIlRSQURFX0RBVEVcIjtcbiAgICBQYTUyOVRyYW5zYWN0aW9uQ29sdW1uc1tQYTUyOVRyYW5zYWN0aW9uQ29sdW1uc1tcIlBST0NFU1NfREFURVwiXSA9IDJdID0gXCJQUk9DRVNTX0RBVEVcIjtcbiAgICBQYTUyOVRyYW5zYWN0aW9uQ29sdW1uc1tQYTUyOVRyYW5zYWN0aW9uQ29sdW1uc1tcIlRSQU5TQUNUSU9OX1RZUEVcIl0gPSAzXSA9IFwiVFJBTlNBQ1RJT05fVFlQRVwiO1xuICAgIFBhNTI5VHJhbnNhY3Rpb25Db2x1bW5zW1BhNTI5VHJhbnNhY3Rpb25Db2x1bW5zW1wiVFJBTlNBQ1RJT05fREVTQ1JJUFRJT05cIl0gPSA0XSA9IFwiVFJBTlNBQ1RJT05fREVTQ1JJUFRJT05cIjtcbiAgICBQYTUyOVRyYW5zYWN0aW9uQ29sdW1uc1tQYTUyOVRyYW5zYWN0aW9uQ29sdW1uc1tcIklOVkVTVE1FTlRfTkFNRVwiXSA9IDVdID0gXCJJTlZFU1RNRU5UX05BTUVcIjtcbiAgICBQYTUyOVRyYW5zYWN0aW9uQ29sdW1uc1tQYTUyOVRyYW5zYWN0aW9uQ29sdW1uc1tcIlNIQVJFX1BSSUNFXCJdID0gNl0gPSBcIlNIQVJFX1BSSUNFXCI7XG4gICAgUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnNbUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnNbXCJTSEFSRVNcIl0gPSA3XSA9IFwiU0hBUkVTXCI7XG4gICAgUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnNbUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnNbXCJHUk9TU19BTU9VTlRcIl0gPSA4XSA9IFwiR1JPU1NfQU1PVU5UXCI7XG4gICAgUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnNbUGE1MjlUcmFuc2FjdGlvbkNvbHVtbnNbXCJORVRfQU1PVU5UXCJdID0gOV0gPSBcIk5FVF9BTU9VTlRcIjtcbn0pKFBhNTI5VHJhbnNhY3Rpb25Db2x1bW5zIHx8IChQYTUyOVRyYW5zYWN0aW9uQ29sdW1ucyA9IHt9KSk7XG52YXIgUGE1MjlIb2xkaW5nQ29sdW1ucztcbihmdW5jdGlvbiAoUGE1MjlIb2xkaW5nQ29sdW1ucykge1xuICAgIFBhNTI5SG9sZGluZ0NvbHVtbnNbUGE1MjlIb2xkaW5nQ29sdW1uc1tcIkZVTkRfQUNDT1VOVF9OVU1CRVJcIl0gPSAwXSA9IFwiRlVORF9BQ0NPVU5UX05VTUJFUlwiO1xuICAgIFBhNTI5SG9sZGluZ0NvbHVtbnNbUGE1MjlIb2xkaW5nQ29sdW1uc1tcIkZVTkRfTkFNRVwiXSA9IDFdID0gXCJGVU5EX05BTUVcIjtcbiAgICBQYTUyOUhvbGRpbmdDb2x1bW5zW1BhNTI5SG9sZGluZ0NvbHVtbnNbXCJQUklDRVwiXSA9IDJdID0gXCJQUklDRVwiO1xuICAgIFBhNTI5SG9sZGluZ0NvbHVtbnNbUGE1MjlIb2xkaW5nQ29sdW1uc1tcIlNIQVJFU1wiXSA9IDNdID0gXCJTSEFSRVNcIjtcbiAgICBQYTUyOUhvbGRpbmdDb2x1bW5zW1BhNTI5SG9sZGluZ0NvbHVtbnNbXCJUT1RBTF9WQUxVRVwiXSA9IDRdID0gXCJUT1RBTF9WQUxVRVwiO1xufSkoUGE1MjlIb2xkaW5nQ29sdW1ucyB8fCAoUGE1MjlIb2xkaW5nQ29sdW1ucyA9IHt9KSk7XG4iLCIvKlxyXG5cdENvcHlyaWdodCAyMDE1IEF4aW5vbVxyXG5cdENvcHlyaWdodCAyMDExLTIwMTMgQWJkdWxsYSBBYmR1cmFraG1hbm92XHJcblx0T3JpZ2luYWwgc291cmNlcyBhcmUgYXZhaWxhYmxlIGF0IGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AveDJqcy9cclxuXHJcblx0TGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuXHR5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcblx0WW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcblxyXG5cdGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuXHRVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcblx0ZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG5cdFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG5cdFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuXHRsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcbi8qXHJcblx0U3VwcG9ydGVkIGV4cG9ydCBtZXRob2RzOlxyXG5cdCogQU1EXHJcblx0KiA8c2NyaXB0PiAod2luZG93LlgySlMpXHJcblx0KiBOb2RlLmpzXHJcblxyXG5cdExpbWl0YXRpb25zOlxyXG5cdCogQXR0cmlidXRlIG5hbWVzcGFjZSBwcmVmaXhlcyBhcmUgbm90IHBhcnNlZCBhcyBzdWNoLlxyXG5cdCogT3ZlcmFsbCB0aGUgc2VyaWFsaXphdGlvbi9kZXNlcmlhbGl6YXRvbiBjb2RlIGlzIFwiYmVzdCBlZmZvcnRcIiBhbmQgbm90IGZvb2xwcm9vZi5cclxuKi9cclxuXHJcbi8vIE1vZHVsZSBkZWZpbml0aW9uIHBhdHRlcm4gdXNlZCBpcyByZXR1cm5FeHBvcnRzIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3VtZGpzL3VtZFxyXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHJcblx0LyogZ2xvYmFsIGRlZmluZSAqL1xyXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcclxuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cclxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XHJcblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xyXG5cdFx0Ly8gTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUywgYnV0IG9ubHkgQ29tbW9uSlMtbGlrZVxyXG5cdFx0Ly8gZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cywgbGlrZSBOb2RlLlxyXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAeG1sZG9tL3htbGRvbVwiKS5ET01QYXJzZXIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQvLyBCcm93c2VyIGdsb2JhbHMgKHJvb3QgaXMgd2luZG93KVxyXG5cdFx0cm9vdC5YMkpTID0gZmFjdG9yeSgpO1xyXG5cdH1cclxufSkodGhpcywgZnVuY3Rpb24gKEN1c3RvbURPTVBhcnNlcikge1xyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHQvLyBXZSByZXR1cm4gYSBjb25zdHJ1Y3RvciB0aGF0IGNhbiBiZSB1c2VkIHRvIG1ha2UgWDJKUyBpbnN0YW5jZXMuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIFgySlMoY29uZmlnKSB7XHJcblx0XHR2YXIgVkVSU0lPTiA9IFwiMy40LjRcIjtcclxuXHJcblx0XHRjb25maWcgPSBjb25maWcgfHwge307XHJcblxyXG5cdFx0ZnVuY3Rpb24gaW5pdENvbmZpZ0RlZmF1bHRzKCkge1xyXG5cdFx0XHQvLyBJZiBzZXQgdG8gXCJwcm9wZXJ0eVwiIHRoZW4gPGVsZW1lbnQ+X2FzQXJyYXkgd2lsbCBiZSBjcmVhdGVkXHJcblx0XHRcdC8vIHRvIGFsbG93IHlvdSB0byBhY2Nlc3MgYW55IGVsZW1lbnQgYXMgYW4gYXJyYXkgKGV2ZW4gaWYgdGhlcmUgaXMgb25seSBvbmUgb2YgaXQpLlxyXG5cdFx0XHRjb25maWcuYXJyYXlBY2Nlc3NGb3JtID0gY29uZmlnLmFycmF5QWNjZXNzRm9ybSB8fCBcIm5vbmVcIjtcclxuXHJcblx0XHRcdC8vIElmIFwidGV4dFwiIHRoZW4gPGVtcHR5PjwvZW1wdHk+IHdpbGwgYmUgdHJhbnNmb3JtZWQgdG8gXCJcIi5cclxuXHRcdFx0Ly8gSWYgXCJvYmplY3RcIiB0aGVuIDxlbXB0eT48L2VtcHR5PiB3aWxsIGJlIHRyYW5zZm9ybWVkIHRvIHt9LlxyXG5cdFx0XHRjb25maWcuZW1wdHlOb2RlRm9ybSA9IGNvbmZpZy5lbXB0eU5vZGVGb3JtIHx8IFwidGV4dFwiO1xyXG5cclxuXHRcdFx0Ly8gRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaCBlbGVtZW50cywgaWYgdGhlIGZ1bmN0aW9uIHJldHVybnMgdHJ1ZSwgdGhlIGVsZW1lbnQgd2lsbCBiZSBza2lwcGVkXHJcblx0XHRcdC8vIGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7IHJldHVybiB0cnVlOyB9O1xyXG5cdFx0XHRjb25maWcuanNBdHRyaWJ1dGVGaWx0ZXIgPSBjb25maWcuanNBdHRyaWJ1dGVGaWx0ZXI7XHJcblxyXG5cdFx0XHQvLyBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoIGVsZW1lbnRzLCB0aGUgZWxlbWVudCB2YWx1ZSB3aWxsIGJlIHJlcGxhY2VkIGJ5IHRoZSByZXR1cm5lZCB2YWx1ZVxyXG5cdFx0XHQvLyBmdW5jdGlvbihuYW1lLCB2YWx1ZSkgeyByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7IH07XHJcblx0XHRcdGNvbmZpZy5qc0F0dHJpYnV0ZUNvbnZlcnRlciA9IGNvbmZpZy5qc0F0dHJpYnV0ZUNvbnZlcnRlcjtcclxuXHJcblx0XHRcdC8vIEFsbG93cyBhdHRyaWJ1dGUgdmFsdWVzIHRvIGJlIGNvbnZlcnRlZCBvbiB0aGUgZmx5IGR1cmluZyBwYXJzaW5nIHRvIG9iamVjdHMuXHJcblx0XHRcdC8vIFx0XCJ0ZXN0XCI6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7IHJldHVybiB0cnVlOyB9XHJcblx0XHRcdC8vXHRcImNvbnZlcnRcIjogZnVuY3Rpb24obmFtZSwgdmFsdWUpIHsgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpOyB9O1xyXG5cdFx0XHQvLyBjb252ZXJ0KCkgd2lsbCBiZSBjYWxsZWQgZm9yIGV2ZXJ5IGF0dHJpYnV0ZSB3aGVyZSB0ZXN0KCkgcmV0dXJucyB0cnVlXHJcblx0XHRcdC8vIGFuZCB0aGUgcmV0dXJuIHZhbHVlIGZyb20gY29udmVydCgpIHdpbGwgcmVwbGFjZSB0aGUgb3JpZ2luYWwgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZS5cclxuXHRcdFx0Y29uZmlnLmF0dHJpYnV0ZUNvbnZlcnRlcnMgPSBjb25maWcuYXR0cmlidXRlQ29udmVydGVycyB8fCBbXTtcclxuXHJcblx0XHRcdC8vIEFueSBlbGVtZW50cyB0aGF0IG1hdGNoIHRoZSBwYXRocyBoZXJlIHdpbGwgaGF2ZSB0aGVpciB0ZXh0IHBhcnNlZFxyXG5cdFx0XHQvLyBhcyBhbiBYTUwgZGF0ZXRpbWUgdmFsdWUgKDIwMTEtMTEtMTJUMTM6MDA6MDAtMDc6MDAgc3R5bGUpLlxyXG5cdFx0XHQvLyBUaGUgcGF0aCBjYW4gYmUgYSBwbGFpbiBzdHJpbmcgKHBhcmVudC5jaGlsZDEuY2hpbGQyKSxcclxuXHRcdFx0Ly8gYSByZWdleCAoLy4qXFwuY2hpbGQyLykgb3IgZnVuY3Rpb24oZWxlbWVudFBhdGgpLlxyXG5cdFx0XHRjb25maWcuZGF0ZXRpbWVBY2Nlc3NGb3JtUGF0aHMgPSBjb25maWcuZGF0ZXRpbWVBY2Nlc3NGb3JtUGF0aHMgfHwgW107XHJcblxyXG5cdFx0XHQvLyBBbnkgZWxlbWVudHMgdGhhdCBtYXRjaCB0aGUgcGF0aHMgbGlzdGVkIGhlcmUgd2lsbCBiZSBzdG9yZWQgaW4gSmF2YVNjcmlwdCBvYmplY3RzXHJcblx0XHRcdC8vIGFzIGFycmF5cyBldmVuIGlmIHRoZXJlIGlzIG9ubHkgb25lIG9mIHRoZW0uIFRoZSBwYXRoIGNhbiBiZSBhIHBsYWluIHN0cmluZ1xyXG5cdFx0XHQvLyAocGFyZW50LmNoaWxkMS5jaGlsZDIpLCBhIHJlZ2V4ICgvLipcXC5jaGlsZDIvKSBvciBmdW5jdGlvbihlbGVtZW50TmFtZSwgZWxlbWVudFBhdGgpLlxyXG5cdFx0XHRjb25maWcuYXJyYXlBY2Nlc3NGb3JtUGF0aHMgPSBjb25maWcuYXJyYXlBY2Nlc3NGb3JtUGF0aHMgfHwgW107XHJcblxyXG4gICAgICAgICAgICAvLyB4bWxkb20gY29uc3RydWN0b3IgYXJndW1lbnRzXHJcbiAgICAgICAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ppbmR3L3htbGRvbSNhcGktcmVmZXJlbmNlXHJcblx0XHRcdGNvbmZpZy54bWxkb21PcHRpb25zID0gY29uZmlnLnhtbGRvbU9wdGlvbnMgfHwge307XHJcblxyXG5cdFx0XHQvLyBJZiB0cnVlLCBhIHRvU3RyaW5nIGZ1bmN0aW9uIGlzIGdlbmVyYXRlZCB0byBwcmludCBub2RlcyBjb250YWluaW5nIHRleHQgb3IgY2RhdGEuXHJcblx0XHRcdC8vIFVzZWZ1bCBpZiB5b3Ugd2FudCB0byBhY2NlcHQgYm90aCBwbGFpbiB0ZXh0IGFuZCBDRGF0YSBhcyBlcXVpdmFsZW50IGlucHV0cy5cclxuXHRcdFx0aWYgKGNvbmZpZy5lbmFibGVUb1N0cmluZ0Z1bmMgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdGNvbmZpZy5lbmFibGVUb1N0cmluZ0Z1bmMgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBJZiB0cnVlLCBlbXB0eSB0ZXh0IHRhZ3MgYXJlIGlnbm9yZWQgZm9yIGVsZW1lbnRzIHdpdGggY2hpbGQgbm9kZXMuXHJcblx0XHRcdGlmIChjb25maWcuc2tpcEVtcHR5VGV4dE5vZGVzRm9yT2JqID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRjb25maWcuc2tpcEVtcHR5VGV4dE5vZGVzRm9yT2JqID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gSWYgdHJ1ZSwgd2hpdGVzcGFjZSBpcyB0cmltbWVkIGZyb20gdGV4dCBub2Rlcy5cclxuXHRcdFx0aWYgKGNvbmZpZy5zdHJpcFdoaXRlc3BhY2VzID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRjb25maWcuc3RyaXBXaGl0ZXNwYWNlcyA9IHRydWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIElmIHRydWUsIGRvdWJsZSBxdW90ZXMgYXJlIHVzZWQgaW4gZ2VuZXJhdGVkIFhNTC5cclxuXHRcdFx0aWYgKGNvbmZpZy51c2VEb3VibGVRdW90ZXMgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdGNvbmZpZy51c2VEb3VibGVRdW90ZXMgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBJZiB0cnVlLCB0aGUgcm9vdCBlbGVtZW50IG9mIHRoZSBYTUwgZG9jdW1lbnQgaXMgaWdub3JlZCB3aGVuIGNvbnZlcnRpbmcgdG8gb2JqZWN0cy5cclxuXHRcdFx0Ly8gVGhlIHJlc3VsdCB3aWxsIGRpcmVjdGx5IGhhdmUgdGhlIHJvb3QgZWxlbWVudCdzIGNoaWxkcmVuIGFzIGl0cyBvd24gcHJvcGVydGllcy5cclxuXHRcdFx0aWYgKGNvbmZpZy5pZ25vcmVSb290ID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRjb25maWcuaWdub3JlUm9vdCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBXaGV0aGVyIFhNTCBjaGFyYWN0ZXJzIGluIHRleHQgYXJlIGVzY2FwZWQgd2hlbiByZWFkaW5nL3dyaXRpbmcgWE1MLlxyXG5cdFx0XHRpZiAoY29uZmlnLmVzY2FwZU1vZGUgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdGNvbmZpZy5lc2NhcGVNb2RlID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gUHJlZml4IHRvIHVzZSBmb3IgcHJvcGVydGllcyB0aGF0IGFyZSBjcmVhdGVkIHRvIHJlcHJlc2VudCBYTUwgYXR0cmlidXRlcy5cclxuXHRcdFx0aWYgKGNvbmZpZy5hdHRyaWJ1dGVQcmVmaXggPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdGNvbmZpZy5hdHRyaWJ1dGVQcmVmaXggPSBcIl9cIjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gSWYgdHJ1ZSwgZW1wdHkgZWxlbWVudHMgd2lsbCBjcmVhdGVkIGFzIHNlbGYgY2xvc2luZyBlbGVtZW50cyAoPGVsZW1lbnQgLz4pXHJcblx0XHRcdC8vIElmIGZhbHNlLCBlbXB0eSBlbGVtZW50cyB3aWxsIGJlIGNyZWF0ZWQgd2l0aCBzdGFydCBhbmQgZW5kIHRhZ3MgKDxlbGVtZW50PjwvZWxlbWVudD4pXHJcblx0XHRcdGlmIChjb25maWcuc2VsZkNsb3NpbmdFbGVtZW50cyA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0Y29uZmlnLnNlbGZDbG9zaW5nRWxlbWVudHMgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBJZiB0aGlzIHByb3BlcnR5IGRlZmluZWQgYXMgZmFsc2UgYW5kIGFuIFhNTCBlbGVtZW50IGhhcyBDRGF0YSBub2RlIE9OTFksIGl0IHdpbGwgYmUgY29udmVydGVkIHRvIHRleHQgd2l0aG91dCBhZGRpdGlvbmFsIHByb3BlcnR5IFwiX19jZGF0YVwiXHJcblx0XHRcdGlmIChjb25maWcua2VlcENEYXRhID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRjb25maWcua2VlcENEYXRhID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIElmIHRoaXMgcHJvcGVydHkgZGVmaW5lZCBhcyB0cnVlLCB1c2UgeyBfX3RleHQ6ICdhYmMnIH0gb3ZlciAnYWJjJ1xyXG5cdFx0XHRpZiAoY29uZmlnLmtlZXBUZXh0ID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRjb25maWcua2VlcFRleHQgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gSWYgdHJ1ZSwgd2lsbCBvdXRwdXQgZGF0ZXMgaW4gVVRDXHJcblx0XHRcdGlmIChjb25maWcuanNEYXRlVVRDID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRjb25maWcuanNEYXRlVVRDID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBpbml0UmVxdWlyZWRQb2x5ZmlsbHMoKSB7XHJcblx0XHRcdGZ1bmN0aW9uIHBhZChudW1iZXIpIHtcclxuXHRcdFx0XHR2YXIgciA9IFN0cmluZyhudW1iZXIpO1xyXG5cdFx0XHRcdGlmIChyLmxlbmd0aCA9PT0gMSkge1xyXG5cdFx0XHRcdFx0ciA9ICcwJyArIHI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiByO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIEhlbGxvIElFOC1cclxuXHRcdFx0aWYgKHR5cGVvZiBTdHJpbmcucHJvdG90eXBlLnRyaW0gIT09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0XHRTdHJpbmcucHJvdG90eXBlLnRyaW0gPSBmdW5jdGlvbiB0cmltKCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMucmVwbGFjZSgvXlxccyt8Xlxcbit8KFxcc3xcXG4pKyQvZywgJycpO1xyXG5cdFx0XHRcdH07XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHR5cGVvZiBEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZyAhPT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0XHRcdC8vIEltcGxlbWVudGF0aW9uIGZyb20gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNTczNTIxL2hvdy1kby1pLW91dHB1dC1hbi1pc28tODYwMS1mb3JtYXR0ZWQtc3RyaW5nLWluLWphdmFzY3JpcHRcclxuXHRcdFx0XHREYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZyA9IGZ1bmN0aW9uIHRvSVNPU3RyaW5nKCkge1xyXG5cdFx0XHRcdFx0dmFyIE1TX0lOX1MgPSAxMDAwO1xyXG5cclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmdldFVUQ0Z1bGxZZWFyKClcclxuXHRcdFx0XHRcdFx0KyAnLScgKyBwYWQodGhpcy5nZXRVVENNb250aCgpICsgMSlcclxuXHRcdFx0XHRcdFx0KyAnLScgKyBwYWQodGhpcy5nZXRVVENEYXRlKCkpXHJcblx0XHRcdFx0XHRcdCsgJ1QnICsgcGFkKHRoaXMuZ2V0VVRDSG91cnMoKSlcclxuXHRcdFx0XHRcdFx0KyAnOicgKyBwYWQodGhpcy5nZXRVVENNaW51dGVzKCkpXHJcblx0XHRcdFx0XHRcdCsgJzonICsgcGFkKHRoaXMuZ2V0VVRDU2Vjb25kcygpKVxyXG5cdFx0XHRcdFx0XHQrICcuJyArIFN0cmluZygodGhpcy5nZXRVVENNaWxsaXNlY29uZHMoKSAvIE1TX0lOX1MpLnRvRml4ZWQoMykpLnNsaWNlKDIsIDUpXHJcblx0XHRcdFx0XHRcdCsgJ1onO1xyXG5cdFx0XHRcdH07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpbml0Q29uZmlnRGVmYXVsdHMoKTtcclxuXHRcdGluaXRSZXF1aXJlZFBvbHlmaWxscygpO1xyXG5cclxuXHRcdHZhciBET01Ob2RlVHlwZXMgPSB7XHJcblx0XHRcdFwiRUxFTUVOVF9OT0RFXCI6IDEsXHJcblx0XHRcdFwiVEVYVF9OT0RFXCI6IDMsXHJcblx0XHRcdFwiQ0RBVEFfU0VDVElPTl9OT0RFXCI6IDQsXHJcblx0XHRcdFwiQ09NTUVOVF9OT0RFXCI6IDgsXHJcblx0XHRcdFwiRE9DVU1FTlRfTk9ERVwiOiA5XHJcblx0XHR9O1xyXG5cclxuXHRcdGZ1bmN0aW9uIGdldERvbU5vZGVMb2NhbE5hbWUoZG9tTm9kZSkge1xyXG5cdFx0XHR2YXIgbG9jYWxOYW1lID0gZG9tTm9kZS5sb2NhbE5hbWU7XHJcblx0XHRcdGlmIChsb2NhbE5hbWUgPT0gbnVsbCkge1xyXG5cdFx0XHRcdC8vIFllYWgsIHRoaXMgaXMgSUUhIVxyXG5cdFx0XHRcdGxvY2FsTmFtZSA9IGRvbU5vZGUuYmFzZU5hbWU7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGxvY2FsTmFtZSA9PSBudWxsIHx8IGxvY2FsTmFtZSA9PT0gXCJcIikge1xyXG5cdFx0XHRcdC8vID09PVwiXCIgaXMgSUUgdG9vXHJcblx0XHRcdFx0bG9jYWxOYW1lID0gZG9tTm9kZS5ub2RlTmFtZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gbG9jYWxOYW1lO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGdldERvbU5vZGVOYW1lc3BhY2VQcmVmaXgobm9kZSkge1xyXG5cdFx0XHRyZXR1cm4gbm9kZS5wcmVmaXg7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZXNjYXBlWG1sQ2hhcnMoc3RyKSB7XHJcblx0XHRcdGlmICh0eXBlb2Ygc3RyID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdHJldHVybiBzdHIucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKS5yZXBsYWNlKC8nL2csICcmI3gyNzsnKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiBzdHI7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gdW5lc2NhcGVYbWxDaGFycyhzdHIpIHtcclxuXHRcdFx0cmV0dXJuIHN0ci5yZXBsYWNlKC8mbHQ7L2csICc8JykucmVwbGFjZSgvJmd0Oy9nLCAnPicpLnJlcGxhY2UoLyZxdW90Oy9nLCAnXCInKS5yZXBsYWNlKC8mI3gyNzsvZywgXCInXCIpLnJlcGxhY2UoLyZhbXA7L2csICcmJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZW5zdXJlUHJvcGVyQXJyYXlBY2Nlc3NGb3JtKGVsZW1lbnQsIGNoaWxkTmFtZSwgZWxlbWVudFBhdGgpIHtcclxuXHRcdFx0c3dpdGNoIChjb25maWcuYXJyYXlBY2Nlc3NGb3JtKSB7XHJcblx0XHRcdFx0Y2FzZSBcInByb3BlcnR5XCI6XHJcblx0XHRcdFx0XHRpZiAoIShlbGVtZW50W2NoaWxkTmFtZV0gaW5zdGFuY2VvZiBBcnJheSkpXHJcblx0XHRcdFx0XHRcdGVsZW1lbnRbY2hpbGROYW1lICsgXCJfYXNBcnJheVwiXSA9IFtlbGVtZW50W2NoaWxkTmFtZV1dO1xyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRlbGVtZW50W2NoaWxkTmFtZSArIFwiX2FzQXJyYXlcIl0gPSBlbGVtZW50W2NoaWxkTmFtZV07XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCEoZWxlbWVudFtjaGlsZE5hbWVdIGluc3RhbmNlb2YgQXJyYXkpICYmIGNvbmZpZy5hcnJheUFjY2Vzc0Zvcm1QYXRocy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0dmFyIG1hdGNoID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY29uZmlnLmFycmF5QWNjZXNzRm9ybVBhdGhzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHR2YXIgYXJyYXlQYXRoID0gY29uZmlnLmFycmF5QWNjZXNzRm9ybVBhdGhzW2ldO1xyXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBhcnJheVBhdGggPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0XHRcdFx0aWYgKGFycmF5UGF0aCA9PT0gZWxlbWVudFBhdGgpIHtcclxuXHRcdFx0XHRcdFx0XHRtYXRjaCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoYXJyYXlQYXRoIGluc3RhbmNlb2YgUmVnRXhwKSB7XHJcblx0XHRcdFx0XHRcdGlmIChhcnJheVBhdGgudGVzdChlbGVtZW50UGF0aCkpIHtcclxuXHRcdFx0XHRcdFx0XHRtYXRjaCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGFycmF5UGF0aCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRcdFx0XHRcdGlmIChhcnJheVBhdGgoY2hpbGROYW1lLCBlbGVtZW50UGF0aCkpIHtcclxuXHRcdFx0XHRcdFx0XHRtYXRjaCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChtYXRjaClcclxuXHRcdFx0XHRcdGVsZW1lbnRbY2hpbGROYW1lXSA9IFtlbGVtZW50W2NoaWxkTmFtZV1dO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24geG1sRGF0ZVRpbWVUb0RhdGUocHJvcCkge1xyXG5cdFx0XHQvLyBJbXBsZW1lbnRhdGlvbiBiYXNlZCB1cCBvbiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzgxNzg1OTgveG1sLWRhdGV0aW1lLXRvLWphdmFzY3JpcHQtZGF0ZS1vYmplY3RcclxuXHRcdFx0Ly8gSW1wcm92ZWQgdG8gc3VwcG9ydCBmdWxsIHNwZWMgYW5kIG9wdGlvbmFsIHBhcnRzXHJcblx0XHRcdHZhciBNSU5VVEVTX1BFUl9IT1VSID0gNjA7XHJcblxyXG5cdFx0XHR2YXIgYml0cyA9IHByb3Auc3BsaXQoL1stVDorWl0vZyk7XHJcblxyXG5cdFx0XHR2YXIgZCA9IG5ldyBEYXRlKGJpdHNbMF0sIGJpdHNbMV0gLSAxLCBiaXRzWzJdKTtcclxuXHRcdFx0dmFyIHNlY29uZEJpdHMgPSBiaXRzWzVdLnNwbGl0KFwiXFwuXCIpO1xyXG5cdFx0XHRkLnNldEhvdXJzKGJpdHNbM10sIGJpdHNbNF0sIHNlY29uZEJpdHNbMF0pO1xyXG5cdFx0XHRpZiAoc2Vjb25kQml0cy5sZW5ndGggPiAxKVxyXG5cdFx0XHRcdGQuc2V0TWlsbGlzZWNvbmRzKHNlY29uZEJpdHNbMV0pO1xyXG5cclxuXHRcdFx0Ly8gR2V0IHN1cHBsaWVkIHRpbWUgem9uZSBvZmZzZXQgaW4gbWludXRlc1xyXG5cdFx0XHRpZiAoYml0c1s2XSAmJiBiaXRzWzddKSB7XHJcblx0XHRcdFx0dmFyIG9mZnNldE1pbnV0ZXMgPSBiaXRzWzZdICogTUlOVVRFU19QRVJfSE9VUiArIE51bWJlcihiaXRzWzddKTtcclxuXHRcdFx0XHR2YXIgc2lnbiA9IC9cXGRcXGQtXFxkXFxkOlxcZFxcZCQvLnRlc3QocHJvcCkgPyAnLScgOiAnKyc7XHJcblxyXG5cdFx0XHRcdC8vIEFwcGx5IHRoZSBzaWduXHJcblx0XHRcdFx0b2Zmc2V0TWludXRlcyA9IDAgKyAoc2lnbiA9PT0gJy0nID8gLTEgKiBvZmZzZXRNaW51dGVzIDogb2Zmc2V0TWludXRlcyk7XHJcblxyXG5cdFx0XHRcdC8vIEFwcGx5IG9mZnNldCBhbmQgbG9jYWwgdGltZXpvbmVcclxuXHRcdFx0XHRkLnNldE1pbnV0ZXMoZC5nZXRNaW51dGVzKCkgLSBvZmZzZXRNaW51dGVzIC0gZC5nZXRUaW1lem9uZU9mZnNldCgpKTtcclxuXHRcdFx0fSBlbHNlIGlmIChwcm9wLmluZGV4T2YoXCJaXCIsIHByb3AubGVuZ3RoIC0gMSkgIT09IC0xKSB7XHJcblx0XHRcdFx0ZCA9IG5ldyBEYXRlKERhdGUuVVRDKGQuZ2V0RnVsbFllYXIoKSwgZC5nZXRNb250aCgpLCBkLmdldERhdGUoKSwgZC5nZXRIb3VycygpLCBkLmdldE1pbnV0ZXMoKSwgZC5nZXRTZWNvbmRzKCksIGQuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gZCBpcyBub3cgYSBsb2NhbCB0aW1lIGVxdWl2YWxlbnQgdG8gdGhlIHN1cHBsaWVkIHRpbWVcclxuXHRcdFx0cmV0dXJuIGQ7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gY29udmVydFRvRGF0ZUlmUmVxdWlyZWQodmFsdWUsIGNoaWxkTmFtZSwgZnVsbFBhdGgpIHtcclxuXHRcdFx0aWYgKGNvbmZpZy5kYXRldGltZUFjY2Vzc0Zvcm1QYXRocy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0dmFyIHBhdGhXaXRob3V0VGV4dE5vZGUgPSBmdWxsUGF0aC5zcGxpdChcIlxcLiNcIilbMF07XHJcblxyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY29uZmlnLmRhdGV0aW1lQWNjZXNzRm9ybVBhdGhzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHR2YXIgY2FuZGlkYXRlUGF0aCA9IGNvbmZpZy5kYXRldGltZUFjY2Vzc0Zvcm1QYXRoc1tpXTtcclxuXHRcdFx0XHRcdGlmICh0eXBlb2YgY2FuZGlkYXRlUGF0aCA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdFx0XHRpZiAoY2FuZGlkYXRlUGF0aCA9PT0gcGF0aFdpdGhvdXRUZXh0Tm9kZSlcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4geG1sRGF0ZVRpbWVUb0RhdGUodmFsdWUpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjYW5kaWRhdGVQYXRoIGluc3RhbmNlb2YgUmVnRXhwKSB7XHJcblx0XHRcdFx0XHRcdGlmIChjYW5kaWRhdGVQYXRoLnRlc3QocGF0aFdpdGhvdXRUZXh0Tm9kZSkpXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHhtbERhdGVUaW1lVG9EYXRlKHZhbHVlKTtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGNhbmRpZGF0ZVBhdGggPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0XHRcdFx0XHRpZiAoY2FuZGlkYXRlUGF0aChwYXRoV2l0aG91dFRleHROb2RlKSlcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4geG1sRGF0ZVRpbWVUb0RhdGUodmFsdWUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHZhbHVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGRlc2VyaWFsaXplUm9vdEVsZW1lbnRDaGlsZHJlbihyb290RWxlbWVudCkge1xyXG5cdFx0XHR2YXIgcmVzdWx0ID0ge307XHJcblx0XHRcdHZhciBjaGlsZHJlbiA9IHJvb3RFbGVtZW50LmNoaWxkTm9kZXM7XHJcblxyXG5cdFx0XHQvLyBBbHRlcm5hdGl2ZSBmb3IgZmlyc3RFbGVtZW50Q2hpbGQgd2hpY2ggaXMgbm90IHN1cHBvcnRlZCBpbiBzb21lIGVudmlyb25tZW50c1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dmFyIGNoaWxkID0gY2hpbGRyZW4uaXRlbShpKTtcclxuXHRcdFx0XHRpZiAoY2hpbGQubm9kZVR5cGUgPT09IERPTU5vZGVUeXBlcy5FTEVNRU5UX05PREUpIHtcclxuXHRcdFx0XHRcdHZhciBjaGlsZE5hbWUgPSBnZXREb21Ob2RlTG9jYWxOYW1lKGNoaWxkKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoY29uZmlnLmlnbm9yZVJvb3QpXHJcblx0XHRcdFx0XHRcdHJlc3VsdCA9IGRlc2VyaWFsaXplRG9tQ2hpbGRyZW4oY2hpbGQsIGNoaWxkTmFtZSk7XHJcblx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdHJlc3VsdFtjaGlsZE5hbWVdID0gZGVzZXJpYWxpemVEb21DaGlsZHJlbihjaGlsZCwgY2hpbGROYW1lKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZGVzZXJpYWxpemVFbGVtZW50Q2hpbGRyZW4oZWxlbWVudCwgZWxlbWVudFBhdGgpIHtcclxuXHRcdFx0dmFyIHJlc3VsdCA9IHt9O1xyXG5cdFx0XHRyZXN1bHQuX19jbnQgPSAwO1xyXG5cclxuXHRcdFx0dmFyIG5vZGVDaGlsZHJlbiA9IGVsZW1lbnQuY2hpbGROb2RlcztcclxuXHJcblx0XHRcdC8vIENoaWxkIG5vZGVzLlxyXG5cdFx0XHRmb3IgKHZhciBpQ2hpbGQgPSAwOyBpQ2hpbGQgPCBub2RlQ2hpbGRyZW4ubGVuZ3RoOyBpQ2hpbGQrKykge1xyXG5cdFx0XHRcdHZhciBjaGlsZCA9IG5vZGVDaGlsZHJlbi5pdGVtKGlDaGlsZCk7XHJcblx0XHRcdFx0dmFyIGNoaWxkTmFtZSA9IGdldERvbU5vZGVMb2NhbE5hbWUoY2hpbGQpO1xyXG5cclxuXHRcdFx0XHRpZiAoY2hpbGQubm9kZVR5cGUgPT09IERPTU5vZGVUeXBlcy5DT01NRU5UX05PREUpXHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdFx0cmVzdWx0Ll9fY250Kys7XHJcblxyXG5cdFx0XHRcdC8vIFdlIGRlbGliZXJhdGVseSBkbyBub3QgYWNjZXB0IGV2ZXJ5dGhpbmcgZmFsc2V5IGhlcmUgYmVjYXVzZVxyXG5cdFx0XHRcdC8vIGVsZW1lbnRzIHRoYXQgcmVzb2x2ZSB0byBlbXB0eSBzdHJpbmcgc2hvdWxkIHN0aWxsIGJlIHByZXNlcnZlZC5cclxuXHRcdFx0XHRpZiAocmVzdWx0W2NoaWxkTmFtZV0gPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0cmVzdWx0W2NoaWxkTmFtZV0gPSBkZXNlcmlhbGl6ZURvbUNoaWxkcmVuKGNoaWxkLCBlbGVtZW50UGF0aCArIFwiLlwiICsgY2hpbGROYW1lKTtcclxuXHRcdFx0XHRcdGVuc3VyZVByb3BlckFycmF5QWNjZXNzRm9ybShyZXN1bHQsIGNoaWxkTmFtZSwgZWxlbWVudFBhdGggKyBcIi5cIiArIGNoaWxkTmFtZSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGlmICghKHJlc3VsdFtjaGlsZE5hbWVdIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcblx0XHRcdFx0XHRcdHJlc3VsdFtjaGlsZE5hbWVdID0gW3Jlc3VsdFtjaGlsZE5hbWVdXTtcclxuXHRcdFx0XHRcdFx0ZW5zdXJlUHJvcGVyQXJyYXlBY2Nlc3NGb3JtKHJlc3VsdCwgY2hpbGROYW1lLCBlbGVtZW50UGF0aCArIFwiLlwiICsgY2hpbGROYW1lKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRyZXN1bHRbY2hpbGROYW1lXVtyZXN1bHRbY2hpbGROYW1lXS5sZW5ndGhdID0gZGVzZXJpYWxpemVEb21DaGlsZHJlbihjaGlsZCwgZWxlbWVudFBhdGggKyBcIi5cIiArIGNoaWxkTmFtZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBBdHRyaWJ1dGVzXHJcblx0XHRcdGZvciAodmFyIGlBdHRyaWJ1dGUgPSAwOyBpQXR0cmlidXRlIDwgZWxlbWVudC5hdHRyaWJ1dGVzLmxlbmd0aDsgaUF0dHJpYnV0ZSsrKSB7XHJcblx0XHRcdFx0dmFyIGF0dHJpYnV0ZSA9IGVsZW1lbnQuYXR0cmlidXRlcy5pdGVtKGlBdHRyaWJ1dGUpO1xyXG5cdFx0XHRcdHJlc3VsdC5fX2NudCsrO1xyXG5cclxuXHRcdFx0XHR2YXIgYWRqdXN0ZWRWYWx1ZSA9IGF0dHJpYnV0ZS52YWx1ZTtcclxuXHRcdFx0XHRmb3IgKHZhciBpQ29udmVydGVyID0gMDsgaUNvbnZlcnRlciA8IGNvbmZpZy5hdHRyaWJ1dGVDb252ZXJ0ZXJzLmxlbmd0aDsgaUNvbnZlcnRlcisrKSB7XHJcblx0XHRcdFx0XHR2YXIgY29udmVydGVyID0gY29uZmlnLmF0dHJpYnV0ZUNvbnZlcnRlcnNbaUNvbnZlcnRlcl07XHJcblx0XHRcdFx0XHRpZiAoY29udmVydGVyLnRlc3QuY2FsbChudWxsLCBhdHRyaWJ1dGUubmFtZSwgYXR0cmlidXRlLnZhbHVlKSlcclxuXHRcdFx0XHRcdFx0YWRqdXN0ZWRWYWx1ZSA9IGNvbnZlcnRlci5jb252ZXJ0LmNhbGwobnVsbCwgYXR0cmlidXRlLm5hbWUsIGF0dHJpYnV0ZS52YWx1ZSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXN1bHRbY29uZmlnLmF0dHJpYnV0ZVByZWZpeCArIGF0dHJpYnV0ZS5uYW1lXSA9IGFkanVzdGVkVmFsdWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIE5vZGUgbmFtZXNwYWNlIHByZWZpeFxyXG5cdFx0XHR2YXIgbmFtZXNwYWNlUHJlZml4ID0gZ2V0RG9tTm9kZU5hbWVzcGFjZVByZWZpeChlbGVtZW50KTtcclxuXHRcdFx0aWYgKG5hbWVzcGFjZVByZWZpeCkge1xyXG5cdFx0XHRcdHJlc3VsdC5fX2NudCsrO1xyXG5cdFx0XHRcdHJlc3VsdC5fX3ByZWZpeCA9IG5hbWVzcGFjZVByZWZpeDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHJlc3VsdFtcIiN0ZXh0XCJdKSB7XHJcblx0XHRcdFx0cmVzdWx0Ll9fdGV4dCA9IHJlc3VsdFtcIiN0ZXh0XCJdO1xyXG5cclxuXHRcdFx0XHRpZiAocmVzdWx0Ll9fdGV4dCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcblx0XHRcdFx0XHRyZXN1bHQuX190ZXh0ID0gcmVzdWx0Ll9fdGV4dC5qb2luKFwiXFxuXCIpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKGNvbmZpZy5lc2NhcGVNb2RlKVxyXG5cdFx0XHRcdFx0cmVzdWx0Ll9fdGV4dCA9IHVuZXNjYXBlWG1sQ2hhcnMocmVzdWx0Ll9fdGV4dCk7XHJcblxyXG5cdFx0XHRcdGlmIChjb25maWcuc3RyaXBXaGl0ZXNwYWNlcylcclxuXHRcdFx0XHRcdHJlc3VsdC5fX3RleHQgPSByZXN1bHQuX190ZXh0LnRyaW0oKTtcclxuXHJcblx0XHRcdFx0ZGVsZXRlIHJlc3VsdFtcIiN0ZXh0XCJdO1xyXG5cclxuXHRcdFx0XHRpZiAoY29uZmlnLmFycmF5QWNjZXNzRm9ybSA9PT0gXCJwcm9wZXJ0eVwiKVxyXG5cdFx0XHRcdFx0ZGVsZXRlIHJlc3VsdFtcIiN0ZXh0X2FzQXJyYXlcIl07XHJcblxyXG5cdFx0XHRcdHJlc3VsdC5fX3RleHQgPSBjb252ZXJ0VG9EYXRlSWZSZXF1aXJlZChyZXN1bHQuX190ZXh0LCBcIiN0ZXh0XCIsIGVsZW1lbnRQYXRoICsgXCIuI3RleHRcIik7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChyZXN1bHQuaGFzT3duUHJvcGVydHkoJyNjZGF0YS1zZWN0aW9uJykpIHtcclxuXHRcdFx0XHRyZXN1bHQuX19jZGF0YSA9IHJlc3VsdFtcIiNjZGF0YS1zZWN0aW9uXCJdO1xyXG5cdFx0XHRcdGRlbGV0ZSByZXN1bHRbXCIjY2RhdGEtc2VjdGlvblwiXTtcclxuXHJcblx0XHRcdFx0aWYgKGNvbmZpZy5hcnJheUFjY2Vzc0Zvcm0gPT09IFwicHJvcGVydHlcIilcclxuXHRcdFx0XHRcdGRlbGV0ZSByZXN1bHRbXCIjY2RhdGEtc2VjdGlvbl9hc0FycmF5XCJdO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAocmVzdWx0Ll9fY250ID09PSAxICYmIHJlc3VsdC5fX3RleHQgJiYgIWNvbmZpZy5rZWVwVGV4dCkge1xyXG5cdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5fX3RleHQ7XHJcblx0XHRcdH0gZWxzZSBpZiAocmVzdWx0Ll9fY250ID09PSAwICYmIGNvbmZpZy5lbXB0eU5vZGVGb3JtID09PSBcInRleHRcIikge1xyXG5cdFx0XHRcdHJlc3VsdCA9ICcnO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHJlc3VsdC5fX2NudCA+IDEgJiYgcmVzdWx0Ll9fdGV4dCAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5za2lwRW1wdHlUZXh0Tm9kZXNGb3JPYmopIHtcclxuXHRcdFx0XHRpZiAoY29uZmlnLnN0cmlwV2hpdGVzcGFjZXMgJiYgcmVzdWx0Ll9fdGV4dCA9PT0gXCJcIiB8fCByZXN1bHQuX190ZXh0LnRyaW0oKSA9PT0gXCJcIikge1xyXG5cdFx0XHRcdFx0ZGVsZXRlIHJlc3VsdC5fX3RleHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGRlbGV0ZSByZXN1bHQuX19jbnQ7XHJcblxyXG5cdFx0XHQvKipcclxuXHRcdFx0ICogV2UgYXJlIGNoZWNraW5nIGlmIHdlIGFyZSBjcmVhdGluZyBhIF9fY2RhdGEgcHJvcGVydHkgb3IgaWYgd2UganVzdCBhZGQgdGhlIGNvbnRlbnQgb2YgY2RhdGEgaW5zaWRlIHJlc3VsdC5cclxuXHRcdFx0ICogQnV0LCBpZiB3ZSBoYXZlIGEgcHJvcGVydHkgaW5zaWRlIHhtbCB0YWcgKDx0YWcgUFJPUEVSVFk9XCIxXCI+PC90YWc+KSwgYW5kIGEgY2RhdGEgaW5zaWRlLCB3ZSBjYW4ndCBpZ25vcmUgaXQuXHJcblx0XHRcdCAqIEluIHRoaXMgY2FzZSB3ZSBhcmUga2VlcGluZyBfX2NkYXRhIHByb3BlcnR5LlxyXG5cdFx0XHQgKi9cclxuXHRcdFx0aWYgKCFjb25maWcua2VlcENEYXRhICYmICghcmVzdWx0Lmhhc093blByb3BlcnR5KCdfX3RleHQnKSAmJiByZXN1bHQuaGFzT3duUHJvcGVydHkoJ19fY2RhdGEnKSAmJiBPYmplY3Qua2V5cyhyZXN1bHQpLmxlbmd0aCA9PT0gMSkpIHtcclxuXHRcdFx0XHRyZXR1cm4gKHJlc3VsdC5fX2NkYXRhID8gcmVzdWx0Ll9fY2RhdGEgOiAnJyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChjb25maWcuZW5hYmxlVG9TdHJpbmdGdW5jICYmIChyZXN1bHQuX190ZXh0IHx8IHJlc3VsdC5fX2NkYXRhKSkge1xyXG5cdFx0XHRcdHJlc3VsdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuICh0aGlzLl9fdGV4dCA/IHRoaXMuX190ZXh0IDogJycpICsgKHRoaXMuX19jZGF0YSA/IHRoaXMuX19jZGF0YSA6ICcnKTtcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGRlc2VyaWFsaXplRG9tQ2hpbGRyZW4obm9kZSwgcGFyZW50UGF0aCkge1xyXG5cdFx0XHRpZiAobm9kZS5ub2RlVHlwZSA9PT0gRE9NTm9kZVR5cGVzLkRPQ1VNRU5UX05PREUpIHtcclxuXHRcdFx0XHRyZXR1cm4gZGVzZXJpYWxpemVSb290RWxlbWVudENoaWxkcmVuKG5vZGUpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IERPTU5vZGVUeXBlcy5FTEVNRU5UX05PREUpIHtcclxuXHRcdFx0XHRyZXR1cm4gZGVzZXJpYWxpemVFbGVtZW50Q2hpbGRyZW4obm9kZSwgcGFyZW50UGF0aCk7XHJcblx0XHRcdH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gRE9NTm9kZVR5cGVzLlRFWFRfTk9ERSB8fCBub2RlLm5vZGVUeXBlID09PSBET01Ob2RlVHlwZXMuQ0RBVEFfU0VDVElPTl9OT0RFKSB7XHJcblx0XHRcdFx0cmV0dXJuIG5vZGUubm9kZVZhbHVlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gc2VyaWFsaXplU3RhcnRUYWcoanNPYmplY3QsIGVsZW1lbnROYW1lLCBhdHRyaWJ1dGVOYW1lcywgc2VsZkNsb3NpbmcpIHtcclxuXHRcdFx0dmFyIHJlc3VsdFN0ciA9IFwiPFwiICsgKChqc09iamVjdCAmJiBqc09iamVjdC5fX3ByZWZpeCkgPyAoanNPYmplY3QuX19wcmVmaXggKyBcIjpcIikgOiBcIlwiKSArIGVsZW1lbnROYW1lO1xyXG5cclxuXHRcdFx0aWYgKGF0dHJpYnV0ZU5hbWVzKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhdHRyaWJ1dGVOYW1lcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0dmFyIGF0dHJpYnV0ZU5hbWUgPSBhdHRyaWJ1dGVOYW1lc1tpXTtcclxuXHRcdFx0XHRcdHZhciBhdHRyaWJ1dGVWYWx1ZSA9IGpzT2JqZWN0W2F0dHJpYnV0ZU5hbWVdO1xyXG5cclxuXHRcdFx0XHRcdGlmIChjb25maWcuZXNjYXBlTW9kZSlcclxuXHRcdFx0XHRcdFx0YXR0cmlidXRlVmFsdWUgPSBlc2NhcGVYbWxDaGFycyhhdHRyaWJ1dGVWYWx1ZSk7XHJcblxyXG5cdFx0XHRcdFx0cmVzdWx0U3RyICs9IFwiIFwiICsgYXR0cmlidXRlTmFtZS5zdWJzdHIoY29uZmlnLmF0dHJpYnV0ZVByZWZpeC5sZW5ndGgpICsgXCI9XCI7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGNvbmZpZy51c2VEb3VibGVRdW90ZXMpXHJcblx0XHRcdFx0XHRcdHJlc3VsdFN0ciArPSAnXCInICsgYXR0cmlidXRlVmFsdWUgKyAnXCInO1xyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRyZXN1bHRTdHIgKz0gXCInXCIgKyBhdHRyaWJ1dGVWYWx1ZSArIFwiJ1wiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCFzZWxmQ2xvc2luZylcclxuXHRcdFx0XHRyZXN1bHRTdHIgKz0gXCI+XCI7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXN1bHRTdHIgKz0gXCIgLz5cIjtcclxuXHJcblx0XHRcdHJldHVybiByZXN1bHRTdHI7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gc2VyaWFsaXplRW5kVGFnKGpzT2JqZWN0LCBlbGVtZW50TmFtZSkge1xyXG5cdFx0XHRyZXR1cm4gXCI8L1wiICsgKChqc09iamVjdCAmJiBqc09iamVjdC5fX3ByZWZpeCkgPyAoanNPYmplY3QuX19wcmVmaXggKyBcIjpcIikgOiBcIlwiKSArIGVsZW1lbnROYW1lICsgXCI+XCI7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZW5kc1dpdGgoc3RyLCBzdWZmaXgpIHtcclxuXHRcdFx0cmV0dXJuIHN0ci5pbmRleE9mKHN1ZmZpeCwgc3RyLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGgpICE9PSAtMTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBpc1NwZWNpYWxQcm9wZXJ0eShqc29uT2JqLCBwcm9wZXJ0eU5hbWUpIHtcclxuXHRcdFx0aWYgKChjb25maWcuYXJyYXlBY2Nlc3NGb3JtID09PSBcInByb3BlcnR5XCIgJiYgZW5kc1dpdGgocHJvcGVydHlOYW1lLnRvU3RyaW5nKCksIChcIl9hc0FycmF5XCIpKSlcclxuXHRcdFx0XHR8fCBwcm9wZXJ0eU5hbWUudG9TdHJpbmcoKS5pbmRleE9mKGNvbmZpZy5hdHRyaWJ1dGVQcmVmaXgpID09PSAwXHJcblx0XHRcdFx0fHwgcHJvcGVydHlOYW1lLnRvU3RyaW5nKCkuaW5kZXhPZihcIl9fXCIpID09PSAwXHJcblx0XHRcdFx0fHwgKGpzb25PYmpbcHJvcGVydHlOYW1lXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSlcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBnZXREYXRhRWxlbWVudENvdW50KGpzT2JqZWN0KSB7XHJcblx0XHRcdHZhciBjb3VudCA9IDA7XHJcblxyXG5cdFx0XHRpZiAoanNPYmplY3QgaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBwcm9wZXJ0eU5hbWUgaW4ganNPYmplY3QpIHtcclxuXHRcdFx0XHRcdGlmIChpc1NwZWNpYWxQcm9wZXJ0eShqc09iamVjdCwgcHJvcGVydHlOYW1lKSlcclxuXHRcdFx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRcdFx0Y291bnQrKztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBjb3VudDtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBnZXREYXRhQXR0cmlidXRlTmFtZXMoanNPYmplY3QpIHtcclxuXHRcdFx0dmFyIG5hbWVzID0gW107XHJcblxyXG5cdFx0XHRpZiAoanNPYmplY3QgaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBhdHRyaWJ1dGVOYW1lIGluIGpzT2JqZWN0KSB7XHJcblx0XHRcdFx0XHRpZiAoYXR0cmlidXRlTmFtZS50b1N0cmluZygpLmluZGV4T2YoXCJfX1wiKSA9PT0gLTFcclxuXHRcdFx0XHRcdFx0JiYgYXR0cmlidXRlTmFtZS50b1N0cmluZygpLmluZGV4T2YoY29uZmlnLmF0dHJpYnV0ZVByZWZpeCkgPT09IDApIHtcclxuXHRcdFx0XHRcdFx0bmFtZXMucHVzaChhdHRyaWJ1dGVOYW1lKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBuYW1lcztcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBzZXJpYWxpemVDb21wbGV4VGV4dE5vZGVDb250ZW50cyh0ZXh0Tm9kZSkge1xyXG5cdFx0XHR2YXIgcmVzdWx0ID0gXCJcIjtcclxuXHJcblx0XHRcdGlmICh0ZXh0Tm9kZS5fX2NkYXRhKSB7XHJcblx0XHRcdFx0cmVzdWx0ICs9IFwiPCFbQ0RBVEFbXCIgKyB0ZXh0Tm9kZS5fX2NkYXRhICsgXCJdXT5cIjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHRleHROb2RlLl9fdGV4dCB8fCB0eXBlb2YgKHRleHROb2RlLl9fdGV4dCkgPT09ICdudW1iZXInIHx8IHR5cGVvZiAodGV4dE5vZGUuX190ZXh0KSA9PT0gJ2Jvb2xlYW4nKSB7XHJcblx0XHRcdFx0aWYgKGNvbmZpZy5lc2NhcGVNb2RlKVxyXG5cdFx0XHRcdFx0cmVzdWx0ICs9IGVzY2FwZVhtbENoYXJzKHRleHROb2RlLl9fdGV4dCk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0cmVzdWx0ICs9IHRleHROb2RlLl9fdGV4dDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBzZXJpYWxpemVUZXh0Tm9kZUNvbnRlbnRzKHRleHROb2RlKSB7XHJcblx0XHRcdHZhciByZXN1bHQgPSBcIlwiO1xyXG5cclxuXHRcdFx0aWYgKHRleHROb2RlIGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcblx0XHRcdFx0cmVzdWx0ICs9IHNlcmlhbGl6ZUNvbXBsZXhUZXh0Tm9kZUNvbnRlbnRzKHRleHROb2RlKTtcclxuXHRcdFx0fSBlbHNlIGlmICh0ZXh0Tm9kZSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdGlmIChjb25maWcuZXNjYXBlTW9kZSlcclxuXHRcdFx0XHRcdHJlc3VsdCArPSBlc2NhcGVYbWxDaGFycyh0ZXh0Tm9kZSk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0cmVzdWx0ICs9IHRleHROb2RlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHNlcmlhbGl6ZUFycmF5KGVsZW1lbnRBcnJheSwgZWxlbWVudE5hbWUsIGF0dHJpYnV0ZXMpIHtcclxuXHRcdFx0dmFyIHJlc3VsdCA9IFwiXCI7XHJcblxyXG5cdFx0XHRpZiAoZWxlbWVudEFycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdHJlc3VsdCArPSBzZXJpYWxpemVTdGFydFRhZyhlbGVtZW50QXJyYXksIGVsZW1lbnROYW1lLCBhdHRyaWJ1dGVzLCB0cnVlKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnRBcnJheS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0cmVzdWx0ICs9IHNlcmlhbGl6ZUphdmFTY3JpcHRPYmplY3QoZWxlbWVudEFycmF5W2ldLCBlbGVtZW50TmFtZSwgZ2V0RGF0YUF0dHJpYnV0ZU5hbWVzKGVsZW1lbnRBcnJheVtpXSkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBzZXJpYWxpemVKYXZhU2NyaXB0T2JqZWN0KGVsZW1lbnQsIGVsZW1lbnROYW1lLCBhdHRyaWJ1dGVzKSB7XHJcblx0XHRcdHZhciByZXN1bHQgPSBcIlwiO1xyXG5cclxuXHRcdFx0Ly8gRmlsdGVyIG91dCBlbGVtZW50c1xyXG5cdFx0XHRpZiAoY29uZmlnLmpzQXR0cmlidXRlRmlsdGVyICYmIGNvbmZpZy5qc0F0dHJpYnV0ZUZpbHRlci5jYWxsKG51bGwsIGVsZW1lbnROYW1lLCBlbGVtZW50KSkge1xyXG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gQ29udmVydCBlbGVtZW50XHJcblx0XHRcdGlmIChjb25maWcuanNBdHRyaWJ1dGVDb252ZXJ0ZXIpIHtcclxuXHRcdFx0XHRlbGVtZW50ID0gY29uZmlnLmpzQXR0cmlidXRlQ29udmVydGVyLmNhbGwobnVsbCwgZWxlbWVudE5hbWUsIGVsZW1lbnQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICgoZWxlbWVudCA9PT0gdW5kZWZpbmVkIHx8IGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gJycpICYmIGNvbmZpZy5zZWxmQ2xvc2luZ0VsZW1lbnRzKSB7XHJcblx0XHRcdFx0cmVzdWx0ICs9IHNlcmlhbGl6ZVN0YXJ0VGFnKGVsZW1lbnQsIGVsZW1lbnROYW1lLCBhdHRyaWJ1dGVzLCB0cnVlKTtcclxuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcpIHtcclxuXHRcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGVsZW1lbnQpID09PSAnW29iamVjdCBBcnJheV0nKSB7XHJcblx0XHRcdFx0XHRyZXN1bHQgKz0gc2VyaWFsaXplQXJyYXkoZWxlbWVudCwgZWxlbWVudE5hbWUsIGF0dHJpYnV0ZXMpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIERhdGUpIHtcclxuXHRcdFx0XHRcdHJlc3VsdCArPSBzZXJpYWxpemVTdGFydFRhZyhlbGVtZW50LCBlbGVtZW50TmFtZSwgYXR0cmlidXRlcywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0Ly8gU2VyaWFsaXplIGRhdGVcclxuXHRcdFx0XHRcdHJlc3VsdCArPSBjb25maWcuanNEYXRlVVRDID8gZWxlbWVudC50b1VUQ1N0cmluZygpIDogZWxlbWVudC50b0lTT1N0cmluZygpO1xyXG5cdFx0XHRcdFx0cmVzdWx0ICs9IHNlcmlhbGl6ZUVuZFRhZyhlbGVtZW50LCBlbGVtZW50TmFtZSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHZhciBjaGlsZEVsZW1lbnRDb3VudCA9IGdldERhdGFFbGVtZW50Q291bnQoZWxlbWVudCk7XHJcblx0XHRcdFx0XHRpZiAoY2hpbGRFbGVtZW50Q291bnQgPiAwIHx8IHR5cGVvZiAoZWxlbWVudC5fX3RleHQpID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgKGVsZW1lbnQuX190ZXh0KSA9PT0gJ2Jvb2xlYW4nIHx8IGVsZW1lbnQuX190ZXh0IHx8IGVsZW1lbnQuX19jZGF0YSkge1xyXG5cdFx0XHRcdFx0XHRyZXN1bHQgKz0gc2VyaWFsaXplU3RhcnRUYWcoZWxlbWVudCwgZWxlbWVudE5hbWUsIGF0dHJpYnV0ZXMsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0cmVzdWx0ICs9IHNlcmlhbGl6ZUphdmFTY3JpcHRPYmplY3RDaGlsZHJlbihlbGVtZW50KTtcclxuXHRcdFx0XHRcdFx0cmVzdWx0ICs9IHNlcmlhbGl6ZUVuZFRhZyhlbGVtZW50LCBlbGVtZW50TmFtZSk7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGNvbmZpZy5zZWxmQ2xvc2luZ0VsZW1lbnRzKSB7XHJcblx0XHRcdFx0XHRcdHJlc3VsdCArPSBzZXJpYWxpemVTdGFydFRhZyhlbGVtZW50LCBlbGVtZW50TmFtZSwgYXR0cmlidXRlcywgdHJ1ZSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRyZXN1bHQgKz0gc2VyaWFsaXplU3RhcnRUYWcoZWxlbWVudCwgZWxlbWVudE5hbWUsIGF0dHJpYnV0ZXMsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0cmVzdWx0ICs9IHNlcmlhbGl6ZUVuZFRhZyhlbGVtZW50LCBlbGVtZW50TmFtZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdCArPSBzZXJpYWxpemVTdGFydFRhZyhlbGVtZW50LCBlbGVtZW50TmFtZSwgYXR0cmlidXRlcywgZmFsc2UpO1xyXG5cdFx0XHRcdHJlc3VsdCArPSBzZXJpYWxpemVUZXh0Tm9kZUNvbnRlbnRzKGVsZW1lbnQpO1xyXG5cdFx0XHRcdHJlc3VsdCArPSBzZXJpYWxpemVFbmRUYWcoZWxlbWVudCwgZWxlbWVudE5hbWUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHNlcmlhbGl6ZUphdmFTY3JpcHRPYmplY3RDaGlsZHJlbihqc09iamVjdCkge1xyXG5cdFx0XHR2YXIgcmVzdWx0ID0gXCJcIjtcclxuXHJcblx0XHRcdHZhciBlbGVtZW50Q291bnQgPSBnZXREYXRhRWxlbWVudENvdW50KGpzT2JqZWN0KTtcclxuXHJcblx0XHRcdGlmIChlbGVtZW50Q291bnQgPiAwKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgZWxlbWVudE5hbWUgaW4ganNPYmplY3QpIHtcclxuXHRcdFx0XHRcdGlmIChpc1NwZWNpYWxQcm9wZXJ0eShqc09iamVjdCwgZWxlbWVudE5hbWUpKVxyXG5cdFx0XHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdFx0XHR2YXIgZWxlbWVudCA9IGpzT2JqZWN0W2VsZW1lbnROYW1lXTtcclxuXHRcdFx0XHRcdHZhciBhdHRyaWJ1dGVzID0gZ2V0RGF0YUF0dHJpYnV0ZU5hbWVzKGVsZW1lbnQpO1xyXG5cclxuXHRcdFx0XHRcdHJlc3VsdCArPSBzZXJpYWxpemVKYXZhU2NyaXB0T2JqZWN0KGVsZW1lbnQsIGVsZW1lbnROYW1lLCBhdHRyaWJ1dGVzKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJlc3VsdCArPSBzZXJpYWxpemVUZXh0Tm9kZUNvbnRlbnRzKGpzT2JqZWN0KTtcclxuXHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gcGFyc2VYbWwoeG1sKSB7XHJcblx0XHRcdGlmICh4bWwgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodHlwZW9mIHhtbCAhPT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgcGFyc2VyID0gbnVsbDtcclxuXHRcdFx0dmFyIGRvbU5vZGUgPSBudWxsO1xyXG5cclxuXHRcdFx0aWYgKEN1c3RvbURPTVBhcnNlcikge1xyXG5cdFx0XHRcdC8vIFRoaXMgYnJhbmNoIGlzIHVzZWQgZm9yIG5vZGUuanMsIHdpdGggdGhlIHhtbGRvbSBwYXJzZXIuXHJcblx0XHRcdFx0cGFyc2VyID0gbmV3IEN1c3RvbURPTVBhcnNlcihjb25maWcueG1sZG9tT3B0aW9ucyk7XHJcblxyXG5cdFx0XHRcdGRvbU5vZGUgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHhtbCwgXCJ0ZXh0L3htbFwiKTtcclxuXHRcdFx0fSBlbHNlIGlmICh3aW5kb3cgJiYgd2luZG93LkRPTVBhcnNlcikge1xyXG5cdFx0XHRcdHBhcnNlciA9IG5ldyB3aW5kb3cuRE9NUGFyc2VyKCk7XHJcblx0XHRcdFx0dmFyIHBhcnNlcmVycm9yTlMgPSBudWxsO1xyXG5cclxuXHRcdFx0XHR2YXIgaXNJRVBhcnNlciA9IHdpbmRvdy5BY3RpdmVYT2JqZWN0IHx8IFwiQWN0aXZlWE9iamVjdFwiIGluIHdpbmRvdztcclxuXHJcblx0XHRcdFx0Ly8gSUU5KyBub3cgaXMgaGVyZVxyXG5cdFx0XHRcdGlmICghaXNJRVBhcnNlciAmJiBkb2N1bWVudC5hbGwgJiYgIWRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuXHRcdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRcdHBhcnNlcmVycm9yTlMgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKFwiSU5WQUxJRFwiLCBcInRleHQveG1sXCIpLmNoaWxkTm9kZXNbMF0ubmFtZXNwYWNlVVJJO1xyXG5cdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0XHRcdHBhcnNlcmVycm9yTlMgPSBudWxsO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdGRvbU5vZGUgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHhtbCwgXCJ0ZXh0L3htbFwiKTtcclxuXHRcdFx0XHRcdGlmIChwYXJzZXJlcnJvck5TICE9PSBudWxsICYmIGRvbU5vZGUuZ2V0RWxlbWVudHNCeVRhZ05hbWVOUyhwYXJzZXJlcnJvck5TLCBcInBhcnNlcmVycm9yXCIpLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdFx0ZG9tTm9kZSA9IG51bGw7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0XHRkb21Ob2RlID0gbnVsbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gSUUgOihcclxuXHRcdFx0XHRpZiAoeG1sLmluZGV4T2YoXCI8P1wiKSA9PT0gMCkge1xyXG5cdFx0XHRcdFx0eG1sID0geG1sLnN1YnN0cih4bWwuaW5kZXhPZihcIj8+XCIpICsgMik7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvKiBnbG9iYWwgQWN0aXZlWE9iamVjdCAqL1xyXG5cdFx0XHRcdGRvbU5vZGUgPSBuZXcgQWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxET01cIik7XHJcblx0XHRcdFx0ZG9tTm9kZS5hc3luYyA9IFwiZmFsc2VcIjtcclxuXHRcdFx0XHRkb21Ob2RlLmxvYWRYTUwoeG1sKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGRvbU5vZGU7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5hc0FycmF5ID0gZnVuY3Rpb24gYXNBcnJheShwcm9wKSB7XHJcblx0XHRcdGlmIChwcm9wID09PSB1bmRlZmluZWQgfHwgcHJvcCA9PT0gbnVsbCkge1xyXG5cdFx0XHRcdHJldHVybiBbXTtcclxuXHRcdFx0fSBlbHNlIGlmIChwcm9wIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuXHRcdFx0XHRyZXR1cm4gcHJvcDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gW3Byb3BdO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMudG9YbWxEYXRlVGltZSA9IGZ1bmN0aW9uIHRvWG1sRGF0ZVRpbWUoZHQpIHtcclxuXHRcdFx0aWYgKGR0IGluc3RhbmNlb2YgRGF0ZSkge1xyXG5cdFx0XHRcdHJldHVybiBkdC50b0lTT1N0cmluZygpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiAoZHQpID09PSAnbnVtYmVyJykge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgRGF0ZShkdCkudG9JU09TdHJpbmcoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLmFzRGF0ZVRpbWUgPSBmdW5jdGlvbiBhc0RhdGVUaW1lKHByb3ApIHtcclxuXHRcdFx0aWYgKHR5cGVvZiAocHJvcCkgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0XHRyZXR1cm4geG1sRGF0ZVRpbWVUb0RhdGUocHJvcCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIHByb3A7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0LypcclxuXHRcdFx0SW50ZXJuYWxseSB0aGUgbG9naWMgd29ya3MgaW4gYSBjeWNsZTpcclxuXHRcdFx0RE9NLT5KUyAtIGltcGxlbWVudGVkIGJ5IGN1c3RvbSBsb2dpYyAoZGVzZXJpYWxpemF0aW9uKS5cclxuXHRcdFx0SlMtPlhNTCAtIGltcGxlbWVudGVkIGJ5IGN1c3RvbSBsb2dpYyAoc2VyaWFsaXphdGlvbikuXHJcblx0XHRcdFhNTC0+RE9NIC0gaW1wbGVtZW50ZWQgYnkgYnJvd3Nlci5cclxuXHRcdCovXHJcblxyXG5cdFx0Ly8gVHJhbnNmb3JtbnMgYW4gWE1MIHN0cmluZyBpbnRvIERPTS10cmVlXHJcblx0XHR0aGlzLnhtbDJkb20gPSBmdW5jdGlvbiB4bWwyZG9tKHhtbCkge1xyXG5cdFx0XHRyZXR1cm4gcGFyc2VYbWwoeG1sKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gVHJhbnNmb3JtcyBhIERPTSB0cmVlIHRvIEphdmFTY3JpcHQgb2JqZWN0cy5cclxuXHRcdHRoaXMuZG9tMmpzID0gZnVuY3Rpb24gZG9tMmpzKGRvbU5vZGUpIHtcclxuXHRcdFx0cmV0dXJuIGRlc2VyaWFsaXplRG9tQ2hpbGRyZW4oZG9tTm9kZSwgbnVsbCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8vIFRyYW5zZm9ybXMgSmF2YVNjcmlwdCBvYmplY3RzIHRvIGEgRE9NIHRyZWUuXHJcblx0XHR0aGlzLmpzMmRvbSA9IGZ1bmN0aW9uIGpzMmRvbShqc09iamVjdCkge1xyXG5cdFx0XHR2YXIgeG1sID0gdGhpcy5qczJ4bWwoanNPYmplY3QpO1xyXG5cdFx0XHRyZXR1cm4gcGFyc2VYbWwoeG1sKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gVHJhbnNmb3JtbnMgYW4gWE1MIHN0cmluZyBpbnRvIEphdmFTY3JpcHQgb2JqZWN0cy5cclxuXHRcdHRoaXMueG1sMmpzID0gZnVuY3Rpb24geG1sMmpzKHhtbCkge1xyXG5cdFx0XHR2YXIgZG9tTm9kZSA9IHBhcnNlWG1sKHhtbCk7XHJcblx0XHRcdGlmIChkb21Ob2RlICE9IG51bGwpXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZG9tMmpzKGRvbU5vZGUpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8vIFRyYW5zZm9ybXMgSmF2YVNjcmlwdCBvYmplY3RzIGludG8gYW4gWE1MIHN0cmluZy5cclxuXHRcdHRoaXMuanMyeG1sID0gZnVuY3Rpb24ganMyeG1sKGpzT2JqZWN0KSB7XHJcblx0XHRcdHJldHVybiBzZXJpYWxpemVKYXZhU2NyaXB0T2JqZWN0Q2hpbGRyZW4oanNPYmplY3QpO1xyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLmdldFZlcnNpb24gPSBmdW5jdGlvbiBnZXRWZXJzaW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gVkVSU0lPTjtcclxuXHRcdH07XHJcblx0fTtcclxufSk7XHJcbiIsInZhciBnbG9iYWwkMSA9ICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDpcbiAgICAgICAgICAgIHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6XG4gICAgICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pO1xuXG52YXIgbG9va3VwID0gW107XG52YXIgcmV2TG9va3VwID0gW107XG52YXIgQXJyID0gdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnID8gVWludDhBcnJheSA6IEFycmF5O1xudmFyIGluaXRlZCA9IGZhbHNlO1xuZnVuY3Rpb24gaW5pdCAoKSB7XG4gIGluaXRlZCA9IHRydWU7XG4gIHZhciBjb2RlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nO1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gY29kZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIGxvb2t1cFtpXSA9IGNvZGVbaV07XG4gICAgcmV2TG9va3VwW2NvZGUuY2hhckNvZGVBdChpKV0gPSBpO1xuICB9XG5cbiAgcmV2TG9va3VwWyctJy5jaGFyQ29kZUF0KDApXSA9IDYyO1xuICByZXZMb29rdXBbJ18nLmNoYXJDb2RlQXQoMCldID0gNjM7XG59XG5cbmZ1bmN0aW9uIHRvQnl0ZUFycmF5IChiNjQpIHtcbiAgaWYgKCFpbml0ZWQpIHtcbiAgICBpbml0KCk7XG4gIH1cbiAgdmFyIGksIGosIGwsIHRtcCwgcGxhY2VIb2xkZXJzLCBhcnI7XG4gIHZhciBsZW4gPSBiNjQubGVuZ3RoO1xuXG4gIGlmIChsZW4gJSA0ID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG4gIH1cblxuICAvLyB0aGUgbnVtYmVyIG9mIGVxdWFsIHNpZ25zIChwbGFjZSBob2xkZXJzKVxuICAvLyBpZiB0aGVyZSBhcmUgdHdvIHBsYWNlaG9sZGVycywgdGhhbiB0aGUgdHdvIGNoYXJhY3RlcnMgYmVmb3JlIGl0XG4gIC8vIHJlcHJlc2VudCBvbmUgYnl0ZVxuICAvLyBpZiB0aGVyZSBpcyBvbmx5IG9uZSwgdGhlbiB0aGUgdGhyZWUgY2hhcmFjdGVycyBiZWZvcmUgaXQgcmVwcmVzZW50IDIgYnl0ZXNcbiAgLy8gdGhpcyBpcyBqdXN0IGEgY2hlYXAgaGFjayB0byBub3QgZG8gaW5kZXhPZiB0d2ljZVxuICBwbGFjZUhvbGRlcnMgPSBiNjRbbGVuIC0gMl0gPT09ICc9JyA/IDIgOiBiNjRbbGVuIC0gMV0gPT09ICc9JyA/IDEgOiAwO1xuXG4gIC8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuICBhcnIgPSBuZXcgQXJyKGxlbiAqIDMgLyA0IC0gcGxhY2VIb2xkZXJzKTtcblxuICAvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG4gIGwgPSBwbGFjZUhvbGRlcnMgPiAwID8gbGVuIC0gNCA6IGxlbjtcblxuICB2YXIgTCA9IDA7XG5cbiAgZm9yIChpID0gMCwgaiA9IDA7IGkgPCBsOyBpICs9IDQsIGogKz0gMykge1xuICAgIHRtcCA9IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDE4KSB8IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCAxMikgfCAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPDwgNikgfCByZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDMpXTtcbiAgICBhcnJbTCsrXSA9ICh0bXAgPj4gMTYpICYgMHhGRjtcbiAgICBhcnJbTCsrXSA9ICh0bXAgPj4gOCkgJiAweEZGO1xuICAgIGFycltMKytdID0gdG1wICYgMHhGRjtcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnMgPT09IDIpIHtcbiAgICB0bXAgPSAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAyKSB8IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA+PiA0KTtcbiAgICBhcnJbTCsrXSA9IHRtcCAmIDB4RkY7XG4gIH0gZWxzZSBpZiAocGxhY2VIb2xkZXJzID09PSAxKSB7XG4gICAgdG1wID0gKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTApIHwgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDQpIHwgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildID4+IDIpO1xuICAgIGFycltMKytdID0gKHRtcCA+PiA4KSAmIDB4RkY7XG4gICAgYXJyW0wrK10gPSB0bXAgJiAweEZGO1xuICB9XG5cbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiB0cmlwbGV0VG9CYXNlNjQgKG51bSkge1xuICByZXR1cm4gbG9va3VwW251bSA+PiAxOCAmIDB4M0ZdICsgbG9va3VwW251bSA+PiAxMiAmIDB4M0ZdICsgbG9va3VwW251bSA+PiA2ICYgMHgzRl0gKyBsb29rdXBbbnVtICYgMHgzRl1cbn1cblxuZnVuY3Rpb24gZW5jb2RlQ2h1bmsgKHVpbnQ4LCBzdGFydCwgZW5kKSB7XG4gIHZhciB0bXA7XG4gIHZhciBvdXRwdXQgPSBbXTtcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IDMpIHtcbiAgICB0bXAgPSAodWludDhbaV0gPDwgMTYpICsgKHVpbnQ4W2kgKyAxXSA8PCA4KSArICh1aW50OFtpICsgMl0pO1xuICAgIG91dHB1dC5wdXNoKHRyaXBsZXRUb0Jhc2U2NCh0bXApKTtcbiAgfVxuICByZXR1cm4gb3V0cHV0LmpvaW4oJycpXG59XG5cbmZ1bmN0aW9uIGZyb21CeXRlQXJyYXkgKHVpbnQ4KSB7XG4gIGlmICghaW5pdGVkKSB7XG4gICAgaW5pdCgpO1xuICB9XG4gIHZhciB0bXA7XG4gIHZhciBsZW4gPSB1aW50OC5sZW5ndGg7XG4gIHZhciBleHRyYUJ5dGVzID0gbGVuICUgMzsgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcbiAgdmFyIG91dHB1dCA9ICcnO1xuICB2YXIgcGFydHMgPSBbXTtcbiAgdmFyIG1heENodW5rTGVuZ3RoID0gMTYzODM7IC8vIG11c3QgYmUgbXVsdGlwbGUgb2YgM1xuXG4gIC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbjIgPSBsZW4gLSBleHRyYUJ5dGVzOyBpIDwgbGVuMjsgaSArPSBtYXhDaHVua0xlbmd0aCkge1xuICAgIHBhcnRzLnB1c2goZW5jb2RlQ2h1bmsodWludDgsIGksIChpICsgbWF4Q2h1bmtMZW5ndGgpID4gbGVuMiA/IGxlbjIgOiAoaSArIG1heENodW5rTGVuZ3RoKSkpO1xuICB9XG5cbiAgLy8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuICBpZiAoZXh0cmFCeXRlcyA9PT0gMSkge1xuICAgIHRtcCA9IHVpbnQ4W2xlbiAtIDFdO1xuICAgIG91dHB1dCArPSBsb29rdXBbdG1wID4+IDJdO1xuICAgIG91dHB1dCArPSBsb29rdXBbKHRtcCA8PCA0KSAmIDB4M0ZdO1xuICAgIG91dHB1dCArPSAnPT0nO1xuICB9IGVsc2UgaWYgKGV4dHJhQnl0ZXMgPT09IDIpIHtcbiAgICB0bXAgPSAodWludDhbbGVuIC0gMl0gPDwgOCkgKyAodWludDhbbGVuIC0gMV0pO1xuICAgIG91dHB1dCArPSBsb29rdXBbdG1wID4+IDEwXTtcbiAgICBvdXRwdXQgKz0gbG9va3VwWyh0bXAgPj4gNCkgJiAweDNGXTtcbiAgICBvdXRwdXQgKz0gbG9va3VwWyh0bXAgPDwgMikgJiAweDNGXTtcbiAgICBvdXRwdXQgKz0gJz0nO1xuICB9XG5cbiAgcGFydHMucHVzaChvdXRwdXQpO1xuXG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiByZWFkIChidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtO1xuICB2YXIgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMTtcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDE7XG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMTtcbiAgdmFyIG5CaXRzID0gLTc7XG4gIHZhciBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDA7XG4gIHZhciBkID0gaXNMRSA/IC0xIDogMTtcbiAgdmFyIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV07XG5cbiAgaSArPSBkO1xuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpO1xuICBzID4+PSAoLW5CaXRzKTtcbiAgbkJpdHMgKz0gZUxlbjtcbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IGUgKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBtID0gZSAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKTtcbiAgZSA+Pj0gKC1uQml0cyk7XG4gIG5CaXRzICs9IG1MZW47XG4gIGZvciAoOyBuQml0cyA+IDA7IG0gPSBtICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzO1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSlcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pO1xuICAgIGUgPSBlIC0gZUJpYXM7XG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbilcbn1cblxuZnVuY3Rpb24gd3JpdGUgKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjO1xuICB2YXIgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMTtcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDE7XG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMTtcbiAgdmFyIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKTtcbiAgdmFyIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKTtcbiAgdmFyIGQgPSBpc0xFID8gMSA6IC0xO1xuICB2YXIgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMDtcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKTtcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMDtcbiAgICBlID0gZU1heDtcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMik7XG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tO1xuICAgICAgYyAqPSAyO1xuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gYztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpO1xuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrKztcbiAgICAgIGMgLz0gMjtcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwO1xuICAgICAgZSA9IGVNYXg7XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICh2YWx1ZSAqIGMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pO1xuICAgICAgZSA9IGUgKyBlQmlhcztcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pO1xuICAgICAgZSA9IDA7XG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCkge31cblxuICBlID0gKGUgPDwgbUxlbikgfCBtO1xuICBlTGVuICs9IG1MZW47XG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCkge31cblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjg7XG59XG5cbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG52YXIgSU5TUEVDVF9NQVhfQllURVMgPSA1MDtcblxuLyoqXG4gKiBJZiBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAobW9zdCBjb21wYXRpYmxlLCBldmVuIElFNilcbiAqXG4gKiBCcm93c2VycyB0aGF0IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssIENocm9tZSA3KywgU2FmYXJpIDUuMSssXG4gKiBPcGVyYSAxMS42KywgaU9TIDQuMisuXG4gKlxuICogRHVlIHRvIHZhcmlvdXMgYnJvd3NlciBidWdzLCBzb21ldGltZXMgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiB3aWxsIGJlIHVzZWQgZXZlblxuICogd2hlbiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0eXBlZCBhcnJheXMuXG4gKlxuICogTm90ZTpcbiAqXG4gKiAgIC0gRmlyZWZveCA0LTI5IGxhY2tzIHN1cHBvcnQgZm9yIGFkZGluZyBuZXcgcHJvcGVydGllcyB0byBgVWludDhBcnJheWAgaW5zdGFuY2VzLFxuICogICAgIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4LlxuICpcbiAqICAgLSBDaHJvbWUgOS0xMCBpcyBtaXNzaW5nIHRoZSBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uLlxuICpcbiAqICAgLSBJRTEwIGhhcyBhIGJyb2tlbiBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYXJyYXlzIG9mXG4gKiAgICAgaW5jb3JyZWN0IGxlbmd0aCBpbiBzb21lIHNpdHVhdGlvbnMuXG5cbiAqIFdlIGRldGVjdCB0aGVzZSBidWdneSBicm93c2VycyBhbmQgc2V0IGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGAgdG8gYGZhbHNlYCBzbyB0aGV5XG4gKiBnZXQgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggaXMgc2xvd2VyIGJ1dCBiZWhhdmVzIGNvcnJlY3RseS5cbiAqL1xuQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSBnbG9iYWwkMS5UWVBFRF9BUlJBWV9TVVBQT1JUICE9PSB1bmRlZmluZWRcbiAgPyBnbG9iYWwkMS5UWVBFRF9BUlJBWV9TVVBQT1JUXG4gIDogdHJ1ZTtcblxuLypcbiAqIEV4cG9ydCBrTWF4TGVuZ3RoIGFmdGVyIHR5cGVkIGFycmF5IHN1cHBvcnQgaXMgZGV0ZXJtaW5lZC5cbiAqL1xua01heExlbmd0aCgpO1xuXG5mdW5jdGlvbiBrTWF4TGVuZ3RoICgpIHtcbiAgcmV0dXJuIEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUXG4gICAgPyAweDdmZmZmZmZmXG4gICAgOiAweDNmZmZmZmZmXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlciAodGhhdCwgbGVuZ3RoKSB7XG4gIGlmIChrTWF4TGVuZ3RoKCkgPCBsZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0eXBlZCBhcnJheSBsZW5ndGgnKVxuICB9XG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlLCBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIHRoYXQgPSBuZXcgVWludDhBcnJheShsZW5ndGgpO1xuICAgIHRoYXQuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZTtcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgaWYgKHRoYXQgPT09IG51bGwpIHtcbiAgICAgIHRoYXQgPSBuZXcgQnVmZmVyKGxlbmd0aCk7XG4gICAgfVxuICAgIHRoYXQubGVuZ3RoID0gbGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGhhdmUgdGhlaXJcbiAqIHByb3RvdHlwZSBjaGFuZ2VkIHRvIGBCdWZmZXIucHJvdG90eXBlYC4gRnVydGhlcm1vcmUsIGBCdWZmZXJgIGlzIGEgc3ViY2xhc3Mgb2ZcbiAqIGBVaW50OEFycmF5YCwgc28gdGhlIHJldHVybmVkIGluc3RhbmNlcyB3aWxsIGhhdmUgYWxsIHRoZSBub2RlIGBCdWZmZXJgIG1ldGhvZHNcbiAqIGFuZCB0aGUgYFVpbnQ4QXJyYXlgIG1ldGhvZHMuIFNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHdvcmtzIGFzIGV4cGVjdGVkIC0tIGl0XG4gKiByZXR1cm5zIGEgc2luZ2xlIG9jdGV0LlxuICpcbiAqIFRoZSBgVWludDhBcnJheWAgcHJvdG90eXBlIHJlbWFpbnMgdW5tb2RpZmllZC5cbiAqL1xuXG5mdW5jdGlvbiBCdWZmZXIgKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgISh0aGlzIGluc3RhbmNlb2YgQnVmZmVyKSkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgLy8gQ29tbW9uIGNhc2UuXG4gIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgIGlmICh0eXBlb2YgZW5jb2RpbmdPck9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0lmIGVuY29kaW5nIGlzIHNwZWNpZmllZCB0aGVuIHRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nJ1xuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gYWxsb2NVbnNhZmUodGhpcywgYXJnKVxuICB9XG4gIHJldHVybiBmcm9tKHRoaXMsIGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucG9vbFNpemUgPSA4MTkyOyAvLyBub3QgdXNlZCBieSB0aGlzIGltcGxlbWVudGF0aW9uXG5cbi8vIFRPRE86IExlZ2FjeSwgbm90IG5lZWRlZCBhbnltb3JlLiBSZW1vdmUgaW4gbmV4dCBtYWpvciB2ZXJzaW9uLlxuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gKGFycikge1xuICBhcnIuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZTtcbiAgcmV0dXJuIGFyclxufTtcblxuZnVuY3Rpb24gZnJvbSAodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBhIG51bWJlcicpXG4gIH1cblxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcih0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZnJvbVN0cmluZyh0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldClcbiAgfVxuXG4gIHJldHVybiBmcm9tT2JqZWN0KHRoYXQsIHZhbHVlKVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uYWxseSBlcXVpdmFsZW50IHRvIEJ1ZmZlcihhcmcsIGVuY29kaW5nKSBidXQgdGhyb3dzIGEgVHlwZUVycm9yXG4gKiBpZiB2YWx1ZSBpcyBhIG51bWJlci5cbiAqIEJ1ZmZlci5mcm9tKHN0clssIGVuY29kaW5nXSlcbiAqIEJ1ZmZlci5mcm9tKGFycmF5KVxuICogQnVmZmVyLmZyb20oYnVmZmVyKVxuICogQnVmZmVyLmZyb20oYXJyYXlCdWZmZXJbLCBieXRlT2Zmc2V0WywgbGVuZ3RoXV0pXG4gKiovXG5CdWZmZXIuZnJvbSA9IGZ1bmN0aW9uICh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBmcm9tKG51bGwsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59O1xuXG5pZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgQnVmZmVyLnByb3RvdHlwZS5fX3Byb3RvX18gPSBVaW50OEFycmF5LnByb3RvdHlwZTtcbiAgQnVmZmVyLl9fcHJvdG9fXyA9IFVpbnQ4QXJyYXk7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wuc3BlY2llcyAmJlxuICAgICAgQnVmZmVyW1N5bWJvbC5zcGVjaWVzXSA9PT0gQnVmZmVyKSA7XG59XG5cbmZ1bmN0aW9uIGFzc2VydFNpemUgKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3QgYmUgYSBudW1iZXInKVxuICB9IGVsc2UgaWYgKHNpemUgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIG5lZ2F0aXZlJylcbiAgfVxufVxuXG5mdW5jdGlvbiBhbGxvYyAodGhhdCwgc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKTtcbiAgaWYgKHNpemUgPD0gMCkge1xuICAgIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbiAgfVxuICBpZiAoZmlsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT25seSBwYXkgYXR0ZW50aW9uIHRvIGVuY29kaW5nIGlmIGl0J3MgYSBzdHJpbmcuIFRoaXNcbiAgICAvLyBwcmV2ZW50cyBhY2NpZGVudGFsbHkgc2VuZGluZyBpbiBhIG51bWJlciB0aGF0IHdvdWxkXG4gICAgLy8gYmUgaW50ZXJwcmV0dGVkIGFzIGEgc3RhcnQgb2Zmc2V0LlxuICAgIHJldHVybiB0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnXG4gICAgICA/IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwsIGVuY29kaW5nKVxuICAgICAgOiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSkuZmlsbChmaWxsKVxuICB9XG4gIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiBhbGxvYyhzaXplWywgZmlsbFssIGVuY29kaW5nXV0pXG4gKiovXG5CdWZmZXIuYWxsb2MgPSBmdW5jdGlvbiAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGFsbG9jKG51bGwsIHNpemUsIGZpbGwsIGVuY29kaW5nKVxufTtcblxuZnVuY3Rpb24gYWxsb2NVbnNhZmUgKHRoYXQsIHNpemUpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKTtcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplIDwgMCA/IDAgOiBjaGVja2VkKHNpemUpIHwgMCk7XG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgdGhhdFtpXSA9IDA7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbi8qKlxuICogRXF1aXZhbGVudCB0byBCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqICovXG5CdWZmZXIuYWxsb2NVbnNhZmUgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUobnVsbCwgc2l6ZSlcbn07XG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gU2xvd0J1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICovXG5CdWZmZXIuYWxsb2NVbnNhZmVTbG93ID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKG51bGwsIHNpemUpXG59O1xuXG5mdW5jdGlvbiBmcm9tU3RyaW5nICh0aGF0LCBzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnIHx8IGVuY29kaW5nID09PSAnJykge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnO1xuICB9XG5cbiAgaWYgKCFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImVuY29kaW5nXCIgbXVzdCBiZSBhIHZhbGlkIHN0cmluZyBlbmNvZGluZycpXG4gIH1cblxuICB2YXIgbGVuZ3RoID0gYnl0ZUxlbmd0aChzdHJpbmcsIGVuY29kaW5nKSB8IDA7XG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKTtcblxuICB2YXIgYWN0dWFsID0gdGhhdC53cml0ZShzdHJpbmcsIGVuY29kaW5nKTtcblxuICBpZiAoYWN0dWFsICE9PSBsZW5ndGgpIHtcbiAgICAvLyBXcml0aW5nIGEgaGV4IHN0cmluZywgZm9yIGV4YW1wbGUsIHRoYXQgY29udGFpbnMgaW52YWxpZCBjaGFyYWN0ZXJzIHdpbGxcbiAgICAvLyBjYXVzZSBldmVyeXRoaW5nIGFmdGVyIHRoZSBmaXJzdCBpbnZhbGlkIGNoYXJhY3RlciB0byBiZSBpZ25vcmVkLiAoZS5nLlxuICAgIC8vICdhYnh4Y2QnIHdpbGwgYmUgdHJlYXRlZCBhcyAnYWInKVxuICAgIHRoYXQgPSB0aGF0LnNsaWNlKDAsIGFjdHVhbCk7XG4gIH1cblxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlMaWtlICh0aGF0LCBhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoIDwgMCA/IDAgOiBjaGVja2VkKGFycmF5Lmxlbmd0aCkgfCAwO1xuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGF0W2ldID0gYXJyYXlbaV0gJiAyNTU7XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5QnVmZmVyICh0aGF0LCBhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gIGFycmF5LmJ5dGVMZW5ndGg7IC8vIHRoaXMgdGhyb3dzIGlmIGBhcnJheWAgaXMgbm90IGEgdmFsaWQgQXJyYXlCdWZmZXJcblxuICBpZiAoYnl0ZU9mZnNldCA8IDAgfHwgYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnb2Zmc2V0XFwnIGlzIG91dCBvZiBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0ICsgKGxlbmd0aCB8fCAwKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdsZW5ndGhcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYnl0ZU9mZnNldCA9PT0gdW5kZWZpbmVkICYmIGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSk7XG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0KTtcbiAgfSBlbHNlIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuICB9XG5cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IGFycmF5O1xuICAgIHRoYXQuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZTtcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgdGhhdCA9IGZyb21BcnJheUxpa2UodGhhdCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21PYmplY3QgKHRoYXQsIG9iaikge1xuICBpZiAoaW50ZXJuYWxJc0J1ZmZlcihvYmopKSB7XG4gICAgdmFyIGxlbiA9IGNoZWNrZWQob2JqLmxlbmd0aCkgfCAwO1xuICAgIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuKTtcblxuICAgIGlmICh0aGF0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoYXRcbiAgICB9XG5cbiAgICBvYmouY29weSh0aGF0LCAwLCAwLCBsZW4pO1xuICAgIHJldHVybiB0aGF0XG4gIH1cblxuICBpZiAob2JqKSB7XG4gICAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIG9iai5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikgfHwgJ2xlbmd0aCcgaW4gb2JqKSB7XG4gICAgICBpZiAodHlwZW9mIG9iai5sZW5ndGggIT09ICdudW1iZXInIHx8IGlzbmFuKG9iai5sZW5ndGgpKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgMClcbiAgICAgIH1cbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iailcbiAgICB9XG5cbiAgICBpZiAob2JqLnR5cGUgPT09ICdCdWZmZXInICYmIGlzQXJyYXkob2JqLmRhdGEpKSB7XG4gICAgICByZXR1cm4gZnJvbUFycmF5TGlrZSh0aGF0LCBvYmouZGF0YSlcbiAgICB9XG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nLCBCdWZmZXIsIEFycmF5QnVmZmVyLCBBcnJheSwgb3IgYXJyYXktbGlrZSBvYmplY3QuJylcbn1cblxuZnVuY3Rpb24gY2hlY2tlZCAobGVuZ3RoKSB7XG4gIC8vIE5vdGU6IGNhbm5vdCB1c2UgYGxlbmd0aCA8IGtNYXhMZW5ndGgoKWAgaGVyZSBiZWNhdXNlIHRoYXQgZmFpbHMgd2hlblxuICAvLyBsZW5ndGggaXMgTmFOICh3aGljaCBpcyBvdGhlcndpc2UgY29lcmNlZCB0byB6ZXJvLilcbiAgaWYgKGxlbmd0aCA+PSBrTWF4TGVuZ3RoKCkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byBhbGxvY2F0ZSBCdWZmZXIgbGFyZ2VyIHRoYW4gbWF4aW11bSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAnc2l6ZTogMHgnICsga01heExlbmd0aCgpLnRvU3RyaW5nKDE2KSArICcgYnl0ZXMnKVxuICB9XG4gIHJldHVybiBsZW5ndGggfCAwXG59XG5CdWZmZXIuaXNCdWZmZXIgPSBpc0J1ZmZlcjtcbmZ1bmN0aW9uIGludGVybmFsSXNCdWZmZXIgKGIpIHtcbiAgcmV0dXJuICEhKGIgIT0gbnVsbCAmJiBiLl9pc0J1ZmZlcilcbn1cblxuQnVmZmVyLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlIChhLCBiKSB7XG4gIGlmICghaW50ZXJuYWxJc0J1ZmZlcihhKSB8fCAhaW50ZXJuYWxJc0J1ZmZlcihiKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyBtdXN0IGJlIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGEgPT09IGIpIHJldHVybiAwXG5cbiAgdmFyIHggPSBhLmxlbmd0aDtcbiAgdmFyIHkgPSBiLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW47ICsraSkge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICB4ID0gYVtpXTtcbiAgICAgIHkgPSBiW2ldO1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59O1xuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIGlzRW5jb2RpbmcgKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufTtcblxuQnVmZmVyLmNvbmNhdCA9IGZ1bmN0aW9uIGNvbmNhdCAobGlzdCwgbGVuZ3RoKSB7XG4gIGlmICghaXNBcnJheShsaXN0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gIH1cblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gQnVmZmVyLmFsbG9jKDApXG4gIH1cblxuICB2YXIgaTtcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbGVuZ3RoID0gMDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgbGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIHZhciBidWZmZXIgPSBCdWZmZXIuYWxsb2NVbnNhZmUobGVuZ3RoKTtcbiAgdmFyIHBvcyA9IDA7XG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGJ1ZiA9IGxpc3RbaV07XG4gICAgaWYgKCFpbnRlcm5hbElzQnVmZmVyKGJ1ZikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gICAgfVxuICAgIGJ1Zi5jb3B5KGJ1ZmZlciwgcG9zKTtcbiAgICBwb3MgKz0gYnVmLmxlbmd0aDtcbiAgfVxuICByZXR1cm4gYnVmZmVyXG59O1xuXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmIChpbnRlcm5hbElzQnVmZmVyKHN0cmluZykpIHtcbiAgICByZXR1cm4gc3RyaW5nLmxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBBcnJheUJ1ZmZlci5pc1ZpZXcgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIChBcnJheUJ1ZmZlci5pc1ZpZXcoc3RyaW5nKSB8fCBzdHJpbmcgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikpIHtcbiAgICByZXR1cm4gc3RyaW5nLmJ5dGVMZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICBzdHJpbmcgPSAnJyArIHN0cmluZztcbiAgfVxuXG4gIHZhciBsZW4gPSBzdHJpbmcubGVuZ3RoO1xuICBpZiAobGVuID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIFVzZSBhIGZvciBsb29wIHRvIGF2b2lkIHJlY3Vyc2lvblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZTtcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGVuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiBsZW4gKiAyXG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gbGVuID4+PiAxXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGggLy8gYXNzdW1lIHV0ZjhcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuQnVmZmVyLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoO1xuXG5mdW5jdGlvbiBzbG93VG9TdHJpbmcgKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlO1xuXG4gIC8vIE5vIG5lZWQgdG8gdmVyaWZ5IHRoYXQgXCJ0aGlzLmxlbmd0aCA8PSBNQVhfVUlOVDMyXCIgc2luY2UgaXQncyBhIHJlYWQtb25seVxuICAvLyBwcm9wZXJ0eSBvZiBhIHR5cGVkIGFycmF5LlxuXG4gIC8vIFRoaXMgYmVoYXZlcyBuZWl0aGVyIGxpa2UgU3RyaW5nIG5vciBVaW50OEFycmF5IGluIHRoYXQgd2Ugc2V0IHN0YXJ0L2VuZFxuICAvLyB0byB0aGVpciB1cHBlci9sb3dlciBib3VuZHMgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBvdXQgb2YgcmFuZ2UuXG4gIC8vIHVuZGVmaW5lZCBpcyBoYW5kbGVkIHNwZWNpYWxseSBhcyBwZXIgRUNNQS0yNjIgNnRoIEVkaXRpb24sXG4gIC8vIFNlY3Rpb24gMTMuMy4zLjcgUnVudGltZSBTZW1hbnRpY3M6IEtleWVkQmluZGluZ0luaXRpYWxpemF0aW9uLlxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCB8fCBzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IDA7XG4gIH1cbiAgLy8gUmV0dXJuIGVhcmx5IGlmIHN0YXJ0ID4gdGhpcy5sZW5ndGguIERvbmUgaGVyZSB0byBwcmV2ZW50IHBvdGVudGlhbCB1aW50MzJcbiAgLy8gY29lcmNpb24gZmFpbCBiZWxvdy5cbiAgaWYgKHN0YXJ0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCB8fCBlbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIGVuZCA9IHRoaXMubGVuZ3RoO1xuICB9XG5cbiAgaWYgKGVuZCA8PSAwKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICAvLyBGb3JjZSBjb2Vyc2lvbiB0byB1aW50MzIuIFRoaXMgd2lsbCBhbHNvIGNvZXJjZSBmYWxzZXkvTmFOIHZhbHVlcyB0byAwLlxuICBlbmQgPj4+PSAwO1xuICBzdGFydCA+Pj49IDA7XG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCc7XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdXRmMTZsZVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9IChlbmNvZGluZyArICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWU7XG4gICAgfVxuICB9XG59XG5cbi8vIFRoZSBwcm9wZXJ0eSBpcyB1c2VkIGJ5IGBCdWZmZXIuaXNCdWZmZXJgIGFuZCBgaXMtYnVmZmVyYCAoaW4gU2FmYXJpIDUtNykgdG8gZGV0ZWN0XG4vLyBCdWZmZXIgaW5zdGFuY2VzLlxuQnVmZmVyLnByb3RvdHlwZS5faXNCdWZmZXIgPSB0cnVlO1xuXG5mdW5jdGlvbiBzd2FwIChiLCBuLCBtKSB7XG4gIHZhciBpID0gYltuXTtcbiAgYltuXSA9IGJbbV07XG4gIGJbbV0gPSBpO1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAxNiA9IGZ1bmN0aW9uIHN3YXAxNiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aDtcbiAgaWYgKGxlbiAlIDIgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDE2LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDIpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAxKTtcbiAgfVxuICByZXR1cm4gdGhpc1xufTtcblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMzIgPSBmdW5jdGlvbiBzd2FwMzIgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGg7XG4gIGlmIChsZW4gJSA0ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAzMi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMyk7XG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDIpO1xuICB9XG4gIHJldHVybiB0aGlzXG59O1xuXG5CdWZmZXIucHJvdG90eXBlLnN3YXA2NCA9IGZ1bmN0aW9uIHN3YXA2NCAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aDtcbiAgaWYgKGxlbiAlIDggIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDY0LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDgpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyA3KTtcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgNik7XG4gICAgc3dhcCh0aGlzLCBpICsgMiwgaSArIDUpO1xuICAgIHN3YXAodGhpcywgaSArIDMsIGkgKyA0KTtcbiAgfVxuICByZXR1cm4gdGhpc1xufTtcblxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoIHwgMDtcbiAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICcnXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIDAsIGxlbmd0aClcbiAgcmV0dXJuIHNsb3dUb1N0cmluZy5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG59O1xuXG5CdWZmZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyAoYikge1xuICBpZiAoIWludGVybmFsSXNCdWZmZXIoYikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICBpZiAodGhpcyA9PT0gYikgcmV0dXJuIHRydWVcbiAgcmV0dXJuIEJ1ZmZlci5jb21wYXJlKHRoaXMsIGIpID09PSAwXG59O1xuXG5CdWZmZXIucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbiBpbnNwZWN0ICgpIHtcbiAgdmFyIHN0ciA9ICcnO1xuICB2YXIgbWF4ID0gSU5TUEVDVF9NQVhfQllURVM7XG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBzdHIgPSB0aGlzLnRvU3RyaW5nKCdoZXgnLCAwLCBtYXgpLm1hdGNoKC8uezJ9L2cpLmpvaW4oJyAnKTtcbiAgICBpZiAodGhpcy5sZW5ndGggPiBtYXgpIHN0ciArPSAnIC4uLiAnO1xuICB9XG4gIHJldHVybiAnPEJ1ZmZlciAnICsgc3RyICsgJz4nXG59O1xuXG5CdWZmZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlICh0YXJnZXQsIHN0YXJ0LCBlbmQsIHRoaXNTdGFydCwgdGhpc0VuZCkge1xuICBpZiAoIWludGVybmFsSXNCdWZmZXIodGFyZ2V0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICB9XG5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGFydCA9IDA7XG4gIH1cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5kID0gdGFyZ2V0ID8gdGFyZ2V0Lmxlbmd0aCA6IDA7XG4gIH1cbiAgaWYgKHRoaXNTdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc1N0YXJ0ID0gMDtcbiAgfVxuICBpZiAodGhpc0VuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc0VuZCA9IHRoaXMubGVuZ3RoO1xuICB9XG5cbiAgaWYgKHN0YXJ0IDwgMCB8fCBlbmQgPiB0YXJnZXQubGVuZ3RoIHx8IHRoaXNTdGFydCA8IDAgfHwgdGhpc0VuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ291dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQgJiYgc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBpZiAoc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDFcbiAgfVxuXG4gIHN0YXJ0ID4+Pj0gMDtcbiAgZW5kID4+Pj0gMDtcbiAgdGhpc1N0YXJ0ID4+Pj0gMDtcbiAgdGhpc0VuZCA+Pj49IDA7XG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCkgcmV0dXJuIDBcblxuICB2YXIgeCA9IHRoaXNFbmQgLSB0aGlzU3RhcnQ7XG4gIHZhciB5ID0gZW5kIC0gc3RhcnQ7XG4gIHZhciBsZW4gPSBNYXRoLm1pbih4LCB5KTtcblxuICB2YXIgdGhpc0NvcHkgPSB0aGlzLnNsaWNlKHRoaXNTdGFydCwgdGhpc0VuZCk7XG4gIHZhciB0YXJnZXRDb3B5ID0gdGFyZ2V0LnNsaWNlKHN0YXJ0LCBlbmQpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAodGhpc0NvcHlbaV0gIT09IHRhcmdldENvcHlbaV0pIHtcbiAgICAgIHggPSB0aGlzQ29weVtpXTtcbiAgICAgIHkgPSB0YXJnZXRDb3B5W2ldO1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59O1xuXG4vLyBGaW5kcyBlaXRoZXIgdGhlIGZpcnN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA+PSBgYnl0ZU9mZnNldGAsXG4vLyBPUiB0aGUgbGFzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPD0gYGJ5dGVPZmZzZXRgLlxuLy9cbi8vIEFyZ3VtZW50czpcbi8vIC0gYnVmZmVyIC0gYSBCdWZmZXIgdG8gc2VhcmNoXG4vLyAtIHZhbCAtIGEgc3RyaW5nLCBCdWZmZXIsIG9yIG51bWJlclxuLy8gLSBieXRlT2Zmc2V0IC0gYW4gaW5kZXggaW50byBgYnVmZmVyYDsgd2lsbCBiZSBjbGFtcGVkIHRvIGFuIGludDMyXG4vLyAtIGVuY29kaW5nIC0gYW4gb3B0aW9uYWwgZW5jb2RpbmcsIHJlbGV2YW50IGlzIHZhbCBpcyBhIHN0cmluZ1xuLy8gLSBkaXIgLSB0cnVlIGZvciBpbmRleE9mLCBmYWxzZSBmb3IgbGFzdEluZGV4T2ZcbmZ1bmN0aW9uIGJpZGlyZWN0aW9uYWxJbmRleE9mIChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICAvLyBFbXB0eSBidWZmZXIgbWVhbnMgbm8gbWF0Y2hcbiAgaWYgKGJ1ZmZlci5sZW5ndGggPT09IDApIHJldHVybiAtMVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0XG4gIGlmICh0eXBlb2YgYnl0ZU9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IGJ5dGVPZmZzZXQ7XG4gICAgYnl0ZU9mZnNldCA9IDA7XG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA+IDB4N2ZmZmZmZmYpIHtcbiAgICBieXRlT2Zmc2V0ID0gMHg3ZmZmZmZmZjtcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgLTB4ODAwMDAwMDApIHtcbiAgICBieXRlT2Zmc2V0ID0gLTB4ODAwMDAwMDA7XG4gIH1cbiAgYnl0ZU9mZnNldCA9ICtieXRlT2Zmc2V0OyAgLy8gQ29lcmNlIHRvIE51bWJlci5cbiAgaWYgKGlzTmFOKGJ5dGVPZmZzZXQpKSB7XG4gICAgLy8gYnl0ZU9mZnNldDogaXQgaXQncyB1bmRlZmluZWQsIG51bGwsIE5hTiwgXCJmb29cIiwgZXRjLCBzZWFyY2ggd2hvbGUgYnVmZmVyXG4gICAgYnl0ZU9mZnNldCA9IGRpciA/IDAgOiAoYnVmZmVyLmxlbmd0aCAtIDEpO1xuICB9XG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXQ6IG5lZ2F0aXZlIG9mZnNldHMgc3RhcnQgZnJvbSB0aGUgZW5kIG9mIHRoZSBidWZmZXJcbiAgaWYgKGJ5dGVPZmZzZXQgPCAwKSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCArIGJ5dGVPZmZzZXQ7XG4gIGlmIChieXRlT2Zmc2V0ID49IGJ1ZmZlci5sZW5ndGgpIHtcbiAgICBpZiAoZGlyKSByZXR1cm4gLTFcbiAgICBlbHNlIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoIC0gMTtcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgMCkge1xuICAgIGlmIChkaXIpIGJ5dGVPZmZzZXQgPSAwO1xuICAgIGVsc2UgcmV0dXJuIC0xXG4gIH1cblxuICAvLyBOb3JtYWxpemUgdmFsXG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIHZhbCA9IEJ1ZmZlci5mcm9tKHZhbCwgZW5jb2RpbmcpO1xuICB9XG5cbiAgLy8gRmluYWxseSwgc2VhcmNoIGVpdGhlciBpbmRleE9mIChpZiBkaXIgaXMgdHJ1ZSkgb3IgbGFzdEluZGV4T2ZcbiAgaWYgKGludGVybmFsSXNCdWZmZXIodmFsKSkge1xuICAgIC8vIFNwZWNpYWwgY2FzZTogbG9va2luZyBmb3IgZW1wdHkgc3RyaW5nL2J1ZmZlciBhbHdheXMgZmFpbHNcbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAweEZGOyAvLyBTZWFyY2ggZm9yIGEgYnl0ZSB2YWx1ZSBbMC0yNTVdXG4gICAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmXG4gICAgICAgIHR5cGVvZiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAoZGlyKSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUubGFzdEluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIFsgdmFsIF0sIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWwgbXVzdCBiZSBzdHJpbmcsIG51bWJlciBvciBCdWZmZXInKVxufVxuXG5mdW5jdGlvbiBhcnJheUluZGV4T2YgKGFyciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIHZhciBpbmRleFNpemUgPSAxO1xuICB2YXIgYXJyTGVuZ3RoID0gYXJyLmxlbmd0aDtcbiAgdmFyIHZhbExlbmd0aCA9IHZhbC5sZW5ndGg7XG5cbiAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoZW5jb2RpbmcgPT09ICd1Y3MyJyB8fCBlbmNvZGluZyA9PT0gJ3Vjcy0yJyB8fFxuICAgICAgICBlbmNvZGluZyA9PT0gJ3V0ZjE2bGUnIHx8IGVuY29kaW5nID09PSAndXRmLTE2bGUnKSB7XG4gICAgICBpZiAoYXJyLmxlbmd0aCA8IDIgfHwgdmFsLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9XG4gICAgICBpbmRleFNpemUgPSAyO1xuICAgICAgYXJyTGVuZ3RoIC89IDI7XG4gICAgICB2YWxMZW5ndGggLz0gMjtcbiAgICAgIGJ5dGVPZmZzZXQgLz0gMjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWFkIChidWYsIGkpIHtcbiAgICBpZiAoaW5kZXhTaXplID09PSAxKSB7XG4gICAgICByZXR1cm4gYnVmW2ldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidWYucmVhZFVJbnQxNkJFKGkgKiBpbmRleFNpemUpXG4gICAgfVxuICB9XG5cbiAgdmFyIGk7XG4gIGlmIChkaXIpIHtcbiAgICB2YXIgZm91bmRJbmRleCA9IC0xO1xuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPCBhcnJMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHJlYWQoYXJyLCBpKSA9PT0gcmVhZCh2YWwsIGZvdW5kSW5kZXggPT09IC0xID8gMCA6IGkgLSBmb3VuZEluZGV4KSkge1xuICAgICAgICBpZiAoZm91bmRJbmRleCA9PT0gLTEpIGZvdW5kSW5kZXggPSBpO1xuICAgICAgICBpZiAoaSAtIGZvdW5kSW5kZXggKyAxID09PSB2YWxMZW5ndGgpIHJldHVybiBmb3VuZEluZGV4ICogaW5kZXhTaXplXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZm91bmRJbmRleCAhPT0gLTEpIGkgLT0gaSAtIGZvdW5kSW5kZXg7XG4gICAgICAgIGZvdW5kSW5kZXggPSAtMTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGJ5dGVPZmZzZXQgKyB2YWxMZW5ndGggPiBhcnJMZW5ndGgpIGJ5dGVPZmZzZXQgPSBhcnJMZW5ndGggLSB2YWxMZW5ndGg7XG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBmb3VuZCA9IHRydWU7XG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbExlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChyZWFkKGFyciwgaSArIGopICE9PSByZWFkKHZhbCwgaikpIHtcbiAgICAgICAgICBmb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChmb3VuZCkgcmV0dXJuIGlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmNsdWRlcyA9IGZ1bmN0aW9uIGluY2x1ZGVzICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiB0aGlzLmluZGV4T2YodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykgIT09IC0xXG59O1xuXG5CdWZmZXIucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCB0cnVlKVxufTtcblxuQnVmZmVyLnByb3RvdHlwZS5sYXN0SW5kZXhPZiA9IGZ1bmN0aW9uIGxhc3RJbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBmYWxzZSlcbn07XG5cbmZ1bmN0aW9uIGhleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMDtcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXQ7XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nO1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpO1xuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZztcbiAgICB9XG4gIH1cblxuICAvLyBtdXN0IGJlIGFuIGV2ZW4gbnVtYmVyIG9mIGRpZ2l0c1xuICB2YXIgc3RyTGVuID0gc3RyaW5nLmxlbmd0aDtcbiAgaWYgKHN0ckxlbiAlIDIgIT09IDApIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgaGV4IHN0cmluZycpXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyO1xuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgcGFyc2VkID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KTtcbiAgICBpZiAoaXNOYU4ocGFyc2VkKSkgcmV0dXJuIGlcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSBwYXJzZWQ7XG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBsYXRpbjFXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBhc2NpaVdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIHVjczJXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZSAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZylcbiAgaWYgKG9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCc7XG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XG4gICAgb2Zmc2V0ID0gMDtcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IG9mZnNldDtcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aDtcbiAgICBvZmZzZXQgPSAwO1xuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBvZmZzZXRbLCBsZW5ndGhdWywgZW5jb2RpbmddKVxuICB9IGVsc2UgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfCAwO1xuICAgIGlmIChpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBsZW5ndGggPSBsZW5ndGggfCAwO1xuICAgICAgaWYgKGVuY29kaW5nID09PSB1bmRlZmluZWQpIGVuY29kaW5nID0gJ3V0ZjgnO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aDtcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIC8vIGxlZ2FjeSB3cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXQsIGxlbmd0aCkgLSByZW1vdmUgaW4gdjAuMTNcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnQnVmZmVyLndyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldFssIGxlbmd0aF0pIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQnXG4gICAgKVxuICB9XG5cbiAgdmFyIHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0O1xuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgfHwgbGVuZ3RoID4gcmVtYWluaW5nKSBsZW5ndGggPSByZW1haW5pbmc7XG5cbiAgaWYgKChzdHJpbmcubGVuZ3RoID4gMCAmJiAobGVuZ3RoIDwgMCB8fCBvZmZzZXQgPCAwKSkgfHwgb2Zmc2V0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byB3cml0ZSBvdXRzaWRlIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCc7XG5cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2U7XG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIC8vIFdhcm5pbmc6IG1heExlbmd0aCBub3QgdGFrZW4gaW50byBhY2NvdW50IGluIGJhc2U2NFdyaXRlXG4gICAgICAgIHJldHVybiBiYXNlNjRXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdWNzMldyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWU7XG4gICAgfVxuICB9XG59O1xuXG5CdWZmZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn07XG5cbmZ1bmN0aW9uIGJhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBmcm9tQnl0ZUFycmF5KGJ1ZilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKTtcbiAgdmFyIHJlcyA9IFtdO1xuXG4gIHZhciBpID0gc3RhcnQ7XG4gIHdoaWxlIChpIDwgZW5kKSB7XG4gICAgdmFyIGZpcnN0Qnl0ZSA9IGJ1ZltpXTtcbiAgICB2YXIgY29kZVBvaW50ID0gbnVsbDtcbiAgICB2YXIgYnl0ZXNQZXJTZXF1ZW5jZSA9IChmaXJzdEJ5dGUgPiAweEVGKSA/IDRcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4REYpID8gM1xuICAgICAgOiAoZmlyc3RCeXRlID4gMHhCRikgPyAyXG4gICAgICA6IDE7XG5cbiAgICBpZiAoaSArIGJ5dGVzUGVyU2VxdWVuY2UgPD0gZW5kKSB7XG4gICAgICB2YXIgc2Vjb25kQnl0ZSwgdGhpcmRCeXRlLCBmb3VydGhCeXRlLCB0ZW1wQ29kZVBvaW50O1xuXG4gICAgICBzd2l0Y2ggKGJ5dGVzUGVyU2VxdWVuY2UpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmIChmaXJzdEJ5dGUgPCAweDgwKSB7XG4gICAgICAgICAgICBjb2RlUG9pbnQgPSBmaXJzdEJ5dGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXTtcbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweDFGKSA8PCAweDYgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpO1xuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXTtcbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdO1xuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4QyB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKHRoaXJkQnl0ZSAmIDB4M0YpO1xuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGRiAmJiAodGVtcENvZGVQb2ludCA8IDB4RDgwMCB8fCB0ZW1wQ29kZVBvaW50ID4gMHhERkZGKSkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV07XG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXTtcbiAgICAgICAgICBmb3VydGhCeXRlID0gYnVmW2kgKyAzXTtcbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKGZvdXJ0aEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4MTIgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4QyB8ICh0aGlyZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAoZm91cnRoQnl0ZSAmIDB4M0YpO1xuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweEZGRkYgJiYgdGVtcENvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2RlUG9pbnQgPT09IG51bGwpIHtcbiAgICAgIC8vIHdlIGRpZCBub3QgZ2VuZXJhdGUgYSB2YWxpZCBjb2RlUG9pbnQgc28gaW5zZXJ0IGFcbiAgICAgIC8vIHJlcGxhY2VtZW50IGNoYXIgKFUrRkZGRCkgYW5kIGFkdmFuY2Ugb25seSAxIGJ5dGVcbiAgICAgIGNvZGVQb2ludCA9IDB4RkZGRDtcbiAgICAgIGJ5dGVzUGVyU2VxdWVuY2UgPSAxO1xuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50ID4gMHhGRkZGKSB7XG4gICAgICAvLyBlbmNvZGUgdG8gdXRmMTYgKHN1cnJvZ2F0ZSBwYWlyIGRhbmNlKVxuICAgICAgY29kZVBvaW50IC09IDB4MTAwMDA7XG4gICAgICByZXMucHVzaChjb2RlUG9pbnQgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApO1xuICAgICAgY29kZVBvaW50ID0gMHhEQzAwIHwgY29kZVBvaW50ICYgMHgzRkY7XG4gICAgfVxuXG4gICAgcmVzLnB1c2goY29kZVBvaW50KTtcbiAgICBpICs9IGJ5dGVzUGVyU2VxdWVuY2U7XG4gIH1cblxuICByZXR1cm4gZGVjb2RlQ29kZVBvaW50c0FycmF5KHJlcylcbn1cblxuLy8gQmFzZWQgb24gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjI3NDcyNzIvNjgwNzQyLCB0aGUgYnJvd3NlciB3aXRoXG4vLyB0aGUgbG93ZXN0IGxpbWl0IGlzIENocm9tZSwgd2l0aCAweDEwMDAwIGFyZ3MuXG4vLyBXZSBnbyAxIG1hZ25pdHVkZSBsZXNzLCBmb3Igc2FmZXR5XG52YXIgTUFYX0FSR1VNRU5UU19MRU5HVEggPSAweDEwMDA7XG5cbmZ1bmN0aW9uIGRlY29kZUNvZGVQb2ludHNBcnJheSAoY29kZVBvaW50cykge1xuICB2YXIgbGVuID0gY29kZVBvaW50cy5sZW5ndGg7XG4gIGlmIChsZW4gPD0gTUFYX0FSR1VNRU5UU19MRU5HVEgpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNvZGVQb2ludHMpIC8vIGF2b2lkIGV4dHJhIHNsaWNlKClcbiAgfVxuXG4gIC8vIERlY29kZSBpbiBjaHVua3MgdG8gYXZvaWQgXCJjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIi5cbiAgdmFyIHJlcyA9ICcnO1xuICB2YXIgaSA9IDA7XG4gIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoXG4gICAgICBTdHJpbmcsXG4gICAgICBjb2RlUG9pbnRzLnNsaWNlKGksIGkgKz0gTUFYX0FSR1VNRU5UU19MRU5HVEgpXG4gICAgKTtcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJyc7XG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZCk7XG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0gJiAweDdGKTtcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGxhdGluMVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnO1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpO1xuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKTtcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGhleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGg7XG5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA8IDApIHN0YXJ0ID0gMDtcbiAgaWYgKCFlbmQgfHwgZW5kIDwgMCB8fCBlbmQgPiBsZW4pIGVuZCA9IGxlbjtcblxuICB2YXIgb3V0ID0gJyc7XG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgb3V0ICs9IHRvSGV4KGJ1ZltpXSk7XG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiB1dGYxNmxlU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgYnl0ZXMgPSBidWYuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gIHZhciByZXMgPSAnJztcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldICsgYnl0ZXNbaSArIDFdICogMjU2KTtcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiBzbGljZSAoc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGg7XG4gIHN0YXJ0ID0gfn5zdGFydDtcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiB+fmVuZDtcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgKz0gbGVuO1xuICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMDtcbiAgfSBlbHNlIGlmIChzdGFydCA+IGxlbikge1xuICAgIHN0YXJ0ID0gbGVuO1xuICB9XG5cbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuO1xuICAgIGlmIChlbmQgPCAwKSBlbmQgPSAwO1xuICB9IGVsc2UgaWYgKGVuZCA+IGxlbikge1xuICAgIGVuZCA9IGxlbjtcbiAgfVxuXG4gIGlmIChlbmQgPCBzdGFydCkgZW5kID0gc3RhcnQ7XG5cbiAgdmFyIG5ld0J1ZjtcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgbmV3QnVmID0gdGhpcy5zdWJhcnJheShzdGFydCwgZW5kKTtcbiAgICBuZXdCdWYuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydDtcbiAgICBuZXdCdWYgPSBuZXcgQnVmZmVyKHNsaWNlTGVuLCB1bmRlZmluZWQpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpY2VMZW47ICsraSkge1xuICAgICAgbmV3QnVmW2ldID0gdGhpc1tpICsgc3RhcnRdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdCdWZcbn07XG5cbi8qXG4gKiBOZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IGJ1ZmZlciBpc24ndCB0cnlpbmcgdG8gd3JpdGUgb3V0IG9mIGJvdW5kcy5cbiAqL1xuZnVuY3Rpb24gY2hlY2tPZmZzZXQgKG9mZnNldCwgZXh0LCBsZW5ndGgpIHtcbiAgaWYgKChvZmZzZXQgJSAxKSAhPT0gMCB8fCBvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb2Zmc2V0IGlzIG5vdCB1aW50JylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50TEUgPSBmdW5jdGlvbiByZWFkVUludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDA7XG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMDtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aCk7XG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XTtcbiAgdmFyIG11bCA9IDE7XG4gIHZhciBpID0gMDtcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bDtcbiAgfVxuXG4gIHJldHVybiB2YWxcbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRCRSA9IGZ1bmN0aW9uIHJlYWRVSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMDtcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwO1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aCk7XG4gIH1cblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdO1xuICB2YXIgbXVsID0gMTtcbiAgd2hpbGUgKGJ5dGVMZW5ndGggPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXSAqIG11bDtcbiAgfVxuXG4gIHJldHVybiB2YWxcbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQ4ID0gZnVuY3Rpb24gcmVhZFVJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpO1xuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59O1xuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKTtcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG59O1xuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKTtcbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgOCkgfCB0aGlzW29mZnNldCArIDFdXG59O1xuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKTtcblxuICByZXR1cm4gKCh0aGlzW29mZnNldF0pIHxcbiAgICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSkgK1xuICAgICAgKHRoaXNbb2Zmc2V0ICsgM10gKiAweDEwMDAwMDApXG59O1xuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKTtcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSAqIDB4MTAwMDAwMCkgK1xuICAgICgodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICB0aGlzW29mZnNldCArIDNdKVxufTtcblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50TEUgPSBmdW5jdGlvbiByZWFkSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMDtcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwO1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKTtcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdO1xuICB2YXIgbXVsID0gMTtcbiAgdmFyIGkgPSAwO1xuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsO1xuICB9XG4gIG11bCAqPSAweDgwO1xuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpO1xuXG4gIHJldHVybiB2YWxcbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludEJFID0gZnVuY3Rpb24gcmVhZEludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDA7XG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMDtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aCk7XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoO1xuICB2YXIgbXVsID0gMTtcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1pXTtcbiAgd2hpbGUgKGkgPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1pXSAqIG11bDtcbiAgfVxuICBtdWwgKj0gMHg4MDtcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKTtcblxuICByZXR1cm4gdmFsXG59O1xuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gcmVhZEludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aCk7XG4gIGlmICghKHRoaXNbb2Zmc2V0XSAmIDB4ODApKSByZXR1cm4gKHRoaXNbb2Zmc2V0XSlcbiAgcmV0dXJuICgoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTEpXG59O1xuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gcmVhZEludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aCk7XG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KTtcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufTtcblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpO1xuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAxXSB8ICh0aGlzW29mZnNldF0gPDwgOCk7XG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiByZWFkSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKTtcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDNdIDw8IDI0KVxufTtcblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpO1xuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDI0KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10pXG59O1xuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdExFID0gZnVuY3Rpb24gcmVhZEZsb2F0TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aCk7XG4gIHJldHVybiByZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgMjMsIDQpXG59O1xuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gcmVhZEZsb2F0QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aCk7XG4gIHJldHVybiByZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDIzLCA0KVxufTtcblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlTEUgPSBmdW5jdGlvbiByZWFkRG91YmxlTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aCk7XG4gIHJldHVybiByZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgNTIsIDgpXG59O1xuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVCRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKTtcbiAgcmV0dXJuIHJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgNTIsIDgpXG59O1xuXG5mdW5jdGlvbiBjaGVja0ludCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmICghaW50ZXJuYWxJc0J1ZmZlcihidWYpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImJ1ZmZlclwiIGFyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXIgaW5zdGFuY2UnKVxuICBpZiAodmFsdWUgPiBtYXggfHwgdmFsdWUgPCBtaW4pIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgaXMgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlVUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZTtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMDtcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwO1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMTtcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMCk7XG4gIH1cblxuICB2YXIgbXVsID0gMTtcbiAgdmFyIGkgPSAwO1xuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkY7XG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGO1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWU7XG4gIG9mZnNldCA9IG9mZnNldCB8IDA7XG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMDtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDE7XG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApO1xuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMTtcbiAgdmFyIG11bCA9IDE7XG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkY7XG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRjtcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59O1xuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDggPSBmdW5jdGlvbiB3cml0ZVVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZTtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMDtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHhmZiwgMCk7XG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSk7XG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpO1xuICByZXR1cm4gb2Zmc2V0ICsgMVxufTtcblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmICsgdmFsdWUgKyAxO1xuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDIpOyBpIDwgajsgKytpKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlICYgKDB4ZmYgPDwgKDggKiAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSkpKSA+Pj5cbiAgICAgIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpICogODtcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZTtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMDtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKTtcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZik7XG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOCk7XG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSk7XG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlO1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwO1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApO1xuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpO1xuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKTtcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSk7XG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn07XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDE7XG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgNCk7IGkgPCBqOyArK2kpIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmO1xuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlO1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwO1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKTtcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpO1xuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KTtcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KTtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKTtcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKTtcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufTtcblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWU7XG4gIG9mZnNldCA9IG9mZnNldCB8IDA7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApO1xuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KTtcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNik7XG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOCk7XG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpO1xuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKTtcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufTtcblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludExFID0gZnVuY3Rpb24gd3JpdGVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWU7XG4gIG9mZnNldCA9IG9mZnNldCB8IDA7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpO1xuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpO1xuICB9XG5cbiAgdmFyIGkgPSAwO1xuICB2YXIgbXVsID0gMTtcbiAgdmFyIHN1YiA9IDA7XG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRjtcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgLSAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMTtcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRjtcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59O1xuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50QkUgPSBmdW5jdGlvbiB3cml0ZUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZTtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMDtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSk7XG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdCk7XG4gIH1cblxuICB2YXIgaSA9IGJ5dGVMZW5ndGggLSAxO1xuICB2YXIgbXVsID0gMTtcbiAgdmFyIHN1YiA9IDA7XG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkY7XG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSArIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxO1xuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGO1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZTtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMDtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHg3ZiwgLTB4ODApO1xuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpO1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmYgKyB2YWx1ZSArIDE7XG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpO1xuICByZXR1cm4gb2Zmc2V0ICsgMVxufTtcblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlO1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwO1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApO1xuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKTtcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KTtcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKTtcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufTtcblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlO1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwO1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApO1xuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpO1xuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKTtcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSk7XG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZTtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMDtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApO1xuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKTtcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KTtcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNik7XG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpO1xuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpO1xuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59O1xuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWU7XG4gIG9mZnNldCA9IG9mZnNldCB8IDA7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKTtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxO1xuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KTtcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNik7XG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOCk7XG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpO1xuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKTtcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufTtcblxuZnVuY3Rpb24gY2hlY2tJRUVFNzU0IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxuICBpZiAob2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgNCk7XG4gIH1cbiAgd3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KTtcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0TEUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufTtcblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn07XG5cbmZ1bmN0aW9uIHdyaXRlRG91YmxlIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDgpO1xuICB9XG4gIHdyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOCk7XG4gIHJldHVybiBvZmZzZXQgKyA4XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVMRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn07XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59O1xuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiBjb3B5ICh0YXJnZXQsIHRhcmdldFN0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMDtcbiAgaWYgKCFlbmQgJiYgZW5kICE9PSAwKSBlbmQgPSB0aGlzLmxlbmd0aDtcbiAgaWYgKHRhcmdldFN0YXJ0ID49IHRhcmdldC5sZW5ndGgpIHRhcmdldFN0YXJ0ID0gdGFyZ2V0Lmxlbmd0aDtcbiAgaWYgKCF0YXJnZXRTdGFydCkgdGFyZ2V0U3RhcnQgPSAwO1xuICBpZiAoZW5kID4gMCAmJiBlbmQgPCBzdGFydCkgZW5kID0gc3RhcnQ7XG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm4gMFxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCB0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGlmICh0YXJnZXRTdGFydCA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIH1cbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZVN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBpZiAoZW5kIDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpIGVuZCA9IHRoaXMubGVuZ3RoO1xuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0IDwgZW5kIC0gc3RhcnQpIHtcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgKyBzdGFydDtcbiAgfVxuXG4gIHZhciBsZW4gPSBlbmQgLSBzdGFydDtcbiAgdmFyIGk7XG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCAmJiBzdGFydCA8IHRhcmdldFN0YXJ0ICYmIHRhcmdldFN0YXJ0IDwgZW5kKSB7XG4gICAgLy8gZGVzY2VuZGluZyBjb3B5IGZyb20gZW5kXG4gICAgZm9yIChpID0gbGVuIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdO1xuICAgIH1cbiAgfSBlbHNlIGlmIChsZW4gPCAxMDAwIHx8ICFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIGFzY2VuZGluZyBjb3B5IGZyb20gc3RhcnRcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBVaW50OEFycmF5LnByb3RvdHlwZS5zZXQuY2FsbChcbiAgICAgIHRhcmdldCxcbiAgICAgIHRoaXMuc3ViYXJyYXkoc3RhcnQsIHN0YXJ0ICsgbGVuKSxcbiAgICAgIHRhcmdldFN0YXJ0XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBsZW5cbn07XG5cbi8vIFVzYWdlOlxuLy8gICAgYnVmZmVyLmZpbGwobnVtYmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChidWZmZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKHN0cmluZ1ssIG9mZnNldFssIGVuZF1dWywgZW5jb2RpbmddKVxuQnVmZmVyLnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gZmlsbCAodmFsLCBzdGFydCwgZW5kLCBlbmNvZGluZykge1xuICAvLyBIYW5kbGUgc3RyaW5nIGNhc2VzOlxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodHlwZW9mIHN0YXJ0ID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBzdGFydDtcbiAgICAgIHN0YXJ0ID0gMDtcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVuZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gZW5kO1xuICAgICAgZW5kID0gdGhpcy5sZW5ndGg7XG4gICAgfVxuICAgIGlmICh2YWwubGVuZ3RoID09PSAxKSB7XG4gICAgICB2YXIgY29kZSA9IHZhbC5jaGFyQ29kZUF0KDApO1xuICAgICAgaWYgKGNvZGUgPCAyNTYpIHtcbiAgICAgICAgdmFsID0gY29kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZW5jb2RpbmcgbXVzdCBiZSBhIHN0cmluZycpXG4gICAgfVxuICAgIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnICYmICFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAyNTU7XG4gIH1cblxuICAvLyBJbnZhbGlkIHJhbmdlcyBhcmUgbm90IHNldCB0byBhIGRlZmF1bHQsIHNvIGNhbiByYW5nZSBjaGVjayBlYXJseS5cbiAgaWYgKHN0YXJ0IDwgMCB8fCB0aGlzLmxlbmd0aCA8IHN0YXJ0IHx8IHRoaXMubGVuZ3RoIDwgZW5kKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ091dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHN0YXJ0ID0gc3RhcnQgPj4+IDA7XG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gdGhpcy5sZW5ndGggOiBlbmQgPj4+IDA7XG5cbiAgaWYgKCF2YWwpIHZhbCA9IDA7XG5cbiAgdmFyIGk7XG4gIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICAgIHRoaXNbaV0gPSB2YWw7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBieXRlcyA9IGludGVybmFsSXNCdWZmZXIodmFsKVxuICAgICAgPyB2YWxcbiAgICAgIDogdXRmOFRvQnl0ZXMobmV3IEJ1ZmZlcih2YWwsIGVuY29kaW5nKS50b1N0cmluZygpKTtcbiAgICB2YXIgbGVuID0gYnl0ZXMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBlbmQgLSBzdGFydDsgKytpKSB7XG4gICAgICB0aGlzW2kgKyBzdGFydF0gPSBieXRlc1tpICUgbGVuXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpc1xufTtcblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09PVxuXG52YXIgSU5WQUxJRF9CQVNFNjRfUkUgPSAvW14rXFwvMC05QS1aYS16LV9dL2c7XG5cbmZ1bmN0aW9uIGJhc2U2NGNsZWFuIChzdHIpIHtcbiAgLy8gTm9kZSBzdHJpcHMgb3V0IGludmFsaWQgY2hhcmFjdGVycyBsaWtlIFxcbiBhbmQgXFx0IGZyb20gdGhlIHN0cmluZywgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHN0ciA9IHN0cmluZ3RyaW0oc3RyKS5yZXBsYWNlKElOVkFMSURfQkFTRTY0X1JFLCAnJyk7XG4gIC8vIE5vZGUgY29udmVydHMgc3RyaW5ncyB3aXRoIGxlbmd0aCA8IDIgdG8gJydcbiAgaWYgKHN0ci5sZW5ndGggPCAyKSByZXR1cm4gJydcbiAgLy8gTm9kZSBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgYmFzZTY0IHN0cmluZ3MgKG1pc3NpbmcgdHJhaWxpbmcgPT09KSwgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHdoaWxlIChzdHIubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHN0ciA9IHN0ciArICc9JztcbiAgfVxuICByZXR1cm4gc3RyXG59XG5cbmZ1bmN0aW9uIHN0cmluZ3RyaW0gKHN0cikge1xuICBpZiAoc3RyLnRyaW0pIHJldHVybiBzdHIudHJpbSgpXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG59XG5cbmZ1bmN0aW9uIHRvSGV4IChuKSB7XG4gIGlmIChuIDwgMTYpIHJldHVybiAnMCcgKyBuLnRvU3RyaW5nKDE2KVxuICByZXR1cm4gbi50b1N0cmluZygxNilcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cmluZywgdW5pdHMpIHtcbiAgdW5pdHMgPSB1bml0cyB8fCBJbmZpbml0eTtcbiAgdmFyIGNvZGVQb2ludDtcbiAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG4gIHZhciBsZWFkU3Vycm9nYXRlID0gbnVsbDtcbiAgdmFyIGJ5dGVzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGNvZGVQb2ludCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpO1xuXG4gICAgLy8gaXMgc3Vycm9nYXRlIGNvbXBvbmVudFxuICAgIGlmIChjb2RlUG9pbnQgPiAweEQ3RkYgJiYgY29kZVBvaW50IDwgMHhFMDAwKSB7XG4gICAgICAvLyBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCFsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAgIC8vIG5vIGxlYWQgeWV0XG4gICAgICAgIGlmIChjb2RlUG9pbnQgPiAweERCRkYpIHtcbiAgICAgICAgICAvLyB1bmV4cGVjdGVkIHRyYWlsXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpO1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSBpZiAoaSArIDEgPT09IGxlbmd0aCkge1xuICAgICAgICAgIC8vIHVucGFpcmVkIGxlYWRcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRCk7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhbGlkIGxlYWRcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludDtcblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyAyIGxlYWRzIGluIGEgcm93XG4gICAgICBpZiAoY29kZVBvaW50IDwgMHhEQzAwKSB7XG4gICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKTtcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludDtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gdmFsaWQgc3Vycm9nYXRlIHBhaXJcbiAgICAgIGNvZGVQb2ludCA9IChsZWFkU3Vycm9nYXRlIC0gMHhEODAwIDw8IDEwIHwgY29kZVBvaW50IC0gMHhEQzAwKSArIDB4MTAwMDA7XG4gICAgfSBlbHNlIGlmIChsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAvLyB2YWxpZCBibXAgY2hhciwgYnV0IGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRCk7XG4gICAgfVxuXG4gICAgbGVhZFN1cnJvZ2F0ZSA9IG51bGw7XG5cbiAgICAvLyBlbmNvZGUgdXRmOFxuICAgIGlmIChjb2RlUG9pbnQgPCAweDgwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDEpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goY29kZVBvaW50KTtcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4ODAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgfCAweEMwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyB8IDB4RTAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSA0KSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHgxMiB8IDB4RjAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvZGUgcG9pbnQnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBieXRlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgLy8gTm9kZSdzIGNvZGUgc2VlbXMgdG8gYmUgZG9pbmcgdGhpcyBhbmQgbm90ICYgMHg3Ri4uXG4gICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKTtcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIsIHVuaXRzKSB7XG4gIHZhciBjLCBoaSwgbG87XG4gIHZhciBieXRlQXJyYXkgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcblxuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICBoaSA9IGMgPj4gODtcbiAgICBsbyA9IGMgJSAyNTY7XG4gICAgYnl0ZUFycmF5LnB1c2gobG8pO1xuICAgIGJ5dGVBcnJheS5wdXNoKGhpKTtcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIHRvQnl0ZUFycmF5KGJhc2U2NGNsZWFuKHN0cikpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKSBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXTtcbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBpc25hbiAodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IHZhbCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxufVxuXG5cbi8vIHRoZSBmb2xsb3dpbmcgaXMgZnJvbSBpcy1idWZmZXIsIGFsc28gYnkgRmVyb3NzIEFib3VraGFkaWplaCBhbmQgd2l0aCBzYW1lIGxpc2VuY2Vcbi8vIFRoZSBfaXNCdWZmZXIgY2hlY2sgaXMgZm9yIFNhZmFyaSA1LTcgc3VwcG9ydCwgYmVjYXVzZSBpdCdzIG1pc3Npbmdcbi8vIE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHlcbmZ1bmN0aW9uIGlzQnVmZmVyKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgKCEhb2JqLl9pc0J1ZmZlciB8fCBpc0Zhc3RCdWZmZXIob2JqKSB8fCBpc1Nsb3dCdWZmZXIob2JqKSlcbn1cblxuZnVuY3Rpb24gaXNGYXN0QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuICEhb2JqLmNvbnN0cnVjdG9yICYmIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iailcbn1cblxuLy8gRm9yIE5vZGUgdjAuMTAgc3VwcG9ydC4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseS5cbmZ1bmN0aW9uIGlzU2xvd0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqLnJlYWRGbG9hdExFID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouc2xpY2UgPT09ICdmdW5jdGlvbicgJiYgaXNGYXN0QnVmZmVyKG9iai5zbGljZSgwLCAwKSlcbn1cblxuY2xhc3MgQ3N2RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKGNvZGUsIG1lc3NhZ2UsIG9wdGlvbnMsIC4uLmNvbnRleHRzKSB7XG4gICAgaWYoQXJyYXkuaXNBcnJheShtZXNzYWdlKSkgbWVzc2FnZSA9IG1lc3NhZ2Uuam9pbignICcpLnRyaW0oKTtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICBpZihFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIENzdkVycm9yKTtcbiAgICB9XG4gICAgdGhpcy5jb2RlID0gY29kZTtcbiAgICBmb3IoY29uc3QgY29udGV4dCBvZiBjb250ZXh0cyl7XG4gICAgICBmb3IoY29uc3Qga2V5IGluIGNvbnRleHQpe1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGNvbnRleHRba2V5XTtcbiAgICAgICAgdGhpc1trZXldID0gaXNCdWZmZXIodmFsdWUpID8gdmFsdWUudG9TdHJpbmcob3B0aW9ucy5lbmNvZGluZykgOiB2YWx1ZSA9PSBudWxsID8gdmFsdWUgOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGlzX29iamVjdCA9IGZ1bmN0aW9uKG9iail7XG4gIHJldHVybiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsICYmICFBcnJheS5pc0FycmF5KG9iaikpO1xufTtcblxuY29uc3Qgbm9ybWFsaXplX2NvbHVtbnNfYXJyYXkgPSBmdW5jdGlvbihjb2x1bW5zKXtcbiAgY29uc3Qgbm9ybWFsaXplZENvbHVtbnMgPSBbXTtcbiAgZm9yKGxldCBpID0gMCwgbCA9IGNvbHVtbnMubGVuZ3RoOyBpIDwgbDsgaSsrKXtcbiAgICBjb25zdCBjb2x1bW4gPSBjb2x1bW5zW2ldO1xuICAgIGlmKGNvbHVtbiA9PT0gdW5kZWZpbmVkIHx8IGNvbHVtbiA9PT0gbnVsbCB8fCBjb2x1bW4gPT09IGZhbHNlKXtcbiAgICAgIG5vcm1hbGl6ZWRDb2x1bW5zW2ldID0geyBkaXNhYmxlZDogdHJ1ZSB9O1xuICAgIH1lbHNlIGlmKHR5cGVvZiBjb2x1bW4gPT09ICdzdHJpbmcnKXtcbiAgICAgIG5vcm1hbGl6ZWRDb2x1bW5zW2ldID0geyBuYW1lOiBjb2x1bW4gfTtcbiAgICB9ZWxzZSBpZihpc19vYmplY3QoY29sdW1uKSl7XG4gICAgICBpZih0eXBlb2YgY29sdW1uLm5hbWUgIT09ICdzdHJpbmcnKXtcbiAgICAgICAgdGhyb3cgbmV3IENzdkVycm9yKCdDU1ZfT1BUSU9OX0NPTFVNTlNfTUlTU0lOR19OQU1FJywgW1xuICAgICAgICAgICdPcHRpb24gY29sdW1ucyBtaXNzaW5nIG5hbWU6JyxcbiAgICAgICAgICBgcHJvcGVydHkgXCJuYW1lXCIgaXMgcmVxdWlyZWQgYXQgcG9zaXRpb24gJHtpfWAsXG4gICAgICAgICAgJ3doZW4gY29sdW1uIGlzIGFuIG9iamVjdCBsaXRlcmFsJ1xuICAgICAgICBdKTtcbiAgICAgIH1cbiAgICAgIG5vcm1hbGl6ZWRDb2x1bW5zW2ldID0gY29sdW1uO1xuICAgIH1lbHNlIHtcbiAgICAgIHRocm93IG5ldyBDc3ZFcnJvcignQ1NWX0lOVkFMSURfQ09MVU1OX0RFRklOSVRJT04nLCBbXG4gICAgICAgICdJbnZhbGlkIGNvbHVtbiBkZWZpbml0aW9uOicsXG4gICAgICAgICdleHBlY3QgYSBzdHJpbmcgb3IgYSBsaXRlcmFsIG9iamVjdCwnLFxuICAgICAgICBgZ290ICR7SlNPTi5zdHJpbmdpZnkoY29sdW1uKX0gYXQgcG9zaXRpb24gJHtpfWBcbiAgICAgIF0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbm9ybWFsaXplZENvbHVtbnM7XG59O1xuXG5jbGFzcyBSZXNpemVhYmxlQnVmZmVye1xuICBjb25zdHJ1Y3RvcihzaXplPTEwMCl7XG4gICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICB0aGlzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5idWYgPSBCdWZmZXIuYWxsb2NVbnNhZmUoc2l6ZSk7XG4gIH1cbiAgcHJlcGVuZCh2YWwpe1xuICAgIGlmKGlzQnVmZmVyKHZhbCkpe1xuICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5sZW5ndGggKyB2YWwubGVuZ3RoO1xuICAgICAgaWYobGVuZ3RoID49IHRoaXMuc2l6ZSl7XG4gICAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgICAgIGlmKGxlbmd0aCA+PSB0aGlzLnNpemUpe1xuICAgICAgICAgIHRocm93IEVycm9yKCdJTlZBTElEX0JVRkZFUl9TVEFURScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBidWYgPSB0aGlzLmJ1ZjtcbiAgICAgIHRoaXMuYnVmID0gQnVmZmVyLmFsbG9jVW5zYWZlKHRoaXMuc2l6ZSk7XG4gICAgICB2YWwuY29weSh0aGlzLmJ1ZiwgMCk7XG4gICAgICBidWYuY29weSh0aGlzLmJ1ZiwgdmFsLmxlbmd0aCk7XG4gICAgICB0aGlzLmxlbmd0aCArPSB2YWwubGVuZ3RoO1xuICAgIH1lbHNlIHtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMubGVuZ3RoKys7XG4gICAgICBpZihsZW5ndGggPT09IHRoaXMuc2l6ZSl7XG4gICAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgICB9XG4gICAgICBjb25zdCBidWYgPSB0aGlzLmNsb25lKCk7XG4gICAgICB0aGlzLmJ1ZlswXSA9IHZhbDtcbiAgICAgIGJ1Zi5jb3B5KHRoaXMuYnVmLDEsIDAsIGxlbmd0aCk7XG4gICAgfVxuICB9XG4gIGFwcGVuZCh2YWwpe1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMubGVuZ3RoKys7XG4gICAgaWYobGVuZ3RoID09PSB0aGlzLnNpemUpe1xuICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICB9XG4gICAgdGhpcy5idWZbbGVuZ3RoXSA9IHZhbDtcbiAgfVxuICBjbG9uZSgpe1xuICAgIHJldHVybiBCdWZmZXIuZnJvbSh0aGlzLmJ1Zi5zbGljZSgwLCB0aGlzLmxlbmd0aCkpO1xuICB9XG4gIHJlc2l6ZSgpe1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuICAgIHRoaXMuc2l6ZSA9IHRoaXMuc2l6ZSAqIDI7XG4gICAgY29uc3QgYnVmID0gQnVmZmVyLmFsbG9jVW5zYWZlKHRoaXMuc2l6ZSk7XG4gICAgdGhpcy5idWYuY29weShidWYsMCwgMCwgbGVuZ3RoKTtcbiAgICB0aGlzLmJ1ZiA9IGJ1ZjtcbiAgfVxuICB0b1N0cmluZyhlbmNvZGluZyl7XG4gICAgaWYoZW5jb2Rpbmcpe1xuICAgICAgcmV0dXJuIHRoaXMuYnVmLnNsaWNlKDAsIHRoaXMubGVuZ3RoKS50b1N0cmluZyhlbmNvZGluZyk7XG4gICAgfWVsc2Uge1xuICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5idWYuc2xpY2UoMCwgdGhpcy5sZW5ndGgpKTtcbiAgICB9XG4gIH1cbiAgdG9KU09OKCl7XG4gICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoJ3V0ZjgnKTtcbiAgfVxuICByZXNldCgpe1xuICAgIHRoaXMubGVuZ3RoID0gMDtcbiAgfVxufVxuXG4vLyB3aGl0ZSBzcGFjZSBjaGFyYWN0ZXJzXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XaGl0ZXNwYWNlX2NoYXJhY3RlclxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9HdWlkZS9SZWd1bGFyX0V4cHJlc3Npb25zL0NoYXJhY3Rlcl9DbGFzc2VzI1R5cGVzXG4vLyBcXGZcXG5cXHJcXHRcXHZcXHUwMGEwXFx1MTY4MFxcdTIwMDAtXFx1MjAwYVxcdTIwMjhcXHUyMDI5XFx1MjAyZlxcdTIwNWZcXHUzMDAwXFx1ZmVmZlxuY29uc3QgbnAgPSAxMjtcbmNvbnN0IGNyJDEgPSAxMzsgLy8gYFxccmAsIGNhcnJpYWdlIHJldHVybiwgMHgwRCBpbiBoZXhhZMOpY2ltYWwsIDEzIGluIGRlY2ltYWxcbmNvbnN0IG5sJDEgPSAxMDsgLy8gYFxcbmAsIG5ld2xpbmUsIDB4MEEgaW4gaGV4YWRlY2ltYWwsIDEwIGluIGRlY2ltYWxcbmNvbnN0IHNwYWNlID0gMzI7XG5jb25zdCB0YWIgPSA5O1xuXG5jb25zdCBpbml0X3N0YXRlID0gZnVuY3Rpb24ob3B0aW9ucyl7XG4gIHJldHVybiB7XG4gICAgYm9tU2tpcHBlZDogZmFsc2UsXG4gICAgYnVmQnl0ZXNTdGFydDogMCxcbiAgICBjYXN0RmllbGQ6IG9wdGlvbnMuY2FzdF9mdW5jdGlvbixcbiAgICBjb21tZW50aW5nOiBmYWxzZSxcbiAgICAvLyBDdXJyZW50IGVycm9yIGVuY291bnRlcmVkIGJ5IGEgcmVjb3JkXG4gICAgZXJyb3I6IHVuZGVmaW5lZCxcbiAgICBlbmFibGVkOiBvcHRpb25zLmZyb21fbGluZSA9PT0gMSxcbiAgICBlc2NhcGluZzogZmFsc2UsXG4gICAgZXNjYXBlSXNRdW90ZTogaXNCdWZmZXIob3B0aW9ucy5lc2NhcGUpICYmIGlzQnVmZmVyKG9wdGlvbnMucXVvdGUpICYmIEJ1ZmZlci5jb21wYXJlKG9wdGlvbnMuZXNjYXBlLCBvcHRpb25zLnF1b3RlKSA9PT0gMCxcbiAgICAvLyBjb2x1bW5zIGNhbiBiZSBgZmFsc2VgLCBgdHJ1ZWAsIGBBcnJheWBcbiAgICBleHBlY3RlZFJlY29yZExlbmd0aDogQXJyYXkuaXNBcnJheShvcHRpb25zLmNvbHVtbnMpID8gb3B0aW9ucy5jb2x1bW5zLmxlbmd0aCA6IHVuZGVmaW5lZCxcbiAgICBmaWVsZDogbmV3IFJlc2l6ZWFibGVCdWZmZXIoMjApLFxuICAgIGZpcnN0TGluZVRvSGVhZGVyczogb3B0aW9ucy5jYXN0X2ZpcnN0X2xpbmVfdG9faGVhZGVyLFxuICAgIG5lZWRNb3JlRGF0YVNpemU6IE1hdGgubWF4KFxuICAgICAgLy8gU2tpcCBpZiB0aGUgcmVtYWluaW5nIGJ1ZmZlciBzbWFsbGVyIHRoYW4gY29tbWVudFxuICAgICAgb3B0aW9ucy5jb21tZW50ICE9PSBudWxsID8gb3B0aW9ucy5jb21tZW50Lmxlbmd0aCA6IDAsXG4gICAgICAvLyBTa2lwIGlmIHRoZSByZW1haW5pbmcgYnVmZmVyIGNhbiBiZSBkZWxpbWl0ZXJcbiAgICAgIC4uLm9wdGlvbnMuZGVsaW1pdGVyLm1hcCgoZGVsaW1pdGVyKSA9PiBkZWxpbWl0ZXIubGVuZ3RoKSxcbiAgICAgIC8vIFNraXAgaWYgdGhlIHJlbWFpbmluZyBidWZmZXIgY2FuIGJlIGVzY2FwZSBzZXF1ZW5jZVxuICAgICAgb3B0aW9ucy5xdW90ZSAhPT0gbnVsbCA/IG9wdGlvbnMucXVvdGUubGVuZ3RoIDogMCxcbiAgICApLFxuICAgIHByZXZpb3VzQnVmOiB1bmRlZmluZWQsXG4gICAgcXVvdGluZzogZmFsc2UsXG4gICAgc3RvcDogZmFsc2UsXG4gICAgcmF3QnVmZmVyOiBuZXcgUmVzaXplYWJsZUJ1ZmZlcigxMDApLFxuICAgIHJlY29yZDogW10sXG4gICAgcmVjb3JkSGFzRXJyb3I6IGZhbHNlLFxuICAgIHJlY29yZF9sZW5ndGg6IDAsXG4gICAgcmVjb3JkRGVsaW1pdGVyTWF4TGVuZ3RoOiBvcHRpb25zLnJlY29yZF9kZWxpbWl0ZXIubGVuZ3RoID09PSAwID8gMCA6IE1hdGgubWF4KC4uLm9wdGlvbnMucmVjb3JkX2RlbGltaXRlci5tYXAoKHYpID0+IHYubGVuZ3RoKSksXG4gICAgdHJpbUNoYXJzOiBbQnVmZmVyLmZyb20oJyAnLCBvcHRpb25zLmVuY29kaW5nKVswXSwgQnVmZmVyLmZyb20oJ1xcdCcsIG9wdGlvbnMuZW5jb2RpbmcpWzBdXSxcbiAgICB3YXNRdW90aW5nOiBmYWxzZSxcbiAgICB3YXNSb3dEZWxpbWl0ZXI6IGZhbHNlLFxuICAgIHRpbWNoYXJzOiBbXG4gICAgICBCdWZmZXIuZnJvbShCdWZmZXIuZnJvbShbY3IkMV0sICd1dGY4JykudG9TdHJpbmcoKSwgb3B0aW9ucy5lbmNvZGluZyksXG4gICAgICBCdWZmZXIuZnJvbShCdWZmZXIuZnJvbShbbmwkMV0sICd1dGY4JykudG9TdHJpbmcoKSwgb3B0aW9ucy5lbmNvZGluZyksXG4gICAgICBCdWZmZXIuZnJvbShCdWZmZXIuZnJvbShbbnBdLCAndXRmOCcpLnRvU3RyaW5nKCksIG9wdGlvbnMuZW5jb2RpbmcpLFxuICAgICAgQnVmZmVyLmZyb20oQnVmZmVyLmZyb20oW3NwYWNlXSwgJ3V0ZjgnKS50b1N0cmluZygpLCBvcHRpb25zLmVuY29kaW5nKSxcbiAgICAgIEJ1ZmZlci5mcm9tKEJ1ZmZlci5mcm9tKFt0YWJdLCAndXRmOCcpLnRvU3RyaW5nKCksIG9wdGlvbnMuZW5jb2RpbmcpLFxuICAgIF1cbiAgfTtcbn07XG5cbmNvbnN0IHVuZGVyc2NvcmUgPSBmdW5jdGlvbihzdHIpe1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgZnVuY3Rpb24oXywgbWF0Y2gpe1xuICAgIHJldHVybiAnXycgKyBtYXRjaC50b0xvd2VyQ2FzZSgpO1xuICB9KTtcbn07XG5cbmNvbnN0IG5vcm1hbGl6ZV9vcHRpb25zID0gZnVuY3Rpb24ob3B0cyl7XG4gIGNvbnN0IG9wdGlvbnMgPSB7fTtcbiAgLy8gTWVyZ2Ugd2l0aCB1c2VyIG9wdGlvbnNcbiAgZm9yKGNvbnN0IG9wdCBpbiBvcHRzKXtcbiAgICBvcHRpb25zW3VuZGVyc2NvcmUob3B0KV0gPSBvcHRzW29wdF07XG4gIH1cbiAgLy8gTm9ybWFsaXplIG9wdGlvbiBgZW5jb2RpbmdgXG4gIC8vIE5vdGU6IGRlZmluZWQgZmlyc3QgYmVjYXVzZSBvdGhlciBvcHRpb25zIGRlcGVuZHMgb24gaXRcbiAgLy8gdG8gY29udmVydCBjaGFycy9zdHJpbmdzIGludG8gYnVmZmVycy5cbiAgaWYob3B0aW9ucy5lbmNvZGluZyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMuZW5jb2RpbmcgPT09IHRydWUpe1xuICAgIG9wdGlvbnMuZW5jb2RpbmcgPSAndXRmOCc7XG4gIH1lbHNlIGlmKG9wdGlvbnMuZW5jb2RpbmcgPT09IG51bGwgfHwgb3B0aW9ucy5lbmNvZGluZyA9PT0gZmFsc2Upe1xuICAgIG9wdGlvbnMuZW5jb2RpbmcgPSBudWxsO1xuICB9ZWxzZSBpZih0eXBlb2Ygb3B0aW9ucy5lbmNvZGluZyAhPT0gJ3N0cmluZycgJiYgb3B0aW9ucy5lbmNvZGluZyAhPT0gbnVsbCl7XG4gICAgdGhyb3cgbmV3IENzdkVycm9yKCdDU1ZfSU5WQUxJRF9PUFRJT05fRU5DT0RJTkcnLCBbXG4gICAgICAnSW52YWxpZCBvcHRpb24gZW5jb2Rpbmc6JyxcbiAgICAgICdlbmNvZGluZyBtdXN0IGJlIGEgc3RyaW5nIG9yIG51bGwgdG8gcmV0dXJuIGEgYnVmZmVyLCcsXG4gICAgICBgZ290ICR7SlNPTi5zdHJpbmdpZnkob3B0aW9ucy5lbmNvZGluZyl9YFxuICAgIF0sIG9wdGlvbnMpO1xuICB9XG4gIC8vIE5vcm1hbGl6ZSBvcHRpb24gYGJvbWBcbiAgaWYob3B0aW9ucy5ib20gPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLmJvbSA9PT0gbnVsbCB8fCBvcHRpb25zLmJvbSA9PT0gZmFsc2Upe1xuICAgIG9wdGlvbnMuYm9tID0gZmFsc2U7XG4gIH1lbHNlIGlmKG9wdGlvbnMuYm9tICE9PSB0cnVlKXtcbiAgICB0aHJvdyBuZXcgQ3N2RXJyb3IoJ0NTVl9JTlZBTElEX09QVElPTl9CT00nLCBbXG4gICAgICAnSW52YWxpZCBvcHRpb24gYm9tOicsICdib20gbXVzdCBiZSB0cnVlLCcsXG4gICAgICBgZ290ICR7SlNPTi5zdHJpbmdpZnkob3B0aW9ucy5ib20pfWBcbiAgICBdLCBvcHRpb25zKTtcbiAgfVxuICAvLyBOb3JtYWxpemUgb3B0aW9uIGBjYXN0YFxuICBvcHRpb25zLmNhc3RfZnVuY3Rpb24gPSBudWxsO1xuICBpZihvcHRpb25zLmNhc3QgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLmNhc3QgPT09IG51bGwgfHwgb3B0aW9ucy5jYXN0ID09PSBmYWxzZSB8fCBvcHRpb25zLmNhc3QgPT09ICcnKXtcbiAgICBvcHRpb25zLmNhc3QgPSB1bmRlZmluZWQ7XG4gIH1lbHNlIGlmKHR5cGVvZiBvcHRpb25zLmNhc3QgPT09ICdmdW5jdGlvbicpe1xuICAgIG9wdGlvbnMuY2FzdF9mdW5jdGlvbiA9IG9wdGlvbnMuY2FzdDtcbiAgICBvcHRpb25zLmNhc3QgPSB0cnVlO1xuICB9ZWxzZSBpZihvcHRpb25zLmNhc3QgIT09IHRydWUpe1xuICAgIHRocm93IG5ldyBDc3ZFcnJvcignQ1NWX0lOVkFMSURfT1BUSU9OX0NBU1QnLCBbXG4gICAgICAnSW52YWxpZCBvcHRpb24gY2FzdDonLCAnY2FzdCBtdXN0IGJlIHRydWUgb3IgYSBmdW5jdGlvbiwnLFxuICAgICAgYGdvdCAke0pTT04uc3RyaW5naWZ5KG9wdGlvbnMuY2FzdCl9YFxuICAgIF0sIG9wdGlvbnMpO1xuICB9XG4gIC8vIE5vcm1hbGl6ZSBvcHRpb24gYGNhc3RfZGF0ZWBcbiAgaWYob3B0aW9ucy5jYXN0X2RhdGUgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLmNhc3RfZGF0ZSA9PT0gbnVsbCB8fCBvcHRpb25zLmNhc3RfZGF0ZSA9PT0gZmFsc2UgfHwgb3B0aW9ucy5jYXN0X2RhdGUgPT09ICcnKXtcbiAgICBvcHRpb25zLmNhc3RfZGF0ZSA9IGZhbHNlO1xuICB9ZWxzZSBpZihvcHRpb25zLmNhc3RfZGF0ZSA9PT0gdHJ1ZSl7XG4gICAgb3B0aW9ucy5jYXN0X2RhdGUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICBjb25zdCBkYXRlID0gRGF0ZS5wYXJzZSh2YWx1ZSk7XG4gICAgICByZXR1cm4gIWlzTmFOKGRhdGUpID8gbmV3IERhdGUoZGF0ZSkgOiB2YWx1ZTtcbiAgICB9O1xuICB9ZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuY2FzdF9kYXRlICE9PSAnZnVuY3Rpb24nKXtcbiAgICB0aHJvdyBuZXcgQ3N2RXJyb3IoJ0NTVl9JTlZBTElEX09QVElPTl9DQVNUX0RBVEUnLCBbXG4gICAgICAnSW52YWxpZCBvcHRpb24gY2FzdF9kYXRlOicsICdjYXN0X2RhdGUgbXVzdCBiZSB0cnVlIG9yIGEgZnVuY3Rpb24sJyxcbiAgICAgIGBnb3QgJHtKU09OLnN0cmluZ2lmeShvcHRpb25zLmNhc3RfZGF0ZSl9YFxuICAgIF0sIG9wdGlvbnMpO1xuICB9XG4gIC8vIE5vcm1hbGl6ZSBvcHRpb24gYGNvbHVtbnNgXG4gIG9wdGlvbnMuY2FzdF9maXJzdF9saW5lX3RvX2hlYWRlciA9IG51bGw7XG4gIGlmKG9wdGlvbnMuY29sdW1ucyA9PT0gdHJ1ZSl7XG4gICAgLy8gRmllbGRzIGluIHRoZSBmaXJzdCBsaW5lIGFyZSBjb252ZXJ0ZWQgYXMtaXMgdG8gY29sdW1uc1xuICAgIG9wdGlvbnMuY2FzdF9maXJzdF9saW5lX3RvX2hlYWRlciA9IHVuZGVmaW5lZDtcbiAgfWVsc2UgaWYodHlwZW9mIG9wdGlvbnMuY29sdW1ucyA9PT0gJ2Z1bmN0aW9uJyl7XG4gICAgb3B0aW9ucy5jYXN0X2ZpcnN0X2xpbmVfdG9faGVhZGVyID0gb3B0aW9ucy5jb2x1bW5zO1xuICAgIG9wdGlvbnMuY29sdW1ucyA9IHRydWU7XG4gIH1lbHNlIGlmKEFycmF5LmlzQXJyYXkob3B0aW9ucy5jb2x1bW5zKSl7XG4gICAgb3B0aW9ucy5jb2x1bW5zID0gbm9ybWFsaXplX2NvbHVtbnNfYXJyYXkob3B0aW9ucy5jb2x1bW5zKTtcbiAgfWVsc2UgaWYob3B0aW9ucy5jb2x1bW5zID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5jb2x1bW5zID09PSBudWxsIHx8IG9wdGlvbnMuY29sdW1ucyA9PT0gZmFsc2Upe1xuICAgIG9wdGlvbnMuY29sdW1ucyA9IGZhbHNlO1xuICB9ZWxzZSB7XG4gICAgdGhyb3cgbmV3IENzdkVycm9yKCdDU1ZfSU5WQUxJRF9PUFRJT05fQ09MVU1OUycsIFtcbiAgICAgICdJbnZhbGlkIG9wdGlvbiBjb2x1bW5zOicsXG4gICAgICAnZXhwZWN0IGFuIGFycmF5LCBhIGZ1bmN0aW9uIG9yIHRydWUsJyxcbiAgICAgIGBnb3QgJHtKU09OLnN0cmluZ2lmeShvcHRpb25zLmNvbHVtbnMpfWBcbiAgICBdLCBvcHRpb25zKTtcbiAgfVxuICAvLyBOb3JtYWxpemUgb3B0aW9uIGBncm91cF9jb2x1bW5zX2J5X25hbWVgXG4gIGlmKG9wdGlvbnMuZ3JvdXBfY29sdW1uc19ieV9uYW1lID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5ncm91cF9jb2x1bW5zX2J5X25hbWUgPT09IG51bGwgfHwgb3B0aW9ucy5ncm91cF9jb2x1bW5zX2J5X25hbWUgPT09IGZhbHNlKXtcbiAgICBvcHRpb25zLmdyb3VwX2NvbHVtbnNfYnlfbmFtZSA9IGZhbHNlO1xuICB9ZWxzZSBpZihvcHRpb25zLmdyb3VwX2NvbHVtbnNfYnlfbmFtZSAhPT0gdHJ1ZSl7XG4gICAgdGhyb3cgbmV3IENzdkVycm9yKCdDU1ZfSU5WQUxJRF9PUFRJT05fR1JPVVBfQ09MVU1OU19CWV9OQU1FJywgW1xuICAgICAgJ0ludmFsaWQgb3B0aW9uIGdyb3VwX2NvbHVtbnNfYnlfbmFtZTonLFxuICAgICAgJ2V4cGVjdCBhbiBib29sZWFuLCcsXG4gICAgICBgZ290ICR7SlNPTi5zdHJpbmdpZnkob3B0aW9ucy5ncm91cF9jb2x1bW5zX2J5X25hbWUpfWBcbiAgICBdLCBvcHRpb25zKTtcbiAgfWVsc2UgaWYob3B0aW9ucy5jb2x1bW5zID09PSBmYWxzZSl7XG4gICAgdGhyb3cgbmV3IENzdkVycm9yKCdDU1ZfSU5WQUxJRF9PUFRJT05fR1JPVVBfQ09MVU1OU19CWV9OQU1FJywgW1xuICAgICAgJ0ludmFsaWQgb3B0aW9uIGdyb3VwX2NvbHVtbnNfYnlfbmFtZTonLFxuICAgICAgJ3RoZSBgY29sdW1uc2AgbW9kZSBtdXN0IGJlIGFjdGl2YXRlZC4nXG4gICAgXSwgb3B0aW9ucyk7XG4gIH1cbiAgLy8gTm9ybWFsaXplIG9wdGlvbiBgY29tbWVudGBcbiAgaWYob3B0aW9ucy5jb21tZW50ID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5jb21tZW50ID09PSBudWxsIHx8IG9wdGlvbnMuY29tbWVudCA9PT0gZmFsc2UgfHwgb3B0aW9ucy5jb21tZW50ID09PSAnJyl7XG4gICAgb3B0aW9ucy5jb21tZW50ID0gbnVsbDtcbiAgfWVsc2Uge1xuICAgIGlmKHR5cGVvZiBvcHRpb25zLmNvbW1lbnQgPT09ICdzdHJpbmcnKXtcbiAgICAgIG9wdGlvbnMuY29tbWVudCA9IEJ1ZmZlci5mcm9tKG9wdGlvbnMuY29tbWVudCwgb3B0aW9ucy5lbmNvZGluZyk7XG4gICAgfVxuICAgIGlmKCFpc0J1ZmZlcihvcHRpb25zLmNvbW1lbnQpKXtcbiAgICAgIHRocm93IG5ldyBDc3ZFcnJvcignQ1NWX0lOVkFMSURfT1BUSU9OX0NPTU1FTlQnLCBbXG4gICAgICAgICdJbnZhbGlkIG9wdGlvbiBjb21tZW50OicsXG4gICAgICAgICdjb21tZW50IG11c3QgYmUgYSBidWZmZXIgb3IgYSBzdHJpbmcsJyxcbiAgICAgICAgYGdvdCAke0pTT04uc3RyaW5naWZ5KG9wdGlvbnMuY29tbWVudCl9YFxuICAgICAgXSwgb3B0aW9ucyk7XG4gICAgfVxuICB9XG4gIC8vIE5vcm1hbGl6ZSBvcHRpb24gYGNvbW1lbnRfbm9faW5maXhgXG4gIGlmKG9wdGlvbnMuY29tbWVudF9ub19pbmZpeCA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMuY29tbWVudF9ub19pbmZpeCA9PT0gbnVsbCB8fCBvcHRpb25zLmNvbW1lbnRfbm9faW5maXggPT09IGZhbHNlKXtcbiAgICBvcHRpb25zLmNvbW1lbnRfbm9faW5maXggPSBmYWxzZTtcbiAgfWVsc2UgaWYob3B0aW9ucy5jb21tZW50X25vX2luZml4ICE9PSB0cnVlKXtcbiAgICB0aHJvdyBuZXcgQ3N2RXJyb3IoJ0NTVl9JTlZBTElEX09QVElPTl9DT01NRU5UJywgW1xuICAgICAgJ0ludmFsaWQgb3B0aW9uIGNvbW1lbnRfbm9faW5maXg6JyxcbiAgICAgICd2YWx1ZSBtdXN0IGJlIGEgYm9vbGVhbiwnLFxuICAgICAgYGdvdCAke0pTT04uc3RyaW5naWZ5KG9wdGlvbnMuY29tbWVudF9ub19pbmZpeCl9YFxuICAgIF0sIG9wdGlvbnMpO1xuICB9XG4gIC8vIE5vcm1hbGl6ZSBvcHRpb24gYGRlbGltaXRlcmBcbiAgY29uc3QgZGVsaW1pdGVyX2pzb24gPSBKU09OLnN0cmluZ2lmeShvcHRpb25zLmRlbGltaXRlcik7XG4gIGlmKCFBcnJheS5pc0FycmF5KG9wdGlvbnMuZGVsaW1pdGVyKSkgb3B0aW9ucy5kZWxpbWl0ZXIgPSBbb3B0aW9ucy5kZWxpbWl0ZXJdO1xuICBpZihvcHRpb25zLmRlbGltaXRlci5sZW5ndGggPT09IDApe1xuICAgIHRocm93IG5ldyBDc3ZFcnJvcignQ1NWX0lOVkFMSURfT1BUSU9OX0RFTElNSVRFUicsIFtcbiAgICAgICdJbnZhbGlkIG9wdGlvbiBkZWxpbWl0ZXI6JyxcbiAgICAgICdkZWxpbWl0ZXIgbXVzdCBiZSBhIG5vbiBlbXB0eSBzdHJpbmcgb3IgYnVmZmVyIG9yIGFycmF5IG9mIHN0cmluZ3xidWZmZXIsJyxcbiAgICAgIGBnb3QgJHtkZWxpbWl0ZXJfanNvbn1gXG4gICAgXSwgb3B0aW9ucyk7XG4gIH1cbiAgb3B0aW9ucy5kZWxpbWl0ZXIgPSBvcHRpb25zLmRlbGltaXRlci5tYXAoZnVuY3Rpb24oZGVsaW1pdGVyKXtcbiAgICBpZihkZWxpbWl0ZXIgPT09IHVuZGVmaW5lZCB8fCBkZWxpbWl0ZXIgPT09IG51bGwgfHwgZGVsaW1pdGVyID09PSBmYWxzZSl7XG4gICAgICByZXR1cm4gQnVmZmVyLmZyb20oJywnLCBvcHRpb25zLmVuY29kaW5nKTtcbiAgICB9XG4gICAgaWYodHlwZW9mIGRlbGltaXRlciA9PT0gJ3N0cmluZycpe1xuICAgICAgZGVsaW1pdGVyID0gQnVmZmVyLmZyb20oZGVsaW1pdGVyLCBvcHRpb25zLmVuY29kaW5nKTtcbiAgICB9XG4gICAgaWYoIWlzQnVmZmVyKGRlbGltaXRlcikgfHwgZGVsaW1pdGVyLmxlbmd0aCA9PT0gMCl7XG4gICAgICB0aHJvdyBuZXcgQ3N2RXJyb3IoJ0NTVl9JTlZBTElEX09QVElPTl9ERUxJTUlURVInLCBbXG4gICAgICAgICdJbnZhbGlkIG9wdGlvbiBkZWxpbWl0ZXI6JyxcbiAgICAgICAgJ2RlbGltaXRlciBtdXN0IGJlIGEgbm9uIGVtcHR5IHN0cmluZyBvciBidWZmZXIgb3IgYXJyYXkgb2Ygc3RyaW5nfGJ1ZmZlciwnLFxuICAgICAgICBgZ290ICR7ZGVsaW1pdGVyX2pzb259YFxuICAgICAgXSwgb3B0aW9ucyk7XG4gICAgfVxuICAgIHJldHVybiBkZWxpbWl0ZXI7XG4gIH0pO1xuICAvLyBOb3JtYWxpemUgb3B0aW9uIGBlc2NhcGVgXG4gIGlmKG9wdGlvbnMuZXNjYXBlID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5lc2NhcGUgPT09IHRydWUpe1xuICAgIG9wdGlvbnMuZXNjYXBlID0gQnVmZmVyLmZyb20oJ1wiJywgb3B0aW9ucy5lbmNvZGluZyk7XG4gIH1lbHNlIGlmKHR5cGVvZiBvcHRpb25zLmVzY2FwZSA9PT0gJ3N0cmluZycpe1xuICAgIG9wdGlvbnMuZXNjYXBlID0gQnVmZmVyLmZyb20ob3B0aW9ucy5lc2NhcGUsIG9wdGlvbnMuZW5jb2RpbmcpO1xuICB9ZWxzZSBpZiAob3B0aW9ucy5lc2NhcGUgPT09IG51bGwgfHwgb3B0aW9ucy5lc2NhcGUgPT09IGZhbHNlKXtcbiAgICBvcHRpb25zLmVzY2FwZSA9IG51bGw7XG4gIH1cbiAgaWYob3B0aW9ucy5lc2NhcGUgIT09IG51bGwpe1xuICAgIGlmKCFpc0J1ZmZlcihvcHRpb25zLmVzY2FwZSkpe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIE9wdGlvbjogZXNjYXBlIG11c3QgYmUgYSBidWZmZXIsIGEgc3RyaW5nIG9yIGEgYm9vbGVhbiwgZ290ICR7SlNPTi5zdHJpbmdpZnkob3B0aW9ucy5lc2NhcGUpfWApO1xuICAgIH1cbiAgfVxuICAvLyBOb3JtYWxpemUgb3B0aW9uIGBmcm9tYFxuICBpZihvcHRpb25zLmZyb20gPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLmZyb20gPT09IG51bGwpe1xuICAgIG9wdGlvbnMuZnJvbSA9IDE7XG4gIH1lbHNlIHtcbiAgICBpZih0eXBlb2Ygb3B0aW9ucy5mcm9tID09PSAnc3RyaW5nJyAmJiAvXFxkKy8udGVzdChvcHRpb25zLmZyb20pKXtcbiAgICAgIG9wdGlvbnMuZnJvbSA9IHBhcnNlSW50KG9wdGlvbnMuZnJvbSk7XG4gICAgfVxuICAgIGlmKE51bWJlci5pc0ludGVnZXIob3B0aW9ucy5mcm9tKSl7XG4gICAgICBpZihvcHRpb25zLmZyb20gPCAwKXtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIE9wdGlvbjogZnJvbSBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlciwgZ290ICR7SlNPTi5zdHJpbmdpZnkob3B0cy5mcm9tKX1gKTtcbiAgICAgIH1cbiAgICB9ZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgT3B0aW9uOiBmcm9tIG11c3QgYmUgYW4gaW50ZWdlciwgZ290ICR7SlNPTi5zdHJpbmdpZnkob3B0aW9ucy5mcm9tKX1gKTtcbiAgICB9XG4gIH1cbiAgLy8gTm9ybWFsaXplIG9wdGlvbiBgZnJvbV9saW5lYFxuICBpZihvcHRpb25zLmZyb21fbGluZSA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMuZnJvbV9saW5lID09PSBudWxsKXtcbiAgICBvcHRpb25zLmZyb21fbGluZSA9IDE7XG4gIH1lbHNlIHtcbiAgICBpZih0eXBlb2Ygb3B0aW9ucy5mcm9tX2xpbmUgPT09ICdzdHJpbmcnICYmIC9cXGQrLy50ZXN0KG9wdGlvbnMuZnJvbV9saW5lKSl7XG4gICAgICBvcHRpb25zLmZyb21fbGluZSA9IHBhcnNlSW50KG9wdGlvbnMuZnJvbV9saW5lKTtcbiAgICB9XG4gICAgaWYoTnVtYmVyLmlzSW50ZWdlcihvcHRpb25zLmZyb21fbGluZSkpe1xuICAgICAgaWYob3B0aW9ucy5mcm9tX2xpbmUgPD0gMCl7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBPcHRpb246IGZyb21fbGluZSBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlciBncmVhdGVyIHRoYW4gMCwgZ290ICR7SlNPTi5zdHJpbmdpZnkob3B0cy5mcm9tX2xpbmUpfWApO1xuICAgICAgfVxuICAgIH1lbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBPcHRpb246IGZyb21fbGluZSBtdXN0IGJlIGFuIGludGVnZXIsIGdvdCAke0pTT04uc3RyaW5naWZ5KG9wdHMuZnJvbV9saW5lKX1gKTtcbiAgICB9XG4gIH1cbiAgLy8gTm9ybWFsaXplIG9wdGlvbnMgYGlnbm9yZV9sYXN0X2RlbGltaXRlcnNgXG4gIGlmKG9wdGlvbnMuaWdub3JlX2xhc3RfZGVsaW1pdGVycyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMuaWdub3JlX2xhc3RfZGVsaW1pdGVycyA9PT0gbnVsbCl7XG4gICAgb3B0aW9ucy5pZ25vcmVfbGFzdF9kZWxpbWl0ZXJzID0gZmFsc2U7XG4gIH1lbHNlIGlmKHR5cGVvZiBvcHRpb25zLmlnbm9yZV9sYXN0X2RlbGltaXRlcnMgPT09ICdudW1iZXInKXtcbiAgICBvcHRpb25zLmlnbm9yZV9sYXN0X2RlbGltaXRlcnMgPSBNYXRoLmZsb29yKG9wdGlvbnMuaWdub3JlX2xhc3RfZGVsaW1pdGVycyk7XG4gICAgaWYob3B0aW9ucy5pZ25vcmVfbGFzdF9kZWxpbWl0ZXJzID09PSAwKXtcbiAgICAgIG9wdGlvbnMuaWdub3JlX2xhc3RfZGVsaW1pdGVycyA9IGZhbHNlO1xuICAgIH1cbiAgfWVsc2UgaWYodHlwZW9mIG9wdGlvbnMuaWdub3JlX2xhc3RfZGVsaW1pdGVycyAhPT0gJ2Jvb2xlYW4nKXtcbiAgICB0aHJvdyBuZXcgQ3N2RXJyb3IoJ0NTVl9JTlZBTElEX09QVElPTl9JR05PUkVfTEFTVF9ERUxJTUlURVJTJywgW1xuICAgICAgJ0ludmFsaWQgb3B0aW9uIGBpZ25vcmVfbGFzdF9kZWxpbWl0ZXJzYDonLFxuICAgICAgJ3RoZSB2YWx1ZSBtdXN0IGJlIGEgYm9vbGVhbiB2YWx1ZSBvciBhbiBpbnRlZ2VyLCcsXG4gICAgICBgZ290ICR7SlNPTi5zdHJpbmdpZnkob3B0aW9ucy5pZ25vcmVfbGFzdF9kZWxpbWl0ZXJzKX1gXG4gICAgXSwgb3B0aW9ucyk7XG4gIH1cbiAgaWYob3B0aW9ucy5pZ25vcmVfbGFzdF9kZWxpbWl0ZXJzID09PSB0cnVlICYmIG9wdGlvbnMuY29sdW1ucyA9PT0gZmFsc2Upe1xuICAgIHRocm93IG5ldyBDc3ZFcnJvcignQ1NWX0lHTk9SRV9MQVNUX0RFTElNSVRFUlNfUkVRVUlSRVNfQ09MVU1OUycsIFtcbiAgICAgICdUaGUgb3B0aW9uIGBpZ25vcmVfbGFzdF9kZWxpbWl0ZXJzYCcsXG4gICAgICAncmVxdWlyZXMgdGhlIGFjdGl2YXRpb24gb2YgdGhlIGBjb2x1bW5zYCBvcHRpb24nXG4gICAgXSwgb3B0aW9ucyk7XG4gIH1cbiAgLy8gTm9ybWFsaXplIG9wdGlvbiBgaW5mb2BcbiAgaWYob3B0aW9ucy5pbmZvID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5pbmZvID09PSBudWxsIHx8IG9wdGlvbnMuaW5mbyA9PT0gZmFsc2Upe1xuICAgIG9wdGlvbnMuaW5mbyA9IGZhbHNlO1xuICB9ZWxzZSBpZihvcHRpb25zLmluZm8gIT09IHRydWUpe1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBPcHRpb246IGluZm8gbXVzdCBiZSB0cnVlLCBnb3QgJHtKU09OLnN0cmluZ2lmeShvcHRpb25zLmluZm8pfWApO1xuICB9XG4gIC8vIE5vcm1hbGl6ZSBvcHRpb24gYG1heF9yZWNvcmRfc2l6ZWBcbiAgaWYob3B0aW9ucy5tYXhfcmVjb3JkX3NpemUgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLm1heF9yZWNvcmRfc2l6ZSA9PT0gbnVsbCB8fCBvcHRpb25zLm1heF9yZWNvcmRfc2l6ZSA9PT0gZmFsc2Upe1xuICAgIG9wdGlvbnMubWF4X3JlY29yZF9zaXplID0gMDtcbiAgfWVsc2UgaWYoTnVtYmVyLmlzSW50ZWdlcihvcHRpb25zLm1heF9yZWNvcmRfc2l6ZSkgJiYgb3B0aW9ucy5tYXhfcmVjb3JkX3NpemUgPj0gMCk7ZWxzZSBpZih0eXBlb2Ygb3B0aW9ucy5tYXhfcmVjb3JkX3NpemUgPT09ICdzdHJpbmcnICYmIC9cXGQrLy50ZXN0KG9wdGlvbnMubWF4X3JlY29yZF9zaXplKSl7XG4gICAgb3B0aW9ucy5tYXhfcmVjb3JkX3NpemUgPSBwYXJzZUludChvcHRpb25zLm1heF9yZWNvcmRfc2l6ZSk7XG4gIH1lbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgT3B0aW9uOiBtYXhfcmVjb3JkX3NpemUgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXIsIGdvdCAke0pTT04uc3RyaW5naWZ5KG9wdGlvbnMubWF4X3JlY29yZF9zaXplKX1gKTtcbiAgfVxuICAvLyBOb3JtYWxpemUgb3B0aW9uIGBvYmpuYW1lYFxuICBpZihvcHRpb25zLm9iam5hbWUgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLm9iam5hbWUgPT09IG51bGwgfHwgb3B0aW9ucy5vYmpuYW1lID09PSBmYWxzZSl7XG4gICAgb3B0aW9ucy5vYmpuYW1lID0gdW5kZWZpbmVkO1xuICB9ZWxzZSBpZihpc0J1ZmZlcihvcHRpb25zLm9iam5hbWUpKXtcbiAgICBpZihvcHRpb25zLm9iam5hbWUubGVuZ3RoID09PSAwKXtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBPcHRpb246IG9iam5hbWUgbXVzdCBiZSBhIG5vbiBlbXB0eSBidWZmZXJgKTtcbiAgICB9XG4gICAgaWYob3B0aW9ucy5lbmNvZGluZyA9PT0gbnVsbCk7ZWxzZSB7XG4gICAgICBvcHRpb25zLm9iam5hbWUgPSBvcHRpb25zLm9iam5hbWUudG9TdHJpbmcob3B0aW9ucy5lbmNvZGluZyk7XG4gICAgfVxuICB9ZWxzZSBpZih0eXBlb2Ygb3B0aW9ucy5vYmpuYW1lID09PSAnc3RyaW5nJyl7XG4gICAgaWYob3B0aW9ucy5vYmpuYW1lLmxlbmd0aCA9PT0gMCl7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgT3B0aW9uOiBvYmpuYW1lIG11c3QgYmUgYSBub24gZW1wdHkgc3RyaW5nYCk7XG4gICAgfVxuICAgIC8vIEdyZWF0LCBub3RoaW5nIHRvIGRvXG4gIH1lbHNlIGlmKHR5cGVvZiBvcHRpb25zLm9iam5hbWUgPT09ICdudW1iZXInKTtlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgT3B0aW9uOiBvYmpuYW1lIG11c3QgYmUgYSBzdHJpbmcgb3IgYSBidWZmZXIsIGdvdCAke29wdGlvbnMub2JqbmFtZX1gKTtcbiAgfVxuICBpZihvcHRpb25zLm9iam5hbWUgIT09IHVuZGVmaW5lZCl7XG4gICAgaWYodHlwZW9mIG9wdGlvbnMub2JqbmFtZSA9PT0gJ251bWJlcicpe1xuICAgICAgaWYob3B0aW9ucy5jb2x1bW5zICE9PSBmYWxzZSl7XG4gICAgICAgIHRocm93IEVycm9yKCdJbnZhbGlkIE9wdGlvbjogb2JqbmFtZSBpbmRleCBjYW5ub3QgYmUgY29tYmluZWQgd2l0aCBjb2x1bW5zIG9yIGJlIGRlZmluZWQgYXMgYSBmaWVsZCcpO1xuICAgICAgfVxuICAgIH1lbHNlIHsgLy8gQSBzdHJpbmcgb3IgYSBidWZmZXJcbiAgICAgIGlmKG9wdGlvbnMuY29sdW1ucyA9PT0gZmFsc2Upe1xuICAgICAgICB0aHJvdyBFcnJvcignSW52YWxpZCBPcHRpb246IG9iam5hbWUgZmllbGQgbXVzdCBiZSBjb21iaW5lZCB3aXRoIGNvbHVtbnMgb3IgYmUgZGVmaW5lZCBhcyBhbiBpbmRleCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBOb3JtYWxpemUgb3B0aW9uIGBvbl9yZWNvcmRgXG4gIGlmKG9wdGlvbnMub25fcmVjb3JkID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5vbl9yZWNvcmQgPT09IG51bGwpe1xuICAgIG9wdGlvbnMub25fcmVjb3JkID0gdW5kZWZpbmVkO1xuICB9ZWxzZSBpZih0eXBlb2Ygb3B0aW9ucy5vbl9yZWNvcmQgIT09ICdmdW5jdGlvbicpe1xuICAgIHRocm93IG5ldyBDc3ZFcnJvcignQ1NWX0lOVkFMSURfT1BUSU9OX09OX1JFQ09SRCcsIFtcbiAgICAgICdJbnZhbGlkIG9wdGlvbiBgb25fcmVjb3JkYDonLFxuICAgICAgJ2V4cGVjdCBhIGZ1bmN0aW9uLCcsXG4gICAgICBgZ290ICR7SlNPTi5zdHJpbmdpZnkob3B0aW9ucy5vbl9yZWNvcmQpfWBcbiAgICBdLCBvcHRpb25zKTtcbiAgfVxuICAvLyBOb3JtYWxpemUgb3B0aW9uIGBvbl9za2lwYFxuICAvLyBvcHRpb25zLm9uX3NraXAgPz89IChlcnIsIGNodW5rKSA9PiB7XG4gIC8vICAgdGhpcy5lbWl0KCdza2lwJywgZXJyLCBjaHVuayk7XG4gIC8vIH07XG4gIGlmKG9wdGlvbnMub25fc2tpcCAhPT0gdW5kZWZpbmVkICYmIG9wdGlvbnMub25fc2tpcCAhPT0gbnVsbCAmJiB0eXBlb2Ygb3B0aW9ucy5vbl9za2lwICE9PSAnZnVuY3Rpb24nKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgT3B0aW9uOiBvbl9za2lwIG11c3QgYmUgYSBmdW5jdGlvbiwgZ290ICR7SlNPTi5zdHJpbmdpZnkob3B0aW9ucy5vbl9za2lwKX1gKTtcbiAgfVxuICAvLyBOb3JtYWxpemUgb3B0aW9uIGBxdW90ZWBcbiAgaWYob3B0aW9ucy5xdW90ZSA9PT0gbnVsbCB8fCBvcHRpb25zLnF1b3RlID09PSBmYWxzZSB8fCBvcHRpb25zLnF1b3RlID09PSAnJyl7XG4gICAgb3B0aW9ucy5xdW90ZSA9IG51bGw7XG4gIH1lbHNlIHtcbiAgICBpZihvcHRpb25zLnF1b3RlID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5xdW90ZSA9PT0gdHJ1ZSl7XG4gICAgICBvcHRpb25zLnF1b3RlID0gQnVmZmVyLmZyb20oJ1wiJywgb3B0aW9ucy5lbmNvZGluZyk7XG4gICAgfWVsc2UgaWYodHlwZW9mIG9wdGlvbnMucXVvdGUgPT09ICdzdHJpbmcnKXtcbiAgICAgIG9wdGlvbnMucXVvdGUgPSBCdWZmZXIuZnJvbShvcHRpb25zLnF1b3RlLCBvcHRpb25zLmVuY29kaW5nKTtcbiAgICB9XG4gICAgaWYoIWlzQnVmZmVyKG9wdGlvbnMucXVvdGUpKXtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBPcHRpb246IHF1b3RlIG11c3QgYmUgYSBidWZmZXIgb3IgYSBzdHJpbmcsIGdvdCAke0pTT04uc3RyaW5naWZ5KG9wdGlvbnMucXVvdGUpfWApO1xuICAgIH1cbiAgfVxuICAvLyBOb3JtYWxpemUgb3B0aW9uIGByYXdgXG4gIGlmKG9wdGlvbnMucmF3ID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5yYXcgPT09IG51bGwgfHwgb3B0aW9ucy5yYXcgPT09IGZhbHNlKXtcbiAgICBvcHRpb25zLnJhdyA9IGZhbHNlO1xuICB9ZWxzZSBpZihvcHRpb25zLnJhdyAhPT0gdHJ1ZSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIE9wdGlvbjogcmF3IG11c3QgYmUgdHJ1ZSwgZ290ICR7SlNPTi5zdHJpbmdpZnkob3B0aW9ucy5yYXcpfWApO1xuICB9XG4gIC8vIE5vcm1hbGl6ZSBvcHRpb24gYHJlY29yZF9kZWxpbWl0ZXJgXG4gIGlmKG9wdGlvbnMucmVjb3JkX2RlbGltaXRlciA9PT0gdW5kZWZpbmVkKXtcbiAgICBvcHRpb25zLnJlY29yZF9kZWxpbWl0ZXIgPSBbXTtcbiAgfWVsc2UgaWYodHlwZW9mIG9wdGlvbnMucmVjb3JkX2RlbGltaXRlciA9PT0gJ3N0cmluZycgfHwgaXNCdWZmZXIob3B0aW9ucy5yZWNvcmRfZGVsaW1pdGVyKSl7XG4gICAgaWYob3B0aW9ucy5yZWNvcmRfZGVsaW1pdGVyLmxlbmd0aCA9PT0gMCl7XG4gICAgICB0aHJvdyBuZXcgQ3N2RXJyb3IoJ0NTVl9JTlZBTElEX09QVElPTl9SRUNPUkRfREVMSU1JVEVSJywgW1xuICAgICAgICAnSW52YWxpZCBvcHRpb24gYHJlY29yZF9kZWxpbWl0ZXJgOicsXG4gICAgICAgICd2YWx1ZSBtdXN0IGJlIGEgbm9uIGVtcHR5IHN0cmluZyBvciBidWZmZXIsJyxcbiAgICAgICAgYGdvdCAke0pTT04uc3RyaW5naWZ5KG9wdGlvbnMucmVjb3JkX2RlbGltaXRlcil9YFxuICAgICAgXSwgb3B0aW9ucyk7XG4gICAgfVxuICAgIG9wdGlvbnMucmVjb3JkX2RlbGltaXRlciA9IFtvcHRpb25zLnJlY29yZF9kZWxpbWl0ZXJdO1xuICB9ZWxzZSBpZighQXJyYXkuaXNBcnJheShvcHRpb25zLnJlY29yZF9kZWxpbWl0ZXIpKXtcbiAgICB0aHJvdyBuZXcgQ3N2RXJyb3IoJ0NTVl9JTlZBTElEX09QVElPTl9SRUNPUkRfREVMSU1JVEVSJywgW1xuICAgICAgJ0ludmFsaWQgb3B0aW9uIGByZWNvcmRfZGVsaW1pdGVyYDonLFxuICAgICAgJ3ZhbHVlIG11c3QgYmUgYSBzdHJpbmcsIGEgYnVmZmVyIG9yIGFycmF5IG9mIHN0cmluZ3xidWZmZXIsJyxcbiAgICAgIGBnb3QgJHtKU09OLnN0cmluZ2lmeShvcHRpb25zLnJlY29yZF9kZWxpbWl0ZXIpfWBcbiAgICBdLCBvcHRpb25zKTtcbiAgfVxuICBvcHRpb25zLnJlY29yZF9kZWxpbWl0ZXIgPSBvcHRpb25zLnJlY29yZF9kZWxpbWl0ZXIubWFwKGZ1bmN0aW9uKHJkLCBpKXtcbiAgICBpZih0eXBlb2YgcmQgIT09ICdzdHJpbmcnICYmICEgaXNCdWZmZXIocmQpKXtcbiAgICAgIHRocm93IG5ldyBDc3ZFcnJvcignQ1NWX0lOVkFMSURfT1BUSU9OX1JFQ09SRF9ERUxJTUlURVInLCBbXG4gICAgICAgICdJbnZhbGlkIG9wdGlvbiBgcmVjb3JkX2RlbGltaXRlcmA6JyxcbiAgICAgICAgJ3ZhbHVlIG11c3QgYmUgYSBzdHJpbmcsIGEgYnVmZmVyIG9yIGFycmF5IG9mIHN0cmluZ3xidWZmZXInLFxuICAgICAgICBgYXQgaW5kZXggJHtpfSxgLFxuICAgICAgICBgZ290ICR7SlNPTi5zdHJpbmdpZnkocmQpfWBcbiAgICAgIF0sIG9wdGlvbnMpO1xuICAgIH1lbHNlIGlmKHJkLmxlbmd0aCA9PT0gMCl7XG4gICAgICB0aHJvdyBuZXcgQ3N2RXJyb3IoJ0NTVl9JTlZBTElEX09QVElPTl9SRUNPUkRfREVMSU1JVEVSJywgW1xuICAgICAgICAnSW52YWxpZCBvcHRpb24gYHJlY29yZF9kZWxpbWl0ZXJgOicsXG4gICAgICAgICd2YWx1ZSBtdXN0IGJlIGEgbm9uIGVtcHR5IHN0cmluZyBvciBidWZmZXInLFxuICAgICAgICBgYXQgaW5kZXggJHtpfSxgLFxuICAgICAgICBgZ290ICR7SlNPTi5zdHJpbmdpZnkocmQpfWBcbiAgICAgIF0sIG9wdGlvbnMpO1xuICAgIH1cbiAgICBpZih0eXBlb2YgcmQgPT09ICdzdHJpbmcnKXtcbiAgICAgIHJkID0gQnVmZmVyLmZyb20ocmQsIG9wdGlvbnMuZW5jb2RpbmcpO1xuICAgIH1cbiAgICByZXR1cm4gcmQ7XG4gIH0pO1xuICAvLyBOb3JtYWxpemUgb3B0aW9uIGByZWxheF9jb2x1bW5fY291bnRgXG4gIGlmKHR5cGVvZiBvcHRpb25zLnJlbGF4X2NvbHVtbl9jb3VudCA9PT0gJ2Jvb2xlYW4nKTtlbHNlIGlmKG9wdGlvbnMucmVsYXhfY29sdW1uX2NvdW50ID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5yZWxheF9jb2x1bW5fY291bnQgPT09IG51bGwpe1xuICAgIG9wdGlvbnMucmVsYXhfY29sdW1uX2NvdW50ID0gZmFsc2U7XG4gIH1lbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgT3B0aW9uOiByZWxheF9jb2x1bW5fY291bnQgbXVzdCBiZSBhIGJvb2xlYW4sIGdvdCAke0pTT04uc3RyaW5naWZ5KG9wdGlvbnMucmVsYXhfY29sdW1uX2NvdW50KX1gKTtcbiAgfVxuICBpZih0eXBlb2Ygb3B0aW9ucy5yZWxheF9jb2x1bW5fY291bnRfbGVzcyA9PT0gJ2Jvb2xlYW4nKTtlbHNlIGlmKG9wdGlvbnMucmVsYXhfY29sdW1uX2NvdW50X2xlc3MgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnJlbGF4X2NvbHVtbl9jb3VudF9sZXNzID09PSBudWxsKXtcbiAgICBvcHRpb25zLnJlbGF4X2NvbHVtbl9jb3VudF9sZXNzID0gZmFsc2U7XG4gIH1lbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgT3B0aW9uOiByZWxheF9jb2x1bW5fY291bnRfbGVzcyBtdXN0IGJlIGEgYm9vbGVhbiwgZ290ICR7SlNPTi5zdHJpbmdpZnkob3B0aW9ucy5yZWxheF9jb2x1bW5fY291bnRfbGVzcyl9YCk7XG4gIH1cbiAgaWYodHlwZW9mIG9wdGlvbnMucmVsYXhfY29sdW1uX2NvdW50X21vcmUgPT09ICdib29sZWFuJyk7ZWxzZSBpZihvcHRpb25zLnJlbGF4X2NvbHVtbl9jb3VudF9tb3JlID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5yZWxheF9jb2x1bW5fY291bnRfbW9yZSA9PT0gbnVsbCl7XG4gICAgb3B0aW9ucy5yZWxheF9jb2x1bW5fY291bnRfbW9yZSA9IGZhbHNlO1xuICB9ZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIE9wdGlvbjogcmVsYXhfY29sdW1uX2NvdW50X21vcmUgbXVzdCBiZSBhIGJvb2xlYW4sIGdvdCAke0pTT04uc3RyaW5naWZ5KG9wdGlvbnMucmVsYXhfY29sdW1uX2NvdW50X21vcmUpfWApO1xuICB9XG4gIC8vIE5vcm1hbGl6ZSBvcHRpb24gYHJlbGF4X3F1b3Rlc2BcbiAgaWYodHlwZW9mIG9wdGlvbnMucmVsYXhfcXVvdGVzID09PSAnYm9vbGVhbicpO2Vsc2UgaWYob3B0aW9ucy5yZWxheF9xdW90ZXMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnJlbGF4X3F1b3RlcyA9PT0gbnVsbCl7XG4gICAgb3B0aW9ucy5yZWxheF9xdW90ZXMgPSBmYWxzZTtcbiAgfWVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBPcHRpb246IHJlbGF4X3F1b3RlcyBtdXN0IGJlIGEgYm9vbGVhbiwgZ290ICR7SlNPTi5zdHJpbmdpZnkob3B0aW9ucy5yZWxheF9xdW90ZXMpfWApO1xuICB9XG4gIC8vIE5vcm1hbGl6ZSBvcHRpb24gYHNraXBfZW1wdHlfbGluZXNgXG4gIGlmKHR5cGVvZiBvcHRpb25zLnNraXBfZW1wdHlfbGluZXMgPT09ICdib29sZWFuJyk7ZWxzZSBpZihvcHRpb25zLnNraXBfZW1wdHlfbGluZXMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnNraXBfZW1wdHlfbGluZXMgPT09IG51bGwpe1xuICAgIG9wdGlvbnMuc2tpcF9lbXB0eV9saW5lcyA9IGZhbHNlO1xuICB9ZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIE9wdGlvbjogc2tpcF9lbXB0eV9saW5lcyBtdXN0IGJlIGEgYm9vbGVhbiwgZ290ICR7SlNPTi5zdHJpbmdpZnkob3B0aW9ucy5za2lwX2VtcHR5X2xpbmVzKX1gKTtcbiAgfVxuICAvLyBOb3JtYWxpemUgb3B0aW9uIGBza2lwX3JlY29yZHNfd2l0aF9lbXB0eV92YWx1ZXNgXG4gIGlmKHR5cGVvZiBvcHRpb25zLnNraXBfcmVjb3Jkc193aXRoX2VtcHR5X3ZhbHVlcyA9PT0gJ2Jvb2xlYW4nKTtlbHNlIGlmKG9wdGlvbnMuc2tpcF9yZWNvcmRzX3dpdGhfZW1wdHlfdmFsdWVzID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5za2lwX3JlY29yZHNfd2l0aF9lbXB0eV92YWx1ZXMgPT09IG51bGwpe1xuICAgIG9wdGlvbnMuc2tpcF9yZWNvcmRzX3dpdGhfZW1wdHlfdmFsdWVzID0gZmFsc2U7XG4gIH1lbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgT3B0aW9uOiBza2lwX3JlY29yZHNfd2l0aF9lbXB0eV92YWx1ZXMgbXVzdCBiZSBhIGJvb2xlYW4sIGdvdCAke0pTT04uc3RyaW5naWZ5KG9wdGlvbnMuc2tpcF9yZWNvcmRzX3dpdGhfZW1wdHlfdmFsdWVzKX1gKTtcbiAgfVxuICAvLyBOb3JtYWxpemUgb3B0aW9uIGBza2lwX3JlY29yZHNfd2l0aF9lcnJvcmBcbiAgaWYodHlwZW9mIG9wdGlvbnMuc2tpcF9yZWNvcmRzX3dpdGhfZXJyb3IgPT09ICdib29sZWFuJyk7ZWxzZSBpZihvcHRpb25zLnNraXBfcmVjb3Jkc193aXRoX2Vycm9yID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5za2lwX3JlY29yZHNfd2l0aF9lcnJvciA9PT0gbnVsbCl7XG4gICAgb3B0aW9ucy5za2lwX3JlY29yZHNfd2l0aF9lcnJvciA9IGZhbHNlO1xuICB9ZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIE9wdGlvbjogc2tpcF9yZWNvcmRzX3dpdGhfZXJyb3IgbXVzdCBiZSBhIGJvb2xlYW4sIGdvdCAke0pTT04uc3RyaW5naWZ5KG9wdGlvbnMuc2tpcF9yZWNvcmRzX3dpdGhfZXJyb3IpfWApO1xuICB9XG4gIC8vIE5vcm1hbGl6ZSBvcHRpb24gYHJ0cmltYFxuICBpZihvcHRpb25zLnJ0cmltID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5ydHJpbSA9PT0gbnVsbCB8fCBvcHRpb25zLnJ0cmltID09PSBmYWxzZSl7XG4gICAgb3B0aW9ucy5ydHJpbSA9IGZhbHNlO1xuICB9ZWxzZSBpZihvcHRpb25zLnJ0cmltICE9PSB0cnVlKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgT3B0aW9uOiBydHJpbSBtdXN0IGJlIGEgYm9vbGVhbiwgZ290ICR7SlNPTi5zdHJpbmdpZnkob3B0aW9ucy5ydHJpbSl9YCk7XG4gIH1cbiAgLy8gTm9ybWFsaXplIG9wdGlvbiBgbHRyaW1gXG4gIGlmKG9wdGlvbnMubHRyaW0gPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLmx0cmltID09PSBudWxsIHx8IG9wdGlvbnMubHRyaW0gPT09IGZhbHNlKXtcbiAgICBvcHRpb25zLmx0cmltID0gZmFsc2U7XG4gIH1lbHNlIGlmKG9wdGlvbnMubHRyaW0gIT09IHRydWUpe1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBPcHRpb246IGx0cmltIG11c3QgYmUgYSBib29sZWFuLCBnb3QgJHtKU09OLnN0cmluZ2lmeShvcHRpb25zLmx0cmltKX1gKTtcbiAgfVxuICAvLyBOb3JtYWxpemUgb3B0aW9uIGB0cmltYFxuICBpZihvcHRpb25zLnRyaW0gPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnRyaW0gPT09IG51bGwgfHwgb3B0aW9ucy50cmltID09PSBmYWxzZSl7XG4gICAgb3B0aW9ucy50cmltID0gZmFsc2U7XG4gIH1lbHNlIGlmKG9wdGlvbnMudHJpbSAhPT0gdHJ1ZSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIE9wdGlvbjogdHJpbSBtdXN0IGJlIGEgYm9vbGVhbiwgZ290ICR7SlNPTi5zdHJpbmdpZnkob3B0aW9ucy50cmltKX1gKTtcbiAgfVxuICAvLyBOb3JtYWxpemUgb3B0aW9ucyBgdHJpbWAsIGBsdHJpbWAgYW5kIGBydHJpbWBcbiAgaWYob3B0aW9ucy50cmltID09PSB0cnVlICYmIG9wdHMubHRyaW0gIT09IGZhbHNlKXtcbiAgICBvcHRpb25zLmx0cmltID0gdHJ1ZTtcbiAgfWVsc2UgaWYob3B0aW9ucy5sdHJpbSAhPT0gdHJ1ZSl7XG4gICAgb3B0aW9ucy5sdHJpbSA9IGZhbHNlO1xuICB9XG4gIGlmKG9wdGlvbnMudHJpbSA9PT0gdHJ1ZSAmJiBvcHRzLnJ0cmltICE9PSBmYWxzZSl7XG4gICAgb3B0aW9ucy5ydHJpbSA9IHRydWU7XG4gIH1lbHNlIGlmKG9wdGlvbnMucnRyaW0gIT09IHRydWUpe1xuICAgIG9wdGlvbnMucnRyaW0gPSBmYWxzZTtcbiAgfVxuICAvLyBOb3JtYWxpemUgb3B0aW9uIGB0b2BcbiAgaWYob3B0aW9ucy50byA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMudG8gPT09IG51bGwpe1xuICAgIG9wdGlvbnMudG8gPSAtMTtcbiAgfWVsc2Uge1xuICAgIGlmKHR5cGVvZiBvcHRpb25zLnRvID09PSAnc3RyaW5nJyAmJiAvXFxkKy8udGVzdChvcHRpb25zLnRvKSl7XG4gICAgICBvcHRpb25zLnRvID0gcGFyc2VJbnQob3B0aW9ucy50byk7XG4gICAgfVxuICAgIGlmKE51bWJlci5pc0ludGVnZXIob3B0aW9ucy50bykpe1xuICAgICAgaWYob3B0aW9ucy50byA8PSAwKXtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIE9wdGlvbjogdG8gbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXIgZ3JlYXRlciB0aGFuIDAsIGdvdCAke0pTT04uc3RyaW5naWZ5KG9wdHMudG8pfWApO1xuICAgICAgfVxuICAgIH1lbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBPcHRpb246IHRvIG11c3QgYmUgYW4gaW50ZWdlciwgZ290ICR7SlNPTi5zdHJpbmdpZnkob3B0cy50byl9YCk7XG4gICAgfVxuICB9XG4gIC8vIE5vcm1hbGl6ZSBvcHRpb24gYHRvX2xpbmVgXG4gIGlmKG9wdGlvbnMudG9fbGluZSA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMudG9fbGluZSA9PT0gbnVsbCl7XG4gICAgb3B0aW9ucy50b19saW5lID0gLTE7XG4gIH1lbHNlIHtcbiAgICBpZih0eXBlb2Ygb3B0aW9ucy50b19saW5lID09PSAnc3RyaW5nJyAmJiAvXFxkKy8udGVzdChvcHRpb25zLnRvX2xpbmUpKXtcbiAgICAgIG9wdGlvbnMudG9fbGluZSA9IHBhcnNlSW50KG9wdGlvbnMudG9fbGluZSk7XG4gICAgfVxuICAgIGlmKE51bWJlci5pc0ludGVnZXIob3B0aW9ucy50b19saW5lKSl7XG4gICAgICBpZihvcHRpb25zLnRvX2xpbmUgPD0gMCl7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBPcHRpb246IHRvX2xpbmUgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXIgZ3JlYXRlciB0aGFuIDAsIGdvdCAke0pTT04uc3RyaW5naWZ5KG9wdHMudG9fbGluZSl9YCk7XG4gICAgICB9XG4gICAgfWVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIE9wdGlvbjogdG9fbGluZSBtdXN0IGJlIGFuIGludGVnZXIsIGdvdCAke0pTT04uc3RyaW5naWZ5KG9wdHMudG9fbGluZSl9YCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBvcHRpb25zO1xufTtcblxuY29uc3QgaXNSZWNvcmRFbXB0eSA9IGZ1bmN0aW9uKHJlY29yZCl7XG4gIHJldHVybiByZWNvcmQuZXZlcnkoKGZpZWxkKSA9PiBmaWVsZCA9PSBudWxsIHx8IGZpZWxkLnRvU3RyaW5nICYmIGZpZWxkLnRvU3RyaW5nKCkudHJpbSgpID09PSAnJyk7XG59O1xuXG5jb25zdCBjciA9IDEzOyAvLyBgXFxyYCwgY2FycmlhZ2UgcmV0dXJuLCAweDBEIGluIGhleGFkw6ljaW1hbCwgMTMgaW4gZGVjaW1hbFxuY29uc3QgbmwgPSAxMDsgLy8gYFxcbmAsIG5ld2xpbmUsIDB4MEEgaW4gaGV4YWRlY2ltYWwsIDEwIGluIGRlY2ltYWxcblxuY29uc3QgYm9tcyA9IHtcbiAgLy8gTm90ZSwgdGhlIGZvbGxvd2luZyBhcmUgZXF1YWxzOlxuICAvLyBCdWZmZXIuZnJvbShcIlxcdWZlZmZcIilcbiAgLy8gQnVmZmVyLmZyb20oWzIzOSwgMTg3LCAxOTFdKVxuICAvLyBCdWZmZXIuZnJvbSgnRUZCQkJGJywgJ2hleCcpXG4gICd1dGY4JzogQnVmZmVyLmZyb20oWzIzOSwgMTg3LCAxOTFdKSxcbiAgLy8gTm90ZSwgdGhlIGZvbGxvd2luZyBhcmUgZXF1YWxzOlxuICAvLyBCdWZmZXIuZnJvbSBcIlxcdWZlZmZcIiwgJ3V0ZjE2bGVcbiAgLy8gQnVmZmVyLmZyb20oWzI1NSwgMjU0XSlcbiAgJ3V0ZjE2bGUnOiBCdWZmZXIuZnJvbShbMjU1LCAyNTRdKVxufTtcblxuY29uc3QgdHJhbnNmb3JtID0gZnVuY3Rpb24ob3JpZ2luYWxfb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IGluZm8gPSB7XG4gICAgYnl0ZXM6IDAsXG4gICAgY29tbWVudF9saW5lczogMCxcbiAgICBlbXB0eV9saW5lczogMCxcbiAgICBpbnZhbGlkX2ZpZWxkX2xlbmd0aDogMCxcbiAgICBsaW5lczogMSxcbiAgICByZWNvcmRzOiAwXG4gIH07XG4gIGNvbnN0IG9wdGlvbnMgPSBub3JtYWxpemVfb3B0aW9ucyhvcmlnaW5hbF9vcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICBpbmZvOiBpbmZvLFxuICAgIG9yaWdpbmFsX29wdGlvbnM6IG9yaWdpbmFsX29wdGlvbnMsXG4gICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICBzdGF0ZTogaW5pdF9zdGF0ZShvcHRpb25zKSxcbiAgICBfX25lZWRNb3JlRGF0YTogZnVuY3Rpb24oaSwgYnVmTGVuLCBlbmQpe1xuICAgICAgaWYoZW5kKSByZXR1cm4gZmFsc2U7XG4gICAgICBjb25zdCB7ZW5jb2RpbmcsIGVzY2FwZSwgcXVvdGV9ID0gdGhpcy5vcHRpb25zO1xuICAgICAgY29uc3Qge3F1b3RpbmcsIG5lZWRNb3JlRGF0YVNpemUsIHJlY29yZERlbGltaXRlck1heExlbmd0aH0gPSB0aGlzLnN0YXRlO1xuICAgICAgY29uc3QgbnVtT2ZDaGFyTGVmdCA9IGJ1ZkxlbiAtIGkgLSAxO1xuICAgICAgY29uc3QgcmVxdWlyZWRMZW5ndGggPSBNYXRoLm1heChcbiAgICAgICAgbmVlZE1vcmVEYXRhU2l6ZSxcbiAgICAgICAgLy8gU2tpcCBpZiB0aGUgcmVtYWluaW5nIGJ1ZmZlciBzbWFsbGVyIHRoYW4gcmVjb3JkIGRlbGltaXRlclxuICAgICAgICAvLyBJZiBcInJlY29yZF9kZWxpbWl0ZXJcIiBpcyB5ZXQgdG8gYmUgZGlzY292ZXJlZDpcbiAgICAgICAgLy8gMS4gSXQgaXMgZXF1YWxzIHRvIGBbXWAgYW5kIFwicmVjb3JkRGVsaW1pdGVyTWF4TGVuZ3RoXCIgZXF1YWxzIGAwYFxuICAgICAgICAvLyAyLiBXZSBzZXQgdGhlIGxlbmd0aCB0byB3aW5kb3dzIGxpbmUgZW5kaW5nIGluIHRoZSBjdXJyZW50IGVuY29kaW5nXG4gICAgICAgIC8vIE5vdGUsIHRoYXQgZW5jb2RpbmcgaXMga25vd24gZnJvbSB1c2VyIG9yIGJvbSBkaXNjb3ZlcnkgYXQgdGhhdCBwb2ludFxuICAgICAgICAvLyByZWNvcmREZWxpbWl0ZXJNYXhMZW5ndGgsXG4gICAgICAgIHJlY29yZERlbGltaXRlck1heExlbmd0aCA9PT0gMCA/IEJ1ZmZlci5mcm9tKCdcXHJcXG4nLCBlbmNvZGluZykubGVuZ3RoIDogcmVjb3JkRGVsaW1pdGVyTWF4TGVuZ3RoLFxuICAgICAgICAvLyBTa2lwIGlmIHJlbWFpbmluZyBidWZmZXIgY2FuIGJlIGFuIGVzY2FwZWQgcXVvdGVcbiAgICAgICAgcXVvdGluZyA/ICgoZXNjYXBlID09PSBudWxsID8gMCA6IGVzY2FwZS5sZW5ndGgpICsgcXVvdGUubGVuZ3RoKSA6IDAsXG4gICAgICAgIC8vIFNraXAgaWYgcmVtYWluaW5nIGJ1ZmZlciBjYW4gYmUgcmVjb3JkIGRlbGltaXRlciBmb2xsb3dpbmcgdGhlIGNsb3NpbmcgcXVvdGVcbiAgICAgICAgcXVvdGluZyA/IChxdW90ZS5sZW5ndGggKyByZWNvcmREZWxpbWl0ZXJNYXhMZW5ndGgpIDogMCxcbiAgICAgICk7XG4gICAgICByZXR1cm4gbnVtT2ZDaGFyTGVmdCA8IHJlcXVpcmVkTGVuZ3RoO1xuICAgIH0sXG4gICAgLy8gQ2VudHJhbCBwYXJzZXIgaW1wbGVtZW50YXRpb25cbiAgICBwYXJzZTogZnVuY3Rpb24obmV4dEJ1ZiwgZW5kLCBwdXNoLCBjbG9zZSl7XG4gICAgICBjb25zdCB7Ym9tLCBjb21tZW50X25vX2luZml4LCBlbmNvZGluZywgZnJvbV9saW5lLCBsdHJpbSwgbWF4X3JlY29yZF9zaXplLHJhdywgcmVsYXhfcXVvdGVzLCBydHJpbSwgc2tpcF9lbXB0eV9saW5lcywgdG8sIHRvX2xpbmV9ID0gdGhpcy5vcHRpb25zO1xuICAgICAgbGV0IHtjb21tZW50LCBlc2NhcGUsIHF1b3RlLCByZWNvcmRfZGVsaW1pdGVyfSA9IHRoaXMub3B0aW9ucztcbiAgICAgIGNvbnN0IHtib21Ta2lwcGVkLCBwcmV2aW91c0J1ZiwgcmF3QnVmZmVyLCBlc2NhcGVJc1F1b3RlfSA9IHRoaXMuc3RhdGU7XG4gICAgICBsZXQgYnVmO1xuICAgICAgaWYocHJldmlvdXNCdWYgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgIGlmKG5leHRCdWYgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgLy8gSGFuZGxlIGVtcHR5IHN0cmluZ1xuICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgYnVmID0gbmV4dEJ1ZjtcbiAgICAgICAgfVxuICAgICAgfWVsc2UgaWYocHJldmlvdXNCdWYgIT09IHVuZGVmaW5lZCAmJiBuZXh0QnVmID09PSB1bmRlZmluZWQpe1xuICAgICAgICBidWYgPSBwcmV2aW91c0J1ZjtcbiAgICAgIH1lbHNlIHtcbiAgICAgICAgYnVmID0gQnVmZmVyLmNvbmNhdChbcHJldmlvdXNCdWYsIG5leHRCdWZdKTtcbiAgICAgIH1cbiAgICAgIC8vIEhhbmRsZSBVVEYgQk9NXG4gICAgICBpZihib21Ta2lwcGVkID09PSBmYWxzZSl7XG4gICAgICAgIGlmKGJvbSA9PT0gZmFsc2Upe1xuICAgICAgICAgIHRoaXMuc3RhdGUuYm9tU2tpcHBlZCA9IHRydWU7XG4gICAgICAgIH1lbHNlIGlmKGJ1Zi5sZW5ndGggPCAzKXtcbiAgICAgICAgICAvLyBObyBlbm91Z2ggZGF0YVxuICAgICAgICAgIGlmKGVuZCA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgLy8gV2FpdCBmb3IgbW9yZSBkYXRhXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnByZXZpb3VzQnVmID0gYnVmO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgIGZvcihjb25zdCBlbmNvZGluZyBpbiBib21zKXtcbiAgICAgICAgICAgIGlmKGJvbXNbZW5jb2RpbmddLmNvbXBhcmUoYnVmLCAwLCBib21zW2VuY29kaW5nXS5sZW5ndGgpID09PSAwKXtcbiAgICAgICAgICAgICAgLy8gU2tpcCBCT01cbiAgICAgICAgICAgICAgY29uc3QgYm9tTGVuZ3RoID0gYm9tc1tlbmNvZGluZ10ubGVuZ3RoO1xuICAgICAgICAgICAgICB0aGlzLnN0YXRlLmJ1ZkJ5dGVzU3RhcnQgKz0gYm9tTGVuZ3RoO1xuICAgICAgICAgICAgICBidWYgPSBidWYuc2xpY2UoYm9tTGVuZ3RoKTtcbiAgICAgICAgICAgICAgLy8gUmVub3JtYWxpemUgb3JpZ2luYWwgb3B0aW9ucyB3aXRoIHRoZSBuZXcgZW5jb2RpbmdcbiAgICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gbm9ybWFsaXplX29wdGlvbnMoey4uLnRoaXMub3JpZ2luYWxfb3B0aW9ucywgZW5jb2Rpbmc6IGVuY29kaW5nfSk7XG4gICAgICAgICAgICAgIC8vIE9wdGlvbnMgd2lsbCByZS1ldmFsdWF0ZSB0aGUgQnVmZmVyIHdpdGggdGhlIG5ldyBlbmNvZGluZ1xuICAgICAgICAgICAgICAoe2NvbW1lbnQsIGVzY2FwZSwgcXVvdGUgfSA9IHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnN0YXRlLmJvbVNraXBwZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBidWZMZW4gPSBidWYubGVuZ3RoO1xuICAgICAgbGV0IHBvcztcbiAgICAgIGZvcihwb3MgPSAwOyBwb3MgPCBidWZMZW47IHBvcysrKXtcbiAgICAgICAgLy8gRW5zdXJlIHdlIGdldCBlbm91Z2ggc3BhY2UgdG8gbG9vayBhaGVhZFxuICAgICAgICAvLyBUaGVyZSBzaG91bGQgYmUgYSB3YXkgdG8gbW92ZSB0aGlzIG91dCBvZiB0aGUgbG9vcFxuICAgICAgICBpZih0aGlzLl9fbmVlZE1vcmVEYXRhKHBvcywgYnVmTGVuLCBlbmQpKXtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnN0YXRlLndhc1Jvd0RlbGltaXRlciA9PT0gdHJ1ZSl7XG4gICAgICAgICAgdGhpcy5pbmZvLmxpbmVzKys7XG4gICAgICAgICAgdGhpcy5zdGF0ZS53YXNSb3dEZWxpbWl0ZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZih0b19saW5lICE9PSAtMSAmJiB0aGlzLmluZm8ubGluZXMgPiB0b19saW5lKXtcbiAgICAgICAgICB0aGlzLnN0YXRlLnN0b3AgPSB0cnVlO1xuICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEF1dG8gZGlzY292ZXJ5IG9mIHJlY29yZF9kZWxpbWl0ZXIsIHVuaXgsIG1hYyBhbmQgd2luZG93cyBzdXBwb3J0ZWRcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5xdW90aW5nID09PSBmYWxzZSAmJiByZWNvcmRfZGVsaW1pdGVyLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgY29uc3QgcmVjb3JkX2RlbGltaXRlckNvdW50ID0gdGhpcy5fX2F1dG9EaXNjb3ZlclJlY29yZERlbGltaXRlcihidWYsIHBvcyk7XG4gICAgICAgICAgaWYocmVjb3JkX2RlbGltaXRlckNvdW50KXtcbiAgICAgICAgICAgIHJlY29yZF9kZWxpbWl0ZXIgPSB0aGlzLm9wdGlvbnMucmVjb3JkX2RlbGltaXRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2hyID0gYnVmW3Bvc107XG4gICAgICAgIGlmKHJhdyA9PT0gdHJ1ZSl7XG4gICAgICAgICAgcmF3QnVmZmVyLmFwcGVuZChjaHIpO1xuICAgICAgICB9XG4gICAgICAgIGlmKChjaHIgPT09IGNyIHx8IGNociA9PT0gbmwpICYmIHRoaXMuc3RhdGUud2FzUm93RGVsaW1pdGVyID09PSBmYWxzZSl7XG4gICAgICAgICAgdGhpcy5zdGF0ZS53YXNSb3dEZWxpbWl0ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFByZXZpb3VzIGNoYXIgd2FzIGEgdmFsaWQgZXNjYXBlIGNoYXJcbiAgICAgICAgLy8gdHJlYXQgdGhlIGN1cnJlbnQgY2hhciBhcyBhIHJlZ3VsYXIgY2hhclxuICAgICAgICBpZih0aGlzLnN0YXRlLmVzY2FwaW5nID09PSB0cnVlKXtcbiAgICAgICAgICB0aGlzLnN0YXRlLmVzY2FwaW5nID0gZmFsc2U7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAvLyBFc2NhcGUgaXMgb25seSBhY3RpdmUgaW5zaWRlIHF1b3RlZCBmaWVsZHNcbiAgICAgICAgICAvLyBXZSBhcmUgcXVvdGluZywgdGhlIGNoYXIgaXMgYW4gZXNjYXBlIGNociBhbmQgdGhlcmUgaXMgYSBjaHIgdG8gZXNjYXBlXG4gICAgICAgICAgLy8gaWYoZXNjYXBlICE9PSBudWxsICYmIHRoaXMuc3RhdGUucXVvdGluZyA9PT0gdHJ1ZSAmJiBjaHIgPT09IGVzY2FwZSAmJiBwb3MgKyAxIDwgYnVmTGVuKXtcbiAgICAgICAgICBpZihlc2NhcGUgIT09IG51bGwgJiYgdGhpcy5zdGF0ZS5xdW90aW5nID09PSB0cnVlICYmIHRoaXMuX19pc0VzY2FwZShidWYsIHBvcywgY2hyKSAmJiBwb3MgKyBlc2NhcGUubGVuZ3RoIDwgYnVmTGVuKXtcbiAgICAgICAgICAgIGlmKGVzY2FwZUlzUXVvdGUpe1xuICAgICAgICAgICAgICBpZih0aGlzLl9faXNRdW90ZShidWYsIHBvcytlc2NhcGUubGVuZ3RoKSl7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5lc2NhcGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgcG9zICs9IGVzY2FwZS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuZXNjYXBpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICBwb3MgKz0gZXNjYXBlLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBOb3QgY3VycmVudGx5IGVzY2FwaW5nIGFuZCBjaHIgaXMgYSBxdW90ZVxuICAgICAgICAgIC8vIFRPRE86IG5lZWQgdG8gY29tcGFyZSBieXRlcyBpbnN0ZWFkIG9mIHNpbmdsZSBjaGFyXG4gICAgICAgICAgaWYodGhpcy5zdGF0ZS5jb21tZW50aW5nID09PSBmYWxzZSAmJiB0aGlzLl9faXNRdW90ZShidWYsIHBvcykpe1xuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5xdW90aW5nID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgY29uc3QgbmV4dENociA9IGJ1Zltwb3MrcXVvdGUubGVuZ3RoXTtcbiAgICAgICAgICAgICAgY29uc3QgaXNOZXh0Q2hyVHJpbWFibGUgPSBydHJpbSAmJiB0aGlzLl9faXNDaGFyVHJpbWFibGUoYnVmLCBwb3MrcXVvdGUubGVuZ3RoKTtcbiAgICAgICAgICAgICAgY29uc3QgaXNOZXh0Q2hyQ29tbWVudCA9IGNvbW1lbnQgIT09IG51bGwgJiYgdGhpcy5fX2NvbXBhcmVCeXRlcyhjb21tZW50LCBidWYsIHBvcytxdW90ZS5sZW5ndGgsIG5leHRDaHIpO1xuICAgICAgICAgICAgICBjb25zdCBpc05leHRDaHJEZWxpbWl0ZXIgPSB0aGlzLl9faXNEZWxpbWl0ZXIoYnVmLCBwb3MrcXVvdGUubGVuZ3RoLCBuZXh0Q2hyKTtcbiAgICAgICAgICAgICAgY29uc3QgaXNOZXh0Q2hyUmVjb3JkRGVsaW1pdGVyID0gcmVjb3JkX2RlbGltaXRlci5sZW5ndGggPT09IDAgPyB0aGlzLl9fYXV0b0Rpc2NvdmVyUmVjb3JkRGVsaW1pdGVyKGJ1ZiwgcG9zK3F1b3RlLmxlbmd0aCkgOiB0aGlzLl9faXNSZWNvcmREZWxpbWl0ZXIobmV4dENociwgYnVmLCBwb3MrcXVvdGUubGVuZ3RoKTtcbiAgICAgICAgICAgICAgLy8gRXNjYXBlIGEgcXVvdGVcbiAgICAgICAgICAgICAgLy8gVHJlYXQgbmV4dCBjaGFyIGFzIGEgcmVndWxhciBjaGFyYWN0ZXJcbiAgICAgICAgICAgICAgaWYoZXNjYXBlICE9PSBudWxsICYmIHRoaXMuX19pc0VzY2FwZShidWYsIHBvcywgY2hyKSAmJiB0aGlzLl9faXNRdW90ZShidWYsIHBvcyArIGVzY2FwZS5sZW5ndGgpKXtcbiAgICAgICAgICAgICAgICBwb3MgKz0gZXNjYXBlLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgIH1lbHNlIGlmKCFuZXh0Q2hyIHx8IGlzTmV4dENockRlbGltaXRlciB8fCBpc05leHRDaHJSZWNvcmREZWxpbWl0ZXIgfHwgaXNOZXh0Q2hyQ29tbWVudCB8fCBpc05leHRDaHJUcmltYWJsZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5xdW90aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53YXNRdW90aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBwb3MgKz0gcXVvdGUubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfWVsc2UgaWYocmVsYXhfcXVvdGVzID09PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gdGhpcy5fX2Vycm9yKFxuICAgICAgICAgICAgICAgICAgbmV3IENzdkVycm9yKCdDU1ZfSU5WQUxJRF9DTE9TSU5HX1FVT1RFJywgW1xuICAgICAgICAgICAgICAgICAgICAnSW52YWxpZCBDbG9zaW5nIFF1b3RlOicsXG4gICAgICAgICAgICAgICAgICAgIGBnb3QgXCIke1N0cmluZy5mcm9tQ2hhckNvZGUobmV4dENocil9XCJgLFxuICAgICAgICAgICAgICAgICAgICBgYXQgbGluZSAke3RoaXMuaW5mby5saW5lc31gLFxuICAgICAgICAgICAgICAgICAgICAnaW5zdGVhZCBvZiBkZWxpbWl0ZXIsIHJlY29yZCBkZWxpbWl0ZXIsIHRyaW1hYmxlIGNoYXJhY3RlcicsXG4gICAgICAgICAgICAgICAgICAgICcoaWYgYWN0aXZhdGVkKSBvciBjb21tZW50JyxcbiAgICAgICAgICAgICAgICAgIF0sIHRoaXMub3B0aW9ucywgdGhpcy5fX2luZm9GaWVsZCgpKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYoZXJyICE9PSB1bmRlZmluZWQpIHJldHVybiBlcnI7XG4gICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnF1b3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLndhc1F1b3RpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZmllbGQucHJlcGVuZChxdW90ZSk7XG4gICAgICAgICAgICAgICAgcG9zICs9IHF1b3RlLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5maWVsZC5sZW5ndGggIT09IDApe1xuICAgICAgICAgICAgICAgIC8vIEluIHJlbGF4X3F1b3RlcyBtb2RlLCB0cmVhdCBvcGVuaW5nIHF1b3RlIHByZWNlZGVkIGJ5IGNocnMgYXMgcmVndWxhclxuICAgICAgICAgICAgICAgIGlmKHJlbGF4X3F1b3RlcyA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgY29uc3QgaW5mbyA9IHRoaXMuX19pbmZvRmllbGQoKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGJvbSA9IE9iamVjdC5rZXlzKGJvbXMpLm1hcChiID0+IGJvbXNbYl0uZXF1YWxzKHRoaXMuc3RhdGUuZmllbGQudG9TdHJpbmcoKSkgPyBiIDogZmFsc2UpLmZpbHRlcihCb29sZWFuKVswXTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IHRoaXMuX19lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgbmV3IENzdkVycm9yKCdJTlZBTElEX09QRU5JTkdfUVVPVEUnLCBbXG4gICAgICAgICAgICAgICAgICAgICAgJ0ludmFsaWQgT3BlbmluZyBRdW90ZTonLFxuICAgICAgICAgICAgICAgICAgICAgIGBhIHF1b3RlIGlzIGZvdW5kIG9uIGZpZWxkICR7SlNPTi5zdHJpbmdpZnkoaW5mby5jb2x1bW4pfSBhdCBsaW5lICR7aW5mby5saW5lc30sIHZhbHVlIGlzICR7SlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5maWVsZC50b1N0cmluZyhlbmNvZGluZykpfWAsXG4gICAgICAgICAgICAgICAgICAgICAgYm9tID8gYCgke2JvbX0gYm9tKWAgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgXSwgdGhpcy5vcHRpb25zLCBpbmZvLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IHRoaXMuc3RhdGUuZmllbGQsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgaWYoZXJyICE9PSB1bmRlZmluZWQpIHJldHVybiBlcnI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5xdW90aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBwb3MgKz0gcXVvdGUubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZih0aGlzLnN0YXRlLnF1b3RpbmcgPT09IGZhbHNlKXtcbiAgICAgICAgICAgIGNvbnN0IHJlY29yZERlbGltaXRlckxlbmd0aCA9IHRoaXMuX19pc1JlY29yZERlbGltaXRlcihjaHIsIGJ1ZiwgcG9zKTtcbiAgICAgICAgICAgIGlmKHJlY29yZERlbGltaXRlckxlbmd0aCAhPT0gMCl7XG4gICAgICAgICAgICAgIC8vIERvIG5vdCBlbWl0IGNvbW1lbnRzIHdoaWNoIHRha2UgYSBmdWxsIGxpbmVcbiAgICAgICAgICAgICAgY29uc3Qgc2tpcENvbW1lbnRMaW5lID0gdGhpcy5zdGF0ZS5jb21tZW50aW5nICYmICh0aGlzLnN0YXRlLndhc1F1b3RpbmcgPT09IGZhbHNlICYmIHRoaXMuc3RhdGUucmVjb3JkLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnN0YXRlLmZpZWxkLmxlbmd0aCA9PT0gMCk7XG4gICAgICAgICAgICAgIGlmKHNraXBDb21tZW50TGluZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmZvLmNvbW1lbnRfbGluZXMrKztcbiAgICAgICAgICAgICAgICAvLyBTa2lwIGZ1bGwgY29tbWVudCBsaW5lXG4gICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBBY3RpdmF0ZSByZWNvcmRzIGVtaXRpb24gaWYgYWJvdmUgZnJvbV9saW5lXG4gICAgICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5lbmFibGVkID09PSBmYWxzZSAmJiB0aGlzLmluZm8ubGluZXMgKyAodGhpcy5zdGF0ZS53YXNSb3dEZWxpbWl0ZXIgPT09IHRydWUgPyAxOiAwKSA+PSBmcm9tX2xpbmUpe1xuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuX19yZXNldEZpZWxkKCk7XG4gICAgICAgICAgICAgICAgICB0aGlzLl9fcmVzZXRSZWNvcmQoKTtcbiAgICAgICAgICAgICAgICAgIHBvcyArPSByZWNvcmREZWxpbWl0ZXJMZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFNraXAgaWYgbGluZSBpcyBlbXB0eSBhbmQgc2tpcF9lbXB0eV9saW5lcyBhY3RpdmF0ZWRcbiAgICAgICAgICAgICAgICBpZihza2lwX2VtcHR5X2xpbmVzID09PSB0cnVlICYmIHRoaXMuc3RhdGUud2FzUXVvdGluZyA9PT0gZmFsc2UgJiYgdGhpcy5zdGF0ZS5yZWNvcmQubGVuZ3RoID09PSAwICYmIHRoaXMuc3RhdGUuZmllbGQubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaW5mby5lbXB0eV9saW5lcysrO1xuICAgICAgICAgICAgICAgICAgcG9zICs9IHJlY29yZERlbGltaXRlckxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pbmZvLmJ5dGVzID0gdGhpcy5zdGF0ZS5idWZCeXRlc1N0YXJ0ICsgcG9zO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyckZpZWxkID0gdGhpcy5fX29uRmllbGQoKTtcbiAgICAgICAgICAgICAgICBpZihlcnJGaWVsZCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gZXJyRmllbGQ7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmZvLmJ5dGVzID0gdGhpcy5zdGF0ZS5idWZCeXRlc1N0YXJ0ICsgcG9zICsgcmVjb3JkRGVsaW1pdGVyTGVuZ3RoO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyclJlY29yZCA9IHRoaXMuX19vblJlY29yZChwdXNoKTtcbiAgICAgICAgICAgICAgICBpZihlcnJSZWNvcmQgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGVyclJlY29yZDtcbiAgICAgICAgICAgICAgICBpZih0byAhPT0gLTEgJiYgdGhpcy5pbmZvLnJlY29yZHMgPj0gdG8pe1xuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zdG9wID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29tbWVudGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICBwb3MgKz0gcmVjb3JkRGVsaW1pdGVyTGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLmNvbW1lbnRpbmcpe1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGNvbW1lbnQgIT09IG51bGwgJiYgKGNvbW1lbnRfbm9faW5maXggPT09IGZhbHNlIHx8ICh0aGlzLnN0YXRlLnJlY29yZC5sZW5ndGggPT09IDAgJiYgdGhpcy5zdGF0ZS5maWVsZC5sZW5ndGggPT09IDApKSkge1xuICAgICAgICAgICAgICBjb25zdCBjb21tZW50Q291bnQgPSB0aGlzLl9fY29tcGFyZUJ5dGVzKGNvbW1lbnQsIGJ1ZiwgcG9zLCBjaHIpO1xuICAgICAgICAgICAgICBpZihjb21tZW50Q291bnQgIT09IDApe1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29tbWVudGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRlbGltaXRlckxlbmd0aCA9IHRoaXMuX19pc0RlbGltaXRlcihidWYsIHBvcywgY2hyKTtcbiAgICAgICAgICAgIGlmKGRlbGltaXRlckxlbmd0aCAhPT0gMCl7XG4gICAgICAgICAgICAgIHRoaXMuaW5mby5ieXRlcyA9IHRoaXMuc3RhdGUuYnVmQnl0ZXNTdGFydCArIHBvcztcbiAgICAgICAgICAgICAgY29uc3QgZXJyRmllbGQgPSB0aGlzLl9fb25GaWVsZCgpO1xuICAgICAgICAgICAgICBpZihlcnJGaWVsZCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gZXJyRmllbGQ7XG4gICAgICAgICAgICAgIHBvcyArPSBkZWxpbWl0ZXJMZW5ndGggLSAxO1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5zdGF0ZS5jb21tZW50aW5nID09PSBmYWxzZSl7XG4gICAgICAgICAgaWYobWF4X3JlY29yZF9zaXplICE9PSAwICYmIHRoaXMuc3RhdGUucmVjb3JkX2xlbmd0aCArIHRoaXMuc3RhdGUuZmllbGQubGVuZ3RoID4gbWF4X3JlY29yZF9zaXplKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9fZXJyb3IoXG4gICAgICAgICAgICAgIG5ldyBDc3ZFcnJvcignQ1NWX01BWF9SRUNPUkRfU0laRScsIFtcbiAgICAgICAgICAgICAgICAnTWF4IFJlY29yZCBTaXplOicsXG4gICAgICAgICAgICAgICAgJ3JlY29yZCBleGNlZWQgdGhlIG1heGltdW0gbnVtYmVyIG9mIHRvbGVyYXRlZCBieXRlcycsXG4gICAgICAgICAgICAgICAgYG9mICR7bWF4X3JlY29yZF9zaXplfWAsXG4gICAgICAgICAgICAgICAgYGF0IGxpbmUgJHt0aGlzLmluZm8ubGluZXN9YCxcbiAgICAgICAgICAgICAgXSwgdGhpcy5vcHRpb25zLCB0aGlzLl9faW5mb0ZpZWxkKCkpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsYXBwZW5kID0gbHRyaW0gPT09IGZhbHNlIHx8IHRoaXMuc3RhdGUucXVvdGluZyA9PT0gdHJ1ZSB8fCB0aGlzLnN0YXRlLmZpZWxkLmxlbmd0aCAhPT0gMCB8fCAhdGhpcy5fX2lzQ2hhclRyaW1hYmxlKGJ1ZiwgcG9zKTtcbiAgICAgICAgLy8gcnRyaW0gaW4gbm9uIHF1b3RpbmcgaXMgaGFuZGxlIGluIF9fb25GaWVsZFxuICAgICAgICBjb25zdCByYXBwZW5kID0gcnRyaW0gPT09IGZhbHNlIHx8IHRoaXMuc3RhdGUud2FzUXVvdGluZyA9PT0gZmFsc2U7XG4gICAgICAgIGlmKGxhcHBlbmQgPT09IHRydWUgJiYgcmFwcGVuZCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5maWVsZC5hcHBlbmQoY2hyKTtcbiAgICAgICAgfWVsc2UgaWYocnRyaW0gPT09IHRydWUgJiYgIXRoaXMuX19pc0NoYXJUcmltYWJsZShidWYsIHBvcykpe1xuICAgICAgICAgIHJldHVybiB0aGlzLl9fZXJyb3IoXG4gICAgICAgICAgICBuZXcgQ3N2RXJyb3IoJ0NTVl9OT05fVFJJTUFCTEVfQ0hBUl9BRlRFUl9DTE9TSU5HX1FVT1RFJywgW1xuICAgICAgICAgICAgICAnSW52YWxpZCBDbG9zaW5nIFF1b3RlOicsXG4gICAgICAgICAgICAgICdmb3VuZCBub24gdHJpbWFibGUgYnl0ZSBhZnRlciBxdW90ZScsXG4gICAgICAgICAgICAgIGBhdCBsaW5lICR7dGhpcy5pbmZvLmxpbmVzfWAsXG4gICAgICAgICAgICBdLCB0aGlzLm9wdGlvbnMsIHRoaXMuX19pbmZvRmllbGQoKSlcbiAgICAgICAgICApO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgaWYobGFwcGVuZCA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgcG9zICs9IHRoaXMuX19pc0NoYXJUcmltYWJsZShidWYsIHBvcykgLSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYoZW5kID09PSB0cnVlKXtcbiAgICAgICAgLy8gRW5zdXJlIHdlIGFyZSBub3QgZW5kaW5nIGluIGEgcXVvdGluZyBzdGF0ZVxuICAgICAgICBpZih0aGlzLnN0YXRlLnF1b3RpbmcgPT09IHRydWUpe1xuICAgICAgICAgIGNvbnN0IGVyciA9IHRoaXMuX19lcnJvcihcbiAgICAgICAgICAgIG5ldyBDc3ZFcnJvcignQ1NWX1FVT1RFX05PVF9DTE9TRUQnLCBbXG4gICAgICAgICAgICAgICdRdW90ZSBOb3QgQ2xvc2VkOicsXG4gICAgICAgICAgICAgIGB0aGUgcGFyc2luZyBpcyBmaW5pc2hlZCB3aXRoIGFuIG9wZW5pbmcgcXVvdGUgYXQgbGluZSAke3RoaXMuaW5mby5saW5lc31gLFxuICAgICAgICAgICAgXSwgdGhpcy5vcHRpb25zLCB0aGlzLl9faW5mb0ZpZWxkKCkpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZihlcnIgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGVycjtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgIC8vIFNraXAgbGFzdCBsaW5lIGlmIGl0IGhhcyBubyBjaGFyYWN0ZXJzXG4gICAgICAgICAgaWYodGhpcy5zdGF0ZS53YXNRdW90aW5nID09PSB0cnVlIHx8IHRoaXMuc3RhdGUucmVjb3JkLmxlbmd0aCAhPT0gMCB8fCB0aGlzLnN0YXRlLmZpZWxkLmxlbmd0aCAhPT0gMCl7XG4gICAgICAgICAgICB0aGlzLmluZm8uYnl0ZXMgPSB0aGlzLnN0YXRlLmJ1ZkJ5dGVzU3RhcnQgKyBwb3M7XG4gICAgICAgICAgICBjb25zdCBlcnJGaWVsZCA9IHRoaXMuX19vbkZpZWxkKCk7XG4gICAgICAgICAgICBpZihlcnJGaWVsZCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gZXJyRmllbGQ7XG4gICAgICAgICAgICBjb25zdCBlcnJSZWNvcmQgPSB0aGlzLl9fb25SZWNvcmQocHVzaCk7XG4gICAgICAgICAgICBpZihlcnJSZWNvcmQgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGVyclJlY29yZDtcbiAgICAgICAgICB9ZWxzZSBpZih0aGlzLnN0YXRlLndhc1Jvd0RlbGltaXRlciA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICB0aGlzLmluZm8uZW1wdHlfbGluZXMrKztcbiAgICAgICAgICB9ZWxzZSBpZih0aGlzLnN0YXRlLmNvbW1lbnRpbmcgPT09IHRydWUpe1xuICAgICAgICAgICAgdGhpcy5pbmZvLmNvbW1lbnRfbGluZXMrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1lbHNlIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5idWZCeXRlc1N0YXJ0ICs9IHBvcztcbiAgICAgICAgdGhpcy5zdGF0ZS5wcmV2aW91c0J1ZiA9IGJ1Zi5zbGljZShwb3MpO1xuICAgICAgfVxuICAgICAgaWYodGhpcy5zdGF0ZS53YXNSb3dEZWxpbWl0ZXIgPT09IHRydWUpe1xuICAgICAgICB0aGlzLmluZm8ubGluZXMrKztcbiAgICAgICAgdGhpcy5zdGF0ZS53YXNSb3dEZWxpbWl0ZXIgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIF9fb25SZWNvcmQ6IGZ1bmN0aW9uKHB1c2gpe1xuICAgICAgY29uc3Qge2NvbHVtbnMsIGdyb3VwX2NvbHVtbnNfYnlfbmFtZSwgZW5jb2RpbmcsIGluZm8sIGZyb20sIHJlbGF4X2NvbHVtbl9jb3VudCwgcmVsYXhfY29sdW1uX2NvdW50X2xlc3MsIHJlbGF4X2NvbHVtbl9jb3VudF9tb3JlLCByYXcsIHNraXBfcmVjb3Jkc193aXRoX2VtcHR5X3ZhbHVlc30gPSB0aGlzLm9wdGlvbnM7XG4gICAgICBjb25zdCB7ZW5hYmxlZCwgcmVjb3JkfSA9IHRoaXMuc3RhdGU7XG4gICAgICBpZihlbmFibGVkID09PSBmYWxzZSl7XG4gICAgICAgIHJldHVybiB0aGlzLl9fcmVzZXRSZWNvcmQoKTtcbiAgICAgIH1cbiAgICAgIC8vIENvbnZlcnQgdGhlIGZpcnN0IGxpbmUgaW50byBjb2x1bW4gbmFtZXNcbiAgICAgIGNvbnN0IHJlY29yZExlbmd0aCA9IHJlY29yZC5sZW5ndGg7XG4gICAgICBpZihjb2x1bW5zID09PSB0cnVlKXtcbiAgICAgICAgaWYoc2tpcF9yZWNvcmRzX3dpdGhfZW1wdHlfdmFsdWVzID09PSB0cnVlICYmIGlzUmVjb3JkRW1wdHkocmVjb3JkKSl7XG4gICAgICAgICAgdGhpcy5fX3Jlc2V0UmVjb3JkKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9fZmlyc3RMaW5lVG9Db2x1bW5zKHJlY29yZCk7XG4gICAgICB9XG4gICAgICBpZihjb2x1bW5zID09PSBmYWxzZSAmJiB0aGlzLmluZm8ucmVjb3JkcyA9PT0gMCl7XG4gICAgICAgIHRoaXMuc3RhdGUuZXhwZWN0ZWRSZWNvcmRMZW5ndGggPSByZWNvcmRMZW5ndGg7XG4gICAgICB9XG4gICAgICBpZihyZWNvcmRMZW5ndGggIT09IHRoaXMuc3RhdGUuZXhwZWN0ZWRSZWNvcmRMZW5ndGgpe1xuICAgICAgICBjb25zdCBlcnIgPSBjb2x1bW5zID09PSBmYWxzZSA/XG4gICAgICAgICAgbmV3IENzdkVycm9yKCdDU1ZfUkVDT1JEX0lOQ09OU0lTVEVOVF9GSUVMRFNfTEVOR1RIJywgW1xuICAgICAgICAgICAgJ0ludmFsaWQgUmVjb3JkIExlbmd0aDonLFxuICAgICAgICAgICAgYGV4cGVjdCAke3RoaXMuc3RhdGUuZXhwZWN0ZWRSZWNvcmRMZW5ndGh9LGAsXG4gICAgICAgICAgICBgZ290ICR7cmVjb3JkTGVuZ3RofSBvbiBsaW5lICR7dGhpcy5pbmZvLmxpbmVzfWAsXG4gICAgICAgICAgXSwgdGhpcy5vcHRpb25zLCB0aGlzLl9faW5mb0ZpZWxkKCksIHtcbiAgICAgICAgICAgIHJlY29yZDogcmVjb3JkLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgOlxuICAgICAgICAgIG5ldyBDc3ZFcnJvcignQ1NWX1JFQ09SRF9JTkNPTlNJU1RFTlRfQ09MVU1OUycsIFtcbiAgICAgICAgICAgICdJbnZhbGlkIFJlY29yZCBMZW5ndGg6JyxcbiAgICAgICAgICAgIGBjb2x1bW5zIGxlbmd0aCBpcyAke2NvbHVtbnMubGVuZ3RofSxgLCAvLyByZW5hbWUgY29sdW1uc1xuICAgICAgICAgICAgYGdvdCAke3JlY29yZExlbmd0aH0gb24gbGluZSAke3RoaXMuaW5mby5saW5lc31gLFxuICAgICAgICAgIF0sIHRoaXMub3B0aW9ucywgdGhpcy5fX2luZm9GaWVsZCgpLCB7XG4gICAgICAgICAgICByZWNvcmQ6IHJlY29yZCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgaWYocmVsYXhfY29sdW1uX2NvdW50ID09PSB0cnVlIHx8XG4gICAgICAgICAgKHJlbGF4X2NvbHVtbl9jb3VudF9sZXNzID09PSB0cnVlICYmIHJlY29yZExlbmd0aCA8IHRoaXMuc3RhdGUuZXhwZWN0ZWRSZWNvcmRMZW5ndGgpIHx8XG4gICAgICAgICAgKHJlbGF4X2NvbHVtbl9jb3VudF9tb3JlID09PSB0cnVlICYmIHJlY29yZExlbmd0aCA+IHRoaXMuc3RhdGUuZXhwZWN0ZWRSZWNvcmRMZW5ndGgpKXtcbiAgICAgICAgICB0aGlzLmluZm8uaW52YWxpZF9maWVsZF9sZW5ndGgrKztcbiAgICAgICAgICB0aGlzLnN0YXRlLmVycm9yID0gZXJyO1xuICAgICAgICAvLyBFcnJvciBpcyB1bmRlZmluZWQgd2l0aCBza2lwX3JlY29yZHNfd2l0aF9lcnJvclxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgY29uc3QgZmluYWxFcnIgPSB0aGlzLl9fZXJyb3IoZXJyKTtcbiAgICAgICAgICBpZihmaW5hbEVycikgcmV0dXJuIGZpbmFsRXJyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZihza2lwX3JlY29yZHNfd2l0aF9lbXB0eV92YWx1ZXMgPT09IHRydWUgJiYgaXNSZWNvcmRFbXB0eShyZWNvcmQpKXtcbiAgICAgICAgdGhpcy5fX3Jlc2V0UmVjb3JkKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmKHRoaXMuc3RhdGUucmVjb3JkSGFzRXJyb3IgPT09IHRydWUpe1xuICAgICAgICB0aGlzLl9fcmVzZXRSZWNvcmQoKTtcbiAgICAgICAgdGhpcy5zdGF0ZS5yZWNvcmRIYXNFcnJvciA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmluZm8ucmVjb3JkcysrO1xuICAgICAgaWYoZnJvbSA9PT0gMSB8fCB0aGlzLmluZm8ucmVjb3JkcyA+PSBmcm9tKXtcbiAgICAgICAgY29uc3Qge29iam5hbWV9ID0gdGhpcy5vcHRpb25zO1xuICAgICAgICAvLyBXaXRoIGNvbHVtbnMsIHJlY29yZHMgYXJlIG9iamVjdFxuICAgICAgICBpZihjb2x1bW5zICE9PSBmYWxzZSl7XG4gICAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgICAgLy8gVHJhbnNmb3JtIHJlY29yZCBhcnJheSB0byBhbiBvYmplY3RcbiAgICAgICAgICBmb3IobGV0IGkgPSAwLCBsID0gcmVjb3JkLmxlbmd0aDsgaSA8IGw7IGkrKyl7XG4gICAgICAgICAgICBpZihjb2x1bW5zW2ldID09PSB1bmRlZmluZWQgfHwgY29sdW1uc1tpXS5kaXNhYmxlZCkgY29udGludWU7XG4gICAgICAgICAgICAvLyBUdXJuIGR1cGxpY2F0ZSBjb2x1bW5zIGludG8gYW4gYXJyYXlcbiAgICAgICAgICAgIGlmIChncm91cF9jb2x1bW5zX2J5X25hbWUgPT09IHRydWUgJiYgb2JqW2NvbHVtbnNbaV0ubmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmpbY29sdW1uc1tpXS5uYW1lXSkpIHtcbiAgICAgICAgICAgICAgICBvYmpbY29sdW1uc1tpXS5uYW1lXSA9IG9ialtjb2x1bW5zW2ldLm5hbWVdLmNvbmNhdChyZWNvcmRbaV0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9ialtjb2x1bW5zW2ldLm5hbWVdID0gW29ialtjb2x1bW5zW2ldLm5hbWVdLCByZWNvcmRbaV1dO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBvYmpbY29sdW1uc1tpXS5uYW1lXSA9IHJlY29yZFtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gV2l0aG91dCBvYmpuYW1lIChkZWZhdWx0KVxuICAgICAgICAgIGlmKHJhdyA9PT0gdHJ1ZSB8fCBpbmZvID09PSB0cnVlKXtcbiAgICAgICAgICAgIGNvbnN0IGV4dFJlY29yZCA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgIHtyZWNvcmQ6IG9ian0sXG4gICAgICAgICAgICAgIChyYXcgPT09IHRydWUgPyB7cmF3OiB0aGlzLnN0YXRlLnJhd0J1ZmZlci50b1N0cmluZyhlbmNvZGluZyl9OiB7fSksXG4gICAgICAgICAgICAgIChpbmZvID09PSB0cnVlID8ge2luZm86IHRoaXMuX19pbmZvUmVjb3JkKCl9OiB7fSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBlcnIgPSB0aGlzLl9fcHVzaChcbiAgICAgICAgICAgICAgb2JqbmFtZSA9PT0gdW5kZWZpbmVkID8gZXh0UmVjb3JkIDogW29ialtvYmpuYW1lXSwgZXh0UmVjb3JkXVxuICAgICAgICAgICAgICAsIHB1c2gpO1xuICAgICAgICAgICAgaWYoZXJyKXtcbiAgICAgICAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBlcnIgPSB0aGlzLl9fcHVzaChcbiAgICAgICAgICAgICAgb2JqbmFtZSA9PT0gdW5kZWZpbmVkID8gb2JqIDogW29ialtvYmpuYW1lXSwgb2JqXVxuICAgICAgICAgICAgICAsIHB1c2gpO1xuICAgICAgICAgICAgaWYoZXJyKXtcbiAgICAgICAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIC8vIFdpdGhvdXQgY29sdW1ucywgcmVjb3JkcyBhcmUgYXJyYXlcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgIGlmKHJhdyA9PT0gdHJ1ZSB8fCBpbmZvID09PSB0cnVlKXtcbiAgICAgICAgICAgIGNvbnN0IGV4dFJlY29yZCA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgIHtyZWNvcmQ6IHJlY29yZH0sXG4gICAgICAgICAgICAgIHJhdyA9PT0gdHJ1ZSA/IHtyYXc6IHRoaXMuc3RhdGUucmF3QnVmZmVyLnRvU3RyaW5nKGVuY29kaW5nKX06IHt9LFxuICAgICAgICAgICAgICBpbmZvID09PSB0cnVlID8ge2luZm86IHRoaXMuX19pbmZvUmVjb3JkKCl9OiB7fVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGVyciA9IHRoaXMuX19wdXNoKFxuICAgICAgICAgICAgICBvYmpuYW1lID09PSB1bmRlZmluZWQgPyBleHRSZWNvcmQgOiBbcmVjb3JkW29iam5hbWVdLCBleHRSZWNvcmRdXG4gICAgICAgICAgICAgICwgcHVzaCk7XG4gICAgICAgICAgICBpZihlcnIpe1xuICAgICAgICAgICAgICByZXR1cm4gZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGVyciA9IHRoaXMuX19wdXNoKFxuICAgICAgICAgICAgICBvYmpuYW1lID09PSB1bmRlZmluZWQgPyByZWNvcmQgOiBbcmVjb3JkW29iam5hbWVdLCByZWNvcmRdXG4gICAgICAgICAgICAgICwgcHVzaCk7XG4gICAgICAgICAgICBpZihlcnIpe1xuICAgICAgICAgICAgICByZXR1cm4gZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5fX3Jlc2V0UmVjb3JkKCk7XG4gICAgfSxcbiAgICBfX2ZpcnN0TGluZVRvQ29sdW1uczogZnVuY3Rpb24ocmVjb3JkKXtcbiAgICAgIGNvbnN0IHtmaXJzdExpbmVUb0hlYWRlcnN9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIHRyeXtcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IGZpcnN0TGluZVRvSGVhZGVycyA9PT0gdW5kZWZpbmVkID8gcmVjb3JkIDogZmlyc3RMaW5lVG9IZWFkZXJzLmNhbGwobnVsbCwgcmVjb3JkKTtcbiAgICAgICAgaWYoIUFycmF5LmlzQXJyYXkoaGVhZGVycykpe1xuICAgICAgICAgIHJldHVybiB0aGlzLl9fZXJyb3IoXG4gICAgICAgICAgICBuZXcgQ3N2RXJyb3IoJ0NTVl9JTlZBTElEX0NPTFVNTl9NQVBQSU5HJywgW1xuICAgICAgICAgICAgICAnSW52YWxpZCBDb2x1bW4gTWFwcGluZzonLFxuICAgICAgICAgICAgICAnZXhwZWN0IGFuIGFycmF5IGZyb20gY29sdW1uIGZ1bmN0aW9uLCcsXG4gICAgICAgICAgICAgIGBnb3QgJHtKU09OLnN0cmluZ2lmeShoZWFkZXJzKX1gXG4gICAgICAgICAgICBdLCB0aGlzLm9wdGlvbnMsIHRoaXMuX19pbmZvRmllbGQoKSwge1xuICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRIZWFkZXJzID0gbm9ybWFsaXplX2NvbHVtbnNfYXJyYXkoaGVhZGVycyk7XG4gICAgICAgIHRoaXMuc3RhdGUuZXhwZWN0ZWRSZWNvcmRMZW5ndGggPSBub3JtYWxpemVkSGVhZGVycy5sZW5ndGg7XG4gICAgICAgIHRoaXMub3B0aW9ucy5jb2x1bW5zID0gbm9ybWFsaXplZEhlYWRlcnM7XG4gICAgICAgIHRoaXMuX19yZXNldFJlY29yZCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9Y2F0Y2goZXJyKXtcbiAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgIH1cbiAgICB9LFxuICAgIF9fcmVzZXRSZWNvcmQ6IGZ1bmN0aW9uKCl7XG4gICAgICBpZih0aGlzLm9wdGlvbnMucmF3ID09PSB0cnVlKXtcbiAgICAgICAgdGhpcy5zdGF0ZS5yYXdCdWZmZXIucmVzZXQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhdGUuZXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLnN0YXRlLnJlY29yZCA9IFtdO1xuICAgICAgdGhpcy5zdGF0ZS5yZWNvcmRfbGVuZ3RoID0gMDtcbiAgICB9LFxuICAgIF9fb25GaWVsZDogZnVuY3Rpb24oKXtcbiAgICAgIGNvbnN0IHtjYXN0LCBlbmNvZGluZywgcnRyaW0sIG1heF9yZWNvcmRfc2l6ZX0gPSB0aGlzLm9wdGlvbnM7XG4gICAgICBjb25zdCB7ZW5hYmxlZCwgd2FzUXVvdGluZ30gPSB0aGlzLnN0YXRlO1xuICAgICAgLy8gU2hvcnQgY2lyY3VpdCBmb3IgdGhlIGZyb21fbGluZSBvcHRpb25zXG4gICAgICBpZihlbmFibGVkID09PSBmYWxzZSl7XG4gICAgICAgIHJldHVybiB0aGlzLl9fcmVzZXRGaWVsZCgpO1xuICAgICAgfVxuICAgICAgbGV0IGZpZWxkID0gdGhpcy5zdGF0ZS5maWVsZC50b1N0cmluZyhlbmNvZGluZyk7XG4gICAgICBpZihydHJpbSA9PT0gdHJ1ZSAmJiB3YXNRdW90aW5nID09PSBmYWxzZSl7XG4gICAgICAgIGZpZWxkID0gZmllbGQudHJpbVJpZ2h0KCk7XG4gICAgICB9XG4gICAgICBpZihjYXN0ID09PSB0cnVlKXtcbiAgICAgICAgY29uc3QgW2VyciwgZl0gPSB0aGlzLl9fY2FzdChmaWVsZCk7XG4gICAgICAgIGlmKGVyciAhPT0gdW5kZWZpbmVkKSByZXR1cm4gZXJyO1xuICAgICAgICBmaWVsZCA9IGY7XG4gICAgICB9XG4gICAgICB0aGlzLnN0YXRlLnJlY29yZC5wdXNoKGZpZWxkKTtcbiAgICAgIC8vIEluY3JlbWVudCByZWNvcmQgbGVuZ3RoIGlmIHJlY29yZCBzaXplIG11c3Qgbm90IGV4Y2VlZCBhIGxpbWl0XG4gICAgICBpZihtYXhfcmVjb3JkX3NpemUgIT09IDAgJiYgdHlwZW9mIGZpZWxkID09PSAnc3RyaW5nJyl7XG4gICAgICAgIHRoaXMuc3RhdGUucmVjb3JkX2xlbmd0aCArPSBmaWVsZC5sZW5ndGg7XG4gICAgICB9XG4gICAgICB0aGlzLl9fcmVzZXRGaWVsZCgpO1xuICAgIH0sXG4gICAgX19yZXNldEZpZWxkOiBmdW5jdGlvbigpe1xuICAgICAgdGhpcy5zdGF0ZS5maWVsZC5yZXNldCgpO1xuICAgICAgdGhpcy5zdGF0ZS53YXNRdW90aW5nID0gZmFsc2U7XG4gICAgfSxcbiAgICBfX3B1c2g6IGZ1bmN0aW9uKHJlY29yZCwgcHVzaCl7XG4gICAgICBjb25zdCB7b25fcmVjb3JkfSA9IHRoaXMub3B0aW9ucztcbiAgICAgIGlmKG9uX3JlY29yZCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgY29uc3QgaW5mbyA9IHRoaXMuX19pbmZvUmVjb3JkKCk7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICByZWNvcmQgPSBvbl9yZWNvcmQuY2FsbChudWxsLCByZWNvcmQsIGluZm8pO1xuICAgICAgICB9Y2F0Y2goZXJyKXtcbiAgICAgICAgICByZXR1cm4gZXJyO1xuICAgICAgICB9XG4gICAgICAgIGlmKHJlY29yZCA9PT0gdW5kZWZpbmVkIHx8IHJlY29yZCA9PT0gbnVsbCl7IHJldHVybjsgfVxuICAgICAgfVxuICAgICAgcHVzaChyZWNvcmQpO1xuICAgIH0sXG4gICAgLy8gUmV0dXJuIGEgdHVwbGUgd2l0aCB0aGUgZXJyb3IgYW5kIHRoZSBjYXN0ZWQgdmFsdWVcbiAgICBfX2Nhc3Q6IGZ1bmN0aW9uKGZpZWxkKXtcbiAgICAgIGNvbnN0IHtjb2x1bW5zLCByZWxheF9jb2x1bW5fY291bnR9ID0gdGhpcy5vcHRpb25zO1xuICAgICAgY29uc3QgaXNDb2x1bW5zID0gQXJyYXkuaXNBcnJheShjb2x1bW5zKTtcbiAgICAgIC8vIERvbnQgbG9vc2UgdGltZSBjYWxsaW5nIGNhc3RcbiAgICAgIC8vIGJlY2F1c2UgdGhlIGZpbmFsIHJlY29yZCBpcyBhbiBvYmplY3RcbiAgICAgIC8vIGFuZCB0aGlzIGZpZWxkIGNhbid0IGJlIGFzc29jaWF0ZWQgdG8gYSBrZXkgcHJlc2VudCBpbiBjb2x1bW5zXG4gICAgICBpZihpc0NvbHVtbnMgPT09IHRydWUgJiYgcmVsYXhfY29sdW1uX2NvdW50ICYmIHRoaXMub3B0aW9ucy5jb2x1bW5zLmxlbmd0aCA8PSB0aGlzLnN0YXRlLnJlY29yZC5sZW5ndGgpe1xuICAgICAgICByZXR1cm4gW3VuZGVmaW5lZCwgdW5kZWZpbmVkXTtcbiAgICAgIH1cbiAgICAgIGlmKHRoaXMuc3RhdGUuY2FzdEZpZWxkICE9PSBudWxsKXtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgIGNvbnN0IGluZm8gPSB0aGlzLl9faW5mb0ZpZWxkKCk7XG4gICAgICAgICAgcmV0dXJuIFt1bmRlZmluZWQsIHRoaXMuc3RhdGUuY2FzdEZpZWxkLmNhbGwobnVsbCwgZmllbGQsIGluZm8pXTtcbiAgICAgICAgfWNhdGNoKGVycil7XG4gICAgICAgICAgcmV0dXJuIFtlcnJdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZih0aGlzLl9faXNGbG9hdChmaWVsZCkpe1xuICAgICAgICByZXR1cm4gW3VuZGVmaW5lZCwgcGFyc2VGbG9hdChmaWVsZCldO1xuICAgICAgfWVsc2UgaWYodGhpcy5vcHRpb25zLmNhc3RfZGF0ZSAhPT0gZmFsc2Upe1xuICAgICAgICBjb25zdCBpbmZvID0gdGhpcy5fX2luZm9GaWVsZCgpO1xuICAgICAgICByZXR1cm4gW3VuZGVmaW5lZCwgdGhpcy5vcHRpb25zLmNhc3RfZGF0ZS5jYWxsKG51bGwsIGZpZWxkLCBpbmZvKV07XG4gICAgICB9XG4gICAgICByZXR1cm4gW3VuZGVmaW5lZCwgZmllbGRdO1xuICAgIH0sXG4gICAgLy8gSGVscGVyIHRvIHRlc3QgaWYgYSBjaGFyYWN0ZXIgaXMgYSBzcGFjZSBvciBhIGxpbmUgZGVsaW1pdGVyXG4gICAgX19pc0NoYXJUcmltYWJsZTogZnVuY3Rpb24oYnVmLCBwb3Mpe1xuICAgICAgY29uc3QgaXNUcmltID0gKGJ1ZiwgcG9zKSA9PiB7XG4gICAgICAgIGNvbnN0IHt0aW1jaGFyc30gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsb29wMTogZm9yKGxldCBpID0gMDsgaSA8IHRpbWNoYXJzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICBjb25zdCB0aW1jaGFyID0gdGltY2hhcnNbaV07XG4gICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHRpbWNoYXIubGVuZ3RoOyBqKyspe1xuICAgICAgICAgICAgaWYodGltY2hhcltqXSAhPT0gYnVmW3BvcytqXSkgY29udGludWUgbG9vcDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aW1jaGFyLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH07XG4gICAgICByZXR1cm4gaXNUcmltKGJ1ZiwgcG9zKTtcbiAgICB9LFxuICAgIC8vIEtlZXAgaXQgaW4gY2FzZSB3ZSBpbXBsZW1lbnQgdGhlIGBjYXN0X2ludGAgb3B0aW9uXG4gICAgLy8gX19pc0ludCh2YWx1ZSl7XG4gICAgLy8gICAvLyByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcihwYXJzZUludCh2YWx1ZSkpXG4gICAgLy8gICAvLyByZXR1cm4gIWlzTmFOKCBwYXJzZUludCggb2JqICkgKTtcbiAgICAvLyAgIHJldHVybiAvXihcXC18XFwrKT9bMS05XVswLTldKiQvLnRlc3QodmFsdWUpXG4gICAgLy8gfVxuICAgIF9faXNGbG9hdDogZnVuY3Rpb24odmFsdWUpe1xuICAgICAgcmV0dXJuICh2YWx1ZSAtIHBhcnNlRmxvYXQodmFsdWUpICsgMSkgPj0gMDsgLy8gQm9ycm93ZWQgZnJvbSBqcXVlcnlcbiAgICB9LFxuICAgIF9fY29tcGFyZUJ5dGVzOiBmdW5jdGlvbihzb3VyY2VCdWYsIHRhcmdldEJ1ZiwgdGFyZ2V0UG9zLCBmaXJzdEJ5dGUpe1xuICAgICAgaWYoc291cmNlQnVmWzBdICE9PSBmaXJzdEJ5dGUpIHJldHVybiAwO1xuICAgICAgY29uc3Qgc291cmNlTGVuZ3RoID0gc291cmNlQnVmLmxlbmd0aDtcbiAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCBzb3VyY2VMZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmKHNvdXJjZUJ1ZltpXSAhPT0gdGFyZ2V0QnVmW3RhcmdldFBvcytpXSkgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgICByZXR1cm4gc291cmNlTGVuZ3RoO1xuICAgIH0sXG4gICAgX19pc0RlbGltaXRlcjogZnVuY3Rpb24oYnVmLCBwb3MsIGNocil7XG4gICAgICBjb25zdCB7ZGVsaW1pdGVyLCBpZ25vcmVfbGFzdF9kZWxpbWl0ZXJzfSA9IHRoaXMub3B0aW9ucztcbiAgICAgIGlmKGlnbm9yZV9sYXN0X2RlbGltaXRlcnMgPT09IHRydWUgJiYgdGhpcy5zdGF0ZS5yZWNvcmQubGVuZ3RoID09PSB0aGlzLm9wdGlvbnMuY29sdW1ucy5sZW5ndGggLSAxKXtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9ZWxzZSBpZihpZ25vcmVfbGFzdF9kZWxpbWl0ZXJzICE9PSBmYWxzZSAmJiB0eXBlb2YgaWdub3JlX2xhc3RfZGVsaW1pdGVycyA9PT0gJ251bWJlcicgJiYgdGhpcy5zdGF0ZS5yZWNvcmQubGVuZ3RoID09PSBpZ25vcmVfbGFzdF9kZWxpbWl0ZXJzIC0gMSl7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgICAgbG9vcDE6IGZvcihsZXQgaSA9IDA7IGkgPCBkZWxpbWl0ZXIubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBkZWwgPSBkZWxpbWl0ZXJbaV07XG4gICAgICAgIGlmKGRlbFswXSA9PT0gY2hyKXtcbiAgICAgICAgICBmb3IobGV0IGogPSAxOyBqIDwgZGVsLmxlbmd0aDsgaisrKXtcbiAgICAgICAgICAgIGlmKGRlbFtqXSAhPT0gYnVmW3BvcytqXSkgY29udGludWUgbG9vcDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkZWwubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9LFxuICAgIF9faXNSZWNvcmREZWxpbWl0ZXI6IGZ1bmN0aW9uKGNociwgYnVmLCBwb3Mpe1xuICAgICAgY29uc3Qge3JlY29yZF9kZWxpbWl0ZXJ9ID0gdGhpcy5vcHRpb25zO1xuICAgICAgY29uc3QgcmVjb3JkRGVsaW1pdGVyTGVuZ3RoID0gcmVjb3JkX2RlbGltaXRlci5sZW5ndGg7XG4gICAgICBsb29wMTogZm9yKGxldCBpID0gMDsgaSA8IHJlY29yZERlbGltaXRlckxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgcmQgPSByZWNvcmRfZGVsaW1pdGVyW2ldO1xuICAgICAgICBjb25zdCByZExlbmd0aCA9IHJkLmxlbmd0aDtcbiAgICAgICAgaWYocmRbMF0gIT09IGNocil7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCBqID0gMTsgaiA8IHJkTGVuZ3RoOyBqKyspe1xuICAgICAgICAgIGlmKHJkW2pdICE9PSBidWZbcG9zK2pdKXtcbiAgICAgICAgICAgIGNvbnRpbnVlIGxvb3AxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmQubGVuZ3RoO1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfSxcbiAgICBfX2lzRXNjYXBlOiBmdW5jdGlvbihidWYsIHBvcywgY2hyKXtcbiAgICAgIGNvbnN0IHtlc2NhcGV9ID0gdGhpcy5vcHRpb25zO1xuICAgICAgaWYoZXNjYXBlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgICBjb25zdCBsID0gZXNjYXBlLmxlbmd0aDtcbiAgICAgIGlmKGVzY2FwZVswXSA9PT0gY2hyKXtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGw7IGkrKyl7XG4gICAgICAgICAgaWYoZXNjYXBlW2ldICE9PSBidWZbcG9zK2ldKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICBfX2lzUXVvdGU6IGZ1bmN0aW9uKGJ1ZiwgcG9zKXtcbiAgICAgIGNvbnN0IHtxdW90ZX0gPSB0aGlzLm9wdGlvbnM7XG4gICAgICBpZihxdW90ZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgY29uc3QgbCA9IHF1b3RlLmxlbmd0aDtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsOyBpKyspe1xuICAgICAgICBpZihxdW90ZVtpXSAhPT0gYnVmW3BvcytpXSl7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIF9fYXV0b0Rpc2NvdmVyUmVjb3JkRGVsaW1pdGVyOiBmdW5jdGlvbihidWYsIHBvcyl7XG4gICAgICBjb25zdCB7IGVuY29kaW5nIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgICAvLyBOb3RlLCB3ZSBkb24ndCBuZWVkIHRvIGNhY2hlIHRoaXMgaW5mb3JtYXRpb24gaW4gc3RhdGUsXG4gICAgICAvLyBJdCBpcyBvbmx5IGNhbGxlZCBvbiB0aGUgZmlyc3QgbGluZSB1bnRpbCB3ZSBmaW5kIG91dCBhIHN1aXRhYmxlXG4gICAgICAvLyByZWNvcmQgZGVsaW1pdGVyLlxuICAgICAgY29uc3QgcmRzID0gW1xuICAgICAgICAvLyBJbXBvcnRhbnQsIHRoZSB3aW5kb3dzIGxpbmUgZW5kaW5nIG11c3QgYmUgYmVmb3JlIG1hYyBvcyA5XG4gICAgICAgIEJ1ZmZlci5mcm9tKCdcXHJcXG4nLCBlbmNvZGluZyksXG4gICAgICAgIEJ1ZmZlci5mcm9tKCdcXG4nLCBlbmNvZGluZyksXG4gICAgICAgIEJ1ZmZlci5mcm9tKCdcXHInLCBlbmNvZGluZyksXG4gICAgICBdO1xuICAgICAgbG9vcDogZm9yKGxldCBpID0gMDsgaSA8IHJkcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IGwgPSByZHNbaV0ubGVuZ3RoO1xuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgbDsgaisrKXtcbiAgICAgICAgICBpZihyZHNbaV1bal0gIT09IGJ1Zltwb3MgKyBqXSl7XG4gICAgICAgICAgICBjb250aW51ZSBsb29wO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wdGlvbnMucmVjb3JkX2RlbGltaXRlci5wdXNoKHJkc1tpXSk7XG4gICAgICAgIHRoaXMuc3RhdGUucmVjb3JkRGVsaW1pdGVyTWF4TGVuZ3RoID0gcmRzW2ldLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIHJkc1tpXS5sZW5ndGg7XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9LFxuICAgIF9fZXJyb3I6IGZ1bmN0aW9uKG1zZyl7XG4gICAgICBjb25zdCB7ZW5jb2RpbmcsIHJhdywgc2tpcF9yZWNvcmRzX3dpdGhfZXJyb3J9ID0gdGhpcy5vcHRpb25zO1xuICAgICAgY29uc3QgZXJyID0gdHlwZW9mIG1zZyA9PT0gJ3N0cmluZycgPyBuZXcgRXJyb3IobXNnKSA6IG1zZztcbiAgICAgIGlmKHNraXBfcmVjb3Jkc193aXRoX2Vycm9yKXtcbiAgICAgICAgdGhpcy5zdGF0ZS5yZWNvcmRIYXNFcnJvciA9IHRydWU7XG4gICAgICAgIGlmKHRoaXMub3B0aW9ucy5vbl9za2lwICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5vbl9za2lwKGVyciwgcmF3ID8gdGhpcy5zdGF0ZS5yYXdCdWZmZXIudG9TdHJpbmcoZW5jb2RpbmcpIDogdW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLmVtaXQoJ3NraXAnLCBlcnIsIHJhdyA/IHRoaXMuc3RhdGUucmF3QnVmZmVyLnRvU3RyaW5nKGVuY29kaW5nKSA6IHVuZGVmaW5lZCk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9ZWxzZSB7XG4gICAgICAgIHJldHVybiBlcnI7XG4gICAgICB9XG4gICAgfSxcbiAgICBfX2luZm9EYXRhU2V0OiBmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4udGhpcy5pbmZvLFxuICAgICAgICBjb2x1bW5zOiB0aGlzLm9wdGlvbnMuY29sdW1uc1xuICAgICAgfTtcbiAgICB9LFxuICAgIF9faW5mb1JlY29yZDogZnVuY3Rpb24oKXtcbiAgICAgIGNvbnN0IHtjb2x1bW5zLCByYXcsIGVuY29kaW5nfSA9IHRoaXMub3B0aW9ucztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnRoaXMuX19pbmZvRGF0YVNldCgpLFxuICAgICAgICBlcnJvcjogdGhpcy5zdGF0ZS5lcnJvcixcbiAgICAgICAgaGVhZGVyOiBjb2x1bW5zID09PSB0cnVlLFxuICAgICAgICBpbmRleDogdGhpcy5zdGF0ZS5yZWNvcmQubGVuZ3RoLFxuICAgICAgICByYXc6IHJhdyA/IHRoaXMuc3RhdGUucmF3QnVmZmVyLnRvU3RyaW5nKGVuY29kaW5nKSA6IHVuZGVmaW5lZFxuICAgICAgfTtcbiAgICB9LFxuICAgIF9faW5mb0ZpZWxkOiBmdW5jdGlvbigpe1xuICAgICAgY29uc3Qge2NvbHVtbnN9ID0gdGhpcy5vcHRpb25zO1xuICAgICAgY29uc3QgaXNDb2x1bW5zID0gQXJyYXkuaXNBcnJheShjb2x1bW5zKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnRoaXMuX19pbmZvUmVjb3JkKCksXG4gICAgICAgIGNvbHVtbjogaXNDb2x1bW5zID09PSB0cnVlID9cbiAgICAgICAgICAoY29sdW1ucy5sZW5ndGggPiB0aGlzLnN0YXRlLnJlY29yZC5sZW5ndGggP1xuICAgICAgICAgICAgY29sdW1uc1t0aGlzLnN0YXRlLnJlY29yZC5sZW5ndGhdLm5hbWUgOlxuICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICkgOlxuICAgICAgICAgIHRoaXMuc3RhdGUucmVjb3JkLmxlbmd0aCxcbiAgICAgICAgcXVvdGluZzogdGhpcy5zdGF0ZS53YXNRdW90aW5nLFxuICAgICAgfTtcbiAgICB9XG4gIH07XG59O1xuXG5jb25zdCBwYXJzZSA9IGZ1bmN0aW9uKGRhdGEsIG9wdHM9e30pe1xuICBpZih0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpe1xuICAgIGRhdGEgPSBCdWZmZXIuZnJvbShkYXRhKTtcbiAgfVxuICBjb25zdCByZWNvcmRzID0gb3B0cyAmJiBvcHRzLm9iam5hbWUgPyB7fSA6IFtdO1xuICBjb25zdCBwYXJzZXIgPSB0cmFuc2Zvcm0ob3B0cyk7XG4gIGNvbnN0IHB1c2ggPSAocmVjb3JkKSA9PiB7XG4gICAgaWYocGFyc2VyLm9wdGlvbnMub2JqbmFtZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmVjb3Jkcy5wdXNoKHJlY29yZCk7XG4gICAgZWxzZSB7XG4gICAgICByZWNvcmRzW3JlY29yZFswXV0gPSByZWNvcmRbMV07XG4gICAgfVxuICB9O1xuICBjb25zdCBjbG9zZSA9ICgpID0+IHt9O1xuICBjb25zdCBlcnIxID0gcGFyc2VyLnBhcnNlKGRhdGEsIGZhbHNlLCBwdXNoLCBjbG9zZSk7XG4gIGlmKGVycjEgIT09IHVuZGVmaW5lZCkgdGhyb3cgZXJyMTtcbiAgY29uc3QgZXJyMiA9IHBhcnNlci5wYXJzZSh1bmRlZmluZWQsIHRydWUsIHB1c2gsIGNsb3NlKTtcbiAgaWYoZXJyMiAhPT0gdW5kZWZpbmVkKSB0aHJvdyBlcnIyO1xuICByZXR1cm4gcmVjb3Jkcztcbn07XG5cbmV4cG9ydCB7IENzdkVycm9yLCBwYXJzZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=