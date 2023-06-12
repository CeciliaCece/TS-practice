<script setup lang="ts">
//import { ref, type Ref } from "vue";
import infos from "../json/info.json";
import skills from "../json/skill.json";
import exps from "../json/exp.json";
import projects from "../json/myProject.json";

/* const homepage: Ref<string> = ref("首頁"); */
</script>
<template>
  <div>
    <!-- <h1>{{ homepage }}</h1> -->
    <h1>{{ infos.name }}</h1>
    <h2>{{ infos.job }}</h2>
    <a v-for="website in infos.websites" :href="website.link">{{
      website.name
    }}</a>
    <p>{{ infos.email }}</p>
    <div>
      <ul v-for="skill in skills">
        <li>{{ skill.title }}</li>
        <ul>
          <li v-for="item in skill.items">{{ item }}</li>
        </ul>
      </ul>
    </div>
    <div>
      <ul v-for="exp in exps">
        <li>{{ exp.title }}</li>
        <li>{{ exp.subtitle }}</li>
        <li>{{ exp.item }}</li>
      </ul>
    </div>
    <div>
      <p v-if="projects.length === 0">尚未輸入資料</p>
      <div class="card" v-else v-for="project in projects">
        <div class="card-body">
          <h6 class="card-title">{{ project.title }}</h6>
          <a v-for="link in project.links" :href="link">{{ link }}</a>
          <p>{{ project.description }}</p>
          <ul>
            <li v-for="list in project.lists">{{ list }}</li>
          </ul>
        </div>
      </div>
    </div>
    <router-link to="/login">登入</router-link>
  </div>
</template>
<style scoped></style>
