export default function Terminos() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl prose prose-slate">
      <h1 className="text-4xl font-bold mb-8">Términos y Condiciones</h1>

      <p className="text-sm text-gray-500 mb-8">
        Última actualización: {new Date().toLocaleDateString("es-AR")}
      </p>

      <p>
        El uso de este sitio web implica la aceptación de los siguientes
        términos:
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        1. Información del sitio
      </h2>

      <p>
        Este sitio tiene carácter informativo. No constituye asesoramiento legal
        ni genera relación comercial hasta que exista un acuerdo explícito.
        TUWEBHOY ofrece servicios de diseño y desarrollo web.
      </p>

      <p>
        Nos reservamos el derecho de actualizar estos términos sin previo aviso.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Contacto</h2>

      <p>
        Las consultas enviadas por WhatsApp o cualquier medio son gratuitas y no
        obligan a contratar servicios. Toda relación profesional se pacta por
        separado.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Responsabilidad</h2>

      <p>
        No nos hacemos responsables por el mal uso de la información publicada
        ni por decisiones tomadas sin una contratación previa del servicio.
      </p>

      <p className="mt-12 text-sm text-gray-500">
        Para cualquier consulta, contactanos directamente por WhatsApp.
      </p>
    </div>
  );
}
