<script setup lang="ts">
import { onMounted, watch, ref } from "vue";
import { useRoute } from "vue-router";

const CategoriesPortfolio = [
  "Home",
  "Ich",
  "Lebenslauf",
  "Skills",
  "Projekte",
  "Offen Für",
];
const CategoriesShop = [
  "Home",
  "Anfragen",
  "Shirt Design",
  "Tattoo Design",
  "Website Design",
];

const CategoriesCorespondent = [
  [
    "home",
    "content_personal",
    "content_cv",
    "content_skills",
    "content_projects",
    "content_open_for",
  ],
  ["home", "content_digital", "content_tshirt"],
];

const route = useRoute();
const navbar = ref<HTMLElement | null>(null);
const shopExt = ref<HTMLElement | null>(null);
const contact = ref<HTMLElement | null>(null);

document.addEventListener("DOMContentLoaded", () => {
  const setListener = () => {
    let contactCo = document.getElementById("content_contact")
    contact.value.addEventListener("click", () => {
        
        contactCo.scrollIntoView({"behavior": "smooth"})
    })
    const navbarExtender = document.querySelectorAll(
      ".extending_bar"
    ) as NodeListOf<HTMLElement>;

    if(window.innerWidth < 1000) {
        navbar.value?.addEventListener("mouseover", () => {
                    navbar.value.style.marginLeft = "0rem"
        })
        navbar.value?.addEventListener("mouseout", () => {
                    navbar.value.style.marginLeft = "-13rem"
        })
    } else {
        shopExt.value.style.marginRight = "auto"
    }

    navbarExtender.forEach((navItem, itemIndex) => {
      navItem.addEventListener("mouseover", () => {
        if (window.innerWidth >= 1000) {
          navItem.style.paddingBottom = "32rem";
          navItem.style.marginTop = "17rem";
        } else {
        }
      });

      navItem.addEventListener("mouseout", () => {
        navItem.style.paddingBottom = "1rem";
        navItem.style.marginTop = "1rem";
      });

      const trigger = navItem.querySelectorAll(".categories");

      trigger.forEach((item, index) => {
        let corespondent = document.getElementById(
          CategoriesCorespondent[itemIndex][index]
        ) as HTMLElement;
        item.addEventListener("click", () => {
          if (index == 0) {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          } else {
            corespondent.scrollIntoView({ behavior: "smooth" });
          }
        });
      });
    });
  };
  setListener();

  watch(
    () => route.path,
    (newPath, oldPath) => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      setListener();
    }
  );
});

const scrollToContact = () => {
    
  }
</script>
<template>
  <div class="navbar_fixed" id="navbar" ref="navbar">
    <div class="extending_bar">
      <router-link :to="{ name: 'homepage' }">
        <section>Portfolio</section>
        <section
          v-for="category in CategoriesPortfolio"
          class="categories"
          :id="'nav_' + category"
        >
          {{ category }}
        </section>
      </router-link>
    </div>

    <div class="extending_bar" ref="shopExt">
      <router-link :to="{ name: 'shop' }">
        <section>Shop</section>
        <section v-for="category in CategoriesShop" class="categories">
          {{ category }}
        </section>
      </router-link>
    </div>
    <div class="contact" id="contact" ref="contact">
      <section style="margin: 0.5rem 0 4.5rem">Kontakt</section>
    </div>
  </div>
</template>
<style scoped>


.categories, .contact {
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: all ease-in-out 0.2s;
}

.contact {
    padding-top: 1.1rem;
}

.categories:hover, .contact:gover {
  background-color: #4002;
}
</style>
