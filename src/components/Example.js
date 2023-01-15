import UseJsonFetch from "./UseJsonFetch";
import PropTypes from 'prop-types';

export default function Example({endpoint}) {
    const [data, error, loading] = UseJsonFetch(`http://localhost:7070/${endpoint}`);
    //console.log(error);
     return (
         <div>
             {(loading && 'Loading...') || (data && data.status) || (error && 'Ошибка!')}
         </div>
    );
}

Example.propTypes = {
    endpoint: PropTypes.string.isRequired,
}

