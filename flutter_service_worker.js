'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9cb38bbc5c3a126e8f432e709dbdfc1d",
".git/config": "8b661afef283dd0c9066970cee723ca9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "9f6dc8640138c22d2906bca295059dd8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f8c7451855ae5e690bd08e40cc05f5e7",
".git/logs/refs/heads/master": "f8c7451855ae5e690bd08e40cc05f5e7",
".git/logs/refs/remotes/origin/master": "36fed08dd333a38fe38fb7202075eece",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/08/ba155461da149bf3df6550b92dbead4657cfe9": "21bea221b5630506c94f598500f1ff40",
".git/objects/0a/bb4838554c4d995b0ba051bec7f2ea0be81fb7": "573133bbe2fff78a444ffb1838da8dc9",
".git/objects/0b/4476bb1e8f390f2bf50aa360d7bab9883684f6": "b1a692f043accec4b602e7745158bd20",
".git/objects/0c/0e22ca480d8bc29fba2c1ff44b8854e5175162": "eb34255f87296ce4212b2fc74489277c",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0d/d7daaf81c4c83c8905c66c122ddc12f9c582c8": "0b35db5d47ed93890b7dab66c17c4712",
".git/objects/0e/cabe1f70a1b23b2089541343cbe1c92e84a087": "ffd0074f13970ee4c2a00852f09552bf",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/10/47fa96e0b1f1d3cbc1f84c25863ee2a4231d78": "3863b5e028651f7370878c5e820430eb",
".git/objects/11/0e65da3596b3db9cf657be975bfc69d581e5ad": "7675c3cc1ab1d17ea2f4230780ff0d3d",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/17/942ea76b4e3d36a65c3b5ee50968dcc7cbae61": "570deea918bf75586d5aa55899fdc344",
".git/objects/1c/702edf8dbddfc4f8da5c446d51c2faa652c1ce": "18643ec8f1c7ca69d58193f4bbeb16be",
".git/objects/1d/8a05cb1fa0b6800b4778093c4787e7ac067790": "9ecaaa66c3d76abda1a926f09e630635",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/89f70be82c8a6301a58315772543a7030d2ffd": "773e23164bb8325fcd4a384ffee3cdd6",
".git/objects/22/796c2dca5bd8e9923f564ea3ead4ef8b85e641": "1144e70c44b610bd2a83bb67fc96087e",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/27/15392f43548232ff99f95c8061e91807447543": "6c4a1282ada1578e5dde48d28ce25010",
".git/objects/29/108bfcf406af17f3b68816b67e3403fd5c89e2": "54b3a4cd7e658cd4f72aacba8fbc0442",
".git/objects/2b/71d3040b3159467218910834fac772dec8bcdb": "28031cc65f2fc5b238cb15504acda780",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/38/2fa7e68a39fdc1df911460ceab825fbc71aae9": "7c4f80e752e80a5541363009596f7257",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3d/9ac18c1479a2987c6b5f798a7979806e26af1d": "fd21f72e3d1985ef454bab3eaf73d28c",
".git/objects/3d/f7aafbd91e00c645cfff86192cc6c0e8f71819": "5302eed5f1afb5d5f8f3f2bdf0fbb4eb",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/47/fe1b26d50d34ed621f63b5e36094551ccc5190": "c24a101cdd7dc570da9c5f797a7cc67f",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5f/aa76ce04bab08ffa3ffdcce1973a16f6bc9ce0": "a1c825da06ac3bd895113006eed5f32e",
".git/objects/68/3f048de7d6ca3899e90cbf1ad0c9e74588a0d6": "cf442e5785d23beee9a3c6376c387bb0",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6d/2effe83e7d58e0815033278b893190bf13691f": "8aa3a2347420c97110a5bf6ba668e435",
".git/objects/6f/4684e083a018fb2b9b3e3579fa83d88e00357d": "c36a0d2885d9ce067027d762572f1a49",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/76/051e847efa0084fd3af12dd91b9380c1d4a2b8": "19d8e3aa1f5ab02f2496cdc40c5fe502",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/883b8ae6736e2a7ea166fc7821b1ba189ac8a6": "b1813d0416aefd9aa698bebe08025100",
".git/objects/79/b7aad8ac35e54c0d70943c2888034e84745eb1": "c01fa98c45a5687756eab1e89022a648",
".git/objects/7b/ab087d55bf8df99b3316e9cd586a60a0a97347": "4c7f481b24f6e111343ea7422444449a",
".git/objects/7e/92ce973e121d61550253099a3bf30d643f648e": "c1e2a233198048f0f6d94c0b40c75634",
".git/objects/7e/c3cb411adf3cd67c136b45a0e02cc97e70383e": "40bc9c4ed422ef565f9e40c1dbd34e20",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/287382c2f0eafb47eaaf3dfc9fd1a52ed1c96f": "077a24d1d0ca9e70a752b04a45b2d47e",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/98/d8d2053cec38d5fa8fed8b94afb5c6621c67c3": "2737e3c0f06c03ad29a2c1b0a48a2791",
".git/objects/9a/22520c732e68e192a60ab380221105fcf26888": "8bfcad1f32b8d6273920fc709c4a32e1",
".git/objects/9b/39a603469ca7f91e70587abbaa3903198de33b": "bbe4194404c8e32e0d6f3bb41115bfef",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9e/d723e4fd2ccb8deccc89737643678fec2213ce": "1eece0d0f0719d65ba497960de5cc185",
".git/objects/9f/865c3b259394c493d29c32fc2473463b05abdb": "2bf4db5ee97b2150f097f8a9a9b8743c",
".git/objects/a5/5c890d7a093d80891270588134cc0e42bd6647": "72944277b20366fbb629a78b91d1354f",
".git/objects/a6/7e8f25d12265dcd0ee67093fc00db44b6aa53f": "c6ecae15902dc91c60a1e47e3f164c86",
".git/objects/ac/7967765cf409d4cf2e36a56e1adc1d3d3aed11": "0ff8804ffb2b8bd352e54143e3e807be",
".git/objects/ac/c4d3d4d5d1eaf723801660abe40dea13e985d5": "c4feb400448856ea0340bbbafacf804f",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ad/de34a21edd44d68e07fab17135eca698c7a4ce": "d82f508098e5ab0e5b1d9bba20de9437",
".git/objects/ae/cd23e3131f3320cd30f6317f7b0bc21aac79ef": "077bdb3dd7a62a77ccfe4d645246d9d0",
".git/objects/b2/a8a4ac0405c5bcdab68103ea2e095bb9f0b892": "531174575af94201ee5c8b9cd2b90c8d",
".git/objects/b3/53e503d637fe258e9da2deef78470908619a03": "18a7e8c33116e17faf16307270d88bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/cce0ef91c5e979026fcbd14680d9cf87ea4743": "35c6882d4c7c735d78740c648d2f4199",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/d2/2cc47e4a87a7be203b65d1565a4fcb4e316b98": "ede7c0f161b177d6bed9ecddbe9a90d8",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d9/a6817f4afd13837cf79b0e6e7c29c54467fd17": "ba1415b5ed34ae94d554b58ca211aab0",
".git/objects/da/a3d06656edfbf8fd2f87164a9db7821cc8333d": "c5138b279390bf36d6c70070aaf110c0",
".git/objects/dd/67188abd3532a4ab38b5b271ae06bdbc6e9282": "f428ce72b1b0817a6eb2c5295ca34346",
".git/objects/de/abe336bca24a2230f85b6581cf2df6a3ae5ce7": "f16cd067110f624c996831b60dfae2a0",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e1/3ece8d90ca1a7e7b8ae0c4b2b59145c6dcea54": "08ac7709049dbbb2fdc975bd3fb059f4",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e3/7d6bd0e683c457c2bf0761a4d8cd204ae8526f": "e068e1fb4672a7e1f458f8bb92295cee",
".git/objects/e5/5f945004d7637eb9e8503041046e58616a7eb0": "d1e1de555d8802e590951586c6f9e04b",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/fb/746393ed8068dec0e549f45863925084b6ea6a": "9c5dc2f748cd48f0794fcdc1aaa4e687",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/3d902d4dfa2dc93bb940bf91a68a5d1061b6c0": "5ef01749c8dcce8cf7d2f5f170f2582d",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/refs/heads/master": "754f9e0182e4674ea0247a3489ad3871",
".git/refs/remotes/origin/master": "754f9e0182e4674ea0247a3489ad3871",
"assets/AssetManifest.bin": "8d58594d36f9bca048d0febf9abae7c6",
"assets/AssetManifest.bin.json": "d55ff3d093ea30a6cae50225d462ae1c",
"assets/AssetManifest.json": "1d1a34476c729d3e9a104ae83d203f72",
"assets/assets/d-virus.png": "df8876a8aac5dd4f20e3719e0736725c",
"assets/assets/design.svg": "53310338693afdd25513d28fc61e96ce",
"assets/assets/empty.png": "a9d988cd6785918680f105ce032970be",
"assets/assets/krishna.png": "2d739e624ddf75e17b7fa9e37c5026b7",
"assets/assets/krishna_arjuna.png": "ac3fcdd3ff00912334958afe3bed4a90",
"assets/assets/krishna_flute.png": "a848986c5106f64c008940ca2164f4a3",
"assets/assets/krishna_radha.png": "552a31a277dc04358da90d7403a98b98",
"assets/assets/krishna_radha2.png": "fd8d40807dabed5bb96c63d3b6cf1fcc",
"assets/assets/main_krishna.png": "deab56f21112d01e03da59959b074f55",
"assets/assets/sleeping_krishna.png": "8c28a8cd5a4a34029b9bec5d81d6657f",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "9e2409c78a225757cf80279dd591f659",
"assets/NOTICES": "927b4c71aa726b1049890d390454aca6",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "69b20c4b0df86f1a46cb6747887de1bb",
"/": "69b20c4b0df86f1a46cb6747887de1bb",
"loading.gif": "f0a5b699196ea8e4f97b422fa8fac66b",
"main.dart.js": "9c415cfe6b4b4162d4093a090df92f54",
"manifest.json": "6b620fd43a46ee9fb13eea95563cdd1b",
"version.json": "0b15d75afc195fb5ca64c480138ae3c6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
