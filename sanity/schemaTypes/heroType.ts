import { defineField, defineType } from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'backgroundVideo',
      title: 'Background Video',
      type: 'object',
      fields: [
        {
          name: 'desktop',
          title: 'Desktop Video URL',
          type: 'string',
        },
        {
          name: 'mobile',
          title: 'Mobile Video URL',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'string',
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
            },
          ],
        },
      ],
    }),
  ],
}); 