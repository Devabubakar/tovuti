export default {
  title: 'Blog',
  name: 'blog',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Date',
      name: 'date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Image Preview',
      name: 'image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    
    {
      title: 'Description',
      name: 'description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Categories',
      name: 'categories',
      type: 'array',
      validation: (Rule) =>
        Rule.unique().error('you can only have one of a category'),
      of: [
        {
          type: 'reference',
          to: [{ type: 'categories' }],
        },
      ],

      options: {
        layout: 'tags',
      },
    },
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: { type: 'author' },
    },

    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
      ],
    },
  ],
};
