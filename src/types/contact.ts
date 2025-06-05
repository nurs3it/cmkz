export interface ContactFormData {
  fullname: string;
  email: string;
  phone: string;
  theme: string;
  message: string;
  attachment?: File;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
  data?: {
    id: string;
    createdAt: string;
  };
}

export interface ContactFormError {
  field: keyof ContactFormData;
  message: string;
}

export const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/bmp",
  "image/tiff",
  "text/plain",
  "text/csv",
  "application/zip",
  "application/x-rar-compressed",
] as const;

export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export interface ContactInformation {
  title: string;
  buildingName: string;
  address: string;
  phone: string;
  mode: string[];
  email: string;
  coordinates: {
    latitude: number;
    longitude: number;
    zoom?: number;
  };
}
