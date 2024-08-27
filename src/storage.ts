import { defineStore } from "pinia";
import { ref, Ref } from "vue";

interface CheckoutItem {
    product: string;
    cost: number;
    amount: number
}

export const useStore = defineStore("checkout", {
    state: () => ({
        items: [] as CheckoutItem[],
        cost: 0
    }),

    actions: {
        addToCart(item: CheckoutItem) {
            let itemFound = false;
            for (const obj of this.items) {
                console.log(item);
                
                if (obj.product === item.product) {
                    console.log("UWU");
                    obj.amount += item.amount;
                    itemFound = true;
                    break; // Exit the loop once the item is found
                }
            }

            if (!itemFound) {
                this.items.push(item);
            }

            this.cost += item.cost; // Adjust to add the correct cost
            console.log(this.items, this.cost);
            
        },

        removeFromCart(item: CheckoutItem) {
           const index = this.items.indexOf(item)
           this.items.splice(index, 1)
           console.log(index, this.items);
           
        }
    }


})