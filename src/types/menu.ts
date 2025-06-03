export interface MenuItem {
  code: string;
  labelKey?: string;
  label?: string;
  href?: string;
  children?: MenuItem[];
}
