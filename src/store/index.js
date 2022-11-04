import { createStore } from 'vuex'

export default createStore({
  state: {
    recipes: [
      {
        slug: 'katsu-curry',
        title: 'Katsu-curry',
        description: 'A delicious curry made with chicken, potatoes, and a special sauce',
        ingredients: [
          '1 tablespoon olive oil',
          '1 onion, chopped',
          '2 cloves garlic, chopped',
          '1 tablepoon curry powder'
        ],
        method: [
          'Heat oil in a large skillet over medium heat.',
          'Add onion and garlic and cook, stirring often, until softened, about 5 minutes.',
          'Add curry powder and cook, stirring, until fragrant, about 1 minute',
          'Add curry powder and cook, stirring, until fragrant, about 1 minute'
        ]
      },
      {
        slug: 'ramen soup',
        title: 'Ramen soup',
        description: 'A delicious curry made with chicken, potatoes, and a special sauce',
        ingredients: [
          '1 tablespoon olive oil',
          '1 onion, chopped',
          '2 cloves garlic, chopped',
          '1 tablepoon curry powder'
        ],
        method: [
          'Heat oil in a large skillet over medium heat.',
          'Add onion and garlic and cook, stirring often, until softened, about 5 minutes.',
          'Add curry powder and cook, stirring, until fragrant, about 1 minute',
          'Add curry powder and cook, stirring, until fragrant, about 1 minute'
        ]
      }
    ]
  },
  getters: {
  },
  mutations: {
    add_recipe (state, recipe) {
      state.recipes.push(recipe);
    }
  },
  actions: {
  },
  modules: {
  }
})
