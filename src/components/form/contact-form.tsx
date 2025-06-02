"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@ui/form";
import { Input } from "@ui/input";
import { Textarea } from "@ui/textarea";
import { useToast } from "@ui/use-toast";
import {
  ContactFormData,
  ALLOWED_FILE_TYPES,
  MAX_FILE_SIZE,
} from "@/types/contact";
import { submitContactForm } from "@/api/contact";
import { usePhoneMask } from "@/hooks/use-phone-mask";
import { ThankYouScreen } from "./thank-you-screen";
import { useTranslations } from "next-intl";

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { formatPhoneNumber } = usePhoneMask();
  const t = useTranslations();

  const formSchema = z.object({
    fullname: z.string().min(2, t("form.validation.fullname")),
    email: z.string().email(t("form.validation.email")),
    phone: z.string().min(10, t("form.validation.phone")),
    theme: z.string().min(2, t("form.validation.theme")),
    message: z.string().min(10, t("form.validation.message")),
    attachment: z
      .custom<FileList>()
      .transform((file) => file as FileList)
      .superRefine((files, ctx) => {
        if (files?.[0]?.size > MAX_FILE_SIZE) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: t("form.validation.file_size"),
          });
        }
        if (
          files?.[0] &&
          !ALLOWED_FILE_TYPES.includes(
            files[0].type as (typeof ALLOWED_FILE_TYPES)[number],
          )
        ) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: t("form.validation.file_format"),
          });
        }
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phone: "",
      theme: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsSubmitting(true);
      const response = await submitContactForm(
        values as unknown as ContactFormData,
      );

      if (response.success) {
        toast({
          title: t("form.success.title"),
          description: t("form.success.message"),
        });
        setIsSubmitted(true);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: t("form.error.title"),
        description:
          error instanceof Error ? error.message : t("form.error.message"),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    form.reset();
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return <ThankYouScreen onReset={handleReset} />;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("form.labels.fullname")}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t("form.placeholders.fullname")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("form.labels.email")}</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder={t("form.placeholders.email")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("form.labels.phone")}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t("form.placeholders.phone")}
                  {...field}
                  onChange={(e) => {
                    const formatted = formatPhoneNumber(e.target.value);
                    field.onChange(formatted);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="theme"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("form.labels.theme")}</FormLabel>
              <FormControl>
                <Input placeholder={t("form.placeholders.theme")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("form.labels.message")}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t("form.placeholders.message")}
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="attachment"
          render={({ field: { onChange, value, ...field } }) => (
            <FormItem>
              <FormLabel>{t("form.labels.attachment")}</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept={ALLOWED_FILE_TYPES.join(",")}
                  onChange={(e) => {
                    console.log(value, "just call");
                    onChange(e.target.files);
                  }}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                {t("form.descriptions.attachment")}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting
            ? t("form.buttons.submitting")
            : t("form.buttons.submit")}
        </Button>
      </form>
    </Form>
  );
}
