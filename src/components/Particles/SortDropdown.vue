<template>
    <div class="select" :class="{active: showSelectList}" ref="select">
        <div class="select_selected" @click="showSelectList = !showSelectList" >
            <span class="select__current">{{currentSelect.title}}</span>
            <svg class="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <g class="chevron__lines">
                    <path class="chevron__line chevron__line_left" d="M10 50h40"></path>
                    <path class="chevron__line chevron__line_right" d="M90 50H50"></path>
                </g>
            </svg>
        </div>
        <transition name="select_list">
        <ul class="select_list" v-show="showSelectList">
            <li class="select_list__item "
                v-for="item of selectList"
                :key="item.id"
                :class="{selected: currentSelect === item.code}"
                @click="changeSelect(item)"
            >{{item.title}}
            </li>
        </ul>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "SortDropdown",
        props: {
            currentSelectProps: Object,
        },
        created() {
            document.addEventListener('click', this.dropdownOffClick)
            this.currentSelect = this.$props.currentSelectProps
        },
        destroyed() {
            document.removeEventListener('click', this.dropdownOffClick)
        },

        data() {
            return {
                currentSelect: null,
                selectList: [
                    {
                        id: 1,
                        title: 'По умолчанию',
                        code: 'DEFAULT'
                    },
                    {
                        id: 2,
                        title: 'По убыванию цены',
                        code: 'PRICE_MIN'
                    },
                    {
                        id: 3,
                        title: 'По возрастанию цены',
                        code: 'PRICE_MAX'
                    },
                    {
                        id: 4,
                        title: 'По наименованию',
                        code: 'SORT_NAME'
                    },
                ],
                showSelectList: false
            }
        },
        methods: {
            changeSelect(item) {
                this.currentSelect = item
                this.showSelectList= false
                this.$emit('update:currentSelectProps', item)
            },
            dropdownOffClick(e) {
                let el = this.$refs.select;
                let target = e.target;
                if (el !== target && !el.contains(target)) {
                    this.showSelectList = false
                }
            },
        }
    }
</script>

<style scoped lang="scss">

    .select {
        position: relative;
        justify-self: end;
        --chevron_size: 11px;
        height: 36px;
        *{
            user-select: none;
        }

        &__current {
            font-size: 12px;
            line-height: 15px;
            color: #B4B4B4;
        }

        &_selected {
            display: inline-flex;
            align-items: center;
            background: #FFFEFB;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
            border-radius: 4px;
            padding: 10px 32px 10px 16px;
            position: relative;
            cursor: pointer;

        }
        .chevron {
            transition: top 0.3s;
            --chevron-angle: 45deg;
            --chevron-angle-right: -45deg;
            width: var(--chevron_size);
            height: var(--chevron_size);
            position: absolute;
            right: 16px;
            top: 55%;
            transform: translateY(-50%);

            &__lines {
                transition: transform 0.4s;
                transform: translateY(calc(var(--chevron_size) / 2));
            }
            &__line {
                stroke: #B4B4B4;
                stroke-width: 12px;
                stroke-linecap: square;
                transform-origin: 50%;
                transform: rotate(var(--chevron-angle));
                transition: transform 300ms, stroke 300ms;
            }
            &__line_right {
                transform: rotate(var(--chevron-angle-right));
            }
        }
        &.active{
            .chevron{
                top: 50%
            }
            .chevron__line_right {
                transform: rotate(var(--chevron-angle));
            }
            .chevron__line_left {
                transform: rotate(var(--chevron-angle-right));
            }
            .chevron__lines {
                transform: translateY(calc((var(--chevron_size) / 2) * -1));
            }
        }
        &_list{
            position: absolute;
            left: 0;
            top: calc(100% + 5px);
            z-index: 1;
            width: 100%;
            background: #FFFEFB;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
            border-radius: 4px;

            &__item{
                padding: 7px 10px;
                font-size: 12px;
                line-height: 15px;
                color: #B4B4B4;
                cursor: pointer;
                &:hover{
                    background: rgba(0, 0, 0, 0.1)
                }

            }
        }
    }
    .select_list-enter-active,
    .select_list-leave-active {
        transition: all .5s;
        transform: translateY(0);
    }
    .select_list-enter,
    .select_list-leave-to {
        opacity: 0;
        transform: translateY(20px);
    }
</style>