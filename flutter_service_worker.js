'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "38b2a3ad0b70565eacf0b3fd9edb3935",
"version.json": "45206e45df56ea9c0090f4063e2821ab",
"index.html": "3b622a0327777f5c2a56f47f0f2cc685",
"/": "3b622a0327777f5c2a56f47f0f2cc685",
"main.dart.js": "decfb7014f5486e447b319a2bfed8d2b",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "180461cd118b0a8e3b628d3564b95bb9",
"icons/Icon-192.png": "3eb461fba19eb236885f8d3c1144999f",
"icons/Icon-maskable-192.png": "3eb461fba19eb236885f8d3c1144999f",
"icons/Icon-maskable-512.png": "2d2d20707931a608b9d13ed4e4b1a1a7",
"icons/Icon-512.png": "2d2d20707931a608b9d13ed4e4b1a1a7",
"manifest.json": "33c2401d2c020fcc385b196b26616f0f",
".git/config": "652d90d9607d0a1e9dd4b635a487c87e",
".git/objects/61/f99332d4250353bde6d57e6840c6c46d5cc3f2": "20cefc2de091f3b158a3ee199cf1c907",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/68/75e564f81ea40e299df190ba57077292fbfbf8": "ed2455a96b4ccaffb6996220b63a478f",
".git/objects/57/c140370abed1d55bc2d4994a91ffc7d4266d62": "66ba6866745fd42bb8a2ada8759acd91",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3b/5eba7be198de25e2a915f4d3cbab406f13c0ac": "79b833e8f6b2b14fc655c97e63c738c2",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/9e/0675fa9ef7b2f4b484185fb56d7f7a34206a42": "7ba7ff20ae9acba645809aad05d870ca",
".git/objects/6a/1e5b778c835533e91acf182265ac721287dcf2": "1024a407f3cc820cd6671d68996b5c2c",
".git/objects/32/6845a69508a6b9f3686d213d9b12c62bcccb6e": "5b6e369fd61c07815528885aadcddeb2",
".git/objects/35/6b0aaffaea1f5427a7a3e32ab3a22a02e879c5": "6accd176758a4973d9829fbb90865b1e",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/51/4d1607b5d2df48b7ed31e2cbd151e0239d20b8": "7caaae1da2426dcfaa63fb6dc3acef36",
".git/objects/51/5c207031ad549064c3685457a7309b1ce73654": "f9b7a1bc604176eadfdd1d7d330087bb",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/60/1e4a7b68d622598f4a016d9b76d1e4f993e6b6": "897d1f6e3bba65fcba7c0c4dfbd19a65",
".git/objects/5a/cb10548342ae59fe754ef73c5b3070b6d41c08": "36e40e089ea52d31dddb732a522aac5e",
".git/objects/5a/5e4462086f245542cd0cef3693b51a0c432398": "613e532532ec2c1921f50fa2f8254835",
".git/objects/9c/4e1a3beac3c21dff80d862e8b956e0c7241a1e": "1a9ac32063523d46a8c9a77cce755422",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b3/5f3f3455cae874b2521310758e69adf48e5790": "66821b913e12fccf03084fc81ef8ac26",
".git/objects/bd/548c7a1a251bc98500759ff9c96783cdeb1992": "54a343cf98027fe1a47ce5b585f5e2d7",
".git/objects/bc/1c74e4aeee76faf237e7e0604ebe817044b1cf": "487130b807fdaf7c17fffa20ef4c553c",
".git/objects/e2/2fe0cc761c6e9b11816c13d036141a9d1712f9": "dcbe5622d8288d650e98dc4fbdcbbe87",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/eb/b1cc9e6a3e0f0e9b23ebf97c27e27aa8415b15": "6b324a9861ab99d81b4724dee542218e",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c7/847ba654668d8c0e056d8e7277f38915ea764b": "68990b07f01ae65eef7e90956173662d",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/f2/9c93bd94d29240e8957b5d7fb6e4a6f840f6e9": "3f19ca87281cb262db069df4adca8a58",
".git/objects/e4/ef2a890b14477528f9fa5a883b8c1774af8923": "5e38eca63dc495d6008194c65ccd1441",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c1/da6041bcb135de17cfe8698b1f9196b4f801c6": "f8daa35a4661ce831e26301066edbb33",
".git/objects/ec/929a2b92c2a0c49bb82697397a1300fc689bce": "225d0d79a4ce1b32aad0e4e767de3885",
".git/objects/7c/61448f6cc63a9f140e28d204ce38aec22e2df1": "09860f9399f58ef88ad6b0665336d331",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/73/bbd111eb6e7e058486c9cb3ab348f326447e1f": "e8455294e1a08de9df4d1fbfb874628f",
".git/objects/74/9ceabb784230244afc699cc3e41dcbc8b9786f": "e4315ec48ea223bf981af79b1b21c496",
".git/objects/1a/38c05fd78f14b59c2926abd0031f28796b41d1": "ff95bbee25ea27e58470bbc432f8795d",
".git/objects/17/a002931e77e8a524eed5a16d3ea3d9433679dc": "c1bad3f8e81b5eb644d236f981f7db55",
".git/objects/8a/c8a4a2d06bb4aadbdac80363f3c7e3fa9b42cd": "2bbf1afc05620cb7b49b46a35bde3d64",
".git/objects/75/7eefc2902b42af62383d3f69f84ac75085a51d": "ddff23868547068091b22a318b85fca3",
".git/objects/75/442b1ecc7a82e58880322ee0a0b2dc006417c9": "866b74ebc12a7d5b5cc40864321885ee",
".git/objects/44/640dd38968be6842f589cc80a7452f0463bfb2": "b77489887259bad2474f8262dc5c252b",
".git/objects/38/241ace2b0c1d8066b759f3b0bd0ee010bdcf92": "a6651dcf8bab369bead3cc41c3d317d5",
".git/objects/9a/11cf64066511dc9bc273185c2ea923f724488d": "fd79895aa3e34bba9f03b58be18b0a2d",
".git/objects/9a/fe47e44589e8ec84c6c249831cacc3570ff26e": "484bfb135e3f4962362800645a81fba7",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/54/72869e26d48283b76dbd17edc2907e6a6ff2f8": "cc8bf3616fe702f839bf9ef773ed8c32",
".git/objects/3f/aeb7fc5701895c4d5080ae83eea1ce083765aa": "90cb6fed7f068c60a61c8a68f5024fec",
".git/objects/30/df70806f90c7bbd3ba2c31513ba0a1c9232aa6": "c6f431cec15422bf7814ca166b05d866",
".git/objects/37/60ce34c232b670cb600a10429cd4e32d5fd782": "9dfa42d2fbcd585e5b43cfcffcb7d5f2",
".git/objects/37/c4123da68e918bc6f81a3f4fb80163c8073fb0": "2899b6c77174cb9b01b43f42ea39b6e1",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/97/5aae22bb863f534a84522d3337aebffbafe316": "f8c841137080128373467d9e7b5d8c33",
".git/objects/63/a945d8435a3c734e8cc972dd49b871ae4ed5e2": "071cc5d47ef74d1e675f94e17e321390",
".git/objects/d3/ca269b25963eb7205d7b378f66ad27004c634f": "31bc16a33d724eb2fc8e59a2f09118d9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a7/9a67e887f6989ad98c6a65226001944aaf5d7d": "342352f9eb491ab2f73b7f77721519a9",
".git/objects/a9/b4719fca5b9caa88e9c99ee58f953f10f1f25c": "602d15003efce089e5c6c01487aa4a21",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/c3/5f2462fc62c066dfd45df278b99a7b0968247d": "77ac0ddc95af42d257b4d81bd2f1e251",
".git/objects/c4/381952898e98f12cd3f0f24e57882ada4ab951": "ea3e3e29d74bd9799508da19f4abbf6b",
".git/objects/cd/c667ab940c1f4f53de19468eb01fd7c24e8ef3": "35d1404578e326b8554342c2faa209ed",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/f0/8210cd95afacbfe35d86fbb5315ef34c07b9fb": "8803881305a3cfb72039e09279f04243",
".git/objects/f7/9da4df2a51d53ba978e6b590389b6e3719ec94": "131db5175eba7a5b0ed0eeec3e1b741a",
".git/objects/e8/efdbaaf4087fdfaf59efbc63984e403841ee11": "6ea534cfb1822f2c350626b7a3dd5378",
".git/objects/c5/a6695724f4e158041126fff18d2e7833522c5f": "316a07d8d645a53de0fd65a5877c2aab",
".git/objects/f6/eaa2fdbc3e50c34c817afbbb08ce83af81f4ab": "b7fbb916a10b850e597aebaf042efce5",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/e9/f4886001c33175d9354cf784c2cedf4dc7a737": "25af2494ba9cd0fe102f714009ec91d5",
".git/objects/cb/2470eb81e3a6b0f37b83beeba3e5cd63dc58f9": "9abc8cafe9a0a08359037cc7db0ae630",
".git/objects/cb/2e4ee96b1ad0ed1da853a24b1f61eeffea535f": "a3f12981817152be5ca8cfc96ff3e122",
".git/objects/cb/7258e72e257fb172fb829fa0da1b74f655e30b": "9df50c73264a26b5fb9924def639ec8c",
".git/objects/f8/45a450666474144a57048d941bf253fab00a1f": "ed197ff4fe498f430b18700d89b591f4",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/70/b7c19e4d03cde1924035c0f08c2afba4b1bb69": "b3483445703110f541683f622d0a32d4",
".git/objects/1e/5561fba70897f6e6ad351b0fb4caaf38f5fa7e": "223a7693a7a148e32409591f34b832f5",
".git/objects/12/67e9583bebe84b86512bb782d4898d71eb6ada": "a141997c2ecc8f57a8542748a7f59b35",
".git/objects/12/5e79679a3eb3dc963607b9191894c160450dba": "058ebad365a239caf41265a7ba0d6b62",
".git/objects/8c/e6bdf8af4206d7199d23df40db26396451a976": "17282fd5ab0da1db06563da217859598",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/1d/7bbeb727e6b7e6edc633935a7511f517fe9fc0": "ddec21b174c0e949d5202b559d63078e",
".git/objects/49/3340bdfc67afa98ed002eee9c60ca3f22fad7a": "df4b22a662d233e420fe4abc9a26e84f",
".git/objects/7f/b0f99c76b186ed375d0f85c811e305066dc706": "83abb3656b7a22325336dd22020d42f9",
".git/objects/7a/964114bfabc0f5915447a455859087a3bfb9ac": "59f1765ec0296884625ec40ab84eae87",
".git/objects/7a/258070791659690bef95494c38c119f9317715": "1a0b0e85a201b9fe42a9420d4254c457",
".git/objects/25/8f127b040117b2fa44e340f1ccce30454e54da": "86f581c5e12ea997ce5fd01170664f2d",
".git/objects/25/7e02285196a347dbf63b6cf71dfa42935ec735": "a64cbda4472fbf94ff110edf2ff512f4",
".git/objects/25/32566c27740b16e5ce834164f2a37d265f8dcf": "c5b3acc46d0d392047b67bea3fa9705e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e3d64fb7dadaa6fff02d13b24396549a",
".git/logs/refs/heads/main": "e3d64fb7dadaa6fff02d13b24396549a",
".git/logs/refs/remotes/origin/main": "2df3194ff960f60807f6a3cd9a1c2fb0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "a4ec8536a5838f6f02d56534d8691ffa",
".git/refs/remotes/origin/main": "a4ec8536a5838f6f02d56534d8691ffa",
".git/index": "7ca9310197f833a664614fcfc5f4a147",
".git/COMMIT_EDITMSG": "29f5e4bc805a120b19055e09568107af",
"assets/NOTICES": "8c982ef95b6f76dd89c66d8d2641e107",
"assets/FontManifest.json": "578fa61108a9a871931214344b9060a7",
"assets/AssetManifest.bin.json": "9d6ca6a958ac8d9d4d34fc86eb573bae",
"assets/packages/pdfrx/assets/pdfium.wasm": "70a0620e6434254fcb5b1f770db50bc6",
"assets/packages/pdfrx/assets/pdfium_client.js": "9ef7c314155dc36c966ef89df070dfd2",
"assets/packages/pdfrx/assets/pdfium_worker.js": "5343e0f742afb6d7b63a9e3d178bc729",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "6d36a6b49771c322f5f36a0fc97aa4d8",
"assets/fonts/MaterialIcons-Regular.otf": "b527f280dc045660ae8cb4107d5dde78",
"assets/assets/images/61.png": "b26b3e9d764cb4604d84d2df4ab4fbee",
"assets/assets/images/android_app_icon.png": "0b925c37ceb848e6cde1a7ae2a6d7598",
"assets/assets/images/man.png": "c0db21dbfe71772f7d0b6336d2557f4e",
"assets/assets/images/ei_1693592425619-removebg-preview.png": "7c9aa15b06c48ff567cfd97ac42c8556",
"assets/assets/images/logo.png": "ff44e655d6e377fe58519fb9fce29673",
"assets/assets/images/20230901_193643_0000.png": "823355bebcf6f9f2fd879e3a11d2c514",
"assets/assets/images/car.png": "ac0a1eaf75d090bd105f56681c19f6fb",
"assets/assets/images/new_update.png": "619a17209870480ad8d081f8d110b767",
"assets/assets/images/51.png": "4286140938fdd547f0a6fb26708c551f",
"assets/assets/fonts/Hacen_Tunisia/Hacen-Tunisia.ttf": "71d28deb511b542c0cd67c0c5e276e80",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
