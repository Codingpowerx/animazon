const {v4} = require('uuid')

const Mutation = {
    addAnimal: (parent, {
        image,
     title,
     rating,
     price,
     description,
     slug,
     stock,
     onSales,
     category
    }, {animals}) => {
        let newAnimals = {
            id: v4(),
            image,
            title,
            rating,
            price,
            description,
            slug,
            stock,
            onSales,
            category
        }
        animals.push(newAnimals)
        return newAnimals
    },

    removeAnimal: (parent, { id }, { animals }) => {
        let index = animals.findIndex((animal) => {
            return animal.id === id
        })

        animals.splice(index, 1)
        return true;
    }
}

module.exports = Mutation;

// type Animal {
//     id: ID!
//     image: String
//     title: String!
//     rating: Float
//     price: String!
//     description: [String!]!
//     slug: String!
//     stock: Int!
//     onSales: Boolean
//     category: Category
// }