const postFetch = async (endpoint: string, data: object) => {
  const options = {
    method: 'POST',
    credentials: 'include',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  const res = await fetch(
    `${process.env.REACT_APP_SERVER_ADDRESS}${endpoint}`,
    options as RequestInit,
  );
  return res.json();
};

export default postFetch;
