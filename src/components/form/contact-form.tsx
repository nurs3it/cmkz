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

const formSchema = z.object({
  fullname: z.string().min(2, "ФИО должно содержать минимум 2 символа"),
  email: z.string().email("Введите корректный email"),
  phone: z.string().min(10, "Введите корректный номер телефона"),
  theme: z.string().min(2, "Тема должна содержать минимум 2 символа"),
  message: z.string().min(10, "Сообщение должно содержать минимум 10 символов"),
  attachment: z
    .custom<File>()
    .optional()
    .refine(
      (file) => !file || file.size <= MAX_FILE_SIZE,
      "Размер файла не должен превышать 10 МБ",
    )
    .refine(
      (file) =>
        !file ||
        ALLOWED_FILE_TYPES.includes(
          file.type as (typeof ALLOWED_FILE_TYPES)[number],
        ),
      "Неподдерживаемый формат файла",
    ),
});

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { formatPhoneNumber } = usePhoneMask();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phone: "",
      theme: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true);
      const response = await submitContactForm(data);

      if (response.success) {
        toast({
          title: "Успешно",
          description: response.message,
        });
        setIsSubmitted(true);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Ошибка",
        description:
          error instanceof Error
            ? error.message
            : "Произошла ошибка при отправке формы",
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
              <FormLabel>ФИО</FormLabel>
              <FormControl>
                <Input placeholder="Укажите ваше ФИО" {...field} />
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
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Укажите электронную почту"
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
              <FormLabel>Телефон</FormLabel>
              <FormControl>
                <Input
                  placeholder="Номер телефона"
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
              <FormLabel>Тема обращения</FormLabel>
              <FormControl>
                <Input placeholder="Тема обращения" {...field} />
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
              <FormLabel>Сообщение</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Сообщение"
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
          render={({ field: { onChange, ...field } }) => (
            <FormItem>
              <FormLabel>Вложение</FormLabel>
              <FormDescription>
                Допустимые типы файлов: PDF, DOC, DOCX, XLS, XLSX, PNG, JPG,
                JPEG, BMP, TIFF, TXT, CSV, ZIP, RAR и менее 10 МБ.
              </FormDescription>
              <FormControl>
                <Input
                  type="file"
                  accept={ALLOWED_FILE_TYPES.join(",")}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    onChange(file);
                  }}
                  {...field}
                  value={undefined}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Отправка..." : "Отправить"}
        </Button>
      </form>
    </Form>
  );
}
