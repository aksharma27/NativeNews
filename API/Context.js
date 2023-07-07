import { createContext, useState } from "react";

export const NewsContext = createContext();

const Context = ({children}) => {
    const[news, setNews] = useState([]);
    const [category, setCategory] = useState("general");
    const [index, setIndex] = useState(1);

    const fetchNews = async () => {
        const {data} = await axios.get()
    }

    return (
        <NewsContext.Provider value={{news, index,setIndex}}>
            {children}
        </NewsContext.Provider>
    )
};

export default Context;