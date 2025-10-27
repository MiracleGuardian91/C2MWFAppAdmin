/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, true) : function(e2) {
    if (!e2.document) throw new Error("jQuery requires a window with a document");
    return t(e2);
  } : t(e);
}("undefined" != typeof window ? window : this, function(ie, e) {
  "use strict";
  var oe = [], r = Object.getPrototypeOf, ae = oe.slice, g = oe.flat ? function(e2) {
    return oe.flat.call(e2);
  } : function(e2) {
    return oe.concat.apply([], e2);
  }, s = oe.push, se = oe.indexOf, n = {}, i = n.toString, ue = n.hasOwnProperty, o = ue.toString, a = o.call(Object), le = {}, v = function(e2) {
    return "function" == typeof e2 && "number" != typeof e2.nodeType && "function" != typeof e2.item;
  }, y = function(e2) {
    return null != e2 && e2 === e2.window;
  }, C = ie.document, u = { type: true, src: true, nonce: true, noModule: true };
  function m(e2, t2, n2) {
    var r2, i2, o2 = (n2 = n2 || C).createElement("script");
    if (o2.text = e2, t2) for (r2 in u) (i2 = t2[r2] || t2.getAttribute && t2.getAttribute(r2)) && o2.setAttribute(r2, i2);
    n2.head.appendChild(o2).parentNode.removeChild(o2);
  }
  function x(e2) {
    return null == e2 ? e2 + "" : "object" == typeof e2 || "function" == typeof e2 ? n[i.call(e2)] || "object" : typeof e2;
  }
  var t = "3.7.1", l = /HTML$/i, ce = function(e2, t2) {
    return new ce.fn.init(e2, t2);
  };
  function c(e2) {
    var t2 = !!e2 && "length" in e2 && e2.length, n2 = x(e2);
    return !v(e2) && !y(e2) && ("array" === n2 || 0 === t2 || "number" == typeof t2 && 0 < t2 && t2 - 1 in e2);
  }
  function fe(e2, t2) {
    return e2.nodeName && e2.nodeName.toLowerCase() === t2.toLowerCase();
  }
  ce.fn = ce.prototype = { jquery: t, constructor: ce, length: 0, toArray: function() {
    return ae.call(this);
  }, get: function(e2) {
    return null == e2 ? ae.call(this) : e2 < 0 ? this[e2 + this.length] : this[e2];
  }, pushStack: function(e2) {
    var t2 = ce.merge(this.constructor(), e2);
    return t2.prevObject = this, t2;
  }, each: function(e2) {
    return ce.each(this, e2);
  }, map: function(n2) {
    return this.pushStack(ce.map(this, function(e2, t2) {
      return n2.call(e2, t2, e2);
    }));
  }, slice: function() {
    return this.pushStack(ae.apply(this, arguments));
  }, first: function() {
    return this.eq(0);
  }, last: function() {
    return this.eq(-1);
  }, even: function() {
    return this.pushStack(ce.grep(this, function(e2, t2) {
      return (t2 + 1) % 2;
    }));
  }, odd: function() {
    return this.pushStack(ce.grep(this, function(e2, t2) {
      return t2 % 2;
    }));
  }, eq: function(e2) {
    var t2 = this.length, n2 = +e2 + (e2 < 0 ? t2 : 0);
    return this.pushStack(0 <= n2 && n2 < t2 ? [this[n2]] : []);
  }, end: function() {
    return this.prevObject || this.constructor();
  }, push: s, sort: oe.sort, splice: oe.splice }, ce.extend = ce.fn.extend = function() {
    var e2, t2, n2, r2, i2, o2, a2 = arguments[0] || {}, s2 = 1, u2 = arguments.length, l2 = false;
    for ("boolean" == typeof a2 && (l2 = a2, a2 = arguments[s2] || {}, s2++), "object" == typeof a2 || v(a2) || (a2 = {}), s2 === u2 && (a2 = this, s2--); s2 < u2; s2++) if (null != (e2 = arguments[s2])) for (t2 in e2) r2 = e2[t2], "__proto__" !== t2 && a2 !== r2 && (l2 && r2 && (ce.isPlainObject(r2) || (i2 = Array.isArray(r2))) ? (n2 = a2[t2], o2 = i2 && !Array.isArray(n2) ? [] : i2 || ce.isPlainObject(n2) ? n2 : {}, i2 = false, a2[t2] = ce.extend(l2, o2, r2)) : void 0 !== r2 && (a2[t2] = r2));
    return a2;
  }, ce.extend({ expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""), isReady: true, error: function(e2) {
    throw new Error(e2);
  }, noop: function() {
  }, isPlainObject: function(e2) {
    var t2, n2;
    return !(!e2 || "[object Object]" !== i.call(e2)) && (!(t2 = r(e2)) || "function" == typeof (n2 = ue.call(t2, "constructor") && t2.constructor) && o.call(n2) === a);
  }, isEmptyObject: function(e2) {
    var t2;
    for (t2 in e2) return false;
    return true;
  }, globalEval: function(e2, t2, n2) {
    m(e2, { nonce: t2 && t2.nonce }, n2);
  }, each: function(e2, t2) {
    var n2, r2 = 0;
    if (c(e2)) {
      for (n2 = e2.length; r2 < n2; r2++) if (false === t2.call(e2[r2], r2, e2[r2])) break;
    } else for (r2 in e2) if (false === t2.call(e2[r2], r2, e2[r2])) break;
    return e2;
  }, text: function(e2) {
    var t2, n2 = "", r2 = 0, i2 = e2.nodeType;
    if (!i2) while (t2 = e2[r2++]) n2 += ce.text(t2);
    return 1 === i2 || 11 === i2 ? e2.textContent : 9 === i2 ? e2.documentElement.textContent : 3 === i2 || 4 === i2 ? e2.nodeValue : n2;
  }, makeArray: function(e2, t2) {
    var n2 = t2 || [];
    return null != e2 && (c(Object(e2)) ? ce.merge(n2, "string" == typeof e2 ? [e2] : e2) : s.call(n2, e2)), n2;
  }, inArray: function(e2, t2, n2) {
    return null == t2 ? -1 : se.call(t2, e2, n2);
  }, isXMLDoc: function(e2) {
    var t2 = e2 && e2.namespaceURI, n2 = e2 && (e2.ownerDocument || e2).documentElement;
    return !l.test(t2 || n2 && n2.nodeName || "HTML");
  }, merge: function(e2, t2) {
    for (var n2 = +t2.length, r2 = 0, i2 = e2.length; r2 < n2; r2++) e2[i2++] = t2[r2];
    return e2.length = i2, e2;
  }, grep: function(e2, t2, n2) {
    for (var r2 = [], i2 = 0, o2 = e2.length, a2 = !n2; i2 < o2; i2++) !t2(e2[i2], i2) !== a2 && r2.push(e2[i2]);
    return r2;
  }, map: function(e2, t2, n2) {
    var r2, i2, o2 = 0, a2 = [];
    if (c(e2)) for (r2 = e2.length; o2 < r2; o2++) null != (i2 = t2(e2[o2], o2, n2)) && a2.push(i2);
    else for (o2 in e2) null != (i2 = t2(e2[o2], o2, n2)) && a2.push(i2);
    return g(a2);
  }, guid: 1, support: le }), "function" == typeof Symbol && (ce.fn[Symbol.iterator] = oe[Symbol.iterator]), ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e2, t2) {
    n["[object " + t2 + "]"] = t2.toLowerCase();
  });
  var pe = oe.pop, de = oe.sort, he = oe.splice, ge = "[\\x20\\t\\r\\n\\f]", ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g");
  ce.contains = function(e2, t2) {
    var n2 = t2 && t2.parentNode;
    return e2 === n2 || !(!n2 || 1 !== n2.nodeType || !(e2.contains ? e2.contains(n2) : e2.compareDocumentPosition && 16 & e2.compareDocumentPosition(n2)));
  };
  var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function p(e2, t2) {
    return t2 ? "\0" === e2 ? "\uFFFD" : e2.slice(0, -1) + "\\" + e2.charCodeAt(e2.length - 1).toString(16) + " " : "\\" + e2;
  }
  ce.escapeSelector = function(e2) {
    return (e2 + "").replace(f, p);
  };
  var ye = C, me = s;
  !function() {
    var e2, b2, w2, o2, a2, T2, r2, C2, d2, i2, k2 = me, S2 = ce.expando, E2 = 0, n2 = 0, s2 = W2(), c2 = W2(), u2 = W2(), h2 = W2(), l2 = function(e3, t3) {
      return e3 === t3 && (a2 = true), 0;
    }, f2 = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", t2 = "(?:\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", p2 = "\\[" + ge + "*(" + t2 + ")(?:" + ge + "*([*^$|!~]?=)" + ge + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + t2 + "))|)" + ge + "*\\]", g2 = ":(" + t2 + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + p2 + ")*)|.*)\\)|)", v2 = new RegExp(ge + "+", "g"), y2 = new RegExp("^" + ge + "*," + ge + "*"), m2 = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"), x2 = new RegExp(ge + "|>"), j2 = new RegExp(g2), A2 = new RegExp("^" + t2 + "$"), D2 = { ID: new RegExp("^#(" + t2 + ")"), CLASS: new RegExp("^\\.(" + t2 + ")"), TAG: new RegExp("^(" + t2 + "|[*])"), ATTR: new RegExp("^" + p2), PSEUDO: new RegExp("^" + g2), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ge + "*(even|odd|(([+-]|)(\\d*)n|)" + ge + "*(?:([+-]|)" + ge + "*(\\d+)|))" + ge + "*\\)|)", "i"), bool: new RegExp("^(?:" + f2 + ")$", "i"), needsContext: new RegExp("^" + ge + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ge + "*((?:-\\d)?\\d*)" + ge + "*\\)|)(?=[^-]|$)", "i") }, N2 = /^(?:input|select|textarea|button)$/i, q2 = /^h\d$/i, L2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, H2 = /[+~]/, O2 = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"), P2 = function(e3, t3) {
      var n3 = "0x" + e3.slice(1) - 65536;
      return t3 || (n3 < 0 ? String.fromCharCode(n3 + 65536) : String.fromCharCode(n3 >> 10 | 55296, 1023 & n3 | 56320));
    }, M2 = function() {
      V2();
    }, R2 = J2(function(e3) {
      return true === e3.disabled && fe(e3, "fieldset");
    }, { dir: "parentNode", next: "legend" });
    try {
      k2.apply(oe = ae.call(ye.childNodes), ye.childNodes), oe[ye.childNodes.length].nodeType;
    } catch (e3) {
      k2 = { apply: function(e4, t3) {
        me.apply(e4, ae.call(t3));
      }, call: function(e4) {
        me.apply(e4, ae.call(arguments, 1));
      } };
    }
    function I2(t3, e3, n3, r3) {
      var i3, o3, a3, s3, u3, l3, c3, f3 = e3 && e3.ownerDocument, p3 = e3 ? e3.nodeType : 9;
      if (n3 = n3 || [], "string" != typeof t3 || !t3 || 1 !== p3 && 9 !== p3 && 11 !== p3) return n3;
      if (!r3 && (V2(e3), e3 = e3 || T2, C2)) {
        if (11 !== p3 && (u3 = L2.exec(t3))) if (i3 = u3[1]) {
          if (9 === p3) {
            if (!(a3 = e3.getElementById(i3))) return n3;
            if (a3.id === i3) return k2.call(n3, a3), n3;
          } else if (f3 && (a3 = f3.getElementById(i3)) && I2.contains(e3, a3) && a3.id === i3) return k2.call(n3, a3), n3;
        } else {
          if (u3[2]) return k2.apply(n3, e3.getElementsByTagName(t3)), n3;
          if ((i3 = u3[3]) && e3.getElementsByClassName) return k2.apply(n3, e3.getElementsByClassName(i3)), n3;
        }
        if (!(h2[t3 + " "] || d2 && d2.test(t3))) {
          if (c3 = t3, f3 = e3, 1 === p3 && (x2.test(t3) || m2.test(t3))) {
            (f3 = H2.test(t3) && U2(e3.parentNode) || e3) == e3 && le.scope || ((s3 = e3.getAttribute("id")) ? s3 = ce.escapeSelector(s3) : e3.setAttribute("id", s3 = S2)), o3 = (l3 = Y2(t3)).length;
            while (o3--) l3[o3] = (s3 ? "#" + s3 : ":scope") + " " + Q2(l3[o3]);
            c3 = l3.join(",");
          }
          try {
            return k2.apply(n3, f3.querySelectorAll(c3)), n3;
          } catch (e4) {
            h2(t3, true);
          } finally {
            s3 === S2 && e3.removeAttribute("id");
          }
        }
      }
      return re2(t3.replace(ve, "$1"), e3, n3, r3);
    }
    function W2() {
      var r3 = [];
      return function e3(t3, n3) {
        return r3.push(t3 + " ") > b2.cacheLength && delete e3[r3.shift()], e3[t3 + " "] = n3;
      };
    }
    function F2(e3) {
      return e3[S2] = true, e3;
    }
    function $2(e3) {
      var t3 = T2.createElement("fieldset");
      try {
        return !!e3(t3);
      } catch (e4) {
        return false;
      } finally {
        t3.parentNode && t3.parentNode.removeChild(t3), t3 = null;
      }
    }
    function B2(t3) {
      return function(e3) {
        return fe(e3, "input") && e3.type === t3;
      };
    }
    function _2(t3) {
      return function(e3) {
        return (fe(e3, "input") || fe(e3, "button")) && e3.type === t3;
      };
    }
    function z2(t3) {
      return function(e3) {
        return "form" in e3 ? e3.parentNode && false === e3.disabled ? "label" in e3 ? "label" in e3.parentNode ? e3.parentNode.disabled === t3 : e3.disabled === t3 : e3.isDisabled === t3 || e3.isDisabled !== !t3 && R2(e3) === t3 : e3.disabled === t3 : "label" in e3 && e3.disabled === t3;
      };
    }
    function X2(a3) {
      return F2(function(o3) {
        return o3 = +o3, F2(function(e3, t3) {
          var n3, r3 = a3([], e3.length, o3), i3 = r3.length;
          while (i3--) e3[n3 = r3[i3]] && (e3[n3] = !(t3[n3] = e3[n3]));
        });
      });
    }
    function U2(e3) {
      return e3 && "undefined" != typeof e3.getElementsByTagName && e3;
    }
    function V2(e3) {
      var t3, n3 = e3 ? e3.ownerDocument || e3 : ye;
      return n3 != T2 && 9 === n3.nodeType && n3.documentElement && (r2 = (T2 = n3).documentElement, C2 = !ce.isXMLDoc(T2), i2 = r2.matches || r2.webkitMatchesSelector || r2.msMatchesSelector, r2.msMatchesSelector && ye != T2 && (t3 = T2.defaultView) && t3.top !== t3 && t3.addEventListener("unload", M2), le.getById = $2(function(e4) {
        return r2.appendChild(e4).id = ce.expando, !T2.getElementsByName || !T2.getElementsByName(ce.expando).length;
      }), le.disconnectedMatch = $2(function(e4) {
        return i2.call(e4, "*");
      }), le.scope = $2(function() {
        return T2.querySelectorAll(":scope");
      }), le.cssHas = $2(function() {
        try {
          return T2.querySelector(":has(*,:jqfake)"), false;
        } catch (e4) {
          return true;
        }
      }), le.getById ? (b2.filter.ID = function(e4) {
        var t4 = e4.replace(O2, P2);
        return function(e5) {
          return e5.getAttribute("id") === t4;
        };
      }, b2.find.ID = function(e4, t4) {
        if ("undefined" != typeof t4.getElementById && C2) {
          var n4 = t4.getElementById(e4);
          return n4 ? [n4] : [];
        }
      }) : (b2.filter.ID = function(e4) {
        var n4 = e4.replace(O2, P2);
        return function(e5) {
          var t4 = "undefined" != typeof e5.getAttributeNode && e5.getAttributeNode("id");
          return t4 && t4.value === n4;
        };
      }, b2.find.ID = function(e4, t4) {
        if ("undefined" != typeof t4.getElementById && C2) {
          var n4, r3, i3, o3 = t4.getElementById(e4);
          if (o3) {
            if ((n4 = o3.getAttributeNode("id")) && n4.value === e4) return [o3];
            i3 = t4.getElementsByName(e4), r3 = 0;
            while (o3 = i3[r3++]) if ((n4 = o3.getAttributeNode("id")) && n4.value === e4) return [o3];
          }
          return [];
        }
      }), b2.find.TAG = function(e4, t4) {
        return "undefined" != typeof t4.getElementsByTagName ? t4.getElementsByTagName(e4) : t4.querySelectorAll(e4);
      }, b2.find.CLASS = function(e4, t4) {
        if ("undefined" != typeof t4.getElementsByClassName && C2) return t4.getElementsByClassName(e4);
      }, d2 = [], $2(function(e4) {
        var t4;
        r2.appendChild(e4).innerHTML = "<a id='" + S2 + "' href='' disabled='disabled'></a><select id='" + S2 + "-\r\\' disabled='disabled'><option selected=''></option></select>", e4.querySelectorAll("[selected]").length || d2.push("\\[" + ge + "*(?:value|" + f2 + ")"), e4.querySelectorAll("[id~=" + S2 + "-]").length || d2.push("~="), e4.querySelectorAll("a#" + S2 + "+*").length || d2.push(".#.+[+~]"), e4.querySelectorAll(":checked").length || d2.push(":checked"), (t4 = T2.createElement("input")).setAttribute("type", "hidden"), e4.appendChild(t4).setAttribute("name", "D"), r2.appendChild(e4).disabled = true, 2 !== e4.querySelectorAll(":disabled").length && d2.push(":enabled", ":disabled"), (t4 = T2.createElement("input")).setAttribute("name", ""), e4.appendChild(t4), e4.querySelectorAll("[name='']").length || d2.push("\\[" + ge + "*name" + ge + "*=" + ge + `*(?:''|"")`);
      }), le.cssHas || d2.push(":has"), d2 = d2.length && new RegExp(d2.join("|")), l2 = function(e4, t4) {
        if (e4 === t4) return a2 = true, 0;
        var n4 = !e4.compareDocumentPosition - !t4.compareDocumentPosition;
        return n4 || (1 & (n4 = (e4.ownerDocument || e4) == (t4.ownerDocument || t4) ? e4.compareDocumentPosition(t4) : 1) || !le.sortDetached && t4.compareDocumentPosition(e4) === n4 ? e4 === T2 || e4.ownerDocument == ye && I2.contains(ye, e4) ? -1 : t4 === T2 || t4.ownerDocument == ye && I2.contains(ye, t4) ? 1 : o2 ? se.call(o2, e4) - se.call(o2, t4) : 0 : 4 & n4 ? -1 : 1);
      }), T2;
    }
    for (e2 in I2.matches = function(e3, t3) {
      return I2(e3, null, null, t3);
    }, I2.matchesSelector = function(e3, t3) {
      if (V2(e3), C2 && !h2[t3 + " "] && (!d2 || !d2.test(t3))) try {
        var n3 = i2.call(e3, t3);
        if (n3 || le.disconnectedMatch || e3.document && 11 !== e3.document.nodeType) return n3;
      } catch (e4) {
        h2(t3, true);
      }
      return 0 < I2(t3, T2, null, [e3]).length;
    }, I2.contains = function(e3, t3) {
      return (e3.ownerDocument || e3) != T2 && V2(e3), ce.contains(e3, t3);
    }, I2.attr = function(e3, t3) {
      (e3.ownerDocument || e3) != T2 && V2(e3);
      var n3 = b2.attrHandle[t3.toLowerCase()], r3 = n3 && ue.call(b2.attrHandle, t3.toLowerCase()) ? n3(e3, t3, !C2) : void 0;
      return void 0 !== r3 ? r3 : e3.getAttribute(t3);
    }, I2.error = function(e3) {
      throw new Error("Syntax error, unrecognized expression: " + e3);
    }, ce.uniqueSort = function(e3) {
      var t3, n3 = [], r3 = 0, i3 = 0;
      if (a2 = !le.sortStable, o2 = !le.sortStable && ae.call(e3, 0), de.call(e3, l2), a2) {
        while (t3 = e3[i3++]) t3 === e3[i3] && (r3 = n3.push(i3));
        while (r3--) he.call(e3, n3[r3], 1);
      }
      return o2 = null, e3;
    }, ce.fn.uniqueSort = function() {
      return this.pushStack(ce.uniqueSort(ae.apply(this)));
    }, (b2 = ce.expr = { cacheLength: 50, createPseudo: F2, match: D2, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: true }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: true }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e3) {
      return e3[1] = e3[1].replace(O2, P2), e3[3] = (e3[3] || e3[4] || e3[5] || "").replace(O2, P2), "~=" === e3[2] && (e3[3] = " " + e3[3] + " "), e3.slice(0, 4);
    }, CHILD: function(e3) {
      return e3[1] = e3[1].toLowerCase(), "nth" === e3[1].slice(0, 3) ? (e3[3] || I2.error(e3[0]), e3[4] = +(e3[4] ? e3[5] + (e3[6] || 1) : 2 * ("even" === e3[3] || "odd" === e3[3])), e3[5] = +(e3[7] + e3[8] || "odd" === e3[3])) : e3[3] && I2.error(e3[0]), e3;
    }, PSEUDO: function(e3) {
      var t3, n3 = !e3[6] && e3[2];
      return D2.CHILD.test(e3[0]) ? null : (e3[3] ? e3[2] = e3[4] || e3[5] || "" : n3 && j2.test(n3) && (t3 = Y2(n3, true)) && (t3 = n3.indexOf(")", n3.length - t3) - n3.length) && (e3[0] = e3[0].slice(0, t3), e3[2] = n3.slice(0, t3)), e3.slice(0, 3));
    } }, filter: { TAG: function(e3) {
      var t3 = e3.replace(O2, P2).toLowerCase();
      return "*" === e3 ? function() {
        return true;
      } : function(e4) {
        return fe(e4, t3);
      };
    }, CLASS: function(e3) {
      var t3 = s2[e3 + " "];
      return t3 || (t3 = new RegExp("(^|" + ge + ")" + e3 + "(" + ge + "|$)")) && s2(e3, function(e4) {
        return t3.test("string" == typeof e4.className && e4.className || "undefined" != typeof e4.getAttribute && e4.getAttribute("class") || "");
      });
    }, ATTR: function(n3, r3, i3) {
      return function(e3) {
        var t3 = I2.attr(e3, n3);
        return null == t3 ? "!=" === r3 : !r3 || (t3 += "", "=" === r3 ? t3 === i3 : "!=" === r3 ? t3 !== i3 : "^=" === r3 ? i3 && 0 === t3.indexOf(i3) : "*=" === r3 ? i3 && -1 < t3.indexOf(i3) : "$=" === r3 ? i3 && t3.slice(-i3.length) === i3 : "~=" === r3 ? -1 < (" " + t3.replace(v2, " ") + " ").indexOf(i3) : "|=" === r3 && (t3 === i3 || t3.slice(0, i3.length + 1) === i3 + "-"));
      };
    }, CHILD: function(d3, e3, t3, h3, g3) {
      var v3 = "nth" !== d3.slice(0, 3), y3 = "last" !== d3.slice(-4), m3 = "of-type" === e3;
      return 1 === h3 && 0 === g3 ? function(e4) {
        return !!e4.parentNode;
      } : function(e4, t4, n3) {
        var r3, i3, o3, a3, s3, u3 = v3 !== y3 ? "nextSibling" : "previousSibling", l3 = e4.parentNode, c3 = m3 && e4.nodeName.toLowerCase(), f3 = !n3 && !m3, p3 = false;
        if (l3) {
          if (v3) {
            while (u3) {
              o3 = e4;
              while (o3 = o3[u3]) if (m3 ? fe(o3, c3) : 1 === o3.nodeType) return false;
              s3 = u3 = "only" === d3 && !s3 && "nextSibling";
            }
            return true;
          }
          if (s3 = [y3 ? l3.firstChild : l3.lastChild], y3 && f3) {
            p3 = (a3 = (r3 = (i3 = l3[S2] || (l3[S2] = {}))[d3] || [])[0] === E2 && r3[1]) && r3[2], o3 = a3 && l3.childNodes[a3];
            while (o3 = ++a3 && o3 && o3[u3] || (p3 = a3 = 0) || s3.pop()) if (1 === o3.nodeType && ++p3 && o3 === e4) {
              i3[d3] = [E2, a3, p3];
              break;
            }
          } else if (f3 && (p3 = a3 = (r3 = (i3 = e4[S2] || (e4[S2] = {}))[d3] || [])[0] === E2 && r3[1]), false === p3) {
            while (o3 = ++a3 && o3 && o3[u3] || (p3 = a3 = 0) || s3.pop()) if ((m3 ? fe(o3, c3) : 1 === o3.nodeType) && ++p3 && (f3 && ((i3 = o3[S2] || (o3[S2] = {}))[d3] = [E2, p3]), o3 === e4)) break;
          }
          return (p3 -= g3) === h3 || p3 % h3 == 0 && 0 <= p3 / h3;
        }
      };
    }, PSEUDO: function(e3, o3) {
      var t3, a3 = b2.pseudos[e3] || b2.setFilters[e3.toLowerCase()] || I2.error("unsupported pseudo: " + e3);
      return a3[S2] ? a3(o3) : 1 < a3.length ? (t3 = [e3, e3, "", o3], b2.setFilters.hasOwnProperty(e3.toLowerCase()) ? F2(function(e4, t4) {
        var n3, r3 = a3(e4, o3), i3 = r3.length;
        while (i3--) e4[n3 = se.call(e4, r3[i3])] = !(t4[n3] = r3[i3]);
      }) : function(e4) {
        return a3(e4, 0, t3);
      }) : a3;
    } }, pseudos: { not: F2(function(e3) {
      var r3 = [], i3 = [], s3 = ne2(e3.replace(ve, "$1"));
      return s3[S2] ? F2(function(e4, t3, n3, r4) {
        var i4, o3 = s3(e4, null, r4, []), a3 = e4.length;
        while (a3--) (i4 = o3[a3]) && (e4[a3] = !(t3[a3] = i4));
      }) : function(e4, t3, n3) {
        return r3[0] = e4, s3(r3, null, n3, i3), r3[0] = null, !i3.pop();
      };
    }), has: F2(function(t3) {
      return function(e3) {
        return 0 < I2(t3, e3).length;
      };
    }), contains: F2(function(t3) {
      return t3 = t3.replace(O2, P2), function(e3) {
        return -1 < (e3.textContent || ce.text(e3)).indexOf(t3);
      };
    }), lang: F2(function(n3) {
      return A2.test(n3 || "") || I2.error("unsupported lang: " + n3), n3 = n3.replace(O2, P2).toLowerCase(), function(e3) {
        var t3;
        do {
          if (t3 = C2 ? e3.lang : e3.getAttribute("xml:lang") || e3.getAttribute("lang")) return (t3 = t3.toLowerCase()) === n3 || 0 === t3.indexOf(n3 + "-");
        } while ((e3 = e3.parentNode) && 1 === e3.nodeType);
        return false;
      };
    }), target: function(e3) {
      var t3 = ie.location && ie.location.hash;
      return t3 && t3.slice(1) === e3.id;
    }, root: function(e3) {
      return e3 === r2;
    }, focus: function(e3) {
      return e3 === function() {
        try {
          return T2.activeElement;
        } catch (e4) {
        }
      }() && T2.hasFocus() && !!(e3.type || e3.href || ~e3.tabIndex);
    }, enabled: z2(false), disabled: z2(true), checked: function(e3) {
      return fe(e3, "input") && !!e3.checked || fe(e3, "option") && !!e3.selected;
    }, selected: function(e3) {
      return e3.parentNode && e3.parentNode.selectedIndex, true === e3.selected;
    }, empty: function(e3) {
      for (e3 = e3.firstChild; e3; e3 = e3.nextSibling) if (e3.nodeType < 6) return false;
      return true;
    }, parent: function(e3) {
      return !b2.pseudos.empty(e3);
    }, header: function(e3) {
      return q2.test(e3.nodeName);
    }, input: function(e3) {
      return N2.test(e3.nodeName);
    }, button: function(e3) {
      return fe(e3, "input") && "button" === e3.type || fe(e3, "button");
    }, text: function(e3) {
      var t3;
      return fe(e3, "input") && "text" === e3.type && (null == (t3 = e3.getAttribute("type")) || "text" === t3.toLowerCase());
    }, first: X2(function() {
      return [0];
    }), last: X2(function(e3, t3) {
      return [t3 - 1];
    }), eq: X2(function(e3, t3, n3) {
      return [n3 < 0 ? n3 + t3 : n3];
    }), even: X2(function(e3, t3) {
      for (var n3 = 0; n3 < t3; n3 += 2) e3.push(n3);
      return e3;
    }), odd: X2(function(e3, t3) {
      for (var n3 = 1; n3 < t3; n3 += 2) e3.push(n3);
      return e3;
    }), lt: X2(function(e3, t3, n3) {
      var r3;
      for (r3 = n3 < 0 ? n3 + t3 : t3 < n3 ? t3 : n3; 0 <= --r3; ) e3.push(r3);
      return e3;
    }), gt: X2(function(e3, t3, n3) {
      for (var r3 = n3 < 0 ? n3 + t3 : n3; ++r3 < t3; ) e3.push(r3);
      return e3;
    }) } }).pseudos.nth = b2.pseudos.eq, { radio: true, checkbox: true, file: true, password: true, image: true }) b2.pseudos[e2] = B2(e2);
    for (e2 in { submit: true, reset: true }) b2.pseudos[e2] = _2(e2);
    function G2() {
    }
    function Y2(e3, t3) {
      var n3, r3, i3, o3, a3, s3, u3, l3 = c2[e3 + " "];
      if (l3) return t3 ? 0 : l3.slice(0);
      a3 = e3, s3 = [], u3 = b2.preFilter;
      while (a3) {
        for (o3 in n3 && !(r3 = y2.exec(a3)) || (r3 && (a3 = a3.slice(r3[0].length) || a3), s3.push(i3 = [])), n3 = false, (r3 = m2.exec(a3)) && (n3 = r3.shift(), i3.push({ value: n3, type: r3[0].replace(ve, " ") }), a3 = a3.slice(n3.length)), b2.filter) !(r3 = D2[o3].exec(a3)) || u3[o3] && !(r3 = u3[o3](r3)) || (n3 = r3.shift(), i3.push({ value: n3, type: o3, matches: r3 }), a3 = a3.slice(n3.length));
        if (!n3) break;
      }
      return t3 ? a3.length : a3 ? I2.error(e3) : c2(e3, s3).slice(0);
    }
    function Q2(e3) {
      for (var t3 = 0, n3 = e3.length, r3 = ""; t3 < n3; t3++) r3 += e3[t3].value;
      return r3;
    }
    function J2(a3, e3, t3) {
      var s3 = e3.dir, u3 = e3.next, l3 = u3 || s3, c3 = t3 && "parentNode" === l3, f3 = n2++;
      return e3.first ? function(e4, t4, n3) {
        while (e4 = e4[s3]) if (1 === e4.nodeType || c3) return a3(e4, t4, n3);
        return false;
      } : function(e4, t4, n3) {
        var r3, i3, o3 = [E2, f3];
        if (n3) {
          while (e4 = e4[s3]) if ((1 === e4.nodeType || c3) && a3(e4, t4, n3)) return true;
        } else while (e4 = e4[s3]) if (1 === e4.nodeType || c3) if (i3 = e4[S2] || (e4[S2] = {}), u3 && fe(e4, u3)) e4 = e4[s3] || e4;
        else {
          if ((r3 = i3[l3]) && r3[0] === E2 && r3[1] === f3) return o3[2] = r3[2];
          if ((i3[l3] = o3)[2] = a3(e4, t4, n3)) return true;
        }
        return false;
      };
    }
    function K2(i3) {
      return 1 < i3.length ? function(e3, t3, n3) {
        var r3 = i3.length;
        while (r3--) if (!i3[r3](e3, t3, n3)) return false;
        return true;
      } : i3[0];
    }
    function Z2(e3, t3, n3, r3, i3) {
      for (var o3, a3 = [], s3 = 0, u3 = e3.length, l3 = null != t3; s3 < u3; s3++) (o3 = e3[s3]) && (n3 && !n3(o3, r3, i3) || (a3.push(o3), l3 && t3.push(s3)));
      return a3;
    }
    function ee2(d3, h3, g3, v3, y3, e3) {
      return v3 && !v3[S2] && (v3 = ee2(v3)), y3 && !y3[S2] && (y3 = ee2(y3, e3)), F2(function(e4, t3, n3, r3) {
        var i3, o3, a3, s3, u3 = [], l3 = [], c3 = t3.length, f3 = e4 || function(e5, t4, n4) {
          for (var r4 = 0, i4 = t4.length; r4 < i4; r4++) I2(e5, t4[r4], n4);
          return n4;
        }(h3 || "*", n3.nodeType ? [n3] : n3, []), p3 = !d3 || !e4 && h3 ? f3 : Z2(f3, u3, d3, n3, r3);
        if (g3 ? g3(p3, s3 = y3 || (e4 ? d3 : c3 || v3) ? [] : t3, n3, r3) : s3 = p3, v3) {
          i3 = Z2(s3, l3), v3(i3, [], n3, r3), o3 = i3.length;
          while (o3--) (a3 = i3[o3]) && (s3[l3[o3]] = !(p3[l3[o3]] = a3));
        }
        if (e4) {
          if (y3 || d3) {
            if (y3) {
              i3 = [], o3 = s3.length;
              while (o3--) (a3 = s3[o3]) && i3.push(p3[o3] = a3);
              y3(null, s3 = [], i3, r3);
            }
            o3 = s3.length;
            while (o3--) (a3 = s3[o3]) && -1 < (i3 = y3 ? se.call(e4, a3) : u3[o3]) && (e4[i3] = !(t3[i3] = a3));
          }
        } else s3 = Z2(s3 === t3 ? s3.splice(c3, s3.length) : s3), y3 ? y3(null, t3, s3, r3) : k2.apply(t3, s3);
      });
    }
    function te2(e3) {
      for (var i3, t3, n3, r3 = e3.length, o3 = b2.relative[e3[0].type], a3 = o3 || b2.relative[" "], s3 = o3 ? 1 : 0, u3 = J2(function(e4) {
        return e4 === i3;
      }, a3, true), l3 = J2(function(e4) {
        return -1 < se.call(i3, e4);
      }, a3, true), c3 = [function(e4, t4, n4) {
        var r4 = !o3 && (n4 || t4 != w2) || ((i3 = t4).nodeType ? u3(e4, t4, n4) : l3(e4, t4, n4));
        return i3 = null, r4;
      }]; s3 < r3; s3++) if (t3 = b2.relative[e3[s3].type]) c3 = [J2(K2(c3), t3)];
      else {
        if ((t3 = b2.filter[e3[s3].type].apply(null, e3[s3].matches))[S2]) {
          for (n3 = ++s3; n3 < r3; n3++) if (b2.relative[e3[n3].type]) break;
          return ee2(1 < s3 && K2(c3), 1 < s3 && Q2(e3.slice(0, s3 - 1).concat({ value: " " === e3[s3 - 2].type ? "*" : "" })).replace(ve, "$1"), t3, s3 < n3 && te2(e3.slice(s3, n3)), n3 < r3 && te2(e3 = e3.slice(n3)), n3 < r3 && Q2(e3));
        }
        c3.push(t3);
      }
      return K2(c3);
    }
    function ne2(e3, t3) {
      var n3, v3, y3, m3, x3, r3, i3 = [], o3 = [], a3 = u2[e3 + " "];
      if (!a3) {
        t3 || (t3 = Y2(e3)), n3 = t3.length;
        while (n3--) (a3 = te2(t3[n3]))[S2] ? i3.push(a3) : o3.push(a3);
        (a3 = u2(e3, (v3 = o3, m3 = 0 < (y3 = i3).length, x3 = 0 < v3.length, r3 = function(e4, t4, n4, r4, i4) {
          var o4, a4, s3, u3 = 0, l3 = "0", c3 = e4 && [], f3 = [], p3 = w2, d3 = e4 || x3 && b2.find.TAG("*", i4), h3 = E2 += null == p3 ? 1 : Math.random() || 0.1, g3 = d3.length;
          for (i4 && (w2 = t4 == T2 || t4 || i4); l3 !== g3 && null != (o4 = d3[l3]); l3++) {
            if (x3 && o4) {
              a4 = 0, t4 || o4.ownerDocument == T2 || (V2(o4), n4 = !C2);
              while (s3 = v3[a4++]) if (s3(o4, t4 || T2, n4)) {
                k2.call(r4, o4);
                break;
              }
              i4 && (E2 = h3);
            }
            m3 && ((o4 = !s3 && o4) && u3--, e4 && c3.push(o4));
          }
          if (u3 += l3, m3 && l3 !== u3) {
            a4 = 0;
            while (s3 = y3[a4++]) s3(c3, f3, t4, n4);
            if (e4) {
              if (0 < u3) while (l3--) c3[l3] || f3[l3] || (f3[l3] = pe.call(r4));
              f3 = Z2(f3);
            }
            k2.apply(r4, f3), i4 && !e4 && 0 < f3.length && 1 < u3 + y3.length && ce.uniqueSort(r4);
          }
          return i4 && (E2 = h3, w2 = p3), c3;
        }, m3 ? F2(r3) : r3))).selector = e3;
      }
      return a3;
    }
    function re2(e3, t3, n3, r3) {
      var i3, o3, a3, s3, u3, l3 = "function" == typeof e3 && e3, c3 = !r3 && Y2(e3 = l3.selector || e3);
      if (n3 = n3 || [], 1 === c3.length) {
        if (2 < (o3 = c3[0] = c3[0].slice(0)).length && "ID" === (a3 = o3[0]).type && 9 === t3.nodeType && C2 && b2.relative[o3[1].type]) {
          if (!(t3 = (b2.find.ID(a3.matches[0].replace(O2, P2), t3) || [])[0])) return n3;
          l3 && (t3 = t3.parentNode), e3 = e3.slice(o3.shift().value.length);
        }
        i3 = D2.needsContext.test(e3) ? 0 : o3.length;
        while (i3--) {
          if (a3 = o3[i3], b2.relative[s3 = a3.type]) break;
          if ((u3 = b2.find[s3]) && (r3 = u3(a3.matches[0].replace(O2, P2), H2.test(o3[0].type) && U2(t3.parentNode) || t3))) {
            if (o3.splice(i3, 1), !(e3 = r3.length && Q2(o3))) return k2.apply(n3, r3), n3;
            break;
          }
        }
      }
      return (l3 || ne2(e3, c3))(r3, t3, !C2, n3, !t3 || H2.test(e3) && U2(t3.parentNode) || t3), n3;
    }
    G2.prototype = b2.filters = b2.pseudos, b2.setFilters = new G2(), le.sortStable = S2.split("").sort(l2).join("") === S2, V2(), le.sortDetached = $2(function(e3) {
      return 1 & e3.compareDocumentPosition(T2.createElement("fieldset"));
    }), ce.find = I2, ce.expr[":"] = ce.expr.pseudos, ce.unique = ce.uniqueSort, I2.compile = ne2, I2.select = re2, I2.setDocument = V2, I2.tokenize = Y2, I2.escape = ce.escapeSelector, I2.getText = ce.text, I2.isXML = ce.isXMLDoc, I2.selectors = ce.expr, I2.support = ce.support, I2.uniqueSort = ce.uniqueSort;
  }();
  var d = function(e2, t2, n2) {
    var r2 = [], i2 = void 0 !== n2;
    while ((e2 = e2[t2]) && 9 !== e2.nodeType) if (1 === e2.nodeType) {
      if (i2 && ce(e2).is(n2)) break;
      r2.push(e2);
    }
    return r2;
  }, h = function(e2, t2) {
    for (var n2 = []; e2; e2 = e2.nextSibling) 1 === e2.nodeType && e2 !== t2 && n2.push(e2);
    return n2;
  }, b = ce.expr.match.needsContext, w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function T(e2, n2, r2) {
    return v(n2) ? ce.grep(e2, function(e3, t2) {
      return !!n2.call(e3, t2, e3) !== r2;
    }) : n2.nodeType ? ce.grep(e2, function(e3) {
      return e3 === n2 !== r2;
    }) : "string" != typeof n2 ? ce.grep(e2, function(e3) {
      return -1 < se.call(n2, e3) !== r2;
    }) : ce.filter(n2, e2, r2);
  }
  ce.filter = function(e2, t2, n2) {
    var r2 = t2[0];
    return n2 && (e2 = ":not(" + e2 + ")"), 1 === t2.length && 1 === r2.nodeType ? ce.find.matchesSelector(r2, e2) ? [r2] : [] : ce.find.matches(e2, ce.grep(t2, function(e3) {
      return 1 === e3.nodeType;
    }));
  }, ce.fn.extend({ find: function(e2) {
    var t2, n2, r2 = this.length, i2 = this;
    if ("string" != typeof e2) return this.pushStack(ce(e2).filter(function() {
      for (t2 = 0; t2 < r2; t2++) if (ce.contains(i2[t2], this)) return true;
    }));
    for (n2 = this.pushStack([]), t2 = 0; t2 < r2; t2++) ce.find(e2, i2[t2], n2);
    return 1 < r2 ? ce.uniqueSort(n2) : n2;
  }, filter: function(e2) {
    return this.pushStack(T(this, e2 || [], false));
  }, not: function(e2) {
    return this.pushStack(T(this, e2 || [], true));
  }, is: function(e2) {
    return !!T(this, "string" == typeof e2 && b.test(e2) ? ce(e2) : e2 || [], false).length;
  } });
  var k, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (ce.fn.init = function(e2, t2, n2) {
    var r2, i2;
    if (!e2) return this;
    if (n2 = n2 || k, "string" == typeof e2) {
      if (!(r2 = "<" === e2[0] && ">" === e2[e2.length - 1] && 3 <= e2.length ? [null, e2, null] : S.exec(e2)) || !r2[1] && t2) return !t2 || t2.jquery ? (t2 || n2).find(e2) : this.constructor(t2).find(e2);
      if (r2[1]) {
        if (t2 = t2 instanceof ce ? t2[0] : t2, ce.merge(this, ce.parseHTML(r2[1], t2 && t2.nodeType ? t2.ownerDocument || t2 : C, true)), w.test(r2[1]) && ce.isPlainObject(t2)) for (r2 in t2) v(this[r2]) ? this[r2](t2[r2]) : this.attr(r2, t2[r2]);
        return this;
      }
      return (i2 = C.getElementById(r2[2])) && (this[0] = i2, this.length = 1), this;
    }
    return e2.nodeType ? (this[0] = e2, this.length = 1, this) : v(e2) ? void 0 !== n2.ready ? n2.ready(e2) : e2(ce) : ce.makeArray(e2, this);
  }).prototype = ce.fn, k = ce(C);
  var E = /^(?:parents|prev(?:Until|All))/, j = { children: true, contents: true, next: true, prev: true };
  function A(e2, t2) {
    while ((e2 = e2[t2]) && 1 !== e2.nodeType) ;
    return e2;
  }
  ce.fn.extend({ has: function(e2) {
    var t2 = ce(e2, this), n2 = t2.length;
    return this.filter(function() {
      for (var e3 = 0; e3 < n2; e3++) if (ce.contains(this, t2[e3])) return true;
    });
  }, closest: function(e2, t2) {
    var n2, r2 = 0, i2 = this.length, o2 = [], a2 = "string" != typeof e2 && ce(e2);
    if (!b.test(e2)) {
      for (; r2 < i2; r2++) for (n2 = this[r2]; n2 && n2 !== t2; n2 = n2.parentNode) if (n2.nodeType < 11 && (a2 ? -1 < a2.index(n2) : 1 === n2.nodeType && ce.find.matchesSelector(n2, e2))) {
        o2.push(n2);
        break;
      }
    }
    return this.pushStack(1 < o2.length ? ce.uniqueSort(o2) : o2);
  }, index: function(e2) {
    return e2 ? "string" == typeof e2 ? se.call(ce(e2), this[0]) : se.call(this, e2.jquery ? e2[0] : e2) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
  }, add: function(e2, t2) {
    return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e2, t2))));
  }, addBack: function(e2) {
    return this.add(null == e2 ? this.prevObject : this.prevObject.filter(e2));
  } }), ce.each({ parent: function(e2) {
    var t2 = e2.parentNode;
    return t2 && 11 !== t2.nodeType ? t2 : null;
  }, parents: function(e2) {
    return d(e2, "parentNode");
  }, parentsUntil: function(e2, t2, n2) {
    return d(e2, "parentNode", n2);
  }, next: function(e2) {
    return A(e2, "nextSibling");
  }, prev: function(e2) {
    return A(e2, "previousSibling");
  }, nextAll: function(e2) {
    return d(e2, "nextSibling");
  }, prevAll: function(e2) {
    return d(e2, "previousSibling");
  }, nextUntil: function(e2, t2, n2) {
    return d(e2, "nextSibling", n2);
  }, prevUntil: function(e2, t2, n2) {
    return d(e2, "previousSibling", n2);
  }, siblings: function(e2) {
    return h((e2.parentNode || {}).firstChild, e2);
  }, children: function(e2) {
    return h(e2.firstChild);
  }, contents: function(e2) {
    return null != e2.contentDocument && r(e2.contentDocument) ? e2.contentDocument : (fe(e2, "template") && (e2 = e2.content || e2), ce.merge([], e2.childNodes));
  } }, function(r2, i2) {
    ce.fn[r2] = function(e2, t2) {
      var n2 = ce.map(this, i2, e2);
      return "Until" !== r2.slice(-5) && (t2 = e2), t2 && "string" == typeof t2 && (n2 = ce.filter(t2, n2)), 1 < this.length && (j[r2] || ce.uniqueSort(n2), E.test(r2) && n2.reverse()), this.pushStack(n2);
    };
  });
  var D = /[^\x20\t\r\n\f]+/g;
  function N(e2) {
    return e2;
  }
  function q(e2) {
    throw e2;
  }
  function L(e2, t2, n2, r2) {
    var i2;
    try {
      e2 && v(i2 = e2.promise) ? i2.call(e2).done(t2).fail(n2) : e2 && v(i2 = e2.then) ? i2.call(e2, t2, n2) : t2.apply(void 0, [e2].slice(r2));
    } catch (e3) {
      n2.apply(void 0, [e3]);
    }
  }
  ce.Callbacks = function(r2) {
    var e2, n2;
    r2 = "string" == typeof r2 ? (e2 = r2, n2 = {}, ce.each(e2.match(D) || [], function(e3, t3) {
      n2[t3] = true;
    }), n2) : ce.extend({}, r2);
    var i2, t2, o2, a2, s2 = [], u2 = [], l2 = -1, c2 = function() {
      for (a2 = a2 || r2.once, o2 = i2 = true; u2.length; l2 = -1) {
        t2 = u2.shift();
        while (++l2 < s2.length) false === s2[l2].apply(t2[0], t2[1]) && r2.stopOnFalse && (l2 = s2.length, t2 = false);
      }
      r2.memory || (t2 = false), i2 = false, a2 && (s2 = t2 ? [] : "");
    }, f2 = { add: function() {
      return s2 && (t2 && !i2 && (l2 = s2.length - 1, u2.push(t2)), function n3(e3) {
        ce.each(e3, function(e4, t3) {
          v(t3) ? r2.unique && f2.has(t3) || s2.push(t3) : t3 && t3.length && "string" !== x(t3) && n3(t3);
        });
      }(arguments), t2 && !i2 && c2()), this;
    }, remove: function() {
      return ce.each(arguments, function(e3, t3) {
        var n3;
        while (-1 < (n3 = ce.inArray(t3, s2, n3))) s2.splice(n3, 1), n3 <= l2 && l2--;
      }), this;
    }, has: function(e3) {
      return e3 ? -1 < ce.inArray(e3, s2) : 0 < s2.length;
    }, empty: function() {
      return s2 && (s2 = []), this;
    }, disable: function() {
      return a2 = u2 = [], s2 = t2 = "", this;
    }, disabled: function() {
      return !s2;
    }, lock: function() {
      return a2 = u2 = [], t2 || i2 || (s2 = t2 = ""), this;
    }, locked: function() {
      return !!a2;
    }, fireWith: function(e3, t3) {
      return a2 || (t3 = [e3, (t3 = t3 || []).slice ? t3.slice() : t3], u2.push(t3), i2 || c2()), this;
    }, fire: function() {
      return f2.fireWith(this, arguments), this;
    }, fired: function() {
      return !!o2;
    } };
    return f2;
  }, ce.extend({ Deferred: function(e2) {
    var o2 = [["notify", "progress", ce.Callbacks("memory"), ce.Callbacks("memory"), 2], ["resolve", "done", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 1, "rejected"]], i2 = "pending", a2 = { state: function() {
      return i2;
    }, always: function() {
      return s2.done(arguments).fail(arguments), this;
    }, "catch": function(e3) {
      return a2.then(null, e3);
    }, pipe: function() {
      var i3 = arguments;
      return ce.Deferred(function(r2) {
        ce.each(o2, function(e3, t2) {
          var n2 = v(i3[t2[4]]) && i3[t2[4]];
          s2[t2[1]](function() {
            var e4 = n2 && n2.apply(this, arguments);
            e4 && v(e4.promise) ? e4.promise().progress(r2.notify).done(r2.resolve).fail(r2.reject) : r2[t2[0] + "With"](this, n2 ? [e4] : arguments);
          });
        }), i3 = null;
      }).promise();
    }, then: function(t2, n2, r2) {
      var u2 = 0;
      function l2(i3, o3, a3, s3) {
        return function() {
          var n3 = this, r3 = arguments, e3 = function() {
            var e4, t4;
            if (!(i3 < u2)) {
              if ((e4 = a3.apply(n3, r3)) === o3.promise()) throw new TypeError("Thenable self-resolution");
              t4 = e4 && ("object" == typeof e4 || "function" == typeof e4) && e4.then, v(t4) ? s3 ? t4.call(e4, l2(u2, o3, N, s3), l2(u2, o3, q, s3)) : (u2++, t4.call(e4, l2(u2, o3, N, s3), l2(u2, o3, q, s3), l2(u2, o3, N, o3.notifyWith))) : (a3 !== N && (n3 = void 0, r3 = [e4]), (s3 || o3.resolveWith)(n3, r3));
            }
          }, t3 = s3 ? e3 : function() {
            try {
              e3();
            } catch (e4) {
              ce.Deferred.exceptionHook && ce.Deferred.exceptionHook(e4, t3.error), u2 <= i3 + 1 && (a3 !== q && (n3 = void 0, r3 = [e4]), o3.rejectWith(n3, r3));
            }
          };
          i3 ? t3() : (ce.Deferred.getErrorHook ? t3.error = ce.Deferred.getErrorHook() : ce.Deferred.getStackHook && (t3.error = ce.Deferred.getStackHook()), ie.setTimeout(t3));
        };
      }
      return ce.Deferred(function(e3) {
        o2[0][3].add(l2(0, e3, v(r2) ? r2 : N, e3.notifyWith)), o2[1][3].add(l2(0, e3, v(t2) ? t2 : N)), o2[2][3].add(l2(0, e3, v(n2) ? n2 : q));
      }).promise();
    }, promise: function(e3) {
      return null != e3 ? ce.extend(e3, a2) : a2;
    } }, s2 = {};
    return ce.each(o2, function(e3, t2) {
      var n2 = t2[2], r2 = t2[5];
      a2[t2[1]] = n2.add, r2 && n2.add(function() {
        i2 = r2;
      }, o2[3 - e3][2].disable, o2[3 - e3][3].disable, o2[0][2].lock, o2[0][3].lock), n2.add(t2[3].fire), s2[t2[0]] = function() {
        return s2[t2[0] + "With"](this === s2 ? void 0 : this, arguments), this;
      }, s2[t2[0] + "With"] = n2.fireWith;
    }), a2.promise(s2), e2 && e2.call(s2, s2), s2;
  }, when: function(e2) {
    var n2 = arguments.length, t2 = n2, r2 = Array(t2), i2 = ae.call(arguments), o2 = ce.Deferred(), a2 = function(t3) {
      return function(e3) {
        r2[t3] = this, i2[t3] = 1 < arguments.length ? ae.call(arguments) : e3, --n2 || o2.resolveWith(r2, i2);
      };
    };
    if (n2 <= 1 && (L(e2, o2.done(a2(t2)).resolve, o2.reject, !n2), "pending" === o2.state() || v(i2[t2] && i2[t2].then))) return o2.then();
    while (t2--) L(i2[t2], a2(t2), o2.reject);
    return o2.promise();
  } });
  var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  ce.Deferred.exceptionHook = function(e2, t2) {
    ie.console && ie.console.warn && e2 && H.test(e2.name) && ie.console.warn("jQuery.Deferred exception: " + e2.message, e2.stack, t2);
  }, ce.readyException = function(e2) {
    ie.setTimeout(function() {
      throw e2;
    });
  };
  var O = ce.Deferred();
  function P() {
    C.removeEventListener("DOMContentLoaded", P), ie.removeEventListener("load", P), ce.ready();
  }
  ce.fn.ready = function(e2) {
    return O.then(e2)["catch"](function(e3) {
      ce.readyException(e3);
    }), this;
  }, ce.extend({ isReady: false, readyWait: 1, ready: function(e2) {
    (true === e2 ? --ce.readyWait : ce.isReady) || (ce.isReady = true) !== e2 && 0 < --ce.readyWait || O.resolveWith(C, [ce]);
  } }), ce.ready.then = O.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? ie.setTimeout(ce.ready) : (C.addEventListener("DOMContentLoaded", P), ie.addEventListener("load", P));
  var M = function(e2, t2, n2, r2, i2, o2, a2) {
    var s2 = 0, u2 = e2.length, l2 = null == n2;
    if ("object" === x(n2)) for (s2 in i2 = true, n2) M(e2, t2, s2, n2[s2], true, o2, a2);
    else if (void 0 !== r2 && (i2 = true, v(r2) || (a2 = true), l2 && (a2 ? (t2.call(e2, r2), t2 = null) : (l2 = t2, t2 = function(e3, t3, n3) {
      return l2.call(ce(e3), n3);
    })), t2)) for (; s2 < u2; s2++) t2(e2[s2], n2, a2 ? r2 : r2.call(e2[s2], s2, t2(e2[s2], n2)));
    return i2 ? e2 : l2 ? t2.call(e2) : u2 ? t2(e2[0], n2) : o2;
  }, R = /^-ms-/, I = /-([a-z])/g;
  function W(e2, t2) {
    return t2.toUpperCase();
  }
  function F(e2) {
    return e2.replace(R, "ms-").replace(I, W);
  }
  var $ = function(e2) {
    return 1 === e2.nodeType || 9 === e2.nodeType || !+e2.nodeType;
  };
  function B() {
    this.expando = ce.expando + B.uid++;
  }
  B.uid = 1, B.prototype = { cache: function(e2) {
    var t2 = e2[this.expando];
    return t2 || (t2 = {}, $(e2) && (e2.nodeType ? e2[this.expando] = t2 : Object.defineProperty(e2, this.expando, { value: t2, configurable: true }))), t2;
  }, set: function(e2, t2, n2) {
    var r2, i2 = this.cache(e2);
    if ("string" == typeof t2) i2[F(t2)] = n2;
    else for (r2 in t2) i2[F(r2)] = t2[r2];
    return i2;
  }, get: function(e2, t2) {
    return void 0 === t2 ? this.cache(e2) : e2[this.expando] && e2[this.expando][F(t2)];
  }, access: function(e2, t2, n2) {
    return void 0 === t2 || t2 && "string" == typeof t2 && void 0 === n2 ? this.get(e2, t2) : (this.set(e2, t2, n2), void 0 !== n2 ? n2 : t2);
  }, remove: function(e2, t2) {
    var n2, r2 = e2[this.expando];
    if (void 0 !== r2) {
      if (void 0 !== t2) {
        n2 = (t2 = Array.isArray(t2) ? t2.map(F) : (t2 = F(t2)) in r2 ? [t2] : t2.match(D) || []).length;
        while (n2--) delete r2[t2[n2]];
      }
      (void 0 === t2 || ce.isEmptyObject(r2)) && (e2.nodeType ? e2[this.expando] = void 0 : delete e2[this.expando]);
    }
  }, hasData: function(e2) {
    var t2 = e2[this.expando];
    return void 0 !== t2 && !ce.isEmptyObject(t2);
  } };
  var _ = new B(), z = new B(), X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, U = /[A-Z]/g;
  function V(e2, t2, n2) {
    var r2, i2;
    if (void 0 === n2 && 1 === e2.nodeType) if (r2 = "data-" + t2.replace(U, "-$&").toLowerCase(), "string" == typeof (n2 = e2.getAttribute(r2))) {
      try {
        n2 = "true" === (i2 = n2) || "false" !== i2 && ("null" === i2 ? null : i2 === +i2 + "" ? +i2 : X.test(i2) ? JSON.parse(i2) : i2);
      } catch (e3) {
      }
      z.set(e2, t2, n2);
    } else n2 = void 0;
    return n2;
  }
  ce.extend({ hasData: function(e2) {
    return z.hasData(e2) || _.hasData(e2);
  }, data: function(e2, t2, n2) {
    return z.access(e2, t2, n2);
  }, removeData: function(e2, t2) {
    z.remove(e2, t2);
  }, _data: function(e2, t2, n2) {
    return _.access(e2, t2, n2);
  }, _removeData: function(e2, t2) {
    _.remove(e2, t2);
  } }), ce.fn.extend({ data: function(n2, e2) {
    var t2, r2, i2, o2 = this[0], a2 = o2 && o2.attributes;
    if (void 0 === n2) {
      if (this.length && (i2 = z.get(o2), 1 === o2.nodeType && !_.get(o2, "hasDataAttrs"))) {
        t2 = a2.length;
        while (t2--) a2[t2] && 0 === (r2 = a2[t2].name).indexOf("data-") && (r2 = F(r2.slice(5)), V(o2, r2, i2[r2]));
        _.set(o2, "hasDataAttrs", true);
      }
      return i2;
    }
    return "object" == typeof n2 ? this.each(function() {
      z.set(this, n2);
    }) : M(this, function(e3) {
      var t3;
      if (o2 && void 0 === e3) return void 0 !== (t3 = z.get(o2, n2)) ? t3 : void 0 !== (t3 = V(o2, n2)) ? t3 : void 0;
      this.each(function() {
        z.set(this, n2, e3);
      });
    }, null, e2, 1 < arguments.length, null, true);
  }, removeData: function(e2) {
    return this.each(function() {
      z.remove(this, e2);
    });
  } }), ce.extend({ queue: function(e2, t2, n2) {
    var r2;
    if (e2) return t2 = (t2 || "fx") + "queue", r2 = _.get(e2, t2), n2 && (!r2 || Array.isArray(n2) ? r2 = _.access(e2, t2, ce.makeArray(n2)) : r2.push(n2)), r2 || [];
  }, dequeue: function(e2, t2) {
    t2 = t2 || "fx";
    var n2 = ce.queue(e2, t2), r2 = n2.length, i2 = n2.shift(), o2 = ce._queueHooks(e2, t2);
    "inprogress" === i2 && (i2 = n2.shift(), r2--), i2 && ("fx" === t2 && n2.unshift("inprogress"), delete o2.stop, i2.call(e2, function() {
      ce.dequeue(e2, t2);
    }, o2)), !r2 && o2 && o2.empty.fire();
  }, _queueHooks: function(e2, t2) {
    var n2 = t2 + "queueHooks";
    return _.get(e2, n2) || _.access(e2, n2, { empty: ce.Callbacks("once memory").add(function() {
      _.remove(e2, [t2 + "queue", n2]);
    }) });
  } }), ce.fn.extend({ queue: function(t2, n2) {
    var e2 = 2;
    return "string" != typeof t2 && (n2 = t2, t2 = "fx", e2--), arguments.length < e2 ? ce.queue(this[0], t2) : void 0 === n2 ? this : this.each(function() {
      var e3 = ce.queue(this, t2, n2);
      ce._queueHooks(this, t2), "fx" === t2 && "inprogress" !== e3[0] && ce.dequeue(this, t2);
    });
  }, dequeue: function(e2) {
    return this.each(function() {
      ce.dequeue(this, e2);
    });
  }, clearQueue: function(e2) {
    return this.queue(e2 || "fx", []);
  }, promise: function(e2, t2) {
    var n2, r2 = 1, i2 = ce.Deferred(), o2 = this, a2 = this.length, s2 = function() {
      --r2 || i2.resolveWith(o2, [o2]);
    };
    "string" != typeof e2 && (t2 = e2, e2 = void 0), e2 = e2 || "fx";
    while (a2--) (n2 = _.get(o2[a2], e2 + "queueHooks")) && n2.empty && (r2++, n2.empty.add(s2));
    return s2(), i2.promise(t2);
  } });
  var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"), Q = ["Top", "Right", "Bottom", "Left"], J = C.documentElement, K = function(e2) {
    return ce.contains(e2.ownerDocument, e2);
  }, Z = { composed: true };
  J.getRootNode && (K = function(e2) {
    return ce.contains(e2.ownerDocument, e2) || e2.getRootNode(Z) === e2.ownerDocument;
  });
  var ee = function(e2, t2) {
    return "none" === (e2 = t2 || e2).style.display || "" === e2.style.display && K(e2) && "none" === ce.css(e2, "display");
  };
  function te(e2, t2, n2, r2) {
    var i2, o2, a2 = 20, s2 = r2 ? function() {
      return r2.cur();
    } : function() {
      return ce.css(e2, t2, "");
    }, u2 = s2(), l2 = n2 && n2[3] || (ce.cssNumber[t2] ? "" : "px"), c2 = e2.nodeType && (ce.cssNumber[t2] || "px" !== l2 && +u2) && Y.exec(ce.css(e2, t2));
    if (c2 && c2[3] !== l2) {
      u2 /= 2, l2 = l2 || c2[3], c2 = +u2 || 1;
      while (a2--) ce.style(e2, t2, c2 + l2), (1 - o2) * (1 - (o2 = s2() / u2 || 0.5)) <= 0 && (a2 = 0), c2 /= o2;
      c2 *= 2, ce.style(e2, t2, c2 + l2), n2 = n2 || [];
    }
    return n2 && (c2 = +c2 || +u2 || 0, i2 = n2[1] ? c2 + (n2[1] + 1) * n2[2] : +n2[2], r2 && (r2.unit = l2, r2.start = c2, r2.end = i2)), i2;
  }
  var ne = {};
  function re(e2, t2) {
    for (var n2, r2, i2, o2, a2, s2, u2, l2 = [], c2 = 0, f2 = e2.length; c2 < f2; c2++) (r2 = e2[c2]).style && (n2 = r2.style.display, t2 ? ("none" === n2 && (l2[c2] = _.get(r2, "display") || null, l2[c2] || (r2.style.display = "")), "" === r2.style.display && ee(r2) && (l2[c2] = (u2 = a2 = o2 = void 0, a2 = (i2 = r2).ownerDocument, s2 = i2.nodeName, (u2 = ne[s2]) || (o2 = a2.body.appendChild(a2.createElement(s2)), u2 = ce.css(o2, "display"), o2.parentNode.removeChild(o2), "none" === u2 && (u2 = "block"), ne[s2] = u2)))) : "none" !== n2 && (l2[c2] = "none", _.set(r2, "display", n2)));
    for (c2 = 0; c2 < f2; c2++) null != l2[c2] && (e2[c2].style.display = l2[c2]);
    return e2;
  }
  ce.fn.extend({ show: function() {
    return re(this, true);
  }, hide: function() {
    return re(this);
  }, toggle: function(e2) {
    return "boolean" == typeof e2 ? e2 ? this.show() : this.hide() : this.each(function() {
      ee(this) ? ce(this).show() : ce(this).hide();
    });
  } });
  var xe, be, we = /^(?:checkbox|radio)$/i, Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, Ce = /^$|^module$|\/(?:java|ecma)script/i;
  xe = C.createDocumentFragment().appendChild(C.createElement("div")), (be = C.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), xe.appendChild(be), le.checkClone = xe.cloneNode(true).cloneNode(true).lastChild.checked, xe.innerHTML = "<textarea>x</textarea>", le.noCloneChecked = !!xe.cloneNode(true).lastChild.defaultValue, xe.innerHTML = "<option></option>", le.option = !!xe.lastChild;
  var ke = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
  function Se(e2, t2) {
    var n2;
    return n2 = "undefined" != typeof e2.getElementsByTagName ? e2.getElementsByTagName(t2 || "*") : "undefined" != typeof e2.querySelectorAll ? e2.querySelectorAll(t2 || "*") : [], void 0 === t2 || t2 && fe(e2, t2) ? ce.merge([e2], n2) : n2;
  }
  function Ee(e2, t2) {
    for (var n2 = 0, r2 = e2.length; n2 < r2; n2++) _.set(e2[n2], "globalEval", !t2 || _.get(t2[n2], "globalEval"));
  }
  ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead, ke.th = ke.td, le.option || (ke.optgroup = ke.option = [1, "<select multiple='multiple'>", "</select>"]);
  var je = /<|&#?\w+;/;
  function Ae(e2, t2, n2, r2, i2) {
    for (var o2, a2, s2, u2, l2, c2, f2 = t2.createDocumentFragment(), p2 = [], d2 = 0, h2 = e2.length; d2 < h2; d2++) if ((o2 = e2[d2]) || 0 === o2) if ("object" === x(o2)) ce.merge(p2, o2.nodeType ? [o2] : o2);
    else if (je.test(o2)) {
      a2 = a2 || f2.appendChild(t2.createElement("div")), s2 = (Te.exec(o2) || ["", ""])[1].toLowerCase(), u2 = ke[s2] || ke._default, a2.innerHTML = u2[1] + ce.htmlPrefilter(o2) + u2[2], c2 = u2[0];
      while (c2--) a2 = a2.lastChild;
      ce.merge(p2, a2.childNodes), (a2 = f2.firstChild).textContent = "";
    } else p2.push(t2.createTextNode(o2));
    f2.textContent = "", d2 = 0;
    while (o2 = p2[d2++]) if (r2 && -1 < ce.inArray(o2, r2)) i2 && i2.push(o2);
    else if (l2 = K(o2), a2 = Se(f2.appendChild(o2), "script"), l2 && Ee(a2), n2) {
      c2 = 0;
      while (o2 = a2[c2++]) Ce.test(o2.type || "") && n2.push(o2);
    }
    return f2;
  }
  var De = /^([^.]*)(?:\.(.+)|)/;
  function Ne() {
    return true;
  }
  function qe() {
    return false;
  }
  function Le(e2, t2, n2, r2, i2, o2) {
    var a2, s2;
    if ("object" == typeof t2) {
      for (s2 in "string" != typeof n2 && (r2 = r2 || n2, n2 = void 0), t2) Le(e2, s2, n2, r2, t2[s2], o2);
      return e2;
    }
    if (null == r2 && null == i2 ? (i2 = n2, r2 = n2 = void 0) : null == i2 && ("string" == typeof n2 ? (i2 = r2, r2 = void 0) : (i2 = r2, r2 = n2, n2 = void 0)), false === i2) i2 = qe;
    else if (!i2) return e2;
    return 1 === o2 && (a2 = i2, (i2 = function(e3) {
      return ce().off(e3), a2.apply(this, arguments);
    }).guid = a2.guid || (a2.guid = ce.guid++)), e2.each(function() {
      ce.event.add(this, t2, i2, r2, n2);
    });
  }
  function He(e2, r2, t2) {
    t2 ? (_.set(e2, r2, false), ce.event.add(e2, r2, { namespace: false, handler: function(e3) {
      var t3, n2 = _.get(this, r2);
      if (1 & e3.isTrigger && this[r2]) {
        if (n2) (ce.event.special[r2] || {}).delegateType && e3.stopPropagation();
        else if (n2 = ae.call(arguments), _.set(this, r2, n2), this[r2](), t3 = _.get(this, r2), _.set(this, r2, false), n2 !== t3) return e3.stopImmediatePropagation(), e3.preventDefault(), t3;
      } else n2 && (_.set(this, r2, ce.event.trigger(n2[0], n2.slice(1), this)), e3.stopPropagation(), e3.isImmediatePropagationStopped = Ne);
    } })) : void 0 === _.get(e2, r2) && ce.event.add(e2, r2, Ne);
  }
  ce.event = { global: {}, add: function(t2, e2, n2, r2, i2) {
    var o2, a2, s2, u2, l2, c2, f2, p2, d2, h2, g2, v2 = _.get(t2);
    if ($(t2)) {
      n2.handler && (n2 = (o2 = n2).handler, i2 = o2.selector), i2 && ce.find.matchesSelector(J, i2), n2.guid || (n2.guid = ce.guid++), (u2 = v2.events) || (u2 = v2.events = /* @__PURE__ */ Object.create(null)), (a2 = v2.handle) || (a2 = v2.handle = function(e3) {
        return "undefined" != typeof ce && ce.event.triggered !== e3.type ? ce.event.dispatch.apply(t2, arguments) : void 0;
      }), l2 = (e2 = (e2 || "").match(D) || [""]).length;
      while (l2--) d2 = g2 = (s2 = De.exec(e2[l2]) || [])[1], h2 = (s2[2] || "").split(".").sort(), d2 && (f2 = ce.event.special[d2] || {}, d2 = (i2 ? f2.delegateType : f2.bindType) || d2, f2 = ce.event.special[d2] || {}, c2 = ce.extend({ type: d2, origType: g2, data: r2, handler: n2, guid: n2.guid, selector: i2, needsContext: i2 && ce.expr.match.needsContext.test(i2), namespace: h2.join(".") }, o2), (p2 = u2[d2]) || ((p2 = u2[d2] = []).delegateCount = 0, f2.setup && false !== f2.setup.call(t2, r2, h2, a2) || t2.addEventListener && t2.addEventListener(d2, a2)), f2.add && (f2.add.call(t2, c2), c2.handler.guid || (c2.handler.guid = n2.guid)), i2 ? p2.splice(p2.delegateCount++, 0, c2) : p2.push(c2), ce.event.global[d2] = true);
    }
  }, remove: function(e2, t2, n2, r2, i2) {
    var o2, a2, s2, u2, l2, c2, f2, p2, d2, h2, g2, v2 = _.hasData(e2) && _.get(e2);
    if (v2 && (u2 = v2.events)) {
      l2 = (t2 = (t2 || "").match(D) || [""]).length;
      while (l2--) if (d2 = g2 = (s2 = De.exec(t2[l2]) || [])[1], h2 = (s2[2] || "").split(".").sort(), d2) {
        f2 = ce.event.special[d2] || {}, p2 = u2[d2 = (r2 ? f2.delegateType : f2.bindType) || d2] || [], s2 = s2[2] && new RegExp("(^|\\.)" + h2.join("\\.(?:.*\\.|)") + "(\\.|$)"), a2 = o2 = p2.length;
        while (o2--) c2 = p2[o2], !i2 && g2 !== c2.origType || n2 && n2.guid !== c2.guid || s2 && !s2.test(c2.namespace) || r2 && r2 !== c2.selector && ("**" !== r2 || !c2.selector) || (p2.splice(o2, 1), c2.selector && p2.delegateCount--, f2.remove && f2.remove.call(e2, c2));
        a2 && !p2.length && (f2.teardown && false !== f2.teardown.call(e2, h2, v2.handle) || ce.removeEvent(e2, d2, v2.handle), delete u2[d2]);
      } else for (d2 in u2) ce.event.remove(e2, d2 + t2[l2], n2, r2, true);
      ce.isEmptyObject(u2) && _.remove(e2, "handle events");
    }
  }, dispatch: function(e2) {
    var t2, n2, r2, i2, o2, a2, s2 = new Array(arguments.length), u2 = ce.event.fix(e2), l2 = (_.get(this, "events") || /* @__PURE__ */ Object.create(null))[u2.type] || [], c2 = ce.event.special[u2.type] || {};
    for (s2[0] = u2, t2 = 1; t2 < arguments.length; t2++) s2[t2] = arguments[t2];
    if (u2.delegateTarget = this, !c2.preDispatch || false !== c2.preDispatch.call(this, u2)) {
      a2 = ce.event.handlers.call(this, u2, l2), t2 = 0;
      while ((i2 = a2[t2++]) && !u2.isPropagationStopped()) {
        u2.currentTarget = i2.elem, n2 = 0;
        while ((o2 = i2.handlers[n2++]) && !u2.isImmediatePropagationStopped()) u2.rnamespace && false !== o2.namespace && !u2.rnamespace.test(o2.namespace) || (u2.handleObj = o2, u2.data = o2.data, void 0 !== (r2 = ((ce.event.special[o2.origType] || {}).handle || o2.handler).apply(i2.elem, s2)) && false === (u2.result = r2) && (u2.preventDefault(), u2.stopPropagation()));
      }
      return c2.postDispatch && c2.postDispatch.call(this, u2), u2.result;
    }
  }, handlers: function(e2, t2) {
    var n2, r2, i2, o2, a2, s2 = [], u2 = t2.delegateCount, l2 = e2.target;
    if (u2 && l2.nodeType && !("click" === e2.type && 1 <= e2.button)) {
      for (; l2 !== this; l2 = l2.parentNode || this) if (1 === l2.nodeType && ("click" !== e2.type || true !== l2.disabled)) {
        for (o2 = [], a2 = {}, n2 = 0; n2 < u2; n2++) void 0 === a2[i2 = (r2 = t2[n2]).selector + " "] && (a2[i2] = r2.needsContext ? -1 < ce(i2, this).index(l2) : ce.find(i2, this, null, [l2]).length), a2[i2] && o2.push(r2);
        o2.length && s2.push({ elem: l2, handlers: o2 });
      }
    }
    return l2 = this, u2 < t2.length && s2.push({ elem: l2, handlers: t2.slice(u2) }), s2;
  }, addProp: function(t2, e2) {
    Object.defineProperty(ce.Event.prototype, t2, { enumerable: true, configurable: true, get: v(e2) ? function() {
      if (this.originalEvent) return e2(this.originalEvent);
    } : function() {
      if (this.originalEvent) return this.originalEvent[t2];
    }, set: function(e3) {
      Object.defineProperty(this, t2, { enumerable: true, configurable: true, writable: true, value: e3 });
    } });
  }, fix: function(e2) {
    return e2[ce.expando] ? e2 : new ce.Event(e2);
  }, special: { load: { noBubble: true }, click: { setup: function(e2) {
    var t2 = this || e2;
    return we.test(t2.type) && t2.click && fe(t2, "input") && He(t2, "click", true), false;
  }, trigger: function(e2) {
    var t2 = this || e2;
    return we.test(t2.type) && t2.click && fe(t2, "input") && He(t2, "click"), true;
  }, _default: function(e2) {
    var t2 = e2.target;
    return we.test(t2.type) && t2.click && fe(t2, "input") && _.get(t2, "click") || fe(t2, "a");
  } }, beforeunload: { postDispatch: function(e2) {
    void 0 !== e2.result && e2.originalEvent && (e2.originalEvent.returnValue = e2.result);
  } } } }, ce.removeEvent = function(e2, t2, n2) {
    e2.removeEventListener && e2.removeEventListener(t2, n2);
  }, ce.Event = function(e2, t2) {
    if (!(this instanceof ce.Event)) return new ce.Event(e2, t2);
    e2 && e2.type ? (this.originalEvent = e2, this.type = e2.type, this.isDefaultPrevented = e2.defaultPrevented || void 0 === e2.defaultPrevented && false === e2.returnValue ? Ne : qe, this.target = e2.target && 3 === e2.target.nodeType ? e2.target.parentNode : e2.target, this.currentTarget = e2.currentTarget, this.relatedTarget = e2.relatedTarget) : this.type = e2, t2 && ce.extend(this, t2), this.timeStamp = e2 && e2.timeStamp || Date.now(), this[ce.expando] = true;
  }, ce.Event.prototype = { constructor: ce.Event, isDefaultPrevented: qe, isPropagationStopped: qe, isImmediatePropagationStopped: qe, isSimulated: false, preventDefault: function() {
    var e2 = this.originalEvent;
    this.isDefaultPrevented = Ne, e2 && !this.isSimulated && e2.preventDefault();
  }, stopPropagation: function() {
    var e2 = this.originalEvent;
    this.isPropagationStopped = Ne, e2 && !this.isSimulated && e2.stopPropagation();
  }, stopImmediatePropagation: function() {
    var e2 = this.originalEvent;
    this.isImmediatePropagationStopped = Ne, e2 && !this.isSimulated && e2.stopImmediatePropagation(), this.stopPropagation();
  } }, ce.each({ altKey: true, bubbles: true, cancelable: true, changedTouches: true, ctrlKey: true, detail: true, eventPhase: true, metaKey: true, pageX: true, pageY: true, shiftKey: true, view: true, "char": true, code: true, charCode: true, key: true, keyCode: true, button: true, buttons: true, clientX: true, clientY: true, offsetX: true, offsetY: true, pointerId: true, pointerType: true, screenX: true, screenY: true, targetTouches: true, toElement: true, touches: true, which: true }, ce.event.addProp), ce.each({ focus: "focusin", blur: "focusout" }, function(r2, i2) {
    function o2(e2) {
      if (C.documentMode) {
        var t2 = _.get(this, "handle"), n2 = ce.event.fix(e2);
        n2.type = "focusin" === e2.type ? "focus" : "blur", n2.isSimulated = true, t2(e2), n2.target === n2.currentTarget && t2(n2);
      } else ce.event.simulate(i2, e2.target, ce.event.fix(e2));
    }
    ce.event.special[r2] = { setup: function() {
      var e2;
      if (He(this, r2, true), !C.documentMode) return false;
      (e2 = _.get(this, i2)) || this.addEventListener(i2, o2), _.set(this, i2, (e2 || 0) + 1);
    }, trigger: function() {
      return He(this, r2), true;
    }, teardown: function() {
      var e2;
      if (!C.documentMode) return false;
      (e2 = _.get(this, i2) - 1) ? _.set(this, i2, e2) : (this.removeEventListener(i2, o2), _.remove(this, i2));
    }, _default: function(e2) {
      return _.get(e2.target, r2);
    }, delegateType: i2 }, ce.event.special[i2] = { setup: function() {
      var e2 = this.ownerDocument || this.document || this, t2 = C.documentMode ? this : e2, n2 = _.get(t2, i2);
      n2 || (C.documentMode ? this.addEventListener(i2, o2) : e2.addEventListener(r2, o2, true)), _.set(t2, i2, (n2 || 0) + 1);
    }, teardown: function() {
      var e2 = this.ownerDocument || this.document || this, t2 = C.documentMode ? this : e2, n2 = _.get(t2, i2) - 1;
      n2 ? _.set(t2, i2, n2) : (C.documentMode ? this.removeEventListener(i2, o2) : e2.removeEventListener(r2, o2, true), _.remove(t2, i2));
    } };
  }), ce.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e2, i2) {
    ce.event.special[e2] = { delegateType: i2, bindType: i2, handle: function(e3) {
      var t2, n2 = e3.relatedTarget, r2 = e3.handleObj;
      return n2 && (n2 === this || ce.contains(this, n2)) || (e3.type = r2.origType, t2 = r2.handler.apply(this, arguments), e3.type = i2), t2;
    } };
  }), ce.fn.extend({ on: function(e2, t2, n2, r2) {
    return Le(this, e2, t2, n2, r2);
  }, one: function(e2, t2, n2, r2) {
    return Le(this, e2, t2, n2, r2, 1);
  }, off: function(e2, t2, n2) {
    var r2, i2;
    if (e2 && e2.preventDefault && e2.handleObj) return r2 = e2.handleObj, ce(e2.delegateTarget).off(r2.namespace ? r2.origType + "." + r2.namespace : r2.origType, r2.selector, r2.handler), this;
    if ("object" == typeof e2) {
      for (i2 in e2) this.off(i2, t2, e2[i2]);
      return this;
    }
    return false !== t2 && "function" != typeof t2 || (n2 = t2, t2 = void 0), false === n2 && (n2 = qe), this.each(function() {
      ce.event.remove(this, e2, n2, t2);
    });
  } });
  var Oe = /<script|<style|<link/i, Pe = /checked\s*(?:[^=]|=\s*.checked.)/i, Me = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function Re(e2, t2) {
    return fe(e2, "table") && fe(11 !== t2.nodeType ? t2 : t2.firstChild, "tr") && ce(e2).children("tbody")[0] || e2;
  }
  function Ie(e2) {
    return e2.type = (null !== e2.getAttribute("type")) + "/" + e2.type, e2;
  }
  function We(e2) {
    return "true/" === (e2.type || "").slice(0, 5) ? e2.type = e2.type.slice(5) : e2.removeAttribute("type"), e2;
  }
  function Fe(e2, t2) {
    var n2, r2, i2, o2, a2, s2;
    if (1 === t2.nodeType) {
      if (_.hasData(e2) && (s2 = _.get(e2).events)) for (i2 in _.remove(t2, "handle events"), s2) for (n2 = 0, r2 = s2[i2].length; n2 < r2; n2++) ce.event.add(t2, i2, s2[i2][n2]);
      z.hasData(e2) && (o2 = z.access(e2), a2 = ce.extend({}, o2), z.set(t2, a2));
    }
  }
  function $e(n2, r2, i2, o2) {
    r2 = g(r2);
    var e2, t2, a2, s2, u2, l2, c2 = 0, f2 = n2.length, p2 = f2 - 1, d2 = r2[0], h2 = v(d2);
    if (h2 || 1 < f2 && "string" == typeof d2 && !le.checkClone && Pe.test(d2)) return n2.each(function(e3) {
      var t3 = n2.eq(e3);
      h2 && (r2[0] = d2.call(this, e3, t3.html())), $e(t3, r2, i2, o2);
    });
    if (f2 && (t2 = (e2 = Ae(r2, n2[0].ownerDocument, false, n2, o2)).firstChild, 1 === e2.childNodes.length && (e2 = t2), t2 || o2)) {
      for (s2 = (a2 = ce.map(Se(e2, "script"), Ie)).length; c2 < f2; c2++) u2 = e2, c2 !== p2 && (u2 = ce.clone(u2, true, true), s2 && ce.merge(a2, Se(u2, "script"))), i2.call(n2[c2], u2, c2);
      if (s2) for (l2 = a2[a2.length - 1].ownerDocument, ce.map(a2, We), c2 = 0; c2 < s2; c2++) u2 = a2[c2], Ce.test(u2.type || "") && !_.access(u2, "globalEval") && ce.contains(l2, u2) && (u2.src && "module" !== (u2.type || "").toLowerCase() ? ce._evalUrl && !u2.noModule && ce._evalUrl(u2.src, { nonce: u2.nonce || u2.getAttribute("nonce") }, l2) : m(u2.textContent.replace(Me, ""), u2, l2));
    }
    return n2;
  }
  function Be(e2, t2, n2) {
    for (var r2, i2 = t2 ? ce.filter(t2, e2) : e2, o2 = 0; null != (r2 = i2[o2]); o2++) n2 || 1 !== r2.nodeType || ce.cleanData(Se(r2)), r2.parentNode && (n2 && K(r2) && Ee(Se(r2, "script")), r2.parentNode.removeChild(r2));
    return e2;
  }
  ce.extend({ htmlPrefilter: function(e2) {
    return e2;
  }, clone: function(e2, t2, n2) {
    var r2, i2, o2, a2, s2, u2, l2, c2 = e2.cloneNode(true), f2 = K(e2);
    if (!(le.noCloneChecked || 1 !== e2.nodeType && 11 !== e2.nodeType || ce.isXMLDoc(e2))) for (a2 = Se(c2), r2 = 0, i2 = (o2 = Se(e2)).length; r2 < i2; r2++) s2 = o2[r2], u2 = a2[r2], void 0, "input" === (l2 = u2.nodeName.toLowerCase()) && we.test(s2.type) ? u2.checked = s2.checked : "input" !== l2 && "textarea" !== l2 || (u2.defaultValue = s2.defaultValue);
    if (t2) if (n2) for (o2 = o2 || Se(e2), a2 = a2 || Se(c2), r2 = 0, i2 = o2.length; r2 < i2; r2++) Fe(o2[r2], a2[r2]);
    else Fe(e2, c2);
    return 0 < (a2 = Se(c2, "script")).length && Ee(a2, !f2 && Se(e2, "script")), c2;
  }, cleanData: function(e2) {
    for (var t2, n2, r2, i2 = ce.event.special, o2 = 0; void 0 !== (n2 = e2[o2]); o2++) if ($(n2)) {
      if (t2 = n2[_.expando]) {
        if (t2.events) for (r2 in t2.events) i2[r2] ? ce.event.remove(n2, r2) : ce.removeEvent(n2, r2, t2.handle);
        n2[_.expando] = void 0;
      }
      n2[z.expando] && (n2[z.expando] = void 0);
    }
  } }), ce.fn.extend({ detach: function(e2) {
    return Be(this, e2, true);
  }, remove: function(e2) {
    return Be(this, e2);
  }, text: function(e2) {
    return M(this, function(e3) {
      return void 0 === e3 ? ce.text(this) : this.empty().each(function() {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e3);
      });
    }, null, e2, arguments.length);
  }, append: function() {
    return $e(this, arguments, function(e2) {
      1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Re(this, e2).appendChild(e2);
    });
  }, prepend: function() {
    return $e(this, arguments, function(e2) {
      if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
        var t2 = Re(this, e2);
        t2.insertBefore(e2, t2.firstChild);
      }
    });
  }, before: function() {
    return $e(this, arguments, function(e2) {
      this.parentNode && this.parentNode.insertBefore(e2, this);
    });
  }, after: function() {
    return $e(this, arguments, function(e2) {
      this.parentNode && this.parentNode.insertBefore(e2, this.nextSibling);
    });
  }, empty: function() {
    for (var e2, t2 = 0; null != (e2 = this[t2]); t2++) 1 === e2.nodeType && (ce.cleanData(Se(e2, false)), e2.textContent = "");
    return this;
  }, clone: function(e2, t2) {
    return e2 = null != e2 && e2, t2 = null == t2 ? e2 : t2, this.map(function() {
      return ce.clone(this, e2, t2);
    });
  }, html: function(e2) {
    return M(this, function(e3) {
      var t2 = this[0] || {}, n2 = 0, r2 = this.length;
      if (void 0 === e3 && 1 === t2.nodeType) return t2.innerHTML;
      if ("string" == typeof e3 && !Oe.test(e3) && !ke[(Te.exec(e3) || ["", ""])[1].toLowerCase()]) {
        e3 = ce.htmlPrefilter(e3);
        try {
          for (; n2 < r2; n2++) 1 === (t2 = this[n2] || {}).nodeType && (ce.cleanData(Se(t2, false)), t2.innerHTML = e3);
          t2 = 0;
        } catch (e4) {
        }
      }
      t2 && this.empty().append(e3);
    }, null, e2, arguments.length);
  }, replaceWith: function() {
    var n2 = [];
    return $e(this, arguments, function(e2) {
      var t2 = this.parentNode;
      ce.inArray(this, n2) < 0 && (ce.cleanData(Se(this)), t2 && t2.replaceChild(e2, this));
    }, n2);
  } }), ce.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e2, a2) {
    ce.fn[e2] = function(e3) {
      for (var t2, n2 = [], r2 = ce(e3), i2 = r2.length - 1, o2 = 0; o2 <= i2; o2++) t2 = o2 === i2 ? this : this.clone(true), ce(r2[o2])[a2](t2), s.apply(n2, t2.get());
      return this.pushStack(n2);
    };
  });
  var _e = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"), ze = /^--/, Xe = function(e2) {
    var t2 = e2.ownerDocument.defaultView;
    return t2 && t2.opener || (t2 = ie), t2.getComputedStyle(e2);
  }, Ue = function(e2, t2, n2) {
    var r2, i2, o2 = {};
    for (i2 in t2) o2[i2] = e2.style[i2], e2.style[i2] = t2[i2];
    for (i2 in r2 = n2.call(e2), t2) e2.style[i2] = o2[i2];
    return r2;
  }, Ve = new RegExp(Q.join("|"), "i");
  function Ge(e2, t2, n2) {
    var r2, i2, o2, a2, s2 = ze.test(t2), u2 = e2.style;
    return (n2 = n2 || Xe(e2)) && (a2 = n2.getPropertyValue(t2) || n2[t2], s2 && a2 && (a2 = a2.replace(ve, "$1") || void 0), "" !== a2 || K(e2) || (a2 = ce.style(e2, t2)), !le.pixelBoxStyles() && _e.test(a2) && Ve.test(t2) && (r2 = u2.width, i2 = u2.minWidth, o2 = u2.maxWidth, u2.minWidth = u2.maxWidth = u2.width = a2, a2 = n2.width, u2.width = r2, u2.minWidth = i2, u2.maxWidth = o2)), void 0 !== a2 ? a2 + "" : a2;
  }
  function Ye(e2, t2) {
    return { get: function() {
      if (!e2()) return (this.get = t2).apply(this, arguments);
      delete this.get;
    } };
  }
  !function() {
    function e2() {
      if (l2) {
        u2.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l2.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", J.appendChild(u2).appendChild(l2);
        var e3 = ie.getComputedStyle(l2);
        n2 = "1%" !== e3.top, s2 = 12 === t2(e3.marginLeft), l2.style.right = "60%", o2 = 36 === t2(e3.right), r2 = 36 === t2(e3.width), l2.style.position = "absolute", i2 = 12 === t2(l2.offsetWidth / 3), J.removeChild(u2), l2 = null;
      }
    }
    function t2(e3) {
      return Math.round(parseFloat(e3));
    }
    var n2, r2, i2, o2, a2, s2, u2 = C.createElement("div"), l2 = C.createElement("div");
    l2.style && (l2.style.backgroundClip = "content-box", l2.cloneNode(true).style.backgroundClip = "", le.clearCloneStyle = "content-box" === l2.style.backgroundClip, ce.extend(le, { boxSizingReliable: function() {
      return e2(), r2;
    }, pixelBoxStyles: function() {
      return e2(), o2;
    }, pixelPosition: function() {
      return e2(), n2;
    }, reliableMarginLeft: function() {
      return e2(), s2;
    }, scrollboxSize: function() {
      return e2(), i2;
    }, reliableTrDimensions: function() {
      var e3, t3, n3, r3;
      return null == a2 && (e3 = C.createElement("table"), t3 = C.createElement("tr"), n3 = C.createElement("div"), e3.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t3.style.cssText = "box-sizing:content-box;border:1px solid", t3.style.height = "1px", n3.style.height = "9px", n3.style.display = "block", J.appendChild(e3).appendChild(t3).appendChild(n3), r3 = ie.getComputedStyle(t3), a2 = parseInt(r3.height, 10) + parseInt(r3.borderTopWidth, 10) + parseInt(r3.borderBottomWidth, 10) === t3.offsetHeight, J.removeChild(e3)), a2;
    } }));
  }();
  var Qe = ["Webkit", "Moz", "ms"], Je = C.createElement("div").style, Ke = {};
  function Ze(e2) {
    var t2 = ce.cssProps[e2] || Ke[e2];
    return t2 || (e2 in Je ? e2 : Ke[e2] = function(e3) {
      var t3 = e3[0].toUpperCase() + e3.slice(1), n2 = Qe.length;
      while (n2--) if ((e3 = Qe[n2] + t3) in Je) return e3;
    }(e2) || e2);
  }
  var et = /^(none|table(?!-c[ea]).+)/, tt = { position: "absolute", visibility: "hidden", display: "block" }, nt = { letterSpacing: "0", fontWeight: "400" };
  function rt(e2, t2, n2) {
    var r2 = Y.exec(t2);
    return r2 ? Math.max(0, r2[2] - (n2 || 0)) + (r2[3] || "px") : t2;
  }
  function it(e2, t2, n2, r2, i2, o2) {
    var a2 = "width" === t2 ? 1 : 0, s2 = 0, u2 = 0, l2 = 0;
    if (n2 === (r2 ? "border" : "content")) return 0;
    for (; a2 < 4; a2 += 2) "margin" === n2 && (l2 += ce.css(e2, n2 + Q[a2], true, i2)), r2 ? ("content" === n2 && (u2 -= ce.css(e2, "padding" + Q[a2], true, i2)), "margin" !== n2 && (u2 -= ce.css(e2, "border" + Q[a2] + "Width", true, i2))) : (u2 += ce.css(e2, "padding" + Q[a2], true, i2), "padding" !== n2 ? u2 += ce.css(e2, "border" + Q[a2] + "Width", true, i2) : s2 += ce.css(e2, "border" + Q[a2] + "Width", true, i2));
    return !r2 && 0 <= o2 && (u2 += Math.max(0, Math.ceil(e2["offset" + t2[0].toUpperCase() + t2.slice(1)] - o2 - u2 - s2 - 0.5)) || 0), u2 + l2;
  }
  function ot(e2, t2, n2) {
    var r2 = Xe(e2), i2 = (!le.boxSizingReliable() || n2) && "border-box" === ce.css(e2, "boxSizing", false, r2), o2 = i2, a2 = Ge(e2, t2, r2), s2 = "offset" + t2[0].toUpperCase() + t2.slice(1);
    if (_e.test(a2)) {
      if (!n2) return a2;
      a2 = "auto";
    }
    return (!le.boxSizingReliable() && i2 || !le.reliableTrDimensions() && fe(e2, "tr") || "auto" === a2 || !parseFloat(a2) && "inline" === ce.css(e2, "display", false, r2)) && e2.getClientRects().length && (i2 = "border-box" === ce.css(e2, "boxSizing", false, r2), (o2 = s2 in e2) && (a2 = e2[s2])), (a2 = parseFloat(a2) || 0) + it(e2, t2, n2 || (i2 ? "border" : "content"), o2, r2, a2) + "px";
  }
  function at(e2, t2, n2, r2, i2) {
    return new at.prototype.init(e2, t2, n2, r2, i2);
  }
  ce.extend({ cssHooks: { opacity: { get: function(e2, t2) {
    if (t2) {
      var n2 = Ge(e2, "opacity");
      return "" === n2 ? "1" : n2;
    }
  } } }, cssNumber: { animationIterationCount: true, aspectRatio: true, borderImageSlice: true, columnCount: true, flexGrow: true, flexShrink: true, fontWeight: true, gridArea: true, gridColumn: true, gridColumnEnd: true, gridColumnStart: true, gridRow: true, gridRowEnd: true, gridRowStart: true, lineHeight: true, opacity: true, order: true, orphans: true, scale: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeMiterlimit: true, strokeOpacity: true }, cssProps: {}, style: function(e2, t2, n2, r2) {
    if (e2 && 3 !== e2.nodeType && 8 !== e2.nodeType && e2.style) {
      var i2, o2, a2, s2 = F(t2), u2 = ze.test(t2), l2 = e2.style;
      if (u2 || (t2 = Ze(s2)), a2 = ce.cssHooks[t2] || ce.cssHooks[s2], void 0 === n2) return a2 && "get" in a2 && void 0 !== (i2 = a2.get(e2, false, r2)) ? i2 : l2[t2];
      "string" === (o2 = typeof n2) && (i2 = Y.exec(n2)) && i2[1] && (n2 = te(e2, t2, i2), o2 = "number"), null != n2 && n2 == n2 && ("number" !== o2 || u2 || (n2 += i2 && i2[3] || (ce.cssNumber[s2] ? "" : "px")), le.clearCloneStyle || "" !== n2 || 0 !== t2.indexOf("background") || (l2[t2] = "inherit"), a2 && "set" in a2 && void 0 === (n2 = a2.set(e2, n2, r2)) || (u2 ? l2.setProperty(t2, n2) : l2[t2] = n2));
    }
  }, css: function(e2, t2, n2, r2) {
    var i2, o2, a2, s2 = F(t2);
    return ze.test(t2) || (t2 = Ze(s2)), (a2 = ce.cssHooks[t2] || ce.cssHooks[s2]) && "get" in a2 && (i2 = a2.get(e2, true, n2)), void 0 === i2 && (i2 = Ge(e2, t2, r2)), "normal" === i2 && t2 in nt && (i2 = nt[t2]), "" === n2 || n2 ? (o2 = parseFloat(i2), true === n2 || isFinite(o2) ? o2 || 0 : i2) : i2;
  } }), ce.each(["height", "width"], function(e2, u2) {
    ce.cssHooks[u2] = { get: function(e3, t2, n2) {
      if (t2) return !et.test(ce.css(e3, "display")) || e3.getClientRects().length && e3.getBoundingClientRect().width ? ot(e3, u2, n2) : Ue(e3, tt, function() {
        return ot(e3, u2, n2);
      });
    }, set: function(e3, t2, n2) {
      var r2, i2 = Xe(e3), o2 = !le.scrollboxSize() && "absolute" === i2.position, a2 = (o2 || n2) && "border-box" === ce.css(e3, "boxSizing", false, i2), s2 = n2 ? it(e3, u2, n2, a2, i2) : 0;
      return a2 && o2 && (s2 -= Math.ceil(e3["offset" + u2[0].toUpperCase() + u2.slice(1)] - parseFloat(i2[u2]) - it(e3, u2, "border", false, i2) - 0.5)), s2 && (r2 = Y.exec(t2)) && "px" !== (r2[3] || "px") && (e3.style[u2] = t2, t2 = ce.css(e3, u2)), rt(0, t2, s2);
    } };
  }), ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function(e2, t2) {
    if (t2) return (parseFloat(Ge(e2, "marginLeft")) || e2.getBoundingClientRect().left - Ue(e2, { marginLeft: 0 }, function() {
      return e2.getBoundingClientRect().left;
    })) + "px";
  }), ce.each({ margin: "", padding: "", border: "Width" }, function(i2, o2) {
    ce.cssHooks[i2 + o2] = { expand: function(e2) {
      for (var t2 = 0, n2 = {}, r2 = "string" == typeof e2 ? e2.split(" ") : [e2]; t2 < 4; t2++) n2[i2 + Q[t2] + o2] = r2[t2] || r2[t2 - 2] || r2[0];
      return n2;
    } }, "margin" !== i2 && (ce.cssHooks[i2 + o2].set = rt);
  }), ce.fn.extend({ css: function(e2, t2) {
    return M(this, function(e3, t3, n2) {
      var r2, i2, o2 = {}, a2 = 0;
      if (Array.isArray(t3)) {
        for (r2 = Xe(e3), i2 = t3.length; a2 < i2; a2++) o2[t3[a2]] = ce.css(e3, t3[a2], false, r2);
        return o2;
      }
      return void 0 !== n2 ? ce.style(e3, t3, n2) : ce.css(e3, t3);
    }, e2, t2, 1 < arguments.length);
  } }), ((ce.Tween = at).prototype = { constructor: at, init: function(e2, t2, n2, r2, i2, o2) {
    this.elem = e2, this.prop = n2, this.easing = i2 || ce.easing._default, this.options = t2, this.start = this.now = this.cur(), this.end = r2, this.unit = o2 || (ce.cssNumber[n2] ? "" : "px");
  }, cur: function() {
    var e2 = at.propHooks[this.prop];
    return e2 && e2.get ? e2.get(this) : at.propHooks._default.get(this);
  }, run: function(e2) {
    var t2, n2 = at.propHooks[this.prop];
    return this.options.duration ? this.pos = t2 = ce.easing[this.easing](e2, this.options.duration * e2, 0, 1, this.options.duration) : this.pos = t2 = e2, this.now = (this.end - this.start) * t2 + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n2 && n2.set ? n2.set(this) : at.propHooks._default.set(this), this;
  } }).init.prototype = at.prototype, (at.propHooks = { _default: { get: function(e2) {
    var t2;
    return 1 !== e2.elem.nodeType || null != e2.elem[e2.prop] && null == e2.elem.style[e2.prop] ? e2.elem[e2.prop] : (t2 = ce.css(e2.elem, e2.prop, "")) && "auto" !== t2 ? t2 : 0;
  }, set: function(e2) {
    ce.fx.step[e2.prop] ? ce.fx.step[e2.prop](e2) : 1 !== e2.elem.nodeType || !ce.cssHooks[e2.prop] && null == e2.elem.style[Ze(e2.prop)] ? e2.elem[e2.prop] = e2.now : ce.style(e2.elem, e2.prop, e2.now + e2.unit);
  } } }).scrollTop = at.propHooks.scrollLeft = { set: function(e2) {
    e2.elem.nodeType && e2.elem.parentNode && (e2.elem[e2.prop] = e2.now);
  } }, ce.easing = { linear: function(e2) {
    return e2;
  }, swing: function(e2) {
    return 0.5 - Math.cos(e2 * Math.PI) / 2;
  }, _default: "swing" }, ce.fx = at.prototype.init, ce.fx.step = {};
  var st, ut, lt, ct, ft = /^(?:toggle|show|hide)$/, pt = /queueHooks$/;
  function dt() {
    ut && (false === C.hidden && ie.requestAnimationFrame ? ie.requestAnimationFrame(dt) : ie.setTimeout(dt, ce.fx.interval), ce.fx.tick());
  }
  function ht() {
    return ie.setTimeout(function() {
      st = void 0;
    }), st = Date.now();
  }
  function gt(e2, t2) {
    var n2, r2 = 0, i2 = { height: e2 };
    for (t2 = t2 ? 1 : 0; r2 < 4; r2 += 2 - t2) i2["margin" + (n2 = Q[r2])] = i2["padding" + n2] = e2;
    return t2 && (i2.opacity = i2.width = e2), i2;
  }
  function vt(e2, t2, n2) {
    for (var r2, i2 = (yt.tweeners[t2] || []).concat(yt.tweeners["*"]), o2 = 0, a2 = i2.length; o2 < a2; o2++) if (r2 = i2[o2].call(n2, t2, e2)) return r2;
  }
  function yt(o2, e2, t2) {
    var n2, a2, r2 = 0, i2 = yt.prefilters.length, s2 = ce.Deferred().always(function() {
      delete u2.elem;
    }), u2 = function() {
      if (a2) return false;
      for (var e3 = st || ht(), t3 = Math.max(0, l2.startTime + l2.duration - e3), n3 = 1 - (t3 / l2.duration || 0), r3 = 0, i3 = l2.tweens.length; r3 < i3; r3++) l2.tweens[r3].run(n3);
      return s2.notifyWith(o2, [l2, n3, t3]), n3 < 1 && i3 ? t3 : (i3 || s2.notifyWith(o2, [l2, 1, 0]), s2.resolveWith(o2, [l2]), false);
    }, l2 = s2.promise({ elem: o2, props: ce.extend({}, e2), opts: ce.extend(true, { specialEasing: {}, easing: ce.easing._default }, t2), originalProperties: e2, originalOptions: t2, startTime: st || ht(), duration: t2.duration, tweens: [], createTween: function(e3, t3) {
      var n3 = ce.Tween(o2, l2.opts, e3, t3, l2.opts.specialEasing[e3] || l2.opts.easing);
      return l2.tweens.push(n3), n3;
    }, stop: function(e3) {
      var t3 = 0, n3 = e3 ? l2.tweens.length : 0;
      if (a2) return this;
      for (a2 = true; t3 < n3; t3++) l2.tweens[t3].run(1);
      return e3 ? (s2.notifyWith(o2, [l2, 1, 0]), s2.resolveWith(o2, [l2, e3])) : s2.rejectWith(o2, [l2, e3]), this;
    } }), c2 = l2.props;
    for (!function(e3, t3) {
      var n3, r3, i3, o3, a3;
      for (n3 in e3) if (i3 = t3[r3 = F(n3)], o3 = e3[n3], Array.isArray(o3) && (i3 = o3[1], o3 = e3[n3] = o3[0]), n3 !== r3 && (e3[r3] = o3, delete e3[n3]), (a3 = ce.cssHooks[r3]) && "expand" in a3) for (n3 in o3 = a3.expand(o3), delete e3[r3], o3) n3 in e3 || (e3[n3] = o3[n3], t3[n3] = i3);
      else t3[r3] = i3;
    }(c2, l2.opts.specialEasing); r2 < i2; r2++) if (n2 = yt.prefilters[r2].call(l2, o2, c2, l2.opts)) return v(n2.stop) && (ce._queueHooks(l2.elem, l2.opts.queue).stop = n2.stop.bind(n2)), n2;
    return ce.map(c2, vt, l2), v(l2.opts.start) && l2.opts.start.call(o2, l2), l2.progress(l2.opts.progress).done(l2.opts.done, l2.opts.complete).fail(l2.opts.fail).always(l2.opts.always), ce.fx.timer(ce.extend(u2, { elem: o2, anim: l2, queue: l2.opts.queue })), l2;
  }
  ce.Animation = ce.extend(yt, { tweeners: { "*": [function(e2, t2) {
    var n2 = this.createTween(e2, t2);
    return te(n2.elem, e2, Y.exec(t2), n2), n2;
  }] }, tweener: function(e2, t2) {
    v(e2) ? (t2 = e2, e2 = ["*"]) : e2 = e2.match(D);
    for (var n2, r2 = 0, i2 = e2.length; r2 < i2; r2++) n2 = e2[r2], yt.tweeners[n2] = yt.tweeners[n2] || [], yt.tweeners[n2].unshift(t2);
  }, prefilters: [function(e2, t2, n2) {
    var r2, i2, o2, a2, s2, u2, l2, c2, f2 = "width" in t2 || "height" in t2, p2 = this, d2 = {}, h2 = e2.style, g2 = e2.nodeType && ee(e2), v2 = _.get(e2, "fxshow");
    for (r2 in n2.queue || (null == (a2 = ce._queueHooks(e2, "fx")).unqueued && (a2.unqueued = 0, s2 = a2.empty.fire, a2.empty.fire = function() {
      a2.unqueued || s2();
    }), a2.unqueued++, p2.always(function() {
      p2.always(function() {
        a2.unqueued--, ce.queue(e2, "fx").length || a2.empty.fire();
      });
    })), t2) if (i2 = t2[r2], ft.test(i2)) {
      if (delete t2[r2], o2 = o2 || "toggle" === i2, i2 === (g2 ? "hide" : "show")) {
        if ("show" !== i2 || !v2 || void 0 === v2[r2]) continue;
        g2 = true;
      }
      d2[r2] = v2 && v2[r2] || ce.style(e2, r2);
    }
    if ((u2 = !ce.isEmptyObject(t2)) || !ce.isEmptyObject(d2)) for (r2 in f2 && 1 === e2.nodeType && (n2.overflow = [h2.overflow, h2.overflowX, h2.overflowY], null == (l2 = v2 && v2.display) && (l2 = _.get(e2, "display")), "none" === (c2 = ce.css(e2, "display")) && (l2 ? c2 = l2 : (re([e2], true), l2 = e2.style.display || l2, c2 = ce.css(e2, "display"), re([e2]))), ("inline" === c2 || "inline-block" === c2 && null != l2) && "none" === ce.css(e2, "float") && (u2 || (p2.done(function() {
      h2.display = l2;
    }), null == l2 && (c2 = h2.display, l2 = "none" === c2 ? "" : c2)), h2.display = "inline-block")), n2.overflow && (h2.overflow = "hidden", p2.always(function() {
      h2.overflow = n2.overflow[0], h2.overflowX = n2.overflow[1], h2.overflowY = n2.overflow[2];
    })), u2 = false, d2) u2 || (v2 ? "hidden" in v2 && (g2 = v2.hidden) : v2 = _.access(e2, "fxshow", { display: l2 }), o2 && (v2.hidden = !g2), g2 && re([e2], true), p2.done(function() {
      for (r2 in g2 || re([e2]), _.remove(e2, "fxshow"), d2) ce.style(e2, r2, d2[r2]);
    })), u2 = vt(g2 ? v2[r2] : 0, r2, p2), r2 in v2 || (v2[r2] = u2.start, g2 && (u2.end = u2.start, u2.start = 0));
  }], prefilter: function(e2, t2) {
    t2 ? yt.prefilters.unshift(e2) : yt.prefilters.push(e2);
  } }), ce.speed = function(e2, t2, n2) {
    var r2 = e2 && "object" == typeof e2 ? ce.extend({}, e2) : { complete: n2 || !n2 && t2 || v(e2) && e2, duration: e2, easing: n2 && t2 || t2 && !v(t2) && t2 };
    return ce.fx.off ? r2.duration = 0 : "number" != typeof r2.duration && (r2.duration in ce.fx.speeds ? r2.duration = ce.fx.speeds[r2.duration] : r2.duration = ce.fx.speeds._default), null != r2.queue && true !== r2.queue || (r2.queue = "fx"), r2.old = r2.complete, r2.complete = function() {
      v(r2.old) && r2.old.call(this), r2.queue && ce.dequeue(this, r2.queue);
    }, r2;
  }, ce.fn.extend({ fadeTo: function(e2, t2, n2, r2) {
    return this.filter(ee).css("opacity", 0).show().end().animate({ opacity: t2 }, e2, n2, r2);
  }, animate: function(t2, e2, n2, r2) {
    var i2 = ce.isEmptyObject(t2), o2 = ce.speed(e2, n2, r2), a2 = function() {
      var e3 = yt(this, ce.extend({}, t2), o2);
      (i2 || _.get(this, "finish")) && e3.stop(true);
    };
    return a2.finish = a2, i2 || false === o2.queue ? this.each(a2) : this.queue(o2.queue, a2);
  }, stop: function(i2, e2, o2) {
    var a2 = function(e3) {
      var t2 = e3.stop;
      delete e3.stop, t2(o2);
    };
    return "string" != typeof i2 && (o2 = e2, e2 = i2, i2 = void 0), e2 && this.queue(i2 || "fx", []), this.each(function() {
      var e3 = true, t2 = null != i2 && i2 + "queueHooks", n2 = ce.timers, r2 = _.get(this);
      if (t2) r2[t2] && r2[t2].stop && a2(r2[t2]);
      else for (t2 in r2) r2[t2] && r2[t2].stop && pt.test(t2) && a2(r2[t2]);
      for (t2 = n2.length; t2--; ) n2[t2].elem !== this || null != i2 && n2[t2].queue !== i2 || (n2[t2].anim.stop(o2), e3 = false, n2.splice(t2, 1));
      !e3 && o2 || ce.dequeue(this, i2);
    });
  }, finish: function(a2) {
    return false !== a2 && (a2 = a2 || "fx"), this.each(function() {
      var e2, t2 = _.get(this), n2 = t2[a2 + "queue"], r2 = t2[a2 + "queueHooks"], i2 = ce.timers, o2 = n2 ? n2.length : 0;
      for (t2.finish = true, ce.queue(this, a2, []), r2 && r2.stop && r2.stop.call(this, true), e2 = i2.length; e2--; ) i2[e2].elem === this && i2[e2].queue === a2 && (i2[e2].anim.stop(true), i2.splice(e2, 1));
      for (e2 = 0; e2 < o2; e2++) n2[e2] && n2[e2].finish && n2[e2].finish.call(this);
      delete t2.finish;
    });
  } }), ce.each(["toggle", "show", "hide"], function(e2, r2) {
    var i2 = ce.fn[r2];
    ce.fn[r2] = function(e3, t2, n2) {
      return null == e3 || "boolean" == typeof e3 ? i2.apply(this, arguments) : this.animate(gt(r2, true), e3, t2, n2);
    };
  }), ce.each({ slideDown: gt("show"), slideUp: gt("hide"), slideToggle: gt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e2, r2) {
    ce.fn[e2] = function(e3, t2, n2) {
      return this.animate(r2, e3, t2, n2);
    };
  }), ce.timers = [], ce.fx.tick = function() {
    var e2, t2 = 0, n2 = ce.timers;
    for (st = Date.now(); t2 < n2.length; t2++) (e2 = n2[t2])() || n2[t2] !== e2 || n2.splice(t2--, 1);
    n2.length || ce.fx.stop(), st = void 0;
  }, ce.fx.timer = function(e2) {
    ce.timers.push(e2), ce.fx.start();
  }, ce.fx.interval = 13, ce.fx.start = function() {
    ut || (ut = true, dt());
  }, ce.fx.stop = function() {
    ut = null;
  }, ce.fx.speeds = { slow: 600, fast: 200, _default: 400 }, ce.fn.delay = function(r2, e2) {
    return r2 = ce.fx && ce.fx.speeds[r2] || r2, e2 = e2 || "fx", this.queue(e2, function(e3, t2) {
      var n2 = ie.setTimeout(e3, r2);
      t2.stop = function() {
        ie.clearTimeout(n2);
      };
    });
  }, lt = C.createElement("input"), ct = C.createElement("select").appendChild(C.createElement("option")), lt.type = "checkbox", le.checkOn = "" !== lt.value, le.optSelected = ct.selected, (lt = C.createElement("input")).value = "t", lt.type = "radio", le.radioValue = "t" === lt.value;
  var mt, xt = ce.expr.attrHandle;
  ce.fn.extend({ attr: function(e2, t2) {
    return M(this, ce.attr, e2, t2, 1 < arguments.length);
  }, removeAttr: function(e2) {
    return this.each(function() {
      ce.removeAttr(this, e2);
    });
  } }), ce.extend({ attr: function(e2, t2, n2) {
    var r2, i2, o2 = e2.nodeType;
    if (3 !== o2 && 8 !== o2 && 2 !== o2) return "undefined" == typeof e2.getAttribute ? ce.prop(e2, t2, n2) : (1 === o2 && ce.isXMLDoc(e2) || (i2 = ce.attrHooks[t2.toLowerCase()] || (ce.expr.match.bool.test(t2) ? mt : void 0)), void 0 !== n2 ? null === n2 ? void ce.removeAttr(e2, t2) : i2 && "set" in i2 && void 0 !== (r2 = i2.set(e2, n2, t2)) ? r2 : (e2.setAttribute(t2, n2 + ""), n2) : i2 && "get" in i2 && null !== (r2 = i2.get(e2, t2)) ? r2 : null == (r2 = ce.find.attr(e2, t2)) ? void 0 : r2);
  }, attrHooks: { type: { set: function(e2, t2) {
    if (!le.radioValue && "radio" === t2 && fe(e2, "input")) {
      var n2 = e2.value;
      return e2.setAttribute("type", t2), n2 && (e2.value = n2), t2;
    }
  } } }, removeAttr: function(e2, t2) {
    var n2, r2 = 0, i2 = t2 && t2.match(D);
    if (i2 && 1 === e2.nodeType) while (n2 = i2[r2++]) e2.removeAttribute(n2);
  } }), mt = { set: function(e2, t2, n2) {
    return false === t2 ? ce.removeAttr(e2, n2) : e2.setAttribute(n2, n2), n2;
  } }, ce.each(ce.expr.match.bool.source.match(/\w+/g), function(e2, t2) {
    var a2 = xt[t2] || ce.find.attr;
    xt[t2] = function(e3, t3, n2) {
      var r2, i2, o2 = t3.toLowerCase();
      return n2 || (i2 = xt[o2], xt[o2] = r2, r2 = null != a2(e3, t3, n2) ? o2 : null, xt[o2] = i2), r2;
    };
  });
  var bt = /^(?:input|select|textarea|button)$/i, wt = /^(?:a|area)$/i;
  function Tt(e2) {
    return (e2.match(D) || []).join(" ");
  }
  function Ct(e2) {
    return e2.getAttribute && e2.getAttribute("class") || "";
  }
  function kt(e2) {
    return Array.isArray(e2) ? e2 : "string" == typeof e2 && e2.match(D) || [];
  }
  ce.fn.extend({ prop: function(e2, t2) {
    return M(this, ce.prop, e2, t2, 1 < arguments.length);
  }, removeProp: function(e2) {
    return this.each(function() {
      delete this[ce.propFix[e2] || e2];
    });
  } }), ce.extend({ prop: function(e2, t2, n2) {
    var r2, i2, o2 = e2.nodeType;
    if (3 !== o2 && 8 !== o2 && 2 !== o2) return 1 === o2 && ce.isXMLDoc(e2) || (t2 = ce.propFix[t2] || t2, i2 = ce.propHooks[t2]), void 0 !== n2 ? i2 && "set" in i2 && void 0 !== (r2 = i2.set(e2, n2, t2)) ? r2 : e2[t2] = n2 : i2 && "get" in i2 && null !== (r2 = i2.get(e2, t2)) ? r2 : e2[t2];
  }, propHooks: { tabIndex: { get: function(e2) {
    var t2 = ce.find.attr(e2, "tabindex");
    return t2 ? parseInt(t2, 10) : bt.test(e2.nodeName) || wt.test(e2.nodeName) && e2.href ? 0 : -1;
  } } }, propFix: { "for": "htmlFor", "class": "className" } }), le.optSelected || (ce.propHooks.selected = { get: function(e2) {
    var t2 = e2.parentNode;
    return t2 && t2.parentNode && t2.parentNode.selectedIndex, null;
  }, set: function(e2) {
    var t2 = e2.parentNode;
    t2 && (t2.selectedIndex, t2.parentNode && t2.parentNode.selectedIndex);
  } }), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    ce.propFix[this.toLowerCase()] = this;
  }), ce.fn.extend({ addClass: function(t2) {
    var e2, n2, r2, i2, o2, a2;
    return v(t2) ? this.each(function(e3) {
      ce(this).addClass(t2.call(this, e3, Ct(this)));
    }) : (e2 = kt(t2)).length ? this.each(function() {
      if (r2 = Ct(this), n2 = 1 === this.nodeType && " " + Tt(r2) + " ") {
        for (o2 = 0; o2 < e2.length; o2++) i2 = e2[o2], n2.indexOf(" " + i2 + " ") < 0 && (n2 += i2 + " ");
        a2 = Tt(n2), r2 !== a2 && this.setAttribute("class", a2);
      }
    }) : this;
  }, removeClass: function(t2) {
    var e2, n2, r2, i2, o2, a2;
    return v(t2) ? this.each(function(e3) {
      ce(this).removeClass(t2.call(this, e3, Ct(this)));
    }) : arguments.length ? (e2 = kt(t2)).length ? this.each(function() {
      if (r2 = Ct(this), n2 = 1 === this.nodeType && " " + Tt(r2) + " ") {
        for (o2 = 0; o2 < e2.length; o2++) {
          i2 = e2[o2];
          while (-1 < n2.indexOf(" " + i2 + " ")) n2 = n2.replace(" " + i2 + " ", " ");
        }
        a2 = Tt(n2), r2 !== a2 && this.setAttribute("class", a2);
      }
    }) : this : this.attr("class", "");
  }, toggleClass: function(t2, n2) {
    var e2, r2, i2, o2, a2 = typeof t2, s2 = "string" === a2 || Array.isArray(t2);
    return v(t2) ? this.each(function(e3) {
      ce(this).toggleClass(t2.call(this, e3, Ct(this), n2), n2);
    }) : "boolean" == typeof n2 && s2 ? n2 ? this.addClass(t2) : this.removeClass(t2) : (e2 = kt(t2), this.each(function() {
      if (s2) for (o2 = ce(this), i2 = 0; i2 < e2.length; i2++) r2 = e2[i2], o2.hasClass(r2) ? o2.removeClass(r2) : o2.addClass(r2);
      else void 0 !== t2 && "boolean" !== a2 || ((r2 = Ct(this)) && _.set(this, "__className__", r2), this.setAttribute && this.setAttribute("class", r2 || false === t2 ? "" : _.get(this, "__className__") || ""));
    }));
  }, hasClass: function(e2) {
    var t2, n2, r2 = 0;
    t2 = " " + e2 + " ";
    while (n2 = this[r2++]) if (1 === n2.nodeType && -1 < (" " + Tt(Ct(n2)) + " ").indexOf(t2)) return true;
    return false;
  } });
  var St = /\r/g;
  ce.fn.extend({ val: function(n2) {
    var r2, e2, i2, t2 = this[0];
    return arguments.length ? (i2 = v(n2), this.each(function(e3) {
      var t3;
      1 === this.nodeType && (null == (t3 = i2 ? n2.call(this, e3, ce(this).val()) : n2) ? t3 = "" : "number" == typeof t3 ? t3 += "" : Array.isArray(t3) && (t3 = ce.map(t3, function(e4) {
        return null == e4 ? "" : e4 + "";
      })), (r2 = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set" in r2 && void 0 !== r2.set(this, t3, "value") || (this.value = t3));
    })) : t2 ? (r2 = ce.valHooks[t2.type] || ce.valHooks[t2.nodeName.toLowerCase()]) && "get" in r2 && void 0 !== (e2 = r2.get(t2, "value")) ? e2 : "string" == typeof (e2 = t2.value) ? e2.replace(St, "") : null == e2 ? "" : e2 : void 0;
  } }), ce.extend({ valHooks: { option: { get: function(e2) {
    var t2 = ce.find.attr(e2, "value");
    return null != t2 ? t2 : Tt(ce.text(e2));
  } }, select: { get: function(e2) {
    var t2, n2, r2, i2 = e2.options, o2 = e2.selectedIndex, a2 = "select-one" === e2.type, s2 = a2 ? null : [], u2 = a2 ? o2 + 1 : i2.length;
    for (r2 = o2 < 0 ? u2 : a2 ? o2 : 0; r2 < u2; r2++) if (((n2 = i2[r2]).selected || r2 === o2) && !n2.disabled && (!n2.parentNode.disabled || !fe(n2.parentNode, "optgroup"))) {
      if (t2 = ce(n2).val(), a2) return t2;
      s2.push(t2);
    }
    return s2;
  }, set: function(e2, t2) {
    var n2, r2, i2 = e2.options, o2 = ce.makeArray(t2), a2 = i2.length;
    while (a2--) ((r2 = i2[a2]).selected = -1 < ce.inArray(ce.valHooks.option.get(r2), o2)) && (n2 = true);
    return n2 || (e2.selectedIndex = -1), o2;
  } } } }), ce.each(["radio", "checkbox"], function() {
    ce.valHooks[this] = { set: function(e2, t2) {
      if (Array.isArray(t2)) return e2.checked = -1 < ce.inArray(ce(e2).val(), t2);
    } }, le.checkOn || (ce.valHooks[this].get = function(e2) {
      return null === e2.getAttribute("value") ? "on" : e2.value;
    });
  });
  var Et = ie.location, jt = { guid: Date.now() }, At = /\?/;
  ce.parseXML = function(e2) {
    var t2, n2;
    if (!e2 || "string" != typeof e2) return null;
    try {
      t2 = new ie.DOMParser().parseFromString(e2, "text/xml");
    } catch (e3) {
    }
    return n2 = t2 && t2.getElementsByTagName("parsererror")[0], t2 && !n2 || ce.error("Invalid XML: " + (n2 ? ce.map(n2.childNodes, function(e3) {
      return e3.textContent;
    }).join("\n") : e2)), t2;
  };
  var Dt = /^(?:focusinfocus|focusoutblur)$/, Nt = function(e2) {
    e2.stopPropagation();
  };
  ce.extend(ce.event, { trigger: function(e2, t2, n2, r2) {
    var i2, o2, a2, s2, u2, l2, c2, f2, p2 = [n2 || C], d2 = ue.call(e2, "type") ? e2.type : e2, h2 = ue.call(e2, "namespace") ? e2.namespace.split(".") : [];
    if (o2 = f2 = a2 = n2 = n2 || C, 3 !== n2.nodeType && 8 !== n2.nodeType && !Dt.test(d2 + ce.event.triggered) && (-1 < d2.indexOf(".") && (d2 = (h2 = d2.split(".")).shift(), h2.sort()), u2 = d2.indexOf(":") < 0 && "on" + d2, (e2 = e2[ce.expando] ? e2 : new ce.Event(d2, "object" == typeof e2 && e2)).isTrigger = r2 ? 2 : 3, e2.namespace = h2.join("."), e2.rnamespace = e2.namespace ? new RegExp("(^|\\.)" + h2.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e2.result = void 0, e2.target || (e2.target = n2), t2 = null == t2 ? [e2] : ce.makeArray(t2, [e2]), c2 = ce.event.special[d2] || {}, r2 || !c2.trigger || false !== c2.trigger.apply(n2, t2))) {
      if (!r2 && !c2.noBubble && !y(n2)) {
        for (s2 = c2.delegateType || d2, Dt.test(s2 + d2) || (o2 = o2.parentNode); o2; o2 = o2.parentNode) p2.push(o2), a2 = o2;
        a2 === (n2.ownerDocument || C) && p2.push(a2.defaultView || a2.parentWindow || ie);
      }
      i2 = 0;
      while ((o2 = p2[i2++]) && !e2.isPropagationStopped()) f2 = o2, e2.type = 1 < i2 ? s2 : c2.bindType || d2, (l2 = (_.get(o2, "events") || /* @__PURE__ */ Object.create(null))[e2.type] && _.get(o2, "handle")) && l2.apply(o2, t2), (l2 = u2 && o2[u2]) && l2.apply && $(o2) && (e2.result = l2.apply(o2, t2), false === e2.result && e2.preventDefault());
      return e2.type = d2, r2 || e2.isDefaultPrevented() || c2._default && false !== c2._default.apply(p2.pop(), t2) || !$(n2) || u2 && v(n2[d2]) && !y(n2) && ((a2 = n2[u2]) && (n2[u2] = null), ce.event.triggered = d2, e2.isPropagationStopped() && f2.addEventListener(d2, Nt), n2[d2](), e2.isPropagationStopped() && f2.removeEventListener(d2, Nt), ce.event.triggered = void 0, a2 && (n2[u2] = a2)), e2.result;
    }
  }, simulate: function(e2, t2, n2) {
    var r2 = ce.extend(new ce.Event(), n2, { type: e2, isSimulated: true });
    ce.event.trigger(r2, null, t2);
  } }), ce.fn.extend({ trigger: function(e2, t2) {
    return this.each(function() {
      ce.event.trigger(e2, t2, this);
    });
  }, triggerHandler: function(e2, t2) {
    var n2 = this[0];
    if (n2) return ce.event.trigger(e2, t2, n2, true);
  } });
  var qt = /\[\]$/, Lt = /\r?\n/g, Ht = /^(?:submit|button|image|reset|file)$/i, Ot = /^(?:input|select|textarea|keygen)/i;
  function Pt(n2, e2, r2, i2) {
    var t2;
    if (Array.isArray(e2)) ce.each(e2, function(e3, t3) {
      r2 || qt.test(n2) ? i2(n2, t3) : Pt(n2 + "[" + ("object" == typeof t3 && null != t3 ? e3 : "") + "]", t3, r2, i2);
    });
    else if (r2 || "object" !== x(e2)) i2(n2, e2);
    else for (t2 in e2) Pt(n2 + "[" + t2 + "]", e2[t2], r2, i2);
  }
  ce.param = function(e2, t2) {
    var n2, r2 = [], i2 = function(e3, t3) {
      var n3 = v(t3) ? t3() : t3;
      r2[r2.length] = encodeURIComponent(e3) + "=" + encodeURIComponent(null == n3 ? "" : n3);
    };
    if (null == e2) return "";
    if (Array.isArray(e2) || e2.jquery && !ce.isPlainObject(e2)) ce.each(e2, function() {
      i2(this.name, this.value);
    });
    else for (n2 in e2) Pt(n2, e2[n2], t2, i2);
    return r2.join("&");
  }, ce.fn.extend({ serialize: function() {
    return ce.param(this.serializeArray());
  }, serializeArray: function() {
    return this.map(function() {
      var e2 = ce.prop(this, "elements");
      return e2 ? ce.makeArray(e2) : this;
    }).filter(function() {
      var e2 = this.type;
      return this.name && !ce(this).is(":disabled") && Ot.test(this.nodeName) && !Ht.test(e2) && (this.checked || !we.test(e2));
    }).map(function(e2, t2) {
      var n2 = ce(this).val();
      return null == n2 ? null : Array.isArray(n2) ? ce.map(n2, function(e3) {
        return { name: t2.name, value: e3.replace(Lt, "\r\n") };
      }) : { name: t2.name, value: n2.replace(Lt, "\r\n") };
    }).get();
  } });
  var Mt = /%20/g, Rt = /#.*$/, It = /([?&])_=[^&]*/, Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ft = /^(?:GET|HEAD)$/, $t = /^\/\//, Bt = {}, _t = {}, zt = "*/".concat("*"), Xt = C.createElement("a");
  function Ut(o2) {
    return function(e2, t2) {
      "string" != typeof e2 && (t2 = e2, e2 = "*");
      var n2, r2 = 0, i2 = e2.toLowerCase().match(D) || [];
      if (v(t2)) while (n2 = i2[r2++]) "+" === n2[0] ? (n2 = n2.slice(1) || "*", (o2[n2] = o2[n2] || []).unshift(t2)) : (o2[n2] = o2[n2] || []).push(t2);
    };
  }
  function Vt(t2, i2, o2, a2) {
    var s2 = {}, u2 = t2 === _t;
    function l2(e2) {
      var r2;
      return s2[e2] = true, ce.each(t2[e2] || [], function(e3, t3) {
        var n2 = t3(i2, o2, a2);
        return "string" != typeof n2 || u2 || s2[n2] ? u2 ? !(r2 = n2) : void 0 : (i2.dataTypes.unshift(n2), l2(n2), false);
      }), r2;
    }
    return l2(i2.dataTypes[0]) || !s2["*"] && l2("*");
  }
  function Gt(e2, t2) {
    var n2, r2, i2 = ce.ajaxSettings.flatOptions || {};
    for (n2 in t2) void 0 !== t2[n2] && ((i2[n2] ? e2 : r2 || (r2 = {}))[n2] = t2[n2]);
    return r2 && ce.extend(true, e2, r2), e2;
  }
  Xt.href = Et.href, ce.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Et.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol), global: true, processData: true, async: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": zt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": true, "text json": JSON.parse, "text xml": ce.parseXML }, flatOptions: { url: true, context: true } }, ajaxSetup: function(e2, t2) {
    return t2 ? Gt(Gt(e2, ce.ajaxSettings), t2) : Gt(ce.ajaxSettings, e2);
  }, ajaxPrefilter: Ut(Bt), ajaxTransport: Ut(_t), ajax: function(e2, t2) {
    "object" == typeof e2 && (t2 = e2, e2 = void 0), t2 = t2 || {};
    var c2, f2, p2, n2, d2, r2, h2, g2, i2, o2, v2 = ce.ajaxSetup({}, t2), y2 = v2.context || v2, m2 = v2.context && (y2.nodeType || y2.jquery) ? ce(y2) : ce.event, x2 = ce.Deferred(), b2 = ce.Callbacks("once memory"), w2 = v2.statusCode || {}, a2 = {}, s2 = {}, u2 = "canceled", T2 = { readyState: 0, getResponseHeader: function(e3) {
      var t3;
      if (h2) {
        if (!n2) {
          n2 = {};
          while (t3 = Wt.exec(p2)) n2[t3[1].toLowerCase() + " "] = (n2[t3[1].toLowerCase() + " "] || []).concat(t3[2]);
        }
        t3 = n2[e3.toLowerCase() + " "];
      }
      return null == t3 ? null : t3.join(", ");
    }, getAllResponseHeaders: function() {
      return h2 ? p2 : null;
    }, setRequestHeader: function(e3, t3) {
      return null == h2 && (e3 = s2[e3.toLowerCase()] = s2[e3.toLowerCase()] || e3, a2[e3] = t3), this;
    }, overrideMimeType: function(e3) {
      return null == h2 && (v2.mimeType = e3), this;
    }, statusCode: function(e3) {
      var t3;
      if (e3) if (h2) T2.always(e3[T2.status]);
      else for (t3 in e3) w2[t3] = [w2[t3], e3[t3]];
      return this;
    }, abort: function(e3) {
      var t3 = e3 || u2;
      return c2 && c2.abort(t3), l2(0, t3), this;
    } };
    if (x2.promise(T2), v2.url = ((e2 || v2.url || Et.href) + "").replace($t, Et.protocol + "//"), v2.type = t2.method || t2.type || v2.method || v2.type, v2.dataTypes = (v2.dataType || "*").toLowerCase().match(D) || [""], null == v2.crossDomain) {
      r2 = C.createElement("a");
      try {
        r2.href = v2.url, r2.href = r2.href, v2.crossDomain = Xt.protocol + "//" + Xt.host != r2.protocol + "//" + r2.host;
      } catch (e3) {
        v2.crossDomain = true;
      }
    }
    if (v2.data && v2.processData && "string" != typeof v2.data && (v2.data = ce.param(v2.data, v2.traditional)), Vt(Bt, v2, t2, T2), h2) return T2;
    for (i2 in (g2 = ce.event && v2.global) && 0 == ce.active++ && ce.event.trigger("ajaxStart"), v2.type = v2.type.toUpperCase(), v2.hasContent = !Ft.test(v2.type), f2 = v2.url.replace(Rt, ""), v2.hasContent ? v2.data && v2.processData && 0 === (v2.contentType || "").indexOf("application/x-www-form-urlencoded") && (v2.data = v2.data.replace(Mt, "+")) : (o2 = v2.url.slice(f2.length), v2.data && (v2.processData || "string" == typeof v2.data) && (f2 += (At.test(f2) ? "&" : "?") + v2.data, delete v2.data), false === v2.cache && (f2 = f2.replace(It, "$1"), o2 = (At.test(f2) ? "&" : "?") + "_=" + jt.guid++ + o2), v2.url = f2 + o2), v2.ifModified && (ce.lastModified[f2] && T2.setRequestHeader("If-Modified-Since", ce.lastModified[f2]), ce.etag[f2] && T2.setRequestHeader("If-None-Match", ce.etag[f2])), (v2.data && v2.hasContent && false !== v2.contentType || t2.contentType) && T2.setRequestHeader("Content-Type", v2.contentType), T2.setRequestHeader("Accept", v2.dataTypes[0] && v2.accepts[v2.dataTypes[0]] ? v2.accepts[v2.dataTypes[0]] + ("*" !== v2.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : v2.accepts["*"]), v2.headers) T2.setRequestHeader(i2, v2.headers[i2]);
    if (v2.beforeSend && (false === v2.beforeSend.call(y2, T2, v2) || h2)) return T2.abort();
    if (u2 = "abort", b2.add(v2.complete), T2.done(v2.success), T2.fail(v2.error), c2 = Vt(_t, v2, t2, T2)) {
      if (T2.readyState = 1, g2 && m2.trigger("ajaxSend", [T2, v2]), h2) return T2;
      v2.async && 0 < v2.timeout && (d2 = ie.setTimeout(function() {
        T2.abort("timeout");
      }, v2.timeout));
      try {
        h2 = false, c2.send(a2, l2);
      } catch (e3) {
        if (h2) throw e3;
        l2(-1, e3);
      }
    } else l2(-1, "No Transport");
    function l2(e3, t3, n3, r3) {
      var i3, o3, a3, s3, u3, l3 = t3;
      h2 || (h2 = true, d2 && ie.clearTimeout(d2), c2 = void 0, p2 = r3 || "", T2.readyState = 0 < e3 ? 4 : 0, i3 = 200 <= e3 && e3 < 300 || 304 === e3, n3 && (s3 = function(e4, t4, n4) {
        var r4, i4, o4, a4, s4 = e4.contents, u4 = e4.dataTypes;
        while ("*" === u4[0]) u4.shift(), void 0 === r4 && (r4 = e4.mimeType || t4.getResponseHeader("Content-Type"));
        if (r4) {
          for (i4 in s4) if (s4[i4] && s4[i4].test(r4)) {
            u4.unshift(i4);
            break;
          }
        }
        if (u4[0] in n4) o4 = u4[0];
        else {
          for (i4 in n4) {
            if (!u4[0] || e4.converters[i4 + " " + u4[0]]) {
              o4 = i4;
              break;
            }
            a4 || (a4 = i4);
          }
          o4 = o4 || a4;
        }
        if (o4) return o4 !== u4[0] && u4.unshift(o4), n4[o4];
      }(v2, T2, n3)), !i3 && -1 < ce.inArray("script", v2.dataTypes) && ce.inArray("json", v2.dataTypes) < 0 && (v2.converters["text script"] = function() {
      }), s3 = function(e4, t4, n4, r4) {
        var i4, o4, a4, s4, u4, l4 = {}, c3 = e4.dataTypes.slice();
        if (c3[1]) for (a4 in e4.converters) l4[a4.toLowerCase()] = e4.converters[a4];
        o4 = c3.shift();
        while (o4) if (e4.responseFields[o4] && (n4[e4.responseFields[o4]] = t4), !u4 && r4 && e4.dataFilter && (t4 = e4.dataFilter(t4, e4.dataType)), u4 = o4, o4 = c3.shift()) {
          if ("*" === o4) o4 = u4;
          else if ("*" !== u4 && u4 !== o4) {
            if (!(a4 = l4[u4 + " " + o4] || l4["* " + o4])) {
              for (i4 in l4) if ((s4 = i4.split(" "))[1] === o4 && (a4 = l4[u4 + " " + s4[0]] || l4["* " + s4[0]])) {
                true === a4 ? a4 = l4[i4] : true !== l4[i4] && (o4 = s4[0], c3.unshift(s4[1]));
                break;
              }
            }
            if (true !== a4) if (a4 && e4["throws"]) t4 = a4(t4);
            else try {
              t4 = a4(t4);
            } catch (e5) {
              return { state: "parsererror", error: a4 ? e5 : "No conversion from " + u4 + " to " + o4 };
            }
          }
        }
        return { state: "success", data: t4 };
      }(v2, s3, T2, i3), i3 ? (v2.ifModified && ((u3 = T2.getResponseHeader("Last-Modified")) && (ce.lastModified[f2] = u3), (u3 = T2.getResponseHeader("etag")) && (ce.etag[f2] = u3)), 204 === e3 || "HEAD" === v2.type ? l3 = "nocontent" : 304 === e3 ? l3 = "notmodified" : (l3 = s3.state, o3 = s3.data, i3 = !(a3 = s3.error))) : (a3 = l3, !e3 && l3 || (l3 = "error", e3 < 0 && (e3 = 0))), T2.status = e3, T2.statusText = (t3 || l3) + "", i3 ? x2.resolveWith(y2, [o3, l3, T2]) : x2.rejectWith(y2, [T2, l3, a3]), T2.statusCode(w2), w2 = void 0, g2 && m2.trigger(i3 ? "ajaxSuccess" : "ajaxError", [T2, v2, i3 ? o3 : a3]), b2.fireWith(y2, [T2, l3]), g2 && (m2.trigger("ajaxComplete", [T2, v2]), --ce.active || ce.event.trigger("ajaxStop")));
    }
    return T2;
  }, getJSON: function(e2, t2, n2) {
    return ce.get(e2, t2, n2, "json");
  }, getScript: function(e2, t2) {
    return ce.get(e2, void 0, t2, "script");
  } }), ce.each(["get", "post"], function(e2, i2) {
    ce[i2] = function(e3, t2, n2, r2) {
      return v(t2) && (r2 = r2 || n2, n2 = t2, t2 = void 0), ce.ajax(ce.extend({ url: e3, type: i2, dataType: r2, data: t2, success: n2 }, ce.isPlainObject(e3) && e3));
    };
  }), ce.ajaxPrefilter(function(e2) {
    var t2;
    for (t2 in e2.headers) "content-type" === t2.toLowerCase() && (e2.contentType = e2.headers[t2] || "");
  }), ce._evalUrl = function(e2, t2, n2) {
    return ce.ajax({ url: e2, type: "GET", dataType: "script", cache: true, async: false, global: false, converters: { "text script": function() {
    } }, dataFilter: function(e3) {
      ce.globalEval(e3, t2, n2);
    } });
  }, ce.fn.extend({ wrapAll: function(e2) {
    var t2;
    return this[0] && (v(e2) && (e2 = e2.call(this[0])), t2 = ce(e2, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && t2.insertBefore(this[0]), t2.map(function() {
      var e3 = this;
      while (e3.firstElementChild) e3 = e3.firstElementChild;
      return e3;
    }).append(this)), this;
  }, wrapInner: function(n2) {
    return v(n2) ? this.each(function(e2) {
      ce(this).wrapInner(n2.call(this, e2));
    }) : this.each(function() {
      var e2 = ce(this), t2 = e2.contents();
      t2.length ? t2.wrapAll(n2) : e2.append(n2);
    });
  }, wrap: function(t2) {
    var n2 = v(t2);
    return this.each(function(e2) {
      ce(this).wrapAll(n2 ? t2.call(this, e2) : t2);
    });
  }, unwrap: function(e2) {
    return this.parent(e2).not("body").each(function() {
      ce(this).replaceWith(this.childNodes);
    }), this;
  } }), ce.expr.pseudos.hidden = function(e2) {
    return !ce.expr.pseudos.visible(e2);
  }, ce.expr.pseudos.visible = function(e2) {
    return !!(e2.offsetWidth || e2.offsetHeight || e2.getClientRects().length);
  }, ce.ajaxSettings.xhr = function() {
    try {
      return new ie.XMLHttpRequest();
    } catch (e2) {
    }
  };
  var Yt = { 0: 200, 1223: 204 }, Qt = ce.ajaxSettings.xhr();
  le.cors = !!Qt && "withCredentials" in Qt, le.ajax = Qt = !!Qt, ce.ajaxTransport(function(i2) {
    var o2, a2;
    if (le.cors || Qt && !i2.crossDomain) return { send: function(e2, t2) {
      var n2, r2 = i2.xhr();
      if (r2.open(i2.type, i2.url, i2.async, i2.username, i2.password), i2.xhrFields) for (n2 in i2.xhrFields) r2[n2] = i2.xhrFields[n2];
      for (n2 in i2.mimeType && r2.overrideMimeType && r2.overrideMimeType(i2.mimeType), i2.crossDomain || e2["X-Requested-With"] || (e2["X-Requested-With"] = "XMLHttpRequest"), e2) r2.setRequestHeader(n2, e2[n2]);
      o2 = function(e3) {
        return function() {
          o2 && (o2 = a2 = r2.onload = r2.onerror = r2.onabort = r2.ontimeout = r2.onreadystatechange = null, "abort" === e3 ? r2.abort() : "error" === e3 ? "number" != typeof r2.status ? t2(0, "error") : t2(r2.status, r2.statusText) : t2(Yt[r2.status] || r2.status, r2.statusText, "text" !== (r2.responseType || "text") || "string" != typeof r2.responseText ? { binary: r2.response } : { text: r2.responseText }, r2.getAllResponseHeaders()));
        };
      }, r2.onload = o2(), a2 = r2.onerror = r2.ontimeout = o2("error"), void 0 !== r2.onabort ? r2.onabort = a2 : r2.onreadystatechange = function() {
        4 === r2.readyState && ie.setTimeout(function() {
          o2 && a2();
        });
      }, o2 = o2("abort");
      try {
        r2.send(i2.hasContent && i2.data || null);
      } catch (e3) {
        if (o2) throw e3;
      }
    }, abort: function() {
      o2 && o2();
    } };
  }), ce.ajaxPrefilter(function(e2) {
    e2.crossDomain && (e2.contents.script = false);
  }), ce.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e2) {
    return ce.globalEval(e2), e2;
  } } }), ce.ajaxPrefilter("script", function(e2) {
    void 0 === e2.cache && (e2.cache = false), e2.crossDomain && (e2.type = "GET");
  }), ce.ajaxTransport("script", function(n2) {
    var r2, i2;
    if (n2.crossDomain || n2.scriptAttrs) return { send: function(e2, t2) {
      r2 = ce("<script>").attr(n2.scriptAttrs || {}).prop({ charset: n2.scriptCharset, src: n2.url }).on("load error", i2 = function(e3) {
        r2.remove(), i2 = null, e3 && t2("error" === e3.type ? 404 : 200, e3.type);
      }), C.head.appendChild(r2[0]);
    }, abort: function() {
      i2 && i2();
    } };
  });
  var Jt, Kt = [], Zt = /(=)\?(?=&|$)|\?\?/;
  ce.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
    var e2 = Kt.pop() || ce.expando + "_" + jt.guid++;
    return this[e2] = true, e2;
  } }), ce.ajaxPrefilter("json jsonp", function(e2, t2, n2) {
    var r2, i2, o2, a2 = false !== e2.jsonp && (Zt.test(e2.url) ? "url" : "string" == typeof e2.data && 0 === (e2.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e2.data) && "data");
    if (a2 || "jsonp" === e2.dataTypes[0]) return r2 = e2.jsonpCallback = v(e2.jsonpCallback) ? e2.jsonpCallback() : e2.jsonpCallback, a2 ? e2[a2] = e2[a2].replace(Zt, "$1" + r2) : false !== e2.jsonp && (e2.url += (At.test(e2.url) ? "&" : "?") + e2.jsonp + "=" + r2), e2.converters["script json"] = function() {
      return o2 || ce.error(r2 + " was not called"), o2[0];
    }, e2.dataTypes[0] = "json", i2 = ie[r2], ie[r2] = function() {
      o2 = arguments;
    }, n2.always(function() {
      void 0 === i2 ? ce(ie).removeProp(r2) : ie[r2] = i2, e2[r2] && (e2.jsonpCallback = t2.jsonpCallback, Kt.push(r2)), o2 && v(i2) && i2(o2[0]), o2 = i2 = void 0;
    }), "script";
  }), le.createHTMLDocument = ((Jt = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Jt.childNodes.length), ce.parseHTML = function(e2, t2, n2) {
    return "string" != typeof e2 ? [] : ("boolean" == typeof t2 && (n2 = t2, t2 = false), t2 || (le.createHTMLDocument ? ((r2 = (t2 = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t2.head.appendChild(r2)) : t2 = C), o2 = !n2 && [], (i2 = w.exec(e2)) ? [t2.createElement(i2[1])] : (i2 = Ae([e2], t2, o2), o2 && o2.length && ce(o2).remove(), ce.merge([], i2.childNodes)));
    var r2, i2, o2;
  }, ce.fn.load = function(e2, t2, n2) {
    var r2, i2, o2, a2 = this, s2 = e2.indexOf(" ");
    return -1 < s2 && (r2 = Tt(e2.slice(s2)), e2 = e2.slice(0, s2)), v(t2) ? (n2 = t2, t2 = void 0) : t2 && "object" == typeof t2 && (i2 = "POST"), 0 < a2.length && ce.ajax({ url: e2, type: i2 || "GET", dataType: "html", data: t2 }).done(function(e3) {
      o2 = arguments, a2.html(r2 ? ce("<div>").append(ce.parseHTML(e3)).find(r2) : e3);
    }).always(n2 && function(e3, t3) {
      a2.each(function() {
        n2.apply(this, o2 || [e3.responseText, t3, e3]);
      });
    }), this;
  }, ce.expr.pseudos.animated = function(t2) {
    return ce.grep(ce.timers, function(e2) {
      return t2 === e2.elem;
    }).length;
  }, ce.offset = { setOffset: function(e2, t2, n2) {
    var r2, i2, o2, a2, s2, u2, l2 = ce.css(e2, "position"), c2 = ce(e2), f2 = {};
    "static" === l2 && (e2.style.position = "relative"), s2 = c2.offset(), o2 = ce.css(e2, "top"), u2 = ce.css(e2, "left"), ("absolute" === l2 || "fixed" === l2) && -1 < (o2 + u2).indexOf("auto") ? (a2 = (r2 = c2.position()).top, i2 = r2.left) : (a2 = parseFloat(o2) || 0, i2 = parseFloat(u2) || 0), v(t2) && (t2 = t2.call(e2, n2, ce.extend({}, s2))), null != t2.top && (f2.top = t2.top - s2.top + a2), null != t2.left && (f2.left = t2.left - s2.left + i2), "using" in t2 ? t2.using.call(e2, f2) : c2.css(f2);
  } }, ce.fn.extend({ offset: function(t2) {
    if (arguments.length) return void 0 === t2 ? this : this.each(function(e3) {
      ce.offset.setOffset(this, t2, e3);
    });
    var e2, n2, r2 = this[0];
    return r2 ? r2.getClientRects().length ? (e2 = r2.getBoundingClientRect(), n2 = r2.ownerDocument.defaultView, { top: e2.top + n2.pageYOffset, left: e2.left + n2.pageXOffset }) : { top: 0, left: 0 } : void 0;
  }, position: function() {
    if (this[0]) {
      var e2, t2, n2, r2 = this[0], i2 = { top: 0, left: 0 };
      if ("fixed" === ce.css(r2, "position")) t2 = r2.getBoundingClientRect();
      else {
        t2 = this.offset(), n2 = r2.ownerDocument, e2 = r2.offsetParent || n2.documentElement;
        while (e2 && (e2 === n2.body || e2 === n2.documentElement) && "static" === ce.css(e2, "position")) e2 = e2.parentNode;
        e2 && e2 !== r2 && 1 === e2.nodeType && ((i2 = ce(e2).offset()).top += ce.css(e2, "borderTopWidth", true), i2.left += ce.css(e2, "borderLeftWidth", true));
      }
      return { top: t2.top - i2.top - ce.css(r2, "marginTop", true), left: t2.left - i2.left - ce.css(r2, "marginLeft", true) };
    }
  }, offsetParent: function() {
    return this.map(function() {
      var e2 = this.offsetParent;
      while (e2 && "static" === ce.css(e2, "position")) e2 = e2.offsetParent;
      return e2 || J;
    });
  } }), ce.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t2, i2) {
    var o2 = "pageYOffset" === i2;
    ce.fn[t2] = function(e2) {
      return M(this, function(e3, t3, n2) {
        var r2;
        if (y(e3) ? r2 = e3 : 9 === e3.nodeType && (r2 = e3.defaultView), void 0 === n2) return r2 ? r2[i2] : e3[t3];
        r2 ? r2.scrollTo(o2 ? r2.pageXOffset : n2, o2 ? n2 : r2.pageYOffset) : e3[t3] = n2;
      }, t2, e2, arguments.length);
    };
  }), ce.each(["top", "left"], function(e2, n2) {
    ce.cssHooks[n2] = Ye(le.pixelPosition, function(e3, t2) {
      if (t2) return t2 = Ge(e3, n2), _e.test(t2) ? ce(e3).position()[n2] + "px" : t2;
    });
  }), ce.each({ Height: "height", Width: "width" }, function(a2, s2) {
    ce.each({ padding: "inner" + a2, content: s2, "": "outer" + a2 }, function(r2, o2) {
      ce.fn[o2] = function(e2, t2) {
        var n2 = arguments.length && (r2 || "boolean" != typeof e2), i2 = r2 || (true === e2 || true === t2 ? "margin" : "border");
        return M(this, function(e3, t3, n3) {
          var r3;
          return y(e3) ? 0 === o2.indexOf("outer") ? e3["inner" + a2] : e3.document.documentElement["client" + a2] : 9 === e3.nodeType ? (r3 = e3.documentElement, Math.max(e3.body["scroll" + a2], r3["scroll" + a2], e3.body["offset" + a2], r3["offset" + a2], r3["client" + a2])) : void 0 === n3 ? ce.css(e3, t3, i2) : ce.style(e3, t3, n3, i2);
        }, s2, n2 ? e2 : void 0, n2);
      };
    });
  }), ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e2, t2) {
    ce.fn[t2] = function(e3) {
      return this.on(t2, e3);
    };
  }), ce.fn.extend({ bind: function(e2, t2, n2) {
    return this.on(e2, null, t2, n2);
  }, unbind: function(e2, t2) {
    return this.off(e2, null, t2);
  }, delegate: function(e2, t2, n2, r2) {
    return this.on(t2, e2, n2, r2);
  }, undelegate: function(e2, t2, n2) {
    return 1 === arguments.length ? this.off(e2, "**") : this.off(t2, e2 || "**", n2);
  }, hover: function(e2, t2) {
    return this.on("mouseenter", e2).on("mouseleave", t2 || e2);
  } }), ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e2, n2) {
    ce.fn[n2] = function(e3, t2) {
      return 0 < arguments.length ? this.on(n2, null, e3, t2) : this.trigger(n2);
    };
  });
  var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  ce.proxy = function(e2, t2) {
    var n2, r2, i2;
    if ("string" == typeof t2 && (n2 = e2[t2], t2 = e2, e2 = n2), v(e2)) return r2 = ae.call(arguments, 2), (i2 = function() {
      return e2.apply(t2 || this, r2.concat(ae.call(arguments)));
    }).guid = e2.guid = e2.guid || ce.guid++, i2;
  }, ce.holdReady = function(e2) {
    e2 ? ce.readyWait++ : ce.ready(true);
  }, ce.isArray = Array.isArray, ce.parseJSON = JSON.parse, ce.nodeName = fe, ce.isFunction = v, ce.isWindow = y, ce.camelCase = F, ce.type = x, ce.now = Date.now, ce.isNumeric = function(e2) {
    var t2 = ce.type(e2);
    return ("number" === t2 || "string" === t2) && !isNaN(e2 - parseFloat(e2));
  }, ce.trim = function(e2) {
    return null == e2 ? "" : (e2 + "").replace(en, "$1");
  }, "function" == typeof define && define.amd && define("jquery", [], function() {
    return ce;
  });
  var tn = ie.jQuery, nn = ie.$;
  return ce.noConflict = function(e2) {
    return ie.$ === ce && (ie.$ = nn), e2 && ie.jQuery === ce && (ie.jQuery = tn), ce;
  }, "undefined" == typeof e && (ie.jQuery = ie.$ = ce), ce;
});
/*! jsTree - v3.3.17 - 2024-09-03 - (MIT) */
!function(e) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery);
}(function(E, P) {
  "use strict";
  if (!E.jstree) {
    var s = 0, a = false, n = false, o = false, r = [], e = E("script:last").attr("src"), b = window.document, c = window.setImmediate, i = window.Promise;
    !c && i && (c = function(e2, t2) {
      i.resolve(t2).then(e2);
    }), E.jstree = { version: "3.3.17", defaults: { plugins: [] }, plugins: {}, path: e && -1 !== e.indexOf("/") ? e.replace(/\/[^\/]+$/, "") : "", idregex: /[\\:&!^|()\[\]<>@*'+~#";.,=\- \/${}%?`]/g, root: "#" }, E.jstree.create = function(e2, i2) {
      var r2 = new E.jstree.core(++s), t2 = i2;
      return i2 = E.extend(true, {}, E.jstree.defaults, i2), t2 && t2.plugins && (i2.plugins = t2.plugins), E.each(i2.plugins, function(e3, t3) {
        "core" !== e3 && (r2 = r2.plugin(t3, i2[t3]));
      }), E(e2).data("jstree", r2), r2.init(e2, i2), r2;
    }, E.jstree.destroy = function() {
      E(".jstree:jstree").jstree("destroy"), E(b).off(".jstree");
    }, E.jstree.core = function(e2) {
      this._id = e2, this._cnt = 0, this._wrk = null, this._data = { core: { themes: { name: false, dots: false, icons: false, ellipsis: false }, selected: [], last_error: {}, working: false, worker_queue: [], focused: null } };
    }, E.jstree.reference = function(t2) {
      var i2 = null, e2 = null;
      if (!t2 || !t2.id || t2.tagName && t2.nodeType || (t2 = t2.id), !e2 || !e2.length) try {
        e2 = E(t2);
      } catch (e3) {
      }
      if (!e2 || !e2.length) try {
        e2 = E("#" + t2.replace(E.jstree.idregex, "\\$&"));
      } catch (e3) {
      }
      return e2 && e2.length && (e2 = e2.closest(".jstree")).length && (e2 = e2.data("jstree")) ? i2 = e2 : E(".jstree").each(function() {
        var e3 = E(this).data("jstree");
        if (e3 && e3._model.data[t2]) return i2 = e3, false;
      }), i2;
    }, E.fn.jstree = function(i2) {
      var r2 = "string" == typeof i2, s2 = Array.prototype.slice.call(arguments, 1), a2 = null;
      return !(true === i2 && !this.length) && (this.each(function() {
        var e2 = E.jstree.reference(this), t2 = r2 && e2 ? e2[i2] : null;
        if (a2 = r2 && t2 ? t2.apply(e2, s2) : null, e2 || r2 || i2 !== P && !E.isPlainObject(i2) || E.jstree.create(this, i2), null !== (a2 = e2 && !r2 || true === i2 ? e2 || false : a2) && a2 !== P) return false;
      }), null !== a2 && a2 !== P ? a2 : this);
    }, E.expr.pseudos.jstree = E.expr.createPseudo(function(e2) {
      return function(e3) {
        return E(e3).hasClass("jstree") && E(e3).data("jstree") !== P;
      };
    }), E.jstree.defaults.core = { data: false, strings: false, check_callback: false, error: E.noop, animation: 200, multiple: true, themes: { name: false, url: false, dir: false, dots: true, icons: true, ellipsis: false, stripes: false, variant: false, responsive: false }, expand_selected_onload: true, worker: true, force_text: false, dblclick_toggle: true, loaded_state: false, restore_focus: true, compute_elements_positions: false, keyboard: { "ctrl-space": function(e2) {
      e2.type = "click", E(e2.currentTarget).trigger(e2);
    }, enter: function(e2) {
      e2.type = "click", E(e2.currentTarget).trigger(e2);
    }, left: function(e2) {
      var e2;
      e2.preventDefault(), this.is_open(e2.currentTarget) ? this.close_node(e2.currentTarget) : (e2 = this.get_parent(e2.currentTarget)) && e2.id !== E.jstree.root && this.get_node(e2, true).children(".jstree-anchor").trigger("focus");
    }, up: function(e2) {
      e2.preventDefault();
      var e2 = this.get_prev_dom(e2.currentTarget);
      e2 && e2.length && e2.children(".jstree-anchor").trigger("focus");
    }, right: function(e2) {
      var e2;
      e2.preventDefault(), this.is_closed(e2.currentTarget) ? this.open_node(e2.currentTarget, function(e3) {
        this.get_node(e3, true).children(".jstree-anchor").trigger("focus");
      }) : !this.is_open(e2.currentTarget) || (e2 = this.get_node(e2.currentTarget, true).children(".jstree-children")[0]) && E(this._firstChild(e2)).children(".jstree-anchor").trigger("focus");
    }, down: function(e2) {
      e2.preventDefault();
      var e2 = this.get_next_dom(e2.currentTarget);
      e2 && e2.length && e2.children(".jstree-anchor").trigger("focus");
    }, "*": function(e2) {
      this.open_all();
    }, home: function(e2) {
      e2.preventDefault();
      var e2 = this._firstChild(this.get_container_ul()[0]);
      e2 && E(e2).children(".jstree-anchor").filter(":visible").trigger("focus");
    }, end: function(e2) {
      e2.preventDefault(), this.element.find(".jstree-anchor").filter(":visible").last().trigger("focus");
    }, f2: function(e2) {
      e2.preventDefault(), this.edit(e2.currentTarget);
    } }, allow_reselect: false }, E.jstree.core.prototype = { plugin: function(e2, t2) {
      var i2 = E.jstree.plugins[e2];
      return i2 ? (this._data[e2] = {}, i2.prototype = this, new i2(t2, this)) : this;
    }, init: function(e2, t2) {
      this._model = { data: {}, changed: [], force_full_redraw: false, redraw_timeout: false, default_state: { loaded: true, opened: false, selected: false, disabled: false } }, this._model.data[E.jstree.root] = { id: E.jstree.root, parent: null, parents: [], children: [], children_d: [], state: { loaded: false } }, this.element = E(e2).addClass("jstree jstree-" + this._id), this.settings = t2, this._data.core.ready = false, this._data.core.loaded = false, this._data.core.rtl = "rtl" === this.element.css("direction"), this.element[this._data.core.rtl ? "addClass" : "removeClass"]("jstree-rtl"), this.element.attr("role", "tree"), this.settings.core.multiple && this.element.attr("aria-multiselectable", true), this.element.attr("tabindex") || this.element.attr("tabindex", "0"), this.bind(), this.trigger("init"), this._data.core.original_container_html = this.element.find(" > ul > li").clone(true), this._data.core.original_container_html.find("li").addBack().contents().filter(function() {
        return 3 === this.nodeType && (!this.nodeValue || /^\s+$/.test(this.nodeValue));
      }).remove(), this.element.html("<ul class='jstree-container-ul jstree-children' role='group'><li id='j" + this._id + "_loading' class='jstree-initial-node jstree-loading jstree-leaf jstree-last' role='none'><i class='jstree-icon jstree-ocl'></i><a class='jstree-anchor' role='treeitem' href='#'><i class='jstree-icon jstree-themeicon-hidden'></i>" + this.get_string("Loading ...") + "</a></li></ul>"), this.element.attr("aria-activedescendant", "j" + this._id + "_loading"), this._data.core.li_height = this.get_container_ul().children("li").first().outerHeight() || 24, this._data.core.node = this._create_prototype_node(), this.trigger("loading"), this.load_node(E.jstree.root);
    }, destroy: function(e2) {
      if (this.trigger("destroy"), this._wrk) try {
        window.URL.revokeObjectURL(this._wrk), this._wrk = null;
      } catch (e3) {
      }
      e2 || this.element.empty(), this.teardown();
    }, _create_prototype_node: function() {
      var e2 = b.createElement("LI"), t2, i2;
      return e2.setAttribute("role", "none"), (t2 = b.createElement("I")).className = "jstree-icon jstree-ocl", t2.setAttribute("role", "presentation"), e2.appendChild(t2), (t2 = b.createElement("A")).className = "jstree-anchor", t2.setAttribute("href", "#"), t2.setAttribute("tabindex", "-1"), t2.setAttribute("role", "treeitem"), (i2 = b.createElement("I")).className = "jstree-icon jstree-themeicon", i2.setAttribute("role", "presentation"), t2.appendChild(i2), e2.appendChild(t2), t2 = i2 = null, e2;
    }, _kbevent_to_func: function(e2) {
      var t2 = { 8: "Backspace", 9: "Tab", 13: "Enter", 19: "Pause", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "Print", 45: "Insert", 46: "Delete", 96: "Numpad0", 97: "Numpad1", 98: "Numpad2", 99: "Numpad3", 100: "Numpad4", 101: "Numpad5", 102: "Numpad6", 103: "Numpad7", 104: "Numpad8", 105: "Numpad9", "-13": "NumpadEnter", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "Numlock", 145: "Scrolllock", 16: "Shift", 17: "Ctrl", 18: "Alt", 48: "0", 49: "1", 50: "2", 51: "3", 52: "4", 53: "5", 54: "6", 55: "7", 56: "8", 57: "9", 59: ";", 61: "=", 65: "a", 66: "b", 67: "c", 68: "d", 69: "e", 70: "f", 71: "g", 72: "h", 73: "i", 74: "j", 75: "k", 76: "l", 77: "m", 78: "n", 79: "o", 80: "p", 81: "q", 82: "r", 83: "s", 84: "t", 85: "u", 86: "v", 87: "w", 88: "x", 89: "y", 90: "z", 107: "+", 109: "-", 110: ".", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'", 111: "/", 106: "*", 173: "-" }, i2 = [];
      if (e2.ctrlKey && i2.push("ctrl"), e2.altKey && i2.push("alt"), e2.shiftKey && i2.push("shift"), i2.push(t2[e2.which] ? t2[e2.which].toLowerCase() : e2.which), "shift-shift" === (i2 = i2.sort().join("-").toLowerCase()) || "ctrl-ctrl" === i2 || "alt-alt" === i2) return null;
      var r2 = this.settings.core.keyboard, s2, a2;
      for (s2 in r2) if (r2.hasOwnProperty(s2) && (a2 = "-" !== (a2 = s2) && "+" !== a2 ? (a2 = a2.replace("--", "-MINUS").replace("+-", "-MINUS").replace("++", "-PLUS").replace("-+", "-PLUS")).split(/-|\+/).sort().join("-").replace("MINUS", "-").replace("PLUS", "+").toLowerCase() : a2) === i2) return r2[s2];
      return null;
    }, teardown: function() {
      this.unbind(), this.element.removeClass("jstree").removeData("jstree").find("[class^='jstree']").addBack().attr("class", function() {
        return this.className.replace(/jstree[^ ]*|$/gi, "");
      }), this.element = null;
    }, bind: function() {
      var s2 = "", a2 = null, t2 = 0;
      this.element.on("dblclick.jstree", function(e2) {
        if (e2.target.tagName && "input" === e2.target.tagName.toLowerCase()) return true;
        if (b.selection && b.selection.empty) b.selection.empty();
        else if (window.getSelection) {
          var e2 = window.getSelection();
          try {
            e2.removeAllRanges(), e2.collapse();
          } catch (e3) {
          }
        }
      }).on("mousedown.jstree", function(e2) {
        e2.target === this.element[0] && (e2.preventDefault(), t2 = +/* @__PURE__ */ new Date());
      }.bind(this)).on("mousedown.jstree", ".jstree-ocl", function(e2) {
        e2.preventDefault();
      }).on("click.jstree", ".jstree-ocl", function(e2) {
        this.toggle_node(e2.target);
      }.bind(this)).on("dblclick.jstree", ".jstree-anchor", function(e2) {
        if (e2.target.tagName && "input" === e2.target.tagName.toLowerCase()) return true;
        this.settings.core.dblclick_toggle && this.toggle_node(e2.target);
      }.bind(this)).on("click.jstree", ".jstree-anchor", function(e2) {
        e2.preventDefault(), e2.currentTarget !== b.activeElement && E(e2.currentTarget).trigger("focus"), this.activate_node(e2.currentTarget, e2);
      }.bind(this)).on("keydown.jstree", ".jstree-anchor", function(e2) {
        if (e2.target.tagName && "input" === e2.target.tagName.toLowerCase()) return true;
        this._data.core.rtl && (37 === e2.which ? e2.which = 39 : 39 === e2.which && (e2.which = 37));
        var t3 = this._kbevent_to_func(e2);
        if (t3) {
          var e2 = t3.call(this, e2);
          if (false === e2 || true === e2) return e2;
        }
      }.bind(this)).on("load_node.jstree", function(e2, t3) {
        t3.status && (t3.node.id !== E.jstree.root || this._data.core.loaded || (this._data.core.loaded = true, this._firstChild(this.get_container_ul()[0]) && this.element.attr("aria-activedescendant", this._firstChild(this.get_container_ul()[0]).id), this.trigger("loaded")), this._data.core.ready || setTimeout(function() {
          if (this.element && !this.get_container_ul().find(".jstree-loading").length) {
            if (this._data.core.ready = true, this._data.core.selected.length) {
              if (this.settings.core.expand_selected_onload) {
                for (var e3 = [], t4, i2, t4 = 0, i2 = this._data.core.selected.length; t4 < i2; t4++) e3 = e3.concat(this._model.data[this._data.core.selected[t4]].parents);
                for (t4 = 0, i2 = (e3 = E.vakata.array_unique(e3)).length; t4 < i2; t4++) this.open_node(e3[t4], false, 0);
              }
              this.trigger("changed", { action: "ready", selected: this._data.core.selected });
            }
            this.trigger("ready");
          }
        }.bind(this), 0));
      }.bind(this)).on("keypress.jstree", function(e2) {
        if (e2.target.tagName && "input" === e2.target.tagName.toLowerCase()) return true;
        a2 && clearTimeout(a2), a2 = setTimeout(function() {
          s2 = "";
        }, 500);
        var i2 = String.fromCharCode(e2.which).toLowerCase(), t3 = this.element.find(".jstree-anchor").filter(":visible"), e2 = t3.index(b.activeElement) || 0, r2 = false;
        if (1 < (s2 += i2).length) {
          if (t3.slice(e2).each(function(e3, t4) {
            if (0 === E(t4).text().toLowerCase().indexOf(s2)) return E(t4).trigger("focus"), !(r2 = true);
          }.bind(this)), r2) return;
          if (t3.slice(0, e2).each(function(e3, t4) {
            if (0 === E(t4).text().toLowerCase().indexOf(s2)) return E(t4).trigger("focus"), !(r2 = true);
          }.bind(this)), r2) return;
        }
        new RegExp("^" + i2.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") + "+$").test(s2) && (t3.slice(e2 + 1).each(function(e3, t4) {
          if (E(t4).text().toLowerCase().charAt(0) === i2) return E(t4).trigger("focus"), !(r2 = true);
        }.bind(this)), r2 || t3.slice(0, e2 + 1).each(function(e3, t4) {
          if (E(t4).text().toLowerCase().charAt(0) === i2) return E(t4).trigger("focus"), !(r2 = true);
        }.bind(this)));
      }.bind(this)).on("init.jstree", function() {
        var e2 = this.settings.core.themes;
        this._data.core.themes.dots = e2.dots, this._data.core.themes.stripes = e2.stripes, this._data.core.themes.icons = e2.icons, this._data.core.themes.ellipsis = e2.ellipsis, this.set_theme(e2.name || "default", e2.url), this.set_theme_variant(e2.variant);
      }.bind(this)).on("loading.jstree", function() {
        this[this._data.core.themes.dots ? "show_dots" : "hide_dots"](), this[this._data.core.themes.icons ? "show_icons" : "hide_icons"](), this[this._data.core.themes.stripes ? "show_stripes" : "hide_stripes"](), this[this._data.core.themes.ellipsis ? "show_ellipsis" : "hide_ellipsis"]();
      }.bind(this)).on("blur.jstree", ".jstree-anchor", function(e2) {
        this._data.core.focused = null, E(e2.currentTarget).filter(".jstree-hovered").trigger("mouseleave"), this.element.attr("tabindex", "0"), E(e2.currentTarget).attr("tabindex", "-1");
      }.bind(this)).on("focus.jstree", ".jstree-anchor", function(e2) {
        var t3 = this.get_node(e2.currentTarget);
        t3 && (t3.id || 0 === t3.id) && (this._data.core.focused = t3.id), this.element.find(".jstree-hovered").not(e2.currentTarget).trigger("mouseleave"), E(e2.currentTarget).trigger("mouseenter"), this.element.attr("tabindex", "-1"), E(e2.currentTarget).attr("tabindex", "0");
      }.bind(this)).on("focus.jstree", function() {
        var e2;
        500 < +/* @__PURE__ */ new Date() - t2 && !this._data.core.focused && this.settings.core.restore_focus && (t2 = 0, (e2 = this.get_node(this.element.attr("aria-activedescendant"), true)) && e2.find("> .jstree-anchor").trigger("focus"));
      }.bind(this)).on("mouseenter.jstree", ".jstree-anchor", function(e2) {
        this.hover_node(e2.currentTarget);
      }.bind(this)).on("mouseleave.jstree", ".jstree-anchor", function(e2) {
        this.dehover_node(e2.currentTarget);
      }.bind(this));
    }, unbind: function() {
      this.element.off(".jstree"), E(b).off(".jstree-" + this._id);
    }, trigger: function(e2, t2) {
      ((t2 = t2 || {}).instance = this).element.triggerHandler(e2.replace(".jstree", "") + ".jstree", t2);
    }, get_container: function() {
      return this.element;
    }, get_container_ul: function() {
      return this.element.children(".jstree-children").first();
    }, get_string: function(e2) {
      var t2 = this.settings.core.strings;
      return E.vakata.is_function(t2) ? t2.call(this, e2) : t2 && t2[e2] ? t2[e2] : e2;
    }, _firstChild: function(e2) {
      e2 = e2 ? e2.firstChild : null;
      while (null !== e2 && 1 !== e2.nodeType) e2 = e2.nextSibling;
      return e2;
    }, _nextSibling: function(e2) {
      e2 = e2 ? e2.nextSibling : null;
      while (null !== e2 && 1 !== e2.nodeType) e2 = e2.nextSibling;
      return e2;
    }, _previousSibling: function(e2) {
      e2 = e2 ? e2.previousSibling : null;
      while (null !== e2 && 1 !== e2.nodeType) e2 = e2.previousSibling;
      return e2;
    }, get_node: function(e2, t2) {
      var i2;
      (e2 = e2 && (e2.id || 0 === e2.id) ? e2.id : e2) instanceof E && e2.length && e2[0].id && (e2 = e2[0].id);
      try {
        if (this._model.data[e2]) e2 = this._model.data[e2];
        else if ("string" == typeof e2 && this._model.data[e2.replace(/^#/, "")]) e2 = this._model.data[e2.replace(/^#/, "")];
        else if ("string" == typeof e2 && (i2 = E("#" + e2.replace(E.jstree.idregex, "\\$&"), this.element)).length && this._model.data[i2.closest(".jstree-node").attr("id")]) e2 = this._model.data[i2.closest(".jstree-node").attr("id")];
        else if ((i2 = this.element.find(e2)).length && this._model.data[i2.closest(".jstree-node").attr("id")]) e2 = this._model.data[i2.closest(".jstree-node").attr("id")];
        else {
          if (!(i2 = this.element.find(e2)).length || !i2.hasClass("jstree")) return false;
          e2 = this._model.data[E.jstree.root];
        }
        return e2 = t2 ? e2.id === E.jstree.root ? this.element : E("#" + e2.id.replace(E.jstree.idregex, "\\$&"), this.element) : e2;
      } catch (e3) {
        return false;
      }
    }, get_path: function(e2, t2, i2) {
      if (!(e2 = e2.parents ? e2 : this.get_node(e2)) || e2.id === E.jstree.root || !e2.parents) return false;
      var r2, s2, a2 = [];
      for (a2.push(i2 ? e2.id : e2.text), r2 = 0, s2 = e2.parents.length; r2 < s2; r2++) a2.push(i2 ? e2.parents[r2] : this.get_text(e2.parents[r2]));
      return a2 = a2.reverse().slice(1), t2 ? a2.join(t2) : a2;
    }, get_next_dom: function(e2, t2) {
      var i2;
      if ((e2 = this.get_node(e2, true))[0] === this.element[0]) {
        i2 = this._firstChild(this.get_container_ul()[0]);
        while (i2 && 0 === i2.offsetHeight) i2 = this._nextSibling(i2);
        return !!i2 && E(i2);
      }
      if (!e2 || !e2.length) return false;
      if (t2) {
        i2 = e2[0];
        do {
          i2 = this._nextSibling(i2);
        } while (i2 && 0 === i2.offsetHeight);
        return !!i2 && E(i2);
      }
      if (e2.hasClass("jstree-open")) {
        i2 = this._firstChild(e2.children(".jstree-children")[0]);
        while (i2 && 0 === i2.offsetHeight) i2 = this._nextSibling(i2);
        if (null !== i2) return E(i2);
      }
      i2 = e2[0];
      do {
        i2 = this._nextSibling(i2);
      } while (i2 && 0 === i2.offsetHeight);
      return null !== i2 ? E(i2) : e2.parentsUntil(".jstree", ".jstree-node").nextAll(".jstree-node:visible").first();
    }, get_prev_dom: function(e2, t2) {
      var i2;
      if ((e2 = this.get_node(e2, true))[0] === this.element[0]) {
        i2 = this.get_container_ul()[0].lastChild;
        while (i2 && 0 === i2.offsetHeight) i2 = this._previousSibling(i2);
        return !!i2 && E(i2);
      }
      if (!e2 || !e2.length) return false;
      if (t2) {
        i2 = e2[0];
        do {
          i2 = this._previousSibling(i2);
        } while (i2 && 0 === i2.offsetHeight);
        return !!i2 && E(i2);
      }
      i2 = e2[0];
      do {
        i2 = this._previousSibling(i2);
      } while (i2 && 0 === i2.offsetHeight);
      if (null === i2) return !(!(i2 = e2[0].parentNode.parentNode) || !i2.className || -1 === i2.className.indexOf("jstree-node")) && E(i2);
      e2 = E(i2);
      while (e2.hasClass("jstree-open")) e2 = e2.children(".jstree-children").first().children(".jstree-node:visible:last");
      return e2;
    }, get_parent: function(e2) {
      return !(!(e2 = this.get_node(e2)) || e2.id === E.jstree.root) && e2.parent;
    }, get_children_dom: function(e2) {
      return (e2 = this.get_node(e2, true))[0] === this.element[0] ? this.get_container_ul().children(".jstree-node") : !(!e2 || !e2.length) && e2.children(".jstree-children").children(".jstree-node");
    }, is_parent: function(e2) {
      return (e2 = this.get_node(e2)) && (false === e2.state.loaded || 0 < e2.children.length);
    }, is_loaded: function(e2) {
      return (e2 = this.get_node(e2)) && e2.state.loaded;
    }, is_loading: function(e2) {
      return (e2 = this.get_node(e2)) && e2.state && e2.state.loading;
    }, is_open: function(e2) {
      return (e2 = this.get_node(e2)) && e2.state.opened;
    }, is_closed: function(e2) {
      return (e2 = this.get_node(e2)) && this.is_parent(e2) && !e2.state.opened;
    }, is_leaf: function(e2) {
      return !this.is_parent(e2);
    }, load_node: function(n2, o2) {
      var e2 = this.get_node(n2, true), t2, i2, r2, s2, a2;
      if (E.vakata.is_array(n2)) return this._load_nodes(n2.slice(), o2), true;
      if (!(n2 = this.get_node(n2))) return o2 && o2.call(this, n2, false), false;
      if (n2.state.loaded) {
        for (n2.state.loaded = false, r2 = 0, s2 = n2.parents.length; r2 < s2; r2++) this._model.data[n2.parents[r2]].children_d = E.vakata.array_filter(this._model.data[n2.parents[r2]].children_d, function(e3) {
          return -1 === E.inArray(e3, n2.children_d);
        });
        for (t2 = 0, i2 = n2.children_d.length; t2 < i2; t2++) this._model.data[n2.children_d[t2]].state.selected && (a2 = true), delete this._model.data[n2.children_d[t2]];
        a2 && (this._data.core.selected = E.vakata.array_filter(this._data.core.selected, function(e3) {
          return -1 === E.inArray(e3, n2.children_d);
        })), n2.children = [], n2.children_d = [], a2 && this.trigger("changed", { action: "load_node", node: n2, selected: this._data.core.selected });
      }
      return n2.state.failed = false, n2.state.loading = true, (n2.id !== E.jstree.root ? e2.children(".jstree-anchor") : e2).attr("aria-busy", true), e2.addClass("jstree-loading"), this._load_node(n2, function(e3) {
        (n2 = this._model.data[n2.id]).state.loading = false, n2.state.loaded = e3, n2.state.failed = !n2.state.loaded;
        for (var t3 = this.get_node(n2, true), i3 = 0, r3 = 0, s3 = this._model.data, a3 = false, i3 = 0, r3 = n2.children.length; i3 < r3; i3++) if (s3[n2.children[i3]] && !s3[n2.children[i3]].state.hidden) {
          a3 = true;
          break;
        }
        n2.state.loaded && t3 && t3.length && (t3.removeClass("jstree-closed jstree-open jstree-leaf"), a3 ? "#" !== n2.id && t3.addClass(n2.state.opened ? "jstree-open" : "jstree-closed") : t3.addClass("jstree-leaf")), (n2.id !== E.jstree.root ? t3.children(".jstree-anchor") : t3).attr("aria-busy", false), t3.removeClass("jstree-loading"), this.trigger("load_node", { node: n2, status: e3 }), o2 && o2.call(this, n2, e3);
      }.bind(this)), true;
    }, _load_nodes: function(e2, t2, i2, r2) {
      for (var s2 = true, a2 = function() {
        this._load_nodes(e2, t2, true);
      }, n2 = this._model.data, o2, d2, c2 = [], o2 = 0, d2 = e2.length; o2 < d2; o2++) n2[e2[o2]] && (!n2[e2[o2]].state.loaded && !n2[e2[o2]].state.failed || !i2 && r2) && (this.is_loading(e2[o2]) || this.load_node(e2[o2], a2), s2 = false);
      if (s2) {
        for (o2 = 0, d2 = e2.length; o2 < d2; o2++) n2[e2[o2]] && n2[e2[o2]].state.loaded && c2.push(e2[o2]);
        t2 && !t2.done && (t2.call(this, c2), t2.done = true);
      }
    }, load_all: function(e2, t2) {
      if (e2 = e2 || E.jstree.root, !(e2 = this.get_node(e2))) return false;
      var i2 = [], r2 = this._model.data, s2 = r2[e2.id].children_d, a2, n2;
      for (e2.state && !e2.state.loaded && i2.push(e2.id), a2 = 0, n2 = s2.length; a2 < n2; a2++) r2[s2[a2]] && r2[s2[a2]].state && !r2[s2[a2]].state.loaded && i2.push(s2[a2]);
      i2.length ? this._load_nodes(i2, function() {
        this.load_all(e2, t2);
      }) : (t2 && t2.call(this, e2), this.trigger("load_all", { node: e2 }));
    }, _load_node: function(s2, a2) {
      var e2 = this.settings.core.data, t2, n2 = function e3() {
        return 3 !== this.nodeType && 8 !== this.nodeType;
      };
      return e2 ? E.vakata.is_function(e2) ? e2.call(this, s2, function(e3) {
        false === e3 ? a2.call(this, false) : this["string" == typeof e3 ? "_append_html_data" : "_append_json_data"](s2, "string" == typeof e3 ? E(E.parseHTML(e3)).filter(n2) : e3, function(e4) {
          a2.call(this, e4);
        });
      }.bind(this)) : "object" == typeof e2 ? e2.url ? (e2 = E.extend(true, {}, e2), E.vakata.is_function(e2.url) && (e2.url = e2.url.call(this, s2)), E.vakata.is_function(e2.data) && (e2.data = e2.data.call(this, s2)), E.ajax(e2).done(function(e3, t3, i2) {
        var r2 = i2.getResponseHeader("Content-Type");
        return r2 && -1 !== r2.indexOf("json") || "object" == typeof e3 ? this._append_json_data(s2, e3, function(e4) {
          a2.call(this, e4);
        }) : r2 && -1 !== r2.indexOf("html") || "string" == typeof e3 ? this._append_html_data(s2, E(E.parseHTML(e3)).filter(n2), function(e4) {
          a2.call(this, e4);
        }) : (this._data.core.last_error = { error: "ajax", plugin: "core", id: "core_04", reason: "Could not load node", data: JSON.stringify({ id: s2.id, xhr: i2 }) }, this.settings.core.error.call(this, this._data.core.last_error), a2.call(this, false));
      }.bind(this)).fail(function(e3) {
        this._data.core.last_error = { error: "ajax", plugin: "core", id: "core_04", reason: "Could not load node", data: JSON.stringify({ id: s2.id, xhr: e3 }) }, a2.call(this, false), this.settings.core.error.call(this, this._data.core.last_error);
      }.bind(this))) : (t2 = E.vakata.is_array(e2) ? E.extend(true, [], e2) : E.isPlainObject(e2) ? E.extend(true, {}, e2) : e2, s2.id === E.jstree.root ? this._append_json_data(s2, t2, function(e3) {
        a2.call(this, e3);
      }) : (this._data.core.last_error = { error: "nodata", plugin: "core", id: "core_05", reason: "Could not load node", data: JSON.stringify({ id: s2.id }) }, this.settings.core.error.call(this, this._data.core.last_error), a2.call(this, false))) : "string" == typeof e2 ? s2.id === E.jstree.root ? this._append_html_data(s2, E(E.parseHTML(e2)).filter(n2), function(e3) {
        a2.call(this, e3);
      }) : (this._data.core.last_error = { error: "nodata", plugin: "core", id: "core_06", reason: "Could not load node", data: JSON.stringify({ id: s2.id }) }, this.settings.core.error.call(this, this._data.core.last_error), a2.call(this, false)) : a2.call(this, false) : s2.id === E.jstree.root ? this._append_html_data(s2, this._data.core.original_container_html.clone(true), function(e3) {
        a2.call(this, e3);
      }) : a2.call(this, false);
    }, _node_changed: function(e2) {
      (e2 = this.get_node(e2)) && -1 === E.inArray(e2.id, this._model.changed) && this._model.changed.push(e2.id);
    }, _append_html_data: function(e2, t2, i2) {
      (e2 = this.get_node(e2)).children = [], e2.children_d = [];
      var t2 = t2.is("ul") ? t2.children() : t2, r2 = e2.id, s2 = [], a2 = [], n2 = this._model.data, o2 = n2[r2], e2 = this._data.core.selected.length, d2, c2, l2;
      for (t2.each(function(e3, t3) {
        (d2 = this._parse_model_from_html(E(t3), r2, o2.parents.concat())) && (s2.push(d2), a2.push(d2), n2[d2].children_d.length && (a2 = a2.concat(n2[d2].children_d)));
      }.bind(this)), o2.children = s2, o2.children_d = a2, c2 = 0, l2 = o2.parents.length; c2 < l2; c2++) n2[o2.parents[c2]].children_d = n2[o2.parents[c2]].children_d.concat(a2);
      this.trigger("model", { nodes: a2, parent: r2 }), r2 !== E.jstree.root ? (this._node_changed(r2), this.redraw()) : (this.get_container_ul().children(".jstree-initial-node").remove(), this.redraw(true)), this._data.core.selected.length !== e2 && this.trigger("changed", { action: "model", selected: this._data.core.selected }), i2.call(this, true);
    }, _append_json_data: function(e2, t2, d2, i2) {
      if (null !== this.element) {
        (e2 = this.get_node(e2)).children = [], e2.children_d = [], t2.d && "string" == typeof (t2 = t2.d) && (t2 = JSON.parse(t2)), E.vakata.is_array(t2) || (t2 = [t2]);
        var r2 = null, s2 = { df: this._model.default_state, dat: t2, par: e2.id, m: this._model.data, t_id: this._id, t_cnt: this._cnt, sel: this._data.core.selected }, v2 = this, a2 = function(e3, c2) {
          var t3 = (e3 = e3.data ? e3.data : e3).dat, i3 = e3.par, r3 = [], s3 = [], l2 = [], h2 = e3.df, _2 = e3.t_id, g2 = e3.t_cnt, u2 = e3.m, a3 = u2[i3], e3 = e3.sel, n3, o2, d3, f2, p2 = function(e4, t4, i4) {
            i4 = i4 ? i4.concat() : [], t4 && i4.unshift(t4);
            var r4 = e4.id.toString(), s4, a4, n4, o3, d4 = { id: r4, text: e4.text || "", icon: e4.icon === c2 || e4.icon, parent: t4, parents: i4, children: e4.children || [], children_d: e4.children_d || [], data: e4.data, state: {}, li_attr: { id: false }, a_attr: { href: "#" }, original: false };
            for (s4 in h2) h2.hasOwnProperty(s4) && (d4.state[s4] = h2[s4]);
            if (e4 && e4.data && e4.data.jstree && e4.data.jstree.icon && (d4.icon = e4.data.jstree.icon), d4.icon !== c2 && null !== d4.icon && "" !== d4.icon || (d4.icon = true), e4 && e4.data && (d4.data = e4.data, e4.data.jstree)) for (s4 in e4.data.jstree) e4.data.jstree.hasOwnProperty(s4) && (d4.state[s4] = e4.data.jstree[s4]);
            if (e4 && "object" == typeof e4.state) for (s4 in e4.state) e4.state.hasOwnProperty(s4) && (d4.state[s4] = e4.state[s4]);
            if (e4 && "object" == typeof e4.li_attr) for (s4 in e4.li_attr) e4.li_attr.hasOwnProperty(s4) && (d4.li_attr[s4] = e4.li_attr[s4]);
            if (d4.li_attr.id || (d4.li_attr.id = r4), e4 && "object" == typeof e4.a_attr) for (s4 in e4.a_attr) e4.a_attr.hasOwnProperty(s4) && (d4.a_attr[s4] = e4.a_attr[s4]);
            for (e4 && e4.children && true === e4.children && (d4.state.loaded = false, d4.children = [], d4.children_d = []), s4 = 0, a4 = (u2[d4.id] = d4).children.length; s4 < a4; s4++) n4 = p2(u2[d4.children[s4]], d4.id, i4), o3 = u2[n4], d4.children_d.push(n4), o3.children_d.length && (d4.children_d = d4.children_d.concat(o3.children_d));
            return delete e4.data, delete e4.children, u2[d4.id].original = e4, d4.state.selected && l2.push(d4.id), d4.id;
          }, m2 = function(e4, t4, i4) {
            i4 = i4 ? i4.concat() : [], t4 && i4.unshift(t4);
            var r4 = false, s4, a4, n4, o3, d4;
            do {
              r4 = "j" + _2 + "_" + ++g2;
            } while (u2[r4]);
            for (s4 in d4 = { id: false, text: "string" == typeof e4 ? e4 : "", icon: "object" != typeof e4 || e4.icon === c2 || e4.icon, parent: t4, parents: i4, children: [], children_d: [], data: null, state: {}, li_attr: { id: false }, a_attr: { href: "#" }, original: false }, h2) h2.hasOwnProperty(s4) && (d4.state[s4] = h2[s4]);
            if (e4 && (e4.id || 0 === e4.id) && (d4.id = e4.id.toString()), e4 && e4.text && (d4.text = e4.text), e4 && e4.data && e4.data.jstree && e4.data.jstree.icon && (d4.icon = e4.data.jstree.icon), d4.icon !== c2 && null !== d4.icon && "" !== d4.icon || (d4.icon = true), e4 && e4.data && (d4.data = e4.data, e4.data.jstree)) for (s4 in e4.data.jstree) e4.data.jstree.hasOwnProperty(s4) && (d4.state[s4] = e4.data.jstree[s4]);
            if (e4 && "object" == typeof e4.state) for (s4 in e4.state) e4.state.hasOwnProperty(s4) && (d4.state[s4] = e4.state[s4]);
            if (e4 && "object" == typeof e4.li_attr) for (s4 in e4.li_attr) e4.li_attr.hasOwnProperty(s4) && (d4.li_attr[s4] = e4.li_attr[s4]);
            if (d4.li_attr.id && !d4.id && 0 !== d4.id && (d4.id = d4.li_attr.id.toString()), d4.id || 0 === d4.id || (d4.id = r4), d4.li_attr.id || (d4.li_attr.id = d4.id), e4 && "object" == typeof e4.a_attr) for (s4 in e4.a_attr) e4.a_attr.hasOwnProperty(s4) && (d4.a_attr[s4] = e4.a_attr[s4]);
            if (e4 && e4.children && e4.children.length) {
              for (s4 = 0, a4 = e4.children.length; s4 < a4; s4++) n4 = m2(e4.children[s4], d4.id, i4), o3 = u2[n4], d4.children.push(n4), o3.children_d.length && (d4.children_d = d4.children_d.concat(o3.children_d));
              d4.children_d = d4.children_d.concat(d4.children);
            }
            return e4 && e4.children && true === e4.children && (d4.state.loaded = false, d4.children = [], d4.children_d = []), delete e4.data, delete e4.children, d4.original = e4, (u2[d4.id] = d4).state.selected && l2.push(d4.id), d4.id;
          };
          if (t3.length && t3[0].id !== c2 && t3[0].parent !== c2) {
            for (o2 = 0, d3 = t3.length; o2 < d3; o2++) t3[o2].children || (t3[o2].children = []), t3[o2].state || (t3[o2].state = {}), u2[t3[o2].id.toString()] = t3[o2];
            for (o2 = 0, d3 = t3.length; o2 < d3; o2++) u2[t3[o2].parent.toString()] ? (u2[t3[o2].parent.toString()].children.push(t3[o2].id.toString()), a3.children_d.push(t3[o2].id.toString())) : void 0 !== v2 && (v2._data.core.last_error = { error: "parse", plugin: "core", id: "core_07", reason: "Node with invalid parent", data: JSON.stringify({ id: t3[o2].id.toString(), parent: t3[o2].parent.toString() }) }, v2.settings.core.error.call(v2, v2._data.core.last_error));
            for (o2 = 0, d3 = a3.children.length; o2 < d3; o2++) n3 = p2(u2[a3.children[o2]], i3, a3.parents.concat()), s3.push(n3), u2[n3].children_d.length && (s3 = s3.concat(u2[n3].children_d));
            for (o2 = 0, d3 = a3.parents.length; o2 < d3; o2++) u2[a3.parents[o2]].children_d = u2[a3.parents[o2]].children_d.concat(s3);
            f2 = { cnt: g2, mod: u2, sel: e3, par: i3, dpc: s3, add: l2 };
          } else {
            for (o2 = 0, d3 = t3.length; o2 < d3; o2++) (n3 = m2(t3[o2], i3, a3.parents.concat())) && (r3.push(n3), s3.push(n3), u2[n3].children_d.length && (s3 = s3.concat(u2[n3].children_d)));
            for (a3.children = r3, a3.children_d = s3, o2 = 0, d3 = a3.parents.length; o2 < d3; o2++) u2[a3.parents[o2]].children_d = u2[a3.parents[o2]].children_d.concat(s3);
            f2 = { cnt: g2, mod: u2, sel: e3, par: i3, dpc: s3, add: l2 };
          }
          if ("undefined" != typeof window && void 0 !== window.document) return f2;
          postMessage(f2);
        }, n2 = function(e3, t3) {
          if (null !== this.element) {
            var i3, r3;
            for (i3 in this._cnt = e3.cnt, r3 = this._model.data) r3.hasOwnProperty(i3) && r3[i3].state && r3[i3].state.loading && e3.mod[i3] && (e3.mod[i3].state.loading = true);
            if (this._model.data = e3.mod, t3) {
              var s3, a3 = e3.add, n3 = e3.sel, o2 = this._data.core.selected.slice(), r3 = this._model.data;
              if (n3.length !== o2.length || E.vakata.array_unique(n3.concat(o2)).length !== n3.length) {
                for (i3 = 0, s3 = n3.length; i3 < s3; i3++) -1 === E.inArray(n3[i3], a3) && -1 === E.inArray(n3[i3], o2) && (r3[n3[i3]].state.selected = false);
                for (i3 = 0, s3 = o2.length; i3 < s3; i3++) -1 === E.inArray(o2[i3], n3) && (r3[o2[i3]].state.selected = true);
              }
            }
            e3.add.length && (this._data.core.selected = this._data.core.selected.concat(e3.add)), this.trigger("model", { nodes: e3.dpc, parent: e3.par }), e3.par !== E.jstree.root ? (this._node_changed(e3.par), this.redraw()) : this.redraw(true), e3.add.length && this.trigger("changed", { action: "model", selected: this._data.core.selected }), !t3 && c ? c(function() {
              d2.call(v2, true);
            }) : d2.call(v2, true);
          }
        };
        if (this.settings.core.worker && window.Blob && window.URL && window.Worker) try {
          null === this._wrk && (this._wrk = window.URL.createObjectURL(new window.Blob(["self.onmessage = " + a2.toString()], { type: "text/javascript" }))), !this._data.core.working || i2 ? (this._data.core.working = true, (r2 = new window.Worker(this._wrk)).onmessage = function(e3) {
            n2.call(this, e3.data, true);
            try {
              r2.terminate(), r2 = null;
            } catch (e4) {
            }
            this._data.core.worker_queue.length ? this._append_json_data.apply(this, this._data.core.worker_queue.shift()) : this._data.core.working = false;
          }.bind(this), r2.onerror = function(e3) {
            n2.call(this, a2(s2), false), this._data.core.worker_queue.length ? this._append_json_data.apply(this, this._data.core.worker_queue.shift()) : this._data.core.working = false;
          }.bind(this), s2.par ? r2.postMessage(s2) : this._data.core.worker_queue.length ? this._append_json_data.apply(this, this._data.core.worker_queue.shift()) : this._data.core.working = false) : this._data.core.worker_queue.push([e2, t2, d2, true]);
        } catch (e3) {
          n2.call(this, a2(s2), false), this._data.core.worker_queue.length ? this._append_json_data.apply(this, this._data.core.worker_queue.shift()) : this._data.core.working = false;
        }
        else n2.call(this, a2(s2), false);
      }
    }, _parse_model_from_html: function(e2, t2, i2) {
      i2 = i2 ? [].concat(i2) : [], t2 && i2.unshift(t2);
      var r2, s2, a2 = this._model.data, n2 = { id: false, text: false, icon: true, parent: t2, parents: i2, children: [], children_d: [], data: null, state: {}, li_attr: { id: false }, a_attr: { href: "#" }, original: false }, o2, t2, d2;
      for (o2 in this._model.default_state) this._model.default_state.hasOwnProperty(o2) && (n2.state[o2] = this._model.default_state[o2]);
      if (t2 = E.vakata.attributes(e2, true), E.each(t2, function(e3, t3) {
        return !(t3 = E.vakata.trim(t3)).length || (n2.li_attr[e3] = t3, void ("id" === e3 && (n2.id = t3.toString())));
      }), (t2 = e2.children("a").first()).length && (t2 = E.vakata.attributes(t2, true), E.each(t2, function(e3, t3) {
        (t3 = E.vakata.trim(t3)).length && (n2.a_attr[e3] = t3);
      })), (t2 = (e2.children("a").first().length ? e2.children("a").first() : e2).clone()).children("ins, i, ul").remove(), t2 = t2.html(), t2 = E("<div></div>").html(t2), n2.text = this.settings.core.force_text ? t2.text() : t2.html(), t2 = e2.data(), n2.data = t2 ? E.extend(true, {}, t2) : null, n2.state.opened = e2.hasClass("jstree-open"), n2.state.selected = e2.children("a").hasClass("jstree-clicked"), n2.state.disabled = e2.children("a").hasClass("jstree-disabled"), n2.data && n2.data.jstree) for (o2 in n2.data.jstree) n2.data.jstree.hasOwnProperty(o2) && (n2.state[o2] = n2.data.jstree[o2]);
      (t2 = e2.children("a").children(".jstree-themeicon")).length && (n2.icon = !t2.hasClass("jstree-themeicon-hidden") && t2.attr("rel")), n2.state.icon !== P && (n2.icon = n2.state.icon), n2.icon !== P && null !== n2.icon && "" !== n2.icon || (n2.icon = true), t2 = e2.children("ul").children("li");
      do {
        d2 = "j" + this._id + "_" + ++this._cnt;
      } while (a2[d2]);
      return n2.id = n2.li_attr.id ? n2.li_attr.id.toString() : d2, t2.length ? (t2.each(function(e3, t3) {
        r2 = this._parse_model_from_html(E(t3), n2.id, i2), s2 = this._model.data[r2], n2.children.push(r2), s2.children_d.length && (n2.children_d = n2.children_d.concat(s2.children_d));
      }.bind(this)), n2.children_d = n2.children_d.concat(n2.children)) : e2.hasClass("jstree-closed") && (n2.state.loaded = false), n2.li_attr.class && (n2.li_attr.class = n2.li_attr.class.replace("jstree-closed", "").replace("jstree-open", "")), n2.a_attr.class && (n2.a_attr.class = n2.a_attr.class.replace("jstree-clicked", "").replace("jstree-disabled", "")), (a2[n2.id] = n2).state.selected && this._data.core.selected.push(n2.id), n2.id;
    }, _parse_model_from_flat_json: function(e2, t2, i2) {
      i2 = i2 ? i2.concat() : [], t2 && i2.unshift(t2);
      var r2 = e2.id.toString(), s2 = this._model.data, a2 = this._model.default_state, n2, o2, d2, c2, l2 = { id: r2, text: e2.text || "", icon: e2.icon === P || e2.icon, parent: t2, parents: i2, children: e2.children || [], children_d: e2.children_d || [], data: e2.data, state: {}, li_attr: { id: false }, a_attr: { href: "#" }, original: false };
      for (n2 in a2) a2.hasOwnProperty(n2) && (l2.state[n2] = a2[n2]);
      if (e2 && e2.data && e2.data.jstree && e2.data.jstree.icon && (l2.icon = e2.data.jstree.icon), l2.icon !== P && null !== l2.icon && "" !== l2.icon || (l2.icon = true), e2 && e2.data && (l2.data = e2.data, e2.data.jstree)) for (n2 in e2.data.jstree) e2.data.jstree.hasOwnProperty(n2) && (l2.state[n2] = e2.data.jstree[n2]);
      if (e2 && "object" == typeof e2.state) for (n2 in e2.state) e2.state.hasOwnProperty(n2) && (l2.state[n2] = e2.state[n2]);
      if (e2 && "object" == typeof e2.li_attr) for (n2 in e2.li_attr) e2.li_attr.hasOwnProperty(n2) && (l2.li_attr[n2] = e2.li_attr[n2]);
      if (l2.li_attr.id || (l2.li_attr.id = r2), e2 && "object" == typeof e2.a_attr) for (n2 in e2.a_attr) e2.a_attr.hasOwnProperty(n2) && (l2.a_attr[n2] = e2.a_attr[n2]);
      for (e2 && e2.children && true === e2.children && (l2.state.loaded = false, l2.children = [], l2.children_d = []), n2 = 0, o2 = (s2[l2.id] = l2).children.length; n2 < o2; n2++) c2 = s2[d2 = this._parse_model_from_flat_json(s2[l2.children[n2]], l2.id, i2)], l2.children_d.push(d2), c2.children_d.length && (l2.children_d = l2.children_d.concat(c2.children_d));
      return delete e2.data, delete e2.children, s2[l2.id].original = e2, l2.state.selected && this._data.core.selected.push(l2.id), l2.id;
    }, _parse_model_from_json: function(e2, t2, i2) {
      i2 = i2 ? i2.concat() : [], t2 && i2.unshift(t2);
      var r2 = false, s2, a2, n2, o2, d2 = this._model.data, c2 = this._model.default_state, l2;
      do {
        r2 = "j" + this._id + "_" + ++this._cnt;
      } while (d2[r2]);
      for (s2 in l2 = { id: false, text: "string" == typeof e2 ? e2 : "", icon: "object" != typeof e2 || e2.icon === P || e2.icon, parent: t2, parents: i2, children: [], children_d: [], data: null, state: {}, li_attr: { id: false }, a_attr: { href: "#" }, original: false }, c2) c2.hasOwnProperty(s2) && (l2.state[s2] = c2[s2]);
      if (e2 && (e2.id || 0 === e2.id) && (l2.id = e2.id.toString()), e2 && e2.text && (l2.text = e2.text), e2 && e2.data && e2.data.jstree && e2.data.jstree.icon && (l2.icon = e2.data.jstree.icon), l2.icon !== P && null !== l2.icon && "" !== l2.icon || (l2.icon = true), e2 && e2.data && (l2.data = e2.data, e2.data.jstree)) for (s2 in e2.data.jstree) e2.data.jstree.hasOwnProperty(s2) && (l2.state[s2] = e2.data.jstree[s2]);
      if (e2 && "object" == typeof e2.state) for (s2 in e2.state) e2.state.hasOwnProperty(s2) && (l2.state[s2] = e2.state[s2]);
      if (e2 && "object" == typeof e2.li_attr) for (s2 in e2.li_attr) e2.li_attr.hasOwnProperty(s2) && (l2.li_attr[s2] = e2.li_attr[s2]);
      if (l2.li_attr.id && !l2.id && 0 !== l2.id && (l2.id = l2.li_attr.id.toString()), l2.id || 0 === l2.id || (l2.id = r2), l2.li_attr.id || (l2.li_attr.id = l2.id), e2 && "object" == typeof e2.a_attr) for (s2 in e2.a_attr) e2.a_attr.hasOwnProperty(s2) && (l2.a_attr[s2] = e2.a_attr[s2]);
      if (e2 && e2.children && e2.children.length) {
        for (s2 = 0, a2 = e2.children.length; s2 < a2; s2++) o2 = d2[n2 = this._parse_model_from_json(e2.children[s2], l2.id, i2)], l2.children.push(n2), o2.children_d.length && (l2.children_d = l2.children_d.concat(o2.children_d));
        l2.children_d = l2.children.concat(l2.children_d);
      }
      return e2 && e2.children && true === e2.children && (l2.state.loaded = false, l2.children = [], l2.children_d = []), delete e2.data, delete e2.children, l2.original = e2, (d2[l2.id] = l2).state.selected && this._data.core.selected.push(l2.id), l2.id;
    }, _redraw: function() {
      for (var e2 = (this._model.force_full_redraw ? this._model.data[E.jstree.root].children : this._model.changed).concat([]), t2 = b.createElement("UL"), i2, r2, s2, a2 = this._data.core.focused, r2 = 0, s2 = e2.length; r2 < s2; r2++) (i2 = this.redraw_node(e2[r2], true, this._model.force_full_redraw)) && this._model.force_full_redraw && t2.appendChild(i2);
      this._model.force_full_redraw && (t2.className = this.get_container_ul()[0].className, t2.setAttribute("role", "presentation"), this.element.empty().append(t2)), null !== a2 && this.settings.core.restore_focus && ((i2 = this.get_node(a2, true)) && i2.length && i2.children(".jstree-anchor")[0] !== b.activeElement ? i2.children(".jstree-anchor").trigger("focus") : this._data.core.focused = null), this._model.force_full_redraw = false, this._model.changed = [], this.trigger("redraw", { nodes: e2 });
    }, redraw: function(e2) {
      e2 && (this._model.force_full_redraw = true), this._redraw();
    }, draw_children: function(e2) {
      var t2 = this.get_node(e2), i2 = false, r2 = false, s2 = false, a2 = b;
      if (!t2) return false;
      if (t2.id === E.jstree.root) return this.redraw(true);
      if (!(e2 = this.get_node(e2, true)) || !e2.length) return false;
      if (e2.children(".jstree-children").remove(), e2 = e2[0], t2.children.length && t2.state.loaded) {
        for ((s2 = a2.createElement("UL")).setAttribute("role", "group"), s2.className = "jstree-children", i2 = 0, r2 = t2.children.length; i2 < r2; i2++) s2.appendChild(this.redraw_node(t2.children[i2], true, true));
        e2.appendChild(s2);
      }
    }, redraw_node: function(e2, t2, i2, r2) {
      var s2 = this.get_node(e2), a2 = false, n2 = false, o2 = false, d2 = false, c2 = false, l2 = false, h2 = "", _2 = b, g2 = this._model.data, u2 = false, f2 = false, p2 = null, m2 = 0, v2 = 0, j2 = false, k = false;
      if (!s2) return false;
      if (s2.id === E.jstree.root) return this.redraw(true);
      if (t2 = t2 || 0 === s2.children.length, e2 = b.querySelector ? this.element[0].querySelector("#" + (-1 !== "0123456789".indexOf(s2.id[0]) ? "\\3" + s2.id[0] + " " + s2.id.substr(1).replace(E.jstree.idregex, "\\$&") : s2.id.replace(E.jstree.idregex, "\\$&"))) : b.getElementById(s2.id)) e2 = E(e2), i2 || ((a2 = e2.parent().parent()[0]) === this.element[0] && (a2 = null), n2 = e2.index()), (t2 = !t2 && s2.children.length && !e2.children(".jstree-children").length ? true : t2) || (o2 = e2.children(".jstree-children")[0]), u2 = e2.children(".jstree-anchor")[0] === b.activeElement, e2.remove();
      else if (t2 = true, !i2) {
        if (!(null === (a2 = s2.parent !== E.jstree.root ? E("#" + s2.parent.replace(E.jstree.idregex, "\\$&"), this.element)[0] : null) || a2 && g2[s2.parent].state.opened)) return false;
        n2 = E.inArray(s2.id, (null === a2 ? g2[E.jstree.root] : g2[s2.parent]).children);
      }
      for (d2 in e2 = this._data.core.node.cloneNode(true), h2 = "jstree-node ", s2.li_attr) s2.li_attr.hasOwnProperty(d2) && "id" !== d2 && ("class" !== d2 ? e2.setAttribute(d2, s2.li_attr[d2]) : h2 += s2.li_attr[d2]);
      for (s2.a_attr.id || (s2.a_attr.id = s2.id + "_anchor"), e2.childNodes[1].setAttribute("aria-selected", !!s2.state.selected), e2.childNodes[1].setAttribute("aria-level", s2.parents.length), this.settings.core.compute_elements_positions && (e2.childNodes[1].setAttribute("aria-setsize", g2[s2.parent].children.length), e2.childNodes[1].setAttribute("aria-posinset", g2[s2.parent].children.indexOf(s2.id) + 1)), s2.state.disabled && e2.childNodes[1].setAttribute("aria-disabled", true), d2 = 0, c2 = s2.children.length; d2 < c2; d2++) if (!g2[s2.children[d2]].state.hidden) {
        j2 = true;
        break;
      }
      if (null !== s2.parent && g2[s2.parent] && !s2.state.hidden && (d2 = E.inArray(s2.id, g2[s2.parent].children), k = s2.id, -1 !== d2)) {
        for (d2++, c2 = g2[s2.parent].children.length; d2 < c2; d2++) if ((k = !g2[g2[s2.parent].children[d2]].state.hidden ? g2[s2.parent].children[d2] : k) !== s2.id) break;
      }
      for (c2 in s2.state.hidden && (h2 += " jstree-hidden"), s2.state.loading && (h2 += " jstree-loading"), s2.state.loaded && !j2 ? h2 += " jstree-leaf" : (h2 += s2.state.opened && s2.state.loaded ? " jstree-open" : " jstree-closed", e2.childNodes[1].setAttribute("aria-expanded", s2.state.opened && s2.state.loaded)), k === s2.id && (h2 += " jstree-last"), e2.id = s2.id, e2.className = h2, h2 = (s2.state.selected ? " jstree-clicked" : "") + (s2.state.disabled ? " jstree-disabled" : ""), s2.a_attr) s2.a_attr.hasOwnProperty(c2) && ("href" === c2 && "#" === s2.a_attr[c2] || ("class" !== c2 ? e2.childNodes[1].setAttribute(c2, s2.a_attr[c2]) : h2 += " " + s2.a_attr[c2]));
      if (h2.length && (e2.childNodes[1].className = "jstree-anchor " + h2), (s2.icon && true !== s2.icon || false === s2.icon) && (false === s2.icon ? e2.childNodes[1].childNodes[0].className += " jstree-themeicon-hidden" : -1 === s2.icon.indexOf("/") && -1 === s2.icon.indexOf(".") ? e2.childNodes[1].childNodes[0].className += " " + s2.icon + " jstree-themeicon-custom" : (e2.childNodes[1].childNodes[0].style.backgroundImage = 'url("' + s2.icon + '")', e2.childNodes[1].childNodes[0].style.backgroundPosition = "center center", e2.childNodes[1].childNodes[0].style.backgroundSize = "auto", e2.childNodes[1].childNodes[0].className += " jstree-themeicon-custom")), this.settings.core.force_text ? e2.childNodes[1].appendChild(_2.createTextNode(s2.text)) : e2.childNodes[1].innerHTML += s2.text, t2 && s2.children.length && (s2.state.opened || r2) && s2.state.loaded) {
        for ((l2 = _2.createElement("UL")).setAttribute("role", "group"), l2.className = "jstree-children", d2 = 0, c2 = s2.children.length; d2 < c2; d2++) l2.appendChild(this.redraw_node(s2.children[d2], t2, true));
        e2.appendChild(l2);
      }
      if (o2 && e2.appendChild(o2), !i2) {
        for (d2 = 0, c2 = (a2 = a2 || this.element[0]).childNodes.length; d2 < c2; d2++) if (a2.childNodes[d2] && a2.childNodes[d2].className && -1 !== a2.childNodes[d2].className.indexOf("jstree-children")) {
          p2 = a2.childNodes[d2];
          break;
        }
        p2 || ((p2 = _2.createElement("UL")).setAttribute("role", "group"), p2.className = "jstree-children", a2.appendChild(p2)), n2 < (a2 = p2).childNodes.length ? a2.insertBefore(e2, a2.childNodes[n2]) : a2.appendChild(e2), u2 && (m2 = this.element[0].scrollTop, v2 = this.element[0].scrollLeft, e2.childNodes[1].focus(), this.element[0].scrollTop = m2, this.element[0].scrollLeft = v2);
      }
      return s2.state.opened && !s2.state.loaded && (s2.state.opened = false, setTimeout(function() {
        this.open_node(s2.id, false, 0);
      }.bind(this), 0)), e2;
    }, open_node: function(e2, i2, r2) {
      var t2, s2, a2, n2;
      if (E.vakata.is_array(e2)) {
        for (t2 = 0, s2 = (e2 = e2.slice()).length; t2 < s2; t2++) this.open_node(e2[t2], i2, r2);
        return true;
      }
      return !(!(e2 = this.get_node(e2)) || e2.id === E.jstree.root) && (r2 = r2 === P ? this.settings.core.animation : r2, this.is_closed(e2) ? this.is_loaded(e2) ? (a2 = this.get_node(e2, true), n2 = this, a2.length && (r2 && a2.children(".jstree-children").length && a2.children(".jstree-children").stop(true, true), e2.children.length && !this._firstChild(a2.children(".jstree-children")[0]) && this.draw_children(e2), r2 ? (this.trigger("before_open", { node: e2 }), a2.children(".jstree-children").css("display", "none").end().removeClass("jstree-closed").addClass("jstree-open").children(".jstree-anchor").attr("aria-expanded", true).end().children(".jstree-children").stop(true, true).slideDown(r2, function() {
        this.style.display = "", n2.element && n2.trigger("after_open", { node: e2 });
      })) : (this.trigger("before_open", { node: e2 }), a2[0].className = a2[0].className.replace("jstree-closed", "jstree-open"), a2[0].childNodes[1].setAttribute("aria-expanded", true))), e2.state.opened = true, i2 && i2.call(this, e2, true), a2.length || this.trigger("before_open", { node: e2 }), this.trigger("open_node", { node: e2 }), r2 && a2.length || this.trigger("after_open", { node: e2 }), true) : this.is_loading(e2) ? setTimeout(function() {
        this.open_node(e2, i2, r2);
      }.bind(this), 500) : void this.load_node(e2, function(e3, t3) {
        return t3 ? this.open_node(e3, i2, r2) : !!i2 && i2.call(this, e3, false);
      }) : (i2 && i2.call(this, e2, false), false));
    }, _open_to: function(e2) {
      if (!(e2 = this.get_node(e2)) || e2.id === E.jstree.root) return false;
      for (var t2, i2, r2 = e2.parents, t2 = 0, i2 = r2.length; t2 < i2; t2 += 1) t2 !== E.jstree.root && this.open_node(r2[t2], false, 0);
      return E("#" + e2.id.replace(E.jstree.idregex, "\\$&"), this.element);
    }, close_node: function(e2, t2) {
      var i2, r2, s2, a2;
      if (E.vakata.is_array(e2)) {
        for (i2 = 0, r2 = (e2 = e2.slice()).length; i2 < r2; i2++) this.close_node(e2[i2], t2);
        return true;
      }
      return !(!(e2 = this.get_node(e2)) || e2.id === E.jstree.root) && (!this.is_closed(e2) && (t2 = t2 === P ? this.settings.core.animation : t2, a2 = (s2 = this).get_node(e2, true), e2.state.opened = false, this.trigger("close_node", { node: e2 }), void (a2.length ? t2 ? a2.children(".jstree-children").attr("style", "display:block !important").end().removeClass("jstree-open").addClass("jstree-closed").children(".jstree-anchor").attr("aria-expanded", false).end().children(".jstree-children").stop(true, true).slideUp(t2, function() {
        this.style.display = "", a2.children(".jstree-children").remove(), s2.element && s2.trigger("after_close", { node: e2 });
      }) : (a2[0].className = a2[0].className.replace("jstree-open", "jstree-closed"), a2.children(".jstree-anchor").attr("aria-expanded", false), a2.children(".jstree-children").remove(), this.trigger("after_close", { node: e2 })) : this.trigger("after_close", { node: e2 }))));
    }, toggle_node: function(e2) {
      var t2, i2;
      if (E.vakata.is_array(e2)) {
        for (t2 = 0, i2 = (e2 = e2.slice()).length; t2 < i2; t2++) this.toggle_node(e2[t2]);
        return true;
      }
      return this.is_closed(e2) ? this.open_node(e2) : this.is_open(e2) ? this.close_node(e2) : void 0;
    }, open_all: function(e2, i2, r2) {
      if (e2 = e2 || E.jstree.root, !(e2 = this.get_node(e2))) return false;
      var t2 = e2.id === E.jstree.root ? this.get_container_ul() : this.get_node(e2, true), s2, a2, n2;
      if (!t2.length) {
        for (s2 = 0, a2 = e2.children_d.length; s2 < a2; s2++) this.is_closed(this._model.data[e2.children_d[s2]]) && (this._model.data[e2.children_d[s2]].state.opened = true);
        return this.trigger("open_all", { node: e2 });
      }
      r2 = r2 || t2, (t2 = (n2 = this).is_closed(e2) ? t2.find(".jstree-closed").addBack() : t2.find(".jstree-closed")).each(function() {
        n2.open_node(this, function(e3, t3) {
          t3 && this.is_parent(e3) && this.open_all(e3, i2, r2);
        }, i2 || 0);
      }), 0 === r2.find(".jstree-closed").length && this.trigger("open_all", { node: this.get_node(r2) });
    }, close_all: function(e2, t2) {
      if (e2 = e2 || E.jstree.root, !(e2 = this.get_node(e2))) return false;
      var i2 = e2.id === E.jstree.root ? this.get_container_ul() : this.get_node(e2, true), r2 = this, s2, a2;
      for (i2.length && (i2 = this.is_open(e2) ? i2.find(".jstree-open").addBack() : i2.find(".jstree-open"), E(i2.get().reverse()).each(function() {
        r2.close_node(this, t2 || 0);
      })), s2 = 0, a2 = e2.children_d.length; s2 < a2; s2++) this._model.data[e2.children_d[s2]].state.opened = false;
      this.trigger("close_all", { node: e2 });
    }, is_disabled: function(e2) {
      return (e2 = this.get_node(e2)) && e2.state && e2.state.disabled;
    }, enable_node: function(e2) {
      var t2, i2;
      if (E.vakata.is_array(e2)) {
        for (t2 = 0, i2 = (e2 = e2.slice()).length; t2 < i2; t2++) this.enable_node(e2[t2]);
        return true;
      }
      if (!(e2 = this.get_node(e2)) || e2.id === E.jstree.root) return false;
      e2.state.disabled = false, this.get_node(e2, true).children(".jstree-anchor").removeClass("jstree-disabled").attr("aria-disabled", false), this.trigger("enable_node", { node: e2 });
    }, disable_node: function(e2) {
      var t2, i2;
      if (E.vakata.is_array(e2)) {
        for (t2 = 0, i2 = (e2 = e2.slice()).length; t2 < i2; t2++) this.disable_node(e2[t2]);
        return true;
      }
      if (!(e2 = this.get_node(e2)) || e2.id === E.jstree.root) return false;
      e2.state.disabled = true, this.get_node(e2, true).children(".jstree-anchor").addClass("jstree-disabled").attr("aria-disabled", true), this.trigger("disable_node", { node: e2 });
    }, is_hidden: function(e2) {
      return true === (e2 = this.get_node(e2)).state.hidden;
    }, hide_node: function(e2, t2) {
      var i2, r2;
      if (E.vakata.is_array(e2)) {
        for (i2 = 0, r2 = (e2 = e2.slice()).length; i2 < r2; i2++) this.hide_node(e2[i2], true);
        return t2 || this.redraw(), true;
      }
      if (!(e2 = this.get_node(e2)) || e2.id === E.jstree.root) return false;
      e2.state.hidden || (e2.state.hidden = true, this._node_changed(e2.parent), t2 || this.redraw(), this.trigger("hide_node", { node: e2 }));
    }, show_node: function(e2, t2) {
      var i2, r2;
      if (E.vakata.is_array(e2)) {
        for (i2 = 0, r2 = (e2 = e2.slice()).length; i2 < r2; i2++) this.show_node(e2[i2], true);
        return t2 || this.redraw(), true;
      }
      if (!(e2 = this.get_node(e2)) || e2.id === E.jstree.root) return false;
      e2.state.hidden && (e2.state.hidden = false, this._node_changed(e2.parent), t2 || this.redraw(), this.trigger("show_node", { node: e2 }));
    }, hide_all: function(e2) {
      var t2, i2 = this._model.data, r2 = [];
      for (t2 in i2) i2.hasOwnProperty(t2) && t2 !== E.jstree.root && !i2[t2].state.hidden && (i2[t2].state.hidden = true, r2.push(t2));
      return this._model.force_full_redraw = true, e2 || this.redraw(), this.trigger("hide_all", { nodes: r2 }), r2;
    }, show_all: function(e2) {
      var t2, i2 = this._model.data, r2 = [];
      for (t2 in i2) i2.hasOwnProperty(t2) && t2 !== E.jstree.root && i2[t2].state.hidden && (i2[t2].state.hidden = false, r2.push(t2));
      return this._model.force_full_redraw = true, e2 || this.redraw(), this.trigger("show_all", { nodes: r2 }), r2;
    }, activate_node: function(e2, t2) {
      if (this.is_disabled(e2)) return false;
      if (t2 && "object" == typeof t2 || (t2 = {}), this._data.core.last_clicked = this._data.core.last_clicked && this._data.core.last_clicked.id !== P ? this.get_node(this._data.core.last_clicked.id) : null, this._data.core.last_clicked && !this._data.core.last_clicked.state.selected && (this._data.core.last_clicked = null), !this._data.core.last_clicked && this._data.core.selected.length && (this._data.core.last_clicked = this.get_node(this._data.core.selected[this._data.core.selected.length - 1])), this.settings.core.multiple && (t2.metaKey || t2.ctrlKey || t2.shiftKey) && (!t2.shiftKey || this._data.core.last_clicked && this.get_parent(e2) && this.get_parent(e2) === this._data.core.last_clicked.parent)) if (t2.shiftKey) {
        for (var i2 = this.get_node(e2).id, r2 = this._data.core.last_clicked.id, s2 = this.get_node(this._data.core.last_clicked.parent).children, a2 = false, n2, o2, n2 = 0, o2 = s2.length; n2 < o2; n2 += 1) s2[n2] === i2 && (a2 = !a2), s2[n2] === r2 && (a2 = !a2), this.is_disabled(s2[n2]) || !a2 && s2[n2] !== i2 && s2[n2] !== r2 ? t2.ctrlKey || this.deselect_node(s2[n2], true, t2) : this.is_hidden(s2[n2]) || this.select_node(s2[n2], true, false, t2);
        this.trigger("changed", { action: "select_node", node: this.get_node(e2), selected: this._data.core.selected, event: t2 });
      } else this.is_selected(e2) ? this.deselect_node(e2, false, t2) : (t2.ctrlKey && (this._data.core.last_clicked = this.get_node(e2)), this.select_node(e2, false, false, t2));
      else !this.settings.core.multiple && (t2.metaKey || t2.ctrlKey || t2.shiftKey) && this.is_selected(e2) ? this.deselect_node(e2, false, t2) : (!this.settings.core.allow_reselect && this.is_selected(e2) && 1 === this._data.core.selected.length || (this.deselect_all(true), this.select_node(e2, false, false, t2)), this._data.core.last_clicked = this.get_node(e2));
      this.trigger("activate_node", { node: this.get_node(e2), event: t2 });
    }, hover_node: function(e2) {
      if (!(e2 = this.get_node(e2, true)) || !e2.length || e2.children(".jstree-hovered").length) return false;
      var t2 = this.element.find(".jstree-hovered"), i2 = this.element;
      t2 && t2.length && this.dehover_node(t2), e2.children(".jstree-anchor").addClass("jstree-hovered"), this.trigger("hover_node", { node: this.get_node(e2) }), setTimeout(function() {
        i2.attr("aria-activedescendant", e2[0].id);
      }, 0);
    }, dehover_node: function(e2) {
      if (!(e2 = this.get_node(e2, true)) || !e2.length || !e2.children(".jstree-hovered").length) return false;
      e2.children(".jstree-anchor").removeClass("jstree-hovered"), this.trigger("dehover_node", { node: this.get_node(e2) });
    }, select_node: function(e2, t2, i2, r2) {
      var s2, a2, n2, o2;
      if (E.vakata.is_array(e2)) {
        for (a2 = 0, n2 = (e2 = e2.slice()).length; a2 < n2; a2++) this.select_node(e2[a2], t2, i2, r2);
        return true;
      }
      if (!(e2 = this.get_node(e2)) || e2.id === E.jstree.root) return false;
      s2 = this.get_node(e2, true), e2.state.selected || (e2.state.selected = true, this._data.core.selected.push(e2.id), (s2 = !i2 ? this._open_to(e2) : s2) && s2.length && s2.children(".jstree-anchor").addClass("jstree-clicked").attr("aria-selected", true), this.trigger("select_node", { node: e2, selected: this._data.core.selected, event: r2 }), t2 || this.trigger("changed", { action: "select_node", node: e2, selected: this._data.core.selected, event: r2 }));
    }, deselect_node: function(e2, t2, i2) {
      var r2, s2, a2;
      if (E.vakata.is_array(e2)) {
        for (r2 = 0, s2 = (e2 = e2.slice()).length; r2 < s2; r2++) this.deselect_node(e2[r2], t2, i2);
        return true;
      }
      if (!(e2 = this.get_node(e2)) || e2.id === E.jstree.root) return false;
      a2 = this.get_node(e2, true), e2.state.selected && (e2.state.selected = false, this._data.core.selected = E.vakata.array_remove_item(this._data.core.selected, e2.id), a2.length && a2.children(".jstree-anchor").removeClass("jstree-clicked").attr("aria-selected", false), this.trigger("deselect_node", { node: e2, selected: this._data.core.selected, event: i2 }), t2 || this.trigger("changed", { action: "deselect_node", node: e2, selected: this._data.core.selected, event: i2 }));
    }, select_all: function(e2) {
      var t2 = this._data.core.selected.concat([]), i2, r2;
      for (this._data.core.selected = this._model.data[E.jstree.root].children_d.concat(), i2 = 0, r2 = this._data.core.selected.length; i2 < r2; i2++) this._model.data[this._data.core.selected[i2]] && (this._model.data[this._data.core.selected[i2]].state.selected = true);
      this.redraw(true), this.trigger("select_all", { selected: this._data.core.selected }), e2 || this.trigger("changed", { action: "select_all", selected: this._data.core.selected, old_selection: t2 });
    }, deselect_all: function(e2) {
      for (var t2 = this._data.core.selected.concat([]), i2, r2, i2 = 0, r2 = this._data.core.selected.length; i2 < r2; i2++) this._model.data[this._data.core.selected[i2]] && (this._model.data[this._data.core.selected[i2]].state.selected = false);
      this._data.core.selected = [], this.element.find(".jstree-clicked").removeClass("jstree-clicked").attr("aria-selected", false), this.trigger("deselect_all", { selected: this._data.core.selected, node: t2 }), e2 || this.trigger("changed", { action: "deselect_all", selected: this._data.core.selected, old_selection: t2 });
    }, is_selected: function(e2) {
      return !(!(e2 = this.get_node(e2)) || e2.id === E.jstree.root) && e2.state.selected;
    }, get_selected: function(e2) {
      return e2 ? E.map(this._data.core.selected, function(e3) {
        return this.get_node(e3);
      }.bind(this)) : this._data.core.selected.slice();
    }, get_top_selected: function(e2) {
      for (var t2 = this.get_selected(true), i2 = {}, r2, s2, a2, n2, r2 = 0, s2 = t2.length; r2 < s2; r2++) i2[t2[r2].id] = t2[r2];
      for (r2 = 0, s2 = t2.length; r2 < s2; r2++) for (a2 = 0, n2 = t2[r2].children_d.length; a2 < n2; a2++) i2[t2[r2].children_d[a2]] && delete i2[t2[r2].children_d[a2]];
      for (r2 in t2 = [], i2) i2.hasOwnProperty(r2) && t2.push(r2);
      return e2 ? E.map(t2, function(e3) {
        return this.get_node(e3);
      }.bind(this)) : t2;
    }, get_bottom_selected: function(e2) {
      for (var t2 = this.get_selected(true), i2 = [], r2, s2, r2 = 0, s2 = t2.length; r2 < s2; r2++) t2[r2].children.length || i2.push(t2[r2].id);
      return e2 ? E.map(i2, function(e3) {
        return this.get_node(e3);
      }.bind(this)) : i2;
    }, get_state: function() {
      var e2 = { core: { open: [], loaded: [], scroll: { left: this.element.scrollLeft(), top: this.element.scrollTop() }, selected: [] } }, t2;
      for (t2 in this._model.data) this._model.data.hasOwnProperty(t2) && t2 !== E.jstree.root && (this._model.data[t2].state.loaded && this.settings.core.loaded_state && e2.core.loaded.push(t2), this._model.data[t2].state.opened && e2.core.open.push(t2), this._model.data[t2].state.selected && e2.core.selected.push(t2));
      return e2;
    }, set_state: function(t2, i2) {
      if (t2) {
        if (t2.core && t2.core.selected && t2.core.initial_selection === P && (t2.core.initial_selection = this._data.core.selected.concat([]).sort().join(",")), t2.core) {
          var e2, r2, s2, a2, n2;
          if (t2.core.loaded) return this.settings.core.loaded_state && E.vakata.is_array(t2.core.loaded) && t2.core.loaded.length ? this._load_nodes(t2.core.loaded, function(e3) {
            delete t2.core.loaded, this.set_state(t2, i2);
          }) : (delete t2.core.loaded, this.set_state(t2, i2)), false;
          if (t2.core.open) return E.vakata.is_array(t2.core.open) && t2.core.open.length ? this._load_nodes(t2.core.open, function(e3) {
            this.open_node(e3, false, 0), delete t2.core.open, this.set_state(t2, i2);
          }) : (delete t2.core.open, this.set_state(t2, i2)), false;
          if (t2.core.scroll) return t2.core.scroll && t2.core.scroll.left !== P && this.element.scrollLeft(t2.core.scroll.left), t2.core.scroll && t2.core.scroll.top !== P && this.element.scrollTop(t2.core.scroll.top), delete t2.core.scroll, this.set_state(t2, i2), false;
          if (t2.core.selected) return a2 = this, t2.core.initial_selection !== P && t2.core.initial_selection !== this._data.core.selected.concat([]).sort().join(",") || (this.deselect_all(), E.each(t2.core.selected, function(e3, t3) {
            a2.select_node(t3, false, true);
          })), delete t2.core.initial_selection, delete t2.core.selected, this.set_state(t2, i2), false;
          for (n2 in t2) t2.hasOwnProperty(n2) && "core" !== n2 && -1 === E.inArray(n2, this.settings.plugins) && delete t2[n2];
          if (E.isEmptyObject(t2.core)) return delete t2.core, this.set_state(t2, i2), false;
        }
        return E.isEmptyObject(t2) ? (t2 = null, i2 && i2.call(this), this.trigger("set_state"), false) : true;
      }
      return false;
    }, refresh: function(e2, t2) {
      this._data.core.state = true === t2 ? {} : this.get_state(), t2 && E.vakata.is_function(t2) && (this._data.core.state = t2.call(this, this._data.core.state)), this._cnt = 0, this._model.data = {}, this._model.data[E.jstree.root] = { id: E.jstree.root, parent: null, parents: [], children: [], children_d: [], state: { loaded: false } }, this._data.core.selected = [], this._data.core.last_clicked = null, this._data.core.focused = null;
      var i2 = this.get_container_ul()[0].className;
      e2 || (this.element.html("<ul class='" + i2 + "' role='group'><li class='jstree-initial-node jstree-loading jstree-leaf jstree-last' role='none' id='j" + this._id + "_loading'><i class='jstree-icon jstree-ocl'></i><a class='jstree-anchor' role='treeitem' href='#'><i class='jstree-icon jstree-themeicon-hidden'></i>" + this.get_string("Loading ...") + "</a></li></ul>"), this.element.attr("aria-activedescendant", "j" + this._id + "_loading")), this.load_node(E.jstree.root, function(e3, t3) {
        t3 && (this.get_container_ul()[0].className = i2, this._firstChild(this.get_container_ul()[0]) && this.element.attr("aria-activedescendant", this._firstChild(this.get_container_ul()[0]).id), this.set_state(E.extend(true, {}, this._data.core.state), function() {
          this.trigger("refresh");
        })), this._data.core.state = null;
      });
    }, refresh_node: function(t2) {
      if (!(t2 = this.get_node(t2)) || t2.id === E.jstree.root) return false;
      var i2 = [], e2 = [], r2 = this._data.core.selected.concat([]);
      e2.push(t2.id), true === t2.state.opened && i2.push(t2.id), this.get_node(t2, true).find(".jstree-open").each(function() {
        e2.push(this.id), i2.push(this.id);
      }), this._load_nodes(e2, function(e3) {
        this.open_node(i2, false, 0), this.select_node(r2), this.trigger("refresh_node", { node: t2, nodes: e3 });
      }.bind(this), false, true);
    }, set_id: function(e2, t2) {
      if (!(e2 = this.get_node(e2)) || e2.id === E.jstree.root) return false;
      var i2, r2, s2 = this._model.data, a2 = e2.id;
      for (t2 = t2.toString(), s2[e2.parent].children[E.inArray(e2.id, s2[e2.parent].children)] = t2, i2 = 0, r2 = e2.parents.length; i2 < r2; i2++) s2[e2.parents[i2]].children_d[E.inArray(e2.id, s2[e2.parents[i2]].children_d)] = t2;
      for (i2 = 0, r2 = e2.children.length; i2 < r2; i2++) s2[e2.children[i2]].parent = t2;
      for (i2 = 0, r2 = e2.children_d.length; i2 < r2; i2++) s2[e2.children_d[i2]].parents[E.inArray(e2.id, s2[e2.children_d[i2]].parents)] = t2;
      return -1 !== (i2 = E.inArray(e2.id, this._data.core.selected)) && (this._data.core.selected[i2] = t2), (i2 = this.get_node(e2.id, true)) && (i2.attr("id", t2), this.element.attr("aria-activedescendant") === e2.id && this.element.attr("aria-activedescendant", t2)), delete s2[e2.id], e2.id = t2, s2[e2.li_attr.id = t2] = e2, this.trigger("set_id", { node: e2, new: e2.id, old: a2 }), true;
    }, get_text: function(e2) {
      return !(!(e2 = this.get_node(e2)) || e2.id === E.jstree.root) && e2.text;
    }, set_text: function(e2, t2) {
      var i2, r2;
      if (E.vakata.is_array(e2)) {
        for (i2 = 0, r2 = (e2 = e2.slice()).length; i2 < r2; i2++) this.set_text(e2[i2], t2);
        return true;
      }
      return !(!(e2 = this.get_node(e2)) || e2.id === E.jstree.root) && (e2.text = t2, this.get_node(e2, true).length && this.redraw_node(e2.id), this.trigger("set_text", { obj: e2, text: t2 }), true);
    }, get_json: function(e2, t2, i2) {
      if (!(e2 = this.get_node(e2 || E.jstree.root))) return false;
      t2 && t2.flat && !i2 && (i2 = []);
      var r2 = { id: e2.id, text: e2.text, icon: this.get_icon(e2), li_attr: E.extend(true, {}, e2.li_attr), a_attr: E.extend(true, {}, e2.a_attr), state: {}, data: (!t2 || !t2.no_data) && E.extend(true, E.vakata.is_array(e2.data) ? [] : {}, e2.data) }, s2, a2;
      if (t2 && t2.flat ? r2.parent = e2.parent : r2.children = [], t2 && t2.no_state) delete r2.state;
      else for (s2 in e2.state) e2.state.hasOwnProperty(s2) && (r2.state[s2] = e2.state[s2]);
      if (t2 && t2.no_li_attr && delete r2.li_attr, t2 && t2.no_a_attr && delete r2.a_attr, t2 && t2.no_id && (delete r2.id, r2.li_attr && r2.li_attr.id && delete r2.li_attr.id, r2.a_attr && r2.a_attr.id && delete r2.a_attr.id), t2 && t2.flat && e2.id !== E.jstree.root && i2.push(r2), !t2 || !t2.no_children) for (s2 = 0, a2 = e2.children.length; s2 < a2; s2++) t2 && t2.flat ? this.get_json(e2.children[s2], t2, i2) : r2.children.push(this.get_json(e2.children[s2], t2));
      return t2 && t2.flat ? i2 : e2.id === E.jstree.root ? r2.children : r2;
    }, create_node: function(e2, t2, i2, r2, s2) {
      if (null === e2 && (e2 = E.jstree.root), !(e2 = this.get_node(e2))) return false;
      if (!(i2 = i2 === P ? "last" : i2).toString().match(/^(before|after)$/) && !s2 && !this.is_loaded(e2)) return this.load_node(e2, function() {
        this.create_node(e2, t2, i2, r2, true);
      });
      var a2, n2, o2, d2;
      switch ((t2 = "string" == typeof (t2 = t2 || { text: this.get_string("New node") }) ? { text: t2 } : E.extend(true, {}, t2)).text === P && (t2.text = this.get_string("New node")), i2 = e2.id === E.jstree.root && "after" === (i2 = "before" === i2 ? "first" : i2) ? "last" : i2) {
        case "before":
          a2 = this.get_node(e2.parent), i2 = E.inArray(e2.id, a2.children), e2 = a2;
          break;
        case "after":
          a2 = this.get_node(e2.parent), i2 = E.inArray(e2.id, a2.children) + 1, e2 = a2;
          break;
        case "inside":
        case "first":
          i2 = 0;
          break;
        case "last":
          i2 = e2.children.length;
          break;
        default:
          i2 = i2 || 0;
      }
      if (i2 > e2.children.length && (i2 = e2.children.length), t2.id === P && (t2.id = true), !this.check("create_node", t2, e2, i2)) return this.settings.core.error.call(this, this._data.core.last_error), false;
      if (true === t2.id && delete t2.id, !(t2 = this._parse_model_from_json(t2, e2.id, e2.parents.concat()))) return false;
      for (a2 = this.get_node(t2), (n2 = []).push(t2), n2 = n2.concat(a2.children_d), this.trigger("model", { nodes: n2, parent: e2.id }), e2.children_d = e2.children_d.concat(n2), o2 = 0, d2 = e2.parents.length; o2 < d2; o2++) this._model.data[e2.parents[o2]].children_d = this._model.data[e2.parents[o2]].children_d.concat(n2);
      for (t2 = a2, a2 = [], o2 = 0, d2 = e2.children.length; o2 < d2; o2++) a2[i2 <= o2 ? o2 + 1 : o2] = e2.children[o2];
      return a2[i2] = t2.id, e2.children = a2, this.redraw_node(e2, true), this.trigger("create_node", { node: this.get_node(t2), parent: e2.id, position: i2 }), r2 && r2.call(this, this.get_node(t2)), t2.id;
    }, rename_node: function(e2, t2) {
      var i2, r2, s2;
      if (E.vakata.is_array(e2)) {
        for (i2 = 0, r2 = (e2 = e2.slice()).length; i2 < r2; i2++) this.rename_node(e2[i2], t2);
        return true;
      }
      return !(!(e2 = this.get_node(e2)) || e2.id === E.jstree.root) && (s2 = e2.text, this.check("rename_node", e2, this.get_parent(e2), t2) ? (this.set_text(e2, t2), this.trigger("rename_node", { node: e2, text: t2, old: s2 }), true) : (this.settings.core.error.call(this, this._data.core.last_error), false));
    }, delete_node: function(e2) {
      var t2, i2, r2, s2, a2, n2, o2, d2, c2, l2, h2, s2;
      if (E.vakata.is_array(e2)) {
        for (t2 = 0, i2 = (e2 = e2.slice()).length; t2 < i2; t2++) this.delete_node(e2[t2]);
        return true;
      }
      if (!(e2 = this.get_node(e2)) || e2.id === E.jstree.root) return false;
      if (r2 = this.get_node(e2.parent), s2 = E.inArray(e2.id, r2.children), l2 = false, !this.check("delete_node", e2, r2, s2)) return this.settings.core.error.call(this, this._data.core.last_error), false;
      for (-1 !== s2 && (r2.children = E.vakata.array_remove(r2.children, s2)), (a2 = e2.children_d.concat([])).push(e2.id), n2 = 0, o2 = e2.parents.length; n2 < o2; n2++) this._model.data[e2.parents[n2]].children_d = E.vakata.array_filter(this._model.data[e2.parents[n2]].children_d, function(e3) {
        return -1 === E.inArray(e3, a2);
      });
      for (d2 = 0, c2 = a2.length; d2 < c2; d2++) if (this._model.data[a2[d2]].state.selected) {
        l2 = true;
        break;
      }
      for (l2 && (this._data.core.selected = E.vakata.array_filter(this._data.core.selected, function(e3) {
        return -1 === E.inArray(e3, a2);
      })), this.trigger("delete_node", { node: e2, parent: r2.id }), l2 && this.trigger("changed", { action: "delete_node", node: e2, selected: this._data.core.selected, parent: r2.id }), d2 = 0, c2 = a2.length; d2 < c2; d2++) delete this._model.data[a2[d2]];
      return -1 !== E.inArray(this._data.core.focused, a2) && (this._data.core.focused = null, h2 = this.element[0].scrollTop, s2 = this.element[0].scrollLeft, r2.id === E.jstree.root ? this._model.data[E.jstree.root].children[0] && this.get_node(this._model.data[E.jstree.root].children[0], true).children(".jstree-anchor").trigger("focus") : this.get_node(r2, true).children(".jstree-anchor").trigger("focus"), this.element[0].scrollTop = h2, this.element[0].scrollLeft = s2), this.redraw_node(r2, true), true;
    }, check: function(e2, t2, i2, r2, s2) {
      t2 = t2 && t2.id ? t2 : this.get_node(t2), i2 = i2 && i2.id ? i2 : this.get_node(i2);
      var a2 = e2.match(/^(move_node|copy_node|create_node)$/i) ? i2 : t2, n2 = this.settings.core.check_callback;
      if ("move_node" === e2 || "copy_node" === e2) {
        if (!(s2 && s2.is_multi || "move_node" !== e2 || E.inArray(t2.id, i2.children) !== r2)) return !(this._data.core.last_error = { error: "check", plugin: "core", id: "core_08", reason: "Moving node to its current position", data: JSON.stringify({ chk: e2, pos: r2, obj: !(!t2 || !t2.id) && t2.id, par: !(!i2 || !i2.id) && i2.id }) });
        if (!(s2 && s2.is_multi || t2.id !== i2.id && ("move_node" !== e2 || E.inArray(t2.id, i2.children) !== r2) && -1 === E.inArray(i2.id, t2.children_d))) return !(this._data.core.last_error = { error: "check", plugin: "core", id: "core_01", reason: "Moving parent inside child", data: JSON.stringify({ chk: e2, pos: r2, obj: !(!t2 || !t2.id) && t2.id, par: !(!i2 || !i2.id) && i2.id }) });
      }
      return (a2 = a2 && a2.data ? a2.data : a2) && a2.functions && (false === a2.functions[e2] || true === a2.functions[e2]) ? (false === a2.functions[e2] && (this._data.core.last_error = { error: "check", plugin: "core", id: "core_02", reason: "Node data prevents function: " + e2, data: JSON.stringify({ chk: e2, pos: r2, obj: !(!t2 || !t2.id) && t2.id, par: !(!i2 || !i2.id) && i2.id }) }), a2.functions[e2]) : !(false === n2 || E.vakata.is_function(n2) && false === n2.call(this, e2, t2, i2, r2, s2) || n2 && false === n2[e2]) || !(this._data.core.last_error = { error: "check", plugin: "core", id: "core_03", reason: "User config for core.check_callback prevents function: " + e2, data: JSON.stringify({ chk: e2, pos: r2, obj: !(!t2 || !t2.id) && t2.id, par: !(!i2 || !i2.id) && i2.id }) });
    }, last_error: function() {
      return this._data.core.last_error;
    }, move_node: function(e2, t2, i2, r2, s2, a2, n2) {
      var o2, d2, c2, l2, h2, _2, g2, u2, f2, p2, m2, v2, j2, k;
      if (t2 = this.get_node(t2), i2 = i2 === P ? 0 : i2, !t2) return false;
      if (!i2.toString().match(/^(before|after)$/) && !s2 && !this.is_loaded(t2)) return this.load_node(t2, function() {
        this.move_node(e2, t2, i2, r2, true, false, n2);
      });
      if (E.vakata.is_array(e2)) {
        if (1 !== e2.length) {
          for (o2 = 0, d2 = e2.length; o2 < d2; o2++) (f2 = this.move_node(e2[o2], t2, i2, r2, s2, false, n2)) && (t2 = f2, i2 = "after");
          return this.redraw(), true;
        }
        e2 = e2[0];
      }
      if (!(e2 = e2 && e2.id !== P ? e2 : this.get_node(e2)) || e2.id === E.jstree.root) return false;
      if (c2 = (e2.parent || E.jstree.root).toString(), h2 = i2.toString().match(/^(before|after)$/) && t2.id !== E.jstree.root ? this.get_node(t2.parent) : t2, g2 = !(_2 = n2 || (this._model.data[e2.id] ? this : E.jstree.reference(e2.id))) || !_2._id || this._id !== _2._id, l2 = _2 && _2._id && c2 && _2._model.data[c2] && _2._model.data[c2].children ? E.inArray(e2.id, _2._model.data[c2].children) : -1, _2 && _2._id && (e2 = _2._model.data[e2.id]), g2) return !!(f2 = this.copy_node(e2, t2, i2, r2, s2, false, n2)) && (_2 && _2.delete_node(e2), f2);
      switch (i2 = t2.id === E.jstree.root && "after" === (i2 = "before" === i2 ? "first" : i2) ? "last" : i2) {
        case "before":
          i2 = E.inArray(t2.id, h2.children);
          break;
        case "after":
          i2 = E.inArray(t2.id, h2.children) + 1;
          break;
        case "inside":
        case "first":
          i2 = 0;
          break;
        case "last":
          i2 = h2.children.length;
          break;
        default:
          i2 = i2 || 0;
      }
      if (i2 > h2.children.length && (i2 = h2.children.length), !this.check("move_node", e2, h2, i2, { core: true, origin: n2, is_multi: _2 && _2._id && _2._id !== this._id, is_foreign: !_2 || !_2._id })) return this.settings.core.error.call(this, this._data.core.last_error), false;
      if (e2.parent === h2.id) {
        for (u2 = h2.children.concat(), -1 !== (f2 = E.inArray(e2.id, u2)) && (u2 = E.vakata.array_remove(u2, f2), f2 < i2 && i2--), f2 = [], p2 = 0, m2 = u2.length; p2 < m2; p2++) f2[i2 <= p2 ? p2 + 1 : p2] = u2[p2];
        f2[i2] = e2.id, h2.children = f2, this._node_changed(h2.id), this.redraw(h2.id === E.jstree.root);
      } else {
        for ((f2 = e2.children_d.concat()).push(e2.id), p2 = 0, m2 = e2.parents.length; p2 < m2; p2++) {
          for (u2 = [], v2 = 0, j2 = (k = _2._model.data[e2.parents[p2]].children_d).length; v2 < j2; v2++) -1 === E.inArray(k[v2], f2) && u2.push(k[v2]);
          _2._model.data[e2.parents[p2]].children_d = u2;
        }
        for (_2._model.data[c2].children = E.vakata.array_remove_item(_2._model.data[c2].children, e2.id), p2 = 0, m2 = h2.parents.length; p2 < m2; p2++) this._model.data[h2.parents[p2]].children_d = this._model.data[h2.parents[p2]].children_d.concat(f2);
        for (u2 = [], p2 = 0, m2 = h2.children.length; p2 < m2; p2++) u2[i2 <= p2 ? p2 + 1 : p2] = h2.children[p2];
        for (u2[i2] = e2.id, h2.children = u2, h2.children_d.push(e2.id), h2.children_d = h2.children_d.concat(e2.children_d), e2.parent = h2.id, (f2 = h2.parents.concat()).unshift(h2.id), k = e2.parents.length, f2 = (e2.parents = f2).concat(), p2 = 0, m2 = e2.children_d.length; p2 < m2; p2++) this._model.data[e2.children_d[p2]].parents = this._model.data[e2.children_d[p2]].parents.slice(0, -1 * k), Array.prototype.push.apply(this._model.data[e2.children_d[p2]].parents, f2);
        c2 !== E.jstree.root && h2.id !== E.jstree.root || (this._model.force_full_redraw = true), this._model.force_full_redraw || (this._node_changed(c2), this._node_changed(h2.id)), a2 || this.redraw();
      }
      return r2 && r2.call(this, e2, h2, i2), this.trigger("move_node", { node: e2, parent: h2.id, position: i2, old_parent: c2, old_position: l2, is_multi: _2 && _2._id && _2._id !== this._id, is_foreign: !_2 || !_2._id, old_instance: _2, new_instance: this }), e2.id;
    }, copy_node: function(e2, t2, i2, r2, s2, a2, n2) {
      var o2, d2, c2, l2, h2, _2, g2, u2, f2, p2, m2;
      if (t2 = this.get_node(t2), i2 = i2 === P ? 0 : i2, !t2) return false;
      if (!i2.toString().match(/^(before|after)$/) && !s2 && !this.is_loaded(t2)) return this.load_node(t2, function() {
        this.copy_node(e2, t2, i2, r2, true, false, n2);
      });
      if (E.vakata.is_array(e2)) {
        if (1 !== e2.length) {
          for (o2 = 0, d2 = e2.length; o2 < d2; o2++) (l2 = this.copy_node(e2[o2], t2, i2, r2, s2, true, n2)) && (t2 = l2, i2 = "after");
          return this.redraw(), true;
        }
        e2 = e2[0];
      }
      if (!(e2 = e2 && e2.id !== P ? e2 : this.get_node(e2)) || e2.id === E.jstree.root) return false;
      switch (u2 = (e2.parent || E.jstree.root).toString(), f2 = i2.toString().match(/^(before|after)$/) && t2.id !== E.jstree.root ? this.get_node(t2.parent) : t2, m2 = !(p2 = n2 || (this._model.data[e2.id] ? this : E.jstree.reference(e2.id))) || !p2._id || this._id !== p2._id, p2 && p2._id && (e2 = p2._model.data[e2.id]), i2 = t2.id === E.jstree.root && "after" === (i2 = "before" === i2 ? "first" : i2) ? "last" : i2) {
        case "before":
          i2 = E.inArray(t2.id, f2.children);
          break;
        case "after":
          i2 = E.inArray(t2.id, f2.children) + 1;
          break;
        case "inside":
        case "first":
          i2 = 0;
          break;
        case "last":
          i2 = f2.children.length;
          break;
        default:
          i2 = i2 || 0;
      }
      if (i2 > f2.children.length && (i2 = f2.children.length), !this.check("copy_node", e2, f2, i2, { core: true, origin: n2, is_multi: p2 && p2._id && p2._id !== this._id, is_foreign: !p2 || !p2._id })) return this.settings.core.error.call(this, this._data.core.last_error), false;
      if (!(g2 = p2 ? p2.get_json(e2, { no_id: true, no_data: true, no_state: true }) : e2)) return false;
      if (true === g2.id && delete g2.id, !(g2 = this._parse_model_from_json(g2, f2.id, f2.parents.concat()))) return false;
      for (l2 = this.get_node(g2), e2 && e2.state && false === e2.state.loaded && (l2.state.loaded = false), (c2 = []).push(g2), c2 = c2.concat(l2.children_d), this.trigger("model", { nodes: c2, parent: f2.id }), h2 = 0, _2 = f2.parents.length; h2 < _2; h2++) this._model.data[f2.parents[h2]].children_d = this._model.data[f2.parents[h2]].children_d.concat(c2);
      for (c2 = [], h2 = 0, _2 = f2.children.length; h2 < _2; h2++) c2[i2 <= h2 ? h2 + 1 : h2] = f2.children[h2];
      return c2[i2] = l2.id, f2.children = c2, f2.children_d.push(l2.id), f2.children_d = f2.children_d.concat(l2.children_d), f2.id === E.jstree.root && (this._model.force_full_redraw = true), this._model.force_full_redraw || this._node_changed(f2.id), a2 || this.redraw(f2.id === E.jstree.root), r2 && r2.call(this, l2, f2, i2), this.trigger("copy_node", { node: l2, original: e2, parent: f2.id, position: i2, old_parent: u2, old_position: p2 && p2._id && u2 && p2._model.data[u2] && p2._model.data[u2].children ? E.inArray(e2.id, p2._model.data[u2].children) : -1, is_multi: p2 && p2._id && p2._id !== this._id, is_foreign: !p2 || !p2._id, old_instance: p2, new_instance: this }), l2.id;
    }, cut: function(e2) {
      if (e2 = e2 || this._data.core.selected.concat(), !(e2 = !E.vakata.is_array(e2) ? [e2] : e2).length) return false;
      for (var t2 = [], i2, r2, s2, r2 = 0, s2 = e2.length; r2 < s2; r2++) (i2 = this.get_node(e2[r2])) && (i2.id || 0 === i2.id) && i2.id !== E.jstree.root && t2.push(i2);
      if (!t2.length) return false;
      a = t2, n = "move_node", (o = this).trigger("cut", { node: e2 });
    }, copy: function(e2) {
      if (e2 = e2 || this._data.core.selected.concat(), !(e2 = !E.vakata.is_array(e2) ? [e2] : e2).length) return false;
      for (var t2 = [], i2, r2, s2, r2 = 0, s2 = e2.length; r2 < s2; r2++) (i2 = this.get_node(e2[r2])) && i2.id !== P && i2.id !== E.jstree.root && t2.push(i2);
      if (!t2.length) return false;
      a = t2, n = "copy_node", (o = this).trigger("copy", { node: e2 });
    }, get_buffer: function() {
      return { mode: n, node: a, inst: o };
    }, can_paste: function() {
      return false !== n && false !== a;
    }, paste: function(e2, t2) {
      if (!((e2 = this.get_node(e2)) && n && n.match(/^(copy_node|move_node)$/) && a)) return false;
      this[n](a, e2, t2, false, false, false, o) && this.trigger("paste", { parent: e2.id, node: a, mode: n }), o = n = a = false;
    }, clear_buffer: function() {
      o = n = a = false, this.trigger("clear_buffer");
    }, edit: function(r2, e2, s2) {
      var t2, i2, a2, n2, o2, d2, c2, t2, l2, h2 = false;
      return !!(r2 = this.get_node(r2)) && (this.check("edit", r2, this.get_parent(r2)) ? (l2 = r2, e2 = "string" == typeof e2 ? e2 : r2.text, this.set_text(r2, ""), r2 = this._open_to(r2), l2.text = e2, t2 = this._data.core.rtl, i2 = this.element.width(), this._data.core.focused = l2.id, a2 = r2.children(".jstree-anchor").trigger("focus"), n2 = E("<span></span>"), o2 = e2, d2 = E("<div></div>", { css: { position: "absolute", top: "-200px", left: t2 ? "0px" : "-1000px", visibility: "hidden" } }).appendTo(b.body), c2 = E("<input />", { value: o2, class: "jstree-rename-input", css: { padding: "0", border: "1px solid silver", "box-sizing": "border-box", display: "inline-block", height: this._data.core.li_height + "px", lineHeight: this._data.core.li_height + "px", width: "150px" }, on: { blur: function(e3) {
        e3.stopImmediatePropagation(), e3.preventDefault();
        var t3, i3 = n2.children(".jstree-rename-input").val(), e3 = this.settings.core.force_text, e3;
        "" === i3 && (i3 = o2), d2.remove(), n2.replaceWith(a2), n2.remove(), o2 = e3 ? o2 : E("<div></div>").append(E.parseHTML(o2)).html(), r2 = this.get_node(r2), this.set_text(r2, o2), (e3 = !!this.rename_node(r2, e3 ? E("<div></div>").text(i3).text() : E("<div></div>").append(E.parseHTML(i3)).html())) || this.set_text(r2, o2), this._data.core.focused = l2.id, setTimeout(function() {
          var e4 = this.get_node(l2.id, true);
          e4.length && (this._data.core.focused = l2.id, e4.children(".jstree-anchor").trigger("focus"));
        }.bind(this), 0), s2 && s2.call(this, l2, e3, h2, i3), c2 = null;
      }.bind(this), keydown: function(e3) {
        var t3 = e3.which;
        27 === t3 && (h2 = true, this.value = o2), 27 !== t3 && 13 !== t3 && 37 !== t3 && 38 !== t3 && 39 !== t3 && 40 !== t3 && 32 !== t3 || e3.stopImmediatePropagation(), 27 !== t3 && 13 !== t3 || (e3.preventDefault(), this.blur());
      }, click: function(e3) {
        e3.stopImmediatePropagation();
      }, mousedown: function(e3) {
        e3.stopImmediatePropagation();
      }, keyup: function(e3) {
        c2.width(Math.min(d2.text("pW" + this.value).width(), i2));
      }, keypress: function(e3) {
        if (13 === e3.which) return false;
      } } }), t2 = { fontFamily: a2.css("fontFamily") || "", fontSize: a2.css("fontSize") || "", fontWeight: a2.css("fontWeight") || "", fontStyle: a2.css("fontStyle") || "", fontStretch: a2.css("fontStretch") || "", fontVariant: a2.css("fontVariant") || "", letterSpacing: a2.css("letterSpacing") || "", wordSpacing: a2.css("wordSpacing") || "" }, n2.attr("class", a2.attr("class")).append(a2.contents().clone()).append(c2), a2.replaceWith(n2), d2.css(t2), c2.css(t2).width(Math.min(d2.text("pW" + c2[0].value).width(), i2))[0].select(), void E(b).one("mousedown.jstree touchstart.jstree dnd_start.vakata", function(e3) {
        c2 && e3.target !== c2 && E(c2).trigger("blur");
      })) : (this.settings.core.error.call(this, this._data.core.last_error), false));
    }, set_theme: function(e2, t2) {
      if (!e2) return false;
      var i2, i2;
      (t2 = true === t2 ? (i2 = (i2 = this.settings.core.themes.dir) || E.jstree.path + "/themes") + "/" + e2 + "/style.css" : t2) && -1 === E.inArray(t2, r) && (E("head").append('<link rel="stylesheet" href="' + t2 + '" type="text/css" />'), r.push(t2)), this._data.core.themes.name && this.element.removeClass("jstree-" + this._data.core.themes.name), this._data.core.themes.name = e2, this.element.addClass("jstree-" + e2), this.element[this.settings.core.themes.responsive ? "addClass" : "removeClass"]("jstree-" + e2 + "-responsive"), this.trigger("set_theme", { theme: e2 });
    }, get_theme: function() {
      return this._data.core.themes.name;
    }, set_theme_variant: function(e2) {
      this._data.core.themes.variant && this.element.removeClass("jstree-" + this._data.core.themes.name + "-" + this._data.core.themes.variant), (this._data.core.themes.variant = e2) && this.element.addClass("jstree-" + this._data.core.themes.name + "-" + this._data.core.themes.variant);
    }, get_theme_variant: function() {
      return this._data.core.themes.variant;
    }, show_stripes: function() {
      this._data.core.themes.stripes = true, this.get_container_ul().addClass("jstree-striped"), this.trigger("show_stripes");
    }, hide_stripes: function() {
      this._data.core.themes.stripes = false, this.get_container_ul().removeClass("jstree-striped"), this.trigger("hide_stripes");
    }, toggle_stripes: function() {
      this._data.core.themes.stripes ? this.hide_stripes() : this.show_stripes();
    }, show_dots: function() {
      this._data.core.themes.dots = true, this.get_container_ul().removeClass("jstree-no-dots"), this.trigger("show_dots");
    }, hide_dots: function() {
      this._data.core.themes.dots = false, this.get_container_ul().addClass("jstree-no-dots"), this.trigger("hide_dots");
    }, toggle_dots: function() {
      this._data.core.themes.dots ? this.hide_dots() : this.show_dots();
    }, show_icons: function() {
      this._data.core.themes.icons = true, this.get_container_ul().removeClass("jstree-no-icons"), this.trigger("show_icons");
    }, hide_icons: function() {
      this._data.core.themes.icons = false, this.get_container_ul().addClass("jstree-no-icons"), this.trigger("hide_icons");
    }, toggle_icons: function() {
      this._data.core.themes.icons ? this.hide_icons() : this.show_icons();
    }, show_ellipsis: function() {
      this._data.core.themes.ellipsis = true, this.get_container_ul().addClass("jstree-ellipsis"), this.trigger("show_ellipsis");
    }, hide_ellipsis: function() {
      this._data.core.themes.ellipsis = false, this.get_container_ul().removeClass("jstree-ellipsis"), this.trigger("hide_ellipsis");
    }, toggle_ellipsis: function() {
      this._data.core.themes.ellipsis ? this.hide_ellipsis() : this.show_ellipsis();
    }, set_icon: function(e2, t2) {
      var i2, r2, s2, a2;
      if (E.vakata.is_array(e2)) {
        for (i2 = 0, r2 = (e2 = e2.slice()).length; i2 < r2; i2++) this.set_icon(e2[i2], t2);
        return true;
      }
      return !(!(e2 = this.get_node(e2)) || e2.id === E.jstree.root) && (a2 = e2.icon, e2.icon = true === t2 || null === t2 || t2 === P || "" === t2 || t2, s2 = this.get_node(e2, true).children(".jstree-anchor").children(".jstree-themeicon"), false === t2 ? (s2.removeClass("jstree-themeicon-custom " + a2).css("background", "").removeAttr("rel"), this.hide_icon(e2)) : (true === t2 || null === t2 || t2 === P || "" === t2 ? s2.removeClass("jstree-themeicon-custom " + a2).css("background", "").removeAttr("rel") : -1 === t2.indexOf("/") && -1 === t2.indexOf(".") ? (s2.removeClass(a2).css("background", ""), s2.addClass(t2 + " jstree-themeicon-custom").attr("rel", t2)) : (s2.removeClass(a2).css("background", ""), s2.addClass("jstree-themeicon-custom").css("background", "url('" + t2 + "') center center no-repeat").attr("rel", t2)), false === a2 && this.show_icon(e2)), true);
    }, get_icon: function(e2) {
      return !(!(e2 = this.get_node(e2)) || e2.id === E.jstree.root) && e2.icon;
    }, hide_icon: function(e2) {
      var t2, i2;
      if (E.vakata.is_array(e2)) {
        for (t2 = 0, i2 = (e2 = e2.slice()).length; t2 < i2; t2++) this.hide_icon(e2[t2]);
        return true;
      }
      return !(!(e2 = this.get_node(e2)) || e2 === E.jstree.root) && (e2.icon = false, this.get_node(e2, true).children(".jstree-anchor").children(".jstree-themeicon").addClass("jstree-themeicon-hidden"), true);
    }, show_icon: function(e2) {
      var t2, i2, r2;
      if (E.vakata.is_array(e2)) {
        for (t2 = 0, i2 = (e2 = e2.slice()).length; t2 < i2; t2++) this.show_icon(e2[t2]);
        return true;
      }
      return !(!(e2 = this.get_node(e2)) || e2 === E.jstree.root) && (r2 = this.get_node(e2, true), e2.icon = !r2.length || r2.children(".jstree-anchor").children(".jstree-themeicon").attr("rel"), e2.icon || (e2.icon = true), r2.children(".jstree-anchor").children(".jstree-themeicon").removeClass("jstree-themeicon-hidden"), true);
    } }, E.vakata = {}, E.vakata.attributes = function(e2, i2) {
      e2 = E(e2)[0];
      var r2 = i2 ? {} : [];
      return e2 && e2.attributes && E.each(e2.attributes, function(e3, t2) {
        -1 === E.inArray(t2.name.toLowerCase(), ["style", "contenteditable", "hasfocus", "tabindex"]) && null !== t2.value && "" !== E.vakata.trim(t2.value) && (i2 ? r2[t2.name] = t2.value : r2.push(t2.name));
      }), r2;
    }, E.vakata.array_unique = function(e2) {
      for (var t2 = [], i2, r2, s2, a2 = {}, i2 = 0, s2 = e2.length; i2 < s2; i2++) a2[e2[i2]] === P && (t2.push(e2[i2]), a2[e2[i2]] = true);
      return t2;
    }, E.vakata.array_remove = function(e2, t2) {
      return e2.splice(t2, 1), e2;
    }, E.vakata.array_remove_item = function(e2, t2) {
      var t2 = E.inArray(t2, e2);
      return -1 !== t2 ? E.vakata.array_remove(e2, t2) : e2;
    }, E.vakata.array_filter = function(e2, t2, i2, r2, s2) {
      if (e2.filter) return e2.filter(t2, i2);
      for (s2 in r2 = [], e2) ~~s2 + "" == s2 + "" && 0 <= s2 && t2.call(i2, e2[s2], +s2, e2) && r2.push(e2[s2]);
      return r2;
    }, E.vakata.trim = function(e2) {
      return String.prototype.trim ? String.prototype.trim.call(e2.toString()) : e2.toString().replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    }, E.vakata.is_function = function(e2) {
      return "function" == typeof e2 && "number" != typeof e2.nodeType;
    }, E.vakata.is_array = Array.isArray || function(e2) {
      return "[object Array]" === Object.prototype.toString.call(e2);
    }, Function.prototype.bind || (Function.prototype.bind = function() {
      var t2 = this, i2 = arguments[0], r2 = Array.prototype.slice.call(arguments, 1);
      if ("function" != typeof t2) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
      return function() {
        var e2 = r2.concat(Array.prototype.slice.call(arguments));
        return t2.apply(i2, e2);
      };
    }), E.jstree.plugins.changed = function(e2, a2) {
      var n2 = [];
      this.trigger = function(e3, t2) {
        var i2, r2;
        if (t2 = t2 || {}, "changed" === e3.replace(".jstree", "")) {
          t2.changed = { selected: [], deselected: [] };
          for (var s2 = {}, i2 = 0, r2 = n2.length; i2 < r2; i2++) s2[n2[i2]] = 1;
          for (i2 = 0, r2 = t2.selected.length; i2 < r2; i2++) s2[t2.selected[i2]] ? s2[t2.selected[i2]] = 2 : t2.changed.selected.push(t2.selected[i2]);
          for (i2 = 0, r2 = n2.length; i2 < r2; i2++) 1 === s2[n2[i2]] && t2.changed.deselected.push(n2[i2]);
          n2 = t2.selected.slice();
        }
        a2.trigger.call(this, e3, t2);
      }, this.refresh = function(e3, t2) {
        return n2 = [], a2.refresh.apply(this, arguments);
      };
    };
    var l = b.createElement("I"), h, _, g, d, u, f, p, w;
    l.className = "jstree-icon jstree-checkbox", l.setAttribute("role", "presentation"), E.jstree.defaults.checkbox = { visible: true, three_state: true, whole_node: true, keep_selected_style: true, cascade: "", tie_selection: true, cascade_to_disabled: true, cascade_to_hidden: true }, E.jstree.plugins.checkbox = function(e2, d2) {
      this.bind = function() {
        d2.bind.call(this), this._data.checkbox.uto = false, this._data.checkbox.selected = [], this.settings.checkbox.three_state && (this.settings.checkbox.cascade = "up+down+undetermined"), this.element.on("init.jstree", function() {
          this._data.checkbox.visible = this.settings.checkbox.visible, this.settings.checkbox.keep_selected_style || this.element.addClass("jstree-checkbox-no-clicked"), this.settings.checkbox.tie_selection && this.element.addClass("jstree-checkbox-selection");
        }.bind(this)).on("loading.jstree", function() {
          this[this._data.checkbox.visible ? "show_checkboxes" : "hide_checkboxes"]();
        }.bind(this)), -1 !== this.settings.checkbox.cascade.indexOf("undetermined") && this.element.on("changed.jstree uncheck_node.jstree check_node.jstree uncheck_all.jstree check_all.jstree move_node.jstree copy_node.jstree redraw.jstree open_node.jstree", function() {
          this._data.checkbox.uto && clearTimeout(this._data.checkbox.uto), this._data.checkbox.uto = setTimeout(this._undetermined.bind(this), 50);
        }.bind(this)), this.settings.checkbox.tie_selection || this.element.on("model.jstree", function(e3, t2) {
          for (var i2 = this._model.data, r2 = i2[t2.parent], s2 = t2.nodes, a2, n2, a2 = 0, n2 = s2.length; a2 < n2; a2++) i2[s2[a2]].state.checked = i2[s2[a2]].state.checked || i2[s2[a2]].original && i2[s2[a2]].original.state && i2[s2[a2]].original.state.checked, i2[s2[a2]].state.checked && this._data.checkbox.selected.push(s2[a2]);
        }.bind(this)), -1 === this.settings.checkbox.cascade.indexOf("up") && -1 === this.settings.checkbox.cascade.indexOf("down") || this.element.on("model.jstree", function(e3, t2) {
          var i2 = this._model.data, r2 = i2[t2.parent], s2 = t2.nodes, a2 = [], n2, o2, d3, c2, l2, h2, t2 = this.settings.checkbox.cascade, _2 = this.settings.checkbox.tie_selection;
          if (-1 !== t2.indexOf("down")) {
            if (r2.state[_2 ? "selected" : "checked"]) {
              for (o2 = 0, d3 = s2.length; o2 < d3; o2++) i2[s2[o2]].state[_2 ? "selected" : "checked"] = true;
              this._data[_2 ? "core" : "checkbox"].selected = this._data[_2 ? "core" : "checkbox"].selected.concat(s2);
            } else for (o2 = 0, d3 = s2.length; o2 < d3; o2++) if (i2[s2[o2]].state[_2 ? "selected" : "checked"]) {
              for (c2 = 0, l2 = i2[s2[o2]].children_d.length; c2 < l2; c2++) i2[i2[s2[o2]].children_d[c2]].state[_2 ? "selected" : "checked"] = true;
              this._data[_2 ? "core" : "checkbox"].selected = this._data[_2 ? "core" : "checkbox"].selected.concat(i2[s2[o2]].children_d);
            }
          }
          if (-1 !== t2.indexOf("up")) {
            for (o2 = 0, d3 = r2.children_d.length; o2 < d3; o2++) i2[r2.children_d[o2]].children.length || a2.push(i2[r2.children_d[o2]].parent);
            for (c2 = 0, l2 = (a2 = E.vakata.array_unique(a2)).length; c2 < l2; c2++) {
              r2 = i2[a2[c2]];
              while (r2 && r2.id !== E.jstree.root) {
                for (o2 = n2 = 0, d3 = r2.children.length; o2 < d3; o2++) n2 += i2[r2.children[o2]].state[_2 ? "selected" : "checked"];
                if (n2 !== d3) break;
                r2.state[_2 ? "selected" : "checked"] = true, this._data[_2 ? "core" : "checkbox"].selected.push(r2.id), (h2 = this.get_node(r2, true)) && h2.length && h2.children(".jstree-anchor").attr("aria-selected", true).addClass(_2 ? "jstree-clicked" : "jstree-checked"), r2 = this.get_node(r2.parent);
              }
            }
          }
          this._data[_2 ? "core" : "checkbox"].selected = E.vakata.array_unique(this._data[_2 ? "core" : "checkbox"].selected);
        }.bind(this)).on(this.settings.checkbox.tie_selection ? "select_node.jstree" : "check_node.jstree", function(e3, t2) {
          var i2 = this, r2 = t2.node, s2 = this._model.data, a2 = this.get_node(r2.parent), n2, o2, d3, c2, t2 = this.settings.checkbox.cascade, l2 = this.settings.checkbox.tie_selection, h2 = {}, _2 = this._data[l2 ? "core" : "checkbox"].selected;
          for (n2 = 0, o2 = _2.length; n2 < o2; n2++) h2[_2[n2]] = true;
          if (-1 !== t2.indexOf("down")) for (var g2 = this._cascade_new_checked_state(r2.id, true), u2 = r2.children_d.concat(r2.id), n2 = 0, o2 = u2.length; n2 < o2; n2++) -1 < g2.indexOf(u2[n2]) ? h2[u2[n2]] = true : delete h2[u2[n2]];
          if (-1 !== t2.indexOf("up")) while (a2 && a2.id !== E.jstree.root) {
            for (n2 = d3 = 0, o2 = a2.children.length; n2 < o2; n2++) d3 += s2[a2.children[n2]].state[l2 ? "selected" : "checked"];
            if (d3 !== o2) break;
            a2.state[l2 ? "selected" : "checked"] = true, h2[a2.id] = true, (c2 = this.get_node(a2, true)) && c2.length && c2.children(".jstree-anchor").attr("aria-selected", true).addClass(l2 ? "jstree-clicked" : "jstree-checked"), a2 = this.get_node(a2.parent);
          }
          for (n2 in _2 = [], h2) h2.hasOwnProperty(n2) && _2.push(n2);
          this._data[l2 ? "core" : "checkbox"].selected = _2;
        }.bind(this)).on(this.settings.checkbox.tie_selection ? "deselect_all.jstree" : "uncheck_all.jstree", function(e3, t2) {
          for (var i2 = this.get_node(E.jstree.root), r2 = this._model.data, s2, a2, n2, s2 = 0, a2 = i2.children_d.length; s2 < a2; s2++) (n2 = r2[i2.children_d[s2]]) && n2.original && n2.original.state && n2.original.state.undetermined && (n2.original.state.undetermined = false);
        }.bind(this)).on(this.settings.checkbox.tie_selection ? "deselect_node.jstree" : "uncheck_node.jstree", function(e3, t2) {
          var i2 = this, r2 = t2.node, s2 = this.get_node(r2, true), a2, n2, o2, d3 = this.settings.checkbox.cascade, c2 = this.settings.checkbox.tie_selection, t2 = this._data[c2 ? "core" : "checkbox"].selected, l2 = {}, h2 = [], _2 = r2.children_d.concat(r2.id), g2, t2;
          if (-1 !== d3.indexOf("down") && (g2 = this._cascade_new_checked_state(r2.id, false), t2 = E.vakata.array_filter(t2, function(e4) {
            return -1 === _2.indexOf(e4) || -1 < g2.indexOf(e4);
          })), -1 !== d3.indexOf("up") && -1 === t2.indexOf(r2.id)) {
            for (a2 = 0, n2 = r2.parents.length; a2 < n2; a2++) (o2 = this._model.data[r2.parents[a2]]).state[c2 ? "selected" : "checked"] = false, o2 && o2.original && o2.original.state && o2.original.state.undetermined && (o2.original.state.undetermined = false), (o2 = this.get_node(r2.parents[a2], true)) && o2.length && o2.children(".jstree-anchor").attr("aria-selected", false).removeClass(c2 ? "jstree-clicked" : "jstree-checked");
            t2 = E.vakata.array_filter(t2, function(e4) {
              return -1 === r2.parents.indexOf(e4);
            });
          }
          this._data[c2 ? "core" : "checkbox"].selected = t2;
        }.bind(this)), -1 !== this.settings.checkbox.cascade.indexOf("up") && this.element.on("delete_node.jstree", function(e3, t2) {
          var i2 = this.get_node(t2.parent), r2 = this._model.data, s2, a2, n2, o2, d3 = this.settings.checkbox.tie_selection;
          while (i2 && i2.id !== E.jstree.root && !i2.state[d3 ? "selected" : "checked"]) {
            for (s2 = n2 = 0, a2 = i2.children.length; s2 < a2; s2++) n2 += r2[i2.children[s2]].state[d3 ? "selected" : "checked"];
            if (!(0 < a2 && n2 === a2)) break;
            i2.state[d3 ? "selected" : "checked"] = true, this._data[d3 ? "core" : "checkbox"].selected.push(i2.id), (o2 = this.get_node(i2, true)) && o2.length && o2.children(".jstree-anchor").attr("aria-selected", true).addClass(d3 ? "jstree-clicked" : "jstree-checked"), i2 = this.get_node(i2.parent);
          }
        }.bind(this)).on("move_node.jstree", function(e3, t2) {
          var i2 = t2.is_multi, r2 = t2.old_parent, t2 = this.get_node(t2.parent), s2 = this._model.data, a2, n2, o2, d3, c2, l2 = this.settings.checkbox.tie_selection;
          if (!i2) {
            a2 = this.get_node(r2);
            while (a2 && a2.id !== E.jstree.root && !a2.state[l2 ? "selected" : "checked"]) {
              for (o2 = n2 = 0, d3 = a2.children.length; o2 < d3; o2++) n2 += s2[a2.children[o2]].state[l2 ? "selected" : "checked"];
              if (!(0 < d3 && n2 === d3)) break;
              a2.state[l2 ? "selected" : "checked"] = true, this._data[l2 ? "core" : "checkbox"].selected.push(a2.id), (c2 = this.get_node(a2, true)) && c2.length && c2.children(".jstree-anchor").attr("aria-selected", true).addClass(l2 ? "jstree-clicked" : "jstree-checked"), a2 = this.get_node(a2.parent);
            }
          }
          a2 = t2;
          while (a2 && a2.id !== E.jstree.root) {
            for (o2 = n2 = 0, d3 = a2.children.length; o2 < d3; o2++) n2 += s2[a2.children[o2]].state[l2 ? "selected" : "checked"];
            if (n2 === d3) a2.state[l2 ? "selected" : "checked"] || (a2.state[l2 ? "selected" : "checked"] = true, this._data[l2 ? "core" : "checkbox"].selected.push(a2.id), (c2 = this.get_node(a2, true)) && c2.length && c2.children(".jstree-anchor").attr("aria-selected", true).addClass(l2 ? "jstree-clicked" : "jstree-checked"));
            else {
              if (!a2.state[l2 ? "selected" : "checked"]) break;
              a2.state[l2 ? "selected" : "checked"] = false, this._data[l2 ? "core" : "checkbox"].selected = E.vakata.array_remove_item(this._data[l2 ? "core" : "checkbox"].selected, a2.id), (c2 = this.get_node(a2, true)) && c2.length && c2.children(".jstree-anchor").attr("aria-selected", false).removeClass(l2 ? "jstree-clicked" : "jstree-checked");
            }
            a2 = this.get_node(a2.parent);
          }
        }.bind(this));
      }, this.get_undetermined = function(e3) {
        if (-1 === this.settings.checkbox.cascade.indexOf("undetermined")) return [];
        for (var i2, r2, s2, a2, n2 = {}, o2 = this._model.data, t2 = this.settings.checkbox.tie_selection, d3 = this._data[t2 ? "core" : "checkbox"].selected, c2 = [], l2 = this, h2 = [], i2 = 0, r2 = d3.length; i2 < r2; i2++) if (o2[d3[i2]] && o2[d3[i2]].parents) for (s2 = 0, a2 = o2[d3[i2]].parents.length; s2 < a2; s2++) {
          if (n2[o2[d3[i2]].parents[s2]] !== P) break;
          o2[d3[i2]].parents[s2] !== E.jstree.root && (n2[o2[d3[i2]].parents[s2]] = true, c2.push(o2[d3[i2]].parents[s2]));
        }
        for (this.element.find(".jstree-closed").not(":has(.jstree-children)").each(function() {
          var e4 = l2.get_node(this), t3;
          if (e4) {
            if (e4.state.loaded) {
              for (i2 = 0, r2 = e4.children_d.length; i2 < r2; i2++) if (!(t3 = o2[e4.children_d[i2]]).state.loaded && t3.original && t3.original.state && t3.original.state.undetermined && true === t3.original.state.undetermined) for (n2[t3.id] === P && t3.id !== E.jstree.root && (n2[t3.id] = true, c2.push(t3.id)), s2 = 0, a2 = t3.parents.length; s2 < a2; s2++) n2[t3.parents[s2]] === P && t3.parents[s2] !== E.jstree.root && (n2[t3.parents[s2]] = true, c2.push(t3.parents[s2]));
            } else if (e4.original && e4.original.state && e4.original.state.undetermined && true === e4.original.state.undetermined) for (n2[e4.id] === P && e4.id !== E.jstree.root && (n2[e4.id] = true, c2.push(e4.id)), s2 = 0, a2 = e4.parents.length; s2 < a2; s2++) n2[e4.parents[s2]] === P && e4.parents[s2] !== E.jstree.root && (n2[e4.parents[s2]] = true, c2.push(e4.parents[s2]));
          }
        }), i2 = 0, r2 = c2.length; i2 < r2; i2++) o2[c2[i2]].state[t2 ? "selected" : "checked"] || h2.push(e3 ? o2[c2[i2]] : c2[i2]);
        return h2;
      }, this._undetermined = function() {
        if (null !== this.element) {
          var e3 = this.get_undetermined(false), t2, i2, r2;
          for (this.element.find(".jstree-undetermined").removeClass("jstree-undetermined"), t2 = 0, i2 = e3.length; t2 < i2; t2++) (r2 = this.get_node(e3[t2], true)) && r2.length && r2.children(".jstree-anchor").children(".jstree-checkbox").addClass("jstree-undetermined");
        }
      }, this.redraw_node = function(e3, t2, i2, r2) {
        if (e3 = d2.redraw_node.apply(this, arguments)) {
          for (var s2, a2, n2 = null, o2 = null, s2 = 0, a2 = e3.childNodes.length; s2 < a2; s2++) if (e3.childNodes[s2] && e3.childNodes[s2].className && -1 !== e3.childNodes[s2].className.indexOf("jstree-anchor")) {
            n2 = e3.childNodes[s2];
            break;
          }
          n2 && (!this.settings.checkbox.tie_selection && this._model.data[e3.id].state.checked && (n2.className += " jstree-checked"), o2 = l.cloneNode(false), this._model.data[e3.id].state.checkbox_disabled && (o2.className += " jstree-checkbox-disabled"), n2.insertBefore(o2, n2.childNodes[0]));
        }
        return i2 || -1 === this.settings.checkbox.cascade.indexOf("undetermined") || (this._data.checkbox.uto && clearTimeout(this._data.checkbox.uto), this._data.checkbox.uto = setTimeout(this._undetermined.bind(this), 50)), e3;
      }, this.show_checkboxes = function() {
        this._data.core.themes.checkboxes = true, this.get_container_ul().removeClass("jstree-no-checkboxes");
      }, this.hide_checkboxes = function() {
        this._data.core.themes.checkboxes = false, this.get_container_ul().addClass("jstree-no-checkboxes");
      }, this.toggle_checkboxes = function() {
        this._data.core.themes.checkboxes ? this.hide_checkboxes() : this.show_checkboxes();
      }, this.is_undetermined = function(e3) {
        e3 = this.get_node(e3);
        var t2 = this.settings.checkbox.cascade, i2, r2, s2 = this.settings.checkbox.tie_selection, a2 = this._data[s2 ? "core" : "checkbox"].selected, n2 = this._model.data;
        if (!e3 || true === e3.state[s2 ? "selected" : "checked"] || -1 === t2.indexOf("undetermined") || -1 === t2.indexOf("down") && -1 === t2.indexOf("up")) return false;
        if (!e3.state.loaded && true === e3.original.state.undetermined) return true;
        for (i2 = 0, r2 = e3.children_d.length; i2 < r2; i2++) if (-1 !== E.inArray(e3.children_d[i2], a2) || !n2[e3.children_d[i2]].state.loaded && n2[e3.children_d[i2]].original.state.undetermined) return true;
        return false;
      }, this.disable_checkbox = function(e3) {
        var t2, i2, r2;
        if (E.vakata.is_array(e3)) {
          for (t2 = 0, i2 = (e3 = e3.slice()).length; t2 < i2; t2++) this.disable_checkbox(e3[t2]);
          return true;
        }
        if (!(e3 = this.get_node(e3)) || e3.id === E.jstree.root) return false;
        r2 = this.get_node(e3, true), e3.state.checkbox_disabled || (e3.state.checkbox_disabled = true, r2 && r2.length && r2.children(".jstree-anchor").children(".jstree-checkbox").addClass("jstree-checkbox-disabled"), this.trigger("disable_checkbox", { node: e3 }));
      }, this.enable_checkbox = function(e3) {
        var t2, i2, r2;
        if (E.vakata.is_array(e3)) {
          for (t2 = 0, i2 = (e3 = e3.slice()).length; t2 < i2; t2++) this.enable_checkbox(e3[t2]);
          return true;
        }
        if (!(e3 = this.get_node(e3)) || e3.id === E.jstree.root) return false;
        r2 = this.get_node(e3, true), e3.state.checkbox_disabled && (e3.state.checkbox_disabled = false, r2 && r2.length && r2.children(".jstree-anchor").children(".jstree-checkbox").removeClass("jstree-checkbox-disabled"), this.trigger("enable_checkbox", { node: e3 }));
      }, this.activate_node = function(e3, t2) {
        return !E(t2.target).hasClass("jstree-checkbox-disabled") && (this.settings.checkbox.tie_selection && (this.settings.checkbox.whole_node || E(t2.target).hasClass("jstree-checkbox")) && (t2.ctrlKey = true), this.settings.checkbox.tie_selection || !this.settings.checkbox.whole_node && !E(t2.target).hasClass("jstree-checkbox") ? d2.activate_node.call(this, e3, t2) : !this.is_disabled(e3) && (this.is_checked(e3) ? this.uncheck_node(e3, t2) : this.check_node(e3, t2), void this.trigger("activate_node", { node: this.get_node(e3) })));
      }, this.delete_node = function(e3) {
        if (this.settings.checkbox.tie_selection || E.vakata.is_array(e3)) return d2.delete_node.call(this, e3);
        var t2, i2, r2, s2 = false;
        if (!(e3 = this.get_node(e3)) || e3.id === E.jstree.root) return false;
        for ((t2 = e3.children_d.concat([])).push(e3.id), i2 = 0, r2 = t2.length; i2 < r2; i2++) if (this._model.data[t2[i2]].state.checked) {
          s2 = true;
          break;
        }
        return s2 && (this._data.checkbox.selected = E.vakata.array_filter(this._data.checkbox.selected, function(e4) {
          return -1 === E.inArray(e4, t2);
        })), d2.delete_node.call(this, e3);
      }, this._cascade_new_checked_state = function(e3, t2) {
        var i2 = this, r2 = this.settings.checkbox.tie_selection, s2 = this._model.data[e3], a2 = [], n2 = [], o2, d3, c2;
        if (!this.settings.checkbox.cascade_to_disabled && s2.state.disabled || !this.settings.checkbox.cascade_to_hidden && s2.state.hidden) c2 = this.get_checked_descendants(e3), s2.state[r2 ? "selected" : "checked"] && c2.push(s2.id), a2 = a2.concat(c2);
        else {
          if (s2.children) for (o2 = 0, d3 = s2.children.length; o2 < d3; o2++) {
            var l2 = s2.children[o2], c2 = i2._cascade_new_checked_state(l2, t2), a2 = a2.concat(c2);
            -1 < c2.indexOf(l2) && n2.push(l2);
          }
          var h2 = i2.get_node(s2, true), e3 = 0 < n2.length && n2.length < s2.children.length;
          s2.original && s2.original.state && s2.original.state.undetermined && (s2.original.state.undetermined = e3), !e3 && t2 && n2.length === s2.children.length ? (s2.state[r2 ? "selected" : "checked"] = t2, a2.push(s2.id), h2.children(".jstree-anchor").attr("aria-selected", true).addClass(r2 ? "jstree-clicked" : "jstree-checked")) : (s2.state[r2 ? "selected" : "checked"] = false, h2.children(".jstree-anchor").attr("aria-selected", false).removeClass(r2 ? "jstree-clicked" : "jstree-checked"));
        }
        return a2;
      }, this.get_checked_descendants = function(e3) {
        var t2 = this, i2 = t2.settings.checkbox.tie_selection, e3 = t2._model.data[e3];
        return E.vakata.array_filter(e3.children_d, function(e4) {
          return t2._model.data[e4].state[i2 ? "selected" : "checked"];
        });
      }, this.check_node = function(e3, t2) {
        if (this.settings.checkbox.tie_selection) return this.select_node(e3, false, true, t2);
        var i2, r2, s2, a2;
        if (E.vakata.is_array(e3)) {
          for (r2 = 0, s2 = (e3 = e3.slice()).length; r2 < s2; r2++) this.check_node(e3[r2], t2);
          return true;
        }
        if (!(e3 = this.get_node(e3)) || e3.id === E.jstree.root) return false;
        i2 = this.get_node(e3, true), e3.state.checked || (e3.state.checked = true, this._data.checkbox.selected.push(e3.id), i2 && i2.length && i2.children(".jstree-anchor").addClass("jstree-checked"), this.trigger("check_node", { node: e3, selected: this._data.checkbox.selected, event: t2 }));
      }, this.uncheck_node = function(e3, t2) {
        if (this.settings.checkbox.tie_selection) return this.deselect_node(e3, false, t2);
        var i2, r2, s2;
        if (E.vakata.is_array(e3)) {
          for (i2 = 0, r2 = (e3 = e3.slice()).length; i2 < r2; i2++) this.uncheck_node(e3[i2], t2);
          return true;
        }
        if (!(e3 = this.get_node(e3)) || e3.id === E.jstree.root) return false;
        s2 = this.get_node(e3, true), e3.state.checked && (e3.state.checked = false, this._data.checkbox.selected = E.vakata.array_remove_item(this._data.checkbox.selected, e3.id), s2.length && s2.children(".jstree-anchor").removeClass("jstree-checked"), this.trigger("uncheck_node", { node: e3, selected: this._data.checkbox.selected, event: t2 }));
      }, this.check_all = function() {
        if (this.settings.checkbox.tie_selection) return this.select_all();
        var e3 = this._data.checkbox.selected.concat([]), t2, i2;
        for (this._data.checkbox.selected = this._model.data[E.jstree.root].children_d.concat(), t2 = 0, i2 = this._data.checkbox.selected.length; t2 < i2; t2++) this._model.data[this._data.checkbox.selected[t2]] && (this._model.data[this._data.checkbox.selected[t2]].state.checked = true);
        this.redraw(true), this.trigger("check_all", { selected: this._data.checkbox.selected });
      }, this.uncheck_all = function() {
        if (this.settings.checkbox.tie_selection) return this.deselect_all();
        for (var e3 = this._data.checkbox.selected.concat([]), t2, i2, t2 = 0, i2 = this._data.checkbox.selected.length; t2 < i2; t2++) this._model.data[this._data.checkbox.selected[t2]] && (this._model.data[this._data.checkbox.selected[t2]].state.checked = false);
        this._data.checkbox.selected = [], this.element.find(".jstree-checked").removeClass("jstree-checked"), this.trigger("uncheck_all", { selected: this._data.checkbox.selected, node: e3 });
      }, this.is_checked = function(e3) {
        return this.settings.checkbox.tie_selection ? this.is_selected(e3) : !(!(e3 = this.get_node(e3)) || e3.id === E.jstree.root) && e3.state.checked;
      }, this.get_checked = function(e3) {
        return this.settings.checkbox.tie_selection ? this.get_selected(e3) : e3 ? E.map(this._data.checkbox.selected, function(e4) {
          return this.get_node(e4);
        }.bind(this)) : this._data.checkbox.selected.slice();
      }, this.get_top_checked = function(e3) {
        if (this.settings.checkbox.tie_selection) return this.get_top_selected(e3);
        for (var t2 = this.get_checked(true), i2 = {}, r2, s2, a2, n2, r2 = 0, s2 = t2.length; r2 < s2; r2++) i2[t2[r2].id] = t2[r2];
        for (r2 = 0, s2 = t2.length; r2 < s2; r2++) for (a2 = 0, n2 = t2[r2].children_d.length; a2 < n2; a2++) i2[t2[r2].children_d[a2]] && delete i2[t2[r2].children_d[a2]];
        for (r2 in t2 = [], i2) i2.hasOwnProperty(r2) && t2.push(r2);
        return e3 ? E.map(t2, function(e4) {
          return this.get_node(e4);
        }.bind(this)) : t2;
      }, this.get_bottom_checked = function(e3) {
        if (this.settings.checkbox.tie_selection) return this.get_bottom_selected(e3);
        for (var t2 = this.get_checked(true), i2 = [], r2, s2, r2 = 0, s2 = t2.length; r2 < s2; r2++) t2[r2].children.length || i2.push(t2[r2].id);
        return e3 ? E.map(i2, function(e4) {
          return this.get_node(e4);
        }.bind(this)) : i2;
      }, this.load_node = function(e3, t2) {
        var i2, r2, s2, a2, n2, o2;
        if (!E.vakata.is_array(e3) && !this.settings.checkbox.tie_selection && (o2 = this.get_node(e3)) && o2.state.loaded) for (i2 = 0, r2 = o2.children_d.length; i2 < r2; i2++) this._model.data[o2.children_d[i2]].state.checked && (this._data.checkbox.selected = E.vakata.array_remove_item(this._data.checkbox.selected, o2.children_d[i2]));
        return d2.load_node.apply(this, arguments);
      }, this.get_state = function() {
        var e3 = d2.get_state.apply(this, arguments);
        return this.settings.checkbox.tie_selection || (e3.checkbox = this._data.checkbox.selected.slice()), e3;
      }, this.set_state = function(e3, t2) {
        var i2 = d2.set_state.apply(this, arguments), r2;
        return i2 && e3.checkbox ? (this.settings.checkbox.tie_selection || (this.uncheck_all(), r2 = this, E.each(e3.checkbox, function(e4, t3) {
          r2.check_node(t3);
        })), delete e3.checkbox, this.set_state(e3, t2), false) : i2;
      }, this.refresh = function(e3, t2) {
        return this.settings.checkbox.tie_selection && (this._data.checkbox.selected = []), d2.refresh.apply(this, arguments);
      };
    }, E.jstree.defaults.conditionalselect = function() {
      return true;
    }, E.jstree.plugins.conditionalselect = function(e2, i2) {
      this.activate_node = function(e3, t2) {
        if (this.settings.conditionalselect.call(this, this.get_node(e3), t2)) return i2.activate_node.call(this, e3, t2);
      };
    }, E.jstree.defaults.contextmenu = { select_node: true, show_at_node: true, items: function(e2, t2) {
      return { create: { separator_before: false, separator_after: true, _disabled: false, label: "Create", action: function(e3) {
        var i2 = E.jstree.reference(e3.reference), e3 = i2.get_node(e3.reference);
        i2.create_node(e3, {}, "last", function(t3) {
          try {
            i2.edit(t3);
          } catch (e4) {
            setTimeout(function() {
              i2.edit(t3);
            }, 0);
          }
        });
      } }, rename: { separator_before: false, separator_after: false, _disabled: false, label: "Rename", action: function(e3) {
        var t3 = E.jstree.reference(e3.reference), e3 = t3.get_node(e3.reference);
        t3.edit(e3);
      } }, remove: { separator_before: false, icon: false, separator_after: false, _disabled: false, label: "Delete", action: function(e3) {
        var t3 = E.jstree.reference(e3.reference), e3 = t3.get_node(e3.reference);
        t3.is_selected(e3) ? t3.delete_node(t3.get_selected()) : t3.delete_node(e3);
      } }, ccp: { separator_before: true, icon: false, separator_after: false, label: "Edit", action: false, submenu: { cut: { separator_before: false, separator_after: false, label: "Cut", action: function(e3) {
        var t3 = E.jstree.reference(e3.reference), e3 = t3.get_node(e3.reference);
        t3.is_selected(e3) ? t3.cut(t3.get_top_selected()) : t3.cut(e3);
      } }, copy: { separator_before: false, icon: false, separator_after: false, label: "Copy", action: function(e3) {
        var t3 = E.jstree.reference(e3.reference), e3 = t3.get_node(e3.reference);
        t3.is_selected(e3) ? t3.copy(t3.get_top_selected()) : t3.copy(e3);
      } }, paste: { separator_before: false, icon: false, _disabled: function(e3) {
        return !E.jstree.reference(e3.reference).can_paste();
      }, separator_after: false, label: "Paste", action: function(e3) {
        var t3 = E.jstree.reference(e3.reference), e3 = t3.get_node(e3.reference);
        t3.paste(e3);
      } } } } };
    } }, E.jstree.plugins.contextmenu = function(e2, a2) {
      this.bind = function() {
        a2.bind.call(this);
        var i2 = 0, r2 = null, t2, s2;
        this.element.on("init.jstree loading.jstree ready.jstree", function() {
          this.get_container_ul().addClass("jstree-contextmenu");
        }.bind(this)).on("contextmenu.jstree", ".jstree-anchor", function(e3, t3) {
          "input" !== e3.target.tagName.toLowerCase() && (e3.preventDefault(), i2 = e3.ctrlKey ? +/* @__PURE__ */ new Date() : 0, (t3 || r2) && (i2 = +/* @__PURE__ */ new Date() + 1e4), r2 && clearTimeout(r2), this.is_loading(e3.currentTarget) || this.show_contextmenu(e3.currentTarget, e3.pageX, e3.pageY, e3));
        }.bind(this)).on("click.jstree", ".jstree-anchor", function(e3) {
          this._data.contextmenu.visible && (!i2 || 250 < +/* @__PURE__ */ new Date() - i2) && E.vakata.context.hide(), i2 = 0;
        }.bind(this)).on("touchstart.jstree", ".jstree-anchor", function(e3) {
          e3.originalEvent && e3.originalEvent.changedTouches && e3.originalEvent.changedTouches[0] && (t2 = e3.originalEvent.changedTouches[0].clientX, s2 = e3.originalEvent.changedTouches[0].clientY, r2 = setTimeout(function() {
            E(e3.currentTarget).trigger("contextmenu", true);
          }, 750));
        }).on("touchmove.vakata.jstree", function(e3) {
          r2 && e3.originalEvent && e3.originalEvent.changedTouches && e3.originalEvent.changedTouches[0] && (10 < Math.abs(t2 - e3.originalEvent.changedTouches[0].clientX) || 10 < Math.abs(s2 - e3.originalEvent.changedTouches[0].clientY)) && (clearTimeout(r2), E.vakata.context.hide());
        }).on("touchend.vakata.jstree", function(e3) {
          r2 && clearTimeout(r2);
        }), E(b).on("context_hide.vakata.jstree", function(e3, t3) {
          this._data.contextmenu.visible = false, E(t3.reference).removeClass("jstree-context");
        }.bind(this));
      }, this.teardown = function() {
        this._data.contextmenu.visible && E.vakata.context.hide(), E(b).off("context_hide.vakata.jstree"), a2.teardown.call(this);
      }, this.show_contextmenu = function(t2, i2, r2, e3) {
        if (!(t2 = this.get_node(t2)) || t2.id === E.jstree.root) return false;
        var s2 = this.settings.contextmenu, a3, n2 = this.get_node(t2, true).children(".jstree-anchor"), o2 = false, d2 = false;
        !s2.show_at_node && i2 !== P && r2 !== P || (o2 = n2.offset(), i2 = o2.left, r2 = o2.top + this._data.core.li_height), this.settings.contextmenu.select_node && !this.is_selected(t2) && this.activate_node(t2, e3), d2 = s2.items, E.vakata.is_function(d2) && (d2 = d2.call(this, t2, function(e4) {
          this._show_contextmenu(t2, i2, r2, e4);
        }.bind(this))), E.isPlainObject(d2) && this._show_contextmenu(t2, i2, r2, d2);
      }, this._show_contextmenu = function(e3, t2, i2, r2) {
        var s2, a3 = this.get_node(e3, true).children(".jstree-anchor");
        E(b).one("context_show.vakata.jstree", function(e4, t3) {
          var i3 = "jstree-contextmenu jstree-" + this.get_theme() + "-contextmenu";
          E(t3.element).addClass(i3), a3.addClass("jstree-context");
        }.bind(this)), this._data.contextmenu.visible = true, E.vakata.context.show(a3, { x: t2, y: i2 }, r2), this.trigger("show_contextmenu", { node: e3, x: t2, y: i2 });
      };
    }, g = { element: _ = false, reference: false, position_x: 0, position_y: 0, items: [], html: "", is_visible: false }, (h = E).vakata.context = { settings: { hide_onmouseleave: 0, icons: true }, _trigger: function(e2) {
      h(b).triggerHandler("context_" + e2 + ".vakata", { reference: g.reference, element: g.element, position: { x: g.position_x, y: g.position_y } });
    }, _execute: function(e2) {
      return !(!(e2 = g.items[e2]) || e2._disabled && (!h.vakata.is_function(e2._disabled) || e2._disabled({ item: e2, reference: g.reference, element: g.element })) || !e2.action) && e2.action.call(null, { item: e2, reference: g.reference, element: g.element, position: { x: g.position_x, y: g.position_y } });
    }, _parse: function(e2, t2) {
      if (!e2) return false;
      t2 || (g.html = "", g.items = []);
      var i2 = "", r2 = false, s2;
      return t2 && (i2 += "<ul>"), h.each(e2, function(e3, t3) {
        return !t3 || (g.items.push(t3), !r2 && t3.separator_before && (i2 += "<li class='vakata-context-separator'><a href='#' " + (h.vakata.context.settings.icons ? "" : 'class="vakata-context-no-icons"') + ">&#160;</a></li>"), r2 = false, i2 += "<li class='" + (t3._class || "") + (true === t3._disabled || h.vakata.is_function(t3._disabled) && t3._disabled({ item: t3, reference: g.reference, element: g.element }) ? " vakata-contextmenu-disabled " : "") + "' " + (t3.shortcut ? " data-shortcut='" + t3.shortcut + "' " : "") + ">", i2 += "<a href='#' rel='" + (g.items.length - 1) + "' " + (t3.title ? "title='" + t3.title + "'" : "") + ">", h.vakata.context.settings.icons && (i2 += "<i ", t3.icon && (-1 !== t3.icon.indexOf("/") || -1 !== t3.icon.indexOf(".") ? i2 += ` style='background:url("` + t3.icon + `") center center no-repeat' ` : i2 += " class='" + t3.icon + "' "), i2 += "></i><span class='vakata-contextmenu-sep'>&#160;</span>"), i2 += (h.vakata.is_function(t3.label) ? t3.label({ item: e3, reference: g.reference, element: g.element }) : t3.label) + (t3.shortcut ? ' <span class="vakata-contextmenu-shortcut vakata-contextmenu-shortcut-' + t3.shortcut + '">' + (t3.shortcut_label || "") + "</span>" : "") + "</a>", t3.submenu && (s2 = h.vakata.context._parse(t3.submenu, true)) && (i2 += s2), i2 += "</li>", void (t3.separator_after && (i2 += "<li class='vakata-context-separator'><a href='#' " + (h.vakata.context.settings.icons ? "" : 'class="vakata-context-no-icons"') + ">&#160;</a></li>", r2 = true)));
      }), i2 = i2.replace(/<li class\='vakata-context-separator'\><\/li\>$/, ""), t2 && (i2 += "</ul>"), t2 || (g.html = i2, h.vakata.context._trigger("parse")), 10 < i2.length && i2;
    }, _show_submenu: function(e2) {
      var t2, i2, r2, s2, a2, n2, o2, d2;
      (e2 = h(e2)).length && e2.children("ul").length && (t2 = e2.children("ul"), r2 = (i2 = e2.offset().left) + e2.outerWidth(), s2 = e2.offset().top, a2 = t2.width(), n2 = t2.height(), o2 = h(window).width() + h(window).scrollLeft(), d2 = h(window).height() + h(window).scrollTop(), _ ? e2[r2 - (a2 + 10 + e2.outerWidth()) < 0 ? "addClass" : "removeClass"]("vakata-context-left") : e2[o2 < r2 + a2 && o2 - r2 < i2 ? "addClass" : "removeClass"]("vakata-context-right"), d2 < s2 + n2 + 10 && t2.css("bottom", "-1px"), e2.hasClass("vakata-context-right") ? i2 < a2 && t2.css("margin-right", i2 - a2) : o2 - r2 < a2 && t2.css("margin-left", o2 - r2 - a2), t2.show());
    }, show: function(e2, t2, i2) {
      var r2, s2, a2, n2, o2, d2, c2, i2, l2 = true;
      switch (g.element && g.element.length && g.element.width(""), true) {
        case (!t2 && !e2):
          return false;
        case (!!t2 && !!e2):
          g.reference = e2, g.position_x = t2.x, g.position_y = t2.y;
          break;
        case (!t2 && !!e2):
          r2 = (g.reference = e2).offset(), g.position_x = r2.left + e2.outerHeight(), g.position_y = r2.top;
          break;
        case (!!t2 && !e2):
          g.position_x = t2.x, g.position_y = t2.y;
      }
      e2 && !i2 && h(e2).data("vakata_contextmenu") && (i2 = h(e2).data("vakata_contextmenu")), h.vakata.context._parse(i2) && g.element.html(g.html), g.items.length && (g.element.appendTo(b.body), s2 = g.element, a2 = g.position_x, n2 = g.position_y, o2 = s2.width(), d2 = s2.height(), c2 = h(window).width() + h(window).scrollLeft(), i2 = h(window).height() + h(window).scrollTop(), _ && (a2 -= s2.outerWidth() - h(e2).outerWidth()) < h(window).scrollLeft() + 20 && (a2 = h(window).scrollLeft() + 20), g.element.css({ left: a2 = c2 < a2 + o2 + 20 ? c2 - (o2 + 20) : a2, top: n2 = i2 < n2 + d2 + 20 ? i2 - (d2 + 20) : n2 }).show().find("a").first().trigger("focus").parent().addClass("vakata-context-hover"), g.is_visible = true, h.vakata.context._trigger("show"));
    }, hide: function() {
      g.is_visible && (g.element.hide().find("ul").hide().end().find(":focus").trigger("blur").end().detach(), g.is_visible = false, h.vakata.context._trigger("hide"));
    } }, h(function() {
      _ = "rtl" === h(b.body).css("direction");
      var i2 = false;
      g.element = h("<ul class='vakata-context'></ul>"), g.element.on("mouseenter", "li", function(e2) {
        e2.stopImmediatePropagation(), h.contains(this, e2.relatedTarget) || (i2 && clearTimeout(i2), g.element.find(".vakata-context-hover").removeClass("vakata-context-hover").end(), h(this).siblings().find("ul").hide().end().end().parentsUntil(".vakata-context", "li").addBack().addClass("vakata-context-hover"), h.vakata.context._show_submenu(this));
      }).on("mouseleave", "li", function(e2) {
        h.contains(this, e2.relatedTarget) || h(this).find(".vakata-context-hover").addBack().removeClass("vakata-context-hover");
      }).on("mouseleave", function(e2) {
        var t2;
        h(this).find(".vakata-context-hover").removeClass("vakata-context-hover"), h.vakata.context.settings.hide_onmouseleave && (i2 = setTimeout((t2 = this, function() {
          h.vakata.context.hide();
        }), h.vakata.context.settings.hide_onmouseleave));
      }).on("click", "a", function(e2) {
        e2.preventDefault(), h(this).trigger("blur").parent().hasClass("vakata-context-disabled") || false === h.vakata.context._execute(h(this).attr("rel")) || h.vakata.context.hide();
      }).on("keydown", "a", function(e2) {
        var t2 = null;
        switch (e2.which) {
          case 13:
          case 32:
            e2.type = "click", e2.preventDefault(), h(e2.currentTarget).trigger(e2);
            break;
          case 37:
            g.is_visible && (g.element.find(".vakata-context-hover").last().closest("li").first().find("ul").hide().find(".vakata-context-hover").removeClass("vakata-context-hover").end().end().children("a").trigger("focus"), e2.stopImmediatePropagation(), e2.preventDefault());
            break;
          case 38:
            g.is_visible && ((t2 = !(t2 = g.element.find("ul:visible").addBack().last().children(".vakata-context-hover").removeClass("vakata-context-hover").prevAll("li:not(.vakata-context-separator)").first()).length ? g.element.find("ul:visible").addBack().last().children("li:not(.vakata-context-separator)").last() : t2).addClass("vakata-context-hover").children("a").trigger("focus"), e2.stopImmediatePropagation(), e2.preventDefault());
            break;
          case 39:
            g.is_visible && (g.element.find(".vakata-context-hover").last().children("ul").show().children("li:not(.vakata-context-separator)").removeClass("vakata-context-hover").first().addClass("vakata-context-hover").children("a").trigger("focus"), e2.stopImmediatePropagation(), e2.preventDefault());
            break;
          case 40:
            g.is_visible && ((t2 = !(t2 = g.element.find("ul:visible").addBack().last().children(".vakata-context-hover").removeClass("vakata-context-hover").nextAll("li:not(.vakata-context-separator)").first()).length ? g.element.find("ul:visible").addBack().last().children("li:not(.vakata-context-separator)").first() : t2).addClass("vakata-context-hover").children("a").trigger("focus"), e2.stopImmediatePropagation(), e2.preventDefault());
            break;
          case 27:
            h.vakata.context.hide(), e2.preventDefault();
        }
      }).on("keydown", function(e2) {
        e2.preventDefault();
        var e2 = g.element.find(".vakata-contextmenu-shortcut-" + e2.which).parent();
        e2.parent().not(".vakata-context-disabled") && e2.trigger("click");
      }), h(b).on("mousedown.vakata.jstree", function(e2) {
        g.is_visible && g.element[0] !== e2.target && !h.contains(g.element[0], e2.target) && h.vakata.context.hide();
      }).on("context_show.vakata.jstree", function(e2, t2) {
        g.element.find("li:has(ul)").children("a").addClass("vakata-context-parent"), _ && g.element.addClass("vakata-context-rtl").css("direction", "rtl"), g.element.find("ul").hide().end();
      });
    }), E.jstree.defaults.dnd = { copy: true, open_timeout: 500, is_draggable: true, check_while_dragging: true, always_copy: false, inside_pos: 0, drag_selection: true, touch: true, large_drop_target: false, large_drag_target: false, use_html5: false, blank_space_drop: false }, E.jstree.plugins.dnd = function(e2, o2) {
      this.init = function(e3, t2) {
        o2.init.call(this, e3, t2), this.settings.dnd.use_html5 = this.settings.dnd.use_html5 && "draggable" in b.createElement("span");
      }, this.bind = function() {
        o2.bind.call(this), this.element.on(this.settings.dnd.use_html5 ? "dragstart.jstree" : "mousedown.jstree touchstart.jstree", this.settings.dnd.large_drag_target ? ".jstree-node" : ".jstree-anchor", function(e3) {
          if (this.settings.dnd.large_drag_target && E(e3.target).closest(".jstree-node")[0] !== e3.currentTarget) return true;
          if ("touchstart" === e3.type && (!this.settings.dnd.touch || "selected" === this.settings.dnd.touch && !E(e3.currentTarget).closest(".jstree-node").children(".jstree-anchor").hasClass("jstree-clicked"))) return true;
          var t2 = this.get_node(e3.target), i2 = this.is_selected(t2) && this.settings.dnd.drag_selection ? this.get_top_selected().length : 1, r2 = 1 < i2 ? i2 + " " + this.get_string("nodes") : this.get_text(e3.currentTarget);
          if (this.settings.core.force_text && (r2 = E.vakata.html.escape(r2)), t2 && (t2.id || 0 === t2.id) && t2.id !== E.jstree.root && (1 === e3.which || "touchstart" === e3.type || "dragstart" === e3.type) && (true === this.settings.dnd.is_draggable || E.vakata.is_function(this.settings.dnd.is_draggable) && this.settings.dnd.is_draggable.call(this, 1 < i2 ? this.get_top_selected(true) : [t2], e3))) {
            if (d = { jstree: true, origin: this, obj: this.get_node(t2, true), nodes: 1 < i2 ? this.get_top_selected() : [t2.id] }, u = e3.currentTarget, !this.settings.dnd.use_html5) return this.element.trigger("mousedown.jstree"), E.vakata.dnd.start(e3, d, '<div id="jstree-dnd" class="jstree-' + this.get_theme() + " jstree-" + this.get_theme() + "-" + this.get_theme_variant() + " " + (this.settings.core.themes.responsive ? " jstree-dnd-responsive" : "") + '"><i class="jstree-icon jstree-er"></i>' + r2 + '<ins class="jstree-copy">+</ins></div>');
            E.vakata.dnd._trigger("start", e3, { helper: E(), element: u, data: d });
          }
        }.bind(this)), this.settings.dnd.use_html5 && this.element.on("dragover.jstree", function(e3) {
          return e3.preventDefault(), E.vakata.dnd._trigger("move", e3, { helper: E(), element: u, data: d }), false;
        }).on("drop.jstree", function(e3) {
          return e3.preventDefault(), E.vakata.dnd._trigger("stop", e3, { helper: E(), element: u, data: d }), false;
        }.bind(this));
      }, this.redraw_node = function(e3, t2, i2, r2) {
        if ((e3 = o2.redraw_node.apply(this, arguments)) && this.settings.dnd.use_html5) if (this.settings.dnd.large_drag_target) e3.setAttribute("draggable", true);
        else {
          for (var s2, a2, n2 = null, s2 = 0, a2 = e3.childNodes.length; s2 < a2; s2++) if (e3.childNodes[s2] && e3.childNodes[s2].className && -1 !== e3.childNodes[s2].className.indexOf("jstree-anchor")) {
            n2 = e3.childNodes[s2];
            break;
          }
          n2 && n2.setAttribute("draggable", true);
        }
        return e3;
      };
    }, E(function() {
      var N = false, T = false, O = false, A = false, S = E('<div id="jstree-marker">&#160;</div>').hide();
      E(b).on("dragover.vakata.jstree", function(e2) {
        u && E.vakata.dnd._trigger("move", e2, { helper: E(), element: u, data: d });
      }).on("drop.vakata.jstree", function(e2) {
        u && (E.vakata.dnd._trigger("stop", e2, { helper: E(), element: u, data: d }), d = u = null);
      }).on("dnd_start.vakata.jstree", function(e2, t2) {
        O = N = false, t2 && t2.data && t2.data.jstree && S.appendTo(b.body);
      }).on("dnd_move.vakata.jstree", function(e2, s2) {
        var a2 = s2.event.target !== O.target;
        if (A && (s2.event && "dragover" === s2.event.type && !a2 || clearTimeout(A)), s2 && s2.data && s2.data.jstree && (!s2.event.target.id || "jstree-marker" !== s2.event.target.id)) {
          O = s2.event;
          var n2 = E.jstree.reference(s2.event.target), o2 = false, d2 = false, t2 = false, i2, c2, l2, h2, _2, g2, u2, f2, p2, m2, v2, j2, k, b2, y, x, w2, C;
          if (n2 && n2._data && n2._data.dnd) if (S.attr("class", "jstree-" + n2.get_theme() + (n2.settings.core.themes.responsive ? " jstree-dnd-responsive" : "")), x = s2.data.origin && (s2.data.origin.settings.dnd.always_copy || s2.data.origin.settings.dnd.copy && (s2.event.metaKey || s2.event.ctrlKey)), s2.helper.children().attr("class", "jstree-" + n2.get_theme() + " jstree-" + n2.get_theme() + "-" + n2.get_theme_variant() + " " + (n2.settings.core.themes.responsive ? " jstree-dnd-responsive" : "")).find(".jstree-copy").first()[x ? "show" : "hide"](), s2.event.target !== n2.element[0] && s2.event.target !== n2.get_container_ul()[0] || 0 !== n2.get_container_ul().children().length && !n2.settings.dnd.blank_space_drop) {
            if ((o2 = n2.settings.dnd.large_drop_target ? E(s2.event.target).closest(".jstree-node").children(".jstree-anchor") : E(s2.event.target).closest(".jstree-anchor")) && o2.length && o2.parent().is(".jstree-closed, .jstree-open, .jstree-leaf") && (d2 = o2.offset(), t2 = (s2.event.pageY !== P ? s2.event : s2.event.originalEvent).pageY - d2.top, h2 = o2.outerHeight(), u2 = t2 < h2 / 3 ? ["b", "i", "a"] : h2 - h2 / 3 < t2 ? ["a", "i", "b"] : h2 / 2 < t2 ? ["i", "a", "b"] : ["i", "b", "a"], E.each(u2, function(e3, t3) {
              switch (t3) {
                case "b":
                  c2 = d2.left - 6, l2 = d2.top, _2 = n2.get_parent(o2), g2 = o2.parent().index(), C = "jstree-below";
                  break;
                case "i":
                  b2 = n2.settings.dnd.inside_pos, y = n2.get_node(o2.parent()), c2 = d2.left - 2, l2 = d2.top + h2 / 2 + 1, _2 = y.id, g2 = "first" === b2 ? 0 : "last" === b2 ? y.children.length : Math.min(b2, y.children.length), C = "jstree-inside";
                  break;
                case "a":
                  c2 = d2.left - 6, l2 = d2.top + h2, _2 = n2.get_parent(o2), g2 = o2.parent().index() + 1, C = "jstree-above";
              }
              for (f2 = true, p2 = 0, m2 = s2.data.nodes.length; p2 < m2; p2++) if (v2 = s2.data.origin && (s2.data.origin.settings.dnd.always_copy || s2.data.origin.settings.dnd.copy && (s2.event.metaKey || s2.event.ctrlKey)) ? "copy_node" : "move_node", j2 = g2, "move_node" == v2 && "a" === t3 && s2.data.origin && s2.data.origin === n2 && _2 === n2.get_parent(s2.data.nodes[p2]) && (k = n2.get_node(_2), j2 > E.inArray(s2.data.nodes[p2], k.children) && --j2), !(f2 = f2 && (n2 && n2.settings && n2.settings.dnd && false === n2.settings.dnd.check_while_dragging || n2.check(v2, s2.data.origin && s2.data.origin !== n2 ? s2.data.origin.get_node(s2.data.nodes[p2]) : s2.data.nodes[p2], _2, j2, { dnd: true, ref: n2.get_node(o2.parent()), pos: t3, origin: s2.data.origin, is_multi: s2.data.origin && s2.data.origin !== n2, is_foreign: !s2.data.origin })))) {
                n2 && n2.last_error && (T = n2.last_error());
                break;
              }
              var i3, r2;
              if ("i" === t3 && o2.parent().is(".jstree-closed") && n2.settings.dnd.open_timeout && (s2.event && "dragover" === s2.event.type && !a2 || (A && clearTimeout(A), A = setTimeout((r2 = o2, function() {
                i3.open_node(r2);
              }), (i3 = n2).settings.dnd.open_timeout))), f2) return (w2 = n2.get_node(_2, true)).hasClass(".jstree-dnd-parent") || (E(".jstree-dnd-parent").removeClass("jstree-dnd-parent"), w2.addClass("jstree-dnd-parent")), N = { ins: n2, par: _2, pos: "i" !== t3 || "last" !== b2 || 0 !== g2 || n2.is_loaded(y) ? g2 : "last" }, S.css({ left: c2 + "px", top: l2 + "px" }).show(), S.removeClass("jstree-above jstree-inside jstree-below").addClass(C), s2.helper.find(".jstree-icon").first().removeClass("jstree-er").addClass("jstree-ok"), s2.event.originalEvent && s2.event.originalEvent.dataTransfer && (s2.event.originalEvent.dataTransfer.dropEffect = x ? "copy" : "move"), T = {}, !(u2 = true);
            }), true === u2)) return;
          } else {
            for (f2 = true, p2 = 0, m2 = s2.data.nodes.length; p2 < m2; p2++) if (!(f2 = f2 && n2.check(s2.data.origin && (s2.data.origin.settings.dnd.always_copy || s2.data.origin.settings.dnd.copy && (s2.event.metaKey || s2.event.ctrlKey)) ? "copy_node" : "move_node", s2.data.origin && s2.data.origin !== n2 ? s2.data.origin.get_node(s2.data.nodes[p2]) : s2.data.nodes[p2], E.jstree.root, "last", { dnd: true, ref: n2.get_node(E.jstree.root), pos: "i", origin: s2.data.origin, is_multi: s2.data.origin && s2.data.origin !== n2, is_foreign: !s2.data.origin }))) break;
            if (f2) return N = { ins: n2, par: E.jstree.root, pos: "last" }, S.hide(), s2.helper.find(".jstree-icon").first().removeClass("jstree-er").addClass("jstree-ok"), void (s2.event.originalEvent && s2.event.originalEvent.dataTransfer && (s2.event.originalEvent.dataTransfer.dropEffect = x ? "copy" : "move"));
          }
          E(".jstree-dnd-parent").removeClass("jstree-dnd-parent"), N = false, s2.helper.find(".jstree-icon").removeClass("jstree-ok").addClass("jstree-er"), s2.event.originalEvent && s2.event.originalEvent.dataTransfer, S.hide();
        }
      }).on("dnd_scroll.vakata.jstree", function(e2, t2) {
        t2 && t2.data && t2.data.jstree && (S.hide(), O = N = false, t2.helper.find(".jstree-icon").first().removeClass("jstree-ok").addClass("jstree-er"));
      }).on("dnd_stop.vakata.jstree", function(e2, t2) {
        if (E(".jstree-dnd-parent").removeClass("jstree-dnd-parent"), A && clearTimeout(A), t2 && t2.data && t2.data.jstree) {
          S.hide().detach();
          var i2, r2, s2 = [];
          if (N) {
            for (i2 = 0, r2 = t2.data.nodes.length; i2 < r2; i2++) s2[i2] = t2.data.origin ? t2.data.origin.get_node(t2.data.nodes[i2]) : t2.data.nodes[i2];
            N.ins[t2.data.origin && (t2.data.origin.settings.dnd.always_copy || t2.data.origin.settings.dnd.copy && (t2.event.metaKey || t2.event.ctrlKey)) ? "copy_node" : "move_node"](s2, N.par, N.pos, false, false, false, t2.data.origin);
          } else (i2 = E(t2.event.target).closest(".jstree")).length && T && T.error && "check" === T.error && (i2 = i2.jstree(true)) && i2.settings.core.error.call(this, T);
          N = O = false;
        }
      }).on("keyup.jstree keydown.jstree", function(e2, t2) {
        (t2 = E.vakata.dnd._get()) && t2.data && t2.data.jstree && ("keyup" === e2.type && 27 === e2.which ? (A && clearTimeout(A), A = O = T = N = false, S.hide().detach(), E.vakata.dnd._clean()) : (t2.helper.find(".jstree-copy").first()[t2.data.origin && (t2.data.origin.settings.dnd.always_copy || t2.data.origin.settings.dnd.copy && (e2.metaKey || e2.ctrlKey)) ? "show" : "hide"](), O && (O.metaKey = e2.metaKey, O.ctrlKey = e2.ctrlKey, E.vakata.dnd._trigger("move", O))));
      });
    }), p = { element: !((f = E).vakata.html = { div: f("<div></div>"), escape: function(e2) {
      return f.vakata.html.div.text(e2).html();
    }, strip: function(e2) {
      return f.vakata.html.div.empty().append(f.parseHTML(e2)).text();
    } }), target: false, is_down: false, is_drag: false, helper: false, helper_w: 0, data: false, init_x: 0, init_y: 0, scroll_l: 0, scroll_t: 0, scroll_e: false, scroll_i: false, is_touch: false }, f.vakata.dnd = { settings: { scroll_speed: 10, scroll_proximity: 20, helper_left: 5, helper_top: 10, threshold: 5, threshold_touch: 10 }, _trigger: function(e2, t2, i2) {
      (i2 = i2 === P ? f.vakata.dnd._get() : i2).event = t2, f(b).triggerHandler("dnd_" + e2 + ".vakata", i2);
    }, _get: function() {
      return { data: p.data, element: p.element, helper: p.helper };
    }, _clean: function() {
      p.helper && p.helper.remove(), p.scroll_i && (clearInterval(p.scroll_i), p.scroll_i = false), p = { element: false, target: false, is_down: false, is_drag: false, helper: false, helper_w: 0, data: false, init_x: 0, init_y: 0, scroll_l: 0, scroll_t: 0, scroll_e: false, scroll_i: false, is_touch: false }, u = null, f(b).off("mousemove.vakata.jstree touchmove.vakata.jstree", f.vakata.dnd.drag), f(b).off("mouseup.vakata.jstree touchend.vakata.jstree", f.vakata.dnd.stop);
    }, _scroll: function(e2) {
      if (!p.scroll_e || !p.scroll_l && !p.scroll_t) return p.scroll_i && (clearInterval(p.scroll_i), p.scroll_i = false), false;
      if (!p.scroll_i) return p.scroll_i = setInterval(f.vakata.dnd._scroll, 100), false;
      if (true === e2) return false;
      var t2 = p.scroll_e.scrollTop(), e2 = p.scroll_e.scrollLeft();
      p.scroll_e.scrollTop(t2 + p.scroll_t * f.vakata.dnd.settings.scroll_speed), p.scroll_e.scrollLeft(e2 + p.scroll_l * f.vakata.dnd.settings.scroll_speed), t2 === p.scroll_e.scrollTop() && e2 === p.scroll_e.scrollLeft() || f.vakata.dnd._trigger("scroll", p.scroll_e);
    }, start: function(e2, t2, i2) {
      "touchstart" === e2.type && e2.originalEvent && e2.originalEvent.changedTouches && e2.originalEvent.changedTouches[0] && (e2.pageX = e2.originalEvent.changedTouches[0].pageX, e2.pageY = e2.originalEvent.changedTouches[0].pageY, e2.target = b.elementFromPoint(e2.originalEvent.changedTouches[0].pageX - window.pageXOffset, e2.originalEvent.changedTouches[0].pageY - window.pageYOffset)), p.is_drag && f.vakata.dnd.stop({});
      try {
        e2.currentTarget.unselectable = "on", e2.currentTarget.onselectstart = function() {
          return false;
        }, e2.currentTarget.style && (e2.currentTarget.style.touchAction = "none", e2.currentTarget.style.msTouchAction = "none", e2.currentTarget.style.MozUserSelect = "none");
      } catch (e3) {
      }
      return p.init_x = e2.pageX, p.init_y = e2.pageY, p.data = t2, p.is_down = true, p.element = e2.currentTarget, p.target = e2.target, p.is_touch = "touchstart" === e2.type, false !== i2 && (p.helper = f("<div id='vakata-dnd'></div>").html(i2).css({ display: "block", margin: "0", padding: "0", position: "absolute", top: "-2000px", lineHeight: "16px", zIndex: "10000" })), f(b).on("mousemove.vakata.jstree touchmove.vakata.jstree", f.vakata.dnd.drag), f(b).on("mouseup.vakata.jstree touchend.vakata.jstree", f.vakata.dnd.stop), false;
    }, drag: function(i2) {
      if ("touchmove" === i2.type && i2.originalEvent && i2.originalEvent.changedTouches && i2.originalEvent.changedTouches[0] && (i2.pageX = i2.originalEvent.changedTouches[0].pageX, i2.pageY = i2.originalEvent.changedTouches[0].pageY, i2.target = b.elementFromPoint(i2.originalEvent.changedTouches[0].pageX - window.pageXOffset, i2.originalEvent.changedTouches[0].pageY - window.pageYOffset)), p.is_down) {
        if (!p.is_drag) {
          if (!(Math.abs(i2.pageX - p.init_x) > (p.is_touch ? f.vakata.dnd.settings.threshold_touch : f.vakata.dnd.settings.threshold) || Math.abs(i2.pageY - p.init_y) > (p.is_touch ? f.vakata.dnd.settings.threshold_touch : f.vakata.dnd.settings.threshold))) return;
          p.helper && (p.helper.appendTo(b.body), p.helper_w = p.helper.outerWidth()), p.is_drag = true, f(p.target).one("click.vakata", false), f.vakata.dnd._trigger("start", i2);
        }
        var e2 = false, t2 = false, r2 = false, s2 = false, a2 = false, n2 = false, o2 = false, d2 = false, c2 = false, l2 = false;
        return p.scroll_t = 0, p.scroll_l = 0, p.scroll_e = false, f(f(i2.target).parentsUntil("body").addBack().get().reverse()).filter(function() {
          return this.ownerDocument && /^auto|scroll$/.test(f(this).css("overflow")) && (this.scrollHeight > this.offsetHeight || this.scrollWidth > this.offsetWidth);
        }).each(function() {
          var e3 = f(this), t3 = e3.offset();
          if (this.scrollHeight > this.offsetHeight && (t3.top + e3.height() - i2.pageY < f.vakata.dnd.settings.scroll_proximity && (p.scroll_t = 1), i2.pageY - t3.top < f.vakata.dnd.settings.scroll_proximity && (p.scroll_t = -1)), this.scrollWidth > this.offsetWidth && (t3.left + e3.width() - i2.pageX < f.vakata.dnd.settings.scroll_proximity && (p.scroll_l = 1), i2.pageX - t3.left < f.vakata.dnd.settings.scroll_proximity && (p.scroll_l = -1)), p.scroll_t || p.scroll_l) return p.scroll_e = f(this), false;
        }), p.scroll_e || (e2 = f(b), t2 = f(window), r2 = e2.height(), s2 = t2.height(), a2 = e2.width(), n2 = t2.width(), o2 = e2.scrollTop(), d2 = e2.scrollLeft(), s2 < r2 && i2.pageY - o2 < f.vakata.dnd.settings.scroll_proximity && (p.scroll_t = -1), s2 < r2 && s2 - (i2.pageY - o2) < f.vakata.dnd.settings.scroll_proximity && (p.scroll_t = 1), n2 < a2 && i2.pageX - d2 < f.vakata.dnd.settings.scroll_proximity && (p.scroll_l = -1), n2 < a2 && n2 - (i2.pageX - d2) < f.vakata.dnd.settings.scroll_proximity && (p.scroll_l = 1), (p.scroll_t || p.scroll_l) && (p.scroll_e = e2)), p.scroll_e && f.vakata.dnd._scroll(true), p.helper && (c2 = parseInt(i2.pageY + f.vakata.dnd.settings.helper_top, 10), l2 = parseInt(i2.pageX + f.vakata.dnd.settings.helper_left, 10), a2 && l2 + p.helper_w > a2 && (l2 = a2 - (p.helper_w + 2)), p.helper.css({ left: l2 + "px", top: (c2 = r2 && r2 < c2 + 25 ? r2 - 50 : c2) + "px" })), f.vakata.dnd._trigger("move", i2), false;
      }
    }, stop: function(e2) {
      var t2;
      return "touchend" === e2.type && e2.originalEvent && e2.originalEvent.changedTouches && e2.originalEvent.changedTouches[0] && (e2.pageX = e2.originalEvent.changedTouches[0].pageX, e2.pageY = e2.originalEvent.changedTouches[0].pageY, e2.target = b.elementFromPoint(e2.originalEvent.changedTouches[0].pageX - window.pageXOffset, e2.originalEvent.changedTouches[0].pageY - window.pageYOffset)), p.is_drag ? (e2.target !== p.target && f(p.target).off("click.vakata"), f.vakata.dnd._trigger("stop", e2)) : "touchend" === e2.type && e2.target === p.target && (t2 = setTimeout(function() {
        f(e2.target).trigger("click");
      }, 100), f(e2.target).one("click", function() {
        t2 && clearTimeout(t2);
      })), f.vakata.dnd._clean(), false;
    } }, E.jstree.defaults.massload = null, E.jstree.plugins.massload = function(e2, l2) {
      this.init = function(e3, t2) {
        this._data.massload = {}, l2.init.call(this, e3, t2);
      }, this._load_nodes = function(a2, n2, o2, d2) {
        var e3 = this.settings.massload, t2 = [], i2 = this._model.data, r2, s2, c2;
        if (!o2) {
          for (r2 = 0, s2 = a2.length; r2 < s2; r2++) i2[a2[r2]] && (i2[a2[r2]].state.loaded || i2[a2[r2]].state.failed) && !d2 || (t2.push(a2[r2]), (c2 = this.get_node(a2[r2], true)) && c2.length && c2.addClass("jstree-loading").attr("aria-busy", true));
          if (this._data.massload = {}, t2.length) {
            if (E.vakata.is_function(e3)) return e3.call(this, t2, function(e4) {
              var t3, i3;
              if (e4) for (t3 in e4) e4.hasOwnProperty(t3) && (this._data.massload[t3] = e4[t3]);
              for (t3 = 0, i3 = a2.length; t3 < i3; t3++) (c2 = this.get_node(a2[t3], true)) && c2.length && c2.removeClass("jstree-loading").attr("aria-busy", false);
              l2._load_nodes.call(this, a2, n2, o2, d2);
            }.bind(this));
            if ("object" == typeof e3 && e3 && e3.url) return e3 = E.extend(true, {}, e3), E.vakata.is_function(e3.url) && (e3.url = e3.url.call(this, t2)), E.vakata.is_function(e3.data) && (e3.data = e3.data.call(this, t2)), E.ajax(e3).done(function(e4, t3, i3) {
              var r3, s3;
              if (e4) for (r3 in e4) e4.hasOwnProperty(r3) && (this._data.massload[r3] = e4[r3]);
              for (r3 = 0, s3 = a2.length; r3 < s3; r3++) (c2 = this.get_node(a2[r3], true)) && c2.length && c2.removeClass("jstree-loading").attr("aria-busy", false);
              l2._load_nodes.call(this, a2, n2, o2, d2);
            }.bind(this)).fail(function(e4) {
              l2._load_nodes.call(this, a2, n2, o2, d2);
            }.bind(this));
          }
        }
        return l2._load_nodes.call(this, a2, n2, o2, d2);
      }, this._load_node = function(e3, t2) {
        var i2 = this._data.massload[e3.id], r2 = null, i2;
        return i2 ? (r2 = this["string" == typeof i2 ? "_append_html_data" : "_append_json_data"](e3, "string" == typeof i2 ? E(E.parseHTML(i2)).filter(function() {
          return 3 !== this.nodeType;
        }) : i2, function(e4) {
          t2.call(this, e4);
        }), (i2 = this.get_node(e3.id, true)) && i2.length && i2.removeClass("jstree-loading").attr("aria-busy", false), delete this._data.massload[e3.id], r2) : l2._load_node.call(this, e3, t2);
      };
    }, E.jstree.defaults.search = { ajax: false, fuzzy: false, case_sensitive: false, show_only_matches: false, show_only_matches_children: false, close_opened_onclear: true, search_leaves_only: false, search_callback: false }, E.jstree.plugins.search = function(e2, o2) {
      this.bind = function() {
        o2.bind.call(this), this._data.search.str = "", this._data.search.dom = E(), this._data.search.res = [], this._data.search.opn = [], this._data.search.som = false, this._data.search.smc = false, this._data.search.hdn = [], this.element.on("search.jstree", function(e3, t2) {
          if (this._data.search.som && t2.res.length) {
            for (var i2 = this._model.data, r2, s2, a2 = [], n2, o3, r2 = 0, s2 = t2.res.length; r2 < s2; r2++) if (i2[t2.res[r2]] && !i2[t2.res[r2]].state.hidden && (a2.push(t2.res[r2]), a2 = a2.concat(i2[t2.res[r2]].parents), this._data.search.smc)) for (n2 = 0, o3 = i2[t2.res[r2]].children_d.length; n2 < o3; n2++) i2[i2[t2.res[r2]].children_d[n2]] && !i2[i2[t2.res[r2]].children_d[n2]].state.hidden && a2.push(i2[t2.res[r2]].children_d[n2]);
            a2 = E.vakata.array_remove_item(E.vakata.array_unique(a2), E.jstree.root), this._data.search.hdn = this.hide_all(true), this.show_node(a2, true), this.redraw(true);
          }
        }.bind(this)).on("clear_search.jstree", function(e3, t2) {
          this._data.search.som && t2.res.length && (this.show_node(this._data.search.hdn, true), this.redraw(true));
        }.bind(this));
      }, this.search = function(r2, e3, t2, i2, s2, a2) {
        if (false === r2 || "" === E.vakata.trim(r2.toString())) return this.clear_search();
        i2 = (i2 = this.get_node(i2)) && (i2.id || 0 === i2.id) ? i2.id : null, r2 = r2.toString();
        var n2 = this.settings.search, o3 = n2.ajax || false, d2 = this._model.data, c2 = null, l2 = [], h2 = [], _2, g2;
        if (this._data.search.res.length && !s2 && this.clear_search(), t2 === P && (t2 = n2.show_only_matches), a2 === P && (a2 = n2.show_only_matches_children), !e3 && false !== o3) return E.vakata.is_function(o3) ? o3.call(this, r2, function(e4) {
          e4 && e4.d && (e4 = e4.d), this._load_nodes(E.vakata.is_array(e4) ? E.vakata.array_unique(e4) : [], function() {
            this.search(r2, true, t2, i2, s2, a2);
          });
        }.bind(this), i2) : ((o3 = E.extend({}, o3)).data || (o3.data = {}), o3.data.str = r2, i2 && (o3.data.inside = i2), this._data.search.lastRequest && this._data.search.lastRequest.abort(), this._data.search.lastRequest = E.ajax(o3).fail(function() {
          this._data.core.last_error = { error: "ajax", plugin: "search", id: "search_01", reason: "Could not load search parents", data: JSON.stringify(o3) }, this.settings.core.error.call(this, this._data.core.last_error);
        }.bind(this)).done(function(e4) {
          e4 && e4.d && (e4 = e4.d), this._load_nodes(E.vakata.is_array(e4) ? E.vakata.array_unique(e4) : [], function() {
            this.search(r2, true, t2, i2, s2, a2);
          });
        }.bind(this)), this._data.search.lastRequest);
        if (s2 || (this._data.search.str = r2, this._data.search.dom = E(), this._data.search.res = [], this._data.search.opn = [], this._data.search.som = t2, this._data.search.smc = a2), c2 = new E.vakata.search(r2, true, { caseSensitive: n2.case_sensitive, fuzzy: n2.fuzzy }), E.each(d2[i2 || E.jstree.root].children_d, function(e4, t3) {
          var i3 = d2[t3];
          i3.text && !i3.state.hidden && (!n2.search_leaves_only || i3.state.loaded && 0 === i3.children.length) && (n2.search_callback && n2.search_callback.call(this, r2, i3) || !n2.search_callback && c2.search(i3.text).isMatch) && (l2.push(t3), h2 = h2.concat(i3.parents));
        }), l2.length) {
          for (_2 = 0, g2 = (h2 = E.vakata.array_unique(h2)).length; _2 < g2; _2++) h2[_2] !== E.jstree.root && d2[h2[_2]] && true === this.open_node(h2[_2], null, 0) && this._data.search.opn.push(h2[_2]);
          s2 ? (this._data.search.dom = this._data.search.dom.add(E(this.element[0].querySelectorAll("#" + E.map(l2, function(e4) {
            return -1 !== "0123456789".indexOf(e4[0]) ? "\\3" + e4[0] + " " + e4.substr(1).replace(E.jstree.idregex, "\\$&") : e4.replace(E.jstree.idregex, "\\$&");
          }).join(", #")))), this._data.search.res = E.vakata.array_unique(this._data.search.res.concat(l2))) : (this._data.search.dom = E(this.element[0].querySelectorAll("#" + E.map(l2, function(e4) {
            return -1 !== "0123456789".indexOf(e4[0]) ? "\\3" + e4[0] + " " + e4.substr(1).replace(E.jstree.idregex, "\\$&") : e4.replace(E.jstree.idregex, "\\$&");
          }).join(", #"))), this._data.search.res = l2), this._data.search.dom.children(".jstree-anchor").addClass("jstree-search");
        }
        this.trigger("search", { nodes: this._data.search.dom, str: r2, res: this._data.search.res, show_only_matches: t2 });
      }, this.clear_search = function() {
        this.settings.search.close_opened_onclear && this.close_node(this._data.search.opn, 0), this.trigger("clear_search", { nodes: this._data.search.dom, str: this._data.search.str, res: this._data.search.res }), this._data.search.res.length && (this._data.search.dom = E(this.element[0].querySelectorAll("#" + E.map(this._data.search.res, function(e3) {
          return -1 !== "0123456789".indexOf(e3[0]) ? "\\3" + e3[0] + " " + e3.substr(1).replace(E.jstree.idregex, "\\$&") : e3.replace(E.jstree.idregex, "\\$&");
        }).join(", #"))), this._data.search.dom.children(".jstree-anchor").removeClass("jstree-search")), this._data.search.str = "", this._data.search.res = [], this._data.search.opn = [], this._data.search.dom = E();
      }, this.redraw_node = function(e3, t2, i2, r2) {
        if ((e3 = o2.redraw_node.apply(this, arguments)) && -1 !== E.inArray(e3.id, this._data.search.res)) {
          for (var s2, a2, n2 = null, s2 = 0, a2 = e3.childNodes.length; s2 < a2; s2++) if (e3.childNodes[s2] && e3.childNodes[s2].className && -1 !== e3.childNodes[s2].className.indexOf("jstree-anchor")) {
            n2 = e3.childNodes[s2];
            break;
          }
          n2 && (n2.className += " jstree-search");
        }
        return e3;
      };
    }, (w = E).vakata.search = function(p2, e2, m2) {
      m2 = m2 || {}, false !== (m2 = w.extend({}, w.vakata.search.defaults, m2)).fuzzy && (m2.fuzzy = true), p2 = m2.caseSensitive ? p2 : p2.toLowerCase();
      var v2 = m2.location, i2 = m2.distance, j2 = m2.threshold, k = p2.length, b2, y, x, t2;
      return 32 < k && (m2.fuzzy = false), m2.fuzzy && (b2 = 1 << k - 1, y = function() {
        for (var e3 = {}, t3 = 0, t3 = 0; t3 < k; t3++) e3[p2.charAt(t3)] = 0;
        for (t3 = 0; t3 < k; t3++) e3[p2.charAt(t3)] |= 1 << k - t3 - 1;
        return e3;
      }(), x = function(e3, t3) {
        var e3 = e3 / k, t3 = Math.abs(v2 - t3);
        return i2 ? e3 + t3 / i2 : t3 ? 1 : e3;
      }), t2 = function(e3) {
        if (e3 = m2.caseSensitive ? e3.toString() : e3.toString().toLowerCase(), p2 === e3 || -1 !== e3.indexOf(p2)) return { isMatch: true, score: 0 };
        if (!m2.fuzzy) return { isMatch: false, score: 1 };
        var t3, i3, r2 = e3.length, s2 = j2, a2 = e3.indexOf(p2, v2), n2, o2, d2 = k + r2, c2, l2, h2, _2, g2, u2 = 1, f2 = [];
        for (-1 !== a2 && (s2 = Math.min(x(0, a2), s2), -1 !== (a2 = e3.lastIndexOf(p2, v2 + k)) && (s2 = Math.min(x(0, a2), s2))), a2 = -1, t3 = 0; t3 < k; t3++) {
          n2 = 0, o2 = d2;
          while (n2 < o2) x(t3, v2 + o2) <= s2 ? n2 = o2 : d2 = o2, o2 = Math.floor((d2 - n2) / 2 + n2);
          for (d2 = o2, l2 = Math.max(1, v2 - o2 + 1), h2 = Math.min(v2 + o2, r2) + k, (_2 = new Array(h2 + 2))[h2 + 1] = (1 << t3) - 1, i3 = h2; l2 <= i3; i3--) if (g2 = y[e3.charAt(i3 - 1)], _2[i3] = 0 === t3 ? (_2[i3 + 1] << 1 | 1) & g2 : (_2[i3 + 1] << 1 | 1) & g2 | (c2[i3 + 1] | c2[i3]) << 1 | 1 | c2[i3 + 1], _2[i3] & b2 && (u2 = x(t3, i3 - 1)) <= s2) {
            if (s2 = u2, f2.push(a2 = i3 - 1), !(v2 < a2)) break;
            l2 = Math.max(1, 2 * v2 - a2);
          }
          if (x(t3 + 1, v2) > s2) break;
          c2 = _2;
        }
        return { isMatch: 0 <= a2, score: u2 };
      }, true === e2 ? { search: t2 } : t2(e2);
    }, w.vakata.search.defaults = { location: 0, distance: 100, threshold: 0.6, fuzzy: false, caseSensitive: false }, E.jstree.defaults.sort = function(e2, t2) {
      return this.get_text(e2) > this.get_text(t2) ? 1 : -1;
    };
    var m = !(E.jstree.plugins.sort = function(e2, t2) {
      this.bind = function() {
        t2.bind.call(this), this.element.on("model.jstree", function(e3, t3) {
          this.sort(t3.parent, true);
        }.bind(this)).on("rename_node.jstree create_node.jstree", function(e3, t3) {
          this.sort(t3.parent || t3.node.parent, false), this.redraw_node(t3.parent || t3.node.parent, true);
        }.bind(this)).on("move_node.jstree copy_node.jstree", function(e3, t3) {
          this.sort(t3.parent, false), this.redraw_node(t3.parent, true);
        }.bind(this));
      }, this.sort = function(e3, t3) {
        var i2, r2;
        if ((e3 = this.get_node(e3)) && e3.children && e3.children.length && (e3.children.sort(this.settings.sort.bind(this)), t3)) for (i2 = 0, r2 = e3.children_d.length; i2 < r2; i2++) this.sort(e3.children_d[i2], false);
      };
    }), t, v;
    E.jstree.defaults.state = { key: "jstree", events: "changed.jstree open_node.jstree close_node.jstree check_node.jstree uncheck_node.jstree", ttl: false, filter: false, preserve_loaded: false }, E.jstree.plugins.state = function(e2, t2) {
      this.bind = function() {
        t2.bind.call(this);
        var i2 = function() {
          this.element.on(this.settings.state.events, function() {
            m && clearTimeout(m), m = setTimeout(function() {
              this.save_state();
            }.bind(this), 100);
          }.bind(this)), this.trigger("state_ready");
        }.bind(this);
        this.element.on("ready.jstree", function(e3, t3) {
          this.element.one("restore_state.jstree", i2), this.restore_state() || i2();
        }.bind(this));
      }, this.save_state = function() {
        var e3 = this.get_state();
        this.settings.state.preserve_loaded || delete e3.core.loaded;
        var e3 = { state: e3, ttl: this.settings.state.ttl, sec: +/* @__PURE__ */ new Date() };
        E.vakata.storage.set(this.settings.state.key, JSON.stringify(e3));
      }, this.restore_state = function() {
        var i2 = E.vakata.storage.get(this.settings.state.key);
        if (i2) try {
          i2 = JSON.parse(i2);
        } catch (e3) {
          return false;
        }
        return !(i2 && i2.ttl && i2.sec && +/* @__PURE__ */ new Date() - i2.sec > i2.ttl) && (!!(i2 = (i2 = i2 && i2.state ? i2.state : i2) && E.vakata.is_function(this.settings.state.filter) ? this.settings.state.filter.call(this, i2) : i2) && (this.settings.state.preserve_loaded || delete i2.core.loaded, this.element.one("set_state.jstree", function(e3, t3) {
          t3.instance.trigger("restore_state", { state: E.extend(true, {}, i2) });
        }), this.set_state(i2), true));
      }, this.clear_state = function() {
        return E.vakata.storage.del(this.settings.state.key);
      };
    }, E.vakata.storage = { set: function(e2, t2) {
      return window.localStorage.setItem(e2, t2);
    }, get: function(e2) {
      return window.localStorage.getItem(e2);
    }, del: function(e2) {
      return window.localStorage.removeItem(e2);
    } }, E.jstree.defaults.types = { default: {} }, E.jstree.defaults.types[E.jstree.root] = {}, E.jstree.plugins.types = function(e2, l2) {
      this.init = function(e3, t2) {
        var i2, r2;
        if (t2 && t2.types && t2.types.default) {
          for (i2 in t2.types) if ("default" !== i2 && i2 !== E.jstree.root && t2.types.hasOwnProperty(i2)) for (r2 in t2.types.default) t2.types.default.hasOwnProperty(r2) && t2.types[i2][r2] === P && (t2.types[i2][r2] = t2.types.default[r2]);
        }
        l2.init.call(this, e3, t2), this._model.data[E.jstree.root].type = E.jstree.root;
      }, this.refresh = function(e3, t2) {
        l2.refresh.call(this, e3, t2), this._model.data[E.jstree.root].type = E.jstree.root;
      }, this.bind = function() {
        this.element.on("model.jstree", function(e3, t2) {
          for (var i2 = this._model.data, r2 = t2.nodes, s2 = this.settings.types, a2, n2, o2 = "default", d2, a2 = 0, n2 = r2.length; a2 < n2; a2++) {
            if (o2 = "default", i2[r2[a2]].original && i2[r2[a2]].original.type && s2[i2[r2[a2]].original.type] && (o2 = i2[r2[a2]].original.type), i2[r2[a2]].data && i2[r2[a2]].data.jstree && i2[r2[a2]].data.jstree.type && s2[i2[r2[a2]].data.jstree.type] && (o2 = i2[r2[a2]].data.jstree.type), i2[r2[a2]].type = o2, true === i2[r2[a2]].icon && s2[o2].icon !== P && (i2[r2[a2]].icon = s2[o2].icon), s2[o2].li_attr !== P && "object" == typeof s2[o2].li_attr) for (d2 in s2[o2].li_attr) s2[o2].li_attr.hasOwnProperty(d2) && "id" !== d2 && (i2[r2[a2]].li_attr[d2] === P ? i2[r2[a2]].li_attr[d2] = s2[o2].li_attr[d2] : "class" === d2 && (i2[r2[a2]].li_attr.class = s2[o2].li_attr.class + " " + i2[r2[a2]].li_attr.class));
            if (s2[o2].a_attr !== P && "object" == typeof s2[o2].a_attr) for (d2 in s2[o2].a_attr) s2[o2].a_attr.hasOwnProperty(d2) && "id" !== d2 && (i2[r2[a2]].a_attr[d2] === P ? i2[r2[a2]].a_attr[d2] = s2[o2].a_attr[d2] : "href" === d2 && "#" === i2[r2[a2]].a_attr[d2] ? i2[r2[a2]].a_attr.href = s2[o2].a_attr.href : "class" === d2 && (i2[r2[a2]].a_attr.class = s2[o2].a_attr.class + " " + i2[r2[a2]].a_attr.class));
          }
          i2[E.jstree.root].type = E.jstree.root;
        }.bind(this)), l2.bind.call(this);
      }, this.get_json = function(e3, t2, i2) {
        var r2, s2, a2 = this._model.data, n2 = t2 ? E.extend(true, {}, t2, { no_id: false }) : {}, o2 = l2.get_json.call(this, e3, n2, i2);
        if (false === o2) return false;
        if (E.vakata.is_array(o2)) for (r2 = 0, s2 = o2.length; r2 < s2; r2++) o2[r2].type = (o2[r2].id || 0 === o2[r2].id) && a2[o2[r2].id] && a2[o2[r2].id].type ? a2[o2[r2].id].type : "default", t2 && t2.no_id && (delete o2[r2].id, o2[r2].li_attr && o2[r2].li_attr.id && delete o2[r2].li_attr.id, o2[r2].a_attr && o2[r2].a_attr.id && delete o2[r2].a_attr.id);
        else o2.type = (o2.id || 0 === o2.id) && a2[o2.id] && a2[o2.id].type ? a2[o2.id].type : "default", t2 && t2.no_id && (o2 = this._delete_ids(o2));
        return o2;
      }, this._delete_ids = function(e3) {
        if (E.vakata.is_array(e3)) {
          for (var t2 = 0, i2 = e3.length; t2 < i2; t2++) e3[t2] = this._delete_ids(e3[t2]);
          return e3;
        }
        return delete e3.id, e3.li_attr && e3.li_attr.id && delete e3.li_attr.id, e3.a_attr && e3.a_attr.id && delete e3.a_attr.id, e3.children && E.vakata.is_array(e3.children) && (e3.children = this._delete_ids(e3.children)), e3;
      }, this.check = function(e3, t2, i2, r2, s2) {
        if (false === l2.check.call(this, e3, t2, i2, r2, s2)) return false;
        t2 = t2 && (t2.id || 0 === t2.id) ? t2 : this.get_node(t2), i2 = i2 && (i2.id || 0 === i2.id) ? i2 : this.get_node(i2);
        var a2, n2, o2, d2, c2, a2 = (a2 = t2 && (t2.id || 0 === t2.id) ? s2 && s2.origin ? s2.origin : E.jstree.reference(t2.id) : null) && a2._model && a2._model.data ? a2._model.data : null;
        switch (e3) {
          case "create_node":
          case "move_node":
          case "copy_node":
            if ("move_node" !== e3 || -1 === E.inArray(t2.id, i2.children)) {
              if ((n2 = this.get_rules(i2)).max_children !== P && -1 !== n2.max_children && n2.max_children === i2.children.length) return !(this._data.core.last_error = { error: "check", plugin: "types", id: "types_01", reason: "max_children prevents function: " + e3, data: JSON.stringify({ chk: e3, pos: r2, obj: !(!t2 || !t2.id && 0 !== t2.id) && t2.id, par: !(!i2 || !i2.id && 0 !== i2.id) && i2.id }) });
              if (n2.valid_children !== P && -1 !== n2.valid_children && -1 === E.inArray(t2.type || "default", n2.valid_children)) return !(this._data.core.last_error = { error: "check", plugin: "types", id: "types_02", reason: "valid_children prevents function: " + e3, data: JSON.stringify({ chk: e3, pos: r2, obj: !(!t2 || !t2.id && 0 !== t2.id) && t2.id, par: !(!i2 || !i2.id && 0 !== i2.id) && i2.id }) });
              if (a2 && t2.children_d && t2.parents) {
                for (d2 = o2 = 0, c2 = t2.children_d.length; d2 < c2; d2++) o2 = Math.max(o2, a2[t2.children_d[d2]].parents.length);
                o2 = o2 - t2.parents.length + 1;
              }
              (o2 <= 0 || o2 === P) && (o2 = 1);
              do {
                if (n2.max_depth !== P && -1 !== n2.max_depth && n2.max_depth < o2) return !(this._data.core.last_error = { error: "check", plugin: "types", id: "types_03", reason: "max_depth prevents function: " + e3, data: JSON.stringify({ chk: e3, pos: r2, obj: !(!t2 || !t2.id && 0 !== t2.id) && t2.id, par: !(!i2 || !i2.id && 0 !== i2.id) && i2.id }) });
                i2 = this.get_node(i2.parent), n2 = this.get_rules(i2), o2++;
              } while (i2);
            }
        }
        return true;
      }, this.get_rules = function(e3) {
        if (!(e3 = this.get_node(e3))) return false;
        var e3 = this.get_type(e3, true);
        return e3.max_depth === P && (e3.max_depth = -1), e3.max_children === P && (e3.max_children = -1), e3.valid_children === P && (e3.valid_children = -1), e3;
      }, this.get_type = function(e3, t2) {
        return !!(e3 = this.get_node(e3)) && (t2 ? E.extend({ type: e3.type }, this.settings.types[e3.type]) : e3.type);
      }, this.set_type = function(e3, t2) {
        var i2 = this._model.data, r2, s2, a2, n2, o2, d2, c2, l3;
        if (E.vakata.is_array(e3)) {
          for (s2 = 0, a2 = (e3 = e3.slice()).length; s2 < a2; s2++) this.set_type(e3[s2], t2);
          return true;
        }
        if (r2 = this.settings.types, e3 = this.get_node(e3), !r2[t2] || !e3) return false;
        if ((c2 = this.get_node(e3, true)) && c2.length && (l3 = c2.children(".jstree-anchor")), n2 = e3.type, o2 = this.get_icon(e3), e3.type = t2, true !== o2 && r2[n2] && (r2[n2].icon === P || o2 !== r2[n2].icon) || this.set_icon(e3, r2[t2].icon === P || r2[t2].icon), r2[n2] && r2[n2].li_attr !== P && "object" == typeof r2[n2].li_attr) for (d2 in r2[n2].li_attr) r2[n2].li_attr.hasOwnProperty(d2) && "id" !== d2 && ("class" === d2 ? (i2[e3.id].li_attr.class = (i2[e3.id].li_attr.class || "").replace(r2[n2].li_attr[d2], ""), c2 && c2.removeClass(r2[n2].li_attr[d2])) : i2[e3.id].li_attr[d2] === r2[n2].li_attr[d2] && (i2[e3.id].li_attr[d2] = null, c2 && c2.removeAttr(d2)));
        if (r2[n2] && r2[n2].a_attr !== P && "object" == typeof r2[n2].a_attr) for (d2 in r2[n2].a_attr) r2[n2].a_attr.hasOwnProperty(d2) && "id" !== d2 && ("class" === d2 ? (i2[e3.id].a_attr.class = (i2[e3.id].a_attr.class || "").replace(r2[n2].a_attr[d2], ""), l3 && l3.removeClass(r2[n2].a_attr[d2])) : i2[e3.id].a_attr[d2] === r2[n2].a_attr[d2] && ("href" === d2 ? (i2[e3.id].a_attr[d2] = "#", l3 && l3.attr("href", "#")) : (delete i2[e3.id].a_attr[d2], l3 && l3.removeAttr(d2))));
        if (r2[t2].li_attr !== P && "object" == typeof r2[t2].li_attr) for (d2 in r2[t2].li_attr) r2[t2].li_attr.hasOwnProperty(d2) && "id" !== d2 && (i2[e3.id].li_attr[d2] === P ? (i2[e3.id].li_attr[d2] = r2[t2].li_attr[d2], c2 && ("class" === d2 ? c2.addClass(r2[t2].li_attr[d2]) : c2.attr(d2, r2[t2].li_attr[d2]))) : "class" === d2 && (i2[e3.id].li_attr.class = r2[t2].li_attr[d2] + " " + i2[e3.id].li_attr.class, c2 && c2.addClass(r2[t2].li_attr[d2])));
        if (r2[t2].a_attr !== P && "object" == typeof r2[t2].a_attr) for (d2 in r2[t2].a_attr) r2[t2].a_attr.hasOwnProperty(d2) && "id" !== d2 && (i2[e3.id].a_attr[d2] === P ? (i2[e3.id].a_attr[d2] = r2[t2].a_attr[d2], l3 && ("class" === d2 ? l3.addClass(r2[t2].a_attr[d2]) : l3.attr(d2, r2[t2].a_attr[d2]))) : "href" === d2 && "#" === i2[e3.id].a_attr[d2] ? (i2[e3.id].a_attr.href = r2[t2].a_attr.href, l3 && l3.attr("href", r2[t2].a_attr.href)) : "class" === d2 && (i2[e3.id].a_attr.class = r2[t2].a_attr.class + " " + i2[e3.id].a_attr.class, l3 && l3.addClass(r2[t2].a_attr[d2])));
        return true;
      };
    }, E.jstree.defaults.unique = { case_sensitive: false, trim_whitespace: false, duplicate: function(e2, t2) {
      return e2 + " (" + t2 + ")";
    } }, E.jstree.plugins.unique = function(e2, f2) {
      this.check = function(e3, t2, i2, r2, s2) {
        if (false === f2.check.call(this, e3, t2, i2, r2, s2)) return false;
        if (t2 = t2 && (t2.id || 0 === t2.id) ? t2 : this.get_node(t2), !(i2 = i2 && (i2.id || 0 === i2.id) ? i2 : this.get_node(i2)) || !i2.children) return true;
        for (var a2 = "rename_node" === e3 ? r2 : t2.text, n2 = [], o2 = this.settings.unique.case_sensitive, d2 = this.settings.unique.trim_whitespace, c2 = this._model.data, l2, h2, _2, l2 = 0, h2 = i2.children.length; l2 < h2; l2++) _2 = c2[i2.children[l2]].text, o2 || (_2 = _2.toLowerCase()), d2 && (_2 = _2.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")), n2.push(_2);
        switch (o2 || (a2 = a2.toLowerCase()), d2 && (a2 = a2.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")), e3) {
          case "delete_node":
            return true;
          case "rename_node":
            return _2 = t2.text || "", o2 || (_2 = _2.toLowerCase()), d2 && (_2 = _2.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")), (l2 = -1 === E.inArray(a2, n2) || t2.text && _2 === a2) || (this._data.core.last_error = { error: "check", plugin: "unique", id: "unique_01", reason: "Child with name " + a2 + " already exists. Preventing: " + e3, data: JSON.stringify({ chk: e3, pos: r2, obj: !(!t2 || !t2.id && 0 !== t2.id) && t2.id, par: !(!i2 || !i2.id && 0 !== i2.id) && i2.id }) }), l2;
          case "create_node":
            return (l2 = -1 === E.inArray(a2, n2)) || (this._data.core.last_error = { error: "check", plugin: "unique", id: "unique_04", reason: "Child with name " + a2 + " already exists. Preventing: " + e3, data: JSON.stringify({ chk: e3, pos: r2, obj: !(!t2 || !t2.id && 0 !== t2.id) && t2.id, par: !(!i2 || !i2.id && 0 !== i2.id) && i2.id }) }), l2;
          case "copy_node":
            return (l2 = -1 === E.inArray(a2, n2)) || (this._data.core.last_error = { error: "check", plugin: "unique", id: "unique_02", reason: "Child with name " + a2 + " already exists. Preventing: " + e3, data: JSON.stringify({ chk: e3, pos: r2, obj: !(!t2 || !t2.id && 0 !== t2.id) && t2.id, par: !(!i2 || !i2.id && 0 !== i2.id) && i2.id }) }), l2;
          case "move_node":
            return (l2 = t2.parent === i2.id && (!s2 || !s2.is_multi) || -1 === E.inArray(a2, n2)) || (this._data.core.last_error = { error: "check", plugin: "unique", id: "unique_03", reason: "Child with name " + a2 + " already exists. Preventing: " + e3, data: JSON.stringify({ chk: e3, pos: r2, obj: !(!t2 || !t2.id && 0 !== t2.id) && t2.id, par: !(!i2 || !i2.id && 0 !== i2.id) && i2.id }) }), l2;
        }
        return true;
      }, this.create_node = function(e3, t2, i2, r2, s2) {
        if (!t2 || "object" == typeof t2 && t2.text === P) {
          if (null === e3 && (e3 = E.jstree.root), !(e3 = this.get_node(e3))) return f2.create_node.call(this, e3, t2, i2, r2, s2);
          if (!(i2 = i2 === P ? "last" : i2).toString().match(/^(before|after)$/) && !s2 && !this.is_loaded(e3)) return f2.create_node.call(this, e3, t2, i2, r2, s2);
          t2 = t2 || {};
          for (var a2, n2, o2, d2, c2, l2 = this._model.data, h2 = this.settings.unique.case_sensitive, _2 = this.settings.unique.trim_whitespace, g2 = this.settings.unique.duplicate, u2, n2 = a2 = this.get_string("New node"), o2 = [], d2 = 0, c2 = e3.children.length; d2 < c2; d2++) u2 = l2[e3.children[d2]].text, h2 || (u2 = u2.toLowerCase()), _2 && (u2 = u2.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")), o2.push(u2);
          d2 = 1, u2 = n2, h2 || (u2 = u2.toLowerCase()), _2 && (u2 = u2.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""));
          while (-1 !== E.inArray(u2, o2)) u2 = n2 = g2.call(this, a2, ++d2).toString(), h2 || (u2 = u2.toLowerCase()), _2 && (u2 = u2.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""));
          t2.text = n2;
        }
        return f2.create_node.call(this, e3, t2, i2, r2, s2);
      };
    };
    var j = b.createElement("DIV");
    if (j.setAttribute("unselectable", "on"), j.setAttribute("role", "presentation"), j.className = "jstree-wholerow", j.innerHTML = "&#160;", E.jstree.plugins.wholerow = function(e2, a2) {
      this.bind = function() {
        a2.bind.call(this), this.element.on("ready.jstree set_state.jstree", function() {
          this.hide_dots();
        }.bind(this)).on("init.jstree loading.jstree ready.jstree", function() {
          this.get_container_ul().addClass("jstree-wholerow-ul");
        }.bind(this)).on("deselect_all.jstree", function(e3, t2) {
          this.element.find(".jstree-wholerow-clicked").removeClass("jstree-wholerow-clicked");
        }.bind(this)).on("changed.jstree", function(e3, t2) {
          this.element.find(".jstree-wholerow-clicked").removeClass("jstree-wholerow-clicked");
          for (var i2 = false, r2, s2, r2 = 0, s2 = t2.selected.length; r2 < s2; r2++) (i2 = this.get_node(t2.selected[r2], true)) && i2.length && i2.children(".jstree-wholerow").addClass("jstree-wholerow-clicked");
        }.bind(this)).on("open_node.jstree", function(e3, t2) {
          this.get_node(t2.node, true).find(".jstree-clicked").parent().children(".jstree-wholerow").addClass("jstree-wholerow-clicked");
        }.bind(this)).on("hover_node.jstree dehover_node.jstree", function(e3, t2) {
          "hover_node" === e3.type && this.is_disabled(t2.node) || this.get_node(t2.node, true).children(".jstree-wholerow")["hover_node" === e3.type ? "addClass" : "removeClass"]("jstree-wholerow-hovered");
        }.bind(this)).on("contextmenu.jstree", ".jstree-wholerow", function(e3) {
          var t2;
          this._data.contextmenu && (e3.preventDefault(), t2 = E.Event("contextmenu", { metaKey: e3.metaKey, ctrlKey: e3.ctrlKey, altKey: e3.altKey, shiftKey: e3.shiftKey, pageX: e3.pageX, pageY: e3.pageY }), E(e3.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(t2));
        }.bind(this)).on("click.jstree", ".jstree-wholerow", function(e3) {
          e3.stopImmediatePropagation();
          var t2 = E.Event("click", { metaKey: e3.metaKey, ctrlKey: e3.ctrlKey, altKey: e3.altKey, shiftKey: e3.shiftKey });
          E(e3.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(t2).trigger("focus");
        }).on("dblclick.jstree", ".jstree-wholerow", function(e3) {
          e3.stopImmediatePropagation();
          var t2 = E.Event("dblclick", { metaKey: e3.metaKey, ctrlKey: e3.ctrlKey, altKey: e3.altKey, shiftKey: e3.shiftKey });
          E(e3.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(t2).trigger("focus");
        }).on("click.jstree", ".jstree-leaf > .jstree-ocl", function(e3) {
          e3.stopImmediatePropagation();
          var t2 = E.Event("click", { metaKey: e3.metaKey, ctrlKey: e3.ctrlKey, altKey: e3.altKey, shiftKey: e3.shiftKey });
          E(e3.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(t2).trigger("focus");
        }.bind(this)).on("mouseover.jstree", ".jstree-wholerow, .jstree-icon", function(e3) {
          return e3.stopImmediatePropagation(), this.is_disabled(e3.currentTarget) || this.hover_node(e3.currentTarget), false;
        }.bind(this)).on("mouseleave.jstree", ".jstree-node", function(e3) {
          this.dehover_node(e3.currentTarget);
        }.bind(this));
      }, this.teardown = function() {
        this.settings.wholerow && this.element.find(".jstree-wholerow").remove(), a2.teardown.call(this);
      }, this.redraw_node = function(e3, t2, i2, r2) {
        var s2;
        return (e3 = a2.redraw_node.apply(this, arguments)) && (s2 = j.cloneNode(true), -1 !== E.inArray(e3.id, this._data.core.selected) && (s2.className += " jstree-wholerow-clicked"), this._data.core.focused && this._data.core.focused === e3.id && (s2.className += " jstree-wholerow-hovered"), e3.insertBefore(s2, e3.childNodes[0])), e3;
      };
    }, window.customElements && Object && Object.create) {
      var e = Object.create(HTMLElement.prototype);
      e.createdCallback = function() {
        var e2 = { core: {}, plugins: [] }, t2;
        for (t2 in E.jstree.plugins) E.jstree.plugins.hasOwnProperty(t2) && this.attributes[t2] && (e2.plugins.push(t2), this.getAttribute(t2) && JSON.parse(this.getAttribute(t2)) && (e2[t2] = JSON.parse(this.getAttribute(t2))));
        for (t2 in E.jstree.defaults.core) E.jstree.defaults.core.hasOwnProperty(t2) && this.attributes[t2] && (e2.core[t2] = JSON.parse(this.getAttribute(t2)) || this.getAttribute(t2));
        E(this).jstree(e2);
      };
      try {
        window.customElements.define("vakata-jstree", function() {
        }, { prototype: e });
      } catch (e2) {
      }
    }
  }
});
//# sourceMappingURL=scripts.js.map
