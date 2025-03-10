<script setup>
import { ref } from "vue";
import RandomQuote from './components/RandomQuote.vue';
import BirthDate from "./components/BirthDate.vue";
import Arrows from "./components/Arrows.vue";



const showPageBox = ref(false);
const showWindow = ref(false);
const showSocials = ref(false);

const togglePageBox = () => {
  showPageBox.value = !showPageBox.value;
};

const toggleWindow = () => {
  showWindow.value = !showWindow.value;
};

const toggleSocialIcons = () => {
  showSocials.value = !showSocials.value;
};

</script>




<template>
  <div class="bg-image"></div>
  <div id="its-me">
    <div class="text-container">
      <p @click="togglePageBox" style="cursor: pointer;">🠶 Alex.Tarverdi</p>
    </div>
  </div>

  <!--<p style="color: #39404c;">UX/UI DESIGNER, FRONTEND DEVELOPER</p>
  </div>
  <span id="food">
    <p>Hamburger is undeniably the superior fast food choice compared to other common options like pizza.</p>
  </span>
  </div>-->

  <transition name="fade">
    <div id="page-box" v-if="showPageBox">
      <div id="app">
        <header>
          <div class="header-container">
            <div class="nav">
              <p class="parentheses">(</p>
              <div class="this-window">
                <p @click="toggleWindow" :class="{ active: showWindow }" style="cursor: pointer;">
                  this .
                </p>
              </div>
              <p>works .</p>
              <p>just .</p>
              <p>fine .</p>
              <p class="parentheses">)</p>
            </div>
          </div>
        </header>
        <transition name="fade">
          <div v-if="showWindow" class="window-box" :class="{ open: showWindow }">
            <div class="window-content">
              <p class="title-text">THIS IS <span style="font-style: italic; color: #29b585;">ME</span>.</p>
              <div class="me-container">
                <img id="me" src="/me.vector.png" alt="Me">
                <div class="me-text">
                  <Arrows />
                  <p class="strikethrough">HUSBAND</p>
                  <p class="strikethrough">FATHER</p>
                </div>
              </div>
              <div class="photo-symbols">
                <p>└</p>
                <p>┐</p>
                <p>┘</p>
                <p>┌</p>

              </div>
              <p class="age-text">(days and counting.)</p>
              <BirthDate />
            </div>
          </div>
        </transition>


        <div class="social-icons-container">
          <div class="social-icons" @click="toggleSocialIcons">
            <!-- 🔥 Wrapper för pil + text, klassen styrs av Vue -->
            <div class="arrow-wrapper" :class="{ 'show-arrow': showSocials }">
              <img style="width: 182px;" src="/arrow.png" alt="Arrow" class="arrow-icon">
              <span class="arrow-text">these dont work</span>
            </div>

            <!-- Sociala ikoner -->
            <img src="/f.png" alt="Facebook">
            <img src="/x.png" alt="Twitter">
            <img src="/ig.png" alt="Instagram">
            <img src="/in.png" alt="LinkedIn">
          </div>
        </div>

        <div id="main">
          <!--<div class="awards">
            <p>2023-2024</p>
            <img src="/award.png" alt="award">
            <p>nominated best boyfriend in the world 2 years in a row</p>
          <p>2021</p>
          <img src="/award.png" alt="award">
          <p>Brother of the year</p>
        </div>-->
          <div id="main-text">
            <div v-if="true">
              <RandomQuote />
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>


  <footer></footer>
</template>



<style></style>
