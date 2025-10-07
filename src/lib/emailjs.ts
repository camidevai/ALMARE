// EmailJS Configuration for Fundación Almare
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_r51c6zr',
  TEMPLATE_ID: 'template_fbsu4k5',
  PUBLIC_KEY: 'QyPVw7KzUKNZLE68v',
  TO_EMAIL: 'contacto@fundacionalmare.cl'
};

// Template parameters interface
export interface EmailTemplateParams extends Record<string, unknown> {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  to_email: string;
  sent_date: string;
}
