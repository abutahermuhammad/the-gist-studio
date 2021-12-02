export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: []
        }
      ]
    },
    // Demographic 
    {
      name: 'favTopics',
      title: 'Favorite Topics',
      type: 'array',
      of: [{type: 'reference', to: {type: 'topic'}}]
    },
    // Contact Fields.
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string'
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url'
    },
    {
      name: 'social',
      title: 'Social',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'type',
              title: 'Type',
              type: 'string',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
            }
          ]
        }
      ]
    },
    // User Managment Field
    {
      title: 'Removed',
      name: 'removed',
      type: 'boolean',
      description: "This switche truned on if this content deleted by user."
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
