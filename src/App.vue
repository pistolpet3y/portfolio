<script setup>
import { ref } from "vue";
import RandomQuote from './components/RandomQuote.vue';
import BirthDate from "./components/BirthDate.vue";
import Arrows from "./components/Arrows.vue";

const showPageBox = ref(false);
const showWindow = ref(false);
const showSocials = ref(false);

const images = {
  bgImage: new URL('@/assets/bg-image.jpg', import.meta.url).href,
  arrowFade: new URL('@/assets/arrow-fade.png', import.meta.url).href,
  arrow: new URL('@/assets/arrow.png', import.meta.url).href,
  award: new URL('@/assets/award.png', import.meta.url).href,
  facebook: new URL('@/assets/f.png', import.meta.url).href,
  instagram: new URL('@/assets/ig.png', import.meta.url).href,
  twitter: new URL('@/assets/x.png', import.meta.url).href,
  linkedin: new URL('@/assets/in.png', import.meta.url).href,
  youTube: new URL('@/assets/yt.png', import.meta.url).href,
  me: new URL('@/assets/me.vector.png', import.meta.url).href,
  img1498: new URL('@/assets/IMG_1498.jpg', import.meta.url).href,
  textbg: new URL('@/assets/text-bg.png', import.meta.url).href,
  textEffect: new URL('@/assets/text-effect.png', import.meta.url).href,
  img1498: new URL('@/assets/IMG_1498.jpg', import.meta.url).href,
};


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
  <div class="bg-image" :style="{ backgroundImage: `url(${images.bgImage})` }"></div>

  <div id="its-me">
    <div class="text-container" :style="{ backgroundImage: `url(${images.img1498})` }">
      <p @click="togglePageBox" style="cursor: pointer;">🠶 Alex.Tarverdi</p>
    </div>
  </div>

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
                <img id="me" :src="images.me" alt="Me">
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
            <div class="arrow-wrapper" :class="{ 'show-arrow': showSocials }">
              <img style="width: 182px;" :src="images.arrow" alt="Arrow" class="arrow-icon">
              <span class="arrow-text">these dont work</span>
            </div>
            <img :src="images.facebook" alt="Facebook">
            <img :src="images.twitter" alt="Twitter">
            <img :src="images.instagram" alt="Instagram">
            <img :src="images.linkedin" alt="LinkedIn">
          </div>
        </div>

        <div id="main">
          <div id="main-text">
            <div v-if="true">
              <RandomQuote />
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style>
.bg-image {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-attachment: scroll;
  z-index: -1;
}

.text-container {
  color: transparent;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-size: cover;
  background-position: center;
  animation: bg-animation 30s cubic-bezier(0.3, 0, 0.7, 1) infinite;
}
</style>
