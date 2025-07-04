import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Retaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: (rule) => rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the restaurant',
    },
    {
      name: 'lat',
      type: 'number',
      title: 'latitude of the restaurant',
    },
    {
      name: 'lng',
      type: 'number',
      title: 'longitude of the restaurant',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address of the restaurant',
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Enter a number between 1 to 5',
      validation:rule=>rule.required().min(1).max(5).error('Please enter a value between 1 to 5')
    },
    {
      name: 'reviews',
      type: 'string',
      title: 'Reviews',
    },
    {
      name: 'type',
      title: 'Category',
      validation: rule=>rule.required(),
      type: 'reference',
      to:[{type:'category'}],
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of:[{type:'reference', to:[{type:'dish'}]}]
    },
  ],
})
