// node_modules/ids/dist/index.esm.js
function createCommonjsModule(fn, module) {
  return module = {
    exports: {}
  }, fn(module, module.exports), module.exports;
}
var hat_1 = createCommonjsModule(function(module) {
  var hat = module.exports = function(bits, base) {
    if (!base) base = 16;
    if (bits === void 0) bits = 128;
    if (bits <= 0) return "0";
    var digits = Math.log(Math.pow(2, bits)) / Math.log(base);
    for (var i = 2; digits === Infinity; i *= 2) {
      digits = Math.log(Math.pow(2, bits / i)) / Math.log(base) * i;
    }
    var rem = digits - Math.floor(digits);
    var res = "";
    for (var i = 0; i < Math.floor(digits); i++) {
      var x = Math.floor(Math.random() * base).toString(base);
      res = x + res;
    }
    if (rem) {
      var b = Math.pow(base, rem);
      var x = Math.floor(Math.random() * b).toString(base);
      res = x + res;
    }
    var parsed = parseInt(res, base);
    if (parsed !== Infinity && parsed >= Math.pow(2, bits)) {
      return hat(bits, base);
    } else return res;
  };
  hat.rack = function(bits, base, expandBy) {
    var fn = function(data) {
      var iters = 0;
      do {
        if (iters++ > 10) {
          if (expandBy) bits += expandBy;
          else throw new Error("too many ID collisions, use more bits");
        }
        var id = hat(bits, base);
      } while (Object.hasOwnProperty.call(hats, id));
      hats[id] = data;
      return id;
    };
    var hats = fn.hats = {};
    fn.get = function(id) {
      return fn.hats[id];
    };
    fn.set = function(id, value) {
      fn.hats[id] = value;
      return fn;
    };
    fn.bits = bits || 128;
    fn.base = base || 16;
    return fn;
  };
});
function Ids(seed) {
  if (!(this instanceof Ids)) {
    return new Ids(seed);
  }
  seed = seed || [128, 36, 1];
  this._seed = seed.length ? hat_1.rack(seed[0], seed[1], seed[2]) : seed;
}
Ids.prototype.next = function(element) {
  return this._seed(element || true);
};
Ids.prototype.nextPrefixed = function(prefix, element) {
  var id;
  do {
    id = prefix + this.next(true);
  } while (this.assigned(id));
  this.claim(id, element);
  return id;
};
Ids.prototype.claim = function(id, element) {
  this._seed.set(id, element || true);
};
Ids.prototype.assigned = function(id) {
  return this._seed.get(id) || false;
};
Ids.prototype.unclaim = function(id) {
  delete this._seed.hats[id];
};
Ids.prototype.clear = function() {
  var hats = this._seed.hats, id;
  for (id in hats) {
    this.unclaim(id);
  }
};
var index_esm_default = Ids;

export {
  index_esm_default
};
//# sourceMappingURL=chunk-K5QNCREJ.js.map
