'use client';

import { useState, FormEvent } from 'react';
import { siteConfig } from '@/lib/site-config';
import CheckIcon from './CheckIcon';

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
  dates?: string;
  description?: string;
}

const GHL_BASE = 'https://services.leadconnectorhq.com';
const GHL_API_KEY = process.env.NEXT_PUBLIC_GHL_API_KEY;
const GHL_LOCATION_ID = process.env.NEXT_PUBLIC_GHL_LOCATION_ID;
const GHL_OWNER_CONTACT_ID = process.env.NEXT_PUBLIC_GHL_OWNER_CONTACT_ID;

export default function BookingForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (form: FormData): FormErrors => {
    const errs: FormErrors = {};
    const name = form.get('name') as string;
    const phone = form.get('phone') as string;
    const email = form.get('email') as string;
    const address = form.get('address') as string;
    const dates = form.get('dates') as string;
    const description = form.get('description') as string;

    if (!name?.trim()) errs.name = 'Full name is required.';
    if (!phone?.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (!/^[\d\s\-+()]{7,}$/.test(phone.trim())) {
      errs.phone = 'Please enter a valid phone number.';
    }
    if (!email?.trim()) {
      errs.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!address?.trim()) errs.address = 'Property address is required.';
    if (!dates?.trim()) errs.dates = 'Preferred date(s) required.';
    if (!description?.trim()) errs.description = 'Please describe your garage.';

    return errs;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);

    const name = (formData.get('name') as string).trim();
    const phone = (formData.get('phone') as string).trim();
    const email = (formData.get('email') as string).trim();
    const address = (formData.get('address') as string).trim();
    const dates = (formData.get('dates') as string).trim();
    const description = (formData.get('description') as string).trim();

    try {
      if (!GHL_API_KEY || !GHL_LOCATION_ID) {
        throw new Error('GHL not configured');
      }

      const ghlHeaders = {
        'Authorization': `Bearer ${GHL_API_KEY}`,
        'Version': '2021-07-28',
        'Content-Type': 'application/json',
      };

      // Create the contact in GHL
      const response = await fetch(`${GHL_BASE}/contacts/`, {
        method: 'POST',
        headers: ghlHeaders,
        body: JSON.stringify({
          locationId: GHL_LOCATION_ID,
          name,
          email,
          phone,
          address1: address,
          tags: ['Website Lead', 'Garage Cleanout'],
          source: 'Open Bay Website',
          customFields: [
            { key: 'preferred_dates', field_value: dates },
            { key: 'garage_description', field_value: description },
          ],
        }),
      });

      if (!response.ok) throw new Error('Submit failed');

      // Send SMS notification to owner (fire-and-forget, don't block success)
      if (GHL_OWNER_CONTACT_ID) {
        fetch(`${GHL_BASE}/conversations/messages`, {
          method: 'POST',
          headers: ghlHeaders,
          body: JSON.stringify({
            type: 'SMS',
            contactId: GHL_OWNER_CONTACT_ID,
            message: `New lead: ${name}, ${phone}, ${address}. "${description}"`,
          }),
        }).catch(() => {}); // notification failure shouldn't affect user experience
      }

      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-fresh/10 mb-6">
          <CheckIcon className="h-8 w-8 text-fresh" />
        </div>
        <p className="text-xl font-semibold text-navy mb-2">{siteConfig.booking.successMessage}</p>
      </div>
    );
  }

  const inputBase =
    'w-full rounded-xl border border-gray-200 px-4 py-3 text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-fresh focus:border-transparent transition-colors min-h-[44px]';

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {error && (
        <div className="bg-red-50 text-red-700 rounded-xl px-4 py-3 text-sm">
          Something went wrong. Please call us at{' '}
          <a href={`tel:${siteConfig.phone}`} className="font-semibold underline">
            {siteConfig.phone}
          </a>
          .
        </div>
      )}

      <div>
        <label htmlFor="booking-name" className="block text-sm font-medium text-navy mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="booking-name"
          name="name"
          autoComplete="name"
          className={inputBase}
          placeholder="Your full name"
          aria-describedby={errors.name ? 'booking-name-error' : undefined}
        />
        {errors.name && <p id="booking-name-error" className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="booking-phone" className="block text-sm font-medium text-navy mb-1">
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="booking-phone"
          name="phone"
          autoComplete="tel"
          className={inputBase}
          placeholder="(201) 555-0123"
          aria-describedby={errors.phone ? 'booking-phone-error' : undefined}
        />
        {errors.phone && <p id="booking-phone-error" className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="booking-email" className="block text-sm font-medium text-navy mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="booking-email"
          name="email"
          autoComplete="email"
          className={inputBase}
          placeholder="you@email.com"
          aria-describedby={errors.email ? 'booking-email-error' : undefined}
        />
        {errors.email && <p id="booking-email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="booking-address" className="block text-sm font-medium text-navy mb-1">
          Property Address <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="booking-address"
          name="address"
          autoComplete="street-address"
          className={inputBase}
          placeholder="123 Main St, Paramus, NJ"
          aria-describedby={errors.address ? 'booking-address-error' : undefined}
        />
        {errors.address && <p id="booking-address-error" className="text-red-500 text-sm mt-1">{errors.address}</p>}
      </div>

      <div>
        <label htmlFor="booking-dates" className="block text-sm font-medium text-navy mb-1">
          Preferred Date(s) <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="booking-dates"
          name="dates"
          className={inputBase}
          placeholder="e.g. This Saturday, or any weekday"
          aria-describedby={errors.dates ? 'booking-dates-error' : undefined}
        />
        {errors.dates && <p id="booking-dates-error" className="text-red-500 text-sm mt-1">{errors.dates}</p>}
      </div>

      <div>
        <label htmlFor="booking-description" className="block text-sm font-medium text-navy mb-1">
          Describe Your Garage <span className="text-red-500">*</span>
        </label>
        <textarea
          id="booking-description"
          name="description"
          rows={3}
          className={inputBase}
          placeholder="How full is it? Anything heavy or unusual?"
          aria-describedby={errors.description ? 'booking-description-error' : undefined}
        />
        {errors.description && <p id="booking-description-error" className="text-red-500 text-sm mt-1">{errors.description}</p>}
      </div>

      <div>
        <label htmlFor="booking-photos" className="block text-sm font-medium text-navy mb-1">
          Photos of Your Garage <span className="text-navy/40 font-normal">(optional)</span>
        </label>
        <input
          type="file"
          id="booking-photos"
          name="photos"
          multiple
          accept="image/*"
          className="w-full text-navy/60 file:mr-4 file:py-2.5 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-fresh/10 file:text-fresh hover:file:bg-fresh/20 file:cursor-pointer min-h-[44px]"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-fresh hover:bg-fresh-dark disabled:bg-fresh/50 text-white font-semibold py-3.5 px-8 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-fresh focus:ring-offset-2 min-h-[44px]"
      >
        {submitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        ) : (
          'Send My Quote Request'
        )}
      </button>
    </form>
  );
}
