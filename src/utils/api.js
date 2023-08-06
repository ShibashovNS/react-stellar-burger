import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAuthChecked, setUser } from "../services/store/reducers/userAuthSlice/userAuthSlice";

export const BASE_URL = "https://norma.nomoreparties.space/api";

export function checkResponse(res) {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
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

//запрос на регистрацию
export const registerUser = createAsyncThunk(
  "user/register",
  async (userData, { dispatch }) => {
    return request(`/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        if (res.success) {
          localStorage.setItem("accessToken", res.accessToken);
          localStorage.setItem("refreshToken", res.refreshToken);
          return res;
        } else {
          return Promise.reject("Ошибка данных с сервера");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("Ok");
      });
  }
);

//запрос на авторизацию
export const loginUser = createAsyncThunk(
  "user/login",
  async (data, { dispatch }) => {
    return request("/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    })
      .then((res) => {
        if (res.success) {
          localStorage.setItem("accessToken", res.accessToken);
          localStorage.setItem("refreshToken", res.refreshToken);
          return res;
        } else {
          return Promise.reject("Ошибка данных с сервера");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("Ok");
      });
  }
);

// запрос на получение токенов через рефреш токен
const refreshToken = () => {
    return request(`/auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken")
      })
    })
};

const fetchWithRefresh = async (url, options) => {
  try {
    const res = await fetch(url, options);
    console.log(res)
    return await checkResponse(res);
    
  } catch (err) {
    console.log(err)
    if (err.message === "jwt expired") {
      const refreshData = await refreshToken();
      console.log(refreshData)
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem("accessToken", refreshData.accessToken);
      localStorage.setItem("refreshToken", refreshData.refreshToken);
      options.headers.authorization = refreshData.accessToken;
      const res = await fetch(url, options);
      return await checkResponse(res);
    } else {
      return Promise.reject(err);
    }
  }
};

export const getUser = () => {
  return (dispatch) => {
    return fetchWithRefresh("https://norma.nomoreparties.space/api/auth/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("accessToken")
      }
    }).then((res) => {
      console.log(res)
      if (res.success) {
        dispatch(setUser(res.user));
      } else {
        return Promise.reject("Ошибка данных с сервера");
      }
    });
  };
};


export const checkUserAuth = createAsyncThunk(
  "user/auth",
  async (_, { dispatch }) => {
    if (localStorage.getItem("accessToken")) {
      dispatch(getUser())
        .catch((error) => {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          dispatch(setUser(null));
        })
        .finally(() => dispatch(setAuthChecked(true)));
    } else {
      dispatch(setAuthChecked(true));
      dispatch(setUser(null));
    }
  }
)

export const forgotPassword = ( {email} ) => {
  return request(`/password-reset` , {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email}),
  }
  )
};

export const resetPassword = ( {data} ) => {
  return request(`/password-reset/reset` , {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({data}),
  }
  )
};

export const logoutUser = createAsyncThunk(
  "user/logout",
  async (_, { dispatch }) => {
  return request(`/auth/logout` , {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ token: localStorage.getItem('refreshToken') }),
  }
  )
})