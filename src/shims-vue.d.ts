declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $filters: any
        $store: Store<State>
        $emit: any
        $refs: any
        // $notify: any
    }
    // ComponentPublicInstance: any


}

export {}

declare module '*.vue';