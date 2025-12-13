import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'selectedWork',
    title: 'Selected Work',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            initialValue: 'Home Page Gallery',
            readOnly: true,
        }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            description: 'Upload exactly 6 images for the home page gallery layout.',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: 'title',
                            type: 'string',
                            title: 'Title',
                        },
                        {
                            name: 'category',
                            type: 'string',
                            title: 'Category',
                        },
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative Text',
                        }
                    ]
                }
            ],
            validation: Rule => Rule.required().min(6).max(6).error('You must upload exactly 6 images for the gallery layout.'),
        }),
    ],
})
