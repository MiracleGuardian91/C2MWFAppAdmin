import {
  CdkConnectedOverlay,
  Dir,
  OverlayModule
} from "./chunk-5GIB77BJ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  NgModel
} from "./chunk-L2L6ECIJ.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ComponentFactoryResolver$1,
  ContentChild,
  Directive,
  DomSanitizer,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Injectable,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgSwitch,
  NgSwitchCase,
  NgTemplateOutlet,
  Optional,
  Output,
  Pipe,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  debounceTime,
  filter,
  forwardRef,
  fromEvent,
  isDevMode,
  map,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-ZQT4GMOS.js";
import {
  __async,
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

// node_modules/ngx-image-cropper/fesm2020/ngx-image-cropper.mjs
var _c0 = ["wrapper"];
var _c1 = ["sourceImage"];
function ImageCropperComponent_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 5, 1);
    \u0275\u0275listener("load", function ImageCropperComponent_img_2_Template_img_load_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.imageLoadedInView());
    })("mousedown", function ImageCropperComponent_img_2_Template_img_mousedown_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Drag));
    })("touchstart", function ImageCropperComponent_img_2_Template_img_touchstart_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Drag));
    })("error", function ImageCropperComponent_img_2_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadImageError($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("visibility", ctx_r1.imageVisible ? "visible" : "hidden")("transform", ctx_r1.safeTransformStyle);
    \u0275\u0275classProp("ngx-ic-draggable", !ctx_r1.disabled && ctx_r1.allowMoveImage);
    \u0275\u0275property("src", ctx_r1.safeImgDataUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("alt", ctx_r1.imageAltText);
  }
}
function ImageCropperComponent_div_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 9);
    \u0275\u0275listener("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "topleft"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "topleft"));
    });
    \u0275\u0275element(2, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 11);
    \u0275\u0275element(4, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 12);
    \u0275\u0275listener("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_5_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "topright"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_5_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "topright"));
    });
    \u0275\u0275element(6, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 13);
    \u0275\u0275element(8, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 14);
    \u0275\u0275listener("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "bottomright"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "bottomright"));
    });
    \u0275\u0275element(10, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 15);
    \u0275\u0275element(12, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 16);
    \u0275\u0275listener("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_13_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "bottomleft"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_13_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "bottomleft"));
    });
    \u0275\u0275element(14, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 17);
    \u0275\u0275element(16, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 18);
    \u0275\u0275listener("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_17_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "top"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_17_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "top"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 19);
    \u0275\u0275listener("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_18_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "right"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_18_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "right"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 20);
    \u0275\u0275listener("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_19_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "bottom"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_19_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "bottom"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 21);
    \u0275\u0275listener("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_20_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "left"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_20_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "left"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function ImageCropperComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275listener("keydown", function ImageCropperComponent_div_4_Template_div_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.keyboardAccess($event));
    });
    \u0275\u0275elementStart(1, "div", 7);
    \u0275\u0275listener("mousedown", function ImageCropperComponent_div_4_Template_div_mousedown_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Move));
    })("touchstart", function ImageCropperComponent_div_4_Template_div_touchstart_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Move));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, ImageCropperComponent_div_4_ng_container_2_Template, 21, 0, "ng-container", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("top", ctx_r1.cropper.y1, "px")("left", ctx_r1.cropper.x1, "px")("width", ctx_r1.cropper.x2 - ctx_r1.cropper.x1, "px")("height", ctx_r1.cropper.y2 - ctx_r1.cropper.y1, "px")("margin-left", ctx_r1.alignImage === "center" ? ctx_r1.marginLeft : null)("visibility", ctx_r1.imageVisible ? "visible" : "hidden");
    \u0275\u0275classProp("ngx-ic-round", ctx_r1.roundCropper);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.hideResizeSquares);
  }
}
var CropperSettings = class {
  constructor() {
    this.format = "png";
    this.maintainAspectRatio = true;
    this.transform = {};
    this.aspectRatio = 1;
    this.resetCropOnAspectRatioChange = true;
    this.resizeToWidth = 0;
    this.resizeToHeight = 0;
    this.cropperMinWidth = 0;
    this.cropperMinHeight = 0;
    this.cropperMaxHeight = 0;
    this.cropperMaxWidth = 0;
    this.cropperStaticWidth = 0;
    this.cropperStaticHeight = 0;
    this.canvasRotation = 0;
    this.initialStepSize = 3;
    this.roundCropper = false;
    this.onlyScaleDown = false;
    this.imageQuality = 92;
    this.autoCrop = true;
    this.backgroundColor = null;
    this.containWithinAspectRatio = false;
    this.hideResizeSquares = false;
    this.alignImage = "center";
    this.cropperScaledMinWidth = 20;
    this.cropperScaledMinHeight = 20;
    this.cropperScaledMaxWidth = 20;
    this.cropperScaledMaxHeight = 20;
    this.stepSize = this.initialStepSize;
  }
  setOptions(options) {
    Object.keys(options).filter((k) => k in this).forEach((k) => this[k] = options[k]);
    this.validateOptions();
  }
  setOptionsFromChanges(changes) {
    Object.keys(changes).filter((k) => k in this).forEach((k) => this[k] = changes[k].currentValue);
    this.validateOptions();
  }
  validateOptions() {
    if (this.maintainAspectRatio && !this.aspectRatio) {
      throw new Error("`aspectRatio` should > 0 when `maintainAspectRatio` is enabled");
    }
  }
};
var MoveTypes;
(function(MoveTypes2) {
  MoveTypes2["Drag"] = "drag";
  MoveTypes2["Move"] = "move";
  MoveTypes2["Resize"] = "resize";
  MoveTypes2["Pinch"] = "pinch";
})(MoveTypes || (MoveTypes = {}));
function getPositionForKey(key) {
  switch (key) {
    case "ArrowUp":
      return "top";
    case "ArrowRight":
      return "right";
    case "ArrowDown":
      return "bottom";
    case "ArrowLeft":
    default:
      return "left";
  }
}
function getInvertedPositionForKey(key) {
  switch (key) {
    case "ArrowUp":
      return "bottom";
    case "ArrowRight":
      return "left";
    case "ArrowDown":
      return "top";
    case "ArrowLeft":
    default:
      return "right";
  }
}
function getEventForKey(key, stepSize) {
  switch (key) {
    case "ArrowUp":
      return {
        clientX: 0,
        clientY: stepSize * -1
      };
    case "ArrowRight":
      return {
        clientX: stepSize,
        clientY: 0
      };
    case "ArrowDown":
      return {
        clientX: 0,
        clientY: stepSize
      };
    case "ArrowLeft":
    default:
      return {
        clientX: stepSize * -1,
        clientY: 0
      };
  }
}
function resizeCanvas(canvas, width, height) {
  const width_source = canvas.width;
  const height_source = canvas.height;
  width = Math.round(width);
  height = Math.round(height);
  const ratio_w = width_source / width;
  const ratio_h = height_source / height;
  const ratio_w_half = Math.ceil(ratio_w / 2);
  const ratio_h_half = Math.ceil(ratio_h / 2);
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const img = ctx.getImageData(0, 0, width_source, height_source);
    const img2 = ctx.createImageData(width, height);
    const data = img.data;
    const data2 = img2.data;
    for (let j = 0; j < height; j++) {
      for (let i = 0; i < width; i++) {
        const x2 = (i + j * width) * 4;
        const center_y = j * ratio_h;
        let weight = 0;
        let weights = 0;
        let weights_alpha = 0;
        let gx_r = 0;
        let gx_g = 0;
        let gx_b = 0;
        let gx_a = 0;
        const xx_start = Math.floor(i * ratio_w);
        const yy_start = Math.floor(j * ratio_h);
        let xx_stop = Math.ceil((i + 1) * ratio_w);
        let yy_stop = Math.ceil((j + 1) * ratio_h);
        xx_stop = Math.min(xx_stop, width_source);
        yy_stop = Math.min(yy_stop, height_source);
        for (let yy = yy_start; yy < yy_stop; yy++) {
          const dy = Math.abs(center_y - yy) / ratio_h_half;
          const center_x = i * ratio_w;
          const w0 = dy * dy;
          for (let xx = xx_start; xx < xx_stop; xx++) {
            const dx = Math.abs(center_x - xx) / ratio_w_half;
            const w = Math.sqrt(w0 + dx * dx);
            if (w >= 1) {
              continue;
            }
            weight = 2 * w * w * w - 3 * w * w + 1;
            const pos_x = 4 * (xx + yy * width_source);
            gx_a += weight * data[pos_x + 3];
            weights_alpha += weight;
            if (data[pos_x + 3] < 255) weight = weight * data[pos_x + 3] / 250;
            gx_r += weight * data[pos_x];
            gx_g += weight * data[pos_x + 1];
            gx_b += weight * data[pos_x + 2];
            weights += weight;
          }
        }
        data2[x2] = gx_r / weights;
        data2[x2 + 1] = gx_g / weights;
        data2[x2 + 2] = gx_b / weights;
        data2[x2 + 3] = gx_a / weights_alpha;
      }
    }
    canvas.width = width;
    canvas.height = height;
    ctx.putImageData(img2, 0, 0);
  }
}
function percentage(percent, totalValue) {
  return percent / 100 * totalValue;
}
var CropService = class {
  crop(sourceImage, loadedImage, cropper, settings) {
    const imagePosition = this.getImagePosition(sourceImage, loadedImage, cropper, settings);
    const width = imagePosition.x2 - imagePosition.x1;
    const height = imagePosition.y2 - imagePosition.y1;
    const cropCanvas = document.createElement("canvas");
    cropCanvas.width = width;
    cropCanvas.height = height;
    const ctx = cropCanvas.getContext("2d");
    if (!ctx) {
      return null;
    }
    if (settings.backgroundColor != null) {
      ctx.fillStyle = settings.backgroundColor;
      ctx.fillRect(0, 0, width, height);
    }
    const scaleX = (settings.transform.scale || 1) * (settings.transform.flipH ? -1 : 1);
    const scaleY = (settings.transform.scale || 1) * (settings.transform.flipV ? -1 : 1);
    const {
      translateH,
      translateV
    } = this.getCanvasTranslate(sourceImage, loadedImage, settings);
    const transformedImage = loadedImage.transformed;
    ctx.setTransform(scaleX, 0, 0, scaleY, transformedImage.size.width / 2 + translateH, transformedImage.size.height / 2 + translateV);
    ctx.translate(-imagePosition.x1 / scaleX, -imagePosition.y1 / scaleY);
    ctx.rotate((settings.transform.rotate || 0) * Math.PI / 180);
    ctx.drawImage(transformedImage.image, -transformedImage.size.width / 2, -transformedImage.size.height / 2);
    const output = {
      width,
      height,
      imagePosition,
      cropperPosition: __spreadValues({}, cropper)
    };
    if (settings.containWithinAspectRatio) {
      output.offsetImagePosition = this.getOffsetImagePosition(sourceImage, loadedImage, cropper, settings);
    }
    const resizeRatio = this.getResizeRatio(width, height, settings);
    if (resizeRatio !== 1) {
      output.width = Math.round(width * resizeRatio);
      output.height = settings.maintainAspectRatio ? Math.round(output.width / settings.aspectRatio) : Math.round(height * resizeRatio);
      resizeCanvas(cropCanvas, output.width, output.height);
    }
    output.base64 = cropCanvas.toDataURL("image/" + settings.format, this.getQuality(settings));
    return output;
  }
  getCanvasTranslate(sourceImage, loadedImage, settings) {
    if (settings.transform.translateUnit === "px") {
      const ratio = this.getRatio(sourceImage, loadedImage);
      return {
        translateH: (settings.transform.translateH || 0) * ratio,
        translateV: (settings.transform.translateV || 0) * ratio
      };
    } else {
      return {
        translateH: settings.transform.translateH ? percentage(settings.transform.translateH, loadedImage.transformed.size.width) : 0,
        translateV: settings.transform.translateV ? percentage(settings.transform.translateV, loadedImage.transformed.size.height) : 0
      };
    }
  }
  getRatio(sourceImage, loadedImage) {
    const sourceImageElement = sourceImage.nativeElement;
    return loadedImage.transformed.size.width / sourceImageElement.offsetWidth;
  }
  getImagePosition(sourceImage, loadedImage, cropper, settings) {
    const ratio = this.getRatio(sourceImage, loadedImage);
    const out = {
      x1: Math.round(cropper.x1 * ratio),
      y1: Math.round(cropper.y1 * ratio),
      x2: Math.round(cropper.x2 * ratio),
      y2: Math.round(cropper.y2 * ratio)
    };
    if (!settings.containWithinAspectRatio) {
      out.x1 = Math.max(out.x1, 0);
      out.y1 = Math.max(out.y1, 0);
      out.x2 = Math.min(out.x2, loadedImage.transformed.size.width);
      out.y2 = Math.min(out.y2, loadedImage.transformed.size.height);
    }
    return out;
  }
  getOffsetImagePosition(sourceImage, loadedImage, cropper, settings) {
    const canvasRotation = settings.canvasRotation + loadedImage.exifTransform.rotate;
    const sourceImageElement = sourceImage.nativeElement;
    const ratio = loadedImage.transformed.size.width / sourceImageElement.offsetWidth;
    let offsetX;
    let offsetY;
    if (canvasRotation % 2) {
      offsetX = (loadedImage.transformed.size.width - loadedImage.original.size.height) / 2;
      offsetY = (loadedImage.transformed.size.height - loadedImage.original.size.width) / 2;
    } else {
      offsetX = (loadedImage.transformed.size.width - loadedImage.original.size.width) / 2;
      offsetY = (loadedImage.transformed.size.height - loadedImage.original.size.height) / 2;
    }
    const out = {
      x1: Math.round(cropper.x1 * ratio) - offsetX,
      y1: Math.round(cropper.y1 * ratio) - offsetY,
      x2: Math.round(cropper.x2 * ratio) - offsetX,
      y2: Math.round(cropper.y2 * ratio) - offsetY
    };
    if (!settings.containWithinAspectRatio) {
      out.x1 = Math.max(out.x1, 0);
      out.y1 = Math.max(out.y1, 0);
      out.x2 = Math.min(out.x2, loadedImage.transformed.size.width);
      out.y2 = Math.min(out.y2, loadedImage.transformed.size.height);
    }
    return out;
  }
  getResizeRatio(width, height, settings) {
    const ratioWidth = settings.resizeToWidth / width;
    const ratioHeight = settings.resizeToHeight / height;
    const ratios = new Array();
    if (settings.resizeToWidth > 0) {
      ratios.push(ratioWidth);
    }
    if (settings.resizeToHeight > 0) {
      ratios.push(ratioHeight);
    }
    const result = ratios.length === 0 ? 1 : Math.min(...ratios);
    if (result > 1 && !settings.onlyScaleDown) {
      return result;
    }
    return Math.min(result, 1);
  }
  getQuality(settings) {
    return Math.min(1, Math.max(0, settings.imageQuality / 100));
  }
};
CropService.\u0275fac = function CropService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CropService)();
};
CropService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: CropService,
  factory: CropService.\u0275fac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CropService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var CropperPositionService = class {
  resetCropperPosition(sourceImage, cropperPosition, settings) {
    if (!sourceImage?.nativeElement) {
      return;
    }
    const sourceImageElement = sourceImage.nativeElement;
    if (settings.cropperStaticHeight && settings.cropperStaticWidth) {
      cropperPosition.x1 = 0;
      cropperPosition.x2 = sourceImageElement.offsetWidth > settings.cropperStaticWidth ? settings.cropperStaticWidth : sourceImageElement.offsetWidth;
      cropperPosition.y1 = 0;
      cropperPosition.y2 = sourceImageElement.offsetHeight > settings.cropperStaticHeight ? settings.cropperStaticHeight : sourceImageElement.offsetHeight;
    } else {
      const cropperWidth = Math.min(settings.cropperScaledMaxWidth, sourceImageElement.offsetWidth);
      const cropperHeight = Math.min(settings.cropperScaledMaxHeight, sourceImageElement.offsetHeight);
      if (!settings.maintainAspectRatio) {
        cropperPosition.x1 = 0;
        cropperPosition.x2 = cropperWidth;
        cropperPosition.y1 = 0;
        cropperPosition.y2 = cropperHeight;
      } else if (sourceImageElement.offsetWidth / settings.aspectRatio < sourceImageElement.offsetHeight) {
        cropperPosition.x1 = 0;
        cropperPosition.x2 = cropperWidth;
        const cropperHeightWithAspectRatio = cropperWidth / settings.aspectRatio;
        cropperPosition.y1 = (sourceImageElement.offsetHeight - cropperHeightWithAspectRatio) / 2;
        cropperPosition.y2 = cropperPosition.y1 + cropperHeightWithAspectRatio;
      } else {
        cropperPosition.y1 = 0;
        cropperPosition.y2 = cropperHeight;
        const cropperWidthWithAspectRatio = cropperHeight * settings.aspectRatio;
        cropperPosition.x1 = (sourceImageElement.offsetWidth - cropperWidthWithAspectRatio) / 2;
        cropperPosition.x2 = cropperPosition.x1 + cropperWidthWithAspectRatio;
      }
    }
  }
  move(event2, moveStart, cropperPosition) {
    const diffX = this.getClientX(event2) - moveStart.clientX;
    const diffY = this.getClientY(event2) - moveStart.clientY;
    cropperPosition.x1 = moveStart.x1 + diffX;
    cropperPosition.y1 = moveStart.y1 + diffY;
    cropperPosition.x2 = moveStart.x2 + diffX;
    cropperPosition.y2 = moveStart.y2 + diffY;
  }
  resize(event2, moveStart, cropperPosition, maxSize, settings) {
    const moveX = this.getClientX(event2) - moveStart.clientX;
    const moveY = this.getClientY(event2) - moveStart.clientY;
    switch (moveStart.position) {
      case "left":
        cropperPosition.x1 = Math.min(Math.max(moveStart.x1 + moveX, cropperPosition.x2 - settings.cropperScaledMaxWidth), cropperPosition.x2 - settings.cropperScaledMinWidth);
        break;
      case "topleft":
        cropperPosition.x1 = Math.min(Math.max(moveStart.x1 + moveX, cropperPosition.x2 - settings.cropperScaledMaxWidth), cropperPosition.x2 - settings.cropperScaledMinWidth);
        cropperPosition.y1 = Math.min(Math.max(moveStart.y1 + moveY, cropperPosition.y2 - settings.cropperScaledMaxHeight), cropperPosition.y2 - settings.cropperScaledMinHeight);
        break;
      case "top":
        cropperPosition.y1 = Math.min(Math.max(moveStart.y1 + moveY, cropperPosition.y2 - settings.cropperScaledMaxHeight), cropperPosition.y2 - settings.cropperScaledMinHeight);
        break;
      case "topright":
        cropperPosition.x2 = Math.max(Math.min(moveStart.x2 + moveX, cropperPosition.x1 + settings.cropperScaledMaxWidth), cropperPosition.x1 + settings.cropperScaledMinWidth);
        cropperPosition.y1 = Math.min(Math.max(moveStart.y1 + moveY, cropperPosition.y2 - settings.cropperScaledMaxHeight), cropperPosition.y2 - settings.cropperScaledMinHeight);
        break;
      case "right":
        cropperPosition.x2 = Math.max(Math.min(moveStart.x2 + moveX, cropperPosition.x1 + settings.cropperScaledMaxWidth), cropperPosition.x1 + settings.cropperScaledMinWidth);
        break;
      case "bottomright":
        cropperPosition.x2 = Math.max(Math.min(moveStart.x2 + moveX, cropperPosition.x1 + settings.cropperScaledMaxWidth), cropperPosition.x1 + settings.cropperScaledMinWidth);
        cropperPosition.y2 = Math.max(Math.min(moveStart.y2 + moveY, cropperPosition.y1 + settings.cropperScaledMaxHeight), cropperPosition.y1 + settings.cropperScaledMinHeight);
        break;
      case "bottom":
        cropperPosition.y2 = Math.max(Math.min(moveStart.y2 + moveY, cropperPosition.y1 + settings.cropperScaledMaxHeight), cropperPosition.y1 + settings.cropperScaledMinHeight);
        break;
      case "bottomleft":
        cropperPosition.x1 = Math.min(Math.max(moveStart.x1 + moveX, cropperPosition.x2 - settings.cropperScaledMaxWidth), cropperPosition.x2 - settings.cropperScaledMinWidth);
        cropperPosition.y2 = Math.max(Math.min(moveStart.y2 + moveY, cropperPosition.y1 + settings.cropperScaledMaxHeight), cropperPosition.y1 + settings.cropperScaledMinHeight);
        break;
      case "center":
        const scale = event2.scale;
        const newWidth = Math.min(Math.max(settings.cropperScaledMinWidth, Math.abs(moveStart.x2 - moveStart.x1) * scale), settings.cropperScaledMaxWidth);
        const newHeight = Math.min(Math.max(settings.cropperScaledMinHeight, Math.abs(moveStart.y2 - moveStart.y1) * scale), settings.cropperScaledMaxHeight);
        cropperPosition.x1 = moveStart.clientX - newWidth / 2;
        cropperPosition.x2 = moveStart.clientX + newWidth / 2;
        cropperPosition.y1 = moveStart.clientY - newHeight / 2;
        cropperPosition.y2 = moveStart.clientY + newHeight / 2;
        if (cropperPosition.x1 < 0) {
          cropperPosition.x2 -= cropperPosition.x1;
          cropperPosition.x1 = 0;
        } else if (cropperPosition.x2 > maxSize.width) {
          cropperPosition.x1 -= cropperPosition.x2 - maxSize.width;
          cropperPosition.x2 = maxSize.width;
        }
        if (cropperPosition.y1 < 0) {
          cropperPosition.y2 -= cropperPosition.y1;
          cropperPosition.y1 = 0;
        } else if (cropperPosition.y2 > maxSize.height) {
          cropperPosition.y1 -= cropperPosition.y2 - maxSize.height;
          cropperPosition.y2 = maxSize.height;
        }
        break;
    }
    if (settings.maintainAspectRatio) {
      this.checkAspectRatio(moveStart.position, cropperPosition, maxSize, settings);
    }
  }
  checkAspectRatio(position, cropperPosition, maxSize, settings) {
    let overflowX = 0;
    let overflowY = 0;
    switch (position) {
      case "top":
        cropperPosition.x2 = cropperPosition.x1 + (cropperPosition.y2 - cropperPosition.y1) * settings.aspectRatio;
        overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
        overflowY = Math.max(0 - cropperPosition.y1, 0);
        if (overflowX > 0 || overflowY > 0) {
          cropperPosition.x2 -= overflowY * settings.aspectRatio > overflowX ? overflowY * settings.aspectRatio : overflowX;
          cropperPosition.y1 += overflowY * settings.aspectRatio > overflowX ? overflowY : overflowX / settings.aspectRatio;
        }
        break;
      case "bottom":
        cropperPosition.x2 = cropperPosition.x1 + (cropperPosition.y2 - cropperPosition.y1) * settings.aspectRatio;
        overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
        overflowY = Math.max(cropperPosition.y2 - maxSize.height, 0);
        if (overflowX > 0 || overflowY > 0) {
          cropperPosition.x2 -= overflowY * settings.aspectRatio > overflowX ? overflowY * settings.aspectRatio : overflowX;
          cropperPosition.y2 -= overflowY * settings.aspectRatio > overflowX ? overflowY : overflowX / settings.aspectRatio;
        }
        break;
      case "topleft":
        cropperPosition.y1 = cropperPosition.y2 - (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
        overflowX = Math.max(0 - cropperPosition.x1, 0);
        overflowY = Math.max(0 - cropperPosition.y1, 0);
        if (overflowX > 0 || overflowY > 0) {
          cropperPosition.x1 += overflowY * settings.aspectRatio > overflowX ? overflowY * settings.aspectRatio : overflowX;
          cropperPosition.y1 += overflowY * settings.aspectRatio > overflowX ? overflowY : overflowX / settings.aspectRatio;
        }
        break;
      case "topright":
        cropperPosition.y1 = cropperPosition.y2 - (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
        overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
        overflowY = Math.max(0 - cropperPosition.y1, 0);
        if (overflowX > 0 || overflowY > 0) {
          cropperPosition.x2 -= overflowY * settings.aspectRatio > overflowX ? overflowY * settings.aspectRatio : overflowX;
          cropperPosition.y1 += overflowY * settings.aspectRatio > overflowX ? overflowY : overflowX / settings.aspectRatio;
        }
        break;
      case "right":
      case "bottomright":
        cropperPosition.y2 = cropperPosition.y1 + (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
        overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
        overflowY = Math.max(cropperPosition.y2 - maxSize.height, 0);
        if (overflowX > 0 || overflowY > 0) {
          cropperPosition.x2 -= overflowY * settings.aspectRatio > overflowX ? overflowY * settings.aspectRatio : overflowX;
          cropperPosition.y2 -= overflowY * settings.aspectRatio > overflowX ? overflowY : overflowX / settings.aspectRatio;
        }
        break;
      case "left":
      case "bottomleft":
        cropperPosition.y2 = cropperPosition.y1 + (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
        overflowX = Math.max(0 - cropperPosition.x1, 0);
        overflowY = Math.max(cropperPosition.y2 - maxSize.height, 0);
        if (overflowX > 0 || overflowY > 0) {
          cropperPosition.x1 += overflowY * settings.aspectRatio > overflowX ? overflowY * settings.aspectRatio : overflowX;
          cropperPosition.y2 -= overflowY * settings.aspectRatio > overflowX ? overflowY : overflowX / settings.aspectRatio;
        }
        break;
      case "center":
        cropperPosition.x2 = cropperPosition.x1 + (cropperPosition.y2 - cropperPosition.y1) * settings.aspectRatio;
        cropperPosition.y2 = cropperPosition.y1 + (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
        const overflowX1 = Math.max(0 - cropperPosition.x1, 0);
        const overflowX2 = Math.max(cropperPosition.x2 - maxSize.width, 0);
        const overflowY1 = Math.max(cropperPosition.y2 - maxSize.height, 0);
        const overflowY2 = Math.max(0 - cropperPosition.y1, 0);
        if (overflowX1 > 0 || overflowX2 > 0 || overflowY1 > 0 || overflowY2 > 0) {
          cropperPosition.x1 += overflowY1 * settings.aspectRatio > overflowX1 ? overflowY1 * settings.aspectRatio : overflowX1;
          cropperPosition.x2 -= overflowY2 * settings.aspectRatio > overflowX2 ? overflowY2 * settings.aspectRatio : overflowX2;
          cropperPosition.y1 += overflowY2 * settings.aspectRatio > overflowX2 ? overflowY2 : overflowX2 / settings.aspectRatio;
          cropperPosition.y2 -= overflowY1 * settings.aspectRatio > overflowX1 ? overflowY1 : overflowX1 / settings.aspectRatio;
        }
        break;
    }
  }
  getClientX(event2) {
    return event2.touches?.[0].clientX || event2.clientX || 0;
  }
  getClientY(event2) {
    return event2.touches?.[0].clientY || event2.clientY || 0;
  }
};
CropperPositionService.\u0275fac = function CropperPositionService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CropperPositionService)();
};
CropperPositionService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: CropperPositionService,
  factory: CropperPositionService.\u0275fac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CropperPositionService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var testAutoOrientationImageURL = "data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==";
function supportsAutomaticRotation() {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const supported = img.width === 1 && img.height === 2;
      resolve(supported);
    };
    img.src = testAutoOrientationImageURL;
  });
}
function getTransformationsFromExifData(exifRotationOrBase64Image) {
  if (typeof exifRotationOrBase64Image === "string") {
    exifRotationOrBase64Image = getExifRotation(exifRotationOrBase64Image);
  }
  switch (exifRotationOrBase64Image) {
    case 2:
      return {
        rotate: 0,
        flip: true
      };
    case 3:
      return {
        rotate: 2,
        flip: false
      };
    case 4:
      return {
        rotate: 2,
        flip: true
      };
    case 5:
      return {
        rotate: 1,
        flip: true
      };
    case 6:
      return {
        rotate: 1,
        flip: false
      };
    case 7:
      return {
        rotate: 3,
        flip: true
      };
    case 8:
      return {
        rotate: 3,
        flip: false
      };
    default:
      return {
        rotate: 0,
        flip: false
      };
  }
}
function getExifRotation(imageBase64) {
  const view = new DataView(base64ToArrayBuffer(imageBase64));
  if (view.getUint16(0, false) !== 65496) {
    return -2;
  }
  const length = view.byteLength;
  let offset = 2;
  while (offset < length) {
    if (view.getUint16(offset + 2, false) <= 8) return -1;
    const marker = view.getUint16(offset, false);
    offset += 2;
    if (marker == 65505) {
      if (view.getUint32(offset += 2, false) !== 1165519206) {
        return -1;
      }
      const little = view.getUint16(offset += 6, false) == 18761;
      offset += view.getUint32(offset + 4, little);
      const tags = view.getUint16(offset, little);
      offset += 2;
      for (let i = 0; i < tags; i++) {
        if (view.getUint16(offset + i * 12, little) == 274) {
          return view.getUint16(offset + i * 12 + 8, little);
        }
      }
    } else if ((marker & 65280) !== 65280) {
      break;
    } else {
      offset += view.getUint16(offset, false);
    }
  }
  return -1;
}
function base64ToArrayBuffer(imageBase64) {
  imageBase64 = imageBase64.replace(/^data\:([^\;]+)\;base64,/gmi, "");
  const binaryString = atob(imageBase64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}
var LoadImageService = class {
  constructor() {
    this.autoRotateSupported = supportsAutomaticRotation();
  }
  loadImageFile(file, cropperSettings) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = (event2) => {
        this.loadImage(event2.target.result, file.type, cropperSettings).then(resolve).catch(reject);
      };
      fileReader.readAsDataURL(file);
    });
  }
  loadImage(imageBase64, imageType, cropperSettings) {
    if (!this.isValidImageType(imageType)) {
      return Promise.reject(new Error("Invalid image type"));
    }
    return this.loadBase64Image(imageBase64, cropperSettings);
  }
  isValidImageType(type) {
    return /image\/(png|jpg|jpeg|bmp|gif|tiff|webp|x-icon|vnd.microsoft.icon)/.test(type);
  }
  loadImageFromURL(url, cropperSettings) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onerror = () => reject;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        context?.drawImage(img, 0, 0);
        this.loadBase64Image(canvas.toDataURL(), cropperSettings).then(resolve);
      };
      img.crossOrigin = "anonymous";
      img.src = url;
    });
  }
  loadBase64Image(imageBase64, cropperSettings) {
    return new Promise((resolve, reject) => {
      const originalImage = new Image();
      originalImage.onload = () => resolve({
        originalImage,
        originalBase64: imageBase64
      });
      originalImage.onerror = reject;
      originalImage.src = imageBase64;
    }).then((res) => this.transformImageBase64(res, cropperSettings));
  }
  transformImageBase64(res, cropperSettings) {
    return __async(this, null, function* () {
      const autoRotate = yield this.autoRotateSupported;
      const exifTransform = yield getTransformationsFromExifData(autoRotate ? -1 : res.originalBase64);
      if (!res.originalImage || !res.originalImage.complete) {
        return Promise.reject(new Error("No image loaded"));
      }
      const loadedImage = {
        original: {
          base64: res.originalBase64,
          image: res.originalImage,
          size: {
            width: res.originalImage.naturalWidth,
            height: res.originalImage.naturalHeight
          }
        },
        exifTransform
      };
      return this.transformLoadedImage(loadedImage, cropperSettings);
    });
  }
  transformLoadedImage(loadedImage, cropperSettings) {
    return __async(this, null, function* () {
      const canvasRotation = cropperSettings.canvasRotation + loadedImage.exifTransform.rotate;
      const originalSize = {
        width: loadedImage.original.image.naturalWidth,
        height: loadedImage.original.image.naturalHeight
      };
      if (canvasRotation === 0 && !loadedImage.exifTransform.flip && !cropperSettings.containWithinAspectRatio) {
        return {
          original: {
            base64: loadedImage.original.base64,
            image: loadedImage.original.image,
            size: __spreadValues({}, originalSize)
          },
          transformed: {
            base64: loadedImage.original.base64,
            image: loadedImage.original.image,
            size: __spreadValues({}, originalSize)
          },
          exifTransform: loadedImage.exifTransform
        };
      }
      const transformedSize = this.getTransformedSize(originalSize, loadedImage.exifTransform, cropperSettings);
      const canvas = document.createElement("canvas");
      canvas.width = transformedSize.width;
      canvas.height = transformedSize.height;
      const ctx = canvas.getContext("2d");
      ctx?.setTransform(loadedImage.exifTransform.flip ? -1 : 1, 0, 0, 1, canvas.width / 2, canvas.height / 2);
      ctx?.rotate(Math.PI * (canvasRotation / 2));
      ctx?.drawImage(loadedImage.original.image, -originalSize.width / 2, -originalSize.height / 2);
      const transformedBase64 = canvas.toDataURL();
      const transformedImage = yield this.loadImageFromBase64(transformedBase64);
      return {
        original: {
          base64: loadedImage.original.base64,
          image: loadedImage.original.image,
          size: __spreadValues({}, originalSize)
        },
        transformed: {
          base64: transformedBase64,
          image: transformedImage,
          size: {
            width: transformedImage.width,
            height: transformedImage.height
          }
        },
        exifTransform: loadedImage.exifTransform
      };
    });
  }
  loadImageFromBase64(imageBase64) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = imageBase64;
    });
  }
  getTransformedSize(originalSize, exifTransform, cropperSettings) {
    const canvasRotation = cropperSettings.canvasRotation + exifTransform.rotate;
    if (cropperSettings.containWithinAspectRatio) {
      if (canvasRotation % 2) {
        const minWidthToContain = originalSize.width * cropperSettings.aspectRatio;
        const minHeightToContain = originalSize.height / cropperSettings.aspectRatio;
        return {
          width: Math.max(originalSize.height, minWidthToContain),
          height: Math.max(originalSize.width, minHeightToContain)
        };
      } else {
        const minWidthToContain = originalSize.height * cropperSettings.aspectRatio;
        const minHeightToContain = originalSize.width / cropperSettings.aspectRatio;
        return {
          width: Math.max(originalSize.width, minWidthToContain),
          height: Math.max(originalSize.height, minHeightToContain)
        };
      }
    }
    if (canvasRotation % 2) {
      return {
        height: originalSize.width,
        width: originalSize.height
      };
    }
    return {
      width: originalSize.width,
      height: originalSize.height
    };
  }
};
LoadImageService.\u0275fac = function LoadImageService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || LoadImageService)();
};
LoadImageService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: LoadImageService,
  factory: LoadImageService.\u0275fac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadImageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ImageCropperComponent = class {
  constructor(cropService, cropperPositionService, loadImageService, sanitizer, cd) {
    this.cropService = cropService;
    this.cropperPositionService = cropperPositionService;
    this.loadImageService = loadImageService;
    this.sanitizer = sanitizer;
    this.cd = cd;
    this.Hammer = window?.["Hammer"] || null;
    this.settings = new CropperSettings();
    this.setImageMaxSizeRetries = 0;
    this.resizedWhileHidden = false;
    this.marginLeft = "0px";
    this.maxSize = {
      width: 0,
      height: 0
    };
    this.moveTypes = MoveTypes;
    this.imageVisible = false;
    this.format = this.settings.format;
    this.transform = {};
    this.maintainAspectRatio = this.settings.maintainAspectRatio;
    this.aspectRatio = this.settings.aspectRatio;
    this.resetCropOnAspectRatioChange = this.settings.resetCropOnAspectRatioChange;
    this.resizeToWidth = this.settings.resizeToWidth;
    this.resizeToHeight = this.settings.resizeToHeight;
    this.cropperMinWidth = this.settings.cropperMinWidth;
    this.cropperMinHeight = this.settings.cropperMinHeight;
    this.cropperMaxHeight = this.settings.cropperMaxHeight;
    this.cropperMaxWidth = this.settings.cropperMaxWidth;
    this.cropperStaticWidth = this.settings.cropperStaticWidth;
    this.cropperStaticHeight = this.settings.cropperStaticHeight;
    this.canvasRotation = this.settings.canvasRotation;
    this.initialStepSize = this.settings.initialStepSize;
    this.roundCropper = this.settings.roundCropper;
    this.onlyScaleDown = this.settings.onlyScaleDown;
    this.imageQuality = this.settings.imageQuality;
    this.autoCrop = this.settings.autoCrop;
    this.backgroundColor = this.settings.backgroundColor;
    this.containWithinAspectRatio = this.settings.containWithinAspectRatio;
    this.hideResizeSquares = this.settings.hideResizeSquares;
    this.allowMoveImage = false;
    this.cropper = {
      x1: -100,
      y1: -100,
      x2: 1e4,
      y2: 1e4
    };
    this.alignImage = this.settings.alignImage;
    this.disabled = false;
    this.hidden = false;
    this.imageCropped = new EventEmitter();
    this.startCropImage = new EventEmitter();
    this.imageLoaded = new EventEmitter();
    this.cropperReady = new EventEmitter();
    this.loadImageFailed = new EventEmitter();
    this.transformChange = new EventEmitter();
    this.reset();
  }
  ngOnChanges(changes) {
    this.onChangesUpdateSettings(changes);
    this.onChangesInputImage(changes);
    if (this.loadedImage?.original.image.complete && (changes["containWithinAspectRatio"] || changes["canvasRotation"])) {
      this.loadImageService.transformLoadedImage(this.loadedImage, this.settings).then((res) => this.setLoadedImage(res)).catch((err) => this.loadImageError(err));
    }
    if (changes["cropper"] || changes["maintainAspectRatio"] || changes["aspectRatio"]) {
      this.setMaxSize();
      this.setCropperScaledMinSize();
      this.setCropperScaledMaxSize();
      if (this.maintainAspectRatio && (this.resetCropOnAspectRatioChange || !this.aspectRatioIsCorrect()) && (changes["maintainAspectRatio"] || changes["aspectRatio"])) {
        this.resetCropperPosition();
      } else if (changes["cropper"]) {
        this.checkCropperPosition(false);
        this.doAutoCrop();
      }
      this.cd.markForCheck();
    }
    if (changes["transform"]) {
      this.transform = this.transform || {};
      this.setCssTransform();
      this.doAutoCrop();
      this.cd.markForCheck();
    }
    if (changes["hidden"] && this.resizedWhileHidden && !this.hidden) {
      setTimeout(() => {
        this.onResize();
        this.resizedWhileHidden = false;
      });
    }
  }
  onChangesUpdateSettings(changes) {
    this.settings.setOptionsFromChanges(changes);
    if (this.settings.cropperStaticHeight && this.settings.cropperStaticWidth) {
      this.settings.setOptions({
        hideResizeSquares: true,
        cropperMinWidth: this.settings.cropperStaticWidth,
        cropperMinHeight: this.settings.cropperStaticHeight,
        cropperMaxHeight: this.settings.cropperStaticHeight,
        cropperMaxWidth: this.settings.cropperStaticWidth,
        maintainAspectRatio: false
      });
    }
  }
  onChangesInputImage(changes) {
    if (changes["imageChangedEvent"] || changes["imageURL"] || changes["imageBase64"] || changes["imageFile"]) {
      this.reset();
    }
    if (changes["imageChangedEvent"] && this.isValidImageChangedEvent()) {
      this.loadImageFile(this.imageChangedEvent.target.files[0]);
    }
    if (changes["imageURL"] && this.imageURL) {
      this.loadImageFromURL(this.imageURL);
    }
    if (changes["imageBase64"] && this.imageBase64) {
      this.loadBase64Image(this.imageBase64);
    }
    if (changes["imageFile"] && this.imageFile) {
      this.loadImageFile(this.imageFile);
    }
  }
  isValidImageChangedEvent() {
    return this.imageChangedEvent?.target?.files?.length > 0;
  }
  setCssTransform() {
    const translateUnit = this.transform?.translateUnit || "%";
    this.safeTransformStyle = this.sanitizer.bypassSecurityTrustStyle(`translate(${this.transform.translateH || 0}${translateUnit}, ${this.transform.translateV || 0}${translateUnit}) scaleX(` + (this.transform.scale || 1) * (this.transform.flipH ? -1 : 1) + ") scaleY(" + (this.transform.scale || 1) * (this.transform.flipV ? -1 : 1) + ") rotate(" + (this.transform.rotate || 0) + "deg)");
  }
  ngOnInit() {
    this.settings.stepSize = this.initialStepSize;
    this.activatePinchGesture();
  }
  reset() {
    this.imageVisible = false;
    this.loadedImage = void 0;
    this.safeImgDataUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=";
    this.moveStart = {
      active: false,
      type: null,
      position: null,
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0,
      clientX: 0,
      clientY: 0
    };
    this.maxSize = {
      width: 0,
      height: 0
    };
    this.cropper.x1 = -100;
    this.cropper.y1 = -100;
    this.cropper.x2 = 1e4;
    this.cropper.y2 = 1e4;
  }
  loadImageFile(file) {
    this.loadImageService.loadImageFile(file, this.settings).then((res) => this.setLoadedImage(res)).catch((err) => this.loadImageError(err));
  }
  loadBase64Image(imageBase64) {
    this.loadImageService.loadBase64Image(imageBase64, this.settings).then((res) => this.setLoadedImage(res)).catch((err) => this.loadImageError(err));
  }
  loadImageFromURL(url) {
    this.loadImageService.loadImageFromURL(url, this.settings).then((res) => this.setLoadedImage(res)).catch((err) => this.loadImageError(err));
  }
  setLoadedImage(loadedImage) {
    this.loadedImage = loadedImage;
    this.safeImgDataUrl = this.sanitizer.bypassSecurityTrustResourceUrl(loadedImage.transformed.base64);
    this.cd.markForCheck();
  }
  loadImageError(error) {
    console.error(error);
    this.loadImageFailed.emit();
  }
  imageLoadedInView() {
    if (this.loadedImage != null) {
      this.imageLoaded.emit(this.loadedImage);
      this.setImageMaxSizeRetries = 0;
      setTimeout(() => this.checkImageMaxSizeRecursively());
    }
  }
  checkImageMaxSizeRecursively() {
    if (this.setImageMaxSizeRetries > 40) {
      this.loadImageFailed.emit();
    } else if (this.sourceImageLoaded()) {
      this.setMaxSize();
      this.setCropperScaledMinSize();
      this.setCropperScaledMaxSize();
      this.resetCropperPosition();
      this.cropperReady.emit(__spreadValues({}, this.maxSize));
      this.cd.markForCheck();
    } else {
      this.setImageMaxSizeRetries++;
      setTimeout(() => this.checkImageMaxSizeRecursively(), 50);
    }
  }
  sourceImageLoaded() {
    return this.sourceImage?.nativeElement?.offsetWidth > 0;
  }
  onResize() {
    if (!this.loadedImage) {
      return;
    }
    if (this.hidden) {
      this.resizedWhileHidden = true;
    } else {
      this.resizeCropperPosition();
      this.setMaxSize();
      this.setCropperScaledMinSize();
      this.setCropperScaledMaxSize();
    }
  }
  activatePinchGesture() {
    if (this.Hammer) {
      const hammer = new this.Hammer(this.wrapper.nativeElement);
      hammer.get("pinch").set({
        enable: true
      });
      hammer.on("pinchmove", this.onPinch.bind(this));
      hammer.on("pinchend", this.pinchStop.bind(this));
      hammer.on("pinchstart", this.startPinch.bind(this));
    } else if (isDevMode()) {
      console.warn("[NgxImageCropper] Could not find HammerJS - Pinch Gesture won't work");
    }
  }
  resizeCropperPosition() {
    const sourceImageElement = this.sourceImage.nativeElement;
    if (this.maxSize.width !== sourceImageElement.offsetWidth || this.maxSize.height !== sourceImageElement.offsetHeight) {
      this.cropper.x1 = this.cropper.x1 * sourceImageElement.offsetWidth / this.maxSize.width;
      this.cropper.x2 = this.cropper.x2 * sourceImageElement.offsetWidth / this.maxSize.width;
      this.cropper.y1 = this.cropper.y1 * sourceImageElement.offsetHeight / this.maxSize.height;
      this.cropper.y2 = this.cropper.y2 * sourceImageElement.offsetHeight / this.maxSize.height;
    }
  }
  resetCropperPosition() {
    this.cropperPositionService.resetCropperPosition(this.sourceImage, this.cropper, this.settings);
    this.doAutoCrop();
    this.imageVisible = true;
  }
  keyboardAccess(event2) {
    this.changeKeyboardStepSize(event2);
    this.keyboardMoveCropper(event2);
  }
  changeKeyboardStepSize(event2) {
    const key = +event2.key;
    if (key >= 1 && key <= 9) {
      this.settings.stepSize = key;
    }
  }
  keyboardMoveCropper(event2) {
    const keyboardWhiteList = ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft"];
    if (!keyboardWhiteList.includes(event2.key)) {
      return;
    }
    const moveType = event2.shiftKey ? MoveTypes.Resize : MoveTypes.Move;
    const position = event2.altKey ? getInvertedPositionForKey(event2.key) : getPositionForKey(event2.key);
    const moveEvent = getEventForKey(event2.key, this.settings.stepSize);
    event2.preventDefault();
    event2.stopPropagation();
    this.startMove({
      clientX: 0,
      clientY: 0
    }, moveType, position);
    this.moveImg(moveEvent);
    this.moveStop();
  }
  startMove(event2, moveType, position = null) {
    if (this.disabled || this.moveStart?.active && this.moveStart?.type === MoveTypes.Pinch || moveType === MoveTypes.Drag && !this.allowMoveImage) {
      return;
    }
    if (event2.preventDefault) {
      event2.preventDefault();
    }
    this.moveStart = __spreadValues({
      active: true,
      type: moveType,
      position,
      transform: __spreadValues({}, this.transform),
      clientX: this.cropperPositionService.getClientX(event2),
      clientY: this.cropperPositionService.getClientY(event2)
    }, this.cropper);
  }
  startPinch(event2) {
    if (!this.safeImgDataUrl) {
      return;
    }
    if (event2.preventDefault) {
      event2.preventDefault();
    }
    this.moveStart = __spreadValues({
      active: true,
      type: MoveTypes.Pinch,
      position: "center",
      clientX: this.cropper.x1 + (this.cropper.x2 - this.cropper.x1) / 2,
      clientY: this.cropper.y1 + (this.cropper.y2 - this.cropper.y1) / 2
    }, this.cropper);
  }
  moveImg(event2) {
    if (this.moveStart.active) {
      if (event2.stopPropagation) {
        event2.stopPropagation();
      }
      if (event2.preventDefault) {
        event2.preventDefault();
      }
      if (this.moveStart.type === MoveTypes.Move) {
        this.cropperPositionService.move(event2, this.moveStart, this.cropper);
        this.checkCropperPosition(true);
      } else if (this.moveStart.type === MoveTypes.Resize) {
        if (!this.cropperStaticWidth && !this.cropperStaticHeight) {
          this.cropperPositionService.resize(event2, this.moveStart, this.cropper, this.maxSize, this.settings);
        }
        this.checkCropperPosition(false);
      } else if (this.moveStart.type === MoveTypes.Drag) {
        const diffX = this.cropperPositionService.getClientX(event2) - this.moveStart.clientX;
        const diffY = this.cropperPositionService.getClientY(event2) - this.moveStart.clientY;
        this.transform = __spreadProps(__spreadValues({}, this.transform), {
          translateH: (this.moveStart.transform?.translateH || 0) + diffX,
          translateV: (this.moveStart.transform?.translateV || 0) + diffY
        });
        this.setCssTransform();
      }
      this.cd.detectChanges();
    }
  }
  onPinch(event2) {
    if (this.moveStart.active) {
      if (event2.stopPropagation) {
        event2.stopPropagation();
      }
      if (event2.preventDefault) {
        event2.preventDefault();
      }
      if (this.moveStart.type === MoveTypes.Pinch) {
        this.cropperPositionService.resize(event2, this.moveStart, this.cropper, this.maxSize, this.settings);
        this.checkCropperPosition(false);
      }
      this.cd.detectChanges();
    }
  }
  setMaxSize() {
    if (this.sourceImage) {
      const sourceImageElement = this.sourceImage.nativeElement;
      this.maxSize.width = sourceImageElement.offsetWidth;
      this.maxSize.height = sourceImageElement.offsetHeight;
      this.marginLeft = this.sanitizer.bypassSecurityTrustStyle("calc(50% - " + this.maxSize.width / 2 + "px)");
    }
  }
  setCropperScaledMinSize() {
    if (this.loadedImage?.transformed?.image) {
      this.setCropperScaledMinWidth();
      this.setCropperScaledMinHeight();
    } else {
      this.settings.cropperScaledMinWidth = 20;
      this.settings.cropperScaledMinHeight = 20;
    }
  }
  setCropperScaledMinWidth() {
    this.settings.cropperScaledMinWidth = this.cropperMinWidth > 0 ? Math.max(20, this.cropperMinWidth / this.loadedImage.transformed.image.width * this.maxSize.width) : 20;
  }
  setCropperScaledMinHeight() {
    if (this.maintainAspectRatio) {
      this.settings.cropperScaledMinHeight = Math.max(20, this.settings.cropperScaledMinWidth / this.aspectRatio);
    } else if (this.cropperMinHeight > 0) {
      this.settings.cropperScaledMinHeight = Math.max(20, this.cropperMinHeight / this.loadedImage.transformed.image.height * this.maxSize.height);
    } else {
      this.settings.cropperScaledMinHeight = 20;
    }
  }
  setCropperScaledMaxSize() {
    if (this.loadedImage?.transformed?.image) {
      const ratio = this.loadedImage.transformed.size.width / this.maxSize.width;
      this.settings.cropperScaledMaxWidth = this.cropperMaxWidth > 20 ? this.cropperMaxWidth / ratio : this.maxSize.width;
      this.settings.cropperScaledMaxHeight = this.cropperMaxHeight > 20 ? this.cropperMaxHeight / ratio : this.maxSize.height;
      if (this.maintainAspectRatio) {
        if (this.settings.cropperScaledMaxWidth > this.settings.cropperScaledMaxHeight * this.aspectRatio) {
          this.settings.cropperScaledMaxWidth = this.settings.cropperScaledMaxHeight * this.aspectRatio;
        } else if (this.settings.cropperScaledMaxWidth < this.settings.cropperScaledMaxHeight * this.aspectRatio) {
          this.settings.cropperScaledMaxHeight = this.settings.cropperScaledMaxWidth / this.aspectRatio;
        }
      }
    } else {
      this.settings.cropperScaledMaxWidth = this.maxSize.width;
      this.settings.cropperScaledMaxHeight = this.maxSize.height;
    }
  }
  checkCropperPosition(maintainSize = false) {
    if (this.cropper.x1 < 0) {
      this.cropper.x2 -= maintainSize ? this.cropper.x1 : 0;
      this.cropper.x1 = 0;
    }
    if (this.cropper.y1 < 0) {
      this.cropper.y2 -= maintainSize ? this.cropper.y1 : 0;
      this.cropper.y1 = 0;
    }
    if (this.cropper.x2 > this.maxSize.width) {
      this.cropper.x1 -= maintainSize ? this.cropper.x2 - this.maxSize.width : 0;
      this.cropper.x2 = this.maxSize.width;
    }
    if (this.cropper.y2 > this.maxSize.height) {
      this.cropper.y1 -= maintainSize ? this.cropper.y2 - this.maxSize.height : 0;
      this.cropper.y2 = this.maxSize.height;
    }
  }
  moveStop() {
    if (this.moveStart.active) {
      this.moveStart.active = false;
      if (this.moveStart?.type === MoveTypes.Drag) {
        this.transformChange.emit(this.transform);
      } else {
        this.doAutoCrop();
      }
    }
  }
  pinchStop() {
    if (this.moveStart.active) {
      this.moveStart.active = false;
      this.doAutoCrop();
    }
  }
  doAutoCrop() {
    if (this.autoCrop) {
      this.crop();
    }
  }
  crop() {
    if (this.loadedImage?.transformed?.image != null) {
      this.startCropImage.emit();
      const output = this.cropService.crop(this.sourceImage, this.loadedImage, this.cropper, this.settings);
      if (output != null) {
        this.imageCropped.emit(output);
      }
      return output;
    }
    return null;
  }
  aspectRatioIsCorrect() {
    const currentCropAspectRatio = (this.cropper.x2 - this.cropper.x1) / (this.cropper.y2 - this.cropper.y1);
    return currentCropAspectRatio === this.aspectRatio;
  }
};
ImageCropperComponent.\u0275fac = function ImageCropperComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ImageCropperComponent)(\u0275\u0275directiveInject(CropService), \u0275\u0275directiveInject(CropperPositionService), \u0275\u0275directiveInject(LoadImageService), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(ChangeDetectorRef));
};
ImageCropperComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: ImageCropperComponent,
  selectors: [["image-cropper"]],
  viewQuery: function ImageCropperComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 7);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.wrapper = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sourceImage = _t.first);
    }
  },
  hostVars: 6,
  hostBindings: function ImageCropperComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function ImageCropperComponent_resize_HostBindingHandler() {
        return ctx.onResize();
      }, false, \u0275\u0275resolveWindow)("mousemove", function ImageCropperComponent_mousemove_HostBindingHandler($event) {
        return ctx.moveImg($event);
      }, false, \u0275\u0275resolveDocument)("touchmove", function ImageCropperComponent_touchmove_HostBindingHandler($event) {
        return ctx.moveImg($event);
      }, false, \u0275\u0275resolveDocument)("mouseup", function ImageCropperComponent_mouseup_HostBindingHandler() {
        return ctx.moveStop();
      }, false, \u0275\u0275resolveDocument)("touchend", function ImageCropperComponent_touchend_HostBindingHandler() {
        return ctx.moveStop();
      }, false, \u0275\u0275resolveDocument);
    }
    if (rf & 2) {
      \u0275\u0275styleProp("text-align", ctx.alignImage);
      \u0275\u0275classProp("disabled", ctx.disabled)("ngx-ix-hidden", ctx.hidden);
    }
  },
  inputs: {
    imageChangedEvent: "imageChangedEvent",
    imageURL: "imageURL",
    imageBase64: "imageBase64",
    imageFile: "imageFile",
    imageAltText: "imageAltText",
    format: "format",
    transform: "transform",
    maintainAspectRatio: "maintainAspectRatio",
    aspectRatio: "aspectRatio",
    resetCropOnAspectRatioChange: "resetCropOnAspectRatioChange",
    resizeToWidth: "resizeToWidth",
    resizeToHeight: "resizeToHeight",
    cropperMinWidth: "cropperMinWidth",
    cropperMinHeight: "cropperMinHeight",
    cropperMaxHeight: "cropperMaxHeight",
    cropperMaxWidth: "cropperMaxWidth",
    cropperStaticWidth: "cropperStaticWidth",
    cropperStaticHeight: "cropperStaticHeight",
    canvasRotation: "canvasRotation",
    initialStepSize: "initialStepSize",
    roundCropper: "roundCropper",
    onlyScaleDown: "onlyScaleDown",
    imageQuality: "imageQuality",
    autoCrop: "autoCrop",
    backgroundColor: "backgroundColor",
    containWithinAspectRatio: "containWithinAspectRatio",
    hideResizeSquares: "hideResizeSquares",
    allowMoveImage: "allowMoveImage",
    cropper: "cropper",
    alignImage: "alignImage",
    disabled: "disabled",
    hidden: "hidden"
  },
  outputs: {
    imageCropped: "imageCropped",
    startCropImage: "startCropImage",
    imageLoaded: "imageLoaded",
    cropperReady: "cropperReady",
    loadImageFailed: "loadImageFailed",
    transformChange: "transformChange"
  },
  features: [\u0275\u0275NgOnChangesFeature],
  decls: 5,
  vars: 10,
  consts: [["wrapper", ""], ["sourceImage", ""], ["class", "ngx-ic-source-image", 3, "src", "visibility", "transform", "ngx-ic-draggable", "load", "mousedown", "touchstart", "error", 4, "ngIf"], [1, "ngx-ic-overlay"], ["class", "ngx-ic-cropper", "tabindex", "0", 3, "ngx-ic-round", "top", "left", "width", "height", "margin-left", "visibility", "keydown", 4, "ngIf"], [1, "ngx-ic-source-image", 3, "load", "mousedown", "touchstart", "error", "src"], ["tabindex", "0", 1, "ngx-ic-cropper", 3, "keydown"], [1, "ngx-ic-move", 3, "mousedown", "touchstart"], [4, "ngIf"], [1, "ngx-ic-resize", "ngx-ic-topleft", 3, "mousedown", "touchstart"], [1, "ngx-ic-square"], [1, "ngx-ic-resize", "ngx-ic-top"], [1, "ngx-ic-resize", "ngx-ic-topright", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize", "ngx-ic-right"], [1, "ngx-ic-resize", "ngx-ic-bottomright", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize", "ngx-ic-bottom"], [1, "ngx-ic-resize", "ngx-ic-bottomleft", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize", "ngx-ic-left"], [1, "ngx-ic-resize-bar", "ngx-ic-top", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize-bar", "ngx-ic-right", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize-bar", "ngx-ic-bottom", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize-bar", "ngx-ic-left", 3, "mousedown", "touchstart"]],
  template: function ImageCropperComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", null, 0);
      \u0275\u0275template(2, ImageCropperComponent_img_2_Template, 2, 8, "img", 2);
      \u0275\u0275element(3, "div", 3);
      \u0275\u0275template(4, ImageCropperComponent_div_4_Template, 3, 15, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("background", ctx.imageVisible && ctx.backgroundColor);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.safeImgDataUrl);
      \u0275\u0275advance();
      \u0275\u0275styleProp("width", ctx.maxSize.width, "px")("height", ctx.maxSize.height, "px")("margin-left", ctx.alignImage === "center" ? ctx.marginLeft : null);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.imageVisible);
    }
  },
  dependencies: [NgIf],
  styles: ['[_nghost-%COMP%]{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{width:100%;position:relative}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   img.ngx-ic-source-image[_ngcontent-%COMP%]{max-width:100%;max-height:100%;transform-origin:center}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   img.ngx-ic-source-image.ngx-ic-draggable[_ngcontent-%COMP%]{user-drag:none;-webkit-user-drag:none;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;cursor:grab}[_nghost-%COMP%]   .ngx-ic-overlay[_ngcontent-%COMP%]{position:absolute;pointer-events:none;touch-action:none;outline:var(--cropper-overlay-color, white) solid 100vw;top:0;left:0}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]{position:absolute;display:flex;color:#53535c;background:transparent;outline:rgba(255,255,255,.3) solid 100vw;outline:var(--cropper-outline-color, rgba(255, 255, 255, .3)) solid 100vw;touch-action:none}@media (orientation: portrait){[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]{outline-width:100vh}}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]:after{position:absolute;content:"";inset:0;pointer-events:none;border:dashed 1px;opacity:.75;color:inherit;z-index:1}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-move[_ngcontent-%COMP%]{width:100%;cursor:move;border:1px solid rgba(255,255,255,.5)}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]:focus   .ngx-ic-move[_ngcontent-%COMP%]{border-color:#1e90ff;border-width:2px}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%]{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%]   .ngx-ic-square[_ngcontent-%COMP%]{display:inline-block;background:#53535C;width:6px;height:6px;border:1px solid rgba(255,255,255,.5);box-sizing:content-box}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-topleft[_ngcontent-%COMP%]{top:-12px;left:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-top[_ngcontent-%COMP%]{top:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-topright[_ngcontent-%COMP%]{top:-12px;right:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-right[_ngcontent-%COMP%]{top:calc(50% - 12px);right:-12px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-bottomright[_ngcontent-%COMP%]{bottom:-12px;right:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-bottom[_ngcontent-%COMP%]{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-bottomleft[_ngcontent-%COMP%]{bottom:-12px;left:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-left[_ngcontent-%COMP%]{top:calc(50% - 12px);left:-12px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar[_ngcontent-%COMP%]{position:absolute;z-index:1}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-top[_ngcontent-%COMP%]{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-right[_ngcontent-%COMP%]{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-bottom[_ngcontent-%COMP%]{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-left[_ngcontent-%COMP%]{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]{outline-color:transparent}[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]:after{border-radius:100%;box-shadow:0 0 0 100vw #ffffff4d;box-shadow:0 0 0 100vw var(--cropper-outline-color, rgba(255, 255, 255, .3))}@media (orientation: portrait){[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]:after{box-shadow:0 0 0 100vh #ffffff4d;box-shadow:0 0 0 100vh var(--cropper-outline-color, rgba(255, 255, 255, .3))}}[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]   .ngx-ic-move[_ngcontent-%COMP%]{border-radius:100%}.disabled[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-move[_ngcontent-%COMP%]{display:none}.ngx-ix-hidden[_nghost-%COMP%]{display:none}'],
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImageCropperComponent, [{
    type: Component,
    args: [{
      selector: "image-cropper",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div
  [style.background]="imageVisible && backgroundColor"
  #wrapper
>
  <img
    #sourceImage
    class="ngx-ic-source-image"
    *ngIf="safeImgDataUrl"
    [src]="safeImgDataUrl"
    [style.visibility]="imageVisible ? 'visible' : 'hidden'"
    [style.transform]="safeTransformStyle"
    [class.ngx-ic-draggable]="!disabled && allowMoveImage"
    [attr.alt]="imageAltText"
    (load)="imageLoadedInView()"
    (mousedown)="startMove($event, moveTypes.Drag)"
    (touchstart)="startMove($event, moveTypes.Drag)"
    (error)="loadImageError($event)"
  >
  <div
    class="ngx-ic-overlay"
    [style.width.px]="maxSize.width"
    [style.height.px]="maxSize.height"
    [style.margin-left]="alignImage === 'center' ? marginLeft : null"
  ></div>
  <div class="ngx-ic-cropper"
       *ngIf="imageVisible"
       [class.ngx-ic-round]="roundCropper"
       [style.top.px]="cropper.y1"
       [style.left.px]="cropper.x1"
       [style.width.px]="cropper.x2 - cropper.x1"
       [style.height.px]="cropper.y2 - cropper.y1"
       [style.margin-left]="alignImage === 'center' ? marginLeft : null"
       [style.visibility]="imageVisible ? 'visible' : 'hidden'"
       (keydown)="keyboardAccess($event)"
       tabindex="0"
  >
    <div
      (mousedown)="startMove($event, moveTypes.Move)"
      (touchstart)="startMove($event, moveTypes.Move)"
      class="ngx-ic-move">
    </div>
    <ng-container *ngIf="!hideResizeSquares">
            <span class="ngx-ic-resize ngx-ic-topleft"
                  (mousedown)="startMove($event, moveTypes.Resize, 'topleft')"
                  (touchstart)="startMove($event, moveTypes.Resize, 'topleft')">
                <span class="ngx-ic-square"></span>
            </span>
      <span class="ngx-ic-resize ngx-ic-top">
                <span class="ngx-ic-square"></span>
            </span>
      <span class="ngx-ic-resize ngx-ic-topright"
            (mousedown)="startMove($event, moveTypes.Resize, 'topright')"
            (touchstart)="startMove($event, moveTypes.Resize, 'topright')">
                <span class="ngx-ic-square"></span>
            </span>
      <span class="ngx-ic-resize ngx-ic-right">
                <span class="ngx-ic-square"></span>
            </span>
      <span class="ngx-ic-resize ngx-ic-bottomright"
            (mousedown)="startMove($event, moveTypes.Resize, 'bottomright')"
            (touchstart)="startMove($event, moveTypes.Resize, 'bottomright')">
                <span class="ngx-ic-square"></span>
            </span>
      <span class="ngx-ic-resize ngx-ic-bottom">
                <span class="ngx-ic-square"></span>
            </span>
      <span class="ngx-ic-resize ngx-ic-bottomleft"
            (mousedown)="startMove($event, moveTypes.Resize, 'bottomleft')"
            (touchstart)="startMove($event, moveTypes.Resize, 'bottomleft')">
                <span class="ngx-ic-square"></span>
            </span>
      <span class="ngx-ic-resize ngx-ic-left">
                <span class="ngx-ic-square"></span>
            </span>
      <span class="ngx-ic-resize-bar ngx-ic-top"
            (mousedown)="startMove($event, moveTypes.Resize, 'top')"
            (touchstart)="startMove($event, moveTypes.Resize, 'top')">
            </span>
      <span class="ngx-ic-resize-bar ngx-ic-right"
            (mousedown)="startMove($event, moveTypes.Resize, 'right')"
            (touchstart)="startMove($event, moveTypes.Resize, 'right')">
            </span>
      <span class="ngx-ic-resize-bar ngx-ic-bottom"
            (mousedown)="startMove($event, moveTypes.Resize, 'bottom')"
            (touchstart)="startMove($event, moveTypes.Resize, 'bottom')">
            </span>
      <span class="ngx-ic-resize-bar ngx-ic-left"
            (mousedown)="startMove($event, moveTypes.Resize, 'left')"
            (touchstart)="startMove($event, moveTypes.Resize, 'left')">
            </span>
    </ng-container>
  </div>
</div>
`,
      styles: [':host{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center}:host>div{width:100%;position:relative}:host>div img.ngx-ic-source-image{max-width:100%;max-height:100%;transform-origin:center}:host>div img.ngx-ic-source-image.ngx-ic-draggable{user-drag:none;-webkit-user-drag:none;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;cursor:grab}:host .ngx-ic-overlay{position:absolute;pointer-events:none;touch-action:none;outline:var(--cropper-overlay-color, white) solid 100vw;top:0;left:0}:host .ngx-ic-cropper{position:absolute;display:flex;color:#53535c;background:transparent;outline:rgba(255,255,255,.3) solid 100vw;outline:var(--cropper-outline-color, rgba(255, 255, 255, .3)) solid 100vw;touch-action:none}@media (orientation: portrait){:host .ngx-ic-cropper{outline-width:100vh}}:host .ngx-ic-cropper:after{position:absolute;content:"";inset:0;pointer-events:none;border:dashed 1px;opacity:.75;color:inherit;z-index:1}:host .ngx-ic-cropper .ngx-ic-move{width:100%;cursor:move;border:1px solid rgba(255,255,255,.5)}:host .ngx-ic-cropper:focus .ngx-ic-move{border-color:#1e90ff;border-width:2px}:host .ngx-ic-cropper .ngx-ic-resize{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}:host .ngx-ic-cropper .ngx-ic-resize .ngx-ic-square{display:inline-block;background:#53535C;width:6px;height:6px;border:1px solid rgba(255,255,255,.5);box-sizing:content-box}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-topleft{top:-12px;left:-12px;cursor:nwse-resize}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-top{top:-12px;left:calc(50% - 12px);cursor:ns-resize}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-topright{top:-12px;right:-12px;cursor:nesw-resize}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-right{top:calc(50% - 12px);right:-12px;cursor:ew-resize}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-bottomright{bottom:-12px;right:-12px;cursor:nwse-resize}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-bottom{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-bottomleft{bottom:-12px;left:-12px;cursor:nesw-resize}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-left{top:calc(50% - 12px);left:-12px;cursor:ew-resize}:host .ngx-ic-cropper .ngx-ic-resize-bar{position:absolute;z-index:1}:host .ngx-ic-cropper .ngx-ic-resize-bar.ngx-ic-top{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}:host .ngx-ic-cropper .ngx-ic-resize-bar.ngx-ic-right{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}:host .ngx-ic-cropper .ngx-ic-resize-bar.ngx-ic-bottom{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}:host .ngx-ic-cropper .ngx-ic-resize-bar.ngx-ic-left{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}:host .ngx-ic-cropper.ngx-ic-round{outline-color:transparent}:host .ngx-ic-cropper.ngx-ic-round:after{border-radius:100%;box-shadow:0 0 0 100vw #ffffff4d;box-shadow:0 0 0 100vw var(--cropper-outline-color, rgba(255, 255, 255, .3))}@media (orientation: portrait){:host .ngx-ic-cropper.ngx-ic-round:after{box-shadow:0 0 0 100vh #ffffff4d;box-shadow:0 0 0 100vh var(--cropper-outline-color, rgba(255, 255, 255, .3))}}:host .ngx-ic-cropper.ngx-ic-round .ngx-ic-move{border-radius:100%}:host.disabled .ngx-ic-cropper .ngx-ic-resize,:host.disabled .ngx-ic-cropper .ngx-ic-resize-bar,:host.disabled .ngx-ic-cropper .ngx-ic-move{display:none}:host.ngx-ix-hidden{display:none}\n']
    }]
  }], function() {
    return [{
      type: CropService
    }, {
      type: CropperPositionService
    }, {
      type: LoadImageService
    }, {
      type: DomSanitizer
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    wrapper: [{
      type: ViewChild,
      args: ["wrapper", {
        static: true
      }]
    }],
    sourceImage: [{
      type: ViewChild,
      args: ["sourceImage", {
        static: false
      }]
    }],
    imageChangedEvent: [{
      type: Input
    }],
    imageURL: [{
      type: Input
    }],
    imageBase64: [{
      type: Input
    }],
    imageFile: [{
      type: Input
    }],
    imageAltText: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    transform: [{
      type: Input
    }],
    maintainAspectRatio: [{
      type: Input
    }],
    aspectRatio: [{
      type: Input
    }],
    resetCropOnAspectRatioChange: [{
      type: Input
    }],
    resizeToWidth: [{
      type: Input
    }],
    resizeToHeight: [{
      type: Input
    }],
    cropperMinWidth: [{
      type: Input
    }],
    cropperMinHeight: [{
      type: Input
    }],
    cropperMaxHeight: [{
      type: Input
    }],
    cropperMaxWidth: [{
      type: Input
    }],
    cropperStaticWidth: [{
      type: Input
    }],
    cropperStaticHeight: [{
      type: Input
    }],
    canvasRotation: [{
      type: Input
    }],
    initialStepSize: [{
      type: Input
    }],
    roundCropper: [{
      type: Input
    }],
    onlyScaleDown: [{
      type: Input
    }],
    imageQuality: [{
      type: Input
    }],
    autoCrop: [{
      type: Input
    }],
    backgroundColor: [{
      type: Input
    }],
    containWithinAspectRatio: [{
      type: Input
    }],
    hideResizeSquares: [{
      type: Input
    }],
    allowMoveImage: [{
      type: Input
    }],
    cropper: [{
      type: Input
    }],
    alignImage: [{
      type: HostBinding,
      args: ["style.text-align"]
    }, {
      type: Input
    }],
    disabled: [{
      type: HostBinding,
      args: ["class.disabled"]
    }, {
      type: Input
    }],
    hidden: [{
      type: HostBinding,
      args: ["class.ngx-ix-hidden"]
    }, {
      type: Input
    }],
    imageCropped: [{
      type: Output
    }],
    startCropImage: [{
      type: Output
    }],
    imageLoaded: [{
      type: Output
    }],
    cropperReady: [{
      type: Output
    }],
    loadImageFailed: [{
      type: Output
    }],
    transformChange: [{
      type: Output
    }],
    onResize: [{
      type: HostListener,
      args: ["window:resize"]
    }],
    moveImg: [{
      type: HostListener,
      args: ["document:mousemove", ["$event"]]
    }, {
      type: HostListener,
      args: ["document:touchmove", ["$event"]]
    }],
    moveStop: [{
      type: HostListener,
      args: ["document:mouseup"]
    }, {
      type: HostListener,
      args: ["document:touchend"]
    }]
  });
})();
var ImageCropperModule = class {
};
ImageCropperModule.\u0275fac = function ImageCropperModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ImageCropperModule)();
};
ImageCropperModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: ImageCropperModule
});
ImageCropperModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImageCropperModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [ImageCropperComponent],
      exports: [ImageCropperComponent]
    }]
  }], null, null);
})();

// node_modules/angular-ng-autocomplete/fesm2020/angular-ng-autocomplete.mjs
var _c02 = ["searchInput"];
var _c12 = ["filteredListElement"];
var _c2 = ["historyListElement"];
var _c3 = (a0) => ({
  "active": a0
});
var _c4 = (a0, a1) => ({
  "is-hidden": a0,
  "is-visible": a1
});
var _c5 = (a0) => ({
  $implicit: a0
});
function AutocompleteComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275listener("click", function AutocompleteComponent_div_4_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.remove($event));
    });
    \u0275\u0275elementStart(1, "i", 15);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function AutocompleteComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "div", 17)(2, "div", 18)(3, "div", 19)(4, "div", 20)(5, "div", 21)(6, "div", 22)(7, "div", 23)(8, "div", 24)(9, "div", 25)(10, "div", 26)(11, "div", 27)(12, "div", 28);
    \u0275\u0275elementEnd();
  }
}
function AutocompleteComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.heading);
  }
}
function AutocompleteComponent_li_10_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AutocompleteComponent_li_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275listener("click", function AutocompleteComponent_li_10_div_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const item_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.select(item_r5));
    });
    \u0275\u0275template(1, AutocompleteComponent_li_10_div_1_ng_container_1_Template, 1, 0, "ng-container", 34);
    \u0275\u0275pipe(2, "highlight");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    const item_r5 = ctx_r5.$implicit;
    const idx_r7 = ctx_r5.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("complete-selected", idx_r7 === ctx_r2.selectedIdx);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(7, _c5, \u0275\u0275pipeBind2(2, 4, item_r5, ctx_r2.toHighlight)));
  }
}
function AutocompleteComponent_li_10_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AutocompleteComponent_li_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275listener("click", function AutocompleteComponent_li_10_div_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const item_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.select(item_r5));
    });
    \u0275\u0275template(1, AutocompleteComponent_li_10_div_2_ng_container_1_Template, 1, 0, "ng-container", 34);
    \u0275\u0275pipe(2, "highlight");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    const item_r5 = ctx_r5.$implicit;
    const idx_r7 = ctx_r5.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("complete-selected", idx_r7 === ctx_r2.selectedIdx);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(8, _c5, \u0275\u0275pipeBind3(2, 4, item_r5, ctx_r2.toHighlight, ctx_r2.searchKeyword)));
  }
}
function AutocompleteComponent_li_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 31);
    \u0275\u0275template(1, AutocompleteComponent_li_10_div_1_Template, 3, 9, "div", 32)(2, AutocompleteComponent_li_10_div_2_Template, 3, 10, "div", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isTypeString(item_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isTypeString(item_r5));
  }
}
function AutocompleteComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14);
    \u0275\u0275listener("click", function AutocompleteComponent_div_12_Template_div_click_3_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resetHistoryList($event));
    });
    \u0275\u0275elementStart(4, "i", 35);
    \u0275\u0275text(5, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.historyHeading);
  }
}
function AutocompleteComponent_li_15_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AutocompleteComponent_li_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275listener("click", function AutocompleteComponent_li_15_div_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const item_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.select(item_r12));
    });
    \u0275\u0275template(1, AutocompleteComponent_li_15_div_1_ng_container_1_Template, 1, 0, "ng-container", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r12 = \u0275\u0275nextContext();
    const item_r12 = ctx_r12.$implicit;
    const idx_r14 = ctx_r12.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("complete-selected", idx_r14 === ctx_r2.selectedIdx);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(4, _c5, item_r12));
  }
}
function AutocompleteComponent_li_15_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AutocompleteComponent_li_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275listener("click", function AutocompleteComponent_li_15_div_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const item_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.select(item_r12));
    });
    \u0275\u0275template(1, AutocompleteComponent_li_15_div_2_ng_container_1_Template, 1, 0, "ng-container", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r12 = \u0275\u0275nextContext();
    const item_r12 = ctx_r12.$implicit;
    const idx_r14 = ctx_r12.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("complete-selected", idx_r14 === ctx_r2.selectedIdx);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(4, _c5, item_r12));
  }
}
function AutocompleteComponent_li_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 31);
    \u0275\u0275template(1, AutocompleteComponent_li_15_div_1_Template, 2, 6, "div", 32)(2, AutocompleteComponent_li_15_div_2_Template, 2, 6, "div", 32);
    \u0275\u0275elementStart(3, "div", 14);
    \u0275\u0275listener("click", function AutocompleteComponent_li_15_Template_div_click_3_listener($event) {
      const idx_r14 = \u0275\u0275restoreView(_r10).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeHistoryItem(idx_r14, $event));
    });
    \u0275\u0275elementStart(4, "i", 15);
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isTypeString(item_r12));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isTypeString(item_r12));
  }
}
function AutocompleteComponent_div_16_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AutocompleteComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275template(1, AutocompleteComponent_div_16_ng_container_1_Template, 1, 0, "ng-container", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.notFoundTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c5, ctx_r2.notFoundText));
  }
}
function AutocompleteComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275listener("click", function AutocompleteComponent_div_17_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleOverlay());
    });
    \u0275\u0275elementEnd();
  }
}
var HighlightPipe = class {
  transform(text, search, searchKeyword) {
    let pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    pattern = pattern.split(" ").filter((t) => {
      return t.length > 0;
    }).join("|");
    const regex = new RegExp(pattern, "gi");
    if (!search) {
      return text;
    }
    if (searchKeyword) {
      const name = text[searchKeyword].replace(regex, (match) => `<b>${match}</b>`);
      const textCopied = __spreadValues({}, text);
      textCopied[searchKeyword] = name;
      return textCopied;
    } else {
      return search ? text.replace(regex, (match) => `<b>${match}</b>`) : text;
    }
  }
};
HighlightPipe.\u0275fac = function HighlightPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || HighlightPipe)();
};
HighlightPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
  name: "highlight",
  type: HighlightPipe,
  pure: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighlightPipe, [{
    type: Pipe,
    args: [{
      name: "highlight"
    }]
  }], null, null);
})();
var isArrowUp = (keyCode) => keyCode === 38;
var isArrowDown = (keyCode) => keyCode === 40;
var isArrowUpDown = (keyCode) => isArrowUp(keyCode) || isArrowDown(keyCode);
var isEnter = (keyCode) => keyCode === 13;
var isBackspace = (keyCode) => keyCode === 8;
var isDelete = (keyCode) => keyCode === 46;
var isESC = (keyCode) => keyCode === 27;
var isTab = (keyCode) => keyCode === 9;
var AutocompleteComponent = class {
  constructor(elementRef, renderer) {
    this.renderer = renderer;
    this.query = "";
    this.filteredList = [];
    this.historyList = [];
    this.isHistoryListVisible = true;
    this.selectedIdx = -1;
    this.toHighlight = "";
    this.notFound = false;
    this.isFocused = false;
    this.isOpen = false;
    this.isScrollToEnd = false;
    this.overlay = false;
    this.manualOpen = void 0;
    this.manualClose = void 0;
    this.data = [];
    this.placeholder = "";
    this.heading = "";
    this.historyHeading = "Recently selected";
    this.historyListMaxNumber = 15;
    this.notFoundText = "Not found";
    this.minQueryLength = 1;
    this.focusFirst = false;
    this.selected = new EventEmitter();
    this.inputChanged = new EventEmitter();
    this.inputFocused = new EventEmitter();
    this.inputCleared = new EventEmitter();
    this.opened = new EventEmitter();
    this.closed = new EventEmitter();
    this.scrolledToEnd = new EventEmitter();
    this.propagateChange = () => {
    };
    this.onTouched = () => {
    };
    this.elementRef = elementRef;
  }
  /**
   * Writes a new value from the form model into the view,
   * Updates model
   */
  writeValue(value = "") {
    this.query = this.selectedValueRender !== void 0 ? this.selectedValueRender(value) : this.defaultWriteValue(value);
  }
  defaultWriteValue(value) {
    return value && !this.isTypeString(value) ? value[this.searchKeyword] : value;
  }
  /**
   * Registers a handler that is called when something in the view has changed
   */
  registerOnChange(fn) {
    this.propagateChange = fn;
  }
  /**
   * Registers a handler specifically for when a control receives a touch event
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Event that is called when the value of an input element is changed
   */
  onChange(event2) {
    this.propagateChange(event2.target.value);
  }
  /**
   * Event that is called when the control status changes to or from DISABLED
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.initEventStream();
    this.handleScroll();
  }
  /**
   * Set initial value
   * @param value
   */
  setInitialValue(value) {
    if (this.initialValue) {
      this.select(value);
    }
  }
  /**
   * Update search results
   */
  ngOnChanges(changes) {
    this.setInitialValue(this.initialValue);
    if (changes && changes.data && Array.isArray(changes.data.currentValue)) {
      this.handleItemsChange();
      if (!changes.data.firstChange && this.isFocused) {
        this.handleOpen();
      }
    }
  }
  /**
   * Items change
   */
  handleItemsChange() {
    this.isScrollToEnd = false;
    if (!this.isOpen) {
      return;
    }
    this.filteredList = this.data;
    this.notFound = !this.filteredList || this.filteredList.length === 0;
    if (this.isOpen) {
      this.filterList();
    }
  }
  /**
   * Filter data
   */
  filterList() {
    this.selectedIdx = -1;
    this.initSearchHistory();
    if (this.query != null && this.data) {
      this.toHighlight = this.query;
      this.filteredList = this.customFilter !== void 0 ? this.customFilter([...this.data], this.query) : this.defaultFilterFunction();
      if (this.filteredList.length > 0 && this.focusFirst) {
        this.selectedIdx = 0;
      }
    } else {
      this.notFound = false;
    }
  }
  /**
   * Default filter function, used unless customFilter is provided
   */
  defaultFilterFunction() {
    return this.data.filter((item) => {
      if (typeof item === "string") {
        return item.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
      } else if (typeof item === "object" && item instanceof Object) {
        return item[this.searchKeyword] ? item[this.searchKeyword].toLowerCase().indexOf(this.query.toLowerCase()) > -1 : "";
      }
    });
  }
  /**
   * Check if item is a string in the list.
   * @param item
   */
  isTypeString(item) {
    return typeof item === "string";
  }
  /**
   * Select item in the list.
   * @param item
   */
  select(item) {
    this.query = !this.isTypeString(item) ? item[this.searchKeyword] : item;
    this.isOpen = true;
    this.overlay = false;
    this.selected.emit(item);
    this.propagateChange(item);
    if (this.initialValue) {
      const history = window.localStorage.getItem(`${this.historyIdentifier}`);
      if (history) {
        let existingHistory = JSON.parse(localStorage[`${this.historyIdentifier}`]);
        if (!(existingHistory instanceof Array)) existingHistory = [];
        if (!existingHistory.some((existingItem) => !this.isTypeString(existingItem) ? existingItem[this.searchKeyword] == item[this.searchKeyword] : existingItem == item)) {
          existingHistory.unshift(item);
          localStorage.setItem(`${this.historyIdentifier}`, JSON.stringify(existingHistory));
          if (existingHistory.length >= this.historyListMaxNumber) {
            existingHistory.splice(existingHistory.length - 1, 1);
            localStorage.setItem(`${this.historyIdentifier}`, JSON.stringify(existingHistory));
          }
        } else {
          if (!this.isTypeString(item)) {
            const copiedExistingHistory = existingHistory.slice();
            const selectedIndex = copiedExistingHistory.map((el) => el[this.searchKeyword]).indexOf(item[this.searchKeyword]);
            copiedExistingHistory.splice(selectedIndex, 1);
            copiedExistingHistory.splice(0, 0, item);
            localStorage.setItem(`${this.historyIdentifier}`, JSON.stringify(copiedExistingHistory));
          } else {
            const copiedExistingHistory = existingHistory.slice();
            copiedExistingHistory.splice(copiedExistingHistory.indexOf(item), 1);
            copiedExistingHistory.splice(0, 0, item);
            localStorage.setItem(`${this.historyIdentifier}`, JSON.stringify(copiedExistingHistory));
          }
        }
      } else {
        this.saveHistory(item);
      }
    } else {
      this.saveHistory(item);
    }
    this.handleClose();
  }
  /**
   * Document click
   * @param e event
   */
  handleClick(e) {
    let clickedComponent = e.target;
    let inside = false;
    do {
      if (clickedComponent === this.elementRef.nativeElement) {
        inside = true;
        if (this.filteredList.length) {
          this.handleOpen();
        }
      }
      clickedComponent = clickedComponent.parentNode;
    } while (clickedComponent);
    if (!inside) {
      this.handleClose();
    }
  }
  /**
   * Handle body overlay
   */
  handleOverlay() {
    this.overlay = false;
  }
  /**
   * Scroll items
   */
  handleScroll() {
    this.renderer.listen(this.filteredListElement.nativeElement, "scroll", () => {
      this.scrollToEnd();
    });
  }
  /**
   * Define panel state
   */
  setPanelState(event2) {
    if (event2) {
      event2.stopPropagation();
    }
    if (typeof this.manualOpen === "undefined" && typeof this.manualClose === "undefined") {
      this.isOpen = false;
      this.handleOpen();
    }
    if (typeof this.manualOpen === "undefined" && this.manualClose === false || typeof this.manualClose === "undefined" && this.manualOpen === false) {
      this.isOpen = false;
      this.handleOpen();
    }
    if (this.manualOpen === false && this.manualClose === false) {
      this.isOpen = false;
      this.handleOpen();
    }
    if (this.manualOpen) {
      this.isOpen = false;
      this.handleOpen();
      this.manualOpen = false;
    }
    if (this.manualClose) {
      this.isOpen = true;
      this.handleClose();
      this.manualClose = false;
    }
  }
  /**
   * Manual controls
   */
  open() {
    this.manualOpen = true;
    this.isOpen = false;
    this.handleOpen();
  }
  close() {
    this.manualClose = true;
    this.isOpen = true;
    this.handleClose();
  }
  focus() {
    this.handleFocus(event);
  }
  clear() {
    this.remove(event);
  }
  /**
   * Remove search query
   */
  remove(e) {
    e.stopPropagation();
    this.query = "";
    this.inputCleared.emit();
    this.propagateChange(this.query);
    this.setPanelState(e);
    if (this.data && !this.data.length) {
      this.notFound = false;
    }
  }
  /**
   * Initialize historyList search
   */
  initSearchHistory() {
    this.isHistoryListVisible = false;
    if (this.historyIdentifier && !this.query) {
      const history = window.localStorage.getItem(`${this.historyIdentifier}`);
      if (history) {
        this.isHistoryListVisible = true;
        this.filteredList = [];
        this.historyList = history ? JSON.parse(history) : [];
      } else {
        this.isHistoryListVisible = false;
      }
    } else {
      this.isHistoryListVisible = false;
    }
  }
  handleOpen() {
    if (this.isOpen || this.isOpen && !this.isLoading) {
      return;
    }
    if (this.data && this.data.length) {
      this.isOpen = true;
      this.overlay = true;
      this.filterList();
      this.opened.emit();
    }
  }
  handleClose() {
    if (!this.isOpen) {
      this.isFocused = false;
      return;
    }
    this.isOpen = false;
    this.overlay = false;
    this.filteredList = [];
    this.selectedIdx = -1;
    this.notFound = false;
    this.isHistoryListVisible = false;
    this.isFocused = false;
    this.closed.emit();
  }
  handleFocus(e) {
    this.searchInput.nativeElement.focus();
    if (this.isFocused) {
      return;
    }
    this.inputFocused.emit(e);
    if (this.data && this.data.length) {
      this.setPanelState(e);
    }
    this.isFocused = true;
  }
  scrollToEnd() {
    if (this.isScrollToEnd) {
      return;
    }
    const scrollTop = this.filteredListElement.nativeElement.scrollTop;
    const scrollHeight = this.filteredListElement.nativeElement.scrollHeight;
    const elementHeight = this.filteredListElement.nativeElement.clientHeight;
    const atBottom = elementHeight != 0 && Math.abs(scrollHeight - elementHeight - scrollTop) < 1;
    if (atBottom) {
      this.scrolledToEnd.emit();
      this.isScrollToEnd = true;
    }
  }
  /**
   * Initialize keyboard events
   */
  initEventStream() {
    this.inputKeyUp$ = fromEvent(this.searchInput.nativeElement, "keyup").pipe(map((e) => e));
    this.inputKeyDown$ = fromEvent(this.searchInput.nativeElement, "keydown").pipe(map((e) => e));
    this.listenEventStream();
  }
  /**
   * Listen keyboard events
   */
  listenEventStream() {
    this.inputKeyUp$.pipe(filter((e) => !isArrowUpDown(e.keyCode) && !isEnter(e.keyCode) && !isESC(e.keyCode) && !isTab(e.keyCode)), debounceTime(this.debounceTime)).subscribe((e) => {
      this.onKeyUp(e);
    });
    this.inputKeyDown$.pipe(filter((e) => isArrowUpDown(e.keyCode))).subscribe((e) => {
      e.preventDefault();
      this.onFocusItem(e);
    });
    this.inputKeyUp$.pipe(filter((e) => isEnter(e.keyCode))).subscribe((e) => {
    });
    this.inputKeyDown$.pipe(filter((e) => isEnter(e.keyCode))).subscribe((e) => {
      this.onHandleEnter();
    });
    this.inputKeyUp$.pipe(filter((e) => isESC(e.keyCode), debounceTime(100))).subscribe((e) => {
      this.onEsc();
    });
    this.inputKeyDown$.pipe(filter((e) => isTab(e.keyCode))).subscribe((e) => {
      this.onTab();
    });
    this.inputKeyDown$.pipe(filter((e) => isBackspace(e.keyCode) || isDelete(e.keyCode))).subscribe((e) => {
      this.onDelete();
    });
  }
  /**
   * on keyup == when input changed
   * @param e event
   */
  onKeyUp(e) {
    this.notFound = false;
    if (!this.query) {
      this.notFound = false;
      this.inputChanged.emit(e.target.value);
      this.inputCleared.emit();
      this.setPanelState(e);
    }
    if (!this.query && this.query !== "") {
      return;
    }
    if (this.query.length >= this.minQueryLength) {
      this.inputChanged.emit(e.target.value);
      this.filterList();
      if (!this.filteredList.length && !this.isLoading) {
        this.notFoundText ? this.notFound = true : this.notFound = false;
      }
      if (this.data && !this.data.length) {
        this.isOpen = true;
      }
    }
  }
  /**
   * Keyboard arrow top and arrow bottom
   * @param e event
   */
  onFocusItem(e) {
    if (!this.historyList.length || !this.isHistoryListVisible) {
      const totalNumItem = this.filteredList.length;
      if (e.key === "ArrowDown") {
        let sum = this.selectedIdx;
        sum = this.selectedIdx === null ? 0 : sum + 1;
        this.selectedIdx = (totalNumItem + sum) % totalNumItem;
        this.scrollToFocusedItem(this.selectedIdx);
      } else if (e.key === "ArrowUp") {
        if (this.selectedIdx == -1) {
          this.selectedIdx = 0;
        }
        this.selectedIdx = (totalNumItem + this.selectedIdx - 1) % totalNumItem;
        this.scrollToFocusedItem(this.selectedIdx);
      }
    } else {
      const totalNumItem = this.historyList.length;
      if (e.key === "ArrowDown") {
        let sum = this.selectedIdx;
        sum = this.selectedIdx === null ? 0 : sum + 1;
        this.selectedIdx = (totalNumItem + sum) % totalNumItem;
        this.scrollToFocusedItem(this.selectedIdx);
      } else if (e.key === "ArrowUp") {
        if (this.selectedIdx == -1) {
          this.selectedIdx = 0;
        }
        this.selectedIdx = (totalNumItem + this.selectedIdx - 1) % totalNumItem;
        this.scrollToFocusedItem(this.selectedIdx);
      }
    }
  }
  /**
   * Scroll to focused item
   * * @param index
   */
  scrollToFocusedItem(index) {
    let listElement = null;
    if (!this.historyList.length || !this.isHistoryListVisible) {
      listElement = this.filteredListElement.nativeElement;
    } else {
      listElement = this.historyListElement.nativeElement;
    }
    const items = Array.prototype.slice.call(listElement.childNodes).filter((node) => {
      if (node.nodeType === 1) {
        return node.className.includes("item");
      } else {
        return false;
      }
    });
    if (!items.length) {
      return;
    }
    const listHeight = listElement.offsetHeight;
    const itemHeight = items[index].offsetHeight;
    const visibleTop = listElement.scrollTop;
    const visibleBottom = listElement.scrollTop + listHeight - itemHeight;
    const targetPosition = items[index].offsetTop;
    if (targetPosition < visibleTop) {
      listElement.scrollTop = targetPosition;
    }
    if (targetPosition > visibleBottom) {
      listElement.scrollTop = targetPosition - listHeight + itemHeight;
    }
  }
  /**
   * Select item on enter click
   */
  onHandleEnter() {
    if (this.selectedIdx > -1) {
      if (!this.historyList.length || !this.isHistoryListVisible) {
        this.query = !this.isTypeString(this.filteredList[this.selectedIdx]) ? this.filteredList[this.selectedIdx][this.searchKeyword] : this.filteredList[this.selectedIdx];
        this.saveHistory(this.filteredList[this.selectedIdx]);
        this.select(this.filteredList[this.selectedIdx]);
      } else {
        this.query = !this.isTypeString(this.historyList[this.selectedIdx]) ? this.historyList[this.selectedIdx][this.searchKeyword] : this.historyList[this.selectedIdx];
        this.saveHistory(this.historyList[this.selectedIdx]);
        this.select(this.historyList[this.selectedIdx]);
      }
    }
    this.isHistoryListVisible = false;
    this.handleClose();
  }
  /**
   * Esc click
   */
  onEsc() {
    this.searchInput.nativeElement.blur();
    this.handleClose();
  }
  /**
   * Tab click
   */
  onTab() {
    this.searchInput.nativeElement.blur();
    this.handleClose();
  }
  /**
   * Delete click
   */
  onDelete() {
    this.isOpen = true;
  }
  /**
   * Select item to save in localStorage
   * @param selected
   */
  saveHistory(selected) {
    if (this.historyIdentifier) {
      if (!this.historyList.some((item) => !this.isTypeString(item) ? item[this.searchKeyword] == selected[this.searchKeyword] : item == selected)) {
        this.saveHistoryToLocalStorage([selected, ...this.historyList]);
        if (this.historyList.length >= this.historyListMaxNumber) {
          this.historyList.splice(this.historyList.length - 1, 1);
          this.saveHistoryToLocalStorage([selected, ...this.historyList]);
        }
      } else {
        if (!this.isTypeString(selected)) {
          const copiedHistoryList = this.historyList.slice();
          const selectedIndex = copiedHistoryList.map((item) => item[this.searchKeyword]).indexOf(selected[this.searchKeyword]);
          copiedHistoryList.splice(selectedIndex, 1);
          copiedHistoryList.splice(0, 0, selected);
          this.saveHistoryToLocalStorage([...copiedHistoryList]);
        } else {
          const copiedHistoryList = this.historyList.slice();
          copiedHistoryList.splice(this.historyList.indexOf(selected), 1);
          copiedHistoryList.splice(0, 0, selected);
          this.saveHistoryToLocalStorage([...copiedHistoryList]);
        }
      }
    }
  }
  /**
   * Save item in localStorage
   * @param selected
   */
  saveHistoryToLocalStorage(selected) {
    window.localStorage.setItem(`${this.historyIdentifier}`, JSON.stringify(selected));
  }
  /**
   * Remove item from localStorage
   * @param index
   * @param e event
   */
  removeHistoryItem(index, e) {
    e.stopPropagation();
    this.historyList = this.historyList.filter((v, i) => i !== index);
    this.saveHistoryToLocalStorage(this.historyList);
    if (this.historyList.length == 0) {
      window.localStorage.removeItem(`${this.historyIdentifier}`);
      this.filterList();
    }
  }
  /**
   * Reset localStorage
   * @param e event
   */
  resetHistoryList(e) {
    e.stopPropagation();
    this.historyList = [];
    window.localStorage.removeItem(`${this.historyIdentifier}`);
    this.filterList();
  }
};
AutocompleteComponent.\u0275fac = function AutocompleteComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AutocompleteComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2));
};
AutocompleteComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: AutocompleteComponent,
  selectors: [["ng-autocomplete"]],
  contentQueries: function AutocompleteComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, TemplateRef, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.customTemplate = _t.first);
    }
  },
  viewQuery: function AutocompleteComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
      \u0275\u0275viewQuery(_c12, 5);
      \u0275\u0275viewQuery(_c2, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchInput = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.filteredListElement = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.historyListElement = _t.first);
    }
  },
  hostAttrs: [1, "ng-autocomplete"],
  hostBindings: function AutocompleteComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function AutocompleteComponent_click_HostBindingHandler($event) {
        return ctx.handleClick($event);
      }, false, \u0275\u0275resolveDocument);
    }
  },
  inputs: {
    data: "data",
    searchKeyword: "searchKeyword",
    placeholder: "placeholder",
    heading: "heading",
    initialValue: "initialValue",
    historyIdentifier: "historyIdentifier",
    historyHeading: "historyHeading",
    historyListMaxNumber: "historyListMaxNumber",
    notFoundText: "notFoundText",
    isLoading: "isLoading",
    debounceTime: "debounceTime",
    disabled: "disabled",
    minQueryLength: "minQueryLength",
    focusFirst: "focusFirst",
    customFilter: "customFilter",
    selectedValueRender: "selectedValueRender",
    itemTemplate: "itemTemplate",
    notFoundTemplate: "notFoundTemplate"
  },
  outputs: {
    selected: "selected",
    inputChanged: "inputChanged",
    inputFocused: "inputFocused",
    inputCleared: "inputCleared",
    opened: "opened",
    closed: "closed",
    scrolledToEnd: "scrolledToEnd"
  },
  features: [\u0275\u0275ProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AutocompleteComponent),
    multi: true
  }]), \u0275\u0275NgOnChangesFeature],
  decls: 18,
  vars: 24,
  consts: [["searchInput", ""], ["filteredListElement", ""], ["historyListElement", ""], ["aria-owns", "suggestions suggestions-history", 1, "autocomplete-container", 3, "ngClass"], [1, "input-container"], ["type", "text", "aria-autocomplete", "list", "role", "combobox", "autocomplete", "off", 3, "ngModelChange", "input", "focus", "blur", "placeholder", "ngModel", "disabled"], ["class", "x", 3, "click", 4, "ngIf"], ["class", "sk-fading-circle", 4, "ngIf"], ["id", "suggestions", "role", "listbox", 1, "suggestions-container", 3, "ngClass"], ["class", "heading", 4, "ngIf"], ["class", "item", 4, "ngFor", "ngForOf"], ["id", "suggestions-history", "role", "listbox", 1, "suggestions-container", 3, "ngClass"], ["class", "not-found", 4, "ngIf"], ["class", "autocomplete-overlay", 3, "click", 4, "ngIf"], [1, "x", 3, "click"], ["aria-label", "Close", 1, "material-icons"], [1, "sk-fading-circle"], [1, "sk-circle1", "sk-circle"], [1, "sk-circle2", "sk-circle"], [1, "sk-circle3", "sk-circle"], [1, "sk-circle4", "sk-circle"], [1, "sk-circle5", "sk-circle"], [1, "sk-circle6", "sk-circle"], [1, "sk-circle7", "sk-circle"], [1, "sk-circle8", "sk-circle"], [1, "sk-circle9", "sk-circle"], [1, "sk-circle10", "sk-circle"], [1, "sk-circle11", "sk-circle"], [1, "sk-circle12", "sk-circle"], [1, "heading"], [1, "text"], [1, "item"], [3, "complete-selected", "click", 4, "ngIf"], [3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-label", "Delete", 1, "material-icons"], [1, "not-found"], [1, "autocomplete-overlay", 3, "click"]],
  template: function AutocompleteComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "input", 5, 0);
      \u0275\u0275twoWayListener("ngModelChange", function AutocompleteComponent_Template_input_ngModelChange_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.query, $event) || (ctx.query = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("input", function AutocompleteComponent_Template_input_input_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onChange($event));
      })("focus", function AutocompleteComponent_Template_input_focus_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.handleFocus($event));
      })("blur", function AutocompleteComponent_Template_input_blur_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onTouched($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, AutocompleteComponent_div_4_Template, 3, 0, "div", 6)(5, AutocompleteComponent_div_5_Template, 13, 0, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 8);
      \u0275\u0275template(7, AutocompleteComponent_div_7_Template, 3, 1, "div", 9);
      \u0275\u0275elementStart(8, "ul", null, 1);
      \u0275\u0275template(10, AutocompleteComponent_li_10_Template, 3, 2, "li", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 11);
      \u0275\u0275template(12, AutocompleteComponent_div_12_Template, 6, 1, "div", 9);
      \u0275\u0275elementStart(13, "ul", null, 2);
      \u0275\u0275template(15, AutocompleteComponent_li_15_Template, 6, 2, "li", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(16, AutocompleteComponent_div_16_Template, 2, 4, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275template(17, AutocompleteComponent_div_17_Template, 1, 0, "div", 13);
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(16, _c3, ctx.isOpen));
      \u0275\u0275attribute("aria-expanded", ctx.isOpen);
      \u0275\u0275advance(2);
      \u0275\u0275propertyInterpolate("placeholder", ctx.placeholder);
      \u0275\u0275twoWayProperty("ngModel", ctx.query);
      \u0275\u0275property("disabled", ctx.disabled);
      \u0275\u0275attribute("aria-label", ctx.placeholder);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.query && !ctx.isLoading && !ctx.disabled);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(18, _c4, ctx.isHistoryListVisible, !ctx.isHistoryListVisible));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.filteredList.length > 0 && ctx.heading);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.filteredList);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(21, _c4, !ctx.isHistoryListVisible, ctx.isHistoryListVisible));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.historyList.length > 0 && ctx.historyHeading);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.historyList);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading ? !ctx.isLoading && ctx.notFound : ctx.notFound);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.overlay);
    }
  },
  dependencies: [NgClass, DefaultValueAccessor, NgControlStatus, NgModel, NgIf, NgForOf, NgTemplateOutlet, HighlightPipe],
  styles: ['@import"https://fonts.googleapis.com/icon?family=Material+Icons";.ng-autocomplete{width:600px}.autocomplete-container{box-shadow:0 1px 3px #0003,0 1px 1px #00000024,0 2px 1px -1px #0000001f;position:relative;overflow:visible;height:40px}.autocomplete-container .input-container input{font-size:14px;box-sizing:border-box;border:none;box-shadow:none;outline:none;background-color:#fff;color:#000000de;width:100%;padding:0 15px;line-height:40px;height:40px}.autocomplete-container .input-container input:disabled{background-color:#eee;color:#666}.autocomplete-container .input-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;transform:translateY(-50%)}.autocomplete-container .input-container .x i{color:#0000008a;font-size:22px;vertical-align:middle}.autocomplete-container .suggestions-container{position:absolute;width:100%;background:white;height:auto;box-shadow:0 2px 5px #00000040;box-sizing:border-box}.autocomplete-container .suggestions-container ul{padding:0;margin:0;max-height:240px;overflow-y:auto}.autocomplete-container .suggestions-container ul li{position:relative;list-style:none;padding:0;margin:0;cursor:pointer}.autocomplete-container .suggestions-container ul li a{padding:14px 15px;display:block;text-decoration:none;color:#333;cursor:pointer;color:#000000de;font-size:15px}.autocomplete-container .suggestions-container ul li:hover,.autocomplete-container .suggestions-container .complete-selected{background-color:#9e9e9e2e}.autocomplete-container .suggestions-container .heading{position:relative;padding:10px 15px;border:solid 1px #f1f1f1}.autocomplete-container .suggestions-container .heading .text{font-size:.85em}.autocomplete-container .suggestions-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;transform:translateY(-50%)}.autocomplete-container .suggestions-container .x i{color:#0000008a;font-size:18px;vertical-align:middle}.autocomplete-container .suggestions-container.is-hidden{visibility:hidden}.autocomplete-container .suggestions-container.is-visible{visibility:visible}.autocomplete-container .not-found{padding:0 .75em;border:solid 1px #f1f1f1;background:white}.autocomplete-container .not-found div{padding:.4em 0;font-size:.95em;line-height:1.4;border-bottom:1px solid rgba(230,230,230,.7)}.autocomplete-container.active{z-index:999}.highlight{font-weight:700}.autocomplete-overlay{position:fixed;background-color:transparent;width:100%;height:100%;top:0;right:0;bottom:0;left:0;z-index:50}input[type=text]::-ms-clear{display:none}.sk-fading-circle{width:20px;height:20px;position:absolute;right:10px;top:0;bottom:0;margin:auto}.sk-fading-circle .sk-circle{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle .sk-circle:before{content:"";display:block;margin:0 auto;width:15%;height:15%;background-color:#333;border-radius:100%;animation:sk-circleFadeDelay 1.2s infinite ease-in-out both}.sk-fading-circle .sk-circle2{transform:rotate(30deg)}.sk-fading-circle .sk-circle3{transform:rotate(60deg)}.sk-fading-circle .sk-circle4{transform:rotate(90deg)}.sk-fading-circle .sk-circle5{transform:rotate(120deg)}.sk-fading-circle .sk-circle6{transform:rotate(150deg)}.sk-fading-circle .sk-circle7{transform:rotate(180deg)}.sk-fading-circle .sk-circle8{transform:rotate(210deg)}.sk-fading-circle .sk-circle9{transform:rotate(240deg)}.sk-fading-circle .sk-circle10{transform:rotate(270deg)}.sk-fading-circle .sk-circle11{transform:rotate(300deg)}.sk-fading-circle .sk-circle12{transform:rotate(330deg)}.sk-fading-circle .sk-circle2:before{animation-delay:-1.1s}.sk-fading-circle .sk-circle3:before{animation-delay:-1s}.sk-fading-circle .sk-circle4:before{animation-delay:-.9s}.sk-fading-circle .sk-circle5:before{animation-delay:-.8s}.sk-fading-circle .sk-circle6:before{animation-delay:-.7s}.sk-fading-circle .sk-circle7:before{animation-delay:-.6s}.sk-fading-circle .sk-circle8:before{animation-delay:-.5s}.sk-fading-circle .sk-circle9:before{animation-delay:-.4s}.sk-fading-circle .sk-circle10:before{animation-delay:-.3s}.sk-fading-circle .sk-circle11:before{animation-delay:-.2s}.sk-fading-circle .sk-circle12:before{animation-delay:-.1s}@keyframes sk-circleFadeDelay{0%,39%,to{opacity:0}40%{opacity:1}}\n'],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutocompleteComponent, [{
    type: Component,
    args: [{
      selector: "ng-autocomplete",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => AutocompleteComponent),
        multi: true
      }],
      encapsulation: ViewEncapsulation$1.None,
      host: {
        "(document:click)": "handleClick($event)",
        "class": "ng-autocomplete"
      },
      template: `<div class="autocomplete-container" aria-owns="suggestions suggestions-history" [attr.aria-expanded]="isOpen"
     [ngClass]="{ 'active': isOpen}">
  <div class="input-container">
    <input #searchInput
           type="text"
           attr.aria-label="{{placeholder}}"
           aria-autocomplete="list"
           role="combobox"
           placeholder={{placeholder}}
           [(ngModel)]=query
           (input)="onChange($event)"
           (focus)=handleFocus($event)
           (blur)=onTouched($event)
           [disabled]="disabled"
           autocomplete="off">
    <div class="x" *ngIf="query && !isLoading && !disabled" (click)="remove($event)">
      <i class="material-icons" aria-label="Close">close</i>
    </div>
    <!--Loading mask-->
    <div class="sk-fading-circle" *ngIf="isLoading">
      <div class="sk-circle1 sk-circle"></div>
      <div class="sk-circle2 sk-circle"></div>
      <div class="sk-circle3 sk-circle"></div>
      <div class="sk-circle4 sk-circle"></div>
      <div class="sk-circle5 sk-circle"></div>
      <div class="sk-circle6 sk-circle"></div>
      <div class="sk-circle7 sk-circle"></div>
      <div class="sk-circle8 sk-circle"></div>
      <div class="sk-circle9 sk-circle"></div>
      <div class="sk-circle10 sk-circle"></div>
      <div class="sk-circle11 sk-circle"></div>
      <div class="sk-circle12 sk-circle"></div>
    </div>
  </div>

  <!--FilteredList items-->
  <div class="suggestions-container" id="suggestions" role="listbox"
       [ngClass]="{ 'is-hidden': isHistoryListVisible, 'is-visible': !isHistoryListVisible}">
    <!--FilteredList heading-->
    <div class="heading" *ngIf="filteredList.length > 0 && heading">
      <div class="text">{{heading}}</div>
    </div>

    <ul #filteredListElement>
      <li *ngFor="let item of filteredList; let idx = index" class="item">
        <!--string logic-->
        <div [class.complete-selected]="idx === selectedIdx" *ngIf='isTypeString(item)'
             (click)="select(item)">
          <ng-container
            *ngTemplateOutlet="itemTemplate;  context: { $implicit: item | highlight: toHighlight }">
          </ng-container>
        </div>
        <!--object logic-->
        <div [class.complete-selected]="idx === selectedIdx" *ngIf='!isTypeString(item)'
             (click)="select(item)">
          <ng-container
            *ngTemplateOutlet="itemTemplate; context: { $implicit: item | highlight: toHighlight : searchKeyword }">
          </ng-container>
        </div>
      </li>
    </ul>
  </div>

  <!--HistoryList items-->
  <div class="suggestions-container" id="suggestions-history" role="listbox"
       [ngClass]="{ 'is-hidden': !isHistoryListVisible, 'is-visible': isHistoryListVisible}">
    <!--HistoryList heading-->
    <div class="heading" *ngIf="historyList.length > 0 && historyHeading">
      <div class="text">{{historyHeading}}</div>
      <div class="x" (click)="resetHistoryList($event)">
        <i class="material-icons" aria-label="Delete">delete</i>
      </div>
    </div>

    <ul #historyListElement>
      <li *ngFor="let item of historyList; let idx = index" class="item">
        <!--string logic-->
        <div [class.complete-selected]="idx === selectedIdx" *ngIf='isTypeString(item)' (click)="select(item)">
          <ng-container
            *ngTemplateOutlet="itemTemplate;  context: { $implicit: item }">
          </ng-container>
        </div>
        <!--object logic-->
        <div [class.complete-selected]="idx === selectedIdx" *ngIf='!isTypeString(item)' (click)="select(item)">
          <ng-container
            *ngTemplateOutlet="itemTemplate; context: { $implicit: item }">
          </ng-container>
        </div>
        <div class="x" (click)="removeHistoryItem(idx, $event)">
          <i class="material-icons" aria-label="Close">close</i>
        </div>
      </li>
    </ul>
  </div>

  <!--Not found-->
  <div class="not-found" *ngIf="isLoading ? !isLoading && notFound : notFound">
    <ng-container
      *ngTemplateOutlet="notFoundTemplate;  context: { $implicit: notFoundText  }">
    </ng-container>
  </div>
</div>
<div class="autocomplete-overlay" *ngIf="overlay" (click)="handleOverlay()"></div>
`,
      styles: ['@import"https://fonts.googleapis.com/icon?family=Material+Icons";.ng-autocomplete{width:600px}.autocomplete-container{box-shadow:0 1px 3px #0003,0 1px 1px #00000024,0 2px 1px -1px #0000001f;position:relative;overflow:visible;height:40px}.autocomplete-container .input-container input{font-size:14px;box-sizing:border-box;border:none;box-shadow:none;outline:none;background-color:#fff;color:#000000de;width:100%;padding:0 15px;line-height:40px;height:40px}.autocomplete-container .input-container input:disabled{background-color:#eee;color:#666}.autocomplete-container .input-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;transform:translateY(-50%)}.autocomplete-container .input-container .x i{color:#0000008a;font-size:22px;vertical-align:middle}.autocomplete-container .suggestions-container{position:absolute;width:100%;background:white;height:auto;box-shadow:0 2px 5px #00000040;box-sizing:border-box}.autocomplete-container .suggestions-container ul{padding:0;margin:0;max-height:240px;overflow-y:auto}.autocomplete-container .suggestions-container ul li{position:relative;list-style:none;padding:0;margin:0;cursor:pointer}.autocomplete-container .suggestions-container ul li a{padding:14px 15px;display:block;text-decoration:none;color:#333;cursor:pointer;color:#000000de;font-size:15px}.autocomplete-container .suggestions-container ul li:hover,.autocomplete-container .suggestions-container .complete-selected{background-color:#9e9e9e2e}.autocomplete-container .suggestions-container .heading{position:relative;padding:10px 15px;border:solid 1px #f1f1f1}.autocomplete-container .suggestions-container .heading .text{font-size:.85em}.autocomplete-container .suggestions-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;transform:translateY(-50%)}.autocomplete-container .suggestions-container .x i{color:#0000008a;font-size:18px;vertical-align:middle}.autocomplete-container .suggestions-container.is-hidden{visibility:hidden}.autocomplete-container .suggestions-container.is-visible{visibility:visible}.autocomplete-container .not-found{padding:0 .75em;border:solid 1px #f1f1f1;background:white}.autocomplete-container .not-found div{padding:.4em 0;font-size:.95em;line-height:1.4;border-bottom:1px solid rgba(230,230,230,.7)}.autocomplete-container.active{z-index:999}.highlight{font-weight:700}.autocomplete-overlay{position:fixed;background-color:transparent;width:100%;height:100%;top:0;right:0;bottom:0;left:0;z-index:50}input[type=text]::-ms-clear{display:none}.sk-fading-circle{width:20px;height:20px;position:absolute;right:10px;top:0;bottom:0;margin:auto}.sk-fading-circle .sk-circle{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle .sk-circle:before{content:"";display:block;margin:0 auto;width:15%;height:15%;background-color:#333;border-radius:100%;animation:sk-circleFadeDelay 1.2s infinite ease-in-out both}.sk-fading-circle .sk-circle2{transform:rotate(30deg)}.sk-fading-circle .sk-circle3{transform:rotate(60deg)}.sk-fading-circle .sk-circle4{transform:rotate(90deg)}.sk-fading-circle .sk-circle5{transform:rotate(120deg)}.sk-fading-circle .sk-circle6{transform:rotate(150deg)}.sk-fading-circle .sk-circle7{transform:rotate(180deg)}.sk-fading-circle .sk-circle8{transform:rotate(210deg)}.sk-fading-circle .sk-circle9{transform:rotate(240deg)}.sk-fading-circle .sk-circle10{transform:rotate(270deg)}.sk-fading-circle .sk-circle11{transform:rotate(300deg)}.sk-fading-circle .sk-circle12{transform:rotate(330deg)}.sk-fading-circle .sk-circle2:before{animation-delay:-1.1s}.sk-fading-circle .sk-circle3:before{animation-delay:-1s}.sk-fading-circle .sk-circle4:before{animation-delay:-.9s}.sk-fading-circle .sk-circle5:before{animation-delay:-.8s}.sk-fading-circle .sk-circle6:before{animation-delay:-.7s}.sk-fading-circle .sk-circle7:before{animation-delay:-.6s}.sk-fading-circle .sk-circle8:before{animation-delay:-.5s}.sk-fading-circle .sk-circle9:before{animation-delay:-.4s}.sk-fading-circle .sk-circle10:before{animation-delay:-.3s}.sk-fading-circle .sk-circle11:before{animation-delay:-.2s}.sk-fading-circle .sk-circle12:before{animation-delay:-.1s}@keyframes sk-circleFadeDelay{0%,39%,to{opacity:0}40%{opacity:1}}\n']
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }];
  }, {
    searchInput: [{
      type: ViewChild,
      args: ["searchInput"]
    }],
    filteredListElement: [{
      type: ViewChild,
      args: ["filteredListElement"]
    }],
    historyListElement: [{
      type: ViewChild,
      args: ["historyListElement"]
    }],
    data: [{
      type: Input
    }],
    searchKeyword: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    heading: [{
      type: Input
    }],
    initialValue: [{
      type: Input
    }],
    historyIdentifier: [{
      type: Input
    }],
    historyHeading: [{
      type: Input
    }],
    historyListMaxNumber: [{
      type: Input
    }],
    notFoundText: [{
      type: Input
    }],
    isLoading: [{
      type: Input
    }],
    debounceTime: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    minQueryLength: [{
      type: Input
    }],
    focusFirst: [{
      type: Input
    }],
    customFilter: [{
      type: Input
    }],
    selectedValueRender: [{
      type: Input
    }],
    selected: [{
      type: Output
    }],
    inputChanged: [{
      type: Output
    }],
    inputFocused: [{
      type: Output
    }],
    inputCleared: [{
      type: Output
    }],
    opened: [{
      type: Output
    }],
    closed: [{
      type: Output
    }],
    scrolledToEnd: [{
      type: Output
    }],
    itemTemplate: [{
      type: Input
    }],
    notFoundTemplate: [{
      type: Input
    }],
    customTemplate: [{
      type: ContentChild,
      args: [TemplateRef]
    }]
  });
})();
var AutocompleteLibModule = class {
};
AutocompleteLibModule.\u0275fac = function AutocompleteLibModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AutocompleteLibModule)();
};
AutocompleteLibModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: AutocompleteLibModule
});
AutocompleteLibModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [[CommonModule, FormsModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutocompleteLibModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule],
      declarations: [AutocompleteComponent, HighlightPipe],
      exports: [AutocompleteComponent, HighlightPipe]
    }]
  }], null, null);
})();

// node_modules/angular-mentions/fesm2020/angular-mentions.mjs
var _c03 = ["list"];
var _c13 = ["defaultItemTemplate"];
var _c22 = (a0) => ({
  "item": a0
});
function MentionListComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r1 = ctx.item;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", item_r1[ctx_r1.labelKey], " ");
  }
}
function MentionListComponent_li_4_ng_template_2_Template(rf, ctx) {
}
function MentionListComponent_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 4);
    \u0275\u0275listener("mousedown", function MentionListComponent_li_4_Template_a_mousedown_1_listener($event) {
      const i_r4 = \u0275\u0275restoreView(_r3).index;
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.activeIndex = i_r4;
      ctx_r1.itemClick.emit();
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275template(2, MentionListComponent_li_4_ng_template_2_Template, 0, 0, "ng-template", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.activeIndex == i_r4)("mention-active", !ctx_r1.styleOff && ctx_r1.activeIndex == i_r4);
    \u0275\u0275advance();
    \u0275\u0275classProp("mention-item", !ctx_r1.styleOff);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(8, _c22, item_r5));
  }
}
function setValue(el, value) {
  if (isInputOrTextAreaElement(el)) {
    el.value = value;
  } else {
    el.textContent = value;
  }
}
function getValue(el) {
  return isInputOrTextAreaElement(el) ? el.value : el.textContent;
}
function insertValue(el, start, end, text, iframe, noRecursion = false) {
  if (isTextElement(el)) {
    let val = getValue(el);
    setValue(el, val.substring(0, start) + text + val.substring(end, val.length));
    setCaretPosition(el, start + text.length, iframe);
  } else if (!noRecursion) {
    let selObj = getWindowSelection(iframe);
    if (selObj && selObj.rangeCount > 0) {
      var selRange = selObj.getRangeAt(0);
      var position = selRange.startOffset;
      var anchorNode = selObj.anchorNode;
      insertValue(anchorNode, position - (end - start), position, text, iframe, true);
    }
  }
}
function isInputOrTextAreaElement(el) {
  return el != null && (el.nodeName == "INPUT" || el.nodeName == "TEXTAREA");
}
function isTextElement(el) {
  return el != null && (el.nodeName == "INPUT" || el.nodeName == "TEXTAREA" || el.nodeName == "#text");
}
function setCaretPosition(el, pos, iframe = null) {
  if (isInputOrTextAreaElement(el) && el.selectionStart) {
    el.focus();
    el.setSelectionRange(pos, pos);
  } else {
    let range = getDocument(iframe).createRange();
    range.setStart(el, pos);
    range.collapse(true);
    let sel = getWindowSelection(iframe);
    sel.removeAllRanges();
    sel.addRange(range);
  }
}
function getCaretPosition(el, iframe = null) {
  if (isInputOrTextAreaElement(el)) {
    var val = el.value;
    return val.slice(0, el.selectionStart).length;
  } else {
    var selObj = getWindowSelection(iframe);
    if (selObj.rangeCount > 0) {
      var selRange = selObj.getRangeAt(0);
      var preCaretRange = selRange.cloneRange();
      preCaretRange.selectNodeContents(el);
      preCaretRange.setEnd(selRange.endContainer, selRange.endOffset);
      var position = preCaretRange.toString().length;
      return position;
    }
  }
}
function getDocument(iframe) {
  if (!iframe) {
    return document;
  } else {
    return iframe.contentWindow.document;
  }
}
function getWindowSelection(iframe) {
  if (!iframe) {
    return window.getSelection();
  } else {
    return iframe.contentWindow.getSelection();
  }
}
function getContentEditableCaretCoords(ctx) {
  let markerTextChar = "\uFEFF";
  let markerId = "sel_" + (/* @__PURE__ */ new Date()).getTime() + "_" + Math.random().toString().substr(2);
  let doc = getDocument(ctx ? ctx.iframe : null);
  let sel = getWindowSelection(ctx ? ctx.iframe : null);
  let prevRange = sel.getRangeAt(0);
  let range = doc.createRange();
  range.setStart(sel.anchorNode, prevRange.startOffset);
  range.setEnd(sel.anchorNode, prevRange.startOffset);
  range.collapse(false);
  let markerEl = doc.createElement("span");
  markerEl.id = markerId;
  markerEl.appendChild(doc.createTextNode(markerTextChar));
  range.insertNode(markerEl);
  sel.removeAllRanges();
  sel.addRange(prevRange);
  let coordinates = {
    left: 0,
    top: markerEl.offsetHeight
  };
  localToRelativeCoordinates(ctx, markerEl, coordinates);
  markerEl.parentNode.removeChild(markerEl);
  return coordinates;
}
function localToRelativeCoordinates(ctx, element, coordinates) {
  let obj = element;
  let iframe = ctx ? ctx.iframe : null;
  while (obj) {
    if (ctx.parent != null && ctx.parent == obj) {
      break;
    }
    coordinates.left += obj.offsetLeft + obj.clientLeft;
    coordinates.top += obj.offsetTop + obj.clientTop;
    obj = obj.offsetParent;
    if (!obj && iframe) {
      obj = iframe;
      iframe = null;
    }
  }
  obj = element;
  iframe = ctx ? ctx.iframe : null;
  while (obj !== getDocument(null).body && obj != null) {
    if (ctx.parent != null && ctx.parent == obj) {
      break;
    }
    if (obj.scrollTop && obj.scrollTop > 0) {
      coordinates.top -= obj.scrollTop;
    }
    if (obj.scrollLeft && obj.scrollLeft > 0) {
      coordinates.left -= obj.scrollLeft;
    }
    obj = obj.parentNode;
    if (!obj && iframe) {
      obj = iframe;
      iframe = null;
    }
  }
}
var properties = [
  "direction",
  "boxSizing",
  "width",
  "height",
  "overflowX",
  "overflowY",
  "borderTopWidth",
  "borderRightWidth",
  "borderBottomWidth",
  "borderLeftWidth",
  "borderStyle",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
  // https://developer.mozilla.org/en-US/docs/Web/CSS/font
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "fontStretch",
  "fontSize",
  "fontSizeAdjust",
  "lineHeight",
  "fontFamily",
  "textAlign",
  "textTransform",
  "textIndent",
  "textDecoration",
  "letterSpacing",
  "wordSpacing",
  "tabSize",
  "MozTabSize"
];
var isBrowser = typeof window !== "undefined";
var isFirefox = isBrowser && window["mozInnerScreenX"] != null;
function getCaretCoordinates(element, position, options) {
  if (!isBrowser) {
    throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");
  }
  var debug = options && options.debug || false;
  if (debug) {
    var el = document.querySelector("#input-textarea-caret-position-mirror-div");
    if (el) el.parentNode.removeChild(el);
  }
  var div = document.createElement("div");
  div.id = "input-textarea-caret-position-mirror-div";
  document.body.appendChild(div);
  var style = div.style;
  var computed = window.getComputedStyle ? window.getComputedStyle(element) : element.currentStyle;
  var isInput = element.nodeName === "INPUT";
  style.whiteSpace = "pre-wrap";
  if (!isInput) style.wordWrap = "break-word";
  style.position = "absolute";
  if (!debug) style.visibility = "hidden";
  properties.forEach(function(prop) {
    if (isInput && prop === "lineHeight") {
      if (computed.boxSizing === "border-box") {
        var height = parseInt(computed.height);
        var outerHeight = parseInt(computed.paddingTop) + parseInt(computed.paddingBottom) + parseInt(computed.borderTopWidth) + parseInt(computed.borderBottomWidth);
        var targetHeight = outerHeight + parseInt(computed.lineHeight);
        if (height > targetHeight) {
          style.lineHeight = height - outerHeight + "px";
        } else if (height === targetHeight) {
          style.lineHeight = computed.lineHeight;
        } else {
          style.lineHeight = "0";
        }
      } else {
        style.lineHeight = computed.height;
      }
    } else {
      style[prop] = computed[prop];
    }
  });
  if (isFirefox) {
    if (element.scrollHeight > parseInt(computed.height)) style.overflowY = "scroll";
  } else {
    style.overflow = "hidden";
  }
  div.textContent = element.value.substring(0, position);
  if (isInput) div.textContent = div.textContent.replace(/\s/g, "\xA0");
  var span = document.createElement("span");
  span.textContent = element.value.substring(position) || ".";
  div.appendChild(span);
  var coordinates = {
    top: span.offsetTop + parseInt(computed["borderTopWidth"]),
    left: span.offsetLeft + parseInt(computed["borderLeftWidth"]),
    height: parseInt(computed["lineHeight"])
  };
  if (debug) {
    span.style.backgroundColor = "#aaa";
  } else {
    document.body.removeChild(div);
  }
  return coordinates;
}
var MentionListComponent = class {
  constructor(element) {
    this.element = element;
    this.labelKey = "label";
    this.itemClick = new EventEmitter();
    this.items = [];
    this.activeIndex = 0;
    this.hidden = false;
    this.dropUp = false;
    this.styleOff = false;
    this.coords = {
      top: 0,
      left: 0
    };
    this.offset = 0;
  }
  ngAfterContentChecked() {
    if (!this.itemTemplate) {
      this.itemTemplate = this.defaultItemTemplate;
    }
  }
  // lots of confusion here between relative coordinates and containers
  position(nativeParentElement, iframe = null) {
    if (isInputOrTextAreaElement(nativeParentElement)) {
      this.coords = getCaretCoordinates(nativeParentElement, nativeParentElement.selectionStart, null);
      this.coords.top = nativeParentElement.offsetTop + this.coords.top - nativeParentElement.scrollTop;
      this.coords.left = nativeParentElement.offsetLeft + this.coords.left - nativeParentElement.scrollLeft;
      this.offset = this.getBlockCursorDimensions(nativeParentElement).height;
    } else if (iframe) {
      let context = {
        iframe,
        parent: iframe.offsetParent
      };
      this.coords = getContentEditableCaretCoords(context);
    } else {
      let doc = document.documentElement;
      let scrollLeft = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
      let scrollTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      let caretRelativeToView = getContentEditableCaretCoords({
        iframe
      });
      let parentRelativeToContainer = nativeParentElement.getBoundingClientRect();
      this.coords.top = caretRelativeToView.top - parentRelativeToContainer.top + nativeParentElement.offsetTop - scrollTop;
      this.coords.left = caretRelativeToView.left - parentRelativeToContainer.left + nativeParentElement.offsetLeft - scrollLeft;
    }
    this.positionElement();
  }
  get activeItem() {
    return this.items[this.activeIndex];
  }
  activateNextItem() {
    let listEl = this.list.nativeElement;
    let activeEl = listEl.getElementsByClassName("active").item(0);
    if (activeEl) {
      let nextLiEl = activeEl.nextSibling;
      if (nextLiEl && nextLiEl.nodeName == "LI") {
        let nextLiRect = nextLiEl.getBoundingClientRect();
        if (nextLiRect.bottom > listEl.getBoundingClientRect().bottom) {
          listEl.scrollTop = nextLiEl.offsetTop + nextLiRect.height - listEl.clientHeight;
        }
      }
    }
    this.activeIndex = Math.max(Math.min(this.activeIndex + 1, this.items.length - 1), 0);
  }
  activatePreviousItem() {
    let listEl = this.list.nativeElement;
    let activeEl = listEl.getElementsByClassName("active").item(0);
    if (activeEl) {
      let prevLiEl = activeEl.previousSibling;
      if (prevLiEl && prevLiEl.nodeName == "LI") {
        let prevLiRect = prevLiEl.getBoundingClientRect();
        if (prevLiRect.top < listEl.getBoundingClientRect().top) {
          listEl.scrollTop = prevLiEl.offsetTop;
        }
      }
    }
    this.activeIndex = Math.max(Math.min(this.activeIndex - 1, this.items.length - 1), 0);
  }
  // reset for a new mention search
  reset() {
    this.list.nativeElement.scrollTop = 0;
    this.checkBounds();
  }
  // final positioning is done after the list is shown (and the height and width are known)
  // ensure it's in the page bounds
  checkBounds() {
    let left = this.coords.left, top = this.coords.top, dropUp = this.dropUp;
    const bounds = this.list.nativeElement.getBoundingClientRect();
    if (bounds.left + bounds.width > window.innerWidth) {
      left -= bounds.left + bounds.width - window.innerWidth + 10;
    }
    if (bounds.top < 0) {
      dropUp = false;
    }
    this.positionElement(left, top, dropUp);
  }
  positionElement(left = this.coords.left, top = this.coords.top, dropUp = this.dropUp) {
    const el = this.element.nativeElement;
    top += dropUp ? 0 : this.offset;
    el.className = dropUp ? "dropup" : null;
    el.style.position = "absolute";
    el.style.left = left + "px";
    el.style.top = top + "px";
  }
  getBlockCursorDimensions(nativeParentElement) {
    const parentStyles = window.getComputedStyle(nativeParentElement);
    return {
      height: parseFloat(parentStyles.lineHeight),
      width: parseFloat(parentStyles.fontSize)
    };
  }
};
MentionListComponent.\u0275fac = function MentionListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MentionListComponent)(\u0275\u0275directiveInject(ElementRef));
};
MentionListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: MentionListComponent,
  selectors: [["mention-list"]],
  viewQuery: function MentionListComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c03, 7);
      \u0275\u0275viewQuery(_c13, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.list = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.defaultItemTemplate = _t.first);
    }
  },
  inputs: {
    labelKey: "labelKey",
    itemTemplate: "itemTemplate"
  },
  outputs: {
    itemClick: "itemClick"
  },
  decls: 5,
  vars: 6,
  consts: [["defaultItemTemplate", ""], ["list", ""], [1, "dropdown-menu", "scrollable-menu", 3, "hidden"], [3, "active", "mention-active", 4, "ngFor", "ngForOf"], [1, "dropdown-item", 3, "mousedown"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function MentionListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, MentionListComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(2, "ul", 2, 1);
      \u0275\u0275template(4, MentionListComponent_li_4_Template, 3, 10, "li", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275classProp("mention-menu", !ctx.styleOff)("mention-dropdown", !ctx.styleOff && ctx.dropUp);
      \u0275\u0275property("hidden", ctx.hidden);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.items);
    }
  },
  dependencies: [NgForOf, NgTemplateOutlet],
  styles: [".mention-menu[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:11em;padding:.5em 0;margin:.125em 0 0;font-size:1em;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25em}.mention-item[_ngcontent-%COMP%]{display:block;padding:.2em 1.5em;line-height:1.5em;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.mention-active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;background-color:#337ab7;outline:0}.scrollable-menu[_ngcontent-%COMP%]{display:block;height:auto;max-height:292px;overflow:auto}[hidden][_ngcontent-%COMP%]{display:none}.mention-dropdown[_ngcontent-%COMP%]{bottom:100%;top:auto;margin-bottom:2px}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MentionListComponent, [{
    type: Component,
    args: [{
      selector: "mention-list",
      template: `
    <ng-template #defaultItemTemplate let-item="item">
      {{item[labelKey]}}
    </ng-template>
    <ul #list [hidden]="hidden" class="dropdown-menu scrollable-menu"
      [class.mention-menu]="!styleOff" [class.mention-dropdown]="!styleOff && dropUp">
      <li *ngFor="let item of items; let i = index"
        [class.active]="activeIndex==i" [class.mention-active]="!styleOff && activeIndex==i">
        <a class="dropdown-item" [class.mention-item]="!styleOff"
          (mousedown)="activeIndex=i;itemClick.emit();$event.preventDefault()">
          <ng-template [ngTemplateOutlet]="itemTemplate" [ngTemplateOutletContext]="{'item':item}"></ng-template>
        </a>
      </li>
    </ul>
    `,
      styles: [".mention-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:11em;padding:.5em 0;margin:.125em 0 0;font-size:1em;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25em}.mention-item{display:block;padding:.2em 1.5em;line-height:1.5em;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.mention-active>a{color:#fff;text-decoration:none;background-color:#337ab7;outline:0}.scrollable-menu{display:block;height:auto;max-height:292px;overflow:auto}[hidden]{display:none}.mention-dropdown{bottom:100%;top:auto;margin-bottom:2px}\n"]
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    labelKey: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    list: [{
      type: ViewChild,
      args: ["list", {
        static: true
      }]
    }],
    defaultItemTemplate: [{
      type: ViewChild,
      args: ["defaultItemTemplate", {
        static: true
      }]
    }]
  });
})();
var KEY_BACKSPACE = 8;
var KEY_TAB = 9;
var KEY_ENTER = 13;
var KEY_SHIFT = 16;
var KEY_ESCAPE = 27;
var KEY_SPACE = 32;
var KEY_UP = 38;
var KEY_DOWN = 40;
var KEY_BUFFERED = 229;
var MentionDirective = class {
  constructor(_element, _componentResolver, _viewContainerRef) {
    this._element = _element;
    this._componentResolver = _componentResolver;
    this._viewContainerRef = _viewContainerRef;
    this.mentionConfig = {
      items: []
    };
    this.DEFAULT_CONFIG = {
      items: [],
      triggerChar: "@",
      labelKey: "label",
      maxItems: -1,
      allowSpace: false,
      returnTrigger: false,
      mentionSelect: (item, triggerChar) => {
        return this.activeConfig.triggerChar + item[this.activeConfig.labelKey];
      },
      mentionFilter: (searchString, items) => {
        const searchStringLowerCase = searchString.toLowerCase();
        return items.filter((e) => e[this.activeConfig.labelKey].toLowerCase().startsWith(searchStringLowerCase));
      }
    };
    this.searchTerm = new EventEmitter();
    this.itemSelected = new EventEmitter();
    this.opened = new EventEmitter();
    this.closed = new EventEmitter();
    this.triggerChars = {};
  }
  set mention(items) {
    this.mentionItems = items;
  }
  ngOnChanges(changes) {
    if (changes["mention"] || changes["mentionConfig"]) {
      this.updateConfig();
    }
  }
  updateConfig() {
    let config = this.mentionConfig;
    this.triggerChars = {};
    if (this.mentionItems) {
      config.items = this.mentionItems;
    }
    this.addConfig(config);
    if (config.mentions) {
      config.mentions.forEach((config2) => this.addConfig(config2));
    }
  }
  // add configuration for a trigger char
  addConfig(config) {
    let defaults = Object.assign({}, this.DEFAULT_CONFIG);
    config = Object.assign(defaults, config);
    let items = config.items;
    if (items && items.length > 0) {
      if (typeof items[0] == "string") {
        items = items.map((label) => {
          let object = {};
          object[config.labelKey] = label;
          return object;
        });
      }
      if (config.labelKey) {
        items = items.filter((e) => e[config.labelKey]);
        if (!config.disableSort) {
          items.sort((a, b) => a[config.labelKey].localeCompare(b[config.labelKey]));
        }
      }
    }
    config.items = items;
    this.triggerChars[config.triggerChar] = config;
    if (this.activeConfig && this.activeConfig.triggerChar == config.triggerChar) {
      this.activeConfig = config;
      this.updateSearchList();
    }
  }
  setIframe(iframe) {
    this.iframe = iframe;
  }
  stopEvent(event2) {
    if (!event2.wasClick) {
      event2.preventDefault();
      event2.stopPropagation();
      event2.stopImmediatePropagation();
    }
  }
  blurHandler(event2) {
    this.stopEvent(event2);
    this.stopSearch();
  }
  inputHandler(event2, nativeElement = this._element.nativeElement) {
    if (this.lastKeyCode === KEY_BUFFERED && event2.data) {
      let keyCode = event2.data.charCodeAt(0);
      this.keyHandler({
        keyCode,
        inputEvent: true
      }, nativeElement);
    }
  }
  // @param nativeElement is the alternative text element in an iframe scenario
  keyHandler(event2, nativeElement = this._element.nativeElement) {
    this.lastKeyCode = event2.keyCode;
    if (event2.isComposing || event2.keyCode === KEY_BUFFERED) {
      return;
    }
    let val = getValue(nativeElement);
    let pos = getCaretPosition(nativeElement, this.iframe);
    let charPressed = event2.key;
    if (!charPressed) {
      let charCode = event2.which || event2.keyCode;
      if (!event2.shiftKey && charCode >= 65 && charCode <= 90) {
        charPressed = String.fromCharCode(charCode + 32);
      } else {
        charPressed = String.fromCharCode(event2.which || event2.keyCode);
      }
    }
    if (event2.keyCode == KEY_ENTER && event2.wasClick && pos < this.startPos) {
      pos = this.startNode.length;
      setCaretPosition(this.startNode, pos, this.iframe);
    }
    let config = this.triggerChars[charPressed];
    if (config) {
      this.activeConfig = config;
      this.startPos = event2.inputEvent ? pos - 1 : pos;
      this.startNode = (this.iframe ? this.iframe.contentWindow.getSelection() : window.getSelection()).anchorNode;
      this.searching = true;
      this.searchString = null;
      this.showSearchList(nativeElement);
      this.updateSearchList();
      if (config.returnTrigger) {
        this.searchTerm.emit(config.triggerChar);
      }
    } else if (this.startPos >= 0 && this.searching) {
      if (pos <= this.startPos) {
        this.searchList.hidden = true;
      } else if (event2.keyCode !== KEY_SHIFT && !event2.metaKey && !event2.altKey && !event2.ctrlKey && pos > this.startPos) {
        if (!this.activeConfig.allowSpace && event2.keyCode === KEY_SPACE) {
          this.startPos = -1;
        } else if (event2.keyCode === KEY_BACKSPACE && pos > 0) {
          pos--;
          if (pos == this.startPos) {
            this.stopSearch();
          }
        } else if (this.searchList.hidden) {
          if (event2.keyCode === KEY_TAB || event2.keyCode === KEY_ENTER) {
            this.stopSearch();
            return;
          }
        } else if (!this.searchList.hidden) {
          if (event2.keyCode === KEY_TAB || event2.keyCode === KEY_ENTER) {
            this.stopEvent(event2);
            this.itemSelected.emit(this.searchList.activeItem);
            const text = this.activeConfig.mentionSelect(this.searchList.activeItem, this.activeConfig.triggerChar);
            insertValue(nativeElement, this.startPos, pos, text, this.iframe);
            if ("createEvent" in document) {
              let evt = document.createEvent("HTMLEvents");
              if (this.iframe) {
                evt.initEvent("change", true, false);
              } else {
                evt.initEvent("input", true, false);
              }
              this._element.nativeElement.dispatchEvent(evt);
            }
            this.startPos = -1;
            this.stopSearch();
            return false;
          } else if (event2.keyCode === KEY_ESCAPE) {
            this.stopEvent(event2);
            this.stopSearch();
            return false;
          } else if (event2.keyCode === KEY_DOWN) {
            this.stopEvent(event2);
            this.searchList.activateNextItem();
            return false;
          } else if (event2.keyCode === KEY_UP) {
            this.stopEvent(event2);
            this.searchList.activatePreviousItem();
            return false;
          }
        }
        if (charPressed.length != 1 && event2.keyCode != KEY_BACKSPACE) {
          this.stopEvent(event2);
          return false;
        } else if (this.searching) {
          let mention = val.substring(this.startPos + 1, pos);
          if (event2.keyCode !== KEY_BACKSPACE && !event2.inputEvent) {
            mention += charPressed;
          }
          this.searchString = mention;
          if (this.activeConfig.returnTrigger) {
            const triggerChar = this.searchString || event2.keyCode === KEY_BACKSPACE ? val.substring(this.startPos, this.startPos + 1) : "";
            this.searchTerm.emit(triggerChar + this.searchString);
          } else {
            this.searchTerm.emit(this.searchString);
          }
          this.updateSearchList();
        }
      }
    }
  }
  // exposed for external calls to open the mention list, e.g. by clicking a button
  startSearch(triggerChar, nativeElement = this._element.nativeElement) {
    triggerChar = triggerChar || this.mentionConfig.triggerChar || this.DEFAULT_CONFIG.triggerChar;
    const pos = getCaretPosition(nativeElement, this.iframe);
    insertValue(nativeElement, pos, pos, triggerChar, this.iframe);
    this.keyHandler({
      key: triggerChar,
      inputEvent: true
    }, nativeElement);
  }
  stopSearch() {
    if (this.searchList && !this.searchList.hidden) {
      this.searchList.hidden = true;
      this.closed.emit();
    }
    this.activeConfig = null;
    this.searching = false;
  }
  updateSearchList() {
    let matches = [];
    if (this.activeConfig && this.activeConfig.items) {
      let objects = this.activeConfig.items;
      if (!this.activeConfig.disableSearch && this.searchString && this.activeConfig.labelKey) {
        if (this.activeConfig.mentionFilter) {
          objects = this.activeConfig.mentionFilter(this.searchString, objects);
        }
      }
      matches = objects;
      if (this.activeConfig.maxItems > 0) {
        matches = matches.slice(0, this.activeConfig.maxItems);
      }
    }
    if (this.searchList) {
      this.searchList.items = matches;
      this.searchList.hidden = matches.length == 0;
    }
  }
  showSearchList(nativeElement) {
    this.opened.emit();
    if (this.searchList == null) {
      let componentFactory = this._componentResolver.resolveComponentFactory(MentionListComponent);
      let componentRef = this._viewContainerRef.createComponent(componentFactory);
      this.searchList = componentRef.instance;
      this.searchList.itemTemplate = this.mentionListTemplate;
      componentRef.instance["itemClick"].subscribe(() => {
        nativeElement.focus();
        let fakeKeydown = {
          key: "Enter",
          keyCode: KEY_ENTER,
          wasClick: true
        };
        this.keyHandler(fakeKeydown, nativeElement);
      });
    }
    this.searchList.labelKey = this.activeConfig.labelKey;
    this.searchList.dropUp = this.activeConfig.dropUp;
    this.searchList.styleOff = this.mentionConfig.disableStyle;
    this.searchList.activeIndex = 0;
    this.searchList.position(nativeElement, this.iframe);
    window.requestAnimationFrame(() => this.searchList.reset());
  }
};
MentionDirective.\u0275fac = function MentionDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MentionDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ComponentFactoryResolver$1), \u0275\u0275directiveInject(ViewContainerRef));
};
MentionDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: MentionDirective,
  selectors: [["", "mention", ""], ["", "mentionConfig", ""]],
  hostAttrs: ["autocomplete", "off"],
  hostBindings: function MentionDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown", function MentionDirective_keydown_HostBindingHandler($event) {
        return ctx.keyHandler($event);
      })("input", function MentionDirective_input_HostBindingHandler($event) {
        return ctx.inputHandler($event);
      })("blur", function MentionDirective_blur_HostBindingHandler($event) {
        return ctx.blurHandler($event);
      });
    }
  },
  inputs: {
    mention: "mention",
    mentionConfig: "mentionConfig",
    mentionListTemplate: "mentionListTemplate"
  },
  outputs: {
    searchTerm: "searchTerm",
    itemSelected: "itemSelected",
    opened: "opened",
    closed: "closed"
  },
  features: [\u0275\u0275NgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MentionDirective, [{
    type: Directive,
    args: [{
      selector: "[mention], [mentionConfig]",
      host: {
        "(keydown)": "keyHandler($event)",
        "(input)": "inputHandler($event)",
        "(blur)": "blurHandler($event)",
        "autocomplete": "off"
      }
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: ComponentFactoryResolver$1
    }, {
      type: ViewContainerRef
    }];
  }, {
    mention: [{
      type: Input,
      args: ["mention"]
    }],
    mentionConfig: [{
      type: Input
    }],
    mentionListTemplate: [{
      type: Input
    }],
    searchTerm: [{
      type: Output
    }],
    itemSelected: [{
      type: Output
    }],
    opened: [{
      type: Output
    }],
    closed: [{
      type: Output
    }]
  });
})();
var MentionModule = class {
};
MentionModule.\u0275fac = function MentionModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MentionModule)();
};
MentionModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: MentionModule
});
MentionModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MentionModule, [{
    type: NgModule,
    args: [{
      declarations: [MentionDirective, MentionListComponent],
      imports: [CommonModule],
      exports: [MentionDirective]
    }]
  }], null, null);
})();

// node_modules/ng2-date-picker/fesm2022/ng2-date-picker.mjs
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_isSameOrAfter = __toESM(require_isSameOrAfter(), 1);
var import_isSameOrBefore = __toESM(require_isSameOrBefore(), 1);
var import_isBetween = __toESM(require_isBetween(), 1);
var import_isoWeek = __toESM(require_isoWeek(), 1);
var import_customParseFormat = __toESM(require_customParseFormat(), 1);
function CalendarNavComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function CalendarNavComponent_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.leftSecondaryNavClicked());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.leftSecondaryNavDisabled);
  }
}
function CalendarNavComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function CalendarNavComponent_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onGoToCurrent.emit());
    });
    \u0275\u0275elementEnd();
  }
}
function CalendarNavComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function CalendarNavComponent_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rightSecondaryNavClicked());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.rightSecondaryNavDisabled);
  }
}
function MonthCalendarComponent_div_3_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function MonthCalendarComponent_div_3_button_1_Template_button_click_0_listener() {
      const month_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.monthClicked(month_r2));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const month_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", month_r2.disabled)("innerText", month_r2.text)("ngClass", ctx_r2.getMonthBtnCssClass(month_r2));
    \u0275\u0275attribute("data-date", month_r2.date.format(ctx_r2.componentConfig.format));
  }
}
function MonthCalendarComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, MonthCalendarComponent_div_3_button_1_Template, 1, 4, "button", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const monthRow_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", monthRow_r4);
  }
}
var _c04 = (a0) => ({
  "dp-hide-near-month": a0
});
function DayCalendarComponent_div_0_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 8);
  }
  if (rf & 2) {
    const weekday_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerText", ctx_r1.getWeekdayName(weekday_r3));
  }
}
function DayCalendarComponent_div_0_div_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 12);
  }
  if (rf & 2) {
    const week_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("innerText", week_r4[0].date.isoWeek());
  }
}
function DayCalendarComponent_div_0_div_5_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function DayCalendarComponent_div_0_div_5_button_2_Template_button_click_0_listener() {
      const day_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.dayClicked(day_r6));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", day_r6.disabled)("innerText", ctx_r1.getDayBtnText(day_r6))("ngClass", ctx_r1.getDayBtnCssClass(day_r6));
    \u0275\u0275attribute("data-date", day_r6.date.format(ctx_r1.componentConfig.format));
  }
}
function DayCalendarComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, DayCalendarComponent_div_0_div_5_span_1_Template, 1, 1, "span", 10)(2, DayCalendarComponent_div_0_div_5_button_2_Template, 1, 4, "button", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const week_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.componentConfig.showWeekNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", week_r4);
  }
}
function DayCalendarComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "dp-calendar-nav", 3);
    \u0275\u0275listener("onGoToCurrent", function DayCalendarComponent_div_0_Template_dp_calendar_nav_onGoToCurrent_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToCurrent());
    })("onLabelClick", function DayCalendarComponent_div_0_Template_dp_calendar_nav_onLabelClick_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCalendarMode(ctx_r1.CalendarMode.Month));
    })("onLeftNav", function DayCalendarComponent_div_0_Template_dp_calendar_nav_onLeftNav_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLeftNavClick());
    })("onRightNav", function DayCalendarComponent_div_0_Template_dp_calendar_nav_onRightNav_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRightNavClick());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 4)(3, "div", 5);
    \u0275\u0275template(4, DayCalendarComponent_div_0_span_4_Template, 1, 1, "span", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, DayCalendarComponent_div_0_div_5_Template, 3, 2, "div", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("isLabelClickable", ctx_r1.componentConfig.enableMonthSelector)("label", ctx_r1.navLabel)("showGoToCurrent", ctx_r1._shouldShowCurrent)("showLeftNav", ctx_r1.showLeftNav)("showRightNav", ctx_r1.showRightNav)("theme", ctx_r1.theme);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c04, !ctx_r1.componentConfig.showNearMonthDays));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.weekdays);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.weeks);
  }
}
function DayCalendarComponent_dp_month_calendar_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "dp-month-calendar", 14);
    \u0275\u0275listener("onLeftNav", function DayCalendarComponent_dp_month_calendar_1_Template_dp_month_calendar_onLeftNav_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMonthCalendarLeftClick($event));
    })("onLeftSecondaryNav", function DayCalendarComponent_dp_month_calendar_1_Template_dp_month_calendar_onLeftSecondaryNav_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMonthCalendarSecondaryLeftClick($event));
    })("onNavHeaderBtnClick", function DayCalendarComponent_dp_month_calendar_1_Template_dp_month_calendar_onNavHeaderBtnClick_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCalendarMode(ctx_r1.CalendarMode.Day));
    })("onRightNav", function DayCalendarComponent_dp_month_calendar_1_Template_dp_month_calendar_onRightNav_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMonthCalendarRightClick($event));
    })("onRightSecondaryNav", function DayCalendarComponent_dp_month_calendar_1_Template_dp_month_calendar_onRightSecondaryNav_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMonthCalendarSecondaryRightClick($event));
    })("onSelect", function DayCalendarComponent_dp_month_calendar_1_Template_dp_month_calendar_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.monthSelected($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("config", ctx_r1.monthCalendarConfig)("displayDate", ctx_r1._currentDateView)("ngModel", ctx_r1._selected)("theme", ctx_r1.theme);
  }
}
function TimeSelectComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "li", 5);
    \u0275\u0275elementStart(2, "li", 10)(3, "button", 2);
    \u0275\u0275listener("click", function TimeSelectComponent_ng_container_10_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.increase("second"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 11);
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function TimeSelectComponent_ng_container_10_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.decrease("second"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("innerText", ctx_r1.componentConfig.timeSeparator);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.showIncSecond);
    \u0275\u0275advance();
    \u0275\u0275property("innerText", ctx_r1.seconds);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.showDecSecond);
  }
}
function TimeSelectComponent_li_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 12)(1, "button", 2);
    \u0275\u0275listener("click", function TimeSelectComponent_li_11_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMeridiem());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "span", 13);
    \u0275\u0275elementStart(3, "button", 4);
    \u0275\u0275listener("click", function TimeSelectComponent_li_11_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMeridiem());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.showToggleMeridiem);
    \u0275\u0275advance();
    \u0275\u0275property("innerText", ctx_r1.meridiem);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.showToggleMeridiem);
  }
}
var _c14 = ["dayCalendar"];
var _c23 = ["container"];
var _c32 = ["monthCalendar"];
var _c42 = ["daytimeCalendar"];
var _c52 = ["timeSelect"];
var _c6 = ["inputElement"];
var _c7 = (a0) => ({
  "dp-open": a0
});
function DatePickerComponent_ng_template_5_dp_day_calendar_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "dp-day-calendar", 15, 3);
    \u0275\u0275listener("onGoToCurrent", function DatePickerComponent_ng_template_5_dp_day_calendar_3_Template_dp_day_calendar_onGoToCurrent_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToCurrent());
    })("onLeftNav", function DatePickerComponent_ng_template_5_dp_day_calendar_3_Template_dp_day_calendar_onLeftNav_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onLeftNavClick($event));
    })("onRightNav", function DatePickerComponent_ng_template_5_dp_day_calendar_3_Template_dp_day_calendar_onRightNav_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onRightNavClick($event));
    })("onSelect", function DatePickerComponent_ng_template_5_dp_day_calendar_3_Template_dp_day_calendar_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.dateSelected($event, "day", ctx_r2.selectEvent.SELECTION, false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("config", ctx_r2.dayCalendarConfig)("displayDate", ctx_r2.displayDate)("ngModel", ctx_r2._selected)("theme", ctx_r2.theme);
  }
}
function DatePickerComponent_ng_template_5_dp_month_calendar_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "dp-month-calendar", 15, 4);
    \u0275\u0275listener("onGoToCurrent", function DatePickerComponent_ng_template_5_dp_month_calendar_4_Template_dp_month_calendar_onGoToCurrent_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToCurrent());
    })("onLeftNav", function DatePickerComponent_ng_template_5_dp_month_calendar_4_Template_dp_month_calendar_onLeftNav_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onLeftNavClick($event));
    })("onRightNav", function DatePickerComponent_ng_template_5_dp_month_calendar_4_Template_dp_month_calendar_onRightNav_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onRightNavClick($event));
    })("onSelect", function DatePickerComponent_ng_template_5_dp_month_calendar_4_Template_dp_month_calendar_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.dateSelected($event, "month", ctx_r2.selectEvent.SELECTION, false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("config", ctx_r2.dayCalendarConfig)("displayDate", ctx_r2.displayDate)("ngModel", ctx_r2._selected)("theme", ctx_r2.theme);
  }
}
function DatePickerComponent_ng_template_5_dp_time_select_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "dp-time-select", 16, 5);
    \u0275\u0275listener("onChange", function DatePickerComponent_ng_template_5_dp_time_select_5_Template_dp_time_select_onChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.dateSelected($event, "second", ctx_r2.selectEvent.SELECTION, true));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("config", ctx_r2.timeSelectConfig)("ngModel", ctx_r2._selected && ctx_r2._selected[0])("theme", ctx_r2.theme);
  }
}
function DatePickerComponent_ng_template_5_dp_day_time_calendar_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "dp-day-time-calendar", 17, 6);
    \u0275\u0275listener("onChange", function DatePickerComponent_ng_template_5_dp_day_time_calendar_6_Template_dp_day_time_calendar_onChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.dateSelected($event, "second", ctx_r2.selectEvent.SELECTION, true));
    })("onGoToCurrent", function DatePickerComponent_ng_template_5_dp_day_time_calendar_6_Template_dp_day_time_calendar_onGoToCurrent_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToCurrent());
    })("onLeftNav", function DatePickerComponent_ng_template_5_dp_day_time_calendar_6_Template_dp_day_time_calendar_onLeftNav_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onLeftNavClick($event));
    })("onRightNav", function DatePickerComponent_ng_template_5_dp_day_time_calendar_6_Template_dp_day_time_calendar_onRightNav_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onRightNavClick($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("config", ctx_r2.dayTimeCalendarConfig)("displayDate", ctx_r2.displayDate)("ngModel", ctx_r2._selected && ctx_r2._selected[0])("theme", ctx_r2.theme);
  }
}
function DatePickerComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", null, 2)(2, "div", 11);
    \u0275\u0275template(3, DatePickerComponent_ng_template_5_dp_day_calendar_3_Template, 2, 4, "dp-day-calendar", 12)(4, DatePickerComponent_ng_template_5_dp_month_calendar_4_Template, 2, 4, "dp-month-calendar", 12)(5, DatePickerComponent_ng_template_5_dp_time_select_5_Template, 2, 3, "dp-time-select", 13)(6, DatePickerComponent_ng_template_5_dp_day_time_calendar_6_Template, 2, 4, "dp-day-time-calendar", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("dp-popup ", ctx_r2.theme, "");
    \u0275\u0275property("ngSwitch", ctx_r2.mode);
    \u0275\u0275attribute("data-hidden", !ctx_r2.areCalendarsShown);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "day");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "month");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "time");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "daytime");
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
      const errors = validators.reduce((map2, err) => {
        if (!err.isValid()) {
          map2[err.key] = {
            given: value
          };
        }
        return map2;
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
    this.\u0275fac = function UtilsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UtilsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _UtilsService,
      factory: _UtilsService.\u0275fac,
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
    return daysArr.reduce((map2, day, index) => {
      map2[day] = index;
      return map2;
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
    return daysArr.reduce((map2, day, index) => {
      map2[index] = day;
      return map2;
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
    this.\u0275fac = function DayCalendarService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DayCalendarService)(\u0275\u0275inject(UtilsService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _DayCalendarService,
      factory: _DayCalendarService.\u0275fac,
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
    this.\u0275fac = function TimeSelectService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TimeSelectService)(\u0275\u0275inject(UtilsService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _TimeSelectService,
      factory: _TimeSelectService.\u0275fac,
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
    this.\u0275fac = function DayTimeCalendarService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DayTimeCalendarService)(\u0275\u0275inject(UtilsService), \u0275\u0275inject(DayCalendarService), \u0275\u0275inject(TimeSelectService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _DayTimeCalendarService,
      factory: _DayTimeCalendarService.\u0275fac,
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
    this.\u0275fac = function DatePickerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DatePickerService)(\u0275\u0275inject(UtilsService), \u0275\u0275inject(TimeSelectService), \u0275\u0275inject(DayTimeCalendarService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _DatePickerService,
      factory: _DatePickerService.\u0275fac,
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
    this.\u0275fac = function MonthCalendarService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MonthCalendarService)(\u0275\u0275inject(UtilsService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _MonthCalendarService,
      factory: _MonthCalendarService.\u0275fac,
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
    this.\u0275fac = function CalendarNavComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CalendarNavComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _CalendarNavComponent,
      selectors: [["dp-calendar-nav"]],
      hostVars: 2,
      hostBindings: function CalendarNavComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classMap(ctx.theme);
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
          \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
          \u0275\u0275element(2, "span", 2);
          \u0275\u0275elementStart(3, "button", 3);
          \u0275\u0275listener("click", function CalendarNavComponent_Template_button_click_3_listener() {
            return ctx.labelClicked();
          });
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(4, "div", 4)(5, "div", 5);
          \u0275\u0275template(6, CalendarNavComponent_button_6_Template, 1, 1, "button", 6);
          \u0275\u0275elementStart(7, "button", 7);
          \u0275\u0275listener("click", function CalendarNavComponent_Template_button_click_7_listener() {
            return ctx.leftNavClicked();
          });
          \u0275\u0275elementEnd()();
          \u0275\u0275template(8, CalendarNavComponent_button_8_Template, 1, 0, "button", 8);
          \u0275\u0275elementStart(9, "div", 9)(10, "button", 10);
          \u0275\u0275listener("click", function CalendarNavComponent_Template_button_click_10_listener() {
            return ctx.rightNavClicked();
          });
          \u0275\u0275elementEnd();
          \u0275\u0275template(11, CalendarNavComponent_button_11_Template, 1, 1, "button", 11);
          \u0275\u0275elementEnd()()();
        }
        if (rf & 2) {
          \u0275\u0275advance(2);
          \u0275\u0275property("hidden", ctx.isLabelClickable)("innerText", ctx.label);
          \u0275\u0275attribute("data-hidden", ctx.isLabelClickable);
          \u0275\u0275advance();
          \u0275\u0275property("hidden", !ctx.isLabelClickable)("innerText", ctx.label);
          \u0275\u0275attribute("data-hidden", !ctx.isLabelClickable);
          \u0275\u0275advance(3);
          \u0275\u0275property("ngIf", ctx.showLeftSecondaryNav);
          \u0275\u0275advance();
          \u0275\u0275property("disabled", ctx.leftNavDisabled)("hidden", !ctx.showLeftNav);
          \u0275\u0275attribute("data-hidden", !ctx.showLeftNav);
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", ctx.showGoToCurrent);
          \u0275\u0275advance(2);
          \u0275\u0275property("disabled", ctx.rightNavDisabled)("hidden", !ctx.showRightNav);
          \u0275\u0275attribute("data-hidden", !ctx.showRightNav);
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", ctx.showRightSecondaryNav);
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
    this.\u0275fac = function MonthCalendarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MonthCalendarComponent)(\u0275\u0275directiveInject(MonthCalendarService), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MonthCalendarComponent,
      selectors: [["dp-month-calendar"]],
      hostVars: 2,
      hostBindings: function MonthCalendarComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classMap(ctx.theme);
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
      features: [\u0275\u0275ProvidersFeature([MonthCalendarService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _MonthCalendarComponent),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => _MonthCalendarComponent),
        multi: true
      }]), \u0275\u0275NgOnChangesFeature],
      decls: 4,
      vars: 9,
      consts: [["dir", "ltr", 1, "dp-month-calendar-container"], [3, "onGoToCurrent", "onLabelClick", "onLeftNav", "onLeftSecondaryNav", "onRightNav", "onRightSecondaryNav", "isLabelClickable", "label", "showGoToCurrent", "showLeftNav", "showLeftSecondaryNav", "showRightNav", "showRightSecondaryNav", "theme"], [1, "dp-calendar-wrapper"], ["class", "dp-months-row", 4, "ngFor", "ngForOf"], [1, "dp-months-row"], ["class", "dp-calendar-month", "type", "button", 3, "disabled", "innerText", "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "dp-calendar-month", 3, "click", "disabled", "innerText", "ngClass"]],
      template: function MonthCalendarComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div", 0)(1, "dp-calendar-nav", 1);
          \u0275\u0275listener("onGoToCurrent", function MonthCalendarComponent_Template_dp_calendar_nav_onGoToCurrent_1_listener() {
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
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(2, "div", 2);
          \u0275\u0275template(3, MonthCalendarComponent_div_3_Template, 2, 1, "div", 3);
          \u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          \u0275\u0275advance();
          \u0275\u0275property("isLabelClickable", ctx.componentConfig.isNavHeaderBtnClickable)("label", ctx.navLabel)("showGoToCurrent", ctx.shouldShowCurrent())("showLeftNav", ctx.showLeftNav)("showLeftSecondaryNav", ctx.showSecondaryLeftNav)("showRightNav", ctx.showRightNav)("showRightSecondaryNav", ctx.showSecondaryRightNav)("theme", ctx.theme);
          \u0275\u0275advance(2);
          \u0275\u0275property("ngForOf", ctx.yearMonths);
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
    this.\u0275fac = function DayCalendarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DayCalendarComponent)(\u0275\u0275directiveInject(DayCalendarService), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _DayCalendarComponent,
      selectors: [["dp-day-calendar"]],
      hostVars: 2,
      hostBindings: function DayCalendarComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classMap(ctx.theme);
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
      features: [\u0275\u0275ProvidersFeature([DayCalendarService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _DayCalendarComponent),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => _DayCalendarComponent),
        multi: true
      }]), \u0275\u0275NgOnChangesFeature],
      decls: 2,
      vars: 2,
      consts: [["class", "dp-day-calendar-container", "dir", "ltr", 4, "ngIf"], [3, "config", "displayDate", "ngModel", "theme", "onLeftNav", "onLeftSecondaryNav", "onNavHeaderBtnClick", "onRightNav", "onRightSecondaryNav", "onSelect", 4, "ngIf"], ["dir", "ltr", 1, "dp-day-calendar-container"], [3, "onGoToCurrent", "onLabelClick", "onLeftNav", "onRightNav", "isLabelClickable", "label", "showGoToCurrent", "showLeftNav", "showRightNav", "theme"], [1, "dp-calendar-wrapper", 3, "ngClass"], [1, "dp-weekdays"], ["class", "dp-calendar-weekday", 3, "innerText", 4, "ngFor", "ngForOf"], ["class", "dp-calendar-week", 4, "ngFor", "ngForOf"], [1, "dp-calendar-weekday", 3, "innerText"], [1, "dp-calendar-week"], ["class", "dp-week-number", 3, "innerText", 4, "ngIf"], ["class", "dp-calendar-day", "type", "button", 3, "disabled", "innerText", "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "dp-week-number", 3, "innerText"], ["type", "button", 1, "dp-calendar-day", 3, "click", "disabled", "innerText", "ngClass"], [3, "onLeftNav", "onLeftSecondaryNav", "onNavHeaderBtnClick", "onRightNav", "onRightSecondaryNav", "onSelect", "config", "displayDate", "ngModel", "theme"]],
      template: function DayCalendarComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275template(0, DayCalendarComponent_div_0_Template, 6, 11, "div", 0)(1, DayCalendarComponent_dp_month_calendar_1_Template, 1, 4, "dp-month-calendar", 1);
        }
        if (rf & 2) {
          \u0275\u0275property("ngIf", ctx.currentCalendarMode === ctx.CalendarMode.Day);
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", ctx.currentCalendarMode === ctx.CalendarMode.Month);
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
    this.\u0275fac = function TimeSelectComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TimeSelectComponent)(\u0275\u0275directiveInject(TimeSelectService), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _TimeSelectComponent,
      selectors: [["dp-time-select"]],
      hostVars: 2,
      hostBindings: function TimeSelectComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classMap(ctx.theme);
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
      features: [\u0275\u0275ProvidersFeature([TimeSelectService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _TimeSelectComponent),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => _TimeSelectComponent),
        multi: true
      }]), \u0275\u0275NgOnChangesFeature],
      decls: 12,
      vars: 9,
      consts: [["dir", "ltr", 1, "dp-time-select-controls"], [1, "dp-time-select-control", "dp-time-select-control-hours"], ["type", "button", 1, "dp-time-select-control-up", 3, "click", "disabled"], [1, "dp-time-select-display-hours", 3, "innerText"], ["type", "button", 1, "dp-time-select-control-down", 3, "click", "disabled"], [1, "dp-time-select-control", "dp-time-select-separator", 3, "innerText"], [1, "dp-time-select-control", "dp-time-select-control-minutes"], [1, "dp-time-select-display-minutes", 3, "innerText"], [4, "ngIf"], ["class", "dp-time-select-control dp-time-select-control-meridiem", 4, "ngIf"], [1, "dp-time-select-control", "dp-time-select-control-seconds"], [1, "dp-time-select-display-seconds", 3, "innerText"], [1, "dp-time-select-control", "dp-time-select-control-meridiem"], [1, "dp-time-select-display-meridiem", 3, "innerText"]],
      template: function TimeSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "ul", 0)(1, "li", 1)(2, "button", 2);
          \u0275\u0275listener("click", function TimeSelectComponent_Template_button_click_2_listener() {
            return ctx.increase("hour");
          });
          \u0275\u0275elementEnd();
          \u0275\u0275element(3, "span", 3);
          \u0275\u0275elementStart(4, "button", 4);
          \u0275\u0275listener("click", function TimeSelectComponent_Template_button_click_4_listener() {
            return ctx.decrease("hour");
          });
          \u0275\u0275elementEnd()();
          \u0275\u0275element(5, "li", 5);
          \u0275\u0275elementStart(6, "li", 6)(7, "button", 2);
          \u0275\u0275listener("click", function TimeSelectComponent_Template_button_click_7_listener() {
            return ctx.increase("minute");
          });
          \u0275\u0275elementEnd();
          \u0275\u0275element(8, "span", 7);
          \u0275\u0275elementStart(9, "button", 4);
          \u0275\u0275listener("click", function TimeSelectComponent_Template_button_click_9_listener() {
            return ctx.decrease("minute");
          });
          \u0275\u0275elementEnd()();
          \u0275\u0275template(10, TimeSelectComponent_ng_container_10_Template, 6, 4, "ng-container", 8)(11, TimeSelectComponent_li_11_Template, 4, 3, "li", 9);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          \u0275\u0275advance(2);
          \u0275\u0275property("disabled", !ctx.showIncHour);
          \u0275\u0275advance();
          \u0275\u0275property("innerText", ctx.hours);
          \u0275\u0275advance();
          \u0275\u0275property("disabled", !ctx.showDecHour);
          \u0275\u0275advance();
          \u0275\u0275property("innerText", ctx.componentConfig.timeSeparator);
          \u0275\u0275advance(2);
          \u0275\u0275property("disabled", !ctx.showIncMinute);
          \u0275\u0275advance();
          \u0275\u0275property("innerText", ctx.minutes);
          \u0275\u0275advance();
          \u0275\u0275property("disabled", !ctx.showDecMinute);
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", ctx.componentConfig.showSeconds);
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", !ctx.componentConfig.showTwentyFourHours);
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
    this.\u0275fac = function DayTimeCalendarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DayTimeCalendarComponent)(\u0275\u0275directiveInject(DayTimeCalendarService), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _DayTimeCalendarComponent,
      selectors: [["dp-day-time-calendar"]],
      viewQuery: function DayTimeCalendarComponent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c14, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dayCalendarRef = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function DayTimeCalendarComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classMap(ctx.theme);
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
      features: [\u0275\u0275ProvidersFeature([DayTimeCalendarService, DayCalendarService, TimeSelectService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _DayTimeCalendarComponent),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => _DayTimeCalendarComponent),
        multi: true
      }]), \u0275\u0275NgOnChangesFeature],
      decls: 4,
      vars: 7,
      consts: [["dayCalendar", ""], ["timeSelect", ""], [3, "onGoToCurrent", "onLeftNav", "onRightNav", "onSelect", "config", "displayDate", "ngModel", "theme"], [3, "onChange", "config", "ngModel", "theme"]],
      template: function DayTimeCalendarComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = \u0275\u0275getCurrentView();
          \u0275\u0275elementStart(0, "dp-day-calendar", 2, 0);
          \u0275\u0275listener("onGoToCurrent", function DayTimeCalendarComponent_Template_dp_day_calendar_onGoToCurrent_0_listener() {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.onGoToCurrent.emit());
          })("onLeftNav", function DayTimeCalendarComponent_Template_dp_day_calendar_onLeftNav_0_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.onLeftNavClick($event));
          })("onRightNav", function DayTimeCalendarComponent_Template_dp_day_calendar_onRightNav_0_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.onRightNavClick($event));
          })("onSelect", function DayTimeCalendarComponent_Template_dp_day_calendar_onSelect_0_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.dateSelected($event));
          });
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(2, "dp-time-select", 3, 1);
          \u0275\u0275listener("onChange", function DayTimeCalendarComponent_Template_dp_time_select_onChange_2_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.timeChange($event));
          });
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          \u0275\u0275property("config", ctx.componentConfig)("displayDate", ctx.displayDate)("ngModel", ctx._selected)("theme", ctx.theme);
          \u0275\u0275advance(2);
          \u0275\u0275property("config", ctx.componentConfig)("ngModel", ctx._selected)("theme", ctx.theme);
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
  onBodyClick(event2) {
    if (this.inputElement.nativeElement === event2.target) {
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
  onKeyPress(event2) {
    switch (event2.key) {
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
    this.\u0275fac = function DatePickerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DatePickerComponent)(\u0275\u0275directiveInject(DatePickerService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _DatePickerComponent,
      selectors: [["dp-date-picker"]],
      viewQuery: function DatePickerComponent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c23, 5);
          \u0275\u0275viewQuery(_c14, 5);
          \u0275\u0275viewQuery(_c32, 5);
          \u0275\u0275viewQuery(_c42, 5);
          \u0275\u0275viewQuery(_c52, 5);
          \u0275\u0275viewQuery(_c6, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.calendarContainer = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dayCalendarRef = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.monthCalendarRef = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dayTimeCalendarRef = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.timeSelectRef = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputElement = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function DatePickerComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function DatePickerComponent_click_HostBindingHandler() {
            return ctx.onClick();
          });
        }
        if (rf & 2) {
          \u0275\u0275classMap(ctx.theme);
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
      features: [\u0275\u0275ProvidersFeature([DatePickerService, DayTimeCalendarService, DayCalendarService, TimeSelectService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _DatePickerComponent),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => _DatePickerComponent),
        multi: true
      }]), \u0275\u0275NgOnChangesFeature],
      decls: 6,
      vars: 13,
      consts: [["trigger", ""], ["inputElement", ""], ["container", ""], ["dayCalendar", ""], ["monthCalendar", ""], ["timeSelect", ""], ["daytimeCalendar", ""], ["dir", "ltr", 3, "ngClass"], [1, "dp-input-container", 3, "hidden"], ["type", "text", 1, "dp-picker-input", 3, "blur", "focus", "keydown.enter", "ngModelChange", "disabled", "ngModel", "placeholder", "readonly"], ["cdkConnectedOverlay", "", 3, "overlayOutsideClick", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayHasBackdrop"], [3, "ngSwitch"], [3, "config", "displayDate", "ngModel", "theme", "onGoToCurrent", "onLeftNav", "onRightNav", "onSelect", 4, "ngSwitchCase"], [3, "config", "ngModel", "theme", "onChange", 4, "ngSwitchCase"], [3, "config", "displayDate", "ngModel", "theme", "onChange", "onGoToCurrent", "onLeftNav", "onRightNav", 4, "ngSwitchCase"], [3, "onGoToCurrent", "onLeftNav", "onRightNav", "onSelect", "config", "displayDate", "ngModel", "theme"], [3, "onChange", "config", "ngModel", "theme"], [3, "onChange", "onGoToCurrent", "onLeftNav", "onRightNav", "config", "displayDate", "ngModel", "theme"]],
      template: function DatePickerComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = \u0275\u0275getCurrentView();
          \u0275\u0275elementStart(0, "div", 7, 0)(2, "div", 8)(3, "input", 9, 1);
          \u0275\u0275listener("blur", function DatePickerComponent_Template_input_blur_3_listener() {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.inputBlurred());
          })("focus", function DatePickerComponent_Template_input_focus_3_listener() {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.inputFocused());
          })("keydown.enter", function DatePickerComponent_Template_input_keydown_enter_3_listener() {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.componentConfig.closeOnEnter && ctx.hideCalendar());
          })("ngModelChange", function DatePickerComponent_Template_input_ngModelChange_3_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.onViewDateChange($event));
          });
          \u0275\u0275elementEnd()();
          \u0275\u0275template(5, DatePickerComponent_ng_template_5_Template, 7, 9, "ng-template", 10);
          \u0275\u0275listener("overlayOutsideClick", function DatePickerComponent_Template_ng_template_overlayOutsideClick_5_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.onBodyClick($event));
          });
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          const trigger_r7 = \u0275\u0275reference(1);
          \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c7, ctx.areCalendarsShown));
          \u0275\u0275advance(2);
          \u0275\u0275property("hidden", ctx.componentConfig.hideInputContainer);
          \u0275\u0275attribute("data-hidden", ctx.componentConfig.hideInputContainer);
          \u0275\u0275advance();
          \u0275\u0275property("disabled", ctx.disabled)("ngModel", ctx.inputElementValue)("placeholder", ctx.placeholder)("readonly", ctx.componentConfig.disableKeypress);
          \u0275\u0275advance(2);
          \u0275\u0275property("cdkConnectedOverlayPositions", ctx.overlayPosition)("cdkConnectedOverlayOrigin", ctx.origin || trigger_r7)("cdkConnectedOverlayOpen", ctx.areCalendarsShown)("cdkConnectedOverlayHasBackdrop", false);
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
    this.\u0275fac = function DatePickerDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DatePickerDirective)(\u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ComponentFactoryResolver$1), \u0275\u0275directiveInject(NgControl, 8), \u0275\u0275directiveInject(UtilsService));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _DatePickerDirective,
      selectors: [["", "dpDayPicker", ""]],
      hostBindings: function DatePickerDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function DatePickerDirective_click_HostBindingHandler() {
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
    this.\u0275fac = function DpDatePickerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DpDatePickerModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _DpDatePickerModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
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
  AutocompleteLibModule,
  MentionModule,
  ImageCropperModule,
  DpDatePickerModule
};
//# sourceMappingURL=chunk-FRU5HPWK.js.map
