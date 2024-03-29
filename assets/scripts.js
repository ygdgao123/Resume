! function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";

    function n(e, t) {
        var n = (t = t || te).createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }

    function r(e) {
        var t = !!e && "length" in e && e.length,
            n = he.type(e);
        return "function" !== n && !he.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function i(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function o(e, t, n) {
        return he.isFunction(t) ? he.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? he.grep(e, function (e) {
            return e === t !== n
        }) : "string" != typeof t ? he.grep(e, function (e) {
            return ae.call(t, e) > -1 !== n
        }) : Ee.test(t) ? he.filter(t, e, n) : (t = he.filter(t, e), he.grep(e, function (e) {
            return ae.call(t, e) > -1 !== n && 1 === e.nodeType
        }))
    }

    function a(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function s(e) {
        var t = {};
        return he.each(e.match(je) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function u(e) {
        return e
    }

    function l(e) {
        throw e
    }

    function c(e, t, n, r) {
        var i;
        try {
            e && he.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && he.isFunction(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    function f() {
        te.removeEventListener("DOMContentLoaded", f), e.removeEventListener("load", f), he.ready()
    }

    function p() {
        this.expando = he.expando + p.uid++
    }

    function d(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Pe.test(e) ? JSON.parse(e) : e)
    }

    function h(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Re, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = d(n)
                } catch (e) {}
                Oe.set(e, t, n)
            } else n = void 0;
        return n
    }

    function g(e, t, n, r) {
        var i, o = 1,
            a = 20,
            s = r ? function () {
                return r.cur()
            } : function () {
                return he.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (he.cssNumber[t] ? "" : "px"),
            c = (he.cssNumber[t] || "px" !== l && +u) && Ie.exec(he.css(e, t));
        if (c && c[3] !== l) {
            l = l || c[3], n = n || [], c = +u || 1;
            do {
                o = o || ".5", c /= o, he.style(e, t, c + l)
            } while (o !== (o = s() / u) && 1 !== o && --a)
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }

    function v(e) {
        var t, n = e.ownerDocument,
            r = e.nodeName,
            i = _e[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = he.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), _e[r] = i, i)
    }

    function m(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = Fe.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && $e(r) && (i[o] = v(r))) : "none" !== n && (i[o] = "none", Fe.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }

    function y(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && i(e, t) ? he.merge([e], n) : n
    }

    function x(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Fe.set(e[n], "globalEval", !t || Fe.get(t[n], "globalEval"))
    }

    function b(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === he.type(o)) he.merge(p, o.nodeType ? [o] : o);
                else if (Ge.test(o)) {
            for (a = a || f.appendChild(t.createElement("div")), s = (Xe.exec(o) || ["", ""])[1].toLowerCase(), u = Ve[s] || Ve._default, a.innerHTML = u[1] + he.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
            he.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        for (f.textContent = "", d = 0; o = p[d++];)
            if (r && he.inArray(o, r) > -1) i && i.push(o);
            else if (l = he.contains(o.ownerDocument, o), a = y(f.appendChild(o), "script"), l && x(a), n)
            for (c = 0; o = a[c++];) Ue.test(o.type || "") && n.push(o);
        return f
    }

    function w() {
        return !0
    }

    function T() {
        return !1
    }

    function C() {
        try {
            return te.activeElement
        } catch (e) {}
    }

    function E(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t) E(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = T;
        else if (!i) return e;
        return 1 === o && (a = i, i = function (e) {
            return he().off(e), a.apply(this, arguments)
        }, i.guid = a.guid || (a.guid = he.guid++)), e.each(function () {
            he.event.add(this, t, i, r, n)
        })
    }

    function k(e, t) {
        return i(e, "table") && i(11 !== t.nodeType ? t : t.firstChild, "tr") ? he(">tbody", e)[0] || e : e
    }

    function S(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function N(e) {
        var t = nt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function D(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (Fe.hasData(e) && (o = Fe.access(e), a = Fe.set(t, o), l = o.events)) {
                delete a.handle, a.events = {};
                for (i in l)
                    for (n = 0, r = l[i].length; n < r; n++) he.event.add(t, i, l[i][n])
            }
            Oe.hasData(e) && (s = Oe.access(e), u = he.extend({}, s), Oe.set(t, u))
        }
    }

    function j(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ze.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function A(e, t, r, i) {
        t = ie.apply([], t);
        var o, a, s, u, l, c, f = 0,
            p = e.length,
            d = p - 1,
            h = t[0],
            g = he.isFunction(h);
        if (g || p > 1 && "string" == typeof h && !pe.checkClone && tt.test(h)) return e.each(function (n) {
            var o = e.eq(n);
            g && (t[0] = h.call(this, n, o.html())), A(o, t, r, i)
        });
        if (p && (o = b(t, e[0].ownerDocument, !1, e, i), a = o.firstChild, 1 === o.childNodes.length && (o = a), a || i)) {
            for (u = (s = he.map(y(o, "script"), S)).length; f < p; f++) l = o, f !== d && (l = he.clone(l, !0, !0), u && he.merge(s, y(l, "script"))), r.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument, he.map(s, N), f = 0; f < u; f++) l = s[f], Ue.test(l.type || "") && !Fe.access(l, "globalEval") && he.contains(c, l) && (l.src ? he._evalUrl && he._evalUrl(l.src) : n(l.textContent.replace(rt, ""), c))
        }
        return e
    }

    function q(e, t, n) {
        for (var r, i = t ? he.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || he.cleanData(y(r)), r.parentNode && (n && he.contains(r.ownerDocument, r) && x(y(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    function L(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || at(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || he.contains(e.ownerDocument, e) || (a = he.style(e, t)), !pe.pixelMarginRight() && ot.test(a) && it.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function H(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function F(e) {
        if (e in pt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = ft.length; n--;)
            if ((e = ft[n] + t) in pt) return e
    }

    function O(e) {
        var t = he.cssProps[e];
        return t || (t = he.cssProps[e] = F(e) || e), t
    }

    function P(e, t, n) {
        var r = Ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function R(e, t, n, r, i) {
        var o, a = 0;
        for (o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (a += he.css(e, n + We[o], !0, i)), r ? ("content" === n && (a -= he.css(e, "padding" + We[o], !0, i)), "margin" !== n && (a -= he.css(e, "border" + We[o] + "Width", !0, i))) : (a += he.css(e, "padding" + We[o], !0, i), "padding" !== n && (a += he.css(e, "border" + We[o] + "Width", !0, i)));
        return a
    }

    function M(e, t, n) {
        var r, i = at(e),
            o = L(e, t, i),
            a = "border-box" === he.css(e, "boxSizing", !1, i);
        return ot.test(o) ? o : (r = a && (pe.boxSizingReliable() || o === e.style[t]), "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (o = parseFloat(o) || 0) + R(e, t, n || (a ? "border" : "content"), r, i) + "px")
    }

    function I(e, t, n, r, i) {
        return new I.prototype.init(e, t, n, r, i)
    }

    function W() {
        ht && (!1 === te.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(W) : e.setTimeout(W, he.fx.interval), he.fx.tick())
    }

    function $() {
        return e.setTimeout(function () {
            dt = void 0
        }), dt = he.now()
    }

    function B(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) n = We[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function _(e, t, n) {
        for (var r, i = (X.tweeners[t] || []).concat(X.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function z(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = he.camelCase(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = he.cssHooks[r]) && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function X(e, t, n) {
        var r, i, o = 0,
            a = X.prefilters.length,
            s = he.Deferred().always(function () {
                delete u.elem
            }),
            u = function () {
                if (i) return !1;
                for (var t = dt || $(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: he.extend({}, t),
                opts: he.extend(!0, {
                    specialEasing: {},
                    easing: he.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: dt || $(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = he.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (z(c, l.opts.specialEasing); o < a; o++)
            if (r = X.prefilters[o].call(l, e, c, l.opts)) return he.isFunction(r.stop) && (he._queueHooks(l.elem, l.opts.queue).stop = he.proxy(r.stop, r)), r;
        return he.map(c, _, l), he.isFunction(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), he.fx.timer(he.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l
    }

    function U(e) {
        return (e.match(je) || []).join(" ")
    }

    function V(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function G(e, t, n, r) {
        var i;
        if (Array.isArray(t)) he.each(t, function (t, i) {
            n || St.test(e) ? r(e, i) : G(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== he.type(t)) r(e, t);
        else
            for (i in t) G(e + "[" + i + "]", t[i], n, r)
    }

    function Y(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(je) || [];
            if (he.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function Q(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0, he.each(e[s] || [], function (e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), u
        }
        var o = {},
            a = e === Mt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function J(e, t) {
        var n, r, i = he.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && he.extend(!0, e, r), e
    }

    function K(e, t, n) {
        for (var r, i, o, a, s = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break
                } if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }

    function Z(e, t, n, r) {
        var i, o, a, s, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o]))
                for (i in l)
                    if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                        !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                        break
                    } if (!0 !== a)
                if (a && e.throws) t = a(t);
                else try {
                    t = a(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: a ? e : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    var ee = [],
        te = e.document,
        ne = Object.getPrototypeOf,
        re = ee.slice,
        ie = ee.concat,
        oe = ee.push,
        ae = ee.indexOf,
        se = {},
        ue = se.toString,
        le = se.hasOwnProperty,
        ce = le.toString,
        fe = ce.call(Object),
        pe = {},
        de = "3.2.1",
        he = function (e, t) {
            return new he.fn.init(e, t)
        },
        ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ve = /^-ms-/,
        me = /-([a-z])/g,
        ye = function (e, t) {
            return t.toUpperCase()
        };
    he.fn = he.prototype = {
        jquery: de,
        constructor: he,
        length: 0,
        toArray: function () {
            return re.call(this)
        },
        get: function (e) {
            return null == e ? re.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = he.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function (e) {
            return he.each(this, e)
        },
        map: function (e) {
            return this.pushStack(he.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(re.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: oe,
        sort: ee.sort,
        splice: ee.splice
    }, he.extend = he.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || he.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], r = e[t], a !== r && (l && r && (he.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && he.isPlainObject(n) ? n : {}, a[t] = he.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, he.extend({
        expando: "jQuery" + (de + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isFunction: function (e) {
            return "function" === he.type(e)
        },
        isWindow: function (e) {
            return null != e && e === e.window
        },
        isNumeric: function (e) {
            var t = he.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== ue.call(e) || (t = ne(e)) && ("function" != typeof (n = le.call(t, "constructor") && t.constructor) || ce.call(n) !== fe))
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? se[ue.call(e)] || "object" : typeof e
        },
        globalEval: function (e) {
            n(e)
        },
        camelCase: function (e) {
            return e.replace(ve, "ms-").replace(me, ye)
        },
        each: function (e, t) {
            var n, i = 0;
            if (r(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(ge, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (r(Object(e)) ? he.merge(n, "string" == typeof e ? [e] : e) : oe.call(n, e)), n
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : ae.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function (e, t, n) {
            var i, o, a = 0,
                s = [];
            if (r(e))
                for (i = e.length; a < i; a++) null != (o = t(e[a], a, n)) && s.push(o);
            else
                for (a in e) null != (o = t(e[a], a, n)) && s.push(o);
            return ie.apply([], s)
        },
        guid: 1,
        proxy: function (e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), he.isFunction(e)) return r = re.call(arguments, 2), i = function () {
                return e.apply(t || this, r.concat(re.call(arguments)))
            }, i.guid = e.guid = e.guid || he.guid++, i
        },
        now: Date.now,
        support: pe
    }), "function" == typeof Symbol && (he.fn[Symbol.iterator] = ee[Symbol.iterator]), he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        se["[object " + t + "]"] = t.toLowerCase()
    });
    var xe = function (e) {
        function t(e, t, n, r) {
            var i, o, a, s, u, c, p, d = t && t.ownerDocument,
                h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!r && ((t ? t.ownerDocument || t : I) !== q && A(t), t = t || q, H)) {
                if (11 !== h && (u = ge.exec(e)))
                    if (i = u[1]) {
                        if (9 === h) {
                            if (!(a = t.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (d && (a = d.getElementById(i)) && R(t, a) && a.id === i) return n.push(a), n
                    } else {
                        if (u[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = u[3]) && b.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(i)), n
                    } if (b.qsa && !z[e + " "] && (!F || !F.test(e))) {
                    if (1 !== h) d = t, p = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(xe, be) : t.setAttribute("id", s = M), o = (c = E(e)).length; o--;) c[o] = "#" + s + " " + f(c[o]);
                        p = c.join(","), d = ve.test(e) && l(t.parentNode) || t
                    }
                    if (p) try {
                        return Q.apply(n, d.querySelectorAll(p)), n
                    } catch (e) {} finally {
                        s === M && t.removeAttribute("id")
                    }
                }
            }
            return S(e.replace(oe, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[M] = !0, e
        }

        function i(e) {
            var t = q.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) w.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function u(e) {
            return r(function (t) {
                return t = +t, r(function (n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function l(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        function c() {}

        function f(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function p(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = $++;
            return t.first ? function (t, n, i) {
                for (; t = t[r];)
                    if (1 === t.nodeType || a) return e(t, n, i);
                return !1
            } : function (t, n, u) {
                var l, c, f, p = [W, s];
                if (u) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || a)
                            if (f = t[M] || (t[M] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((l = c[o]) && l[0] === W && l[1] === s) return p[2] = l[2];
                                if (c[o] = p, p[2] = e(t, n, u)) return !0
                            } return !1
            }
        }

        function d(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function h(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
            return r
        }

        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function v(e, t, n, i, o, a) {
            return i && !i[M] && (i = v(i)), o && !o[M] && (o = v(o, a)), r(function (r, a, s, u) {
                var l, c, f, p = [],
                    d = [],
                    v = a.length,
                    m = r || h(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !r && t ? m : g(m, p, e, s, u),
                    x = n ? o || (r ? e : v || i) ? [] : a : y;
                if (n && n(y, x, s, u), i)
                    for (l = g(x, d), i(l, [], s, u), c = l.length; c--;)(f = l[c]) && (x[d[c]] = !(y[d[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = x.length; c--;)(f = x[c]) && l.push(y[c] = f);
                            o(null, x = [], l, u)
                        }
                        for (c = x.length; c--;)(f = x[c]) && (l = o ? K(r, f) : p[c]) > -1 && (r[l] = !(a[l] = f))
                    }
                } else x = g(x === a ? x.splice(v, x.length) : x), o ? o(null, a, x, u) : Q.apply(a, x)
            })
        }

        function m(e) {
            for (var t, n, r, i = e.length, o = w.relative[e[0].type], a = o || w.relative[" "], s = o ? 1 : 0, u = p(function (e) {
                    return e === t
                }, a, !0), l = p(function (e) {
                    return K(t, e) > -1
                }, a, !0), c = [function (e, n, r) {
                    var i = !o && (r || n !== N) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                    return t = null, i
                }]; s < i; s++)
                if (n = w.relative[e[s].type]) c = [p(d(c), n)];
                else {
                    if ((n = w.filter[e[s].type].apply(null, e[s].matches))[M]) {
                        for (r = ++s; r < i && !w.relative[e[r].type]; r++);
                        return v(s > 1 && d(c), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(oe, "$1"), n, s < r && m(e.slice(s, r)), r < i && m(e = e.slice(r)), r < i && f(e))
                    }
                    c.push(n)
                } return d(c)
        }

        function y(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                a = function (r, a, s, u, l) {
                    var c, f, p, d = 0,
                        h = "0",
                        v = r && [],
                        m = [],
                        y = N,
                        x = r || o && w.find.TAG("*", l),
                        b = W += null == y ? 1 : Math.random() || .1,
                        T = x.length;
                    for (l && (N = a === q || a || l); h !== T && null != (c = x[h]); h++) {
                        if (o && c) {
                            for (f = 0, a || c.ownerDocument === q || (A(c), s = !H); p = e[f++];)
                                if (p(c, a || q, s)) {
                                    u.push(c);
                                    break
                                } l && (W = b)
                        }
                        i && ((c = !p && c) && d--, r && v.push(c))
                    }
                    if (d += h, i && h !== d) {
                        for (f = 0; p = n[f++];) p(v, m, a, s);
                        if (r) {
                            if (d > 0)
                                for (; h--;) v[h] || m[h] || (m[h] = G.call(u));
                            m = g(m)
                        }
                        Q.apply(u, m), l && !r && m.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                    }
                    return l && (W = b, N = y), v
                };
            return i ? r(a) : a
        }
        var x, b, w, T, C, E, k, S, N, D, j, A, q, L, H, F, O, P, R, M = "sizzle" + 1 * new Date,
            I = e.document,
            W = 0,
            $ = 0,
            B = n(),
            _ = n(),
            z = n(),
            X = function (e, t) {
                return e === t && (j = !0), 0
            },
            U = {}.hasOwnProperty,
            V = [],
            G = V.pop,
            Y = V.push,
            Q = V.push,
            J = V.slice,
            K = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]",
            te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
            re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
            ie = new RegExp(ee + "+", "g"),
            oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
            ae = new RegExp("^" + ee + "*," + ee + "*"),
            se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            ue = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
            le = new RegExp(re),
            ce = new RegExp("^" + te + "$"),
            fe = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te + "|[*])"),
                ATTR: new RegExp("^" + ne),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + Z + ")$", "i"),
                needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
            },
            pe = /^(?:input|select|textarea|button)$/i,
            de = /^h\d$/i,
            he = /^[^{]+\{\s*\[native \w/,
            ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ve = /[+~]/,
            me = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
            ye = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            be = function (e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            we = function () {
                A()
            },
            Te = p(function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            Q.apply(V = J.call(I.childNodes), I.childNodes), V[I.childNodes.length].nodeType
        } catch (e) {
            Q = {
                apply: V.length ? function (e, t) {
                    Y.apply(e, J.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        b = t.support = {}, C = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, A = t.setDocument = function (e) {
            var t, n, r = e ? e.ownerDocument || e : I;
            return r !== q && 9 === r.nodeType && r.documentElement ? (q = r, L = q.documentElement, H = !C(q), I !== q && (n = q.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), b.attributes = i(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), b.getElementsByTagName = i(function (e) {
                return e.appendChild(q.createComment("")), !e.getElementsByTagName("*").length
            }), b.getElementsByClassName = he.test(q.getElementsByClassName), b.getById = i(function (e) {
                return L.appendChild(e).id = M, !q.getElementsByName || !q.getElementsByName(M).length
            }), b.getById ? (w.filter.ID = function (e) {
                var t = e.replace(me, ye);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, w.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && H) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (w.filter.ID = function (e) {
                var t = e.replace(me, ye);
                return function (e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, w.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && H) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), w.find.TAG = b.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, w.find.CLASS = b.getElementsByClassName && function (e, t) {
                if (void 0 !== t.getElementsByClassName && H) return t.getElementsByClassName(e)
            }, O = [], F = [], (b.qsa = he.test(q.querySelectorAll)) && (i(function (e) {
                L.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + M + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + M + "+*").length || F.push(".#.+[+~]")
            }), i(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = q.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && F.push(":enabled", ":disabled"), L.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
            })), (b.matchesSelector = he.test(P = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && i(function (e) {
                b.disconnectedMatch = P.call(e, "*"), P.call(e, "[s!='']:x"), O.push("!=", re)
            }), F = F.length && new RegExp(F.join("|")), O = O.length && new RegExp(O.join("|")), t = he.test(L.compareDocumentPosition), R = t || he.test(L.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, X = t ? function (e, t) {
                if (e === t) return j = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === q || e.ownerDocument === I && R(I, e) ? -1 : t === q || t.ownerDocument === I && R(I, t) ? 1 : D ? K(D, e) - K(D, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return j = !0, 0;
                var n, r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    u = [t];
                if (!i || !o) return e === q ? -1 : t === q ? 1 : i ? -1 : o ? 1 : D ? K(D, e) - K(D, t) : 0;
                if (i === o) return a(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; s[r] === u[r];) r++;
                return r ? a(s[r], u[r]) : s[r] === I ? -1 : u[r] === I ? 1 : 0
            }, q) : q
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== q && A(e), n = n.replace(ue, "='$1']"), b.matchesSelector && H && !z[n + " "] && (!O || !O.test(n)) && (!F || !F.test(n))) try {
                var r = P.call(e, n);
                if (r || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e) {}
            return t(n, q, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== q && A(e), R(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== q && A(e);
            var n = w.attrHandle[t.toLowerCase()],
                r = n && U.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
            return void 0 !== r ? r : b.attributes || !H ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.escape = function (e) {
            return (e + "").replace(xe, be)
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (j = !b.detectDuplicates, D = !b.sortStable && e.slice(0), e.sort(X), j) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return D = null, e
        }, T = t.getText = function (e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += T(t);
            return n
        }, (w = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(me, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(me, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && le.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(me, ye).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = B[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && B(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, n, r) {
                    return function (i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ie, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                            v = t.parentNode,
                            m = s && t.nodeName.toLowerCase(),
                            y = !u && !s,
                            x = !1;
                        if (v) {
                            if (o) {
                                for (; g;) {
                                    for (p = t; p = p[g];)
                                        if (s ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? v.firstChild : v.lastChild], a && y) {
                                for (x = (d = (l = (c = (f = (p = v)[M] || (p[M] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === W && l[1]) && l[2], p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();)
                                    if (1 === p.nodeType && ++x && p === t) {
                                        c[e] = [W, d, x];
                                        break
                                    }
                            } else if (y && (p = t, f = p[M] || (p[M] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), l = c[e] || [], d = l[0] === W && l[1], x = d), !1 === x)
                                for (;
                                    (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++x || (y && (f = p[M] || (p[M] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), c[e] = [W, x]), p !== t)););
                            return (x -= i) === r || x % r == 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function (e, n) {
                    var i, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[M] ? o(n) : o.length > 1 ? (i = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                        for (var r, i = o(e, n), a = i.length; a--;) r = K(e, i[a]), e[r] = !(t[r] = i[a])
                    }) : function (e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function (e) {
                    var t = [],
                        n = [],
                        i = k(e.replace(oe, "$1"));
                    return i[M] ? r(function (e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: r(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function (e) {
                    return e = e.replace(me, ye),
                        function (t) {
                            return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                        }
                }),
                lang: r(function (e) {
                    return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(me, ye).toLowerCase(),
                        function (t) {
                            var n;
                            do {
                                if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === L
                },
                focus: function (e) {
                    return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: s(!1),
                disabled: s(!0),
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !w.pseudos.empty(e)
                },
                header: function (e) {
                    return de.test(e.nodeName)
                },
                input: function (e) {
                    return pe.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: u(function () {
                    return [0]
                }),
                last: u(function (e, t) {
                    return [t - 1]
                }),
                eq: u(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: u(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: u(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: u(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: u(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = w.pseudos.eq;
        for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[x] = function (e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }(x);
        for (x in {
                submit: !0,
                reset: !0
            }) w.pseudos[x] = function (e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }(x);
        return c.prototype = w.filters = w.pseudos, w.setFilters = new c, E = t.tokenize = function (e, n) {
            var r, i, o, a, s, u, l, c = _[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, u = [], l = w.preFilter; s;) {
                r && !(i = ae.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = se.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(oe, " ")
                }), s = s.slice(r.length));
                for (a in w.filter) !(i = fe[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e) : _(e, u).slice(0)
        }, k = t.compile = function (e, t) {
            var n, r = [],
                i = [],
                o = z[e + " "];
            if (!o) {
                for (t || (t = E(e)), n = t.length; n--;) o = m(t[n]), o[M] ? r.push(o) : i.push(o);
                (o = z(e, y(i, r))).selector = e
            }
            return o
        }, S = t.select = function (e, t, n, r) {
            var i, o, a, s, u, c = "function" == typeof e && e,
                p = !r && E(e = c.selector || e);
            if (n = n || [], 1 === p.length) {
                if ((o = p[0] = p[0].slice(0)).length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && H && w.relative[o[1].type]) {
                    if (!(t = (w.find.ID(a.matches[0].replace(me, ye), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !w.relative[s = a.type]);)
                    if ((u = w.find[s]) && (r = u(a.matches[0].replace(me, ye), ve.test(o[0].type) && l(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && f(o))) return Q.apply(n, r), n;
                        break
                    }
            }
            return (c || k(e, p))(r, t, !H, n, !t || ve.test(e) && l(t.parentNode) || t), n
        }, b.sortStable = M.split("").sort(X).join("") === M, b.detectDuplicates = !!j, A(), b.sortDetached = i(function (e) {
            return 1 & e.compareDocumentPosition(q.createElement("fieldset"))
        }), i(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), b.attributes && i(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), i(function (e) {
            return null == e.getAttribute("disabled")
        }) || o(Z, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    he.find = xe, he.expr = xe.selectors, he.expr[":"] = he.expr.pseudos, he.uniqueSort = he.unique = xe.uniqueSort, he.text = xe.getText, he.isXMLDoc = xe.isXML, he.contains = xe.contains, he.escapeSelector = xe.escape;
    var be = function (e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && he(e).is(n)) break;
                    r.push(e)
                } return r
        },
        we = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        Te = he.expr.match.needsContext,
        Ce = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Ee = /^.[^:#\[\.,]*$/;
    he.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? he.find.matchesSelector(r, e) ? [r] : [] : he.find.matches(e, he.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, he.fn.extend({
        find: function (e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(he(e).filter(function () {
                for (t = 0; t < r; t++)
                    if (he.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) he.find(e, i[t], n);
            return r > 1 ? he.uniqueSort(n) : n
        },
        filter: function (e) {
            return this.pushStack(o(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(o(this, e || [], !0))
        },
        is: function (e) {
            return !!o(this, "string" == typeof e && Te.test(e) ? he(e) : e || [], !1).length
        }
    });
    var ke, Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (he.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || ke, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Se.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof he ? t[0] : t, he.merge(this, he.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), Ce.test(r[1]) && he.isPlainObject(t))
                    for (r in t) he.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = te.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : he.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(he) : he.makeArray(e, this)
    }).prototype = he.fn, ke = he(te);
    var Ne = /^(?:parents|prev(?:Until|All))/,
        De = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    he.fn.extend({
        has: function (e) {
            var t = he(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (he.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && he(e);
            if (!Te.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && he.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(o.length > 1 ? he.uniqueSort(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? ae.call(he(e), this[0]) : ae.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), he.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return be(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return be(e, "parentNode", n)
        },
        next: function (e) {
            return a(e, "nextSibling")
        },
        prev: function (e) {
            return a(e, "previousSibling")
        },
        nextAll: function (e) {
            return be(e, "nextSibling")
        },
        prevAll: function (e) {
            return be(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return be(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return be(e, "previousSibling", n)
        },
        siblings: function (e) {
            return we((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return we(e.firstChild)
        },
        contents: function (e) {
            return i(e, "iframe") ? e.contentDocument : (i(e, "template") && (e = e.content || e), he.merge([], e.childNodes))
        }
    }, function (e, t) {
        he.fn[e] = function (n, r) {
            var i = he.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = he.filter(r, i)), this.length > 1 && (De[e] || he.uniqueSort(i), Ne.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var je = /[^\x20\t\r\n\f]+/g;
    he.Callbacks = function (e) {
        e = "string" == typeof e ? s(e) : he.extend({}, e);
        var t, n, r, i, o = [],
            a = [],
            u = -1,
            l = function () {
                for (i = i || e.once, r = t = !0; a.length; u = -1)
                    for (n = a.shift(); ++u < o.length;) !1 === o[u].apply(n[0], n[1]) && e.stopOnFalse && (u = o.length, n = !1);
                e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
            },
            c = {
                add: function () {
                    return o && (n && !t && (u = o.length - 1, a.push(n)), function t(n) {
                        he.each(n, function (n, r) {
                            he.isFunction(r) ? e.unique && c.has(r) || o.push(r) : r && r.length && "string" !== he.type(r) && t(r)
                        })
                    }(arguments), n && !t && l()), this
                },
                remove: function () {
                    return he.each(arguments, function (e, t) {
                        for (var n;
                            (n = he.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= u && u--
                    }), this
                },
                has: function (e) {
                    return e ? he.inArray(e, o) > -1 : o.length > 0
                },
                empty: function () {
                    return o && (o = []), this
                },
                disable: function () {
                    return i = a = [], o = n = "", this
                },
                disabled: function () {
                    return !o
                },
                lock: function () {
                    return i = a = [], n || t || (o = n = ""), this
                },
                locked: function () {
                    return !!i
                },
                fireWith: function (e, n) {
                    return i || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || l()), this
                },
                fire: function () {
                    return c.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!r
                }
            };
        return c
    }, he.extend({
        Deferred: function (t) {
            var n = [
                    ["notify", "progress", he.Callbacks("memory"), he.Callbacks("memory"), 2],
                    ["resolve", "done", he.Callbacks("once memory"), he.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", he.Callbacks("once memory"), he.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                i = {
                    state: function () {
                        return r
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function (e) {
                        return i.then(null, e)
                    },
                    pipe: function () {
                        var e = arguments;
                        return he.Deferred(function (t) {
                            he.each(n, function (n, r) {
                                var i = he.isFunction(e[r[4]]) && e[r[4]];
                                o[r[1]](function () {
                                    var e = i && i.apply(this, arguments);
                                    e && he.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function (t, r, i) {
                        function o(t, n, r, i) {
                            return function () {
                                var s = this,
                                    c = arguments,
                                    f = function () {
                                        var e, f;
                                        if (!(t < a)) {
                                            if ((e = r.apply(s, c)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            f = e && ("object" == typeof e || "function" == typeof e) && e.then, he.isFunction(f) ? i ? f.call(e, o(a, n, u, i), o(a, n, l, i)) : (a++, f.call(e, o(a, n, u, i), o(a, n, l, i), o(a, n, u, n.notifyWith))) : (r !== u && (s = void 0, c = [e]), (i || n.resolveWith)(s, c))
                                        }
                                    },
                                    p = i ? f : function () {
                                        try {
                                            f()
                                        } catch (e) {
                                            he.Deferred.exceptionHook && he.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= a && (r !== l && (s = void 0, c = [e]), n.rejectWith(s, c))
                                        }
                                    };
                                t ? p() : (he.Deferred.getStackHook && (p.stackTrace = he.Deferred.getStackHook()), e.setTimeout(p))
                            }
                        }
                        var a = 0;
                        return he.Deferred(function (e) {
                            n[0][3].add(o(0, e, he.isFunction(i) ? i : u, e.notifyWith)), n[1][3].add(o(0, e, he.isFunction(t) ? t : u)), n[2][3].add(o(0, e, he.isFunction(r) ? r : l))
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? he.extend(e, i) : i
                    }
                },
                o = {};
            return he.each(n, function (e, t) {
                var a = t[2],
                    s = t[5];
                i[t[1]] = a.add, s && a.add(function () {
                    r = s
                }, n[3 - e][2].disable, n[0][2].lock), a.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function (e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = re.call(arguments),
                o = he.Deferred(),
                a = function (e) {
                    return function (n) {
                        r[e] = this, i[e] = arguments.length > 1 ? re.call(arguments) : n, --t || o.resolveWith(r, i)
                    }
                };
            if (t <= 1 && (c(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || he.isFunction(i[n] && i[n].then))) return o.then();
            for (; n--;) c(i[n], a(n), o.reject);
            return o.promise()
        }
    });
    var Ae = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    he.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && Ae.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, he.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var qe = he.Deferred();
    he.fn.ready = function (e) {
        return qe.then(e).catch(function (e) {
            he.readyException(e)
        }), this
    }, he.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
            (!0 === e ? --he.readyWait : he.isReady) || (he.isReady = !0, !0 !== e && --he.readyWait > 0 || qe.resolveWith(te, [he]))
        }
    }), he.ready.then = qe.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(he.ready) : (te.addEventListener("DOMContentLoaded", f), e.addEventListener("load", f));
    var Le = function (e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === he.type(n)) {
                i = !0;
                for (s in n) Le(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== r && (i = !0, he.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                    return l.call(he(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        He = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    p.uid = 1, p.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, He(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[he.camelCase(t)] = n;
            else
                for (r in t) i[he.camelCase(r)] = t[r];
            return i
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][he.camelCase(t)]
        },
        access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    Array.isArray(t) ? t = t.map(he.camelCase) : (t = he.camelCase(t), t = t in r ? [t] : t.match(je) || []), n = t.length;
                    for (; n--;) delete r[t[n]]
                }(void 0 === t || he.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !he.isEmptyObject(t)
        }
    };
    var Fe = new p,
        Oe = new p,
        Pe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Re = /[A-Z]/g;
    he.extend({
        hasData: function (e) {
            return Oe.hasData(e) || Fe.hasData(e)
        },
        data: function (e, t, n) {
            return Oe.access(e, t, n)
        },
        removeData: function (e, t) {
            Oe.remove(e, t)
        },
        _data: function (e, t, n) {
            return Fe.access(e, t, n)
        },
        _removeData: function (e, t) {
            Fe.remove(e, t)
        }
    }), he.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = Oe.get(o), 1 === o.nodeType && !Fe.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = he.camelCase(r.slice(5)), h(o, r, i[r]));
                    Fe.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                Oe.set(this, e)
            }) : Le(this, function (t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = Oe.get(o, e))) return n;
                    if (void 0 !== (n = h(o, e))) return n
                } else this.each(function () {
                    Oe.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                Oe.remove(this, e)
            })
        }
    }), he.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Fe.get(e, t), n && (!r || Array.isArray(n) ? r = Fe.access(e, t, he.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = he.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = he._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
                he.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Fe.get(e, n) || Fe.access(e, n, {
                empty: he.Callbacks("once memory").add(function () {
                    Fe.remove(e, [t + "queue", n])
                })
            })
        }
    }), he.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? he.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = he.queue(this, e, t);
                he._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && he.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                he.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, r = 1,
                i = he.Deferred(),
                o = this,
                a = this.length,
                s = function () {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Fe.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var Me = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ie = new RegExp("^(?:([+-])=|)(" + Me + ")([a-z%]*)$", "i"),
        We = ["Top", "Right", "Bottom", "Left"],
        $e = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && he.contains(e.ownerDocument, e) && "none" === he.css(e, "display")
        },
        Be = function (e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        },
        _e = {};
    he.fn.extend({
        show: function () {
            return m(this, !0)
        },
        hide: function () {
            return m(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                $e(this) ? he(this).show() : he(this).hide()
            })
        }
    });
    var ze = /^(?:checkbox|radio)$/i,
        Xe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Ue = /^$|\/(?:java|ecma)script/i,
        Ve = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ve.optgroup = Ve.option, Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td;
    var Ge = /<|&#?\w+;/;
    ! function () {
        var e = te.createDocumentFragment().appendChild(te.createElement("div")),
            t = te.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), pe.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", pe.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Ye = te.documentElement,
        Qe = /^key/,
        Je = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ke = /^([^.]*)(?:\.(.+)|)/;
    he.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Fe.get(e);
            if (v)
                for (n.handler && (o = n, n = o.handler, i = o.selector), i && he.find.matchesSelector(Ye, i), n.guid || (n.guid = he.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function (t) {
                        return void 0 !== he && he.event.triggered !== t.type ? he.event.dispatch.apply(e, arguments) : void 0
                    }), l = (t = (t || "").match(je) || [""]).length; l--;) s = Ke.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d && (f = he.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = he.event.special[d] || {}, c = he.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && he.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), he.event.global[d] = !0)
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Fe.hasData(e) && Fe.get(e);
            if (v && (u = v.events)) {
                for (l = (t = (t || "").match(je) || [""]).length; l--;)
                    if (s = Ke.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        for (f = he.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || he.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) he.event.remove(e, d + t[l], n, r, !0);
                he.isEmptyObject(u) && Fe.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t, n, r, i, o, a, s = he.event.fix(e),
                u = new Array(arguments.length),
                l = (Fe.get(this, "events") || {})[s.type] || [],
                c = he.event.special[s.type] || {};
            for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                for (a = he.event.handlers.call(this, s, l), t = 0;
                    (i = a[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((he.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s), s.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) r = t[n], i = r.selector + " ", void 0 === a[i] && (a[i] = r.needsContext ? he(i, this).index(l) > -1 : he.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    } return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function (e, t) {
            Object.defineProperty(he.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: he.isFunction(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function (e) {
            return e[he.expando] ? e : new he.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== C() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === C() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && i(this, "input")) return this.click(), !1
                },
                _default: function (e) {
                    return i(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, he.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, he.Event = function (e, t) {
        return this instanceof he.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? w : T, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && he.extend(this, t), this.timeStamp = e && e.timeStamp || he.now(), void(this[he.expando] = !0)) : new he.Event(e, t)
    }, he.Event.prototype = {
        constructor: he.Event,
        isDefaultPrevented: T,
        isPropagationStopped: T,
        isImmediatePropagationStopped: T,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = w, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = w, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = w, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, he.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && Qe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Je.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, he.event.addProp), he.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        he.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || he.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), he.fn.extend({
        on: function (e, t, n, r) {
            return E(this, e, t, n, r)
        },
        one: function (e, t, n, r) {
            return E(this, e, t, n, r, 1)
        },
        off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, he(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = T), this.each(function () {
                he.event.remove(this, e, n, t)
            })
        }
    });
    var Ze = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        et = /<script|<style|<link/i,
        tt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        nt = /^true\/(.*)/,
        rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    he.extend({
        htmlPrefilter: function (e) {
            return e.replace(Ze, "<$1></$2>")
        },
        clone: function (e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0),
                u = he.contains(e.ownerDocument, e);
            if (!(pe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e)))
                for (a = y(s), o = y(e), r = 0, i = o.length; r < i; r++) j(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || y(e), a = a || y(s), r = 0, i = o.length; r < i; r++) D(o[r], a[r]);
                else D(e, s);
            return (a = y(s, "script")).length > 0 && x(a, !u && y(e, "script")), s
        },
        cleanData: function (e) {
            for (var t, n, r, i = he.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (He(n)) {
                    if (t = n[Fe.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? he.event.remove(n, r) : he.removeEvent(n, r, t.handle);
                        n[Fe.expando] = void 0
                    }
                    n[Oe.expando] && (n[Oe.expando] = void 0)
                }
        }
    }), he.fn.extend({
        detach: function (e) {
            return q(this, e, !0)
        },
        remove: function (e) {
            return q(this, e)
        },
        text: function (e) {
            return Le(this, function (e) {
                return void 0 === e ? he.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return A(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || k(this, e).appendChild(e)
            })
        },
        prepend: function () {
            return A(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = k(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return A(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return A(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (he.cleanData(y(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return he.clone(this, e, t)
            })
        },
        html: function (e) {
            return Le(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !et.test(e) && !Ve[(Xe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = he.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (he.cleanData(y(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = [];
            return A(this, arguments, function (t) {
                var n = this.parentNode;
                he.inArray(this, e) < 0 && (he.cleanData(y(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), he.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        he.fn[e] = function (e) {
            for (var n, r = [], i = he(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), he(i[a])[t](n), oe.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var it = /^margin/,
        ot = new RegExp("^(" + Me + ")(?!px)[a-z%]+$", "i"),
        at = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        };
    ! function () {
        function t() {
            if (s) {
                s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Ye.appendChild(a);
                var t = e.getComputedStyle(s);
                n = "1%" !== t.top, o = "2px" === t.marginLeft, r = "4px" === t.width, s.style.marginRight = "50%", i = "4px" === t.marginRight, Ye.removeChild(a), s = null
            }
        }
        var n, r, i, o, a = te.createElement("div"),
            s = te.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", pe.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), he.extend(pe, {
            pixelPosition: function () {
                return t(), n
            },
            boxSizingReliable: function () {
                return t(), r
            },
            pixelMarginRight: function () {
                return t(), i
            },
            reliableMarginLeft: function () {
                return t(), o
            }
        }))
    }();
    var st = /^(none|table(?!-c[ea]).+)/,
        ut = /^--/,
        lt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ct = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ft = ["Webkit", "Moz", "ms"],
        pt = te.createElement("div").style;
    he.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = L(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = he.camelCase(t),
                    u = ut.test(t),
                    l = e.style;
                return u || (t = O(s)), a = he.cssHooks[t] || he.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t] : ("string" === (o = typeof n) && (i = Ie.exec(n)) && i[1] && (n = g(e, t, i), o = "number"), void(null != n && n === n && ("number" === o && (n += i && i[3] || (he.cssNumber[s] ? "" : "px")), pe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))))
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = he.camelCase(t);
            return ut.test(t) || (t = O(s)), (a = he.cssHooks[t] || he.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = L(e, t, r)), "normal" === i && t in ct && (i = ct[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), he.each(["height", "width"], function (e, t) {
        he.cssHooks[t] = {
            get: function (e, n, r) {
                if (n) return !st.test(he.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? M(e, t, r) : Be(e, lt, function () {
                    return M(e, t, r)
                })
            },
            set: function (e, n, r) {
                var i, o = r && at(e),
                    a = r && R(e, t, r, "border-box" === he.css(e, "boxSizing", !1, o), o);
                return a && (i = Ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = he.css(e, t)), P(e, n, a)
            }
        }
    }), he.cssHooks.marginLeft = H(pe.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(L(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), he.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        he.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + We[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, it.test(e) || (he.cssHooks[e + t].set = P)
    }), he.fn.extend({
        css: function (e, t) {
            return Le(this, function (e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = at(e), i = t.length; a < i; a++) o[t[a]] = he.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? he.style(e, t, n) : he.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), he.Tween = I, I.prototype = {
        constructor: I,
        init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || he.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (he.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = I.propHooks[this.prop];
            return e && e.get ? e.get(this) : I.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = I.propHooks[this.prop];
            return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this
        }
    }, I.prototype.init.prototype = I.prototype, I.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function (e) {
                he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, I.propHooks.scrollTop = I.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, he.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, he.fx = I.prototype.init, he.fx.step = {};
    var dt, ht, gt = /^(?:toggle|show|hide)$/,
        vt = /queueHooks$/;
    he.Animation = he.extend(X, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return g(n.elem, e, Ie.exec(t), n), n
                }]
            },
            tweener: function (e, t) {
                he.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(je);
                for (var n, r = 0, i = e.length; r < i; r++) n = e[r], X.tweeners[n] = X.tweeners[n] || [], X.tweeners[n].unshift(t)
            },
            prefilters: [function (e, t, n) {
                var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                    p = this,
                    d = {},
                    h = e.style,
                    g = e.nodeType && $e(e),
                    v = Fe.get(e, "fxshow");
                n.queue || (null == (a = he._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                    a.unqueued || s()
                }), a.unqueued++, p.always(function () {
                    p.always(function () {
                        a.unqueued--, he.queue(e, "fx").length || a.empty.fire()
                    })
                }));
                for (r in t)
                    if (i = t[r], gt.test(i)) {
                        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                            if ("show" !== i || !v || void 0 === v[r]) continue;
                            g = !0
                        }
                        d[r] = v && v[r] || he.style(e, r)
                    } if ((u = !he.isEmptyObject(t)) || !he.isEmptyObject(d)) {
                    f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Fe.get(e, "display")), "none" === (c = he.css(e, "display")) && (l ? c = l : (m([e], !0), l = e.style.display || l, c = he.css(e, "display"), m([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === he.css(e, "float") && (u || (p.done(function () {
                        h.display = l
                    }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), u = !1;
                    for (r in d) u || (v ? "hidden" in v && (g = v.hidden) : v = Fe.access(e, "fxshow", {
                        display: l
                    }), o && (v.hidden = !g), g && m([e], !0), p.done(function () {
                        g || m([e]), Fe.remove(e, "fxshow");
                        for (r in d) he.style(e, r, d[r])
                    })), u = _(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
                }
            }],
            prefilter: function (e, t) {
                t ? X.prefilters.unshift(e) : X.prefilters.push(e)
            }
        }), he.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? he.extend({}, e) : {
                complete: n || !n && t || he.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !he.isFunction(t) && t
            };
            return he.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in he.fx.speeds ? r.duration = he.fx.speeds[r.duration] : r.duration = he.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                he.isFunction(r.old) && r.old.call(this), r.queue && he.dequeue(this, r.queue)
            }, r
        }, he.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter($e).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function (e, t, n, r) {
                var i = he.isEmptyObject(e),
                    o = he.speed(t, n, r),
                    a = function () {
                        var t = X(this, he.extend({}, e), o);
                        (i || Fe.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = he.timers,
                        a = Fe.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && vt.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || he.dequeue(this, e)
                })
            },
            finish: function (e) {
                return !1 !== e && (e = e || "fx"), this.each(function () {
                    var t, n = Fe.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = he.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, he.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), he.each(["toggle", "show", "hide"], function (e, t) {
            var n = he.fn[t];
            he.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(B(t, !0), e, r, i)
            }
        }), he.each({
            slideDown: B("show"),
            slideUp: B("hide"),
            slideToggle: B("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            he.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), he.timers = [], he.fx.tick = function () {
            var e, t = 0,
                n = he.timers;
            for (dt = he.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || he.fx.stop(), dt = void 0
        }, he.fx.timer = function (e) {
            he.timers.push(e), he.fx.start()
        }, he.fx.interval = 13, he.fx.start = function () {
            ht || (ht = !0, W())
        }, he.fx.stop = function () {
            ht = null
        }, he.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, he.fn.delay = function (t, n) {
            return t = he.fx ? he.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function () {
                    e.clearTimeout(i)
                }
            })
        },
        function () {
            var e = te.createElement("input"),
                t = te.createElement("select").appendChild(te.createElement("option"));
            e.type = "checkbox", pe.checkOn = "" !== e.value, pe.optSelected = t.selected, (e = te.createElement("input")).value = "t", e.type = "radio", pe.radioValue = "t" === e.value
        }();
    var mt, yt = he.expr.attrHandle;
    he.fn.extend({
        attr: function (e, t) {
            return Le(this, he.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                he.removeAttr(this, e)
            })
        }
    }), he.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? he.prop(e, t, n) : (1 === o && he.isXMLDoc(e) || (i = he.attrHooks[t.toLowerCase()] || (he.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void he.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = he.find.attr(e, t), null == r ? void 0 : r))
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!pe.radioValue && "radio" === t && i(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, r = 0,
                i = t && t.match(je);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), mt = {
        set: function (e, t, n) {
            return !1 === t ? he.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, he.each(he.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = yt[t] || he.find.attr;
        yt[t] = function (e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = yt[a], yt[a] = i, i = null != n(e, t, r) ? a : null, yt[a] = o), i
        }
    });
    var xt = /^(?:input|select|textarea|button)$/i,
        bt = /^(?:a|area)$/i;
    he.fn.extend({
        prop: function (e, t) {
            return Le(this, he.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[he.propFix[e] || e]
            })
        }
    }), he.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && he.isXMLDoc(e) || (t = he.propFix[t] || t, i = he.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = he.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : xt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), pe.optSelected || (he.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        he.propFix[this.toLowerCase()] = this
    }), he.fn.extend({
        addClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (he.isFunction(e)) return this.each(function (t) {
                he(this).addClass(e.call(this, t, V(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(je) || []; n = this[u++];)
                    if (i = V(n), r = 1 === n.nodeType && " " + U(i) + " ") {
                        for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = U(r)) && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (he.isFunction(e)) return this.each(function (t) {
                he(this).removeClass(e.call(this, t, V(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(je) || []; n = this[u++];)
                    if (i = V(n), r = 1 === n.nodeType && " " + U(i) + " ") {
                        for (a = 0; o = t[a++];)
                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                        i !== (s = U(r)) && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : he.isFunction(e) ? this.each(function (n) {
                he(this).toggleClass(e.call(this, n, V(this), t), t)
            }) : this.each(function () {
                var t, r, i, o;
                if ("string" === n)
                    for (r = 0, i = he(this), o = e.match(je) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = V(this)) && Fe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Fe.get(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + U(V(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var wt = /\r/g;
    he.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = he.isFunction(e), this.each(function (n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, he(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = he.map(i, function (e) {
                    return null == e ? "" : e + ""
                })), (t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = he.valHooks[i.type] || he.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(wt, "") : null == n ? "" : n)) : void 0
        }
    }), he.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = he.find.attr(e, "value");
                    return null != t ? t : U(he.text(e))
                }
            },
            select: {
                get: function (e) {
                    var t, n, r, o = e.options,
                        a = e.selectedIndex,
                        s = "select-one" === e.type,
                        u = s ? null : [],
                        l = s ? a + 1 : o.length;
                    for (r = a < 0 ? l : s ? a : 0; r < l; r++)
                        if (((n = o[r]).selected || r === a) && !n.disabled && (!n.parentNode.disabled || !i(n.parentNode, "optgroup"))) {
                            if (t = he(n).val(), s) return t;
                            u.push(t)
                        } return u
                },
                set: function (e, t) {
                    for (var n, r, i = e.options, o = he.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = he.inArray(he.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), he.each(["radio", "checkbox"], function () {
        he.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = he.inArray(he(e).val(), t) > -1
            }
        }, pe.checkOn || (he.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Tt = /^(?:focusinfocus|focusoutblur)$/;
    he.extend(he.event, {
        trigger: function (t, n, r, i) {
            var o, a, s, u, l, c, f, p = [r || te],
                d = le.call(t, "type") ? t.type : t,
                h = le.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = r = r || te, 3 !== r.nodeType && 8 !== r.nodeType && !Tt.test(d + he.event.triggered) && (d.indexOf(".") > -1 && (h = d.split("."), d = h.shift(), h.sort()), l = d.indexOf(":") < 0 && "on" + d, t = t[he.expando] ? t : new he.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : he.makeArray(n, [t]), f = he.event.special[d] || {}, i || !f.trigger || !1 !== f.trigger.apply(r, n))) {
                if (!i && !f.noBubble && !he.isWindow(r)) {
                    for (u = f.delegateType || d, Tt.test(u + d) || (a = a.parentNode); a; a = a.parentNode) p.push(a), s = a;
                    s === (r.ownerDocument || te) && p.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0;
                    (a = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || d, (c = (Fe.get(a, "events") || {})[t.type] && Fe.get(a, "handle")) && c.apply(a, n), (c = l && a[l]) && c.apply && He(a) && (t.result = c.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = d, i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(p.pop(), n) || !He(r) || l && he.isFunction(r[d]) && !he.isWindow(r) && ((s = r[l]) && (r[l] = null), he.event.triggered = d, r[d](), he.event.triggered = void 0, s && (r[l] = s)), t.result
            }
        },
        simulate: function (e, t, n) {
            var r = he.extend(new he.Event, n, {
                type: e,
                isSimulated: !0
            });
            he.event.trigger(r, null, t)
        }
    }), he.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                he.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return he.event.trigger(e, t, n, !0)
        }
    }), he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        he.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), he.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), pe.focusin = "onfocusin" in e, pe.focusin || he.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            he.event.simulate(t, e.target, he.event.fix(e))
        };
        he.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this,
                    i = Fe.access(r, t);
                i || r.addEventListener(e, n, !0), Fe.access(r, t, (i || 0) + 1)
            },
            teardown: function () {
                var r = this.ownerDocument || this,
                    i = Fe.access(r, t) - 1;
                i ? Fe.access(r, t, i) : (r.removeEventListener(e, n, !0), Fe.remove(r, t))
            }
        }
    });
    var Ct = e.location,
        Et = he.now(),
        kt = /\?/;
    he.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + t), n
    };
    var St = /\[\]$/,
        Nt = /\r?\n/g,
        Dt = /^(?:submit|button|image|reset|file)$/i,
        jt = /^(?:input|select|textarea|keygen)/i;
    he.param = function (e, t) {
        var n, r = [],
            i = function (e, t) {
                var n = he.isFunction(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !he.isPlainObject(e)) he.each(e, function () {
            i(this.name, this.value)
        });
        else
            for (n in e) G(n, e[n], t, i);
        return r.join("&")
    }, he.fn.extend({
        serialize: function () {
            return he.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = he.prop(this, "elements");
                return e ? he.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !he(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !ze.test(e))
            }).map(function (e, t) {
                var n = he(this).val();
                return null == n ? null : Array.isArray(n) ? he.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Nt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Nt, "\r\n")
                }
            }).get()
        }
    });
    var At = /%20/g,
        qt = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ot = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Rt = {},
        Mt = {},
        It = "*/".concat("*"),
        Wt = te.createElement("a");
    Wt.href = Ct.href, he.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: Ft.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": he.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? J(J(e, he.ajaxSettings), t) : J(he.ajaxSettings, e)
        },
        ajaxPrefilter: Y(Rt),
        ajaxTransport: Y(Mt),
        ajax: function (t, n) {
            function r(t, n, r, s) {
                var l, p, d, b, w, T = n;
                c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", C.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = K(h, C, r)), b = Z(h, b, C, l), l ? (h.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (he.lastModified[o] = w), (w = C.getResponseHeader("etag")) && (he.etag[o] = w)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, p = b.data, d = b.error, l = !d)) : (d = T, !t && T || (T = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || T) + "", l ? m.resolveWith(g, [p, T, C]) : m.rejectWith(g, [C, T, d]), C.statusCode(x), x = void 0, f && v.trigger(l ? "ajaxSuccess" : "ajaxError", [C, h, l ? p : d]), y.fireWith(g, [C, T]), f && (v.trigger("ajaxComplete", [C, h]), --he.active || he.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, u, l, c, f, p, d, h = he.ajaxSetup({}, n),
                g = h.context || h,
                v = h.context && (g.nodeType || g.jquery) ? he(g) : he.event,
                m = he.Deferred(),
                y = he.Callbacks("once memory"),
                x = h.statusCode || {},
                b = {},
                w = {},
                T = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (c) {
                            if (!s)
                                for (s = {}; t = Ht.exec(a);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return c ? a : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return null == c && (h.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (c) C.always(e[C.status]);
                            else
                                for (t in e) x[t] = [x[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || T;
                        return i && i.abort(t), r(0, t), this
                    }
                };
            if (m.promise(C), h.url = ((t || h.url || Ct.href) + "").replace(Pt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(je) || [""], null == h.crossDomain) {
                l = te.createElement("a");
                try {
                    l.href = h.url, l.href = l.href, h.crossDomain = Wt.protocol + "//" + Wt.host != l.protocol + "//" + l.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = he.param(h.data, h.traditional)), Q(Rt, h, n, C), c) return C;
            (f = he.event && h.global) && 0 == he.active++ && he.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Ot.test(h.type), o = h.url.replace(qt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(At, "+")) : (d = h.url.slice(o.length), h.data && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Lt, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (he.lastModified[o] && C.setRequestHeader("If-Modified-Since", he.lastModified[o]), he.etag[o] && C.setRequestHeader("If-None-Match", he.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + It + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers) C.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, C, h) || c)) return C.abort();
            if (T = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), i = Q(Mt, h, n, C)) {
                if (C.readyState = 1, f && v.trigger("ajaxSend", [C, h]), c) return C;
                h.async && h.timeout > 0 && (u = e.setTimeout(function () {
                    C.abort("timeout")
                }, h.timeout));
                try {
                    c = !1, i.send(b, r)
                } catch (e) {
                    if (c) throw e;
                    r(-1, e)
                }
            } else r(-1, "No Transport");
            return C
        },
        getJSON: function (e, t, n) {
            return he.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return he.get(e, void 0, t, "script")
        }
    }), he.each(["get", "post"], function (e, t) {
        he[t] = function (e, n, r, i) {
            return he.isFunction(n) && (i = i || r, r = n, n = void 0), he.ajax(he.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, he.isPlainObject(e) && e))
        }
    }), he._evalUrl = function (e) {
        return he.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, he.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (he.isFunction(e) && (e = e.call(this[0])), t = he(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function (e) {
            return he.isFunction(e) ? this.each(function (t) {
                he(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = he(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = he.isFunction(e);
            return this.each(function (n) {
                he(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                he(this).replaceWith(this.childNodes)
            }), this
        }
    }), he.expr.pseudos.hidden = function (e) {
        return !he.expr.pseudos.visible(e)
    }, he.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, he.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var $t = {
            0: 200,
            1223: 204
        },
        Bt = he.ajaxSettings.xhr();
    pe.cors = !!Bt && "withCredentials" in Bt, pe.ajax = Bt = !!Bt, he.ajaxTransport(function (t) {
        var n, r;
        if (pe.cors || Bt && !t.crossDomain) return {
            send: function (i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (a in i) s.setRequestHeader(a, i[a]);
                n = function (e) {
                    return function () {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o($t[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
                    4 === s.readyState && e.setTimeout(function () {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function () {
                n && n()
            }
        }
    }), he.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), he.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return he.globalEval(e), e
            }
        }
    }), he.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), he.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (r, i) {
                    t = he("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), te.head.appendChild(t[0])
                },
                abort: function () {
                    n && n()
                }
            }
        }
    });
    var _t = [],
        zt = /(=)\?(?=&|$)|\?\?/;
    he.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = _t.pop() || he.expando + "_" + Et++;
            return this[e] = !0, e
        }
    }), he.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (zt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && zt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = he.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(zt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return a || he.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            a = arguments
        }, r.always(function () {
            void 0 === o ? he(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, _t.push(i)), a && he.isFunction(o) && o(a[0]), a = o = void 0
        }), "script"
    }), pe.createHTMLDocument = function () {
        var e = te.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), he.parseHTML = function (e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var r, i, o;
        return t || (pe.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = te.location.href, t.head.appendChild(r)) : t = te), i = Ce.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = b([e], t, o), o && o.length && he(o).remove(), he.merge([], i.childNodes))
    }, he.fn.load = function (e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = U(e.slice(s)), e = e.slice(0, s)), he.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && he.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(r ? he("<div>").append(he.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        he.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), he.expr.pseudos.animated = function (e) {
        return he.grep(he.timers, function (t) {
            return e === t.elem
        }).length
    }, he.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, u, l = he.css(e, "position"),
                c = he(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = he.css(e, "top"), u = he.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (r = c.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), he.isFunction(t) && (t = t.call(e, n, he.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, he.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                he.offset.setOffset(this, e, t)
            });
            var t, n, r, i, o = this[0];
            return o ? o.getClientRects().length ? (r = o.getBoundingClientRect(), t = o.ownerDocument, n = t.documentElement, i = t.defaultView, {
                top: r.top + i.pageYOffset - n.clientTop,
                left: r.left + i.pageXOffset - n.clientLeft
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === he.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), i(e[0], "html") || (r = e.offset()), r = {
                    top: r.top + he.css(e[0], "borderTopWidth", !0),
                    left: r.left + he.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - r.top - he.css(n, "marginTop", !0),
                    left: t.left - r.left - he.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === he.css(e, "position");) e = e.offsetParent;
                return e || Ye
            })
        }
    }), he.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var n = "pageYOffset" === t;
        he.fn[e] = function (r) {
            return Le(this, function (e, r, i) {
                var o;
                return he.isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i ? o ? o[t] : e[r] : void(o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
            }, e, r, arguments.length)
        }
    }), he.each(["top", "left"], function (e, t) {
        he.cssHooks[t] = H(pe.pixelPosition, function (e, n) {
            if (n) return n = L(e, t), ot.test(n) ? he(e).position()[t] + "px" : n
        })
    }), he.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        he.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, r) {
            he.fn[r] = function (i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                return Le(this, function (t, n, i) {
                    var o;
                    return he.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? he.css(t, n, s) : he.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }), he.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), he.holdReady = function (e) {
        e ? he.readyWait++ : he.ready(!0)
    }, he.isArray = Array.isArray, he.parseJSON = JSON.parse, he.nodeName = i, "function" == typeof define && define.amd && define("jquery", [], function () {
        return he
    });
    var Xt = e.jQuery,
        Ut = e.$;
    return he.noConflict = function (t) {
        return e.$ === he && (e.$ = Ut), t && e.jQuery === he && (e.jQuery = Xt), he
    }, t || (e.jQuery = e.$ = he), he
});
! function (e) {
    "use strict";

    function t(e) {
        var t = e.length,
            a = r.type(e);
        return "function" !== a && !r.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === a || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }
    if (!e.jQuery) {
        var r = function (e, t) {
            return new r.fn.init(e, t)
        };
        r.isWindow = function (e) {
            return e && e === e.window
        }, r.type = function (e) {
            return e ? "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e : e + ""
        }, r.isArray = Array.isArray || function (e) {
            return "array" === r.type(e)
        }, r.isPlainObject = function (e) {
            var t;
            if (!e || "object" !== r.type(e) || e.nodeType || r.isWindow(e)) return !1;
            try {
                if (e.constructor && !i.call(e, "constructor") && !i.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            for (t in e);
            return void 0 === t || i.call(e, t)
        }, r.each = function (e, r, a) {
            var n = 0,
                i = e.length,
                o = t(e);
            if (a) {
                if (o)
                    for (; n < i && !1 !== r.apply(e[n], a); n++);
                else
                    for (n in e)
                        if (e.hasOwnProperty(n) && !1 === r.apply(e[n], a)) break
            } else if (o)
                for (; n < i && !1 !== r.call(e[n], n, e[n]); n++);
            else
                for (n in e)
                    if (e.hasOwnProperty(n) && !1 === r.call(e[n], n, e[n])) break;
            return e
        }, r.data = function (e, t, n) {
            if (void 0 === n) {
                var i = e[r.expando],
                    o = i && a[i];
                if (void 0 === t) return o;
                if (o && t in o) return o[t]
            } else if (void 0 !== t) {
                var s = e[r.expando] || (e[r.expando] = ++r.uuid);
                return a[s] = a[s] || {}, a[s][t] = n, n
            }
        }, r.removeData = function (e, t) {
            var n = e[r.expando],
                i = n && a[n];
            i && (t ? r.each(t, function (e, t) {
                delete i[t]
            }) : delete a[n])
        }, r.extend = function () {
            var e, t, a, n, i, o, s = arguments[0] || {},
                l = 1,
                u = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== r.type(s) && (s = {}), l === u && (s = this, l--); l < u; l++)
                if (i = arguments[l])
                    for (n in i) i.hasOwnProperty(n) && (e = s[n], s !== (a = i[n]) && (c && a && (r.isPlainObject(a) || (t = r.isArray(a))) ? (t ? (t = !1, o = e && r.isArray(e) ? e : []) : o = e && r.isPlainObject(e) ? e : {}, s[n] = r.extend(c, o, a)) : void 0 !== a && (s[n] = a)));
            return s
        }, r.queue = function (e, a, n) {
            if (e) {
                a = (a || "fx") + "queue";
                var i = r.data(e, a);
                return n ? (!i || r.isArray(n) ? i = r.data(e, a, function (e, r) {
                    var a = r || [];
                    return e && (t(Object(e)) ? function (e, t) {
                        for (var r = +t.length, a = 0, n = e.length; a < r;) e[n++] = t[a++];
                        if (r !== r)
                            for (; void 0 !== t[a];) e[n++] = t[a++];
                        e.length = n
                    }(a, "string" == typeof e ? [e] : e) : [].push.call(a, e)), a
                }(n)) : i.push(n), i) : i || []
            }
        }, r.dequeue = function (e, t) {
            r.each(e.nodeType ? [e] : e, function (e, a) {
                t = t || "fx";
                var n = r.queue(a, t),
                    i = n.shift();
                "inprogress" === i && (i = n.shift()), i && ("fx" === t && n.unshift("inprogress"), i.call(a, function () {
                    r.dequeue(a, t)
                }))
            })
        }, r.fn = r.prototype = {
            init: function (e) {
                if (e.nodeType) return this[0] = e, this;
                throw new Error("Not a DOM node.")
            },
            offset: function () {
                var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            },
            position: function () {
                var e = this[0],
                    t = function (e) {
                        for (var t = e.offsetParent; t && "html" !== t.nodeName.toLowerCase() && t.style && "static" === t.style.position;) t = t.offsetParent;
                        return t || document
                    }(e),
                    a = this.offset(),
                    n = /^(?:body|html)$/i.test(t.nodeName) ? {
                        top: 0,
                        left: 0
                    } : r(t).offset();
                return a.top -= parseFloat(e.style.marginTop) || 0, a.left -= parseFloat(e.style.marginLeft) || 0, t.style && (n.top += parseFloat(t.style.borderTopWidth) || 0, n.left += parseFloat(t.style.borderLeftWidth) || 0), {
                    top: a.top - n.top,
                    left: a.left - n.left
                }
            }
        };
        var a = {};
        r.expando = "velocity" + (new Date).getTime(), r.uuid = 0;
        for (var n = {}, i = n.hasOwnProperty, o = n.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) n["[object " + s[l] + "]"] = s[l].toLowerCase();
        r.fn.init.prototype = r.fn, e.Velocity = {
            Utilities: r
        }
    }
}(window),
function (e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
}(function () {
    "use strict";
    return function (e, t, r, a) {
        function n(e) {
            for (var t = -1, r = e ? e.length : 0, a = []; ++t < r;) {
                var n = e[t];
                n && a.push(n)
            }
            return a
        }

        function i(e) {
            return x.isWrapped(e) ? e = v.call(e) : x.isNode(e) && (e = [e]), e
        }

        function o(e) {
            var t = g.data(e, "velocity");
            return null === t ? a : t
        }

        function s(e, t) {
            var r = o(e);
            r && r.delayTimer && !r.delayPaused && (r.delayRemaining = r.delay - t + r.delayBegin, r.delayPaused = !0, clearTimeout(r.delayTimer.setTimeout))
        }

        function l(e, t) {
            var r = o(e);
            r && r.delayTimer && r.delayPaused && (r.delayPaused = !1, r.delayTimer.setTimeout = setTimeout(r.delayTimer.next, r.delayRemaining))
        }

        function u(e) {
            return function (t) {
                return Math.round(t * e) * (1 / e)
            }
        }

        function c(e, r, a, n) {
            function i(e, t) {
                return 1 - 3 * t + 3 * e
            }

            function o(e, t) {
                return 3 * t - 6 * e
            }

            function s(e) {
                return 3 * e
            }

            function l(e, t, r) {
                return ((i(t, r) * e + o(t, r)) * e + s(t)) * e
            }

            function u(e, t, r) {
                return 3 * i(t, r) * e * e + 2 * o(t, r) * e + s(t)
            }

            function c(t, r) {
                for (var n = 0; n < m; ++n) {
                    var i = u(r, e, a);
                    if (0 === i) return r;
                    r -= (l(r, e, a) - t) / i
                }
                return r
            }

            function p() {
                for (var t = 0; t < b; ++t) P[t] = l(t * x, e, a)
            }

            function f(t, r, n) {
                var i, o, s = 0;
                do {
                    (i = l(o = r + (n - r) / 2, e, a) - t) > 0 ? n = o : r = o
                } while (Math.abs(i) > y && ++s < v);
                return o
            }

            function d(t) {
                for (var r = 0, n = 1, i = b - 1; n !== i && P[n] <= t; ++n) r += x;
                var o = r + (t - P[--n]) / (P[n + 1] - P[n]) * x,
                    s = u(o, e, a);
                return s >= h ? c(t, o) : 0 === s ? o : f(t, r, r + x)
            }

            function g() {
                V = !0, e === r && a === n || p()
            }
            var m = 4,
                h = .001,
                y = 1e-7,
                v = 10,
                b = 11,
                x = 1 / (b - 1),
                w = "Float32Array" in t;
            if (4 !== arguments.length) return !1;
            for (var S = 0; S < 4; ++S)
                if ("number" != typeof arguments[S] || isNaN(arguments[S]) || !isFinite(arguments[S])) return !1;
            e = Math.min(e, 1), a = Math.min(a, 1), e = Math.max(e, 0), a = Math.max(a, 0);
            var P = w ? new Float32Array(b) : new Array(b),
                V = !1,
                k = function (t) {
                    return V || g(), e === r && a === n ? t : 0 === t ? 0 : 1 === t ? 1 : l(d(t), r, n)
                };
            k.getControlPoints = function () {
                return [{
                    x: e,
                    y: r
                }, {
                    x: a,
                    y: n
                }]
            };
            var T = "generateBezier(" + [e, r, a, n] + ")";
            return k.toString = function () {
                return T
            }, k
        }

        function p(e, t) {
            var r = e;
            return x.isString(e) ? V.Easings[e] || (r = !1) : r = x.isArray(e) && 1 === e.length ? u.apply(null, e) : x.isArray(e) && 2 === e.length ? k.apply(null, e.concat([t])) : !(!x.isArray(e) || 4 !== e.length) && c.apply(null, e), !1 === r && (r = V.Easings[V.defaults.easing] ? V.defaults.easing : P), r
        }

        function f(e) {
            if (e) {
                var t = V.timestamp && !0 !== e ? e : y.now(),
                    r = V.State.calls.length;
                r > 1e4 && (V.State.calls = n(V.State.calls), r = V.State.calls.length);
                for (var i = 0; i < r; i++)
                    if (V.State.calls[i]) {
                        var s = V.State.calls[i],
                            l = s[0],
                            u = s[2],
                            c = s[3],
                            p = !!c,
                            h = null,
                            v = s[5],
                            b = s[6];
                        if (c || (c = V.State.calls[i][3] = t - 16), v) {
                            if (!0 !== v.resume) continue;
                            c = s[3] = Math.round(t - b - 16), s[5] = null
                        }
                        b = s[6] = t - c;
                        for (var w = Math.min(b / u.duration, 1), S = 0, P = l.length; S < P; S++) {
                            var k = l[S],
                                C = k.element;
                            if (o(C)) {
                                var F = !1;
                                if (u.display !== a && null !== u.display && "none" !== u.display) {
                                    if ("flex" === u.display) {
                                        var E = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                        g.each(E, function (e, t) {
                                            T.setPropertyValue(C, "display", t)
                                        })
                                    }
                                    T.setPropertyValue(C, "display", u.display)
                                }
                                u.visibility !== a && "hidden" !== u.visibility && T.setPropertyValue(C, "visibility", u.visibility);
                                for (var N in k)
                                    if (k.hasOwnProperty(N) && "element" !== N) {
                                        var H, O = k[N],
                                            j = x.isString(O.easing) ? V.Easings[O.easing] : O.easing;
                                        if (x.isString(O.pattern)) {
                                            var q = 1 === w ? function (e, t, r) {
                                                var a = O.endValue[t];
                                                return r ? Math.round(a) : a
                                            } : function (e, t, r) {
                                                var a = O.startValue[t],
                                                    n = O.endValue[t] - a,
                                                    i = a + n * j(w, u, n);
                                                return r ? Math.round(i) : i
                                            };
                                            H = O.pattern.replace(/{(\d+)(!)?}/g, q)
                                        } else if (1 === w) H = O.endValue;
                                        else {
                                            var L = O.endValue - O.startValue;
                                            H = O.startValue + L * j(w, u, L)
                                        }
                                        if (!p && H === O.currentValue) continue;
                                        if (O.currentValue = H, "tween" === N) h = H;
                                        else {
                                            var z;
                                            if (T.Hooks.registered[N]) {
                                                z = T.Hooks.getRoot(N);
                                                var R = o(C).rootPropertyValueCache[z];
                                                R && (O.rootPropertyValue = R)
                                            }
                                            var M = T.setPropertyValue(C, N, O.currentValue + (m < 9 && 0 === parseFloat(H) ? "" : O.unitType), O.rootPropertyValue, O.scrollData);
                                            T.Hooks.registered[N] && (T.Normalizations.registered[z] ? o(C).rootPropertyValueCache[z] = T.Normalizations.registered[z]("extract", null, M[1]) : o(C).rootPropertyValueCache[z] = M[1]), "transform" === M[0] && (F = !0)
                                        }
                                    } u.mobileHA && o(C).transformCache.translate3d === a && (o(C).transformCache.translate3d = "(0px, 0px, 0px)", F = !0), F && T.flushTransformCache(C)
                            }
                        }
                        u.display !== a && "none" !== u.display && (V.State.calls[i][2].display = !1), u.visibility !== a && "hidden" !== u.visibility && (V.State.calls[i][2].visibility = !1), u.progress && u.progress.call(s[1], s[1], w, Math.max(0, c + u.duration - t), c, h), 1 === w && d(i)
                    }
            }
            V.State.isTicking && A(f)
        }

        function d(e, t) {
            if (!V.State.calls[e]) return !1;
            for (var r = V.State.calls[e][0], n = V.State.calls[e][1], i = V.State.calls[e][2], s = V.State.calls[e][4], l = !1, u = 0, c = r.length; u < c; u++) {
                var p = r[u].element;
                t || i.loop || ("none" === i.display && T.setPropertyValue(p, "display", i.display), "hidden" === i.visibility && T.setPropertyValue(p, "visibility", i.visibility));
                var f = o(p);
                if (!0 !== i.loop && (g.queue(p)[1] === a || !/\.velocityQueueEntryFlag/i.test(g.queue(p)[1])) && f) {
                    f.isAnimating = !1, f.rootPropertyValueCache = {};
                    var d = !1;
                    g.each(T.Lists.transforms3D, function (e, t) {
                        var r = /^scale/.test(t) ? 1 : 0,
                            n = f.transformCache[t];
                        f.transformCache[t] !== a && new RegExp("^\\(" + r + "[^.]").test(n) && (d = !0, delete f.transformCache[t])
                    }), i.mobileHA && (d = !0, delete f.transformCache.translate3d), d && T.flushTransformCache(p), T.Values.removeClass(p, "velocity-animating")
                }
                if (!t && i.complete && !i.loop && u === c - 1) try {
                    i.complete.call(n, n)
                } catch (e) {
                    setTimeout(function () {
                        throw e
                    }, 1)
                }
                s && !0 !== i.loop && s(n), f && !0 === i.loop && !t && (g.each(f.tweensContainer, function (e, t) {
                    if (/^rotate/.test(e) && (parseFloat(t.startValue) - parseFloat(t.endValue)) % 360 == 0) {
                        var r = t.startValue;
                        t.startValue = t.endValue, t.endValue = r
                    }
                    /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                }), V(p, "reverse", {
                    loop: !0,
                    delay: i.delay
                })), !1 !== i.queue && g.dequeue(p, i.queue)
            }
            V.State.calls[e] = !1;
            for (var m = 0, h = V.State.calls.length; m < h; m++)
                if (!1 !== V.State.calls[m]) {
                    l = !0;
                    break
                }! 1 === l && (V.State.isTicking = !1, delete V.State.calls, V.State.calls = [])
        }
        var g, m = function () {
                if (r.documentMode) return r.documentMode;
                for (var e = 7; e > 4; e--) {
                    var t = r.createElement("div");
                    if (t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e", t.getElementsByTagName("span").length) return t = null, e
                }
                return a
            }(),
            h = function () {
                var e = 0;
                return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function (t) {
                    var r, a = (new Date).getTime();
                    return r = Math.max(0, 16 - (a - e)), e = a + r, setTimeout(function () {
                        t(a + r)
                    }, r)
                }
            }(),
            y = function () {
                var e = t.performance || {};
                if ("function" != typeof e.now) {
                    var r = e.timing && e.timing.navigationStart ? e.timing.navigationStart : (new Date).getTime();
                    e.now = function () {
                        return (new Date).getTime() - r
                    }
                }
                return e
            }(),
            v = function () {
                var e = Array.prototype.slice;
                try {
                    return e.call(r.documentElement), e
                } catch (t) {
                    return function (t, r) {
                        var a = this.length;
                        if ("number" != typeof t && (t = 0), "number" != typeof r && (r = a), this.slice) return e.call(this, t, r);
                        var n, i = [],
                            o = t >= 0 ? t : Math.max(0, a + t),
                            s = (r < 0 ? a + r : Math.min(r, a)) - o;
                        if (s > 0)
                            if (i = new Array(s), this.charAt)
                                for (n = 0; n < s; n++) i[n] = this.charAt(o + n);
                            else
                                for (n = 0; n < s; n++) i[n] = this[o + n];
                        return i
                    }
                }
            }(),
            b = function () {
                return Array.prototype.includes ? function (e, t) {
                    return e.includes(t)
                } : Array.prototype.indexOf ? function (e, t) {
                    return e.indexOf(t) >= 0
                } : function (e, t) {
                    for (var r = 0; r < e.length; r++)
                        if (e[r] === t) return !0;
                    return !1
                }
            },
            x = {
                isNumber: function (e) {
                    return "number" == typeof e
                },
                isString: function (e) {
                    return "string" == typeof e
                },
                isArray: Array.isArray || function (e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                isFunction: function (e) {
                    return "[object Function]" === Object.prototype.toString.call(e)
                },
                isNode: function (e) {
                    return e && e.nodeType
                },
                isWrapped: function (e) {
                    return e && e !== t && x.isNumber(e.length) && !x.isString(e) && !x.isFunction(e) && !x.isNode(e) && (0 === e.length || x.isNode(e[0]))
                },
                isSVG: function (e) {
                    return t.SVGElement && e instanceof t.SVGElement
                },
                isEmptyObject: function (e) {
                    for (var t in e)
                        if (e.hasOwnProperty(t)) return !1;
                    return !0
                }
            },
            w = !1;
        if (e.fn && e.fn.jquery ? (g = e, w = !0) : g = t.Velocity.Utilities, m <= 8 && !w) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (!(m <= 7)) {
            var S = 400,
                P = "swing",
                V = {
                    State: {
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                        isAndroid: /Android/i.test(navigator.userAgent),
                        isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                        isChrome: t.chrome,
                        isFirefox: /Firefox/i.test(navigator.userAgent),
                        prefixElement: r.createElement("div"),
                        prefixMatches: {},
                        scrollAnchor: null,
                        scrollPropertyLeft: null,
                        scrollPropertyTop: null,
                        isTicking: !1,
                        calls: [],
                        delayedElements: {
                            count: 0
                        }
                    },
                    CSS: {},
                    Utilities: g,
                    Redirects: {},
                    Easings: {},
                    Promise: t.Promise,
                    defaults: {
                        queue: "",
                        duration: S,
                        easing: P,
                        begin: a,
                        complete: a,
                        progress: a,
                        display: a,
                        visibility: a,
                        loop: !1,
                        delay: !1,
                        mobileHA: !0,
                        _cacheValues: !0,
                        promiseRejectEmpty: !0
                    },
                    init: function (e) {
                        g.data(e, "velocity", {
                            isSVG: x.isSVG(e),
                            isAnimating: !1,
                            computedStyle: null,
                            tweensContainer: null,
                            rootPropertyValueCache: {},
                            transformCache: {}
                        })
                    },
                    hook: null,
                    mock: !1,
                    version: {
                        major: 1,
                        minor: 5,
                        patch: 0
                    },
                    debug: !1,
                    timestamp: !0,
                    pauseAll: function (e) {
                        var t = (new Date).getTime();
                        g.each(V.State.calls, function (t, r) {
                            if (r) {
                                if (e !== a && (r[2].queue !== e || !1 === r[2].queue)) return !0;
                                r[5] = {
                                    resume: !1
                                }
                            }
                        }), g.each(V.State.delayedElements, function (e, r) {
                            r && s(r, t)
                        })
                    },
                    resumeAll: function (e) {
                        var t = (new Date).getTime();
                        g.each(V.State.calls, function (t, r) {
                            if (r) {
                                if (e !== a && (r[2].queue !== e || !1 === r[2].queue)) return !0;
                                r[5] && (r[5].resume = !0)
                            }
                        }), g.each(V.State.delayedElements, function (e, r) {
                            r && l(r, t)
                        })
                    }
                };
            t.pageYOffset !== a ? (V.State.scrollAnchor = t, V.State.scrollPropertyLeft = "pageXOffset", V.State.scrollPropertyTop = "pageYOffset") : (V.State.scrollAnchor = r.documentElement || r.body.parentNode || r.body, V.State.scrollPropertyLeft = "scrollLeft", V.State.scrollPropertyTop = "scrollTop");
            var k = function () {
                function e(e) {
                    return -e.tension * e.x - e.friction * e.v
                }

                function t(t, r, a) {
                    var n = {
                        x: t.x + a.dx * r,
                        v: t.v + a.dv * r,
                        tension: t.tension,
                        friction: t.friction
                    };
                    return {
                        dx: n.v,
                        dv: e(n)
                    }
                }

                function r(r, a) {
                    var n = {
                            dx: r.v,
                            dv: e(r)
                        },
                        i = t(r, .5 * a, n),
                        o = t(r, .5 * a, i),
                        s = t(r, a, o),
                        l = 1 / 6 * (n.dx + 2 * (i.dx + o.dx) + s.dx),
                        u = 1 / 6 * (n.dv + 2 * (i.dv + o.dv) + s.dv);
                    return r.x = r.x + l * a, r.v = r.v + u * a, r
                }
                return function e(t, a, n) {
                    var i, o, s, l = {
                            x: -1,
                            v: 0,
                            tension: null,
                            friction: null
                        },
                        u = [0],
                        c = 0;
                    for (t = parseFloat(t) || 500, a = parseFloat(a) || 20, n = n || null, l.tension = t, l.friction = a, o = (i = null !== n) ? (c = e(t, a)) / n * .016 : .016;;)
                        if (s = r(s || l, o), u.push(1 + s.x), c += 16, !(Math.abs(s.x) > 1e-4 && Math.abs(s.v) > 1e-4)) break;
                    return i ? function (e) {
                        return u[e * (u.length - 1) | 0]
                    } : c
                }
            }();
            V.Easings = {
                linear: function (e) {
                    return e
                },
                swing: function (e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                spring: function (e) {
                    return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
                }
            }, g.each([
                ["ease", [.25, .1, .25, 1]],
                ["ease-in", [.42, 0, 1, 1]],
                ["ease-out", [0, 0, .58, 1]],
                ["ease-in-out", [.42, 0, .58, 1]],
                ["easeInSine", [.47, 0, .745, .715]],
                ["easeOutSine", [.39, .575, .565, 1]],
                ["easeInOutSine", [.445, .05, .55, .95]],
                ["easeInQuad", [.55, .085, .68, .53]],
                ["easeOutQuad", [.25, .46, .45, .94]],
                ["easeInOutQuad", [.455, .03, .515, .955]],
                ["easeInCubic", [.55, .055, .675, .19]],
                ["easeOutCubic", [.215, .61, .355, 1]],
                ["easeInOutCubic", [.645, .045, .355, 1]],
                ["easeInQuart", [.895, .03, .685, .22]],
                ["easeOutQuart", [.165, .84, .44, 1]],
                ["easeInOutQuart", [.77, 0, .175, 1]],
                ["easeInQuint", [.755, .05, .855, .06]],
                ["easeOutQuint", [.23, 1, .32, 1]],
                ["easeInOutQuint", [.86, 0, .07, 1]],
                ["easeInExpo", [.95, .05, .795, .035]],
                ["easeOutExpo", [.19, 1, .22, 1]],
                ["easeInOutExpo", [1, 0, 0, 1]],
                ["easeInCirc", [.6, .04, .98, .335]],
                ["easeOutCirc", [.075, .82, .165, 1]],
                ["easeInOutCirc", [.785, .135, .15, .86]]
            ], function (e, t) {
                V.Easings[t[0]] = c.apply(null, t[1])
            });
            var T = V.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
                    units: ["%", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px", "deg", "grad", "rad", "turn", "s", "ms"],
                    colorNames: {
                        aliceblue: "240,248,255",
                        antiquewhite: "250,235,215",
                        aquamarine: "127,255,212",
                        aqua: "0,255,255",
                        azure: "240,255,255",
                        beige: "245,245,220",
                        bisque: "255,228,196",
                        black: "0,0,0",
                        blanchedalmond: "255,235,205",
                        blueviolet: "138,43,226",
                        blue: "0,0,255",
                        brown: "165,42,42",
                        burlywood: "222,184,135",
                        cadetblue: "95,158,160",
                        chartreuse: "127,255,0",
                        chocolate: "210,105,30",
                        coral: "255,127,80",
                        cornflowerblue: "100,149,237",
                        cornsilk: "255,248,220",
                        crimson: "220,20,60",
                        cyan: "0,255,255",
                        darkblue: "0,0,139",
                        darkcyan: "0,139,139",
                        darkgoldenrod: "184,134,11",
                        darkgray: "169,169,169",
                        darkgrey: "169,169,169",
                        darkgreen: "0,100,0",
                        darkkhaki: "189,183,107",
                        darkmagenta: "139,0,139",
                        darkolivegreen: "85,107,47",
                        darkorange: "255,140,0",
                        darkorchid: "153,50,204",
                        darkred: "139,0,0",
                        darksalmon: "233,150,122",
                        darkseagreen: "143,188,143",
                        darkslateblue: "72,61,139",
                        darkslategray: "47,79,79",
                        darkturquoise: "0,206,209",
                        darkviolet: "148,0,211",
                        deeppink: "255,20,147",
                        deepskyblue: "0,191,255",
                        dimgray: "105,105,105",
                        dimgrey: "105,105,105",
                        dodgerblue: "30,144,255",
                        firebrick: "178,34,34",
                        floralwhite: "255,250,240",
                        forestgreen: "34,139,34",
                        fuchsia: "255,0,255",
                        gainsboro: "220,220,220",
                        ghostwhite: "248,248,255",
                        gold: "255,215,0",
                        goldenrod: "218,165,32",
                        gray: "128,128,128",
                        grey: "128,128,128",
                        greenyellow: "173,255,47",
                        green: "0,128,0",
                        honeydew: "240,255,240",
                        hotpink: "255,105,180",
                        indianred: "205,92,92",
                        indigo: "75,0,130",
                        ivory: "255,255,240",
                        khaki: "240,230,140",
                        lavenderblush: "255,240,245",
                        lavender: "230,230,250",
                        lawngreen: "124,252,0",
                        lemonchiffon: "255,250,205",
                        lightblue: "173,216,230",
                        lightcoral: "240,128,128",
                        lightcyan: "224,255,255",
                        lightgoldenrodyellow: "250,250,210",
                        lightgray: "211,211,211",
                        lightgrey: "211,211,211",
                        lightgreen: "144,238,144",
                        lightpink: "255,182,193",
                        lightsalmon: "255,160,122",
                        lightseagreen: "32,178,170",
                        lightskyblue: "135,206,250",
                        lightslategray: "119,136,153",
                        lightsteelblue: "176,196,222",
                        lightyellow: "255,255,224",
                        limegreen: "50,205,50",
                        lime: "0,255,0",
                        linen: "250,240,230",
                        magenta: "255,0,255",
                        maroon: "128,0,0",
                        mediumaquamarine: "102,205,170",
                        mediumblue: "0,0,205",
                        mediumorchid: "186,85,211",
                        mediumpurple: "147,112,219",
                        mediumseagreen: "60,179,113",
                        mediumslateblue: "123,104,238",
                        mediumspringgreen: "0,250,154",
                        mediumturquoise: "72,209,204",
                        mediumvioletred: "199,21,133",
                        midnightblue: "25,25,112",
                        mintcream: "245,255,250",
                        mistyrose: "255,228,225",
                        moccasin: "255,228,181",
                        navajowhite: "255,222,173",
                        navy: "0,0,128",
                        oldlace: "253,245,230",
                        olivedrab: "107,142,35",
                        olive: "128,128,0",
                        orangered: "255,69,0",
                        orange: "255,165,0",
                        orchid: "218,112,214",
                        palegoldenrod: "238,232,170",
                        palegreen: "152,251,152",
                        paleturquoise: "175,238,238",
                        palevioletred: "219,112,147",
                        papayawhip: "255,239,213",
                        peachpuff: "255,218,185",
                        peru: "205,133,63",
                        pink: "255,192,203",
                        plum: "221,160,221",
                        powderblue: "176,224,230",
                        purple: "128,0,128",
                        red: "255,0,0",
                        rosybrown: "188,143,143",
                        royalblue: "65,105,225",
                        saddlebrown: "139,69,19",
                        salmon: "250,128,114",
                        sandybrown: "244,164,96",
                        seagreen: "46,139,87",
                        seashell: "255,245,238",
                        sienna: "160,82,45",
                        silver: "192,192,192",
                        skyblue: "135,206,235",
                        slateblue: "106,90,205",
                        slategray: "112,128,144",
                        snow: "255,250,250",
                        springgreen: "0,255,127",
                        steelblue: "70,130,180",
                        tan: "210,180,140",
                        teal: "0,128,128",
                        thistle: "216,191,216",
                        tomato: "255,99,71",
                        turquoise: "64,224,208",
                        violet: "238,130,238",
                        wheat: "245,222,179",
                        whitesmoke: "245,245,245",
                        white: "255,255,255",
                        yellowgreen: "154,205,50",
                        yellow: "255,255,0"
                    }
                },
                Hooks: {
                    templates: {
                        textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                        boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        backgroundPosition: ["X Y", "0% 0%"],
                        transformOrigin: ["X Y Z", "50% 50% 0px"],
                        perspectiveOrigin: ["X Y", "50% 50%"]
                    },
                    registered: {},
                    register: function () {
                        for (var e = 0; e < T.Lists.colors.length; e++) {
                            var t = "color" === T.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                            T.Hooks.templates[T.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                        }
                        var r, a, n;
                        if (m)
                            for (r in T.Hooks.templates)
                                if (T.Hooks.templates.hasOwnProperty(r)) {
                                    n = (a = T.Hooks.templates[r])[0].split(" ");
                                    var i = a[1].match(T.RegEx.valueSplit);
                                    "Color" === n[0] && (n.push(n.shift()), i.push(i.shift()), T.Hooks.templates[r] = [n.join(" "), i.join(" ")])
                                } for (r in T.Hooks.templates)
                            if (T.Hooks.templates.hasOwnProperty(r)) {
                                n = (a = T.Hooks.templates[r])[0].split(" ");
                                for (var o in n)
                                    if (n.hasOwnProperty(o)) {
                                        var s = r + n[o],
                                            l = o;
                                        T.Hooks.registered[s] = [r, l]
                                    }
                            }
                    },
                    getRoot: function (e) {
                        var t = T.Hooks.registered[e];
                        return t ? t[0] : e
                    },
                    getUnit: function (e, t) {
                        var r = (e.substr(t || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
                        return r && b(T.Lists.units, r) ? r : ""
                    },
                    fixColors: function (e) {
                        return e.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function (e, t, r) {
                            return T.Lists.colorNames.hasOwnProperty(r) ? (t || "rgba(") + T.Lists.colorNames[r] + (t ? "" : ",1)") : t + r
                        })
                    },
                    cleanRootPropertyValue: function (e, t) {
                        return T.RegEx.valueUnwrap.test(t) && (t = t.match(T.RegEx.valueUnwrap)[1]), T.Values.isCSSNullValue(t) && (t = T.Hooks.templates[e][1]), t
                    },
                    extractValue: function (e, t) {
                        var r = T.Hooks.registered[e];
                        if (r) {
                            var a = r[0],
                                n = r[1];
                            return (t = T.Hooks.cleanRootPropertyValue(a, t)).toString().match(T.RegEx.valueSplit)[n]
                        }
                        return t
                    },
                    injectValue: function (e, t, r) {
                        var a = T.Hooks.registered[e];
                        if (a) {
                            var n, i = a[0],
                                o = a[1];
                            return r = T.Hooks.cleanRootPropertyValue(i, r), n = r.toString().match(T.RegEx.valueSplit), n[o] = t, n.join(" ")
                        }
                        return r
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function (e, t, r) {
                            switch (e) {
                                case "name":
                                    return "clip";
                                case "extract":
                                    var a;
                                    return a = T.RegEx.wrappedValueAlreadyExtracted.test(r) ? r : (a = r.toString().match(T.RegEx.valueUnwrap)) ? a[1].replace(/,(\s+)?/g, " ") : r;
                                case "inject":
                                    return "rect(" + r + ")"
                            }
                        },
                        blur: function (e, t, r) {
                            switch (e) {
                                case "name":
                                    return V.State.isFirefox ? "filter" : "-webkit-filter";
                                case "extract":
                                    var a = parseFloat(r);
                                    if (!a && 0 !== a) {
                                        var n = r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                        a = n ? n[1] : 0
                                    }
                                    return a;
                                case "inject":
                                    return parseFloat(r) ? "blur(" + r + ")" : "none"
                            }
                        },
                        opacity: function (e, t, r) {
                            if (m <= 8) switch (e) {
                                case "name":
                                    return "filter";
                                case "extract":
                                    var a = r.toString().match(/alpha\(opacity=(.*)\)/i);
                                    return r = a ? a[1] / 100 : 1;
                                case "inject":
                                    return t.style.zoom = 1, parseFloat(r) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(r), 10) + ")"
                            } else switch (e) {
                                case "name":
                                    return "opacity";
                                case "extract":
                                case "inject":
                                    return r
                            }
                        }
                    },
                    register: function () {
                        function e(e, t, r) {
                            if ("border-box" === T.getPropertyValue(t, "boxSizing").toString().toLowerCase() === (r || !1)) {
                                var a, n, i = 0,
                                    o = "width" === e ? ["Left", "Right"] : ["Top", "Bottom"],
                                    s = ["padding" + o[0], "padding" + o[1], "border" + o[0] + "Width", "border" + o[1] + "Width"];
                                for (a = 0; a < s.length; a++) n = parseFloat(T.getPropertyValue(t, s[a])), isNaN(n) || (i += n);
                                return r ? -i : i
                            }
                            return 0
                        }

                        function t(t, r) {
                            return function (a, n, i) {
                                switch (a) {
                                    case "name":
                                        return t;
                                    case "extract":
                                        return parseFloat(i) + e(t, n, r);
                                    case "inject":
                                        return parseFloat(i) - e(t, n, r) + "px"
                                }
                            }
                        }
                        m && !(m > 9) || V.State.isGingerbread || (T.Lists.transformsBase = T.Lists.transformsBase.concat(T.Lists.transforms3D));
                        for (var r = 0; r < T.Lists.transformsBase.length; r++) ! function () {
                            var e = T.Lists.transformsBase[r];
                            T.Normalizations.registered[e] = function (t, r, n) {
                                switch (t) {
                                    case "name":
                                        return "transform";
                                    case "extract":
                                        return o(r) === a || o(r).transformCache[e] === a ? /^scale/i.test(e) ? 1 : 0 : o(r).transformCache[e].replace(/[()]/g, "");
                                    case "inject":
                                        var i = !1;
                                        switch (e.substr(0, e.length - 1)) {
                                            case "translate":
                                                i = !/(%|px|em|rem|vw|vh|\d)$/i.test(n);
                                                break;
                                            case "scal":
                                            case "scale":
                                                V.State.isAndroid && o(r).transformCache[e] === a && n < 1 && (n = 1), i = !/(\d)$/i.test(n);
                                                break;
                                            case "skew":
                                            case "rotate":
                                                i = !/(deg|\d)$/i.test(n)
                                        }
                                        return i || (o(r).transformCache[e] = "(" + n + ")"), o(r).transformCache[e]
                                }
                            }
                        }();
                        for (var n = 0; n < T.Lists.colors.length; n++) ! function () {
                            var e = T.Lists.colors[n];
                            T.Normalizations.registered[e] = function (t, r, n) {
                                switch (t) {
                                    case "name":
                                        return e;
                                    case "extract":
                                        var i;
                                        if (T.RegEx.wrappedValueAlreadyExtracted.test(n)) i = n;
                                        else {
                                            var o, s = {
                                                black: "rgb(0, 0, 0)",
                                                blue: "rgb(0, 0, 255)",
                                                gray: "rgb(128, 128, 128)",
                                                green: "rgb(0, 128, 0)",
                                                red: "rgb(255, 0, 0)",
                                                white: "rgb(255, 255, 255)"
                                            };
                                            /^[A-z]+$/i.test(n) ? o = s[n] !== a ? s[n] : s.black : T.RegEx.isHex.test(n) ? o = "rgb(" + T.Values.hexToRgb(n).join(" ") + ")" : /^rgba?\(/i.test(n) || (o = s.black), i = (o || n).toString().match(T.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                        }
                                        return (!m || m > 8) && 3 === i.split(" ").length && (i += " 1"), i;
                                    case "inject":
                                        return /^rgb/.test(n) ? n : (m <= 8 ? 4 === n.split(" ").length && (n = n.split(/\s+/).slice(0, 3).join(" ")) : 3 === n.split(" ").length && (n += " 1"), (m <= 8 ? "rgb" : "rgba") + "(" + n.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")")
                                }
                            }
                        }();
                        T.Normalizations.registered.innerWidth = t("width", !0), T.Normalizations.registered.innerHeight = t("height", !0), T.Normalizations.registered.outerWidth = t("width"), T.Normalizations.registered.outerHeight = t("height")
                    }
                },
                Names: {
                    camelCase: function (e) {
                        return e.replace(/-(\w)/g, function (e, t) {
                            return t.toUpperCase()
                        })
                    },
                    SVGAttribute: function (e) {
                        var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (m || V.State.isAndroid && !V.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                    },
                    prefixCheck: function (e) {
                        if (V.State.prefixMatches[e]) return [V.State.prefixMatches[e], !0];
                        for (var t = ["", "Webkit", "Moz", "ms", "O"], r = 0, a = t.length; r < a; r++) {
                            var n;
                            if (n = 0 === r ? e : t[r] + e.replace(/^\w/, function (e) {
                                    return e.toUpperCase()
                                }), x.isString(V.State.prefixElement.style[n])) return V.State.prefixMatches[e] = n, [n, !0]
                        }
                        return [e, !1]
                    }
                },
                Values: {
                    hexToRgb: function (e) {
                        var t, r = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                            a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                        return e = e.replace(r, function (e, t, r, a) {
                            return t + t + r + r + a + a
                        }), t = a.exec(e), t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                    },
                    isCSSNullValue: function (e) {
                        return !e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                    },
                    getUnitType: function (e) {
                        return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                    },
                    getDisplayType: function (e) {
                        var t = e && e.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                    },
                    addClass: function (e, t) {
                        if (e)
                            if (e.classList) e.classList.add(t);
                            else if (x.isString(e.className)) e.className += (e.className.length ? " " : "") + t;
                        else {
                            var r = e.getAttribute(m <= 7 ? "className" : "class") || "";
                            e.setAttribute("class", r + (r ? " " : "") + t)
                        }
                    },
                    removeClass: function (e, t) {
                        if (e)
                            if (e.classList) e.classList.remove(t);
                            else if (x.isString(e.className)) e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ");
                        else {
                            var r = e.getAttribute(m <= 7 ? "className" : "class") || "";
                            e.setAttribute("class", r.replace(new RegExp("(^|s)" + t.split(" ").join("|") + "(s|$)", "gi"), " "))
                        }
                    }
                },
                getPropertyValue: function (e, r, n, i) {
                    function s(e, r) {
                        var n = 0;
                        if (m <= 8) n = g.css(e, r);
                        else {
                            var l = !1;
                            /^(width|height)$/.test(r) && 0 === T.getPropertyValue(e, "display") && (l = !0, T.setPropertyValue(e, "display", T.Values.getDisplayType(e)));
                            var u = function () {
                                l && T.setPropertyValue(e, "display", "none")
                            };
                            if (!i) {
                                if ("height" === r && "border-box" !== T.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var c = e.offsetHeight - (parseFloat(T.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(T.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(T.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(T.getPropertyValue(e, "paddingBottom")) || 0);
                                    return u(), c
                                }
                                if ("width" === r && "border-box" !== T.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var p = e.offsetWidth - (parseFloat(T.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(T.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(T.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(T.getPropertyValue(e, "paddingRight")) || 0);
                                    return u(), p
                                }
                            }
                            var f;
                            f = o(e) === a ? t.getComputedStyle(e, null) : o(e).computedStyle ? o(e).computedStyle : o(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === r && (r = "borderTopColor"), "" !== (n = 9 === m && "filter" === r ? f.getPropertyValue(r) : f[r]) && null !== n || (n = e.style[r]), u()
                        }
                        if ("auto" === n && /^(top|right|bottom|left)$/i.test(r)) {
                            var d = s(e, "position");
                            ("fixed" === d || "absolute" === d && /top|left/i.test(r)) && (n = g(e).position()[r] + "px")
                        }
                        return n
                    }
                    var l;
                    if (T.Hooks.registered[r]) {
                        var u = r,
                            c = T.Hooks.getRoot(u);
                        n === a && (n = T.getPropertyValue(e, T.Names.prefixCheck(c)[0])), T.Normalizations.registered[c] && (n = T.Normalizations.registered[c]("extract", e, n)), l = T.Hooks.extractValue(u, n)
                    } else if (T.Normalizations.registered[r]) {
                        var p, f;
                        "transform" !== (p = T.Normalizations.registered[r]("name", e)) && (f = s(e, T.Names.prefixCheck(p)[0]), T.Values.isCSSNullValue(f) && T.Hooks.templates[r] && (f = T.Hooks.templates[r][1])), l = T.Normalizations.registered[r]("extract", e, f)
                    }
                    if (!/^[\d-]/.test(l)) {
                        var d = o(e);
                        if (d && d.isSVG && T.Names.SVGAttribute(r))
                            if (/^(height|width)$/i.test(r)) try {
                                l = e.getBBox()[r]
                            } catch (e) {
                                l = 0
                            } else l = e.getAttribute(r);
                            else l = s(e, T.Names.prefixCheck(r)[0])
                    }
                    return T.Values.isCSSNullValue(l) && (l = 0), V.debug >= 2 && console.log("Get " + r + ": " + l), l
                },
                setPropertyValue: function (e, r, a, n, i) {
                    var s = r;
                    if ("scroll" === r) i.container ? i.container["scroll" + i.direction] = a : "Left" === i.direction ? t.scrollTo(a, i.alternateValue) : t.scrollTo(i.alternateValue, a);
                    else if (T.Normalizations.registered[r] && "transform" === T.Normalizations.registered[r]("name", e)) T.Normalizations.registered[r]("inject", e, a), s = "transform", a = o(e).transformCache[r];
                    else {
                        if (T.Hooks.registered[r]) {
                            var l = r,
                                u = T.Hooks.getRoot(r);
                            n = n || T.getPropertyValue(e, u), a = T.Hooks.injectValue(l, a, n), r = u
                        }
                        if (T.Normalizations.registered[r] && (a = T.Normalizations.registered[r]("inject", e, a), r = T.Normalizations.registered[r]("name", e)), s = T.Names.prefixCheck(r)[0], m <= 8) try {
                            e.style[s] = a
                        } catch (e) {
                            V.debug && console.log("Browser does not support [" + a + "] for [" + s + "]")
                        } else {
                            var c = o(e);
                            c && c.isSVG && T.Names.SVGAttribute(r) ? e.setAttribute(r, a) : e.style[s] = a
                        }
                        V.debug >= 2 && console.log("Set " + r + " (" + s + "): " + a)
                    }
                    return [s, a]
                },
                flushTransformCache: function (e) {
                    var t = "",
                        r = o(e);
                    if ((m || V.State.isAndroid && !V.State.isChrome) && r && r.isSVG) {
                        var a = function (t) {
                                return parseFloat(T.getPropertyValue(e, t))
                            },
                            n = {
                                translate: [a("translateX"), a("translateY")],
                                skewX: [a("skewX")],
                                skewY: [a("skewY")],
                                scale: 1 !== a("scale") ? [a("scale"), a("scale")] : [a("scaleX"), a("scaleY")],
                                rotate: [a("rotateZ"), 0, 0]
                            };
                        g.each(o(e).transformCache, function (e) {
                            /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), n[e] && (t += e + "(" + n[e].join(" ") + ") ", delete n[e])
                        })
                    } else {
                        var i, s;
                        g.each(o(e).transformCache, function (r) {
                            if (i = o(e).transformCache[r], "transformPerspective" === r) return s = i, !0;
                            9 === m && "rotateZ" === r && (r = "rotate"), t += r + i + " "
                        }), s && (t = "perspective" + s + " " + t)
                    }
                    T.setPropertyValue(e, "transform", t)
                }
            };
            T.Hooks.register(), T.Normalizations.register(), V.hook = function (e, t, r) {
                var n;
                return e = i(e), g.each(e, function (e, i) {
                    if (o(i) === a && V.init(i), r === a) n === a && (n = T.getPropertyValue(i, t));
                    else {
                        var s = T.setPropertyValue(i, t, r);
                        "transform" === s[0] && V.CSS.flushTransformCache(i), n = s
                    }
                }), n
            };
            var C = function () {
                function e() {
                    return c ? k.promise || null : m
                }

                function n(e, n) {
                    function i(i) {
                        var c, d;
                        if (l.begin && 0 === F) try {
                            l.begin.call(y, y)
                        } catch (e) {
                            setTimeout(function () {
                                throw e
                            }, 1)
                        }
                        if ("scroll" === N) {
                            var m, h, S, P = /^x$/i.test(l.axis) ? "Left" : "Top",
                                C = parseFloat(l.offset) || 0;
                            l.container ? x.isWrapped(l.container) || x.isNode(l.container) ? (l.container = l.container[0] || l.container, S = (m = l.container["scroll" + P]) + g(e).position()[P.toLowerCase()] + C) : l.container = null : (m = V.State.scrollAnchor[V.State["scrollProperty" + P]], h = V.State.scrollAnchor[V.State["scrollProperty" + ("Left" === P ? "Top" : "Left")]], S = g(e).offset()[P.toLowerCase()] + C), u = {
                                scroll: {
                                    rootPropertyValue: !1,
                                    startValue: m,
                                    currentValue: m,
                                    endValue: S,
                                    unitType: "",
                                    easing: l.easing,
                                    scrollData: {
                                        container: l.container,
                                        direction: P,
                                        alternateValue: h
                                    }
                                },
                                element: e
                            }, V.debug && console.log("tweensContainer (scroll): ", u.scroll, e)
                        } else if ("reverse" === N) {
                            if (!(c = o(e))) return;
                            if (!c.tweensContainer) return void g.dequeue(e, l.queue);
                            "none" === c.opts.display && (c.opts.display = "auto"), "hidden" === c.opts.visibility && (c.opts.visibility = "visible"), c.opts.loop = !1, c.opts.begin = null, c.opts.complete = null, w.easing || delete l.easing, w.duration || delete l.duration, l = g.extend({}, c.opts, l), d = g.extend(!0, {}, c ? c.tweensContainer : null);
                            for (var E in d)
                                if (d.hasOwnProperty(E) && "element" !== E) {
                                    var H = d[E].startValue;
                                    d[E].startValue = d[E].currentValue = d[E].endValue, d[E].endValue = H, x.isEmptyObject(w) || (d[E].easing = l.easing), V.debug && console.log("reverse tweensContainer (" + E + "): " + JSON.stringify(d[E]), e)
                                } u = d
                        } else if ("start" === N) {
                            (c = o(e)) && c.tweensContainer && !0 === c.isAnimating && (d = c.tweensContainer);
                            var O = function (n, i) {
                                var o, p = T.Hooks.getRoot(n),
                                    f = !1,
                                    m = i[0],
                                    h = i[1],
                                    y = i[2];
                                if (c && c.isSVG || "tween" === p || !1 !== T.Names.prefixCheck(p)[1] || T.Normalizations.registered[p] !== a) {
                                    (l.display !== a && null !== l.display && "none" !== l.display || l.visibility !== a && "hidden" !== l.visibility) && /opacity|filter/.test(n) && !y && 0 !== m && (y = 0), l._cacheValues && d && d[n] ? (y === a && (y = d[n].endValue + d[n].unitType), f = c.rootPropertyValueCache[p]) : T.Hooks.registered[n] ? y === a ? (f = T.getPropertyValue(e, p), y = T.getPropertyValue(e, n, f)) : f = T.Hooks.templates[p][1] : y === a && (y = T.getPropertyValue(e, n));
                                    var v, b, w, S = !1,
                                        P = function (e, t) {
                                            var r, a;
                                            return a = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (e) {
                                                return r = e, ""
                                            }), r || (r = T.Values.getUnitType(e)), [a, r]
                                        };
                                    if (y !== m && x.isString(y) && x.isString(m)) {
                                        o = "";
                                        var k = 0,
                                            C = 0,
                                            A = [],
                                            F = [],
                                            E = 0,
                                            N = 0,
                                            H = 0;
                                        for (y = T.Hooks.fixColors(y), m = T.Hooks.fixColors(m); k < y.length && C < m.length;) {
                                            var O = y[k],
                                                j = m[C];
                                            if (/[\d\.-]/.test(O) && /[\d\.-]/.test(j)) {
                                                for (var q = O, L = j, R = ".", M = "."; ++k < y.length;) {
                                                    if ((O = y[k]) === R) R = "..";
                                                    else if (!/\d/.test(O)) break;
                                                    q += O
                                                }
                                                for (; ++C < m.length;) {
                                                    if ((j = m[C]) === M) M = "..";
                                                    else if (!/\d/.test(j)) break;
                                                    L += j
                                                }
                                                var $ = T.Hooks.getUnit(y, k),
                                                    B = T.Hooks.getUnit(m, C);
                                                if (k += $.length, C += B.length, $ === B) q === L ? o += q + $ : (o += "{" + A.length + (N ? "!" : "") + "}" + $, A.push(parseFloat(q)), F.push(parseFloat(L)));
                                                else {
                                                    var W = parseFloat(q),
                                                        I = parseFloat(L);
                                                    o += (E < 5 ? "calc" : "") + "(" + (W ? "{" + A.length + (N ? "!" : "") + "}" : "0") + $ + " + " + (I ? "{" + (A.length + (W ? 1 : 0)) + (N ? "!" : "") + "}" : "0") + B + ")", W && (A.push(W), F.push(0)), I && (A.push(0), F.push(I))
                                                }
                                            } else {
                                                if (O !== j) {
                                                    E = 0;
                                                    break
                                                }
                                                o += O, k++, C++, 0 === E && "c" === O || 1 === E && "a" === O || 2 === E && "l" === O || 3 === E && "c" === O || E >= 4 && "(" === O ? E++ : (E && E < 5 || E >= 4 && ")" === O && --E < 5) && (E = 0), 0 === N && "r" === O || 1 === N && "g" === O || 2 === N && "b" === O || 3 === N && "a" === O || N >= 3 && "(" === O ? (3 === N && "a" === O && (H = 1), N++) : H && "," === O ? ++H > 3 && (N = H = 0) : (H && N < (H ? 5 : 4) || N >= (H ? 4 : 3) && ")" === O && --N < (H ? 5 : 4)) && (N = H = 0)
                                            }
                                        }
                                        k === y.length && C === m.length || (V.debug && console.error('Trying to pattern match mis-matched strings ["' + m + '", "' + y + '"]'), o = a), o && (A.length ? (V.debug && console.log('Pattern found "' + o + '" -> ', A, F, "[" + y + "," + m + "]"), y = A, m = F, b = w = "") : o = a)
                                    }
                                    o || (y = (v = P(n, y))[0], w = v[1], m = (v = P(n, m))[0].replace(/^([+-\/*])=/, function (e, t) {
                                        return S = t, ""
                                    }), b = v[1], y = parseFloat(y) || 0, m = parseFloat(m) || 0, "%" === b && (/^(fontSize|lineHeight)$/.test(n) ? (m /= 100, b = "em") : /^scale/.test(n) ? (m /= 100, b = "") : /(Red|Green|Blue)$/i.test(n) && (m = m / 100 * 255, b = "")));
                                    if (/[\/*]/.test(S)) b = w;
                                    else if (w !== b && 0 !== y)
                                        if (0 === m) b = w;
                                        else {
                                            s = s || function () {
                                                var a = {
                                                        myParent: e.parentNode || r.body,
                                                        position: T.getPropertyValue(e, "position"),
                                                        fontSize: T.getPropertyValue(e, "fontSize")
                                                    },
                                                    n = a.position === z.lastPosition && a.myParent === z.lastParent,
                                                    i = a.fontSize === z.lastFontSize;
                                                z.lastParent = a.myParent, z.lastPosition = a.position, z.lastFontSize = a.fontSize;
                                                var o = {};
                                                if (i && n) o.emToPx = z.lastEmToPx, o.percentToPxWidth = z.lastPercentToPxWidth, o.percentToPxHeight = z.lastPercentToPxHeight;
                                                else {
                                                    var s = c && c.isSVG ? r.createElementNS("http://www.w3.org/2000/svg", "rect") : r.createElement("div");
                                                    V.init(s), a.myParent.appendChild(s), g.each(["overflow", "overflowX", "overflowY"], function (e, t) {
                                                        V.CSS.setPropertyValue(s, t, "hidden")
                                                    }), V.CSS.setPropertyValue(s, "position", a.position), V.CSS.setPropertyValue(s, "fontSize", a.fontSize), V.CSS.setPropertyValue(s, "boxSizing", "content-box"), g.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (e, t) {
                                                        V.CSS.setPropertyValue(s, t, "100%")
                                                    }), V.CSS.setPropertyValue(s, "paddingLeft", "100em"), o.percentToPxWidth = z.lastPercentToPxWidth = (parseFloat(T.getPropertyValue(s, "width", null, !0)) || 1) / 100, o.percentToPxHeight = z.lastPercentToPxHeight = (parseFloat(T.getPropertyValue(s, "height", null, !0)) || 1) / 100, o.emToPx = z.lastEmToPx = (parseFloat(T.getPropertyValue(s, "paddingLeft")) || 1) / 100, a.myParent.removeChild(s)
                                                }
                                                return null === z.remToPx && (z.remToPx = parseFloat(T.getPropertyValue(r.body, "fontSize")) || 16), null === z.vwToPx && (z.vwToPx = parseFloat(t.innerWidth) / 100, z.vhToPx = parseFloat(t.innerHeight) / 100), o.remToPx = z.remToPx, o.vwToPx = z.vwToPx, o.vhToPx = z.vhToPx, V.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(o), e), o
                                            }();
                                            var D = /margin|padding|left|right|width|text|word|letter/i.test(n) || /X$/.test(n) || "x" === n ? "x" : "y";
                                            switch (w) {
                                                case "%":
                                                    y *= "x" === D ? s.percentToPxWidth : s.percentToPxHeight;
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    y *= s[w + "ToPx"]
                                            }
                                            switch (b) {
                                                case "%":
                                                    y *= 1 / ("x" === D ? s.percentToPxWidth : s.percentToPxHeight);
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    y *= 1 / s[b + "ToPx"]
                                            }
                                        } switch (S) {
                                        case "+":
                                            m = y + m;
                                            break;
                                        case "-":
                                            m = y - m;
                                            break;
                                        case "*":
                                            m *= y;
                                            break;
                                        case "/":
                                            m = y / m
                                    }
                                    u[n] = {
                                        rootPropertyValue: f,
                                        startValue: y,
                                        currentValue: y,
                                        endValue: m,
                                        unitType: b,
                                        easing: h
                                    }, o && (u[n].pattern = o), V.debug && console.log("tweensContainer (" + n + "): " + JSON.stringify(u[n]), e)
                                } else V.debug && console.log("Skipping [" + p + "] due to a lack of browser support.")
                            };
                            for (var j in v)
                                if (v.hasOwnProperty(j)) {
                                    var q = T.Names.camelCase(j),
                                        L = function (t, r) {
                                            var a, i, o;
                                            return x.isFunction(t) && (t = t.call(e, n, A)), x.isArray(t) ? (a = t[0], !x.isArray(t[1]) && /^[\d-]/.test(t[1]) || x.isFunction(t[1]) || T.RegEx.isHex.test(t[1]) ? o = t[1] : x.isString(t[1]) && !T.RegEx.isHex.test(t[1]) && V.Easings[t[1]] || x.isArray(t[1]) ? (i = r ? t[1] : p(t[1], l.duration), o = t[2]) : o = t[1] || t[2]) : a = t, r || (i = i || l.easing), x.isFunction(a) && (a = a.call(e, n, A)), x.isFunction(o) && (o = o.call(e, n, A)), [a || 0, i, o]
                                        }(v[j]);
                                    if (b(T.Lists.colors, q)) {
                                        var M = L[0],
                                            $ = L[1],
                                            B = L[2];
                                        if (T.RegEx.isHex.test(M)) {
                                            for (var W = ["Red", "Green", "Blue"], I = T.Values.hexToRgb(M), D = B ? T.Values.hexToRgb(B) : a, G = 0; G < W.length; G++) {
                                                var Q = [I[G]];
                                                $ && Q.push($), D !== a && Q.push(D[G]), O(q + W[G], Q)
                                            }
                                            continue
                                        }
                                    }
                                    O(q, L)
                                } u.element = e
                        }
                        u.element && (T.Values.addClass(e, "velocity-animating"), R.push(u), (c = o(e)) && ("" === l.queue && (c.tweensContainer = u, c.opts = l), c.isAnimating = !0), F === A - 1 ? (V.State.calls.push([R, y, l, null, k.resolver, null, 0]), !1 === V.State.isTicking && (V.State.isTicking = !0, f())) : F++)
                    }
                    var s, l = g.extend({}, V.defaults, w),
                        u = {};
                    switch (o(e) === a && V.init(e), parseFloat(l.delay) && !1 !== l.queue && g.queue(e, l.queue, function (t) {
                        V.velocityQueueEntryFlag = !0;
                        var r = V.State.delayedElements.count++;
                        V.State.delayedElements[r] = e;
                        var a = function (e) {
                            return function () {
                                V.State.delayedElements[e] = !1, t()
                            }
                        }(r);
                        o(e).delayBegin = (new Date).getTime(), o(e).delay = parseFloat(l.delay), o(e).delayTimer = {
                            setTimeout: setTimeout(t, parseFloat(l.delay)),
                            next: a
                        }
                    }), l.duration.toString().toLowerCase()) {
                        case "fast":
                            l.duration = 200;
                            break;
                        case "normal":
                            l.duration = S;
                            break;
                        case "slow":
                            l.duration = 600;
                            break;
                        default:
                            l.duration = parseFloat(l.duration) || 1
                    }
                    if (!1 !== V.mock && (!0 === V.mock ? l.duration = l.delay = 1 : (l.duration *= parseFloat(V.mock) || 1, l.delay *= parseFloat(V.mock) || 1)), l.easing = p(l.easing, l.duration), l.begin && !x.isFunction(l.begin) && (l.begin = null), l.progress && !x.isFunction(l.progress) && (l.progress = null), l.complete && !x.isFunction(l.complete) && (l.complete = null), l.display !== a && null !== l.display && (l.display = l.display.toString().toLowerCase(), "auto" === l.display && (l.display = V.CSS.Values.getDisplayType(e))), l.visibility !== a && null !== l.visibility && (l.visibility = l.visibility.toString().toLowerCase()), l.mobileHA = l.mobileHA && V.State.isMobile && !V.State.isGingerbread, !1 === l.queue)
                        if (l.delay) {
                            var c = V.State.delayedElements.count++;
                            V.State.delayedElements[c] = e;
                            var d = function (e) {
                                return function () {
                                    V.State.delayedElements[e] = !1, i()
                                }
                            }(c);
                            o(e).delayBegin = (new Date).getTime(), o(e).delay = parseFloat(l.delay), o(e).delayTimer = {
                                setTimeout: setTimeout(i, parseFloat(l.delay)),
                                next: d
                            }
                        } else i();
                    else g.queue(e, l.queue, function (e, t) {
                        if (!0 === t) return k.promise && k.resolver(y), !0;
                        V.velocityQueueEntryFlag = !0, i(e)
                    });
                    "" !== l.queue && "fx" !== l.queue || "inprogress" === g.queue(e)[0] || g.dequeue(e)
                }
                var u, c, m, h, y, v, w, P = arguments[0] && (arguments[0].p || g.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || x.isString(arguments[0].properties));
                x.isWrapped(this) ? (c = !1, h = 0, y = this, m = this) : (c = !0, h = 1, y = P ? arguments[0].elements || arguments[0].e : arguments[0]);
                var k = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                if (c && V.Promise && (k.promise = new V.Promise(function (e, t) {
                        k.resolver = e, k.rejecter = t
                    })), P ? (v = arguments[0].properties || arguments[0].p, w = arguments[0].options || arguments[0].o) : (v = arguments[h], w = arguments[h + 1]), y = i(y)) {
                    var A = y.length,
                        F = 0;
                    if (!/^(stop|finish|finishAll|pause|resume)$/i.test(v) && !g.isPlainObject(w)) {
                        w = {};
                        for (var E = h + 1; E < arguments.length; E++) x.isArray(arguments[E]) || !/^(fast|normal|slow)$/i.test(arguments[E]) && !/^\d/.test(arguments[E]) ? x.isString(arguments[E]) || x.isArray(arguments[E]) ? w.easing = arguments[E] : x.isFunction(arguments[E]) && (w.complete = arguments[E]) : w.duration = arguments[E]
                    }
                    var N;
                    switch (v) {
                        case "scroll":
                            N = "scroll";
                            break;
                        case "reverse":
                            N = "reverse";
                            break;
                        case "pause":
                            var H = (new Date).getTime();
                            return g.each(y, function (e, t) {
                                s(t, H)
                            }), g.each(V.State.calls, function (e, t) {
                                var r = !1;
                                t && g.each(t[1], function (e, n) {
                                    var i = w === a ? "" : w;
                                    return !0 !== i && t[2].queue !== i && (w !== a || !1 !== t[2].queue) || (g.each(y, function (e, a) {
                                        if (a === n) return t[5] = {
                                            resume: !1
                                        }, r = !0, !1
                                    }), !r && void 0)
                                })
                            }), e();
                        case "resume":
                            return g.each(y, function (e, t) {
                                l(t, H)
                            }), g.each(V.State.calls, function (e, t) {
                                var r = !1;
                                t && g.each(t[1], function (e, n) {
                                    var i = w === a ? "" : w;
                                    return !0 !== i && t[2].queue !== i && (w !== a || !1 !== t[2].queue) || (!t[5] || (g.each(y, function (e, a) {
                                        if (a === n) return t[5].resume = !0, r = !0, !1
                                    }), !r && void 0))
                                })
                            }), e();
                        case "finish":
                        case "finishAll":
                        case "stop":
                            g.each(y, function (e, t) {
                                o(t) && o(t).delayTimer && (clearTimeout(o(t).delayTimer.setTimeout), o(t).delayTimer.next && o(t).delayTimer.next(), delete o(t).delayTimer), "finishAll" !== v || !0 !== w && !x.isString(w) || (g.each(g.queue(t, x.isString(w) ? w : ""), function (e, t) {
                                    x.isFunction(t) && t()
                                }), g.queue(t, x.isString(w) ? w : "", []))
                            });
                            var O = [];
                            return g.each(V.State.calls, function (e, t) {
                                t && g.each(t[1], function (r, n) {
                                    var i = w === a ? "" : w;
                                    if (!0 !== i && t[2].queue !== i && (w !== a || !1 !== t[2].queue)) return !0;
                                    g.each(y, function (r, a) {
                                        if (a === n)
                                            if ((!0 === w || x.isString(w)) && (g.each(g.queue(a, x.isString(w) ? w : ""), function (e, t) {
                                                    x.isFunction(t) && t(null, !0)
                                                }), g.queue(a, x.isString(w) ? w : "", [])), "stop" === v) {
                                                var s = o(a);
                                                s && s.tweensContainer && !1 !== i && g.each(s.tweensContainer, function (e, t) {
                                                    t.endValue = t.currentValue
                                                }), O.push(e)
                                            } else "finish" !== v && "finishAll" !== v || (t[2].duration = 1)
                                    })
                                })
                            }), "stop" === v && (g.each(O, function (e, t) {
                                d(t, !0)
                            }), k.promise && k.resolver(y)), e();
                        default:
                            if (!g.isPlainObject(v) || x.isEmptyObject(v)) {
                                if (x.isString(v) && V.Redirects[v]) {
                                    var j = (u = g.extend({}, w)).duration,
                                        q = u.delay || 0;
                                    return !0 === u.backwards && (y = g.extend(!0, [], y).reverse()), g.each(y, function (e, t) {
                                        parseFloat(u.stagger) ? u.delay = q + parseFloat(u.stagger) * e : x.isFunction(u.stagger) && (u.delay = q + u.stagger.call(t, e, A)), u.drag && (u.duration = parseFloat(j) || (/^(callout|transition)/.test(v) ? 1e3 : S), u.duration = Math.max(u.duration * (u.backwards ? 1 - e / A : (e + 1) / A), .75 * u.duration, 200)), V.Redirects[v].call(t, t, u || {}, e, A, y, k.promise ? k : a)
                                    }), e()
                                }
                                var L = "Velocity: First argument (" + v + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                return k.promise ? k.rejecter(new Error(L)) : t.console && console.log(L), e()
                            }
                            N = "start"
                    }
                    var z = {
                            lastParent: null,
                            lastPosition: null,
                            lastFontSize: null,
                            lastPercentToPxWidth: null,
                            lastPercentToPxHeight: null,
                            lastEmToPx: null,
                            remToPx: null,
                            vwToPx: null,
                            vhToPx: null
                        },
                        R = [];
                    g.each(y, function (e, t) {
                        x.isNode(t) && n(t, e)
                    }), (u = g.extend({}, V.defaults, w)).loop = parseInt(u.loop, 10);
                    var M = 2 * u.loop - 1;
                    if (u.loop)
                        for (var $ = 0; $ < M; $++) {
                            var B = {
                                delay: u.delay,
                                progress: u.progress
                            };
                            $ === M - 1 && (B.display = u.display, B.visibility = u.visibility, B.complete = u.complete), C(y, "reverse", B)
                        }
                    return e()
                }
                k.promise && (v && w && !1 === w.promiseRejectEmpty ? k.resolver() : k.rejecter())
            };
            (V = g.extend(C, V)).animate = C;
            var A = t.requestAnimationFrame || h;
            if (!V.State.isMobile && r.hidden !== a) {
                var F = function () {
                    r.hidden ? (A = function (e) {
                        return setTimeout(function () {
                            e(!0)
                        }, 16)
                    }, f()) : A = t.requestAnimationFrame || h
                };
                F(), r.addEventListener("visibilitychange", F)
            }
            return e.Velocity = V, e !== t && (e.fn.velocity = C, e.fn.velocity.defaults = V.defaults), g.each(["Down", "Up"], function (e, t) {
                V.Redirects["slide" + t] = function (e, r, n, i, o, s) {
                    var l = g.extend({}, r),
                        u = l.begin,
                        c = l.complete,
                        p = {},
                        f = {
                            height: "",
                            marginTop: "",
                            marginBottom: "",
                            paddingTop: "",
                            paddingBottom: ""
                        };
                    l.display === a && (l.display = "Down" === t ? "inline" === V.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function () {
                        0 === n && u && u.call(o, o);
                        for (var r in f)
                            if (f.hasOwnProperty(r)) {
                                p[r] = e.style[r];
                                var a = T.getPropertyValue(e, r);
                                f[r] = "Down" === t ? [a, 0] : [0, a]
                            } p.overflow = e.style.overflow, e.style.overflow = "hidden"
                    }, l.complete = function () {
                        for (var t in p) p.hasOwnProperty(t) && (e.style[t] = p[t]);
                        n === i - 1 && (c && c.call(o, o), s && s.resolver(o))
                    }, V(e, f, l)
                }
            }), g.each(["In", "Out"], function (e, t) {
                V.Redirects["fade" + t] = function (e, r, n, i, o, s) {
                    var l = g.extend({}, r),
                        u = l.complete,
                        c = {
                            opacity: "In" === t ? 1 : 0
                        };
                    0 !== n && (l.begin = null), l.complete = n !== i - 1 ? null : function () {
                        u && u.call(o, o), s && s.resolver(o)
                    }, l.display === a && (l.display = "In" === t ? "auto" : "none"), V(this, c, l)
                }
            }), V
        }
        jQuery.fn.velocity = jQuery.fn.animate
    }(window.jQuery || window.Zepto || window, window, window ? window.document : void 0)
});
$(document).ready(function () {
    function e() {
        t.velocity({
            scaleY: .1
        }, {
            delay: 300,
            duration: 0
        }), a.velocity({
            scaleY: .1
        }, {
            delay: 300,
            duration: 0
        }), t.velocity({
            scaleY: 1
        }, {
            delay: 100,
            duration: 0
        }), a.velocity({
            scaleY: 1
        }, {
            delay: 100,
            duration: 0
        }), t.velocity({
            scaleY: .1
        }, {
            delay: 100,
            duration: 0
        }), a.velocity({
            scaleY: .1
        }, {
            delay: 100,
            duration: 0
        }), t.velocity({
            scaleY: 1
        }, {
            delay: 200,
            duration: 0
        }), a.velocity({
            scaleY: 1
        }, {
            delay: 200,
            duration: 0
        });
        setTimeout(e, i);
        i += 300
    }
    var a = $(".left-eye"),
        t = $(".right-eye"),
        o = $(".right-eyebrow"),
        l = $(".left-eyebrow");
    t.css("transform-origin", "50% 50%"), a.css("transform-origin", "50% 50%");
    var i = Math.floor(6e3 * Math.random()) + 1e3;
    e(), $("svg").on("mouseenter", function () {
        o.velocity({
            translateY: -10
        }, {
            delay: 0,
            duration: 300
        }), l.velocity({
            translateY: 2.5
        }, {
            delay: 0,
            duration: 300
        })
    }), $("svg").on("mouseleave", function () {
        o.velocity({
            translateY: 0
        }, {
            delay: 0,
            duration: 200
        }), l.velocity({
            translateY: 0
        }, {
            delay: 0,
            duration: 200
        })
    })
});