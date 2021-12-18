export default {
  title: 'categories',
  name: 'categories',
  type: 'document',
  fields: [
    {
      type: 'string',
      name: 'category',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: (doc, options) => options.parent.category.toLowerCase(),
      },
    },
  ],
};
