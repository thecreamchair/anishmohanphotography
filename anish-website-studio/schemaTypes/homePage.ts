import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            initialValue: 'Home Page Settings',
            readOnly: true,
            hidden: true,
        }),
        defineField({
            name: 'heroImages',
            title: 'Hero Carousel Images',
            type: 'array',
            description: 'Upload up to 4 images for the home page carousel.',
            of: [{ type: 'image', options: { hotspot: true } }],
            validation: Rule => Rule.max(4).warning('You can only have up to 4 images in the carousel.')
        }),
    ],
})
