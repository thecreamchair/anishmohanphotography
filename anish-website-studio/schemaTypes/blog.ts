// /schemas/blogPost.ts
import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'blogPost',
    title: 'Blog',
    type: 'document',

    fields: [
        // ---------- MANDATORY ----------
        defineField({
            name: 'title',
            title: 'Post Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title' },
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }],
            validation: (Rule) => Rule.required(),
        }),

        // ---------- OPTIONAL (Bird Photography Specific) ----------
        defineField({
            name: 'birdSpecies',
            title: 'Bird Species',
            type: 'string',
        }),

        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
        }),

        defineField({
            name: 'cameraSettings',
            title: 'Camera Settings',
            type: 'object',
            fields: [
                { name: 'camera', title: 'Camera', type: 'string' },
                { name: 'lens', title: 'Lens', type: 'string' },
                { name: 'focalLength', title: 'Focal Length', type: 'string' },
                { name: 'aperture', title: 'Aperture', type: 'string' },
                { name: 'shutterSpeed', title: 'Shutter Speed', type: 'string' },
                { name: 'iso', title: 'ISO', type: 'string' },
            ],
        }),

        defineField({
            name: 'gallery',
            title: 'Gallery',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
        }),

        defineField({
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
        }),

        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
        }),
    ],

    preview: {
        select: {
            title: 'title',
            media: 'coverImage',
            subtitle: 'birdSpecies',
        },
    },
})
