<template>
<div class="home">
    <h1>DIY Recipes</h1>
    <button @click="togglePopup">Add new Recipe</button>

    <div class="recipes">
        <div class="card" v-for="recipe in $store.state.recipes" :key="recipe.slug">
            <h2>{{recipe.title}}</h2>
            <p>{{recipe.description}}</p>
            <router-link :to="`/recipe/${recipe.slug}`">
                <button>View Recipe</button>
            </router-link>
        </div>
    </div>

    <div class="add-recipe-popup" v-if="popOpen">
        <div class="popup-content">
            <h2>Add new recipe</h2>

            <form action="" @submit.prevent="">
                <div class="group">
                    <label for="title">Title</label>
                    <input type="text" v-model="newRecipe.title">
                </div>

                <div class="group">
                    <label for="description">Description</label>
                    <textarea name="" id="" v-model="newRecipe.description"></textarea>
                </div>

                <div class="group">
                    <label for="ingredients">Ingredients</label>
                    <div class="ingredients" v-for="i in newRecipe.ingredientRows" :key="i">
                        <input type="text" v-model="newRecipe.ingredients[i-1]" placeholder="Ingredients">
                    </div>
                    <button type="button" @click="addNewIngredient">Add Ingredient</button>
                </div>

                <div class="group">
                    <label for="method">Method</label>
                    <div class="method" v-for="i in newRecipe.methodRows" :key="i">
                        <textarea name="" id="" v-model="newRecipe.method[i-1]"></textarea>
                    </div>
                    <button type="button"  @click="addNewMethod">Add Step</button>
                </div>

                <button type="submit" @click="createRecipe">Add Recipe</button>
                <button type="button" @click="togglePopup">Close</button>
            </form>
        </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import {
    ref
} from 'vue';

import {
    useStore
} from 'vuex';

export default {
    name: 'HomeView',
    setup() {
        const newRecipe = ref({
            title: '',
            description: '',
            ingredients: [],
            method: [],
            ingredientRows: 1,
            methodRows: 1
        });

        const popOpen = ref(false);

        const togglePopup = () => {
            popOpen.value = !popOpen.value;
        }

        const addNewIngredient = () => {
          newRecipe.value.ingredientRows++; 
        }

        const addNewMethod = () => {
          newRecipe.value.methodRows++; 
        }

        const store = useStore();

        const createRecipe = () => {
          // console.log(newRecipe);
          newRecipe.value.slug = newRecipe.value.title.toLocaleLowerCase().replace(/\s/g, '-');
          console.log(newRecipe.value.slug);

          if(!newRecipe.value.slug) {
            alert('Please enter a title');
            return;
          }

          store.commit('add_recipe', {...newRecipe.value});
          
          newRecipe.value = {
            title: '',
            description: '',
            ingredients: [],
            method: [],
            ingredientRows: 1,
            methodRows: 1
        };
          
          togglePopup();
        }

        return {
            newRecipe,
            popOpen,
            togglePopup,
            addNewIngredient,
            addNewMethod,
            createRecipe
        }

    }
}
</script>

<style scoped>
.home {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    font-size: 3rem;
    margin-bottom: 32px;
}

.recipes {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.recipes .card {
    padding: 1rem;
    border-radius: 5px;
    margin: 1rem;
    background-color: #081c33;
}

.recipes .card h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.recipes .card p {
    font-size: 1.125rem;
    line-height: 1.4;
    margin-bottom: 1rem;
}

.add-recipe-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.add-recipe-popup .popup-content {
    background-color: #081c33;
    padding: 2rem;
    border-radius: 1rem;
    width: 100%;
    max-width: 768px;
}

.popup-content h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.popup-content .group {
    margin-bottom: 1rem;
}

.popup-content .group label {
    display: block;
    margin-bottom: 0.5rem;
}

.popup-content .group input,
.popup-content .group textarea {
    display: block;
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 1rem;
}

.popup-content .group textarea {
    height: 100px;
    resize: none;
}

.popup-content button[type="submit"] {
    margin-right: 1rem;
}
</style>
