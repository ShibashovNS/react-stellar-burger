export const BASE_URL = "https://norma.nomoreparties.space/api";

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  /*при ошибке отклоняю промис*/
  return Promise.reject(`Ошибка: ${res.status}`);
}
