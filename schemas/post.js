export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      title: 'Report',
      name: 'report',
      type: 'object',
      fields: [
        {
          name: 'status',
          title: 'Status',
          type: 'boolean'
        },
        {
          name: 'message',
          title: 'Message',
          type: 'string'
        }
      ],
      description: "This switche truned on if this content get reported."
    },
    {
      title: 'Approved',
      name: 'approved',
      type: 'boolean',
      description: "Posts won't show on the site without approval"
    }, 
    {
      title: 'Featured',
      name: 'featured',
      type: 'boolean',
      description: "To show a content in featured section."
    }, 
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: {type: 'author'}
    }, 
    {
      title: 'Excerpt',
      name: 'excerpt',
      type: 'text',
      options: {
        minLength: 130,
        maxLength: 200
      }
    },
    {
      title: 'Thumbnail',
      name: 'thumbnail',
      type: 'image',
      fields: [
        {
          title: 'Caption',
          name: 'caption',
          type: 'blockContent',
        },
        {
          title: 'Alt',
          name: 'alt',
          type: 'string',
        },
      ],
      options: {
        hotspot: true
      }
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'string',
        }
      ]
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    {
      name: 'references',
      title: 'References',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
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
    {
      name: 'importantLinks',
      title: 'Important Links',
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
              name: 'title',
              title: 'Title',
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
    {
      title: 'Removed',
      name: 'removed',
      type: 'boolean',
      description: "This switche truned on if this content deleted by user."
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      })
    }
  }
}
