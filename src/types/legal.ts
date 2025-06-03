export interface LegalType {
  code: string;
  name_ru: string;
  name_kk: string;
  name_en: string;
}

export interface LegalGroupedDocument {
  type: string;
  group: string;
  name_ru: string;
  name_kk: string;
  name_en: string;
  documents: LegalDocument[];
}

export interface LegalDocument {
  code: string;
  name_ru: string;
  name_kk: string;
  name_en: string;
  content: string;
}
