<template>
    <div class="loader_bg">
        <div class="rings" :class="{success: status === 'OK', error: status === 'ERROR'}">
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="ring"></div>
        </div>
        <div class="loader_wrap">
            <svg class="loader" :class="{success: status === 'OK', error: status === 'ERROR'}" viewBox="0 0 55 55"
                 xml:space="preserve">
            <path class="loader_path"
                  v-if=" status === 'OK' || status === 'PENDING'"
                  d="M17.5,42.3l23.2-23.2L23.9,35.9l-17-17c3.4-8.1,11.3-13.7,20.6-13.7c12.3,0,22.3,10,22.3,22.3 s-10,22.3-22.3,22.3S5.2,39.8,5.2,27.5c0-3.1,0.6-6,1.7-8.6"/>
                <path class="loader_path"
                      v-if=" status === 'ERROR' "
                      d="M15.8,39.2l23.4-23.4v23.4L11.7,11.7c4-4,9.6-6.5,15.8-6.5c12.3,0,22.3,10,22.3,22.3s-10,22.3-22.3,22.3 S5.2,39.8,5.2,27.5c0-6.2,2.5-11.8,6.6-15.8"/>
        </svg>
            <span v-if="status === 'OK'">Товар добавлен!</span>
            <span v-if="status === 'ERROR'">Заполните форму</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Loader",
        props: {
            status: String
        }
    }
</script>

<style scoped lang="scss">
    $stroke-dasharray-loading: 40% 0% 40% 1000%;
    $stroke-dasharray-error: 55% 48% 55% 1000%;
    .loader_bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, .1);
    }

    .loader_wrap {
        display: grid;
        justify-items: center;
        grid-gap: 10px;
    }

    span {
        display: block;
        text-align: center;
        font-size: 16px;
        color: #FFFFFF;
        font-weight: 600;
        z-index: 1;
        position: relative;
    }

    .rings {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;

        &.success {
            .ring {
                background: #71F0B3;
                animation: rings 1000ms cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
        }

        &.error {
            .ring {
                background: #FF604F ;
                animation: rings 1000ms cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
        }

        .ring {
            top: 50%;
            left: 50%;
            transform: scale(0, 0) translate(-50%, -50%);
            transform-origin: 0 0;
            opacity: 0;
            position: absolute;
            border-radius: 50%;
            width: 500px;
            height: 500px;

            &:nth-of-type(2) {
                animation-delay: 200ms;
                width: 400px;
                height: 400px;
            }

            &:nth-of-type(3) {
                animation-delay: 400ms;
                width: 300px;
                height: 300px;
            }

            &:nth-of-type(4) {
                animation-delay: 600ms;
                width: 200px;
                height: 200px;
            }
        }
    }

    @keyframes rings {
        0% {
            transform: scale(0.1, 0.1) translate(-50%, -50%);
            opacity: 0;
        }
        100% {
            transform: scale(1.2, 1.2) translate(-50%, -50%);
            opacity: .3;
        }
    }

    .loader {
        width: 45px;
        height: 45px;
        transform: rotateZ(0deg);
        animation: rotate 1s linear infinite;

        .loader_ {

            &path {
                fill: transparent;
                stroke: #3F3F3F;
                stroke-width: 5;
                stroke-miterlimit: 10;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-dasharray: $stroke-dasharray-loading;
                stroke-dashoffset: -176%;
            }
        }

        &.success, &.error {
            animation-name: none;
        }

        &.success {
            .loader_ {
                &path {
                    animation: loader-success 0.5s ease-out forwards;
                    stroke: #ffffff;
                }
            }
        }

        &.error {
            .loader_ {
                &path {
                    animation-name: loader-error;
                    animation-duration: 0.6s;
                    animation-timing-function: ease-out;
                    animation-iteration-count: 1;
                    animation-fill-mode: forwards;
                    stroke: #ffffff;
                }
            }
        }
    }

    @keyframes rotate {
        100% {
            transform: rotateZ(-360deg)
        }
    }

    @keyframes loader-success {
        0% {
            stroke-dashoffset: -176%;
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            stroke-dashoffset: -44%;
            transform: scale(1);
        }
    }

    @keyframes loader-error {
        0% {
            stroke-dasharray: $stroke-dasharray-loading;
            stroke-dashoffset: -176%;
        }
        35% {
            stroke-dasharray: $stroke-dasharray-loading;
        }
        100% {
            stroke-dasharray: $stroke-dasharray-error;
            stroke-dashoffset: -1;
        }
    }

</style>