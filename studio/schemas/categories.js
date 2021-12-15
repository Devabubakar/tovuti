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
  ],
};
