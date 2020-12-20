import {store} from "../App";
import {countItem} from "../actions";

export const paginationPipe = (items, {perPage, currentPage}) => {
    if (!perPage || !currentPage) {
        return items
    }
    const from = (perPage * (currentPage - 1)) || 0

    return items.slice(from, from + perPage);
};

