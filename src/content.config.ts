import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders"

const blog = defineCollection({
    loader: glob({pattern: "**/*.md", base: "./pages/posts"}),
    schema: z.object({
        title: z.string(),
        author: z.string(),
        date: z.date(),
        description: z.string(),
        path: z.string(),
        layout: z.string(),
        tags: z.array(z.string())
    })
})

export const collections = { blog }