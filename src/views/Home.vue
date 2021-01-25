<template>
  <div class="home">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Recipe Application</b-navbar-brand>

      <b-navbar-brand class="ml-auto" @click="createRecipe()">Create Recipe</b-navbar-brand>
    </b-navbar>

    <b-container fluid>
      <b-row>
        <b-col md="8" class="aside">
          <div v-for="meal in mealData" :key="meal.id">
            <b-card
              :title="meal.name"
              tag="article"
              style="max-width: 20rem;"
              class="mb-4"
              id="cardDiv"
              @click="getMoreDetails(meal)"
            >
              <img class="img-top" src="../assets/images.jpg" />
            </b-card>
          </div>
        </b-col>
        <!-- show details -->
        <b-col md="4">
          <div v-if="showMoreDetail">
            <b-card id="cardMoredetail" :title="this.meal.name" tag="article">
              <img class="img-top" src="../assets/images.jpg" />
              <b-card-text>
                <h5>Cooking Instructions</h5>
                {{ this.meal.cookingInstructions }}
              </b-card-text>

              <b-card-text>
                <h5>Date of creation</h5>
                {{ this.meal.dateOfCreation }}
              </b-card-text>

              <b-card-text>
                <h5>No Of People</h5>
                {{ this.meal.noOfServings }}
              </b-card-text>

              <b-card-text v-if="this.meal.ingredients.length > 0">
                <h5>ingredients</h5>
                <ul
                  v-for="ingredient in this.meal.ingredients"
                  :key="ingredient.id"
                >
                  <li>
                    <p>
                      {{ ingredient.nameOfIngredient }}---
                      {{ ingredient.quantityDetails }}qty
                    </p>
                  </li>
                </ul>
              </b-card-text>

              <b-button @click="updateRecipe()" variant="primary"
                >update</b-button
              >
              <b-button @click="deleteRecipe()" variant="danger"
                >delete</b-button
              >
            </b-card>
          </div>
          <div v-if="showCreateForm">
            <add-new-recepie />
          </div>
          <div v-if="showUpdateform">
            <updateRecipe :selectedMeal="this.meal" />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import addNewRecepie from "../components/AddNewRecepie.vue";
import updateRecipe from "../components/UpdateRecipe.vue";
import { getAllRecipes, deleteRecipe } from "../services/recipe.service.js";
export default {
  components: { addNewRecepie, updateRecipe },

  name: "Home",

  data() {
    return {
      meal: [],
      showMoreDetail: false,
      showCreateForm: false,
      showUpdateform: false,
      mealData: [],
    };
  },
  created() {
    getAllRecipes().then((res) => {
      this.mealData = res.data;
    });
  },
  methods: {
    getMoreDetails(data) {
      this.showMoreDetail = true;
      this.showCreateForm = false;
      this.meal = data;
      this.showUpdateform = false;
    },
    createRecipe() {
      this.showMoreDetail = false;
      this.showCreateForm = true;
      this.showUpdateform = false;
    },
    updateRecipe() {
      this.showUpdateform = true;
      this.showMoreDetail = false;
    },
    async deleteRecipe() {
      if (confirm(`Do you really want to delete ${this.meal.name} recipe?`)) {
        await deleteRecipe(this.meal.id);
      }
      window.location.reload();
    },
  },
};
</script>
<style scoped>
#cardDiv {
  border-radius: 4px;
  background: #fff;
  /* box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
   */
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
    0.3s box-shadow,
    0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  padding: 14px 80px 18px 36px;
  cursor: pointer;
  float: left;
  margin: 10px;
  margin-top: 20px;
}
img {
  width: 80%;
  height: 50%;
}
#cardMoredetail {
  padding: 14px 80px 18px 36px;
  margin: 10px;
  margin-top: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
</style>
