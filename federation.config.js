const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'listingcms',
  exposes: {
    './Component': './src/app/app.component.ts',
    './Routes': './src/app/app.routes.ts'
  },

  shared: {
    '@angular/core': { singleton: true, strictVersion: false },
    '@angular/common': { singleton: true, strictVersion: false },
    '@angular/common/http': { singleton: true, strictVersion: false},
    '@angular/router': { singleton: true, strictVersion: false },
    '@angular/platform-browser': { singleton: true, strictVersion: false },
    '@angular/platform-browser/animations': { singleton: true, strictVersion: false },
    '@angular/core/rxjs-interop': { singleton: true, strictVersion: false },
    '@angular/core/primitives/signals': { singleton: true, strictVersion: false },
    '@angular/core/primitives/event-dispatch': { singleton: true, strictVersion: false },
    'ngx-toastr': { singleton: true, strictVersion: false }
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ]

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
  
});
