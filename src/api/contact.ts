import { ContactFormData, ContactFormResponse } from "@/types/contact";

export async function submitContactForm(
  data: ContactFormData,
): Promise<ContactFormResponse> {
  console.log(data);

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mock successful response
  return {
    success: true,
    message: "Ваше обращение успешно отправлено",
    data: {
      id: Math.random().toString(36).substring(7),
      createdAt: new Date().toISOString(),
    },
  };
}
