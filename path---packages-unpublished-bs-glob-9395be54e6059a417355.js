webpackJsonp([0x94c841541f88],{953:function(e,s){e.exports={data:{package:{id:"unpublished/bs-glob",updated:"2017-12-20T12:35:01.297Z",name:"bs-glob",version:"0.1.0",description:"",keywords:["bucklescript"],license:"MIT",type:"unpublished",stars:0,readme:'<h1>bs-glob</h1>\n<p>BuckleScript bindings to <a href="https://github.com/isaacs/node-glob">node-glob</a>.</p>\n<p>Status: Very basic, but functional</p>\n<h2>Example</h2>\n<pre><code class="language-ml">(* OCaml *)\nGlob.glob "**/*.js" (fun _ files -> Array.iter Js.log files)\n</code></pre>\n<pre><code class="language-reason">/* Reason */\nGlob.glob("**/*.js", (_, files) => Array.iter(Js.log, files));\n</code></pre>\n<h2>Installation</h2>\n<pre><code class="language-sh">npm install --save reasonml-community/bs-glob\n</code></pre>\n<p>Then add <code>bs-glob</code> to <code>bs-dependencies</code> in your <code>bsconfig.json</code>:</p>\n<pre><code class="language-js">{\n  ...\n  "bs-dependencies": ["bs-glob"]\n}\n</code></pre>\n',homepageUrl:null,repositoryUrl:"https://github.com/reasonml-community/bs-glob",npmUrl:null,issuesUrl:null,slug:"packages/unpublished/bs-glob"}},pathContext:{id:"unpublished/bs-glob"}}}});
//# sourceMappingURL=path---packages-unpublished-bs-glob-9395be54e6059a417355.js.map