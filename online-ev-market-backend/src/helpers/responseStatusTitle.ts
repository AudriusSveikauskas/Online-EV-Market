const responseStatusTitle = (status: number) => {
  let resTitle;
  switch (status) {
    case 200:
      resTitle = 'The request has succeeded:';
      break;
    case 400:
      resTitle =
        'The server cannot or will not process the request due to an error:';
      break;
    case 401:
      resTitle = 'You are not authorized to view this page:';
      break;
    case 500:
      resTitle =
        'The server encountered an unexpected condition which prevented it from fulfilling the request:';
      break;
    default:
      resTitle = 'Unknown request status:';
  }

  return resTitle;
};

export default responseStatusTitle;
