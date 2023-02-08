import DogWalking from "@/components/DogWalking";
import Header from "@/components/Header";
import PetSitting from "@/components/PetSitting";
import ServicesHero from "@/components/ServicesHero";
import WasteCleanups from "@/components/WasteCleanups";

const initial = false;

const Services = () => {
  return (

    <main
      className="h-screen
       text-white
        bg-gradient-to-r from-indigo-500 to-blue-500
        snap-y snap-mandatory
        overflow-scroll overflow-x-hidden"
    >
      <Header initial={initial} />
      <ServicesHero />
      <DogWalking />
      <WasteCleanups />
      <PetSitting />
    </main>

  );
}

export default Services;