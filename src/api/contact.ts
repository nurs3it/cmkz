import {
  ContactFormData,
  ContactFormResponse,
  ContactInformation,
} from "@/types/contact";

const contactInformation: ContactInformation[] = [
  {
    title: "По биржевым вопросам",
    buildingName: "KCSD",
    address: `010000, Астана, район "Алматы", ул. Амангельды Иманова, 13, БЦ "Нур-Саулет 2", офис №101`,
    phone: "+7 (717) 247 67 50",
    mode: ["Пн-Пт: 9:00-18:00", "Сб-Вс: выходные", "Обед: 13:00-14:00"],
    email: "helpdesk@kacd.kz",
    coordinates: {
      latitude: 71.437151,
      longitude: 51.164121,
      zoom: 18.44,
    },
  },
  {
    title: "По вопросам регулирования",
    buildingName: "KCSD",
    address: `010000, Астана, район "Алматы", ул. Амангельды Иманова, 13, БЦ "Нур-Саулет 2", офис №101`,
    phone: "+7 (717) 247 67 50",
    mode: ["Пн-Пт: 9:00-18:00", "Сб-Вс: выходные", "Обед: 13:00-14:00"],
    email: "helpdesk@kacd.kz",
    coordinates: {
      latitude: 71.437151,
      longitude: 51.164121,
      zoom: 18.44,
    },
  },
  {
    title: "По вопросам учета и обращения",
    buildingName: "KCSD",
    address: `010000, Астана, район "Алматы", ул. Амангельды Иманова, 13, БЦ "Нур-Саулет 2", офис №101`,
    phone: "+7 (717) 247 67 50",
    mode: ["Пн-Пт: 9:00-18:00", "Сб-Вс: выходные", "Обед: 13:00-14:00"],
    email: "helpdesk@kacd.kz",
    coordinates: {
      latitude: 71.437151,
      longitude: 51.164121,
      zoom: 18.44,
    },
  },
];

export async function submitContactForm(
  data: ContactFormData,
): Promise<ContactFormResponse> {
  console.log(data);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    success: true,
    message: "Ваше обращение успешно отправлено",
    data: {
      id: Math.random().toString(36).substring(7),
      createdAt: new Date().toISOString(),
    },
  };
}

export async function getContactInformation(): Promise<ContactInformation[]> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return contactInformation;
  } catch (error) {
    console.error(error);
    return [];
  }
}
