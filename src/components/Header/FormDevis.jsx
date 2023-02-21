const FormDevis = ({visible,activeNav}) => {
  return (
    <div className={`${visible  ? "block" : " hidden"}`}>
      <h2 className="text-3xl font-bold pt-4 pb-10 text-gray-800 relative">Nous contacter par ecris</h2>
      <form
        action=""
        method="get"
        className="flex items-center flex-col text-slate-900 space-y-8 mb-4 w-full pr-2 pl-2"
      >
        <div className="group w-full outline-transparent bg-white py-1  outline outline-2 shadow-sm focus-within:outline-sky-400 transition-all ease-in-out duration-300   h-12  items-center      rounded-lg">
          <input
            type="text"
            name="name"
            placeholder="Votre Nom"
            required
            data-error="Ne laissez pas les champs vide"
            className="h-full pl-4 outline-none  w-full"
          />
        </div>
        <div className="group w-full outline-transparent bg-white py-1  outline outline-2 shadow-sm focus-within:outline-sky-400 transition-all ease-in-out duration-300   h-12  items-center      rounded-lg">
          <input
            type="email"
            name="email"
            placeholder="Votre Email"
            required
            data-error="Ne laissez pas les champs vide"
            className="h-full pl-4 outline-none  w-full"
          />
        </div>
        <div className="group w-full outline-transparent bg-white py-1  outline outline-2 shadow-sm focus-within:outline-sky-400 transition-all ease-in-out duration-300   h-12  items-center      rounded-lg">
          <input
            type="tel"
            name="tel"
            placeholder="Votre Telephone"
            required
            data-error="Ne laissez pas les champs vide"
            className="h-full pl-4 outline-none  w-full"
          />
        </div>

        <div className="group w-full outline-transparent bg-white py-1  outline outline-2 shadow-sm focus-within:outline-sky-400 transition-all ease-in-out duration-300   h-12  items-center      rounded-lg">
          <select name="Dtype" required className="h-full pl-4 outline-none  w-full">
            <option value="">Selectionnez votre demande</option>
            <option value="web">Site Web Vitrine</option>
            <option value="graphic">Site Web E-commerce</option>
            <option value="video">Autre</option>
          </select>
        </div>


        <div className="group w-full outline-transparent bg-white py-1  outline outline-2 shadow-sm focus-within:outline-sky-400 transition-all ease-in-out duration-300 resize-none   h-24  items-center      rounded-lg">
          <textarea className="h-full pl-4 outline-none resize-none  w-full" placeholder="Entrez votre message : " />
        </div>

        <button
          type="submit"
          className="grid place-items-center h-12 w-full max-w-xs rounded-full relative overflow-hidden transition-all group font-bold text-sm duration-500 ease-in-out   text-white uppercase bg-gradient-to-r from-sky-400  to-blue-400"
        >
          <div className="w-12 h-12 group-hover:scale-[2.75] transition-all duration-500 ease-in-out rounded-full bg-purple-200  md:bg-opacity-20 bg-opacity-20 absolute -right-6 -top-6 "></div>
        envoyer
        </button>
      </form>
    </div>
  );
};

export default FormDevis;
