import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Restaurant Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Category Description',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'restaurants',
      type: 'array',
      title: 'Restaurants',
      of: [{ type: 'reference', to: [{ type: 'restaurant' }] }], // restaurent → restaurant (consistent with schema name)
    }),
  ],
})
