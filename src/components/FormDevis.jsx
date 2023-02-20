
const FormDevis = (props) => {
    
    return (
        <div className="">
            <span className="inline-grid grid-cols-2">
                {props.children}
                <h2 className="text-2xl font-bold pt-4 pb-10 text-gray-800 relative">Nous contacter par ecris</h2>
            </span>
            <form action="" method="get" className="flex flex-col space-y-8 mb-4 sm:w-full pr-2 pl-2">

                <input type="text" name="name" placeholder="Votre Nom" required data-error="Ne laissez pas les champs vide"
                    className="w-full  pt-2  h-12 border-2 border-gray-200 focus:border-4 focus:border-b-red-400 rounded-md"
                />
                <input className="pt-2  h-12 border-2 border-gray-200 focus:border-4 focus:border-b-red-400 rounded-md" type="email" name="email"  placeholder="Votre Email" required data-error="Ne laissez pas les champs vide" />
                <input className="pt-2  h-12 border-2 border-gray-200 focus:border-4 focus:border-b-red-400 rounded-md" type="tel" name="tel" placeholder="Votre Telephone" required data-error="Ne laissez pas les champs vide" />
                <select  name="Dtype"  required="" className="text-gray-900 pt-2 h-12 border-2 border-gray-200 rounded-md">
                    <option value="">Selectionnez votre demande</option>
                    <option value="web">Site Web Vitrine</option>
                    <option value="graphic">Site Web E-commerce</option>
                    <option value="video">Autre</option>
                </select>
                <textarea className="pt-2 pb-2 h-32 border-2 border-gray-200 focus:border-4 focus:border-b-red-400 rounded-lg" placeholder="Entrez votre message : "/>
                
                <button className="button w-full bg-red-400 h-12 rounded-3xl hover:bg-red-500" type="submit">Confirmer</button>
            </form>
        </div>
    );
}

export default FormDevis;