<template>
    <div class="wrapper">
        <sort-dropdown :current-select-props.sync="currentSelect"></sort-dropdown>
        <transition-group class="cards" name="cards" tag="div" ref="cardsContainer">
            <Card v-for="card of sortCards" :key="card.id" :card="card" :delete-card="deleteCard"></Card>
        </transition-group>
    </div>

</template>

<script>
    import Card from "./Particles/Card";
    import SortDropdown from "./Particles/SortDropdown";
    import cardsDb from "../db/cards";

    export default {
        name: "Main",
        components: {
            Card,
            SortDropdown
        },
        created() {
            this.cards = cardsDb
        },
        data() {
            return {
                cards: [],
                currentSelect: {
                    id: 1,
                    title: 'По умолчанию',
                    code: 'DEFAULT'
                },
            }
        },
        computed: {
            sortCards() {
                let computedCards,
                    cardsArr = this.cards
                if (this.currentSelect.code === 'DEFAULT') {
                    computedCards = cardsArr.sort((a, b) => {
                        return a.id - b.id;
                    });
                }
                if (this.currentSelect.code === 'SORT_NAME') {
                    computedCards = cardsArr.sort((a, b) => {
                        let prev_title = a.title.toLowerCase(),
                            next_title = b.title.toLowerCase();
                        if (prev_title < next_title) return -1;
                        if (prev_title > next_title) return 1;
                    });
                }
                if (this.currentSelect.code === 'PRICE_MIN') {
                    computedCards = cardsArr.sort(function (a, b) {
                        return b.price - a.price;
                    });
                }
                if (this.currentSelect.code === 'PRICE_MAX') {
                    computedCards = cardsArr.sort(function (a, b) {
                        return a.price - b.price;
                    });
                }
                return computedCards
            }
        },
        methods: {
            deleteCard(id) {
                this.cards.forEach((el, i) => {
                    if (el.id === id) this.cards.splice(i, 1)
                })

            }
        }
    }
</script>

<style scoped lang="scss">
    .wrapper {
        width: 100%;
        display: grid;
        grid-gap: 16px;
        grid-template-rows: 36px auto;
    }

    .cards {
        display: grid;
        grid-template-columns: repeat(auto-fill, 332px);
        justify-content: center;
        width: 100%;
        grid-gap: 16px;
        @media(max-width: 768px) {
            grid-template-columns: repeat(auto-fill, 304px);
        }

        &-enter {
            transform: scale(0.5);
            opacity: 0;
        }

        &-leave-to {
            opacity: 0;
        }

        &-leave-active {
            position: absolute;
            z-index: -1;
        }
    }
</style>