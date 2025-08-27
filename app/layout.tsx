import "/public/assets/css/bootstrap.min.css";
import "/public/assets/css/fontawesome.css";
import "/public/assets/css/magnific-popup.css";
import "/public/assets/css/nice-select.css";
import "/public/assets/css/slick-slider.css";
import "/public/assets/css/aos.css";
import "/public/assets/css/mobile-menu.css";
import "/public/assets/css/main.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atlas Consulting IT - Formation, Réseaux, Cybersécurité & IA",
  description:
    "Atlas Consulting IT accompagne entreprises et professionnels dans leur transformation digitale grâce à la formation, l’installation de solutions réseaux et télécoms, la cybersécurité et l’intelligence artificielle.",
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="body">{children}</body>
        </html>
    );
}
