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
    header:
        {
            title: string;
            color: string;
            position: HeaderPosition;
            size: HeaderSize;
            hero: boolean;        
            image: string;
        }
}
