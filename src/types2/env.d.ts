/// <reference types="vite/client" />
/// <reference types="@vue-macros/reactivity-transform/macros-global" />

interface ImportMetaEnv {
    // ... could include environment variables

    /** Stripe API Key */
    readonly VITE_STRIPE_API_KEY: string;

}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}


/// <reference types="vite/client" />

declare module "*.vue" {
    import { DefineComponent } from "vue";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

declare module '*.svg' {
    const content: any;
    export default content;
}
