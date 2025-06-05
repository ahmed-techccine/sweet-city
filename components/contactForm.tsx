import { useState } from "react"

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    setError("")
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    if (res.ok) {
      setStatus("success")
      setForm({ name: "", email: "", message: "" })
    } else {
      setStatus("error")
      const data = await res.json()
      setError(data?.error || "Failed to send message. Try again.")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white max-w-lg mx-auto rounded-2xl shadow-lg p-8 space-y-6 border border-gray-100"
    >
      <div className="text-center mb-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Get in Touch</h3>
        <p className="text-gray-500">We usually respond within 24 hours.</p>
      </div>
      <div>
        <label className="block mb-1 font-semibold text-gray-700" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          placeholder="Your Name"
          disabled={status === "loading"}
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold text-gray-700" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          placeholder="you@email.com"
          disabled={status === "loading"}
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold text-gray-700" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 transition resize-none"
          placeholder="How can we help you?"
          disabled={status === "loading"}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition disabled:opacity-60"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
      {status === "success" && (
        <div className="text-green-600 text-center font-semibold mt-2">
          Thank you! Your message has been sent.
        </div>
      )}
      {status === "error" && (
        <div className="text-red-600 text-center font-semibold mt-2">
          {error}
        </div>
      )}
    </form>
  )
}