import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import video from "../assets/video/contact.mp4"

function Contact() {
    return (
        <>
            <Navbar />
            <section className="bg-gray-100 py-8">
                <div className="container mx-auto">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h1 className="text-4xl font-bold text-teal-700 mb-8">Contact Us</h1>
                        <div className="flex flex-col md:flex-row mb-8">
                            <div className="w-full md:w-1/2 pr-4">
                                <video width="100%" controls autoPlay loop>
                                    <source src={video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <ContactInfo />
                        </div>
                        <ContactForm />
                        <div className="bg-gray-200 p-4 text-gray-700 text-center">
                            Enxhi Kaci, Uesli Laska, Katerina Taci
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

function ContactInfo() {
    return (
        <div className="w-full md:w-1/2">
            <div className="text-lg text-gray-700 mb-4">
                <p>
                    If you have any questions, feedback, or inquiries, please feel free to reach out to our team. We are here to assist you and provide the information you need. You can contact us via the following methods:
                </p>
            </div>
            <div className="text-lg text-gray-700 mb-4">
                <p>
                    <strong>Email:</strong> contact@meshijeapp.com
                </p>
                <p>
                    <strong>Phone:</strong> +355 456-7890
                </p>
                <p>
                    <strong>Address:</strong> Rruga Sulejman Delvina, Zayed Business Center, Tirane, Albania
                </p>
            </div>
        </div>
    );
}

function ContactForm() {
    return (
        <div className="text-lg text-gray-700 mb-4">
            <p>
                You can also use the contact form below to send us a message:
            </p>
            <form>
                <form>
      
                    <iframe
                    title="Google Forms Survey"
                    src="https://docs.google.com/forms/d/e/1FAIpQLScPeQaz6R3Lw3Q77QMy7cngqKUnCyOhmIhgIxf9Z5P69yqvxg/viewform?embedded=true"
                    width="100%"
                    height="2533" // You can adjust the height as needed
                    frameBorder="0"
                ></iframe>
                </form>
            </form>
        </div>
    );
}

export default Contact;