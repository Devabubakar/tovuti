export default {
  title: 'Authors',
  name: 'author',
  type: 'document',
  fields: [
    {
      title: 'Full Name',
      name: 'name',
      type: 'string',
      Validation: (Rule) => Rule.required(),
    },
    {
      title: 'Cover Image',
      name: 'cover',
      type: 'image',
      Validation: (Rule) => Rule.required(),
    },
  ],
};
