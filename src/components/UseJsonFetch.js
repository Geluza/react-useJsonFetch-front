import { useEffect, useState } from "react";

export default function UseJsonFetch(url, opts={}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setData(data);
        })
        .catch((error) => {
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        })
    });

    return [data, error, loading];
}