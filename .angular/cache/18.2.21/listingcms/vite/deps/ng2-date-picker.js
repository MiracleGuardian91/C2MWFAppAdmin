import {
  CdkConnectedOverlay,
  OverlayModule
} from "./chunk-4I7TBRRV.js";
import "./chunk-DJXBA42B.js";
import "./chunk-OBQ4JLXT.js";
import {
  Dir
} from "./chunk-UC23J2IQ.js";
import "./chunk-QHBAYEQZ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  NgModel
} from "./chunk-MV4OK5XK.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase
} from "./chunk-5YOS2YTK.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver$1,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Injectable,
  Input,
  NgModule,
  Optional,
  Output,
  Renderer2,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  forwardRef,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-5VZT7PW4.js";
import "./chunk-VMI3K6GE.js";
import "./chunk-5KXDAEEK.js";
import "./chunk-WD6C567C.js";
import "./chunk-HM5YLMWO.js";
import {
  __commonJS,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-N6ESDQJH.js";

// node_modules/dayjs/dayjs.min.js
var require_dayjs_min = __commonJS({
  "node_modules/dayjs/dayjs.min.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
    }(exports, function() {
      "use strict";
      var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = {
        name: "en",
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        ordinal: function(t2) {
          var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
          return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
        }
      }, m = function(t2, e2, n2) {
        var r2 = String(t2);
        return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
      }, v = {
        s: m,
        z: function(t2) {
          var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
          return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
        },
        m: function t2(e2, n2) {
          if (e2.date() < n2.date()) return -t2(n2, e2);
          var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
          return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
        },
        a: function(t2) {
          return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
        },
        p: function(t2) {
          return {
            M: c,
            y: h,
            w: o,
            d: a,
            D: d,
            h: u,
            m: s,
            s: i,
            ms: r,
            Q: f
          }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
        },
        u: function(t2) {
          return void 0 === t2;
        }
      }, g = "en", D = {};
      D[g] = M;
      var p = "$isDayjsObject", S = function(t2) {
        return t2 instanceof _ || !(!t2 || !t2[p]);
      }, w = function t2(e2, n2, r2) {
        var i2;
        if (!e2) return g;
        if ("string" == typeof e2) {
          var s2 = e2.toLowerCase();
          D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
          var u2 = e2.split("-");
          if (!i2 && u2.length > 1) return t2(u2[0]);
        } else {
          var a2 = e2.name;
          D[a2] = e2, i2 = a2;
        }
        return !r2 && i2 && (g = i2), i2 || !r2 && g;
      }, O = function(t2, e2) {
        if (S(t2)) return t2.clone();
        var n2 = "object" == typeof e2 ? e2 : {};
        return n2.date = t2, n2.args = arguments, new _(n2);
      }, b = v;
      b.l = w, b.i = S, b.w = function(t2, e2) {
        return O(t2, {
          locale: e2.$L,
          utc: e2.$u,
          x: e2.$x,
          $offset: e2.$offset
        });
      };
      var _ = function() {
        function M2(t2) {
          this.$L = w(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p] = true;
        }
        var m2 = M2.prototype;
        return m2.parse = function(t2) {
          this.$d = function(t3) {
            var e2 = t3.date, n2 = t3.utc;
            if (null === e2) return /* @__PURE__ */ new Date(NaN);
            if (b.u(e2)) return /* @__PURE__ */ new Date();
            if (e2 instanceof Date) return new Date(e2);
            if ("string" == typeof e2 && !/Z$/i.test(e2)) {
              var r2 = e2.match($);
              if (r2) {
                var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
              }
            }
            return new Date(e2);
          }(t2), this.init();
        }, m2.init = function() {
          var t2 = this.$d;
          this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
        }, m2.$utils = function() {
          return b;
        }, m2.isValid = function() {
          return !(this.$d.toString() === l);
        }, m2.isSame = function(t2, e2) {
          var n2 = O(t2);
          return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
        }, m2.isAfter = function(t2, e2) {
          return O(t2) < this.startOf(e2);
        }, m2.isBefore = function(t2, e2) {
          return this.endOf(e2) < O(t2);
        }, m2.$g = function(t2, e2, n2) {
          return b.u(t2) ? this[e2] : this.set(n2, t2);
        }, m2.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m2.valueOf = function() {
          return this.$d.getTime();
        }, m2.startOf = function(t2, e2) {
          var n2 = this, r2 = !!b.u(e2) || e2, f2 = b.p(t2), l2 = function(t3, e3) {
            var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
            return r2 ? i2 : i2.endOf(a);
          }, $2 = function(t3, e3) {
            return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
          }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
          switch (f2) {
            case h:
              return r2 ? l2(1, 0) : l2(31, 11);
            case c:
              return r2 ? l2(1, M3) : l2(0, M3 + 1);
            case o:
              var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
              return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
            case a:
            case d:
              return $2(v2 + "Hours", 0);
            case u:
              return $2(v2 + "Minutes", 1);
            case s:
              return $2(v2 + "Seconds", 2);
            case i:
              return $2(v2 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m2.endOf = function(t2) {
          return this.startOf(t2, false);
        }, m2.$set = function(t2, e2) {
          var n2, o2 = b.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
          if (o2 === c || o2 === h) {
            var y2 = this.clone().set(d, 1);
            y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
          } else l2 && this.$d[l2]($2);
          return this.init(), this;
        }, m2.set = function(t2, e2) {
          return this.clone().$set(t2, e2);
        }, m2.get = function(t2) {
          return this[b.p(t2)]();
        }, m2.add = function(r2, f2) {
          var d2, l2 = this;
          r2 = Number(r2);
          var $2 = b.p(f2), y2 = function(t2) {
            var e2 = O(l2);
            return b.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
          };
          if ($2 === c) return this.set(c, this.$M + r2);
          if ($2 === h) return this.set(h, this.$y + r2);
          if ($2 === a) return y2(1);
          if ($2 === o) return y2(7);
          var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
          return b.w(m3, this);
        }, m2.subtract = function(t2, e2) {
          return this.add(-1 * t2, e2);
        }, m2.format = function(t2) {
          var e2 = this, n2 = this.$locale();
          if (!this.isValid()) return n2.invalidDate || l;
          var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h2 = function(t3, n3, i3, s3) {
            return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
          }, d2 = function(t3) {
            return b.s(s2 % 12 || 12, t3, "0");
          }, $2 = f2 || function(t3, e3, n3) {
            var r3 = t3 < 12 ? "AM" : "PM";
            return n3 ? r3.toLowerCase() : r3;
          };
          return r2.replace(y, function(t3, r3) {
            return r3 || function(t4) {
              switch (t4) {
                case "YY":
                  return String(e2.$y).slice(-2);
                case "YYYY":
                  return b.s(e2.$y, 4, "0");
                case "M":
                  return a2 + 1;
                case "MM":
                  return b.s(a2 + 1, 2, "0");
                case "MMM":
                  return h2(n2.monthsShort, a2, c2, 3);
                case "MMMM":
                  return h2(c2, a2);
                case "D":
                  return e2.$D;
                case "DD":
                  return b.s(e2.$D, 2, "0");
                case "d":
                  return String(e2.$W);
                case "dd":
                  return h2(n2.weekdaysMin, e2.$W, o2, 2);
                case "ddd":
                  return h2(n2.weekdaysShort, e2.$W, o2, 3);
                case "dddd":
                  return o2[e2.$W];
                case "H":
                  return String(s2);
                case "HH":
                  return b.s(s2, 2, "0");
                case "h":
                  return d2(1);
                case "hh":
                  return d2(2);
                case "a":
                  return $2(s2, u2, true);
                case "A":
                  return $2(s2, u2, false);
                case "m":
                  return String(u2);
                case "mm":
                  return b.s(u2, 2, "0");
                case "s":
                  return String(e2.$s);
                case "ss":
                  return b.s(e2.$s, 2, "0");
                case "SSS":
                  return b.s(e2.$ms, 3, "0");
                case "Z":
                  return i2;
              }
              return null;
            }(t3) || i2.replace(":", "");
          });
        }, m2.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m2.diff = function(r2, d2, l2) {
          var $2, y2 = this, M3 = b.p(d2), m3 = O(r2), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function() {
            return b.m(y2, m3);
          };
          switch (M3) {
            case h:
              $2 = D2() / 12;
              break;
            case c:
              $2 = D2();
              break;
            case f:
              $2 = D2() / 3;
              break;
            case o:
              $2 = (g2 - v2) / 6048e5;
              break;
            case a:
              $2 = (g2 - v2) / 864e5;
              break;
            case u:
              $2 = g2 / n;
              break;
            case s:
              $2 = g2 / e;
              break;
            case i:
              $2 = g2 / t;
              break;
            default:
              $2 = g2;
          }
          return l2 ? $2 : b.a($2);
        }, m2.daysInMonth = function() {
          return this.endOf(c).$D;
        }, m2.$locale = function() {
          return D[this.$L];
        }, m2.locale = function(t2, e2) {
          if (!t2) return this.$L;
          var n2 = this.clone(), r2 = w(t2, e2, true);
          return r2 && (n2.$L = r2), n2;
        }, m2.clone = function() {
          return b.w(this.$d, this);
        }, m2.toDate = function() {
          return new Date(this.valueOf());
        }, m2.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m2.toISOString = function() {
          return this.$d.toISOString();
        }, m2.toString = function() {
          return this.$d.toUTCString();
        }, M2;
      }(), k = _.prototype;
      return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach(function(t2) {
        k[t2[1]] = function(e2) {
          return this.$g(e2, t2[0], t2[1]);
        };
      }), O.extend = function(t2, e2) {
        return t2.$i || (t2(e2, _, O), t2.$i = true), O;
      }, O.locale = w, O.isDayjs = S, O.unix = function(t2) {
        return O(1e3 * t2);
      }, O.en = D[g], O.Ls = D, O.p = {}, O;
    });
  }
});

// node_modules/dayjs/plugin/isSameOrAfter.js
var require_isSameOrAfter = __commonJS({
  "node_modules/dayjs/plugin/isSameOrAfter.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_isSameOrAfter = t();
    }(exports, function() {
      "use strict";
      return function(e, t) {
        t.prototype.isSameOrAfter = function(e2, t2) {
          return this.isSame(e2, t2) || this.isAfter(e2, t2);
        };
      };
    });
  }
});

// node_modules/dayjs/plugin/isSameOrBefore.js
var require_isSameOrBefore = __commonJS({
  "node_modules/dayjs/plugin/isSameOrBefore.js"(exports, module) {
    !function(e, i) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_isSameOrBefore = i();
    }(exports, function() {
      "use strict";
      return function(e, i) {
        i.prototype.isSameOrBefore = function(e2, i2) {
          return this.isSame(e2, i2) || this.isBefore(e2, i2);
        };
      };
    });
  }
});

// node_modules/dayjs/plugin/isBetween.js
var require_isBetween = __commonJS({
  "node_modules/dayjs/plugin/isBetween.js"(exports, module) {
    !function(e, i) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_isBetween = i();
    }(exports, function() {
      "use strict";
      return function(e, i, t) {
        i.prototype.isBetween = function(e2, i2, s, f) {
          var n = t(e2), o = t(i2), r = "(" === (f = f || "()")[0], u = ")" === f[1];
          return (r ? this.isAfter(n, s) : !this.isBefore(n, s)) && (u ? this.isBefore(o, s) : !this.isAfter(o, s)) || (r ? this.isBefore(n, s) : !this.isAfter(n, s)) && (u ? this.isAfter(o, s) : !this.isBefore(o, s));
        };
      };
    });
  }
});

// node_modules/dayjs/plugin/isoWeek.js
var require_isoWeek = __commonJS({
  "node_modules/dayjs/plugin/isoWeek.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_isoWeek = t();
    }(exports, function() {
      "use strict";
      var e = "day";
      return function(t, i, s) {
        var a = function(t2) {
          return t2.add(4 - t2.isoWeekday(), e);
        }, d = i.prototype;
        d.isoWeekYear = function() {
          return a(this).year();
        }, d.isoWeek = function(t2) {
          if (!this.$utils().u(t2)) return this.add(7 * (t2 - this.isoWeek()), e);
          var i2, d2, n2, o, r = a(this), u = (i2 = this.isoWeekYear(), d2 = this.$u, n2 = (d2 ? s.utc : s)().year(i2).startOf("year"), o = 4 - n2.isoWeekday(), n2.isoWeekday() > 4 && (o += 7), n2.add(o, e));
          return r.diff(u, "week") + 1;
        }, d.isoWeekday = function(e2) {
          return this.$utils().u(e2) ? this.day() || 7 : this.day(this.day() % 7 ? e2 : e2 - 7);
        };
        var n = d.startOf;
        d.startOf = function(e2, t2) {
          var i2 = this.$utils(), s2 = !!i2.u(t2) || t2;
          return "isoweek" === i2.p(e2) ? s2 ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : n.bind(this)(e2, t2);
        };
      };
    });
  }
});

// node_modules/dayjs/plugin/customParseFormat.js
var require_customParseFormat = __commonJS({
  "node_modules/dayjs/plugin/customParseFormat.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_customParseFormat = t();
    }(exports, function() {
      "use strict";
      var e = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
      }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, n = /\d/, r = /\d\d/, i = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, s = {}, a = function(e2) {
        return (e2 = +e2) + (e2 > 68 ? 1900 : 2e3);
      };
      var f = function(e2) {
        return function(t2) {
          this[e2] = +t2;
        };
      }, h = [/[+-]\d\d:?(\d\d)?|Z/, function(e2) {
        (this.zone || (this.zone = {})).offset = function(e3) {
          if (!e3) return 0;
          if ("Z" === e3) return 0;
          var t2 = e3.match(/([+-]|\d\d)/g), n2 = 60 * t2[1] + (+t2[2] || 0);
          return 0 === n2 ? 0 : "+" === t2[0] ? -n2 : n2;
        }(e2);
      }], u = function(e2) {
        var t2 = s[e2];
        return t2 && (t2.indexOf ? t2 : t2.s.concat(t2.f));
      }, d = function(e2, t2) {
        var n2, r2 = s.meridiem;
        if (r2) {
          for (var i2 = 1; i2 <= 24; i2 += 1) if (e2.indexOf(r2(i2, 0, t2)) > -1) {
            n2 = i2 > 12;
            break;
          }
        } else n2 = e2 === (t2 ? "pm" : "PM");
        return n2;
      }, c = {
        A: [o, function(e2) {
          this.afternoon = d(e2, false);
        }],
        a: [o, function(e2) {
          this.afternoon = d(e2, true);
        }],
        Q: [n, function(e2) {
          this.month = 3 * (e2 - 1) + 1;
        }],
        S: [n, function(e2) {
          this.milliseconds = 100 * +e2;
        }],
        SS: [r, function(e2) {
          this.milliseconds = 10 * +e2;
        }],
        SSS: [/\d{3}/, function(e2) {
          this.milliseconds = +e2;
        }],
        s: [i, f("seconds")],
        ss: [i, f("seconds")],
        m: [i, f("minutes")],
        mm: [i, f("minutes")],
        H: [i, f("hours")],
        h: [i, f("hours")],
        HH: [i, f("hours")],
        hh: [i, f("hours")],
        D: [i, f("day")],
        DD: [r, f("day")],
        Do: [o, function(e2) {
          var t2 = s.ordinal, n2 = e2.match(/\d+/);
          if (this.day = n2[0], t2) for (var r2 = 1; r2 <= 31; r2 += 1) t2(r2).replace(/\[|\]/g, "") === e2 && (this.day = r2);
        }],
        w: [i, f("week")],
        ww: [r, f("week")],
        M: [i, f("month")],
        MM: [r, f("month")],
        MMM: [o, function(e2) {
          var t2 = u("months"), n2 = (u("monthsShort") || t2.map(function(e3) {
            return e3.slice(0, 3);
          })).indexOf(e2) + 1;
          if (n2 < 1) throw new Error();
          this.month = n2 % 12 || n2;
        }],
        MMMM: [o, function(e2) {
          var t2 = u("months").indexOf(e2) + 1;
          if (t2 < 1) throw new Error();
          this.month = t2 % 12 || t2;
        }],
        Y: [/[+-]?\d+/, f("year")],
        YY: [r, function(e2) {
          this.year = a(e2);
        }],
        YYYY: [/\d{4}/, f("year")],
        Z: h,
        ZZ: h
      };
      function l(n2) {
        var r2, i2;
        r2 = n2, i2 = s && s.formats;
        for (var o2 = (n2 = r2.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t2, n3, r3) {
          var o3 = r3 && r3.toUpperCase();
          return n3 || i2[r3] || e[r3] || i2[o3].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(e2, t3, n4) {
            return t3 || n4.slice(1);
          });
        })).match(t), a2 = o2.length, f2 = 0; f2 < a2; f2 += 1) {
          var h2 = o2[f2], u2 = c[h2], d2 = u2 && u2[0], l2 = u2 && u2[1];
          o2[f2] = l2 ? {
            regex: d2,
            parser: l2
          } : h2.replace(/^\[|\]$/g, "");
        }
        return function(e2) {
          for (var t2 = {}, n3 = 0, r3 = 0; n3 < a2; n3 += 1) {
            var i3 = o2[n3];
            if ("string" == typeof i3) r3 += i3.length;
            else {
              var s2 = i3.regex, f3 = i3.parser, h3 = e2.slice(r3), u3 = s2.exec(h3)[0];
              f3.call(t2, u3), e2 = e2.replace(u3, "");
            }
          }
          return function(e3) {
            var t3 = e3.afternoon;
            if (void 0 !== t3) {
              var n4 = e3.hours;
              t3 ? n4 < 12 && (e3.hours += 12) : 12 === n4 && (e3.hours = 0), delete e3.afternoon;
            }
          }(t2), t2;
        };
      }
      return function(e2, t2, n2) {
        n2.p.customParseFormat = true, e2 && e2.parseTwoDigitYear && (a = e2.parseTwoDigitYear);
        var r2 = t2.prototype, i2 = r2.parse;
        r2.parse = function(e3) {
          var t3 = e3.date, r3 = e3.utc, o2 = e3.args;
          this.$u = r3;
          var a2 = o2[1];
          if ("string" == typeof a2) {
            var f2 = true === o2[2], h2 = true === o2[3], u2 = f2 || h2, d2 = o2[2];
            h2 && (d2 = o2[2]), s = this.$locale(), !f2 && d2 && (s = n2.Ls[d2]), this.$d = function(e4, t4, n3, r4) {
              try {
                if (["x", "X"].indexOf(t4) > -1) return new Date(("X" === t4 ? 1e3 : 1) * e4);
                var i3 = l(t4)(e4), o3 = i3.year, s2 = i3.month, a3 = i3.day, f3 = i3.hours, h3 = i3.minutes, u3 = i3.seconds, d3 = i3.milliseconds, c3 = i3.zone, m2 = i3.week, M2 = /* @__PURE__ */ new Date(), Y = a3 || (o3 || s2 ? 1 : M2.getDate()), p = o3 || M2.getFullYear(), v = 0;
                o3 && !s2 || (v = s2 > 0 ? s2 - 1 : M2.getMonth());
                var D, w = f3 || 0, g = h3 || 0, y = u3 || 0, L = d3 || 0;
                return c3 ? new Date(Date.UTC(p, v, Y, w, g, y, L + 60 * c3.offset * 1e3)) : n3 ? new Date(Date.UTC(p, v, Y, w, g, y, L)) : (D = new Date(p, v, Y, w, g, y, L), m2 && (D = r4(D).week(m2).toDate()), D);
              } catch (e5) {
                return /* @__PURE__ */ new Date("");
              }
            }(t3, a2, r3, n2), this.init(), d2 && true !== d2 && (this.$L = this.locale(d2).$L), u2 && t3 != this.format(a2) && (this.$d = /* @__PURE__ */ new Date("")), s = {};
          } else if (a2 instanceof Array) for (var c2 = a2.length, m = 1; m <= c2; m += 1) {
            o2[1] = a2[m - 1];
            var M = n2.apply(this, o2);
            if (M.isValid()) {
              this.$d = M.$d, this.$L = M.$L, this.init();
              break;
            }
            m === c2 && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else i2.call(this, e3);
        };
      };
    });
  }
});

// node_modules/ng2-date-picker/fesm2022/ng2-date-picker.mjs
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_isSameOrAfter = __toESM(require_isSameOrAfter(), 1);
var import_isSameOrBefore = __toESM(require_isSameOrBefore(), 1);
var import_isBetween = __toESM(require_isBetween(), 1);
var import_isoWeek = __toESM(require_isoWeek(), 1);
var import_customParseFormat = __toESM(require_customParseFormat(), 1);
function CalendarNavComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12);
    ɵɵlistener("click", function CalendarNavComponent_button_6_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.leftSecondaryNavClicked());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r1.leftSecondaryNavDisabled);
  }
}
function CalendarNavComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 13);
    ɵɵlistener("click", function CalendarNavComponent_button_8_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onGoToCurrent.emit());
    });
    ɵɵelementEnd();
  }
}
function CalendarNavComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 14);
    ɵɵlistener("click", function CalendarNavComponent_button_11_Template_button_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.rightSecondaryNavClicked());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r1.rightSecondaryNavDisabled);
  }
}
function MonthCalendarComponent_div_3_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function MonthCalendarComponent_div_3_button_1_Template_button_click_0_listener() {
      const month_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.monthClicked(month_r2));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const month_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("disabled", month_r2.disabled)("innerText", month_r2.text)("ngClass", ctx_r2.getMonthBtnCssClass(month_r2));
    ɵɵattribute("data-date", month_r2.date.format(ctx_r2.componentConfig.format));
  }
}
function MonthCalendarComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵtemplate(1, MonthCalendarComponent_div_3_button_1_Template, 1, 4, "button", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const monthRow_r4 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("ngForOf", monthRow_r4);
  }
}
var _c0 = (a0) => ({
  "dp-hide-near-month": a0
});
function DayCalendarComponent_div_0_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 8);
  }
  if (rf & 2) {
    const weekday_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("innerText", ctx_r1.getWeekdayName(weekday_r3));
  }
}
function DayCalendarComponent_div_0_div_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 12);
  }
  if (rf & 2) {
    const week_r4 = ɵɵnextContext().$implicit;
    ɵɵproperty("innerText", week_r4[0].date.isoWeek());
  }
}
function DayCalendarComponent_div_0_div_5_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 13);
    ɵɵlistener("click", function DayCalendarComponent_div_0_div_5_button_2_Template_button_click_0_listener() {
      const day_r6 = ɵɵrestoreView(_r5).$implicit;
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.dayClicked(day_r6));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const day_r6 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("disabled", day_r6.disabled)("innerText", ctx_r1.getDayBtnText(day_r6))("ngClass", ctx_r1.getDayBtnCssClass(day_r6));
    ɵɵattribute("data-date", day_r6.date.format(ctx_r1.componentConfig.format));
  }
}
function DayCalendarComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, DayCalendarComponent_div_0_div_5_span_1_Template, 1, 1, "span", 10)(2, DayCalendarComponent_div_0_div_5_button_2_Template, 1, 4, "button", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const week_r4 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.componentConfig.showWeekNumbers);
    ɵɵadvance();
    ɵɵproperty("ngForOf", week_r4);
  }
}
function DayCalendarComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2)(1, "dp-calendar-nav", 3);
    ɵɵlistener("onGoToCurrent", function DayCalendarComponent_div_0_Template_dp_calendar_nav_onGoToCurrent_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.goToCurrent());
    })("onLabelClick", function DayCalendarComponent_div_0_Template_dp_calendar_nav_onLabelClick_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.toggleCalendarMode(ctx_r1.CalendarMode.Month));
    })("onLeftNav", function DayCalendarComponent_div_0_Template_dp_calendar_nav_onLeftNav_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onLeftNavClick());
    })("onRightNav", function DayCalendarComponent_div_0_Template_dp_calendar_nav_onRightNav_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onRightNavClick());
    });
    ɵɵelementEnd();
    ɵɵelementStart(2, "div", 4)(3, "div", 5);
    ɵɵtemplate(4, DayCalendarComponent_div_0_span_4_Template, 1, 1, "span", 6);
    ɵɵelementEnd();
    ɵɵtemplate(5, DayCalendarComponent_div_0_div_5_Template, 3, 2, "div", 7);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("isLabelClickable", ctx_r1.componentConfig.enableMonthSelector)("label", ctx_r1.navLabel)("showGoToCurrent", ctx_r1._shouldShowCurrent)("showLeftNav", ctx_r1.showLeftNav)("showRightNav", ctx_r1.showRightNav)("theme", ctx_r1.theme);
    ɵɵadvance();
    ɵɵproperty("ngClass", ɵɵpureFunction1(9, _c0, !ctx_r1.componentConfig.showNearMonthDays));
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r1.weekdays);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.weeks);
  }
}
function DayCalendarComponent_dp_month_calendar_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "dp-month-calendar", 14);
    ɵɵlistener("onLeftNav", function DayCalendarComponent_dp_month_calendar_1_Template_dp_month_calendar_onLeftNav_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onMonthCalendarLeftClick($event));
    })("onLeftSecondaryNav", function DayCalendarComponent_dp_month_calendar_1_Template_dp_month_calendar_onLeftSecondaryNav_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onMonthCalendarSecondaryLeftClick($event));
    })("onNavHeaderBtnClick", function DayCalendarComponent_dp_month_calendar_1_Template_dp_month_calendar_onNavHeaderBtnClick_0_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.toggleCalendarMode(ctx_r1.CalendarMode.Day));
    })("onRightNav", function DayCalendarComponent_dp_month_calendar_1_Template_dp_month_calendar_onRightNav_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onMonthCalendarRightClick($event));
    })("onRightSecondaryNav", function DayCalendarComponent_dp_month_calendar_1_Template_dp_month_calendar_onRightSecondaryNav_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onMonthCalendarSecondaryRightClick($event));
    })("onSelect", function DayCalendarComponent_dp_month_calendar_1_Template_dp_month_calendar_onSelect_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.monthSelected($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("config", ctx_r1.monthCalendarConfig)("displayDate", ctx_r1._currentDateView)("ngModel", ctx_r1._selected)("theme", ctx_r1.theme);
  }
}
function TimeSelectComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "li", 5);
    ɵɵelementStart(2, "li", 10)(3, "button", 2);
    ɵɵlistener("click", function TimeSelectComponent_ng_container_10_Template_button_click_3_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.increase("second"));
    });
    ɵɵelementEnd();
    ɵɵelement(4, "span", 11);
    ɵɵelementStart(5, "button", 4);
    ɵɵlistener("click", function TimeSelectComponent_ng_container_10_Template_button_click_5_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.decrease("second"));
    });
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("innerText", ctx_r1.componentConfig.timeSeparator);
    ɵɵadvance(2);
    ɵɵproperty("disabled", !ctx_r1.showIncSecond);
    ɵɵadvance();
    ɵɵproperty("innerText", ctx_r1.seconds);
    ɵɵadvance();
    ɵɵproperty("disabled", !ctx_r1.showDecSecond);
  }
}
function TimeSelectComponent_li_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 12)(1, "button", 2);
    ɵɵlistener("click", function TimeSelectComponent_li_11_Template_button_click_1_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.toggleMeridiem());
    });
    ɵɵelementEnd();
    ɵɵelement(2, "span", 13);
    ɵɵelementStart(3, "button", 4);
    ɵɵlistener("click", function TimeSelectComponent_li_11_Template_button_click_3_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.toggleMeridiem());
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("disabled", !ctx_r1.showToggleMeridiem);
    ɵɵadvance();
    ɵɵproperty("innerText", ctx_r1.meridiem);
    ɵɵadvance();
    ɵɵproperty("disabled", !ctx_r1.showToggleMeridiem);
  }
}
var _c1 = ["dayCalendar"];
var _c2 = ["container"];
var _c3 = ["monthCalendar"];
var _c4 = ["daytimeCalendar"];
var _c5 = ["timeSelect"];
var _c6 = ["inputElement"];
var _c7 = (a0) => ({
  "dp-open": a0
});
function DatePickerComponent_ng_template_5_dp_day_calendar_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "dp-day-calendar", 15, 3);
    ɵɵlistener("onGoToCurrent", function DatePickerComponent_ng_template_5_dp_day_calendar_3_Template_dp_day_calendar_onGoToCurrent_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.goToCurrent());
    })("onLeftNav", function DatePickerComponent_ng_template_5_dp_day_calendar_3_Template_dp_day_calendar_onLeftNav_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onLeftNavClick($event));
    })("onRightNav", function DatePickerComponent_ng_template_5_dp_day_calendar_3_Template_dp_day_calendar_onRightNav_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onRightNavClick($event));
    })("onSelect", function DatePickerComponent_ng_template_5_dp_day_calendar_3_Template_dp_day_calendar_onSelect_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.dateSelected($event, "day", ctx_r2.selectEvent.SELECTION, false));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("config", ctx_r2.dayCalendarConfig)("displayDate", ctx_r2.displayDate)("ngModel", ctx_r2._selected)("theme", ctx_r2.theme);
  }
}
function DatePickerComponent_ng_template_5_dp_month_calendar_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "dp-month-calendar", 15, 4);
    ɵɵlistener("onGoToCurrent", function DatePickerComponent_ng_template_5_dp_month_calendar_4_Template_dp_month_calendar_onGoToCurrent_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.goToCurrent());
    })("onLeftNav", function DatePickerComponent_ng_template_5_dp_month_calendar_4_Template_dp_month_calendar_onLeftNav_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onLeftNavClick($event));
    })("onRightNav", function DatePickerComponent_ng_template_5_dp_month_calendar_4_Template_dp_month_calendar_onRightNav_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onRightNavClick($event));
    })("onSelect", function DatePickerComponent_ng_template_5_dp_month_calendar_4_Template_dp_month_calendar_onSelect_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.dateSelected($event, "month", ctx_r2.selectEvent.SELECTION, false));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("config", ctx_r2.dayCalendarConfig)("displayDate", ctx_r2.displayDate)("ngModel", ctx_r2._selected)("theme", ctx_r2.theme);
  }
}
function DatePickerComponent_ng_template_5_dp_time_select_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "dp-time-select", 16, 5);
    ɵɵlistener("onChange", function DatePickerComponent_ng_template_5_dp_time_select_5_Template_dp_time_select_onChange_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.dateSelected($event, "second", ctx_r2.selectEvent.SELECTION, true));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("config", ctx_r2.timeSelectConfig)("ngModel", ctx_r2._selected && ctx_r2._selected[0])("theme", ctx_r2.theme);
  }
}
function DatePickerComponent_ng_template_5_dp_day_time_calendar_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "dp-day-time-calendar", 17, 6);
    ɵɵlistener("onChange", function DatePickerComponent_ng_template_5_dp_day_time_calendar_6_Template_dp_day_time_calendar_onChange_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.dateSelected($event, "second", ctx_r2.selectEvent.SELECTION, true));
    })("onGoToCurrent", function DatePickerComponent_ng_template_5_dp_day_time_calendar_6_Template_dp_day_time_calendar_onGoToCurrent_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.goToCurrent());
    })("onLeftNav", function DatePickerComponent_ng_template_5_dp_day_time_calendar_6_Template_dp_day_time_calendar_onLeftNav_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onLeftNavClick($event));
    })("onRightNav", function DatePickerComponent_ng_template_5_dp_day_time_calendar_6_Template_dp_day_time_calendar_onRightNav_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onRightNavClick($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("config", ctx_r2.dayTimeCalendarConfig)("displayDate", ctx_r2.displayDate)("ngModel", ctx_r2._selected && ctx_r2._selected[0])("theme", ctx_r2.theme);
  }
}
function DatePickerComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", null, 2)(2, "div", 11);
    ɵɵtemplate(3, DatePickerComponent_ng_template_5_dp_day_calendar_3_Template, 2, 4, "dp-day-calendar", 12)(4, DatePickerComponent_ng_template_5_dp_month_calendar_4_Template, 2, 4, "dp-month-calendar", 12)(5, DatePickerComponent_ng_template_5_dp_time_select_5_Template, 2, 3, "dp-time-select", 13)(6, DatePickerComponent_ng_template_5_dp_day_time_calendar_6_Template, 2, 4, "dp-day-time-calendar", 14);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵclassMapInterpolate1("dp-popup ", ctx_r2.theme, "");
    ɵɵproperty("ngSwitch", ctx_r2.mode);
    ɵɵattribute("data-hidden", !ctx_r2.areCalendarsShown);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "day");
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "month");
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "time");
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "daytime");
  }
}
var ECalendarMode;
(function(ECalendarMode2) {
  ECalendarMode2[ECalendarMode2["Day"] = 0] = "Day";
  ECalendarMode2[ECalendarMode2["DayTime"] = 1] = "DayTime";
  ECalendarMode2[ECalendarMode2["Month"] = 2] = "Month";
  ECalendarMode2[ECalendarMode2["Time"] = 3] = "Time";
})(ECalendarMode || (ECalendarMode = {}));
var ECalendarValue;
(function(ECalendarValue2) {
  ECalendarValue2[ECalendarValue2["Dayjs"] = 1] = "Dayjs";
  ECalendarValue2[ECalendarValue2["DayjsArr"] = 2] = "DayjsArr";
  ECalendarValue2[ECalendarValue2["String"] = 3] = "String";
  ECalendarValue2[ECalendarValue2["StringArr"] = 4] = "StringArr";
})(ECalendarValue || (ECalendarValue = {}));
var SelectEvent;
(function(SelectEvent2) {
  SelectEvent2["INPUT"] = "input";
  SelectEvent2["SELECTION"] = "selection";
})(SelectEvent || (SelectEvent = {}));
import_dayjs.default.extend(import_isSameOrAfter.default);
import_dayjs.default.extend(import_isSameOrBefore.default);
import_dayjs.default.extend(import_isBetween.default);
import_dayjs.default.extend(import_isoWeek.default);
import_dayjs.default.extend(import_customParseFormat.default);
var dayjsRef = import_dayjs.default;
var UtilsService = class _UtilsService {
  static debounce(func, wait) {
    let timeout;
    return function() {
      const context = this, args = arguments;
      timeout = clearTimeout(timeout);
      setTimeout(() => {
        func.apply(context, args);
      }, wait);
    };
  }
  createArray(size) {
    return new Array(size).fill(1);
  }
  convertToDayjs(date, format) {
    if (!date) {
      return null;
    } else if (typeof date === "string") {
      return dayjsRef(date, format);
    } else {
      return dayjsRef(date.toDate());
    }
  }
  isDateValid(date, format) {
    if (date === "") {
      return true;
    }
    return dayjsRef(date, format, true).isValid();
  }
  // todo:: add unit test
  getDefaultDisplayDate(current, selected, allowMultiSelect, minDate) {
    if (current) {
      return dayjsRef(current.toDate());
    } else if (minDate && minDate.isAfter(dayjsRef())) {
      return dayjsRef(minDate.toDate());
    } else if (allowMultiSelect) {
      if (selected && selected[selected.length]) {
        return dayjsRef(selected[selected.length].toDate());
      }
    } else if (selected && selected[0]) {
      return dayjsRef(selected[0].toDate());
    }
    return dayjsRef();
  }
  // todo:: add unit test
  getInputType(value, allowMultiSelect) {
    if (Array.isArray(value)) {
      if (!value.length) {
        return ECalendarValue.DayjsArr;
      } else if (typeof value[0] === "string") {
        return ECalendarValue.StringArr;
      } else if (dayjsRef.isDayjs(value[0])) {
        return ECalendarValue.DayjsArr;
      }
    } else {
      if (typeof value === "string") {
        return ECalendarValue.String;
      } else if (dayjsRef.isDayjs(value)) {
        return ECalendarValue.Dayjs;
      }
    }
    return allowMultiSelect ? ECalendarValue.DayjsArr : ECalendarValue.Dayjs;
  }
  // todo:: add unit test
  convertToDayjsArray(value, config) {
    let retVal;
    switch (this.getInputType(value, config.allowMultiSelect)) {
      case ECalendarValue.String:
        retVal = value ? [dayjsRef(value, config.format, true)] : [];
        break;
      case ECalendarValue.StringArr:
        retVal = value.map((v) => v ? dayjsRef(v, config.format, true) : null).filter(Boolean);
        break;
      case ECalendarValue.Dayjs:
        retVal = value ? [dayjsRef(value.toDate())] : [];
        break;
      case ECalendarValue.DayjsArr:
        retVal = (value || []).map((v) => dayjsRef(v.toDate()));
        break;
      default:
        retVal = [];
    }
    return retVal;
  }
  // todo:: add unit test
  convertFromDayjsArray(format, value, convertTo) {
    switch (convertTo) {
      case ECalendarValue.String:
        return value[0] && value[0].format(format);
      case ECalendarValue.StringArr:
        return value.filter(Boolean).map((v) => v.format(format));
      case ECalendarValue.Dayjs:
        return value[0] ? dayjsRef(value[0].toDate()) : value[0];
      case ECalendarValue.DayjsArr:
        return value ? value.map((v) => dayjsRef(v.toDate())) : value;
      default:
        return value;
    }
  }
  convertToString(value, format) {
    let tmpVal;
    if (typeof value === "string") {
      tmpVal = [value];
    } else if (Array.isArray(value)) {
      if (value.length) {
        tmpVal = value.map((v) => {
          return this.convertToDayjs(v, format).format(format);
        });
      } else {
        tmpVal = value;
      }
    } else if (dayjsRef.isDayjs(value)) {
      tmpVal = [value.format(format)];
    } else {
      return "";
    }
    return tmpVal.filter(Boolean).join(" | ");
  }
  // todo:: add unit test
  clearUndefined(obj) {
    if (!obj) {
      return obj;
    }
    Object.keys(obj).forEach((key) => obj[key] === void 0 && delete obj[key]);
    return obj;
  }
  updateSelected(isMultiple, currentlySelected, date, granularity = "day") {
    if (isMultiple) {
      return !date.selected ? currentlySelected.concat([date.date]) : currentlySelected.filter((d) => !d.isSame(date.date, granularity));
    } else {
      return !date.selected ? [date.date] : [];
    }
  }
  closestParent(element, selector) {
    if (!element) {
      return void 0;
    }
    const match = element.querySelector(selector);
    return match || this.closestParent(element.parentElement, selector);
  }
  onlyTime(m) {
    return m && dayjsRef.isDayjs(m) && dayjsRef(m.format("HH:mm:ss"), "HH:mm:ss");
  }
  granularityFromType(calendarType) {
    switch (calendarType) {
      case "time":
        return "second";
      case "daytime":
        return "second";
      default:
        return calendarType;
    }
  }
  createValidator({
    minDate,
    maxDate,
    minTime,
    maxTime
  }, format, calendarType) {
    let isValid;
    let value;
    const validators = [];
    const granularity = this.granularityFromType(calendarType);
    if (minDate) {
      const md = this.convertToDayjs(minDate, format);
      validators.push({
        key: "minDate",
        isValid: () => {
          const _isValid = value.every((val) => val.isSameOrAfter(md, granularity));
          isValid = isValid ? _isValid : false;
          return _isValid;
        }
      });
    }
    if (maxDate) {
      const md = this.convertToDayjs(maxDate, format);
      validators.push({
        key: "maxDate",
        isValid: () => {
          const _isValid = value.every((val) => val.isSameOrBefore(md, granularity));
          isValid = isValid ? _isValid : false;
          return _isValid;
        }
      });
    }
    if (minTime) {
      const md = this.onlyTime(this.convertToDayjs(minTime, format));
      validators.push({
        key: "minTime",
        isValid: () => {
          const _isValid = value.every((val) => this.onlyTime(val).isSameOrAfter(md));
          isValid = isValid ? _isValid : false;
          return _isValid;
        }
      });
    }
    if (maxTime) {
      const md = this.onlyTime(this.convertToDayjs(maxTime, format));
      validators.push({
        key: "maxTime",
        isValid: () => {
          const _isValid = value.every((val) => this.onlyTime(val).isSameOrBefore(md));
          isValid = isValid ? _isValid : false;
          return _isValid;
        }
      });
    }
    return (inputVal) => {
      isValid = true;
      value = this.convertToDayjsArray(inputVal, {
        format,
        allowMultiSelect: true
      }).filter(Boolean);
      if (!value.every((val) => val.isValid())) {
        return {
          format: {
            given: inputVal
          }
        };
      }
      const errors = validators.reduce((map, err) => {
        if (!err.isValid()) {
          map[err.key] = {
            given: value
          };
        }
        return map;
      }, {});
      return !isValid ? errors : null;
    };
  }
  datesStringToStringArray(value) {
    return (value || "").split("|").map((m) => m.trim()).filter(Boolean);
  }
  getValidDayjsArray(value, format) {
    return this.datesStringToStringArray(value).filter((d) => this.isDateValid(d, format)).map((d) => dayjsRef(d, format));
  }
  shouldShowCurrent(showGoToCurrent, mode, min, max) {
    return showGoToCurrent && mode !== "time" && this.isDateInRange(dayjsRef(), min, max);
  }
  isDateInRange(date, from, to) {
    if (!date) {
      return false;
    }
    if (!from && !to) {
      return true;
    }
    if (!from && to) {
      return date.isSameOrBefore(to);
    }
    if (from && !to) {
      return date.isSameOrAfter(from);
    }
    return date.isBetween(from, to, "day", "[]");
  }
  convertPropsToDayjs(obj, format, props) {
    props.forEach((prop) => {
      if (obj.hasOwnProperty(prop)) {
        obj[prop] = this.convertToDayjs(obj[prop], format);
      }
    });
  }
  shouldResetCurrentView(prevConf, currentConf) {
    if (prevConf && currentConf) {
      if (!prevConf.min && currentConf.min) {
        return true;
      } else if (prevConf.min && currentConf.min && !prevConf.min.isSame(currentConf.min, "d")) {
        return true;
      } else if (!prevConf.max && currentConf.max) {
        return true;
      } else if (prevConf.max && currentConf.max && !prevConf.max.isSame(currentConf.max, "d")) {
        return true;
      }
      return false;
    }
    return false;
  }
  getNativeElement(elem) {
    if (!elem) {
      return null;
    } else if (typeof elem === "string") {
      return document.querySelector(elem);
    } else if (elem instanceof ElementRef) {
      return elem.nativeElement;
    } else {
      return elem;
    }
  }
  static {
    this.ɵfac = function UtilsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UtilsService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UtilsService,
      factory: _UtilsService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UtilsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var DayCalendarService = class _DayCalendarService {
  constructor(utilsService) {
    this.utilsService = utilsService;
    this.DEFAULT_CONFIG = {
      showNearMonthDays: true,
      showWeekNumbers: false,
      firstDayOfWeek: "su",
      weekDayFormat: "ddd",
      format: "DD-MM-YYYY",
      allowMultiSelect: false,
      monthFormat: "MMM, YYYY",
      enableMonthSelector: true,
      dayBtnFormat: "DD",
      unSelectOnClick: true
    };
    this.DAYS = ["su", "mo", "tu", "we", "th", "fr", "sa"];
  }
  getConfig(config) {
    const _config = __spreadValues(__spreadValues({}, this.DEFAULT_CONFIG), this.utilsService.clearUndefined(config));
    this.utilsService.convertPropsToDayjs(_config, _config.format, ["min", "max"]);
    return _config;
  }
  generateDaysMap(firstDayOfWeek) {
    const firstDayIndex = this.DAYS.indexOf(firstDayOfWeek);
    const daysArr = this.DAYS.slice(firstDayIndex, 7).concat(this.DAYS.slice(0, firstDayIndex));
    return daysArr.reduce((map, day, index) => {
      map[day] = index;
      return map;
    }, {});
  }
  generateMonthArray(config, month, selected) {
    const parsedMonth = month.isValid() ? dayjsRef(month.toDate()) : dayjsRef();
    let monthArray = [];
    const firstDayOfWeekIndex = this.DAYS.indexOf(config.firstDayOfWeek);
    let firstDayOfBoard = parsedMonth.startOf("month");
    while (firstDayOfBoard.day() !== firstDayOfWeekIndex) {
      firstDayOfBoard = firstDayOfBoard.subtract(1, "day");
    }
    let current = dayjsRef(firstDayOfBoard.toDate());
    const prevMonth = parsedMonth.subtract(1, "month");
    const nextMonth = parsedMonth.add(1, "month");
    const today = dayjsRef();
    const daysOfCalendar = this.utilsService.createArray(42).reduce((array) => {
      array.push({
        date: dayjsRef(current.toDate()),
        selected: !!selected.find((selectedDay) => current.isSame(selectedDay, "day")),
        currentMonth: current.isSame(parsedMonth, "month"),
        prevMonth: current.isSame(prevMonth, "month"),
        nextMonth: current.isSame(nextMonth, "month"),
        currentDay: current.isSame(today, "day"),
        disabled: this.isDateDisabled(current, config)
      });
      current = current.add(1, "day");
      return array;
    }, []);
    daysOfCalendar.forEach((day, index) => {
      const weekIndex = Math.floor(index / 7);
      if (!monthArray[weekIndex]) {
        monthArray.push([]);
      }
      monthArray[weekIndex].push(day);
    });
    if (!config.showNearMonthDays) {
      monthArray = this.removeNearMonthWeeks(parsedMonth, monthArray);
    }
    return monthArray;
  }
  generateWeekdays(firstDayOfWeek) {
    const weekdayNames = {
      su: dayjsRef().day(0),
      mo: dayjsRef().day(1),
      tu: dayjsRef().day(2),
      we: dayjsRef().day(3),
      th: dayjsRef().day(4),
      fr: dayjsRef().day(5),
      sa: dayjsRef().day(6)
    };
    const weekdays = [];
    const daysMap = this.generateDaysMap(firstDayOfWeek);
    for (const dayKey in daysMap) {
      if (daysMap.hasOwnProperty(dayKey)) {
        weekdays[daysMap[dayKey]] = weekdayNames[dayKey];
      }
    }
    return weekdays;
  }
  isDateDisabled(date, config) {
    if (config.isDayDisabledCallback) {
      return config.isDayDisabledCallback(date);
    }
    if (config.min && date.isBefore(config.min, "day")) {
      return true;
    }
    return !!(config.max && date.isAfter(config.max, "day"));
  }
  // todo:: add unit tests
  getHeaderLabel(config, month) {
    if (config.monthFormatter) {
      return config.monthFormatter(month);
    }
    return month.format(config.monthFormat);
  }
  // todo:: add unit tests
  shouldShowLeft(min, currentMonthView) {
    return min ? min.isBefore(currentMonthView, "month") : true;
  }
  // todo:: add unit tests
  shouldShowRight(max, currentMonthView) {
    return max ? max.isAfter(currentMonthView, "month") : true;
  }
  generateDaysIndexMap(firstDayOfWeek) {
    const firstDayIndex = this.DAYS.indexOf(firstDayOfWeek);
    const daysArr = this.DAYS.slice(firstDayIndex, 7).concat(this.DAYS.slice(0, firstDayIndex));
    return daysArr.reduce((map, day, index) => {
      map[index] = day;
      return map;
    }, {});
  }
  getMonthCalendarConfig(componentConfig) {
    return this.utilsService.clearUndefined({
      min: componentConfig.min,
      max: componentConfig.max,
      format: componentConfig.format,
      isNavHeaderBtnClickable: true,
      allowMultiSelect: false,
      yearFormat: componentConfig.yearFormat,
      yearFormatter: componentConfig.yearFormatter,
      monthBtnFormat: componentConfig.monthBtnFormat,
      monthBtnFormatter: componentConfig.monthBtnFormatter,
      monthBtnCssClassCallback: componentConfig.monthBtnCssClassCallback,
      isMonthDisabledCallback: componentConfig.isMonthDisabledCallback,
      multipleYearsNavigateBy: componentConfig.multipleYearsNavigateBy,
      showMultipleYearsNavigation: componentConfig.showMultipleYearsNavigation,
      showGoToCurrent: componentConfig.showGoToCurrent,
      numOfMonthRows: componentConfig.numOfMonthRows
    });
  }
  getDayBtnText(config, day) {
    if (config.dayBtnFormatter) {
      return config.dayBtnFormatter(day);
    }
    return day.format(config.dayBtnFormat);
  }
  getDayBtnCssClass(config, day) {
    if (config.dayBtnCssClassCallback) {
      return config.dayBtnCssClassCallback(day);
    }
    return "";
  }
  removeNearMonthWeeks(currentMonth, monthArray) {
    if (monthArray[monthArray.length - 1].find((day) => day.date.isSame(currentMonth, "month"))) {
      return monthArray;
    } else {
      return monthArray.slice(0, -1);
    }
  }
  static {
    this.ɵfac = function DayCalendarService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DayCalendarService)(ɵɵinject(UtilsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _DayCalendarService,
      factory: _DayCalendarService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DayCalendarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: UtilsService
  }], null);
})();
var FIRST_PM_HOUR = 12;
var TimeSelectService = class _TimeSelectService {
  constructor(utilsService) {
    this.utilsService = utilsService;
    this.DEFAULT_CONFIG = {
      hours12Format: "hh",
      hours24Format: "HH",
      meridiemFormat: "A",
      minutesFormat: "mm",
      minutesInterval: 1,
      secondsFormat: "ss",
      secondsInterval: 1,
      showSeconds: false,
      showTwentyFourHours: false,
      timeSeparator: ":"
    };
  }
  getConfig(config) {
    const timeConfigs = {
      maxTime: this.utilsService.onlyTime(config && config.maxTime),
      minTime: this.utilsService.onlyTime(config && config.minTime)
    };
    return __spreadValues(__spreadValues(__spreadValues({}, this.DEFAULT_CONFIG), this.utilsService.clearUndefined(config)), timeConfigs);
  }
  getTimeFormat(config) {
    return (config.showTwentyFourHours ? config.hours24Format : config.hours12Format) + config.timeSeparator + config.minutesFormat + (config.showSeconds ? config.timeSeparator + config.secondsFormat : "") + (config.showTwentyFourHours ? "" : " " + config.meridiemFormat);
  }
  getHours(config, t) {
    const time = t || dayjsRef();
    return time && time.format(config.showTwentyFourHours ? config.hours24Format : config.hours12Format);
  }
  getMinutes(config, t) {
    const time = t || dayjsRef();
    return time && time.format(config.minutesFormat);
  }
  getSeconds(config, t) {
    const time = t || dayjsRef();
    return time && time.format(config.secondsFormat);
  }
  getMeridiem(config, time) {
    return time && time.format(config.meridiemFormat);
  }
  decrease(config, time, unit) {
    let amount = 1;
    switch (unit) {
      case "minute":
        amount = config.minutesInterval;
        break;
      case "second":
        amount = config.secondsInterval;
        break;
    }
    return time.subtract(amount, unit);
  }
  increase(config, time, unit) {
    let amount = 1;
    switch (unit) {
      case "minute":
        amount = config.minutesInterval;
        break;
      case "second":
        amount = config.secondsInterval;
        break;
    }
    return time.add(amount, unit);
  }
  toggleMeridiem(time) {
    if (time.hour() < FIRST_PM_HOUR) {
      return time.add(12, "hour");
    } else {
      return time.subtract(12, "hour");
    }
  }
  shouldShowDecrease(config, time, unit) {
    if (!config.min && !config.minTime) {
      return true;
    }
    const newTime = this.decrease(config, time, unit);
    return (!config.min || config.min.isSameOrBefore(newTime)) && (!config.minTime || config.minTime.isSameOrBefore(this.utilsService.onlyTime(newTime)));
  }
  shouldShowIncrease(config, time, unit) {
    if (!config.max && !config.maxTime) {
      return true;
    }
    const newTime = this.increase(config, time, unit);
    return (!config.max || config.max.isSameOrAfter(newTime)) && (!config.maxTime || config.maxTime.isSameOrAfter(this.utilsService.onlyTime(newTime)));
  }
  shouldShowToggleMeridiem(config, time) {
    if (!config.min && !config.max && !config.minTime && !config.maxTime) {
      return true;
    }
    const newTime = this.toggleMeridiem(time);
    return (!config.max || config.max.isSameOrAfter(newTime)) && (!config.min || config.min.isSameOrBefore(newTime)) && (!config.maxTime || config.maxTime.isSameOrAfter(this.utilsService.onlyTime(newTime))) && (!config.minTime || config.minTime.isSameOrBefore(this.utilsService.onlyTime(newTime)));
  }
  static {
    this.ɵfac = function TimeSelectService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TimeSelectService)(ɵɵinject(UtilsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TimeSelectService,
      factory: _TimeSelectService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimeSelectService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: UtilsService
  }], null);
})();
var DAY_FORMAT = "YYYYMMDD";
var TIME_FORMAT = "HH:mm:ss";
var COMBINED_FORMAT = DAY_FORMAT + TIME_FORMAT;
var DayTimeCalendarService = class _DayTimeCalendarService {
  constructor(utilsService, dayCalendarService, timeSelectService) {
    this.utilsService = utilsService;
    this.dayCalendarService = dayCalendarService;
    this.timeSelectService = timeSelectService;
    this.DEFAULT_CONFIG = {};
  }
  getConfig(config) {
    const _config = __spreadValues(__spreadValues(__spreadValues({}, this.DEFAULT_CONFIG), this.timeSelectService.getConfig(config)), this.dayCalendarService.getConfig(config));
    this.utilsService.convertPropsToDayjs(_config, _config.format, ["min", "max"]);
    return _config;
  }
  updateDay(current, day, config) {
    const time = current ? current : dayjsRef();
    let updated = dayjsRef(day.format(DAY_FORMAT) + time.format(TIME_FORMAT), COMBINED_FORMAT);
    if (config.min) {
      const min = config.min;
      updated = min.isAfter(updated) ? min : updated;
    }
    if (config.max) {
      const max = config.max;
      updated = max.isBefore(updated) ? max : updated;
    }
    return updated;
  }
  updateTime(current, time) {
    const day = current ? current : dayjsRef();
    return dayjsRef(day.format(DAY_FORMAT) + time.format(TIME_FORMAT), COMBINED_FORMAT);
  }
  static {
    this.ɵfac = function DayTimeCalendarService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DayTimeCalendarService)(ɵɵinject(UtilsService), ɵɵinject(DayCalendarService), ɵɵinject(TimeSelectService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _DayTimeCalendarService,
      factory: _DayTimeCalendarService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DayTimeCalendarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: UtilsService
  }, {
    type: DayCalendarService
  }, {
    type: TimeSelectService
  }], null);
})();
var DatePickerService = class _DatePickerService {
  constructor(utilsService, timeSelectService, daytimeCalendarService) {
    this.utilsService = utilsService;
    this.timeSelectService = timeSelectService;
    this.daytimeCalendarService = daytimeCalendarService;
    this.onPickerClosed = new EventEmitter();
    this.defaultConfig = {
      closeOnSelect: true,
      closeOnSelectDelay: 100,
      closeOnEnter: true,
      format: "DD-MM-YYYY",
      openOnFocus: true,
      openOnClick: true,
      onOpenDelay: 0,
      disableKeypress: false,
      showNearMonthDays: true,
      showWeekNumbers: false,
      enableMonthSelector: true,
      showGoToCurrent: true,
      hideOnOutsideClick: true
    };
  }
  // todo:: add unit tests
  getConfig(config, mode = "daytime") {
    const _config = __spreadValues(__spreadProps(__spreadValues({}, this.defaultConfig), {
      format: _DatePickerService.getDefaultFormatByMode(mode)
    }), this.utilsService.clearUndefined(config));
    this.utilsService.convertPropsToDayjs(_config, _config.format, ["min", "max"]);
    if (config && config.allowMultiSelect && config.closeOnSelect === void 0) {
      _config.closeOnSelect = false;
    }
    return _config;
  }
  getDayConfigService(pickerConfig) {
    return {
      min: pickerConfig.min,
      max: pickerConfig.max,
      isDayDisabledCallback: pickerConfig.isDayDisabledCallback,
      weekDayFormat: pickerConfig.weekDayFormat,
      weekDayFormatter: pickerConfig.weekDayFormatter,
      showNearMonthDays: pickerConfig.showNearMonthDays,
      showWeekNumbers: pickerConfig.showWeekNumbers,
      firstDayOfWeek: pickerConfig.firstDayOfWeek,
      format: pickerConfig.format,
      allowMultiSelect: pickerConfig.allowMultiSelect,
      monthFormat: pickerConfig.monthFormat,
      monthFormatter: pickerConfig.monthFormatter,
      enableMonthSelector: pickerConfig.enableMonthSelector,
      yearFormat: pickerConfig.yearFormat,
      yearFormatter: pickerConfig.yearFormatter,
      dayBtnFormat: pickerConfig.dayBtnFormat,
      dayBtnFormatter: pickerConfig.dayBtnFormatter,
      dayBtnCssClassCallback: pickerConfig.dayBtnCssClassCallback,
      monthBtnFormat: pickerConfig.monthBtnFormat,
      monthBtnFormatter: pickerConfig.monthBtnFormatter,
      monthBtnCssClassCallback: pickerConfig.monthBtnCssClassCallback,
      isMonthDisabledCallback: pickerConfig.isMonthDisabledCallback,
      multipleYearsNavigateBy: pickerConfig.multipleYearsNavigateBy,
      showMultipleYearsNavigation: pickerConfig.showMultipleYearsNavigation,
      returnedValueType: pickerConfig.returnedValueType,
      showGoToCurrent: pickerConfig.showGoToCurrent,
      unSelectOnClick: pickerConfig.unSelectOnClick,
      numOfMonthRows: pickerConfig.numOfMonthRows
    };
  }
  getDayTimeConfig(pickerConfig) {
    return this.daytimeCalendarService.getConfig(pickerConfig);
  }
  getTimeConfig(pickerConfig) {
    return this.timeSelectService.getConfig(pickerConfig);
  }
  pickerClosed() {
    this.onPickerClosed.emit();
  }
  // todo:: add unit tests
  isValidInputDateValue(value, config) {
    value = value ? value : "";
    const datesStrArr = this.utilsService.datesStringToStringArray(value);
    return datesStrArr.every((date) => this.utilsService.isDateValid(date, config.format));
  }
  // todo:: add unit tests
  convertInputValueToDayjsArray(value, config) {
    value = value ? value : "";
    const datesStrArr = this.utilsService.datesStringToStringArray(value);
    return this.utilsService.convertToDayjsArray(datesStrArr, config);
  }
  getOverlayPosition({
    drops,
    opens
  }) {
    if (!drops && !opens) {
      return void 0;
    }
    return [{
      originX: opens ? opens === "left" ? "start" : "end" : "start",
      originY: drops ? drops === "up" ? "top" : "bottom" : "bottom",
      overlayX: opens ? opens === "left" ? "start" : "end" : "start",
      overlayY: drops ? drops === "up" ? "bottom" : "top" : "top"
    }];
  }
  static getDefaultFormatByMode(mode) {
    switch (mode) {
      case "day":
        return "DD-MM-YYYY";
      case "daytime":
        return "DD-MM-YYYY HH:mm:ss";
      case "time":
        return "HH:mm:ss";
      case "month":
        return "MMM, YYYY";
    }
  }
  static {
    this.ɵfac = function DatePickerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DatePickerService)(ɵɵinject(UtilsService), ɵɵinject(TimeSelectService), ɵɵinject(DayTimeCalendarService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _DatePickerService,
      factory: _DatePickerService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePickerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: UtilsService
  }, {
    type: TimeSelectService
  }, {
    type: DayTimeCalendarService
  }], null);
})();
var MonthCalendarService = class _MonthCalendarService {
  constructor(utilsService) {
    this.utilsService = utilsService;
    this.DEFAULT_CONFIG = {
      allowMultiSelect: false,
      yearFormat: "YYYY",
      format: "MM-YYYY",
      isNavHeaderBtnClickable: false,
      monthBtnFormat: "MMM",
      multipleYearsNavigateBy: 10,
      showMultipleYearsNavigation: false,
      unSelectOnClick: true,
      numOfMonthRows: 3
    };
  }
  getConfig(config) {
    const _config = __spreadValues(__spreadValues({}, this.DEFAULT_CONFIG), this.utilsService.clearUndefined(config));
    _MonthCalendarService.validateConfig(_config);
    this.utilsService.convertPropsToDayjs(_config, _config.format, ["min", "max"]);
    return _config;
  }
  generateYear(config, year, selected = null) {
    let index = year.startOf("year");
    return this.utilsService.createArray(config.numOfMonthRows).map(() => {
      return this.utilsService.createArray(12 / config.numOfMonthRows).map(() => {
        const date = dayjsRef(index);
        const month = {
          date,
          selected: !!selected.find((s) => index.isSame(s, "month")),
          currentMonth: index.isSame(dayjsRef(), "month"),
          disabled: this.isMonthDisabled(date, config),
          text: this.getMonthBtnText(config, date)
        };
        index = index.add(1, "month");
        return month;
      });
    });
  }
  isMonthDisabled(date, config) {
    if (config.isMonthDisabledCallback) {
      return config.isMonthDisabledCallback(date);
    }
    if (config.min && date.isBefore(config.min, "month")) {
      return true;
    }
    return !!(config.max && date.isAfter(config.max, "month"));
  }
  shouldShowLeft(min, currentMonthView) {
    return min ? min.isBefore(currentMonthView, "year") : true;
  }
  shouldShowRight(max, currentMonthView) {
    return max ? max.isAfter(currentMonthView, "year") : true;
  }
  getHeaderLabel(config, year) {
    if (config.yearFormatter) {
      return config.yearFormatter(year);
    }
    return year.format(config.yearFormat);
  }
  getMonthBtnText(config, month) {
    if (config.monthBtnFormatter) {
      return config.monthBtnFormatter(month);
    }
    return month.format(config.monthBtnFormat);
  }
  getMonthBtnCssClass(config, month) {
    if (config.monthBtnCssClassCallback) {
      return config.monthBtnCssClassCallback(month);
    }
    return "";
  }
  static validateConfig(config) {
    if (config.numOfMonthRows < 1 || config.numOfMonthRows > 12 || !Number.isInteger(12 / config.numOfMonthRows)) {
      throw new Error("numOfMonthRows has to be between 1 - 12 and divide 12 to integer");
    }
  }
  static {
    this.ɵfac = function MonthCalendarService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MonthCalendarService)(ɵɵinject(UtilsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _MonthCalendarService,
      factory: _MonthCalendarService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MonthCalendarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: UtilsService
  }], null);
})();
var CalendarNavComponent = class _CalendarNavComponent {
  constructor() {
    this.isLabelClickable = false;
    this.showLeftNav = true;
    this.showLeftSecondaryNav = false;
    this.showRightNav = true;
    this.showRightSecondaryNav = false;
    this.leftNavDisabled = false;
    this.leftSecondaryNavDisabled = false;
    this.rightNavDisabled = false;
    this.rightSecondaryNavDisabled = false;
    this.showGoToCurrent = true;
    this.onLeftNav = new EventEmitter();
    this.onLeftSecondaryNav = new EventEmitter();
    this.onRightNav = new EventEmitter();
    this.onRightSecondaryNav = new EventEmitter();
    this.onLabelClick = new EventEmitter();
    this.onGoToCurrent = new EventEmitter();
  }
  leftNavClicked() {
    this.onLeftNav.emit();
  }
  leftSecondaryNavClicked() {
    this.onLeftSecondaryNav.emit();
  }
  rightNavClicked() {
    this.onRightNav.emit();
  }
  rightSecondaryNavClicked() {
    this.onRightSecondaryNav.emit();
  }
  labelClicked() {
    this.onLabelClick.emit();
  }
  static {
    this.ɵfac = function CalendarNavComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CalendarNavComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CalendarNavComponent,
      selectors: [["dp-calendar-nav"]],
      hostVars: 2,
      hostBindings: function CalendarNavComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.theme);
        }
      },
      inputs: {
        label: "label",
        isLabelClickable: "isLabelClickable",
        showLeftNav: "showLeftNav",
        showLeftSecondaryNav: "showLeftSecondaryNav",
        showRightNav: "showRightNav",
        showRightSecondaryNav: "showRightSecondaryNav",
        leftNavDisabled: "leftNavDisabled",
        leftSecondaryNavDisabled: "leftSecondaryNavDisabled",
        rightNavDisabled: "rightNavDisabled",
        rightSecondaryNavDisabled: "rightSecondaryNavDisabled",
        showGoToCurrent: "showGoToCurrent",
        theme: "theme"
      },
      outputs: {
        onLeftNav: "onLeftNav",
        onLeftSecondaryNav: "onLeftSecondaryNav",
        onRightNav: "onRightNav",
        onRightSecondaryNav: "onRightSecondaryNav",
        onLabelClick: "onLabelClick",
        onGoToCurrent: "onGoToCurrent"
      },
      decls: 12,
      vars: 15,
      consts: [["dir", "ltr", 1, "dp-calendar-nav-container"], [1, "dp-nav-header"], [3, "hidden", "innerText"], ["type", "button", 1, "dp-nav-header-btn", 3, "click", "hidden", "innerText"], [1, "dp-nav-btns-container"], [1, "dp-calendar-nav-container-left"], ["class", "dp-calendar-secondary-nav-left", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["type", "button", 1, "dp-calendar-nav-left", 3, "click", "disabled", "hidden"], ["class", "dp-current-location-btn", "type", "button", 3, "click", 4, "ngIf"], [1, "dp-calendar-nav-container-right"], ["type", "button", 1, "dp-calendar-nav-right", 3, "click", "disabled", "hidden"], ["class", "dp-calendar-secondary-nav-right", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["type", "button", 1, "dp-calendar-secondary-nav-left", 3, "click", "disabled"], ["type", "button", 1, "dp-current-location-btn", 3, "click"], ["type", "button", 1, "dp-calendar-secondary-nav-right", 3, "click", "disabled"]],
      template: function CalendarNavComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0)(1, "div", 1);
          ɵɵelement(2, "span", 2);
          ɵɵelementStart(3, "button", 3);
          ɵɵlistener("click", function CalendarNavComponent_Template_button_click_3_listener() {
            return ctx.labelClicked();
          });
          ɵɵelementEnd()();
          ɵɵelementStart(4, "div", 4)(5, "div", 5);
          ɵɵtemplate(6, CalendarNavComponent_button_6_Template, 1, 1, "button", 6);
          ɵɵelementStart(7, "button", 7);
          ɵɵlistener("click", function CalendarNavComponent_Template_button_click_7_listener() {
            return ctx.leftNavClicked();
          });
          ɵɵelementEnd()();
          ɵɵtemplate(8, CalendarNavComponent_button_8_Template, 1, 0, "button", 8);
          ɵɵelementStart(9, "div", 9)(10, "button", 10);
          ɵɵlistener("click", function CalendarNavComponent_Template_button_click_10_listener() {
            return ctx.rightNavClicked();
          });
          ɵɵelementEnd();
          ɵɵtemplate(11, CalendarNavComponent_button_11_Template, 1, 1, "button", 11);
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵproperty("hidden", ctx.isLabelClickable)("innerText", ctx.label);
          ɵɵattribute("data-hidden", ctx.isLabelClickable);
          ɵɵadvance();
          ɵɵproperty("hidden", !ctx.isLabelClickable)("innerText", ctx.label);
          ɵɵattribute("data-hidden", !ctx.isLabelClickable);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.showLeftSecondaryNav);
          ɵɵadvance();
          ɵɵproperty("disabled", ctx.leftNavDisabled)("hidden", !ctx.showLeftNav);
          ɵɵattribute("data-hidden", !ctx.showLeftNav);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.showGoToCurrent);
          ɵɵadvance(2);
          ɵɵproperty("disabled", ctx.rightNavDisabled)("hidden", !ctx.showRightNav);
          ɵɵattribute("data-hidden", !ctx.showRightNav);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.showRightSecondaryNav);
        }
      },
      dependencies: [NgIf, Dir],
      styles: ['dp-calendar-nav .dp-calendar-nav-container{position:relative;box-sizing:border-box;height:25px;border:1px solid #000000;border-bottom:none}dp-calendar-nav .dp-nav-date-btn{box-sizing:border-box;height:25px;border:1px solid #000000;border-bottom:none}dp-calendar-nav .dp-nav-btns-container{position:absolute;top:50%;transform:translateY(-50%);right:5px;display:inline-block}dp-calendar-nav .dp-calendar-nav-container-left,dp-calendar-nav .dp-calendar-nav-container-right{display:inline-block}dp-calendar-nav .dp-calendar-nav-left,dp-calendar-nav .dp-calendar-nav-right,dp-calendar-nav .dp-calendar-secondary-nav-left,dp-calendar-nav .dp-calendar-secondary-nav-right{position:relative;width:16px;cursor:pointer}dp-calendar-nav .dp-calendar-nav-left,dp-calendar-nav .dp-calendar-nav-right{line-height:0}dp-calendar-nav .dp-calendar-nav-left:before,dp-calendar-nav .dp-calendar-nav-right:before{position:relative;content:"";display:inline-block;height:8px;width:8px;vertical-align:baseline;border-style:solid;border-width:2px 2px 0 0;transform:rotate(45deg)}dp-calendar-nav .dp-calendar-secondary-nav-left,dp-calendar-nav .dp-calendar-secondary-nav-right{padding:0}dp-calendar-nav .dp-calendar-secondary-nav-left:before,dp-calendar-nav .dp-calendar-secondary-nav-right:before,dp-calendar-nav .dp-calendar-secondary-nav-left:after,dp-calendar-nav .dp-calendar-secondary-nav-right:after{position:relative;content:"";display:inline-block;height:8px;width:8px;vertical-align:baseline;border-style:solid;border-width:2px 2px 0 0;transform:rotate(45deg)}dp-calendar-nav .dp-calendar-secondary-nav-left:before,dp-calendar-nav .dp-calendar-secondary-nav-right:before{right:-10px}dp-calendar-nav .dp-calendar-secondary-nav-right{left:initial;right:5px}dp-calendar-nav .dp-calendar-nav-left:before{position:relative;content:"";display:inline-block;height:8px;width:8px;vertical-align:baseline;border-style:solid;border-width:2px 2px 0 0;transform:rotate(-135deg)}dp-calendar-nav .dp-calendar-secondary-nav-left:before,dp-calendar-nav .dp-calendar-secondary-nav-left:after{position:relative;content:"";display:inline-block;height:8px;width:8px;vertical-align:baseline;border-style:solid;border-width:2px 2px 0 0;transform:rotate(-135deg)}dp-calendar-nav .dp-calendar-secondary-nav-left:before{right:-10px}dp-calendar-nav .dp-nav-header{position:absolute;top:50%;transform:translateY(-50%);left:5px;display:inline-block;font-size:13px}dp-calendar-nav .dp-nav-header-btn{cursor:pointer}dp-calendar-nav .dp-current-location-btn{position:relative;top:-1px;height:16px;width:16px;vertical-align:middle;background:#0009;border:1px solid rgba(0,0,0,.6);outline:none;border-radius:50%;box-shadow:inset 0 0 0 3px #fff;cursor:pointer}dp-calendar-nav .dp-current-location-btn:hover{background:#000}dp-calendar-nav.dp-material .dp-calendar-nav-container{height:30px;border:1px solid #E0E0E0}dp-calendar-nav.dp-material .dp-calendar-nav-left,dp-calendar-nav.dp-material .dp-calendar-nav-right,dp-calendar-nav.dp-material .dp-calendar-secondary-nav-left,dp-calendar-nav.dp-material .dp-calendar-secondary-nav-right{border:none;background:#fff;outline:none;font-size:16px;padding:0}dp-calendar-nav.dp-material .dp-calendar-secondary-nav-left,dp-calendar-nav.dp-material .dp-calendar-secondary-nav-right{width:20px}dp-calendar-nav.dp-material .dp-nav-header-btn{height:20px;width:80px;border:none;background:#fff;outline:none}dp-calendar-nav.dp-material .dp-nav-header-btn:hover{background:#0000000d}dp-calendar-nav.dp-material .dp-nav-header-btn:active{background:#0000001a}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarNavComponent, [{
    type: Component,
    args: [{
      selector: "dp-calendar-nav",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<div class="dp-calendar-nav-container" dir="ltr">\n  <div class="dp-nav-header">\n    <span [attr.data-hidden]="isLabelClickable"\n          [hidden]="isLabelClickable"\n          [innerText]="label">\n    </span>\n    <button (click)="labelClicked()"\n            [attr.data-hidden]="!isLabelClickable"\n            [hidden]="!isLabelClickable"\n            [innerText]="label"\n            class="dp-nav-header-btn"\n            type="button">\n    </button>\n  </div>\n\n  <div class="dp-nav-btns-container">\n    <div class="dp-calendar-nav-container-left">\n      <button (click)="leftSecondaryNavClicked()"\n              *ngIf="showLeftSecondaryNav"\n              [disabled]="leftSecondaryNavDisabled"\n              class="dp-calendar-secondary-nav-left"\n              type="button">\n      </button>\n      <button (click)="leftNavClicked()"\n              [attr.data-hidden]="!showLeftNav"\n              [disabled]="leftNavDisabled"\n              [hidden]="!showLeftNav"\n              class="dp-calendar-nav-left"\n              type="button">\n      </button>\n    </div>\n    <button (click)="onGoToCurrent.emit()"\n            *ngIf="showGoToCurrent"\n            class="dp-current-location-btn"\n            type="button">\n    </button>\n    <div class="dp-calendar-nav-container-right">\n      <button (click)="rightNavClicked()"\n              [attr.data-hidden]="!showRightNav"\n              [disabled]="rightNavDisabled"\n              [hidden]="!showRightNav"\n              class="dp-calendar-nav-right"\n              type="button">\n      </button>\n      <button (click)="rightSecondaryNavClicked()"\n              *ngIf="showRightSecondaryNav"\n              [disabled]="rightSecondaryNavDisabled"\n              class="dp-calendar-secondary-nav-right"\n              type="button">\n      </button>\n    </div>\n  </div>\n</div>\n',
      styles: ['dp-calendar-nav .dp-calendar-nav-container{position:relative;box-sizing:border-box;height:25px;border:1px solid #000000;border-bottom:none}dp-calendar-nav .dp-nav-date-btn{box-sizing:border-box;height:25px;border:1px solid #000000;border-bottom:none}dp-calendar-nav .dp-nav-btns-container{position:absolute;top:50%;transform:translateY(-50%);right:5px;display:inline-block}dp-calendar-nav .dp-calendar-nav-container-left,dp-calendar-nav .dp-calendar-nav-container-right{display:inline-block}dp-calendar-nav .dp-calendar-nav-left,dp-calendar-nav .dp-calendar-nav-right,dp-calendar-nav .dp-calendar-secondary-nav-left,dp-calendar-nav .dp-calendar-secondary-nav-right{position:relative;width:16px;cursor:pointer}dp-calendar-nav .dp-calendar-nav-left,dp-calendar-nav .dp-calendar-nav-right{line-height:0}dp-calendar-nav .dp-calendar-nav-left:before,dp-calendar-nav .dp-calendar-nav-right:before{position:relative;content:"";display:inline-block;height:8px;width:8px;vertical-align:baseline;border-style:solid;border-width:2px 2px 0 0;transform:rotate(45deg)}dp-calendar-nav .dp-calendar-secondary-nav-left,dp-calendar-nav .dp-calendar-secondary-nav-right{padding:0}dp-calendar-nav .dp-calendar-secondary-nav-left:before,dp-calendar-nav .dp-calendar-secondary-nav-right:before,dp-calendar-nav .dp-calendar-secondary-nav-left:after,dp-calendar-nav .dp-calendar-secondary-nav-right:after{position:relative;content:"";display:inline-block;height:8px;width:8px;vertical-align:baseline;border-style:solid;border-width:2px 2px 0 0;transform:rotate(45deg)}dp-calendar-nav .dp-calendar-secondary-nav-left:before,dp-calendar-nav .dp-calendar-secondary-nav-right:before{right:-10px}dp-calendar-nav .dp-calendar-secondary-nav-right{left:initial;right:5px}dp-calendar-nav .dp-calendar-nav-left:before{position:relative;content:"";display:inline-block;height:8px;width:8px;vertical-align:baseline;border-style:solid;border-width:2px 2px 0 0;transform:rotate(-135deg)}dp-calendar-nav .dp-calendar-secondary-nav-left:before,dp-calendar-nav .dp-calendar-secondary-nav-left:after{position:relative;content:"";display:inline-block;height:8px;width:8px;vertical-align:baseline;border-style:solid;border-width:2px 2px 0 0;transform:rotate(-135deg)}dp-calendar-nav .dp-calendar-secondary-nav-left:before{right:-10px}dp-calendar-nav .dp-nav-header{position:absolute;top:50%;transform:translateY(-50%);left:5px;display:inline-block;font-size:13px}dp-calendar-nav .dp-nav-header-btn{cursor:pointer}dp-calendar-nav .dp-current-location-btn{position:relative;top:-1px;height:16px;width:16px;vertical-align:middle;background:#0009;border:1px solid rgba(0,0,0,.6);outline:none;border-radius:50%;box-shadow:inset 0 0 0 3px #fff;cursor:pointer}dp-calendar-nav .dp-current-location-btn:hover{background:#000}dp-calendar-nav.dp-material .dp-calendar-nav-container{height:30px;border:1px solid #E0E0E0}dp-calendar-nav.dp-material .dp-calendar-nav-left,dp-calendar-nav.dp-material .dp-calendar-nav-right,dp-calendar-nav.dp-material .dp-calendar-secondary-nav-left,dp-calendar-nav.dp-material .dp-calendar-secondary-nav-right{border:none;background:#fff;outline:none;font-size:16px;padding:0}dp-calendar-nav.dp-material .dp-calendar-secondary-nav-left,dp-calendar-nav.dp-material .dp-calendar-secondary-nav-right{width:20px}dp-calendar-nav.dp-material .dp-nav-header-btn{height:20px;width:80px;border:none;background:#fff;outline:none}dp-calendar-nav.dp-material .dp-nav-header-btn:hover{background:#0000000d}dp-calendar-nav.dp-material .dp-nav-header-btn:active{background:#0000001a}\n']
    }]
  }], null, {
    label: [{
      type: Input
    }],
    isLabelClickable: [{
      type: Input
    }],
    showLeftNav: [{
      type: Input
    }],
    showLeftSecondaryNav: [{
      type: Input
    }],
    showRightNav: [{
      type: Input
    }],
    showRightSecondaryNav: [{
      type: Input
    }],
    leftNavDisabled: [{
      type: Input
    }],
    leftSecondaryNavDisabled: [{
      type: Input
    }],
    rightNavDisabled: [{
      type: Input
    }],
    rightSecondaryNavDisabled: [{
      type: Input
    }],
    showGoToCurrent: [{
      type: Input
    }],
    theme: [{
      type: HostBinding,
      args: ["class"]
    }, {
      type: Input
    }],
    onLeftNav: [{
      type: Output
    }],
    onLeftSecondaryNav: [{
      type: Output
    }],
    onRightNav: [{
      type: Output
    }],
    onRightSecondaryNav: [{
      type: Output
    }],
    onLabelClick: [{
      type: Output
    }],
    onGoToCurrent: [{
      type: Output
    }]
  });
})();
var MonthCalendarComponent = class _MonthCalendarComponent {
  constructor(monthCalendarService, utilsService, cd) {
    this.monthCalendarService = monthCalendarService;
    this.utilsService = utilsService;
    this.cd = cd;
    this.onSelect = new EventEmitter();
    this.onNavHeaderBtnClick = new EventEmitter();
    this.onGoToCurrent = new EventEmitter();
    this.onLeftNav = new EventEmitter();
    this.onRightNav = new EventEmitter();
    this.onLeftSecondaryNav = new EventEmitter();
    this.onRightSecondaryNav = new EventEmitter();
    this.isInited = false;
    this._shouldShowCurrent = true;
    this.api = {
      toggleCalendar: this.toggleCalendarMode.bind(this),
      moveCalendarTo: this.moveCalendarTo.bind(this)
    };
  }
  get selected() {
    return this._selected;
  }
  set selected(selected) {
    this._selected = selected;
    this.onChangeCallback(this.processOnChangeCallback(selected));
  }
  get currentDateView() {
    return this._currentDateView;
  }
  set currentDateView(current) {
    this._currentDateView = dayjsRef(current.toDate());
    this.yearMonths = this.monthCalendarService.generateYear(this.componentConfig, this._currentDateView, this.selected);
    this.navLabel = this.monthCalendarService.getHeaderLabel(this.componentConfig, this.currentDateView);
    this.showLeftNav = this.monthCalendarService.shouldShowLeft(this.componentConfig.min, this._currentDateView);
    this.showRightNav = this.monthCalendarService.shouldShowRight(this.componentConfig.max, this.currentDateView);
    this.showSecondaryLeftNav = this.componentConfig.showMultipleYearsNavigation && this.showLeftNav;
    this.showSecondaryRightNav = this.componentConfig.showMultipleYearsNavigation && this.showRightNav;
  }
  ngOnInit() {
    this.isInited = true;
    this.init();
    this.initValidators();
  }
  ngOnChanges(changes) {
    if (this.isInited) {
      const {
        minDate,
        maxDate,
        config
      } = changes;
      this.handleConfigChange(config);
      this.init();
      if (minDate || maxDate) {
        this.initValidators();
      }
      this.cd.markForCheck();
    }
  }
  init() {
    this.componentConfig = this.monthCalendarService.getConfig(this.config);
    this.selected = this.selected || [];
    this.currentDateView = this.displayDate ?? this.utilsService.getDefaultDisplayDate(this.currentDateView, this.selected, this.componentConfig.allowMultiSelect, this.componentConfig.min);
    this.inputValueType = this.utilsService.getInputType(this.inputValue, this.componentConfig.allowMultiSelect);
    this._shouldShowCurrent = this.shouldShowCurrent();
  }
  writeValue(value) {
    this.inputValue = value;
    if (value) {
      this.selected = this.utilsService.convertToDayjsArray(value, this.componentConfig);
      this.yearMonths = this.monthCalendarService.generateYear(this.componentConfig, this.currentDateView, this.selected);
      this.inputValueType = this.utilsService.getInputType(this.inputValue, this.componentConfig.allowMultiSelect);
    } else {
      this.selected = [];
      this.yearMonths = this.monthCalendarService.generateYear(this.componentConfig, this.currentDateView, this.selected);
    }
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onChangeCallback = fn;
  }
  onChangeCallback(_) {
  }
  registerOnTouched(fn) {
  }
  validate(formControl) {
    if (this.minDate || this.maxDate) {
      return this.validateFn(formControl.value);
    } else {
      return () => null;
    }
  }
  processOnChangeCallback(value) {
    return this.utilsService.convertFromDayjsArray(this.componentConfig.format, value, this.componentConfig.returnedValueType || this.inputValueType);
  }
  initValidators() {
    this.validateFn = this.validateFn = this.utilsService.createValidator({
      minDate: this.minDate,
      maxDate: this.maxDate
    }, this.componentConfig.format, "month");
    this.onChangeCallback(this.processOnChangeCallback(this.selected));
  }
  monthClicked(month) {
    if (month.selected && !this.componentConfig.unSelectOnClick) {
      return;
    }
    this.selected = this.utilsService.updateSelected(this.componentConfig.allowMultiSelect, this.selected, month, "month");
    this.yearMonths = this.monthCalendarService.generateYear(this.componentConfig, this.currentDateView, this.selected);
    this.onSelect.emit(month);
  }
  onLeftNavClick() {
    const from = dayjsRef(this.currentDateView.toDate());
    this.currentDateView = this.currentDateView.subtract(1, "year");
    const to = dayjsRef(this.currentDateView.toDate());
    this.yearMonths = this.monthCalendarService.generateYear(this.componentConfig, this.currentDateView, this.selected);
    this.onLeftNav.emit({
      from,
      to
    });
  }
  onLeftSecondaryNavClick() {
    let navigateBy = this.componentConfig.multipleYearsNavigateBy;
    const isOutsideRange = this.componentConfig.min && this.currentDateView.year() - this.componentConfig.min.year() < navigateBy;
    if (isOutsideRange) {
      navigateBy = this.currentDateView.year() - this.componentConfig.min.year();
    }
    const from = dayjsRef(this.currentDateView.toDate());
    this.currentDateView = this.currentDateView.subtract(navigateBy, "year");
    const to = dayjsRef(this.currentDateView.toDate());
    this.onLeftSecondaryNav.emit({
      from,
      to
    });
  }
  onRightNavClick() {
    const from = dayjsRef(this.currentDateView.toDate());
    this.currentDateView = this.currentDateView.add(1, "year");
    const to = dayjsRef(this.currentDateView.toDate());
    this.onRightNav.emit({
      from,
      to
    });
  }
  onRightSecondaryNavClick() {
    let navigateBy = this.componentConfig.multipleYearsNavigateBy;
    const isOutsideRange = this.componentConfig.max && this.componentConfig.max.year() - this.currentDateView.year() < navigateBy;
    if (isOutsideRange) {
      navigateBy = this.componentConfig.max.year() - this.currentDateView.year();
    }
    const from = dayjsRef(this.currentDateView.toDate());
    this.currentDateView = this.currentDateView.add(navigateBy, "year");
    const to = dayjsRef(this.currentDateView.toDate());
    this.onRightSecondaryNav.emit({
      from,
      to
    });
  }
  toggleCalendarMode() {
    this.onNavHeaderBtnClick.emit();
  }
  getMonthBtnCssClass(month) {
    const cssClass = {
      "dp-selected": month.selected,
      "dp-current-month": month.currentMonth
    };
    const customCssClass = this.monthCalendarService.getMonthBtnCssClass(this.componentConfig, month.date);
    if (customCssClass) {
      cssClass[customCssClass] = true;
    }
    return cssClass;
  }
  shouldShowCurrent() {
    return this.utilsService.shouldShowCurrent(this.componentConfig.showGoToCurrent, "month", this.componentConfig.min, this.componentConfig.max);
  }
  goToCurrent() {
    this.currentDateView = dayjsRef();
    this.onGoToCurrent.emit();
  }
  moveCalendarTo(to) {
    if (to) {
      this.currentDateView = this.utilsService.convertToDayjs(to, this.componentConfig.format);
      this.cd.markForCheck();
    }
  }
  handleConfigChange(config) {
    if (config) {
      const prevConf = this.monthCalendarService.getConfig(config.previousValue);
      const currentConf = this.monthCalendarService.getConfig(config.currentValue);
      if (this.utilsService.shouldResetCurrentView(prevConf, currentConf)) {
        this._currentDateView = null;
      }
    }
  }
  static {
    this.ɵfac = function MonthCalendarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MonthCalendarComponent)(ɵɵdirectiveInject(MonthCalendarService), ɵɵdirectiveInject(UtilsService), ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _MonthCalendarComponent,
      selectors: [["dp-month-calendar"]],
      hostVars: 2,
      hostBindings: function MonthCalendarComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.theme);
        }
      },
      inputs: {
        config: "config",
        displayDate: "displayDate",
        minDate: "minDate",
        maxDate: "maxDate",
        theme: "theme"
      },
      outputs: {
        onSelect: "onSelect",
        onNavHeaderBtnClick: "onNavHeaderBtnClick",
        onGoToCurrent: "onGoToCurrent",
        onLeftNav: "onLeftNav",
        onRightNav: "onRightNav",
        onLeftSecondaryNav: "onLeftSecondaryNav",
        onRightSecondaryNav: "onRightSecondaryNav"
      },
      features: [ɵɵProvidersFeature([MonthCalendarService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _MonthCalendarComponent),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => _MonthCalendarComponent),
        multi: true
      }]), ɵɵNgOnChangesFeature],
      decls: 4,
      vars: 9,
      consts: [["dir", "ltr", 1, "dp-month-calendar-container"], [3, "onGoToCurrent", "onLabelClick", "onLeftNav", "onLeftSecondaryNav", "onRightNav", "onRightSecondaryNav", "isLabelClickable", "label", "showGoToCurrent", "showLeftNav", "showLeftSecondaryNav", "showRightNav", "showRightSecondaryNav", "theme"], [1, "dp-calendar-wrapper"], ["class", "dp-months-row", 4, "ngFor", "ngForOf"], [1, "dp-months-row"], ["class", "dp-calendar-month", "type", "button", 3, "disabled", "innerText", "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "dp-calendar-month", 3, "click", "disabled", "innerText", "ngClass"]],
      template: function MonthCalendarComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0)(1, "dp-calendar-nav", 1);
          ɵɵlistener("onGoToCurrent", function MonthCalendarComponent_Template_dp_calendar_nav_onGoToCurrent_1_listener() {
            return ctx.goToCurrent();
          })("onLabelClick", function MonthCalendarComponent_Template_dp_calendar_nav_onLabelClick_1_listener() {
            return ctx.toggleCalendarMode();
          })("onLeftNav", function MonthCalendarComponent_Template_dp_calendar_nav_onLeftNav_1_listener() {
            return ctx.onLeftNavClick();
          })("onLeftSecondaryNav", function MonthCalendarComponent_Template_dp_calendar_nav_onLeftSecondaryNav_1_listener() {
            return ctx.onLeftSecondaryNavClick();
          })("onRightNav", function MonthCalendarComponent_Template_dp_calendar_nav_onRightNav_1_listener() {
            return ctx.onRightNavClick();
          })("onRightSecondaryNav", function MonthCalendarComponent_Template_dp_calendar_nav_onRightSecondaryNav_1_listener() {
            return ctx.onRightSecondaryNavClick();
          });
          ɵɵelementEnd();
          ɵɵelementStart(2, "div", 2);
          ɵɵtemplate(3, MonthCalendarComponent_div_3_Template, 2, 1, "div", 3);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("isLabelClickable", ctx.componentConfig.isNavHeaderBtnClickable)("label", ctx.navLabel)("showGoToCurrent", ctx.shouldShowCurrent())("showLeftNav", ctx.showLeftNav)("showLeftSecondaryNav", ctx.showSecondaryLeftNav)("showRightNav", ctx.showRightNav)("showRightSecondaryNav", ctx.showSecondaryRightNav)("theme", ctx.theme);
          ɵɵadvance(2);
          ɵɵproperty("ngForOf", ctx.yearMonths);
        }
      },
      dependencies: [NgClass, NgForOf, Dir, CalendarNavComponent],
      styles: ["dp-month-calendar{display:inline-block}dp-month-calendar .dp-month-calendar-container{background:#fff}dp-month-calendar .dp-calendar-wrapper{border:1px solid #000000}dp-month-calendar .dp-calendar-month{box-sizing:border-box;width:52.5px;height:52.5px;cursor:pointer}dp-month-calendar .dp-calendar-month.dp-selected{background:#106cc8;color:#fff}dp-month-calendar.dp-material .dp-calendar-weekday{height:25px;width:30px;line-height:25px;background:#e0e0e0;border:1px solid #E0E0E0}dp-month-calendar.dp-material .dp-calendar-wrapper{border:1px solid #E0E0E0}dp-month-calendar.dp-material .dp-calendar-month{box-sizing:border-box;background:#fff;border-radius:50%;border:none;outline:none}dp-month-calendar.dp-material .dp-calendar-month:hover{background:#e0e0e0}dp-month-calendar.dp-material .dp-selected{background:#106cc8;color:#fff}dp-month-calendar.dp-material .dp-selected:hover{background:#106cc8}dp-month-calendar.dp-material .dp-current-month{border:1px solid #106CC8}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MonthCalendarComponent, [{
    type: Component,
    args: [{
      selector: "dp-month-calendar",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [MonthCalendarService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MonthCalendarComponent),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => MonthCalendarComponent),
        multi: true
      }],
      template: '<div class="dp-month-calendar-container" dir="ltr">\n  <dp-calendar-nav\n      (onGoToCurrent)="goToCurrent()"\n      (onLabelClick)="toggleCalendarMode()"\n      (onLeftNav)="onLeftNavClick()"\n      (onLeftSecondaryNav)="onLeftSecondaryNavClick()"\n      (onRightNav)="onRightNavClick()"\n      (onRightSecondaryNav)="onRightSecondaryNavClick()"\n      [isLabelClickable]="componentConfig.isNavHeaderBtnClickable"\n      [label]="navLabel"\n      [showGoToCurrent]="shouldShowCurrent()"\n      [showLeftNav]="showLeftNav"\n      [showLeftSecondaryNav]="showSecondaryLeftNav"\n      [showRightNav]="showRightNav"\n      [showRightSecondaryNav]="showSecondaryRightNav"\n      [theme]="theme">\n  </dp-calendar-nav>\n\n  <div class="dp-calendar-wrapper">\n    <div *ngFor="let monthRow of yearMonths" class="dp-months-row">\n      <button (click)="monthClicked(month)"\n              *ngFor="let month of monthRow"\n              [attr.data-date]="month.date.format(componentConfig.format)"\n              [disabled]="month.disabled"\n              [innerText]="month.text"\n              [ngClass]="getMonthBtnCssClass(month)"\n              class="dp-calendar-month"\n              type="button">\n      </button>\n    </div>\n  </div>\n</div>\n',
      styles: ["dp-month-calendar{display:inline-block}dp-month-calendar .dp-month-calendar-container{background:#fff}dp-month-calendar .dp-calendar-wrapper{border:1px solid #000000}dp-month-calendar .dp-calendar-month{box-sizing:border-box;width:52.5px;height:52.5px;cursor:pointer}dp-month-calendar .dp-calendar-month.dp-selected{background:#106cc8;color:#fff}dp-month-calendar.dp-material .dp-calendar-weekday{height:25px;width:30px;line-height:25px;background:#e0e0e0;border:1px solid #E0E0E0}dp-month-calendar.dp-material .dp-calendar-wrapper{border:1px solid #E0E0E0}dp-month-calendar.dp-material .dp-calendar-month{box-sizing:border-box;background:#fff;border-radius:50%;border:none;outline:none}dp-month-calendar.dp-material .dp-calendar-month:hover{background:#e0e0e0}dp-month-calendar.dp-material .dp-selected{background:#106cc8;color:#fff}dp-month-calendar.dp-material .dp-selected:hover{background:#106cc8}dp-month-calendar.dp-material .dp-current-month{border:1px solid #106CC8}\n"]
    }]
  }], () => [{
    type: MonthCalendarService
  }, {
    type: UtilsService
  }, {
    type: ChangeDetectorRef
  }], {
    config: [{
      type: Input
    }],
    displayDate: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    theme: [{
      type: HostBinding,
      args: ["class"]
    }, {
      type: Input
    }],
    onSelect: [{
      type: Output
    }],
    onNavHeaderBtnClick: [{
      type: Output
    }],
    onGoToCurrent: [{
      type: Output
    }],
    onLeftNav: [{
      type: Output
    }],
    onRightNav: [{
      type: Output
    }],
    onLeftSecondaryNav: [{
      type: Output
    }],
    onRightSecondaryNav: [{
      type: Output
    }]
  });
})();
var DayCalendarComponent = class _DayCalendarComponent {
  constructor(dayCalendarService, utilsService, cd) {
    this.dayCalendarService = dayCalendarService;
    this.utilsService = utilsService;
    this.cd = cd;
    this.onSelect = new EventEmitter();
    this.onMonthSelect = new EventEmitter();
    this.onNavHeaderBtnClick = new EventEmitter();
    this.onGoToCurrent = new EventEmitter();
    this.onLeftNav = new EventEmitter();
    this.onRightNav = new EventEmitter();
    this.CalendarMode = ECalendarMode;
    this.isInited = false;
    this.currentCalendarMode = ECalendarMode.Day;
    this._shouldShowCurrent = true;
    this.api = {
      moveCalendarsBy: this.moveCalendarsBy.bind(this),
      moveCalendarTo: this.moveCalendarTo.bind(this),
      toggleCalendarMode: this.toggleCalendarMode.bind(this)
    };
  }
  get selected() {
    return this._selected;
  }
  set selected(selected) {
    this._selected = selected;
    this.onChangeCallback(this.processOnChangeCallback(selected));
  }
  get currentDateView() {
    return this._currentDateView;
  }
  set currentDateView(current) {
    this._currentDateView = dayjsRef(current.toDate());
    this.weeks = this.dayCalendarService.generateMonthArray(this.componentConfig, this._currentDateView, this.selected);
    this.navLabel = this.dayCalendarService.getHeaderLabel(this.componentConfig, this._currentDateView);
    this.showLeftNav = this.dayCalendarService.shouldShowLeft(this.componentConfig.min, this.currentDateView);
    this.showRightNav = this.dayCalendarService.shouldShowRight(this.componentConfig.max, this.currentDateView);
  }
  ngOnInit() {
    this.isInited = true;
    this.init();
    this.initValidators();
  }
  init() {
    this.componentConfig = this.dayCalendarService.getConfig(this.config);
    this.selected = this.selected || [];
    this.currentDateView = this.displayDate ? this.utilsService.convertToDayjs(this.displayDate, this.componentConfig.format) : this.utilsService.getDefaultDisplayDate(this.currentDateView, this.selected, this.componentConfig.allowMultiSelect, this.componentConfig.min);
    this.weekdays = this.dayCalendarService.generateWeekdays(this.componentConfig.firstDayOfWeek);
    this.inputValueType = this.utilsService.getInputType(this.inputValue, this.componentConfig.allowMultiSelect);
    this.monthCalendarConfig = this.dayCalendarService.getMonthCalendarConfig(this.componentConfig);
    this._shouldShowCurrent = this.shouldShowCurrent();
  }
  ngOnChanges(changes) {
    if (this.isInited) {
      const {
        minDate,
        maxDate,
        config
      } = changes;
      this.handleConfigChange(config);
      this.init();
      if (minDate || maxDate) {
        this.initValidators();
      }
    }
  }
  writeValue(value) {
    this.inputValue = value;
    if (value) {
      this.selected = this.utilsService.convertToDayjsArray(value, this.componentConfig);
      this.inputValueType = this.utilsService.getInputType(this.inputValue, this.componentConfig.allowMultiSelect);
    } else {
      this.selected = [];
    }
    this.weeks = this.dayCalendarService.generateMonthArray(this.componentConfig, this.currentDateView, this.selected);
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onChangeCallback = fn;
  }
  onChangeCallback(_) {
  }
  registerOnTouched(fn) {
  }
  validate(formControl) {
    if (this.minDate || this.maxDate) {
      return this.validateFn(formControl.value);
    } else {
      return () => null;
    }
  }
  processOnChangeCallback(value) {
    return this.utilsService.convertFromDayjsArray(this.componentConfig.format, value, this.componentConfig.returnedValueType || this.inputValueType);
  }
  initValidators() {
    this.validateFn = this.utilsService.createValidator({
      minDate: this.minDate,
      maxDate: this.maxDate
    }, this.componentConfig.format, "day");
    this.onChangeCallback(this.processOnChangeCallback(this.selected));
  }
  dayClicked(day) {
    if (day.selected && !this.componentConfig.unSelectOnClick) {
      return;
    }
    this.selected = this.utilsService.updateSelected(this.componentConfig.allowMultiSelect, this.selected, day);
    this.weeks = this.dayCalendarService.generateMonthArray(this.componentConfig, this.currentDateView, this.selected);
    this.onSelect.emit(day);
  }
  getDayBtnText(day) {
    return this.dayCalendarService.getDayBtnText(this.componentConfig, day.date);
  }
  getDayBtnCssClass(day) {
    const cssClasses = {
      "dp-selected": day.selected,
      "dp-current-month": day.currentMonth,
      "dp-prev-month": day.prevMonth,
      "dp-next-month": day.nextMonth,
      "dp-current-day": day.currentDay
    };
    const customCssClass = this.dayCalendarService.getDayBtnCssClass(this.componentConfig, day.date);
    if (customCssClass) {
      cssClasses[customCssClass] = true;
    }
    return cssClasses;
  }
  onLeftNavClick() {
    const from = dayjsRef(this.currentDateView.toDate());
    this.moveCalendarsBy(this.currentDateView, -1, "month");
    const to = dayjsRef(this.currentDateView.toDate());
    this.onLeftNav.emit({
      from,
      to
    });
  }
  onRightNavClick() {
    const from = dayjsRef(this.currentDateView.toDate());
    this.moveCalendarsBy(this.currentDateView, 1, "month");
    const to = dayjsRef(this.currentDateView.toDate());
    this.onRightNav.emit({
      from,
      to
    });
  }
  onMonthCalendarLeftClick(change) {
    this.onLeftNav.emit(change);
  }
  onMonthCalendarRightClick(change) {
    this.onRightNav.emit(change);
  }
  onMonthCalendarSecondaryLeftClick(change) {
    this.onRightNav.emit(change);
  }
  onMonthCalendarSecondaryRightClick(change) {
    this.onLeftNav.emit(change);
  }
  getWeekdayName(weekday) {
    if (this.componentConfig.weekDayFormatter) {
      return this.componentConfig.weekDayFormatter(weekday.day());
    }
    return weekday.format(this.componentConfig.weekDayFormat);
  }
  toggleCalendarMode(mode) {
    if (this.currentCalendarMode !== mode) {
      this.currentCalendarMode = mode;
      this.onNavHeaderBtnClick.emit(mode);
    }
    this.cd.markForCheck();
  }
  monthSelected(month) {
    this.currentDateView = dayjsRef(month.date.toDate());
    this.currentCalendarMode = ECalendarMode.Day;
    this.onMonthSelect.emit(month);
  }
  moveCalendarsBy(current, amount, granularity = "month") {
    this.currentDateView = dayjsRef(current.toDate()).add(amount, granularity);
    this.cd.markForCheck();
  }
  moveCalendarTo(to) {
    if (to) {
      this.currentDateView = this.utilsService.convertToDayjs(to, this.componentConfig.format);
    }
    this.cd.markForCheck();
  }
  shouldShowCurrent() {
    return this.utilsService.shouldShowCurrent(this.componentConfig.showGoToCurrent, "day", this.componentConfig.min, this.componentConfig.max);
  }
  goToCurrent() {
    this.currentDateView = dayjsRef();
    this.onGoToCurrent.emit();
  }
  handleConfigChange(config) {
    if (config) {
      const prevConf = this.dayCalendarService.getConfig(config.previousValue);
      const currentConf = this.dayCalendarService.getConfig(config.currentValue);
      if (this.utilsService.shouldResetCurrentView(prevConf, currentConf)) {
        this._currentDateView = null;
      }
    }
  }
  static {
    this.ɵfac = function DayCalendarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DayCalendarComponent)(ɵɵdirectiveInject(DayCalendarService), ɵɵdirectiveInject(UtilsService), ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DayCalendarComponent,
      selectors: [["dp-day-calendar"]],
      hostVars: 2,
      hostBindings: function DayCalendarComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.theme);
        }
      },
      inputs: {
        config: "config",
        displayDate: "displayDate",
        minDate: "minDate",
        maxDate: "maxDate",
        theme: "theme"
      },
      outputs: {
        onSelect: "onSelect",
        onMonthSelect: "onMonthSelect",
        onNavHeaderBtnClick: "onNavHeaderBtnClick",
        onGoToCurrent: "onGoToCurrent",
        onLeftNav: "onLeftNav",
        onRightNav: "onRightNav"
      },
      features: [ɵɵProvidersFeature([DayCalendarService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _DayCalendarComponent),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => _DayCalendarComponent),
        multi: true
      }]), ɵɵNgOnChangesFeature],
      decls: 2,
      vars: 2,
      consts: [["class", "dp-day-calendar-container", "dir", "ltr", 4, "ngIf"], [3, "config", "displayDate", "ngModel", "theme", "onLeftNav", "onLeftSecondaryNav", "onNavHeaderBtnClick", "onRightNav", "onRightSecondaryNav", "onSelect", 4, "ngIf"], ["dir", "ltr", 1, "dp-day-calendar-container"], [3, "onGoToCurrent", "onLabelClick", "onLeftNav", "onRightNav", "isLabelClickable", "label", "showGoToCurrent", "showLeftNav", "showRightNav", "theme"], [1, "dp-calendar-wrapper", 3, "ngClass"], [1, "dp-weekdays"], ["class", "dp-calendar-weekday", 3, "innerText", 4, "ngFor", "ngForOf"], ["class", "dp-calendar-week", 4, "ngFor", "ngForOf"], [1, "dp-calendar-weekday", 3, "innerText"], [1, "dp-calendar-week"], ["class", "dp-week-number", 3, "innerText", 4, "ngIf"], ["class", "dp-calendar-day", "type", "button", 3, "disabled", "innerText", "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "dp-week-number", 3, "innerText"], ["type", "button", 1, "dp-calendar-day", 3, "click", "disabled", "innerText", "ngClass"], [3, "onLeftNav", "onLeftSecondaryNav", "onNavHeaderBtnClick", "onRightNav", "onRightSecondaryNav", "onSelect", "config", "displayDate", "ngModel", "theme"]],
      template: function DayCalendarComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, DayCalendarComponent_div_0_Template, 6, 11, "div", 0)(1, DayCalendarComponent_dp_month_calendar_1_Template, 1, 4, "dp-month-calendar", 1);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.currentCalendarMode === ctx.CalendarMode.Day);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.currentCalendarMode === ctx.CalendarMode.Month);
        }
      },
      dependencies: [NgClass, NgForOf, NgIf, NgControlStatus, NgModel, Dir, MonthCalendarComponent, CalendarNavComponent],
      styles: ["dp-day-calendar{display:inline-block}dp-day-calendar .dp-day-calendar-container{background:#fff}dp-day-calendar .dp-calendar-wrapper{box-sizing:border-box;border:1px solid #000000}dp-day-calendar .dp-calendar-wrapper .dp-calendar-weekday:first-child{border-left:none}dp-day-calendar .dp-weekdays{font-size:15px;margin-bottom:5px}dp-day-calendar .dp-calendar-weekday{box-sizing:border-box;display:inline-block;width:30px;text-align:center;border-left:1px solid #000000;border-bottom:1px solid #000000}dp-day-calendar .dp-calendar-day{box-sizing:border-box;width:30px;height:30px;cursor:pointer}dp-day-calendar .dp-selected{background:#106cc8;color:#fff}dp-day-calendar .dp-prev-month,dp-day-calendar .dp-next-month{opacity:.5}dp-day-calendar .dp-hide-near-month .dp-prev-month,dp-day-calendar .dp-hide-near-month .dp-next-month{visibility:hidden}dp-day-calendar .dp-week-number{position:absolute;font-size:9px}dp-day-calendar.dp-material .dp-calendar-weekday{height:25px;width:30px;line-height:25px;color:#7a7a7a;border:none}dp-day-calendar.dp-material .dp-calendar-wrapper{border:1px solid #E0E0E0}dp-day-calendar.dp-material .dp-calendar-month,dp-day-calendar.dp-material .dp-calendar-day{box-sizing:border-box;background:#fff;border-radius:50%;border:none;outline:none}dp-day-calendar.dp-material .dp-calendar-month:hover,dp-day-calendar.dp-material .dp-calendar-day:hover{background:#e0e0e0}dp-day-calendar.dp-material .dp-selected{background:#106cc8;color:#fff}dp-day-calendar.dp-material .dp-selected:hover{background:#106cc8}dp-day-calendar.dp-material .dp-current-day{border:1px solid #106CC8}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DayCalendarComponent, [{
    type: Component,
    args: [{
      selector: "dp-day-calendar",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [DayCalendarService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DayCalendarComponent),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => DayCalendarComponent),
        multi: true
      }],
      template: `<div *ngIf="currentCalendarMode ===  CalendarMode.Day" class="dp-day-calendar-container" dir="ltr">
  <dp-calendar-nav
      (onGoToCurrent)="goToCurrent()"
      (onLabelClick)="toggleCalendarMode(CalendarMode.Month)"
      (onLeftNav)="onLeftNavClick()"
      (onRightNav)="onRightNavClick()"
      [isLabelClickable]="componentConfig.enableMonthSelector"
      [label]="navLabel"
      [showGoToCurrent]="_shouldShowCurrent"
      [showLeftNav]="showLeftNav"
      [showRightNav]="showRightNav"
      [theme]="theme">
  </dp-calendar-nav>

  <div [ngClass]="{'dp-hide-near-month': !componentConfig.showNearMonthDays}"
       class="dp-calendar-wrapper">
    <div class="dp-weekdays">
      <span *ngFor="let weekday of weekdays"
            [innerText]="getWeekdayName(weekday)"
            class="dp-calendar-weekday">
      </span>
    </div>
    <div *ngFor="let week of weeks" class="dp-calendar-week">
      <span *ngIf="componentConfig.showWeekNumbers"
            [innerText]="week[0].date.isoWeek()"
            class="dp-week-number">
      </span>
      <button (click)="dayClicked(day)"
              *ngFor="let day of week"
              [attr.data-date]="day.date.format(componentConfig.format)"
              [disabled]="day.disabled"
              [innerText]="getDayBtnText(day)"
              [ngClass]="getDayBtnCssClass(day)"
              class="dp-calendar-day"
              type="button">
      </button>
    </div>
  </div>
</div>

<dp-month-calendar
    (onLeftNav)="onMonthCalendarLeftClick($event)"
    (onLeftSecondaryNav)="onMonthCalendarSecondaryLeftClick($event)"
    (onNavHeaderBtnClick)="toggleCalendarMode(CalendarMode.Day)"
    (onRightNav)="onMonthCalendarRightClick($event)"
    (onRightSecondaryNav)="onMonthCalendarSecondaryRightClick($event)"
    (onSelect)="monthSelected($event)"
    *ngIf="currentCalendarMode ===  CalendarMode.Month"
    [config]="monthCalendarConfig"
    [displayDate]="_currentDateView"
    [ngModel]="_selected"
    [theme]="theme">
</dp-month-calendar>
`,
      styles: ["dp-day-calendar{display:inline-block}dp-day-calendar .dp-day-calendar-container{background:#fff}dp-day-calendar .dp-calendar-wrapper{box-sizing:border-box;border:1px solid #000000}dp-day-calendar .dp-calendar-wrapper .dp-calendar-weekday:first-child{border-left:none}dp-day-calendar .dp-weekdays{font-size:15px;margin-bottom:5px}dp-day-calendar .dp-calendar-weekday{box-sizing:border-box;display:inline-block;width:30px;text-align:center;border-left:1px solid #000000;border-bottom:1px solid #000000}dp-day-calendar .dp-calendar-day{box-sizing:border-box;width:30px;height:30px;cursor:pointer}dp-day-calendar .dp-selected{background:#106cc8;color:#fff}dp-day-calendar .dp-prev-month,dp-day-calendar .dp-next-month{opacity:.5}dp-day-calendar .dp-hide-near-month .dp-prev-month,dp-day-calendar .dp-hide-near-month .dp-next-month{visibility:hidden}dp-day-calendar .dp-week-number{position:absolute;font-size:9px}dp-day-calendar.dp-material .dp-calendar-weekday{height:25px;width:30px;line-height:25px;color:#7a7a7a;border:none}dp-day-calendar.dp-material .dp-calendar-wrapper{border:1px solid #E0E0E0}dp-day-calendar.dp-material .dp-calendar-month,dp-day-calendar.dp-material .dp-calendar-day{box-sizing:border-box;background:#fff;border-radius:50%;border:none;outline:none}dp-day-calendar.dp-material .dp-calendar-month:hover,dp-day-calendar.dp-material .dp-calendar-day:hover{background:#e0e0e0}dp-day-calendar.dp-material .dp-selected{background:#106cc8;color:#fff}dp-day-calendar.dp-material .dp-selected:hover{background:#106cc8}dp-day-calendar.dp-material .dp-current-day{border:1px solid #106CC8}\n"]
    }]
  }], () => [{
    type: DayCalendarService
  }, {
    type: UtilsService
  }, {
    type: ChangeDetectorRef
  }], {
    config: [{
      type: Input
    }],
    displayDate: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    theme: [{
      type: HostBinding,
      args: ["class"]
    }, {
      type: Input
    }],
    onSelect: [{
      type: Output
    }],
    onMonthSelect: [{
      type: Output
    }],
    onNavHeaderBtnClick: [{
      type: Output
    }],
    onGoToCurrent: [{
      type: Output
    }],
    onLeftNav: [{
      type: Output
    }],
    onRightNav: [{
      type: Output
    }]
  });
})();
var TimeSelectComponent = class _TimeSelectComponent {
  constructor(timeSelectService, utilsService, cd) {
    this.timeSelectService = timeSelectService;
    this.utilsService = utilsService;
    this.cd = cd;
    this.onChange = new EventEmitter();
    this.isInited = false;
    this.api = {
      triggerChange: this.emitChange.bind(this)
    };
  }
  get selected() {
    return this._selected;
  }
  set selected(selected) {
    this._selected = selected;
    this.calculateTimeParts(this.selected);
    this.showDecHour = this.timeSelectService.shouldShowDecrease(this.componentConfig, this._selected, "hour");
    this.showDecMinute = this.timeSelectService.shouldShowDecrease(this.componentConfig, this._selected, "minute");
    this.showDecSecond = this.timeSelectService.shouldShowDecrease(this.componentConfig, this._selected, "second");
    this.showIncHour = this.timeSelectService.shouldShowIncrease(this.componentConfig, this._selected, "hour");
    this.showIncMinute = this.timeSelectService.shouldShowIncrease(this.componentConfig, this._selected, "minute");
    this.showIncSecond = this.timeSelectService.shouldShowIncrease(this.componentConfig, this._selected, "second");
    this.showToggleMeridiem = this.timeSelectService.shouldShowToggleMeridiem(this.componentConfig, this._selected);
    this.onChangeCallback(this.processOnChangeCallback(selected));
  }
  ngOnInit() {
    this.isInited = true;
    this.init();
    this.initValidators();
  }
  init() {
    this.componentConfig = this.timeSelectService.getConfig(this.config);
    this.selected = this.selected || dayjsRef();
    this.inputValueType = this.utilsService.getInputType(this.inputValue, false);
  }
  ngOnChanges(changes) {
    if (this.isInited) {
      const {
        minDate,
        maxDate,
        minTime,
        maxTime
      } = changes;
      if (minDate || maxDate || minTime || maxTime) {
        this.initValidators();
      }
      this.init();
    }
  }
  writeValue(value) {
    this.inputValue = value;
    if (value) {
      const dayjsValue = this.utilsService.convertToDayjsArray(value, {
        allowMultiSelect: false,
        format: this.timeSelectService.getTimeFormat(this.componentConfig)
      })[0];
      if (dayjsValue.isValid()) {
        this.selected = dayjsValue;
        this.inputValueType = this.utilsService.getInputType(this.inputValue, false);
      }
    }
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onChangeCallback = fn;
  }
  onChangeCallback(_) {
  }
  registerOnTouched(fn) {
  }
  validate(formControl) {
    if (this.minDate || this.maxDate || this.minTime || this.maxTime) {
      return this.validateFn(formControl.value);
    } else {
      return () => null;
    }
  }
  processOnChangeCallback(value) {
    return this.utilsService.convertFromDayjsArray(this.timeSelectService.getTimeFormat(this.componentConfig), [value], this.componentConfig.returnedValueType || this.inputValueType);
  }
  initValidators() {
    this.validateFn = this.utilsService.createValidator({
      minDate: this.minDate,
      maxDate: this.maxDate,
      minTime: this.minTime,
      maxTime: this.maxTime
    }, void 0, "day");
    this.onChangeCallback(this.processOnChangeCallback(this.selected));
  }
  decrease(unit) {
    this.selected = this.timeSelectService.decrease(this.componentConfig, this.selected, unit);
    this.emitChange();
  }
  increase(unit) {
    this.selected = this.timeSelectService.increase(this.componentConfig, this.selected, unit);
    this.emitChange();
  }
  toggleMeridiem() {
    this.selected = this.timeSelectService.toggleMeridiem(this.selected);
    this.emitChange();
  }
  emitChange() {
    this.onChange.emit({
      date: this.selected,
      selected: false
    });
    this.cd.markForCheck();
  }
  calculateTimeParts(time) {
    this.hours = this.timeSelectService.getHours(this.componentConfig, time);
    this.minutes = this.timeSelectService.getMinutes(this.componentConfig, time);
    this.seconds = this.timeSelectService.getSeconds(this.componentConfig, time);
    this.meridiem = this.timeSelectService.getMeridiem(this.componentConfig, time);
  }
  handleConfigChange(config) {
    if (config) {
      const prevConf = this.timeSelectService.getConfig(config.previousValue);
      const currentConf = this.timeSelectService.getConfig(config.currentValue);
    }
  }
  static {
    this.ɵfac = function TimeSelectComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TimeSelectComponent)(ɵɵdirectiveInject(TimeSelectService), ɵɵdirectiveInject(UtilsService), ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TimeSelectComponent,
      selectors: [["dp-time-select"]],
      hostVars: 2,
      hostBindings: function TimeSelectComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.theme);
        }
      },
      inputs: {
        config: "config",
        displayDate: "displayDate",
        minDate: "minDate",
        maxDate: "maxDate",
        minTime: "minTime",
        maxTime: "maxTime",
        theme: "theme"
      },
      outputs: {
        onChange: "onChange"
      },
      features: [ɵɵProvidersFeature([TimeSelectService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _TimeSelectComponent),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => _TimeSelectComponent),
        multi: true
      }]), ɵɵNgOnChangesFeature],
      decls: 12,
      vars: 9,
      consts: [["dir", "ltr", 1, "dp-time-select-controls"], [1, "dp-time-select-control", "dp-time-select-control-hours"], ["type", "button", 1, "dp-time-select-control-up", 3, "click", "disabled"], [1, "dp-time-select-display-hours", 3, "innerText"], ["type", "button", 1, "dp-time-select-control-down", 3, "click", "disabled"], [1, "dp-time-select-control", "dp-time-select-separator", 3, "innerText"], [1, "dp-time-select-control", "dp-time-select-control-minutes"], [1, "dp-time-select-display-minutes", 3, "innerText"], [4, "ngIf"], ["class", "dp-time-select-control dp-time-select-control-meridiem", 4, "ngIf"], [1, "dp-time-select-control", "dp-time-select-control-seconds"], [1, "dp-time-select-display-seconds", 3, "innerText"], [1, "dp-time-select-control", "dp-time-select-control-meridiem"], [1, "dp-time-select-display-meridiem", 3, "innerText"]],
      template: function TimeSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "ul", 0)(1, "li", 1)(2, "button", 2);
          ɵɵlistener("click", function TimeSelectComponent_Template_button_click_2_listener() {
            return ctx.increase("hour");
          });
          ɵɵelementEnd();
          ɵɵelement(3, "span", 3);
          ɵɵelementStart(4, "button", 4);
          ɵɵlistener("click", function TimeSelectComponent_Template_button_click_4_listener() {
            return ctx.decrease("hour");
          });
          ɵɵelementEnd()();
          ɵɵelement(5, "li", 5);
          ɵɵelementStart(6, "li", 6)(7, "button", 2);
          ɵɵlistener("click", function TimeSelectComponent_Template_button_click_7_listener() {
            return ctx.increase("minute");
          });
          ɵɵelementEnd();
          ɵɵelement(8, "span", 7);
          ɵɵelementStart(9, "button", 4);
          ɵɵlistener("click", function TimeSelectComponent_Template_button_click_9_listener() {
            return ctx.decrease("minute");
          });
          ɵɵelementEnd()();
          ɵɵtemplate(10, TimeSelectComponent_ng_container_10_Template, 6, 4, "ng-container", 8)(11, TimeSelectComponent_li_11_Template, 4, 3, "li", 9);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵproperty("disabled", !ctx.showIncHour);
          ɵɵadvance();
          ɵɵproperty("innerText", ctx.hours);
          ɵɵadvance();
          ɵɵproperty("disabled", !ctx.showDecHour);
          ɵɵadvance();
          ɵɵproperty("innerText", ctx.componentConfig.timeSeparator);
          ɵɵadvance(2);
          ɵɵproperty("disabled", !ctx.showIncMinute);
          ɵɵadvance();
          ɵɵproperty("innerText", ctx.minutes);
          ɵɵadvance();
          ɵɵproperty("disabled", !ctx.showDecMinute);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.componentConfig.showSeconds);
          ɵɵadvance();
          ɵɵproperty("ngIf", !ctx.componentConfig.showTwentyFourHours);
        }
      },
      dependencies: [NgIf, Dir],
      styles: ['dp-time-select{display:inline-block}dp-time-select .dp-time-select-controls{margin:0;padding:0;text-align:center;line-height:normal;background:#fff}dp-time-select .dp-time-select-control{display:inline-block;width:35px;margin:0 auto;vertical-align:middle;font-size:inherit;letter-spacing:1px}dp-time-select .dp-time-select-control-up,dp-time-select .dp-time-select-control-down{position:relative;display:block;width:24px;height:24px;margin:3px auto;cursor:pointer}dp-time-select .dp-time-select-control-up:before,dp-time-select .dp-time-select-control-down:before{position:relative;content:"";display:inline-block;height:8px;width:8px;vertical-align:baseline;border-style:solid;border-width:2px 2px 0 0;transform:rotate(0)}dp-time-select .dp-time-select-control-up:before{transform:rotate(-45deg);top:4px}dp-time-select .dp-time-select-control-down:before{transform:rotate(135deg)}dp-time-select .dp-time-select-separator{width:5px}dp-time-select.dp-material .dp-time-select-control-up,dp-time-select.dp-material .dp-time-select-control-down{box-sizing:border-box;background:transparent;border:none;outline:none;border-radius:50%}dp-time-select.dp-material .dp-time-select-control-up:before,dp-time-select.dp-material .dp-time-select-control-down:before{left:0}dp-time-select.dp-material .dp-time-select-control-up:hover,dp-time-select.dp-material .dp-time-select-control-down:hover{background:#e0e0e0}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimeSelectComponent, [{
    type: Component,
    args: [{
      selector: "dp-time-select",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [TimeSelectService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => TimeSelectComponent),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => TimeSelectComponent),
        multi: true
      }],
      template: `<ul class="dp-time-select-controls" dir="ltr">
  <li class="dp-time-select-control dp-time-select-control-hours">
    <button (click)="increase('hour')"
            [disabled]="!showIncHour"
            class="dp-time-select-control-up"
            type="button">
    </button>
    <span [innerText]="hours"
          class="dp-time-select-display-hours">
    </span>
    <button (click)="decrease('hour')"
            [disabled]="!showDecHour"
            class="dp-time-select-control-down"
            type="button">
    </button>
  </li>
  <li [innerText]="componentConfig.timeSeparator"
      class="dp-time-select-control dp-time-select-separator">
  </li>
  <li class="dp-time-select-control dp-time-select-control-minutes">
    <button (click)="increase('minute')"
            [disabled]="!showIncMinute"
            class="dp-time-select-control-up"
            type="button"></button>
    <span [innerText]="minutes"
          class="dp-time-select-display-minutes">
    </span>
    <button (click)="decrease('minute')"
            [disabled]="!showDecMinute" class="dp-time-select-control-down"
            type="button">
    </button>
  </li>
  <ng-container *ngIf="componentConfig.showSeconds">
    <li [innerText]="componentConfig.timeSeparator"
        class="dp-time-select-control dp-time-select-separator">
    </li>
    <li class="dp-time-select-control dp-time-select-control-seconds">
      <button (click)="increase('second')"
              [disabled]="!showIncSecond"
              class="dp-time-select-control-up"
              type="button"></button>
      <span [innerText]="seconds"
            class="dp-time-select-display-seconds">
      </span>
      <button (click)="decrease('second')"
              [disabled]="!showDecSecond"
              class="dp-time-select-control-down"
              type="button">
      </button>
    </li>
  </ng-container>
  <li *ngIf="!componentConfig.showTwentyFourHours" class="dp-time-select-control dp-time-select-control-meridiem">
    <button (click)="toggleMeridiem()"
            [disabled]="!showToggleMeridiem"
            class="dp-time-select-control-up"
            type="button">
    </button>
    <span [innerText]="meridiem"
          class="dp-time-select-display-meridiem">
    </span>
    <button (click)="toggleMeridiem()"
            [disabled]="!showToggleMeridiem"
            class="dp-time-select-control-down"
            type="button">
    </button>
  </li>
</ul>
`,
      styles: ['dp-time-select{display:inline-block}dp-time-select .dp-time-select-controls{margin:0;padding:0;text-align:center;line-height:normal;background:#fff}dp-time-select .dp-time-select-control{display:inline-block;width:35px;margin:0 auto;vertical-align:middle;font-size:inherit;letter-spacing:1px}dp-time-select .dp-time-select-control-up,dp-time-select .dp-time-select-control-down{position:relative;display:block;width:24px;height:24px;margin:3px auto;cursor:pointer}dp-time-select .dp-time-select-control-up:before,dp-time-select .dp-time-select-control-down:before{position:relative;content:"";display:inline-block;height:8px;width:8px;vertical-align:baseline;border-style:solid;border-width:2px 2px 0 0;transform:rotate(0)}dp-time-select .dp-time-select-control-up:before{transform:rotate(-45deg);top:4px}dp-time-select .dp-time-select-control-down:before{transform:rotate(135deg)}dp-time-select .dp-time-select-separator{width:5px}dp-time-select.dp-material .dp-time-select-control-up,dp-time-select.dp-material .dp-time-select-control-down{box-sizing:border-box;background:transparent;border:none;outline:none;border-radius:50%}dp-time-select.dp-material .dp-time-select-control-up:before,dp-time-select.dp-material .dp-time-select-control-down:before{left:0}dp-time-select.dp-material .dp-time-select-control-up:hover,dp-time-select.dp-material .dp-time-select-control-down:hover{background:#e0e0e0}\n']
    }]
  }], () => [{
    type: TimeSelectService
  }, {
    type: UtilsService
  }, {
    type: ChangeDetectorRef
  }], {
    config: [{
      type: Input
    }],
    displayDate: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    minTime: [{
      type: Input
    }],
    maxTime: [{
      type: Input
    }],
    theme: [{
      type: HostBinding,
      args: ["class"]
    }, {
      type: Input
    }],
    onChange: [{
      type: Output
    }]
  });
})();
var DayTimeCalendarComponent = class _DayTimeCalendarComponent {
  constructor(dayTimeCalendarService, utilsService, cd) {
    this.dayTimeCalendarService = dayTimeCalendarService;
    this.utilsService = utilsService;
    this.cd = cd;
    this.onChange = new EventEmitter();
    this.onGoToCurrent = new EventEmitter();
    this.onLeftNav = new EventEmitter();
    this.onRightNav = new EventEmitter();
    this.isInited = false;
    this.api = {
      moveCalendarTo: this.moveCalendarTo.bind(this)
    };
  }
  get selected() {
    return this._selected;
  }
  set selected(selected) {
    this._selected = selected;
    this.onChangeCallback(this.processOnChangeCallback(selected));
  }
  ngOnInit() {
    this.isInited = true;
    this.init();
    this.initValidators();
  }
  init() {
    this.componentConfig = this.dayTimeCalendarService.getConfig(this.config);
    this.inputValueType = this.utilsService.getInputType(this.inputValue, false);
  }
  ngOnChanges(changes) {
    if (this.isInited) {
      const {
        minDate,
        maxDate
      } = changes;
      this.init();
      if (minDate || maxDate) {
        this.initValidators();
      }
    }
  }
  writeValue(value) {
    this.inputValue = value;
    if (value) {
      this.selected = this.utilsService.convertToDayjsArray(value, {
        format: this.componentConfig.format,
        allowMultiSelect: false
      })[0];
      this.inputValueType = this.utilsService.getInputType(this.inputValue, false);
    } else {
      this.selected = null;
    }
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onChangeCallback = fn;
  }
  onChangeCallback(_) {
  }
  registerOnTouched(fn) {
  }
  validate(formControl) {
    if (this.minDate || this.maxDate) {
      return this.validateFn(formControl.value);
    } else {
      return () => null;
    }
  }
  processOnChangeCallback(value) {
    return this.utilsService.convertFromDayjsArray(this.componentConfig.format, [value], this.componentConfig.returnedValueType || this.inputValueType);
  }
  initValidators() {
    this.validateFn = this.utilsService.createValidator({
      minDate: this.minDate,
      maxDate: this.maxDate
    }, void 0, "daytime");
    this.onChangeCallback(this.processOnChangeCallback(this.selected));
  }
  dateSelected(day) {
    this.selected = this.dayTimeCalendarService.updateDay(this.selected, day.date, this.componentConfig);
    this.emitChange();
  }
  timeChange(time) {
    this.selected = this.dayTimeCalendarService.updateTime(this.selected, time.date);
    this.emitChange();
  }
  emitChange() {
    this.onChange.emit({
      date: this.selected,
      selected: false
    });
  }
  moveCalendarTo(to) {
    if (to) {
      this.dayCalendarRef.moveCalendarTo(to);
    }
  }
  onLeftNavClick(change) {
    this.onLeftNav.emit(change);
  }
  onRightNavClick(change) {
    this.onRightNav.emit(change);
  }
  static {
    this.ɵfac = function DayTimeCalendarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DayTimeCalendarComponent)(ɵɵdirectiveInject(DayTimeCalendarService), ɵɵdirectiveInject(UtilsService), ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DayTimeCalendarComponent,
      selectors: [["dp-day-time-calendar"]],
      viewQuery: function DayTimeCalendarComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c1, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dayCalendarRef = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function DayTimeCalendarComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.theme);
        }
      },
      inputs: {
        config: "config",
        displayDate: "displayDate",
        minDate: "minDate",
        maxDate: "maxDate",
        theme: "theme"
      },
      outputs: {
        onChange: "onChange",
        onGoToCurrent: "onGoToCurrent",
        onLeftNav: "onLeftNav",
        onRightNav: "onRightNav"
      },
      features: [ɵɵProvidersFeature([DayTimeCalendarService, DayCalendarService, TimeSelectService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _DayTimeCalendarComponent),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => _DayTimeCalendarComponent),
        multi: true
      }]), ɵɵNgOnChangesFeature],
      decls: 4,
      vars: 7,
      consts: [["dayCalendar", ""], ["timeSelect", ""], [3, "onGoToCurrent", "onLeftNav", "onRightNav", "onSelect", "config", "displayDate", "ngModel", "theme"], [3, "onChange", "config", "ngModel", "theme"]],
      template: function DayTimeCalendarComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "dp-day-calendar", 2, 0);
          ɵɵlistener("onGoToCurrent", function DayTimeCalendarComponent_Template_dp_day_calendar_onGoToCurrent_0_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onGoToCurrent.emit());
          })("onLeftNav", function DayTimeCalendarComponent_Template_dp_day_calendar_onLeftNav_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onLeftNavClick($event));
          })("onRightNav", function DayTimeCalendarComponent_Template_dp_day_calendar_onRightNav_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onRightNavClick($event));
          })("onSelect", function DayTimeCalendarComponent_Template_dp_day_calendar_onSelect_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.dateSelected($event));
          });
          ɵɵelementEnd();
          ɵɵelementStart(2, "dp-time-select", 3, 1);
          ɵɵlistener("onChange", function DayTimeCalendarComponent_Template_dp_time_select_onChange_2_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.timeChange($event));
          });
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("config", ctx.componentConfig)("displayDate", ctx.displayDate)("ngModel", ctx._selected)("theme", ctx.theme);
          ɵɵadvance(2);
          ɵɵproperty("config", ctx.componentConfig)("ngModel", ctx._selected)("theme", ctx.theme);
        }
      },
      dependencies: [NgControlStatus, NgModel, DayCalendarComponent, TimeSelectComponent],
      styles: ["dp-day-time-calendar{display:inline-block}dp-day-time-calendar dp-time-select{display:block;border:1px solid #000000;border-top:0}dp-day-time-calendar.dp-material dp-time-select{border:1px solid #E0E0E0;border-top:0}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DayTimeCalendarComponent, [{
    type: Component,
    args: [{
      selector: "dp-day-time-calendar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      providers: [DayTimeCalendarService, DayCalendarService, TimeSelectService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DayTimeCalendarComponent),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => DayTimeCalendarComponent),
        multi: true
      }],
      template: '<dp-day-calendar #dayCalendar\n                 (onGoToCurrent)="onGoToCurrent.emit()"\n                 (onLeftNav)="onLeftNavClick($event)"\n                 (onRightNav)="onRightNavClick($event)"\n                 (onSelect)="dateSelected($event)"\n                 [config]="componentConfig"\n                 [displayDate]="displayDate"\n                 [ngModel]="_selected"\n                 [theme]="theme">\n</dp-day-calendar>\n<dp-time-select #timeSelect\n                (onChange)="timeChange($event)"\n                [config]="componentConfig"\n                [ngModel]="_selected"\n                [theme]="theme">\n</dp-time-select>\n',
      styles: ["dp-day-time-calendar{display:inline-block}dp-day-time-calendar dp-time-select{display:block;border:1px solid #000000;border-top:0}dp-day-time-calendar.dp-material dp-time-select{border:1px solid #E0E0E0;border-top:0}\n"]
    }]
  }], () => [{
    type: DayTimeCalendarService
  }, {
    type: UtilsService
  }, {
    type: ChangeDetectorRef
  }], {
    config: [{
      type: Input
    }],
    displayDate: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    theme: [{
      type: HostBinding,
      args: ["class"]
    }, {
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    onGoToCurrent: [{
      type: Output
    }],
    onLeftNav: [{
      type: Output
    }],
    onRightNav: [{
      type: Output
    }],
    dayCalendarRef: [{
      type: ViewChild,
      args: ["dayCalendar"]
    }]
  });
})();
var DatePickerComponent = class _DatePickerComponent {
  constructor(dayPickerService, elemRef, renderer, utilsService, cd) {
    this.dayPickerService = dayPickerService;
    this.elemRef = elemRef;
    this.renderer = renderer;
    this.utilsService = utilsService;
    this.cd = cd;
    this.isInitialized = false;
    this.mode = "day";
    this.placeholder = "";
    this.disabled = false;
    this.open = new EventEmitter();
    this.close = new EventEmitter();
    this.onChange = new EventEmitter();
    this.onGoToCurrent = new EventEmitter();
    this.onLeftNav = new EventEmitter();
    this.onRightNav = new EventEmitter();
    this.onSelect = new EventEmitter();
    this.isFocusedTrigger = false;
    this.handleInnerElementClickUnlisteners = [];
    this.globalListenersUnlisteners = [];
    this.api = {
      open: this.showCalendars.bind(this),
      close: this.hideCalendar.bind(this),
      moveCalendarTo: this.moveCalendarTo.bind(this)
    };
    this.selectEvent = SelectEvent;
    this.areCalendarsShown = false;
    this._selected = [];
  }
  get openOnFocus() {
    return this.componentConfig.openOnFocus;
  }
  get openOnClick() {
    return this.componentConfig.openOnClick;
  }
  get selected() {
    return this._selected;
  }
  set selected(selected) {
    this._selected = selected;
    this.inputElementValue = this.utilsService.convertFromDayjsArray(this.componentConfig.format, selected, ECalendarValue.StringArr).join(" | ");
    const val = this.processOnChangeCallback(selected);
    this.onChangeCallback(val, false);
    this.onChange.emit(val);
  }
  get currentDateView() {
    return this._currentDateView;
  }
  set currentDateView(date) {
    this._currentDateView = date;
    if (this.dayCalendarRef) {
      this.dayCalendarRef.moveCalendarTo(date);
    }
    if (this.monthCalendarRef) {
      this.monthCalendarRef.moveCalendarTo(date);
    }
    if (this.dayTimeCalendarRef) {
      this.dayTimeCalendarRef.moveCalendarTo(date);
    }
    this.displayDate = date;
  }
  onClick() {
    if (!this.openOnClick) {
      return;
    }
    if (!this.isFocusedTrigger && !this.disabled) {
      if (!this.areCalendarsShown) {
        this.showCalendars();
      }
    }
  }
  onBodyClick(event) {
    if (this.inputElement.nativeElement === event.target) {
      return;
    }
    if (this.componentConfig.hideOnOutsideClick) {
      this.hideCalendar();
    }
  }
  writeValue(value) {
    this.inputValue = value;
    if (value || value === "") {
      this.selected = this.utilsService.convertToDayjsArray(value, this.componentConfig);
      this.init();
    } else {
      this.selected = [];
    }
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onChangeCallback = fn;
  }
  onChangeCallback(_, __) {
  }
  registerOnTouched(fn) {
    this.onTouchedCallback = fn;
  }
  onTouchedCallback() {
  }
  validate(formControl) {
    return this.validateFn(formControl.value);
  }
  processOnChangeCallback(selected) {
    if (typeof selected === "string") {
      return selected;
    } else {
      return this.utilsService.convertFromDayjsArray(this.componentConfig.format, selected, this.componentConfig.returnedValueType || this.utilsService.getInputType(this.inputValue, this.componentConfig.allowMultiSelect));
    }
  }
  initValidators() {
    this.validateFn = this.utilsService.createValidator({
      minDate: this.minDate,
      maxDate: this.maxDate,
      minTime: this.minTime,
      maxTime: this.maxTime
    }, this.componentConfig.format, this.mode);
    this.onChangeCallback(this.processOnChangeCallback(this.selected), false);
  }
  ngOnInit() {
    this.isInitialized = true;
    this.init();
  }
  ngOnChanges(changes) {
    if (this.isInitialized) {
      this.init();
    }
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this.cd.markForCheck();
  }
  init() {
    this.componentConfig = this.dayPickerService.getConfig(this.config, this.mode);
    this.currentDateView = this.displayDate ? this.utilsService.convertToDayjs(this.displayDate, this.componentConfig.format) : this.utilsService.getDefaultDisplayDate(this.currentDateView, this.selected, this.componentConfig.allowMultiSelect, this.componentConfig.min);
    this.dayCalendarConfig = this.dayPickerService.getDayConfigService(this.componentConfig);
    this.dayTimeCalendarConfig = this.dayPickerService.getDayTimeConfig(this.componentConfig);
    this.timeSelectConfig = this.dayPickerService.getTimeConfig(this.componentConfig);
    this.initValidators();
    this.overlayPosition = this.dayPickerService.getOverlayPosition(this.componentConfig);
    this.origin = this.utilsService.getNativeElement(this.componentConfig.inputElementContainer);
  }
  inputFocused() {
    if (!this.openOnFocus) {
      return;
    }
    clearTimeout(this.onOpenDelayTimeoutHandler);
    this.isFocusedTrigger = true;
    this.onOpenDelayTimeoutHandler = setTimeout(() => {
      if (!this.areCalendarsShown) {
        this.showCalendars();
      }
      this.isFocusedTrigger = false;
      this.cd.markForCheck();
    }, this.componentConfig.onOpenDelay);
  }
  inputBlurred() {
    clearTimeout(this.onOpenDelayTimeoutHandler);
    this.onTouchedCallback();
  }
  showCalendars() {
    this.areCalendarsShown = true;
    this.startGlobalListeners();
    if (this.timeSelectRef) {
      this.timeSelectRef.api.triggerChange();
    }
    this.open.emit();
    this.cd.markForCheck();
  }
  hideCalendar() {
    this.areCalendarsShown = false;
    if (this.dayCalendarRef) {
      this.dayCalendarRef.api.toggleCalendarMode(ECalendarMode.Day);
    }
    this.stopGlobalListeners();
    this.close.emit();
    this.cd.markForCheck();
  }
  onViewDateChange(value) {
    const strVal = value ? this.utilsService.convertToString(value, this.componentConfig.format) : "";
    if (this.dayPickerService.isValidInputDateValue(strVal, this.componentConfig)) {
      this.selected = this.dayPickerService.convertInputValueToDayjsArray(strVal, this.componentConfig);
      this.currentDateView = this.selected.length ? this.utilsService.getDefaultDisplayDate(null, this.selected, this.componentConfig.allowMultiSelect, this.componentConfig.min) : this.currentDateView;
      this.onSelect.emit({
        date: strVal,
        type: SelectEvent.INPUT,
        granularity: null
      });
    } else {
      this._selected = this.utilsService.getValidDayjsArray(strVal, this.componentConfig.format);
      this.onChangeCallback(this.processOnChangeCallback(strVal), true);
    }
  }
  dateSelected(date, granularity, type, ignoreClose) {
    this.selected = this.utilsService.updateSelected(this.componentConfig.allowMultiSelect, this.selected, date, granularity);
    if (!ignoreClose) {
      this.onDateClick();
    }
    this.onSelect.emit({
      date: date.date,
      granularity,
      type
    });
  }
  onDateClick() {
    if (this.componentConfig.closeOnSelect) {
      setTimeout(this.hideCalendar.bind(this), this.componentConfig.closeOnSelectDelay);
    }
  }
  onKeyPress(event) {
    switch (event.key) {
      case "Escape":
      case "Esc":
      case "Tab":
        this.hideCalendar();
        break;
    }
  }
  moveCalendarTo(date) {
    this.currentDateView = this.utilsService.convertToDayjs(date, this.componentConfig.format);
  }
  onLeftNavClick(change) {
    this.displayDate = change.to;
    this.onLeftNav.emit(change);
  }
  onRightNavClick(change) {
    this.displayDate = change.to;
    this.onRightNav.emit(change);
  }
  startGlobalListeners() {
    this.globalListenersUnlisteners.push(this.renderer.listen(document, "keydown", (e) => {
      this.onKeyPress(e);
    }));
  }
  stopGlobalListeners() {
    this.globalListenersUnlisteners.forEach((ul) => ul());
    this.globalListenersUnlisteners = [];
  }
  ngOnDestroy() {
    this.handleInnerElementClickUnlisteners.forEach((ul) => ul());
    if (this.appendToElement) {
      this.appendToElement.removeChild(this.calendarWrapper);
    }
  }
  goToCurrent() {
    this.currentDateView = dayjsRef();
    this.onGoToCurrent.emit();
  }
  static {
    this.ɵfac = function DatePickerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DatePickerComponent)(ɵɵdirectiveInject(DatePickerService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(UtilsService), ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DatePickerComponent,
      selectors: [["dp-date-picker"]],
      viewQuery: function DatePickerComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c2, 5);
          ɵɵviewQuery(_c1, 5);
          ɵɵviewQuery(_c3, 5);
          ɵɵviewQuery(_c4, 5);
          ɵɵviewQuery(_c5, 5);
          ɵɵviewQuery(_c6, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.calendarContainer = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dayCalendarRef = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.monthCalendarRef = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dayTimeCalendarRef = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.timeSelectRef = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputElement = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function DatePickerComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function DatePickerComponent_click_HostBindingHandler() {
            return ctx.onClick();
          });
        }
        if (rf & 2) {
          ɵɵclassMap(ctx.theme);
        }
      },
      inputs: {
        config: "config",
        mode: "mode",
        placeholder: "placeholder",
        disabled: "disabled",
        displayDate: "displayDate",
        theme: "theme",
        minDate: "minDate",
        maxDate: "maxDate",
        minTime: "minTime",
        maxTime: "maxTime"
      },
      outputs: {
        open: "open",
        close: "close",
        onChange: "onChange",
        onGoToCurrent: "onGoToCurrent",
        onLeftNav: "onLeftNav",
        onRightNav: "onRightNav",
        onSelect: "onSelect"
      },
      features: [ɵɵProvidersFeature([DatePickerService, DayTimeCalendarService, DayCalendarService, TimeSelectService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _DatePickerComponent),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => _DatePickerComponent),
        multi: true
      }]), ɵɵNgOnChangesFeature],
      decls: 6,
      vars: 13,
      consts: [["trigger", ""], ["inputElement", ""], ["container", ""], ["dayCalendar", ""], ["monthCalendar", ""], ["timeSelect", ""], ["daytimeCalendar", ""], ["dir", "ltr", 3, "ngClass"], [1, "dp-input-container", 3, "hidden"], ["type", "text", 1, "dp-picker-input", 3, "blur", "focus", "keydown.enter", "ngModelChange", "disabled", "ngModel", "placeholder", "readonly"], ["cdkConnectedOverlay", "", 3, "overlayOutsideClick", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayHasBackdrop"], [3, "ngSwitch"], [3, "config", "displayDate", "ngModel", "theme", "onGoToCurrent", "onLeftNav", "onRightNav", "onSelect", 4, "ngSwitchCase"], [3, "config", "ngModel", "theme", "onChange", 4, "ngSwitchCase"], [3, "config", "displayDate", "ngModel", "theme", "onChange", "onGoToCurrent", "onLeftNav", "onRightNav", 4, "ngSwitchCase"], [3, "onGoToCurrent", "onLeftNav", "onRightNav", "onSelect", "config", "displayDate", "ngModel", "theme"], [3, "onChange", "config", "ngModel", "theme"], [3, "onChange", "onGoToCurrent", "onLeftNav", "onRightNav", "config", "displayDate", "ngModel", "theme"]],
      template: function DatePickerComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "div", 7, 0)(2, "div", 8)(3, "input", 9, 1);
          ɵɵlistener("blur", function DatePickerComponent_Template_input_blur_3_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.inputBlurred());
          })("focus", function DatePickerComponent_Template_input_focus_3_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.inputFocused());
          })("keydown.enter", function DatePickerComponent_Template_input_keydown_enter_3_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.componentConfig.closeOnEnter && ctx.hideCalendar());
          })("ngModelChange", function DatePickerComponent_Template_input_ngModelChange_3_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onViewDateChange($event));
          });
          ɵɵelementEnd()();
          ɵɵtemplate(5, DatePickerComponent_ng_template_5_Template, 7, 9, "ng-template", 10);
          ɵɵlistener("overlayOutsideClick", function DatePickerComponent_Template_ng_template_overlayOutsideClick_5_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onBodyClick($event));
          });
          ɵɵelementEnd();
        }
        if (rf & 2) {
          const trigger_r7 = ɵɵreference(1);
          ɵɵproperty("ngClass", ɵɵpureFunction1(11, _c7, ctx.areCalendarsShown));
          ɵɵadvance(2);
          ɵɵproperty("hidden", ctx.componentConfig.hideInputContainer);
          ɵɵattribute("data-hidden", ctx.componentConfig.hideInputContainer);
          ɵɵadvance();
          ɵɵproperty("disabled", ctx.disabled)("ngModel", ctx.inputElementValue)("placeholder", ctx.placeholder)("readonly", ctx.componentConfig.disableKeypress);
          ɵɵadvance(2);
          ɵɵproperty("cdkConnectedOverlayPositions", ctx.overlayPosition)("cdkConnectedOverlayOrigin", ctx.origin || trigger_r7)("cdkConnectedOverlayOpen", ctx.areCalendarsShown)("cdkConnectedOverlayHasBackdrop", false);
        }
      },
      dependencies: [NgClass, NgSwitch, NgSwitchCase, DefaultValueAccessor, NgControlStatus, NgModel, CdkConnectedOverlay, Dir, DayCalendarComponent, MonthCalendarComponent, TimeSelectComponent, DayTimeCalendarComponent],
      styles: ["dp-date-picker{display:inline-block}dp-date-picker.dp-material .dp-picker-input{box-sizing:border-box;height:30px;width:213px;font-size:13px;outline:none}dp-date-picker .dp-input-container{position:relative}dp-date-picker .dp-selected{background:#106cc8;color:#fff}.dp-popup{position:relative;display:inline-block;background:#fff;box-shadow:1px 1px 5px #0000001a;border-left:1px solid rgba(0,0,0,.1);border-right:1px solid rgba(0,0,0,.1);border-bottom:1px solid rgba(0,0,0,.1);white-space:nowrap}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePickerComponent, [{
    type: Component,
    args: [{
      selector: "dp-date-picker",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [DatePickerService, DayTimeCalendarService, DayCalendarService, TimeSelectService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DatePickerComponent),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => DatePickerComponent),
        multi: true
      }],
      template: `<div [ngClass]="{'dp-open': areCalendarsShown}" dir="ltr" #trigger>
  <div [attr.data-hidden]="componentConfig.hideInputContainer"
       [hidden]="componentConfig.hideInputContainer"
       class="dp-input-container">
    <input #inputElement
           (blur)="inputBlurred()"
           (focus)="inputFocused()"
           (keydown.enter)="componentConfig.closeOnEnter && hideCalendar()"
           (ngModelChange)="onViewDateChange($event)"
           [disabled]="disabled"
           [ngModel]="inputElementValue"
           [placeholder]="placeholder"
           [readonly]="componentConfig.disableKeypress"
           class="dp-picker-input"
           type="text"/>
  </div>
  <ng-template cdkConnectedOverlay
               [cdkConnectedOverlayPositions]="overlayPosition"
               [cdkConnectedOverlayOrigin]="origin || trigger"
               [cdkConnectedOverlayOpen]="areCalendarsShown"
               [cdkConnectedOverlayHasBackdrop]="false"
               (overlayOutsideClick)="onBodyClick($event)">
    <div #container>
      <div [attr.data-hidden]="!areCalendarsShown"
           [ngSwitch]="mode"
           class="dp-popup {{theme}}">
        <dp-day-calendar #dayCalendar
                         (onGoToCurrent)="goToCurrent()"
                         (onLeftNav)="onLeftNavClick($event)"
                         (onRightNav)="onRightNavClick($event)"
                         (onSelect)="dateSelected($event, 'day', selectEvent.SELECTION, false)"
                         *ngSwitchCase="'day'"
                         [config]="dayCalendarConfig"
                         [displayDate]="displayDate"
                         [ngModel]="_selected"
                         [theme]="theme">
        </dp-day-calendar>

        <dp-month-calendar #monthCalendar
                           (onGoToCurrent)="goToCurrent()"
                           (onLeftNav)="onLeftNavClick($event)"
                           (onRightNav)="onRightNavClick($event)"
                           (onSelect)="dateSelected($event, 'month', selectEvent.SELECTION, false)"
                           *ngSwitchCase="'month'"
                           [config]="dayCalendarConfig"
                           [displayDate]="displayDate"
                           [ngModel]="_selected"
                           [theme]="theme">
        </dp-month-calendar>

        <dp-time-select #timeSelect
                        (onChange)="dateSelected($event, 'second', selectEvent.SELECTION, true)"
                        *ngSwitchCase="'time'"
                        [config]="timeSelectConfig"
                        [ngModel]="_selected && _selected[0]"
                        [theme]="theme">
        </dp-time-select>

        <dp-day-time-calendar #daytimeCalendar
                              (onChange)="dateSelected($event, 'second', selectEvent.SELECTION, true)"
                              (onGoToCurrent)="goToCurrent()"
                              (onLeftNav)="onLeftNavClick($event)"
                              (onRightNav)="onRightNavClick($event)"
                              *ngSwitchCase="'daytime'"
                              [config]="dayTimeCalendarConfig"
                              [displayDate]="displayDate"
                              [ngModel]="_selected && _selected[0]"
                              [theme]="theme">
        </dp-day-time-calendar>
      </div>
    </div>
  </ng-template>
</div>
`,
      styles: ["dp-date-picker{display:inline-block}dp-date-picker.dp-material .dp-picker-input{box-sizing:border-box;height:30px;width:213px;font-size:13px;outline:none}dp-date-picker .dp-input-container{position:relative}dp-date-picker .dp-selected{background:#106cc8;color:#fff}.dp-popup{position:relative;display:inline-block;background:#fff;box-shadow:1px 1px 5px #0000001a;border-left:1px solid rgba(0,0,0,.1);border-right:1px solid rgba(0,0,0,.1);border-bottom:1px solid rgba(0,0,0,.1);white-space:nowrap}\n"]
    }]
  }], () => [{
    type: DatePickerService
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: UtilsService
  }, {
    type: ChangeDetectorRef
  }], {
    config: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    displayDate: [{
      type: Input
    }],
    theme: [{
      type: HostBinding,
      args: ["class"]
    }, {
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    minTime: [{
      type: Input
    }],
    maxTime: [{
      type: Input
    }],
    open: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    onChange: [{
      type: Output
    }],
    onGoToCurrent: [{
      type: Output
    }],
    onLeftNav: [{
      type: Output
    }],
    onRightNav: [{
      type: Output
    }],
    onSelect: [{
      type: Output
    }],
    calendarContainer: [{
      type: ViewChild,
      args: ["container"]
    }],
    dayCalendarRef: [{
      type: ViewChild,
      args: ["dayCalendar"]
    }],
    monthCalendarRef: [{
      type: ViewChild,
      args: ["monthCalendar"]
    }],
    dayTimeCalendarRef: [{
      type: ViewChild,
      args: ["daytimeCalendar"]
    }],
    timeSelectRef: [{
      type: ViewChild,
      args: ["timeSelect"]
    }],
    inputElement: [{
      type: ViewChild,
      args: ["inputElement"]
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();
var DatePickerDirective = class _DatePickerDirective {
  constructor(viewContainerRef, elemRef, componentFactoryResolver, formControl, utilsService) {
    this.viewContainerRef = viewContainerRef;
    this.elemRef = elemRef;
    this.componentFactoryResolver = componentFactoryResolver;
    this.formControl = formControl;
    this.utilsService = utilsService;
    this.open = new EventEmitter();
    this.close = new EventEmitter();
    this.onChange = new EventEmitter();
    this.onGoToCurrent = new EventEmitter();
    this.onLeftNav = new EventEmitter();
    this.onRightNav = new EventEmitter();
    this.onSelect = new EventEmitter();
    this._mode = "day";
  }
  get config() {
    return this._config;
  }
  set config(config) {
    this._config = __spreadProps(__spreadValues({}, config), {
      hideInputContainer: true,
      inputElementContainer: config.inputElementContainer ?? this.elemRef
    });
    this.updateDatepickerConfig();
    this.markForCheck();
  }
  get theme() {
    return this._theme;
  }
  set theme(theme) {
    this._theme = theme;
    if (this.datePicker) {
      this.datePicker.theme = theme;
    }
    this.markForCheck();
  }
  get mode() {
    return this._mode;
  }
  set mode(mode) {
    this._mode = mode;
    if (this.datePicker) {
      this.datePicker.mode = mode;
    }
    this.markForCheck();
  }
  get minDate() {
    return this._minDate;
  }
  set minDate(minDate) {
    this._minDate = minDate;
    if (this.datePicker) {
      this.datePicker.minDate = minDate;
      this.datePicker.ngOnInit();
    }
    this.markForCheck();
  }
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(maxDate) {
    this._maxDate = maxDate;
    if (this.datePicker) {
      this.datePicker.maxDate = maxDate;
      this.datePicker.ngOnInit();
    }
    this.markForCheck();
  }
  get minTime() {
    return this._minTime;
  }
  set minTime(minTime) {
    this._minTime = minTime;
    if (this.datePicker) {
      this.datePicker.minTime = minTime;
      this.datePicker.ngOnInit();
    }
    this.markForCheck();
  }
  get maxTime() {
    return this._maxTime;
  }
  set maxTime(maxTime) {
    this._maxTime = maxTime;
    if (this.datePicker) {
      this.datePicker.maxTime = maxTime;
      this.datePicker.ngOnInit();
    }
    this.markForCheck();
  }
  get displayDate() {
    return this._displayDate;
  }
  set displayDate(displayDate) {
    this._displayDate = displayDate;
    this.updateDatepickerConfig();
    this.markForCheck();
  }
  ngOnInit() {
    this.datePicker = this.createDatePicker();
    this.api = this.datePicker.api;
    this.updateDatepickerConfig();
    this.attachModelToDatePicker();
    this.datePicker.theme = this.theme;
  }
  createDatePicker() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(DatePickerComponent);
    return this.viewContainerRef.createComponent(factory).instance;
  }
  attachModelToDatePicker() {
    if (!this.formControl) {
      return;
    }
    this.datePicker.onViewDateChange(this.formControl.value);
    this.formControl.valueChanges.subscribe((value) => {
      if (value !== this.datePicker.inputElementValue) {
        const strVal = this.utilsService.convertToString(value, this.datePicker.componentConfig.format);
        this.datePicker.onViewDateChange(strVal);
      }
    });
    let setup = true;
    this.datePicker.registerOnChange((value, changedByInput) => {
      if (value) {
        const isMultiselectEmpty = setup && Array.isArray(value) && !value.length;
        if (!isMultiselectEmpty && !changedByInput) {
          this.formControl.control.setValue(this.datePicker.inputElementValue);
        }
      }
      const errors = this.datePicker.validateFn(value);
      if (!setup) {
        this.formControl.control.markAsDirty({
          onlySelf: true
        });
      } else {
        setup = false;
      }
      if (errors) {
        if (errors.hasOwnProperty("format")) {
          const {
            given
          } = errors["format"];
          this.datePicker.inputElementValue = given;
          if (!changedByInput) {
            this.formControl.control.setValue(given);
          }
        }
        this.formControl.control.setErrors(errors);
      }
    });
  }
  onClick() {
    this.datePicker.onClick();
  }
  onFocus() {
    this.datePicker.inputFocused();
  }
  onEnter() {
    if (this.datePicker.componentConfig.closeOnEnter) {
      this.datePicker.hideCalendar();
    }
  }
  markForCheck() {
    if (this.datePicker) {
      this.datePicker.cd.markForCheck();
    }
  }
  updateDatepickerConfig() {
    if (this.datePicker) {
      this.datePicker.minDate = this.minDate;
      this.datePicker.maxDate = this.maxDate;
      this.datePicker.minTime = this.minTime;
      this.datePicker.maxTime = this.maxTime;
      this.datePicker.mode = this.mode || "day";
      this.datePicker.displayDate = this.displayDate;
      this.datePicker.config = this.config;
      this.datePicker.open = this.open;
      this.datePicker.close = this.close;
      this.datePicker.onChange = this.onChange;
      this.datePicker.onGoToCurrent = this.onGoToCurrent;
      this.datePicker.onLeftNav = this.onLeftNav;
      this.datePicker.onRightNav = this.onRightNav;
      this.datePicker.onSelect = this.onSelect;
      this.datePicker.init();
      if (this.datePicker.componentConfig.disableKeypress) {
        this.elemRef.nativeElement.setAttribute("readonly", true);
      } else {
        this.elemRef.nativeElement.removeAttribute("readonly");
      }
    }
  }
  static {
    this.ɵfac = function DatePickerDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DatePickerDirective)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ComponentFactoryResolver$1), ɵɵdirectiveInject(NgControl, 8), ɵɵdirectiveInject(UtilsService));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _DatePickerDirective,
      selectors: [["", "dpDayPicker", ""]],
      hostBindings: function DatePickerDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function DatePickerDirective_click_HostBindingHandler() {
            return ctx.onClick();
          })("focus", function DatePickerDirective_focus_HostBindingHandler() {
            return ctx.onFocus();
          })("keydown.enter", function DatePickerDirective_keydown_enter_HostBindingHandler() {
            return ctx.onEnter();
          });
        }
      },
      inputs: {
        config: [0, "dpDayPicker", "config"],
        theme: "theme",
        mode: "mode",
        minDate: "minDate",
        maxDate: "maxDate",
        minTime: "minTime",
        maxTime: "maxTime",
        displayDate: "displayDate"
      },
      outputs: {
        open: "open",
        close: "close",
        onChange: "onChange",
        onGoToCurrent: "onGoToCurrent",
        onLeftNav: "onLeftNav",
        onRightNav: "onRightNav",
        onSelect: "onSelect"
      },
      exportAs: ["dpDayPicker"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePickerDirective, [{
    type: Directive,
    args: [{
      exportAs: "dpDayPicker",
      selector: "[dpDayPicker]"
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: ElementRef
  }, {
    type: ComponentFactoryResolver$1
  }, {
    type: NgControl,
    decorators: [{
      type: Optional
    }]
  }, {
    type: UtilsService
  }], {
    open: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    onChange: [{
      type: Output
    }],
    onGoToCurrent: [{
      type: Output
    }],
    onLeftNav: [{
      type: Output
    }],
    onRightNav: [{
      type: Output
    }],
    onSelect: [{
      type: Output
    }],
    config: [{
      type: Input,
      args: ["dpDayPicker"]
    }],
    theme: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    minTime: [{
      type: Input
    }],
    maxTime: [{
      type: Input
    }],
    displayDate: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }],
    onFocus: [{
      type: HostListener,
      args: ["focus"]
    }],
    onEnter: [{
      type: HostListener,
      args: ["keydown.enter"]
    }]
  });
})();
var DpDatePickerModule = class _DpDatePickerModule {
  static {
    this.ɵfac = function DpDatePickerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DpDatePickerModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _DpDatePickerModule,
      declarations: [DatePickerComponent, DatePickerDirective, DayCalendarComponent, MonthCalendarComponent, CalendarNavComponent, TimeSelectComponent, DayTimeCalendarComponent],
      imports: [CommonModule, FormsModule, OverlayModule],
      exports: [DatePickerComponent, DatePickerDirective, MonthCalendarComponent, DayCalendarComponent, TimeSelectComponent, DayTimeCalendarComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, FormsModule, OverlayModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DpDatePickerModule, [{
    type: NgModule,
    args: [{
      declarations: [DatePickerComponent, DatePickerDirective, DayCalendarComponent, MonthCalendarComponent, CalendarNavComponent, TimeSelectComponent, DayTimeCalendarComponent],
      imports: [CommonModule, FormsModule, OverlayModule],
      exports: [DatePickerComponent, DatePickerDirective, MonthCalendarComponent, DayCalendarComponent, TimeSelectComponent, DayTimeCalendarComponent]
    }]
  }], null, null);
})();
export {
  DatePickerComponent,
  DatePickerDirective,
  DayCalendarComponent,
  DayTimeCalendarComponent,
  DpDatePickerModule,
  ECalendarMode,
  ECalendarValue,
  MonthCalendarComponent,
  SelectEvent,
  TimeSelectComponent
};
//# sourceMappingURL=ng2-date-picker.js.map
