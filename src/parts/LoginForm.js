import React from "react";
import { withRouter } from "react-router-dom";
import users from "constants/api/users";
import { setAuthorizationHeader } from "configs/axios";
import { useDispatch } from "react-redux";
import { populateProfile } from "store/actions/users";
import useForm from "helpers/hooks/useForm";

function LoginForm({ history }) {
  const dispatch = useDispatch();

  const [{ email, password }, setState] = useForm({
    email: "",
    password: "",
  });

  function submit(e) {
    e.preventDefault();

    users
      .login({
        email,
        password,
      })
      .then((res) => {
        setAuthorizationHeader(res.data.token);
        users.details().then((detail) => {
          dispatch(populateProfile(detail.data));
          const production =
            process.env.REACT_APP_FRONTPAGE_URL ===
            "https://micro.buildwithangga.id"
              ? "Domain = micro.buildwithangga.id"
              : "";
          localStorage.setItem(
            "MICRO:token",
            JSON.stringify({
              ...res.data,
              email: email,
            })
          );

          const redirect = localStorage.getItem("MICRO:redirect");
          const userCookie = {
            name: detail.data.name,
            thumbnail: detail.data.avatar,
          };

          const expires = new Date(
            new Date().getTime() + 7 * 24 * 60 * 60 * 1000
          );

          document.cookie = `MICRO:user=${JSON.stringify(
            userCookie
          )}; expires=${expires.toUTCString()}; path:/; ${production}`;

          history.push(redirect || "/");
        });
      })
      .catch((err) => {});
  }

  return (
    <div className="flex justify-center items-center pb-24">
      <div className="w-full sm:w-3/12">
        <h1 className="text-4xl text-gray-900 mb-6">
          <span className="font-bold">Continue</span> Study, <br />
          Finish Your <span className="font-bold">Goals</span>
        </h1>

        <form onSubmit={submit}>
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-lg mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              onChange={setState}
              className="bg-white focus:outline-none border w-full px-6 py-3 border-gray-600 focus:border-teal-500"
              value={email}
              placeholder="Your email address"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="password" className="text-lg mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={setState}
              className="bg-white focus:outline-none border w-full px-6 py-3 border-gray-600 focus:border-teal-500"
              value={password}
              placeholder="Your password"
            />
          </div>

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 w-full mt-4"
          >
            Masuk
          </button>
        </form>
      </div>

      <div className="w-1/12 hidden sm:block"></div>

      <div className="w-5/12 hidden sm:flex justify-end pt-24 pr-16">
        <div className="relative" style={{ width: 369, height: 440 }}>
          <div
            className="absolute border-2 border-indigo-700 -mt-8 -ml-16 left-0"
            style={{ width: 324, height: 374 }}
          ></div>
          <div className="absolute w-full h-full -mb-8 -ml-8">
            <img
              src="/assets/images/tamara-caem.jpg"
              alt="Mbak tamara caem juga"
            />
          </div>
          <div
            className="absolute z-10 bg-white bottom-0 right-0 py-3 px-4 -mr-12"
            style={{ width: 290 }}
          >
            <p className="text-gray-900 mb-2">
              Metode belajar yang santai seperti nonton drakor di Netflix
            </p>
            <span className="text-gray-600">Tamara, UI/UX Designer</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(LoginForm);
