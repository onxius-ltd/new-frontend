// ─── Inline error message ─────────────────────────────────────────────────────
const FieldError = ({ msg }: { msg?: string }) =>
      msg ? (
            <p className="text-xs pl-1 mt-1 text-rose-700"
            // style={{ color: "var(--dark-blue-clr)" }}
            >
                  {msg}
            </p>
      ) : null;

export default FieldError;