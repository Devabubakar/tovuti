export default {
  title: 'Author',
  name: 'author',
  type: 'document',
  fields: [
    {
      title: 'Full Name',
      name: 'author',
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
