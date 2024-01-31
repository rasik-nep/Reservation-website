import React from 'react'

export default function Maps() {
    return (
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.857353934944!2d85.36529494999999!3d27.6952226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a24d12fb959%3A0xefae78a4aa84eb0b!2sJanamaitri%20Park%20(Pepsicola%20Town%20Plan)!5e0!3m2!1sen!2snp!4v1706714997430!5m2!1sen!2snp"
            width={"100%"}
            height="450"
            style={{ "border": 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}
