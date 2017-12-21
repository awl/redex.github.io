webpackJsonp([0xf5d93357e3b4],{911:function(e,t){e.exports={data:{package:{id:"bs-jest",updated:"2017-12-06T07:02:23.704Z",name:"bs-jest",version:"0.2.0",description:"BuckleScript bindings to the Jest testing framework",keywords:["test","jest","bucklescript"],license:"MIT",type:"published",stars:50,readme:'<h1>bs-jest - <a href="https://github.com/bucklescript/bucklescript">BuckleScript</a> bindings for <a href="https://github.com/facebook/jest">Jest</a> <a href="https://travis-ci.org/reasonml-community/bs-jest"><img src="https://travis-ci.org/reasonml-community/bs-jest.svg?branch=master" alt="Build Status"></a></h1>\n<p>Very very <strong>experimental</strong> (yep, that\'s one less "very" than before! Progress!) and <strong>WIP</strong></p>\n<h2>Status</h2>\n<ul>\n<li><a href="https://facebook.github.io/jest/docs/api.html#content">Global</a>: Fully implemented and tested, apart from <code>require.*</code></li>\n<li><a href="https://facebook.github.io/jest/docs/expect.html#content">Expect</a>: Mostly implemented. Functionality that makes sense only for JS interop have been moved to <code>ExpectJS</code>. Some functionality does not make sense in a typed language, or is not possible to implement sensibly in ML.</li>\n<li><a href="https://facebook.github.io/jest/docs/mock-function-api.html#content">Mock Functions</a>: Experimental and unsafe implementation, very much in flux. The Jest bindings will most likely be relegated to the <code>MockJs</code> module as it\'s very quirky to use with native code. A separate native from-scratch implementation might suddenly appear as <code>Mock</code>.</li>\n<li><a href="https://facebook.github.io/jest/docs/jest-object.html#content">The Jest Object</a>: Fake timers are fully implemented and tested. Mock functionality has been moved to <code>JestJs</code>. It\'s mostly implemented, but experimental and largely untested.</li>\n<li>[Snapshotting] Completely untested. Expect functions exist, but there\'s currently no way to implement custom snapshot serializers.</li>\n</ul>\n<h2>Example</h2>\n<pre><code class="language-ml">(* OCaml *)\nopen Jest\n\nlet _ =\n\ndescribe "Expect" (fun () -> \n  let open Expect in\n\n  test "toBe" (fun () ->\n    expect (1 + 2) |> toBe 3);\n);\n\ndescribe "Expect.Operators" (fun () -> \n  let open Expect in\n  let open! Expect.Operators in\n\n  test "==" (fun () ->\n    expect (1 + 2) == 3);\n);\n</code></pre>\n<pre><code class="language-reason">/* Reason */\nopen Jest;\n\nlet _ =\n\ndescribe "Expect" (fun () => {\n  open Expect;\n    \n  test "toBe" (fun () =>\n    expect (1 + 2) |> toBe 3)\n});\n    \ndescribe "Expect.Operators" (fun () => {\n  open Expect;\n  open! Expect.Operators;\n  \n  test "==" (fun () =>\n    expect (1 + 2) === 3)\n});\n</code></pre>\n<p>See <a href="https://github.com/reasonml-community/bs-jest/tree/master/__tests__">the tests</a> for more examples.</p>\n<h2>Installation</h2>\n<pre><code class="language-sh">npm install --save-dev bs-jest\n</code></pre>\n<p>Then add <code>bs-jest</code> to <code>bs-dev-dependencies</code> in your <code>bsconfig.json</code>:</p>\n<pre><code class="language-js">{\n  ...\n  "bs-dev-dependencies": ["bs-jest"]\n}\n</code></pre>\n<p>Then add <code>__tests__</code> to <code>sources</code> in your <code>bsconfig.json</code>:</p>\n<pre><code class="language-js">"sources": [\n  {\n    "dir": "src"\n  },\n  {\n    "dir": "__tests__",\n    "type": "dev"\n  }\n]\n</code></pre>\n<h2>Usage</h2>\n<p>Put tests in a <code>__tests__</code> directory and use the suffix <code>*test.ml</code>/<code>*test.re</code> (Make sure to use valid module names. e.g. <code>&#x3C;name>_test.re</code> is valid while <code>&#x3C;name>.test.re</code> is not). When compiled they will be put in a <code>__tests__</code> directory under <code>lib</code>, with a <code>*test.js</code> suffix, ready to be picked up when you run <code>jest</code>. If you\'re not already familiar with <a href="https://github.com/facebook/jest">Jest</a>, see <a href="https://facebook.github.io/jest/">the Jest documentation</a>.</p>\n<h2>Contribute</h2>\n<pre><code class="language-sh">git clone https://github.com/reasonml-community/bs-jest.git\ncd bs-jest\nnpm install\n</code></pre>\n<p>Then build and run tests with <code>npm test</code>, start watchers for <code>bsb</code>and <code>jest</code> with <code>npm run watch:bsb</code> and <code>npm run watch:jest</code> respectively. Install <code>screen</code> to be able to use <code>npm run watch:screen</code> to run both watchers in a single terminal window.</p>\n<h2>Changes</h2>\n<h3>0.2.0</h3>\n<ul>\n<li>Removed deprecations</li>\n<li>Added <code>testAll</code>, <code>Only.testAll</code>, <code>Skip.testAll</code> that generates tests from a list of inputs</li>\n<li>Fixed type signature of <code>fail</code></li>\n<li>Added <code>expectFn</code></li>\n</ul>\n',homepageUrl:"https://github.com/reasonml-community/bs-jest#readme",repositoryUrl:"https://github.com/reasonml-community/bs-jest",npmUrl:"https://www.npmjs.com/package/bs-jest",issuesUrl:"https://github.com/reasonml-community/bs-jest/issues",slug:"packages/bs-jest"}},pathContext:{id:"bs-jest"}}}});
//# sourceMappingURL=path---packages-bs-jest-187fcab1ace22e74848e.js.map