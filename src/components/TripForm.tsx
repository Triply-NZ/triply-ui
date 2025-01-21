"use client"
import React from "react"; 
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { tripSchema } from "@/ValidationSchemas/trip";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { format } from "date-fns";

type TripFormData = z.infer<typeof tripSchema>;

const TripForm = () => {
  const form = useForm<TripFormData>({
    resolver: zodResolver(tripSchema),
  });

  async function onSubmit(values: z.infer<typeof tripSchema>) {
    console.log(values);
  }

  return (
    <div className="rounded-md border w-full p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
          <FormField
            control={form.control}
            name="destination"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Destination</FormLabel>
                <FormControl>
                  <Input placeholder="Destination..." {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Departure Time and Return Time in a Row */}
          <div className="flex space-x-4">
            {/* Departure Time */}
            <FormField
              control={form.control}
              name="departureTime"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Departure Time</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Input
                          placeholder="Select date"
                          value={field.value ? format(new Date(field.value), "yyyy-MM-dd") : ""}
                          readOnly
                        />
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent>
                      <Calendar
                        mode="single"
                        selected={field.value ? new Date(field.value) : undefined}
                        onSelect={(date) => field.onChange(date?.toISOString())}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />

            {/* Return Time */}
            <FormField
              control={form.control}
              name="returnTime"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Return Time</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Input
                          placeholder="Select date"
                          value={field.value ? format(new Date(field.value), "yyyy-MM-dd") : ""}
                          readOnly
                        />
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent>
                      <Calendar
                        mode="single"
                        selected={field.value ? new Date(field.value) : undefined}
                        onSelect={(date) => field.onChange(date?.toISOString())}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
          </div>

          {/* Other Form Fields */}
          <div className="flex w-full space-x-4">
            <FormField
              control={form.control}
              name="preference"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Preference</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Preference..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="CompactTravel">Compact Travel</SelectItem>
                      <SelectItem value="RelaxedTravel">Relaxed Travel</SelectItem>
                      <SelectItem value="HybridTravel">Hybrid Travel</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="theme"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Theme</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Theme..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="LeisureTravel">Leisure Travel</SelectItem>
                      <SelectItem value="CultureTravel">Culture Travel</SelectItem>
                      <SelectItem value="NatureTravel">Nature Travel</SelectItem>
                      <SelectItem value="AdventureTravel">Adventure Travel</SelectItem>
                      <SelectItem value="BusinessTravel">Business Travel</SelectItem>
                      <SelectItem value="ShoppingTravel">Shopping Travel</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="localTravel"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Local Travel</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Local Travel..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Self-driving">Self-driving</SelectItem>
                      <SelectItem value="PublicTransportation">Public Transportation</SelectItem>
                      <SelectItem value="Taxi">Taxi</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>

          <Button type="submit">Create a trip</Button>
        </form>
      </Form>
    </div>
  );
};

export default TripForm;
