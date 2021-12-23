<template>
    <div :class="{sticky_block: windowWidth > 768}">
        <div class="hamb" @click="hambActive = !hambActive" :class="{active:hambActive }">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div :class="{opened:hambActive, sticky_block: windowWidth <= 768}">
            <h1>Добавление товара</h1>
            <form @submit.prevent="submit">
                <div class="input_wrap" :class="{loading: submitStatus === 'PENDING' }">
                    <Input v-for="(item,index) of $v.formInputs.$each.$iter" :input="item" :key="index"> </Input>
                </div>
                <button type="submit" :disabled="submitStatus === 'PENDING' || $v.$invalid">
                    <span>Добавить товар</span>
                </button>
                <transition name="fade">
                    <Loader :status="submitStatus" v-if="submitStatus !== ''"></Loader>
                </transition>
            </form>
        </div>
    </div>
</template>

<script>
    import Input from "./Particles/Input";
    import {requiredIf} from 'vuelidate/lib/validators'
    import cardsDb from "../db/cards";
    import Loader from "./Particles/Loader";

    export default {
        name: "Sidebar",
        components: {
            Input,
            Loader
        },
        created() {
            window.addEventListener('resize', ()=>{
                this.windowWidth = window.innerWidth
            });
        },
        validations: {
            formInputs: {
                $each: {
                    value: {
                        required: requiredIf((obj) => {
                            return obj.req
                        })
                    }
                }
            },
        },
        data() {
            return {
                formInputs: [
                    {
                        id: 1,
                        placeholder: 'Введите наименование товара',
                        label: 'Наименование товара',
                        req: true,
                        type: 'INPUT',
                        value: '',
                        mask: false
                    },
                    {
                        id: 2,
                        placeholder: 'Введите описание товара',
                        label: 'Описание товара',
                        req: false,
                        type: 'TEXTAREA',
                        value: '',
                        mask: false
                    },
                    {
                        id: 3,
                        placeholder: 'Введите ссылку',
                        label: 'Ссылка на изображение товара',
                        req: true,
                        type: 'INPUT',
                        value: '',
                        mask: false
                    },
                    {
                        id: 4,
                        placeholder: 'Введите цену',
                        label: 'Цена товара',
                        req: true,
                        type: 'INPUT',
                        value: '',
                        mask: true
                    },

                ],
                submitStatus: '',
                hambActive: false,
                windowWidth: null

            }
        },
        methods: {
            submit() {
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR'
                    setTimeout(() => {
                        this.submitStatus = ''
                    }, 1000)
                } else {
                    this.submitStatus = 'PENDING'
                    let card = {
                        id: cardsDb.length + 1,
                        title: this.formInputs[0].value,
                        description: this.formInputs[1].value,
                        image: this.formInputs[2].value,
                        price: this.formInputs[3].value
                    }
                    setTimeout(() => {
                        this.submitStatus = 'OK'
                        setTimeout(() => {
                            this.submitStatus = ''
                            cardsDb.push(card)
                            this.formInputs.forEach(item => {
                                item.value = ''
                            })
                            this.$v.$reset()
                            this.hambActive = false
                        }, 5000)
                    }, 1000)


                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .sticky_block {
        flex-shrink: 0;
        max-width: 332px;
        margin-right: 16px;
        width: 100%;
        position: sticky;
        top: -34px;
    }

    .hamb {
        display: none;
    }

    form {
        position: relative;
    }

    button {
        margin-top: 24px;
        font-family: 'Inter', sans-serif;
        background: #7BAE73;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        height: 36px;
        transition: .2s ease-in-out;
        letter-spacing: -0.02em;
        width: 100%;
        bottom: 0;
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;

        span {
            font-family: 'Inter', sans-serif;
            color: inherit;
            font-size: inherit;
            //transition: inherit;
            font-weight: inherit;
            line-height: inherit
        }

        &:hover {
            opacity: .9;
        }

        &:active {
            transform: scale(1.01);
        }

        &:disabled {
            pointer-events: none;
            background: #EEEEEE;
            color: #B4B4B4;
        }
    }

    form {
        background: #FFFEFB;
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
        border-radius: 4px;
        padding: 24px;

    }

    h1 {
        font-weight: 600;
        font-size: 28px;
        line-height: 35px;
        color: #3F3F3F;
        margin-bottom: 16px;
    }

    .circular {
        animation: rotate 2s linear infinite;
        height: 50px;
        position: relative;
        width: 50px;
    }

    .path {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
        stroke: #0084FF;
        animation: dash 1.5s ease-in-out infinite;
        stroke-linecap: round;
    }

    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124;
        }
    }

    @media (max-width: 768px) {
        .sticky_block {
            position: fixed;
            background: #FFFEFB;

            transform: translateX(-100%);
            transition: 0.3s ease-in-out;
            top: 0;
            left: 0;
            height: 100%;
            max-width: 280px;
            z-index: 1;
            box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.1), 0px 6px 10px rgba(0, 0, 0, 0.1);
            overflow-y: auto;

            h1 {
                padding: 10px 15px;
                margin-bottom: 0;
            }

            form {
                padding: 15px 15px 25px 15px;
            }

            &.opened {
                transform: translateX(0);
            }
        }
        .hamb {
            display: block;
            cursor: pointer;
            min-width: 16px;
            left: calc(5vw / 2);
            width: 16px;
            height: 12px;
            position: fixed;
            -webkit-transition: 0.3s ease-in-out;
            transition: 0.3s ease-in-out;
            z-index: 8;

            span {
                display: block;
                position: absolute;
                height: 2px;
                width: 100%;
                background: #3F3F3F;
                border-radius: 1px;
                opacity: 1;
                left: 0;
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
                -webkit-transition: 0.25s ease-in-out;
                transition: 0.25s ease-in-out;

                &:nth-child(1) {
                    top: 0px;
                }

                &:nth-child(2),
                &:nth-child(3) {
                    top: 50%;
                    margin-top: -1px;
                }

                &:nth-child(4) {
                    bottom: 0;
                }
            }


            &.active {
                transform: translateX(270px);

                span {
                    &:nth-child(1) {
                        top: 50%;
                        margin-top: -2px;
                        width: 0%;
                        left: 50%;
                    }

                    &:nth-child(2) {
                        -webkit-transform: rotate(45deg);
                        -moz-transform: rotate(45deg);
                        -o-transform: rotate(45deg);
                        transform: rotate(45deg);
                    }

                    &:nth-child(3) {
                        -webkit-transform: rotate(-45deg);
                        -moz-transform: rotate(-45deg);
                        -o-transform: rotate(-45deg);
                        transform: rotate(-45deg);
                    }

                    &:nth-child(4) {
                        bottom: 50%;
                        margin-top: 2px;
                        width: 0%;
                        left: 50%;
                    }
                }
            }
        }
    }
</style>