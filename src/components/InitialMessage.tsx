type InitialMessageProps = {
  message: string;
};

export const InitialMessage = ({ message }: InitialMessageProps) => {
  return (
    <div className="flex flex-col items-center text-center bg-white border border-red-200 rounded-2xl shadow-md p-6 w-full max-w-md animate-fade-in">
      <p className="text-2xl font-extrabold text-red-600 mb-2">👋 Olá, bem-vindo(a)!</p>
      <p className="text-base text-gray-700 font-medium">{message}</p>
    </div>
  );
};