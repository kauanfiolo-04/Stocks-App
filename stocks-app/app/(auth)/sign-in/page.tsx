"use client";

import FooterLink from "@/components/forms/FooterLink";
import InputField from "@/components/forms/InputField";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const {
      register,
      handleSubmit,
      control,
      formState: { errors, isSubmitting }
    } = useForm<SignInFormData>({
      defaultValues: {
        email: "",
        password: ""
      }, mode: "onBlur"
    });
  
    const onSubmit = async (data: SignInFormData) => {
      try {
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <>
      <h1 className="form-title">Log In Your Account</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField 
          name="email"
          label="Email"
          placeholder="Enter your email"
          register={register}
          error={errors.email}
          validation={{ required: "Email is required", pattern: /^\w+@\w+\.\w+$/, message: "Email address is required" }}
        />

        <InputField 
          name="password"
          label="Password"
          placeholder="Enter a strong password"
          register={register}
          error={errors.password}
          validation={{ required: "Password is required", minLenght: 8 }}
        />

        <Button 
          className="yellow-btn w-full mt-5"
          type="submit" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Signing in" : "Sign in"}
        </Button>

        <FooterLink 
          text="Don't have an account?"
          linkText="Sign up"
          href="/sign-up"
        />
      </form>
    </>
  );
};

export default SignIn;