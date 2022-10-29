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
    default:
      resTitle = 'Unknown request status:';
  }

  return resTitle;
};

export default responseStatusTitle;
