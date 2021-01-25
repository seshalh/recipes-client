<template>
  <div class="createForm">
    <h3>Update recipe of {{ form.name }}</h3>
    <b-form @submit.prevent="onSubmit" >
      <b-form-group label="Recipe Name:" label-for="recipeName">
        <b-form-input
          id="recipeName"
          v-model="form.name"
          type="text"
          placeholder="recipe name"
          :value="form.name"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="No Of People" label-for="noOfPeopleFor">
        <b-form-input
          id="noOfPeopleFor"
          type="number"
          v-model="form.noOfServings"
          placeholder="No Of People Suitable For"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Cooking Instructions" label-for="cookingInstructions">
        <b-form-input
          id="cookingInstructions"
          type="text"
          v-model="form.cookingInstructions"
          placeholder="cookingInstructions"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Creation Date" label-for="datepicker">
        <b-form-input
          id="datepicker"
          type="text"
          v-model="form.dateOfCreation"
          placeholder="date in 'dd‐MM‐yyyy HH:mm' format"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Type">
        <b-form-radio
          name="some-radios"
          v-model="form.isVegetarian"
          value="true"
        >
          Veg</b-form-radio
        >
        <b-form-radio
          name="some-radios"
          v-model="form.isVegetarian"
          value="false"
        >
          Nonveg</b-form-radio
        >
      </b-form-group>

      <b-form-group label="Ingradient" label-for="Ingradient">
        <div v-for="ing in this.form.ingredients" :key="ing.id">
          <table>
            <tr>
              <th>id</th>
              <th>Ingredient name</th>
              <th>quantity</th>
            </tr>
            <tr>
              <td>
                <b-form-input
                  type="number"
                  v-model="ing.id"
                  readonly
                ></b-form-input>
              </td>

              <td>
                <b-form-input
                  type="text"
                  v-model="ing.nameOfIngredient"
                ></b-form-input>
              </td>
              <td>
                <b-form-input
                  type="text"
                  v-model="ing.quantityDetails"
                ></b-form-input>
              </td>
            </tr>
          </table>
        </div>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import { updateRecipe } from "../services/recipe.service.js";
export default {
  props: ["selectedMeal"],
  data() {
    return {
      form: {
        id: this.selectedMeal.id,
        name: this.selectedMeal.name,
        noOfServings: this.selectedMeal.noOfServings,
        cookingInstructions: this.selectedMeal.cookingInstructions,
        isVegetarian: this.selectedMeal.isVegetarian,
        dateOfCreation: this.selectedMeal.dateOfCreation,
        ingredients: this.selectedMeal.ingredients,
      },
    };
  },
  methods: {
    async onSubmit() {
      await updateRecipe(this.form);
      window.location.reload();
    },
  },
};
</script>
<style scoped>
.createForm {
  margin-top: 20px;
  margin-right: 10px;
  border-radius: 4px;
  background: #fff;
  /* box-shadow: 0 6px 10px rgba(7, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05); */
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
    0.3s box-shadow,
    0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  padding: 14px 80px 18px 36px;
  cursor: pointer;
}
</style>
