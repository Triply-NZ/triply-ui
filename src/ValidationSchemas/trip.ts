import {z} from "zod";

export const tripSchema = z.object({
    destination : z.string().min(1, "Destination is required!").max(255),
    time: z.string().refine((value) => {
        const parsedDate = new Date(value);
        return !isNaN(parsedDate.getTime()); 
      },
      { message: "Time must be a valid date (e.g., YYYY-MM-DD)!" }
    ),
    preference : z.string().min(1, "Preference is required!").max(255),
    theme : z.string().min(1, "Theme is required!").max(255),
    localTravel : z.string().min(1, "Local travel is required!")


})