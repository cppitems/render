import "./index.css"
import "./bash-light.css"
import "./cmake-light.css"
import "./cppitems-light.css"

import 'whatwg-fetch'
import markdown from 'markdown-it'
import container from 'markdown-it-container';
import inline_hljs from 'markdown-it-highlightjs/core'
import hljs from 'highlight.js/lib/core';
import cppitems from 'highlight.js/lib/languages/cppitems';
import cmake from 'highlight.js/lib/languages/cmake';
import bash from 'highlight.js/lib/languages/bash';
import plaintext from 'highlight.js/lib/languages/plaintext';


hljs.configure({languages:[], classPrefix: 'cppitems-'});
hljs.registerLanguage('cppitems', cppitems);
hljs.registerLanguage('cmake', cmake);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('plaintext', plaintext);

// read file frum url parameter
// example gitlab repository api http://localhost:9000/?md=https://gitlab.tuwien.ac.at/api/v4/projects/3840/repository/files/README.md
// example gitlab repository api http://localhost:9000/?md=https://gitlab.tuwien.ac.at/api/v4/projects/3840/repository/files/README.md?ref=main

var uri = window.location;
const params = new URLSearchParams(uri.search.slice(1));
const mdfile = params.get('md');

var url = new URL(mdfile);
url.searchParams.append('ref', 'main');
var response = await fetch(url)
var mdjson = await response.json();
var body = decodeURIComponent(escape(window.atob( mdjson.content )));

var md = new markdown();
md.use(inline_hljs, { hljs: hljs, inline: true });
md.use(container, 'fold', {

    validate: function(params) {
        return params.trim().match(/^fold\s+(.*)$/);
    },
    
    render: function (tokens, idx) {
        var m = tokens[idx].info.trim().match(/^fold\s+(.*)$/);
    
        if (tokens[idx].nesting === 1) {
        // opening tag

        return '<details><summary>' + md.render(m[1]) + '</summary>\n';

        } else {
        // closing tag
        return '</details>\n';
        }
    }
});

var result = md.render(body);

document.getElementById("item").innerHTML = result
