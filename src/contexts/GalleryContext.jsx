import { createContext, useMemo, useState } from 'react';
import { useAxios } from '../hooks/useAxios';

export const GalleryContext = createContext(null);

const GalleryProvider = ({ children }) => {
    const url = `https://pixabay.com/api/?key=45297051-2d96f9c98d89af3f97081c87c&q=porsche&image_type=photo&pretty=true`;
    const { data, loading, error } = useAxios(url);
    const value = useMemo(() => ({ data, loading, error }), [data, loading, error]);
    return <GalleryContext.Provider value={value}>{children}</GalleryContext.Provider>;
};

export default GalleryProvider;
