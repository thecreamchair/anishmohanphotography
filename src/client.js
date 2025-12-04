import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

export const client = createClient({
  projectId: '3fbrgky7',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
});

const builder = createImageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};
