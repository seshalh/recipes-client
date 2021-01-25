<template>
  <div class="createForm" v-if="closeform">
    <button id="btn" type="button" class="btn btn-light" @click="Close()">
      Close
    </button>
    <h3 id="heading" >Create new recepie</h3>

    <b-form @submit.prevent="onSubmit">
      <b-form-group label="Recipe Name:" label-for="recipeName">
        <b-form-input
          id="recipeName"
          v-model="form.name"
          type="text"
          placeholder="recipe name"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="No Of People" label-for="noOfPeopleFor">
        <b-form-input
          id="noOfPeopleFor"
          type="text"
          v-model="form.noOfServings"
          placeholder="No Of People Suitable For"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Cooking Instructions"
        label-for="cookingInstructions"
      >
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
          placeholder="date in 'dd‐MM‐yyyy HH:mm' format"
          v-model="form.dateOfCreation"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Ingradient" label-for="ingradient">
        <table>
          <tr>
            <th>Ingredient name</th>
            <th>quantity</th>
          </tr>
          <!-- first input -->
          <tr>
            <td>
              <b-form-input
                type="text"
                placeholder="ingradient"
                v-model="form.ingredients[0].nameOfIngredient"
              ></b-form-input>
            </td>
            <td>
              <b-form-input
                type="text"
                placeholder="quantity"
                v-model="form.ingredients[0].quantityDetails"
              ></b-form-input>
            </td>
          </tr>
          <!-- second input -->
          <tr>
            <td>
              <b-form-input
                type="text"
                placeholder="ingradient"
                v-model="form.ingredients[1].nameOfIngredient"
              ></b-form-input>
            </td>
            <td>
              <b-form-input
                type="text"
                placeholder="quantity"
                v-model="form.ingredients[1].quantityDetails"
              ></b-form-input>
            </td>
          </tr>
          <!-- Third input -->
          <tr>
            <td>
              <b-form-input
                type="text"
                placeholder="ingradient"
                v-model="form.ingredients[2].nameOfIngredient"
              ></b-form-input>
            </td>
            <td>
              <b-form-input
                type="text"
                placeholder="quantity"
                v-model="form.ingredients[2].quantityDetails"
              ></b-form-input>
            </td>
          </tr>
        </table>
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
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { addRecipe } from "../services/recipe.service.js";

export default {
  data() {
    return {
      closeform: true,
      form: {
        name: "Chicken Biryani",
        isVegetarian: false,
        noOfServings: 4,
        cookingInstructions: "Spicy",
        dateOfCreation: "25‐01‐2021 00:00",
        ingredients: [
          { quantityDetails: "2", nameOfIngredient: "Onion" },
          { quantityDetails: "2", nameOfIngredient: "Garlic" },
          { quantityDetails: "5", nameOfIngredient: "Coriender leaves" },
        ],
      },
    };
  },

  methods: {
    Close() {
      this.closeform = true;
      window.location.reload();
    },
    async onSubmit() {
      await addRecipe(this.form);
      window.location.reload();
      
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.name = "";
      this.form.cookingInstructions = "";
      this.form.noOfServings = "";
      this.form.isVegetarian = null;
      this.form.ingredients = "";
      this.form.dateOfCreation = "";
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
#btn {
  float: right;
}
#heading{
  font-weight: bold;

}
</style>
