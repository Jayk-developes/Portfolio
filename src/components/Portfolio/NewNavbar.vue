<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "../../storage";

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
  [
    "home",
    "content_digital",
    "content_tshirt",
    "content_tattoo",
    "content_website",
  ],
];

const route = useRoute();
const navbar = ref<HTMLElement | null>(null);
const shopExt = ref<HTMLElement | null>(null);
const contact = ref<HTMLElement | null>(null);
const checkout = ref<HTMLElement | null>(null);
const checkoutSummary = ref<HTMLElement | null>(null);

const shopTab = ref<boolean>(true);

const storage = useStore();
const checkoutCart = storage.$state.items;

document.addEventListener("DOMContentLoaded", async () => {
  const setListener = async () => {
    shopTab.value = route.path == "/shop";

    let contactCo = document.getElementById("content_contact");
    if (contact.value) {
      contact.value.addEventListener("click", () => {
        if (contactCo) {
          contactCo.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
    await new Promise((r) => setTimeout(r, 200));
    const navbarExtender = document.querySelectorAll(
      ".extending_bar"
    ) as NodeListOf<HTMLElement>;

    if (window.innerWidth < 1000) {
      navbar?.value?.addEventListener("mouseover", () => {
        if (navbar.value) {
          navbar.value.style.marginLeft = "0rem";
        }
      });
      navbar.value?.addEventListener("mouseout", () => {
        if (navbar.value) {
          navbar.value.style.marginLeft = "-13rem";
        }
      });
    } else {
      if (shopExt.value) {
        shopExt.value.style.marginRight = "auto";
      }
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

  await setListener();

  watch(
    () => route.path,
    async () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      shopTab.value = route.path == "/shop";
      await setListener();
    }
  );
});
const store = useStore()
const removeFromCart = (item: any) => {
  store.removeFromCart(item)
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

    <div class="extending_bar" style="position: relative" ref="shopExt">
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
    <div
      class="checkout extending_bar"
      id="checkout"
      ref="checkout"
      v-if="shopTab"
    >
      <section>Warenkorb</section>
      <section class="">Warenkorb</section>
      <div class="checkoutSummary" id="checkoutSummary" ref="checkoutSummary">
        <div class="checkoutItem">
          <div>Objekt</div>
          <div>Stk.</div>
          <div>€</div>
          <div></div>
        </div>
        <div v-for="item in checkoutCart" class="checkoutItem">
          <div>{{ item.product }}</div>
          <div>{{ item.amount }}</div>
          <div>{{ item.cost }}€</div>
          <div @click="removeFromCart(item)">&#10006;</div>
        </div>
      </div>
      <section class="buttonContainer">
        <input type="button" value="Zum Checkout" />
      </section>
    </div>
  </div>
</template>
<style scoped>
.categories,
.contact {
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: all ease-in-out 0.2s;
}

.contact {
  padding-top: 1.1rem;
}

.checkoutSummary {
  min-width: 100% !important;
  margin: 0;
  min-height: 18.5rem;
  max-height: 18.5rem;
  border-radius: 0.5rem !important;
  background-color: #fff8;
}
</style>
