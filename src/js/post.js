import { BlogPost } from "./main.js";
import $ from "jquery"
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import html from 'highlight.js/lib/languages/xml'; // `xml` = html/svg/xhtml
import css from 'highlight.js/lib/languages/css';
import "highlight.js/styles/atom-one-dark.css"

// Register them with hljs
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('html', html);
hljs.registerLanguage('css', css);

const path = window.location.pathname;
const segments = path.split('/');
const postId = segments[2];

const post = new BlogPost(postId)


$(".content").append(await post.getHtml())
hljs.highlightAll()

$("#title").text("Ethan Illingsworth | " + await post.getHeading())
$("#desc").text(await post.getFirstParagraph())

$('h2').attr('id', function () {
    return $(this).text().toLowerCase().replaceAll(" ", "-");
});

for (let h2 of await post.getAllH2()) {
    $("#quick-links").append($("<a/>").text(h2).attr("href", "#" + h2.toLowerCase().replaceAll(" ", "-")))
}

