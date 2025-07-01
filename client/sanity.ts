import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId:'k1yg3ba7', 
  dataset: 'production',        
  useCdn: true,                 
  apiVersion: '2024-06-01',     
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);

export default client;
