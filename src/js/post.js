import { BlogPost } from "./main.js";
import $ from "jquery"
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import html from 'highlight.js/lib/languages/xml'; // `xml` = html/svg/xhtml
import css from 'highlight.js/lib/languages/css';
import json from 'highlight.js/lib/languages/json';
import markdown from 'highlight.js/lib/languages/markdown';

import "highlight.js/styles/atom-one-dark.css"

// Register them with hljs
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('json', json);

hljs.registerLanguage('html', html);
hljs.registerLanguage('css', css);
hljs.registerLanguage('markdown', markdown);


const path = window.location.pathname;
const segments = path.split('/');
const postId = segments[2];

const post = new BlogPost(postId)


$(".content").append(await post.getHtml())
hljs.highlightAll()

$("#title").text("Ethan Illingsworth | " + await post.getHeading())
$("#desc").text(await post.getFirstParagraph())

$('h1').attr('id', function () {
    return $(this).text().toLowerCase().replaceAll(" ", "-");
});

$('h2').attr('id', function () {
    return $(this).text().toLowerCase().replaceAll(" ", "-");
});

$('h3').attr('id', function () {
    return $(this).text().toLowerCase().replaceAll(" ", "-");
});

$('h4').attr('id', function () {
    return $(this).text().toLowerCase().replaceAll(" ", "-");
});

$('h5').attr('id', function () {
    return $(this).text().toLowerCase().replaceAll(" ", "-");
});

$('h6').attr('id', function () {
    return $(this).text().toLowerCase().replaceAll(" ", "-");
});
