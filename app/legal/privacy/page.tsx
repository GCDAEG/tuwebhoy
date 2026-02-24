export default function PoliticaPrivacidad() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl prose prose-slate">
      <h1 className="text-4xl font-bold mb-8">Política de Privacidad</h1>
      <p className="text-sm text-gray-500 mb-8">
        Última actualización: {new Date().toLocaleDateString("es-AR")}
      </p>
      <p>
        En [Nombre del Estudio] respetamos tu privacidad. Esta política explica
        cómo manejamos la información que nos compartís al contactarnos por
        WhatsApp o mediante cualquier medio en este sitio.
      </p>
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Información que recopilamos
      </h2>
      <p>
        Solo recopilamos los datos que vos nos brindás voluntariamente al
        escribirnos: nombre, número de teléfono, email (si lo compartís) y el
        contenido de tu consulta.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Cómo usamos tu información
      </h2>
      <p>
        Únicamente para responder tu consulta y, si corresponde, prestarte
        servicios legales. No compartimos ni vendemos tus datos a terceros.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies</h2>
      <p>
        Este sitio no utiliza cookies de seguimiento ni analíticas. Solo cookies
        técnicas esenciales para el funcionamiento básico (si las hubiera).
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Tus derechos</h2>
      <p>
        Podés ejercer tus derechos de acceso, rectificación, cancelación y
        oposición enviándonos un mensaje a [tu email o WhatsApp].
      </p>

      <p className="mt-12 text-sm text-gray-500">
        Cualquier duda, escribinos directamente por WhatsApp.
      </p>
    </div>
  );
}
