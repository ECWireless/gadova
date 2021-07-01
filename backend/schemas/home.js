export default {
  name: 'home',
  title: 'Home',
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
      name: 'heroHeading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'heroSubheading',
      title: 'Subheading',
      type: 'string',
    },
    {
      name: 'servicesHeading',
      title: 'Services Heading',
      type: 'string',
    },
    {
      name: 'servicesParagraph',
      title: 'Services Paragraph',
      type: 'string',
    },
    {
      name: 'servicesExamples1Heading',
      title: 'Services Examples 1 Heading',
      type: 'string',
    },
    {
      name: 'servicesExamples1Item1',
      title: 'Services Examples 1 Item 1',
      type: 'string',
    },
    {
      name: 'servicesExamples1Item2',
      title: 'Services Examples 1 Item 2',
      type: 'string',
    },
    {
      name: 'servicesExamples1Item3',
      title: 'Services Examples 1 Item 3',
      type: 'string',
    },
    {
      name: 'servicesExamples1Item4',
      title: 'Services Examples 1 Item 4',
      type: 'string',
    },
    {
      name: 'servicesExamples1Item5',
      title: 'Services Examples 1 Item 5',
      type: 'string',
    },
    {
      name: 'servicesExamples1Item6',
      title: 'Services Examples 1 Item 6',
      type: 'string',
    },
    {
      name: 'servicesExamples2Heading',
      title: 'Services Examples 2 Heading',
      type: 'string',
    },
    {
      name: 'servicesExamples2Item1',
      title: 'Services Examples 2 Item 1',
      type: 'string',
    },
    {
      name: 'servicesExamples2Item2',
      title: 'Services Examples 2 Item 2',
      type: 'string',
    },
    {
      name: 'servicesExamples2Item3',
      title: 'Services Examples 2 Item 3',
      type: 'string',
    },
    {
      name: 'servicesExamples2Item4',
      title: 'Services Examples 2 Item 4',
      type: 'string',
    },
    {
      name: 'servicesExamples2Item5',
      title: 'Services Examples 2 Item 5',
      type: 'string',
    },
    {
      name: 'servicesExamples2Item6',
      title: 'Services Examples 2 Item 6',
      type: 'string',
    },
    {
      name: 'servicesExamples3Heading',
      title: 'Services Examples 3 Heading',
      type: 'string',
    },
    {
      name: 'servicesExamples3Item1',
      title: 'Services Examples 3 Item 1',
      type: 'string',
    },
    {
      name: 'servicesExamples3Item2',
      title: 'Services Examples 3 Item 2',
      type: 'string',
    },
    {
      name: 'servicesExamples3Item3',
      title: 'Services Examples 3 Item 3',
      type: 'string',
    },
    {
      name: 'servicesExamples3Item4',
      title: 'Services Examples 3 Item 4',
      type: 'string',
    },
    {
      name: 'servicesExamples3Item5',
      title: 'Services Examples 3 Item 5',
      type: 'string',
    },
    {
      name: 'servicesExamples3Item6',
      title: 'Services Examples 3 Item 6',
      type: 'string',
    },
    {
      name: 'servicesDescriptionImage',
      title: 'Services Description image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'servicesDescriptionHeading',
      title: 'Services Description Heading',
      type: 'string',
    },
    {
      name: 'servicesDescriptionSubheading',
      title: 'Services Description Subheading',
      type: 'string',
    },
    {
      name: 'servicesDescriptionParagraph1',
      title: 'Services Description Paragraph 1',
      type: 'string',
    },
    {
      name: 'servicesDescriptionParagraph2',
      title: 'Services Description Paragraph 2',
      type: 'string',
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}