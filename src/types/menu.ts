export interface MenuItem {
  code: string;
  labelKey: string;
  href?: string;
  children?: MenuItem[];
}
