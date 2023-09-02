import { dataUser } from "../../../../utils/const";
import userSlice, { initialState } from "./userAuthSlice";

describe("userSlice", () => {
  it("Загрузка данных", () => {
    expect(
      userSlice(initialState, {
        type: "user/register/pending",
      })
    ).toEqual({
      user: null,
      isAuthChecked: false,
      isLoding: true,
      error: " ",
    });
  });

  it("Данные загружены", () => {
    expect(
      userSlice(initialState, {
        type: "user/register/fulfilled",
        payload: dataUser,
      })
    ).toEqual({
      user: dataUser.user,
      isAuthChecked: true,
      isLoding: false,
      error: " ",
    });
  });

  it("Ошибка получения данных", () => {
    expect(
      userSlice(initialState, {
        type: "user/register/rejected",
        payload: "Ошибка",
      })
    ).toEqual({
      user: null,
      isAuthChecked: false,
      isLoding: false,
      error: "Ошибка",
    });
  });
});
