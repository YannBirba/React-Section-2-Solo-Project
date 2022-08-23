export default interface Travel {
    id: number;
    title: string;
    location: string;
    googleMapsUrl: string | null;
    startDate: Date;
    endDate: Date;
    description: string;
    imageUrl: string;
}
