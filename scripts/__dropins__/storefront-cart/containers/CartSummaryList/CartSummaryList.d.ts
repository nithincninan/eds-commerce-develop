import { HTMLAttributes } from 'preact/compat';
import { Container, SlotProps } from '@dropins/tools/types/elsie/src/lib';
import { CartModel } from '../../data/models/cart-model';

export interface CartSummaryListProps extends HTMLAttributes<HTMLDivElement> {
    hideHeading?: boolean;
    routeProduct?: (item: CartModel['items'][0]) => string;
    routeEmptyCartCTA?: () => string;
    onItemUpdate?: ({ item }: {
        item: CartModel['items'][0];
    }) => void;
    onItemRemove?: ({ item }: {
        item: CartModel['items'][0];
    }) => void;
    maxItems?: number;
    attributesToHide?: SwitchableAttributes[];
    slots?: {
        Heading?: SlotProps;
        EmptyCart?: SlotProps;
    };
    enableRemoveItem?: boolean;
    enableUpdateItemQuantity?: boolean;
    onItemsErrorsChange?: (errors: Map<string, string>) => void;
    showDiscount?: boolean;
    showSavings?: boolean;
    quantityType?: 'stepper' | 'dropdown';
    dropdownOptions?: {
        value: string;
        text: string;
    }[];
}
export type SwitchableAttributes = 'name' | 'image' | 'configurations' | 'warning' | 'alert' | 'sku' | 'price' | 'quantity' | 'total' | 'totalDiscount' | 'totalExcludingTax';
export declare const CartSummaryList: Container<CartSummaryListProps, CartModel | null>;
//# sourceMappingURL=CartSummaryList.d.ts.map