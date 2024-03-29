// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Vue, { VNode } from 'vue';
import { ComponentRenderProxy } from '@vue/composition-api';

declare global {
    namespace JSX {
        // tslint:disable no-empty-interface
        interface Element extends VNode {}
        // tslint:disable no-empty-interface
        interface ElementClass extends ComponentRenderProxy {}
        interface ElementAttributesProperty {
            class: string;
            ref: string;
            $props: any; // specify the property name to use
        }
        interface IntrinsicElements {
            [elem: string]: any;
        }
    }
}
