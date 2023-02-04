import { gql, useQuery } from '@apollo/client';

export const ALL_PHOTOS_QUERY = gql`
    query ALL_PHOTOS_QUERY{
      photos{
      	id
        caption
        image{
          altText
          image{
            publicUrl
          }
        }
      }
    }
`

export const Photos = ()  => {
    const {data, error, loading} = useQuery(ALL_PHOTOS_QUERY)
    console.log(data, error, loading)
    if(loading){
        <div>...loading</div>
    }
    if(error){
        <div> error</div>
    }
    return (  <div>Test</div>);
}
