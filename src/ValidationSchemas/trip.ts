import {z} from "zod";

export const tripSchema = z.object({
    destination : z.string().min(1, "Destination is required!").max(255),
    departTime: z.date().refine((value) => !isNaN(value.getTime()), {
      message: "Departure time must be a valid date!",
    }).or(z.string().refine((value) => {
      const parsedDate = new Date(value);
      return !isNaN(parsedDate.getTime()); 
    }, { message: "Departure time must be a valid date!" })),
  
  returnTime: z.date().refine((value) => !isNaN(value.getTime()), {
      message: "Return time must be a valid date!",
    }).or(z.string().refine((value) => {
      const parsedDate = new Date(value);
      return !isNaN(parsedDate.getTime()); 
    }, { message: "Return time must be a valid date!" })),
    preference : z.string().min(1, "Preference is required!").max(255),
    theme : z.string().min(1, "Theme is required!").max(255),
    localTravel : z.string().min(1, "Local travel is required!")


})