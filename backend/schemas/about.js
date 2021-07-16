export default {
  name: 'about',
  title: 'About',
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
      name: 'aboutHeading',
      title: 'About Heading',
      type: 'string',
    },
    {
      name: 'aboutDescription',
      title: 'About Description',
      type: 'blockContent'
    },
    {
      name: 'aboutImage',
      title: 'About Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'aboutServicesHeading',
      title: 'About Services Heading',
      type: 'string'
    },
    {
      name: 'aboutServicesItem1',
      title: 'About Services Item 1',
      type: 'string'
    },
    {
      name: 'aboutServicesItem2',
      title: 'About Services Item 2',
      type: 'string'
    },
    {
      name: 'aboutServicesItem3',
      title: 'About Services Item 3',
      type: 'string'
    },
    {
      name: 'aboutServicesItem4',
      title: 'About Services Item 4',
      type: 'string'
    },
    {
      name: 'aboutServicesItem5',
      title: 'About Services Item 5',
      type: 'string'
    },
    {
      name: 'aboutServicesItem6',
      title: 'About Services Item 6',
      type: 'string'
    },
    {
      name: 'aboutServicesItem7',
      title: 'About Services Item 7',
      type: 'string'
    },
    {
      name: 'aboutServicesImage',
      title: 'About Services Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'aboutCertificatesHeading',
      title: 'About Certificates Heading',
      type: 'string'
    },
    {
      name: 'aboutCertificatesParagraph',
      title: 'About Certificates Paragraph',
      type: 'string'
    },
    {
      name: 'aboutCertificate1',
      title: 'About Certificate 1',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'aboutCertificate2',
      title: 'About Certificate 2',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}
