import { useEffect, useState } from "react";
import PhoneCard from "../components/PhoneCard";
import { getFavorites, removeFavorites } from "../utils";
import EmptyState from "../components/ui/EmptyState";
const Favorites = () => {
  const [displayPhones, setDisplayPhones] = useState([]);
  useEffect(() => {
    const savePhones = getFavorites();
    setDisplayPhones(savePhones);
  }, []);
  const handleDelate = (id) => {
    removeFavorites(id);
    setDisplayPhones(getFavorites());
  };
  if (displayPhones.length < 1) return <EmptyState />;
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {displayPhones.map((phone) => (
          <PhoneCard
            key={phone.id}
            phone={phone}
            deletable={true}
            handleDelate={handleDelate}
          ></PhoneCard>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
