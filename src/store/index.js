import { createStore } from 'vuex'

export default createStore({
  state: {
    recipes: [
      {
        slug: 'banana conditioner',
        title: 'Banana conditioner',
        description: 'A DIY conditioner made with banana for growth and hair retention',
        ingredients: [
          '4 tablespoons of extra virgin coconut oil',
          '2 tablespoons of  honey',
          '2 tablespoons of  glycerin',
          '1 large banana'
        ],
        method: [
          'Slice the banana and place in a blender.',
          'Add the glycerin, honey and virgin coconut oil.',
          'Process for 30 minutes to one minute',
          'Transfer the conditioner into a bowl'
        ]
      },
      {
        slug: 'avocado conditioner',
        title: 'Avocado conditioner',
        description: 'A DIY conditioner made with avocado for growth and hair retention',
        ingredients: [
          '1/4 cup of extra virgin coconut oil',
          '3 tablespoons of  apple cider vinegar',
          '1/2 cup of shea butter',
          '1 avocado'
        ],
        method: [
          'Place the apple cider vinegar, shea butter, avocado and virgin coconut oil.',
          'You do not have to melt the shea butter.',
          'Process for one minute',
          'Transfer the mixture into a bowl'
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
