type InitialMessageProps = {
  message: string;
};

export const InitialMessage = ({ message }: InitialMessageProps) => {
  return (
    <div className="flex flex-col w-full max-w-md items-center">
      <p className="font-bold text-2xl text-center text-red-500">Olá, bem-vindo(a)!</p>
      <p className="font-bold mt-4 text-sm">{message}</p>
    </div>
  );
};