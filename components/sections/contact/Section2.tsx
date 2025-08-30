'use client';

export default function Section2() {
    return (
        <div className="contact-map-page">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.289547578316!2d-6.873503824389041!3d33.95539442137035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76c95cb7c6a73%3A0xbddcc9a3f6ddc2f7!2sHay%20Riad%2C%20Rabat%2C%20Maroc!5e0!3m2!1sfr!2sma!4v1693500000000!5m2!1sfr!2sma"
             width="600"
             height="450"
             style={{ border: 0 }}
             allowFullScreen={true}
             loading="lazy"
             referrerPolicy="no-referrer-when-downgrade"  
             />
         </div>

    );
}
