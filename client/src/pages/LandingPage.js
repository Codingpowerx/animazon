import React from 'react'
import MainHero from "../components/MainHero/MainHero"
import CategoryDisplay from "../components/CategoryDisplay/CategoryDisplay"
import CardDisplay from "../components/CardDisplay/CardDisplay"
import {useQuery, gql, useMutation} from '@apollo/client'

const ANIMALS_QUERY = gql`  
  {
  animals {
    id
    image
    price
    slug
    title
  }
}
`

const ADD_ANIMALS_MUTATION = gql`
    mutation(
        $image: String!,
        $category: String!,
        $title: String!
        $stock: Int!,
        $price: String!,
        $description: [String!]!
        $rating: Float
        $slug: String!
    ) {
        addAnimal (
            image: $image,
            category: $category,
            title: $title,
            stock: $stock,
            title: $title,
            price: $price
            description: $description
            rating: $rating
            slug: $slug
        ) {
            id
        }
    } 
`

function LandingPage() {

    const { loading, error, data } = useQuery(ANIMALS_QUERY)
    const [addAnimal] = useMutation(ADD_ANIMALS_MUTATION)

    
    if(loading) return <div>Loading...</div>
    if(error) return <div>error...</div>

    return (
        <div>
            <MainHero />
            <CategoryDisplay />
            <CardDisplay animals={data.animals} />
            <button onClick={() => {
                addAnimal({
                    variables: {
                    image: "ostrich",
                    category: "1",
                    title: "This is a reall cool Ostrich",
                    stock: 13,
                    price: "32.222",
                    rating: 3.5,
                    description: ["basssssss"],
                    slug: "ostrich"
                }
              })
            }}> Add an ostrich  </button>
        </div>
    )
}

export default LandingPage
