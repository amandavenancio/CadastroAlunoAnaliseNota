type InitialMessageProps = {
  message: string;
};

export const InitialMessage = ({ message }: InitialMessageProps) => {
  return (
    <div>
      <p>Olá, bem-vindo(a)!</p>
      <p>{message}</p>
    </div>
  );
};