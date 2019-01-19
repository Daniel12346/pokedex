/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/pokeStyles.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/app.css",
    "revision": "0a431355178479653788c8c08762b906"
  },
  {
    "url": "build/app.js",
    "revision": "0389641d98e6ff92c4faa6cee4874722"
  },
  {
    "url": "build/app/ajlqh2n5.entry.js",
    "revision": "0092ea1f6379dedcd23489b28f65cd95"
  },
  {
    "url": "build/app/ajlqh2n5.sc.entry.js",
    "revision": "06ad1bd47cea61bb7e3579bef4e667b2"
  },
  {
    "url": "build/app/app.ioi7bpck.js",
    "revision": "22823b04f0a455eabd26dd38e1be0191"
  },
  {
    "url": "build/app/app.v4gfsqkq.js",
    "revision": "578805b2a2aa99a3402757fbed85c9d2"
  },
  {
    "url": "build/app/qxqwslap.entry.js",
    "revision": "a97ab04a500f1740c28e929b06245fe9"
  },
  {
    "url": "build/app/qxqwslap.sc.entry.js",
    "revision": "193cfb3bceeea63c9ab1c21ee981ed2b"
  },
  {
    "url": "build/app/rv2yjezf.entry.js",
    "revision": "455db28c4cc52a7fa0143963fb3bf2ed"
  },
  {
    "url": "build/app/rv2yjezf.sc.entry.js",
    "revision": "628cb36ee7a782cb5d4f58f0ee8362fc"
  },
  {
    "url": "build/app/vwz3heho.entry.js",
    "revision": "bf0cf7844868c0575c434565fcd6421e"
  },
  {
    "url": "build/app/vwz3heho.sc.entry.js",
    "revision": "7793889c7fa69cf2e7618a44956345ec"
  },
  {
    "url": "build/app/xef0aaf3.entry.js",
    "revision": "c4417401a7f71ef8df71d843172de9e9"
  },
  {
    "url": "build/app/xef0aaf3.sc.entry.js",
    "revision": "7282e703193cd303f4c2e00720449313"
  },
  {
    "url": "index.html",
    "revision": "91cd4d3a5e98bb2f45fe9484a83d0049"
  },
  {
    "url": "manifest.json",
    "revision": "0c129721ede7cd25304ebdd238d774ad"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
