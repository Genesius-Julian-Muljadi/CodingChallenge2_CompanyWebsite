import { getOwnerProfilesContentful, getStaffProfilesContentful, ParseRichText } from "@/contentful/functions/contentful.functions"
import { IAsset } from "@/contentful/types/contentful.types";

export default async function AboutUsTeamMobile() {
    const oprofiles = await getOwnerProfilesContentful();
    const sprofiles = await getStaffProfilesContentful();

    return (
        <div>
            <div className="flex flex-col gap-2 mx-auto w-[30rem] border border-black">
                <div className="mx-auto font-semibold">Obligatory team section, but on mobile!</div>
                <div className="grid grid-cols-2 grid-rows-1 gap-6">
                    <div className="col-start-1 row-start-1 grid grid-cols-2 gap-y-2" id="aboutusowners">
                        {oprofiles &&
                            oprofiles.map((profile, idx) => (
                            <div key={idx} className="flex flex-col gap-2">
                                <div className="size-16 mx-auto">
                                    <img className="h-[100%] w-[100%] rounded-full shadow-md shadow-slate-700"
                                    src={`https:${(profile.fields.photo as IAsset)?.fields.file.url}`} />
                                </div>
                                <p className="text-center font-serif">{profile.fields.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className="col-start-2 row-start-1 grid grid-cols-2 gap-y-2" id="aboutusstaff">
                        {sprofiles &&
                            sprofiles.map((profile, idx) => (
                            <div key={idx} className="flex flex-col gap-2">
                                <div className="size-16 mx-auto">
                                    <img className="h-[100%] w-[100%] rounded-full shadow-md shadow-slate-700"
                                    src={`https:${(profile.fields.photo as IAsset)?.fields.file.url}`} />
                                </div>
                                <p className="text-center font-serif">{profile.fields.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}