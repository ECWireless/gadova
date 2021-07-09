export default {
  name: 'contact',
  title: 'Contact',
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
      name: 'contactSubheading',
      title: 'Contact Subheading',
      type: 'string',
    },
    {
      name: 'contactPhoneNumber',
      title: 'Contact Phone Number',
      type: 'string',
    },
    {
      name: 'contactEmailAddress',
      title: 'Contact Email Address',
      type: 'string',
    },
    {
      name: 'contactAddressLine1',
      title: 'Contact Address Line 1',
      type: 'string',
    },
    {
      name: 'contactAddressLine2',
      title: 'Contact Address Line 2',
      type: 'string',
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}
