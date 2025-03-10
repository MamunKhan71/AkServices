const CompanyMap = () => {
    return (
        <section className="pb-20 w-full">
            <div>
                <div className="relative h-[400px] overflow-hidden rounded-lg shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7772859653895!2d103.8615!3d1.3295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1791b90acf7d%3A0x9f5ac50da8f3efe8!2s8%20Burn%20Rd%2C%20Trivex%2C%20Singapore%20369977!5e0!3m2!1sen!2ssg!4v1646870000000!5m2!1sen!2ssg"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Lukreative Office Location"
                        className="absolute inset-0"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

export default CompanyMap;