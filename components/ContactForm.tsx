import { useState } from 'react'

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isSending, setIsSending] = useState(false)
    const [isSent, setIsSent] = useState(false)
    const [isError, setIsError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        setIsSending(true)
        setIsError(false)
        setIsSent(false)

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                message,
            }),
        })

        if (res.status === 200) {
            setIsSent(true)
        } else {
            setIsError(true)
        }

        setIsSending(false)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="w-full md:w-1/2">
                    <label htmlFor="name" className="text-black dark:text-white text-md mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        required={true}
                        onChange={(e) => setName(e.target.value)}
                        className="text-black dark:text-white border-2 border-gray-200 dark:border-gray-600 rounded-md p-2 w-full mt-1"
                    />
                </div>
                <div className="w-full md:w-1/2 mt-2 md:mt-0">
                    <label htmlFor="email" className="text-black dark:text-white text-md mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}
                        className="text-black dark:text-white border-2 border-gray-200 dark:border-gray-600 rounded-md p-2 mt-1 w-full"
                    />
                </div>
            </div>
            <div className="flex flex-col mt-4">
                <label htmlFor="message" className="text-black dark:text-white text-md">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="text-black dark:text-white border-2 border-gray-200 dark:border-gray-600 rounded-md p-2 mt-1"
                />
            </div>
            <div className="flex flex-col mt-6">
                <button
                    type="submit"
                    className="border-2 border-gray-200 dark:border-gray-600 text-black dark:text-white rounded-md p-2 hover:shadow-sm transition-shadow duration-100"
                >
                    {isSending ? 'Sending...' : 'Send'}
                </button>
            </div>
            {isSent && (
                <div className="text-purple-500 dark:text-purple-200 mt-4">Message sent successfully!</div>
            )}
            {isError && (
                <div className="text-gray-500 dark:text-gray-200 mt-4">Error sending message. Please try again.</div>
            )}
        </form>
    )
}

export default ContactForm;
