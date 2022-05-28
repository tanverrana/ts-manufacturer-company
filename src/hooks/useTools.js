import { useEffect, useState } from "react";

const useTools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch("https://glacial-lowlands-56001.herokuapp.com/tool")
            .then(res => res.json())
            .then(data => setTools(data));
    }, []);
    return [tools, setTools];
}

export default useTools;