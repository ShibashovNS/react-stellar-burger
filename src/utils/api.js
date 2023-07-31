export const BASE_URL = "https://norma.nomoreparties.space/api";

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  /*при ошибке отклоняю промис*/
  return Promise.reject(`Ошибка: ${res.status}`);
}

//делаю обертку вокруг fetch чтобы в разных запросах можно было использовать, url базовый статичный, меняется только endpoint в этом api
export function request(endpoint, options) {
  return fetch(`${BASE_URL}${endpoint}`, options).then(checkResponse);
}

// async нужен когда несколько await поэтому убрал от сюда + а далее передаю рес, но его убрал т.к в стрелочной функции рес передается один и тотже в функицию
export const getEngredients = () => request(`/ingredients`);

export const sendOrder = (dataId) => {
  return request(`/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ingredients: dataId,
    }),
  });
};
