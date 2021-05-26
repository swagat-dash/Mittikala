! function(t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(T, t) {
    "use strict";
    var e = [],
        S = T.document,
        n = Object.getPrototypeOf,
        a = e.slice,
        m = e.concat,
        l = e.push,
        s = e.indexOf,
        i = {},
        o = i.toString,
        p = i.hasOwnProperty,
        r = p.toString,
        c = r.call(Object),
        g = {};

    function v(t, e) {
        var i = (e = e || S).createElement("script");
        i.text = t, e.head.appendChild(i).parentNode.removeChild(i)
    }
    var u = "3.2.1",
        k = function(t, e) {
            return new k.fn.init(t, e)
        },
        d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        h = /^-ms-/,
        f = /-([a-z])/g,
        y = function(t, e) {
            return e.toUpperCase()
        };

    function _(t) {
        var e = !!t && "length" in t && t.length,
            i = k.type(t);
        return "function" !== i && !k.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }
    k.fn = k.prototype = {
        jquery: u,
        constructor: k,
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(t) {
            return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function(t) {
            var e = k.merge(this.constructor(), t);
            return e.prevObject = this, e
        },
        each: function(t) {
            return k.each(this, t)
        },
        map: function(i) {
            return this.pushStack(k.map(this, function(t, e) {
                return i.call(t, e, t)
            }))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                i = +t + (t < 0 ? e : 0);
            return this.pushStack(0 <= i && i < e ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: e.sort,
        splice: e.splice
    }, k.extend = k.fn.extend = function() {
        var t, e, i, n, s, o, r = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || k.isFunction(r) || (r = {}), a === l && (r = this, a--); a < l; a++)
            if (null != (t = arguments[a]))
                for (e in t) i = r[e], r !== (n = t[e]) && (c && n && (k.isPlainObject(n) || (s = Array.isArray(n))) ? (s ? (s = !1, o = i && Array.isArray(i) ? i : []) : o = i && k.isPlainObject(i) ? i : {}, r[e] = k.extend(c, o, n)) : void 0 !== n && (r[e] = n));
        return r
    }, k.extend({
        expando: "jQuery" + (u + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === k.type(t)
        },
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            var e = k.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        },
        isPlainObject: function(t) {
            var e, i;
            return !(!t || "[object Object]" !== o.call(t) || (e = n(t)) && ("function" != typeof(i = p.call(e, "constructor") && e.constructor) || r.call(i) !== c))
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? i[o.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            v(t)
        },
        camelCase: function(t) {
            return t.replace(h, "ms-").replace(f, y)
        },
        each: function(t, e) {
            var i, n = 0;
            if (_(t))
                for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
            else
                for (n in t)
                    if (!1 === e.call(t[n], n, t[n])) break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(d, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (_(Object(t)) ? k.merge(i, "string" == typeof t ? [t] : t) : l.call(i, t)), i
        },
        inArray: function(t, e, i) {
            return null == e ? -1 : s.call(e, t, i)
        },
        merge: function(t, e) {
            for (var i = +e.length, n = 0, s = t.length; n < i; n++) t[s++] = e[n];
            return t.length = s, t
        },
        grep: function(t, e, i) {
            for (var n = [], s = 0, o = t.length, r = !i; s < o; s++) !e(t[s], s) !== r && n.push(t[s]);
            return n
        },
        map: function(t, e, i) {
            var n, s, o = 0,
                r = [];
            if (_(t))
                for (n = t.length; o < n; o++) null != (s = e(t[o], o, i)) && r.push(s);
            else
                for (o in t) null != (s = e(t[o], o, i)) && r.push(s);
            return m.apply([], r)
        },
        guid: 1,
        proxy: function(t, e) {
            var i, n, s;
            if ("string" == typeof e && (i = t[e], e = t, t = i), k.isFunction(t)) return n = a.call(arguments, 2), (s = function() {
                return t.apply(e || this, n.concat(a.call(arguments)))
            }).guid = t.guid = t.guid || k.guid++, s
        },
        now: Date.now,
        support: g
    }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = e[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        i["[object " + e + "]"] = e.toLowerCase()
    });
    var b = function(i) {
        var t, f, b, o, s, p, d, m, w, l, c, x, T, r, S, g, a, u, v, k = "sizzle" + 1 * new Date,
            y = i.document,
            C = 0,
            n = 0,
            h = rt(),
            _ = rt(),
            P = rt(),
            $ = function(t, e) {
                return t === e && (c = !0), 0
            },
            M = {}.hasOwnProperty,
            e = [],
            D = e.pop,
            O = e.push,
            A = e.push,
            E = e.slice,
            L = function(t, e) {
                for (var i = 0, n = t.length; i < n; i++)
                    if (t[i] === e) return i;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            I = "[\\x20\\t\\r\\n\\f]",
            F = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            N = "\\[" + I + "*(" + F + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + I + "*\\]",
            H = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            z = new RegExp(I + "+", "g"),
            Y = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
            j = new RegExp("^" + I + "*," + I + "*"),
            B = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
            W = new RegExp("=" + I + "*([^\\]'\"]*?)" + I + "*\\]", "g"),
            q = new RegExp(H),
            U = new RegExp("^" + F + "$"),
            V = {
                ID: new RegExp("^#(" + F + ")"),
                CLASS: new RegExp("^\\.(" + F + ")"),
                TAG: new RegExp("^(" + F + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + H),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            J = /[+~]/,
            K = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"),
            tt = function(t, e, i) {
                var n = "0x" + e - 65536;
                return n != n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            it = function(t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            },
            nt = function() {
                x()
            },
            st = yt(function(t) {
                return !0 === t.disabled && ("form" in t || "label" in t)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            A.apply(e = E.call(y.childNodes), y.childNodes), e[y.childNodes.length].nodeType
        } catch (t) {
            A = {
                apply: e.length ? function(t, e) {
                    O.apply(t, E.call(e))
                } : function(t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }
            }
        }

        function ot(t, e, i, n) {
            var s, o, r, a, l, c, u, d = e && e.ownerDocument,
                h = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== h && 9 !== h && 11 !== h) return i;
            if (!n && ((e ? e.ownerDocument || e : y) !== T && x(e), e = e || T, S)) {
                if (11 !== h && (l = Q.exec(t)))
                    if (s = l[1]) {
                        if (9 === h) {
                            if (!(r = e.getElementById(s))) return i;
                            if (r.id === s) return i.push(r), i
                        } else if (d && (r = d.getElementById(s)) && v(e, r) && r.id === s) return i.push(r), i
                    } else {
                        if (l[2]) return A.apply(i, e.getElementsByTagName(t)), i;
                        if ((s = l[3]) && f.getElementsByClassName && e.getElementsByClassName) return A.apply(i, e.getElementsByClassName(s)), i
                    } if (f.qsa && !P[t + " "] && (!g || !g.test(t))) {
                    if (1 !== h) d = e, u = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(et, it) : e.setAttribute("id", a = k), o = (c = p(t)).length; o--;) c[o] = "#" + a + " " + vt(c[o]);
                        u = c.join(","), d = J.test(t) && mt(e.parentNode) || e
                    }
                    if (u) try {
                        return A.apply(i, d.querySelectorAll(u)), i
                    } catch (t) {} finally {
                        a === k && e.removeAttribute("id")
                    }
                }
            }
            return m(t.replace(Y, "$1"), e, i, n)
        }

        function rt() {
            var n = [];
            return function t(e, i) {
                return n.push(e + " ") > b.cacheLength && delete t[n.shift()], t[e + " "] = i
            }
        }

        function at(t) {
            return t[k] = !0, t
        }

        function lt(t) {
            var e = T.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function ct(t, e) {
            for (var i = t.split("|"), n = i.length; n--;) b.attrHandle[i[n]] = e
        }

        function ut(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === e) return -1;
            return t ? 1 : -1
        }

        function dt(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function ht(i) {
            return function(t) {
                var e = t.nodeName.toLowerCase();
                return ("input" === e || "button" === e) && t.type === i
            }
        }

        function ft(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && st(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function pt(r) {
            return at(function(o) {
                return o = +o, at(function(t, e) {
                    for (var i, n = r([], t.length, o), s = n.length; s--;) t[i = n[s]] && (t[i] = !(e[i] = t[i]))
                })
            })
        }

        function mt(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        for (t in f = ot.support = {}, s = ot.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, x = ot.setDocument = function(t) {
                var e, i, n = t ? t.ownerDocument || t : y;
                return n !== T && 9 === n.nodeType && n.documentElement && (r = (T = n).documentElement, S = !s(T), y !== T && (i = T.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", nt, !1) : i.attachEvent && i.attachEvent("onunload", nt)), f.attributes = lt(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), f.getElementsByTagName = lt(function(t) {
                    return t.appendChild(T.createComment("")), !t.getElementsByTagName("*").length
                }), f.getElementsByClassName = Z.test(T.getElementsByClassName), f.getById = lt(function(t) {
                    return r.appendChild(t).id = k, !T.getElementsByName || !T.getElementsByName(k).length
                }), f.getById ? (b.filter.ID = function(t) {
                    var e = t.replace(K, tt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }, b.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && S) {
                        var i = e.getElementById(t);
                        return i ? [i] : []
                    }
                }) : (b.filter.ID = function(t) {
                    var i = t.replace(K, tt);
                    return function(t) {
                        var e = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return e && e.value === i
                    }
                }, b.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && S) {
                        var i, n, s, o = e.getElementById(t);
                        if (o) {
                            if ((i = o.getAttributeNode("id")) && i.value === t) return [o];
                            for (s = e.getElementsByName(t), n = 0; o = s[n++];)
                                if ((i = o.getAttributeNode("id")) && i.value === t) return [o]
                        }
                        return []
                    }
                }), b.find.TAG = f.getElementsByTagName ? function(t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : f.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var i, n = [],
                        s = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = o[s++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return o
                }, b.find.CLASS = f.getElementsByClassName && function(t, e) {
                    if (void 0 !== e.getElementsByClassName && S) return e.getElementsByClassName(t)
                }, a = [], g = [], (f.qsa = Z.test(T.querySelectorAll)) && (lt(function(t) {
                    r.appendChild(t).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + I + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + I + "*(?:value|" + R + ")"), t.querySelectorAll("[id~=" + k + "-]").length || g.push("~="), t.querySelectorAll(":checked").length || g.push(":checked"), t.querySelectorAll("a#" + k + "+*").length || g.push(".#.+[+~]")
                }), lt(function(t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = T.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + I + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), r.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:")
                })), (f.matchesSelector = Z.test(u = r.matches || r.webkitMatchesSelector || r.mozMatchesSelector || r.oMatchesSelector || r.msMatchesSelector)) && lt(function(t) {
                    f.disconnectedMatch = u.call(t, "*"), u.call(t, "[s!='']:x"), a.push("!=", H)
                }), g = g.length && new RegExp(g.join("|")), a = a.length && new RegExp(a.join("|")), e = Z.test(r.compareDocumentPosition), v = e || Z.test(r.contains) ? function(t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, $ = e ? function(t, e) {
                    if (t === e) return c = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !f.sortDetached && e.compareDocumentPosition(t) === i ? t === T || t.ownerDocument === y && v(y, t) ? -1 : e === T || e.ownerDocument === y && v(y, e) ? 1 : l ? L(l, t) - L(l, e) : 0 : 4 & i ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return c = !0, 0;
                    var i, n = 0,
                        s = t.parentNode,
                        o = e.parentNode,
                        r = [t],
                        a = [e];
                    if (!s || !o) return t === T ? -1 : e === T ? 1 : s ? -1 : o ? 1 : l ? L(l, t) - L(l, e) : 0;
                    if (s === o) return ut(t, e);
                    for (i = t; i = i.parentNode;) r.unshift(i);
                    for (i = e; i = i.parentNode;) a.unshift(i);
                    for (; r[n] === a[n];) n++;
                    return n ? ut(r[n], a[n]) : r[n] === y ? -1 : a[n] === y ? 1 : 0
                }), T
            }, ot.matches = function(t, e) {
                return ot(t, null, null, e)
            }, ot.matchesSelector = function(t, e) {
                if ((t.ownerDocument || t) !== T && x(t), e = e.replace(W, "='$1']"), f.matchesSelector && S && !P[e + " "] && (!a || !a.test(e)) && (!g || !g.test(e))) try {
                    var i = u.call(t, e);
                    if (i || f.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (t) {}
                return 0 < ot(e, T, null, [t]).length
            }, ot.contains = function(t, e) {
                return (t.ownerDocument || t) !== T && x(t), v(t, e)
            }, ot.attr = function(t, e) {
                (t.ownerDocument || t) !== T && x(t);
                var i = b.attrHandle[e.toLowerCase()],
                    n = i && M.call(b.attrHandle, e.toLowerCase()) ? i(t, e, !S) : void 0;
                return void 0 !== n ? n : f.attributes || !S ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }, ot.escape = function(t) {
                return (t + "").replace(et, it)
            }, ot.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, ot.uniqueSort = function(t) {
                var e, i = [],
                    n = 0,
                    s = 0;
                if (c = !f.detectDuplicates, l = !f.sortStable && t.slice(0), t.sort($), c) {
                    for (; e = t[s++];) e === t[s] && (n = i.push(s));
                    for (; n--;) t.splice(i[n], 1)
                }
                return l = null, t
            }, o = ot.getText = function(t) {
                var e, i = "",
                    n = 0,
                    s = t.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += o(t)
                    } else if (3 === s || 4 === s) return t.nodeValue
                } else
                    for (; e = t[n++];) i += o(e);
                return i
            }, (b = ot.selectors = {
                cacheLength: 50,
                createPseudo: at,
                match: V,
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
                    ATTR: function(t) {
                        return t[1] = t[1].replace(K, tt), t[3] = (t[3] || t[4] || t[5] || "").replace(K, tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, i = !t[6] && t[2];
                        return V.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && q.test(i) && (e = p(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(K, tt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = h[t + " "];
                        return e || (e = new RegExp("(^|" + I + ")" + t + "(" + I + "|$)")) && h(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(i, n, s) {
                        return function(t) {
                            var e = ot.attr(t, i);
                            return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === s : "!=" === n ? e !== s : "^=" === n ? s && 0 === e.indexOf(s) : "*=" === n ? s && -1 < e.indexOf(s) : "$=" === n ? s && e.slice(-s.length) === s : "~=" === n ? -1 < (" " + e.replace(z, " ") + " ").indexOf(s) : "|=" === n && (e === s || e.slice(0, s.length + 1) === s + "-"))
                        }
                    },
                    CHILD: function(p, t, e, m, g) {
                        var v = "nth" !== p.slice(0, 3),
                            y = "last" !== p.slice(-4),
                            _ = "of-type" === t;
                        return 1 === m && 0 === g ? function(t) {
                            return !!t.parentNode
                        } : function(t, e, i) {
                            var n, s, o, r, a, l, c = v !== y ? "nextSibling" : "previousSibling",
                                u = t.parentNode,
                                d = _ && t.nodeName.toLowerCase(),
                                h = !i && !_,
                                f = !1;
                            if (u) {
                                if (v) {
                                    for (; c;) {
                                        for (r = t; r = r[c];)
                                            if (_ ? r.nodeName.toLowerCase() === d : 1 === r.nodeType) return !1;
                                        l = c = "only" === p && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [y ? u.firstChild : u.lastChild], y && h) {
                                    for (f = (a = (n = (s = (o = (r = u)[k] || (r[k] = {}))[r.uniqueID] || (o[r.uniqueID] = {}))[p] || [])[0] === C && n[1]) && n[2], r = a && u.childNodes[a]; r = ++a && r && r[c] || (f = a = 0) || l.pop();)
                                        if (1 === r.nodeType && ++f && r === t) {
                                            s[p] = [C, a, f];
                                            break
                                        }
                                } else if (h && (f = a = (n = (s = (o = (r = t)[k] || (r[k] = {}))[r.uniqueID] || (o[r.uniqueID] = {}))[p] || [])[0] === C && n[1]), !1 === f)
                                    for (;
                                        (r = ++a && r && r[c] || (f = a = 0) || l.pop()) && ((_ ? r.nodeName.toLowerCase() !== d : 1 !== r.nodeType) || !++f || (h && ((s = (o = r[k] || (r[k] = {}))[r.uniqueID] || (o[r.uniqueID] = {}))[p] = [C, f]), r !== t)););
                                return (f -= g) === m || f % m == 0 && 0 <= f / m
                            }
                        }
                    },
                    PSEUDO: function(t, o) {
                        var e, r = b.pseudos[t] || b.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t);
                        return r[k] ? r(o) : 1 < r.length ? (e = [t, t, "", o], b.setFilters.hasOwnProperty(t.toLowerCase()) ? at(function(t, e) {
                            for (var i, n = r(t, o), s = n.length; s--;) t[i = L(t, n[s])] = !(e[i] = n[s])
                        }) : function(t) {
                            return r(t, 0, e)
                        }) : r
                    }
                },
                pseudos: {
                    not: at(function(t) {
                        var n = [],
                            s = [],
                            a = d(t.replace(Y, "$1"));
                        return a[k] ? at(function(t, e, i, n) {
                            for (var s, o = a(t, null, n, []), r = t.length; r--;)(s = o[r]) && (t[r] = !(e[r] = s))
                        }) : function(t, e, i) {
                            return n[0] = t, a(n, null, i, s), n[0] = null, !s.pop()
                        }
                    }),
                    has: at(function(e) {
                        return function(t) {
                            return 0 < ot(e, t).length
                        }
                    }),
                    contains: at(function(e) {
                        return e = e.replace(K, tt),
                            function(t) {
                                return -1 < (t.textContent || t.innerText || o(t)).indexOf(e)
                            }
                    }),
                    lang: at(function(i) {
                        return U.test(i || "") || ot.error("unsupported lang: " + i), i = i.replace(K, tt).toLowerCase(),
                            function(t) {
                                var e;
                                do {
                                    if (e = S ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === i || 0 === e.indexOf(i + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var e = i.location && i.location.hash;
                        return e && e.slice(1) === t.id
                    },
                    root: function(t) {
                        return t === r
                    },
                    focus: function(t) {
                        return t === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: ft(!1),
                    disabled: ft(!0),
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !b.pseudos.empty(t)
                    },
                    header: function(t) {
                        return G.test(t.nodeName)
                    },
                    input: function(t) {
                        return X.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: pt(function() {
                        return [0]
                    }),
                    last: pt(function(t, e) {
                        return [e - 1]
                    }),
                    eq: pt(function(t, e, i) {
                        return [i < 0 ? i + e : i]
                    }),
                    even: pt(function(t, e) {
                        for (var i = 0; i < e; i += 2) t.push(i);
                        return t
                    }),
                    odd: pt(function(t, e) {
                        for (var i = 1; i < e; i += 2) t.push(i);
                        return t
                    }),
                    lt: pt(function(t, e, i) {
                        for (var n = i < 0 ? i + e : i; 0 <= --n;) t.push(n);
                        return t
                    }),
                    gt: pt(function(t, e, i) {
                        for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                        return t
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[t] = dt(t);
        for (t in {
                submit: !0,
                reset: !0
            }) b.pseudos[t] = ht(t);

        function gt() {}

        function vt(t) {
            for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
            return n
        }

        function yt(a, t, e) {
            var l = t.dir,
                c = t.next,
                u = c || l,
                d = e && "parentNode" === u,
                h = n++;
            return t.first ? function(t, e, i) {
                for (; t = t[l];)
                    if (1 === t.nodeType || d) return a(t, e, i);
                return !1
            } : function(t, e, i) {
                var n, s, o, r = [C, h];
                if (i) {
                    for (; t = t[l];)
                        if ((1 === t.nodeType || d) && a(t, e, i)) return !0
                } else
                    for (; t = t[l];)
                        if (1 === t.nodeType || d)
                            if (s = (o = t[k] || (t[k] = {}))[t.uniqueID] || (o[t.uniqueID] = {}), c && c === t.nodeName.toLowerCase()) t = t[l] || t;
                            else {
                                if ((n = s[u]) && n[0] === C && n[1] === h) return r[2] = n[2];
                                if ((s[u] = r)[2] = a(t, e, i)) return !0
                            } return !1
            }
        }

        function _t(s) {
            return 1 < s.length ? function(t, e, i) {
                for (var n = s.length; n--;)
                    if (!s[n](t, e, i)) return !1;
                return !0
            } : s[0]
        }

        function bt(t, e, i, n, s) {
            for (var o, r = [], a = 0, l = t.length, c = null != e; a < l; a++)(o = t[a]) && (i && !i(o, n, s) || (r.push(o), c && e.push(a)));
            return r
        }

        function wt(f, p, m, g, v, t) {
            return g && !g[k] && (g = wt(g)), v && !v[k] && (v = wt(v, t)), at(function(t, e, i, n) {
                var s, o, r, a = [],
                    l = [],
                    c = e.length,
                    u = t || function(t, e, i) {
                        for (var n = 0, s = e.length; n < s; n++) ot(t, e[n], i);
                        return i
                    }(p || "*", i.nodeType ? [i] : i, []),
                    d = !f || !t && p ? u : bt(u, a, f, i, n),
                    h = m ? v || (t ? f : c || g) ? [] : e : d;
                if (m && m(d, h, i, n), g)
                    for (s = bt(h, l), g(s, [], i, n), o = s.length; o--;)(r = s[o]) && (h[l[o]] = !(d[l[o]] = r));
                if (t) {
                    if (v || f) {
                        if (v) {
                            for (s = [], o = h.length; o--;)(r = h[o]) && s.push(d[o] = r);
                            v(null, h = [], s, n)
                        }
                        for (o = h.length; o--;)(r = h[o]) && -1 < (s = v ? L(t, r) : a[o]) && (t[s] = !(e[s] = r))
                    }
                } else h = bt(h === e ? h.splice(c, h.length) : h), v ? v(null, e, h, n) : A.apply(e, h)
            })
        }

        function xt(t) {
            for (var s, e, i, n = t.length, o = b.relative[t[0].type], r = o || b.relative[" "], a = o ? 1 : 0, l = yt(function(t) {
                    return t === s
                }, r, !0), c = yt(function(t) {
                    return -1 < L(s, t)
                }, r, !0), u = [function(t, e, i) {
                    var n = !o && (i || e !== w) || ((s = e).nodeType ? l(t, e, i) : c(t, e, i));
                    return s = null, n
                }]; a < n; a++)
                if (e = b.relative[t[a].type]) u = [yt(_t(u), e)];
                else {
                    if ((e = b.filter[t[a].type].apply(null, t[a].matches))[k]) {
                        for (i = ++a; i < n && !b.relative[t[i].type]; i++);
                        return wt(1 < a && _t(u), 1 < a && vt(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(Y, "$1"), e, a < i && xt(t.slice(a, i)), i < n && xt(t = t.slice(i)), i < n && vt(t))
                    }
                    u.push(e)
                } return _t(u)
        }
        return gt.prototype = b.filters = b.pseudos, b.setFilters = new gt, p = ot.tokenize = function(t, e) {
            var i, n, s, o, r, a, l, c = _[t + " "];
            if (c) return e ? 0 : c.slice(0);
            for (r = t, a = [], l = b.preFilter; r;) {
                for (o in i && !(n = j.exec(r)) || (n && (r = r.slice(n[0].length) || r), a.push(s = [])), i = !1, (n = B.exec(r)) && (i = n.shift(), s.push({
                        value: i,
                        type: n[0].replace(Y, " ")
                    }), r = r.slice(i.length)), b.filter) !(n = V[o].exec(r)) || l[o] && !(n = l[o](n)) || (i = n.shift(), s.push({
                    value: i,
                    type: o,
                    matches: n
                }), r = r.slice(i.length));
                if (!i) break
            }
            return e ? r.length : r ? ot.error(t) : _(t, a).slice(0)
        }, d = ot.compile = function(t, e) {
            var i, g, v, y, _, n, s = [],
                o = [],
                r = P[t + " "];
            if (!r) {
                for (e || (e = p(t)), i = e.length; i--;)(r = xt(e[i]))[k] ? s.push(r) : o.push(r);
                (r = P(t, (g = o, y = 0 < (v = s).length, _ = 0 < g.length, n = function(t, e, i, n, s) {
                    var o, r, a, l = 0,
                        c = "0",
                        u = t && [],
                        d = [],
                        h = w,
                        f = t || _ && b.find.TAG("*", s),
                        p = C += null == h ? 1 : Math.random() || .1,
                        m = f.length;
                    for (s && (w = e === T || e || s); c !== m && null != (o = f[c]); c++) {
                        if (_ && o) {
                            for (r = 0, e || o.ownerDocument === T || (x(o), i = !S); a = g[r++];)
                                if (a(o, e || T, i)) {
                                    n.push(o);
                                    break
                                } s && (C = p)
                        }
                        y && ((o = !a && o) && l--, t && u.push(o))
                    }
                    if (l += c, y && c !== l) {
                        for (r = 0; a = v[r++];) a(u, d, e, i);
                        if (t) {
                            if (0 < l)
                                for (; c--;) u[c] || d[c] || (d[c] = D.call(n));
                            d = bt(d)
                        }
                        A.apply(n, d), s && !t && 0 < d.length && 1 < l + v.length && ot.uniqueSort(n)
                    }
                    return s && (C = p, w = h), u
                }, y ? at(n) : n))).selector = t
            }
            return r
        }, m = ot.select = function(t, e, i, n) {
            var s, o, r, a, l, c = "function" == typeof t && t,
                u = !n && p(t = c.selector || t);
            if (i = i || [], 1 === u.length) {
                if (2 < (o = u[0] = u[0].slice(0)).length && "ID" === (r = o[0]).type && 9 === e.nodeType && S && b.relative[o[1].type]) {
                    if (!(e = (b.find.ID(r.matches[0].replace(K, tt), e) || [])[0])) return i;
                    c && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (s = V.needsContext.test(t) ? 0 : o.length; s-- && (r = o[s], !b.relative[a = r.type]);)
                    if ((l = b.find[a]) && (n = l(r.matches[0].replace(K, tt), J.test(o[0].type) && mt(e.parentNode) || e))) {
                        if (o.splice(s, 1), !(t = n.length && vt(o))) return A.apply(i, n), i;
                        break
                    }
            }
            return (c || d(t, u))(n, e, !S, i, !e || J.test(t) && mt(e.parentNode) || e), i
        }, f.sortStable = k.split("").sort($).join("") === k, f.detectDuplicates = !!c, x(), f.sortDetached = lt(function(t) {
            return 1 & t.compareDocumentPosition(T.createElement("fieldset"))
        }), lt(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || ct("type|href|height|width", function(t, e, i) {
            if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), f.attributes && lt(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || ct("value", function(t, e, i) {
            if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), lt(function(t) {
            return null == t.getAttribute("disabled")
        }) || ct(R, function(t, e, i) {
            var n;
            if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), ot
    }(T);
    k.find = b, k.expr = b.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = b.uniqueSort, k.text = b.getText, k.isXMLDoc = b.isXML, k.contains = b.contains, k.escapeSelector = b.escape;
    var w = function(t, e, i) {
            for (var n = [], s = void 0 !== i;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (s && k(t).is(i)) break;
                    n.push(t)
                } return n
        },
        x = function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        },
        C = k.expr.match.needsContext;

    function P(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }
    var $ = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        M = /^.[^:#\[\.,]*$/;

    function D(t, i, n) {
        return k.isFunction(i) ? k.grep(t, function(t, e) {
            return !!i.call(t, e, t) !== n
        }) : i.nodeType ? k.grep(t, function(t) {
            return t === i !== n
        }) : "string" != typeof i ? k.grep(t, function(t) {
            return -1 < s.call(i, t) !== n
        }) : M.test(i) ? k.filter(i, t, n) : (i = k.filter(i, t), k.grep(t, function(t) {
            return -1 < s.call(i, t) !== n && 1 === t.nodeType
        }))
    }
    k.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? k.find.matchesSelector(n, t) ? [n] : [] : k.find.matches(t, k.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, k.fn.extend({
        find: function(t) {
            var e, i, n = this.length,
                s = this;
            if ("string" != typeof t) return this.pushStack(k(t).filter(function() {
                for (e = 0; e < n; e++)
                    if (k.contains(s[e], this)) return !0
            }));
            for (i = this.pushStack([]), e = 0; e < n; e++) k.find(t, s[e], i);
            return 1 < n ? k.uniqueSort(i) : i
        },
        filter: function(t) {
            return this.pushStack(D(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(D(this, t || [], !0))
        },
        is: function(t) {
            return !!D(this, "string" == typeof t && C.test(t) ? k(t) : t || [], !1).length
        }
    });
    var O, A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (k.fn.init = function(t, e, i) {
        var n, s;
        if (!t) return this;
        if (i = i || O, "string" == typeof t) {
            if (!(n = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : A.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof k ? e[0] : e, k.merge(this, k.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : S, !0)), $.test(n[1]) && k.isPlainObject(e))
                    for (n in e) k.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this
            }
            return (s = S.getElementById(n[2])) && (this[0] = s, this.length = 1), this
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : k.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(k) : k.makeArray(t, this)
    }).prototype = k.fn, O = k(S);
    var E = /^(?:parents|prev(?:Until|All))/,
        L = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function R(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }
    k.fn.extend({
        has: function(t) {
            var e = k(t, this),
                i = e.length;
            return this.filter(function() {
                for (var t = 0; t < i; t++)
                    if (k.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            var i, n = 0,
                s = this.length,
                o = [],
                r = "string" != typeof t && k(t);
            if (!C.test(t))
                for (; n < s; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (r ? -1 < r.index(i) : 1 === i.nodeType && k.find.matchesSelector(i, t))) {
                            o.push(i);
                            break
                        } return this.pushStack(1 < o.length ? k.uniqueSort(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? s.call(k(t), this[0]) : s.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), k.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return w(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return w(t, "parentNode", i)
        },
        next: function(t) {
            return R(t, "nextSibling")
        },
        prev: function(t) {
            return R(t, "previousSibling")
        },
        nextAll: function(t) {
            return w(t, "nextSibling")
        },
        prevAll: function(t) {
            return w(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return w(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return w(t, "previousSibling", i)
        },
        siblings: function(t) {
            return x((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return x(t.firstChild)
        },
        contents: function(t) {
            return P(t, "iframe") ? t.contentDocument : (P(t, "template") && (t = t.content || t), k.merge([], t.childNodes))
        }
    }, function(n, s) {
        k.fn[n] = function(t, e) {
            var i = k.map(this, s, t);
            return "Until" !== n.slice(-5) && (e = t), e && "string" == typeof e && (i = k.filter(e, i)), 1 < this.length && (L[n] || k.uniqueSort(i), E.test(n) && i.reverse()), this.pushStack(i)
        }
    });
    var I = /[^\x20\t\r\n\f]+/g;

    function F(t) {
        return t
    }

    function N(t) {
        throw t
    }

    function H(t, e, i, n) {
        var s;
        try {
            t && k.isFunction(s = t.promise) ? s.call(t).done(e).fail(i) : t && k.isFunction(s = t.then) ? s.call(t, e, i) : e.apply(void 0, [t].slice(n))
        } catch (t) {
            i.apply(void 0, [t])
        }
    }
    k.Callbacks = function(n) {
        var t, i;
        n = "string" == typeof n ? (t = n, i = {}, k.each(t.match(I) || [], function(t, e) {
            i[e] = !0
        }), i) : k.extend({}, n);
        var s, e, o, r, a = [],
            l = [],
            c = -1,
            u = function() {
                for (r = r || n.once, o = s = !0; l.length; c = -1)
                    for (e = l.shift(); ++c < a.length;) !1 === a[c].apply(e[0], e[1]) && n.stopOnFalse && (c = a.length, e = !1);
                n.memory || (e = !1), s = !1, r && (a = e ? [] : "")
            },
            d = {
                add: function() {
                    return a && (e && !s && (c = a.length - 1, l.push(e)), function i(t) {
                        k.each(t, function(t, e) {
                            k.isFunction(e) ? n.unique && d.has(e) || a.push(e) : e && e.length && "string" !== k.type(e) && i(e)
                        })
                    }(arguments), e && !s && u()), this
                },
                remove: function() {
                    return k.each(arguments, function(t, e) {
                        for (var i; - 1 < (i = k.inArray(e, a, i));) a.splice(i, 1), i <= c && c--
                    }), this
                },
                has: function(t) {
                    return t ? -1 < k.inArray(t, a) : 0 < a.length
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return r = l = [], a = e = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return r = l = [], e || s || (a = e = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(t, e) {
                    return r || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), s || u()), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return d
    }, k.extend({
        Deferred: function(t) {
            var o = [
                    ["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2],
                    ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]
                ],
                s = "pending",
                r = {
                    state: function() {
                        return s
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    catch: function(t) {
                        return r.then(null, t)
                    },
                    pipe: function() {
                        var s = arguments;
                        return k.Deferred(function(n) {
                            k.each(o, function(t, e) {
                                var i = k.isFunction(s[e[4]]) && s[e[4]];
                                a[e[1]](function() {
                                    var t = i && i.apply(this, arguments);
                                    t && k.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[e[0] + "With"](this, i ? [t] : arguments)
                                })
                            }), s = null
                        }).promise()
                    },
                    then: function(e, i, n) {
                        var l = 0;

                        function c(s, o, r, a) {
                            return function() {
                                var i = this,
                                    n = arguments,
                                    t = function() {
                                        var t, e;
                                        if (!(s < l)) {
                                            if ((t = r.apply(i, n)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            e = t && ("object" == typeof t || "function" == typeof t) && t.then, k.isFunction(e) ? a ? e.call(t, c(l, o, F, a), c(l, o, N, a)) : (l++, e.call(t, c(l, o, F, a), c(l, o, N, a), c(l, o, F, o.notifyWith))) : (r !== F && (i = void 0, n = [t]), (a || o.resolveWith)(i, n))
                                        }
                                    },
                                    e = a ? t : function() {
                                        try {
                                            t()
                                        } catch (t) {
                                            k.Deferred.exceptionHook && k.Deferred.exceptionHook(t, e.stackTrace), l <= s + 1 && (r !== N && (i = void 0, n = [t]), o.rejectWith(i, n))
                                        }
                                    };
                                s ? e() : (k.Deferred.getStackHook && (e.stackTrace = k.Deferred.getStackHook()), T.setTimeout(e))
                            }
                        }
                        return k.Deferred(function(t) {
                            o[0][3].add(c(0, t, k.isFunction(n) ? n : F, t.notifyWith)), o[1][3].add(c(0, t, k.isFunction(e) ? e : F)), o[2][3].add(c(0, t, k.isFunction(i) ? i : N))
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? k.extend(t, r) : r
                    }
                },
                a = {};
            return k.each(o, function(t, e) {
                var i = e[2],
                    n = e[5];
                r[e[1]] = i.add, n && i.add(function() {
                    s = n
                }, o[3 - t][2].disable, o[0][2].lock), i.add(e[3].fire), a[e[0]] = function() {
                    return a[e[0] + "With"](this === a ? void 0 : this, arguments), this
                }, a[e[0] + "With"] = i.fireWith
            }), r.promise(a), t && t.call(a, a), a
        },
        when: function(t) {
            var i = arguments.length,
                e = i,
                n = Array(e),
                s = a.call(arguments),
                o = k.Deferred(),
                r = function(e) {
                    return function(t) {
                        n[e] = this, s[e] = 1 < arguments.length ? a.call(arguments) : t, --i || o.resolveWith(n, s)
                    }
                };
            if (i <= 1 && (H(t, o.done(r(e)).resolve, o.reject, !i), "pending" === o.state() || k.isFunction(s[e] && s[e].then))) return o.then();
            for (; e--;) H(s[e], r(e), o.reject);
            return o.promise()
        }
    });
    var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    k.Deferred.exceptionHook = function(t, e) {
        T.console && T.console.warn && t && z.test(t.name) && T.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
    }, k.readyException = function(t) {
        T.setTimeout(function() {
            throw t
        })
    };
    var Y = k.Deferred();

    function j() {
        S.removeEventListener("DOMContentLoaded", j), T.removeEventListener("load", j), k.ready()
    }
    k.fn.ready = function(t) {
        return Y.then(t).catch(function(t) {
            k.readyException(t)
        }), this
    }, k.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(t) {
            (!0 === t ? --k.readyWait : k.isReady) || ((k.isReady = !0) !== t && 0 < --k.readyWait || Y.resolveWith(S, [k]))
        }
    }), k.ready.then = Y.then, "complete" === S.readyState || "loading" !== S.readyState && !S.documentElement.doScroll ? T.setTimeout(k.ready) : (S.addEventListener("DOMContentLoaded", j), T.addEventListener("load", j));
    var B = function(t, e, i, n, s, o, r) {
            var a = 0,
                l = t.length,
                c = null == i;
            if ("object" === k.type(i))
                for (a in s = !0, i) B(t, e, a, i[a], !0, o, r);
            else if (void 0 !== n && (s = !0, k.isFunction(n) || (r = !0), c && (r ? (e.call(t, n), e = null) : (c = e, e = function(t, e, i) {
                    return c.call(k(t), i)
                })), e))
                for (; a < l; a++) e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
            return s ? t : c ? e.call(t) : l ? e(t[0], i) : o
        },
        W = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };

    function q() {
        this.expando = k.expando + q.uid++
    }
    q.uid = 1, q.prototype = {
        cache: function(t) {
            var e = t[this.expando];
            return e || (e = {}, W(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function(t, e, i) {
            var n, s = this.cache(t);
            if ("string" == typeof e) s[k.camelCase(e)] = i;
            else
                for (n in e) s[k.camelCase(n)] = e[n];
            return s
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][k.camelCase(e)]
        },
        access: function(t, e, i) {
            return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
        },
        remove: function(t, e) {
            var i, n = t[this.expando];
            if (void 0 !== n) {
                if (void 0 !== e) {
                    Array.isArray(e) ? e = e.map(k.camelCase) : e = (e = k.camelCase(e)) in n ? [e] : e.match(I) || [], i = e.length;
                    for (; i--;) delete n[e[i]]
                }(void 0 === e || k.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !k.isEmptyObject(e)
        }
    };
    var U = new q,
        V = new q,
        X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        G = /[A-Z]/g;

    function Z(t, e, i) {
        var n, s;
        if (void 0 === i && 1 === t.nodeType)
            if (n = "data-" + e.replace(G, "-$&").toLowerCase(), "string" == typeof(i = t.getAttribute(n))) {
                try {
                    i = "true" === (s = i) || "false" !== s && ("null" === s ? null : s === +s + "" ? +s : X.test(s) ? JSON.parse(s) : s)
                } catch (t) {}
                V.set(t, e, i)
            } else i = void 0;
        return i
    }
    k.extend({
        hasData: function(t) {
            return V.hasData(t) || U.hasData(t)
        },
        data: function(t, e, i) {
            return V.access(t, e, i)
        },
        removeData: function(t, e) {
            V.remove(t, e)
        },
        _data: function(t, e, i) {
            return U.access(t, e, i)
        },
        _removeData: function(t, e) {
            U.remove(t, e)
        }
    }), k.fn.extend({
        data: function(i, t) {
            var e, n, s, o = this[0],
                r = o && o.attributes;
            if (void 0 === i) {
                if (this.length && (s = V.get(o), 1 === o.nodeType && !U.get(o, "hasDataAttrs"))) {
                    for (e = r.length; e--;) r[e] && (0 === (n = r[e].name).indexOf("data-") && (n = k.camelCase(n.slice(5)), Z(o, n, s[n])));
                    U.set(o, "hasDataAttrs", !0)
                }
                return s
            }
            return "object" == typeof i ? this.each(function() {
                V.set(this, i)
            }) : B(this, function(t) {
                var e;
                if (o && void 0 === t) {
                    if (void 0 !== (e = V.get(o, i))) return e;
                    if (void 0 !== (e = Z(o, i))) return e
                } else this.each(function() {
                    V.set(this, i, t)
                })
            }, null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                V.remove(this, t)
            })
        }
    }), k.extend({
        queue: function(t, e, i) {
            var n;
            if (t) return e = (e || "fx") + "queue", n = U.get(t, e), i && (!n || Array.isArray(i) ? n = U.access(t, e, k.makeArray(i)) : n.push(i)), n || []
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = k.queue(t, e),
                n = i.length,
                s = i.shift(),
                o = k._queueHooks(t, e);
            "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete o.stop, s.call(t, function() {
                k.dequeue(t, e)
            }, o)), !n && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return U.get(t, i) || U.access(t, i, {
                empty: k.Callbacks("once memory").add(function() {
                    U.remove(t, [e + "queue", i])
                })
            })
        }
    }), k.fn.extend({
        queue: function(e, i) {
            var t = 2;
            return "string" != typeof e && (i = e, e = "fx", t--), arguments.length < t ? k.queue(this[0], e) : void 0 === i ? this : this.each(function() {
                var t = k.queue(this, e, i);
                k._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && k.dequeue(this, e)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                k.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var i, n = 1,
                s = k.Deferred(),
                o = this,
                r = this.length,
                a = function() {
                    --n || s.resolveWith(o, [o])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;)(i = U.get(o[r], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
            return a(), s.promise(e)
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        J = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
        K = ["Top", "Right", "Bottom", "Left"],
        tt = function(t, e) {
            return "none" === (t = e || t).style.display || "" === t.style.display && k.contains(t.ownerDocument, t) && "none" === k.css(t, "display")
        },
        et = function(t, e, i, n) {
            var s, o, r = {};
            for (o in e) r[o] = t.style[o], t.style[o] = e[o];
            for (o in s = i.apply(t, n || []), e) t.style[o] = r[o];
            return s
        };

    function it(t, e, i, n) {
        var s, o = 1,
            r = 20,
            a = n ? function() {
                return n.cur()
            } : function() {
                return k.css(t, e, "")
            },
            l = a(),
            c = i && i[3] || (k.cssNumber[e] ? "" : "px"),
            u = (k.cssNumber[e] || "px" !== c && +l) && J.exec(k.css(t, e));
        if (u && u[3] !== c)
            for (c = c || u[3], i = i || [], u = +l || 1; u /= o = o || ".5", k.style(t, e, u + c), o !== (o = a() / l) && 1 !== o && --r;);
        return i && (u = +u || +l || 0, s = i[1] ? u + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = u, n.end = s)), s
    }
    var nt = {};

    function st(t, e) {
        for (var i, n, s = [], o = 0, r = t.length; o < r; o++)(n = t[o]).style && (i = n.style.display, e ? ("none" === i && (s[o] = U.get(n, "display") || null, s[o] || (n.style.display = "")), "" === n.style.display && tt(n) && (s[o] = (d = c = l = void 0, c = (a = n).ownerDocument, u = a.nodeName, (d = nt[u]) || (l = c.body.appendChild(c.createElement(u)), d = k.css(l, "display"), l.parentNode.removeChild(l), "none" === d && (d = "block"), nt[u] = d)))) : "none" !== i && (s[o] = "none", U.set(n, "display", i)));
        var a, l, c, u, d;
        for (o = 0; o < r; o++) null != s[o] && (t[o].style.display = s[o]);
        return t
    }
    k.fn.extend({
        show: function() {
            return st(this, !0)
        },
        hide: function() {
            return st(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                tt(this) ? k(this).show() : k(this).hide()
            })
        }
    });
    var ot = /^(?:checkbox|radio)$/i,
        rt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        at = /^$|\/(?:java|ecma)script/i,
        lt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function ct(t, e) {
        var i;
        return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && P(t, e) ? k.merge([t], i) : i
    }

    function ut(t, e) {
        for (var i = 0, n = t.length; i < n; i++) U.set(t[i], "globalEval", !e || U.get(e[i], "globalEval"))
    }
    lt.optgroup = lt.option, lt.tbody = lt.tfoot = lt.colgroup = lt.caption = lt.thead, lt.th = lt.td;
    var dt, ht, ft = /<|&#?\w+;/;

    function pt(t, e, i, n, s) {
        for (var o, r, a, l, c, u, d = e.createDocumentFragment(), h = [], f = 0, p = t.length; f < p; f++)
            if ((o = t[f]) || 0 === o)
                if ("object" === k.type(o)) k.merge(h, o.nodeType ? [o] : o);
                else if (ft.test(o)) {
            for (r = r || d.appendChild(e.createElement("div")), a = (rt.exec(o) || ["", ""])[1].toLowerCase(), l = lt[a] || lt._default, r.innerHTML = l[1] + k.htmlPrefilter(o) + l[2], u = l[0]; u--;) r = r.lastChild;
            k.merge(h, r.childNodes), (r = d.firstChild).textContent = ""
        } else h.push(e.createTextNode(o));
        for (d.textContent = "", f = 0; o = h[f++];)
            if (n && -1 < k.inArray(o, n)) s && s.push(o);
            else if (c = k.contains(o.ownerDocument, o), r = ct(d.appendChild(o), "script"), c && ut(r), i)
            for (u = 0; o = r[u++];) at.test(o.type || "") && i.push(o);
        return d
    }
    dt = S.createDocumentFragment().appendChild(S.createElement("div")), (ht = S.createElement("input")).setAttribute("type", "radio"), ht.setAttribute("checked", "checked"), ht.setAttribute("name", "t"), dt.appendChild(ht), g.checkClone = dt.cloneNode(!0).cloneNode(!0).lastChild.checked, dt.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!dt.cloneNode(!0).lastChild.defaultValue;
    var mt = S.documentElement,
        gt = /^key/,
        vt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        yt = /^([^.]*)(?:\.(.+)|)/;

    function _t() {
        return !0
    }

    function bt() {
        return !1
    }

    function wt() {
        try {
            return S.activeElement
        } catch (t) {}
    }

    function xt(t, e, i, n, s, o) {
        var r, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof i && (n = n || i, i = void 0), e) xt(t, a, i, n, e[a], o);
            return t
        }
        if (null == n && null == s ? (s = i, n = i = void 0) : null == s && ("string" == typeof i ? (s = n, n = void 0) : (s = n, n = i, i = void 0)), !1 === s) s = bt;
        else if (!s) return t;
        return 1 === o && (r = s, (s = function(t) {
            return k().off(t), r.apply(this, arguments)
        }).guid = r.guid || (r.guid = k.guid++)), t.each(function() {
            k.event.add(this, e, s, n, i)
        })
    }
    k.event = {
        global: {},
        add: function(e, t, i, n, s) {
            var o, r, a, l, c, u, d, h, f, p, m, g = U.get(e);
            if (g)
                for (i.handler && (i = (o = i).handler, s = o.selector), s && k.find.matchesSelector(mt, s), i.guid || (i.guid = k.guid++), (l = g.events) || (l = g.events = {}), (r = g.handle) || (r = g.handle = function(t) {
                        return void 0 !== k && k.event.triggered !== t.type ? k.event.dispatch.apply(e, arguments) : void 0
                    }), c = (t = (t || "").match(I) || [""]).length; c--;) f = m = (a = yt.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), f && (d = k.event.special[f] || {}, f = (s ? d.delegateType : d.bindType) || f, d = k.event.special[f] || {}, u = k.extend({
                    type: f,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: s,
                    needsContext: s && k.expr.match.needsContext.test(s),
                    namespace: p.join(".")
                }, o), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, n, p, r) || e.addEventListener && e.addEventListener(f, r)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = i.guid)), s ? h.splice(h.delegateCount++, 0, u) : h.push(u), k.event.global[f] = !0)
        },
        remove: function(t, e, i, n, s) {
            var o, r, a, l, c, u, d, h, f, p, m, g = U.hasData(t) && U.get(t);
            if (g && (l = g.events)) {
                for (c = (e = (e || "").match(I) || [""]).length; c--;)
                    if (f = m = (a = yt.exec(e[c]) || [])[1], p = (a[2] || "").split(".").sort(), f) {
                        for (d = k.event.special[f] || {}, h = l[f = (n ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = o = h.length; o--;) u = h[o], !s && m !== u.origType || i && i.guid !== u.guid || a && !a.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (h.splice(o, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(t, u));
                        r && !h.length && (d.teardown && !1 !== d.teardown.call(t, p, g.handle) || k.removeEvent(t, f, g.handle), delete l[f])
                    } else
                        for (f in l) k.event.remove(t, f + e[c], i, n, !0);
                k.isEmptyObject(l) && U.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            var e, i, n, s, o, r, a = k.event.fix(t),
                l = new Array(arguments.length),
                c = (U.get(this, "events") || {})[a.type] || [],
                u = k.event.special[a.type] || {};
            for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
            if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                for (r = k.event.handlers.call(this, a, c), e = 0;
                    (s = r[e++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = s.elem, i = 0;
                        (o = s.handlers[i++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (n = ((k.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, l)) && !1 === (a.result = n) && (a.preventDefault(), a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(t, e) {
            var i, n, s, o, r, a = [],
                l = e.delegateCount,
                c = t.target;
            if (l && c.nodeType && !("click" === t.type && 1 <= t.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                        for (o = [], r = {}, i = 0; i < l; i++) void 0 === r[s = (n = e[i]).selector + " "] && (r[s] = n.needsContext ? -1 < k(s, this).index(c) : k.find(s, this, null, [c]).length), r[s] && o.push(n);
                        o.length && a.push({
                            elem: c,
                            handlers: o
                        })
                    } return c = this, l < e.length && a.push({
                elem: c,
                handlers: e.slice(l)
            }), a
        },
        addProp: function(e, t) {
            Object.defineProperty(k.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: k.isFunction(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(t) {
            return t[k.expando] ? t : new k.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== wt() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === wt() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && P(this, "input")) return this.click(), !1
                },
                _default: function(t) {
                    return P(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, k.removeEvent = function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i)
    }, k.Event = function(t, e) {
        return this instanceof k.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? _t : bt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && k.extend(this, e), this.timeStamp = t && t.timeStamp || k.now(), void(this[k.expando] = !0)) : new k.Event(t, e)
    }, k.Event.prototype = {
        constructor: k.Event,
        isDefaultPrevented: bt,
        isPropagationStopped: bt,
        isImmediatePropagationStopped: bt,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = _t, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = _t, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = _t, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, k.each({
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
        which: function(t) {
            var e = t.button;
            return null == t.which && gt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && vt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, k.event.addProp), k.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, s) {
        k.event.special[t] = {
            delegateType: s,
            bindType: s,
            handle: function(t) {
                var e, i = t.relatedTarget,
                    n = t.handleObj;
                return i && (i === this || k.contains(this, i)) || (t.type = n.origType, e = n.handler.apply(this, arguments), t.type = s), e
            }
        }
    }), k.fn.extend({
        on: function(t, e, i, n) {
            return xt(this, t, e, i, n)
        },
        one: function(t, e, i, n) {
            return xt(this, t, e, i, n, 1)
        },
        off: function(t, e, i) {
            var n, s;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, k(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (s in t) this.off(s, e, t[s]);
                return this
            }
            return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = bt), this.each(function() {
                k.event.remove(this, t, i, e)
            })
        }
    });
    var Tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        St = /<script|<style|<link/i,
        kt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ct = /^true\/(.*)/,
        Pt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function $t(t, e) {
        return P(t, "table") && P(11 !== e.nodeType ? e : e.firstChild, "tr") && k(">tbody", t)[0] || t
    }

    function Mt(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function Dt(t) {
        var e = Ct.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function Ot(t, e) {
        var i, n, s, o, r, a, l, c;
        if (1 === e.nodeType) {
            if (U.hasData(t) && (o = U.access(t), r = U.set(e, o), c = o.events))
                for (s in delete r.handle, r.events = {}, c)
                    for (i = 0, n = c[s].length; i < n; i++) k.event.add(e, s, c[s][i]);
            V.hasData(t) && (a = V.access(t), l = k.extend({}, a), V.set(e, l))
        }
    }

    function At(i, n, s, o) {
        n = m.apply([], n);
        var t, e, r, a, l, c, u = 0,
            d = i.length,
            h = d - 1,
            f = n[0],
            p = k.isFunction(f);
        if (p || 1 < d && "string" == typeof f && !g.checkClone && kt.test(f)) return i.each(function(t) {
            var e = i.eq(t);
            p && (n[0] = f.call(this, t, e.html())), At(e, n, s, o)
        });
        if (d && (e = (t = pt(n, i[0].ownerDocument, !1, i, o)).firstChild, 1 === t.childNodes.length && (t = e), e || o)) {
            for (a = (r = k.map(ct(t, "script"), Mt)).length; u < d; u++) l = t, u !== h && (l = k.clone(l, !0, !0), a && k.merge(r, ct(l, "script"))), s.call(i[u], l, u);
            if (a)
                for (c = r[r.length - 1].ownerDocument, k.map(r, Dt), u = 0; u < a; u++) l = r[u], at.test(l.type || "") && !U.access(l, "globalEval") && k.contains(c, l) && (l.src ? k._evalUrl && k._evalUrl(l.src) : v(l.textContent.replace(Pt, ""), c))
        }
        return i
    }

    function Et(t, e, i) {
        for (var n, s = e ? k.filter(e, t) : t, o = 0; null != (n = s[o]); o++) i || 1 !== n.nodeType || k.cleanData(ct(n)), n.parentNode && (i && k.contains(n.ownerDocument, n) && ut(ct(n, "script")), n.parentNode.removeChild(n));
        return t
    }
    k.extend({
        htmlPrefilter: function(t) {
            return t.replace(Tt, "<$1></$2>")
        },
        clone: function(t, e, i) {
            var n, s, o, r, a, l, c, u = t.cloneNode(!0),
                d = k.contains(t.ownerDocument, t);
            if (!(g.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || k.isXMLDoc(t)))
                for (r = ct(u), n = 0, s = (o = ct(t)).length; n < s; n++) a = o[n], l = r[n], void 0, "input" === (c = l.nodeName.toLowerCase()) && ot.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (e)
                if (i)
                    for (o = o || ct(t), r = r || ct(u), n = 0, s = o.length; n < s; n++) Ot(o[n], r[n]);
                else Ot(t, u);
            return 0 < (r = ct(u, "script")).length && ut(r, !d && ct(t, "script")), u
        },
        cleanData: function(t) {
            for (var e, i, n, s = k.event.special, o = 0; void 0 !== (i = t[o]); o++)
                if (W(i)) {
                    if (e = i[U.expando]) {
                        if (e.events)
                            for (n in e.events) s[n] ? k.event.remove(i, n) : k.removeEvent(i, n, e.handle);
                        i[U.expando] = void 0
                    }
                    i[V.expando] && (i[V.expando] = void 0)
                }
        }
    }), k.fn.extend({
        detach: function(t) {
            return Et(this, t, !0)
        },
        remove: function(t) {
            return Et(this, t)
        },
        text: function(t) {
            return B(this, function(t) {
                return void 0 === t ? k.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return At(this, arguments, function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || $t(this, t).appendChild(t)
            })
        },
        prepend: function() {
            return At(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = $t(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return At(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return At(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (k.cleanData(ct(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return k.clone(this, t, e)
            })
        },
        html: function(t) {
            return B(this, function(t) {
                var e = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !St.test(t) && !lt[(rt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = k.htmlPrefilter(t);
                    try {
                        for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (k.cleanData(ct(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var i = [];
            return At(this, arguments, function(t) {
                var e = this.parentNode;
                k.inArray(this, i) < 0 && (k.cleanData(ct(this)), e && e.replaceChild(t, this))
            }, i)
        }
    }), k.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, r) {
        k.fn[t] = function(t) {
            for (var e, i = [], n = k(t), s = n.length - 1, o = 0; o <= s; o++) e = o === s ? this : this.clone(!0), k(n[o])[r](e), l.apply(i, e.get());
            return this.pushStack(i)
        }
    });
    var Lt = /^margin/,
        Rt = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
        It = function(t) {
            var e = t.ownerDocument.defaultView;
            return e && e.opener || (e = T), e.getComputedStyle(t)
        };

    function Ft(t, e, i) {
        var n, s, o, r, a = t.style;
        return (i = i || It(t)) && ("" !== (r = i.getPropertyValue(e) || i[e]) || k.contains(t.ownerDocument, t) || (r = k.style(t, e)), !g.pixelMarginRight() && Rt.test(r) && Lt.test(e) && (n = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = s, a.maxWidth = o)), void 0 !== r ? r + "" : r
    }

    function Nt(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }! function() {
        function t() {
            if (r) {
                r.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", r.innerHTML = "", mt.appendChild(o);
                var t = T.getComputedStyle(r);
                e = "1%" !== t.top, s = "2px" === t.marginLeft, i = "4px" === t.width, r.style.marginRight = "50%", n = "4px" === t.marginRight, mt.removeChild(o), r = null
            }
        }
        var e, i, n, s, o = S.createElement("div"),
            r = S.createElement("div");
        r.style && (r.style.backgroundClip = "content-box", r.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === r.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(r), k.extend(g, {
            pixelPosition: function() {
                return t(), e
            },
            boxSizingReliable: function() {
                return t(), i
            },
            pixelMarginRight: function() {
                return t(), n
            },
            reliableMarginLeft: function() {
                return t(), s
            }
        }))
    }();
    var Ht = /^(none|table(?!-c[ea]).+)/,
        zt = /^--/,
        Yt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        jt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Bt = ["Webkit", "Moz", "ms"],
        Wt = S.createElement("div").style;

    function qt(t) {
        var e = k.cssProps[t];
        return e || (e = k.cssProps[t] = function(t) {
            if (t in Wt) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), i = Bt.length; i--;)
                if ((t = Bt[i] + e) in Wt) return t
        }(t) || t), e
    }

    function Ut(t, e, i) {
        var n = J.exec(e);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
    }

    function Vt(t, e, i, n, s) {
        var o, r = 0;
        for (o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0; o < 4; o += 2) "margin" === i && (r += k.css(t, i + K[o], !0, s)), n ? ("content" === i && (r -= k.css(t, "padding" + K[o], !0, s)), "margin" !== i && (r -= k.css(t, "border" + K[o] + "Width", !0, s))) : (r += k.css(t, "padding" + K[o], !0, s), "padding" !== i && (r += k.css(t, "border" + K[o] + "Width", !0, s)));
        return r
    }

    function Xt(t, e, i) {
        var n, s = It(t),
            o = Ft(t, e, s),
            r = "border-box" === k.css(t, "boxSizing", !1, s);
        return Rt.test(o) ? o : (n = r && (g.boxSizingReliable() || o === t.style[e]), "auto" === o && (o = t["offset" + e[0].toUpperCase() + e.slice(1)]), (o = parseFloat(o) || 0) + Vt(t, e, i || (r ? "border" : "content"), n, s) + "px")
    }

    function Gt(t, e, i, n, s) {
        return new Gt.prototype.init(t, e, i, n, s)
    }
    k.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = Ft(t, "opacity");
                        return "" === i ? "1" : i
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
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s, o, r, a = k.camelCase(e),
                    l = zt.test(e),
                    c = t.style;
                return l || (e = qt(a)), r = k.cssHooks[e] || k.cssHooks[a], void 0 === i ? r && "get" in r && void 0 !== (s = r.get(t, !1, n)) ? s : c[e] : ("string" === (o = typeof i) && (s = J.exec(i)) && s[1] && (i = it(t, e, s), o = "number"), void(null != i && i == i && ("number" === o && (i += s && s[3] || (k.cssNumber[a] ? "" : "px")), g.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (c[e] = "inherit"), r && "set" in r && void 0 === (i = r.set(t, i, n)) || (l ? c.setProperty(e, i) : c[e] = i))))
            }
        },
        css: function(t, e, i, n) {
            var s, o, r, a = k.camelCase(e);
            return zt.test(e) || (e = qt(a)), (r = k.cssHooks[e] || k.cssHooks[a]) && "get" in r && (s = r.get(t, !0, i)), void 0 === s && (s = Ft(t, e, n)), "normal" === s && e in jt && (s = jt[e]), "" === i || i ? (o = parseFloat(s), !0 === i || isFinite(o) ? o || 0 : s) : s
        }
    }), k.each(["height", "width"], function(t, r) {
        k.cssHooks[r] = {
            get: function(t, e, i) {
                if (e) return !Ht.test(k.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Xt(t, r, i) : et(t, Yt, function() {
                    return Xt(t, r, i)
                })
            },
            set: function(t, e, i) {
                var n, s = i && It(t),
                    o = i && Vt(t, r, i, "border-box" === k.css(t, "boxSizing", !1, s), s);
                return o && (n = J.exec(e)) && "px" !== (n[3] || "px") && (t.style[r] = e, e = k.css(t, r)), Ut(0, e, o)
            }
        }
    }), k.cssHooks.marginLeft = Nt(g.reliableMarginLeft, function(t, e) {
        if (e) return (parseFloat(Ft(t, "marginLeft")) || t.getBoundingClientRect().left - et(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left
        })) + "px"
    }), k.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(s, o) {
        k.cssHooks[s + o] = {
            expand: function(t) {
                for (var e = 0, i = {}, n = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) i[s + K[e] + o] = n[e] || n[e - 2] || n[0];
                return i
            }
        }, Lt.test(s) || (k.cssHooks[s + o].set = Ut)
    }), k.fn.extend({
        css: function(t, e) {
            return B(this, function(t, e, i) {
                var n, s, o = {},
                    r = 0;
                if (Array.isArray(e)) {
                    for (n = It(t), s = e.length; r < s; r++) o[e[r]] = k.css(t, e[r], !1, n);
                    return o
                }
                return void 0 !== i ? k.style(t, e, i) : k.css(t, e)
            }, t, e, 1 < arguments.length)
        }
    }), ((k.Tween = Gt).prototype = {
        constructor: Gt,
        init: function(t, e, i, n, s, o) {
            this.elem = t, this.prop = i, this.easing = s || k.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (k.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = Gt.propHooks[this.prop];
            return t && t.get ? t.get(this) : Gt.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = Gt.propHooks[this.prop];
            return this.options.duration ? this.pos = e = k.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Gt.propHooks._default.set(this), this
        }
    }).init.prototype = Gt.prototype, (Gt.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = k.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(t) {
                k.fx.step[t.prop] ? k.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[k.cssProps[t.prop]] && !k.cssHooks[t.prop] ? t.elem[t.prop] = t.now : k.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }).scrollTop = Gt.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, k.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, k.fx = Gt.prototype.init, k.fx.step = {};
    var Zt, Qt, Jt, Kt, te = /^(?:toggle|show|hide)$/,
        ee = /queueHooks$/;

    function ie() {
        Qt && (!1 === S.hidden && T.requestAnimationFrame ? T.requestAnimationFrame(ie) : T.setTimeout(ie, k.fx.interval), k.fx.tick())
    }

    function ne() {
        return T.setTimeout(function() {
            Zt = void 0
        }), Zt = k.now()
    }

    function se(t, e) {
        var i, n = 0,
            s = {
                height: t
            };
        for (e = e ? 1 : 0; n < 4; n += 2 - e) s["margin" + (i = K[n])] = s["padding" + i] = t;
        return e && (s.opacity = s.width = t), s
    }

    function oe(t, e, i) {
        for (var n, s = (re.tweeners[e] || []).concat(re.tweeners["*"]), o = 0, r = s.length; o < r; o++)
            if (n = s[o].call(i, e, t)) return n
    }

    function re(o, t, e) {
        var i, r, n = 0,
            s = re.prefilters.length,
            a = k.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var t = Zt || ne(), e = Math.max(0, c.startTime + c.duration - t), i = 1 - (e / c.duration || 0), n = 0, s = c.tweens.length; n < s; n++) c.tweens[n].run(i);
                return a.notifyWith(o, [c, i, e]), i < 1 && s ? e : (s || a.notifyWith(o, [c, 1, 0]), a.resolveWith(o, [c]), !1)
            },
            c = a.promise({
                elem: o,
                props: k.extend({}, t),
                opts: k.extend(!0, {
                    specialEasing: {},
                    easing: k.easing._default
                }, e),
                originalProperties: t,
                originalOptions: e,
                startTime: Zt || ne(),
                duration: e.duration,
                tweens: [],
                createTween: function(t, e) {
                    var i = k.Tween(o, c.opts, t, e, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(t) {
                    var e = 0,
                        i = t ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; e < i; e++) c.tweens[e].run(1);
                    return t ? (a.notifyWith(o, [c, 1, 0]), a.resolveWith(o, [c, t])) : a.rejectWith(o, [c, t]), this
                }
            }),
            u = c.props;
        for (function(t, e) {
                var i, n, s, o, r;
                for (i in t)
                    if (s = e[n = k.camelCase(i)], o = t[i], Array.isArray(o) && (s = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), (r = k.cssHooks[n]) && "expand" in r)
                        for (i in o = r.expand(o), delete t[n], o) i in t || (t[i] = o[i], e[i] = s);
                    else e[n] = s
            }(u, c.opts.specialEasing); n < s; n++)
            if (i = re.prefilters[n].call(c, o, u, c.opts)) return k.isFunction(i.stop) && (k._queueHooks(c.elem, c.opts.queue).stop = k.proxy(i.stop, i)), i;
        return k.map(u, oe, c), k.isFunction(c.opts.start) && c.opts.start.call(o, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), k.fx.timer(k.extend(l, {
            elem: o,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    k.Animation = k.extend(re, {
        tweeners: {
            "*": [function(t, e) {
                var i = this.createTween(t, e);
                return it(i.elem, t, J.exec(e), i), i
            }]
        },
        tweener: function(t, e) {
            k.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(I);
            for (var i, n = 0, s = t.length; n < s; n++) i = t[n], re.tweeners[i] = re.tweeners[i] || [], re.tweeners[i].unshift(e)
        },
        prefilters: [function(t, e, i) {
            var n, s, o, r, a, l, c, u, d = "width" in e || "height" in e,
                h = this,
                f = {},
                p = t.style,
                m = t.nodeType && tt(t),
                g = U.get(t, "fxshow");
            for (n in i.queue || (null == (r = k._queueHooks(t, "fx")).unqueued && (r.unqueued = 0, a = r.empty.fire, r.empty.fire = function() {
                    r.unqueued || a()
                }), r.unqueued++, h.always(function() {
                    h.always(function() {
                        r.unqueued--, k.queue(t, "fx").length || r.empty.fire()
                    })
                })), e)
                if (s = e[n], te.test(s)) {
                    if (delete e[n], o = o || "toggle" === s, s === (m ? "hide" : "show")) {
                        if ("show" !== s || !g || void 0 === g[n]) continue;
                        m = !0
                    }
                    f[n] = g && g[n] || k.style(t, n)
                } if ((l = !k.isEmptyObject(e)) || !k.isEmptyObject(f))
                for (n in d && 1 === t.nodeType && (i.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = g && g.display) && (c = U.get(t, "display")), "none" === (u = k.css(t, "display")) && (c ? u = c : (st([t], !0), c = t.style.display || c, u = k.css(t, "display"), st([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === k.css(t, "float") && (l || (h.done(function() {
                        p.display = c
                    }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), i.overflow && (p.overflow = "hidden", h.always(function() {
                        p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
                    })), l = !1, f) l || (g ? "hidden" in g && (m = g.hidden) : g = U.access(t, "fxshow", {
                    display: c
                }), o && (g.hidden = !m), m && st([t], !0), h.done(function() {
                    for (n in m || st([t]), U.remove(t, "fxshow"), f) k.style(t, n, f[n])
                })), l = oe(m ? g[n] : 0, n, h), n in g || (g[n] = l.start, m && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(t, e) {
            e ? re.prefilters.unshift(t) : re.prefilters.push(t)
        }
    }), k.speed = function(t, e, i) {
        var n = t && "object" == typeof t ? k.extend({}, t) : {
            complete: i || !i && e || k.isFunction(t) && t,
            duration: t,
            easing: i && e || e && !k.isFunction(e) && e
        };
        return k.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in k.fx.speeds ? n.duration = k.fx.speeds[n.duration] : n.duration = k.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
            k.isFunction(n.old) && n.old.call(this), n.queue && k.dequeue(this, n.queue)
        }, n
    }, k.fn.extend({
        fadeTo: function(t, e, i, n) {
            return this.filter(tt).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, i, n)
        },
        animate: function(e, t, i, n) {
            var s = k.isEmptyObject(e),
                o = k.speed(t, i, n),
                r = function() {
                    var t = re(this, k.extend({}, e), o);
                    (s || U.get(this, "finish")) && t.stop(!0)
                };
            return r.finish = r, s || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
        },
        stop: function(s, t, o) {
            var r = function(t) {
                var e = t.stop;
                delete t.stop, e(o)
            };
            return "string" != typeof s && (o = t, t = s, s = void 0), t && !1 !== s && this.queue(s || "fx", []), this.each(function() {
                var t = !0,
                    e = null != s && s + "queueHooks",
                    i = k.timers,
                    n = U.get(this);
                if (e) n[e] && n[e].stop && r(n[e]);
                else
                    for (e in n) n[e] && n[e].stop && ee.test(e) && r(n[e]);
                for (e = i.length; e--;) i[e].elem !== this || null != s && i[e].queue !== s || (i[e].anim.stop(o), t = !1, i.splice(e, 1));
                !t && o || k.dequeue(this, s)
            })
        },
        finish: function(r) {
            return !1 !== r && (r = r || "fx"), this.each(function() {
                var t, e = U.get(this),
                    i = e[r + "queue"],
                    n = e[r + "queueHooks"],
                    s = k.timers,
                    o = i ? i.length : 0;
                for (e.finish = !0, k.queue(this, r, []), n && n.stop && n.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === r && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; t < o; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete e.finish
            })
        }
    }), k.each(["toggle", "show", "hide"], function(t, n) {
        var s = k.fn[n];
        k.fn[n] = function(t, e, i) {
            return null == t || "boolean" == typeof t ? s.apply(this, arguments) : this.animate(se(n, !0), t, e, i)
        }
    }), k.each({
        slideDown: se("show"),
        slideUp: se("hide"),
        slideToggle: se("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, n) {
        k.fn[t] = function(t, e, i) {
            return this.animate(n, t, e, i)
        }
    }), k.timers = [], k.fx.tick = function() {
        var t, e = 0,
            i = k.timers;
        for (Zt = k.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
        i.length || k.fx.stop(), Zt = void 0
    }, k.fx.timer = function(t) {
        k.timers.push(t), k.fx.start()
    }, k.fx.interval = 13, k.fx.start = function() {
        Qt || (Qt = !0, ie())
    }, k.fx.stop = function() {
        Qt = null
    }, k.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, k.fn.delay = function(n, t) {
        return n = k.fx && k.fx.speeds[n] || n, t = t || "fx", this.queue(t, function(t, e) {
            var i = T.setTimeout(t, n);
            e.stop = function() {
                T.clearTimeout(i)
            }
        })
    }, Jt = S.createElement("input"), Kt = S.createElement("select").appendChild(S.createElement("option")), Jt.type = "checkbox", g.checkOn = "" !== Jt.value, g.optSelected = Kt.selected, (Jt = S.createElement("input")).value = "t", Jt.type = "radio", g.radioValue = "t" === Jt.value;
    var ae, le = k.expr.attrHandle;
    k.fn.extend({
        attr: function(t, e) {
            return B(this, k.attr, t, e, 1 < arguments.length)
        },
        removeAttr: function(t) {
            return this.each(function() {
                k.removeAttr(this, t)
            })
        }
    }), k.extend({
        attr: function(t, e, i) {
            var n, s, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? k.prop(t, e, i) : (1 === o && k.isXMLDoc(t) || (s = k.attrHooks[e.toLowerCase()] || (k.expr.match.bool.test(e) ? ae : void 0)), void 0 !== i ? null === i ? void k.removeAttr(t, e) : s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : s && "get" in s && null !== (n = s.get(t, e)) ? n : null == (n = k.find.attr(t, e)) ? void 0 : n)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!g.radioValue && "radio" === e && P(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var i, n = 0,
                s = e && e.match(I);
            if (s && 1 === t.nodeType)
                for (; i = s[n++];) t.removeAttribute(i)
        }
    }), ae = {
        set: function(t, e, i) {
            return !1 === e ? k.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    }, k.each(k.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var r = le[e] || k.find.attr;
        le[e] = function(t, e, i) {
            var n, s, o = e.toLowerCase();
            return i || (s = le[o], le[o] = n, n = null != r(t, e, i) ? o : null, le[o] = s), n
        }
    });
    var ce = /^(?:input|select|textarea|button)$/i,
        ue = /^(?:a|area)$/i;

    function de(t) {
        return (t.match(I) || []).join(" ")
    }

    function he(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }
    k.fn.extend({
        prop: function(t, e) {
            return B(this, k.prop, t, e, 1 < arguments.length)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[k.propFix[t] || t]
            })
        }
    }), k.extend({
        prop: function(t, e, i) {
            var n, s, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(t) || (e = k.propFix[e] || e, s = k.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = k.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ce.test(t.nodeName) || ue.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), g.optSelected || (k.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        k.propFix[this.toLowerCase()] = this
    }), k.fn.extend({
        addClass: function(e) {
            var t, i, n, s, o, r, a, l = 0;
            if (k.isFunction(e)) return this.each(function(t) {
                k(this).addClass(e.call(this, t, he(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(I) || []; i = this[l++];)
                    if (s = he(i), n = 1 === i.nodeType && " " + de(s) + " ") {
                        for (r = 0; o = t[r++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                        s !== (a = de(n)) && i.setAttribute("class", a)
                    } return this
        },
        removeClass: function(e) {
            var t, i, n, s, o, r, a, l = 0;
            if (k.isFunction(e)) return this.each(function(t) {
                k(this).removeClass(e.call(this, t, he(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(I) || []; i = this[l++];)
                    if (s = he(i), n = 1 === i.nodeType && " " + de(s) + " ") {
                        for (r = 0; o = t[r++];)
                            for (; - 1 < n.indexOf(" " + o + " ");) n = n.replace(" " + o + " ", " ");
                        s !== (a = de(n)) && i.setAttribute("class", a)
                    } return this
        },
        toggleClass: function(s, e) {
            var o = typeof s;
            return "boolean" == typeof e && "string" === o ? e ? this.addClass(s) : this.removeClass(s) : k.isFunction(s) ? this.each(function(t) {
                k(this).toggleClass(s.call(this, t, he(this), e), e)
            }) : this.each(function() {
                var t, e, i, n;
                if ("string" === o)
                    for (e = 0, i = k(this), n = s.match(I) || []; t = n[e++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else void 0 !== s && "boolean" !== o || ((t = he(this)) && U.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === s ? "" : U.get(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, i, n = 0;
            for (e = " " + t + " "; i = this[n++];)
                if (1 === i.nodeType && -1 < (" " + de(he(i)) + " ").indexOf(e)) return !0;
            return !1
        }
    });
    var fe = /\r/g;
    k.fn.extend({
        val: function(i) {
            var n, t, s, e = this[0];
            return arguments.length ? (s = k.isFunction(i), this.each(function(t) {
                var e;
                1 === this.nodeType && (null == (e = s ? i.call(this, t, k(this).val()) : i) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = k.map(e, function(t) {
                    return null == t ? "" : t + ""
                })), (n = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
            })) : e ? (n = k.valHooks[e.type] || k.valHooks[e.nodeName.toLowerCase()]) && "get" in n && void 0 !== (t = n.get(e, "value")) ? t : "string" == typeof(t = e.value) ? t.replace(fe, "") : null == t ? "" : t : void 0
        }
    }), k.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = k.find.attr(t, "value");
                    return null != e ? e : de(k.text(t))
                }
            },
            select: {
                get: function(t) {
                    var e, i, n, s = t.options,
                        o = t.selectedIndex,
                        r = "select-one" === t.type,
                        a = r ? null : [],
                        l = r ? o + 1 : s.length;
                    for (n = o < 0 ? l : r ? o : 0; n < l; n++)
                        if (((i = s[n]).selected || n === o) && !i.disabled && (!i.parentNode.disabled || !P(i.parentNode, "optgroup"))) {
                            if (e = k(i).val(), r) return e;
                            a.push(e)
                        } return a
                },
                set: function(t, e) {
                    for (var i, n, s = t.options, o = k.makeArray(e), r = s.length; r--;)((n = s[r]).selected = -1 < k.inArray(k.valHooks.option.get(n), o)) && (i = !0);
                    return i || (t.selectedIndex = -1), o
                }
            }
        }
    }), k.each(["radio", "checkbox"], function() {
        k.valHooks[this] = {
            set: function(t, e) {
                if (Array.isArray(e)) return t.checked = -1 < k.inArray(k(t).val(), e)
            }
        }, g.checkOn || (k.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var pe = /^(?:focusinfocus|focusoutblur)$/;
    k.extend(k.event, {
        trigger: function(t, e, i, n) {
            var s, o, r, a, l, c, u, d = [i || S],
                h = p.call(t, "type") ? t.type : t,
                f = p.call(t, "namespace") ? t.namespace.split(".") : [];
            if (o = r = i = i || S, 3 !== i.nodeType && 8 !== i.nodeType && !pe.test(h + k.event.triggered) && (-1 < h.indexOf(".") && (h = (f = h.split(".")).shift(), f.sort()), l = h.indexOf(":") < 0 && "on" + h, (t = t[k.expando] ? t : new k.Event(h, "object" == typeof t && t)).isTrigger = n ? 2 : 3, t.namespace = f.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : k.makeArray(e, [t]), u = k.event.special[h] || {}, n || !u.trigger || !1 !== u.trigger.apply(i, e))) {
                if (!n && !u.noBubble && !k.isWindow(i)) {
                    for (a = u.delegateType || h, pe.test(a + h) || (o = o.parentNode); o; o = o.parentNode) d.push(o), r = o;
                    r === (i.ownerDocument || S) && d.push(r.defaultView || r.parentWindow || T)
                }
                for (s = 0;
                    (o = d[s++]) && !t.isPropagationStopped();) t.type = 1 < s ? a : u.bindType || h, (c = (U.get(o, "events") || {})[t.type] && U.get(o, "handle")) && c.apply(o, e), (c = l && o[l]) && c.apply && W(o) && (t.result = c.apply(o, e), !1 === t.result && t.preventDefault());
                return t.type = h, n || t.isDefaultPrevented() || u._default && !1 !== u._default.apply(d.pop(), e) || !W(i) || l && k.isFunction(i[h]) && !k.isWindow(i) && ((r = i[l]) && (i[l] = null), i[k.event.triggered = h](), k.event.triggered = void 0, r && (i[l] = r)), t.result
            }
        },
        simulate: function(t, e, i) {
            var n = k.extend(new k.Event, i, {
                type: t,
                isSimulated: !0
            });
            k.event.trigger(n, null, e)
        }
    }), k.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                k.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            if (i) return k.event.trigger(t, e, i, !0)
        }
    }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, i) {
        k.fn[i] = function(t, e) {
            return 0 < arguments.length ? this.on(i, null, t, e) : this.trigger(i)
        }
    }), k.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), g.focusin = "onfocusin" in T, g.focusin || k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(i, n) {
        var s = function(t) {
            k.event.simulate(n, t.target, k.event.fix(t))
        };
        k.event.special[n] = {
            setup: function() {
                var t = this.ownerDocument || this,
                    e = U.access(t, n);
                e || t.addEventListener(i, s, !0), U.access(t, n, (e || 0) + 1)
            },
            teardown: function() {
                var t = this.ownerDocument || this,
                    e = U.access(t, n) - 1;
                e ? U.access(t, n, e) : (t.removeEventListener(i, s, !0), U.remove(t, n))
            }
        }
    });
    var me = T.location,
        ge = k.now(),
        ve = /\?/;
    k.parseXML = function(t) {
        var e;
        if (!t || "string" != typeof t) return null;
        try {
            e = (new T.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
            e = void 0
        }
        return e && !e.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + t), e
    };
    var ye = /\[\]$/,
        _e = /\r?\n/g,
        be = /^(?:submit|button|image|reset|file)$/i,
        we = /^(?:input|select|textarea|keygen)/i;

    function xe(i, t, n, s) {
        var e;
        if (Array.isArray(t)) k.each(t, function(t, e) {
            n || ye.test(i) ? s(i, e) : xe(i + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, n, s)
        });
        else if (n || "object" !== k.type(t)) s(i, t);
        else
            for (e in t) xe(i + "[" + e + "]", t[e], n, s)
    }
    k.param = function(t, e) {
        var i, n = [],
            s = function(t, e) {
                var i = k.isFunction(e) ? e() : e;
                n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
            };
        if (Array.isArray(t) || t.jquery && !k.isPlainObject(t)) k.each(t, function() {
            s(this.name, this.value)
        });
        else
            for (i in t) xe(i, t[i], e, s);
        return n.join("&")
    }, k.fn.extend({
        serialize: function() {
            return k.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = k.prop(this, "elements");
                return t ? k.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !k(this).is(":disabled") && we.test(this.nodeName) && !be.test(t) && (this.checked || !ot.test(t))
            }).map(function(t, e) {
                var i = k(this).val();
                return null == i ? null : Array.isArray(i) ? k.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(_e, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(_e, "\r\n")
                }
            }).get()
        }
    });
    var Te = /%20/g,
        Se = /#.*$/,
        ke = /([?&])_=[^&]*/,
        Ce = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pe = /^(?:GET|HEAD)$/,
        $e = /^\/\//,
        Me = {},
        De = {},
        Oe = "*/".concat("*"),
        Ae = S.createElement("a");

    function Ee(o) {
        return function(t, e) {
            "string" != typeof t && (e = t, t = "*");
            var i, n = 0,
                s = t.toLowerCase().match(I) || [];
            if (k.isFunction(e))
                for (; i = s[n++];) "+" === i[0] ? (i = i.slice(1) || "*", (o[i] = o[i] || []).unshift(e)) : (o[i] = o[i] || []).push(e)
        }
    }

    function Le(e, s, o, r) {
        var a = {},
            l = e === De;

        function c(t) {
            var n;
            return a[t] = !0, k.each(e[t] || [], function(t, e) {
                var i = e(s, o, r);
                return "string" != typeof i || l || a[i] ? l ? !(n = i) : void 0 : (s.dataTypes.unshift(i), c(i), !1)
            }), n
        }
        return c(s.dataTypes[0]) || !a["*"] && c("*")
    }

    function Re(t, e) {
        var i, n, s = k.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i]);
        return n && k.extend(!0, t, n), t
    }
    Ae.href = me.href, k.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: me.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(me.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Oe,
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
                "text xml": k.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? Re(Re(t, k.ajaxSettings), e) : Re(k.ajaxSettings, t)
        },
        ajaxPrefilter: Ee(Me),
        ajaxTransport: Ee(De),
        ajax: function(t, e) {
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var u, d, h, i, f, n, p, m, s, o, g = k.ajaxSetup({}, e),
                v = g.context || g,
                y = g.context && (v.nodeType || v.jquery) ? k(v) : k.event,
                _ = k.Deferred(),
                b = k.Callbacks("once memory"),
                w = g.statusCode || {},
                r = {},
                a = {},
                l = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (p) {
                            if (!i)
                                for (i = {}; e = Ce.exec(h);) i[e[1].toLowerCase()] = e[2];
                            e = i[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return p ? h : null
                    },
                    setRequestHeader: function(t, e) {
                        return null == p && (t = a[t.toLowerCase()] = a[t.toLowerCase()] || t, r[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return null == p && (g.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (p) x.always(t[x.status]);
                            else
                                for (e in t) w[e] = [w[e], t[e]];
                        return this
                    },
                    abort: function(t) {
                        var e = t || l;
                        return u && u.abort(e), c(0, e), this
                    }
                };
            if (_.promise(x), g.url = ((t || g.url || me.href) + "").replace($e, me.protocol + "//"), g.type = e.method || e.type || g.method || g.type, g.dataTypes = (g.dataType || "*").toLowerCase().match(I) || [""], null == g.crossDomain) {
                n = S.createElement("a");
                try {
                    n.href = g.url, n.href = n.href, g.crossDomain = Ae.protocol + "//" + Ae.host != n.protocol + "//" + n.host
                } catch (t) {
                    g.crossDomain = !0
                }
            }
            if (g.data && g.processData && "string" != typeof g.data && (g.data = k.param(g.data, g.traditional)), Le(Me, g, e, x), p) return x;
            for (s in (m = k.event && g.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !Pe.test(g.type), d = g.url.replace(Se, ""), g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(Te, "+")) : (o = g.url.slice(d.length), g.data && (d += (ve.test(d) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (d = d.replace(ke, "$1"), o = (ve.test(d) ? "&" : "?") + "_=" + ge++ + o), g.url = d + o), g.ifModified && (k.lastModified[d] && x.setRequestHeader("If-Modified-Since", k.lastModified[d]), k.etag[d] && x.setRequestHeader("If-None-Match", k.etag[d])), (g.data && g.hasContent && !1 !== g.contentType || e.contentType) && x.setRequestHeader("Content-Type", g.contentType), x.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Oe + "; q=0.01" : "") : g.accepts["*"]), g.headers) x.setRequestHeader(s, g.headers[s]);
            if (g.beforeSend && (!1 === g.beforeSend.call(v, x, g) || p)) return x.abort();
            if (l = "abort", b.add(g.complete), x.done(g.success), x.fail(g.error), u = Le(De, g, e, x)) {
                if (x.readyState = 1, m && y.trigger("ajaxSend", [x, g]), p) return x;
                g.async && 0 < g.timeout && (f = T.setTimeout(function() {
                    x.abort("timeout")
                }, g.timeout));
                try {
                    p = !1, u.send(r, c)
                } catch (t) {
                    if (p) throw t;
                    c(-1, t)
                }
            } else c(-1, "No Transport");

            function c(t, e, i, n) {
                var s, o, r, a, l, c = e;
                p || (p = !0, f && T.clearTimeout(f), u = void 0, h = n || "", x.readyState = 0 < t ? 4 : 0, s = 200 <= t && t < 300 || 304 === t, i && (a = function(t, e, i) {
                    for (var n, s, o, r, a = t.contents, l = t.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (n)
                        for (s in a)
                            if (a[s] && a[s].test(n)) {
                                l.unshift(s);
                                break
                            } if (l[0] in i) o = l[0];
                    else {
                        for (s in i) {
                            if (!l[0] || t.converters[s + " " + l[0]]) {
                                o = s;
                                break
                            }
                            r || (r = s)
                        }
                        o = o || r
                    }
                    if (o) return o !== l[0] && l.unshift(o), i[o]
                }(g, x, i)), a = function(t, e, i, n) {
                    var s, o, r, a, l, c = {},
                        u = t.dataTypes.slice();
                    if (u[1])
                        for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
                    for (o = u.shift(); o;)
                        if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = u.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(r = c[l + " " + o] || c["* " + o]))
                            for (s in c)
                                if ((a = s.split(" "))[1] === o && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === r ? r = c[s] : !0 !== c[s] && (o = a[0], u.unshift(a[1]));
                                    break
                                } if (!0 !== r)
                            if (r && t.throws) e = r(e);
                            else try {
                                e = r(e)
                            } catch (t) {
                                return {
                                    state: "parsererror",
                                    error: r ? t : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: e
                    }
                }(g, a, x, s), s ? (g.ifModified && ((l = x.getResponseHeader("Last-Modified")) && (k.lastModified[d] = l), (l = x.getResponseHeader("etag")) && (k.etag[d] = l)), 204 === t || "HEAD" === g.type ? c = "nocontent" : 304 === t ? c = "notmodified" : (c = a.state, o = a.data, s = !(r = a.error))) : (r = c, !t && c || (c = "error", t < 0 && (t = 0))), x.status = t, x.statusText = (e || c) + "", s ? _.resolveWith(v, [o, c, x]) : _.rejectWith(v, [x, c, r]), x.statusCode(w), w = void 0, m && y.trigger(s ? "ajaxSuccess" : "ajaxError", [x, g, s ? o : r]), b.fireWith(v, [x, c]), m && (y.trigger("ajaxComplete", [x, g]), --k.active || k.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function(t, e, i) {
            return k.get(t, e, i, "json")
        },
        getScript: function(t, e) {
            return k.get(t, void 0, e, "script")
        }
    }), k.each(["get", "post"], function(t, s) {
        k[s] = function(t, e, i, n) {
            return k.isFunction(e) && (n = n || i, i = e, e = void 0), k.ajax(k.extend({
                url: t,
                type: s,
                dataType: n,
                data: e,
                success: i
            }, k.isPlainObject(t) && t))
        }
    }), k._evalUrl = function(t) {
        return k.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, k.fn.extend({
        wrapAll: function(t) {
            var e;
            return this[0] && (k.isFunction(t) && (t = t.call(this[0])), e = k(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this
        },
        wrapInner: function(i) {
            return k.isFunction(i) ? this.each(function(t) {
                k(this).wrapInner(i.call(this, t))
            }) : this.each(function() {
                var t = k(this),
                    e = t.contents();
                e.length ? e.wrapAll(i) : t.append(i)
            })
        },
        wrap: function(e) {
            var i = k.isFunction(e);
            return this.each(function(t) {
                k(this).wrapAll(i ? e.call(this, t) : e)
            })
        },
        unwrap: function(t) {
            return this.parent(t).not("body").each(function() {
                k(this).replaceWith(this.childNodes)
            }), this
        }
    }), k.expr.pseudos.hidden = function(t) {
        return !k.expr.pseudos.visible(t)
    }, k.expr.pseudos.visible = function(t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, k.ajaxSettings.xhr = function() {
        try {
            return new T.XMLHttpRequest
        } catch (t) {}
    };
    var Ie = {
            0: 200,
            1223: 204
        },
        Fe = k.ajaxSettings.xhr();
    g.cors = !!Fe && "withCredentials" in Fe, g.ajax = Fe = !!Fe, k.ajaxTransport(function(s) {
        var o, r;
        if (g.cors || Fe && !s.crossDomain) return {
            send: function(t, e) {
                var i, n = s.xhr();
                if (n.open(s.type, s.url, s.async, s.username, s.password), s.xhrFields)
                    for (i in s.xhrFields) n[i] = s.xhrFields[i];
                for (i in s.mimeType && n.overrideMimeType && n.overrideMimeType(s.mimeType), s.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) n.setRequestHeader(i, t[i]);
                o = function(t) {
                    return function() {
                        o && (o = r = n.onload = n.onerror = n.onabort = n.onreadystatechange = null, "abort" === t ? n.abort() : "error" === t ? "number" != typeof n.status ? e(0, "error") : e(n.status, n.statusText) : e(Ie[n.status] || n.status, n.statusText, "text" !== (n.responseType || "text") || "string" != typeof n.responseText ? {
                            binary: n.response
                        } : {
                            text: n.responseText
                        }, n.getAllResponseHeaders()))
                    }
                }, n.onload = o(), r = n.onerror = o("error"), void 0 !== n.onabort ? n.onabort = r : n.onreadystatechange = function() {
                    4 === n.readyState && T.setTimeout(function() {
                        o && r()
                    })
                }, o = o("abort");
                try {
                    n.send(s.hasContent && s.data || null)
                } catch (t) {
                    if (o) throw t
                }
            },
            abort: function() {
                o && o()
            }
        }
    }), k.ajaxPrefilter(function(t) {
        t.crossDomain && (t.contents.script = !1)
    }), k.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return k.globalEval(t), t
            }
        }
    }), k.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), k.ajaxTransport("script", function(i) {
        var n, s;
        if (i.crossDomain) return {
            send: function(t, e) {
                n = k("<script>").prop({
                    charset: i.scriptCharset,
                    src: i.url
                }).on("load error", s = function(t) {
                    n.remove(), s = null, t && e("error" === t.type ? 404 : 200, t.type)
                }), S.head.appendChild(n[0])
            },
            abort: function() {
                s && s()
            }
        }
    });
    var Ne, He = [],
        ze = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = He.pop() || k.expando + "_" + ge++;
            return this[t] = !0, t
        }
    }), k.ajaxPrefilter("json jsonp", function(t, e, i) {
        var n, s, o, r = !1 !== t.jsonp && (ze.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && ze.test(t.data) && "data");
        if (r || "jsonp" === t.dataTypes[0]) return n = t.jsonpCallback = k.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, r ? t[r] = t[r].replace(ze, "$1" + n) : !1 !== t.jsonp && (t.url += (ve.test(t.url) ? "&" : "?") + t.jsonp + "=" + n), t.converters["script json"] = function() {
            return o || k.error(n + " was not called"), o[0]
        }, t.dataTypes[0] = "json", s = T[n], T[n] = function() {
            o = arguments
        }, i.always(function() {
            void 0 === s ? k(T).removeProp(n) : T[n] = s, t[n] && (t.jsonpCallback = e.jsonpCallback, He.push(n)), o && k.isFunction(s) && s(o[0]), o = s = void 0
        }), "script"
    }), g.createHTMLDocument = ((Ne = S.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ne.childNodes.length), k.parseHTML = function(t, e, i) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e, e = !1), e || (g.createHTMLDocument ? ((n = (e = S.implementation.createHTMLDocument("")).createElement("base")).href = S.location.href, e.head.appendChild(n)) : e = S), o = !i && [], (s = $.exec(t)) ? [e.createElement(s[1])] : (s = pt([t], e, o), o && o.length && k(o).remove(), k.merge([], s.childNodes)));
        var n, s, o
    }, k.fn.load = function(t, e, i) {
        var n, s, o, r = this,
            a = t.indexOf(" ");
        return -1 < a && (n = de(t.slice(a)), t = t.slice(0, a)), k.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (s = "POST"), 0 < r.length && k.ajax({
            url: t,
            type: s || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments, r.html(n ? k("<div>").append(k.parseHTML(t)).find(n) : t)
        }).always(i && function(t, e) {
            r.each(function() {
                i.apply(this, o || [t.responseText, e, t])
            })
        }), this
    }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        k.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), k.expr.pseudos.animated = function(e) {
        return k.grep(k.timers, function(t) {
            return e === t.elem
        }).length
    }, k.offset = {
        setOffset: function(t, e, i) {
            var n, s, o, r, a, l, c = k.css(t, "position"),
                u = k(t),
                d = {};
            "static" === c && (t.style.position = "relative"), a = u.offset(), o = k.css(t, "top"), l = k.css(t, "left"), ("absolute" === c || "fixed" === c) && -1 < (o + l).indexOf("auto") ? (r = (n = u.position()).top, s = n.left) : (r = parseFloat(o) || 0, s = parseFloat(l) || 0), k.isFunction(e) && (e = e.call(t, i, k.extend({}, a))), null != e.top && (d.top = e.top - a.top + r), null != e.left && (d.left = e.left - a.left + s), "using" in e ? e.using.call(t, d) : u.css(d)
        }
    }, k.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                k.offset.setOffset(this, e, t)
            });
            var t, i, n, s, o = this[0];
            return o ? o.getClientRects().length ? (n = o.getBoundingClientRect(), i = (t = o.ownerDocument).documentElement, s = t.defaultView, {
                top: n.top + s.pageYOffset - i.clientTop,
                left: n.left + s.pageXOffset - i.clientLeft
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, i = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === k.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), P(t[0], "html") || (n = t.offset()), n = {
                    top: n.top + k.css(t[0], "borderTopWidth", !0),
                    left: n.left + k.css(t[0], "borderLeftWidth", !0)
                }), {
                    top: e.top - n.top - k.css(i, "marginTop", !0),
                    left: e.left - n.left - k.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === k.css(t, "position");) t = t.offsetParent;
                return t || mt
            })
        }
    }), k.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, s) {
        var o = "pageYOffset" === s;
        k.fn[e] = function(t) {
            return B(this, function(t, e, i) {
                var n;
                return k.isWindow(t) ? n = t : 9 === t.nodeType && (n = t.defaultView), void 0 === i ? n ? n[s] : t[e] : void(n ? n.scrollTo(o ? n.pageXOffset : i, o ? i : n.pageYOffset) : t[e] = i)
            }, e, t, arguments.length)
        }
    }), k.each(["top", "left"], function(t, i) {
        k.cssHooks[i] = Nt(g.pixelPosition, function(t, e) {
            if (e) return e = Ft(t, i), Rt.test(e) ? k(t).position()[i] + "px" : e
        })
    }), k.each({
        Height: "height",
        Width: "width"
    }, function(r, a) {
        k.each({
            padding: "inner" + r,
            content: a,
            "": "outer" + r
        }, function(n, o) {
            k.fn[o] = function(t, e) {
                var i = arguments.length && (n || "boolean" != typeof t),
                    s = n || (!0 === t || !0 === e ? "margin" : "border");
                return B(this, function(t, e, i) {
                    var n;
                    return k.isWindow(t) ? 0 === o.indexOf("outer") ? t["inner" + r] : t.document.documentElement["client" + r] : 9 === t.nodeType ? (n = t.documentElement, Math.max(t.body["scroll" + r], n["scroll" + r], t.body["offset" + r], n["offset" + r], n["client" + r])) : void 0 === i ? k.css(t, e, s) : k.style(t, e, i, s)
                }, a, i ? t : void 0, i)
            }
        })
    }), k.fn.extend({
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    }), k.holdReady = function(t) {
        t ? k.readyWait++ : k.ready(!0)
    }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = P, "function" == typeof define && define.amd && define("jquery", [], function() {
        return k
    });
    var Ye = T.jQuery,
        je = T.$;
    return k.noConflict = function(t) {
        return T.$ === k && (T.$ = je), t && T.jQuery === k && (T.jQuery = Ye), k
    }, t || (T.jQuery = T.$ = k), k
}),
function(t, e) {
    if ("function" == typeof define && define.amd) define(["module", "exports"], e);
    else if ("undefined" != typeof exports) e(module, exports);
    else {
        var i = {
            exports: {}
        };
        e(i, i.exports), t.autosize = i.exports
    }
}(this, function(t, e) {
    "use strict";
    var i, n, d = "function" == typeof Map ? new Map : (i = [], n = [], {
            has: function(t) {
                return -1 < i.indexOf(t)
            },
            get: function(t) {
                return n[i.indexOf(t)]
            },
            set: function(t, e) {
                -1 === i.indexOf(t) && (i.push(t), n.push(e))
            },
            delete: function(t) {
                var e = i.indexOf(t); - 1 < e && (i.splice(e, 1), n.splice(e, 1))
            }
        }),
        h = function(t) {
            return new Event(t, {
                bubbles: !0
            })
        };
    try {
        new Event("test")
    } catch (t) {
        h = function(t) {
            var e = document.createEvent("Event");
            return e.initEvent(t, !0, !1), e
        }
    }

    function s(s) {
        if (s && s.nodeName && "TEXTAREA" === s.nodeName && !d.has(s)) {
            var t, i = null,
                n = null,
                o = null,
                r = function() {
                    s.clientWidth !== n && u()
                },
                a = function(e) {
                    window.removeEventListener("resize", r, !1), s.removeEventListener("input", u, !1), s.removeEventListener("keyup", u, !1), s.removeEventListener("autosize:destroy", a, !1), s.removeEventListener("autosize:update", u, !1), Object.keys(e).forEach(function(t) {
                        s.style[t] = e[t]
                    }), d.delete(s)
                }.bind(s, {
                    height: s.style.height,
                    resize: s.style.resize,
                    overflowY: s.style.overflowY,
                    overflowX: s.style.overflowX,
                    wordWrap: s.style.wordWrap
                });
            s.addEventListener("autosize:destroy", a, !1), "onpropertychange" in s && "oninput" in s && s.addEventListener("keyup", u, !1), window.addEventListener("resize", r, !1), s.addEventListener("input", u, !1), s.addEventListener("autosize:update", u, !1), s.style.overflowX = "hidden", s.style.wordWrap = "break-word", d.set(s, {
                destroy: a,
                update: u
            }), "vertical" === (t = window.getComputedStyle(s, null)).resize ? s.style.resize = "none" : "both" === t.resize && (s.style.resize = "horizontal"), i = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), isNaN(i) && (i = 0), u()
        }

        function l(t) {
            var e = s.style.width;
            s.style.width = "0px", s.offsetWidth, s.style.width = e, s.style.overflowY = t
        }

        function c() {
            if (0 !== s.scrollHeight) {
                var t = function(t) {
                        for (var e = []; t && t.parentNode && t.parentNode instanceof Element;) t.parentNode.scrollTop && e.push({
                            node: t.parentNode,
                            scrollTop: t.parentNode.scrollTop
                        }), t = t.parentNode;
                        return e
                    }(s),
                    e = document.documentElement && document.documentElement.scrollTop;
                s.style.height = "", s.style.height = s.scrollHeight + i + "px", n = s.clientWidth, t.forEach(function(t) {
                    t.node.scrollTop = t.scrollTop
                }), e && (document.documentElement.scrollTop = e)
            }
        }

        function u() {
            c();
            var t = Math.round(parseFloat(s.style.height)),
                e = window.getComputedStyle(s, null),
                i = "content-box" === e.boxSizing ? Math.round(parseFloat(e.height)) : s.offsetHeight;
            if (i < t ? "hidden" === e.overflowY && (l("scroll"), c(), i = "content-box" === e.boxSizing ? Math.round(parseFloat(window.getComputedStyle(s, null).height)) : s.offsetHeight) : "hidden" !== e.overflowY && (l("hidden"), c(), i = "content-box" === e.boxSizing ? Math.round(parseFloat(window.getComputedStyle(s, null).height)) : s.offsetHeight), o !== i) {
                o = i;
                var n = h("autosize:resized");
                try {
                    s.dispatchEvent(n)
                } catch (t) {}
            }
        }
    }

    function o(t) {
        var e = d.get(t);
        e && e.destroy()
    }

    function r(t) {
        var e = d.get(t);
        e && e.update()
    }
    var a = null;
    "undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((a = function(t) {
        return t
    }).destroy = function(t) {
        return t
    }, a.update = function(t) {
        return t
    }) : ((a = function(t, e) {
        return t && Array.prototype.forEach.call(t.length ? t : [t], function(t) {
            return s(t)
        }), t
    }).destroy = function(t) {
        return t && Array.prototype.forEach.call(t.length ? t : [t], o), t
    }, a.update = function(t) {
        return t && Array.prototype.forEach.call(t.length ? t : [t], r), t
    }), e.default = a, t.exports = e.default
}),
function(c, a, m, g) {
    "use strict";
    if (m)
        if (m.fn.fancybox) "console" in c && console.log("fancyBox already initialized");
        else {
            var t, e = {
                    loop: !1,
                    margin: [44, 0],
                    gutter: 50,
                    keyboard: !0,
                    arrows: !0,
                    infobar: !0,
                    toolbar: !0,
                    buttons: ["slideShow", "fullScreen", "thumbs", "share", "close"],
                    idleTime: 3,
                    smallBtn: "auto",
                    protect: !1,
                    modal: !1,
                    image: {
                        preload: "auto"
                    },
                    ajax: {
                        settings: {
                            data: {
                                fancybox: !0
                            }
                        }
                    },
                    iframe: {
                        tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
                        preload: !0,
                        css: {},
                        attr: {
                            scrolling: "auto"
                        }
                    },
                    defaultType: "image",
                    animationEffect: "zoom",
                    animationDuration: 500,
                    zoomOpacity: "auto",
                    transitionEffect: "fade",
                    transitionDuration: 366,
                    slideClass: "",
                    baseClass: "",
                    baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',
                    spinnerTpl: '<div class="fancybox-loading"></div>',
                    errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p></div>',
                    btnTpl: {
                        download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}"><svg viewBox="0 0 40 40"><path d="M20,23 L20,8 L20,23 L13,16 L20,23 L27,16 L20,23 M26,28 L13,28 L27,28 L14,28" /></svg></a>',
                        zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M 18,17 m-8,0 a 8,8 0 1,0 16,0 a 8,8 0 1,0 -16,0 M25,23 L31,29 L25,23" /></svg></button>',
                        close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /></svg></button>',
                        smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>',
                        arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 L10,20 L18,28 L10,20 L18,12 L10,20"></path></svg></button>',
                        arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><svg viewBox="0 0 40 40"><path d="M30,20 L10,20 L30,20 L22,28 L30,20 L22,12 L30,20"></path></svg></button>'
                    },
                    parentEl: "body",
                    autoFocus: !1,
                    backFocus: !0,
                    trapFocus: !0,
                    fullScreen: {
                        autoStart: !1
                    },
                    touch: {
                        vertical: !0,
                        momentum: !0
                    },
                    hash: null,
                    media: {},
                    slideShow: {
                        autoStart: !1,
                        speed: 4e3
                    },
                    thumbs: {
                        autoStart: !1,
                        hideOnClose: !0,
                        parentEl: ".fancybox-container",
                        axis: "y"
                    },
                    wheel: "auto",
                    onInit: m.noop,
                    beforeLoad: m.noop,
                    afterLoad: m.noop,
                    beforeShow: m.noop,
                    afterShow: m.noop,
                    beforeClose: m.noop,
                    afterClose: m.noop,
                    onActivate: m.noop,
                    onDeactivate: m.noop,
                    clickContent: function(t, e) {
                        return "image" === t.type && "zoom"
                    },
                    clickSlide: "close",
                    clickOutside: "close",
                    dblclickContent: !1,
                    dblclickSlide: !1,
                    dblclickOutside: !1,
                    mobile: {
                        idleTime: !1,
                        margin: 0,
                        clickContent: function(t, e) {
                            return "image" === t.type && "toggleControls"
                        },
                        clickSlide: function(t, e) {
                            return "image" === t.type ? "toggleControls" : "close"
                        },
                        dblclickContent: function(t, e) {
                            return "image" === t.type && "zoom"
                        },
                        dblclickSlide: function(t, e) {
                            return "image" === t.type && "zoom"
                        }
                    },
                    lang: "en",
                    i18n: {
                        en: {
                            CLOSE: "Close",
                            NEXT: "Next",
                            PREV: "Previous",
                            ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                            PLAY_START: "Start slideshow",
                            PLAY_STOP: "Pause slideshow",
                            FULL_SCREEN: "Full screen",
                            THUMBS: "Thumbnails",
                            DOWNLOAD: "Download",
                            SHARE: "Share",
                            ZOOM: "Zoom"
                        },
                        de: {
                            CLOSE: "Schliessen",
                            NEXT: "Weiter",
                            PREV: "Zurück",
                            ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
                            PLAY_START: "Diaschau starten",
                            PLAY_STOP: "Diaschau beenden",
                            FULL_SCREEN: "Vollbild",
                            THUMBS: "Vorschaubilder",
                            DOWNLOAD: "Herunterladen",
                            SHARE: "Teilen",
                            ZOOM: "Maßstab"
                        }
                    }
                },
                o = m(c),
                l = m(a),
                s = 0,
                d = c.requestAnimationFrame || c.webkitRequestAnimationFrame || c.mozRequestAnimationFrame || c.oRequestAnimationFrame || function(t) {
                    return c.setTimeout(t, 1e3 / 60)
                },
                h = function() {
                    var t, e = a.createElement("fakeelement"),
                        i = {
                            transition: "transitionend",
                            OTransition: "oTransitionEnd",
                            MozTransition: "transitionend",
                            WebkitTransition: "webkitTransitionEnd"
                        };
                    for (t in i)
                        if (e.style[t] !== g) return i[t];
                    return "transitionend"
                }(),
                f = function(t) {
                    return t && t.length && t[0].offsetHeight
                },
                n = function(t, e, i) {
                    var n = this;
                    n.opts = m.extend(!0, {
                        index: i
                    }, m.fancybox.defaults, e || {}), m.fancybox.isMobile && (n.opts = m.extend(!0, {}, n.opts, n.opts.mobile)), e && m.isArray(e.buttons) && (n.opts.buttons = e.buttons), n.id = n.opts.id || ++s, n.group = [], n.currIndex = parseInt(n.opts.index, 10) || 0, n.prevIndex = null, n.prevPos = null, n.currPos = 0, n.firstRun = null, n.createGroup(t), n.group.length && (n.$lastFocus = m(a.activeElement).blur(), n.slides = {}, n.init())
                };
            m.extend(n.prototype, {
                init: function() {
                    var t, e, i, n = this,
                        s = n.group[n.currIndex],
                        o = s.opts,
                        r = m.fancybox.scrollbarWidth;
                    n.scrollTop = l.scrollTop(), n.scrollLeft = l.scrollLeft(), m.fancybox.getInstance() || (m("body").addClass("fancybox-active"), /iPad|iPhone|iPod/.test(navigator.userAgent) && !c.MSStream ? "image" !== s.type && m("body").css("top", -1 * m("body").scrollTop()).addClass("fancybox-iosfix") : !m.fancybox.isMobile && a.body.scrollHeight > c.innerHeight && (r === g && (t = m('<div style="width:50px;height:50px;overflow:scroll;" />').appendTo("body"), r = m.fancybox.scrollbarWidth = t[0].offsetWidth - t[0].clientWidth, t.remove()), m("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: ' + r + "px; }</style>"), m("body").addClass("compensate-for-scrollbar"))), i = "", m.each(o.buttons, function(t, e) {
                        i += o.btnTpl[e] || ""
                    }), e = m(n.translate(n, o.baseTpl.replace("{{buttons}}", i).replace("{{arrows}}", o.btnTpl.arrowLeft + o.btnTpl.arrowRight))).attr("id", "fancybox-container-" + n.id).addClass("fancybox-is-hidden").addClass(o.baseClass).data("FancyBox", n).appendTo(o.parentEl), n.$refs = {
                        container: e
                    }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(t) {
                        n.$refs[t] = e.find(".fancybox-" + t)
                    }), n.trigger("onInit"), n.activate(), n.jumpTo(n.currIndex)
                },
                translate: function(t, e) {
                    var n = t.opts.i18n[t.opts.lang];
                    return e.replace(/\{\{(\w+)\}\}/g, function(t, e) {
                        var i = n[e];
                        return i === g ? t : i
                    })
                },
                createGroup: function(t) {
                    var c = this,
                        e = m.makeArray(t);
                    m.each(e, function(t, e) {
                        var i, n, s, o, r, a = {},
                            l = {};
                        m.isPlainObject(e) ? l = (a = e).opts || e : "object" === m.type(e) && m(e).length ? (l = (i = m(e)).data(), (l = m.extend({}, l, l.options || {})).$orig = i, a.src = l.src || i.attr("href"), a.type || a.src || (a.type = "inline", a.src = e)) : a = {
                            type: "html",
                            src: e + ""
                        }, a.opts = m.extend(!0, {}, c.opts, l), m.isArray(l.buttons) && (a.opts.buttons = l.buttons), n = a.type || a.opts.type, o = a.src || "", !n && o && (o.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? n = "image" : o.match(/\.(pdf)((\?|#).*)?$/i) ? n = "pdf" : (s = o.match(/\.(mp4|mov|ogv)((\?|#).*)?$/i)) ? (n = "video", a.opts.videoFormat || (a.opts.videoFormat = "video/" + ("ogv" === s[1] ? "ogg" : s[1]))) : "#" === o.charAt(0) && (n = "inline")), n ? a.type = n : c.trigger("objectNeedsType", a), a.index = c.group.length, a.opts.$orig && !a.opts.$orig.length && delete a.opts.$orig, !a.opts.$thumb && a.opts.$orig && (a.opts.$thumb = a.opts.$orig.find("img:first")), a.opts.$thumb && !a.opts.$thumb.length && delete a.opts.$thumb, "function" === m.type(a.opts.caption) && (a.opts.caption = a.opts.caption.apply(e, [c, a])), "function" === m.type(c.opts.caption) && (a.opts.caption = c.opts.caption.apply(e, [c, a])), a.opts.caption instanceof m || (a.opts.caption = a.opts.caption === g ? "" : a.opts.caption + ""), "ajax" === n && 1 < (r = o.split(/\s+/, 2)).length && (a.src = r.shift(), a.opts.filter = r.shift()), "auto" == a.opts.smallBtn && (-1 < m.inArray(n, ["html", "inline", "ajax"]) ? (a.opts.toolbar = !1, a.opts.smallBtn = !0) : a.opts.smallBtn = !1), "pdf" === n && (a.type = "iframe", a.opts.iframe.preload = !1), a.opts.modal && (a.opts = m.extend(!0, a.opts, {
                            infobar: 0,
                            toolbar: 0,
                            smallBtn: 0,
                            keyboard: 0,
                            slideShow: 0,
                            fullScreen: 0,
                            thumbs: 0,
                            touch: 0,
                            clickContent: !1,
                            clickSlide: !1,
                            clickOutside: !1,
                            dblclickContent: !1,
                            dblclickSlide: !1,
                            dblclickOutside: !1
                        })), c.group.push(a)
                    })
                },
                addEvents: function() {
                    var n = this;
                    n.removeEvents(), n.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(t) {
                        t.stopPropagation(), t.preventDefault(), n.close(t)
                    }).on("click.fb-prev touchend.fb-prev", "[data-fancybox-prev]", function(t) {
                        t.stopPropagation(), t.preventDefault(), n.previous()
                    }).on("click.fb-next touchend.fb-next", "[data-fancybox-next]", function(t) {
                        t.stopPropagation(), t.preventDefault(), n.next()
                    }).on("click.fb", "[data-fancybox-zoom]", function(t) {
                        n[n.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                    }), o.on("orientationchange.fb resize.fb", function(t) {
                        t && t.originalEvent && "resize" === t.originalEvent.type ? d(function() {
                            n.update()
                        }) : (n.$refs.stage.hide(), setTimeout(function() {
                            n.$refs.stage.show(), n.update()
                        }, 600))
                    }), l.on("focusin.fb", function(t) {
                        var e = m.fancybox ? m.fancybox.getInstance() : null;
                        e.isClosing || !e.current || !e.current.opts.trapFocus || m(t.target).hasClass("fancybox-container") || m(t.target).is(a) || e && "fixed" !== m(t.target).css("position") && !e.$refs.container.has(t.target).length && (t.stopPropagation(), e.focus(), o.scrollTop(n.scrollTop).scrollLeft(n.scrollLeft))
                    }), l.on("keydown.fb", function(t) {
                        var e = n.current,
                            i = t.keyCode || t.which;
                        if (e && e.opts.keyboard && !m(t.target).is("input") && !m(t.target).is("textarea")) return 8 === i || 27 === i ? (t.preventDefault(), void n.close(t)) : 37 === i || 38 === i ? (t.preventDefault(), void n.previous()) : 39 === i || 40 === i ? (t.preventDefault(), void n.next()) : void n.trigger("afterKeydown", t, i)
                    }), n.group[n.currIndex].opts.idleTime && (n.idleSecondsCounter = 0, l.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function(t) {
                        n.idleSecondsCounter = 0, n.isIdle && n.showControls(), n.isIdle = !1
                    }), n.idleInterval = c.setInterval(function() {
                        n.idleSecondsCounter++, n.idleSecondsCounter >= n.group[n.currIndex].opts.idleTime && !n.isDragging && (n.isIdle = !0, n.idleSecondsCounter = 0, n.hideControls())
                    }, 1e3))
                },
                removeEvents: function() {
                    o.off("orientationchange.fb resize.fb"), l.off("focusin.fb keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), this.idleInterval && (c.clearInterval(this.idleInterval), this.idleInterval = null)
                },
                previous: function(t) {
                    return this.jumpTo(this.currPos - 1, t)
                },
                next: function(t) {
                    return this.jumpTo(this.currPos + 1, t)
                },
                jumpTo: function(t, n, e) {
                    var i, s, o, r, a, l, c, u = this,
                        d = u.group.length;
                    if (!(u.isDragging || u.isClosing || u.isAnimating && u.firstRun)) {
                        if (t = parseInt(t, 10), !(s = u.current ? u.current.opts.loop : u.opts.loop) && (t < 0 || d <= t)) return !1;
                        if (i = u.firstRun = null === u.firstRun, !(d < 2 && !i && u.isDragging)) {
                            if (r = u.current, u.prevIndex = u.currIndex, u.prevPos = u.currPos, o = u.createSlide(t), 1 < d && ((s || 0 < o.index) && u.createSlide(t - 1), (s || o.index < d - 1) && u.createSlide(t + 1)), u.current = o, u.currIndex = o.index, u.currPos = o.pos, u.trigger("beforeShow", i), u.updateControls(), l = m.fancybox.getTranslate(o.$slide), o.isMoved = (0 !== l.left || 0 !== l.top) && !o.$slide.hasClass("fancybox-animated"), o.forcedDuration = g, m.isNumeric(n) ? o.forcedDuration = n : n = o.opts[i ? "animationDuration" : "transitionDuration"], n = parseInt(n, 10), i) return o.opts.animationEffect && n && u.$refs.container.css("transition-duration", n + "ms"), u.$refs.container.removeClass("fancybox-is-hidden"), f(u.$refs.container), u.$refs.container.addClass("fancybox-is-open"), o.$slide.addClass("fancybox-slide--current"), u.loadSlide(o), void u.preload("image");
                            m.each(u.slides, function(t, e) {
                                m.fancybox.stop(e.$slide)
                            }), o.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"), o.isMoved ? (a = Math.round(o.$slide.width()), m.each(u.slides, function(t, e) {
                                var i = e.pos - o.pos;
                                m.fancybox.animate(e.$slide, {
                                    top: 0,
                                    left: i * a + i * e.opts.gutter
                                }, n, function() {
                                    e.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"), e.pos === u.currPos && (o.isMoved = !1, u.complete())
                                })
                            })) : u.$refs.stage.children().removeAttr("style"), o.isLoaded ? u.revealContent(o) : u.loadSlide(o), u.preload("image"), r.pos !== o.pos && (c = "fancybox-slide--" + (r.pos > o.pos ? "next" : "previous"), r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"), r.isComplete = !1, n && (o.isMoved || o.opts.transitionEffect) && (o.isMoved ? r.$slide.addClass(c) : (c = "fancybox-animated " + c + " fancybox-fx-" + o.opts.transitionEffect, m.fancybox.animate(r.$slide, c, n, function() {
                                r.$slide.removeClass(c).removeAttr("style")
                            }))))
                        }
                    }
                },
                createSlide: function(t) {
                    var e, i, n = this;
                    return i = (i = t % n.group.length) < 0 ? n.group.length + i : i, !n.slides[t] && n.group[i] && (e = m('<div class="fancybox-slide"></div>').appendTo(n.$refs.stage), n.slides[t] = m.extend(!0, {}, n.group[i], {
                        pos: t,
                        $slide: e,
                        isLoaded: !1
                    }), n.updateSlide(n.slides[t])), n.slides[t]
                },
                scaleToActual: function(t, e, i) {
                    var n, s, o, r, a, l = this,
                        c = l.current,
                        u = c.$content,
                        d = parseInt(c.$slide.width(), 10),
                        h = parseInt(c.$slide.height(), 10),
                        f = c.width,
                        p = c.height;
                    "image" != c.type || c.hasError || !u || l.isAnimating || (m.fancybox.stop(u), l.isAnimating = !0, t = t === g ? .5 * d : t, e = e === g ? .5 * h : e, r = f / (n = m.fancybox.getTranslate(u)).width, a = p / n.height, s = .5 * d - .5 * f, o = .5 * h - .5 * p, d < f && (0 < (s = n.left * r - (t * r - t)) && (s = 0), s < d - f && (s = d - f)), h < p && (0 < (o = n.top * a - (e * a - e)) && (o = 0), o < h - p && (o = h - p)), l.updateCursor(f, p), m.fancybox.animate(u, {
                        top: o,
                        left: s,
                        scaleX: r,
                        scaleY: a
                    }, i || 330, function() {
                        l.isAnimating = !1
                    }), l.SlideShow && l.SlideShow.isActive && l.SlideShow.stop())
                },
                scaleToFit: function(t) {
                    var e, i = this,
                        n = i.current,
                        s = n.$content;
                    "image" != n.type || n.hasError || !s || i.isAnimating || (m.fancybox.stop(s), i.isAnimating = !0, e = i.getFitPos(n), i.updateCursor(e.width, e.height), m.fancybox.animate(s, {
                        top: e.top,
                        left: e.left,
                        scaleX: e.width / s.width(),
                        scaleY: e.height / s.height()
                    }, t || 330, function() {
                        i.isAnimating = !1
                    }))
                },
                getFitPos: function(t) {
                    var e, i, n, s, o, r = t.$content,
                        a = t.width,
                        l = t.height,
                        c = t.opts.margin;
                    return !(!r || !r.length || !a && !l) && ("number" === m.type(c) && (c = [c, c]), 2 == c.length && (c = [c[0], c[1], c[0], c[1]]), e = parseInt(this.$refs.stage.width(), 10) - (c[1] + c[3]), i = parseInt(this.$refs.stage.height(), 10) - (c[0] + c[2]), n = Math.min(1, e / a, i / l), s = Math.floor(n * a), o = Math.floor(n * l), {
                        top: Math.floor(.5 * (i - o)) + c[0],
                        left: Math.floor(.5 * (e - s)) + c[3],
                        width: s,
                        height: o
                    })
                },
                update: function() {
                    var i = this;
                    m.each(i.slides, function(t, e) {
                        i.updateSlide(e)
                    })
                },
                updateSlide: function(t, e) {
                    var i = this,
                        n = t && t.$content;
                    n && (t.width || t.height) && (i.isAnimating = !1, m.fancybox.stop(n), m.fancybox.setTranslate(n, i.getFitPos(t)), t.pos === i.currPos && i.updateCursor()), t.$slide.trigger("refresh"), i.trigger("onUpdate", t)
                },
                centerSlide: function(t, e) {
                    var i, n;
                    this.current && (i = Math.round(t.$slide.width()), n = t.pos - this.current.pos, m.fancybox.animate(t.$slide, {
                        top: 0,
                        left: n * i + n * t.opts.gutter,
                        opacity: 1
                    }, e === g ? 0 : e, null, !1))
                },
                updateCursor: function(t, e) {
                    var i = this,
                        n = i.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");
                    i.current && !i.isClosing && (i.isZoomable() ? (n.addClass("fancybox-is-zoomable"), (t !== g && e !== g ? t < i.current.width && e < i.current.height : i.isScaledDown()) ? n.addClass("fancybox-can-zoomIn") : i.current.opts.touch ? n.addClass("fancybox-can-drag") : n.addClass("fancybox-can-zoomOut")) : i.current.opts.touch && n.addClass("fancybox-can-drag"))
                },
                isZoomable: function() {
                    var t, e = this.current;
                    if (e && !this.isClosing) return !!("image" === e.type && e.isLoaded && !e.hasError && ("zoom" === e.opts.clickContent || m.isFunction(e.opts.clickContent) && "zoom" === e.opts.clickContent(e)) && (t = this.getFitPos(e), e.width > t.width || e.height > t.height))
                },
                isScaledDown: function() {
                    var t = this.current,
                        e = t.$content,
                        i = !1;
                    return e && (i = (i = m.fancybox.getTranslate(e)).width < t.width || i.height < t.height), i
                },
                canPan: function() {
                    var t = this.current,
                        e = t.$content,
                        i = !1;
                    return e && (i = this.getFitPos(t), i = 1 < Math.abs(e.width() - i.width) || 1 < Math.abs(e.height() - i.height)), i
                },
                loadSlide: function(i) {
                    var t, e, n, s = this;
                    if (!i.isLoading && !i.isLoaded) {
                        switch (i.isLoading = !0, s.trigger("beforeLoad", i), t = i.type, (e = i.$slide).off("refresh").trigger("onReset").addClass("fancybox-slide--" + (t || "unknown")).addClass(i.opts.slideClass), t) {
                            case "image":
                                s.setImage(i);
                                break;
                            case "iframe":
                                s.setIframe(i);
                                break;
                            case "html":
                                s.setContent(i, i.src || i.content);
                                break;
                            case "inline":
                                m(i.src).length ? s.setContent(i, m(i.src)) : s.setError(i);
                                break;
                            case "ajax":
                                s.showLoading(i), n = m.ajax(m.extend({}, i.opts.ajax.settings, {
                                    url: i.src,
                                    success: function(t, e) {
                                        "success" === e && s.setContent(i, t)
                                    },
                                    error: function(t, e) {
                                        t && "abort" !== e && s.setError(i)
                                    }
                                })), e.one("onReset", function() {
                                    n.abort()
                                });
                                break;
                            case "video":
                                s.setContent(i, '<video controls><source src="' + i.src + '" type="' + i.opts.videoFormat + "\">Your browser doesn't support HTML5 video</video>");
                                break;
                            default:
                                s.setError(i)
                        }
                        return !0
                    }
                },
                setImage: function(t) {
                    var e, i, n, s, o = this,
                        r = t.opts.srcset || t.opts.image.srcset;
                    if (r) {
                        n = c.devicePixelRatio || 1, s = c.innerWidth * n, (i = r.split(",").map(function(t) {
                            var n = {};
                            return t.trim().split(/\s+/).forEach(function(t, e) {
                                var i = parseInt(t.substring(0, t.length - 1), 10);
                                if (0 === e) return n.url = t;
                                i && (n.value = i, n.postfix = t[t.length - 1])
                            }), n
                        })).sort(function(t, e) {
                            return t.value - e.value
                        });
                        for (var a = 0; a < i.length; a++) {
                            var l = i[a];
                            if ("w" === l.postfix && l.value >= s || "x" === l.postfix && l.value >= n) {
                                e = l;
                                break
                            }
                        }!e && i.length && (e = i[i.length - 1]), e && (t.src = e.url, t.width && t.height && "w" == e.postfix && (t.height = t.width / t.height * e.value, t.width = e.value))
                    }
                    t.$content = m('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide), !1 !== t.opts.preload && t.opts.width && t.opts.height && (t.opts.thumb || t.opts.$thumb) ? (t.width = t.opts.width, t.height = t.opts.height, t.$ghost = m("<img />").one("error", function() {
                        m(this).remove(), t.$ghost = null, o.setBigImage(t)
                    }).one("load", function() {
                        o.afterLoad(t), o.setBigImage(t)
                    }).addClass("fancybox-image").appendTo(t.$content).attr("src", t.opts.thumb || t.opts.$thumb.attr("src"))) : o.setBigImage(t)
                },
                setBigImage: function(t) {
                    var e = this,
                        i = m("<img />");
                    t.$image = i.one("error", function() {
                        e.setError(t)
                    }).one("load", function() {
                        clearTimeout(t.timouts), t.timouts = null, e.isClosing || (t.width = t.opts.width || this.naturalWidth, t.height = t.opts.height || this.naturalHeight, t.opts.image.srcset && i.attr("sizes", "100vw").attr("srcset", t.opts.image.srcset), e.hideLoading(t), t.$ghost ? t.timouts = setTimeout(function() {
                            t.timouts = null, t.$ghost.hide()
                        }, Math.min(300, Math.max(1e3, t.height / 1600))) : e.afterLoad(t))
                    }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (i[0].complete || "complete" == i[0].readyState) && i[0].naturalWidth && i[0].naturalHeight ? i.trigger("load") : i[0].error ? i.trigger("error") : t.timouts = setTimeout(function() {
                        i[0].complete || t.hasError || e.showLoading(t)
                    }, 100)
                },
                setIframe: function(o) {
                    var r, e = this,
                        a = o.opts.iframe,
                        t = o.$slide;
                    o.$content = m('<div class="fancybox-content' + (a.preload ? " fancybox-is-hidden" : "") + '"></div>').css(a.css).appendTo(t), r = m(a.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(a.attr).appendTo(o.$content), a.preload ? (e.showLoading(o), r.on("load.fb error.fb", function(t) {
                        this.isReady = 1, o.$slide.trigger("refresh"), e.afterLoad(o)
                    }), t.on("refresh.fb", function() {
                        var t, e, i = o.$content,
                            n = a.css.width,
                            s = a.css.height;
                        if (1 === r[0].isReady) {
                            try {
                                e = r.contents().find("body")
                            } catch (t) {}
                            e && e.length && (n === g && (t = r[0].contentWindow.document.documentElement.scrollWidth, n = Math.ceil(e.outerWidth(!0) + (i.width() - t)), n += i.outerWidth() - i.innerWidth()), s === g && (s = Math.ceil(e.outerHeight(!0)), s += i.outerHeight() - i.innerHeight()), n && i.width(n), s && i.height(s)), i.removeClass("fancybox-is-hidden")
                        }
                    })) : this.afterLoad(o), r.attr("src", o.src), !0 === o.opts.smallBtn && o.$content.prepend(e.translate(o, o.opts.btnTpl.smallBtn)), t.one("onReset", function() {
                        try {
                            m(this).find("iframe").hide().attr("src", "//about:blank")
                        } catch (t) {}
                        m(this).empty(), o.isLoaded = !1
                    })
                },
                setContent: function(t, e) {
                    var i;
                    this.isClosing || (this.hideLoading(t), t.$slide.empty(), (i = e) && i.hasOwnProperty && i instanceof m && e.parent().length ? (e.parent(".fancybox-slide--inline").trigger("onReset"), t.$placeholder = m("<div></div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === m.type(e) && 3 === (e = m("<div>").append(m.trim(e)).contents())[0].nodeType && (e = m("<div>").html(e)), t.opts.filter && (e = m("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function() {
                        m(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (m(this).empty(), t.isLoaded = !1)
                    }), t.$content = m(e).appendTo(t.$slide), this.afterLoad(t))
                },
                setError: function(t) {
                    t.hasError = !0, t.$slide.removeClass("fancybox-slide--" + t.type), this.setContent(t, this.translate(t, t.opts.errorTpl))
                },
                showLoading: function(t) {
                    (t = t || this.current) && !t.$spinner && (t.$spinner = m(this.opts.spinnerTpl).appendTo(t.$slide))
                },
                hideLoading: function(t) {
                    (t = t || this.current) && t.$spinner && (t.$spinner.remove(), delete t.$spinner)
                },
                afterLoad: function(t) {
                    var e = this;
                    e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), t.opts.smallBtn && !t.$smallBtn && (t.$smallBtn = m(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content.filter("div,form").first())), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function(t) {
                        return 2 == t.button && t.preventDefault(), !0
                    }), "image" === t.type && m('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.revealContent(t))
                },
                revealContent: function(e) {
                    var t, i, n, s, o, r = this,
                        a = e.$slide,
                        l = !1;
                    return t = e.opts[r.firstRun ? "animationEffect" : "transitionEffect"], n = e.opts[r.firstRun ? "animationDuration" : "transitionDuration"], n = parseInt(e.forcedDuration === g ? n : e.forcedDuration, 10), !e.isMoved && e.pos === r.currPos && n || (t = !1), "zoom" !== t || e.pos === r.currPos && n && "image" === e.type && !e.hasError && (l = r.getThumbPos(e)) || (t = "fade"), "zoom" === t ? ((o = r.getFitPos(e)).scaleX = o.width / l.width, o.scaleY = o.height / l.height, delete o.width, delete o.height, "auto" == (s = e.opts.zoomOpacity) && (s = .1 < Math.abs(e.width / e.height - l.width / l.height)), s && (l.opacity = .1, o.opacity = 1), m.fancybox.setTranslate(e.$content.removeClass("fancybox-is-hidden"), l), f(e.$content), void m.fancybox.animate(e.$content, o, n, function() {
                        r.complete()
                    })) : (r.updateSlide(e), t ? (m.fancybox.stop(a), i = "fancybox-animated fancybox-slide--" + (e.pos >= r.prevPos ? "next" : "previous") + " fancybox-fx-" + t, a.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(i), e.$content.removeClass("fancybox-is-hidden"), f(a), void m.fancybox.animate(a, "fancybox-slide--current", n, function(t) {
                        a.removeClass(i).removeAttr("style"), e.pos === r.currPos && r.complete()
                    }, !0)) : (f(a), e.$content.removeClass("fancybox-is-hidden"), void(e.pos === r.currPos && r.complete())))
                },
                getThumbPos: function(t) {
                    var e, i = !1,
                        n = t.opts.$thumb,
                        s = n ? n.offset() : 0;
                    return s && n[0].ownerDocument === a && function(t) {
                        for (var e = t[0], n = e.getBoundingClientRect(), i = []; null !== e.parentElement;) "hidden" !== m(e.parentElement).css("overflow") && "auto" !== m(e.parentElement).css("overflow") || i.push(e.parentElement.getBoundingClientRect()), e = e.parentElement;
                        return i.every(function(t) {
                            var e = Math.min(n.right, t.right) - Math.max(n.left, t.left),
                                i = Math.min(n.bottom, t.bottom) - Math.max(n.top, t.top);
                            return 0 < e && 0 < i
                        }) && 0 < n.bottom && 0 < n.right && n.left < m(c).width() && n.top < m(c).height()
                    }(n) && (e = this.$refs.stage.offset(), i = {
                        top: s.top - e.top + parseFloat(n.css("border-top-width") || 0),
                        left: s.left - e.left + parseFloat(n.css("border-left-width") || 0),
                        width: n.width(),
                        height: n.height(),
                        scaleX: 1,
                        scaleY: 1
                    }), i
                },
                complete: function() {
                    var i = this,
                        t = i.current,
                        n = {};
                    t.isMoved || !t.isLoaded || t.isComplete || (t.isComplete = !0, t.$slide.siblings().trigger("onReset"), i.preload("inline"), f(t.$slide), t.$slide.addClass("fancybox-slide--complete"), m.each(i.slides, function(t, e) {
                        e.pos >= i.currPos - 1 && e.pos <= i.currPos + 1 ? n[e.pos] = e : e && (m.fancybox.stop(e.$slide), e.$slide.off().remove())
                    }), i.slides = n, i.updateCursor(), i.trigger("afterShow"), t.$slide.find("video,audio").first().trigger("play"), (m(a.activeElement).is("[disabled]") || t.opts.autoFocus && "image" != t.type && "iframe" !== t.type) && i.focus())
                },
                preload: function(t) {
                    var e = this,
                        i = e.slides[e.currPos + 1],
                        n = e.slides[e.currPos - 1];
                    i && i.type === t && e.loadSlide(i), n && n.type === t && e.loadSlide(n)
                },
                focus: function() {
                    var t, e = this.current;
                    this.isClosing || (e && e.isComplete && ((t = e.$slide.find("input[autofocus]:enabled:visible:first")).length || (t = e.$slide.find("button,:input,[tabindex],a").filter(":enabled:visible:first"))), (t = t && t.length ? t : this.$refs.container).focus())
                },
                activate: function() {
                    var e = this;
                    m(".fancybox-container").each(function() {
                        var t = m(this).data("FancyBox");
                        t && t.id !== e.id && !t.isClosing && (t.trigger("onDeactivate"), t.removeEvents(), t.isVisible = !1)
                    }), e.isVisible = !0, (e.current || e.isIdle) && (e.update(), e.updateControls()), e.trigger("onActivate"), e.addEvents()
                },
                close: function(t, e) {
                    var i, n, s, o, r, a, l = this,
                        c = l.current,
                        u = function() {
                            l.cleanUp(t)
                        };
                    return !l.isClosing && (!(l.isClosing = !0) === l.trigger("beforeClose", t) ? (l.isClosing = !1, d(function() {
                        l.update()
                    }), !1) : (l.removeEvents(), c.timouts && clearTimeout(c.timouts), s = c.$content, i = c.opts.animationEffect, n = m.isNumeric(e) ? e : i ? c.opts.animationDuration : 0, c.$slide.off(h).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), c.$slide.siblings().trigger("onReset").remove(), n && l.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"), l.hideLoading(c), l.hideControls(), l.updateCursor(), "zoom" !== i || !0 !== t && s && n && "image" === c.type && !c.hasError && (a = l.getThumbPos(c)) || (i = "fade"), "zoom" === i ? (m.fancybox.stop(s), (r = m.fancybox.getTranslate(s)).width = r.width * r.scaleX, r.height = r.height * r.scaleY, "auto" == (o = c.opts.zoomOpacity) && (o = .1 < Math.abs(c.width / c.height - a.width / a.height)), o && (a.opacity = 0), r.scaleX = r.width / a.width, r.scaleY = r.height / a.height, r.width = a.width, r.height = a.height, m.fancybox.setTranslate(c.$content, r), f(c.$content), m.fancybox.animate(c.$content, a, n, u)) : i && n ? !0 === t ? setTimeout(u, n) : m.fancybox.animate(c.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + i, n, u) : u(), !0))
                },
                cleanUp: function(t) {
                    var e, i, n = this,
                        s = m("body");
                    n.current.$slide.trigger("onReset"), n.$refs.container.empty().remove(), n.trigger("afterClose", t), n.$lastFocus && n.current.opts.backFocus && n.$lastFocus.focus(), n.current = null, (e = m.fancybox.getInstance()) ? e.activate() : (o.scrollTop(n.scrollTop).scrollLeft(n.scrollLeft), s.removeClass("fancybox-active compensate-for-scrollbar"), s.hasClass("fancybox-iosfix") && (i = parseInt(a.body.style.top, 10), s.removeClass("fancybox-iosfix").css("top", "").scrollTop(-1 * i)), m("#fancybox-style-noscroll").remove())
                },
                trigger: function(t, e) {
                    var i, n = Array.prototype.slice.call(arguments, 1),
                        s = this,
                        o = e && e.opts ? e : s.current;
                    if (o ? n.unshift(o) : o = s, n.unshift(s), m.isFunction(o.opts[t]) && (i = o.opts[t].apply(o, n)), !1 === i) return i;
                    "afterClose" !== t && s.$refs ? s.$refs.container.trigger(t + ".fb", n) : l.trigger(t + ".fb", n)
                },
                updateControls: function(t) {
                    var e = this,
                        i = e.current,
                        n = i.index,
                        s = i.opts.caption,
                        o = e.$refs.container,
                        r = e.$refs.caption;
                    i.$slide.trigger("refresh"), e.$caption = s && s.length ? r.html(s) : null, e.isHiddenControls || e.isIdle || e.showControls(), o.find("[data-fancybox-count]").html(e.group.length), o.find("[data-fancybox-index]").html(n + 1), o.find("[data-fancybox-prev]").prop("disabled", !i.opts.loop && n <= 0), o.find("[data-fancybox-next]").prop("disabled", !i.opts.loop && n >= e.group.length - 1), "image" === i.type ? o.find("[data-fancybox-download]").attr("href", i.opts.image.src || i.src).show() : o.find("[data-fancybox-download],[data-fancybox-zoom]").hide()
                },
                hideControls: function() {
                    this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")
                },
                showControls: function() {
                    var t = this,
                        e = t.current ? t.current.opts : t.opts,
                        i = t.$refs.container;
                    t.isHiddenControls = !1, t.idleSecondsCounter = 0, i.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && 1 < t.group.length)).toggleClass("fancybox-show-nav", !!(e.arrows && 1 < t.group.length)).toggleClass("fancybox-is-modal", !!e.modal), t.$caption ? i.addClass("fancybox-show-caption ") : i.removeClass("fancybox-show-caption")
                },
                toggleControls: function() {
                    this.isHiddenControls ? this.showControls() : this.hideControls()
                }
            }), m.fancybox = {
                version: "3.2.10",
                defaults: e,
                getInstance: function(t) {
                    var e = m('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                        i = Array.prototype.slice.call(arguments, 1);
                    return e instanceof n && ("string" === m.type(t) ? e[t].apply(e, i) : "function" === m.type(t) && t.apply(e, i), e)
                },
                open: function(t, e, i) {
                    return new n(t, e, i)
                },
                close: function(t) {
                    var e = this.getInstance();
                    e && (e.close(), !0 === t && this.close())
                },
                destroy: function() {
                    this.close(!0), l.off("click.fb-start")
                },
                isMobile: a.createTouch !== g && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                use3d: (t = a.createElement("div"), c.getComputedStyle && c.getComputedStyle(t).getPropertyValue("transform") && !(a.documentMode && a.documentMode < 11)),
                getTranslate: function(t) {
                    var e;
                    if (!t || !t.length) return !1;
                    if ((e = (e = t.eq(0).css("transform")) && -1 !== e.indexOf("matrix") ? (e = (e = e.split("(")[1]).split(")")[0]).split(",") : []).length) e = (e = 10 < e.length ? [e[13], e[12], e[0], e[5]] : [e[5], e[4], e[0], e[3]]).map(parseFloat);
                    else {
                        e = [0, 0, 1, 1];
                        var i = /\.*translate\((.*)px,(.*)px\)/i.exec(t.eq(0).attr("style"));
                        i && (e[0] = parseFloat(i[2]), e[1] = parseFloat(i[1]))
                    }
                    return {
                        top: e[0],
                        left: e[1],
                        scaleX: e[2],
                        scaleY: e[3],
                        opacity: parseFloat(t.css("opacity")),
                        width: t.width(),
                        height: t.height()
                    }
                },
                setTranslate: function(t, e) {
                    var i = "",
                        n = {};
                    if (t && e) return e.left === g && e.top === g || (i = (e.left === g ? t.position().left : e.left) + "px, " + (e.top === g ? t.position().top : e.top) + "px", i = this.use3d ? "translate3d(" + i + ", 0px)" : "translate(" + i + ")"), e.scaleX !== g && e.scaleY !== g && (i = (i.length ? i + " " : "") + "scale(" + e.scaleX + ", " + e.scaleY + ")"), i.length && (n.transform = i), e.opacity !== g && (n.opacity = e.opacity), e.width !== g && (n.width = e.width), e.height !== g && (n.height = e.height), t.css(n)
                },
                animate: function(e, i, t, n, s) {
                    m.isFunction(t) && (n = t, t = null), m.isPlainObject(i) || e.removeAttr("style"), e.on(h, function(t) {
                        (!t || !t.originalEvent || e.is(t.originalEvent.target) && "z-index" != t.originalEvent.propertyName) && (m.fancybox.stop(e), m.isPlainObject(i) ? (i.scaleX !== g && i.scaleY !== g && (e.css("transition-duration", ""), i.width = Math.round(e.width() * i.scaleX), i.height = Math.round(e.height() * i.scaleY), i.scaleX = 1, i.scaleY = 1, m.fancybox.setTranslate(e, i)), !1 === s && e.removeAttr("style")) : !0 !== s && e.removeClass(i), m.isFunction(n) && n(t))
                    }), m.isNumeric(t) && e.css("transition-duration", t + "ms"), m.isPlainObject(i) ? m.fancybox.setTranslate(e, i) : e.addClass(i), i.scaleX && e.hasClass("fancybox-image-wrap") && e.parent().addClass("fancybox-is-scaling"), e.data("timer", setTimeout(function() {
                        e.trigger("transitionend")
                    }, t + 16))
                },
                stop: function(t) {
                    clearTimeout(t.data("timer")), t.off("transitionend").css("transition-duration", ""), t.hasClass("fancybox-image-wrap") && t.parent().removeClass("fancybox-is-scaling")
                }
            }, m.fn.fancybox = function(t) {
                var e;
                return (e = (t = t || {}).selector || !1) ? m("body").off("click.fb-start", e).on("click.fb-start", e, {
                    options: t
                }, i) : this.off("click.fb-start").on("click.fb-start", {
                    items: this,
                    options: t
                }, i), this
            }, l.on("click.fb-start", "[data-fancybox]", i)
        }
    function i(t) {
        var e = m(t.currentTarget),
            i = t.data ? t.data.options : {},
            n = e.attr("data-fancybox") || "",
            s = 0,
            o = [];
        t.isDefaultPrevented() || (t.preventDefault(), n ? (s = (o = (o = i.selector ? m(i.selector) : t.data ? t.data.items : []).length ? o.filter('[data-fancybox="' + n + '"]') : m('[data-fancybox="' + n + '"]')).index(e)) < 0 && (s = 0) : o = [e], m.fancybox.open(o, i, s))
    }
}(window, document, window.jQuery || jQuery),
function(h) {
    "use strict";
    var f = function(i, t, e) {
            if (i) return e = e || "", "object" === h.type(e) && (e = h.param(e, !0)), h.each(t, function(t, e) {
                i = i.replace("$" + t, e || "")
            }), e.length && (i += (0 < i.indexOf("?") ? "&" : "?") + e), i
        },
        p = {
            youtube: {
                matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                params: {
                    autoplay: 1,
                    autohide: 1,
                    fs: 1,
                    rel: 0,
                    hd: 1,
                    wmode: "transparent",
                    enablejsapi: 1,
                    html5: 1
                },
                paramPlace: 8,
                type: "iframe",
                url: "//www.youtube.com/embed/$4",
                thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
            },
            vimeo: {
                matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                params: {
                    autoplay: 1,
                    hd: 1,
                    show_title: 1,
                    show_byline: 1,
                    show_portrait: 0,
                    fullscreen: 1,
                    api: 1
                },
                paramPlace: 3,
                type: "iframe",
                url: "//player.vimeo.com/video/$2"
            },
            metacafe: {
                matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
                type: "iframe",
                url: "//www.metacafe.com/embed/$1/?ap=1"
            },
            dailymotion: {
                matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
                params: {
                    additionalInfos: 0,
                    autoStart: 1
                },
                type: "iframe",
                url: "//www.dailymotion.com/embed/video/$1"
            },
            vine: {
                matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
                type: "iframe",
                url: "//vine.co/v/$1/embed/simple"
            },
            instagram: {
                matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                type: "image",
                url: "//$1/p/$2/media/?size=l"
            },
            gmap_place: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                type: "iframe",
                url: function(t) {
                    return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12]) + "&output=" + (t[12] && 0 < t[12].indexOf("layer=c") ? "svembed" : "embed")
                }
            },
            gmap_search: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                type: "iframe",
                url: function(t) {
                    return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
                }
            }
        };
    h(document).on("objectNeedsType.fb", function(t, e, s) {
        var i, o, r, a, l, c, n, u = s.src || "",
            d = !1;
        i = h.extend(!0, {}, p, s.opts.media), h.each(i, function(t, e) {
            if (r = u.match(e.matcher)) {
                if (d = e.type, c = {}, e.paramPlace && r[e.paramPlace]) {
                    "?" == (l = r[e.paramPlace])[0] && (l = l.substring(1)), l = l.split("&");
                    for (var i = 0; i < l.length; ++i) {
                        var n = l[i].split("=", 2);
                        2 == n.length && (c[n[0]] = decodeURIComponent(n[1].replace(/\+/g, " ")))
                    }
                }
                return a = h.extend(!0, {}, e.params, s.opts[t], c), u = "function" === h.type(e.url) ? e.url.call(this, r, a, s) : f(e.url, r, a), o = "function" === h.type(e.thumb) ? e.thumb.call(this, r, a, s) : f(e.thumb, r), "vimeo" === t && (u = u.replace("&%23", "#")), !1
            }
        }), d ? (s.src = u, s.type = d, s.opts.thumb || s.opts.$thumb && s.opts.$thumb.length || (s.opts.thumb = o), "iframe" === d && (h.extend(!0, s.opts, {
            iframe: {
                preload: !1,
                attr: {
                    scrolling: "no"
                }
            }
        }), s.contentProvider = n, s.opts.slideClass += " fancybox-slide--video")) : u && (s.type = s.opts.defaultType)
    })
}(window.jQuery || jQuery),
function(p, a, m) {
    "use strict";
    var g = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || function(t) {
            return p.setTimeout(t, 1e3 / 60)
        },
        v = p.cancelAnimationFrame || p.webkitCancelAnimationFrame || p.mozCancelAnimationFrame || p.oCancelAnimationFrame || function(t) {
            p.clearTimeout(t)
        },
        u = function(t) {
            var e = [];
            for (var i in t = (t = t.originalEvent || t || p.e).touches && t.touches.length ? t.touches : t.changedTouches && t.changedTouches.length ? t.changedTouches : [t]) t[i].pageX ? e.push({
                x: t[i].pageX,
                y: t[i].pageY
            }) : t[i].clientX && e.push({
                x: t[i].clientX,
                y: t[i].clientY
            });
            return e
        },
        y = function(t, e, i) {
            return e && t ? "x" === i ? t.x - e.x : "y" === i ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
        },
        l = function(t) {
            if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea') || m.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
            for (var e = 0, i = t[0].attributes, n = i.length; e < n; e++)
                if ("data-fancybox-" === i[e].nodeName.substr(0, 14)) return !0;
            return !1
        },
        c = function(t) {
            for (var e, i, n, s, o, r = !1; e = t.get(0), void 0, i = p.getComputedStyle(e)["overflow-y"], n = p.getComputedStyle(e)["overflow-x"], s = ("scroll" === i || "auto" === i) && e.scrollHeight > e.clientHeight, o = ("scroll" === n || "auto" === n) && e.scrollWidth > e.clientWidth, !(r = s || o) && (t = t.parent()).length && !t.hasClass("fancybox-stage") && !t.is("body"););
            return r
        },
        i = function(t) {
            var e = this;
            e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", m.proxy(e, "ontouchstart"))
        };
    i.prototype.destroy = function() {
        this.$container.off(".fb.touch")
    }, i.prototype.ontouchstart = function(t) {
        var e = this,
            i = m(t.target),
            n = e.instance,
            s = n.current,
            o = s.$content,
            r = "touchstart" == t.type;
        if (r && e.$container.off("mousedown.fb.touch"), (!t.originalEvent || 2 != t.originalEvent.button) && i.length && !l(i) && !l(i.parent()) && (i.is("img") || !(t.originalEvent.clientX > i[0].clientWidth + i.offset().left))) {
            if (!s || e.instance.isAnimating || e.instance.isClosing) return t.stopPropagation(), void t.preventDefault();
            e.realPoints = e.startPoints = u(t), e.startPoints && (t.stopPropagation(), e.startEvent = t, e.canTap = !0, e.$target = i, e.$content = o, e.opts = s.opts.touch, e.isPanning = !1, e.isSwiping = !1, e.isZooming = !1, e.isScrolling = !1, e.sliderStartPos = e.sliderLastPos || {
                top: 0,
                left: 0
            }, e.contentStartPos = m.fancybox.getTranslate(e.$content), e.contentLastPos = null, e.startTime = (new Date).getTime(), e.distanceX = e.distanceY = e.distance = 0, e.canvasWidth = Math.round(s.$slide[0].clientWidth), e.canvasHeight = Math.round(s.$slide[0].clientHeight), m(a).off(".fb.touch").on(r ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", m.proxy(e, "ontouchend")).on(r ? "touchmove.fb.touch" : "mousemove.fb.touch", m.proxy(e, "ontouchmove")), m.fancybox.isMobile && a.addEventListener("scroll", e.onscroll, !0), (e.opts || n.canPan()) && (i.is(e.$stage) || e.$stage.find(i).length) ? (m.fancybox.isMobile && (c(i) || c(i.parent())) || t.preventDefault(), 1 === e.startPoints.length && ("image" === s.type && (e.contentStartPos.width > e.canvasWidth + 1 || e.contentStartPos.height > e.canvasHeight + 1) ? (m.fancybox.stop(e.$content), e.$content.css("transition-duration", ""), e.isPanning = !0) : e.isSwiping = !0, e.$container.addClass("fancybox-controls--isGrabbing")), 2 !== e.startPoints.length || n.isAnimating || s.hasError || "image" !== s.type || !s.isLoaded && !s.$ghost || (e.canTap = !1, e.isSwiping = !1, e.isPanning = !1, e.isZooming = !0, m.fancybox.stop(e.$content), e.$content.css("transition-duration", ""), e.centerPointStartX = .5 * (e.startPoints[0].x + e.startPoints[1].x) - m(p).scrollLeft(), e.centerPointStartY = .5 * (e.startPoints[0].y + e.startPoints[1].y) - m(p).scrollTop(), e.percentageOfImageAtPinchPointX = (e.centerPointStartX - e.contentStartPos.left) / e.contentStartPos.width, e.percentageOfImageAtPinchPointY = (e.centerPointStartY - e.contentStartPos.top) / e.contentStartPos.height, e.startDistanceBetweenFingers = y(e.startPoints[0], e.startPoints[1]))) : i.is("img") && t.preventDefault())
        }
    }, i.prototype.onscroll = function(t) {
        self.isScrolling = !0
    }, i.prototype.ontouchmove = function(t) {
        var e = this,
            i = m(t.target);
        e.isScrolling || !i.is(e.$stage) && !e.$stage.find(i).length ? e.canTap = !1 : (e.newPoints = u(t), (e.opts || e.instance.canPan()) && e.newPoints && e.newPoints.length && (e.isSwiping && !0 === e.isSwiping || t.preventDefault(), e.distanceX = y(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = y(e.newPoints[0], e.startPoints[0], "y"), e.distance = y(e.newPoints[0], e.startPoints[0]), 0 < e.distance && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom())))
    }, i.prototype.onSwipe = function(t) {
        var e, n = this,
            i = n.isSwiping,
            s = n.sliderStartPos.left || 0;
        if (!0 !== i) "x" == i && (0 < n.distanceX && (n.instance.group.length < 2 || 0 === n.instance.current.index && !n.instance.current.opts.loop) ? s += Math.pow(n.distanceX, .8) : n.distanceX < 0 && (n.instance.group.length < 2 || n.instance.current.index === n.instance.group.length - 1 && !n.instance.current.opts.loop) ? s -= Math.pow(-n.distanceX, .8) : s += n.distanceX), n.sliderLastPos = {
            top: "x" == i ? 0 : n.sliderStartPos.top + n.distanceY,
            left: s
        }, n.requestId && (v(n.requestId), n.requestId = null), n.requestId = g(function() {
            n.sliderLastPos && (m.each(n.instance.slides, function(t, e) {
                var i = e.pos - n.instance.currPos;
                m.fancybox.setTranslate(e.$slide, {
                    top: n.sliderLastPos.top,
                    left: n.sliderLastPos.left + i * n.canvasWidth + i * e.opts.gutter
                })
            }), n.$container.addClass("fancybox-is-sliding"))
        });
        else if (10 < Math.abs(n.distance)) {
            if (n.canTap = !1, n.instance.group.length < 2 && n.opts.vertical ? n.isSwiping = "y" : n.instance.isDragging || !1 === n.opts.vertical || "auto" === n.opts.vertical && 800 < m(p).width() ? n.isSwiping = "x" : (e = Math.abs(180 * Math.atan2(n.distanceY, n.distanceX) / Math.PI), n.isSwiping = 45 < e && e < 135 ? "y" : "x"), n.canTap = !1, "y" === n.isSwiping && m.fancybox.isMobile && (c(n.$target) || c(n.$target.parent()))) return void(n.isScrolling = !0);
            n.instance.isDragging = n.isSwiping, n.startPoints = n.newPoints, m.each(n.instance.slides, function(t, e) {
                m.fancybox.stop(e.$slide), e.$slide.css("transition-duration", ""), e.inTransition = !1, e.pos === n.instance.current.pos && (n.sliderStartPos.left = m.fancybox.getTranslate(e.$slide).left)
            }), n.instance.SlideShow && n.instance.SlideShow.isActive && n.instance.SlideShow.stop()
        }
    }, i.prototype.onPan = function() {
        var t = this;
        y(t.newPoints[0], t.realPoints[0]) < (m.fancybox.isMobile ? 10 : 5) ? t.startPoints = t.newPoints : (t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && (v(t.requestId), t.requestId = null), t.requestId = g(function() {
            m.fancybox.setTranslate(t.$content, t.contentLastPos)
        }))
    }, i.prototype.limitMovement = function() {
        var t, e, i, n, s, o, r = this,
            a = r.canvasWidth,
            l = r.canvasHeight,
            c = r.distanceX,
            u = r.distanceY,
            d = r.contentStartPos,
            h = d.left,
            f = d.top,
            p = d.width,
            m = d.height;
        return s = a < p ? h + c : h, o = f + u, t = Math.max(0, .5 * a - .5 * p), e = Math.max(0, .5 * l - .5 * m), i = Math.min(a - p, .5 * a - .5 * p), n = Math.min(l - m, .5 * l - .5 * m), a < p && (0 < c && t < s && (s = t - 1 + Math.pow(-t + h + c, .8) || 0), c < 0 && s < i && (s = i + 1 - Math.pow(i - h - c, .8) || 0)), l < m && (0 < u && e < o && (o = e - 1 + Math.pow(-e + f + u, .8) || 0), u < 0 && o < n && (o = n + 1 - Math.pow(n - f - u, .8) || 0)), {
            top: o,
            left: s,
            scaleX: d.scaleX,
            scaleY: d.scaleY
        }
    }, i.prototype.limitPosition = function(t, e, i, n) {
        var s = this.canvasWidth,
            o = this.canvasHeight;
        return t = s < i ? (t = 0 < t ? 0 : t) < s - i ? s - i : t : Math.max(0, s / 2 - i / 2), {
            top: e = o < n ? (e = 0 < e ? 0 : e) < o - n ? o - n : e : Math.max(0, o / 2 - n / 2),
            left: t
        }
    }, i.prototype.onZoom = function() {
        var t = this,
            e = t.contentStartPos.width,
            i = t.contentStartPos.height,
            n = t.contentStartPos.left,
            s = t.contentStartPos.top,
            o = y(t.newPoints[0], t.newPoints[1]) / t.startDistanceBetweenFingers,
            r = Math.floor(e * o),
            a = Math.floor(i * o),
            l = (e - r) * t.percentageOfImageAtPinchPointX,
            c = (i - a) * t.percentageOfImageAtPinchPointY,
            u = (t.newPoints[0].x + t.newPoints[1].x) / 2 - m(p).scrollLeft(),
            d = (t.newPoints[0].y + t.newPoints[1].y) / 2 - m(p).scrollTop(),
            h = u - t.centerPointStartX,
            f = {
                top: s + (c + (d - t.centerPointStartY)),
                left: n + (l + h),
                scaleX: t.contentStartPos.scaleX * o,
                scaleY: t.contentStartPos.scaleY * o
            };
        t.canTap = !1, t.newWidth = r, t.newHeight = a, t.contentLastPos = f, t.requestId && (v(t.requestId), t.requestId = null), t.requestId = g(function() {
            m.fancybox.setTranslate(t.$content, t.contentLastPos)
        })
    }, i.prototype.ontouchend = function(t) {
        var e = this,
            i = Math.max((new Date).getTime() - e.startTime, 1),
            n = e.isSwiping,
            s = e.isPanning,
            o = e.isZooming,
            r = e.isScrolling;
        if (e.endPoints = u(t), e.$container.removeClass("fancybox-controls--isGrabbing"), m(a).off(".fb.touch"), a.removeEventListener("scroll", e.onscroll, !0), e.requestId && (v(e.requestId), e.requestId = null), e.isSwiping = !1, e.isPanning = !1, e.isZooming = !1, e.isScrolling = !1, e.instance.isDragging = !1, e.canTap) return e.onTap(t);
        e.speed = 366, e.velocityX = e.distanceX / i * .5, e.velocityY = e.distanceY / i * .5, e.speedX = Math.max(.5 * e.speed, Math.min(1.5 * e.speed, 1 / Math.abs(e.velocityX) * e.speed)), s ? e.endPanning() : o ? e.endZooming() : e.endSwiping(n, r)
    }, i.prototype.endSwiping = function(t, e) {
        var i = this,
            n = !1,
            s = i.instance.group.length;
        i.sliderLastPos = null, "y" == t && !e && 50 < Math.abs(i.distanceY) ? (m.fancybox.animate(i.instance.current.$slide, {
            top: i.sliderStartPos.top + i.distanceY + 150 * i.velocityY,
            opacity: 0
        }, 150), n = i.instance.close(!0, 300)) : "x" == t && 50 < i.distanceX && 1 < s ? n = i.instance.previous(i.speedX) : "x" == t && i.distanceX < -50 && 1 < s && (n = i.instance.next(i.speedX)), !1 !== n || "x" != t && "y" != t || (e || s < 2 ? i.instance.centerSlide(i.instance.current, 150) : i.instance.jumpTo(i.instance.current.index)), i.$container.removeClass("fancybox-is-sliding")
    }, i.prototype.endPanning = function() {
        var t, e, i, n = this;
        n.contentLastPos && (!1 === n.opts.momentum ? (t = n.contentLastPos.left, e = n.contentLastPos.top) : (t = n.contentLastPos.left + n.velocityX * n.speed, e = n.contentLastPos.top + n.velocityY * n.speed), (i = n.limitPosition(t, e, n.contentStartPos.width, n.contentStartPos.height)).width = n.contentStartPos.width, i.height = n.contentStartPos.height, m.fancybox.animate(n.$content, i, 330))
    }, i.prototype.endZooming = function() {
        var t, e, i, n, s = this,
            o = s.instance.current,
            r = s.newWidth,
            a = s.newHeight;
        s.contentLastPos && (t = s.contentLastPos.left, n = {
            top: e = s.contentLastPos.top,
            left: t,
            width: r,
            height: a,
            scaleX: 1,
            scaleY: 1
        }, m.fancybox.setTranslate(s.$content, n), r < s.canvasWidth && a < s.canvasHeight ? s.instance.scaleToFit(150) : r > o.width || a > o.height ? s.instance.scaleToActual(s.centerPointStartX, s.centerPointStartY, 150) : (i = s.limitPosition(t, e, r, a), m.fancybox.setTranslate(s.content, m.fancybox.getTranslate(s.$content)), m.fancybox.animate(s.$content, i, 150)))
    }, i.prototype.onTap = function(i) {
        var t, n = this,
            e = m(i.target),
            s = n.instance,
            o = s.current,
            r = i && u(i) || n.startPoints,
            a = r[0] ? r[0].x - n.$stage.offset().left : 0,
            l = r[0] ? r[0].y - n.$stage.offset().top : 0,
            c = function(t) {
                var e = o.opts[t];
                if (m.isFunction(e) && (e = e.apply(s, [o, i])), e) switch (e) {
                    case "close":
                        s.close(n.startEvent);
                        break;
                    case "toggleControls":
                        s.toggleControls(!0);
                        break;
                    case "next":
                        s.next();
                        break;
                    case "nextOrClose":
                        1 < s.group.length ? s.next() : s.close(n.startEvent);
                        break;
                    case "zoom":
                        "image" == o.type && (o.isLoaded || o.$ghost) && (s.canPan() ? s.scaleToFit() : s.isScaledDown() ? s.scaleToActual(a, l) : s.group.length < 2 && s.close(n.startEvent))
                }
            };
        if ((!i.originalEvent || 2 != i.originalEvent.button) && (e.is("img") || !(a > e[0].clientWidth + e.offset().left))) {
            if (e.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) t = "Outside";
            else if (e.is(".fancybox-slide")) t = "Slide";
            else {
                if (!s.current.$content || !s.current.$content.find(e).addBack().filter(e).length) return;
                t = "Content"
            }
            if (n.tapped) {
                if (clearTimeout(n.tapped), n.tapped = null, 50 < Math.abs(a - n.tapX) || 50 < Math.abs(l - n.tapY)) return this;
                c("dblclick" + t)
            } else n.tapX = a, n.tapY = l, o.opts["dblclick" + t] && o.opts["dblclick" + t] !== o.opts["click" + t] ? n.tapped = setTimeout(function() {
                n.tapped = null, c("click" + t)
            }, 500) : c("click" + t);
            return this
        }
    }, m(a).on("onActivate.fb", function(t, e) {
        e && !e.Guestures && (e.Guestures = new i(e))
    })
}(window, document, window.jQuery || jQuery),
function(r, a) {
    "use strict";
    a.extend(!0, a.fancybox.defaults, {
        btnTpl: {
            slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,27 Z" /><path d="M15,10 v19 M23,10 v19" /></svg></button>'
        },
        slideShow: {
            autoStart: !1,
            speed: 3e3
        }
    });
    var i = function(t) {
        this.instance = t, this.init()
    };
    a.extend(i.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function() {
            var t = this;
            t.$button = t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
                t.toggle()
            }), (t.instance.group.length < 2 || !t.instance.group[t.instance.currIndex].opts.slideShow) && t.$button.hide()
        },
        set: function(t) {
            var e = this;
            e.instance && e.instance.current && (!0 === t || e.instance.current.opts.loop || e.instance.currIndex < e.instance.group.length - 1) ? e.timer = setTimeout(function() {
                e.isActive && e.instance.jumpTo((e.instance.currIndex + 1) % e.instance.group.length)
            }, e.instance.current.opts.slideShow.speed) : (e.stop(), e.instance.idleSecondsCounter = 0, e.instance.showControls())
        },
        clear: function() {
            clearTimeout(this.timer), this.timer = null
        },
        start: function() {
            var t = this.instance.current;
            t && (this.isActive = !0, this.$button.attr("title", t.opts.i18n[t.opts.lang].PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), this.set(!0))
        },
        stop: function() {
            var t = this.instance.current;
            this.clear(), this.$button.attr("title", t.opts.i18n[t.opts.lang].PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), this.isActive = !1
        },
        toggle: function() {
            this.isActive ? this.stop() : this.start()
        }
    }), a(r).on({
        "onInit.fb": function(t, e) {
            e && !e.SlideShow && (e.SlideShow = new i(e))
        },
        "beforeShow.fb": function(t, e, i, n) {
            var s = e && e.SlideShow;
            n ? s && i.opts.slideShow.autoStart && s.start() : s && s.isActive && s.clear()
        },
        "afterShow.fb": function(t, e, i) {
            var n = e && e.SlideShow;
            n && n.isActive && n.set()
        },
        "afterKeydown.fb": function(t, e, i, n, s) {
            var o = e && e.SlideShow;
            !o || !i.opts.slideShow || 80 !== s && 32 !== s || a(r.activeElement).is("button,a,input") || (n.preventDefault(), o.toggle())
        },
        "beforeClose.fb onDeactivate.fb": function(t, e) {
            var i = e && e.SlideShow;
            i && i.stop()
        }
    }), a(r).on("visibilitychange", function() {
        var t = a.fancybox.getInstance(),
            e = t && t.SlideShow;
        e && e.isActive && (r.hidden ? e.clear() : e.set())
    })
}(document, window.jQuery || jQuery),
function(o, i) {
    "use strict";
    var e = function() {
        var t, e, i, n = [
                ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
            ],
            s = {};
        for (e = 0; e < n.length; e++)
            if ((t = n[e]) && t[1] in o) {
                for (i = 0; i < t.length; i++) s[n[0][i]] = t[i];
                return s
            } return !1
    }();
    if (e) {
        var n = {
            request: function(t) {
                (t = t || o.documentElement)[e.requestFullscreen](t.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                o[e.exitFullscreen]()
            },
            toggle: function(t) {
                t = t || o.documentElement, this.isFullscreen() ? this.exit() : this.request(t)
            },
            isFullscreen: function() {
                return Boolean(o[e.fullscreenElement])
            },
            enabled: function() {
                return Boolean(o[e.fullscreenEnabled])
            }
        };
        i.extend(!0, i.fancybox.defaults, {
            btnTpl: {
                fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 0 40 40"><path d="M9,12 h22 v16 h-22 v-16 v16 h22 v-16 Z" /></svg></button>'
            },
            fullScreen: {
                autoStart: !1
            }
        }), i(o).on({
            "onInit.fb": function(t, e) {
                var i;
                e && e.group[e.currIndex].opts.fullScreen ? ((i = e.$refs.container).on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(t) {
                    t.stopPropagation(), t.preventDefault(), n.toggle(i[0])
                }), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && n.request(i[0]), e.FullScreen = n) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
            },
            "afterKeydown.fb": function(t, e, i, n, s) {
                e && e.FullScreen && 70 === s && (n.preventDefault(), e.FullScreen.toggle(e.$refs.container[0]))
            },
            "beforeClose.fb": function(t) {
                t && t.FullScreen && n.exit()
            }
        }), i(o).on(e.fullscreenchange, function() {
            var t = n.isFullscreen(),
                e = i.fancybox.getInstance();
            e && (e.current && "image" === e.current.type && e.isAnimating && (e.current.$content.css("transition", "none"), e.isAnimating = !1, e.update(!0, !0, 0)), e.trigger("onFullscreenChange", t), e.$refs.container.toggleClass("fancybox-is-fullscreen", t))
        })
    } else i && i.fancybox && (i.fancybox.defaults.btnTpl.fullScreen = !1)
}(document, window.jQuery || jQuery),
function(t, a) {
    "use strict";
    a.fancybox.defaults = a.extend(!0, {
        btnTpl: {
            thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg viewBox="0 0 120 120"><path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" /></svg></button>'
        },
        thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y"
        }
    }, a.fancybox.defaults);
    var n = function(t) {
        this.init(t)
    };
    a.extend(n.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function(t) {
            var e = this;
            (e.instance = t).Thumbs = e;
            var i = t.group[0],
                n = t.group[1];
            e.opts = t.group[t.currIndex].opts.thumbs, e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]"), e.opts && i && n && ("image" == i.type || i.opts.thumb || i.opts.$thumb) && ("image" == n.type || n.opts.thumb || n.opts.$thumb) ? (e.$button.show().on("click", function() {
                e.toggle()
            }), e.isActive = !0) : e.$button.hide()
        },
        create: function() {
            var i, n, t = this,
                e = t.instance,
                s = t.opts.parentEl;
            t.$grid = a('<div class="fancybox-thumbs fancybox-thumbs-' + t.opts.axis + '"></div>').appendTo(e.$refs.container.find(s).addBack().filter(s)), i = "<ul>", a.each(e.group, function(t, e) {
                (n = e.opts.thumb || (e.opts.$thumb ? e.opts.$thumb.attr("src") : null)) || "image" !== e.type || (n = e.src), n && n.length && (i += '<li data-index="' + t + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + n + '" /></li>')
            }), i += "</ul>", t.$list = a(i).appendTo(t.$grid).on("click", "li", function() {
                e.jumpTo(a(this).data("index"))
            }), t.$list.find("img").hide().one("load", function() {
                var t, e, i, n, s = a(this).parent().removeClass("fancybox-thumbs-loading"),
                    o = s.outerWidth(),
                    r = s.outerHeight();
                t = this.naturalWidth || this.width, n = (e = this.naturalHeight || this.height) / r, 1 <= (i = t / o) && 1 <= n && (n < i ? (t /= n, e = r) : (t = o, e /= i)), a(this).css({
                    width: Math.floor(t),
                    height: Math.floor(e),
                    "margin-top": r < e ? Math.floor(.3 * r - .3 * e) : Math.floor(.5 * r - .5 * e),
                    "margin-left": Math.floor(.5 * o - .5 * t)
                }).show()
            }).each(function() {
                this.src = a(this).data("src")
            }), "x" === t.opts.axis && t.$list.width(parseInt(t.$grid.css("padding-right")) + e.group.length * t.$list.children().eq(0).outerWidth(!0) + "px")
        },
        focus: function(t) {
            var e, i, n = this,
                s = n.$list;
            n.instance.current && (i = (e = s.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + n.instance.current.index + '"]').addClass("fancybox-thumbs-active")).position(), "y" === n.opts.axis && (i.top < 0 || i.top > s.height() - e.outerHeight()) ? s.stop().animate({
                scrollTop: s.scrollTop() + i.top
            }, t) : "x" === n.opts.axis && (i.left < s.parent().scrollLeft() || i.left > s.parent().scrollLeft() + (s.parent().width() - e.outerWidth())) && s.parent().stop().animate({
                scrollLeft: i.left
            }, t))
        },
        update: function() {
            this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus(0)) : this.$grid && this.instance.trigger("onThumbsHide"), this.instance.update()
        },
        hide: function() {
            this.isVisible = !1, this.update()
        },
        show: function() {
            this.isVisible = !0, this.update()
        },
        toggle: function() {
            this.isVisible = !this.isVisible, this.update()
        }
    }), a(t).on({
        "onInit.fb": function(t, e) {
            var i;
            e && !e.Thumbs && (i = new n(e)).isActive && !0 === i.opts.autoStart && i.show()
        },
        "beforeShow.fb": function(t, e, i, n) {
            var s = e && e.Thumbs;
            s && s.isVisible && s.focus(n ? 0 : 250)
        },
        "afterKeydown.fb": function(t, e, i, n, s) {
            var o = e && e.Thumbs;
            o && o.isActive && 71 === s && (n.preventDefault(), o.toggle())
        },
        "beforeClose.fb": function(t, e) {
            var i = e && e.Thumbs;
            i && i.isVisible && !1 !== i.opts.hideOnClose && i.$grid.hide()
        }
    })
}(document, window.jQuery),
function(t, o) {
    "use strict";
    o.extend(!0, o.fancybox.defaults, {
        btnTpl: {
            share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"></svg></button>'
        },
        share: {
            tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p class="fancybox-share__links"><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" /></p></div>'
        }
    }), o(t).on("click", "[data-fancybox-share]", function() {
        var t, e, i, n, s = o.fancybox.getInstance();
        s && (t = !1 === s.current.opts.hash ? s.current.src : window.location, e = s.current.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === s.current.type ? encodeURIComponent(s.current.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, (i = t, n = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
        }, String(i).replace(/[&<>"'`=\/]/g, function(t) {
            return n[t]
        }))).replace(/\{\{descr\}\}/g, s.$caption ? encodeURIComponent(s.$caption.text()) : ""), o.fancybox.open({
            src: s.translate(s, e),
            type: "html",
            opts: {
                animationEffect: "fade",
                animationDuration: 250,
                afterLoad: function(t, e) {
                    e.$content.find(".fancybox-share__links a").click(function() {
                        return window.open(this.href, "Share", "width=550, height=450"), !1
                    })
                }
            }
        }))
    })
}(document, window.jQuery || jQuery),
function(o, r, a) {
    "use strict";
    a.escapeSelector || (a.escapeSelector = function(t) {
        return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function(t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        })
    });
    var s = !0,
        l = null,
        c = null;

    function u() {
        var t = r.location.hash.substr(1),
            e = t.split("-"),
            i = 1 < e.length && /^\+?\d+$/.test(e[e.length - 1]) && parseInt(e.pop(-1), 10) || 1;
        return i < 1 && (i = 1), {
            hash: t,
            index: i,
            gallery: e.join("-")
        }
    }

    function e(t) {
        var e;
        "" !== t.gallery && ((e = a("[data-fancybox='" + a.escapeSelector(t.gallery) + "']").eq(t.index - 1)).length || (e = a("#" + a.escapeSelector(t.gallery))), e.length && (s = !1, e.trigger("click")))
    }

    function d(t) {
        var e;
        return !!t && ((e = t.current ? t.current.opts : t.opts).hash || (e.$orig ? e.$orig.data("fancybox") : ""))
    }
    a(function() {
        !1 !== a.fancybox.defaults.hash && (a(o).on({
            "onInit.fb": function(t, e) {
                var i, n;
                !1 !== e.group[e.currIndex].opts.hash && (i = u(), (n = d(e)) && i.gallery && n == i.gallery && (e.currIndex = i.index - 1))
            },
            "beforeShow.fb": function(t, e, i) {
                var n;
                i && !1 !== i.opts.hash && (n = d(e)) && "" !== n && (r.location.hash.indexOf(n) < 0 && (e.opts.origHash = r.location.hash), l = n + (1 < e.group.length ? "-" + (i.index + 1) : ""), "replaceState" in r.history ? (c && clearTimeout(c), c = setTimeout(function() {
                    r.history[s ? "pushState" : "replaceState"]({}, o.title, r.location.pathname + r.location.search + "#" + l), c = null, s = !1
                }, 300)) : r.location.hash = l)
            },
            "beforeClose.fb": function(t, e, i) {
                var n, s;
                c && clearTimeout(c), !1 !== i.opts.hash && (n = d(e), s = e && e.opts.origHash ? e.opts.origHash : "", n && "" !== n && ("replaceState" in history ? r.history.replaceState({}, o.title, r.location.pathname + r.location.search + s) : (r.location.hash = s, a(r).scrollTop(e.scrollTop).scrollLeft(e.scrollLeft))), l = null)
            }
        }), a(r).on("hashchange.fb", function() {
            var t = u();
            a.fancybox.getInstance() ? !l || l === t.gallery + "-" + t.index || 1 === t.index && l == t.gallery || (l = null, a.fancybox.close()) : "" !== t.gallery && e(t)
        }), setTimeout(function() {
            e(u())
        }, 50))
    })
}(document, window, window.jQuery || jQuery),
function(t, e) {
    "use strict";
    var s = (new Date).getTime();
    e(t).on({
        "onInit.fb": function(t, n, e) {
            n.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(t) {
                var e = n.current,
                    i = (new Date).getTime();
                n.group.length < 1 || !1 === e.opts.wheel || "auto" === e.opts.wheel && "image" !== e.type || (t.preventDefault(), t.stopPropagation(), e.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, i - s < 250 || (s = i, n[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())))
            })
        }
    })
}(document, window.jQuery || jQuery), $.fn.parallax = function(t, e) {
        $el = $(this), TweenLite.to($el, .2, {
            x: -(e.clientX - window.innerWidth / 2) / t,
            y: -(e.clientY - window.innerHeight / 2) / t
        })
    },
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function(_) {
        _.ui = _.ui || {};
        _.ui.version = "1.12.1";
        var s, i = 0,
            a = Array.prototype.slice;
        _.cleanData = (s = _.cleanData, function(t) {
            var e, i, n;
            for (n = 0; null != (i = t[n]); n++) try {
                (e = _._data(i, "events")) && e.remove && _(i).triggerHandler("remove")
            } catch (t) {}
            s(t)
        }), _.widget = function(t, i, e) {
            var n, s, o, r = {},
                a = t.split(".")[0],
                l = a + "-" + (t = t.split(".")[1]);
            return e || (e = i, i = _.Widget), _.isArray(e) && (e = _.extend.apply(null, [{}].concat(e))), _.expr[":"][l.toLowerCase()] = function(t) {
                return !!_.data(t, l)
            }, _[a] = _[a] || {}, n = _[a][t], s = _[a][t] = function(t, e) {
                if (!this._createWidget) return new s(t, e);
                arguments.length && this._createWidget(t, e)
            }, _.extend(s, n, {
                version: e.version,
                _proto: _.extend({}, e),
                _childConstructors: []
            }), (o = new i).options = _.widget.extend({}, o.options), _.each(e, function(e, o) {
                _.isFunction(o) ? r[e] = function() {
                    function n() {
                        return i.prototype[e].apply(this, arguments)
                    }

                    function s(t) {
                        return i.prototype[e].apply(this, t)
                    }
                    return function() {
                        var t, e = this._super,
                            i = this._superApply;
                        return this._super = n, this._superApply = s, t = o.apply(this, arguments), this._super = e, this._superApply = i, t
                    }
                }() : r[e] = o
            }), s.prototype = _.widget.extend(o, {
                widgetEventPrefix: n && o.widgetEventPrefix || t
            }, r, {
                constructor: s,
                namespace: a,
                widgetName: t,
                widgetFullName: l
            }), n ? (_.each(n._childConstructors, function(t, e) {
                var i = e.prototype;
                _.widget(i.namespace + "." + i.widgetName, s, e._proto)
            }), delete n._childConstructors) : i._childConstructors.push(s), _.widget.bridge(t, s), s
        }, _.widget.extend = function(t) {
            for (var e, i, n = a.call(arguments, 1), s = 0, o = n.length; s < o; s++)
                for (e in n[s]) i = n[s][e], n[s].hasOwnProperty(e) && void 0 !== i && (_.isPlainObject(i) ? t[e] = _.isPlainObject(t[e]) ? _.widget.extend({}, t[e], i) : _.widget.extend({}, i) : t[e] = i);
            return t
        }, _.widget.bridge = function(o, e) {
            var r = e.prototype.widgetFullName || o;
            _.fn[o] = function(i) {
                var t = "string" == typeof i,
                    n = a.call(arguments, 1),
                    s = this;
                return t ? this.length || "instance" !== i ? this.each(function() {
                    var t, e = _.data(this, r);
                    return "instance" === i ? (s = e, !1) : e ? _.isFunction(e[i]) && "_" !== i.charAt(0) ? (t = e[i].apply(e, n)) !== e && void 0 !== t ? (s = t && t.jquery ? s.pushStack(t.get()) : t, !1) : void 0 : _.error("no such method '" + i + "' for " + o + " widget instance") : _.error("cannot call methods on " + o + " prior to initialization; attempted to call method '" + i + "'")
                }) : s = void 0 : (n.length && (i = _.widget.extend.apply(null, [i].concat(n))), this.each(function() {
                    var t = _.data(this, r);
                    t ? (t.option(i || {}), t._init && t._init()) : _.data(this, r, new e(i, this))
                })), s
            }
        }, _.Widget = function() {}, _.Widget._childConstructors = [], _.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                classes: {},
                disabled: !1,
                create: null
            },
            _createWidget: function(t, e) {
                e = _(e || this.defaultElement || this)[0], this.element = _(e), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = _(), this.hoverable = _(), this.focusable = _(), this.classesElementLookup = {}, e !== this && (_.data(e, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(t) {
                        t.target === e && this.destroy()
                    }
                }), this.document = _(e.style ? e.ownerDocument : e.document || e), this.window = _(this.document[0].defaultView || this.document[0].parentWindow)), this.options = _.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: function() {
                return {}
            },
            _getCreateEventData: _.noop,
            _create: _.noop,
            _init: _.noop,
            destroy: function() {
                var i = this;
                this._destroy(), _.each(this.classesElementLookup, function(t, e) {
                    i._removeClass(e, t)
                }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
            },
            _destroy: _.noop,
            widget: function() {
                return this.element
            },
            option: function(t, e) {
                var i, n, s, o = t;
                if (0 === arguments.length) return _.widget.extend({}, this.options);
                if ("string" == typeof t)
                    if (o = {}, t = (i = t.split(".")).shift(), i.length) {
                        for (n = o[t] = _.widget.extend({}, this.options[t]), s = 0; s < i.length - 1; s++) n[i[s]] = n[i[s]] || {}, n = n[i[s]];
                        if (t = i.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];
                        n[t] = e
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                        o[t] = e
                    } return this._setOptions(o), this
            },
            _setOptions: function(t) {
                var e;
                for (e in t) this._setOption(e, t[e]);
                return this
            },
            _setOption: function(t, e) {
                return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
            },
            _setOptionClasses: function(t) {
                var e, i, n;
                for (e in t) n = this.classesElementLookup[e], t[e] !== this.options.classes[e] && n && n.length && (i = _(n.get()), this._removeClass(n, e), i.addClass(this._classes({
                    element: i,
                    keys: e,
                    classes: t,
                    add: !0
                })))
            },
            _setOptionDisabled: function(t) {
                this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
            },
            enable: function() {
                return this._setOptions({
                    disabled: !1
                })
            },
            disable: function() {
                return this._setOptions({
                    disabled: !0
                })
            },
            _classes: function(s) {
                var o = [],
                    r = this;

                function t(t, e) {
                    var i, n;
                    for (n = 0; n < t.length; n++) i = r.classesElementLookup[t[n]] || _(), i = s.add ? _(_.unique(i.get().concat(s.element.get()))) : _(i.not(s.element).get()), r.classesElementLookup[t[n]] = i, o.push(t[n]), e && s.classes[t[n]] && o.push(s.classes[t[n]])
                }
                return s = _.extend({
                    element: this.element,
                    classes: this.options.classes || {}
                }, s), this._on(s.element, {
                    remove: "_untrackClassesElement"
                }), s.keys && t(s.keys.match(/\S+/g) || [], !0), s.extra && t(s.extra.match(/\S+/g) || []), o.join(" ")
            },
            _untrackClassesElement: function(i) {
                var n = this;
                _.each(n.classesElementLookup, function(t, e) {
                    -1 !== _.inArray(i.target, e) && (n.classesElementLookup[t] = _(e.not(i.target).get()))
                })
            },
            _removeClass: function(t, e, i) {
                return this._toggleClass(t, e, i, !1)
            },
            _addClass: function(t, e, i) {
                return this._toggleClass(t, e, i, !0)
            },
            _toggleClass: function(t, e, i, n) {
                n = "boolean" == typeof n ? n : i;
                var s = "string" == typeof t || null === t,
                    o = {
                        extra: s ? e : i,
                        keys: s ? t : e,
                        element: s ? this.element : t,
                        add: n
                    };
                return o.element.toggleClass(this._classes(o), n), this
            },
            _on: function(r, a, t) {
                var l, c = this;
                "boolean" != typeof r && (t = a, a = r, r = !1), t ? (a = l = _(a), this.bindings = this.bindings.add(a)) : (t = a, a = this.element, l = this.widget()), _.each(t, function(t, e) {
                    function i() {
                        if (r || !0 !== c.options.disabled && !_(this).hasClass("ui-state-disabled")) return ("string" == typeof e ? c[e] : e).apply(c, arguments)
                    }
                    "string" != typeof e && (i.guid = e.guid = e.guid || i.guid || _.guid++);
                    var n = t.match(/^([\w:-]*)\s*(.*)$/),
                        s = n[1] + c.eventNamespace,
                        o = n[2];
                    o ? l.on(s, o, i) : a.on(s, i)
                })
            },
            _off: function(t, e) {
                e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.off(e).off(e), this.bindings = _(this.bindings.not(t).get()), this.focusable = _(this.focusable.not(t).get()), this.hoverable = _(this.hoverable.not(t).get())
            },
            _delay: function(t, e) {
                var i = this;
                return setTimeout(function() {
                    return ("string" == typeof t ? i[t] : t).apply(i, arguments)
                }, e || 0)
            },
            _hoverable: function(t) {
                this.hoverable = this.hoverable.add(t), this._on(t, {
                    mouseenter: function(t) {
                        this._addClass(_(t.currentTarget), null, "ui-state-hover")
                    },
                    mouseleave: function(t) {
                        this._removeClass(_(t.currentTarget), null, "ui-state-hover")
                    }
                })
            },
            _focusable: function(t) {
                this.focusable = this.focusable.add(t), this._on(t, {
                    focusin: function(t) {
                        this._addClass(_(t.currentTarget), null, "ui-state-focus")
                    },
                    focusout: function(t) {
                        this._removeClass(_(t.currentTarget), null, "ui-state-focus")
                    }
                })
            },
            _trigger: function(t, e, i) {
                var n, s, o = this.options[t];
                if (i = i || {}, (e = _.Event(e)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), e.target = this.element[0], s = e.originalEvent)
                    for (n in s) n in e || (e[n] = s[n]);
                return this.element.trigger(e, i), !(_.isFunction(o) && !1 === o.apply(this.element[0], [e].concat(i)) || e.isDefaultPrevented())
            }
        }, _.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(o, r) {
            _.Widget.prototype["_" + o] = function(e, t, i) {
                var n;
                "string" == typeof t && (t = {
                    effect: t
                });
                var s = t ? !0 === t || "number" == typeof t ? r : t.effect || r : o;
                "number" == typeof(t = t || {}) && (t = {
                    duration: t
                }), n = !_.isEmptyObject(t), t.complete = i, t.delay && e.delay(t.delay), n && _.effects && _.effects.effect[s] ? e[o](t) : s !== o && e[s] ? e[s](t.duration, t.easing, i) : e.queue(function(t) {
                    _(this)[o](), i && i.call(e[0]), t()
                })
            }
        });
        _.widget, _.extend(_.expr[":"], {
            data: _.expr.createPseudo ? _.expr.createPseudo(function(e) {
                return function(t) {
                    return !!_.data(t, e)
                }
            }) : function(t, e, i) {
                return !!_.data(t, i[3])
            }
        }), _.fn.scrollParent = function(t) {
            var e = this.css("position"),
                i = "absolute" === e,
                n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                s = this.parents().filter(function() {
                    var t = _(this);
                    return (!i || "static" !== t.css("position")) && n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                }).eq(0);
            return "fixed" !== e && s.length ? s : _(this[0].ownerDocument || document)
        }, _.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
        var o = !1;
        _(document).on("mouseup", function() {
            o = !1
        });
        _.widget("ui.mouse", {
            version: "1.12.1",
            options: {
                cancel: "input, textarea, button, select, option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var e = this;
                this.element.on("mousedown." + this.widgetName, function(t) {
                    return e._mouseDown(t)
                }).on("click." + this.widgetName, function(t) {
                    if (!0 === _.data(t.target, e.widgetName + ".preventClickEvent")) return _.removeData(t.target, e.widgetName + ".preventClickEvent"), t.stopImmediatePropagation(), !1
                }), this.started = !1
            },
            _mouseDestroy: function() {
                this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(t) {
                if (!o) {
                    this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                    var e = this,
                        i = 1 === t.which,
                        n = !("string" != typeof this.options.cancel || !t.target.nodeName) && _(t.target).closest(this.options.cancel).length;
                    return !(i && !n && this._mouseCapture(t)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                        e.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(t), !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === _.data(t.target, this.widgetName + ".preventClickEvent") && _.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                        return e._mouseMove(t)
                    }, this._mouseUpDelegate = function(t) {
                        return e._mouseUp(t)
                    }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), o = !0))
                }
            },
            _mouseMove: function(t) {
                if (this._mouseMoved) {
                    if (_.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button) return this._mouseUp(t);
                    if (!t.which)
                        if (t.originalEvent.altKey || t.originalEvent.ctrlKey || t.originalEvent.metaKey || t.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                        else if (!this.ignoreMissingWhich) return this._mouseUp(t)
                }
                return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t), this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
            },
            _mouseUp: function(t) {
                this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && _.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, o = !1, t.preventDefault()
            },
            _mouseDistanceMet: function(t) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function() {
                return this.mouseDelayMet
            },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() {
                return !0
            }
        }), _.ui.plugin = {
            add: function(t, e, i) {
                var n, s = _.ui[t].prototype;
                for (n in i) s.plugins[n] = s.plugins[n] || [], s.plugins[n].push([e, i[n]])
            },
            call: function(t, e, i, n) {
                var s, o = t.plugins[e];
                if (o && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                    for (s = 0; s < o.length; s++) t.options[o[s][0]] && o[s][1].apply(t.element, i)
            }
        }, _.ui.safeActiveElement = function(e) {
            var i;
            try {
                i = e.activeElement
            } catch (t) {
                i = e.body
            }
            return i || (i = e.body), i.nodeName || (i = e.body), i
        }, _.ui.safeBlur = function(t) {
            t && "body" !== t.nodeName.toLowerCase() && _(t).trigger("blur")
        };
        _.widget("ui.draggable", _.ui.mouse, {
            version: "1.12.1",
            widgetEventPrefix: "drag",
            options: {
                addClasses: !0,
                appendTo: "parent",
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: "default",
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: "both",
                snapTolerance: 20,
                stack: !1,
                zIndex: !1,
                drag: null,
                start: null,
                stop: null
            },
            _create: function() {
                "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit()
            },
            _setOption: function(t, e) {
                this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
            },
            _destroy: function() {
                (this.helper || this.element).is(".ui-draggable-dragging") ? this.destroyOnClear = !0 : (this._removeHandleClassName(), this._mouseDestroy())
            },
            _mouseCapture: function(t) {
                var e = this.options;
                return !(this.helper || e.disabled || 0 < _(t.target).closest(".ui-resizable-handle").length) && (this.handle = this._getHandle(t), !!this.handle && (this._blurActiveElement(t), this._blockFrames(!0 === e.iframeFix ? "iframe" : e.iframeFix), !0))
            },
            _blockFrames: function(t) {
                this.iframeBlocks = this.document.find(t).map(function() {
                    var t = _(this);
                    return _("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
                })
            },
            _unblockFrames: function() {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _blurActiveElement: function(t) {
                var e = _.ui.safeActiveElement(this.document[0]);
                _(t.target).closest(e).length || _.ui.safeBlur(e)
            },
            _mouseStart: function(t) {
                var e = this.options;
                return this.helper = this._createHelper(t), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), _.ui.ddmanager && (_.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = 0 < this.helper.parents().filter(function() {
                    return "fixed" === _(this).css("position")
                }).length, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt), this._setContainment(), !1 === this._trigger("start", t) ? (this._clear(), !1) : (this._cacheHelperProportions(), _.ui.ddmanager && !e.dropBehaviour && _.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), _.ui.ddmanager && _.ui.ddmanager.dragStart(this, t), !0)
            },
            _refreshOffsets: function(t) {
                this.offset = {
                    top: this.positionAbs.top - this.margins.top,
                    left: this.positionAbs.left - this.margins.left,
                    scroll: !1,
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }, this.offset.click = {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                }
            },
            _mouseDrag: function(t, e) {
                if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !e) {
                    var i = this._uiHash();
                    if (!1 === this._trigger("drag", t, i)) return this._mouseUp(new _.Event("mouseup", t)), !1;
                    this.position = i.position
                }
                return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", _.ui.ddmanager && _.ui.ddmanager.drag(this, t), !1
            },
            _mouseStop: function(t) {
                var e = this,
                    i = !1;
                return _.ui.ddmanager && !this.options.dropBehaviour && (i = _.ui.ddmanager.drop(this, t)), this.dropped && (i = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !i || "valid" === this.options.revert && i || !0 === this.options.revert || _.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? _(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    !1 !== e._trigger("stop", t) && e._clear()
                }) : !1 !== this._trigger("stop", t) && this._clear(), !1
            },
            _mouseUp: function(t) {
                return this._unblockFrames(), _.ui.ddmanager && _.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.trigger("focus"), _.ui.mouse.prototype._mouseUp.call(this, t)
            },
            cancel: function() {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new _.Event("mouseup", {
                    target: this.element[0]
                })) : this._clear(), this
            },
            _getHandle: function(t) {
                return !this.options.handle || !!_(t.target).closest(this.element.find(this.options.handle)).length
            },
            _setHandleClassName: function() {
                this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle")
            },
            _removeHandleClassName: function() {
                this._removeClass(this.handleElement, "ui-draggable-handle")
            },
            _createHelper: function(t) {
                var e = this.options,
                    i = _.isFunction(e.helper),
                    n = i ? _(e.helper.apply(this.element[0], [t])) : "clone" === e.helper ? this.element.clone().removeAttr("id") : this.element;
                return n.parents("body").length || n.appendTo("parent" === e.appendTo ? this.element[0].parentNode : e.appendTo), i && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
            },
            _setPositionRelative: function() {
                /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
            },
            _adjustOffsetFromHelper: function(t) {
                "string" == typeof t && (t = t.split(" ")), _.isArray(t) && (t = {
                    left: +t[0],
                    top: +t[1] || 0
                }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
            },
            _isRootNode: function(t) {
                return /(html|body)/i.test(t.tagName) || t === this.document[0]
            },
            _getParentOffset: function() {
                var t = this.offsetParent.offset(),
                    e = this.document[0];
                return "absolute" === this.cssPosition && this.scrollParent[0] !== e && _.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
                    top: 0,
                    left: 0
                }), {
                    top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" !== this.cssPosition) return {
                    top: 0,
                    left: 0
                };
                var t = this.element.position(),
                    e = this._isRootNode(this.scrollParent[0]);
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var t, e, i, n = this.options,
                    s = this.document[0];
                this.relativeContainer = null, n.containment ? "window" !== n.containment ? "document" !== n.containment ? n.containment.constructor !== Array ? ("parent" === n.containment && (n.containment = this.helper[0].parentNode), (i = (e = _(n.containment))[0]) && (t = /(scroll|auto)/.test(e.css("overflow")), this.containment = [(parseInt(e.css("borderLeftWidth"), 10) || 0) + (parseInt(e.css("paddingLeft"), 10) || 0), (parseInt(e.css("borderTopWidth"), 10) || 0) + (parseInt(e.css("paddingTop"), 10) || 0), (t ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(e.css("borderRightWidth"), 10) || 0) - (parseInt(e.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(e.css("borderBottomWidth"), 10) || 0) - (parseInt(e.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = e)) : this.containment = n.containment : this.containment = [0, 0, _(s).width() - this.helperProportions.width - this.margins.left, (_(s).height() || s.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : this.containment = [_(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, _(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, _(window).scrollLeft() + _(window).width() - this.helperProportions.width - this.margins.left, _(window).scrollTop() + (_(window).height() || s.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : this.containment = null
            },
            _convertPositionTo: function(t, e) {
                e || (e = this.position);
                var i = "absolute" === t ? 1 : -1,
                    n = this._isRootNode(this.scrollParent[0]);
                return {
                    top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top) * i,
                    left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left) * i
                }
            },
            _generatePosition: function(t, e) {
                var i, n, s, o, r = this.options,
                    a = this._isRootNode(this.scrollParent[0]),
                    l = t.pageX,
                    c = t.pageY;
                return a && this.offset.scroll || (this.offset.scroll = {
                    top: this.scrollParent.scrollTop(),
                    left: this.scrollParent.scrollLeft()
                }), e && (this.containment && (this.relativeContainer ? (n = this.relativeContainer.offset(), i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (c = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (c = i[3] + this.offset.click.top)), r.grid && (s = r.grid[1] ? this.originalPageY + Math.round((c - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, c = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s : s - this.offset.click.top >= i[1] ? s - r.grid[1] : s + r.grid[1] : s, o = r.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - r.grid[0] : o + r.grid[0] : o), "y" === r.axis && (l = this.originalPageX), "x" === r.axis && (c = this.originalPageY)), {
                    top: c - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : a ? 0 : this.offset.scroll.top),
                    left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : a ? 0 : this.offset.scroll.left)
                }
            },
            _clear: function() {
                this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
            },
            _trigger: function(t, e, i) {
                return i = i || this._uiHash(), _.ui.plugin.call(this, t, [e, i, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), i.offset = this.positionAbs), _.Widget.prototype._trigger.call(this, t, e, i)
            },
            plugins: {},
            _uiHash: function() {
                return {
                    helper: this.helper,
                    position: this.position,
                    originalPosition: this.originalPosition,
                    offset: this.positionAbs
                }
            }
        }), _.ui.plugin.add("draggable", "connectToSortable", {
            start: function(e, t, i) {
                var n = _.extend({}, t, {
                    item: i.element
                });
                i.sortables = [], _(i.options.connectToSortable).each(function() {
                    var t = _(this).sortable("instance");
                    t && !t.options.disabled && (i.sortables.push(t), t.refreshPositions(), t._trigger("activate", e, n))
                })
            },
            stop: function(e, t, i) {
                var n = _.extend({}, t, {
                    item: i.element
                });
                i.cancelHelperRemoval = !1, _.each(i.sortables, function() {
                    var t = this;
                    t.isOver ? (t.isOver = 0, i.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
                        position: t.placeholder.css("position"),
                        top: t.placeholder.css("top"),
                        left: t.placeholder.css("left")
                    }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, n))
                })
            },
            drag: function(i, n, s) {
                _.each(s.sortables, function() {
                    var t = !1,
                        e = this;
                    e.positionAbs = s.positionAbs, e.helperProportions = s.helperProportions, e.offset.click = s.offset.click, e._intersectsWith(e.containerCache) && (t = !0, _.each(s.sortables, function() {
                        return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== e && this._intersectsWith(this.containerCache) && _.contains(e.element[0], this.element[0]) && (t = !1), t
                    })), t ? (e.isOver || (e.isOver = 1, s._parent = n.helper.parent(), e.currentItem = n.helper.appendTo(e.element).data("ui-sortable-item", !0), e.options._helper = e.options.helper, e.options.helper = function() {
                        return n.helper[0]
                    }, i.target = e.currentItem[0], e._mouseCapture(i, !0), e._mouseStart(i, !0, !0), e.offset.click.top = s.offset.click.top, e.offset.click.left = s.offset.click.left, e.offset.parent.left -= s.offset.parent.left - e.offset.parent.left, e.offset.parent.top -= s.offset.parent.top - e.offset.parent.top, s._trigger("toSortable", i), s.dropped = e.element, _.each(s.sortables, function() {
                        this.refreshPositions()
                    }), s.currentItem = s.element, e.fromOutside = s), e.currentItem && (e._mouseDrag(i), n.position = e.position)) : e.isOver && (e.isOver = 0, e.cancelHelperRemoval = !0, e.options._revert = e.options.revert, e.options.revert = !1, e._trigger("out", i, e._uiHash(e)), e._mouseStop(i, !0), e.options.revert = e.options._revert, e.options.helper = e.options._helper, e.placeholder && e.placeholder.remove(), n.helper.appendTo(s._parent), s._refreshOffsets(i), n.position = s._generatePosition(i, !0), s._trigger("fromSortable", i), s.dropped = !1, _.each(s.sortables, function() {
                        this.refreshPositions()
                    }))
                })
            }
        }), _.ui.plugin.add("draggable", "cursor", {
            start: function(t, e, i) {
                var n = _("body"),
                    s = i.options;
                n.css("cursor") && (s._cursor = n.css("cursor")), n.css("cursor", s.cursor)
            },
            stop: function(t, e, i) {
                var n = i.options;
                n._cursor && _("body").css("cursor", n._cursor)
            }
        }), _.ui.plugin.add("draggable", "opacity", {
            start: function(t, e, i) {
                var n = _(e.helper),
                    s = i.options;
                n.css("opacity") && (s._opacity = n.css("opacity")), n.css("opacity", s.opacity)
            },
            stop: function(t, e, i) {
                var n = i.options;
                n._opacity && _(e.helper).css("opacity", n._opacity)
            }
        }), _.ui.plugin.add("draggable", "scroll", {
            start: function(t, e, i) {
                i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
            },
            drag: function(t, e, i) {
                var n = i.options,
                    s = !1,
                    o = i.scrollParentNotHidden[0],
                    r = i.document[0];
                o !== r && "HTML" !== o.tagName ? (n.axis && "x" === n.axis || (i.overflowOffset.top + o.offsetHeight - t.pageY < n.scrollSensitivity ? o.scrollTop = s = o.scrollTop + n.scrollSpeed : t.pageY - i.overflowOffset.top < n.scrollSensitivity && (o.scrollTop = s = o.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (i.overflowOffset.left + o.offsetWidth - t.pageX < n.scrollSensitivity ? o.scrollLeft = s = o.scrollLeft + n.scrollSpeed : t.pageX - i.overflowOffset.left < n.scrollSensitivity && (o.scrollLeft = s = o.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (t.pageY - _(r).scrollTop() < n.scrollSensitivity ? s = _(r).scrollTop(_(r).scrollTop() - n.scrollSpeed) : _(window).height() - (t.pageY - _(r).scrollTop()) < n.scrollSensitivity && (s = _(r).scrollTop(_(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (t.pageX - _(r).scrollLeft() < n.scrollSensitivity ? s = _(r).scrollLeft(_(r).scrollLeft() - n.scrollSpeed) : _(window).width() - (t.pageX - _(r).scrollLeft()) < n.scrollSensitivity && (s = _(r).scrollLeft(_(r).scrollLeft() + n.scrollSpeed)))), !1 !== s && _.ui.ddmanager && !n.dropBehaviour && _.ui.ddmanager.prepareOffsets(i, t)
            }
        }), _.ui.plugin.add("draggable", "snap", {
            start: function(t, e, i) {
                var n = i.options;
                i.snapElements = [], _(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
                    var t = _(this),
                        e = t.offset();
                    this !== i.element[0] && i.snapElements.push({
                        item: this,
                        width: t.outerWidth(),
                        height: t.outerHeight(),
                        top: e.top,
                        left: e.left
                    })
                })
            },
            drag: function(t, e, i) {
                var n, s, o, r, a, l, c, u, d, h, f = i.options,
                    p = f.snapTolerance,
                    m = e.offset.left,
                    g = m + i.helperProportions.width,
                    v = e.offset.top,
                    y = v + i.helperProportions.height;
                for (d = i.snapElements.length - 1; 0 <= d; d--) l = (a = i.snapElements[d].left - i.margins.left) + i.snapElements[d].width, u = (c = i.snapElements[d].top - i.margins.top) + i.snapElements[d].height, g < a - p || l + p < m || y < c - p || u + p < v || !_.contains(i.snapElements[d].item.ownerDocument, i.snapElements[d].item) ? (i.snapElements[d].snapping && i.options.snap.release && i.options.snap.release.call(i.element, t, _.extend(i._uiHash(), {
                    snapItem: i.snapElements[d].item
                })), i.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (n = Math.abs(c - y) <= p, s = Math.abs(u - v) <= p, o = Math.abs(a - g) <= p, r = Math.abs(l - m) <= p, n && (e.position.top = i._convertPositionTo("relative", {
                    top: c - i.helperProportions.height,
                    left: 0
                }).top), s && (e.position.top = i._convertPositionTo("relative", {
                    top: u,
                    left: 0
                }).top), o && (e.position.left = i._convertPositionTo("relative", {
                    top: 0,
                    left: a - i.helperProportions.width
                }).left), r && (e.position.left = i._convertPositionTo("relative", {
                    top: 0,
                    left: l
                }).left)), h = n || s || o || r, "outer" !== f.snapMode && (n = Math.abs(c - v) <= p, s = Math.abs(u - y) <= p, o = Math.abs(a - m) <= p, r = Math.abs(l - g) <= p, n && (e.position.top = i._convertPositionTo("relative", {
                    top: c,
                    left: 0
                }).top), s && (e.position.top = i._convertPositionTo("relative", {
                    top: u - i.helperProportions.height,
                    left: 0
                }).top), o && (e.position.left = i._convertPositionTo("relative", {
                    top: 0,
                    left: a
                }).left), r && (e.position.left = i._convertPositionTo("relative", {
                    top: 0,
                    left: l - i.helperProportions.width
                }).left)), !i.snapElements[d].snapping && (n || s || o || r || h) && i.options.snap.snap && i.options.snap.snap.call(i.element, t, _.extend(i._uiHash(), {
                    snapItem: i.snapElements[d].item
                })), i.snapElements[d].snapping = n || s || o || r || h)
            }
        }), _.ui.plugin.add("draggable", "stack", {
            start: function(t, e, i) {
                var n, s = i.options,
                    o = _.makeArray(_(s.stack)).sort(function(t, e) {
                        return (parseInt(_(t).css("zIndex"), 10) || 0) - (parseInt(_(e).css("zIndex"), 10) || 0)
                    });
                o.length && (n = parseInt(_(o[0]).css("zIndex"), 10) || 0, _(o).each(function(t) {
                    _(this).css("zIndex", n + t)
                }), this.css("zIndex", n + o.length))
            }
        }), _.ui.plugin.add("draggable", "zIndex", {
            start: function(t, e, i) {
                var n = _(e.helper),
                    s = i.options;
                n.css("zIndex") && (s._zIndex = n.css("zIndex")), n.css("zIndex", s.zIndex)
            },
            stop: function(t, e, i) {
                var n = i.options;
                n._zIndex && _(e.helper).css("zIndex", n._zIndex)
            }
        });
        _.ui.draggable
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], function(t) {
            return e(t)
        }) : "object" == typeof module && "object" == typeof module.exports ? module.exports = e(require("jquery")) : e(window.jQuery)
    }(function(t) {
        "use strict";

        function e(t) {
            void 0 === t && (t = window.navigator.userAgent), t = t.toLowerCase();
            var e = /(edge)\/([\w.]+)/.exec(t) || /(opr)[\/]([\w.]+)/.exec(t) || /(chrome)[ \/]([\w.]+)/.exec(t) || /(iemobile)[\/]([\w.]+)/.exec(t) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || 0 <= t.indexOf("trident") && /(rv)(?::| )([\w.]+)/.exec(t) || t.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [],
                i = /(ipad)/.exec(t) || /(ipod)/.exec(t) || /(windows phone)/.exec(t) || /(iphone)/.exec(t) || /(kindle)/.exec(t) || /(silk)/.exec(t) || /(android)/.exec(t) || /(win)/.exec(t) || /(mac)/.exec(t) || /(linux)/.exec(t) || /(cros)/.exec(t) || /(playbook)/.exec(t) || /(bb)/.exec(t) || /(blackberry)/.exec(t) || [],
                n = {},
                s = {
                    browser: e[5] || e[3] || e[1] || "",
                    version: e[2] || e[4] || "0",
                    versionNumber: e[4] || e[2] || "0",
                    platform: i[0] || ""
                };
            if (s.browser && (n[s.browser] = !0, n.version = s.version, n.versionNumber = parseInt(s.versionNumber, 10)), s.platform && (n[s.platform] = !0), (n.android || n.bb || n.blackberry || n.ipad || n.iphone || n.ipod || n.kindle || n.playbook || n.silk || n["windows phone"]) && (n.mobile = !0), (n.cros || n.mac || n.linux || n.win) && (n.desktop = !0), (n.chrome || n.opr || n.safari) && (n.webkit = !0), n.rv || n.iemobile) {
                s.browser = "msie", n.msie = !0
            }
            if (n.edge) {
                delete n.edge;
                s.browser = "msedge", n.msedge = !0
            }
            if (n.safari && n.blackberry) {
                var o = "blackberry";
                n[s.browser = o] = !0
            }
            if (n.safari && n.playbook) {
                var r = "playbook";
                n[s.browser = r] = !0
            }
            if (n.bb) {
                var a = "blackberry";
                n[s.browser = a] = !0
            }
            if (n.opr) {
                s.browser = "opera", n.opera = !0
            }
            if (n.safari && n.android) {
                var l = "android";
                n[s.browser = l] = !0
            }
            if (n.safari && n.kindle) {
                s.browser = "kindle", n.kindle = !0
            }
            if (n.safari && n.silk) {
                s.browser = "silk", n.silk = !0
            }
            return n.name = s.browser, n.platform = s.platform, n
        }
        return window.jQBrowser = e(window.navigator.userAgent), window.jQBrowser.uaMatch = e, t && (t.browser = window.jQBrowser), window.jQBrowser
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t : t(jQuery, window, document)
    }(function(I) {
        var F, f, N, n, s, a, o, g, H, w, p, c, l, u, d, h, m, v, y, _, b, x, P, T, S, k, C, $, z, r, M, D, O, A, Y, E, L, R, j, B, W, q, U, V, X, G, Z, Q, J, K, tt, et, it, nt, st, ot, rt, t, e, i;
        t = "function" == typeof define && define.amd, e = "undefined" != typeof module && module.exports, i = "https:" == document.location.protocol ? "https:" : "http:", t || (e ? require("jquery-mousewheel")(I) : I.event.special.mousewheel || I("head").append(decodeURI("%3Cscript src=" + i + "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E"))), f = "mCustomScrollbar", N = "mCS", n = ".mCustomScrollbar", s = {
            setTop: 0,
            setLeft: 0,
            axis: "y",
            scrollbarPosition: "inside",
            scrollInertia: 950,
            autoDraggerLength: !0,
            alwaysShowScrollbar: 0,
            snapOffset: 0,
            mouseWheel: {
                enable: !0,
                scrollAmount: "auto",
                axis: "y",
                deltaFactor: "auto",
                disableOver: ["select", "option", "keygen", "datalist", "textarea"]
            },
            scrollButtons: {
                scrollType: "stepless",
                scrollAmount: "auto"
            },
            keyboard: {
                enable: !0,
                scrollType: "stepless",
                scrollAmount: "auto"
            },
            contentTouchScroll: 25,
            documentTouchScroll: !0,
            advanced: {
                autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                updateOnContentResize: !0,
                updateOnImageLoad: "auto",
                autoUpdateTimeout: 60
            },
            theme: "light",
            callbacks: {
                onTotalScrollOffset: 0,
                onTotalScrollBackOffset: 0,
                alwaysTriggerOffsets: !0
            }
        }, a = 0, o = {}, g = window.attachEvent && !window.addEventListener ? 1 : 0, H = !1, w = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"], p = {
            init: function(r) {
                var r = I.extend(!0, {}, s, r),
                    t = c.call(this);
                if (r.live) {
                    var e = r.liveSelector || this.selector || n,
                        i = I(e);
                    if ("off" === r.live) return void u(e);
                    o[e] = setTimeout(function() {
                        i.mCustomScrollbar(r), "once" === r.live && i.length && u(e)
                    }, 500)
                } else u(e);
                return r.setWidth = r.set_width ? r.set_width : r.setWidth, r.setHeight = r.set_height ? r.set_height : r.setHeight, r.axis = r.horizontalScroll ? "x" : d(r.axis), r.scrollInertia = 0 < r.scrollInertia && r.scrollInertia < 17 ? 17 : r.scrollInertia, "object" != typeof r.mouseWheel && 1 == r.mouseWheel && (r.mouseWheel = {
                    enable: !0,
                    scrollAmount: "auto",
                    axis: "y",
                    preventDefault: !1,
                    deltaFactor: "auto",
                    normalizeDelta: !1,
                    invert: !1
                }), r.mouseWheel.scrollAmount = r.mouseWheelPixels ? r.mouseWheelPixels : r.mouseWheel.scrollAmount, r.mouseWheel.normalizeDelta = r.advanced.normalizeMouseWheelDelta ? r.advanced.normalizeMouseWheelDelta : r.mouseWheel.normalizeDelta, r.scrollButtons.scrollType = h(r.scrollButtons.scrollType), l(r), I(t).each(function() {
                    var t = I(this);
                    if (!t.data(N)) {
                        t.data(N, {
                            idx: ++a,
                            opt: r,
                            scrollRatio: {
                                y: null,
                                x: null
                            },
                            overflowed: null,
                            contentReset: {
                                y: null,
                                x: null
                            },
                            bindEvents: !1,
                            tweenRunning: !1,
                            sequential: {},
                            langDir: t.css("direction"),
                            cbOffsets: null,
                            trigger: null,
                            poll: {
                                size: {
                                    o: 0,
                                    n: 0
                                },
                                img: {
                                    o: 0,
                                    n: 0
                                },
                                change: {
                                    o: 0,
                                    n: 0
                                }
                            }
                        });
                        var e = t.data(N),
                            i = e.opt,
                            n = t.data("mcs-axis"),
                            s = t.data("mcs-scrollbar-position"),
                            o = t.data("mcs-theme");
                        n && (i.axis = n), s && (i.scrollbarPosition = s), o && (i.theme = o, l(i)), m.call(this), e && i.callbacks.onCreate && "function" == typeof i.callbacks.onCreate && i.callbacks.onCreate.call(this), I("#mCSB_" + e.idx + "_container img:not(." + w[2] + ")").addClass(w[2]), p.update.call(null, t)
                    }
                })
            },
            update: function(t, a) {
                var e = t || c.call(this);
                return I(e).each(function() {
                    var t = I(this);
                    if (t.data(N)) {
                        var e = t.data(N),
                            i = e.opt,
                            n = I("#mCSB_" + e.idx + "_container"),
                            s = I("#mCSB_" + e.idx),
                            o = [I("#mCSB_" + e.idx + "_dragger_vertical"), I("#mCSB_" + e.idx + "_dragger_horizontal")];
                        if (!n.length) return;
                        e.tweenRunning && Z(t), a && e && i.callbacks.onBeforeUpdate && "function" == typeof i.callbacks.onBeforeUpdate && i.callbacks.onBeforeUpdate.call(this), t.hasClass(w[3]) && t.removeClass(w[3]), t.hasClass(w[4]) && t.removeClass(w[4]), s.css("max-height", "none"), s.height() !== t.height() && s.css("max-height", t.height()), y.call(this), "y" === i.axis || i.advanced.autoExpandHorizontalScroll || n.css("width", v(n)), e.overflowed = T.call(this), $.call(this), i.autoDraggerLength && b.call(this), x.call(this), k.call(this);
                        var r = [Math.abs(n[0].offsetTop), Math.abs(n[0].offsetLeft)];
                        "x" !== i.axis && (e.overflowed[0] ? o[0].height() > o[0].parent().height() ? S.call(this) : (Q(t, r[0].toString(), {
                            dir: "y",
                            dur: 0,
                            overwrite: "none"
                        }), e.contentReset.y = null) : (S.call(this), "y" === i.axis ? C.call(this) : "yx" === i.axis && e.overflowed[1] && Q(t, r[1].toString(), {
                            dir: "x",
                            dur: 0,
                            overwrite: "none"
                        }))), "y" !== i.axis && (e.overflowed[1] ? o[1].width() > o[1].parent().width() ? S.call(this) : (Q(t, r[1].toString(), {
                            dir: "x",
                            dur: 0,
                            overwrite: "none"
                        }), e.contentReset.x = null) : (S.call(this), "x" === i.axis ? C.call(this) : "yx" === i.axis && e.overflowed[0] && Q(t, r[0].toString(), {
                            dir: "y",
                            dur: 0,
                            overwrite: "none"
                        }))), a && e && (2 === a && i.callbacks.onImageLoad && "function" == typeof i.callbacks.onImageLoad ? i.callbacks.onImageLoad.call(this) : 3 === a && i.callbacks.onSelectorChange && "function" == typeof i.callbacks.onSelectorChange ? i.callbacks.onSelectorChange.call(this) : i.callbacks.onUpdate && "function" == typeof i.callbacks.onUpdate && i.callbacks.onUpdate.call(this)), G.call(this)
                    }
                })
            },
            scrollTo: function(a, l) {
                if (void 0 !== a && null != a) {
                    var t = c.call(this);
                    return I(t).each(function() {
                        var t = I(this);
                        if (t.data(N)) {
                            var e = t.data(N),
                                i = e.opt,
                                n = {
                                    trigger: "external",
                                    scrollInertia: i.scrollInertia,
                                    scrollEasing: "mcsEaseInOut",
                                    moveDragger: !1,
                                    timeout: 60,
                                    callbacks: !0,
                                    onStart: !0,
                                    onUpdate: !0,
                                    onComplete: !0
                                },
                                s = I.extend(!0, {}, n, l),
                                o = V.call(this, a),
                                r = 0 < s.scrollInertia && s.scrollInertia < 17 ? 17 : s.scrollInertia;
                            o[0] = X.call(this, o[0], "y"), o[1] = X.call(this, o[1], "x"), s.moveDragger && (o[0] *= e.scrollRatio.y, o[1] *= e.scrollRatio.x), s.dur = rt() ? 0 : r, setTimeout(function() {
                                null !== o[0] && void 0 !== o[0] && "x" !== i.axis && e.overflowed[0] && (s.dir = "y", s.overwrite = "all", Q(t, o[0].toString(), s)), null !== o[1] && void 0 !== o[1] && "y" !== i.axis && e.overflowed[1] && (s.dir = "x", s.overwrite = "none", Q(t, o[1].toString(), s))
                            }, s.timeout)
                        }
                    })
                }
            },
            stop: function() {
                var t = c.call(this);
                return I(t).each(function() {
                    var t = I(this);
                    t.data(N) && Z(t)
                })
            },
            disable: function(e) {
                var t = c.call(this);
                return I(t).each(function() {
                    var t = I(this);
                    t.data(N) && (t.data(N), G.call(this, "remove"), C.call(this), e && S.call(this), $.call(this, !0), t.addClass(w[3]))
                })
            },
            destroy: function() {
                var r = c.call(this);
                return I(r).each(function() {
                    var t = I(this);
                    if (t.data(N)) {
                        var e = t.data(N),
                            i = e.opt,
                            n = I("#mCSB_" + e.idx),
                            s = I("#mCSB_" + e.idx + "_container"),
                            o = I(".mCSB_" + e.idx + "_scrollbar");
                        i.live && u(i.liveSelector || I(r).selector), G.call(this, "remove"), C.call(this), S.call(this), t.removeData(N), et(this, "mcs"), o.remove(), s.find("img." + w[2]).removeClass(w[2]), n.replaceWith(s.contents()), t.removeClass(f + " _" + N + "_" + e.idx + " " + w[6] + " " + w[7] + " " + w[5] + " " + w[3]).addClass(w[4])
                    }
                })
            }
        }, c = function() {
            return "object" != typeof I(this) || I(this).length < 1 ? n : this
        }, l = function(t) {
            t.autoDraggerLength = !(-1 < I.inArray(t.theme, ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"])) && t.autoDraggerLength, t.autoExpandScrollbar = !(-1 < I.inArray(t.theme, ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"])) && t.autoExpandScrollbar, t.scrollButtons.enable = !(-1 < I.inArray(t.theme, ["minimal", "minimal-dark"])) && t.scrollButtons.enable, t.autoHideScrollbar = -1 < I.inArray(t.theme, ["minimal", "minimal-dark"]) || t.autoHideScrollbar, t.scrollbarPosition = -1 < I.inArray(t.theme, ["minimal", "minimal-dark"]) ? "outside" : t.scrollbarPosition
        }, u = function(t) {
            o[t] && (clearTimeout(o[t]), et(o, t))
        }, d = function(t) {
            return "yx" === t || "xy" === t || "auto" === t ? "yx" : "x" === t || "horizontal" === t ? "x" : "y"
        }, h = function(t) {
            return "stepped" === t || "pixels" === t || "step" === t || "click" === t ? "stepped" : "stepless"
        }, m = function() {
            var t = I(this),
                e = t.data(N),
                i = e.opt,
                n = i.autoExpandScrollbar ? " " + w[1] + "_expand" : "",
                s = ["<div id='mCSB_" + e.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + e.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_vertical" + n + "'><div class='" + w[12] + "'><div id='mCSB_" + e.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + e.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + e.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_horizontal" + n + "'><div class='" + w[12] + "'><div id='mCSB_" + e.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                o = "yx" === i.axis ? "mCSB_vertical_horizontal" : "x" === i.axis ? "mCSB_horizontal" : "mCSB_vertical",
                r = "yx" === i.axis ? s[0] + s[1] : "x" === i.axis ? s[1] : s[0],
                a = "yx" === i.axis ? "<div id='mCSB_" + e.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                l = i.autoHideScrollbar ? " " + w[6] : "",
                c = "x" !== i.axis && "rtl" === e.langDir ? " " + w[7] : "";
            i.setWidth && t.css("width", i.setWidth), i.setHeight && t.css("height", i.setHeight), i.setLeft = "y" !== i.axis && "rtl" === e.langDir ? "989999px" : i.setLeft, t.addClass(f + " _" + N + "_" + e.idx + l + c).wrapInner("<div id='mCSB_" + e.idx + "' class='mCustomScrollBox mCS-" + i.theme + " " + o + "'><div id='mCSB_" + e.idx + "_container' class='mCSB_container' style='position:relative; top:" + i.setTop + "; left:" + i.setLeft + ";' dir='" + e.langDir + "' /></div>");
            var u = I("#mCSB_" + e.idx),
                d = I("#mCSB_" + e.idx + "_container");
            "y" === i.axis || i.advanced.autoExpandHorizontalScroll || d.css("width", v(d)), "outside" === i.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"), t.css("overflow", "visible"), u.addClass("mCSB_outside").after(r)) : (u.addClass("mCSB_inside").append(r), d.wrap(a)), _.call(this);
            var h = [I("#mCSB_" + e.idx + "_dragger_vertical"), I("#mCSB_" + e.idx + "_dragger_horizontal")];
            h[0].css("min-height", h[0].height()), h[1].css("min-width", h[1].width())
        }, v = function(t) {
            var e = [t[0].scrollWidth, Math.max.apply(Math, t.children().map(function() {
                    return I(this).outerWidth(!0)
                }).get())],
                i = t.parent().width();
            return i < e[0] ? e[0] : i < e[1] ? e[1] : "100%"
        }, y = function() {
            var t = I(this),
                e = t.data(N),
                i = e.opt,
                n = I("#mCSB_" + e.idx + "_container");
            if (i.advanced.autoExpandHorizontalScroll && "y" !== i.axis) {
                n.css({
                    width: "auto",
                    "min-width": 0,
                    "overflow-x": "scroll"
                });
                var s = Math.ceil(n[0].scrollWidth);
                3 === i.advanced.autoExpandHorizontalScroll || 2 !== i.advanced.autoExpandHorizontalScroll && s > n.parent().width() ? n.css({
                    width: s,
                    "min-width": "100%",
                    "overflow-x": "inherit"
                }) : n.css({
                    "overflow-x": "inherit",
                    position: "absolute"
                }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                    width: Math.ceil(n[0].getBoundingClientRect().right + .4) - Math.floor(n[0].getBoundingClientRect().left),
                    "min-width": "100%",
                    position: "relative"
                }).unwrap()
            }
        }, _ = function() {
            var t = I(this),
                e = t.data(N),
                i = e.opt,
                n = I(".mCSB_" + e.idx + "_scrollbar:first"),
                s = st(i.scrollButtons.tabindex) ? "tabindex='" + i.scrollButtons.tabindex + "'" : "",
                o = ["<a href='#' class='" + w[13] + "' " + s + " />", "<a href='#' class='" + w[14] + "' " + s + " />", "<a href='#' class='" + w[15] + "' " + s + " />", "<a href='#' class='" + w[16] + "' " + s + " />"],
                r = ["x" === i.axis ? o[2] : o[0], "x" === i.axis ? o[3] : o[1], o[2], o[3]];
            i.scrollButtons.enable && n.prepend(r[0]).append(r[1]).next(".mCSB_scrollTools").prepend(r[2]).append(r[3])
        }, b = function() {
            var t = I(this),
                e = t.data(N),
                i = I("#mCSB_" + e.idx),
                n = I("#mCSB_" + e.idx + "_container"),
                s = [I("#mCSB_" + e.idx + "_dragger_vertical"), I("#mCSB_" + e.idx + "_dragger_horizontal")],
                o = [i.height() / n.outerHeight(!1), i.width() / n.outerWidth(!1)],
                r = [parseInt(s[0].css("min-height")), Math.round(o[0] * s[0].parent().height()), parseInt(s[1].css("min-width")), Math.round(o[1] * s[1].parent().width())],
                a = g && r[1] < r[0] ? r[0] : r[1],
                l = g && r[3] < r[2] ? r[2] : r[3];
            s[0].css({
                height: a,
                "max-height": s[0].parent().height() - 10
            }).find(".mCSB_dragger_bar").css({
                "line-height": r[0] + "px"
            }), s[1].css({
                width: l,
                "max-width": s[1].parent().width() - 10
            })
        }, x = function() {
            var t = I(this),
                e = t.data(N),
                i = I("#mCSB_" + e.idx),
                n = I("#mCSB_" + e.idx + "_container"),
                s = [I("#mCSB_" + e.idx + "_dragger_vertical"), I("#mCSB_" + e.idx + "_dragger_horizontal")],
                o = [n.outerHeight(!1) - i.height(), n.outerWidth(!1) - i.width()],
                r = [o[0] / (s[0].parent().height() - s[0].height()), o[1] / (s[1].parent().width() - s[1].width())];
            e.scrollRatio = {
                y: r[0],
                x: r[1]
            }
        }, P = function(t, e, i) {
            var n = i ? w[0] + "_expanded" : "",
                s = t.closest(".mCSB_scrollTools");
            "active" === e ? (t.toggleClass(w[0] + " " + n), s.toggleClass(w[1]), t[0]._draggable = t[0]._draggable ? 0 : 1) : t[0]._draggable || ("hide" === e ? (t.removeClass(w[0]), s.removeClass(w[1])) : (t.addClass(w[0]), s.addClass(w[1])))
        }, T = function() {
            var t = I(this),
                e = t.data(N),
                i = I("#mCSB_" + e.idx),
                n = I("#mCSB_" + e.idx + "_container"),
                s = null == e.overflowed ? n.height() : n.outerHeight(!1),
                o = null == e.overflowed ? n.width() : n.outerWidth(!1),
                r = n[0].scrollHeight,
                a = n[0].scrollWidth;
            return s < r && (s = r), o < a && (o = a), [s > i.height(), o > i.width()]
        }, S = function() {
            var t = I(this),
                e = t.data(N),
                i = e.opt,
                n = I("#mCSB_" + e.idx),
                s = I("#mCSB_" + e.idx + "_container"),
                o = [I("#mCSB_" + e.idx + "_dragger_vertical"), I("#mCSB_" + e.idx + "_dragger_horizontal")];
            if (Z(t), ("x" !== i.axis && !e.overflowed[0] || "y" === i.axis && e.overflowed[0]) && (o[0].add(s).css("top", 0), Q(t, "_resetY")), "y" !== i.axis && !e.overflowed[1] || "x" === i.axis && e.overflowed[1]) {
                var r = dx = 0;
                "rtl" === e.langDir && (r = n.width() - s.outerWidth(!1), dx = Math.abs(r / e.scrollRatio.x)), s.css("left", r), o[1].css("left", dx), Q(t, "_resetX")
            }
        }, k = function() {
            var e = I(this),
                t = e.data(N),
                i = t.opt;
            if (!t.bindEvents) {
                var n;
                if (r.call(this), i.contentTouchScroll && M.call(this), D.call(this), i.mouseWheel.enable) ! function t() {
                    n = setTimeout(function() {
                        I.event.special.mousewheel ? (clearTimeout(n), O.call(e[0])) : t()
                    }, 100)
                }();
                R.call(this), B.call(this), i.advanced.autoScrollOnFocus && j.call(this), i.scrollButtons.enable && W.call(this), i.keyboard.enable && q.call(this), t.bindEvents = !0
            }
        }, C = function() {
            var t = I(this),
                e = t.data(N),
                i = e.opt,
                n = "mCS_" + e.idx,
                s = ".mCSB_" + e.idx + "_scrollbar",
                o = I("#mCSB_" + e.idx + ",#mCSB_" + e.idx + "_container,#mCSB_" + e.idx + "_container_wrapper," + s + " ." + w[12] + ",#mCSB_" + e.idx + "_dragger_vertical,#mCSB_" + e.idx + "_dragger_horizontal," + s + ">a"),
                r = I("#mCSB_" + e.idx + "_container");
            i.advanced.releaseDraggableSelectors && o.add(I(i.advanced.releaseDraggableSelectors)), i.advanced.extraDraggableSelectors && o.add(I(i.advanced.extraDraggableSelectors)), e.bindEvents && (I(document).add(I(!Y() || top.document)).unbind("." + n), o.each(function() {
                I(this).unbind("." + n)
            }), clearTimeout(t[0]._focusTimeout), et(t[0], "_focusTimeout"), clearTimeout(e.sequential.step), et(e.sequential, "step"), clearTimeout(r[0].onCompleteTimeout), et(r[0], "onCompleteTimeout"), e.bindEvents = !1)
        }, $ = function(t) {
            var e = I(this),
                i = e.data(N),
                n = i.opt,
                s = I("#mCSB_" + i.idx + "_container_wrapper"),
                o = s.length ? s : I("#mCSB_" + i.idx + "_container"),
                r = [I("#mCSB_" + i.idx + "_scrollbar_vertical"), I("#mCSB_" + i.idx + "_scrollbar_horizontal")],
                a = [r[0].find(".mCSB_dragger"), r[1].find(".mCSB_dragger")];
            "x" !== n.axis && (i.overflowed[0] && !t ? (r[0].add(a[0]).add(r[0].children("a")).css("display", "block"), o.removeClass(w[8] + " " + w[10])) : (n.alwaysShowScrollbar ? (2 !== n.alwaysShowScrollbar && a[0].css("display", "none"), o.removeClass(w[10])) : (r[0].css("display", "none"), o.addClass(w[10])), o.addClass(w[8]))), "y" !== n.axis && (i.overflowed[1] && !t ? (r[1].add(a[1]).add(r[1].children("a")).css("display", "block"), o.removeClass(w[9] + " " + w[11])) : (n.alwaysShowScrollbar ? (2 !== n.alwaysShowScrollbar && a[1].css("display", "none"), o.removeClass(w[11])) : (r[1].css("display", "none"), o.addClass(w[11])), o.addClass(w[9]))), i.overflowed[0] || i.overflowed[1] ? e.removeClass(w[5]) : e.addClass(w[5])
        }, z = function(t) {
            var e = t.type,
                i = t.target.ownerDocument !== document && null !== frameElement ? [I(frameElement).offset().top, I(frameElement).offset().left] : null,
                n = Y() && t.target.ownerDocument !== top.document && null !== frameElement ? [I(t.view.frameElement).offset().top, I(t.view.frameElement).offset().left] : [0, 0];
            switch (e) {
                case "pointerdown":
                case "MSPointerDown":
                case "pointermove":
                case "MSPointerMove":
                case "pointerup":
                case "MSPointerUp":
                    return i ? [t.originalEvent.pageY - i[0] + n[0], t.originalEvent.pageX - i[1] + n[1], !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];
                case "touchstart":
                case "touchmove":
                case "touchend":
                    var s = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0],
                        o = t.originalEvent.touches.length || t.originalEvent.changedTouches.length;
                    return t.target.ownerDocument !== document ? [s.screenY, s.screenX, 1 < o] : [s.pageY, s.pageX, 1 < o];
                default:
                    return i ? [t.pageY - i[0] + n[0], t.pageX - i[1] + n[1], !1] : [t.pageY, t.pageX, !1]
            }
        }, r = function() {
            var r, a, l, c = I(this),
                u = c.data(N),
                d = u.opt,
                t = "mCS_" + u.idx,
                h = ["mCSB_" + u.idx + "_dragger_vertical", "mCSB_" + u.idx + "_dragger_horizontal"],
                f = I("#mCSB_" + u.idx + "_container"),
                e = I("#" + h[0] + ",#" + h[1]),
                i = d.advanced.releaseDraggableSelectors ? e.add(I(d.advanced.releaseDraggableSelectors)) : e,
                n = d.advanced.extraDraggableSelectors ? I(!Y() || top.document).add(I(d.advanced.extraDraggableSelectors)) : I(!Y() || top.document);

            function s(t, e, i, n) {
                if (f[0].idleTimer = d.scrollInertia < 233 ? 250 : 0, r.attr("id") === h[1]) var s = "x",
                    o = (r[0].offsetLeft - e + n) * u.scrollRatio.x;
                else var s = "y",
                    o = (r[0].offsetTop - t + i) * u.scrollRatio.y;
                Q(c, o.toString(), {
                    dir: s,
                    drag: !0
                })
            }
            e.bind("contextmenu." + t, function(t) {
                t.preventDefault()
            }).bind("mousedown." + t + " touchstart." + t + " pointerdown." + t + " MSPointerDown." + t, function(t) {
                if (t.stopImmediatePropagation(), t.preventDefault(), it(t)) {
                    H = !0, g && (document.onselectstart = function() {
                        return !1
                    }), E.call(f, !1), Z(c);
                    var e = (r = I(this)).offset(),
                        i = z(t)[0] - e.top,
                        n = z(t)[1] - e.left,
                        s = r.height() + e.top,
                        o = r.width() + e.left;
                    i < s && 0 < i && n < o && 0 < n && (a = i, l = n), P(r, "active", d.autoExpandScrollbar)
                }
            }).bind("touchmove." + t, function(t) {
                t.stopImmediatePropagation(), t.preventDefault();
                var e = r.offset(),
                    i = z(t)[0] - e.top,
                    n = z(t)[1] - e.left;
                s(a, l, i, n)
            }), I(document).add(n).bind("mousemove." + t + " pointermove." + t + " MSPointerMove." + t, function(t) {
                if (r) {
                    var e = r.offset(),
                        i = z(t)[0] - e.top,
                        n = z(t)[1] - e.left;
                    if (a === i && l === n) return;
                    s(a, l, i, n)
                }
            }).add(i).bind("mouseup." + t + " touchend." + t + " pointerup." + t + " MSPointerUp." + t, function(t) {
                r && (P(r, "active", d.autoExpandScrollbar), r = null), H = !1, g && (document.onselectstart = null), E.call(f, !0)
            })
        }, M = function() {
            var u, c, d, h, f, p, m, g, v, y, _, b, w, x, T = I(this),
                S = T.data(N),
                k = S.opt,
                t = "mCS_" + S.idx,
                C = I("#mCSB_" + S.idx),
                P = I("#mCSB_" + S.idx + "_container"),
                $ = [I("#mCSB_" + S.idx + "_dragger_vertical"), I("#mCSB_" + S.idx + "_dragger_horizontal")],
                M = [],
                D = [],
                O = "yx" === k.axis ? "none" : "all",
                A = [],
                e = P.find("iframe"),
                i = ["touchstart." + t + " pointerdown." + t + " MSPointerDown." + t, "touchmove." + t + " pointermove." + t + " MSPointerMove." + t, "touchend." + t + " pointerup." + t + " MSPointerUp." + t],
                E = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;

            function n(t) {
                if (!nt(t) || H || z(t)[2]) F = 0;
                else {
                    x = w = 0, u = F = 1, T.removeClass("mCS_touch_action");
                    var e = P.offset();
                    c = z(t)[0] - e.top, d = z(t)[1] - e.left, A = [z(t)[0], z(t)[1]]
                }
            }

            function s(t) {
                if (nt(t) && !H && !z(t)[2] && (k.documentTouchScroll || t.preventDefault(), t.stopImmediatePropagation(), (!x || w) && u)) {
                    m = K();
                    var e = C.offset(),
                        i = z(t)[0] - e.top,
                        n = z(t)[1] - e.left,
                        s = "mcsLinearOut";
                    if (M.push(i), D.push(n), A[2] = Math.abs(z(t)[0] - A[0]), A[3] = Math.abs(z(t)[1] - A[1]), S.overflowed[0]) var o = $[0].parent().height() - $[0].height(),
                        r = 0 < c - i && i - c > -o * S.scrollRatio.y && (2 * A[3] < A[2] || "yx" === k.axis);
                    if (S.overflowed[1]) var a = $[1].parent().width() - $[1].width(),
                        l = 0 < d - n && n - d > -a * S.scrollRatio.x && (2 * A[2] < A[3] || "yx" === k.axis);
                    r || l ? (E || t.preventDefault(), w = 1) : (x = 1, T.addClass("mCS_touch_action")), E && t.preventDefault(), _ = "yx" === k.axis ? [c - i, d - n] : "x" === k.axis ? [null, d - n] : [c - i, null], P[0].idleTimer = 250, S.overflowed[0] && R(_[0], 0, s, "y", "all", !0), S.overflowed[1] && R(_[1], 0, s, "x", O, !0)
                }
            }

            function o(t) {
                if (!nt(t) || H || z(t)[2]) F = 0;
                else {
                    F = 1, t.stopImmediatePropagation(), Z(T), p = K();
                    var e = C.offset();
                    h = z(t)[0] - e.top, f = z(t)[1] - e.left, M = [], D = []
                }
            }

            function r(t) {
                if (nt(t) && !H && !z(t)[2]) {
                    u = 0, t.stopImmediatePropagation(), x = w = 0, g = K();
                    var e = C.offset(),
                        i = z(t)[0] - e.top,
                        n = z(t)[1] - e.left;
                    if (!(30 < g - m)) {
                        var s = "mcsEaseOut",
                            o = (y = 1e3 / (g - p)) < 2.5,
                            r = o ? [M[M.length - 2], D[D.length - 2]] : [0, 0];
                        v = o ? [i - r[0], n - r[1]] : [i - h, n - f];
                        var a = [Math.abs(v[0]), Math.abs(v[1])];
                        y = o ? [Math.abs(v[0] / 4), Math.abs(v[1] / 4)] : [y, y];
                        var l = [Math.abs(P[0].offsetTop) - v[0] * L(a[0] / y[0], y[0]), Math.abs(P[0].offsetLeft) - v[1] * L(a[1] / y[1], y[1])];
                        _ = "yx" === k.axis ? [l[0], l[1]] : "x" === k.axis ? [null, l[1]] : [l[0], null], b = [4 * a[0] + k.scrollInertia, 4 * a[1] + k.scrollInertia];
                        var c = parseInt(k.contentTouchScroll) || 0;
                        _[0] = c < a[0] ? _[0] : 0, _[1] = c < a[1] ? _[1] : 0, S.overflowed[0] && R(_[0], b[0], s, "y", O, !1), S.overflowed[1] && R(_[1], b[1], s, "x", O, !1)
                    }
                }
            }

            function L(t, e) {
                var i = [1.5 * e, 2 * e, e / 1.5, e / 2];
                return 90 < t ? 4 < e ? i[0] : i[3] : 60 < t ? 3 < e ? i[3] : i[2] : 30 < t ? 8 < e ? i[1] : 6 < e ? i[0] : 4 < e ? e : i[2] : 8 < e ? e : i[3]
            }

            function R(t, e, i, n, s, o) {
                t && Q(T, t.toString(), {
                    dur: e,
                    scrollEasing: i,
                    dir: n,
                    overwrite: s,
                    drag: o
                })
            }
            P.bind(i[0], function(t) {
                n(t)
            }).bind(i[1], function(t) {
                s(t)
            }), C.bind(i[0], function(t) {
                o(t)
            }).bind(i[2], function(t) {
                r(t)
            }), e.length && e.each(function() {
                I(this).bind("load", function() {
                    Y(this) && I(this.contentDocument || this.contentWindow.document).bind(i[0], function(t) {
                        n(t), o(t)
                    }).bind(i[1], function(t) {
                        s(t)
                    }).bind(i[2], function(t) {
                        r(t)
                    })
                })
            })
        }, D = function() {
            var s, n = I(this),
                o = n.data(N),
                r = o.opt,
                a = o.sequential,
                t = "mCS_" + o.idx,
                l = I("#mCSB_" + o.idx + "_container"),
                c = l.parent();

            function u(t, e, i) {
                a.type = i && s ? "stepped" : "stepless", a.scrollAmount = 10, U(n, t, e, "mcsLinearOut", i ? 60 : null)
            }
            l.bind("mousedown." + t, function(t) {
                F || s || (s = 1, H = !0)
            }).add(document).bind("mousemove." + t, function(t) {
                if (!F && s && (window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type && document.selection.createRange().text)) {
                    var e = l.offset(),
                        i = z(t)[0] - e.top + l[0].offsetTop,
                        n = z(t)[1] - e.left + l[0].offsetLeft;
                    0 < i && i < c.height() && 0 < n && n < c.width() ? a.step && u("off", null, "stepped") : ("x" !== r.axis && o.overflowed[0] && (i < 0 ? u("on", 38) : i > c.height() && u("on", 40)), "y" !== r.axis && o.overflowed[1] && (n < 0 ? u("on", 37) : n > c.width() && u("on", 39)))
                }
            }).bind("mouseup." + t + " dragend." + t, function(t) {
                F || (s && (s = 0, u("off", null)), H = !1)
            })
        }, O = function() {
            if (I(this).data(N)) {
                var d = I(this),
                    h = d.data(N),
                    f = h.opt,
                    t = "mCS_" + h.idx,
                    p = I("#mCSB_" + h.idx),
                    m = [I("#mCSB_" + h.idx + "_dragger_vertical"), I("#mCSB_" + h.idx + "_dragger_horizontal")],
                    e = I("#mCSB_" + h.idx + "_container").find("iframe");
                e.length && e.each(function() {
                    I(this).bind("load", function() {
                        Y(this) && I(this.contentDocument || this.contentWindow.document).bind("mousewheel." + t, function(t, e) {
                            i(t, e)
                        })
                    })
                }), p.bind("mousewheel." + t, function(t, e) {
                    i(t, e)
                })
            }

            function i(t, e) {
                if (Z(d), !L(d, t.target)) {
                    var i = "auto" !== f.mouseWheel.deltaFactor ? parseInt(f.mouseWheel.deltaFactor) : g && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100,
                        n = f.scrollInertia;
                    if ("x" === f.axis || "x" === f.mouseWheel.axis) var s = "x",
                        o = [Math.round(i * h.scrollRatio.x), parseInt(f.mouseWheel.scrollAmount)],
                        r = "auto" !== f.mouseWheel.scrollAmount ? o[1] : o[0] >= p.width() ? .9 * p.width() : o[0],
                        a = Math.abs(I("#mCSB_" + h.idx + "_container")[0].offsetLeft),
                        l = m[1][0].offsetLeft,
                        c = m[1].parent().width() - m[1].width(),
                        u = "y" === f.mouseWheel.axis ? t.deltaY || e : t.deltaX;
                    else var s = "y",
                        o = [Math.round(i * h.scrollRatio.y), parseInt(f.mouseWheel.scrollAmount)],
                        r = "auto" !== f.mouseWheel.scrollAmount ? o[1] : o[0] >= p.height() ? .9 * p.height() : o[0],
                        a = Math.abs(I("#mCSB_" + h.idx + "_container")[0].offsetTop),
                        l = m[0][0].offsetTop,
                        c = m[0].parent().height() - m[0].height(),
                        u = t.deltaY || e;
                    "y" === s && !h.overflowed[0] || "x" === s && !h.overflowed[1] || ((f.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (u = -u), f.mouseWheel.normalizeDelta && (u = u < 0 ? -1 : 1), (0 < u && 0 !== l || u < 0 && l !== c || f.mouseWheel.preventDefault) && (t.stopImmediatePropagation(), t.preventDefault()), t.deltaFactor < 5 && !f.mouseWheel.normalizeDelta && (r = t.deltaFactor, n = 17), Q(d, (a - u * r).toString(), {
                        dir: s,
                        dur: n
                    }))
                }
            }
        }, A = new Object, Y = function(t) {
            var e = !1,
                i = !1,
                n = null;
            if (void 0 === t ? i = "#empty" : void 0 !== I(t).attr("id") && (i = I(t).attr("id")), !1 !== i && void 0 !== A[i]) return A[i];
            if (t) {
                try {
                    var s = t.contentDocument || t.contentWindow.document;
                    n = s.body.innerHTML
                } catch (t) {}
                e = null !== n
            } else {
                try {
                    var s = top.document;
                    n = s.body.innerHTML
                } catch (t) {}
                e = null !== n
            }
            return !1 !== i && (A[i] = e), e
        }, E = function(t) {
            var e = this.find("iframe");
            if (e.length) {
                var i = t ? "auto" : "none";
                e.css("pointer-events", i)
            }
        }, L = function(t, e) {
            var i = e.nodeName.toLowerCase(),
                n = t.data(N).opt.mouseWheel.disableOver;
            return -1 < I.inArray(i, n) && !(-1 < I.inArray(i, ["select", "textarea"]) && !I(e).is(":focus"))
        }, R = function() {
            var r, a = I(this),
                l = a.data(N),
                t = "mCS_" + l.idx,
                c = I("#mCSB_" + l.idx + "_container"),
                u = c.parent(),
                e = I(".mCSB_" + l.idx + "_scrollbar ." + w[12]);
            e.bind("mousedown." + t + " touchstart." + t + " pointerdown." + t + " MSPointerDown." + t, function(t) {
                H = !0, I(t.target).hasClass("mCSB_dragger") || (r = 1)
            }).bind("touchend." + t + " pointerup." + t + " MSPointerUp." + t, function(t) {
                H = !1
            }).bind("click." + t, function(t) {
                if (r && (r = 0, I(t.target).hasClass(w[12]) || I(t.target).hasClass("mCSB_draggerRail"))) {
                    Z(a);
                    var e = I(this),
                        i = e.find(".mCSB_dragger");
                    if (0 < e.parent(".mCSB_scrollTools_horizontal").length) {
                        if (!l.overflowed[1]) return;
                        var n = "x",
                            s = t.pageX > i.offset().left ? -1 : 1,
                            o = Math.abs(c[0].offsetLeft) - s * (.9 * u.width())
                    } else {
                        if (!l.overflowed[0]) return;
                        var n = "y",
                            s = t.pageY > i.offset().top ? -1 : 1,
                            o = Math.abs(c[0].offsetTop) - s * (.9 * u.height())
                    }
                    Q(a, o.toString(), {
                        dir: n,
                        scrollEasing: "mcsEaseInOut"
                    })
                }
            })
        }, j = function() {
            var o = I(this),
                t = o.data(N),
                r = t.opt,
                e = "mCS_" + t.idx,
                a = I("#mCSB_" + t.idx + "_container"),
                l = a.parent();
            a.bind("focusin." + e, function(t) {
                var s = I(document.activeElement),
                    e = a.find(".mCustomScrollBox").length;
                s.is(r.advanced.autoScrollOnFocus) && (Z(o), clearTimeout(o[0]._focusTimeout), o[0]._focusTimer = e ? 17 * e : 0, o[0]._focusTimeout = setTimeout(function() {
                    var t = [ot(s)[0], ot(s)[1]],
                        e = [a[0].offsetTop, a[0].offsetLeft],
                        i = [0 <= e[0] + t[0] && e[0] + t[0] < l.height() - s.outerHeight(!1), 0 <= e[1] + t[1] && e[0] + t[1] < l.width() - s.outerWidth(!1)],
                        n = "yx" !== r.axis || i[0] || i[1] ? "all" : "none";
                    "x" === r.axis || i[0] || Q(o, t[0].toString(), {
                        dir: "y",
                        scrollEasing: "mcsEaseInOut",
                        overwrite: n,
                        dur: 0
                    }), "y" === r.axis || i[1] || Q(o, t[1].toString(), {
                        dir: "x",
                        scrollEasing: "mcsEaseInOut",
                        overwrite: n,
                        dur: 0
                    })
                }, o[0]._focusTimer))
            })
        }, B = function() {
            var t = I(this),
                e = t.data(N),
                i = "mCS_" + e.idx,
                n = I("#mCSB_" + e.idx + "_container").parent();
            n.bind("scroll." + i, function(t) {
                0 === n.scrollTop() && 0 === n.scrollLeft() || I(".mCSB_" + e.idx + "_scrollbar").css("visibility", "hidden")
            })
        }, W = function() {
            var n = I(this),
                s = n.data(N),
                o = s.opt,
                r = s.sequential,
                t = "mCS_" + s.idx,
                e = ".mCSB_" + s.idx + "_scrollbar",
                i = I(e + ">a");
            i.bind("contextmenu." + t, function(t) {
                t.preventDefault()
            }).bind("mousedown." + t + " touchstart." + t + " pointerdown." + t + " MSPointerDown." + t + " mouseup." + t + " touchend." + t + " pointerup." + t + " MSPointerUp." + t + " mouseout." + t + " pointerout." + t + " MSPointerOut." + t + " click." + t, function(t) {
                if (t.preventDefault(), it(t)) {
                    var e = I(this).attr("class");
                    switch (r.type = o.scrollButtons.scrollType, t.type) {
                        case "mousedown":
                        case "touchstart":
                        case "pointerdown":
                        case "MSPointerDown":
                            if ("stepped" === r.type) return;
                            H = !0, s.tweenRunning = !1, i("on", e);
                            break;
                        case "mouseup":
                        case "touchend":
                        case "pointerup":
                        case "MSPointerUp":
                        case "mouseout":
                        case "pointerout":
                        case "MSPointerOut":
                            if ("stepped" === r.type) return;
                            H = !1, r.dir && i("off", e);
                            break;
                        case "click":
                            if ("stepped" !== r.type || s.tweenRunning) return;
                            i("on", e)
                    }
                }

                function i(t, e) {
                    r.scrollAmount = o.scrollButtons.scrollAmount, U(n, t, e)
                }
            })
        }, q = function() {
            var a = I(this),
                l = a.data(N),
                c = l.opt,
                u = l.sequential,
                t = "mCS_" + l.idx,
                e = I("#mCSB_" + l.idx),
                d = I("#mCSB_" + l.idx + "_container"),
                h = d.parent(),
                f = "input,textarea,select,datalist,keygen,[contenteditable='true']",
                i = d.find("iframe"),
                n = ["blur." + t + " keydown." + t + " keyup." + t];

            function s(t) {
                switch (t.type) {
                    case "blur":
                        l.tweenRunning && u.dir && r("off", null);
                        break;
                    case "keydown":
                    case "keyup":
                        var e = t.keyCode ? t.keyCode : t.which,
                            i = "on";
                        if ("x" !== c.axis && (38 === e || 40 === e) || "y" !== c.axis && (37 === e || 39 === e)) {
                            if ((38 === e || 40 === e) && !l.overflowed[0] || (37 === e || 39 === e) && !l.overflowed[1]) return;
                            "keyup" === t.type && (i = "off"), I(document.activeElement).is(f) || (t.preventDefault(), t.stopImmediatePropagation(), r(i, e))
                        } else if (33 === e || 34 === e) {
                            if ((l.overflowed[0] || l.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type) {
                                Z(a);
                                var n = 34 === e ? -1 : 1;
                                if ("x" === c.axis || "yx" === c.axis && l.overflowed[1] && !l.overflowed[0]) var s = "x",
                                    o = Math.abs(d[0].offsetLeft) - n * (.9 * h.width());
                                else var s = "y",
                                    o = Math.abs(d[0].offsetTop) - n * (.9 * h.height());
                                Q(a, o.toString(), {
                                    dir: s,
                                    scrollEasing: "mcsEaseInOut"
                                })
                            }
                        } else if ((35 === e || 36 === e) && !I(document.activeElement).is(f) && ((l.overflowed[0] || l.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type)) {
                            if ("x" === c.axis || "yx" === c.axis && l.overflowed[1] && !l.overflowed[0]) var s = "x",
                                o = 35 === e ? Math.abs(h.width() - d.outerWidth(!1)) : 0;
                            else var s = "y",
                                o = 35 === e ? Math.abs(h.height() - d.outerHeight(!1)) : 0;
                            Q(a, o.toString(), {
                                dir: s,
                                scrollEasing: "mcsEaseInOut"
                            })
                        }
                }

                function r(t, e) {
                    u.type = c.keyboard.scrollType, u.scrollAmount = c.keyboard.scrollAmount, "stepped" === u.type && l.tweenRunning || U(a, t, e)
                }
            }
            i.length && i.each(function() {
                I(this).bind("load", function() {
                    Y(this) && I(this.contentDocument || this.contentWindow.document).bind(n[0], function(t) {
                        s(t)
                    })
                })
            }), e.attr("tabindex", "0").bind(n[0], function(t) {
                s(t)
            })
        }, U = function(d, t, e, h, f) {
            var p = d.data(N),
                m = p.opt,
                g = p.sequential,
                v = I("#mCSB_" + p.idx + "_container"),
                i = "stepped" === g.type,
                y = m.scrollInertia < 26 ? 26 : m.scrollInertia,
                _ = m.scrollInertia < 1 ? 17 : m.scrollInertia;
            switch (t) {
                case "on":
                    if (g.dir = [e === w[16] || e === w[15] || 39 === e || 37 === e ? "x" : "y", e === w[13] || e === w[15] || 38 === e || 37 === e ? -1 : 1], Z(d), st(e) && "stepped" === g.type) return;
                    b(i);
                    break;
                case "off":
                    clearTimeout(g.step), et(g, "step"), Z(d), (i || p.tweenRunning && g.dir) && b(!0)
            }

            function b(t) {
                m.snapAmount && (g.scrollAmount = m.snapAmount instanceof Array ? "x" === g.dir[0] ? m.snapAmount[1] : m.snapAmount[0] : m.snapAmount);
                var e = "stepped" !== g.type,
                    i = f || (t ? e ? y / 1.5 : _ : 1e3 / 60),
                    n = t ? e ? 7.5 : 40 : 2.5,
                    s = [Math.abs(v[0].offsetTop), Math.abs(v[0].offsetLeft)],
                    o = [10 < p.scrollRatio.y ? 10 : p.scrollRatio.y, 10 < p.scrollRatio.x ? 10 : p.scrollRatio.x],
                    r = "x" === g.dir[0] ? s[1] + g.dir[1] * (o[1] * n) : s[0] + g.dir[1] * (o[0] * n),
                    a = "x" === g.dir[0] ? s[1] + g.dir[1] * parseInt(g.scrollAmount) : s[0] + g.dir[1] * parseInt(g.scrollAmount),
                    l = "auto" !== g.scrollAmount ? a : r,
                    c = h || (t ? e ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear"),
                    u = !!t;
                t && i < 17 && (l = "x" === g.dir[0] ? s[1] : s[0]), Q(d, l.toString(), {
                    dir: g.dir[0],
                    scrollEasing: c,
                    dur: i,
                    onComplete: u
                }), t ? g.dir = !1 : (clearTimeout(g.step), g.step = setTimeout(function() {
                    b()
                }, i))
            }
        }, V = function(t) {
            var e = I(this).data(N).opt,
                i = [];
            return "function" == typeof t && (t = t()), t instanceof Array ? i = 1 < t.length ? [t[0], t[1]] : "x" === e.axis ? [null, t[0]] : [t[0], null] : (i[0] = t.y ? t.y : t.x || "x" === e.axis ? null : t, i[1] = t.x ? t.x : t.y || "y" === e.axis ? null : t), "function" == typeof i[0] && (i[0] = i[0]()), "function" == typeof i[1] && (i[1] = i[1]()), i
        }, X = function(t, e) {
            if (null != t && void 0 !== t) {
                var i = I(this),
                    n = i.data(N),
                    s = n.opt,
                    o = I("#mCSB_" + n.idx + "_container"),
                    r = o.parent(),
                    a = typeof t;
                e || (e = "x" === s.axis ? "x" : "y");
                var l = "x" === e ? o.outerWidth(!1) - r.width() : o.outerHeight(!1) - r.height(),
                    c = "x" === e ? o[0].offsetLeft : o[0].offsetTop,
                    u = "x" === e ? "left" : "top";
                switch (a) {
                    case "function":
                        return t();
                    case "object":
                        var d = t.jquery ? t : I(t);
                        if (!d.length) return;
                        return "x" === e ? ot(d)[1] : ot(d)[0];
                    case "string":
                    case "number":
                        if (st(t)) return Math.abs(t);
                        if (-1 !== t.indexOf("%")) return Math.abs(l * parseInt(t) / 100);
                        if (-1 !== t.indexOf("-=")) return Math.abs(c - parseInt(t.split("-=")[1]));
                        if (-1 !== t.indexOf("+=")) {
                            var h = c + parseInt(t.split("+=")[1]);
                            return 0 <= h ? 0 : Math.abs(h)
                        }
                        if (-1 !== t.indexOf("px") && st(t.split("px")[0])) return Math.abs(t.split("px")[0]);
                        if ("top" === t || "left" === t) return 0;
                        if ("bottom" === t) return Math.abs(r.height() - o.outerHeight(!1));
                        if ("right" === t) return Math.abs(r.width() - o.outerWidth(!1));
                        if ("first" === t || "last" === t) {
                            var d = o.find(":" + t);
                            return "x" === e ? ot(d)[1] : ot(d)[0]
                        }
                        return I(t).length ? "x" === e ? ot(I(t))[1] : ot(I(t))[0] : (o.css(u, t), void p.update.call(null, i[0]))
                }
            }
        }, G = function(t) {
            var e = I(this),
                i = e.data(N),
                n = i.opt,
                s = I("#mCSB_" + i.idx + "_container");
            if (t) return clearTimeout(s[0].autoUpdate), void et(s[0], "autoUpdate");

            function o(t) {
                clearTimeout(s[0].autoUpdate), p.update.call(null, e[0], t)
            }! function t() {
                clearTimeout(s[0].autoUpdate), 0 !== e.parents("html").length ? s[0].autoUpdate = setTimeout(function() {
                    return n.advanced.updateOnSelectorChange && (i.poll.change.n = function() {
                        !0 === n.advanced.updateOnSelectorChange && (n.advanced.updateOnSelectorChange = "*");
                        var t = 0,
                            e = s.find(n.advanced.updateOnSelectorChange);
                        return n.advanced.updateOnSelectorChange && 0 < e.length && e.each(function() {
                            t += this.offsetHeight + this.offsetWidth
                        }), t
                    }(), i.poll.change.n !== i.poll.change.o) ? (i.poll.change.o = i.poll.change.n, void o(3)) : n.advanced.updateOnContentResize && (i.poll.size.n = e[0].scrollHeight + e[0].scrollWidth + s[0].offsetHeight + e[0].offsetHeight + e[0].offsetWidth, i.poll.size.n !== i.poll.size.o) ? (i.poll.size.o = i.poll.size.n, void o(1)) : !n.advanced.updateOnImageLoad || "auto" === n.advanced.updateOnImageLoad && "y" === n.axis || (i.poll.img.n = s.find("img").length, i.poll.img.n === i.poll.img.o) ? void((n.advanced.updateOnSelectorChange || n.advanced.updateOnContentResize || n.advanced.updateOnImageLoad) && t()) : (i.poll.img.o = i.poll.img.n, void s.find("img").each(function() {
                        ! function(t) {
                            if (I(t).hasClass(w[2])) return o();
                            var e, i, n = new Image;
                            n.onload = (e = n, i = function() {
                                this.onload = null, I(t).addClass(w[2]), o(2)
                            }, function() {
                                return i.apply(e, arguments)
                            }), n.src = t.src
                        }(this)
                    }))
                }, n.advanced.autoUpdateTimeout) : e = null
            }()
        }, Z = function(t) {
            var e = t.data(N),
                i = I("#mCSB_" + e.idx + "_container,#mCSB_" + e.idx + "_container_wrapper,#mCSB_" + e.idx + "_dragger_vertical,#mCSB_" + e.idx + "_dragger_horizontal");
            i.each(function() {
                tt.call(this)
            })
        }, Q = function(s, t, o) {
            var e = s.data(N),
                i = e.opt,
                n = {
                    trigger: "internal",
                    dir: "y",
                    scrollEasing: "mcsEaseOut",
                    drag: !1,
                    dur: i.scrollInertia,
                    overwrite: "all",
                    callbacks: !0,
                    onStart: !0,
                    onUpdate: !0,
                    onComplete: !0
                },
                o = I.extend(n, o),
                r = [o.dur, o.drag ? 0 : o.dur],
                a = I("#mCSB_" + e.idx),
                l = I("#mCSB_" + e.idx + "_container"),
                c = l.parent(),
                u = i.callbacks.onTotalScrollOffset ? V.call(s, i.callbacks.onTotalScrollOffset) : [0, 0],
                d = i.callbacks.onTotalScrollBackOffset ? V.call(s, i.callbacks.onTotalScrollBackOffset) : [0, 0];
            if (e.trigger = o.trigger, 0 === c.scrollTop() && 0 === c.scrollLeft() || (I(".mCSB_" + e.idx + "_scrollbar").css("visibility", "visible"), c.scrollTop(0).scrollLeft(0)), "_resetY" !== t || e.contentReset.y || (k("onOverflowYNone") && i.callbacks.onOverflowYNone.call(s[0]), e.contentReset.y = 1), "_resetX" !== t || e.contentReset.x || (k("onOverflowXNone") && i.callbacks.onOverflowXNone.call(s[0]), e.contentReset.x = 1), "_resetY" !== t && "_resetX" !== t) {
                if (!e.contentReset.y && s[0].mcs || !e.overflowed[0] || (k("onOverflowY") && i.callbacks.onOverflowY.call(s[0]), e.contentReset.x = null), !e.contentReset.x && s[0].mcs || !e.overflowed[1] || (k("onOverflowX") && i.callbacks.onOverflowX.call(s[0]), e.contentReset.x = null), i.snapAmount) {
                    var h = i.snapAmount instanceof Array ? "x" === o.dir ? i.snapAmount[1] : i.snapAmount[0] : i.snapAmount;
                    f = t, p = h, m = i.snapOffset, t = Math.round(f / p) * p - m
                }
                var f, p, m;
                switch (o.dir) {
                    case "x":
                        var g = I("#mCSB_" + e.idx + "_dragger_horizontal"),
                            v = "left",
                            y = l[0].offsetLeft,
                            _ = [a.width() - l.outerWidth(!1), g.parent().width() - g.width()],
                            b = [t, 0 === t ? 0 : t / e.scrollRatio.x],
                            w = u[1],
                            x = d[1],
                            T = 0 < w ? w / e.scrollRatio.x : 0,
                            S = 0 < x ? x / e.scrollRatio.x : 0;
                        break;
                    case "y":
                        var g = I("#mCSB_" + e.idx + "_dragger_vertical"),
                            v = "top",
                            y = l[0].offsetTop,
                            _ = [a.height() - l.outerHeight(!1), g.parent().height() - g.height()],
                            b = [t, 0 === t ? 0 : t / e.scrollRatio.y],
                            w = u[0],
                            x = d[0],
                            T = 0 < w ? w / e.scrollRatio.y : 0,
                            S = 0 < x ? x / e.scrollRatio.y : 0
                }
                b[1] < 0 || 0 === b[0] && 0 === b[1] ? b = [0, 0] : b[1] >= _[1] ? b = [_[0], _[1]] : b[0] = -b[0], s[0].mcs || (C(), k("onInit") && i.callbacks.onInit.call(s[0])), clearTimeout(l[0].onCompleteTimeout), J(g[0], v, Math.round(b[1]), r[1], o.scrollEasing), !e.tweenRunning && (0 === y && 0 <= b[0] || y === _[0] && b[0] <= _[0]) || J(l[0], v, Math.round(b[0]), r[0], o.scrollEasing, o.overwrite, {
                    onStart: function() {
                        o.callbacks && o.onStart && !e.tweenRunning && (k("onScrollStart") && (C(), i.callbacks.onScrollStart.call(s[0])), e.tweenRunning = !0, P(g), e.cbOffsets = [i.callbacks.alwaysTriggerOffsets || y >= _[0] + w, i.callbacks.alwaysTriggerOffsets || y <= -x])
                    },
                    onUpdate: function() {
                        o.callbacks && o.onUpdate && k("whileScrolling") && (C(), i.callbacks.whileScrolling.call(s[0]))
                    },
                    onComplete: function() {
                        if (o.callbacks && o.onComplete) {
                            "yx" === i.axis && clearTimeout(l[0].onCompleteTimeout);
                            var t = l[0].idleTimer || 0;
                            l[0].onCompleteTimeout = setTimeout(function() {
                                k("onScroll") && (C(), i.callbacks.onScroll.call(s[0])), k("onTotalScroll") && b[1] >= _[1] - T && e.cbOffsets[0] && (C(), i.callbacks.onTotalScroll.call(s[0])), k("onTotalScrollBack") && b[1] <= S && e.cbOffsets[1] && (C(), i.callbacks.onTotalScrollBack.call(s[0])), e.tweenRunning = !1, l[0].idleTimer = 0, P(g, "hide")
                            }, t)
                        }
                    }
                })
            }

            function k(t) {
                return e && i.callbacks[t] && "function" == typeof i.callbacks[t]
            }

            function C() {
                var t = [l[0].offsetTop, l[0].offsetLeft],
                    e = [g[0].offsetTop, g[0].offsetLeft],
                    i = [l.outerHeight(!1), l.outerWidth(!1)],
                    n = [a.height(), a.width()];
                s[0].mcs = {
                    content: l,
                    top: t[0],
                    left: t[1],
                    draggerTop: e[0],
                    draggerLeft: e[1],
                    topPct: Math.round(100 * Math.abs(t[0]) / (Math.abs(i[0]) - n[0])),
                    leftPct: Math.round(100 * Math.abs(t[1]) / (Math.abs(i[1]) - n[1])),
                    direction: o.dir
                }
            }
        }, J = function(t, e, i, n, s, o, r) {
            t._mTween || (t._mTween = {
                top: {},
                left: {}
            });
            var a, l, r = r || {},
                c = r.onStart || function() {},
                u = r.onUpdate || function() {},
                d = r.onComplete || function() {},
                h = K(),
                f = 0,
                p = t.offsetTop,
                m = t.style,
                g = t._mTween[e];
            "left" === e && (p = t.offsetLeft);
            var v = i - p;

            function y() {
                g.stop || (f || c.call(), f = K() - h, _(), f >= g.time && (g.time = f > g.time ? f + a - (f - g.time) : f + a - 1, g.time < f + 1 && (g.time = f + 1)), g.time < n ? g.id = l(y) : d.call())
            }

            function _() {
                0 < n ? (g.currVal = function(t, e, i, n, s) {
                    switch (s) {
                        case "linear":
                        case "mcsLinear":
                            return i * t / n + e;
                        case "mcsLinearOut":
                            return t /= n, t--, i * Math.sqrt(1 - t * t) + e;
                        case "easeInOutSmooth":
                            return (t /= n / 2) < 1 ? i / 2 * t * t + e : -i / 2 * (--t * (t - 2) - 1) + e;
                        case "easeInOutStrong":
                            return (t /= n / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + e : (t--, i / 2 * (2 - Math.pow(2, -10 * t)) + e);
                        case "easeInOut":
                        case "mcsEaseInOut":
                            return (t /= n / 2) < 1 ? i / 2 * t * t * t + e : i / 2 * ((t -= 2) * t * t + 2) + e;
                        case "easeOutSmooth":
                            return t /= n, -i * (--t * t * t * t - 1) + e;
                        case "easeOutStrong":
                            return i * (1 - Math.pow(2, -10 * t / n)) + e;
                        case "easeOut":
                        case "mcsEaseOut":
                        default:
                            var o = (t /= n) * t,
                                r = o * t;
                            return e + i * (.499999999999997 * r * o + -2.5 * o * o + 5.5 * r + -6.5 * o + 4 * t)
                    }
                }(g.time, p, v, n, s), m[e] = Math.round(g.currVal) + "px") : m[e] = i + "px", u.call()
            }
            g.stop = 0, "none" !== o && null != g.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(g.id) : clearTimeout(g.id), g.id = null), a = 1e3 / 60, g.time = f + a, l = window.requestAnimationFrame ? window.requestAnimationFrame : function(t) {
                return _(), setTimeout(t, .01)
            }, g.id = l(y)
        }, K = function() {
            return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
        }, tt = function() {
            var t = this;
            t._mTween || (t._mTween = {
                top: {},
                left: {}
            });
            for (var e = ["top", "left"], i = 0; i < e.length; i++) {
                var n = e[i];
                t._mTween[n].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(t._mTween[n].id) : clearTimeout(t._mTween[n].id), t._mTween[n].id = null, t._mTween[n].stop = 1)
            }
        }, et = function(e, i) {
            try {
                delete e[i]
            } catch (t) {
                e[i] = null
            }
        }, it = function(t) {
            return !(t.which && 1 !== t.which)
        }, nt = function(t) {
            var e = t.originalEvent.pointerType;
            return !(e && "touch" !== e && 2 !== e)
        }, st = function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        }, ot = function(t) {
            var e = t.parents(".mCSB_container");
            return [t.offset().top - e.offset().top, t.offset().left - e.offset().left]
        }, rt = function() {
            var t = function() {
                var t = ["webkit", "moz", "ms", "o"];
                if ("hidden" in document) return "hidden";
                for (var e = 0; e < t.length; e++)
                    if (t[e] + "Hidden" in document) return t[e] + "Hidden";
                return null
            }();
            return !!t && document[t]
        }, I.fn[f] = function(t) {
            return p[t] ? p[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void I.error("Method " + t + " does not exist") : p.init.apply(this, arguments)
        }, I[f] = function(t) {
            return p[t] ? p[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void I.error("Method " + t + " does not exist") : p.init.apply(this, arguments)
        }, I[f].defaults = s, window[f] = !0, I(window).bind("load", function() {
            I(n)[f](), I.extend(I.expr[":"], {
                mcsInView: I.expr[":"].mcsInView || function(t) {
                    var e, i, n = I(t),
                        s = n.parents(".mCSB_container");
                    if (s.length) return e = s.parent(), 0 <= (i = [s[0].offsetTop, s[0].offsetLeft])[0] + ot(n)[0] && i[0] + ot(n)[0] < e.height() - n.outerHeight(!1) && 0 <= i[1] + ot(n)[1] && i[1] + ot(n)[1] < e.width() - n.outerWidth(!1)
                },
                mcsInSight: I.expr[":"].mcsInSight || function(t, e, i) {
                    var n, s, o, r, a = I(t),
                        l = a.parents(".mCSB_container"),
                        c = "exact" === i[3] ? [
                            [1, 0],
                            [1, 0]
                        ] : [
                            [.9, .1],
                            [.6, .4]
                        ];
                    if (l.length) return n = [a.outerHeight(!1), a.outerWidth(!1)], o = [l[0].offsetTop + ot(a)[0], l[0].offsetLeft + ot(a)[1]], s = [l.parent()[0].offsetHeight, l.parent()[0].offsetWidth], o[0] - s[0] * (r = [n[0] < s[0] ? c[0] : c[1], n[1] < s[1] ? c[0] : c[1]])[0][0] < 0 && 0 <= o[0] + n[0] - s[0] * r[0][1] && o[1] - s[1] * r[1][0] < 0 && 0 <= o[1] + n[1] - s[1] * r[1][1]
                },
                mcsOverflow: I.expr[":"].mcsOverflow || function(t) {
                    var e = I(t).data(N);
                    if (e) return e.overflowed[0] || e.overflowed[1]
                }
            })
        })
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e(t.jQuery)
    }(this, function(v) {
        "use strict";
        var u = {
            data: {
                index: 0,
                name: "scrollbar"
            },
            macosx: /mac/i.test(navigator.platform),
            mobile: /android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent),
            overlay: null,
            scroll: null,
            scrolls: [],
            webkit: /webkit/i.test(navigator.userAgent) && !/edge\/\d+/i.test(navigator.userAgent)
        };
        u.scrolls.add = function(t) {
            this.remove(t).push(t)
        };
        var i = {
                autoScrollSize: !0,
                autoUpdate: !0,
                debug: !(u.scrolls.remove = function(t) {
                    for (; 0 <= v.inArray(t, this);) this.splice(v.inArray(t, this), 1);
                    return this
                }),
                disableBodyScroll: !1,
                duration: 200,
                ignoreMobile: !1,
                ignoreOverlay: !1,
                scrollStep: 30,
                showArrows: !1,
                stepScrolling: !0,
                scrollx: null,
                scrolly: null,
                onDestroy: null,
                onInit: null,
                onScroll: null,
                onUpdate: null
            },
            t = function(t) {
                var e;
                u.scroll || (u.overlay = !((e = o(!0)).height || e.width), u.scroll = o(), c(), v(window).resize(function() {
                    var t = !1;
                    if (u.scroll && (u.scroll.height || u.scroll.width)) {
                        var e = o();
                        e.height === u.scroll.height && e.width === u.scroll.width || (u.scroll = e, t = !0)
                    }
                    c(t)
                })), this.container = t, this.namespace = ".scrollbar_" + u.data.index++, this.options = v.extend({}, i, window.jQueryScrollbarOptions || {}), this.scrollTo = null, this.scrollx = {}, this.scrolly = {}, t.data(u.data.name, this), u.scrolls.add(this)
            };
        t.prototype = {
            destroy: function() {
                if (this.wrapper) {
                    this.container.removeData(u.data.name), u.scrolls.remove(this);
                    var t = this.container.scrollLeft(),
                        e = this.container.scrollTop();
                    this.container.insertBefore(this.wrapper).css({
                        height: "",
                        margin: "",
                        "max-height": ""
                    }).removeClass("scroll-content scroll-scrollx_visible scroll-scrolly_visible").off(this.namespace).scrollLeft(t).scrollTop(e), this.scrollx.scroll.removeClass("scroll-scrollx_visible").find("div").andSelf().off(this.namespace), this.scrolly.scroll.removeClass("scroll-scrolly_visible").find("div").andSelf().off(this.namespace), this.wrapper.remove(), v(document).add("body").off(this.namespace), v.isFunction(this.options.onDestroy) && this.options.onDestroy.apply(this, [this.container])
                }
            },
            init: function(t) {
                var h = this,
                    f = this.container,
                    s = this.containerWrapper || f,
                    p = this.namespace,
                    m = v.extend(this.options, t || {}),
                    g = {
                        x: this.scrollx,
                        y: this.scrolly
                    },
                    i = this.wrapper,
                    e = {
                        scrollLeft: f.scrollLeft(),
                        scrollTop: f.scrollTop()
                    };
                if (u.mobile && m.ignoreMobile || u.overlay && m.ignoreOverlay || u.macosx && !u.webkit) return !1;
                if (i) s.css({
                    height: "auto",
                    "margin-bottom": -1 * u.scroll.height + "px",
                    "margin-right": -1 * u.scroll.width + "px",
                    "max-height": ""
                });
                else {
                    if (this.wrapper = i = v("<div>").addClass("scroll-wrapper").addClass(f.attr("class")).css("position", "absolute" == f.css("position") ? "absolute" : "relative").insertBefore(f).append(f), f.is("textarea") && (this.containerWrapper = s = v("<div>").insertBefore(f).append(f), i.addClass("scroll-textarea")), s.addClass("scroll-content").css({
                            height: "auto",
                            "margin-bottom": -1 * u.scroll.height + "px",
                            "margin-right": -1 * u.scroll.width + "px",
                            "max-height": ""
                        }), f.on("scroll" + p, function(t) {
                            v.isFunction(m.onScroll) && m.onScroll.call(h, {
                                maxScroll: g.y.maxScrollOffset,
                                scroll: f.scrollTop(),
                                size: g.y.size,
                                visible: g.y.visible
                            }, {
                                maxScroll: g.x.maxScrollOffset,
                                scroll: f.scrollLeft(),
                                size: g.x.size,
                                visible: g.x.visible
                            }), g.x.isVisible && g.x.scroll.bar.css("left", f.scrollLeft() * g.x.kx + "px"), g.y.isVisible && g.y.scroll.bar.css("top", f.scrollTop() * g.y.kx + "px")
                        }), i.on("scroll" + p, function() {
                            i.scrollTop(0).scrollLeft(0)
                        }), m.disableBodyScroll) {
                        var n = function(t) {
                            y(t) ? g.y.isVisible && g.y.mousewheel(t) : g.x.isVisible && g.x.mousewheel(t)
                        };
                        i.on("MozMousePixelScroll" + p, n), i.on("mousewheel" + p, n), u.mobile && i.on("touchstart" + p, function(t) {
                            var e = t.originalEvent.touches && t.originalEvent.touches[0] || t,
                                i = e.pageX,
                                n = e.pageY,
                                s = f.scrollLeft(),
                                o = f.scrollTop();
                            v(document).on("touchmove" + p, function(t) {
                                var e = t.originalEvent.targetTouches && t.originalEvent.targetTouches[0] || t;
                                f.scrollLeft(s + i - e.pageX), f.scrollTop(o + n - e.pageY), t.preventDefault()
                            }), v(document).on("touchend" + p, function() {
                                v(document).off(p)
                            })
                        })
                    }
                    v.isFunction(m.onInit) && m.onInit.apply(this, [f])
                }
                v.each(g, function(s, o) {
                    var r = null,
                        a = 1,
                        l = "x" === s ? "scrollLeft" : "scrollTop",
                        c = m.scrollStep,
                        u = function() {
                            var t = f[l]();
                            f[l](t + c), 1 == a && d <= t + c && (t = f[l]()), -1 == a && t + c <= d && (t = f[l]()), f[l]() == t && r && r()
                        },
                        d = 0;
                    o.scroll || (o.scroll = h._getScroll(m["scroll" + s]).addClass("scroll-" + s), m.showArrows && o.scroll.addClass("scroll-element_arrows_visible"), o.mousewheel = function(t) {
                        if (!o.isVisible || "x" === s && y(t)) return !0;
                        if ("y" === s && !y(t)) return g.x.mousewheel(t), !0;
                        var e = -1 * t.originalEvent.wheelDelta || t.originalEvent.detail,
                            i = o.size - o.visible - o.offset;
                        return (0 < e && d < i || e < 0 && 0 < d) && ((d += e) < 0 && (d = 0), i < d && (d = i), h.scrollTo = h.scrollTo || {}, h.scrollTo[l] = d, setTimeout(function() {
                            h.scrollTo && (f.stop().animate(h.scrollTo, 240, "linear", function() {
                                d = f[l]()
                            }), h.scrollTo = null)
                        }, 1)), t.preventDefault(), !1
                    }, o.scroll.on("MozMousePixelScroll" + p, o.mousewheel).on("mousewheel" + p, o.mousewheel).on("mouseenter" + p, function() {
                        d = f[l]()
                    }), o.scroll.find(".scroll-arrow, .scroll-element_track").on("mousedown" + p, function(t) {
                        if (1 != t.which) return !0;
                        a = 1;
                        var e = {
                                eventOffset: t["x" === s ? "pageX" : "pageY"],
                                maxScrollValue: o.size - o.visible - o.offset,
                                scrollbarOffset: o.scroll.bar.offset()["x" === s ? "left" : "top"],
                                scrollbarSize: o.scroll.bar["x" === s ? "outerWidth" : "outerHeight"]()
                            },
                            i = 0,
                            n = 0;
                        return v(this).hasClass("scroll-arrow") ? (a = v(this).hasClass("scroll-arrow_more") ? 1 : -1, c = m.scrollStep * a, d = 0 < a ? e.maxScrollValue : 0) : (a = e.scrollbarOffset + e.scrollbarSize < e.eventOffset ? 1 : e.eventOffset < e.scrollbarOffset ? -1 : 0, c = Math.round(.75 * o.visible) * a, d = e.eventOffset - e.scrollbarOffset - (m.stepScrolling ? 1 == a ? e.scrollbarSize : 0 : Math.round(e.scrollbarSize / 2)), d = f[l]() + d / o.kx), h.scrollTo = h.scrollTo || {}, h.scrollTo[l] = m.stepScrolling ? f[l]() + c : d, m.stepScrolling && (r = function() {
                            d = f[l](), clearInterval(n), clearTimeout(i), n = i = 0
                        }, i = setTimeout(function() {
                            n = setInterval(u, 40)
                        }, m.duration + 100)), setTimeout(function() {
                            h.scrollTo && (f.animate(h.scrollTo, m.duration), h.scrollTo = null)
                        }, 1), h._handleMouseDown(r, t)
                    }), o.scroll.bar.on("mousedown" + p, function(t) {
                        if (1 != t.which) return !0;
                        var i = t["x" === s ? "pageX" : "pageY"],
                            n = f[l]();
                        return o.scroll.addClass("scroll-draggable"), v(document).on("mousemove" + p, function(t) {
                            var e = parseInt((t["x" === s ? "pageX" : "pageY"] - i) / o.kx, 10);
                            f[l](n + e)
                        }), h._handleMouseDown(function() {
                            o.scroll.removeClass("scroll-draggable"), d = f[l]()
                        }, t)
                    }))
                }), v.each(g, function(t, e) {
                    var i = "scroll-scroll" + t + "_visible",
                        n = "x" == t ? g.y : g.x;
                    e.scroll.removeClass(i), n.scroll.removeClass(i), s.removeClass(i)
                }), v.each(g, function(t, e) {
                    v.extend(e, "x" == t ? {
                        offset: parseInt(f.css("left"), 10) || 0,
                        size: f.prop("scrollWidth"),
                        visible: i.width()
                    } : {
                        offset: parseInt(f.css("top"), 10) || 0,
                        size: f.prop("scrollHeight"),
                        visible: i.height()
                    })
                }), this._updateScroll("x", this.scrollx), this._updateScroll("y", this.scrolly), v.isFunction(m.onUpdate) && m.onUpdate.apply(this, [f]), v.each(g, function(t, e) {
                    var i = "x" === t ? "left" : "top",
                        n = "x" === t ? "outerWidth" : "outerHeight",
                        s = "x" === t ? "width" : "height",
                        o = parseInt(f.css(i), 10) || 0,
                        r = e.size,
                        a = e.visible + o,
                        l = e.scroll.size[n]() + (parseInt(e.scroll.size.css(i), 10) || 0);
                    m.autoScrollSize && (e.scrollbarSize = parseInt(l * a / r, 10), e.scroll.bar.css(s, e.scrollbarSize + "px")), e.scrollbarSize = e.scroll.bar[n](), e.kx = (l - e.scrollbarSize) / (r - a) || 1, e.maxScrollOffset = r - a
                }), f.scrollLeft(e.scrollLeft).scrollTop(e.scrollTop).trigger("scroll")
            },
            _getScroll: function(t) {
                var e = {
                    advanced: ['<div class="scroll-element">', '<div class="scroll-element_corner"></div>', '<div class="scroll-arrow scroll-arrow_less"></div>', '<div class="scroll-arrow scroll-arrow_more"></div>', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_inner-wrapper">', '<div class="scroll-element_inner scroll-element_track">', '<div class="scroll-element_inner-bottom"></div>', "</div>", "</div>", '<div class="scroll-bar">', '<div class="scroll-bar_body">', '<div class="scroll-bar_body-inner"></div>', "</div>", '<div class="scroll-bar_bottom"></div>', '<div class="scroll-bar_center"></div>', "</div>", "</div>", "</div>"].join(""),
                    simple: ['<div class="scroll-element">', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_track"></div>', '<div class="scroll-bar"></div>', "</div>", "</div>"].join("")
                };
                return e[t] && (t = e[t]), t || (t = e.simple), t = "string" == typeof t ? v(t).appendTo(this.wrapper) : v(t), v.extend(t, {
                    bar: t.find(".scroll-bar"),
                    size: t.find(".scroll-element_size"),
                    track: t.find(".scroll-element_track")
                }), t
            },
            _handleMouseDown: function(t, e) {
                var i = this.namespace;
                return v(document).on("blur" + i, function() {
                    v(document).add("body").off(i), t && t()
                }), v(document).on("dragstart" + i, function(t) {
                    return t.preventDefault(), !1
                }), v(document).on("mouseup" + i, function() {
                    v(document).add("body").off(i), t && t()
                }), v("body").on("selectstart" + i, function(t) {
                    return t.preventDefault(), !1
                }), e && e.preventDefault(), !1
            },
            _updateScroll: function(t, e) {
                var i = this.container,
                    n = this.containerWrapper || i,
                    s = "scroll-scroll" + t + "_visible",
                    o = "x" === t ? this.scrolly : this.scrollx,
                    r = parseInt(this.container.css("x" === t ? "left" : "top"), 10) || 0,
                    a = this.wrapper,
                    l = e.size,
                    c = e.visible + r;
                e.isVisible = 1 < l - c, e.isVisible ? (e.scroll.addClass(s), o.scroll.addClass(s), n.addClass(s)) : (e.scroll.removeClass(s), o.scroll.removeClass(s), n.removeClass(s)), "y" === t && (i.is("textarea") || l < c ? n.css({
                    height: c + u.scroll.height + "px",
                    "max-height": "none"
                }) : n.css({
                    "max-height": c + u.scroll.height + "px"
                })), e.size == i.prop("scrollWidth") && o.size == i.prop("scrollHeight") && e.visible == a.width() && o.visible == a.height() && e.offset == (parseInt(i.css("left"), 10) || 0) && o.offset == (parseInt(i.css("top"), 10) || 0) || (v.extend(this.scrollx, {
                    offset: parseInt(i.css("left"), 10) || 0,
                    size: i.prop("scrollWidth"),
                    visible: a.width()
                }), v.extend(this.scrolly, {
                    offset: parseInt(i.css("top"), 10) || 0,
                    size: this.container.prop("scrollHeight"),
                    visible: a.height()
                }), this._updateScroll("x" === t ? "y" : "x", o))
            }
        };
        var s = t;
        v.fn.scrollbar = function(i, n) {
            return "string" != typeof i && (n = i, i = "init"), void 0 === n && (n = []), v.isArray(n) || (n = [n]), this.not("body, .scroll-wrapper").each(function() {
                var t = v(this),
                    e = t.data(u.data.name);
                (e || "init" === i) && (e || (e = new s(t)), e[i] && e[i].apply(e, n))
            }), this
        }, v.fn.scrollbar.options = i;
        var l, n, c = (l = 0, function(t) {
            var e, i, n, s, o, r, a;
            for (e = 0; e < u.scrolls.length; e++) i = (s = u.scrolls[e]).container, n = s.options, o = s.wrapper, r = s.scrollx, a = s.scrolly, (t || n.autoUpdate && o && o.is(":visible") && (i.prop("scrollWidth") != r.size || i.prop("scrollHeight") != a.size || o.width() != r.visible || o.height() != a.visible)) && (s.init(), n.debug && window.console && console.log({
                scrollHeight: i.prop("scrollHeight") + ":" + s.scrolly.size,
                scrollWidth: i.prop("scrollWidth") + ":" + s.scrollx.size,
                visibleHeight: o.height() + ":" + s.scrolly.visible,
                visibleWidth: o.width() + ":" + s.scrollx.visible
            }, !0));
            clearTimeout(l), l = setTimeout(c, 300)
        });

        function o(t) {
            if (u.webkit && !t) return {
                height: 0,
                width: 0
            };
            if (!u.data.outer) {
                var e = {
                    border: "none",
                    "box-sizing": "content-box",
                    height: "200px",
                    margin: "0",
                    padding: "0",
                    width: "200px"
                };
                u.data.inner = v("<div>").css(v.extend({}, e)), u.data.outer = v("<div>").css(v.extend({
                    left: "-1000px",
                    overflow: "scroll",
                    position: "absolute",
                    top: "-1000px"
                }, e)).append(u.data.inner).appendTo("body")
            }
            return u.data.outer.scrollLeft(1e3).scrollTop(1e3), {
                height: Math.ceil(u.data.outer.offset().top - u.data.inner.offset().top || 0),
                width: Math.ceil(u.data.outer.offset().left - u.data.inner.offset().left || 0)
            }
        }

        function y(t) {
            var e = t.originalEvent;
            return (!e.axis || e.axis !== e.HORIZONTAL_AXIS) && !e.wheelDeltaX
        }
        window.angular && (n = window.angular).module("jQueryScrollbar", []).provider("jQueryScrollbar", function() {
            var e = i;
            return {
                setOptions: function(t) {
                    n.extend(e, t)
                },
                $get: function() {
                    return {
                        options: n.copy(e)
                    }
                }
            }
        }).directive("jqueryScrollbar", ["jQueryScrollbar", "$parse", function(s, o) {
            return {
                restrict: "AC",
                link: function(t, e, i) {
                    var n = o(i.jqueryScrollbar)(t);
                    e.scrollbar(n || s.options).on("$destroy", function() {
                        e.scrollbar("destroy")
                    })
                }
            }
        }])
    }),
    function(r) {
        "use strict";
        var a, l = !1,
            c = 250;

        function t(t, e) {
            var i = r(this);
            1 != i.data("tap_event") && i.bind("touchend.tap", n).bind("touchmove.tap", function() {
                l = !0
            }).data("tap_event", !0)
        }

        function e(t) {
            r(this).unbind("touchend.tap touchmove.tap")
        }

        function n(t) {
            if (console.log(t), l) return l = !1;
            var e = t.target,
                i = r(e),
                n = i.data("lastTouch") || 0,
                s = t.timeStamp,
                o = s - n;
            if (20 < o && o < c) return clearTimeout(a), i.data("lastTouch", 0).trigger("doubleTap");
            i.data("lastTouch", s), a = setTimeout(function() {
                i.trigger("tap")
            }, c)
        }
        r.event.special.doubleTap = {
            setup: t,
            teardown: e,
            handler: n
        }, r.event.special.tap = {
            setup: t,
            teardown: e,
            handler: n
        }
    }(jQuery),
    function(d) {
        "use strict";
        d.event.special.swipe = {
            setup: function() {
                d(this).bind("touchstart", d.event.special.swipe.handler)
            },
            teardown: function() {
                d(this).unbind("touchstart", d.event.special.swipe.handler)
            },
            handler: function(n) {
                var s, o, r = [].slice.call(arguments, 1),
                    t = n.originalEvent.touches,
                    a = 0,
                    l = 0,
                    c = this;

                function u() {
                    c.removeEventListener("touchmove", e), s = o = null
                }

                function e(t) {
                    var e = s - t.touches[0].pageX,
                        i = o - t.touches[0].pageY;
                    return 50 <= Math.abs(e) ? (u(), a = 0 < e ? -1 : 1) : 20 <= Math.abs(i) && (u(), l = 0 < i ? 1 : -1), n.type = "swipe", r.unshift(n, a, l), (d.event.dispatch || d.event.handle).apply(c, r)
                }
                n = d.event.fix(n), 1 == t.length && (s = t[0].pageX, o = t[0].pageY, this.addEventListener("touchmove", e, !1))
            }
        }
    }(jQuery),
    function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.moment = e()
    }(this, function() {
        "use strict";
        var t, s;

        function h() {
            return t.apply(null, arguments)
        }

        function a(t) {
            return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
        }

        function l(t) {
            return null != t && "[object Object]" === Object.prototype.toString.call(t)
        }

        function c(t) {
            return void 0 === t
        }

        function u(t) {
            return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t)
        }

        function d(t) {
            return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
        }

        function f(t, e) {
            var i, n = [];
            for (i = 0; i < t.length; ++i) n.push(e(t[i], i));
            return n
        }

        function p(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }

        function m(t, e) {
            for (var i in e) p(e, i) && (t[i] = e[i]);
            return p(e, "toString") && (t.toString = e.toString), p(e, "valueOf") && (t.valueOf = e.valueOf), t
        }

        function g(t, e, i, n) {
            return Ce(t, e, i, n, !0).utc()
        }

        function v(t) {
            return null == t._pf && (t._pf = {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1,
                parsedDateParts: [],
                meridiem: null,
                rfc2822: !1,
                weekdayMismatch: !1
            }), t._pf
        }

        function y(t) {
            if (null == t._isValid) {
                var e = v(t),
                    i = s.call(e.parsedDateParts, function(t) {
                        return null != t
                    }),
                    n = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && i);
                if (t._strict && (n = n && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return n;
                t._isValid = n
            }
            return t._isValid
        }

        function _(t) {
            var e = g(NaN);
            return null != t ? m(v(e), t) : v(e).userInvalidated = !0, e
        }
        s = Array.prototype.some ? Array.prototype.some : function(t) {
            for (var e = Object(this), i = e.length >>> 0, n = 0; n < i; n++)
                if (n in e && t.call(this, e[n], n, e)) return !0;
            return !1
        };
        var o = h.momentProperties = [];

        function b(t, e) {
            var i, n, s;
            if (c(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), c(e._i) || (t._i = e._i), c(e._f) || (t._f = e._f), c(e._l) || (t._l = e._l), c(e._strict) || (t._strict = e._strict), c(e._tzm) || (t._tzm = e._tzm), c(e._isUTC) || (t._isUTC = e._isUTC), c(e._offset) || (t._offset = e._offset), c(e._pf) || (t._pf = v(e)), c(e._locale) || (t._locale = e._locale), 0 < o.length)
                for (i = 0; i < o.length; i++) c(s = e[n = o[i]]) || (t[n] = s);
            return t
        }
        var e = !1;

        function w(t) {
            b(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === e && (e = !0, h.updateOffset(this), e = !1)
        }

        function x(t) {
            return t instanceof w || null != t && null != t._isAMomentObject
        }

        function T(t) {
            return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
        }

        function S(t) {
            var e = +t,
                i = 0;
            return 0 !== e && isFinite(e) && (i = T(e)), i
        }

        function r(t, e, i) {
            var n, s = Math.min(t.length, e.length),
                o = Math.abs(t.length - e.length),
                r = 0;
            for (n = 0; n < s; n++)(i && t[n] !== e[n] || !i && S(t[n]) !== S(e[n])) && r++;
            return r + o
        }

        function k(t) {
            !1 === h.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
        }

        function i(s, o) {
            var r = !0;
            return m(function() {
                if (null != h.deprecationHandler && h.deprecationHandler(null, s), r) {
                    for (var t, e = [], i = 0; i < arguments.length; i++) {
                        if (t = "", "object" == typeof arguments[i]) {
                            for (var n in t += "\n[" + i + "] ", arguments[0]) t += n + ": " + arguments[0][n] + ", ";
                            t = t.slice(0, -2)
                        } else t = arguments[i];
                        e.push(t)
                    }
                    k(s + "\nArguments: " + Array.prototype.slice.call(e).join("") + "\n" + (new Error).stack), r = !1
                }
                return o.apply(this, arguments)
            }, o)
        }
        var n, C = {};

        function P(t, e) {
            null != h.deprecationHandler && h.deprecationHandler(t, e), C[t] || (k(e), C[t] = !0)
        }

        function $(t) {
            return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
        }

        function M(t, e) {
            var i, n = m({}, t);
            for (i in e) p(e, i) && (l(t[i]) && l(e[i]) ? (n[i] = {}, m(n[i], t[i]), m(n[i], e[i])) : null != e[i] ? n[i] = e[i] : delete n[i]);
            for (i in t) p(t, i) && !p(e, i) && l(t[i]) && (n[i] = m({}, n[i]));
            return n
        }

        function D(t) {
            null != t && this.set(t)
        }
        h.suppressDeprecationWarnings = !1, h.deprecationHandler = null, n = Object.keys ? Object.keys : function(t) {
            var e, i = [];
            for (e in t) p(t, e) && i.push(e);
            return i
        };
        var O = {};

        function A(t, e) {
            var i = t.toLowerCase();
            O[i] = O[i + "s"] = O[e] = t
        }

        function E(t) {
            return "string" == typeof t ? O[t] || O[t.toLowerCase()] : void 0
        }

        function L(t) {
            var e, i, n = {};
            for (i in t) p(t, i) && (e = E(i)) && (n[e] = t[i]);
            return n
        }
        var R = {};

        function I(t, e) {
            R[t] = e
        }

        function F(t, e, i) {
            var n = "" + Math.abs(t),
                s = e - n.length;
            return (0 <= t ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + n
        }
        var N = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            H = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            z = {},
            Y = {};

        function j(t, e, i, n) {
            var s = n;
            "string" == typeof n && (s = function() {
                return this[n]()
            }), t && (Y[t] = s), e && (Y[e[0]] = function() {
                return F(s.apply(this, arguments), e[1], e[2])
            }), i && (Y[i] = function() {
                return this.localeData().ordinal(s.apply(this, arguments), t)
            })
        }

        function B(t, e) {
            return t.isValid() ? (e = W(e, t.localeData()), z[e] = z[e] || function(n) {
                var t, s, e, o = n.match(N);
                for (t = 0, s = o.length; t < s; t++) Y[o[t]] ? o[t] = Y[o[t]] : o[t] = (e = o[t]).match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
                return function(t) {
                    var e, i = "";
                    for (e = 0; e < s; e++) i += $(o[e]) ? o[e].call(t, n) : o[e];
                    return i
                }
            }(e), z[e](t)) : t.localeData().invalidDate()
        }

        function W(t, e) {
            var i = 5;

            function n(t) {
                return e.longDateFormat(t) || t
            }
            for (H.lastIndex = 0; 0 <= i && H.test(t);) t = t.replace(H, n), H.lastIndex = 0, i -= 1;
            return t
        }
        var q = /\d/,
            U = /\d\d/,
            V = /\d{3}/,
            X = /\d{4}/,
            G = /[+-]?\d{6}/,
            Z = /\d\d?/,
            Q = /\d\d\d\d?/,
            J = /\d\d\d\d\d\d?/,
            K = /\d{1,3}/,
            tt = /\d{1,4}/,
            et = /[+-]?\d{1,6}/,
            it = /\d+/,
            nt = /[+-]?\d+/,
            st = /Z|[+-]\d\d:?\d\d/gi,
            ot = /Z|[+-]\d\d(?::?\d\d)?/gi,
            rt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
            at = {};

        function lt(t, i, n) {
            at[t] = $(i) ? i : function(t, e) {
                return t && n ? n : i
            }
        }

        function ct(t, e) {
            return p(at, t) ? at[t](e._strict, e._locale) : new RegExp(ut(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, i, n, s) {
                return e || i || n || s
            })))
        }

        function ut(t) {
            return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }
        var dt = {};

        function ht(t, i) {
            var e, n = i;
            for ("string" == typeof t && (t = [t]), u(i) && (n = function(t, e) {
                    e[i] = S(t)
                }), e = 0; e < t.length; e++) dt[t[e]] = n
        }

        function ft(t, s) {
            ht(t, function(t, e, i, n) {
                i._w = i._w || {}, s(t, i._w, i, n)
            })
        }
        var pt = 0,
            mt = 1,
            gt = 2,
            vt = 3,
            yt = 4,
            _t = 5,
            bt = 6,
            wt = 7,
            xt = 8;

        function Tt(t) {
            return St(t) ? 366 : 365
        }

        function St(t) {
            return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
        }
        j("Y", 0, 0, function() {
            var t = this.year();
            return t <= 9999 ? "" + t : "+" + t
        }), j(0, ["YY", 2], 0, function() {
            return this.year() % 100
        }), j(0, ["YYYY", 4], 0, "year"), j(0, ["YYYYY", 5], 0, "year"), j(0, ["YYYYYY", 6, !0], 0, "year"), A("year", "y"), I("year", 1), lt("Y", nt), lt("YY", Z, U), lt("YYYY", tt, X), lt("YYYYY", et, G), lt("YYYYYY", et, G), ht(["YYYYY", "YYYYYY"], pt), ht("YYYY", function(t, e) {
            e[pt] = 2 === t.length ? h.parseTwoDigitYear(t) : S(t)
        }), ht("YY", function(t, e) {
            e[pt] = h.parseTwoDigitYear(t)
        }), ht("Y", function(t, e) {
            e[pt] = parseInt(t, 10)
        }), h.parseTwoDigitYear = function(t) {
            return S(t) + (68 < S(t) ? 1900 : 2e3)
        };
        var kt, Ct = Pt("FullYear", !0);

        function Pt(e, i) {
            return function(t) {
                return null != t ? (Mt(this, e, t), h.updateOffset(this, i), this) : $t(this, e)
            }
        }

        function $t(t, e) {
            return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
        }

        function Mt(t, e, i) {
            t.isValid() && !isNaN(i) && ("FullYear" === e && St(t.year()) && 1 === t.month() && 29 === t.date() ? t._d["set" + (t._isUTC ? "UTC" : "") + e](i, t.month(), Dt(i, t.month())) : t._d["set" + (t._isUTC ? "UTC" : "") + e](i))
        }

        function Dt(t, e) {
            if (isNaN(t) || isNaN(e)) return NaN;
            var i, n = (e % (i = 12) + i) % i;
            return t += (e - n) / 12, 1 === n ? St(t) ? 29 : 28 : 31 - n % 7 % 2
        }
        kt = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
            var e;
            for (e = 0; e < this.length; ++e)
                if (this[e] === t) return e;
            return -1
        }, j("M", ["MM", 2], "Mo", function() {
            return this.month() + 1
        }), j("MMM", 0, 0, function(t) {
            return this.localeData().monthsShort(this, t)
        }), j("MMMM", 0, 0, function(t) {
            return this.localeData().months(this, t)
        }), A("month", "M"), I("month", 8), lt("M", Z), lt("MM", Z, U), lt("MMM", function(t, e) {
            return e.monthsShortRegex(t)
        }), lt("MMMM", function(t, e) {
            return e.monthsRegex(t)
        }), ht(["M", "MM"], function(t, e) {
            e[mt] = S(t) - 1
        }), ht(["MMM", "MMMM"], function(t, e, i, n) {
            var s = i._locale.monthsParse(t, n, i._strict);
            null != s ? e[mt] = s : v(i).invalidMonth = t
        });
        var Ot = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
            At = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
        var Et = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

        function Lt(t, e) {
            var i;
            if (!t.isValid()) return t;
            if ("string" == typeof e)
                if (/^\d+$/.test(e)) e = S(e);
                else if (!u(e = t.localeData().monthsParse(e))) return t;
            return i = Math.min(t.date(), Dt(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, i), t
        }

        function Rt(t) {
            return null != t ? (Lt(this, t), h.updateOffset(this, !0), this) : $t(this, "Month")
        }
        var It = rt;
        var Ft = rt;

        function Nt() {
            function t(t, e) {
                return e.length - t.length
            }
            var e, i, n = [],
                s = [],
                o = [];
            for (e = 0; e < 12; e++) i = g([2e3, e]), n.push(this.monthsShort(i, "")), s.push(this.months(i, "")), o.push(this.months(i, "")), o.push(this.monthsShort(i, ""));
            for (n.sort(t), s.sort(t), o.sort(t), e = 0; e < 12; e++) n[e] = ut(n[e]), s[e] = ut(s[e]);
            for (e = 0; e < 24; e++) o[e] = ut(o[e]);
            this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
        }

        function Ht(t) {
            var e = new Date(Date.UTC.apply(null, arguments));
            return t < 100 && 0 <= t && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e
        }

        function zt(t, e, i) {
            var n = 7 + e - i;
            return -((7 + Ht(t, 0, n).getUTCDay() - e) % 7) + n - 1
        }

        function Yt(t, e, i, n, s) {
            var o, r, a = 1 + 7 * (e - 1) + (7 + i - n) % 7 + zt(t, n, s);
            return a <= 0 ? r = Tt(o = t - 1) + a : a > Tt(t) ? (o = t + 1, r = a - Tt(t)) : (o = t, r = a), {
                year: o,
                dayOfYear: r
            }
        }

        function jt(t, e, i) {
            var n, s, o = zt(t.year(), e, i),
                r = Math.floor((t.dayOfYear() - o - 1) / 7) + 1;
            return r < 1 ? n = r + Bt(s = t.year() - 1, e, i) : r > Bt(t.year(), e, i) ? (n = r - Bt(t.year(), e, i), s = t.year() + 1) : (s = t.year(), n = r), {
                week: n,
                year: s
            }
        }

        function Bt(t, e, i) {
            var n = zt(t, e, i),
                s = zt(t + 1, e, i);
            return (Tt(t) - n + s) / 7
        }
        j("w", ["ww", 2], "wo", "week"), j("W", ["WW", 2], "Wo", "isoWeek"), A("week", "w"), A("isoWeek", "W"), I("week", 5), I("isoWeek", 5), lt("w", Z), lt("ww", Z, U), lt("W", Z), lt("WW", Z, U), ft(["w", "ww", "W", "WW"], function(t, e, i, n) {
            e[n.substr(0, 1)] = S(t)
        });
        j("d", 0, "do", "day"), j("dd", 0, 0, function(t) {
            return this.localeData().weekdaysMin(this, t)
        }), j("ddd", 0, 0, function(t) {
            return this.localeData().weekdaysShort(this, t)
        }), j("dddd", 0, 0, function(t) {
            return this.localeData().weekdays(this, t)
        }), j("e", 0, 0, "weekday"), j("E", 0, 0, "isoWeekday"), A("day", "d"), A("weekday", "e"), A("isoWeekday", "E"), I("day", 11), I("weekday", 11), I("isoWeekday", 11), lt("d", Z), lt("e", Z), lt("E", Z), lt("dd", function(t, e) {
            return e.weekdaysMinRegex(t)
        }), lt("ddd", function(t, e) {
            return e.weekdaysShortRegex(t)
        }), lt("dddd", function(t, e) {
            return e.weekdaysRegex(t)
        }), ft(["dd", "ddd", "dddd"], function(t, e, i, n) {
            var s = i._locale.weekdaysParse(t, n, i._strict);
            null != s ? e.d = s : v(i).invalidWeekday = t
        }), ft(["d", "e", "E"], function(t, e, i, n) {
            e[n] = S(t)
        });
        var Wt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
        var qt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
        var Ut = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
        var Vt = rt;
        var Xt = rt;
        var Gt = rt;

        function Zt() {
            function t(t, e) {
                return e.length - t.length
            }
            var e, i, n, s, o, r = [],
                a = [],
                l = [],
                c = [];
            for (e = 0; e < 7; e++) i = g([2e3, 1]).day(e), n = this.weekdaysMin(i, ""), s = this.weekdaysShort(i, ""), o = this.weekdays(i, ""), r.push(n), a.push(s), l.push(o), c.push(n), c.push(s), c.push(o);
            for (r.sort(t), a.sort(t), l.sort(t), c.sort(t), e = 0; e < 7; e++) a[e] = ut(a[e]), l[e] = ut(l[e]), c[e] = ut(c[e]);
            this._weekdaysRegex = new RegExp("^(" + c.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
        }

        function Qt() {
            return this.hours() % 12 || 12
        }

        function Jt(t, e) {
            j(t, 0, 0, function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), e)
            })
        }

        function Kt(t, e) {
            return e._meridiemParse
        }
        j("H", ["HH", 2], 0, "hour"), j("h", ["hh", 2], 0, Qt), j("k", ["kk", 2], 0, function() {
            return this.hours() || 24
        }), j("hmm", 0, 0, function() {
            return "" + Qt.apply(this) + F(this.minutes(), 2)
        }), j("hmmss", 0, 0, function() {
            return "" + Qt.apply(this) + F(this.minutes(), 2) + F(this.seconds(), 2)
        }), j("Hmm", 0, 0, function() {
            return "" + this.hours() + F(this.minutes(), 2)
        }), j("Hmmss", 0, 0, function() {
            return "" + this.hours() + F(this.minutes(), 2) + F(this.seconds(), 2)
        }), Jt("a", !0), Jt("A", !1), A("hour", "h"), I("hour", 13), lt("a", Kt), lt("A", Kt), lt("H", Z), lt("h", Z), lt("k", Z), lt("HH", Z, U), lt("hh", Z, U), lt("kk", Z, U), lt("hmm", Q), lt("hmmss", J), lt("Hmm", Q), lt("Hmmss", J), ht(["H", "HH"], vt), ht(["k", "kk"], function(t, e, i) {
            var n = S(t);
            e[vt] = 24 === n ? 0 : n
        }), ht(["a", "A"], function(t, e, i) {
            i._isPm = i._locale.isPM(t), i._meridiem = t
        }), ht(["h", "hh"], function(t, e, i) {
            e[vt] = S(t), v(i).bigHour = !0
        }), ht("hmm", function(t, e, i) {
            var n = t.length - 2;
            e[vt] = S(t.substr(0, n)), e[yt] = S(t.substr(n)), v(i).bigHour = !0
        }), ht("hmmss", function(t, e, i) {
            var n = t.length - 4,
                s = t.length - 2;
            e[vt] = S(t.substr(0, n)), e[yt] = S(t.substr(n, 2)), e[_t] = S(t.substr(s)), v(i).bigHour = !0
        }), ht("Hmm", function(t, e, i) {
            var n = t.length - 2;
            e[vt] = S(t.substr(0, n)), e[yt] = S(t.substr(n))
        }), ht("Hmmss", function(t, e, i) {
            var n = t.length - 4,
                s = t.length - 2;
            e[vt] = S(t.substr(0, n)), e[yt] = S(t.substr(n, 2)), e[_t] = S(t.substr(s))
        });
        var te, ee = Pt("Hours", !0),
            ie = {
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                longDateFormat: {
                    LTS: "h:mm:ss A",
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                },
                invalidDate: "Invalid date",
                ordinal: "%d",
                dayOfMonthOrdinalParse: /\d{1,2}/,
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                months: At,
                monthsShort: Et,
                week: {
                    dow: 0,
                    doy: 6
                },
                weekdays: Wt,
                weekdaysMin: Ut,
                weekdaysShort: qt,
                meridiemParse: /[ap]\.?m?\.?/i
            },
            ne = {},
            se = {};

        function oe(t) {
            return t ? t.toLowerCase().replace("_", "-") : t
        }

        function re(t) {
            var e = null;
            if (!ne[t] && "undefined" != typeof module && module && module.exports) try {
                e = te._abbr, require("./locale/" + t), ae(e)
            } catch (t) {}
            return ne[t]
        }

        function ae(t, e) {
            var i;
            return t && ((i = c(e) ? ce(t) : le(t, e)) ? te = i : "undefined" != typeof console && console.warn && console.warn("Locale " + t + " not found. Did you forget to load it?")), te._abbr
        }

        function le(t, e) {
            if (null !== e) {
                var i, n = ie;
                if (e.abbr = t, null != ne[t]) P("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = ne[t]._config;
                else if (null != e.parentLocale)
                    if (null != ne[e.parentLocale]) n = ne[e.parentLocale]._config;
                    else {
                        if (null == (i = re(e.parentLocale))) return se[e.parentLocale] || (se[e.parentLocale] = []), se[e.parentLocale].push({
                            name: t,
                            config: e
                        }), null;
                        n = i._config
                    } return ne[t] = new D(M(n, e)), se[t] && se[t].forEach(function(t) {
                    le(t.name, t.config)
                }), ae(t), ne[t]
            }
            return delete ne[t], null
        }

        function ce(t) {
            var e;
            if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return te;
            if (!a(t)) {
                if (e = re(t)) return e;
                t = [t]
            }
            return function(t) {
                for (var e, i, n, s, o = 0; o < t.length;) {
                    for (e = (s = oe(t[o]).split("-")).length, i = (i = oe(t[o + 1])) ? i.split("-") : null; 0 < e;) {
                        if (n = re(s.slice(0, e).join("-"))) return n;
                        if (i && i.length >= e && r(s, i, !0) >= e - 1) break;
                        e--
                    }
                    o++
                }
                return te
            }(t)
        }

        function ue(t) {
            var e, i = t._a;
            return i && -2 === v(t).overflow && (e = i[mt] < 0 || 11 < i[mt] ? mt : i[gt] < 1 || i[gt] > Dt(i[pt], i[mt]) ? gt : i[vt] < 0 || 24 < i[vt] || 24 === i[vt] && (0 !== i[yt] || 0 !== i[_t] || 0 !== i[bt]) ? vt : i[yt] < 0 || 59 < i[yt] ? yt : i[_t] < 0 || 59 < i[_t] ? _t : i[bt] < 0 || 999 < i[bt] ? bt : -1, v(t)._overflowDayOfYear && (e < pt || gt < e) && (e = gt), v(t)._overflowWeeks && -1 === e && (e = wt), v(t)._overflowWeekday && -1 === e && (e = xt), v(t).overflow = e), t
        }

        function de(t, e, i) {
            return null != t ? t : null != e ? e : i
        }

        function he(t) {
            var e, i, n, s, o, r = [];
            if (!t._d) {
                var a, l;
                for (a = t, l = new Date(h.now()), n = a._useUTC ? [l.getUTCFullYear(), l.getUTCMonth(), l.getUTCDate()] : [l.getFullYear(), l.getMonth(), l.getDate()], t._w && null == t._a[gt] && null == t._a[mt] && function(t) {
                        var e, i, n, s, o, r, a, l;
                        if (null != (e = t._w).GG || null != e.W || null != e.E) o = 1, r = 4, i = de(e.GG, t._a[pt], jt(Pe(), 1, 4).year), n = de(e.W, 1), ((s = de(e.E, 1)) < 1 || 7 < s) && (l = !0);
                        else {
                            o = t._locale._week.dow, r = t._locale._week.doy;
                            var c = jt(Pe(), o, r);
                            i = de(e.gg, t._a[pt], c.year), n = de(e.w, c.week), null != e.d ? ((s = e.d) < 0 || 6 < s) && (l = !0) : null != e.e ? (s = e.e + o, (e.e < 0 || 6 < e.e) && (l = !0)) : s = o
                        }
                        n < 1 || n > Bt(i, o, r) ? v(t)._overflowWeeks = !0 : null != l ? v(t)._overflowWeekday = !0 : (a = Yt(i, n, s, o, r), t._a[pt] = a.year, t._dayOfYear = a.dayOfYear)
                    }(t), null != t._dayOfYear && (o = de(t._a[pt], n[pt]), (t._dayOfYear > Tt(o) || 0 === t._dayOfYear) && (v(t)._overflowDayOfYear = !0), i = Ht(o, 0, t._dayOfYear), t._a[mt] = i.getUTCMonth(), t._a[gt] = i.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = r[e] = n[e];
                for (; e < 7; e++) t._a[e] = r[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                24 === t._a[vt] && 0 === t._a[yt] && 0 === t._a[_t] && 0 === t._a[bt] && (t._nextDay = !0, t._a[vt] = 0), t._d = (t._useUTC ? Ht : function(t, e, i, n, s, o, r) {
                    var a = new Date(t, e, i, n, s, o, r);
                    return t < 100 && 0 <= t && isFinite(a.getFullYear()) && a.setFullYear(t), a
                }).apply(null, r), s = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[vt] = 24), t._w && void 0 !== t._w.d && t._w.d !== s && (v(t).weekdayMismatch = !0)
            }
        }
        var fe = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            pe = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            me = /Z|[+-]\d\d(?::?\d\d)?/,
            ge = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                ["YYYY-DDD", /\d{4}-\d{3}/],
                ["YYYY-MM", /\d{4}-\d\d/, !1],
                ["YYYYYYMMDD", /[+-]\d{10}/],
                ["YYYYMMDD", /\d{8}/],
                ["GGGG[W]WWE", /\d{4}W\d{3}/],
                ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                ["YYYYDDD", /\d{7}/]
            ],
            ve = [
                ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                ["HH:mm", /\d\d:\d\d/],
                ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                ["HHmmss", /\d\d\d\d\d\d/],
                ["HHmm", /\d\d\d\d/],
                ["HH", /\d\d/]
            ],
            ye = /^\/?Date\((\-?\d+)/i;

        function _e(t) {
            var e, i, n, s, o, r, a = t._i,
                l = fe.exec(a) || pe.exec(a);
            if (l) {
                for (v(t).iso = !0, e = 0, i = ge.length; e < i; e++)
                    if (ge[e][1].exec(l[1])) {
                        s = ge[e][0], n = !1 !== ge[e][2];
                        break
                    } if (null == s) return void(t._isValid = !1);
                if (l[3]) {
                    for (e = 0, i = ve.length; e < i; e++)
                        if (ve[e][1].exec(l[3])) {
                            o = (l[2] || " ") + ve[e][0];
                            break
                        } if (null == o) return void(t._isValid = !1)
                }
                if (!n && null != o) return void(t._isValid = !1);
                if (l[4]) {
                    if (!me.exec(l[4])) return void(t._isValid = !1);
                    r = "Z"
                }
                t._f = s + (o || "") + (r || ""), Se(t)
            } else t._isValid = !1
        }
        var be = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

        function we(t, e, i, n, s, o) {
            var r = [function(t) {
                var e = parseInt(t, 10); {
                    if (e <= 49) return 2e3 + e;
                    if (e <= 999) return 1900 + e
                }
                return e
            }(t), Et.indexOf(e), parseInt(i, 10), parseInt(n, 10), parseInt(s, 10)];
            return o && r.push(parseInt(o, 10)), r
        }
        var xe = {
            UT: 0,
            GMT: 0,
            EDT: -240,
            EST: -300,
            CDT: -300,
            CST: -360,
            MDT: -360,
            MST: -420,
            PDT: -420,
            PST: -480
        };

        function Te(t) {
            var e, i, n, s = be.exec(t._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
            if (s) {
                var o = we(s[4], s[3], s[2], s[5], s[6], s[7]);
                if (e = s[1], i = o, n = t, e && qt.indexOf(e) !== new Date(i[0], i[1], i[2]).getDay() && (v(n).weekdayMismatch = !0, !(n._isValid = !1))) return;
                t._a = o, t._tzm = function(t, e, i) {
                    if (t) return xe[t];
                    if (e) return 0;
                    var n = parseInt(i, 10),
                        s = n % 100;
                    return (n - s) / 100 * 60 + s
                }(s[8], s[9], s[10]), t._d = Ht.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), v(t).rfc2822 = !0
            } else t._isValid = !1
        }

        function Se(t) {
            if (t._f !== h.ISO_8601)
                if (t._f !== h.RFC_2822) {
                    t._a = [], v(t).empty = !0;
                    var e, i, n, s, o, r, a, l, c = "" + t._i,
                        u = c.length,
                        d = 0;
                    for (n = W(t._f, t._locale).match(N) || [], e = 0; e < n.length; e++) s = n[e], (i = (c.match(ct(s, t)) || [])[0]) && (0 < (o = c.substr(0, c.indexOf(i))).length && v(t).unusedInput.push(o), c = c.slice(c.indexOf(i) + i.length), d += i.length), Y[s] ? (i ? v(t).empty = !1 : v(t).unusedTokens.push(s), r = s, l = t, null != (a = i) && p(dt, r) && dt[r](a, l._a, l, r)) : t._strict && !i && v(t).unusedTokens.push(s);
                    v(t).charsLeftOver = u - d, 0 < c.length && v(t).unusedInput.push(c), t._a[vt] <= 12 && !0 === v(t).bigHour && 0 < t._a[vt] && (v(t).bigHour = void 0), v(t).parsedDateParts = t._a.slice(0), v(t).meridiem = t._meridiem, t._a[vt] = function(t, e, i) {
                        var n;
                        if (null == i) return e;
                        return null != t.meridiemHour ? t.meridiemHour(e, i) : (null != t.isPM && ((n = t.isPM(i)) && e < 12 && (e += 12), n || 12 !== e || (e = 0)), e)
                    }(t._locale, t._a[vt], t._meridiem), he(t), ue(t)
                } else Te(t);
            else _e(t)
        }

        function ke(t) {
            var e, i, n, s, o = t._i,
                r = t._f;
            return t._locale = t._locale || ce(t._l), null === o || void 0 === r && "" === o ? _({
                nullInput: !0
            }) : ("string" == typeof o && (t._i = o = t._locale.preparse(o)), x(o) ? new w(ue(o)) : (d(o) ? t._d = o : a(r) ? function(t) {
                var e, i, n, s, o;
                if (0 === t._f.length) return v(t).invalidFormat = !0, t._d = new Date(NaN);
                for (s = 0; s < t._f.length; s++) o = 0, e = b({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[s], Se(e), y(e) && (o += v(e).charsLeftOver, o += 10 * v(e).unusedTokens.length, v(e).score = o, (null == n || o < n) && (n = o, i = e));
                m(t, i || e)
            }(t) : r ? Se(t) : c(i = (e = t)._i) ? e._d = new Date(h.now()) : d(i) ? e._d = new Date(i.valueOf()) : "string" == typeof i ? (n = e, null === (s = ye.exec(n._i)) ? (_e(n), !1 === n._isValid && (delete n._isValid, Te(n), !1 === n._isValid && (delete n._isValid, h.createFromInputFallback(n)))) : n._d = new Date(+s[1])) : a(i) ? (e._a = f(i.slice(0), function(t) {
                return parseInt(t, 10)
            }), he(e)) : l(i) ? function(t) {
                if (!t._d) {
                    var e = L(t._i);
                    t._a = f([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function(t) {
                        return t && parseInt(t, 10)
                    }), he(t)
                }
            }(e) : u(i) ? e._d = new Date(i) : h.createFromInputFallback(e), y(t) || (t._d = null), t))
        }

        function Ce(t, e, i, n, s) {
            var o, r = {};
            return !0 !== i && !1 !== i || (n = i, i = void 0), (l(t) && function(t) {
                if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;
                var e;
                for (e in t)
                    if (t.hasOwnProperty(e)) return !1;
                return !0
            }(t) || a(t) && 0 === t.length) && (t = void 0), r._isAMomentObject = !0, r._useUTC = r._isUTC = s, r._l = i, r._i = t, r._f = e, r._strict = n, (o = new w(ue(ke(r))))._nextDay && (o.add(1, "d"), o._nextDay = void 0), o
        }

        function Pe(t, e, i, n) {
            return Ce(t, e, i, n, !1)
        }
        h.createFromInputFallback = i("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(t) {
            t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
        }), h.ISO_8601 = function() {}, h.RFC_2822 = function() {};
        var $e = i("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                var t = Pe.apply(null, arguments);
                return this.isValid() && t.isValid() ? t < this ? this : t : _()
            }),
            Me = i("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                var t = Pe.apply(null, arguments);
                return this.isValid() && t.isValid() ? this < t ? this : t : _()
            });

        function De(t, e) {
            var i, n;
            if (1 === e.length && a(e[0]) && (e = e[0]), !e.length) return Pe();
            for (i = e[0], n = 1; n < e.length; ++n) e[n].isValid() && !e[n][t](i) || (i = e[n]);
            return i
        }
        var Oe = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

        function Ae(t) {
            var e = L(t),
                i = e.year || 0,
                n = e.quarter || 0,
                s = e.month || 0,
                o = e.week || 0,
                r = e.day || 0,
                a = e.hour || 0,
                l = e.minute || 0,
                c = e.second || 0,
                u = e.millisecond || 0;
            this._isValid = function(t) {
                for (var e in t)
                    if (-1 === kt.call(Oe, e) || null != t[e] && isNaN(t[e])) return !1;
                for (var i = !1, n = 0; n < Oe.length; ++n)
                    if (t[Oe[n]]) {
                        if (i) return !1;
                        parseFloat(t[Oe[n]]) !== S(t[Oe[n]]) && (i = !0)
                    } return !0
            }(e), this._milliseconds = +u + 1e3 * c + 6e4 * l + 1e3 * a * 60 * 60, this._days = +r + 7 * o, this._months = +s + 3 * n + 12 * i, this._data = {}, this._locale = ce(), this._bubble()
        }

        function Ee(t) {
            return t instanceof Ae
        }

        function Le(t) {
            return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t)
        }

        function Re(t, i) {
            j(t, 0, 0, function() {
                var t = this.utcOffset(),
                    e = "+";
                return t < 0 && (t = -t, e = "-"), e + F(~~(t / 60), 2) + i + F(~~t % 60, 2)
            })
        }
        Re("Z", ":"), Re("ZZ", ""), lt("Z", ot), lt("ZZ", ot), ht(["Z", "ZZ"], function(t, e, i) {
            i._useUTC = !0, i._tzm = Fe(ot, t)
        });
        var Ie = /([\+\-]|\d\d)/gi;

        function Fe(t, e) {
            var i = (e || "").match(t);
            if (null === i) return null;
            var n = ((i[i.length - 1] || []) + "").match(Ie) || ["-", 0, 0],
                s = 60 * n[1] + S(n[2]);
            return 0 === s ? 0 : "+" === n[0] ? s : -s
        }

        function Ne(t, e) {
            var i, n;
            return e._isUTC ? (i = e.clone(), n = (x(t) || d(t) ? t.valueOf() : Pe(t).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + n), h.updateOffset(i, !1), i) : Pe(t).local()
        }

        function He(t) {
            return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
        }

        function ze() {
            return !!this.isValid() && (this._isUTC && 0 === this._offset)
        }
        h.updateOffset = function() {};
        var Ye = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
            je = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

        function Be(t, e) {
            var i, n, s, o = t,
                r = null;
            return Ee(t) ? o = {
                ms: t._milliseconds,
                d: t._days,
                M: t._months
            } : u(t) ? (o = {}, e ? o[e] = t : o.milliseconds = t) : (r = Ye.exec(t)) ? (i = "-" === r[1] ? -1 : 1, o = {
                y: 0,
                d: S(r[gt]) * i,
                h: S(r[vt]) * i,
                m: S(r[yt]) * i,
                s: S(r[_t]) * i,
                ms: S(Le(1e3 * r[bt])) * i
            }) : (r = je.exec(t)) ? (i = "-" === r[1] ? -1 : (r[1], 1), o = {
                y: We(r[2], i),
                M: We(r[3], i),
                w: We(r[4], i),
                d: We(r[5], i),
                h: We(r[6], i),
                m: We(r[7], i),
                s: We(r[8], i)
            }) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (s = function(t, e) {
                var i;
                if (!t.isValid() || !e.isValid()) return {
                    milliseconds: 0,
                    months: 0
                };
                e = Ne(e, t), t.isBefore(e) ? i = qe(t, e) : ((i = qe(e, t)).milliseconds = -i.milliseconds, i.months = -i.months);
                return i
            }(Pe(o.from), Pe(o.to)), (o = {}).ms = s.milliseconds, o.M = s.months), n = new Ae(o), Ee(t) && p(t, "_locale") && (n._locale = t._locale), n
        }

        function We(t, e) {
            var i = t && parseFloat(t.replace(",", "."));
            return (isNaN(i) ? 0 : i) * e
        }

        function qe(t, e) {
            var i = {
                milliseconds: 0,
                months: 0
            };
            return i.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(i.months, "M").isAfter(e) && --i.months, i.milliseconds = +e - +t.clone().add(i.months, "M"), i
        }

        function Ue(n, s) {
            return function(t, e) {
                var i;
                return null === e || isNaN(+e) || (P(s, "moment()." + s + "(period, number) is deprecated. Please use moment()." + s + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), i = t, t = e, e = i), Ve(this, Be(t = "string" == typeof t ? +t : t, e), n), this
            }
        }

        function Ve(t, e, i, n) {
            var s = e._milliseconds,
                o = Le(e._days),
                r = Le(e._months);
            t.isValid() && (n = null == n || n, r && Lt(t, $t(t, "Month") + r * i), o && Mt(t, "Date", $t(t, "Date") + o * i), s && t._d.setTime(t._d.valueOf() + s * i), n && h.updateOffset(t, o || r))
        }
        Be.fn = Ae.prototype, Be.invalid = function() {
            return Be(NaN)
        };
        var Xe = Ue(1, "add"),
            Ge = Ue(-1, "subtract");

        function Ze(t, e) {
            var i = 12 * (e.year() - t.year()) + (e.month() - t.month()),
                n = t.clone().add(i, "months");
            return -(i + (e - n < 0 ? (e - n) / (n - t.clone().add(i - 1, "months")) : (e - n) / (t.clone().add(i + 1, "months") - n))) || 0
        }

        function Qe(t) {
            var e;
            return void 0 === t ? this._locale._abbr : (null != (e = ce(t)) && (this._locale = e), this)
        }
        h.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", h.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
        var Je = i("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
            return void 0 === t ? this.localeData() : this.locale(t)
        });

        function Ke() {
            return this._locale
        }

        function ti(t, e) {
            j(0, [t, t.length], 0, e)
        }

        function ei(t, e, i, n, s) {
            var o;
            return null == t ? jt(this, n, s).year : ((o = Bt(t, n, s)) < e && (e = o), function(t, e, i, n, s) {
                var o = Yt(t, e, i, n, s),
                    r = Ht(o.year, 0, o.dayOfYear);
                return this.year(r.getUTCFullYear()), this.month(r.getUTCMonth()), this.date(r.getUTCDate()), this
            }.call(this, t, e, i, n, s))
        }
        j(0, ["gg", 2], 0, function() {
            return this.weekYear() % 100
        }), j(0, ["GG", 2], 0, function() {
            return this.isoWeekYear() % 100
        }), ti("gggg", "weekYear"), ti("ggggg", "weekYear"), ti("GGGG", "isoWeekYear"), ti("GGGGG", "isoWeekYear"), A("weekYear", "gg"), A("isoWeekYear", "GG"), I("weekYear", 1), I("isoWeekYear", 1), lt("G", nt), lt("g", nt), lt("GG", Z, U), lt("gg", Z, U), lt("GGGG", tt, X), lt("gggg", tt, X), lt("GGGGG", et, G), lt("ggggg", et, G), ft(["gggg", "ggggg", "GGGG", "GGGGG"], function(t, e, i, n) {
            e[n.substr(0, 2)] = S(t)
        }), ft(["gg", "GG"], function(t, e, i, n) {
            e[n] = h.parseTwoDigitYear(t)
        }), j("Q", 0, "Qo", "quarter"), A("quarter", "Q"), I("quarter", 7), lt("Q", q), ht("Q", function(t, e) {
            e[mt] = 3 * (S(t) - 1)
        }), j("D", ["DD", 2], "Do", "date"), A("date", "D"), I("date", 9), lt("D", Z), lt("DD", Z, U), lt("Do", function(t, e) {
            return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient
        }), ht(["D", "DD"], gt), ht("Do", function(t, e) {
            e[gt] = S(t.match(Z)[0])
        });
        var ii = Pt("Date", !0);
        j("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), A("dayOfYear", "DDD"), I("dayOfYear", 4), lt("DDD", K), lt("DDDD", V), ht(["DDD", "DDDD"], function(t, e, i) {
            i._dayOfYear = S(t)
        }), j("m", ["mm", 2], 0, "minute"), A("minute", "m"), I("minute", 14), lt("m", Z), lt("mm", Z, U), ht(["m", "mm"], yt);
        var ni = Pt("Minutes", !1);
        j("s", ["ss", 2], 0, "second"), A("second", "s"), I("second", 15), lt("s", Z), lt("ss", Z, U), ht(["s", "ss"], _t);
        var si, oi = Pt("Seconds", !1);
        for (j("S", 0, 0, function() {
                return ~~(this.millisecond() / 100)
            }), j(0, ["SS", 2], 0, function() {
                return ~~(this.millisecond() / 10)
            }), j(0, ["SSS", 3], 0, "millisecond"), j(0, ["SSSS", 4], 0, function() {
                return 10 * this.millisecond()
            }), j(0, ["SSSSS", 5], 0, function() {
                return 100 * this.millisecond()
            }), j(0, ["SSSSSS", 6], 0, function() {
                return 1e3 * this.millisecond()
            }), j(0, ["SSSSSSS", 7], 0, function() {
                return 1e4 * this.millisecond()
            }), j(0, ["SSSSSSSS", 8], 0, function() {
                return 1e5 * this.millisecond()
            }), j(0, ["SSSSSSSSS", 9], 0, function() {
                return 1e6 * this.millisecond()
            }), A("millisecond", "ms"), I("millisecond", 16), lt("S", K, q), lt("SS", K, U), lt("SSS", K, V), si = "SSSS"; si.length <= 9; si += "S") lt(si, it);

        function ri(t, e) {
            e[bt] = S(1e3 * ("0." + t))
        }
        for (si = "S"; si.length <= 9; si += "S") ht(si, ri);
        var ai = Pt("Milliseconds", !1);
        j("z", 0, 0, "zoneAbbr"), j("zz", 0, 0, "zoneName");
        var li = w.prototype;

        function ci(t) {
            return t
        }
        li.add = Xe, li.calendar = function(t, e) {
            var i = t || Pe(),
                n = Ne(i, this).startOf("day"),
                s = h.calendarFormat(this, n) || "sameElse",
                o = e && ($(e[s]) ? e[s].call(this, i) : e[s]);
            return this.format(o || this.localeData().calendar(s, this, Pe(i)))
        }, li.clone = function() {
            return new w(this)
        }, li.diff = function(t, e, i) {
            var n, s, o;
            if (!this.isValid()) return NaN;
            if (!(n = Ne(t, this)).isValid()) return NaN;
            switch (s = 6e4 * (n.utcOffset() - this.utcOffset()), e = E(e)) {
                case "year":
                    o = Ze(this, n) / 12;
                    break;
                case "month":
                    o = Ze(this, n);
                    break;
                case "quarter":
                    o = Ze(this, n) / 3;
                    break;
                case "second":
                    o = (this - n) / 1e3;
                    break;
                case "minute":
                    o = (this - n) / 6e4;
                    break;
                case "hour":
                    o = (this - n) / 36e5;
                    break;
                case "day":
                    o = (this - n - s) / 864e5;
                    break;
                case "week":
                    o = (this - n - s) / 6048e5;
                    break;
                default:
                    o = this - n
            }
            return i ? o : T(o)
        }, li.endOf = function(t) {
            return void 0 === (t = E(t)) || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
        }, li.format = function(t) {
            t || (t = this.isUtc() ? h.defaultFormatUtc : h.defaultFormat);
            var e = B(this, t);
            return this.localeData().postformat(e)
        }, li.from = function(t, e) {
            return this.isValid() && (x(t) && t.isValid() || Pe(t).isValid()) ? Be({
                to: this,
                from: t
            }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
        }, li.fromNow = function(t) {
            return this.from(Pe(), t)
        }, li.to = function(t, e) {
            return this.isValid() && (x(t) && t.isValid() || Pe(t).isValid()) ? Be({
                from: this,
                to: t
            }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
        }, li.toNow = function(t) {
            return this.to(Pe(), t)
        }, li.get = function(t) {
            return $(this[t = E(t)]) ? this[t]() : this
        }, li.invalidAt = function() {
            return v(this).overflow
        }, li.isAfter = function(t, e) {
            var i = x(t) ? t : Pe(t);
            return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = E(c(e) ? "millisecond" : e)) ? this.valueOf() > i.valueOf() : i.valueOf() < this.clone().startOf(e).valueOf())
        }, li.isBefore = function(t, e) {
            var i = x(t) ? t : Pe(t);
            return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = E(c(e) ? "millisecond" : e)) ? this.valueOf() < i.valueOf() : this.clone().endOf(e).valueOf() < i.valueOf())
        }, li.isBetween = function(t, e, i, n) {
            return ("(" === (n = n || "()")[0] ? this.isAfter(t, i) : !this.isBefore(t, i)) && (")" === n[1] ? this.isBefore(e, i) : !this.isAfter(e, i))
        }, li.isSame = function(t, e) {
            var i, n = x(t) ? t : Pe(t);
            return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = E(e || "millisecond")) ? this.valueOf() === n.valueOf() : (i = n.valueOf(), this.clone().startOf(e).valueOf() <= i && i <= this.clone().endOf(e).valueOf()))
        }, li.isSameOrAfter = function(t, e) {
            return this.isSame(t, e) || this.isAfter(t, e)
        }, li.isSameOrBefore = function(t, e) {
            return this.isSame(t, e) || this.isBefore(t, e)
        }, li.isValid = function() {
            return y(this)
        }, li.lang = Je, li.locale = Qe, li.localeData = Ke, li.max = Me, li.min = $e, li.parsingFlags = function() {
            return m({}, v(this))
        }, li.set = function(t, e) {
            if ("object" == typeof t)
                for (var i = function(t) {
                        var e = [];
                        for (var i in t) e.push({
                            unit: i,
                            priority: R[i]
                        });
                        return e.sort(function(t, e) {
                            return t.priority - e.priority
                        }), e
                    }(t = L(t)), n = 0; n < i.length; n++) this[i[n].unit](t[i[n].unit]);
            else if ($(this[t = E(t)])) return this[t](e);
            return this
        }, li.startOf = function(t) {
            switch (t = E(t)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                case "date":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
        }, li.subtract = Ge, li.toArray = function() {
            return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()]
        }, li.toObject = function() {
            return {
                years: this.year(),
                months: this.month(),
                date: this.date(),
                hours: this.hours(),
                minutes: this.minutes(),
                seconds: this.seconds(),
                milliseconds: this.milliseconds()
            }
        }, li.toDate = function() {
            return new Date(this.valueOf())
        }, li.toISOString = function(t) {
            if (!this.isValid()) return null;
            var e = !0 !== t,
                i = e ? this.clone().utc() : this;
            return i.year() < 0 || 9999 < i.year() ? B(i, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : $(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", B(i, "Z")) : B(i, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
        }, li.inspect = function() {
            if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
            var t = "moment",
                e = "";
            this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z");
            var i = "[" + t + '("]',
                n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                s = e + '[")]';
            return this.format(i + n + "-MM-DD[T]HH:mm:ss.SSS" + s)
        }, li.toJSON = function() {
            return this.isValid() ? this.toISOString() : null
        }, li.toString = function() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }, li.unix = function() {
            return Math.floor(this.valueOf() / 1e3)
        }, li.valueOf = function() {
            return this._d.valueOf() - 6e4 * (this._offset || 0)
        }, li.creationData = function() {
            return {
                input: this._i,
                format: this._f,
                locale: this._locale,
                isUTC: this._isUTC,
                strict: this._strict
            }
        }, li.year = Ct, li.isLeapYear = function() {
            return St(this.year())
        }, li.weekYear = function(t) {
            return ei.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
        }, li.isoWeekYear = function(t) {
            return ei.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
        }, li.quarter = li.quarters = function(t) {
            return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
        }, li.month = Rt, li.daysInMonth = function() {
            return Dt(this.year(), this.month())
        }, li.week = li.weeks = function(t) {
            var e = this.localeData().week(this);
            return null == t ? e : this.add(7 * (t - e), "d")
        }, li.isoWeek = li.isoWeeks = function(t) {
            var e = jt(this, 1, 4).week;
            return null == t ? e : this.add(7 * (t - e), "d")
        }, li.weeksInYear = function() {
            var t = this.localeData()._week;
            return Bt(this.year(), t.dow, t.doy)
        }, li.isoWeeksInYear = function() {
            return Bt(this.year(), 1, 4)
        }, li.date = ii, li.day = li.days = function(t) {
            if (!this.isValid()) return null != t ? this : NaN;
            var e, i, n = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != t ? (e = t, i = this.localeData(), t = "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = i.weekdaysParse(e)) ? e : null : parseInt(e, 10), this.add(t - n, "d")) : n
        }, li.weekday = function(t) {
            if (!this.isValid()) return null != t ? this : NaN;
            var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == t ? e : this.add(t - e, "d")
        }, li.isoWeekday = function(t) {
            if (!this.isValid()) return null != t ? this : NaN;
            if (null != t) {
                var e = (i = t, n = this.localeData(), "string" == typeof i ? n.weekdaysParse(i) % 7 || 7 : isNaN(i) ? null : i);
                return this.day(this.day() % 7 ? e : e - 7)
            }
            return this.day() || 7;
            var i, n
        }, li.dayOfYear = function(t) {
            var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return null == t ? e : this.add(t - e, "d")
        }, li.hour = li.hours = ee, li.minute = li.minutes = ni, li.second = li.seconds = oi, li.millisecond = li.milliseconds = ai, li.utcOffset = function(t, e, i) {
            var n, s = this._offset || 0;
            if (!this.isValid()) return null != t ? this : NaN;
            if (null != t) {
                if ("string" == typeof t) {
                    if (null === (t = Fe(ot, t))) return this
                } else Math.abs(t) < 16 && !i && (t *= 60);
                return !this._isUTC && e && (n = He(this)), this._offset = t, this._isUTC = !0, null != n && this.add(n, "m"), s !== t && (!e || this._changeInProgress ? Ve(this, Be(t - s, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, h.updateOffset(this, !0), this._changeInProgress = null)), this
            }
            return this._isUTC ? s : He(this)
        }, li.utc = function(t) {
            return this.utcOffset(0, t)
        }, li.local = function(t) {
            return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(He(this), "m")), this
        }, li.parseZone = function() {
            if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
            else if ("string" == typeof this._i) {
                var t = Fe(st, this._i);
                null != t ? this.utcOffset(t) : this.utcOffset(0, !0)
            }
            return this
        }, li.hasAlignedHourOffset = function(t) {
            return !!this.isValid() && (t = t ? Pe(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0)
        }, li.isDST = function() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        }, li.isLocal = function() {
            return !!this.isValid() && !this._isUTC
        }, li.isUtcOffset = function() {
            return !!this.isValid() && this._isUTC
        }, li.isUtc = ze, li.isUTC = ze, li.zoneAbbr = function() {
            return this._isUTC ? "UTC" : ""
        }, li.zoneName = function() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        }, li.dates = i("dates accessor is deprecated. Use date instead.", ii), li.months = i("months accessor is deprecated. Use month instead", Rt), li.years = i("years accessor is deprecated. Use year instead", Ct), li.zone = i("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(t, e) {
            return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
        }), li.isDSTShifted = i("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
            if (!c(this._isDSTShifted)) return this._isDSTShifted;
            var t = {};
            if (b(t, this), (t = ke(t))._a) {
                var e = t._isUTC ? g(t._a) : Pe(t._a);
                this._isDSTShifted = this.isValid() && 0 < r(t._a, e.toArray())
            } else this._isDSTShifted = !1;
            return this._isDSTShifted
        });
        var ui = D.prototype;

        function di(t, e, i, n) {
            var s = ce(),
                o = g().set(n, e);
            return s[i](o, t)
        }

        function hi(t, e, i) {
            if (u(t) && (e = t, t = void 0), t = t || "", null != e) return di(t, e, i, "month");
            var n, s = [];
            for (n = 0; n < 12; n++) s[n] = di(t, n, i, "month");
            return s
        }

        function fi(t, e, i, n) {
            "boolean" == typeof t ? u(e) && (i = e, e = void 0) : (e = t, t = !1, u(i = e) && (i = e, e = void 0)), e = e || "";
            var s, o = ce(),
                r = t ? o._week.dow : 0;
            if (null != i) return di(e, (i + r) % 7, n, "day");
            var a = [];
            for (s = 0; s < 7; s++) a[s] = di(e, (s + r) % 7, n, "day");
            return a
        }
        ui.calendar = function(t, e, i) {
            var n = this._calendar[t] || this._calendar.sameElse;
            return $(n) ? n.call(e, i) : n
        }, ui.longDateFormat = function(t) {
            var e = this._longDateFormat[t],
                i = this._longDateFormat[t.toUpperCase()];
            return e || !i ? e : (this._longDateFormat[t] = i.replace(/MMMM|MM|DD|dddd/g, function(t) {
                return t.slice(1)
            }), this._longDateFormat[t])
        }, ui.invalidDate = function() {
            return this._invalidDate
        }, ui.ordinal = function(t) {
            return this._ordinal.replace("%d", t)
        }, ui.preparse = ci, ui.postformat = ci, ui.relativeTime = function(t, e, i, n) {
            var s = this._relativeTime[i];
            return $(s) ? s(t, e, i, n) : s.replace(/%d/i, t)
        }, ui.pastFuture = function(t, e) {
            var i = this._relativeTime[0 < t ? "future" : "past"];
            return $(i) ? i(e) : i.replace(/%s/i, e)
        }, ui.set = function(t) {
            var e, i;
            for (i in t) $(e = t[i]) ? this[i] = e : this["_" + i] = e;
            this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
        }, ui.months = function(t, e) {
            return t ? a(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || Ot).test(e) ? "format" : "standalone"][t.month()] : a(this._months) ? this._months : this._months.standalone
        }, ui.monthsShort = function(t, e) {
            return t ? a(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[Ot.test(e) ? "format" : "standalone"][t.month()] : a(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
        }, ui.monthsParse = function(t, e, i) {
            var n, s, o;
            if (this._monthsParseExact) return function(t, e, i) {
                var n, s, o, r = t.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) o = g([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(o, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(o, "").toLocaleLowerCase();
                return i ? "MMM" === e ? -1 !== (s = kt.call(this._shortMonthsParse, r)) ? s : null : -1 !== (s = kt.call(this._longMonthsParse, r)) ? s : null : "MMM" === e ? -1 !== (s = kt.call(this._shortMonthsParse, r)) ? s : -1 !== (s = kt.call(this._longMonthsParse, r)) ? s : null : -1 !== (s = kt.call(this._longMonthsParse, r)) ? s : -1 !== (s = kt.call(this._shortMonthsParse, r)) ? s : null
            }.call(this, t, e, i);
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
                if (s = g([2e3, n]), i && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(s, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$", "i")), i || this._monthsParse[n] || (o = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[n] = new RegExp(o.replace(".", ""), "i")), i && "MMMM" === e && this._longMonthsParse[n].test(t)) return n;
                if (i && "MMM" === e && this._shortMonthsParse[n].test(t)) return n;
                if (!i && this._monthsParse[n].test(t)) return n
            }
        }, ui.monthsRegex = function(t) {
            return this._monthsParseExact ? (p(this, "_monthsRegex") || Nt.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (p(this, "_monthsRegex") || (this._monthsRegex = Ft), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
        }, ui.monthsShortRegex = function(t) {
            return this._monthsParseExact ? (p(this, "_monthsRegex") || Nt.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (p(this, "_monthsShortRegex") || (this._monthsShortRegex = It), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
        }, ui.week = function(t) {
            return jt(t, this._week.dow, this._week.doy).week
        }, ui.firstDayOfYear = function() {
            return this._week.doy
        }, ui.firstDayOfWeek = function() {
            return this._week.dow
        }, ui.weekdays = function(t, e) {
            return t ? a(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()] : a(this._weekdays) ? this._weekdays : this._weekdays.standalone
        }, ui.weekdaysMin = function(t) {
            return t ? this._weekdaysMin[t.day()] : this._weekdaysMin
        }, ui.weekdaysShort = function(t) {
            return t ? this._weekdaysShort[t.day()] : this._weekdaysShort
        }, ui.weekdaysParse = function(t, e, i) {
            var n, s, o;
            if (this._weekdaysParseExact) return function(t, e, i) {
                var n, s, o, r = t.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) o = g([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(o, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(o, "").toLocaleLowerCase();
                return i ? "dddd" === e ? -1 !== (s = kt.call(this._weekdaysParse, r)) ? s : null : "ddd" === e ? -1 !== (s = kt.call(this._shortWeekdaysParse, r)) ? s : null : -1 !== (s = kt.call(this._minWeekdaysParse, r)) ? s : null : "dddd" === e ? -1 !== (s = kt.call(this._weekdaysParse, r)) ? s : -1 !== (s = kt.call(this._shortWeekdaysParse, r)) ? s : -1 !== (s = kt.call(this._minWeekdaysParse, r)) ? s : null : "ddd" === e ? -1 !== (s = kt.call(this._shortWeekdaysParse, r)) ? s : -1 !== (s = kt.call(this._weekdaysParse, r)) ? s : -1 !== (s = kt.call(this._minWeekdaysParse, r)) ? s : null : -1 !== (s = kt.call(this._minWeekdaysParse, r)) ? s : -1 !== (s = kt.call(this._weekdaysParse, r)) ? s : -1 !== (s = kt.call(this._shortWeekdaysParse, r)) ? s : null
            }.call(this, t, e, i);
            for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
                if (s = g([2e3, 1]).day(n), i && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(s, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[n] || (o = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[n] = new RegExp(o.replace(".", ""), "i")), i && "dddd" === e && this._fullWeekdaysParse[n].test(t)) return n;
                if (i && "ddd" === e && this._shortWeekdaysParse[n].test(t)) return n;
                if (i && "dd" === e && this._minWeekdaysParse[n].test(t)) return n;
                if (!i && this._weekdaysParse[n].test(t)) return n
            }
        }, ui.weekdaysRegex = function(t) {
            return this._weekdaysParseExact ? (p(this, "_weekdaysRegex") || Zt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (p(this, "_weekdaysRegex") || (this._weekdaysRegex = Vt), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
        }, ui.weekdaysShortRegex = function(t) {
            return this._weekdaysParseExact ? (p(this, "_weekdaysRegex") || Zt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (p(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Xt), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
        }, ui.weekdaysMinRegex = function(t) {
            return this._weekdaysParseExact ? (p(this, "_weekdaysRegex") || Zt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (p(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Gt), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
        }, ui.isPM = function(t) {
            return "p" === (t + "").toLowerCase().charAt(0)
        }, ui.meridiem = function(t, e, i) {
            return 11 < t ? i ? "pm" : "PM" : i ? "am" : "AM"
        }, ae("en", {
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(t) {
                var e = t % 10;
                return t + (1 === S(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th")
            }
        }), h.lang = i("moment.lang is deprecated. Use moment.locale instead.", ae), h.langData = i("moment.langData is deprecated. Use moment.localeData instead.", ce);
        var pi = Math.abs;

        function mi(t, e, i, n) {
            var s = Be(e, i);
            return t._milliseconds += n * s._milliseconds, t._days += n * s._days, t._months += n * s._months, t._bubble()
        }

        function gi(t) {
            return t < 0 ? Math.floor(t) : Math.ceil(t)
        }

        function vi(t) {
            return 4800 * t / 146097
        }

        function yi(t) {
            return 146097 * t / 4800
        }

        function _i(t) {
            return function() {
                return this.as(t)
            }
        }
        var bi = _i("ms"),
            wi = _i("s"),
            xi = _i("m"),
            Ti = _i("h"),
            Si = _i("d"),
            ki = _i("w"),
            Ci = _i("M"),
            Pi = _i("y");

        function $i(t) {
            return function() {
                return this.isValid() ? this._data[t] : NaN
            }
        }
        var Mi = $i("milliseconds"),
            Di = $i("seconds"),
            Oi = $i("minutes"),
            Ai = $i("hours"),
            Ei = $i("days"),
            Li = $i("months"),
            Ri = $i("years");
        var Ii = Math.round,
            Fi = {
                ss: 44,
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            };
        var Ni = Math.abs;

        function Hi(t) {
            return (0 < t) - (t < 0) || +t
        }

        function zi() {
            if (!this.isValid()) return this.localeData().invalidDate();
            var t, e, i = Ni(this._milliseconds) / 1e3,
                n = Ni(this._days),
                s = Ni(this._months);
            e = T((t = T(i / 60)) / 60), i %= 60, t %= 60;
            var o = T(s / 12),
                r = s %= 12,
                a = n,
                l = e,
                c = t,
                u = i ? i.toFixed(3).replace(/\.?0+$/, "") : "",
                d = this.asSeconds();
            if (!d) return "P0D";
            var h = d < 0 ? "-" : "",
                f = Hi(this._months) !== Hi(d) ? "-" : "",
                p = Hi(this._days) !== Hi(d) ? "-" : "",
                m = Hi(this._milliseconds) !== Hi(d) ? "-" : "";
            return h + "P" + (o ? f + o + "Y" : "") + (r ? f + r + "M" : "") + (a ? p + a + "D" : "") + (l || c || u ? "T" : "") + (l ? m + l + "H" : "") + (c ? m + c + "M" : "") + (u ? m + u + "S" : "")
        }
        var Yi = Ae.prototype;
        return Yi.isValid = function() {
            return this._isValid
        }, Yi.abs = function() {
            var t = this._data;
            return this._milliseconds = pi(this._milliseconds), this._days = pi(this._days), this._months = pi(this._months), t.milliseconds = pi(t.milliseconds), t.seconds = pi(t.seconds), t.minutes = pi(t.minutes), t.hours = pi(t.hours), t.months = pi(t.months), t.years = pi(t.years), this
        }, Yi.add = function(t, e) {
            return mi(this, t, e, 1)
        }, Yi.subtract = function(t, e) {
            return mi(this, t, e, -1)
        }, Yi.as = function(t) {
            if (!this.isValid()) return NaN;
            var e, i, n = this._milliseconds;
            if ("month" === (t = E(t)) || "year" === t) return e = this._days + n / 864e5, i = this._months + vi(e), "month" === t ? i : i / 12;
            switch (e = this._days + Math.round(yi(this._months)), t) {
                case "week":
                    return e / 7 + n / 6048e5;
                case "day":
                    return e + n / 864e5;
                case "hour":
                    return 24 * e + n / 36e5;
                case "minute":
                    return 1440 * e + n / 6e4;
                case "second":
                    return 86400 * e + n / 1e3;
                case "millisecond":
                    return Math.floor(864e5 * e) + n;
                default:
                    throw new Error("Unknown unit " + t)
            }
        }, Yi.asMilliseconds = bi, Yi.asSeconds = wi, Yi.asMinutes = xi, Yi.asHours = Ti, Yi.asDays = Si, Yi.asWeeks = ki, Yi.asMonths = Ci, Yi.asYears = Pi, Yi.valueOf = function() {
            return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * S(this._months / 12) : NaN
        }, Yi._bubble = function() {
            var t, e, i, n, s, o = this._milliseconds,
                r = this._days,
                a = this._months,
                l = this._data;
            return 0 <= o && 0 <= r && 0 <= a || o <= 0 && r <= 0 && a <= 0 || (o += 864e5 * gi(yi(a) + r), a = r = 0), l.milliseconds = o % 1e3, t = T(o / 1e3), l.seconds = t % 60, e = T(t / 60), l.minutes = e % 60, i = T(e / 60), l.hours = i % 24, a += s = T(vi(r += T(i / 24))), r -= gi(yi(s)), n = T(a / 12), a %= 12, l.days = r, l.months = a, l.years = n, this
        }, Yi.clone = function() {
            return Be(this)
        }, Yi.get = function(t) {
            return t = E(t), this.isValid() ? this[t + "s"]() : NaN
        }, Yi.milliseconds = Mi, Yi.seconds = Di, Yi.minutes = Oi, Yi.hours = Ai, Yi.days = Ei, Yi.weeks = function() {
            return T(this.days() / 7)
        }, Yi.months = Li, Yi.years = Ri, Yi.humanize = function(t) {
            if (!this.isValid()) return this.localeData().invalidDate();
            var e, i, n, s, o, r, a, l, c, u, d, h = this.localeData(),
                f = (i = !t, n = h, s = Be(e = this).abs(), o = Ii(s.as("s")), r = Ii(s.as("m")), a = Ii(s.as("h")), l = Ii(s.as("d")), c = Ii(s.as("M")), u = Ii(s.as("y")), (d = o <= Fi.ss && ["s", o] || o < Fi.s && ["ss", o] || r <= 1 && ["m"] || r < Fi.m && ["mm", r] || a <= 1 && ["h"] || a < Fi.h && ["hh", a] || l <= 1 && ["d"] || l < Fi.d && ["dd", l] || c <= 1 && ["M"] || c < Fi.M && ["MM", c] || u <= 1 && ["y"] || ["yy", u])[2] = i, d[3] = 0 < +e, d[4] = n, function(t, e, i, n, s) {
                    return s.relativeTime(e || 1, !!i, t, n)
                }.apply(null, d));
            return t && (f = h.pastFuture(+this, f)), h.postformat(f)
        }, Yi.toISOString = zi, Yi.toString = zi, Yi.toJSON = zi, Yi.locale = Qe, Yi.localeData = Ke, Yi.toIsoString = i("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", zi), Yi.lang = Je, j("X", 0, 0, "unix"), j("x", 0, 0, "valueOf"), lt("x", nt), lt("X", /[+-]?\d+(\.\d{1,3})?/), ht("X", function(t, e, i) {
            i._d = new Date(1e3 * parseFloat(t, 10))
        }), ht("x", function(t, e, i) {
            i._d = new Date(S(t))
        }), h.version = "2.22.2", t = Pe, h.fn = li, h.min = function() {
            return De("isBefore", [].slice.call(arguments, 0))
        }, h.max = function() {
            return De("isAfter", [].slice.call(arguments, 0))
        }, h.now = function() {
            return Date.now ? Date.now() : +new Date
        }, h.utc = g, h.unix = function(t) {
            return Pe(1e3 * t)
        }, h.months = function(t, e) {
            return hi(t, e, "months")
        }, h.isDate = d, h.locale = ae, h.invalid = _, h.duration = Be, h.isMoment = x, h.weekdays = function(t, e, i) {
            return fi(t, e, i, "weekdays")
        }, h.parseZone = function() {
            return Pe.apply(null, arguments).parseZone()
        }, h.localeData = ce, h.isDuration = Ee, h.monthsShort = function(t, e) {
            return hi(t, e, "monthsShort")
        }, h.weekdaysMin = function(t, e, i) {
            return fi(t, e, i, "weekdaysMin")
        }, h.defineLocale = le, h.updateLocale = function(t, e) {
            if (null != e) {
                var i, n, s = ie;
                null != (n = re(t)) && (s = n._config), (i = new D(e = M(s, e))).parentLocale = ne[t], ne[t] = i, ae(t)
            } else null != ne[t] && (null != ne[t].parentLocale ? ne[t] = ne[t].parentLocale : null != ne[t] && delete ne[t]);
            return ne[t]
        }, h.locales = function() {
            return n(ne)
        }, h.weekdaysShort = function(t, e, i) {
            return fi(t, e, i, "weekdaysShort")
        }, h.normalizeUnits = E, h.relativeTimeRounding = function(t) {
            return void 0 === t ? Ii : "function" == typeof t && (Ii = t, !0)
        }, h.relativeTimeThreshold = function(t, e) {
            return void 0 !== Fi[t] && (void 0 === e ? Fi[t] : (Fi[t] = e, "s" === t && (Fi.ss = e - 1), !0))
        }, h.calendarFormat = function(t, e) {
            var i = t.diff(e, "days", !0);
            return i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse"
        }, h.prototype = li, h.HTML5_FMT = {
            DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
            DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
            DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
            DATE: "YYYY-MM-DD",
            TIME: "HH:mm",
            TIME_SECONDS: "HH:mm:ss",
            TIME_MS: "HH:mm:ss.SSS",
            WEEK: "YYYY-[W]WW",
            MONTH: "YYYY-MM"
        }, h
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
    }(function(h) {
        var f, p, t = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            e = "onwheel" in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            m = Array.prototype.slice;
        if (h.event.fixHooks)
            for (var i = t.length; i;) h.event.fixHooks[t[--i]] = h.event.mouseHooks;
        var g = h.event.special.mousewheel = {
            version: "3.1.12",
            setup: function() {
                if (this.addEventListener)
                    for (var t = e.length; t;) this.addEventListener(e[--t], n, !1);
                else this.onmousewheel = n;
                h.data(this, "mousewheel-line-height", g.getLineHeight(this)), h.data(this, "mousewheel-page-height", g.getPageHeight(this))
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var t = e.length; t;) this.removeEventListener(e[--t], n, !1);
                else this.onmousewheel = null;
                h.removeData(this, "mousewheel-line-height"), h.removeData(this, "mousewheel-page-height")
            },
            getLineHeight: function(t) {
                var e = h(t),
                    i = e["offsetParent" in h.fn ? "offsetParent" : "parent"]();
                return i.length || (i = h("body")), parseInt(i.css("fontSize"), 10) || parseInt(e.css("fontSize"), 10) || 16
            },
            getPageHeight: function(t) {
                return h(t).height()
            },
            settings: {
                adjustOldDeltas: !0,
                normalizeOffset: !0
            }
        };

        function n(t) {
            var e, i = t || window.event,
                n = m.call(arguments, 1),
                s = 0,
                o = 0,
                r = 0,
                a = 0,
                l = 0;
            if ((t = h.event.fix(i)).type = "mousewheel", "detail" in i && (r = -1 * i.detail), "wheelDelta" in i && (r = i.wheelDelta), "wheelDeltaY" in i && (r = i.wheelDeltaY), "wheelDeltaX" in i && (o = -1 * i.wheelDeltaX), "axis" in i && i.axis === i.HORIZONTAL_AXIS && (o = -1 * r, r = 0), s = 0 === r ? o : r, "deltaY" in i && (s = r = -1 * i.deltaY), "deltaX" in i && (o = i.deltaX, 0 === r && (s = -1 * o)), 0 !== r || 0 !== o) {
                if (1 === i.deltaMode) {
                    var c = h.data(this, "mousewheel-line-height");
                    s *= c, r *= c, o *= c
                } else if (2 === i.deltaMode) {
                    var u = h.data(this, "mousewheel-page-height");
                    s *= u, r *= u, o *= u
                }
                if (e = Math.max(Math.abs(r), Math.abs(o)), (!p || e < p) && y(i, p = e) && (p /= 40), y(i, e) && (s /= 40, o /= 40, r /= 40), s = Math[1 <= s ? "floor" : "ceil"](s / p), o = Math[1 <= o ? "floor" : "ceil"](o / p), r = Math[1 <= r ? "floor" : "ceil"](r / p), g.settings.normalizeOffset && this.getBoundingClientRect) {
                    var d = this.getBoundingClientRect();
                    a = t.clientX - d.left, l = t.clientY - d.top
                }
                return t.deltaX = o, t.deltaY = r, t.deltaFactor = p, t.offsetX = a, t.offsetY = l, t.deltaMode = 0, n.unshift(t, s, o, r), f && clearTimeout(f), f = setTimeout(v, 200), (h.event.dispatch || h.event.handle).apply(this, n)
            }
        }

        function v() {
            p = null
        }

        function y(t, e) {
            return g.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
        }
        h.fn.extend({
            mousewheel: function(t) {
                return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
            },
            unmousewheel: function(t) {
                return this.unbind("mousewheel", t)
            }
        })
    });
var scrollDirection, productsHorizontalSlider = $(".products-items-list"),
    productsVerticalSlider = $(".products-options-list"),
    productsDescriptionSlider = $(".products-description-list"),
    enableMoveSlider = !0,
    nextSlideMove = !0,
    moveParallax = !0,
    previousScroll = 0,
    move = !1;

function hidePreloaderInterface() {
    $(".load-interface-page").addClass("hidden"), showInnerPageElements(), $("#current-product").removeClass("pause"), setTimeout(function() {
        $(".load-interface-page").remove()
    }, 2e3)
}

function fixedMainLogo() {
    $(".main-logo").addClass("fixed-left"), setTimeout(function() {
        $(".main-logo").addClass("fixed-width")
    }, 2e3)
}

function showInnerPageElements() {
    $("#wrapper").removeClass("load-data preload-data"), $(".load-preview-wrap, .header").removeClass("load-data")
}

function preLoadproductMarkOption() {
    $(".option-product-item").removeClass("load-product-preview current-product loaded").removeAttr("id"), $(".option-product-item.slick-current").addClass("current-product"), setTimeout(loadproductMarkOption, 200)
}

function loadproductMarkOption() {
    $(".option-product-item.slick-current.current-product").addClass("load-product-preview").attr("id", "current-product"), goToNextproduct()
}

function goToNextproduct() {
    document.getElementById("current-product").addEventListener("webkitAnimationEnd", function() {
        productsHorizontalSlider.slick("slickNext"), productsVerticalSlider.slick("slickNext"), productsDescriptionSlider.slick("slickNext")
    }), document.getElementById("current-product").addEventListener("animationend", function() {
        productsHorizontalSlider.slick("slickNext"), productsVerticalSlider.slick("slickNext"), productsDescriptionSlider.slick("slickNext")
    })
}

function setOprionsSliderWidth() {
    var e = 0;
    $(".option-product-item .title-1").each(function() {
        var t = $(this);
        t.width() >= e && (e = t.width() + 30)
    }), $(".products-options-list-wrap").width(e)
}

function stopAllEvents() {
    $(".option-product-item.slick-current").addClass("pause")
}

function crossproductOfPage(e) {
    $(".cross-product-item").each(function() {
        var t = $(this);
        Math.min(0, $(t).offset().top - e - $(window).height());
        t[0] && t.offset().top - e < $(window).height() && t.find(".scrollRoadAnimation").removeClass("scrollRoadAnimation")
    })
}

function showElementOnScroll(e) {
    $(".scrollAnimateItem").each(function() {
        var t = $(this);
        $(t)[0] && $(t).offset().top - e < $(window).height() ? t.removeClass("hideOnScroll") : $(t)[0] && $(t).offset().top - e > $(window).height() && t.addClass("hideOnScroll")
    })
}

function moveScrollParallaxFromRight(i) {
    992 <= $(window).width() && $(".scroll-parallax.move-from-right").each(function() {
        var t = $(this),
            e = Math.min(0, $(t).offset().top - i - $(window).height());
        $(t)[0] && $(t).offset().top - i < $(window).height() && t.css({
            transform: "translate(0," + Math.min(78, Math.abs(e) / 80) + "%)"
        })
    })
}

function goToNextPage(t) {
    var e = parseInt(Math.round($("#wrapper").outerHeight())),
        i = parseInt(Math.round(t + $(window).height())),
        n = document.getElementById("next-title"),
        s = document.getElementById("next-title-2"),
        o = document.getElementById("next-title-3");
    $(n)[0] && e <= i + $(window).height() / 8 ? ($(n).addClass("start-change"), n.addEventListener("webkitAnimationEnd", function() {
        n.click()
    }), n.addEventListener("animationend", function() {
        n.click()
    })) : $(".next-page-title").removeClass("start-change"), $(s)[0] && e <= i + $(window).height() / 8 && $(s).closest(".tab-content").is(":visible") && ($(s).addClass("start-change"), s.addEventListener("webkitAnimationEnd", function() {
        s.click()
    }), s.addEventListener("animationend", function() {
        s.click()
    })), $(o)[0] && e <= i + $(window).height() / 8 && $(o).closest(".tab-content").is(":visible") && ($(o).addClass("start-change"), o.addEventListener("webkitAnimationEnd", function() {
        o.click()
    }), o.addEventListener("animationend", function() {
        o.click()
    }))
}

function changeTabContent(t, e) {
    $(".tab-btn").removeClass("active"), $('.tab-btn[data-tab="' + t + '"]').addClass("active"), $(".load-about-preview").addClass("active"), $(".about-page-theme, .header").addClass("start-load"), setTimeout(function() {
        $(".about-page-theme, .header").removeClass("start-load").addClass("finished-load")
    }, 500), setTimeout(function() {
        $(".load-about-preview").removeClass("bottom active").addClass("top"), $(".about-page-theme, .header").removeClass("finished-load"), $(".tab-content").hide(), $('.tab-content[data-tab="' + t + '"]').show(), e.addClass("active"), $('.tab-btn[data-tab="introduction"]').hasClass("active") && $(".popup").addClass("white-theme"), $('.tab-btn[data-tab="press"]').hasClass("active") && $(".popup").removeClass("white-theme"), $('.tab-btn[data-tab="Events"]').hasClass("active") ? ($(".about-page-theme, .header").addClass("black-theme"), $(".popup").addClass("white-theme")) : ($(".popup").removeClass("white-theme"), $(".about-page-theme, .header").removeClass("black-theme"))
    }, 1200), setTimeout(function() {
        $(".load-about-preview").removeClass("top").addClass("bottom"), $(".cross-product-item  img").addClass("scrollRoadAnimation")
    }, 2e3)
}

function changeHistoryDescription(t) {
    $(".history-description-wrap").slick("slickGoTo", t - 1)
}

function rideDoubleproducts(e) {
    $(".product-content-section.theme-1 .parallax-item.move-from-left").each(function() {
        var t = $(this);
        $(t)[0] && $(t).offset().top - e < $(window).height() / 12 ? t.css({
            left: "220vw"
        }) : e <= 0 && t.css({
            left: "0"
        }).removeClass("fixed-left")
    }), $(".product-content-section.theme-1 .parallax-item.move-from-right").each(function() {
        var t = $(this);
        $(t)[0] && $(t).offset().top - e < $(window).height() / 1.5 ? t.css({
            right: "0"
        }) : e <= 0 && t.css({
            right: "-200vw"
        }), 2 * $(t).offset().top < e && $(".product-content-section.theme-1 .parallax-item.move-from-left").addClass("fixed-left")
    })
}

function setAboutParallaxproduct() {
    $(".about-some-inf.black-theme .parallax-item");
    $(window).width()
}

function loadOnScrollBorderTitle(i) {
    $(".border-title").each(function() {
        var t = $(this),
            e = Math.min(0, $(t).offset().top - i - $(window).height());
        $(t)[0] && $(t).offset().top - i < $(window).height() / 2 ? t.css({
            "background-size": Math.min(100, Math.abs(e) / 6) + "% 100%"
        }) : $(t)[0] && $(t).offset().top - i > $(window).height() / 2 && t.css({
            "background-size": Math.min(100, Math.abs(e) / 6) + "% 100%"
        })
    })
}

function moveOnScroll(a) {
    991 < $(window).width() && $(".moveOnScroll").each(function() {
        var t = $(this),
            e = $(t).closest(".row, .technical-block").find(".moveRelative-element"),
            i = $(t).height(),
            n = $(e).height();
        if ($(".lock-parallax-move")[0]) {
            var s = $(".lock-parallax-move");
            Math.min(0, $(s).offset().top - a - $(window).height())
        }
        var o = t.attr("data-speed-move"),
            r = Math.min(0, $(t).offset().top - a - $(window).height());
        $(s)[0] && $(s).offset().top - a < $(window).height() ? move = !1 : $(s)[0] && $(s).offset().top - a > $(window).height() && (move = !0), $(t)[0] && $(t).offset().top - a < $(window).height() && move && e[0] && i < n && t.css({
            transform: "translate(0," + Math.abs(r / (2 * o)) + "%)"
        })
    })
}

function moveOnScrollSingleproduct(o) {
    991 < $(window).width() && $(".product-content-section.theme-4 .move-from-right").each(function() {
        var t = $(this),
            e = $(".lock-parallax-move"),
            i = t.height(),
            n = t.offset().top,
            s = e.offset().top;
        $(window).height() > t.height() && ($(window).height() > s - o ? t.css({
            transform: "translate(0, -" + ($(window).height() - (s - o)) + "px)"
        }) : t.css({
            transform: "translate(0,0)"
        })), $(window).height() < t.height() && ($(t)[0] && $(t).offset().top - o < $(window).height() && t.css({
            "margin-top": Math.abs(.04 * o) + "%",
            position: "absolute",
            top: "-6.8vmax"
        }), $(e)[0] && $(e).offset().top - o < $(window).height() ? t.css({
            transform: "translate(0, -" + Math.abs(.1 * ($(e).offset().top - o - $(window).height())) + "%)"
        }) : t.css({
            transform: "translate(0,0)"
        })), console.log(n + i, s, s - o)
    })
}

function productPositionInSlide() {
    var i = [];
    $(".product-overlay").each(function() {
        var t = $(this),
            e = (t.find("img"), parseInt(t.outerWidth()));
        parseInt($(window).width());
        i.push(e)
    });
    var t = getMaxValue(i);
    $(".products-items-list-wrap").css({
        width: t + "px",
        left: "" + parseInt($(window).width() / 2) - t / 2 + "px"
    })
}

function getMaxValue(t) {
    for (var e = t[0], i = 0; i < t.length; i++) e < t[i] && (e = t[i]);
    return e
}

function hideCurrentFromLeftToRight() {
    var t = $(".product-item.slick-current");
    if (t.next(".product-item")[0]) var e = t.next(".product-item");
    else e = $(".product-item").eq(0);
    t.addClass("show"), t.removeClass("hideCurrentFromRightToLeft").addClass("hideCurrentFromLeftToRight"), e.addClass("hideCurrentFromRightToLeft push-right"), setTimeout(function() {
        $(".product-item").removeClass("hideCurrentFromRightToLeft push-right")
    }, 300), setTimeout(function() {
        $(".product-item").removeClass("hideCurrentFromLeftToRight show")
    }, 500)
}

function hideCurrentFromRightToLeft() {
    var t = $(".product-item.slick-current");
    if (t.prev(".product-item")[0]) var e = t.prev(".product-item");
    else e = $(".product-item").last();
    t.addClass("show"), t.removeClass("hideCurrentFromLeftToRight-prev fixed-right").addClass("hideCurrentFromRightToLeft-prev"), e.addClass("hideCurrentFromLeftToRight-prev push-right fixed-right"), setTimeout(function() {
        $(".product-item").removeClass("hideCurrentFromLeftToRight-prev push-right")
    }, 300), setTimeout(function() {
        $(".product-item").removeClass("hideCurrentFromRightToLeft-prev show")
    }, 500)
}

function focusinInput() {
    $(".input-container").each(function() {
        var t = $(this).find("input, textarea, select");
        0 != t.val().length ? $(t).closest(".input-container").addClass("focus") : $(t).closest(".input-container").removeClass("focus")
    })
}

function disableScroll() {}

function availableScroll() {}

function successfullySubmit() {
    var t = $(".popup");
    t.addClass("successfully"), setTimeout(function() {
        t.find("input, textarea").val("")
    }, 2e3), setTimeout(function() {
        t.removeClass("successfully")
    }, 5e3)
}

function openMainMenu() {
    $(".main-menu").addClass("active")
}

function closeMainMenu() {
    $(".main-menu").removeClass("active")
}

function getEventsItemDate() {
    $(".event-item").each(function() {
        var t = $(this),
            e = t.find(".date-year").html(),
            i = t.find(".date-month").html(),
            n = t.find(".date-day").html();
        i.indexOf(0) || (i = String(i).slice(-1)), n.indexOf(0) || (n = String(n).slice(-1)), t.attr({
            "data-year": e,
            "data-month": i,
            "data-day": n,
            "data-string": new Date(e, i, n).getTime()
        })
    })
}

function getDateFilter() {
    var e = "",
        i = "",
        s = (new Date).getFullYear(),
        o = (new Date).getMonth() + 1,
        t = (new Date).getDate(),
        n = new Date(s, o, t).getTime(),
        r = moment().startOf("week").toDate(),
        a = moment().endOf("week").toDate(),
        l = r.getDate(),
        c = a.getDate();
    switch ($(".event-item").show(), $('.filter-check[name="shot-date"]:checked').each(function() {
            var t = $(this);
            e = t.val()
        }), $('.filter-check[name="long-date"]:checked').each(function() {
            var t = $(this);
            i = t.val()
        }), e) {
        case "all":
            $(".event-item").removeClass("hidden");
            break;
        case "this-week":
            $(".event-item").addClass("hidden"), $(".event-item").each(function() {
                var t = $(this),
                    e = t.attr("data-day"),
                    i = t.attr("data-month"),
                    n = t.attr("data-year");
                l <= e && e <= c && i == o && n == s && t.removeClass("hidden")
            });
            break;
        case "this-month":
            $(".event-item").removeClass("hidden"), $(".event-item").each(function() {
                var t = $(this),
                    e = t.attr("data-month"),
                    i = t.attr("data-year");
                e == o && i == s || t.addClass("hidden")
            })
    }
    switch (i) {
        case "future":
            $(".event-item").hide(), $(".event-item").each(function() {
                var t = $(this),
                    e = t.attr("data-string");
                n <= e && t.show()
            });
            break;
        case "past":
            $(".event-item").hide(), $(".event-item").each(function() {
                var t = $(this);
                t.attr("data-string") < n && t.show()
            })
    }
}

function showRandomPreloadproducts() {
    console.log("loaded"), $(".preload-product-item.active").each(function(t) {
        setTimeout(function() {
            $(".preload-product-item").eq(t).css("opacity", 1)
        }, 500 * (t + 1))
    })
}

function setSelectproductsWidth() {
    $(".select-product-item").each(function() {
        $(this).css("width", $(this).width())
    })
}

function validateString(t) {
    return !/^[0-9]+$/.test(t)
}

function validateEmail(t) {
    return !!/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(t)
}

function setCursorImage() {
    $(".slide-item.slick-current").prev(".slide-item").mousemove(function() {
        $(this).css({
            cursor: "url(../img/icons/scroll_left.png), auto"
        })
    }), $(".slide-item.slick-current").next(".slide-item").mousemove(function() {
        $(this).css({
            cursor: "url(../img/icons/scroll_right.png), auto"
        })
    }), $(".slide-item.slick-current a").mousemove(function() {
        $(this).css({
            cursor: "url(../img/icons/scroll_scale.png), auto"
        })
    })
}
$(document).ready(function() {
        $.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase()), $.browser.msie && ($(".load-interface-container").hide(), $(".load-interface-container.blocked-browser").show()), $("[data-fancybox]").fancybox({
            buttons: ["close"],
            transitionEffect: "fade",
            transitionDuration: 300,
            loop: !0
        }), $(".load-interface-page")[0] && showRandomPreloadproducts(), productsVerticalSlider.slick({
            infinite: !0,
            arrows: !1,
            dots: !1,
            vertical: !0,
            adaptiveHeight: !0,
            useTransform: !1,
            slidesToShow: 8,
            slidesToScroll: 1,
            centerMode: !0,
            cssEase: "cubic-bezier(0.6, 0.1, 0.15, 1)",
            speed: 800,
            centerPadding: "33.7vh",
            autoplay: !1,
            autoplaySpeed: 6500,
            pauseOnHover: !1,
            draggable: !1,
            touchMove: !1,
            swipe: !1,
            pauseOnFocus: !1,
            accessibility: !1,
            responsive: [{
                breakpoint: 1025,
                settings: {
                    speed: 1e3,
                    centerPadding: "0",
                    vertical: !1,
                    slidesToShow: 1,
                    variableWidth: !0
                }
            }]
        }).on("afterChange", function(t, e, i, n) {
            preLoadproductMarkOption(), setTimeout(loadproductMarkOption, 200), enableMoveSlider = !1, setTimeout(function() {
                enableMoveSlider = !0
            }, 700)
        }).on("beforeChange", function() {
            $(".option-product-item.slick-current").addClass("loaded")
        }), productsHorizontalSlider.slick({
            infinite: !0,
            arrows: !1,
            dots: !1,
            adaptiveHeight: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: !0,
            centerMode: !0,
            cssEase: "cubic-bezier(.4,0,.2,1)",
            speed: 1e3,
            variableWidth: !1,
            autoplay: !1,
            autoplaySpeed: 6500,
            pauseOnHover: !1,
            useTransform: !1,
            draggable: !1,
            touchMove: !1,
            swipe: !1,
            pauseOnFocus: !1,
            accessibility: !1,
            responsive: [{
                breakpoint: 1025,
                settings: {
                    variableWidth: !1,
                    speed: 1e3
                }
            }]
        }), productsDescriptionSlider.slick({
            infinite: !0,
            arrows: !1,
            dots: !1,
            adaptiveHeight: 1,
            slidesToShow: 1,
            cssEase: "linear",
            speed: 1e3,
            autoplay: !1,
            autoplaySpeed: 6500,
            pauseOnHover: !1,
            fade: !0,
            useTransform: !1,
            draggable: !1,
            touchMove: !1,
            swipe: !1,
            pauseOnFocus: !1,
            accessibility: !1,
            responsive: [{
                breakpoint: 1025,
                settings: {
                    speed: 1e3,
                    adaptiveHeight: !1
                }
            }]
        }).on("beforeChange", function() {
            $(".product-description-item.slick-current").addClass("hide-for-finished")
        }).on("afterChange", function() {
            $(".product-description-item").removeClass("hide-for-finished")
        }), 1024 < $(window).width() && $(".option-product-item .title-1, .product-item, .products-description-list-wrap").bind("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(t) {
            t.preventDefault(), 0 < t.deltaY && enableMoveSlider ? (nextSlideMove = !1, productsHorizontalSlider.slick("slickPrev"), productsVerticalSlider.slick("slickPrev"), productsDescriptionSlider.slick("slickPrev")) : t.deltaY < 0 && enableMoveSlider && (nextSlideMove = !0, productsHorizontalSlider.slick("slickNext"), productsVerticalSlider.slick("slickNext"), productsDescriptionSlider.slick("slickNext"))
        }), $(".product-item").on("swipe", function(t, e, i) {
            1 !== e && 1 !== i || (nextSlideMove = !0, productsHorizontalSlider.slick("slickNext"), productsVerticalSlider.slick("slickNext"), productsDescriptionSlider.slick("slickNext")), -1 !== e && -1 !== i || (nextSlideMove = !1, productsHorizontalSlider.slick("slickPrev"), productsVerticalSlider.slick("slickPrev"), productsDescriptionSlider.slick("slickPrev"))
        }), $(".option-product-item").on("swipe", function(t, e, i) {
            1 === e && (nextSlideMove = !0, productsHorizontalSlider.slick("slickNext"), productsVerticalSlider.slick("slickNext"), productsDescriptionSlider.slick("slickNext")), -1 === e && (nextSlideMove = !1, productsHorizontalSlider.slick("slickPrev"), productsVerticalSlider.slick("slickPrev"), productsDescriptionSlider.slick("slickPrev"))
        }), $(window).width() <= 1024 && $(".product-item").on("swipe", function(t, e, i) {
            1 === e && (nextSlideMove = !0, productsHorizontalSlider.slick("slickNext"), productsVerticalSlider.slick("slickNext"), productsDescriptionSlider.slick("slickNext")), -1 === e && (nextSlideMove = !1, productsHorizontalSlider.slick("slickPrev"), productsVerticalSlider.slick("slickPrev"), productsDescriptionSlider.slick("slickPrev"))
        }), $(".option-product-item .title-1").on("click", function() {
            var t = $(this).closest(".option-product-item").attr("data-slick-index"),
                e = $(this).text();
            $(this).closest(".option-product-item").hasClass("slick-current") ? $(".product-item.slick-current .animate-link").click() : ($(".product-item").each(function() {
                $(this).attr("data-product") == e && (t = $(this).attr("data-slick-index"))
            }), productsVerticalSlider.slick("slickGoTo", t), productsHorizontalSlider.slick("slickGoTo", t), productsDescriptionSlider.slick("slickGoTo", t))
        }), $(".animate-link").on("click", function(t) {
            if ($(this).attr("target") != '_blank' && $(this).attr("href").indexOf('javascript:void(0)') < 0) {
                t.preventDefault();
                var e = $(this).attr("href");
                stopAllEvents(), $(this).hasClass("to-inner-page") ? ($("#wrapper, .header").addClass("load-inner-page"), $(".preload-preview-wrap").addClass("load-data"), setTimeout(function() {
                    window.location.href = e
                }, 1e3)) : $(this).hasClass("product-oval-link") ? ($("#wrapper, .header").addClass("start-reload"), stopAllEvents(), setTimeout(function() {
                    window.location.href = e
                }, 1600)) : $(this).hasClass("logo") ? ($(".product-page-theme")[0] && $(".product-page-theme").addClass("preload-data"), setTimeout(function() {
                    window.location.href = e
                }, 1e3)) : $(this).hasClass("fadeOutTheme") ? ($("#wrapper").addClass("hideElements"), setTimeout(function() {
                    window.location.href = e
                }, 1200)) : $(this).hasClass("event-description") || $(this).hasClass("event-preview") ? ($(".load-about-preview").addClass("active"), $(".about-page-theme, .header").addClass("start-load"), setTimeout(function() {
                    window.location.href = e
                }, 1200)) : ($("#wrapper, .header").addClass("start-reload"), stopAllEvents(), setTimeout(function() {
                    window.location.href = e
                }, 1600))
            }
        }), $(".black-link").on("click", function() {
            $(".preload-preview-wrap.for-products").addClass("black-theme")
        }), $(".tab-btn").on("click", function() {
            var t = $(this),
                e = t.attr("data-tab");
            $(".tabs-list").offset().top;
            if (!e[0] || t.hasClass("active")) return !1;
            changeTabContent(e, t), t.hasClass("next-page-title") && (changeTabContent(e, t), setTimeout(function() {
                $("html, body").animate({
                    scrollTop: $(".main-menu").offset().top
                }, 200)
            }, 500))
        }), $(".history-period-date").on("click mouseenter", function() {
            var t = $(this),
                e = t.closest(".history-period").attr("data-slide");
            $(".history-period-date").removeClass("active"), t.addClass("active"), changeHistoryDescription(e)
        }), $(".open-contacts-data").on("click", function() {
            $(".product-detail-block").addClass("show-contacts-data"), $(".start-change")[0] ? $(".start-change").addClass("pause") : $(".start-change").removeClass("pause")
        }), $(".close-contacts-data-wrap").on("click", function() {
            $(".product-detail-block").removeClass("show-contacts-data"), $(".start-change")[0] && $(".start-change").removeClass("pause")
        }), focusinInput(), $(".input-item, .textarea-item").on("focus", function() {
            var t = $(this).closest(".input-container");
            focusinInput(), $(t).addClass("focus")
        }), $(".input-item, .textarea-item").on("focusout", function() {
            focusinInput()
        }), $(".open-popup").on("click", function(t) {
            t.preventDefault();
            var e = $(this).attr("href");
            $(e).addClass("active").removeClass("white-theme"), $(".close-popup").fadeIn(), disableScroll(), closeMainMenu(), $(".option-product-item")[0] && $("#current-product").addClass("pause"), $(".next-page-title")[0] && $(".next-page-title").addClass("pause"), "#products-modal" === e && setSelectproductsWidth()
        }), $(".close-popup-btn, .close-popup").on("click", function() {
            $(".popup").removeClass("active"), $(".close-popup").fadeOut(), availableScroll(), $(".next-page-title")[0] && $(".next-page-title").removeClass("pause"), $(".option-product-item")[0] && $("#current-product").addClass("pause")
        }), $(".language-selector").on("click mouseenter", function() {
            $(this).addClass("active")
        }).on("mouseleave", function() {
            $(".language-selector").removeClass("active")
        }), $(document).mouseup(function(t) {
            var e = $(".language-selector");
            e.is(t.target) || 0 !== e.has(t.target).length || $(".language-selector").removeClass("active")
        }), $(".toggle-menu-btn").on("click", function() {
            openMainMenu()
        }), $(".close-menu-btn").on("click", function() {
            closeMainMenu()
        }), $(window).width() < 768 && $(".drop-item").on("click", function() {
            var t = $(this),
                e = t.closest(".filters-list"),
                i = t.parent("li");
            t.hasClass("active") ? (t.removeClass("active"), e.find("li").not(i).slideUp()) : (t.addClass("active"), e.find("li").not(i).slideDown())
        }), $(".event-item, .press-item").each(function() {
            var t = $(this),
                e = t.attr("href");
            $(t).one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
                t.click(), window.open(e, "_blank")
            })
        }), $(".btn-control").on("click", function() {
            $(this).hasClass("btn-prev") ? (productsHorizontalSlider.slick("slickPrev"), productsVerticalSlider.slick("slickPrev"), productsDescriptionSlider.slick("slickPrev")) : (productsHorizontalSlider.slick("slickNext"), productsVerticalSlider.slick("slickNext"), productsDescriptionSlider.slick("slickNext"))
        }), $(".skip-preload").on("click", function(t) {
            t.preventDefault(), hidePreloaderInterface()
        }), $(".submit-btn").addClass("disabled"), $(document).on("keyup", "input", function() {
            $(".submit-btn").removeClass("disabled")
        }), $(document).on("keyup", 'input[name="name"]', function() {
            validateString($(this).val()) ? ($(this).closest(".input-container").removeClass("error"), $(".submit-btn").removeClass("disabled")) : ($(this).closest(".input-container").addClass("error"), $(".submit-btn").addClass("disabled"))
        }), $(document).on("keyup", 'input[type="tel"]', function() {
            var t = this;
            /\D/g.test(t.value) && (t.value = t.value.replace(/\D/g, ""), $(t).closest(".input-container").addClass("error")), setTimeout(function() {
                $(t).closest(".input-container").removeClass("error")
            }, 2e3)
        }), $(document).on("keyup", 'input[type="email"]', function() {
            var t = $(this).val();
            0 == $.trim(t).length && $(this).closest(".input-container").addClass("error"), validateEmail(t) ? $(this).closest(".input-container").removeClass("error") : $(this).closest(".input-container").addClass("error")
        }), $("#wrapper").hasClass("main-page") && ($(".logo").html('<img src="web/img/logo-eng.svg" class="black-logo" alt="Mittikala">'), console.log("append")), autosize($("textarea")), moveOnScroll($(window).scrollTop()), showElementOnScroll($(window).scrollTop())
    }), $(window).on("load", function() {
        $(".load-interface-page")[0] && $(".load-interface-page").is(":visible") && (setTimeout(hidePreloaderInterface, 5e3), setTimeout(function() {
            $(".main-page").addClass("load-data"), $("#current-product").addClass("pause")
        }, 500)), $("#wrapper").hasClass("main-page") && (preLoadproductMarkOption(), loadproductMarkOption(), productPositionInSlide(), 1024 < $(window).width() && setOprionsSliderWidth()), setTimeout(showInnerPageElements, 100), setAboutParallaxproduct(), moveOnScrollSingleproduct($(window).scrollTop()), $("img[data-src]").each(function() {
            $(this).attr("src", $(this).attr("data-src")).removeAttr("data-src")
        }), $(".product-page-carousel").slick({
            infinite: !0,
            arrows: !1,
            dots: !1,
            adaptiveHeight: !1,
            variableWidth: !0,
            slidesToShow: 1,
            slidesToScroll: 1,
            cssEase: "ease-in-out",
            speed: 500,
            mobileFirst: !0,
            centerMode: !1,
            responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 4,
                    centerMode: !0
                }
            }]
        }).on("afterChange", function(t, e, i, n) {
            $(".currentSlide").html(i), $(".allSlides").html(e.slideCount), $(".product-page-carousel").slick("setPosition"), setCursorImage()
        }), $(".product-page-carousel").slick("slickGoTo", 1), $(".product-page-carousel-wrap").append('<div class="productCarouselNumeric"><span class="currentSlide"></span>/<span class="allSlides"></span></div>'), $(".product-page-carousel .slide-item").on("click", function(t) {
            var e = $(this),
                i = e.attr("data-slick-index");
            e.hasClass("slick-current") || (t.preventDefault(), $(".product-page-carousel").slick("slickGoTo", i))
        }), setCursorImage(), $(".history-description-wrap").slick({
            infinite: !0,
            arrows: !1,
            dots: !1,
            adaptiveHeight: !1,
            slidesToShow: 1,
            cssEase: "cubic-bezier(0.6, 0.1, 0.15, 1)",
            speed: 1e3,
            fade: !0,
            useTransform: !1,
            draggable: !1,
            touchMove: !1,
            swipe: !1,
            pauseOnFocus: !1
        }).on("beforeChange", function() {}).on("afterChange", function() {}), $(".history-period").each(function(t) {
            t += 1, $(this).attr("data-slide", t)
        }), $(".filter-check")[0] && $('.filter-check[value="all"], .filter-check[value="future"]').click();
        var t = $(".tabs-list li:nth-child(1) .tab-btn").attr("data-tab"),
            e = $(".tabs-list li:nth-child(3) .tab-btn").attr("data-tab");
        $('.tab-content[data-tab="' + t + '"]').find(".next-page-title").html(e).attr("data-tab", e), $('.tab-content[data-tab="' + e + '"]').find(".next-page-title").html(t).attr("data-tab", t), $(".tab-content:nth-child(1)").find(".next-page-title").attr("id", "next-title"), $(".tab-content:nth-child(2)").find(".next-page-title").attr("id", "next-title-2"), $(".tab-content:nth-child(3)").find(".next-page-title").attr("id", "next-title-3")
    }), $(window).resize(function() {
        $(".products-items-list").slick("setPosition"), setAboutParallaxproduct(), productPositionInSlide()
    }), window.addEventListener("orientationchange", function() {
        setTimeout(function() {
            setAboutParallaxproduct(), productPositionInSlide()
        }, 500)
    }, !1), $(document).mousemove(function(t) {
        576 < $(window).width() && ($(".parallax-move-wrap.left").parallax(-120, t), $(".parallax-move-wrap.right").parallax(120, t))
    }), $(window).on("scroll", function() {
        var t = $(this).scrollTop();
        scrollDirection = previousScroll < t ? "down" : "up", crossproductOfPage(previousScroll = t), showElementOnScroll(t), moveScrollParallaxFromRight(t), goToNextPage(t), loadOnScrollBorderTitle(t), moveOnScroll(t);
        moveOnScrollSingleproduct(t)
    }),
    function(u, n) {
        "use strict";
        var s = function(t) {
            this.elem = t
        };
        s.init = function() {
            var t, e = n.querySelectorAll("[data-sharer]"),
                i = e.length;
            for (t = 0; t < i; t++) e[t].addEventListener("click", s.add)
        }, s.add = function(t) {
            var e = t.currentTarget || t.srcElement;
            new s(e).share()
        }, s.prototype = {
            constructor: s,
            getValue: function(t, e) {
                e = void 0 === e ? "" : e;
                var i = this.elem.getAttribute("data-" + t);
                return null == i ? e : i
            },
            share: function() {
                var t = this.getValue("sharer").toLowerCase(),
                    e = {
                        facebook: {
                            shareUrl: "https://www.facebook.com/sharer/sharer.php",
                            params: {
                                u: this.getValue("url")
                            }
                        },
                        googleplus: {
                            shareUrl: "https://plus.google.com/share",
                            params: {
                                url: this.getValue("url")
                            }
                        },
                        linkedin: {
                            shareUrl: "https://www.linkedin.com/shareArticle",
                            params: {
                                url: this.getValue("url"),
                                mini: !0
                            }
                        },
                        twitter: {
                            shareUrl: "https://twitter.com/intent/tweet/",
                            params: {
                                text: this.getValue("title"),
                                url: this.getValue("url"),
                                hashtags: this.getValue("hashtags"),
                                via: this.getValue("via")
                            }
                        },
                        email: {
                            shareUrl: "mailto:" + this.getValue("to"),
                            params: {
                                subject: this.getValue("subject"),
                                body: this.getValue("title") + "\n" + this.getValue("url")
                            },
                            isLink: !0
                        },
                        whatsapp: {
                            shareUrl: "whatsapp://send",
                            params: {
                                text: this.getValue("title") + " " + this.getValue("url")
                            },
                            isLink: !0
                        },
                        telegram: {
                            shareUrl: "tg://msg_url",
                            params: {
                                text: this.getValue("title") + " " + this.getValue("url")
                            },
                            isLink: !0
                        },
                        viber: {
                            shareUrl: "viber://forward",
                            params: {
                                text: this.getValue("title") + " " + this.getValue("url")
                            },
                            isLink: !0
                        },
                        line: {
                            shareUrl: "http://line.me/R/msg/text/?" + encodeURIComponent(this.getValue("title") + " " + this.getValue("url")),
                            isLink: !0
                        },
                        pinterest: {
                            shareUrl: "https://www.pinterest.com/pin/create/button/",
                            params: {
                                url: this.getValue("url"),
                                media: this.getValue("image"),
                                description: this.getValue("description")
                            }
                        },
                        tumblr: {
                            shareUrl: "http://tumblr.com/widgets/share/tool",
                            params: {
                                canonicalUrl: this.getValue("url"),
                                content: this.getValue("url"),
                                posttype: "link",
                                title: this.getValue("title"),
                                caption: this.getValue("caption"),
                                tags: this.getValue("tags")
                            }
                        },
                        hackernews: {
                            shareUrl: "https://news.ycombinator.com/submitlink",
                            params: {
                                u: this.getValue("url"),
                                t: this.getValue("title")
                            }
                        },
                        reddit: {
                            shareUrl: "https://www.reddit.com/submit",
                            params: {
                                url: this.getValue("url")
                            }
                        },
                        vk: {
                            shareUrl: "http://vk.com/share.php",
                            params: {
                                url: this.getValue("url"),
                                title: this.getValue("title"),
                                description: this.getValue("caption"),
                                image: this.getValue("image")
                            }
                        },
                        xing: {
                            shareUrl: "https://www.xing.com/app/user",
                            params: {
                                op: "share",
                                url: this.getValue("url"),
                                title: this.getValue("title")
                            }
                        },
                        buffer: {
                            shareUrl: "https://buffer.com/add",
                            params: {
                                url: this.getValue("url"),
                                title: this.getValue("title"),
                                via: this.getValue("via"),
                                picture: this.getValue("picture")
                            }
                        },
                        instapaper: {
                            shareUrl: "http://www.instapaper.com/edit",
                            params: {
                                url: this.getValue("url"),
                                title: this.getValue("title"),
                                description: this.getValue("description")
                            }
                        },
                        pocket: {
                            shareUrl: "https://getpocket.com/save",
                            params: {
                                url: this.getValue("url")
                            }
                        },
                        digg: {
                            shareUrl: "http://www.digg.com/submit",
                            params: {
                                url: this.getValue("url")
                            }
                        },
                        stumbleupon: {
                            shareUrl: "http://www.stumbleupon.com/submit",
                            params: {
                                url: this.getValue("url"),
                                title: this.getValue("title")
                            }
                        },
                        flipboard: {
                            shareUrl: "https://share.flipboard.com/bookmarklet/popout",
                            params: {
                                v: 2,
                                title: this.getValue("title"),
                                url: this.getValue("url"),
                                t: Date.now()
                            }
                        },
                        weibo: {
                            shareUrl: "http://service.weibo.com/share/share.php",
                            params: {
                                url: this.getValue("url"),
                                title: this.getValue("title"),
                                pic: this.getValue("image"),
                                appkey: this.getValue("appkey"),
                                ralateUid: this.getValue("ralateuid"),
                                language: "zh_cn"
                            }
                        },
                        renren: {
                            shareUrl: "http://share.renren.com/share/buttonshare",
                            params: {
                                link: this.getValue("url")
                            }
                        },
                        myspace: {
                            shareUrl: "https://myspace.com/post",
                            params: {
                                u: this.getValue("url"),
                                t: this.getValue("title"),
                                c: this.getValue("description")
                            }
                        },
                        blogger: {
                            shareUrl: "https://www.blogger.com/blog-this.g",
                            params: {
                                u: this.getValue("url"),
                                n: this.getValue("title"),
                                t: this.getValue("description")
                            }
                        },
                        baidu: {
                            shareUrl: "http://cang.baidu.com/do/add",
                            params: {
                                it: this.getValue("title"),
                                iu: this.getValue("url")
                            }
                        },
                        douban: {
                            shareUrl: "https://www.douban.com/share/service",
                            params: {
                                name: this.getValue("title"),
                                href: this.getValue("url"),
                                image: this.getValue("image")
                            }
                        },
                        okru: {
                            shareUrl: "https://connect.ok.ru/dk",
                            params: {
                                "st.cmd": "WidgetSharePreview",
                                "st.shareUrl": this.getValue("url"),
                                title: this.getValue("title")
                            }
                        },
                        mailru: {
                            shareUrl: "http://connect.mail.ru/share",
                            params: {
                                share_url: this.getValue("url"),
                                linkname: this.getValue("title"),
                                linknote: this.getValue("description"),
                                type: "page"
                            }
                        }
                    } [t];
                return e && (e.width = this.getValue("width"), e.height = this.getValue("height")), void 0 !== e && this.urlSharer(e)
            },
            urlSharer: function(t) {
                var e, i = t.params || {},
                    n = Object.keys(i),
                    s = 0 < n.length ? "?" : "";
                for (e = 0; e < n.length; e++) "?" !== s && (s += "&"), i[n[e]] && (s += n[e] + "=" + encodeURIComponent(i[n[e]]));
                if (t.shareUrl += s, t.isLink) u.location.href = t.shareUrl;
                else {
                    var o = t.width || 600,
                        r = t.height || 480,
                        a = u.innerWidth / 2 - o / 2 + u.screenX,
                        l = "scrollbars=no, width=" + o + ", height=" + r + ", top=" + (u.innerHeight / 2 - r / 2 + u.screenY) + ", left=" + a,
                        c = u.open(t.shareUrl, "", l);
                    u.focus && c.focus()
                }
            }
        }, "complete" === n.readyState || "loading" !== n.readyState ? s.init() : n.addEventListener("DOMContentLoaded", s.init), u.addEventListener("page:load", s.init), u.Sharer = s
    }(window, document),
    function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function(c) {
        "use strict";
        var s, o = window.Slick || {};
        s = 0, (o = function(t, e) {
            var i, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: c(t),
                appendDots: c(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"></button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"></button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(t, e) {
                    return c('<button type="button" data-role="none" role="button" tabindex="0" />').text(e + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, c.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = c(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, i = c(t).data("slick") || {}, n.options = c.extend({}, n.defaults, e, i), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = c.proxy(n.autoPlay, n), n.autoPlayClear = c.proxy(n.autoPlayClear, n), n.autoPlayIterator = c.proxy(n.autoPlayIterator, n), n.changeSlide = c.proxy(n.changeSlide, n), n.clickHandler = c.proxy(n.clickHandler, n), n.selectHandler = c.proxy(n.selectHandler, n), n.setPosition = c.proxy(n.setPosition, n), n.swipeHandler = c.proxy(n.swipeHandler, n), n.dragHandler = c.proxy(n.dragHandler, n), n.keyHandler = c.proxy(n.keyHandler, n), n.instanceUid = s++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
        }).prototype.activateADA = function() {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, o.prototype.addSlide = o.prototype.slickAdd = function(t, e, i) {
            var n = this;
            if ("boolean" == typeof e) i = e, e = null;
            else if (e < 0 || e >= n.slideCount) return !1;
            n.unload(), "number" == typeof e ? 0 === e && 0 === n.$slides.length ? c(t).appendTo(n.$slideTrack) : i ? c(t).insertBefore(n.$slides.eq(e)) : c(t).insertAfter(n.$slides.eq(e)) : !0 === i ? c(t).prependTo(n.$slideTrack) : c(t).appendTo(n.$slideTrack), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slides.each(function(t, e) {
                c(e).attr("data-slick-index", t)
            }), n.$slidesCache = n.$slides, n.reinit()
        }, o.prototype.animateHeight = function() {
            if (1 === this.options.slidesToShow && !0 === this.options.adaptiveHeight && !1 === this.options.vertical) {
                var t = this.$slides.eq(this.currentSlide).outerHeight(!0);
                this.$list.animate({
                    height: t
                }, this.options.speed)
            }
        }, o.prototype.animateSlide = function(t, e) {
            var i = {},
                n = this;
            n.animateHeight(), !0 === n.options.rtl && !1 === n.options.vertical && (t = -t), !1 === n.transformsEnabled ? !1 === n.options.vertical ? n.$slideTrack.animate({
                left: t
            }, n.options.speed, n.options.easing, e) : n.$slideTrack.animate({
                top: t
            }, n.options.speed, n.options.easing, e) : !1 === n.cssTransitions ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft), c({
                animStart: n.currentLeft
            }).animate({
                animStart: t
            }, {
                duration: n.options.speed,
                easing: n.options.easing,
                step: function(t) {
                    t = Math.ceil(t), !1 === n.options.vertical ? i[n.animType] = "translate(" + t + "px, 0px)" : i[n.animType] = "translate(0px," + t + "px)", n.$slideTrack.css(i)
                },
                complete: function() {
                    e && e.call()
                }
            })) : (n.applyTransition(), t = Math.ceil(t), !1 === n.options.vertical ? i[n.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[n.animType] = "translate3d(0px," + t + "px, 0px)", n.$slideTrack.css(i), e && setTimeout(function() {
                n.disableTransition(), e.call()
            }, n.options.speed))
        }, o.prototype.getNavTarget = function() {
            var t = this.options.asNavFor;
            return t && null !== t && (t = c(t).not(this.$slider)), t
        }, o.prototype.asNavFor = function(e) {
            var t = this.getNavTarget();
            null !== t && "object" == typeof t && t.each(function() {
                var t = c(this).slick("getSlick");
                t.unslicked || t.slideHandler(e, !0)
            })
        }, o.prototype.applyTransition = function(t) {
            var e = this,
                i = {};
            !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        }, o.prototype.autoPlay = function() {
            this.autoPlayClear(), this.slideCount > this.options.slidesToShow && (this.autoPlayTimer = setInterval(this.autoPlayIterator, this.options.autoplaySpeed))
        }, o.prototype.autoPlayClear = function() {
            this.autoPlayTimer && clearInterval(this.autoPlayTimer)
        }, o.prototype.autoPlayIterator = function() {
            var t = this,
                e = t.currentSlide + t.options.slidesToScroll;
            t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
        }, o.prototype.buildArrows = function() {
            var t = this;
            !0 === t.options.arrows && (t.$prevArrow = c(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = c(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, o.prototype.buildDots = function() {
            var t, e, i = this;
            if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
                for (i.$slider.addClass("slick-dotted"), e = c("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) e.append(c("<li />").append(i.options.customPaging.call(this, i, t)));
                i.$dots = e.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, o.prototype.buildOut = function() {
            var t = this;
            t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, e) {
                c(e).attr("data-slick-index", t).data("originalStyling", c(e).attr("style") || "")
            }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? c('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), c("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
        }, o.prototype.buildRows = function() {
            var t, e, i, n, s, o, r, a = this;
            if (n = document.createDocumentFragment(), o = a.$slider.children(), 1 < a.options.rows) {
                for (r = a.options.slidesPerRow * a.options.rows, s = Math.ceil(o.length / r), t = 0; t < s; t++) {
                    var l = document.createElement("div");
                    for (e = 0; e < a.options.rows; e++) {
                        var c = document.createElement("div");
                        for (i = 0; i < a.options.slidesPerRow; i++) {
                            var u = t * r + (e * a.options.slidesPerRow + i);
                            o.get(u) && c.appendChild(o.get(u))
                        }
                        l.appendChild(c)
                    }
                    n.appendChild(l)
                }
                a.$slider.empty().append(n), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, o.prototype.checkResponsive = function(t, e) {
            var i, n, s, o = this,
                r = !1,
                a = o.$slider.width(),
                l = window.innerWidth || c(window).width();
            if ("window" === o.respondTo ? s = l : "slider" === o.respondTo ? s = a : "min" === o.respondTo && (s = Math.min(l, a)), o.options.responsive && o.options.responsive.length && null !== o.options.responsive) {
                for (i in n = null, o.breakpoints) o.breakpoints.hasOwnProperty(i) && (!1 === o.originalSettings.mobileFirst ? s < o.breakpoints[i] && (n = o.breakpoints[i]) : s > o.breakpoints[i] && (n = o.breakpoints[i]));
                null !== n ? null !== o.activeBreakpoint ? (n !== o.activeBreakpoint || e) && (o.activeBreakpoint = n, "unslick" === o.breakpointSettings[n] ? o.unslick(n) : (o.options = c.extend({}, o.originalSettings, o.breakpointSettings[n]), !0 === t && (o.currentSlide = o.options.initialSlide), o.refresh(t)), r = n) : (o.activeBreakpoint = n, "unslick" === o.breakpointSettings[n] ? o.unslick(n) : (o.options = c.extend({}, o.originalSettings, o.breakpointSettings[n]), !0 === t && (o.currentSlide = o.options.initialSlide), o.refresh(t)), r = n) : null !== o.activeBreakpoint && (o.activeBreakpoint = null, o.options = o.originalSettings, !0 === t && (o.currentSlide = o.options.initialSlide), o.refresh(t), r = n), t || !1 === r || o.$slider.trigger("breakpoint", [o, r])
            }
        }, o.prototype.changeSlide = function(t, e) {
            var i, n, s = this,
                o = c(t.currentTarget);
            switch (o.is("a") && t.preventDefault(), o.is("li") || (o = o.closest("li")), i = s.slideCount % s.options.slidesToScroll != 0 ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, t.data.message) {
                case "previous":
                    n = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - n, !1, e);
                    break;
                case "next":
                    n = 0 === i ? s.options.slidesToScroll : i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + n, !1, e);
                    break;
                case "index":
                    var r = 0 === t.data.index ? 0 : t.data.index || o.index() * s.options.slidesToScroll;
                    s.slideHandler(s.checkNavigable(r), !1, e), o.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, o.prototype.checkNavigable = function(t) {
            var e, i;
            if (i = 0, t > (e = this.getNavigableIndexes())[e.length - 1]) t = e[e.length - 1];
            else
                for (var n in e) {
                    if (t < e[n]) {
                        t = i;
                        break
                    }
                    i = e[n]
                }
            return t
        }, o.prototype.cleanUpEvents = function() {
            var t = this;
            t.options.dots && null !== t.$dots && c("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", c.proxy(t.interrupt, t, !0)).off("mouseleave.slick", c.proxy(t.interrupt, t, !1)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), c(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && c(t.$slideTrack).children().off("click.slick", t.selectHandler), c(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), c(window).off("resize.slick.slick-" + t.instanceUid, t.resize), c("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), c(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), c(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
        }, o.prototype.cleanUpSlideEvents = function() {
            this.$list.off("mouseenter.slick", c.proxy(this.interrupt, this, !0)), this.$list.off("mouseleave.slick", c.proxy(this.interrupt, this, !1))
        }, o.prototype.cleanUpRows = function() {
            var t;
            1 < this.options.rows && ((t = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(t))
        }, o.prototype.clickHandler = function(t) {
            !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
        }, o.prototype.destroy = function(t) {
            var e = this;
            e.autoPlayClear(), e.touchObject = {}, e.cleanUpEvents(), c(".slick-cloned", e.$slider).detach(), e.$dots && e.$dots.remove(), e.$prevArrow && e.$prevArrow.length && (e.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove()), e.$nextArrow && e.$nextArrow.length && (e.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove()), e.$slides && (e.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                c(this).attr("style", c(this).data("originalStyling"))
            }), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.detach(), e.$list.detach(), e.$slider.append(e.$slides)), e.cleanUpRows(), e.$slider.removeClass("slick-slider"), e.$slider.removeClass("slick-initialized"), e.$slider.removeClass("slick-dotted"), e.unslicked = !0, t || e.$slider.trigger("destroy", [e])
        }, o.prototype.disableTransition = function(t) {
            var e = {};
            e[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(e) : this.$slides.eq(t).css(e)
        }, o.prototype.fadeSlide = function(t, e) {
            var i = this;
            !1 === i.cssTransitions ? (i.$slides.eq(t).css({
                zIndex: i.options.zIndex
            }), i.$slides.eq(t).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
                opacity: 1,
                zIndex: i.options.zIndex
            }), e && setTimeout(function() {
                i.disableTransition(t), e.call()
            }, i.options.speed))
        }, o.prototype.fadeSlideOut = function(t) {
            !1 === this.cssTransitions ? this.$slides.eq(t).animate({
                opacity: 0,
                zIndex: this.options.zIndex - 2
            }, this.options.speed, this.options.easing) : (this.applyTransition(t), this.$slides.eq(t).css({
                opacity: 0,
                zIndex: this.options.zIndex - 2
            }))
        }, o.prototype.filterSlides = o.prototype.slickFilter = function(t) {
            null !== t && (this.$slidesCache = this.$slides, this.unload(), this.$slideTrack.children(this.options.slide).detach(), this.$slidesCache.filter(t).appendTo(this.$slideTrack), this.reinit())
        }, o.prototype.focusHandler = function() {
            var i = this;
            i.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(t) {
                t.stopImmediatePropagation();
                var e = c(this);
                setTimeout(function() {
                    i.options.pauseOnFocus && (i.focussed = e.is(":focus"), i.autoPlay())
                }, 0)
            })
        }, o.prototype.getCurrent = o.prototype.slickCurrentSlide = function() {
            return this.currentSlide
        }, o.prototype.getDotCount = function() {
            var t = this,
                e = 0,
                i = 0,
                n = 0;
            if (!0 === t.options.infinite)
                for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else if (!0 === t.options.centerMode) n = t.slideCount;
            else if (t.options.asNavFor)
                for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
            return n - 1
        }, o.prototype.getLeft = function(t) {
            var e, i, n, s = this,
                o = 0;
            return s.slideOffset = 0, i = s.$slides.first().outerHeight(!0), !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, o = i * s.options.slidesToShow * -1), s.slideCount % s.options.slidesToScroll != 0 && t + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (t > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (t - s.slideCount)) * s.slideWidth * -1, o = (s.options.slidesToShow - (t - s.slideCount)) * i * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, o = s.slideCount % s.options.slidesToScroll * i * -1))) : t + s.options.slidesToShow > s.slideCount && (s.slideOffset = (t + s.options.slidesToShow - s.slideCount) * s.slideWidth, o = (t + s.options.slidesToShow - s.slideCount) * i), s.slideCount <= s.options.slidesToShow && (o = s.slideOffset = 0), !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), e = !1 === s.options.vertical ? t * s.slideWidth * -1 + s.slideOffset : t * i * -1 + o, !0 === s.options.variableWidth && (n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(t) : s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow), e = !0 === s.options.rtl ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === s.options.centerMode && (n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(t) : s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow + 1), e = !0 === s.options.rtl ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, e += (s.$list.width() - n.outerWidth()) / 2)), e
        }, o.prototype.getOption = o.prototype.slickGetOption = function(t) {
            return this.options[t]
        }, o.prototype.getNavigableIndexes = function() {
            var t, e = this,
                i = 0,
                n = 0,
                s = [];
            for (!1 === e.options.infinite ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); i < t;) s.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return s
        }, o.prototype.getSlick = function() {
            return this
        }, o.prototype.getSlideCount = function() {
            var i, n, s = this;
            return n = !0 === s.options.centerMode ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0, !0 === s.options.swipeToSlide ? (s.$slideTrack.find(".slick-slide").each(function(t, e) {
                if (e.offsetLeft - n + c(e).outerWidth() / 2 > -1 * s.swipeLeft) return i = e, !1
            }), Math.abs(c(i).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll
        }, o.prototype.goTo = o.prototype.slickGoTo = function(t, e) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(t)
                }
            }, e)
        }, o.prototype.init = function(t) {
            var e = this;
            c(e.$slider).hasClass("slick-initialized") || (c(e.$slider).addClass("slick-initialized"), e.buildRows(), e.buildOut(), e.setProps(), e.startLoad(), e.loadSlider(), e.initializeEvents(), e.updateArrows(), e.updateDots(), e.checkResponsive(!0), e.focusHandler()), t && e.$slider.trigger("init", [e]), !0 === e.options.accessibility && e.initADA(), e.options.autoplay && (e.paused = !1, e.autoPlay())
        }, o.prototype.initADA = function() {
            var e = this;
            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t) {
                c(this).attr({
                    role: "option",
                    "aria-describedby": "slick-slide" + e.instanceUid + t
                })
            }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(t) {
                c(this).attr({
                    role: "presentation",
                    "aria-selected": "false",
                    "aria-controls": "navigation" + e.instanceUid + t,
                    id: "slick-slide" + e.instanceUid + t
                })
            }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
        }, o.prototype.initArrowEvents = function() {
            !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, this.changeSlide), this.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, this.changeSlide))
        }, o.prototype.initDotEvents = function() {
            var t = this;
            !0 === t.options.dots && t.slideCount > t.options.slidesToShow && c("li", t.$dots).on("click.slick", {
                message: "index"
            }, t.changeSlide), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && c("li", t.$dots).on("mouseenter.slick", c.proxy(t.interrupt, t, !0)).on("mouseleave.slick", c.proxy(t.interrupt, t, !1))
        }, o.prototype.initSlideEvents = function() {
            this.options.pauseOnHover && (this.$list.on("mouseenter.slick", c.proxy(this.interrupt, this, !0)), this.$list.on("mouseleave.slick", c.proxy(this.interrupt, this, !1)))
        }, o.prototype.initializeEvents = function() {
            var t = this;
            t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), c(document).on(t.visibilityChange, c.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && c(t.$slideTrack).children().on("click.slick", t.selectHandler), c(window).on("orientationchange.slick.slick-" + t.instanceUid, c.proxy(t.orientationChange, t)), c(window).on("resize.slick.slick-" + t.instanceUid, c.proxy(t.resize, t)), c("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), c(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), c(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
        }, o.prototype.initUI = function() {
            !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.show(), this.$nextArrow.show()), !0 === this.options.dots && this.slideCount > this.options.slidesToShow && this.$dots.show()
        }, o.prototype.keyHandler = function(t) {
            t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === this.options.accessibility ? this.changeSlide({
                data: {
                    message: !0 === this.options.rtl ? "next" : "previous"
                }
            }) : 39 === t.keyCode && !0 === this.options.accessibility && this.changeSlide({
                data: {
                    message: !0 === this.options.rtl ? "previous" : "next"
                }
            }))
        }, o.prototype.lazyLoad = function() {
            var t, e, n = this;

            function i(t) {
                c("img[data-lazy]", t).each(function() {
                    var t = c(this),
                        e = c(this).attr("data-lazy"),
                        i = document.createElement("img");
                    i.onload = function() {
                        t.animate({
                            opacity: 0
                        }, 100, function() {
                            t.attr("src", e).animate({
                                opacity: 1
                            }, 200, function() {
                                t.removeAttr("data-lazy").removeClass("slick-loading")
                            }), n.$slider.trigger("lazyLoaded", [n, t, e])
                        })
                    }, i.onerror = function() {
                        t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, t, e])
                    }, i.src = e
                })
            }!0 === n.options.centerMode ? !0 === n.options.infinite ? e = (t = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (t = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), e = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (t = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, e = Math.ceil(t + n.options.slidesToShow), !0 === n.options.fade && (0 < t && t--, e <= n.slideCount && e++)), i(n.$slider.find(".slick-slide").slice(t, e)), n.slideCount <= n.options.slidesToShow ? i(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? i(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && i(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
        }, o.prototype.loadSlider = function() {
            this.setPosition(), this.$slideTrack.css({
                opacity: 1
            }), this.$slider.removeClass("slick-loading"), this.initUI(), "progressive" === this.options.lazyLoad && this.progressiveLazyLoad()
        }, o.prototype.next = o.prototype.slickNext = function() {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, o.prototype.orientationChange = function() {
            this.checkResponsive(), this.setPosition()
        }, o.prototype.pause = o.prototype.slickPause = function() {
            this.autoPlayClear(), this.paused = !0
        }, o.prototype.play = o.prototype.slickPlay = function() {
            this.autoPlay(), this.options.autoplay = !0, this.paused = !1, this.focussed = !1, this.interrupted = !1
        }, o.prototype.postSlide = function(t) {
            var e = this;
            e.unslicked || (e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), !0 === e.options.accessibility && e.initADA())
        }, o.prototype.prev = o.prototype.slickPrev = function() {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, o.prototype.preventDefault = function(t) {
            t.preventDefault()
        }, o.prototype.progressiveLazyLoad = function(t) {
            t = t || 1;
            var e, i, n, s = this,
                o = c("img[data-lazy]", s.$slider);
            o.length ? (e = o.first(), i = e.attr("data-lazy"), (n = document.createElement("img")).onload = function() {
                e.attr("src", i).removeAttr("data-lazy").removeClass("slick-loading"), !0 === s.options.adaptiveHeight && s.setPosition(), s.$slider.trigger("lazyLoaded", [s, e, i]), s.progressiveLazyLoad()
            }, n.onerror = function() {
                t < 3 ? setTimeout(function() {
                    s.progressiveLazyLoad(t + 1)
                }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, e, i]), s.progressiveLazyLoad())
            }, n.src = i) : s.$slider.trigger("allImagesLoaded", [s])
        }, o.prototype.refresh = function(t) {
            var e, i, n = this;
            i = n.slideCount - n.options.slidesToShow, !n.options.infinite && n.currentSlide > i && (n.currentSlide = i), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), e = n.currentSlide, n.destroy(!0), c.extend(n, n.initials, {
                currentSlide: e
            }), n.init(), t || n.changeSlide({
                data: {
                    message: "index",
                    index: e
                }
            }, !1)
        }, o.prototype.registerBreakpoints = function() {
            var t, e, i, n = this,
                s = n.options.responsive || null;
            if ("array" === c.type(s) && s.length) {
                for (t in n.respondTo = n.options.respondTo || "window", s)
                    if (i = n.breakpoints.length - 1, e = s[t].breakpoint, s.hasOwnProperty(t)) {
                        for (; 0 <= i;) n.breakpoints[i] && n.breakpoints[i] === e && n.breakpoints.splice(i, 1), i--;
                        n.breakpoints.push(e), n.breakpointSettings[e] = s[t].settings
                    } n.breakpoints.sort(function(t, e) {
                    return n.options.mobileFirst ? t - e : e - t
                })
            }
        }, o.prototype.reinit = function() {
            var t = this;
            t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && c(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
        }, o.prototype.resize = function() {
            var t = this;
            c(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
                t.windowWidth = c(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
            }, 50))
        }, o.prototype.removeSlide = o.prototype.slickRemove = function(t, e, i) {
            var n = this;
            if (t = "boolean" == typeof t ? !0 === (e = t) ? 0 : n.slideCount - 1 : !0 === e ? --t : t, n.slideCount < 1 || t < 0 || t > n.slideCount - 1) return !1;
            n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit()
        }, o.prototype.setCSS = function(t) {
            var e, i, n = this,
                s = {};
            !0 === n.options.rtl && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", s[n.positionProp] = t, !1 === n.transformsEnabled || (!(s = {}) === n.cssTransitions ? s[n.animType] = "translate(" + e + ", " + i + ")" : s[n.animType] = "translate3d(" + e + ", " + i + ", 0px)"), n.$slideTrack.css(s)
        }, o.prototype.setDimensions = function() {
            var t = this;
            !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
                padding: "0px " + t.options.centerPadding
            }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({
                padding: t.options.centerPadding + " 0px"
            })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
            var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
            !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
        }, o.prototype.setFade = function() {
            var i, n = this;
            n.$slides.each(function(t, e) {
                i = n.slideWidth * t * -1, !0 === n.options.rtl ? c(e).css({
                    position: "relative",
                    right: i,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                }) : c(e).css({
                    position: "relative",
                    left: i,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                })
            }), n.$slides.eq(n.currentSlide).css({
                zIndex: n.options.zIndex - 1,
                opacity: 1
            })
        }, o.prototype.setHeight = function() {
            if (1 === this.options.slidesToShow && !0 === this.options.adaptiveHeight && !1 === this.options.vertical) {
                var t = this.$slides.eq(this.currentSlide).outerHeight(!0);
                this.$list.css("height", t)
            }
        }, o.prototype.setOption = o.prototype.slickSetOption = function() {
            var t, e, i, n, s, o = this,
                r = !1;
            if ("object" === c.type(arguments[0]) ? (i = arguments[0], r = arguments[1], s = "multiple") : "string" === c.type(arguments[0]) && (i = arguments[0], n = arguments[1], r = arguments[2], "responsive" === arguments[0] && "array" === c.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")), "single" === s) o.options[i] = n;
            else if ("multiple" === s) c.each(i, function(t, e) {
                o.options[t] = e
            });
            else if ("responsive" === s)
                for (e in n)
                    if ("array" !== c.type(o.options.responsive)) o.options.responsive = [n[e]];
                    else {
                        for (t = o.options.responsive.length - 1; 0 <= t;) o.options.responsive[t].breakpoint === n[e].breakpoint && o.options.responsive.splice(t, 1), t--;
                        o.options.responsive.push(n[e])
                    } r && (o.unload(), o.reinit())
        }, o.prototype.setPosition = function() {
            this.setDimensions(), this.setHeight(), !1 === this.options.fade ? this.setCSS(this.getLeft(this.currentSlide)) : this.setFade(), this.$slider.trigger("setPosition", [this])
        }, o.prototype.setProps = function() {
            var t = this,
                e = document.body.style;
            t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
        }, o.prototype.setSlideClasses = function(t) {
            var e, i, n, s, o = this;
            i = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), o.$slides.eq(t).addClass("slick-current"), !0 === o.options.centerMode ? (e = Math.floor(o.options.slidesToShow / 2), !0 === o.options.infinite && (e <= t && t <= o.slideCount - 1 - e ? o.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = o.options.slidesToShow + t, i.slice(n - e + 1, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - o.options.slidesToShow).addClass("slick-center") : t === o.slideCount - 1 && i.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(t).addClass("slick-center")) : 0 <= t && t <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(t, t + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= o.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (s = o.slideCount % o.options.slidesToShow, n = !0 === o.options.infinite ? o.options.slidesToShow + t : t, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - t < o.options.slidesToShow ? i.slice(n - (o.options.slidesToShow - s), n + s).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === o.options.lazyLoad && o.lazyLoad()
        }, o.prototype.setupInfinite = function() {
            var t, e, i, n = this;
            if (!0 === n.options.fade && (n.options.centerMode = !1), !0 === n.options.infinite && !1 === n.options.fade && (e = null, n.slideCount > n.options.slidesToShow)) {
                for (i = !0 === n.options.centerMode ? n.options.slidesToShow + 1 : n.options.slidesToShow, t = n.slideCount; t > n.slideCount - i; t -= 1) e = t - 1, c(n.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
                for (t = 0; t < i; t += 1) e = t, c(n.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
                n.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    c(this).attr("id", "")
                })
            }
        }, o.prototype.interrupt = function(t) {
            t || this.autoPlay(), this.interrupted = t
        }, o.prototype.selectHandler = function(t) {
            var e = c(t.target).is(".slick-slide") ? c(t.target) : c(t.target).parents(".slick-slide"),
                i = parseInt(e.attr("data-slick-index"));
            if (i || (i = 0), this.slideCount <= this.options.slidesToShow) return this.setSlideClasses(i), void this.asNavFor(i);
            this.slideHandler(i)
        }, o.prototype.slideHandler = function(t, e, i) {
            var n, s, o, r, a, l, c = this;
            if (e = e || !1, (!0 !== c.animating || !0 !== c.options.waitForAnimate) && !(!0 === c.options.fade && c.currentSlide === t || c.slideCount <= c.options.slidesToShow))
                if (!1 === e && c.asNavFor(t), n = t, a = c.getLeft(n), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(r, function() {
                    c.postSlide(n)
                }) : c.postSlide(n));
                else if (!1 === c.options.infinite && !0 === c.options.centerMode && (t < 0 || t > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(r, function() {
                c.postSlide(n)
            }) : c.postSlide(n));
            else {
                if (c.options.autoplay && clearInterval(c.autoPlayTimer), s = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, s]), o = c.currentSlide, c.currentSlide = s, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (l = (l = c.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== i ? (c.fadeSlideOut(o), c.fadeSlide(s, function() {
                    c.postSlide(s)
                })) : c.postSlide(s), void c.animateHeight();
                !0 !== i ? c.animateSlide(a, function() {
                    c.postSlide(s)
                }) : c.postSlide(s)
            }
        }, o.prototype.startLoad = function() {
            var t = this;
            !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
        }, o.prototype.swipeDirection = function() {
            var t, e, i, n;
            return t = this.touchObject.startX - this.touchObject.curX, e = this.touchObject.startY - this.touchObject.curY, i = Math.atan2(e, t), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && 0 <= n ? !1 === this.options.rtl ? "left" : "right" : n <= 360 && 315 <= n ? !1 === this.options.rtl ? "left" : "right" : 135 <= n && n <= 225 ? !1 === this.options.rtl ? "right" : "left" : !0 === this.options.verticalSwiping ? 35 <= n && n <= 135 ? "down" : "up" : "vertical"
        }, o.prototype.swipeEnd = function(t) {
            var e, i, n = this;
            if (n.dragging = !1, n.interrupted = !1, n.shouldClick = !(10 < n.touchObject.swipeLength), void 0 === n.touchObject.curX) return !1;
            if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
                switch (i = n.swipeDirection()) {
                    case "left":
                    case "down":
                        e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
                }
                "vertical" != i && (n.slideHandler(e), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
            } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
        }, o.prototype.swipeHandler = function(t) {
            var e = this;
            if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
                case "start":
                    e.swipeStart(t);
                    break;
                case "move":
                    e.swipeMove(t);
                    break;
                case "end":
                    e.swipeEnd(t)
            }
        }, o.prototype.swipeMove = function(t) {
            var e, i, n, s, o, r = this;
            return o = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!r.dragging || o && 1 !== o.length) && (e = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== o ? o[0].pageX : t.clientX, r.touchObject.curY = void 0 !== o ? o[0].pageY : t.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), !0 === r.options.verticalSwiping && (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))), "vertical" !== (i = r.swipeDirection()) ? (void 0 !== t.originalEvent && 4 < r.touchObject.swipeLength && t.preventDefault(), s = (!1 === r.options.rtl ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), !0 === r.options.verticalSwiping && (s = r.touchObject.curY > r.touchObject.startY ? 1 : -1), n = r.touchObject.swipeLength, (r.touchObject.edgeHit = !1) === r.options.infinite && (0 === r.currentSlide && "right" === i || r.currentSlide >= r.getDotCount() && "left" === i) && (n = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), !1 === r.options.vertical ? r.swipeLeft = e + n * s : r.swipeLeft = e + n * (r.$list.height() / r.listWidth) * s, !0 === r.options.verticalSwiping && (r.swipeLeft = e + n * s), !0 !== r.options.fade && !1 !== r.options.touchMove && (!0 === r.animating ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft))) : void 0)
        }, o.prototype.swipeStart = function(t) {
            var e, i = this;
            if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return !(i.touchObject = {});
            void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, i.dragging = !0
        }, o.prototype.unfilterSlides = o.prototype.slickUnfilter = function() {
            null !== this.$slidesCache && (this.unload(), this.$slideTrack.children(this.options.slide).detach(), this.$slidesCache.appendTo(this.$slideTrack), this.reinit())
        }, o.prototype.unload = function() {
            var t = this;
            c(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, o.prototype.unslick = function(t) {
            this.$slider.trigger("unslick", [this, t]), this.destroy()
        }, o.prototype.updateArrows = function() {
            var t = this;
            Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, o.prototype.updateDots = function() {
            null !== this.$dots && (this.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), this.$dots.find("li").eq(Math.floor(this.currentSlide / this.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, o.prototype.visibility = function() {
            this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
        }, c.fn.slick = function() {
            var t, e, i = arguments[0],
                n = Array.prototype.slice.call(arguments, 1),
                s = this.length;
            for (t = 0; t < s; t++)
                if ("object" == typeof i || void 0 === i ? this[t].slick = new o(this[t], i) : e = this[t].slick[i].apply(this[t].slick, n), void 0 !== e) return e;
            return this
        }
    });
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        var t, l, e, T, w, x, S, v, i, y, k, _, b, f, p, g, n;
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(n, u, y) {
            var g = function(t) {
                    var e, i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i
                },
                v = function(t, e, i) {
                    var n, s, o = t.cycle;
                    for (n in o) s = o[n], t[n] = "function" == typeof s ? s(i, e[i]) : s[i % s.length];
                    delete t.cycle
                },
                _ = function(t, e, i) {
                    y.call(this, t, e, i), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = _.prototype.render
                },
                b = 1e-10,
                w = y._internals,
                x = w.isSelector,
                T = w.isArray,
                t = _.prototype = y.to({}, .1, {}),
                S = [];
            _.version = "1.20.4", t.constructor = _, t.kill()._gc = !1, _.killTweensOf = _.killDelayedCallsTo = y.killTweensOf, _.getTweensOf = y.getTweensOf, _.lagSmoothing = y.lagSmoothing, _.ticker = y.ticker, _.render = y.render, t.invalidate = function() {
                return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), y.prototype.invalidate.call(this)
            }, t.updateTo = function(t, e) {
                var i, n = this.ratio,
                    s = this.vars.immediateRender || t.immediateRender;
                for (i in e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), t) this.vars[i] = t[i];
                if (this._initted || s)
                    if (e) this._initted = !1, s && this.render(0, !0, !0);
                    else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && y._onPluginEvent("_onDisable", this), .998 < this._time / this._duration) {
                    var o = this._totalTime;
                    this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
                } else if (this._initted = !1, this._init(), 0 < this._time || s)
                    for (var r, a = 1 / (1 - n), l = this._firstPT; l;) r = l.s + l.c, l.c *= a, l.s = r - l.c, l = l._next;
                return this
            }, t.render = function(t, e, i) {
                this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                var n, s, o, r, a, l, c, u, d, h = this._dirty ? this.totalDuration() : this._totalDuration,
                    f = this._time,
                    p = this._totalTime,
                    m = this._cycle,
                    g = this._duration,
                    v = this._rawPrevTime;
                if (h - 1e-7 <= t && 0 <= t ? (this._totalTime = h, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, s = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === g && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (v < 0 || t <= 0 && -1e-7 <= t || v === b && "isPause" !== this.data) && v !== t && (i = !0, b < v && (s = "onReverseComplete")), this._rawPrevTime = u = !e || t || v === t ? t : b)) : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== p || 0 === g && 0 < v) && (s = "onReverseComplete", n = this._reversed), t < 0 && (this._active = !1, 0 === g && (this._initted || !this.vars.lazy || i) && (0 <= v && (i = !0), this._rawPrevTime = u = !e || t || v === t ? t : b)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (r = g + this._repeatDelay, this._cycle = this._totalTime / r >> 0, 0 !== this._cycle && this._cycle === this._totalTime / r && p <= t && this._cycle--, this._time = this._totalTime - this._cycle * r, this._yoyo && 0 != (1 & this._cycle) && (this._time = g - this._time, (d = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== d || this._initted ? this._yoyoEase = d = !0 === d ? this._ease : d instanceof Ease ? d : Ease.map[d] : (d = this.vars.ease, this._yoyoEase = d = d ? d instanceof Ease ? d : "function" == typeof d ? new Ease(d, this.vars.easeParams) : Ease.map[d] || y.defaultEase : y.defaultEase)), this.ratio = d ? 1 - d.getRatio((g - this._time) / g) : 0)), this._time > g ? this._time = g : this._time < 0 && (this._time = 0)), this._easeType && !d ? (a = this._time / g, (1 === (l = this._easeType) || 3 === l && .5 <= a) && (a = 1 - a), 3 === l && (a *= 2), 1 === (c = this._easePower) ? a *= a : 2 === c ? a *= a * a : 3 === c ? a *= a * a * a : 4 === c && (a *= a * a * a * a), 1 === l ? this.ratio = 1 - a : 2 === l ? this.ratio = a : this._time / g < .5 ? this.ratio = a / 2 : this.ratio = 1 - a / 2) : d || (this.ratio = this._ease.getRatio(this._time / g))), f !== this._time || i || m !== this._cycle) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = f, this._totalTime = p, this._rawPrevTime = v, this._cycle = m, w.lazyTweens.push(this), void(this._lazy = [t, e]);
                        !this._time || n || d ? n && this._ease._calcEnd && !d && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / g)
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== f && 0 <= t && (this._active = !0), 0 === p && (2 === this._initted && 0 < t && this._init(), this._startAt && (0 <= t ? this._startAt.render(t, !0, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === g) && (e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                    this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, !0, i), e || (this._totalTime !== p || s) && this._callback("onUpdate")), this._cycle !== m && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), s && (!this._gc || i) && (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, !0, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s), 0 === g && this._rawPrevTime === b && u !== b && (this._rawPrevTime = 0))
                } else p !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
            }, _.to = function(t, e, i) {
                return new _(t, e, i)
            }, _.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new _(t, e, i)
            }, _.fromTo = function(t, e, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new _(t, e, n)
            }, _.staggerTo = _.allTo = function(t, e, i, n, s, o, r) {
                n = n || 0;
                var a, l, c, u, d = 0,
                    h = [],
                    f = function() {
                        i.onComplete && i.onComplete.apply(i.onCompleteScope || this, arguments), s.apply(r || i.callbackScope || this, o || S)
                    },
                    p = i.cycle,
                    m = i.startAt && i.startAt.cycle;
                for (T(t) || ("string" == typeof t && (t = y.selector(t) || t), x(t) && (t = g(t))), t = t || [], n < 0 && ((t = g(t)).reverse(), n *= -1), a = t.length - 1, c = 0; c <= a; c++) {
                    for (u in l = {}, i) l[u] = i[u];
                    if (p && (v(l, t, c), null != l.duration && (e = l.duration, delete l.duration)), m) {
                        for (u in m = l.startAt = {}, i.startAt) m[u] = i.startAt[u];
                        v(l.startAt, t, c)
                    }
                    l.delay = d + (l.delay || 0), c === a && s && (l.onComplete = f), h[c] = new _(t[c], e, l), d += n
                }
                return h
            }, _.staggerFrom = _.allFrom = function(t, e, i, n, s, o, r) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, _.staggerTo(t, e, i, n, s, o, r)
            }, _.staggerFromTo = _.allFromTo = function(t, e, i, n, s, o, r, a) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, _.staggerTo(t, e, n, s, o, r, a)
            }, _.delayedCall = function(t, e, i, n, s) {
                return new _(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: n,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    useFrames: s,
                    overwrite: 0
                })
            }, _.set = function(t, e) {
                return new _(t, 0, e)
            }, _.isTweening = function(t) {
                return 0 < y.getTweensOf(t, !0).length
            };
            var o = function(t, e) {
                    for (var i = [], n = 0, s = t._first; s;) s instanceof y ? i[n++] = s : (e && (i[n++] = s), n = (i = i.concat(o(s, e))).length), s = s._next;
                    return i
                },
                d = _.getAllTweens = function(t) {
                    return o(n._rootTimeline, t).concat(o(n._rootFramesTimeline, t))
                };
            _.killAll = function(t, e, i, n) {
                null == e && (e = !0), null == i && (i = !0);
                var s, o, r, a = d(0 != n),
                    l = a.length,
                    c = e && i && n;
                for (r = 0; r < l; r++) o = a[r], (c || o instanceof u || (s = o.target === o.vars.onComplete) && i || e && !s) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
            }, _.killChildTweensOf = function(t, e) {
                if (null != t) {
                    var i, n, s, o, r, a = w.tweenLookup;
                    if ("string" == typeof t && (t = y.selector(t) || t), x(t) && (t = g(t)), T(t))
                        for (o = t.length; - 1 < --o;) _.killChildTweensOf(t[o], e);
                    else {
                        for (s in i = [], a)
                            for (n = a[s].target.parentNode; n;) n === t && (i = i.concat(a[s].tweens)), n = n.parentNode;
                        for (r = i.length, o = 0; o < r; o++) e && i[o].totalTime(i[o].totalDuration()), i[o]._enabled(!1, !1)
                    }
                }
            };
            var s = function(t, e, i, n) {
                e = !1 !== e, i = !1 !== i;
                for (var s, o, r = d(n = !1 !== n), a = e && i && n, l = r.length; - 1 < --l;) o = r[l], (a || o instanceof u || (s = o.target === o.vars.onComplete) && i || e && !s) && o.paused(t)
            };
            return _.pauseAll = function(t, e, i) {
                s(!0, t, e, i)
            }, _.resumeAll = function(t, e, i) {
                s(!1, t, e, i)
            }, _.globalTimeScale = function(t) {
                var e = n._rootTimeline,
                    i = y.ticker.time;
                return arguments.length ? (t = t || b, e._startTime = i - (i - e._startTime) * e._timeScale / t, e = n._rootFramesTimeline, i = y.ticker.frame, e._startTime = i - (i - e._startTime) * e._timeScale / t, e._timeScale = n._rootTimeline._timeScale = t, t) : e._timeScale
            }, t.progress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
            }, t.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
            }, t.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
            }, t.duration = function(t) {
                return arguments.length ? n.prototype.duration.call(this, t) : this._duration
            }, t.totalDuration = function(t) {
                return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
            }, t.repeat = function(t) {
                return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
            }, t.repeatDelay = function(t) {
                return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
            }, t.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, _
        }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(u, d, h) {
            var f = function(t) {
                    d.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                    var e, i, n = this.vars;
                    for (i in n) e = n[i], m(e) && -1 !== e.join("").indexOf("{self}") && (n[i] = this._swapSelfInParams(e));
                    m(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger)
                },
                t = h._internals,
                e = f._internals = {},
                p = t.isSelector,
                m = t.isArray,
                g = t.lazyTweens,
                v = t.lazyRender,
                r = _gsScope._gsDefine.globals,
                y = function(t) {
                    var e, i = {};
                    for (e in t) i[e] = t[e];
                    return i
                },
                _ = function(t, e, i) {
                    var n, s, o = t.cycle;
                    for (n in o) s = o[n], t[n] = "function" == typeof s ? s(i, e[i]) : s[i % s.length];
                    delete t.cycle
                },
                o = e.pauseCallback = function() {},
                b = function(t) {
                    var e, i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i
                },
                i = f.prototype = new d;
            return f.version = "1.20.4", i.constructor = f, i.kill()._gc = i._forcingPlayhead = i._hasPause = !1, i.to = function(t, e, i, n) {
                var s = i.repeat && r.TweenMax || h;
                return e ? this.add(new s(t, e, i), n) : this.set(t, i, n)
            }, i.from = function(t, e, i, n) {
                return this.add((i.repeat && r.TweenMax || h).from(t, e, i), n)
            }, i.fromTo = function(t, e, i, n, s) {
                var o = n.repeat && r.TweenMax || h;
                return e ? this.add(o.fromTo(t, e, i, n), s) : this.set(t, n, s)
            }, i.staggerTo = function(t, e, i, n, s, o, r, a) {
                var l, c, u = new f({
                        onComplete: o,
                        onCompleteParams: r,
                        callbackScope: a,
                        smoothChildTiming: this.smoothChildTiming
                    }),
                    d = i.cycle;
                for ("string" == typeof t && (t = h.selector(t) || t), p(t = t || []) && (t = b(t)), (n = n || 0) < 0 && ((t = b(t)).reverse(), n *= -1), c = 0; c < t.length; c++)(l = y(i)).startAt && (l.startAt = y(l.startAt), l.startAt.cycle && _(l.startAt, t, c)), d && (_(l, t, c), null != l.duration && (e = l.duration, delete l.duration)), u.to(t[c], e, l, c * n);
                return this.add(u, s)
            }, i.staggerFrom = function(t, e, i, n, s, o, r, a) {
                return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, s, o, r, a)
            }, i.staggerFromTo = function(t, e, i, n, s, o, r, a, l) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, s, o, r, a, l)
            }, i.call = function(t, e, i, n) {
                return this.add(h.delayedCall(0, t, e, i), n)
            }, i.set = function(t, e, i) {
                return i = this._parseTimeOrLabel(i, 0, !0), null == e.immediateRender && (e.immediateRender = i === this._time && !this._paused), this.add(new h(t, 0, e), i)
            }, f.exportRoot = function(t, e) {
                null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
                var i, n, s, o, r = new f(t),
                    a = r._timeline;
                for (null == e && (e = !0), a._remove(r, !0), r._startTime = 0, r._rawPrevTime = r._time = r._totalTime = a._time, s = a._first; s;) o = s._next, e && s instanceof h && s.target === s.vars.onComplete || ((n = s._startTime - s._delay) < 0 && (i = 1), r.add(s, n)), s = o;
                return a.add(r, 0), i && r.totalDuration(), r
            }, i.add = function(t, e, i, n) {
                var s, o, r, a, l, c;
                if ("number" != typeof e && (e = this._parseTimeOrLabel(e, 0, !0, t)), !(t instanceof u)) {
                    if (t instanceof Array || t && t.push && m(t)) {
                        for (i = i || "normal", n = n || 0, s = e, o = t.length, r = 0; r < o; r++) m(a = t[r]) && (a = new f({
                            tweens: a
                        })), this.add(a, s), "string" != typeof a && "function" != typeof a && ("sequence" === i ? s = a._startTime + a.totalDuration() / a._timeScale : "start" === i && (a._startTime -= a.delay())), s += n;
                        return this._uncache(!0)
                    }
                    if ("string" == typeof t) return this.addLabel(t, e);
                    if ("function" != typeof t) throw "Cannot add " + t + " into the timeline; it is not a tween, timeline, function, or string.";
                    t = h.delayedCall(0, t)
                }
                if (d.prototype.add.call(this, t, e), t._time && t.render((this.rawTime() - t._startTime) * t._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                    for (c = (l = this).rawTime() > t._startTime; l._timeline;) c && l._timeline.smoothChildTiming ? l.totalTime(l._totalTime, !0) : l._gc && l._enabled(!0, !1), l = l._timeline;
                return this
            }, i.remove = function(t) {
                if (t instanceof u) {
                    this._remove(t, !1);
                    var e = t._timeline = t.vars.useFrames ? u._rootFramesTimeline : u._rootTimeline;
                    return t._startTime = (t._paused ? t._pauseTime : e._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale, this
                }
                if (t instanceof Array || t && t.push && m(t)) {
                    for (var i = t.length; - 1 < --i;) this.remove(t[i]);
                    return this
                }
                return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
            }, i._remove = function(t, e) {
                return d.prototype._remove.call(this, t, e), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
            }, i.append = function(t, e) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
            }, i.insert = i.insertMultiple = function(t, e, i, n) {
                return this.add(t, e || 0, i, n)
            }, i.appendMultiple = function(t, e, i, n) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
            }, i.addLabel = function(t, e) {
                return this._labels[t] = this._parseTimeOrLabel(e), this
            }, i.addPause = function(t, e, i, n) {
                var s = h.delayedCall(0, o, i, n || this);
                return s.vars.onComplete = s.vars.onReverseComplete = e, s.data = "isPause", this._hasPause = !0, this.add(s, t)
            }, i.removeLabel = function(t) {
                return delete this._labels[t], this
            }, i.getLabelTime = function(t) {
                return null != this._labels[t] ? this._labels[t] : -1
            }, i._parseTimeOrLabel = function(t, e, i, n) {
                var s, o;
                if (n instanceof u && n.timeline === this) this.remove(n);
                else if (n && (n instanceof Array || n.push && m(n)))
                    for (o = n.length; - 1 < --o;) n[o] instanceof u && n[o].timeline === this && this.remove(n[o]);
                if (s = "number" != typeof t || e ? 99999999999 < this.duration() ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof e) return this._parseTimeOrLabel(e, i && "number" == typeof t && null == this._labels[e] ? t - s : 0, i);
                if (e = e || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = s);
                else {
                    if (-1 === (o = t.indexOf("="))) return null == this._labels[t] ? i ? this._labels[t] = s + e : e : this._labels[t] + e;
                    e = parseInt(t.charAt(o - 1) + "1", 10) * Number(t.substr(o + 1)), t = 1 < o ? this._parseTimeOrLabel(t.substr(0, o - 1), 0, i) : s
                }
                return Number(t) + e
            }, i.seek = function(t, e) {
                return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
            }, i.stop = function() {
                return this.paused(!0)
            }, i.gotoAndPlay = function(t, e) {
                return this.play(t, e)
            }, i.gotoAndStop = function(t, e) {
                return this.pause(t, e)
            }, i.render = function(t, e, i) {
                this._gc && this._enabled(!0, !1);
                var n, s, o, r, a, l, c, u = this._time,
                    d = this._dirty ? this.totalDuration() : this._totalDuration,
                    h = this._startTime,
                    f = this._timeScale,
                    p = this._paused;
                if (u !== this._time && (t += this._time - u), d - 1e-7 <= t && 0 <= t) this._totalTime = this._time = d, this._reversed || this._hasPausedChild() || (s = !0, r = "onComplete", a = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && -1e-7 <= t || this._rawPrevTime < 0 || 1e-10 === this._rawPrevTime) && this._rawPrevTime !== t && this._first && (a = !0, 1e-10 < this._rawPrevTime && (r = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, t = d + 1e-4;
                else if (t < 1e-7)
                    if (this._totalTime = this._time = 0, (0 !== u || 0 === this._duration && 1e-10 !== this._rawPrevTime && (0 < this._rawPrevTime || t < 0 && 0 <= this._rawPrevTime)) && (r = "onReverseComplete", s = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (a = s = !0, r = "onReverseComplete") : 0 <= this._rawPrevTime && this._first && (a = !0), this._rawPrevTime = t;
                    else {
                        if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && s)
                            for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                        t = 0, this._initted || (a = !0)
                    }
                else {
                    if (this._hasPause && !this._forcingPlayhead && !e) {
                        if (u <= t)
                            for (n = this._first; n && n._startTime <= t && !l;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (l = n), n = n._next;
                        else
                            for (n = this._last; n && n._startTime >= t && !l;) n._duration || "isPause" === n.data && 0 < n._rawPrevTime && (l = n), n = n._prev;
                        l && (this._time = t = l._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    this._totalTime = this._time = this._rawPrevTime = t
                }
                if (this._time !== u && this._first || i || a || l) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== u && 0 < t && (this._active = !0), 0 === u && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), u <= (c = this._time))
                        for (n = this._first; n && (o = n._next, c === this._time && (!this._paused || p));)(n._active || n._startTime <= c && !n._paused && !n._gc) && (l === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                    else
                        for (n = this._last; n && (o = n._prev, c === this._time && (!this._paused || p));) {
                            if (n._active || n._startTime <= u && !n._paused && !n._gc) {
                                if (l === n) {
                                    for (l = n._prev; l && l.endTime() > this._time;) l.render(l._reversed ? l.totalDuration() - (t - l._startTime) * l._timeScale : (t - l._startTime) * l._timeScale, e, i), l = l._prev;
                                    l = null, this.pause()
                                }
                                n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                            }
                            n = o
                        }
                    this._onUpdate && (e || (g.length && v(), this._callback("onUpdate"))), r && (this._gc || (h === this._startTime || f !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (s && (g.length && v(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r)))
                }
            }, i._hasPausedChild = function() {
                for (var t = this._first; t;) {
                    if (t._paused || t instanceof f && t._hasPausedChild()) return !0;
                    t = t._next
                }
                return !1
            }, i.getChildren = function(t, e, i, n) {
                n = n || -9999999999;
                for (var s = [], o = this._first, r = 0; o;) o._startTime < n || (o instanceof h ? !1 !== e && (s[r++] = o) : (!1 !== i && (s[r++] = o), !1 !== t && (r = (s = s.concat(o.getChildren(!0, e, i))).length))), o = o._next;
                return s
            }, i.getTweensOf = function(t, e) {
                var i, n, s = this._gc,
                    o = [],
                    r = 0;
                for (s && this._enabled(!0, !0), n = (i = h.getTweensOf(t)).length; - 1 < --n;)(i[n].timeline === this || e && this._contains(i[n])) && (o[r++] = i[n]);
                return s && this._enabled(!1, !0), o
            }, i.recent = function() {
                return this._recent
            }, i._contains = function(t) {
                for (var e = t.timeline; e;) {
                    if (e === this) return !0;
                    e = e.timeline
                }
                return !1
            }, i.shiftChildren = function(t, e, i) {
                i = i || 0;
                for (var n, s = this._first, o = this._labels; s;) s._startTime >= i && (s._startTime += t), s = s._next;
                if (e)
                    for (n in o) o[n] >= i && (o[n] += t);
                return this._uncache(!0)
            }, i._kill = function(t, e) {
                if (!t && !e) return this._enabled(!1, !1);
                for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, s = !1; - 1 < --n;) i[n]._kill(t, e) && (s = !0);
                return s
            }, i.clear = function(t) {
                var e = this.getChildren(!1, !0, !0),
                    i = e.length;
                for (this._time = this._totalTime = 0; - 1 < --i;) e[i]._enabled(!1, !1);
                return !1 !== t && (this._labels = {}), this._uncache(!0)
            }, i.invalidate = function() {
                for (var t = this._first; t;) t.invalidate(), t = t._next;
                return u.prototype.invalidate.call(this)
            }, i._enabled = function(t, e) {
                if (t === this._gc)
                    for (var i = this._first; i;) i._enabled(t, !0), i = i._next;
                return d.prototype._enabled.call(this, t, e)
            }, i.totalTime = function(t, e, i) {
                this._forcingPlayhead = !0;
                var n = u.prototype.totalTime.apply(this, arguments);
                return this._forcingPlayhead = !1, n
            }, i.duration = function(t) {
                return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
            }, i.totalDuration = function(t) {
                if (!arguments.length) {
                    if (this._dirty) {
                        for (var e, i, n = 0, s = this._last, o = 999999999999; s;) e = s._prev, s._dirty && s.totalDuration(), s._startTime > o && this._sortChildren && !s._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(s, s._startTime - s._delay), this._calculatingDuration = 0) : o = s._startTime, s._startTime < 0 && !s._paused && (n -= s._startTime, this._timeline.smoothChildTiming && (this._startTime += s._startTime / this._timeScale, this._time -= s._startTime, this._totalTime -= s._startTime, this._rawPrevTime -= s._startTime), this.shiftChildren(-s._startTime, !1, -9999999999), o = 0), n < (i = s._startTime + s._totalDuration / s._timeScale) && (n = i), s = e;
                        this._duration = this._totalDuration = n, this._dirty = !1
                    }
                    return this._totalDuration
                }
                return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
            }, i.paused = function(t) {
                if (!t)
                    for (var e = this._first, i = this._time; e;) e._startTime === i && "isPause" === e.data && (e._rawPrevTime = 0), e = e._next;
                return u.prototype.paused.apply(this, arguments)
            }, i.usesFrames = function() {
                for (var t = this._timeline; t._timeline;) t = t._timeline;
                return t === u._rootFramesTimeline
            }, i.rawTime = function(t) {
                return t && (this._paused || this._repeat && 0 < this.time() && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
            }, f
        }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(e, a, t) {
            var i = function(t) {
                    e.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
                },
                n = a._internals,
                C = n.lazyTweens,
                P = n.lazyRender,
                l = _gsScope._gsDefine.globals,
                c = new t(null, null, 1, 0),
                s = i.prototype = new e;
            return s.constructor = i, s.kill()._gc = !1, i.version = "1.20.4", s.invalidate = function() {
                return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), e.prototype.invalidate.call(this)
            }, s.addCallback = function(t, e, i, n) {
                return this.add(a.delayedCall(0, t, i, n), e)
            }, s.removeCallback = function(t, e) {
                if (t)
                    if (null == e) this._kill(null, t);
                    else
                        for (var i = this.getTweensOf(t, !1), n = i.length, s = this._parseTimeOrLabel(e); - 1 < --n;) i[n]._startTime === s && i[n]._enabled(!1, !1);
                return this
            }, s.removePause = function(t) {
                return this.removeCallback(e._internals.pauseCallback, t)
            }, s.tweenTo = function(t, e) {
                e = e || {};
                var i, n, s, o = {
                        ease: c,
                        useFrames: this.usesFrames(),
                        immediateRender: !1,
                        lazy: !1
                    },
                    r = e.repeat && l.TweenMax || a;
                for (n in e) o[n] = e[n];
                return o.time = this._parseTimeOrLabel(t), i = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, s = new r(this, i, o), o.onStart = function() {
                    s.target.paused(!0), s.vars.time === s.target.time() || i !== s.duration() || s.isFromTo || s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale).render(s.time(), !0, !0), e.onStart && e.onStart.apply(e.onStartScope || e.callbackScope || s, e.onStartParams || [])
                }, s
            }, s.tweenFromTo = function(t, e, i) {
                i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                    onComplete: this.seek,
                    onCompleteParams: [t],
                    callbackScope: this
                }, i.immediateRender = !1 !== i.immediateRender;
                var n = this.tweenTo(e, i);
                return n.isFromTo = 1, n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
            }, s.render = function(t, e, i) {
                this._gc && this._enabled(!0, !1);
                var n, s, o, r, a, l, c, u, d = this._time,
                    h = this._dirty ? this.totalDuration() : this._totalDuration,
                    f = this._duration,
                    p = this._totalTime,
                    m = this._startTime,
                    g = this._timeScale,
                    v = this._rawPrevTime,
                    y = this._paused,
                    _ = this._cycle;
                if (d !== this._time && (t += this._time - d), h - 1e-7 <= t && 0 <= t) this._locked || (this._totalTime = h, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (s = !0, r = "onComplete", a = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && -1e-7 <= t || v < 0 || 1e-10 === v) && v !== t && this._first && (a = !0, 1e-10 < v && (r = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : t = (this._time = f) + 1e-4;
                else if (t < 1e-7)
                    if (this._locked || (this._totalTime = this._cycle = 0), ((this._time = 0) !== d || 0 === f && 1e-10 !== v && (0 < v || t < 0 && 0 <= v) && !this._locked) && (r = "onReverseComplete", s = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (a = s = !0, r = "onReverseComplete") : 0 <= v && this._first && (a = !0), this._rawPrevTime = t;
                    else {
                        if (this._rawPrevTime = f || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && s)
                            for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                        t = 0, this._initted || (a = !0)
                    }
                else if (0 === f && v < 0 && (a = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (l = f + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && p <= t && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = f - this._time), this._time > f ? t = (this._time = f) + 1e-4 : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                    if (d <= (t = this._time) || this._repeat && _ !== this._cycle)
                        for (n = this._first; n && n._startTime <= t && !c;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (c = n), n = n._next;
                    else
                        for (n = this._last; n && n._startTime >= t && !c;) n._duration || "isPause" === n.data && 0 < n._rawPrevTime && (c = n), n = n._prev;
                    c && c._startTime < f && (this._time = t = c._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                if (this._cycle !== _ && !this._locked) {
                    var b = this._yoyo && 0 != (1 & _),
                        w = b === (this._yoyo && 0 != (1 & this._cycle)),
                        x = this._totalTime,
                        T = this._cycle,
                        S = this._rawPrevTime,
                        k = this._time;
                    if (this._totalTime = _ * f, this._cycle < _ ? b = !b : this._totalTime += f, this._time = d, this._rawPrevTime = 0 === f ? v - 1e-4 : v, this._cycle = _, this._locked = !0, d = b ? 0 : f, this.render(d, e, 0 === f), e || this._gc || this.vars.onRepeat && (this._cycle = T, this._locked = !1, this._callback("onRepeat")), d !== this._time) return;
                    if (w && (this._cycle = _, this._locked = !0, d = b ? f + 1e-4 : -1e-4, this.render(d, !0, !1)), this._locked = !1, this._paused && !y) return;
                    this._time = k, this._totalTime = x, this._cycle = T, this._rawPrevTime = S
                }
                if (this._time !== d && this._first || i || a || c) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== p && 0 < t && (this._active = !0), 0 === p && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), d <= (u = this._time))
                        for (n = this._first; n && (o = n._next, u === this._time && (!this._paused || y));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (c === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                    else
                        for (n = this._last; n && (o = n._prev, u === this._time && (!this._paused || y));) {
                            if (n._active || n._startTime <= d && !n._paused && !n._gc) {
                                if (c === n) {
                                    for (c = n._prev; c && c.endTime() > this._time;) c.render(c._reversed ? c.totalDuration() - (t - c._startTime) * c._timeScale : (t - c._startTime) * c._timeScale, e, i), c = c._prev;
                                    c = null, this.pause()
                                }
                                n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                            }
                            n = o
                        }
                    this._onUpdate && (e || (C.length && P(), this._callback("onUpdate"))), r && (this._locked || this._gc || (m === this._startTime || g !== this._timeScale) && (0 === this._time || h >= this.totalDuration()) && (s && (C.length && P(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r)))
                } else p !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
            }, s.getActive = function(t, e, i) {
                null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                var n, s, o = [],
                    r = this.getChildren(t, e, i),
                    a = 0,
                    l = r.length;
                for (n = 0; n < l; n++)(s = r[n]).isActive() && (o[a++] = s);
                return o
            }, s.getLabelAfter = function(t) {
                t || 0 !== t && (t = this._time);
                var e, i = this.getLabelsArray(),
                    n = i.length;
                for (e = 0; e < n; e++)
                    if (i[e].time > t) return i[e].name;
                return null
            }, s.getLabelBefore = function(t) {
                null == t && (t = this._time);
                for (var e = this.getLabelsArray(), i = e.length; - 1 < --i;)
                    if (e[i].time < t) return e[i].name;
                return null
            }, s.getLabelsArray = function() {
                var t, e = [],
                    i = 0;
                for (t in this._labels) e[i++] = {
                    time: this._labels[t],
                    name: t
                };
                return e.sort(function(t, e) {
                    return t.time - e.time
                }), e
            }, s.invalidate = function() {
                return this._locked = !1, e.prototype.invalidate.call(this)
            }, s.progress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
            }, s.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
            }, s.totalDuration = function(t) {
                return arguments.length ? -1 !== this._repeat && t ? this.timeScale(this.totalDuration() / t) : this : (this._dirty && (e.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
            }, s.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
            }, s.repeat = function(t) {
                return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
            }, s.repeatDelay = function(t) {
                return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
            }, s.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, s.currentLabel = function(t) {
                return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
            }, i
        }, !0), T = 180 / Math.PI, w = [], x = [], S = [], v = {}, i = _gsScope._gsDefine.globals, y = function(t, e, i, n) {
            i === n && (i = n - (n - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
        }, k = function(t, e, i, n) {
            var s = {
                    a: t
                },
                o = {},
                r = {},
                a = {
                    c: n
                },
                l = (t + e) / 2,
                c = (e + i) / 2,
                u = (i + n) / 2,
                d = (l + c) / 2,
                h = (c + u) / 2,
                f = (h - d) / 8;
            return s.b = l + (t - l) / 4, o.b = d + f, s.c = o.a = (s.b + o.b) / 2, o.c = r.a = (d + h) / 2, r.b = h - f, a.b = u + (n - u) / 4, r.c = a.a = (r.b + a.b) / 2, [s, o, r, a]
        }, _ = function(t, e, i, n, s) {
            var o, r, a, l, c, u, d, h, f, p, m, g, v, y = t.length - 1,
                _ = 0,
                b = t[0].a;
            for (o = 0; o < y; o++) r = (c = t[_]).a, a = c.d, l = t[_ + 1].d, s ? (m = w[o], v = ((g = x[o]) + m) * e * .25 / (n ? .5 : S[o] || .5), h = a - ((u = a - (a - r) * (n ? .5 * e : 0 !== m ? v / m : 0)) + (((d = a + (l - a) * (n ? .5 * e : 0 !== g ? v / g : 0)) - u) * (3 * m / (m + g) + .5) / 4 || 0))) : h = a - ((u = a - (a - r) * e * .5) + (d = a + (l - a) * e * .5)) / 2, u += h, d += h, c.c = f = u, c.b = 0 !== o ? b : b = c.a + .6 * (c.c - c.a), c.da = a - r, c.ca = f - r, c.ba = b - r, i ? (p = k(r, b, f, a), t.splice(_, 1, p[0], p[1], p[2], p[3]), _ += 4) : _++, b = d;
            (c = t[_]).b = b, c.c = b + .4 * (c.d - b), c.da = c.d - c.a, c.ca = c.c - c.a, c.ba = b - c.a, i && (p = k(c.a, b, c.c, c.d), t.splice(_, 1, p[0], p[1], p[2], p[3]))
        }, b = function(t, e, i, n) {
            var s, o, r, a, l, c, u = [];
            if (n)
                for (o = (t = [n].concat(t)).length; - 1 < --o;) "string" == typeof(c = t[o][e]) && "=" === c.charAt(1) && (t[o][e] = n[e] + Number(c.charAt(0) + c.substr(2)));
            if ((s = t.length - 2) < 0) return u[0] = new y(t[0][e], 0, 0, t[0][e]), u;
            for (o = 0; o < s; o++) r = t[o][e], a = t[o + 1][e], u[o] = new y(r, 0, 0, a), i && (l = t[o + 2][e], w[o] = (w[o] || 0) + (a - r) * (a - r), x[o] = (x[o] || 0) + (l - a) * (l - a));
            return u[o] = new y(t[o][e], 0, 0, t[o + 1][e]), u
        }, f = function(t, e, i, n, s, o) {
            var r, a, l, c, u, d, h, f, p = {},
                m = [],
                g = o || t[0];
            for (a in s = "string" == typeof s ? "," + s + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == e && (e = 1), t[0]) m.push(a);
            if (1 < t.length) {
                for (f = t[t.length - 1], h = !0, r = m.length; - 1 < --r;)
                    if (a = m[r], .05 < Math.abs(g[a] - f[a])) {
                        h = !1;
                        break
                    } h && (t = t.concat(), o && t.unshift(o), t.push(t[1]), o = t[t.length - 3])
            }
            for (w.length = x.length = S.length = 0, r = m.length; - 1 < --r;) a = m[r], v[a] = -1 !== s.indexOf("," + a + ","), p[a] = b(t, a, v[a], o);
            for (r = w.length; - 1 < --r;) w[r] = Math.sqrt(w[r]), x[r] = Math.sqrt(x[r]);
            if (!n) {
                for (r = m.length; - 1 < --r;)
                    if (v[a])
                        for (d = (l = p[m[r]]).length - 1, c = 0; c < d; c++) u = l[c + 1].da / x[c] + l[c].da / w[c] || 0, S[c] = (S[c] || 0) + u * u;
                for (r = S.length; - 1 < --r;) S[r] = Math.sqrt(S[r])
            }
            for (r = m.length, c = i ? 4 : 1; - 1 < --r;) l = p[a = m[r]], _(l, e, i, n, v[a]), h && (l.splice(0, c), l.splice(l.length - c, c));
            return p
        }, p = function(t, e, i) {
            for (var n, s, o, r, a, l, c, u, d, h, f, p = 1 / i, m = t.length; - 1 < --m;)
                for (o = (h = t[m]).a, r = h.d - o, a = h.c - o, l = h.b - o, n = s = 0, u = 1; u <= i; u++) n = s - (s = ((c = p * u) * c * r + 3 * (d = 1 - c) * (c * a + d * l)) * c), e[f = m * i + u - 1] = (e[f] || 0) + n * n
        }, g = _gsScope._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.8",
            API: 2,
            global: !0,
            init: function(t, e, i) {
                this._target = t, e instanceof Array && (e = {
                    values: e
                }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                var n, s, o, r, a, l = e.values || [],
                    c = {},
                    u = l[0],
                    d = e.autoRotate || i.vars.orientToBezier;
                for (n in this._autoRotate = d ? d instanceof Array ? d : [
                        ["x", "y", "rotation", !0 === d ? 0 : Number(d) || 0]
                    ] : null, u) this._props.push(n);
                for (o = this._props.length; - 1 < --o;) n = this._props[o], this._overwriteProps.push(n), s = this._func[n] = "function" == typeof t[n], c[n] = s ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || c[n] !== l[0][n] && (a = c);
                if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? f(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : function(t, e, i) {
                        var n, s, o, r, a, l, c, u, d, h, f, p = {},
                            m = "cubic" === (e = e || "soft") ? 3 : 2,
                            g = "soft" === e,
                            v = [];
                        if (g && i && (t = [i].concat(t)), null == t || t.length < m + 1) throw "invalid Bezier data";
                        for (d in t[0]) v.push(d);
                        for (l = v.length; - 1 < --l;) {
                            for (p[d = v[l]] = a = [], h = 0, u = t.length, c = 0; c < u; c++) n = null == i ? t[c][d] : "string" == typeof(f = t[c][d]) && "=" === f.charAt(1) ? i[d] + Number(f.charAt(0) + f.substr(2)) : Number(f), g && 1 < c && c < u - 1 && (a[h++] = (n + a[h - 2]) / 2), a[h++] = n;
                            for (u = h - m + 1, c = h = 0; c < u; c += m) n = a[c], s = a[c + 1], o = a[c + 2], r = 2 === m ? 0 : a[c + 3], a[h++] = f = 3 === m ? new y(n, s, o, r) : new y(n, (2 * s + n) / 3, (2 * s + o) / 3, o);
                            a.length = h
                        }
                        return p
                    }(l, e.type, c), this._segCount = this._beziers[n].length, this._timeRes) {
                    var h = function(t, e) {
                        var i, n, s, o, r = [],
                            a = [],
                            l = 0,
                            c = 0,
                            u = (e = e >> 0 || 6) - 1,
                            d = [],
                            h = [];
                        for (i in t) p(t[i], r, e);
                        for (s = r.length, n = 0; n < s; n++) l += Math.sqrt(r[n]), h[o = n % e] = l, o === u && (c += l, d[o = n / e >> 0] = h, a[o] = c, l = 0, h = []);
                        return {
                            length: c,
                            lengths: a,
                            segments: d
                        }
                    }(this._beziers, this._timeRes);
                    this._length = h.length, this._lengths = h.lengths, this._segments = h.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                }
                if (d = this._autoRotate)
                    for (this._initialRotations = [], d[0] instanceof Array || (this._autoRotate = d = [d]), o = d.length; - 1 < --o;) {
                        for (r = 0; r < 3; r++) n = d[o][r], this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                        n = d[o][2], this._initialRotations[o] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0, this._overwriteProps.push(n)
                    }
                return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
            },
            set: function(t) {
                var e, i, n, s, o, r, a, l, c, u, d = this._segCount,
                    h = this._func,
                    f = this._target,
                    p = t !== this._startRatio;
                if (this._timeRes) {
                    if (c = this._lengths, u = this._curSeg, t *= this._length, n = this._li, t > this._l2 && n < d - 1) {
                        for (l = d - 1; n < l && (this._l2 = c[++n]) <= t;);
                        this._l1 = c[n - 1], this._li = n, this._curSeg = u = this._segments[n], this._s2 = u[this._s1 = this._si = 0]
                    } else if (t < this._l1 && 0 < n) {
                        for (; 0 < n && (this._l1 = c[--n]) >= t;);
                        0 === n && t < this._l1 ? this._l1 = 0 : n++, this._l2 = c[n], this._li = n, this._curSeg = u = this._segments[n], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                    }
                    if (e = n, t -= this._l1, n = this._si, t > this._s2 && n < u.length - 1) {
                        for (l = u.length - 1; n < l && (this._s2 = u[++n]) <= t;);
                        this._s1 = u[n - 1], this._si = n
                    } else if (t < this._s1 && 0 < n) {
                        for (; 0 < n && (this._s1 = u[--n]) >= t;);
                        0 === n && t < this._s1 ? this._s1 = 0 : n++, this._s2 = u[n], this._si = n
                    }
                    r = (n + (t - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                } else r = (t - (e = t < 0 ? 0 : 1 <= t ? d - 1 : d * t >> 0) * (1 / d)) * d;
                for (i = 1 - r, n = this._props.length; - 1 < --n;) s = this._props[n], a = (r * r * (o = this._beziers[s][e]).da + 3 * i * (r * o.ca + i * o.ba)) * r + o.a, this._mod[s] && (a = this._mod[s](a, f)), h[s] ? f[s](a) : f[s] = a;
                if (this._autoRotate) {
                    var m, g, v, y, _, b, w, x = this._autoRotate;
                    for (n = x.length; - 1 < --n;) s = x[n][2], b = x[n][3] || 0, w = !0 === x[n][4] ? 1 : T, o = this._beziers[x[n][0]], m = this._beziers[x[n][1]], o && m && (o = o[e], m = m[e], g = o.a + (o.b - o.a) * r, g += ((y = o.b + (o.c - o.b) * r) - g) * r, y += (o.c + (o.d - o.c) * r - y) * r, v = m.a + (m.b - m.a) * r, v += ((_ = m.b + (m.c - m.b) * r) - v) * r, _ += (m.c + (m.d - m.c) * r - _) * r, a = p ? Math.atan2(_ - v, y - g) * w + b : this._initialRotations[n], this._mod[s] && (a = this._mod[s](a, f)), h[s] ? f[s](a) : f[s] = a)
                }
            }
        }), n = g.prototype, g.bezierThrough = f, g.cubicToQuadratic = k, g._autoCSS = !0, g.quadraticToCubic = function(t, e, i) {
            return new y(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
        }, g._cssRegister = function() {
            var t = i.CSSPlugin;
            if (t) {
                var e = t._internals,
                    f = e._parseToProxy,
                    p = e._setPluginRatio,
                    m = e.CSSPropTween;
                e._registerComplexSpecialProp("bezier", {
                    parser: function(t, e, i, n, s, o) {
                        e instanceof Array && (e = {
                            values: e
                        }), o = new g;
                        var r, a, l, c = e.values,
                            u = c.length - 1,
                            d = [],
                            h = {};
                        if (u < 0) return s;
                        for (r = 0; r <= u; r++) l = f(t, c[r], n, s, o, u !== r), d[r] = l.end;
                        for (a in e) h[a] = e[a];
                        return h.values = d, (s = new m(t, "bezier", 0, 0, l.pt, 2)).data = l, s.plugin = o, s.setRatio = p, 0 === h.autoRotate && (h.autoRotate = !0), !h.autoRotate || h.autoRotate instanceof Array || (r = !0 === h.autoRotate ? 0 : Number(h.autoRotate), h.autoRotate = null != l.end.left ? [
                            ["left", "top", "rotation", r, !1]
                        ] : null != l.end.x && [
                            ["x", "y", "rotation", r, !1]
                        ]), h.autoRotate && (n._transform || n._enableTransforms(!1), l.autoRotate = n._target._gsTransform, l.proxy.rotation = l.autoRotate.rotation || 0, n._overwriteProps.push("rotation")), o._onInitTween(l.proxy, h, n._tween), s
                    }
                })
            }
        }, n._mod = function(t) {
            for (var e, i = this._overwriteProps, n = i.length; - 1 < --n;)(e = t[i[n]]) && "function" == typeof e && (this._mod[i[n]] = e)
        }, n._kill = function(t) {
            var e, i, n = this._props;
            for (e in this._beziers)
                if (e in t)
                    for (delete this._beziers[e], delete this._func[e], i = n.length; - 1 < --i;) n[i] === e && n.splice(i, 1);
            if (n = this._autoRotate)
                for (i = n.length; - 1 < --i;) t[n[i][2]] && n.splice(i, 1);
            return this._super._kill.call(this, t)
        }, _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(o, z) {
            var p, S, C, m, Y = function() {
                    o.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = Y.prototype.setRatio
                },
                c = _gsScope._gsDefine.globals,
                g = {},
                t = Y.prototype = new o("css");
            (t.constructor = Y).version = "1.20.4", Y.API = 2, Y.defaultTransformPerspective = 0, Y.defaultSkewType = "compensated", Y.defaultSmoothOrigin = !0, t = "px", Y.suffixMap = {
                top: t,
                right: t,
                bottom: t,
                left: t,
                width: t,
                height: t,
                fontSize: t,
                padding: t,
                margin: t,
                perspective: t,
                lineHeight: ""
            };
            var P, v, y, F, _, k, $, M, e, i, D = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                O = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                b = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                u = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                A = /(?:\d|\-|\+|=|#|\.)*/g,
                E = /opacity *= *([^)]*)/i,
                w = /opacity:([^;]*)/i,
                r = /alpha\(opacity *=.+?\)/i,
                x = /^(rgb|hsl)/,
                a = /([A-Z])/g,
                l = /-([a-z])/gi,
                T = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                d = function(t, e) {
                    return e.toUpperCase()
                },
                f = /(?:Left|Right|Width)/i,
                h = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                L = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                R = /,(?=[^\)]*(?:\(|$))/gi,
                I = /[\s,\(]/i,
                N = Math.PI / 180,
                j = 180 / Math.PI,
                H = {},
                n = {
                    style: {}
                },
                B = _gsScope.document || {
                    createElement: function() {
                        return n
                    }
                },
                W = function(t, e) {
                    return B.createElementNS ? B.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : B.createElement(t)
                },
                q = W("div"),
                U = W("img"),
                s = Y._internals = {
                    _specialProps: g
                },
                V = (_gsScope.navigator || {}).userAgent || "",
                X = (e = V.indexOf("Android"), i = W("a"), y = -1 !== V.indexOf("Safari") && -1 === V.indexOf("Chrome") && (-1 === e || 3 < parseFloat(V.substr(e + 8, 2))), _ = y && parseFloat(V.substr(V.indexOf("Version/") + 8, 2)) < 6, F = -1 !== V.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(V) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(V)) && (k = parseFloat(RegExp.$1)), !!i && (i.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(i.style.opacity))),
                G = function(t) {
                    return E.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                },
                Z = function(t) {
                    _gsScope.console && console.log(t)
                },
                Q = "",
                J = "",
                K = function(t, e) {
                    var i, n, s = (e = e || q).style;
                    if (void 0 !== s[t]) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; - 1 < --n && void 0 === s[i[n] + t];);
                    return 0 <= n ? (Q = "-" + (J = 3 === n ? "ms" : i[n]).toLowerCase() + "-", J + t) : null
                },
                tt = B.defaultView ? B.defaultView.getComputedStyle : function() {},
                et = Y.getStyle = function(t, e, i, n, s) {
                    var o;
                    return X || "opacity" !== e ? (!n && t.style[e] ? o = t.style[e] : (i = i || tt(t)) ? o = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(a, "-$1").toLowerCase()) : t.currentStyle && (o = t.currentStyle[e]), null == s || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : s) : G(t)
                },
                it = s.convertToPixels = function(t, e, i, n, s) {
                    if ("px" === n || !n && "lineHeight" !== e) return i;
                    if ("auto" === n || !i) return 0;
                    var o, r, a, l = f.test(e),
                        c = t,
                        u = q.style,
                        d = i < 0,
                        h = 1 === i;
                    if (d && (i = -i), h && (i *= 100), "lineHeight" !== e || n)
                        if ("%" === n && -1 !== e.indexOf("border")) o = i / 100 * (l ? t.clientWidth : t.clientHeight);
                        else {
                            if (u.cssText = "border:0 solid red;position:" + et(t, "position") + ";line-height:0;", "%" !== n && c.appendChild && "v" !== n.charAt(0) && "rem" !== n) u[l ? "borderLeftWidth" : "borderTopWidth"] = i + n;
                            else {
                                if (c = t.parentNode || B.body, -1 !== et(c, "display").indexOf("flex") && (u.position = "absolute"), r = c._gsCache, a = z.ticker.frame, r && l && r.time === a) return r.width * i / 100;
                                u[l ? "width" : "height"] = i + n
                            }
                            c.appendChild(q), o = parseFloat(q[l ? "offsetWidth" : "offsetHeight"]), c.removeChild(q), l && "%" === n && !1 !== Y.cacheWidths && ((r = c._gsCache = c._gsCache || {}).time = a, r.width = o / i * 100), 0 !== o || s || (o = it(t, e, i, n, !0))
                        }
                    else r = tt(t).lineHeight, t.style.lineHeight = i, o = parseFloat(tt(t).lineHeight), t.style.lineHeight = r;
                    return h && (o /= 100), d ? -o : o
                },
                nt = s.calculateOffset = function(t, e, i) {
                    if ("absolute" !== et(t, "position", i)) return 0;
                    var n = "left" === e ? "Left" : "Top",
                        s = et(t, "margin" + n, i);
                    return t["offset" + n] - (it(t, e, parseFloat(s), s.replace(A, "")) || 0)
                },
                st = function(t, e) {
                    var i, n, s, o = {};
                    if (e = e || tt(t, null))
                        if (i = e.length)
                            for (; - 1 < --i;)(-1 === (s = e[i]).indexOf("-transform") || Rt === s) && (o[s.replace(l, d)] = e.getPropertyValue(s));
                        else
                            for (i in e)(-1 === i.indexOf("Transform") || Lt === i) && (o[i] = e[i]);
                    else if (e = t.currentStyle || t.style)
                        for (i in e) "string" == typeof i && void 0 === o[i] && (o[i.replace(l, d)] = e[i]);
                    return X || (o.opacity = G(t)), n = Xt(t, e, !1), o.rotation = n.rotation, o.skewX = n.skewX, o.scaleX = n.scaleX, o.scaleY = n.scaleY, o.x = n.x, o.y = n.y, Ft && (o.z = n.z, o.rotationX = n.rotationX, o.rotationY = n.rotationY, o.scaleZ = n.scaleZ), o.filters && delete o.filters, o
                },
                ot = function(t, e, i, n, s) {
                    var o, r, a, l = {},
                        c = t.style;
                    for (r in i) "cssText" !== r && "length" !== r && isNaN(r) && (e[r] !== (o = i[r]) || s && s[r]) && -1 === r.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (l[r] = "auto" !== o || "left" !== r && "top" !== r ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[r] || "" === e[r].replace(u, "") ? o : 0 : nt(t, r), void 0 !== c[r] && (a = new bt(c, r, c[r], a)));
                    if (n)
                        for (r in n) "className" !== r && (l[r] = n[r]);
                    return {
                        difs: l,
                        firstMPT: a
                    }
                },
                rt = {
                    width: ["Left", "Right"],
                    height: ["Top", "Bottom"]
                },
                at = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                lt = function(t, e, i) {
                    if ("svg" === (t.nodeName + "").toLowerCase()) return (i || tt(t))[e] || 0;
                    if (t.getCTM && qt(t)) return t.getBBox()[e] || 0;
                    var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                        s = rt[e],
                        o = s.length;
                    for (i = i || tt(t, null); - 1 < --o;) n -= parseFloat(et(t, "padding" + s[o], i, !0)) || 0, n -= parseFloat(et(t, "border" + s[o] + "Width", i, !0)) || 0;
                    return n
                },
                ct = function(t, e) {
                    if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                    (null == t || "" === t) && (t = "0 0");
                    var i, n = t.split(" "),
                        s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0],
                        o = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
                    if (3 < n.length && !e) {
                        for (n = t.split(", ").join(",").split(","), t = [], i = 0; i < n.length; i++) t.push(ct(n[i]));
                        return t.join(",")
                    }
                    return null == o ? o = "center" === s ? "50%" : "0" : "center" === o && (o = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), t = s + " " + o + (2 < n.length ? " " + n[2] : ""), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== o.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === o.charAt(1), e.ox = parseFloat(s.replace(u, "")), e.oy = parseFloat(o.replace(u, "")), e.v = t), e || t
                },
                ut = function(t, e) {
                    return "function" == typeof t && (t = t(M, $)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                },
                dt = function(t, e) {
                    return "function" == typeof t && (t = t(M, $)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                },
                ht = function(t, e, i, n) {
                    var s, o, r, a;
                    return "function" == typeof t && (t = t(M, $)), null == t ? r = e : "number" == typeof t ? r = t : (360, s = t.split("_"), o = ((a = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === t.indexOf("rad") ? 1 : j) - (a ? 0 : e), s.length && (n && (n[i] = e + o), -1 !== t.indexOf("short") && ((o %= 360) !== o % 180 && (o = o < 0 ? o + 360 : o - 360)), -1 !== t.indexOf("_cw") && o < 0 ? o = (o + 3599999999640) % 360 - 360 * (o / 360 | 0) : -1 !== t.indexOf("ccw") && 0 < o && (o = (o - 3599999999640) % 360 - 360 * (o / 360 | 0))), r = e + o), r < 1e-6 && -1e-6 < r && (r = 0), r
                },
                ft = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                },
                pt = function(t, e, i) {
                    return 255 * (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                },
                mt = Y.parseColor = function(t, e) {
                    var i, n, s, o, r, a, l, c, u, d, h;
                    if (t)
                        if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                        else {
                            if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ft[t]) i = ft[t];
                            else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (n = t.charAt(1)) + n + (s = t.charAt(2)) + s + (o = t.charAt(3)) + o), i = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                            else if ("hsl" === t.substr(0, 3))
                                if (i = h = t.match(D), e) {
                                    if (-1 !== t.indexOf("=")) return t.match(O)
                                } else r = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, n = 2 * (l = Number(i[2]) / 100) - (s = l <= .5 ? l * (a + 1) : l + a - l * a), 3 < i.length && (i[3] = Number(i[3])), i[0] = pt(r + 1 / 3, n, s), i[1] = pt(r, n, s), i[2] = pt(r - 1 / 3, n, s);
                            else i = t.match(D) || ft.transparent;
                            i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), 3 < i.length && (i[3] = Number(i[3]))
                        }
                    else i = ft.black;
                    return e && !h && (n = i[0] / 255, s = i[1] / 255, o = i[2] / 255, l = ((c = Math.max(n, s, o)) + (u = Math.min(n, s, o))) / 2, c === u ? r = a = 0 : (d = c - u, a = .5 < l ? d / (2 - c - u) : d / (c + u), r = c === n ? (s - o) / d + (s < o ? 6 : 0) : c === s ? (o - n) / d + 2 : (n - s) / d + 4, r *= 60), i[0] = r + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i
                },
                gt = function(t, e) {
                    var i, n, s, o = t.match(vt) || [],
                        r = 0,
                        a = "";
                    if (!o.length) return t;
                    for (i = 0; i < o.length; i++) n = o[i], r += (s = t.substr(r, t.indexOf(n, r) - r)).length + n.length, 3 === (n = mt(n, e)).length && n.push(1), a += s + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                    return a + t.substr(r)
                },
                vt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (t in ft) vt += "|" + t + "\\b";
            vt = new RegExp(vt + ")", "gi"), Y.colorStringFilter = function(t) {
                var e, i = t[0] + " " + t[1];
                vt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = gt(t[0], e), t[1] = gt(t[1], e)), vt.lastIndex = 0
            }, z.defaultStringFilter || (z.defaultStringFilter = Y.colorStringFilter);
            var yt = function(t, e, o, r) {
                    if (null == t) return function(t) {
                        return t
                    };
                    var a, l = e ? (t.match(vt) || [""])[0] : "",
                        c = t.split(l).join("").match(b) || [],
                        u = t.substr(0, t.indexOf(c[0])),
                        d = ")" === t.charAt(t.length - 1) ? ")" : "",
                        h = -1 !== t.indexOf(" ") ? " " : ",",
                        f = c.length,
                        p = 0 < f ? c[0].replace(D, "") : "";
                    return f ? a = e ? function(t) {
                        var e, i, n, s;
                        if ("number" == typeof t) t += p;
                        else if (r && R.test(t)) {
                            for (s = t.replace(R, "|").split("|"), n = 0; n < s.length; n++) s[n] = a(s[n]);
                            return s.join(",")
                        }
                        if (e = (t.match(vt) || [l])[0], n = (i = t.split(e).join("").match(b) || []).length, f > n--)
                            for (; ++n < f;) i[n] = o ? i[(n - 1) / 2 | 0] : c[n];
                        return u + i.join(h) + h + e + d + (-1 !== t.indexOf("inset") ? " inset" : "")
                    } : function(t) {
                        var e, i, n;
                        if ("number" == typeof t) t += p;
                        else if (r && R.test(t)) {
                            for (i = t.replace(R, "|").split("|"), n = 0; n < i.length; n++) i[n] = a(i[n]);
                            return i.join(",")
                        }
                        if (n = (e = t.match(b) || []).length, f > n--)
                            for (; ++n < f;) e[n] = o ? e[(n - 1) / 2 | 0] : c[n];
                        return u + e.join(h) + d
                    } : function(t) {
                        return t
                    }
                },
                _t = function(c) {
                    return c = c.split(","),
                        function(t, e, i, n, s, o, r) {
                            var a, l = (e + "").split(" ");
                            for (r = {}, a = 0; a < 4; a++) r[c[a]] = l[a] = l[a] || l[(a - 1) / 2 >> 0];
                            return n.parse(t, r, s, o)
                        }
                },
                bt = (s._setPluginRatio = function(t) {
                    this.plugin.setRatio(t);
                    for (var e, i, n, s, o, r = this.data, a = r.proxy, l = r.firstMPT; l;) e = a[l.v], l.r ? e = Math.round(e) : e < 1e-6 && -1e-6 < e && (e = 0), l.t[l.p] = e, l = l._next;
                    if (r.autoRotate && (r.autoRotate.rotation = r.mod ? r.mod(a.rotation, this.t) : a.rotation), 1 === t || 0 === t)
                        for (l = r.firstMPT, o = 1 === t ? "e" : "b"; l;) {
                            if ((i = l.t).type) {
                                if (1 === i.type) {
                                    for (s = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) s += i["xn" + n] + i["xs" + (n + 1)];
                                    i[o] = s
                                }
                            } else i[o] = i.s + i.xs0;
                            l = l._next
                        }
                }, function(t, e, i, n, s) {
                    this.t = t, this.p = e, this.v = i, this.r = s, n && ((n._prev = this)._next = n)
                }),
                wt = (s._parseToProxy = function(t, e, i, n, s, o) {
                    var r, a, l, c, u, d = n,
                        h = {},
                        f = {},
                        p = i._transform,
                        m = H;
                    for (i._transform = null, H = e, n = u = i.parse(t, e, n, s), H = m, o && (i._transform = p, d && (d._prev = null, d._prev && (d._prev._next = null))); n && n !== d;) {
                        if (n.type <= 1 && (f[a = n.p] = n.s + n.c, h[a] = n.s, o || (c = new bt(n, "s", a, c, n.r), n.c = 0), 1 === n.type))
                            for (r = n.l; 0 < --r;) l = "xn" + r, f[a = n.p + "_" + l] = n.data[l], h[a] = n[l], o || (c = new bt(n, l, a, c, n.rxp[l]));
                        n = n._next
                    }
                    return {
                        proxy: h,
                        end: f,
                        firstMPT: c,
                        pt: u
                    }
                }, s.CSSPropTween = function(t, e, i, n, s, o, r, a, l, c, u) {
                    this.t = t, this.p = e, this.s = i, this.c = n, this.n = r || e, t instanceof wt || m.push(this.n), this.r = a, this.type = o || 0, l && (this.pr = l, p = !0), this.b = void 0 === c ? i : c, this.e = void 0 === u ? i + n : u, s && ((this._next = s)._prev = this)
                }),
                xt = function(t, e, i, n, s, o) {
                    var r = new wt(t, e, i, n - i, s, -1, o);
                    return r.b = i, r.e = r.xs0 = n, r
                },
                Tt = Y.parseComplex = function(t, e, i, n, s, o, r, a, l, c) {
                    i = i || o || "", "function" == typeof n && (n = n(M, $)), r = new wt(t, e, 0, 0, r, c ? 2 : 1, null, !1, a, i, n), n += "", s && vt.test(n + i) && (n = [i, n], Y.colorStringFilter(n), i = n[0], n = n[1]);
                    var u, d, h, f, p, m, g, v, y, _, b, w, x, T = i.split(", ").join(",").split(" "),
                        S = n.split(", ").join(",").split(" "),
                        k = T.length,
                        C = !1 !== P;
                    for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (-1 !== (n + i).indexOf("rgb") || -1 !== (n + i).indexOf("hsl") ? (T = T.join(" ").replace(R, ", ").split(" "), S = S.join(" ").replace(R, ", ").split(" ")) : (T = T.join(" ").split(",").join(", ").split(" "), S = S.join(" ").split(",").join(", ").split(" ")), k = T.length), k !== S.length && (k = (T = (o || "").split(" ")).length), r.plugin = l, r.setRatio = c, u = vt.lastIndex = 0; u < k; u++)
                        if (f = T[u], p = S[u], (v = parseFloat(f)) || 0 === v) r.appendXtra("", v, ut(p, v), p.replace(O, ""), C && -1 !== p.indexOf("px"), !0);
                        else if (s && vt.test(f)) w = ")" + ((w = p.indexOf(")") + 1) ? p.substr(w) : ""), x = -1 !== p.indexOf("hsl") && X, _ = p, f = mt(f, x), p = mt(p, x), (y = 6 < f.length + p.length) && !X && 0 === p[3] ? (r["xs" + r.l] += r.l ? " transparent" : "transparent", r.e = r.e.split(S[u]).join("transparent")) : (X || (y = !1), x ? r.appendXtra(_.substr(0, _.indexOf("hsl")) + (y ? "hsla(" : "hsl("), f[0], ut(p[0], f[0]), ",", !1, !0).appendXtra("", f[1], ut(p[1], f[1]), "%,", !1).appendXtra("", f[2], ut(p[2], f[2]), y ? "%," : "%" + w, !1) : r.appendXtra(_.substr(0, _.indexOf("rgb")) + (y ? "rgba(" : "rgb("), f[0], p[0] - f[0], ",", !0, !0).appendXtra("", f[1], p[1] - f[1], ",", !0).appendXtra("", f[2], p[2] - f[2], y ? "," : w, !0), y && (f = f.length < 4 ? 1 : f[3], r.appendXtra("", f, (p.length < 4 ? 1 : p[3]) - f, w, !1))), vt.lastIndex = 0;
                    else if (m = f.match(D)) {
                        if (!(g = p.match(O)) || g.length !== m.length) return r;
                        for (d = h = 0; d < m.length; d++) b = m[d], _ = f.indexOf(b, h), r.appendXtra(f.substr(h, _ - h), Number(b), ut(g[d], b), "", C && "px" === f.substr(_ + b.length, 2), 0 === d), h = _ + b.length;
                        r["xs" + r.l] += f.substr(h)
                    } else r["xs" + r.l] += r.l || r["xs" + r.l] ? " " + p : p;
                    if (-1 !== n.indexOf("=") && r.data) {
                        for (w = r.xs0 + r.data.s, u = 1; u < r.l; u++) w += r["xs" + u] + r.data["xn" + u];
                        r.e = w + r["xs" + u]
                    }
                    return r.l || (r.type = -1, r.xs0 = r.e), r.xfirst || r
                },
                St = 9;
            for ((t = wt.prototype).l = t.pr = 0; 0 < --St;) t["xn" + St] = 0, t["xs" + St] = "";
            t.xs0 = "", t._next = t._prev = t.xfirst = t.data = t.plugin = t.setRatio = t.rxp = null, t.appendXtra = function(t, e, i, n, s, o) {
                var r = this,
                    a = r.l;
                return r["xs" + a] += o && (a || r["xs" + a]) ? " " + t : t || "", i || 0 === a || r.plugin ? (r.l++, r.type = r.setRatio ? 2 : 1, r["xs" + r.l] = n || "", 0 < a ? (r.data["xn" + a] = e + i, r.rxp["xn" + a] = s, r["xn" + a] = e, r.plugin || (r.xfirst = new wt(r, "xn" + a, e, i, r.xfirst || r, 0, r.n, s, r.pr), r.xfirst.xs0 = 0)) : (r.data = {
                    s: e + i
                }, r.rxp = {}, r.s = e, r.c = i, r.r = s)) : r["xs" + a] += e + (n || ""), r
            };
            var kt = function(t, e) {
                    e = e || {}, this.p = e.prefix && K(t) || t, g[t] = g[this.p] = this, this.format = e.formatter || yt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                },
                Ct = s._registerComplexSpecialProp = function(t, e, i) {
                    "object" != typeof e && (e = {
                        parser: i
                    });
                    var n, s = t.split(","),
                        o = e.defaultValue;
                    for (i = i || [o], n = 0; n < s.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || o, new kt(s[n], e)
                },
                Pt = s._registerPluginProp = function(t) {
                    if (!g[t]) {
                        var l = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                        Ct(t, {
                            parser: function(t, e, i, n, s, o, r) {
                                var a = c.com.greensock.plugins[l];
                                return a ? (a._cssRegister(), g[i].parse(t, e, i, n, s, o, r)) : (Z("Error: " + l + " js file not loaded."), s)
                            }
                        })
                    }
                };
            (t = kt.prototype).parseComplex = function(t, e, i, n, s, o) {
                var r, a, l, c, u, d, h = this.keyword;
                if (this.multi && (R.test(i) || R.test(e) ? (a = e.replace(R, "|").split("|"), l = i.replace(R, "|").split("|")) : h && (a = [e], l = [i])), l) {
                    for (c = l.length > a.length ? l.length : a.length, r = 0; r < c; r++) e = a[r] = a[r] || this.dflt, i = l[r] = l[r] || this.dflt, h && ((u = e.indexOf(h)) !== (d = i.indexOf(h)) && (-1 === d ? a[r] = a[r].split(h).join("") : -1 === u && (a[r] += " " + h)));
                    e = a.join(", "), i = l.join(", ")
                }
                return Tt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, s, o)
            }, t.parse = function(t, e, i, n, s, o, r) {
                return this.parseComplex(t.style, this.format(et(t, this.p, C, !1, this.dflt)), this.format(e), s, o)
            }, Y.registerSpecialProp = function(t, l, c) {
                Ct(t, {
                    parser: function(t, e, i, n, s, o, r) {
                        var a = new wt(t, i, 0, 0, s, 2, i, !1, c);
                        return a.plugin = o, a.setRatio = l(t, e, n._tween, i), a
                    },
                    priority: c
                })
            }, Y.useSVGTransformAttr = !0;
            var $t, Mt, Dt, Ot, At, Et = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                Lt = K("transform"),
                Rt = Q + "transform",
                It = K("transformOrigin"),
                Ft = null !== K("perspective"),
                Nt = s.Transform = function() {
                    this.perspective = parseFloat(Y.defaultTransformPerspective) || 0, this.force3D = !(!1 === Y.defaultForce3D || !Ft) && (Y.defaultForce3D || "auto")
                },
                Ht = _gsScope.SVGElement,
                zt = function(t, e, i) {
                    var n, s = B.createElementNS("http://www.w3.org/2000/svg", t),
                        o = /([a-z])([A-Z])/g;
                    for (n in i) s.setAttributeNS(null, n.replace(o, "$1-$2").toLowerCase(), i[n]);
                    return e.appendChild(s), s
                },
                Yt = B.documentElement || {},
                jt = (At = k || /Android/i.test(V) && !_gsScope.chrome, B.createElementNS && !At && (Mt = zt("svg", Yt), Ot = (Dt = zt("rect", Mt, {
                    width: 100,
                    height: 50,
                    x: 100
                })).getBoundingClientRect().width, Dt.style[It] = "50% 50%", Dt.style[Lt] = "scaleX(0.5)", At = Ot === Dt.getBoundingClientRect().width && !(F && Ft), Yt.removeChild(Mt)), At),
                Bt = function(t, e, i, n, s, o) {
                    var r, a, l, c, u, d, h, f, p, m, g, v, y, _, b = t._gsTransform,
                        w = Vt(t, !0);
                    b && (y = b.xOrigin, _ = b.yOrigin), (!n || (r = n.split(" ")).length < 2) && (0 === (h = t.getBBox()).x && 0 === h.y && h.width + h.height === 0 && (h = {
                        x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                        y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                        width: 0,
                        height: 0
                    }), r = [(-1 !== (e = ct(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * h.width : parseFloat(e[0])) + h.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * h.height : parseFloat(e[1])) + h.y]), i.xOrigin = c = parseFloat(r[0]), i.yOrigin = u = parseFloat(r[1]), n && w !== Ut && (d = w[0], h = w[1], f = w[2], p = w[3], m = w[4], g = w[5], (v = d * p - h * f) && (a = c * (p / v) + u * (-f / v) + (f * g - p * m) / v, l = c * (-h / v) + u * (d / v) - (d * g - h * m) / v, c = i.xOrigin = r[0] = a, u = i.yOrigin = r[1] = l)), b && (o && (i.xOffset = b.xOffset, i.yOffset = b.yOffset, b = i), s || !1 !== s && !1 !== Y.defaultSmoothOrigin ? (a = c - y, l = u - _, b.xOffset += a * w[0] + l * w[2] - a, b.yOffset += a * w[1] + l * w[3] - l) : b.xOffset = b.yOffset = 0), o || t.setAttribute("data-svg-origin", r.join(" "))
                },
                Wt = function(t) {
                    var e, i = W("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                        n = this.parentNode,
                        s = this.nextSibling,
                        o = this.style.cssText;
                    if (Yt.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
                        e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Wt
                    } catch (t) {} else this._originalGetBBox && (e = this._originalGetBBox());
                    return s ? n.insertBefore(this, s) : n.appendChild(this), Yt.removeChild(i), this.style.cssText = o, e
                },
                qt = function(t) {
                    return !(!Ht || !t.getCTM || t.parentNode && !t.ownerSVGElement || ! function(e) {
                        try {
                            return e.getBBox()
                        } catch (t) {
                            return Wt.call(e, !0)
                        }
                    }(t))
                },
                Ut = [1, 0, 0, 1, 0, 0],
                Vt = function(t, e) {
                    var i, n, s, o, r, a, l = t._gsTransform || new Nt,
                        c = t.style;
                    if (Lt ? n = et(t, Rt, null, !0) : t.currentStyle && (n = (n = t.currentStyle.filter.match(h)) && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, !Lt || !(a = !tt(t) || "none" === tt(t).display) && t.parentNode || (a && (o = c.display, c.display = "block"), t.parentNode || (r = 1, Yt.appendChild(t)), i = !(n = et(t, Rt, null, !0)) || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, o ? c.display = o : a && Jt(c, "display"), r && Yt.removeChild(t)), (l.svg || t.getCTM && qt(t)) && (i && -1 !== (c[Lt] + "").indexOf("matrix") && (n = c[Lt], i = 0), s = t.getAttribute("transform"), i && s && (n = "matrix(" + (s = t.transform.baseVal.consolidate().matrix).a + "," + s.b + "," + s.c + "," + s.d + "," + s.e + "," + s.f + ")", i = 0)), i) return Ut;
                    for (s = (n || "").match(D) || [], St = s.length; - 1 < --St;) o = Number(s[St]), s[St] = (r = o - (o |= 0)) ? (1e5 * r + (r < 0 ? -.5 : .5) | 0) / 1e5 + o : o;
                    return e && 6 < s.length ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s
                },
                Xt = s.getTransform = function(t, e, i, n) {
                    if (t._gsTransform && i && !n) return t._gsTransform;
                    var s, o, r, a, l, c, u = i && t._gsTransform || new Nt,
                        d = u.scaleX < 0,
                        h = Ft && (parseFloat(et(t, It, e, !1, "0 0 0").split(" ")[2]) || u.zOrigin) || 0,
                        f = parseFloat(Y.defaultTransformPerspective) || 0;
                    if (u.svg = !(!t.getCTM || !qt(t)), u.svg && (Bt(t, et(t, It, e, !1, "50% 50%") + "", u, t.getAttribute("data-svg-origin")), $t = Y.useSVGTransformAttr || jt), (s = Vt(t)) !== Ut) {
                        if (16 === s.length) {
                            var p, m, g, v, y, _ = s[0],
                                b = s[1],
                                w = s[2],
                                x = s[3],
                                T = s[4],
                                S = s[5],
                                k = s[6],
                                C = s[7],
                                P = s[8],
                                $ = s[9],
                                M = s[10],
                                D = s[12],
                                O = s[13],
                                A = s[14],
                                E = s[11],
                                L = Math.atan2(k, M);
                            u.zOrigin && (D = P * (A = -u.zOrigin) - s[12], O = $ * A - s[13], A = M * A + u.zOrigin - s[14]), u.rotationX = L * j, L && (p = T * (v = Math.cos(-L)) + P * (y = Math.sin(-L)), m = S * v + $ * y, g = k * v + M * y, P = T * -y + P * v, $ = S * -y + $ * v, M = k * -y + M * v, E = C * -y + E * v, T = p, S = m, k = g), L = Math.atan2(-w, M), u.rotationY = L * j, L && (m = b * (v = Math.cos(-L)) - $ * (y = Math.sin(-L)), g = w * v - M * y, $ = b * y + $ * v, M = w * y + M * v, E = x * y + E * v, _ = p = _ * v - P * y, b = m, w = g), L = Math.atan2(b, _), u.rotation = L * j, L && (p = _ * (v = Math.cos(L)) + b * (y = Math.sin(L)), m = T * v + S * y, g = P * v + $ * y, b = b * v - _ * y, S = S * v - T * y, $ = $ * v - P * y, _ = p, T = m, P = g), u.rotationX && 359.9 < Math.abs(u.rotationX) + Math.abs(u.rotation) && (u.rotationX = u.rotation = 0, u.rotationY = 180 - u.rotationY), L = Math.atan2(T, S), u.scaleX = (1e5 * Math.sqrt(_ * _ + b * b + w * w) + .5 | 0) / 1e5, u.scaleY = (1e5 * Math.sqrt(S * S + k * k) + .5 | 0) / 1e5, u.scaleZ = (1e5 * Math.sqrt(P * P + $ * $ + M * M) + .5 | 0) / 1e5, _ /= u.scaleX, T /= u.scaleY, b /= u.scaleX, S /= u.scaleY, 2e-5 < Math.abs(L) ? (u.skewX = L * j, T = 0, "simple" !== u.skewType && (u.scaleY *= 1 / Math.cos(L))) : u.skewX = 0, u.perspective = E ? 1 / (E < 0 ? -E : E) : 0, u.x = D, u.y = O, u.z = A, u.svg && (u.x -= u.xOrigin - (u.xOrigin * _ - u.yOrigin * T), u.y -= u.yOrigin - (u.yOrigin * b - u.xOrigin * S))
                        } else if (!Ft || n || !s.length || u.x !== s[4] || u.y !== s[5] || !u.rotationX && !u.rotationY) {
                            var R = 6 <= s.length,
                                I = R ? s[0] : 1,
                                F = s[1] || 0,
                                N = s[2] || 0,
                                H = R ? s[3] : 1;
                            u.x = s[4] || 0, u.y = s[5] || 0, r = Math.sqrt(I * I + F * F), a = Math.sqrt(H * H + N * N), l = I || F ? Math.atan2(F, I) * j : u.rotation || 0, c = N || H ? Math.atan2(N, H) * j + l : u.skewX || 0, u.scaleX = r, u.scaleY = a, u.rotation = l, u.skewX = c, Ft && (u.rotationX = u.rotationY = u.z = 0, u.perspective = f, u.scaleZ = 1), u.svg && (u.x -= u.xOrigin - (u.xOrigin * I + u.yOrigin * N), u.y -= u.yOrigin - (u.xOrigin * F + u.yOrigin * H))
                        }
                        for (o in 90 < Math.abs(u.skewX) && Math.abs(u.skewX) < 270 && (d ? (u.scaleX *= -1, u.skewX += u.rotation <= 0 ? 180 : -180, u.rotation += u.rotation <= 0 ? 180 : -180) : (u.scaleY *= -1, u.skewX += u.skewX <= 0 ? 180 : -180)), u.zOrigin = h, u) u[o] < 2e-5 && -2e-5 < u[o] && (u[o] = 0)
                    }
                    return i && ((t._gsTransform = u).svg && ($t && t.style[Lt] ? z.delayedCall(.001, function() {
                        Jt(t.style, Lt)
                    }) : !$t && t.getAttribute("transform") && z.delayedCall(.001, function() {
                        t.removeAttribute("transform")
                    }))), u
                },
                Gt = function(t) {
                    var e, i, n = this.data,
                        s = -n.rotation * N,
                        o = s + n.skewX * N,
                        r = (Math.cos(s) * n.scaleX * 1e5 | 0) / 1e5,
                        a = (Math.sin(s) * n.scaleX * 1e5 | 0) / 1e5,
                        l = (Math.sin(o) * -n.scaleY * 1e5 | 0) / 1e5,
                        c = (Math.cos(o) * n.scaleY * 1e5 | 0) / 1e5,
                        u = this.t.style,
                        d = this.t.currentStyle;
                    if (d) {
                        i = a, a = -l, l = -i, e = d.filter, u.filter = "";
                        var h, f, p = this.t.offsetWidth,
                            m = this.t.offsetHeight,
                            g = "absolute" !== d.position,
                            v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + r + ", M12=" + a + ", M21=" + l + ", M22=" + c,
                            y = n.x + p * n.xPercent / 100,
                            _ = n.y + m * n.yPercent / 100;
                        if (null != n.ox && (y += (h = (n.oxp ? p * n.ox * .01 : n.ox) - p / 2) - (h * r + (f = (n.oyp ? m * n.oy * .01 : n.oy) - m / 2) * a), _ += f - (h * l + f * c)), g ? v += ", Dx=" + ((h = p / 2) - (h * r + (f = m / 2) * a) + y) + ", Dy=" + (f - (h * l + f * c) + _) + ")" : v += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? u.filter = e.replace(L, v) : u.filter = v + " " + e, (0 === t || 1 === t) && 1 === r && 0 === a && 0 === l && 1 === c && (g && -1 === v.indexOf("Dx=0, Dy=0") || E.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && u.removeAttribute("filter")), !g) {
                            var b, w, x, T = k < 8 ? 1 : -1;
                            for (h = n.ieOffsetX || 0, f = n.ieOffsetY || 0, n.ieOffsetX = Math.round((p - ((r < 0 ? -r : r) * p + (a < 0 ? -a : a) * m)) / 2 + y), n.ieOffsetY = Math.round((m - ((c < 0 ? -c : c) * m + (l < 0 ? -l : l) * p)) / 2 + _), St = 0; St < 4; St++) x = (i = -1 !== (b = d[w = at[St]]).indexOf("px") ? parseFloat(b) : it(this.t, w, parseFloat(b), b.replace(A, "")) || 0) !== n[w] ? St < 2 ? -n.ieOffsetX : -n.ieOffsetY : St < 2 ? h - n.ieOffsetX : f - n.ieOffsetY, u[w] = (n[w] = Math.round(i - x * (0 === St || 2 === St ? 1 : T))) + "px"
                        }
                    }
                },
                Zt = s.set3DTransformRatio = s.setTransformRatio = function(t) {
                    var e, i, n, s, o, r, a, l, c, u, d, h, f, p, m, g, v, y, _, b, w = this.data,
                        x = this.t.style,
                        T = w.rotation,
                        S = w.rotationX,
                        k = w.rotationY,
                        C = w.scaleX,
                        P = w.scaleY,
                        $ = w.scaleZ,
                        M = w.x,
                        D = w.y,
                        O = w.z,
                        A = w.svg,
                        E = w.perspective,
                        L = w.force3D,
                        R = w.skewY,
                        I = w.skewX;
                    if (R && (I += R, T += R), !((1 !== t && 0 !== t || "auto" !== L || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && L || O || E || k || S || 1 !== $) || $t && A || !Ft) T || I || A ? (T *= N, b = I * N, 1e5, i = Math.cos(T) * C, o = Math.sin(T) * C, n = Math.sin(T - b) * -P, r = Math.cos(T - b) * P, b && "simple" === w.skewType && (e = Math.tan(b - R * N), n *= e = Math.sqrt(1 + e * e), r *= e, R && (e = Math.tan(R * N), i *= e = Math.sqrt(1 + e * e), o *= e)), A && (M += w.xOrigin - (w.xOrigin * i + w.yOrigin * n) + w.xOffset, D += w.yOrigin - (w.xOrigin * o + w.yOrigin * r) + w.yOffset, $t && (w.xPercent || w.yPercent) && (m = this.t.getBBox(), M += .01 * w.xPercent * m.width, D += .01 * w.yPercent * m.height), M < (m = 1e-6) && -m < M && (M = 0), D < m && -m < D && (D = 0)), _ = (1e5 * i | 0) / 1e5 + "," + (1e5 * o | 0) / 1e5 + "," + (1e5 * n | 0) / 1e5 + "," + (1e5 * r | 0) / 1e5 + "," + M + "," + D + ")", A && $t ? this.t.setAttribute("transform", "matrix(" + _) : x[Lt] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + _) : x[Lt] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + C + ",0,0," + P + "," + M + "," + D + ")";
                    else {
                        if (F && (C < (m = 1e-4) && -m < C && (C = $ = 2e-5), P < m && -m < P && (P = $ = 2e-5), !E || w.z || w.rotationX || w.rotationY || (E = 0)), T || I) T *= N, g = i = Math.cos(T), v = o = Math.sin(T), I && (T -= I * N, g = Math.cos(T), v = Math.sin(T), "simple" === w.skewType && (e = Math.tan((I - R) * N), g *= e = Math.sqrt(1 + e * e), v *= e, w.skewY && (e = Math.tan(R * N), i *= e = Math.sqrt(1 + e * e), o *= e))), n = -v, r = g;
                        else {
                            if (!(k || S || 1 !== $ || E || A)) return void(x[Lt] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) translate3d(" : "translate3d(") + M + "px," + D + "px," + O + "px)" + (1 !== C || 1 !== P ? " scale(" + C + "," + P + ")" : ""));
                            i = r = 1, n = o = 0
                        }
                        u = 1, s = a = l = c = d = h = 0, f = E ? -1 / E : 0, p = w.zOrigin, m = 1e-6, ",", "0", (T = k * N) && (g = Math.cos(T), d = f * (l = -(v = Math.sin(T))), s = i * v, a = o * v, f *= u = g, i *= g, o *= g), (T = S * N) && (e = n * (g = Math.cos(T)) + s * (v = Math.sin(T)), y = r * g + a * v, c = u * v, h = f * v, s = n * -v + s * g, a = r * -v + a * g, u *= g, f *= g, n = e, r = y), 1 !== $ && (s *= $, a *= $, u *= $, f *= $), 1 !== P && (n *= P, r *= P, c *= P, h *= P), 1 !== C && (i *= C, o *= C, l *= C, d *= C), (p || A) && (p && (M += s * -p, D += a * -p, O += u * -p + p), A && (M += w.xOrigin - (w.xOrigin * i + w.yOrigin * n) + w.xOffset, D += w.yOrigin - (w.xOrigin * o + w.yOrigin * r) + w.yOffset), M < m && -m < M && (M = "0"), D < m && -m < D && (D = "0"), O < m && -m < O && (O = 0)), _ = w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix3d(" : "matrix3d(", _ += (i < m && -m < i ? "0" : i) + "," + (o < m && -m < o ? "0" : o) + "," + (l < m && -m < l ? "0" : l), _ += "," + (d < m && -m < d ? "0" : d) + "," + (n < m && -m < n ? "0" : n) + "," + (r < m && -m < r ? "0" : r), S || k || 1 !== $ ? (_ += "," + (c < m && -m < c ? "0" : c) + "," + (h < m && -m < h ? "0" : h) + "," + (s < m && -m < s ? "0" : s), _ += "," + (a < m && -m < a ? "0" : a) + "," + (u < m && -m < u ? "0" : u) + "," + (f < m && -m < f ? "0" : f) + ",") : _ += ",0,0,0,0,1,0,", _ += M + "," + D + "," + O + "," + (E ? 1 + -O / E : 1) + ")", x[Lt] = _
                    }
                };
            (t = Nt.prototype).x = t.y = t.z = t.skewX = t.skewY = t.rotation = t.rotationX = t.rotationY = t.zOrigin = t.xPercent = t.yPercent = t.xOffset = t.yOffset = 0, t.scaleX = t.scaleY = t.scaleZ = 1, Ct("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                parser: function(t, e, i, n, s, o, r) {
                    if (n._lastParsedTransform === r) return s;
                    var a, l = (n._lastParsedTransform = r).scale && "function" == typeof r.scale ? r.scale : 0;
                    "function" == typeof r[i] && (a = r[i], r[i] = e), l && (r.scale = l(M, t));
                    var c, u, d, h, f, p, m, g, v, y = t._gsTransform,
                        _ = t.style,
                        b = Et.length,
                        w = r,
                        x = {},
                        T = "transformOrigin",
                        S = Xt(t, C, !0, w.parseTransform),
                        k = w.transform && ("function" == typeof w.transform ? w.transform(M, $) : w.transform);
                    if (S.skewType = w.skewType || S.skewType || Y.defaultSkewType, n._transform = S, k && "string" == typeof k && Lt)(u = q.style)[Lt] = k, u.display = "block", u.position = "absolute", B.body.appendChild(q), c = Xt(q, null, !1), "simple" === S.skewType && (c.scaleY *= Math.cos(c.skewX * N)), S.svg && (p = S.xOrigin, m = S.yOrigin, c.x -= S.xOffset, c.y -= S.yOffset, (w.transformOrigin || w.svgOrigin) && (k = {}, Bt(t, ct(w.transformOrigin), k, w.svgOrigin, w.smoothOrigin, !0), p = k.xOrigin, m = k.yOrigin, c.x -= k.xOffset - S.xOffset, c.y -= k.yOffset - S.yOffset), (p || m) && (g = Vt(q, !0), c.x -= p - (p * g[0] + m * g[2]), c.y -= m - (p * g[1] + m * g[3]))), B.body.removeChild(q), c.perspective || (c.perspective = S.perspective), null != w.xPercent && (c.xPercent = dt(w.xPercent, S.xPercent)), null != w.yPercent && (c.yPercent = dt(w.yPercent, S.yPercent));
                    else if ("object" == typeof w) {
                        if (c = {
                                scaleX: dt(null != w.scaleX ? w.scaleX : w.scale, S.scaleX),
                                scaleY: dt(null != w.scaleY ? w.scaleY : w.scale, S.scaleY),
                                scaleZ: dt(w.scaleZ, S.scaleZ),
                                x: dt(w.x, S.x),
                                y: dt(w.y, S.y),
                                z: dt(w.z, S.z),
                                xPercent: dt(w.xPercent, S.xPercent),
                                yPercent: dt(w.yPercent, S.yPercent),
                                perspective: dt(w.transformPerspective, S.perspective)
                            }, null != (f = w.directionalRotation))
                            if ("object" == typeof f)
                                for (u in f) w[u] = f[u];
                            else w.rotation = f;
                        "string" == typeof w.x && -1 !== w.x.indexOf("%") && (c.x = 0, c.xPercent = dt(w.x, S.xPercent)), "string" == typeof w.y && -1 !== w.y.indexOf("%") && (c.y = 0, c.yPercent = dt(w.y, S.yPercent)), c.rotation = ht("rotation" in w ? w.rotation : "shortRotation" in w ? w.shortRotation + "_short" : "rotationZ" in w ? w.rotationZ : S.rotation, S.rotation, "rotation", x), Ft && (c.rotationX = ht("rotationX" in w ? w.rotationX : "shortRotationX" in w ? w.shortRotationX + "_short" : S.rotationX || 0, S.rotationX, "rotationX", x), c.rotationY = ht("rotationY" in w ? w.rotationY : "shortRotationY" in w ? w.shortRotationY + "_short" : S.rotationY || 0, S.rotationY, "rotationY", x)), c.skewX = ht(w.skewX, S.skewX), c.skewY = ht(w.skewY, S.skewY)
                    }
                    for (Ft && null != w.force3D && (S.force3D = w.force3D, h = !0), (d = S.force3D || S.z || S.rotationX || S.rotationY || c.z || c.rotationX || c.rotationY || c.perspective) || null == w.scale || (c.scaleZ = 1); - 1 < --b;)(1e-6 < (k = c[v = Et[b]] - S[v]) || k < -1e-6 || null != w[v] || null != H[v]) && (h = !0, s = new wt(S, v, S[v], k, s), v in x && (s.e = x[v]), s.xs0 = 0, s.plugin = o, n._overwriteProps.push(s.n));
                    return k = w.transformOrigin, S.svg && (k || w.svgOrigin) && (p = S.xOffset, m = S.yOffset, Bt(t, ct(k), c, w.svgOrigin, w.smoothOrigin), s = xt(S, "xOrigin", (y ? S : c).xOrigin, c.xOrigin, s, T), s = xt(S, "yOrigin", (y ? S : c).yOrigin, c.yOrigin, s, T), (p !== S.xOffset || m !== S.yOffset) && (s = xt(S, "xOffset", y ? p : S.xOffset, S.xOffset, s, T), s = xt(S, "yOffset", y ? m : S.yOffset, S.yOffset, s, T)), k = "0px 0px"), (k || Ft && d && S.zOrigin) && (Lt ? (h = !0, v = It, k = (k || et(t, v, C, !1, "50% 50%")) + "", (s = new wt(_, v, 0, 0, s, -1, T)).b = _[v], s.plugin = o, Ft ? (u = S.zOrigin, k = k.split(" "), S.zOrigin = (2 < k.length && (0 === u || "0px" !== k[2]) ? parseFloat(k[2]) : u) || 0, s.xs0 = s.e = k[0] + " " + (k[1] || "50%") + " 0px", (s = new wt(S, "zOrigin", 0, 0, s, -1, s.n)).b = u, s.xs0 = s.e = S.zOrigin) : s.xs0 = s.e = k) : ct(k + "", S)), h && (n._transformType = S.svg && $t || !d && 3 !== this._transformType ? 2 : 3), a && (r[i] = a), l && (r.scale = l), s
                },
                prefix: !0
            }), Ct("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: !0,
                color: !0,
                multi: !0,
                keyword: "inset"
            }), Ct("borderRadius", {
                defaultValue: "0px",
                parser: function(t, e, i, n, s, o) {
                    e = this.format(e);
                    var r, a, l, c, u, d, h, f, p, m, g, v, y, _, b, w, x = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        T = t.style;
                    for (p = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), r = e.split(" "), a = 0; a < x.length; a++) this.p.indexOf("border") && (x[a] = K(x[a])), -1 !== (u = c = et(t, x[a], C, !1, "0px")).indexOf(" ") && (u = (c = u.split(" "))[0], c = c[1]), d = l = r[a], h = parseFloat(u), v = u.substr((h + "").length), (y = "=" === d.charAt(1)) ? (f = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), f *= parseFloat(d), g = d.substr((f + "").length - (f < 0 ? 1 : 0)) || "") : (f = parseFloat(d), g = d.substr((f + "").length)), "" === g && (g = S[i] || v), g !== v && (_ = it(t, "borderLeft", h, v), b = it(t, "borderTop", h, v), "%" === g ? (u = _ / p * 100 + "%", c = b / m * 100 + "%") : "em" === g ? (u = _ / (w = it(t, "borderLeft", 1, "em")) + "em", c = b / w + "em") : (u = _ + "px", c = b + "px"), y && (d = parseFloat(u) + f + g, l = parseFloat(c) + f + g)), s = Tt(T, x[a], u + " " + c, d + " " + l, !1, "0px", s);
                    return s
                },
                prefix: !0,
                formatter: yt("0px 0px 0px 0px", !1, !0)
            }), Ct("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                defaultValue: "0px",
                parser: function(t, e, i, n, s, o) {
                    return Tt(t.style, i, this.format(et(t, i, C, !1, "0px 0px")), this.format(e), !1, "0px", s)
                },
                prefix: !0,
                formatter: yt("0px 0px", !1, !0)
            }), Ct("backgroundPosition", {
                defaultValue: "0 0",
                parser: function(t, e, i, n, s, o) {
                    var r, a, l, c, u, d, h = "background-position",
                        f = C || tt(t, null),
                        p = this.format((f ? k ? f.getPropertyValue(h + "-x") + " " + f.getPropertyValue(h + "-y") : f.getPropertyValue(h) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                        m = this.format(e);
                    if (-1 !== p.indexOf("%") != (-1 !== m.indexOf("%")) && m.split(",").length < 2 && ((d = et(t, "backgroundImage").replace(T, "")) && "none" !== d)) {
                        for (r = p.split(" "), a = m.split(" "), U.setAttribute("src", d), l = 2; - 1 < --l;)(c = -1 !== (p = r[l]).indexOf("%")) !== (-1 !== a[l].indexOf("%")) && (u = 0 === l ? t.offsetWidth - U.width : t.offsetHeight - U.height, r[l] = c ? parseFloat(p) / 100 * u + "px" : parseFloat(p) / u * 100 + "%");
                        p = r.join(" ")
                    }
                    return this.parseComplex(t.style, p, m, s, o)
                },
                formatter: ct
            }), Ct("backgroundSize", {
                defaultValue: "0 0",
                formatter: function(t) {
                    return ct(-1 === (t += "").indexOf(" ") ? t + " " + t : t)
                }
            }), Ct("perspective", {
                defaultValue: "0px",
                prefix: !0
            }), Ct("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: !0
            }), Ct("transformStyle", {
                prefix: !0
            }), Ct("backfaceVisibility", {
                prefix: !0
            }), Ct("userSelect", {
                prefix: !0
            }), Ct("margin", {
                parser: _t("marginTop,marginRight,marginBottom,marginLeft")
            }), Ct("padding", {
                parser: _t("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), Ct("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function(t, e, i, n, s, o) {
                    var r, a, l;
                    return k < 9 ? (a = t.currentStyle, l = k < 8 ? " " : ",", r = "rect(" + a.clipTop + l + a.clipRight + l + a.clipBottom + l + a.clipLeft + ")", e = this.format(e).split(",").join(l)) : (r = this.format(et(t, this.p, C, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, r, e, s, o)
                }
            }), Ct("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: !0,
                multi: !0
            }), Ct("autoRound,strictUnits", {
                parser: function(t, e, i, n, s) {
                    return s
                }
            }), Ct("border", {
                defaultValue: "0px solid #000",
                parser: function(t, e, i, n, s, o) {
                    var r = et(t, "borderTopWidth", C, !1, "0px"),
                        a = this.format(e).split(" "),
                        l = a[0].replace(A, "");
                    return "px" !== l && (r = parseFloat(r) / it(t, "borderTopWidth", 1, l) + l), this.parseComplex(t.style, this.format(r + " " + et(t, "borderTopStyle", C, !1, "solid") + " " + et(t, "borderTopColor", C, !1, "#000")), a.join(" "), s, o)
                },
                color: !0,
                formatter: function(t) {
                    var e = t.split(" ");
                    return e[0] + " " + (e[1] || "solid") + " " + (t.match(vt) || ["#000"])[0]
                }
            }), Ct("borderWidth", {
                parser: _t("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }), Ct("float,cssFloat,styleFloat", {
                parser: function(t, e, i, n, s, o) {
                    var r = t.style,
                        a = "cssFloat" in r ? "cssFloat" : "styleFloat";
                    return new wt(r, a, 0, 0, s, -1, i, !1, 0, r[a], e)
                }
            });
            var Qt = function(t) {
                var e, i = this.t,
                    n = i.filter || et(this.data, "filter") || "",
                    s = this.s + this.c * t | 0;
                100 === s && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !et(this.data, "filter")) : (i.filter = n.replace(r, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + s + ")"), -1 === n.indexOf("pacity") ? 0 === s && this.xn1 || (i.filter = n + " alpha(opacity=" + s + ")") : i.filter = n.replace(E, "opacity=" + s))
            };
            Ct("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function(t, e, i, n, s, o) {
                    var r = parseFloat(et(t, "opacity", C, !1, "1")),
                        a = t.style,
                        l = "autoAlpha" === i;
                    return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + r), l && 1 === r && "hidden" === et(t, "visibility", C) && 0 !== e && (r = 0), X ? s = new wt(a, "opacity", r, e - r, s) : ((s = new wt(a, "opacity", 100 * r, 100 * (e - r), s)).xn1 = l ? 1 : 0, a.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = t, s.plugin = o, s.setRatio = Qt), l && ((s = new wt(a, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== r ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit", n._overwriteProps.push(s.n), n._overwriteProps.push(i)), s
                }
            });
            var Jt = function(t, e) {
                    e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(a, "-$1").toLowerCase())) : t.removeAttribute(e))
                },
                Kt = function(t) {
                    if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                        this.t.setAttribute("class", 0 === t ? this.b : this.e);
                        for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Jt(i, e.p), e = e._next;
                        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                };
            Ct("className", {
                parser: function(t, e, i, n, s, o, r) {
                    var a, l, c, u, d, h = t.getAttribute("class") || "",
                        f = t.style.cssText;
                    if ((s = n._classNamePT = new wt(t, i, 0, 0, s, 2)).setRatio = Kt, s.pr = -11, p = !0, s.b = h, l = st(t, C), c = t._gsClassPT) {
                        for (u = {}, d = c.data; d;) u[d.p] = 1, d = d._next;
                        c.setRatio(1)
                    }
                    return (t._gsClassPT = s).e = "=" !== e.charAt(1) ? e : h.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", s.e), a = ot(t, l, st(t), r, u), t.setAttribute("class", h), s.data = a.firstMPT, t.style.cssText = f, s.xfirst = n.parse(t, a.difs, s, o)
                }
            });
            var te = function(t) {
                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var e, i, n, s, o, r = this.t.style,
                        a = g.transform.parse;
                    if ("all" === this.e) s = !(r.cssText = "");
                    else
                        for (n = (e = this.e.split(" ").join("").split(",")).length; - 1 < --n;) i = e[n], g[i] && (g[i].parse === a ? s = !0 : i = "transformOrigin" === i ? It : g[i].p), Jt(r, i);
                    s && (Jt(r, Lt), (o = this.t._gsTransform) && (o.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                }
            };
            for (Ct("clearProps", {
                    parser: function(t, e, i, n, s) {
                        return (s = new wt(t, i, 0, 0, s, 2)).setRatio = te, s.e = e, s.pr = -10, s.data = n._tween, p = !0, s
                    }
                }), t = "bezier,throwProps,physicsProps,physics2D".split(","), St = t.length; St--;) Pt(t[St]);
            (t = Y.prototype)._firstPT = t._lastParsedTransform = t._transform = null, t._onInitTween = function(t, e, i, n) {
                if (!t.nodeType) return !1;
                this._target = $ = t, this._tween = i, this._vars = e, M = n, P = e.autoRound, p = !1, S = e.suffixMap || Y.suffixMap, C = tt(t, ""), m = this._overwriteProps;
                var s, o, r, a, l, c, u, d, h, f = t.style;
                if (v && "" === f.zIndex && (("auto" === (s = et(t, "zIndex", C)) || "" === s) && this._addLazySet(f, "zIndex", 0)), "string" == typeof e && (a = f.cssText, s = st(t, C), f.cssText = a + ";" + e, s = ot(t, s, st(t)).difs, !X && w.test(e) && (s.opacity = parseFloat(RegExp.$1)), e = s, f.cssText = a), e.className ? this._firstPT = o = g.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = o = this.parse(t, e, null), this._transformType) {
                    for (h = 3 === this._transformType, Lt ? y && (v = !0, "" === f.zIndex && (("auto" === (u = et(t, "zIndex", C)) || "" === u) && this._addLazySet(f, "zIndex", 0)), _ && this._addLazySet(f, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (h ? "visible" : "hidden"))) : f.zoom = 1, r = o; r && r._next;) r = r._next;
                    d = new wt(t, "transform", 0, 0, null, 2), this._linkCSSP(d, null, r), d.setRatio = Lt ? Zt : Gt, d.data = this._transform || Xt(t, C, !0), d.tween = i, d.pr = -1, m.pop()
                }
                if (p) {
                    for (; o;) {
                        for (c = o._next, r = a; r && r.pr > o.pr;) r = r._next;
                        (o._prev = r ? r._prev : l) ? o._prev._next = o: a = o, (o._next = r) ? r._prev = o : l = o, o = c
                    }
                    this._firstPT = a
                }
                return !0
            }, t.parse = function(t, e, i, n) {
                var s, o, r, a, l, c, u, d, h, f, p = t.style;
                for (s in e) {
                    if ("function" == typeof(c = e[s]) && (c = c(M, $)), o = g[s]) i = o.parse(t, c, s, this, i, n, e);
                    else {
                        if ("--" === s.substr(0, 2)) {
                            this._tween._propLookup[s] = this._addTween.call(this._tween, t.style, "setProperty", tt(t).getPropertyValue(s) + "", c + "", s, !1, s);
                            continue
                        }
                        l = et(t, s, C) + "", h = "string" == typeof c, "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || h && x.test(c) ? (h || (c = (3 < (c = mt(c)).length ? "rgba(" : "rgb(") + c.join(",") + ")"), i = Tt(p, s, l, c, !0, "transparent", i, 0, n)) : h && I.test(c) ? i = Tt(p, s, l, c, !0, null, i, 0, n) : (u = (r = parseFloat(l)) || 0 === r ? l.substr((r + "").length) : "", ("" === l || "auto" === l) && ("width" === s || "height" === s ? (r = lt(t, s, C), u = "px") : "left" === s || "top" === s ? (r = nt(t, s, C), u = "px") : (r = "opacity" !== s ? 0 : 1, u = "")), (f = h && "=" === c.charAt(1)) ? (a = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), a *= parseFloat(c), d = c.replace(A, "")) : (a = parseFloat(c), d = h ? c.replace(A, "") : ""), "" === d && (d = s in S ? S[s] : u), c = a || 0 === a ? (f ? a + r : a) + d : e[s], u !== d && ("" !== d || "lineHeight" === s) && (a || 0 === a) && r && (r = it(t, s, r, u), "%" === d ? (r /= it(t, s, 100, "%") / 100, !0 !== e.strictUnits && (l = r + "%")) : "em" === d || "rem" === d || "vw" === d || "vh" === d ? r /= it(t, s, 1, d) : "px" !== d && (a = it(t, s, a, d), d = "px"), f && (a || 0 === a) && (c = a + r + d)), f && (a += r), !r && 0 !== r || !a && 0 !== a ? void 0 !== p[s] && (c || c + "" != "NaN" && null != c) ? (i = new wt(p, s, a || r || 0, 0, i, -1, s, !1, 0, l, c)).xs0 = "none" !== c || "display" !== s && -1 === s.indexOf("Style") ? c : l : Z("invalid " + s + " tween value: " + e[s]) : (i = new wt(p, s, r, a - r, i, 0, s, !1 !== P && ("px" === d || "zIndex" === s), 0, l, c)).xs0 = d)
                    }
                    n && i && !i.plugin && (i.plugin = n)
                }
                return i
            }, t.setRatio = function(t) {
                var e, i, n, s = this._firstPT;
                if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                        for (; s;) {
                            if (e = s.c * t + s.s, s.r ? e = Math.round(e) : e < 1e-6 && -1e-6 < e && (e = 0), s.type)
                                if (1 === s.type)
                                    if (2 === (n = s.l)) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2;
                                    else if (3 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
                            else if (4 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4;
                            else if (5 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5;
                            else {
                                for (i = s.xs0 + e + s.xs1, n = 1; n < s.l; n++) i += s["xn" + n] + s["xs" + (n + 1)];
                                s.t[s.p] = i
                            } else -1 === s.type ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(t);
                            else s.t[s.p] = e + s.xs0;
                            s = s._next
                        } else
                            for (; s;) 2 !== s.type ? s.t[s.p] = s.b : s.setRatio(t), s = s._next;
                    else
                        for (; s;) {
                            if (2 !== s.type)
                                if (s.r && -1 !== s.type)
                                    if (e = Math.round(s.s + s.c), s.type) {
                                        if (1 === s.type) {
                                            for (n = s.l, i = s.xs0 + e + s.xs1, n = 1; n < s.l; n++) i += s["xn" + n] + s["xs" + (n + 1)];
                                            s.t[s.p] = i
                                        }
                                    } else s.t[s.p] = e + s.xs0;
                            else s.t[s.p] = s.e;
                            else s.setRatio(t);
                            s = s._next
                        }
            }, t._enableTransforms = function(t) {
                this._transform = this._transform || Xt(this._target, C, !0), this._transformType = this._transform.svg && $t || !t && 3 !== this._transformType ? 2 : 3
            };
            var ee = function(t) {
                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            };
            t._addLazySet = function(t, e, i) {
                var n = this._firstPT = new wt(t, e, 0, 0, this._firstPT, 2);
                n.e = i, n.setRatio = ee, n.data = this
            }, t._linkCSSP = function(t, e, i, n) {
                return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
            }, t._mod = function(t) {
                for (var e = this._firstPT; e;) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next
            }, t._kill = function(t) {
                var e, i, n, s = t;
                if (t.autoAlpha || t.alpha) {
                    for (i in s = {}, t) s[i] = t[i];
                    s.opacity = 1, s.autoAlpha && (s.visibility = 1)
                }
                for (t.className && (e = this._classNamePT) && ((n = e.xfirst) && n._prev ? this._linkCSSP(n._prev, e._next, n._prev._prev) : n === this._firstPT && (this._firstPT = e._next), e._next && this._linkCSSP(e._next, e._next._next, n._prev), this._classNamePT = null), e = this._firstPT; e;) e.plugin && e.plugin !== i && e.plugin._kill && (e.plugin._kill(t), i = e.plugin), e = e._next;
                return o.prototype._kill.call(this, s)
            };
            var ie = function(t, e, i) {
                var n, s, o, r;
                if (t.slice)
                    for (s = t.length; - 1 < --s;) ie(t[s], e, i);
                else
                    for (s = (n = t.childNodes).length; - 1 < --s;) r = (o = n[s]).type, o.style && (e.push(st(o)), i && i.push(o)), 1 !== r && 9 !== r && 11 !== r || !o.childNodes.length || ie(o, e, i)
            };
            return Y.cascadeTo = function(t, e, i) {
                var n, s, o, r, a = z.to(t, e, i),
                    l = [a],
                    c = [],
                    u = [],
                    d = [],
                    h = z._internals.reservedProps;
                for (t = a._targets || a.target, ie(t, c, d), a.render(e, !0, !0), ie(t, u), a.render(0, !0, !0), a._enabled(!0), n = d.length; - 1 < --n;)
                    if ((s = ot(d[n], c[n], u[n])).firstMPT) {
                        for (o in s = s.difs, i) h[o] && (s[o] = i[o]);
                        for (o in r = {}, s) r[o] = c[n][o];
                        l.push(z.fromTo(d[n], e, r, s))
                    } return l
            }, o.activate([Y]), Y
        }, !0), t = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            version: "1.6.0",
            priority: -1,
            API: 2,
            init: function(t, e, i) {
                return this._tween = i, !0
            }
        }), l = function(t) {
            for (; t;) t.f || t.blob || (t.m = Math.round), t = t._next
        }, (e = t.prototype)._onInitAllProps = function() {
            for (var t, e, i, n = this._tween, s = n.vars.roundProps.join ? n.vars.roundProps : n.vars.roundProps.split(","), o = s.length, r = {}, a = n._propLookup.roundProps; - 1 < --o;) r[s[o]] = Math.round;
            for (o = s.length; - 1 < --o;)
                for (t = s[o], e = n._firstPT; e;) i = e._next, e.pg ? e.t._mod(r) : e.n === t && (2 === e.f && e.t ? l(e.t._firstPT) : (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : n._firstPT === e && (n._firstPT = i), e._next = e._prev = null, n._propLookup[t] = a)), e = i;
            return !1
        }, e._add = function(t, e, i, n) {
            this._addTween(t, e, i, i + n, e, Math.round), this._overwriteProps.push(e)
        }, _gsScope._gsDefine.plugin({
            propName: "attr",
            API: 2,
            version: "0.6.1",
            init: function(t, e, i, n) {
                var s, o;
                if ("function" != typeof t.setAttribute) return !1;
                for (s in e) "function" == typeof(o = e[s]) && (o = o(n, t)), this._addTween(t, "setAttribute", t.getAttribute(s) + "", o + "", s, !1, s), this._overwriteProps.push(s);
                return !0
            }
        }), _gsScope._gsDefine.plugin({
            propName: "directionalRotation",
            version: "0.3.1",
            API: 2,
            init: function(t, e, i, n) {
                "object" != typeof e && (e = {
                    rotation: e
                }), this.finals = {};
                var s, o, r, a, l, c, u = !0 === e.useRadians ? 2 * Math.PI : 360;
                for (s in e) "useRadians" !== s && ("function" == typeof(a = e[s]) && (a = a(n, t)), o = (c = (a + "").split("_"))[0], r = parseFloat("function" != typeof t[s] ? t[s] : t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]()), l = (a = this.finals[s] = "string" == typeof o && "=" === o.charAt(1) ? r + parseInt(o.charAt(0) + "1", 10) * Number(o.substr(2)) : Number(o) || 0) - r, c.length && (-1 !== (o = c.join("_")).indexOf("short") && ((l %= u) !== l % (u / 2) && (l = l < 0 ? l + u : l - u)), -1 !== o.indexOf("_cw") && l < 0 ? l = (l + 9999999999 * u) % u - (l / u | 0) * u : -1 !== o.indexOf("ccw") && 0 < l && (l = (l - 9999999999 * u) % u - (l / u | 0) * u)), (1e-6 < l || l < -1e-6) && (this._addTween(t, s, r, r + l, s), this._overwriteProps.push(s)));
                return !0
            },
            set: function(t) {
                var e;
                if (1 !== t) this._super.setRatio.call(this, t);
                else
                    for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
            }
        })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(g) {
            var i, n, e, t, s = _gsScope.GreenSockGlobals || _gsScope,
                o = s.com.greensock,
                r = 2 * Math.PI,
                a = Math.PI / 2,
                l = o._class,
                c = function(t, e) {
                    var i = l("easing." + t, function() {}, !0),
                        n = i.prototype = new g;
                    return n.constructor = i, n.getRatio = e, i
                },
                u = g.register || function() {},
                d = function(t, e, i, n, s) {
                    var o = l("easing." + t, {
                        easeOut: new e,
                        easeIn: new i,
                        easeInOut: new n
                    }, !0);
                    return u(o, t), o
                },
                v = function(t, e, i) {
                    this.t = t, this.v = e, i && (((this.next = i).prev = this).c = i.v - e, this.gap = i.t - t)
                },
                h = function(t, e) {
                    var i = l("easing." + t, function(t) {
                            this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                        }, !0),
                        n = i.prototype = new g;
                    return n.constructor = i, n.getRatio = e, n.config = function(t) {
                        return new i(t)
                    }, i
                },
                f = d("Back", h("BackOut", function(t) {
                    return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                }), h("BackIn", function(t) {
                    return t * t * ((this._p1 + 1) * t - this._p1)
                }), h("BackInOut", function(t) {
                    return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                })),
                p = l("easing.SlowMo", function(t, e, i) {
                    e = e || 0 === e ? e : .7, null == t ? t = .7 : 1 < t && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
                }, !0),
                m = p.prototype = new g;
            return m.constructor = p, m.getRatio = function(t) {
                var e = t + (.5 - t) * this._p;
                return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
            }, p.ease = new p(.7, .7), m.config = p.config = function(t, e, i) {
                return new p(t, e, i)
            }, (m = (i = l("easing.SteppedEase", function(t, e) {
                t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0
            }, !0)).prototype = new g).constructor = i, m.getRatio = function(t) {
                return t < 0 ? t = 0 : 1 <= t && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1
            }, m.config = i.config = function(t, e) {
                return new i(t, e)
            }, (m = (n = l("easing.ExpoScaleEase", function(t, e, i) {
                this._p1 = Math.log(e / t), this._p2 = e - t, this._p3 = t, this._ease = i
            }, !0)).prototype = new g).constructor = n, m.getRatio = function(t) {
                return this._ease && (t = this._ease.getRatio(t)), (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2
            }, m.config = n.config = function(t, e, i) {
                return new n(t, e, i)
            }, (m = (e = l("easing.RoughEase", function(t) {
                for (var e, i, n, s, o, r, a = (t = t || {}).taper || "none", l = [], c = 0, u = 0 | (t.points || 20), d = u, h = !1 !== t.randomize, f = !0 === t.clamp, p = t.template instanceof g ? t.template : null, m = "number" == typeof t.strength ? .4 * t.strength : .4; - 1 < --d;) e = h ? Math.random() : 1 / u * d, i = p ? p.getRatio(e) : e, "none" === a ? n = m : "out" === a ? n = (s = 1 - e) * s * m : "in" === a ? n = e * e * m : n = (s = e < .5 ? 2 * e : 2 * (1 - e)) * s * .5 * m, h ? i += Math.random() * n - .5 * n : d % 2 ? i += .5 * n : i -= .5 * n, f && (1 < i ? i = 1 : i < 0 && (i = 0)), l[c++] = {
                    x: e,
                    y: i
                };
                for (l.sort(function(t, e) {
                        return t.x - e.x
                    }), r = new v(1, 1, null), d = u; - 1 < --d;) o = l[d], r = new v(o.x, o.y, r);
                this._prev = new v(0, 0, 0 !== r.t ? r : r.next)
            }, !0)).prototype = new g).constructor = e, m.getRatio = function(t) {
                var e = this._prev;
                if (t > e.t) {
                    for (; e.next && t >= e.t;) e = e.next;
                    e = e.prev
                } else
                    for (; e.prev && t <= e.t;) e = e.prev;
                return (this._prev = e).v + (t - e.t) / e.gap * e.c
            }, m.config = function(t) {
                return new e(t)
            }, e.ease = new e, d("Bounce", c("BounceOut", function(t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }), c("BounceIn", function(t) {
                return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
            }), c("BounceInOut", function(t) {
                var e = t < .5;
                return t = (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
            })), d("Circ", c("CircOut", function(t) {
                return Math.sqrt(1 - (t -= 1) * t)
            }), c("CircIn", function(t) {
                return -(Math.sqrt(1 - t * t) - 1)
            }), c("CircInOut", function(t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            })), d("Elastic", (t = function(t, e, i) {
                var n = l("easing." + t, function(t, e) {
                        this._p1 = 1 <= t ? t : 1, this._p2 = (e || i) / (t < 1 ? t : 1), this._p3 = this._p2 / r * (Math.asin(1 / this._p1) || 0), this._p2 = r / this._p2
                    }, !0),
                    s = n.prototype = new g;
                return s.constructor = n, s.getRatio = e, s.config = function(t, e) {
                    return new n(t, e)
                }, n
            })("ElasticOut", function(t) {
                return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
            }, .3), t("ElasticIn", function(t) {
                return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
            }, .3), t("ElasticInOut", function(t) {
                return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
            }, .45)), d("Expo", c("ExpoOut", function(t) {
                return 1 - Math.pow(2, -10 * t)
            }), c("ExpoIn", function(t) {
                return Math.pow(2, 10 * (t - 1)) - .001
            }), c("ExpoInOut", function(t) {
                return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            })), d("Sine", c("SineOut", function(t) {
                return Math.sin(t * a)
            }), c("SineIn", function(t) {
                return 1 - Math.cos(t * a)
            }), c("SineInOut", function(t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            })), l("easing.EaseLookup", {
                find: function(t) {
                    return g.map[t]
                }
            }, !0), u(s.SlowMo, "SlowMo", "ease,"), u(e, "RoughEase", "ease,"), u(i, "SteppedEase", "ease,"), f
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(h, f) {
        "use strict";
        var e, i, p = {},
            n = h.document,
            m = h.GreenSockGlobals = h.GreenSockGlobals || h;
        if (!m.TweenLite) {
            var t, s, o, g, v, y = function(t) {
                    var e, i = t.split("."),
                        n = m;
                    for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
                    return n
                },
                d = y("com.greensock"),
                _ = 1e-10,
                l = function(t) {
                    var e, i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i
                },
                b = function() {},
                w = (e = Object.prototype.toString, i = e.call([]), function(t) {
                    return null != t && (t instanceof Array || "object" == typeof t && !!t.push && e.call(t) === i)
                }),
                x = {},
                T = function(a, l, c, u) {
                    this.sc = x[a] ? x[a].sc : [], (x[a] = this).gsClass = null, this.func = c;
                    var d = [];
                    this.check = function(t) {
                        for (var e, i, n, s, o = l.length, r = o; - 1 < --o;)(e = x[l[o]] || new T(l[o], [])).gsClass ? (d[o] = e.gsClass, r--) : t && e.sc.push(this);
                        if (0 === r && c) {
                            if (n = (i = ("com.greensock." + a).split(".")).pop(), s = y(i.join("."))[n] = this.gsClass = c.apply(c, d), u)
                                if (m[n] = p[n] = s, "undefined" != typeof module && module.exports)
                                    if (a === f)
                                        for (o in module.exports = p[f] = s, p) s[o] = p[o];
                                    else p[f] && (p[f][n] = s);
                            else "function" == typeof define && define.amd && define((h.GreenSockAMDPath ? h.GreenSockAMDPath + "/" : "") + a.split(".").pop(), [], function() {
                                return s
                            });
                            for (o = 0; o < this.sc.length; o++) this.sc[o].check()
                        }
                    }, this.check(!0)
                },
                r = h._gsDefine = function(t, e, i, n) {
                    return new T(t, e, i, n)
                },
                S = d._class = function(t, e, i) {
                    return e = e || function() {}, r(t, [], function() {
                        return e
                    }, i), e
                };
            r.globals = m;
            var a = [0, 0, 1, 1],
                k = S("easing.Ease", function(t, e, i, n) {
                    this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? a.concat(e) : a
                }, !0),
                C = k.map = {},
                c = k.register = function(t, e, i, n) {
                    for (var s, o, r, a, l = e.split(","), c = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); - 1 < --c;)
                        for (o = l[c], s = n ? S("easing." + o, null, !0) : d.easing[o] || {}, r = u.length; - 1 < --r;) a = u[r], C[o + "." + a] = C[a + o] = s[a] = t.getRatio ? t : t[a] || new t
                };
            for ((o = k.prototype)._calcEnd = !1, o.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        n = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                    return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : t < .5 ? n / 2 : 1 - n / 2
                }, s = (t = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; - 1 < --s;) o = t[s] + ",Power" + s, c(new k(null, null, 1, s), o, "easeOut", !0), c(new k(null, null, 2, s), o, "easeIn" + (0 === s ? ",easeNone" : "")), c(new k(null, null, 3, s), o, "easeInOut");
            C.linear = d.easing.Linear.easeIn, C.swing = d.easing.Quad.easeInOut;
            var P = S("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            (o = P.prototype).addEventListener = function(t, e, i, n, s) {
                s = s || 0;
                var o, r, a = this._listeners[t],
                    l = 0;
                for (this !== g || v || g.wake(), null == a && (this._listeners[t] = a = []), r = a.length; - 1 < --r;)(o = a[r]).c === e && o.s === i ? a.splice(r, 1) : 0 === l && o.pr < s && (l = r + 1);
                a.splice(l, 0, {
                    c: e,
                    s: i,
                    up: n,
                    pr: s
                })
            }, o.removeEventListener = function(t, e) {
                var i, n = this._listeners[t];
                if (n)
                    for (i = n.length; - 1 < --i;)
                        if (n[i].c === e) return void n.splice(i, 1)
            }, o.dispatchEvent = function(t) {
                var e, i, n, s = this._listeners[t];
                if (s)
                    for (1 < (e = s.length) && (s = s.slice(0)), i = this._eventTarget; - 1 < --e;)(n = s[e]) && (n.up ? n.c.call(n.s || i, {
                        type: t,
                        target: i
                    }) : n.c.call(n.s || i))
            };
            var $ = h.requestAnimationFrame,
                M = h.cancelAnimationFrame,
                D = Date.now || function() {
                    return (new Date).getTime()
                },
                O = D();
            for (s = (t = ["ms", "moz", "webkit", "o"]).length; - 1 < --s && !$;) $ = h[t[s] + "RequestAnimationFrame"], M = h[t[s] + "CancelAnimationFrame"] || h[t[s] + "CancelRequestAnimationFrame"];
            S("Ticker", function(t, e) {
                var s, o, r, a, l, c = this,
                    u = D(),
                    i = !(!1 === e || !$) && "auto",
                    d = 500,
                    h = 33,
                    f = function(t) {
                        var e, i, n = D() - O;
                        d < n && (u += n - h), O += n, c.time = (O - u) / 1e3, e = c.time - l, (!s || 0 < e || !0 === t) && (c.frame++, l += e + (a <= e ? .004 : a - e), i = !0), !0 !== t && (r = o(f)), i && c.dispatchEvent("tick")
                    };
                P.call(c), c.time = c.frame = 0, c.tick = function() {
                    f(!0)
                }, c.lagSmoothing = function(t, e) {
                    return arguments.length ? (d = t || 1e10, void(h = Math.min(e, d, 0))) : d < 1e10
                }, c.sleep = function() {
                    null != r && (i && M ? M(r) : clearTimeout(r), o = b, r = null, c === g && (v = !1))
                }, c.wake = function(t) {
                    null !== r ? c.sleep() : t ? u += -O + (O = D()) : 10 < c.frame && (O = D() - d + 5), o = 0 === s ? b : i && $ ? $ : function(t) {
                        return setTimeout(t, 1e3 * (l - c.time) + 1 | 0)
                    }, c === g && (v = !0), f(2)
                }, c.fps = function(t) {
                    return arguments.length ? (a = 1 / ((s = t) || 60), l = this.time + a, void c.wake()) : s
                }, c.useRAF = function(t) {
                    return arguments.length ? (c.sleep(), i = t, void c.fps(s)) : i
                }, c.fps(t), setTimeout(function() {
                    "auto" === i && c.frame < 5 && "hidden" !== (n || {}).visibilityState && c.useRAF(!1)
                }, 1500)
            }), (o = d.Ticker.prototype = new d.events.EventDispatcher).constructor = d.Ticker;
            var u = S("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, Z) {
                    v || g.wake();
                    var i = this.vars.useFrames ? G : Z;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            g = u.ticker = new d.Ticker, (o = u.prototype)._dirty = o._gc = o._initted = o._paused = !1, o._totalTime = o._time = 0, o._rawPrevTime = -1, o._next = o._last = o._onUpdate = o._timeline = o.timeline = null, o._paused = !1;
            var A = function() {
                v && 2e3 < D() - O && ("hidden" !== (n || {}).visibilityState || !g.lagSmoothing()) && g.wake();
                var t = setTimeout(A, 2e3);
                t.unref && t.unref()
            };
            A(), o.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, o.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, o.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, o.seek = function(t, e) {
                return this.totalTime(Number(t), !1 !== e)
            }, o.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
            }, o.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, o.render = function(t, e, i) {}, o.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, o.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7
            }, o._enabled = function(t, e) {
                return v || g.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, o._kill = function(t, e) {
                return this._enabled(!1, !1)
            }, o.kill = function(t, e) {
                return this._kill(t, e), this
            }, o._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, o._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); - 1 < --e;) "{self}" === t[e] && (i[e] = this);
                return i
            }, o._callback = function(t) {
                var e = this.vars,
                    i = e[t],
                    n = e[t + "Params"],
                    s = e[t + "Scope"] || e.callbackScope || this;
                switch (n ? n.length : 0) {
                    case 0:
                        i.call(s);
                        break;
                    case 1:
                        i.call(s, n[0]);
                        break;
                    case 2:
                        i.call(s, n[0], n[1]);
                        break;
                    default:
                        i.apply(s, n)
                }
            }, o.eventCallback = function(t, e, i, n) {
                if ("on" === (t || "").substr(0, 2)) {
                    var s = this.vars;
                    if (1 === arguments.length) return s[t];
                    null == e ? delete s[t] : (s[t] = e, s[t + "Params"] = w(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, s[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, o.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, o.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, o.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, o.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, o.totalTime = function(t, e, i) {
                if (v || g.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            s = this._timeline;
                        if (n < t && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? n - t : t) / this._timeScale, s._dirty || this._uncache(!1), s._timeline)
                            for (; s._timeline;) s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0), s = s._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (I.length && J(), this.render(t, e, !1), I.length && J())
                }
                return this
            }, o.progress = o.totalProgress = function(t, e) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
            }, o.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, o.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, o.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                var e, i;
                for (t = t || _, this._timeline && this._timeline.smoothChildTiming && (i = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;) i._dirty = !0, i.totalDuration(), i = i.timeline;
                return this
            }, o.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, o.paused = function(t) {
                if (!arguments.length) return this._paused;
                var e, i, n = this._timeline;
                return t != this._paused && n && (v || t || g.wake(), i = (e = n.rawTime()) - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
            };
            var E = S("core.SimpleTimeline", function(t) {
                u.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            (o = E.prototype = new u).constructor = E, o.kill()._gc = !1, o._first = o._last = o._recent = null, o._sortChildren = !1, o.add = o.insert = function(t, e, i, n) {
                var s, o;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), s = this._last, this._sortChildren)
                    for (o = t._startTime; s && s._startTime > o;) s = s._prev;
                return s ? (t._next = s._next, s._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = s, this._recent = t, this._timeline && this._uncache(!0), this
            }, o._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, o.render = function(t, e, i) {
                var n, s = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; s;) n = s._next, (s._active || t >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = n
            }, o.rawTime = function() {
                return v || g.wake(), this._totalTime
            };
            var L = S("TweenLite", function(t, e, i) {
                    if (u.call(this, e, i), this.render = L.prototype.render, null == t) throw "Cannot tween a null target.";
                    this.target = t = "string" != typeof t ? t : L.selector(t) || t;
                    var n, s, o, r = t.jquery || t.length && t !== h && t[0] && (t[0] === h || t[0].nodeType && t[0].style && !t.nodeType),
                        a = this.vars.overwrite;
                    if (this._overwrite = a = null == a ? X[L.defaultOverwrite] : "number" == typeof a ? a >> 0 : X[a], (r || t instanceof Array || t.push && w(t)) && "number" != typeof t[0])
                        for (this._targets = o = l(t), this._propLookup = [], this._siblings = [], n = 0; n < o.length; n++)(s = o[n]) ? "string" != typeof s ? s.length && s !== h && s[0] && (s[0] === h || s[0].nodeType && s[0].style && !s.nodeType) ? (o.splice(n--, 1), this._targets = o = o.concat(l(s))) : (this._siblings[n] = K(s, this, !1), 1 === a && 1 < this._siblings[n].length && et(s, this, null, 1, this._siblings[n])) : "string" == typeof(s = o[n--] = L.selector(s)) && o.splice(n + 1, 1) : o.splice(n--, 1);
                    else this._propLookup = {}, this._siblings = K(t, this, !1), 1 === a && 1 < this._siblings.length && et(t, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === e && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -_, this.render(Math.min(0, -this._delay)))
                }, !0),
                R = function(t) {
                    return t && t.length && t !== h && t[0] && (t[0] === h || t[0].nodeType && t[0].style && !t.nodeType)
                };
            (o = L.prototype = new u).constructor = L, o.kill()._gc = !1, o.ratio = 0, o._firstPT = o._targets = o._overwrittenProps = o._startAt = null, o._notifyPluginsOfEnabled = o._lazy = !1, L.version = "1.20.4", L.defaultEase = o._ease = new k(null, null, 1, 1), L.defaultOverwrite = "auto", L.ticker = g, L.autoSleep = 120, L.lagSmoothing = function(t, e) {
                g.lagSmoothing(t, e)
            }, L.selector = h.$ || h.jQuery || function(t) {
                var e = h.$ || h.jQuery;
                return e ? (L.selector = e)(t) : void 0 === n ? t : n.querySelectorAll ? n.querySelectorAll(t) : n.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
            };
            var I = [],
                F = {},
                N = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                H = /[\+-]=-?[\.\d]/,
                z = function(t) {
                    for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m(e, this._target || i.t) : e < 1e-6 && -1e-6 < e && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                },
                Y = function(t, e, i, n) {
                    var s, o, r, a, l, c, u, d = [],
                        h = 0,
                        f = "",
                        p = 0;
                    for (d.start = t, d.end = e, t = d[0] = t + "", e = d[1] = e + "", i && (i(d), t = d[0], e = d[1]), d.length = 0, s = t.match(N) || [], o = e.match(N) || [], n && (n._next = null, n.blob = 1, d._firstPT = d._applyPT = n), l = o.length, a = 0; a < l; a++) u = o[a], f += (c = e.substr(h, e.indexOf(u, h) - h)) || !a ? c : ",", h += c.length, p ? p = (p + 1) % 5 : "rgba(" === c.substr(-5) && (p = 1), u === s[a] || s.length <= a ? f += u : (f && (d.push(f), f = ""), r = parseFloat(s[a]), d.push(r), d._firstPT = {
                        _next: d._firstPT,
                        t: d,
                        p: d.length - 1,
                        s: r,
                        c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - r) || 0,
                        f: 0,
                        m: p && p < 4 ? Math.round : 0
                    }), h += u.length;
                    return (f += e.substr(h)) && d.push(f), d.setRatio = z, H.test(e) && (d.end = null), d
                },
                j = function(t, e, i, n, s, o, r, a, l) {
                    "function" == typeof n && (n = n(l || 0, t));
                    var c = typeof t[e],
                        u = "function" !== c ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                        d = "get" !== i ? i : u ? r ? t[u](r) : t[u]() : t[e],
                        h = "string" == typeof n && "=" === n.charAt(1),
                        f = {
                            t: t,
                            p: e,
                            s: d,
                            f: "function" === c,
                            pg: 0,
                            n: s || e,
                            m: o ? "function" == typeof o ? o : Math.round : 0,
                            pr: 0,
                            c: h ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - d || 0
                        };
                    return ("number" != typeof d || "number" != typeof n && !h) && (r || isNaN(d) || !h && isNaN(n) || "boolean" == typeof d || "boolean" == typeof n ? (f.fp = r, f = {
                        t: Y(d, h ? parseFloat(f.s) + f.c + (f.s + "").replace(/[0-9\-\.]/g, "") : n, a || L.defaultStringFilter, f),
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: s || e,
                        pr: 0,
                        m: 0
                    }) : (f.s = parseFloat(d), h || (f.c = parseFloat(n) - f.s || 0))), f.c ? ((f._next = this._firstPT) && (f._next._prev = f), this._firstPT = f) : void 0
                },
                B = L._internals = {
                    isArray: w,
                    isSelector: R,
                    lazyTweens: I,
                    blobDif: Y
                },
                W = L._plugins = {},
                q = B.tweenLookup = {},
                U = 0,
                V = B.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1,
                    id: 1,
                    yoyoEase: 1
                },
                X = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    true: 1,
                    false: 0
                },
                G = u._rootFramesTimeline = new E,
                Z = u._rootTimeline = new E,
                Q = 30,
                J = B.lazyRender = function() {
                    var t, e = I.length;
                    for (F = {}; - 1 < --e;)(t = I[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    I.length = 0
                };
            Z._startTime = g.time, G._startTime = g.frame, Z._active = G._active = !0, setTimeout(J, 1), u._updateRoot = L.render = function() {
                var t, e, i;
                if (I.length && J(), Z.render((g.time - Z._startTime) * Z._timeScale, !1, !1), G.render((g.frame - G._startTime) * G._timeScale, !1, !1), I.length && J(), g.frame >= Q) {
                    for (i in Q = g.frame + (parseInt(L.autoSleep, 10) || 120), q) {
                        for (t = (e = q[i].tweens).length; - 1 < --t;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete q[i]
                    }
                    if ((!(i = Z._first) || i._paused) && L.autoSleep && !G._first && 1 === g._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || g.sleep()
                    }
                }
            }, g.addEventListener("tick", u._updateRoot);
            var K = function(t, e, i) {
                    var n, s, o = t._gsTweenID;
                    if (q[o || (t._gsTweenID = o = "t" + U++)] || (q[o] = {
                            target: t,
                            tweens: []
                        }), e && ((n = q[o].tweens)[s = n.length] = e, i))
                        for (; - 1 < --s;) n[s] === e && n.splice(s, 1);
                    return q[o].tweens
                },
                tt = function(t, e, i, n) {
                    var s, o, r = t.vars.onOverwrite;
                    return r && (s = r(t, e, i, n)), (r = L.onOverwrite) && (o = r(t, e, i, n)), !1 !== s && !1 !== o
                },
                et = function(t, e, i, n, s) {
                    var o, r, a, l;
                    if (1 === n || 4 <= n) {
                        for (l = s.length, o = 0; o < l; o++)
                            if ((a = s[o]) !== e) a._gc || a._kill(null, t, e) && (r = !0);
                            else if (5 === n) break;
                        return r
                    }
                    var c, u = e._startTime + _,
                        d = [],
                        h = 0,
                        f = 0 === e._duration;
                    for (o = s.length; - 1 < --o;)(a = s[o]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (c = c || it(e, 0, f), 0 === it(a, c, f) && (d[h++] = a)) : a._startTime <= u && a._startTime + a.totalDuration() / a._timeScale > u && ((f || !a._initted) && u - a._startTime <= 2e-10 || (d[h++] = a)));
                    for (o = h; - 1 < --o;)
                        if (a = d[o], 2 === n && a._kill(i, t, e) && (r = !0), 2 !== n || !a._firstPT && a._initted) {
                            if (2 !== n && !tt(a, e)) continue;
                            a._enabled(!1, !1) && (r = !0)
                        } return r
                },
                it = function(t, e, i) {
                    for (var n = t._timeline, s = n._timeScale, o = t._startTime; n._timeline;) {
                        if (o += n._startTime, s *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return e < (o /= s) ? o - e : i && o === e || !t._initted && o - e < 2e-10 ? _ : (o += t.totalDuration() / t._timeScale / s) > e + _ ? 0 : o - e - _
                };
            o._init = function() {
                var t, e, i, n, s, o, r = this.vars,
                    a = this._overwrittenProps,
                    l = this._duration,
                    c = !!r.immediateRender,
                    u = r.ease;
                if (r.startAt) {
                    for (n in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), s = {}, r.startAt) s[n] = r.startAt[n];
                    if (s.data = "isStart", s.overwrite = !1, s.immediateRender = !0, s.lazy = c && !1 !== r.lazy, s.startAt = s.delay = null, s.onUpdate = r.onUpdate, s.onUpdateParams = r.onUpdateParams, s.onUpdateScope = r.onUpdateScope || r.callbackScope || this, this._startAt = L.to(this.target, 0, s), c)
                        if (0 < this._time) this._startAt = null;
                        else if (0 !== l) return
                } else if (r.runBackwards && 0 !== l)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        for (n in 0 !== this._time && (c = !1), i = {}, r) V[n] && "autoCSS" !== n || (i[n] = r[n]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = c && !1 !== r.lazy, i.immediateRender = c, this._startAt = L.to(this.target, 0, i), c) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    } if (this._ease = u = u ? u instanceof k ? u : "function" == typeof u ? new k(u, r.easeParams) : C[u] || L.defaultEase : L.defaultEase, r.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, r.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (o = this._targets.length, t = 0; t < o; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
                if (e && L._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = r.onUpdate, this._initted = !0
            }, o._initProps = function(t, e, i, n, s) {
                var o, r, a, l, c, u;
                if (null == t) return !1;
                for (o in F[t._gsTweenID] && J(), this.vars.css || t.style && t !== h && t.nodeType && W.css && !1 !== this.vars.autoCSS && function(t, e) {
                        var i, n = {};
                        for (i in t) V[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!W[i] || W[i] && W[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                        t.css = n
                    }(this.vars, t), this.vars)
                    if (u = this.vars[o], V[o]) u && (u instanceof Array || u.push && w(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[o] = u = this._swapSelfInParams(u, this));
                    else if (W[o] && (l = new W[o])._onInitTween(t, this.vars[o], this, s)) {
                    for (this._firstPT = c = {
                            _next: this._firstPT,
                            t: l,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: o,
                            pg: 1,
                            pr: l._priority,
                            m: 0
                        }, r = l._overwriteProps.length; - 1 < --r;) e[l._overwriteProps[r]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), c._next && (c._next._prev = c)
                } else e[o] = j.call(this, t, o, "get", u, o, 0, null, this.vars.stringFilter, s);
                return n && this._kill(n, t) ? this._initProps(t, e, i, n, s) : 1 < this._overwrite && this._firstPT && 1 < i.length && et(t, this, e, this._overwrite, i) ? (this._kill(e, t), this._initProps(t, e, i, n, s)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (F[t._gsTweenID] = !0), a)
            }, o.render = function(t, e, i) {
                var n, s, o, r, a = this._time,
                    l = this._duration,
                    c = this._rawPrevTime;
                if (l - 1e-7 <= t && 0 <= t) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, s = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (c < 0 || t <= 0 && -1e-7 <= t || c === _ && "isPause" !== this.data) && c !== t && (i = !0, _ < c && (s = "onReverseComplete")), this._rawPrevTime = r = !e || t || c === t ? t : _);
                else if (t < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && 0 < c) && (s = "onReverseComplete", n = this._reversed), t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (0 <= c && (c !== _ || "isPause" !== this.data) && (i = !0), this._rawPrevTime = r = !e || t || c === t ? t : _)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var u = t / l,
                        d = this._easeType,
                        h = this._easePower;
                    (1 === d || 3 === d && .5 <= u) && (u = 1 - u), 3 === d && (u *= 2), 1 === h ? u *= u : 2 === h ? u *= u * u : 3 === h ? u *= u * u * u : 4 === h && (u *= u * u * u * u), this.ratio = 1 === d ? 1 - u : 2 === d ? u : t / l < .5 ? u / 2 : 1 - u / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== a || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = c, I.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && 0 <= t && (this._active = !0), 0 === a && (this._startAt && (0 <= t ? this._startAt.render(t, !0, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                    this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i), e || (this._time !== a || n || i) && this._callback("onUpdate")), s && (!this._gc || i) && (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s), 0 === l && this._rawPrevTime === _ && r !== _ && (this._rawPrevTime = 0))
                }
            }, o._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : L.selector(e) || e;
                var n, s, o, r, a, l, c, u, d, h = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((w(e) || R(e)) && "number" != typeof e[0])
                    for (n = e.length; - 1 < --n;) this._kill(t, e[n], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (n = this._targets.length; - 1 < --n;)
                            if (e === this._targets[n]) {
                                a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        a = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        if (c = t || a, u = t !== s && "all" !== s && t !== a && ("object" != typeof t || !t._tempKill), i && (L.onOverwrite || this.vars.onOverwrite)) {
                            for (o in c) a[o] && (d || (d = []), d.push(o));
                            if ((d || !t) && !tt(this, i, e, d)) return !1
                        }
                        for (o in c)(r = a[o]) && (h && (r.f ? r.t[r.p](r.s) : r.t[r.p] = r.s, l = !0), r.pg && r.t._kill(c) && (l = !0), r.pg && 0 !== r.t._overwriteProps.length || (r._prev ? r._prev._next = r._next : r === this._firstPT && (this._firstPT = r._next), r._next && (r._next._prev = r._prev), r._next = r._prev = null), delete a[o]), u && (s[o] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, o.invalidate = function() {
                return this._notifyPluginsOfEnabled && L._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], u.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -_, this.render(Math.min(0, -this._delay))), this
            }, o._enabled = function(t, e) {
                if (v || g.wake(), t && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; - 1 < --i;) this._siblings[i] = K(n[i], this, !0);
                    else this._siblings = K(this.target, this, !0)
                }
                return u.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && L._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
            }, L.to = function(t, e, i) {
                return new L(t, e, i)
            }, L.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new L(t, e, i)
            }, L.fromTo = function(t, e, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new L(t, e, n)
            }, L.delayedCall = function(t, e, i, n, s) {
                return new L(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: n,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: s,
                    overwrite: 0
                })
            }, L.set = function(t, e) {
                return new L(t, 0, e)
            }, L.getTweensOf = function(t, e) {
                if (null == t) return [];
                var i, n, s, o;
                if (t = "string" != typeof t ? t : L.selector(t) || t, (w(t) || R(t)) && "number" != typeof t[0]) {
                    for (i = t.length, n = []; - 1 < --i;) n = n.concat(L.getTweensOf(t[i], e));
                    for (i = n.length; - 1 < --i;)
                        for (o = n[i], s = i; - 1 < --s;) o === n[s] && n.splice(i, 1)
                } else if (t._gsTweenID)
                    for (i = (n = K(t).concat()).length; - 1 < --i;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                return n || []
            }, L.killTweensOf = L.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var n = L.getTweensOf(t, e), s = n.length; - 1 < --s;) n[s]._kill(i, t)
            };
            var nt = S("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = nt.prototype
            }, !0);
            if (o = nt.prototype, nt.version = "1.19.0", nt.API = 2, o._firstPT = null, o._addTween = j, o.setRatio = z, o._kill = function(t) {
                    var e, i = this._overwriteProps,
                        n = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; - 1 < --e;) null != t[i[e]] && i.splice(e, 1);
                    for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                    return !1
                }, o._mod = o._roundProps = function(t) {
                    for (var e, i = this._firstPT; i;)(e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
                }, L._onPluginEvent = function(t, e) {
                    var i, n, s, o, r, a = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; a;) {
                            for (r = a._next, n = s; n && n.pr > a.pr;) n = n._next;
                            (a._prev = n ? n._prev : o) ? a._prev._next = a: s = a, (a._next = n) ? n._prev = a : o = a, a = r
                        }
                        a = e._firstPT = s
                    }
                    for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                    return i
                }, nt.activate = function(t) {
                    for (var e = t.length; - 1 < --e;) t[e].API === nt.API && (W[(new t[e])._propName] = t[e]);
                    return !0
                }, r.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        n = t.priority || 0,
                        s = t.overwriteProps,
                        o = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_mod",
                            mod: "_mod",
                            initAll: "_onInitAllProps"
                        },
                        r = S("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            nt.call(this, i, n), this._overwriteProps = s || []
                        }, !0 === t.global),
                        a = r.prototype = new nt(i);
                    for (e in (a.constructor = r).API = t.API, o) "function" == typeof t[e] && (a[o[e]] = t[e]);
                    return r.version = t.version, nt.activate([r]), r
                }, t = h._gsQueue) {
                for (s = 0; s < t.length; s++) t[s]();
                for (o in x) x[o].func || h.console.log("GSAP encountered missing dependency: " + o)
            }
            v = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");