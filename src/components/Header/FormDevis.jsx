import { addReply } from "queries";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
const FormDevis = ({ visible, activeNav }) => {
  const [Loading, setLoading] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const router = useRouter();
  const Submit = (data) => {
    // addReply(e.target.value)
    console.log(data)
    addReply({ ...data, action: "addContact", state: "new", page: router.asPath })
      .then((res) => res.json())
      .then((res) => setLoading(res.message));
  };
  return (
    <div className={`${visible ? "block" : " hidden"}`}>
      <h2 className="text-3xl font-bold pt-4 pb-10  text-gray-800 relative">Nous contacter par ecris</h2>
      <form
        onSubmit={handleSubmit(Submit)}
        className="flex items-center flex-col  text-slate-900 space-y-8 mb-4 w-full pr-2 pl-2"
      >
        <div className="group w-full outline-transparent shadow-md bg-white overflow-hidden  outline outline-2  focus-within:outline-sky-400 transition-all ease-in-out duration-300   h-12  items-center      rounded-lg">
          <input
            type="text"
            name="name"
            placeholder="Votre Nom"
            {...register("name")}
            required
            data-error="Ne laissez pas les champs vide"
            className="h-full pl-4 outline-none  w-full"
          />
        </div>
        <div className="group w-full outline-transparent shadow-md bg-white overflow-hidden  outline outline-2  focus-within:outline-sky-400 transition-all ease-in-out duration-300   h-12  items-center      rounded-lg">
          <input
            type="email"
            name="email"
            placeholder="Votre Email"
            {...register("email")}
            required
            data-error="Ne laissez pas les champs vide"
            className="h-full pl-4 outline-none  w-full"
          />
        </div>
        <div className="group w-full outline-transparent shadow-md bg-white overflow-hidden  outline outline-2  focus-within:outline-sky-400 transition-all ease-in-out duration-300   h-12  items-center      rounded-lg">
          <input
            type="tel"
            name="num"
            placeholder="Votre Telephone"
            {...register("num")}
            required
            data-error="Ne laissez pas les champs vide"
            className="h-full pl-4 outline-none  w-full"
          />
        </div>

        <div className="group w-full outline-transparent shadow-md bg-white overflow-hidden  outline outline-2  focus-within:outline-sky-400 transition-all ease-in-out duration-300   h-12  items-center      rounded-lg">
          <select
            {...register("subject")}
            name="subject"
            required
            className="h-full pl-4 outline-none  w-full"
          >
            <option value="notSelected">Selectionnez votre demande</option>
            <option value="web">Site Web Vitrine</option>
            <option value="graphic">Site Web E-commerce</option>
            <option value="video">Autre</option>
          </select>
        </div>

        <div className="group w-full outline-transparent shadow-md bg-white overflow-hidden  outline outline-2  focus-within:outline-sky-400 transition-all ease-in-out duration-300 resize-none   h-24  items-center      rounded-lg">
          <textarea
            {...register("message")}
            className="h-full pt-4 pr-2 pl-4 outline-none resize-none  w-full"
            placeholder="Entrez votre message : "
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitSuccessful}
          className="grid disabled:from-green-400 disabled:to-green-600 disabled:cursor-not-allowed place-items-center h-12 w-full max-w-xs rounded-full relative overflow-hidden transition-all group font-bold text-sm duration-500 ease-in-out   text-white uppercase bg-gradient-to-r from-sky-400  to-blue-400"
        >
          <div className="w-12 h-12 group-hover:scale-[2.75] transition-all duration-500 ease-in-out rounded-full bg-purple-200  md:bg-opacity-20 bg-opacity-20 absolute -right-6 -top-6 "></div>
          <span>{isSubmitSuccessful ? "merci" :"envoyer"}</span>
        </button>
      </form>
    </div>
  );
};

export default FormDevis;
