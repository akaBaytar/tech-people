import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    desc: z.string(),
    pubDate: z.date(),
    author: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { articles: blogCollection };
