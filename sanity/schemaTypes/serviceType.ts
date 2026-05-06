import { defineField, defineType } from 'sanity';

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Icon identifier (e.g., "Zap", "TrendingUp", etc.)',
    }),
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'cardTag',
      title: 'Homepage Card Tag',
      type: 'string',
      description: 'Short label shown above the service title on cards.',
    }),
    defineField({
      name: 'cardMetric',
      title: 'Homepage Card Metric',
      type: 'string',
      description: 'Short supporting metric text shown on cards.',
    }),
    defineField({
      name: 'fullDescription',
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'feature',
          title: 'Feature',
          fields: [
            defineField({
              name: 'title',
              title: 'Feature Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Feature Description',
              type: 'text',
              rows: 2,
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Digital Marketing', value: 'digital-marketing' },
          { title: 'Content Writing', value: 'content-writing' },
          { title: 'Web Design', value: 'web-design' },
          { title: 'Graphic Design', value: 'graphic-design' },
          { title: 'Pay Per Click', value: 'pay-per-click' },
          { title: 'E-commerce Marketing', value: 'ecommerce-marketing' },
        ],
      },
    }),
    defineField({
      name: 'challenges',
      title: 'Service Challenges',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'solutions',
      title: 'Our Solutions',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'solution',
          fields: [
            defineField({
              name: 'title',
              title: 'Solution Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'caseStudies',
      title: 'Case Studies',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'caseStudy' }],
        },
      ],
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Order to display services (lower numbers appear first)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },
});
