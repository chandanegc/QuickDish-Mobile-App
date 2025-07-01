import client from "./sanity";

let sanityQuery = (query, params)=>client.fetch(query,params);

export const getFeatureRestuarants = () => {
  return sanityQuery(`
        *[_type=='featured']{
           ...,
           restaurants[]->{
             ...,
             dishes[]->{
              ...,
            },
            type->{
              name
            }
           }
         }
        
        `);
};

export const getCategory = () => {
  return sanityQuery(`*[_type=='category']`);
};
export const getDishes = () => {
  return sanityQuery(`
    *[_type == 'dish']{
      ...,
      image {
        asset->{
          _id,
          url
        }
      }
    }
  `);
};


export const getFeaturedRestaurantById = (id) => {
  return sanityQuery(
    `
         *[_type=='featured' && _id== %id]{
            ...,
            restaurant[]->{
              ...,
              dishes[]->,
              type->{
              name
              }
            }
          }[0]
        `,
    { id }
  );
};

