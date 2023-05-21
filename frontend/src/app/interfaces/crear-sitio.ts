enum HeaderPosition {
    center = "center",
    left = "left",
    right = "right"
}
enum HeaderSize {
    big = "big",
    small = "small",
    medium = "medium"
}
export interface CrearSitio {
    name: string,
    backgroundColor: string,
    views: number,
    url: string,
    header: {
        title: string;
        color: string;
        position: HeaderPosition;
        size: HeaderSize;
        hero: boolean;        
        image: string;
    },
    footer: {
        backgroundColor: string;
        textColor: string;
        socialMedia:{
            setSocialMedia: boolean;
            facebook: string;
            instagram: string
            twitter: string;
            linkedin: string;
            tiktok: string;
            otro: string;
        },
        extra:{
            setExtra: boolean;
            image: string;
            text: string
        },
        contact:{
            setContact: boolean;
            phone: string;
            address: string
        }
    }
}