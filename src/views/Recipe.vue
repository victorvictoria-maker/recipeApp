<template>
<div class="recipe">
    <router-link to="/">&lt; Back</router-link>
    <h1>{{recipe.title}}</h1>
    <p class="desc">{{recipe.description}}</p>
    <hr>
    <div class="ingredients">
        <h3>Ingredients</h3>
        <ul v-for="(ingredient, i) in recipe.ingredients" :key="i">
            <li>{{ingredient}}</li>
        </ul>
    </div>
    <div class="method">
        <h3>Method</h3>
        <ul v-for="(step, i) in recipe.method" :key="i">
            <li><span v-html="cleanText(step)"></span></li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    name: 'RecipeComponent',
    computed: {
        recipe() {
            return this.$store.state.recipes.find(recipe => recipe.slug === this.$route.params.slug);
        }
    },
    methods: {
        cleanText(text) {
            return text.replace(/\n/g, '<br/>');
        }
    }
}
</script>

<style scoped>
.recipe {
    padding: 1rem;
    max-width: 768px;
    margin: 0 auto;
}

.desc {
    font-size: 1.125rem;
    line-height: 1.4;
    margin-bottom: 1rem;
}

hr,
h3 {
    margin-bottom: 1rem;
}

.ingredients {
    padding: 1rem;
    background-color: #081c33;
    border-radius: 0.5rem;
}

.ingredients ul li {
    list-style-position: inside;
    line-height: 1.4;
    margin-bottom: 1rem;
}

.method ul li {
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    list-style-position: inside;
    border-bottom: 1px solid #eee;
}
</style>
