import fs from 'fs/promises';
import path from 'path';
import inquirer from 'inquirer';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.join(__dirname, '..'); // project root
const POSTS_JSON_PATH = path.join(ROOT, 'data', 'blogposts.json');
const MARKDOWN_DIR = path.join(ROOT, 'markdown');
const SITEMAP_PATH = path.join(ROOT, 'sitemap.xml');
const SITE_ORIGIN = 'https://illingsworth.dev';

const promptUser = async () => {
    return inquirer.prompt([
        {
            name: 'slug',
            message: 'Enter blog post slug (e.g. my-first-blog):',
            validate: input => input ? true : 'Slug cannot be empty',
        },
        {
            name: 'title',
            message: 'Enter blog post title:',
        },
        {
            name: 'date',
            message: 'Enter publish date (YYYY-MM-DD):',
            default: new Date().toISOString().split('T')[0],
        },
        {
            name: 'tags',
            message: 'Enter tags (comma-separated):',
            filter: input => input.split(',').map(tag => tag.trim()).filter(Boolean),
        },
        {
            name: 'featured',
            type: 'confirm',
            message: 'Is this a featured post?',
            default: false,
        }
    ]);
};

const createMarkdown = async (slug, title, date, tags, featured) => {
    const markdownPath = path.join(MARKDOWN_DIR, `${slug}.md`);
    const markdownContent = `<!--
title: "${title}"
date: "${date}"
tags: ${JSON.stringify(tags)}
-->

# ${title}

Write your post here...
`;

    await fs.mkdir(MARKDOWN_DIR, { recursive: true });
    await fs.writeFile(markdownPath, markdownContent, 'utf-8');
    console.log(`✅ Created markdown file: ${markdownPath}`);
};

const updatePostsJson = async (slug, date, tags, featured) => {
    let posts = {};
    try {
        const existing = await fs.readFile(POSTS_JSON_PATH, 'utf-8');
        posts = JSON.parse(existing);
    } catch {
        // File doesn't exist yet
    }

    // If featured, unset all others
    if (featured) {
        for (const key of Object.keys(posts)) {
            posts[key].featured = false;
        }
    }

    posts[slug] = {
        date,
        file: `../markdown/${slug}.md`,
        tags,
        featured
    };

    await fs.mkdir(path.dirname(POSTS_JSON_PATH), { recursive: true });
    await fs.writeFile(POSTS_JSON_PATH, JSON.stringify(posts, null, 4));
    console.log(`✅ Updated blogposts.json with entry: ${slug}`);

    return posts;
};

const updateSitemap = async (posts) => {
    const urls = [
        { loc: `${SITE_ORIGIN}/`, priority: '1.0' },
        { loc: `${SITE_ORIGIN}/blog`, priority: '0.8' },
        { loc: `${SITE_ORIGIN}/projects`, priority: '0.8' }
    ];

    for (const [slug, post] of Object.entries(posts)) {
        urls.push({
            loc: `${SITE_ORIGIN}/blog/${slug}`,
            lastmod: post.date,
            priority: '0.6'
        });
    }

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">\n` +
        urls.map(u =>
            `  <url>\n` +
            `    <loc>${u.loc}</loc>\n` +
            (u.lastmod ? `    <lastmod>${u.lastmod}</lastmod>\n` : '') +
            `    <priority>${u.priority}</priority>\n` +
            `  </url>`
        ).join('\n') +
        `\n</urlset>`;

    const sitemapDir = path.dirname(SITEMAP_PATH);
    await fs.mkdir(sitemapDir, { recursive: true });
    await fs.writeFile(SITEMAP_PATH, sitemapContent, 'utf-8');
    console.log(`✅ sitemap.xml updated at: ${SITEMAP_PATH}`);
};

const main = async () => {
    const { slug, title, date, tags, featured } = await promptUser();
    await createMarkdown(slug, title, date, tags, featured);
    const posts = await updatePostsJson(slug, date, tags, featured);
    await updateSitemap(posts);
};

main().catch(err => console.error('❌ Error:', err));
