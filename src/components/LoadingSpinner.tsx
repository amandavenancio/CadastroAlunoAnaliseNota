export const LoadingSpinner = ({ message = "Carregando..." }: { message?: string }) => (
  <div className="flex flex-col items-center justify-center gap-4 py-10 text-red-500">
    <div className="w-10 h-10 border-4 border-red-300 border-t-transparent rounded-full animate-spin" />
    <p className="font-semibold animate-fade-in">{message}</p>
  </div>
);