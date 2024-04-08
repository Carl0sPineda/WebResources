export interface Widget {
  title?: string;
  languaje: string;
  code: string;
}

export interface Element {
  id: string;
  title: string;
  widget1?: Widget;
  widget2?: Widget;
  widget3?: Widget;
  widget4?: Widget;
  widget5?: Widget;
  widget6?: Widget;
  widget7?: Widget;
  widget8?: Widget;
  widget9?: Widget;
  widget10?: Widget;
}

export interface DataItem {
  id: string;
  title: string;
  elements: Element[];
}
