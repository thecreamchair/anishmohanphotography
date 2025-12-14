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
            title: 'Selected Portfolio Items',
            type: 'array',
            description: 'Select exactly 6 items from your Portfolio to display on the home page.',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'portfolio' }]
                }
            ],
            validation: Rule => Rule.required().min(6).max(6).error('The homepage gallery requires exactly 6 items. Please remove or add items until you have 6.'),
        }),
    ],
})
