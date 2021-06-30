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
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}