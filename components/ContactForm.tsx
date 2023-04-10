import { useState } from 'react'

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isSending, setIsSending] = useState(false)
    const [isSent, setIsSent] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        setIsSending(true)
        setIsSent(false)

        // Send the data to the backend
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                message,
            }),
        });

        // Mock the send becuase there are no errors we're returning from the backend
        setTimeout(() => {
            setIsSending(false)
            setIsSent(true)
        }, 750)
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
                    className="max-w-[160px] font-semibold border-2 bg-white dark:bg-transparent text-black dark:text-white rounded-md p-2 hover:shadow-sm transition-shadow duration-200"
                >
                    {isSending ? 'Sending...' :  isSent ? 'Sent  ✔️' : 'Submit'}
                </button>
            </div>
        </form>
    )
}

export default ContactForm;
