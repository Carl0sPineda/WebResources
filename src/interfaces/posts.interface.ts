export interface Posts {
  id: number;
  name: string;
  description?: string;
  image?: string;
  widget1?: Widget;
  widget2?: Widget;
  widget3?: Widget;
  widget4?: Widget;
  widget5?: Widget;
}

export interface Widget {
  languaje: string;
  title?: string;
  code: string;
}