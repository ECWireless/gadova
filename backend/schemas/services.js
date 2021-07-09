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
    {
      name: 'servicesType1Heading',
      title: 'Services Type 1 Heading',
      type: 'string'
    },
    {
      name: 'servicesType1Paragraph',
      title: 'Services Type 1 Paragraph',
      type: 'string'
    },
    {
      name: 'servicesType2Heading',
      title: 'Services Type 2 Heading',
      type: 'string'
    },
    {
      name: 'servicesType2Paragraph',
      title: 'Services Type 2 Paragraph',
      type: 'string'
    },
    {
      name: 'servicesType3Heading',
      title: 'Services Type 3 Heading',
      type: 'string'
    },
    {
      name: 'servicesType3Paragraph',
      title: 'Services Type 3 Paragraph',
      type: 'string'
    },
    {
      name: 'servicesType4Heading',
      title: 'Services Type 4 Heading',
      type: 'string'
    },
    {
      name: 'servicesType4Paragraph',
      title: 'Services Type 4 Paragraph',
      type: 'string'
    },
    {
      name: 'servicesType5Heading',
      title: 'Services Type 5 Heading',
      type: 'string'
    },
    {
      name: 'servicesType5Paragraph',
      title: 'Services Type 5 Paragraph',
      type: 'string'
    },
    {
      name: 'servicesType6Heading',
      title: 'Services Type 6 Heading',
      type: 'string'
    },
    {
      name: 'servicesType6Paragraph',
      title: 'Services Type 6 Paragraph',
      type: 'string'
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}
