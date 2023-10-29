import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../lib/context/AuthContext";
import { useEffect, useRef } from "react";

export default function Login() {
  const navigate = useNavigate();
  const { user, loginUser } = useAuth();

  const loginForm = useRef(null);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const email = loginForm.current.email.value;
    const password = loginForm.current.password.value;
    // const name

    const userInfo = { email, password };
    loginUser(userInfo);
  }

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="max-w-xl w-full space-y-8 p-7 md:shadow-sm rounded-md">
        <div className="bg-darkgreen p-5 rounded-xl">
          <h2 className="text-center text-4xl font-semibold text-platinum">
            Banho<span className="text-mindaro">Verde</span>
          </h2>
        </div>

        <form autoComplete="off" ref={loginForm} onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className="col-span-full">
              <label
                className="block mb-3 text-sm font-medium text-gray-600"
                htmlFor="email"
              >
                Email:
              </label>

              <input
                className="block w-full px-6 py-3 text-night bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-mindaro focus:outline-none focus:ring-mindaro sm:text-sm"
                placeholder="Seu email"
                type="email"
                id="email"
                required
              />
            </div>

            <div className="col-span-full">
              <label
                className="block mb-3 text-sm font-medium text-gray-600"
                htmlFor="password"
              >
                Senha:
              </label>

              <input
                className="block w-full px-6 py-3 text-night bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-mindaro focus:outline-none focus:ring-mindaro sm:text-sm"
                placeholder="Sua senha"
                type="password"
                id="password"
                required
              />
            </div>

            <div className="col-span-full">
              <button
                className="text-lg font-medium items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-darkgreen border-2 border-darkgreen rounded-lg inline-flex hover:bg-transparent hover:border-darkgreen hover:text-darkgreen focus:outline-none focus-visible:outline-darkgreen  focus-visible:ring-darkgreen"
                type="submit"
              >
                Login
              </button>
            </div>

            <div>
              <p className="flex gap-2 text-night font-medium">
                Não possui uma conta?
                <Link to="/register" className="text-green-700 underline">
                  Registrar
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
