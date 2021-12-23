<template>
    <a class="card" :data-id="card.id">
        <span class="card__delete" @click="deleteCard(card.id)">
            <img src="../../assets/delete.svg" alt="delete">
        </span>
        <div class="card__image">
            <img :src="card.image" :alt="card.title">
        </div>
        <div class="card__info">
            <p class="card__title">{{card.title}}</p>
            <p class="card__description">{{card.description}}</p>
            <div class="card__price">{{card.price.toLocaleString()}} руб.</div>
        </div>
    </a>
</template>

<script>
    export default {
        name: "Card",
        props: {
            card: Object,
            deleteCard:Function
        }
    }
</script>

<style scoped lang="scss">
    .card {
        display: block;
        background: #FFFEFB;
        box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
        border-radius: 4px;
        max-width: 332px;
        position: relative;
        transition: all .35s ease-in-out;

        * {
            color: #3F3F3F;
        }

        &__delete {
            position: absolute;
            right: -8px;
            top: -8px;
            width: 32px;
            height: 32px;
            background: #FF8484;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: .2s ease-in-out;
            &:hover{
                box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
            }
        }
        &:hover{
            box-shadow: 0 20px 30px rgba(0, 0, 0, 0.08), 0 6px 10px rgba(0, 0, 0, 0.04);
           .card__delete{
                opacity: 1;
            }
        }

        &__image {
            width: 100%;
            height: 200px;
            border-radius: 4px 4px 0px 0px;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
            }
        }

        &__info {
            padding: 16px 16px 24px 16px;
        }

        &__title {
            font-weight: 600;
            font-size: 20px;
            line-height: 25px;
            margin-bottom: 16px;
        }

        &__description {
            font-size: 16px;
            line-height: 20px;
            margin-bottom: 32px;
        }

        &__price {
            font-weight: 600;
            font-size: 24px;
            line-height: 30px;
        }
    }
</style>