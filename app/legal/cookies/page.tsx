export default function PoliticaCookies() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl prose prose-slate">
      <h1 className="text-4xl font-bold mb-8">Política de Cookies</h1>
      <p className="text-sm text-gray-500 mb-8">
        Última actualización: {new Date().toLocaleDateString("es-AR")}
      </p>

      <p>
        Este sitio web **no utiliza cookies de seguimiento ni analíticas de
        terceros** (como Google Analytics, Meta Pixel u otras herramientas
        similares).
      </p>

      <p>
        Solo se utilizan cookies técnicas esenciales para el correcto
        funcionamiento del sitio (navegación, seguridad básica), si las hubiera.
      </p>

      <p>
        Por lo tanto, **no es necesario consentimiento para cookies** ni banner
        de aceptación.
      </p>

      <p className="mt-8">
        Si en el futuro incorporamos cookies no esenciales, actualizaremos esta
        política y solicitaremos tu consentimiento explícito.
      </p>
    </div>
  );
}
