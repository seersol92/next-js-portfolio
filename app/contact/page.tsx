"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
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

// Define the validation schema using Yup
// Define the validation schema using Yup with min lengths
const validationSchema = Yup.object().shape({
  firstname: Yup.string()
    .required("First Name is required")
    .min(3, "First Name too short"),
  lastname: Yup.string().min(2, "Last Name too short").notRequired(),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string().min(10, "Phone number too short"), // Assuming a minimum length of 10 digits
  service: Yup.string(),
  message: Yup.string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters long"), // Minimum length for the message
});

// Extract TypeScript type from Yup schema
type contactForm = Yup.InferType<typeof validationSchema>;

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);

  // Initialize the form with react-hook-form
  const {
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
      <div className="flex flex-col lg:flex-row lg:gap-[25px] py-10">
        <div className="lg:h-[54%] order-2 lg:order-none">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col p-10 gap-6 bg-[#27272c] rounded-xl"
          >
            <h3 className="h3 text-accent">Let's work together</h3>
            <p className="text-white/50 max-w-[500px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              consequatur!
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
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web-development">Web Development</SelectItem>
                <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                <SelectItem value="rest-api">REST API Development</SelectItem>
                <SelectItem value="mobile-app">
                  Mobile App Development
                </SelectItem>
              </SelectContent>
            </Select>
            {errors.service && (
              <p className="text-red-500">{errors.service.message}</p>
            )}

            <Textarea
              {...register("message")}
              rows={6}
              placeholder="Write your message.."
              className={errors.message ? "border-red-500" : ""}
            />
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
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
        <div className="order-1 lg:order-none mb-10 lg:mb-0">
          Contact us details
        </div>
      </div>
    </section>
  );
}
