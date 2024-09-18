# TechPeople

> A tech blog built with Astro collections, Markdown & TypeScript.

## Table of Contents

- [Live Demo](#live-demo)
- [Screen](#screen)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Commands](#commands)
- [Creating Posts](#creating-posts)
- [License](#license)

## Live Demo

- You can access the live demo via [Vercel]().

## Screen

[<img src="./public/screen.png" />]()

## Technologies Used

**Next Job uses the following technologies:**

- Astro
- TypeScript
- Tailwind
- Markdown

## Usage

Install dependencies

```sh
npm install
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Creating Posts

Create a new `.md` file in the `src/content/articles` folder. Add the front matter and content.

Here is an example of front matter:

```md
---
title: 'The best laptops for developers in 2024'
desc: 'Lorem ipsum...'
pubDate: 2024-01-31
author: 'John Doe'
image: 'blog1.png'
tags: ['tech', 'hardware']
slug: the-best-laptops-for-developers-in-2024
---
```

Upload the image to `/public`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details
