import contentfulClient from "@/contentful/contentfulClient";
import { TypeOwnerProfileSkeleton, 
        TypeStaffProfileSkeleton,
        TypeDiamondBraceletSkeleton,
        TypeDiamondBroochSkeleton,
        TypeDiamondEarringsSkeleton,
        TypeDiamondNecklaceSkeleton,
        TypeDiamondPendantSkeleton,
        TypeDiamondRingSkeleton,
        TypeGoldBraceletSkeleton,
        TypeGoldBroochSkeleton,
        TypeGoldEarringsSkeleton,
        TypeGoldNecklaceSkeleton,
        TypeGoldPendantSkeleton,
        TypeGoldRingSkeleton } from "@/contentful/types/contentful.types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document as RichTextDocument } from "@contentful/rich-text-types";

type RichTextProps = {
    document: RichTextDocument | undefined;
};
  
export const ParseRichText = ({ document }: RichTextProps) => {
    if (!document) return null;
    return <>{documentToReactComponents(document)}</>
}
  
export const getOwnerProfilesContentful = async () => {
    try {
        const data = await contentfulClient.getEntries<TypeOwnerProfileSkeleton>();
        // console.log(data);
        return data.items.filter((item) => item.sys.contentType.sys.id == "ownerProfile");
    } catch(err) {
        console.log(err);
    }
}
  
export const getStaffProfilesContentful = async () => {
    try {
        const data = await contentfulClient.getEntries<TypeStaffProfileSkeleton>();
        // console.log(data);
        return data.items.filter((item) => item.sys.contentType.sys.id == "staffProfile");
    } catch(err) {
        console.log(err);
    }
}
  
export const getGRingsContentful = async () => {
    try {
        const data = await contentfulClient.getEntries<TypeGoldRingSkeleton>();
        // console.log(data);
        // return data;
        return data.items.filter((item) => item.sys.contentType.sys.id == "goldRing");
    } catch(err) {
        console.log(err);
    }
}
  
export const getGPendantsContentful = async () => {
    try {
        const data = await contentfulClient.getEntries<TypeGoldPendantSkeleton>();
        // console.log(data);
        return data.items.filter((item) => item.sys.contentType.sys.id == "goldPendant");
    } catch(err) {
        console.log(err);
    }
}
  
export const getGEarringsContentful = async () => {
    try {
        const data = await contentfulClient.getEntries<TypeGoldEarringsSkeleton>();
        // console.log(data);
        return data.items.filter((item) => item.sys.contentType.sys.id == "goldEarrings");
    } catch(err) {
        console.log(err);
    }
}
  
export const getGNecklacesContentful = async () => {
    try {
        const data = await contentfulClient.getEntries<TypeGoldNecklaceSkeleton>();
        // console.log(data);
        return data.items.filter((item) => item.sys.contentType.sys.id == "goldNecklace");
    } catch(err) {
        console.log(err);
    }
}
  
export const getGBraceletsContentful = async () => {
    try {
        const data = await contentfulClient.getEntries<TypeGoldBraceletSkeleton>();
        // console.log(data);
        return data.items.filter((item) => item.sys.contentType.sys.id == "goldBracelet");
    } catch(err) {
        console.log(err);
    }
}
  
export const getGBroochesContentful = async () => {
    try {
        const data = await contentfulClient.getEntries<TypeGoldBroochSkeleton>();
        // console.log(data);
        return data.items.filter((item) => item.sys.contentType.sys.id == "goldBrooch");
    } catch(err) {
        console.log(err);
    }
}
  
export const getDRingsContentful = async () => {
    try {
        const data = await contentfulClient.getEntries<TypeDiamondRingSkeleton>();
        // console.log(data);
        return data.items.filter((item) => item.sys.contentType.sys.id == "diamondRing");
    } catch(err) {
        console.log(err);
    }
}
  
export const getDPendantsContentful = async () => {
    try {
        const data = await contentfulClient.getEntries<TypeDiamondPendantSkeleton>();
        // console.log(data);
        return data.items.filter((item) => item.sys.contentType.sys.id == "diamondPendant");
    } catch(err) {
        console.log(err);
    }
}
  
export const getDEarringsContentful = async () => {
    try {
        const data = await contentfulClient.getEntries<TypeDiamondEarringsSkeleton>();
        // console.log(data);
        return data.items.filter((item) => item.sys.contentType.sys.id == "diamondEarrings");
    } catch(err) {
        console.log(err);
    }
}
  
export const getDNecklacesContentful = async () => {
    try {
        const data = await contentfulClient.getEntries<TypeDiamondNecklaceSkeleton>();
        // console.log(data);
        return data.items.filter((item) => item.sys.contentType.sys.id == "diamondNecklace");
    } catch(err) {
        console.log(err);
    }
}
  
export const getDBraceletsContentful = async () => {
    try {
        const data = await contentfulClient.getEntries<TypeDiamondBraceletSkeleton>();
        // console.log(data);
        return data.items.filter((item) => item.sys.contentType.sys.id == "diamondBracelet");
    } catch(err) {
        console.log(err);
    }
}
  
export const getDBroochesContentful = async () => {
    try {
        const data = await contentfulClient.getEntries<TypeDiamondBroochSkeleton>();
        // console.log(data);
        return data.items.filter((item) => item.sys.contentType.sys.id == "diamondBrooch");
    } catch(err) {
        console.log(err);
    }
}