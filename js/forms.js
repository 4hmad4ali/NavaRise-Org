
// js/forms.js

function wireFormspree(formId, statusId, messages) {
  const form = document.getElementById(formId);
  const status = document.getElementById(statusId);
  if (!form || !status) return; // page doesn't have this form

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    status.textContent = messages.sending;
    status.className = "mt-2 text-sm text-slate-600";

    try {
      const data = new FormData(form);

      const res = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { "Accept": "application/json" }
      });

      if (res.ok) {
        form.reset();
        status.textContent = messages.success;
        status.className = "mt-2 text-sm font-bold text-emerald-700";
      } else {
        status.textContent = messages.fail;
        status.className = "mt-2 text-sm font-bold text-rose-700";
      }
    } catch (err) {
      status.textContent = messages.network;
      status.className = "mt-2 text-sm font-bold text-rose-700";
    }
  });
}

function wireDonateQuickAmounts() {
  const amountInput = document.getElementById("donationAmount");
  if (!amountInput) return;

  document.querySelectorAll(".nr-tier[data-amount]").forEach(btn => {
    btn.addEventListener("click", () => {
      const val = btn.getAttribute("data-amount") || "";
      amountInput.value = val;
      amountInput.focus();

      document.querySelectorAll(".nr-tier").forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Contact page
  wireFormspree("contactForm", "formStatus", {
    sending: "Sending...",
    success: "Your message was sent successfully. Thank you!",
    fail: "Message sending failed. Please try again.",
    network: "Connection error. Please check your internet and try again."
  });

  // Donate page
  wireFormspree("donateForm", "donateStatus", {
    sending: "Sending...",
    success: "Sent! Thank you for your support. We’ll contact you soon.",
    fail: "Submission failed. Please try again.",
    network: "Connection error. Please check your internet and try again."
  });

  wireDonateQuickAmounts();
});
