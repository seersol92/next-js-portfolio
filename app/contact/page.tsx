"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-toastify";
import { CiMail, CiPhone, CiUser } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";

const validationSchema = Yup.object().shape({
  firstname: Yup.string()
    .required("First Name is required")
    .min(3, "First Name too short"),
  lastname: Yup.string().min(2, "Last Name too short").notRequired(),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string().min(10, "Phone number too short"), // Assuming a minimum length of 10 digits
  service: Yup.string().required("Service is required"),
  message: Yup.string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters long"), // Minimum length for the message
});

const contactInfo = [
  {
    name: "Name",
    icon: <CiUser />,
    value: "Hamad Hassan",
  },
  {
    name: "Phone",
    icon: <CiPhone />,
    value: "+92 306 705 1251",
  },
  {
    name: "Email",
    icon: <CiMail />,
    value: "hamad.seersol@gmail.com",
  },
  {
    name: "Address",
    icon: <FaMapMarkerAlt />,
    value: "Sargodha, Pakistan",
  },
];

// Extract TypeScript type from Yup schema
type contactForm = Yup.InferType<typeof validationSchema>;

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);

  // Initialize the form with react-hook-form
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Form submit handler
  const onSubmit = async (data: contactForm) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully");
        reset();
      } else {
        const result = await response.json();
        toast.error(`Error: ${result.error}`);
      }
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("Submission error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="container mx-auto">
      <div className="flex flex-col lg:flex-row lg:gap-[40px] py-10">
        <div className="lg:w-[54%] order-2 lg:order-none">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col p-10 gap-6 bg-[#27272c] rounded-xl"
          >
            <h3 className="h3 text-accent">Let's work together</h3>
            <p className="text-white/50 max-w-[500px]">
              When we combine our talents and ideas, we can achieve incredible
              results and make a real impact.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                {...register("firstname")}
                placeholder="First Name"
                error={errors.firstname ? errors.firstname.message : undefined}
              />

              <Input
                {...register("lastname")}
                placeholder="Last Name"
                error={errors.lastname ? errors.lastname.message : undefined}
              />

              <Input
                type="email"
                {...register("email")}
                placeholder="Email Address"
                error={errors.email ? errors.email.message : undefined}
              />

              <Input
                {...register("phone")}
                placeholder="Phone"
                error={errors.phone ? errors.phone.message : undefined}
              />
            </div>
            <Controller
              name="service"
              control={control}
              render={({ field }) => (
                <div>
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger
                      className={` ${
                        field.value?.length ? "" : "text-slate-500"
                      } text-lg  focus:border-red-500  focus:ring-offset-0
                        ${
                          errors.service &&
                          "border border-red-500 ring-offset-red-500 focus-visible:ring-red-500 "
                        }`}
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-development">
                        Web Development
                      </SelectItem>
                      <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                      <SelectItem value="rest-api">
                        REST API Development
                      </SelectItem>
                      <SelectItem value="mobile-app">
                        Mobile App Development
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.service && (
                    <p className="text-red-500">{errors.service.message}</p>
                  )}
                </div>
              )}
            />

            <Textarea
              {...register("message")}
              rows={6}
              placeholder="Write your message.."
              className={
                errors.message &&
                "border border-red-500 ring-offset-red-500 focus-visible:ring-red-500"
              }
            />
            {errors.message && (
              <p className="text-red-500 ">{errors.message.message}</p>
            )}

            <Button type="submit" disabled={isLoading} className="relative">
              {isLoading ? (
                <span className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 animate-spin text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-10"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      d="M4 12a8 8 0 018-8V4a12 12 0 00-12 12h4z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </div>
        <div className="order-1 lg:order-none mb-10 lg:mb-0 flex lg:justify-end items-center">
          <ul className="flex flex-col gap-10">
            {contactInfo.map((info, index) => {
              return (
                <li
                  key={index}
                  className="flex gap-5 
                items-center"
                >
                  <div
                    className="text-4xl text-accent h-[52px] w-[52px] lg:h-[72px] lg:w-[72px]
                  bg-[#27272c] rounded-md flex items-center justify-center
                  "
                  >
                    {info.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white/60">{info.name}</span>
                    <span className="text-xl">{info.value}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
