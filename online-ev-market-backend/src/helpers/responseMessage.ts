import responseStatusTitle from './responseStatusTitle';

type ResponseMessageProps = {
  title: string;
  message: string;
  payload?: object;
};

const responseMessage = (
  status: number,
  message: string,
  payload?: Object,
): ResponseMessageProps => ({
  title: responseStatusTitle(status),
  message,
  payload,
});

export default responseMessage;
