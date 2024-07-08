/* eslint-disable react/prop-types */
import styles from './styles.module.css';

const FilterType = ({setSearchParams}) => {
    const handleFilterChange = (event) => {
        event.preventDefault();
        console.log(event.target.value)
        setSearchParams({type: event.target.value});
    }
    return (
        <div>
            <form className={styles.form}>
                <label>Sort by</label>
                <select id="types" name="types" onChange={handleFilterChange}>
                    <option value="newest">Newest</option>
                    <option value="latest">Latest</option>
                    <option value="topview">Topview</option>
                </select>
            </form>
        </div>
    );
};
export default FilterType
