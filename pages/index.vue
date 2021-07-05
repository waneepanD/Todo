<template>
  <div class="wrapper">
    <div class="title">Todo</div>
    <div class="section">
      <div class="sectionInput">
        <div class="text">Name:</div>
        <input ref="name" type="text" />
      </div>
      <div class="sectionInput">
        <div class="text">Age:</div>
        <input ref="age" type="number" />
      </div>
      <button class="submit" @click="submit">Submit</button>
    </div>
    Search: <input v-model="searchText" type="text" />

    <div class="sectionList">
      <p>List</p>
      <ul v-if="result.length">
        <li v-for="(item, index) in result" :key="index">
          <p>name: {{ item.name }}</p>
          <p>age: {{ item.age }}</p>
        </li>
      </ul>
      <p v-else>No result</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      searchText: ""
    };
  },
  methods: {
    submit() {
      if (this.$refs.name.value !== "" && this.$refs.age.value !== "") {
        this.list.push({
          name: this.$refs.name.value,
          age: this.$refs.age.value
        });
        this.$refs.name.value = "";
        this.$refs.age.value = "";
      } else {
        alert("Please enter name and age");
      }
    }
  },
  computed: {
    result() {
      const searchResult = this.list.filter(item => {
        return (
          item.name.toLowerCase().search(this.searchText) > -1 ||
          item.age.search(this.searchText) > -1
        );
      });
      return searchResult;
    }
  }
};
</script>
<style scoped>
.wrapper {
  width: 100%;
  max-width: 400px;
  padding: 20px;
}
.title {
  padding: 10px;
  margin-bottom: 10px;
  text-align: center;
  background: green;
  color: #fff;
  border-radius: 5px;
}
.section {
  border: 1px solid;
  padding: 10px;
  margin-bottom: 10px;
}
.sectionInput {
  margin-bottom: 10px;
  display: flex;
}
.text{
  flex:0 0 auto ;
  width: 80px;
}
.submit {
  background: green;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
}
.sectionList li{
  list-style: none;
}
</style>
