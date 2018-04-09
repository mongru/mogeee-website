!function(e) {
    var t = {};
    function n(i) {
        if (t[i]) return t[i].exports;
        var s = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(s.exports, s, s.exports, n), s.l = !0, s.exports;
    }
    n.m = e, n.c = t, n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: i
        });
    }, n.r = function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return n.d(t, "a", t), t;
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "https://a5.behance.net/c2bfec3efb1375f4095fd3742f4e9d693ef060df/js/", 
    n(n.s = 945);
}({
    0: function(e, t) {
        e.exports = jQuery;
    },
    1: function(e, t) {
        e.exports = __webpack_network_bundle;
    },
    10: function(e, t, n) {
        e.exports = n(1)(234);
    },
    107: function(e, t, n) {
        var i, s, o = {}, r = (i = function() {
            return window && document && document.all && !window.atob;
        }, function() {
            return void 0 === s && (s = i.apply(this, arguments)), s;
        }), a = function(e) {
            var t = {};
            return function(e) {
                if ("function" == typeof e) return e();
                if (void 0 === t[e]) {
                    var n = function(e) {
                        return document.querySelector(e);
                    }.call(this, e);
                    if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                        n = n.contentDocument.head;
                    } catch (e) {
                        n = null;
                    }
                    t[e] = n;
                }
                return t[e];
            };
        }(), l = null, u = 0, c = [], d = n(155);
        function h(e, t) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n], s = o[i.id];
                if (s) {
                    s.refs++;
                    for (var r = 0; r < s.parts.length; r++) s.parts[r](i.parts[r]);
                    for (;r < i.parts.length; r++) s.parts.push(b(i.parts[r], t));
                } else {
                    var a = [];
                    for (r = 0; r < i.parts.length; r++) a.push(b(i.parts[r], t));
                    o[i.id] = {
                        id: i.id,
                        refs: 1,
                        parts: a
                    };
                }
            }
        }
        function p(e, t) {
            for (var n = [], i = {}, s = 0; s < e.length; s++) {
                var o = e[s], r = t.base ? o[0] + t.base : o[0], a = {
                    css: o[1],
                    media: o[2],
                    sourceMap: o[3]
                };
                i[r] ? i[r].parts.push(a) : n.push(i[r] = {
                    id: r,
                    parts: [ a ]
                });
            }
            return n;
        }
        function f(e, t) {
            var n = a(e.insertInto);
            if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var i = c[c.length - 1];
            if ("top" === e.insertAt) i ? i.nextSibling ? n.insertBefore(t, i.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), 
            c.push(t); else if ("bottom" === e.insertAt) n.appendChild(t); else {
                if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                var s = a(e.insertInto + " " + e.insertAt.before);
                n.insertBefore(t, s);
            }
        }
        function m(e) {
            if (null === e.parentNode) return !1;
            e.parentNode.removeChild(e);
            var t = c.indexOf(e);
            t >= 0 && c.splice(t, 1);
        }
        function g(e) {
            var t = document.createElement("style");
            return e.attrs.type = "text/css", v(t, e.attrs), f(e, t), t;
        }
        function v(e, t) {
            Object.keys(t).forEach(function(n) {
                e.setAttribute(n, t[n]);
            });
        }
        function b(e, t) {
            var n, i, s, o;
            if (t.transform && e.css) {
                if (!(o = t.transform(e.css))) return function() {};
                e.css = o;
            }
            if (t.singleton) {
                var r = u++;
                n = l || (l = g(t)), i = y.bind(null, n, r, !1), s = y.bind(null, n, r, !0);
            } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(e) {
                var t = document.createElement("link");
                return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", v(t, e.attrs), f(e, t), 
                t;
            }(t), i = function(e, t, n) {
                var i = n.css, s = n.sourceMap, o = void 0 === t.convertToAbsoluteUrls && s;
                (t.convertToAbsoluteUrls || o) && (i = d(i));
                s && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(s)))) + " */");
                var r = new Blob([ i ], {
                    type: "text/css"
                }), a = e.href;
                e.href = URL.createObjectURL(r), a && URL.revokeObjectURL(a);
            }.bind(null, n, t), s = function() {
                m(n), n.href && URL.revokeObjectURL(n.href);
            }) : (n = g(t), i = function(e, t) {
                var n = t.css, i = t.media;
                i && e.setAttribute("media", i);
                if (e.styleSheet) e.styleSheet.cssText = n; else {
                    for (;e.firstChild; ) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(n));
                }
            }.bind(null, n), s = function() {
                m(n);
            });
            return i(e), function(t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    i(e = t);
                } else s();
            };
        }
        e.exports = function(e, t) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = r()), 
            t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
            var n = p(e, t);
            return h(n, t), function(e) {
                for (var i = [], s = 0; s < n.length; s++) {
                    var r = n[s];
                    (a = o[r.id]).refs--, i.push(a);
                }
                e && h(p(e, t), t);
                for (s = 0; s < i.length; s++) {
                    var a;
                    if (0 === (a = i[s]).refs) {
                        for (var l = 0; l < a.parts.length; l++) a.parts[l]();
                        delete o[a.id];
                    }
                }
            };
        };
        var _, q = (_ = [], function(e, t) {
            return _[e] = t, _.filter(Boolean).join("\n");
        });
        function y(e, t, n, i) {
            var s = n ? "" : i.css;
            if (e.styleSheet) e.styleSheet.cssText = q(t, s); else {
                var o = document.createTextNode(s), r = e.childNodes;
                r[t] && e.removeChild(r[t]), r.length ? e.insertBefore(o, r[t]) : e.appendChild(o);
            }
        }
    },
    108: function(e, t, n) {
        e.exports = n(1)(224);
    },
    115: function(e, t, n) {
        (function(e, n) {
            var i = 200, s = "__lodash_hash_undefined__", o = 9007199254740991, r = "[object Arguments]", a = "[object Boolean]", l = "[object Date]", u = "[object Function]", c = "[object GeneratorFunction]", d = "[object Map]", h = "[object Number]", p = "[object Object]", f = "[object RegExp]", m = "[object Set]", g = "[object String]", v = "[object Symbol]", b = "[object WeakMap]", _ = "[object ArrayBuffer]", q = "[object DataView]", y = "[object Float32Array]", w = "[object Float64Array]", x = "[object Int8Array]", S = "[object Int16Array]", C = "[object Int32Array]", E = "[object Uint8Array]", P = "[object Uint8ClampedArray]", I = "[object Uint16Array]", T = "[object Uint32Array]", k = /\w*$/, A = /^\[object .+?Constructor\]$/, F = /^(?:0|[1-9]\d*)$/, D = {};
            D[y] = D[w] = D[x] = D[S] = D[C] = D[E] = D[P] = D[I] = D[T] = !0, D[r] = D["[object Array]"] = D[_] = D[a] = D[q] = D[l] = D["[object Error]"] = D[u] = D[d] = D[h] = D[p] = D[f] = D[m] = D[g] = D[b] = !1;
            var U = {};
            U[r] = U["[object Array]"] = U[_] = U[q] = U[a] = U[l] = U[y] = U[w] = U[x] = U[S] = U[C] = U[d] = U[h] = U[p] = U[f] = U[m] = U[g] = U[v] = U[E] = U[P] = U[I] = U[T] = !0, 
            U["[object Error]"] = U[u] = U[b] = !1;
            var R = "object" == typeof e && e && e.Object === Object && e, O = "object" == typeof self && self && self.Object === Object && self, B = R || O || Function("return this")(), N = "object" == typeof t && t && !t.nodeType && t, j = N && "object" == typeof n && n && !n.nodeType && n, M = j && j.exports === N, L = M && R.process, z = function() {
                try {
                    return L && L.binding("util");
                } catch (e) {}
            }(), H = z && z.isTypedArray;
            function $(e, t) {
                return e.set(t[0], t[1]), e;
            }
            function W(e, t) {
                return e.add(t), e;
            }
            function V(e, t) {
                for (var n = -1, i = e ? e.length : 0; ++n < i && !1 !== t(e[n], n, e); ) ;
                return e;
            }
            function G(e, t, n, i) {
                var s = -1, o = e ? e.length : 0;
                for (i && o && (n = e[++s]); ++s < o; ) n = t(n, e[s], s, e);
                return n;
            }
            function X(e) {
                var t = !1;
                if (null != e && "function" != typeof e.toString) try {
                    t = !!(e + "");
                } catch (e) {}
                return t;
            }
            function K(e) {
                var t = -1, n = Array(e.size);
                return e.forEach(function(e, i) {
                    n[++t] = [ i, e ];
                }), n;
            }
            function Y(e, t) {
                return function(n) {
                    return e(t(n));
                };
            }
            function Z(e) {
                var t = -1, n = Array(e.size);
                return e.forEach(function(e) {
                    n[++t] = e;
                }), n;
            }
            var J, Q = Array.prototype, ee = Function.prototype, te = Object.prototype, ne = B["__core-js_shared__"], ie = (J = /[^.]+$/.exec(ne && ne.keys && ne.keys.IE_PROTO || "")) ? "Symbol(src)_1." + J : "", se = ee.toString, oe = te.hasOwnProperty, re = se.call(Object), ae = te.toString, le = RegExp("^" + se.call(oe).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), ue = M ? B.Buffer : void 0, ce = B.Symbol, de = B.Uint8Array, he = Y(Object.getPrototypeOf, Object), pe = Object.create, fe = te.propertyIsEnumerable, me = Q.splice, ge = Object.getOwnPropertySymbols, ve = ue ? ue.isBuffer : void 0, be = Y(Object.keys, Object), _e = Math.max, qe = Ke(B, "DataView"), ye = Ke(B, "Map"), we = Ke(B, "Promise"), xe = Ke(B, "Set"), Se = Ke(B, "WeakMap"), Ce = Ke(Object, "create"), Ee = et(qe), Pe = et(ye), Ie = et(we), Te = et(xe), ke = et(Se), Ae = ce ? ce.prototype : void 0, Fe = Ae ? Ae.valueOf : void 0;
            function De(e) {
                var t = -1, n = e ? e.length : 0;
                for (this.clear(); ++t < n; ) {
                    var i = e[t];
                    this.set(i[0], i[1]);
                }
            }
            function Ue(e) {
                var t = -1, n = e ? e.length : 0;
                for (this.clear(); ++t < n; ) {
                    var i = e[t];
                    this.set(i[0], i[1]);
                }
            }
            function Re(e) {
                var t = -1, n = e ? e.length : 0;
                for (this.clear(); ++t < n; ) {
                    var i = e[t];
                    this.set(i[0], i[1]);
                }
            }
            function Oe(e) {
                this.__data__ = new Ue(e);
            }
            function Be(e, t) {
                var n = it(e) || nt(e) ? function(e, t) {
                    for (var n = -1, i = Array(e); ++n < e; ) i[n] = t(n);
                    return i;
                }(e.length, String) : [], i = n.length, s = !!i;
                for (var o in e) !t && !oe.call(e, o) || s && ("length" == o || Je(o, i)) || n.push(o);
                return n;
            }
            function Ne(e, t, n) {
                (void 0 === n || tt(e[t], n)) && ("number" != typeof t || void 0 !== n || t in e) || (e[t] = n);
            }
            function je(e, t, n) {
                var i = e[t];
                oe.call(e, t) && tt(i, n) && (void 0 !== n || t in e) || (e[t] = n);
            }
            function Me(e, t) {
                for (var n = e.length; n--; ) if (tt(e[n][0], t)) return n;
                return -1;
            }
            function Le(e, t, n, i, s, o, b) {
                var A;
                if (i && (A = o ? i(e, s, o, b) : i(e)), void 0 !== A) return A;
                if (!ut(e)) return e;
                var F = it(e);
                if (F) {
                    if (A = function(e) {
                        var t = e.length, n = e.constructor(t);
                        t && "string" == typeof e[0] && oe.call(e, "index") && (n.index = e.index, n.input = e.input);
                        return n;
                    }(e), !t) return Ve(e, A);
                } else {
                    var D = Ze(e), R = D == u || D == c;
                    if (rt(e)) return function(e, t) {
                        if (t) return e.slice();
                        var n = new e.constructor(e.length);
                        return e.copy(n), n;
                    }(e, t);
                    if (D == p || D == r || R && !o) {
                        if (X(e)) return o ? e : {};
                        if (A = function(e) {
                            return "function" != typeof e.constructor || Qe(e) ? {} : (t = he(e), ut(t) ? pe(t) : {});
                            var t;
                        }(R ? {} : e), !t) return function(e, t) {
                            return Ge(e, Ye(e), t);
                        }(e, function(e, t) {
                            return e && Ge(t, pt(t), e);
                        }(A, e));
                    } else {
                        if (!U[D]) return o ? e : {};
                        A = function(e, t, n, i) {
                            var s = e.constructor;
                            switch (t) {
                              case _:
                                return We(e);

                              case a:
                              case l:
                                return new s(+e);

                              case q:
                                return function(e, t) {
                                    var n = t ? We(e.buffer) : e.buffer;
                                    return new e.constructor(n, e.byteOffset, e.byteLength);
                                }(e, i);

                              case y:
                              case w:
                              case x:
                              case S:
                              case C:
                              case E:
                              case P:
                              case I:
                              case T:
                                return function(e, t) {
                                    var n = t ? We(e.buffer) : e.buffer;
                                    return new e.constructor(n, e.byteOffset, e.length);
                                }(e, i);

                              case d:
                                return function(e, t, n) {
                                    return G(t ? n(K(e), !0) : K(e), $, new e.constructor());
                                }(e, i, n);

                              case h:
                              case g:
                                return new s(e);

                              case f:
                                return (u = new (r = e).constructor(r.source, k.exec(r))).lastIndex = r.lastIndex, 
                                u;

                              case m:
                                return function(e, t, n) {
                                    return G(t ? n(Z(e), !0) : Z(e), W, new e.constructor());
                                }(e, i, n);

                              case v:
                                return o = e, Fe ? Object(Fe.call(o)) : {};
                            }
                            var o;
                            var r, u;
                        }(e, D, Le, t);
                    }
                }
                b || (b = new Oe());
                var O = b.get(e);
                if (O) return O;
                if (b.set(e, A), !F) var B = n ? function(e) {
                    return function(e, t, n) {
                        var i = t(e);
                        return it(e) ? i : function(e, t) {
                            for (var n = -1, i = t.length, s = e.length; ++n < i; ) e[s + n] = t[n];
                            return e;
                        }(i, n(e));
                    }(e, pt, Ye);
                }(e) : pt(e);
                return V(B || e, function(s, o) {
                    B && (s = e[o = s]), je(A, o, Le(s, t, n, i, o, e, b));
                }), A;
            }
            function ze(e) {
                return !(!ut(e) || ie && ie in e) && (at(e) || X(e) ? le : A).test(et(e));
            }
            function He(e) {
                if (!ut(e)) return function(e) {
                    var t = [];
                    if (null != e) for (var n in Object(e)) t.push(n);
                    return t;
                }(e);
                var t = Qe(e), n = [];
                for (var i in e) ("constructor" != i || !t && oe.call(e, i)) && n.push(i);
                return n;
            }
            function $e(e, t, n, i, s) {
                if (e !== t) {
                    if (!it(t) && !ht(t)) var o = He(t);
                    V(o || t, function(r, a) {
                        if (o && (r = t[a = r]), ut(r)) s || (s = new Oe()), function(e, t, n, i, s, o, r) {
                            var a = e[n], l = t[n], u = r.get(l);
                            if (u) return void Ne(e, n, u);
                            var c = o ? o(a, l, n + "", e, t, r) : void 0, d = void 0 === c;
                            d && (c = l, it(l) || ht(l) ? it(a) ? c = a : ot(a) ? c = Ve(a) : (d = !1, c = Le(l, !0)) : function(e) {
                                if (!ct(e) || ae.call(e) != p || X(e)) return !1;
                                var t = he(e);
                                if (null === t) return !0;
                                var n = oe.call(t, "constructor") && t.constructor;
                                return "function" == typeof n && n instanceof n && se.call(n) == re;
                            }(l) || nt(l) ? nt(a) ? c = function(e) {
                                return Ge(e, (t = e, st(t) ? Be(t, !0) : He(t)));
                                var t;
                            }(a) : !ut(a) || i && at(a) ? (d = !1, c = Le(l, !0)) : c = a : d = !1);
                            d && (r.set(l, c), s(c, l, i, o, r), r.delete(l));
                            Ne(e, n, c);
                        }(e, t, a, n, $e, i, s); else {
                            var l = i ? i(e[a], r, a + "", e, t, s) : void 0;
                            void 0 === l && (l = r), Ne(e, a, l);
                        }
                    });
                }
            }
            function We(e) {
                var t = new e.constructor(e.byteLength);
                return new de(t).set(new de(e)), t;
            }
            function Ve(e, t) {
                var n = -1, i = e.length;
                for (t || (t = Array(i)); ++n < i; ) t[n] = e[n];
                return t;
            }
            function Ge(e, t, n, i) {
                n || (n = {});
                for (var s = -1, o = t.length; ++s < o; ) {
                    var r = t[s], a = i ? i(n[r], e[r], r, n, e) : void 0;
                    je(n, r, void 0 === a ? e[r] : a);
                }
                return n;
            }
            function Xe(e, t) {
                var n, i, s = e.__data__;
                return ("string" == (i = typeof (n = t)) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== n : null === n) ? s["string" == typeof t ? "string" : "hash"] : s.map;
            }
            function Ke(e, t) {
                var n = function(e, t) {
                    return null == e ? void 0 : e[t];
                }(e, t);
                return ze(n) ? n : void 0;
            }
            De.prototype.clear = function() {
                this.__data__ = Ce ? Ce(null) : {};
            }, De.prototype.delete = function(e) {
                return this.has(e) && delete this.__data__[e];
            }, De.prototype.get = function(e) {
                var t = this.__data__;
                if (Ce) {
                    var n = t[e];
                    return n === s ? void 0 : n;
                }
                return oe.call(t, e) ? t[e] : void 0;
            }, De.prototype.has = function(e) {
                var t = this.__data__;
                return Ce ? void 0 !== t[e] : oe.call(t, e);
            }, De.prototype.set = function(e, t) {
                return this.__data__[e] = Ce && void 0 === t ? s : t, this;
            }, Ue.prototype.clear = function() {
                this.__data__ = [];
            }, Ue.prototype.delete = function(e) {
                var t = this.__data__, n = Me(t, e);
                return !(n < 0 || (n == t.length - 1 ? t.pop() : me.call(t, n, 1), 0));
            }, Ue.prototype.get = function(e) {
                var t = this.__data__, n = Me(t, e);
                return n < 0 ? void 0 : t[n][1];
            }, Ue.prototype.has = function(e) {
                return Me(this.__data__, e) > -1;
            }, Ue.prototype.set = function(e, t) {
                var n = this.__data__, i = Me(n, e);
                return i < 0 ? n.push([ e, t ]) : n[i][1] = t, this;
            }, Re.prototype.clear = function() {
                this.__data__ = {
                    hash: new De(),
                    map: new (ye || Ue)(),
                    string: new De()
                };
            }, Re.prototype.delete = function(e) {
                return Xe(this, e).delete(e);
            }, Re.prototype.get = function(e) {
                return Xe(this, e).get(e);
            }, Re.prototype.has = function(e) {
                return Xe(this, e).has(e);
            }, Re.prototype.set = function(e, t) {
                return Xe(this, e).set(e, t), this;
            }, Oe.prototype.clear = function() {
                this.__data__ = new Ue();
            }, Oe.prototype.delete = function(e) {
                return this.__data__.delete(e);
            }, Oe.prototype.get = function(e) {
                return this.__data__.get(e);
            }, Oe.prototype.has = function(e) {
                return this.__data__.has(e);
            }, Oe.prototype.set = function(e, t) {
                var n = this.__data__;
                if (n instanceof Ue) {
                    var s = n.__data__;
                    if (!ye || s.length < i - 1) return s.push([ e, t ]), this;
                    n = this.__data__ = new Re(s);
                }
                return n.set(e, t), this;
            };
            var Ye = ge ? Y(ge, Object) : function() {
                return [];
            }, Ze = function(e) {
                return ae.call(e);
            };
            function Je(e, t) {
                return !!(t = null == t ? o : t) && ("number" == typeof e || F.test(e)) && e > -1 && e % 1 == 0 && e < t;
            }
            function Qe(e) {
                var t = e && e.constructor;
                return e === ("function" == typeof t && t.prototype || te);
            }
            function et(e) {
                if (null != e) {
                    try {
                        return se.call(e);
                    } catch (e) {}
                    try {
                        return e + "";
                    } catch (e) {}
                }
                return "";
            }
            function tt(e, t) {
                return e === t || e != e && t != t;
            }
            function nt(e) {
                return ot(e) && oe.call(e, "callee") && (!fe.call(e, "callee") || ae.call(e) == r);
            }
            (qe && Ze(new qe(new ArrayBuffer(1))) != q || ye && Ze(new ye()) != d || we && "[object Promise]" != Ze(we.resolve()) || xe && Ze(new xe()) != m || Se && Ze(new Se()) != b) && (Ze = function(e) {
                var t = ae.call(e), n = t == p ? e.constructor : void 0, i = n ? et(n) : void 0;
                if (i) switch (i) {
                  case Ee:
                    return q;

                  case Pe:
                    return d;

                  case Ie:
                    return "[object Promise]";

                  case Te:
                    return m;

                  case ke:
                    return b;
                }
                return t;
            });
            var it = Array.isArray;
            function st(e) {
                return null != e && lt(e.length) && !at(e);
            }
            function ot(e) {
                return ct(e) && st(e);
            }
            var rt = ve || function() {
                return !1;
            };
            function at(e) {
                var t = ut(e) ? ae.call(e) : "";
                return t == u || t == c;
            }
            function lt(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= o;
            }
            function ut(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t);
            }
            function ct(e) {
                return !!e && "object" == typeof e;
            }
            var dt, ht = H ? (dt = H, function(e) {
                return dt(e);
            }) : function(e) {
                return ct(e) && lt(e.length) && !!D[ae.call(e)];
            };
            function pt(e) {
                return st(e) ? Be(e) : function(e) {
                    if (!Qe(e)) return be(e);
                    var t = [];
                    for (var n in Object(e)) oe.call(e, n) && "constructor" != n && t.push(n);
                    return t;
                }(e);
            }
            var ft = function(e) {
                return t = function(t, n) {
                    var i = -1, s = n.length, o = s > 1 ? n[s - 1] : void 0, r = s > 2 ? n[2] : void 0;
                    for (o = e.length > 3 && "function" == typeof o ? (s--, o) : void 0, r && function(e, t, n) {
                        if (!ut(n)) return !1;
                        var i = typeof t;
                        return !!("number" == i ? st(n) && Je(t, n.length) : "string" == i && t in n) && tt(n[t], e);
                    }(n[0], n[1], r) && (o = s < 3 ? void 0 : o, s = 1), t = Object(t); ++i < s; ) {
                        var a = n[i];
                        a && e(t, a, i, o);
                    }
                    return t;
                }, n = _e(void 0 === n ? t.length - 1 : n, 0), function() {
                    for (var e = arguments, i = -1, s = _e(e.length - n, 0), o = Array(s); ++i < s; ) o[i] = e[n + i];
                    i = -1;
                    for (var r = Array(n + 1); ++i < n; ) r[i] = e[i];
                    return r[n] = o, function(e, t, n) {
                        switch (n.length) {
                          case 0:
                            return e.call(t);

                          case 1:
                            return e.call(t, n[0]);

                          case 2:
                            return e.call(t, n[0], n[1]);

                          case 3:
                            return e.call(t, n[0], n[1], n[2]);
                        }
                        return e.apply(t, n);
                    }(t, this, r);
                };
                var t, n;
            }(function(e, t, n) {
                $e(e, t, n);
            });
            n.exports = ft;
        }).call(this, n(80), n(186)(e));
    },
    118: function(e, t, n) {
        var i = n(2), s = {
            "form/_textInner": n(152).template
        }, o = new i.Template({
            code: function(e, t, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<div class="'), i.s(i.f("unstyled", e, t, 1), e, t, 1, 0, 0, "") || i.b("form-item form-item-text"), 
                i.b(" be-placeholder"), i.s(i.f("containerClasses", e, t, 1), e, t, 0, 98, 104, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b(" "), n.b(n.v(n.d(".", e, t, 0)));
                }), e.pop()), i.b('" id="'), i.b(i.v(i.f("id", e, t, 0))), i.b('-container">'), 
                i.b("\n" + n), i.b(i.rp("<form/_textInner0", e, t, "  ")), i.b("</div>"), i.b("\n"), 
                i.fl();
            },
            partials: {
                "<form/_textInner0": {
                    name: "form/_textInner",
                    partials: {},
                    subs: {}
                }
            },
            subs: {}
        }, '<div class="{{^unstyled}}form-item form-item-text{{/unstyled}} be-placeholder{{#containerClasses}} {{.}}{{/containerClasses}}" id="{{id}}-container">\n  {{>form/_textInner}}\n</div>\n', i);
        o.ri = function(e, t, n) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (o = s, r = t, Object.keys(r).reduce(function(e, t) {
                return e[t] = r[t], e;
            }, o)), n);
            var o, r;
        }, e.exports = o.render.bind(o), e.exports.template = o;
    },
    12: function(e, t, n) {
        e.exports = n(1)(90);
    },
    121: function(e, t, n) {
        "use strict";
        var i = n(9), s = n.n(i);
        t.a = function(e) {
            return s()({
                classes: [ "profile-popup" ]
            }, e);
        };
    },
    122: function(e, t, n) {
        "use strict";
        var i = n(0), s = n.n(i);
        n(30), n(38);
        s.a.fn.autoselectmenu = function() {
            return this.each(function() {
                var e = s()(this), t = (e.find("option").outerWidth(), {});
                !e.data("uiSelectmenuold") && e.is(":visible") && (t = {
                    style: "dropdown",
                    maxHeight: 200,
                    menuWidth: e.outerWidth()
                }, e.hasClass("ui-selectmenu-dropdown-right") && (t.positionOptions = {
                    my: "right top",
                    at: "right bottom",
                    offset: null
                }), e.width() > 0 && (t.width = "auto"), e.selectmenuold(t).on("change keyup", function() {
                    e.changeInput("value", this.value);
                }));
            });
        };
    },
    133: function(e, t, n) {
        var i, s;
        i = [ n(0), n(64) ], void 0 === (s = function(e) {
            "use strict";
            return e.widget("be.autoselect", e.be.autosuggest, {
                options: {
                    limit: 0,
                    toggle: !1,
                    select: function(t, n) {
                        return e(this).autoselect("clear"), !1;
                    }
                },
                _selected: null,
                _create: function() {
                    this._super();
                    var t = this;
                    this._on(this.menu.element, {
                        menuselect: function(e, n) {
                            var i = n.item.data("ui-autocomplete-item");
                            t.select(i);
                        }
                    }), this._selected = e.isArray(this.options.value) ? this.options.value : [], this._selected.length && this._changeValue(!0);
                },
                select: function(t) {
                    t = e.isArray(t) ? t : [ t ];
                    var n, i, s, o = !1;
                    for (i = 0; i < t.length; ++i) s = t[i], (n = this._selected.indexOf(s)) < 0 ? this._selected.length < (this.options.limit || 1 / 0) ? (this._selected.push(s), 
                    o = !0) : this._trigger("limit", null, {
                        item: s
                    }) : this.options.toggle && (this._selected.splice(n, 1), o = !0);
                    o && this._changeValue();
                },
                unselect: function(e) {
                    var t;
                    (t = this._selected.indexOf(e)) >= 0 && (this._selected.splice(t, 1), this._changeValue());
                },
                _changeValue: function(e) {
                    var t = this._selected.length >= (this.options.limit || 1 / 0), n = this.options.messages[t ? "limited" : "placeholder"];
                    this.element.prop("disabled", t).prop("aria-disabled", t).toggleClass("ui-state-disabled", t), 
                    t && this.element.blur(), n && this.element.prop("placeholder", n), e || this._trigger("value", null, {
                        value: this._selected
                    });
                },
                value: function() {
                    return this._selected;
                },
                empty: function() {
                    this._selected = [], this._changeValue();
                }
            });
        }.apply(t, i)) || (e.exports = s);
    },
    14: function(e, t, n) {
        e.exports = n(1)(132);
    },
    15: function(e, t, n) {
        e.exports = n(1)(133);
    },
    152: function(e, t, n) {
        var i = n(2), s = {
            "lib/_savingSpinner": n(67).template
        }, o = new i.Template({
            code: function(e, t, n) {
                var i = this;
                return i.b(n = n || ""), i.b("  "), i.s(i.f("label", e, t, 1), e, t, 0, 12, 113, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b('<label for="'), n.b(n.v(n.f("id", e, t, 0))), n.b('">'), n.b(n.t(n.f("label", e, t, 0))), 
                    n.s(n.f("saving_spinner", e, t, 1), e, t, 0, 62, 86, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(n.rp("<lib/_savingSpinner0", e, t, ""));
                    }), e.pop()), n.b("</label>");
                }), e.pop()), i.b("\n" + n), i.b('  <input name="'), i.b(i.v(i.f("name", e, t, 0))), 
                i.s(i.f("name", e, t, 1), e, t, 1, 0, 0, "") || i.b(i.v(i.f("id", e, t, 0))), i.b('" type="'), 
                i.s(i.f("type", e, t, 1), e, t, 0, 188, 196, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b(n.v(n.f("type", e, t, 0)));
                }), e.pop()), i.s(i.f("type", e, t, 1), e, t, 1, 0, 0, "") || i.b("text"), i.b('" class="'), 
                i.s(i.f("unstyled", e, t, 1), e, t, 1, 0, 0, "") || i.b("form-text"), i.s(i.f("classes", e, t, 1), e, t, 0, 283, 289, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b(" "), n.b(n.v(n.d(".", e, t, 0)));
                }), e.pop()), i.b(" validate["), i.b(i.v(i.f("validate", e, t, 0))), i.b(']" id="'), 
                i.b(i.v(i.f("id", e, t, 0))), i.b('"'), i.b("\n" + n), i.b("  "), i.s(i.f("disabled", e, t, 1), e, t, 0, 353, 373, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b(' disabled="disabled"');
                }), e.pop()), i.b("\n" + n), i.b("  "), i.s(i.f("placeholder", e, t, 1), e, t, 0, 405, 437, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b(' placeholder="'), n.b(n.t(n.f("placeholder", e, t, 0))), n.b('"');
                }), e.pop()), i.b("\n" + n), i.b("  "), i.s(i.f("autocomplete", e, t, 1), e, t, 0, 473, 505, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b(' autocomplete="'), n.b(n.v(n.f("autocomplete", e, t, 0))), n.b('"');
                }), e.pop()), i.b("\n" + n), i.b("  "), i.s(i.f("autocapitalize", e, t, 1), e, t, 0, 544, 580, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b(' autocapitalize="'), n.b(n.v(n.f("autocapitalize", e, t, 0))), n.b('"');
                }), e.pop()), i.b("\n" + n), i.b("  "), i.s(i.f("autocorrect", e, t, 1), e, t, 0, 618, 648, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b(' autocorrect="'), n.b(n.v(n.f("autocorrect", e, t, 0))), n.b('"');
                }), e.pop()), i.b("\n" + n), i.b("  "), i.s(i.f("value", e, t, 1), e, t, 0, 677, 695, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b(' value="'), n.b(n.v(n.f("value", e, t, 0))), n.b('"');
                }), e.pop()), i.b("\n" + n), i.b("  "), i.s(i.f("maxlength", e, t, 1), e, t, 0, 722, 748, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b(' maxlength="'), n.b(n.v(n.f("maxlength", e, t, 0))), n.b('"');
                }), e.pop()), i.b("\n" + n), i.b('  data-validate="'), i.b(i.v(i.f("validate", e, t, 0))), 
                i.b('">'), i.b("\n"), i.fl();
            },
            partials: {
                "<lib/_savingSpinner0": {
                    name: "lib/_savingSpinner",
                    partials: {},
                    subs: {}
                }
            },
            subs: {}
        }, '  {{#label}}<label for="{{id}}">{{{label}}}{{#saving_spinner}}{{> lib/_savingSpinner}}{{/saving_spinner}}</label>{{/label}}\n  <input name="{{name}}{{^name}}{{id}}{{/name}}" type="{{#type}}{{type}}{{/type}}{{^type}}text{{/type}}" class="{{^unstyled}}form-text{{/unstyled}}{{#classes}} {{.}}{{/classes}} validate[{{validate}}]" id="{{id}}"\n  {{#disabled}} disabled="disabled"{{/disabled}}\n  {{#placeholder}} placeholder="{{{placeholder}}}"{{/placeholder}}\n  {{#autocomplete}} autocomplete="{{autocomplete}}"{{/autocomplete}}\n  {{#autocapitalize}} autocapitalize="{{autocapitalize}}"{{/autocapitalize}}\n  {{#autocorrect}} autocorrect="{{autocorrect}}"{{/autocorrect}}\n  {{#value}} value="{{value}}"{{/value}}\n  {{#maxlength}} maxlength="{{maxlength}}"{{/maxlength}}\n  data-validate="{{validate}}">\n', i);
        o.ri = function(e, t, n) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (o = s, r = t, Object.keys(r).reduce(function(e, t) {
                return e[t] = r[t], e;
            }, o)), n);
            var o, r;
        }, e.exports = o.render.bind(o), e.exports.template = o;
    },
    155: function(e, t) {
        e.exports = function(e) {
            var t = "undefined" != typeof window && window.location;
            if (!t) throw new Error("fixUrls requires window.location");
            if (!e || "string" != typeof e) return e;
            var n = t.protocol + "//" + t.host, i = n + t.pathname.replace(/\/[^\/]*$/, "/");
            return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
                var s, o = t.trim().replace(/^"(.*)"$/, function(e, t) {
                    return t;
                }).replace(/^'(.*)'$/, function(e, t) {
                    return t;
                });
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o) ? e : (s = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? n + o : i + o.replace(/^\.\//, ""), 
                "url(" + JSON.stringify(s) + ")");
            });
        };
    },
    16: function(e, t, n) {
        "use strict";
        var i = n(0), s = n.n(i), o = n(12), r = n(35), a = n.n(r), l = n(23), u = n.n(l), c = n(14), d = n(18), h = n(3), p = n(4), f = n(15);
        n(30);
        function m(e) {
            return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        t.a = a.a.extend({
            xhr: p.default,
            hideButtonText: h.default.translate("form_template_saving", "Saving..."),
            validator: [ u.a.trimIfEmpty, u.a.validateForm ],
            _submitSelector: ".form-submit:not([type=submit]):not([disabled]), .js-submit:not([type=submit]):not([disabled])",
            _displayError: function(e, t) {
                var n = {
                    errors: {}
                };
                return n.errors[e.attr("name")] = h.default.translateErrorMessage(t), c.default.displayAll(this.$form)(n);
            },
            init: function(e) {
                this._super(e), this.$context = e, this.on({
                    "error:show": this._displayError.bind(this),
                    "error:hide": c.default.removeErrors,
                    error: function() {
                        this.showButtons();
                    },
                    before: function() {
                        this.hideButtons();
                    }
                }), this.handlers.push(this.showMessages.bind(this)), this.bind();
            },
            reset: function() {
                return this._super(), this.$form.find("select").each(function() {
                    var e = this.value;
                    s()(this).changeInput("value", "").changeInput("value", e);
                }), this.showButtons(), this;
            },
            _getMessageContainer: function() {
                return this.$form;
            },
            showMessages: function(e) {
                if (!(e = d.default.error(e)).messages) throw e;
                Object(o.default)(this._getMessageContainer(), e.messages);
            },
            submit: function(e) {
                return this.wasSubmittedFromButton = !!e, c.default.removeAll(this.$form), this._super.apply(this, arguments);
            },
            commit: function(e) {
                return Object(p.default)(e);
            },
            showButtons: function() {
                f.default.show(this._getButtonContainer());
            },
            hideButtons: function() {
                var e = this.hideButtonText;
                "function" == typeof e && (e = e()), f.default.hide(this._getButtonContainer(), e);
            },
            _getButtonContainer: function() {
                var e = this.$context.find(this._submitSelector).closest(".form-item").parent();
                if (!e.length && this.wasSubmittedFromButton) throw new Error("Unable to find button container:" + this.$context.html());
                return e;
            },
            _findFormError: function(e) {
                var t = d.default.error(e);
                if (!t.errors && "object" === m(e.responseJSON)) throw e;
                return this._super(t.errors || t);
            },
            bind: function() {
                return this.alreadyBound ? this : (this.alreadyBound = !0, this.$context.on("click keydown", this._submitSelector, this._normalizeSubmitter), 
                this.$form.on("submit", this.submit), this);
            },
            unbind: function() {
                return this.$context.off("click keydown", this._submitSelector, this._normalizeSubmitter), 
                this.$form.off("submit", this.submit), this;
            }
        });
    },
    18: function(e, t, n) {
        e.exports = n(1)(70);
    },
    186: function(e, t, n) {
        e.exports = n(1)(140);
    },
    188: function(e, t, n) {
        var i = n(2), s = {}, o = new i.Template({
            code: function(e, t, n) {
                var i = this;
                return i.b(n = n || ""), i.s(i.f("divider", e, t, 1), e, t, 0, 12, 104, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                    i.b('<div class="ui-menu-divider"></div>'), i.b("\n" + n), i.b('<div class="ui-menu-divider-label">'), 
                    i.b(i.v(i.f("typelabel", e, t, 0))), i.b("</div>"), i.b("\n" + n);
                }), e.pop()), i.b('<li class="ui-menu-item-'), i.b(i.v(i.f("type", e, t, 0))), i.b('"><a class="text-ellipsis">'), 
                i.b(i.v(i.f("value", e, t, 0))), i.b("</a></li>"), i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '{{#divider}}\n<div class="ui-menu-divider"></div>\n<div class="ui-menu-divider-label">{{typelabel}}</div>\n{{/divider}}\n<li class="ui-menu-item-{{type}}"><a class="text-ellipsis">{{value}}</a></li>\n', i);
        o.ri = function(e, t, n) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (o = s, r = t, Object.keys(r).reduce(function(e, t) {
                return e[t] = r[t], e;
            }, o)), n);
            var o, r;
        }, e.exports = o.render.bind(o), e.exports.template = o;
    },
    19: function(e, t, n) {
        e.exports = n(1)(26);
    },
    195: function(e, t, n) {
        "use strict";
        var i = n(0), s = n.n(i), o = n(78), r = n.n(o), a = n(69), l = n.n(a), u = n(9), c = n.n(u), d = n(6), h = n.n(d), p = n(3), f = n(91), m = n(55), g = n(4), v = n(188), b = n.n(v), _ = (n(133), 
        n(64), n(30), n(122), r()("touch"));
        function q(e) {
            return e.value = e.n, e;
        }
        function y(e) {
            return e.map(q);
        }
        t.a = h.a.extend({
            init: function(e, t) {
                this._options = c()({
                    country: ".country, .js-country",
                    state: ".state, .js-state",
                    province: ".province, .js-province",
                    hidden_state: ".hidden-state, .js-hidden-state",
                    city: ".city, .js-city",
                    hidden_city: ".js-hidden-city",
                    showErrors: !0,
                    disableState: !1,
                    autoSelectMenu: !1
                }, t);
                var n = e.find(this._options.city), i = e.find(this._options.hidden_city);
                i.length || (i = s()("<input>", {
                    type: "hidden",
                    name: "location_id"
                }).insertAfter(n)), this._$context = e, this._$country = e.find(this._options.country), 
                this._$state = e.find(this._options.state), this._$province = e.find(this._options.province), 
                this._$stateProvince = this._$state.add(this._$province), this._$hiddenState = e.find(this._options.hidden_state), 
                this._$city = n, this._lastSelected = this._$city.val() || !1, this._$locationId = i, 
                this._$cityAndLocationId = n.add(i);
            },
            bind: function() {
                var e = this, t = this.getStateOrProvinceField();
                this._$country.on("change", function(t) {
                    e._reset(), e._countryChanged(t.target.value);
                }), this._$stateProvince.on("change", function(t) {
                    e._resetCityValue(), e._stateChanged(t.target.value);
                }), this._autoselect(), this._options.disableState && (this._$stateProvince.changeInput("disable"), 
                t && t.changeInput("enable")), this.refresh(), this._$city.add(this._$state, this._$province, this._$country).on("change selectmenuoldchange", function() {
                    e.trigger("change", e.get());
                });
            },
            get: function(e) {
                var t = this._$country.find('[value="' + this._$country.val() + '"]');
                return {
                    country: e ? this._$country.val() || t.data("code") || t.attr("code") : t.data("code") || t.attr("code") || this._$country.val(),
                    state: this._$hiddenState.val(),
                    location_id: this._$locationId.val(),
                    city: this._$city.val()
                };
            },
            toString: function() {
                var e = this.get();
                return [ "city", "state", "country" ].reduce(function(t, n) {
                    return e[n] && t.push(e[n]), t;
                }, []).join(", ");
            },
            refresh: function() {
                var e = this._$country.val(), t = this.getStateOrProvinceField();
                this._countryChanged(e), this._requiresStateOrProvince(e) && this._stateChanged(t && t.length ? t.val() : ""), 
                this._shouldAutoSelect() && this._$context.find("select").autoselectmenu(), this._$city.autosuggest("option", "width", this._$city.outerWidth());
            },
            getStateOrProvinceField: function() {
                var e = this._$country.val();
                return this._isUnitedStates(e) ? this._$state : this._isCanada(e) ? this._$province : void 0;
            },
            getCityField: function() {
                return this._$city;
            },
            getCountryField: function() {
                return this._$country;
            },
            getCountryFromISOCode: function(e) {
                return this._$country.find('[data-code="' + e + '"]').val() || this._$country.find('[value="' + e + '"]').val() || "";
            },
            setLocationId: function(e) {
                this._$locationId.val(e);
            },
            setCity: function(e, t) {
                this._$city.val(e), this._$context.toggleClass("city-selected", !!e), this._lastSelected = e || !1, 
                void 0 !== t && this.setLocationId(t), this.trigger("change", this.get());
            },
            _countryChanged: function(e) {
                var t = this.getStateOrProvinceField(e);
                t ? this._toggleStateOrProvince(t) : "" !== e && this._enableCity(), this._$context.toggleClass("showing-stateprov", !!t);
            },
            _stateChanged: function(e) {
                this._$hiddenState.val(e), this._toggleCity(!!e);
            },
            _requiresStateOrProvince: function(e) {
                return this._isUnitedStates(e) || this._isCanada(e);
            },
            _isUnitedStates: function(e) {
                return "US" === e || "United States" === e;
            },
            _isCanada: function(e) {
                return "CA" === e || "Canada" === e;
            },
            _toggleStateOrProvince: function(e) {
                var t = e.closest(e.data("containerSelector"));
                (t = t.length ? t : e.parent()).removeClass("hide"), e.changeInput("enable"), this._shouldAutoSelect() && e.autoselectmenu();
            },
            _toggleCity: function(e) {
                e ? this._enableCity() : this._disableCity();
            },
            _disableCity: function() {
                this._$cityAndLocationId.addClass("disabled").prop("disabled", !0);
            },
            _enableCity: function() {
                (this._$cityAndLocationId.is(".disabled") || this._$cityAndLocationId.is(":disabled")) && this._$cityAndLocationId.removeClass("disabled").removeAttr("disabled");
            },
            _shouldAutoSelect: function() {
                return this._options.autoSelectMenu && !_;
            },
            _reset: function() {
                this._resetValues(), this._resetVisibility();
            },
            _resetVisibility: function() {
                var e, t = this._$stateProvince;
                this._disableCity(), t && ((e = (e = t.closest(t.data("containerSelector"))).length ? e : t.parent()).addClass("hide"), 
                this._options.disableState && t.changeInput("disable"));
            },
            _resetCityValue: function() {
                this._$city.is(".autocomplete") && this._$city.autoselect("empty"), this.setCity("", "");
            },
            _resetValues: function() {
                this._$stateProvince.changeInput("value", ""), this._$hiddenState.val(""), this._removeErrors(this._$city), 
                this._resetCityValue();
            },
            _removeErrors: function(e) {
                e.siblings(".form-error").remove(), e.parent().removeClass("form-item-error");
            },
            _autoselect: function() {
                var e = Object(f.a)({
                    caseInsensitive: !0
                }), t = this._$hiddenState, n = this._$country, i = this._$stateProvince, o = this._$city, r = this;
                e.addRemote(function(e) {
                    var s = e.term, o = n.find('option[value="' + n.val() + '"]'), r = i.find('option[value="' + t.val() + '"]'), a = o.data("code") || o.attr("code") || n.val(), l = r.data("code") || r.attr("code") || t.val();
                    return Object(g.default)({
                        url: "/utilities/location",
                        data: {
                            level: "3",
                            country: a,
                            stateprov: l,
                            city: s
                        }
                    }).then(y);
                }), o.on("keyup", function() {
                    !1 !== r._lastSelected && r._lastSelected !== this.value && (r._$context.removeClass("city-selected"), 
                    r._lastSelected = !1, r.trigger("pendingChange", r.get()));
                }), o.autosuggest({
                    source: e,
                    position: {
                        my: "right top",
                        at: "right bottom"
                    },
                    itemTemplate: b.a,
                    minLength: 2,
                    width: o.outerWidth()
                }).on({
                    autosuggestselect: function(e, t) {
                        l()(function() {
                            r.setCity(t.item.value, t.item.location_id);
                        });
                    },
                    autosuggestchange: function(e, t) {
                        var n = t.item, i = s()(this).data("beAutosuggest");
                        r._removeErrors(o), n || i.widget().children().each(function() {
                            var e = s()(this).data("ui-autocomplete-item");
                            if (new RegExp("^" + e.value + "$", "gi").test(i.term)) return n = e, !1;
                        }), !n && r._options.showErrors && Object(m.default)(o, p.default.translate("error_city", "Please type in your city."), [ "form-error" ]), 
                        r.setLocationId(n && n.location_id), r.setCity(n && n.value), i._trigger("changevalidated", null, {
                            valid: !!n
                        });
                    },
                    blur: function() {
                        "" === o.val().trim() && (r._removeErrors(o), r._resetCityValue(), r._options.showErrors && Object(m.default)(o, p.default.translate("error_city", "Please type in your city."), [ "form-error" ]));
                    }
                });
            }
        });
    },
    2: function(e, t, n) {
        e.exports = n(1)(3);
    },
    20: function(e, t, n) {
        e.exports = n(1)(17);
    },
    22: function(e, t, n) {
        var i, s, o;
        s = [ n(0) ], void 0 === (o = "function" == typeof (i = function(e) {
            var t, n = 0, i = Array.prototype.slice;
            return e.cleanData = (t = e.cleanData, function(n) {
                var i, s, o;
                for (o = 0; null != (s = n[o]); o++) try {
                    (i = e._data(s, "events")) && i.remove && e(s).triggerHandler("remove");
                } catch (e) {}
                t(n);
            }), e.widget = function(t, n, i) {
                var s, o, r, a, l = {}, u = t.split(".")[0];
                return t = t.split(".")[1], s = u + "-" + t, i || (i = n, n = e.Widget), e.expr[":"][s.toLowerCase()] = function(t) {
                    return !!e.data(t, s);
                }, e[u] = e[u] || {}, o = e[u][t], r = e[u][t] = function(e, t) {
                    if (!this._createWidget) return new r(e, t);
                    arguments.length && this._createWidget(e, t);
                }, e.extend(r, o, {
                    version: i.version,
                    _proto: e.extend({}, i),
                    _childConstructors: []
                }), (a = new n()).options = e.widget.extend({}, a.options), e.each(i, function(t, i) {
                    var s, o;
                    e.isFunction(i) ? l[t] = (s = function() {
                        return n.prototype[t].apply(this, arguments);
                    }, o = function(e) {
                        return n.prototype[t].apply(this, e);
                    }, function() {
                        var e, t = this._super, n = this._superApply;
                        return this._super = s, this._superApply = o, e = i.apply(this, arguments), this._super = t, 
                        this._superApply = n, e;
                    }) : l[t] = i;
                }), r.prototype = e.widget.extend(a, {
                    widgetEventPrefix: o && a.widgetEventPrefix || t
                }, l, {
                    constructor: r,
                    namespace: u,
                    widgetName: t,
                    widgetFullName: s
                }), o ? (e.each(o._childConstructors, function(t, n) {
                    var i = n.prototype;
                    e.widget(i.namespace + "." + i.widgetName, r, n._proto);
                }), delete o._childConstructors) : n._childConstructors.push(r), e.widget.bridge(t, r), 
                r;
            }, e.widget.extend = function(t) {
                for (var n, s, o = i.call(arguments, 1), r = 0, a = o.length; r < a; r++) for (n in o[r]) s = o[r][n], 
                o[r].hasOwnProperty(n) && void 0 !== s && (e.isPlainObject(s) ? t[n] = e.isPlainObject(t[n]) ? e.widget.extend({}, t[n], s) : e.widget.extend({}, s) : t[n] = s);
                return t;
            }, e.widget.bridge = function(t, n) {
                var s = n.prototype.widgetFullName || t;
                e.fn[t] = function(o) {
                    var r = "string" == typeof o, a = i.call(arguments, 1), l = this;
                    return r ? this.each(function() {
                        var n, i = e.data(this, s);
                        return "instance" === o ? (l = i, !1) : i ? e.isFunction(i[o]) && "_" !== o.charAt(0) ? (n = i[o].apply(i, a)) !== i && void 0 !== n ? (l = n && n.jquery ? l.pushStack(n.get()) : n, 
                        !1) : void 0 : e.error("no such method '" + o + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + o + "'");
                    }) : (a.length && (o = e.widget.extend.apply(null, [ o ].concat(a))), this.each(function() {
                        var t = e.data(this, s);
                        t ? (t.option(o || {}), t._init && t._init()) : e.data(this, s, new n(o, this));
                    })), l;
                };
            }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
                widgetName: "widget",
                widgetEventPrefix: "",
                defaultElement: "<div>",
                options: {
                    disabled: !1,
                    create: null
                },
                _createWidget: function(t, i) {
                    i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = n++, 
                    this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), 
                    this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                        remove: function(e) {
                            e.target === i && this.destroy();
                        }
                    }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), 
                    this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), 
                    this._trigger("create", null, this._getCreateEventData()), this._init();
                },
                _getCreateOptions: e.noop,
                _getCreateEventData: e.noop,
                _create: e.noop,
                _init: e.noop,
                destroy: function() {
                    this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), 
                    this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), 
                    this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), 
                    this.focusable.removeClass("ui-state-focus");
                },
                _destroy: e.noop,
                widget: function() {
                    return this.element;
                },
                option: function(t, n) {
                    var i, s, o, r = t;
                    if (0 === arguments.length) return e.widget.extend({}, this.options);
                    if ("string" == typeof t) if (r = {}, t = (i = t.split(".")).shift(), i.length) {
                        for (s = r[t] = e.widget.extend({}, this.options[t]), o = 0; o < i.length - 1; o++) s[i[o]] = s[i[o]] || {}, 
                        s = s[i[o]];
                        if (t = i.pop(), 1 === arguments.length) return void 0 === s[t] ? null : s[t];
                        s[t] = n;
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                        r[t] = n;
                    }
                    return this._setOptions(r), this;
                },
                _setOptions: function(e) {
                    var t;
                    for (t in e) this._setOption(t, e[t]);
                    return this;
                },
                _setOption: function(e, t) {
                    return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), 
                    t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), 
                    this;
                },
                enable: function() {
                    return this._setOptions({
                        disabled: !1
                    });
                },
                disable: function() {
                    return this._setOptions({
                        disabled: !0
                    });
                },
                _on: function(t, n, i) {
                    var s, o = this;
                    "boolean" != typeof t && (i = n, n = t, t = !1), i ? (n = s = e(n), this.bindings = this.bindings.add(n)) : (i = n, 
                    n = this.element, s = this.widget()), e.each(i, function(i, r) {
                        function a() {
                            if (t || !0 !== o.options.disabled && !e(this).hasClass("ui-state-disabled")) return ("string" == typeof r ? o[r] : r).apply(o, arguments);
                        }
                        "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || e.guid++);
                        var l = i.match(/^([\w:-]*)\s*(.*)$/), u = l[1] + o.eventNamespace, c = l[2];
                        c ? s.delegate(c, u, a) : n.bind(u, a);
                    });
                },
                _off: function(t, n) {
                    n = (n || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, 
                    t.unbind(n).undelegate(n), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), 
                    this.hoverable = e(this.hoverable.not(t).get());
                },
                _delay: function(e, t) {
                    var n = this;
                    return setTimeout(function() {
                        return ("string" == typeof e ? n[e] : e).apply(n, arguments);
                    }, t || 0);
                },
                _hoverable: function(t) {
                    this.hoverable = this.hoverable.add(t), this._on(t, {
                        mouseenter: function(t) {
                            e(t.currentTarget).addClass("ui-state-hover");
                        },
                        mouseleave: function(t) {
                            e(t.currentTarget).removeClass("ui-state-hover");
                        }
                    });
                },
                _focusable: function(t) {
                    this.focusable = this.focusable.add(t), this._on(t, {
                        focusin: function(t) {
                            e(t.currentTarget).addClass("ui-state-focus");
                        },
                        focusout: function(t) {
                            e(t.currentTarget).removeClass("ui-state-focus");
                        }
                    });
                },
                _trigger: function(t, n, i) {
                    var s, o, r = this.options[t];
                    if (i = i || {}, (n = e.Event(n)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), 
                    n.target = this.element[0], o = n.originalEvent) for (s in o) s in n || (n[s] = o[s]);
                    return this.element.trigger(n, i), !(e.isFunction(r) && !1 === r.apply(this.element[0], [ n ].concat(i)) || n.isDefaultPrevented());
                }
            }, e.each({
                show: "fadeIn",
                hide: "fadeOut"
            }, function(t, n) {
                e.Widget.prototype["_" + t] = function(i, s, o) {
                    "string" == typeof s && (s = {
                        effect: s
                    });
                    var r, a = s ? !0 === s || "number" == typeof s ? n : s.effect || n : t;
                    "number" == typeof (s = s || {}) && (s = {
                        duration: s
                    }), r = !e.isEmptyObject(s), s.complete = o, s.delay && i.delay(s.delay), r && e.effects && e.effects.effect[a] ? i[t](s) : a !== t && i[a] ? i[a](s.duration, s.easing, o) : i.queue(function(n) {
                        e(this)[t](), o && o.call(i[0]), n();
                    });
                };
            }), e.widget;
        }) ? i.apply(t, s) : i) || (e.exports = o);
    },
    223: function(e, t, n) {
        var i, s, o;
        s = [ n(0), n(22) ], void 0 === (o = "function" == typeof (i = function(e) {
            var t = !1;
            return e(document).mouseup(function() {
                t = !1;
            }), e.widget("ui.mouse", {
                version: "1.11.4",
                options: {
                    cancel: "input,textarea,button,select,option",
                    distance: 1,
                    delay: 0
                },
                _mouseInit: function() {
                    var t = this;
                    this.element.bind("mousedown." + this.widgetName, function(e) {
                        return t._mouseDown(e);
                    }).bind("click." + this.widgetName, function(n) {
                        if (!0 === e.data(n.target, t.widgetName + ".preventClickEvent")) return e.removeData(n.target, t.widgetName + ".preventClickEvent"), 
                        n.stopImmediatePropagation(), !1;
                    }), this.started = !1;
                },
                _mouseDestroy: function() {
                    this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
                },
                _mouseDown: function(n) {
                    if (!t) {
                        this._mouseMoved = !1, this._mouseStarted && this._mouseUp(n), this._mouseDownEvent = n;
                        var i = this, s = 1 === n.which, o = !("string" != typeof this.options.cancel || !n.target.nodeName) && e(n.target).closest(this.options.cancel).length;
                        return !(s && !o && this._mouseCapture(n) && (this.mouseDelayMet = !this.options.delay, 
                        this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                            i.mouseDelayMet = !0;
                        }, this.options.delay)), this._mouseDistanceMet(n) && this._mouseDelayMet(n) && (this._mouseStarted = !1 !== this._mouseStart(n), 
                        !this._mouseStarted) ? (n.preventDefault(), 0) : (!0 === e.data(n.target, this.widgetName + ".preventClickEvent") && e.removeData(n.target, this.widgetName + ".preventClickEvent"), 
                        this._mouseMoveDelegate = function(e) {
                            return i._mouseMove(e);
                        }, this._mouseUpDelegate = function(e) {
                            return i._mouseUp(e);
                        }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), 
                        n.preventDefault(), t = !0, 0)));
                    }
                },
                _mouseMove: function(t) {
                    if (this._mouseMoved) {
                        if (e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button) return this._mouseUp(t);
                        if (!t.which) return this._mouseUp(t);
                    }
                    return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), 
                    t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t), 
                    this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted);
                },
                _mouseUp: function(n) {
                    return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), 
                    this._mouseStarted && (this._mouseStarted = !1, n.target === this._mouseDownEvent.target && e.data(n.target, this.widgetName + ".preventClickEvent", !0), 
                    this._mouseStop(n)), t = !1, !1;
                },
                _mouseDistanceMet: function(e) {
                    return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance;
                },
                _mouseDelayMet: function() {
                    return this.mouseDelayMet;
                },
                _mouseStart: function() {},
                _mouseDrag: function() {},
                _mouseStop: function() {},
                _mouseCapture: function() {
                    return !0;
                }
            });
        }) ? i.apply(t, s) : i) || (e.exports = o);
    },
    23: function(e, t, n) {
        var i, s;
        i = [ n(0), n(29) ], void 0 === (s = function(e, t) {
            "use strict";
            return {
                trimIfEmpty: function(e) {
                    return Object.keys(e).forEach(function(t) {
                        var n, i = e[t];
                        "string" == typeof i && (n = i.trim(), e[t] = 0 === n.length ? n : i);
                    }), e;
                },
                validateForm: function(n) {
                    var i = this.$form.find("[data-validate]:not(:disabled)").toArray();
                    if (this.errors = i.reduce(function(i, s) {
                        var o = e(s), r = o.data("validate"), a = o.attr("name") || o.attr("id");
                        return t(n[a], r) || (i[a] = t.message), i;
                    }, {}), Object.keys(this.errors).length) throw this.errors;
                    return n;
                }
            };
        }.apply(t, i)) || (e.exports = s);
    },
    24: function(e, t, n) {
        e.exports = n(1)(14);
    },
    25: function(e, t, n) {
        e.exports = n(1)(401);
    },
    26: function(e, t, n) {
        e.exports = n(1)(59);
    },
    268: function(e, t, n) {
        var i, s, o;
        s = [ n(0), n(46), n(223), n(22) ], void 0 === (o = "function" == typeof (i = function(e) {
            return e.widget("ui.sortable", e.ui.mouse, {
                version: "1.11.4",
                widgetEventPrefix: "sort",
                ready: !1,
                options: {
                    appendTo: "parent",
                    axis: !1,
                    connectWith: !1,
                    containment: !1,
                    cursor: "auto",
                    cursorAt: !1,
                    dropOnEmpty: !0,
                    forcePlaceholderSize: !1,
                    forceHelperSize: !1,
                    grid: !1,
                    handle: !1,
                    helper: "original",
                    items: "> *",
                    opacity: !1,
                    placeholder: !1,
                    revert: !1,
                    scroll: !0,
                    scrollSensitivity: 20,
                    scrollSpeed: 20,
                    scope: "default",
                    tolerance: "intersect",
                    zIndex: 1e3,
                    activate: null,
                    beforeStop: null,
                    change: null,
                    deactivate: null,
                    out: null,
                    over: null,
                    receive: null,
                    remove: null,
                    sort: null,
                    start: null,
                    stop: null,
                    update: null
                },
                _isOverAxis: function(e, t, n) {
                    return e >= t && e < t + n;
                },
                _isFloating: function(e) {
                    return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"));
                },
                _create: function() {
                    this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), 
                    this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), 
                    this.ready = !0;
                },
                _setOption: function(e, t) {
                    this._super(e, t), "handle" === e && this._setHandleClassName();
                },
                _setHandleClassName: function() {
                    this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), e.each(this.items, function() {
                        (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle");
                    });
                },
                _destroy: function() {
                    this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), 
                    this._mouseDestroy();
                    for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item");
                    return this;
                },
                _mouseCapture: function(t, n) {
                    var i = null, s = !1, o = this;
                    return !(this.reverting || this.options.disabled || "static" === this.options.type || (this._refreshItems(t), 
                    e(t.target).parents().each(function() {
                        if (e.data(this, o.widgetName + "-item") === o) return i = e(this), !1;
                    }), e.data(t.target, o.widgetName + "-item") === o && (i = e(t.target)), !i || this.options.handle && !n && (e(this.options.handle, i).find("*").addBack().each(function() {
                        this === t.target && (s = !0);
                    }), !s) || (this.currentItem = i, this._removeCurrentsFromItems(), 0)));
                },
                _mouseStart: function(t, n, i) {
                    var s, o, r = this.options;
                    if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), 
                    this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), 
                    this.offset = this.currentItem.offset(), this.offset = {
                        top: this.offset.top - this.margins.top,
                        left: this.offset.left - this.margins.left
                    }, e.extend(this.offset, {
                        click: {
                            left: t.pageX - this.offset.left,
                            top: t.pageY - this.offset.top
                        },
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), 
                    this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, 
                    this.originalPageY = t.pageY, r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt), 
                    this.domPosition = {
                        prev: this.currentItem.prev()[0],
                        parent: this.currentItem.parent()[0]
                    }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), 
                    r.containment && this._setContainment(), r.cursor && "auto" !== r.cursor && (o = this.document.find("body"), 
                    this.storedCursor = o.css("cursor"), o.css("cursor", r.cursor), this.storedStylesheet = e("<style>*{ cursor: " + r.cursor + " !important; }</style>").appendTo(o)), 
                    r.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), 
                    this.helper.css("opacity", r.opacity)), r.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), 
                    this.helper.css("zIndex", r.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), 
                    this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), 
                    !i) for (s = this.containers.length - 1; s >= 0; s--) this.containers[s]._trigger("activate", t, this._uiHash(this));
                    return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !r.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), 
                    this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), 
                    !0;
                },
                _mouseDrag: function(t) {
                    var n, i, s, o, r = this.options, a = !1;
                    for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), 
                    this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < r.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + r.scrollSpeed : t.pageY - this.overflowOffset.top < r.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - r.scrollSpeed), 
                    this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < r.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + r.scrollSpeed : t.pageX - this.overflowOffset.left < r.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - r.scrollSpeed)) : (t.pageY - this.document.scrollTop() < r.scrollSensitivity ? a = this.document.scrollTop(this.document.scrollTop() - r.scrollSpeed) : this.window.height() - (t.pageY - this.document.scrollTop()) < r.scrollSensitivity && (a = this.document.scrollTop(this.document.scrollTop() + r.scrollSpeed)), 
                    t.pageX - this.document.scrollLeft() < r.scrollSensitivity ? a = this.document.scrollLeft(this.document.scrollLeft() - r.scrollSpeed) : this.window.width() - (t.pageX - this.document.scrollLeft()) < r.scrollSensitivity && (a = this.document.scrollLeft(this.document.scrollLeft() + r.scrollSpeed))), 
                    !1 !== a && e.ui.ddmanager && !r.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), 
                    this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), 
                    this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), 
                    n = this.items.length - 1; n >= 0; n--) if (i = this.items[n], s = i.item[0], (o = this._intersectsWithPointer(i)) && i.instance === this.currentContainer && !(s === this.currentItem[0] || this.placeholder[1 === o ? "next" : "prev"]()[0] === s || e.contains(this.placeholder[0], s) || "semi-dynamic" === this.options.type && e.contains(this.element[0], s))) {
                        if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(i)) break;
                        this._rearrange(t, i), this._trigger("change", t, this._uiHash());
                        break;
                    }
                    return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), 
                    this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, 
                    !1;
                },
                _mouseStop: function(t, n) {
                    if (t) {
                        if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), 
                        this.options.revert) {
                            var i = this, s = this.placeholder.offset(), o = this.options.axis, r = {};
                            o && "x" !== o || (r.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), 
                            o && "y" !== o || (r.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), 
                            this.reverting = !0, e(this.helper).animate(r, parseInt(this.options.revert, 10) || 500, function() {
                                i._clear(t);
                            });
                        } else this._clear(t, n);
                        return !1;
                    }
                },
                cancel: function() {
                    if (this.dragging) {
                        this._mouseUp({
                            target: null
                        }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                        for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), 
                        this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), 
                        this.containers[t].containerCache.over = 0);
                    }
                    return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 
                    "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), 
                    e.extend(this, {
                        helper: null,
                        dragging: !1,
                        reverting: !1,
                        _noFinalSort: null
                    }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), 
                    this;
                },
                serialize: function(t) {
                    var n = this._getItemsAsjQuery(t && t.connected), i = [];
                    return t = t || {}, e(n).each(function() {
                        var n = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                        n && i.push((t.key || n[1] + "[]") + "=" + (t.key && t.expression ? n[1] : n[2]));
                    }), !i.length && t.key && i.push(t.key + "="), i.join("&");
                },
                toArray: function(t) {
                    var n = this._getItemsAsjQuery(t && t.connected), i = [];
                    return t = t || {}, n.each(function() {
                        i.push(e(t.item || this).attr(t.attribute || "id") || "");
                    }), i;
                },
                _intersectsWith: function(e) {
                    var t = this.positionAbs.left, n = t + this.helperProportions.width, i = this.positionAbs.top, s = i + this.helperProportions.height, o = e.left, r = o + e.width, a = e.top, l = a + e.height, u = this.offset.click.top, c = this.offset.click.left, d = "x" === this.options.axis || i + u > a && i + u < l, h = "y" === this.options.axis || t + c > o && t + c < r, p = d && h;
                    return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? p : o < t + this.helperProportions.width / 2 && n - this.helperProportions.width / 2 < r && a < i + this.helperProportions.height / 2 && s - this.helperProportions.height / 2 < l;
                },
                _intersectsWithPointer: function(e) {
                    var t = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height), n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width), i = t && n, s = this._getDragVerticalDirection(), o = this._getDragHorizontalDirection();
                    return !!i && (this.floating ? o && "right" === o || "down" === s ? 2 : 1 : s && ("down" === s ? 2 : 1));
                },
                _intersectsWithSides: function(e) {
                    var t = this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height), n = this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width), i = this._getDragVerticalDirection(), s = this._getDragHorizontalDirection();
                    return this.floating && s ? "right" === s && n || "left" === s && !n : i && ("down" === i && t || "up" === i && !t);
                },
                _getDragVerticalDirection: function() {
                    var e = this.positionAbs.top - this.lastPositionAbs.top;
                    return 0 !== e && (e > 0 ? "down" : "up");
                },
                _getDragHorizontalDirection: function() {
                    var e = this.positionAbs.left - this.lastPositionAbs.left;
                    return 0 !== e && (e > 0 ? "right" : "left");
                },
                refresh: function(e) {
                    return this._refreshItems(e), this._setHandleClassName(), this.refreshPositions(), 
                    this;
                },
                _connectWith: function() {
                    var e = this.options;
                    return e.connectWith.constructor === String ? [ e.connectWith ] : e.connectWith;
                },
                _getItemsAsjQuery: function(t) {
                    var n, i, s, o, r = [], a = [], l = this._connectWith();
                    if (l && t) for (n = l.length - 1; n >= 0; n--) for (s = e(l[n], this.document[0]), 
                    i = s.length - 1; i >= 0; i--) (o = e.data(s[i], this.widgetFullName)) && o !== this && !o.options.disabled && a.push([ e.isFunction(o.options.items) ? o.options.items.call(o.element) : e(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o ]);
                    function u() {
                        r.push(this);
                    }
                    for (a.push([ e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                        options: this.options,
                        item: this.currentItem
                    }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this ]), 
                    n = a.length - 1; n >= 0; n--) a[n][0].each(u);
                    return e(r);
                },
                _removeCurrentsFromItems: function() {
                    var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
                    this.items = e.grep(this.items, function(e) {
                        for (var n = 0; n < t.length; n++) if (t[n] === e.item[0]) return !1;
                        return !0;
                    });
                },
                _refreshItems: function(t) {
                    this.items = [], this.containers = [ this ];
                    var n, i, s, o, r, a, l, u, c = this.items, d = [ [ e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                        item: this.currentItem
                    }) : e(this.options.items, this.element), this ] ], h = this._connectWith();
                    if (h && this.ready) for (n = h.length - 1; n >= 0; n--) for (s = e(h[n], this.document[0]), 
                    i = s.length - 1; i >= 0; i--) (o = e.data(s[i], this.widgetFullName)) && o !== this && !o.options.disabled && (d.push([ e.isFunction(o.options.items) ? o.options.items.call(o.element[0], t, {
                        item: this.currentItem
                    }) : e(o.options.items, o.element), o ]), this.containers.push(o));
                    for (n = d.length - 1; n >= 0; n--) for (r = d[n][1], a = d[n][0], i = 0, u = a.length; i < u; i++) (l = e(a[i])).data(this.widgetName + "-item", r), 
                    c.push({
                        item: l,
                        instance: r,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    });
                },
                refreshPositions: function(t) {
                    var n, i, s, o;
                    for (this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), 
                    this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()), 
                    n = this.items.length - 1; n >= 0; n--) (i = this.items[n]).instance !== this.currentContainer && this.currentContainer && i.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? e(this.options.toleranceElement, i.item) : i.item, 
                    t || (i.width = s.outerWidth(), i.height = s.outerHeight()), o = s.offset(), i.left = o.left, 
                    i.top = o.top);
                    if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (n = this.containers.length - 1; n >= 0; n--) o = this.containers[n].element.offset(), 
                    this.containers[n].containerCache.left = o.left, this.containers[n].containerCache.top = o.top, 
                    this.containers[n].containerCache.width = this.containers[n].element.outerWidth(), 
                    this.containers[n].containerCache.height = this.containers[n].element.outerHeight();
                    return this;
                },
                _createPlaceholder: function(t) {
                    var n, i = (t = t || this).options;
                    i.placeholder && i.placeholder.constructor !== String || (n = i.placeholder, i.placeholder = {
                        element: function() {
                            var i = t.currentItem[0].nodeName.toLowerCase(), s = e("<" + i + ">", t.document[0]).addClass(n || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                            return "tbody" === i ? t._createTrPlaceholder(t.currentItem.find("tr").eq(0), e("<tr>", t.document[0]).appendTo(s)) : "tr" === i ? t._createTrPlaceholder(t.currentItem, s) : "img" === i && s.attr("src", t.currentItem.attr("src")), 
                            n || s.css("visibility", "hidden"), s;
                        },
                        update: function(e, s) {
                            n && !i.forcePlaceholderSize || (s.height() || s.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), 
                            s.width() || s.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)));
                        }
                    }), t.placeholder = e(i.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), 
                    i.placeholder.update(t, t.placeholder);
                },
                _createTrPlaceholder: function(t, n) {
                    var i = this;
                    t.children().each(function() {
                        e("<td>&#160;</td>", i.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(n);
                    });
                },
                _contactContainers: function(t) {
                    var n, i, s, o, r, a, l, u, c, d, h = null, p = null;
                    for (n = this.containers.length - 1; n >= 0; n--) if (!e.contains(this.currentItem[0], this.containers[n].element[0])) if (this._intersectsWith(this.containers[n].containerCache)) {
                        if (h && e.contains(this.containers[n].element[0], h.element[0])) continue;
                        h = this.containers[n], p = n;
                    } else this.containers[n].containerCache.over && (this.containers[n]._trigger("out", t, this._uiHash(this)), 
                    this.containers[n].containerCache.over = 0);
                    if (h) if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", t, this._uiHash(this)), 
                    this.containers[p].containerCache.over = 1); else {
                        for (s = 1e4, o = null, c = h.floating || this._isFloating(this.currentItem), r = c ? "left" : "top", 
                        a = c ? "width" : "height", d = c ? "clientX" : "clientY", i = this.items.length - 1; i >= 0; i--) e.contains(this.containers[p].element[0], this.items[i].item[0]) && this.items[i].item[0] !== this.currentItem[0] && (l = this.items[i].item.offset()[r], 
                        u = !1, t[d] - l > this.items[i][a] / 2 && (u = !0), Math.abs(t[d] - l) < s && (s = Math.abs(t[d] - l), 
                        o = this.items[i], this.direction = u ? "up" : "down"));
                        if (!o && !this.options.dropOnEmpty) return;
                        if (this.currentContainer === this.containers[p]) return void (this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", t, this._uiHash()), 
                        this.currentContainer.containerCache.over = 1));
                        o ? this._rearrange(t, o, null, !0) : this._rearrange(t, null, this.containers[p].element, !0), 
                        this._trigger("change", t, this._uiHash()), this.containers[p]._trigger("change", t, this._uiHash(this)), 
                        this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), 
                        this.containers[p]._trigger("over", t, this._uiHash(this)), this.containers[p].containerCache.over = 1;
                    }
                },
                _createHelper: function(t) {
                    var n = this.options, i = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [ t, this.currentItem ])) : "clone" === n.helper ? this.currentItem.clone() : this.currentItem;
                    return i.parents("body").length || e("parent" !== n.appendTo ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), 
                    i[0] === this.currentItem[0] && (this._storedCSS = {
                        width: this.currentItem[0].style.width,
                        height: this.currentItem[0].style.height,
                        position: this.currentItem.css("position"),
                        top: this.currentItem.css("top"),
                        left: this.currentItem.css("left")
                    }), i[0].style.width && !n.forceHelperSize || i.width(this.currentItem.width()), 
                    i[0].style.height && !n.forceHelperSize || i.height(this.currentItem.height()), 
                    i;
                },
                _adjustOffsetFromHelper: function(t) {
                    "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                        left: +t[0],
                        top: +t[1] || 0
                    }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), 
                    "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top);
                },
                _getParentOffset: function() {
                    this.offsetParent = this.helper.offsetParent();
                    var t = this.offsetParent.offset();
                    return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), 
                    t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                        top: 0,
                        left: 0
                    }), {
                        top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                        left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                    };
                },
                _getRelativeOffset: function() {
                    if ("relative" === this.cssPosition) {
                        var e = this.currentItem.position();
                        return {
                            top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                            left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                        };
                    }
                    return {
                        top: 0,
                        left: 0
                    };
                },
                _cacheMargins: function() {
                    this.margins = {
                        left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                        top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                    };
                },
                _cacheHelperProportions: function() {
                    this.helperProportions = {
                        width: this.helper.outerWidth(),
                        height: this.helper.outerHeight()
                    };
                },
                _setContainment: function() {
                    var t, n, i, s = this.options;
                    "parent" === s.containment && (s.containment = this.helper[0].parentNode), "document" !== s.containment && "window" !== s.containment || (this.containment = [ 0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === s.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === s.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ]), 
                    /^(document|window|parent)$/.test(s.containment) || (t = e(s.containment)[0], n = e(s.containment).offset(), 
                    i = "hidden" !== e(t).css("overflow"), this.containment = [ n.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, n.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, n.left + (i ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, n.top + (i ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top ]);
                },
                _convertPositionTo: function(t, n) {
                    n || (n = this.position);
                    var i = "absolute" === t ? 1 : -1, s = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, o = /(html|body)/i.test(s[0].tagName);
                    return {
                        top: n.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * i,
                        left: n.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * i
                    };
                },
                _generatePosition: function(t) {
                    var n, i, s = this.options, o = t.pageX, r = t.pageY, a = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, l = /(html|body)/i.test(a[0].tagName);
                    return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), 
                    this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), 
                    t.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top), 
                    t.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), 
                    t.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)), 
                    s.grid && (n = this.originalPageY + Math.round((r - this.originalPageY) / s.grid[1]) * s.grid[1], 
                    r = this.containment ? n - this.offset.click.top >= this.containment[1] && n - this.offset.click.top <= this.containment[3] ? n : n - this.offset.click.top >= this.containment[1] ? n - s.grid[1] : n + s.grid[1] : n, 
                    i = this.originalPageX + Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0], 
                    o = this.containment ? i - this.offset.click.left >= this.containment[0] && i - this.offset.click.left <= this.containment[2] ? i : i - this.offset.click.left >= this.containment[0] ? i - s.grid[0] : i + s.grid[0] : i)), 
                    {
                        top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()),
                        left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft())
                    };
                },
                _rearrange: function(e, t, n, i) {
                    n ? n[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling), 
                    this.counter = this.counter ? ++this.counter : 1;
                    var s = this.counter;
                    this._delay(function() {
                        s === this.counter && this.refreshPositions(!i);
                    });
                },
                _clear: function(e, t) {
                    this.reverting = !1;
                    var n, i = [];
                    if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), 
                    this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                        for (n in this._storedCSS) "auto" !== this._storedCSS[n] && "static" !== this._storedCSS[n] || (this._storedCSS[n] = "");
                        this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
                    } else this.currentItem.show();
                    function s(e, t, n) {
                        return function(i) {
                            n._trigger(e, i, t._uiHash(t));
                        };
                    }
                    for (this.fromOutside && !t && i.push(function(e) {
                        this._trigger("receive", e, this._uiHash(this.fromOutside));
                    }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || i.push(function(e) {
                        this._trigger("update", e, this._uiHash());
                    }), this !== this.currentContainer && (t || (i.push(function(e) {
                        this._trigger("remove", e, this._uiHash());
                    }), i.push(function(e) {
                        return function(t) {
                            e._trigger("receive", t, this._uiHash(this));
                        };
                    }.call(this, this.currentContainer)), i.push(function(e) {
                        return function(t) {
                            e._trigger("update", t, this._uiHash(this));
                        };
                    }.call(this, this.currentContainer)))), n = this.containers.length - 1; n >= 0; n--) t || i.push(s("deactivate", this, this.containers[n])), 
                    this.containers[n].containerCache.over && (i.push(s("out", this, this.containers[n])), 
                    this.containers[n].containerCache.over = 0);
                    if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), 
                    this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), 
                    this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), 
                    this.dragging = !1, t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 
                    this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), 
                    this.helper = null), !t) {
                        for (n = 0; n < i.length; n++) i[n].call(this, e);
                        this._trigger("stop", e, this._uiHash());
                    }
                    return this.fromOutside = !1, !this.cancelHelperRemoval;
                },
                _trigger: function() {
                    !1 === e.Widget.prototype._trigger.apply(this, arguments) && this.cancel();
                },
                _uiHash: function(t) {
                    var n = t || this;
                    return {
                        helper: n.helper,
                        placeholder: n.placeholder || e([]),
                        position: n.position,
                        originalPosition: n.originalPosition,
                        offset: n.positionAbs,
                        item: n.currentItem,
                        sender: t ? t.element : null
                    };
                }
            });
        }) ? i.apply(t, s) : i) || (e.exports = o);
    },
    274: function(e, t, n) {
        "use strict";
        var i = n(54), s = n.n(i);
        t.a = s.a.extend({
            init: function(e, t) {
                this._super.apply(this, arguments), t && (this.$view = t), this.$parent = !e && t ? this.$view.parent() : e;
            },
            rendered: function() {
                this.bind && this.bind();
            },
            destroy: function() {
                this.unbind && this.unbind(), this._super();
            },
            bind: function() {},
            unbind: function() {}
        });
    },
    276: function(e, t, n) {
        var i = n(2), s = {}, o = new i.Template({
            code: function(e, t, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<svg class="rf-icon rf-icon--triangle" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 125.8 291.6" style="enable-background:new 0 0 125.8 291.6;">'), 
                i.b("\n" + n), i.b('  <polygon points="88.6,145.8 18.6,64.7 18.6,226.9 "/>'), i.b("\n" + n), 
                i.b("</svg>"), i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '{{! NOTE: This triangle was tailor-made for buttons. Feel free to use it elsewhere, but please do not change any attributes in this file. }}\n<svg class="rf-icon rf-icon--triangle" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 125.8 291.6" style="enable-background:new 0 0 125.8 291.6;">\n  <polygon points="88.6,145.8 18.6,64.7 18.6,226.9 "/>\n</svg>\n', i);
        o.ri = function(e, t, n) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (o = s, r = t, Object.keys(r).reduce(function(e, t) {
                return e[t] = r[t], e;
            }, o)), n);
            var o, r;
        }, e.exports = o.render.bind(o), e.exports.template = o;
    },
    286: function(e, t, n) {
        "use strict";
        var i = n(0), s = n.n(i), o = n(74), r = n.n(o), a = n(54), l = n.n(a);
        t.a = l.a.extend({
            stolenFunctions: {
                bind: !1,
                unbind: !1
            },
            init: function(e, t, n) {
                this._super(e), this.newViews = [], this.views = [], this.ViewType = t, this._emptyTemplate = n;
            },
            bind: function() {
                return this._useBorrowedFunctions(function() {
                    return this._bind();
                });
            },
            unbind: function() {
                return this._useBorrowedFunctions(function() {
                    return this._unbind();
                });
            },
            _useBorrowedFunctions: function(e) {
                this._borrowViewFunctions();
                var t = e.call(this);
                return this._giveBackViewFunctions(), t;
            },
            _borrowViewFunctions: function() {
                var e;
                for (e in this.stolenFunctions) this.stolenFunctions[e] = this.ViewType.prototype[e], 
                this["_" + e] = this.stolenFunctions[e].bind(this), this.ViewType.prototype[e] = s.a.noop;
            },
            _giveBackViewFunctions: function() {
                var e;
                for (e in this.stolenFunctions) this.stolenFunctions[e] && (this.ViewType.prototype[e] = this.stolenFunctions[e], 
                this["_" + e] = s.a.noop, this.stolenFunctions[e] = !1);
            },
            initChildren: function() {
                var e = this;
                this.$parent.children().each(function(t, n) {
                    var i = new e.ViewType(e.$parent, s()(n));
                    i.rendered(), e.newViews.push(i);
                }), this.views = this.newViews;
            },
            setContents: function(e) {
                this.$parent.html(e);
            },
            setEmpty: function(e) {
                return this.setContents(this._emptyTemplate(e));
            },
            render: function(e) {
                return this.trigger("prerender", this.$parent, this.views), this.newViews = e.map(function(e) {
                    var t = new this.ViewType(this.$parent);
                    return t.render(e), t;
                }, this), this.views = this.views.concat(this.newViews), this.trigger("postrender", this.$parent, this.getNewElements()), 
                this.getNewElements();
            },
            destroy: function() {
                var e = this;
                this._useBorrowedFunctions(function() {
                    e.views.forEach(function(e) {
                        e.destroy();
                    }), e._unbind();
                }), this.$parent.empty(), this.views = this.newViews = [];
            },
            reset: function(e, t) {
                this.destroy(), this.ViewType = e, this._emptyTemplate = t, this.bind();
            },
            getNewElements: function() {
                return s()(this.newViews.map(function(e) {
                    return e.$view[0];
                }));
            }
        }, {
            init: function() {
                var e = r.a.apply(this, arguments);
                return e._useBorrowedFunctions(function() {
                    e.initChildren(), e._bind(), e.trigger("init", e.$parent, e.getNewElements());
                }), e;
            }
        });
    },
    29: function(e, t, n) {
        var i;
        void 0 === (i = function() {
            "use strict";
            var e, t = RegExp.prototype.test, n = {
                Generic: {
                    test: t.bind(/^[^<>]+$/),
                    message: "This field may not contain less than signs (&lt) or greater than signs (&gt;)"
                },
                AlphaNumeric: {
                    test: t.bind(/^[0-9A-Za-z\u00C0-\u00FF\u0100-\u0259\u0386\u0388-\u04E9\u05D0-\u06D3\u1E80-\u200F]+$/),
                    message: "This field must contain only alphanumeric characters"
                },
                Alpha: {
                    test: t.bind(/^[A-Za-z\u00C0-\u00FF\u0100-\u0259\u0386\u0388-\u04E9\u05D0-\u06D3\u1E80-\u200F]+$/),
                    message: "This field must contain only alpha characters"
                },
                AlphaDash: {
                    test: t.bind(/^[A-Za-z\u00C0-\u00FF\u0100-\u0259\u0386\u0388-\u04E9\u05D0-\u06D3\u1E80-\u200F\-]+$/),
                    message: "This field must contain only alpha characters or dashes"
                },
                ANDash: {
                    test: t.bind(/^[0-9A-Za-z\u00C0-\u00FF\u0100-\u0259\u0386\u0388-\u04E9\u05D0-\u06D3\u1E80-\u200F\-]+$/),
                    message: "This field must contain only alphanumeric characters or dashes"
                },
                ANUnder: {
                    test: t.bind(/^[0-9A-Za-z\u00C0-\u00FF\u0100-\u0259\u0386\u0388-\u04E9\u05D0-\u06D3\u1E80-\u200F_]+$/),
                    message: "This field must contain only alphanumeric characters with or without underscores"
                },
                ANUSpace: {
                    test: t.bind(/^[0-9A-Za-z\u00C0-\u00FF\u0100-\u0259\u0386\u0388-\u04E9\u05D0-\u06D3\u1E80-\u200F_ ]+$/),
                    message: "This field must contain only alphanumeric characters with or without underscores and spaces"
                },
                ANEmail: {
                    test: t.bind(/^([_\dA-Za-z\u00C0-\u00FF\u0100-\u0259\u0386\u0388-\u04E9\u05D0-\u06D3\u1E80-\u200F\-]+|[\w\.\+\-]+@(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9]))$/),
                    message: "This field must contain a valid username or email"
                },
                Integer: {
                    test: t.bind(/^\-?\d+$/),
                    message: "This field must only contain numbers, without any spaces"
                },
                CreditCardNumber: {
                    test: t.bind(/^\d{13,16}$/),
                    message: "This field must only contain numbers, without any spaces or dashes"
                },
                Decimal: {
                    test: t.bind(/^\-?\d+(\.\d+)?$/),
                    message: "This field must be a valid decimal number"
                },
                Date: {
                    test: t.bind(/^\d{1,2}\-\d{1,2}-\d{4}( \d{2}:\d{2}:\d{2})?$/),
                    message: "This field must be a valid date"
                },
                SqlDate: {
                    test: t.bind(/^\d{4}\-\d{2}\-\d{2}$/),
                    message: "This field must be a valid date"
                },
                SqlDateTime: {
                    test: t.bind(/^\d{4}\-\d{2}\-\d{2}\s\d{2}\:\d{2}\:\d{2}$/),
                    message: "This field must be a valid datetime"
                },
                SlashDate: {
                    test: t.bind(/^\d{1,2}\/\d{1,2}\/\d{4}$/),
                    message: "This field must be a valid date"
                },
                Email: {
                    test: t.bind(/^[a-zA-Z0-9_.+\-]+@(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9]{2,63}$/),
                    message: "This field must be a valid email address"
                },
                Name: {
                    test: t.bind(/^[\wA-Za-z\u00C0-\u00FF\u0100-\u0259\u0386\u0388-\u04E9\u05D0-\u06D3\u1E80-\u200F\'. \-]{2,50}$/),
                    message: "This field must be a valid name"
                },
                Username: {
                    test: t.bind(/^[A-Za-z0-9_\-]+$/),
                    message: "This field contains invalid characters. Please use only letters (a-z, A-Z), numbers, dash or underscore characters."
                },
                Password: {
                    test: t.bind(/^\S{6,32}$/),
                    message: "This field must be between 6 and 32 characters"
                },
                Address: {
                    test: t.bind(/^[\w0-9A-Za-z\u00C0-\u00FF\u0100-\u0259\u0386\u0388-\u04E9\u05D0-\u06D3\u1E80-\u200F# \' \.\,\&\-]+$/),
                    message: "This field must be a valid address"
                },
                City: {
                    test: t.bind(/^[\wA-Za-z\u00C0-\u00FF\u0100-\u0259\u0386\u0388-\u04E9\u05D0-\u06D3\u1E80-\u200F \' \. \/ \-]+$/),
                    message: "This field must be a valid city"
                },
                Province: {
                    test: t.bind(/^[\wA-Za-z\u00C0-\u00FF\u0100-\u0259\u0386\u0388-\u04E9\u05D0-\u06D3\u1E80-\u200F ]+$/),
                    message: "This field must be a valid province"
                },
                IntZip: {
                    test: t.bind(/^[A-Za-z0-9#\. \-]+$/),
                    message: "This field must be a valid zipcode"
                },
                UsZip: {
                    test: t.bind(/^\d{5}(\-\d{4})?$/),
                    message: "This field must be a valid US zipcode"
                },
                Country: {
                    test: t.bind(/^[\wA-Za-z\u00C0-\u00FF\u0100-\u0259\u0386\u0388-\u04E9\u05D0-\u06D3\u1E80-\u200F\'. \-]{2,50}$/),
                    message: "This field must be a valid country"
                },
                IntPhone: {
                    test: t.bind(/^[0-9\+ \(\)\#\-]+$/),
                    message: "This field must be a valid phone"
                },
                UsPhone: {
                    test: t.bind(/^\d{3}\-\d{3}\-\d{4}$/),
                    message: "This field must be a valid US phone"
                },
                PicExt: {
                    test: t.bind(/^((jpg)|(jpeg)|(png)|(gif)){1}$/),
                    message: "This field must be a valid image extension"
                },
                VideoExt: {
                    test: t.bind(/^((mpg)|(mpeg)|(mov)|(avi)|(dv)|(qt)|(asf)|(flv)){1}$/),
                    message: "This field must be a valid video extension"
                },
                Url: {
                    test: t.bind(/^(http(?:s)?:\/\/|www\.)[^<>"]*$/),
                    message: "This field must be a URL starting with http:// or www."
                },
                UrlWithProtocol: {
                    test: t.bind(/^https?:\/\/(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-]*[a-zA-Z0-9])?\.)+(?:(?:[Xx][Nn]--)?[a-zA-Z0-9]{2,63}|\d{1,3})[^<>"]*$/),
                    message: "This field must be a URL starting with http:// or https://"
                },
                UrlExt: {
                    test: t.bind(/^((?:https?):\/\/)?(?:(?:(?:[\w\.\-\+!$&\'\(\)*\+,;=_]|%[0-9a-f]{2})+:)*(?:[\w\.\-\+%!$&\'\(\)*\+,;=]|%[0-9a-f]{2})+@)?(?:[A-Za-z0-9_\-]+\.)(?:[A-Za-z0-9\-\._])+(?::\d+)?(?:[\/|\?](?:[\w#!:\.\?\+=&@$\'~*,;_\/\(\)\[\]\-]|%[0-9a-f]{2})*)?$/),
                    message: "This field must be a valid URL"
                },
                ContainsUrl: {
                    test: t.bind(/([a-zA-Z0-9]+:\/\/)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9-]+\.[A-Za-z]{2,4})(:[0-9]+)?(\/.*)?/i),
                    message: "This field contains a URL"
                },
                ContainsEmail: {
                    test: t.bind(/(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/),
                    message: "This field contains an email"
                },
                Html: {
                    test: function() {
                        return !t.apply(/<((?!\/?span|\/?h1|\/?h2|\/?h3|\/?h4|\/?h5|\/?h6|\/?a|\/?b|\/?ol|\/?ul|\/?li|\/?i|\/?u|\/?strong|\/?em(?!bed)|\/?p|\/?div|\/?br|\/?unb|\/?uni|\/?\s|\/?\>)[^\>]*\>)/i, arguments);
                    },
                    message: "This field must be properly formed HTML"
                },
                Twitter: {
                    test: t.bind(/^[A-Za-z0-9_\-]{1,15}$/),
                    message: "This field must be a valid twitter username (without the @ character)"
                },
                required: {
                    test: t.bind(/.+/),
                    message: "This field is required"
                },
                requireTrimmed: {
                    test: function(e) {
                        return "" !== e.trim();
                    },
                    message: "This field must not be blank"
                },
                length: {
                    test: function(e, t) {
                        var n = /\[(?:(\d+|\d+,\d+|,\d+|\d+,))\]/.exec(t);
                        return e = String(e).replace(/[\s]+/g, " "), !!n && (n[1] = "" === n[1].split(",")[0] ? 0 + n[1] : n[1], 
                        new RegExp("^.{" + n[1] + "}$").test(e));
                    },
                    message: function(e, t) {
                        var n;
                        return (n = /\[(\d+),(\d+)\]/.exec(t)) ? "Must be between " + n[1] + " and " + n[2] + " characters." : (n = /\[,(\d+)\]/.exec(t)) ? "Must be at most " + n[1] + " characters." : (n = /\[(\d+),\]/.exec(t)) ? "Must be at least " + n[1] + " characters." : (n = /\[(\d+)\]/.exec(t)) ? "Must be exactly " + n[1] + " characters." : void 0;
                    }
                }
            }, i = /(\w+)(.*)/;
            function s(t, n) {
                return delete s.message, n = n ? function(e) {
                    var t, n, i = !1, s = 0, o = [];
                    for (t = 0; t < e.length; ++t) "[" !== e[t] ? "]" !== e[t] ? "," !== e[t] || i || ((n = e.substring(s, t)) && o.push(n), 
                    s = t + 1) : i = !1 : i = !0;
                    return (n = e.substring(s)) && o.push(n), o;
                }(n) : [], null == t && (t = ""), -1 === n.indexOf("required") && "" === t || n.every(e, t);
            }
            return e = function(e) {
                var t, o = i.exec(e);
                return o && (e = o[1], t = o[2]), !n[e] || !n[e].test || ((o = n[e].test(this, t)) || (s.message = "function" == typeof n[e].message ? n[e].message(this, t) : n[e].message), 
                o);
            }, s.tests = n, s;
        }.call(t, n, t, e)) || (e.exports = i);
    },
    297: function(e, t, n) {
        "use strict";
        var i = n(0), s = n.n(i);
        t.a = {
            init: function() {
                var e = s()(window), t = s()("html");
                e.scrollTop() > 0 ? t.css("overflow", "visible") : e.one("scroll", function() {
                    t.css("overflow", "visible");
                });
            }
        };
    },
    3: function(e, t, n) {
        e.exports = n(1)(5);
    },
    30: function(e, t, n) {
        "use strict";
        var i = n(0), s = n.n(i);
        n(38);
        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        s.a.fn.changeInput = function(e, t, n) {
            var i = "object" === o(n) && void 0 !== n.extra_event_args ? n.extra_event_args : [];
            return void 0 !== e && s()(this).each(function(n) {
                var o, r, a, l, u = s()(this);
                if (u.is("input, button, textarea, select, optgroup, option") && (u.val(), void 0 === t || "val" !== e && "value" !== e || (u.data("uiSelectmenuold") || u.data("selectmenu") ? u.selectmenuold("value", t) : (u.val(t), 
                u.triggerHandler("change", i)))), u.is("input:not([type=hidden]), button, textarea, select, optgroup, option, .form-button, .rf-button")) {
                    switch (o = this.disabled || u.attr("disabled"), l = !1, e) {
                      case "disable":
                        l = !0;
                        break;

                      case "enable":
                        l = !1;
                        break;

                      case "toggleDisabled":
                        l = void 0 !== t ? Boolean(t) : !this.disabled;
                    }
                    l != o && (r = u.is("[type=submit], [type=button], button, .form-button, .form-submit, .rf-button") ? "disabled form-button-disabled rf-button--disabled" : "disabled", 
                    l ? (u.addClass(r).trigger("disable", i).attr("disabled", !0), u.is("select") && u.next().addClass(r), 
                    (u.data("uiSelectmenuold") || u.data("selectmenu")) && u.selectmenuold("disable")) : (u.removeClass(r).attr("disabled", !1).trigger("enable", i), 
                    u.is("select") && u.next().removeClass(r), (u.data("uiSelectmenuold") || u.data("selectmenu")) && u.selectmenuold("enable")));
                }
                if (u.is("[type=checkbox], [type=radio]")) {
                    switch (a = this.checked, e) {
                      case "check":
                        this.checked = !0;
                        break;

                      case "uncheck":
                        this.checked = !1;
                        break;

                      case "toggleChecked":
                        this.checked = void 0 !== t ? Boolean(t) : !this.checked;
                    }
                    this.checked != a && (u.triggerHandler("click", i), this.checked ? u.addClass("checked").attr("checked", !0).trigger("check", i) : u.removeClass("checked").attr("checked", !1).trigger("uncheck", i));
                }
            }), this;
        };
    },
    308: function(e, t, n) {
        "use strict";
        var i = n(0), s = n.n(i), o = n(9), r = n.n(o), a = n(6), l = n.n(a), u = n(29), c = n.n(u), d = n(16), h = n(3), p = n(8), f = n(50), m = n(4), g = l.a.extend({
            init: function(e, t) {
                this.$context = e, this.options = r()(Object.create(this.options), t || {}), this._spinner = f.default.create(null, {
                    lines: 10,
                    length: 0,
                    width: 2,
                    radius: 6,
                    speed: 1.3,
                    trail: 38,
                    shadow: !1,
                    corners: 1,
                    opacity: .25,
                    top: "auto",
                    left: "auto"
                }), this._icon = s()("<span/>").addClass("slugcheck-icon js-slugcheck-icon beicons-pre"), 
                this._prefix = s()('<span class="shim">' + this.options.prefix + "</span>"), this.oldValue = this.$context.val(), 
                this._bindCheck(), this._modifyDOM();
            },
            options: {
                includeLabel: !1,
                prefix: "http://be.net/",
                prefixPad: !1,
                unchangedIsValid: !0
            },
            _classesInvalid: "invalid beicons-pre-x-circle",
            _classesValid: "valid beicons-pre-check-circle",
            valid: !1,
            _last: "",
            _timeout: null,
            _spinner: null,
            $wrapper: null,
            _prefix: null,
            _icon: null,
            _wrapped: null,
            check: function() {
                var e, t = this, n = this.$context[0], i = d.a.decompose(this.$context.serializeArray());
                n.disabled || (this._last = n.value, null !== this._timeout && (clearTimeout(this._timeout), 
                this._timeout = null), this._icon.removeClass(this._classesInvalid + " " + this._classesValid), 
                e = [ n ].reduce(function(e, t) {
                    var n = s()(t), o = n.data("validate"), r = n.attr("name") || n.attr("id");
                    return c()(i[r], o) || (e[r] = h.default.translateErrorMessage(c.a.message)), e;
                }, {}), Object.keys(e).length ? this._failure({
                    errors: e
                }) : n.value !== this.oldValue && "" !== n.value ? (this._timeout = setTimeout(function() {
                    var e = t.constructor.remoteCheck(n.value);
                    e.then(t._loaded.bind(t), t._loaded.bind(t)), e.then(t._success.bind(t), function(e) {
                        t._failure(e.responseJSON);
                    });
                }, this.constructor.THROTTLE_TIMEOUT), this._spinner && !this.$wrapper.find(this._spinner.el).length && this._icon.before(s()(this._spinner.spin().el).css({
                    position: "absolute",
                    right: 16,
                    top: 16
                }))) : this._unchanged());
            },
            _unchanged: function() {
                this._spinner.stop(), this.valid = this.options.unchangedIsValid, this.valid && this.trigger("valid"), 
                this.trigger("unchange");
            },
            _bindCheck: function() {
                var e = this;
                this.$context.on("keyup input propertychange", function() {
                    e._last !== e.$context.val() && e.check();
                }).on("change", function() {
                    e.trigger("change", e.valid);
                });
            },
            _modifyDOM: function() {
                var e = s()('<div class="shim-wrap"/>');
                this._wrapped = this.options.includeLabel ? this.$context.siblings("label").addBack() : this.$context, 
                this.$wrapper = this._wrapped.wrapAll(e).parent(), this.$context.before(this._prefix).after(this._icon), 
                this._nudgeElement();
            },
            reset: function() {
                this.$context.val(this.oldValue), this._icon.removeClass(this._classesInvalid + " " + this._classesValid), 
                this.trigger("reset");
            },
            _loaded: function() {
                this._timeout = null;
            },
            _success: function(e) {
                this._spinner.stop(), this._icon.removeClass(this._classesInvalid).addClass(this._classesValid), 
                this.valid = !0, this.trigger("valid", e);
            },
            _failure: function(e) {
                this._spinner.stop(), this._icon.removeClass(this._classesValid).addClass(this._classesInvalid), 
                this.valid = !1, this.trigger("invalid", e);
            },
            _nudgeElement: function() {
                if (!this.options.prefixPad) return !1;
                var e = this.$context.width(), t = parseInt(this.$context.css("paddingLeft"), 10), n = this._prefix.outerWidth();
                this._wrapped.css("paddingLeft", t + n), this.$context.css("width", e - n);
            },
            value: function(e) {
                return void 0 !== e ? (this.$context.val(e), this) : this.$context.val();
            }
        }, {
            THROTTLE_TIMEOUT: 300,
            MAX_RETRIES: 10,
            remoteCheck: function(e) {
                return Object(m.default)({
                    type: "get",
                    url: "/v2/teams/isavailable/" + encodeURIComponent(e)
                });
            },
            getValidSlug: function(e, t) {
                var n = this, i = this.MAX_RETRIES;
                return t = t || 0, this.remoteCheck(e).then(function() {
                    return e;
                }, function() {
                    if (t >= i) throw p.default.info("slugcheck", "Retry limit hit", {
                        slug: e
                    }), new Error("SlugCheck retry limit hit");
                    return t++, e = e.replace(/\-\d+$/, "") + "-" + t, n.getValidSlug(e, t);
                });
            },
            getSlug: function(e) {
                return e.toLowerCase().replace(/ /g, "-").replace(/[^a-z0-9-_]/g, "").substring(0, 20);
            }
        }), v = n(55);
        t.a = g.extend({
            tooltipSelector: function() {
                return this.$wrapper.find(".js-slugcheck-icon");
            },
            bind: function() {
                var e;
                return this.on("change", function(t) {
                    e && t && (e.remove(), e = null);
                }).on("valid reset invalid", function() {
                    e && (e.remove(), e = null);
                }).on("valid reset", function() {
                    this.tooltipSelector().removeClass("form-error form-item-error"), this.$wrapper.closest(".form-item").removeClass("form-item-error");
                }).on("invalid", function(t) {
                    e = Object(v.default)(this.tooltipSelector(), t.errors.username || t.errors.slug, [ "form-error", "form-error-right" ]), 
                    this.$wrapper.closest(".form-item").addClass("form-item-error");
                }), this;
            }
        });
    },
    330: function(e, t, n) {
        var i = n(2), s = {}, o = new i.Template({
            code: function(e, t, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<li class="team-autocomplete-item ui-menu-item'), 
                i.s(i.f("is_private", e, t, 1), e, t, 0, 61, 79, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b(" ui-state-disabled");
                }), e.pop()), i.b('">'), i.b("\n" + n), i.b('  <a class="team-autocomplete-wrap cfix">'), 
                i.b("\n" + n), i.b('    <span class="team-autocomplete-image"><img src="'), i.b(i.v(i.d("images.50", e, t, 0))), 
                i.b('" /></span>'), i.b("\n" + n), i.b('    <span class="team-autocomplete-info">'), 
                i.b("\n" + n), i.b('      <span class="team-name">'), i.b(i.v(i.f("name", e, t, 0))), 
                i.s(i.f("is_private", e, t, 1), e, t, 0, 311, 321, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b(" (Private)");
                }), e.pop()), i.b("</span>"), i.b("\n" + n), i.b('      <span class="team-location">'), 
                i.b(i.v(i.f("location", e, t, 0))), i.b("</span>"), i.b("\n" + n), i.b("    </span>"), 
                i.b("\n" + n), i.b("  </a>"), i.b("\n" + n), i.b("</li>"), i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<li class="team-autocomplete-item ui-menu-item{{#is_private}} ui-state-disabled{{/is_private}}">\n  <a class="team-autocomplete-wrap cfix">\n    <span class="team-autocomplete-image"><img src="{{images.50}}" /></span>\n    <span class="team-autocomplete-info">\n      <span class="team-name">{{name}}{{#is_private}} (Private){{/is_private}}</span>\n      <span class="team-location">{{location}}</span>\n    </span>\n  </a>\n</li>\n', i);
        o.ri = function(e, t, n) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (o = s, r = t, Object.keys(r).reduce(function(e, t) {
                return e[t] = r[t], e;
            }, o)), n);
            var o, r;
        }, e.exports = o.render.bind(o), e.exports.template = o;
    },
    332: function(e, t, n) {
        var i, s;
        i = [ n(19), n(6), n(415) ], void 0 === (s = function(e, t, n) {
            "use strict";
            return t.extend({
                image: null,
                init: function(e) {
                    var t = this;
                    this.image = e || new window.Image(), this.image.onload = function() {
                        t.trigger("load", this);
                    }, this.image.onerror = function() {
                        t.trigger("error", arguments);
                    };
                },
                isComplete: function() {
                    return this.image.complete && this.image.src;
                },
                displayWidth: function() {
                    return this.image.width;
                },
                displayHeight: function() {
                    return this.image.height;
                },
                width: function() {
                    return this.image.naturalWidth;
                },
                height: function() {
                    return this.image.naturalHeight;
                },
                src: function(e) {
                    this.image.src = e;
                },
                isAnimatedGif: function() {
                    return n.isAnimatedGif(this._getBinaryData());
                },
                isCMYK: function() {
                    return n.isCMYK(this._getBinaryData());
                },
                _getBinaryData: function() {
                    if (0 !== this.image.src.indexOf("data:")) throw new Error("src attribute is not a data-uri");
                    var e = this.image.src.split(",")[1];
                    return window.atob(e);
                }
            }, {
                getDimensions: function(t) {
                    var n = this;
                    return new e(function(e, i) {
                        var s = new n();
                        s.on("load", function() {
                            e({
                                displayWidth: s.displayWidth(),
                                displayHeight: s.displayHeight(),
                                width: s.width(),
                                height: s.height()
                            });
                        }).on("error", function() {
                            i(arguments);
                        }).src(t);
                    });
                },
                whenComplete: function(t) {
                    var n = this;
                    return new e(function(e) {
                        var i = new n(t);
                        i.isComplete() ? e() : i.on("load error", e);
                    });
                },
                load: function(t) {
                    var n = this;
                    return new e(function(e, i) {
                        var s = new n();
                        s.on("load", function() {
                            return e(s);
                        }).on("error", i).src(t);
                    });
                }
            });
        }.apply(t, i)) || (e.exports = s);
    },
    335: function(e, t, n) {
        "use strict";
        var i, s = n(5), o = n(0), r = n.n(o), a = n(4), l = n(330), u = n.n(l), c = n(374), d = n.n(c), h = (n(133), 
        []);
        (i = function(e, t) {
            return t = t || function(e) {
                return e.value = e.name, e;
            }, e.each(function(e, n) {
                r()(n).autoselect({
                    appendTo: ".js-autoselect-prepend-container:eq(" + e + ")",
                    position: {
                        my: "left top-3",
                        at: "left bottom",
                        collision: "none"
                    },
                    itemTemplate: u.a,
                    hasMatch: function(e) {
                        return e.concat(i.removed).some(function(e) {
                            return this.term.toLowerCase().trim() === e.value.toLowerCase().trim();
                        }, this);
                    },
                    noMatchTemplate: function(e) {
                        return e.url = s.default.PAGE_URLS.TEAM_SIGNUP + "?name=" + encodeURIComponent(e.term), 
                        r()(d()(e));
                    },
                    source: function(e, n) {
                        var o = e.term;
                        return i.removed = [], Object(a.default)({
                            url: s.default.PAGE_URLS.TEAMS_SEARCH,
                            data: {
                                q: o
                            }
                        }).then(function(e) {
                            n(e.teams.map(t).filter(function(e) {
                                return !~h.indexOf(e.id) || (i.removed.push(e), !1);
                            }));
                        }, n);
                    },
                    prepend: !0
                });
            }), e;
        }).removed = [], i.addToBlacklist = function(e) {
            h.push(e);
        }, i.setBlacklist = function(e) {
            h = e;
        }, i.removeFromBlacklist = function(e) {
            h = h.filter(function(t) {
                return e !== t;
            });
        }, t.a = i;
    },
    336: function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_RESULT__;
        __WEBPACK_AMD_DEFINE_RESULT__ = function() {
            var qq = function(e) {
                "use strict";
                return {
                    hide: function() {
                        return e.style.display = "none", this;
                    },
                    attach: function(t, n) {
                        return e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n), 
                        function() {
                            qq(e).detach(t, n);
                        };
                    },
                    detach: function(t, n) {
                        return e.removeEventListener ? e.removeEventListener(t, n, !1) : e.attachEvent && e.detachEvent("on" + t, n), 
                        this;
                    },
                    contains: function(t) {
                        return !!t && (e === t || (e.contains ? e.contains(t) : !!(8 & t.compareDocumentPosition(e))));
                    },
                    insertBefore: function(t) {
                        return t.parentNode.insertBefore(e, t), this;
                    },
                    remove: function() {
                        return e.parentNode.removeChild(e), this;
                    },
                    css: function(t) {
                        if (null == e.style) throw new qq.Error("Can't apply style to node as it is not on the HTMLElement prototype chain!");
                        return null != t.opacity && "string" != typeof e.style.opacity && void 0 !== e.filters && (t.filter = "alpha(opacity=" + Math.round(100 * t.opacity) + ")"), 
                        qq.extend(e.style, t), this;
                    },
                    hasClass: function(t) {
                        return new RegExp("(^| )" + t + "( |$)").test(e.className);
                    },
                    addClass: function(t) {
                        return qq(e).hasClass(t) || (e.className += " " + t), this;
                    },
                    removeClass: function(t) {
                        var n = new RegExp("(^| )" + t + "( |$)");
                        return e.className = e.className.replace(n, " ").replace(/^\s+|\s+$/g, ""), this;
                    },
                    getByClass: function(t) {
                        var n, i = [];
                        return e.querySelectorAll ? e.querySelectorAll("." + t) : (n = e.getElementsByTagName("*"), 
                        qq.each(n, function(e, n) {
                            qq(n).hasClass(t) && i.push(n);
                        }), i);
                    },
                    children: function() {
                        for (var t = [], n = e.firstChild; n; ) 1 === n.nodeType && t.push(n), n = n.nextSibling;
                        return t;
                    },
                    setText: function(t) {
                        return e.innerText = t, e.textContent = t, this;
                    },
                    clearText: function() {
                        return qq(e).setText("");
                    },
                    hasAttribute: function(t) {
                        var n;
                        return e.hasAttribute ? !!e.hasAttribute(t) && null == /^false$/i.exec(e.getAttribute(t)) : void 0 !== (n = e[t]) && null == /^false$/i.exec(n);
                    }
                };
            };
            !function() {
                "use strict";
                var div;
                qq.canvasToBlob = function(e, t, n) {
                    return qq.dataUriToBlob(e.toDataURL(t, n));
                }, qq.dataUriToBlob = function(e) {
                    var t, n, i, s, o, r, a, l;
                    return n = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : decodeURI(e.split(",")[1]), 
                    s = e.split(",")[0].split(":")[1].split(";")[0], t = new ArrayBuffer(n.length), 
                    i = new Uint8Array(t), qq.each(n, function(e, t) {
                        i[e] = t.charCodeAt(0);
                    }), o = t, r = s, a = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder, 
                    (l = a && new a()) ? (l.append(o), l.getBlob(r)) : new Blob([ o ], {
                        type: r
                    });
                }, qq.log = function(e, t) {
                    window.console && (t && "info" !== t ? window.console[t] ? window.console[t](e) : window.console.log("<" + t + "> " + e) : window.console.log(e));
                }, qq.isObject = function(e) {
                    return e && !e.nodeType && "[object Object]" === Object.prototype.toString.call(e);
                }, qq.isFunction = function(e) {
                    return "function" == typeof e;
                }, qq.isArray = function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e) || e && window.ArrayBuffer && e.buffer && e.buffer.constructor === ArrayBuffer;
                }, qq.isItemList = function(e) {
                    return "[object DataTransferItemList]" === Object.prototype.toString.call(e);
                }, qq.isNodeList = function(e) {
                    return "[object NodeList]" === Object.prototype.toString.call(e) || e.item && e.namedItem;
                }, qq.isString = function(e) {
                    return "[object String]" === Object.prototype.toString.call(e);
                }, qq.trimStr = function(e) {
                    return String.prototype.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
                }, qq.format = function(e) {
                    var t = Array.prototype.slice.call(arguments, 1), n = e, i = n.indexOf("{}");
                    return qq.each(t, function(e, t) {
                        var s = n.substring(0, i), o = n.substring(i + 2);
                        if ((i = (n = s + t + o).indexOf("{}", i + t.length)) < 0) return !1;
                    }), n;
                }, qq.isFile = function(e) {
                    return window.File && "[object File]" === Object.prototype.toString.call(e);
                }, qq.isFileList = function(e) {
                    return window.FileList && "[object FileList]" === Object.prototype.toString.call(e);
                }, qq.isFileOrInput = function(e) {
                    return qq.isFile(e) || qq.isInput(e);
                }, qq.isInput = function(e, t) {
                    var n = function(e) {
                        var n = e.toLowerCase();
                        return t ? "file" !== n : "file" === n;
                    };
                    return !!(window.HTMLInputElement && "[object HTMLInputElement]" === Object.prototype.toString.call(e) && e.type && n(e.type)) || !!(e.tagName && "input" === e.tagName.toLowerCase() && e.type && n(e.type));
                }, qq.isBlob = function(e) {
                    if (window.Blob && "[object Blob]" === Object.prototype.toString.call(e)) return !0;
                }, qq.isXhrUploadSupported = function() {
                    var e = document.createElement("input");
                    return e.type = "file", void 0 !== e.multiple && "undefined" != typeof File && "undefined" != typeof FormData && void 0 !== qq.createXhrInstance().upload;
                }, qq.createXhrInstance = function() {
                    if (window.XMLHttpRequest) return new XMLHttpRequest();
                    try {
                        return new ActiveXObject("MSXML2.XMLHTTP.3.0");
                    } catch (e) {
                        return qq.log("Neither XHR or ActiveX are supported!", "error"), null;
                    }
                }, qq.isFolderDropSupported = function(e) {
                    return e.items && e.items.length > 0 && e.items[0].webkitGetAsEntry;
                }, qq.isFileChunkingSupported = function() {
                    return !qq.androidStock() && qq.isXhrUploadSupported() && (void 0 !== File.prototype.slice || void 0 !== File.prototype.webkitSlice || void 0 !== File.prototype.mozSlice);
                }, qq.sliceBlob = function(e, t, n) {
                    return (e.slice || e.mozSlice || e.webkitSlice).call(e, t, n);
                }, qq.arrayBufferToHex = function(e) {
                    var t = "", n = new Uint8Array(e);
                    return qq.each(n, function(e, n) {
                        var i = n.toString(16);
                        i.length < 2 && (i = "0" + i), t += i;
                    }), t;
                }, qq.readBlobToHex = function(e, t, n) {
                    var i = qq.sliceBlob(e, t, t + n), s = new FileReader(), o = new qq.Promise();
                    return s.onload = function() {
                        o.success(qq.arrayBufferToHex(s.result));
                    }, s.onerror = o.failure, s.readAsArrayBuffer(i), o;
                }, qq.extend = function(e, t, n) {
                    return qq.each(t, function(t, i) {
                        n && qq.isObject(i) ? (void 0 === e[t] && (e[t] = {}), qq.extend(e[t], i, !0)) : e[t] = i;
                    }), e;
                }, qq.override = function(e, t) {
                    var n = {}, i = t(n);
                    return qq.each(i, function(t, i) {
                        void 0 !== e[t] && (n[t] = e[t]), e[t] = i;
                    }), e;
                }, qq.indexOf = function(e, t, n) {
                    if (e.indexOf) return e.indexOf(t, n);
                    n = n || 0;
                    var i = e.length;
                    for (n < 0 && (n += i); n < i; n += 1) if (e.hasOwnProperty(n) && e[n] === t) return n;
                    return -1;
                }, qq.getUniqueId = function() {
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                        var t = 16 * Math.random() | 0;
                        return ("x" == e ? t : 3 & t | 8).toString(16);
                    });
                }, qq.ie = function() {
                    return -1 !== navigator.userAgent.indexOf("MSIE") || -1 !== navigator.userAgent.indexOf("Trident");
                }, qq.ie7 = function() {
                    return -1 !== navigator.userAgent.indexOf("MSIE 7");
                }, qq.ie8 = function() {
                    return -1 !== navigator.userAgent.indexOf("MSIE 8");
                }, qq.ie10 = function() {
                    return -1 !== navigator.userAgent.indexOf("MSIE 10");
                }, qq.ie11 = function() {
                    return qq.ie() && -1 !== navigator.userAgent.indexOf("rv:11");
                }, qq.safari = function() {
                    return void 0 !== navigator.vendor && -1 !== navigator.vendor.indexOf("Apple");
                }, qq.chrome = function() {
                    return void 0 !== navigator.vendor && -1 !== navigator.vendor.indexOf("Google");
                }, qq.opera = function() {
                    return void 0 !== navigator.vendor && -1 !== navigator.vendor.indexOf("Opera");
                }, qq.firefox = function() {
                    return !qq.ie11() && -1 !== navigator.userAgent.indexOf("Mozilla") && void 0 !== navigator.vendor && "" === navigator.vendor;
                }, qq.windows = function() {
                    return "Win32" === navigator.platform;
                }, qq.android = function() {
                    return -1 !== navigator.userAgent.toLowerCase().indexOf("android");
                }, qq.androidStock = function() {
                    return qq.android() && navigator.userAgent.toLowerCase().indexOf("chrome") < 0;
                }, qq.ios6 = function() {
                    return qq.ios() && -1 !== navigator.userAgent.indexOf(" OS 6_");
                }, qq.ios7 = function() {
                    return qq.ios() && -1 !== navigator.userAgent.indexOf(" OS 7_");
                }, qq.ios8 = function() {
                    return qq.ios() && -1 !== navigator.userAgent.indexOf(" OS 8_");
                }, qq.ios800 = function() {
                    return qq.ios() && -1 !== navigator.userAgent.indexOf(" OS 8_0 ");
                }, qq.ios = function() {
                    return -1 !== navigator.userAgent.indexOf("iPad") || -1 !== navigator.userAgent.indexOf("iPod") || -1 !== navigator.userAgent.indexOf("iPhone");
                }, qq.iosChrome = function() {
                    return qq.ios() && -1 !== navigator.userAgent.indexOf("CriOS");
                }, qq.iosSafari = function() {
                    return qq.ios() && !qq.iosChrome() && -1 !== navigator.userAgent.indexOf("Safari");
                }, qq.iosSafariWebView = function() {
                    return qq.ios() && !qq.iosChrome() && !qq.iosSafari();
                }, qq.preventDefault = function(e) {
                    e.preventDefault ? e.preventDefault() : e.returnValue = !1;
                }, qq.toElement = (div = document.createElement("div"), function(e) {
                    div.innerHTML = e;
                    var t = div.firstChild;
                    return div.removeChild(t), t;
                }), qq.each = function(e, t) {
                    var n;
                    if (e) if (window.Storage && e.constructor === window.Storage) for (n = 0; n < e.length && !1 !== t(e.key(n), e.getItem(e.key(n))); n++) ; else if (qq.isArray(e) || qq.isItemList(e) || qq.isNodeList(e)) for (n = 0; n < e.length && !1 !== t(n, e[n]); n++) ; else if (qq.isString(e)) for (n = 0; n < e.length && !1 !== t(n, e.charAt(n)); n++) ; else for (n in e) if (Object.prototype.hasOwnProperty.call(e, n) && !1 === t(n, e[n])) break;
                }, qq.bind = function(e, t) {
                    if (qq.isFunction(e)) {
                        var n = Array.prototype.slice.call(arguments, 2);
                        return function() {
                            var i = qq.extend([], n);
                            return arguments.length && (i = i.concat(Array.prototype.slice.call(arguments))), 
                            e.apply(t, i);
                        };
                    }
                    throw new Error("first parameter must be a function!");
                }, qq.obj2url = function(e, t, n) {
                    var i = [], s = "&", o = function(e, n) {
                        var s = t ? /\[\]$/.test(t) ? t : t + "[" + n + "]" : n;
                        "undefined" !== s && "undefined" !== n && i.push("object" == typeof e ? qq.obj2url(e, s, !0) : "[object Function]" === Object.prototype.toString.call(e) ? encodeURIComponent(s) + "=" + encodeURIComponent(e()) : encodeURIComponent(s) + "=" + encodeURIComponent(e));
                    };
                    return !n && t ? (s = /\?/.test(t) ? /\?$/.test(t) ? "" : "&" : "?", i.push(t), 
                    i.push(qq.obj2url(e))) : "[object Array]" === Object.prototype.toString.call(e) && void 0 !== e ? qq.each(e, function(e, t) {
                        o(t, e);
                    }) : void 0 !== e && null !== e && "object" == typeof e ? qq.each(e, function(e, t) {
                        o(t, e);
                    }) : i.push(encodeURIComponent(t) + "=" + encodeURIComponent(e)), t ? i.join(s) : i.join(s).replace(/^&/, "").replace(/%20/g, "+");
                }, qq.obj2FormData = function(e, t, n) {
                    return t || (t = new FormData()), qq.each(e, function(e, i) {
                        e = n ? n + "[" + e + "]" : e, qq.isObject(i) ? qq.obj2FormData(i, t, e) : qq.isFunction(i) ? t.append(e, i()) : t.append(e, i);
                    }), t;
                }, qq.obj2Inputs = function(e, t) {
                    var n;
                    return t || (t = document.createElement("form")), qq.obj2FormData(e, {
                        append: function(e, i) {
                            (n = document.createElement("input")).setAttribute("name", e), n.setAttribute("value", i), 
                            t.appendChild(n);
                        }
                    }), t;
                }, qq.parseJson = function(json) {
                    return window.JSON && qq.isFunction(JSON.parse) ? JSON.parse(json) : eval("(" + json + ")");
                }, qq.getExtension = function(e) {
                    var t = e.lastIndexOf(".") + 1;
                    if (t > 0) return e.substr(t, e.length - t);
                }, qq.getFilename = function(e) {
                    return qq.isInput(e) ? e.value.replace(/.*(\/|\\)/, "") : qq.isFile(e) && null !== e.fileName && void 0 !== e.fileName ? e.fileName : e.name;
                }, qq.DisposeSupport = function() {
                    var e = [];
                    return {
                        dispose: function() {
                            var t;
                            do {
                                (t = e.shift()) && t();
                            } while (t);
                        },
                        attach: function() {
                            var e = arguments;
                            this.addDisposer(qq(e[0]).attach.apply(this, Array.prototype.slice.call(arguments, 1)));
                        },
                        addDisposer: function(t) {
                            e.push(t);
                        }
                    };
                };
            }(), function() {
                "use strict";
                qq.Error = function(e) {
                    this.message = "[Fine Uploader " + qq.version + "] " + e;
                }, qq.Error.prototype = new Error();
            }(), qq.version = "5.1.3", qq.supportedFeatures = function() {
                "use strict";
                var e, t, n, i, s, o, r, a, l, u, c, d, h, p;
                function f() {
                    return !!window.XMLHttpRequest && void 0 !== qq.createXhrInstance().withCredentials;
                }
                function m() {
                    return void 0 !== window.XDomainRequest;
                }
                return e = function() {
                    var e, t = !0;
                    try {
                        (e = document.createElement("input")).type = "file", qq(e).hide(), e.disabled && (t = !1);
                    } catch (e) {
                        t = !1;
                    }
                    return t;
                }(), t = (n = e && qq.isXhrUploadSupported()) && !qq.androidStock(), i = n && (qq.chrome() || qq.opera()) && void 0 !== navigator.userAgent.match(/Chrome\/[2][1-9]|Chrome\/[3-9][0-9]/), 
                s = n && qq.isFileChunkingSupported(), o = n && s && function() {
                    try {
                        return !!window.localStorage;
                    } catch (e) {
                        return !1;
                    }
                }(), r = n && (qq.chrome() || qq.opera()) && void 0 !== navigator.userAgent.match(/Chrome\/[1][4-9]|Chrome\/[2-9][0-9]/), 
                a = e && (void 0 !== window.postMessage || n), u = f(), l = m(), c = !!f() || m(), 
                d = void 0 !== document.createElement("input").webkitdirectory, h = n && void 0 !== window.FileReader, 
                p = !!n && !qq.androidStock() && !qq.iosChrome(), {
                    ajaxUploading: n,
                    blobUploading: t,
                    canDetermineSize: n,
                    chunking: s,
                    deleteFileCors: c,
                    deleteFileCorsXdr: l,
                    deleteFileCorsXhr: u,
                    fileDrop: n,
                    folderDrop: i,
                    folderSelection: d,
                    imagePreviews: h,
                    imageValidation: h,
                    itemSizeValidation: n,
                    pause: s,
                    progressBar: p,
                    resume: o,
                    scaling: h && t,
                    tiffPreviews: qq.safari(),
                    unlimitedScaledImageSize: !qq.ios(),
                    uploading: e,
                    uploadCors: a,
                    uploadCustomHeaders: n,
                    uploadNonMultipart: n,
                    uploadViaPaste: r
                };
            }(), qq.isGenericPromise = function(e) {
                "use strict";
                return !!(e && e.then && qq.isFunction(e.then));
            }, qq.Promise = function() {
                "use strict";
                var e, t, n = [], i = [], s = [], o = 0;
                qq.extend(this, {
                    then: function(s, r) {
                        return 0 === o ? (s && n.push(s), r && i.push(r)) : -1 === o ? r && r.apply(null, t) : s && s.apply(null, e), 
                        this;
                    },
                    done: function(n) {
                        return 0 === o ? s.push(n) : n.apply(null, void 0 === t ? e : t), this;
                    },
                    success: function() {
                        return o = 1, e = arguments, n.length && qq.each(n, function(t, n) {
                            n.apply(null, e);
                        }), s.length && qq.each(s, function(t, n) {
                            n.apply(null, e);
                        }), this;
                    },
                    failure: function() {
                        return o = -1, t = arguments, i.length && qq.each(i, function(e, n) {
                            n.apply(null, t);
                        }), s.length && qq.each(s, function(e, n) {
                            n.apply(null, t);
                        }), this;
                    }
                });
            }, qq.BlobProxy = function(e, t) {
                "use strict";
                qq.extend(this, {
                    referenceBlob: e,
                    create: function() {
                        return t(e);
                    }
                });
            }, qq.UploadButton = function(e) {
                "use strict";
                var t, n, i = this, s = new qq.DisposeSupport(), o = {
                    element: null,
                    multiple: !1,
                    acceptFiles: null,
                    folders: !1,
                    name: "qqfile",
                    onChange: function(e) {},
                    ios8BrowserCrashWorkaround: !0,
                    hoverClass: "qq-upload-button-hover",
                    focusClass: "qq-upload-button-focus"
                };
                function r() {
                    var e = document.createElement("input");
                    return e.setAttribute(qq.UploadButton.BUTTON_ID_ATTR_NAME, n), i.setMultiple(o.multiple, e), 
                    o.folders && qq.supportedFeatures.folderSelection && e.setAttribute("webkitdirectory", ""), 
                    o.acceptFiles && e.setAttribute("accept", o.acceptFiles), e.setAttribute("type", "file"), 
                    e.setAttribute("name", o.name), qq(e).css({
                        position: "absolute",
                        right: 0,
                        top: 0,
                        fontFamily: "Arial",
                        fontSize: qq.ie() && !qq.ie8() ? "3500px" : "118px",
                        margin: 0,
                        padding: 0,
                        cursor: "pointer",
                        opacity: 0
                    }), !qq.ie7() && qq(e).css({
                        height: "100%"
                    }), o.element.appendChild(e), s.attach(e, "change", function() {
                        o.onChange(e);
                    }), s.attach(e, "mouseover", function() {
                        qq(o.element).addClass(o.hoverClass);
                    }), s.attach(e, "mouseout", function() {
                        qq(o.element).removeClass(o.hoverClass);
                    }), s.attach(e, "focus", function() {
                        qq(o.element).addClass(o.focusClass);
                    }), s.attach(e, "blur", function() {
                        qq(o.element).removeClass(o.focusClass);
                    }), window.attachEvent && e.setAttribute("tabIndex", "-1"), e;
                }
                qq.extend(o, e), n = qq.getUniqueId(), qq(o.element).css({
                    position: "relative",
                    overflow: "hidden",
                    direction: "ltr"
                }), qq.extend(this, {
                    getInput: function() {
                        return t;
                    },
                    getButtonId: function() {
                        return n;
                    },
                    setMultiple: function(e, t) {
                        var n = t || this.getInput();
                        o.ios8BrowserCrashWorkaround && qq.ios8() && (qq.iosChrome() || qq.iosSafariWebView()) ? n.setAttribute("multiple", "") : e ? n.setAttribute("multiple", "") : n.removeAttribute("multiple");
                    },
                    setAcceptFiles: function(e) {
                        e !== o.acceptFiles && t.setAttribute("accept", e);
                    },
                    reset: function() {
                        t.parentNode && qq(t).remove(), qq(o.element).removeClass(o.focusClass), t = null, 
                        t = r();
                    }
                }), t = r();
            }, qq.UploadButton.BUTTON_ID_ATTR_NAME = "qq-button-id", qq.UploadData = function(e) {
                "use strict";
                var t = [], n = {}, i = {}, s = {}, o = {};
                qq.extend(this, {
                    addFile: function(r) {
                        var a = r.status || qq.status.SUBMITTING, l = t.push({
                            name: r.name,
                            originalName: r.name,
                            uuid: r.uuid,
                            size: r.size || -1,
                            status: a
                        }) - 1;
                        return r.batchId && (t[l].batchId = r.batchId, void 0 === o[r.batchId] && (o[r.batchId] = []), 
                        o[r.batchId].push(l)), r.proxyGroupId && (t[l].proxyGroupId = r.proxyGroupId, void 0 === s[r.proxyGroupId] && (s[r.proxyGroupId] = []), 
                        s[r.proxyGroupId].push(l)), t[l].id = l, n[r.uuid] = l, void 0 === i[a] && (i[a] = []), 
                        i[a].push(l), e.onStatusChange(l, null, a), l;
                    },
                    retrieve: function(e) {
                        return qq.isObject(e) && t.length ? void 0 !== e.id ? function(e) {
                            if (qq.isArray(e)) {
                                var n = [];
                                return qq.each(e, function(e, i) {
                                    n.push(t[i]);
                                }), n;
                            }
                            return t[e];
                        }(e.id) : void 0 !== e.uuid ? function(e) {
                            if (qq.isArray(e)) {
                                var i = [];
                                return qq.each(e, function(e, s) {
                                    i.push(t[n[s]]);
                                }), i;
                            }
                            return t[n[e]];
                        }(e.uuid) : e.status ? (s = e.status, o = [], r = [].concat(s), qq.each(r, function(e, n) {
                            var s = i[n];
                            void 0 !== s && qq.each(s, function(e, n) {
                                o.push(t[n]);
                            });
                        }), o) : void 0 : qq.extend([], t, !0);
                        var s, o, r;
                    },
                    reset: function() {
                        t = [], n = {}, i = {}, o = {};
                    },
                    setStatus: function(n, s) {
                        var o = t[n].status, r = qq.indexOf(i[o], n);
                        i[o].splice(r, 1), t[n].status = s, void 0 === i[s] && (i[s] = []), i[s].push(n), 
                        e.onStatusChange(n, o, s);
                    },
                    uuidChanged: function(e, i) {
                        var s = t[e].uuid;
                        t[e].uuid = i, n[i] = e, delete n[s];
                    },
                    updateName: function(e, n) {
                        t[e].name = n;
                    },
                    updateSize: function(e, n) {
                        t[e].size = n;
                    },
                    setParentId: function(e, n) {
                        t[e].parentId = n;
                    },
                    getIdsInProxyGroup: function(e) {
                        var n = t[e].proxyGroupId;
                        return n ? s[n] : [];
                    },
                    getIdsInBatch: function(e) {
                        var n = t[e].batchId;
                        return o[n];
                    }
                });
            }, qq.status = {
                SUBMITTING: "submitting",
                SUBMITTED: "submitted",
                REJECTED: "rejected",
                QUEUED: "queued",
                CANCELED: "canceled",
                PAUSED: "paused",
                UPLOADING: "uploading",
                UPLOAD_RETRYING: "retrying upload",
                UPLOAD_SUCCESSFUL: "upload successful",
                UPLOAD_FAILED: "upload failed",
                DELETE_FAILED: "delete failed",
                DELETING: "deleting",
                DELETED: "deleted"
            }, function() {
                "use strict";
                qq.basePublicApi = {
                    addBlobs: function(e, t, n) {
                        this.addFiles(e, t, n);
                    },
                    addFiles: function(e, t, n) {
                        this._maybeHandleIos8SafariWorkaround();
                        var i = 0 === this._storedIds.length ? qq.getUniqueId() : this._currentBatchId, s = qq.bind(function(e) {
                            this._handleNewFile({
                                blob: e,
                                name: this._options.blobs.defaultName
                            }, i, c);
                        }, this), o = qq.bind(function(e) {
                            this._handleNewFile(e, i, c);
                        }, this), r = qq.bind(function(e) {
                            var t = qq.canvasToBlob(e);
                            this._handleNewFile({
                                blob: t,
                                name: this._options.blobs.defaultName + ".png"
                            }, i, c);
                        }, this), a = qq.bind(function(e) {
                            var t = e.quality && e.quality / 100, n = qq.canvasToBlob(e.canvas, e.type, t);
                            this._handleNewFile({
                                blob: n,
                                name: e.name
                            }, i, c);
                        }, this), l = qq.bind(function(e) {
                            if (qq.isInput(e) && qq.supportedFeatures.ajaxUploading) {
                                var t = Array.prototype.slice.call(e.files);
                                qq.each(t, function(e, t) {
                                    this._handleNewFile(t, i, c);
                                });
                            } else this._handleNewFile(e, i, c);
                        }, this), u = this, c = [];
                        this._currentBatchId = i, e && (qq.isFileList(e) && (e = Array.prototype.slice.call(e)), 
                        e = [].concat(e), qq.each(e, function(e, t) {
                            qq.isFileOrInput(t) ? l(t) : qq.isBlob(t) ? s(t) : qq.isObject(t) ? t.blob && t.name ? o(t) : t.canvas && t.name && a(t) : t.tagName && "canvas" === t.tagName.toLowerCase() ? r(t) : u.log(t + " is not a valid file container!  Ignoring!", "warn");
                        }), this.log("Received " + c.length + " files."), this._prepareItemsForUpload(c, t, n));
                    },
                    cancel: function(e) {
                        this._handler.cancel(e);
                    },
                    cancelAll: function() {
                        var e = [], t = this;
                        qq.extend(e, this._storedIds), qq.each(e, function(e, n) {
                            t.cancel(n);
                        }), this._handler.cancelAll();
                    },
                    clearStoredFiles: function() {
                        this._storedIds = [];
                    },
                    continueUpload: function(e) {
                        var t = this._uploadData.retrieve({
                            id: e
                        });
                        return !(!qq.supportedFeatures.pause || !this._options.chunking.enabled) && (t.status === qq.status.PAUSED ? (this.log(qq.format("Paused file ID {} ({}) will be continued.  Not paused.", e, this.getName(e))), 
                        this._uploadFile(e), !0) : (this.log(qq.format("Ignoring continue for file ID {} ({}).  Not paused.", e, this.getName(e)), "error"), 
                        !1));
                    },
                    deleteFile: function(e) {
                        return this._onSubmitDelete(e);
                    },
                    doesExist: function(e) {
                        return this._handler.isValid(e);
                    },
                    drawThumbnail: function(e, t, n, i) {
                        var s, o, r = new qq.Promise();
                        return this._imageGenerator ? (s = this._thumbnailUrls[e], o = {
                            scale: n > 0,
                            maxSize: n > 0 ? n : null
                        }, !i && qq.supportedFeatures.imagePreviews && (s = this.getFile(e)), null == s ? r.failure({
                            container: t,
                            error: "File or URL not found."
                        }) : this._imageGenerator.generate(s, t, o).then(function(e) {
                            r.success(e);
                        }, function(e, t) {
                            r.failure({
                                container: e,
                                error: t || "Problem generating thumbnail"
                            });
                        })) : r.failure({
                            container: t,
                            error: "Missing image generator module"
                        }), r;
                    },
                    getButton: function(e) {
                        return this._getButton(this._buttonIdsForFileIds[e]);
                    },
                    getEndpoint: function(e) {
                        return this._endpointStore.get(e);
                    },
                    getFile: function(e) {
                        return this._handler.getFile(e) || null;
                    },
                    getInProgress: function() {
                        return this._uploadData.retrieve({
                            status: [ qq.status.UPLOADING, qq.status.UPLOAD_RETRYING, qq.status.QUEUED ]
                        }).length;
                    },
                    getName: function(e) {
                        return this._uploadData.retrieve({
                            id: e
                        }).name;
                    },
                    getParentId: function(e) {
                        var t = this.getUploads({
                            id: e
                        }), n = null;
                        return t && void 0 !== t.parentId && (n = t.parentId), n;
                    },
                    getResumableFilesData: function() {
                        return this._handler.getResumableFilesData();
                    },
                    getSize: function(e) {
                        return this._uploadData.retrieve({
                            id: e
                        }).size;
                    },
                    getNetUploads: function() {
                        return this._netUploaded;
                    },
                    getRemainingAllowedItems: function() {
                        var e = this._currentItemLimit;
                        return e > 0 ? e - this._netUploadedOrQueued : null;
                    },
                    getUploads: function(e) {
                        return this._uploadData.retrieve(e);
                    },
                    getUuid: function(e) {
                        return this._uploadData.retrieve({
                            id: e
                        }).uuid;
                    },
                    log: function(e, t) {
                        !this._options.debug || t && "info" !== t ? t && "info" !== t && qq.log("[Fine Uploader " + qq.version + "] " + e, t) : qq.log("[Fine Uploader " + qq.version + "] " + e);
                    },
                    pauseUpload: function(e) {
                        var t = this._uploadData.retrieve({
                            id: e
                        });
                        if (!qq.supportedFeatures.pause || !this._options.chunking.enabled) return !1;
                        if (qq.indexOf([ qq.status.UPLOADING, qq.status.UPLOAD_RETRYING ], t.status) >= 0) {
                            if (this._handler.pause(e)) return this._uploadData.setStatus(e, qq.status.PAUSED), 
                            !0;
                            this.log(qq.format("Unable to pause file ID {} ({}).", e, this.getName(e)), "error");
                        } else this.log(qq.format("Ignoring pause for file ID {} ({}).  Not in progress.", e, this.getName(e)), "error");
                        return !1;
                    },
                    reset: function() {
                        this.log("Resetting uploader..."), this._handler.reset(), this._storedIds = [], 
                        this._autoRetries = [], this._retryTimeouts = [], this._preventRetries = [], this._thumbnailUrls = [], 
                        qq.each(this._buttons, function(e, t) {
                            t.reset();
                        }), this._paramsStore.reset(), this._endpointStore.reset(), this._netUploadedOrQueued = 0, 
                        this._netUploaded = 0, this._uploadData.reset(), this._buttonIdsForFileIds = [], 
                        this._pasteHandler && this._pasteHandler.reset(), this._options.session.refreshOnReset && this._refreshSessionData(), 
                        this._succeededSinceLastAllComplete = [], this._failedSinceLastAllComplete = [], 
                        this._totalProgress && this._totalProgress.reset();
                    },
                    retry: function(e) {
                        return this._manualRetry(e);
                    },
                    scaleImage: function(e, t) {
                        return qq.Scaler.prototype.scaleImage(e, t, {
                            log: qq.bind(this.log, this),
                            getFile: qq.bind(this.getFile, this),
                            uploadData: this._uploadData
                        });
                    },
                    setCustomHeaders: function(e, t) {
                        this._customHeadersStore.set(e, t);
                    },
                    setDeleteFileCustomHeaders: function(e, t) {
                        this._deleteFileCustomHeadersStore.set(e, t);
                    },
                    setDeleteFileEndpoint: function(e, t) {
                        this._deleteFileEndpointStore.set(e, t);
                    },
                    setDeleteFileParams: function(e, t) {
                        this._deleteFileParamsStore.set(e, t);
                    },
                    setEndpoint: function(e, t) {
                        this._endpointStore.set(e, t);
                    },
                    setItemLimit: function(e) {
                        this._currentItemLimit = e;
                    },
                    setName: function(e, t) {
                        this._uploadData.updateName(e, t);
                    },
                    setParams: function(e, t) {
                        this._paramsStore.set(e, t);
                    },
                    setUuid: function(e, t) {
                        return this._uploadData.uuidChanged(e, t);
                    },
                    uploadStoredFiles: function() {
                        var e;
                        if (0 === this._storedIds.length) this._itemError("noFilesError"); else for (;this._storedIds.length; ) e = this._storedIds.shift(), 
                        this._uploadFile(e);
                    }
                }, qq.basePrivateApi = {
                    _addCannedFile: function(e) {
                        var t = this._uploadData.addFile({
                            uuid: e.uuid,
                            name: e.name,
                            size: e.size,
                            status: qq.status.UPLOAD_SUCCESSFUL
                        });
                        return e.deleteFileEndpoint && this.setDeleteFileEndpoint(e.deleteFileEndpoint, t), 
                        e.deleteFileParams && this.setDeleteFileParams(e.deleteFileParams, t), e.thumbnailUrl && (this._thumbnailUrls[t] = e.thumbnailUrl), 
                        this._netUploaded++, this._netUploadedOrQueued++, t;
                    },
                    _annotateWithButtonId: function(e, t) {
                        qq.isFile(e) && (e.qqButtonId = this._getButtonId(t));
                    },
                    _batchError: function(e) {
                        this._options.callbacks.onError(null, null, e, void 0);
                    },
                    _createDeleteHandler: function() {
                        var e = this;
                        return new qq.DeleteFileAjaxRequester({
                            method: this._options.deleteFile.method.toUpperCase(),
                            maxConnections: this._options.maxConnections,
                            uuidParamName: this._options.request.uuidName,
                            customHeaders: this._deleteFileCustomHeadersStore,
                            paramsStore: this._deleteFileParamsStore,
                            endpointStore: this._deleteFileEndpointStore,
                            demoMode: this._options.demoMode,
                            cors: this._options.cors,
                            log: qq.bind(e.log, e),
                            onDelete: function(t) {
                                e._onDelete(t), e._options.callbacks.onDelete(t);
                            },
                            onDeleteComplete: function(t, n, i) {
                                e._onDeleteComplete(t, n, i), e._options.callbacks.onDeleteComplete(t, n, i);
                            }
                        });
                    },
                    _createPasteHandler: function() {
                        var e = this;
                        return new qq.PasteSupport({
                            targetElement: this._options.paste.targetElement,
                            callbacks: {
                                log: qq.bind(e.log, e),
                                pasteReceived: function(t) {
                                    e._handleCheckedCallback({
                                        name: "onPasteReceived",
                                        callback: qq.bind(e._options.callbacks.onPasteReceived, e, t),
                                        onSuccess: qq.bind(e._handlePasteSuccess, e, t),
                                        identifier: "pasted image"
                                    });
                                }
                            }
                        });
                    },
                    _createStore: function(e, t) {
                        var n = {}, i = e, s = {}, o = function(e) {
                            return qq.isObject(e) ? qq.extend({}, e) : e;
                        }, r = function(e, n) {
                            t && qq.isObject(n) && qq.extend(n, qq.isFunction(t) ? t() : t), s[e] && qq.extend(n, s[e]);
                        };
                        return {
                            set: function(e, t) {
                                null == t ? (n = {}, i = o(e)) : n[t] = o(e);
                            },
                            get: function(e) {
                                var t;
                                return t = null != e && n[e] ? n[e] : o(i), r(e, t), o(t);
                            },
                            addReadOnly: function(e, t) {
                                qq.isObject(n) && (s[e] = s[e] || {}, qq.extend(s[e], t));
                            },
                            remove: function(e) {
                                return delete n[e];
                            },
                            reset: function() {
                                n = {}, s = {}, i = e;
                            }
                        };
                    },
                    _createUploadDataTracker: function() {
                        var e = this;
                        return new qq.UploadData({
                            getName: function(t) {
                                return e.getName(t);
                            },
                            getUuid: function(t) {
                                return e.getUuid(t);
                            },
                            getSize: function(t) {
                                return e.getSize(t);
                            },
                            onStatusChange: function(t, n, i) {
                                e._onUploadStatusChange(t, n, i), e._options.callbacks.onStatusChange(t, n, i), 
                                e._maybeAllComplete(t, i), e._totalProgress && setTimeout(function() {
                                    e._totalProgress.onStatusChange(t, n, i);
                                }, 0);
                            }
                        });
                    },
                    _createUploadButton: function(e) {
                        var t, n = this, i = e.accept || this._options.validation.acceptFiles, s = e.allowedExtensions || this._options.validation.allowedExtensions;
                        return t = new qq.UploadButton({
                            element: e.element,
                            folders: e.folders,
                            name: this._options.request.inputName,
                            multiple: !!qq.supportedFeatures.ajaxUploading && !(n._options.workarounds.iosEmptyVideos && qq.ios() && !qq.ios6() && n._isAllowedExtension(s, ".mov")) && (void 0 === e.multiple ? n._options.multiple : e.multiple),
                            acceptFiles: i,
                            onChange: function(e) {
                                n._onInputChange(e);
                            },
                            hoverClass: this._options.classes.buttonHover,
                            focusClass: this._options.classes.buttonFocus,
                            ios8BrowserCrashWorkaround: this._options.workarounds.ios8BrowserCrash
                        }), this._disposeSupport.addDisposer(function() {
                            t.dispose();
                        }), n._buttons.push(t), t;
                    },
                    _createUploadHandler: function(e, t) {
                        var n = this, i = {}, s = {
                            debug: this._options.debug,
                            maxConnections: this._options.maxConnections,
                            cors: this._options.cors,
                            demoMode: this._options.demoMode,
                            paramsStore: this._paramsStore,
                            endpointStore: this._endpointStore,
                            chunking: this._options.chunking,
                            resume: this._options.resume,
                            blobs: this._options.blobs,
                            log: qq.bind(n.log, n),
                            preventRetryParam: this._options.retry.preventRetryResponseProperty,
                            onProgress: function(e, t, s, o) {
                                s < 0 || o < 0 || (i[e] && i[e].loaded === s && i[e].total === o || (n._onProgress(e, t, s, o), 
                                n._options.callbacks.onProgress(e, t, s, o)), i[e] = {
                                    loaded: s,
                                    total: o
                                });
                            },
                            onComplete: function(e, t, s, o) {
                                delete i[e];
                                var r, a = n.getUploads({
                                    id: e
                                }).status;
                                a !== qq.status.UPLOAD_SUCCESSFUL && a !== qq.status.UPLOAD_FAILED && ((r = n._onComplete(e, t, s, o)) instanceof qq.Promise ? r.done(function() {
                                    n._options.callbacks.onComplete(e, t, s, o);
                                }) : n._options.callbacks.onComplete(e, t, s, o));
                            },
                            onCancel: function(e, t, i) {
                                var s = new qq.Promise();
                                return n._handleCheckedCallback({
                                    name: "onCancel",
                                    callback: qq.bind(n._options.callbacks.onCancel, n, e, t),
                                    onFailure: s.failure,
                                    onSuccess: function() {
                                        i.then(function() {
                                            n._onCancel(e, t);
                                        }), s.success();
                                    },
                                    identifier: e
                                }), s;
                            },
                            onUploadPrep: qq.bind(this._onUploadPrep, this),
                            onUpload: function(e, t) {
                                n._onUpload(e, t), n._options.callbacks.onUpload(e, t);
                            },
                            onUploadChunk: function(e, t, i) {
                                n._onUploadChunk(e, i), n._options.callbacks.onUploadChunk(e, t, i);
                            },
                            onUploadChunkSuccess: function(e, t, i, s) {
                                n._options.callbacks.onUploadChunkSuccess.apply(n, arguments);
                            },
                            onResume: function(e, t, i) {
                                return n._options.callbacks.onResume(e, t, i);
                            },
                            onAutoRetry: function(e, t, i, s) {
                                return n._onAutoRetry.apply(n, arguments);
                            },
                            onUuidChanged: function(e, t) {
                                n.log("Server requested UUID change from '" + n.getUuid(e) + "' to '" + t + "'"), 
                                n.setUuid(e, t);
                            },
                            getName: qq.bind(n.getName, n),
                            getUuid: qq.bind(n.getUuid, n),
                            getSize: qq.bind(n.getSize, n),
                            setSize: qq.bind(n._setSize, n),
                            getDataByUuid: function(e) {
                                return n.getUploads({
                                    uuid: e
                                });
                            },
                            isQueued: function(e) {
                                var t = n.getUploads({
                                    id: e
                                }).status;
                                return t === qq.status.QUEUED || t === qq.status.SUBMITTED || t === qq.status.UPLOAD_RETRYING || t === qq.status.PAUSED;
                            },
                            getIdsInProxyGroup: n._uploadData.getIdsInProxyGroup,
                            getIdsInBatch: n._uploadData.getIdsInBatch
                        };
                        return qq.each(this._options.request, function(e, t) {
                            s[e] = t;
                        }), s.customHeaders = this._customHeadersStore, e && qq.each(e, function(e, t) {
                            s[e] = t;
                        }), new qq.UploadHandlerController(s, t);
                    },
                    _fileOrBlobRejected: function(e) {
                        this._netUploadedOrQueued--, this._uploadData.setStatus(e, qq.status.REJECTED);
                    },
                    _formatSize: function(e) {
                        var t = -1;
                        do {
                            e /= 1e3, t++;
                        } while (e > 999);
                        return Math.max(e, .1).toFixed(1) + this._options.text.sizeSymbols[t];
                    },
                    _generateExtraButtonSpecs: function() {
                        var e = this;
                        this._extraButtonSpecs = {}, qq.each(this._options.extraButtons, function(t, n) {
                            var i = n.multiple, s = qq.extend({}, e._options.validation, !0), o = qq.extend({}, n);
                            void 0 === i && (i = e._options.multiple), o.validation && qq.extend(s, n.validation, !0), 
                            qq.extend(o, {
                                multiple: i,
                                validation: s
                            }, !0), e._initExtraButton(o);
                        });
                    },
                    _getButton: function(e) {
                        var t = this._extraButtonSpecs[e];
                        return t ? t.element : e === this._defaultButtonId ? this._options.button : void 0;
                    },
                    _getButtonId: function(e) {
                        var t, n, i = e;
                        if (i instanceof qq.BlobProxy && (i = i.referenceBlob), i && !qq.isBlob(i)) {
                            if (qq.isFile(i)) return i.qqButtonId;
                            if ("input" === i.tagName.toLowerCase() && "file" === i.type.toLowerCase()) return i.getAttribute(qq.UploadButton.BUTTON_ID_ATTR_NAME);
                            if (t = i.getElementsByTagName("input"), qq.each(t, function(e, t) {
                                if ("file" === t.getAttribute("type")) return n = t, !1;
                            }), n) return n.getAttribute(qq.UploadButton.BUTTON_ID_ATTR_NAME);
                        }
                    },
                    _getNotFinished: function() {
                        return this._uploadData.retrieve({
                            status: [ qq.status.UPLOADING, qq.status.UPLOAD_RETRYING, qq.status.QUEUED, qq.status.SUBMITTING, qq.status.SUBMITTED, qq.status.PAUSED ]
                        }).length;
                    },
                    _getValidationBase: function(e) {
                        var t = this._extraButtonSpecs[e];
                        return t ? t.validation : this._options.validation;
                    },
                    _getValidationDescriptor: function(e) {
                        return e.file instanceof qq.BlobProxy ? {
                            name: qq.getFilename(e.file.referenceBlob),
                            size: e.file.referenceBlob.size
                        } : {
                            name: this.getUploads({
                                id: e.id
                            }).name,
                            size: this.getUploads({
                                id: e.id
                            }).size
                        };
                    },
                    _getValidationDescriptors: function(e) {
                        var t = this, n = [];
                        return qq.each(e, function(e, i) {
                            n.push(t._getValidationDescriptor(i));
                        }), n;
                    },
                    _handleCameraAccess: function() {
                        if (this._options.camera.ios && qq.ios()) {
                            var e = this._options.camera.button, t = e ? this._getButtonId(e) : this._defaultButtonId, n = this._options;
                            t && t !== this._defaultButtonId && (n = this._extraButtonSpecs[t]), n.multiple = !1, 
                            null === n.validation.acceptFiles ? n.validation.acceptFiles = "image/*;capture=camera" : n.validation.acceptFiles += ",image/*;capture=camera", 
                            qq.each(this._buttons, function(e, i) {
                                if (i.getButtonId() === t) return i.setMultiple(n.multiple), i.setAcceptFiles(n.acceptFiles), 
                                !1;
                            });
                        }
                    },
                    _handleCheckedCallback: function(e) {
                        var t = this, n = e.callback();
                        return qq.isGenericPromise(n) ? (this.log(e.name + " - waiting for " + e.name + " promise to be fulfilled for " + e.identifier), 
                        n.then(function(n) {
                            t.log(e.name + " promise success for " + e.identifier), e.onSuccess(n);
                        }, function() {
                            e.onFailure ? (t.log(e.name + " promise failure for " + e.identifier), e.onFailure()) : t.log(e.name + " promise failure for " + e.identifier);
                        })) : (!1 !== n ? e.onSuccess(n) : e.onFailure ? (this.log(e.name + " - return value was 'false' for " + e.identifier + ".  Invoking failure callback."), 
                        e.onFailure()) : this.log(e.name + " - return value was 'false' for " + e.identifier + ".  Will not proceed."), 
                        n);
                    },
                    _handleNewFile: function(e, t, n) {
                        var i = this, s = qq.getUniqueId(), o = -1, r = qq.getFilename(e), a = e.blob || e, l = this._customNewFileHandler ? this._customNewFileHandler : qq.bind(i._handleNewFileGeneric, i);
                        !qq.isInput(a) && a.size >= 0 && (o = a.size), l(a, r, s, o, n, t, this._options.request.uuidName, {
                            uploadData: i._uploadData,
                            paramsStore: i._paramsStore,
                            addFileToHandler: function(e, t) {
                                i._handler.add(e, t), i._netUploadedOrQueued++, i._trackButton(e);
                            }
                        });
                    },
                    _handleNewFileGeneric: function(e, t, n, i, s, o) {
                        var r = this._uploadData.addFile({
                            uuid: n,
                            name: t,
                            size: i,
                            batchId: o
                        });
                        this._handler.add(r, e), this._trackButton(r), this._netUploadedOrQueued++, s.push({
                            id: r,
                            file: e
                        });
                    },
                    _handlePasteSuccess: function(e, t) {
                        var n = e.type.split("/")[1], i = t;
                        null == i && (i = this._options.paste.defaultName), i += "." + n, this.addFiles({
                            name: i,
                            blob: e
                        });
                    },
                    _initExtraButton: function(e) {
                        var t = this._createUploadButton({
                            element: e.element,
                            multiple: e.multiple,
                            accept: e.validation.acceptFiles,
                            folders: e.folders,
                            allowedExtensions: e.validation.allowedExtensions
                        });
                        this._extraButtonSpecs[t.getButtonId()] = e;
                    },
                    _initFormSupportAndParams: function() {
                        this._formSupport = qq.FormSupport && new qq.FormSupport(this._options.form, qq.bind(this.uploadStoredFiles, this), qq.bind(this.log, this)), 
                        this._formSupport && this._formSupport.attachedToForm ? (this._paramsStore = this._createStore(this._options.request.params, this._formSupport.getFormInputsAsObject), 
                        this._options.autoUpload = this._formSupport.newAutoUpload, this._formSupport.newEndpoint && (this._options.request.endpoint = this._formSupport.newEndpoint)) : this._paramsStore = this._createStore(this._options.request.params);
                    },
                    _isDeletePossible: function() {
                        return !(!qq.DeleteFileAjaxRequester || !this._options.deleteFile.enabled) && (!this._options.cors.expected || (!!qq.supportedFeatures.deleteFileCorsXhr || !(!qq.supportedFeatures.deleteFileCorsXdr || !this._options.cors.allowXdr)));
                    },
                    _isAllowedExtension: function(e, t) {
                        var n = !1;
                        return !e.length || (qq.each(e, function(e, i) {
                            if (qq.isString(i)) {
                                var s = new RegExp("\\." + i + "$", "i");
                                if (null != t.match(s)) return n = !0, !1;
                            }
                        }), n);
                    },
                    _itemError: function(e, t, n) {
                        var i, s, o = this._options.messages[e], r = [], a = [].concat(t), l = a[0], u = this._getButtonId(n), c = this._getValidationBase(u);
                        function d(e, t) {
                            o = o.replace(e, t);
                        }
                        return qq.each(c.allowedExtensions, function(e, t) {
                            qq.isString(t) && r.push(t);
                        }), i = r.join(", ").toLowerCase(), d("{file}", this._options.formatFileName(l)), 
                        d("{extensions}", i), d("{sizeLimit}", this._formatSize(c.sizeLimit)), d("{minSizeLimit}", this._formatSize(c.minSizeLimit)), 
                        d("{minWidth}", this._options.validation.image.minWidth), d("{maxWidth}", this._options.validation.image.maxWidth), 
                        d("{minHeight}", this._options.validation.image.minHeight), d("{maxHeight}", this._options.validation.image.maxHeight), 
                        null !== (s = o.match(/(\{\w+\})/g)) && qq.each(s, function(e, t) {
                            d(t, a[e]);
                        }), this._options.callbacks.onError(null, l, o, void 0), o;
                    },
                    _manualRetry: function(e, t) {
                        if (this._onBeforeManualRetry(e)) return this._netUploadedOrQueued++, this._uploadData.setStatus(e, qq.status.UPLOAD_RETRYING), 
                        t ? t(e) : this._handler.retry(e), !0;
                    },
                    _maybeAllComplete: function(e, t) {
                        var n = this, i = this._getNotFinished();
                        t === qq.status.UPLOAD_SUCCESSFUL ? this._succeededSinceLastAllComplete.push(e) : t === qq.status.UPLOAD_FAILED && this._failedSinceLastAllComplete.push(e), 
                        0 === i && (this._succeededSinceLastAllComplete.length || this._failedSinceLastAllComplete.length) && setTimeout(function() {
                            n._onAllComplete(n._succeededSinceLastAllComplete, n._failedSinceLastAllComplete);
                        }, 0);
                    },
                    _maybeHandleIos8SafariWorkaround: function() {
                        var e = this;
                        if (this._options.workarounds.ios8SafariUploads && qq.ios800() && qq.iosSafari()) throw setTimeout(function() {
                            window.alert(e._options.messages.unsupportedBrowserIos8Safari);
                        }, 0), new qq.Error(this._options.messages.unsupportedBrowserIos8Safari);
                    },
                    _maybeParseAndSendUploadError: function(e, t, n, i) {
                        if (!n.success) if (i && 200 !== i.status && !n.error) this._options.callbacks.onError(e, t, "XHR returned response code " + i.status, i); else {
                            var s = n.error ? n.error : this._options.text.defaultResponseError;
                            this._options.callbacks.onError(e, t, s, i);
                        }
                    },
                    _maybeProcessNextItemAfterOnValidateCallback: function(e, t, n, i, s) {
                        var o = this;
                        if (t.length > n) if (e || !this._options.validation.stopOnFirstInvalidFile) setTimeout(function() {
                            var e = o._getValidationDescriptor(t[n]), r = o._getButtonId(t[n].file), a = o._getButton(r);
                            o._handleCheckedCallback({
                                name: "onValidate",
                                callback: qq.bind(o._options.callbacks.onValidate, o, e, a),
                                onSuccess: qq.bind(o._onValidateCallbackSuccess, o, t, n, i, s),
                                onFailure: qq.bind(o._onValidateCallbackFailure, o, t, n, i, s),
                                identifier: "Item '" + e.name + "', size: " + e.size
                            });
                        }, 0); else if (!e) for (;n < t.length; n++) o._fileOrBlobRejected(t[n].id);
                    },
                    _onAllComplete: function(e, t) {
                        this._totalProgress && this._totalProgress.onAllComplete(e, t, this._preventRetries), 
                        this._options.callbacks.onAllComplete(qq.extend([], e), qq.extend([], t)), this._succeededSinceLastAllComplete = [], 
                        this._failedSinceLastAllComplete = [];
                    },
                    _onAutoRetry: function(e, t, n, i, s) {
                        var o = this;
                        if (o._preventRetries[e] = n[o._options.retry.preventRetryResponseProperty], o._shouldAutoRetry(e, t, n)) return o._maybeParseAndSendUploadError.apply(o, arguments), 
                        o._options.callbacks.onAutoRetry(e, t, o._autoRetries[e]), o._onBeforeAutoRetry(e, t), 
                        o._retryTimeouts[e] = setTimeout(function() {
                            o.log("Retrying " + t + "..."), o._uploadData.setStatus(e, qq.status.UPLOAD_RETRYING), 
                            s ? s(e) : o._handler.retry(e);
                        }, 1e3 * o._options.retry.autoAttemptDelay), !0;
                    },
                    _onBeforeAutoRetry: function(e, t) {
                        this.log("Waiting " + this._options.retry.autoAttemptDelay + " seconds before retrying " + t + "...");
                    },
                    _onBeforeManualRetry: function(e) {
                        var t, n = this._currentItemLimit;
                        return this._preventRetries[e] ? (this.log("Retries are forbidden for id " + e, "warn"), 
                        !1) : this._handler.isValid(e) ? (t = this.getName(e), !1 !== this._options.callbacks.onManualRetry(e, t) && (n > 0 && this._netUploadedOrQueued + 1 > n ? (this._itemError("retryFailTooManyItems"), 
                        !1) : (this.log("Retrying upload for '" + t + "' (id: " + e + ")..."), !0))) : (this.log("'" + e + "' is not a valid file ID", "error"), 
                        !1);
                    },
                    _onCancel: function(e, t) {
                        this._netUploadedOrQueued--, clearTimeout(this._retryTimeouts[e]);
                        var n = qq.indexOf(this._storedIds, e);
                        !this._options.autoUpload && n >= 0 && this._storedIds.splice(n, 1), this._uploadData.setStatus(e, qq.status.CANCELED);
                    },
                    _onComplete: function(e, t, n, i) {
                        return n.success ? (n.thumbnailUrl && (this._thumbnailUrls[e] = n.thumbnailUrl), 
                        this._netUploaded++, this._uploadData.setStatus(e, qq.status.UPLOAD_SUCCESSFUL)) : (this._netUploadedOrQueued--, 
                        this._uploadData.setStatus(e, qq.status.UPLOAD_FAILED), !0 === n[this._options.retry.preventRetryResponseProperty] && (this._preventRetries[e] = !0)), 
                        this._maybeParseAndSendUploadError(e, t, n, i), !!n.success;
                    },
                    _onDelete: function(e) {
                        this._uploadData.setStatus(e, qq.status.DELETING);
                    },
                    _onDeleteComplete: function(e, t, n) {
                        var i = this.getName(e);
                        n ? (this._uploadData.setStatus(e, qq.status.DELETE_FAILED), this.log("Delete request for '" + i + "' has failed.", "error"), 
                        void 0 === t.withCredentials ? this._options.callbacks.onError(e, i, "Delete request failed", t) : this._options.callbacks.onError(e, i, "Delete request failed with response code " + t.status, t)) : (this._netUploadedOrQueued--, 
                        this._netUploaded--, this._handler.expunge(e), this._uploadData.setStatus(e, qq.status.DELETED), 
                        this.log("Delete request for '" + i + "' has succeeded."));
                    },
                    _onInputChange: function(e) {
                        var t;
                        if (qq.supportedFeatures.ajaxUploading) {
                            for (t = 0; t < e.files.length; t++) this._annotateWithButtonId(e.files[t], e);
                            this.addFiles(e.files);
                        } else e.value.length > 0 && this.addFiles(e);
                        qq.each(this._buttons, function(e, t) {
                            t.reset();
                        });
                    },
                    _onProgress: function(e, t, n, i) {
                        this._totalProgress && this._totalProgress.onIndividualProgress(e, n, i);
                    },
                    _onSubmit: function(e, t) {},
                    _onSubmitCallbackSuccess: function(e, t) {
                        this._onSubmit.apply(this, arguments), this._uploadData.setStatus(e, qq.status.SUBMITTED), 
                        this._onSubmitted.apply(this, arguments), this._options.callbacks.onSubmitted.apply(this, arguments), 
                        this._options.autoUpload ? this._uploadFile(e) : this._storeForLater(e);
                    },
                    _onSubmitDelete: function(e, t, n) {
                        var i, s = this.getUuid(e);
                        return t && (i = qq.bind(t, this, e, s, n)), this._isDeletePossible() ? (this._handleCheckedCallback({
                            name: "onSubmitDelete",
                            callback: qq.bind(this._options.callbacks.onSubmitDelete, this, e),
                            onSuccess: i || qq.bind(this._deleteHandler.sendDelete, this, e, s, n),
                            identifier: e
                        }), !0) : (this.log("Delete request ignored for ID " + e + ", delete feature is disabled or request not possible due to CORS on a user agent that does not support pre-flighting.", "warn"), 
                        !1);
                    },
                    _onSubmitted: function(e) {},
                    _onTotalProgress: function(e, t) {
                        this._options.callbacks.onTotalProgress(e, t);
                    },
                    _onUploadPrep: function(e) {},
                    _onUpload: function(e, t) {
                        this._uploadData.setStatus(e, qq.status.UPLOADING);
                    },
                    _onUploadChunk: function(e, t) {},
                    _onUploadStatusChange: function(e, t, n) {
                        n === qq.status.PAUSED && clearTimeout(this._retryTimeouts[e]);
                    },
                    _onValidateBatchCallbackFailure: function(e) {
                        var t = this;
                        qq.each(e, function(e, n) {
                            t._fileOrBlobRejected(n.id);
                        });
                    },
                    _onValidateBatchCallbackSuccess: function(e, t, n, i, s) {
                        var o, r = this._currentItemLimit, a = this._netUploadedOrQueued;
                        0 === r || a <= r ? t.length > 0 ? this._handleCheckedCallback({
                            name: "onValidate",
                            callback: qq.bind(this._options.callbacks.onValidate, this, e[0], s),
                            onSuccess: qq.bind(this._onValidateCallbackSuccess, this, t, 0, n, i),
                            onFailure: qq.bind(this._onValidateCallbackFailure, this, t, 0, n, i),
                            identifier: "Item '" + t[0].file.name + "', size: " + t[0].file.size
                        }) : this._itemError("noFilesError") : (this._onValidateBatchCallbackFailure(t), 
                        o = this._options.messages.tooManyItemsError.replace(/\{netItems\}/g, a).replace(/\{itemLimit\}/g, r), 
                        this._batchError(o));
                    },
                    _onValidateCallbackFailure: function(e, t, n, i) {
                        var s = t + 1;
                        this._fileOrBlobRejected(e[t].id, e[t].file.name), this._maybeProcessNextItemAfterOnValidateCallback(!1, e, s, n, i);
                    },
                    _onValidateCallbackSuccess: function(e, t, n, i) {
                        var s = this, o = t + 1, r = this._getValidationDescriptor(e[t]);
                        this._validateFileOrBlobData(e[t], r).then(function() {
                            s._upload(e[t].id, n, i), s._maybeProcessNextItemAfterOnValidateCallback(!0, e, o, n, i);
                        }, function() {
                            s._maybeProcessNextItemAfterOnValidateCallback(!1, e, o, n, i);
                        });
                    },
                    _prepareItemsForUpload: function(e, t, n) {
                        if (0 !== e.length) {
                            var i = this._getValidationDescriptors(e), s = this._getButtonId(e[0].file), o = this._getButton(s);
                            this._handleCheckedCallback({
                                name: "onValidateBatch",
                                callback: qq.bind(this._options.callbacks.onValidateBatch, this, i, o),
                                onSuccess: qq.bind(this._onValidateBatchCallbackSuccess, this, i, e, t, n, o),
                                onFailure: qq.bind(this._onValidateBatchCallbackFailure, this, e),
                                identifier: "batch validation"
                            });
                        } else this._itemError("noFilesError");
                    },
                    _preventLeaveInProgress: function() {
                        var e = this;
                        this._disposeSupport.attach(window, "beforeunload", function(t) {
                            if (e.getInProgress()) return (t = t || window.event).returnValue = e._options.messages.onLeave, 
                            e._options.messages.onLeave;
                        });
                    },
                    _refreshSessionData: function() {
                        var e = this, t = this._options.session;
                        qq.Session && null != this._options.session.endpoint && (this._session || (qq.extend(t, this._options.cors), 
                        t.log = qq.bind(this.log, this), t.addFileRecord = qq.bind(this._addCannedFile, this), 
                        this._session = new qq.Session(t)), setTimeout(function() {
                            e._session.refresh().then(function(t, n) {
                                e._options.callbacks.onSessionRequestComplete(t, !0, n);
                            }, function(t, n) {
                                e._options.callbacks.onSessionRequestComplete(t, !1, n);
                            });
                        }, 0));
                    },
                    _setSize: function(e, t) {
                        this._uploadData.updateSize(e, t), this._totalProgress && this._totalProgress.onNewSize(e);
                    },
                    _shouldAutoRetry: function(e, t, n) {
                        var i = this._uploadData.retrieve({
                            id: e
                        });
                        return !!(!this._preventRetries[e] && this._options.retry.enableAuto && i.status !== qq.status.PAUSED && (void 0 === this._autoRetries[e] && (this._autoRetries[e] = 0), 
                        this._autoRetries[e] < this._options.retry.maxAutoAttempts)) && (this._autoRetries[e] += 1, 
                        !0);
                    },
                    _storeForLater: function(e) {
                        this._storedIds.push(e);
                    },
                    _trackButton: function(e) {
                        var t;
                        (t = qq.supportedFeatures.ajaxUploading ? this._handler.getFile(e).qqButtonId : this._getButtonId(this._handler.getInput(e))) && (this._buttonIdsForFileIds[e] = t);
                    },
                    _upload: function(e, t, n) {
                        var i = this.getName(e);
                        t && this.setParams(t, e), n && this.setEndpoint(n, e), this._handleCheckedCallback({
                            name: "onSubmit",
                            callback: qq.bind(this._options.callbacks.onSubmit, this, e, i),
                            onSuccess: qq.bind(this._onSubmitCallbackSuccess, this, e, i),
                            onFailure: qq.bind(this._fileOrBlobRejected, this, e, i),
                            identifier: e
                        });
                    },
                    _uploadFile: function(e) {
                        this._handler.upload(e) || this._uploadData.setStatus(e, qq.status.QUEUED);
                    },
                    _validateFileOrBlobData: function(e, t) {
                        var n = this, i = e.file instanceof qq.BlobProxy ? e.file.referenceBlob : e.file, s = t.name, o = t.size, r = this._getButtonId(e.file), a = this._getValidationBase(r), l = new qq.Promise();
                        return l.then(function() {}, function() {
                            n._fileOrBlobRejected(e.id, s);
                        }), qq.isFileOrInput(i) && !this._isAllowedExtension(a.allowedExtensions, s) ? (this._itemError("typeError", s, i), 
                        l.failure()) : 0 === o ? (this._itemError("emptyError", s, i), l.failure()) : o > 0 && a.sizeLimit && o > a.sizeLimit ? (this._itemError("sizeError", s, i), 
                        l.failure()) : o > 0 && o < a.minSizeLimit ? (this._itemError("minSizeError", s, i), 
                        l.failure()) : (qq.ImageValidation && qq.supportedFeatures.imagePreviews && qq.isFile(i) ? new qq.ImageValidation(i, qq.bind(n.log, n)).validate(a.image).then(l.success, function(e) {
                            n._itemError(e + "ImageError", s, i), l.failure();
                        }) : l.success(), l);
                    },
                    _wrapCallbacks: function() {
                        var e, t, n;
                        for (n in e = this, t = function(t, n, i) {
                            var s;
                            try {
                                return n.apply(e, i);
                            } catch (n) {
                                s = n.message || n.toString(), e.log("Caught exception in '" + t + "' callback - " + s, "error");
                            }
                        }, this._options.callbacks) !function() {
                            var i, s;
                            i = n, s = e._options.callbacks[i], e._options.callbacks[i] = function() {
                                return t(i, s, arguments);
                            };
                        }();
                    }
                };
            }(), function() {
                "use strict";
                qq.FineUploaderBasic = function(e) {
                    var t = this;
                    this._options = {
                        debug: !1,
                        button: null,
                        multiple: !0,
                        maxConnections: 3,
                        disableCancelForFormUploads: !1,
                        autoUpload: !0,
                        request: {
                            endpoint: "/server/upload",
                            params: {},
                            paramsInBody: !0,
                            customHeaders: {},
                            forceMultipart: !0,
                            inputName: "qqfile",
                            uuidName: "qquuid",
                            totalFileSizeName: "qqtotalfilesize",
                            filenameParam: "qqfilename"
                        },
                        validation: {
                            allowedExtensions: [],
                            sizeLimit: 0,
                            minSizeLimit: 0,
                            itemLimit: 0,
                            stopOnFirstInvalidFile: !0,
                            acceptFiles: null,
                            image: {
                                maxHeight: 0,
                                maxWidth: 0,
                                minHeight: 0,
                                minWidth: 0
                            }
                        },
                        callbacks: {
                            onSubmit: function(e, t) {},
                            onSubmitted: function(e, t) {},
                            onComplete: function(e, t, n, i) {},
                            onAllComplete: function(e, t) {},
                            onCancel: function(e, t) {},
                            onUpload: function(e, t) {},
                            onUploadChunk: function(e, t, n) {},
                            onUploadChunkSuccess: function(e, t, n, i) {},
                            onResume: function(e, t, n) {},
                            onProgress: function(e, t, n, i) {},
                            onTotalProgress: function(e, t) {},
                            onError: function(e, t, n, i) {},
                            onAutoRetry: function(e, t, n) {},
                            onManualRetry: function(e, t) {},
                            onValidateBatch: function(e) {},
                            onValidate: function(e) {},
                            onSubmitDelete: function(e) {},
                            onDelete: function(e) {},
                            onDeleteComplete: function(e, t, n) {},
                            onPasteReceived: function(e) {},
                            onStatusChange: function(e, t, n) {},
                            onSessionRequestComplete: function(e, t, n) {}
                        },
                        messages: {
                            typeError: "{file} has an invalid extension. Valid extension(s): {extensions}.",
                            sizeError: "{file} is too large, maximum file size is {sizeLimit}.",
                            minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
                            emptyError: "{file} is empty, please select files again without it.",
                            noFilesError: "No files to upload.",
                            tooManyItemsError: "Too many items ({netItems}) would be uploaded.  Item limit is {itemLimit}.",
                            maxHeightImageError: "Image is too tall.",
                            maxWidthImageError: "Image is too wide.",
                            minHeightImageError: "Image is not tall enough.",
                            minWidthImageError: "Image is not wide enough.",
                            retryFailTooManyItems: "Retry failed - you have reached your file limit.",
                            onLeave: "The files are being uploaded, if you leave now the upload will be canceled.",
                            unsupportedBrowserIos8Safari: "Unrecoverable error - this browser does not permit file uploading of any kind due to serious bugs in iOS8 Safari.  Please use iOS8 Chrome until Apple fixes these issues."
                        },
                        retry: {
                            enableAuto: !1,
                            maxAutoAttempts: 3,
                            autoAttemptDelay: 5,
                            preventRetryResponseProperty: "preventRetry"
                        },
                        classes: {
                            buttonHover: "qq-upload-button-hover",
                            buttonFocus: "qq-upload-button-focus"
                        },
                        chunking: {
                            enabled: !1,
                            concurrent: {
                                enabled: !1
                            },
                            mandatory: !1,
                            paramNames: {
                                partIndex: "qqpartindex",
                                partByteOffset: "qqpartbyteoffset",
                                chunkSize: "qqchunksize",
                                totalFileSize: "qqtotalfilesize",
                                totalParts: "qqtotalparts"
                            },
                            partSize: 2e6,
                            success: {
                                endpoint: null
                            }
                        },
                        resume: {
                            enabled: !1,
                            recordsExpireIn: 7,
                            paramNames: {
                                resuming: "qqresume"
                            }
                        },
                        formatFileName: function(e) {
                            return void 0 !== e && e.length > 33 && (e = e.slice(0, 19) + "..." + e.slice(-14)), 
                            e;
                        },
                        text: {
                            defaultResponseError: "Upload failure reason unknown",
                            sizeSymbols: [ "kB", "MB", "GB", "TB", "PB", "EB" ]
                        },
                        deleteFile: {
                            enabled: !1,
                            method: "DELETE",
                            endpoint: "/server/upload",
                            customHeaders: {},
                            params: {}
                        },
                        cors: {
                            expected: !1,
                            sendCredentials: !1,
                            allowXdr: !1
                        },
                        blobs: {
                            defaultName: "misc_data"
                        },
                        paste: {
                            targetElement: null,
                            defaultName: "pasted_image"
                        },
                        camera: {
                            ios: !1,
                            button: null
                        },
                        extraButtons: [],
                        session: {
                            endpoint: null,
                            params: {},
                            customHeaders: {},
                            refreshOnReset: !0
                        },
                        form: {
                            element: "qq-form",
                            autoUpload: !1,
                            interceptSubmit: !0
                        },
                        scaling: {
                            sendOriginal: !0,
                            orient: !0,
                            defaultType: null,
                            defaultQuality: 80,
                            failureText: "Failed to scale",
                            includeExif: !1,
                            sizes: []
                        },
                        workarounds: {
                            iosEmptyVideos: !0,
                            ios8SafariUploads: !0,
                            ios8BrowserCrash: !0
                        }
                    }, qq.extend(this._options, e, !0), this._buttons = [], this._extraButtonSpecs = {}, 
                    this._buttonIdsForFileIds = [], this._wrapCallbacks(), this._disposeSupport = new qq.DisposeSupport(), 
                    this._storedIds = [], this._autoRetries = [], this._retryTimeouts = [], this._preventRetries = [], 
                    this._thumbnailUrls = [], this._netUploadedOrQueued = 0, this._netUploaded = 0, 
                    this._uploadData = this._createUploadDataTracker(), this._initFormSupportAndParams(), 
                    this._customHeadersStore = this._createStore(this._options.request.customHeaders), 
                    this._deleteFileCustomHeadersStore = this._createStore(this._options.deleteFile.customHeaders), 
                    this._deleteFileParamsStore = this._createStore(this._options.deleteFile.params), 
                    this._endpointStore = this._createStore(this._options.request.endpoint), this._deleteFileEndpointStore = this._createStore(this._options.deleteFile.endpoint), 
                    this._handler = this._createUploadHandler(), this._deleteHandler = qq.DeleteFileAjaxRequester && this._createDeleteHandler(), 
                    this._options.button && (this._defaultButtonId = this._createUploadButton({
                        element: this._options.button
                    }).getButtonId()), this._generateExtraButtonSpecs(), this._handleCameraAccess(), 
                    this._options.paste.targetElement && (qq.PasteSupport ? this._pasteHandler = this._createPasteHandler() : this.log("Paste support module not found", "error")), 
                    this._preventLeaveInProgress(), this._imageGenerator = qq.ImageGenerator && new qq.ImageGenerator(qq.bind(this.log, this)), 
                    this._refreshSessionData(), this._succeededSinceLastAllComplete = [], this._failedSinceLastAllComplete = [], 
                    this._scaler = qq.Scaler && new qq.Scaler(this._options.scaling, qq.bind(this.log, this)) || {}, 
                    this._scaler.enabled && (this._customNewFileHandler = qq.bind(this._scaler.handleNewFile, this._scaler)), 
                    qq.TotalProgress && qq.supportedFeatures.progressBar && (this._totalProgress = new qq.TotalProgress(qq.bind(this._onTotalProgress, this), function(e) {
                        var n = t._uploadData.retrieve({
                            id: e
                        });
                        return n && n.size || 0;
                    })), this._currentItemLimit = this._options.validation.itemLimit;
                }, qq.FineUploaderBasic.prototype = qq.basePublicApi, qq.extend(qq.FineUploaderBasic.prototype, qq.basePrivateApi);
            }(), qq.AjaxRequester = function(e) {
                "use strict";
                var t, n, i = [], s = {}, o = {
                    acceptHeader: null,
                    validMethods: [ "POST" ],
                    method: "POST",
                    contentType: "application/x-www-form-urlencoded",
                    maxConnections: 3,
                    customHeaders: {},
                    endpointStore: {},
                    paramsStore: {},
                    mandatedParams: {},
                    allowXRequestedWithAndCacheControl: !0,
                    successfulResponseCodes: {
                        DELETE: [ 200, 202, 204 ],
                        POST: [ 200, 204 ],
                        GET: [ 200 ]
                    },
                    cors: {
                        expected: !1,
                        sendCredentials: !1
                    },
                    log: function(e, t) {},
                    onSend: function(e) {},
                    onComplete: function(e, t, n) {},
                    onProgress: null
                };
                if (qq.extend(o, e), t = o.log, qq.indexOf(o.validMethods, o.method) < 0) throw new Error("'" + o.method + "' is not a supported method for this type of request!");
                function r(e) {
                    return o.cors.expected && void 0 === e.withCredentials;
                }
                function a(e, t) {
                    var n = s[e].xhr;
                    return n || (n = t || (o.cors.expected ? function() {
                        var e;
                        return (window.XMLHttpRequest || window.ActiveXObject) && void 0 === (e = qq.createXhrInstance()).withCredentials && (e = new XDomainRequest()), 
                        e;
                    }() : qq.createXhrInstance()), s[e].xhr = n), n;
                }
                function l(e) {
                    var t = qq.indexOf(i, e), n = o.maxConnections;
                    delete s[e], i.splice(t, 1), i.length >= n && t < n && c(i[n - 1]);
                }
                function u(e, n) {
                    var i, s = a(e), u = o.method, c = !0 === n;
                    l(e), c ? t(u + " request for " + e + " has failed", "error") : r(s) || (i = s.status, 
                    qq.indexOf(o.successfulResponseCodes[o.method], i) >= 0) || (c = !0, t(u + " request for " + e + " has failed - response code " + s.status, "error")), 
                    o.onComplete(e, s, c);
                }
                function c(e, i) {
                    var l, c = a(e, i), d = o.method, h = function(e) {
                        var t, n = s[e].additionalParams, i = o.mandatedParams;
                        return o.paramsStore.get && (t = o.paramsStore.get(e)), n && qq.each(n, function(e, n) {
                            (t = t || {})[e] = n;
                        }), i && qq.each(i, function(e, n) {
                            (t = t || {})[e] = n;
                        }), t;
                    }(e), p = s[e].payload;
                    return o.onSend(e), l = function(e, t) {
                        var i = o.endpointStore.get(e), r = s[e].addToPath;
                        void 0 != r && (i += "/" + r);
                        return n && t ? qq.obj2url(t, i) : i;
                    }(e, h), r(c) ? (c.onload = function(e) {
                        return function() {
                            u(e);
                        };
                    }(e), c.onerror = function(e) {
                        return function() {
                            u(e, !0);
                        };
                    }(e)) : c.onreadystatechange = function(e) {
                        return function() {
                            4 === a(e).readyState && u(e);
                        };
                    }(e), function(e) {
                        var t = o.onProgress;
                        t && (a(e).upload.onprogress = function(n) {
                            n.lengthComputable && t(e, n.loaded, n.total);
                        });
                    }(e), c.open(d, l, !0), o.cors.expected && o.cors.sendCredentials && !r(c) && (c.withCredentials = !0), 
                    function(e) {
                        var t = a(e), n = o.customHeaders, i = s[e].additionalHeaders || {}, l = o.method, u = {};
                        r(t) || (o.acceptHeader && t.setRequestHeader("Accept", o.acceptHeader), o.allowXRequestedWithAndCacheControl && (o.cors.expected && qq.indexOf([ "GET", "POST", "HEAD" ], o.method) >= 0 && (c = !1, 
                        qq.each(c, function(e, t) {
                            if (qq.indexOf([ "Accept", "Accept-Language", "Content-Language", "Content-Type" ], t) < 0) return c = !0, 
                            !1;
                        }), !c) || (t.setRequestHeader("X-Requested-With", "XMLHttpRequest"), t.setRequestHeader("Cache-Control", "no-cache"))), 
                        !o.contentType || "POST" !== l && "PUT" !== l || t.setRequestHeader("Content-Type", o.contentType), 
                        qq.extend(u, qq.isFunction(n) ? n(e) : n), qq.extend(u, i), qq.each(u, function(e, n) {
                            t.setRequestHeader(e, n);
                        }));
                        var c;
                    }(e), t("Sending " + d + " request for " + e), p ? c.send(p) : n || !h ? c.send() : h && o.contentType && o.contentType.toLowerCase().indexOf("application/x-www-form-urlencoded") >= 0 ? c.send(qq.obj2url(h, "")) : h && o.contentType && o.contentType.toLowerCase().indexOf("application/json") >= 0 ? c.send(JSON.stringify(h)) : c.send(h), 
                    c;
                }
                n = "GET" === o.method || "DELETE" === o.method, qq.extend(this, {
                    initTransport: function(e) {
                        var t, n, r, a, l;
                        return {
                            withPath: function(e) {
                                return t = e, this;
                            },
                            withParams: function(e) {
                                return n = e, this;
                            },
                            withHeaders: function(e) {
                                return r = e, this;
                            },
                            withPayload: function(e) {
                                return a = e, this;
                            },
                            withCacheBuster: function() {
                                return l = !0, this;
                            },
                            send: function(u) {
                                return l && qq.indexOf([ "GET", "DELETE" ], o.method) >= 0 && (n.qqtimestamp = new Date().getTime()), 
                                function(e, t, n, r, a, l) {
                                    if (s[e] = {
                                        addToPath: n,
                                        additionalParams: r,
                                        additionalHeaders: a,
                                        payload: l
                                    }, i.push(e) <= o.maxConnections) return c(e, t);
                                }(e, u, t, n, r, a);
                            }
                        };
                    },
                    canceled: function(e) {
                        l(e);
                    }
                });
            }, qq.UploadHandler = function(e) {
                "use strict";
                var t = e.proxy, n = {}, i = t.onCancel, s = t.getName;
                qq.extend(this, {
                    add: function(e, t) {
                        n[e] = t, n[e].temp = {};
                    },
                    cancel: function(e) {
                        var t = this, o = new qq.Promise();
                        i(e, s(e), o).then(function() {
                            t.isValid(e) && (n[e].canceled = !0, t.expunge(e)), o.success();
                        });
                    },
                    expunge: function(e) {
                        delete n[e];
                    },
                    getThirdPartyFileId: function(e) {
                        return n[e].key;
                    },
                    isValid: function(e) {
                        return void 0 !== n[e];
                    },
                    reset: function() {
                        n = {};
                    },
                    _getFileState: function(e) {
                        return n[e];
                    },
                    _setThirdPartyFileId: function(e, t) {
                        n[e].key = t;
                    },
                    _wasCanceled: function(e) {
                        return !!n[e].canceled;
                    }
                });
            }, qq.UploadHandlerController = function(e, t) {
                "use strict";
                var n, i, s, o, r = this, a = !1, l = !1, u = {
                    paramsStore: {},
                    maxConnections: 3,
                    chunking: {
                        enabled: !1,
                        multiple: {
                            enabled: !1
                        }
                    },
                    log: function(e, t) {},
                    onProgress: function(e, t, n, i) {},
                    onComplete: function(e, t, n, i) {},
                    onCancel: function(e, t) {},
                    onUploadPrep: function(e) {},
                    onUpload: function(e, t) {},
                    onUploadChunk: function(e, t, n) {},
                    onUploadChunkSuccess: function(e, t, n, i) {},
                    onAutoRetry: function(e, t, n, i) {},
                    onResume: function(e, t, n) {},
                    onUuidChanged: function(e, t) {},
                    getName: function(e) {},
                    setSize: function(e, t) {},
                    isQueued: function(e) {},
                    getIdsInProxyGroup: function(e) {},
                    getIdsInBatch: function(e) {}
                }, c = {
                    done: function(e, t, n, i) {
                        var o = s._getChunkData(e, t);
                        s._getFileState(e).attemptingResume = !1, delete s._getFileState(e).temp.chunkProgress[t], 
                        s._getFileState(e).loaded += o.size, u.onUploadChunkSuccess(e, s._getChunkDataForCallback(o), n, i);
                    },
                    finalize: function(e) {
                        var t = u.getSize(e), n = u.getName(e);
                        i("All chunks have been uploaded for " + e + " - finalizing...."), s.finalizeChunks(e).then(function(o, r) {
                            i("Finalize successful for " + e);
                            var a = p.normalizeResponse(o, !0);
                            u.onProgress(e, n, t, t), s._maybeDeletePersistedChunkData(e), p.cleanup(e, a, r);
                        }, function(t, s) {
                            var o = p.normalizeResponse(t, !1);
                            i("Problem finalizing chunks for file ID " + e + " - " + o.error, "error"), o.reset && c.reset(e), 
                            u.onAutoRetry(e, n, o, s) || p.cleanup(e, o, s);
                        });
                    },
                    hasMoreParts: function(e) {
                        return !!s._getFileState(e).chunking.remaining.length;
                    },
                    nextPart: function(e) {
                        var t = s._getFileState(e).chunking.remaining.shift();
                        return t >= s._getTotalChunks(e) && (t = null), t;
                    },
                    reset: function(e) {
                        i("Server or callback has ordered chunking effort to be restarted on next attempt for item ID " + e, "error"), 
                        s._maybeDeletePersistedChunkData(e), s.reevaluateChunking(e), s._getFileState(e).loaded = 0;
                    },
                    sendNext: function(e) {
                        var t = u.getSize(e), n = u.getName(e), o = c.nextPart(e), r = s._getChunkData(e, o), a = s._getFileState(e).attemptingResume, h = s._getFileState(e).chunking.inProgress || [];
                        null == s._getFileState(e).loaded && (s._getFileState(e).loaded = 0), a && !1 === u.onResume(e, n, r) && (c.reset(e), 
                        o = c.nextPart(e), r = s._getChunkData(e, o), a = !1), null == o && 0 === h.length ? c.finalize(e) : (i("Sending chunked upload request for item " + e + ": bytes " + (r.start + 1) + "-" + r.end + " of " + t), 
                        u.onUploadChunk(e, n, s._getChunkDataForCallback(r)), h.push(o), s._getFileState(e).chunking.inProgress = h, 
                        l && d.open(e, o), l && d.available() && s._getFileState(e).chunking.remaining.length && c.sendNext(e), 
                        s.uploadChunk(e, o, a).then(function(t, n) {
                            i("Chunked upload request succeeded for " + e + ", chunk " + o), s.clearCachedChunk(e, o);
                            var r = s._getFileState(e).chunking.inProgress || [], a = p.normalizeResponse(t, !0), l = qq.indexOf(r, o);
                            i(qq.format("Chunk {} for file {} uploaded successfully.", o, e)), c.done(e, o, a, n), 
                            l >= 0 && r.splice(l, 1), s._maybePersistChunkedState(e), c.hasMoreParts(e) || 0 !== r.length ? c.hasMoreParts(e) && c.sendNext(e) : c.finalize(e);
                        }, function(t, r) {
                            i("Chunked upload request failed for " + e + ", chunk " + o), s.clearCachedChunk(e, o);
                            var a, h = p.normalizeResponse(t, !1);
                            h.reset ? c.reset(e) : (a = qq.indexOf(s._getFileState(e).chunking.inProgress, o)) >= 0 && (s._getFileState(e).chunking.inProgress.splice(a, 1), 
                            s._getFileState(e).chunking.remaining.unshift(o)), s._getFileState(e).temp.ignoreFailure || (l && (s._getFileState(e).temp.ignoreFailure = !0, 
                            qq.each(s._getXhrs(e), function(e, t) {
                                t.abort();
                            }), s.moveInProgressToRemaining(e), d.free(e, !0)), u.onAutoRetry(e, n, h, r) || p.cleanup(e, h, r));
                        }).done(function() {
                            s.clearXhr(e, o);
                        }));
                    }
                }, d = {
                    _open: [],
                    _openChunks: {},
                    _waiting: [],
                    available: function() {
                        var e = u.maxConnections, t = 0, n = 0;
                        return qq.each(d._openChunks, function(e, i) {
                            t++, n += i.length;
                        }), e - (d._open.length - t + n);
                    },
                    free: function(e, t) {
                        var n, o = !t, r = qq.indexOf(d._waiting, e), a = qq.indexOf(d._open, e);
                        delete d._openChunks[e], p.getProxyOrBlob(e) instanceof qq.BlobProxy && (i("Generated blob upload has ended for " + e + ", disposing generated blob."), 
                        delete s._getFileState(e).file), r >= 0 ? d._waiting.splice(r, 1) : o && a >= 0 && (d._open.splice(a, 1), 
                        (n = d._waiting.shift()) >= 0 && (d._open.push(n), p.start(n)));
                    },
                    getWaitingOrConnected: function() {
                        var e = [];
                        return qq.each(d._openChunks, function(t, n) {
                            n && n.length && e.push(parseInt(t));
                        }), qq.each(d._open, function(t, n) {
                            d._openChunks[n] || e.push(parseInt(n));
                        }), e = e.concat(d._waiting);
                    },
                    isUsingConnection: function(e) {
                        return qq.indexOf(d._open, e) >= 0;
                    },
                    open: function(e, t) {
                        return null == t && d._waiting.push(e), !!d.available() && (null == t ? (d._waiting.pop(), 
                        d._open.push(e)) : ((n = d._openChunks[e] || []).push(t), d._openChunks[e] = n), 
                        !0);
                        var n;
                    },
                    reset: function() {
                        d._waiting = [], d._open = [];
                    }
                }, h = function(e, t) {
                    s._getFileState(e).loaded = 0, i("Sending simple upload request for " + e), s.uploadFile(e).then(function(n, s) {
                        i("Simple upload request succeeded for " + e);
                        var o = p.normalizeResponse(n, !0), r = u.getSize(e);
                        u.onProgress(e, t, r, r), p.maybeNewUuid(e, o), p.cleanup(e, o, s);
                    }, function(n, s) {
                        i("Simple upload request failed for " + e);
                        var o = p.normalizeResponse(n, !1);
                        u.onAutoRetry(e, t, o, s) || p.cleanup(e, o, s);
                    });
                }, p = {
                    cancel: function(e) {
                        i("Cancelling " + e), u.paramsStore.remove(e), d.free(e);
                    },
                    cleanup: function(e, t, n) {
                        var i = u.getName(e);
                        u.onComplete(e, i, t, n), s._getFileState(e) && s._clearXhrs && s._clearXhrs(e), 
                        d.free(e);
                    },
                    getProxyOrBlob: function(e) {
                        return s.getProxy && s.getProxy(e) || s.getFile && s.getFile(e);
                    },
                    initHandler: function() {
                        var e = t ? qq[t] : qq.traditional, n = qq.supportedFeatures.ajaxUploading ? "Xhr" : "Form";
                        (s = new e[n + "UploadHandler"](u, {
                            getDataByUuid: u.getDataByUuid,
                            getName: u.getName,
                            getSize: u.getSize,
                            getUuid: u.getUuid,
                            log: i,
                            onCancel: u.onCancel,
                            onProgress: u.onProgress,
                            onUuidChanged: u.onUuidChanged
                        }))._removeExpiredChunkingRecords && s._removeExpiredChunkingRecords();
                    },
                    isDeferredEligibleForUpload: function(e) {
                        return u.isQueued(e);
                    },
                    maybeDefer: function(e, t) {
                        return t && !s.getFile(e) && t instanceof qq.BlobProxy ? (u.onUploadPrep(e), i("Attempting to generate a blob on-demand for " + e), 
                        t.create().then(function(t) {
                            i("Generated an on-demand blob for " + e), s.updateBlob(e, t), u.setSize(e, t.size), 
                            s.reevaluateChunking(e), p.maybeSendDeferredFiles(e);
                        }, function(t) {
                            var s = {};
                            t && (s.error = t), i(qq.format("Failed to generate blob for ID {}.  Error message: {}.", e, t), "error"), 
                            u.onComplete(e, u.getName(e), qq.extend(s, n), null), p.maybeSendDeferredFiles(e), 
                            d.free(e);
                        }), !1) : p.maybeSendDeferredFiles(e);
                    },
                    maybeSendDeferredFiles: function(e) {
                        var t = u.getIdsInProxyGroup(e), n = !1;
                        return t && t.length ? (i("Maybe ready to upload proxy group file " + e), qq.each(t, function(t, i) {
                            if (p.isDeferredEligibleForUpload(i) && s.getFile(i)) n = i === e, p.now(i); else if (p.isDeferredEligibleForUpload(i)) return !1;
                        })) : (n = !0, p.now(e)), n;
                    },
                    maybeNewUuid: function(e, t) {
                        void 0 !== t.newUuid && u.onUuidChanged(e, t.newUuid);
                    },
                    normalizeResponse: function(e, t) {
                        var n = e;
                        return qq.isObject(e) || (n = {}, qq.isString(e) && !t && (n.error = e)), n.success = t, 
                        n;
                    },
                    now: function(e) {
                        var t = u.getName(e);
                        if (!r.isValid(e)) throw new qq.Error(e + " is not a valid file ID to upload!");
                        u.onUpload(e, t), a && s._shouldChunkThisFile(e) ? c.sendNext(e) : h(e, t);
                    },
                    start: function(e) {
                        var t = p.getProxyOrBlob(e);
                        return t ? p.maybeDefer(e, t) : (p.now(e), !0);
                    }
                };
                qq.extend(this, {
                    add: function(e, t) {
                        s.add.apply(this, arguments);
                    },
                    upload: function(e) {
                        return !!d.open(e) && p.start(e);
                    },
                    retry: function(e) {
                        return l && (s._getFileState(e).temp.ignoreFailure = !1), d.isUsingConnection(e) ? p.start(e) : r.upload(e);
                    },
                    cancel: function(e) {
                        var t = s.cancel(e);
                        qq.isGenericPromise(t) ? t.then(function() {
                            p.cancel(e);
                        }) : !1 !== t && p.cancel(e);
                    },
                    cancelAll: function() {
                        var e, t = d.getWaitingOrConnected();
                        if (t.length) for (e = t.length - 1; e >= 0; e--) r.cancel(t[e]);
                        d.reset();
                    },
                    getFile: function(e) {
                        return s.getProxy && s.getProxy(e) ? s.getProxy(e).referenceBlob : s.getFile && s.getFile(e);
                    },
                    isProxied: function(e) {
                        return !(!s.getProxy || !s.getProxy(e));
                    },
                    getInput: function(e) {
                        if (s.getInput) return s.getInput(e);
                    },
                    reset: function() {
                        i("Resetting upload handler"), r.cancelAll(), d.reset(), s.reset();
                    },
                    expunge: function(e) {
                        if (r.isValid(e)) return s.expunge(e);
                    },
                    isValid: function(e) {
                        return s.isValid(e);
                    },
                    getResumableFilesData: function() {
                        return s.getResumableFilesData ? s.getResumableFilesData() : [];
                    },
                    getThirdPartyFileId: function(e) {
                        if (r.isValid(e)) return s.getThirdPartyFileId(e);
                    },
                    pause: function(e) {
                        return !!(r.isResumable(e) && s.pause && r.isValid(e) && s.pause(e)) && (d.free(e), 
                        s.moveInProgressToRemaining(e), !0);
                    },
                    isResumable: function(e) {
                        return !!s.isResumable && s.isResumable(e);
                    }
                }), qq.extend(u, e), i = u.log, a = u.chunking.enabled && qq.supportedFeatures.chunking, 
                l = a && u.chunking.concurrent.enabled, (o = {})[u.preventRetryParam] = !0, n = o, 
                p.initHandler();
            }, qq.FormUploadHandler = function(e) {
                "use strict";
                var t = e.options, n = this, i = e.proxy, s = qq.getUniqueId(), o = {}, r = {}, a = {}, l = t.isCors, u = t.inputName, c = i.getUuid, d = i.log, h = new qq.WindowReceiveMessage({
                    log: d
                });
                function p(e) {
                    return e.split("_")[0];
                }
                qq.extend(this, new qq.UploadHandler(e)), qq.override(this, function(e) {
                    return {
                        add: function(t, n) {
                            e.add(t, {
                                input: n
                            }), n.setAttribute("name", u), n.parentNode && qq(n).remove();
                        },
                        expunge: function(t) {
                            !function(e) {
                                delete r[e], l && (clearTimeout(a[e]), delete a[e], h.stopReceivingMessages(e));
                                var t = document.getElementById(n._getIframeName(e));
                                t && (t.setAttribute("src", "javascript:false;"), qq(t).remove());
                            }(t), e.expunge(t);
                        },
                        isValid: function(t) {
                            return e.isValid(t) && void 0 !== n._getFileState(t).input;
                        }
                    };
                }), qq.extend(this, {
                    getInput: function(e) {
                        return n._getFileState(e).input;
                    },
                    _attachLoadEvent: function(e, t) {
                        var i;
                        l ? function(e, t) {
                            var i = e.id, s = p(i), l = c(s);
                            o[l] = t, r[s] = qq(e).attach("load", function() {
                                n.getInput(s) && (d("Received iframe load event for CORS upload request (iframe name " + i + ")"), 
                                a[i] = setTimeout(function() {
                                    var e = "No valid message received from loaded iframe for iframe name " + i;
                                    d(e, "error"), t({
                                        error: e
                                    });
                                }, 1e3));
                            }), h.receiveMessage(i, function(e) {
                                d("Received the following window message: '" + e + "'"), p(i);
                                var t, s = n._parseJsonResponse(e), r = s.uuid;
                                r && o[r] ? (d("Handling response for iframe name " + i), clearTimeout(a[i]), delete a[i], 
                                n._detachLoadEvent(i), t = o[r], delete o[r], h.stopReceivingMessages(i), t(s)) : r || d("'" + e + "' does not contain a UUID - ignoring.");
                            });
                        }(e, t) : r[e.id] = qq(e).attach("load", function() {
                            if (d("Received response for " + e.id), e.parentNode) {
                                try {
                                    if (e.contentDocument && e.contentDocument.body && "false" == e.contentDocument.body.innerHTML) return;
                                } catch (e) {
                                    d("Error when attempting to access iframe during handling of upload response (" + e.message + ")", "error"), 
                                    i = {
                                        success: !1
                                    };
                                }
                                t(i);
                            }
                        });
                    },
                    _createIframe: function(e) {
                        var t, i, s = n._getIframeName(e);
                        return t = s, (i = qq.toElement("<iframe src='javascript:false;' name='" + t + "' />")).setAttribute("id", t), 
                        i.style.display = "none", document.body.appendChild(i), i;
                    },
                    _detachLoadEvent: function(e) {
                        void 0 !== r[e] && (r[e](), delete r[e]);
                    },
                    _getIframeName: function(e) {
                        return e + "_" + s;
                    },
                    _initFormForUpload: function(e) {
                        var t = e.method, n = e.endpoint, i = e.params, s = e.paramsInBody, o = e.targetName, r = qq.toElement("<form method='" + t + "' enctype='multipart/form-data'></form>"), a = n;
                        return s ? qq.obj2Inputs(i, r) : a = qq.obj2url(i, n), r.setAttribute("action", a), 
                        r.setAttribute("target", o), r.style.display = "none", document.body.appendChild(r), 
                        r;
                    },
                    _parseJsonResponse: function(e) {
                        var t = {};
                        try {
                            t = qq.parseJson(e);
                        } catch (e) {
                            d("Error when attempting to parse iframe upload response (" + e.message + ")", "error");
                        }
                        return t;
                    }
                });
            }, qq.XhrUploadHandler = function(e) {
                "use strict";
                var t = this, n = e.options.namespace, i = e.proxy, s = e.options.chunking, o = e.options.resume, r = s && e.options.chunking.enabled && qq.supportedFeatures.chunking, a = o && e.options.resume.enabled && r && qq.supportedFeatures.resume, l = i.getName, u = i.getSize, c = i.getUuid, d = i.getEndpoint, h = i.getDataByUuid, p = i.onUuidChanged, f = i.onProgress, m = i.log;
                function g(e) {
                    qq.each(t._getXhrs(e), function(n, i) {
                        var s = t._getAjaxRequester(e, n);
                        i.onreadystatechange = null, i.upload.onprogress = null, i.abort(), s && s.canceled && s.canceled(e);
                    });
                }
                qq.extend(this, new qq.UploadHandler(e)), qq.override(this, function(e) {
                    return {
                        add: function(n, i) {
                            if (qq.isFile(i) || qq.isBlob(i)) e.add(n, {
                                file: i
                            }); else {
                                if (!(i instanceof qq.BlobProxy)) throw new Error("Passed obj is not a File, Blob, or proxy");
                                e.add(n, {
                                    proxy: i
                                });
                            }
                            t._initTempState(n), a && t._maybePrepareForResume(n);
                        },
                        expunge: function(n) {
                            g(n), t._maybeDeletePersistedChunkData(n), t._clearXhrs(n), e.expunge(n);
                        }
                    };
                }), qq.extend(this, {
                    clearCachedChunk: function(e, n) {
                        delete t._getFileState(e).temp.cachedChunks[n];
                    },
                    clearXhr: function(e, n) {
                        var i = t._getFileState(e).temp;
                        i.xhrs && delete i.xhrs[n], i.ajaxRequesters && delete i.ajaxRequesters[n];
                    },
                    finalizeChunks: function(e, n) {
                        var i = t._getTotalChunks(e) - 1, s = t._getXhr(e, i);
                        return n ? new qq.Promise().success(n(s), s) : new qq.Promise().success({}, s);
                    },
                    getFile: function(e) {
                        return t.isValid(e) && t._getFileState(e).file;
                    },
                    getProxy: function(e) {
                        return t.isValid(e) && t._getFileState(e).proxy;
                    },
                    getResumableFilesData: function() {
                        var e = [];
                        return t._iterateResumeRecords(function(n, i) {
                            t.moveInProgressToRemaining(null, i.chunking.inProgress, i.chunking.remaining);
                            var s = {
                                name: i.name,
                                remaining: i.chunking.remaining,
                                size: i.size,
                                uuid: i.uuid
                            };
                            i.key && (s.key = i.key), e.push(s);
                        }), e;
                    },
                    isResumable: function(e) {
                        return !!s && t.isValid(e) && !t._getFileState(e).notResumable;
                    },
                    moveInProgressToRemaining: function(e, n, i) {
                        var s = n || t._getFileState(e).chunking.inProgress, o = i || t._getFileState(e).chunking.remaining;
                        s && (s.reverse(), qq.each(s, function(e, t) {
                            o.unshift(t);
                        }), s.length = 0);
                    },
                    pause: function(e) {
                        if (t.isValid(e)) return m(qq.format("Aborting XHR upload for {} '{}' due to pause instruction.", e, l(e))), 
                        t._getFileState(e).paused = !0, g(e), !0;
                    },
                    reevaluateChunking: function(e) {
                        if (s && t.isValid(e)) {
                            var n, i, o = t._getFileState(e);
                            if (delete o.chunking, o.chunking = {}, (n = t._getTotalChunks(e)) > 1 || s.mandatory) {
                                for (o.chunking.enabled = !0, o.chunking.parts = n, o.chunking.remaining = [], i = 0; i < n; i++) o.chunking.remaining.push(i);
                                t._initTempState(e);
                            } else o.chunking.enabled = !1;
                        }
                    },
                    updateBlob: function(e, n) {
                        t.isValid(e) && (t._getFileState(e).file = n);
                    },
                    _clearXhrs: function(e) {
                        var n = t._getFileState(e).temp;
                        qq.each(n.ajaxRequesters, function(e) {
                            delete n.ajaxRequesters[e];
                        }), qq.each(n.xhrs, function(e) {
                            delete n.xhrs[e];
                        });
                    },
                    _createXhr: function(e, n) {
                        return t._registerXhr(e, n, qq.createXhrInstance());
                    },
                    _getAjaxRequester: function(e, n) {
                        var i = null == n ? -1 : n;
                        return t._getFileState(e).temp.ajaxRequesters[i];
                    },
                    _getChunkData: function(e, n) {
                        var i = s.partSize, o = u(e), r = t.getFile(e), a = i * n, l = a + i >= o ? o : a + i, c = t._getTotalChunks(e), d = this._getFileState(e).temp.cachedChunks, h = d[n] || qq.sliceBlob(r, a, l);
                        return d[n] = h, {
                            part: n,
                            start: a,
                            end: l,
                            count: c,
                            blob: h,
                            size: l - a
                        };
                    },
                    _getChunkDataForCallback: function(e) {
                        return {
                            partIndex: e.part,
                            startByte: e.start + 1,
                            endByte: e.end,
                            totalParts: e.count
                        };
                    },
                    _getLocalStorageId: function(e) {
                        var t = l(e), i = u(e), o = s.partSize, r = d(e);
                        return qq.format("qq{}resume{}-{}-{}-{}-{}", n, "5.0", t, i, o, r);
                    },
                    _getMimeType: function(e) {
                        return t.getFile(e).type;
                    },
                    _getPersistableData: function(e) {
                        return t._getFileState(e).chunking;
                    },
                    _getTotalChunks: function(e) {
                        if (s) {
                            var t = u(e), n = s.partSize;
                            return Math.ceil(t / n);
                        }
                    },
                    _getXhr: function(e, n) {
                        var i = null == n ? -1 : n;
                        return t._getFileState(e).temp.xhrs[i];
                    },
                    _getXhrs: function(e) {
                        return t._getFileState(e).temp.xhrs;
                    },
                    _iterateResumeRecords: function(e) {
                        a && qq.each(localStorage, function(t, i) {
                            if (0 === t.indexOf(qq.format("qq{}resume-", n))) {
                                var s = JSON.parse(i);
                                e(t, s);
                            }
                        });
                    },
                    _initTempState: function(e) {
                        t._getFileState(e).temp = {
                            ajaxRequesters: {},
                            chunkProgress: {},
                            xhrs: {},
                            cachedChunks: {}
                        };
                    },
                    _markNotResumable: function(e) {
                        t._getFileState(e).notResumable = !0;
                    },
                    _maybeDeletePersistedChunkData: function(e) {
                        var n;
                        return !!(a && t.isResumable(e) && (n = t._getLocalStorageId(e)) && localStorage.getItem(n)) && (localStorage.removeItem(n), 
                        !0);
                    },
                    _maybePrepareForResume: function(e) {
                        var n, i, s = t._getFileState(e);
                        a && void 0 === s.key && (n = t._getLocalStorageId(e), (i = localStorage.getItem(n)) && (i = JSON.parse(i), 
                        h(i.uuid) ? t._markNotResumable(e) : (m(qq.format("Identified file with ID {} and name of {} as resumable.", e, l(e))), 
                        p(e, i.uuid), s.key = i.key, s.chunking = i.chunking, s.loaded = i.loaded, s.attemptingResume = !0, 
                        t.moveInProgressToRemaining(e))));
                    },
                    _maybePersistChunkedState: function(e) {
                        var n, i, s = t._getFileState(e);
                        a && t.isResumable(e) && (n = t._getLocalStorageId(e), i = {
                            name: l(e),
                            size: u(e),
                            uuid: c(e),
                            key: s.key,
                            chunking: s.chunking,
                            loaded: s.loaded,
                            lastUpdated: Date.now()
                        }, localStorage.setItem(n, JSON.stringify(i)));
                    },
                    _registerProgressHandler: function(e, n, i) {
                        var s = t._getXhr(e, n), o = l(e), r = {
                            simple: function(t, n) {
                                var i = u(e);
                                f(e, o, t === n ? i : t >= i ? i - 1 : t, i);
                            },
                            chunked: function(s, r) {
                                var a = t._getFileState(e).temp.chunkProgress, l = t._getFileState(e).loaded, c = s, d = r, h = u(e), p = c - (d - i), m = l;
                                a[n] = p, qq.each(a, function(e, t) {
                                    m += t;
                                }), f(e, o, m, h);
                            }
                        };
                        s.upload.onprogress = function(e) {
                            e.lengthComputable && r[null == i ? "simple" : "chunked"](e.loaded, e.total);
                        };
                    },
                    _registerXhr: function(e, n, i, s) {
                        var o = null == n ? -1 : n, r = t._getFileState(e).temp;
                        return r.xhrs = r.xhrs || {}, r.ajaxRequesters = r.ajaxRequesters || {}, r.xhrs[o] = i, 
                        s && (r.ajaxRequesters[o] = s), i;
                    },
                    _removeExpiredChunkingRecords: function() {
                        var e = o.recordsExpireIn;
                        t._iterateResumeRecords(function(t, n) {
                            var i = new Date(n.lastUpdated);
                            i.setDate(i.getDate() + e), i.getTime() <= Date.now() && (m("Removing expired resume record with key " + t), 
                            localStorage.removeItem(t));
                        });
                    },
                    _shouldChunkThisFile: function(e) {
                        var n = t._getFileState(e);
                        return n.chunking || t.reevaluateChunking(e), n.chunking.enabled;
                    }
                });
            }, qq.WindowReceiveMessage = function(e) {
                "use strict";
                var t = {};
                qq.extend({
                    log: function(e, t) {}
                }, e), qq.extend(this, {
                    receiveMessage: function(e, n) {
                        window.postMessage ? t[e] = qq(window).attach("message", function(e) {
                            n(e.data);
                        }) : log("iframe message passing not supported in this browser!", "error");
                    },
                    stopReceivingMessages: function(e) {
                        if (window.postMessage) {
                            var n = t[e];
                            n && n();
                        }
                    }
                });
            }, function() {
                "use strict";
                qq.uiPublicApi = {
                    clearStoredFiles: function() {
                        this._parent.prototype.clearStoredFiles.apply(this, arguments), this._templating.clearFiles();
                    },
                    addExtraDropzone: function(e) {
                        this._dnd && this._dnd.setupExtraDropzone(e);
                    },
                    removeExtraDropzone: function(e) {
                        if (this._dnd) return this._dnd.removeDropzone(e);
                    },
                    getItemByFileId: function(e) {
                        return this._templating.getFileContainer(e);
                    },
                    reset: function() {
                        this._parent.prototype.reset.apply(this, arguments), this._templating.reset(), !this._options.button && this._templating.getButton() && (this._defaultButtonId = this._createUploadButton({
                            element: this._templating.getButton()
                        }).getButtonId()), this._dnd && (this._dnd.dispose(), this._dnd = this._setupDragAndDrop()), 
                        this._totalFilesInBatch = 0, this._filesInBatchAddedToUi = 0, this._setupClickAndEditEventHandlers();
                    },
                    setName: function(e, t) {
                        var n = this._options.formatFileName(t);
                        this._parent.prototype.setName.apply(this, arguments), this._templating.updateFilename(e, n);
                    },
                    pauseUpload: function(e) {
                        var t = this._parent.prototype.pauseUpload.apply(this, arguments);
                        return t && this._templating.uploadPaused(e), t;
                    },
                    continueUpload: function(e) {
                        var t = this._parent.prototype.continueUpload.apply(this, arguments);
                        return t && this._templating.uploadContinued(e), t;
                    },
                    getId: function(e) {
                        return this._templating.getFileId(e);
                    },
                    getDropTarget: function(e) {
                        return this.getFile(e).qqDropTarget;
                    }
                }, qq.uiPrivateApi = {
                    _getButton: function(e) {
                        var t = this._parent.prototype._getButton.apply(this, arguments);
                        return t || e === this._defaultButtonId && (t = this._templating.getButton()), t;
                    },
                    _removeFileItem: function(e) {
                        this._templating.removeFile(e);
                    },
                    _setupClickAndEditEventHandlers: function() {
                        this._fileButtonsClickHandler = qq.FileButtonsClickHandler && this._bindFileButtonsClickEvent(), 
                        this._focusinEventSupported = !qq.firefox(), this._isEditFilenameEnabled() && (this._filenameClickHandler = this._bindFilenameClickEvent(), 
                        this._filenameInputFocusInHandler = this._bindFilenameInputFocusInEvent(), this._filenameInputFocusHandler = this._bindFilenameInputFocusEvent());
                    },
                    _setupDragAndDrop: function() {
                        var e = this, t = this._options.dragAndDrop.extraDropzones, n = this._templating, i = n.getDropZone();
                        return i && t.push(i), new qq.DragAndDrop({
                            dropZoneElements: t,
                            allowMultipleItems: this._options.multiple,
                            classes: {
                                dropActive: this._options.classes.dropActive
                            },
                            callbacks: {
                                processingDroppedFiles: function() {
                                    n.showDropProcessing();
                                },
                                processingDroppedFilesComplete: function(t, i) {
                                    n.hideDropProcessing(), qq.each(t, function(e, t) {
                                        t.qqDropTarget = i;
                                    }), t.length && e.addFiles(t, null, null);
                                },
                                dropError: function(t, n) {
                                    e._itemError(t, n);
                                },
                                dropLog: function(t, n) {
                                    e.log(t, n);
                                }
                            }
                        });
                    },
                    _bindFileButtonsClickEvent: function() {
                        var e = this;
                        return new qq.FileButtonsClickHandler({
                            templating: this._templating,
                            log: function(t, n) {
                                e.log(t, n);
                            },
                            onDeleteFile: function(t) {
                                e.deleteFile(t);
                            },
                            onCancel: function(t) {
                                e.cancel(t);
                            },
                            onRetry: function(t) {
                                qq(e._templating.getFileContainer(t)).removeClass(e._classes.retryable), e._templating.hideRetry(t), 
                                e.retry(t);
                            },
                            onPause: function(t) {
                                e.pauseUpload(t);
                            },
                            onContinue: function(t) {
                                e.continueUpload(t);
                            },
                            onGetName: function(t) {
                                return e.getName(t);
                            }
                        });
                    },
                    _isEditFilenameEnabled: function() {
                        return this._templating.isEditFilenamePossible() && !this._options.autoUpload && qq.FilenameClickHandler && qq.FilenameInputFocusHandler && qq.FilenameInputFocusHandler;
                    },
                    _filenameEditHandler: function() {
                        var e = this, t = this._templating;
                        return {
                            templating: t,
                            log: function(t, n) {
                                e.log(t, n);
                            },
                            onGetUploadStatus: function(t) {
                                return e.getUploads({
                                    id: t
                                }).status;
                            },
                            onGetName: function(t) {
                                return e.getName(t);
                            },
                            onSetName: function(t, n) {
                                e.setName(t, n);
                            },
                            onEditingStatusChange: function(e, n) {
                                var i = qq(t.getEditInput(e)), s = qq(t.getFileContainer(e));
                                n ? (i.addClass("qq-editing"), t.hideFilename(e), t.hideEditIcon(e)) : (i.removeClass("qq-editing"), 
                                t.showFilename(e), t.showEditIcon(e)), s.addClass("qq-temp").removeClass("qq-temp");
                            }
                        };
                    },
                    _onUploadStatusChange: function(e, t, n) {
                        this._parent.prototype._onUploadStatusChange.apply(this, arguments), this._isEditFilenameEnabled() && this._templating.getFileContainer(e) && n !== qq.status.SUBMITTED && (this._templating.markFilenameEditable(e), 
                        this._templating.hideEditIcon(e));
                    },
                    _bindFilenameInputFocusInEvent: function() {
                        var e = qq.extend({}, this._filenameEditHandler());
                        return new qq.FilenameInputFocusInHandler(e);
                    },
                    _bindFilenameInputFocusEvent: function() {
                        var e = qq.extend({}, this._filenameEditHandler());
                        return new qq.FilenameInputFocusHandler(e);
                    },
                    _bindFilenameClickEvent: function() {
                        var e = qq.extend({}, this._filenameEditHandler());
                        return new qq.FilenameClickHandler(e);
                    },
                    _storeForLater: function(e) {
                        this._parent.prototype._storeForLater.apply(this, arguments), this._templating.hideSpinner(e);
                    },
                    _onAllComplete: function(e, t) {
                        this._parent.prototype._onAllComplete.apply(this, arguments), this._templating.resetTotalProgress();
                    },
                    _onSubmit: function(e, t) {
                        var n = this.getFile(e);
                        n && n.qqPath && this._options.dragAndDrop.reportDirectoryPaths && this._paramsStore.addReadOnly(e, {
                            qqpath: n.qqPath
                        }), this._parent.prototype._onSubmit.apply(this, arguments), this._addToList(e, t);
                    },
                    _onSubmitted: function(e) {
                        this._isEditFilenameEnabled() && (this._templating.markFilenameEditable(e), this._templating.showEditIcon(e), 
                        this._focusinEventSupported || this._filenameInputFocusHandler.addHandler(this._templating.getEditInput(e)));
                    },
                    _onProgress: function(e, t, n, i) {
                        this._parent.prototype._onProgress.apply(this, arguments), this._templating.updateProgress(e, n, i), 
                        100 === Math.round(n / i * 100) ? (this._templating.hideCancel(e), this._templating.hidePause(e), 
                        this._templating.hideProgress(e), this._templating.setStatusText(e, this._options.text.waitingForResponse), 
                        this._displayFileSize(e)) : this._displayFileSize(e, n, i);
                    },
                    _onTotalProgress: function(e, t) {
                        this._parent.prototype._onTotalProgress.apply(this, arguments), this._templating.updateTotalProgress(e, t);
                    },
                    _onComplete: function(e, t, n, i) {
                        var s = this._parent.prototype._onComplete.apply(this, arguments), o = this._templating, r = o.getFileContainer(e), a = this;
                        function l(t) {
                            r && (o.setStatusText(e), qq(r).removeClass(a._classes.retrying), o.hideProgress(e), 
                            a._options.disableCancelForFormUploads && !qq.supportedFeatures.ajaxUploading || o.hideCancel(e), 
                            o.hideSpinner(e), t.success ? a._markFileAsSuccessful(e) : (qq(r).addClass(a._classes.fail), 
                            o.isRetryPossible() && !a._preventRetries[e] && (qq(r).addClass(a._classes.retryable), 
                            o.showRetry(e)), a._controlFailureTextDisplay(e, t)));
                        }
                        return s instanceof qq.Promise ? s.done(function(e) {
                            l(e);
                        }) : l(n), s;
                    },
                    _markFileAsSuccessful: function(e) {
                        var t = this._templating;
                        this._isDeletePossible() && t.showDeleteButton(e), qq(t.getFileContainer(e)).addClass(this._classes.success), 
                        this._maybeUpdateThumbnail(e);
                    },
                    _onUploadPrep: function(e) {
                        this._parent.prototype._onUploadPrep.apply(this, arguments), this._templating.showSpinner(e);
                    },
                    _onUpload: function(e, t) {
                        var n = this._parent.prototype._onUpload.apply(this, arguments);
                        return this._templating.showSpinner(e), n;
                    },
                    _onUploadChunk: function(e, t) {
                        this._parent.prototype._onUploadChunk.apply(this, arguments), t.partIndex > 0 && this._handler.isResumable(e) && this._templating.allowPause(e);
                    },
                    _onCancel: function(e, t) {
                        this._parent.prototype._onCancel.apply(this, arguments), this._removeFileItem(e), 
                        0 === this._getNotFinished() && this._templating.resetTotalProgress();
                    },
                    _onBeforeAutoRetry: function(e) {
                        var t, n, i;
                        this._parent.prototype._onBeforeAutoRetry.apply(this, arguments), this._showCancelLink(e), 
                        this._options.retry.showAutoRetryNote && (t = this._autoRetries[e], n = this._options.retry.maxAutoAttempts, 
                        i = (i = this._options.retry.autoRetryNote.replace(/\{retryNum\}/g, t)).replace(/\{maxAuto\}/g, n), 
                        this._templating.setStatusText(e, i), qq(this._templating.getFileContainer(e)).addClass(this._classes.retrying));
                    },
                    _onBeforeManualRetry: function(e) {
                        return this._parent.prototype._onBeforeManualRetry.apply(this, arguments) ? (this._templating.resetProgress(e), 
                        qq(this._templating.getFileContainer(e)).removeClass(this._classes.fail), this._templating.setStatusText(e), 
                        this._templating.showSpinner(e), this._showCancelLink(e), !0) : (qq(this._templating.getFileContainer(e)).addClass(this._classes.retryable), 
                        this._templating.showRetry(e), !1);
                    },
                    _onSubmitDelete: function(e) {
                        var t = qq.bind(this._onSubmitDeleteSuccess, this);
                        this._parent.prototype._onSubmitDelete.call(this, e, t);
                    },
                    _onSubmitDeleteSuccess: function(e, t, n) {
                        this._options.deleteFile.forceConfirm ? this._showDeleteConfirm.apply(this, arguments) : this._sendDeleteRequest.apply(this, arguments);
                    },
                    _onDeleteComplete: function(e, t, n) {
                        this._parent.prototype._onDeleteComplete.apply(this, arguments), this._templating.hideSpinner(e), 
                        n ? (this._templating.setStatusText(e, this._options.deleteFile.deletingFailedText), 
                        this._templating.showDeleteButton(e)) : this._removeFileItem(e);
                    },
                    _sendDeleteRequest: function(e, t, n) {
                        this._templating.hideDeleteButton(e), this._templating.showSpinner(e), this._templating.setStatusText(e, this._options.deleteFile.deletingStatusText), 
                        this._deleteHandler.sendDelete.apply(this, arguments);
                    },
                    _showDeleteConfirm: function(e, t, n) {
                        var i, s = this.getName(e), o = this._options.deleteFile.confirmMessage.replace(/\{filename\}/g, s), r = (this.getUuid(e), 
                        arguments), a = this;
                        i = this._options.showConfirm(o), qq.isGenericPromise(i) ? i.then(function() {
                            a._sendDeleteRequest.apply(a, r);
                        }) : !1 !== i && a._sendDeleteRequest.apply(a, r);
                    },
                    _addToList: function(e, t, n) {
                        var i, s, o = 0;
                        this._handler.isProxied(e) && this._options.scaling.hideScaled || (this._options.display.prependFiles && (this._totalFilesInBatch > 1 && this._filesInBatchAddedToUi > 0 && (o = this._filesInBatchAddedToUi - 1), 
                        i = {
                            index: o
                        }), n || (this._options.disableCancelForFormUploads && !qq.supportedFeatures.ajaxUploading && this._templating.disableCancel(), 
                        this._options.multiple || (s = this.getUploads({
                            id: e
                        }), this._handledProxyGroup = this._handledProxyGroup || s.proxyGroupId, s.proxyGroupId === this._handledProxyGroup && s.proxyGroupId || (this._handler.cancelAll(), 
                        this._clearList(), this._handledProxyGroup = null))), this._templating.addFile(e, this._options.formatFileName(t), i), 
                        n ? this._thumbnailUrls[e] && this._templating.updateThumbnail(e, this._thumbnailUrls[e], !0) : this._templating.generatePreview(e, this.getFile(e)), 
                        this._filesInBatchAddedToUi += 1, (n || this._options.display.fileSizeOnSubmit && qq.supportedFeatures.ajaxUploading) && this._displayFileSize(e));
                    },
                    _clearList: function() {
                        this._templating.clearFiles(), this.clearStoredFiles();
                    },
                    _displayFileSize: function(e, t, n) {
                        var i = this.getSize(e), s = this._formatSize(i);
                        i >= 0 && (void 0 !== t && void 0 !== n && (s = this._formatProgress(t, n)), this._templating.updateSize(e, s));
                    },
                    _formatProgress: function(e, t) {
                        var n = this._options.text.formatProgress;
                        function i(e, t) {
                            n = n.replace(e, t);
                        }
                        return i("{percent}", Math.round(e / t * 100)), i("{total_size}", this._formatSize(t)), 
                        n;
                    },
                    _controlFailureTextDisplay: function(e, t) {
                        var n, i, s, o, r;
                        n = this._options.failedUploadTextDisplay.mode, i = this._options.failedUploadTextDisplay.maxChars, 
                        s = this._options.failedUploadTextDisplay.responseProperty, "custom" === n ? ((o = t[s]) ? o.length > i && (r = o.substring(0, i) + "...") : o = this._options.text.failUpload, 
                        this._templating.setStatusText(e, r || o), this._options.failedUploadTextDisplay.enableTooltip && this._showTooltip(e, o)) : "default" === n ? this._templating.setStatusText(e, this._options.text.failUpload) : "none" !== n && this.log("failedUploadTextDisplay.mode value of '" + n + "' is not valid", "warn");
                    },
                    _showTooltip: function(e, t) {
                        this._templating.getFileContainer(e).title = t;
                    },
                    _showCancelLink: function(e) {
                        this._options.disableCancelForFormUploads && !qq.supportedFeatures.ajaxUploading || this._templating.showCancel(e);
                    },
                    _itemError: function(e, t, n) {
                        var i = this._parent.prototype._itemError.apply(this, arguments);
                        this._options.showMessage(i);
                    },
                    _batchError: function(e) {
                        this._parent.prototype._batchError.apply(this, arguments), this._options.showMessage(e);
                    },
                    _setupPastePrompt: function() {
                        var e = this;
                        this._options.callbacks.onPasteReceived = function() {
                            var t = e._options.paste.namePromptMessage, n = e._options.paste.defaultName;
                            return e._options.showPrompt(t, n);
                        };
                    },
                    _fileOrBlobRejected: function(e, t) {
                        this._totalFilesInBatch -= 1, this._parent.prototype._fileOrBlobRejected.apply(this, arguments);
                    },
                    _prepareItemsForUpload: function(e, t, n) {
                        this._totalFilesInBatch = e.length, this._filesInBatchAddedToUi = 0, this._parent.prototype._prepareItemsForUpload.apply(this, arguments);
                    },
                    _maybeUpdateThumbnail: function(e) {
                        var t = this._thumbnailUrls[e];
                        this._templating.updateThumbnail(e, t);
                    },
                    _addCannedFile: function(e) {
                        var t = this._parent.prototype._addCannedFile.apply(this, arguments);
                        return this._addToList(t, this.getName(t), !0), this._templating.hideSpinner(t), 
                        this._templating.hideCancel(t), this._markFileAsSuccessful(t), t;
                    },
                    _setSize: function(e, t) {
                        this._parent.prototype._setSize.apply(this, arguments), this._templating.updateSize(e, this._formatSize(t));
                    }
                };
            }(), qq.FineUploader = function(e, t) {
                "use strict";
                this._parent = t ? qq[t].FineUploaderBasic : qq.FineUploaderBasic, this._parent.apply(this, arguments), 
                qq.extend(this._options, {
                    element: null,
                    button: null,
                    listElement: null,
                    dragAndDrop: {
                        extraDropzones: [],
                        reportDirectoryPaths: !1
                    },
                    text: {
                        formatProgress: "{percent}% of {total_size}",
                        failUpload: "Upload failed",
                        waitingForResponse: "Processing...",
                        paused: "Paused"
                    },
                    template: "qq-template",
                    classes: {
                        retrying: "qq-upload-retrying",
                        retryable: "qq-upload-retryable",
                        success: "qq-upload-success",
                        fail: "qq-upload-fail",
                        editable: "qq-editable",
                        hide: "qq-hide",
                        dropActive: "qq-upload-drop-area-active"
                    },
                    failedUploadTextDisplay: {
                        mode: "default",
                        maxChars: 50,
                        responseProperty: "error",
                        enableTooltip: !0
                    },
                    messages: {
                        tooManyFilesError: "You may only drop one file",
                        unsupportedBrowser: "Unrecoverable error - this browser does not permit file uploading of any kind."
                    },
                    retry: {
                        showAutoRetryNote: !0,
                        autoRetryNote: "Retrying {retryNum}/{maxAuto}..."
                    },
                    deleteFile: {
                        forceConfirm: !1,
                        confirmMessage: "Are you sure you want to delete {filename}?",
                        deletingStatusText: "Deleting...",
                        deletingFailedText: "Delete failed"
                    },
                    display: {
                        fileSizeOnSubmit: !1,
                        prependFiles: !1
                    },
                    paste: {
                        promptForName: !1,
                        namePromptMessage: "Please name this image"
                    },
                    thumbnails: {
                        maxCount: 0,
                        placeholders: {
                            waitUntilResponse: !1,
                            notAvailablePath: null,
                            waitingPath: null
                        },
                        timeBetweenThumbs: 750
                    },
                    scaling: {
                        hideScaled: !1
                    },
                    showMessage: function(e) {
                        setTimeout(function() {
                            window.alert(e);
                        }, 0);
                    },
                    showConfirm: function(e) {
                        return window.confirm(e);
                    },
                    showPrompt: function(e, t) {
                        return window.prompt(e, t);
                    }
                }, !0), qq.extend(this._options, e, !0), this._templating = new qq.Templating({
                    log: qq.bind(this.log, this),
                    templateIdOrEl: this._options.template,
                    containerEl: this._options.element,
                    fileContainerEl: this._options.listElement,
                    button: this._options.button,
                    imageGenerator: this._imageGenerator,
                    classes: {
                        hide: this._options.classes.hide,
                        editable: this._options.classes.editable
                    },
                    limits: {
                        maxThumbs: this._options.thumbnails.maxCount,
                        timeBetweenThumbs: this._options.thumbnails.timeBetweenThumbs
                    },
                    placeholders: {
                        waitUntilUpdate: this._options.thumbnails.placeholders.waitUntilResponse,
                        thumbnailNotAvailable: this._options.thumbnails.placeholders.notAvailablePath,
                        waitingForThumbnail: this._options.thumbnails.placeholders.waitingPath
                    },
                    text: this._options.text
                }), this._options.workarounds.ios8SafariUploads && qq.ios800() && qq.iosSafari() ? this._templating.renderFailure(this._options.messages.unsupportedBrowserIos8Safari) : !qq.supportedFeatures.uploading || this._options.cors.expected && !qq.supportedFeatures.uploadCors ? this._templating.renderFailure(this._options.messages.unsupportedBrowser) : (this._wrapCallbacks(), 
                this._templating.render(), this._classes = this._options.classes, !this._options.button && this._templating.getButton() && (this._defaultButtonId = this._createUploadButton({
                    element: this._templating.getButton()
                }).getButtonId()), this._setupClickAndEditEventHandlers(), qq.DragAndDrop && qq.supportedFeatures.fileDrop && (this._dnd = this._setupDragAndDrop()), 
                this._options.paste.targetElement && this._options.paste.promptForName && (qq.PasteSupport ? this._setupPastePrompt() : this.log("Paste support module not found.", "error")), 
                this._totalFilesInBatch = 0, this._filesInBatchAddedToUi = 0);
            }, qq.extend(qq.FineUploader.prototype, qq.basePublicApi), qq.extend(qq.FineUploader.prototype, qq.basePrivateApi), 
            qq.extend(qq.FineUploader.prototype, qq.uiPublicApi), qq.extend(qq.FineUploader.prototype, qq.uiPrivateApi), 
            qq.Templating = function(e) {
                "use strict";
                var t, n, i, s, o, r, a, l, u = !1, c = 0, d = !1, h = [], p = -1, f = {
                    log: null,
                    limits: {
                        maxThumbs: 0,
                        timeBetweenThumbs: 750
                    },
                    templateIdOrEl: "qq-template",
                    containerEl: null,
                    fileContainerEl: null,
                    button: null,
                    imageGenerator: null,
                    classes: {
                        hide: "qq-hide",
                        editable: "qq-editable"
                    },
                    placeholders: {
                        waitUntilUpdate: !1,
                        thumbnailNotAvailable: null,
                        waitingForThumbnail: null
                    },
                    text: {
                        paused: "Paused"
                    }
                }, m = "qq-upload-button-selector", g = "qq-upload-drop-area-selector", v = "qq-upload-list-selector", b = "qq-progress-bar-container-selector", _ = "qq-progress-bar-selector", q = "qq-total-progress-bar-container-selector", y = "qq-total-progress-bar-selector", w = "qq-upload-file-selector", x = "qq-upload-spinner-selector", S = "qq-upload-size-selector", C = "qq-upload-cancel-selector", E = "qq-upload-pause-selector", P = "qq-upload-continue-selector", I = "qq-upload-delete-selector", T = "qq-upload-retry-selector", k = "qq-upload-status-text-selector", A = "qq-edit-filename-selector", F = "qq-edit-filename-icon-selector", D = "qq-drop-processing-selector", U = "qq-thumbnail-selector", R = {}, O = new qq.Promise(), B = new qq.Promise(), N = function(e) {
                    var t = new qq.Promise();
                    return B.then(function(n) {
                        te(n, e), e.src ? t.success() : (e.src = n.src, e.onload = function() {
                            e.onload = null, re(e), t.success();
                        });
                    }, function() {
                        ee(e), t.success();
                    }), t;
                }, j = function() {
                    if (h.length) {
                        d = !0;
                        var e = h.shift();
                        e.update ? se(e) : ie(e);
                    } else d = !1;
                }, M = function(e) {
                    return J(W(e), C);
                }, L = function(e) {
                    return J(W(e), P);
                }, z = function(e) {
                    return J(W(e), I);
                }, H = function() {
                    return J(o, D);
                }, $ = function(e) {
                    return J(W(e), F);
                }, W = function(e) {
                    return qq(r).getByClass("qq-file-id-" + e)[0];
                }, V = function(e) {
                    return J(W(e), w);
                }, G = function(e) {
                    return J(W(e), E);
                }, X = function(e) {
                    return null == e ? J(o, q) || J(o, y) : J(W(e), b) || J(W(e), _);
                }, K = function(e) {
                    return J(W(e), T);
                }, Y = function(e) {
                    return J(W(e), S);
                }, Z = function(e) {
                    return J(W(e), x);
                }, J = function(e, t) {
                    return e && qq(e).getByClass(t)[0];
                }, Q = function(e) {
                    return a && J(W(e), U);
                }, ee = function(e) {
                    e && qq(e).addClass(f.classes.hide);
                }, te = function(e, t) {
                    var n = e.style.maxWidth, i = e.style.maxHeight;
                    i && n && !t.style.maxWidth && !t.style.maxHeight && qq(t).css({
                        maxWidth: n,
                        maxHeight: i
                    });
                }, ne = function(e, t) {
                    var n = R[e] || new qq.Promise().failure(), i = new qq.Promise();
                    return O.then(function(e) {
                        n.then(function() {
                            i.success();
                        }, function() {
                            te(e, t), t.onload = function() {
                                t.onload = null, i.success();
                            }, t.src = e.src, re(t);
                        });
                    }), i;
                }, ie = function(e) {
                    var n = e.id, i = e.optFileOrBlob, s = i && i.qqThumbnailId, o = Q(n), r = {
                        maxSize: p,
                        scale: !0,
                        orient: !0
                    };
                    qq.supportedFeatures.imagePreviews ? o && (f.limits.maxThumbs && f.limits.maxThumbs <= c ? (ne(n, o), 
                    j()) : N(o).done(function() {
                        R[n] = new qq.Promise(), R[n].done(function() {
                            setTimeout(j, f.limits.timeBetweenThumbs);
                        }), null != s ? ae(n, s) : function(e, n, i) {
                            var s = Q(e);
                            t("Generating new thumbnail for " + e), n.qqThumbnailId = e, f.imageGenerator.generate(n, s, i).then(function() {
                                c++, re(s), R[e].success();
                            }, function() {
                                R[e].failure(), f.placeholders.waitUntilUpdate || ne(e, s);
                            });
                        }(n, i, r);
                    })) : o && (N(o), j());
                }, se = function(e) {
                    var t = e.id, n = e.thumbnailUrl, i = e.showWaitingImg, s = Q(t), o = {
                        maxSize: p,
                        scale: l
                    };
                    if (s) if (n) {
                        if (!(f.limits.maxThumbs && f.limits.maxThumbs <= c)) return i && N(s), f.imageGenerator.generate(n, s, o).then(function() {
                            re(s), c++, setTimeout(j, f.limits.timeBetweenThumbs);
                        }, function() {
                            ne(t, s), setTimeout(j, f.limits.timeBetweenThumbs);
                        });
                        ne(t, s), j();
                    } else ne(t, s), j();
                }, oe = function(e, t) {
                    var n = X(e), i = null == e ? y : _;
                    n && !qq(n).hasClass(i) && (n = qq(n).getByClass(i)[0]), n && qq(n).css({
                        width: t + "%"
                    });
                }, re = function(e) {
                    e && qq(e).removeClass(f.classes.hide);
                }, ae = function(e, n) {
                    var i = Q(e), s = Q(n);
                    t(qq.format("ID {} is the same file as ID {}.  Will use generated thumbnail from ID {} instead.", e, n, n)), 
                    R[n].then(function() {
                        c++, R[e].success(), t(qq.format("Now using previously generated thumbnail created for ID {} on ID {}.", n, e)), 
                        i.src = s.src, re(i);
                    }, function() {
                        R[e].failure(), f.placeholders.waitUntilUpdate || ne(e, i);
                    });
                };
                qq.extend(f, e), t = f.log, qq.supportedFeatures.imagePreviews || (f.limits.timeBetweenThumbs = 0, 
                f.limits.maxThumbs = 0), o = f.containerEl, a = void 0 !== f.imageGenerator, s = function() {
                    var e, s, o, r, u, c, d, h, b;
                    if (t("Parsing template"), null == f.templateIdOrEl) throw new Error("You MUST specify either a template element or ID!");
                    if (qq.isString(f.templateIdOrEl)) {
                        if (null === (e = document.getElementById(f.templateIdOrEl))) throw new Error(qq.format("Cannot find template script at ID '{}'!", f.templateIdOrEl));
                        s = e.innerHTML;
                    } else {
                        if (void 0 === f.templateIdOrEl.innerHTML) throw new Error("You have specified an invalid value for the template option!  It must be an ID or an Element.");
                        s = f.templateIdOrEl.innerHTML;
                    }
                    if (s = qq.trimStr(s), (r = document.createElement("div")).appendChild(qq.toElement(s)), 
                    f.button && (c = qq(r).getByClass(m)[0]) && qq(c).remove(), qq.DragAndDrop && qq.supportedFeatures.fileDrop || (b = qq(r).getByClass(D)[0]) && qq(b).remove(), 
                    (d = qq(r).getByClass(g)[0]) && !qq.DragAndDrop && (t("DnD module unavailable.", "info"), 
                    qq(d).remove()), d && !qq.supportedFeatures.fileDrop && qq(d).hasAttribute("qq-hide-dropzone") && qq(d).css({
                        display: "none"
                    }), h = qq(r).getByClass(U)[0], a ? h && (p = (p = parseInt(h.getAttribute("qq-max-size"))) > 0 ? p : null, 
                    l = qq(h).hasAttribute("qq-server-scale")) : h && qq(h).remove(), a = a && h, n = qq(r).getByClass(A).length > 0, 
                    i = qq(r).getByClass(T).length > 0, null == (o = qq(r).getByClass(v)[0])) throw new Error("Could not find the file list container in the template!");
                    return u = o.innerHTML, o.innerHTML = "", t("Template parsing complete"), {
                        template: qq.trimStr(r.innerHTML),
                        fileTemplate: qq.trimStr(u)
                    };
                }(), function() {
                    var e = f.placeholders.thumbnailNotAvailable, n = f.placeholders.waitingForThumbnail, i = {
                        maxSize: p,
                        scale: l
                    };
                    a && (e ? f.imageGenerator.generate(e, new Image(), i).then(function(e) {
                        O.success(e);
                    }, function() {
                        O.failure(), t("Problem loading 'not available' placeholder image at " + e, "error");
                    }) : O.failure(), n ? f.imageGenerator.generate(n, new Image(), i).then(function(e) {
                        B.success(e);
                    }, function() {
                        B.failure(), t("Problem loading 'waiting for thumbnail' placeholder image at " + n, "error");
                    }) : B.failure());
                }(), qq.extend(this, {
                    render: function() {
                        t("Rendering template in DOM."), c = 0, o.innerHTML = s.template, ee(H()), this.hideTotalProgress(), 
                        r = f.fileContainerEl || J(o, v), t("Template rendering complete");
                    },
                    renderFailure: function(e) {
                        var t = qq.toElement(e);
                        o.innerHTML = "", o.appendChild(t);
                    },
                    reset: function() {
                        this.render();
                    },
                    clearFiles: function() {
                        r.innerHTML = "";
                    },
                    disableCancel: function() {
                        u = !0;
                    },
                    addFile: function(e, t, n) {
                        var i, o, a, l, c, d = qq.toElement(s.fileTemplate), h = J(d, w);
                        qq(d).addClass("qq-file-id-" + e), h && qq(h).setText(t), d.setAttribute("qq-file-id", e), 
                        n ? (o = d, a = n.index, c = (l = r).firstChild, a > 0 && (c = qq(l).children()[a].nextSibling), 
                        l.insertBefore(o, c)) : r.appendChild(d), ee(X(e)), ee(Y(e)), ee(z(e)), ee(K(e)), 
                        ee(G(e)), ee(L(e)), u && this.hideCancel(e), (i = Q(e)) && !i.src && B.then(function(e) {
                            i.src = e.src, e.style.maxHeight && e.style.maxWidth && qq(i).css({
                                maxHeight: e.style.maxHeight,
                                maxWidth: e.style.maxWidth
                            }), re(i);
                        });
                    },
                    removeFile: function(e) {
                        qq(W(e)).remove();
                    },
                    getFileId: function(e) {
                        var t = e;
                        if (t) {
                            for (;null == t.getAttribute("qq-file-id"); ) t = t.parentNode;
                            return parseInt(t.getAttribute("qq-file-id"));
                        }
                    },
                    getFileList: function() {
                        return r;
                    },
                    markFilenameEditable: function(e) {
                        var t = V(e);
                        t && qq(t).addClass(f.classes.editable);
                    },
                    updateFilename: function(e, t) {
                        var n = V(e);
                        n && qq(n).setText(t);
                    },
                    hideFilename: function(e) {
                        ee(V(e));
                    },
                    showFilename: function(e) {
                        re(V(e));
                    },
                    isFileName: function(e) {
                        return qq(e).hasClass(w);
                    },
                    getButton: function() {
                        return f.button || J(o, m);
                    },
                    hideDropProcessing: function() {
                        ee(H());
                    },
                    showDropProcessing: function() {
                        re(H());
                    },
                    getDropZone: function() {
                        return J(o, g);
                    },
                    isEditFilenamePossible: function() {
                        return n;
                    },
                    hideRetry: function(e) {
                        ee(K(e));
                    },
                    isRetryPossible: function() {
                        return i;
                    },
                    showRetry: function(e) {
                        re(K(e));
                    },
                    getFileContainer: function(e) {
                        return W(e);
                    },
                    showEditIcon: function(e) {
                        var t = $(e);
                        t && qq(t).addClass(f.classes.editable);
                    },
                    hideEditIcon: function(e) {
                        var t = $(e);
                        t && qq(t).removeClass(f.classes.editable);
                    },
                    isEditIcon: function(e) {
                        return qq(e).hasClass(F);
                    },
                    getEditInput: function(e) {
                        return J(W(e), A);
                    },
                    isEditInput: function(e) {
                        return qq(e).hasClass(A);
                    },
                    updateProgress: function(e, t, n) {
                        var i, s = X(e);
                        s && n > 0 && (100 === (i = Math.round(t / n * 100)) ? ee(s) : re(s), oe(e, i));
                    },
                    updateTotalProgress: function(e, t) {
                        this.updateProgress(null, e, t);
                    },
                    hideProgress: function(e) {
                        var t = X(e);
                        t && ee(t);
                    },
                    hideTotalProgress: function() {
                        this.hideProgress();
                    },
                    resetProgress: function(e) {
                        oe(e, 0), this.hideTotalProgress(e);
                    },
                    resetTotalProgress: function() {
                        this.resetProgress();
                    },
                    showCancel: function(e) {
                        if (!u) {
                            var t = M(e);
                            t && qq(t).removeClass(f.classes.hide);
                        }
                    },
                    hideCancel: function(e) {
                        ee(M(e));
                    },
                    isCancel: function(e) {
                        return qq(e).hasClass(C);
                    },
                    allowPause: function(e) {
                        re(G(e)), ee(L(e));
                    },
                    uploadPaused: function(e) {
                        this.setStatusText(e, f.text.paused), this.allowContinueButton(e), ee(Z(e));
                    },
                    hidePause: function(e) {
                        ee(G(e));
                    },
                    isPause: function(e) {
                        return qq(e).hasClass(E);
                    },
                    isContinueButton: function(e) {
                        return qq(e).hasClass(P);
                    },
                    allowContinueButton: function(e) {
                        re(L(e)), ee(G(e));
                    },
                    uploadContinued: function(e) {
                        this.setStatusText(e, ""), this.allowPause(e), re(Z(e));
                    },
                    showDeleteButton: function(e) {
                        re(z(e));
                    },
                    hideDeleteButton: function(e) {
                        ee(z(e));
                    },
                    isDeleteButton: function(e) {
                        return qq(e).hasClass(I);
                    },
                    isRetry: function(e) {
                        return qq(e).hasClass(T);
                    },
                    updateSize: function(e, t) {
                        var n = Y(e);
                        n && (re(n), qq(n).setText(t));
                    },
                    setStatusText: function(e, t) {
                        var n = J(W(e), k);
                        n && (null == t ? qq(n).clearText() : qq(n).setText(t));
                    },
                    hideSpinner: function(e) {
                        ee(Z(e));
                    },
                    showSpinner: function(e) {
                        re(Z(e));
                    },
                    generatePreview: function(e, t) {
                        h.push({
                            id: e,
                            optFileOrBlob: t
                        }), !d && j();
                    },
                    updateThumbnail: function(e, t, n) {
                        h.push({
                            update: !0,
                            id: e,
                            thumbnailUrl: t,
                            showWaitingImg: n
                        }), !d && j();
                    }
                });
            }, qq.traditional = qq.traditional || {}, qq.traditional.FormUploadHandler = function(e, t) {
                "use strict";
                var n = this, i = t.getName, s = t.getUuid, o = t.log;
                this.uploadFile = function(t) {
                    var r, a = n.getInput(t), l = n._createIframe(t), u = new qq.Promise();
                    return (r = function(t, o) {
                        var r = e.paramsStore.get(t), a = e.demoMode ? "GET" : "POST", l = e.endpointStore.get(t), u = i(t);
                        return r[e.uuidName] = s(t), r[e.filenameParam] = u, n._initFormForUpload({
                            method: a,
                            endpoint: l,
                            params: r,
                            paramsInBody: e.paramsInBody,
                            targetName: o.name
                        });
                    }(t, l)).appendChild(a), n._attachLoadEvent(l, function(i) {
                        o("iframe loaded");
                        var s = i || function(e, t) {
                            var i, s, r;
                            try {
                                r = (s = t.contentDocument || t.contentWindow.document).body.innerHTML, o("converting iframe's innerHTML to JSON"), 
                                o("innerHTML = " + r), r && r.match(/^<pre/i) && (r = s.body.firstChild.firstChild.nodeValue), 
                                i = n._parseJsonResponse(r);
                            } catch (e) {
                                o("Error when attempting to parse form upload response (" + e.message + ")", "error"), 
                                i = {
                                    success: !1
                                };
                            }
                            return i;
                        }(0, l);
                        n._detachLoadEvent(t), e.cors.expected || qq(l).remove(), s.success ? u.success(s) : u.failure(s);
                    }), o("Sending upload request for " + t), r.submit(), qq(r).remove(), u;
                }, qq.extend(this, new qq.FormUploadHandler({
                    options: {
                        isCors: e.cors.expected,
                        inputName: e.inputName
                    },
                    proxy: {
                        onCancel: e.onCancel,
                        getName: i,
                        getUuid: s,
                        log: o
                    }
                }));
            }, qq.traditional = qq.traditional || {}, qq.traditional.XhrUploadHandler = function(e, t) {
                "use strict";
                var n = this, i = t.getName, s = t.getSize, o = t.getUuid, r = t.log, a = e.forceMultipart || e.paramsInBody, l = new qq.traditional.AllChunksDoneAjaxRequester({
                    cors: e.cors,
                    endpoint: e.chunking.success.endpoint,
                    log: r
                }), u = function(e, t) {
                    var n = new qq.Promise();
                    return t.onreadystatechange = function() {
                        if (4 === t.readyState) {
                            var i = c(e, t);
                            i.success ? n.success(i.response, t) : n.failure(i.response, t);
                        }
                    }, n;
                }, c = function(e, t) {
                    var n;
                    return r("xhr - server response received for " + e), r("responseText = " + t.responseText), 
                    {
                        success: !function(e, t) {
                            return e.status < 200 || e.status > 299 || !1 === t.success || !Object.keys(t).length || t.reset;
                        }(t, n = d(!0, t)),
                        response: n
                    };
                }, d = function(e, t) {
                    var n = {};
                    try {
                        r(qq.format("Received response status {} with body: {}", t.status, t.responseText)), 
                        n = qq.parseJson(t.responseText);
                    } catch (t) {
                        e && r("Error when attempting to parse xhr response text (" + t.message + ")", "error");
                    }
                    return n;
                }, h = function(t) {
                    var r = new qq.Promise();
                    return l.complete(t, n._createXhr(t), function(t) {
                        var r = e.paramsStore.get(t), a = i(t), l = s(t);
                        return r[e.uuidName] = o(t), r[e.filenameParam] = a, r[e.totalFileSizeName] = l, 
                        r[e.chunking.paramNames.totalParts] = n._getTotalChunks(t), r;
                    }(t), e.customHeaders.get(t)).then(function(e) {
                        r.success(d(!1, e), e);
                    }, function(e) {
                        r.failure(d(!1, e), e);
                    }), r;
                }, p = function(t, n, r, l) {
                    var u = new FormData(), c = e.paramsStore.method || (e.demoMode ? "GET" : "POST"), d = e.endpointStore.get(l), h = i(l), p = s(l);
                    return t[e.uuidName] = o(l), t[e.filenameParam] = h, a && (t[e.totalFileSizeName] = p), 
                    e.paramsInBody || (a || (t[e.inputName] = h), d = qq.obj2url(t, d)), n.open(c, d, !0), 
                    e.cors.expected && e.cors.sendCredentials && (n.withCredentials = !0), a ? (e.paramsInBody && qq.obj2FormData(t, u), 
                    u.append(e.inputName, r), u) : r;
                }, f = function(t, i) {
                    var s = e.customHeaders.get(t), o = n.getFile(t);
                    i.setRequestHeader("Accept", "application/json"), i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), 
                    i.setRequestHeader("Cache-Control", "no-cache"), a || (i.setRequestHeader("Content-Type", "application/octet-stream"), 
                    i.setRequestHeader("X-Mime-Type", o.type)), qq.each(s, function(e, t) {
                        i.setRequestHeader(e, t);
                    });
                };
                qq.extend(this, {
                    uploadChunk: function(t, o, r) {
                        var l, c, d, h = n._getChunkData(t, o), m = n._createXhr(t, o);
                        s(t);
                        return l = u(t, m), n._registerProgressHandler(t, o, h.size), function(t, n, o) {
                            var r = s(t), l = i(t);
                            n[e.chunking.paramNames.partIndex] = o.part, n[e.chunking.paramNames.partByteOffset] = o.start, 
                            n[e.chunking.paramNames.chunkSize] = o.size, n[e.chunking.paramNames.totalParts] = o.count, 
                            n[e.totalFileSizeName] = r, a && (n[e.filenameParam] = l);
                        }(t, d = e.paramsStore.get(t), h), r && (d[e.resume.paramNames.resuming] = !0), 
                        c = p(d, m, h.blob, t), f(t, m), m.send(c), l;
                    },
                    uploadFile: function(t) {
                        var i, s, o, r, a = n.getFile(t);
                        return s = n._createXhr(t), n._registerProgressHandler(t), i = u(t, s), o = e.paramsStore.get(t), 
                        r = p(o, s, a, t), f(t, s), s.send(r), i;
                    }
                }), qq.extend(this, new qq.XhrUploadHandler({
                    options: qq.extend({
                        namespace: "traditional"
                    }, e),
                    proxy: qq.extend({
                        getEndpoint: e.endpointStore.get
                    }, t)
                })), qq.override(this, function(t) {
                    return {
                        finalizeChunks: function(n) {
                            return e.chunking.success.endpoint ? h(n) : t.finalizeChunks(n, qq.bind(d, this, !0));
                        }
                    };
                });
            }, qq.traditional.AllChunksDoneAjaxRequester = function(e) {
                "use strict";
                var t, n, i = {
                    cors: {
                        allowXdr: !1,
                        expected: !1,
                        sendCredentials: !1
                    },
                    endpoint: null,
                    log: function(e, t) {}
                }, s = {}, o = {
                    get: function(e) {
                        return i.endpoint;
                    }
                };
                qq.extend(i, e), t = qq.extend(this, new qq.AjaxRequester({
                    acceptHeader: "application/json",
                    validMethods: [ "POST" ],
                    method: "POST",
                    successfulResponseCodes: (n = {
                        POST: [ 200, 201, 202 ]
                    }, n),
                    endpointStore: o,
                    allowXRequestedWithAndCacheControl: !1,
                    cors: i.cors,
                    log: i.log,
                    onComplete: function(e, t, n) {
                        var i = s[e];
                        delete s[e], n ? i.failure(t) : i.success(t);
                    }
                })), qq.extend(this, {
                    complete: function(e, n, o, r) {
                        var a = new qq.Promise();
                        return i.log("Submitting All Chunks Done request for " + e), s[e] = a, t.initTransport(e).withParams(o).withHeaders(r).send(n), 
                        a;
                    }
                });
            }, qq.PasteSupport = function(e) {
                "use strict";
                var t, n;
                t = {
                    targetElement: null,
                    callbacks: {
                        log: function(e, t) {},
                        pasteReceived: function(e) {}
                    }
                }, qq.extend(t, e), n = qq(t.targetElement).attach("paste", function(e) {
                    var n = e.clipboardData;
                    n && qq.each(n.items, function(e, n) {
                        if (function(e) {
                            return e.type && 0 === e.type.indexOf("image/");
                        }(n)) {
                            var i = n.getAsFile();
                            t.callbacks.pasteReceived(i);
                        }
                    });
                }), qq.extend(this, {
                    reset: function() {
                        n && n();
                    }
                });
            }, qq.DragAndDrop = function(e) {
                "use strict";
                var t, n, i, s = "qq-hidezones", o = "qq-hide-dropzone", r = [], a = [], l = new qq.DisposeSupport();
                function u(e) {
                    var n = new qq.Promise();
                    return e.isFile ? e.file(function(t) {
                        var i = e.name, s = e.fullPath, o = s.indexOf(i);
                        "/" === (s = s.substr(0, o)).charAt(0) && (s = s.substr(1)), t.qqPath = s, a.push(t), 
                        n.success();
                    }, function(i) {
                        t.callbacks.dropLog("Problem parsing '" + e.fullPath + "'.  FileError code " + i.code + ".", "error"), 
                        n.failure();
                    }) : e.isDirectory && function e(t, n, i, s) {
                        var o = s || new qq.Promise(), r = n || t.createReader();
                        r.readEntries(function(n) {
                            var s = i ? i.concat(n) : n;
                            n.length ? setTimeout(function() {
                                e(t, r, s, o);
                            }, 0) : o.success(s);
                        }, o.failure);
                        return o;
                    }(e).then(function(e) {
                        var t = e.length;
                        qq.each(e, function(e, i) {
                            u(i).done(function() {
                                0 === (t -= 1) && n.success();
                            });
                        }), e.length || n.success();
                    }, function(i) {
                        t.callbacks.dropLog("Problem parsing '" + e.fullPath + "'.  FileError code " + i.code + ".", "error"), 
                        n.failure();
                    }), n;
                }
                function c(e) {
                    var n = new qq.UploadDropZone({
                        HIDE_ZONES_EVENT_NAME: s,
                        element: e,
                        onEnter: function(n) {
                            qq(e).addClass(t.classes.dropActive), n.stopPropagation();
                        },
                        onLeaveNotDescendants: function(n) {
                            qq(e).removeClass(t.classes.dropActive);
                        },
                        onDrop: function(e) {
                            var i, s, o, r;
                            (i = e.dataTransfer, s = n, o = [], r = new qq.Promise(), t.callbacks.processingDroppedFiles(), 
                            s.dropDisabled(!0), i.files.length > 1 && !t.allowMultipleItems ? (t.callbacks.processingDroppedFilesComplete([]), 
                            t.callbacks.dropError("tooManyFilesError", ""), s.dropDisabled(!1), r.failure()) : (a = [], 
                            qq.isFolderDropSupported(i) ? qq.each(i.items, function(e, t) {
                                var n = t.webkitGetAsEntry();
                                n && (n.isFile ? a.push(t.getAsFile()) : o.push(u(n).done(function() {
                                    o.pop(), 0 === o.length && r.success();
                                })));
                            }) : a = i.files, 0 === o.length && r.success()), r).then(function() {
                                var e, i, s;
                                e = a, i = n, s = Array.prototype.slice.call(e), t.callbacks.dropLog("Grabbed " + e.length + " dropped files."), 
                                i.dropDisabled(!1), t.callbacks.processingDroppedFilesComplete(s, i.getElement());
                            }, function() {
                                t.callbacks.dropLog("Drop event DataTransfer parsing failed.  No files will be uploaded.", "error");
                            });
                        }
                    });
                    return l.addDisposer(function() {
                        n.dispose();
                    }), qq(e).hasAttribute(o) && qq(e).hide(), r.push(n), n;
                }
                t = {
                    dropZoneElements: [],
                    allowMultipleItems: !0,
                    classes: {
                        dropActive: null
                    },
                    callbacks: new qq.DragAndDrop.callbacks()
                }, qq.extend(t, e, !0), n = t.dropZoneElements, i = function() {
                    setTimeout(function() {
                        qq.each(n, function(e, n) {
                            qq(n).hasAttribute(o) && qq(n).hide(), qq(n).removeClass(t.classes.dropActive);
                        });
                    }, 10);
                }, qq.each(n, function(e, t) {
                    var i = c(t);
                    n.length && qq.supportedFeatures.fileDrop && l.attach(document, "dragenter", function(e) {
                        var t, s;
                        !i.dropDisabled() && (t = e, qq.each(t.dataTransfer.types, function(e, t) {
                            if ("Files" === t) return s = !0, !1;
                        }), s) && qq.each(n, function(e, t) {
                            t instanceof HTMLElement && qq(t).hasAttribute(o) && qq(t).css({
                                display: "block"
                            });
                        });
                    });
                }), l.attach(document, "dragleave", function(e) {
                    (function(e) {
                        return qq.firefox() ? !e.relatedTarget : qq.safari() ? e.x < 0 || e.y < 0 : 0 === e.x && 0 === e.y;
                    })(e) && i();
                }), l.attach(qq(document).children()[0], "mouseenter", function(e) {
                    i();
                }), l.attach(document, "drop", function(e) {
                    e.preventDefault(), i();
                }), l.attach(document, s, i), qq.extend(this, {
                    setupExtraDropzone: function(e) {
                        t.dropZoneElements.push(e), c(e);
                    },
                    removeDropzone: function(e) {
                        var n, i = t.dropZoneElements;
                        for (n in i) if (i[n] === e) return i.splice(n, 1);
                    },
                    dispose: function() {
                        l.dispose(), qq.each(r, function(e, t) {
                            t.dispose();
                        });
                    }
                });
            }, qq.DragAndDrop.callbacks = function() {
                "use strict";
                return {
                    processingDroppedFiles: function() {},
                    processingDroppedFilesComplete: function(e, t) {},
                    dropError: function(e, t) {
                        qq.log("Drag & drop error code '" + e + " with these specifics: '" + t + "'", "error");
                    },
                    dropLog: function(e, t) {
                        qq.log(e, t);
                    }
                };
            }, qq.UploadDropZone = function(e) {
                "use strict";
                var t, n, i, s, o = new qq.DisposeSupport();
                function r(e) {
                    if (!qq.supportedFeatures.fileDrop) return !1;
                    var t, n = e.dataTransfer, i = qq.safari();
                    return t = !(!qq.ie() || !qq.supportedFeatures.fileDrop) || "none" !== n.effectAllowed, 
                    n && t && (n.files || !i && n.types.contains && n.types.contains("Files"));
                }
                function a(e) {
                    return void 0 !== e && (i = e), i;
                }
                t = {
                    element: null,
                    onEnter: function(e) {},
                    onLeave: function(e) {},
                    onLeaveNotDescendants: function(e) {},
                    onDrop: function(e) {}
                }, qq.extend(t, e), n = t.element, s || (function() {
                    return qq.safari() || qq.firefox() && qq.windows();
                } ? o.attach(document, "dragover", function(e) {
                    e.preventDefault();
                }) : o.attach(document, "dragover", function(e) {
                    e.dataTransfer && (e.dataTransfer.dropEffect = "none", e.preventDefault());
                }), s = !0), o.attach(n, "dragover", function(e) {
                    if (r(e)) {
                        var t = qq.ie() && qq.supportedFeatures.fileDrop ? null : e.dataTransfer.effectAllowed;
                        e.dataTransfer.dropEffect = "move" === t || "linkMove" === t ? "move" : "copy", 
                        e.stopPropagation(), e.preventDefault();
                    }
                }), o.attach(n, "dragenter", function(e) {
                    if (!a()) {
                        if (!r(e)) return;
                        t.onEnter(e);
                    }
                }), o.attach(n, "dragleave", function(e) {
                    if (r(e)) {
                        t.onLeave(e);
                        var n = document.elementFromPoint(e.clientX, e.clientY);
                        qq(this).contains(n) || t.onLeaveNotDescendants(e);
                    }
                }), o.attach(n, "drop", function(e) {
                    if (!a()) {
                        if (!r(e)) return;
                        e.preventDefault(), e.stopPropagation(), t.onDrop(e), function() {
                            var e;
                            function n() {
                                (e = document.createEvent("Event")).initEvent(t.HIDE_ZONES_EVENT_NAME, !0, !0);
                            }
                            if (window.CustomEvent) try {
                                e = new CustomEvent(t.HIDE_ZONES_EVENT_NAME);
                            } catch (e) {
                                n();
                            } else n();
                            document.dispatchEvent(e);
                        }();
                    }
                }), qq.extend(this, {
                    dropDisabled: function(e) {
                        return a(e);
                    },
                    dispose: function() {
                        o.dispose();
                    },
                    getElement: function() {
                        return n;
                    }
                });
            }, qq.DeleteFileAjaxRequester = function(e) {
                "use strict";
                var t, n = {
                    method: "DELETE",
                    uuidParamName: "qquuid",
                    endpointStore: {},
                    maxConnections: 3,
                    customHeaders: function(e) {
                        return {};
                    },
                    paramsStore: {},
                    demoMode: !1,
                    cors: {
                        expected: !1,
                        sendCredentials: !1
                    },
                    log: function(e, t) {},
                    onDelete: function(e) {},
                    onDeleteComplete: function(e, t, n) {}
                };
                qq.extend(n, e), t = qq.extend(this, new qq.AjaxRequester({
                    acceptHeader: "application/json",
                    validMethods: [ "POST", "DELETE" ],
                    method: n.method,
                    endpointStore: n.endpointStore,
                    paramsStore: n.paramsStore,
                    mandatedParams: "POST" === n.method.toUpperCase() ? {
                        _method: "DELETE"
                    } : {},
                    maxConnections: n.maxConnections,
                    customHeaders: function(e) {
                        return n.customHeaders.get(e);
                    },
                    demoMode: n.demoMode,
                    log: n.log,
                    onSend: n.onDelete,
                    onComplete: n.onDeleteComplete,
                    cors: n.cors
                })), qq.extend(this, {
                    sendDelete: function(e, i, s) {
                        var o = s || {};
                        n.log("Submitting delete file request for " + e), "DELETE" === n.method ? t.initTransport(e).withPath(i).withParams(o).send() : (o[n.uuidParamName] = i, 
                        t.initTransport(e).withParams(o).send());
                    }
                });
            }, function() {
                function e(e, t, n, i) {
                    var s, o = e.naturalWidth, r = e.naturalHeight, a = n.width, l = n.height, u = t.getContext("2d");
                    u.save(), qq.supportedFeatures.unlimitedScaledImageSize || (s = function(e) {
                        if (!qq.ios()) throw new qq.Error("Downsampled dimensions can only be reliably calculated for iOS!");
                        if (e.origHeight * e.origWidth > 5241e3) return {
                            newHeight: Math.round(Math.sqrt(e.origHeight / e.origWidth * 5241e3)),
                            newWidth: Math.round(Math.sqrt(e.origWidth / e.origHeight * 5241e3))
                        };
                    }({
                        origWidth: a,
                        origHeight: l
                    })) && (qq.log(qq.format("Had to reduce dimensions due to device limitations from {}w / {}h to {}w / {}h", a, l, s.newWidth, s.newHeight), "warn"), 
                    a = s.newWidth, l = s.newHeight), function(e, t, n, i) {
                        switch (i) {
                          case 5:
                          case 6:
                          case 7:
                          case 8:
                            e.width = n, e.height = t;
                            break;

                          default:
                            e.width = t, e.height = n;
                        }
                        var s = e.getContext("2d");
                        switch (i) {
                          case 2:
                            s.translate(t, 0), s.scale(-1, 1);
                            break;

                          case 3:
                            s.translate(t, n), s.rotate(Math.PI);
                            break;

                          case 4:
                            s.translate(0, n), s.scale(1, -1);
                            break;

                          case 5:
                            s.rotate(.5 * Math.PI), s.scale(1, -1);
                            break;

                          case 6:
                            s.rotate(.5 * Math.PI), s.translate(0, -n);
                            break;

                          case 7:
                            s.rotate(.5 * Math.PI), s.translate(t, -n), s.scale(-1, 1);
                            break;

                          case 8:
                            s.rotate(-.5 * Math.PI), s.translate(-t, 0);
                        }
                    }(t, a, l, n.orientation), qq.ios() ? function() {
                        (function(e) {
                            var t, n = e.naturalWidth, i = e.naturalHeight, s = document.createElement("canvas");
                            return n * i > 1048576 && (s.width = s.height = 1, (t = s.getContext("2d")).drawImage(e, 1 - n, 0), 
                            0 === t.getImageData(0, 0, 1, 1).data[3]);
                        })(e) && (o /= 2, r /= 2);
                        var t, n, s, c = 1024, d = document.createElement("canvas"), h = i ? function(e, t, n) {
                            var i, s, o, r = document.createElement("canvas"), a = 0, l = n, u = n;
                            for (r.width = 1, r.height = n, (i = r.getContext("2d")).drawImage(e, 0, 0), s = i.getImageData(0, 0, 1, n).data; u > a; ) 0 === s[4 * (u - 1) + 3] ? l = u : a = u, 
                            u = l + a >> 1;
                            return 0 == (o = u / n) ? 1 : o;
                        }(e, 0, r) : 1, p = Math.ceil(c * a / o), f = Math.ceil(c * l / r / h), m = 0, g = 0;
                        for (d.width = d.height = c, t = d.getContext("2d"); m < r; ) {
                            for (n = 0, s = 0; n < o; ) t.clearRect(0, 0, c, c), t.drawImage(e, -n, -m), u.drawImage(d, 0, 0, c, c, s, g, p, f), 
                            n += c, s += p;
                            m += c, g += f;
                        }
                        u.restore(), d = t = null;
                    }() : u.drawImage(e, 0, 0, a, l), t.qqImageRendered && t.qqImageRendered();
                }
                function t(e, t) {
                    var n = this;
                    window.Blob && e instanceof Blob && function() {
                        var t = new Image(), i = window.URL && window.URL.createObjectURL ? window.URL : window.webkitURL && window.webkitURL.createObjectURL ? window.webkitURL : null;
                        if (!i) throw Error("No createObjectURL function found to create blob url");
                        t.src = i.createObjectURL(e), n.blob = e, e = t;
                    }(), e.naturalWidth || e.naturalHeight || (e.onload = function() {
                        var e = n.imageLoadListeners;
                        e && (n.imageLoadListeners = null, setTimeout(function() {
                            for (var t = 0, n = e.length; t < n; t++) e[t]();
                        }, 0));
                    }, e.onerror = t, this.imageLoadListeners = []), this.srcImage = e;
                }
                t.prototype.render = function(t, n) {
                    n = n || {};
                    var i, s, o = this, r = this.srcImage.naturalWidth, a = this.srcImage.naturalHeight, l = n.width, u = n.height, c = n.maxWidth, d = n.maxHeight, h = !this.blob || "image/jpeg" === this.blob.type, p = t.tagName.toLowerCase();
                    this.imageLoadListeners ? this.imageLoadListeners.push(function() {
                        o.render(t, n);
                    }) : (l && !u ? u = a * l / r << 0 : u && !l ? l = r * u / a << 0 : (l = r, u = a), 
                    c && l > c && (u = a * (l = c) / r << 0), d && u > d && (l = r * (u = d) / a << 0), 
                    i = {
                        width: l,
                        height: u
                    }, qq.each(n, function(e, t) {
                        i[e] = t;
                    }), "img" === p ? (s = t.src, t.src = function(t, n, i) {
                        var s = document.createElement("canvas"), o = n.mime || "image/jpeg";
                        return e(t, s, n, i), s.toDataURL(o, n.quality || .8);
                    }(o.srcImage, i, h), s === t.src && t.onload()) : "canvas" === p && e(this.srcImage, t, i, h), 
                    "function" == typeof this.onrender && this.onrender(t));
                }, qq.MegaPixImage = t;
            }(), qq.ImageGenerator = function(e) {
                "use strict";
                function t(e) {
                    return "img" === e.tagName.toLowerCase();
                }
                function n(e) {
                    return "canvas" === e.tagName.toLowerCase();
                }
                function i(e) {
                    var t, n, i, s = document.createElement("a");
                    return s.href = e, t = s.protocol, i = s.port, n = s.hostname, t.toLowerCase() !== window.location.protocol.toLowerCase() || (n.toLowerCase() !== window.location.hostname.toLowerCase() || i !== window.location.port && !qq.ie());
                }
                function s(i, s) {
                    var o = t(i) || n(i);
                    return t(i) ? function(t, n) {
                        t.onload = function() {
                            t.onload = null, t.onerror = null, n.success(t);
                        }, t.onerror = function() {
                            t.onload = null, t.onerror = null, e("Problem drawing thumbnail!", "error"), n.failure(t, "Problem drawing thumbnail!");
                        };
                    }(i, s) : n(i) ? function(e, t) {
                        e.qqImageRendered = function() {
                            t.success(e);
                        };
                    }(i, s) : (s.failure(i), e(qq.format("Element container of type {} is not supported!", i.tagName), "error")), 
                    o;
                }
                function o(e, t, n, o) {
                    var r = new Image(), a = new qq.Promise();
                    s(r, a), i(e) && (r.crossOrigin = "anonymous"), r.src = e, a.then(function() {
                        s(t, n), new qq.MegaPixImage(r).render(t, {
                            maxWidth: o,
                            maxHeight: o,
                            mime: function(e) {
                                var t = e.split("/"), n = t[t.length - 1], i = qq.getExtension(n);
                                switch (i = i && i.toLowerCase()) {
                                  case "jpeg":
                                  case "jpg":
                                    return "image/jpeg";

                                  case "png":
                                    return "image/png";

                                  case "bmp":
                                    return "image/bmp";

                                  case "gif":
                                    return "image/gif";

                                  case "tiff":
                                  case "tif":
                                    return "image/tiff";
                                }
                            }(e)
                        });
                    }, n.failure);
                }
                function r(e, t, n, i) {
                    s(t, n), qq(t).css({
                        maxWidth: i + "px",
                        maxHeight: i + "px"
                    }), t.src = e;
                }
                function a(e, a, l) {
                    var u, c = new qq.Promise(), d = l.scale, h = d ? l.maxSize : null;
                    return d && t(a) ? (u = document.createElement("canvas")).getContext && u.getContext("2d") ? i(e) && void 0 === new Image().crossOrigin ? r(e, a, c, h) : o(e, a, c, h) : r(e, a, c, h) : n(a) ? o(e, a, c, h) : s(a, c) && (a.src = e), 
                    c;
                }
                qq.extend(this, {
                    generate: function(t, n, i) {
                        return qq.isString(t) ? (e("Attempting to update thumbnail based on server response."), 
                        a(t, n, i || {})) : (e("Attempting to draw client-side image preview."), function(t, n, i) {
                            var o = new qq.Promise(), r = new qq.Identify(t, e), a = i.maxSize, l = null == i.orient || i.orient, u = function() {
                                n.onerror = null, n.onload = null, e("Could not render preview, file may be too large!", "error"), 
                                o.failure(n, "Browser cannot render image!");
                            };
                            return r.isPreviewable().then(function(i) {
                                var r = {
                                    parse: function() {
                                        return new qq.Promise().success();
                                    }
                                }, c = l ? new qq.Exif(t, e) : r, d = new qq.MegaPixImage(t, u);
                                s(n, o) && c.parse().then(function(e) {
                                    var t = e && e.Orientation;
                                    d.render(n, {
                                        maxWidth: a,
                                        maxHeight: a,
                                        orientation: t,
                                        mime: i
                                    });
                                }, function(t) {
                                    e(qq.format("EXIF data could not be parsed ({}).  Assuming orientation = 1.", t)), 
                                    d.render(n, {
                                        maxWidth: a,
                                        maxHeight: a,
                                        mime: i
                                    });
                                });
                            }, function() {
                                e("Not previewable"), o.failure(n, "Not previewable");
                            }), o;
                        }(t, n, i || {}));
                    }
                });
            }, qq.Exif = function(e, t) {
                "use strict";
                var n = [ 274 ], i = {
                    274: {
                        name: "Orientation",
                        bytes: 2
                    }
                };
                function s(e) {
                    for (var t = 0, n = 0; e.length > 0; ) t += parseInt(e.substring(0, 2), 16) * Math.pow(2, n), 
                    e = e.substring(2, e.length), n += 8;
                    return t;
                }
                function o() {
                    var t = new qq.Promise();
                    return qq.readBlobToHex(e, 0, 6).then(function(n) {
                        0 !== n.indexOf("ffd8") ? t.failure("Not a valid JPEG!") : function t(n, i) {
                            var s = n, o = i;
                            return void 0 === s && (s = 2, o = new qq.Promise()), qq.readBlobToHex(e, s, 4).then(function(e) {
                                var n, i = /^ffe([0-9])/.exec(e);
                                i ? "1" !== i[1] ? (n = parseInt(e.slice(4, 8), 16), t(s + n + 2, o)) : o.success(s) : o.failure("No EXIF header to be found!");
                            }), o;
                        }().then(function(e) {
                            t.success(e);
                        }, function(e) {
                            t.failure(e);
                        });
                    }), t;
                }
                qq.extend(this, {
                    parse: function() {
                        var r = new qq.Promise(), a = function(e) {
                            t(qq.format("EXIF header parse failed: '{}' ", e)), r.failure(e);
                        };
                        return o().then(function(o) {
                            var l, u;
                            t(qq.format("Moving forward with EXIF header parsing for '{}'", void 0 === e.name ? "blob" : e.name)), 
                            (l = o, u = new qq.Promise(), qq.readBlobToHex(e, l + 10, 2).then(function(e) {
                                u.success("4949" === e);
                            }), u).then(function(l) {
                                t(qq.format("EXIF Byte order is {} endian", l ? "little" : "big")), function(t, n) {
                                    var i = new qq.Promise();
                                    return qq.readBlobToHex(e, t + 18, 2).then(function(e) {
                                        if (n) return i.success(s(e));
                                        i.success(parseInt(e, 16));
                                    }), i;
                                }(o, l).then(function(u) {
                                    var c, d, h, p;
                                    t(qq.format("Found {} APP1 directory entries", u)), (c = o, d = u, h = c + 20, p = 12 * d, 
                                    qq.readBlobToHex(e, h, p)).then(function(e) {
                                        var o = function(e) {
                                            for (var t = [], n = 0; n + 24 <= e.length; ) t.push(e.slice(n, n + 24)), n += 24;
                                            return t;
                                        }(e), a = function(e, t) {
                                            var o = qq.extend([], n), r = {};
                                            return qq.each(t, function(t, n) {
                                                var a, l, u, c = n.slice(0, 4), d = e ? s(c) : parseInt(c, 16), h = o.indexOf(d);
                                                if (h >= 0 && (l = i[d].name, u = i[d].bytes, a = n.slice(16, 16 + 2 * u), r[l] = e ? s(a) : parseInt(a, 16), 
                                                o.splice(h, 1)), 0 === o.length) return !1;
                                            }), r;
                                        }(l, o);
                                        t("Successfully parsed some EXIF tags"), r.success(a);
                                    }, a);
                                }, a);
                            }, a);
                        }, a), r;
                    }
                });
            }, qq.Identify = function(e, t) {
                "use strict";
                qq.extend(this, {
                    isPreviewable: function() {
                        var n = this, i = new qq.Promise(), s = !1, o = void 0 === e.name ? "blob" : e.name;
                        return t(qq.format("Attempting to determine if {} can be rendered in this browser", o)), 
                        t("First pass: check type attribute of blob object."), this.isPreviewableSync() ? (t("Second pass: check for magic bytes in file header."), 
                        qq.readBlobToHex(e, 0, 4).then(function(e) {
                            qq.each(n.PREVIEWABLE_MIME_TYPES, function(t, n) {
                                if (o = e, r = !1, a = [].concat(n), qq.each(a, function(e, t) {
                                    if (0 === o.indexOf(t)) return r = !0, !1;
                                }), r) return ("image/tiff" !== t || qq.supportedFeatures.tiffPreviews) && (s = !0, 
                                i.success(t)), !1;
                                var o, r, a;
                            }), t(qq.format("'{}' is {} able to be rendered in this browser", o, s ? "" : "NOT")), 
                            s || i.failure();
                        }, function() {
                            t("Error reading file w/ name '" + o + "'.  Not able to be rendered in this browser."), 
                            i.failure();
                        })) : i.failure(), i;
                    },
                    isPreviewableSync: function() {
                        var n = e.type, i = qq.indexOf(Object.keys(this.PREVIEWABLE_MIME_TYPES), n) >= 0, s = !1, o = void 0 === e.name ? "blob" : e.name;
                        return i && (s = "image/tiff" !== n || qq.supportedFeatures.tiffPreviews), !s && t(o + " is not previewable in this browser per the blob's type attr"), 
                        s;
                    }
                });
            }, qq.Identify.prototype.PREVIEWABLE_MIME_TYPES = {
                "image/jpeg": "ffd8ff",
                "image/gif": "474946",
                "image/png": "89504e",
                "image/bmp": "424d",
                "image/tiff": [ "49492a00", "4d4d002a" ]
            }, qq.ImageValidation = function(e, t) {
                "use strict";
                this.validate = function(n) {
                    var i, s = new qq.Promise();
                    return t("Attempting to validate image."), !function(e) {
                        var t = !1;
                        return qq.each(e, function(e, n) {
                            if (n > 0) return t = !0, !1;
                        }), t;
                    }(n) ? s.success() : (i = new qq.Promise(), new qq.Identify(e, t).isPreviewable().then(function() {
                        var n = new Image(), s = window.URL && window.URL.createObjectURL ? window.URL : window.webkitURL && window.webkitURL.createObjectURL ? window.webkitURL : null;
                        s ? (n.onerror = function() {
                            t("Cannot determine dimensions for image.  May be too large.", "error"), i.failure();
                        }, n.onload = function() {
                            i.success({
                                width: this.width,
                                height: this.height
                            });
                        }, n.src = s.createObjectURL(e)) : (t("No createObjectURL function available to generate image URL!", "error"), 
                        i.failure());
                    }, i.failure), i).then(function(e) {
                        var t = function(e, t) {
                            var n;
                            return qq.each(e, function(e, i) {
                                if (i > 0) {
                                    var s = /(max|min)(Width|Height)/.exec(e), o = s[2].charAt(0).toLowerCase() + s[2].slice(1), r = t[o];
                                    switch (s[1]) {
                                      case "min":
                                        if (r < i) return n = e, !1;
                                        break;

                                      case "max":
                                        if (r > i) return n = e, !1;
                                    }
                                }
                            }), n;
                        }(n, e);
                        t ? s.failure(t) : s.success();
                    }, s.success), s;
                };
            }, qq.Session = function(e) {
                "use strict";
                var t = {
                    endpoint: null,
                    params: {},
                    customHeaders: {},
                    cors: {},
                    addFileRecord: function(e) {},
                    log: function(e, t) {}
                };
                function n(e, n, i, s) {
                    var o = !1;
                    (n = n && function(e) {
                        if (qq.isArray(e)) return !0;
                        t.log("Session response is not an array.", "error");
                    }(e)) && qq.each(e, function(e, n) {
                        if (null == n.uuid) o = !0, t.log(qq.format("Session response item {} did not include a valid UUID - ignoring.", e), "error"); else if (null == n.name) o = !0, 
                        t.log(qq.format("Session response item {} did not include a valid name - ignoring.", e), "error"); else try {
                            return t.addFileRecord(n), !0;
                        } catch (e) {
                            o = !0, t.log(e.message, "error");
                        }
                        return !1;
                    }), s[n && !o ? "success" : "failure"](e, i);
                }
                qq.extend(t, e, !0), this.refresh = function() {
                    var e = new qq.Promise(), i = qq.extend({}, t);
                    return new qq.SessionAjaxRequester(qq.extend(i, {
                        onComplete: function(t, i, s) {
                            n(t, i, s, e);
                        }
                    })).queryServer(), e;
                };
            }, qq.SessionAjaxRequester = function(e) {
                "use strict";
                var t, n = {
                    endpoint: null,
                    customHeaders: {},
                    params: {},
                    cors: {
                        expected: !1,
                        sendCredentials: !1
                    },
                    onComplete: function(e, t, n) {},
                    log: function(e, t) {}
                };
                qq.extend(n, e), t = qq.extend(this, new qq.AjaxRequester({
                    acceptHeader: "application/json",
                    validMethods: [ "GET" ],
                    method: "GET",
                    endpointStore: {
                        get: function() {
                            return n.endpoint;
                        }
                    },
                    customHeaders: n.customHeaders,
                    log: n.log,
                    onComplete: function(e, t, i) {
                        var s = null;
                        if (null != t.responseText) try {
                            s = qq.parseJson(t.responseText);
                        } catch (e) {
                            n.log("Problem parsing session response: " + e.message, "error"), i = !0;
                        }
                        n.onComplete(s, !i, t);
                    },
                    cors: n.cors
                })), qq.extend(this, {
                    queryServer: function() {
                        var e = qq.extend({}, n.params);
                        n.log("Session query request."), t.initTransport("sessionRefresh").withParams(e).withCacheBuster().send();
                    }
                });
            }, qq.FormSupport = function(e, t, n) {
                "use strict";
                var i = this, s = e.interceptSubmit, o = e.element, r = e.autoUpload;
                function a(e, t) {
                    if (!e.checkValidity || e.checkValidity()) return !0;
                    n("Form did not pass validation checks - will not upload.", "error"), t();
                }
                qq.extend(this, {
                    newEndpoint: null,
                    newAutoUpload: r,
                    attachedToForm: !1,
                    getFormInputsAsObject: function() {
                        return null == o ? null : i._form2Obj(o);
                    }
                }), o = function(e) {
                    return e && (qq.isString(e) && (e = document.getElementById(e)), e && (n("Attaching to form element."), 
                    function(e) {
                        e.getAttribute("action") && (i.newEndpoint = e.getAttribute("action"));
                    }(e), s && function(e) {
                        var n = e.submit;
                        qq(e).attach("submit", function(i) {
                            (i = i || window.event).preventDefault ? i.preventDefault() : i.returnValue = !1, 
                            a(e, n) && t();
                        }), e.submit = function() {
                            a(e, n) && t();
                        };
                    }(e))), e;
                }(o), this.attachedToForm = !!o;
            }, qq.extend(qq.FormSupport.prototype, {
                _form2Obj: function(e) {
                    "use strict";
                    var t = {}, n = function(e) {
                        return t = e.type, qq.indexOf([ "checkbox", "radio" ], t.toLowerCase()) >= 0 && !e.checked || e.disabled && "hidden" !== e.type.toLowerCase();
                        var t;
                    };
                    return qq.each(e.elements, function(e, i) {
                        if ((qq.isInput(i, !0) || "textarea" === i.tagName.toLowerCase()) && (o = i.type, 
                        qq.indexOf([ "button", "image", "reset", "submit" ], o.toLowerCase()) < 0) && !n(i)) t[i.name] = i.value; else if ("select" === i.tagName.toLowerCase() && !n(i)) {
                            var s = function(e) {
                                var t = null;
                                return qq.each(qq(e).children(), function(e, n) {
                                    if ("option" === n.tagName.toLowerCase() && n.selected) return t = n.value, !1;
                                }), t;
                            }(i);
                            null !== s && (t[i.name] = s);
                        }
                        var o;
                    }), t;
                }
            }), qq.Scaler = function(e, t) {
                "use strict";
                var n = e.sendOriginal, i = e.orient, s = e.defaultType, o = e.defaultQuality / 100, r = e.failureText, a = e.includeExif, l = this._getSortedSizes(e.sizes);
                qq.extend(this, {
                    enabled: qq.supportedFeatures.scaling && l.length > 0,
                    getFileRecords: function(e, u, c) {
                        var d = this, h = [], p = c.blob ? c.blob : c;
                        return new qq.Identify(p, t).isPreviewableSync() ? (qq.each(l, function(e, n) {
                            var l = d._determineOutputType({
                                defaultType: s,
                                requestedType: n.type,
                                refType: p.type
                            });
                            h.push({
                                uuid: qq.getUniqueId(),
                                name: d._getName(u, {
                                    name: n.name,
                                    type: l,
                                    refType: p.type
                                }),
                                blob: new qq.BlobProxy(p, qq.bind(d._generateScaledImage, d, {
                                    maxSize: n.maxSize,
                                    orient: i,
                                    type: l,
                                    quality: o,
                                    failedText: r,
                                    includeExif: a,
                                    log: t
                                }))
                            });
                        }), n && h.push({
                            uuid: e,
                            name: u,
                            blob: p
                        })) : h.push({
                            uuid: e,
                            name: u,
                            blob: p
                        }), h;
                    },
                    handleNewFile: function(e, t, n, i, s, o, r, a) {
                        e.qqButtonId || e.blob && e.blob.qqButtonId;
                        var l, u = [], c = null, d = a.addFileToHandler, h = a.uploadData, p = a.paramsStore, f = qq.getUniqueId();
                        qq.each(this.getFileRecords(n, t, e), function(t, n) {
                            var r, a = e, l = i;
                            n.blob instanceof qq.BlobProxy && (a = n.blob, l = -1), r = h.addFile({
                                uuid: n.uuid,
                                name: n.name,
                                size: l,
                                batchId: o,
                                proxyGroupId: f
                            }), n.blob instanceof qq.BlobProxy ? u.push(r) : c = r, d(r, a), s.push({
                                id: r,
                                file: a
                            });
                        }), null !== c && (qq.each(u, function(e, t) {
                            var n = {
                                qqparentuuid: h.retrieve({
                                    id: c
                                }).uuid,
                                qqparentsize: h.retrieve({
                                    id: c
                                }).size
                            };
                            n[r] = h.retrieve({
                                id: t
                            }).uuid, h.setParentId(t, c), p.addReadOnly(t, n);
                        }), u.length && ((l = {})[r] = h.retrieve({
                            id: c
                        }).uuid, p.addReadOnly(c, l)));
                    }
                });
            }, qq.extend(qq.Scaler.prototype, {
                scaleImage: function(e, t, n) {
                    "use strict";
                    if (!qq.supportedFeatures.scaling) throw new qq.Error("Scaling is not supported in this browser!");
                    var i = new qq.Promise(), s = n.log, o = n.getFile(e), r = n.uploadData.retrieve({
                        id: e
                    }), a = r && r.name, l = r && r.uuid, u = {
                        sendOriginal: !1,
                        orient: t.orient,
                        defaultType: t.type || null,
                        defaultQuality: t.quality,
                        failedToScaleText: "Unable to scale",
                        sizes: [ {
                            name: "",
                            maxSize: t.maxSize
                        } ]
                    }, c = new qq.Scaler(u, s);
                    return qq.Scaler && qq.supportedFeatures.imagePreviews && o ? qq.bind(function() {
                        var t = c.getFileRecords(l, a, o)[0];
                        t && t.blob instanceof qq.BlobProxy ? t.blob.create().then(i.success, i.failure) : (s(e + " is not a scalable image!", "error"), 
                        i.failure());
                    }, this)() : (i.failure(), s("Could not generate requested scaled image for " + e + ".  Scaling is either not possible in this browser, or the file could not be located.", "error")), 
                    i;
                },
                _determineOutputType: function(e) {
                    "use strict";
                    var t = e.requestedType, n = e.defaultType, i = e.refType;
                    return n || t ? t && qq.indexOf(Object.keys(qq.Identify.prototype.PREVIEWABLE_MIME_TYPES), t) >= 0 ? "image/tiff" === t ? qq.supportedFeatures.tiffPreviews ? t : n : t : n : "image/jpeg" !== i ? "image/png" : i;
                },
                _getName: function(e, t) {
                    "use strict";
                    var n = e.lastIndexOf("."), i = t.type || "image/png", s = t.refType, o = "", r = qq.getExtension(e), a = "";
                    return t.name && t.name.trim().length && (a = " (" + t.name + ")"), n >= 0 ? (o = e.substr(0, n), 
                    s !== i && (r = i.split("/")[1]), o += a + "." + r) : o = e + a, o;
                },
                _getSortedSizes: function(e) {
                    "use strict";
                    return (e = qq.extend([], e)).sort(function(e, t) {
                        return e.maxSize > t.maxSize ? 1 : e.maxSize < t.maxSize ? -1 : 0;
                    });
                },
                _generateScaledImage: function(e, t) {
                    "use strict";
                    var n = this, i = e.log, s = e.maxSize, o = e.orient, r = e.type, a = e.quality, l = e.failedText, u = e.includeExif && "image/jpeg" === t.type && "image/jpeg" === r, c = new qq.Promise(), d = new qq.ImageGenerator(i), h = document.createElement("canvas");
                    return i("Attempting to generate scaled version for " + t.name), d.generate(t, h, {
                        maxSize: s,
                        orient: o
                    }).then(function() {
                        var e = h.toDataURL(r, a), s = function() {
                            i("Success generating scaled version for " + t.name);
                            var n = qq.dataUriToBlob(e);
                            c.success(n);
                        };
                        u ? n._insertExifHeader(t, e, i).then(function(t) {
                            e = t, s();
                        }, function() {
                            i("Problem inserting EXIF header into scaled image.  Using scaled image w/out EXIF data.", "error"), 
                            s();
                        }) : s();
                    }, function() {
                        i("Failed attempt to generate scaled version for " + t.name, "error"), c.failure(l);
                    }), c;
                },
                _insertExifHeader: function(e, t, n) {
                    "use strict";
                    var i = new FileReader(), s = new qq.Promise(), o = "";
                    return i.onload = function() {
                        o = i.result, s.success(ExifRestorer.restore(o, t));
                    }, i.onerror = function() {
                        n("Problem reading " + e.name + " during attempt to transfer EXIF data to scaled version.", "error"), 
                        s.failure();
                    }, i.readAsDataURL(e), s;
                },
                _dataUriToBlob: function(e) {
                    "use strict";
                    var t, n, i, s;
                    return t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : decodeURI(e.split(",")[1]), 
                    n = e.split(",")[0].split(":")[1].split(";")[0], i = new ArrayBuffer(t.length), 
                    s = new Uint8Array(i), qq.each(t, function(e, t) {
                        s[e] = t.charCodeAt(0);
                    }), this._createBlob(i, n);
                },
                _createBlob: function(e, t) {
                    "use strict";
                    var n = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder, i = n && new n();
                    return i ? (i.append(e), i.getBlob(t)) : new Blob([ e ], {
                        type: t
                    });
                }
            });
            var ExifRestorer = function() {
                var e = {
                    KEY_STR: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    encode64: function(e) {
                        var t, n, i, s, o, r = "", a = "", l = "", u = 0;
                        do {
                            i = (t = e[u++]) >> 2, s = (3 & t) << 4 | (n = e[u++]) >> 4, o = (15 & n) << 2 | (a = e[u++]) >> 6, 
                            l = 63 & a, isNaN(n) ? o = l = 64 : isNaN(a) && (l = 64), r = r + this.KEY_STR.charAt(i) + this.KEY_STR.charAt(s) + this.KEY_STR.charAt(o) + this.KEY_STR.charAt(l), 
                            t = n = a = "", i = s = o = l = "";
                        } while (u < e.length);
                        return r;
                    },
                    restore: function(e, t) {
                        if (!e.match("data:image/jpeg;base64,")) return t;
                        var n = this.decode64(e.replace("data:image/jpeg;base64,", "")), i = this.slice2Segments(n), s = this.exifManipulation(t, i);
                        return "data:image/jpeg;base64," + this.encode64(s);
                    },
                    exifManipulation: function(e, t) {
                        var n = this.getExifArray(t), i = this.insertExif(e, n);
                        return new Uint8Array(i);
                    },
                    getExifArray: function(e) {
                        for (var t, n = 0; n < e.length; n++) if (255 == (t = e[n])[0] & 225 == t[1]) return t;
                        return [];
                    },
                    insertExif: function(e, t) {
                        var n = e.replace("data:image/jpeg;base64,", ""), i = this.decode64(n), s = i.indexOf(255, 3), o = i.slice(0, s), r = i.slice(s), a = o;
                        return a = (a = a.concat(t)).concat(r);
                    },
                    slice2Segments: function(e) {
                        for (var t = 0, n = []; !(255 == e[t] & 218 == e[t + 1]); ) {
                            if (255 == e[t] & 216 == e[t + 1]) t += 2; else {
                                var i = t + (256 * e[t + 2] + e[t + 3]) + 2, s = e.slice(t, i);
                                n.push(s), t = i;
                            }
                            if (t > e.length) break;
                        }
                        return n;
                    },
                    decode64: function(e) {
                        var t, n, i, s, o = "", r = "", a = 0, l = [];
                        if (/[^A-Za-z0-9\+\/\=]/g.exec(e)) throw new Error("There were invalid base64 characters in the input text.  Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='");
                        e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                        do {
                            t = this.KEY_STR.indexOf(e.charAt(a++)) << 2 | (i = this.KEY_STR.indexOf(e.charAt(a++))) >> 4, 
                            n = (15 & i) << 4 | (s = this.KEY_STR.indexOf(e.charAt(a++))) >> 2, o = (3 & s) << 6 | (r = this.KEY_STR.indexOf(e.charAt(a++))), 
                            l.push(t), 64 != s && l.push(n), 64 != r && l.push(o), t = n = o = "", i = s = r = "";
                        } while (a < e.length);
                        return l;
                    }
                };
                return e;
            }();
            qq.TotalProgress = function(e, t) {
                "use strict";
                var n = {}, i = 0, s = 0, o = -1, r = -1, a = function(t, n) {
                    t === o && n === r || e(t, n), o = t, r = n;
                }, l = function(e) {
                    var i = t(e);
                    i > 0 && (u(e, 0, i), n[e] = {
                        loaded: 0,
                        total: i
                    });
                }, u = function(e, t, o) {
                    var r = n[e] ? n[e].loaded : 0, l = n[e] ? n[e].total : 0;
                    -1 === t && -1 === o ? (i -= r, s -= l) : (t && (i += t - r), o && (s += o - l)), 
                    a(i, s);
                };
                qq.extend(this, {
                    onAllComplete: function(e, t, n) {
                        (0 === t.length || function(e, t) {
                            var n = !0;
                            return qq.each(e, function(e, i) {
                                if (qq.indexOf(t, i) >= 0) return n = !1, !1;
                            }), n;
                        }(t, n)) && (a(s, s), this.reset());
                    },
                    onStatusChange: function(e, t, i) {
                        i === qq.status.CANCELED || i === qq.status.REJECTED ? function(e) {
                            u(e, -1, -1), delete n[e];
                        }(e) : i === qq.status.SUBMITTING && l(e);
                    },
                    onIndividualProgress: function(e, t, i) {
                        u(e, t, i), n[e] = {
                            loaded: t,
                            total: i
                        };
                    },
                    onNewSize: function(e) {
                        l(e);
                    },
                    reset: function() {
                        n = {}, i = 0, s = 0;
                    }
                });
            }, qq.UiEventHandler = function(e, t) {
                "use strict";
                var n = new qq.DisposeSupport(), i = {
                    eventType: "click",
                    attachTo: null,
                    onHandled: function(e, t) {}
                };
                function s(e) {
                    n.attach(e, i.eventType, function(e) {
                        var t = (e = e || window.event).target || e.srcElement;
                        i.onHandled(t, e);
                    });
                }
                qq.extend(this, {
                    addHandler: function(e) {
                        s(e);
                    },
                    dispose: function() {
                        n.dispose();
                    }
                }), qq.extend(t, {
                    getFileIdFromItem: function(e) {
                        return e.qqFileId;
                    },
                    getDisposeSupport: function() {
                        return n;
                    }
                }), qq.extend(i, e), i.attachTo && s(i.attachTo);
            }, qq.FileButtonsClickHandler = function(e) {
                "use strict";
                var t = {
                    templating: null,
                    log: function(e, t) {},
                    onDeleteFile: function(e) {},
                    onCancel: function(e) {},
                    onRetry: function(e) {},
                    onPause: function(e) {},
                    onContinue: function(e) {},
                    onGetName: function(e) {}
                }, n = {
                    cancel: function(e) {
                        t.onCancel(e);
                    },
                    retry: function(e) {
                        t.onRetry(e);
                    },
                    deleteButton: function(e) {
                        t.onDeleteFile(e);
                    },
                    pause: function(e) {
                        t.onPause(e);
                    },
                    continueButton: function(e) {
                        t.onContinue(e);
                    }
                };
                qq.extend(t, e), t.eventType = "click", t.onHandled = function(e, i) {
                    qq.each(n, function(n, s) {
                        var o, r = n.charAt(0).toUpperCase() + n.slice(1);
                        if (t.templating["is" + r](e)) return o = t.templating.getFileId(e), qq.preventDefault(i), 
                        t.log(qq.format("Detected valid file button click event on file '{}', ID: {}.", t.onGetName(o), o)), 
                        s(o), !1;
                    });
                }, t.attachTo = t.templating.getFileList(), qq.extend(this, new qq.UiEventHandler(t, {}));
            }, qq.FilenameClickHandler = function(e) {
                "use strict";
                var t = {}, n = {
                    templating: null,
                    log: function(e, t) {},
                    classes: {
                        file: "qq-upload-file",
                        editNameIcon: "qq-edit-filename-icon"
                    },
                    onGetUploadStatus: function(e) {},
                    onGetName: function(e) {}
                };
                qq.extend(n, e), n.eventType = "click", n.onHandled = function(e, i) {
                    if (n.templating.isFileName(e) || n.templating.isEditIcon(e)) {
                        var s = n.templating.getFileId(e);
                        n.onGetUploadStatus(s) === qq.status.SUBMITTED && (n.log(qq.format("Detected valid filename click event on file '{}', ID: {}.", n.onGetName(s), s)), 
                        qq.preventDefault(i), t.handleFilenameEdit(s, e, !0));
                    }
                }, qq.extend(this, new qq.FilenameEditHandler(n, t));
            }, qq.FilenameInputFocusInHandler = function(e, t) {
                "use strict";
                var n = {
                    templating: null,
                    onGetUploadStatus: function(e) {},
                    log: function(e, t) {}
                };
                t || (t = {}), n.eventType = "focusin", n.onHandled = function(e, i) {
                    if (n.templating.isEditInput(e)) {
                        var s = n.templating.getFileId(e);
                        n.onGetUploadStatus(s) === qq.status.SUBMITTED && (n.log(qq.format("Detected valid filename input focus event on file '{}', ID: {}.", n.onGetName(s), s)), 
                        t.handleFilenameEdit(s, e));
                    }
                }, qq.extend(n, e), qq.extend(this, new qq.FilenameEditHandler(n, t));
            }, qq.FilenameInputFocusHandler = function(e) {
                "use strict";
                e.eventType = "focus", e.attachTo = null, qq.extend(this, new qq.FilenameInputFocusInHandler(e, {}));
            }, qq.FilenameEditHandler = function(e, t) {
                "use strict";
                var n = {
                    templating: null,
                    log: function(e, t) {},
                    onGetUploadStatus: function(e) {},
                    onGetName: function(e) {},
                    onSetName: function(e, t) {},
                    onEditingStatusChange: function(e, t) {}
                };
                function i(e, t) {
                    var i, s = e.value;
                    void 0 !== s && qq.trimStr(s).length > 0 && (void 0 !== (i = function(e) {
                        var t = n.onGetName(e);
                        return qq.getExtension(t);
                    }(t)) && (s = s + "." + i), n.onSetName(t, s)), n.onEditingStatusChange(t, !1);
                }
                qq.extend(n, e), n.attachTo = n.templating.getFileList(), qq.extend(this, new qq.UiEventHandler(n, t)), 
                qq.extend(t, {
                    handleFilenameEdit: function(e, s, o) {
                        var r, a, l, u = n.templating.getEditInput(e);
                        n.onEditingStatusChange(e, !0), u.value = (r = e, a = n.onGetName(r), (l = a.lastIndexOf(".")) > 0 && (a = a.substr(0, l)), 
                        a), o && u.focus(), function(e, n) {
                            t.getDisposeSupport().attach(e, "blur", function() {
                                i(e, n);
                            });
                        }(u, e), function(e, n) {
                            t.getDisposeSupport().attach(e, "keyup", function(t) {
                                13 === (t.keyCode || t.which) && i(e, n);
                            });
                        }(u, e);
                    }
                });
            }, function(e) {
                "use strict";
                var t, n = [ "uploaderType", "endpointType" ];
                function i(n) {
                    var i, s, u, c = a(n || {}), d = (i = c, s = r("uploaderType"), u = r("endpointType"), 
                    s ? (s = s.charAt(0).toUpperCase() + s.slice(1).toLowerCase(), u ? new qq[u]["FineUploader" + s](i) : new qq["FineUploader" + s](i)) : u ? new qq[u].FineUploader(i) : new qq.FineUploader(i));
                    return o(d), function(n, i) {
                        var s = n.callbacks = {};
                        e.each(i._options.callbacks, function(n, i) {
                            var o, r;
                            o = (o = /^on(\w+)/.exec(n)[1]).substring(0, 1).toLowerCase() + o.substring(1), 
                            r = t, s[n] = function() {
                                var t, n, s = Array.prototype.slice.call(arguments), a = [];
                                e.each(s, function(e, t) {
                                    a.push(l(t));
                                }), t = i.apply(this, s);
                                try {
                                    n = r.triggerHandler(o, a);
                                } catch (e) {
                                    qq.log("Caught error in Fine Uploader jQuery event handler: " + e.message, "error");
                                }
                                return null != t ? t : n;
                            };
                        }), i._options.callbacks = s;
                    }(c, d), t;
                }
                function s(e, n) {
                    var i = t.data("fineuploader");
                    if (!n) return void 0 === i ? null : i[e];
                    void 0 === i && (i = {}), i[e] = n, t.data("fineuploader", i);
                }
                function o(e) {
                    return s("uploader", e);
                }
                function r(e, t) {
                    return s(e, t);
                }
                function a(i, s) {
                    var o, l;
                    if (o = void 0 === s ? "basic" !== i.uploaderType ? {
                        element: t[0]
                    } : {} : s, e.each(i, function(t, i) {
                        e.inArray(t, n) >= 0 ? r(t, i) : i instanceof e ? o[t] = i[0] : e.isPlainObject(i) ? (o[t] = {}, 
                        a(i, o[t])) : e.isArray(i) ? (l = [], e.each(i, function(t, n) {
                            var i = {};
                            n instanceof e ? e.merge(l, n) : e.isPlainObject(n) ? (a(n, i), l.push(i)) : l.push(n);
                        }), o[t] = l) : o[t] = i;
                    }), void 0 === s) return o;
                }
                function l(t) {
                    var n = t;
                    return null == t || "object" != typeof t || 1 !== t.nodeType && 9 !== t.nodeType || !t.cloneNode || (n = e(t)), 
                    n;
                }
                e.fn.fineUploader = function(n) {
                    var s = this, r = arguments, u = [];
                    return this.each(function(c, d) {
                        if (t = e(d), o() && (h = n, "string" === e.type(h) && !h.match(/^_/) && void 0 !== o()[h])) {
                            if (u.push(function(e) {
                                var t = [];
                                return a(Array.prototype.slice.call(arguments, 1), t), l(o()[e].apply(o(), t));
                            }.apply(s, r)), 1 === s.length) return !1;
                        } else "object" != typeof n && n ? e.error("Method " + n + " does not exist on jQuery.fineUploader") : i.apply(s, r);
                        var h;
                    }), 1 === u.length ? u[0] : u.length > 1 ? u : this;
                };
            }(jQuery), function(e) {
                "use strict";
                var t, n = "fineUploaderDnd";
                function i(n) {
                    n || (n = {}), n.dropZoneElements = [ t ];
                    var i, r = o(n);
                    return i = r.callbacks = {}, e.each(new qq.DragAndDrop.callbacks(), function(e, n) {
                        var s, o = e;
                        s = t, i[e] = function() {
                            var e = Array.prototype.slice.call(arguments), t = s.triggerHandler(o, e);
                            return t;
                        };
                    }), s(new qq.DragAndDrop(r)), t;
                }
                function s(e) {
                    return function(e, i) {
                        var s = t.data(n);
                        if (!i) return void 0 === s ? null : s[e];
                        void 0 === s && (s = {}), s[e] = i, t.data(n, s);
                    }("dndInstance", e);
                }
                function o(t, n) {
                    var i, s;
                    if (i = void 0 === n ? {} : n, e.each(t, function(t, n) {
                        n instanceof e ? i[t] = n[0] : e.isPlainObject(n) ? (i[t] = {}, o(n, i[t])) : e.isArray(n) ? (s = [], 
                        e.each(n, function(t, n) {
                            n instanceof e ? e.merge(s, n) : s.push(n);
                        }), i[t] = s) : i[t] = n;
                    }), void 0 === n) return i;
                }
                e.fn.fineUploaderDnd = function(n) {
                    var r = this, a = arguments, l = [];
                    return this.each(function(u, c) {
                        if (t = e(c), s() && (d = n, "string" === e.type(d) && "dispose" === d && void 0 !== s()[d])) {
                            if (l.push(function(e) {
                                var t = [];
                                return o(Array.prototype.slice.call(arguments, 1), t), s()[e].apply(s(), t);
                            }.apply(r, a)), 1 === r.length) return !1;
                        } else "object" != typeof n && n ? e.error("Method " + n + " does not exist in Fine Uploader's DnD module.") : i.apply(r, a);
                        var d;
                    }), 1 === l.length ? l[0] : l.length > 1 ? l : this;
                };
            }(jQuery), qq.s3 = qq.s3 || {}, qq.s3.util = qq.s3.util || function() {
                "use strict";
                return {
                    AWS_PARAM_PREFIX: "x-amz-meta-",
                    SESSION_TOKEN_PARAM_NAME: "x-amz-security-token",
                    REDUCED_REDUNDANCY_PARAM_NAME: "x-amz-storage-class",
                    REDUCED_REDUNDANCY_PARAM_VALUE: "REDUCED_REDUNDANCY",
                    SERVER_SIDE_ENCRYPTION_PARAM_NAME: "x-amz-server-side-encryption",
                    SERVER_SIDE_ENCRYPTION_PARAM_VALUE: "AES256",
                    getBucket: function(e) {
                        var t;
                        return qq.each([ /^(?:https?:\/\/)?([a-z0-9.\-_]+)\.s3(?:-[a-z0-9\-]+)?\.amazonaws\.com/i, /^(?:https?:\/\/)?s3(?:-[a-z0-9\-]+)?\.amazonaws\.com\/([a-z0-9.\-_]+)/i, /^(?:https?:\/\/)?([a-z0-9.\-_]+)/i ], function(n, i) {
                            var s = i.exec(e);
                            if (s) return t = s[1], !1;
                        }), t;
                    },
                    getPolicy: function(e) {
                        var t = {}, n = [], i = e.bucket, s = e.key, o = e.acl, r = e.type, a = new Date(), l = e.expectedStatus, u = e.sessionToken, c = e.params, d = qq.s3.util.getSuccessRedirectAbsoluteUrl(e.successRedirectUrl), h = e.minFileSize, p = e.maxFileSize, f = e.reducedRedundancy, m = e.serverSideEncryption;
                        return t.expiration = qq.s3.util.getPolicyExpirationDate(a), n.push({
                            acl: o
                        }), n.push({
                            bucket: i
                        }), r && n.push({
                            "Content-Type": r
                        }), l && n.push({
                            success_action_status: l.toString()
                        }), d && n.push({
                            success_action_redirect: d
                        }), f && (n.push({}), n[n.length - 1][qq.s3.util.REDUCED_REDUNDANCY_PARAM_NAME] = qq.s3.util.REDUCED_REDUNDANCY_PARAM_VALUE), 
                        u && (n.push({}), n[n.length - 1][qq.s3.util.SESSION_TOKEN_PARAM_NAME] = u), m && (n.push({}), 
                        n[n.length - 1][qq.s3.util.SERVER_SIDE_ENCRYPTION_PARAM_NAME] = qq.s3.util.SERVER_SIDE_ENCRYPTION_PARAM_VALUE), 
                        n.push({
                            key: s
                        }), qq.each(c, function(e, t) {
                            var i = {};
                            i[qq.s3.util.AWS_PARAM_PREFIX + e] = encodeURIComponent(t), n.push(i);
                        }), t.conditions = n, qq.s3.util.enforceSizeLimits(t, h, p), t;
                    },
                    refreshPolicyCredentials: function(e, t) {
                        var n = !1;
                        qq.each(e.conditions, function(e, i) {
                            qq.each(i, function(e, s) {
                                e === qq.s3.util.SESSION_TOKEN_PARAM_NAME && (i[e] = t, n = !0);
                            });
                        }), n || (e.conditions.push({}), e.conditions[e.conditions.length - 1][qq.s3.util.SESSION_TOKEN_PARAM_NAME] = t);
                    },
                    generateAwsParams: function(e, t) {
                        var n = {}, i = e.params, s = new qq.Promise(), o = qq.s3.util.getPolicy(e), r = e.sessionToken, a = e.type, l = e.key, u = e.accessKey, c = e.acl, d = e.expectedStatus, h = qq.s3.util.getSuccessRedirectAbsoluteUrl(e.successRedirectUrl), p = e.reducedRedundancy, f = e.serverSideEncryption, m = e.log;
                        return n.key = l, n.AWSAccessKeyId = u, a && (n["Content-Type"] = a), d && (n.success_action_status = d), 
                        h && (n.success_action_redirect = h), p && (n[qq.s3.util.REDUCED_REDUNDANCY_PARAM_NAME] = qq.s3.util.REDUCED_REDUNDANCY_PARAM_VALUE), 
                        f && (n[qq.s3.util.SERVER_SIDE_ENCRYPTION_PARAM_NAME] = qq.s3.util.SERVER_SIDE_ENCRYPTION_PARAM_VALUE), 
                        r && (n[qq.s3.util.SESSION_TOKEN_PARAM_NAME] = r), n.acl = c, qq.each(i, function(e, t) {
                            var i = qq.s3.util.AWS_PARAM_PREFIX + e;
                            n[i] = encodeURIComponent(t);
                        }), t(o).then(function(e, t, i) {
                            n.policy = e.policy, n.signature = e.signature, t && (n.AWSAccessKeyId = t), i && (n[qq.s3.util.SESSION_TOKEN_PARAM_NAME] = i), 
                            s.success(n);
                        }, function(e) {
                            m("Policy signing failed.  " + (e = e || "Can't continue further with request to S3 as we did not receive a valid signature and policy from the server."), "error"), 
                            s.failure(e);
                        }), s;
                    },
                    enforceSizeLimits: function(e, t, n) {
                        var i = t < 0 ? 0 : t, s = n <= 0 ? 9007199254740992 : n;
                        (t > 0 || n > 0) && e.conditions.push([ "content-length-range", i.toString(), s.toString() ]);
                    },
                    getPolicyExpirationDate: function(e) {
                        if (e.setMinutes(e.getMinutes() + 5), Date.prototype.toISOString) return e.toISOString();
                        var t = function(e) {
                            var t = String(e);
                            return 1 === t.length && (t = "0" + t), t;
                        };
                        return e.getUTCFullYear() + "-" + t(e.getUTCMonth() + 1) + "-" + t(e.getUTCDate()) + "T" + t(e.getUTCHours()) + ":" + t(e.getUTCMinutes()) + ":" + t(e.getUTCSeconds()) + "." + String((e.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) + "Z";
                    },
                    parseIframeResponse: function(e) {
                        var t = (e.contentDocument || e.contentWindow.document).location.search, n = /bucket=(.+)&key=(.+)&etag=(.+)/.exec(t);
                        if (n) return {
                            bucket: n[1],
                            key: n[2],
                            etag: n[3].replace(/%22/g, "")
                        };
                    },
                    getSuccessRedirectAbsoluteUrl: function(e) {
                        if (e) {
                            var t, n = document.createElement("div");
                            return qq.ie7() ? (n.innerHTML = "<a href='" + e + "'></a>", (t = n.firstChild).href) : ((t = document.createElement("a")).href = e, 
                            t.href = t.href, t.href);
                        }
                    },
                    encodeQueryStringParam: function(e) {
                        var t = encodeURIComponent(e);
                        return (t = (t = t.replace(/[!'()]/g, escape)).replace(/\*/g, "%2A")).replace(/%20/g, "+");
                    }
                };
            }(), function() {
                "use strict";
                qq.nonTraditionalBasePublicApi = {
                    setUploadSuccessParams: function(e, t) {
                        this._uploadSuccessParamsStore.set(e, t);
                    },
                    setUploadSuccessEndpoint: function(e, t) {
                        this._uploadSuccessEndpointStore.set(e, t);
                    }
                }, qq.nonTraditionalBasePrivateApi = {
                    _onComplete: function(e, t, n, i) {
                        var s, o, r = !!n.success, a = this, l = arguments, u = this._uploadSuccessEndpointStore.get(e), c = this._options.uploadSuccess.customHeaders, d = this._options.cors, h = new qq.Promise(), p = this._uploadSuccessParamsStore.get(e), f = this._paramsStore.get(e), m = function(t) {
                            delete a._failedSuccessRequestCallbacks[e], qq.extend(n, t), qq.FineUploaderBasic.prototype._onComplete.apply(a, l), 
                            h.success(t);
                        }, g = function(o) {
                            var r = s;
                            qq.extend(n, o), n && n.reset && (r = null), r ? a._failedSuccessRequestCallbacks[e] = r : delete a._failedSuccessRequestCallbacks[e], 
                            a._onAutoRetry(e, t, n, i, r) || (qq.FineUploaderBasic.prototype._onComplete.apply(a, l), 
                            h.failure(o));
                        };
                        return r && u ? (o = new qq.UploadSuccessAjaxRequester({
                            endpoint: u,
                            customHeaders: c,
                            cors: d,
                            log: qq.bind(this.log, this)
                        }), qq.extend(p, a._getEndpointSpecificParams(e, n, i), !0), f && qq.extend(p, f, !0), 
                        (s = qq.bind(function() {
                            o.sendSuccessRequest(e, p).then(m, g);
                        }, a))(), h) : qq.FineUploaderBasic.prototype._onComplete.apply(this, arguments);
                    },
                    _manualRetry: function(e) {
                        var t = this._failedSuccessRequestCallbacks[e];
                        return qq.FineUploaderBasic.prototype._manualRetry.call(this, e, t);
                    }
                };
            }(), function() {
                "use strict";
                qq.s3.FineUploaderBasic = function(e) {
                    var t = {
                        request: {
                            accessKey: null
                        },
                        objectProperties: {
                            acl: "private",
                            bucket: qq.bind(function(e) {
                                return qq.s3.util.getBucket(this.getEndpoint(e));
                            }, this),
                            key: "uuid",
                            reducedRedundancy: !1,
                            serverSideEncryption: !1
                        },
                        credentials: {
                            accessKey: null,
                            secretKey: null,
                            expiration: null,
                            sessionToken: null
                        },
                        signature: {
                            endpoint: null,
                            customHeaders: {}
                        },
                        uploadSuccess: {
                            endpoint: null,
                            params: {},
                            customHeaders: {}
                        },
                        iframeSupport: {
                            localBlankPagePath: null
                        },
                        chunking: {
                            partSize: 5242880
                        },
                        cors: {
                            allowXdr: !0
                        },
                        callbacks: {
                            onCredentialsExpired: function() {}
                        }
                    };
                    qq.extend(t, e, !0), this.setCredentials(t.credentials, !0) || (this._currentCredentials.accessKey = t.request.accessKey), 
                    this._aclStore = this._createStore(t.objectProperties.acl), qq.FineUploaderBasic.call(this, t), 
                    this._uploadSuccessParamsStore = this._createStore(this._options.uploadSuccess.params), 
                    this._uploadSuccessEndpointStore = this._createStore(this._options.uploadSuccess.endpoint), 
                    this._failedSuccessRequestCallbacks = {}, this._cannedKeys = {}, this._cannedBuckets = {}, 
                    this._buckets = {};
                }, qq.extend(qq.s3.FineUploaderBasic.prototype, qq.basePublicApi), qq.extend(qq.s3.FineUploaderBasic.prototype, qq.basePrivateApi), 
                qq.extend(qq.s3.FineUploaderBasic.prototype, qq.nonTraditionalBasePublicApi), qq.extend(qq.s3.FineUploaderBasic.prototype, qq.nonTraditionalBasePrivateApi), 
                qq.extend(qq.s3.FineUploaderBasic.prototype, {
                    getBucket: function(e) {
                        return null == this._cannedBuckets[e] ? this._buckets[e] : this._cannedBuckets[e];
                    },
                    getKey: function(e) {
                        return null == this._cannedKeys[e] ? this._handler.getThirdPartyFileId(e) : this._cannedKeys[e];
                    },
                    reset: function() {
                        qq.FineUploaderBasic.prototype.reset.call(this), this._failedSuccessRequestCallbacks = [], 
                        this._buckets = {};
                    },
                    setCredentials: function(e, t) {
                        if (e && e.secretKey) {
                            if (!e.accessKey) throw new qq.Error("Invalid credentials: no accessKey");
                            if (!e.expiration) throw new qq.Error("Invalid credentials: no expiration");
                            return this._currentCredentials = qq.extend({}, e), qq.isString(e.expiration) && (this._currentCredentials.expiration = new Date(e.expiration)), 
                            !0;
                        }
                        if (!t) throw new qq.Error("Invalid credentials parameter!");
                        this._currentCredentials = {};
                    },
                    setAcl: function(e, t) {
                        this._aclStore.set(e, t);
                    },
                    _createUploadHandler: function() {
                        var e = this, t = {
                            aclStore: this._aclStore,
                            getBucket: qq.bind(this._determineBucket, this),
                            getKeyName: qq.bind(this._determineKeyName, this),
                            iframeSupport: this._options.iframeSupport,
                            objectProperties: this._options.objectProperties,
                            signature: this._options.signature,
                            validation: {
                                minSizeLimit: this._options.validation.minSizeLimit,
                                maxSizeLimit: this._options.validation.sizeLimit
                            }
                        };
                        return qq.override(this._endpointStore, function(e) {
                            return {
                                get: function(t) {
                                    var n = e.get(t);
                                    return n.indexOf("http") < 0 ? "http://" + n : n;
                                }
                            };
                        }), qq.override(this._paramsStore, function(e) {
                            return {
                                get: function(t) {
                                    var n = e.get(t), i = {};
                                    return qq.each(n, function(e, t) {
                                        i[e.toLowerCase()] = qq.isFunction(t) ? t() : t;
                                    }), i;
                                }
                            };
                        }), t.signature.credentialsProvider = {
                            get: function() {
                                return e._currentCredentials;
                            },
                            onExpired: function() {
                                var t = new qq.Promise(), n = e._options.callbacks.onCredentialsExpired();
                                return qq.isGenericPromise(n) ? n.then(function(n) {
                                    try {
                                        e.setCredentials(n), t.success();
                                    } catch (n) {
                                        e.log("Invalid credentials returned from onCredentialsExpired callback! (" + n.message + ")", "error"), 
                                        t.failure("onCredentialsExpired did not return valid credentials.");
                                    }
                                }, function(n) {
                                    e.log("onCredentialsExpired callback indicated failure! (" + n + ")", "error"), 
                                    t.failure("onCredentialsExpired callback failed.");
                                }) : (e.log("onCredentialsExpired callback did not return a promise!", "error"), 
                                t.failure("Unexpected return value for onCredentialsExpired.")), t;
                            }
                        }, qq.FineUploaderBasic.prototype._createUploadHandler.call(this, t, "s3");
                    },
                    _determineBucket: function(e) {
                        var t = this._options.objectProperties.bucket, n = new qq.Promise(), i = this;
                        return qq.isFunction(t) ? (t = t(e), qq.isGenericPromise(t) ? n = t : n.success(t)) : qq.isString(t) && n.success(t), 
                        n.then(function(t) {
                            i._buckets[e] = t;
                        }, function(t) {
                            qq.log("Problem determining bucket for ID " + e + " (" + t + ")", "error");
                        }), n;
                    },
                    _determineKeyName: function(e, t) {
                        var n = new qq.Promise(), i = this._options.objectProperties.key, s = qq.getExtension(t), o = n.failure, r = function(e, t) {
                            var i = e;
                            void 0 !== t && (i += "." + t), n.success(i);
                        };
                        switch (i) {
                          case "uuid":
                            r(this.getUuid(e), s);
                            break;

                          case "filename":
                            r(t);
                            break;

                          default:
                            qq.isFunction(i) ? this._handleKeynameFunction(i, e, r, o) : (this.log(i + " is not a valid value for the s3.keyname option!", "error"), 
                            o());
                        }
                        return n;
                    },
                    _handleKeynameFunction: function(e, t, n, i) {
                        var s = this, o = function(e) {
                            n(e);
                        }, r = function(e) {
                            s.log(qq.format("Failed to retrieve key name for {}.  Reason: {}", t, e || "null"), "error"), 
                            i(e);
                        }, a = e.call(this, t);
                        qq.isGenericPromise(a) ? a.then(o, r) : null == a ? r() : o(a);
                    },
                    _getEndpointSpecificParams: function(e, t, n) {
                        var i = {
                            key: this.getKey(e),
                            uuid: this.getUuid(e),
                            name: this.getName(e),
                            bucket: this.getBucket(e)
                        };
                        return n && n.getResponseHeader("ETag") ? i.etag = n.getResponseHeader("ETag") : t.etag && (i.etag = t.etag), 
                        i;
                    },
                    _onSubmitDelete: function(e, t) {
                        var n = {
                            key: this.getKey(e),
                            bucket: this.getBucket(e)
                        };
                        return qq.FineUploaderBasic.prototype._onSubmitDelete.call(this, e, t, n);
                    },
                    _addCannedFile: function(e) {
                        var t;
                        if (null == e.s3Key) throw new qq.Error("Did not find s3Key property in server session response.  This is required!");
                        return t = qq.FineUploaderBasic.prototype._addCannedFile.apply(this, arguments), 
                        this._cannedKeys[t] = e.s3Key, this._cannedBuckets[t] = e.s3Bucket, t;
                    }
                });
            }(), qq.s3.RequestSigner = function(e) {
                "use strict";
                var t, n, i = this, s = {}, o = {
                    expectingPolicy: !1,
                    method: "POST",
                    signatureSpec: {
                        credentialsProvider: {},
                        endpoint: null,
                        customHeaders: {}
                    },
                    maxConnections: 3,
                    paramsStore: {},
                    cors: {
                        expected: !1,
                        sendCredentials: !1
                    },
                    log: function(e, t) {}
                };
                function r(e, t, i, s) {
                    var o;
                    e.signatureConstructor ? (s && ((o = e.signatureConstructor.getHeaders())[qq.s3.util.SESSION_TOKEN_PARAM_NAME] = s, 
                    e.signatureConstructor.withHeaders(o)), function(e, t) {
                        var i = CryptoJS.enc.Utf8.parse(e), s = CryptoJS.HmacSHA1(i, n.get().secretKey), o = CryptoJS.enc.Base64.stringify(s);
                        t.success({
                            signature: o
                        });
                    }(e.signatureConstructor.getToSign().stringToSign, t)) : (s && qq.s3.util.refreshPolicyCredentials(e, s), 
                    function(e, t, i, s) {
                        var o = JSON.stringify(e), r = CryptoJS.enc.Utf8.parse(o), a = CryptoJS.enc.Base64.stringify(r), l = CryptoJS.HmacSHA1(a, n.get().secretKey), u = CryptoJS.enc.Base64.stringify(l);
                        t.success({
                            policy: a,
                            signature: u
                        }, i, s);
                    }(e, t, i, s));
                }
                qq.extend(o, e, !0), n = o.signatureSpec.credentialsProvider, t = qq.extend(this, new qq.AjaxRequester({
                    acceptHeader: "application/json",
                    method: o.method,
                    contentType: "application/json; charset=utf-8",
                    endpointStore: {
                        get: function() {
                            return o.signatureSpec.endpoint;
                        }
                    },
                    paramsStore: o.paramsStore,
                    maxConnections: o.maxConnections,
                    customHeaders: o.signatureSpec.customHeaders,
                    log: o.log,
                    onComplete: function(e, t, n) {
                        var i, r, a = t.responseText, l = s[e].promise;
                        if (delete s[e], a) try {
                            r = qq.parseJson(a);
                        } catch (e) {
                            o.log("Error attempting to parse signature response: " + e, "error");
                        }
                        r && r.invalid ? (n = !0, i = "Invalid policy document or request headers!") : r ? o.expectingPolicy && !r.policy ? (n = !0, 
                        i = "Response does not include the base64 encoded policy!") : r.signature || (n = !0, 
                        i = "Response does not include the signature!") : (n = !0, i = "Received an empty or invalid response from the server!"), 
                        n ? (i && o.log(i, "error"), l.failure(i, t)) : l.success(r);
                    },
                    cors: o.cors,
                    successfulResponseCodes: {
                        POST: [ 200 ]
                    }
                })), qq.extend(this, {
                    getSignature: function(e, i) {
                        var a = i, l = new qq.Promise();
                        return n.get().secretKey && window.CryptoJS ? n.get().expiration.getTime() > Date.now() ? r(i, l) : n.onExpired().then(function() {
                            r(i, l, n.get().accessKey, n.get().sessionToken);
                        }, function(e) {
                            o.log("Attempt to update expired credentials apparently failed! Unable to sign request.  ", "error"), 
                            l.failure("Unable to sign request - expired credentials.");
                        }) : (o.log("Submitting S3 signature request for " + e), a.signatureConstructor && (a = {
                            headers: a.signatureConstructor.getToSign().stringToSign
                        }), t.initTransport(e).withParams(a).send(), s[e] = {
                            promise: l
                        }), l;
                    },
                    constructStringToSign: function(e, t, s) {
                        var r, a, l, u, c = {};
                        return {
                            withHeaders: function(e) {
                                return c = e, this;
                            },
                            withUploadId: function(e) {
                                return r = e, this;
                            },
                            withContentType: function(e) {
                                return a = e, this;
                            },
                            withPartNum: function(e) {
                                return l = e, this;
                            },
                            getToSign: function() {
                                var d = n.get().sessionToken, h = o.signatureSpec.params && o.signatureSpec.params.drift ? o.signatureSpec.params.drift : 0;
                                return c["x-amz-date"] = new Date(Date.now() + h).toUTCString(), d && (c[qq.s3.util.SESSION_TOKEN_PARAM_NAME] = d), 
                                u = function(e, t, n, s, o, r, a) {
                                    var l, u = "POST", c = [], d = "";
                                    switch (e) {
                                      case i.REQUEST_TYPE.MULTIPART_ABORT:
                                        u = "DELETE", l = qq.format("uploadId={}", r);
                                        break;

                                      case i.REQUEST_TYPE.MULTIPART_INITIATE:
                                        l = "uploads";
                                        break;

                                      case i.REQUEST_TYPE.MULTIPART_COMPLETE:
                                        l = qq.format("uploadId={}", r);
                                        break;

                                      case i.REQUEST_TYPE.MULTIPART_UPLOAD:
                                        u = "PUT", l = qq.format("partNumber={}&uploadId={}", a, r);
                                    }
                                    return l = n + "?" + l, qq.each(o, function(e) {
                                        c.push(e);
                                    }), c.sort(), qq.each(c, function(e, t) {
                                        d += t + ":" + o[t] + "\n";
                                    }), {
                                        toSign: qq.format("{}\n\n{}\n\n{}/{}/{}", u, s || "", d || "\n", t, l),
                                        endOfUrl: l
                                    };
                                }(e, t, s, a, c, r, l), {
                                    headers: (a && (c["Content-Type"] = a), c),
                                    endOfUrl: u.endOfUrl,
                                    stringToSign: u.toSign
                                };
                            },
                            getHeaders: function() {
                                return qq.extend({}, c);
                            },
                            getEndOfUrl: function() {
                                return u && u.endOfUrl;
                            }
                        };
                    }
                });
            }, qq.s3.RequestSigner.prototype.REQUEST_TYPE = {
                MULTIPART_INITIATE: "multipart_initiate",
                MULTIPART_COMPLETE: "multipart_complete",
                MULTIPART_ABORT: "multipart_abort",
                MULTIPART_UPLOAD: "multipart_upload"
            }, qq.UploadSuccessAjaxRequester = function(e) {
                "use strict";
                var t, n = [], i = {
                    method: "POST",
                    endpoint: null,
                    maxConnections: 3,
                    customHeaders: {},
                    paramsStore: {},
                    cors: {
                        expected: !1,
                        sendCredentials: !1
                    },
                    log: function(e, t) {}
                };
                qq.extend(i, e), t = qq.extend(this, new qq.AjaxRequester({
                    acceptHeader: "application/json",
                    method: i.method,
                    endpointStore: {
                        get: function() {
                            return i.endpoint;
                        }
                    },
                    paramsStore: i.paramsStore,
                    maxConnections: i.maxConnections,
                    customHeaders: i.customHeaders,
                    log: i.log,
                    onComplete: function(e, t, s) {
                        var o, r = n[e], a = t.responseText, l = {
                            success: !0
                        }, u = {
                            success: !1
                        };
                        delete n[e], i.log(qq.format("Received the following response body to an upload success request for id {}: {}", e, a));
                        try {
                            o = qq.parseJson(a), s || o && (o.error || !1 === o.success) ? (i.log("Upload success request was rejected by the server.", "error"), 
                            r.failure(qq.extend(o, u))) : (i.log("Upload success was acknowledged by the server."), 
                            r.success(qq.extend(o, l)));
                        } catch (t) {
                            s ? (i.log(qq.format("Your server indicated failure in its upload success request response for id {}!", e), "error"), 
                            r.failure(u)) : (i.log("Upload success was acknowledged by the server."), r.success(l));
                        }
                    },
                    cors: i.cors,
                    successfulResponseCodes: {
                        POST: [ 200 ]
                    }
                })), qq.extend(this, {
                    sendSuccessRequest: function(e, s) {
                        var o = new qq.Promise();
                        return i.log("Submitting upload success request/notification for " + e), t.initTransport(e).withParams(s).send(), 
                        n[e] = o, o;
                    }
                });
            }, qq.s3.InitiateMultipartAjaxRequester = function(e) {
                "use strict";
                var t, n, i = {}, s = {
                    filenameParam: "qqfilename",
                    method: "POST",
                    endpointStore: null,
                    paramsStore: null,
                    signatureSpec: null,
                    aclStore: null,
                    reducedRedundancy: !1,
                    serverSideEncryption: !1,
                    maxConnections: 3,
                    getContentType: function(e) {},
                    getBucket: function(e) {},
                    getKey: function(e) {},
                    getName: function(e) {},
                    log: function(e, t) {}
                };
                qq.extend(s, e), n = new qq.s3.RequestSigner({
                    signatureSpec: s.signatureSpec,
                    cors: s.cors,
                    log: s.log
                }), t = qq.extend(this, new qq.AjaxRequester({
                    method: s.method,
                    contentType: null,
                    endpointStore: s.endpointStore,
                    maxConnections: s.maxConnections,
                    allowXRequestedWithAndCacheControl: !1,
                    log: s.log,
                    onComplete: function(e, t, n) {
                        var o, r, a, l, u, c = i[e], d = new DOMParser().parseFromString(t.responseText, "application/xml");
                        delete i[e], n ? (u = t.status, (r = d.getElementsByTagName("Message")).length > 0 && (l = r[0].textContent)) : (o = d.getElementsByTagName("UploadId")).length > 0 ? a = o[0].textContent : l = "Upload ID missing from request", 
                        void 0 === a ? (l ? s.log(qq.format("Specific problem detected initiating multipart upload request for {}: '{}'.", e, l), "error") : s.log(qq.format("Unexplained error with initiate multipart upload request for {}.  Status code {}.", e, u), "error"), 
                        c.failure("Problem initiating upload request.", t)) : (s.log(qq.format("Initiate multipart upload request successful for {}.  Upload ID is {}", e, a)), 
                        c.success(a, t));
                    },
                    successfulResponseCodes: {
                        POST: [ 200 ]
                    }
                })), qq.extend(this, {
                    send: function(e) {
                        var o = new qq.Promise();
                        return function(e) {
                            var t, i = s.getBucket(e), o = {}, r = new qq.Promise(), a = s.getKey(e);
                            return o["x-amz-acl"] = s.aclStore.get(e), s.reducedRedundancy && (o[qq.s3.util.REDUCED_REDUNDANCY_PARAM_NAME] = qq.s3.util.REDUCED_REDUNDANCY_PARAM_VALUE), 
                            s.serverSideEncryption && (o[qq.s3.util.SERVER_SIDE_ENCRYPTION_PARAM_NAME] = qq.s3.util.SERVER_SIDE_ENCRYPTION_PARAM_VALUE), 
                            o[qq.s3.util.AWS_PARAM_PREFIX + s.filenameParam] = encodeURIComponent(s.getName(e)), 
                            qq.each(s.paramsStore.get(e), function(e, t) {
                                o[qq.s3.util.AWS_PARAM_PREFIX + e] = encodeURIComponent(t);
                            }), t = n.constructStringToSign(n.REQUEST_TYPE.MULTIPART_INITIATE, i, a).withContentType(s.getContentType(e)).withHeaders(o), 
                            n.getSignature(e, {
                                signatureConstructor: t
                            }).then(function(e) {
                                (o = t.getHeaders()).Authorization = "AWS " + s.signatureSpec.credentialsProvider.get().accessKey + ":" + e.signature, 
                                r.success(o, t.getEndOfUrl());
                            }, r.failure), r;
                        }(e).then(function(n, r) {
                            s.log("Submitting S3 initiate multipart upload request for " + e), i[e] = o, t.initTransport(e).withPath(r).withHeaders(n).send();
                        }, o.failure), o;
                    }
                });
            }, qq.s3.CompleteMultipartAjaxRequester = function(e) {
                "use strict";
                var t, n, i = {}, s = {
                    method: "POST",
                    contentType: "text/xml",
                    endpointStore: null,
                    signatureSpec: null,
                    maxConnections: 3,
                    getBucket: function(e) {},
                    getKey: function(e) {},
                    log: function(e, t) {}
                };
                qq.extend(s, e), n = new qq.s3.RequestSigner({
                    signatureSpec: s.signatureSpec,
                    cors: s.cors,
                    log: s.log
                }), t = qq.extend(this, new qq.AjaxRequester({
                    method: s.method,
                    contentType: "application/xml; charset=UTF-8",
                    endpointStore: s.endpointStore,
                    maxConnections: s.maxConnections,
                    allowXRequestedWithAndCacheControl: !1,
                    log: s.log,
                    onComplete: function(e, t, n) {
                        var o = i[e], r = new DOMParser(), a = s.getBucket(e), l = (s.getKey(e), r.parseFromString(t.responseText, "application/xml")), u = l.getElementsByTagName("Bucket"), c = l.getElementsByTagName("Key");
                        delete i[e], s.log(qq.format("Complete response status {}, body = {}", t.status, t.responseText)), 
                        n ? s.log(qq.format("Complete Multipart Upload request for {} failed with status {}.", e, t.status), "error") : u.length && c.length ? u[0].textContent !== a && (n = !0, 
                        s.log(qq.format("Wrong bucket in response to Complete Multipart Upload request for {}.", e), "error")) : (n = !0, 
                        s.log(qq.format("Missing bucket and/or key in response to Complete Multipart Upload request for {}.", e), "error")), 
                        n ? o.failure("Problem combining the file parts!", t) : o.success({}, t);
                    },
                    successfulResponseCodes: {
                        POST: [ 200 ]
                    }
                })), qq.extend(this, {
                    send: function(e, o, r) {
                        var a = new qq.Promise();
                        return function(e, t) {
                            var i = {}, o = new qq.Promise(), r = s.getBucket(e), a = n.constructStringToSign(n.REQUEST_TYPE.MULTIPART_COMPLETE, r, s.getKey(e)).withUploadId(t).withContentType("application/xml; charset=UTF-8");
                            return n.getSignature(e, {
                                signatureConstructor: a
                            }).then(function(e) {
                                (i = a.getHeaders()).Authorization = "AWS " + s.signatureSpec.credentialsProvider.get().accessKey + ":" + e.signature, 
                                o.success(i, a.getEndOfUrl());
                            }, o.failure), o;
                        }(e, o).then(function(n, o) {
                            var l = function(e) {
                                var t = document.implementation.createDocument(null, "CompleteMultipartUpload", null);
                                return e.sort(function(e, t) {
                                    return e.part - t.part;
                                }), qq.each(e, function(e, n) {
                                    var i = n.part, s = n.etag, o = t.createElement("Part"), r = t.createElement("PartNumber"), a = t.createTextNode(i), l = t.createTextNode(s), u = t.createElement("ETag");
                                    u.appendChild(l), r.appendChild(a), o.appendChild(r), o.appendChild(u), qq(t).children()[0].appendChild(o);
                                }), new XMLSerializer().serializeToString(t);
                            }(r);
                            s.log("Submitting S3 complete multipart upload request for " + e), i[e] = a, delete n["Content-Type"], 
                            t.initTransport(e).withPath(o).withHeaders(n).withPayload(l).send();
                        }, a.failure), a;
                    }
                });
            }, qq.s3.AbortMultipartAjaxRequester = function(e) {
                "use strict";
                var t, n, i = {
                    method: "DELETE",
                    endpointStore: null,
                    signatureSpec: null,
                    maxConnections: 3,
                    getBucket: function(e) {},
                    getKey: function(e) {},
                    log: function(e, t) {}
                };
                qq.extend(i, e), n = new qq.s3.RequestSigner({
                    signatureSpec: i.signatureSpec,
                    cors: i.cors,
                    log: i.log
                }), t = qq.extend(this, new qq.AjaxRequester({
                    validMethods: [ "DELETE" ],
                    method: i.method,
                    contentType: null,
                    endpointStore: i.endpointStore,
                    maxConnections: i.maxConnections,
                    allowXRequestedWithAndCacheControl: !1,
                    log: i.log,
                    onComplete: function(e, t, n) {
                        var s, o = new DOMParser().parseFromString(t.responseText, "application/xml"), r = o.getElementsByTagName("Error");
                        i.log(qq.format("Abort response status {}, body = {}", t.status, t.responseText)), 
                        n ? i.log(qq.format("Abort Multipart Upload request for {} failed with status {}.", e, t.status), "error") : r.length ? (n = !0, 
                        s = o.getElementsByTagName("Message")[0].textContent, i.log(qq.format("Failed to Abort Multipart Upload request for {}.  Error: {}", e, s), "error")) : i.log(qq.format("Abort MPU request succeeded for file ID {}.", e));
                    },
                    successfulResponseCodes: {
                        DELETE: [ 204 ]
                    }
                })), qq.extend(this, {
                    send: function(e, s) {
                        (function(e, t) {
                            var s = {}, o = new qq.Promise(), r = (i.endpointStore.get(e), i.getBucket(e)), a = n.constructStringToSign(n.REQUEST_TYPE.MULTIPART_ABORT, r, i.getKey(e)).withUploadId(t);
                            return n.getSignature(e, {
                                signatureConstructor: a
                            }).then(function(e) {
                                (s = a.getHeaders()).Authorization = "AWS " + i.signatureSpec.credentialsProvider.get().accessKey + ":" + e.signature, 
                                o.success(s, a.getEndOfUrl());
                            }, o.failure), o;
                        })(e, s).then(function(n, s) {
                            i.log("Submitting S3 Abort multipart upload request for " + e), t.initTransport(e).withPath(s).withHeaders(n).send();
                        });
                    }
                });
            }, qq.s3.XhrUploadHandler = function(e, t) {
                "use strict";
                var n = t.getName, i = t.log, s = e.getBucket, o = e.getKeyName, r = e.filenameParam, a = e.paramsStore, l = e.endpointStore, u = e.aclStore, c = e.objectProperties.reducedRedundancy, d = e.objectProperties.serverSideEncryption, h = e.validation, p = e.signature, f = this, m = e.signature.credentialsProvider, g = {
                    combine: function(e) {
                        var t = f._getPersistableData(e).uploadId, n = f._getPersistableData(e).etags, i = new qq.Promise();
                        return v.completeMultipart.send(e, t, n).then(i.success, function(t, n) {
                            i.failure(_.done(e, n).response, n);
                        }), i;
                    },
                    done: function(e, t, n) {
                        var i;
                        _.response.parse(e, t).success && (i = t.getResponseHeader("ETag"), f._getPersistableData(e).etags || (f._getPersistableData(e).etags = []), 
                        f._getPersistableData(e).etags.push({
                            part: n + 1,
                            etag: i
                        }));
                    },
                    initHeaders: function(t, n) {
                        var i = {}, s = (e.endpointStore.get(t), _.bucket.getName(t)), o = _.key.urlSafe(t), r = new qq.Promise(), a = v.restSignature.constructStringToSign(v.restSignature.REQUEST_TYPE.MULTIPART_UPLOAD, s, o).withPartNum(n + 1).withUploadId(f._getPersistableData(t).uploadId);
                        return v.restSignature.getSignature(t + "." + n, {
                            signatureConstructor: a
                        }).then(function(e) {
                            (i = a.getHeaders()).Authorization = "AWS " + m.get().accessKey + ":" + e.signature, 
                            r.success(i, a.getEndOfUrl());
                        }, r.failure), r;
                    },
                    put: function(t, n) {
                        var i = f._createXhr(t, n), s = f._getChunkData(t, n), o = e.endpointStore.get(t), r = new qq.Promise();
                        return g.initHeaders(t, n).then(function(e, a) {
                            var l = o + "/" + a;
                            f._registerProgressHandler(t, n, s.size), _.track(t, i, n).then(r.success, r.failure), 
                            i.open("PUT", l, !0);
                            var u = !1;
                            qq.each(e, function(e, t) {
                                "Content-Type" === e && (u = !0), i.setRequestHeader(e, t);
                            }), u || i.setRequestHeader("Content-Type", ""), i.send(s.blob);
                        }, function() {
                            r.failure({
                                error: "Problem signing the chunk!"
                            }, i);
                        }), r;
                    },
                    send: function(e, t) {
                        var n = new qq.Promise();
                        return g.setup(e).then(function() {
                            g.put(e, t).then(n.success, n.failure);
                        }, function(e, t) {
                            n.failure({
                                error: e
                            }, t);
                        }), n;
                    },
                    setup: function(e) {
                        var t = new qq.Promise(), n = f._getPersistableData(e).uploadId, i = new qq.Promise();
                        return n ? n instanceof qq.Promise ? n.then(function(e) {
                            t.success(e);
                        }) : t.success(n) : (f._getPersistableData(e).uploadId = i, v.initiateMultipart.send(e).then(function(n) {
                            f._getPersistableData(e).uploadId = n, i.success(n), t.success(n);
                        }, function(n, s) {
                            f._getPersistableData(e).uploadId = null, t.failure(n, s), i.failure(n);
                        })), t;
                    }
                }, v = {
                    abortMultipart: new qq.s3.AbortMultipartAjaxRequester({
                        endpointStore: l,
                        signatureSpec: p,
                        cors: e.cors,
                        log: i,
                        getBucket: function(e) {
                            return _.bucket.getName(e);
                        },
                        getKey: function(e) {
                            return _.key.urlSafe(e);
                        }
                    }),
                    completeMultipart: new qq.s3.CompleteMultipartAjaxRequester({
                        endpointStore: l,
                        signatureSpec: p,
                        cors: e.cors,
                        log: i,
                        getBucket: function(e) {
                            return _.bucket.getName(e);
                        },
                        getKey: function(e) {
                            return _.key.urlSafe(e);
                        }
                    }),
                    initiateMultipart: new qq.s3.InitiateMultipartAjaxRequester({
                        filenameParam: r,
                        endpointStore: l,
                        paramsStore: a,
                        signatureSpec: p,
                        aclStore: u,
                        reducedRedundancy: c,
                        serverSideEncryption: d,
                        cors: e.cors,
                        log: i,
                        getContentType: function(e) {
                            return f._getMimeType(e);
                        },
                        getBucket: function(e) {
                            return _.bucket.getName(e);
                        },
                        getKey: function(e) {
                            return _.key.urlSafe(e);
                        },
                        getName: function(e) {
                            return n(e);
                        }
                    }),
                    policySignature: new qq.s3.RequestSigner({
                        expectingPolicy: !0,
                        signatureSpec: p,
                        cors: e.cors,
                        log: i
                    }),
                    restSignature: new qq.s3.RequestSigner({
                        signatureSpec: p,
                        cors: e.cors,
                        log: i
                    })
                }, b = {
                    initParams: function(e) {
                        var t = a.get(e);
                        return t[r] = n(e), qq.s3.util.generateAwsParams({
                            endpoint: l.get(e),
                            params: t,
                            type: f._getMimeType(e),
                            bucket: _.bucket.getName(e),
                            key: f.getThirdPartyFileId(e),
                            accessKey: m.get().accessKey,
                            sessionToken: m.get().sessionToken,
                            acl: u.get(e),
                            expectedStatus: 200,
                            minFileSize: h.minSizeLimit,
                            maxFileSize: h.maxSizeLimit,
                            reducedRedundancy: c,
                            serverSideEncryption: d,
                            log: i
                        }, qq.bind(v.policySignature.getSignature, this, e));
                    },
                    send: function(e) {
                        var t = new qq.Promise(), n = f._createXhr(e), s = f.getFile(e);
                        return f._registerProgressHandler(e), _.track(e, n).then(t.success, t.failure), 
                        b.setup(e, n, s).then(function(t) {
                            i("Sending upload request for " + e), n.send(t);
                        }, t.failure), t;
                    },
                    setup: function(e, t, n) {
                        var i = new FormData(), s = l.get(e), o = new qq.Promise();
                        return b.initParams(e).then(function(e) {
                            t.open("POST", s, !0), qq.obj2FormData(e, i), i.append("file", n), o.success(i);
                        }, function(e) {
                            o.failure({
                                error: e
                            });
                        }), o;
                    }
                }, _ = {
                    bucket: {
                        promise: function(e) {
                            var t = new qq.Promise(), n = f._getFileState(e).bucket;
                            return n ? t.success(n) : s(e).then(function(n) {
                                f._getFileState(e).bucket = n, t.success(n);
                            }, t.failure), t;
                        },
                        getName: function(e) {
                            return f._getFileState(e).bucket;
                        }
                    },
                    done: function(e, t) {
                        var n = _.response.parse(e, t), s = !0 !== n.success;
                        return s && _.response.shouldReset(n.code) && (i("This is an unrecoverable error, we must restart the upload entirely on the next retry attempt.", "error"), 
                        n.reset = !0), {
                            success: !s,
                            response: n
                        };
                    },
                    key: {
                        promise: function(e) {
                            var t = new qq.Promise(), i = f.getThirdPartyFileId(e);
                            return null == i ? (i = new qq.Promise(), f._setThirdPartyFileId(e, i), o(e, n(e)).then(function(n) {
                                f._setThirdPartyFileId(e, n), t.success(n);
                            }, function(n) {
                                f._setThirdPartyFileId(e, null), t.failure(n);
                            })) : qq.isGenericPromise(i) ? t.then(i.success, i.failure) : t.success(i), t;
                        },
                        urlSafe: function(e) {
                            return encodeURIComponent(f.getThirdPartyFileId(e));
                        }
                    },
                    response: {
                        parse: function(e, t) {
                            var n, s = {};
                            try {
                                i(qq.format("Received response status {} with body: {}", t.status, t.responseText)), 
                                200 === t.status ? s.success = !0 : (n = _.response.parseError(t.responseText)) && (s.error = n.message, 
                                s.code = n.code);
                            } catch (e) {
                                i("Error when attempting to parse xhr response text (" + e.message + ")", "error");
                            }
                            return s;
                        },
                        parseError: function(e) {
                            var t, n, i = new DOMParser().parseFromString(e, "application/xml"), s = {};
                            if (i.getElementsByTagName("Error").length) return t = i.getElementsByTagName("Code"), 
                            (n = i.getElementsByTagName("Message")).length && (s.message = n[0].textContent), 
                            t.length && (s.code = t[0].textContent), s;
                        },
                        shouldReset: function(e) {
                            return "EntityTooSmall" === e || "InvalidPart" === e || "InvalidPartOrder" === e || "NoSuchUpload" === e;
                        }
                    },
                    start: function(e, t) {
                        var n = new qq.Promise();
                        return _.key.promise(e).then(function() {
                            _.bucket.promise(e).then(function() {
                                null == t ? b.send(e).then(n.success, n.failure) : g.send(e, t).then(n.success, n.failure);
                            });
                        }, function(e) {
                            n.failure({
                                error: e
                            });
                        }), n;
                    },
                    track: function(e, t, n) {
                        var i = new qq.Promise();
                        return t.onreadystatechange = function() {
                            var s;
                            4 === t.readyState && (null == n ? (s = _.done(e, t), i[s.success ? "success" : "failure"](s.response, t)) : (g.done(e, t, n), 
                            s = _.done(e, t), i[s.success ? "success" : "failure"](s.response, t)));
                        }, i;
                    }
                };
                qq.extend(this, {
                    uploadChunk: _.start,
                    uploadFile: _.start
                }), qq.extend(this, new qq.XhrUploadHandler({
                    options: qq.extend({
                        namespace: "s3"
                    }, e),
                    proxy: qq.extend({
                        getEndpoint: e.endpointStore.get
                    }, t)
                })), qq.override(this, function(e) {
                    return {
                        expunge: function(t) {
                            var n = f._getPersistableData(t) && f._getPersistableData(t).uploadId, i = f._maybeDeletePersistedChunkData(t);
                            void 0 !== n && i && v.abortMultipart.send(t, n), e.expunge(t);
                        },
                        finalizeChunks: function(e) {
                            return g.combine(e);
                        },
                        _getLocalStorageId: function(t) {
                            return e._getLocalStorageId(t) + "-" + _.bucket.getName(t);
                        }
                    };
                });
            }, qq.s3.FormUploadHandler = function(e, t) {
                "use strict";
                var n = this, i = t.onUuidChanged, s = t.getName, o = t.getUuid, r = t.log, a = e.getBucket, l = e.getKeyName, u = e.filenameParam, c = e.paramsStore, d = e.endpointStore, h = e.aclStore, p = e.objectProperties.reducedRedundancy, f = e.objectProperties.serverSideEncryption, m = e.validation, g = e.signature, v = e.iframeSupport.localBlankPagePath, b = e.signature.credentialsProvider, _ = new qq.s3.RequestSigner({
                    signatureSpec: g,
                    cors: e.cors,
                    log: r
                });
                if (void 0 === v) throw new Error("successRedirectEndpoint MUST be defined if you intend to use browsers that do not support the File API!");
                function q(t, i) {
                    var o = new qq.Promise(), a = e.demoMode ? "GET" : "POST", l = e.endpointStore.get(t);
                    s(t);
                    return function(e) {
                        var t = c.get(e);
                        return t[u] = s(e), qq.s3.util.generateAwsParams({
                            endpoint: d.get(e),
                            params: t,
                            bucket: n._getFileState(e).bucket,
                            key: n.getThirdPartyFileId(e),
                            accessKey: b.get().accessKey,
                            sessionToken: b.get().sessionToken,
                            acl: h.get(e),
                            minFileSize: m.minSizeLimit,
                            maxFileSize: m.maxSizeLimit,
                            successRedirectUrl: v,
                            reducedRedundancy: p,
                            serverSideEncryption: f,
                            log: r
                        }, qq.bind(_.getSignature, this, e));
                    }(t).then(function(e) {
                        var t = n._initFormForUpload({
                            method: a,
                            endpoint: l,
                            params: e,
                            paramsInBody: !0,
                            targetName: i.name
                        });
                        o.success(t);
                    }, function(e) {
                        o.failure(e), w(t, i);
                    }), o;
                }
                function y(t) {
                    var i = n._createIframe(t), s = n.getInput(t), o = new qq.Promise();
                    return q(t, i).then(function(a) {
                        a.appendChild(s), n._attachLoadEvent(i, function(s) {
                            r("iframe loaded"), s ? !1 === s.success && (r("Amazon likely rejected the upload request", "error"), 
                            o.failure(s)) : ((s = {}).success = function(t, i) {
                                var s, o = e.endpointStore.get(t), a = qq.s3.util.getBucket(o);
                                try {
                                    if ((i.contentDocument || i.contentWindow.document).body.innerHTML, (s = qq.s3.util.parseIframeResponse(i)).bucket === a && s.key === qq.s3.util.encodeQueryStringParam(n.getThirdPartyFileId(t))) return !0;
                                    r("Response from AWS included an unexpected bucket or key name.", "error");
                                } catch (e) {
                                    r("Error when attempting to parse form upload response (" + e.message + ")", "error");
                                }
                                return !1;
                            }(t, i), !1 === s.success ? (r("A success response was received by Amazon, but it was invalid in some way.", "error"), 
                            o.failure(s)) : (qq.extend(s, qq.s3.util.parseIframeResponse(i)), o.success(s))), 
                            w(t, i);
                        }), r("Sending upload request for " + t), a.submit(), qq(a).remove();
                    }, o.failure), o;
                }
                function w(e, t) {
                    n._detachLoadEvent(e), t && qq(t).remove();
                }
                qq.extend(this, new qq.FormUploadHandler({
                    options: {
                        isCors: !1,
                        inputName: "file"
                    },
                    proxy: {
                        onCancel: e.onCancel,
                        onUuidChanged: i,
                        getName: s,
                        getUuid: o,
                        log: r
                    }
                })), qq.extend(this, {
                    uploadFile: function(e) {
                        var t = s(e), i = new qq.Promise();
                        return n.getThirdPartyFileId(e) ? n._getFileState(e).bucket ? y(e).then(i.success, i.failure) : a(e).then(function(t) {
                            n._getFileState(e).bucket = t, y(e).then(i.success, i.failure);
                        }) : l(e, t).then(function(t) {
                            a(e).then(function(s) {
                                n._getFileState(e).bucket = s, n._setThirdPartyFileId(e, t), y(e).then(i.success, i.failure);
                            }, function(e) {
                                i.failure({
                                    error: e
                                });
                            });
                        }, function(e) {
                            i.failure({
                                error: e
                            });
                        }), i;
                    }
                });
            }, function() {
                "use strict";
                qq.s3.FineUploader = function(e) {
                    var t = {
                        failedUploadTextDisplay: {
                            mode: "custom"
                        }
                    };
                    qq.extend(t, e, !0), qq.FineUploader.call(this, t, "s3"), qq.supportedFeatures.ajaxUploading || void 0 !== t.iframeSupport.localBlankPagePath || (this._options.element.innerHTML = "<div>You MUST set the <code>localBlankPagePath</code> property of the <code>iframeSupport</code> option since this browser does not support the File API!</div>");
                }, qq.extend(qq.s3.FineUploader.prototype, qq.s3.FineUploaderBasic.prototype), qq.extend(qq.s3.FineUploader.prototype, qq.uiPublicApi), 
                qq.extend(qq.s3.FineUploader.prototype, qq.uiPrivateApi);
            }(), function(e) {
                "use strict";
                e.fn.fineUploaderS3 = function(t) {
                    return "object" == typeof t && (t.endpointType = "s3"), e.fn.fineUploader.apply(this, arguments);
                };
            }(jQuery), qq.azure = qq.azure || {}, qq.azure.util = qq.azure.util || function() {
                "use strict";
                return {
                    AZURE_PARAM_PREFIX: "x-ms-meta-",
                    getParamsAsHeaders: function(e) {
                        var t = {};
                        return qq.each(e, function(e, n) {
                            var i = qq.azure.util.AZURE_PARAM_PREFIX + e;
                            qq.isFunction(n) ? t[i] = encodeURIComponent(String(n())) : qq.isObject(n) ? qq.extend(t, qq.azure.util.getParamsAsHeaders(n)) : t[i] = encodeURIComponent(String(n));
                        }), t;
                    },
                    parseAzureError: function(e, t) {
                        var n, i, s = new DOMParser().parseFromString(e, "application/xml").getElementsByTagName("Error")[0], o = {};
                        if (t("Received error response: " + e, "error"), s) return (i = s.getElementsByTagName("Message")[0]) && (o.message = i.textContent), 
                        (n = s.getElementsByTagName("Code")[0]) && (o.code = n.textContent), t("Parsed Azure error: " + JSON.stringify(o), "error"), 
                        o;
                    }
                };
            }(), function() {
                "use strict";
                qq.azure.FineUploaderBasic = function(e) {
                    if (!qq.supportedFeatures.ajaxUploading) throw new qq.Error("Uploading directly to Azure is not possible in this browser.");
                    var t = {
                        signature: {
                            endpoint: null,
                            customHeaders: {}
                        },
                        blobProperties: {
                            name: "uuid"
                        },
                        uploadSuccess: {
                            endpoint: null,
                            params: {},
                            customHeaders: {}
                        },
                        chunking: {
                            partSize: 4e6,
                            minFileSize: 4000001
                        }
                    };
                    qq.extend(t, e, !0), qq.FineUploaderBasic.call(this, t), this._uploadSuccessParamsStore = this._createStore(this._options.uploadSuccess.params), 
                    this._uploadSuccessEndpointStore = this._createStore(this._options.uploadSuccess.endpoint), 
                    this._failedSuccessRequestCallbacks = {}, this._cannedBlobNames = {};
                }, qq.extend(qq.azure.FineUploaderBasic.prototype, qq.basePublicApi), qq.extend(qq.azure.FineUploaderBasic.prototype, qq.basePrivateApi), 
                qq.extend(qq.azure.FineUploaderBasic.prototype, qq.nonTraditionalBasePublicApi), 
                qq.extend(qq.azure.FineUploaderBasic.prototype, qq.nonTraditionalBasePrivateApi), 
                qq.extend(qq.azure.FineUploaderBasic.prototype, {
                    getBlobName: function(e) {
                        return null == this._cannedBlobNames[e] ? this._handler.getThirdPartyFileId(e) : this._cannedBlobNames[e];
                    },
                    _getEndpointSpecificParams: function(e) {
                        return {
                            blob: this.getBlobName(e),
                            uuid: this.getUuid(e),
                            name: this.getName(e),
                            container: this._endpointStore.get(e)
                        };
                    },
                    _createUploadHandler: function() {
                        return qq.FineUploaderBasic.prototype._createUploadHandler.call(this, {
                            signature: this._options.signature,
                            onGetBlobName: qq.bind(this._determineBlobName, this),
                            deleteBlob: qq.bind(this._deleteBlob, this, !0)
                        }, "azure");
                    },
                    _determineBlobName: function(e) {
                        var t = this._options.blobProperties.name, n = this.getUuid(e), i = this.getName(e), s = qq.getExtension(i);
                        if (!qq.isString(t)) return t.call(this, e);
                        switch (t) {
                          case "uuid":
                            return new qq.Promise().success(n + "." + s);

                          case "filename":
                            return new qq.Promise().success(i);

                          default:
                            return new qq.Promise.failure("Invalid blobName option value - " + t);
                        }
                    },
                    _addCannedFile: function(e) {
                        var t;
                        if (null == e.blobName) throw new qq.Error("Did not find blob name property in server session response.  This is required!");
                        return t = qq.FineUploaderBasic.prototype._addCannedFile.apply(this, arguments), 
                        this._cannedBlobNames[t] = e.blobName, t;
                    },
                    _deleteBlob: function(e, t) {
                        var n = this, i = {}, s = function(e) {
                            return n._endpointStore.get(e) + "/" + n.getBlobName(e);
                        }, o = {
                            get: function(e) {
                                return i[e];
                            }
                        }, r = new qq.azure.DeleteBlob({
                            endpointStore: o,
                            log: qq.bind(n.log, n),
                            onDelete: function(e) {
                                n._onDelete(e), n._options.callbacks.onDelete(e);
                            },
                            onDeleteComplete: function(t, s, o) {
                                delete i[t], o && (e ? n.log("Will cancel upload, but failed to remove uncommitted parts from Azure.", "error") : qq.azure.util.parseAzureError(s.responseText, qq.bind(n.log, n))), 
                                e ? (qq.FineUploaderBasic.prototype._onCancel.call(n, t, n.getName(t)), n.log("Deleted uncommitted blob chunks for " + t)) : (n._onDeleteComplete(t, s, o), 
                                n._options.callbacks.onDeleteComplete(t, s, o));
                            }
                        });
                        new qq.azure.GetSas({
                            cors: this._options.cors,
                            endpointStore: {
                                get: function() {
                                    return n._options.signature.endpoint;
                                }
                            },
                            restRequestVerb: r.method,
                            log: qq.bind(n.log, n)
                        }).request(t, s(t)).then(qq.bind(function(e, t) {
                            i[e] = t, r.send(e);
                        }, n, t), qq.bind(function(t, i, s) {
                            e ? (n.log("Will cancel upload, but cannot remove uncommitted parts from Azure due to issue retrieving SAS", "error"), 
                            qq.FineUploaderBasic.prototype._onCancel.call(n, t, n.getName(t))) : (n._onDeleteComplete(t, s, !0), 
                            n._options.callbacks.onDeleteComplete(t, s, !0));
                        }, n, t));
                    },
                    _createDeleteHandler: function() {
                        var e = this;
                        return {
                            sendDelete: function(t, n) {
                                e._deleteBlob(!1, t);
                            }
                        };
                    }
                });
            }(), qq.azure.XhrUploadHandler = function(e, t) {
                "use strict";
                var n = this, i = t.log, s = e.cors, o = e.endpointStore, r = e.paramsStore, a = e.signature, l = e.filenameParam, u = e.chunking.minFileSize, c = e.deleteBlob, d = e.onGetBlobName, h = t.getName, p = t.getSize, f = function(e) {
                    var t = r.get(e);
                    return t[l] = h(e), t;
                }, m = {
                    putBlob: new qq.azure.PutBlob({
                        getBlobMetadata: f,
                        log: i
                    }),
                    putBlock: new qq.azure.PutBlock({
                        log: i
                    }),
                    putBlockList: new qq.azure.PutBlockList({
                        getBlobMetadata: f,
                        log: i
                    }),
                    getSasForPutBlobOrBlock: new qq.azure.GetSas({
                        cors: s,
                        customHeaders: a.customHeaders,
                        endpointStore: {
                            get: function() {
                                return a.endpoint;
                            }
                        },
                        log: i,
                        restRequestVerb: "PUT"
                    })
                };
                function g(e, t) {
                    var s = null == t ? e : e + "." + t, r = new qq.Promise(), a = function(e) {
                        i("GET SAS request succeeded."), r.success(e);
                    }, l = function(e, t) {
                        i("GET SAS request failed: " + e, "error"), r.failure({
                            error: "Problem communicating with local server"
                        }, t);
                    };
                    return function(e) {
                        var t = o.get(e), i = new qq.Promise();
                        return d(e).then(function(s) {
                            n._setThirdPartyFileId(e, s), i.success(t + "/" + s);
                        }, function(e) {
                            i.failure(e);
                        }), i;
                    }(e).then(function(e) {
                        m.getSasForPutBlobOrBlock.request(s, e).then(a, l);
                    }, function(t) {
                        i(qq.format("Failed to determine blob name for ID {} - {}", e, t), "error"), r.failure({
                            error: t
                        });
                    }), r;
                }
                function v(e, t) {
                    var n = qq.azure.util.parseAzureError(e.responseText, i);
                    t.failure({
                        error: "Problem sending file to Azure",
                        azureError: n && n.message,
                        reset: 403 === e.status
                    });
                }
                qq.extend(this, {
                    uploadChunk: function(e, t) {
                        var s = new qq.Promise();
                        return g(e, t).then(function(o) {
                            var r = n._createXhr(e, t), a = n._getChunkData(e, t);
                            n._registerProgressHandler(e, t, a.size), n._registerXhr(e, t, r, m.putBlock), m.putBlock.upload(e + "." + t, r, o, t, a.blob).then(function(t) {
                                n._getPersistableData(e).blockIdEntries || (n._getPersistableData(e).blockIdEntries = []), 
                                n._getPersistableData(e).blockIdEntries.push(t), i("Put Block call succeeded for " + e), 
                                s.success({}, r);
                            }, function() {
                                i(qq.format("Put Block call failed for ID {} on part {}", e, t), "error"), v(r, s);
                            });
                        }, s.failure), s;
                    },
                    uploadFile: function(e) {
                        var t = new qq.Promise(), s = n.getFile(e);
                        return g(e).then(function(o) {
                            var r = n._createXhr(e);
                            n._registerProgressHandler(e), m.putBlob.upload(e, r, o, s).then(function() {
                                i("Put Blob call succeeded for " + e), t.success({}, r);
                            }, function() {
                                i("Put Blob call failed for " + e, "error"), v(r, t);
                            });
                        }, t.failure), t;
                    }
                }), qq.extend(this, new qq.XhrUploadHandler({
                    options: qq.extend({
                        namespace: "azure"
                    }, e),
                    proxy: qq.extend({
                        getEndpoint: e.endpointStore.get
                    }, t)
                })), qq.override(this, function(e) {
                    return {
                        expunge: function(t) {
                            var i = n._wasCanceled(t), s = n._getPersistableData(t), o = s && s.blockIdEntries || [];
                            i && o.length > 0 && c(t), e.expunge(t);
                        },
                        finalizeChunks: function(e) {
                            return function(e) {
                                var t = new qq.Promise();
                                return g(e).then(function(s) {
                                    var o = n._getMimeType(e), r = n._getPersistableData(e).blockIdEntries;
                                    m.putBlockList.send(e, s, r, o, function(t) {
                                        n._registerXhr(e, null, t, m.putBlockList);
                                    }).then(function(n) {
                                        i("Success combining chunks for id " + e), t.success({}, n);
                                    }, function(n) {
                                        i("Attempt to combine chunks failed for id " + e, "error"), v(n, t);
                                    });
                                }, t.failure), t;
                            }(e);
                        },
                        _shouldChunkThisFile: function(t) {
                            return e._shouldChunkThisFile(t) && p(t) >= u;
                        }
                    };
                });
            }, qq.azure.GetSas = function(e) {
                "use strict";
                var t, n = {
                    cors: {
                        expected: !1,
                        sendCredentials: !1
                    },
                    customHeaders: {},
                    restRequestVerb: "PUT",
                    endpointStore: null,
                    log: function(e, t) {}
                }, i = {};
                qq.extend(n, e), t = qq.extend(this, new qq.AjaxRequester({
                    acceptHeader: "application/json",
                    validMethods: [ "GET" ],
                    method: "GET",
                    successfulResponseCodes: {
                        GET: [ 200 ]
                    },
                    contentType: null,
                    customHeaders: n.customHeaders,
                    endpointStore: n.endpointStore,
                    cors: n.cors,
                    log: n.log,
                    onComplete: function(e, t, n) {
                        var s = i[e];
                        n ? s.failure("Received response code " + t.status, t) : t.responseText.length ? s.success(t.responseText) : s.failure("Empty response.", t), 
                        delete i[e];
                    }
                })), qq.extend(this, {
                    request: function(e, s) {
                        var o = new qq.Promise(), r = n.restRequestVerb;
                        return n.log(qq.format("Submitting GET SAS request for a {} REST request related to file ID {}.", r, e)), 
                        i[e] = o, t.initTransport(e).withParams({
                            bloburi: s,
                            _method: r
                        }).withCacheBuster().send(), o;
                    }
                });
            }, qq.azure.DeleteBlob = function(e) {
                "use strict";
                var t, n, i = {
                    endpointStore: {},
                    onDelete: function(e) {},
                    onDeleteComplete: function(e, t, n) {},
                    log: function(e, t) {}
                };
                qq.extend(i, e), t = qq.extend(this, new qq.AjaxRequester({
                    validMethods: [ "DELETE" ],
                    method: "DELETE",
                    successfulResponseCodes: (n = {
                        DELETE: [ 202 ]
                    }, n),
                    contentType: null,
                    endpointStore: i.endpointStore,
                    allowXRequestedWithAndCacheControl: !1,
                    cors: {
                        expected: !0
                    },
                    log: i.log,
                    onSend: i.onDelete,
                    onComplete: i.onDeleteComplete
                })), qq.extend(this, {
                    method: "DELETE",
                    send: function(e) {
                        return i.log("Submitting Delete Blob request for " + e), t.initTransport(e).send();
                    }
                });
            }, qq.azure.PutBlob = function(e) {
                "use strict";
                var t, n, i = {
                    getBlobMetadata: function(e) {},
                    log: function(e, t) {}
                }, s = {}, o = {}, r = {
                    get: function(e) {
                        return s[e];
                    }
                };
                qq.extend(i, e), t = qq.extend(this, new qq.AjaxRequester({
                    validMethods: [ "PUT" ],
                    method: "PUT",
                    successfulResponseCodes: (n = {
                        PUT: [ 201 ]
                    }, n),
                    contentType: null,
                    customHeaders: function(e) {
                        var t = i.getBlobMetadata(e), n = qq.azure.util.getParamsAsHeaders(t);
                        return n["x-ms-blob-type"] = "BlockBlob", n;
                    },
                    endpointStore: r,
                    allowXRequestedWithAndCacheControl: !1,
                    cors: {
                        expected: !0
                    },
                    log: i.log,
                    onComplete: function(e, t, n) {
                        var i = o[e];
                        delete s[e], delete o[e], n ? i.failure() : i.success();
                    }
                })), qq.extend(this, {
                    method: "PUT",
                    upload: function(e, n, r, a) {
                        var l = new qq.Promise();
                        return i.log("Submitting Put Blob request for " + e), o[e] = l, s[e] = r, t.initTransport(e).withPayload(a).withHeaders({
                            "Content-Type": a.type
                        }).send(n), l;
                    }
                });
            }, qq.azure.PutBlockList = function(e) {
                "use strict";
                var t, n, i = {}, s = {
                    getBlobMetadata: function(e) {},
                    log: function(e, t) {}
                }, o = {}, r = {
                    get: function(e) {
                        return o[e];
                    }
                };
                qq.extend(s, e), t = qq.extend(this, new qq.AjaxRequester({
                    validMethods: [ "PUT" ],
                    method: "PUT",
                    successfulResponseCodes: (n = {
                        PUT: [ 201 ]
                    }, n),
                    customHeaders: function(e) {
                        var t = s.getBlobMetadata(e);
                        return qq.azure.util.getParamsAsHeaders(t);
                    },
                    contentType: "text/plain",
                    endpointStore: r,
                    allowXRequestedWithAndCacheControl: !1,
                    cors: {
                        expected: !0
                    },
                    log: s.log,
                    onSend: function() {},
                    onComplete: function(e, t, n) {
                        var s = i[e];
                        delete o[e], delete i[e], n ? s.failure(t) : s.success(t);
                    }
                })), qq.extend(this, {
                    method: "PUT",
                    send: function(e, n, r, a, l) {
                        var u = new qq.Promise(), c = function(e) {
                            var t = document.implementation.createDocument(null, "BlockList", null);
                            return e.sort(function(e, t) {
                                return e.part - t.part;
                            }), qq.each(e, function(e, n) {
                                var i = t.createElement("Latest"), s = t.createTextNode(n.id);
                                i.appendChild(s), qq(t).children()[0].appendChild(i);
                            }), new XMLSerializer().serializeToString(t);
                        }(r);
                        return i[e] = u, s.log(qq.format("Submitting Put Block List request for {}", e)), 
                        o[e] = qq.format("{}&comp=blocklist", n), l(t.initTransport(e).withPayload(c).withHeaders({
                            "x-ms-blob-content-type": a
                        }).send()), u;
                    }
                });
            }, qq.azure.PutBlock = function(e) {
                "use strict";
                var t, n, i = {}, s = {}, o = {
                    log: function(e, t) {}
                }, r = {}, a = {
                    get: function(e) {
                        return r[e];
                    }
                };
                qq.extend(o, e), t = qq.extend(this, new qq.AjaxRequester({
                    validMethods: [ "PUT" ],
                    method: "PUT",
                    successfulResponseCodes: (n = {
                        PUT: [ 201 ]
                    }, n),
                    contentType: null,
                    endpointStore: a,
                    allowXRequestedWithAndCacheControl: !1,
                    cors: {
                        expected: !0
                    },
                    log: o.log,
                    onComplete: function(e, t, n) {
                        var o = s[e], a = i[e];
                        delete r[e], delete s[e], delete i[e], n ? o.failure() : o.success(a);
                    }
                })), qq.extend(this, {
                    method: "PUT",
                    upload: function(e, n, a, l, u) {
                        var c = new qq.Promise(), d = function(e) {
                            var t = (new Array(6).join("0") + e).slice(-5);
                            return btoa(t);
                        }(l);
                        return s[e] = c, o.log(qq.format("Submitting Put Block request for {} = part {}", e, l)), 
                        r[e] = qq.format("{}&comp=block&blockid={}", a, encodeURIComponent(d)), i[e] = {
                            part: l,
                            id: d
                        }, t.initTransport(e).withPayload(u).send(n), c;
                    }
                });
            }, function() {
                "use strict";
                qq.azure.FineUploader = function(e) {
                    var t = {
                        failedUploadTextDisplay: {
                            mode: "custom"
                        }
                    };
                    qq.extend(t, e, !0), qq.FineUploader.call(this, t, "azure");
                }, qq.extend(qq.azure.FineUploader.prototype, qq.azure.FineUploaderBasic.prototype), 
                qq.extend(qq.azure.FineUploader.prototype, qq.uiPublicApi), qq.extend(qq.azure.FineUploader.prototype, qq.uiPrivateApi), 
                qq.extend(qq.azure.FineUploader.prototype, {});
            }(), function(e) {
                "use strict";
                e.fn.fineUploaderAzure = function(t) {
                    return "object" == typeof t && (t.endpointType = "azure"), e.fn.fineUploader.apply(this, arguments);
                };
            }(jQuery);
            var CryptoJS = CryptoJS || function(e, t) {
                var n = {}, i = n.lib = {}, s = i.Base = function() {
                    function e() {}
                    return {
                        extend: function(t) {
                            e.prototype = this;
                            var n = new e();
                            return t && n.mixIn(t), n.hasOwnProperty("init") || (n.init = function() {
                                n.$super.init.apply(this, arguments);
                            }), n.init.prototype = n, n.$super = this, n;
                        },
                        create: function() {
                            var e = this.extend();
                            return e.init.apply(e, arguments), e;
                        },
                        init: function() {},
                        mixIn: function(e) {
                            for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                            e.hasOwnProperty("toString") && (this.toString = e.toString);
                        },
                        clone: function() {
                            return this.init.prototype.extend(this);
                        }
                    };
                }(), o = i.WordArray = s.extend({
                    init: function(e, t) {
                        e = this.words = e || [], this.sigBytes = void 0 != t ? t : 4 * e.length;
                    },
                    toString: function(e) {
                        return (e || a).stringify(this);
                    },
                    concat: function(e) {
                        var t = this.words, n = e.words, i = this.sigBytes, s = e.sigBytes;
                        if (this.clamp(), i % 4) for (var o = 0; o < s; o++) {
                            var r = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                            t[i + o >>> 2] |= r << 24 - (i + o) % 4 * 8;
                        } else if (n.length > 65535) for (o = 0; o < s; o += 4) t[i + o >>> 2] = n[o >>> 2]; else t.push.apply(t, n);
                        return this.sigBytes += s, this;
                    },
                    clamp: function() {
                        var t = this.words, n = this.sigBytes;
                        t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);
                    },
                    clone: function() {
                        var e = s.clone.call(this);
                        return e.words = this.words.slice(0), e;
                    },
                    random: function(t) {
                        for (var n = [], i = 0; i < t; i += 4) n.push(4294967296 * e.random() | 0);
                        return new o.init(n, t);
                    }
                }), r = n.enc = {}, a = r.Hex = {
                    stringify: function(e) {
                        for (var t = e.words, n = e.sigBytes, i = [], s = 0; s < n; s++) {
                            var o = t[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                            i.push((o >>> 4).toString(16)), i.push((15 & o).toString(16));
                        }
                        return i.join("");
                    },
                    parse: function(e) {
                        for (var t = e.length, n = [], i = 0; i < t; i += 2) n[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4;
                        return new o.init(n, t / 2);
                    }
                }, l = r.Latin1 = {
                    stringify: function(e) {
                        for (var t = e.words, n = e.sigBytes, i = [], s = 0; s < n; s++) {
                            var o = t[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                            i.push(String.fromCharCode(o));
                        }
                        return i.join("");
                    },
                    parse: function(e) {
                        for (var t = e.length, n = [], i = 0; i < t; i++) n[i >>> 2] |= (255 & e.charCodeAt(i)) << 24 - i % 4 * 8;
                        return new o.init(n, t);
                    }
                }, u = r.Utf8 = {
                    stringify: function(e) {
                        try {
                            return decodeURIComponent(escape(l.stringify(e)));
                        } catch (e) {
                            throw new Error("Malformed UTF-8 data");
                        }
                    },
                    parse: function(e) {
                        return l.parse(unescape(encodeURIComponent(e)));
                    }
                }, c = i.BufferedBlockAlgorithm = s.extend({
                    reset: function() {
                        this._data = new o.init(), this._nDataBytes = 0;
                    },
                    _append: function(e) {
                        "string" == typeof e && (e = u.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
                    },
                    _process: function(t) {
                        var n = this._data, i = n.words, s = n.sigBytes, r = this.blockSize, a = s / (4 * r), l = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * r, u = e.min(4 * l, s);
                        if (l) {
                            for (var c = 0; c < l; c += r) this._doProcessBlock(i, c);
                            var d = i.splice(0, l);
                            n.sigBytes -= u;
                        }
                        return new o.init(d, u);
                    },
                    clone: function() {
                        var e = s.clone.call(this);
                        return e._data = this._data.clone(), e;
                    },
                    _minBufferSize: 0
                }), d = (i.Hasher = c.extend({
                    cfg: s.extend(),
                    init: function(e) {
                        this.cfg = this.cfg.extend(e), this.reset();
                    },
                    reset: function() {
                        c.reset.call(this), this._doReset();
                    },
                    update: function(e) {
                        return this._append(e), this._process(), this;
                    },
                    finalize: function(e) {
                        return e && this._append(e), this._doFinalize();
                    },
                    blockSize: 16,
                    _createHelper: function(e) {
                        return function(t, n) {
                            return new e.init(n).finalize(t);
                        };
                    },
                    _createHmacHelper: function(e) {
                        return function(t, n) {
                            return new d.HMAC.init(e, n).finalize(t);
                        };
                    }
                }), n.algo = {});
                return n;
            }(Math), C, WordArray;
            return C = CryptoJS, WordArray = C.lib.WordArray, C.enc.Base64 = {
                stringify: function(e) {
                    var t = e.words, n = e.sigBytes, i = this._map;
                    e.clamp();
                    for (var s = [], o = 0; o < n; o += 3) for (var r = (t[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (t[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | t[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, a = 0; a < 4 && o + .75 * a < n; a++) s.push(i.charAt(r >>> 6 * (3 - a) & 63));
                    var l = i.charAt(64);
                    if (l) for (;s.length % 4; ) s.push(l);
                    return s.join("");
                },
                parse: function(e) {
                    var t = e.length, n = this._map, i = n.charAt(64);
                    if (i) {
                        var s = e.indexOf(i);
                        -1 != s && (t = s);
                    }
                    for (var o = [], r = 0, a = 0; a < t; a++) if (a % 4) {
                        var l = n.indexOf(e.charAt(a - 1)) << a % 4 * 2, u = n.indexOf(e.charAt(a)) >>> 6 - a % 4 * 2;
                        o[r >>> 2] |= (l | u) << 24 - r % 4 * 8, r++;
                    }
                    return WordArray.create(o, r);
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            }, function() {
                var e = CryptoJS, t = e.lib.Base, n = e.enc.Utf8;
                e.algo.HMAC = t.extend({
                    init: function(e, t) {
                        e = this._hasher = new e.init(), "string" == typeof t && (t = n.parse(t));
                        var i = e.blockSize, s = 4 * i;
                        t.sigBytes > s && (t = e.finalize(t)), t.clamp();
                        for (var o = this._oKey = t.clone(), r = this._iKey = t.clone(), a = o.words, l = r.words, u = 0; u < i; u++) a[u] ^= 1549556828, 
                        l[u] ^= 909522486;
                        o.sigBytes = r.sigBytes = s, this.reset();
                    },
                    reset: function() {
                        var e = this._hasher;
                        e.reset(), e.update(this._iKey);
                    },
                    update: function(e) {
                        return this._hasher.update(e), this;
                    },
                    finalize: function(e) {
                        var t = this._hasher, n = t.finalize(e);
                        return t.reset(), t.finalize(this._oKey.clone().concat(n));
                    }
                });
            }(), function() {
                var e = CryptoJS, t = e.lib, n = t.WordArray, i = t.Hasher, s = [], o = e.algo.SHA1 = i.extend({
                    _doReset: function() {
                        this._hash = new n.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
                    },
                    _doProcessBlock: function(e, t) {
                        for (var n = this._hash.words, i = n[0], o = n[1], r = n[2], a = n[3], l = n[4], u = 0; u < 80; u++) {
                            if (u < 16) s[u] = 0 | e[t + u]; else {
                                var c = s[u - 3] ^ s[u - 8] ^ s[u - 14] ^ s[u - 16];
                                s[u] = c << 1 | c >>> 31;
                            }
                            var d = (i << 5 | i >>> 27) + l + s[u];
                            d += u < 20 ? 1518500249 + (o & r | ~o & a) : u < 40 ? 1859775393 + (o ^ r ^ a) : u < 60 ? (o & r | o & a | r & a) - 1894007588 : (o ^ r ^ a) - 899497514, 
                            l = a, a = r, r = o << 30 | o >>> 2, o = i, i = d;
                        }
                        n[0] = n[0] + i | 0, n[1] = n[1] + o | 0, n[2] = n[2] + r | 0, n[3] = n[3] + a | 0, 
                        n[4] = n[4] + l | 0;
                    },
                    _doFinalize: function() {
                        var e = this._data, t = e.words, n = 8 * this._nDataBytes, i = 8 * e.sigBytes;
                        return t[i >>> 5] |= 128 << 24 - i % 32, t[14 + (i + 64 >>> 9 << 4)] = Math.floor(n / 4294967296), 
                        t[15 + (i + 64 >>> 9 << 4)] = n, e.sigBytes = 4 * t.length, this._process(), this._hash;
                    },
                    clone: function() {
                        var e = i.clone.call(this);
                        return e._hash = this._hash.clone(), e;
                    }
                });
                e.SHA1 = i._createHelper(o), e.HmacSHA1 = i._createHmacHelper(o);
            }(), qq;
        }.call(exports, __webpack_require__, exports, module), void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    },
    340: function(e, t, n) {
        "use strict";
        var i = n(14), s = n(3);
        t.a = {
            display: function(e, t, n) {
                i.default.removeErrors(e), i.default.tooltip(e, s.default.translateErrorMessage(t), n), 
                i.default.removeOnInput(e);
            }
        };
    },
    341: function(e, t, n) {
        "use strict";
        var i = n(5), s = n(0), o = n.n(s), r = n(195), a = n(308), l = n(19), u = n.n(l), c = n(69), d = n.n(c), h = n(9), p = n.n(h), f = n(6), m = n.n(f), g = n(380), v = n.n(g), b = n(40), _ = n(445), q = n.n(_), y = n(18), w = n(332), x = n.n(w).a.extend({
            getCroppedCopy: function(e) {
                var t = new this.constructor(), n = this._toCroppedCanvas(e), i = this._getMimeType();
                return new u.a(function(e, s) {
                    t.on("load", e).on("error", s).src(n.toDataURL(i || "image/png"));
                });
            },
            _getMimeType: function() {
                var e = /image(.*)[;]/.exec(this.image.src)[0];
                return e && (e = e.slice(0, -1)), e;
            },
            _toCroppedCanvas: function(e) {
                var t = document.createElement("canvas"), n = e.w || e.x2 - e.x, i = e.h || e.y2 - e.y;
                return t.width = n, t.height = i, t.getContext("2d").drawImage(this.image, e.x, e.y, n, i, 0, 0, n, i), 
                t;
            }
        }, {
            getInfo: function(e) {
                var t = this;
                return new u.a(function(n, i) {
                    var s = new t();
                    s.on("load", function() {
                        n({
                            isAnimatedGif: s.isAnimatedGif(),
                            isCMYK: s.isCMYK(),
                            width: s.width(),
                            height: s.height(),
                            img: s.image
                        });
                    }).on("error", function() {
                        i(arguments);
                    }).src(e);
                });
            }
        }), S = n(24), C = n(3), E = n(336), P = n.n(E), I = n(115), T = n.n(I);
        function k(e) {
            return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        function A() {
            return (A = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                }
                return e;
            }).apply(this, arguments);
        }
        var F = i.default.IMAGE || {}, D = m.a.extend({
            uploadDialog: null,
            Image: x,
            options: {
                button: null,
                crop: !0,
                submitAfterCrop: !0,
                autoUpload: !0,
                request: {
                    endpoint: F.UPLOAD_URL,
                    inputName: F.UPLOAD_KEY,
                    customHeaders: {
                        "X-BCP": v.a.get()
                    }
                },
                multiple: !1,
                maxConnections: 1,
                validation: {
                    allowedExtensions: F.EXTENSIONS,
                    sizeLimit: F.LIMIT,
                    image: {
                        minHeight: F.HEIGHT,
                        minWidth: F.WIDTH
                    },
                    accept: "image/*"
                },
                messages: {
                    typeError: C.default.translate("upload_error_type", "Please upload a file with these extensions: {extensions}."),
                    sizeError: C.default.translate("upload_error_size", "{file} is too large, the maximum file size is {sizeLimit}."),
                    minSizeError: C.default.translate("upload_error_min_size", "{file} is too small, please choose an image that is at least {minSizeLimit} pixels."),
                    emptyError: C.default.translate("upload_error_empty", "{file} is empty, please select another image."),
                    noFilesError: C.default.translate("upload_error_no_files", "You did not select any files to upload"),
                    tooManyItemsError: C.default.translate("upload_error_too_many_items", "You have uploaded ({netItems}) images. Please upload {itemLimit} image(s) at a time."),
                    maxHeightImageError: C.default.translate("upload_error_max_height_image", "Please choose an image that is less than {maxHeight} pixels tall."),
                    maxWidthImageError: C.default.translate("upload_error_max_width_image", "Please choose an image that is less than {maxWidth} pixels wide."),
                    minHeightImageError: C.default.translate("upload_error_min_height_image", "Please choose an image that is at least {minHeight} pixels tall."),
                    minWidthImageError: C.default.translate("upload_error_min_width_image", "Please choose an image that is at least {minWidth} pixels wide."),
                    retryFailTooManyItems: C.default.translate("upload_error_retry_fail_too_many_items", "You have reached your upload limit. Please check back later to upload more images."),
                    onLeave: C.default.translate("upload_error_on_leave", "The files are being uploaded, if you leave now the upload will be canceled.")
                },
                text: {
                    defaultResponseError: ""
                }
            },
            init: function(e) {
                var t = this;
                if (this.config = {
                    callbacks: {
                        onSubmit: this._onSubmit.bind(this),
                        onProgress: this._onProgress.bind(this),
                        onComplete: this._onComplete.bind(this),
                        onCancel: this._onCancel.bind(this),
                        onError: this._onError.bind(this),
                        onAllComplete: this._onAllComplete.bind(this)
                    }
                }, T()(this.config, this.options, e), !this.config.button) throw new Error("button not supplied");
                o()(this.config.button).on("click", function() {
                    return e = i.default, n = !0, (!e.uploads || !0 !== e.uploads.disabled || (n && Object(b.default)({
                        title: e.uploads.disabled_header || "Upload Maintenance",
                        html: e.uploads.disabled_msg || "Please try again later",
                        buttons: [ {
                            label: "Okay",
                            classes: [ "js-close" ]
                        } ],
                        hideClose: !0
                    }), !1)) && (t._isBrowserSupported() ? void 0 : (t.trigger("unsupportedBrowser"), 
                    !1));
                    var e, n;
                }), this.uploader = new P.a.FineUploaderBasic(this.config);
            },
            bind: function(e) {
                return this.uploadDialog = e, this;
            },
            reset: function() {
                this.uploader.reset();
            },
            getInput: function(e) {
                return this._getButton(e).getInput();
            },
            setDropElement: function(e) {
                var t = this.uploader;
                return this.dropZone = new P.a.DragAndDrop({
                    dropZoneElements: [ e ],
                    callbacks: {
                        processingDroppedFiles: function() {},
                        processingDroppedFilesComplete: function(e) {
                            t.addFiles(e);
                        }
                    }
                }), this;
            },
            choose: function(e) {
                o()(this.getInput(e)).click();
            },
            getOptions: function() {
                return this.uploader._options;
            },
            getUploadsByStatus: function(e) {
                return this.uploader.getUploads({
                    status: e
                });
            },
            cancelAll: function() {
                return this.uploader.cancelAll();
            },
            formatSize: function(e) {
                return this.uploader._formatSize(e);
            },
            hasSubmittedUploads: function() {
                return this.getUploadsByStatus(P.a.status.SUBMITTED).length;
            },
            _isBrowserSupported: function() {
                return !!window.FileReader;
            },
            getUploads: function() {
                return this.uploader.getUploads();
            },
            getUrl: function() {
                return this.uploader._endpointStore.get("url");
            },
            setParams: function(e) {
                return this.params = this.params || {}, p()(this.params, e), this.uploader.setParams(this.params), 
                this;
            },
            setMethod: function(e) {
                return this.uploader._paramsStore.method = e, this;
            },
            setUrl: function(e) {
                return this.uploader.setEndpoint(e), this;
            },
            setMultiple: function(e, t) {
                return this._getButton(t).setMultiple(e), this;
            },
            uploadStoredFiles: function() {
                return this.uploader.uploadStoredFiles(), this.uploading.promise();
            },
            retry: function(e) {
                return this.uploader.retry(e), this.uploading.promise();
            },
            retryLast: function() {
                var e = this.getUploads(), t = e[e.length - 1];
                return this.retry(t.id);
            },
            _getButton: function(e) {
                return this.uploader._buttons[e || 0];
            },
            _onSubmit: function(e) {
                var t = new q.a(), n = this, i = this._getFile(e);
                return i.id = i.id || e, this.uploading = o.a.Deferred(), this.uploadDialog && (this.uploading.progress(this.uploadDialog.onProgress.bind(this.uploadDialog)), 
                this.uploadDialog.render()), t.load(i).then(function(t) {
                    if (!t.mime.match("image")) return u.a.resolve(t);
                    var s = new n.Image(), o = new u.a();
                    return s.on("load", function() {
                        t.width = s.width(), t.height = s.height(), t.img = s.image, o.resolve(t);
                    }).on("error", function() {
                        n._onError(e, i.name, "image failed to load"), o.reject(arguments);
                    }).src(t.result), o;
                }).then(function(t) {
                    return i.image = t, n.trigger("submit", i), !n.config.crop || (n.uploadDialog ? n.uploadDialog.cropImage(t).then(function(i) {
                        n.cropImage(e, i).then(function(e) {
                            d()(function() {
                                n.trigger("crop", {
                                    img: t.img,
                                    croppedImg: e,
                                    cropCoords: i
                                });
                            });
                        }), n.config.submitAfterCrop || n.uploadDialog.hide();
                    }, function(t) {
                        throw n._onError(e, i.name, t), new Error();
                    }) : void 0);
                });
            },
            _getImageData: function(e) {
                return this.uploader.getFile(e).image;
            },
            cropImage: function(e, t) {
                return this.setParams({
                    crop_x: t.x,
                    crop_x2: t.x2,
                    crop_y: t.y,
                    crop_y2: t.y2
                }), new x(this._getImageData(e).img).getCroppedCopy(t);
            },
            _getFile: function(e) {
                return this.uploader.getFile(e);
            },
            _onProgress: function(e, t, n, i) {
                this.uploading.notify(n, i), this.trigger("progress", {
                    id: e,
                    name: t,
                    loaded: n,
                    total: i
                });
            },
            _onComplete: function(e, t, n) {
                if (!1 !== n.success) {
                    this.uploading.resolve(n);
                    var i = A({}, n, {
                        id: e,
                        image: this._getImageData(e)
                    });
                    this.trigger("complete", i), this.uploadDialog && this.uploadDialog.hide();
                }
            },
            _onCancel: function(e, t) {
                var n = {
                    id: e,
                    name: t
                };
                this.uploading.reject(n), this.trigger("cancel", n);
            },
            getErrorMessage: function(e, t) {
                return e ? e.responseJSON.messages ? y.default.singleError(e) : "" : t || "";
            },
            _fixXhr: function(e) {
                if (e && !e.responseJSON) try {
                    e.responseJSON = JSON.parse(e.responseText);
                } catch (t) {
                    e.responseJSON = {};
                }
                return e;
            },
            _onAllComplete: function() {
                this.trigger("allComplete");
            },
            _onError: function(e, t, n, i) {
                i = this._fixXhr(i), n = this.getErrorMessage(i, n), "object" === k(i) && i.status && 403 === i.status && (o()(window).off("beforeunload"), 
                S.default.signIn()), n && this.uploadDialog && this.uploadDialog.onError(n), this.trigger("error", {
                    id: e,
                    name: t,
                    message: n,
                    xhr: i
                }), this.uploading && this.uploading.reject(i ? i.responseJSON : n);
            }
        }), U = n(51), R = n(479), O = n.n(R), B = function() {
            U.default.simple({
                title: C.default.translate("unsupported_browser_version", "Unsupported browser version"),
                html: O()(),
                classes: [ "js-upload-unsupported-browser" ],
                buttons: [ {
                    label: "OK",
                    classes: [ "js-close" ]
                } ]
            });
        }, N = n(108), j = n(60), M = {
            onProgress: function() {
                var e;
                (e = this._view).onProgress.apply(e, arguments);
            },
            cropImage: function(e) {
                var t = this.MAX_IMAGE_WIDTH || 520;
                return e.oldWidth = e.width, e.oldHeight = e.height, e.width = Math.min(e.width, t), 
                e.reductionRatio = e.width / e.oldWidth, e.height = e.height * e.reductionRatio, 
                this._view.onRenderComplete(), this._view.crop(e);
            },
            hide: function() {
                this._view.hide();
            },
            onError: function(e) {
                this._view.onError(e);
            },
            onComplete: function(e) {
                this._view.onComplete(e);
            }
        }, L = n(15), z = n(10), H = n(478), $ = n.n(H), W = (n(560), n(12)), V = n(4);
        n(22), n(559), n(558);
        function G() {
            return (G = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                }
                return e;
            }).apply(this, arguments);
        }
        o.a.widget("ui.previewCrop", Object.assign({}, {
            options: {
                center_select: !0,
                mode: "data",
                preview_ratio: 1,
                img_data: null,
                $preview_el: null,
                $upload_el: null,
                encoding: "base64",
                min_size: [ 100, 100 ],
                url: "/crop",
                show_save: !0,
                show_crop: !0,
                show_recrop: !0,
                show_cancel: !0,
                max_height: 400,
                max_width: 600,
                shrink_box: !1
            },
            original_preview: null,
            $save_btn: null,
            $crop_btn: null,
            $recrop_btn: null,
            $cancel_btn: null,
            $img_container: null,
            $btns_container: null,
            $preview_img_container: null,
            $img: null,
            $img_preview: null,
            original_height: null,
            original_width: null,
            last_css: null,
            data_source: "",
            local_path: "",
            name: "",
            last_state: null,
            _updated: null,
            _coords: null,
            coords: function() {
                var e, t, n, i, s;
                return !!this._coords && (s = this.options.min_size[1] / this.options.min_size[0], 
                e = this._coords.x, t = this._coords.y, n = this._coords.x2 - this._coords.x, this._coords.y2 - this._coords.y, 
                n = Math.round(n), i = Math.round(n * s), e = e + n > this.original_width ? this.original_width - n : e, 
                t = t + i > this.original_height ? this.original_height - i : t, {
                    x: e = Math.round(e),
                    x2: e + n,
                    y: t = Math.round(t),
                    y2: t + i,
                    w: n,
                    h: i
                });
            },
            updated: function() {
                return this._updated;
            },
            cropReady: function() {
                return !this._updated && (this.options.img_data.source || this.options.img_data.name);
            },
            source: function() {
                return "data" === this.options.mode ? this.data_source : this.local_path + this.name;
            },
            uploadedFilename: function() {
                return this.options.img_data.uploaded_filename;
            },
            filename: function() {
                if ("link" !== this.options.mode) throw "No filenames are available if mode is not link";
                return this.name;
            },
            destroy: function() {
                this.element.html("");
            },
            crop: function() {
                return this._crop();
            },
            recrop: function() {
                return this._recrop();
            },
            cancel: function() {
                return this._cancel();
            },
            pushState: function(e) {
                this.last_state = {
                    coords: this.coords(),
                    img_data: G({}, this.options.img_data),
                    data_source: this.data_source,
                    local_path: this.local_path,
                    name: this.name
                }, this.options.img_data = e, this.element.html(""), this._init();
            },
            generateMarkup: function() {
                var e = this._imgSource();
                this.$img = o()('<img src="' + e + '"  class="pcrop-image" />'), this.$img_preview = o()('<img src="' + e + '" class="pcrop-preview-img" />'), 
                this.$save_btn = o()('<a class="form-button form-button-default form-button-save pcrop-save-btn">Save</a>'), 
                this.$crop_btn = o()('<a class="form-button form-button-default form-button-crop pcrop-crop-btn">Crop</a>'), 
                this.$recrop_btn = o()('<a class="form-button form-button-default form-button-recrop pcrop-recrop-btn">Re-Crop</a>'), 
                this.$cancel_btn = o()('<a class="form-button form-button-dark form-button-cancel pcrop-cancel-btn">Cancel</a>'), 
                this.$img_container = o()('<div class="pcrop-image-wrap"></div>'), this.$btns_container = o()('<div class="pcrop-buttons-wrap cfix"></div>'), 
                this.$preview_img_container = o()('<div class="pcrop-preview-wrap"></div>');
            },
            appendMarkup: function() {
                var e = this, t = !1, n = this.options;
                this.element.html(this.$img_container), o.a.each({
                    show_recrop: "$recrop_btn",
                    show_crop: "$crop_btn",
                    show_save: "$save_btn",
                    show_cancel: "$cancel_btn"
                }, function(i, s) {
                    !0 === n[i] && (e.$btns_container.append(e[s]), t = !0);
                }), t && this.element.append(this.$btns_container), this.$img_container.append(this.$img), 
                n.$preview_el.html(this.$preview_img_container), this.$preview_img_container.append(this.$img_preview);
            },
            bindButtons: function() {
                this.$crop_btn.on("click", o.a.proxy(this._crop, this)), this.$recrop_btn.on("click", o.a.proxy(this._recrop, this)).hide(), 
                this.$save_btn.on("click", o.a.proxy(this._save, this)), this.$cancel_btn.on("click", o.a.proxy(this._cancel, this));
            },
            jCrop: function() {
                var e, t, n, i = this, s = this.options, r = 0, a = 0, l = s.min_size[0], u = s.min_size[1], c = s.img_data.width, d = s.img_data.height;
                t = this.determineProportion(), c = s.img_data.width * t, d = s.img_data.height * t, 
                n = s.shrink_box ? this.determineCropBoxProportion(c, d) : 1, l = l * t * n, u = u * t * n, 
                this._coords = {}, this.last_css = {}, this.$preview_img_container.css({
                    position: "relative",
                    width: s.min_size[0] * s.preview_ratio + "px",
                    height: s.min_size[1] * s.preview_ratio + "px",
                    overflow: "hidden"
                }), s.center_select ? (r = Math.round((d - u) / 2), a = Math.round((c - l) / 2)) : r = a = 0, 
                this._coords = {
                    x: a,
                    x2: a + l,
                    y: r,
                    y2: r + u
                }, e = {
                    width: c,
                    height: d,
                    maxWidth: c
                }, this.$img.css(e), this.$img_preview.css(G({}, e, {
                    top: r + "px",
                    left: a + "px"
                })), this.$img.Jcrop({
                    allowSelect: !1,
                    minSize: [ Math.ceil(l), Math.ceil(u) ],
                    setSelect: [ this._coords.x, this._coords.y, this._coords.x2, this._coords.y2 ],
                    aspectRatio: l / u,
                    bgOpacity: .4,
                    onChange: function(e) {
                        var n, r, a, l, u, h, p, f, m, g, v, b, _;
                        e.x < 0 && (e.x2 -= e.x, e.x = 0), e.y < 0 && (e.y2 -= e.y, e.y = 0), l = e.x2 - e.x, 
                        u = e.y2 - e.y, n = Math.min(l, c) / l, r = Math.min(u, d) / u, a = Math.min(n, r), 
                        h = Math.round(l * a), p = Math.round(u * a), f = s.preview_ratio * s.min_size[0], 
                        m = s.preview_ratio * s.min_size[1], g = f * c / h, v = m * d / p, b = f * e.x / h, 
                        _ = m * e.y / p, i.last_css = {
                            width: g + "px",
                            height: v + "px",
                            left: -b + "px",
                            top: -_ + "px",
                            position: "absolute"
                        }, i.$img_preview.css(i.last_css), e.w = l / t, e.h = u / t, e.x /= t, e.y /= t, 
                        n = Math.min(e.w, s.img_data.width) / e.w, r = Math.min(e.h, s.img_data.height) / e.h, 
                        a = Math.min(n, r), e.h *= a, e.w *= a, e.x2 = e.x + e.w, e.y2 = e.y + e.h, i._coords = e, 
                        i._trigger("change", new o.a.Event(), {
                            coords: e
                        });
                    }
                });
            },
            determineProportion: function() {
                var e, t, n = this.options, i = n.max_height, s = n.max_width;
                return e = n.img_data.width / s, t = n.img_data.height / i, 1 / Math.max(e, t, 1);
            },
            determineCropBoxProportion: function(e, t) {
                var n, i, s = this.options, o = s.min_size[1], r = s.min_size[0];
                return n = e / r, i = t / o, Math.min(n, i, 1);
            },
            _setOption: function(e, t) {
                var n = this._super(e, t);
                return "max_width" !== e && "max_height" !== e || this.$img && this.$img.data("Jcrop") && (this.$img.data("Jcrop").destroy(), 
                this.jCrop()), n;
            },
            _init: function() {
                var e = this.options, t = e.img_data.width, n = e.img_data.height;
                o.a.each([ "img_data", "$preview_el", "$upload_el", "url" ], function(t, n) {
                    e[n] || o.a.error("Must pass in " + n);
                }), this.generateMarkup(), this.original_preview = e.$preview_el.html(), this._updated = !1, 
                e.img_data.height = parseFloat(e.img_data.height), e.img_data.width = parseFloat(e.img_data.width), 
                this.original_height = e.img_data.height, this.original_width = e.img_data.width, 
                this.appendMarkup(), this.bindButtons(), this.jCrop(), e.$upload_el.hide(), this._trigger("initialized", new o.a.Event(), {
                    cw: t,
                    ch: n
                });
            },
            _imgSource: function() {
                var e = this.options.img_data;
                if ("data" === this.options.mode) return "data:" + e.mime + ";" + this.options.encoding + "," + e.source;
                if ("link" === this.options.mode) return e.local_path + e.name;
                throw new Error("Unknown mode: [" + this.options.mode + "]");
            },
            _crop: function() {
                var e = this, t = this.options, n = this.coords();
                function i(t) {
                    L.default.show(e.$btns_container), e.$crop_btn.show(), e.$recrop_btn.hide(), e.$cancel_btn.show(), 
                    t && t.messages ? Object(W.default)(e.element, t.messages) : Object(W.default)(e.element, [ {
                        type: "error",
                        message: "Image failed to crop. Please try again later."
                    } ]), e._trigger("failure", new o.a.Event(), t);
                }
                if ("data" === t.mode ? n.source = this.options.img_data.source : n.file = this.options.img_data.name, 
                n.h && n.w) return L.default.hide(this.$btns_container, "Cropping..."), Object(V.default)({
                    url: this.options.url,
                    type: "POST",
                    data: n
                }).then(function(n) {
                    var s;
                    n && n.valid ? ("data" === e.options.mode ? e.data_source = n.source : (e.local_path = n.local_path, 
                    e.name = n.name), e._trigger("success", new o.a.Event(), n) && (t.$upload_el.show(), 
                    e.$img_preview = o()("<img />"), s = "data" === t.mode ? "data:" + n.mime + ";" + t.encoding + "," + n.source : n.local_path + n.name, 
                    e.$img_preview.css({
                        width: t.min_size[0] * t.preview_ratio,
                        height: t.min_size[1] * t.preview_ratio,
                        top: "0px",
                        left: "0px"
                    }).addClass("pcrop-preview-img").attr("src", s), e.$preview_img_container.html(e.$img_preview), 
                    e.$img_container.hide(), e.original_preview = t.$preview_el.html(), e._updated = !0, 
                    e._trigger("valid", new o.a.Event(), n), L.default.show(e.$btns_container), e.$crop_btn.hide(), 
                    e.$recrop_btn.show(), e.$cancel_btn.hide())) : i(n);
                }, i), this.element;
                this._trigger("badcoords", new o.a.Event());
            },
            _recrop: function() {
                this.options.$upload_el.hide(), this.$img_preview = o()('<img src="' + this._imgSource() + '" class="pcrop-preview-img" />').css(this.last_css), 
                this.$preview_img_container.html(this.$img_preview), this.$img_container.show(), 
                this.$crop_btn.show(), this.$recrop_btn.hide(), this.$cancel_btn.show(), this._trigger("recrop");
            },
            _cancel: function() {
                this.options.$upload_el.show(), this.$img_container.hide(), this.$crop_btn.hide(), 
                this.$recrop_btn.hide(), this.$cancel_btn.hide(), this.options.$preview_el.html(this.original_preview), 
                this.last_state ? (this.options.img_data = G({}, this.last_state.img_data), this.data_source = this.last_state.data_source, 
                this.local_path = this.last_state.local_path, this.name = this.last_state.name, 
                this.last_state = !1, this._coords = G({}, this.last_state.coords), this._updated = !0) : (this.options.img_data = {}, 
                this.data_source = "", this.local_path = "", this.name = "", this._updated = !1, 
                this._coords = null), this._trigger("cancel");
            },
            _save: function() {
                this._coords.h && this._coords.w ? this._trigger("save") : this._trigger("badcoords");
            }
        }));
        var X = n(276), K = n.n(X);
        function Y() {
            return (Y = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                }
                return e;
            }).apply(this, arguments);
        }
        var Z = z.default.extend({
            mustache: $.a,
            templateData: function() {
                return Y({
                    title: C.default.translate("profile_editor_replace_profile_picture", "Replace Profile Picture"),
                    buttons: [ {
                        label: C.default.translate("profile_editor_button_crop_save", "Crop & Save"),
                        trailingIconAsset: K()(),
                        classes: [ "form-submit", "rf-button--tertiary", "rf-button--icon-trailing" ]
                    }, {
                        label: C.default.translate("profile_editor_button_cancel", "Cancel"),
                        classes: [ "rf-button--inline", "js-cancel" ]
                    } ],
                    hideClose: !0
                }, this._super());
            },
            rendered: function() {
                this._super(), this.$popup = this.$view.filter(".popup"), this.$submit = this.$view.find(".form-submit"), 
                this.$cover = this.$view.find("#profile-cover-wrap"), this.$upload = this.$view.find("#profile-cover-uploading"), 
                this.$progress = this.$upload.find(".upload-progressbar"), this.$preview = this.$cover.find(".cover-normal .cover-img"), 
                this.$buttons = this.$view.find(".popup-buttons"), this.$upload_button = this.$preview.find(".form-button, .js-rf-button"), 
                this.$popup.closest(".popup-inner").addClass("profile-dialog-popup"), this.$buttons.addClass("right-buttons").find(".form-submit").on("click", this.submit.bind(this)), 
                this.$upload.find(".upload-progressbar").progressbar().find(".ui-progressbar-value").addClass("uploader_uploading_bg");
            },
            load: function(e) {
                var t;
                e.image && e.local_path && (t = o()("<img>", {
                    src: e.local_path + e.image
                }).css({
                    width: i.default.IMAGE.WIDTH,
                    height: i.default.IMAGE.HEIGHT
                }), this.$preview.html(t).removeClass("no-image-yet"));
            },
            validateResponse: function(e) {
                var t = C.default.translate("profile_editor_error_failed_upload", "File failed to upload. Please try again.");
                return !!e.name || (o.a.isArray(e.messages) && 1 === e.messages.length ? t = e.messages.shift().message : e.error_msg && (t = e.error_msg), 
                this.error(t), !1);
            },
            onError: function(e) {
                this.$view && (L.default.show(this.$buttons), this.toggleProgress(!0), this.hide()), 
                Object(b.default)({
                    title: C.default.translate("profile_editor_simple_title_upload_error", "Upload Error"),
                    classes: [ "image-upload-error-popup" ],
                    html: e,
                    buttons: [ {
                        label: C.default.translate("profile_editor_button_okay", "Okay"),
                        classes: [ "js-confirm" ]
                    } ]
                });
            },
            onProgress: function(e, t) {
                var n = 100 * e / t;
                this.$progress.progressbar("value", n);
            },
            onRenderComplete: function() {
                this.$cover.removeClass("hide");
            },
            onComplete: function() {
                this.$progress.progressbar("disable"), this.toggleProgress(!0);
            },
            preRender: function() {
                this.$cover.addClass("hide"), this.$buttons.addClass("hide");
            },
            submit: function() {
                this.toggleProgress(!1), L.default.hide(this.$buttons, C.default.translate("profile_editor_button_saving", "Saving..."));
                var e = this.$cropper.previewCrop("coords");
                e = this._getScaledCoords(e, this._model.get("imageData")), this.cropPromise.resolve(e);
            },
            _getScaledCoords: function(e, t) {
                var n = Math.floor(e.w / t.reductionRatio), i = Math.floor(e.h / t.reductionRatio), s = Math.floor(e.x / t.reductionRatio), o = Math.floor(e.y / t.reductionRatio);
                return {
                    x: s,
                    y: o,
                    x2: s + n,
                    y2: o + i
                };
            },
            _isTooNarrow: function(e) {
                return e < i.default.IMAGE.WIDTH;
            },
            _isTooShort: function(e) {
                return e < i.default.IMAGE.HEIGHT;
            },
            _showPreviewCrop: function(e, t) {
                this.$cropper.data("previewCrop") ? (e && this.$cropper.previewCrop("pushState", e), 
                this.$cropper.previewCrop("recrop")) : this.$cropper.previewCrop({
                    $preview_el: o()(""),
                    $upload_el: o()(""),
                    min_size: [ i.default.IMAGE.WIDTH, i.default.IMAGE.HEIGHT ],
                    show_save: !1,
                    show_cancel: !1,
                    show_crop: !1,
                    show_recrop: !1,
                    max_width: 999999,
                    max_height: t,
                    img_data: e
                });
            },
            hideButtons: function(e) {
                e = e || C.default.translate("profile_editor_buttoN_sabing", "Saving..."), L.default.hide(this.$buttons, e);
            },
            toggleProgress: function(e) {
                this.$upload.toggleClass("hide", e);
            },
            crop: function(e) {
                var t, n = this.$cover.find(".cover-cropper .cover-img");
                if (this.cropPromise = new u.a(), this._isTooNarrow(e.width) || this._isTooShort(e.height)) return this.cropPromise.reject(C.default.translate("profile_editor_error_resize", "Image cannot be resized properly. Try an image that is more like a square.")), 
                this.cropPromise;
                this._model.set("imageData", e), this.$cropper = this.$cover.find(".cover-image-column"), 
                n.removeClass("no-image-yet"), this.$popup.addClass("crop-mode"), this.$buttons.removeClass("hide"), 
                this.$cropper.removeClass("hide"), e && (t = o()(window).height() - (this.$view.outerHeight() - this.$cover.height()) - 20, 
                this.$cropper.height(Math.min(e.height, t)).width(Math.min(e.width, Math.ceil(t / e.height * e.width))).css("max-height", t));
                var i = this.$cover.children().toArray().map(function(e) {
                    return o()(e).outerWidth(!0);
                }).reduce(function(e, t) {
                    return e + t;
                }, 2);
                return this.$cover.width(i), this._showPreviewCrop(e, t), this.position(), this.cropPromise;
            }
        }), J = j.default.extend({
            init: function() {
                this._super.apply(this, arguments), this.relay(this._view, "success hide");
            },
            render: function() {
                this._super(), this._view.show(), this._view.position();
            }
        }, {
            VIEW_CLASS: Z
        }).mixin(M);
        t.a = {
            _uploaderOptions: {
                submitAfterCrop: !i.default.is_team_creation_page,
                params: {
                    entity: i.default.entity
                }
            },
            init: function(e, t) {
                this._$context = e, this._$slugInput = this._$context.find(".js-slug-check"), this._form = t, 
                this._bindLocation(), this._bindUpload(), this._$slugInput.length && this._bindSlugCheck();
            },
            getUploaderOptions: function() {
                return this._uploaderOptions;
            },
            _autoSubmit: function() {
                this._form && this._form.submit();
            },
            _bindUpload: function() {
                var e = this._$context.find(".js-profile-upload"), t = o()(".js-profile-image-container").find("img");
                this._uploaderOptions.button = e.first()[0], this.uploader = D.init(this._uploaderOptions).bind(new J()).on("complete", function(e) {
                    if ("profile_image" === i.default.entity && e.images && N.default.updateProfileImage(e.images[50]), 
                    e.images) {
                        var n = e.images[138] + ", " + e.images[230] + " 2x";
                        t.attr("src", e.images[138]).attr("srcset", n);
                    }
                }).on("unsupportedBrowser", B);
            },
            _bindSlugCheck: function() {
                var e = this;
                a.a.init(this._$slugInput).on("change", function(t) {
                    t && this.$context.val() ? e._autoSubmit() : this.reset();
                });
            },
            _bindLocation: function() {
                var e = this, t = this._$context.find(".js-country").val(), n = this._$context.find(".js-city");
                this.location = r.a.init(this._$context, {
                    country: ".js-country",
                    state: ".js-state",
                    province: ".js-province",
                    hidden_state: ".js-hidden-state",
                    city: ".js-city",
                    disableState: !0,
                    autoSelectMenu: !0
                }), "United States" === t && o()("#stateSelect-container").removeClass("hide"), 
                "Canada" === t && o()("#provinceSelect-container").removeClass("hide"), n.on("autosuggestchangevalidated", function(t, n) {
                    n.valid && e._autoSubmit();
                });
            }
        };
    },
    342: function(e, t, n) {
        var i = n(2), s = {
            "lib/_buttons/_link": n(39).template
        }, o = new i.Template({
            code: function(e, t, n) {
                var i = this;
                return i.b(n = n || ""), i.b(i.rp("<lib/_buttons/_link0", e, t, "")), i.fl();
            },
            partials: {
                "<lib/_buttons/_link0": {
                    name: "lib/_buttons/_link",
                    partials: {},
                    subs: {
                        containerClasses: function(e, t, n, i) {
                            n.s(n.f("containerClasses", e, t, 1), e, t, 0, 68, 74, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                                n.b(" "), n.b(n.v(n.d(".", e, t, 0)));
                            }), e.pop()), n.b(" ");
                        },
                        containerAttrs: function(e, t, n, i) {
                            n.s(n.f("containerId", e, t, 1), e, t, 0, 155, 175, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                                n.b('id="'), n.b(n.v(n.f("containerId", e, t, 0))), n.b('"');
                            }), e.pop());
                        },
                        classes: function(e, t, n, i) {
                            n.s(n.f("classes", e, t, 1), e, t, 0, 237, 243, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                                n.b(" "), n.b(n.v(n.d(".", e, t, 0)));
                            }), e.pop()), n.b(" "), n.s(n.f("icon", e, t, 1), e, t, 0, 265, 288, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                                n.b("rf-button--icon-leading");
                            }), e.pop());
                        },
                        attrs: function(e, t, n, i) {
                            n.s(n.f("id", e, t, 1), e, t, 0, 329, 341, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                                n.b(' id="'), n.b(n.v(n.f("id", e, t, 0))), n.b('"');
                            }), e.pop()), n.b(" "), n.s(n.f("href", e, t, 1), e, t, 0, 358, 374, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                                n.b(' href="'), n.b(n.v(n.f("href", e, t, 0))), n.b('"');
                            }), e.pop()), n.b(" tabindex="), n.s(n.f("tabindex", e, t, 1), e, t, 0, 406, 420, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                                n.b('"'), n.b(n.v(n.f("tabindex", e, t, 0))), n.b('"');
                            }), e.pop()), n.s(n.f("tabindex", e, t, 1), e, t, 1, 0, 0, "") || n.b('"0"'), n.s(n.f("data", e, t, 1), e, t, 0, 471, 496, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                                n.b(" data-"), n.b(n.v(n.f("key", e, t, 0))), n.b('="'), n.b(n.v(n.f("value", e, t, 0))), 
                                n.b('"');
                            }), e.pop()), n.b(" "), n.b(n.v(n.f("attrs", e, t, 0)));
                        },
                        leadingIconAsset: function(e, t, n, i) {
                            n.s(n.f("icon", e, t, 1), e, t, 0, 558, 566, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                                n.b(n.v(n.f("icon", e, t, 0)));
                            }), e.pop());
                        },
                        trailingIconAsset: function(e, t, n, i) {
                            n.s(n.f("trailingIconAsset", e, t, 1), e, t, 0, 643, 666, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                                n.b(n.t(n.f("trailingIconAsset", e, t, 0)));
                            }), e.pop());
                        },
                        label: function(e, t, n, i) {
                            n.b(n.v(n.f("label", e, t, 0)));
                        }
                    }
                }
            },
            subs: {}
        }, '{{<lib/_buttons/_link}}\n  {{$containerClasses}}{{#containerClasses}} {{.}}{{/containerClasses}} {{/containerClasses}}\n  {{$containerAttrs}}{{#containerId}}id="{{containerId}}"{{/containerId}}{{/containerAttrs}}\n  {{$classes}}{{#classes}} {{.}}{{/classes}} {{#icon}}rf-button--icon-leading{{/icon}}{{/classes}}\n  {{$attrs}}{{#id}} id="{{id}}"{{/id}} {{#href}} href="{{href}}"{{/href}} tabindex={{#tabindex}}"{{tabindex}}"{{/tabindex}}{{^tabindex}}"0"{{/tabindex}}{{#data}} data-{{key}}="{{value}}"{{/data}} {{attrs}}{{/attrs}}\n  {{$leadingIconAsset}}{{#icon}}{{icon}}{{/icon}}{{/leadingIconAsset}}\n  {{$trailingIconAsset}}{{#trailingIconAsset}}{{{trailingIconAsset}}}{{/trailingIconAsset}}{{/trailingIconAsset}}\n  {{$label}}{{label}}{{/label}}\n{{/lib/_buttons/_link}}\n', i);
        o.ri = function(e, t, n) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (o = s, r = t, Object.keys(r).reduce(function(e, t) {
                return e[t] = r[t], e;
            }, o)), n);
            var o, r;
        }, e.exports = o.render.bind(o), e.exports.template = o;
    },
    35: function(e, t, n) {
        var i, s;
        i = [ n(19), n(9), n(26), n(6), n(48), n(53) ], void 0 === (s = function(e, t, n, i, s, o) {
            "use strict";
            var r = i.extend({
                xhr: s,
                init: function(e) {
                    if (!e) throw new Error("The context of the form cannot be empty");
                    if (this.$form = e.is("form") ? e : e.find("form"), !this.$form.length) throw new Error("Unable to find form within context");
                    this._normalizeSubmitter = function(e) {
                        switch (e.which) {
                          case 1:
                          case 13:
                          case 32:
                            this.$form.submit();
                        }
                    }.bind(this), this.submit = this.submit.bind(this), Object.defineProperty(this, "handlers", {
                        value: [ this._handleFormError.bind(this) ]
                    });
                },
                destroy: function() {
                    if (!this.$form) throw new Error("Cannot destroy null form");
                    this._super(), this.$form = null;
                },
                reset: function() {
                    return this.$form[0].reset(), this;
                },
                validator: function() {
                    return !0;
                },
                commit: function() {
                    return this;
                },
                _handleFormError: function(e) {
                    if (!(e instanceof r.Error)) throw e;
                    Object.keys(e).forEach(function(t) {
                        var n = this.$form.find("[name=" + t + "], #" + t).first(), i = this;
                        n.length && (n.one("input change", function e() {
                            n.off("input change", e), i.trigger("error:hide", n);
                        }), this.trigger("error:show", n, e[t]));
                    }, this);
                },
                _handleError: function(e) {
                    return this.trigger("error", e), o.call(this.handlers, e).catch(o).finally(function() {
                        delete this._cacheMeta;
                    }.bind(this));
                },
                _findFormError: function(e) {
                    if (!(e instanceof Object)) throw e;
                    var t, n = this._cacheMeta || this.toJSON(), i = {};
                    for (t in n.data) e.hasOwnProperty(t) && (i[t] = e[t]);
                    if (Object.keys(i).length) throw new this.constructor.Error(i);
                    throw e;
                },
                submit: function(e) {
                    if (!this.$form) throw new Error("The form cannot be null");
                    this.trigger("before", e);
                    var t = this._submit(e);
                    return t.catch(this._findFormError.bind(this)).then(this.trigger.bind(this, "success"), this._handleError.bind(this)).finally(this.trigger.bind(this, "after")), 
                    t;
                },
                _submit: function(t) {
                    var i, s, o, r = Array.isArray(this.validator) ? n.apply(null, this.validator.map(function(e) {
                        return e.bind(this);
                    }, this)) : this.validator.bind(this), a = new e();
                    this._cacheMeta = i = this.toJSON();
                    try {
                        s = r(i.data);
                    } catch (e) {
                        s = !1, o = e;
                    }
                    return s = !1 !== s, !t || s && "function" != typeof this.commit || t.preventDefault(), 
                    s ? a.resolve(i) : a.reject(o), a.then(function(t) {
                        var n = new e(), i = n.thenable(), s = "function" == typeof this.commit ? this.commit.call(i, t) : this.commit;
                        return n.resolve(s === i ? this.xhr(t) : s), this.trigger("commit"), n;
                    }.bind(this));
                },
                toJSON: function() {
                    return {
                        url: this.$form.attr("action"),
                        type: this.$form.attr("method") || "POST",
                        data: this.constructor.decompose(this.$form.serializeArray())
                    };
                },
                _submitSelector: ".js-submit:not([type=submit])",
                bind: function() {
                    return this.$form.on("click keydown", this._submitSelector, this._normalizeSubmitter).on("submit", this.submit), 
                    this;
                },
                unbind: function() {
                    return this.$form.off("click keydown", this._submitSelector, this._normalizeSubmitter).off("submit", this.submit), 
                    this;
                }
            }, {
                decompose: function(e) {
                    return e.reduce(function(e, t) {
                        var n = e[t.name];
                        return e[t.name] = n ? [].concat(n, t.value) : t.value, e;
                    }, {});
                },
                Error: function(e) {
                    t(this, e);
                }
            });
            return r;
        }.apply(t, i)) || (e.exports = s);
    },
    374: function(e, t, n) {
        var i = n(2), s = {
            "bestyleguide/_icons/_arrowFontRight": n(59).template
        }, o = new i.Template({
            code: function(e, t, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<li class="team-autocomplete-no-results">'), i.b("\n" + n), 
                i.b("  <a "), i.s(i.f("url", e, t, 1), e, t, 0, 55, 69, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b('href="'), n.b(n.v(n.f("url", e, t, 0))), n.b('"');
                }), e.pop()), i.b(' class="js-create-team">'), i.s(i.f("translate", e, t, 1), e, t, 0, 115, 206, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b("team_creation_does_not_exist|The &ldquo;"), n.b(n.v(n.f("term", e, t, 0))), 
                    n.b("&rdquo; team does not exist on Behance yet.");
                }), e.pop()), i.b(' <span class="team-create">'), i.s(i.f("translate", e, t, 1), e, t, 0, 261, 341, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b("team_creation_create_now|Create it now "), n.b(n.rp("<bestyleguide/_icons/_arrowFontRight0", e, t, ""));
                }), e.pop()), i.b("</span></a>"), i.b("\n" + n), i.b("</li>"), i.b("\n"), i.fl();
            },
            partials: {
                "<bestyleguide/_icons/_arrowFontRight0": {
                    name: "bestyleguide/_icons/_arrowFontRight",
                    partials: {},
                    subs: {}
                }
            },
            subs: {}
        }, '<li class="team-autocomplete-no-results">\n  <a {{#url}}href="{{url}}"{{/url}} class="js-create-team">{{#translate}}team_creation_does_not_exist|The &ldquo;{{term}}&rdquo; team does not exist on Behance yet.{{/translate}} <span class="team-create">{{#translate}}team_creation_create_now|Create it now {{> bestyleguide/_icons/_arrowFontRight}}{{/translate}}</span></a>\n</li>\n', i);
        o.ri = function(e, t, n) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (o = s, r = t, Object.keys(r).reduce(function(e, t) {
                return e[t] = r[t], e;
            }, o)), n);
            var o, r;
        }, e.exports = o.render.bind(o), e.exports.template = o;
    },
    375: function(e, t, n) {
        "use strict";
        var i = n(0), s = n.n(i), o = n(6), r = n.n(o), a = n(7);
        t.a = r.a.extend({
            init: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s()(".js-named-anchor"), t = arguments.length > 1 ? arguments[1] : void 0;
                this._$window = s()(window), this._$html = t || s()("html, body"), this._top_offset = Math.min(0, e.first().offset().top), 
                this._populateCache(e);
            },
            _ignoreNextScroll: !1,
            _populateCache: function(e) {
                var t = this;
                this.cache = [], e.each(function() {
                    t.cache.push({
                        top: s()(this).offset().top - t._top_offset,
                        $element: s()(this)
                    });
                }), this.currentTop = -1;
            },
            _check: function() {
                var e = this._getItem(), t = e.top, n = e.$element;
                t !== this.currentTop && (this.currentTop = t, this.trigger("past", t, n));
            },
            _getItem: function() {
                var e = this.cache[0], t = parseInt(this._$window.scrollTop(), 10), n = s()(document).height() - (a.default.innerHeight || this._$window.height()) - t;
                return t <= 0 ? e : (this.cache.forEach(function(i) {
                    (parseInt(i.top, 10) <= t || n <= 1) && (e = i);
                }, this), e);
            },
            recalculatePositions: function(e) {
                this._populateCache(e || s()(".js-named-anchor")), this._check();
            },
            bind: function() {
                var e = this, t = this;
                return s()(".js-form-nav").on("click", ".js-section-nav", function(e) {
                    e.preventDefault(), t.scrollTo(s()(this).data("section"));
                }), this.on("past", function(e, t) {
                    this._updateNav(t.attr("id"));
                }), this._check(), s()(window).on("scroll", function() {
                    e._ignoreNextScroll ? e._ignoreNextScroll = !1 : e._check.call(e);
                }), this;
            },
            scrollTo: function(e) {
                this._ignoreNextScroll = !0;
                var t = s()("#" + e).offset().top - this._top_offset;
                a.default.setLocationHash(e), this._$html.scrollTop(t), this.currentTop = t, this._updateNav(e);
            },
            _updateNav: function(e) {
                s()(".js-section-nav").removeClass("active").filter("[data-section=" + e + "]").addClass("active");
            }
        });
    },
    38: function(e, t, n) {
        "use strict";
        var i = n(0), s = n.n(i);
        n(22);
        s.a.widget("ui.selectmenuold", {
            options: {
                transferClasses: !0,
                appendTo: "body",
                typeAhead: 1e3,
                style: "dropdown",
                positionOptions: {
                    my: "left top",
                    at: "left bottom",
                    offset: null
                },
                width: null,
                menuWidth: null,
                handleWidth: 26,
                maxHeight: null,
                icons: null,
                format: null,
                escapeHtml: !1,
                bgImage: function() {}
            },
            _create: function() {
                var e = this, t = this.options, n = (this.element.attr("id") || "ui-selectmenu-" + Math.random().toString(16).slice(2, 10)).replace(/(:|\.)/g, "");
                this.ids = [ n, n + "-button", n + "-menu" ], this._safemouseup = !0, this.isOpen = !1, 
                this.newelement = s()("<a />", {
                    class: "ui-selectmenu ui-widget ui-state-default ui-corner-all",
                    id: this.ids[1],
                    role: "button",
                    href: "#nogo",
                    tabindex: this.element.attr("disabled") ? 1 : 0,
                    "aria-haspopup": !0,
                    "aria-owns": this.ids[2]
                }), this.newelement.insertAfter(this.element);
                var i = this.element.attr("tabindex");
                i && this.newelement.attr("tabindex", i), this.newelement.data("selectelement", this.element), 
                this.selectmenuIcon = s()('<span class="ui-selectmenu-icon ui-icon"></span>').prependTo(this.newelement), 
                this.newelement.prepend('<span class="ui-selectmenu-status" />'), this.element.bind({
                    "click.selectmenu": function(t) {
                        e.newelement.focus(), t.preventDefault();
                    }
                }), this.newelement.bind("mousedown.selectmenu", function(n) {
                    return e._toggle(n, !0), "popup" == t.style && (e._safemouseup = !1, setTimeout(function() {
                        e._safemouseup = !0;
                    }, 300)), !1;
                }).bind("click.selectmenu", function() {
                    return !1;
                }).bind("keydown.selectmenu", function(t) {
                    var n = !1;
                    switch (t.keyCode) {
                      case s.a.ui.keyCode.ENTER:
                        n = !0;
                        break;

                      case s.a.ui.keyCode.SPACE:
                        e._toggle(t);
                        break;

                      case s.a.ui.keyCode.UP:
                        t.altKey ? e.open(t) : e._moveSelection(-1);
                        break;

                      case s.a.ui.keyCode.DOWN:
                        t.altKey ? e.open(t) : e._moveSelection(1);
                        break;

                      case s.a.ui.keyCode.LEFT:
                        e._moveSelection(-1);
                        break;

                      case s.a.ui.keyCode.RIGHT:
                        e._moveSelection(1);
                        break;

                      case s.a.ui.keyCode.TAB:
                        n = !0;
                        break;

                      case s.a.ui.keyCode.PAGE_UP:
                      case s.a.ui.keyCode.HOME:
                        e.index(0);
                        break;

                      case s.a.ui.keyCode.PAGE_DOWN:
                      case s.a.ui.keyCode.END:
                        e.index(e._optionLis.length);
                        break;

                      default:
                        n = !0;
                    }
                    return n;
                }).bind("keypress.selectmenu", function(t) {
                    return t.which > 0 && e._typeAhead(t.which, "mouseup"), !0;
                }).bind("mouseover.selectmenu", function() {
                    t.disabled || s()(this).addClass("ui-selectmenu-hover ui-state-hover");
                }).bind("mouseout.selectmenu", function() {
                    t.disabled || s()(this).removeClass("ui-selectmenu-hover ui-state-hover");
                }).bind("focus.selectmenu", function() {
                    t.disabled || s()(this).addClass("ui-selectmenu-focus ui-state-focus");
                }).bind("blur.selectmenu", function() {
                    t.disabled || s()(this).removeClass("ui-selectmenu-focus ui-state-focus");
                }), s()(document).bind("mousedown.selectmenu-" + this.ids[0], function(t) {
                    e.isOpen && e.close(t);
                }), this.element.bind("click.selectmenu", function() {
                    e._refreshValue();
                }).bind("focus.selectmenu", function() {
                    e.newelement && e.newelement[0].focus();
                }), t.width || (t.width = this.element.outerWidth()), this.newelement.width(t.width), 
                this.element.hide(), this.list = s()("<ul />", {
                    class: "ui-selectmenu-menu ui-widget ui-widget-content",
                    "aria-hidden": !0,
                    role: "listbox",
                    "aria-labelledby": this.ids[1],
                    id: this.ids[2]
                }).appendTo(t.appendTo), this.list.bind("keydown.selectmenu", function(t) {
                    var n = !1;
                    switch (t.keyCode) {
                      case s.a.ui.keyCode.UP:
                        t.altKey ? e.close(t, !0) : e._moveFocus(-1);
                        break;

                      case s.a.ui.keyCode.DOWN:
                        t.altKey ? e.close(t, !0) : e._moveFocus(1);
                        break;

                      case s.a.ui.keyCode.LEFT:
                        e._moveFocus(-1);
                        break;

                      case s.a.ui.keyCode.RIGHT:
                        e._moveFocus(1);
                        break;

                      case s.a.ui.keyCode.HOME:
                        e._moveFocus(":first");
                        break;

                      case s.a.ui.keyCode.PAGE_UP:
                        e._scrollPage("up");
                        break;

                      case s.a.ui.keyCode.PAGE_DOWN:
                        e._scrollPage("down");
                        break;

                      case s.a.ui.keyCode.END:
                        e._moveFocus(":last");
                        break;

                      case s.a.ui.keyCode.ENTER:
                      case s.a.ui.keyCode.SPACE:
                        e.close(t, !0), s()(t.target).parents("li:eq(0)").trigger("mouseup");
                        break;

                      case s.a.ui.keyCode.TAB:
                        n = !0, e.close(t, !0), s()(t.target).parents("li:eq(0)").trigger("mouseup");
                        break;

                      case s.a.ui.keyCode.ESCAPE:
                        e.close(t, !0);
                        break;

                      default:
                        n = !0;
                    }
                    return n;
                }).bind("keypress.selectmenu", function(t) {
                    return t.which > 0 && e._typeAhead(t.which, "focus"), !0;
                }), this.list.bind("mousedown.selectmenu mouseup.selectmenu", !1), s()(window).bind("resize.selectmenu-" + this.ids[0], s.a.proxy(e.close, this)), 
                this.refreshPosition = s.a.proxy(e._refreshPosition, this);
            },
            _init: function() {
                var e = this, t = this.options, n = [];
                this.element.find("option").each(function() {
                    var i = s()(this);
                    n.push({
                        value: i.attr("value"),
                        text: e._formatText(i.text(), i),
                        selected: i.prop("selected"),
                        disabled: i.attr("disabled"),
                        classes: i.attr("class"),
                        typeahead: i.attr("typeahead"),
                        parentOptGroup: i.parent("optgroup"),
                        bgImage: t.bgImage.call(i)
                    });
                });
                var i = "popup" == e.options.style ? " ui-state-active" : "";
                if (this.list.html(""), n.length) for (var o = 0; o < n.length; o++) {
                    var r = {
                        role: "presentation"
                    };
                    n[o].disabled && (r.class = this.namespace + "-state-disabled");
                    var a = {
                        html: n[o].text || "&nbsp;",
                        href: "#nogo",
                        tabindex: -1,
                        role: "option",
                        "aria-selected": !1
                    };
                    n[o].disabled && (a["aria-disabled"] = n[o].disabled), n[o].typeahead && (a.typeahead = n[o].typeahead);
                    var l = s()("<a/>", a).bind("focus.selectmenu", function() {
                        s()(this).parent().mouseover();
                    }).bind("blur.selectmenu", function() {
                        s()(this).parent().mouseout();
                    }), u = s()("<li/>", r).append(l).data("index", o).addClass(n[o].classes).data("optionClasses", n[o].classes || "").bind("mouseup.selectmenu", function(t) {
                        return !e._safemouseup || e._disabled(t.currentTarget) || e._disabled(s()(t.currentTarget).parents("ul>li.ui-selectmenu-group ")) || (e.index(s()(this).data("index")), 
                        e.select(t), e.close(t, !0)), !1;
                    }).bind("click.selectmenu", function() {
                        return !1;
                    }).bind("mouseover.selectmenu", function() {
                        s()(this).hasClass(e.namespace + "-state-disabled") || s()(this).parent("ul").parent("li").hasClass(e.namespace + "-state-disabled") || (e._selectedOptionLi().addClass(i), 
                        e._focusedOptionLi().removeClass("ui-selectmenu-item-focus ui-state-hover"), s()(this).removeClass("ui-state-active").addClass("ui-selectmenu-item-focus ui-state-hover"));
                    }).bind("mouseout.selectmenu", function() {
                        s()(this).is(e._selectedOptionLi()) && s()(this).addClass(i), s()(this).removeClass("ui-selectmenu-item-focus ui-state-hover");
                    });
                    if (n[o].parentOptGroup.length) {
                        var c = "ui-selectmenu-group-" + this.element.find("optgroup").index(n[o].parentOptGroup);
                        this.list.find("li." + c).length ? this.list.find("li." + c + ":last ul").append(u) : s()(' <li role="presentation" class="ui-selectmenu-group ' + c + (n[o].parentOptGroup.attr("disabled") ? " " + this.namespace + '-state-disabled" aria-disabled="true"' : '"') + '><span class="ui-selectmenu-group-label">' + n[o].parentOptGroup.attr("label") + "</span><ul></ul></li> ").appendTo(this.list).find("ul").append(u);
                    } else u.appendTo(this.list);
                    if (t.icons) for (var d in t.icons) if (u.is(t.icons[d].find)) {
                        u.data("optionClasses", n[o].classes + " ui-selectmenu-hasIcon").addClass("ui-selectmenu-hasIcon");
                        var h = t.icons[d].icon || "";
                        u.find("a:eq(0)").prepend('<span class="ui-selectmenu-item-icon ui-icon ' + h + '"></span>'), 
                        n[o].bgImage && u.find("span").css("background-image", n[o].bgImage);
                    }
                } else s()('<li role="presentation"><a href="#nogo" tabindex="-1" role="option"></a></li>').appendTo(this.list);
                var p = "dropdown" == t.style;
                if (this.newelement.toggleClass("ui-selectmenu-dropdown", p).toggleClass("ui-selectmenu-popup", !p), 
                this.list.toggleClass("ui-selectmenu-menu-dropdown ui-corner-bottom", p).toggleClass("ui-selectmenu-menu-popup ui-corner-all", !p).find("li:first").toggleClass("ui-corner-top", !p).end().find("li:last").addClass("ui-corner-bottom"), 
                this.selectmenuIcon.toggleClass("ui-icon-triangle-1-s", p).toggleClass("ui-icon-triangle-2-n-s", !p), 
                t.transferClasses) {
                    var f = this.element.attr("class") || "";
                    this.newelement.add(this.list).addClass(f);
                }
                this._computeWidth(), this.list.css("height", "auto");
                var m = this.list.height(), g = s()(window).height(), v = t.maxHeight ? Math.min(t.maxHeight, g) : g / 3;
                m > v && this.list.height(v), this._optionLis = this.list.find("li:not(.ui-selectmenu-group)"), 
                this.element.attr("disabled") ? this.disable() : this.enable(), this._refreshValue(), 
                this._selectedOptionLi().addClass("ui-selectmenu-item-focus"), clearTimeout(this.refreshTimeout), 
                this.refreshTimeout = window.setTimeout(function() {
                    e._refreshPosition();
                }, 200);
            },
            _computeWidth: function() {
                var e = this.options, t = this.newelement.width();
                "dropdown" === e.style ? this.list.width(e.menuWidth || t) : this.list.width(e.menuWidth || t - e.handleWidth);
            },
            destroy: function() {
                this.element.removeData(this.widgetName).removeClass("ui-selectmenu-disabled " + this.namespace + "-state-disabled").removeAttr("aria-disabled").unbind(".selectmenu"), 
                s()(window).unbind(".selectmenu-" + this.ids[0]), s()(document).unbind(".selectmenu-" + this.ids[0]), 
                this.newelement.remove(), this.list.remove(), this.element.unbind(".selectmenu").show(), 
                s.a.Widget.prototype.destroy.apply(this, arguments);
            },
            _typeAhead: function(e, t) {
                var n = this, i = String.fromCharCode(e).toLowerCase(), s = null, o = null;
                n._typeAhead_timer && (window.clearTimeout(n._typeAhead_timer), n._typeAhead_timer = void 0), 
                n._typeAhead_chars = (void 0 === n._typeAhead_chars ? "" : n._typeAhead_chars).concat(i), 
                n._typeAhead_chars.length < 2 || n._typeAhead_chars.substr(-2, 1) === i && n._typeAhead_cycling ? (n._typeAhead_cycling = !0, 
                s = i) : (n._typeAhead_cycling = !1, s = n._typeAhead_chars);
                for (var r = ("focus" !== t ? this._selectedOptionLi().data("index") : this._focusedOptionLi().data("index")) || 0, a = 0; a < this._optionLis.length; a++) {
                    if (this._optionLis.eq(a).text().substr(0, s.length).toLowerCase() === s) if (n._typeAhead_cycling) {
                        if (null === o && (o = a), a > r) {
                            o = a;
                            break;
                        }
                    } else o = a;
                }
                null !== o && this._optionLis.eq(o).find("a").trigger(t), n._typeAhead_timer = window.setTimeout(function() {
                    n._typeAhead_timer = void 0, n._typeAhead_chars = void 0, n._typeAhead_cycling = void 0;
                }, n.options.typeAhead);
            },
            _uiHash: function() {
                var e = this.index();
                return {
                    index: e,
                    option: s()("option", this.element).get(e),
                    value: this.element[0].value
                };
            },
            open: function(e) {
                var t = this.options;
                if ("true" != this.newelement.attr("aria-disabled")) {
                    this._closeOthers(e), this.newelement.addClass("ui-state-active"), this.list.attr("aria-hidden", !1), 
                    this.list.addClass("ui-selectmenu-open");
                    var n = this._selectedOptionLi();
                    "dropdown" == t.style ? this.newelement.removeClass("ui-corner-all").addClass("ui-corner-top") : this.list.css("left", -5e3).scrollTop(this.list.scrollTop() + n.position().top - this.list.outerHeight() / 2 + n.outerHeight() / 2).css("left", "auto"), 
                    this._refreshPosition(), this._computeWidth();
                    var i = n.find("a");
                    i.length && i[0].focus(), this.isOpen = !0, this._trigger("open", e, this._uiHash()), 
                    s()(window).on("resize.selectmenu scroll.selectmenu", this.refreshPosition);
                }
            },
            close: function(e, t) {
                this.newelement.is(".ui-state-active") && (this.newelement.removeClass("ui-state-active"), 
                this.list.removeClass("ui-selectmenu-open"), this.list.attr("aria-hidden", !0), 
                "dropdown" == this.options.style && this.newelement.removeClass("ui-corner-top").addClass("ui-corner-all"), 
                t && this.newelement.focus(), this.isOpen = !1, this._trigger("close", e, this._uiHash()), 
                s()(window).off("resize.selectmenu scroll.selectmenu", this.refreshPosition));
            },
            change: function(e) {
                this.element.trigger("change"), this._trigger("change", e, this._uiHash());
            },
            select: function(e) {
                if (this._disabled(e.currentTarget)) return !1;
                this._trigger("select", e, this._uiHash());
            },
            widget: function() {
                return this.list.add(this.newelement);
            },
            _closeOthers: function(e) {
                s()(".ui-selectmenu.ui-state-active").not(this.newelement).each(function() {
                    s()(this).data("selectelement").selectmenuold("close", e);
                }), s()(".ui-selectmenu.ui-state-hover").trigger("mouseout");
            },
            _toggle: function(e, t) {
                this.isOpen ? this.close(e, t) : this.open(e);
            },
            _formatText: function(e, t) {
                return this.options.format ? e = this.options.format(e, t) : this.options.escapeHtml && (e = s()("<div />").text(e).html()), 
                e;
            },
            _selectedIndex: function() {
                return this.element[0].selectedIndex;
            },
            _selectedOptionLi: function() {
                return this._optionLis.eq(this._selectedIndex());
            },
            _focusedOptionLi: function() {
                var e = this.list.find("a:focus").closest("li");
                return e.length || (e = this.list.find(".ui-selectmenu-item-focus")), e;
            },
            _moveSelection: function(e, t) {
                if (!this.options.disabled) {
                    var n = parseInt(this._selectedOptionLi().data("index") || 0, 10) + e;
                    if (n < 0 && (n = 0), n > this._optionLis.size() - 1 && (n = this._optionLis.size() - 1), 
                    n === t) return !1;
                    this._optionLis.eq(n).hasClass(this.namespace + "-state-disabled") ? (e > 0 ? ++e : --e, 
                    this._moveSelection(e, n)) : this._optionLis.eq(n).trigger("mouseover").trigger("mouseup");
                }
            },
            _moveFocus: function(e, t) {
                if (isNaN(e)) n = parseInt(this._optionLis.filter(e).data("index"), 10); else var n = parseInt(this._focusedOptionLi().data("index") || 0, 10) + e;
                if (n < 0 && (n = 0), n > this._optionLis.size() - 1 && (n = this._optionLis.size() - 1), 
                n === t) return !1;
                var i = "ui-selectmenu-item-" + Math.round(1e3 * Math.random());
                this._focusedOptionLi().find("a:eq(0)").attr("id", ""), this._optionLis.eq(n).hasClass(this.namespace + "-state-disabled") ? (e > 0 ? ++e : --e, 
                this._moveFocus(e, n)) : this._optionLis.eq(n).find("a:eq(0)").attr("id", i).focus(), 
                this.list.attr("aria-activedescendant", i);
            },
            _scrollPage: function(e) {
                var t = Math.floor(this.list.outerHeight() / this._optionLis.first().outerHeight());
                t = "up" == e ? -t : t, this._moveFocus(t);
            },
            _setOption: function(e, t) {
                this.options[e] = t, "disabled" == e && (t && this.close(), this.element.add(this.newelement).add(this.list)[t ? "addClass" : "removeClass"]("ui-selectmenu-disabled " + this.namespace + "-state-disabled").attr("aria-disabled", t));
            },
            disable: function(e, t) {
                void 0 === e ? this._setOption("disabled", !0) : "optgroup" == t ? this._disableOptgroup(e) : this._disableOption(e);
            },
            enable: function(e, t) {
                void 0 === e ? this._setOption("disabled", !1) : "optgroup" == t ? this._enableOptgroup(e) : this._enableOption(e);
            },
            _disabled: function(e) {
                return s()(e).hasClass(this.namespace + "-state-disabled");
            },
            _disableOption: function(e) {
                var t = this._optionLis.eq(e);
                t && (t.addClass(this.namespace + "-state-disabled").find("a").attr("aria-disabled", !0), 
                this.element.find("option").eq(e).attr("disabled", "disabled"));
            },
            _enableOption: function(e) {
                var t = this._optionLis.eq(e);
                t && (t.removeClass(this.namespace + "-state-disabled").find("a").attr("aria-disabled", !1), 
                this.element.find("option").eq(e).removeAttr("disabled"));
            },
            _disableOptgroup: function(e) {
                var t = this.list.find("li.ui-selectmenu-group-" + e);
                t && (t.addClass(this.namespace + "-state-disabled").attr("aria-disabled", !0), 
                this.element.find("optgroup").eq(e).attr("disabled", "disabled"));
            },
            _enableOptgroup: function(e) {
                var t = this.list.find("li.ui-selectmenu-group-" + e);
                t && (t.removeClass(this.namespace + "-state-disabled").attr("aria-disabled", !1), 
                this.element.find("optgroup").eq(e).removeAttr("disabled"));
            },
            index: function(e) {
                return arguments.length ? !this._disabled(s()(this._optionLis[e])) && e != this._selectedIndex() && (this.element[0].selectedIndex = e, 
                this._refreshValue(), void this.change()) : this._selectedIndex();
            },
            getList: function() {
                return this.list;
            },
            getNewElement: function() {
                return this.newelement;
            },
            value: function(e) {
                if (!arguments.length) return this.element[0].value;
                e != this.element[0].value && (this.element[0].value = e, this._refreshValue(), 
                this.change());
            },
            _refreshValue: function() {
                var e = "popup" == this.options.style ? " ui-state-active" : "", t = "ui-selectmenu-item-" + Math.round(1e3 * Math.random());
                this._focusedOptionLi().removeClass("ui-selectmenu-item-focus"), this.list.find(".ui-selectmenu-item-selected").removeClass("ui-selectmenu-item-selected" + e).find("a").attr("aria-selected", "false").attr("id", ""), 
                this._selectedOptionLi().addClass("ui-selectmenu-item-selected" + e).find("a").attr("aria-selected", "true").attr("id", t);
                var n = this.newelement.data("optionClasses") ? this.newelement.data("optionClasses") : "", i = this._selectedOptionLi().data("optionClasses") ? this._selectedOptionLi().data("optionClasses") : "";
                this.newelement.removeClass(n).data("optionClasses", i).addClass(i).find(".ui-selectmenu-status").html(this._selectedOptionLi().find("a:eq(0)").html()), 
                this.list.attr("aria-activedescendant", t);
            },
            _refreshPosition: function() {
                var e = this.options;
                if ("popup" == e.style && !e.positionOptions.offset) var t = this._selectedOptionLi(), n = "0 " + (this.list.offset().top - t.offset().top - (this.newelement.outerHeight() + t.outerHeight()) / 2);
                this.list.css("zIndex", function(e) {
                    if (e.length) for (var t, n, i = s()(e[0]); i.length && i[0] !== document; ) {
                        if (("absolute" === (t = i.css("position")) || "relative" === t || "fixed" === t) && (n = parseInt(i.css("zIndex"), 10), 
                        !isNaN(n) && 0 !== n)) return n;
                        i = i.parent();
                    }
                    return 0;
                }(this.element) + 1).position({
                    of: e.positionOptions.of || this.newelement,
                    my: e.positionOptions.my,
                    at: e.positionOptions.at,
                    offset: e.positionOptions.offset || n,
                    collision: e.positionOptions.collision || ("popup" == e.style ? "fit" : "flip")
                });
            }
        });
    },
    380: function(e, t, n) {
        e.exports = n(1)(265);
    },
    39: function(e, t, n) {
        e.exports = n(1)(135);
    },
    4: function(e, t, n) {
        e.exports = n(1)(7);
    },
    40: function(e, t, n) {
        e.exports = n(1)(79);
    },
    415: function(e, t, n) {
        var i;
        void 0 === (i = function() {
            function e(e, t) {
                return (e.charCodeAt(t + 1) << 8) + e.charCodeAt(t);
            }
            return {
                isAnimatedGif: function(e) {
                    if (!/^GIF8[79]a/.test(e)) return !1;
                    for (var t = 0, n = /\x21\xF9\x04.{4}\x00(\x2C|\x21)/g; n.exec(e); ) if (2 === ++t) return !0;
                    return 0 === t && e.split("\0,").length > 2;
                },
                getDimensions: function(t) {
                    var n = t.substring(0, 6);
                    if (!/^GIF8[79]a/.test(n)) throw new Error("Please provide a GIF encoded image.");
                    if (t.indexOf("\0,") < 0) throw new Error("Please provide a GIF encoded image.");
                    return {
                        width: e(t, 6),
                        height: e(t, 8)
                    };
                },
                getBinaryFromDataUri: function(e) {
                    return atob(e.split(",")[1]);
                },
                isCMYK: function(e) {
                    return this._getChannelCount(e) > 3;
                },
                _getChannelCount: function(e) {
                    var t, n = "getNextByte", i = 0;
                    function s(t) {
                        if (i + t > e.length) return !1;
                        var n = e.substring(i, i + t);
                        return i += t, n;
                    }
                    function o() {
                        return s(1);
                    }
                    function r() {
                        var e, t, n = s(2);
                        return t = 0, ((e = n).charCodeAt(t) << 8) + e.charCodeAt(t + 1);
                    }
                    function a(e) {
                        return "ÿ" === e ? "startOfFrame" : "getNextByte";
                    }
                    function l() {
                        var e = o();
                        return [ "À", "Á", "Â", "Ã", "Å", "Æ", "Ç", "É", "Ê", "Ë", "Í", "Î", "Ï" ].indexOf(e) > -1 ? "readInfo" : "ÿ" === e ? "startOfFrame" : "skipFrame";
                    }
                    if ("ÿØ" !== s(2)) return 0;
                    for (;i < e.length; ) switch (n) {
                      case "getNextByte":
                        if (!1 === (t = o())) return 0;
                        n = a(t);
                        break;

                      case "startOfFrame":
                        n = l();
                        break;

                      case "skipFrame":
                        s(r() - 2), n = "getNextByte";
                        break;

                      case "readInfo":
                        return s(8).charCodeAt(7);
                    }
                }
            };
        }.apply(t, [])) || (e.exports = i);
    },
    44: function(e, t, n) {
        e.exports = n(1)(94);
    },
    445: function(e, t, n) {
        var i, s;
        i = [ n(6) ], void 0 === (s = function(e) {
            "use strict";
            return e.extend({
                init: function() {
                    this.reader = new FileReader();
                },
                _read: function(e) {
                    this.reader.readAsDataURL(e);
                },
                load: function(e) {
                    return new Promise(function(t, n) {
                        this.reader.onload = function(n) {
                            var i = {
                                size: e.size,
                                name: n.target.name || e.name,
                                mode: "data",
                                mime: n.target.type || e.type,
                                result: n.target.result,
                                source: n.target.result.split(",")[1]
                            };
                            i.isImage = !!i.mime.match("image"), t(i);
                        }, this.reader.onerror = function() {
                            n(arguments);
                        }, this._read(e);
                    }.bind(this));
                }
            }, {
                promise: function(e) {
                    return new this().load(e);
                }
            });
        }.apply(t, i)) || (e.exports = s);
    },
    46: function(e, t, n) {
        var i, s, o;
        s = [ n(0) ], void 0 === (o = "function" == typeof (i = function(e) {
            function t(t, i) {
                var s, o, r, a = t.nodeName.toLowerCase();
                return "area" === a ? (s = t.parentNode, o = s.name, !(!t.href || !o || "map" !== s.nodeName.toLowerCase()) && !!(r = e("img[usemap='#" + o + "']")[0]) && n(r)) : (/^(input|select|textarea|button|object)$/.test(a) ? !t.disabled : "a" === a && t.href || i) && n(t);
            }
            function n(t) {
                return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
                    return "hidden" === e.css(this, "visibility");
                }).length;
            }
            var i, s, o, r;
            e.ui = e.ui || {}, e.extend(e.ui, {
                version: "1.11.4",
                keyCode: {
                    BACKSPACE: 8,
                    COMMA: 188,
                    DELETE: 46,
                    DOWN: 40,
                    END: 35,
                    ENTER: 13,
                    ESCAPE: 27,
                    HOME: 36,
                    LEFT: 37,
                    PAGE_DOWN: 34,
                    PAGE_UP: 33,
                    PERIOD: 190,
                    RIGHT: 39,
                    SPACE: 32,
                    TAB: 9,
                    UP: 38
                }
            }), e.fn.extend({
                scrollParent: function(t) {
                    var n = this.css("position"), i = "absolute" === n, s = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/, o = this.parents().filter(function() {
                        var t = e(this);
                        return (!i || "static" !== t.css("position")) && s.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"));
                    }).eq(0);
                    return "fixed" !== n && o.length ? o : e(this[0].ownerDocument || document);
                },
                uniqueId: (i = 0, function() {
                    return this.each(function() {
                        this.id || (this.id = "ui-id-" + ++i);
                    });
                }),
                removeUniqueId: function() {
                    return this.each(function() {
                        /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id");
                    });
                }
            }), e.extend(e.expr[":"], {
                data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
                    return function(n) {
                        return !!e.data(n, t);
                    };
                }) : function(t, n, i) {
                    return !!e.data(t, i[3]);
                },
                focusable: function(n) {
                    return t(n, !isNaN(e.attr(n, "tabindex")));
                },
                tabbable: function(n) {
                    var i = e.attr(n, "tabindex"), s = isNaN(i);
                    return (s || i >= 0) && t(n, !s);
                }
            }), e("<a>").outerWidth(1).jquery || e.each([ "Width", "Height" ], function(t, n) {
                var i = "Width" === n ? [ "Left", "Right" ] : [ "Top", "Bottom" ], s = n.toLowerCase(), o = {
                    innerWidth: e.fn.innerWidth,
                    innerHeight: e.fn.innerHeight,
                    outerWidth: e.fn.outerWidth,
                    outerHeight: e.fn.outerHeight
                };
                function r(t, n, s, o) {
                    return e.each(i, function() {
                        n -= parseFloat(e.css(t, "padding" + this)) || 0, s && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), 
                        o && (n -= parseFloat(e.css(t, "margin" + this)) || 0);
                    }), n;
                }
                e.fn["inner" + n] = function(t) {
                    return void 0 === t ? o["inner" + n].call(this) : this.each(function() {
                        e(this).css(s, r(this, t) + "px");
                    });
                }, e.fn["outer" + n] = function(t, i) {
                    return "number" != typeof t ? o["outer" + n].call(this, t) : this.each(function() {
                        e(this).css(s, r(this, t, !0, i) + "px");
                    });
                };
            }), e.fn.addBack || (e.fn.addBack = function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
            }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = (s = e.fn.removeData, 
            function(t) {
                return arguments.length ? s.call(this, e.camelCase(t)) : s.call(this);
            })), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
                focus: (r = e.fn.focus, function(t, n) {
                    return "number" == typeof t ? this.each(function() {
                        var i = this;
                        setTimeout(function() {
                            e(i).focus(), n && n.call(i);
                        }, t);
                    }) : r.apply(this, arguments);
                }),
                disableSelection: (o = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", 
                function() {
                    return this.bind(o + ".ui-disableSelection", function(e) {
                        e.preventDefault();
                    });
                }),
                enableSelection: function() {
                    return this.unbind(".ui-disableSelection");
                },
                zIndex: function(t) {
                    if (void 0 !== t) return this.css("zIndex", t);
                    if (this.length) for (var n, i, s = e(this[0]); s.length && s[0] !== document; ) {
                        if (("absolute" === (n = s.css("position")) || "relative" === n || "fixed" === n) && (i = parseInt(s.css("zIndex"), 10), 
                        !isNaN(i) && 0 !== i)) return i;
                        s = s.parent();
                    }
                    return 0;
                }
            }), e.ui.plugin = {
                add: function(t, n, i) {
                    var s, o = e.ui[t].prototype;
                    for (s in i) o.plugins[s] = o.plugins[s] || [], o.plugins[s].push([ n, i[s] ]);
                },
                call: function(e, t, n, i) {
                    var s, o = e.plugins[t];
                    if (o && (i || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)) for (s = 0; s < o.length; s++) e.options[o[s][0]] && o[s][1].apply(e.element, n);
                }
            };
        }) ? i.apply(t, s) : i) || (e.exports = o);
    },
    47: function(e, t) {
        e.exports = function(e) {
            var t = [];
            return t.toString = function() {
                return this.map(function(t) {
                    var n = function(e, t) {
                        var n = e[1] || "", i = e[3];
                        if (!i) return n;
                        if (t && "function" == typeof btoa) {
                            var s = (r = i, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */"), o = i.sources.map(function(e) {
                                return "/*# sourceURL=" + i.sourceRoot + e + " */";
                            });
                            return [ n ].concat(o).concat([ s ]).join("\n");
                        }
                        var r;
                        return [ n ].join("\n");
                    }(t, e);
                    return t[2] ? "@media " + t[2] + "{" + n + "}" : n;
                }).join("");
            }, t.i = function(e, n) {
                "string" == typeof e && (e = [ [ null, e, "" ] ]);
                for (var i = {}, s = 0; s < this.length; s++) {
                    var o = this[s][0];
                    "number" == typeof o && (i[o] = !0);
                }
                for (s = 0; s < e.length; s++) {
                    var r = e[s];
                    "number" == typeof r[0] && i[r[0]] || (n && !r[2] ? r[2] = n : n && (r[2] = "(" + r[2] + ") and (" + n + ")"), 
                    t.push(r));
                }
            }, t;
        };
    },
    478: function(e, t, n) {
        var i = n(2), s = {
            "lib/_buttons/_default": n(73).template
        }, o = new i.Template({
            code: function(e, t, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<div id="profile-cover-wrap" class="faux-edit-cover cfix">'), 
                i.b("\n" + n), i.b('  <div class="fancyform left" id="profile-cover-container">'), 
                i.b("\n" + n), i.b('    <p class="small-text grey hide show-on-crop">IMAGE PREVIEW</p>'), 
                i.b("\n"), i.b("\n" + n), i.b('    <div class="left cover-cropper hide show-on-crop">'), 
                i.b("\n" + n), i.b('      <div id="profile-cover" class="profile-cover cfix">'), 
                i.b("\n" + n), i.b('        <div id="cover-preview-img" class="cover-img relative dirty-form-html no-image-yet">'), 
                i.b("\n" + n), i.b(i.rp("<lib/_buttons/_default0", e, t, "")), i.b("        </div>"), 
                i.b("\n" + n), i.b("      </div>"), i.b("\n" + n), i.b("    </div>"), i.b("\n" + n), 
                i.b("  </div>"), i.b("\n"), i.b("\n" + n), i.b('  <div class="cover-image-column image-column right hide">'), 
                i.b("\n" + n), i.b('    <div class="cover-image-cropper"></div>'), i.b("\n" + n), 
                i.b("  </div>"), i.b("\n" + n), i.b("</div>"), i.b("\n"), i.b("\n" + n), i.b('<div id="profile-cover-uploading" class="hide fancy-uploader">'), 
                i.b("\n" + n), i.b('  <div id="profile-cover-image-progress" class="upload-progressbar-wrap js-upload-form">'), 
                i.b("\n" + n), i.b('    <div class="upload-progressbar uploader_uploading_bar"></div>'), 
                i.b("\n" + n), i.b("  </div>"), i.b("\n" + n), i.b("</div>"), i.b("\n"), i.fl();
            },
            partials: {
                "<lib/_buttons/_default0": {
                    name: "lib/_buttons/_default",
                    partials: {},
                    subs: {
                        classes: function(e, t, n, i) {
                            n.b("form-button-default");
                        },
                        label: function(e, t, n, i) {
                            n.b("Upload Image");
                        }
                    }
                }
            },
            subs: {}
        }, '<div id="profile-cover-wrap" class="faux-edit-cover cfix">\n  <div class="fancyform left" id="profile-cover-container">\n    <p class="small-text grey hide show-on-crop">IMAGE PREVIEW</p>\n\n    <div class="left cover-cropper hide show-on-crop">\n      <div id="profile-cover" class="profile-cover cfix">\n        <div id="cover-preview-img" class="cover-img relative dirty-form-html no-image-yet">\n          {{<lib/_buttons/_default}}\n            {{$classes}}form-button-default{{/classes}}\n            {{$label}}Upload Image{{/label}}\n          {{/lib/_buttons/_default}}\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="cover-image-column image-column right hide">\n    <div class="cover-image-cropper"></div>\n  </div>\n</div>\n\n<div id="profile-cover-uploading" class="hide fancy-uploader">\n  <div id="profile-cover-image-progress" class="upload-progressbar-wrap js-upload-form">\n    <div class="upload-progressbar uploader_uploading_bar"></div>\n  </div>\n</div>\n', i);
        o.ri = function(e, t, n) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (o = s, r = t, Object.keys(r).reduce(function(e, t) {
                return e[t] = r[t], e;
            }, o)), n);
            var o, r;
        }, e.exports = o.render.bind(o), e.exports.template = o;
    },
    479: function(e, t, n) {
        var i = n(2), s = {}, o = new i.Template({
            code: function(e, t, n) {
                var i = this;
                return i.b(n = n || ""), i.b("<div>"), i.b("\n" + n), i.b("  <span>Uploads are not supported for your browser version.</span>"), 
                i.b("\n" + n), i.b("  <br />"), i.b("\n" + n), i.b('  <a href="https://help.behance.net/entries/21745635-What-browsers-are-supported-">Please see our FAQ</a>'), 
                i.b("\n" + n), i.b("  for a list of supported browsers."), i.b("\n" + n), i.b("</div>"), 
                i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<div>\n  <span>Uploads are not supported for your browser version.</span>\n  <br />\n  <a href="https://help.behance.net/entries/21745635-What-browsers-are-supported-">Please see our FAQ</a>\n  for a list of supported browsers.\n</div>\n', i);
        o.ri = function(e, t, n) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (o = s, r = t, Object.keys(r).reduce(function(e, t) {
                return e[t] = r[t], e;
            }, o)), n);
            var o, r;
        }, e.exports = o.render.bind(o), e.exports.template = o;
    },
    48: function(e, t, n) {
        e.exports = n(1)(69);
    },
    5: function(e, t, n) {
        e.exports = n(1)(2);
    },
    50: function(e, t, n) {
        e.exports = n(1)(39);
    },
    51: function(e, t, n) {
        e.exports = n(1)(138);
    },
    53: function(e, t, n) {
        var i, s;
        i = [ n(19) ], void 0 === (s = function(e) {
            "use strict";
            var t = [], n = function(n) {
                var i = new e();
                return i.reject(n), (this || t).reduce(function(e, t) {
                    return e.catch(t);
                }, i);
            };
            return Object.defineProperty(n, "handlers", {
                value: t
            }), n;
        }.apply(t, i)) || (e.exports = s);
    },
    54: function(e, t, n) {
        e.exports = n(1)(232);
    },
    55: function(e, t, n) {
        e.exports = n(1)(239);
    },
    557: function(e, t, n) {
        (e.exports = n(47)(!1)).push([ e.i, ".jcrop-holder{direction:ltr;text-align:left}.jcrop-vline,.jcrop-hline{background:#FFF top left repeat;font-size:0;position:absolute}.jcrop-vline{height:100%;width:1px !important}.jcrop-hline{height:1px !important;width:100%}.jcrop-vline.right{right:0}.jcrop-hline.bottom{bottom:0}.jcrop-handle{background-color:#333;border:1px #eee solid;font-size:1px}.jcrop-tracker{height:100%;width:100%;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jcrop-handle.ord-n{left:50%;margin-left:-4px;margin-top:-4px;top:0}.jcrop-handle.ord-s{bottom:0;left:50%;margin-bottom:-4px;margin-left:-4px}.jcrop-handle.ord-e{margin-right:-4px;margin-top:-4px;right:0;top:50%}.jcrop-handle.ord-w{left:0;margin-left:-4px;margin-top:-4px;top:50%}.jcrop-handle.ord-nw{left:0;margin-left:-4px;margin-top:-4px;top:0}.jcrop-handle.ord-ne{margin-right:-4px;margin-top:-4px;right:0;top:0}.jcrop-handle.ord-se{bottom:0;margin-bottom:-4px;margin-right:-4px;right:0}.jcrop-handle.ord-sw{bottom:0;left:0;margin-bottom:-4px;margin-left:-4px}.jcrop-dragbar.ord-n,.jcrop-dragbar.ord-s{height:7px;width:100%}.jcrop-dragbar.ord-e,.jcrop-dragbar.ord-w{height:100%;width:7px}.jcrop-dragbar.ord-n{margin-top:-4px}.jcrop-dragbar.ord-s{bottom:0;margin-bottom:-4px}.jcrop-dragbar.ord-e{margin-right:-4px;right:0}.jcrop-dragbar.ord-w{margin-left:-4px}.jcrop-light .jcrop-vline,.jcrop-light .jcrop-hline{background:#FFF;filter:Alpha(opacity=70) !important;opacity:0.7 !important}.jcrop-light .jcrop-handle{background-color:#000;border-color:#FFF;border-radius:3px}.jcrop-dark .jcrop-vline,.jcrop-dark .jcrop-hline{background:#000;filter:Alpha(opacity=70) !important;opacity:0.7 !important}.jcrop-dark .jcrop-handle{background-color:#FFF;border-color:#000;border-radius:3px}.jcrop-holder img,img.jcrop-preview{max-width:none}.pcrop-buttons-wrap{margin-top:10px;margin-left:-10px}.pcrop-buttons-wrap a{margin-left:10px}\n", "" ]);
    },
    558: function(e, t, n) {
        var i = n(557);
        "string" == typeof i && (i = [ [ e.i, i, "" ] ]);
        var s = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(107)(i, s);
        i.locals && (e.exports = i.locals);
    },
    559: function(e, t) {
        var n;
        (n = jQuery).Jcrop = function(e, t) {
            var i, s = n.extend({}, n.Jcrop.defaults), o = navigator.userAgent.match(/msie/i);
            function r(e) {
                return e + "px";
            }
            function a(e) {
                return s.baseClass + "-" + e;
            }
            function l(e) {
                var t = n(e).offset();
                return [ t.left, t.top ];
            }
            function u(e) {
                return [ e.pageX - i[0], e.pageY - i[1] ];
            }
            function c(e) {
                "object" != typeof e && (e = {}), s = n.extend(s, e), n.each([ "onChange", "onSelect", "onRelease", "onDblClick" ], function(e, t) {
                    "function" != typeof s[t] && (s[t] = function() {});
                });
            }
            function d(e, t) {
                if (i = l(E), Y.setCursor("move" === e ? e : e + "-resize"), "move" === e) return Y.activateHandlers(function(e) {
                    var t = e;
                    return Z.watchKeys(), function(e) {
                        G.moveOffset([ e[0] - t[0], e[1] - t[1] ]), t = e, K.update();
                    };
                }(t), g);
                var n = G.getFixed(), o = h(e), r = G.getCorner(h(o));
                G.setPressed(G.getCorner(o)), G.setCurrent(r), Y.activateHandlers(function(e, t) {
                    return function(n) {
                        if (s.aspectRatio) switch (e) {
                          case "e":
                          case "w":
                            n[1] = t.y + 1;
                            break;

                          case "n":
                          case "s":
                            n[0] = t.x + 1;
                        } else switch (e) {
                          case "e":
                          case "w":
                            n[1] = t.y2;
                            break;

                          case "n":
                          case "s":
                            n[0] = t.x2;
                        }
                        G.setCurrent(n), K.update();
                    };
                }(e, n), g);
            }
            function h(e) {
                switch (e) {
                  case "n":
                    return "sw";

                  case "s":
                  case "e":
                    return "nw";

                  case "w":
                    return "ne";

                  case "ne":
                    return "sw";

                  case "nw":
                    return "se";

                  case "se":
                    return "nw";

                  case "sw":
                    return "ne";
                }
            }
            function p(e) {
                return function(t) {
                    return !(s.disabled || "move" === e && !s.allowMove || (i = l(E), M = !0, d(e, u(t)), 
                    t.stopPropagation(), t.preventDefault(), 1));
                };
            }
            function f(e, t, n) {
                var i = e.width(), s = e.height();
                i > t && t > 0 && (i = t, s = t / e.width() * e.height()), s > n && n > 0 && (s = n, 
                i = n / e.height() * e.width()), N = e.width() / i, j = e.height() / s, e.width(i).height(s);
            }
            function m(e) {
                return {
                    x: e.x * N,
                    y: e.y * j,
                    x2: e.x2 * N,
                    y2: e.y2 * j,
                    w: e.w * N,
                    h: e.h * j
                };
            }
            function g(e) {
                var t = G.getFixed();
                t.w > s.minSelect[0] && t.h > s.minSelect[1] ? (K.enableHandles(), K.done()) : K.release(), 
                Y.setCursor(s.allowSelect ? "crosshair" : "default");
            }
            function v(e) {
                if (s.disabled) return !1;
                if (!s.allowSelect) return !1;
                M = !0, i = l(E), K.disableHandles(), Y.setCursor("crosshair");
                var t = u(e);
                return G.setPressed(t), K.update(), Y.activateHandlers(b, g), Z.watchKeys(), e.stopPropagation(), 
                e.preventDefault(), !1;
            }
            function b(e) {
                G.setCurrent(e), K.update();
            }
            function _() {
                var e = n("<div></div>").addClass(a("tracker"));
                return o && e.css({
                    opacity: 0,
                    backgroundColor: "white"
                }), e;
            }
            "object" != typeof e && (e = n(e)[0]), "object" != typeof t && (t = {}), c(t);
            var q = {
                border: "none",
                visibility: "visible",
                margin: 0,
                padding: 0,
                position: "absolute",
                top: 0,
                left: 0
            }, w = n(e), S = !0;
            if ("IMG" == e.tagName) {
                if (0 != w[0].width && 0 != w[0].height) w.width(w[0].width), w.height(w[0].height); else {
                    var C = new Image();
                    C.src = w[0].src, w.width(C.width), w.height(C.height);
                }
                var E = w.clone().removeAttr("id").css(q).show();
                E.width(w.width()), E.height(w.height()), w.after(E).hide();
            } else E = w.css(q).show(), S = !1, null === s.shade && (s.shade = !0);
            f(E, s.boxWidth, s.boxHeight);
            var P = E.width(), I = E.height(), T = n("<div />").width(P).height(I).addClass(a("holder")).css({
                position: "relative",
                backgroundColor: s.bgColor
            }).insertAfter(w).append(E);
            s.addClass && T.addClass(s.addClass);
            var k = n("<div />"), A = n("<div />").width("100%").height("100%").css({
                zIndex: 310,
                position: "absolute",
                overflow: "hidden"
            }), F = n("<div />").width("100%").height("100%").css("zIndex", 320), D = n("<div />").css({
                position: "absolute",
                zIndex: 600
            }).dblclick(function() {
                var e = G.getFixed();
                s.onDblClick.call(se, e);
            }).insertBefore(E).append(A, F);
            S && (k = n("<img />").attr("src", E.attr("src")).css(q).width(P).height(I), A.append(k));
            var U, R, O, B, N, j, M, L, z = s.boundary, H = _().width(P + 2 * z).height(I + 2 * z).css({
                position: "absolute",
                top: r(-z),
                left: r(-z),
                zIndex: 290
            }).mousedown(v), $ = s.bgColor, W = s.bgOpacity;
            i = l(E);
            var V = function() {
                function e() {
                    var e, t = {}, n = [ "touchstart", "touchmove", "touchend" ], i = document.createElement("div");
                    try {
                        for (e = 0; e < n.length; e++) {
                            var s = n[e], o = (s = "on" + s) in i;
                            o || (i.setAttribute(s, "return;"), o = "function" == typeof i[s]), t[n[e]] = o;
                        }
                        return t.touchstart && t.touchend && t.touchmove;
                    } catch (e) {
                        return !1;
                    }
                }
                return {
                    createDragger: function(e) {
                        return function(t) {
                            return t.pageX = t.originalEvent.changedTouches[0].pageX, t.pageY = t.originalEvent.changedTouches[0].pageY, 
                            !(s.disabled || "move" === e && !s.allowMove || (M = !0, d(e, u(t)), t.stopPropagation(), 
                            t.preventDefault(), 1));
                        };
                    },
                    newSelection: function(e) {
                        return e.pageX = e.originalEvent.changedTouches[0].pageX, e.pageY = e.originalEvent.changedTouches[0].pageY, 
                        v(e);
                    },
                    isSupported: e,
                    support: !0 === s.touchSupport || !1 === s.touchSupport ? s.touchSupport : e()
                };
            }(), G = function() {
                var e, t, n = 0, i = 0, o = 0, r = 0;
                function a() {
                    if (!s.aspectRatio) return t = o - n, a = r - i, U && Math.abs(t) > U && (o = t > 0 ? n + U : n - U), 
                    R && Math.abs(a) > R && (r = a > 0 ? i + R : i - R), B / j && Math.abs(a) < B / j && (r = a > 0 ? i + B / j : i - B / j), 
                    O / N && Math.abs(t) < O / N && (o = t > 0 ? n + O / N : n - O / N), n < 0 && (o -= n, 
                    n -= n), i < 0 && (r -= i, i -= i), o < 0 && (n -= o, o -= o), r < 0 && (i -= r, 
                    r -= r), o > P && (n -= e = o - P, o -= e), r > I && (i -= e = r - I, r -= e), n > P && (r -= e = n - I, 
                    i -= e), i > I && (r -= e = i - I, i -= e), c(u(n, i, o, r));
                    var e, t, a, l, d, h, p, f = s.aspectRatio, m = s.minSize[0] / N, g = s.minSize[1] / j, v = s.maxSize[0] / N, b = s.maxSize[1] / j, _ = o - n, q = r - i, y = Math.abs(_), w = Math.abs(q);
                    return 0 === v && (v = 10 * P), 0 === b && (b = 10 * I), y / w < f ? (d = r, h = w * f, 
                    (l = _ < 0 ? n - h : h + n) < 0 ? (l = 0, p = Math.abs((l - n) / f), d = q < 0 ? i - p : p + i) : l > P && (l = P, 
                    p = Math.abs((l - n) / f), d = q < 0 ? i - p : p + i)) : (l = o, p = y / f, (d = q < 0 ? i - p : i + p) < 0 ? (d = 0, 
                    h = Math.abs((d - i) * f), l = _ < 0 ? n - h : h + n) : d > I && (d = I, h = Math.abs(d - i) * f, 
                    l = _ < 0 ? n - h : h + n)), l > n ? (l - n < m ? l = n + m : l - n > v && (l = n + v), 
                    d = d > i ? i + (l - n) / f : i - (l - n) / f) : l < n && (n - l < m ? l = n - m : n - l > v && (l = n - v), 
                    d = d > i ? i + (n - l) / f : i - (n - l) / f), l < 0 ? (n -= l, l = 0) : l > P && (n -= l - P, 
                    l = P), d < 0 ? (i -= d, d = 0) : d > I && (i -= d - I, d = I), n == l && i == d && (0 == n ? l = m : n = l - m, 
                    0 == i ? d = g : i = d - g), c(u(n, i, l, d));
                }
                function l(e) {
                    return e[0] < 0 && (e[0] = 0), e[1] < 0 && (e[1] = 0), e[0] > P && (e[0] = P), e[1] > I && (e[1] = I), 
                    [ e[0], e[1] ];
                }
                function u(e, t, n, i) {
                    var s = e, o = n, r = t, a = i;
                    return n < e && (s = n, o = e), i < t && (r = i, a = t), [ s, r, o, a ];
                }
                function c(e) {
                    return {
                        x: e[0],
                        y: e[1],
                        x2: e[2],
                        y2: e[3],
                        w: e[2] - e[0],
                        h: e[3] - e[1]
                    };
                }
                return {
                    flipCoords: u,
                    setPressed: function(e) {
                        e = l(e), o = n = e[0], r = i = e[1];
                    },
                    setCurrent: function(n) {
                        n = l(n), e = n[0] - o, t = n[1] - r, o = n[0], r = n[1];
                    },
                    getOffset: function() {
                        return [ e, t ];
                    },
                    moveOffset: function(e) {
                        var t = e[0], s = e[1];
                        0 > n + t && (t -= t + n), 0 > i + s && (s -= s + i), I < r + s && (s += I - (r + s)), 
                        P < o + t && (t += P - (o + t)), n += t, o += t, i += s, r += s;
                    },
                    getCorner: function(e) {
                        var t = a();
                        switch (e) {
                          case "ne":
                            return [ t.x2, t.y ];

                          case "nw":
                            return [ t.x, t.y ];

                          case "se":
                            return [ t.x2, t.y2 ];

                          case "sw":
                            return [ t.x, t.y2 ];
                        }
                    },
                    getFixed: a
                };
            }(), X = function() {
                var e = !1, t = n("<div />").css({
                    position: "absolute",
                    zIndex: 240,
                    opacity: 0
                }), i = {
                    top: l(),
                    left: l().height(I),
                    right: l().height(I),
                    bottom: l()
                };
                function o() {
                    return a(G.getFixed());
                }
                function a(e) {
                    i.top.css({
                        left: r(e.x),
                        width: r(e.w),
                        height: r(e.y)
                    }), i.bottom.css({
                        top: r(e.y2),
                        left: r(e.x),
                        width: r(e.w),
                        height: r(I - e.y2)
                    }), i.right.css({
                        left: r(e.x2),
                        width: r(P - e.x2)
                    }), i.left.css({
                        width: r(e.x)
                    });
                }
                function l() {
                    return n("<div />").css({
                        position: "absolute",
                        backgroundColor: s.shadeColor || s.bgColor
                    }).appendTo(t);
                }
                function u() {
                    e || (e = !0, t.insertBefore(E), o(), K.setBgOpacity(1, 0, 1), k.hide(), c(s.shadeColor || s.bgColor, 1), 
                    K.isAwake() ? h(s.bgOpacity, 1) : h(1, 1));
                }
                function c(e, t) {
                    ne(p(), e, t);
                }
                function d() {
                    e && (t.remove(), k.show(), e = !1, K.isAwake() ? K.setBgOpacity(s.bgOpacity, 1, 1) : (K.setBgOpacity(1, 1, 1), 
                    K.disableHandles()), ne(T, 0, 1));
                }
                function h(n, i) {
                    e && (s.bgFade && !i ? t.animate({
                        opacity: 1 - n
                    }, {
                        queue: !1,
                        duration: s.fadeTime
                    }) : t.css({
                        opacity: 1 - n
                    }));
                }
                function p() {
                    return t.children();
                }
                return {
                    update: o,
                    updateRaw: a,
                    getShades: p,
                    setBgColor: c,
                    enable: u,
                    disable: d,
                    resize: function(e, t) {
                        i.left.css({
                            height: r(t)
                        }), i.right.css({
                            height: r(t)
                        });
                    },
                    refresh: function() {
                        s.shade ? u() : d(), K.isAwake() && h(s.bgOpacity);
                    },
                    opacity: h
                };
            }(), K = function() {
                var e, t = 370, i = {}, o = {}, l = {}, u = !1;
                function c(e, t) {
                    var i = n("<div />").mousedown(p(e)).css({
                        cursor: e + "-resize",
                        position: "absolute",
                        zIndex: t
                    }).addClass("ord-" + e);
                    return V.support && i.bind("touchstart.jcrop", V.createDragger(e)), F.append(i), 
                    i;
                }
                function d() {
                    var e = G.getFixed();
                    G.setPressed([ e.x, e.y ]), G.setCurrent([ e.x2, e.y2 ]), h();
                }
                function h(t) {
                    if (e) return f(t);
                }
                function f(t) {
                    var n, i, o, a, l = G.getFixed();
                    n = l.w, i = l.h, D.width(n).height(i), o = l.x, a = l.y, s.shade || k.css({
                        top: r(-a),
                        left: r(-o)
                    }), D.css({
                        top: r(a),
                        left: r(o)
                    }), s.shade && X.updateRaw(l), e || (D.show(), s.shade ? X.opacity(W) : g(W, !0), 
                    e = !0), t ? s.onSelect.call(se, m(l)) : s.onChange.call(se, m(l));
                }
                function g(t, n, i) {
                    (e || n) && (s.bgFade && !i ? E.animate({
                        opacity: t
                    }, {
                        queue: !1,
                        duration: s.fadeTime
                    }) : E.css("opacity", t));
                }
                function v() {
                    if (u = !0, s.allowResize) return F.show(), !0;
                }
                function b() {
                    u = !1, F.hide();
                }
                function q(e) {
                    L === e ? b() : v();
                }
                s.dragEdges && n.isArray(s.createDragbars) && function(e) {
                    var n;
                    for (n = 0; n < e.length; n++) l[e[n]] = c(e[n], t++).addClass("jcrop-dragbar");
                }(s.createDragbars), n.isArray(s.createHandles) && function(e) {
                    var n, i, r;
                    for (n = 0; n < e.length; n++) o[e[n]] = (i = e[n], r = s.handleSize, c(i, t++).css({
                        opacity: s.handleOpacity
                    }).width(r).height(r).addClass(a("handle")));
                }(s.createHandles), s.drawBorders && n.isArray(s.createBorders) && function(e) {
                    var t, o, r, l;
                    for (o = 0; o < e.length; o++) {
                        switch (e[o]) {
                          case "n":
                            t = "hline";
                            break;

                          case "s":
                            t = "hline bottom";
                            break;

                          case "e":
                            t = "vline right";
                            break;

                          case "w":
                            t = "vline";
                        }
                        i[e[o]] = (r = t, l = n("<div />").css({
                            position: "absolute",
                            opacity: s.borderOpacity
                        }).addClass(a(r)), A.append(l), l);
                    }
                }(s.createBorders), n(document).bind("touchstart.jcrop-ios", function(e) {
                    n(e.currentTarget).hasClass("jcrop-tracker") && e.stopPropagation();
                });
                var y = _().mousedown(p("move")).css({
                    cursor: "move",
                    position: "absolute",
                    zIndex: 360
                });
                return V.support && y.bind("touchstart.jcrop", V.createDragger("move")), A.append(y), 
                b(), {
                    updateVisible: h,
                    update: f,
                    release: function() {
                        b(), D.hide(), s.shade ? X.opacity(1) : g(1), e = !1, s.onRelease.call(se);
                    },
                    refresh: d,
                    isAwake: function() {
                        return e;
                    },
                    setCursor: function(e) {
                        y.css("cursor", e);
                    },
                    enableHandles: v,
                    enableOnly: function() {
                        u = !0;
                    },
                    showHandles: function() {
                        u && F.show();
                    },
                    disableHandles: b,
                    animMode: q,
                    setBgOpacity: g,
                    done: function() {
                        q(!1), d();
                    }
                };
            }(), Y = function() {
                var e = function() {}, t = function() {}, i = s.trackDocument;
                function o(t) {
                    return e(u(t)), !1;
                }
                function r(i) {
                    return i.preventDefault(), i.stopPropagation(), M && (M = !1, t(u(i)), K.isAwake() && s.onSelect.call(se, m(G.getFixed())), 
                    H.css({
                        zIndex: 290
                    }), n(document).unbind(".jcrop"), e = function() {}, t = function() {}), !1;
                }
                function a(e) {
                    return e.pageX = e.originalEvent.changedTouches[0].pageX, e.pageY = e.originalEvent.changedTouches[0].pageY, 
                    o(e);
                }
                function l(e) {
                    return e.pageX = e.originalEvent.changedTouches[0].pageX, e.pageY = e.originalEvent.changedTouches[0].pageY, 
                    r(e);
                }
                return i || H.mousemove(o).mouseup(r).mouseout(r), E.before(H), {
                    activateHandlers: function(s, u) {
                        return M = !0, e = s, t = u, H.css({
                            zIndex: 450
                        }), V.support && n(document).bind("touchmove.jcrop", a).bind("touchend.jcrop", l), 
                        i && n(document).bind("mousemove.jcrop", o).bind("mouseup.jcrop", r), !1;
                    },
                    setCursor: function(e) {
                        H.css("cursor", e);
                    }
                };
            }(), Z = function() {
                var e = n('<input type="radio" />').css({
                    position: "fixed",
                    left: "-120px",
                    width: "12px"
                }), t = n("<div />").css({
                    position: "absolute",
                    overflow: "hidden"
                }).append(e);
                function i(e, t, n) {
                    s.allowMove && (G.moveOffset([ t, n ]), K.updateVisible(!0)), e.preventDefault(), 
                    e.stopPropagation();
                }
                return s.keySupport && (e.keydown(function(e) {
                    if (e.ctrlKey || e.metaKey) return !0;
                    var t = e.shiftKey ? 10 : 1;
                    switch (e.keyCode) {
                      case 37:
                        i(e, -t, 0);
                        break;

                      case 39:
                        i(e, t, 0);
                        break;

                      case 38:
                        i(e, 0, -t);
                        break;

                      case 40:
                        i(e, 0, t);
                        break;

                      case 27:
                        s.allowSelect && K.release();
                        break;

                      case 9:
                        return !0;
                    }
                    return !1;
                }).blur(function(t) {
                    e.hide();
                }), s.fixedSupport ? e.insertBefore(E) : (e.css({
                    position: "absolute",
                    left: "-20px"
                }), t.append(e).insertBefore(E))), {
                    watchKeys: function() {
                        s.keySupport && (e.show(), e.focus());
                    }
                };
            }();
            function J(e) {
                Q([ e[0] / N, e[1] / j, e[2] / N, e[3] / j ]), s.onSelect.call(se, m(G.getFixed())), 
                K.enableHandles();
            }
            function Q(e) {
                G.setPressed([ e[0], e[1] ]), G.setCurrent([ e[2], e[3] ]), K.update();
            }
            function ee() {
                s.disabled = !0, K.disableHandles(), K.setCursor("default"), Y.setCursor("default");
            }
            function te() {
                s.disabled = !1, ie();
            }
            function ne(e, t, i) {
                var o = t || s.bgColor;
                s.bgFade && n.fx.step.hasOwnProperty("backgroundColor") && s.fadeTime && !i ? e.animate({
                    backgroundColor: o
                }, {
                    queue: !1,
                    duration: s.fadeTime
                }) : e.css("backgroundColor", o);
            }
            function ie(e) {
                s.allowResize ? e ? K.enableOnly() : K.enableHandles() : K.disableHandles(), Y.setCursor(s.allowSelect ? "crosshair" : "default"), 
                K.setCursor(s.allowMove ? "move" : "default"), s.hasOwnProperty("trueSize") && (N = s.trueSize[0] / P, 
                j = s.trueSize[1] / I), s.hasOwnProperty("setSelect") && (J(s.setSelect), K.done(), 
                delete s.setSelect), X.refresh(), s.bgColor != $ && (ne(s.shade ? X.getShades() : T, s.shade && s.shadeColor || s.bgColor), 
                $ = s.bgColor), W != s.bgOpacity && (W = s.bgOpacity, s.shade ? X.refresh() : K.setBgOpacity(W)), 
                U = s.maxSize[0] || 0, R = s.maxSize[1] || 0, O = s.minSize[0] || 0, B = s.minSize[1] || 0, 
                s.hasOwnProperty("outerImage") && (E.attr("src", s.outerImage), delete s.outerImage), 
                K.refresh();
            }
            V.support && H.bind("touchstart.jcrop", V.newSelection), F.hide(), ie(!0);
            var se = {
                setImage: function(e, t) {
                    K.release(), ee();
                    var n = new Image();
                    n.onload = function() {
                        var i = n.width, o = n.height, r = s.boxWidth, a = s.boxHeight;
                        E.width(i).height(o), E.attr("src", e), k.attr("src", e), f(E, r, a), P = E.width(), 
                        I = E.height(), k.width(P).height(I), H.width(P + 2 * z).height(I + 2 * z), T.width(P).height(I), 
                        X.resize(P, I), te(), "function" == typeof t && t.call(se);
                    }, n.src = e;
                },
                animateTo: function(e, t) {
                    var n = e[0] / N, i = e[1] / j, o = e[2] / N, r = e[3] / j;
                    if (!L) {
                        var a = G.flipCoords(n, i, o, r), l = G.getFixed(), u = [ l.x, l.y, l.x2, l.y2 ], c = u, d = s.animationDelay, h = a[0] - u[0], p = a[1] - u[1], f = a[2] - u[2], m = a[3] - u[3], g = 0, v = s.swingSpeed;
                        x = c[0], y = c[1], o = c[2], r = c[3], K.animMode(!0);
                        var b = function() {
                            g += (100 - g) / v, c[0] = x + g / 100 * h, c[1] = y + g / 100 * p, c[2] = o + g / 100 * f, 
                            c[3] = r + g / 100 * m, g >= 99.8 && (g = 100), g < 100 ? (Q(c), _()) : (K.done(), 
                            "function" == typeof t && t.call(se));
                        };
                        _();
                    }
                    function _() {
                        window.setTimeout(b, d);
                    }
                },
                setSelect: J,
                setOptions: function(e) {
                    c(e), ie();
                },
                tellSelect: function() {
                    return m(G.getFixed());
                },
                tellScaled: function() {
                    return G.getFixed();
                },
                setClass: function(e) {
                    T.removeClass().addClass(a("holder")).addClass(e);
                },
                disable: ee,
                enable: te,
                cancel: function() {
                    K.done(), Y.activateHandlers(null, null);
                },
                release: K.release,
                destroy: function() {
                    T.remove(), w.show(), n(e).removeData("Jcrop");
                },
                focus: Z.watchKeys,
                getBounds: function() {
                    return [ P * N, I * j ];
                },
                getWidgetSize: function() {
                    return [ P, I ];
                },
                getScaleFactor: function() {
                    return [ N, j ];
                },
                getOptions: function() {
                    return s;
                },
                ui: {
                    holder: T,
                    selection: D
                }
            };
            return o && T.bind("selectstart", function() {
                return !1;
            }), w.data("Jcrop", se), se;
        }, n.fn.Jcrop = function(e, t) {
            var i;
            return this.each(function() {
                if (n(this).data("Jcrop")) {
                    if ("api" === e) return n(this).data("Jcrop");
                    n(this).data("Jcrop").setOptions(e);
                } else "IMG" == this.tagName ? n.Jcrop.Loader(this, function() {
                    n(this).css({
                        display: "block",
                        visibility: "hidden"
                    }), i = n.Jcrop(this, e), n.isFunction(t) && t.call(i);
                }) : (n(this).css({
                    display: "block",
                    visibility: "hidden"
                }), i = n.Jcrop(this, e), n.isFunction(t) && t.call(i));
            }), this;
        }, n.Jcrop.Loader = function(e, t, i) {
            var s = n(e), o = s[0];
            s.bind("load.jcloader", function e() {
                o.complete ? (s.unbind(".jcloader"), n.isFunction(t) && t.call(o)) : window.setTimeout(e, 50);
            }).bind("error.jcloader", function(e) {
                s.unbind(".jcloader"), n.isFunction(i) && i.call(o);
            }), o.complete && n.isFunction(t) && (s.unbind(".jcloader"), t.call(o));
        }, n.Jcrop.defaults = {
            allowSelect: !0,
            allowMove: !0,
            allowResize: !0,
            trackDocument: !0,
            baseClass: "jcrop",
            addClass: null,
            bgColor: "black",
            bgOpacity: .6,
            bgFade: !1,
            borderOpacity: .4,
            handleOpacity: .5,
            handleSize: 7,
            aspectRatio: 0,
            keySupport: !0,
            createHandles: [ "n", "s", "e", "w", "nw", "ne", "se", "sw" ],
            createDragbars: [ "n", "s", "e", "w" ],
            createBorders: [ "n", "s", "e", "w" ],
            drawBorders: !0,
            dragEdges: !0,
            fixedSupport: !0,
            touchSupport: null,
            shade: null,
            boxWidth: 0,
            boxHeight: 0,
            boundary: 2,
            fadeTime: 400,
            animationDelay: 20,
            swingSpeed: 3,
            minSelect: [ 0, 0 ],
            maxSize: [ 0, 0 ],
            minSize: [ 0, 0 ],
            onChange: function() {},
            onSelect: function() {},
            onDblClick: function() {},
            onRelease: function() {}
        };
    },
    560: function(e, t, n) {
        var i, s, o;
        s = [ n(0), n(46), n(22) ], void 0 === (o = "function" == typeof (i = function(e) {
            return e.widget("ui.progressbar", {
                version: "1.11.4",
                options: {
                    max: 100,
                    value: 0,
                    change: null,
                    complete: null
                },
                min: 0,
                _create: function() {
                    this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                        role: "progressbar",
                        "aria-valuemin": this.min
                    }), this.valueDiv = e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), 
                    this._refreshValue();
                },
                _destroy: function() {
                    this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), 
                    this.valueDiv.remove();
                },
                value: function(e) {
                    if (void 0 === e) return this.options.value;
                    this.options.value = this._constrainedValue(e), this._refreshValue();
                },
                _constrainedValue: function(e) {
                    return void 0 === e && (e = this.options.value), this.indeterminate = !1 === e, 
                    "number" != typeof e && (e = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, e));
                },
                _setOptions: function(e) {
                    var t = e.value;
                    delete e.value, this._super(e), this.options.value = this._constrainedValue(t), 
                    this._refreshValue();
                },
                _setOption: function(e, t) {
                    "max" === e && (t = Math.max(this.min, t)), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), 
                    this._super(e, t);
                },
                _percentage: function() {
                    return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min);
                },
                _refreshValue: function() {
                    var t = this.options.value, n = this._percentage();
                    this.valueDiv.toggle(this.indeterminate || t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(n.toFixed(0) + "%"), 
                    this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), 
                    this.overlayDiv || (this.overlayDiv = e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                        "aria-valuemax": this.options.max,
                        "aria-valuenow": t
                    }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== t && (this.oldValue = t, 
                    this._trigger("change")), t === this.options.max && this._trigger("complete");
                }
            });
        }) ? i.apply(t, s) : i) || (e.exports = o);
    },
    57: function(e, t, n) {
        e.exports = n(1)(254);
    },
    59: function(e, t, n) {
        var i = n(2), s = {}, o = new i.Template({
            code: function(e, t, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<span class="rf-icon rf-icon--arrow-font-right">&rarr;</span>'), 
                i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<span class="rf-icon rf-icon--arrow-font-right">&rarr;</span>\n', i);
        o.ri = function(e, t, n) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (o = s, r = t, Object.keys(r).reduce(function(e, t) {
                return e[t] = r[t], e;
            }, o)), n);
            var o, r;
        }, e.exports = o.render.bind(o), e.exports.template = o;
    },
    6: function(e, t, n) {
        e.exports = n(1)(34);
    },
    60: function(e, t, n) {
        e.exports = n(1)(238);
    },
    64: function(e, t, n) {
        var i, s;
        i = [ n(0), n(92) ], void 0 === (s = function(e) {
            "use strict";
            return e.widget("be.autosuggest", e.ui.autocomplete, {
                options: {
                    focus: function() {
                        return !1;
                    },
                    noMatchTemplate: null,
                    hasMatch: function(e) {
                        var t = this.term.toLowerCase();
                        return e.some(function(e) {
                            return t === String(e.label || e.value || e).toLowerCase();
                        });
                    },
                    prepend: !1
                },
                _noMatch: function(t, n) {
                    var i = this.options.noMatchTemplate, s = this.options.prepend;
                    e.isFunction(i) && e(i({
                        term: this.term,
                        items: n
                    }))[s ? "prependTo" : "appendTo"](this.menu.element).on("mouseover", function() {
                        e(this).parent().find(".ui-state-focus").removeClass("ui-state-focus");
                    });
                },
                _hasNoMatch: function(e) {
                    return this.options.noMatchTemplate && !this.options.hasMatch.call(this, e);
                },
                __response: function(e) {
                    !this._hasNoMatch(e) || e && e.length || this.options.disabled || this.cancelSearch ? this._super(e) : (e = [], 
                    this._trigger("response", null, {
                        content: e
                    }), this._suggest(e), this._trigger("open"));
                },
                _suggest: function(e) {
                    this._super(e), this._hasNoMatch(e) && this._noMatch(e);
                },
                _create: function() {
                    this._super(), this.options.messages && this.options.messages.placeholder && this.element.prop("placeholder", this.options.messages.placeholder);
                },
                _resizeMenu: function() {
                    var t = this.menu.element, n = this.options.width;
                    e.isNumeric(n) ? t.outerWidth(n) : this._super();
                },
                _renderItem: function(t, n) {
                    var i = this.options.itemTemplate;
                    return e.isFunction(i) ? e(i(n)).appendTo(t) : this._super(t, n);
                },
                clear: function() {
                    this._value("");
                }
            });
        }.apply(t, i)) || (e.exports = s);
    },
    659: function(e, t, n) {
        var i = n(2), s = {}, o = new i.Template({
            code: function(e, t, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<p class="copy">'), i.b("\n" + n), i.s(i.f("translate", e, t, 1), e, t, 0, 31, 201, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b("team_delete_text|Deleting your Team will remove all members and admins from this Team. Deleting a Team is PERMANENT and data associated with the Team cannot be recovered.");
                }), e.pop()), i.b("\n" + n), i.b("<br/><br/>"), i.b("\n" + n), i.b("\t"), i.s(i.f("translate", e, t, 1), e, t, 0, 242, 351, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b("team_delete_text_also|Deleting your team will ALSO delete any job or talent search associated with this team.");
                }), e.pop()), i.b("\n" + n), i.b("</p>"), i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<p class="copy">\n{{#translate}}team_delete_text|Deleting your Team will remove all members and admins from this Team. Deleting a Team is PERMANENT and data associated with the Team cannot be recovered.{{/translate}}\n<br/><br/>\n\t{{#translate}}team_delete_text_also|Deleting your team will ALSO delete any job or talent search associated with this team.{{/translate}}\n</p>\n', i);
        o.ri = function(e, t, n) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (o = s, r = t, Object.keys(r).reduce(function(e, t) {
                return e[t] = r[t], e;
            }, o)), n);
            var o, r;
        }, e.exports = o.render.bind(o), e.exports.template = o;
    },
    660: function(e, t, n) {
        var i = n(2), s = {
            "bestyleguide/_avatar": n(44).template
        }, o = new i.Template({
            code: function(e, t, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<li class="js-team-container draggable-container settings-row js-form-item" data-name="'), 
                i.b(i.v(i.d("team.name", e, t, 0))), i.b('" data-id="'), i.b(i.v(i.d("team.id", e, t, 0))), 
                i.b('">'), i.b("\n" + n), i.b('  <span class="js-team-handle beicons drag-handle">f</span>'), 
                i.b("\n" + n), i.b(i.rp("<bestyleguide/_avatar0", e, t, "")), i.b('    <span class="team-name team-info">'), 
                i.b(i.v(i.d("team.name", e, t, 0))), i.b("</span>"), i.b("\n" + n), i.b("    "), 
                i.s(i.d("team_member.pending", e, t, 1), e, t, 0, 467, 569, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b('<span class="team-pending team-info">'), n.s(n.f("translate", e, t, 1), e, t, 0, 518, 548, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b("profile_team_pending|(pending)");
                    }), e.pop()), n.b("</span>");
                }), e.pop()), i.b("\n" + n), i.b('    <a class="js-team-remove remove beicons">h</a>'), 
                i.b("\n" + n), i.b("</li>"), i.b("\n"), i.fl();
            },
            partials: {
                "<bestyleguide/_avatar0": {
                    name: "bestyleguide/_avatar",
                    partials: {},
                    subs: {
                        src: function(e, t, n, i) {
                            n.b(n.v(n.d("team.images.50", e, t, 0)));
                        },
                        srcLarge: function(e, t, n, i) {
                            n.b(n.v(n.d("team.images.115", e, t, 0)));
                        },
                        avatarUrl: function(e, t, n, i) {
                            n.b(n.v(n.f("url", e, t, 0)));
                        }
                    }
                }
            },
            subs: {}
        }, '<li class="js-team-container draggable-container settings-row js-form-item" data-name="{{team.name}}" data-id="{{team.id}}">\n  <span class="js-team-handle beicons drag-handle">f</span>\n    {{<bestyleguide/_avatar}}\n      {{$src}}{{team.images.50}}{{/src}}\n      {{$srcLarge}}{{team.images.115}}{{/srcLarge}}\n      {{$avatarUrl}}{{url}}{{/avatarUrl}}\n    {{/bestyleguide/_avatar}}\n    <span class="team-name team-info">{{team.name}}</span>\n    {{#team_member.pending}}<span class="team-pending team-info">{{#translate}}profile_team_pending|(pending){{/translate}}</span>{{/team_member.pending}}\n    <a class="js-team-remove remove beicons">h</a>\n</li>\n', i);
        o.ri = function(e, t, n) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (o = s, r = t, Object.keys(r).reduce(function(e, t) {
                return e[t] = r[t], e;
            }, o)), n);
            var o, r;
        }, e.exports = o.render.bind(o), e.exports.template = o;
    },
    661: function(e, t, n) {
        var i = n(2), s = {
            "form/text": n(118).template,
            "form/button": n(342).template
        }, o = new i.Template({
            code: function(e, t, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<li class="settings-row draggable-container js-soc-ref-container soc-ref-container'), 
                i.s(i.f("hide", e, t, 1), e, t, 0, 91, 96, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b(" hide");
                }), e.pop()), i.b('" '), i.s(i.f("hide", e, t, 1), e, t, 0, 116, 136, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b('data-hidden="hidden"');
                }), e.pop()), i.b(' data-id="'), i.b(i.v(i.f("id", e, t, 0))), i.b('" data-name="'), 
                i.b(i.v(i.f("name", e, t, 0))), i.b('" data-url="'), i.b(i.v(i.f("url", e, t, 0))), 
                i.b('"'), i.s(i.f("enabled", e, t, 1), e, t, 0, 214, 237, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b(' data-enabled="enabled"');
                }), e.pop()), i.b(">"), i.b("\n" + n), i.b('  <span class="js-soc-ref-handle beicons drag-handle">f</span>'), 
                i.b("\n" + n), i.b('  <div class="ss-social" href="'), i.b(i.v(i.f("href", e, t, 0))), 
                i.b('" title="'), i.b(i.v(i.f("name", e, t, 0))), i.b('">'), i.b(i.v(i.f("name", e, t, 0))), 
                i.b("</div>"), i.b("\n" + n), i.b('  <span class="social-name">'), i.b(i.v(i.f("name", e, t, 0))), 
                i.b("</span>"), i.b("\n" + n), i.s(i.f("enabled", e, t, 1), e, t, 0, 445, 668, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                    i.b('    <span class="js-soc-ref-enabled soc-ref-action settings-row-action">'), 
                    i.b("\n" + n), i.b('      <span class="soc-ref-username">'), i.s(i.f("username", e, t, 1), e, t, 0, 569, 570, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                        n.b("@");
                    }), e.pop()), i.b(i.v(i.f("url", e, t, 0))), i.b("</span>"), i.b("\n" + n), i.b('      <a class="js-soc-ref-remove remove beicons">h</a>'), 
                    i.b("\n" + n), i.b("    </span>"), i.b("\n" + n);
                }), e.pop()), i.s(i.f("enabled", e, t, 1), e, t, 1, 0, 0, "") || (i.b('    <span class="js-soc-ref-disabled soc-ref-action settings-row-action">'), 
                i.b("\n" + n), i.b('      <span class="js-soc-ref-entry hide">'), i.b("\n" + n), 
                i.s(i.f("input", e, t, 1), e, t, 0, 831, 867, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b(n.rp("<form/text0", e, t, "          "));
                }), e.pop()), i.s(i.f("buttonSubmit", e, t, 1), e, t, 0, 903, 941, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b(n.rp("<form/button1", e, t, "          "));
                }), e.pop()), i.b('        <a href="#" class="js-soc-ref-remove remove beicons">h</a>'), 
                i.b("\n" + n), i.b("      </span>"), i.b("\n" + n), i.s(i.f("buttonConnect", e, t, 1), e, t, 0, 1062, 1092, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b(n.rp("<form/button2", e, t, "      "));
                }), e.pop()), i.b("    </span>"), i.b("\n" + n)), i.b("</li>"), i.b("\n"), i.fl();
            },
            partials: {
                "<form/text0": {
                    name: "form/text",
                    partials: {},
                    subs: {}
                },
                "<form/button1": {
                    name: "form/button",
                    partials: {},
                    subs: {}
                },
                "<form/button2": {
                    name: "form/button",
                    partials: {},
                    subs: {}
                }
            },
            subs: {}
        }, '<li class="settings-row draggable-container js-soc-ref-container soc-ref-container{{#hide}} hide{{/hide}}" {{#hide}}data-hidden="hidden"{{/hide}} data-id="{{id}}" data-name="{{name}}" data-url="{{url}}"{{#enabled}} data-enabled="enabled"{{/enabled}}>\n  <span class="js-soc-ref-handle beicons drag-handle">f</span>\n  <div class="ss-social" href="{{href}}" title="{{name}}">{{name}}</div>\n  <span class="social-name">{{name}}</span>\n  {{#enabled}}\n    <span class="js-soc-ref-enabled soc-ref-action settings-row-action">\n      <span class="soc-ref-username">{{#username}}@{{/username}}{{url}}</span>\n      <a class="js-soc-ref-remove remove beicons">h</a>\n    </span>\n  {{/enabled}}\n  {{^enabled}}\n    <span class="js-soc-ref-disabled soc-ref-action settings-row-action">\n      <span class="js-soc-ref-entry hide">\n        {{#input}}\n          {{> form/text }}\n        {{/input}}\n        {{#buttonSubmit}}\n          {{> form/button }}\n        {{/buttonSubmit}}\n        <a href="#" class="js-soc-ref-remove remove beicons">h</a>\n      </span>\n    {{#buttonConnect}}\n      {{> form/button }}\n    {{/buttonConnect}}\n    </span>\n  {{/enabled}}\n</li>\n', i);
        o.ri = function(e, t, n) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (o = s, r = t, Object.keys(r).reduce(function(e, t) {
                return e[t] = r[t], e;
            }, o)), n);
            var o, r;
        }, e.exports = o.render.bind(o), e.exports.template = o;
    },
    662: function(e, t, n) {
        var i = n(2), s = {}, o = new i.Template({
            code: function(e, t, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<li class="js-web-ref-container draggable-container settings-row" data-title="'), 
                i.b(i.v(i.d("linkTitle.value", e, t, 0))), i.b('" data-url="'), i.b(i.v(i.d("linkUrl.value", e, t, 0))), 
                i.b('">'), i.b("\n" + n), i.b('  <span class="js-web-ref-handle beicons drag-handle">f</span>'), 
                i.b("\n" + n), i.b('    <span class="web-ref-name">'), i.b(i.v(i.d("linkTitle.value", e, t, 0))), 
                i.b("</span>"), i.b("\n" + n), i.b('    <span class="web-ref-url">'), i.b(i.v(i.d("linkUrl.value", e, t, 0))), 
                i.b("</span>"), i.b("\n" + n), i.b('    <a class="js-web-ref-remove remove beicons">h</a>'), 
                i.b("\n" + n), i.b("</li>"), i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<li class="js-web-ref-container draggable-container settings-row" data-title="{{linkTitle.value}}" data-url="{{linkUrl.value}}">\n  <span class="js-web-ref-handle beicons drag-handle">f</span>\n    <span class="web-ref-name">{{linkTitle.value}}</span>\n    <span class="web-ref-url">{{linkUrl.value}}</span>\n    <a class="js-web-ref-remove remove beicons">h</a>\n</li>\n', i);
        o.ri = function(e, t, n) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (o = s, r = t, Object.keys(r).reduce(function(e, t) {
                return e[t] = r[t], e;
            }, o)), n);
            var o, r;
        }, e.exports = o.render.bind(o), e.exports.template = o;
    },
    663: function(e, t, n) {
        var i = n(2), s = {}, o = new i.Template({
            code: function(e, t, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<li><a href="#'), i.b(i.v(i.f("sectionId", e, t, 0))), 
                i.b('" data-section="'), i.b(i.v(i.f("sectionId", e, t, 0))), i.b('" class="js-section-nav">'), 
                i.b(i.v(i.f("title", e, t, 0))), i.b("</a></li>"), i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<li><a href="#{{sectionId}}" data-section="{{sectionId}}" class="js-section-nav">{{title}}</a></li>\n', i);
        o.ri = function(e, t, n) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (o = s, r = t, Object.keys(r).reduce(function(e, t) {
                return e[t] = r[t], e;
            }, o)), n);
            var o, r;
        }, e.exports = o.render.bind(o), e.exports.template = o;
    },
    664: function(e, t, n) {
        var i = n(2), s = {
            "profile/_editor/_block": n(944).template,
            "profile/user/_editor/_customSection": n(943).template
        }, o = new i.Template({
            code: function(e, t, n) {
                var i = this;
                return i.b(n = n || ""), i.b(i.rp("<profile/_editor/_block1", e, t, "")), i.fl();
            },
            partials: {
                "<profile/_editor/_block1": {
                    name: "profile/_editor/_block",
                    partials: {
                        "<contentprofile/user/_editor/_customSection0": {
                            name: "profile/user/_editor/_customSection",
                            partials: {},
                            subs: {}
                        }
                    },
                    subs: {
                        content: function(e, t, n, i) {
                            n.b(n.rp("<contentprofile/user/_editor/_customSection0", e, t, ""));
                        }
                    }
                }
            },
            subs: {}
        }, "{{< profile/_editor/_block}}\n  {{$content}}{{> profile/user/_editor/_customSection}}{{/content}}\n{{/ profile/_editor/_block}}\n", i);
        o.ri = function(e, t, n) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (o = s, r = t, Object.keys(r).reduce(function(e, t) {
                return e[t] = r[t], e;
            }, o)), n);
            var o, r;
        }, e.exports = o.render.bind(o), e.exports.template = o;
    },
    67: function(e, t, n) {
        var i = n(2), s = {}, o = new i.Template({
            code: function(e, t, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<div class="js-spin label-spin"></div>'), i.b("\n" + n), 
                i.b('<span class="js-spin-label-saving label-spin-status label-spin-status-saving hide">'), 
                i.s(i.f("translate", e, t, 1), e, t, 0, 136, 166, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b("form_template_saving|Saving...");
                }), e.pop()), i.b("</span>"), i.b("\n" + n), i.b('<span class="js-spin-label-saved label-spin-status label-spin-status-saved beicons-pre beicons-pre-check-circle hide">'), 
                i.s(i.f("translate", e, t, 1), e, t, 0, 320, 345, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b("form_template_saved|Saved");
                }), e.pop()), i.b("</span>"), i.b("\n" + n), i.b('<span class="js-spin-label-error label-spin-status label-spin-status-error beicons-pre beicons-pre-x-circle hide">'), 
                i.s(i.f("translate", e, t, 1), e, t, 0, 495, 558, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b("form_template_error_saving|Error saving: please try again later");
                }), e.pop()), i.b("</span>"), i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<div class="js-spin label-spin"></div>\n<span class="js-spin-label-saving label-spin-status label-spin-status-saving hide">{{#translate}}form_template_saving|Saving...{{/translate}}</span>\n<span class="js-spin-label-saved label-spin-status label-spin-status-saved beicons-pre beicons-pre-check-circle hide">{{#translate}}form_template_saved|Saved{{/translate}}</span>\n<span class="js-spin-label-error label-spin-status label-spin-status-error beicons-pre beicons-pre-x-circle hide">{{#translate}}form_template_error_saving|Error saving: please try again later{{/translate}}</span>\n', i);
        o.ri = function(e, t, n) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (o = s, r = t, Object.keys(r).reduce(function(e, t) {
                return e[t] = r[t], e;
            }, o)), n);
            var o, r;
        }, e.exports = o.render.bind(o), e.exports.template = o;
    },
    69: function(e, t, n) {
        e.exports = n(1)(38);
    },
    7: function(e, t, n) {
        e.exports = n(1)(4);
    },
    73: function(e, t, n) {
        e.exports = n(1)(255);
    },
    74: function(e, t, n) {
        e.exports = n(1)(57);
    },
    78: function(e, t, n) {
        e.exports = n(1)(6);
    },
    8: function(e, t, n) {
        e.exports = n(1)(13);
    },
    80: function(e, t, n) {
        e.exports = n(1)(93);
    },
    83: function(e, t, n) {
        e.exports = n(1)(45);
    },
    86: function(e, t, n) {
        "use strict";
        var i = n(51);
        t.a = i.default.validate;
    },
    864: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n(0), s = n.n(i), o = n(375), r = n(5), a = n(6), l = n.n(a), u = n(3), c = n(7), d = n(297), h = n(274), p = n(664), f = n.n(p), m = n(26), g = n.n(m), v = h.a.extend({
            template: g()(f.a, s.a)
        }, {
            serialize: function() {
                var e = s()(".js-form-section-title"), t = s()(".js-form-section-body"), n = [];
                return e.each(function(i) {
                    var o = s()(e[i]).val(), r = s()(t[i]).val();
                    (o || r) && n.push({
                        title: o,
                        body: r
                    });
                }), n;
            }
        }), b = n(663), _ = n.n(b), q = h.a.extend({
            template: g()(_.a, s.a)
        }), y = l.a.extend({
            init: function(e) {
                this._scrollNav = e;
                var t = c.default.getLocation("hash").substring(1), n = s()(".js-form-nav"), i = n[0].offsetTop;
                s()(".js-named-anchor").css({
                    top: -1 * i,
                    paddingTop: i
                }), d.a.init(), n.on("click", ".js-section-nav", function(t) {
                    t.preventDefault();
                    var n = s()(this).data("section");
                    e.scrollTo(n);
                }), s()(".js-add-custom-section").on("click", this._addCustomSection.bind(this)), 
                r.default.custom_section ? this._addCustomSection() : "" !== t && this._scrollNav.scrollTo(t);
            },
            _renderNavItem: function(e) {
                var t = new q(s()(".js-form-nav"));
                t.render({
                    sectionId: e,
                    title: u.default.translate("edit_custom_section", "Custom Section")
                }), t.$view.insertBefore(s()(".js-add-custom-section-nav"));
            },
            _renderCustomSection: function(e, t) {
                var n = new v(s()(".js-form-contents"));
                return n.render({
                    sectionId: e,
                    title: u.default.translate("edit_custom_section", "Custom Section"),
                    data: {
                        areaName: {
                            id: "sections-title-" + t,
                            label: u.default.translate("edit_custom_title", "Section Title"),
                            classes: [ "js-form-section-title", "form-text-normal" ],
                            validate: "optional,Generic",
                            maxlength: 40,
                            value: ""
                        },
                        areaValue: {
                            id: "sections-body-" + t,
                            label: u.default.translate("edit_custom_desc", "Description"),
                            classes: [ "js-form-section-body", "form-text-normal" ],
                            validate: "optional,Generic",
                            value: ""
                        }
                    }
                }), n;
            },
            _addCustomSection: function() {
                var e, t, n = s()(".js-custom-section").length;
                if (!(n >= r.default.EDITOR.CUSTOM_SECTION_LIMIT)) return e = "custom-section-" + (n + 1), 
                t = this._renderCustomSection(e, n), this._renderNavItem(e), n === r.default.EDITOR.CUSTOM_SECTION_LIMIT - 1 && s()(".js-custom-section-remove").remove(), 
                this._scrollNav.recalculatePositions(), this._scrollNav.scrollTo(e), t.$view.find(".js-form-section-title").trigger("focus"), 
                !1;
                this._scrollNav.scrollTo("custom-section-2");
            }
        }), w = n(4), x = n(16), S = n(18), C = n(83), E = n.n(C), P = n(20), I = n.n(P), T = E.a.extend({
            pending: 0,
            bindBeforeUnload: function(e) {
                var t = this;
                s()(window).on("beforeunload", function() {
                    if (t.hasPending()) return e;
                });
            },
            _decrementPending: function() {
                this.pending--, this.hasPending() || this.trigger("after");
            },
            _success: function(e) {
                return this._decrementPending(), e;
            },
            _error: function(e) {
                throw this._decrementPending(), e;
            },
            add: function(e) {
                return this.hasPending() || this.trigger("before"), this.pending++, e.then(this._success.bind(this), this._error.bind(this));
            },
            hasPending: function() {
                return this.pending > 0;
            }
        }, {
            init: function(e) {
                var t = new this();
                return t.bindBeforeUnload(e), t;
            }
        }).mixin(I.a).init(u.default.translate("edit_portfolio_wait_saving", "We're still saving your changes. Please wait before leaving this page."));
        T.displayMessage = function(e, t) {
            s()(".js-editor-saving-message").text(e).removeClass("hide-phone").toggleClass("error", t || !1);
        }, T.on("before", function() {
            T.displayMessage(u.default.translate("edit_portfolio_saving", "Saving your changes..."));
        }).on("after", function() {
            T.displayMessage(u.default.translate("edit_portfolio_saved", "Your changes have been saved."));
        });
        var k, A = T, F = n(29), D = n.n(F), U = n(340), R = n(662), O = n.n(R);
        n(268);
        function B() {
            k.scrollNav.recalculatePositions(), k.form.submit();
        }
        var N, j = h.a.extend({
            rendered: function() {
                var e = this;
                k = this.constructor.sharedInstances, this.$view.on("click", ".js-web-ref-remove", function(t) {
                    t.preventDefault(), e.destroy(), B();
                });
            },
            bind: function() {
                var e = this, t = function(t) {
                    t.preventDefault();
                    var n = s()(".js-web-ref-title"), i = s()(".js-web-ref-url"), o = s()(".js-web-ref-entry"), r = n.val(), a = i.val(), l = !1;
                    D()(r, "required,Generic") || (l = !0, U.a.display(n, D.a.message)), D()(a, "required,UrlExt") || (l = !0, 
                    U.a.display(i, D.a.message)), l || (e.render([ {
                        linkTitle: {
                            value: r
                        },
                        linkUrl: {
                            value: a
                        }
                    } ]), B(), o.find("input").val(""));
                };
                this.$parent.sortable({
                    axis: "y",
                    handle: ".js-web-ref-handle",
                    placeholder: "ui-sortable-placeholder ui-corner-all",
                    forcePlaceholderSize: !0
                }).on("sortupdate", function() {
                    B();
                }), s()(".js-web-ref-entry").on("keypress", ".js-web-ref-title, .js-web-ref-url", function(e) {
                    13 === e.which && t.apply(this, arguments);
                }), s()(".js-web-ref-input").on("click", t);
            },
            template: g()(O.a, s.a)
        }, {
            sharedInstances: {
                scrollNav: null,
                form: null
            },
            serialize: function() {
                var e = [];
                return s()(".js-web-ref-container").each(function() {
                    var t = s()(this);
                    e.push({
                        title: t.data("title"),
                        url: t.data("url")
                    });
                }), e.length > 0 ? e : "";
            }
        }), M = n(661), L = n.n(M);
        function z() {
            N.form.submit();
        }
        function H(e) {
            return +r.default.SERVICES.DATA_TYPES[e] == +r.default.SERVICES.TYPE_USERNAME;
        }
        function $(e, t) {
            return e = (e = (e = (e = (e = e.trim()).replace(/https?:\/\//, "")).replace(/^javascript:/, "")).replace("www.", "")).replace(/@/g, ""), 
            Object.keys(r.default.SERVICES.URLS).forEach(function(n) {
                var i = r.default.SERVICES.URLS[n], s = new RegExp("^" + i, "i");
                +n == +t && (e = e.replace(s, ""));
            }), e;
        }
        var W, V = h.a.extend({
            rendered: function() {
                N = this.constructor.sharedInstances, this.id = this.$view.data("id"), this.name = this.$view.data("name");
                var e = this, t = e.$view, n = function(n) {
                    n.preventDefault();
                    var i = t.find(".js-soc-ref-input"), s = $(i.val(), this.id);
                    D()(s, "required,Generic") ? (this.disabled = !0, e.render({
                        id: e.id,
                        name: e.name,
                        enabled: !0,
                        show: !0,
                        url: s,
                        username: H(e.id)
                    }), z()) : U.a.display(i, D.a.message);
                };
                t.on("click", ".js-soc-ref-remove", function(t) {
                    t.preventDefault();
                    var n = H(e.id) ? u.default.translate("profile_social_enter_username", "Enter Username") : u.default.translate("profile_social_enter_url", "Enter URL");
                    e.render({
                        id: e.id,
                        name: e.name,
                        enabled: !1,
                        show: !1,
                        url: "",
                        input: {
                            containerClasses: [ "soc-ref-action-wrap", "soc-ref-input" ],
                            classes: [ "js-soc-ref-input", "js-input-ignore", "form-text-normal" ],
                            id: "soc-ref-input-" + e.id,
                            placeholder: n
                        },
                        buttonConnect: {
                            classes: [ "js-soc-ref-connect", "rf-button--small" ],
                            label: u.default.translate("profile_social_link", "Link")
                        },
                        buttonSubmit: {
                            containerClasses: [ "soc-ref-action-wrap" ],
                            classes: [ "js-soc-ref-submit", "soc-ref-submit", "rf-button--small", "rf-button--inline" ],
                            label: u.default.translate("profile_social_submit", "Submit")
                        }
                    }), z();
                }), t.on("keypress", ".js-soc-ref-input", function(e) {
                    13 === e.which && n.apply(this, arguments);
                }), t.on("click", ".js-soc-ref-connect", function(e) {
                    e.preventDefault(), s()(this).addClass("hide"), t.find(".js-soc-ref-entry").removeClass("hide"), 
                    t.find(".js-soc-ref-input").trigger("focus"), t.addClass("connect-active");
                }), t.on("click", ".js-soc-ref-submit", n);
            },
            bind: function() {
                var e = s()(".js-soc-ref-more");
                this.$parent.sortable({
                    axis: "y",
                    handle: ".js-soc-ref-handle",
                    forcePlaceholderSize: !0
                }).on("sortupdate", function() {
                    z();
                }), e.on("click", function(t) {
                    t.preventDefault(), e.toggleClass("hide"), s()(".js-soc-ref-container[data-hidden]").toggleClass("hide"), 
                    N.scrollNav.recalculatePositions();
                });
            },
            unbind: function() {
                this.$parent.sortable("destroy");
            },
            template: g()(L.a, s.a)
        }, {
            sharedInstances: {
                scrollNav: null,
                form: null
            },
            serialize: function() {
                var e = [];
                return s()(".js-soc-ref-container").each(function() {
                    var t = s()(this);
                    t.data("enabled") && e.push({
                        social_id: t.data("id"),
                        url: t.data("url")
                    });
                }), e.length > 0 ? e : "";
            },
            cleanUrl: $
        }), G = n(86), X = n(121), K = n(335), Y = n(660), Z = n.n(Y);
        var J = function(e) {
            return r.default.PAGE_URLS.TEAMS_ENDPOINT + "/" + e + r.default.PAGE_URLS.TEAMS_SEGMENT_MEMBERS;
        }, Q = h.a.extend({
            rendered: function() {
                W = this.constructor.sharedInstances, this.id = this.$view.data("id");
                var e = this;
                K.a.addToBlacklist(this.id), e.$view.on("click", ".js-team-remove", function(t) {
                    t.preventDefault(), Object(G.a)(Object(X.a)({
                        title: u.default.translate("profile_team_leave_team", "Leave Team"),
                        html: u.default.translate("profile_team_leave_are_you_sure", "Are you sure you want to leave this team?"),
                        buttons: [ {
                            label: u.default.translate("profile_team_button_leave", "Leave"),
                            classes: [ "js-confirm" ]
                        }, {
                            label: u.default.translate("profile_team_button_cancel", "Cancel"),
                            classes: [ "rf-button--inline", "js-cancel" ]
                        } ]
                    }), {
                        waitingText: u.default.translate("profile_team_waiting_text_deleting", "Deleting..."),
                        promiseGenerator: function() {
                            var t = Object(w.default)({
                                url: J(e.id),
                                type: "DELETE"
                            }).then(function() {
                                K.a.removeFromBlacklist(e.id), e.destroy(), W.scrollNav.recalculatePositions();
                            });
                            return A.add(t);
                        }
                    });
                });
            },
            bind: function() {
                (function() {
                    var e = this, t = s()(".js-team-name");
                    Object(K.a)(t, function(e) {
                        return e.value = e.name, e.is_private = e.invite_only, e;
                    }).on("autoselectselect", function(n, i) {
                        var s = Object(w.default)({
                            url: J(i.item.id),
                            type: "POST"
                        }).then(function(t) {
                            K.a.addToBlacklist(i.item.id), e.render([ t.team_member ]), W.scrollNav.recalculatePositions();
                        }, function(e) {
                            U.a.display(t, e);
                        });
                        A.add(s);
                    });
                }).call(this), this.$parent.sortable({
                    axis: "y",
                    handle: ".js-team-handle",
                    placeholder: "ui-sortable-placeholder ui-corner-all",
                    forcePlaceholderSize: !0
                }).on("sortupdate", function() {
                    W.form.submit();
                });
            },
            template: g()(Z.a, s.a)
        }, {
            sharedInstances: {
                scrollNav: null,
                form: null
            },
            serialize: function() {
                var e = [];
                return s()(".js-team-container").each(function() {
                    e.push(s()(this).data("id"));
                }), e.length > 0 ? e : "";
            }
        }), ee = function(e) {
            var t = e.find(".js-slug-check").val(), n = x.a.init(e);
            return n.commit = function(e) {
                e.data.social_references = V.serialize(), e.data.references = j.serialize(), e.data.sections = v.serialize(), 
                e.data.teams = Q.serialize(), null == e.data.invite_only && (e.data.invite_only = 0), 
                "" === e.data.state && delete e.data.state;
                var n = Object(w.default)(e);
                return A.add(n), n.then(function(e) {
                    e.team && e.team.url && e.team.slug && e.team.slug !== t && c.default.setLocation(e.team.url + "/editor");
                }, function(e) {
                    if (e.status && e.readyState && (e = S.default.error(e, !1)), e.messages && e.messages.length > 0 && A.displayMessage(e.messages[0].message), 
                    e.errors) throw A.displayMessage(u.default.translate("editor_form_errors", "Please fix the errors below."), !0), 
                    e;
                });
            }, n.on("error", function(e) {
                e.country || e.stateSelect || e.provinceSelect || e.city || e.last_name ? s()(document.body).stop(!0).delay(2e3).animate({
                    scrollTop: 0
                }, 500) : s()(document.body).stop(!0);
            }), e.on("change", ":input:not(.js-input-ignore)", function() {
                n.submit();
            }), s()(".js-back-to-profile").on("click", function(e) {
                var t = this;
                A.hasPending() && (A.on("done", function() {
                    document.location = t.href;
                }), e.preventDefault());
            }), n;
        }, te = n(341), ne = n(659), ie = n.n(ne), se = function(e) {
            e.on("click", function(e) {
                e.preventDefault(), Object(G.a)(Object(X.a)({
                    title: u.default.translate("team_delete_title", "Delete Team Profile?"),
                    html: ie()(),
                    buttons: [ {
                        label: u.default.translate("team_delete_label", "Remove"),
                        classes: [ "js-confirm" ]
                    }, {
                        label: u.default.translate("team_cancel_label", "Cancel"),
                        classes: [ "rf-button--inline", "js-cancel" ]
                    } ],
                    classes: [ "team-profile-delete" ]
                }), {
                    waitingText: u.default.translate("profile_team_remove_profile_removing", "Removing..."),
                    promiseGenerator: function() {
                        return Object(w.default)({
                            url: "/v2/teams/" + r.default.profile.id,
                            type: "DELETE"
                        }).then(function(e) {
                            c.default.setLocation(e.redirect_url);
                        });
                    }
                });
            });
        }, oe = n(286), re = s()(".js-form-editor"), ae = {
            scrollNav: o.a.init(),
            form: ee(re)
        };
        y.init(ae.scrollNav), te.a.init(re, ae.form), V.sharedInstances = ae, j.sharedInstances = ae, 
        Q.sharedInstances = ae, oe.a.init(s()(".js-soc-ref-sortable"), V), oe.a.init(s()(".js-web-ref-sortable"), j), 
        oe.a.init(s()(".js-team-sortable"), Q), se(s()(".js-delete-team"));
    },
    9: function(e, t, n) {
        e.exports = n(1)(19);
    },
    90: function(e, t, n) {
        var i, s, o;
        s = [ n(0), n(46), n(22), n(57) ], void 0 === (o = "function" == typeof (i = function(e) {
            return e.widget("ui.menu", {
                version: "1.11.4",
                defaultElement: "<ul>",
                delay: 300,
                options: {
                    icons: {
                        submenu: "ui-icon-carat-1-e"
                    },
                    items: "> *",
                    menus: "ul",
                    position: {
                        my: "left-1 top",
                        at: "right top"
                    },
                    role: "menu",
                    blur: null,
                    focus: null,
                    select: null
                },
                _create: function() {
                    this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                        role: this.options.role,
                        tabIndex: 0
                    }), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), 
                    this._on({
                        "mousedown .ui-menu-item": function(e) {
                            e.preventDefault();
                        },
                        "click .ui-menu-item": function(t) {
                            var n = e(t.target);
                            !this.mouseHandled && n.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), 
                            n.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && e(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [ !0 ]), 
                            this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)));
                        },
                        "mouseenter .ui-menu-item": function(t) {
                            if (!this.previousFilter) {
                                var n = e(t.currentTarget);
                                n.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(t, n);
                            }
                        },
                        mouseleave: "collapseAll",
                        "mouseleave .ui-menu": "collapseAll",
                        focus: function(e, t) {
                            var n = this.active || this.element.find(this.options.items).eq(0);
                            t || this.focus(e, n);
                        },
                        blur: function(t) {
                            this._delay(function() {
                                e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t);
                            });
                        },
                        keydown: "_keydown"
                    }), this.refresh(), this._on(this.document, {
                        click: function(e) {
                            this._closeOnDocumentClick(e) && this.collapseAll(e), this.mouseHandled = !1;
                        }
                    });
                },
                _destroy: function() {
                    this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), 
                    this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                        var t = e(this);
                        t.data("ui-menu-submenu-carat") && t.remove();
                    }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content");
                },
                _keydown: function(t) {
                    var n, i, s, o, r = !0;
                    switch (t.keyCode) {
                      case e.ui.keyCode.PAGE_UP:
                        this.previousPage(t);
                        break;

                      case e.ui.keyCode.PAGE_DOWN:
                        this.nextPage(t);
                        break;

                      case e.ui.keyCode.HOME:
                        this._move("first", "first", t);
                        break;

                      case e.ui.keyCode.END:
                        this._move("last", "last", t);
                        break;

                      case e.ui.keyCode.UP:
                        this.previous(t);
                        break;

                      case e.ui.keyCode.DOWN:
                        this.next(t);
                        break;

                      case e.ui.keyCode.LEFT:
                        this.collapse(t);
                        break;

                      case e.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                        break;

                      case e.ui.keyCode.ENTER:
                      case e.ui.keyCode.SPACE:
                        this._activate(t);
                        break;

                      case e.ui.keyCode.ESCAPE:
                        this.collapse(t);
                        break;

                      default:
                        r = !1, i = this.previousFilter || "", s = String.fromCharCode(t.keyCode), o = !1, 
                        clearTimeout(this.filterTimer), s === i ? o = !0 : s = i + s, n = this._filterMenuItems(s), 
                        (n = o && -1 !== n.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : n).length || (s = String.fromCharCode(t.keyCode), 
                        n = this._filterMenuItems(s)), n.length ? (this.focus(t, n), this.previousFilter = s, 
                        this.filterTimer = this._delay(function() {
                            delete this.previousFilter;
                        }, 1e3)) : delete this.previousFilter;
                    }
                    r && t.preventDefault();
                },
                _activate: function(e) {
                    this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(e) : this.select(e));
                },
                refresh: function() {
                    var t, n, i = this, s = this.options.icons.submenu, o = this.element.find(this.options.menus);
                    this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), 
                    o.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                        role: this.options.role,
                        "aria-hidden": "true",
                        "aria-expanded": "false"
                    }).each(function() {
                        var t = e(this), n = t.parent(), i = e("<span>").addClass("ui-menu-icon ui-icon " + s).data("ui-menu-submenu-carat", !0);
                        n.attr("aria-haspopup", "true").prepend(i), t.attr("aria-labelledby", n.attr("id"));
                    }), t = o.add(this.element), (n = t.find(this.options.items)).not(".ui-menu-item").each(function() {
                        var t = e(this);
                        i._isDivider(t) && t.addClass("ui-widget-content ui-menu-divider");
                    }), n.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                        tabIndex: -1,
                        role: this._itemRole()
                    }), n.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur();
                },
                _itemRole: function() {
                    return {
                        menu: "menuitem",
                        listbox: "option"
                    }[this.options.role];
                },
                _setOption: function(e, t) {
                    "icons" === e && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu), 
                    "disabled" === e && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), 
                    this._super(e, t);
                },
                focus: function(e, t) {
                    var n, i;
                    this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), 
                    i = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", i.attr("id")), 
                    this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay(function() {
                        this._close();
                    }, this.delay), (n = t.children(".ui-menu")).length && e && /^mouse/.test(e.type) && this._startOpening(n), 
                    this.activeMenu = t.parent(), this._trigger("focus", e, {
                        item: t
                    });
                },
                _scrollIntoView: function(t) {
                    var n, i, s, o, r, a;
                    this._hasScroll() && (n = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, 
                    i = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, s = t.offset().top - this.activeMenu.offset().top - n - i, 
                    o = this.activeMenu.scrollTop(), r = this.activeMenu.height(), a = t.outerHeight(), 
                    s < 0 ? this.activeMenu.scrollTop(o + s) : s + a > r && this.activeMenu.scrollTop(o + s - r + a));
                },
                blur: function(e, t) {
                    t || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), 
                    this.active = null, this._trigger("blur", e, {
                        item: this.active
                    }));
                },
                _startOpening: function(e) {
                    clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function() {
                        this._close(), this._open(e);
                    }, this.delay));
                },
                _open: function(t) {
                    var n = e.extend({
                        of: this.active
                    }, this.options.position);
                    clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), 
                    t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(n);
                },
                collapseAll: function(t, n) {
                    clearTimeout(this.timer), this.timer = this._delay(function() {
                        var i = n ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
                        i.length || (i = this.element), this._close(i), this.blur(t), this.activeMenu = i;
                    }, this.delay);
                },
                _close: function(e) {
                    e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active");
                },
                _closeOnDocumentClick: function(t) {
                    return !e(t.target).closest(".ui-menu").length;
                },
                _isDivider: function(e) {
                    return !/[^\-\u2014\u2013\s]/.test(e.text());
                },
                collapse: function(e) {
                    var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                    t && t.length && (this._close(), this.focus(e, t));
                },
                expand: function(e) {
                    var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                    t && t.length && (this._open(t.parent()), this._delay(function() {
                        this.focus(e, t);
                    }));
                },
                next: function(e) {
                    this._move("next", "first", e);
                },
                previous: function(e) {
                    this._move("prev", "last", e);
                },
                isFirstItem: function() {
                    return this.active && !this.active.prevAll(".ui-menu-item").length;
                },
                isLastItem: function() {
                    return this.active && !this.active.nextAll(".ui-menu-item").length;
                },
                _move: function(e, t, n) {
                    var i;
                    this.active && (i = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)), 
                    i && i.length && this.active || (i = this.activeMenu.find(this.options.items)[t]()), 
                    this.focus(n, i);
                },
                nextPage: function(t) {
                    var n, i, s;
                    this.active ? this.isLastItem() || (this._hasScroll() ? (i = this.active.offset().top, 
                    s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                        return (n = e(this)).offset().top - i - s < 0;
                    }), this.focus(t, n)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())) : this.next(t);
                },
                previousPage: function(t) {
                    var n, i, s;
                    this.active ? this.isFirstItem() || (this._hasScroll() ? (i = this.active.offset().top, 
                    s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                        return (n = e(this)).offset().top - i + s > 0;
                    }), this.focus(t, n)) : this.focus(t, this.activeMenu.find(this.options.items).first())) : this.next(t);
                },
                _hasScroll: function() {
                    return this.element.outerHeight() < this.element.prop("scrollHeight");
                },
                select: function(t) {
                    this.active = this.active || e(t.target).closest(".ui-menu-item");
                    var n = {
                        item: this.active
                    };
                    this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, n);
                },
                _filterMenuItems: function(t) {
                    var n = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), i = new RegExp("^" + n, "i");
                    return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                        return i.test(e.trim(e(this).text()));
                    });
                }
            });
        }) ? i.apply(t, s) : i) || (e.exports = o);
    },
    91: function(e, t, n) {
        "use strict";
        var i = n(0), s = n.n(i), o = n(83), r = n.n(o), a = Array.prototype.push, l = function() {
            return Array.prototype.concat.apply([], arguments);
        }, u = r.a.extend({
            _blacklist: "",
            options: {
                maxLocal: 1 / 0,
                caseInsensitive: !1,
                minLength: 1
            },
            init: function(e) {
                this._remotes = [], this._local = [], this.setOptions(e), this.source = s.a.extend(this.source.bind(this), {
                    addRemote: function() {
                        return a.apply(this._remotes, arguments), this.source;
                    }.bind(this),
                    addLocal: function() {
                        return a.apply(this._local, arguments), this.source;
                    }.bind(this)
                });
            },
            setOptions: function(e) {
                s.a.extend(this.options, e);
            },
            callRemote: function(e) {
                return s.a.isFunction(e) ? e(this) : e;
            },
            callLocal: function(e) {
                return s.a.isFunction(e) ? e(this) : e;
            },
            filter: function(e, t) {
                var n, i;
                this._filterMemo = this._filterMemo || {};
                var s = [], o = this.options.maxLocal || 1 / 0, r = t.term;
                if (this.options.caseInsensitive && (r = r.toLocaleLowerCase()), this._filterMemo[r]) return this._filterMemo[r];
                for (n = 0; n < e.length && s.length < o; ++n) i = e[n].value, this.options.caseInsensitive && (i = i.toLocaleLowerCase()), 
                i.indexOf(r) >= 0 && s.push(e[n]);
                return this._filterMemo[r] = s;
            },
            source: function(e, t) {
                if (!(e.term.length < this.options.minLength)) {
                    var n = this._local.length ? this.filter(l.apply(null, this._local.map(this.callLocal, e)), e) : [];
                    this._remotes.length ? (n.length && t(n), s.a.when.apply(s.a, this._remotes.map(this.callRemote, e)).then(l).then(function(e, t) {
                        return this.filter([], e).concat(t);
                    }.bind(this, e)).then(t)) : t(n);
                }
            },
            setBlacklist: function(e) {
                this._blacklist = e;
            }
        });
        function c(e) {
            return new u(e).source;
        }
        c.constructor = u, c.init = function(e) {
            return new u(e);
        }, t.a = c;
    },
    92: function(e, t, n) {
        var i, s, o;
        s = [ n(0), n(46), n(22), n(57), n(90) ], void 0 === (o = "function" == typeof (i = function(e) {
            return e.widget("ui.autocomplete", {
                version: "1.11.4",
                defaultElement: "<input>",
                options: {
                    appendTo: null,
                    autoFocus: !1,
                    delay: 300,
                    minLength: 1,
                    position: {
                        my: "left top",
                        at: "left bottom",
                        collision: "none"
                    },
                    source: null,
                    change: null,
                    close: null,
                    focus: null,
                    open: null,
                    response: null,
                    search: null,
                    select: null
                },
                requestIndex: 0,
                pending: 0,
                _create: function() {
                    var t, n, i, s = this.element[0].nodeName.toLowerCase(), o = "textarea" === s, r = "input" === s;
                    this.isMultiLine = !!o || !r && this.element.prop("isContentEditable"), this.valueMethod = this.element[o || r ? "val" : "text"], 
                    this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), 
                    this._on(this.element, {
                        keydown: function(s) {
                            if (this.element.prop("readOnly")) return t = !0, i = !0, void (n = !0);
                            t = !1, i = !1, n = !1;
                            var o = e.ui.keyCode;
                            switch (s.keyCode) {
                              case o.PAGE_UP:
                                t = !0, this._move("previousPage", s);
                                break;

                              case o.PAGE_DOWN:
                                t = !0, this._move("nextPage", s);
                                break;

                              case o.UP:
                                t = !0, this._keyEvent("previous", s);
                                break;

                              case o.DOWN:
                                t = !0, this._keyEvent("next", s);
                                break;

                              case o.ENTER:
                                this.menu.active && (t = !0, s.preventDefault(), this.menu.select(s));
                                break;

                              case o.TAB:
                                this.menu.active && this.menu.select(s);
                                break;

                              case o.ESCAPE:
                                this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), 
                                this.close(s), s.preventDefault());
                                break;

                              default:
                                n = !0, this._searchTimeout(s);
                            }
                        },
                        keypress: function(i) {
                            if (t) return t = !1, void (this.isMultiLine && !this.menu.element.is(":visible") || i.preventDefault());
                            if (!n) {
                                var s = e.ui.keyCode;
                                switch (i.keyCode) {
                                  case s.PAGE_UP:
                                    this._move("previousPage", i);
                                    break;

                                  case s.PAGE_DOWN:
                                    this._move("nextPage", i);
                                    break;

                                  case s.UP:
                                    this._keyEvent("previous", i);
                                    break;

                                  case s.DOWN:
                                    this._keyEvent("next", i);
                                }
                            }
                        },
                        input: function(e) {
                            if (i) return i = !1, void e.preventDefault();
                            this._searchTimeout(e);
                        },
                        focus: function() {
                            this.selectedItem = null, this.previous = this._value();
                        },
                        blur: function(e) {
                            this.cancelBlur ? delete this.cancelBlur : (clearTimeout(this.searching), this.close(e), 
                            this._change(e));
                        }
                    }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                        role: null
                    }).hide().menu("instance"), this._on(this.menu.element, {
                        mousedown: function(t) {
                            t.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                                delete this.cancelBlur;
                            });
                            var n = this.menu.element[0];
                            e(t.target).closest(".ui-menu-item").length || this._delay(function() {
                                var t = this;
                                this.document.one("mousedown", function(i) {
                                    i.target === t.element[0] || i.target === n || e.contains(n, i.target) || t.close();
                                });
                            });
                        },
                        menufocus: function(t, n) {
                            var i, s;
                            if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type))) return this.menu.blur(), 
                            void this.document.one("mousemove", function() {
                                e(t.target).trigger(t.originalEvent);
                            });
                            s = n.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, {
                                item: s
                            }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(s.value), 
                            (i = n.item.attr("aria-label") || s.value) && e.trim(i).length && (this.liveRegion.children().hide(), 
                            e("<div>").text(i).appendTo(this.liveRegion));
                        },
                        menuselect: function(e, t) {
                            var n = t.item.data("ui-autocomplete-item"), i = this.previous;
                            this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = i, 
                            this._delay(function() {
                                this.previous = i, this.selectedItem = n;
                            })), !1 !== this._trigger("select", e, {
                                item: n
                            }) && this._value(n.value), this.term = this._value(), this.close(e), this.selectedItem = n;
                        }
                    }), this.liveRegion = e("<span>", {
                        role: "status",
                        "aria-live": "assertive",
                        "aria-relevant": "additions"
                    }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, {
                        beforeunload: function() {
                            this.element.removeAttr("autocomplete");
                        }
                    });
                },
                _destroy: function() {
                    clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), 
                    this.menu.element.remove(), this.liveRegion.remove();
                },
                _setOption: function(e, t) {
                    this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), 
                    "disabled" === e && t && this.xhr && this.xhr.abort();
                },
                _appendTo: function() {
                    var t = this.options.appendTo;
                    return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), 
                    t.length || (t = this.document[0].body), t;
                },
                _initSource: function() {
                    var t, n, i = this;
                    e.isArray(this.options.source) ? (t = this.options.source, this.source = function(n, i) {
                        i(e.ui.autocomplete.filter(t, n.term));
                    }) : "string" == typeof this.options.source ? (n = this.options.source, this.source = function(t, s) {
                        i.xhr && i.xhr.abort(), i.xhr = e.ajax({
                            url: n,
                            data: t,
                            dataType: "json",
                            success: function(e) {
                                s(e);
                            },
                            error: function() {
                                s([]);
                            }
                        });
                    }) : this.source = this.options.source;
                },
                _searchTimeout: function(e) {
                    clearTimeout(this.searching), this.searching = this._delay(function() {
                        var t = this.term === this._value(), n = this.menu.element.is(":visible"), i = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
                        t && (!t || n || i) || (this.selectedItem = null, this.search(null, e));
                    }, this.options.delay);
                },
                search: function(e, t) {
                    return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : !1 !== this._trigger("search", t) ? this._search(e) : void 0;
                },
                _search: function(e) {
                    this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, 
                    this.source({
                        term: e
                    }, this._response());
                },
                _response: function() {
                    var t = ++this.requestIndex;
                    return e.proxy(function(e) {
                        t === this.requestIndex && this.__response(e), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading");
                    }, this);
                },
                __response: function(e) {
                    e && (e = this._normalize(e)), this._trigger("response", null, {
                        content: e
                    }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), 
                    this._trigger("open")) : this._close();
                },
                close: function(e) {
                    this.cancelSearch = !0, this._close(e);
                },
                _close: function(e) {
                    this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), 
                    this.isNewMenu = !0, this._trigger("close", e));
                },
                _change: function(e) {
                    this.previous !== this._value() && this._trigger("change", e, {
                        item: this.selectedItem
                    });
                },
                _normalize: function(t) {
                    return t.length && t[0].label && t[0].value ? t : e.map(t, function(t) {
                        return "string" == typeof t ? {
                            label: t,
                            value: t
                        } : e.extend({}, t, {
                            label: t.label || t.value,
                            value: t.value || t.label
                        });
                    });
                },
                _suggest: function(t) {
                    var n = this.menu.element.empty();
                    this._renderMenu(n, t), this.isNewMenu = !0, this.menu.refresh(), n.show(), this._resizeMenu(), 
                    n.position(e.extend({
                        of: this.element
                    }, this.options.position)), this.options.autoFocus && this.menu.next();
                },
                _resizeMenu: function() {
                    var e = this.menu.element;
                    e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()));
                },
                _renderMenu: function(t, n) {
                    var i = this;
                    e.each(n, function(e, n) {
                        i._renderItemData(t, n);
                    });
                },
                _renderItemData: function(e, t) {
                    return this._renderItem(e, t).data("ui-autocomplete-item", t);
                },
                _renderItem: function(t, n) {
                    return e("<li>").text(n.label).appendTo(t);
                },
                _move: function(e, t) {
                    if (this.menu.element.is(":visible")) return this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this.isMultiLine || this._value(this.term), 
                    void this.menu.blur()) : void this.menu[e](t);
                    this.search(null, t);
                },
                widget: function() {
                    return this.menu.element;
                },
                _value: function() {
                    return this.valueMethod.apply(this.element, arguments);
                },
                _keyEvent: function(e, t) {
                    this.isMultiLine && !this.menu.element.is(":visible") || (this._move(e, t), t.preventDefault());
                }
            }), e.extend(e.ui.autocomplete, {
                escapeRegex: function(e) {
                    return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
                },
                filter: function(t, n) {
                    var i = new RegExp(e.ui.autocomplete.escapeRegex(n), "i");
                    return e.grep(t, function(e) {
                        return i.test(e.label || e.value || e);
                    });
                }
            }), e.widget("ui.autocomplete", e.ui.autocomplete, {
                options: {
                    messages: {
                        noResults: "No search results.",
                        results: function(e) {
                            return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
                        }
                    }
                },
                __response: function(t) {
                    var n;
                    this._superApply(arguments), this.options.disabled || this.cancelSearch || (n = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, 
                    this.liveRegion.children().hide(), e("<div>").text(n).appendTo(this.liveRegion));
                }
            }), e.ui.autocomplete;
        }) ? i.apply(t, s) : i) || (e.exports = o);
    },
    943: function(e, t, n) {
        var i = n(2), s = {
            "form/text": n(118).template,
            "form/textarea": n(96).template
        }, o = new i.Template({
            code: function(e, t, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<div class="js-custom-section soc-custom-section">'), 
                i.b("\n" + n), i.s(i.f("data", e, t, 1), e, t, 0, 62, 189, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.s(n.f("areaName", e, t, 1), e, t, 0, 80, 108, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(n.rp("<form/text0", e, t, "      "));
                    }), e.pop()), n.s(n.f("areaValue", e, t, 1), e, t, 0, 140, 172, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(n.rp("<form/textarea1", e, t, "      "));
                    }), e.pop());
                }), e.pop()), i.b("</div>"), i.b("\n"), i.fl();
            },
            partials: {
                "<form/text0": {
                    name: "form/text",
                    partials: {},
                    subs: {}
                },
                "<form/textarea1": {
                    name: "form/textarea",
                    partials: {},
                    subs: {}
                }
            },
            subs: {}
        }, '<div class="js-custom-section soc-custom-section">\n  {{#data}}\n    {{#areaName}}\n      {{> form/text }}\n    {{/areaName}}\n    {{#areaValue}}\n      {{> form/textarea }}\n    {{/areaValue}}\n  {{/data}}\n</div>\n', i);
        o.ri = function(e, t, n) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (o = s, r = t, Object.keys(r).reduce(function(e, t) {
                return e[t] = r[t], e;
            }, o)), n);
            var o, r;
        }, e.exports = o.render.bind(o), e.exports.template = o;
    },
    944: function(e, t, n) {
        var i = n(2), s = {}, o = new i.Template({
            code: function(e, t, n) {
                var i = this;
                return i.b(n = n || ""), i.s(i.f("hidden", e, t, 1), e, t, 1, 0, 0, "") || (i.b('<div class="form-block" id="'), 
                i.sub("sectionId", e, t, n), i.b('-wrap">'), i.b("\n" + n), i.b('  <span id="'), 
                i.sub("sectionId", e, t, n), i.b('" class="anchor js-named-anchor"></span>'), i.b("\n" + n), 
                i.b('  <h3 class="form-block-title">'), i.sub("title", e, t, n), i.b("</h3>"), i.b("\n" + n), 
                i.sub("content", e, t, n), i.b("</div>"), i.b("\n" + n)), i.fl();
            },
            partials: {},
            subs: {
                sectionId: function(e, t, n, i) {
                    n.b(n.v(n.f("sectionId", e, t, 0)));
                },
                title: function(e, t, n, i) {
                    n.b(n.v(n.f("title", e, t, 0)));
                },
                content: function(e, t, n, i) {}
            }
        }, '{{^hidden}}\n<div class="form-block" id="{{$sectionId}}{{sectionId}}{{/sectionId}}-wrap">\n  <span id="{{$sectionId}}{{sectionId}}{{/sectionId}}" class="anchor js-named-anchor"></span>\n  <h3 class="form-block-title">{{$title}}{{title}}{{/title}}</h3>\n  {{$content}}{{/content}}\n</div>\n{{/hidden}}', i);
        o.ri = function(e, t, n) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (o = s, r = t, Object.keys(r).reduce(function(e, t) {
                return e[t] = r[t], e;
            }, o)), n);
            var o, r;
        }, e.exports = o.render.bind(o), e.exports.template = o;
    },
    945: function(e, t, n) {
        n(25), e.exports = n(864);
    },
    96: function(e, t, n) {
        var i = n(2), s = {
            "lib/_savingSpinner": n(67).template
        }, o = new i.Template({
            code: function(e, t, n) {
                var i = this;
                return i.b(n = n || ""), i.b("<div "), i.s(i.f("containerId", e, t, 1), e, t, 0, 21, 41, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b('id="'), n.b(n.v(n.f("containerId", e, t, 0))), n.b('"');
                }), e.pop()), i.b(' class="form-item form-item-textarea'), i.s(i.f("containerClasses", e, t, 1), e, t, 0, 114, 120, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b(" "), n.b(n.v(n.d(".", e, t, 0)));
                }), e.pop()), i.b('">'), i.b("\n" + n), i.b("  "), i.s(i.f("label", e, t, 1), e, t, 0, 156, 306, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b('<label class="'), n.s(n.f("labelClasses", e, t, 1), e, t, 0, 187, 193, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(" "), n.b(n.v(n.d(".", e, t, 0)));
                    }), e.pop()), n.b('" for="'), n.b(n.v(n.f("id", e, t, 0))), n.b('">'), n.b(n.t(n.f("label", e, t, 0))), 
                    n.s(n.f("saving_spinner", e, t, 1), e, t, 0, 255, 279, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(n.rp("<lib/_savingSpinner0", e, t, ""));
                    }), e.pop()), n.b("</label>");
                }), e.pop()), i.b("\n" + n), i.b('  <textarea id="'), i.b(i.v(i.f("id", e, t, 0))), 
                i.b('" name="'), i.b(i.v(i.f("name", e, t, 0))), i.s(i.f("name", e, t, 1), e, t, 1, 0, 0, "") || i.b(i.v(i.f("id", e, t, 0))), 
                i.b('" class="form-textarea'), i.s(i.f("classes", e, t, 1), e, t, 0, 413, 419, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b(" "), n.b(n.v(n.d(".", e, t, 0)));
                }), e.pop()), i.b('"'), i.b("\n" + n), i.b("    "), i.s(i.f("maxlength", e, t, 1), e, t, 0, 451, 477, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b(' maxlength="'), n.b(n.v(n.f("maxlength", e, t, 0))), n.b('"');
                }), e.pop()), i.b("\n" + n), i.b("    "), i.s(i.f("placeholder", e, t, 1), e, t, 0, 512, 542, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b(' placeholder="'), n.b(n.v(n.f("placeholder", e, t, 0))), n.b('"');
                }), e.pop()), i.b("\n" + n), i.b("    "), i.s(i.f("autocomplete", e, t, 1), e, t, 0, 580, 612, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b(' autocomplete="'), n.b(n.v(n.f("autocomplete", e, t, 0))), n.b('"');
                }), e.pop()), i.b("\n" + n), i.b("    "), i.b(i.v(i.f("attrs", e, t, 0))), i.b("\n" + n), 
                i.b('    data-validate="'), i.b(i.v(i.f("validate", e, t, 0))), i.b('">'), i.s(i.f("value", e, t, 1), e, t, 0, 687, 696, "{{ }}") && (i.rs(e, t, function(e, t, n) {
                    n.b(n.v(n.f("value", e, t, 0)));
                }), e.pop()), i.b("</textarea>"), i.b("\n" + n), i.b("</div>"), i.b("\n"), i.fl();
            },
            partials: {
                "<lib/_savingSpinner0": {
                    name: "lib/_savingSpinner",
                    partials: {},
                    subs: {}
                }
            },
            subs: {}
        }, '<div {{#containerId}}id="{{containerId}}"{{/containerId}} class="form-item form-item-textarea{{#containerClasses}} {{.}}{{/containerClasses}}">\n  {{#label}}<label class="{{#labelClasses}} {{.}}{{/labelClasses}}" for="{{id}}">{{{label}}}{{#saving_spinner}}{{> lib/_savingSpinner}}{{/saving_spinner}}</label>{{/label}}\n  <textarea id="{{id}}" name="{{name}}{{^name}}{{id}}{{/name}}" class="form-textarea{{#classes}} {{.}}{{/classes}}"\n    {{#maxlength}} maxlength="{{maxlength}}"{{/maxlength}}\n    {{#placeholder}} placeholder="{{placeholder}}"{{/placeholder}}\n    {{#autocomplete}} autocomplete="{{autocomplete}}"{{/autocomplete}}\n    {{attrs}}\n    data-validate="{{validate}}">{{#value}}{{value}}{{/value}}</textarea>\n</div>\n', i);
        o.ri = function(e, t, n) {
            return i.helpers && e.unshift(i.helpers), this.r(e, (o = s, r = t, Object.keys(r).reduce(function(e, t) {
                return e[t] = r[t], e;
            }, o)), n);
            var o, r;
        }, e.exports = o.render.bind(o), e.exports.template = o;
    }
});