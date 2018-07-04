<template>
  <div>
    <div class="wrapper">
      <form class="blog" method="post">
        <!-- Form section -->
        <h2>Blog post:</h2>
        <label>
          Post Title:
          <!-- Post title -->
          <input type="text" v-model.lazy="post.title">
        </label>
        <label>
          Post text:
          <!-- Post text -->
          <textarea v-model.lazy="post.text"></textarea>
        </label>
        <label>
          Post Tags:
          <br>
          <!-- Post Tags -->
          <label>
            <input value="Vue" type="checkbox" v-model="post.categories">
            Vue
          </label>
          <label>
            <input value="React" type="checkbox" v-model="post.categories">
            React
          </label>
          <label>
            <input value="angular" type="checkbox" v-model="post.categories">
            Angular
          </label>
        </label>
        <label>
          Post Author:
          <br>
          <!-- Post Author -->
          <select v-model="post.author">
            <option v-for="author in authors">{{author}}</option>
          </select>
        </label>
      </form>
      <!-- Perview section -->
      <div class="preview">
        <h2>Post preview:</h2>
        <article class="post">
          <!-- Title preview -->
          <h3>{{post.title | to-uppercase}}</h3>
          <!-- Text preview -->
          <p>{{post.text | truncate}}</p>
          <!-- Tags preview -->
          <ul>
            <li v-for="category in post.categories">{{`#${category}`}}</li>
          </ul>
          <footer>
            <!-- Author preview -->
            <span>{{post.author}}</span>
          </footer>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        text: '',
        categories: [],
        author: '',
      },
      authors: ['Jack', 'Max', 'Leo'],
    }
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  }
}
</script>

<style>
  body {
    font-family: 'Roboto', sans-serif;
  }
  form,
  .preview {
    width: 500px;
    padding: 0 20px;
  }
  .wrapper {
    box-sizing: border-box;
    border: 1px solid darkgrey;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    border-radius: 3px;
  }
  form {
    margin-bottom: 20px;
  }
  label {
    margin-bottom: 20px;
  }
  label {
    margin-top: 10px;
    display: block;
  }
  input[type="text"],
  textarea {
    display: block;
    width: 100%;
    box-sizing: border-box;
    border-radius: 3px;
    box-shadow: none;
    margin-top: 10px;
    border: 1px solid #A9A9A9;
    padding: 5px;
  }
  input[type="text"] {
    min-height: 40px;
  }
  input[type="checkbox"] {
    min-width: 20px;
    min-height: 20px;
    vertical-align: sub;
  }
  textarea {
    min-height: 100px;
    resize: none;
  }
  h2 {
    text-align: center;
    text-transform: uppercase;
  }
  .btn-wrapper {
    text-align: right;
  }
  input[type="submit"] {
    min-height: 30px;
    cursor: pointer;
  }
  label > label {
    display: inline-block;
    width: auto;
    margin-bottom: 0;
    margin-right: 10px;
    font-weight: normal;
  }
  select {
    min-height: 30px;
    min-width: 150px;
    margin-top: 10px;
    border-radius: 3px;
  }
  .preview {
    padding: 0 20px;
    background-color: lightgrey;
  }
  .post {
    padding: 10px;
  }
  label {
    font-weight: bold;
  }
  ul {
    margin: 0;
    padding: 0;
    margin-bottom: 10px;
  }
  li {
    display: inline-block;
    margin-right: 10px;
  }
  .preview footer {
    text-align: right;
    font-style: italic;
  }
</style>
