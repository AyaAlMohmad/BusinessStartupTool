function Dn(e, t) {
    return function () {
        return e.apply(t, arguments);
    };
}
const { toString: wi } = Object.prototype,
    { getPrototypeOf: jt } = Object,
    He = ((e) => (t) => {
        const n = wi.call(t);
        return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
    })(Object.create(null)),
    j = (e) => ((e = e.toLowerCase()), (t) => He(t) === e),
    ze = (e) => (t) => typeof t === e,
    { isArray: ie } = Array,
    ye = ze("undefined");
function xi(e) {
    return (
        e !== null &&
        !ye(e) &&
        e.constructor !== null &&
        !ye(e.constructor) &&
        N(e.constructor.isBuffer) &&
        e.constructor.isBuffer(e)
    );
}
const Bn = j("ArrayBuffer");
function Ei(e) {
    let t;
    return (
        typeof ArrayBuffer < "u" && ArrayBuffer.isView
            ? (t = ArrayBuffer.isView(e))
            : (t = e && e.buffer && Bn(e.buffer)),
        t
    );
}
const Si = ze("string"),
    N = ze("function"),
    kn = ze("number"),
    Ke = (e) => e !== null && typeof e == "object",
    Ai = (e) => e === !0 || e === !1,
    Pe = (e) => {
        if (He(e) !== "object") return !1;
        const t = jt(e);
        return (
            (t === null ||
                t === Object.prototype ||
                Object.getPrototypeOf(t) === null) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
        );
    },
    Oi = j("Date"),
    vi = j("File"),
    Ri = j("Blob"),
    Ti = j("FileList"),
    Ci = (e) => Ke(e) && N(e.pipe),
    Pi = (e) => {
        let t;
        return (
            e &&
            ((typeof FormData == "function" && e instanceof FormData) ||
                (N(e.append) &&
                    ((t = He(e)) === "formdata" ||
                        (t === "object" &&
                            N(e.toString) &&
                            e.toString() === "[object FormData]"))))
        );
    },
    Ni = j("URLSearchParams"),
    [Li, Fi, Mi, ji] = ["ReadableStream", "Request", "Response", "Headers"].map(
        j
    ),
    Ii = (e) =>
        e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function we(e, t, { allOwnKeys: n = !1 } = {}) {
    if (e === null || typeof e > "u") return;
    let r, i;
    if ((typeof e != "object" && (e = [e]), ie(e)))
        for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
    else {
        const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
            o = s.length;
        let a;
        for (r = 0; r < o; r++) (a = s[r]), t.call(null, e[a], a, e);
    }
}
function $n(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length,
        i;
    for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
    return null;
}
const J = (() =>
        typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
            ? self
            : typeof window < "u"
            ? window
            : global)(),
    Un = (e) => !ye(e) && e !== J;
function dt() {
    const { caseless: e } = (Un(this) && this) || {},
        t = {},
        n = (r, i) => {
            const s = (e && $n(t, i)) || i;
            Pe(t[s]) && Pe(r)
                ? (t[s] = dt(t[s], r))
                : Pe(r)
                ? (t[s] = dt({}, r))
                : ie(r)
                ? (t[s] = r.slice())
                : (t[s] = r);
        };
    for (let r = 0, i = arguments.length; r < i; r++)
        arguments[r] && we(arguments[r], n);
    return t;
}
const Di = (e, t, n, { allOwnKeys: r } = {}) => (
        we(
            t,
            (i, s) => {
                n && N(i) ? (e[s] = Dn(i, n)) : (e[s] = i);
            },
            { allOwnKeys: r }
        ),
        e
    ),
    Bi = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    ki = (e, t, n, r) => {
        (e.prototype = Object.create(t.prototype, r)),
            (e.prototype.constructor = e),
            Object.defineProperty(e, "super", { value: t.prototype }),
            n && Object.assign(e.prototype, n);
    },
    $i = (e, t, n, r) => {
        let i, s, o;
        const a = {};
        if (((t = t || {}), e == null)) return t;
        do {
            for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0; )
                (o = i[s]),
                    (!r || r(o, e, t)) && !a[o] && ((t[o] = e[o]), (a[o] = !0));
            e = n !== !1 && jt(e);
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t;
    },
    Ui = (e, t, n) => {
        (e = String(e)),
            (n === void 0 || n > e.length) && (n = e.length),
            (n -= t.length);
        const r = e.indexOf(t, n);
        return r !== -1 && r === n;
    },
    qi = (e) => {
        if (!e) return null;
        if (ie(e)) return e;
        let t = e.length;
        if (!kn(t)) return null;
        const n = new Array(t);
        for (; t-- > 0; ) n[t] = e[t];
        return n;
    },
    Hi = (
        (e) => (t) =>
            e && t instanceof e
    )(typeof Uint8Array < "u" && jt(Uint8Array)),
    zi = (e, t) => {
        const r = (e && e[Symbol.iterator]).call(e);
        let i;
        for (; (i = r.next()) && !i.done; ) {
            const s = i.value;
            t.call(e, s[0], s[1]);
        }
    },
    Ki = (e, t) => {
        let n;
        const r = [];
        for (; (n = e.exec(t)) !== null; ) r.push(n);
        return r;
    },
    Ji = j("HTMLFormElement"),
    Wi = (e) =>
        e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
            return r.toUpperCase() + i;
        }),
    un = (
        ({ hasOwnProperty: e }) =>
        (t, n) =>
            e.call(t, n)
    )(Object.prototype),
    Vi = j("RegExp"),
    qn = (e, t) => {
        const n = Object.getOwnPropertyDescriptors(e),
            r = {};
        we(n, (i, s) => {
            let o;
            (o = t(i, s, e)) !== !1 && (r[s] = o || i);
        }),
            Object.defineProperties(e, r);
    },
    Xi = (e) => {
        qn(e, (t, n) => {
            if (N(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
                return !1;
            const r = e[n];
            if (N(r)) {
                if (((t.enumerable = !1), "writable" in t)) {
                    t.writable = !1;
                    return;
                }
                t.set ||
                    (t.set = () => {
                        throw Error(
                            "Can not rewrite read-only method '" + n + "'"
                        );
                    });
            }
        });
    },
    Gi = (e, t) => {
        const n = {},
            r = (i) => {
                i.forEach((s) => {
                    n[s] = !0;
                });
            };
        return ie(e) ? r(e) : r(String(e).split(t)), n;
    },
    Yi = () => {},
    Zi = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
    rt = "abcdefghijklmnopqrstuvwxyz",
    ln = "0123456789",
    Hn = { DIGIT: ln, ALPHA: rt, ALPHA_DIGIT: rt + rt.toUpperCase() + ln },
    Qi = (e = 16, t = Hn.ALPHA_DIGIT) => {
        let n = "";
        const { length: r } = t;
        for (; e--; ) n += t[(Math.random() * r) | 0];
        return n;
    };
function es(e) {
    return !!(
        e &&
        N(e.append) &&
        e[Symbol.toStringTag] === "FormData" &&
        e[Symbol.iterator]
    );
}
const ts = (e) => {
        const t = new Array(10),
            n = (r, i) => {
                if (Ke(r)) {
                    if (t.indexOf(r) >= 0) return;
                    if (!("toJSON" in r)) {
                        t[i] = r;
                        const s = ie(r) ? [] : {};
                        return (
                            we(r, (o, a) => {
                                const c = n(o, i + 1);
                                !ye(c) && (s[a] = c);
                            }),
                            (t[i] = void 0),
                            s
                        );
                    }
                }
                return r;
            };
        return n(e, 0);
    },
    ns = j("AsyncFunction"),
    rs = (e) => e && (Ke(e) || N(e)) && N(e.then) && N(e.catch),
    zn = ((e, t) =>
        e
            ? setImmediate
            : t
            ? ((n, r) => (
                  J.addEventListener(
                      "message",
                      ({ source: i, data: s }) => {
                          i === J && s === n && r.length && r.shift()();
                      },
                      !1
                  ),
                  (i) => {
                      r.push(i), J.postMessage(n, "*");
                  }
              ))(`axios@${Math.random()}`, [])
            : (n) => setTimeout(n))(
        typeof setImmediate == "function",
        N(J.postMessage)
    ),
    is =
        typeof queueMicrotask < "u"
            ? queueMicrotask.bind(J)
            : (typeof process < "u" && process.nextTick) || zn,
    f = {
        isArray: ie,
        isArrayBuffer: Bn,
        isBuffer: xi,
        isFormData: Pi,
        isArrayBufferView: Ei,
        isString: Si,
        isNumber: kn,
        isBoolean: Ai,
        isObject: Ke,
        isPlainObject: Pe,
        isReadableStream: Li,
        isRequest: Fi,
        isResponse: Mi,
        isHeaders: ji,
        isUndefined: ye,
        isDate: Oi,
        isFile: vi,
        isBlob: Ri,
        isRegExp: Vi,
        isFunction: N,
        isStream: Ci,
        isURLSearchParams: Ni,
        isTypedArray: Hi,
        isFileList: Ti,
        forEach: we,
        merge: dt,
        extend: Di,
        trim: Ii,
        stripBOM: Bi,
        inherits: ki,
        toFlatObject: $i,
        kindOf: He,
        kindOfTest: j,
        endsWith: Ui,
        toArray: qi,
        forEachEntry: zi,
        matchAll: Ki,
        isHTMLForm: Ji,
        hasOwnProperty: un,
        hasOwnProp: un,
        reduceDescriptors: qn,
        freezeMethods: Xi,
        toObjectSet: Gi,
        toCamelCase: Wi,
        noop: Yi,
        toFiniteNumber: Zi,
        findKey: $n,
        global: J,
        isContextDefined: Un,
        ALPHABET: Hn,
        generateString: Qi,
        isSpecCompliantForm: es,
        toJSONObject: ts,
        isAsyncFn: ns,
        isThenable: rs,
        setImmediate: zn,
        asap: is,
    };
function y(e, t, n, r, i) {
    Error.call(this),
        Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
        (this.message = e),
        (this.name = "AxiosError"),
        t && (this.code = t),
        n && (this.config = n),
        r && (this.request = r),
        i && ((this.response = i), (this.status = i.status ? i.status : null));
}
f.inherits(y, Error, {
    toJSON: function () {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: f.toJSONObject(this.config),
            code: this.code,
            status: this.status,
        };
    },
});
const Kn = y.prototype,
    Jn = {};
[
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL",
].forEach((e) => {
    Jn[e] = { value: e };
});
Object.defineProperties(y, Jn);
Object.defineProperty(Kn, "isAxiosError", { value: !0 });
y.from = (e, t, n, r, i, s) => {
    const o = Object.create(Kn);
    return (
        f.toFlatObject(
            e,
            o,
            function (c) {
                return c !== Error.prototype;
            },
            (a) => a !== "isAxiosError"
        ),
        y.call(o, e.message, t, n, r, i),
        (o.cause = e),
        (o.name = e.name),
        s && Object.assign(o, s),
        o
    );
};
const ss = null;
function pt(e) {
    return f.isPlainObject(e) || f.isArray(e);
}
function Wn(e) {
    return f.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function fn(e, t, n) {
    return e
        ? e
              .concat(t)
              .map(function (i, s) {
                  return (i = Wn(i)), !n && s ? "[" + i + "]" : i;
              })
              .join(n ? "." : "")
        : t;
}
function os(e) {
    return f.isArray(e) && !e.some(pt);
}
const as = f.toFlatObject(f, {}, null, function (t) {
    return /^is[A-Z]/.test(t);
});
function Je(e, t, n) {
    if (!f.isObject(e)) throw new TypeError("target must be an object");
    (t = t || new FormData()),
        (n = f.toFlatObject(
            n,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (g, d) {
                return !f.isUndefined(d[g]);
            }
        ));
    const r = n.metaTokens,
        i = n.visitor || l,
        s = n.dots,
        o = n.indexes,
        c = (n.Blob || (typeof Blob < "u" && Blob)) && f.isSpecCompliantForm(t);
    if (!f.isFunction(i)) throw new TypeError("visitor must be a function");
    function u(h) {
        if (h === null) return "";
        if (f.isDate(h)) return h.toISOString();
        if (!c && f.isBlob(h))
            throw new y("Blob is not supported. Use a Buffer instead.");
        return f.isArrayBuffer(h) || f.isTypedArray(h)
            ? c && typeof Blob == "function"
                ? new Blob([h])
                : Buffer.from(h)
            : h;
    }
    function l(h, g, d) {
        let m = h;
        if (h && !d && typeof h == "object") {
            if (f.endsWith(g, "{}"))
                (g = r ? g : g.slice(0, -2)), (h = JSON.stringify(h));
            else if (
                (f.isArray(h) && os(h)) ||
                ((f.isFileList(h) || f.endsWith(g, "[]")) && (m = f.toArray(h)))
            )
                return (
                    (g = Wn(g)),
                    m.forEach(function (x, A) {
                        !(f.isUndefined(x) || x === null) &&
                            t.append(
                                o === !0
                                    ? fn([g], A, s)
                                    : o === null
                                    ? g
                                    : g + "[]",
                                u(x)
                            );
                    }),
                    !1
                );
        }
        return pt(h) ? !0 : (t.append(fn(d, g, s), u(h)), !1);
    }
    const p = [],
        _ = Object.assign(as, {
            defaultVisitor: l,
            convertValue: u,
            isVisitable: pt,
        });
    function w(h, g) {
        if (!f.isUndefined(h)) {
            if (p.indexOf(h) !== -1)
                throw Error("Circular reference detected in " + g.join("."));
            p.push(h),
                f.forEach(h, function (m, b) {
                    (!(f.isUndefined(m) || m === null) &&
                        i.call(t, m, f.isString(b) ? b.trim() : b, g, _)) ===
                        !0 && w(m, g ? g.concat(b) : [b]);
                }),
                p.pop();
        }
    }
    if (!f.isObject(e)) throw new TypeError("data must be an object");
    return w(e), t;
}
function dn(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0",
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
        return t[r];
    });
}
function It(e, t) {
    (this._pairs = []), e && Je(e, this, t);
}
const Vn = It.prototype;
Vn.append = function (t, n) {
    this._pairs.push([t, n]);
};
Vn.toString = function (t) {
    const n = t
        ? function (r) {
              return t.call(this, r, dn);
          }
        : dn;
    return this._pairs
        .map(function (i) {
            return n(i[0]) + "=" + n(i[1]);
        }, "")
        .join("&");
};
function cs(e) {
    return encodeURIComponent(e)
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]");
}
function Xn(e, t, n) {
    if (!t) return e;
    const r = (n && n.encode) || cs;
    f.isFunction(n) && (n = { serialize: n });
    const i = n && n.serialize;
    let s;
    if (
        (i
            ? (s = i(t, n))
            : (s = f.isURLSearchParams(t)
                  ? t.toString()
                  : new It(t, n).toString(r)),
        s)
    ) {
        const o = e.indexOf("#");
        o !== -1 && (e = e.slice(0, o)),
            (e += (e.indexOf("?") === -1 ? "?" : "&") + s);
    }
    return e;
}
class us {
    constructor() {
        this.handlers = [];
    }
    use(t, n, r) {
        return (
            this.handlers.push({
                fulfilled: t,
                rejected: n,
                synchronous: r ? r.synchronous : !1,
                runWhen: r ? r.runWhen : null,
            }),
            this.handlers.length - 1
        );
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null);
    }
    clear() {
        this.handlers && (this.handlers = []);
    }
    forEach(t) {
        f.forEach(this.handlers, function (r) {
            r !== null && t(r);
        });
    }
}
const pn = us,
    Gn = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1,
    },
    ls = typeof URLSearchParams < "u" ? URLSearchParams : It,
    fs = typeof FormData < "u" ? FormData : null,
    ds = typeof Blob < "u" ? Blob : null,
    ps = {
        isBrowser: !0,
        classes: { URLSearchParams: ls, FormData: fs, Blob: ds },
        protocols: ["http", "https", "file", "blob", "url", "data"],
    },
    Dt = typeof window < "u" && typeof document < "u",
    ht = (typeof navigator == "object" && navigator) || void 0,
    hs =
        Dt &&
        (!ht || ["ReactNative", "NativeScript", "NS"].indexOf(ht.product) < 0),
    _s = (() =>
        typeof WorkerGlobalScope < "u" &&
        self instanceof WorkerGlobalScope &&
        typeof self.importScripts == "function")(),
    ms = (Dt && window.location.href) || "http://localhost",
    gs = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                hasBrowserEnv: Dt,
                hasStandardBrowserEnv: hs,
                hasStandardBrowserWebWorkerEnv: _s,
                navigator: ht,
                origin: ms,
            },
            Symbol.toStringTag,
            { value: "Module" }
        )
    ),
    T = { ...gs, ...ps };
function ys(e, t) {
    return Je(
        e,
        new T.classes.URLSearchParams(),
        Object.assign(
            {
                visitor: function (n, r, i, s) {
                    return T.isNode && f.isBuffer(n)
                        ? (this.append(r, n.toString("base64")), !1)
                        : s.defaultVisitor.apply(this, arguments);
                },
            },
            t
        )
    );
}
function bs(e) {
    return f
        .matchAll(/\w+|\[(\w*)]/g, e)
        .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function ws(e) {
    const t = {},
        n = Object.keys(e);
    let r;
    const i = n.length;
    let s;
    for (r = 0; r < i; r++) (s = n[r]), (t[s] = e[s]);
    return t;
}
function Yn(e) {
    function t(n, r, i, s) {
        let o = n[s++];
        if (o === "__proto__") return !0;
        const a = Number.isFinite(+o),
            c = s >= n.length;
        return (
            (o = !o && f.isArray(i) ? i.length : o),
            c
                ? (f.hasOwnProp(i, o) ? (i[o] = [i[o], r]) : (i[o] = r), !a)
                : ((!i[o] || !f.isObject(i[o])) && (i[o] = []),
                  t(n, r, i[o], s) && f.isArray(i[o]) && (i[o] = ws(i[o])),
                  !a)
        );
    }
    if (f.isFormData(e) && f.isFunction(e.entries)) {
        const n = {};
        return (
            f.forEachEntry(e, (r, i) => {
                t(bs(r), i, n, 0);
            }),
            n
        );
    }
    return null;
}
function xs(e, t, n) {
    if (f.isString(e))
        try {
            return (t || JSON.parse)(e), f.trim(e);
        } catch (r) {
            if (r.name !== "SyntaxError") throw r;
        }
    return (n || JSON.stringify)(e);
}
const Bt = {
    transitional: Gn,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [
        function (t, n) {
            const r = n.getContentType() || "",
                i = r.indexOf("application/json") > -1,
                s = f.isObject(t);
            if (
                (s && f.isHTMLForm(t) && (t = new FormData(t)), f.isFormData(t))
            )
                return i ? JSON.stringify(Yn(t)) : t;
            if (
                f.isArrayBuffer(t) ||
                f.isBuffer(t) ||
                f.isStream(t) ||
                f.isFile(t) ||
                f.isBlob(t) ||
                f.isReadableStream(t)
            )
                return t;
            if (f.isArrayBufferView(t)) return t.buffer;
            if (f.isURLSearchParams(t))
                return (
                    n.setContentType(
                        "application/x-www-form-urlencoded;charset=utf-8",
                        !1
                    ),
                    t.toString()
                );
            let a;
            if (s) {
                if (r.indexOf("application/x-www-form-urlencoded") > -1)
                    return ys(t, this.formSerializer).toString();
                if (
                    (a = f.isFileList(t)) ||
                    r.indexOf("multipart/form-data") > -1
                ) {
                    const c = this.env && this.env.FormData;
                    return Je(
                        a ? { "files[]": t } : t,
                        c && new c(),
                        this.formSerializer
                    );
                }
            }
            return s || i
                ? (n.setContentType("application/json", !1), xs(t))
                : t;
        },
    ],
    transformResponse: [
        function (t) {
            const n = this.transitional || Bt.transitional,
                r = n && n.forcedJSONParsing,
                i = this.responseType === "json";
            if (f.isResponse(t) || f.isReadableStream(t)) return t;
            if (t && f.isString(t) && ((r && !this.responseType) || i)) {
                const o = !(n && n.silentJSONParsing) && i;
                try {
                    return JSON.parse(t);
                } catch (a) {
                    if (o)
                        throw a.name === "SyntaxError"
                            ? y.from(
                                  a,
                                  y.ERR_BAD_RESPONSE,
                                  this,
                                  null,
                                  this.response
                              )
                            : a;
                }
            }
            return t;
        },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: T.classes.FormData, Blob: T.classes.Blob },
    validateStatus: function (t) {
        return t >= 200 && t < 300;
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0,
        },
    },
};
f.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
    Bt.headers[e] = {};
});
const kt = Bt,
    Es = f.toObjectSet([
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
    ]),
    Ss = (e) => {
        const t = {};
        let n, r, i;
        return (
            e &&
                e
                    .split(
                        `
`
                    )
                    .forEach(function (o) {
                        (i = o.indexOf(":")),
                            (n = o.substring(0, i).trim().toLowerCase()),
                            (r = o.substring(i + 1).trim()),
                            !(!n || (t[n] && Es[n])) &&
                                (n === "set-cookie"
                                    ? t[n]
                                        ? t[n].push(r)
                                        : (t[n] = [r])
                                    : (t[n] = t[n] ? t[n] + ", " + r : r));
                    }),
            t
        );
    },
    hn = Symbol("internals");
function fe(e) {
    return e && String(e).trim().toLowerCase();
}
function Ne(e) {
    return e === !1 || e == null ? e : f.isArray(e) ? e.map(Ne) : String(e);
}
function As(e) {
    const t = Object.create(null),
        n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; (r = n.exec(e)); ) t[r[1]] = r[2];
    return t;
}
const Os = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function it(e, t, n, r, i) {
    if (f.isFunction(r)) return r.call(this, t, n);
    if ((i && (t = n), !!f.isString(t))) {
        if (f.isString(r)) return t.indexOf(r) !== -1;
        if (f.isRegExp(r)) return r.test(t);
    }
}
function vs(e) {
    return e
        .trim()
        .toLowerCase()
        .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Rs(e, t) {
    const n = f.toCamelCase(" " + t);
    ["get", "set", "has"].forEach((r) => {
        Object.defineProperty(e, r + n, {
            value: function (i, s, o) {
                return this[r].call(this, t, i, s, o);
            },
            configurable: !0,
        });
    });
}
class We {
    constructor(t) {
        t && this.set(t);
    }
    set(t, n, r) {
        const i = this;
        function s(a, c, u) {
            const l = fe(c);
            if (!l) throw new Error("header name must be a non-empty string");
            const p = f.findKey(i, l);
            (!p ||
                i[p] === void 0 ||
                u === !0 ||
                (u === void 0 && i[p] !== !1)) &&
                (i[p || c] = Ne(a));
        }
        const o = (a, c) => f.forEach(a, (u, l) => s(u, l, c));
        if (f.isPlainObject(t) || t instanceof this.constructor) o(t, n);
        else if (f.isString(t) && (t = t.trim()) && !Os(t)) o(Ss(t), n);
        else if (f.isHeaders(t)) for (const [a, c] of t.entries()) s(c, a, r);
        else t != null && s(n, t, r);
        return this;
    }
    get(t, n) {
        if (((t = fe(t)), t)) {
            const r = f.findKey(this, t);
            if (r) {
                const i = this[r];
                if (!n) return i;
                if (n === !0) return As(i);
                if (f.isFunction(n)) return n.call(this, i, r);
                if (f.isRegExp(n)) return n.exec(i);
                throw new TypeError("parser must be boolean|regexp|function");
            }
        }
    }
    has(t, n) {
        if (((t = fe(t)), t)) {
            const r = f.findKey(this, t);
            return !!(
                r &&
                this[r] !== void 0 &&
                (!n || it(this, this[r], r, n))
            );
        }
        return !1;
    }
    delete(t, n) {
        const r = this;
        let i = !1;
        function s(o) {
            if (((o = fe(o)), o)) {
                const a = f.findKey(r, o);
                a && (!n || it(r, r[a], a, n)) && (delete r[a], (i = !0));
            }
        }
        return f.isArray(t) ? t.forEach(s) : s(t), i;
    }
    clear(t) {
        const n = Object.keys(this);
        let r = n.length,
            i = !1;
        for (; r--; ) {
            const s = n[r];
            (!t || it(this, this[s], s, t, !0)) && (delete this[s], (i = !0));
        }
        return i;
    }
    normalize(t) {
        const n = this,
            r = {};
        return (
            f.forEach(this, (i, s) => {
                const o = f.findKey(r, s);
                if (o) {
                    (n[o] = Ne(i)), delete n[s];
                    return;
                }
                const a = t ? vs(s) : String(s).trim();
                a !== s && delete n[s], (n[a] = Ne(i)), (r[a] = !0);
            }),
            this
        );
    }
    concat(...t) {
        return this.constructor.concat(this, ...t);
    }
    toJSON(t) {
        const n = Object.create(null);
        return (
            f.forEach(this, (r, i) => {
                r != null &&
                    r !== !1 &&
                    (n[i] = t && f.isArray(r) ? r.join(", ") : r);
            }),
            n
        );
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n)
            .join(`
`);
    }
    get [Symbol.toStringTag]() {
        return "AxiosHeaders";
    }
    static from(t) {
        return t instanceof this ? t : new this(t);
    }
    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach((i) => r.set(i)), r;
    }
    static accessor(t) {
        const r = (this[hn] = this[hn] = { accessors: {} }).accessors,
            i = this.prototype;
        function s(o) {
            const a = fe(o);
            r[a] || (Rs(i, o), (r[a] = !0));
        }
        return f.isArray(t) ? t.forEach(s) : s(t), this;
    }
}
We.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
]);
f.reduceDescriptors(We.prototype, ({ value: e }, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(r) {
            this[n] = r;
        },
    };
});
f.freezeMethods(We);
const F = We;
function st(e, t) {
    const n = this || kt,
        r = t || n,
        i = F.from(r.headers);
    let s = r.data;
    return (
        f.forEach(e, function (a) {
            s = a.call(n, s, i.normalize(), t ? t.status : void 0);
        }),
        i.normalize(),
        s
    );
}
function Zn(e) {
    return !!(e && e.__CANCEL__);
}
function se(e, t, n) {
    y.call(this, e ?? "canceled", y.ERR_CANCELED, t, n),
        (this.name = "CanceledError");
}
f.inherits(se, y, { __CANCEL__: !0 });
function Qn(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status)
        ? e(n)
        : t(
              new y(
                  "Request failed with status code " + n.status,
                  [y.ERR_BAD_REQUEST, y.ERR_BAD_RESPONSE][
                      Math.floor(n.status / 100) - 4
                  ],
                  n.config,
                  n.request,
                  n
              )
          );
}
function Ts(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return (t && t[1]) || "";
}
function Cs(e, t) {
    e = e || 10;
    const n = new Array(e),
        r = new Array(e);
    let i = 0,
        s = 0,
        o;
    return (
        (t = t !== void 0 ? t : 1e3),
        function (c) {
            const u = Date.now(),
                l = r[s];
            o || (o = u), (n[i] = c), (r[i] = u);
            let p = s,
                _ = 0;
            for (; p !== i; ) (_ += n[p++]), (p = p % e);
            if (((i = (i + 1) % e), i === s && (s = (s + 1) % e), u - o < t))
                return;
            const w = l && u - l;
            return w ? Math.round((_ * 1e3) / w) : void 0;
        }
    );
}
function Ps(e, t) {
    let n = 0,
        r = 1e3 / t,
        i,
        s;
    const o = (u, l = Date.now()) => {
        (n = l),
            (i = null),
            s && (clearTimeout(s), (s = null)),
            e.apply(null, u);
    };
    return [
        (...u) => {
            const l = Date.now(),
                p = l - n;
            p >= r
                ? o(u, l)
                : ((i = u),
                  s ||
                      (s = setTimeout(() => {
                          (s = null), o(i);
                      }, r - p)));
        },
        () => i && o(i),
    ];
}
const Ie = (e, t, n = 3) => {
        let r = 0;
        const i = Cs(50, 250);
        return Ps((s) => {
            const o = s.loaded,
                a = s.lengthComputable ? s.total : void 0,
                c = o - r,
                u = i(c),
                l = o <= a;
            r = o;
            const p = {
                loaded: o,
                total: a,
                progress: a ? o / a : void 0,
                bytes: c,
                rate: u || void 0,
                estimated: u && a && l ? (a - o) / u : void 0,
                event: s,
                lengthComputable: a != null,
                [t ? "download" : "upload"]: !0,
            };
            e(p);
        }, n);
    },
    _n = (e, t) => {
        const n = e != null;
        return [
            (r) => t[0]({ lengthComputable: n, total: e, loaded: r }),
            t[1],
        ];
    },
    mn =
        (e) =>
        (...t) =>
            f.asap(() => e(...t)),
    Ns = T.hasStandardBrowserEnv
        ? ((e, t) => (n) => (
              (n = new URL(n, T.origin)),
              e.protocol === n.protocol &&
                  e.host === n.host &&
                  (t || e.port === n.port)
          ))(
              new URL(T.origin),
              T.navigator && /(msie|trident)/i.test(T.navigator.userAgent)
          )
        : () => !0,
    Ls = T.hasStandardBrowserEnv
        ? {
              write(e, t, n, r, i, s) {
                  const o = [e + "=" + encodeURIComponent(t)];
                  f.isNumber(n) &&
                      o.push("expires=" + new Date(n).toGMTString()),
                      f.isString(r) && o.push("path=" + r),
                      f.isString(i) && o.push("domain=" + i),
                      s === !0 && o.push("secure"),
                      (document.cookie = o.join("; "));
              },
              read(e) {
                  const t = document.cookie.match(
                      new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
                  );
                  return t ? decodeURIComponent(t[3]) : null;
              },
              remove(e) {
                  this.write(e, "", Date.now() - 864e5);
              },
          }
        : {
              write() {},
              read() {
                  return null;
              },
              remove() {},
          };
function Fs(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ms(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function er(e, t) {
    return e && !Fs(t) ? Ms(e, t) : t;
}
const gn = (e) => (e instanceof F ? { ...e } : e);
function Z(e, t) {
    t = t || {};
    const n = {};
    function r(u, l, p, _) {
        return f.isPlainObject(u) && f.isPlainObject(l)
            ? f.merge.call({ caseless: _ }, u, l)
            : f.isPlainObject(l)
            ? f.merge({}, l)
            : f.isArray(l)
            ? l.slice()
            : l;
    }
    function i(u, l, p, _) {
        if (f.isUndefined(l)) {
            if (!f.isUndefined(u)) return r(void 0, u, p, _);
        } else return r(u, l, p, _);
    }
    function s(u, l) {
        if (!f.isUndefined(l)) return r(void 0, l);
    }
    function o(u, l) {
        if (f.isUndefined(l)) {
            if (!f.isUndefined(u)) return r(void 0, u);
        } else return r(void 0, l);
    }
    function a(u, l, p) {
        if (p in t) return r(u, l);
        if (p in e) return r(void 0, u);
    }
    const c = {
        url: s,
        method: s,
        data: s,
        baseURL: o,
        transformRequest: o,
        transformResponse: o,
        paramsSerializer: o,
        timeout: o,
        timeoutMessage: o,
        withCredentials: o,
        withXSRFToken: o,
        adapter: o,
        responseType: o,
        xsrfCookieName: o,
        xsrfHeaderName: o,
        onUploadProgress: o,
        onDownloadProgress: o,
        decompress: o,
        maxContentLength: o,
        maxBodyLength: o,
        beforeRedirect: o,
        transport: o,
        httpAgent: o,
        httpsAgent: o,
        cancelToken: o,
        socketPath: o,
        responseEncoding: o,
        validateStatus: a,
        headers: (u, l, p) => i(gn(u), gn(l), p, !0),
    };
    return (
        f.forEach(Object.keys(Object.assign({}, e, t)), function (l) {
            const p = c[l] || i,
                _ = p(e[l], t[l], l);
            (f.isUndefined(_) && p !== a) || (n[l] = _);
        }),
        n
    );
}
const tr = (e) => {
        const t = Z({}, e);
        let {
            data: n,
            withXSRFToken: r,
            xsrfHeaderName: i,
            xsrfCookieName: s,
            headers: o,
            auth: a,
        } = t;
        (t.headers = o = F.from(o)),
            (t.url = Xn(er(t.baseURL, t.url), e.params, e.paramsSerializer)),
            a &&
                o.set(
                    "Authorization",
                    "Basic " +
                        btoa(
                            (a.username || "") +
                                ":" +
                                (a.password
                                    ? unescape(encodeURIComponent(a.password))
                                    : "")
                        )
                );
        let c;
        if (f.isFormData(n)) {
            if (T.hasStandardBrowserEnv || T.hasStandardBrowserWebWorkerEnv)
                o.setContentType(void 0);
            else if ((c = o.getContentType()) !== !1) {
                const [u, ...l] = c
                    ? c
                          .split(";")
                          .map((p) => p.trim())
                          .filter(Boolean)
                    : [];
                o.setContentType([u || "multipart/form-data", ...l].join("; "));
            }
        }
        if (
            T.hasStandardBrowserEnv &&
            (r && f.isFunction(r) && (r = r(t)), r || (r !== !1 && Ns(t.url)))
        ) {
            const u = i && s && Ls.read(s);
            u && o.set(i, u);
        }
        return t;
    },
    js = typeof XMLHttpRequest < "u",
    Is =
        js &&
        function (e) {
            return new Promise(function (n, r) {
                const i = tr(e);
                let s = i.data;
                const o = F.from(i.headers).normalize();
                let {
                        responseType: a,
                        onUploadProgress: c,
                        onDownloadProgress: u,
                    } = i,
                    l,
                    p,
                    _,
                    w,
                    h;
                function g() {
                    w && w(),
                        h && h(),
                        i.cancelToken && i.cancelToken.unsubscribe(l),
                        i.signal && i.signal.removeEventListener("abort", l);
                }
                let d = new XMLHttpRequest();
                d.open(i.method.toUpperCase(), i.url, !0),
                    (d.timeout = i.timeout);
                function m() {
                    if (!d) return;
                    const x = F.from(
                            "getAllResponseHeaders" in d &&
                                d.getAllResponseHeaders()
                        ),
                        O = {
                            data:
                                !a || a === "text" || a === "json"
                                    ? d.responseText
                                    : d.response,
                            status: d.status,
                            statusText: d.statusText,
                            headers: x,
                            config: e,
                            request: d,
                        };
                    Qn(
                        function (D) {
                            n(D), g();
                        },
                        function (D) {
                            r(D), g();
                        },
                        O
                    ),
                        (d = null);
                }
                "onloadend" in d
                    ? (d.onloadend = m)
                    : (d.onreadystatechange = function () {
                          !d ||
                              d.readyState !== 4 ||
                              (d.status === 0 &&
                                  !(
                                      d.responseURL &&
                                      d.responseURL.indexOf("file:") === 0
                                  )) ||
                              setTimeout(m);
                      }),
                    (d.onabort = function () {
                        d &&
                            (r(new y("Request aborted", y.ECONNABORTED, e, d)),
                            (d = null));
                    }),
                    (d.onerror = function () {
                        r(new y("Network Error", y.ERR_NETWORK, e, d)),
                            (d = null);
                    }),
                    (d.ontimeout = function () {
                        let A = i.timeout
                            ? "timeout of " + i.timeout + "ms exceeded"
                            : "timeout exceeded";
                        const O = i.transitional || Gn;
                        i.timeoutErrorMessage && (A = i.timeoutErrorMessage),
                            r(
                                new y(
                                    A,
                                    O.clarifyTimeoutError
                                        ? y.ETIMEDOUT
                                        : y.ECONNABORTED,
                                    e,
                                    d
                                )
                            ),
                            (d = null);
                    }),
                    s === void 0 && o.setContentType(null),
                    "setRequestHeader" in d &&
                        f.forEach(o.toJSON(), function (A, O) {
                            d.setRequestHeader(O, A);
                        }),
                    f.isUndefined(i.withCredentials) ||
                        (d.withCredentials = !!i.withCredentials),
                    a && a !== "json" && (d.responseType = i.responseType),
                    u &&
                        (([_, h] = Ie(u, !0)),
                        d.addEventListener("progress", _)),
                    c &&
                        d.upload &&
                        (([p, w] = Ie(c)),
                        d.upload.addEventListener("progress", p),
                        d.upload.addEventListener("loadend", w)),
                    (i.cancelToken || i.signal) &&
                        ((l = (x) => {
                            d &&
                                (r(!x || x.type ? new se(null, e, d) : x),
                                d.abort(),
                                (d = null));
                        }),
                        i.cancelToken && i.cancelToken.subscribe(l),
                        i.signal &&
                            (i.signal.aborted
                                ? l()
                                : i.signal.addEventListener("abort", l)));
                const b = Ts(i.url);
                if (b && T.protocols.indexOf(b) === -1) {
                    r(
                        new y(
                            "Unsupported protocol " + b + ":",
                            y.ERR_BAD_REQUEST,
                            e
                        )
                    );
                    return;
                }
                d.send(s || null);
            });
        },
    Ds = (e, t) => {
        const { length: n } = (e = e ? e.filter(Boolean) : []);
        if (t || n) {
            let r = new AbortController(),
                i;
            const s = function (u) {
                if (!i) {
                    (i = !0), a();
                    const l = u instanceof Error ? u : this.reason;
                    r.abort(
                        l instanceof y
                            ? l
                            : new se(l instanceof Error ? l.message : l)
                    );
                }
            };
            let o =
                t &&
                setTimeout(() => {
                    (o = null),
                        s(new y(`timeout ${t} of ms exceeded`, y.ETIMEDOUT));
                }, t);
            const a = () => {
                e &&
                    (o && clearTimeout(o),
                    (o = null),
                    e.forEach((u) => {
                        u.unsubscribe
                            ? u.unsubscribe(s)
                            : u.removeEventListener("abort", s);
                    }),
                    (e = null));
            };
            e.forEach((u) => u.addEventListener("abort", s));
            const { signal: c } = r;
            return (c.unsubscribe = () => f.asap(a)), c;
        }
    },
    Bs = Ds,
    ks = function* (e, t) {
        let n = e.byteLength;
        if (!t || n < t) {
            yield e;
            return;
        }
        let r = 0,
            i;
        for (; r < n; ) (i = r + t), yield e.slice(r, i), (r = i);
    },
    $s = async function* (e, t) {
        for await (const n of Us(e)) yield* ks(n, t);
    },
    Us = async function* (e) {
        if (e[Symbol.asyncIterator]) {
            yield* e;
            return;
        }
        const t = e.getReader();
        try {
            for (;;) {
                const { done: n, value: r } = await t.read();
                if (n) break;
                yield r;
            }
        } finally {
            await t.cancel();
        }
    },
    yn = (e, t, n, r) => {
        const i = $s(e, t);
        let s = 0,
            o,
            a = (c) => {
                o || ((o = !0), r && r(c));
            };
        return new ReadableStream(
            {
                async pull(c) {
                    try {
                        const { done: u, value: l } = await i.next();
                        if (u) {
                            a(), c.close();
                            return;
                        }
                        let p = l.byteLength;
                        if (n) {
                            let _ = (s += p);
                            n(_);
                        }
                        c.enqueue(new Uint8Array(l));
                    } catch (u) {
                        throw (a(u), u);
                    }
                },
                cancel(c) {
                    return a(c), i.return();
                },
            },
            { highWaterMark: 2 }
        );
    },
    Ve =
        typeof fetch == "function" &&
        typeof Request == "function" &&
        typeof Response == "function",
    nr = Ve && typeof ReadableStream == "function",
    qs =
        Ve &&
        (typeof TextEncoder == "function"
            ? (
                  (e) => (t) =>
                      e.encode(t)
              )(new TextEncoder())
            : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
    rr = (e, ...t) => {
        try {
            return !!e(...t);
        } catch {
            return !1;
        }
    },
    Hs =
        nr &&
        rr(() => {
            let e = !1;
            const t = new Request(T.origin, {
                body: new ReadableStream(),
                method: "POST",
                get duplex() {
                    return (e = !0), "half";
                },
            }).headers.has("Content-Type");
            return e && !t;
        }),
    bn = 64 * 1024,
    _t = nr && rr(() => f.isReadableStream(new Response("").body)),
    De = { stream: _t && ((e) => e.body) };
Ve &&
    ((e) => {
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
            !De[t] &&
                (De[t] = f.isFunction(e[t])
                    ? (n) => n[t]()
                    : (n, r) => {
                          throw new y(
                              `Response type '${t}' is not supported`,
                              y.ERR_NOT_SUPPORT,
                              r
                          );
                      });
        });
    })(new Response());
const zs = async (e) => {
        if (e == null) return 0;
        if (f.isBlob(e)) return e.size;
        if (f.isSpecCompliantForm(e))
            return (
                await new Request(T.origin, {
                    method: "POST",
                    body: e,
                }).arrayBuffer()
            ).byteLength;
        if (f.isArrayBufferView(e) || f.isArrayBuffer(e)) return e.byteLength;
        if ((f.isURLSearchParams(e) && (e = e + ""), f.isString(e)))
            return (await qs(e)).byteLength;
    },
    Ks = async (e, t) => {
        const n = f.toFiniteNumber(e.getContentLength());
        return n ?? zs(t);
    },
    Js =
        Ve &&
        (async (e) => {
            let {
                url: t,
                method: n,
                data: r,
                signal: i,
                cancelToken: s,
                timeout: o,
                onDownloadProgress: a,
                onUploadProgress: c,
                responseType: u,
                headers: l,
                withCredentials: p = "same-origin",
                fetchOptions: _,
            } = tr(e);
            u = u ? (u + "").toLowerCase() : "text";
            let w = Bs([i, s && s.toAbortSignal()], o),
                h;
            const g =
                w &&
                w.unsubscribe &&
                (() => {
                    w.unsubscribe();
                });
            let d;
            try {
                if (
                    c &&
                    Hs &&
                    n !== "get" &&
                    n !== "head" &&
                    (d = await Ks(l, r)) !== 0
                ) {
                    let O = new Request(t, {
                            method: "POST",
                            body: r,
                            duplex: "half",
                        }),
                        P;
                    if (
                        (f.isFormData(r) &&
                            (P = O.headers.get("content-type")) &&
                            l.setContentType(P),
                        O.body)
                    ) {
                        const [D, te] = _n(d, Ie(mn(c)));
                        r = yn(O.body, bn, D, te);
                    }
                }
                f.isString(p) || (p = p ? "include" : "omit");
                const m = "credentials" in Request.prototype;
                h = new Request(t, {
                    ..._,
                    signal: w,
                    method: n.toUpperCase(),
                    headers: l.normalize().toJSON(),
                    body: r,
                    duplex: "half",
                    credentials: m ? p : void 0,
                });
                let b = await fetch(h);
                const x = _t && (u === "stream" || u === "response");
                if (_t && (a || (x && g))) {
                    const O = {};
                    ["status", "statusText", "headers"].forEach((Ae) => {
                        O[Ae] = b[Ae];
                    });
                    const P = f.toFiniteNumber(b.headers.get("content-length")),
                        [D, te] = (a && _n(P, Ie(mn(a), !0))) || [];
                    b = new Response(
                        yn(b.body, bn, D, () => {
                            te && te(), g && g();
                        }),
                        O
                    );
                }
                u = u || "text";
                let A = await De[f.findKey(De, u) || "text"](b, e);
                return (
                    !x && g && g(),
                    await new Promise((O, P) => {
                        Qn(O, P, {
                            data: A,
                            headers: F.from(b.headers),
                            status: b.status,
                            statusText: b.statusText,
                            config: e,
                            request: h,
                        });
                    })
                );
            } catch (m) {
                throw (
                    (g && g(),
                    m && m.name === "TypeError" && /fetch/i.test(m.message)
                        ? Object.assign(
                              new y("Network Error", y.ERR_NETWORK, e, h),
                              { cause: m.cause || m }
                          )
                        : y.from(m, m && m.code, e, h))
                );
            }
        }),
    mt = { http: ss, xhr: Is, fetch: Js };
f.forEach(mt, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", { value: t });
        } catch {}
        Object.defineProperty(e, "adapterName", { value: t });
    }
});
const wn = (e) => `- ${e}`,
    Ws = (e) => f.isFunction(e) || e === null || e === !1,
    ir = {
        getAdapter: (e) => {
            e = f.isArray(e) ? e : [e];
            const { length: t } = e;
            let n, r;
            const i = {};
            for (let s = 0; s < t; s++) {
                n = e[s];
                let o;
                if (
                    ((r = n),
                    !Ws(n) &&
                        ((r = mt[(o = String(n)).toLowerCase()]), r === void 0))
                )
                    throw new y(`Unknown adapter '${o}'`);
                if (r) break;
                i[o || "#" + s] = r;
            }
            if (!r) {
                const s = Object.entries(i).map(
                    ([a, c]) =>
                        `adapter ${a} ` +
                        (c === !1
                            ? "is not supported by the environment"
                            : "is not available in the build")
                );
                let o = t
                    ? s.length > 1
                        ? `since :
` +
                          s.map(wn).join(`
`)
                        : " " + wn(s[0])
                    : "as no adapter specified";
                throw new y(
                    "There is no suitable adapter to dispatch the request " + o,
                    "ERR_NOT_SUPPORT"
                );
            }
            return r;
        },
        adapters: mt,
    };
function ot(e) {
    if (
        (e.cancelToken && e.cancelToken.throwIfRequested(),
        e.signal && e.signal.aborted)
    )
        throw new se(null, e);
}
function xn(e) {
    return (
        ot(e),
        (e.headers = F.from(e.headers)),
        (e.data = st.call(e, e.transformRequest)),
        ["post", "put", "patch"].indexOf(e.method) !== -1 &&
            e.headers.setContentType("application/x-www-form-urlencoded", !1),
        ir
            .getAdapter(e.adapter || kt.adapter)(e)
            .then(
                function (r) {
                    return (
                        ot(e),
                        (r.data = st.call(e, e.transformResponse, r)),
                        (r.headers = F.from(r.headers)),
                        r
                    );
                },
                function (r) {
                    return (
                        Zn(r) ||
                            (ot(e),
                            r &&
                                r.response &&
                                ((r.response.data = st.call(
                                    e,
                                    e.transformResponse,
                                    r.response
                                )),
                                (r.response.headers = F.from(
                                    r.response.headers
                                )))),
                        Promise.reject(r)
                    );
                }
            )
    );
}
const sr = "1.7.9",
    Xe = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
    (e, t) => {
        Xe[e] = function (r) {
            return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
        };
    }
);
const En = {};
Xe.transitional = function (t, n, r) {
    function i(s, o) {
        return (
            "[Axios v" +
            sr +
            "] Transitional option '" +
            s +
            "'" +
            o +
            (r ? ". " + r : "")
        );
    }
    return (s, o, a) => {
        if (t === !1)
            throw new y(
                i(o, " has been removed" + (n ? " in " + n : "")),
                y.ERR_DEPRECATED
            );
        return (
            n &&
                !En[o] &&
                ((En[o] = !0),
                console.warn(
                    i(
                        o,
                        " has been deprecated since v" +
                            n +
                            " and will be removed in the near future"
                    )
                )),
            t ? t(s, o, a) : !0
        );
    };
};
Xe.spelling = function (t) {
    return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Vs(e, t, n) {
    if (typeof e != "object")
        throw new y("options must be an object", y.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let i = r.length;
    for (; i-- > 0; ) {
        const s = r[i],
            o = t[s];
        if (o) {
            const a = e[s],
                c = a === void 0 || o(a, s, e);
            if (c !== !0)
                throw new y(
                    "option " + s + " must be " + c,
                    y.ERR_BAD_OPTION_VALUE
                );
            continue;
        }
        if (n !== !0) throw new y("Unknown option " + s, y.ERR_BAD_OPTION);
    }
}
const Le = { assertOptions: Vs, validators: Xe },
    B = Le.validators;
class Be {
    constructor(t) {
        (this.defaults = t),
            (this.interceptors = { request: new pn(), response: new pn() });
    }
    async request(t, n) {
        try {
            return await this._request(t, n);
        } catch (r) {
            if (r instanceof Error) {
                let i = {};
                Error.captureStackTrace
                    ? Error.captureStackTrace(i)
                    : (i = new Error());
                const s = i.stack ? i.stack.replace(/^.+\n/, "") : "";
                try {
                    r.stack
                        ? s &&
                          !String(r.stack).endsWith(
                              s.replace(/^.+\n.+\n/, "")
                          ) &&
                          (r.stack +=
                              `
` + s)
                        : (r.stack = s);
                } catch {}
            }
            throw r;
        }
    }
    _request(t, n) {
        typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
            (n = Z(this.defaults, n));
        const { transitional: r, paramsSerializer: i, headers: s } = n;
        r !== void 0 &&
            Le.assertOptions(
                r,
                {
                    silentJSONParsing: B.transitional(B.boolean),
                    forcedJSONParsing: B.transitional(B.boolean),
                    clarifyTimeoutError: B.transitional(B.boolean),
                },
                !1
            ),
            i != null &&
                (f.isFunction(i)
                    ? (n.paramsSerializer = { serialize: i })
                    : Le.assertOptions(
                          i,
                          { encode: B.function, serialize: B.function },
                          !0
                      )),
            Le.assertOptions(
                n,
                {
                    baseUrl: B.spelling("baseURL"),
                    withXsrfToken: B.spelling("withXSRFToken"),
                },
                !0
            ),
            (n.method = (
                n.method ||
                this.defaults.method ||
                "get"
            ).toLowerCase());
        let o = s && f.merge(s.common, s[n.method]);
        s &&
            f.forEach(
                ["delete", "get", "head", "post", "put", "patch", "common"],
                (h) => {
                    delete s[h];
                }
            ),
            (n.headers = F.concat(o, s));
        const a = [];
        let c = !0;
        this.interceptors.request.forEach(function (g) {
            (typeof g.runWhen == "function" && g.runWhen(n) === !1) ||
                ((c = c && g.synchronous), a.unshift(g.fulfilled, g.rejected));
        });
        const u = [];
        this.interceptors.response.forEach(function (g) {
            u.push(g.fulfilled, g.rejected);
        });
        let l,
            p = 0,
            _;
        if (!c) {
            const h = [xn.bind(this), void 0];
            for (
                h.unshift.apply(h, a),
                    h.push.apply(h, u),
                    _ = h.length,
                    l = Promise.resolve(n);
                p < _;

            )
                l = l.then(h[p++], h[p++]);
            return l;
        }
        _ = a.length;
        let w = n;
        for (p = 0; p < _; ) {
            const h = a[p++],
                g = a[p++];
            try {
                w = h(w);
            } catch (d) {
                g.call(this, d);
                break;
            }
        }
        try {
            l = xn.call(this, w);
        } catch (h) {
            return Promise.reject(h);
        }
        for (p = 0, _ = u.length; p < _; ) l = l.then(u[p++], u[p++]);
        return l;
    }
    getUri(t) {
        t = Z(this.defaults, t);
        const n = er(t.baseURL, t.url);
        return Xn(n, t.params, t.paramsSerializer);
    }
}
f.forEach(["delete", "get", "head", "options"], function (t) {
    Be.prototype[t] = function (n, r) {
        return this.request(
            Z(r || {}, { method: t, url: n, data: (r || {}).data })
        );
    };
});
f.forEach(["post", "put", "patch"], function (t) {
    function n(r) {
        return function (s, o, a) {
            return this.request(
                Z(a || {}, {
                    method: t,
                    headers: r ? { "Content-Type": "multipart/form-data" } : {},
                    url: s,
                    data: o,
                })
            );
        };
    }
    (Be.prototype[t] = n()), (Be.prototype[t + "Form"] = n(!0));
});
const Fe = Be;
class $t {
    constructor(t) {
        if (typeof t != "function")
            throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function (s) {
            n = s;
        });
        const r = this;
        this.promise.then((i) => {
            if (!r._listeners) return;
            let s = r._listeners.length;
            for (; s-- > 0; ) r._listeners[s](i);
            r._listeners = null;
        }),
            (this.promise.then = (i) => {
                let s;
                const o = new Promise((a) => {
                    r.subscribe(a), (s = a);
                }).then(i);
                return (
                    (o.cancel = function () {
                        r.unsubscribe(s);
                    }),
                    o
                );
            }),
            t(function (s, o, a) {
                r.reason || ((r.reason = new se(s, o, a)), n(r.reason));
            });
    }
    throwIfRequested() {
        if (this.reason) throw this.reason;
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return;
        }
        this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
    }
    unsubscribe(t) {
        if (!this._listeners) return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1);
    }
    toAbortSignal() {
        const t = new AbortController(),
            n = (r) => {
                t.abort(r);
            };
        return (
            this.subscribe(n),
            (t.signal.unsubscribe = () => this.unsubscribe(n)),
            t.signal
        );
    }
    static source() {
        let t;
        return {
            token: new $t(function (i) {
                t = i;
            }),
            cancel: t,
        };
    }
}
const Xs = $t;
function Gs(e) {
    return function (n) {
        return e.apply(null, n);
    };
}
function Ys(e) {
    return f.isObject(e) && e.isAxiosError === !0;
}
const gt = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
};
Object.entries(gt).forEach(([e, t]) => {
    gt[t] = e;
});
const Zs = gt;
function or(e) {
    const t = new Fe(e),
        n = Dn(Fe.prototype.request, t);
    return (
        f.extend(n, Fe.prototype, t, { allOwnKeys: !0 }),
        f.extend(n, t, null, { allOwnKeys: !0 }),
        (n.create = function (i) {
            return or(Z(e, i));
        }),
        n
    );
}
const v = or(kt);
v.Axios = Fe;
v.CanceledError = se;
v.CancelToken = Xs;
v.isCancel = Zn;
v.VERSION = sr;
v.toFormData = Je;
v.AxiosError = y;
v.Cancel = v.CanceledError;
v.all = function (t) {
    return Promise.all(t);
};
v.spread = Gs;
v.isAxiosError = Ys;
v.mergeConfig = Z;
v.AxiosHeaders = F;
v.formToJSON = (e) => Yn(f.isHTMLForm(e) ? new FormData(e) : e);
v.getAdapter = ir.getAdapter;
v.HttpStatusCode = Zs;
v.default = v;
const Qs = v;
window.axios = Qs;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
var yt = !1,
    bt = !1,
    V = [],
    wt = -1;
function eo(e) {
    to(e);
}
function to(e) {
    V.includes(e) || V.push(e), ro();
}
function no(e) {
    let t = V.indexOf(e);
    t !== -1 && t > wt && V.splice(t, 1);
}
function ro() {
    !bt && !yt && ((yt = !0), queueMicrotask(io));
}
function io() {
    (yt = !1), (bt = !0);
    for (let e = 0; e < V.length; e++) V[e](), (wt = e);
    (V.length = 0), (wt = -1), (bt = !1);
}
var oe,
    ee,
    ae,
    ar,
    xt = !0;
function so(e) {
    (xt = !1), e(), (xt = !0);
}
function oo(e) {
    (oe = e.reactive),
        (ae = e.release),
        (ee = (t) =>
            e.effect(t, {
                scheduler: (n) => {
                    xt ? eo(n) : n();
                },
            })),
        (ar = e.raw);
}
function Sn(e) {
    ee = e;
}
function ao(e) {
    let t = () => {};
    return [
        (r) => {
            let i = ee(r);
            return (
                e._x_effects ||
                    ((e._x_effects = new Set()),
                    (e._x_runEffects = () => {
                        e._x_effects.forEach((s) => s());
                    })),
                e._x_effects.add(i),
                (t = () => {
                    i !== void 0 && (e._x_effects.delete(i), ae(i));
                }),
                i
            );
        },
        () => {
            t();
        },
    ];
}
function cr(e, t) {
    let n = !0,
        r,
        i = ee(() => {
            let s = e();
            JSON.stringify(s),
                n
                    ? (r = s)
                    : queueMicrotask(() => {
                          t(s, r), (r = s);
                      }),
                (n = !1);
        });
    return () => ae(i);
}
var ur = [],
    lr = [],
    fr = [];
function co(e) {
    fr.push(e);
}
function Ut(e, t) {
    typeof t == "function"
        ? (e._x_cleanups || (e._x_cleanups = []), e._x_cleanups.push(t))
        : ((t = e), lr.push(t));
}
function dr(e) {
    ur.push(e);
}
function pr(e, t, n) {
    e._x_attributeCleanups || (e._x_attributeCleanups = {}),
        e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []),
        e._x_attributeCleanups[t].push(n);
}
function hr(e, t) {
    e._x_attributeCleanups &&
        Object.entries(e._x_attributeCleanups).forEach(([n, r]) => {
            (t === void 0 || t.includes(n)) &&
                (r.forEach((i) => i()), delete e._x_attributeCleanups[n]);
        });
}
function uo(e) {
    var t, n;
    for (
        (t = e._x_effects) == null || t.forEach(no);
        (n = e._x_cleanups) != null && n.length;

    )
        e._x_cleanups.pop()();
}
var qt = new MutationObserver(Jt),
    Ht = !1;
function zt() {
    qt.observe(document, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeOldValue: !0,
    }),
        (Ht = !0);
}
function _r() {
    lo(), qt.disconnect(), (Ht = !1);
}
var de = [];
function lo() {
    let e = qt.takeRecords();
    de.push(() => e.length > 0 && Jt(e));
    let t = de.length;
    queueMicrotask(() => {
        if (de.length === t) for (; de.length > 0; ) de.shift()();
    });
}
function S(e) {
    if (!Ht) return e();
    _r();
    let t = e();
    return zt(), t;
}
var Kt = !1,
    ke = [];
function fo() {
    Kt = !0;
}
function po() {
    (Kt = !1), Jt(ke), (ke = []);
}
function Jt(e) {
    if (Kt) {
        ke = ke.concat(e);
        return;
    }
    let t = [],
        n = new Set(),
        r = new Map(),
        i = new Map();
    for (let s = 0; s < e.length; s++)
        if (
            !e[s].target._x_ignoreMutationObserver &&
            (e[s].type === "childList" &&
                (e[s].removedNodes.forEach((o) => {
                    o.nodeType === 1 && o._x_marker && n.add(o);
                }),
                e[s].addedNodes.forEach((o) => {
                    if (o.nodeType === 1) {
                        if (n.has(o)) {
                            n.delete(o);
                            return;
                        }
                        o._x_marker || t.push(o);
                    }
                })),
            e[s].type === "attributes")
        ) {
            let o = e[s].target,
                a = e[s].attributeName,
                c = e[s].oldValue,
                u = () => {
                    r.has(o) || r.set(o, []),
                        r.get(o).push({ name: a, value: o.getAttribute(a) });
                },
                l = () => {
                    i.has(o) || i.set(o, []), i.get(o).push(a);
                };
            o.hasAttribute(a) && c === null
                ? u()
                : o.hasAttribute(a)
                ? (l(), u())
                : l();
        }
    i.forEach((s, o) => {
        hr(o, s);
    }),
        r.forEach((s, o) => {
            ur.forEach((a) => a(o, s));
        });
    for (let s of n) t.some((o) => o.contains(s)) || lr.forEach((o) => o(s));
    for (let s of t) s.isConnected && fr.forEach((o) => o(s));
    (t = null), (n = null), (r = null), (i = null);
}
function mr(e) {
    return Ee(ne(e));
}
function xe(e, t, n) {
    return (
        (e._x_dataStack = [t, ...ne(n || e)]),
        () => {
            e._x_dataStack = e._x_dataStack.filter((r) => r !== t);
        }
    );
}
function ne(e) {
    return e._x_dataStack
        ? e._x_dataStack
        : typeof ShadowRoot == "function" && e instanceof ShadowRoot
        ? ne(e.host)
        : e.parentNode
        ? ne(e.parentNode)
        : [];
}
function Ee(e) {
    return new Proxy({ objects: e }, ho);
}
var ho = {
    ownKeys({ objects: e }) {
        return Array.from(new Set(e.flatMap((t) => Object.keys(t))));
    },
    has({ objects: e }, t) {
        return t == Symbol.unscopables
            ? !1
            : e.some(
                  (n) =>
                      Object.prototype.hasOwnProperty.call(n, t) ||
                      Reflect.has(n, t)
              );
    },
    get({ objects: e }, t, n) {
        return t == "toJSON"
            ? _o
            : Reflect.get(e.find((r) => Reflect.has(r, t)) || {}, t, n);
    },
    set({ objects: e }, t, n, r) {
        const i =
                e.find((o) => Object.prototype.hasOwnProperty.call(o, t)) ||
                e[e.length - 1],
            s = Object.getOwnPropertyDescriptor(i, t);
        return s != null && s.set && s != null && s.get
            ? s.set.call(r, n) || !0
            : Reflect.set(i, t, n);
    },
};
function _o() {
    return Reflect.ownKeys(this).reduce(
        (t, n) => ((t[n] = Reflect.get(this, n)), t),
        {}
    );
}
function gr(e) {
    let t = (r) => typeof r == "object" && !Array.isArray(r) && r !== null,
        n = (r, i = "") => {
            Object.entries(Object.getOwnPropertyDescriptors(r)).forEach(
                ([s, { value: o, enumerable: a }]) => {
                    if (
                        a === !1 ||
                        o === void 0 ||
                        (typeof o == "object" && o !== null && o.__v_skip)
                    )
                        return;
                    let c = i === "" ? s : `${i}.${s}`;
                    typeof o == "object" && o !== null && o._x_interceptor
                        ? (r[s] = o.initialize(e, c, s))
                        : t(o) && o !== r && !(o instanceof Element) && n(o, c);
                }
            );
        };
    return n(e);
}
function yr(e, t = () => {}) {
    let n = {
        initialValue: void 0,
        _x_interceptor: !0,
        initialize(r, i, s) {
            return e(
                this.initialValue,
                () => mo(r, i),
                (o) => Et(r, i, o),
                i,
                s
            );
        },
    };
    return (
        t(n),
        (r) => {
            if (typeof r == "object" && r !== null && r._x_interceptor) {
                let i = n.initialize.bind(n);
                n.initialize = (s, o, a) => {
                    let c = r.initialize(s, o, a);
                    return (n.initialValue = c), i(s, o, a);
                };
            } else n.initialValue = r;
            return n;
        }
    );
}
function mo(e, t) {
    return t.split(".").reduce((n, r) => n[r], e);
}
function Et(e, t, n) {
    if ((typeof t == "string" && (t = t.split(".")), t.length === 1))
        e[t[0]] = n;
    else {
        if (t.length === 0) throw error;
        return e[t[0]] || (e[t[0]] = {}), Et(e[t[0]], t.slice(1), n);
    }
}
var br = {};
function I(e, t) {
    br[e] = t;
}
function St(e, t) {
    let n = go(t);
    return (
        Object.entries(br).forEach(([r, i]) => {
            Object.defineProperty(e, `$${r}`, {
                get() {
                    return i(t, n);
                },
                enumerable: !1,
            });
        }),
        e
    );
}
function go(e) {
    let [t, n] = Or(e),
        r = { interceptor: yr, ...t };
    return Ut(e, n), r;
}
function yo(e, t, n, ...r) {
    try {
        return n(...r);
    } catch (i) {
        be(i, e, t);
    }
}
function be(e, t, n = void 0) {
    (e = Object.assign(e ?? { message: "No error message given." }, {
        el: t,
        expression: n,
    })),
        console.warn(
            `Alpine Expression Error: ${e.message}

${
    n
        ? 'Expression: "' +
          n +
          `"

`
        : ""
}`,
            t
        ),
        setTimeout(() => {
            throw e;
        }, 0);
}
var Me = !0;
function wr(e) {
    let t = Me;
    Me = !1;
    let n = e();
    return (Me = t), n;
}
function X(e, t, n = {}) {
    let r;
    return C(e, t)((i) => (r = i), n), r;
}
function C(...e) {
    return xr(...e);
}
var xr = Er;
function bo(e) {
    xr = e;
}
function Er(e, t) {
    let n = {};
    St(n, e);
    let r = [n, ...ne(e)],
        i = typeof t == "function" ? wo(r, t) : Eo(r, t, e);
    return yo.bind(null, e, t, i);
}
function wo(e, t) {
    return (n = () => {}, { scope: r = {}, params: i = [] } = {}) => {
        let s = t.apply(Ee([r, ...e]), i);
        $e(n, s);
    };
}
var at = {};
function xo(e, t) {
    if (at[e]) return at[e];
    let n = Object.getPrototypeOf(async function () {}).constructor,
        r =
            /^[\n\s]*if.*\(.*\)/.test(e.trim()) ||
            /^(let|const)\s/.test(e.trim())
                ? `(async()=>{ ${e} })()`
                : e,
        s = (() => {
            try {
                let o = new n(
                    ["__self", "scope"],
                    `with (scope) { __self.result = ${r} }; __self.finished = true; return __self.result;`
                );
                return (
                    Object.defineProperty(o, "name", {
                        value: `[Alpine] ${e}`,
                    }),
                    o
                );
            } catch (o) {
                return be(o, t, e), Promise.resolve();
            }
        })();
    return (at[e] = s), s;
}
function Eo(e, t, n) {
    let r = xo(t, n);
    return (i = () => {}, { scope: s = {}, params: o = [] } = {}) => {
        (r.result = void 0), (r.finished = !1);
        let a = Ee([s, ...e]);
        if (typeof r == "function") {
            let c = r(r, a).catch((u) => be(u, n, t));
            r.finished
                ? ($e(i, r.result, a, o, n), (r.result = void 0))
                : c
                      .then((u) => {
                          $e(i, u, a, o, n);
                      })
                      .catch((u) => be(u, n, t))
                      .finally(() => (r.result = void 0));
        }
    };
}
function $e(e, t, n, r, i) {
    if (Me && typeof t == "function") {
        let s = t.apply(n, r);
        s instanceof Promise
            ? s.then((o) => $e(e, o, n, r)).catch((o) => be(o, i, t))
            : e(s);
    } else
        typeof t == "object" && t instanceof Promise
            ? t.then((s) => e(s))
            : e(t);
}
var Wt = "x-";
function ce(e = "") {
    return Wt + e;
}
function So(e) {
    Wt = e;
}
var Ue = {};
function R(e, t) {
    return (
        (Ue[e] = t),
        {
            before(n) {
                if (!Ue[n]) {
                    console.warn(
                        String.raw`Cannot find directive \`${n}\`. \`${e}\` will use the default order of execution`
                    );
                    return;
                }
                const r = W.indexOf(n);
                W.splice(r >= 0 ? r : W.indexOf("DEFAULT"), 0, e);
            },
        }
    );
}
function Ao(e) {
    return Object.keys(Ue).includes(e);
}
function Vt(e, t, n) {
    if (((t = Array.from(t)), e._x_virtualDirectives)) {
        let s = Object.entries(e._x_virtualDirectives).map(([a, c]) => ({
                name: a,
                value: c,
            })),
            o = Sr(s);
        (s = s.map((a) =>
            o.find((c) => c.name === a.name)
                ? { name: `x-bind:${a.name}`, value: `"${a.value}"` }
                : a
        )),
            (t = t.concat(s));
    }
    let r = {};
    return t
        .map(Tr((s, o) => (r[s] = o)))
        .filter(Pr)
        .map(Ro(r, n))
        .sort(To)
        .map((s) => vo(e, s));
}
function Sr(e) {
    return Array.from(e)
        .map(Tr())
        .filter((t) => !Pr(t));
}
var At = !1,
    _e = new Map(),
    Ar = Symbol();
function Oo(e) {
    At = !0;
    let t = Symbol();
    (Ar = t), _e.set(t, []);
    let n = () => {
            for (; _e.get(t).length; ) _e.get(t).shift()();
            _e.delete(t);
        },
        r = () => {
            (At = !1), n();
        };
    e(n), r();
}
function Or(e) {
    let t = [],
        n = (a) => t.push(a),
        [r, i] = ao(e);
    return (
        t.push(i),
        [
            {
                Alpine: Se,
                effect: r,
                cleanup: n,
                evaluateLater: C.bind(C, e),
                evaluate: X.bind(X, e),
            },
            () => t.forEach((a) => a()),
        ]
    );
}
function vo(e, t) {
    let n = () => {},
        r = Ue[t.type] || n,
        [i, s] = Or(e);
    pr(e, t.original, s);
    let o = () => {
        e._x_ignore ||
            e._x_ignoreSelf ||
            (r.inline && r.inline(e, t, i),
            (r = r.bind(r, e, t, i)),
            At ? _e.get(Ar).push(r) : r());
    };
    return (o.runCleanups = s), o;
}
var vr =
        (e, t) =>
        ({ name: n, value: r }) => (
            n.startsWith(e) && (n = n.replace(e, t)), { name: n, value: r }
        ),
    Rr = (e) => e;
function Tr(e = () => {}) {
    return ({ name: t, value: n }) => {
        let { name: r, value: i } = Cr.reduce((s, o) => o(s), {
            name: t,
            value: n,
        });
        return r !== t && e(r, t), { name: r, value: i };
    };
}
var Cr = [];
function Xt(e) {
    Cr.push(e);
}
function Pr({ name: e }) {
    return Nr().test(e);
}
var Nr = () => new RegExp(`^${Wt}([^:^.]+)\\b`);
function Ro(e, t) {
    return ({ name: n, value: r }) => {
        let i = n.match(Nr()),
            s = n.match(/:([a-zA-Z0-9\-_:]+)/),
            o = n.match(/\.[^.\]]+(?=[^\]]*$)/g) || [],
            a = t || e[n] || n;
        return {
            type: i ? i[1] : null,
            value: s ? s[1] : null,
            modifiers: o.map((c) => c.replace(".", "")),
            expression: r,
            original: a,
        };
    };
}
var Ot = "DEFAULT",
    W = [
        "ignore",
        "ref",
        "data",
        "id",
        "anchor",
        "bind",
        "init",
        "for",
        "model",
        "modelable",
        "transition",
        "show",
        "if",
        Ot,
        "teleport",
    ];
function To(e, t) {
    let n = W.indexOf(e.type) === -1 ? Ot : e.type,
        r = W.indexOf(t.type) === -1 ? Ot : t.type;
    return W.indexOf(n) - W.indexOf(r);
}
function me(e, t, n = {}) {
    e.dispatchEvent(
        new CustomEvent(t, {
            detail: n,
            bubbles: !0,
            composed: !0,
            cancelable: !0,
        })
    );
}
function Q(e, t) {
    if (typeof ShadowRoot == "function" && e instanceof ShadowRoot) {
        Array.from(e.children).forEach((i) => Q(i, t));
        return;
    }
    let n = !1;
    if ((t(e, () => (n = !0)), n)) return;
    let r = e.firstElementChild;
    for (; r; ) Q(r, t), (r = r.nextElementSibling);
}
function L(e, ...t) {
    console.warn(`Alpine Warning: ${e}`, ...t);
}
var An = !1;
function Co() {
    An &&
        L(
            "Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."
        ),
        (An = !0),
        document.body ||
            L(
                "Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"
            ),
        me(document, "alpine:init"),
        me(document, "alpine:initializing"),
        zt(),
        co((t) => $(t, Q)),
        Ut((t) => le(t)),
        dr((t, n) => {
            Vt(t, n).forEach((r) => r());
        });
    let e = (t) => !Ge(t.parentElement, !0);
    Array.from(document.querySelectorAll(Mr().join(",")))
        .filter(e)
        .forEach((t) => {
            $(t);
        }),
        me(document, "alpine:initialized"),
        setTimeout(() => {
            Fo();
        });
}
var Gt = [],
    Lr = [];
function Fr() {
    return Gt.map((e) => e());
}
function Mr() {
    return Gt.concat(Lr).map((e) => e());
}
function jr(e) {
    Gt.push(e);
}
function Ir(e) {
    Lr.push(e);
}
function Ge(e, t = !1) {
    return ue(e, (n) => {
        if ((t ? Mr() : Fr()).some((i) => n.matches(i))) return !0;
    });
}
function ue(e, t) {
    if (e) {
        if (t(e)) return e;
        if ((e._x_teleportBack && (e = e._x_teleportBack), !!e.parentElement))
            return ue(e.parentElement, t);
    }
}
function Po(e) {
    return Fr().some((t) => e.matches(t));
}
var Dr = [];
function No(e) {
    Dr.push(e);
}
var Lo = 1;
function $(e, t = Q, n = () => {}) {
    ue(e, (r) => r._x_ignore) ||
        Oo(() => {
            t(e, (r, i) => {
                r._x_marker ||
                    (n(r, i),
                    Dr.forEach((s) => s(r, i)),
                    Vt(r, r.attributes).forEach((s) => s()),
                    r._x_ignore || (r._x_marker = Lo++),
                    r._x_ignore && i());
            });
        });
}
function le(e, t = Q) {
    t(e, (n) => {
        uo(n), hr(n), delete n._x_marker;
    });
}
function Fo() {
    [
        ["ui", "dialog", ["[x-dialog], [x-popover]"]],
        ["anchor", "anchor", ["[x-anchor]"]],
        ["sort", "sort", ["[x-sort]"]],
    ].forEach(([t, n, r]) => {
        Ao(n) ||
            r.some((i) => {
                if (document.querySelector(i))
                    return L(`found "${i}", but missing ${t} plugin`), !0;
            });
    });
}
var vt = [],
    Yt = !1;
function Zt(e = () => {}) {
    return (
        queueMicrotask(() => {
            Yt ||
                setTimeout(() => {
                    Rt();
                });
        }),
        new Promise((t) => {
            vt.push(() => {
                e(), t();
            });
        })
    );
}
function Rt() {
    for (Yt = !1; vt.length; ) vt.shift()();
}
function Mo() {
    Yt = !0;
}
function Qt(e, t) {
    return Array.isArray(t)
        ? On(e, t.join(" "))
        : typeof t == "object" && t !== null
        ? jo(e, t)
        : typeof t == "function"
        ? Qt(e, t())
        : On(e, t);
}
function On(e, t) {
    let n = (i) =>
            i
                .split(" ")
                .filter((s) => !e.classList.contains(s))
                .filter(Boolean),
        r = (i) => (
            e.classList.add(...i),
            () => {
                e.classList.remove(...i);
            }
        );
    return (t = t === !0 ? (t = "") : t || ""), r(n(t));
}
function jo(e, t) {
    let n = (a) => a.split(" ").filter(Boolean),
        r = Object.entries(t)
            .flatMap(([a, c]) => (c ? n(a) : !1))
            .filter(Boolean),
        i = Object.entries(t)
            .flatMap(([a, c]) => (c ? !1 : n(a)))
            .filter(Boolean),
        s = [],
        o = [];
    return (
        i.forEach((a) => {
            e.classList.contains(a) && (e.classList.remove(a), o.push(a));
        }),
        r.forEach((a) => {
            e.classList.contains(a) || (e.classList.add(a), s.push(a));
        }),
        () => {
            o.forEach((a) => e.classList.add(a)),
                s.forEach((a) => e.classList.remove(a));
        }
    );
}
function Ye(e, t) {
    return typeof t == "object" && t !== null ? Io(e, t) : Do(e, t);
}
function Io(e, t) {
    let n = {};
    return (
        Object.entries(t).forEach(([r, i]) => {
            (n[r] = e.style[r]),
                r.startsWith("--") || (r = Bo(r)),
                e.style.setProperty(r, i);
        }),
        setTimeout(() => {
            e.style.length === 0 && e.removeAttribute("style");
        }),
        () => {
            Ye(e, n);
        }
    );
}
function Do(e, t) {
    let n = e.getAttribute("style", t);
    return (
        e.setAttribute("style", t),
        () => {
            e.setAttribute("style", n || "");
        }
    );
}
function Bo(e) {
    return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function Tt(e, t = () => {}) {
    let n = !1;
    return function () {
        n ? t.apply(this, arguments) : ((n = !0), e.apply(this, arguments));
    };
}
R(
    "transition",
    (e, { value: t, modifiers: n, expression: r }, { evaluate: i }) => {
        typeof r == "function" && (r = i(r)),
            r !== !1 &&
                (!r || typeof r == "boolean" ? $o(e, n, t) : ko(e, r, t));
    }
);
function ko(e, t, n) {
    Br(e, Qt, ""),
        {
            enter: (i) => {
                e._x_transition.enter.during = i;
            },
            "enter-start": (i) => {
                e._x_transition.enter.start = i;
            },
            "enter-end": (i) => {
                e._x_transition.enter.end = i;
            },
            leave: (i) => {
                e._x_transition.leave.during = i;
            },
            "leave-start": (i) => {
                e._x_transition.leave.start = i;
            },
            "leave-end": (i) => {
                e._x_transition.leave.end = i;
            },
        }[n](t);
}
function $o(e, t, n) {
    Br(e, Ye);
    let r = !t.includes("in") && !t.includes("out") && !n,
        i = r || t.includes("in") || ["enter"].includes(n),
        s = r || t.includes("out") || ["leave"].includes(n);
    t.includes("in") && !r && (t = t.filter((m, b) => b < t.indexOf("out"))),
        t.includes("out") &&
            !r &&
            (t = t.filter((m, b) => b > t.indexOf("out")));
    let o = !t.includes("opacity") && !t.includes("scale"),
        a = o || t.includes("opacity"),
        c = o || t.includes("scale"),
        u = a ? 0 : 1,
        l = c ? pe(t, "scale", 95) / 100 : 1,
        p = pe(t, "delay", 0) / 1e3,
        _ = pe(t, "origin", "center"),
        w = "opacity, transform",
        h = pe(t, "duration", 150) / 1e3,
        g = pe(t, "duration", 75) / 1e3,
        d = "cubic-bezier(0.4, 0.0, 0.2, 1)";
    i &&
        ((e._x_transition.enter.during = {
            transformOrigin: _,
            transitionDelay: `${p}s`,
            transitionProperty: w,
            transitionDuration: `${h}s`,
            transitionTimingFunction: d,
        }),
        (e._x_transition.enter.start = {
            opacity: u,
            transform: `scale(${l})`,
        }),
        (e._x_transition.enter.end = { opacity: 1, transform: "scale(1)" })),
        s &&
            ((e._x_transition.leave.during = {
                transformOrigin: _,
                transitionDelay: `${p}s`,
                transitionProperty: w,
                transitionDuration: `${g}s`,
                transitionTimingFunction: d,
            }),
            (e._x_transition.leave.start = {
                opacity: 1,
                transform: "scale(1)",
            }),
            (e._x_transition.leave.end = {
                opacity: u,
                transform: `scale(${l})`,
            }));
}
function Br(e, t, n = {}) {
    e._x_transition ||
        (e._x_transition = {
            enter: { during: n, start: n, end: n },
            leave: { during: n, start: n, end: n },
            in(r = () => {}, i = () => {}) {
                Ct(
                    e,
                    t,
                    {
                        during: this.enter.during,
                        start: this.enter.start,
                        end: this.enter.end,
                    },
                    r,
                    i
                );
            },
            out(r = () => {}, i = () => {}) {
                Ct(
                    e,
                    t,
                    {
                        during: this.leave.during,
                        start: this.leave.start,
                        end: this.leave.end,
                    },
                    r,
                    i
                );
            },
        });
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function (
    e,
    t,
    n,
    r
) {
    const i =
        document.visibilityState === "visible"
            ? requestAnimationFrame
            : setTimeout;
    let s = () => i(n);
    if (t) {
        e._x_transition && (e._x_transition.enter || e._x_transition.leave)
            ? e._x_transition.enter &&
              (Object.entries(e._x_transition.enter.during).length ||
                  Object.entries(e._x_transition.enter.start).length ||
                  Object.entries(e._x_transition.enter.end).length)
                ? e._x_transition.in(n)
                : s()
            : e._x_transition
            ? e._x_transition.in(n)
            : s();
        return;
    }
    (e._x_hidePromise = e._x_transition
        ? new Promise((o, a) => {
              e._x_transition.out(
                  () => {},
                  () => o(r)
              ),
                  e._x_transitioning &&
                      e._x_transitioning.beforeCancel(() =>
                          a({ isFromCancelledTransition: !0 })
                      );
          })
        : Promise.resolve(r)),
        queueMicrotask(() => {
            let o = kr(e);
            o
                ? (o._x_hideChildren || (o._x_hideChildren = []),
                  o._x_hideChildren.push(e))
                : i(() => {
                      let a = (c) => {
                          let u = Promise.all([
                              c._x_hidePromise,
                              ...(c._x_hideChildren || []).map(a),
                          ]).then(([l]) => (l == null ? void 0 : l()));
                          return (
                              delete c._x_hidePromise,
                              delete c._x_hideChildren,
                              u
                          );
                      };
                      a(e).catch((c) => {
                          if (!c.isFromCancelledTransition) throw c;
                      });
                  });
        });
};
function kr(e) {
    let t = e.parentNode;
    if (t) return t._x_hidePromise ? t : kr(t);
}
function Ct(
    e,
    t,
    { during: n, start: r, end: i } = {},
    s = () => {},
    o = () => {}
) {
    if (
        (e._x_transitioning && e._x_transitioning.cancel(),
        Object.keys(n).length === 0 &&
            Object.keys(r).length === 0 &&
            Object.keys(i).length === 0)
    ) {
        s(), o();
        return;
    }
    let a, c, u;
    Uo(e, {
        start() {
            a = t(e, r);
        },
        during() {
            c = t(e, n);
        },
        before: s,
        end() {
            a(), (u = t(e, i));
        },
        after: o,
        cleanup() {
            c(), u();
        },
    });
}
function Uo(e, t) {
    let n,
        r,
        i,
        s = Tt(() => {
            S(() => {
                (n = !0),
                    r || t.before(),
                    i || (t.end(), Rt()),
                    t.after(),
                    e.isConnected && t.cleanup(),
                    delete e._x_transitioning;
            });
        });
    (e._x_transitioning = {
        beforeCancels: [],
        beforeCancel(o) {
            this.beforeCancels.push(o);
        },
        cancel: Tt(function () {
            for (; this.beforeCancels.length; ) this.beforeCancels.shift()();
            s();
        }),
        finish: s,
    }),
        S(() => {
            t.start(), t.during();
        }),
        Mo(),
        requestAnimationFrame(() => {
            if (n) return;
            let o =
                    Number(
                        getComputedStyle(e)
                            .transitionDuration.replace(/,.*/, "")
                            .replace("s", "")
                    ) * 1e3,
                a =
                    Number(
                        getComputedStyle(e)
                            .transitionDelay.replace(/,.*/, "")
                            .replace("s", "")
                    ) * 1e3;
            o === 0 &&
                (o =
                    Number(
                        getComputedStyle(e).animationDuration.replace("s", "")
                    ) * 1e3),
                S(() => {
                    t.before();
                }),
                (r = !0),
                requestAnimationFrame(() => {
                    n ||
                        (S(() => {
                            t.end();
                        }),
                        Rt(),
                        setTimeout(e._x_transitioning.finish, o + a),
                        (i = !0));
                });
        });
}
function pe(e, t, n) {
    if (e.indexOf(t) === -1) return n;
    const r = e[e.indexOf(t) + 1];
    if (!r || (t === "scale" && isNaN(r))) return n;
    if (t === "duration" || t === "delay") {
        let i = r.match(/([0-9]+)ms/);
        if (i) return i[1];
    }
    return t === "origin" &&
        ["top", "right", "left", "center", "bottom"].includes(
            e[e.indexOf(t) + 2]
        )
        ? [r, e[e.indexOf(t) + 2]].join(" ")
        : r;
}
var q = !1;
function z(e, t = () => {}) {
    return (...n) => (q ? t(...n) : e(...n));
}
function qo(e) {
    return (...t) => q && e(...t);
}
var $r = [];
function Ze(e) {
    $r.push(e);
}
function Ho(e, t) {
    $r.forEach((n) => n(e, t)),
        (q = !0),
        Ur(() => {
            $(t, (n, r) => {
                r(n, () => {});
            });
        }),
        (q = !1);
}
var Pt = !1;
function zo(e, t) {
    t._x_dataStack || (t._x_dataStack = e._x_dataStack),
        (q = !0),
        (Pt = !0),
        Ur(() => {
            Ko(t);
        }),
        (q = !1),
        (Pt = !1);
}
function Ko(e) {
    let t = !1;
    $(e, (r, i) => {
        Q(r, (s, o) => {
            if (t && Po(s)) return o();
            (t = !0), i(s, o);
        });
    });
}
function Ur(e) {
    let t = ee;
    Sn((n, r) => {
        let i = t(n);
        return ae(i), () => {};
    }),
        e(),
        Sn(t);
}
function qr(e, t, n, r = []) {
    switch (
        (e._x_bindings || (e._x_bindings = oe({})),
        (e._x_bindings[t] = n),
        (t = r.includes("camel") ? Qo(t) : t),
        t)
    ) {
        case "value":
            Jo(e, n);
            break;
        case "style":
            Vo(e, n);
            break;
        case "class":
            Wo(e, n);
            break;
        case "selected":
        case "checked":
            Xo(e, t, n);
            break;
        default:
            Hr(e, t, n);
            break;
    }
}
function Jo(e, t) {
    if (Jr(e))
        e.attributes.value === void 0 && (e.value = t),
            window.fromModel &&
                (typeof t == "boolean"
                    ? (e.checked = je(e.value) === t)
                    : (e.checked = vn(e.value, t)));
    else if (en(e))
        Number.isInteger(t)
            ? (e.value = t)
            : !Array.isArray(t) &&
              typeof t != "boolean" &&
              ![null, void 0].includes(t)
            ? (e.value = String(t))
            : Array.isArray(t)
            ? (e.checked = t.some((n) => vn(n, e.value)))
            : (e.checked = !!t);
    else if (e.tagName === "SELECT") Zo(e, t);
    else {
        if (e.value === t) return;
        e.value = t === void 0 ? "" : t;
    }
}
function Wo(e, t) {
    e._x_undoAddedClasses && e._x_undoAddedClasses(),
        (e._x_undoAddedClasses = Qt(e, t));
}
function Vo(e, t) {
    e._x_undoAddedStyles && e._x_undoAddedStyles(),
        (e._x_undoAddedStyles = Ye(e, t));
}
function Xo(e, t, n) {
    Hr(e, t, n), Yo(e, t, n);
}
function Hr(e, t, n) {
    [null, void 0, !1].includes(n) && ta(t)
        ? e.removeAttribute(t)
        : (zr(t) && (n = t), Go(e, t, n));
}
function Go(e, t, n) {
    e.getAttribute(t) != n && e.setAttribute(t, n);
}
function Yo(e, t, n) {
    e[t] !== n && (e[t] = n);
}
function Zo(e, t) {
    const n = [].concat(t).map((r) => r + "");
    Array.from(e.options).forEach((r) => {
        r.selected = n.includes(r.value);
    });
}
function Qo(e) {
    return e.toLowerCase().replace(/-(\w)/g, (t, n) => n.toUpperCase());
}
function vn(e, t) {
    return e == t;
}
function je(e) {
    return [1, "1", "true", "on", "yes", !0].includes(e)
        ? !0
        : [0, "0", "false", "off", "no", !1].includes(e)
        ? !1
        : e
        ? !!e
        : null;
}
var ea = new Set([
    "allowfullscreen",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "defer",
    "disabled",
    "formnovalidate",
    "inert",
    "ismap",
    "itemscope",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "selected",
    "shadowrootclonable",
    "shadowrootdelegatesfocus",
    "shadowrootserializable",
]);
function zr(e) {
    return ea.has(e);
}
function ta(e) {
    return ![
        "aria-pressed",
        "aria-checked",
        "aria-expanded",
        "aria-selected",
    ].includes(e);
}
function na(e, t, n) {
    return e._x_bindings && e._x_bindings[t] !== void 0
        ? e._x_bindings[t]
        : Kr(e, t, n);
}
function ra(e, t, n, r = !0) {
    if (e._x_bindings && e._x_bindings[t] !== void 0) return e._x_bindings[t];
    if (e._x_inlineBindings && e._x_inlineBindings[t] !== void 0) {
        let i = e._x_inlineBindings[t];
        return (i.extract = r), wr(() => X(e, i.expression));
    }
    return Kr(e, t, n);
}
function Kr(e, t, n) {
    let r = e.getAttribute(t);
    return r === null
        ? typeof n == "function"
            ? n()
            : n
        : r === ""
        ? !0
        : zr(t)
        ? !![t, "true"].includes(r)
        : r;
}
function en(e) {
    return (
        e.type === "checkbox" ||
        e.localName === "ui-checkbox" ||
        e.localName === "ui-switch"
    );
}
function Jr(e) {
    return e.type === "radio" || e.localName === "ui-radio";
}
function Wr(e, t) {
    var n;
    return function () {
        var r = this,
            i = arguments,
            s = function () {
                (n = null), e.apply(r, i);
            };
        clearTimeout(n), (n = setTimeout(s, t));
    };
}
function Vr(e, t) {
    let n;
    return function () {
        let r = this,
            i = arguments;
        n || (e.apply(r, i), (n = !0), setTimeout(() => (n = !1), t));
    };
}
function Xr({ get: e, set: t }, { get: n, set: r }) {
    let i = !0,
        s,
        o = ee(() => {
            let a = e(),
                c = n();
            if (i) r(ct(a)), (i = !1);
            else {
                let u = JSON.stringify(a),
                    l = JSON.stringify(c);
                u !== s ? r(ct(a)) : u !== l && t(ct(c));
            }
            (s = JSON.stringify(e())), JSON.stringify(n());
        });
    return () => {
        ae(o);
    };
}
function ct(e) {
    return typeof e == "object" ? JSON.parse(JSON.stringify(e)) : e;
}
function ia(e) {
    (Array.isArray(e) ? e : [e]).forEach((n) => n(Se));
}
var K = {},
    Rn = !1;
function sa(e, t) {
    if ((Rn || ((K = oe(K)), (Rn = !0)), t === void 0)) return K[e];
    (K[e] = t),
        gr(K[e]),
        typeof t == "object" &&
            t !== null &&
            t.hasOwnProperty("init") &&
            typeof t.init == "function" &&
            K[e].init();
}
function oa() {
    return K;
}
var Gr = {};
function aa(e, t) {
    let n = typeof t != "function" ? () => t : t;
    return e instanceof Element ? Yr(e, n()) : ((Gr[e] = n), () => {});
}
function ca(e) {
    return (
        Object.entries(Gr).forEach(([t, n]) => {
            Object.defineProperty(e, t, {
                get() {
                    return (...r) => n(...r);
                },
            });
        }),
        e
    );
}
function Yr(e, t, n) {
    let r = [];
    for (; r.length; ) r.pop()();
    let i = Object.entries(t).map(([o, a]) => ({ name: o, value: a })),
        s = Sr(i);
    return (
        (i = i.map((o) =>
            s.find((a) => a.name === o.name)
                ? { name: `x-bind:${o.name}`, value: `"${o.value}"` }
                : o
        )),
        Vt(e, i, n).map((o) => {
            r.push(o.runCleanups), o();
        }),
        () => {
            for (; r.length; ) r.pop()();
        }
    );
}
var Zr = {};
function ua(e, t) {
    Zr[e] = t;
}
function la(e, t) {
    return (
        Object.entries(Zr).forEach(([n, r]) => {
            Object.defineProperty(e, n, {
                get() {
                    return (...i) => r.bind(t)(...i);
                },
                enumerable: !1,
            });
        }),
        e
    );
}
var fa = {
        get reactive() {
            return oe;
        },
        get release() {
            return ae;
        },
        get effect() {
            return ee;
        },
        get raw() {
            return ar;
        },
        version: "3.14.8",
        flushAndStopDeferringMutations: po,
        dontAutoEvaluateFunctions: wr,
        disableEffectScheduling: so,
        startObservingMutations: zt,
        stopObservingMutations: _r,
        setReactivityEngine: oo,
        onAttributeRemoved: pr,
        onAttributesAdded: dr,
        closestDataStack: ne,
        skipDuringClone: z,
        onlyDuringClone: qo,
        addRootSelector: jr,
        addInitSelector: Ir,
        interceptClone: Ze,
        addScopeToNode: xe,
        deferMutations: fo,
        mapAttributes: Xt,
        evaluateLater: C,
        interceptInit: No,
        setEvaluator: bo,
        mergeProxies: Ee,
        extractProp: ra,
        findClosest: ue,
        onElRemoved: Ut,
        closestRoot: Ge,
        destroyTree: le,
        interceptor: yr,
        transition: Ct,
        setStyles: Ye,
        mutateDom: S,
        directive: R,
        entangle: Xr,
        throttle: Vr,
        debounce: Wr,
        evaluate: X,
        initTree: $,
        nextTick: Zt,
        prefixed: ce,
        prefix: So,
        plugin: ia,
        magic: I,
        store: sa,
        start: Co,
        clone: zo,
        cloneNode: Ho,
        bound: na,
        $data: mr,
        watch: cr,
        walk: Q,
        data: ua,
        bind: aa,
    },
    Se = fa;
function da(e, t) {
    const n = Object.create(null),
        r = e.split(",");
    for (let i = 0; i < r.length; i++) n[r[i]] = !0;
    return t ? (i) => !!n[i.toLowerCase()] : (i) => !!n[i];
}
var pa = Object.freeze({}),
    ha = Object.prototype.hasOwnProperty,
    Qe = (e, t) => ha.call(e, t),
    G = Array.isArray,
    ge = (e) => Qr(e) === "[object Map]",
    _a = (e) => typeof e == "string",
    tn = (e) => typeof e == "symbol",
    et = (e) => e !== null && typeof e == "object",
    ma = Object.prototype.toString,
    Qr = (e) => ma.call(e),
    ei = (e) => Qr(e).slice(8, -1),
    nn = (e) =>
        _a(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    ga = (e) => {
        const t = Object.create(null);
        return (n) => t[n] || (t[n] = e(n));
    },
    ya = ga((e) => e.charAt(0).toUpperCase() + e.slice(1)),
    ti = (e, t) => e !== t && (e === e || t === t),
    Nt = new WeakMap(),
    he = [],
    k,
    Y = Symbol("iterate"),
    Lt = Symbol("Map key iterate");
function ba(e) {
    return e && e._isEffect === !0;
}
function wa(e, t = pa) {
    ba(e) && (e = e.raw);
    const n = Sa(e, t);
    return t.lazy || n(), n;
}
function xa(e) {
    e.active &&
        (ni(e), e.options.onStop && e.options.onStop(), (e.active = !1));
}
var Ea = 0;
function Sa(e, t) {
    const n = function () {
        if (!n.active) return e();
        if (!he.includes(n)) {
            ni(n);
            try {
                return Oa(), he.push(n), (k = n), e();
            } finally {
                he.pop(), ri(), (k = he[he.length - 1]);
            }
        }
    };
    return (
        (n.id = Ea++),
        (n.allowRecurse = !!t.allowRecurse),
        (n._isEffect = !0),
        (n.active = !0),
        (n.raw = e),
        (n.deps = []),
        (n.options = t),
        n
    );
}
function ni(e) {
    const { deps: t } = e;
    if (t.length) {
        for (let n = 0; n < t.length; n++) t[n].delete(e);
        t.length = 0;
    }
}
var re = !0,
    rn = [];
function Aa() {
    rn.push(re), (re = !1);
}
function Oa() {
    rn.push(re), (re = !0);
}
function ri() {
    const e = rn.pop();
    re = e === void 0 ? !0 : e;
}
function M(e, t, n) {
    if (!re || k === void 0) return;
    let r = Nt.get(e);
    r || Nt.set(e, (r = new Map()));
    let i = r.get(n);
    i || r.set(n, (i = new Set())),
        i.has(k) ||
            (i.add(k),
            k.deps.push(i),
            k.options.onTrack &&
                k.options.onTrack({ effect: k, target: e, type: t, key: n }));
}
function H(e, t, n, r, i, s) {
    const o = Nt.get(e);
    if (!o) return;
    const a = new Set(),
        c = (l) => {
            l &&
                l.forEach((p) => {
                    (p !== k || p.allowRecurse) && a.add(p);
                });
        };
    if (t === "clear") o.forEach(c);
    else if (n === "length" && G(e))
        o.forEach((l, p) => {
            (p === "length" || p >= r) && c(l);
        });
    else
        switch ((n !== void 0 && c(o.get(n)), t)) {
            case "add":
                G(e)
                    ? nn(n) && c(o.get("length"))
                    : (c(o.get(Y)), ge(e) && c(o.get(Lt)));
                break;
            case "delete":
                G(e) || (c(o.get(Y)), ge(e) && c(o.get(Lt)));
                break;
            case "set":
                ge(e) && c(o.get(Y));
                break;
        }
    const u = (l) => {
        l.options.onTrigger &&
            l.options.onTrigger({
                effect: l,
                target: e,
                key: n,
                type: t,
                newValue: r,
                oldValue: i,
                oldTarget: s,
            }),
            l.options.scheduler ? l.options.scheduler(l) : l();
    };
    a.forEach(u);
}
var va = da("__proto__,__v_isRef,__isVue"),
    ii = new Set(
        Object.getOwnPropertyNames(Symbol)
            .map((e) => Symbol[e])
            .filter(tn)
    ),
    Ra = si(),
    Ta = si(!0),
    Tn = Ca();
function Ca() {
    const e = {};
    return (
        ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
            e[t] = function (...n) {
                const r = E(this);
                for (let s = 0, o = this.length; s < o; s++)
                    M(r, "get", s + "");
                const i = r[t](...n);
                return i === -1 || i === !1 ? r[t](...n.map(E)) : i;
            };
        }),
        ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
            e[t] = function (...n) {
                Aa();
                const r = E(this)[t].apply(this, n);
                return ri(), r;
            };
        }),
        e
    );
}
function si(e = !1, t = !1) {
    return function (r, i, s) {
        if (i === "__v_isReactive") return !e;
        if (i === "__v_isReadonly") return e;
        if (i === "__v_raw" && s === (e ? (t ? Ka : ui) : t ? za : ci).get(r))
            return r;
        const o = G(r);
        if (!e && o && Qe(Tn, i)) return Reflect.get(Tn, i, s);
        const a = Reflect.get(r, i, s);
        return (tn(i) ? ii.has(i) : va(i)) || (e || M(r, "get", i), t)
            ? a
            : Ft(a)
            ? !o || !nn(i)
                ? a.value
                : a
            : et(a)
            ? e
                ? li(a)
                : cn(a)
            : a;
    };
}
var Pa = Na();
function Na(e = !1) {
    return function (n, r, i, s) {
        let o = n[r];
        if (!e && ((i = E(i)), (o = E(o)), !G(n) && Ft(o) && !Ft(i)))
            return (o.value = i), !0;
        const a = G(n) && nn(r) ? Number(r) < n.length : Qe(n, r),
            c = Reflect.set(n, r, i, s);
        return (
            n === E(s) &&
                (a ? ti(i, o) && H(n, "set", r, i, o) : H(n, "add", r, i)),
            c
        );
    };
}
function La(e, t) {
    const n = Qe(e, t),
        r = e[t],
        i = Reflect.deleteProperty(e, t);
    return i && n && H(e, "delete", t, void 0, r), i;
}
function Fa(e, t) {
    const n = Reflect.has(e, t);
    return (!tn(t) || !ii.has(t)) && M(e, "has", t), n;
}
function Ma(e) {
    return M(e, "iterate", G(e) ? "length" : Y), Reflect.ownKeys(e);
}
var ja = { get: Ra, set: Pa, deleteProperty: La, has: Fa, ownKeys: Ma },
    Ia = {
        get: Ta,
        set(e, t) {
            return (
                console.warn(
                    `Set operation on key "${String(
                        t
                    )}" failed: target is readonly.`,
                    e
                ),
                !0
            );
        },
        deleteProperty(e, t) {
            return (
                console.warn(
                    `Delete operation on key "${String(
                        t
                    )}" failed: target is readonly.`,
                    e
                ),
                !0
            );
        },
    },
    sn = (e) => (et(e) ? cn(e) : e),
    on = (e) => (et(e) ? li(e) : e),
    an = (e) => e,
    tt = (e) => Reflect.getPrototypeOf(e);
function Oe(e, t, n = !1, r = !1) {
    e = e.__v_raw;
    const i = E(e),
        s = E(t);
    t !== s && !n && M(i, "get", t), !n && M(i, "get", s);
    const { has: o } = tt(i),
        a = r ? an : n ? on : sn;
    if (o.call(i, t)) return a(e.get(t));
    if (o.call(i, s)) return a(e.get(s));
    e !== i && e.get(t);
}
function ve(e, t = !1) {
    const n = this.__v_raw,
        r = E(n),
        i = E(e);
    return (
        e !== i && !t && M(r, "has", e),
        !t && M(r, "has", i),
        e === i ? n.has(e) : n.has(e) || n.has(i)
    );
}
function Re(e, t = !1) {
    return (
        (e = e.__v_raw), !t && M(E(e), "iterate", Y), Reflect.get(e, "size", e)
    );
}
function Cn(e) {
    e = E(e);
    const t = E(this);
    return tt(t).has.call(t, e) || (t.add(e), H(t, "add", e, e)), this;
}
function Pn(e, t) {
    t = E(t);
    const n = E(this),
        { has: r, get: i } = tt(n);
    let s = r.call(n, e);
    s ? ai(n, r, e) : ((e = E(e)), (s = r.call(n, e)));
    const o = i.call(n, e);
    return (
        n.set(e, t),
        s ? ti(t, o) && H(n, "set", e, t, o) : H(n, "add", e, t),
        this
    );
}
function Nn(e) {
    const t = E(this),
        { has: n, get: r } = tt(t);
    let i = n.call(t, e);
    i ? ai(t, n, e) : ((e = E(e)), (i = n.call(t, e)));
    const s = r ? r.call(t, e) : void 0,
        o = t.delete(e);
    return i && H(t, "delete", e, void 0, s), o;
}
function Ln() {
    const e = E(this),
        t = e.size !== 0,
        n = ge(e) ? new Map(e) : new Set(e),
        r = e.clear();
    return t && H(e, "clear", void 0, void 0, n), r;
}
function Te(e, t) {
    return function (r, i) {
        const s = this,
            o = s.__v_raw,
            a = E(o),
            c = t ? an : e ? on : sn;
        return (
            !e && M(a, "iterate", Y),
            o.forEach((u, l) => r.call(i, c(u), c(l), s))
        );
    };
}
function Ce(e, t, n) {
    return function (...r) {
        const i = this.__v_raw,
            s = E(i),
            o = ge(s),
            a = e === "entries" || (e === Symbol.iterator && o),
            c = e === "keys" && o,
            u = i[e](...r),
            l = n ? an : t ? on : sn;
        return (
            !t && M(s, "iterate", c ? Lt : Y),
            {
                next() {
                    const { value: p, done: _ } = u.next();
                    return _
                        ? { value: p, done: _ }
                        : { value: a ? [l(p[0]), l(p[1])] : l(p), done: _ };
                },
                [Symbol.iterator]() {
                    return this;
                },
            }
        );
    };
}
function U(e) {
    return function (...t) {
        {
            const n = t[0] ? `on key "${t[0]}" ` : "";
            console.warn(
                `${ya(e)} operation ${n}failed: target is readonly.`,
                E(this)
            );
        }
        return e === "delete" ? !1 : this;
    };
}
function Da() {
    const e = {
            get(s) {
                return Oe(this, s);
            },
            get size() {
                return Re(this);
            },
            has: ve,
            add: Cn,
            set: Pn,
            delete: Nn,
            clear: Ln,
            forEach: Te(!1, !1),
        },
        t = {
            get(s) {
                return Oe(this, s, !1, !0);
            },
            get size() {
                return Re(this);
            },
            has: ve,
            add: Cn,
            set: Pn,
            delete: Nn,
            clear: Ln,
            forEach: Te(!1, !0),
        },
        n = {
            get(s) {
                return Oe(this, s, !0);
            },
            get size() {
                return Re(this, !0);
            },
            has(s) {
                return ve.call(this, s, !0);
            },
            add: U("add"),
            set: U("set"),
            delete: U("delete"),
            clear: U("clear"),
            forEach: Te(!0, !1),
        },
        r = {
            get(s) {
                return Oe(this, s, !0, !0);
            },
            get size() {
                return Re(this, !0);
            },
            has(s) {
                return ve.call(this, s, !0);
            },
            add: U("add"),
            set: U("set"),
            delete: U("delete"),
            clear: U("clear"),
            forEach: Te(!0, !0),
        };
    return (
        ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
            (e[s] = Ce(s, !1, !1)),
                (n[s] = Ce(s, !0, !1)),
                (t[s] = Ce(s, !1, !0)),
                (r[s] = Ce(s, !0, !0));
        }),
        [e, n, t, r]
    );
}
var [Ba, ka, $a, Ua] = Da();
function oi(e, t) {
    const n = t ? (e ? Ua : $a) : e ? ka : Ba;
    return (r, i, s) =>
        i === "__v_isReactive"
            ? !e
            : i === "__v_isReadonly"
            ? e
            : i === "__v_raw"
            ? r
            : Reflect.get(Qe(n, i) && i in r ? n : r, i, s);
}
var qa = { get: oi(!1, !1) },
    Ha = { get: oi(!0, !1) };
function ai(e, t, n) {
    const r = E(n);
    if (r !== n && t.call(e, r)) {
        const i = ei(e);
        console.warn(
            `Reactive ${i} contains both the raw and reactive versions of the same object${
                i === "Map" ? " as keys" : ""
            }, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
        );
    }
}
var ci = new WeakMap(),
    za = new WeakMap(),
    ui = new WeakMap(),
    Ka = new WeakMap();
function Ja(e) {
    switch (e) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0;
    }
}
function Wa(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Ja(ei(e));
}
function cn(e) {
    return e && e.__v_isReadonly ? e : fi(e, !1, ja, qa, ci);
}
function li(e) {
    return fi(e, !0, Ia, Ha, ui);
}
function fi(e, t, n, r, i) {
    if (!et(e))
        return console.warn(`value cannot be made reactive: ${String(e)}`), e;
    if (e.__v_raw && !(t && e.__v_isReactive)) return e;
    const s = i.get(e);
    if (s) return s;
    const o = Wa(e);
    if (o === 0) return e;
    const a = new Proxy(e, o === 2 ? r : n);
    return i.set(e, a), a;
}
function E(e) {
    return (e && E(e.__v_raw)) || e;
}
function Ft(e) {
    return !!(e && e.__v_isRef === !0);
}
I("nextTick", () => Zt);
I("dispatch", (e) => me.bind(me, e));
I("watch", (e, { evaluateLater: t, cleanup: n }) => (r, i) => {
    let s = t(r),
        a = cr(() => {
            let c;
            return s((u) => (c = u)), c;
        }, i);
    n(a);
});
I("store", oa);
I("data", (e) => mr(e));
I("root", (e) => Ge(e));
I(
    "refs",
    (e) => (e._x_refs_proxy || (e._x_refs_proxy = Ee(Va(e))), e._x_refs_proxy)
);
function Va(e) {
    let t = [];
    return (
        ue(e, (n) => {
            n._x_refs && t.push(n._x_refs);
        }),
        t
    );
}
var ut = {};
function di(e) {
    return ut[e] || (ut[e] = 0), ++ut[e];
}
function Xa(e, t) {
    return ue(e, (n) => {
        if (n._x_ids && n._x_ids[t]) return !0;
    });
}
function Ga(e, t) {
    e._x_ids || (e._x_ids = {}), e._x_ids[t] || (e._x_ids[t] = di(t));
}
I("id", (e, { cleanup: t }) => (n, r = null) => {
    let i = `${n}${r ? `-${r}` : ""}`;
    return Ya(e, i, t, () => {
        let s = Xa(e, n),
            o = s ? s._x_ids[n] : di(n);
        return r ? `${n}-${o}-${r}` : `${n}-${o}`;
    });
});
Ze((e, t) => {
    e._x_id && (t._x_id = e._x_id);
});
function Ya(e, t, n, r) {
    if ((e._x_id || (e._x_id = {}), e._x_id[t])) return e._x_id[t];
    let i = r();
    return (
        (e._x_id[t] = i),
        n(() => {
            delete e._x_id[t];
        }),
        i
    );
}
I("el", (e) => e);
pi("Focus", "focus", "focus");
pi("Persist", "persist", "persist");
function pi(e, t, n) {
    I(t, (r) =>
        L(
            `You can't use [$${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`,
            r
        )
    );
}
R(
    "modelable",
    (e, { expression: t }, { effect: n, evaluateLater: r, cleanup: i }) => {
        let s = r(t),
            o = () => {
                let l;
                return s((p) => (l = p)), l;
            },
            a = r(`${t} = __placeholder`),
            c = (l) => a(() => {}, { scope: { __placeholder: l } }),
            u = o();
        c(u),
            queueMicrotask(() => {
                if (!e._x_model) return;
                e._x_removeModelListeners.default();
                let l = e._x_model.get,
                    p = e._x_model.set,
                    _ = Xr(
                        {
                            get() {
                                return l();
                            },
                            set(w) {
                                p(w);
                            },
                        },
                        {
                            get() {
                                return o();
                            },
                            set(w) {
                                c(w);
                            },
                        }
                    );
                i(_);
            });
    }
);
R("teleport", (e, { modifiers: t, expression: n }, { cleanup: r }) => {
    e.tagName.toLowerCase() !== "template" &&
        L("x-teleport can only be used on a <template> tag", e);
    let i = Fn(n),
        s = e.content.cloneNode(!0).firstElementChild;
    (e._x_teleport = s),
        (s._x_teleportBack = e),
        e.setAttribute("data-teleport-template", !0),
        s.setAttribute("data-teleport-target", !0),
        e._x_forwardEvents &&
            e._x_forwardEvents.forEach((a) => {
                s.addEventListener(a, (c) => {
                    c.stopPropagation(),
                        e.dispatchEvent(new c.constructor(c.type, c));
                });
            }),
        xe(s, {}, e);
    let o = (a, c, u) => {
        u.includes("prepend")
            ? c.parentNode.insertBefore(a, c)
            : u.includes("append")
            ? c.parentNode.insertBefore(a, c.nextSibling)
            : c.appendChild(a);
    };
    S(() => {
        o(s, i, t),
            z(() => {
                $(s);
            })();
    }),
        (e._x_teleportPutBack = () => {
            let a = Fn(n);
            S(() => {
                o(e._x_teleport, a, t);
            });
        }),
        r(() =>
            S(() => {
                s.remove(), le(s);
            })
        );
});
var Za = document.createElement("div");
function Fn(e) {
    let t = z(
        () => document.querySelector(e),
        () => Za
    )();
    return t || L(`Cannot find x-teleport element for selector: "${e}"`), t;
}
var hi = () => {};
hi.inline = (e, { modifiers: t }, { cleanup: n }) => {
    t.includes("self") ? (e._x_ignoreSelf = !0) : (e._x_ignore = !0),
        n(() => {
            t.includes("self") ? delete e._x_ignoreSelf : delete e._x_ignore;
        });
};
R("ignore", hi);
R(
    "effect",
    z((e, { expression: t }, { effect: n }) => {
        n(C(e, t));
    })
);
function Mt(e, t, n, r) {
    let i = e,
        s = (c) => r(c),
        o = {},
        a = (c, u) => (l) => u(c, l);
    if (
        (n.includes("dot") && (t = Qa(t)),
        n.includes("camel") && (t = ec(t)),
        n.includes("passive") && (o.passive = !0),
        n.includes("capture") && (o.capture = !0),
        n.includes("window") && (i = window),
        n.includes("document") && (i = document),
        n.includes("debounce"))
    ) {
        let c = n[n.indexOf("debounce") + 1] || "invalid-wait",
            u = qe(c.split("ms")[0]) ? Number(c.split("ms")[0]) : 250;
        s = Wr(s, u);
    }
    if (n.includes("throttle")) {
        let c = n[n.indexOf("throttle") + 1] || "invalid-wait",
            u = qe(c.split("ms")[0]) ? Number(c.split("ms")[0]) : 250;
        s = Vr(s, u);
    }
    return (
        n.includes("prevent") &&
            (s = a(s, (c, u) => {
                u.preventDefault(), c(u);
            })),
        n.includes("stop") &&
            (s = a(s, (c, u) => {
                u.stopPropagation(), c(u);
            })),
        n.includes("once") &&
            (s = a(s, (c, u) => {
                c(u), i.removeEventListener(t, s, o);
            })),
        (n.includes("away") || n.includes("outside")) &&
            ((i = document),
            (s = a(s, (c, u) => {
                e.contains(u.target) ||
                    (u.target.isConnected !== !1 &&
                        ((e.offsetWidth < 1 && e.offsetHeight < 1) ||
                            (e._x_isShown !== !1 && c(u))));
            }))),
        n.includes("self") &&
            (s = a(s, (c, u) => {
                u.target === e && c(u);
            })),
        (nc(t) || _i(t)) &&
            (s = a(s, (c, u) => {
                rc(u, n) || c(u);
            })),
        i.addEventListener(t, s, o),
        () => {
            i.removeEventListener(t, s, o);
        }
    );
}
function Qa(e) {
    return e.replace(/-/g, ".");
}
function ec(e) {
    return e.toLowerCase().replace(/-(\w)/g, (t, n) => n.toUpperCase());
}
function qe(e) {
    return !Array.isArray(e) && !isNaN(e);
}
function tc(e) {
    return [" ", "_"].includes(e)
        ? e
        : e
              .replace(/([a-z])([A-Z])/g, "$1-$2")
              .replace(/[_\s]/, "-")
              .toLowerCase();
}
function nc(e) {
    return ["keydown", "keyup"].includes(e);
}
function _i(e) {
    return ["contextmenu", "click", "mouse"].some((t) => e.includes(t));
}
function rc(e, t) {
    let n = t.filter(
        (s) =>
            ![
                "window",
                "document",
                "prevent",
                "stop",
                "once",
                "capture",
                "self",
                "away",
                "outside",
                "passive",
            ].includes(s)
    );
    if (n.includes("debounce")) {
        let s = n.indexOf("debounce");
        n.splice(s, qe((n[s + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (n.includes("throttle")) {
        let s = n.indexOf("throttle");
        n.splice(s, qe((n[s + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (n.length === 0 || (n.length === 1 && Mn(e.key).includes(n[0])))
        return !1;
    const i = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((s) =>
        n.includes(s)
    );
    return (
        (n = n.filter((s) => !i.includes(s))),
        !(
            i.length > 0 &&
            i.filter(
                (o) => (
                    (o === "cmd" || o === "super") && (o = "meta"), e[`${o}Key`]
                )
            ).length === i.length &&
            (_i(e.type) || Mn(e.key).includes(n[0]))
        )
    );
}
function Mn(e) {
    if (!e) return [];
    e = tc(e);
    let t = {
        ctrl: "control",
        slash: "/",
        space: " ",
        spacebar: " ",
        cmd: "meta",
        esc: "escape",
        up: "arrow-up",
        down: "arrow-down",
        left: "arrow-left",
        right: "arrow-right",
        period: ".",
        comma: ",",
        equal: "=",
        minus: "-",
        underscore: "_",
    };
    return (
        (t[e] = e),
        Object.keys(t)
            .map((n) => {
                if (t[n] === e) return n;
            })
            .filter((n) => n)
    );
}
R("model", (e, { modifiers: t, expression: n }, { effect: r, cleanup: i }) => {
    let s = e;
    t.includes("parent") && (s = e.parentNode);
    let o = C(s, n),
        a;
    typeof n == "string"
        ? (a = C(s, `${n} = __placeholder`))
        : typeof n == "function" && typeof n() == "string"
        ? (a = C(s, `${n()} = __placeholder`))
        : (a = () => {});
    let c = () => {
            let _;
            return o((w) => (_ = w)), jn(_) ? _.get() : _;
        },
        u = (_) => {
            let w;
            o((h) => (w = h)),
                jn(w) ? w.set(_) : a(() => {}, { scope: { __placeholder: _ } });
        };
    typeof n == "string" &&
        e.type === "radio" &&
        S(() => {
            e.hasAttribute("name") || e.setAttribute("name", n);
        });
    var l =
        e.tagName.toLowerCase() === "select" ||
        ["checkbox", "radio"].includes(e.type) ||
        t.includes("lazy")
            ? "change"
            : "input";
    let p = q
        ? () => {}
        : Mt(e, l, t, (_) => {
              u(lt(e, t, _, c()));
          });
    if (
        (t.includes("fill") &&
            ([void 0, null, ""].includes(c()) ||
                (en(e) && Array.isArray(c())) ||
                (e.tagName.toLowerCase() === "select" && e.multiple)) &&
            u(lt(e, t, { target: e }, c())),
        e._x_removeModelListeners || (e._x_removeModelListeners = {}),
        (e._x_removeModelListeners.default = p),
        i(() => e._x_removeModelListeners.default()),
        e.form)
    ) {
        let _ = Mt(e.form, "reset", [], (w) => {
            Zt(
                () => e._x_model && e._x_model.set(lt(e, t, { target: e }, c()))
            );
        });
        i(() => _());
    }
    (e._x_model = {
        get() {
            return c();
        },
        set(_) {
            u(_);
        },
    }),
        (e._x_forceModelUpdate = (_) => {
            _ === void 0 && typeof n == "string" && n.match(/\./) && (_ = ""),
                (window.fromModel = !0),
                S(() => qr(e, "value", _)),
                delete window.fromModel;
        }),
        r(() => {
            let _ = c();
            (t.includes("unintrusive") &&
                document.activeElement.isSameNode(e)) ||
                e._x_forceModelUpdate(_);
        });
});
function lt(e, t, n, r) {
    return S(() => {
        if (n instanceof CustomEvent && n.detail !== void 0)
            return n.detail !== null && n.detail !== void 0
                ? n.detail
                : n.target.value;
        if (en(e))
            if (Array.isArray(r)) {
                let i = null;
                return (
                    t.includes("number")
                        ? (i = ft(n.target.value))
                        : t.includes("boolean")
                        ? (i = je(n.target.value))
                        : (i = n.target.value),
                    n.target.checked
                        ? r.includes(i)
                            ? r
                            : r.concat([i])
                        : r.filter((s) => !ic(s, i))
                );
            } else return n.target.checked;
        else {
            if (e.tagName.toLowerCase() === "select" && e.multiple)
                return t.includes("number")
                    ? Array.from(n.target.selectedOptions).map((i) => {
                          let s = i.value || i.text;
                          return ft(s);
                      })
                    : t.includes("boolean")
                    ? Array.from(n.target.selectedOptions).map((i) => {
                          let s = i.value || i.text;
                          return je(s);
                      })
                    : Array.from(n.target.selectedOptions).map(
                          (i) => i.value || i.text
                      );
            {
                let i;
                return (
                    Jr(e)
                        ? n.target.checked
                            ? (i = n.target.value)
                            : (i = r)
                        : (i = n.target.value),
                    t.includes("number")
                        ? ft(i)
                        : t.includes("boolean")
                        ? je(i)
                        : t.includes("trim")
                        ? i.trim()
                        : i
                );
            }
        }
    });
}
function ft(e) {
    let t = e ? parseFloat(e) : null;
    return sc(t) ? t : e;
}
function ic(e, t) {
    return e == t;
}
function sc(e) {
    return !Array.isArray(e) && !isNaN(e);
}
function jn(e) {
    return (
        e !== null &&
        typeof e == "object" &&
        typeof e.get == "function" &&
        typeof e.set == "function"
    );
}
R("cloak", (e) =>
    queueMicrotask(() => S(() => e.removeAttribute(ce("cloak"))))
);
Ir(() => `[${ce("init")}]`);
R(
    "init",
    z((e, { expression: t }, { evaluate: n }) =>
        typeof t == "string" ? !!t.trim() && n(t, {}, !1) : n(t, {}, !1)
    )
);
R("text", (e, { expression: t }, { effect: n, evaluateLater: r }) => {
    let i = r(t);
    n(() => {
        i((s) => {
            S(() => {
                e.textContent = s;
            });
        });
    });
});
R("html", (e, { expression: t }, { effect: n, evaluateLater: r }) => {
    let i = r(t);
    n(() => {
        i((s) => {
            S(() => {
                (e.innerHTML = s),
                    (e._x_ignoreSelf = !0),
                    $(e),
                    delete e._x_ignoreSelf;
            });
        });
    });
});
Xt(vr(":", Rr(ce("bind:"))));
var mi = (
    e,
    { value: t, modifiers: n, expression: r, original: i },
    { effect: s, cleanup: o }
) => {
    if (!t) {
        let c = {};
        ca(c),
            C(e, r)(
                (l) => {
                    Yr(e, l, i);
                },
                { scope: c }
            );
        return;
    }
    if (t === "key") return oc(e, r);
    if (
        e._x_inlineBindings &&
        e._x_inlineBindings[t] &&
        e._x_inlineBindings[t].extract
    )
        return;
    let a = C(e, r);
    s(() =>
        a((c) => {
            c === void 0 && typeof r == "string" && r.match(/\./) && (c = ""),
                S(() => qr(e, t, c, n));
        })
    ),
        o(() => {
            e._x_undoAddedClasses && e._x_undoAddedClasses(),
                e._x_undoAddedStyles && e._x_undoAddedStyles();
        });
};
mi.inline = (e, { value: t, modifiers: n, expression: r }) => {
    t &&
        (e._x_inlineBindings || (e._x_inlineBindings = {}),
        (e._x_inlineBindings[t] = { expression: r, extract: !1 }));
};
R("bind", mi);
function oc(e, t) {
    e._x_keyExpression = t;
}
jr(() => `[${ce("data")}]`);
R("data", (e, { expression: t }, { cleanup: n }) => {
    if (ac(e)) return;
    t = t === "" ? "{}" : t;
    let r = {};
    St(r, e);
    let i = {};
    la(i, r);
    let s = X(e, t, { scope: i });
    (s === void 0 || s === !0) && (s = {}), St(s, e);
    let o = oe(s);
    gr(o);
    let a = xe(e, o);
    o.init && X(e, o.init),
        n(() => {
            o.destroy && X(e, o.destroy), a();
        });
});
Ze((e, t) => {
    e._x_dataStack &&
        ((t._x_dataStack = e._x_dataStack),
        t.setAttribute("data-has-alpine-state", !0));
});
function ac(e) {
    return q ? (Pt ? !0 : e.hasAttribute("data-has-alpine-state")) : !1;
}
R("show", (e, { modifiers: t, expression: n }, { effect: r }) => {
    let i = C(e, n);
    e._x_doHide ||
        (e._x_doHide = () => {
            S(() => {
                e.style.setProperty(
                    "display",
                    "none",
                    t.includes("important") ? "important" : void 0
                );
            });
        }),
        e._x_doShow ||
            (e._x_doShow = () => {
                S(() => {
                    e.style.length === 1 && e.style.display === "none"
                        ? e.removeAttribute("style")
                        : e.style.removeProperty("display");
                });
            });
    let s = () => {
            e._x_doHide(), (e._x_isShown = !1);
        },
        o = () => {
            e._x_doShow(), (e._x_isShown = !0);
        },
        a = () => setTimeout(o),
        c = Tt(
            (p) => (p ? o() : s()),
            (p) => {
                typeof e._x_toggleAndCascadeWithTransitions == "function"
                    ? e._x_toggleAndCascadeWithTransitions(e, p, o, s)
                    : p
                    ? a()
                    : s();
            }
        ),
        u,
        l = !0;
    r(() =>
        i((p) => {
            (!l && p === u) ||
                (t.includes("immediate") && (p ? a() : s()),
                c(p),
                (u = p),
                (l = !1));
        })
    );
});
R("for", (e, { expression: t }, { effect: n, cleanup: r }) => {
    let i = uc(t),
        s = C(e, i.items),
        o = C(e, e._x_keyExpression || "index");
    (e._x_prevKeys = []),
        (e._x_lookup = {}),
        n(() => cc(e, i, s, o)),
        r(() => {
            Object.values(e._x_lookup).forEach((a) =>
                S(() => {
                    le(a), a.remove();
                })
            ),
                delete e._x_prevKeys,
                delete e._x_lookup;
        });
});
function cc(e, t, n, r) {
    let i = (o) => typeof o == "object" && !Array.isArray(o),
        s = e;
    n((o) => {
        lc(o) && o >= 0 && (o = Array.from(Array(o).keys(), (d) => d + 1)),
            o === void 0 && (o = []);
        let a = e._x_lookup,
            c = e._x_prevKeys,
            u = [],
            l = [];
        if (i(o))
            o = Object.entries(o).map(([d, m]) => {
                let b = In(t, m, d, o);
                r(
                    (x) => {
                        l.includes(x) && L("Duplicate key on x-for", e),
                            l.push(x);
                    },
                    { scope: { index: d, ...b } }
                ),
                    u.push(b);
            });
        else
            for (let d = 0; d < o.length; d++) {
                let m = In(t, o[d], d, o);
                r(
                    (b) => {
                        l.includes(b) && L("Duplicate key on x-for", e),
                            l.push(b);
                    },
                    { scope: { index: d, ...m } }
                ),
                    u.push(m);
            }
        let p = [],
            _ = [],
            w = [],
            h = [];
        for (let d = 0; d < c.length; d++) {
            let m = c[d];
            l.indexOf(m) === -1 && w.push(m);
        }
        c = c.filter((d) => !w.includes(d));
        let g = "template";
        for (let d = 0; d < l.length; d++) {
            let m = l[d],
                b = c.indexOf(m);
            if (b === -1) c.splice(d, 0, m), p.push([g, d]);
            else if (b !== d) {
                let x = c.splice(d, 1)[0],
                    A = c.splice(b - 1, 1)[0];
                c.splice(d, 0, A), c.splice(b, 0, x), _.push([x, A]);
            } else h.push(m);
            g = m;
        }
        for (let d = 0; d < w.length; d++) {
            let m = w[d];
            m in a &&
                (S(() => {
                    le(a[m]), a[m].remove();
                }),
                delete a[m]);
        }
        for (let d = 0; d < _.length; d++) {
            let [m, b] = _[d],
                x = a[m],
                A = a[b],
                O = document.createElement("div");
            S(() => {
                A || L('x-for ":key" is undefined or invalid', s, b, a),
                    A.after(O),
                    x.after(A),
                    A._x_currentIfEl && A.after(A._x_currentIfEl),
                    O.before(x),
                    x._x_currentIfEl && x.after(x._x_currentIfEl),
                    O.remove();
            }),
                A._x_refreshXForScope(u[l.indexOf(b)]);
        }
        for (let d = 0; d < p.length; d++) {
            let [m, b] = p[d],
                x = m === "template" ? s : a[m];
            x._x_currentIfEl && (x = x._x_currentIfEl);
            let A = u[b],
                O = l[b],
                P = document.importNode(s.content, !0).firstElementChild,
                D = oe(A);
            xe(P, D, s),
                (P._x_refreshXForScope = (te) => {
                    Object.entries(te).forEach(([Ae, bi]) => {
                        D[Ae] = bi;
                    });
                }),
                S(() => {
                    x.after(P), z(() => $(P))();
                }),
                typeof O == "object" &&
                    L(
                        "x-for key cannot be an object, it must be a string or an integer",
                        s
                    ),
                (a[O] = P);
        }
        for (let d = 0; d < h.length; d++)
            a[h[d]]._x_refreshXForScope(u[l.indexOf(h[d])]);
        s._x_prevKeys = l;
    });
}
function uc(e) {
    let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
        n = /^\s*\(|\)\s*$/g,
        r = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
        i = e.match(r);
    if (!i) return;
    let s = {};
    s.items = i[2].trim();
    let o = i[1].replace(n, "").trim(),
        a = o.match(t);
    return (
        a
            ? ((s.item = o.replace(t, "").trim()),
              (s.index = a[1].trim()),
              a[2] && (s.collection = a[2].trim()))
            : (s.item = o),
        s
    );
}
function In(e, t, n, r) {
    let i = {};
    return (
        /^\[.*\]$/.test(e.item) && Array.isArray(t)
            ? e.item
                  .replace("[", "")
                  .replace("]", "")
                  .split(",")
                  .map((o) => o.trim())
                  .forEach((o, a) => {
                      i[o] = t[a];
                  })
            : /^\{.*\}$/.test(e.item) &&
              !Array.isArray(t) &&
              typeof t == "object"
            ? e.item
                  .replace("{", "")
                  .replace("}", "")
                  .split(",")
                  .map((o) => o.trim())
                  .forEach((o) => {
                      i[o] = t[o];
                  })
            : (i[e.item] = t),
        e.index && (i[e.index] = n),
        e.collection && (i[e.collection] = r),
        i
    );
}
function lc(e) {
    return !Array.isArray(e) && !isNaN(e);
}
function gi() {}
gi.inline = (e, { expression: t }, { cleanup: n }) => {
    let r = Ge(e);
    r._x_refs || (r._x_refs = {}),
        (r._x_refs[t] = e),
        n(() => delete r._x_refs[t]);
};
R("ref", gi);
R("if", (e, { expression: t }, { effect: n, cleanup: r }) => {
    e.tagName.toLowerCase() !== "template" &&
        L("x-if can only be used on a <template> tag", e);
    let i = C(e, t),
        s = () => {
            if (e._x_currentIfEl) return e._x_currentIfEl;
            let a = e.content.cloneNode(!0).firstElementChild;
            return (
                xe(a, {}, e),
                S(() => {
                    e.after(a), z(() => $(a))();
                }),
                (e._x_currentIfEl = a),
                (e._x_undoIf = () => {
                    S(() => {
                        le(a), a.remove();
                    }),
                        delete e._x_currentIfEl;
                }),
                a
            );
        },
        o = () => {
            e._x_undoIf && (e._x_undoIf(), delete e._x_undoIf);
        };
    n(() =>
        i((a) => {
            a ? s() : o();
        })
    ),
        r(() => e._x_undoIf && e._x_undoIf());
});
R("id", (e, { expression: t }, { evaluate: n }) => {
    n(t).forEach((i) => Ga(e, i));
});
Ze((e, t) => {
    e._x_ids && (t._x_ids = e._x_ids);
});
Xt(vr("@", Rr(ce("on:"))));
R(
    "on",
    z((e, { value: t, modifiers: n, expression: r }, { cleanup: i }) => {
        let s = r ? C(e, r) : () => {};
        e.tagName.toLowerCase() === "template" &&
            (e._x_forwardEvents || (e._x_forwardEvents = []),
            e._x_forwardEvents.includes(t) || e._x_forwardEvents.push(t));
        let o = Mt(e, t, n, (a) => {
            s(() => {}, { scope: { $event: a }, params: [a] });
        });
        i(() => o());
    })
);
nt("Collapse", "collapse", "collapse");
nt("Intersect", "intersect", "intersect");
nt("Focus", "trap", "focus");
nt("Mask", "mask", "mask");
function nt(e, t, n) {
    R(t, (r) =>
        L(
            `You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`,
            r
        )
    );
}
Se.setEvaluator(Er);
Se.setReactivityEngine({ reactive: cn, effect: wa, release: xa, raw: E });
var fc = Se,
    yi = fc;
window.Alpine = yi;
yi.start();
