<template>
    <div
        :id="parentSlug"
        :data-bs-parent="'#'+parentSlug"
        class="accordion-collapse"
        :class="activeSlug.includes(parentSlug) ? 'collapse show' : 'collapse'"
    >
        <!-- Add the index statically to avoid having sub-nav for it-->
        <template v-if="depthLevel === 1 && type === 'docs'">
            <ul class="list-unstyled mb-0">
                <li class="depth-1">
                    <NuxtLink href="/docs" class="bold" :class="activeSlug === '/docs' || activeSlug === '/docs/' ? 'active' : ''"
                    >
                            👁️‍🗨️ Overview
                    </NuxtLink>
                </li>
            </ul>
        </template>
        <template v-for="item in items">
            <ul class="list-unstyled mb-0">
                <li :class="{['depth-' + depthLevel]: true}" >
                    <NuxtLink
                        v-if="isPage(item)"
                        :class="getClass(item, depthLevel, false)"
                        :href="item._path">
                           {{ item.emoji }}
                            {{ item.title }}
                    </NuxtLink>
                    <NuxtLink
                        v-else
                        :class="getClass(item, depthLevel, true)"
                        class="disabled"
                        @click="toggle(item._path, isPage(item))" data-bs-toggle="collapse"
                        :data-bs-target="'#'+item._path"
                    >
                            {{ item.emoji }}
                            {{ item.title }}
                    </NuxtLink>
                    <template v-if="filterChildren(item).length > 0">
                        <chevron-up
                            v-if="isShow(item._path)"
                            @click="toggle(item._path)"
                            class="accordion-button" data-bs-toggle="collapse"
                            :data-bs-target="'#'+item._path"
                            role="button"
                        />
                        <chevron-down
                            v-else
                            @click="toggle(item._path)"
                            class="accordion-button" data-bs-toggle="collapse"
                            :data-bs-target="'#'+item._path"
                            role="button"
                        />
                    </template>
                </li>
                <RecursiveNavSidebar
                    v-if="filterChildren(item).length > 0"
                    :items="filterChildren(item)"
                    :depth-level="depthLevel+1"
                    :active-slug="activeSlug"
                    :open="isShow(item._path)"
                    :parent-slug="item._path"
                    :page-list="pageList.filter(e => e.startsWith(item._path))"
                />
            </ul>
        </template>
    </div>
</template>

<script>
    import ChevronDown from "vue-material-design-icons/ChevronDown.vue"
    import ChevronUp from "vue-material-design-icons/ChevronUp.vue"

    export default {
        name: "RecursiveNavSidebar",
        components: {
            ChevronDown,
            ChevronUp
        },
        props: {
            items: {
                type: Array,
                required: true
            },
            depthLevel: {
                type: Number,
                required: true
            },
            activeSlug: {
                type: String,
                required: true
            },
            open: {
                type: Boolean,
                required: true
            },
            parentSlug: {
                type: String,
                required: true
            },
            pageList: {
                type: Array,
                required: true
            },
            type: {
                type: String,
                required: false
            }
        },
        created() {
            this.showMenu = [this.activeSlug]
        },
        data: () => ({
            showMenu: [],
        }),
        methods: {
            filterChildren(item) {
                return (item.children || []).filter(r => item._path !== r._path);
            },
            toggle(item) {
                if (this.showMenu.some(path => path.startsWith(item))) {
                    this.showMenu = this.showMenu.filter(i => !i.startsWith(item))
                } else {
                    this.showMenu.push(item)
                }
            },
            isShow(item) {
                return this.showMenu.some(path => path.startsWith(item))
            },
            isPage(item) {
                return this.pageList.includes(item._path)
            },
            getClass(item, depthLevel, disabled) {
                return {
                    bold: depthLevel === 1,
                    active: this.activeSlug.startsWith(item._path),
                    disabled: this.activeSlug.startsWith(item._path) && disabled
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/styles/_variable.scss";

    .accordion-collapse {
        li {
            display: flex;
            align-items: center;

            .accordion-button {
                width: 16px;

                .material-design-icon > .material-design-icon__svg {
                    bottom: 0;
                }
            }

            @for $i from 0 through 6 {
                &.depth-#{$i} {
                    a {
                        padding-left: calc(.75rem * ($i));
                    }
                }
            }

            a {
                color: var(--bs-body-color);
                font-size: $font-size-base;
                border-left: 2px solid var(--bs-gray-200);
                padding: calc($spacer / 2);
                display: flex;
                width: 100%;

                &.active {
                    font-weight: 600;
                }

                &:hover {
                    border-left: 2px solid var(--bs-primary);
                    color: var(--bs-primary);
                }

                &.active {
                    color: var(--bs-primary);
                    border-left: 2px solid var(--bs-primary);
                }

                &.disabled {
                    cursor: pointer;
                    color: var(--bs-gray-500);
                }
            }

            &.depth-1 {
                a {
                    padding-left: 0;
                    border-left: 0;
                }
            }

            &:not(.depth-1) a {
                font-size: $font-size-sm;
            }
        }
    }

    .bold {
        font-weight: bold;
    }
</style>