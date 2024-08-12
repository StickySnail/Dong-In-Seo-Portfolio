import { getDescription_api } from "../get-description";

export const personalData = {
    name: "Dong-In Seo",
    profile: "/Dongin_Profile.JPG",
    // TODO : Upate Designation
    designation: [
        "Data Enthusiast",
        "Future Entrepreneur",
        "Future Data Engineer",
        "Future Data Scientist",
        "Future Software Engineer",
    ],
    description: "hahah?",
    email: "dongin.seo.kr@gmail.com",
    phone: "+17154109412",
    address: "Lynnwood, WA, USA",
    // github: "",
    // facebook: "",
    linkedIn: "https://www.linkedin.com/in/donginseo99/",
    // twitter: "",
    // stackOverflow: "",
    // leetcode: "",
    devUsername: "StickySnail",
    // TODO : Update Resume Link
    resume: "https://drive.google.com/file/d/1ERglIE7d86tkhSKKOnwLh53oiecZu-XE/view?usp=sharing",
};

export async function getPersonalDataWithDescription() {
    try {
        const description = await getDescription_api();
        return {
            ...personalData,
            description,
        };
    } catch (error) {
        console.error("Error in getPersonalDataWithDescription:", error);
        throw error; // Re-throw the error so we can catch it in the component
    }
}
