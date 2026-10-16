
import { site } from "../data/site";

const DEFAULT_MESSAGE =
    "Hola, Emilio. Quisiera consultar información sobre tus clases particulares virtuales.";

export function getWhatsAppLink(message?: string): string {
    const text = message ?? DEFAULT_MESSAGE;

    return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
