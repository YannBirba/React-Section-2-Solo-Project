import React from "react";
import Travel from "../types/travel";
import { FaMapMarkerAlt } from "react-icons/fa";

const TravelCard: React.FC<Travel> = ({
    title,
    location,
    description,
    endDate,
    startDate,
    googleMapsUrl,
    imageUrl,
}) => {
    const formattedDate = (date: any) => {
        const dateObj = new Date(date);
        // string date with 12 Jan, 2021 format;
        const formattedDate = `
            ${dateObj.getDate()}
            ${dateObj.toLocaleString("en-US", { month: "short" })},
            ${dateObj.getFullYear()}`;
        return formattedDate;
    };
    return (
        <article className="my-5 xs:flex-row flex-col flex gap-5 items-center">
            <div>
                <img
                    className="rounded-md xs:object-cover xs:min-w-[128px] xs:h-[168px]"
                    src={imageUrl}
                    alt={title}
                    title={title}
                />
            </div>
            <div className="flex flex-col gap-1">
                <div className="flex gap-4">
                    <div className="flex gap-2 items-center uppercase text-xs">
                        <FaMapMarkerAlt fill="#F55A5A" />
                        {location}
                    </div>
                    {googleMapsUrl && (
                        <a
                            className="text-gray-400 underline hover:no-underline text-xs"
                            href={googleMapsUrl}
                            target="_blank"
                        >
                            View on Google Maps
                        </a>
                    )}
                </div>
                <h2 className="text-[25px] font-extrabold">{title}</h2>
                <div className="text-xs mt-3">
                    <strong>
                        {formattedDate(startDate)} - {formattedDate(endDate)}
                    </strong>
                    <div className="text-xs mt-2">{description}</div>
                </div>
            </div>
        </article>
    );
};

export default TravelCard;
