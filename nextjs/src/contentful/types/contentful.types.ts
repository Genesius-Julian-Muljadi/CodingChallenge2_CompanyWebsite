import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

// export interface TypeBlogFields {
//     title: EntryFieldTypes.Symbol;
//     slug?: EntryFieldTypes.Symbol;
//     body: EntryFieldTypes.RichText;
//     image?: EntryFieldTypes.AssetLink;
// }

// export type TypeBlogSkeleton = EntrySkeletonType<TypeBlogFields, "blog">;
// export type TypeBlog<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeBlogSkeleton, Modifiers, Locales>;

export interface TypeStaffProfileFields {
    photo?: EntryFieldTypes.AssetLink;
    name?: EntryFieldTypes.Symbol;
    jobTitleExpertise?: EntryFieldTypes.Symbol;
    jobExperience?: EntryFieldTypes.Symbol;
    contactInfo?: EntryFieldTypes.RichText;
}

export type TypeStaffProfileSkeleton = EntrySkeletonType<TypeStaffProfileFields, "staffProfile">;
export type TypeStaffProfile<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeStaffProfileSkeleton, Modifiers, Locales>;

export interface TypeDiamondBraceletFields {
    image: EntryFieldTypes.AssetLink;
    price?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
    itemCode?: EntryFieldTypes.Symbol;
}

export type TypeDiamondBraceletSkeleton = EntrySkeletonType<TypeDiamondBraceletFields, "diamondBracelet">;
export type TypeDiamondBracelet<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeDiamondBraceletSkeleton, Modifiers, Locales>;

export interface TypeDiamondBroochFields {
    image: EntryFieldTypes.AssetLink;
    price: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
    itemCode?: EntryFieldTypes.Symbol;
}

export type TypeDiamondBroochSkeleton = EntrySkeletonType<TypeDiamondBroochFields, "diamondBrooch">;
export type TypeDiamondBrooch<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeDiamondBroochSkeleton, Modifiers, Locales>;

export interface TypeDiamondEarringsFields {
    image: EntryFieldTypes.AssetLink;
    price?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
    itemCode?: EntryFieldTypes.Symbol;
}

export type TypeDiamondEarringsSkeleton = EntrySkeletonType<TypeDiamondEarringsFields, "diamondEarrings">;
export type TypeDiamondEarrings<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeDiamondEarringsSkeleton, Modifiers, Locales>;

export interface TypeDiamondNecklaceFields {
    image: EntryFieldTypes.AssetLink;
    price?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
    itemCode?: EntryFieldTypes.Symbol;
}

export type TypeDiamondNecklaceSkeleton = EntrySkeletonType<TypeDiamondNecklaceFields, "diamondNecklace">;
export type TypeDiamondNecklace<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeDiamondNecklaceSkeleton, Modifiers, Locales>;

export interface TypeDiamondPendantFields {
    image: EntryFieldTypes.AssetLink;
    price?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
    itemCode?: EntryFieldTypes.Symbol;
}

export type TypeDiamondPendantSkeleton = EntrySkeletonType<TypeDiamondPendantFields, "diamondPendant">;
export type TypeDiamondPendant<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeDiamondPendantSkeleton, Modifiers, Locales>;

export interface TypeDiamondRingFields {
    image: EntryFieldTypes.AssetLink;
    price?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
    itemCode?: EntryFieldTypes.Symbol;
}

export type TypeDiamondRingSkeleton = EntrySkeletonType<TypeDiamondRingFields, "diamondRing">;
export type TypeDiamondRing<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeDiamondRingSkeleton, Modifiers, Locales>;

export interface TypeGoldBraceletFields {
    image: EntryFieldTypes.AssetLink;
    description?: EntryFieldTypes.RichText;
    itemCode?: EntryFieldTypes.Symbol;
}

export type TypeGoldBraceletSkeleton = EntrySkeletonType<TypeGoldBraceletFields, "goldBracelet">;
export type TypeGoldBracelet<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeGoldBraceletSkeleton, Modifiers, Locales>;

export interface TypeGoldBroochFields {
    image: EntryFieldTypes.AssetLink;
    description?: EntryFieldTypes.RichText;
    itemCode?: EntryFieldTypes.Symbol;
}

export type TypeGoldBroochSkeleton = EntrySkeletonType<TypeGoldBroochFields, "goldBrooch">;
export type TypeGoldBrooch<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeGoldBroochSkeleton, Modifiers, Locales>;

export interface TypeGoldEarringsFields {
    image: EntryFieldTypes.AssetLink;
    description?: EntryFieldTypes.RichText;
    itemCode?: EntryFieldTypes.Symbol;
}

export type TypeGoldEarringsSkeleton = EntrySkeletonType<TypeGoldEarringsFields, "goldEarrings">;
export type TypeGoldEarrings<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeGoldEarringsSkeleton, Modifiers, Locales>;

export interface TypeGoldNecklaceFields {
    image: EntryFieldTypes.AssetLink;
    description?: EntryFieldTypes.RichText;
    itemCode?: EntryFieldTypes.Symbol;
}

export type TypeGoldNecklaceSkeleton = EntrySkeletonType<TypeGoldNecklaceFields, "goldNecklace">;
export type TypeGoldNecklace<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeGoldNecklaceSkeleton, Modifiers, Locales>;

export interface TypeGoldPendantFields {
    image: EntryFieldTypes.AssetLink;
    description?: EntryFieldTypes.RichText;
    itemCode?: EntryFieldTypes.Symbol;
}

export type TypeGoldPendantSkeleton = EntrySkeletonType<TypeGoldPendantFields, "goldPendant">;
export type TypeGoldPendant<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeGoldPendantSkeleton, Modifiers, Locales>;

export interface TypeGoldRingFields {
    image: EntryFieldTypes.AssetLink;
    description?: EntryFieldTypes.RichText;
    itemCode?: EntryFieldTypes.Symbol;
}

export type TypeGoldRingSkeleton = EntrySkeletonType<TypeGoldRingFields, "goldRing">;
export type TypeGoldRing<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeGoldRingSkeleton, Modifiers, Locales>;

export interface IAsset {
    sys: { id: string };
    fields: {
        file: {
            url: string;
            details?: any;
            fileName?: string;
            contentType?: string;
        }
    }
}