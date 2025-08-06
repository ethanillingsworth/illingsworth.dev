import fs from 'fs/promises';
import path from 'path';
import inquirer from 'inquirer';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.join(__dirname, '..'); // one level above /scripts

const POSTS_JSON_PATH = path.join(ROOT, 'data', 'blogposts.json');
const MARKDOWN_DIR = path.join(ROOT, 'markdown');

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
featured: ${featured}
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

    // If the new post is featured, remove 'featured' from all others
    if (featured) {
        for (const key of Object.keys(posts)) {
            posts[key].featured = false;
        }
    }

    // Add or update the new post
    posts[slug] = {
        date,
        file: `../markdown/${slug}.md`,
        tags,
        featured
    };

    await fs.writeFile(POSTS_JSON_PATH, JSON.stringify(posts, null, 4));
    console.log(`✅ Updated posts.json with entry: ${slug}`);
};


const main = async () => {
    const { slug, title, date, tags, featured } = await promptUser();
    await createMarkdown(slug, title, date, tags, featured);
    await updatePostsJson(slug, date, tags, featured);
};

main().catch(err => console.error('❌ Error:', err));
