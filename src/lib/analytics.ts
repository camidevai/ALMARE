// Simple analytics utility for tracking page views and events
export class Analytics {
  static pageView(url: string, title: string) {
    // In a real project, you would integrate with Google Analytics, Plausible, etc.
    console.log('Page view:', { url, title, timestamp: new Date() });
  }

  static event(action: string, category: string, label?: string) {
    console.log('Analytics event:', { action, category, label, timestamp: new Date() });
  }

  static donation(amount: number, currency = 'EUR') {
    this.event('donation', 'fundraising', `${amount} ${currency}`);
  }

  static contactForm(subject: string) {
    this.event('contact_form', 'engagement', subject);
  }
}