export const registerUser = user => {
  return fetch('/api/users/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const signin = (userId, token) => {
  console.log(userId, token);
  return fetch("http://localhost:5000/api/verify", {
    method: 'POST',
    headers: {
			Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userId: userId,
      token: token
    })
  }).then(res => {
    return res.json();
  })
  // Note: it's important to handle errors here
  // instead of a catch() block so that we don't swallow
  // exceptions from actual bugs in components.
}

export const signout = () => {
  return fetch('/auth/signout/', {
    method: 'GET'
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};