import { CDN_URL } from '../utils/constants';

const ItemList = ({ items }) => {
    return (
        <div>
            {items.map((item) => (
                <div className="m-2 border-gray-200 border-b-2 text-left flex justify-between" key={item.card.info.id}>
                    <div className="w-9/12">
                        <div className="p-2">
                            <span className="mr-2">{item.card.info.name}</span>
                            <span> - {item.card.info.price / 100}₹</span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button className="p-2 shadow-lg mx-16 bg-white text-black rounded-lg">Add+</button>
                        </div>
                        <img className="w-40" src={`${CDN_URL}/${item.card.info.imageId}`} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
