type Props = {
  status: number;
};

export const ErrorHandler = ({ status }: Props) => {
  const defaultElement = <div>Error generico</div>;
  const statusElement: { [key: number]: JSX.Element } = {
    404: <div>Error 404</div>,
    500: <div>Error 500</div>,
  };
  return statusElement[status] || defaultElement;
};
