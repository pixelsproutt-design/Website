'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { useQuoteModal } from '@/context/QuoteModalContext';

export function QuoteModal() {
  const { isOpen, closeModal } = useQuoteModal();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      setSubmitted(false);
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log({
      name: formData.get('name'),
      email: formData.get('email'),
      businessType: formData.get('businessType'),
      projectDetails: formData.get('projectDetails'),
    });
    setSubmitted(true);
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const rect = dialog.getBoundingClientRect();
    const isInDialog =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;
    if (!isInDialog) closeModal();
  };

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      onClose={closeModal}
      className="w-[min(92vw,28rem)] rounded-2xl border border-pale-sage/50 bg-loam p-0 text-deep-sprout shadow-2xl backdrop:bg-deep-sprout/50"
    >
      <div className="p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
          <h2 className="font-heading text-xl font-semibold">Get Quote</h2>
          <button
            type="button"
            onClick={closeModal}
            aria-label="Close"
            className="rounded-full px-2 py-1 text-xl leading-none text-deep-sprout/60 hover:text-deep-sprout"
          >
            ×
          </button>
        </div>

        {submitted ? (
          <p className="text-sm text-deep-sprout/80">Thanks — we&apos;ll be in touch.</p>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <label className="block text-sm">
              <span className="mb-1 block font-medium">Name</span>
              <input
                required
                name="name"
                className="w-full rounded-lg border border-pale-sage bg-white px-3 py-2"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium">Email</span>
              <input
                required
                type="email"
                name="email"
                className="w-full rounded-lg border border-pale-sage bg-white px-3 py-2"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium">Business Type</span>
              <input
                required
                name="businessType"
                className="w-full rounded-lg border border-pale-sage bg-white px-3 py-2"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium">Project Details</span>
              <textarea
                name="projectDetails"
                rows={4}
                className="w-full rounded-lg border border-pale-sage bg-white px-3 py-2"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-full bg-sprout-green px-5 py-2.5 text-sm font-semibold text-white"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </dialog>
  );
}
