import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'portfolio',
    title: 'Portfolio',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                defineField({
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                    description: 'Important for SEO and accessiblity.',
                }),
            ],
        }),
        defineField({
            name: 'caption',
            title: 'Caption',
            type: 'text',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image',
        },
    },
})
