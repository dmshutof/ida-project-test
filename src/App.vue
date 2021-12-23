<template>
    <main id="app">
        <div class="fix">
            <Sidebar></Sidebar>
            <Cards></Cards>
        </div>
    </main>
</template>

<script>
    import Sidebar from "./components/Sidebar";
    import Cards from "./components/Cards";
    import cardsDb from "./db/cards";
    export default {
        name: 'App',
        components: {
            Sidebar,
            Cards
        },
        created() {
            window.addEventListener("unload", function() {
               localStorage.setItem('CardsLocal', JSON.stringify(cardsDb))
            });
        }
    }
</script>

<style lang="scss">
    @import "css/reset.css";
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Source+Sans+Pro:wght@400;600&display=swap');

    * {
        font-family: 'Source Sans Pro', sans-serif;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -moz-text-size-adjust: none;
        -webkit-text-size-adjust: none;
        -ms-text-size-adjust: none;
    }

    a {
        text-decoration: none;
    }

    #app {
        padding: 32px 0;
        width: 100%;
        .fix{
            display: flex;
            width: 100%;
            max-width: 1376px;
            margin: 0 auto;
            align-items: flex-start;
            @media (max-width: 1376px) {
                width: 95%;
            }
        }
        @media(max-width: 768px){
            padding: 2.5vw 0;
        }
    }
</style>
