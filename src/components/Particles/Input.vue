<template>
    <div class="input_box" :class="{error:input.$error}">
        <label :for="'input'+input.$model.id">{{input.$model.label}}
            <svg v-if="input.$model.req" width="4" height="4" viewBox="0 0 4 4" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <rect width="4" height="4" rx="2" fill="#FF8484"/>
            </svg>
        </label>
        <input type="text"
               :id="'input'+input.$model.id"
               class="input_box__input"
               :placeholder="input.$model.placeholder"
               v-model.trim="input.value.$model"
               autocomplete="off"
               @input="Mask"
               v-if="input.$model.type === 'INPUT'">
        <textarea :id="'input'+input.$model.id"
                  :placeholder="input.$model.placeholder"
                  class="input_box__input"
                  v-model.trim="input.value.$model"
                  v-if="input.$model.type === 'TEXTAREA'"></textarea>

        <div class="input_description error" v-if="input.$error">Поле обязательно для заполнения</div>
    </div>
</template>

<script>
    export default {
        props: {
            input: Object,
        },
        name: "Input",
        methods: {
            Mask() {
                if (this.$props.input.$model.mask)
                this.$props.input.value.$model = this.$props.input.value.$model.toString().split(' ').join('').replace(/[^\d]/g,'').replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + " ");
            }
        }


    }
</script>

<style scoped lang="scss">
    .input_box {
        &:not(:last-child){
            margin-bottom: 17px;
        }
        label {
            display: flex;
            margin-bottom: 4px;
            font-size: 10px;
            line-height: 13px;
            color: #49485E;
            letter-spacing: -0.02em;
        }

        &__input {
            background: #FFFEFB;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            border-radius: 4px;
            color: #3F3F3F;
            transition: .2s ease-in-out;
            width: 100%;
            height: 36px;
            padding: 10px 15px;
            font-size: 12px;
            line-height: 15px;
            border: 1px solid transparent;
            outline: none !important;

            &:focus {
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            }

            &::-webkit-input-placeholder {
                color: #B4B4B4;
            }

            &:-ms-input-placeholder {
                color: #B4B4B4;
            }

            &::-moz-placeholder {
                color: #B4B4B4;
                opacity: 1;
            }

            &:-moz-placeholder {
                color: #B4B4B4;
                opacity: 1;
            }
        }

        textarea {
            height: 108px;
            resize: none;
        }
    }

    .error {
        border-color: #ff604f;
        animation-name: shakeError;
        animation-fill-mode: forwards;
        animation-duration: .6s;
        animation-timing-function: ease-in-out;

        .input_box__input {
            border-color: #ff604f;

        }
    }

    .input_description.error {
        font-size: 10px;
        line-height: 13px;
        margin-top: 4px;
        letter-spacing: -0.02em;
        color: #ff604f
    }

    @keyframes shakeError {
        0% {
            transform: translateX(0);
        }
        15% {
            transform: translateX(0.375rem);
        }
        30% {
            transform: translateX(-0.375rem);
        }
        45% {
            transform: translateX(0.375rem);
        }
        60% {
            transform: translateX(-0.375rem);
        }
        75% {
            transform: translateX(0.375rem);
        }
        90% {
            transform: translateX(-0.375rem);
        }
        100% {
            transform: translateX(0);
        }
    }
</style>