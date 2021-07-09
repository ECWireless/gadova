export default {
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'servicesHeading',
      title: 'Services Heading',
      type: 'string',
    },
    {
      name: 'servicesParagraph',
      title: 'Services Paragraph',
      type: 'string'
    },
    {
      name: 'servicesImage',
      title: 'Services Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'servicesExample1',
      title: 'Services Example 1',
      type: 'string'
    },
    {
      name: 'servicesExample2',
      title: 'Services Example 2',
      type: 'string'
    },
    {
      name: 'servicesExample3',
      title: 'Services Example 3',
      type: 'string'
    },
    {
      name: 'servicesExample4',
      title: 'Services Example 4',
      type: 'string'
    },
    {
      name: 'servicesExample5',
      title: 'Services Example 5',
      type: 'string'
    },
    {
      name: 'servicesExample6',
      title: 'Services Example 6',
      type: 'string'
    },
    {
      name: 'servicesExample7',
      title: 'Services Example 7',
      type: 'string'
    },
    {
      name: 'servicesExample8',
      title: 'Services Example 8',
      type: 'string'
    },
    {
      name: 'servicesExample9',
      title: 'Services Example 9',
      type: 'string'
    },
    {
      name: 'servicesExample10',
      title: 'Services Example 10',
      type: 'string'
    },
    {
      name: 'servicesExample11',
      title: 'Services Example 11',
      type: 'string'
    },
    {
      name: 'servicesExample12',
      title: 'Services Example 12',
      type: 'string'
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}
