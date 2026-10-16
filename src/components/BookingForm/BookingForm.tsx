"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { BsExclamationCircle } from "react-icons/bs";
import { postBooking } from "@/lib/api";
import css from "./BookingForm.module.css";

const schema = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .required("Please enter your name."),
  email: yup
    .string()
    .trim()
    .email("Please enter your email.")
    .required("Please enter your email."),
});

type FormValues = yup.InferType<typeof schema>;

interface Props {
  camperId: string;
}

export default function BookingForm({ camperId }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  const { mutate, isPending } = useMutation({
    mutationFn: (values: FormValues) => postBooking(camperId, values),
    onSuccess: () => {
      toast.success("Booking request sent successfully!");
      reset();
    },
    onError: () => {
      toast.error("Failed to send the booking request. Please try again.");
    },
  });

  return (
    <form
      className={css.form}
      onSubmit={handleSubmit((values) => mutate(values))}
      noValidate
    >
      <div className={css.header}>
        <h3 className={css.title}>Book your campervan now</h3>
        <p className={css.text}>Stay connected! We are always ready to help you.</p>
      </div>

      <div className={css.field}>
        <label className={css.control}>
          {errors.name && <span className={css.floating}>Name*</span>}
          <input
            type="text"
            placeholder="Name*"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={errors.name ? css.inputError : css.input}
            {...register("name")}
          />
          {errors.name && <BsExclamationCircle className={css.icon} />}
        </label>
        {errors.name && (
          <p id="name-error" className={css.error} role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className={css.field}>
        <label className={css.control}>
          {errors.email && <span className={css.floating}>Email*</span>}
          <input
            type="email"
            placeholder="Email*"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={errors.email ? css.inputError : css.input}
            {...register("email")}
          />
          {errors.email && <BsExclamationCircle className={css.icon} />}
        </label>
        {errors.email && (
          <p id="email-error" className={css.error} role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <button type="submit" className={css.button} disabled={isPending}>
        {isPending ? "Sending..." : "Send"}
      </button>
    </form>
  );
}